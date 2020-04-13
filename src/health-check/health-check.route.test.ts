import {HealthCheckRoute} from './health-check.route';
import * as Router from 'koa-router';
import {Context} from 'koa';

describe('HealthCheck', () => {
    let route: HealthCheckRoute;
    let router: Router;
    let routeHandler: (ctx: Context) => void;

    beforeEach(() => {
        router = new Router();
        router.get = jest
            .fn()
            .mockImplementation((routeString: string, cb: (ctx: Context) => void) => {
                expect(routeString).toEqual('/healthCheck');
                routeHandler = cb;
            });
        route = new HealthCheckRoute();
    });

    it('returns a status OK with 200 status code', () => {
        route.registerTo(router);

        const ctx: Context = {req: {}, res: {}} as any;
        routeHandler(ctx);

      expect(ctx.body).toEqual('OK');
      expect(ctx.status).toEqual(200);
    });
});
