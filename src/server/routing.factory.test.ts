import {RoutingFactory} from './routing.factory';
import {NotificationRouteInterface} from '../notifcations-routing/notifiction.interface';
import {NotificationRouteMock} from '../notifcations-routing/notification.route.mock';
import * as Router from 'koa-router';

describe('RoutingFactory', () => {

    let factory: RoutingFactory;
    let notifyRoutes: NotificationRouteInterface;
    let router: Router;

    beforeEach(() => {
        router = {} as any;
        notifyRoutes = new NotificationRouteMock();
        notifyRoutes.registerTo = jest.fn();
        factory = new RoutingFactory(router, notifyRoutes);
    });

    it('gets an initialized router', () => {
        const result = factory.getRouter();

        expect(result).toBe(router);
        expect(notifyRoutes.registerTo).toBeCalledWith(router);
    });
});
