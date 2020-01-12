package com.ebanking.coreservice.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AgencyIdException extends RuntimeException {
    public AgencyIdException(String message) {
        super(message);
    }
}
