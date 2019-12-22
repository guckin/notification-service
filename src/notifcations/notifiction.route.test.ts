import {NotificationRoute} from './notification.route';
import {NotificationServiceInterface} from './notifiction.interface';
import {NotificationServiceMock} from './notification.service.mock';
import * as Router from 'koa-router';

describe('NotificationRoutes', () => {

    let route: NotificationRoute;
    let notificationService: NotificationServiceInterface;
    let router: Router;

    beforeEach(() => {
        notificationService = new NotificationServiceMock();
        notificationService.subscribe = jest.fn();
        route = new NotificationRoute(notificationService);
        router = new Router();
        router.get = jest.fn();
    });

    it('registers the router to the router', () => {
        route.registerTo(router);
        expect(router.get).toHaveBeenCalledWith('/notifications', expect.any(Function));
    });
});
