const express = require("express");

const app = express();

app.use(express.json());
app.use("/api/users", require("./app.route"));
app.use("", require("./app.route"));

const port = 4000;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
