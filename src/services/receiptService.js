const { v4: uuidv4 } = require("uuid");
const calculatePoints = require("../utils/pointsCalculator");
const receipts = new Map();

const processReceipt = (receipt) => {
  const id = uuidv4();
  receipt.id = id;
  receipt.points = calculatePoints(receipt);
  receipts.set(id, receipt);
  return id;
};

const getPoints = (id) => {
  return receipts.get(id)?.points;
};

module.exports = { processReceipt, getPoints };
