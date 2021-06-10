import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './login/SignIn';
import LogIn from './login/LogIn';

export default function AdminLogin() {
    return (
        <div>
            {/* <p>React Component -- Admin Login</p> */}
            {/* <Button variant="contained" color="primary">Tombol</Button> */}
            {/* <SignIn/> */}
            <LogIn />
        </div>
    )
}

if (document.getElementById('login_div')) {
    ReactDOM.render(<AdminLogin />, document.getElementById('login_div'));
}
