package com.ebanking.coreservice.services;

import com.ebanking.coreservice.Exceptions.CustomerEmailException;
import com.ebanking.coreservice.models.Customer;
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
    private JavaMailSender mailSender;

    public Customer saveCustomer(Customer customer) {
        try {
            String[] helper = customer.getEmail().split("@");
            customer.setLogin(helper[0]);
            customer.setPassword(helper[0] + "-" + new Random().nextInt());
            Customer newCustomer = customerRepository.save(customer);
            this.sendMail(newCustomer);
            this.sendSMS(newCustomer);
            return newCustomer;
        } catch (Exception ex) {
            throw new CustomerEmailException("Customer with email '" + customer.getEmail() + "' already exist");
        }
    }

    public Customer findCustomerByCin(String cin) {
        Customer customer = customerRepository.findByCin(cin);
        if (customer == null) {
            throw new CustomerEmailException("Customer with cin '" + cin + "' doesn't exist");
        }
        return customer;
    }

    public void deleteCustomerByCin(String cin) {
        Customer customer = this.findCustomerByCin(cin);
        customerRepository.delete(customer);
    }

    public Iterable<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }


    public void sendMail(Customer customer) {
        SimpleMailMessage msg = new SimpleMailMessage();
        String to = customer.getEmail();
        String subject = "Agency Bank: Login and Password account";
        String login = customer.getLogin();
        String password = customer.getPassword();
        String text = "Your login account: " + login + ", Your password account: " + password;
        msg.setTo(to);
        msg.setSubject(subject);
        msg.setText(text);
        mailSender.send(msg);
    }

    public void sendSMS(Customer customer) {
        String login = customer.getLogin();
        String password = customer.getPassword();
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
