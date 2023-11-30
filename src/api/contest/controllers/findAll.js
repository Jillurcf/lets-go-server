const findAllContest = require("../../../lib/contests/findAllContest")

const findAll = async (req, res) => {

   const tags = req.query.tags
   console.log(tags)
    
    const allContest = await findAllContest(tags)
    res.send(allContest)
}

module.exports = findAll