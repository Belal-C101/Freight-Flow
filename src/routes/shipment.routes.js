const express = require("express");

const {
  createShipment,
} = require("../controllers/shipment.controller");

const router = express.Router();

router.post("/", createShipment);

module.exports = router;