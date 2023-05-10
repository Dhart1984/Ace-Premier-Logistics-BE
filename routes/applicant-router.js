// ./routes/applicant-router.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const applicantCtrl = require('../controllers/applicant-controller')


///////////////////////////////
// ROUTES
////////////////////////////////

// Applicant INDEX ROUTE
router.get("/", applicantCtrl.index);
// Applicant CREATE ROUTE
router.post("/", applicantCtrl.create);
// Applicant SHOW ROUTE
router.get("/:id", applicantCtrl.getOne);
// applicant DELETE ROUTE
router.delete("/:id", applicantCtrl.delete);
// // applicant UPDATE ROUTE
router.put("/:id", applicantCtrl.update);



module.exports = router

