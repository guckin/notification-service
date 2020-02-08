import * as Router from 'koa-router';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {Context} from 'koa';
import {TYPES} from '../di-container/types';
import {PublisherServiceInterface} from './publisher.interface';
import {Notification} from '../notifcations-routing/notifiction.interface';

@injectable()
export class PublisherRoute {
    constructor(
        @inject(TYPES.NotificationPublisher)
        private readonly publisher: PublisherServiceInterface<Notification>,
    ) {}

    registerTo(router: Router): void {
        router.post('/notifications', (ctx: Context) => {
            this.publisher.publish(ctx.request.body);
            ctx.body = 'OK';
        });
    }
}
