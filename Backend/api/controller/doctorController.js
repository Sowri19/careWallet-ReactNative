const Doctor = require("../models/doctorModel"); // Import the Doctor model
const admin = require("firebase-admin");
const db = admin.firestore();

class DoctorController {
  static async createDoctor(
    doctorID,
    doctorName,
    companyName,
    address,
    phoneNumber,
    email
  ) {
    const newDoctor = new Doctor(
      doctorID,
      doctorName,
      companyName,
      address,
      phoneNumber,
      email
    );
    await newDoctor.save();
    return newDoctor;
  }

  static async getDoctorByID(doctorID) {
    return await Doctor.getDoctorByID(doctorID);
  }

  static async doctorExists(doctorID) {
    try {
      console.log("bang");
      const doctorRef = await db.collection("doctors").doc(doctorID.toString());
      const doctorSnapshot = await doctorRef.get();

      return doctorSnapshot.exists;
    } catch (error) {
      throw new Error("Error checking doctor existence: " + error.message);
    }
  }

  static async login(username, password) {
    try {
      const doctor = await Doctor.getDoctorByUsername(username);
      console.log(username);
      console.log(doctor.username);
      if (doctor && doctor.password === password) {
        // You can include additional checks here based on your authentication logic
        return doctor;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Error during doctor login: " + error.message);
    }
  }

  static async getPatientsByDoctorID(doctorID) {
    try {
      const visitsRef = await db.collection("visits").where('doctorID', '==', doctorID).get();
      const patientIDs = visitsRef.docs.map((doc) => doc.data().patientID);
  
      // Fetch patient details based on patientIDs
      const patients = await Promise.all(patientIDs.map(async (patientID) => {
        const patient = await PatientController.getPatientByID(patientID);
        return patient;
      }));
  
      return patients.filter((patient) => !!patient); // Filter out null values
    } catch (error) {
      throw new Error("Error fetching patients by doctor ID: " + error.message);
    }
  }
}



module.exports = DoctorController;
