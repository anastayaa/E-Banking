package com.ebanking.coreservice.repositories;

import com.ebanking.coreservice.models.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
    Account findAccountById(Long id);
}
