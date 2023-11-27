const Contest = require("../../models/Contest")

const findAllContest = async()=>{
    const cursor = await Contest.find().sort({ "participants": -1 })
    return cursor
}

module.exports = findAllContest