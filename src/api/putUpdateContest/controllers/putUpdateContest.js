const Contest = require('../../../models/Contest')


const updateContest= async(req, res)=>{
    const {id: _id} = req.params;
    // const updatedCount = req.body;
    // console.log(updatedCount);
   const info = req.body;
    const result = await Contest.findByIdAndUpdate({_id}, info, {
        new:true,
        runValidators: true
    })
    res.send(result)

    console.log(result);
}

module.exports = updateContest