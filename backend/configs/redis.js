const IOREDIS = require("ioredis");
const REDIS = new IOREDIS({
  port: 6379,
  host: "127.0.0.1",
});

REDIS.on("connect", () => {
  console.log("Client connected to redis Push...");
});
REDIS.on("ready", () => {
  console.log("Client connected to redis push and ready to use...");
});
REDIS.on("error", (error) => {
  console.log("fail");
});
REDIS.on("end", () => {
  console.log("Client disconnected from redis push");
});
REDIS.on("SIGINT", () => {
  REDIS.quit();
});

module.exports = REDIS;
