import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import SideNav from '../elements/SideNav/SideNav';
import HtContent from '../elements/HtContent/HtContent';
import StContent from '../elements/StContent/StContent';
import SideNavR from '../elements/SideNavR/SideNavR';
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
        // this.setState({ user: this.props.user });
        this.listener = firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({ user })
                this.fetchClasses();
            } else {
                this.setState({ user: null })
            }
        })
    }

    componentWillUnmount () {
        this.listener();
    }

    fetchClasses() {
        const currentUser = firebase.auth().currentUser;
        if (currentUser){
            const firestore = firebase.firestore().collection('Users').doc(currentUser.uid);
            firestore.collection('UserClasses')
            .orderBy('className')
            .orderBy('section', 'asc')
            .get()
                .then(snapshot => {
                    var items = [];
                    snapshot.forEach(doc => {
                        
                        // console.log(doc.data());

                        items.push({
                            className: doc.data().className,
                            section: doc.data().section,
                            classID: doc.data().classID,
                            attendanceRate: doc.data().attendanceRate
                        })

                        // data = JSON.stringify(data);
                        // items.push(doc.data())
                        // console.log(this.state.classList);
                    })
                    this.setState({classList: items})
                })

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
                        {
                            this.props.accountType === 'teacher' ?

                                <HtContent firstName={this.props.firstName} lastName={this.props.lastName}>
                                    {this.state.classList}
                                </HtContent>
                                    
                            :
                                <StContent firstName={this.props.firstName} lastName={this.props.lastName}>
                                    {this.state.classList}
                                </StContent>
                        }
                        {/* {this.state.classList.map( (element, key) => {
                            doc = JSON.stringify(doc);
                            console.log(doc);
                            return (
                                <ClassDisplay 
                                name={doc.className}
                                section={doc.section}
                                classID={doc.classID}
                                rate={doc.attendanceRate}
                                />
                            );
                            
                            return(
                                <div key={key}>
                                    <h1>{element.section}</h1>
                                </div>
                            );

                        })
                        } */}
                        
                    </div>
                    <div className="col-3">
                        <SideNavR homeValue={this.props.accountType}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home; 