import Application = require('koa');
import * as Router from 'koa-router';

export interface ServerConfiguration {
    port: number;
}
export interface ApplicationServerInterface {
    start(): void;
}

export interface RoutingFactoryInterface {
    getRouter(): Router;
}

export class App implements ApplicationServerInterface {

    constructor(
        private readonly config: ServerConfiguration,
        private readonly app: Application,
        private readonly routerFactory: RoutingFactoryInterface
    ) {}

    start(): void {
        this.app.use(this.routerFactory.getRouter().routes());
        this.app.listen(this.config.port);
    }
}
