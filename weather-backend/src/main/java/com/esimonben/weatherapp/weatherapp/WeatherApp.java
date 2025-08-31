package com.esimonben.weatherapp.weatherapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // marks this as the Spring Boot entry point
public class WeatherApp {
    public static void main(String[] args) {
        SpringApplication.run(WeatherApp.class, args); // starts Spring Boot
    }
}
