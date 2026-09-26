package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "faculty_allocations")
public class FacultyAllocation {
    public Integer getAllocationId() {
        return allocationId;
    }
    public void setAllocationId(Integer allocationId) {
        this.allocationId = allocationId;
    }
    public Integer getProfId() {
        return profId;
    }
    public void setProfId(Integer profId) {
        this.profId = profId;
    }
    public String getSubjectCode() {
        return subjectCode;
    }
    public void setSubjectCode(String subjectCode) {
        this.subjectCode = subjectCode;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer allocationId;
    private Integer profId;
    private String subjectCode;

    // Right-click -> Source Action -> Generate Getters and Setters
}