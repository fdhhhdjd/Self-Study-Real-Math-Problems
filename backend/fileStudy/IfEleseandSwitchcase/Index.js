//! Lv2
// const isOk = user.age > 30 && user.name === "tientai" && user.job === "dev";
// if (isOk) {
//   ...todo
// }

//! Lv3
// const isOk = (user) => {
//   return user.age > 30 && user.name === "tientai" && user.job === "dev";
// };
// if(isOk(user)){
//     ...todo
// }

//! If else Deference Switch Case

// {
//     '100': 'Continue',
//     '101': 'Switching Protocols',
//     '102': 'Processing',
//     '103': 'Early Hints',
//     '200': 'OK',
//     '201': 'Created',
//     '202': 'Accepted',
//     '203': 'Non-Authoritative Information',
//     '204': 'No Content',
//   }

// *** If else ***
// const reasonPhraseCode = (code) => {
//   if (code === 100) {
//     console.log("Continue");
//   } else if (code === 101) {
//     console.log("Switching Protocols'");
//   } else if (code === 102) {
//     console.log("Processing");
//   } else if (code === 103) {
//     console.log("Early Hints");
//   } else if (code === 200) {
//     console.log("Ok");
//   } else if (code === 201) {
//     console.log("Created");
//   } else if (code === 202) {
//     console.log("Accepted");
//   } else if (code === 203) {
//     console.log("Non-Authoritative Information");
//   } else if (code === 204) {
//     console.log("No Content");
//   }
// };
// *** Switch Case ***
// const reasonPhraseCode = (code) => {
//   switch (code) {
//     case 100:
//       console.log("Continue");
//       break;
//     case 101:
//       console.log("Switching Protocols'");
//       break;
//     case 102:
//       console.log("Processing");
//       break;
//     case 103:
//       console.log("Early Hints");
//       break;
//     case 200:
//       console.log("Ok");
//       break;
//     case 201:
//       console.log("Created");
//       break;
//     case 202:
//       console.log("Accepted");
//       break;
//     case 203:
//       console.log("Non-Authoritative Information");
//       break;
//     case 204:
//       console.log("No Content");
//       break;
//     default:
//       console.log("No Code");
//       break;
//   }
// };

//* Level 1 Pro
// const { reasonPhraseCodePro } = require("./utils/reasonPhraseCode");

// const returnReasons = (code) => {
//   console.log(reasonPhraseCodePro()[code] || reasonPhraseCodePro()["default"]);
// };
// returnReasons(200);

//* Level 2 Pro New Map
const { reasonPhraseCodeProNewMap } = require("./utils/reasonPhraseCode");
const returnReasons = (code) => {
  console.log(reasonPhraseCodeProNewMap().get(code));
};

returnReasons("200");
