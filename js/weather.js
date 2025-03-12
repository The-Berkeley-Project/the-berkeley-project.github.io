async function fetchWeather() {
    const latitude = 37.87; // Latitude for Berkeley
    const longitude = -122.26; // Longitude for Berkeley
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    const current = data.current;

    weatherContainer.innerHTML = `
        <div>Temperature: ${current.temperature_2m}°C</div>
        <div>Wind Speed: ${current.wind_speed_10m} km/h</div>
    `;
}

document.addEventListener('DOMContentLoaded', fetchWeather);
