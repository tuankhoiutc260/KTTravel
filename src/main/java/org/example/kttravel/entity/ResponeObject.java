package org.example.kttravel.entity;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponeObject {
    private String status;
    private String message;
    private Object data;

    public static ResponeObject success(String message, Object data) {
        return new ResponeObject("Success", message, data);
    }

    public static ResponeObject error(String message, Object data) {
        return new ResponeObject("Error", message, data);
    }
}
