const Contest = require('../../../models/Contest')
const mongoose = require("mongoose");


const approveContest= async(req, res)=>{
   const {id: _id} = req.params;
console.log(_id)
    // const updatedCount = req.body;
    // console.log(updatedCount);
    const updatedDoc = {
        // $set: {        
          statu: "approved"         
        // }
    }
    console.log(updatedDoc)
    const result = await Contest.findByIdAndUpdate(_id, updatedDoc, {
        new:true,
        
    })
  
    res.send(result)

   
}

module.exports = approveContest

// runValidators: true