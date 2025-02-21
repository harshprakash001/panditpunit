// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const matchForm = document.getElementById('matchForm');
    if (matchForm) {
        matchForm.addEventListener('submit', handleSubmit);
    }

    const resultsContainer = document.getElementById('results');
    if (resultsContainer) {
        displayResults();
    }
});

async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        female: {
            year: parseInt(document.getElementById('femaleYear').value),
            month: parseInt(document.getElementById('femaleMonth').value),
            date: parseInt(document.getElementById('femaleDate').value),
            hours: parseInt(document.getElementById('femaleHours').value),
            minutes: parseInt(document.getElementById('femaleMinutes').value),
            seconds: 0,
            latitude: parseFloat(document.getElementById('femaleLatitude').value),
            longitude: parseFloat(document.getElementById('femaleLongitude').value),
            timezone: 5.5
        },
        male: {
            year: parseInt(document.getElementById('maleYear').value),
            month: parseInt(document.getElementById('maleMonth').value),
            date: parseInt(document.getElementById('maleDate').value),
            hours: parseInt(document.getElementById('maleHours').value),
            minutes: parseInt(document.getElementById('maleMinutes').value),
            seconds: 0,
            latitude: parseFloat(document.getElementById('maleLatitude').value),
            longitude: parseFloat(document.getElementById('maleLongitude').value),
            timezone: 5.5
        },
        config: {
            observation_point: "topocentric",
            language: "hi",
            ayanamsha: "lahiri"
        }
    };

    try {
        const response = await fetch('/api/match-making', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        localStorage.setItem('matchResults', JSON.stringify(data));
        window.location.href = 'results.html';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the results. Please try again.');
    }
}

function displayResults() {
    const resultsContainer = document.getElementById('results');
    const results = JSON.parse(localStorage.getItem('matchResults'));

    if (results && results.output) {
        const { output } = results;
        resultsContainer.innerHTML = `
            <div class="result-card">
                <h3>Overall Compatibility</h3>
                <p class="score">${output.total_score} / ${output.out_of}</p>
                <p>Total Score: ${output.total_score}</p>
                <p>Out of: ${output.out_of}</p>
            </div>
            ${Object.entries(output)
                .filter(([key]) => key !== 'total_score' && key !== 'out_of')
                .map(([key, value]) => `
                    <div class="result-card">
                        <h3>${formatTitle(key)}</h3>
                        <p class="score">${value.score} / ${value.out_of}</p>
                        ${Object.entries(value)
                            .filter(([subKey]) => subKey !== 'score' && subKey !== 'out_of')
                            .map(([subKey, subValue]) => `
                                <p><strong>${formatTitle(subKey)}:</strong> ${formatValue(subValue)}</p>
                            `).join('')}
                    </div>
                `).join('')}
        `;
    } else {
        resultsContainer.innerHTML = '<p>No results found. Please go back and submit the form.</p>';
    }
}

function formatTitle(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatValue(value) {
    if (typeof value === 'object') {
        return Object.entries(value)
            .map(([key, val]) => `${formatTitle(key)}: ${val}`)
            .join(', ');
    }
    return value;
}
