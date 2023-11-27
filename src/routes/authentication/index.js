const express = require("express");
const createCookieToken = require("../../api/authentication/controllers/createAuthCookie");
const router = express.Router();

router.post('/jwt', createCookieToken)

module.exports = router;



// const express = require("express");
// const createCookieToken = require("../../api/authentication/ParticipantUpdate/controllers/createCookieToken");
// const router = express.Router();

// router.post('/jwt', createCookieToken)


// module.exports = router;