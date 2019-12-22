import {Context} from 'koa';

export interface SseMiddlewareProviderInterface {
    attachMiddleware(ctx: Context): void;
}
