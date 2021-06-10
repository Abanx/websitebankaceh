import React from 'react';
import ReactDOM from 'react-dom';
import Blogs from './blogs/Blogs';

export default function AdminBlogs() {
    return (
        <div>
            {/* <p>React Component -- Admin Dashboard</p>
            <Button variant="contained" color="primary">Tombol</Button> */}
            <Blogs />
        </div>
    )
}

if (document.getElementById('blogs_div')) {
    ReactDOM.render(<Blogs />, document.getElementById('blogs_div'));
}
