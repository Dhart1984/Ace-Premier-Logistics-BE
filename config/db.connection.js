///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();

// start the mongoose db connection
// require('./config/db.connection.js')

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');
const {MONGODB_URI} = process.env

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI)

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));
