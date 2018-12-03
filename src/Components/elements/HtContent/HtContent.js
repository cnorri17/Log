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
                <h4>User: {this.props.firstName.charAt(0).toUpperCase()+ this.props.firstName.slice(1)} {this.props.lastName.charAt(0).toUpperCase() + this.props.lastName.slice(1)}</h4>
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