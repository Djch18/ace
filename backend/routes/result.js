const { Router } = require('express');
// const { check } = require('express-validator');

const { getResults, postResults, putResults, deleteResults, getResultById } = require('../controllers/results');

// const { isValidRole, emailExists, exitsResultById } = require('../helpers/db-validators');

// const { isAdminRole, hasRole } = require('../middlewares/validate-roles');
// const { validateFields } = require('../middlewares/validate-fields');
// const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.get('/', [
    // validateJWT,
    // isAdminRole
], getResults);

router.get('/:id', [
    // validateJWT,
    // isAdminRole
], getResultById);

router.post('/', [
    // check('name', 'Name is required').not().isEmpty(),
    // check('email', 'Email is invalid').isEmail(),
    // check('email').custom(emailExists),
    // check('password', 'Password is required').not().isEmpty(),
    // check('password', 'Password must be longer than 6 characters').isLength({ min: 6 }),
    // check('age', 'Age is required').not().isEmpty(),
    // // check('role', 'Invalid role').isIn(['ADMIN_ROLE', 'Result_ROLE']),
    // check('role').custom(isValidRole),
    // validateFields
], postResults);

router.put('/:id', [
    // validateJWT,
    // check('id', 'Invalid ID').isMongoId(),
    // check('id').custom(exitsResultById),
    // // check('role').custom(isValidRole),
    // validateFields
], putResults);

router.delete('/:id', [
    // validateJWT,
    // isAdminRole,
    // check('id', 'Invalid ID').isMongoId(),
    // check('id').custom(exitsResultById),
    // validateFields
], deleteResults);



module.exports = router;