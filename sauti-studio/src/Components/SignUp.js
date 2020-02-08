
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> 4ab0e536c4386167b2bd8ee63f0e61a22c317a91
import '../Components/../App.css';
// import NavBar './NavBar';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import axiosWithAuth from './utils/axiosWithAuth';


<<<<<<< HEAD
// export default function SignUp() {
const  SignUp = ({
  values,
  errors,
  touched,
  status
}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log('status has changed', status);
  
  }, [status]);
=======
function SignUp() {
    
>>>>>>> 4ab0e536c4386167b2bd8ee63f0e61a22c317a91
    return (

      <div className="whole-page">
        {/* <NavBar /> */}
        
        <div className="sign-up-section">
          
          <h1 className="title"> Create an account </h1>
          <Form >
            
            <Field id="firstname" type="text" name="firstname" placeholder="First Name" />
            {touched.firstname &&
              errors.firstname && (
              <p className ="errors">{errors.firstname}</p>
            )}
        
            <Field id="lastname" type="text" name="lastname" placeholder="Last Name" />
            {touched.lastname &&
              errors.lastname && (
              <p className ="errors">{errors.lastname}</p>
            )}
          
            <Field id="email" type="email" name="email" placeholder="Email" />
            
            {touched.email &&
              errors.email && (
              <p className ="errors">{errors.email}</p>
            )}
          
            <Field id="username" type="text" name="username" placeholder="Username" />
            {touched.username &&
              errors.username && (
              <p className ="errors">{errors.username}</p>
            )}
          
            <Field id="password" type="password" name="password" placeholder="Password" />
            {touched.password &&
              errors.password && (
              <p className ="errors">{errors.password}</p>
            )}
        
            <button type="submit">Create Account </button>
            
            {/* <button disabled={isSubmitting}>Submit</button> */}
            
            <p className="last-text">Already registered?
            <a href="Components/Login.js"> Login to your account </a>
            </p>

          </Form>

        </div>

        <nav className="thierno-nav">
          <p className="footer-text">Copyright © bw-sauti-studio</p>
        </nav>
      </div>
    );
}
const FormikSignUp = withFormik({
  mapPropsToValues({firstname, lastname, email, username, password }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },



  validationSchema: Yup.object().shape({
    firstname: Yup.string("First name must be a string").required("First Name is a required field"),
    
     lastname: Yup.string("Last name must be a string").required("Last name is a required field"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    username: Yup.string()
      .required()
      .min(6),
    password: Yup.string()
      .min(8, "Password must be 12 characters or longer")
      .required("Password is required")
  }),

  // handleSubmit(values, formikBag, { resetForm, setErrors, setSubmitting }) {
  handleSubmit(values, { setStatus } ) {
    console.log("submitting", values);
      axios
        .post("https://build-iv-sauti-studio.herokuapp.com", values)
        
        .then(res => {
          console.log("Success:", res); 
          setStatus(res.data);
          // resetForm();
          // setSubmitting(false);
        })
        .catch(err => {
          console.log(err);  
          // setSubmitting(false);
        });
    }
  
})(SignUp);
export default FormikSignUp;

