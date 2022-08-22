const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;
var mysql = require("mysql2");
function getConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "dev",
    insecureAuth: true,
  });
}
app.get("/normal", (req, res) => {
  const conn = getConnection();
  conn.connect((err) => {
    if (err) {
      console.error("error connecting", err);
      return;
    }
    conn.query("select * from users limit 10", (error, records, field) => {
      if (error) throw err;
      console.log(`records[0]:::`, records);
      res.send(records[0]);
      conn.end();
    });
  });
});
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
