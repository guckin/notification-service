import {PublisherServiceInterface} from '../publisher/publisher.interface';
import {Notification} from '../notifcations/notifaction.interface';
import {Observable, Subscriber} from 'rxjs';

export class NotificationPublisher implements PublisherServiceInterface<Notification> {

    private notificationsObservable: Observable<Notification>;
    private subscriber: Subscriber<Notification>;

    constructor() {
        this.notificationsObservable = new Observable( (subscriber) => {
            this.subscriber = subscriber;
        });
    }

    onPublish(cb: (data: Notification) => void): void {
        this.notificationsObservable.subscribe(value => {
            cb(value);
        });
    }

    publish(value: Notification): void {
        this.subscriber.next(value);
    }
}
