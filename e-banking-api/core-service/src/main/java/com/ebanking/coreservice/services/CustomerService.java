package com.ebanking.coreservice.services;

import com.ebanking.coreservice.Exceptions.CustomerEmailException;
import com.ebanking.coreservice.models.Account;
import com.ebanking.coreservice.models.Customer;
import com.ebanking.coreservice.repositories.AccountRepository;
import com.ebanking.coreservice.repositories.CustomerRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private JavaMailSender mailSender;

    public Customer saveCustomer(Customer customer) {
        try {
            String[] helper = customer.getEmail().split("@");
            Account account = new Account();
            Random random = new Random();
            String accountNumber = "";
            for (int i = 0; i < 16; i++) {
                accountNumber += Integer.toString(random.nextInt(10));
            }
            account.setAccountNumber(accountNumber);
            account.setLogin(helper[0]);
            account.setPassword(helper[0] + "-" + random.nextInt());
            Customer newCustomer = customerRepository.save(customer);
            account.setCustomer(customer);
            accountRepository.save(account);
            this.sendMail(account);
            this.sendSMS(account);
            return newCustomer;
        } catch (Exception ex) {
            throw new CustomerEmailException("Customer with email '" + customer.getEmail() + "' already exist");
        }
    }

    public Customer findCustomerById(String id) {
        Customer customer = customerRepository.findCustomerById(Long.parseLong(id));
        if (customer == null) {
            throw new CustomerEmailException("Customer with cin '" + id + "' doesn't exist");
        }
        return customer;
    }

    public void deleteCustomerById(String id) {
        Customer customer = this.findCustomerById(id);
        customerRepository.delete(customer);
    }

    public Iterable<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }


    public void sendMail(Account account) {
        SimpleMailMessage msg = new SimpleMailMessage();
        String to = account.getCustomer().getEmail();
        String subject = "Agency Bank: Login and Password account";
        String login = account.getLogin();
        String password = account.getPassword();
        String text = "Your login account: " + login + ", Your password account: " + password;
        msg.setTo(to);
        msg.setSubject(subject);
        msg.setText(text);
        mailSender.send(msg);
    }

    public void sendSMS(Account account) {
        String login = account.getLogin();
        String password = account.getPassword();
        String text = "Your login account: " + login + ", Your password account: " + password;

        String ACCOUNT_SID =
                "AC1c8ea76f6298028ccfac6f902df5a040";
        String AUTH_TOKEN =
                "5bb520d4094fb3fba784ab7e521e5d05";
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Message message = Message
                .creator(new PhoneNumber("+212673163363"), // to
                        new PhoneNumber("+18452088441"), // from
                        text
                )
                .create();
    }
}
