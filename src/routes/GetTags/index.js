const getTags = require('../../api/getTags/controllers/getTags')

const router = require('express').Router()

router.get(`/contests/:id`, getTags)

module.exports = router