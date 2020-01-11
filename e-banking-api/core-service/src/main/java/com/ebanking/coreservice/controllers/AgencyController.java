package com.ebanking.coreservice.controllers;

import com.ebanking.coreservice.models.Agency;
import com.ebanking.coreservice.services.AgencyService;
import com.ebanking.coreservice.services.ValidationHandlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/agency")
@CrossOrigin
public class AgencyController {

    @Autowired
    private AgencyService agencyService;
    @Autowired
    private ValidationHandlerService validationHandlerService;

    @PostMapping
    public ResponseEntity<?> addAgency(@Valid @RequestBody Agency agency, BindingResult result) {
        ResponseEntity<?> errors = validationHandlerService.getValidationErrors(result);
        if (errors != null) {
            return errors;
        }
        Agency newAgency = agencyService.saveAgency(agency);
        return new ResponseEntity<>(newAgency, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Agency> getAllAgencies() {
        return agencyService.findAllAgencies();
    }

    @GetMapping("/all/{city}")
    public Iterable<Agency> getAllAgenciesByAddress(@PathVariable String city) {
        return agencyService.findAllAgenciesByCity(city);
    }



    @GetMapping("/{id}")
    public ResponseEntity<?> getAgencyById(@PathVariable String id) {
        Agency agency = agencyService.findAgencyById(id);
        return new ResponseEntity<Agency>(agency, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAgencyByName(@PathVariable String id) {
        agencyService.deleteAgencyById(id);
        return new ResponseEntity<String>("Agency with name '" + id + "' was deleted", HttpStatus.OK);
    }
}
