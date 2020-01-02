package com.ebanking.coreservice.repositories;

import com.ebanking.coreservice.models.Agent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgentRepository extends CrudRepository<Agent, Long> {

    Agent findByIdentifier(String email);
}
