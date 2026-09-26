package com.example.demo.repository;

import com.example.demo.model.AttendanceRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<AttendanceRecord, Long> {
    // Find a student's attendance for a specific subject and month
    List<AttendanceRecord> findByRollNumberAndSemesterAndSubjectNameAndMonth(
        String rollNumber, int semester, String subjectName, String month
    );
    
    // Find all attendance for a student in a specific semester
    List<AttendanceRecord> findByRollNumberAndSemester(String rollNumber, int semester);
    // Fetch an entire classroom's attendance for a specific subject and month
    List<AttendanceRecord> findBySemesterAndSubjectNameAndMonth(int semester, String subjectName, String month);
}