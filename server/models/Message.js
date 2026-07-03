const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true },
    sentAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", MessageSchema);