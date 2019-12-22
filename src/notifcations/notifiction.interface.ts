import * as Router from 'koa-router';

export type EventSubscription<T> = (eventData: T) => void;

export interface NotificationServiceInterface {
    subscribe(cb: EventSubscription<Notification>): void;
}

export interface Notification {
    msg: string;
    time: Date;
}

export interface NotificationRouteInterface {
    registerTo(router: Router): void;
}
