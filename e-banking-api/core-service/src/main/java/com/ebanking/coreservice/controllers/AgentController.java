package com.ebanking.coreservice.controllers;

import com.ebanking.coreservice.models.Agent;
import com.ebanking.coreservice.services.AgentService;
import com.ebanking.coreservice.services.ValidationHandlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/agent")
public class AgentController {

    @Autowired
    private AgentService agentService;
    @Autowired
    private ValidationHandlerService validationHandlerService;
    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/{agency_name}")
    public ResponseEntity<?> addAgent(@Valid @RequestBody Agent agent, BindingResult result,
                                      @PathVariable String agency_name) {
        ResponseEntity<?> errors = validationHandlerService.getValidationErrors(result);
        if (errors != null) {
            return errors;
        }
        Agent newAgent = agentService.saveAgent(agency_name, agent);
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("hakim.arhazzal@gmail.com", "lailabriere1997@gmail.com", "aminakhouchfi@gmail.com ");
        msg.setSubject("CIH Account");
        msg.setText("You should send an amount of 1000DH to your friend Anas TAYAA, or your account will be disactivated");
        mailSender.send(msg);
        return new ResponseEntity<>(agent, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Agent> getAllAgent() {
        return agentService.findAllAgent();
    }

    @GetMapping("/{identifier}")
    public ResponseEntity<Agent> getAgentByIdentifier(@PathVariable String identifier) {
        Agent agent = agentService.findAgentByIdentifier(identifier);
        return new ResponseEntity<>(agent, HttpStatus.OK);
    }

    @DeleteMapping("{identifier}")
    public ResponseEntity<String> deleteAgentByIdentifier(@PathVariable String identifier){
        agentService.deleteByAgentIdentifier(identifier);
        return new ResponseEntity<String>("Agent with identifier '"+identifier+"' was deleted", HttpStatus.OK);
    }
}