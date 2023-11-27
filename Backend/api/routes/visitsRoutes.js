const express = require("express");
const router = express.Router();
const VisitController = require("../controller/visitsController");
const PatientController = require("../controller/patientController");
const DoctorController = require("../controller/doctorController");

// Endpoint for creating a new visit
router.post("/", async (req, res) => {
  try {
    const { patientID, doctorID } = req.body;

    // Check if patient and doctor exist
    const patientExists = await PatientController.patientExists(patientID);
    const doctorExists = await DoctorController.doctorExists(doctorID);

    if (patientExists && doctorExists) {
      // Add the visit to the visits table
      const newVisit = await VisitController.createVisit(patientID, doctorID);

      res.status(201).json(newVisit);
    } else {
      res.status(404).json({ error: "Patient or Doctor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/doctors/:doctorID/patients", async (req, res) => {
  try {
    const { doctorID } = req.params;
    console.log("bang");
    // Check if the doctor exists
    const doctorExists = await DoctorController.doctorExists(doctorID);

    if (doctorExists) {
      // Get all patients associated with the specified doctor
      console.log("doctorExists");
      const patients = await VisitController.getPatientsByDoctorID(doctorID);

      res.json(patients);
    } else {
      res.status(404).json({ error: "Doctor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// You can add more routes as needed

module.exports = router;
