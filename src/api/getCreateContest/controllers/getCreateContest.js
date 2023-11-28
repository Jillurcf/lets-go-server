const Contests = require('../../../models/Contest')
const creatorContest= async(req, res)=>{
    const email = req.params.email
    console.log({email});
    
    const result = await Contests.find({email} )
  
    res.send(result)

    console.log(result);
}

module.exports = creatorContest


