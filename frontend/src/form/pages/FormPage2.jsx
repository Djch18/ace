import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage2 = ({ page, formData: result, setFormData: setResult }) => {
  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Relaciones familiares</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>6. Situación laboral de padres.</Form.Label>
          <Form.Select aria-label="charge select"
            name='resultEmploymentStatus'
            value={result.family.employment_status}
            onChange={(e) => {
              setResult({ ...result, family: { ...result.family, employment_status: e.target.value } });
            }}
          >
            <option>Elegir</option>
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
            name='resultFamilyType'
            value={result.family.family_type}
            onChange={(e) => {
              setResult({ ...result, family: { ...result.family, family_type: e.target.value } });
            }}
          >
            <option>Elegir</option>
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
            name='resultQualityRelationships'
            value={result.family.quality_relationships}
            onChange={(e) => {
              setResult({ ...result, family: { ...result.family, quality_relationships: e.target.value } });
            }}          >
            <option>Elegir</option>
            <option value="mala">Mala</option>
            <option value="regular">Regular</option>
            <option value="buena">Buena</option>
            <option value="muy buena">Muy Buena</option>
            <option value="excelente">Excelente</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>9. ¿Tienes novia(o)?</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultCouple"
            className='mb-3'
            id='page-2-question-9-answer-1'
            value={1}
            checked={result.family.couple === '1'}
            onChange={(e) => {
              setResult({ ...result, family: { ...result.family, couple: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultCouple"
            id='page-2-question-9-answer-2'
            value={0}
            checked={result.family.couple === '0'}
            onChange={(e) => {
              setResult({ ...result, family: { ...result.family, couple: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage2