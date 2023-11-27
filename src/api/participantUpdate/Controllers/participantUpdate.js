const updateContest = require('../../../models/Contest')
// const updateContest = require('../../../routes/Contests')

const updateParticipant= async(req, res)=>{
    const {id: _id} = req.params;
    // console.log(id);
    // const filter = { _id: new ObjectId(id)}
    // const options = {upsert: true};
    const updatedCount = req.body;
    console.log(updatedCount);
    const contest = {
        $set: {        
          participants: updatedCount.participants
                  
        }
    }
    const result = await updateContest.findByIdAndUpdate({_id}, contest, {
        new:true,
        runValidators: true
    })
    res.send(result)

    console.log(result);
}

module.exports = updateParticipant