import React, { Component } from 'react'
import './Modal.css'
import { Input, Button, Card, CardBody, InputNumeric, CardImage, CardTitle, CardText, Col} from 'mdbreact';

import '../../CardLogin/CardLogin.css'


class Modal extends Component{

  constructor(props){
    super(props);
    this.state={
      classCode: '',
      className: '',
      quantity: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderStudentForm = this.renderStudentForm.bind(this);

  };

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    //Some code that will write to database.
  }

  
  
  renderTeacherForm(){
    return(
      <form onSubmit={this.handleSubmit}>
          <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}>LOG IN</p>
          <div className="grey-text">
              <Input
                  name='className' 
                  label="Class Name" 
                  className="black-text"
                  type="text"
                  value={this.state.className}
                  onChange={this.handleChange}
              />
              <Input
                name='quantity'
                className="mb-2 black-text"
                label="Number of Sections"
                type="number"
                min={1}
                max={10}
                value={this.state.quantity}
                onChange={this.handleChange}
              />

          </div>
          <div className="text-center py-4 mt-3">
              <Button color="black" type="submit">Create Class</Button>
          </div>
      </form>
    )
  }

  renderStudentForm(){
    return(
      <form onSubmit={this.handleSubmit}>
          <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}>Input Class Code</p>
          <div className="grey-text">
              <Input
                  name='classCode' 
                  label="class code"
                  type="text"
                  className="black-text"
                  validate error="wrong" 
                  success="right"
                  value={this.state.classCode}
                  onChange={this.handleChange}
              />
          </div>
          <div className="text-center py-4 mt-3">
              <Button color="black" type="submit">Add Class</Button>
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
          <button onClick={this.props.handleClose}> Close </button>
          {this.renderFormType()}
        </section>
      </div>
    );
  }
};

export default Modal;