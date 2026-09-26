package com.example.demo.controller;

import com.example.demo.model.Student;
import com.example.demo.model.AttendanceRecord;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    // --- STUDENT MANAGEMENT ---

    @GetMapping("/students/{department}/semester/{semester}")
    public List<Student> getStudentsByDeptAndSem(@PathVariable String department, @PathVariable int semester) {
        return studentRepository.findByDepartmentAndCurrentSemester(department, semester);
    }

    @PostMapping("/students/add")
    public Student addStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    // THE PROMOTE FEATURE
    @PostMapping("/students/promote/{department}/{currentSemester}")
    public String promoteStudents(@PathVariable String department, @PathVariable int currentSemester) {
        List<Student> students = studentRepository.findByDepartmentAndCurrentSemester(department, currentSemester);
        int count = 0;
        
        for (Student s : students) {
            if (s.getCurrentSemester() < 8) { // Max semester is 8
                s.setCurrentSemester(s.getCurrentSemester() + 1);
                count++;
            }
        }
        studentRepository.saveAll(students); // Save all updated students at once
        return "Successfully promoted " + count + " students to Semester " + (currentSemester + 1);
    }

    @GetMapping("/students/roll/{rollNumber}")
    public Student getStudentByRollNumber(@PathVariable String rollNumber) {
        Student student = studentRepository.findByRollNumber(rollNumber);
        if (student == null) throw new RuntimeException("Student not found");
        return student;
    }

    // --- ATTENDANCE MANAGEMENT ---

    // Admin uploads manual attendance for a specific subject and month
    // --- ATTENDANCE MANAGEMENT ---

    // Upsert (Update if exists, Insert if new)
    @PostMapping("/attendance/upload")
    public AttendanceRecord uploadAttendance(@RequestBody AttendanceRecord record) {
        List<AttendanceRecord> existing = attendanceRepository.findByRollNumberAndSemesterAndSubjectNameAndMonth(
                record.getRollNumber(), record.getSemester(), record.getSubjectName(), record.getMonth()
        );
        
        if (!existing.isEmpty()) {
            // If the record already exists, just update the numbers!
            AttendanceRecord update = existing.get(0);
            update.setClassesAttended(record.getClassesAttended());
            update.setTotalClasses(record.getTotalClasses());
            return attendanceRepository.save(update);
        }
        // Otherwise, save as a brand new record
        return attendanceRepository.save(record);
    }

    // Fetch existing attendance so the Admin UI doesn't look empty
    @GetMapping("/attendance/batch/semester/{semester}/subject/{subjectName}/month/{month}")
    public List<AttendanceRecord> getBatchAttendance(
            @PathVariable int semester, @PathVariable String subjectName, @PathVariable String month) {
        return attendanceRepository.findBySemesterAndSubjectNameAndMonth(semester, subjectName, month);
    }

    // Fetch a single student's attendance (Used by the Student Portal)
    @GetMapping("/attendance/{rollNumber}/semester/{semester}")
    public List<AttendanceRecord> getStudentAttendance(@PathVariable String rollNumber, @PathVariable int semester) {
        return attendanceRepository.findByRollNumberAndSemester(rollNumber, semester);
    }
}