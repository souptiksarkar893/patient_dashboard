// src/components/AuthorizationForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthorizationForm = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    patientId: '',
    treatmentType: '',
    insurancePlan: '',
    diagnosisCode: '',
    dateOfService: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch patients to populate the patient select dropdown
    axios.get('http://localhost:5000/api/patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.patientId) errors.patientId = 'Patient is required';
    if (!formData.treatmentType) errors.treatmentType = 'Treatment Type is required';
    if (!formData.insurancePlan) errors.insurancePlan = 'Insurance Plan is required';
    if (!formData.diagnosisCode) errors.diagnosisCode = 'Diagnosis Code is required';
    if (!formData.dateOfService) errors.dateOfService = 'Date of Service is required';
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios.post('http://localhost:5000/api/authorization', formData)
        .then(response => {
          alert('Authorization request submitted successfully!');
          setFormData({
            patientId: '',
            treatmentType: '',
            insurancePlan: '',
            diagnosisCode: '',
            dateOfService: ''
          });
          setErrors({});
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <h2>Submit Prior Authorization</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patient</label>
          <select
            name="patientId"
            className={`form-select ${errors.patientId ? 'is-invalid' : ''}`}
            value={formData.patientId}
            onChange={handleChange}
          >
            <option value="">Select a patient</option>
            {patients.map(patient => (
              <option key={patient._id} value={patient._id}>
                {patient.name}
              </option>
            ))}
          </select>
          {errors.patientId && <div className="invalid-feedback">{errors.patientId}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Treatment Type</label>
          <input
            type="text"
            name="treatmentType"
            className={`form-control ${errors.treatmentType ? 'is-invalid' : ''}`}
            value={formData.treatmentType}
            onChange={handleChange}
          />
          {errors.treatmentType && <div className="invalid-feedback">{errors.treatmentType}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Insurance Plan</label>
          <input
            type="text"
            name="insurancePlan"
            className={`form-control ${errors.insurancePlan ? 'is-invalid' : ''}`}
            value={formData.insurancePlan}
            onChange={handleChange}
          />
          {errors.insurancePlan && <div className="invalid-feedback">{errors.insurancePlan}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Diagnosis Code</label>
          <input
            type="text"
            name="diagnosisCode"
            className={`form-control ${errors.diagnosisCode ? 'is-invalid' : ''}`}
            value={formData.diagnosisCode}
            onChange={handleChange}
          />
          {errors.diagnosisCode && <div className="invalid-feedback">{errors.diagnosisCode}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Service</label>
          <input
            type="date"
            name="dateOfService"
            className={`form-control ${errors.dateOfService ? 'is-invalid' : ''}`}
            value={formData.dateOfService}
            onChange={handleChange}
          />
          {errors.dateOfService && <div className="invalid-feedback">{errors.dateOfService}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  );
};

export default AuthorizationForm;
