import React, {Component} from 'react';
import './StContent.css';
import AttendanceRate from '../AttendanceRate/AttendanceRate'
import {firebase} from '../../../fbConfig'
import ClassDisplay from '../../Home/ClassDisplay';

class StContent extends Component {
    state = {
        classList: [],
        logging: false,
    }

    componentDidMount() {
        // this.setState({classList: this.props.classList})
        this.logListener("GNEKJsSzmvZDt3sxwC8u");
    }

    logListener = (classID) => {
        console.log("ClassID: " + classID)
        const currentUser = firebase.auth().currentUser;
        
        if (currentUser){
            const classRef = firebase.firestore().collection("Classes").doc(classID);
            var logValue = false;
            classRef.onSnapshot(doc => {
                const data = doc.data();
                logValue = data.logging;
                console.log("new log value: " + logValue)
                this.setState({ logging: logValue})
            })
            console.log("outside listen new log" + logValue);
            return logValue;
        }
    }

    render() {
        return (
            <div>
                <h1>User: {this.props.firstName} {this.props.lastName}</h1>
                {/* <h1>AccountType: Student</h1> */}
                {<h1>Logging: {this.state.logging}</h1>}
                {this.props.children.map( (doc,key) => {
                    {/* this.logListener(doc.classID); */}
                    console.log("Log value in map: " + this.state.logging)
                    {/* let log = this.logListener(doc.classID); */}
                    return (
                        <ClassDisplay
                            key={key}
                            name={doc.className}
                            section={doc.section}
                            classID={doc.classID}
                            rate={doc.attendanceRate}
                            logging={this.state.logging}
                        />
                    )
                })}
            </div>
            
        )
    }
}

export default StContent;