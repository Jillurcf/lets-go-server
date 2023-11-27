const seeDetails = require('../../api/seeDetails/controllers/seeDetails')

const router = require('express').Router()

router.get('/Contests/:id', seeDetails)

module.exports = router