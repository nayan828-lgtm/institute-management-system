package com.example.demo.repository;

import com.example.demo.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Integer> {
    // Used for the secure faculty login
    Professor findByUsernameAndPassword(String username, String password);
}