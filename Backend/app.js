const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://carewallet-28a41.appspot.com",
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Importing the routes
const patientRoutes = require("./api/routes/patientRoutes");
const doctorRoutes = require("./api/routes/doctorRoutes");
const insuranceRoutes = require("./api/routes/insuranceRoutes");
const visitsRoutes = require("./api/routes/visitsRoutes");

// Use the userRoutes for user-related endpoints
app.use("/patients", patientRoutes);
app.use("/doctors", doctorRoutes);
app.use("/insurances", insuranceRoutes);
app.use("/visits", visitsRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: error.message || "Internal Server Error",
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
