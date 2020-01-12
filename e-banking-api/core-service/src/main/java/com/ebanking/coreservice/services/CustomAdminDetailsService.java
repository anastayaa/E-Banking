package com.ebanking.coreservice.services;


import com.ebanking.coreservice.models.Admin;
import com.ebanking.coreservice.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CustomAdminDetailsService implements UserDetailsService {
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin subscriber = adminRepository.findByUsername(username);
        if(subscriber==null) new UsernameNotFoundException("User not found");
        return subscriber;
    }


    @Transactional
    public Admin loadAdminById(Long id){
        Admin admin = adminRepository.getById(id);
        if(admin==null) new UsernameNotFoundException("Admin not found");
        return admin;

    }

}
