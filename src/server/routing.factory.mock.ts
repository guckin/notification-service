import {RoutingFactoryInterface} from './app';
import * as Router from 'koa-router';

export class RoutingFactoryMock implements RoutingFactoryInterface {
    getRouter(): Router {
        return undefined;
    }
}
