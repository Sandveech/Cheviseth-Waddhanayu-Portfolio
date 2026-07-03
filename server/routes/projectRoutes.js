const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

const requireAdmin = (req, res, next) => {
    const authHeader = req.headers['x-admin-password'];
    if (authHeader === process.env.ADMIN_PASSWORD) {
        next();
    }
    else {
       res.status(401).json({ error: "Unauthorized: Invalid Admin Password." }); 
    }
}

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
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