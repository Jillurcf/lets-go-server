const Users = require('../../../models/Users')
const crateUsers= async(req, res)=>{
        const info = req.body;
    
    const result = await Users.create(info)
  
    res.send(result)

    console.log(result);
}

module.exports = crateUsers