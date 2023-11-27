const createUsrs = require('../../api/Users/Controllers/users')

const router = require('express').Router()

router.post('/Users', createUsrs)

module.exports = router