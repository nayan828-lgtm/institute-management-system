import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { LogIn, Users, Monitor, Activity, Scissors, Cpu, FileText, ChevronRight } from 'lucide-react';
import './App.css';

const API_BASE_URL = 'https://institute-management-system-1-c9x4.onrender.com/api';

function Homepage() {
  return (
    <div>
      <div className="top-bar">
        <div>Government of West Bengal | Higher Education Department</div>
        <div className="top-bar-links">
          <a href="#tenders">Tenders</a>
          <a href="#alumni">Alumni</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      <header className="uni-header">
        <div className="logo-placeholder">G</div>
        <div className="uni-titles">
          <h1>Govt. College of Engineering & Textile Technology, Serampore</h1>
          <h2>Affiliated to MAKAUT | Approved by AICTE</h2>
        </div>
      </header>

      <nav className="uni-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About GCETTS</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/research">Research & Publications</Link>
        <Link to="/admissions">Admissions 2026</Link>
        <Link to="/student-login" className="highlight">Student Portal</Link>
      </nav>

      <div className="hero-campus">
        <h2>Excellence in Engineering & Technology Since 1908</h2>
      </div>

      <div className="notice-strip">
        <strong>Important Notice</strong>
        <marquee speed="50">
          Mid-semester examinations for B.Tech 2nd and 3rd year will commence from Oct 15th. • New automated Faculty attendance system is now LIVE.
        </marquee>
      </div>

      <main className="main-container">
        
        <aside>
          <h2 className="section-title">Portals</h2>
          <div className="quick-links">
            <Link to="/student-login" className="login-btn student">
              <LogIn size={20} /> Student Login
            </Link>
            <Link to="/faculty-login" className="login-btn faculty">
              <Users size={20} /> Faculty Login
            </Link>
          </div>

          <ul className="side-menu">
            <li><a href="#syllabus"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> UG Syllabus</a></li>
            <li><a href="#routine"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> Class Routine</a></li>
            <li><a href="#library"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> Central Library</a></li>
            <li><a href="#hostel"><ChevronRight size={16} style={{verticalAlign: 'middle'}}/> Hostel Management</a></li>
          </ul>
        </aside>

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
            <div style={{textAlign: 'right', marginTop: '10px'}}>
              <a href="#all-notices" style={{color: '#881337', fontSize: '0.85rem', fontWeight: 'bold', textDecoration: 'none'}}>View All Notices →</a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

function DepartmentPage() {
  const { deptId } = useParams(); 
  
  const departmentInfo = {
    cse: { name: "Computer Science & Engineering", hod: "Dr. A. Sharma", desc: "Focuses on computing theory, algorithms, software design, and artificial intelligence.", established: 2001 },
    it: { name: "Information Technology", hod: "Prof. B. Roy", desc: "Emphasizes network architecture, database management, cloud computing, and modern web technologies.", established: 2007 },
    apm: { name: "Apparel Production Management", hod: "Dr. C. Das", desc: "Blends textile engineering with modern apparel manufacturing techniques.", established: 1999 },
    tt: { name: "Textile Technology", hod: "Prof. D. Sen", desc: "The oldest and most prestigious department, focusing on yarn manufacturing and fabric structure.", established: 1908 }
  };

  const info = departmentInfo[deptId] || { name: "Unknown Department", hod: "N/A", desc: "Information not available.", established: "N/A" };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>← Back to University Home</Link>
      <div style={{ marginTop: '30px', padding: '40px', background: 'white', borderRadius: '8px', borderTop: '4px solid #1e3a8a', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#1e3a8a', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px', marginTop: 0 }}>Department of {info.name}</h1>
        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
          <div style={{ flex: 2 }}>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6' }}>{info.desc}</p>
            <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
              <Link to="/faculty-login" style={{ padding: '10px 20px', backgroundColor: '#1e3a8a', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Faculty Portal</Link>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>Department Details</h3>
            <p style={{ margin: '10px 0', color: '#64748b' }}><strong>Head of Dept:</strong><br/>{info.hod}</p>
            <p style={{ margin: '10px 0', color: '#64748b' }}><strong>Established:</strong><br/>{info.established}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacultyPortal() {
  const [profData, setProfData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [assignedSubjects, setAssignedSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch(`${API_BASE_URL}/faculty/login`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) throw new Error('Invalid credentials');
      const data = await res.json();
      setProfData(data);
      loadSubjects(data.profId);
    } catch (err) {
      setLoginError('Invalid username or password. Access Denied.');
    }
  };

  const loadSubjects = async (profId) => {
    try {
      const res = await fetch(`${API_BASE_URL}/faculty/${profId}/subjects`);
      const data = await res.json();
      setAssignedSubjects(data);
    } catch (err) {
      console.error("Failed to load subjects");
    }
  };

  const loadBatch = async (subject) => {
    setSelectedSubject(subject);
    try {
      const res = await fetch(`${API_BASE_URL}/faculty/students?department=${subject.department}&semester=${subject.semester}`);
      const data = await res.json();
      setStudents(data);
      
      const defaultAttendance = {};
      data.forEach(s => defaultAttendance[s.rollNumber] = 'Present');
      setAttendance(defaultAttendance);
    } catch (err) {
      alert("Failed to load students for this batch.");
    }
  };

  const submitAttendance = async () => {
    const logs = students.map(s => ({
      subjectCode: selectedSubject.subjectCode,
      rollNumber: s.rollNumber,
      status: attendance[s.rollNumber]
    }));

    try {
      const res = await fetch(`${API_BASE_URL}/faculty/attendance`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logs)
      });
      if (!res.ok) throw new Error("Backend rejected save");
      alert('✅ Attendance Saved Successfully!');
      setSelectedSubject(null);
    } catch (err) {
      alert('❌ Failed to save attendance');
    }
  };

  if (!profData) {
    return (
      <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto', marginTop: '10vh' }}>
        <Link to="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
        <div style={{ padding: '40px', background: 'white', marginTop: '20px', borderRadius: '8px', borderTop: '4px solid #1e3a8a', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1e3a8a', marginTop: 0, marginBottom: '25px' }}>Faculty Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #cbd5e1' }}/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #cbd5e1' }}/>
            <button type="submit" style={{ padding: '12px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Secure Login</button>
          </form>
          {loginError && <p style={{ color: '#dc2626', marginTop: '15px', fontWeight: 'bold' }}>{loginError}</p>}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Welcome, {profData.name}</h2>
        <button onClick={() => window.location.href = '/'} style={{ padding: '8px 15px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
      </div>

      {!selectedSubject ? (
        <div style={{ background: 'white', padding: '30px', marginTop: '20px', borderRadius: '8px', borderTop: '4px solid #1e3a8a', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: 0 }}>Your Assigned Classes</h3>
          {assignedSubjects.length === 0 ? <p>No subjects assigned to you currently.</p> : null}
          
          {assignedSubjects.map(sub => (
            <div key={sub.subjectCode} style={{ padding: '20px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '1.2rem', color: '#1e3a8a' }}>{sub.subjectName} ({sub.subjectCode})</strong>
                <p style={{ margin: '5px 0 0 0', color: '#64748b' }}>Department: {sub.department.toUpperCase()} | Semester: {sub.semester}</p>
              </div>
              <button onClick={() => loadBatch(sub)} style={{ background: '#059669', color: 'white', padding: '12px 20px', cursor: 'pointer', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                Take Attendance
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ background: 'white', padding: '30px', marginTop: '20px', borderRadius: '8px', borderTop: '4px solid #059669', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, color: '#059669' }}>Taking Attendance: {selectedSubject.subjectName}</h3>
            <button onClick={() => setSelectedSubject(null)} style={{ padding: '8px 15px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>Cancel / Go Back</button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', borderRadius: '4px 0 0 0' }}>Roll Number</th>
                <th style={{ padding: '12px' }}>Student Name</th>
                <th style={{ padding: '12px', borderRadius: '0 4px 0 0' }}>Status (Click to toggle)</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? <tr><td colSpan="3" style={{ padding: '20px', textAlign: 'center' }}>No students found in this batch.</td></tr> : null}
              {students.map(s => (
                <tr key={s.rollNumber} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{s.rollNumber}</td>
                  <td style={{ padding: '12px' }}>{s.name}</td>
                  <td style={{ padding: '12px' }}>
                    <button 
                      onClick={() => setAttendance({...attendance, [s.rollNumber]: attendance[s.rollNumber] === 'Present' ? 'Absent' : 'Present'})}
                      style={{ padding: '8px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', background: attendance[s.rollNumber] === 'Present' ? '#059669' : '#ef4444', color: 'white', fontWeight: 'bold', width: '100px' }}>
                      {attendance[s.rollNumber]}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={submitAttendance} style={{ width: '100%', padding: '15px', background: '#1e3a8a', color: 'white', marginTop: '20px', fontSize: '1.1rem', cursor: 'pointer', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Submit Today's Attendance
          </button>
        </div>
      )}
    </div>
  );
}

function StudentPortal() {
  const [rollInput, setRollInput] = useState('');
  const [student, setStudent] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res1 = await fetch(`${API_BASE_URL}/student/${rollInput}`);
      if (!res1.ok) throw new Error('Student not found');
      setStudent(await res1.json());

      const res2 = await fetch(`${API_BASE_URL}/student/${rollInput}/attendance`);
      setHistory(await res2.json());
    } catch (err) {
      setError('Invalid Roll Number. Please try again. (Example: GCETTS-CSE-3-01)');
    }
  };

  const aggregates = history.reduce((acc, log) => {
    if (!acc[log.subjectCode]) acc[log.subjectCode] = { code: log.subjectCode, present: 0, total: 0 };
    acc[log.subjectCode].total += 1;
    if (log.status === 'Present') acc[log.subjectCode].present += 1;
    return acc;
  }, {});

  const aggregatedList = Object.values(aggregates);
  const totalClasses = aggregatedList.reduce((sum, sub) => sum + sub.total, 0);
  const totalAttended = aggregatedList.reduce((sum, sub) => sum + sub.present, 0);
  const overallPercentage = totalClasses === 0 ? 0 : ((totalAttended / totalClasses) * 100).toFixed(2);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
      
      {!student ? (
        <div style={{ padding: '40px', background: 'white', marginTop: '20px', borderRadius: '8px', borderTop: '4px solid #059669', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#059669', marginTop: 0, marginBottom: '25px' }}>Student Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Roll Number (e.g. GCETTS-CSE-3-01)" 
              value={rollInput} 
              onChange={e => setRollInput(e.target.value.toUpperCase())} 
              required 
              style={{ padding: '12px', width: '300px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
            />
            <button type="submit" style={{ padding: '12px 30px', background: '#059669', color: 'white', cursor: 'pointer', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
              View Dashboard
            </button>
          </form>
          {error && <p style={{ color: '#dc2626', marginTop: '15px', fontWeight: 'bold' }}>{error}</p>}
        </div>
      ) : (
        <div style={{ background: 'white', padding: '40px', marginTop: '20px', borderRadius: '8px', borderTop: '4px solid #059669', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid #e2e8f0', paddingBottom: '20px' }}>
            <div>
              <h2 style={{ color: '#1e3a8a', margin: '0 0 5px 0' }}>{student.name}</h2>
              <p style={{ margin: 0, color: '#64748b', fontSize: '1.1rem' }}>Roll No: <strong>{student.rollNumber}</strong></p>
              <p style={{ margin: '5px 0 0 0', color: '#64748b' }}>Department: {student.department.toUpperCase()} | Enrolled Sem: {student.currentSemester}</p>
            </div>
            <button onClick={() => window.location.href = '/'} style={{ padding: '8px 15px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: 0, color: '#334155' }}>Live Attendance Report</h3>
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
                <th style={{ padding: '12px', borderRadius: '4px 0 0 0' }}>Subject Code</th>
                <th style={{ padding: '12px' }}>Total Attended / Classes Held</th>
                <th style={{ padding: '12px', borderRadius: '0 4px 0 0' }}>Overall Percentage</th>
              </tr>
            </thead>
            <tbody>
              {aggregatedList.length === 0 ? (
                <tr><td colSpan="3" style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No attendance data recorded yet.</td></tr>
              ) : (
                aggregatedList.map((sub, idx) => {
                  const percentage = (sub.present / sub.total) * 100;
                  return (
                    <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{sub.code.toUpperCase()}</td>
                      <td style={{ padding: '12px' }}>{sub.present} / {sub.total}</td>
                      <td style={{ padding: '12px', color: percentage < 75 ? '#dc2626' : '#059669', fontWeight: 'bold' }}>
                        {percentage.toFixed(2)}%
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

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