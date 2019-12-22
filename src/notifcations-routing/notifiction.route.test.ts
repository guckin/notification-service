import {NotificationRoute} from './notification.route';
import * as Router from 'koa-router';
import {Context} from 'koa';

describe('NotificationRoutes', () => {

    let route: NotificationRoute;
    let router: Router;
    let routeHandler: (ctx: Context) => void;
    let sseMiddleWare: (ctx: Context) => void;

    beforeEach(() => {
        sseMiddleWare = jest.fn();
        route = new NotificationRoute(sseMiddleWare);
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

        expect(sseMiddleWare).toHaveBeenCalledWith(ctx);
    });

    function handleRoute(ctx: Context): void {
        routeHandler(ctx);
    }
});
