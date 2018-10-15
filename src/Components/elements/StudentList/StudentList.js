import React from 'react';
import './StudentList.css';

const StudentList = (props) => {
    const students = props.list;
    const renderElements = () => {
        const studentElements = students.map( (element, i) => {
            return (
                <div key={i} >
                    {element}
                </div>
            )
        })
        return studentElements;
    }

    return (
        <div className="listContainer">
            {renderElements()}
        </div>
    )
    
}

export default StudentList;