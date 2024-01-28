const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
    regNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    records: {
        height: String,
        weight: String,
        vision: String,
        hearing: String,
        allergies: String,
        currentMedications: String,
        immunizationRecord: String,
        physicalActivityLimitations: String,
        preferredHospitalClinic: String
    }
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
