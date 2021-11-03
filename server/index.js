const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;

mongoose.connect(URI);

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port port!`));
