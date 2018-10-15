import React, { Component } from 'react';
import {  } from 'mdbreact';
import './HomeTeacher.css';
import SideNav from '../SideNav/SideNav';
import HtContent from '../HtContent/HtContent';
import SideNavR from '../SideNavR/SideNavR';


class HomeTeacher extends Component {
    state = {

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
                        <SideNavR/>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default HomeTeacher; 