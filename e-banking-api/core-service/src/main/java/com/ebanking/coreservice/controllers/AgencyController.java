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

    @GetMapping("/all/{address}")
    public Iterable<Agency> getAllAgenciesByAddress(@PathVariable String address) {
        return agencyService.findAllAgenciesByAddress(address);
    }

    @GetMapping("/{agency_name}")
    public ResponseEntity<?> getAgencyByName(@PathVariable String agency_name) {
        Agency agency = agencyService.findAgencyByName(agency_name);
        return new ResponseEntity<Agency>(agency, HttpStatus.OK);
    }

    @DeleteMapping("/{agency_name}")
    public ResponseEntity<String> deleteAgencyByName(@PathVariable String agency_name) {
        agencyService.deleteAgencyByName(agency_name);
        return new ResponseEntity<String>("Agency with name '" + agency_name + "' was deleted", HttpStatus.OK);
    }
}
