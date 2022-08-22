const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;
var mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "password",
  database: "dev",
  insecureAuth: true,
});

app.get("/pool2", (req, res) => {
  pool.query("select * from users limit 10", (error, records, field) => {
    if (error) {
      console.log("error connecting", error);
      res.send(error);
      return;
    }
    console.log(`records[0]:::`, records);
    res.send(records[0]);
    // pool.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
