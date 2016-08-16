/// <reference types="socket.io" />
export declare class IoApp {
    private io;
    private redisPort;
    private redisHost;
    constructor(io: SocketIO.Server, redisPort?: number, redisHost?: string);
    static bootstrap(io: SocketIO.Server, redisPort?: number, redisHost?: string): IoApp;
    private config();
}
