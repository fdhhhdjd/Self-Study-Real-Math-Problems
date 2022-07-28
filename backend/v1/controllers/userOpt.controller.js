const { registerUser, VerifyOtp } = require("../services/userOtp.service");
const UserOtpCtl = {
  registerUsers: async (req, res, next) => {
    try {
      const { email } = req.body;
      const { code, message, element } = await registerUser({ email });
      return res.status(code).json({ code, message, element });
    } catch (error) {
      console.error(error);
    }
  },
  verifyOtpUser: async (req, res, next) => {
    try {
      const { email, otp } = req.body;

      const { code, element, message } = await VerifyOtp({
        email,
        otp,
      });
      return res.status(code).json({ code, message, element });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = UserOtpCtl;
