import React, {Component} from 'react';
import './StContent.css';
import AttendanceRate from '../AttendanceRate/AttendanceRate'
import {firebase} from '../../../fbConfig'

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
                <h1>AccountType: Student</h1>
            </div>
            
        )
    }
}

export default StContent;