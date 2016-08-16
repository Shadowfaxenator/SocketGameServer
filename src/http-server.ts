import {Server, createServer,} from 'http'
import * as cluster from 'cluster'
const sticky = require('sticky-session')
import {ExpressApp} from "./express-app"


export class HttpServer {
    
  constructor(private server: Server, private port = 3000)
  { 
        
    this.config()
  }

public static bootstrap(server: Server, port = 3000) {
    return new HttpServer(server,port)
} 
private config() {
     if (!sticky.listen(this.server, this.port)) {
         this.server.once('listening',() => {
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

