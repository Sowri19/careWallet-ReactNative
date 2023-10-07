const admin = require("firebase-admin");
const db = admin.firestore();
class Insurance {
  constructor(
    insuranceID,
    insuranceCompany,
    startDate,
    endDate,
    memberName,
    insuranceType,
    memberDOB,
    relationshipToPolicyholder
  ) {
    this.insuranceID = insuranceID;
    this.insuranceCompany = insuranceCompany;
    this.startDate = startDate;
    this.endDate = endDate;
    this.memberName = memberName;
    this.insuranceType = insuranceType;
    this.memberDOB = memberDOB;
    this.relationshipToPolicyholder = relationshipToPolicyholder;
  }

  // Add insurance information to the Firestore collection
  async save() {
    try {
      const insuranceRef = await db
        .collection("insurance")
        .doc(this.insuranceID);
      await insuranceRef.set({
        insuranceID: this.insuranceID,
        insuranceCompany: this.insuranceCompany,
        startDate: this.startDate,
        endDate: this.endDate,
        memberName: this.memberName,
        insuranceType: this.insuranceType,
        memberDOB: this.memberDOB,
        relationshipToPolicyholder: this.relationshipToPolicyholder,
      });
    } catch (error) {
      throw new Error("Error saving insurance document: " + error.message);
    }
  }

  // Fetch insurance information by insuranceID from the Firestore collection
  static async getInsuranceByID(insuranceID) {
    try {
      const insuranceRef = await db.collection("insurance").doc(insuranceID);
      const insuranceSnapshot = await insuranceRef.get();

      if (insuranceSnapshot.exists) {
        const insuranceData = insuranceSnapshot.data();
        return new Insurance(
          insuranceData.insuranceID,
          insuranceData.insuranceCompany,
          insuranceData.startDate,
          insuranceData.endDate,
          insuranceData.memberName,
          insuranceData.insuranceType,
          insuranceData.memberDOB,
          insuranceData.relationshipToPolicyholder
        );
      } else {
        return null; // Insurance information not found
      }
    } catch (error) {
      throw new Error("Error fetching insurance document: " + error.message);
    }
  }
}

module.exports = Insurance;
