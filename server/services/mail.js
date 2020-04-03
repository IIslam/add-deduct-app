"use strict";
require("dotenv").config();

const { getFromEmail } = require("../utilities");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const fromEmail = getFromEmail();

/////////////////////////////////////////////////////////////

const sendEmail = (
  toMailList,
  subject,
  htmlbody,
  callBack,
  errCallBack = () => {}
) => {
  // TODO: make the mail template ready

  let msg = {
    from: fromEmail,
    to: toMailList,
    subject: subject,
    html: htmlbody
  };

  console.log("Message:", msg);

  sgMail.send(msg, function(err) {
    if (err) throw err;
    else {
      console.log("Email Sent");
    }
  });
};

module.exports = { sendEmail };
