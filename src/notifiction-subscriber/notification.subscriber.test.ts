import {NotificationSubscriber} from './notification.subscriber';
import {Subject, Subscription} from 'rxjs';
import {Notification} from '../notifcations-routing/notifiction.interface';
import {NotificationSubscription} from './notification.subscriber.interface';

describe('NotificationSubscriber', () => {

    let subscriber: NotificationSubscriber;
    let subject: Subject<Notification>;
    let subscriberData: Notification[][];
    let subscriptionMock: Subscription;

    beforeEach(() => {
        subject = new Subject<Notification>();
        subscriptionMock = {unsubscribe: jest.fn()} as any;
        subject.subscribe = jest.fn().mockReturnValue(subscriptionMock);
        subscriber = new NotificationSubscriber(subject);
        subscriberData = [[], [], []];
    });

    it('subscribes to notifications', () => {
        multipleSubscriptions();

        const expectedData = ['foo', 'bar', 'baz'] as any;
        publish(...expectedData);

        expectValuesPublishedToSubscribers(expectedData);
    });

    it('subscriptions can be ended', () => {
        const subscriptions = multipleSubscriptions();

        subscriptions.forEach(sub => {
            sub.end();
        });

        expect(subscriptionMock.unsubscribe).toBeCalledTimes(subscriptions.length);
    });

    function expectValuesPublishedToSubscribers(values: Notification[]): void {
        expect(subscriberData).toEqual(subscriberData.map(() => values));
    }

    function multipleSubscriptions(): NotificationSubscription[] {
        const subscriptions: NotificationSubscription[] = [];
        subscriberData.forEach((values) => {
            const subscription = subscriber.subscribe((data: Notification) => {
                values.push(data);
            });
            subscriptions.push(subscription);
        });
        return subscriptions;
    }

    function publish(...data: Notification[]): void {
        data.forEach((notification: Notification) => {
            (subject.subscribe as any)
                .mock
                .calls
                .forEach(([cb]: [any]) => {
                    cb(notification);
                });
        });
    }
});
