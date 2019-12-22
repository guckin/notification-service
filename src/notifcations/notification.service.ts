import {NotificationServiceInterface, Notification, EventSubscription} from './notifiction.interface';
import {PublisherServiceInterface} from '../publisher/publisher.interface';
import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {TYPES} from '../di-container/types';

@injectable()
export class NotificationService implements NotificationServiceInterface {

    constructor(
        @inject(TYPES.NotificationPublisher)
        private readonly publisherService: PublisherServiceInterface<Notification>
    ) {}

    subscribe(cb: EventSubscription<Notification>): void {
        this.publisherService.onPublish((notification: Notification) => {
            cb(notification);
        });
    }
}
