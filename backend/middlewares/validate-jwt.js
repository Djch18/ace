const jwt = require('jsonwebtoken');

const User = require('../models/user');


const validateJWT = async (req, res, next) => {

    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer')
    ) {
        return res.status(401).json({
            msg: 'Not authorized, token failed'
        })
    }

    const token = req.headers.authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const authUser = await User.findByPk(id);

        if (!authUser || !authUser.state) {
            res.status(401).json({
                msg: 'The user does not exits'
            })
        }

        req.user = authUser;
        next();

    } catch (error) {
        console.error(error)
        res.status(401).json({
            msg: 'Not authorized, token failed'
        })
    }

    if (!token) {
        return res.status(401).json({
            msg: 'Not authorized, no token'
        })
    }
}



module.exports = {
    validateJWT
}