package org.example.kttravel.dto;

import lombok.*;
import org.example.kttravel.model.Tour;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleDTO {
    private String title;
    private String description;
    private int tourID;
}
