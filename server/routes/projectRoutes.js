const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const jwt = require('jsonwebtoken');

const requireAdmin = (req, res, next) => {
    const token = req.headers['x-admin-password'];

    if (!token) {
        return res.status(401).json({ error: "Access Denied: No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(403).json({ error: "Invalid or expired token." });
    }
}

router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        let filter = {};

        if (category) {
            filter.category = category;
        }

        const projects = await Project.find(filter);
        res.json(projects);
    }   
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.post('/', requireAdmin, async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = newProject.save();
        res.status(201).json(savedProject);
    }
    catch (err) {
        console.error("BACKEND VALIDATION ERROR: ", err.message);
        res.status(400).json({ error: err.message });
    }
});

router.patch('/:id', requireAdmin, async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ error: "Project not found." });
        }
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.delete('/:id', requireAdmin, async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);

        if (!deletedProject) {
            return res.status(404).json({ error: "Project not found." });
        }

        res.json({
            message: "Project successfully deleted from the database.",
            deletedProject
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;