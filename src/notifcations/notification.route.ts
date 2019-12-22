import {NotificationRouteInterface} from './notifiction.interface';
import * as Router from 'koa-router';
import {injectable} from 'inversify';
import 'reflect-metadata';
import {Context} from 'koa';

@injectable()
export class NotificationRoute implements NotificationRouteInterface {
    constructor(
    ) {}

    registerTo(router: Router): void {
        router.get('/notifications', (ctx: Context) => {
            // TODO
        });
    }
}
