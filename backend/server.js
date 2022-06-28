const express = require("express");
const responseTime = require("response-time");

const app = express();
app.use(responseTime());

app.use(express.json());
//!router import
const Users = require("./Routes/UserRoute");
const ApiCharacterRoute = require("./Routes/ApiCharacterRoute");

//!Link router Main
app.use("/api/user", Users);

app.use("/api/", ApiCharacterRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is listening on port:http://localhost:${PORT}`)
);
