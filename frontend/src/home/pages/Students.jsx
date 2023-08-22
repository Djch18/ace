import { Badge, Button, Col, Container, Form, Navbar, Row, Stack, Table } from 'react-bootstrap'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../css/home/HomeGeneralStyles.css'

const Students = () => {
    return (
        <div className="d-flex">
            <Sidebar currentPage={'students'} />

            <div className='main-content-wrapper'>
                <Header />

                <div className='content-wrapper'>
                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Solicitudes de Registro</h4>
                        <hr />
                        <Form>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar estudiante"
                                    name='registerName'
                                />
                            </Form.Group>
                        </Form>

                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Carnet</th>
                                    <th>Correo</th>
                                    <th>Año</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td></td>
                                    <td></td>
                                    <td className='text-success'><i className="fas fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td></td>
                                    <td></td>
                                    <td className='text-warning'><i className="fas fa-warning"></i></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry</td>
                                    <td >The Bird</td>
                                    <td>@twitter</td>
                                    <td></td>
                                    <td></td>
                                    <td className='text-danger'><i className="fas fa-xmark"></i></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Stack direction="horizontal" gap={4}>
                            <p className='m-0'>Est. por pagina:</p>
                            <Form.Select style={{ width: 'fit-content' }}>
                                <option>10</option>
                                <option>20</option>
                                <option>40</option>
                            </Form.Select>
                            <p className='m-0'>1 de 20</p>
                            <Stack direction="horizontal" gap={2}>
                                <Button variant='light'>
                                    <i className="fas fa-angle-left"></i>
                                </Button>
                                <Button variant='light'>
                                    <i className="fas fa-angle-right"></i>
                                </Button>
                            </Stack>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students