import React, { Component } from 'react';
import { Input, Button, Card, CardBody} from 'mdbreact';
import mainLogo from '../loglogo.png';
import './CardLogin.css'

class CardLogin extends Component {
    render() {
        return (
                <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
                    <Card className="cardlogin">
                        <CardBody >
                            <form>
                                <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'11%'}}> <img src={mainLogo} alt="loglogo"></img>Log In</p>
                                <div className="grey-text">
                                    <Input label="Your email" icon="envelope-o" group type="email" validate error="wrong" success="right"/>
                                    <Input label="Your password" icon="lock" group type="password" validate/>
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="yellow darken-2" type="submit">Sign In</Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </div>

        );
    }
}

export default CardLogin;