const { Router } = require('express');
const { check } = require('express-validator');

const { getUsers, postUsers, putUsers, deleteUsers, getUserById, getNewUsers } = require('../controllers/users');

const { isValidRole, emailExists, exitsUserById } = require('../helpers/db-validators');

const { isAdminRole, hasRole } = require('../middlewares/validate-roles');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.get('/', [
    validateJWT,
    isAdminRole
], getUsers);

router.get('/new', [
    validateJWT,
    isAdminRole
], getNewUsers);

router.get('/:id', [
    validateJWT,
    isAdminRole
], getUserById);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('first_surname', 'First surname is required').not().isEmpty(),
    check('second_surname', 'Second surname is required').not().isEmpty(),
    check('charge', 'Invalid charge').isIn(['ADMINISTRATIVE', 'STUDENT', 'PASTORAL', 'TEACHER', 'PSYCHOLOGY', 'REGISTRY', 'OTHER']),
    check('email', 'Email is invalid').isEmail(),
    check('email').custom(emailExists),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must be longer than 8 characters').isLength({ min: 8 }),
    check('role', 'Invalid role').isIn(['ADMIN_ROLE', 'READER_ROLE']),
    // check('role').custom(isValidRole),
    validateFields
], postUsers);

router.put('/:id', [
    validateJWT,
    check('id').custom(exitsUserById),
    // check('role').custom(isValidRole),
    validateFields
], putUsers);

router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(exitsUserById),
    validateFields
], deleteUsers);



module.exports = router;