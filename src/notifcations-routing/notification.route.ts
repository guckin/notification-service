import {Notification, NotificationRouteInterface} from './notifiction.interface';
import * as Router from 'koa-router';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {Context} from 'koa';
import {NotificationSubscriberInterface} from '../notifiction-subscriber/notification.subscriber.interface';
import {TYPES} from '../di-container/types';
import {PassThrough} from 'stream';

@injectable()
export class NotificationRoute implements NotificationRouteInterface {
    constructor(
        // @inject(TYPES.NotificationSubscriber)
        // private readonly notificationSubscriber: NotificationSubscriberInterface
    ) {}

    registerTo(router: Router): void {
        router.get('/notifications', (ctx: Context) => {
            // this.setSse(ctx, new PassThrough());
            // const sub = this.notificationSubscriber.subscribe((notification) => {
            //
            // });
            // ['close', 'finish', 'error'].forEach(eventName => {
            //     ctx.req.on(eventName, () => {
            //         ctx.res.end();
            //         sub.end();
            //     });
            // });
        });
    }

    // private setSse(ctx: Context, stream: PassThrough): void {
    //     ctx.type = 'text/event-stream';
    //     ctx.body = stream;
    //
    //     ctx.req.socket.setTimeout(Number.MAX_VALUE);
    //     ctx.res.write('\n');
    // }
}
