package com.example.demo.repository; 

import com.example.demo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    
    // Spring Boot automatically writes the SQL query for this just by reading the method name!
    List<Student> findByDepartmentAndCurrentSemester(String department, int currentSemester);
    
    Student findByRollNumber(String rollNumber);
}