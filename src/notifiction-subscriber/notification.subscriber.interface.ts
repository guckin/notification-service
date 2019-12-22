import {Notification} from '../notifcations-routing/notifiction.interface';

export interface NotificationSubscriberInterface {
    subscribe(cb: (data: Notification) => void): NotificationSubscription;
}

export interface NotificationSubscription {
    end(): void;
}
