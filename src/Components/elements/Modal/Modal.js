import React, { Component } from 'react'
import './Modal.css'
import { Input, Button, Card, CardBody} from 'mdbreact';
import '../../CardLogin/CardLogin.css'
import {firebase} from '../../../fbConfig'


class Modal extends Component{

  constructor(props){
    super(props);
    this.state={
      classCode: '',
      className: '',
      quantity: 1,
      numOfStudents: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.renderStudentForm = this.renderStudentForm.bind(this);
    this.handleTeacherSubmit = this.handleTeacherSubmit.bind(this);
    this.handleStudentSubmit = this.handleStudentSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleTeacherSubmit(event) {
    event.preventDefault();
    const currentUser = firebase.auth().currentUser;
    var batch = firebase.firestore().batch();
    var userRef = firebase.firestore().collection('Users').doc(currentUser.uid);
    for (var i = 0; i < this.state.quantity; i++){
      const firestore = firebase.firestore().collection('Classes').doc();
      const docID = firestore.id;
      batch.set(firestore, {
        attendanceCode: '',
        className: this.state.className,
        logging: false,
        numOfStudents: 0,
        section: i+1,
        teacherFirst: this.props.firstName,
        teacherLast: this.props.lastName,
        teacherID: currentUser.uid,
        totalAttendance: 0,
        totalDays: 0,
      })
        userRef.collection('UserClasses').doc().set({
          className: this.state.className,
          section: (i+1),
          classID: docID,
          attendanceRate: 0,
      }, { merge: true })
    }
    batch.commit()
    .then(() => {
      alert('Class(s) Successfully Created!')
    })
    .catch(error => {
      console.log('batch error: ' + error);
    })
  }

  handleStudentSubmit(event) {
    event.preventDefault();
    const currentUser = firebase.auth().currentUser;
    const userID = currentUser.uid;
    var userRef = firebase.firestore().collection('Users').doc(currentUser.uid);
    var classRef = firebase.firestore().collection('Classes').doc(this.state.classCode);
    var firstName = this.props.firstName;
    var lastName = this.props.lastName;
    var name = firstName + ' ' + lastName;
    classRef.get()
      .then(doc => {
        if(doc.exists) {
          const docID = doc.id;
          const data = doc.data();

          classRef.get()
            .then(doc => {
              var num = doc.data().numOfStudents + 1;
              doc.ref.set({
                numOfStudents: num,
              }, {merge: true})
            })
          userRef.collection("UserClasses").doc().set({
              className: data.className,
              section: data.section,
              classID: docID,
              attendanceRate: 0,
          }, {merge: true})
            .catch(error => {
              console.log("Error at handleStudentSubmit - adding class to student-user doc: " + error);
            });
          classRef.set({
            studentList: [
              {[userID]: name}
            ]
          }, { merge: true})
            .catch(error => {
              console.log("Error at handleStudentSubmit - adding student to studentList in class doc: " + error);
            });
          classRef.collection('Students').doc(userID).set({
            firstName: firstName,
            lastName: lastName,
            totalAttendance: 0,
            attendanceRate: 0,
          })
            .catch(error => {
              console.log("Error in handleStudentSubmit - creating the student subcollection for class: \n" + error)
            });
            // }
          alert("Successfully Joined Class!");
        } else {
          alert("This Class Does Not Exist!");
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  renderTeacherForm(){
    return(
      <form onSubmit={this.handleTeacherSubmit}>
          <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}>LOG IN</p>
          <div className="black-text">
              <Input
                  name='className' 
                  label="Enter Class Name" 
                  className="black-text"
                  type="text"
                  value={this.state.className}
                  onChange={this.handleChange}
              />
              <h6 className="black-text2">Number of Sections</h6>
              <input
                name='quantity'
                className="black-text2"
                label="Number of Sections"
                type="number"
                min={1}
                max={10}
                value={this.state.quantity}
                onChange={this.handleChange}
              />
          </div>
          <div className="text-center py-4 mt-3">
              <Button color="grey" type="submit">Create Class</Button>
          </div>
      </form>
    )
  }

  renderStudentForm(){
    return(
      <form onSubmit={this.handleStudentSubmit}>
          <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}>Input Class Code</p>
          <div className="black-text">
              <Input
                  name='classCode' 
                  label="Class Code:"
                  type="text"
                  className="black-text"
                  validate error="wrong" 
                  success="right"
                  value={this.state.classCode}
                  onChange={this.handleChange}
              />
          </div>
          <div className="text-center py-4 mt-3">
              <Button color="grey" type="submit">Add Class</Button>
          </div>
      </form>
    )
  }

  renderFormType() {
    return(
      <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
          <Card className="cardlogin">
              <CardBody >
                {this.props.accountType === 'student' ?
                  (this.renderStudentForm())
                  :
                  (this.renderTeacherForm())
                }
              </CardBody>
          </Card>
      <script src="jquery/jquery.js"></script>
      <script type="text/javascript" src='js/bootstrap.min.js'></script>
      <link rel="stylesheet" href="css/bootstrap.css" />
      </div>
    )
  }
  
  render(){
    return (
      <div className={this.props.show ? 'modal display-block':'modal display-none'}>
        <section className='modal-main'>
          <button className='closeBtn' onClick={this.props.handleClose}> Close </button>
          {this.renderFormType()}
        </section>
      </div>
    );
  }
};

export default Modal;