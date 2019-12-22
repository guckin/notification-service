import {NotificationRouteInterface} from './notifiction.interface';
import * as Router from 'koa-router';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {Context} from 'koa';
import {TYPES} from '../di-container/types';
import {SseMiddlewareProviderInterface} from '../sse-middleware/sse-middleware.interface';

@injectable()
export class NotificationRoute implements NotificationRouteInterface {
    constructor(
        @inject(TYPES.SseMiddlewareProvider)
        private readonly sseMiddlewareProvider: SseMiddlewareProviderInterface,
        @inject(TYPES.NotificationMiddleware)
        private readonly notificationMiddleWare: (Koa: Context) => void
    ) {}

    registerTo(router: Router): void {
        router.get('/notifications', (ctx: Context) => {
            this.sseMiddlewareProvider.attachMiddleware(ctx);
            this.notificationMiddleWare(ctx);
        });
    }
}
