const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();

const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use(middlewares);
app.use(router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});

// const express = require("express");
// const app = express();

// app.use("/", (req, res) => res.send("Server is running"));

// app.listen(5000, console.log("Server started on PORT 5000"));
