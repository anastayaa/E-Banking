package com.ebanking.coreservice.repositories;

import com.ebanking.coreservice.models.Agency;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgencyRepository extends CrudRepository<Agency, Long> {

    Agency findAgencyById(Long id);

    Iterable<Agency> findAgenciesByCity(String city);

}
