const {model, Schema} = require("mongoose");

const PaymentsShema = new Schema({
    "contestName": "string",
    "email": {
        type:String, required: true
    },
    "price": {
        type:Number , required: true
    },
    "transactionId": {
        type:String, required:true
    },
    "date": {
        type:String, required:true
    },
    "cartId": {
        type:Object, 
    },
    "contestIds": {
        type:Object, 
    },
    "status": {
        type:String, 
    },
})

const Payments= model("Payments", PaymentsShema)

module.exports = Payments