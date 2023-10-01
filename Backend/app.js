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
const userRoutes = require("./api/routes/userRoutes");
const videoRoutes = require("./api/routes/videoRoutes");
const therapistRoutes = require("./api/routes/therapistRoutes");

// Use the userRoutes for user-related endpoints
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/therapists", therapistRoutes);

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
