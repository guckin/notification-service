import {NotificationMiddlewareProviderInterface} from './notification-middleware.provider.interface';
import {Context} from 'koa';
import {injectable} from 'inversify';
import 'reflect-metadata';

@injectable()
export class NotificationMiddlewareProvider implements NotificationMiddlewareProviderInterface {
    attachMiddleware(ctx: Context): void {
    }
}
