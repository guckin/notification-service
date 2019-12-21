export type EventSubscription<T> = (eventData: T) => void;

export interface NotificationServiceInterface {
    subscribe<T>(cb: EventSubscription<T>): void;
}

export interface Notification<T> {
    data: T;
    time: Date;
}
