import React, {Component} from 'react';
import './HomeStudent.css';
import '../HomeTeacher/HomeTeacher.css';
import SideNav from '../elements/SideNav/SideNav';
import StContent from '../elements/StContent/StContent';
import SideNavR from '../elements/SideNavR/SideNavR';


class HomeStudent extends Component {
    state = {
        homeValue: 'student'
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <SideNav/>
                    </div>
                    <div className="col-2">
                        <StContent />
                    </div>
                    <div className="col-3">
                        <SideNavR homeValue='Student'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeStudent;