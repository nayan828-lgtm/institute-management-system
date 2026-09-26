package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class AttendanceRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String rollNumber;
    private int semester;
    private String subjectName;
    
    // THIS FIXES THE CRASH! It tells the DB not to use the reserved word 'month'
    @Column(name = "record_month") 
    private String month; 
    
    private int classesAttended;
    private int totalClasses;

    public AttendanceRecord() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRollNumber() { return rollNumber; }
    public void setRollNumber(String rollNumber) { this.rollNumber = rollNumber; }

    public int getSemester() { return semester; }
    public void setSemester(int semester) { this.semester = semester; }

    public String getSubjectName() { return subjectName; }
    public void setSubjectName(String subjectName) { this.subjectName = subjectName; }

    public String getMonth() { return month; }
    public void setMonth(String month) { this.month = month; }

    public int getClassesAttended() { return classesAttended; }
    public void setClassesAttended(int classesAttended) { this.classesAttended = classesAttended; }

    public int getTotalClasses() { return totalClasses; }
    public void setTotalClasses(int totalClasses) { this.totalClasses = totalClasses; }

    public double getPercentage() {
        if (totalClasses == 0) return 0;
        return ((double) classesAttended / totalClasses) * 100;
    }
}