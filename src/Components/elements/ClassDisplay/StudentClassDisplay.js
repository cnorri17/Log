import React, {Component} from 'react';
import './ClassDisplay.css';
import {firebase} from '../../../fbConfig'

class StudentClassDisplay extends Component {
    constructor(props) {
        super(props);
        this.state={
            logging: false,
            attendanceCode: '',
            inputCode: '',
            attendanceRate: 0,
            tempStudentAttendance: 0,
            tempTotalDays: 0,
        }
        this.fetchCode = this.fetchCode.bind(this);
        this.logAttendance = this.logAttendance.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateClassAttendance = this.updateClassAttendance.bind(this);
    }

    componentDidMount() {

        this.logListener(true);
    }

    componentWillUnmount() {
        this.logListener(false);
    }

    logListener = (didMount) => {
        if(didMount){
            console.log("ClassID: " + this.props.classID)
            const currentUser = firebase.auth().currentUser;
            
            if (currentUser){
                    const classRef = firebase.firestore().collection("Classes").doc(this.props.classID);
                    classRef.onSnapshot(doc => {
                        const data = doc.data();
                        this.setState({logging: data.logging})
                        if (data.logging) {
                            this.fetchCode();
                        }
                    })
                    console.log("outside listen new log " + this.state.logging);

                    const userRef = firebase.firestore().collection("Users").doc(currentUser.uid).collection("UserClasses").where("classID", "==",this.props.classID);
                    userRef.onSnapshot(querySnapShot => {
                        querySnapShot.forEach(doc => {
                            const data = doc.data();
                            this.setState({attendanceRate: data.attendanceRate})
                        })
                        
                    })

                    // console.log("attendanceRate: " + this.state.attendanceRate);
            }
        }
        // console.log("ClassID: " + this.props.classID)
        // const currentUser = firebase.auth().currentUser;
        
        // if (currentUser){
        //     if(this.state.didMount) {
        //         const classRef = firebase.firestore().collection("Classes").doc(this.props.classID);
        //         classRef.onSnapshot(doc => {
        //             const data = doc.data();
        //             this.setState({logging: data.logging})
        //         })
        //         console.log("outside listen new log" + this.state.logging);
        //     }

        // }
    }

    fetchCode() {
        const classRef = firebase.firestore().collection("Classes").doc(this.props.classID);
        classRef.get()
            .then(result => {
                console.log(result.data().attendanceCode)
                this.setState({attendanceCode: result.data().attendanceCode})
            })
            .catch(error => {
                console.log("Error in fetching class Code StudentClassDisplay.js" + error)
            })
    }

    updateClassAttendance = (userID, classID) => {
        const classRef = firebase.firestore().doc(`Classes/${classID}/Students/${userID}`);

        // firebase.firestore().runTransaction(transaction => {
        //     return transaction.get(classRef).then(doc => {
        //         if (doc.exists) {
        //             var newAttendance = doc.data().totalAttendance + 1;
        //             this.setState({tempStudentAttendance: newAttendance})
        //             console.log("newAttendance in updateClassAttendance: " + newAttendance);
        //             console.log("tempStudentAttendance: " + this.state.tempStudentAttendance);
        //             transaction.update(classRef, { totalAttendance: newAttendance})
        //         } else {
        //             alert("Error, cannot find class. Something broke.")
        //         }
        //     })
        // })
        // .then(() => {
        //     console.log("Transaction Success");
        // })
        // .catch(error => {
        //     console.log('Transaction failure: ', error);
        // })

        classRef.get()
            .then(doc => {
                var newAttendance = doc.data().totalAttendance + 1;
                this.setState({tempStudentAttendance: newAttendance});
                console.log("newAttendance in updateClassAttendance: " + newAttendance);
                console.log("tempStudentAttendance: " + this.state.tempStudentAttendance);
                doc.ref.set({
                    totalAttendance: newAttendance
                }, {merge: true})
                    .then(result => {
                        console.log("total attendance update success")
                    })
                console.log("student doc fetch success")
            })
    }

    updateStudentAttendance = (userID, classID) => {
        const userRef = firebase.firestore().collection("Users").doc(userID).collection("UserClasses").where("classID","==", classID);
        const classRef = firebase.firestore().doc(`Classes/${classID}`);
        classRef.get()
            .then(doc => {
                this.setState({tempTotalDays: doc.data().totalDays})
                console.log("tempTotalDays: " + this.state.tempTotalDays)
                // doc.ref.collection("Students").doc(userID).get()
                //     .then(student => {
                //         this.setState({tempStudentAttendance: student.data().totalAttendance});
                //         console.log("totalAttendance: " + student.data().totalAttendance);
                //         console.log("tempStudentAtt: " + this.state.tempStudentAttendance)
                //     })
            })

        userRef.get()
            .then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    console.log("tempStudentAttendance in calc: " + this.state.tempStudentAttendance);
                    console.log("tempTotalDays in calc: " + this.state.tempTotalDays);
                    var calc = (this.state.tempStudentAttendance/this.state.tempTotalDays) * 100;
                    console.log("calc: " + calc)
                    doc.ref.set({
                        attendanceRate: calc,
                    }, {merge: true})
                })
            })

    }
    

    logAttendance(event) {
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
            // this.fetchCode();
            if(this.state.inputCode !== this.state.attendanceCode)
            {
                alert("That is not the correct daily code.");
            } else{
                this.updateClassAttendance(currentUser.uid, this.props.classID)
                setTimeout(() => {
                    this.updateStudentAttendance(currentUser.uid, this.props.classID);
                }, 1000);

                
            }
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

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
                        <h2 className='classH2'>Attendance Rate: {this.state.attendanceRate}</h2>
                    </div>
                    <div className='col-5'>
                        <button className='logBtn'disabled={!this.state.logging} onClick={this.logAttendance}>Log</button>
                        <input 
                            name="inputCode" 
                            type='text'
                            value={this.state.inputCode}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}

export default StudentClassDisplay;