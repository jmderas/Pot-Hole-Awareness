const mongoose = require('../db/connection')

const Comment = new mongoose.Schema({
    content: String,
    timeStamp: {
        type: Date,
        default: Date.now()
    }
})

const Reports = new mongoose.Schema({
    content: String,
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    severity: String,
    comments: [Comment]
})



module.exports = {
    Reports: mongoose.model("Reports", Reports),
    Comment: mongoose.model("Comment", Comment)
} 