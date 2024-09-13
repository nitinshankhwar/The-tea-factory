const billsModel = require("../models/billsModel");

// add item
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.status(201).send("Bill Generated");
  } catch (error) {
    res.status(400).send("error:", error);
    console.log(error);
  }
};

// get bills data
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBillsController,
  getBillsController,
};
