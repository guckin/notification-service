import {RoutingFactoryInterface} from './app';
import * as Router from 'koa-router';
import {NotificationRouteInterface} from '../notifcations-routing/notifiction.interface';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {TYPES} from '../di-container/types';
import {PublisherRoute} from '../publisher/publisher.route';

@injectable()
export class RoutingFactory implements RoutingFactoryInterface {

    constructor(
        @inject(TYPES.KoaRouter)
        private readonly koaRouter: Router,
        @inject(TYPES.NotificationRoute)
        private readonly notificationRoute: NotificationRouteInterface,
        @inject(TYPES.PublisherRoute)
        private readonly publisherRoute: PublisherRoute
    ) {}

    getRouter(): Router {
        this.notificationRoute.registerTo(this.koaRouter);
        this.publisherRoute.registerTo(this.koaRouter);
        return this.koaRouter;
    }
}
