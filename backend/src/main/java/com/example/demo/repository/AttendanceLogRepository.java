package com.example.demo.repository;

import com.example.demo.model.AttendanceLog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.time.LocalDate;

public interface AttendanceLogRepository extends JpaRepository<AttendanceLog, Integer> {
    // For the student portal to see their history
    List<AttendanceLog> findByRollNumber(String rollNumber);
    
    // To check if attendance was already taken today
    List<AttendanceLog> findBySubjectCodeAndLogDate(String subjectCode, LocalDate logDate);
}