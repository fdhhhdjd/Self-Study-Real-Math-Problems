const {
  STATUS_CODE_100,
  STATUS_CODE_101,
  STATUS_CODE_102,
  STATUS_CODE_103,
  STATUS_CODE_200,
  STATUS_CODE_201,
  STATUS_CODE_202,
  STATUS_CODE_203,
  STATUS_CODE_204,
  STATUS_CODE_DEFAULT,
} = require("../../../contants/contants");
module.exports = {
  //!Status_Codes
  reasonPhraseCodePro: () => {
    const result = {
      100: STATUS_CODE_100,
      101: STATUS_CODE_101,
      102: STATUS_CODE_102,
      103: STATUS_CODE_103,
      200: STATUS_CODE_200,
      201: STATUS_CODE_201,
      202: STATUS_CODE_202,
      203: STATUS_CODE_203,
      204: STATUS_CODE_204,
      default: STATUS_CODE_DEFAULT,
    };
    return result;
  },
  //!Status_Codes New Map
  reasonPhraseCodeProNewMap: () => {
    const result = new Map([
      ["100", STATUS_CODE_100],
      ["101", STATUS_CODE_101],
      ["102", STATUS_CODE_102],
      ["103", STATUS_CODE_103],
      ["200", STATUS_CODE_200],
      ["201", STATUS_CODE_201],
      ["202", STATUS_CODE_202],
      ["203", STATUS_CODE_203],
      ["204", STATUS_CODE_204],
      ["default", STATUS_CODE_DEFAULT],
    ]);
    return result;
  },
};
