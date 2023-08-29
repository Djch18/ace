import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage3 = ({ page, formData: result, setFormData: setResult }) => {
  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Desempeño académico</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>10. Indicia tu promedio académico actual.</Form.Label>
          <Form.Control
            type="number"
            name='resultAverage'
            value={result.academic_performance.average}
            onChange={(e) => {
              setResult({ ...result, academic_performance: { ...result.academic_performance, average: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>11. Asignatura de mayor dificultad.</Form.Label>
          <Form.Select aria-label="charge select"
            name='resultMoreDifficultSubject'
            value={result.academic_performance.more_difficult_subject}
            onChange={(e) => {
              setResult({ ...result, academic_performance: { ...result.academic_performance, more_difficult_subject: e.target.value } });
            }}
          >
            <option>Elegir</option>
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
          <Form.Check
            label="Si"
            type='radio'
            name="resultAdequacy"
            className='mb-3'
            id='page-3-question-12-answer-1'
            value={1}
            checked={result.academic_performance.adequacy === '1'}
            onChange={(e) => {
              setResult({ ...result, academic_performance: { ...result.academic_performance, adequacy: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultAdequacy"
            id='page-3-question-12-answer-2'
            value={0}
            checked={result.academic_performance.adequacy === '0'}
            onChange={(e) => {
              setResult({ ...result, academic_performance: { ...result.academic_performance, adequacy: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>13. Indica una técnica que usas para aprender.</Form.Label>
          <Form.Control
            type="text"
            name='resultLearningTechnique'
            value={result.academic_performance.learning_technique}
            onChange={(e) => {
              setResult({ ...result, academic_performance: { ...result.academic_performance, learning_technique: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage3