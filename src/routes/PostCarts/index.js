
const verifyToken = require("../../middlewares/verifyToken")
const addCarts = require('../../api/postCarts/controllers/postCarts')
const router = require('express').Router()

router.post('/carts', addCarts)


module.exports = router