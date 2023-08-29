import { useEffect } from 'react';
import { Badge, Button, Col, Container, Form, Navbar, Row, Stack, Table } from 'react-bootstrap'

import { useStudentStore } from '../../hooks/useStudentStore';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../css/home/HomeGeneralStyles.css'
import { Link } from 'react-router-dom';

const Students = () => {

    const { students, startLoadingStudents, startLoadingStudentResult, } = useStudentStore();

    useEffect(() => {
        startLoadingStudents()
    }, [])

    return (
        <div className="d-flex">
            <Sidebar currentPage={'students'} />

            <div className='main-content-wrapper'>
                <Header />

                <div className='content-wrapper'>
                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Solicitudes de Registro</h4>
                        <hr className='m-0' />
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Correo</th>
                                    <th>Sección</th>
                                    <th style={{ minWidth: 172 }}>Fecha de nacimiento</th>
                                    <th>Genero</th>
                                    <th style={{ minWidth: 196 }}>Canton</th>
                                    <th style={{ minWidth: 128 }}>Ver resultados</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, i) => (
                                    <tr key={i}>
                                        <td>{student.id}</td>
                                        <td>{student.email}</td>
                                        <td>{student.grade}</td>
                                        <td>{student.birthday}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.address}</td>
                                        <td>
                                            <Link
                                                to='/student'
                                                state={student}
                                                className='text-decoration-none'
                                            >
                                                <Button>
                                                    <i className='fas fa-eye'></i>
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students