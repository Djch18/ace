const { Router } = require('express');
const { check } = require('express-validator');

const { getResults, getResultById, getResultByEmail, getResultsCount, postResults, putResults, deleteResults } = require('../controllers/results');

const { emailExistsResult } = require('../helpers/db-validators');

// const { isAdminRole, hasRole } = require('../middlewares/validate-roles');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.get('/', [
    validateJWT,
], getResults);

router.get('/count', [
    validateJWT,
], getResultsCount);

router.get('/:id', [
    validateJWT,
], getResultById);

router.get('/email/:email', [
    validateJWT,
], getResultByEmail);

router.post('/', [
    check('email', 'Email is invalid').isEmail(),
    check('email').custom(emailExistsResult),

    check('employment_status', 'Employments status is required').not().isEmpty(),
    check('family_type', 'Family type is required').not().isEmpty(),
    check('quality_relationships', 'Quality relationships is required').not().isEmpty(),
    check('couple', 'Couple is required').not().isEmpty(),

    check('average', 'Average is required').not().isEmpty(),
    check('more_difficult_subject', 'More difficult subject is required').not().isEmpty(),
    check('adequacy', 'Adequacy is required').not().isEmpty(),
    check('learning_technique', 'Learning technique is required').not().isEmpty(),

    check('favorite_meal_time', 'Favorite meal time is required').not().isEmpty(),
    check('weight', 'Weight is required').not().isEmpty(),
    check('height', 'Height is required').not().isEmpty(),
    check('eat_times_day', 'The times you eat a day is required').not().isEmpty(),
    check('take_medications', 'Take medications is required').not().isEmpty(),

    check('extracurricular_activity', 'Extracurricular activity is required').not().isEmpty(),
    check('comment_for_improvement', 'Comment for improvement the high school is required').not().isEmpty(),
    check('subjects_to_improve', 'Subjects to improve is required').not().isEmpty(),
    validateFields
], postResults);

// router.put('/:id', [
// ], putResults);

// router.delete('/:id', [
//     validateJWT,
//     isAdminRole,
// ], deleteResults);



module.exports = router;