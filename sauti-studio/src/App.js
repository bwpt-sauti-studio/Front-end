import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import FormikUserForm from './Components/UserForm';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
// import Mindmap from './Components/Mindmap';




function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/mindmap" component={Mindmap}/> */}
          
      </Router>
      
      
    </div>
  );
}

export default App;
