import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage5 = ({ page, formData: result, setFormData: setResult }) => {
  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Autoconfianza</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>19. Siento que soy una persona digna de aprecio, al igual que los demás.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-5-question-19-answer-1'
                  value={1}
                  checked={result.self_esteem.worthy_appreciation === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, worthy_appreciation: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-5-question-19-answer-2'
                  value={2}
                  checked={result.self_esteem.worthy_appreciation === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, worthy_appreciation: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-5-question-19-answer-3'
                  value={3}
                  checked={result.self_esteem.worthy_appreciation === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, worthy_appreciation: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-5-question-19-answer-4'
                  value={4}
                  checked={result.self_esteem.worthy_appreciation === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, worthy_appreciation: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-5-question-19-answer-5'
                  value={5}
                  checked={result.self_esteem.worthy_appreciation === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, worthy_appreciation: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>20. Estoy convencido de que poseo buenas cualidades.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultGoodQualities"
                  className='m-0'
                  id='page-5-question-20-answer-1'
                  value={1}
                  checked={result.self_esteem.good_qualities === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, good_qualities: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultGoodQualities"
                  className='m-0'
                  id='page-5-question-20-answer-2'
                  value={2}
                  checked={result.self_esteem.good_qualities === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, good_qualities: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultGoodQualities"
                  className='m-0'
                  id='page-5-question-20-answer-3'
                  value={3}
                  checked={result.self_esteem.good_qualities === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, good_qualities: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultGoodQualities"
                  className='m-0'
                  id='page-5-question-20-answer-4'
                  value={4}
                  checked={result.self_esteem.good_qualities === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, good_qualities: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultGoodQualities"
                  className='m-0'
                  id='page-5-question-20-answer-5'
                  value={5}
                  checked={result.self_esteem.good_qualities === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, good_qualities: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>21. Soy capaz de hacer las cosas tan bien como la mayoría de la gente.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultDoThingsWell"
                  className='m-0'
                  id='page-5-question-21-answer-1'
                  value={1}
                  checked={result.self_esteem.do_things_well === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, do_things_well: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultDoThingsWell"
                  className='m-0'
                  id='page-5-question-21-answer-2'
                  value={2}
                  checked={result.self_esteem.do_things_well === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, do_things_well: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultDoThingsWell"
                  className='m-0'
                  id='page-5-question-21-answer-3'
                  value={3}
                  checked={result.self_esteem.do_things_well === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, do_things_well: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultDoThingsWell"
                  className='m-0'
                  id='page-5-question-21-answer-4'
                  value={4}
                  checked={result.self_esteem.do_things_well === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, do_things_well: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultDoThingsWell"
                  className='m-0'
                  id='page-5-question-21-answer-5'
                  value={5}
                  checked={result.self_esteem.do_things_well === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, do_things_well: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>22. Tengo una actitud positiva hacia mi mismo.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultPositiveAttitude"
                  className='m-0'
                  id='page-5-question-22-answer-1'
                  value={1}
                  checked={result.self_esteem.positive_attitude === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, positive_attitude: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultPositiveAttitude"
                  className='m-0'
                  id='page-5-question-22-answer-2'
                  value={2}
                  checked={result.self_esteem.positive_attitude === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, positive_attitude: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultPositiveAttitude"
                  className='m-0'
                  id='page-5-question-22-answer-3'
                  value={3}
                  checked={result.self_esteem.positive_attitude === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, positive_attitude: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultPositiveAttitude"
                  className='m-0'
                  id='page-5-question-22-answer-4'
                  value={4}
                  checked={result.self_esteem.positive_attitude === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, positive_attitude: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultPositiveAttitude"
                  className='m-0'
                  id='page-5-question-22-answer-5'
                  value={5}
                  checked={result.self_esteem.positive_attitude === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, positive_attitude: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>23. En general estoy satisfecho de mi mismo.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultSatisfiedMyself"
                  className='m-0'
                  id='page-5-question-23-answer-1'
                  value={1}
                  checked={result.self_esteem.satisfied_myself === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, satisfied_myself: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultSatisfiedMyself"
                  className='m-0'
                  id='page-5-question-23-answer-2'
                  value={2}
                  checked={result.self_esteem.satisfied_myself === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, satisfied_myself: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultSatisfiedMyself"
                  className='m-0'
                  id='page-5-question-23-answer-3'
                  value={3}
                  checked={result.self_esteem.satisfied_myself === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, satisfied_myself: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultSatisfiedMyself"
                  className='m-0'
                  id='page-5-question-23-answer-4'
                  value={4}
                  checked={result.self_esteem.satisfied_myself === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, satisfied_myself: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultSatisfiedMyself"
                  className='m-0'
                  id='page-5-question-23-answer-5'
                  value={5}
                  checked={result.self_esteem.satisfied_myself === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, satisfied_myself: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>24. Siento que no tengo mucho de lo que estar orgulloso.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultNothingToProud"
                  className='m-0'
                  id='page-5-question-24-answer-1'
                  value={5}
                  checked={result.self_esteem.nothing_to_proud === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, nothing_to_proud: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultNothingToProud"
                  className='m-0'
                  id='page-5-question-24-answer-2'
                  value={4}
                  checked={result.self_esteem.nothing_to_proud === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, nothing_to_proud: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultNothingToProud"
                  className='m-0'
                  id='page-5-question-24-answer-3'
                  value={3}
                  checked={result.self_esteem.nothing_to_proud === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, nothing_to_proud: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultNothingToProud"
                  className='m-0'
                  id='page-5-question-24-answer-4'
                  value={2}
                  checked={result.self_esteem.nothing_to_proud === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, nothing_to_proud: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultNothingToProud"
                  className='m-0'
                  id='page-5-question-24-answer-5'
                  value={1}
                  checked={result.self_esteem.nothing_to_proud === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, nothing_to_proud: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>25. En general me inclino a pensar que soy un fracasado.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultIFailure"
                  className='m-0'
                  id='page-5-question-25-answer-1'
                  value={5}
                  checked={result.self_esteem.i_failure === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, i_failure: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultIFailure"
                  className='m-0'
                  id='page-5-question-25-answer-2'
                  value={4}
                  checked={result.self_esteem.i_failure === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, i_failure: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultIFailure"
                  className='m-0'
                  id='page-5-question-25-answer-3'
                  value={3}
                  checked={result.self_esteem.i_failure === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, i_failure: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultIFailure"
                  className='m-0'
                  id='page-5-question-25-answer-4'
                  value={2}
                  checked={result.self_esteem.i_failure === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, i_failure: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultIFailure"
                  className='m-0'
                  id='page-5-question-25-answer-5'
                  value={1}
                  checked={result.self_esteem.i_failure === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, i_failure: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>26. Me gustaría poder sentir más respeto por mi mismo.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultMoreRespect"
                  className='m-0'
                  id='page-5-question-26-answer-1'
                  value={1}
                  checked={result.self_esteem.more_respect === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, more_respect: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultMoreRespect"
                  className='m-0'
                  id='page-5-question-26-answer-2'
                  value={2}
                  checked={result.self_esteem.more_respect === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, more_respect: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultMoreRespect"
                  className='m-0'
                  id='page-5-question-26-answer-3'
                  value={3}
                  checked={result.self_esteem.more_respect === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, more_respect: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultMoreRespect"
                  className='m-0'
                  id='page-5-question-26-answer-4'
                  value={4}
                  checked={result.self_esteem.more_respect === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, more_respect: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultMoreRespect"
                  className='m-0'
                  id='page-5-question-26-answer-5'
                  value={5}
                  checked={result.self_esteem.more_respect === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, more_respect: e.target.value } });
                  }}
                />
              </div>
            </div>
            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>27. Hay veces que pienso que realmente soy un inútil.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultUseless"
                  className='m-0'
                  id='page-5-question-27-answer-1'
                  value={5}
                  checked={result.self_esteem.useless === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, useless: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultUseless"
                  className='m-0'
                  id='page-5-question-27-answer-2'
                  value={4}
                  checked={result.self_esteem.useless === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, useless: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultUseless"
                  className='m-0'
                  id='page-5-question-27-answer-3'
                  value={3}
                  checked={result.self_esteem.useless === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, useless: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultUseless"
                  className='m-0'
                  id='page-5-question-27-answer-4'
                  value={2}
                  checked={result.self_esteem.useless === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, useless: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultUseless"
                  className='m-0'
                  id='page-5-question-27-answer-5'
                  value={1}
                  checked={result.self_esteem.useless === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, useless: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>28. A veces creo que no soy buena persona.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultBadPerson"
                  className='m-0'
                  id='page-5-question-28-answer-1'
                  value={5}
                  checked={result.self_esteem.bad_person === '5'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, bad_person: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultBadPerson"
                  className='m-0'
                  id='page-5-question-28-answer-2'
                  value={4}
                  checked={result.self_esteem.bad_person === '4'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, bad_person: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultBadPerson"
                  className='m-0'
                  id='page-5-question-28-answer-3'
                  value={3}
                  checked={result.self_esteem.bad_person === '3'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, bad_person: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultBadPerson"
                  className='m-0'
                  id='page-5-question-28-answer-4'
                  value={2}
                  checked={result.self_esteem.bad_person === '2'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, bad_person: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultBadPerson"
                  className='m-0'
                  id='page-5-question-28-answer-5'
                  value={1}
                  checked={result.self_esteem.bad_person === '1'}
                  onChange={(e) => {
                    setResult({ ...result, self_esteem: { ...result.self_esteem, bad_person: e.target.value } });
                  }}
                />
              </div>
            </div>

            <p className='likert-scale-side-labels'></p>
          </div>
        </Form.Group>
      </div >
    </Form >
  )
}

export default FormPage5