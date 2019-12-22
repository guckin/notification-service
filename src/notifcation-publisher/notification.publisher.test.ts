import {NotificationPublisher} from './notification.publisher';
import {Notification} from '../notifcations/notifaction.interface';

describe('NotificationPublisher', () => {
   let publisher: NotificationPublisher;
    let actualValue: Notification;

   beforeEach(() => {
       publisher = new NotificationPublisher();
   });

    it('publish to subscribers', () => {
        publisher.onPublish((data: Notification) => {
            actualValue = data;
        });
        const expectedValue: Notification = {} as any;
        publisher.publish(expectedValue);

        expect(actualValue).toEqual(expectedValue);
    });
});
