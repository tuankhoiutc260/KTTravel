package org.example.kttravel.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponeObject {
    private String status;
    private String message;
    private Object data;
}
