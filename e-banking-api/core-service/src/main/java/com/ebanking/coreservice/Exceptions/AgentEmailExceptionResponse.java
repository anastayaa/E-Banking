package com.ebanking.coreservice.Exceptions;

public class AgentEmailExceptionResponse {

    private String agent;

    public AgentEmailExceptionResponse(String agent) {
        this.agent = agent;
    }

    public String getAgent() {
        return agent;
    }

    public void setAgent(String agent) {
        this.agent = agent;
    }
}
