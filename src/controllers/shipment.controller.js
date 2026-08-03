const getAllShipments = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "All Shipments Received"
    });
};

const getAllShipmentsById = (req, res) => {
    const shipmentId = req.params.id;

    res.status(200).json({
        status: "success",
        message: `Shipment ${shipmentId} Received`
    });
};

module.exports = {getAllShipments, getAllShipmentsById}