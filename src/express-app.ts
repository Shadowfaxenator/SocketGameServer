import * as express from "express"
import {IndexGet} from './routes'
export class ExpressApp {
   constructor(private app: express.Application){
       this.config()
   } 
   private config() {
        this.app.use(express.static("public"));
        this.app.get('/test', IndexGet ) 
   }

   public static bootstrap(app: express.Application) {
       return new ExpressApp(app)
   }
}