import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { LogIn, Users, Monitor, Activity, Scissors, Cpu, FileText, ChevronRight } from 'lucide-react';
import './App.css';

// --- SUBJECT MAPPING STRATEGY ---
const getSubjectsForSemester = (sem) => {
  const subjects = {
    1: ['sub1', 'sub2'],
    2: ['sub3', 'sub4'],
    3: ['sub5', 'sub6'],
    4: ['sub7', 'sub8'],
    5: ['sub9', 'sub10'],
    6: ['sub11', 'sub12'],
    7: ['sub13', 'sub14'],
    8: ['sub15', 'sub16']
  };
  return subjects[sem] || [];
};

const months = ["August", "September", "October", "November", "December", "January", "February", "March", "April", "May"];

// --- MAIN UNIVERSITY HOMEPAGE (Restored to Full Original UI) ---
function Homepage() {
  return (
    <div>
      {/* Top Administrative Bar */}
      <div className="top-bar">
        <div>Government of West Bengal | Higher Education Department</div>
        <div className="top-bar-links">
          <a href="#tenders">Tenders</a>
          <a href="#alumni">Alumni</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      {/* Main Heritage Header */}
      <header className="uni-header">
        <div className="logo-placeholder">G</div>
        <div className="uni-titles">
          <h1>Govt. College of Engineering & Textile Technology, Serampore</h1>
          <h2>Affiliated to MAKAUT | Approved by AICTE</h2>
        </div>
      </header>

      {/* Official Navigation */}
      <nav className="uni-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About GCETTS</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/research">Research & Publications</Link>
        <Link to="/admissions">Admissions 2026</Link>
        <Link to="/student-login" className="highlight">Student Portal</Link>
      </nav>

      {/* Campus Hero Image */}
      <div className="hero-campus">
        <h2>Excellence in Engineering & Technology Since 1908</h2>
      </div>

      {/* Live Notice Strip */}
      <div className="notice-strip">
        <strong>Important Notice</strong>
        <marquee speed="50">
          Mid-semester examinations for B.Tech 2nd and 3rd year will commence from Oct 15th. • Faculty attendance system update scheduled for this weekend. • Registration for campus placement drive is now open.
        </marquee>
      </div>

      {/* Main 3-Column Layout */}
      <main className="main-container">
        
        {/* Left Column: Portals & Links */}
        <aside>
          <h2 className="section-title">Portals</h2>
          <div className="quick-links">
            <Link to="/student-login" className="login-btn student">
              <LogIn size={20} /> Student Login
            </Link>
            <Link to="/faculty-login" className="login-btn faculty">
              <Users size={20} /> Admin / HOD Login
            </Link>
          </div>

          <ul className="side-menu">
            <li><a href="#syllabus"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> UG Syllabus</a></li>
            <li><a href="#routine"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> Class Routine</a></li>
            <li><a href="#library"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> Central Library</a></li>
            <li><a href="#hostel"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> Hostel Management</a></li>
          </ul>
        </aside>

        {/* Center Column: Academic Departments */}
        <section>
          <h2 className="section-title">Academic Departments</h2>
          <p style={{marginBottom: '20px', color: '#475569', lineHeight: '1.6'}}>
            Select a department below to view academic records, faculty profiles, and manage student attendance metrics.
          </p>
          
          <div className="dept-grid">
            <Link to="/department/cse" className="dept-card">
              <Monitor size={32} color="#1e3a8a" />
              <h3>Computer Science (CSE)</h3>
              <p>B.Tech in Computer Science and Engineering.</p>
            </Link>
            
            <Link to="/department/it" className="dept-card">
              <Activity size={32} color="#1e3a8a" />
              <h3>Information Technology (IT)</h3>
              <p>B.Tech in Information Technology.</p>
            </Link>
            
            <Link to="/department/apm" className="dept-card">
              <Scissors size={32} color="#1e3a8a" />
              <h3>Apparel Production (APM)</h3>
              <p>B.Tech in Apparel Production Management.</p>
            </Link>
            
            <Link to="/department/tt" className="dept-card">
              <Cpu size={32} color="#1e3a8a" />
              <h3>Textile Technology (TT)</h3>
              <p>B.Tech in Textile Technology.</p>
            </Link>
          </div>
        </section>

        {/* Right Column: Notice Board */}
        <aside>
          <div className="notice-board">
            <h2 className="section-title">Notice Board</h2>
            
            <div className="notice-item">
              <div className="notice-date">21 September 2026</div>
              <div className="notice-text">
                <a href="#notice1"><FileText size={14} style={{verticalAlign: 'middle'}}/> Revised Academic Calendar for Odd Semester 2026-27</a>
              </div>
            </div>
            
            <div className="notice-item">
              <div className="notice-date">18 September 2026</div>
              <div className="notice-text">
                <a href="#notice2"><FileText size={14} style={{verticalAlign: 'middle'}}/> Instructions for final year B.Tech Project Submission</a>
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-date">15 September 2026</div>
              <div className="notice-text">
                <a href="#notice3"><FileText size={14} style={{verticalAlign: 'middle'}}/> Faculty Notice: Mandatory attendance update in IMS portal</a>
              </div>
            </div>

            <div style={{textAlign: 'right', marginTop: '10px'}}>
              <a href="#all-notices" style={{color: '#881337', fontSize: '0.85rem', fontWeight: 'bold', textDecoration: 'none'}}>View All Notices →</a>
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
}

// --- DYNAMIC DEPARTMENT PAGE (Restored) ---
function DepartmentPage() {
  const { deptId } = useParams(); 
  
  const departmentInfo = {
    cse: { name: "Computer Science & Engineering", hod: "Dr. A. Sharma", desc: "Focuses on computing theory, algorithms, software design, and artificial intelligence. Equipped with state-of-the-art coding labs.", established: 2001 },
    it: { name: "Information Technology", hod: "Prof. B. Roy", desc: "Emphasizes network architecture, database management, cloud computing, and modern web technologies.", established: 2007 },
    apm: { name: "Apparel Production Management", hod: "Dr. C. Das", desc: "Blends textile engineering with modern apparel manufacturing techniques, fashion design, and retail management.", established: 1999 },
    tt: { name: "Textile Technology", hod: "Prof. D. Sen", desc: "The oldest and most prestigious department, focusing on yarn manufacturing, fabric structure, and textile chemistry.", established: 1908 }
  };

  const info = departmentInfo[deptId] || { name: "Unknown Department", hod: "N/A", desc: "Information not available.", established: "N/A" };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>← Back to University Home</Link>
      
      <div style={{ marginTop: '30px', padding: '40px', background: 'white', borderRadius: '8px', borderTop: '4px solid #1e3a8a', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#1e3a8a', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px', marginTop: 0 }}>
          Department of {info.name}
        </h1>
        
        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
          <div style={{ flex: 2 }}>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6' }}>
              {info.desc}
            </p>
            <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
              <Link to="/faculty-login" style={{ padding: '10px 20px', backgroundColor: '#1e3a8a', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                Manage Attendance (Admin)
              </Link>
              <button style={{ padding: '10px 20px', backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                Download Syllabus
              </button>
            </div>
          </div>

          <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>Department Details</h3>
            <p style={{ margin: '10px 0', color: '#64748b' }}><strong>Head of Dept:</strong><br/>{info.hod}</p>
            <p style={{ margin: '10px 0', color: '#64748b' }}><strong>Established:</strong><br/>{info.established}</p>
            <p style={{ margin: '10px 0', color: '#64748b' }}><strong>Degree Offered:</strong><br/>B.Tech (4 Years)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- STUDENT PORTAL DASHBOARD (Aggregated Subject-wise) ---
function StudentPortal() {
  const [rollInput, setRollInput] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [viewSemester, setViewSemester] = useState(1);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`https://institute-management-system-1-c9x4.onrender.com/api/admin/students/roll/${rollInput}`);
      if (!res.ok) throw new Error('Student not found');
      const data = await res.json();
      
      setStudentData(data);
      setViewSemester(data.currentSemester);
      fetchAttendance(data.rollNumber, data.currentSemester);
    } catch (err) {
      setError('Invalid Roll Number. Please try again. (Example: GCETTS-CSE-1-01)');
    }
  };

  const fetchAttendance = async (roll, sem) => {
    try {
      const res = await fetch(`https://institute-management-system-1-c9x4.onrender.com/api/admin/attendance/${roll}/semester/${sem}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setAttendanceRecords(data);
      } else {
        setAttendanceRecords([]);
      }
    } catch (err) {
      setAttendanceRecords([]);
    }
  };

  const handleSemesterChange = (e) => {
    const sem = Number(e.target.value);
    setViewSemester(sem);
    fetchAttendance(studentData.rollNumber, sem);
  };

  // Group all months together into a single total per subject
  const subjectAggregates = attendanceRecords.reduce((acc, rec) => {
    if (!acc[rec.subjectName]) {
      acc[rec.subjectName] = { subjectName: rec.subjectName, attended: 0, total: 0 };
    }
    acc[rec.subjectName].attended += rec.classesAttended;
    acc[rec.subjectName].total += rec.totalClasses;
    return acc;
  }, {});

  const aggregatedList = Object.values(subjectAggregates).map(sub => ({
    ...sub,
    percentage: sub.total > 0 ? (sub.attended / sub.total) * 100 : 0
  }));

  const totalClasses = aggregatedList.reduce((sum, sub) => sum + sub.total, 0);
  const totalAttended = aggregatedList.reduce((sum, sub) => sum + sub.attended, 0);
  const overallPercentage = totalClasses === 0 ? 0 : ((totalAttended / totalClasses) * 100).toFixed(2);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
      
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', borderTop: '4px solid #059669', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        {!studentData ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#059669', marginBottom: '20px' }}>Student Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder="Roll No (e.g. GCETTS-CSE-1-01)" 
                value={rollInput} 
                onChange={(e) => setRollInput(e.target.value.toUpperCase())} 
                style={{ padding: '12px', width: '300px', borderRadius: '4px', border: '1px solid #cbd5e1' }} 
                required 
              />
              <button type="submit" style={{ padding: '12px 30px', backgroundColor: '#059669', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                View Attendance
              </button>
            </form>
            {error && <p style={{ color: '#dc2626', marginTop: '15px' }}>{error}</p>}
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid #e2e8f0', paddingBottom: '20px' }}>
              <div>
                <h2 style={{ color: '#1e3a8a', margin: '0 0 5px 0' }}>{studentData.name}</h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '1.1rem' }}>Roll No: <strong>{studentData.rollNumber}</strong></p>
                <p style={{ margin: '5px 0 0 0', color: '#64748b' }}>Department: {studentData.department.toUpperCase()} | Enrolled Sem: {studentData.currentSemester}</p>
              </div>
              <button onClick={() => setStudentData(null)} style={{ padding: '8px 15px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>
                Logout
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div>
                <label style={{ fontWeight: 'bold', marginRight: '10px' }}>View History For:</label>
                <select value={viewSemester} onChange={handleSemesterChange} style={{ padding: '8px', borderRadius: '4px' }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                    <option key={s} value={s}>Semester {s}</option>
                  ))}
                </select>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', color: '#64748b', fontSize: '0.9rem' }}>Overall Semester Aggregate</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: totalClasses === 0 ? '#64748b' : (overallPercentage < 75 ? '#dc2626' : '#059669') }}>
                  {totalClasses > 0 ? `${overallPercentage}%` : 'N/A'}
                </span>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
              <thead>
                <tr style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'left' }}>
                  <th style={{ padding: '12px', borderRadius: '4px 0 0 0' }}>Subject</th>
                  <th style={{ padding: '12px' }}>Total Attended / Classes Held</th>
                  <th style={{ padding: '12px', borderRadius: '0 4px 0 0' }}>Overall Percentage</th>
                </tr>
              </thead>
              <tbody>
                {aggregatedList.length === 0 ? (
                  <tr><td colSpan="3" style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No attendance data uploaded for Semester {viewSemester} yet.</td></tr>
                ) : (
                  aggregatedList.map((sub, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{sub.subjectName.toUpperCase()}</td>
                      <td style={{ padding: '12px' }}>{sub.attended} / {sub.total}</td>
                      <td style={{ padding: '12px', color: sub.total === 0 ? '#64748b' : (sub.percentage < 75 ? '#dc2626' : '#059669'), fontWeight: 'bold' }}>
                        {sub.total === 0 ? 'N/A' : `${sub.percentage.toFixed(2)}%`}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// --- ADMIN / FACULTY PORTAL (Fixed Total Classes Logic) ---
function FacultyPortal() {
  const [department, setDepartment] = useState('cse');
  const [semester, setSemester] = useState(1);
  const [students, setStudents] = useState([]);
  
  const [targetSubject, setTargetSubject] = useState('');
  const [targetMonth, setTargetMonth] = useState('September');
  const [targetTotal, setTargetTotal] = useState(0); // DEFAULTS TO 0
  
  const [inputAttended, setInputAttended] = useState({});

  useEffect(() => {
    const subs = getSubjectsForSemester(semester);
    if(subs.length > 0) setTargetSubject(subs[0]);
  }, [semester]);

  useEffect(() => {
    if (students.length > 0 && targetSubject) {
      loadAttendanceData();
    }
  }, [targetSubject, targetMonth, semester]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`https://institute-management-system-1-c9x4.onrender.com/api/admin/students/${department}/semester/${semester}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setStudents(data);
        setTimeout(loadAttendanceData, 100); 
      }
    } catch (err) {
      alert("Failed to connect to backend.");
    }
  };

  const loadAttendanceData = async () => {
    try {
      const res = await fetch(`https://institute-management-system-1-c9x4.onrender.com/api/admin/attendance/batch/semester/${semester}/subject/${targetSubject}/month/${targetMonth}`);
      if (res.ok) {
        const data = await res.json();
        const savedInputs = {};
        
        if (data.length > 0) {
          data.forEach(record => {
            savedInputs[record.rollNumber] = record.classesAttended;
          });
          
          setInputAttended(savedInputs);
          
          // FIX: Instead of letting every student overwrite the box, 
          // we only look at the very first student's record for the Total Classes.
          setTargetTotal(data[0].totalClasses); 
        } else {
          // If the month is completely empty (no database records), clear it to 0
          setInputAttended({});
          setTargetTotal(0); 
        }
      }
    } catch (err) {
      console.error("Failed to load batch attendance");
    }
  };

  const handleUploadAttendance = async (rollNumber) => {
    const rawAttended = inputAttended[rollNumber];
    if (rawAttended === undefined || rawAttended === '') {
      alert("Please enter the attended classes first.");
      return;
    }

    const attended = parseInt(rawAttended);
    const total = parseInt(targetTotal) || 0; 

    // STRICT VALIDATION CHECKS
    if (attended < 0) {
      alert("Error: Attended classes cannot be negative."); return;
    }
    if (total < 0) {
      alert("Error: Total classes held cannot be negative."); return;
    }
    if (attended > total) {
      alert(`Error: Student attended (${attended}) classes, but only (${total}) were held. Attended cannot exceed Total.`); return;
    }

    const record = {
      rollNumber: rollNumber, semester: semester, subjectName: targetSubject, month: targetMonth, classesAttended: attended, totalClasses: total
    };

    try {
      const res = await fetch('https://institute-management-system-1-c9x4.onrender.com/api/admin/attendance/upload', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record)
      });
      if (!res.ok) throw new Error("Backend rejected the save.");
      alert(`✅ Saved attendance for ${rollNumber}`);
    } catch (err) {
      alert("❌ Failed to save! Check your Java terminal for errors.");
    }
  };

  const promoteStudents = async () => {
    if(window.confirm(`Are you sure you want to promote all ${department.toUpperCase()} Sem ${semester} students?`)){
      await fetch(`https://institute-management-system-1-c9x4.onrender.com/api/admin/students/promote/${department}/${semester}`, { method: 'POST' });
      alert("Students promoted successfully!");
      setStudents([]); 
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
      
      <div style={{ background: 'white', padding: '30px', borderRadius: '8px', borderTop: '4px solid #1e3a8a', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>Admin Dashboard</h2>
        
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'flex-end', backgroundColor: '#f1f5f9', padding: '15px', borderRadius: '8px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Dept:</label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
              <option value="cse">CSE</option><option value="it">IT</option><option value="apm">APM</option><option value="tt">TT</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Semester:</label>
            <select value={semester} onChange={(e) => setSemester(Number(e.target.value))} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
              {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>Sem {s}</option>)}
            </select>
          </div>
          <button onClick={fetchStudents} style={{ padding: '8px 20px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', borderRadius: '4px' }}>Load Batch</button>
          
          <button onClick={promoteStudents} style={{ padding: '8px 15px', backgroundColor: '#d97706', color: 'white', border: 'none', cursor: 'pointer', marginLeft: 'auto', borderRadius: '4px', fontWeight: 'bold' }}>Promote to Sem {semester + 1}</button>
        </div>

        <div style={{ padding: '20px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#334155' }}>Mark Attendance For:</h3>
          <select value={targetSubject} onChange={e => setTargetSubject(e.target.value)} style={{ padding: '8px', fontWeight: 'bold', borderRadius: '4px' }}>
            {getSubjectsForSemester(semester).map(sub => <option key={sub} value={sub}>{sub}</option>)}
          </select>
          <select value={targetMonth} onChange={e => setTargetMonth(e.target.value)} style={{ padding: '8px', fontWeight: 'bold', borderRadius: '4px' }}>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Total Classes Held:</label>
            <input 
              type="number" 
              min="0"
              value={targetTotal} 
              onChange={e => setTargetTotal(e.target.value)} 
              style={{ padding: '8px', width: '80px', border: '2px solid #1e3a8a', borderRadius: '4px', fontWeight: 'bold', textAlign: 'center' }} 
            />
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '12px', borderRadius: '4px 0 0 0' }}>Roll No</th>
              <th style={{ padding: '12px' }}>Student Name</th>
              <th style={{ padding: '12px' }}>Classes Attended</th>
              <th style={{ padding: '12px', borderRadius: '0 4px 0 0' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? <tr><td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>Click 'Load Batch' to view students.</td></tr> : null}
            {students.map((student) => (
              <tr key={student.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', fontWeight: 'bold' }}>{student.rollNumber}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>{student.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>
                  <input 
                    type="number" 
                    min="0" 
                    max={targetTotal} 
                    placeholder="e.g. 10" 
                    value={inputAttended[student.rollNumber] ?? ''} 
                    onChange={e => setInputAttended({...inputAttended, [student.rollNumber]: e.target.value})}
                    style={{ padding: '8px', width: '80px', border: '1px solid #cbd5e1', borderRadius: '4px' }} 
                  />
                  <span style={{ marginLeft: '10px', color: '#64748b', fontWeight: 'bold' }}>/ {targetTotal || 0}</span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>
                  <button onClick={() => handleUploadAttendance(student.rollNumber)} style={{ padding: '8px 15px', backgroundColor: '#059669', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- APP ROUTING ---
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/department/:deptId" element={<DepartmentPage />} />
        <Route path="/student-login" element={<StudentPortal />} />
        <Route path="/faculty-login" element={<FacultyPortal />} />
      </Routes>
    </Router>
  );
}