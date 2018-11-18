import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Input, Button, Card, CardBody} from 'mdbreact';
import InputPage from '../elements/RadioButton'
import '../CardLogin/CardLogin.css'

var firebase = require('firebase')

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert('You have created an account with values' + this.state.email + '' + this.state.password + '' + this.state.firstName + '' + this.state.lastName);
        var success = '';
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(result => {
                console.log(result);
            })
            .catch(function(error) {
                var errorCode=error.code;
                var errorMessage= error.message;

                if (errorCode == 'auth/weak-password'){
                    alert('The password is too weak.');
                    // event.preventDefault();
                }else {
                    alert('ErrorCode: ' + errorCode + '\nErrorMessage: ' + errorMessage);
                    // event.preventDefault();
                }
                
                console.log(error);
            });
        
        
    }

    

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
                <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
                    <Card className="cardlogin">
                        <CardBody >
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}> {/*<img src={mainLogo} alt="loglogo"></img>*/}SIGN UP</p>
                                <div className="grey-text">

                                    <InputPage/>

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
                                        icon='user-circle'
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{paddingTop: '1px'}}>

                                        <Input 
                                            name="lastName" 
                                            label="Last Name" 
                                            icon='user-circle-o' 
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                        />

                                    </div>
                                    
                                        
                                </div>

                                <div className="text-center py-4 mt-3">
                                    <Button color="black" type="submit">SIGN UP</Button>
                                </div>

                            </form>
                        </CardBody>
                    </Card>
                {this.renderRedirect}

                <script src="jquery/jquery.js"></script>
                <script type="text/javascript" src='js/bootstrap.min.js'></script>
                <link rel="stylesheet" href="css/bootstrap.css" />
            
                </div>

        );
    }
}

export default SignUp;