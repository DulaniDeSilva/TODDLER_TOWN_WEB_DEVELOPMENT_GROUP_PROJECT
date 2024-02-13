const mongoose = require('mongoose');

const staffAttendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true,
    },
    staffAttendance: [{
        staffId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
            required: true,
        },
        isPresent: {
            type: Boolean,
            default: false,
        },
    }],
});
staffAttendanceSchema.statics.addStaffAttendance = async function(date, attendanceData) {
    try {
        
        const addedAttendance = await this.create({ date, attendanceData });
        return addedAttendance;
    } catch (error) {
        throw new Error(`Failed to add staff attendance: ${error.message}`);
    }
};

module.exports = mongoose.model('StaffAttendance', staffAttendanceSchema);

// module.exports = StaffAttendance;
// module.exports = mongoose.model('HealthRecord', healthRecordSchema);