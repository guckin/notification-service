import {Context} from 'koa';
import {SseMiddlewareProviderInterface} from './sse-middleware.interface';
import {injectable} from 'inversify';
import 'reflect-metadata';

@injectable()
export class SseMiddlewareProvider implements SseMiddlewareProviderInterface {

    attachMiddleware(ctx: Context): void {

    }
}
