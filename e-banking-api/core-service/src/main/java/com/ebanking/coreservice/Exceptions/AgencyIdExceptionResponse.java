package com.ebanking.coreservice.Exceptions;

public class AgencyIdExceptionResponse {

    private String agency;

    public AgencyIdExceptionResponse(String agencyResponse) {
        this.agency = agencyResponse;
    }

    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }
}
