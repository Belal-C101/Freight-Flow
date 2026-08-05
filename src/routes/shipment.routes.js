const express = require("express");

const {
  createShipment,
  getAll,
  getById,
  deleteById,
} = require("../controllers/shipment.controller");

const router = express.Router();

router.post("/", createShipment);
router.get("/", getAll);
router.get("/", getById);
router.delete("/", deleteById);

module.exports = router;