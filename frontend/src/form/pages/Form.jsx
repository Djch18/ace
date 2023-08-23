import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';

import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';

import '../../css/form/FormStyles.css'


const Form = () => {

    const [page, setPage] = useState(1);

    return (
        <main style={{ backgroundColor: '#eee', minHeight: '100vh' }}>
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
                                : <FormPage3 page={page} />
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
                            variant={page >= 3 ? 'success' : 'light'}
                            className='px-3 fw-semibold'
                            onClick={() => {
                                if (page === 3) {
                                    alert("FORM SUBMITTED");
                                } else {
                                    setPage((page) => page + 1);
                                }
                            }}
                        >
                            {page >= 3 ? 'Enviar' : 'Siguiente'}
                        </Button>
                    </div>
                </div>
            </Container>
        </main>

    )
}

export default Form