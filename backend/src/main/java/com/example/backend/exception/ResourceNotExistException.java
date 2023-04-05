package com.example.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotExistException  extends RuntimeException {
    public ResourceNotExistException(String message) {
        super(message);
    }
}
