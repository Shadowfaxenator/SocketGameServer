"use strict";
const http_server_1 = require('./http-server');
const express_app_1 = require('./express-app');
const io_app_1 = require('./io-app');
const http_1 = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http_1.createServer(app);
const io = socketio(server);
http_server_1.HttpServer.bootstrap(server);
express_app_1.ExpressApp.bootstrap(app);
io_app_1.IoApp.bootstrap(io);
//# sourceMappingURL=app.js.map