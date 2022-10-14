const express = require("express");
const responseTime = require("response-time");
const dotenv = require("dotenv");
const cors = require("cors");
var session = require("express-session");
const passport = require("passport");
const Redis = require("ioredis");
let RedisStore = require("connect-redis")(session);
const EventEmitter = require("events");
var schedule = require("node-schedule");
const cluster = require("cluster");
const os = require("os");
let redisClient = new Redis();
const myEvent = new EventEmitter();
const connectDB = require("./configs/db");
const REDIS_IO = require("./configs/redis");
const Schedule = require("./Controllers/node_schedule/Schedule");
const { sendEmailGrid } = require("./Controllers/sendEmailGird/SendGird");
require("./Controllers/upload_google_drive/Gooogle_Drive");
// const backupMongoDB = require("./Controllers/backup_mongo/backup_mongo");
const numCpu = os.cpus().length;
// require("./fileStudy/index");

//!If else and Switch
// require("./fileStudy/IfEleseandSwitchcase/Index");

//! Handle error
require("./fileStudy/HanderError/HanderError");

//! Change Voice Speak
// require("./fileStudy/ChageVoiceSpeek/ChangeVoice");

//! Schedule
Schedule();

//! Schedule
// sendEmailGrid();

//! Backup Mongo
// backupMongoDB();

//! Google drive
require("./Controllers/upload_google_drive/Gooogle_Drive");
//! Design Patterns
//* Strategy pattern */
require("./fileStudy/Design-Patterns/Strategy-pattern/StrategyPattern");

//* Observer pattern */
require("./fileStudy/Design-Patterns/Observer-pattern/Observer.pattern");

//* Facede pattern */
require("./fileStudy/Design-Patterns/Facade-pattern/Facade-pattern");

//* Facede pattern */
require("./fileStudy/Design-Patterns/Proxy-Patterns/proxy-patterns");

connectDB();

const app = express();
// app.set("trust proxy", 1);
// trust first proxy
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.KEY_SESSION,
    //!đặt lại session hoặc cookie theo mỗi yêu cầu sảy ra
    resave: false,
    //! bất kì co session hoặc cookie khi có yêu cầu sẽ được đánh dấu bởi connect
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
    },
  })
);
app.use(responseTime());
app.use(express.json());
app.use(cors());

//PassPort
//passport
// Init passport authentication
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());
app.get("/", async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: `Tài Đẹp trai ${process.pid} `,
    timestamp: Date.now(),
    // cluster: cluster.worker.kill(),
  };

  return res.send(healthcheck);
});
//Listener event
// myEvent.on("geterror", (err, err2) => {
myEvent.once("geterror", (err, err2) => {
  //ghi log error
  console.log(`error`, err, err2);
});

//
// setTimeout(() => {
//   myEvent.emit(
//     "geterror",
//     { msg: "Loi roi anh em oi" },
//     { msg: "Loi nang roi anh em oi" }
//   );
// }, 2000);
//Chuyển đổi kiểu dữ liệu

const typeOf = (value) => Object.prototype.toString.call(value).slice(8, -1);
// console.log(typeOf([]));

//!router import
const User = require("./Routes/UserRoute");
const ApiCharacterRoute = require("./Routes/ApiCharacterRoute");
const TransactionCtrlRoute = require("./Routes/TransactionRoute");
const DownloadVideoRoute = require("./Routes/DownloadVideoRoute");
const Upload = require("./Routes/UploadRoute");
const GetLink = require("./Routes/GetLink");
const EcommerceRoute = require("./Routes/EcommerceRoute");
const CommentRoute = require("././v1/routes/comment.route");
const sessionRoute = require("./Routes/SessionsRoute");
const userOtpRoute = require("./v1/routes/userotp.route");
const jwtUserRedis = require("./Routes/JwtUserRedis");

//PassPort
const PassPort = require("./Routes/PassportRoute/PassportRoute");

//Security Api
const Security = require("./Routes/Security.Route/Security.Route");

//Node mailer
const NodeMailer = require("./Routes/NodeMailer.model/NodeMailer.model");

//!Link router Main
app.use("/api/user", User);
app.use("/api/user", ApiCharacterRoute);
app.use("/api", DownloadVideoRoute);
app.use("/api", TransactionCtrlRoute);
app.use("/api", Upload);
app.use("/backend/Assets", GetLink);
app.use("/api/ecommerce", EcommerceRoute);
app.use("/api", CommentRoute);
app.use("/api", sessionRoute);
app.use("/api/v1", userOtpRoute);
app.use("/api", jwtUserRedis);
app.use("/api/passport", PassPort);
app.use("/api", Security);
app.use("/api", NodeMailer);
//Cluster
// if (cluster.isMaster) {
//   for (let i = 0; i < numCpu; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`${worker.process.pid} died`);
//     cluster.fork();
//   });
// } else {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT);
//   console.log(`Running on http://localhost:${PORT}`);
// }
// No cluster
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
