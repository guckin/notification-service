import {Context} from 'koa';

export interface NotificationMiddlewareProviderInterface {
    attachMiddleware(ctx: Context): void;
}
