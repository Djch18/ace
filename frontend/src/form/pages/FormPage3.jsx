import React from 'react'
import { Form } from 'react-bootstrap'

import '../../css/form/FormStyles.css'

const FormPage3 = ({ page }) => {
  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Información personal y académica del estudiante</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>9. ¿Tienes novia(o)?</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled>Elegir</option>
            <option value="no">No</option>
            <option value="si">Si</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>10. Indicia tu promedio académico actual</Form.Label>
          <Form.Control
            type="number"
          // name='loginEmail'
          // value={loginEmail}
          // onChange={onInputChange}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>11. Asignatura de mayor dificultad</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled>Elegir</option>
            <option value="biología">Biología</option>
            <option value="ciencias">Ciencias</option>
            <option value="cívica">Cívica</option>
            <option value="educación física">Educación física</option>
            <option value="Español">Español</option>
            <option value="especialidad">Especialidad</option>
            <option value="estudios sociales">Estudios sociales</option>
            <option value="ética">Ética</option>
            <option value="física">Física</option>
            <option value="ingles académico">Ingles académico</option>
            <option value="ingles conversacional">Ingles conversacional</option>
            <option value="ingles técnico">Ingles técnico</option>
            <option value="matemáticas">Matemáticas</option>
            <option value="música">Música</option>
            <option value="química">Química</option>
            <option value="religion">Religion</option>
            <option value="taller exploratorio">Taller exploratorio</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>12. ¿Tienes adecuación?</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled>Elegir</option>
            <option value="no">No</option>
            <option value="si">Si</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>13. Indica una técnica que usas para aprender</Form.Label>
          <Form.Control
            type="text"
          // name='loginEmail'
          // value={loginEmail}
          // onChange={onInputChange}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage3