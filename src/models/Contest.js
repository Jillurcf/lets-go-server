const {model, Schema} = require("mongoose");

const ContestShema = new Schema({
    "name": "string",
    "email": "string",
    "date": "string",
    "image": {
        type:String, required: true
    },
    "contestPrice": {
        type:Number, required:true
    },
    "participants": {
        type:Number
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


