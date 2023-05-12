///////////////////////////////
// DEPENDENCIES
require("dotenv").config();
require('./config/db.connection.js')
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
////////////////////////////////



const applicantRouter = require('./routes/applicant-router')

const app = express();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;



////////////
//MIDDLEWARE
////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors())
app.use(morgan("dev"))

////////////
//ROUTER-MIDDLEWARE
////////////
app.use('/applicants', applicantRouter)






///////////////////////////////
// ROUTES
////////////////////////////////
app.get("/", (req, res) => {
    res.send("hello world. hey hey ");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

