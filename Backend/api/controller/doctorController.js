const Doctor = require("../models/doctorModel"); // Import the Doctor model

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
}

module.exports = DoctorController;
