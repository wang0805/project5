const express = require("express");
const path = require("path");
const http = require("http");
const os = require("os");

const app = express();

// serve the static files from create-react-app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/test", (req, res) => {
  var username = [os.userInfo().username];
  res.json(username);
});

//handles default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 3001;

var server = http.createServer(app);

server.listen(port, () => console.log(`Tuning in to port ${port} ~~~~`));

server.on("close", () => {
  console.log("Express server closed ~~~~~");
});
