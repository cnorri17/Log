
import React, { Component } from 'react';

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
// import LoginPage from './Components/LoginPage/LoginPage'
import CardLogin from './Components/CardLogin/CardLogin'
import Home from './Components/Home/Home'
import SignUp from './Components/SignUpPage/SignUp'

var firebase = require('firebase')

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
    
  }

  // componentDidMount() {
  //   this.authListener();
  // }

  // // componentDidUpdate() {
  // //   this.authListener();
  // // }

  // authListener(){
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       this.setState({user})
  //     } else{
  //       this.setState({ user: null})
  //     }
  //   })
  // }

  // renderRedirect(){
  //   if(this.state.user){
  //     return <Redirect to='/Home'/>
  //   }

  // }

  render() {
    return(
      <Router>
        <React.Fragment>
          {console.log(firebase.auth().currentUser)}
          <NavBar user={this.state.user}/>
          {/* {this.renderRedirect()} */}
          <Switch>
              <Route path="/login" component={CardLogin} exact />
              {/* <Route path="/Student" component={HomeStudent} exact />
              <Route path="/Teacher" component={HomeTeacher} exact /> */}
              <Route path="/Home" component={Home} exact/>
              <Route path="/SignUp" component={SignUp} exact />
          </Switch>
          {/* <CardLogin /> */}
          {/* <HomeTeacher/> */}
          {/* <HomeStudent /> */}
        </React.Fragment>
      </Router>
    )
  }

}


export default App;
