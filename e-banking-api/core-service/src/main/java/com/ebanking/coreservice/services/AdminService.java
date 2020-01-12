package com.ebanking.coreservice.services;

import com.ebanking.coreservice.Exceptions.UsernameAlreadyExistsException;
import com.ebanking.coreservice.models.Admin;
import com.ebanking.coreservice.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;


    public Iterable<Admin> findAllAdmins(){
        return adminRepository.findAll();
    }

    public Admin saveOrUpdate(Admin admin){
        try{
            admin.setPassword(bCryptPasswordEncoder.encode(admin.getPassword()));

            //Username has to be unique (exception)
            admin.setUsername(admin.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword

            return adminRepository.save(admin);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+admin.getUsername()+"' already exists");
        }

    }
}
