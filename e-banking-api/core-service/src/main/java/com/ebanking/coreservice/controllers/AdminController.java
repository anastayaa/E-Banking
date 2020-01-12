package com.ebanking.coreservice.controllers;

import com.ebanking.coreservice.models.Admin;
import com.ebanking.coreservice.payload.JWTLoginSuccessResponse;
import com.ebanking.coreservice.payload.LoginRequest;
import com.ebanking.coreservice.security.JwtTokenProvider;
import com.ebanking.coreservice.services.AdminService;
import com.ebanking.coreservice.services.ValidationHandlerService;
import com.ebanking.coreservice.validator.AdminValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import static com.ebanking.coreservice.security.SecurityConstants.TOKEN_PREFIX;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private ValidationHandlerService validationHandlerService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminValidator adminValidator;
    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;



    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        System.out.println("ok");
        ResponseEntity<?> errorMap = validationHandlerService.getValidationErrors(result);
        if(errorMap != null) return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );


        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginSuccessResponse(true, jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody Admin admin, BindingResult result) {
        // Validate passwords match
        adminValidator.validate(admin,result);
        ResponseEntity<?> errorMap = validationHandlerService.getValidationErrors(result);
        if (errorMap != null) return errorMap;

        Admin newAdmin = adminService.saveOrUpdate(admin);

        return new ResponseEntity<Admin>(newAdmin, HttpStatus.CREATED);
    }

}
