import * as express from "express";
export declare class ExpressApp {
    private app;
    constructor(app: express.Application);
    private config();
    static bootstrap(app: express.Application): ExpressApp;
}
