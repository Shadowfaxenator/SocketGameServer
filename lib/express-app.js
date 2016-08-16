"use strict";
const express = require("express");
const routes_1 = require('./routes');
class ExpressApp {
    constructor(app) {
        this.app = app;
        this.config();
    }
    config() {
        this.app.use(express.static("public"));
        this.app.get('/test', routes_1.IndexGet);
    }
    static bootstrap(app) {
        return new ExpressApp(app);
    }
}
exports.ExpressApp = ExpressApp;
//# sourceMappingURL=express-app.js.map