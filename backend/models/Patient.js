// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  medicalHistory: [{ type: String }],
  treatmentPlan: { type: String }
});

module.exports = mongoose.model('Patient', patientSchema);
