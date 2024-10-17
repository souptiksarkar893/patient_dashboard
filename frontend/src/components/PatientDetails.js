// src/components/PatientDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/patients/${id}`)
      .then(response => setPatient(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!patient) return <div>Loading...</div>;

  return (
    <div>
      <h2>{patient.name}'s Details</h2>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Medical History:</strong> {patient.medicalHistory.join(', ')}</p>
      <p><strong>Treatment Plan:</strong> {patient.treatmentPlan}</p>
    </div>
  );
};

export default PatientDetails;
