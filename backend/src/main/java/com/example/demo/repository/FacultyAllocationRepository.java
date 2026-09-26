package com.example.demo.repository;

import com.example.demo.model.FacultyAllocation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FacultyAllocationRepository extends JpaRepository<FacultyAllocation, Integer> {
    // Finds all subjects assigned to a specific professor
    List<FacultyAllocation> findByProfId(Integer profId);
}