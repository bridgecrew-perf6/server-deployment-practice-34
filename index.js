"use strict";

require("dotenv").config();

// import server from "./server.js";
const server = require("./server.js");
// console.log(server);
server.start(process.env.PORT || 3000);
