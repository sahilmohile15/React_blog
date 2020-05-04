import React, {Component, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import "./auth.css";
import firebase from 'firebase';
import {compose} from 'recompose';
import {withFirebase} from 'react-redux-firebase';

const SignInPage = () => (
    <div>
      <h1>SignIn</h1>
      <LoginForm />
    </div>
  );

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class Login extends Component {
    constructor (props){
        super(props);

        this.state = { ...INITIAL_STATE };


    }

    onSubmit = event => {
        const { email, password } = this.state;
     
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push("/home");
          })
          .catch(error => {
            this.setState({ error });
          });
     
        event.preventDefault();
      };


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() { 
        const { email, password, error } = this.state;
 
        const isInvalid = password === '' || email === '';
        return ( 
            <div>
            <form action="login.jsx" onSubmit={this.onSubmit} className = "form">
                <div className = "form-group row">
                    <label htmlFor="password" className= "col-sm-2 col-form-label-bg">Email:</label>
                    <input type="email" id = "email" name = "email" value= {email} onChange ={this.onChange}/>
                    <br/>
                </div>
                <div className = "form-group row">
                    <label htmlFor="password" className= "col-sm-2 col-form-label-bg">password</label>
                    <input type="password" id = "password" name = "password" value= {password} onChange ={this.onChange}/>
                    <br/>
                </div>
                <button type="submit" className="btn btn-login btn-primary">Login</button>
                <NavLink to ="/signup" className= "btn sign-btn btn-primary">Sign Up</NavLink>
                
            </form>
        </div>
         );
    }
}
 

const LoginForm = compose(
    withRouter,
    withFirebase,
  )(Login);


export default Login;
