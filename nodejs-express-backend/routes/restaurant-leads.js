const express = require("express");
const router = express.Router();
const restaurantLeadsController = require("../controllers/restaurant-leads-controller");

// Create a new lead
router.post("/", restaurantLeadsController.createLead);

// Retrieve all leads
router.get("/", restaurantLeadsController.getAllLeads);

// Retrieve a single lead by id
router.get("/:id", restaurantLeadsController.getLeadById);

// Update a lead by id
router.put("/:id", restaurantLeadsController.updateLead);

// Delete a lead by id
router.delete("/:id", restaurantLeadsController.deleteLead);

module.exports = router;