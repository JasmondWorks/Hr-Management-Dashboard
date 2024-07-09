const jsonServer = require("json-server");
const path = require("path");
const express = require("express");
const app = express();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use("/api", router);
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
