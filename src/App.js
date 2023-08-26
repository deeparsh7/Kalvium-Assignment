import React, { useState } from 'react';
import './App.css';

// Attendance Form Component
const AttendanceForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = () => {
    onAdd({ name, regNo, date, subject });
    setName('');
    setRegNo('');
    setDate('');
    setSubject('');
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Registration No" />
      <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

// Attendance Table Component
const AttendanceTable = ({ data }) => (
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Registration No</th>
        <th>Date</th>
        <th>Subject</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, idx) => (
        <tr key={idx}>
          <td>{entry.name}</td>
          <td>{entry.regNo}</td>
          <td>{entry.date}</td>
          <td>{entry.subject}</td>
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
    <div className="App" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <AttendanceForm onAdd={addData} />
      <AttendanceTable data={attendanceData} />
    </div>
  );
}

export default App;
