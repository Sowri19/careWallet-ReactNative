const express = require("express");
const PatientController = require("./PatientController");

const router = express.Router();

router.post("/patients", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      dob,
      insuranceID,
    } = req.body;
    const newPatient = await PatientController.createPatient(
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      dob,
      insuranceID
    );
    res.json(newPatient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/patients/:patientID", async (req, res) => {
  try {
    const { patientID } = req.params;
    const patient = await PatientController.getPatientByID(patientID);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ error: "Patient not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
