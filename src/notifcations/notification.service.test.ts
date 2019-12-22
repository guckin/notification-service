import {NotificationService} from './notification.service';
import {PublisherServiceMock} from '../publisher/publisher.service.mock';
import {PublisherServiceInterface} from '../publisher/publisher.interface';
import {Notification} from './notifaction.interface';

describe('NotificationService', () => {

    let service: NotificationService;
    let publisherService: PublisherServiceInterface<Notification>;
    let actualNotifications: Notification[];
    let multipleSubscriptionsNotifications: Notification[][];

    beforeEach(() => {
        publisherService = new PublisherServiceMock();
        publisherService.onPublish = jest.fn();
        service = new NotificationService(publisherService);
        actualNotifications = [];
        multipleSubscriptionsNotifications = [[], [], []];
    });

    it('subscribes to the publisher events', () => {
        whenSubscribed();

        const expectedNotifications: Notification[] = ['foo', 'bar', 'baz'] as any;
        publishValues(expectedNotifications);

        expectNotificationsToBe(expectedNotifications);
    });

    it('handles multiple subscribers', () => {
        whenMultipleSubscriptions();

        const expectedNotifications: Notification[] = ['foo', 'bar', 'baz'] as any;
        publishValues(expectedNotifications);

        expectAllSubscriptionsToHaveBeenCalled(expectedNotifications);
    });


    function expectAllSubscriptionsToHaveBeenCalled(notifications: Notification[]) {
         expect(multipleSubscriptionsNotifications.map(() => notifications))
             .toEqual(multipleSubscriptionsNotifications);
    }

    function whenMultipleSubscriptions(): void {
        multipleSubscriptionsNotifications.forEach(notifications => {
            service.subscribe((notification: Notification) => {
                notifications.push(notification);
            });
        });
    }

    function expectNotificationsToBe(expectedNotifications: Notification[]): void {
        expect(actualNotifications).toEqual(expectedNotifications);
    }

    function whenSubscribed(): void {
        service.subscribe((notification: Notification) => {
            actualNotifications.push(notification);
        });
    }

    function publishValues(notifications: Notification[]): void {
        notifications.forEach(notification => {
            publish(notification);
        });
    }

    function publish(data: Notification) {
        (publisherService.onPublish as any)
            .mock
            .calls
            .forEach(([cb]: [(data: Notification) => void]) => {
                cb(data);
            });
    }
});
