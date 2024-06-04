package org.example.kttravel.api;

import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.entity.ResponeObject;
import org.example.kttravel.service.TourService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourControllerAPI {
    private final TourService tourService;

    public TourControllerAPI(TourService tourService) {
        this.tourService = tourService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponeObject> getTourById(@PathVariable int id) {
        TourDTO tourDTO = tourService.getTourById(id);
        return ResponseEntity.ok(ResponeObject.success("Get Tour by ID " + id + " Success", tourDTO));
    }

    @GetMapping
    public ResponseEntity<ResponeObject> getAllTours() {
        List<TourDTO> tours = tourService.getAllTours();
        return ResponseEntity.ok().body(ResponeObject.success("Get All Tour Success", tours));
    }

    @PostMapping
    public ResponseEntity<ResponeObject> createTour(@RequestBody TourDTO tourDTO) {
        TourDTO createdTour = tourService.addTour(tourDTO);
        return ResponseEntity.ok(ResponeObject.success("Created Tour Successfully", createdTour));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponeObject> updateTour(@PathVariable int id, @RequestBody TourDTO tourDTO) {
        TourDTO updatedTour = tourService.updateTour(id, tourDTO);
        return ResponseEntity.ok(ResponeObject.success("Update Tour Successfully", updatedTour));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponeObject> deleteTour(@PathVariable int id) {
        tourService.deleteTour(id);
        return ResponseEntity.ok(ResponeObject.success("Delete Tour Successfully", null));
    }
}