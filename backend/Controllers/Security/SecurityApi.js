const { getSign } = require("../../Utils/CheckSecurity");
const manu = [
  {
    name: "tai",
    number: "7",
  },
  {
    name: "hien",
    number: "10",
  },
];
const city = [
  {
    name: "loan",
    number: "8",
  },
  {
    name: "duc",
    number: "9",
  },
];
const SecurityApi = {
  Security: async (req, res) => {
    try {
      const { stime, sign, nonce, club } = req.query;
      console.log(stime, sign, nonce, club);
      if (!stime && !sign && !nonce) {
        return res.status(400).json({
          status: "error",
          message: "Bad Request",
        });
      }
      //!compare time
      const isTime = Math.floor((Date.now() - stime) / 1000);
      console.log(isTime);
      if (isTime > 30) {
        return res.status(401).json({
          status: "error",
          message: "Expired",
        });
      }
      const signServer = await getSign(req.query);
      console.log(signServer);
      if (signServer !== sign) {
        return res.status(400).json({
          status: "error",
          message: "Sign invalid",
        });
      }
      return res.status(200).json({
        status: "success",
        elements: club === "manu" ? manu : city,
      });
    } catch (error) {
      res.json({
        error: error.stack,
      });
    }
  },
};
module.exports = SecurityApi;
