const { Router } = require('express');
const { check } = require('express-validator');

const { login, createNewUser, renewToken } = require('../controllers/auth');

const { isValidRole, emailExistsUser, exitsUserById } = require('../helpers/db-validators');

const { isAdminRole, hasRole } = require('../middlewares/validate-roles');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
], login);

router.post('/new', [
    check('name', 'Name is required').not().isEmpty(),
    check('first_surname', 'First surname is required').not().isEmpty(),
    check('second_surname', 'Second surname is required').not().isEmpty(),
    check('charge', 'Invalid charge').isIn(['ADMINISTRATIVE', 'STUDENT', 'PASTORAL', 'TEACHER', 'PSYCHOLOGY', 'REGISTRY', 'OTHER']),
    check('email', 'Email is invalid').isEmail(),
    check('email').custom(emailExistsUser),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must be longer than 8 characters').isLength({ min: 8 }),
    check('role', 'Invalid role').isIn(['ADMIN_ROLE', 'READER_ROLE']),
    // check('role').custom(isValidRole),
    validateFields
], createNewUser);

router.get('/renew', [
    validateJWT
], renewToken);



module.exports = router;