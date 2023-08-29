import { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';

import { useAuthStore } from '../hooks/useAuthStore';

import '../css/components/Header.css';


const Header = () => {

    let userCharge, userChargeIcon = '';

    const { user } = useAuthStore();

    const [time, setTime] = useState(moment().locale('en').format('LT').toLocaleLowerCase());
    const [date, setDate] = useState(moment().locale('es').format("D MMM YYYY").split('.'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().locale('en').format('LT').toLocaleLowerCase());
            setDate(moment().locale('es').format("D MMM YYYY").split('.'));
        }, 1000);
        return () => clearInterval(interval)
    }, [])


    switch (user.charge) {
        case 'ADMINISTRATIVE':
            userCharge = 'Administración';
            userChargeIcon = 'clipboard';
            break;

        case 'STUDENT':
            userCharge = 'Estudiante';
            userChargeIcon = 'graduation-cap';
            break;

        case 'PASTORAL':
            userCharge = 'Pastoral';
            userChargeIcon = 'cross';
            break;

        case 'TEACHER':
            userCharge = 'Profesor';
            userChargeIcon = 'chalkboard-user';
            break;

        case 'PSYCHOLOGY':
            userCharge = 'Psicólogo';
            userChargeIcon = 'heart-circle-check';
            break;

        case 'REGISTRY':
            userCharge = 'Registro';
            userChargeIcon = 'box-archive';
            break;

        default:
            userCharge = 'Otro';
            userChargeIcon = 'user';
            break;
    }

    return (
        <header>
            <Navbar bg="light" className='py-3'>
                <Container fluid className='justify-content-end justify-content-sm-between'>
                    <div className='header-container'>
                        <Navbar.Brand className='p-0 m-0 w-100'>
                            Hola, {user.name}
                        </Navbar.Brand>
                        <p className='m-0 text-primary'>{time} {date}</p>
                    </div>

                    <div className='d-flex align-items-center' style={{ maxWidth: 256, gap: 16, overflow: 'hidden' }}>
                        {/* <i className="fas fa-bell fs-4"></i> */}
                        <div className='bg-secondary border rounded' style={{ height: 48 }}></div>

                        <div className='bg-primary d-flex justify-content-center align-items-center' style={{ width: 48, height: 48, borderRadius: 100, color: '#fff' }}>
                            <i className={'fas fa-' + userChargeIcon + ' fs-5'}></i>
                        </div>
                        <div className='header-container'>
                            <Navbar.Brand className='p-0'>
                                {user.name + ' ' + user.first_surname}
                            </Navbar.Brand>
                            <p className='m-0 text-muted'>{userCharge}</p>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header