import {NotificationMiddlewareProviderInterface} from './notification-middleware.provider.interface';
import {Context} from 'koa';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {TYPES} from '../di-container/types';
import {NotificationSubscriberInterface} from '../notifiction-subscriber/notification.subscriber.interface';

@injectable()
export class NotificationMiddlewareProvider implements NotificationMiddlewareProviderInterface {

    constructor(
        @inject(TYPES.NotificationSubscriber)
        private readonly notificationSubscriber: NotificationSubscriberInterface
    ) {
    }

    attachMiddleware(ctx: Context): void {
        const subscription = this.notificationSubscriber.subscribe((notification) => {
            ctx.res.write('id: 1\ndata:' + JSON.stringify(notification) + '\n\n');
        });
        ['close', 'finish', 'error'].forEach((event) => {
            ctx.req.on(event, () => {
                ctx.res.end();
                subscription.end();
            });
        });
    }
}
