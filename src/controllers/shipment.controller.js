const Shipment = require("../models/shipment.model");

const createShipment = async (req, res) => {
  try {
    const shipment = await Shipment.create(req.body);

    res.status(201).json({
      status: "success",
      data: shipment,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const shipment = await Shipment.find(req.body);

    res.status(201).json({
      status: "found",
      data: shipment,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });

    res.status(404).json({
      status: "not found",
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const _id = req.params.id;
    const shipment = await Shipment.findById(req.body._id);

    res.status(201).json({
      status: "found",
      data: shipment,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });

    res.status(404).json({
      status: "not found",
      message: error.message,
    });
  }
};

const deleteById = async (req, res) => {
  try {
    const _id = req.params.id;
    const shipment = await Shipment.findByIdAndDelete(req.body._id);

    res.status(201).json({
      status: "deleted",
      data: shipment,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });

    res.status(404).json({
      status: "not found",
      message: error.message,
    });
  }
};

module.exports = {
  createShipment,
  getAll,
  getById,
  deleteById,
};