const Patient = require("../models/patientModel"); // Import the Patient model

class PatientController {
  static async createPatient(
    firstName,
    lastName,
    address,
    phoneNumber,
    email,
    dob,
    insuranceID
  ) {
    const newPatient = new Patient(
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      dob,
      insuranceID
    );
    await newPatient.save();
    return newPatient;
  }

  static async getPatientByID(patientID) {
    return await Patient.getPatientByID(patientID);
  }
}

module.exports = PatientController;
