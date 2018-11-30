import React from 'react';

const ClassDisplay = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.section}</h2>
            <h2>{props.classID}</h2>
            <h2>{props.rate}</h2>
        </div>
    )
}

export default ClassDisplay;