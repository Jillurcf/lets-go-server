const contest = require("../../../models/Contest")

const deleteContest = async (req, res) => {

    const {id: _id} = req.params
   
   
   const result = await contest.deleteOne({_id})
   res.send(result)
   console.log(result);
}

module.exports = deleteContest
