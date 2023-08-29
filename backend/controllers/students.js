const Student = require("../models/student");
const Result = require("../models/result");


const getStudents = async (req, res) => {

    const students = await Student.findAll();

    res.json(students);
}

const getStudentById = async (req, res) => {

    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({
            mgs: `No existe un estudiante con el id ${id}`
        });
    }

}

const postStudents = async (req, res) => {

    const { body } = req;

    try {

        const emailExits = await Student.findOne({
            where: {
                email: body.email
            }
        })

        if (emailExits) {
            return res.status(400).json({
                msg: 'Ya existe un estudiante con el email: ' + body.email
            })
        }

        const student = new Student(body);
        await student.save()

        res.json(student);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }
}

const putStudents = async (req, res) => {

}

const deleteStudents = async (req, res) => {

}



module.exports = {
    getStudents,
    getStudentById,
    postStudents,
    putStudents,
    deleteStudents
}