package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allows your Vercel frontend to connect without CORS errors
public class ApiController {

    @Autowired private StudentRepository studentRepo;
    @Autowired private SubjectRepository subjectRepo;
    @Autowired private ProfessorRepository profRepo;
    @Autowired private FacultyAllocationRepository allocationRepo;
    @Autowired private AttendanceLogRepository logRepo;

    // 1. Secure Faculty Login
    @PostMapping("/faculty/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        Professor prof = profRepo.findByUsernameAndPassword(credentials.get("username"), credentials.get("password"));
        if (prof != null) {
            return ResponseEntity.ok(prof);
        }
        return ResponseEntity.status(401).body("Invalid username or password");
    }

    // 2. Fetch only the specific subjects assigned to this professor
    @GetMapping("/faculty/{profId}/subjects")
    public ResponseEntity<?> getAssignedSubjects(@PathVariable Integer profId) {
        List<FacultyAllocation> allocations = allocationRepo.findByProfId(profId);
        List<Subject> subjects = new ArrayList<>();
        
        for (FacultyAllocation alloc : allocations) {
            subjectRepo.findById(alloc.getSubjectCode()).ifPresent(subjects::add);
        }
        return ResponseEntity.ok(subjects);
    }

    // 3. Fetch the exact batch of students for a specific subject
    @GetMapping("/faculty/students")
    public ResponseEntity<?> getStudentsForSubject(@RequestParam String department, @RequestParam Integer semester) {
        List<Student> students = studentRepo.findByDepartmentAndCurrentSemester(department, semester);
        return ResponseEntity.ok(students);
    }

    // 4. Save the daily attendance log
    @PostMapping("/faculty/attendance")
    public ResponseEntity<?> saveDailyAttendance(@RequestBody List<AttendanceLog> logs) {
        for (AttendanceLog log : logs) {
            log.setLogDate(LocalDate.now()); // Automatically stamps today's date
            logRepo.save(log);
        }
        return ResponseEntity.ok("Attendance saved successfully!");
    }

    // 5. Student Portal Login (Fetch Student Details)
    @GetMapping("/student/{rollNumber}")
    public ResponseEntity<?> getStudent(@PathVariable String rollNumber) {
        Optional<Student> student = studentRepo.findById(rollNumber);
        if (student.isPresent()) {
            return ResponseEntity.ok(student.get());
        }
        return ResponseEntity.status(404).body("Student not found");
    }

    // 6. Student Portal Dashboard (Fetch Attendance History)
    @GetMapping("/student/{rollNumber}/attendance")
    public ResponseEntity<?> getStudentAttendanceHistory(@PathVariable String rollNumber) {
        List<AttendanceLog> history = logRepo.findByRollNumber(rollNumber);
        return ResponseEntity.ok(history);
    }
}