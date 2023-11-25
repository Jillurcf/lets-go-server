const {model, Schema} = require("mongoose");

const ContestShema = new Schema({
    "contestName": "string",
    "image": {
        type:String, required: true
    },
    "description": {
        type:String , required: true
    },
    "price": {
        type:Number, required:true
    },
    "participants": {
        type:Number, required:true
    },
    "prizeMoney": {
        type:Number, required:true
    },
    "instruction": {
        type:String, required:true
    },
    "tags": {
        type:String, required: true
    },
})

const Contest= model("Contest", ContestShema)

module.exports = Contest