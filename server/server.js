// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// env
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const projectRoutes = require('./routes/projectRoutes.js');
app.use('/api/projects', projectRoutes);

const authRoutes = require('./routes/authRoutes.js');
app.use('/api/auth', authRoutes);

// db connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
    .then(() => console.log("Successfully connected to MongoDB!"))
    .catch(err => { 
        console.error("--- DETAILED MONGO ERROR START ---");
        console.error(err);
        console.error("--- DETAILED MONGO ERROR END ---");
    });

app.get("api/data", async (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));