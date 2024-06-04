package org.example.kttravel.controller;

import org.example.kttravel.entity.City;
import org.example.kttravel.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class CityController {
//    private final CityService cityServices;
//
//    @Autowired
//    public CityController(CityService cityServices) {
//        this.cityServices = cityServices;
//    }
//
//    @GetMapping({"/", "/home"})
//    public String index(Model model){
//        List<City> cities = cityServices.getAllCity();
//        model.addAttribute("cities", cities);
//        return "index.html";
//    }
//
//    @GetMapping("/search-tour")
//    public String searchTour(Model model){
//        List<City> cities = cityServices.getAllCity();
//        model.addAttribute("cities", cities);
//        return "search-tour.html";
//    }


}
