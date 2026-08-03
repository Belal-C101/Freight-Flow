const express = require("express");

const {getAllShipments, getAllShipmentsById} = require("../controllers/shipment.controller");

const router = express.Router();

router.get("/", getAllShipments)

router.get("/:id", getAllShipmentsById)

module.exports = router;