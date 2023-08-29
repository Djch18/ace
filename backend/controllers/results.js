const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Result = require("../models/result");
const Student = require("../models/student");


const getResults = async (req, res) => {

}

const getResultById = async (req, res) => {

    const { id } = req.params;

    const result = await Result.findByPk(id);

    if (result) {
        res.json(result);
    } else {
        res.status(404).json({
            mgs: `No existe un resultado con el id ${id}`
        });
    }

}

const getResultByEmail = async (req, res) => {

    const { email } = req.params;

    const result = await Result.findOne({
        where: {
            email: email
        }
    });

    if (result) {
        res.json(result);
    } else {
        res.status(404).json({
            mgs: `No existe un resultado con al que este asociado el correo: ${email}`
        });
    }

}

const getResultsCount = async (req, res) => {

    const count = await Result.count();

    const resultHealthy = await Result.count({
        where: {
            state: 'HEALTHY'
        }
    });

    const resultVulnerable = await Result.count({
        where: {
            state: 'VULNERABLE'
        }
    });

    const resultDanger = await Result.count({
        where: {
            state: 'DANGER'
        }
    });

    /// 7 - Grade
    const countResultHealthy7 = await Result.count({
        where: {
            grade: { [Op.substring]: "7" },
            state: 'HEALTHY'
        }
    });

    const countResultVulnerable7 = await Result.count({
        where: {
            grade: { [Op.substring]: "7" },
            state: 'VULNERABLE'
        }
    });

    const countResultDanger7 = await Result.count({
        where: {
            grade: { [Op.substring]: "7" },
            state: 'DANGER'
        }
    });

    /// 8 - Grade
    const countResultHealthy8 = await Result.count({
        where: {
            grade: { [Op.substring]: "8" },
            state: 'HEALTHY'
        }
    });

    const countResultVulnerable8 = await Result.count({
        where: {
            grade: { [Op.substring]: "8" },
            state: 'VULNERABLE'
        }
    });

    const countResultDanger8 = await Result.count({
        where: {
            grade: { [Op.substring]: "8" },
            state: 'DANGER'
        }
    });

    /// 9 - Grade
    const countResultHealthy9 = await Result.count({
        where: {
            grade: { [Op.substring]: "9" },
            state: 'HEALTHY'
        }
    });

    const countResultVulnerable9 = await Result.count({
        where: {
            grade: { [Op.substring]: "9" },
            state: 'VULNERABLE'
        }
    });

    const countResultDanger9 = await Result.count({
        where: {
            grade: { [Op.substring]: "9" },
            state: 'DANGER'
        }
    });

    /// 10 - Grade
    const countResultHealthy10 = await Result.count({
        where: {
            grade: { [Op.substring]: "10" },
            state: 'HEALTHY'
        }
    });

    const countResultVulnerable10 = await Result.count({
        where: {
            grade: { [Op.substring]: "10" },
            state: 'VULNERABLE'
        }
    });

    const countResultDanger10 = await Result.count({
        where: {
            grade: { [Op.substring]: "10" },
            state: 'DANGER'
        }
    });

    /// 11 - Grade
    const countResultHealthy11 = await Result.count({
        where: {
            grade: { [Op.substring]: "11" },
            state: 'HEALTHY'
        }
    });

    const countResultVulnerable11 = await Result.count({
        where: {
            grade: { [Op.substring]: "11" },
            state: 'VULNERABLE'
        }
    });

    const countResultDanger11 = await Result.count({
        where: {
            grade: { [Op.substring]: "11" },
            state: 'DANGER'
        }
    });

    /// 12 - Grade
    const countResultHealthy12 = await Result.count({
        where: {
            grade: { [Op.substring]: "12" },
            state: 'HEALTHY'
        }
    });

    const countResultVulnerable12 = await Result.count({
        where: {
            grade: { [Op.substring]: "12" },
            state: 'VULNERABLE'
        }
    });

    const countResultDanger12 = await Result.count({
        where: {
            grade: { [Op.substring]: "12" },
            state: 'DANGER'
        }
    });

    const countResult = {
        countResultHealthy7: countResultHealthy7,
        countResultVulnerable7: countResultVulnerable7,
        countResultDanger7: countResultDanger7,

        countResultHealthy8: countResultHealthy8,
        countResultVulnerable8: countResultVulnerable8,
        countResultDanger8: countResultDanger8,

        countResultHealthy9: countResultHealthy9,
        countResultVulnerable9: countResultVulnerable9,
        countResultDanger9: countResultDanger9,

        countResultHealthy10: countResultHealthy10,
        countResultVulnerable10: countResultVulnerable10,
        countResultDanger10: countResultDanger10,


        countResultHealthy11: countResultHealthy11,
        countResultVulnerable11: countResultVulnerable11,
        countResultDanger11: countResultDanger11,

        countResultHealthy12: countResultHealthy12,
        countResultVulnerable12: countResultVulnerable12,
        countResultDanger12: countResultDanger12,

        resultHealthy,
        resultVulnerable,
        resultDanger,
        count
    }

    res.json(countResult);
}

const postResults = async (req, res) => {

    // for (let i = 0; i < self_esteem.length; i++) {
    //     body.self_esteem = body.self_esteem - self_esteem[i];
    // }

    const { body } = req;

    const self_esteem = Object.values({ ...body.self_esteem }).map((x) => parseInt(x));
    body.self_esteem = ((self_esteem.reduce((a, b) => a + b, 0) * 100 / (self_esteem.length * 5)));

    const social_relationships = Object.values({ ...body.social_relationships }).map((x) => parseInt(x));
    body.social_relationships = (100 - social_relationships.reduce((a, b) => a + b, 0) * 100 / 5);

    const anxiety = Object.values({ ...body.anxiety }).map((x) => parseInt(x));
    body.anxiety = (anxiety.reduce((a, b) => a + b, 0) * 100 / (anxiety.length * 4));

    const depression = Object.values({ ...body.depression }).map((x) => parseInt(x));
    body.depression = (depression.reduce((a, b) => a + b, 0) * 100 / (depression.length * 3));

    const behavioral_interest_changes = Object.values({ ...body.behavioral_interest_changes }).map((x) => parseInt(x));
    body.behavioral_interest_changes = (behavioral_interest_changes.reduce((a, b) => a + b, 0) * 100 / (behavioral_interest_changes.length * 3));

    const last_month_mood = Object.values({ ...body.last_month_mood }).map((x) => parseInt(x));
    body.last_month_mood = ((last_month_mood.reduce((a, b) => a + b, 0) * 100 / (last_month_mood.length * 5)));

    const education = Object.values({ ...body.education }).map((x) => parseInt(x));
    body.education = (education.reduce((a, b) => a + b, 0) * 100 / education.length);

    const religion = Object.values({ ...body.religion }).map((x) => parseInt(x));
    body.religion = (religion.reduce((a, b) => a + b, 0) * 100 / 17);

    body.score = (body.self_esteem + body.social_relationships + body.anxiety + body.depression + body.behavioral_interest_changes + body.last_month_mood) / 6;

    if (75 < body.score && body.score <= 100) {
        body.state = 'DANGER'
    } else if (50 <= body.score && body.score <= 75) {
        body.state = 'VULNERABLE'
    } else {
        body.state = 'HEALTHY'
    }

    console.log(body);

    const result = new Result(body);
    await result.save();

    res.send(result)
}

const putResults = async (req, res) => {

}

const deleteResults = async (req, res) => {

}



module.exports = {
    getResults,
    getResultById,
    getResultByEmail,
    getResultsCount,
    postResults,
    putResults,
    deleteResults
}