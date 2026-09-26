package com.example.demo.component;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void run(String... args) throws Exception {
        // Only generate students if the database is completely empty
        if (studentRepository.count() == 0) {
            String[] departments = {"cse", "it", "apm", "tt"};
            
            for (String dept : departments) {
                for (int sem = 1; sem <= 8; sem++) {
                    for (int i = 1; i <= 20; i++) {
                        Student student = new Student();
                        
                        // Creates names like "Student 1", "Student 2"
                        student.setName("Student " + i); 
                        
                        // Creates realistic Roll Numbers like: GCETTS-CSE-1-01
                        String rollNum = String.format("GCETTS-%s-%d-%02d", dept.toUpperCase(), sem, i);
                        student.setRollNumber(rollNum);
                        
                        student.setDepartment(dept);
                        student.setCurrentSemester(sem);
                        
                        studentRepository.save(student);
                    }
                }
            }
            System.out.println("✅ SUCCESSFULLY GENERATED 640 STUDENTS (20 per Semester/Department)!");
        }
    }
}