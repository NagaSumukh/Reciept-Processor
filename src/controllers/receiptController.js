const receiptService = require("../services/receiptService");

const processReceipt = (req, res) => {
  try {
    const id = receiptService.processReceipt(req.body);
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ error: "Could not process receipt" });
  }
};

const getPoints = (req, res) => {
  const points = receiptService.getPoints(req.params.id);
  if (points !== undefined) {
    res.status(200).json({ points });
  } else {
    res.status(404).json({ error: "Receipt not found" });
  }
};

module.exports = { processReceipt, getPoints };
