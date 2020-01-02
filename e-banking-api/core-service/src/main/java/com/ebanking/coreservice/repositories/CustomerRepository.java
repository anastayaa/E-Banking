package com.ebanking.coreservice.repositories;

import com.ebanking.coreservice.models.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    Customer findByCin(String cin);
}
