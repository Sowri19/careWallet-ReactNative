const admin = require("firebase-admin");
const db = admin.firestore();

class Visit {
  constructor(patientID, doctorID, patientFirstName, patientLastName, patientDob) {
    this.patientID = patientID;
    this.doctorID = doctorID;
    this.patientFirstName = patientFirstName;
    this.patientLastName = patientLastName;
    this.patientDob = patientDob;
  }

  async save() {
    try {
      const visitRef = await db.collection("visits").add({
        patientID: this.patientID,
        doctorID: this.doctorID,
        patientFirstName: this.patientFirstName,
        patientLastName: this.patientLastName,
        patientDob: this.patientDob,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      });

      return visitRef.id; // Return the ID of the created visit
    } catch (error) {
      throw new Error("Error saving visit document: " + error.message);
    }
  }

  // Additional methods can be added for fetching visit details, etc.
}

module.exports = Visit;
