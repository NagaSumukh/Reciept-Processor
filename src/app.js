const express = require("express");
const app = express();
const receiptRoutes = require("./routes/receiptRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use("/api", receiptRoutes);

app.use(errorHandler);

module.exports = app;
