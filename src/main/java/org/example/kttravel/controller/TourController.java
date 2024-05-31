package org.example.kttravel.controller;

import org.example.kttravel.model.Tour;
import org.example.kttravel.service.TourServices;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class TourController {
    private final TourServices tourServices;

    public TourController(TourServices tourServices) {
        this.tourServices = tourServices;
    }

//    @GetMapping("/tour")
//    public String getAllTour(Model model){
//        try{
//            List<Tour> tourList = tourServices.getAllTour();
//            model.addAttribute("tourList", tourList);
//        }
//        catch (NullPointerException e){
//            throw e;
//        }
//        return "tour-dashboard";
//    }

}
