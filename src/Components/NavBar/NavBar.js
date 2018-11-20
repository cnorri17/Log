import React, { Component} from 'react';
import {Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import mainLogo from '../loglogo.png';
import './NavBar.css';
import {Link, Redirect} from 'react-router-dom';

// var firebase = require('firebase');
import {firebase} from '../../fbConfig'

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            show: false,
        };
    this.onClick = this.onClick.bind(this);
    this.signOut = this.signOut.bind(this);
    }

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    signOut(){
        firebase.auth().signOut();
        <Redirect to='/login'/>
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
                <div>
                    <Navbar color="yellow darken-2" dark expand="md" scrolling>
                        {/* <NavbarBrand> */}
                            <Link to={{ pathname: `/`}}>
                                <strong><img src={mainLogo} alt="loglogo"></img></strong>
                            </Link>
                        {/* </NavbarBrand> */}
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav left>
                                <NavItem>
                                    {/* <Dropdown> 
                                        <DropdownToggle nav caret>Others</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#">Class List</DropdownItem>
                                            <DropdownItem href="#">Statistics</DropdownItem>
                                            <DropdownItem href="#">Discussion</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>*/}
                                </NavItem>
                            </NavbarNav>
                            
                            <NavbarNav right>
                                {this.props.user !== null ?
                                    
                                    <NavItem>
                                        <Modal show={this.state.show} handleClose={this.hideModal}>
                                            <p>Modal</p>
                                            <p>Data</p>
                                        </Modal>
                                        <Button color="black" onClick={this.showModal} >Create New Class</Button>
                                        <Button color="black" onClick={this.signOut}>Log Out</Button>
                                    </NavItem>
                                    :
                                    <NavItem>
                                        <Link to = "/signUp"><Button color="black">Sign Up</Button></Link>
                                        <Link to = "/login"><Button color="black">Login</Button></Link>
                                    </NavItem>
                                }
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                </div>  
        );
    }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default NavBar;