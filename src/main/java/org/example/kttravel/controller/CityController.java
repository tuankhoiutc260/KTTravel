package org.example.kttravel.controller;

import org.example.kttravel.model.City;
import org.example.kttravel.service.CityServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class CityController {
    private final CityServices cityServices;

    @Autowired
    public CityController(CityServices cityServices) {
        this.cityServices = cityServices;
    }

    @GetMapping({"/", "/home"})
    public String index(Model model){
        List<City> cities = cityServices.getAllCity();
        model.addAttribute("cities", cities);
        return "index.html";
    }

    @GetMapping("/search-tour")
    public String searchTour(Model model){
        List<City> cities = cityServices.getAllCity();
        model.addAttribute("cities", cities);
        return "search-tour.html";
    }
}
