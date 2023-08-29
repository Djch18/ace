import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage7 = ({ page, formData: result, setFormData: setResult }) => {

  // useEffect(() => {
  //   console.log(result.anxiety)
  // }, [result])

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Inquietud en el estudiante</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>32. Me siento torpe o como que mi cuerpo está entumecido.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultBodyNumb"
            className='mb-3'
            id='page-7-question-32-answer-1'
            value={1}
            checked={result.anxiety.body_numb === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, body_numb: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultBodyNumb"
            className='mb-3'
            id='page-7-question-32-answer-2'
            value={2}
            checked={result.anxiety.body_numb === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, body_numb: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultBodyNumb"
            className='mb-3'
            id='page-7-question-32-answer-3'
            value={3}
            checked={result.anxiety.body_numb === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, body_numb: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultBodyNumb"
            id='page-7-question-32-answer-4'
            value={4}
            checked={result.anxiety.body_numb === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, body_numb: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>33. Me siento acalorado.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultHeated"
            className='mb-3'
            id='page-7-question-33-answer-1'
            value={1}
            checked={result.anxiety.heated === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, heated: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultHeated"
            className='mb-3'
            id='page-7-question-33-answer-2'
            value={2}
            checked={result.anxiety.heated === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, heated: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultHeated"
            className='mb-3'
            id='page-7-question-33-answer-3'
            value={3}
            checked={result.anxiety.heated === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, heated: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultHeated"
            id='page-7-question-33-answer-4'
            value={4}
            checked={result.anxiety.heated === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, heated: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>34. Me he sentido con temblor en las piernas.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultTremorInLegs"
            className='mb-3'
            id='page-7-question-34-answer-1'
            value={1}
            checked={result.anxiety.tremor_in_legs === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_legs: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultTremorInLegs"
            className='mb-3'
            id='page-7-question-34-answer-2'
            value={2}
            checked={result.anxiety.tremor_in_legs === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_legs: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultTremorInLegs"
            className='mb-3'
            id='page-7-question-34-answer-3'
            value={3}
            checked={result.anxiety.tremor_in_legs === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_legs: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultTremorInLegs"
            id='page-7-question-34-answer-4'
            value={4}
            checked={result.anxiety.tremor_in_legs === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_legs: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>35. Incapaz de relajarme.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultUnableToRelax"
            className='mb-3'
            id='page-7-question-35-answer-1'
            value={1}
            checked={result.anxiety.unable_to_relax === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unable_to_relax: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultUnableToRelax"
            className='mb-3'
            id='page-7-question-35-answer-2'
            value={2}
            checked={result.anxiety.unable_to_relax === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unable_to_relax: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultUnableToRelax"
            className='mb-3'
            id='page-7-question-35-answer-3'
            value={3}
            checked={result.anxiety.unable_to_relax === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unable_to_relax: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultUnableToRelax"
            id='page-7-question-35-answer-4'
            value={4}
            checked={result.anxiety.unable_to_relax === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unable_to_relax: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>36. Con temor a que ocurra lo peor.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultFearingTheWorst"
            className='mb-3'
            id='page-7-question-36-answer-1'
            value={1}
            checked={result.anxiety.fearing_the_worst === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fearing_the_worst: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultFearingTheWorst"
            className='mb-3'
            id='page-7-question-36-answer-2'
            value={2}
            checked={result.anxiety.fearing_the_worst === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fearing_the_worst: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultFearingTheWorst"
            className='mb-3'
            id='page-7-question-36-answer-3'
            value={3}
            checked={result.anxiety.fearing_the_worst === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fearing_the_worst: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultFearingTheWorst"
            id='page-7-question-36-answer-4'
            value={4}
            checked={result.anxiety.fearing_the_worst === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fearing_the_worst: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>37. Mareado, o que se le va la cabeza.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultDizzy"
            className='mb-3'
            id='page-7-question-37-answer-1'
            value={1}
            checked={result.anxiety.dizzy === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, dizzy: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultDizzy"
            className='mb-3'
            id='page-7-question-37-answer-2'
            value={2}
            checked={result.anxiety.dizzy === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, dizzy: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultDizzy"
            className='mb-3'
            id='page-7-question-37-answer-3'
            value={3}
            checked={result.anxiety.dizzy === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, dizzy: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultDizzy"
            id='page-7-question-37-answer-4'
            value={4}
            checked={result.anxiety.dizzy === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, dizzy: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>38. Con latidos del corazón fuertes y acelerados.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultStrongHeartbeat"
            className='mb-3'
            id='page-7-question-38-answer-1'
            value={1}
            checked={result.anxiety.strong_heartbeat === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, strong_heartbeat: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultStrongHeartbeat"
            className='mb-3'
            id='page-7-question-38-answer-2'
            value={2}
            checked={result.anxiety.strong_heartbeat === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, strong_heartbeat: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultStrongHeartbeat"
            className='mb-3'
            id='page-7-question-38-answer-3'
            value={3}
            checked={result.anxiety.strong_heartbeat === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, strong_heartbeat: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultStrongHeartbeat"
            id='page-7-question-38-answer-4'
            value={4}
            checked={result.anxiety.strong_heartbeat === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, strong_heartbeat: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>39. Inestable.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultUnstable"
            className='mb-3'
            id='page-7-question-39-answer-1'
            value={1}
            checked={result.anxiety.unstable === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unstable: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultUnstable"
            className='mb-3'
            id='page-7-question-39-answer-2'
            value={2}
            checked={result.anxiety.unstable === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unstable: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultUnstable"
            className='mb-3'
            id='page-7-question-39-answer-3'
            value={3}
            checked={result.anxiety.unstable === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unstable: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultUnstable"
            id='page-7-question-39-answer-4'
            value={4}
            checked={result.anxiety.unstable === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unstable: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>40. Atemorizado o asustado.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultScared"
            className='mb-3'
            id='page-7-question-40-answer-1'
            value={1}
            checked={result.anxiety.scared === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultScared"
            className='mb-3'
            id='page-7-question-40-answer-2'
            value={2}
            checked={result.anxiety.scared === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultScared"
            className='mb-3'
            id='page-7-question-40-answer-3'
            value={3}
            checked={result.anxiety.scared === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultScared"
            id='page-7-question-40-answer-4'
            value={4}
            checked={result.anxiety.scared === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>41. Nervioso.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultNervous"
            className='mb-3'
            id='page-7-question-41-answer-1'
            value={1}
            checked={result.anxiety.nervous === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, nervous: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultNervous"
            className='mb-3'
            id='page-7-question-41-answer-2'
            value={2}
            checked={result.anxiety.nervous === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, nervous: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultNervous"
            className='mb-3'
            id='page-7-question-41-answer-3'
            value={3}
            checked={result.anxiety.nervous === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, nervous: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultNervous"
            id='page-7-question-41-answer-4'
            value={4}
            checked={result.anxiety.nervous === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, nervous: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>42. Con sensación de bloqueo.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultBlunted"
            className='mb-3'
            id='page-7-question-42-answer-1'
            value={1}
            checked={result.anxiety.blunted === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, blunted: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultBlunted"
            className='mb-3'
            id='page-7-question-42-answer-2'
            value={2}
            checked={result.anxiety.blunted === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, blunted: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultBlunted"
            className='mb-3'
            id='page-7-question-42-answer-3'
            value={3}
            checked={result.anxiety.blunted === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, blunted: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultBlunted"
            id='page-7-question-42-answer-4'
            value={4}
            checked={result.anxiety.blunted === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, blunted: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>43. Con temblores en las manos.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultTremorInHands"
            className='mb-3'
            id='page-7-question-43-answer-1'
            value={1}
            checked={result.anxiety.tremor_in_hands === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_hands: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultTremorInHands"
            className='mb-3'
            id='page-7-question-43-answer-2'
            value={2}
            checked={result.anxiety.tremor_in_hands === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_hands: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultTremorInHands"
            className='mb-3'
            id='page-7-question-43-answer-3'
            value={3}
            checked={result.anxiety.tremor_in_hands === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_hands: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultTremorInHands"
            id='page-7-question-43-answer-4'
            value={4}
            checked={result.anxiety.tremor_in_hands === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, tremor_in_hands: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>44. Inquieto, inseguro.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultUnsecure"
            className='mb-3'
            id='page-7-question-44-answer-1'
            value={1}
            checked={result.anxiety.unsecure === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unsecure: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultUnsecure"
            className='mb-3'
            id='page-7-question-44-answer-2'
            value={2}
            checked={result.anxiety.unsecure === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unsecure: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultUnsecure"
            className='mb-3'
            id='page-7-question-44-answer-3'
            value={3}
            checked={result.anxiety.unsecure === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unsecure: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultUnsecure"
            id='page-7-question-44-answer-4'
            value={4}
            checked={result.anxiety.unsecure === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, unsecure: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>45. Con miedo a perder el control.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultScaredToUncontrolled"
            className='mb-3'
            id='page-7-question-45-answer-1'
            value={1}
            checked={result.anxiety.scared_to_uncontrolled === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_uncontrolled: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultScaredToUncontrolled"
            className='mb-3'
            id='page-7-question-45-answer-2'
            value={2}
            checked={result.anxiety.scared_to_uncontrolled === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_uncontrolled: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultScaredToUncontrolled"
            className='mb-3'
            id='page-7-question-45-answer-3'
            value={3}
            checked={result.anxiety.scared_to_uncontrolled === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_uncontrolled: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultScaredToUncontrolled"
            id='page-7-question-45-answer-4'
            value={4}
            checked={result.anxiety.scared_to_uncontrolled === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_uncontrolled: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>46. Con sensación de ahogo.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultSuffocation"
            className='mb-3'
            id='page-7-question-46-answer-1'
            value={1}
            checked={result.anxiety.suffocation === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, suffocation: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultSuffocation"
            className='mb-3'
            id='page-7-question-46-answer-2'
            value={2}
            checked={result.anxiety.suffocation === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, suffocation: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultSuffocation"
            className='mb-3'
            id='page-7-question-46-answer-3'
            value={3}
            checked={result.anxiety.suffocation === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, suffocation: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultSuffocation"
            id='page-7-question-46-answer-4'
            value={4}
            checked={result.anxiety.suffocation === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, suffocation: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>47. Con temor a morir.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultScaredToDie"
            className='mb-3'
            id='page-7-question-47-answer-1'
            value={1}
            checked={result.anxiety.scared_to_die === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_die: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultScaredToDie"
            className='mb-3'
            id='page-7-question-47-answer-2'
            value={2}
            checked={result.anxiety.scared_to_die === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_die: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultScaredToDie"
            className='mb-3'
            id='page-7-question-47-answer-3'
            value={3}
            checked={result.anxiety.scared_to_die === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_die: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultScaredToDie"
            id='page-7-question-47-answer-4'
            value={4}
            checked={result.anxiety.scared_to_die === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, scared_to_die: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>48. Con miedo.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultWithScare"
            className='mb-3'
            id='page-7-question-48-answer-1'
            value={1}
            checked={result.anxiety.with_scare === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_scare: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultWithScare"
            className='mb-3'
            id='page-7-question-48-answer-2'
            value={2}
            checked={result.anxiety.with_scare === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_scare: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultWithScare"
            className='mb-3'
            id='page-7-question-48-answer-3'
            value={3}
            checked={result.anxiety.with_scare === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_scare: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultWithScare"
            id='page-7-question-48-answer-4'
            value={4}
            checked={result.anxiety.with_scare === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_scare: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>49. Con problemas digestivos.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultDigestiveProblems"
            className='mb-3'
            id='page-7-question-49-answer-1'
            value={1}
            checked={result.anxiety.digestive_problems === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, digestive_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultDigestiveProblems"
            className='mb-3'
            id='page-7-question-49-answer-2'
            value={2}
            checked={result.anxiety.digestive_problems === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, digestive_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultDigestiveProblems"
            className='mb-3'
            id='page-7-question-49-answer-3'
            value={3}
            checked={result.anxiety.digestive_problems === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, digestive_problems: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultDigestiveProblems"
            id='page-7-question-49-answer-4'
            value={4}
            checked={result.anxiety.digestive_problems === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, digestive_problems: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>50. Con desvanecimientos.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultFades"
            className='mb-3'
            id='page-7-question-50-answer-1'
            value={1}
            checked={result.anxiety.fades === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fades: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultFades"
            className='mb-3'
            id='page-7-question-50-answer-2'
            value={2}
            checked={result.anxiety.fades === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fades: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultFades"
            className='mb-3'
            id='page-7-question-50-answer-3'
            value={3}
            checked={result.anxiety.fades === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fades: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultFades"
            id='page-7-question-50-answer-4'
            value={4}
            checked={result.anxiety.fades === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, fades: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>51. Con rubor facial.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultFacialBlush"
            className='mb-3'
            id='page-7-question-51-answer-1'
            value={1}
            checked={result.anxiety.facial_blush === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, facial_blush: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultFacialBlush"
            className='mb-3'
            id='page-7-question-51-answer-2'
            value={2}
            checked={result.anxiety.facial_blush === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, facial_blush: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultFacialBlush"
            className='mb-3'
            id='page-7-question-51-answer-3'
            value={3}
            checked={result.anxiety.facial_blush === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, facial_blush: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultFacialBlush"
            id='page-7-question-51-answer-4'
            value={4}
            checked={result.anxiety.facial_blush === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, facial_blush: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>52. Con sudores, fríos o calientes.</Form.Label>
          <Form.Check
            label="En lo absoluto"
            type='radio'
            name="resultWithSweats"
            className='mb-3'
            id='page-7-question-52-answer-1'
            value={1}
            checked={result.anxiety.with_sweats === '1'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_sweats: e.target.value } });
            }}
          />
          <Form.Check
            label="Levemente"
            type='radio'
            name="resultWithSweats"
            className='mb-3'
            id='page-7-question-52-answer-2'
            value={2}
            checked={result.anxiety.with_sweats === '2'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_sweats: e.target.value } });
            }}
          />
          <Form.Check
            label="Moderadamente"
            type='radio'
            name="resultWithSweats"
            className='mb-3'
            id='page-7-question-52-answer-3'
            value={3}
            checked={result.anxiety.with_sweats === '3'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_sweats: e.target.value } });
            }}
          />
          <Form.Check
            label="Severamente"
            type='radio'
            name="resultWithSweats"
            id='page-7-question-52-answer-4'
            value={4}
            checked={result.anxiety.with_sweats === '4'}
            onChange={(e) => {
              setResult({ ...result, anxiety: { ...result.anxiety, with_sweats: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage7