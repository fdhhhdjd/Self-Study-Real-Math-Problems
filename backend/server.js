const express = require("express");
const app = express();
app.use(express.json());
//!router import
const Users = require("./Routes/UserRoute");

//!Link router Main
app.use("/api/user", Users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is listening on port:http://localhost:${PORT}`)
);
