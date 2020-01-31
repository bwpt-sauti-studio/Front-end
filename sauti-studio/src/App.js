import React from 'react';
// import FormikUserForm from './Components/UserForm';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';




function App() {
  return (
    <div className="App">
      {/* <FormikUserForm  user="name"/> */}
      <Login />
      <SignUp />
      <NavBar/>
    </div>
  );
}

export default App;