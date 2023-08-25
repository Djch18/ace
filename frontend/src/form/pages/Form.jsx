import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { FormProvider } from "../formContext/FormContext";

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

import '../../css/form/FormStyles.css'

const Form = () => {

    const [page, setPage] = useState(1);

    return (
        <FormProvider>
            <main style={{ backgroundColor: '#E2EEE0', minHeight: '100vh' }}>
                <Container>
                    <div className='form-container col-xs-12 col-sm-10 col-md-8 col-lg-6'>
                        <div className='main-form-information'>
                            <h1 className='fw-normal m-0'>Formulario - Análisis Psico-Estadístico</h1>
                            <hr />
                            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus molestias reprehenderit debitis cupiditate, reiciendis, harum quo quibusdam deserunt, culpa adipisci suscipit corrupti. Consectetur doloremque, consequuntur recusandae enim aliquid expedita.</p>
                        </div>

                        {
                            page === 1 ? <FormPage1 page={page} />
                                : page === 2 ? <FormPage2 page={page} />
                                    : page === 3 ? <FormPage3 page={page} />
                                        : page === 4 ? <FormPage4 page={page} />
                                            : page === 5 ? <FormPage5 page={page} />
                                                : page === 6 ? <FormPage6 page={page} />
                                                    : page === 7 ? <FormPage7 page={page} />
                                                        : page === 8 ? <FormPage8 page={page} />
                                                            : page === 9 ? <FormPage9 page={page} />
                                                                : page === 10 ? <FormPage10 page={page} />
                                                                    : page === 11 ? <FormPage11 page={page} />
                                                                        : page === 12 ? <FormPage12 page={page} />
                                                                            : <FormPage13 page={page} />
                        }

                        <div className='d-flex justify-content-start' style={{ gap: 16 }}>
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
                                onClick={() => {
                                    if (page === 13) {
                                        alert("FORM SUBMITTED");
                                    } else {
                                        setPage((page) => page + 1);
                                    }
                                }}
                            >
                                {page >= 13 ? 'Enviar' : 'Siguiente'}
                            </Button>
                        </div>
                    </div>
                </Container>
            </main>
        </FormProvider>

    )
}

export default Form