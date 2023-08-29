import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage13 = ({ page, formData: result, setFormData: setResult }) => {
  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Recomendaciones</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formText">
          <Form.Label className='mb-4'>105. ¿Menciona alguna actividad extracurricular, que quisieras que tuviera el Colegio?</Form.Label>
          <Form.Control
            type="text"
            name='resultExtracurricularActivity'
            value={result.recommendations.extracurricular_activity}
            onChange={(e) => {
              setResult({ ...result, recommendations: { ...result.recommendations, extracurricular_activity: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formText">
          <Form.Label className='mb-4'>106. ¿Qué comentario merece el Colegio para mejorar?</Form.Label>
          <Form.Control
            type="text"
            name='resultCommentForImprovement'
            value={result.recommendations.comment_for_improvement}
            onChange={(e) => {
              setResult({ ...result, recommendations: { ...result.recommendations, comment_for_improvement: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formText">
          <Form.Label className='mb-4'>107. ¿Cuáles son las asignaturas que necesitan mejorar su calidad? Justifica</Form.Label>
          <Form.Control
            type="text"
            name='resultSubjectsToImprove'
            value={result.recommendations.subjects_to_improve}
            onChange={(e) => {
              setResult({ ...result, recommendations: { ...result.recommendations, subjects_to_improve: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage13