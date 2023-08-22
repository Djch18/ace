import React from 'react'
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import '../css/components/Sidebar.css'
import { Link } from 'react-router-dom'
import { Button, Dropdown, Nav, NavDropdown } from 'react-bootstrap'

const Sidebar = () => {

    return (
        <aside className="bg-light">
            <Link
                to='/home'
                id='sidebar-header'
                className="border-bottom"
            >
                <i className="fas fa-robot fs-1"></i>
                <span className="fs-4 d-none d-md-flex text-start fw-semibold w-100">ACE</span>
            </Link>

            <Nav className="nav flex-column mt-3">
                <li className="nav-item my-1">
                    <Link
                        to='/home'
                        className='nav-link text-center text-secondary text-md-start'
                    >
                        <BsFillGrid1X2Fill />
                        <span className="ms-3 d-none d-md-inline">Inicio</span>
                    </Link>
                </li>

                <li className="nav-item my-1">
                    <Link
                        to='/analytics'
                        className='nav-link text-center text-secondary text-md-start'
                    >
                        <i className="fas fa-chart-line"></i>
                        <span className="ms-3 d-none d-md-inline">Analítica</span>
                    </Link>
                </li>

                <li className="nav-item my-1">
                    <Link
                        to='/analytics'
                        className='nav-link text-center text-secondary text-md-start'
                    >
                        <i className="fas fa-table"></i>
                        <span className="ms-3 d-none d-md-inline">Tablas</span>
                    </Link>
                </li>

                <li className="nav-item my-1">
                    <Dropdown>
                        <Dropdown.Toggle className='w-100 text-secondary' id="dropdown-authentication">
                            <i className='fas fa-key me-3'></i>
                            <span>Autentificación</span>
                            <i className='fas fa-angle-down ms-0 ms-md-2'></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link
                                to='/analytics'
                                className='dropdown-item text-center text-secondary text-md-start'
                            >
                                <i className="fas fa-table d-block d-md-none"></i>
                                <span className="ms-3 d-none d-md-inline">Tablas</span>
                            </Link>
                            <Link
                                to='/analytics'
                                className='dropdown-item text-center text-secondary text-md-start'
                            >
                                <i className="fas fa-table d-block d-md-none"></i>
                                <span className="ms-3 d-none d-md-inline">Tablas</span>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>

                <li className="nav-item my-1">
                    <Dropdown>
                        <Dropdown.Toggle className='w-100 text-secondary' id="dropdown-settings">
                            <i className='fas fa-gear me-3'></i>
                            <span>Ajustes</span>
                            <i className='fas fa-angle-down ms-0 ms-md-2'></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link
                                to='/analytics'
                                className='dropdown-item text-center text-secondary text-md-start'
                            >
                                <i className="fas fa-table d-block d-md-none"></i>
                                <span className="ms-3 d-none d-md-inline">Tablas</span>
                            </Link>
                            <Link
                                to='/analytics'
                                className='dropdown-item text-center text-secondary text-md-start'
                            >
                                <i className="fas fa-table d-block d-md-none"></i>
                                <span className="ms-3 d-none d-md-inline">Tablas</span>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>

                <li className="nav-item my-1" style={{ justifySelf: 'flex-end' }}>
                    <Link
                        className='nav-link text-center text-secondary text-md-start'
                    >
                        <i className="fas fa-right-to-bracket"></i>
                        <span className="ms-3 d-none d-md-inline">Cerrar sesión</span>
                    </Link>
                </li>
            </Nav>
        </aside>
    )
}

export default Sidebar