import {EventSubscription, Notification, NotificationServiceInterface} from './notifiction.interface';

export class NotificationServiceMock implements NotificationServiceInterface {
    subscribe(cb: EventSubscription<Notification>): void {
    }
}
