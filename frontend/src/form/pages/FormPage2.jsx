import React from 'react'
import { Form } from 'react-bootstrap'

import '../../css/form/FormStyles.css'

const FormPage2 = ({ page }) => {

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Situación familiar</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>6. Situación laboral de padres</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled >Elegir</option>
            <option value="Mamá empleada">Mamá es empleada</option>
            <option value="papá empleada">Papá es empleado</option>
            <option value="ambos empleados">Ambos empleados</option>
            <option value="mamá con negocio">Mamá con negocio propio</option>
            <option value="papá con negocio">Papá con negocio propio</option>
            <option value="ambos con negocio">Ambos con negocio propio</option>
            <option value="mamá desempleada">Mamá desempleada</option>
            <option value="papá desempleado">Papá desempleado</option>
            <option value="ambos desempleados">Ambos desempleados</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>7. ¿Tipo de familia?</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled default>Elegir</option>
            <option value="biparental">Biparental: madre, padre, hijos</option>
            <option value="extensa">Extensa: padres, abuelos, tíos</option>
            <option value="monoparental">Monoparental: 1 padre o madre</option>
            <option value="reconstituida">Reconstituida: padre con nueva pareja</option>
            <option value="adoptiva">Adoptiva</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>8. ¿Cómo es la calidad de relaciones de convivencia en tu familia?</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option default disabled>Elegir</option>
            <option value="mala">Mala</option>
            <option value="regular">Regular</option>
            <option value="buena">Buena</option>
            <option value="muy buena">Muy Buena</option>
            <option value="excelente">Excelente</option>
          </Form.Select>
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage2