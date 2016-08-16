"use strict";
const express = require('express');
const sticky = require('sticky-session');
const socketio = require('socket.io');
class IoExpressServerApp {
    constructor() {
        this.server = express().createServer();
        this.io = socketio(this.server);
    }
}
exports.IoExpressServerApp = IoExpressServerApp;
//# sourceMappingURL=io-express-server-app.js.map