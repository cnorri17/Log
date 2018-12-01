import React from 'react';
import './ClassDisplay.css';

const ClassDisplay = (props) => {
    return(
        <div className="classContainer">
            <div className="row-1">
                <div className='col-4'>
                    <h1 className='classH1'>ClassName: {props.name}</h1>
                    <h2 className='classH2'>Section: {props.section}</h2>
                    <h2 className='classH2'>ClassID: {props.classID}</h2>
                </div>
                <div className='col-5'>
                    <h2 className='classH2'>Attendance Rate: {props.rate}</h2>
                </div>
                <div className='col-5'>
                    <button onClick={props.onClick}>Log</button>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default ClassDisplay;