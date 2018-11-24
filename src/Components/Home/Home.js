import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
// import {  } from 'mdbreact';
import './Home.css';
import SideNav from '../elements/SideNav/SideNav';
import HtContent from '../elements/HtContent/HtContent';
import StContent from '../elements/StContent/StContent';
import SideNavR from '../elements/SideNavR/SideNavR';
import {firebase} from '../../fbConfig'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount () {
        this.setState({ user: this.props.user });
        
    }

    RenderHome(){
        const homeType = this.props.accountType;
        if (homeType === 'teacher'){
            return <HtContent firstName={this.props.firstName} lastName={this.props.lastName}/>
        } else{
            return <StContent firstName={this.props.firstName} lastName={this.props.lastName}/>
        }
    }

    render(){
        if (this.props.user === null) {
            return (<Redirect to='/login' />)
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        {/* <SideNav/> */}
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

export default Home; 