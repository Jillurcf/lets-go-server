const findOne = require('../../api/updateContest/controllers/updateContest')
const verifyToken = require("../../middlewares/verifyToken")

const router = require('express').Router()

router.get('/contests/:id', findOne)


module.exports = router