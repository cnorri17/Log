import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component{

  constructor(props){
    super(props);
    this.state={
      
    }
  };
  
  render(){
    return (
      <div className={this.props.show ? 'modal display-block':'modal display-none'}>
        <section className='modal-main'>
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