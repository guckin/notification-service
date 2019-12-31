import {RoutingFactoryInterface} from './app';
import * as Router from 'koa-router';
import {NotificationRouteInterface} from '../notifcations-routing/notifiction.interface';

export class RoutingFactory implements RoutingFactoryInterface {

    constructor(
        private readonly koaRouter: Router,
        private readonly notificationRoute: NotificationRouteInterface
    ) {}

    getRouter(): Router {
        this.notificationRoute.registerTo(this.koaRouter);
        return this.koaRouter;
    }
}
