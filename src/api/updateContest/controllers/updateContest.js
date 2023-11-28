const contest = require("../../../models/Contest")

const updateContest = async (req, res) => {

    const {id: _id} = req.params
   const result = await contest.findOne({_id})
   res.send(result)
   console.log(result);
}

module.exports = updateContest
