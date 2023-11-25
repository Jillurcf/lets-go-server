const findAll = require('../../api/contest/controllers/findAll')
const verifyToken = require("../../middlewares/verifyToken")

const router = require('express').Router()

router.get('/Contests', findAll)

module.exports = router