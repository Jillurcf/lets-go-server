const getCreator = require('../../api/getCreator/controllers/getCreator')

const router = require('express').Router()

router.get('/users/:role', getCreator)

module.exports = router