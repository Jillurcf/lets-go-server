const router = require('express').Router()
const addContest = require('../../api/addContest/controllers/addContest')

router.post('/contests', addContest)

module.exports = router