const payments = require('../../../models/Payments')
const carts = require('../../../models/Carts')
const allPayments= async(req, res)=>{
        const info = req.body;
    
    const paymentResult = await payments.create(info)
  
    const query = {_id:{
        $in: info.cartId.map(id=> id)
    }}

    const deleteResult = await carts.deleteMany(query)
    res.send({paymentResult, deleteResult});

    console.log({paymentResult, deleteResult});
}

module.exports = allPayments