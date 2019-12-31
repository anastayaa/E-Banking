package com.ebanking.coreservice.services;

import com.ebanking.coreservice.Exceptions.AgencyNameException;
import com.ebanking.coreservice.Exceptions.AgentEmailException;
import com.ebanking.coreservice.models.Agency;
import com.ebanking.coreservice.models.Agent;
import com.ebanking.coreservice.repositories.AgencyRepository;
import com.ebanking.coreservice.repositories.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;
    @Autowired
    private AgencyRepository agencyRepository;

    public Agent saveAgent(String agencyName, Agent agent) {
        try {
            Agency agency = agencyRepository.findByName(agencyName);
            if (agency == null) {
                throw new AgencyNameException("Agency with name '" + agencyName + "' not found");
            }
            agent.setAgency(agency);
            String[] helper=agent.getEmail().split("@");
            agent.setIdentifier(agent.getFirstName() + "-" + helper[0]);
            return agentRepository.save(agent);
        } catch (Exception ex) {
            throw new AgentEmailException("Agent with email '" + agent.getEmail() + "' already exist");
        }
    }

    public Iterable<Agent> findAllAgent() {
        return agentRepository.findAll();
    }

    public Agent findAgentByIdentifier(String identifier) {
        Agent agent = agentRepository.findByIdentifier(identifier);
        if (agent == null) {
            throw new AgentEmailException("Agent with identifier '" + identifier + "' doesn't exist");
        }
        return agent;
    }

    public void deleteByAgentIdentifier(String identifier) {
        Agent agent = this.findAgentByIdentifier(identifier);
        agentRepository.delete(agent);
    }
}
