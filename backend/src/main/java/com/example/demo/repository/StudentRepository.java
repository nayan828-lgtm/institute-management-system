package com.example.demo.repository;

import com.example.demo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StudentRepository extends JpaRepository<Student, String> {
    // Spring magically turns this method name into a SQL query!
    List<Student> findByDepartmentAndCurrentSemester(String department, Integer currentSemester);
}