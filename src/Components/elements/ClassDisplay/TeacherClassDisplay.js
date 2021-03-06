import React, {Component} from 'react';
import './ClassDisplay.css';
import {firebase} from '../../../fbConfig';

class TeacherClassDisplay extends Component {
    constructor(props) {
        super(props);
        this.state={
            logging: false,
            didMount: false,
            attendanceCode: '',
            attendanceCounter: 0,
            attendanceRate: 0,
            studentList: [],
            showStudentList: false,
        }
        this.takeAttendance = this.takeAttendance.bind(this);
        this.logListener = this.logListener.bind(this);
        this.generateCode = this.generateCode.bind(this);
        this.calculateAttendance = this.calculateAttendance.bind(this);
        this.fetchStudents = this.fetchStudents.bind(this);
        this.handleStudentList = this.handleStudentList.bind(this);
    }

    componentDidMount() {
        this.setState({ didMount: true })
        this.logListener(true);
    }

    componentWillUnmount() {
        this.setState({ didMount: false})
        this.logListener(false);
    }

    logListener =(didMount)=> {
        if(didMount){
            // console.log("ClassID: " + this.props.classID)
            const currentUser = firebase.auth().currentUser;
            if (currentUser){
                const classRef = firebase.firestore().collection("Classes").doc(this.props.classID);
                classRef.onSnapshot(doc => {
                    const data = doc.data();
                    this.setState({logging: data.logging})
                    if(this.state.logging){
                        setTimeout(() => {
                            this.setState({attendanceCode: data.attendanceCode})
                        }, 1000);
                    } else{
                        setTimeout(() => {
                            this.setState({attendanceCode: data.attendanceCode})
                        }, 1000);
                    }
                })
                // console.log("outside listen new log" + this.state.logging);
                const userRef = firebase.firestore().collection("Users").doc(currentUser.uid).collection("UserClasses").where("classID", "==",this.props.classID);
                userRef.onSnapshot(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        const data = doc.data();
                        var rounded = Number(data.attendanceRate.toFixed(4));
                        this.setState({attendanceRate: rounded})
                    })
                })

            }
        }
    }

    generateCode() {
        let code = Math.random().toString(36).substr(2,5);
        this.setState({attendanceCode: code})
        return code;
    }

    calculateAttendance = (userID, classID) => {
        const classRef = firebase.firestore().collection('Classes').doc(classID);
        classRef.get()
            .then(result => {
                var numOfStudents = result.data().numOfStudents;
                var totalDays = result.data().totalDays;
                var avgAttendance = 0;
                console.log("numOfStudents before calc: " + numOfStudents);
                console.log("totalDays before calc: " + totalDays);
                result.ref.collection('Students').get()
                    .then(student => {
                        console.log('The reference is working');
                        student.forEach(doc => {
                            console.log("doc.data().totalAttendance: " + doc.data().totalAttendance)
                            this.setState({ attendanceCounter: this.state.attendanceCounter + doc.data().attendanceRate})
                        })
                        console.log("attendanceCounter scanned from every student: " + this.state.attendanceCounter)
                        avgAttendance = (this.state.attendanceCounter)/numOfStudents;
                        console.log("avgAttendance calculated after scanning students: " + avgAttendance)
                    })
                
                setTimeout(() => {
                    console.log("avgAttendance inside this setTimeout function: " + avgAttendance)
                    result.ref.set({
                        totalAttendance: avgAttendance,
                    }, {merge: true})

                    const userRef = firebase.firestore().collection("Users").doc(userID).collection("UserClasses").where("classID", "==",classID);
                    userRef.get()
                        .then(result => {
                            result.forEach(doc => {
                                doc.ref.set({
                                    attendanceRate: avgAttendance,
                                }, {merge: true})
                            })
                        })
                }, 1000);
            })
    }

    takeAttendance(event) {
        const currentUser = firebase.auth().currentUser;
        const classRef = firebase.firestore().collection('Classes').doc(this.props.classID);
        if (currentUser) {
            if(!this.state.logging) {//logging = false, meaning not taking attendance
                const newCode = this.generateCode();
                classRef.get()
                    .then(doc => {
                        const newTotalDays = doc.data().totalDays + 1;
                        doc.ref.set({
                            logging: true,
                            attendanceCode: newCode,
                            totalDays: newTotalDays,
                        }, {merge: true})
                        .then(() => {
                            alert("You Are Now Logging Attendance!");
                        })
                    })
            } else {
                classRef.set({
                    logging: false,
                    attendanceCode: '',
                }, {merge: true})
                this.calculateAttendance(currentUser.uid, this.props.classID);
                alert("Attendance Calculated!");
            }
        }
    }

    fetchStudents() {
        const currentUser = firebase.auth().currentUser;
        const classRef = firebase.firestore().collection('Classes').doc(this.props.classID);
        if(currentUser) {
            classRef.collection('Students').get()
                .then(students => {
                    var items = [];
                    students.forEach(doc => {
                        const data = doc.data();
                        let newName = data.firstName + data.lastName;
                        items.push({
                            studentName: newName,
                            attendanceRate: data.attendanceRate,
                        })
                    })
                    this.setState({ studentList: items })
                })
            this.timeout = setTimeout(() => {
                this.setState({showStudentList: true})
            }, 1000);
        }
    }
    handleStudentList(event) {
        this.setState({ showStudentList: false })
    }

    render() {
        return(
            <div className="classContainer">
                <div className="row-1">
                    <div className='col-4'>
                        <h3 className='classH1'>{this.props.name}</h3>
                        <h4 className='classH2'>Section: {this.props.section}</h4>
                        <h4 className='classH2'>ClassID: {this.props.classID}</h4>
                        <button className='showBtn' onClick={this.fetchStudents}>Show Students</button>
                    </div>
                    <div className='col-5'>
                        <h3 className='classH2'>Attendance Rate: {this.state.attendanceRate} %</h3>
                    </div>
                    <div className='col-5'>
                        <button onClick={this.takeAttendance}>{this.state.logging ? "Stop Logging" : "Log"}</button>
                        {/* {this.state.logging ? <p>{this.state.attendanceCode}</p> : null} */}
                        <label for="button">Logging Code:</label>
                        <p>{this.state.attendanceCode}</p>
                    </div>
                </div>
                <div className="row-1">
                    <div className='col-6'>
                    
                        <div className={this.state.showStudentList ? 'sList display-block' : 'sList display-none'}>
                            <h2>Student List</h2>
                            {this.state.studentList.map( (element, key) => {
                                return(
                                    <div className="studentList" key={key}>
                                        <p>{element.studentName} : {element.attendanceRate}</p>
                                    </div>
                                )
                            })}

                            <button 
                            className={this.state.showStudentList ? 'closeBtn display-block': 'closeBtn display-none'}
                            onClick={this.handleStudentList}>
                                Close
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherClassDisplay;