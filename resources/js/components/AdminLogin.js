import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';

export default function AdminLogin() {
    return (
        <div>
            <p>React Component -- Admin Login</p>
            <Button variant="contained" color="primary">Tombol</Button>
        </div>
    )
}

if (document.getElementById('login_div')) {
    ReactDOM.render(<AdminLogin />, document.getElementById('login_div'));
}
