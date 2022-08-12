const { video } = require("tiktok-scraper");
const REDIS = require("../configs/redis");
async function addVideo(videoID) {
  console.log(await REDIS.set(`video::${videoID}`, 0));
}
// addVideo(1001);
async function playVideo(videoID, userId) {
  try {
    const keyVideo = `video::${videoID}`;
    const keyUserId = `users:${userId}`;
    //NX: khong ton tai thi ms set
    //EX: thoi gian het han
    console.log(`userId::${keyUserId},::: videoId::${keyVideo}`);
    const isOk = await REDIS.set(keyUserId, "hits", "NX", "EX", 20);
    console.log(`isOke:::`, isOk);
    if (isOk === "OK") {
      await REDIS.incrby(keyVideo, 1);
    }
  } catch (error) {}
}
playVideo(1001, 102);
//!lấy ip
// !getRemoteAddr()
