// src/components/PatientList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Patients</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search patients..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul className="list-group">
        {filteredPatients.map(patient => (
          <li key={patient._id} className="list-group-item">
            <Link to={`/patients/${patient._id}`}>
              {patient.name} ({patient.age} years old)
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
