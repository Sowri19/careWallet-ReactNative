// src/components/PatientList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PatientList.css'; // Import the CSS file for styling

const PatientList = ({ loggedInDoctor }) => {
  const [patients, setPatients] = useState([]);
  const [filterFirstName, setFilterFirstName] = useState('');
  const [filterLastName, setFilterLastName] = useState('');
  const [filterDob, setFilterDob] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        if (loggedInDoctor) {
          const response = await axios.get(`http://localhost:3000/visits/doctors/${loggedInDoctor.doctorID}/patients`);
          setPatients(response.data);
        }
      } catch (error) {
        console.error('Error fetching patient data', error);
      }
    };

    fetchPatients();
  }, [loggedInDoctor]);

  const applyFilters = (patient) => {
    const firstNameMatch = patient.firstName.toLowerCase().includes(filterFirstName.toLowerCase());
    const lastNameMatch = patient.lastName.toLowerCase().includes(filterLastName.toLowerCase());
    const dobMatch = patient.dob.toLowerCase().includes(filterDob.toLowerCase());

    return firstNameMatch && lastNameMatch && dobMatch;
  };

  const filteredPatients = patients.filter(applyFilters);

  const handleViewClick = (patient) => {
    setSelectedPatient(patient);
    // Clear filters when a patient is selected
    setFilterFirstName('');
    setFilterLastName('');
    setFilterDob('');
  };

  return (
    <div className="patient-list-container">
      <div className="welcome-header">
        <h2>Welcome Dr. {loggedInDoctor.doctorName}</h2>
      </div>

      {!selectedPatient && (
        <div className="filter-container">
          <div className="filter-item">
            <label>Filter by First Name: </label>
            <input type="text" value={filterFirstName} onChange={(e) => setFilterFirstName(e.target.value)} />
          </div>
          <div className="filter-item">
            <label>Filter by Last Name: </label>
            <input type="text" value={filterLastName} onChange={(e) => setFilterLastName(e.target.value)} />
          </div>
          <div className="filter-item">
            <label>Filter by Date of Birth: </label>
            <input type="text" value={filterDob} onChange={(e) => setFilterDob(e.target.value)} />
          </div>
        </div>
      )}

      {selectedPatient ? (
        <div>
          <h3>Viewing Patient Details</h3>
          <p>First Name: {selectedPatient.firstName}</p>
          <p>Last Name: {selectedPatient.lastName}</p>
          <p>Date of Birth: {selectedPatient.dob}</p>
          <p>Address: {selectedPatient.address}</p>
          <p>PhoneNumber: {selectedPatient.phoneNumber}</p>
          <p>Email: {selectedPatient.email}</p>
          <p>InsuranceID: {selectedPatient.insuranceID}</p>
          {/* Add more details as needed */}
          <button onClick={() => setSelectedPatient(null)}>Close</button>
        </div>
      ) : (
        <table className="patient-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date Of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.dob}</td>
                <td>
                  <button onClick={() => handleViewClick(patient)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientList;
