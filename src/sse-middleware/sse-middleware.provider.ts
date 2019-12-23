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
        this.setBody(ctx);
        this.setType(ctx);
        this.setSocketTimeout(ctx);
        this.initializeWriteStream(ctx);
    }

    private setBody(ctx: Context): void {
        ctx.body = this.streamFactory.getStream();
    }

    private setType(ctx: Context): void {
        ctx.type = 'text/event-stream';
    }

    private setSocketTimeout(ctx: Context): void {
        ctx.req.socket.setTimeout(Number.MAX_VALUE);
    }

    private initializeWriteStream(ctx: Context): void {
        ctx.res.write('\n');
    }
    
}
