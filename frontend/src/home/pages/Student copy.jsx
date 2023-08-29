import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Badge, Button, Col, Container, Form, Navbar, Row, Stack, Table } from 'react-bootstrap'

import { useStudentStore } from '../../hooks/useStudentStore';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../css/home/HomeGeneralStyles.css'

const Student = () => {

    const location = useLocation();
    const student = location.state

    const { result, startLoadingStudentResult, } = useStudentStore();


    useEffect(() => {
        startLoadingStudentResult(student.email);
    }, [])

    console.log(result)

    return (
        <div className="d-flex">
            <Sidebar currentPage={'students'} />

            <div className='main-content-wrapper'>
                <Header />

                <div className='content-wrapper'>
                    <div className='card-container border rounded col-xs-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5'>
                        <h4 className='m-0'>Información General</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Correo del estudiante: </h6>
                                <p className='m-0 pe-2'>{student.email}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Sección: </h6>
                                <p className='m-0 pe-2'>{student.grade}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Fecha de nacimiento: </h6>
                                <p className='m-0 pe-2'>{student.birthday}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Sexo: </h6>
                                <p className='m-0 pe-2'>{student.gender}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Canton de domicilio: </h6>
                                <p className='m-0 pe-2'>{student.email}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Puntaje: </h6>
                                <p className='m-0 pe-2'>{result.score}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Canton de domicilio: </h6>
                                <p className='m-0 pe-2'>
                                    {
                                        result.state === 'HEALTHY' ? 'saludable'
                                            : result.state === 'VULNERABLE' ? 'vulnerable'
                                                : 'en peligro'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded col-xs-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5'>
                        <h4 className='m-0'>Relaciones Familiares</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Tipo de familia: </h6>
                                <p className='m-0 pe-2'>{result.employment_status}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Tipo de familia: </h6>
                                <p className='m-0 pe-2'>{result.family_type}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Sección: </h6>
                                <p className='m-0 pe-2'>{result.quality_relationships}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Fecha de nacimiento: </h6>
                                <p className='m-0 pe-2'>{result.couple === '1' ? 'si' : 'no'}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded col-xs-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5'>
                        <h4 className='m-0'>Desempeño Académico</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Promedio académico: </h6>
                                <p className='m-0 pe-2'>{result.average}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Materia desafiante: </h6>
                                <p className='m-0 pe-2'>{result.more_difficult_subject}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Tiene adecuación:</h6>
                                <p className='m-0 pe-2'>{result.adequacy === '1' ? 'si' : 'no'}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Técnica de aprendizaje: </h6>
                                <p className='m-0 pe-2'>{result.learning_technique}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded col-xs-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5'>
                        <h4 className='m-0'>Información Medica</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Tiempo de comer favorito: </h6>
                                <p className='m-0 pe-2'>{result.favorite_meal_time}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Peso: </h6>
                                <p className='m-0 pe-2'>{result.weight}kg</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Altura: </h6>
                                <p className='m-0 pe-2'>{result.height}cm</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Veces que come al dia: </h6>
                                <p className='m-0 pe-2'>{result.eat_times_day}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Toma medicamentos:</h6>
                                <p className='m-0 pe-2'>{result.take_medications === '1' ? 'si' : 'no'}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded col-xs-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5'>
                        <h4 className='m-0'>Recomendaciones</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Actividad extracurricular: </h6>
                                <p className='m-0 pe-2'>{result.extracurricular_activity}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Comentario para mejorar:</h6>
                                <p className='m-0 pe-2'>{result.comment_for_improvement}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Materias a mejorar: </h6>
                                <p className='m-0 pe-2'>{result.subjects_to_improve}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded col-xs-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5'>
                        <h4 className='m-0'>Puntaje por Area Evaluada</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Autoestima: </h6>
                                <p className='m-0 pe-2'>{result.self_esteem}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Relaciones sociales:</h6>
                                <p className='m-0 pe-2'>{result.social_relationships}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Ansiedad: </h6>
                                <p className='m-0 pe-2'>{result.anxiety}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Depresión: </h6>
                                <p className='m-0 pe-2'>{result.depression}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Cambios de conducta: </h6>
                                <p className='m-0 pe-2'>{result.behavioral_interest_changes}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Estado de animo: </h6>
                                <p className='m-0 pe-2'>{result.last_month_mood}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Satisfacción (educación): </h6>
                                <p className='m-0 pe-2'>{result.education}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom pb-1'>
                                <h6 className='m-0 ps-2' style={{ minWidth: 196 }}>Religiosidad: </h6>
                                <p className='m-0 pe-2'>{result.religion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student