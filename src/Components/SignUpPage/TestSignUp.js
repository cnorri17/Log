import React, { Component } from 'react';

var firebase = require('firebase');
var firebaseui = require('firebaseui');

class TestSignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* {firebaseui.start('#firebaseui-auth-container', {
                    signInOptions: [
                        firebase.auth.EmailAuthProvider.PROVIDER_ID
                    ]
                    // Other config options...
                })}; */}
            </div>
        )
    }
}

export default TestSignUp;