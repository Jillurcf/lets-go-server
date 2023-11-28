const deleteContest = require('../../api/delelteContest/controllers/deleteContest')
const verifyToken = require("../../middlewares/verifyToken")

const router = require('express').Router()

router.delete('/contests/:id', deleteContest)


module.exports = router