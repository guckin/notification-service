import {NotificationSubscriberInterface, NotificationSubscription} from './notification.subscriber.interface';
import {Notification} from '../notifcations-routing/notifiction.interface';

export class NotificationSubscriberMock implements NotificationSubscriberInterface {
    subscribe(cb: (data: Notification) => void): NotificationSubscription {
        return undefined;
    }
}
