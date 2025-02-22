require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { authorization } = require("paypal-rest-sdk");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000; //!  IF port not present than take 5000 as a port number

const MONGO_URI = process.env.MONGO_URI;

cors({
  origin: process.env.CLIENT,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [("Content-type", "Authorization")],
});

app.use(express.json()); //! Middleware

//! Database connection

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Db is now connected "))
  .catch((e) => console.log("connection Loss"));

app.listen(PORT, () => {
  //! without it your application will not be accessible over the network and your server will not start
  //! and also handle upcoming http Request
  console.log(`server is running on ${PORT}`);
});
