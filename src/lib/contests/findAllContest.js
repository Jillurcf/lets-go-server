const Contest = require("../../models/Contest")

const findAllContest = async(tags)=>{
    if(tags){
        const cursor = await Contest.find({tags}).sort({ "participants": -1 })

        return cursor
    }
    const cursor = await Contest.find().sort({ "participants": -1 })
   
    return cursor
    
}

module.exports = findAllContest