const Users = require('../../../models/Users')


const updateUsers= async(req, res)=>{
    const {id: _id} = req.params;
    // const updatedCount = req.body;
    // console.log(updatedCount);
    const contest = {
        $set: {        
          role: "creator"
                  
        }
    }
    const result = await Users.findByIdAndUpdate({_id}, contest, {
        new:true,
        runValidators: true
    })
    res.send(result)

    console.log(result);
}

module.exports = updateUsers