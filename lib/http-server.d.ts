/// <reference types="node" />
import { Server } from 'http';
export declare class HttpServer {
    private server;
    private port;
    constructor(server: Server, port?: number);
    static bootstrap(server: Server, port?: number): HttpServer;
    private config();
}
