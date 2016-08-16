"use strict";
const redis = require('socket.io-redis');
const red = require('redis');
const socketioJwt = require('socketio-jwt');
const clientRedis = red.createClient();
class IoApp {
    constructor(io, redisPort = 6379, redisHost = "localhost") {
        this.io = io;
        this.redisPort = redisPort;
        this.redisHost = redisHost;
        this.config();
    }
    static bootstrap(io, redisPort = 6379, redisHost = "localhost") {
        return new IoApp(io, redisPort, redisHost);
    }
    config() {
        this.io.adapter(redis({ host: this.redisHost, port: this.redisPort }));
        this.io.on('connection', socketioJwt.authorize({
            secret: '123456',
            timeout: 15000 // 15 seconds to send the authentication message
        }));
        this.io.on('authenticated', (socket) => {
            socket.join('lobby');
            let games = JSON.stringify([{ name: "qwe" }, { name: "qwe2" }]);
            clientRedis.lpush("hosts", games, (err, res) => {
                console.log(res);
                console.log(err);
            });
            socket.on('hi', () => {
                clientRedis.get("hosts", (err, result) => {
                    console.log(result);
                });
                socket.emit('private', socket.id);
            });
            //this socket is authenticated, we are good to handle more events from it.
            console.log('hello! ' + socket.id);
        });
        this.io.on('connection', (socket) => {
            socket.on('disconnect', function () {
                console.log("disconnected");
            });
        });
        /*
       this.io.on('connection', (socket) =>  {
         console.log(process.pid);
        this.io.emit('this', { will: 'be received by everyone'});
       
        socket.on('my other event', function (from, msg) {
          console.log('I received a private message by ', from, ' saying ', msg);
        });
      
        socket.on('disconnect', function () {
         
          this.io.emit('user disconnected');
        });
      });
      */
    }
}
exports.IoApp = IoApp;
//# sourceMappingURL=io-app.js.map