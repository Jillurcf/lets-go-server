const updateUsers = require('../../api/putUpdateContest/controllers/putUpdateContest')

const router = require('express').Router()

router.put('/contests/:id', updateUsers)

module.exports = router