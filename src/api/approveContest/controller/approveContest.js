const Contest = require('../../../models/Contest')


const approveContest= async(req, res)=>{
    const {id: _id} = req.params;
    // const updatedCount = req.body;
    // console.log(updatedCount);
    const contest = {
        $set: {        
          statu: "approved"         
        }
    }
    const result = await Contest.findByIdAndUpdate({_id}, contest, {
        new:true,
        runValidators: true
    })
    res.send(result)

    console.log(result);
}

module.exports = approveContest