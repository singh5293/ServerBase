// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./routes/authRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
const keys = require("./config/keys");

// DB Setup

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { autoIndex: false });

// App Setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
