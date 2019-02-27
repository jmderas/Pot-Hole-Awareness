const mongoose = require('..db/connection')

const Reports = new mongoose.Schema({
    name: String,
    photo: 
    description: String,
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    severity: String
})

module.exports = mongoose.model("Reports", Reports);