import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Container, Image, ProgressBar, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { useFormStore } from '../../hooks/useFormStore';

import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import FormPage4 from './FormPage4';
import FormPage5 from './FormPage5';
import FormPage6 from './FormPage6';
import FormPage7 from './FormPage7';
import FormPage8 from './FormPage8';
import FormPage9 from './FormPage9';
import FormPage10 from './FormPage10';
import FormPage11 from './FormPage11';
import FormPage12 from './FormPage12';
import FormPage13 from './FormPage13';
import banner from '../../assets/images/form/psychology_banner.jpeg'

import '../../css/form/FormStyles.css'

const Form = () => {

    const dispatch = useDispatch()

    const [page, setPage] = useState(1);

    const [student, setStudent] = useState({
        email: '',
        grade: '',
        birthday: '',
        gender: '',
        address: ''
    });

    const [result, setResult] = useState({
        email: student.email,
        grade: student.grade,
        family: {
            employment_status: '',
            family_type: '',
            quality_relationships: '',
            couple: ''
        },
        academic_performance: {
            average: undefined,
            more_difficult_subject: '',
            adequacy: '',
            learning_technique: ''
        },
        habits: {
            favorite_meal_time: '',
            weight: undefined,
            height: undefined,
            eat_times_day: '',
            take_medications: ''
        },
        self_esteem: {
            worthy_appreciation: '',
            good_qualities: '',
            do_things_well: '',
            positive_attitude: '',
            satisfied_myself: '',
            nothing_to_proud: '',
            i_failure: '',
            more_respect: '',
            useless: '',
            bad_person: ''
        },
        social_relationships: {
            make_friends_easily: '',
            bullying_from_classmates: '',
            bullying: '',
        },
        anxiety: {
            body_numb: '',
            heated: '',
            tremor_in_legs: '',
            unable_to_relax: '',
            fearing_the_worst: '',
            dizzy: '',
            strong_heartbeat: '',
            unstable: '',
            scared: '',
            nervous: '',
            blunted: '',
            tremor_in_hands: '',
            unsecure: '',
            scared_to_uncontrolled: '',
            suffocation: '',
            scared_to_die: '',
            with_scare: '',
            digestive_problems: '',
            fades: '',
            facial_blush: '',
            with_sweats: ''
        },
        depression: {
            sadness: '',
            pessimism: '',
            failure: '',
            loss_pleasure: '',
            feel_guilt: '',
            feel_punishment: '',
            discomfort: '',
            self_criticism: '',
            suicide_wishes: '',
            crying: '',
            agitation: '',
            loss_interest: '',
            indecision: '',
            devaluation: '',
            loss_energy: '',
            sleep_changes: '',
            irritability: ''
        },
        behavioral_interest_changes: {
            appetite_changes: '',
            difficulty_for_concentration: '',
            tired: '',
            loss_sexual_interest: ''
        },
        last_month_mood: {
            affected: '',
            unable_to_control: '',
            stressed: '',
            small_irritating_problems: '',
            coped_effectively_with_changes: '',
            confident_to_handle_problems: '',
            things_going_well: '',
            cant_handle_to_problems: '',
            control_difficulties: '',
            under_control: '',
            angry_things_out_of_control: '',
            remain_things: '',
            time_control: '',
            difficulties_piling_up: '',
        },
        education: {
            satisfied_teachers: '',
            satisfied_classmates_academic_performance: '',
            satisfied_academic_performance: '',
            satisfied_teachers_accompaniment: '',
            tolerance_respect: '',
            innovative_methodologies: '',
            update_school_program: '',
            implement_tics: '',
            satisfied_specialty_teachers_methodologies: '',
            satisfied_english_teachers_methodologies: '',
        },
        religion: {
            satisfied_evangelization_activities: '',
            satisfied_religious_classes: '',
            read_holy_scriptures: '',
            know_about_sacraments: '',
            communion_per_month: '',
            confess: '',
            in_religious_formation_meetings: ''
        },
        recommendations: {
            extracurricular_activity: '',
            comment_for_improvement: '',
            subjects_to_improve: ''
        }
    });

    const { checkFormCompleted, startSending, status, errorMessage } = useFormStore();

    const onSubmit = (event) => {
        event.preventDefault();

        startSending({ student, result })
    }

    useEffect(() => {

        checkFormCompleted();

        if (errorMessage !== undefined) {
            Swal.fire('Ups! Algo ha salido mal', errorMessage, 'error');
        }

    }, [errorMessage])

    if (status === 'checking') {
        return (
            <React.Fragment>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh"
                    }}
                >
                    <Spinner animation="border" />
                </div>
            </React.Fragment>
        )
    }

    if (status === 'sended') {
        return (
            <main style={{ backgroundColor: '#E2EEE0', minHeight: '100vh' }}>
                <Container>
                    <div className='form-container col-xs-12 col-sm-10 col-md-8 col-lg-6'>
                        <Image src={banner} fluid rounded />

                        <div className='main-form-information'>
                            <h1 className='fw-normal m-0'>Formulario - Análisis Psico-Estadístico</h1>
                            <hr />
                            <p>¡Se ha registrado su respuesta!</p>
                            <p className='m-0'>Muchas gracias por completar el formulario.</p>
                        </div>
                    </div>
                </Container>
            </main>
        )
    }

    if (status === 'not-sended') {
        return (
            <main style={{ backgroundColor: '#E2EEE0', minHeight: '100vh' }}>
                <Container>
                    <div className='form-container col-xs-12 col-sm-10 col-md-8 col-lg-6'>
                        <Image src={banner} fluid rounded />

                        <div className='main-form-information'>
                            <h1 className='fw-normal m-0'>Formulario - Análisis Psico-Estadístico</h1>
                            <hr />
                            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus molestias reprehenderit debitis cupiditate, reiciendis, harum quo quibusdam deserunt, culpa adipisci suscipit corrupti. Consectetur doloremque, consequuntur recusandae enim aliquid expedita.</p>
                        </div>

                        {
                            page === 1 ? <FormPage1 page={page} formData={student} setFormData={setStudent} />
                                : page === 2 ? <FormPage2 page={page} formData={result} setFormData={setResult} />
                                    : page === 3 ? <FormPage3 page={page} formData={result} setFormData={setResult} />
                                        : page === 4 ? <FormPage4 page={page} formData={result} setFormData={setResult} />
                                            : page === 5 ? <FormPage5 page={page} formData={result} setFormData={setResult} />
                                                : page === 6 ? <FormPage6 page={page} formData={result} setFormData={setResult} />
                                                    : page === 7 ? <FormPage7 page={page} formData={result} setFormData={setResult} />
                                                        : page === 8 ? <FormPage8 page={page} formData={result} setFormData={setResult} />
                                                            : page === 9 ? <FormPage9 page={page} formData={result} setFormData={setResult} />
                                                                : page === 10 ? <FormPage10 page={page} formData={result} setFormData={setResult} />
                                                                    : page === 11 ? <FormPage11 page={page} formData={result} setFormData={setResult} />
                                                                        : page === 12 ? <FormPage12 page={page} formData={result} setFormData={setResult} />
                                                                            : <FormPage13 page={page} formData={result} setFormData={setResult} />
                        }

                        <div className='d-flex justify-content-between align-items-center' style={{ gap: 16 }}>
                            <div className='d-flex' style={{ gap: 16 }}>
                                <Button
                                    variant='secondary'
                                    className={page === 1 ? 'd-none px-3 fw-semibold' : 'd-block px-3 fw-semibold'}
                                    onClick={() => {
                                        setPage((page) => page - 1);
                                    }}
                                >
                                    Atrás
                                </Button>
                                <Button
                                    variant={page >= 13 ? 'success' : 'light'}
                                    className='px-3 fw-semibold'
                                    onClick={(event) => {
                                        if (page === 13) {
                                            onSubmit(event);
                                        } else {
                                            setPage((page) => page + 1);
                                        }
                                    }}
                                >
                                    {page >= 13 ? 'Enviar' : 'Siguiente'}
                                </Button>
                            </div>

                            <ProgressBar variant="success" now={((page - 1) * 100) / 12} className='d-none d-sm-flex' style={{ flex: '1 1 auto' }} />

                            <h6 className='m-0'>Pagina {page} de 13</h6>
                        </div>
                    </div>
                </Container>
            </main>
        )
    }
}

export default Form