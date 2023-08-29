import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage1 = ({ page, formData: student, setFormData: setStudent }) => {

  const grades = {
    "Séptimo": [
      "7-A", "7-B", "7-C", "7-D", "7-E", "7-F"
    ],

    "Octavo": [
      "8-A", "8-B", "8-C", "8-D", "8-E", "8-F"
    ],

    "Noveno": [
      "9-A", "9-B", "9-C", "9-D", "9-E", "9-F"
    ],

    "Décimo": [
      "10-A", "10-B", "10-C", "10-D", "10-E", "10-F"
    ],

    "Undécimo": [
      "11-A", "11-B", "11-C", "11-D", "11-E", "11-F"
    ],

    "Duodecimo": [
      "12-A", "12-B", "12-C", "12-D", "12-E", "12-F"
    ],
  }

  const distribution = {
    "San Jose": [
      "San José", "Escazú", "Desamparados", "Puriscal", "Tarrazú", "Aserrí", "Mora", "Goicoechea", "Santa Ana", "Alajuelita", "Vásquez de Coronado", "Acosta", "Tibas", "Moravia", "Montes de Oca", "Turrubares", "Dota", "Curridabat", "Perez Zeledón", "León Cortés"
    ],

    "Alajuela": [
      "Alajuela", "San Ramón", "Grecia", "San Mateo", "Atenas", "Naranjo", "Palmares", "Poás", "Orotina", "San Carlos", "Zarcero", "Valverde Vega", "Upala", "Los Chiles", "Guatuso"
    ],

    "Cartago": [
      "Cartago", "Paraíso", "La Union", "Jímenez", "Turrialba", "Alvarado", "Oreamuno", "El Guarco"
    ],

    "Heredia": [
      "Heredia", "Barva", "Santo Domingo", "Santa Bárbara", "San Rafael", "San Isidro", "Belén", "Flore", "San Pablo", "Sarapiquí"
    ],

    "Guanacaste": [
      "Liberia", "Nicoya", "Santa Cruz", "Bagaces", "Carrillo", "Cañas", "Abangares", "Tilarán", "Nandayure", "La Cruz", "Hojancha"
    ],

    "Puntarenas": [
      "Puntarenas", "Esparza", "Buenos Aires", "Montes de Oro", "Osa", "Aguirre", "Golfito", "Coto Brus", "Parrita", "Corredores", "Garabito"
    ],

    "Limón": [
      "Limon", "Pococí", "Siquirres", "Talamanca", "Matina", "Guacimo"
    ],
  }

  // Object.entries(distribution).map(([key, value]) => {
  //   console.log(key + 'S')
  //   Object.entries(value).map(([key, value2]) => {
  //     console.log(value2)
  //   });
  // });

  // useEffect(() => {
  //   console.log(student)
  // }, [student])

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Información del estudiante</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmailStudent">
          <Form.Label className='mb-4'>1. Correo institucional del estudiante.</Form.Label>
          <Form.Control
            type="email"
            placeholder="usted@est.cedesdonbosco.ed.cr"
            name='studentEmail'
            value={student.name}
            onChange={(e) => {
              setStudent({ ...student, email: e.target.value });
            }} />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>2. Grado y sección.</Form.Label>
          <Form.Select aria-label="charge select"
            name='studentGrade'
            value={student.grade}
            onChange={(e) => {
              setStudent({ ...student, grade: e.target.value });
            }}
          >
            <option>Elegir</option>
            {
              Object.entries(grades).map(([grade, sections]) => (
                <>
                  <option key={grade} disabled>--- {grade} ---</option>
                  {
                    sections.map((section) => (
                      <option key={section} value={section}>{section}</option>
                    ))
                  }
                </>
              ))
            }
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formAge">
          <Form.Label className='mb-4'>3. Fecha de nacimiento</Form.Label>
          <Form.Control
            type="date"
            name='studentBirthday'
            value={student.birthday}
            onChange={(e) => {
              setStudent({ ...student, birthday: e.target.value });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>4. Sexo.</Form.Label>
          <Form.Check
            label="Mujer"
            type='radio'
            value='mujer'
            name="studentGender"
            className='mb-3'
            id='page-1-question-4-answer-1'
            checked={student.gender === 'mujer'}
            onChange={(e) => {
              setStudent({ ...student, gender: e.target.value });
            }}
          />
          <Form.Check
            label="Hombre"
            type='radio'
            name="studentGender"
            id='page-1-question-4-answer-2'
            value='hombre'
            checked={student.gender === 'hombre'}
            onChange={(e) => {
              setStudent({ ...student, gender: e.target.value });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>5. Canton de domicilio.</Form.Label>
          <Form.Select aria-label="charge select"
            name='studentAddress'
            value={student.address}
            onChange={(e) => {
              setStudent({ ...student, address: e.target.value });
            }}
          >
            <option>Elegir</option>
            {
              Object.entries(distribution).map(([provincia, cantones]) => (
                <>
                  <option key={provincia} disabled>--- {provincia} ---</option>
                  {
                    cantones.map((canton) => (
                      <option key={canton} value={canton}>{canton}</option>
                    ))
                  }
                </>
              ))
            }
          </Form.Select>
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage1