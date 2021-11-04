const { Schema } = require("mongoose");

const stocksSchema = new Schema({
  userId: String,
  HSN: Number,
  amount: Number,
  amount_sold: Number,
  amount_bought: Number,
  GST: Number,
});

module.exports = stocksSchema;
