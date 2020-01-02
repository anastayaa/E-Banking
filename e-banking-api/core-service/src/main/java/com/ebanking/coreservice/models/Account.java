package com.ebanking.coreservice.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "The account number can't be empty")
    @Column(unique = true, updatable = false, nullable = false)
    private String accountNumber;
    private double balance = 0;
    @NotBlank(message = "The account login can't be empty")
    @Column(unique = true, nullable = false)
    private String login;
    @NotBlank(message = "The account password can't be empty")
    @Column(nullable = false)
    @Size(min = 8)
    private String password;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date createdAt;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date updatedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", nullable = false)
    @JsonIgnore
    private Customer customer;
    @OneToMany(mappedBy = "account", cascade = CascadeType.REFRESH, orphanRemoval = false)
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<Card> cards = new ArrayList<>();
    @ManyToMany(cascade = CascadeType.REFRESH)
    @JoinTable(name = "account_beneficiary",
            joinColumns = @JoinColumn(name = "sender_id"), inverseJoinColumns = @JoinColumn(name = "receiver_id"))
    private List<Account> beneficiaries = new ArrayList<>();
    @OneToMany(mappedBy = "account", cascade = CascadeType.REFRESH, orphanRemoval = true)
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<Operation> operations = new ArrayList<>();

    public Account() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    public List<Account> getBeneficiaries() {
        return beneficiaries;
    }

    public void setBeneficiaries(List<Account> beneficiaries) {
        this.beneficiaries = beneficiaries;
    }

    public List<Operation> getOperations() {
        return operations;
    }

    public void setOperations(List<Operation> operations) {
        this.operations = operations;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", accountNumber='" + accountNumber + '\'' +
                ", balance=" + balance +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}
