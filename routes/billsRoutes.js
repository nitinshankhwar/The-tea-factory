const express = require("express");
const {
  addBillsController,
  getBillsController,
} = require("../controllers/billsController");

const router = express.Router();

// method - bills post
router.post("/add-bills", addBillsController);

// method - bills get
router.get("/get-bills", getBillsController);
module.exports = router;
