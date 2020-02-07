import React, { useState } from 'react'
import axiosWithAuth from './utils/axiosWithAuth';

 const Login = (props) => {

    const [credentials, setCredentials] = useState({ username: '', password: ''});

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('https://build-iv-sauti-studio.herokuapp.com/login', credentials)
        .then(res => {
            console.log(props.history);
            localStorage.setItem('token', res.data.token);
            props.history.push('/protected');
        })
            .catch(err => console.log(err.respone));
    };

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div>
            <h1>Already a user? Login below:</h1>
            <form>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={credentials.username}
                    onChange={handleChange}
                />

                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button onClick={login}>Log In</button>
            </form>
        </div>
    );
 }

 export default Login;
