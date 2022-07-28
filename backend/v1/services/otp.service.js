"use strict";
const { _Otp } = require("../models/otp.model");
const bcrypt = require("bcrypt");
module.exports = {
  validOtp: async ({ otp, hashOtp }) => {
    try {
      const invalidOtp = await bcrypt.compare(otp, hashOtp);
      return invalidOtp;
    } catch (error) {
      console.error(error);
    }
  },
  insertOtp: async ({ otp, email }) => {
    try {
      //!hash 10 là vừa đẹp bởi vì nếu nhiều quá thì cpu sẽ làm việc rất mệt
      const salt = await bcrypt.genSalt(10);
      const hashOtp = await bcrypt.hash(otp, salt);
      const Otp = await _Otp.create({
        email,
        otp: hashOtp,
      });
      return Otp ? 1 : 0;
    } catch (error) {
      console.error(error);
    }
  },
};
