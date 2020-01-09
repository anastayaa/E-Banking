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

    public Iterable<Agency> findAllAgenciesByAddress(String address) {
        Iterable<Agency> agencies = agencyRepository.findByAddressLike("%" + address + "%");
        if (agencies == null) {
            throw new AgencyNameException("Agency with address '" + address + "' not found");
        }
        return agencies;
    }

    public Iterable<Agency> findAllAgenciesByName(String name) {
        Iterable<Agency> agencies = agencyRepository.findByNameLike(name);
        if (agencies == null) {
            throw new AgencyNameException("Agency with name '" + name + "' not found");
        }
        return agencies;
    }

    public Agency findAgencyByName(String agencyName) {
        Agency agency = agencyRepository.findByName(agencyName);
        if (agency == null) {
            throw new AgencyNameException("Agency with name '" + agencyName + "' not found");
        }
        return agency;
    }

    public void deleteAgencyByName(String agencyName) {
        Agency agency = this.findAgencyByName(agencyName);
        agencyRepository.delete(agency);
    }
}
