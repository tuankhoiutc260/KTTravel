package org.example.kttravel.initializer;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.kttravel.model.City;
import org.example.kttravel.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Component
public class CityDataInitializer implements CommandLineRunner {
    private final CityRepository cityRepository;

    @Autowired
    public CityDataInitializer(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Check if the city table is empty
        if (cityRepository.count() == 0) {
            // Load data from city.json and save to database
            ObjectMapper objectMapper = new ObjectMapper();
            TypeReference<List<City>> typeReference = new TypeReference<List<City>>() {};

            try {
                ClassPathResource resource = new ClassPathResource("data/city.json");
                InputStream inputStream = resource.getInputStream();

                List<City> cities = objectMapper.readValue(inputStream, typeReference);
                cityRepository.saveAll(cities);
                System.out.println("Cities saved to database");
            } catch (IOException e) {
                System.out.println("Unable to save cities: " + e.getMessage());
            }
        } else {
            System.out.println("City table already has data, skipping data initialization.");
        }
    }
}
