import {PublisherServiceInterface} from '../publisher/publisher.interface';
import {Notification} from '../notifcations/notifiction.interface';
import {Subject} from 'rxjs';
import 'reflect-metadata';
import {injectable} from 'inversify';

@injectable()
export class NotificationPublisher implements PublisherServiceInterface<Notification> {

    private notificationsSubject: Subject<Notification>;

    constructor() {
        this.notificationsSubject = new Subject();
    }

    onPublish(cb: (data: Notification) => void): void {
        this.notificationsSubject.subscribe(value => {
            cb(value);
        });
    }

    publish(value: Notification): void {
        this.notificationsSubject.next(value);
    }
}