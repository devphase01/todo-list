import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h2 className="header-title">Tasks</h2>
            <Link to="/create">Create</Link>
        </div>
    )
}

export default Header
