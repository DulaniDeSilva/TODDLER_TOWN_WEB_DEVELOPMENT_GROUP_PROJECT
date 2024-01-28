const express = require('express');
const HealthRecord = require('../../Models/TeacherModels/HealthRecord');

const router = require('express').Router();

router.post('/add', async (req, res) => {
    try {
        const record = new HealthRecord(req.body);
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/search/:regNumber', async (req, res) => {
    try {
        const record = await HealthRecord.findOne({ regNumber: req.params.regNumber });
        if (!record) return res.status(404).json({ message: "Record not found" });
        res.json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/update/:regNumber', async (req, res) => {
    try {
        const record = await HealthRecord.findOneAndUpdate({ regNumber: req.params.regNumber }, req.body, { new: true });
        if (!record) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/all', async (req, res) => {
    try {
        const allRecords = await HealthRecord.find();
        res.json(allRecords);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const allRecords = await HealthRecord.find();
        res.json(allRecords);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
