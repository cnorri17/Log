import React from 'react';
import './AttendanceRate.css';


const AttendanceRate = (props) => {
    return (
        <div className="attendance">
            <h2>{props.rate}%</h2>
        </div>
    )
}

export default AttendanceRate;