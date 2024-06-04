package org.example.kttravel.controller;

import org.example.kttravel.service.TourService;
import org.springframework.stereotype.Controller;

@Controller
public class TourController {
    private final TourService tourServices;

    public TourController(TourService tourServices) {
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
