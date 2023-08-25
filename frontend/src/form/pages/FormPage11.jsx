import React from 'react'
import { Form } from 'react-bootstrap'

import '../../css/form/FormStyles.css'

const FormPage11 = ({ page }) => {

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Educación</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>88. Me siento satisfecho con el trabajo que realizan mis profesores.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>89. Me siento satisfecho con el rendimiento académico de mis compañeros.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>90. Me siento satisfecho con mi rendimiento académico.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>91. Me siento satisfecho con el acompañamiento que me brindan mis profesores.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>92. Existe un clima de tolerancia y respeto.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>93. Los profesores utilizan metodologías activas y novedosas para que aprendas con facilidad.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>94. Considero necesario que se actualice el Programa Curricular del colegio.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>95. Se debe implementar más las TIC en el Aprendizaje.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>96. Satisfecho con las metodologías de aprendizaje que  usa mi profesor en especialidad.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>97. Satisfecho con metodologías que usa mi profe para aprender inglés.</Form.Label>
          <Form.Check
            label="Si"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="No"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage11