const Contests = require("../../../models/Contest")

const getTags = async (req, res) => {
    const { tags } = req.query;
    console.log(tags)
    // const query = req.query.tags;
//    const result = await Contests.find({query})
const result = await Contests.find({ tags: tags });
   res.send(result)
}

module.exports = getTags





