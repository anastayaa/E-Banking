package com.ebanking.coreservice.services;

import com.ebanking.coreservice.Exceptions.AgencyNameException;
import com.ebanking.coreservice.models.Agency;
import com.ebanking.coreservice.repositories.AgencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgencyService {

    @Autowired
    private AgencyRepository agencyRepository;

    public Agency saveAgency(Agency agency) {
        try {
            return agencyRepository.save(agency);
        } catch (Exception ex) {
            throw new AgencyNameException("Agency with name '" + agency.getName() + "' already exist");
        }
    }

    public Iterable<Agency> findAllAgencies() {
        return agencyRepository.findAll();
    }

    public Iterable<Agency> findAllAgenciesByCity(String city) {
        Iterable<Agency> agencies = agencyRepository.findAgenciesByCity(city);
        if (agencies == null) {
            throw new AgencyNameException("Agency with address '" + city + "' not found");
        }
        return agencies;
    }


    public Agency findAgencyById(long id) {
        Agency agency = agencyRepository.findAgencyById(id);
        if (agency == null) {
            throw new AgencyNameException("Agency with name '" + id + "' not found");
        }
        return agency;
    }

    public void deleteAgencyById(long id) {
        Agency agency = this.findAgencyById(id);
        agencyRepository.delete(agency);
    }
}
