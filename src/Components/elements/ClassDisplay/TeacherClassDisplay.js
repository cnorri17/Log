import React, {Component} from 'react';
import './ClassDisplay.css';
import {firebase} from '../../../fbConfig';

class TeacherClassDisplay extends Component {
    constructor(props) {
        super(props);
        this.state={
            logging: false,
            didMount: false,
        }
    }

    componentDidMount() {
        this.setState({ didMount: true })
        // if(this.state.didMount) {
        //     this.logListener();
        // }
        // this.logListener();
        this.logListener(true);
    }

    componentWillUnmount() {
        this.setState({ didMount: false})
        this.logListener(false);
    }

    logListener =(didMount)=> {
        if(didMount){
            console.log("ClassID: " + this.props.classID)
            const currentUser = firebase.auth().currentUser;
            if (currentUser){
                const classRef = firebase.firestore().collection("Classes").doc(this.props.classID);
                classRef.onSnapshot(doc => {
                    const data = doc.data();
                    this.setState({logging: data.logging})
                })
                console.log("outside listen new log" + this.state.logging);
                
                const userRef = firebase.firestore().collection("Users").doc(currentUser.uid).collection("UserClasses").where("classID", "==",this.props.classID);
                userRef.onSnapshot(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        const data = doc.data();
                        this.setState({attendanceRate: data.attendanceRate})
                    })
                    
                })
            }
        }
        }
    //     console.log("ClassID: " + this.props.classID)
    //     const currentUser = firebase.auth().currentUser;
    //     if (currentUser){
    //         const classRef = firebase.firestore().collection("Classes").doc(this.props.classID);
    //         classRef.onSnapshot(doc => {
    //             const data = doc.data();
    //             this.setState({logging: data.logging})
    //         })
    //         console.log("outside listen new log" + this.state.logging);
    //     }
    // }

    render() {
        return(
            <div className="classContainer">
                <div className="row-1">
                    <div className='col-4'>
                        <h1 className='classH1'>ClassName: {this.props.name}</h1>
                        <h2 className='classH2'>Section: {this.props.section}</h2>
                        <h2 className='classH2'>ClassID: {this.props.classID}</h2>
                    </div>
                    <div className='col-5'>
                        <h2 className='classH2'>Attendance Rate: {this.props.rate}</h2>
                    </div>
                    <div className='col-5'>
                        <button disabled={!this.state.logging} onClick={this.props.onClick}>Log</button>
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}

export default TeacherClassDisplay;