import {SseMiddlewareProvider} from './sse-middleware.provider';
import {StreamFactoryMock} from '../stream/stream.factory.mock';
import {StreamFactoryInterface} from '../stream/stream.factory.interface';
import {Context} from 'koa';

describe('SseMiddlewareProvider', () => {

    let provider: SseMiddlewareProvider;
    let stream: NodeJS.WritableStream;
    let streamFactory: StreamFactoryInterface;

    beforeEach(() => {
        streamFactory = new StreamFactoryMock();
        streamFactory.getStream = jest.fn().mockImplementation(() => stream);
        provider = new SseMiddlewareProvider(streamFactory);
    });

    it('sets up context for sse', () => {
        stream = 'stream' as any;

        const ctx = getFakeContext();
        provider.attachMiddleware(ctx);

        expect(ctx.type).toEqual('text/event-stream');
        expect(ctx.body).toBe(stream);
        expectRequestSocketTimeoutEquals(ctx, Number.MAX_VALUE);
        expectWrittenResponse(ctx, '\n');
    });

    function expectRequestSocketTimeoutEquals(ctx: Context, value: number): void {
        expect(ctx.req.socket.setTimeout).toHaveBeenCalledWith(value);
    }

    function expectWrittenResponse(ctx: Context, data: any): void {
        expect(ctx.res.write).toHaveBeenCalledWith(data);
    }

    function getFakeContext(): Context {
        return {
            req: {
                socket: {
                    setTimeout: jest.fn()
                }
            },
            res: {
                write: jest.fn()
            }
        } as any;
    }
});
