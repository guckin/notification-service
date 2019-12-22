import {NotificationRouteInterface} from './notifiction.interface';
import * as Router from 'koa-router';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {Context} from 'koa';
import {TYPES} from '../di-container/types';
import {SseMiddlewareProviderInterface} from '../sse-middleware/sse-middleware.interface';
import {NotificationMiddlewareProviderInterface} from '../notification-middleware/notification-middleware.provider.interface';

@injectable()
export class NotificationRoute implements NotificationRouteInterface {
    constructor(
        @inject(TYPES.SseMiddlewareProvider)
        private readonly sseMiddlewareProvider: SseMiddlewareProviderInterface,
        @inject(TYPES.NotificationMiddlewareProvider)
        private readonly notificationMiddleWare: NotificationMiddlewareProviderInterface
    ) {}

    registerTo(router: Router): void {
        router.get('/notifications', (ctx: Context) => {
            this.sseMiddlewareProvider.attachMiddleware(ctx);
            this.notificationMiddleWare.attachMiddleware(ctx);
        });
    }
}
