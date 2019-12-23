import {NotificationMiddlewareProvider} from './notification-middleware.provider';
import {NewFakeContext} from '../test-helpers/fakeContext';
import {NotificationSubscriberInterface, NotificationSubscription} from '../notifiction-subscriber/notification.subscriber.interface';
import {NotificationSubscriberMock} from '../notifiction-subscriber/notification-subscriber.mock';
import {Notification} from '../notifcations-routing/notifiction.interface';
import {Context} from 'koa';

describe('NotificationMiddlewareProvider', () => {

    let notificationMiddlewareProvider: NotificationMiddlewareProvider;
    let subscriber: NotificationSubscriberInterface;
    let subscriberCallback: (data: Notification) => void;
    let actualEvents: string[];
    let eventCallbacks: ((...args: any[]) => void)[];
    let subscription: NotificationSubscription;

    beforeEach(() => {
        actualEvents = [];
        eventCallbacks = [];
        subscription = {
            end: jest.fn()
        };
        subscriber = new NotificationSubscriberMock();
        subscriber.subscribe = jest
            .fn()
            .mockImplementation((cb: (data: Notification) => void) => {
                subscriberCallback = cb;
                return subscription;
            });
        notificationMiddlewareProvider = new NotificationMiddlewareProvider(subscriber);
    });

    it('writes clients on publish', () => {
        const context = NewFakeContext();
        notificationMiddlewareProvider.attachMiddleware(context);
        const data: Notification = {} as any;
        onPublish(data);

        expect(context.res.write).toHaveBeenCalledWith(JSON.stringify(data));
    });

    it(`cleans up on bad events`, () => {
        const ctx = NewFakeContext();
        setUpEventHandlerMock(ctx);

        notificationMiddlewareProvider.attachMiddleware(ctx);
        eventCallbacks.forEach((cb) => cb());

        const eventNames = ['close', 'finish', 'error'];
        expect(actualEvents).toEqual(eventNames);
        expect(ctx.res.end).toHaveBeenCalledTimes(eventCallbacks.length);
        expect(subscription.end).toHaveBeenCalledTimes(eventCallbacks.length);
    });

    function setUpEventHandlerMock(ctx: Context): void {
        ctx.req.on = jest
            .fn()
            .mockImplementation((event: string,
                                 listener: (...args: any[]) => void) => {
            actualEvents.push(event);
            eventCallbacks.push(listener);
        });
    }

    function onPublish(notification: Notification) {
        subscriberCallback(notification);
    }

});
