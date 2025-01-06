// // const express = require('express');
// // const axios = require('axios');
// // const path = require('path');
// // const app = express();

// // // Serve static files
// // app.use(express.static(path.join(__dirname, 'public')));

// // // API endpoint to fetch Panchang data
// // app.get('/api/panchang', async (req, res) => {
// //   try {
// //     const { date, geonameId } = req.query;
// //     const url = `https://www.drikpanchang.com/panchang/month-panchang.html?date=${date}&geoname-id=${geonameId}&lang=hi`;
    
// //     const response = await axios.get(url);
// //     res.send(response.data);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error fetching Panchang data' });
// //   }
// // });

// // // Start server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });


// const express = require('express');
// const axios = require('axios');
// const path = require('path');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // API endpoint to fetch Panchang data
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang } = req.query;
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${date}&geoname-id=${geonameId}&lang=${lang}`;

//     try {
//         const response = await axios.get(url);
//         const htmlString = response.data;

//         // Parse HTML to JSON
//         const jsonResult = parseHTMLTableToJSON(htmlString);
//         res.json(jsonResult);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error fetching Panchang data' });
//     }
// });

// // Function to parse HTML table to JSON
// function parseHTMLTableToJSON(htmlString) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlString, 'text/html');

//     const rows = doc.querySelectorAll('.dpTableRow');
//     const result = {};

//     rows.forEach(row => {
//         const keyElement = row.querySelector('.dpTableCell.dpTableKey');
//         const valueElement = row.querySelector('.dpTableCell.dpTableValue');

//         if (keyElement && valueElement) {
//             const keyText = keyElement.textContent.trim();
//             const valueText = Array.from(valueElement.childNodes)
//                 .map(node => node.nodeType === Node.TEXT_NODE ? node.textContent.trim() : (node.tagName === 'SPAN' ? node.textContent.trim() : ''))
//                 .filter(text => text.length > 0)
//                 .join(' ');

//             if (keyText && valueText) {
//                 result[keyText] = valueText;
//             }
//         }
//     });

//     return result;
// }

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));









// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

// // API endpoint for Panchang
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang } = req.query;

//     if (!date || !geonameId || !lang) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${date}&geoname-id=${geonameId}&lang=${lang}`;

//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);

//         const result = {};
//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) result[key] = value;
//         });

//         res.json(result);
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error);
//         res.status(500).json({ error: 'Failed to fetch Panchang data' });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));



// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Construct the URL
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${date}&geoname-id=${geonameId}&lang=${lang}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache', // Disable caching
//                 'User-Agent': 'Mozilla/5.0', // Mimic a browser request
//             },
//         });
//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result); // Send the parsed JSON data
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));






// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date as required by the website (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Construct the URL with the formatted date
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });
//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result); // Send the parsed JSON data
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Location search endpoint
// app.get('/api/search-location', async (req, res) => {
//     const { search } = req.query;

//     if (!search) {
//         return res.status(400).json({ error: 'Missing search parameter' });
//     }

//     try {
//         const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         res.json(response.data);
//     } catch (error) {
//         console.error('Error searching location:', error.message);
//         res.status(500).json({ error: 'Failed to search location. Try again later.' });
//     }
// });

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date as required by the website (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Construct the URL with the formatted date
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });
//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result); // Send the parsed JSON data
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));








// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Location search endpoint
// app.get('/api/search-location', async (req, res) => {
//     const { search } = req.query;

//     if (!search) {
//         return res.status(400).json({ error: 'Missing search parameter' });
//     }

//     try {
//         const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         res.json(response.data);
//     } catch (error) {
//         console.error('Error searching location:', error.message);
//         res.status(500).json({ error: 'Failed to search location. Try again later.' });
//     }
// });

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang, timezone } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang || !timezone) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date as required by the website (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Construct the URL with the formatted date and timezone
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}&tz=${timezone}`;

//     try {
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });
//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result);
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));









// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Location search endpoint
// app.get('/api/search-location', async (req, res) => {
//     const { search } = req.query;

//     if (!search) {
//         return res.status(400).json({ error: 'Missing search parameter' });
//     }

//     try {
//         const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         res.json(response.data);
//     } catch (error) {
//         console.error('Error searching location:', error.message);
//         res.status(500).json({ error: 'Failed to search location. Try again later.' });
//     }
// });

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date to match the required format (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Default time zone set to Asia/Kolkata
//     const timezone = 'Asia/Kolkata';

//     // Construct the URL with the formatted date and time zone
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}&tz=${timezone}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result); // Send the parsed JSON data
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');
// const moment = require('moment-timezone');  // Added moment-timezone to handle time zone calculations

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Location search endpoint
// app.get('/api/search-location', async (req, res) => {
//     const { search } = req.query;

//     if (!search) {
//         return res.status(400).json({ error: 'Missing search parameter' });
//     }

//     try {
//         const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         res.json(response.data);
//     } catch (error) {
//         console.error('Error searching location:', error.message);
//         res.status(500).json({ error: 'Failed to search location. Try again later.' });
//     }
// });

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang, timezone_offset, olson_timezone } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang || !timezone_offset || !olson_timezone) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date to match the required format (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Calculate the timezone offset (if not already provided in query)
//     const timezoneOffset = `UTC${timezone_offset >= 0 ? '+' : ''}${timezone_offset}`;

//     // Convert the date to the correct time zone
//     const localDate = moment(date).tz(olson_timezone).format('YYYY-MM-DD');

//     // Construct the URL with the formatted date and timezone
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}&tz=${olson_timezone}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         // Add time zone information to the result
//         result.timezone_offset = timezoneOffset;
//         result.olson_timezone = olson_timezone;

//         res.json(result); // Send the parsed JSON data with timezone info
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));







// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Location search endpoint
// app.get('/api/search-location', async (req, res) => {
//     const { search } = req.query;

//     if (!search) {
//         return res.status(400).json({ error: 'Missing search parameter' });
//     }

//     try {
//         const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         res.json(response.data);
//     } catch (error) {
//         console.error('Error searching location:', error.message);
//         res.status(500).json({ error: 'Failed to search location. Try again later.' });
//     }
// });

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang, timezone } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang || !timezone) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date as required by the website (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Construct the URL with the formatted date and timezone
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}&tz=${timezone}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result);
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Location search endpoint (Updated to use new API)
// app.get('/api/search-location', async (req, res) => {
//     const { search } = req.query;

//     if (!search) {
//         return res.status(400).json({ error: 'Missing search parameter' });
//     }

//     try {
//         // Fetch location data from the new API (https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php)
//         const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         // Send back the response from the external API
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error searching location:', error.message);
//         res.status(500).json({ error: 'Failed to search location. Try again later.' });
//     }
// });

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang, timezone } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang || !timezone) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date as required by the website (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Construct the URL with the formatted date and timezone
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}&tz=${timezone}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result);
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const cheerio = require('cheerio');

// const app = express();

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Location search endpoint (Updated to use new API)
// app.get('/api/search-location', async (req, res) => {
//     const { search } = req.query;

//     if (!search) {
//         return res.status(400).json({ error: 'Missing search parameter' });
//     }

//     try {
//         // Fetch location data from the new API (https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php)
//         const response = await axios.get(`https://www.drikpanchang.com/placeholder/ajax/geo/dp-city-search.php?search=${encodeURIComponent(search)}`, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         // Send back the response from the external API
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error searching location:', error.message);
//         res.status(500).json({ error: 'Failed to search location. Try again later.' });
//     }
// });

// // Panchang API endpoint
// app.get('/api/panchang', async (req, res) => {
//     const { date, geonameId, lang, timezone } = req.query;

//     // Validate input
//     if (!date || !geonameId || !lang || !timezone) {
//         return res.status(400).json({ error: 'Missing required parameters' });
//     }

//     // Format the date as required by the website (DD-MM-YYYY)
//     const formattedDate = new Date(date).toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     }).split('/').join('-');

//     // Construct the URL with the formatted date and timezone
//     const url = `https://www.drikpanchang.com/panchang/day-panchang.html?date=${formattedDate}&geoname-id=${geonameId}&lang=${lang}&tz=${timezone}`;

//     try {
//         // Fetch the HTML from the website
//         const response = await axios.get(url, {
//             headers: {
//                 'Cache-Control': 'no-cache',
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });

//         const html = response.data;

//         // Parse the HTML using Cheerio
//         const $ = cheerio.load(html);
//         const result = {};

//         $('.dpTableRow').each((_, row) => {
//             const key = $(row).find('.dpTableKey').text().trim();
//             const value = $(row).find('.dpTableValue').text().trim();
//             if (key && value) {
//                 result[key] = value;
//             }
//         });

//         res.json(result);
//     } catch (error) {
//         console.error('Error fetching Panchang data:', error.message);
//         res.status(500).json({ error: 'Failed to fetch Panchang data. Try again later.' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





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
