import {Subject} from 'rxjs';
import {Notification} from '../notifcations/notifiction.interface';
import {NotificationSubscription, NotificationSubscriberInterface} from './notification.subscriber.interface';

export class NotificationSubscriber implements NotificationSubscriberInterface {

    constructor(
        private readonly notificationSubject$: Subject<Notification>
    ) {}

    subscribe(cb: (data: Notification) => void): NotificationSubscription {

        return {
            end: this.notificationSubject$.subscribe(cb).unsubscribe
        };
    }
}
