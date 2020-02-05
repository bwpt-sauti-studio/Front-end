import React from 'react';
import { slide as Menu } from "react-burger-menu";
import './NavBar.css';

  export default class NavBar extends React.Component {
    showSettings (event) {
        event.preventDefault();
       
      }
    
      render () {
        
        return (
          <Menu>
            <a id="home"className="menu-item" href="/">Home</a>
            <a id="login" className="menu-item" href="/login">Login</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="signup" className="menu-item" href="/signup">Sign Up</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a id="mindmap" className="menu-item" href="/mindmap">Mindmap</a>
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
            {/* <button className={'btn btn-primary'} style={{position: "fixed", bottom: "0"}}>Start New</button> */}
          </Menu>
        );
      }
    }