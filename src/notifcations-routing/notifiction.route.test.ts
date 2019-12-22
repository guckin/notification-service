import {NotificationRoute} from './notification.route';
import * as Router from 'koa-router';
import {Context} from 'koa';
import {SseMiddlewareProviderInterface} from '../sse-middleware/sse-middleware.interface';

class SseMiddlewareProviderMock implements SseMiddlewareProviderInterface {
    attachMiddleware(ctx: Context): void {
    }
}

describe('NotificationRoutes', () => {

    let route: NotificationRoute;
    let router: Router;
    let routeHandler: (ctx: Context) => void;
    let sseMiddleWareProvider: SseMiddlewareProviderInterface;
    let notificationMiddleware: (ctx: Context) => void;

    beforeEach(() => {
        sseMiddleWareProvider = new SseMiddlewareProviderMock();
        sseMiddleWareProvider.attachMiddleware = jest.fn();
        notificationMiddleware = jest.fn();
        route = new NotificationRoute(sseMiddleWareProvider, notificationMiddleware);
        router = new Router();
        router.get = jest
            .fn()
            .mockImplementation((_: string, cb: (ctx: Context) => void) => {
                routeHandler = cb;
            });
    });

    it('registers the router to the router', () => {
        route.registerTo(router);
        expect(router.get).toHaveBeenCalledWith('/notifications', expect.any(Function));
    });

    it('uses sse middleware', () => {
        route.registerTo(router);

        const ctx: Context = {req: {}, res: {}} as any;
        handleRoute(ctx);

        expect(sseMiddleWareProvider.attachMiddleware).toHaveBeenCalledWith(ctx);
    });

    it('uses notification middleware', () => {
        route.registerTo(router);

        const ctx: Context = {req: {}, res: {}} as any;
        handleRoute(ctx);

        expect(notificationMiddleware).toHaveBeenCalledWith(ctx);
    });

    function handleRoute(ctx: Context): void {
        routeHandler(ctx);
    }
});
