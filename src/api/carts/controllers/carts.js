const carts = require("../../../models/Carts")

const getCarts = async (req, res) => {

    const email = req.params.email
    console.log({email});
   
   const result = await carts.find({email})
   res.send(result)
   console.log(result);
}

module.exports = getCarts
