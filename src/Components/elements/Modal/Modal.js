import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component{

  constructor(props){
    super(props);
    this.state={
      
    }
  };
// const Modal = ({ handleClose, show, children }) => {
//  const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

  showHideClassName() {
    this.props.show ? 'modal display-block' : 'modal display-none';
  }
  render(){
    return (
      <div className={this.showHideClassName}>
        <section className='modal-main'>
          {/* {children} */}
          <p>
            butt 
          </p>
          {/* <button onSubmit={}>Submit</button> */}
          <button onClick={this.props.handleClose}> Close </button>
        </section>
      </div>
    );
  }
};

export default Modal;