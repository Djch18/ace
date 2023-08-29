import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Badge, Button, Col, Container, Form, Image, InputGroup, Navbar, Row, Table } from 'react-bootstrap'

import { useUserStore } from '../../hooks/useUserStore';
import { useForm } from '../../hooks/useForm';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import userIcon from '../../assets/icons/user-solid.svg'
import '../../css/home/HomeGeneralStyles.css'

const registerFormFields = {
    registerName: '',
    registerFirstSurname: '',
    registerSecondSurname: '',
    registerCharge: '',
    registerEmail: '',
    registerPassword: '',
    registerRole: '',
}

const RequestsPage = () => {

    const dispatch = useDispatch()

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const { users, startLoadingUsers, startSavingUser, startUpdatingUser, startDeletingUser, } = useUserStore();

    const { updateRole, onInputChange: onUpdateInputChange } = useForm({ updateRole: 'READER_ROLE', });

    const {
        registerName,
        registerFirstSurname,
        registerSecondSurname,
        registerCharge,
        registerEmail,
        registerPassword,
        registerRole,
        onInputChange: onRegisterInputChange
    } = useForm(registerFormFields);

    // const inputRef = useRef(null);

    // const [image, setImage] = useState(userIcon)

    // const handleClick = () => {
    //     inputRef.current.click();
    // };

    // const onImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         setImage(URL.createObjectURL(event.target.files[0]));
    //     }
    // }

    const updateSubmit = (event, id) => {
        event.preventDefault();

        startUpdatingUser({
            id: id,
            role: updateRole,
            state: 1
        })

        startLoadingUsers()
    }

    const deleteSubmit = (event, id) => {
        event.preventDefault();

        startDeletingUser({
            id: id,
        })

        startLoadingUsers()
    }

    const registerSubmit = (event) => {
        event.preventDefault();

        startSavingUser({
            name: registerName,
            first_surname: registerFirstSurname,
            second_surname: registerSecondSurname,
            charge: registerCharge,
            email: registerEmail,
            password: registerPassword,
            role: registerRole,
            state: 1
        })
    }

    useEffect(() => {
        startLoadingUsers()
    }, [])

    return (
        <div className="d-flex">
            <Sidebar currentPage={'requests'} />

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
                                    <th>Nombre</th>
                                    <th>1° Apellido</th>
                                    <th>2° Apellido</th>
                                    <th>Cargo</th>
                                    <th>Correo</th>
                                    <th>Creado</th>
                                    <th className='text-center'>Permisos</th>
                                    <th className='text-center'>Aceptar</th>
                                    <th className='text-center'>Rechazar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => (
                                    <tr key={i}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td style={{ minWidth: 100 }}>{user.first_surname}</td>
                                        <td style={{ minWidth: 100 }}>{user.second_surname}</td>
                                        <td>{user.charge}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>
                                            <Form.Select aria-label="charge select"
                                                name='updateRole'
                                                value={updateRole}
                                                onChange={onUpdateInputChange}
                                            >
                                                <option value="READER_ROLE">Lector</option>
                                                <option value="ADMIN_ROLE">Administrador</option>
                                            </Form.Select>
                                        </td>
                                        <td className='text-center'>
                                            <Button variant='success' onClick={event => updateSubmit(event, user.id)}>
                                                <i className='fas fa-check'></i>
                                            </Button>
                                        </td>
                                        <td className='text-center' onClick={event => deleteSubmit(event, user.id)}>
                                            <Button variant='danger'>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Información General</h4>
                        <hr className='m-0' />
                        {/* <div className='d-flex flex-column-reverse flex-sm-row ' style={{ gap: 8 }}>
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
                        </div> */}

                        <Form onSubmit={registerSubmit}>
                            <Row className="mb-sm-3">
                                <Form.Group as={Col} xs={12} sm={4} className="mb-3 mb-sm-0" controlId="formName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Giovanni"
                                        name='registerName'
                                        value={registerName}
                                        onChange={onRegisterInputChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={4} className="mb-3 mb-sm-0" controlId="formSurname">
                                    <Form.Label>1° Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Melchiorre"
                                        name='registerFirstSurname'
                                        value={registerFirstSurname}
                                        onChange={onRegisterInputChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={4} className="mb-3 mb-sm-0" controlId="formLastName">
                                    <Form.Label>2° Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Bosco"
                                        name='registerSecondSurname'
                                        value={registerSecondSurname}
                                        onChange={onRegisterInputChange}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-md-3">
                                <Form.Group as={Col} xs={12} md={6} className="mb-3 mb-md-0" controlId="formCharge">
                                    <Form.Label>Cargo</Form.Label>
                                    <Form.Select aria-label="charge select"
                                        name='registerCharge'
                                        value={registerCharge}
                                        onChange={onRegisterInputChange}
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

                                <Form.Group as={Col} xs={12} md={6} className="mb-3 mb-md-0" controlId="formRole">
                                    <Form.Label>Permisos del usuario</Form.Label>
                                    <Form.Select aria-label="role select"
                                        name='registerRole'
                                        value={registerRole}
                                        onChange={onRegisterInputChange}
                                    >
                                        <option value="READER_ROLE">Lector</option>
                                        <option value="ADMIN_ROLE">Administrador</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} xs={12} md={6} className="mb-3 mb-md-0" controlId="formEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="persona@cedesdonbosco.ed.cr"
                                        name='registerEmail'
                                        value={registerEmail}
                                        onChange={onRegisterInputChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} md={6} controlId="formPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <InputGroup className="mb-3" hasValidation>
                                        <Form.Control
                                            type={passwordType}
                                            placeholder="Al menos 8 caracteres"
                                            name='registerPassword'
                                            value={registerPassword}
                                            onChange={onRegisterInputChange}
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
                            </Row>

                            <Button variant='primary' type='submit' className='mt-3'>
                                Registrar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RequestsPage