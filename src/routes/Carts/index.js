
const verifyToken = require("../../middlewares/verifyToken")
const getCarts = require('../../api/carts/controllers/carts')
const router = require('express').Router()

router.get('/carts/:email', getCarts)


module.exports = router