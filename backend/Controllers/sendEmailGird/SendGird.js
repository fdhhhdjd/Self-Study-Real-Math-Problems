const sgMail = require("@sendgrid/mail");
const API_KEY = process.env.API_KEY;
sgMail.setApiKey(API_KEY);
module.exports = {
  sendEmailGrid: () => {
    const message = {
      to: "nguyentientai10@gmail.com",
      from: "nguyentientai10@gmail.com",
      subject: "heloo tai",
      text: "heloooooooooooo",
      html: "<h1>Xin chao</h1>",
    };
    sgMail
      .send(message)
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
