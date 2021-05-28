import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';

export default function AdminDashboard() {
    return (
        <div>
            <p>React Component -- Admin Dashboard</p>
            <Button variant="contained" color="primary">Tombol</Button>
        </div>
    )
}

if (document.getElementById('dashboard_div')) {
    ReactDOM.render(<AdminDashboard />, document.getElementById('dashboard_div'));
}
