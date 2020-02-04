import React, { useState } from "react";
import '../Components/../App.css';

export default function SignUp() {

  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleUserNameChange = event => {
    setUser({ ...user, username: event.target.value });
  };

 const handleEmailChange = event => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePasswordChange = event => {
    setUser({ ...user, password: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.email);
    console.log(user.password);
  };


    return (

        <div className="whole-page">
            <div className="sign-up-section">
                <h2 className="title"> Create an account </h2>
                <form >
                    <label for ="first-name">First Name</label>
                    <input id="first-name" type="text" placeholder=" First Name " />

                     <label for ="last-name">Last Name</label>
                    <input id="last-name" type="text" placeholder=" Last Name " />
                    
          <label for ="email">Email</label>
            <input id="email"
              type="email"
              placeholder="Email"
              name="email"
              value ={user.email}
              onChange={event => handleEmailChange(event)} />
                    
          <label for ="username">Username</label>
            <input id="username"
              type="text"
              placeholder="Username"
              name="username" value={user.username}
              onChange={event => handleUserNameChange(event)} />
    
         <label for = "password"> Password </label>
            <input id="password"
              type="text"
              placeholder="Password"
              name="password"
              value ={user.password}
              onChange={event => handlePasswordChange(event)} />
                        {/* <text>Password most must have at least 8 characters</text> */}
                    <label for ="password2">Re-enter password</label>
    
            <input id="password2"
              type="text"
              placeholder="Password"
              name="password2"
              value ={user.password2}
              onChange={event => handlePasswordChange(event)} />
                        {/* <h6>Password most must match first enty </h6> */}
                    
                    <button onSubmit={event => handleSubmit(event)} >
                        Create your sauti-studio account</button>

                    <h6 className="last-text">Already have an account whit sauti-studio? Please Login </h6>
                
                    
                </form>

            </div>
            <nav className ="thierno-nav">
                <p className ="footer-text">Copyright © bw-sauti-studio</p>
            </nav>
        </div>
    )
}
