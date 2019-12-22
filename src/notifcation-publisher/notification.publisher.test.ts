import {NotificationPublisher} from './notification.publisher';
import {Notification} from '../notifcations/notifiction.interface';

describe('NotificationPublisher', () => {
   let publisher: NotificationPublisher;
   let actualValues: Notification[][];


   beforeEach(() => {
       actualValues = [[], [], []];
       publisher = new NotificationPublisher();
   });

    it('publish to subscribers', () => {
        multipleSubscribers();

        const publishedValues: Notification[] = ['foo', 'bar'] as any;
        publishValues(publishedValues);

        expectValuesPublishedToSubscribers(publishedValues);
    });

    function expectValuesPublishedToSubscribers(values: Notification[]) {
        expect(actualValues).toEqual(actualValues.map(() => values));
    }

    function publishValues(values: Notification[]) {
        values.forEach(value => {
            publisher.publish(value);
        });
    }

    function multipleSubscribers(): void {
        actualValues.forEach(valueArray => {
            publisher.onPublish((data: Notification) => {
                valueArray.push(data);
            });
        });
    }
});
