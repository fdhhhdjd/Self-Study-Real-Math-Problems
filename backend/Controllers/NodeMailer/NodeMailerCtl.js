const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const {
  GOOGLE_CLIENT_IDS,
  GOOGLE_CLIENT_SECRETS,
  GOOGLE_URL,
  GOOGLE_REFRESH_TOKEN,
} = process.env;
const oAuth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_IDS,
  GOOGLE_CLIENT_SECRETS,
  GOOGLE_URL
);
oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });
const NodeMailerCtl = {
  NodeMailers: async (req, res) => {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "oAuth2",
          user: "nguyentientai10@gmail.com",
          clientId: GOOGLE_CLIENT_IDS,
          clientSecret: GOOGLE_CLIENT_SECRETS,
          refreshToken: GOOGLE_REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      //Option event
      let info = await transport.sendMail({
        from: '"Fred Foo 👻" nguyentientai10@gmail.com', // sender address
        to: "nguyentientai9@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      return res.status(200).json({
        msg: "Send mail Success",
        info,
      });
    } catch (error) {}
  },
};
module.exports = NodeMailerCtl;
