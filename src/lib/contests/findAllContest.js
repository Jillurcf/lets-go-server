const Contest = require("../../models/Contest")

const findAllContest = async()=>{
    const cursor = await Contest.find()
    return cursor
}

module.exports = findAllContest