package com.ebanking.coreservice.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "The firstname can't be empty")
    @Column(nullable = false)
    @Size(max = 50)
    private String firstName;
    @NotBlank(message = "The lastname can't be empty")
    @Column(nullable = false)
    @Size(max = 50)
    private String lastName;
    @NotBlank(message = "The cin can't be empty")
    @Column(unique = true, nullable = false, updatable = false)
    @Size(max = 50)
    private String cin;
    @NotBlank(message = "The phone can't be empty")
    @Column(nullable = false)
    @Size(min = 10, max = 14)
    private String phone;
    @NotBlank(message = "The address can't be empty")
    @Column(nullable = false)
    @Size(max = 100, message = "address is not valid")
    private String address;
    @NotBlank(message = "The email can't be empty")
    @Column(nullable = false)
    @Size(max = 50, message = "email is not valid")
    @Email
    private String email;
    @NotBlank(message = "The gender can't be empty")
    @Column(nullable = false)
    private String gender;
    @NotBlank(message = "The birthday can't be empty")
    @Column(nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date birthDay;
    @NotBlank(message = "The account login can't be empty")
    @Column(unique = true, nullable = false)
    @Size(min = 8, max = 50)
    private String login;
    @NotBlank(message = "The account password can't be empty")
    @Column(nullable = false)
    @Size(min = 8, max = 50)
    private String password;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date createdAt;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date updatedAt;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.REFRESH, orphanRemoval = true)
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<Account> accounts = new ArrayList<>();
    @OneToOne(mappedBy = "customer", fetch = FetchType.EAGER)
    @JsonIgnore
    private Contract contract;

    public Customer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Date birthDay) {
        this.birthDay = birthDay;
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

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
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
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", cin='" + cin + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", gender='" + gender + '\'' +
                ", birthDay=" + birthDay +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}
