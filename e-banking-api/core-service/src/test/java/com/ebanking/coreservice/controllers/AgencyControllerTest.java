package com.ebanking.coreservice.controllers;

import com.ebanking.coreservice.services.AgencyService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@RunWith(MockitoJUnitRunner.class)
public class AgencyControllerTest {

    @InjectMocks
    private AgencyController agencyController;

    @Mock
    private AgencyService agencyService;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(AgencyController.class).build();
    }

    @Test
    public void getAllAgenciesTest(){

    }
}
