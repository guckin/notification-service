import {Context} from 'koa';
import {SseMiddlewareProviderInterface} from './sse-middleware.interface';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {StreamFactoryInterface} from '../stream/stream.factory.interface';
import {TYPES} from '../di-container/types';

@injectable()
export class SseMiddlewareProvider implements SseMiddlewareProviderInterface {

    constructor(
        @inject(TYPES.StreamFactory)
        private readonly streamFactory: StreamFactoryInterface
    ) {
    }

    attachMiddleware(ctx: Context): void {
        ctx.type = 'text/event-stream';
        ctx.body = this.streamFactory.getStream();
        ctx.req.socket.setTimeout(Number.MAX_VALUE);
        ctx.res.write('\n');
    }
}
