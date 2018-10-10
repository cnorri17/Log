
import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import CardLogin from './Components/CardLogin/CardLogin'
import HomeTeacher from './Components/HomeTeacher/HomeTeacher'

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

const App = () => {
  return(
    <Router>
      <div>
        <NavBar /> 
        {/* <CardLogin /> */}
        <HomeTeacher/>
      </div>
    </Router>
  )

}


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
// ReactDOM.render(element, document.getElementById('root'));
// registerServiceWorker();

export default App;
