const express = require("express");
const responseTime = require("response-time");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./configs/db");
connectDB();
const app = express();
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
//!router import
const Users = require("./Routes/UserRoute");
const ApiCharacterRoute = require("./Routes/ApiCharacterRoute");
const TransactionCtrlRoute = require("./Routes/TransactionRoute");
const DownloadVideoRoute = require("./Routes/DownloadVideoRoute");
const Upload = require("./Routes/UploadRoute");
const GetLink = require("./Routes/GetLink");

//!Link router Main
app.use("/api/user", Users);
app.use("/api/user", ApiCharacterRoute);
app.use("/api", DownloadVideoRoute);
app.use("/api", TransactionCtrlRoute);
app.use("/api", Upload);
app.use("/backend/Assets", GetLink);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
