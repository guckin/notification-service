import {Subject} from 'rxjs';
import {Notification} from '../notifcations-routing/notifiction.interface';
import {NotificationSubscription, NotificationSubscriberInterface} from './notification.subscriber.interface';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {TYPES} from '../di-container/types';

@injectable()
export class NotificationSubscriber implements NotificationSubscriberInterface {

    constructor(
        @inject(TYPES.NotificationSubject)
        private readonly notificationSubject$: Subject<Notification>
    ) {}

    subscribe(cb: (data: Notification) => void): NotificationSubscription {
        const subscription = this.notificationSubject$.subscribe(cb);
        let ended = false;
        return {
            end: () => {
                if (!ended) {
                    subscription.unsubscribe();
                    ended = true;
                }
            }
        };
    }
}
