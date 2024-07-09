const { validationResult, checkSchema } = require("express-validator");

const receiptSchema = {
  retailer: {
    isString: true,
    trim: true,
    notEmpty: true,
    matches: {
      options: [/^[\w\s\-&]+$/],
      errorMessage: "Retailer name contains invalid characters",
    },
  },
  purchaseDate: {
    isISO8601: true,
    toDate: true,
  },
  purchaseTime: {
    matches: {
      options: [/^\d{2}:\d{2}$/],
      errorMessage: "Invalid time format, should be HH:MM",
    },
  },
  total: {
    matches: {
      options: [/^\d+\.\d{2}$/],
      errorMessage: "Total amount must have two decimal places",
    },
  },
  items: {
    isArray: { options: { min: 1 } },
    custom: {
      options: (value) => {
        return value.every((item) => {
          return (
            typeof item.shortDescription === "string" &&
            item.shortDescription.trim().length > 0 &&
            /^\d+\.\d{2}$/.test(item.price)
          );
        });
      },
      errorMessage: "Each item must have a valid shortDescription and price",
    },
  },
};

const validateReceipt = [
  checkSchema(receiptSchema),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateReceipt;
