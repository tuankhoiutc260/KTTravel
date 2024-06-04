package org.example.kttravel.controller;

import org.example.kttravel.service.CityService;
import org.example.kttravel.service.TourService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/dashboard")

public class DashboardController {
    private final CityService cityService;
    private final TourService tourService;
    public DashboardController(CityService cityService, TourService tourService) {
        this.cityService = cityService;
        this.tourService = tourService;
    }

//    @GetMapping("/tour")
//    public String dashboard(Model model){
//        List<City> cityList = cityService.getAllCity();
//        List<Tour> tourList = tourService.getAllTour();
//        model.addAttribute("cityList", cityList);
//        model.addAttribute("tourList", tourList);
//        TourDTO tourDTO = new TourDTO();
//        model.addAttribute("tourDTO", tourDTO);
//        return "tour-dashboard";
//    }

//    @PostMapping("/tour")
//    public String addTour(@ModelAttribute("tourDTO") TourDTO tourDTO) {
//        try{
//            tourService.addTour(tourDTO);
//        }
//        catch (Exception e){
//        }
//        return "redirect:/dashboard/tour"; // Chuyển hướng về trang danh sách tour sau khi thêm thành công
//    }

//    @PostMapping("/tour")
//    public String addTour(@ModelAttribute("tourDTO") TourDTO tourDTO, RedirectAttributes redirectAttributes) {
//        try {
//            tourService.addTour(TourMapper.mapToTour(tourDTO));
//        } catch (Exception e) {
//            // Thêm thông báo lỗi vào RedirectAttributes
//            redirectAttributes.addFlashAttribute("errorMessage", "Có lỗi xảy ra khi tạo tour: " + e.getMessage());
//            return "redirect:/dashboard/tour"; // Chuyển hướng về trang danh sách tour và hiển thị thông báo lỗi
//        }
//        return "redirect:/dashboard/tour"; // Chuyển hướng về trang danh sách tour sau khi thêm thành công
//    }
}

