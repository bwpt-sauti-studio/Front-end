import React from 'react'
import '../Components/../App.css';

export default function SignUp() {
    return (
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

                    <h6 className="last-text">Retuning user? Sigin in </h6>
                    
                </form>

            </div>
            <nav className ="thierno-nav">
                <p className ="footer-text">Copyright © bw-sauti-studio</p>
            </nav>
        </div>
    )
}
