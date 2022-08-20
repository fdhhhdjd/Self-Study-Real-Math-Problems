const express = require("express");
const responseTime = require("response-time");
const dotenv = require("dotenv");
const cors = require("cors");
var session = require("express-session");
const Redis = require("ioredis");
let RedisStore = require("connect-redis")(session);
const EventEmitter = require("events");
let redisClient = new Redis();
const myEvent = new EventEmitter();
const connectDB = require("./configs/db");
// require("./fileStudy/index");
require("./fileStudy/CaculationViewRedis");
connectDB();
const app = express();
// app.set("trust proxy", 1);
// trust first proxy
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "keyboard cat",
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
app.get("/", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "Tài Đẹp trai ",
    timestamp: Date.now(),
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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
