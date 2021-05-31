import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';
import SignIn from './login/SignIn';

export default function AdminLogin() {
    return (
        <div>
            {/* <p>React Component -- Admin Login</p> */}
            {/* <Button variant="contained" color="primary">Tombol</Button> */}
            <SignIn/>
        </div>
    )
}

if (document.getElementById('login_div')) {
    ReactDOM.render(<AdminLogin />, document.getElementById('login_div'));
}
