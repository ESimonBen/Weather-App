package com.esimonben.weatherapp.weatherapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/weather")
@CrossOrigin(origins = "*") // Allow frontend requests
public class WeatherController {

    @Value("${weather.api.key}")
    private String apiKey; // Stored securely on the server

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping
    public ResponseEntity<String> getWeather(@RequestParam String city) {
        try {
            String url = "https://api.openweathermap.org/data/2.5/weather?q="
                         + city + "&appid=" + apiKey;
            String response = restTemplate.getForObject(url, String.class);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body("{\"error\":\"Could not fetch weather data\"}");
        }
    }
}
