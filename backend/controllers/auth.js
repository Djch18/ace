const bcryptjs = require('bcryptjs');

const User = require("../models/user");

const { generateJWT } = require('../helpers/generate-jwt');


const login = async (req, res) => {

    console.log('hi')

    const { email, password } = req.body;

    try {

        const user = await User.findOne({
            where: {
                email: email
            }
        })

        //Check if email exists
        if (!user) {
            return res.status(400).json({
                msg: 'Email / Password are not correct - email'
            })
        }

        //Check if user is active
        if (!user.state) {
            return res.status(400).json({
                msg: 'User does not exist'
            })
        }

        //Check password
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Email / Password are not correct - password'
            })
        }

        //Generate JWT
        const token = await generateJWT(user.id);

        res.json({ user, token })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Talk with the administrator"
        })
    }

}

const createNewUser = async (req, res) => {

    const { body } = req;

    try {

        const emailExits = await User.findOne({
            where: {
                email: body.email
            }
        })

        if (emailExits) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            })
        }

        //Encrypt password
        const salt = bcryptjs.genSaltSync();
        body.password = bcryptjs.hashSync(body.password, salt);

        const user = new User(body);
        await user.save()

        res.json(user);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const renewToken = async (req, res) => {

    const user = req.user;

    try {

        //Generate JWT
        const token = await generateJWT(user.id);

        res.json({ user, token });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}



module.exports = {
    login,
    createNewUser,
    renewToken,
}