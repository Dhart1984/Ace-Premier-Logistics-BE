const mongoose = require('mongoose')

const applicantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    }, lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true

    }, phoneNumber: {
        type: Number,
        // required: true,
    },
    validLicense: {
        type: Boolean,
        // required: true


    }, resumeLink: {
        type: String


    }, linkedIn: {
        type: String


    }, reviewed: {
        type: Boolean
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('Applicant', applicantSchema)