import * as Router from 'koa-router';

export interface Notification {
    msg: string;
    time: Date;
}

export interface NotificationRouteInterface {
    registerTo(router: Router): void;
}
