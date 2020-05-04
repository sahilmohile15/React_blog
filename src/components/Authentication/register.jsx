import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./auth.css"
import firebase from "../Authentication/firebase"
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';

const InitialStates = {
    uname: '',
    email: '',
    password: '',
    cpassword: '',
    error: null,
  };

class SignUp extends Component {
    constructor (props) { 
        super(props);

        this.state = {...InitialStates}

        onsubmit = event => {
            const { username, email, passwordOne } = this.state;
 
            this.props.firebase
              .doCreateUserWithEmailAndPassword(email, passwordOne)
              .then(authUser => {
                this.setState({ ...InitialStates });
                this.props.history.push('/')
              })
              .catch(error => {
                this.setState({ error });
              });
 
            event.preventDefault();
        }

        onchange = event => {
            this.setState({ [event.target.name]: event.target.value})
        }
     }
    render() { 
        const{
            uname,
            password,
            cpassword,
            email,
            error
        } = this.state;

        const SignUpForm = compose(
            withRouter,
            withFirebase
        )(SignUp)

        const validate =
            password !== cpassword ||
            password === '' ||
            email === '' ||
            uname === '';
        return ( 
            <div>
                <form className="form" onSubmit = {this.onSubmit}>
                    <div className= "form-move form-group row">
                        <input className= "col-sm-8 col-form-label-big" type="text" name="uname" id="uname" placeholder= "Username" onChange= {this.onChange}/>
                    </div>  
                    <div className= "form-move form-group row"> 
                    <input className= "col-sm-8 col-form-label-big form-group row " type="email" name="email" id="email" placeholder= "Email" onChange= {this.onChange}/>
                    </div> 
                    <div className= "form-move form-group row">
                    <input className= "col-sm-8 col-form-label-big form-group row " type="password" name="password" id="password" placeholder= "Password" onChange= {this.onChange}/>
                    </div>
                    <div className= "form-move form-group row">
                    <input className= "col-sm-8 col-form-label-big form-group  row" type="password" name="cpassword" id="cpassword" placeholder= "Confirm Password" onChange= {this.onChange}/>
                    </div>
                    <button className= "col-sm-2 col-form-label-big form move form-group row  btn btn-primary" type = "submit" disabled= {validate}>Sign Up</button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
         );
        
         
        }
        

}
 
export default SignUp;