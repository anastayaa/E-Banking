package com.ebanking.coreservice.repositories;

import com.ebanking.coreservice.models.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource
@Repository
public interface AdminRepository  extends CrudRepository<Admin,Long> {
    Admin findByUsername(String username);
    Admin getById(Long id);
}
