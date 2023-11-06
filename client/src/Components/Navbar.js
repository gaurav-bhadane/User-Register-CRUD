import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">CRUD APP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder='search'></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar