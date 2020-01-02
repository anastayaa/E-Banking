package com.ebanking.coreservice.controllers;

import com.ebanking.coreservice.models.Agent;
import com.ebanking.coreservice.services.AgentService;
import com.ebanking.coreservice.services.ValidationHandlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/agent")
@CrossOrigin
public class AgentController {

    @Autowired
    private AgentService agentService;
    @Autowired
    private ValidationHandlerService validationHandlerService;

    @PostMapping("/{agency_name}")
    public ResponseEntity<?> addAgent(@Valid @RequestBody Agent agent, BindingResult result,
                                      @PathVariable String agency_name) {
        ResponseEntity<?> errors = validationHandlerService.getValidationErrors(result);
        if (errors != null) {
            return errors;
        }
        Agent newAgent = agentService.saveAgent(agency_name, agent);
        agentService.sendMail(agent);
        agentService.sendSMS(agent);
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
    public ResponseEntity<String> deleteAgentByIdentifier(@PathVariable String identifier) {
        agentService.deleteByAgentIdentifier(identifier);
        return new ResponseEntity<String>("Agent with identifier '" + identifier + "' was deleted", HttpStatus.OK);
    }
}
