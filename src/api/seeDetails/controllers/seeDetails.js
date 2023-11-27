const Contests = require('../../../models/Contest')
const seeDetails= async(req, res)=>{
    const {id: _id} = req.params;
    // console.log(id);
    // const filter = { _id: new ObjectId(id)}
    // const options = {upsert: true};
    
    
    const result = await Contests.findOne({_id} )
  
    res.send(result)

    console.log(result);
}

module.exports = seeDetails