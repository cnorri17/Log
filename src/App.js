
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import LoginPage from './Components/LoginPage/LoginPage'
import Home from './Components/Home/Home'
import SignUp from './Components/SignUpPage/SignUp'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">John isn't allowed to touch this page anymore...</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
var firebase = require('firebase')

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: false
    }
    
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({isLoggedin: true})
      } else{
        this.setState({isLoggedin: false})
      }
    })
  }

  renderRedirect(){
    if(this.state.isLoggedin){
      return 
    }
  }

  render() {
    return(
      <Router>
        <React.Fragment>
          <NavBar /> 
          <Switch>
              <Route path="/loggin" component={LoginPage} exact />
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
