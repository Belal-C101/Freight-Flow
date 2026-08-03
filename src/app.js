const express = require("express");

const app = express();

const shipmentRoutes = require("./routes/shipment.routes")

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "FreightFlow API is running"
    });
});

app.use("/api/shipments", shipmentRoutes);

module.exports = app;