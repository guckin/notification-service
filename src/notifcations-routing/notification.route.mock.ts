import {NotificationRouteInterface} from './notifiction.interface';
import * as Router from 'koa-router';

export class NotificationRouteMock implements NotificationRouteInterface {
    registerTo(router: Router): void {
    }
}
