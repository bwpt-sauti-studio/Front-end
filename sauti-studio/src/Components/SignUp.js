
import React, { useState } from "react";
// import { Link } from 'react-router';
import Login from './Login';
import '../Components/../App.css';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


// export default function SignUp() {
  function SignUp(){



    return (

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
  validationSchema: Yup.object().shape({
    
    email: Yup.string()
      .email()
      .required(),
    username: Yup.string()
      .required()
       .min(6),
    password: Yup.string()
      .min(6)
      .required()
  }),

    handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(FormikSignUp);
export default FormikSignUp;
