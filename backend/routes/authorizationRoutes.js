// routes/authorizationRoutes.js
const express = require('express');
const router = express.Router();
const AuthorizationRequest = require('../models/AuthorizationRequest');

// Submit a prior authorization request
router.post('/', async (req, res) => {
  const { patientId, treatmentType, insurancePlan, diagnosisCode, dateOfService } = req.body;

  try {
    const newRequest = new AuthorizationRequest({
      patientId,
      treatmentType,
      insurancePlan,
      diagnosisCode,
      dateOfService
    });
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all prior authorization requests
router.get('/', async (req, res) => {
  try {
    const requests = await AuthorizationRequest.find().populate('patientId');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
