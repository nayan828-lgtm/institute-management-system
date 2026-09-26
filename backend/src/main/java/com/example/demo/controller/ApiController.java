package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.repository.*;

import main.java.com.example.demo.model.AttendanceLog;
import main.java.com.example.demo.model.FacultyAllocation;
import main.java.com.example.demo.model.Professor;
import main.java.com.example.demo.repository.AttendanceLogRepository;
import main.java.com.example.demo.repository.FacultyAllocationRepository;
import main.java.com.example.demo.repository.ProfessorRepository;
import main.java.com.example.demo.repository.SubjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

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

    // 4. Save the daily attendance log (With Duplicate Prevention)
    @PostMapping("/faculty/attendance")
    @Transactional
    public ResponseEntity<?> saveDailyAttendance(@RequestBody List<AttendanceLog> logs) {
        if (logs.isEmpty()) {
            return ResponseEntity.badRequest().body("No logs provided");
        }
        
        String subjectCode = logs.get(0).getSubjectCode();
        LocalDate today = LocalDate.now();

        // 1. Delete any existing attendance for this subject today to prevent duplicates
        logRepo.deleteBySubjectCodeAndLogDate(subjectCode, today);

        // 2. Set today's date for all logs and save them at once
        for (AttendanceLog log : logs) {
            log.setLogDate(today);
        }
        logRepo.saveAll(logs);
        
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