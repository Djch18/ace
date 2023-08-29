import React from 'react'
import { Link } from 'react-router-dom'

import { BsFillGrid1X2Fill } from 'react-icons/bs';

import '../css/components/Sidebar.css'
import { useAuthStore } from '../hooks/useAuthStore';


const Sidebar = ({ currentPage }) => {

    const { startLogout, user } = useAuthStore();

    return (
        <aside className="bg-light">
            <div id='sidebar-header' className="border-bottom">
                <Link
                    to='/home'
                    className='fs-4 d-block w-100 text-decoration-none px-0 px-md-2 text-center text-md-start'
                >
                    <i className="fas fa-robot fs-1 me-0 me-md-2"></i>
                    <span className="fs-4 fs-4 d-none d-md-inline w-100">ACE</span>
                </Link>
            </div>

            <div id='sidebar-content'>
                <ul className="nav flex-column">
                    <span className='text-center text-md-start'>Menu</span>
                    <li className="nav-item my-1" style={{ whiteSpace: 'nowrap' }}>
                        <Link
                            to='/home'
                            className={(currentPage === 'home' ? 'nav-link text-center text-primary text-md-start disabled' : 'nav-link text-center text-secondary text-md-start')}
                        >
                            <BsFillGrid1X2Fill />
                            <span className="ms-3 d-none d-md-inline">Inicio</span>
                        </Link>
                    </li>

                    {/* <li className="nav-item my-1" style={{ whiteSpace: 'nowrap' }}>
                        <Link
                            to='/analytics'
                            className={(currentPage === 'analytics' ? 'nav-link text-center text-primary text-md-start disabled' : 'nav-link text-center text-secondary text-md-start')}
                        >
                            <i className="fas fa-chart-line"></i>
                            <span className="ms-3 d-none d-md-inline">Analítica</span>
                        </Link>
                    </li> */}

                    <li className="nav-item my-1" style={{ whiteSpace: 'nowrap' }}>
                        <Link
                            to='/students'
                            className={(currentPage === 'students' ? 'nav-link text-center text-primary text-md-start disabled' : 'nav-link text-center text-secondary text-md-start')}
                        >
                            <i className="fas fa-graduation-cap"></i>
                            <span className="ms-3 d-none d-md-inline">Estudiantes</span>
                        </Link>
                    </li>
                </ul>

                {
                    (user.role === 'ADMIN_ROLE') && (
                        <ul className="nav flex-column">
                            <span className='d-none d-md-block text-start'>Administración</span>
                            <span className='d-block d-md-none text-center'>Admin</span>

                            {/* <li className="nav-item my-1" style={{ whiteSpace: 'nowrap' }}>
                                <Link
                                    to='/record'
                                    className={(currentPage === 'record' ? 'nav-link text-center text-primary text-md-start disabled' : 'nav-link text-center text-secondary text-md-start')}
                                >
                                    <i className="fas fa-book"></i>
                                    <span className="ms-3 d-none d-md-inline">Registro</span>
                                </Link>
                            </li> */}

                            <li className="nav-item my-1" style={{ whiteSpace: 'nowrap' }}>
                                <Link
                                    to='/requests'
                                    className={(currentPage === 'requests' ? 'nav-link text-center text-primary text-md-start disabled' : 'nav-link text-center text-secondary text-md-start')}
                                >
                                    <i className="fas fa-user-plus"></i>
                                    <span className="ms-3 d-none d-md-inline">Solicitudes</span>
                                </Link>
                            </li>
                        </ul>
                    )
                }

                <ul className="nav flex-column">
                    <span className='text-center text-md-start'>Ajustes</span>

                    {/* <li className="nav-item my-1" style={{ whiteSpace: 'nowrap' }}>
                        <Link
                            to='/profile'
                            className={(currentPage === 'profile' ? 'nav-link text-center text-primary text-md-start disabled' : 'nav-link text-center text-secondary text-md-start')}
                        >
                            <i className="fas fa-id-card"></i>
                            <span className="ms-3 d-none d-md-inline">Perfil</span>
                        </Link>
                    </li> */}

                    <li className="nav-item my-1" style={{ whiteSpace: 'nowrap' }}>
                        <Link
                            className='nav-link text-center text-secondary text-md-start'
                            onClick={startLogout}
                        >
                            <i className="fas fa-right-to-bracket"></i>
                            <span className="ms-3 d-none d-md-inline">Cerrar sesión</span>
                        </Link>
                    </li>
                </ul>
            </div>


        </aside>
    )
}

export default Sidebar