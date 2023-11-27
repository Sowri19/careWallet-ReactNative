const express = require("express");
const DoctorController = require("../controller/doctorController");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { doctorID, doctorName, companyName, address, phoneNumber, email } =
      req.body;
    const newDoctor = await DoctorController.createDoctor(
      doctorID,
      doctorName,
      companyName,
      address,
      phoneNumber,
      email
    );
    res.json(newDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:doctorID", async (req, res) => {
  try {
    const { doctorID } = req.params;
    const doctor = await DoctorController.getDoctorByID(doctorID);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ error: "Doctor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await DoctorController.login(username, password);
    console.log("hello");
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/:doctorID/patients", async (req, res) => {
  try {
    const { doctorID } = req.params;
    const patients = await DoctorController.getPatientsByDoctorID(doctorID);
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
