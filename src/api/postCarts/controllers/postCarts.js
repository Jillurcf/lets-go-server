const Carts = require('../../../models/Carts')
const addCarts= async(req, res)=>{
        const info = req.body;
    
    const result = await Carts.create(info)
  
    res.send(result)

    console.log(result);
}

module.exports = addCarts