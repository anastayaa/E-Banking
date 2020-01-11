package com.ebanking.coreservice.services;

import com.ebanking.coreservice.models.Account;
import com.ebanking.coreservice.models.Customer;
import com.ebanking.coreservice.repositories.AccountRepository;
import com.ebanking.coreservice.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account findAccountById(String id){
        Account account=accountRepository.findAccountById(Long.parseLong(id));
        return account;
    }

    public Iterable<Account> findAllAccounts() {
        Iterable<Account> accounts = accountRepository.findAll();
        for (Account c : accounts) {
            System.out.println(c.getCustomer());
        }
        return accounts;
    }

    public Iterable<Account> findAllBeneficiaries(Long id) {
        Account account = accountRepository.findAccountById(id);
        Iterable<Account> beneficiaries = account.getBeneficiaries();
        return beneficiaries;
    }

    public Account addBeneficiary(String to, String id) {
        Account beneficiery = accountRepository.findAccountById(Long.parseLong(id));
        Account account = accountRepository.findAccountById(Long.parseLong(to));
        account.getBeneficiaries().add(beneficiery);
        accountRepository.save(account);
        return account;
    }
}
