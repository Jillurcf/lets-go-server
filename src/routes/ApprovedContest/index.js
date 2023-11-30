const approveContest = require('../../api/approveContest/controller/approveContest')

const router = require('express').Router()

router.put('/contests/:id', approveContest)

module.exports = router