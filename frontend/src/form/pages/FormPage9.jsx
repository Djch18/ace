import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage9 = ({ page, formData: result, setFormData: setResult }) => {

  useEffect(() => {
    console.log(result.behavioral_interest_changes)
  }, [result])

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Cambios conductuales y de interés</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>70. Cambios en el Apetito.</Form.Label>
          <Form.Check
            label="No he experimentado ningún cambio en mi apetito."
            type='radio'
            name="resultAppetiteChanges"
            className='mb-3'
            id='page-9-question-70-answer-1'
            value={0}
            checked={result.behavioral_interest_changes.appetite_changes === '0'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, appetite_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Mi apetito es un poco menor que lo habitual."
            type='radio'
            name="resultAppetiteChanges"
            className='mb-3'
            id='page-9-question-70-answer-2'
            value={1}
            checked={result.behavioral_interest_changes.appetite_changes === '1'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, appetite_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Mi apetito es un poco mayor que lo habitual."
            type='radio'
            name="resultAppetiteChanges"
            className='mb-3'
            id='page-9-question-70-answer-3'
            value={1}
            checked={result.behavioral_interest_changes.appetite_changes === '1'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, appetite_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Mi apetito es mucho menor que antes."
            type='radio'
            name="resultAppetiteChanges"
            className='mb-3'
            id='page-9-question-70-answer-4'
            value={2}
            checked={result.behavioral_interest_changes.appetite_changes === '2'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, appetite_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Mi apetito es mucho mayor que lo habitual."
            type='radio'
            name="resultAppetiteChanges"
            className='mb-3'
            id='page-9-question-70-answer-5'
            value={2}
            checked={result.behavioral_interest_changes.appetite_changes === '2'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, appetite_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="No tengo apetito en absoluto."
            type='radio'
            name="resultAppetiteChanges"
            className='mb-3'
            id='page-9-question-70-answer-6'
            value={3}
            checked={result.behavioral_interest_changes.appetite_changes === '3'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, appetite_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Quiero comer todo el día."
            type='radio'
            name="resultAppetiteChanges"
            className='mb-3'
            id='page-9-question-70-answer-7'
            value={3}
            checked={result.behavioral_interest_changes.appetite_changes === '3'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, appetite_changes: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>71. Dificultad de concentración.</Form.Label>
          <Form.Check
            label="Puedo concentrarme tan bien como siempre."
            type='radio'
            name="resultDifficultyForConcentration"
            className='mb-3'
            id='page-9-question-71-answer-1'
            value={0}
            checked={result.behavioral_interest_changes.difficulty_for_concentration === '0'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, difficulty_for_concentration: e.target.value } });
            }}
          />
          <Form.Check
            label="No puedo concentrarme tan bien como habitualmente."
            type='radio'
            name="resultDifficultyForConcentration"
            className='mb-3'
            id='page-9-question-71-answer-2'
            value={1}
            checked={result.behavioral_interest_changes.difficulty_for_concentration === '1'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, difficulty_for_concentration: e.target.value } });
            }}
          />
          <Form.Check
            label="Me es difícil mantener la mente en algo por mucho tiempo."
            type='radio'
            name="resultDifficultyForConcentration"
            className='mb-3'
            id='page-9-question-71-answer-3'
            value={2}
            checked={result.behavioral_interest_changes.difficulty_for_concentration === '2'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, difficulty_for_concentration: e.target.value } });
            }}
          />
          <Form.Check
            label="Encuentro que no puedo concentrarme en nada."
            type='radio'
            name="resultDifficultyForConcentration"
            id='page-9-question-71-answer-4'
            value={3}
            checked={result.behavioral_interest_changes.difficulty_for_concentration === '3'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, difficulty_for_concentration: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>72. Cansancio o Fatiga.</Form.Label>
          <Form.Check
            label="No estoy más cansado o fatigado que lo habitual."
            type='radio'
            name="resultTired"
            className='mb-3'
            id='page-9-question-72-answer-1'
            value={0}
            checked={result.behavioral_interest_changes.tired === '0'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, tired: e.target.value } });
            }}
          />
          <Form.Check
            label="Me fatigo o me canso más fácilmente que lo habitual."
            type='radio'
            name="resultTired"
            className='mb-3'
            id='page-9-question-72-answer-2'
            value={1}
            checked={result.behavioral_interest_changes.tired === '1'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, tired: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer."
            type='radio'
            name="resultTired"
            className='mb-3'
            id='page-9-question-72-answer-3'
            value={2}
            checked={result.behavioral_interest_changes.tired === '2'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, tired: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer."
            type='radio'
            name="resultTired"
            id='page-9-question-72-answer-4'
            value={3}
            checked={result.behavioral_interest_changes.tired === '3'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, tired: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>73. Pérdida de interés en lo sexual.</Form.Label>
          <Form.Check
            label="No he notado ningún cambio reciente en mi interés por lo sexual."
            type='radio'
            name="resultLossSexualInterest"
            className='mb-3'
            id='page-9-question-73-answer-1'
            value={0}
            checked={result.behavioral_interest_changes.loss_sexual_interest === '0'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, loss_sexual_interest: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy menos interesado en lo sexual de lo que solía estarlo."
            type='radio'
            name="resultLossSexualInterest"
            className='mb-3'
            id='page-9-question-73-answer-2'
            value={1}
            checked={result.behavioral_interest_changes.loss_sexual_interest === '1'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, loss_sexual_interest: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy mucho menos interesado en lo sexual."
            type='radio'
            name="resultLossSexualInterest"
            className='mb-3'
            id='page-9-question-73-answer-3'
            value={2}
            checked={result.behavioral_interest_changes.loss_sexual_interest === '2'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, loss_sexual_interest: e.target.value } });
            }}
          />
          <Form.Check
            label="He perdido completamente el interés en lo sexual."
            type='radio'
            name="resultLossSexualInterest"
            id='page-9-question-73-answer-4'
            value={3}
            checked={result.behavioral_interest_changes.loss_sexual_interest === '3'}
            onChange={(e) => {
              setResult({ ...result, behavioral_interest_changes: { ...result.behavioral_interest_changes, loss_sexual_interest: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage9