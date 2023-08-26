import React, { useState } from 'react';
import './App.css';

// Attendance Form Component
// AttendanceForm Component
const AttendanceForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('Present'); // Default status

  const handleSubmit = () => {
    onAdd({ name, regNo, date, subject, status }); // Include status in the data
    setName('');
    setRegNo('');
    setDate('');
    setSubject('');
    setStatus('Present'); // Reset status to default
  };

  return (
    <div className="form-container">
      <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required  />
      <input className="form-input" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Registration No" required/>
      <input className="form-input" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" required />
      <input className="form-input" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
      <div className="radio-container">
        <label className="radio-label">
          <input type="radio" value="Present" checked={status === 'Present'} onChange={() => setStatus('Present')} />
          Present
        </label>
        <label className="radio-label">
          <input type="radio" value="Absent" checked={status === 'Absent'} onChange={() => setStatus('Absent')} />
          Absent
        </label>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};


// Attendance Table Component
const AttendanceTable = ({ data }) => (
  <table className="attendance-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Registration No</th>
        <th>Date</th>
        <th>Subject</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, idx) => (
        <tr key={idx}>
          <td>{entry.name}</td>
          <td>{entry.regNo}</td>
          <td>{entry.date}</td>
          <td>{entry.subject}</td>
          <td>{entry.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Main App Component
function App() {
  const [attendanceData, setAttendanceData] = useState([]);

  const addData = (data) => {
    setAttendanceData([...attendanceData, data]);
  };

  return (
    <div className="App">
    <div className="app-container">
      <div className="form-container">
        <AttendanceForm onAdd={addData} />
      </div>
      <div className="table-container">
        <AttendanceTable data={attendanceData} />
      </div>
    </div>
  </div>
);
}
export default App;
