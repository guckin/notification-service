import {PublisherServiceInterface} from '../publisher/publisher.interface';
import {Notification} from '../notifcations/notifiction.interface';
import {Subject} from 'rxjs';
import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {TYPES} from '../di-container/types';

@injectable()
export class NotificationPublisher implements PublisherServiceInterface<Notification> {

    constructor(
        @inject(TYPES.NotificationSubject)
        private readonly notificationsSubject: Subject<Notification>
    ) {}

    publish(value: Notification): void {
        this.notificationsSubject.next(value);
    }
}
