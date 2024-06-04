package org.example.kttravel.exception;

public class MappingException extends RuntimeException{
    public MappingException(String message) {
        super(message);
    }

    public MappingException(String message, Throwable cause) {
        super(message, cause);
    }
}
