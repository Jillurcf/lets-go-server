const findAllContest = require("../../../lib/contests/findAllContest")

const findAll = async (req, res) => {

    // const filter = req.query;
    
    const allContest = await findAllContest()
    res.send(allContest)
}

module.exports = findAll