# Weather App
A responsive weather application that allows users to search for any city and see the current temperature, humidity, weather description, and a visual emoji. The app uses a Java Spring Boot backend to securely fetch data from the OpenWeatherMap API, and a JavaScript frontend deployed on Netlify.

## Features
- Search for any city worldwide
- Displays temperature in Fahrenheit and Celsius
- Shows humidity and weather description
- Weather emojis for visual representation (sun, clouds, rain, etc.)
- Secure backend handles API key
- Responsive design for desktop and mobile

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Java, Spring Boot
- API: OpenWeatherMap
- Deployment: Netlify (frontend), Render (backend)
- Containerization: Docker

## Setup Instructions

### Backend
1. Clone the repository
2. Navigate to the `backend` folder
3. Set environment variable for OpenWeather API key: `WEATHER_API_KEY=<your_api_key>`
4. Run with Maven: `./mvnw spring-boot:run` or build Docker container

### Frontend
1. Open `frontend/index.html` in a browser or deploy via Netlify
2. Make sure `weather.js` points to your live backend URL

## Live Demo
- Frontend: [Netlify URL](https://simon-weather.netlify.app/)
- Backend: [Render URL](https://weather-app-backend-7pqk.onrender.com)

  ## Future Improvements
- Add user login to save favorite cities
- Show a 5-day weather forecast
- Add light/dark mode
- Enhance mobile responsiveness

