import { useRef, useState } from 'react';
import { Badge, Button, Col, Container, Form, Image, Navbar, Row, Table } from 'react-bootstrap'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import userIcon from '../../assets/icons/user-solid.svg'
import '../../css/home/HomeGeneralStyles.css'

const RequestsPage = () => {

    const inputRef = useRef(null);

    const [image, setImage] = useState(userIcon)

    const handleClick = () => {
        inputRef.current.click();
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <div className="d-flex">
            <Sidebar currentPage={'requests'} />

            <div className='main-content-wrapper'>
                <Header />

                <div className='content-wrapper'>
                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Solicitudes de Registro</h4>
                        <hr />
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>1° Apellido</th>
                                    <th>2° Apellido</th>
                                    <th>Correo</th>
                                    <th>Cargo</th>
                                    <th>Creado</th>
                                    <th className='text-center'>Permisos</th>
                                    <th className='text-center'>Aceptar</th>
                                    <th className='text-center'>Rechazar</th>
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
                                    <td></td>
                                    <td>
                                        <Form.Select>
                                            <option default>Observador</option>
                                            <option>Administrador</option>
                                        </Form.Select>
                                    </td>
                                    <td className='text-center'>
                                        <Button variant='success'>
                                            <i className='fas fa-check'></i>
                                        </Button>
                                    </td>
                                    <td className='text-center'>
                                        <Button variant='danger'>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Form.Select>
                                            <option default>Observador</option>
                                            <option>Administrador</option>
                                        </Form.Select>
                                    </td>
                                    <td className='text-center'>
                                        <Button variant='success'>
                                            <i className='fas fa-check'></i>
                                        </Button>
                                    </td>
                                    <td className='text-center'>
                                        <Button variant='danger'>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td >The Bird</td>
                                    <td>@twitter</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Form.Select>
                                            <option default>Observador</option>
                                            <option>Administrador</option>
                                        </Form.Select>
                                    </td>
                                    <td className='text-center'>
                                        <Button variant='success'>
                                            <i className='fas fa-check'></i>
                                        </Button>
                                    </td>
                                    <td className='text-center'>
                                        <Button variant='danger'>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Información General</h4>
                        <hr />
                        <div className='d-flex flex-column-reverse flex-sm-row ' style={{ gap: 8 }}>
                            <input
                                style={{ display: 'none' }}
                                ref={inputRef}
                                type="file"
                                onChange={onImageChange}
                            />
                            {
                                (image === userIcon) ? (
                                    <Button
                                        variant='light'
                                        className='border'
                                        onClick={handleClick}

                                        style={{
                                            width: 64,
                                            height: 64,
                                            backgroundImage: `url(${image})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: '64%',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                    </Button>
                                ) : (
                                    <Button
                                        variant='light'
                                        onClick={handleClick}
                                        style={{
                                            width: 64,
                                            height: 64,
                                            backgroundImage: `url(${image})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                    </Button>
                                )
                            }
                            <Col className='d-flex flex-column justify-content-center'>
                                <h6>Selecciona una foto</h6>
                                <span className='text-muted' style={{ fontSize: 14 }}>Una imagen permite a los demás administradores reconocer a los usuarios</span>
                            </Col>
                        </div>

                        <Form>
                            <Row className="mb-sm-3">
                                <Form.Group as={Col} xs={12} sm={4} className="mb-3 mb-sm-0" controlId="formName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Giovanni"
                                        name='registerName'
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={4} className="mb-3 mb-sm-0" controlId="formSurname">
                                    <Form.Label>Primer apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Melchiorre"
                                        name='registerSurname'
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={4} className="mb-3 mb-sm-0" controlId="formLastName">
                                    <Form.Label>Segundo apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Bosco"
                                        name='registerLastName'
                                    />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} xs={12} sm={6} className="mb-3 mb-sm-0" controlId="formBirthday">
                                    <Form.Label>Fecha de nacimiento</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name='registerBirthday'
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={6} controlId="formJob">
                                    <Form.Label>Cargo</Form.Label>
                                    <Form.Select>
                                        <option default disabled>Labor en la institución</option>
                                        <option>Administración</option>
                                        <option>Estudiante</option>
                                        <option>Profesor</option>
                                        <option>Psicólogo</option>
                                        <option>Registro</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Form>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Información de Contacto</h4>
                        <hr />

                        <Form>
                            <Row className="mb-sm-3">
                                <Form.Group as={Col} xs={12} sm={6} className="mb-3 mb-sm-0" controlId="formEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="persona@cedesdonbosco.ed.cr"
                                        name='registerEmail'
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={6} className="mb-3 mb-sm-0" controlId="formTel">
                                    <Form.Label>Numero de teléfono</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="0000-0000"
                                        name='registerTel'
                                    />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} xs={12} sm={6} className="mb-3 mb-sm-0" controlId="formPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Al menos 8 caracteres"
                                        name='registerPassword'
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={6} controlId="formConfirmPassword">
                                    <Form.Label>Confirmar contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirme la contraseña"
                                        name='confirmRegisterPassword'
                                    />
                                </Form.Group>
                            </Row>
                        </Form>
                    </div>

                    <div className='d-flex'>
                        <Button variant='primary'>
                            Registrar
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RequestsPage