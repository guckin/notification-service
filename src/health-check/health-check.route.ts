import * as Router from 'koa-router';
import {injectable} from 'inversify';
import 'reflect-metadata';
import {Context} from 'koa';

export interface HealthCheckRouteInterface {
    registerTo(router: Router): void;
}

@injectable()
export class HealthCheckRoute implements HealthCheckRouteInterface {
    registerTo(router: Router): void {
        router.get('/healthCheck', (ctx: Context) => {
            ctx.body = 'OK';
            ctx.status = 200;
        });
    }
}
