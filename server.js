
const express = require('express');
const axios = require('axios');
const path = require('path');
const cheerio = require('cheerio');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Location search endpoint
app.get('/api/search-location', async (req, res) => {
    const { search } = req.query;

    if (!search) {
        return res.status(400).json({ error: 'Missing search parameter' });
    }

    try {
        const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error searching location:', error.message);
        res.status(500).json({ error: 'Failed to search location. Try again later.' });
    }
});

// Panchang API endpoint
app.get('/api/panchang', async (req, res) => {
    const { date, geonameId, lang } = req.query;

    if (!date || !geonameId || !lang) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Format the date as required by the website (DD/MM/YYYY)
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            },
        });

        const html = response.data;
        const $ = cheerio.load(html);
        const result = {};

        $('.dpTableRow').each((_, row) => {
            const keyElement = $(row).find('.dpTableKey');
            const valueElement = $(row).find('.dpTableValue');

            const key = keyElement.text().trim();
            const value = valueElement.contents()
                .map((_, el) => $(el).text().trim())
                .get()
                .filter(text => text)
                .join(' ');

            if (key && value) {
                result[key] = value;
            }
        });

        res.json(result);
    } catch (error) {
        console.error('Error fetching Panchang data:', error.message);
        res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
