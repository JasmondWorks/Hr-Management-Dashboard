// const jsonServer = require("json-server");
// const cors = require("cors");
// const path = require("path");

// const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, "db.json"));
// const middlewares = jsonServer.defaults();

// server.use(cors());
// server.use(jsonServer.bodyParser);
// server.use(middlewares);
// server.use(router);

// const PORT = 8000;

// server.listen(PORT, () => {
//   console.log(`JSON Server is running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const app = express();

// app.use("/", (req, res) => res.send("Server is running"));

// app.listen(5000, console.log("Server started on PORT 5000"));

const express = require("express");
const cors = require("cors");
const jsonServer = require("json-server");

const app = express();

// Enable CORS
app.use(cors());

// Set up json-server
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors, and no-cache)
app.use(middlewares);

// Use json-server router
app.use("/api", router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
