import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage10 = ({ page, formData: result, setFormData: setResult }) => {

  useEffect(() => {
    console.log(result.last_month_mood)
  }, [result])

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Estado de animo en el ultimo mes</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>74. En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultAffected"
            className='mb-3'
            id='page-10-question-74-answer-1'
            value={5}
            checked={result.last_month_mood.affected === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, affected: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultAffected"
            className='mb-3'
            id='page-10-question-74-answer-2'
            value={4}
            checked={result.last_month_mood.affected === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, affected: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultAffected"
            className='mb-3'
            id='page-10-question-74-answer-3'
            value={3}
            checked={result.last_month_mood.affected === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, affected: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultAffected"
            className='mb-3'
            id='page-10-question-74-answer-4'
            value={2}
            checked={result.last_month_mood.affected === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, affected: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultAffected"
            id='page-10-question-74-answer-5'
            value={1}
            checked={result.last_month_mood.affected === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, affected: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>75. En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultUnableToControl"
            className='mb-3'
            id='page-10-question-75-answer-1'
            value={5}
            checked={result.last_month_mood.unable_to_control === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, unable_to_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultUnableToControl"
            className='mb-3'
            id='page-10-question-75-answer-2'
            value={4}
            checked={result.last_month_mood.unable_to_control === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, unable_to_control: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultUnableToControl"
            className='mb-3'
            id='page-10-question-75-answer-3'
            value={3}
            checked={result.last_month_mood.unable_to_control === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, unable_to_control: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultUnableToControl"
            className='mb-3'
            id='page-10-question-75-answer-4'
            value={2}
            checked={result.last_month_mood.unable_to_control === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, unable_to_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultUnableToControl"
            id='page-10-question-75-answer-5'
            value={1}
            checked={result.last_month_mood.unable_to_control === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, unable_to_control: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>76. En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultStressed"
            className='mb-3'
            id='page-10-question-76-answer-1'
            value={5}
            checked={result.last_month_mood.stressed === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, stressed: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultStressed"
            className='mb-3'
            id='page-10-question-76-answer-2'
            value={4}
            checked={result.last_month_mood.stressed === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, stressed: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultStressed"
            className='mb-3'
            id='page-10-question-76-answer-3'
            value={3}
            checked={result.last_month_mood.stressed === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, stressed: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultStressed"
            className='mb-3'
            id='page-10-question-76-answer-4'
            value={2}
            checked={result.last_month_mood.stressed === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, stressed: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultStressed"
            id='page-10-question-76-answer-5'
            value={1}
            checked={result.last_month_mood.stressed === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, stressed: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>77. En el último mes, ¿con qué frecuencia ha manejado con éxito los pequeños problemas irritantes de la vida?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultSmallIrritatingProblems"
            className='mb-3'
            id='page-10-question-77-answer-1'
            value={1}
            checked={result.last_month_mood.small_irritating_problems === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, small_irritating_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultSmallIrritatingProblems"
            className='mb-3'
            id='page-10-question-77-answer-2'
            value={2}
            checked={result.last_month_mood.small_irritating_problems === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, small_irritating_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultSmallIrritatingProblems"
            className='mb-3'
            id='page-10-question-77-answer-3'
            value={3}
            checked={result.last_month_mood.small_irritating_problems === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, small_irritating_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultSmallIrritatingProblems"
            className='mb-3'
            id='page-10-question-77-answer-4'
            value={4}
            checked={result.last_month_mood.small_irritating_problems === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, small_irritating_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultSmallIrritatingProblems"
            id='page-10-question-77-answer-5'
            value={5}
            checked={result.last_month_mood.small_irritating_problems === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, small_irritating_problems: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>78. En el último mes, ¿con qué frecuencia ha sentido que ha afrontado efectivamente los cambios importantes que han estado ocurriendo en su vida?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultCopedEffectivelyWithChanges"
            className='mb-3'
            id='page-10-question-78-answer-1'
            value={1}
            checked={result.last_month_mood.coped_effectively_with_changes === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, coped_effectively_with_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultCopedEffectivelyWithChanges"
            className='mb-3'
            id='page-10-question-78-answer-2'
            value={2}
            checked={result.last_month_mood.coped_effectively_with_changes === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, coped_effectively_with_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultCopedEffectivelyWithChanges"
            className='mb-3'
            id='page-10-question-78-answer-3'
            value={3}
            checked={result.last_month_mood.coped_effectively_with_changes === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, coped_effectively_with_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultCopedEffectivelyWithChanges"
            className='mb-3'
            id='page-10-question-78-answer-4'
            value={4}
            checked={result.last_month_mood.coped_effectively_with_changes === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, coped_effectively_with_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultCopedEffectivelyWithChanges"
            id='page-10-question-78-answer-5'
            value={5}
            checked={result.last_month_mood.coped_effectively_with_changes === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, coped_effectively_with_changes: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>79. En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultConfidentToHandleProblems"
            className='mb-3'
            id='page-10-question-79-answer-1'
            value={1}
            checked={result.last_month_mood.confident_to_handle_problems === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, confident_to_handle_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultConfidentToHandleProblems"
            className='mb-3'
            id='page-10-question-79-answer-2'
            value={2}
            checked={result.last_month_mood.confident_to_handle_problems === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, confident_to_handle_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultConfidentToHandleProblems"
            className='mb-3'
            id='page-10-question-79-answer-3'
            value={3}
            checked={result.last_month_mood.confident_to_handle_problems === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, confident_to_handle_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultConfidentToHandleProblems"
            className='mb-3'
            id='page-10-question-79-answer-4'
            value={4}
            checked={result.last_month_mood.confident_to_handle_problems === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, confident_to_handle_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultConfidentToHandleProblems"
            id='page-10-question-79-answer-5'
            value={5}
            checked={result.last_month_mood.confident_to_handle_problems === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, confident_to_handle_problems: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>80. En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultThingsGoingWell"
            className='mb-3'
            id='page-10-question-80-answer-1'
            value={1}
            checked={result.last_month_mood.things_going_well === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, things_going_well: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultThingsGoingWell"
            className='mb-3'
            id='page-10-question-80-answer-2'
            value={2}
            checked={result.last_month_mood.things_going_well === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, things_going_well: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultThingsGoingWell"
            className='mb-3'
            id='page-10-question-80-answer-3'
            value={3}
            checked={result.last_month_mood.things_going_well === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, things_going_well: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultThingsGoingWell"
            className='mb-3'
            id='page-10-question-80-answer-4'
            value={4}
            checked={result.last_month_mood.things_going_well === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, things_going_well: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultThingsGoingWell"
            id='page-10-question-80-answer-5'
            value={5}
            checked={result.last_month_mood.things_going_well === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, things_going_well: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>81. En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultCantHandleToProblems"
            className='mb-3'
            id='page-10-question-81-answer-1'
            value={5}
            checked={result.last_month_mood.cant_handle_to_problems === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, cant_handle_to_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultCantHandleToProblems"
            className='mb-3'
            id='page-10-question-81-answer-2'
            value={4}
            checked={result.last_month_mood.cant_handle_to_problems === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, cant_handle_to_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultCantHandleToProblems"
            className='mb-3'
            id='page-10-question-81-answer-3'
            value={3}
            checked={result.last_month_mood.cant_handle_to_problems === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, cant_handle_to_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultCantHandleToProblems"
            className='mb-3'
            id='page-10-question-81-answer-4'
            value={2}
            checked={result.last_month_mood.cant_handle_to_problems === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, cant_handle_to_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultCantHandleToProblems"
            id='page-10-question-81-answer-5'
            value={1}
            checked={result.last_month_mood.cant_handle_to_problems === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, cant_handle_to_problems: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>82. En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultControlDifficulties"
            className='mb-3'
            id='page-10-question-82-answer-1'
            value={1}
            checked={result.last_month_mood.control_difficulties === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, control_difficulties: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultControlDifficulties"
            className='mb-3'
            id='page-10-question-82-answer-2'
            value={2}
            checked={result.last_month_mood.control_difficulties === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, control_difficulties: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultControlDifficulties"
            className='mb-3'
            id='page-10-question-82-answer-3'
            value={3}
            checked={result.last_month_mood.control_difficulties === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, control_difficulties: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultControlDifficulties"
            className='mb-3'
            id='page-10-question-82-answer-4'
            value={4}
            checked={result.last_month_mood.control_difficulties === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, control_difficulties: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultControlDifficulties"
            id='page-10-question-82-answer-5'
            value={5}
            checked={result.last_month_mood.control_difficulties === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, control_difficulties: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>83. En el ultimo mes, ¿con que frecuencia se ha sentido que tenia todo bajo control?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultUnderControl"
            className='mb-3'
            id='page-10-question-83-answer-1'
            value={1}
            checked={result.last_month_mood.under_control === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, under_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultUnderControl"
            className='mb-3'
            id='page-10-question-83-answer-2'
            value={2}
            checked={result.last_month_mood.under_control === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, under_control: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultUnderControl"
            className='mb-3'
            id='page-10-question-83-answer-3'
            value={3}
            checked={result.last_month_mood.under_control === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, under_control: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultUnderControl"
            className='mb-3'
            id='page-10-question-83-answer-4'
            value={4}
            checked={result.last_month_mood.under_control === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, under_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultUnderControl"
            id='page-10-question-83-answer-5'
            value={5}
            checked={result.last_month_mood.under_control === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, under_control: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>84. En el último mes, ¿con qué frecuencia ha estado enfadado porque las cosas que le han ocurrido estaban fuera de su control?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultAngryThingsOutOfControl"
            className='mb-3'
            id='page-10-question-84-answer-1'
            value={5}
            checked={result.last_month_mood.angry_things_out_of_control === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, angry_things_out_of_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultAngryThingsOutOfControl"
            className='mb-3'
            id='page-10-question-84-answer-2'
            value={4}
            checked={result.last_month_mood.angry_things_out_of_control === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, angry_things_out_of_control: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultAngryThingsOutOfControl"
            className='mb-3'
            id='page-10-question-84-answer-3'
            value={3}
            checked={result.last_month_mood.angry_things_out_of_control === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, angry_things_out_of_control: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultAngryThingsOutOfControl"
            className='mb-3'
            id='page-10-question-84-answer-4'
            value={2}
            checked={result.last_month_mood.angry_things_out_of_control === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, angry_things_out_of_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultAngryThingsOutOfControl"
            id='page-10-question-84-answer-5'
            value={1}
            checked={result.last_month_mood.angry_things_out_of_control === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, angry_things_out_of_control: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>85. En el último mes, ¿con qué frecuencia ha pensado sobre las cosas que le quedan por hacer?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultRemainThings"
            className='mb-3'
            id='page-10-question-85-answer-1'
            value={1}
            checked={result.last_month_mood.remain_things === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, remain_things: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultRemainThings"
            className='mb-3'
            id='page-10-question-85-answer-2'
            value={2}
            checked={result.last_month_mood.remain_things === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, remain_things: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultRemainThings"
            className='mb-3'
            id='page-10-question-85-answer-3'
            value={3}
            checked={result.last_month_mood.remain_things === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, remain_things: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultRemainThings"
            className='mb-3'
            id='page-10-question-85-answer-4'
            value={4}
            checked={result.last_month_mood.remain_things === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, remain_things: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultRemainThings"
            id='page-10-question-85-answer-5'
            value={5}
            checked={result.last_month_mood.remain_things === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, remain_things: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>86. En el último mes, ¿con qué frecuencia ha podido controlar la forma de pasar el tiempo?</Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultTimeControl"
            className='mb-3'
            id='page-10-question-86-answer-1'
            value={1}
            checked={result.last_month_mood.time_control === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, time_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultTimeControl"
            className='mb-3'
            id='page-10-question-86-answer-2'
            value={2}
            checked={result.last_month_mood.time_control === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, time_control: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultTimeControl"
            className='mb-3'
            id='page-10-question-86-answer-3'
            value={3}
            checked={result.last_month_mood.time_control === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, time_control: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultTimeControl"
            className='mb-3'
            id='page-10-question-86-answer-4'
            value={4}
            checked={result.last_month_mood.time_control === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, time_control: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultTimeControl"
            id='page-10-question-86-answer-5'
            value={5}
            checked={result.last_month_mood.time_control === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, time_control: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>87. En el último mes, ¿Con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?       </Form.Label>
          <Form.Check
            label="Nunca"
            type='radio'
            name="resultDifficultiesPilingUp"
            className='mb-3'
            id='page-10-question-87-answer-1'
            value={1}
            checked={result.last_month_mood.difficulties_piling_up === '1'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, difficulties_piling_up: e.target.value } });
            }}
          />
          <Form.Check
            label="Casi nunca"
            type='radio'
            name="resultDifficultiesPilingUp"
            className='mb-3'
            id='page-10-question-87-answer-2'
            value={2}
            checked={result.last_month_mood.difficulties_piling_up === '2'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, difficulties_piling_up: e.target.value } });
            }}
          />
          <Form.Check
            label="De vez en cuando"
            type='radio'
            name="resultDifficultiesPilingUp"
            className='mb-3'
            id='page-10-question-87-answer-3'
            value={3}
            checked={result.last_month_mood.difficulties_piling_up === '3'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, difficulties_piling_up: e.target.value } });
            }}
          />
          <Form.Check
            label="A menudo"
            type='radio'
            name="resultDifficultiesPilingUp"
            className='mb-3'
            id='page-10-question-87-answer-4'
            value={4}
            checked={result.last_month_mood.difficulties_piling_up === '4'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, difficulties_piling_up: e.target.value } });
            }}
          />
          <Form.Check
            label="Muy a menudo"
            type='radio'
            name="resultDifficultiesPilingUp"
            id='page-10-question-87-answer-5'
            value={5}
            checked={result.last_month_mood.difficulties_piling_up === '5'}
            onChange={(e) => {
              setResult({ ...result, last_month_mood: { ...result.last_month_mood, difficulties_piling_up: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage10