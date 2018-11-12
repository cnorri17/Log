import React, { Component } from 'react';
import { Input, Button, Card, CardBody} from 'mdbreact';
import mainLogo from '../loglogo.png';
import InputPage from '../elements/RadioButton'
import '../CardLogin/CardLogin.css'


class SignUp extends Component {
    render() {
        return (
                <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
                    <Card className="cardlogin">
                        <CardBody >
                            <form>
                                <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}> {/*<img src={mainLogo} alt="loglogo"></img>*/}Sign Up</p>
                                <div className="grey-text">

                                    <InputPage/>

                                    <Input label="Email" group type="email" icon="envelope-o" validate error="wrong" success="right"/>
                                    <Input label="Password" group type="password" icon="lock" validate/>
                                    <Input label="First Name" icon='user-circle' />
                                    <div style={{paddingTop: '1px'}}>

                                        <Input label="Last Name" icon='user-circle-o' />

                                    </div>
                                    
                                        
                                </div>

                                <div className="text-center py-4 mt-3">
                                    <Button color="blue" type="submit">Done!</Button>
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

export default SignUp;