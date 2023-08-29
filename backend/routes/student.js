const { Router } = require('express');
const { check } = require('express-validator');

const { getStudents, postStudents, putStudents, deleteStudents, getStudentById } = require('../controllers/students');

const { emailExistsStudent } = require('../helpers/db-validators');

const { isAdminRole, hasRole } = require('../middlewares/validate-roles');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.get('/', [
    validateJWT,
], getStudents);

router.get('/:id', [
    validateJWT,
], getStudentById);

router.post('/', [
    check('email', 'Email is invalid').isEmail(),
    check('email').custom(emailExistsStudent),
    check('grade', 'Password is required').not().isEmpty(),
    check('birthday', 'Birthday is required').not().isEmpty(),
    check('gender', 'Gender is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    validateFields
], postStudents);

// router.put('/:id', [
// ], putStudents);

// router.delete('/:id', [
//     validateJWT,
//     isAdminRole,
// ], deleteStudents);



module.exports = router;