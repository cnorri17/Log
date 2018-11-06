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

                                    <div>
                                                <select className="browser-default custom-select">
                                                <option>Choose your option</option>
                                                <option value="1">KSU</option>
                                                <option value="2">Option 2</option>
                                                <option value="3">Option 3</option>
                                                </select>
                                    </div>

                                    <Input label="Email" icon="envelope-o" group type="email" validate error="wrong" success="right"/>
                                    <Input label="Password" icon="lock" group type="password" validate/>
                                    <Input label="First Name" icon="bug" id="inputLGEx"/>
                                    <Input label="Last Name" icon="bug" id="inputLGEx"/>

                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="yellow darken-2" type="submit">Done! (clapping intensifies) </Button>
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