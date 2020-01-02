package com.ebanking.coreservice.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AgentEmailException extends RuntimeException {
    public AgentEmailException(String message) {
        super(message);
    }
}
