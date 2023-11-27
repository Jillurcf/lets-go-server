const getUsers = require('../../api/getUsers/Controllers/index')

const router = require('express').Router()

router.get('/Users', getUsers)

module.exports = router