package org.example.kttravel.api;

import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.entity.ResponeObject;
import org.example.kttravel.service.ScheduleService;
import org.example.kttravel.service.ScheduleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleControllerAPI {
    private final ScheduleService scheduleService;

    public ScheduleControllerAPI(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<ResponeObject> getScheduleByScheduleID(@PathVariable int id) {
        return ResponseEntity.ok(ResponeObject.success("Get Schedule by ID " + id + " Successfully", scheduleService.getScheduleById(id)));
    }

    @GetMapping
    public ResponseEntity<ResponeObject> getAllSchedule() {
        return ResponseEntity.ok(ResponeObject.success("Get all Schedule Successfully", scheduleService.getAllSchedule()));
    }

    @PostMapping
    public ResponseEntity<ResponeObject> addSchedule(@RequestBody ScheduleDTO scheduleDTO) {
        return ResponseEntity.ok(ResponeObject.success("Create new Schedule Successfully", scheduleService.addSchedule(scheduleDTO)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponeObject> updateSchedule(@PathVariable int id, @RequestBody ScheduleDTO scheduleDTO) {
        return ResponseEntity.ok(ResponeObject.success("Update Schedule Successfully", scheduleService.updateSchedule(id, scheduleDTO)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponeObject> deleteTour(@PathVariable int id) {
        scheduleService.deleteSchedule(id);
        return ResponseEntity.ok(ResponeObject.success("Delete Schedule Successfully", null));
    }
}
