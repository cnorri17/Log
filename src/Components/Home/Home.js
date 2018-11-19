import React, { Component } from 'react';
// import {  } from 'mdbreact';
import './Home.css';
import SideNav from '../elements/SideNav/SideNav';
import HtContent from '../elements/HtContent/HtContent';
import StContent from '../elements/StContent/StContent';
import SideNavR from '../elements/SideNavR/SideNavR';
import {firebase} from '../../fbConfig'


class HomeTeacher extends Component {
    state = {
        userType: 'student'
    }

    componentDidMount () {
        if (firebase.auth().currentUser === null) {
            
        }
    }

    RenderHome(){
        const homeType = this.state.userType
        if (homeType == 'teacher'){
            return <HtContent/>
        } else{
            return <StContent/>
        }
    }

    render(){
        return(

            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <SideNav/>
                    </div>
                    <div className="col-2">
                        {this.RenderHome()}
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