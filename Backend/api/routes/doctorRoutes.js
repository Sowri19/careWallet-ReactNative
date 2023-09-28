const express = require("express");
const DoctorController = require("./DoctorController");

const router = express.Router();

router.post("/doctors", async (req, res) => {
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

router.get("/doctors/:doctorID", async (req, res) => {
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

module.exports = router;
