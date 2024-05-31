package org.example.kttravel.controller;

import org.example.kttravel.model.City;
import org.example.kttravel.model.Tour;
import org.example.kttravel.service.CityService;
import org.example.kttravel.service.TourServices;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/dashboard")

public class DashboardController {
    private final CityService cityServices;
    private final TourServices tourServices;
    public DashboardController(CityService cityServices, TourServices tourServices) {
        this.cityServices = cityServices;
        this.tourServices = tourServices;
    }

    @GetMapping("/tour")
    public String dashboard(Model model){
        List<City> cityList = cityServices.getAllCity();
        List<Tour> tourList = tourServices.getAllTour();
        model.addAttribute("cityList", cityList);
        model.addAttribute("tourList", tourList);
        return "tour-dashboard.html";
    }
}

