const Contests = require("../../../models/Contest")

const getTags = async (req, res) => {
    const { tag } = req.query;
    // const query = req.query.tags;
//    const result = await Contests.find({query})
const result = await Contests.find({ tags: tag });
   res.send(result)
}

module.exports = getTags





