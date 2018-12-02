import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Input, Button, Card, CardBody} from 'mdbreact';
import InputPage from '../elements/RadioButton'
import '../CardLogin/CardLogin.css'
// var firebase = require('firebase/auth');
import {firebase} from '../../fbConfig.js'
import { string } from 'prop-types';

var db = firebase.firestore();

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            accountType: '',
            // redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        // this.handleButton = this.handleButton.bind(this);
        // this.renderRedirect = this.renderRedirect.bind(this);
    }

    // componentDidMount() {
    //     this.setState({ redirect: false})
    // }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleRadio(event){
        this.setState({ accountType: event.target.value })
        alert('You selected' + event.target.value)
    }

    // handleButton(event){
    //     alert('You selected' + this.state.accountType);
    // }

    handleSubmit(event) {
        // alert('You have created an account with values' + this.state.email + '' + this.state.password + '' + this.state.firstName + '' + this.state.lastName);
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(authUser => {
                // console.log(user);
                // alert('Hey you made an account.')
                firebase.firestore().collection("Users").doc(authUser.user.uid)
                    .set({
                        email: this.state.email,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        accountType: this.state.accountType,
                    })
                    .then(result => {
                        console.log(result);
                        alert("You created an account!");
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(function(error) {

                var errorCode=error.code;
                var errorMessage= error.message;

                if (errorCode === 'auth/weak-password'){
                    alert('The password is too weak.');
                } else {
                    alert('ErrorCode: ' + errorCode + '\nErrorMessage: ' + errorMessage);
                }
                
                console.log(error);
            });
        event.preventDefault();

        
    }

    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to='/login' />
    //     }
    // }

    render() {
        // if (this.props.user){
        //     return(<Redirect to='/Home'/>)
        // }
        return (
            <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
                <Card className="cardlogin">
                    <CardBody >
                        
                        <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}> {/*<img src={mainLogo} alt="loglogo"></img>*/}SIGN UP</p>
                        {/* <InputPage/> */}
                        <form onSubmit={this.handleSubmit}>  
                            <div className="grey-text">

                                <Input 
                                    name="email" 
                                    label="Email" 
                                    group type="email" 
                                    icon="envelope-o" 
                                    validate error="wrong" 
                                    success="right" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}
                                />
                                <Input 
                                    name= "password" 
                                    label="Password" 
                                    group type="password" 
                                    icon="lock" 
                                    validate
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <Input 
                                    name="firstName" 
                                    label="First Name" 
                                    type='text'
                                    icon='user-circle'
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                />
                                <div style={{paddingTop: '0.5px'}}>
                                    <Input 
                                        name="lastName" 
                                        label="Last Name" 
                                        type='text'
                                        icon='user-circle-o' 
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <input name="selection" type="radio" value="teacher" onClick={this.handleRadio} paddingRight="1px"/>
                                    <h5>Teacher</h5>
                                    <input name="selection" type="radio" value="student" onClick={this.handleRadio} paddingLeft="1px"/>
                                    <h5>Student</h5>
                                </div>
                            </div>
                            <div className="text-center py-4 mt-3">
                                <Button color="black" type="submit">SIGN UP</Button>
                                {/* <Button color="black" onClick={this.handleButton}>Show Account Type</Button> */}
                            </div>
                        </form>
                    </CardBody>
                </Card>
            {/* {this.renderRedirect()} */}
                <script src="jquery/jquery.js"></script>
                <script type="text/javascript" src='js/bootstrap.min.js'></script>
                <link rel="stylesheet" href="css/bootstrap.css" />
            </div>
        );
    }
}

export default SignUp;