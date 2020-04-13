import {RoutingFactory} from './routing.factory';
import {NotificationRouteInterface} from '../notifcations-routing/notifiction.interface';
import {NotificationRouteMock} from '../notifcations-routing/notification.route.mock';
import * as Router from 'koa-router';
import {PublisherRoute} from '../publisher/publisher.route';
import {HealthCheckRouteInterface} from '../health-check/health-check.route';

describe('RoutingFactory', () => {

    let factory: RoutingFactory;
    let notifyRoutes: NotificationRouteInterface;
    let router: Router;
    let publisherRoute: PublisherRoute;
    let healthCheckRoute: HealthCheckRouteInterface;

    beforeEach(() => {
        router = {} as any;
        notifyRoutes = new NotificationRouteMock();
        notifyRoutes.registerTo = jest.fn();
        publisherRoute = {
            registerTo: jest.fn()
        } as any;
        healthCheckRoute = {
            registerTo: jest.fn()
        } as any;
        factory = new RoutingFactory(router, notifyRoutes, publisherRoute, healthCheckRoute);
    });

    it('gets an initialized router', () => {
        const result = factory.getRouter();

        expect(result).toBe(router);
        expect(notifyRoutes.registerTo).toBeCalledWith(router);
        expect(publisherRoute.registerTo).toHaveBeenCalledWith(router);
        expect(healthCheckRoute.registerTo).toHaveBeenCalledWith(router);
    });
});
