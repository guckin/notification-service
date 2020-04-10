import Application = require('koa');
import * as Router from 'koa-router';
import {inject, injectable} from 'inversify';
import {TYPES} from '../di-container/types';
import * as cors from '@koa/cors';
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
        private readonly routerFactory: RoutingFactoryInterface,
        @inject(TYPES.KoaBodyParser)
        private readonly bodyParser: Application.Middleware
    ) {}

    start(): void {
        this.app.use(cors({origin: '*'}));
        this.app.use(this.bodyParser);
        this.app.use(this.routerFactory.getRouter().routes());
        try {
            this.app.listen(this.config.port);
        } catch (e) {
            console.log('ERROR: ', e);
        }
    }
}
