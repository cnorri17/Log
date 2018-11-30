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
import { string } from 'prop-types';


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
        this.fetchClasses();
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
                firestore.collection('UserClasses').get()
                    .then(function(querySnapshot) {
                        var classData = [];
                        if(querySnapshot.empty !== true){
                            querySnapshot.forEach(function(doc) {
                                // classData.push({
                                //     className: doc.data().className,
                                //     classID: doc.data().classID,
                                //     section: doc.data().section,
                                //     attendanceRate: doc.data().attendanceRate,
                                // })

                                // this.setState({
                                //     classList: classData
                                // })
                                let items = doc.data();
                                items = JSON.stringify(items);

                                classData.push({
                                    className: items.className,
                                    classID: items.classID,
                                    section: items.section,
                                    attendanceRate: items.attendanceRate,
                                });
                                this.setState({classList: classData})
                            
                                // console.log(data.className);
                                // console.log(data.classID);
                                // console.log(data.section);
                                // console.log(data.attendanceRate);
                                console.log(doc.data());
                            })
                        }
                    })
            
        }
    }


    render(){
        var {classList} = this.state;
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
                                // <HtContent firstName={this.props.firstName} lastName={this.props.lastName}>
                                //     {/* {classList.map(item => (
                                //         <div key={item.classID}>
                                //             <h1>Class Name: {item.className} Section: {item.section}</h1>
                                //             <h2>Class ID: {item.classID}</h2>
                                //             <h2>Attendance Rate: {item.attendanceRate}</h2>
                                //         </div>
                                //     ))} */}
                                //     {/* {this.state.classList.map(result => {
                                //         return (
                                //             <p>
                                //                 Class Name: {result.className},
                                //                 Section: {result.section},
                                //                 Class ID: {result.classID},
                                //                 Attendance Rate: {result.attendanceRate}
                                                
                                //             </p>
                                //         )
                                //     })} */}

                                // </HtContent>
                                <HtContent firstName={this.props.firstName} lastName={this.props.lastName}/>
                            :
                                <StContent firstName={this.props.firstName} lastName={this.props.lastName}/>
                        }
                            {this.state.classList.map(result => {
                                return (
                                    <p>
                                        Class Name: {result.className},
                                        Section: {result.section},
                                        Class ID: {result.classID},
                                        Attendance Rate: {result.attendanceRate}
                                        
                                    </p>
                                )
                            })}
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