const router = require("express").Router();
const mailer = require("../services/mail");

////////////////////////////////////////////
router.route("/sendMail")
    .post(mailer.sendMail);

////////////////////////////////////////////
module.exports = router;