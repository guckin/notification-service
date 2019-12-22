import {NotificationPublisher} from './notification.publisher';
import {Notification} from '../notifcations-routing/notifiction.interface';
import {Subject} from 'rxjs';

describe('NotificationPublisher', () => {
   let publisher: NotificationPublisher;
   let subject: Subject<Notification>;

   beforeEach(() => {
       subject = new Subject<Notification>();
       subject.next = jest.fn();
       publisher = new NotificationPublisher(subject);
   });

    it('publish notifications', () => {
        const publishedValue: Notification = {some: 'value'} as any;

        publisher.publish(publishedValue);

        expect(subject.next).toHaveBeenCalledWith(publishedValue);
    });


});
