import React, {Component} from 'react';
import './StContent.css';
import AttendanceRate from '../AttendanceRate/AttendanceRate'
import {firebase} from '../../../fbConfig'
import ClassDisplay from '../../Home/ClassDisplay';

class StContent extends Component {
    state = {
        classList: [],
    }

    componentDidMount() {
        // this.setState({classList: this.props.classList})
    }



    getAttendanceRate(item){
        //fetch attendance rate with 
        //store into a variable
        //return attendance rate variable as an int/string
    }




    render() {
        return (
            <div>
                <h1>User: {this.props.firstName} {this.props.lastName}</h1>
                {/* <h1>AccountType: Student</h1> */}
                {this.props.children.map( (doc,key) => {
                    return (
                        <ClassDisplay
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