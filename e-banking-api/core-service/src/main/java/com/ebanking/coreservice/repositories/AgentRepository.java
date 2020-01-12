package com.ebanking.coreservice.repositories;

import com.ebanking.coreservice.models.Agency;
import com.ebanking.coreservice.models.Agent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface AgentRepository extends CrudRepository<Agent, Long> {

    Agent findByIdentifier(String email);
    Collection<Agent> findByAgency(Agency agency);
}
