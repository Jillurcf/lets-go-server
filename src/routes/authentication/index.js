const express = require("express");
const createCookieToken = require("../../api/authentication/controllers/createCookieToken");
const router = express.Router();

router.post('/jwt', createCookieToken)


module.exports = router;