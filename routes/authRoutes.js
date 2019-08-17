const Authentication = require("../controllers/authentication");
require("../services/passport");
const passport = require("passport");
const Mailer = require("../services/Mailer");
const cors = require("cors");
const contactTemplate = require("../services/emailTemplates/emailTemplate");

// const requireAuth = passport.authenticate("jwt", { session: false });
// const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send({ hi: "there" });
  });
  // app.post("/signin", requireSignin, Authentication.signin);
  // app.post("/signup", Authentication.signup);
  app.post("/sendMail", cors(), (req, res) => {
    const { title, subject, body, recipient } = req.body;
    const mailObj = {
      title,
      subject,
      body,
      recipient,
      dateSent: Date.now()
    };
    const mailer = new Mailer(mailObj, contactTemplate(mailObj.body));
    mailer.send();
    res.send("mail sent successfully");
  });
};
//fhhjahs
