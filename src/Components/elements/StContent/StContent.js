import React, {Component} from 'react';
import './StContent.css';
import AttendanceRate from '../AttendanceRate/AttendanceRate'
import {firebase} from '../../../fbConfig'
import StudentClassDisplay from '../../elements/ClassDisplay/StudentClassDisplay';

class StContent extends Component {
    state = {
        classList: [],
    }

    componentDidMount() {
        // this.setState({classList: this.props.classList})
        // this.logListener("GNEKJsSzmvZDt3sxwC8u");
    }

    render() {
        return (
            <div>
                <h1>User: {this.props.firstName} {this.props.lastName}</h1>
                {/* <h1>AccountType: Student</h1> */}
                {this.props.children.map( (doc,key) => {
                    return (
                        <StudentClassDisplay
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

export default StContent;