// NPM Packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Project files and routes
const connectDB = require("./config/db");
const restaurantLeadsRouter = require("./routes/restaurant-leads.js");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this to parse JSON bodies
app.use(express.static("public"));

app.use(
  cors({
    origin: "*", // Allow React frontend origin
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Route logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// API Routes
app.use("/api/restaurant-leads", restaurantLeadsRouter);

app.get("/", (req, res) => {
  res.json("Welcome to t_world_app");
});

app.use((err, req, res, next) => {
  console.error('🔥 Error:', err.message);
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});


const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

start();