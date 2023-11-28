const updateUsers = require('../../api/updateUsers/controllers/updateUsers')

const router = require('express').Router()

router.put('/users/creator/:id', updateUsers)

module.exports = router