import {HttpServer} from './http-server'
import {ExpressApp} from './express-app'
import {Routes} from './routes'
import {IoApp} from './io-app'
import {createServer} from 'http'
import * as express from 'express'
import * as socketio from 'socket.io'
import * as Rx from '@reactivex/rxjs'

const app = express()
const server = createServer(app)
const io = socketio(server)
 
 

HttpServer.bootstrap(server)
ExpressApp.bootstrap(app)
IoApp.bootstrap(io) 

 

  
