const gTTs = require("gtts");
const speech =
  "Tôi là Tài,tôi 22 tuổi,tôi sống ở vạn giã vạn ninh khánh hòa,nghề nghiệp của tôi là developer";
const gtts = new gTTs(speech, "vi");
gtts.save("voice.mp3", (err) => {
  if (err) throw new Error(err);
  console.log("Success");
});
