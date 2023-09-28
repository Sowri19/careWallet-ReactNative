class Doctor {
  constructor(doctorID, doctorName, companyName, address, phoneNumber, email) {
    this.doctorID = doctorID;
    this.doctorName = doctorName;
    this.companyName = companyName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  // Add a new doctor to the Firestore collection
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
          doctorData.email
        );
      } else {
        return null; // Doctor not found
      }
    } catch (error) {
      throw new Error("Error fetching doctor document: " + error.message);
    }
  }
}

module.exports = Doctor;
