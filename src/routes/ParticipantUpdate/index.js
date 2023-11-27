const participantUpdate = require('../../api/participantUpdate/Controllers/participantUpdate')

const router = require('express').Router()

router.put('/Contests/:id', participantUpdate)

module.exports = router