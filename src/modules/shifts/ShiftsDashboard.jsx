import React from 'react';
import './ShiftsDashboard.css'; // Assuming you will add your styles in this file

const ShiftsDashboard = ({ assignedPosition, shiftType, restDays, shiftPattern }) => {
    return (
        <div className={`shifts-dashboard ${shiftType === 'Night' ? 'dark-mode' : ''}`}> {/* Apply dark mode styling if shift type is Night */}
            <h1>Shifts Dashboard</h1>
            <div className="shift-info">
                <h2>Assigned Position: {assignedPosition}</h2>
                <h3>Shift Type: {shiftType}</h3>
                <h3>Rest Days: {restDays.join(', ')}</h3>
                <h3>Shift Pattern: {shiftPattern}</h3>
            </div>
        </div>
    );
};

export default ShiftsDashboard;