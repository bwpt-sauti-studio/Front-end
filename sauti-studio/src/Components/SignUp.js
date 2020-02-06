<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from 'react'
import { Link } from 'react-router';

import Login from './Login';
>>>>>>> 3d267b58704ccdf60b6e99aa620595389b92a872
import '../Components/../App.css';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


// export default function SignUp() {
  function SignUp(){



    return (
<<<<<<< HEAD

      <div className="whole-page">
        
        <div className="sign-up-section">
          
                <h1 className="title"> Create an account </h1>
                <Form >
            
             <Field type="text" name="first-name" placeholder="First Name" />
        
             <Field type="text" name="last-name" placeholder="Last Name" />
          
             <Field type="email" name="email" placeholder="Email" />
          
             <Field type="text" name="username" placeholder="Username" />
          
            <Field type="password" name="password" placeholder="Password" />
        
            <button>Create Account </button>
            
            <p className="last-text">Already have an Account?
            <a href="Components/Login.js"> Please Sign in </a> </p> 

                </Form>
=======
        <div className="whole-page">
            <div className="sign-up-section">
                <h2 className="title"> Create an account </h2>
                <form >
                    <label for ="name">Name</label>
                    
                     <input id ="name" type ="text" placeholder =" Full Name " />
                    <label for ="email">Email</label>
                
                        <input id ="email" type ="email" placeholder ="Email"/>
    
                    <label for = "password">Password </label>
                        
                        <input id="password" type="text" placeholder="password" />
                        {/* <text>Password most must have at least 8 characters</text> */}
                    <label for ="password2">Re-enter password</label>
    
                        <input id="password2" type="text" placeholder="password" />
                        {/* <h6>Password most must match first enty </h6> */}
                    
                    <button >Create your sauti-studio account</button>

                    <h6 className="last-text">Retuning user? Sign In </h6>
                    
                </form>
>>>>>>> 3d267b58704ccdf60b6e99aa620595389b92a872

            </div>

            <nav className ="thierno-nav">
                <p className ="footer-text">Copyright © bw-sauti-studio</p>
            </nav>
        </div>
    )
}
const FormikSignUp = withFormik({
  mapPropsToValues({ email, username, password }) {
      return {
      email: email || "",
      username: username || "",
      password: password || ""
    };
    },
    handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(SignUp);
export default FormikSignUp;