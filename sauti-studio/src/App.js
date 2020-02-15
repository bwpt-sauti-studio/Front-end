import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import FormikUserForm from './Components/UserForm';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import ProtectedRoute from './Components/ProtectedRoute';
// import Mindmap from './Components/Mindmap';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<ProtectedRoute path='/login' component={Login} />
					<Route exact path='/protected' component={Login} />
					<Route path='/contact' component={Contact} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={SignUp} />
					{/* <Route path="/mindmap" component={Mindmap}/> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
