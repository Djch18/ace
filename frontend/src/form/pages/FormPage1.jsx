import React from 'react'
import { Form } from 'react-bootstrap'

import '../../css/form/FormStyles.css'

const FormPage1 = ({ page }) => {

  const distribution =
  {
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

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Información del estudiante</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>1. Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="usted@cedesdonbosco.ed.cr"
          // name='loginEmail'
          // value={loginEmail}
          // onChange={onInputChange}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>2. Grado y sección</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled >Elegir</option>
            <option disabled>--- Séptimo ---</option>
            <option value="7-A">7-A</option>
            <option value="7-B">7-B</option>
            <option value="7-C">7-C</option>
            <option value="7-D">7-D</option>
            <option value="7-E">7-E</option>
            <option value="7-F">7-F</option>

            <option disabled>--- Octavo ---</option>
            <option value="8-A">8-A</option>
            <option value="8-B">8-B</option>
            <option value="8-C">8-C</option>
            <option value="8-D">8-D</option>
            <option value="8-E">8-E</option>
            <option value="8-F">8-F</option>

            <option disabled>--- Noveno ---</option>
            <option value="9-A">9-A</option>
            <option value="9-B">9-B</option>
            <option value="9-C">9-C</option>
            <option value="9-D">9-D</option>
            <option value="9-E">9-E</option>
            <option value="9-F">9-F</option>

            <option disabled>--- Décimo ---</option>
            <option value="10-A">10-A</option>
            <option value="10-B">10-B</option>
            <option value="10-C">10-C</option>
            <option value="10-D">10-D</option>
            <option value="10-E">10-E</option>
            <option value="10-F">10-F</option>

            <option disabled>--- Undécimo ---</option>
            <option value="11-A">11-A</option>
            <option value="11-B">11-B</option>
            <option value="11-C">11-C</option>
            <option value="11-D">11-D</option>
            <option value="11-E">11-E</option>
            <option value="11-F">11-F</option>

            <option disabled>--- Duodecimo ---</option>
            <option value="12-A">12-A</option>
            <option value="12-B">12-B</option>
            <option value="12-C">12-C</option>
            <option value="12-D">12-D</option>
            <option value="12-E">12-E</option>
            <option value="12-F">12-F</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formAge">
          <Form.Label className='mb-4'>3. Correo electrónico</Form.Label>
          <Form.Control
            type="date"
            placeholder="usted@cedesdonbosco.ed.cr"
          // name='loginEmail'
          // value={loginEmail}
          // onChange={onInputChange}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>4. Sexo</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled>Elegir</option>
            <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mb-4'>5. Canton de domicilio</Form.Label>
          <Form.Select aria-label="charge select"
          // name='registerCharge'
          // value={registerCharge}
          // onChange={onInputChange}
          >
            <option disabled>Elegir</option>
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