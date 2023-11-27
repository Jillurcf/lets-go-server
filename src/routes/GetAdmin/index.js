const getAdmin = require('../../api/authentication/getAdmin/controllers/getAdmin')
const verifyToken = require("../../middlewares/verifyToken")

const router = require('express').Router()

router.get('/users/admin/:email', getAdmin)


module.exports = router