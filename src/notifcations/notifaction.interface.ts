export type EventSubscription<T> = (eventData: T) => void;

export interface NotificationServiceInterface {
    subscribe(cb: EventSubscription<Notification>): void;
}

export interface Notification {
    msg: string;
    time: Date;
}
