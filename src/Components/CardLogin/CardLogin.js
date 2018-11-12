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
                                <p className="h4 yellow darken-2 white-text text-center py-4" style={{paddingRight:'0%'}}> {/*<img src={mainLogo} alt="loglogo"></img>*/}LOG IN</p>
                                <div className="grey-text">
                                    <Input label="email" icon="envelope-o" group type="email" validate error="wrong" success="right"/>
                                    <Input label="password" icon="lock" group type="password" validate/>
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="black" type="submit">LOG IN</Button>
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