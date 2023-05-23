const express = require("express");
const tasksRoutes = require("./routes/tasks")
const usersRoutes = require("./routes/users")
const healthRoutes = require("./routes/health")



const server = express();
server.use(express.json());

server.use(tasksRoutes.router);
server.use(healthRoutes.router);
server.use(usersRoutes.router)

module.exports = {server}