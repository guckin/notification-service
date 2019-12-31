import Application = require('koa');
import * as Router from 'koa-router';
import {inject, injectable} from 'inversify';
import {TYPES} from '../di-container/types';
import 'reflect-metadata';

export interface ServerConfigurationInterface {
    port: number;
}
export interface ApplicationServerInterface {
    start(): void;
}

export interface RoutingFactoryInterface {
    getRouter(): Router;
}

@injectable()
export class App implements ApplicationServerInterface {

    constructor(
        @inject(TYPES.ServerConfiguration)
        private readonly config: ServerConfigurationInterface,
        @inject(TYPES.KoaApplication)
        private readonly app: Application,
        @inject(TYPES.RoutingFactory)
        private readonly routerFactory: RoutingFactoryInterface
    ) {}

    start(): void {
        this.app.use(this.routerFactory.getRouter().routes());
        this.app.listen(this.config.port);
    }
}
