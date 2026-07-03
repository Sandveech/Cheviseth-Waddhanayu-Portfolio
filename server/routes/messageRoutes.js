const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage = newMessage.save();
        res.status(201).json(savedMessage);
    }
    catch (err) {
        console.error("BACKEND VALIDATION ERROR: ", err.message);
        res.status(400).json({ error: err.message });
    }
})

module.exports = router;