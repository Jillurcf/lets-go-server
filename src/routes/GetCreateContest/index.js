const getCreatorContest = require('../../api/getCreateContest/controllers/getCreateContest')

const router = require('express').Router()

router.get('/Contests/creator/:email', getCreatorContest)

module.exports = router