const allPayements = require('../../api/payments/Controllers/payments')

const router = require('express').Router()

router.post('/payments', allPayements)

module.exports = router