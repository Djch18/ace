import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Carousel, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

import Google from '../../assets/icons/social-google.svg';
import flowers from '../../assets/images/auth/edward-howell-VlTJdP8ZY1c-unsplash.jpg';
import '../../css/auth/AuthStyles.css'
const RegisterPage = () => {

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    return (
        <Container fluid>
            <Row style={{ minHeight: '100vh' }}>
                <Col lg={6} className='auth-content-container'>
                    <Col xs={12} sm={9} md={6} lg={12} xl={9} xxl={6} className='auth-content'>
                        <Col className='mb-4'>
                            <h2>Crear una cuenta</h2>
                            <p className='text-muted'>Comencemos a entender a los estudiantes</p>
                        </Col>

                        <Button variant="light" type="submit" className='w-100 d-flex justify-content-center align-items-center py-2' style={{ fontWeight: 500 }}>
                            <img src={Google} alt="google" width={18} height={18} className='me-2' />
                            Google
                        </Button>

                        <hr className='my-4' />

                        <Form className='mb-4'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formBasicName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Giovanni"
                                        name='registerName'
                                    // value={registerName}
                                    // onChange={onInputChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formBasicName">
                                    <Form.Label>1° Apellido</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Melchiorre"
                                        name='registerName'
                                    // value={registerName}
                                    // onChange={onInputChange}
                                    />
                                </Form.Group>
                            </Row>

                            {/* <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Cargo dentro de la institución</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option >Seleccione una opción</option>
                                    <option value="1">Estudiante</option>
                                    <option value="2">Profesor</option>
                                    <option value="3">Psicólogo</option>
                                </Form.Select>
                            </Form.Group> */}

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="usted@cedesdonbosco.ed.cr"
                                    name='loginEmail'
                                // value={loginEmail}
                                // onChange={onInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type={passwordType}
                                        placeholder="Al menos 8 caracteres"
                                        name='loginPassword'
                                    // value={loginPassword}
                                    // onChange={onInputChange}
                                    />
                                    <Button
                                        variant="light"
                                        id="show-password-button"
                                        className='border'
                                        onClick={togglePassword}
                                        style={{ width: 46 }}
                                    >
                                        {passwordType === "password" ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type={passwordType}
                                        placeholder="Confirma tu contraseña"
                                        name='loginPassword'
                                    // value={loginPassword}
                                    // onChange={onInputChange}
                                    />
                                    <Button
                                        variant="light"
                                        id="show-password-button-confirmation"
                                        className='border'
                                        onClick={togglePassword}
                                        style={{ width: 46 }}
                                    >
                                        {passwordType === "password" ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Button variant="dark" type="submit" className='w-100 py-2'>
                                Siguiente
                            </Button>
                        </Form>

                        <p className='text-center mb-0'>
                            ¿Ya tiene una cuenta?
                            <Link
                                to='/auth/login'
                                className='ms-1 text-decoration-none'
                            >
                                Iniciar sesión
                            </Link>
                        </p>
                    </Col>
                </Col>

                <Col lg={6}
                    className='auth-content-container bg-light'
                    style={{
                        backgroundImage: `url(${flowers})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <Col className='phrase-container'>
                        <div className='text-white' style={{ zIndex: 137 }}>
                            <h2>
                                <i className="fas fa-robot fs-1 me-2"></i>
                                ACE
                            </h2>
                        </div>

                        <div className='text-white' style={{ zIndex: 137 }}>
                            <h3 className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error impedit magni vel distinctio rerum minima? Porro iste voluptatem sed sequi suscipit autem odio magni minima veritatis repudiandae, corporis asperiores.</h3>
                            <h3 className='mb-3'>- Someone famous</h3>
                            <p>What he/she does</p>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container >
    )
}

export default RegisterPage
