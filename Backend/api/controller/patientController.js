const Patient = require("../models/patientModel"); // Import the Patient model
const admin = require("firebase-admin");
const db = admin.firestore();

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
    try {
      if (!(await Patient.patientExists(patientID))) {
        // If patient doesn't exist, return null
        return null;
      }

      const patientRef = db.collection("patients").doc(patientID);
      const patientSnapshot = await patientRef.get();

      if (patientSnapshot.exists) {
        const patientData = patientSnapshot.data();
        return new Patient(
          patientData.firstName,
          patientData.lastName,
          patientData.address,
          patientData.phoneNumber,
          patientData.email,
          patientData.dob,
          patientData.insuranceID
        );
      } else {
        return null; // Patient not found
      }
    } catch (error) {
      throw new Error("Error fetching patient document: " + error.message);
    }
}

static async patientExists(patientID) {
    try {
      const patientRef = db.collection("patients").doc(patientID);
      const patientSnapshot = await patientRef.get();

      return patientSnapshot.exists;
    } catch (error) {
      throw new Error("Error checking patient existence: " + error.message);
    }
}


  static async getAllPatients() {
    try {
      // Fetch all patient records from the database
      // Implement your database query or logic here to get all patients
      const allPatients = await Patient.getAllPatients(); // Replace with your actual database query

      return allPatients;
    } catch (error) {
      throw new Error("Error fetching all patients: " + error.message);
    }
  }

  static async patientExists(patientID) {
    try {
      const patientRef = await db.collection("patients").doc(patientID.toString());
      const patientSnapshot = await patientRef.get();

      return patientSnapshot.exists;
    } catch (error) {
      throw new Error("Error checking patient existence: " + error.message);
    }
  }
}

module.exports = PatientController;
