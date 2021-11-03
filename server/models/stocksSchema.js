const { Schema } = require("mongoose");

const stocksSchema = new Schema({
  userId: String,
  stocks: [
    {
      name: String,
      amount: Number,
      unit: String,
      price: Number,
      date: Date,
      hsn: Number,
      seller: String,
      buyer: String,
    },
  ],
});
