package com.ebanking.coreservice.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CustomerEmailException extends RuntimeException {
    public CustomerEmailException(String message) {
        super(message);
    }
}
