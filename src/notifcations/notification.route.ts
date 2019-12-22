import {NotificationRouteInterface, NotificationServiceInterface} from './notifiction.interface';
import * as Router from 'koa-router';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {TYPES} from '../di-container/types';
import {Context} from 'koa';

@injectable()
export class NotificationRoute implements NotificationRouteInterface {
    constructor(
        @inject(TYPES.NotificationService)
        private readonly notificationService: NotificationServiceInterface
    ) {}

    registerTo(router: Router): void {
        router.get('/notifications', (ctx: Context) => {
            // TODO
        });
    }
}
