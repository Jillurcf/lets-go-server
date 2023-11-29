const users = require("../../../models/Users")

const getCreator = async (req, res) => {

    
   const result = await users.find({role: 'creator'})
   res.send(result)
}

module.exports = getCreator