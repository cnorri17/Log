import React, { Component } from 'react';
import './HtContent.css';
import TeacherClassDisplay from '../../elements/ClassDisplay/TeacherClassDisplay';


class HtContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className = 'divStuff'>
                <h1>User: {this.props.firstName} {this.props.lastName}</h1>
                {this.props.children.map( (doc,key) => {
                    return (
                        <TeacherClassDisplay
                            key={key}
                            name={doc.className}
                            section={doc.section}
                            classID={doc.classID}
                            rate={doc.attendanceRate}
                        />
                    )
                })}
            </div>

        )
    }
}

export default HtContent;