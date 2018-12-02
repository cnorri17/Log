import React from 'react';
import './ClassList.css';

const ClassList = (props) => {
    const classes = props.list;
    const renderElements = () => {
        const classElements = classes.map( (element, i) => {
            return (
                <div key={i} >
                    {element}
                </div>
            )
        })
        return classElements;
    }

    return (
        <div className="listContainer">
            {renderElements()}
        </div>
    )
    
}

export default ClassList;