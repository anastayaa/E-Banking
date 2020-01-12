package com.ebanking.coreservice.services;

import com.ebanking.coreservice.Exceptions.AgencyIdException;
import com.ebanking.coreservice.models.Agency;
import com.ebanking.coreservice.repositories.AgencyRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.ArgumentMatchers.any;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class AgencyServiceTest {

    @InjectMocks
    private AgencyService agencyService;

    @Mock
    private AgencyRepository agencyRepository;

    @Test
    public void saveAgencyTest() {
        Agency newAgency = new Agency();
        newAgency.setId(1L);
        newAgency.setName("CIH Plateau");

        when(agencyRepository.save(any(Agency.class))).then(returnsFirstArg());

        Agency agency = agencyService.saveAgency(newAgency);
        assertEquals(newAgency.getId(), agency.getId());
    }

    @Test(expected = AgencyIdException.class)
    public void saveAgentAlreadyExistTest(){
        Agency newAgency = new Agency();
        newAgency.setId(1L);
        newAgency.setName("CIH Plateau");

        when(agencyRepository.save(any(Agency.class))).thenThrow(AgencyIdException.class);

        agencyService.saveAgency(newAgency);
    }

    @Test
    public void findAllAgenciesTest() {
        List<Agency> agencies = new ArrayList<>();
        Agency agency1 = new Agency();
        agency1.setId(1L);
        agency1.setName("CIH Plateau");
        Agency agency2 = new Agency();
        agency2.setId(2L);
        agency2.setName("CIH EL khir");
        agencies.add(agency1);
        agencies.add(agency2);

        when(agencyRepository.findAll()).thenReturn(agencies);

        List<Agency> expectedAgencies = (List<Agency>) agencyService.findAllAgencies();
        assertEquals(agencies.size(), expectedAgencies.size());
        verify(agencyRepository, times(1)).findAll();
    }

    @Test
    public void findAllAgenciesByCityTest() {
        List<Agency> agencies = new ArrayList<>();
        Agency agency1 = new Agency();
        agency1.setId(1L);
        agency1.setCity("Safi");
        Agency agency2 = new Agency();
        agency2.setId(2L);
        agency2.setCity("Safi");
        agencies.add(agency1);
        agencies.add(agency2);
        String city = "Safi";
        when(agencyRepository.findAgenciesByCity(city)).thenReturn(agencies);

        List<Agency> expectedAgencies = (List<Agency>) agencyService.findAllAgenciesByCity(city);

        assertEquals(expectedAgencies, agencies);
    }

    @Test
    public void findAgencyByIdTest() {
        Agency agency = new Agency();
        agency.setId(1L);
        agency.setName("CIH Plateau");

        when(agencyRepository.findAgencyById(1L)).thenReturn(agency);

        Agency expectedAgency = agencyService.findAgencyById(1L);

        assertEquals(expectedAgency, agency);
    }

    @Test(expected = AgencyIdException.class)
    public void findAgencyByIdNotFoundTest() {
        Long id = 1L;

        when(agencyRepository.findAgencyById(id)).thenThrow(AgencyIdException.class);

        agencyService.findAgencyById(1L);
    }

    @Test
    public void deleteAgencyByIdTest() {
        Agency agency = new Agency();
        agency.setId(1L);
        agency.setName("CIH Plateau");

        when(agencyRepository.findAgencyById(1L)).thenReturn(agency);
        agencyService.deleteAgencyById(1L);

        verify(agencyRepository, times(1)).delete(any(Agency.class));
    }

    @Test(expected = AgencyIdException.class)
    public void deleteAgencyByIdNotFoundTest() {
        Long id = 1L;

        when(agencyRepository.findAgencyById(id)).thenThrow(AgencyIdException.class);

        agencyService.deleteAgencyById(1L);
    }
}
