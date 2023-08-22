import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Swal from 'sweetalert2';

import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';

import Google from '../../assets/icons/social-google.svg';
import flowers from '../../assets/images/auth/edward-howell-VlTJdP8ZY1c-unsplash.jpg';
import '../../css/auth/AuthStyles.css'

const registerFormData = {
    registerName: '',
    registerFirstSurname: '',
    registerSecondSurname: '',
    registerCharge: '',
    registerEmail: '',
    registerPassword: '',
}

// const formValidations = {
//     registerEmail: [(value) => value.includes('@'), 'El correo debe de tener una @'],
//     registerPassword: [(value) => value.length >= 8, 'La contraseña debe tener más de 8 letras']
// }

const RegisterPage = () => {

    const dispatch = useDispatch()

    // const [validated, setValidated] = useState(false);

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const { startRegister, errorMessage, user } = useAuthStore();

    const {
        registerName,
        registerFirstSurname,
        registerSecondSurname,
        registerCharge,
        registerEmail,
        registerPassword,
        onInputChange
    } = useForm(registerFormData);

    const onSubmit = (event) => {
        event.preventDefault();

        startRegister({
            name: registerName,
            first_surname: registerFirstSurname,
            second_surname: registerSecondSurname,
            charge: registerCharge,
            email: registerEmail,
            password: registerPassword,
            role: 'READER_ROLE'
        })
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }

        if (errorMessage === undefined && JSON.stringify(user) !== '{}') {
            Swal.fire('Petición enviada', user, 'success');
        }
    }, [errorMessage, user])

    return (
        <Container fluid>
            <Row style={{ minHeight: '100vh' }}>
                <Col lg={6} className='auth-content-container'>
                    <Col xs={12} sm={9} md={6} lg={12} xl={9} xxl={6} className='auth-content'>
                        <Col className='mb-4'>
                            <h2>Crear una cuenta</h2>
                            <p className='text-muted'>Comencemos a entender a los estudiantes</p>
                        </Col>

                        {/* <Button variant="light" type="submit" className='w-100 d-flex justify-content-center align-items-center py-2' style={{ fontWeight: 500 }}>
                            <img src={Google} alt="google" width={18} height={18} className='me-2' />
                            Google
                        </Button> */}

                        <hr className='my-4' />

                        <Form className='mb-4' onSubmit={onSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} xs={12} controlId="formName" className='mb-3'>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Giovanni"
                                        name='registerName'
                                        value={registerName}
                                        onChange={onInputChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese su nombre
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formFirstSurname">
                                    <Form.Label>1° Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Melchiorre"
                                        name='registerFirstSurname'
                                        value={registerFirstSurname}
                                        onChange={onInputChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese su primer apellido
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formSecondSurname">
                                    <Form.Label>2° Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Bosco"
                                        name='registerSecondSurname'
                                        value={registerSecondSurname}
                                        onChange={onInputChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese su segundo apellido
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Cargo dentro de la institución</Form.Label>
                                <Form.Select aria-label="charge select"
                                    name='registerCharge'
                                    value={registerCharge}
                                    onChange={onInputChange}
                                >
                                    {/* <option >Seleccione una opción</option> */}
                                    <option value="ADMINISTRATIVE">Administrativo</option>
                                    <option value="STUDENT">Estudiante</option>
                                    <option value="PASTORAL">Pastoral</option>
                                    <option value="TEACHER">Profesor</option>
                                    <option value="PSYCHOLOGY">Psicología</option>
                                    <option value="REGISTRY">Registro</option>
                                    <option value="OTHER">Otro</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="usted@cedesdonbosco.ed.cr"
                                    name='registerEmail'
                                    value={registerEmail}
                                    onChange={onInputChange}
                                // isInvalid={validated && !registerEmail.includes('@')}
                                // required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor ingrese un correo valido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <InputGroup className="mb-3" hasValidation>
                                    <Form.Control
                                        type={passwordType}
                                        placeholder="Al menos 8 caracteres"
                                        name='registerPassword'
                                        value={registerPassword}
                                        onChange={onInputChange}
                                    // isInvalid={validated && registerPassword.length < 8}
                                    // required
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

                                <Form.Control.Feedback type="invalid">
                                    Por favor ingrese una contraseña de mínimo 8 caracteres
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type={passwordType}
                                        placeholder="Confirme su contraseña"
                                        name='confirmRegisterPassword'
                                        // value={confirmRegisterPassword}
                                        // onChange={onInputChange}
                                        required
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
                                <Form.Control.Feedback type="invalid">
                                    Las contraseñas no coinciden
                                </Form.Control.Feedback>
                            </Form.Group> */}

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
                    <Col className='phrase-container' style={{ zIndex: 137 }}>
                        <div className='text-white' >
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

export default RegisterPage
