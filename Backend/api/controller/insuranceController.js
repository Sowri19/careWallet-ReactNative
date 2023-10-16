const Insurance = require("../models/insuranceModel"); // Import the Insurance model

class InsuranceController {
  static async createInsurance(
    insuranceID,
    insuranceCompany,
    startDate,
    endDate,
    memberName,
    insuranceType,
    memberDOB,
    relationshipToPolicyholder
  ) {
    const newInsurance = new Insurance(
      insuranceID,
      insuranceCompany,
      startDate,
      endDate,
      memberName,
      insuranceType,
      memberDOB,
      relationshipToPolicyholder
    );
    await newInsurance.save();
    return newInsurance;
  }

  static async getInsuranceByID(insuranceID) {
    return await Insurance.getInsuranceByID(insuranceID);
  }
}

module.exports = InsuranceController;
