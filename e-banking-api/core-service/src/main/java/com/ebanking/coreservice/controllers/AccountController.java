package com.ebanking.coreservice.controllers;

import com.ebanking.coreservice.models.Account;
import com.ebanking.coreservice.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/account")
@CrossOrigin
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccoutById(@PathVariable String id) {
        Account account = accountService.findAccountById(id);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Account> getAllAccount() {
        return accountService.findAllAccounts();
    }

    @GetMapping("/beneficiary/{to}/{id}")
    public Account addBeneficiary(@PathVariable String to, @PathVariable String id) {
        Account account = accountService.addBeneficiary(to, id);
        return account;
    }

    @GetMapping("/beneficiary/all/{id}")
    public Iterable<Account> getBeneficiaries(@PathVariable String id) {
        return accountService.findAllBeneficiaries(Long.parseLong(id));
    }
}
