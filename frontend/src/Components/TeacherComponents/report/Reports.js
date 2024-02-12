// src/features/reports/Reports.js
import React, { useState } from 'react';
import '../../../Assets/Styles/StaffInterface.css';

function Reports() {
    const [reportType, setReportType] = useState(''); // 'academic', 'attendance', or 'health'
    const [indexNumber, setIndexNumber] = useState('');
    const [generatedReport, setGeneratedReport] = useState(null);

    const generateReport = () => {
        
        let reportData = '';
        if (reportType === 'academic') {
            reportData = `Academic report for child with index number ${indexNumber}. (Sample data...)`;
        } else if (reportType === 'attendance') {
            reportData = `Attendance report for child with index number ${indexNumber}. (Sample data...)`;
        } else if (reportType === 'health') {
            reportData = `Health report for child with index number ${indexNumber}. (Sample data...)`;
        }

        setGeneratedReport(reportData);
    };

    const printReport = () => {
        if (generatedReport) {
            window.print(); // This uses the browser's print functionality
        }
    };

    return (
        <div className="information-container">
            <h2 className="headerr">Generate Reports</h2>
            <div>
                <label className="label">Select Report Type:</label>
                <select 
                    value={reportType} 
                    onChange={(e) => setReportType(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    <option value="academic">Academic Report</option>
                    <option value="attendance">Attendance Report</option>
                    <option value="health">Health Report</option>
                </select>
            </div>
            <div>
                <label className="label">Enter Child's Index Number:</label>
                <input 
                    type="text" 
                    value={indexNumber}
                    onChange={(e) => setIndexNumber(e.target.value)}
                />
            </div>
            <div className="button-container">
                <button onClick={generateReport}>Generate Report</button>
            </div>
            
            {generatedReport && (
                <div className="report-output">
                    <pre>{generatedReport}</pre>
                    <button onClick={printReport}>Print Report</button>
                </div>
            )}
        </div>
    );
}

export default Reports;
