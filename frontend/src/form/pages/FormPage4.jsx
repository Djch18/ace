import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage4 = ({ page, formData: result, setFormData: setResult }) => {
  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Hábitos</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>14. ¿Cual es tu tiempo de comida favorita?</Form.Label>
          <Form.Select aria-label="charge select"
            name='resultFavoriteMealTime'
            value={result.habits.favorite_meal_time}
            onChange={(e) => {
              setResult({ ...result, habits: { ...result.habits, favorite_meal_time: e.target.value } });
            }}
          >
            <option>Elegir</option>
            <option value="desayuno">Desayuno</option>
            <option value="merienda matutina">Merienda matutina</option>
            <option value="almuerzo">Almuerzo</option>
            <option value="merienda vespertina">Merienda vespertina</option>
            <option value="cena">Cena</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>15. Indique su peso en kilos.</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="150"
            name='resultWeight'
            value={result.habits.weight}
            onChange={(e) => {
              setResult({ ...result, habits: { ...result.habits, weight: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>16. Indique su estatura en centímetros.</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="220"
            name='resultHeight'
            value={result.habits.height}
            onChange={(e) => {
              setResult({ ...result, habits: { ...result.habits, height: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>17. ¿Cuantas veces comes al día?</Form.Label>
          <Form.Select aria-label="charge select"
            name='resultEatTimesDay'
            value={result.habits.eat_times_day}
            onChange={(e) => {
              setResult({ ...result, habits: { ...result.habits, eat_times_day: e.target.value } });
            }}
          >
            <option>Elegir</option>
            <option value="1">1 veces al día</option>
            <option value="2">2 veces al día</option>
            <option value="3">3 veces al día</option>
            <option value="4">4 veces al día</option>
            <option value="5">5 veces al día</option>
            <option value="+5">Más de 5 veces al día</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>18. ¿Tomas medicamento por indicación médica?</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultTakeMedications"
            className='mb-3'
            id='page-4-question-18-answer-1'
            value={1}
            checked={result.habits.take_medications === '1'}
            onChange={(e) => {
              setResult({ ...result, habits: { ...result.habits, take_medications: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultTakeMedications"
            id='page-4-question-18-answer-2'
            value={0}
            checked={result.habits.take_medications === '0'}
            onChange={(e) => {
              setResult({ ...result, habits: { ...result.habits, take_medications: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage4