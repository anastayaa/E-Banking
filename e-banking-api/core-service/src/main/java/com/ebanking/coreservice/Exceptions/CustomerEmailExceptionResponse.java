package com.ebanking.coreservice.Exceptions;

public class CustomerEmailExceptionResponse {

    private String customer;

    public CustomerEmailExceptionResponse(String customer) {
        this.customer = customer;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }
}
