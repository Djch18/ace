import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';

import Google from '../../assets/icons/social-google.svg';
import chess from '../../assets/images/auth/hassan-pasha-nEbMedmVwgw-unsplash.jpg';
import { onChecking } from '../../store/auth/authSlice';
import { useAuthStore } from '../../hooks/useAuthStore';
import '../../css/auth/AuthStyles.css'

const LoginPage = () => {

    const dispatch = useDispatch()

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const { startLogin, errorMessage } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange } = useForm({
        loginEmail: '',
        loginPassword: ''
    })

    const onSubmit = (event) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    useEffect(() => {

        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }

    }, [errorMessage])


    return (
        <Container fluid>
            <Row style={{ minHeight: '100vh' }}>
                <Col lg={6} className='auth-content-container'>
                    <Col xs={12} sm={9} md={6} lg={12} xl={9} xxl={6} className='auth-content'>
                        <Col className='mb-4'>
                            <h2>¡Bienvenido de nuevo!</h2>
                            <p className='text-muted'>Sigamos mejorando la salud mental de los estudiantes</p>
                        </Col>

                        {/* <Button variant="light" type="submit" className='w-100 d-flex justify-content-center align-items-center py-2' style={{ fontWeight: 500 }}>
                            <img src={Google} alt="google" width={18} height={18} className='me-2' />
                            Google
                        </Button> */}

                        <hr className='my-4' />

                        <Form className='mb-4' onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="usted@cedesdonbosco.ed.cr"
                                    name='loginEmail'
                                    value={loginEmail}
                                    onChange={onInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type={passwordType}
                                        placeholder="Al menos 8 caracteres"
                                        name='loginPassword'
                                        value={loginPassword}
                                        onChange={onInputChange}
                                    />
                                    <Button
                                        variant="light"
                                        id="show-password-button"
                                        className='border'
                                        onClick={togglePassword}
                                        // style={{ width: 46, backgroundColor: 'transparent' }}
                                        style={{ width: 46 }}
                                    >
                                        {passwordType === "password" ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Button variant="dark" type="submit" className='w-100 py-2'>
                                Iniciar sesión
                            </Button>
                        </Form>

                        <p className='text-center mb-0'>
                            ¿No tiene una cuenta?
                            <Link
                                to='/auth/register'
                                className='ms-1 text-decoration-none'
                            >
                                Crear cuenta
                            </Link>
                        </p>
                    </Col>

                </Col>

                <Col lg={6}
                    className='auth-content-container bg-light'
                    style={{
                        backgroundImage: `url(${chess})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <Col className='phrase-container' style={{ zIndex: 137 }}>
                        <div className='text-white'>
                            <h2>
                                <i className="fas fa-robot fs-1 me-2"></i>
                                ACE
                            </h2>
                        </div>

                        <div className='text-white'>
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

export default LoginPage