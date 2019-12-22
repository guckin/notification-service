import {NotificationServiceInterface, Notification, EventSubscription} from './notifaction.interface';
import {PublisherServiceInterface} from '../publisher/publisher.interface';

export class NotificationService implements NotificationServiceInterface {

    constructor(private readonly publisherService: PublisherServiceInterface<Notification>) {}

    subscribe(cb: EventSubscription<Notification>): void {
        this.publisherService.onPublish((notification: Notification) => {
            cb(notification);
        });
    }
}
