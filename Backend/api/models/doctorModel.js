const admin = require("firebase-admin");
const db = admin.firestore();

class Doctor {
  constructor(doctorID, doctorName, companyName, address, phoneNumber, email, username, password) {
    this.doctorID = doctorID;
    this.doctorName = doctorName;
    this.companyName = companyName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  async save() {
    try {
      const doctorRef = await db
        .collection("doctors")
        .doc(this.doctorID.toString());
      await doctorRef.set({
        doctorID: this.doctorID,
        doctorName: this.doctorName,
        companyName: this.companyName,
        address: this.address,
        phoneNumber: this.phoneNumber,
        email: this.email,
        username: this.username,
        password: this.password,
      });
    } catch (error) {
      throw new Error("Error saving doctor document: " + error.message);
    }
  }

  // Fetch a doctor by their doctorID from the Firestore collection
  static async getDoctorByID(doctorID) {
    try {
      const doctorRef = await db.collection("doctors").doc(doctorID.toString());
      const doctorSnapshot = await doctorRef.get();

      if (doctorSnapshot.exists) {
        const doctorData = doctorSnapshot.data();
        return new Doctor(
          doctorData.doctorID,
          doctorData.doctorName,
          doctorData.companyName,
          doctorData.address,
          doctorData.phoneNumber,
          doctorData.email,
          doctorData.username,
          doctorData.password,

        );
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Error fetching doctor document: " + error.message);
    }
  }

  static async getDoctorByUsername(username) {
    try {
      const doctorsRef = await db.collection("doctors");
      const querySnapshot = await doctorsRef.where('username', '==', username).get();
      
      if (!querySnapshot.empty) {
        const doctorData = querySnapshot.docs[0].data();
        return new Doctor(
          doctorData.doctorID,
          doctorData.doctorName,
          doctorData.companyName,
          doctorData.address,
          doctorData.phoneNumber,
          doctorData.email,
          doctorData.username,
          doctorData.password
        );
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Error fetching doctor document: " + error.message);
    }
  }
}

module.exports = Doctor;
