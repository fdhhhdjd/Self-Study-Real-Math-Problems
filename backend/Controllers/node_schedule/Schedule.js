var schedule = require("node-schedule");
const Schedule = () => {
  //5 Milliseconds run code
  var cronExpress = "*/5 * * * *";
  schedule.scheduleJob(cronExpress, () => {
    console.log("running job!");
  });
};
module.exports = Schedule;
