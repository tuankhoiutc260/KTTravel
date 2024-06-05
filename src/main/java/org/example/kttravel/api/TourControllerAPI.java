package org.example.kttravel.api;

import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.entity.ResponeObject;
import org.example.kttravel.service.TourService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tour")
public class TourControllerAPI {
    private final TourService tourService;

    public TourControllerAPI(TourService tourService) {
        this.tourService = tourService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponeObject> getTourById(@PathVariable int id) {
        TourDTO tourDTO = tourService.getTourById(id);
        return ResponseEntity.ok(ResponeObject.success("Get Tour by ID " + id + " Successfully", tourDTO));
    }

    @GetMapping
    public ResponseEntity<ResponeObject> getAllTours() {
        return ResponseEntity.ok().body(ResponeObject.success("Get All Tour Success", tourService.getAllTours()));
    }

    @PostMapping
    public ResponseEntity<ResponeObject> createTour(@RequestBody TourDTO tourDTO) {
        return ResponseEntity.ok(ResponeObject.success("Created Tour Successfully", tourService.addTour(tourDTO)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponeObject> updateTour(@PathVariable int id, @RequestBody TourDTO tourDTO) {
        return ResponseEntity.ok(ResponeObject.success("Update Tour Successfully", tourService.updateTour(id, tourDTO)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponeObject> deleteTour(@PathVariable int id) {
        tourService.deleteTour(id);
        return ResponseEntity.ok(ResponeObject.success("Delete Tour Successfully", null));
    }
}