import {NotificationRoute} from './notification.route';
import * as Router from 'koa-router';

describe('NotificationRoutes', () => {

    let route: NotificationRoute;
    let router: Router;

    beforeEach(() => {
        route = new NotificationRoute();
        router = new Router();
        router.get = jest.fn();
    });

    it('registers the router to the router', () => {
        route.registerTo(router);
        expect(router.get).toHaveBeenCalledWith('/notifications', expect.any(Function));
    });
});
