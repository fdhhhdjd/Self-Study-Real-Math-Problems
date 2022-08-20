const REDIS = require("../configs/Redis");
var jwt = require("jsonwebtoken");
const JwtRedis = {
  Login: async (req, res) => {
    try {
      const faceUser = {
        name: "fdhhhdjd",
        email: "nguyentientai10@gmail.com",
        password: "asdasdnjlashdjasnsd;lasjdlkasdm",
      };
      const data = await REDIS.get("counter");
      await REDIS.set("counter", parseInt(data) + 1);
      const token = jwt.sign(
        {
          data: faceUser,
        },
        "secret",
        { expiresIn: "1d" }
      );
      await REDIS.set(parseInt(data) + 1, token);
      res.cookie("jwt-id", parseInt(data) + 1);
      return res.send("oke");
    } catch (error) {
      console.log(error);
    }
  },
  Protected: async (req, res) => {
    const { id } = req.body;
    const token = await REDIS.get(id);
    const user = jwt.verify(token, "secret", function (err, decoded) {
      return decoded;
    });
    return res.send(user);
  },
};
module.exports = JwtRedis;
