const express = require("express");
const InsuranceController = require("../controller/insuranceController");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      insuranceID,
      insuranceCompany,
      startDate,
      endDate,
      memberName,
      insuranceType,
      memberDOB,
      relationshipToPolicyholder,
    } = req.body;
    const newInsurance = await InsuranceController.createInsurance(
      insuranceID,
      insuranceCompany,
      startDate,
      endDate,
      memberName,
      insuranceType,
      memberDOB,
      relationshipToPolicyholder
    );
    res.json(newInsurance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:insuranceID", async (req, res) => {
  try {
    const { insuranceID } = req.params;
    const insurance = await InsuranceController.getInsuranceByID(insuranceID);
    if (insurance) {
      res.json(insurance);
    } else {
      res.status(404).json({ error: "Insurance not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
