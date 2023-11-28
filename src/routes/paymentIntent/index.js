const router = require('express').Router()
const paymentIntent = require('../../api/paymentintent/Controllers/paymentIntent')

router.post('/create-payment-intent', paymentIntent)

module.exports = router