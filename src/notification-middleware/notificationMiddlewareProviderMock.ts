import {NotificationMiddlewareProviderInterface} from './notification-middleware.provider.interface';
import {Context} from 'koa';

export class NotificationMiddlewareProviderMock implements NotificationMiddlewareProviderInterface {
    attachMiddleware(ctx: Context): void {
    }
}
