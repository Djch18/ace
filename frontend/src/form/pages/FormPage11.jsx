import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage11 = ({ page, formData: result, setFormData: setResult }) => {

  useEffect(() => {
    console.log(result.education)
  }, [result])

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
            type='radio'
            name="resultSatisfiedTeachers"
            className='mb-3'
            id='page-11-question-88-answer-1'
            value={1}
            checked={result.education.satisfied_teachers === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_teachers: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedTeachers"
            id='page-11-question-88-answer-2'
            value={0}
            checked={result.education.satisfied_teachers === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_teachers: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>89. Me siento satisfecho con el rendimiento académico de mis compañeros.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultSatisfiedClassmatesAcademicPerformance"
            className='mb-3'
            id='page-11-question-89-answer-1'
            value={1}
            checked={result.education.satisfied_classmates_academic_performance === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_classmates_academic_performance: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedClassmatesAcademicPerformance"
            id='page-11-question-89-answer-2'
            value={0}
            checked={result.education.satisfied_classmates_academic_performance === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_classmates_academic_performance: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>90. Me siento satisfecho con mi rendimiento académico.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultSatisfiedAcademicPerformance"
            className='mb-3'
            id='page-11-question-90-answer-1'
            value={1}
            checked={result.education.satisfied_academic_performance === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_academic_performance: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedAcademicPerformance"
            id='page-11-question-90-answer-2'
            value={0}
            checked={result.education.satisfied_academic_performance === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_academic_performance: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>91. Me siento satisfecho con el acompañamiento que me brindan mis profesores.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultSatisfiedTeachersAccompaniment"
            className='mb-3'
            id='page-11-question-91-answer-1'
            value={1}
            checked={result.education.satisfied_teachers_accompaniment === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_teachers_accompaniment: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedTeachersAccompaniment"
            id='page-11-question-91-answer-2'
            value={0}
            checked={result.education.satisfied_teachers_accompaniment === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_teachers_accompaniment: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>92. Existe un clima de tolerancia y respeto.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultToleranceRespect"
            className='mb-3'
            id='page-11-question-92-answer-1'
            value={1}
            checked={result.education.tolerance_respect === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, tolerance_respect: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultToleranceRespect"
            id='page-11-question-92-answer-2'
            value={0}
            checked={result.education.tolerance_respect === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, tolerance_respect: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>93. Los profesores utilizan metodologías activas y novedosas para que aprendas con facilidad.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultInnovativeMethodologies"
            className='mb-3'
            id='page-11-question-93-answer-1'
            value={1}
            checked={result.education.innovative_methodologies === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, innovative_methodologies: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultInnovativeMethodologies"
            id='page-11-question-93-answer-2'
            value={0}
            checked={result.education.innovative_methodologies === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, innovative_methodologies: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>94. Considero necesario que se actualice el Programa Curricular del colegio.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultUpdateSchoolProgram"
            className='mb-3'
            id='page-11-question-94-answer-1'
            value={1}
            checked={result.education.update_school_program === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, update_school_program: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultUpdateSchoolProgram"
            id='page-11-question-94-answer-2'
            value={0}
            checked={result.education.update_school_program === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, update_school_program: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>95. Se debe implementar más las TIC en el Aprendizaje.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultImplementTics"
            className='mb-3'
            id='page-11-question-95-answer-1'
            value={1}
            checked={result.education.implement_tics === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, implement_tics: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultImplementTics"
            id='page-11-question-95-answer-2'
            value={0}
            checked={result.education.implement_tics === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, implement_tics: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>96. Satisfecho con las metodologías de aprendizaje que  usa mi profesor en especialidad.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultSatisfiedSpecialtyTeachersMethodologies"
            className='mb-3'
            id='page-11-question-96-answer-1'
            value={1}
            checked={result.education.satisfied_specialty_teachers_methodologies === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_specialty_teachers_methodologies: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedSpecialtyTeachersMethodologies"
            id='page-11-question-96-answer-2'
            value={0}
            checked={result.education.satisfied_specialty_teachers_methodologies === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_specialty_teachers_methodologies: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>97. Satisfecho con metodologías que usa mi profe para aprender inglés.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultSatisfiedEnglishTeachersMethodologies"
            className='mb-3'
            id='page-11-question-97-answer-1'
            value={1}
            checked={result.education.satisfied_english_teachers_methodologies === '1'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_english_teachers_methodologies: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedEnglishTeachersMethodologies"
            id='page-11-question-97-answer-2'
            value={0}
            checked={result.education.satisfied_english_teachers_methodologies === '0'}
            onChange={(e) => {
              setResult({ ...result, education: { ...result.education, satisfied_english_teachers_methodologies: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage11