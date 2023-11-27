const users = require("../../../../models/Users")

const getAdmin = async (req, res) => {

    const email = req.params.email
    console.log({email});
   
   const result = await users.findOne({email})
   res.send(result)
}

module.exports = getAdmin
