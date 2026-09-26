package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "professors")
public class Professor {
    public Integer getProfId() {
        return profId;
    }
    public void setProfId(Integer profId) {
        this.profId = profId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer profId;
    private String name;
    private String username;
    private String password;

    // Right-click -> Source Action -> Generate Getters and Setters
}