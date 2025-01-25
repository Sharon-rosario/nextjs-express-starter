const mongoose = require("mongoose");

const restaurantLeadSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  googleMapsUrl: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  perPersonCostRange: {
    type: String,
    default: "",
  },
  summary: { type: String, default: "" },
  mailCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("RestaurantLead", restaurantLeadSchema);