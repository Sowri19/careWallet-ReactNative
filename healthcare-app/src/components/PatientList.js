// src/components/PatientList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch all patient records
    axios.get('http://localhost:3000/patients') // Update the URL with your backend endpoint
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('Error fetching patient data', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>FirstName</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>LastName</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{patient.firstName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{patient.lastName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{patient.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
          }

export default PatientList;
