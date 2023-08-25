import React from 'react'
import { Form } from 'react-bootstrap'

import '../../css/form/FormStyles.css'

const FormPage9 = ({ page }) => {

  // Object.entries(distribution).map(([key, value]) => {
  //   console.log(key + 'S')
  //   Object.entries(value).map(([key, value2]) => {
  //     console.log(value2)
  //   });
  // });

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Cambios conductuales y de interés</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>70. Cambios en el Apetito.</Form.Label>
          <Form.Check
            label="0. No he experimentado ningún cambio en mi apetito."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Mi apetito es un poco menor que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Mi apetito es un poco mayor que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Mi apetito es mucho menor que antes."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="4. Mi apetito es mucho mayor que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="5. No tengo apetito en absoluto."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="6. Quiero comer todo el día."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>71. Dificultad de concentración.</Form.Label>
          <Form.Check
            label="0. Puedo concentrarme tan bien como siempre."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. No puedo concentrarme tan bien como habitualmente."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Me es difícil mantener la mente en algo por mucho tiempo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Encuentro que no puedo concentrarme en nada."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>72. Cansancio o Fatiga.</Form.Label>
          <Form.Check
            label="0. No estoy más cansado o fatigado que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Me fatigo o me canso más fácilmente que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>73. Pérdida de interés en lo sexual.</Form.Label>
          <Form.Check
            label="0. No he notado ningún cambio reciente en mi interés por lo sexual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Estoy menos interesado en lo sexual de lo que solía estarlo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Estoy mucho menos interesado en lo sexual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. He perdido completamente el interés en lo sexual."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage9