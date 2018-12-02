import React, { Component } from 'react';
import { Input, Button, Card, CardBody} from 'mdbreact';
import './CardLogin.css'
import {firebase} from '../../fbConfig.js'

class CardLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    alert('ERROR: Incorrect Password!');
                } else {
                    alert('ERROR: ' + errorCode + '\nErrorMessage: ' + errorMessage);
                }
                console.log(error);
            });
        event.preventDefault();
    }

    render() {
        return (
                <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
                    {/* {this.renderRedirect()} */}
                    <Card className="cardlogin">
                        <CardBody >
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}> {/*<img src={mainLogo} alt="loglogo"></img>*/}LOG IN</p>
                                <div className="grey-text">
                                    <Input
                                        name='email' 
                                        label="Email Address" 
                                        icon="envelope-o" 
                                        group type="email" 
                                        validate error="wrong" 
                                        success="right"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    <Input
                                        name='password' 
                                        label="Password" 
                                        icon="lock" 
                                        group type="password" 
                                        validate
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="grey" type="submit">LOG IN</Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                <script src="jquery/jquery.js"></script>
                <script type="text/javascript" src='js/bootstrap.min.js'></script>
                <link rel="stylesheet" href="css/bootstrap.css" />
                </div>
        );
    }
}

export default CardLogin;