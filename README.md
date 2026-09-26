# 🎓 Institute Management System (GCETTS)

A full-stack, cloud-hosted Enterprise Resource Planning (ERP) mini-project built for the Government College of Engineering & Textile Technology, Serampore. This system automates daily academic operations, featuring role-based secure portals for faculty to record attendance and for students to track their real-time academic metrics.

## 🚀 Live Demo
* **Frontend (User Interface):** https://institute-management-system-tl9j.vercel.app/
* **Backend (REST API):** https://institute-management-system-1-c9x4.onrender.com

## 💻 Tech Stack
* **Frontend:** React.js, React Router, CSS3, Lucide Icons
* **Backend:** Java, Spring Boot, Spring Data JPA, RESTful APIs
* **Database:** PostgreSQL (Hosted on Neon.tech)
* **Deployment:** Vercel (Frontend), Render (Backend)

## ✨ Core Features
* **Role-Based Access Control (RBAC):** Distinct secure routing and dashboards for Faculty and Students.
* **Dynamic Relational Mapping:** Faculty dashboards automatically populate with their specifically assigned subjects and exact student batches based on department and semester.
* **Automated Attendance System:** Digital roll-call interface allowing professors to mark present/absent with live database syncing.
* **Real-Time Student Analytics:** Students can log in with their Roll Number to view cumulative attendance percentages and individual subject breakdowns.
* **CSV Reporting:** Faculty can export daily attendance records to an Excel-compatible `.csv` format in one click.
* **Bulk Scalability:** System successfully handles and maps automated data for 160 students across 4 departments (CSE, IT, APM, TT) and 4 semesters.

## 🗄️ Database Architecture
The PostgreSQL relational database is structured with 5 core entities:
1. `students` (Roll Number, Name, Department, Semester)
2. `professors` (ID, Name, Username, Secure Password)
3. `subjects` (Subject Code, Name, Department, Semester)
4. `faculty_allocations` (Maps Professor IDs to Subject Codes)
5. `attendance_logs` (Tracks Subject, Roll Number, Date, and Present/Absent Status)

## 🧪 Testing Credentials
To evaluate the live system, use the following proof-of-concept credentials:

**Faculty Portal:**
* **Username:** `profa@oops`
* **Password:** `1234`
*(Assigned to CS301 - Data Structure & Algorithms)*

**Student Portal:**
* **Roll Number:** `GCETTS-CSE-3-01` (to `GCETTS-CSE-3-10`)
* **Roll Number:** `GCETTS-TT-3-01` (to `GCETTS-TT-3-10`)

## 🛠️ Local Installation
If you wish to run this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/institute-management-system.git](https://github.com/yourusername/institute-management-system.git)