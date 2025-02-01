// // document.getElementById('panchang-form').addEventListener('submit', async (event) => {
// //     event.preventDefault();
  
// //     const date = document.getElementById('date').value;
// //     const geonameId = document.getElementById('geonameId').value;
  
// //     if (!date || !geonameId) {
// //       alert('Please fill in all fields');
// //       return;
// //     }
  
// //     try {
// //       const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}`);
// //       const data = await response.text();
// //       document.getElementById('panchang-result').innerHTML = data;
// //     } catch (error) {
// //       document.getElementById('panchang-result').innerHTML = 'Error fetching Panchang data. Please try again.';
// //     }
// //   });
  

// // document.getElementById('panchang-form').addEventListener('submit', async (event) => {
// //     event.preventDefault();

// //     const date = document.getElementById('date').value;
// //     const geonameId = document.getElementById('geonameId').value;
// //     const lang = document.getElementById('language').value;

// //     if (!date || !geonameId) {
// //         alert('Please fill in all required fields!');
// //         return;
// //     }

// //     try {
// //         const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}&lang=${lang}`);
// //         const data = await response.json();

// //         const resultContainer = document.getElementById('panchang-result');
// //         resultContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
// //     } catch (error) {
// //         console.error(error);
// //         alert('Error fetching Panchang data. Please try again later.');
// //     }
// // });


// // document.getElementById('panchang-form').addEventListener('submit', async function (event) {
// //     event.preventDefault(); // Prevent form submission

// //     const date = document.getElementById('date').value;
// //     const city = document.getElementById('city').value;
// //     const language = document.getElementById('language').value;

// //     if (!date || !city || !language) {
// //         alert('Please fill in all fields.');
// //         return;
// //     }

// //     try {
// //         // Fetch data from the server
// //         const response = await fetch(`/api/panchang?date=${date}&geonameId=${city}&lang=${language}`);
// //         const data = await response.json();

// //         if (response.ok) {
// //             displayPanchang(data);
// //         } else {
// //             alert(data.error || 'Failed to fetch Panchang data.');
// //         }
// //     } catch (error) {
// //         console.error('Error fetching Panchang:', error);
// //         alert('An error occurred while fetching Panchang data.');
// //     }
// // });

// // function displayPanchang(data) {
// //     const outputDiv = document.getElementById('panchang-output');
// //     outputDiv.innerHTML = '';

// //     // Generate an HTML table for the Panchang data
// //     const table = document.createElement('table');
// //     table.style.width = '100%';
// //     table.style.borderCollapse = 'collapse';

// //     Object.entries(data).forEach(([key, value]) => {
// //         const row = document.createElement('tr');

// //         const keyCell = document.createElement('td');
// //         keyCell.textContent = key;
// //         keyCell.style.fontWeight = 'bold';
// //         keyCell.style.border = '1px solid #ddd';
// //         keyCell.style.padding = '8px';

// //         const valueCell = document.createElement('td');
// //         valueCell.textContent = value;
// //         valueCell.style.border = '1px solid #ddd';
// //         valueCell.style.padding = '8px';

// //         row.appendChild(keyCell);
// //         row.appendChild(valueCell);
// //         table.appendChild(row);
// //     });

// //     outputDiv.appendChild(table);
// // }




// document.getElementById('panchang-form').addEventListener('submit', async function (event) {
//     event.preventDefault(); // Prevent form submission





//     const date = document.getElementById('date').value;
//         const geonameId = document.getElementById('geonameId').value;
      
//         if (!date || !geonameId) {
//           alert('Please fill in all fields');
//           return;
//         }
      
//         try {
//           const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}`);
//           const data = await response.text();
//           document.getElementById('panchang-result').innerHTML = data;
//         } catch (error) {
//           document.getElementById('panchang-result').innerHTML = 'Error fetching Panchang data. Please try again.';
//         }
//       });
      




// //     const date = document.getElementById('date').value;
// //     const city = document.getElementById('city').value;
// //     const language = document.getElementById('language').value;

// //     if (!date || !city || !language) {
// //         alert('Please fill in all fields.');
// //         return;
// //     }

// //     try {
// //         // Fetch data from the server
// //         const response = await fetch(`/api/panchang?date=${date}&geonameId=${city}&lang=${language}`);
// //         const data = await response.json();

// //         if (response.ok) {
// //             displayPanchang(data);
// //         } else {
// //             alert(data.error || 'Failed to fetch Panchang data.');
// //         }
// //     } catch (error) {
// //         console.error('Error fetching Panchang:', error);
// //         alert('An error occurred while fetching Panchang data.');
// //     }
// // });

// function displayPanchang(data) {
//     const outputDiv = document.getElementById('panchang-output');
//     outputDiv.innerHTML = ''; // Clear previous data

//     // Create a table for displaying the Panchang data
//     const table = document.createElement('table');
//     table.style.width = '100%';
//     table.style.borderCollapse = 'collapse';
//     table.style.marginTop = '10px';

//     Object.entries(data).forEach(([key, value]) => {
//         const row = document.createElement('tr');

//         const keyCell = document.createElement('td');
//         keyCell.textContent = key;
//         keyCell.style.fontWeight = 'bold';
//         keyCell.style.border = '1px solid #ddd';
//         keyCell.style.padding = '10px';
//         keyCell.style.backgroundColor = '#f9f9f9';
//         keyCell.style.color = '#555';

//         const valueCell = document.createElement('td');
//         valueCell.textContent = value;
//         valueCell.style.border = '1px solid #ddd';
//         valueCell.style.padding = '10px';
//         valueCell.style.backgroundColor = '#ffffff';
//         valueCell.style.color = '#333';

//         row.appendChild(keyCell);
//         row.appendChild(valueCell);
//         table.appendChild(row);
//     });

//     // Add table to the output div
//     outputDiv.appendChild(table);
// }







// document.getElementById('panchang-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const date = document.getElementById('date').value;
//     const geonameId = document.getElementById('geonameId').value;
//     const language = document.getElementById('language').value;

//     if (!date || !geonameId) {
//         alert('Please fill in all fields');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}&lang=${language}`);
//         if (!response.ok) throw new Error('Failed to fetch Panchang data.');

//         const data = await response.json();
//         displayPanchang(data);
//     } catch (error) {
//         console.error('Error fetching Panchang:', error);
//         document.getElementById('panchang-output').innerHTML = 'Error fetching Panchang data. Please try again.';
//     }
// });

// function displayPanchang(data) {
//     const outputDiv = document.getElementById('panchang-output');
//     outputDiv.innerHTML = ''; // Clear previous data

//     const table = document.createElement('table');
//     table.classList.add('styled-table');

//     Object.entries(data).forEach(([key, value]) => {
//         const row = document.createElement('tr');

//         const keyCell = document.createElement('td');
//         keyCell.textContent = key;
//         keyCell.classList.add('key-cell');

//         const valueCell = document.createElement('td');
//         valueCell.textContent = value;
//         valueCell.classList.add('value-cell');

//         row.appendChild(keyCell);
//         row.appendChild(valueCell);
//         table.appendChild(row);
//     });

//     outputDiv.appendChild(table);
// }






// document.getElementById('search-location').addEventListener('click', async function () {
//     const location = document.getElementById('location').value;

//     if (!location) {
//         alert('Please enter a location');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/search-location?search=${encodeURIComponent(location)}`);
//         if (!response.ok) throw new Error('Failed to search location.');

//         const data = await response.json();
//         displayLocationResults(data.geonames);
//     } catch (error) {
//         console.error('Error searching location:', error);
//         document.getElementById('location-results').innerHTML = 'Error searching location. Please try again.';
//     }
// });

// function displayLocationResults(locations) {
//     const resultsDiv = document.getElementById('location-results');
//     resultsDiv.innerHTML = '';

//     if (locations.length === 0) {
//         resultsDiv.innerHTML = 'No locations found.';
//         return;
//     }

//     const ul = document.createElement('ul');
//     locations.forEach(location => {
//         const li = document.createElement('li');
//         li.textContent = `${location.city}, ${location.state}, ${location.country}`;
//         li.addEventListener('click', () => {
//             document.getElementById('location').value = `${location.city}, ${location.state}, ${location.country}`;
//             document.getElementById('geonameId').value = location.id;
//             resultsDiv.innerHTML = '';
//         });
//         ul.appendChild(li);
//     });

//     resultsDiv.appendChild(ul);
// }

// document.getElementById('panchang-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const date = document.getElementById('date').value;
//     const geonameId = document.getElementById('geonameId').value;
//     const language = document.getElementById('language').value;

//     if (!date || !geonameId) {
//         alert('Please select a location and date');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}&lang=${language}`);
//         if (!response.ok) throw new Error('Failed to fetch Panchang data.');

//         const data = await response.json();
//         displayPanchang(data);
//     } catch (error) {
//         console.error('Error fetching Panchang:', error);
//         document.getElementById('panchang-output').innerHTML = 'Error fetching Panchang data. Please try again.';
//     }
// });

// function displayPanchang(data) {
//     const outputDiv = document.getElementById('panchang-output');
//     outputDiv.innerHTML = ''; // Clear previous data

//     const table = document.createElement('table');
//     table.classList.add('styled-table');

//     Object.entries(data).forEach(([key, value]) => {
//         const row = document.createElement('tr');

//         const keyCell = document.createElement('td');
//         keyCell.textContent = key;
//         keyCell.classList.add('key-cell');

//         const valueCell = document.createElement('td');
//         valueCell.textContent = value;
//         valueCell.classList.add('value-cell');

//         row.appendChild(keyCell);
//         row.appendChild(valueCell);
//         table.appendChild(row);
//     });

//     outputDiv.appendChild(table);
// }

// document.getElementById('search-location').addEventListener('click', async function () {
//     const location = document.getElementById('location').value;

//     if (!location) {
//         alert('Please enter a location');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/search-location?search=${encodeURIComponent(location)}`);
//         if (!response.ok) throw new Error('Failed to search location.');

//         const data = await response.json();
//         displayLocationResults(data.geonames);
//     } catch (error) {
//         console.error('Error searching location:', error);
//         document.getElementById('location-results').innerHTML = 'Error searching location. Please try again.';
//     }
// });

// function displayLocationResults(locations) {
//     const resultsDiv = document.getElementById('location-results');
//     resultsDiv.innerHTML = '';

//     if (locations.length === 0) {
//         resultsDiv.innerHTML = 'No locations found.';
//         return;
//     }

//     const ul = document.createElement('ul');
//     locations.forEach(location => {
//         const li = document.createElement('li');
//         li.textContent = `${location.city}, ${location.state}, ${location.country}`;
//         li.addEventListener('click', () => {
//             document.getElementById('location').value = `${location.city}, ${location.state}, ${location.country}`;
//             document.getElementById('geonameId').value = location.id;
//             document.getElementById('timezone').value = location.olson_timezone;
//             resultsDiv.innerHTML = '';
//         });
//         ul.appendChild(li);
//     });

//     resultsDiv.appendChild(ul);
// }

// document.getElementById('panchang-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const date = document.getElementById('date').value;
//     const geonameId = document.getElementById('geonameId').value;
//     const language = document.getElementById('language').value;
//     const timezone = document.getElementById('timezone').value;

//     if (!date || !geonameId || !timezone) {
//         alert('Please select a location and date');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}&lang=${language}&timezone=${timezone}`);
//         if (!response.ok) throw new Error('Failed to fetch Panchang data.');

//         const data = await response.json();
//         displayPanchang(data);
//     } catch (error) {
//         console.error('Error fetching Panchang:', error);
//         document.getElementById('panchang-output').innerHTML = 'Error fetching Panchang data. Please try again.';
//     }
// });

// function displayPanchang(data) {
//     const outputDiv = document.getElementById('panchang-output');
//     outputDiv.innerHTML = '';

//     const table = document.createElement('table');
//     table.classList.add('styled-table');

//     Object.entries(data).forEach(([key, value]) => {
//         const row = document.createElement('tr');

//         const keyCell = document.createElement('td');
//         keyCell.textContent = key;
//         keyCell.classList.add('key-cell');

//         const valueCell = document.createElement('td');
//         valueCell.textContent = value;
//         valueCell.classList.add('value-cell');

//         row.appendChild(keyCell);
//         row.appendChild(valueCell);
//         table.appendChild(row);
//     });

//     outputDiv.appendChild(table);
// }








// document.getElementById('search-location').addEventListener('click', async function () {
//     const location = document.getElementById('location').value;

//     if (!location) {
//         alert('Please enter a location');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/search-location?search=${encodeURIComponent(location)}`);
//         if (!response.ok) throw new Error('Failed to search location.');

//         const data = await response.json();
//         displayLocationResults(data.geonames);
//     } catch (error) {
//         console.error('Error searching location:', error);
//         document.getElementById('location-results').innerHTML = 'Error searching location. Please try again.';
//     }
// });

// function displayLocationResults(locations) {
//     const resultsDiv = document.getElementById('location-results');
//     resultsDiv.innerHTML = '';

//     if (locations.length === 0) {
//         resultsDiv.innerHTML = 'No locations found.';
//         return;
//     }

//     const ul = document.createElement('ul');
//     locations.forEach(location => {
//         const li = document.createElement('li');
//         li.textContent = `${location.city}, ${location.state}, ${location.country}`;
//         li.addEventListener('click', () => {
//             document.getElementById('location').value = `${location.city}, ${location.state}, ${location.country}`;
//             document.getElementById('geonameId').value = location.id;
//             document.getElementById('timezone').value = location.olson_timezone; // Store timezone
//             resultsDiv.innerHTML = '';
//         });
//         ul.appendChild(li);
//     });

//     resultsDiv.appendChild(ul);
// }

// document.getElementById('panchang-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const date = document.getElementById('date').value;
//     const geonameId = document.getElementById('geonameId').value;
//     const language = document.getElementById('language').value;
//     const timezone = document.getElementById('timezone').value; // Retrieve timezone

//     if (!date || !geonameId || !timezone) {
//         alert('Please select a location and date');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}&lang=${language}&timezone=${encodeURIComponent(timezone)}`);
//         if (!response.ok) throw new Error('Failed to fetch Panchang data.');

//         const data = await response.json();
//         displayPanchang(data);
//     } catch (error) {
//         console.error('Error fetching Panchang:', error);
//         document.getElementById('panchang-output').innerHTML = 'Error fetching Panchang data. Please try again.';
//     }
// });

// function displayPanchang(data) {
//     const outputDiv = document.getElementById('panchang-output');
//     outputDiv.innerHTML = '';

//     const table = document.createElement('table');
//     table.classList.add('styled-table');

//     Object.entries(data).forEach(([key, value]) => {
//         const row = document.createElement('tr');

//         const keyCell = document.createElement('td');
//         keyCell.textContent = key;
//         keyCell.classList.add('key-cell');

//         const valueCell = document.createElement('td');
//         valueCell.textContent = value;
//         valueCell.classList.add('value-cell');

//         row.appendChild(keyCell);
//         row.appendChild(valueCell);
//         table.appendChild(row);
//     });

//     outputDiv.appendChild(table);
// }


// document.getElementById('search-location').addEventListener('click', async function () {
//     const location = document.getElementById('location').value;

//     if (!location) {
//         alert('Please enter a location');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/search-location?search=${encodeURIComponent(location)}`);
//         if (!response.ok) throw new Error('Failed to search location.');

//         const data = await response.json();
//         displayLocationResults(data.geonames);
//     } catch (error) {
//         console.error('Error searching location:', error);
//         document.getElementById('location-results').innerHTML = 'Error searching location. Please try again.';
//     }
// });

// function displayLocationResults(locations) {
//     const resultsDiv = document.getElementById('location-results');
//     resultsDiv.innerHTML = '';

//     if (locations.length === 0) {
//         resultsDiv.innerHTML = 'No locations found.';
//         return;
//     }

//     const ul = document.createElement('ul');
//     locations.forEach(location => {
//         const li = document.createElement('li');
//         li.textContent = `${location.city}, ${location.state}, ${location.country}`;
//         li.addEventListener('click', () => {
//             document.getElementById('location').value = `${location.city}, ${location.state}, ${location.country}`;
//             document.getElementById('geonameId').value = location.id;
//             document.getElementById('timezone').value = location.olson_timezone; // Store timezone
//             resultsDiv.innerHTML = '';
//         });
//         ul.appendChild(li);
//     });

//     resultsDiv.appendChild(ul);
// }

// document.getElementById('panchang-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const date = document.getElementById('date').value;
//     const geonameId = document.getElementById('geonameId').value;
//     const language = document.getElementById('language').value;
//     const timezone = document.getElementById('timezone').value; // Retrieve timezone

//     if (!date || !geonameId || !timezone) {
//         alert('Please select a location and date');
//         return;
//     }

//     try {
//         const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}&lang=${language}&timezone=${encodeURIComponent(timezone)}`);
//         if (!response.ok) throw new Error('Failed to fetch Panchang data.');

//         const data = await response.json();
//         displayPanchang(data);
//     } catch (error) {
//         console.error('Error fetching Panchang:', error);
//         document.getElementById('panchang-output').innerHTML = 'Error fetching Panchang data. Please try again.';
//     }
// });

// function displayPanchang(data) {
//     const outputDiv = document.getElementById('panchang-output');
//     outputDiv.innerHTML = '';

//     const table = document.createElement('table');
//     table.classList.add('styled-table');

//     Object.entries(data).forEach(([key, value]) => {
//         const row = document.createElement('tr');

//         const keyCell = document.createElement('td');
//         keyCell.textContent = key;
//         keyCell.classList.add('key-cell');

//         const valueCell = document.createElement('td');
//         valueCell.textContent = value;
//         valueCell.classList.add('value-cell');

//         row.appendChild(keyCell);
//         row.appendChild(valueCell);
//         table.appendChild(row);
//     });

//     outputDiv.appendChild(table);
// }





document.getElementById('search-location').addEventListener('click', async function () {
    const location = document.getElementById('location').value;

    if (!location) {
        alert('Please enter a location');
        return;
    }

    try {
        const response = await fetch(`/api/search-location?search=${encodeURIComponent(location)}`);
        if (!response.ok) throw new Error('Failed to search location.');

        const data = await response.json();
        displayLocationResults(data.geonames);
    } catch (error) {
        console.error('Error searching location:', error);
        document.getElementById('location-results').innerHTML = 'Error searching location. Please try again.';
    }
});

function displayLocationResults(locations) {
    const resultsDiv = document.getElementById('location-results');
    resultsDiv.innerHTML = '';

    if (locations.length === 0) {
        resultsDiv.innerHTML = 'No locations found.';
        return;
    }

    const ul = document.createElement('ul');
    locations.forEach(location => {
        const li = document.createElement('li');
        li.textContent = `${location.city}, ${location.state}, ${location.country}`;
        li.addEventListener('click', () => {
            document.getElementById('location').value = `${location.city}, ${location.state}, ${location.country}`;
            document.getElementById('geonameId').value = location.id;
            resultsDiv.innerHTML = '';
        });
        ul.appendChild(li);
    });

    resultsDiv.appendChild(ul);
}

document.getElementById('panchang-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const geonameId = document.getElementById('geonameId').value;
    const language = document.getElementById('language').value;

    if (!date || !geonameId) {
        alert('Please select a location and date');
        return;
    }

    try {
        const response = await fetch(`/api/panchang?date=${date}&geonameId=${geonameId}&lang=${language}`);
        if (!response.ok) throw new Error('Failed to fetch Panchang data.');

        const data = await response.json();

        // Extract important details for the decorative box
        const boxData = {
            date,
            day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
            vikramSamvat: data['विक्रम सम्वतबृहस्पति सम्वत्सर'],
            hindiMonth: data['हिन्दी महिना'],
            tithi: data['तिथिनक्षत्र'],
            nakshatra: data['नक्षत्र'],
            mash: data['प्रविष्टे/गते']
        };

        // Store Panchang data and box data in localStorage
        localStorage.setItem('panchangData', JSON.stringify(data));
        localStorage.setItem('boxData', JSON.stringify(boxData));

        // Redirect to a new page to display the Panchang data
        window.open('/panchang-results.html', '_blank');
    } catch (error) {
        console.error('Error fetching Panchang:', error);
        document.getElementById('panchang-output').innerHTML = 'Error fetching Panchang data. Please try again.';
    }
});
