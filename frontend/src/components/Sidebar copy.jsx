import React from 'react'
import '../css/components/sidebar.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Sidebar = () => {

    return (
        <div id="sidebar-container" className="bg-dark col-auto col-md-3 col-lg-2 min-vh-100 d-flex flex-column text-center">
            <div>
                <a className="text-decoration-none text-white px-2 mt-4">
                    <span className="fs-4 d-none d-md-block text-start ps-2">Tutor Vial</span>

                    <span className="fs-4 d-block d-md-none text-center">
                        <i className="fas fa-car"></i>
                    </span>
                </a>

                {/* <hr className="text-secondary d-none d-sm-block" /> */}

                <ul className="nav nav-pills flex-column mt-3">
                    <span className='text-muted text-center text-md-start ps-0 ps-ms-2'>Menu</span>
                    <li className="nav-item text-white my-1">
                        <Link
                            to='/'
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-home"></i>
                            <span className="ms-3 d-none d-md-inline">Home</span>
                        </Link>
                    </li>

                    <li className="nav-item text-white my-1">
                        <Link
                            to='/practice'
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-book"></i>
                            <span className="ms-3 d-none d-md-inline">Practice</span>
                        </Link>
                    </li>
                    {/* 
                    <li className="nav-item text-white my-1">
                        <Link
                            to='/dashboard'
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-chart-simple"></i>
                            <span className="ms-3 d-none d-md-inline">Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item text-white my-1">
                        <Link
                            to='/profile'
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-user"></i>
                            <span className="ms-3 d-none d-md-inline">Profile</span>
                        </Link>
                    </li> */}
                </ul>

                <ul className="nav nav-pills flex-column mt-4">
                    <span className='text-muted text-center text-md-start ps-0 ps-ms-2'>Support</span>
                    <li className="nav-item text-white my-1">
                        <Link
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-right-to-bracket"></i>
                            <span className="ms-3 d-none d-md-inline">Logout</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item text-white my-1">
                        <Link
                            to='/settings'
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-gear"></i>
                            <span className="ms-3 d-none d-md-inline">Settings</span>
                        </Link>
                    </li>

                    <li className="nav-item text-white my-1">
                        <Link
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-circle-question"></i>
                            <span className="ms-3 d-none d-md-inline">Help</span>
                        </Link>
                    </li>

                    <li className="nav-item text-white my-1">
                        <Link
                            className='nav-link text-white text-center text-md-start'
                        >
                            <i className="fas fa-moon"></i>
                            <span className="ms-3 d-none d-md-inline">Dark mode</span>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar