const Visit = require("../models/visitsModel"); // Import the Visit model
const PatientController = require("../controller/patientController");
const admin = require("firebase-admin");
const db = admin.firestore();

class VisitController {
  

  static async createVisit(patientID, doctorID) {
    try {
      // Fetch patient details from the patients table
      const patient = await PatientController.getPatientByID(patientID);

      if (patient) {
        // Add the visit to the visits table, including patient details
        const newVisit = new Visit(
          patientID,
          doctorID,
          patient.firstName,
          patient.lastName,
          patient.dob
        );

        const visitID = await newVisit.save();
        return { visitID, patientID, doctorID, patientFirstName: patient.firstName, patientLastName: patient.lastName, patientDob: patient.dob };
      } else {
        throw new Error("Patient not found");
      }
    } catch (error) {
      throw new Error("Error creating visit: " + error.message);
    }
  }


  static async getPatientsByDoctorID(doctorID) {
    try {
      const visitsSnapshot = await db
        .collection("visits")
        .where("doctorID", "==", doctorID)
        .get();
      
      console.log("hellogod");
      const patients = [];
      for (const visitDoc of visitsSnapshot.docs) {
        const visitData = visitDoc.data();
        // You may need to fetch additional patient details based on your data model
        const patient = await PatientController.getPatientByID(visitData.patientID);
        if (patient) {
          patients.push(patient);
        }
      }

      return patients;
    } catch (error) {
      throw new Error("Error fetching patients by doctor ID: " + error.message);
    }
  }

  // You can add more methods as needed

}

module.exports = VisitController;
