import React, {Component} from 'react';
import './StContent.css';
import AttendanceRate from '../AttendanceRate/AttendanceRate'

class StContent extends Component {
    state = {
        classList: ['class1-section1', 'class2-section2','class1-section2']
    }

    renderClasses = () => {
        const classElements = this.state.classList.map( (element, i) => {
            return (
                <div key={i}>
                    {element}
                    <AttendanceRate rate={this.getAttendanceRate(this.key)}/>
                </div>
            )
        })
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
            </div>
            
        )
    }
}

export default StContent;