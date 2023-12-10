const apiKey = '8d7a2b47b0c10398fcb84dba422e5e8b'; 
const weatherInfo = document.getElementById('weather');
const locationInfo = document.getElementById('location');

async function searchWeather() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
            animateWeatherInfo();
        } else {
            weatherInfo.innerHTML = '';
            locationInfo.textContent = 'City not found';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;

    locationInfo.textContent = `${city}, ${country}`;
    weatherInfo.innerHTML = `Temperature: ${temperature}°C <br> Weather: ${weatherDescription}`;
}

function animateWeatherInfo() {
    weatherInfo.style.backgroundColor = '#ffffff33';
    setTimeout(() => {
        weatherInfo.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; 
    }, 1000);
}