import React from 'react'
import "./Auth.css";
import Login from './Login';
import Register from './Register';

const Auth = () => {
  return (
    <section className="account-page">
        <div className="container">
            <div className="account-wrapper">
                <div className="account-column">
                    <h2>Login</h2>
                    <Login />
                </div>
                <div className="account-column">
                    <h2>Register</h2>
                    <Register />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auth