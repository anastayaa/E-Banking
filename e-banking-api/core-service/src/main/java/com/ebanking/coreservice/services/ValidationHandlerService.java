package com.ebanking.coreservice.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Service
public class ValidationHandlerService {

    public ResponseEntity<?> getValidationErrors(BindingResult result){
        if(result.hasErrors()){
            Map<String, String> errors=new HashMap<>();
            for(FieldError error: result.getFieldErrors()){
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}
