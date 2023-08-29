import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage8 = ({ page, formData: result, setFormData: setResult }) => {

  useEffect(() => {
    console.log(result.depression)
  }, [result])

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Desánimo en el estudiante</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>53. Tristeza.</Form.Label>
          <Form.Check
            label="No me siento triste"
            type='radio'
            name="resultSadness"
            className='mb-3'
            id='page-8-question-53-answer-1'
            value={0}
            checked={result.depression.sadness === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sadness: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento triste gran parte del tiempo."
            type='radio'
            name="resultSadness"
            className='mb-3'
            id='page-8-question-53-answer-2'
            value={1}
            checked={result.depression.sadness === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sadness: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento triste todo el tiempo."
            type='radio'
            name="resultSadness"
            className='mb-3'
            id='page-8-question-53-answer-3'
            value={2}
            checked={result.depression.sadness === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sadness: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento tan triste o soy tan infeliz que no puedo soportarlo."
            type='radio'
            name="resultSadness"
            id='page-8-question-53-answer-4'
            value={3}
            checked={result.depression.sadness === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sadness: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>54. Pesimismo.</Form.Label>
          <Form.Check
            label="No estoy desalentado respecto de mi futuro."
            type='radio'
            name="resultPessimism"
            className='mb-3'
            id='page-8-question-54-answer-1'
            value={0}
            checked={result.depression.pessimism === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, pessimism: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento más desalentado respecto de mi futuro que lo que solía estarlo."
            type='radio'
            name="resultPessimism"
            className='mb-3'
            id='page-8-question-54-answer-2'
            value={1}
            checked={result.depression.pessimism === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, pessimism: e.target.value } });
            }}
          />
          <Form.Check
            label="No espero que las cosas funcionen para mí."
            type='radio'
            name="resultPessimism"
            className='mb-3'
            id='page-8-question-54-answer-3'
            value={2}
            checked={result.depression.pessimism === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, pessimism: e.target.value } });
            }}
          />
          <Form.Check
            label="Siento que no hay esperanza para mi futuro y que sólo puede empeorar."
            type='radio'
            name="resultPessimism"
            id='page-8-question-54-answer-4'
            value={3}
            checked={result.depression.pessimism === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, pessimism: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>55. Fracaso.</Form.Label>
          <Form.Check
            label="No me siento como un fracasado."
            type='radio'
            name="resultFailure"
            className='mb-3'
            id='page-8-question-55-answer-1'
            value={0}
            checked={result.depression.failure === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, failure: e.target.value } });
            }}
          />
          <Form.Check
            label="He fracasado más de lo que hubiera debido."
            type='radio'
            name="resultFailure"
            className='mb-3'
            id='page-8-question-55-answer-2'
            value={1}
            checked={result.depression.failure === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, failure: e.target.value } });
            }}
          />
          <Form.Check
            label="Cuando miro hacia atrás, veo muchos fracasos."
            type='radio'
            name="resultFailure"
            className='mb-3'
            id='page-8-question-55-answer-3'
            value={2}
            checked={result.depression.failure === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, failure: e.target.value } });
            }}
          />
          <Form.Check
            label="Siento que como persona soy un fracaso total."
            type='radio'
            name="resultFailure"
            id='page-8-question-55-answer-4'
            value={3}
            checked={result.depression.failure === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, failure: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>56. Pérdida de placer.</Form.Label>
          <Form.Check
            label="Obtengo tanto placer como siempre por las cosas de las que disfruto."
            type='radio'
            name="resultLossPleasure"
            className='mb-3'
            id='page-8-question-56-answer-1'
            value={0}
            checked={result.depression.loss_pleasure === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_pleasure: e.target.value } });
            }}
          />
          <Form.Check
            label="No disfruto tanto de las cosas como solía hacerlo."
            type='radio'
            name="resultLossPleasure"
            className='mb-3'
            id='page-8-question-56-answer-2'
            value={1}
            checked={result.depression.loss_pleasure === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_pleasure: e.target.value } });
            }}
          />
          <Form.Check
            label="Obtengo muy poco placer de las cosas que solía disfrutar."
            type='radio'
            name="resultLossPleasure"
            className='mb-3'
            id='page-8-question-56-answer-3'
            value={2}
            checked={result.depression.loss_pleasure === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_pleasure: e.target.value } });
            }}
          />
          <Form.Check
            label="No puedo obtener ningún placer de las cosas de las que solía disfrutar."
            type='radio'
            name="resultLossPleasure"
            id='page-8-question-56-answer-4'
            value={3}
            checked={result.depression.loss_pleasure === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_pleasure: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>57. Sentimiento de culpa.</Form.Label>
          <Form.Check
            label="No me siento particularmente culpable."
            type='radio'
            name="resultFeelGuilt"
            className='mb-3'
            id='page-8-question-57-answer-1'
            value={0}
            checked={result.depression.feel_guilt === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_guilt: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho."
            type='radio'
            name="resultFeelGuilt"
            className='mb-3'
            id='page-8-question-57-answer-2'
            value={1}
            checked={result.depression.feel_guilt === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_guilt: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento bastante culpable la mayor parte del tiempo."
            type='radio'
            name="resultFeelGuilt"
            className='mb-3'
            id='page-8-question-57-answer-3'
            value={2}
            checked={result.depression.feel_guilt === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_guilt: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento culpable todo el tiempo."
            type='radio'
            name="resultFeelGuilt"
            id='page-8-question-57-answer-4'
            value={3}
            checked={result.depression.feel_guilt === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_guilt: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>58. Sentimientos de castigo.</Form.Label>
          <Form.Check
            label="No siento que este siendo castigado."
            type='radio'
            name="resultFeelPunishment"
            className='mb-3'
            id='page-8-question-58-answer-1'
            value={0}
            checked={result.depression.feel_punishment === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_punishment: e.target.value } });
            }}
          />
          <Form.Check
            label="Siento que tal vez pueda ser castigado."
            type='radio'
            name="resultFeelPunishment"
            className='mb-3'
            id='page-8-question-58-answer-2'
            value={1}
            checked={result.depression.feel_punishment === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_punishment: e.target.value } });
            }}
          />
          <Form.Check
            label="Espero ser castigado."
            type='radio'
            name="resultFeelPunishment"
            className='mb-3'
            id='page-8-question-58-answer-3'
            value={2}
            checked={result.depression.feel_punishment === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_punishment: e.target.value } });
            }}
          />
          <Form.Check
            label="Siento que estoy siendo castigado."
            type='radio'
            name="resultFeelPunishment"
            id='page-8-question-58-answer-4'
            value={3}
            checked={result.depression.feel_punishment === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, feel_punishment: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>59. Disconformidad con uno mismo.</Form.Label>
          <Form.Check
            label="Siento acerca de mi lo mismo que siempre."
            type='radio'
            name="resultDiscomfort"
            className='mb-3'
            id='page-8-question-59-answer-1'
            value={0}
            checked={result.depression.discomfort === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, discomfort: e.target.value } });
            }}
          />
          <Form.Check
            label="He perdido la confianza en mí mismo."
            type='radio'
            name="resultDiscomfort"
            className='mb-3'
            id='page-8-question-59-answer-2'
            value={1}
            checked={result.depression.discomfort === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, discomfort: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy decepcionado conmigo mismo."
            type='radio'
            name="resultDiscomfort"
            className='mb-3'
            id='page-8-question-59-answer-3'
            value={2}
            checked={result.depression.discomfort === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, discomfort: e.target.value } });
            }}
          />
          <Form.Check
            label="No me gusto a mí mismo."
            type='radio'
            name="resultDiscomfort"
            id='page-8-question-59-answer-4'
            value={3}
            checked={result.depression.discomfort === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, discomfort: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>60. Autocrítica.</Form.Label>
          <Form.Check
            label="No me critico ni me culpo más de lo habitual"
            type='radio'
            name="resultSelfCriticism"
            className='mb-3'
            id='page-8-question-60-answer-1'
            value={0}
            checked={result.depression.self_criticism === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, self_criticism: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy más crítico conmigo mismo de lo que solía estarlo."
            type='radio'
            name="resultSelfCriticism"
            className='mb-3'
            id='page-8-question-60-answer-2'
            value={1}
            checked={result.depression.self_criticism === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, self_criticism: e.target.value } });
            }}
          />
          <Form.Check
            label="Me critico a mí mismo por todos mis errores."
            type='radio'
            name="resultSelfCriticism"
            className='mb-3'
            id='page-8-question-60-answer-3'
            value={2}
            checked={result.depression.self_criticism === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, self_criticism: e.target.value } });
            }}
          />
          <Form.Check
            label="Me culpo a mí mismo por todo lo malo que sucede."
            type='radio'
            name="resultSelfCriticism"
            id='page-8-question-60-answer-4'
            value={3}
            checked={result.depression.self_criticism === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, self_criticism: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>61. Pensamiento o deseos suicidas.</Form.Label>
          <Form.Check
            label="No tengo ningún pensamiento de matarme."
            type='radio'
            name="resultSuicideWishes"
            className='mb-3'
            id='page-8-question-61-answer-1'
            value={0}
            checked={result.depression.suicide_wishes === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, suicide_wishes: e.target.value } });
            }}
          />
          <Form.Check
            label="He tenido pensamientos de matarme, pero no lo haría."
            type='radio'
            name="resultSuicideWishes"
            className='mb-3'
            id='page-8-question-61-answer-2'
            value={1}
            checked={result.depression.suicide_wishes === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, suicide_wishes: e.target.value } });
            }}
          />
          <Form.Check
            label="Querría matarme."
            type='radio'
            name="resultSuicideWishes"
            className='mb-3'
            id='page-8-question-61-answer-3'
            value={2}
            checked={result.depression.suicide_wishes === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, suicide_wishes: e.target.value } });
            }}
          />
          <Form.Check
            label="Me mataría si tuviera la oportunidad de hacerlo."
            type='radio'
            name="resultSuicideWishes"
            id='page-8-question-61-answer-4'
            value={3}
            checked={result.depression.suicide_wishes === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, suicide_wishes: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>62. Llanto.</Form.Label>
          <Form.Check
            label="No lloro más de lo que solía hacerlo."
            type='radio'
            name="resultCrying"
            className='mb-3'
            id='page-8-question-62-answer-1'
            value={0}
            checked={result.depression.crying === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, crying: e.target.value } });
            }}
          />
          <Form.Check
            label="Lloro más de lo que solía hacerlo."
            type='radio'
            name="resultCrying"
            className='mb-3'
            id='page-8-question-62-answer-2'
            value={1}
            checked={result.depression.crying === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, crying: e.target.value } });
            }}
          />
          <Form.Check
            label="Lloro por cualquier pequeñez."
            type='radio'
            name="resultCrying"
            className='mb-3'
            id='page-8-question-62-answer-3'
            value={2}
            checked={result.depression.crying === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, crying: e.target.value } });
            }}
          />
          <Form.Check
            label="Siento ganas de llorar pero no puedo."
            type='radio'
            name="resultCrying"
            id='page-8-question-62-answer-4'
            value={3}
            checked={result.depression.crying === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, crying: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>63. Agitación.</Form.Label>
          <Form.Check
            label="No estoy más inquieto o tenso que lo habitual."
            type='radio'
            name="resultAgitation"
            className='mb-3'
            id='page-8-question-63-answer-1'
            value={0}
            checked={result.depression.agitation === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, agitation: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento más inquieto o tenso que lo habitual."
            type='radio'
            name="resultAgitation"
            className='mb-3'
            id='page-8-question-63-answer-2'
            value={1}
            checked={result.depression.agitation === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, agitation: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy tan inquieto o agitado que me es difícil quedarme quieto."
            type='radio'
            name="resultAgitation"
            className='mb-3'
            id='page-8-question-63-answer-3'
            value={2}
            checked={result.depression.agitation === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, agitation: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo."
            type='radio'
            name="resultAgitation"
            id='page-8-question-63-answer-4'
            value={3}
            checked={result.depression.agitation === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, agitation: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>64. Pérdida de interés.</Form.Label>
          <Form.Check
            label="No he perdido el interés en otras actividades o personas."
            type='radio'
            name="resultLossInterest"
            className='mb-3'
            id='page-8-question-64-answer-1'
            value={0}
            checked={result.depression.loss_interest === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_interest: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy menos interesado que antes en otras personas o cosas."
            type='radio'
            name="resultLossInterest"
            className='mb-3'
            id='page-8-question-64-answer-2'
            value={1}
            checked={result.depression.loss_interest === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_interest: e.target.value } });
            }}
          />
          <Form.Check
            label="He perdido casi todo el interés en otras personas o cosas."
            type='radio'
            name="resultLossInterest"
            className='mb-3'
            id='page-8-question-64-answer-3'
            value={2}
            checked={result.depression.loss_interest === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_interest: e.target.value } });
            }}
          />
          <Form.Check
            label="Me es difícil interesarme por algo"
            type='radio'
            name="resultLossInterest"
            id='page-8-question-64-answer-4'
            value={3}
            checked={result.depression.loss_interest === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_interest: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>65. Indecisión.</Form.Label>
          <Form.Check
            label="Tomo mis propias decisiones tan bien como siempre."
            type='radio'
            name="resultIndecision"
            className='mb-3'
            id='page-8-question-65-answer-1'
            value={0}
            checked={result.depression.indecision === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, indecision: e.target.value } });
            }}
          />
          <Form.Check
            label="Me resulta más difícil que de costumbre tomar decisiones."
            type='radio'
            name="resultIndecision"
            className='mb-3'
            id='page-8-question-65-answer-2'
            value={1}
            checked={result.depression.indecision === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, indecision: e.target.value } });
            }}
          />
          <Form.Check
            label="Encuentro mucha más dificultad que antes para tomar decisiones."
            type='radio'
            name="resultIndecision"
            className='mb-3'
            id='page-8-question-65-answer-3'
            value={2}
            checked={result.depression.indecision === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, indecision: e.target.value } });
            }}
          />
          <Form.Check
            label="Tengo problemas para tomar cualquier decisión."
            type='radio'
            name="resultIndecision"
            id='page-8-question-65-answer-4'
            value={3}
            checked={result.depression.indecision === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, indecision: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>66. Desvalorización.</Form.Label>
          <Form.Check
            label="Me siento valioso(a)."
            type='radio'
            name="resultDevaluation"
            className='mb-3'
            id='page-8-question-66-answer-1'
            value={0}
            checked={result.depression.devaluation === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, devaluation: e.target.value } });
            }}
          />
          <Form.Check
            label="No me considero a mi mismo tan valioso y útil como solía considerarme antes."
            type='radio'
            name="resultDevaluation"
            className='mb-3'
            id='page-8-question-66-answer-2'
            value={1}
            checked={result.depression.devaluation === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, devaluation: e.target.value } });
            }}
          />
          <Form.Check
            label="Me siento menos valioso cuando me comparo con otros."
            type='radio'
            name="resultDevaluation"
            className='mb-3'
            id='page-8-question-66-answer-3'
            value={2}
            checked={result.depression.devaluation === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, devaluation: e.target.value } });
            }}
          />
          <Form.Check
            label="Siento que no valgo nada."
            type='radio'
            name="resultDevaluation"
            id='page-8-question-66-answer-4'
            value={3}
            checked={result.depression.devaluation === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, devaluation: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>67. Pérdida de energía.</Form.Label>
          <Form.Check
            label="Tengo tanta energía como siempre."
            type='radio'
            name="resultLossEnergy"
            className='mb-3'
            id='page-8-question-67-answer-1'
            value={0}
            checked={result.depression.loss_energy === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_energy: e.target.value } });
            }}
          />
          <Form.Check
            label="Tengo menos energía que la que solía tener."
            type='radio'
            name="resultLossEnergy"
            className='mb-3'
            id='page-8-question-67-answer-2'
            value={1}
            checked={result.depression.loss_energy === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_energy: e.target.value } });
            }}
          />
          <Form.Check
            label="No tengo suficiente energía para hacer demasiado."
            type='radio'
            name="resultLossEnergy"
            className='mb-3'
            id='page-8-question-67-answer-3'
            value={2}
            checked={result.depression.loss_energy === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_energy: e.target.value } });
            }}
          />
          <Form.Check
            label="No tengo energía suficiente para hacer nada."
            type='radio'
            name="resultLossEnergy"
            id='page-8-question-67-answer-4'
            value={3}
            checked={result.depression.loss_energy === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, loss_energy: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>68. Cambios en los hábitos de sueño.</Form.Label>
          <Form.Check
            label="No he experimentado ningún cambio en mis hábitos de sueño."
            type='radio'
            name="resultSleepChanges"
            className='mb-3'
            id='page-8-question-68-answer-1'
            value={0}
            checked={result.depression.sleep_changes === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sleep_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Duermo un poco más que lo habitual."
            type='radio'
            name="resultSleepChanges"
            className='mb-3'
            id='page-8-question-68-answer-2'
            value={1}
            checked={result.depression.sleep_changes === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sleep_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Duermo un poco menos que lo habitual."
            type='radio'
            name="resultSleepChanges"
            className='mb-3'
            id='page-8-question-68-answer-3'
            value={1}
            checked={result.depression.sleep_changes === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sleep_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Duermo mucho más que lo habitual."
            type='radio'
            name="resultSleepChanges"
            className='mb-3'
            id='page-8-question-68-answer-4'
            value={2}
            checked={result.depression.sleep_changes === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sleep_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Duermo mucho menos que lo habitual."
            type='radio'
            name="resultSleepChanges"
            className='mb-3'
            id='page-8-question-68-answer-5'
            value={2}
            checked={result.depression.sleep_changes === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sleep_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Duermo la mayor parte del día."
            type='radio'
            name="resultSleepChanges"
            className='mb-3'
            id='page-8-question-68-answer-6'
            value={3}
            checked={result.depression.sleep_changes === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sleep_changes: e.target.value } });
            }}
          />
          <Form.Check
            label="Me despierto 1-2 horas más temprano y no puedo volver a dormirme."
            type='radio'
            name="resultSleepChanges"
            id='page-8-question-68-answer-7'
            value={3}
            checked={result.depression.sleep_changes === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, sleep_changes: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>69. Irritabilidad.</Form.Label>
          <Form.Check
            label="No estoy tan irritable que lo habitual."
            type='radio'
            name="resultIrritability"
            className='mb-3'
            id='page-8-question-69-answer-1'
            value={0}
            checked={result.depression.irritability === '0'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, irritability: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy más irritable que lo habitual."
            type='radio'
            name="resultIrritability"
            className='mb-3'
            id='page-8-question-69-answer-2'
            value={1}
            checked={result.depression.irritability === '1'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, irritability: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy mucho más irritable que lo habitual."
            type='radio'
            name="resultIrritability"
            className='mb-3'
            id='page-8-question-69-answer-3'
            value={2}
            checked={result.depression.irritability === '2'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, irritability: e.target.value } });
            }}
          />
          <Form.Check
            label="Estoy irritable todo el tiempo."
            type='radio'
            name="resultIrritability"
            id='page-8-question-69-answer-4'
            value={3}
            checked={result.depression.irritability === '3'}
            onChange={(e) => {
              setResult({ ...result, depression: { ...result.depression, irritability: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage8