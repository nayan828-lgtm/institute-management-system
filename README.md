# Institute Management System 🎓

A robust, full-stack web application designed to manage student attendance, semester promotions, and departmental data for the Govt. College of Engineering & Textile Technology, Serampore.

## 🚀 Features

### Admin / Faculty Portal
* **Batch Loading:** Load entire classrooms instantly by filtering through Department (CSE, IT, APM, TT) and Semester (1-8).
* **Strict Attendance Validation:** Prevents logical errors (e.g., negative attendance, or entering 35 attended classes when only 30 were held).
* **Smart Upsert Logic:** Automatically fetches existing records from the database when switching subjects/months to prevent accidental data overwrites.
* **Bulk Promotion:** One-click promotion system that upgrades an entire batch of students to the next semester.

### Student Portal
* **Identity Verification:** Secure login using designated Roll Numbers.
* **Aggregated Analytics:** Groups monthly data into a single, clean Subject-wise percentage view.
* **Historical Data:** Dropdown navigation allows students to view their attendance records from past semesters.

### Auto-Seeding Database
* On the very first startup, the backend will automatically generate **640 student records** (20 students per semester, across 8 semesters and 4 departments) so the app is instantly ready for testing.

---

## 🛠️ Tech Stack
* **Frontend:** React.js, React Router, CSS3, Lucide Icons
* **Backend:** Java, Spring Boot, Spring Data JPA, RESTful APIs
* **Database:** H2 Database (Relational, File-based storage)

---

## 💻 Local Setup & Installation

To run this project locally, you will need **Node.js** and **Java (JDK 17+)** installed on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/nayan828-lgtm/institute-management-system.git](https://github.com/nayan828-lgtm/institute-management-system.git)
cd institute-management-system