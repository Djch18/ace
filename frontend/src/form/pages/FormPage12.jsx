import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage12 = ({ page, formData: result, setFormData: setResult }) => {

  useEffect(() => {
    console.log(result.religion)
  }, [result])

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Religión</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>98. Me siento satisfecho con actividades evangelización y formación religiosa que brinda el Colegio.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultSatisfiedEvangelizationActivities"
            className='mb-3'
            id='page-12-question-98-answer-1'
            value={1}
            checked={result.religion.satisfied_evangelization_activities === '1'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, satisfied_evangelization_activities: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedEvangelizationActivities"
            id='page-12-question-98-answer-2'
            value={0}
            checked={result.religion.satisfied_evangelization_activities === '0'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, satisfied_evangelization_activities: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>99. Me siento satisfecho con lo aprendido en clases de Educación religiosa.</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultSatisfiedReligiousClasses"
            className='mb-3'
            id='page-12-question-99-answer-1'
            value={1}
            checked={result.religion.satisfied_religious_classes === '1'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, satisfied_religious_classes: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultSatisfiedReligiousClasses"
            id='page-12-question-99-answer-2'
            value={0}
            checked={result.religion.satisfied_religious_classes === '0'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, satisfied_religious_classes: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>100. ¿Cuánto acostumbra a leer las sagradas escrituras?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultReadHolyScriptures"
            className='mb-3'
            id='page-12-question-100-answer-1'
            value='0'
            checked={result.religion.read_holy_scriptures === '0'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, read_holy_scriptures: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy poco"
            type='radio'
            name="resultReadHolyScriptures"
            className='mb-3'
            id='page-12-question-100-answer-2'
            value='1'
            checked={result.religion.read_holy_scriptures === '1'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, read_holy_scriptures: e.target.value } });
            }}
          />
          <Form.Check
            label="Poco"
            type='radio'
            name="resultReadHolyScriptures"
            className='mb-3'
            id='page-12-question-100-answer-3'
            value='2'
            checked={result.religion.read_holy_scriptures === '2'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, read_holy_scriptures: e.target.value } });
            }}
          />
          <Form.Check
            label="Mucho"
            type='radio'
            name="resultReadHolyScriptures"
            id='page-12-question-100-answer-4'
            value='3'
            checked={result.religion.read_holy_scriptures === '3'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, read_holy_scriptures: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>101. ¿Cuánto conoce sobre los sacramentos?</Form.Label>
          <Form.Check
            label="Nada"
            type='radio'
            name="resultKnowAboutSacraments"
            className='mb-3'
            id='page-12-question-101-answer-1'
            value='0'
            checked={result.religion.know_about_sacraments === '0'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, know_about_sacraments: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy poco"
            type='radio'
            name="resultKnowAboutSacraments"
            className='mb-3'
            id='page-12-question-101-answer-2'
            value='1'
            checked={result.religion.know_about_sacraments === '1'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, know_about_sacraments: e.target.value } });
            }}
          />
          <Form.Check
            label="Poco"
            type='radio'
            name="resultKnowAboutSacraments"
            className='mb-3'
            id='page-12-question-101-answer-3'
            value='2'
            checked={result.religion.know_about_sacraments === '2'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, know_about_sacraments: e.target.value } });
            }}
          />
          <Form.Check
            label="Mucho"
            type='radio'
            name="resultKnowAboutSacraments"
            id='page-12-question-101-answer-4'
            value='3'
            checked={result.religion.know_about_sacraments === '3'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, know_about_sacraments: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>102. ¿Con qué frecuencias comulgas al mes?</Form.Label>
          <Form.Select aria-label="charge select"
            name='resultCommunionPerMonth'
            value={result.religion.communion_per_month}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, communion_per_month: e.target.value } });
            }}
          >
            <option>Elegir</option>
            <option value="0">No comulgo</option>
            <option value="1">1 vez al mes</option>
            <option value="2">2 veces al mes</option>
            <option value="3">3 veces al mes</option>
            <option value="4">4 veces al mes</option>
            <option value="5">Más de 4 veces al mes</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>103. ¿Con qué frecuencias te confiesas?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultConfess"
            className='mb-3'
            id='page-12-question-103-answer-1'
            value='0'
            checked={result.religion.confess === '0'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, confess: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy poco"
            type='radio'
            name="resultConfess"
            className='mb-3'
            id='page-12-question-103-answer-2'
            value='1'
            checked={result.religion.confess === '1'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, confess: e.target.value } });
            }}
          />
          <Form.Check
            label="Poco"
            type='radio'
            name="resultConfess"
            className='mb-3'
            id='page-12-question-103-answer-3'
            value='2'
            checked={result.religion.confess === '2'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, confess: e.target.value } });
            }}
          />
          <Form.Check
            label="Mucho"
            type='radio'
            name="resultConfess"
            id='page-12-question-103-answer-4'
            value='3'
            checked={result.religion.confess === '3'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, confess: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>104. ¿Participas en encuentros de formación religiosa?</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultInReligiousFormationMeetings"
            className='mb-3'
            id='page-12-question-104-answer-1'
            value={1}
            checked={result.religion.in_religious_formation_meetings === '1'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, in_religious_formation_meetings: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultInReligiousFormationMeetings"
            id='page-12-question-104-answer-2'
            value={0}
            checked={result.religion.in_religious_formation_meetings === '0'}
            onChange={(e) => {
              setResult({ ...result, religion: { ...result.religion, in_religious_formation_meetings: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage12