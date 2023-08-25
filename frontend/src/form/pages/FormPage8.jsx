import React from 'react'
import { Form } from 'react-bootstrap'

import '../../css/form/FormStyles.css'

const FormPage8 = ({ page }) => {

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Desánimo en el estudiante</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>53. Tristeza.</Form.Label>
          <Form.Check
            label="0. No me siento triste"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Me siento triste gran parte del tiempo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Me siento triste todo el tiempo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Me siento tan triste o soy tan infeliz que no puedo soportarlo."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>54. Pesimismo.</Form.Label>
          <Form.Check
            label="0. No estoy desalentado respecto de mi futuro."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Me siento más desalentado respecto de mi futuro que lo que solía estarlo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. No espero que las cosas funcionen para mí."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Siento que no hay esperanza para mi futuro y que sólo puede empeorar."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>55. Fracaso.</Form.Label>
          <Form.Check
            label="0. No me siento como un fracasado."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. He fracasado más de lo que hubiera debido."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Cuando miro hacia atrás, veo muchos fracasos."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Siento que como persona soy un fracaso total."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>56. Pérdida de placer.</Form.Label>
          <Form.Check
            label="0. Obtengo tanto placer como siempre por las cosas de las que disfruto."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. No disfruto tanto de las cosas como solía hacerlo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Obtengo muy poco placer de las cosas que solía disfrutar."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. No puedo obtener ningún placer de las cosas de las que solía disfrutar."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>57. Sentimiento de culpa.</Form.Label>
          <Form.Check
            label="0. No me siento particularmente culpable."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Me siento bastante culpable la mayor parte del tiempo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Me siento culpable todo el tiempo."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>58. Sentimientos de castigo.</Form.Label>
          <Form.Check
            label="0. No siento que este siendo castigado."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Siento que tal vez pueda ser castigado."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Espero ser castigado."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Siento que estoy siendo castigado."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>59. Disconformidad con uno mismo.</Form.Label>
          <Form.Check
            label="0. Siento acerca de mi lo mismo que siempre."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. He perdido la confianza en mí mismo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Estoy decepcionado conmigo mismo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. No me gusto a mí mismo."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>60. Autocrítica.</Form.Label>
          <Form.Check
            label="0. No me critico ni me culpo más de lo habitual"
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Estoy más crítico conmigo mismo de lo que solía estarlo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Me critico a mí mismo por todos mis errores."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Me culpo a mí mismo por todo lo malo que sucede."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>61. Pensamiento o deseos suicidas.</Form.Label>
          <Form.Check
            label="0. No tengo ningún pensamiento de matarme."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. He tenido pensamientos de matarme, pero no lo haría."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Querría matarme."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Me mataría si tuviera la oportunidad de hacerlo."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>62. Llanto.</Form.Label>
          <Form.Check
            label="0. No lloro más de lo que solía hacerlo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Lloro más de lo que solía hacerlo."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Lloro por cualquier pequeñez."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Siento ganas de llorar pero no puedo."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>63. Agitación.</Form.Label>
          <Form.Check
            label="0. No estoy más inquieto o tenso que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Me siento más inquieto o tenso que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Estoy tan inquieto o agitado que me es difícil quedarme quieto."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>64. Pérdida de interés.</Form.Label>
          <Form.Check
            label="0. No he perdido el interés en otras actividades o personas."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Estoy menos interesado que antes en otras personas o cosas."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. He perdido casi todo el interés en otras personas o cosas."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Me es difícil interesarme por algo"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>65. Indecisión.</Form.Label>
          <Form.Check
            label="0. Tomo mis propias decisiones tan bien como siempre."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Me resulta más difícil que de costumbre tomar decisiones."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Encuentro mucha más dificultad que antes para tomar decisiones."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Tengo problemas para tomar cualquier decisión."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>66. Desvalorización.</Form.Label>
          <Form.Check
            label="0. Me siento valioso(a)."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. No me considero a mi mismo tan valioso y útil como solía considerarme antes."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Me siento menos valioso cuando me comparo con otros."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Siento que no valgo nada."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>67. Pérdida de energía.</Form.Label>
          <Form.Check
            label="0. Tengo tanta energía como siempre."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Tengo menos energía que la que solía tener."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. No tengo suficiente energía para hacer demasiado."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. No tengo energía suficiente para hacer nada."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>68. Cambios en los hábitos de sueño.</Form.Label>
          <Form.Check
            label="0. No he experimentado ningún cambio en mis hábitos de sueño."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Duermo un poco más que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Duermo un poco menos que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Duermo mucho más que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-2'
            className='mb-3'
          />
          <Form.Check
            label="4. Duermo mucho menos que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-2'
            className='mb-3'
          />
          <Form.Check
            label="5. Duermo la mayor parte del día."
            name="group1"
            type='radio'
            id='inline-radio-2'
            className='mb-3'
          />
          <Form.Check
            label="6. Me despierto 1-2 horas más temprano y no puedo volver a dormirme."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>69. Irritabilidad.</Form.Label>
          <Form.Check
            label="0. No estoy tan irritable que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="1. Estoy más irritable que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="2. Estoy mucho más irritable que lo habitual."
            name="group1"
            type='radio'
            id='inline-radio-1'
            className='mb-3'
          />
          <Form.Check
            label="3. Estoy irritable todo el tiempo."
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage8