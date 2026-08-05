const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    carrier: {
      type: String,
      required: [true, "Carrier is required"],
      trim: true,
      uppercase: true,
    },

    origin: {
      type: String,
      required: [true, "Origin is required"],
      trim: true,
    },

    destination: {
      type: String,
      required: [true, "Destination is required"],
      trim: true,
    },

    status: {
      type: String,
      enum: {
        values: ["ready", "review", "in-transit", "delivered", "cancelled"],
        message: "{VALUE} is not a valid shipment status",
      },
      default: "ready",
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    trackingNumber: {
      type: String,
      required: [true, "Tracking number is required"],
      unique: true,
      trim: true,
      uppercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;