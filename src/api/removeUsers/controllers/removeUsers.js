const Users = require("../../../models/Users")

const removeUsers = async (req, res) => {

    const {id: _id} = req.params
   
   
   const result = await Users.deleteOne({_id})
   res.send(result)
   console.log(result);
}

module.exports = removeUsers
