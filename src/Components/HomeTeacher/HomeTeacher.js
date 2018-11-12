import React, { Component } from 'react';
// import {  } from 'mdbreact';
import './HomeTeacher.css';
import SideNav from '../elements/SideNav/SideNav';
import HtContent from '../elements/HtContent/HtContent';
import SideNavR from '../elements/SideNavR/SideNavR';


class HomeTeacher extends Component {
    state = {
        homeValue: 'Teacher'
    }
    render(){
        return(

            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <SideNav/>
                    </div>
                    <div className="col-2">
                        <HtContent/>
                    </div>
                    <div className="col-3">
                        <SideNavR homeValue={this.state.homeValue}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default HomeTeacher; 