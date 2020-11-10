import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth } from '../../AuthProvider/AuthProvider';
import { actionTypes } from '../../AuthProvider/reducer';
import { auth, provider } from '../../firebase';
import './Login.elements.css';

const Login = () => {
    const [error, setError] = useState("");
    const [state, dispatch] = useAuth();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch(error => {
                setError(error.message);
            });
    };
    
    return (
        <div className="login">
            <div className="login__container">

                {error && <div className="alert danger">{error}</div>}

                <div className="login__logo">
                    <img src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg" alt="Slack"/>
                </div>
                
                <div className="login__content">
                    <h1>Sign in to Slack</h1>
                    <p>Continue with the Google account or email address you use to sign in.</p>
                </div>

                <div className="login__form">
                    <input type="text" placeholder="name@work-email.com" />
                    <Button onClick={signIn}>Sign In with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
