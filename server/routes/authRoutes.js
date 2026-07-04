const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post('/login', (req, res) => {
    const { password } = req.body;

    if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(
            { role: 'admin' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            success: true,
            token: token
        });
    }
    else {
        res.status(401).json({ success: false, error: "Invalid password." });
    }
})

module.exports = router;