package org.example.kttravel.api;

import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.mapper.TourMapper;
import org.example.kttravel.model.City;
import org.example.kttravel.model.ResponeObject;
import org.example.kttravel.model.Tour;
import org.example.kttravel.service.CityService;
import org.example.kttravel.service.TourServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tours")
public class TourControllerAPI {
    private final TourServices tourServices;
    private final CityService cityService;

    public TourControllerAPI(TourServices tourServices, CityService cityService) {
        this.tourServices = tourServices;
        this.cityService = cityService;
    }

    @GetMapping
    public ResponseEntity<ResponeObject> getAllTour() {
        List<Tour> tourList = tourServices.getAllTour();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponeObject("ok", "Here", tourList));
    }

    @GetMapping("/")
    public ResponseEntity<ResponeObject> getAllTours() {
        List<Tour> tourList = tourServices.getAllTour();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponeObject("success", "Get all Tour success", tourList));
    }


    @PostMapping("/add")
    public ResponseEntity<ResponeObject> addTour(@RequestBody TourDTO newTourDTO) {
        ResponeObject responseObject;
        try {
            Optional<City> departureCityOptional = cityService.findByID(newTourDTO.getPositionDepartureID());
            Optional<City> destinationCityOptional = cityService.findByID(newTourDTO.getPositionDestinationID());
            if(departureCityOptional.isPresent() && destinationCityOptional.isPresent()){
                Optional<Tour> foundTour = tourServices.getTourByName(newTourDTO.getName());
                if (foundTour.isPresent()) {
                    responseObject = new ResponeObject("error", "Tour already exists", "");
                    return new ResponseEntity<>(responseObject, HttpStatus.CONFLICT);
                } else {
                    Tour createdTour = tourServices.addTour(newTourDTO);
                    responseObject = new ResponeObject("success", "Tour added successfully", createdTour);
                    return new ResponseEntity<>(responseObject, HttpStatus.CREATED);
                }
            }
            else{
                responseObject = new ResponeObject("error", "Departure or destination city not found", null);
                return new ResponseEntity<>(responseObject, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            responseObject = new ResponeObject("error", "Failed to add tour", null);
            return new ResponseEntity<>(responseObject, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
