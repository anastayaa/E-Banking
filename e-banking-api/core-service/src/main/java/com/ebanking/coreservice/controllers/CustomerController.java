package com.ebanking.coreservice.controllers;

import com.ebanking.coreservice.models.Customer;
import com.ebanking.coreservice.services.CustomerService;
import com.ebanking.coreservice.services.ValidationHandlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    @Autowired
    private ValidationHandlerService validationHandlerService;

    @PostMapping
    public ResponseEntity<?> addCustomer(@Valid @RequestBody Customer customer, BindingResult result) {
        ResponseEntity<?> errors = validationHandlerService.getValidationErrors(result);
        if (errors != null) {
            return errors;
        }
        Customer newCustomer = customerService.saveCustomer(customer);
        return new ResponseEntity<>(newCustomer, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Customer> getAllCustomers() {
        return customerService.findAllCustomers();
    }

    @GetMapping("/{cin}")
    public ResponseEntity<Customer> getCustomerByCin(@PathVariable String cin) {
        Customer customer = customerService.findCustomerByCin(cin);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @DeleteMapping("/{cin}")
    public ResponseEntity<String> deleteCustomerByCin(@PathVariable String cin) {
        customerService.deleteCustomerByCin(cin);
        return new ResponseEntity<String>("Customer with cin '" + cin + "' was deleted", HttpStatus.OK);
    }
}
