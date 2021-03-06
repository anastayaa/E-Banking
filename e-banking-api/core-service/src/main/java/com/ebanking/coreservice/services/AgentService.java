package com.ebanking.coreservice.services;

import com.ebanking.coreservice.Exceptions.AgencyNameException;
import com.ebanking.coreservice.Exceptions.AgentEmailException;
import com.ebanking.coreservice.models.Agency;
import com.ebanking.coreservice.models.Agent;
import com.ebanking.coreservice.repositories.AgencyRepository;
import com.ebanking.coreservice.repositories.AgentRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;
    @Autowired
    private AgencyRepository agencyRepository;
    @Autowired
    private JavaMailSender mailSender;

    public Agent saveAgent(String agencyName, Agent agent) {
        try {
            Agency agency = agencyRepository.findByName(agencyName);
            if (agency == null) {
                throw new AgencyNameException("Agency with name '" + agencyName + "' not found");
            }
            agent.setAgency(agency);
            String[] helper = agent.getEmail().split("@");
            agent.setIdentifier(agent.getFirstName() + "-" + helper[0]);
            agent.setLogin(agent.getIdentifier());
            agent.setPassword(agent.getIdentifier() + "" + new Random().nextInt());
            Agent newAgent = agentRepository.save(agent);
            this.sendMail(newAgent);
            this.sendSMS(newAgent);
            return newAgent;
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

    public void sendMail(Agent agent) {
        SimpleMailMessage msg = new SimpleMailMessage();
        String to = agent.getEmail();
        String subject = "Agency Bank: Login and Password account";
        String login = agent.getLogin();
        String password = agent.getPassword();
        String text = "Your login account: " + login + ", Your password account: " + password;
        msg.setTo(to);
        msg.setSubject(subject);
        msg.setText(text);
        mailSender.send(msg);
    }

    public void sendSMS(Agent agent) {
        String login = agent.getLogin();
        String password = agent.getPassword();
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
