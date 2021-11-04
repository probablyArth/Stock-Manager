const { Schema } = require("mongoose");

const billSchema = new Schema({
  userId: String,
  bill_no: String,
  type: String, // Either "sell" or "purchase"
  total_amount: Number,
  GSTIN: String,
  date: Date,
  stocks: [{ HSN: String, Amount: Number, Price: Number }],
});

module.exports = billSchema;
