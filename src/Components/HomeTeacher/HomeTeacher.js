import React, { Component } from 'react';
import {  } from 'mdbreact';
import './HomeTeacher.css';
import SideNav from '../SideNav/SideNav';
import HtContent from '../HtContent/HtContent';


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
                    <div className="col-3">
                        <HtContent />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default HomeTeacher; 