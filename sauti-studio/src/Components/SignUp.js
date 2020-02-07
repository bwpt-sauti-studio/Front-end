
import React, { useState } from "react";
import '../Components/../App.css';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


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
      .email("Email not valid")
      .required("Email is required"),
    username: Yup.string()
      .required()
      .min(6),
    password: Yup.string()
      .min(16, "Password must be 16 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        // .post("https://yourdatabaseurlgoeshere.com", values)
        .post("https://databaseUrl", values)
        .then(res => {
          console.log(res); 
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err);  
          setSubmitting(false);
        });
    }
  }

})(SignUp);
export default FormikSignUp;



