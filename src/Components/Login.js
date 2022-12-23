import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        const users = [
            {
                id: 1,
                name:'jghfhjfjfkjhf'
            },
            {
                id: 2,
                name:'jghfhjfjfkjhf'
            },
            {
                id: 3,
                name:'jghfhjfjfkjhf'
            },
            {
                id: 4,
                name:'jghfhjfjfkjhf'
            },
        ]
        return (
            <div>
                <div>
                    <h1>Users</h1>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <Link to={user.id}>{user.name}</Link>
                            </li>
                        ))}
                    </ul>
                        <Link to={'..'}>back</Link>
                </div>
            </div>
        )
    }
}

export default Login
