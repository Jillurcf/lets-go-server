const users = require("../../../models/Users")

const getUsers = async (req, res) => {

    
   const result = await users.find()
   res.send(result)
}

module.exports = getUsers