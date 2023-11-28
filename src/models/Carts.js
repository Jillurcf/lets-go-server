const {model, Schema} = require("mongoose");

const CartsShema = new Schema({
    "name": "string",
    "email": {
        type:String
    },
    "contestId": {
        type:String 
    },
    "image": {
        type:String 
    },
    "description": {
        type:String 
    },
    "price": {
        type:Number 
    },
    "prizeMoney": {
        type:Number 
    },
    "tags": {
        type:Number 
    },
    
   
})

const Carts= model("Carts", CartsShema)

module.exports = Carts