
import React, { Component } from 'react';

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
// import LoginPage from './Components/LoginPage/LoginPage'
import CardLogin from './Components/CardLogin/CardLogin'
import Home from './Components/Home/Home'
import SignUp from './Components/SignUpPage/SignUp'
import {firebase} from './fbConfig'

// var firebase = require('firebase')

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      accountType: '',
      firstName: '',
      lastName: '',
      uid: '',
    }
    this.MySignUpPage = this.MySignUpPage.bind(this);
    this.MyLoginPage = this.MyLoginPage.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount() {
    this.listener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        this.fetchUserInfo();
      } else {
        this.setState({ 
          user: null,
          accountType: '',
          firstName: '',
          lastName: ''
        });
        // alert('user logged out');
      }
    });
  }

  componentWillUnmount() {
    this.listener();
  }



  fetchUserInfo() {
    var currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const firestore = firebase.firestore().collection("Users").doc(currentUser.uid);

      firestore.get()
      .then(doc => {
        const data = doc.data();
        this.setState({
          accountType: data.accountType,
          firstName: data.firstName,
          lastName: data.lastName
        });
        // alert("Congrats, you also retrieved user's information!")
      });
    }

  }

  showUserUID() {
    const currentUser = this.state.user.uid;
    return currentUser;
  }
  renderRedirect(){
    if(this.state.user){
      return <Redirect to='/Home'/>
    }
  }
  // //Revisit this code, we might want to do it this way and pass down the user state using the observer
  MySignUpPage = (props) => {
    return (
      <SignUp user={this.state.user} />
    )
  }

  MyLoginPage = (props) => {
    return (
      <CardLogin user={this.state.user} />
    )
  }

  MyHomePage = (props) => {
    return (
      <Home user={this.state.user} accountType={this.state.accountType} firstName={this.state.firstName} lastName={this.state.lastName} />
    )
  }

  render() {
    return(
      <Router>
        <React.Fragment>
          {/* {console.log(this.state.user)} */}
          <NavBar user={this.state.user}/>
          {/* {this.showUserUID()} */}
          {this.renderRedirect()}
          <Switch>
              <Route path="/login" render={this.MyLoginPage} exact />
              {/* <Route path="/Student" component={HomeStudent} exact />
              <Route path="/Teacher" component={HomeTeacher} exact /> */}
              {/* <Route path="/Home" component={Home} exact/> */}
              <Route path="/Home" render={this.MyHomePage} exact/>
              <Route path="/SignUp" render={this.MySignUpPage} exact />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;