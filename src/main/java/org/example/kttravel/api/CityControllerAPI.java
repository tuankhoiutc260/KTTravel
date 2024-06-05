package org.example.kttravel.api;

import org.example.kttravel.dto.CityDTO;
import org.example.kttravel.entity.ResponeObject;
import org.example.kttravel.service.CityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/city")
public class CityControllerAPI {
    private final CityService cityService;

    public CityControllerAPI(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<ResponeObject> getCityByCityID(@PathVariable int id) {
        return ResponseEntity.ok(ResponeObject.success("Get City by ID " + id + " Successfully", cityService.getCityById(id)));
    }

    @GetMapping
    public ResponseEntity<ResponeObject> getAllCity() {
        return ResponseEntity.ok(ResponeObject.success("Get all City Successfully", cityService.getAllCity()));
    }

    @PostMapping
    public ResponseEntity<ResponeObject> addCity(@RequestBody CityDTO cityDTO) {
        return ResponseEntity.ok(ResponeObject.success("Create new City Successfully", cityService.addCity(cityDTO)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponeObject> updateCity(@PathVariable int id, @RequestBody CityDTO cityDTO) {
        return ResponseEntity.ok(ResponeObject.success("Update City Successfully", cityService.updateCity(id, cityDTO)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponeObject> deleteTour(@PathVariable int id) {
        cityService.deleteCity(id);
        return ResponseEntity.ok(ResponeObject.success("Delete City Successfully", null));
    }
}
