const { Router } = require('express');
// const { check } = require('express-validator');

const { getStudents, postStudents, putStudents, deleteStudents, getStudentById } = require('../controllers/students');

// const { isValidRole, emailExists, exitsStudentById } = require('../helpers/db-validators');

// const { isAdminRole, hasRole } = require('../middlewares/validate-roles');
// const { validateFields } = require('../middlewares/validate-fields');
// const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.get('/', [
    // validateJWT,
    // isAdminRole
], getStudents);

router.get('/:id', [
    // validateJWT,
    // isAdminRole
], getStudentById);

router.post('/', [
    // check('name', 'Name is required').not().isEmpty(),
    // check('email', 'Email is invalid').isEmail(),
    // check('email').custom(emailExists),
    // check('password', 'Password is required').not().isEmpty(),
    // check('password', 'Password must be longer than 6 characters').isLength({ min: 6 }),
    // check('age', 'Age is required').not().isEmpty(),
    // // check('role', 'Invalid role').isIn(['ADMIN_ROLE', 'Student_ROLE']),
    // check('role').custom(isValidRole),
    // validateFields
], postStudents);

router.put('/:id', [
    // validateJWT,
    // check('id', 'Invalid ID').isMongoId(),
    // check('id').custom(exitsStudentById),
    // // check('role').custom(isValidRole),
    // validateFields
], putStudents);

router.delete('/:id', [
    // validateJWT,
    // isAdminRole,
    // check('id', 'Invalid ID').isMongoId(),
    // check('id').custom(exitsStudentById),
    // validateFields
], deleteStudents);



module.exports = router;