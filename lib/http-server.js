"use strict";
const cluster = require('cluster');
const sticky = require('sticky-session');
class HttpServer {
    constructor(server, port = 3000) {
        this.server = server;
        this.port = port;
        this.config();
    }
    static bootstrap(server, port = 3000) {
        return new HttpServer(server, port);
    }
    config() {
        if (!sticky.listen(this.server, this.port)) {
            this.server.once('listening', () => {
                console.log(`server started on ${this.port} port`);
            });
            cluster.on('exit', (worker, code, signal) => {
                console.log(`worker ${worker.process.pid} died`);
            });
            cluster.on('online', (worker) => {
                console.log(`The worker responded after it was forked ${worker.process.pid}`);
            });
        }
        else {
        }
    }
}
exports.HttpServer = HttpServer;
//# sourceMappingURL=http-server.js.map