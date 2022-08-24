const md5 = require("md5");
module.exports = {
  getSign: (params) => {
    const keyToken = "xxxxYYYY";

    var sortKeys = [];
    params.key = keyToken;
    params.v = "v1";
    for (const key in params) {
      if (key !== "sign") {
        sortKeys.push(key);
      }
    }
    sortKeys.sort();
    let paramsHolder = "";
    sortKeys.forEach((key) => {
      paramsHolder += key + params[key];
    });
    return md5(paramsHolder).toString();
  },
};
