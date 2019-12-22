import {Notification} from '../notifcations/notifiction.interface';

export interface NotificationSubscriberInterface {
    subscribe(cb: (data: Notification) => void): NotificationSubscription;
}

export interface NotificationSubscription {
    end(): void;
}
