package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {
    public String getRollNumber() {
        return rollNumber;
    }
    public void setRollNumber(String rollNumber) {
        this.rollNumber = rollNumber;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDepartment() {
        return department;
    }
    public void setDepartment(String department) {
        this.department = department;
    }
    public Integer getCurrentSemester() {
        return currentSemester;
    }
    public void setCurrentSemester(Integer currentSemester) {
        this.currentSemester = currentSemester;
    }
    @Id
    private String rollNumber;
    private String name;
    private String department;
    private Integer currentSemester;
    
    // Right-click -> Source Action -> Generate Getters and Setters
}