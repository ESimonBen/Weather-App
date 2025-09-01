// Select important elements from the page
const weatherForm = document.querySelector(".weatherForm"); // The form where user enters the city
const cityInput = document.querySelector(".cityInput"); // The text input for the city name
const card = document.querySelector(".card"); // The card where results or errors will be displayed

// Listen for when the form is submitted
weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); // Stop the form from refreshing the page

    const city = cityInput.value; // Get the city the user typed

    if (city) {
        try {
            // Get weather data from the API
            const weatherData = await getWeatherData(city);
            // Display the weather information
            displayWeatherInfo(weatherData);
        } catch (error) {
            // Show error if something goes wrong
            console.error(error);
            displayError(error);
        }
    } else {
        // Show error if the input is empty
        displayError("Please enter a city.");
    }
});

// Fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
    // API URL with the city name and API key
    const apiURL = `https://weather-app-backend-7pqk.onrender.com/weather?city=${city}`;
    
    // Request data from the API
    const response = await fetch(apiURL);
    
    // If response is not OK, throw an error
    if (!response.ok) {
        throw new Error("Could not get weather data");
    }

    // Convert the response to JSON and return it
    return await response.json();
}

// Display weather details on the page
function displayWeatherInfo(data) {
    // Extract data from the API response
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    // Clear any previous content and make the card visible
    card.textContent = "";
    card.style.display = "flex";

    // Create elements for displaying data
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emoji = document.createElement("p");

    // Fill in the weather information
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F / ${(temp - 273.15).toFixed(1)}°C`; // Convert from Kelvin to Fahrenheit
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = capital(description);
    emoji.textContent = getWeatherEmoji(id); // Choose emoji based on weather ID

    // Add CSS classes for styling
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    emoji.classList.add("emoji");

    // Add elements to the card
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emoji);
}

// Choose an emoji based on the weather condition ID from OpenWeatherMap
function getWeatherEmoji(weatherID) {
    switch (true) {
        case (weatherID >= 200 && weatherID < 300):
            return "⛈️"; // Thunderstorm
        case (weatherID >= 300 && weatherID < 400):
            return "🌦️"; // Drizzle
        case (weatherID >= 500 && weatherID < 600):
            return "🌧️"; // Rain
        case (weatherID >= 600 && weatherID < 700):
            return "❄️"; // Snow
        case (weatherID >= 700 && weatherID < 800):
            return "💨"; // Atmosphere (fog, mist, etc.)
        case (weatherID == 800):
            return "☀️"; // Clear sky
        case (weatherID >= 801 && weatherID < 810):
            return "☁️"; // Clouds
        default:
            return "?"; // Unknown condition
    }
}

// Show an error message inside the card
function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    // Clear previous content and show the error
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

function capital(str){
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
