import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import SideNav from '../elements/SideNav/SideNav';
import HtContent from '../elements/HtContent/HtContent';
import StContent from '../elements/StContent/StContent';
import SideNavR from '../elements/SideNavR/SideNavR';
import CLassList from '../elements/ClassList/ClassList';
import {firebase} from '../../fbConfig'
import ClassList from '../elements/ClassList/ClassList';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            classList: [],
        }
        // this.fetchClasses = this.fetchClasses.bind(this);
    }

    componentDidMount () {
        this.setState({ user: this.props.user });
        // this.fetchClasses();
    }

    // RenderHome(){
    //     const homeType = this.props.accountType;
    //     if (homeType === 'teacher'){
    //         return <HtContent firstName={this.props.firstName} lastName={this.props.lastName}/>
    //     } else{
    //         return <StContent firstName={this.props.firstName} lastName={this.props.lastName} classList={this.state.classList}/>
    //     }
    // }

    fetchClasses() {
        const currentUser = firebase.auth().currentUser;
        if (currentUser){
            const firestore = firebase.firestore().collection('Users').doc(currentUser.uid);
            // firestore.onSnapshot(doc => {
            //     const data = doc.data();
            //     console.log(data.classList);
            //     // data.classList.forEach(function(value, key) {
            //     //     console.log(key + ' = ' + value);
            //     // })
            //     const classes = [];
            //     data.classList.map( (element, key) => {
            //         classes.push(
            //             [element.className,element.attendanceRate]
            //         );
            //     })
            //     console.log("Pushing classes to list" + classes);
            //     this.setState({classList: classes})

            // })
            if(firestore.collection('UserClasses').exists){
                firestore.collection('UserClasses').get()
                    .then(function(querySnapshot) {
                            querySnapshot.forEach(function(doc) {
                                var data = doc.data();
                                return(
                                    <div>
                                        <h1>{data.className}</h1>
                                        <h1>{data.classID}</h1>
                                        <h1>{data.section}</h1>
                                        <h1>{data.attendanceRate}</h1>
                                    </div>
                                )
                            })
                    })
            }
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
                        {/* {this.RenderHome()} */}
                        {/* {this.fetchClasses()} */}
                        {/* <ClassList list={this.state.classList} /> */}
                        {/* {this.displayClasses()} */}
                        {/* {this.state.classList} */}
                        {
                            this.props.accountType === 'teacher' ?
                                <HtContent firstName={this.props.firstName} lastName={this.props.lastName}>
                                    {this.fetchClasses()}
                                </HtContent>
                            :
                                <StContent firstName={this.props.firstName} lastName={this.props.lastName}/>
                        }
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