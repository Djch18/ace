// const Role = require('../models/role');
const Result = require('../models/result');
const Student = require('../models/student');
const User = require('../models/user');
// const Chapter = require('../models/chapter');

// const isValidRole = async (role = '') => {

//     const exitsRole = await Role.findOne({ role });
//     if (!exitsRole) {
//         throw new Error(`Role: ${role}, is not registered`);
//     }
// }

const emailExistsUser = async (email = '') => {

    const exitsEmail = await User.findOne({
        where: {
            email: email
        }
    })
    if (exitsEmail) {
        throw new Error(`Email: ${email}, is already registered`);
    }
}

const emailExistsStudent = async (email = '') => {

    const exitsEmail = await Student.findOne({
        where: {
            email: email
        }
    })
    if (exitsEmail) {
        throw new Error(`Email: ${email}, is already registered`);
    }
}

const emailExistsResult = async (email = '') => {

    const exitsEmail = await Result.findOne({
        where: {
            email: email
        }
    })
    if (exitsEmail) {
        throw new Error(`Email: ${email}, is already registered`);
    }
}

const exitsUserById = async (id) => {

    const exitsUser = await User.findByPk(id);
    if (!exitsUser) {
        throw new Error(`Id: ${id}, doesn't exist`);
    }
}

// const existsChapter = async (name = '') => {

//     const chapterExists = await User.findOne({ name });
//     if (chapterExists) {
//         throw new Error(`Chapter: ${name}, is already registered`);
//     }
// }

// const exitsChapterById = async (id) => {

//     const exitsChapter = await Chapter.findById(id);
//     if (!exitsChapter) {
//         throw new Error(`Id: ${id}, doesn't exist`);
//     }
// }



module.exports = {
    // isValidRole,
    emailExistsUser,
    exitsUserById,
    emailExistsStudent,
    emailExistsResult,

    // exitsChapterById,
    // existsChapter,
}