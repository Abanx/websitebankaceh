import React from 'react';
import ReactDOM from 'react-dom';
import Users from './users/Users';

export default function UsersList() {
    return (
        <div>
            <Users />
        </div>
    )
}

if (document.getElementById('users_div')) {
    ReactDOM.render(<Users />, document.getElementById('users_div'));
}
