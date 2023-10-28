const admin = require("firebase-admin");
const db = admin.firestore();
const { v4: uuidv4 } = require("uuid");

class Patient {
  constructor(
    firstName,
    lastName,
    address,
    phoneNumber,
    email,
    dob,
    insuranceID
  ) {
    this.patientID = uuidv4();
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.address = address || "";
    this.phoneNumber = phoneNumber || "";
    this.email = email || "";
    this.dob = dob || "";
    this.insuranceID = insuranceID || "";
  }

  // Add a new patient to the Firestore collection
  async save() {
    try {
      const patientRef = await db.collection("patients").doc(this.patientID);
      await patientRef.set({
        patientID: this.patientID,
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        phoneNumber: this.phoneNumber,
        email: this.email,
        dob: this.dob,
        insuranceID: this.insuranceID,
      });
    } catch (error) {
      throw new Error("Error saving patient document: " + error.message);
    }
  }

  // Fetch a patient by their patientID from the Firestore collection
  static async getPatientByID(patientID) {
    try {
      const patientRef = await db.collection("patients").doc(patientID);
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
}

module.exports = Patient;
