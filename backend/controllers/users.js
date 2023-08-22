const User = require("../models/user");
const bcryptjs = require('bcryptjs');

const { generateJWT } = require('../helpers/generate-jwt');

const getUsers = async (req, res) => {

    const users = await User.findAll();

    // const { limit = 5, since = 0 } = req.query;
    // const query = { state: true };

    // const [total, users] = await Promise.all([
    //     User.countDocuments(query),
    //     User.find(query)
    //         .skip(Number(since))
    //         .limit(Number(limit)),
    // ])

    res.json(users);
}

const getNewUsers = async (req, res) => {

    const users = await User.findAll({
        where: {
            state: 0
        }
    });

    res.json(users);
}

const getUserById = async (req, res) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            mgs: `No existe un usuario con el id ${id}`
        });
    }

}

const postUsers = async (req, res) => {

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

        // //Generate JWT
        // const token = await generateJWT(user.id);

        res.json(user);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const putUsers = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await user.update(body);

        res.json(user);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }
}

const deleteUsers = async (req, res) => {

    const { id } = req.params;

    try {

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await user.destroy();

        res.json(user);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }
}



module.exports = {
    getUsers,
    getUserById,
    getNewUsers,
    postUsers,
    putUsers,
    deleteUsers
}