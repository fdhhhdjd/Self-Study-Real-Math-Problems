const { _Users } = require("../models/user.model");
const { _Otp } = require("../models/otp.model");
const { insertOtp, validOtp } = require("./otp.service");

const OtpGenerator = require("otp-generator");
module.exports = {
  VerifyOtp: async ({ email, otp }) => {
    try {
      const otpHolder = await _Otp.find({
        email,
      });
      if (!otpHolder.length) {
        return {
          code: 404,
          message: "Expired OTP !!!",
        };
      }
      //! lấy otp cuối cùng
      //! [1,2,3,4]=4-1
      const lastOtp = otpHolder[otpHolder.length - 1];
      console.log(lastOtp);
      const isValid = await validOtp({
        otp,
        hashOtp: lastOtp.otp,
      });
      if (!isValid) {
        return {
          code: 401,
          message: "Invalid OTP",
        };
      }
      if (isValid && email === lastOtp.email) {
        const user = await _Users.create({
          userId: 1,
          email,
          username: "tai dep trai",
        });
        if (user) {
          //Delete otp in Database
          await _Otp.deleteMany({
            email,
          });
        }
        return {
          code: 201,
          element: user,
        };
      }
    } catch (error) {
      console.error(error);
    }
  },
  registerUser: async ({ email }) => {
    const user = await _Users.findOne({ email: email });
    if (user) {
      return {
        code: 400,
        message: "This email is already in user",
      };
    }
    const OTP = OtpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log(`OTP is:::`, OTP);
    return {
      code: 200,
      element: await insertOtp({
        otp: OTP,
        email,
      }),
    };
  },
};
