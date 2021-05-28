import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';

function HomePage() {
    return (
        <div>
            <p>React Component -- Home Page</p>
            <Button variant="contained" color="primary">Tombol</Button>
        </div>
    )
}

export default HomePage;

if (document.getElementById('homepage_div')) {
    ReactDOM.render(<HomePage />, document.getElementById('homepage_div'));
}
