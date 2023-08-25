import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import FormContext from "../formContext/FormContext";

import '../../css/form/FormStyles.css'

const FormPage6 = ({ page }) => {

  const { result, setResult } = useContext(FormContext);

  return (
    <Form>
      <div className='form-name-section'>
        <h6>{page}. Relaciones sociales</h6>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>29. Hago amigos con facilidad.</Form.Label>
          <div className='likert-scale-container'>
            <p className='likert-scale-side-labels'></p>

            <div className='likert-scale-table-container'>
              <div className='d-flex flex-column text-center'>
                <span>1</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-6-question-29-answer-1'
                  value={1}
                  checked={result.social_relationships.make_friends_easily === '1'}
                  onChange={(e) => {
                    setResult({ ...result, social_relationships: { ...result.social_relationships, make_friends_easily: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>2</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-6-question-29-answer-2'
                  value={2}
                  checked={result.social_relationships.make_friends_easily === '2'}
                  onChange={(e) => {
                    setResult({ ...result, social_relationships: { ...result.social_relationships, make_friends_easily: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>3</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-6-question-29-answer-3'
                  value={3}
                  checked={result.social_relationships.make_friends_easily === '3'}
                  onChange={(e) => {
                    setResult({ ...result, social_relationships: { ...result.social_relationships, make_friends_easily: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>4</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-6-question-29-answer-4'
                  value={4}
                  checked={result.social_relationships.make_friends_easily === '4'}
                  onChange={(e) => {
                    setResult({ ...result, social_relationships: { ...result.social_relationships, make_friends_easily: e.target.value } });
                  }}
                />
              </div>

              <div className='d-flex flex-column text-center'>
                <span>5</span>
                <Form.Check
                  type='radio'
                  name="resultMakeFriendsEasily"
                  className='m-0'
                  id='page-6-question-29-answer-5'
                  value={5}
                  checked={result.social_relationships.make_friends_easily === '5'}
                  onChange={(e) => {
                    setResult({ ...result, social_relationships: { ...result.social_relationships, make_friends_easily: e.target.value } });
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
          <Form.Label className='mb-4'>30. ¿Ha recibido bullying de parte de sus compañeros?</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultBullyingFromClassmates"
            className='mb-3'
            id='page-6-question-30-answer-1'
            value={1}
            checked={result.social_relationships.bullying_from_classmates === '1'}
            onChange={(e) => {
              setResult({ ...result, social_relationships: { ...result.social_relationships, bullying_from_classmates: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultBullyingFromClassmates"
            id='page-6-question-30-answer-2'
            value={0}
            checked={result.social_relationships.bullying_from_classmates === '0'}
            onChange={(e) => {
              setResult({ ...result, social_relationships: { ...result.social_relationships, bullying_from_classmates: e.target.value } });
            }}
          />
        </Form.Group>
      </div>

      <div className='form-section'>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-4'>31. ¿Alguna vez Usted ha hecho bullying?</Form.Label>
          <Form.Check
            label="Si"
            type='radio'
            name="resultBullying"
            className='mb-3'
            id='page-6-question-31-answer-1'
            value={1}
            checked={result.social_relationships.bullying === '1'}
            onChange={(e) => {
              setResult({ ...result, social_relationships: { ...result.social_relationships, bullying: e.target.value } });
            }}
          />
          <Form.Check
            label="No"
            type='radio'
            name="resultBullying"
            id='page-6-question-31-answer-2'
            value={0}
            checked={result.social_relationships.bullying === '0'}
            onChange={(e) => {
              setResult({ ...result, social_relationships: { ...result.social_relationships, bullying: e.target.value } });
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default FormPage6