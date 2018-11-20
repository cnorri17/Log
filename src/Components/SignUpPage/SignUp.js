import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Input, Button, Card, CardBody} from 'mdbreact';
import InputPage from '../elements/RadioButton'
import '../CardLogin/CardLogin.css'
// var firebase = require('firebase/auth');
import {auth} from '../../fbConfig.js'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            // redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderRedirect = this.renderRedirect.bind(this);
    }

    // componentDidMount() {
    //     this.setState({ redirect: false})
    // }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        // alert('You have created an account with values' + this.state.email + '' + this.state.password + '' + this.state.firstName + '' + this.state.lastName);
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(user => {
                // console.log(user);
                alert('Hey you made an account.')
                // firebase.auth().signOut();
                // this.render(<Redirect to='/Home'/>);
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
        if (this.props.user){
            return(<Redirect to='/Home'/>)
        }
        return (
            <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
                <Card className="cardlogin">
                    <CardBody >
                        <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}> {/*<img src={mainLogo} alt="loglogo"></img>*/}SIGN UP</p>
                        <InputPage/>
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
                                <div style={{paddingTop: '1px'}}>
                                    <Input 
                                        name="lastName" 
                                        label="Last Name" 
                                        type='text'
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
            {/* {this.renderRedirect()} */}
                <script src="jquery/jquery.js"></script>
                <script type="text/javascript" src='js/bootstrap.min.js'></script>
                <link rel="stylesheet" href="css/bootstrap.css" />
            </div>
        );
    }
}

export default SignUp;