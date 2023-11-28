const Contest = require('../../../models/Contest')
const addContest= async(req, res)=>{
        const info = req.body;
    
    const result = await Contest.create(info)
  
    res.send(result)

    console.log(result);
}

module.exports = addContest