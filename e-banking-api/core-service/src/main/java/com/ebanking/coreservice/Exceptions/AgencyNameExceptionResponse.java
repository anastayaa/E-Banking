package com.ebanking.coreservice.Exceptions;

public class AgencyNameExceptionResponse {

    private String agency;

    public AgencyNameExceptionResponse(String agencyResponse) {
        this.agency = agencyResponse;
    }

    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }
}
