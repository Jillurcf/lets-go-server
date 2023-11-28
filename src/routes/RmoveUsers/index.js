const removeUser = require('../../api/removeUsers/controllers/removeUsers')
const verifyToken = require("../../middlewares/verifyToken")

const router = require('express').Router()

router.delete('/users/:id', removeUser)


module.exports = router