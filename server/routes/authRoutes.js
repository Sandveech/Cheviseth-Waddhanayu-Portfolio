const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { password } = req.body;

    if (password === process.env.ADMIN_PASSWORD) {
        res.status(200).json({
            success: true,
            token: process.env.ADMIN_PASSWORD
        });
    }
    else {
        res.status(401).json({ success: false, error: "Invalid password." });
    }
})

module.exports = router;