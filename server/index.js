const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const URI = process.env.MONGO_URI;

const port = 4000;

mongoose.connect(URI, { useNewUrlParser: true });

db = mongoose.connection;

db.on("Error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
});

const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

app.use(cors());
app.use(express.json());

app.use(loginRoute);
app.use(registerRoute);

app.get("/", (req, res) => res.send("Hello World!"));
