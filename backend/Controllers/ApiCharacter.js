const { default: axios } = require("axios");
const {
  incr,
  expire,
  ttl,
  get,
  set,
  incrby,
  decrby,
  exists,
  setnx,
  addDelayEventOrder,
  setNoEx,
} = require("../models/Limited");

const ApiCharacterCtrl = {
  GetAllCharacter: async (req, res, next) => {
    try {
      // Search Data in Redis
      const reply = await get("characters");
      // if exists returns from redis and finish with response
      if (reply) {
        return res.json({
          msg: "Get All Successfully",
          data: JSON.parse(reply),
        });
      }
      // / Fetching Data from Rick and Morty API
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      await setNoEx("characters", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  },
  GetIdCharacter: async (req, res, next) => {
    const reply = await get(req.params.id);
    if (reply)
      return res.json({
        msg: `Get ${req.params.id} Successfully`,
        data: JSON.parse(reply),
      });
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/" + req.params.id
    );
    await set(req.params.id, JSON.stringify(response.data), 10);
  },
};
module.exports = ApiCharacterCtrl;
