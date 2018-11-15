import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBQxXPaPCbqcgr00Sc4RCbMEMtgN0mwJUY",
    authDomain: "log-project-77c08.firebaseapp.com",
    databaseURL: "https://log-project-77c08.firebaseio.com",
    projectId: "log-project-77c08",
    storageBucket: "log-project-77c08.appspot.com",
    messagingSenderId: "80686280384"
  };
  
  firebase.initializeApp(config);






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
