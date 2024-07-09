const express = require("express");
const router = express.Router();
const {
  processReceipt,
  getPoints,
} = require("../controllers/receiptController");
const validateReceipt = require("../middlewares/validateRequest");

router.post("/receipts/process", validateReceipt, processReceipt);
router.get("/receipts/:id/points", getPoints);

module.exports = router;
