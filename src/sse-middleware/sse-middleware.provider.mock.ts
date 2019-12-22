import {SseMiddlewareProviderInterface} from './sse-middleware.interface';
import {Context} from 'koa';

export class SseMiddlewareProviderMock implements SseMiddlewareProviderInterface {
    attachMiddleware(ctx: Context): void {
    }
}
