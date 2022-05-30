const REDIS = require("../configs/redis");

const express = require("express");
const app = express();

REDIS.psubscribe("__keyevent@0__:expired");
REDIS.on("pmessage", (pattern, channel, message) => {
  console.log(`message:::::`, message);
  console.log("Sau khi chung ta co orderID:::", message);
  //Update trong BD la orderID chua thanh toan...
});

app.listen(process.env.PORT || 3010, () => {
  console.log(`EventListener is running 3010`);
});
