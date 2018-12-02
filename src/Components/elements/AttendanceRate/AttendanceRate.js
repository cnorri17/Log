import React from 'react';
import './AttendanceRate.css';


const AttendanceRate = (props) => {
    return (
        <div className="attendance">
            <h4>{props.rate}%</h4>
        </div>
    )
}

export default AttendanceRate;