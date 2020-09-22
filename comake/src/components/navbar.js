import React from 'react'
import { Link, Router } from 'react-router-dom'

export const NavBar = () => {
    return (
        <Router>
            <div>
                <Link to = '/'>
                    Login
                </Link>
            </div>
        </Router>
    )
}