import {DiContainer} from './di-container';
import {LoggingService} from '../logging/logging.service';
import {NotificationService} from '../notifcations/notification.service';
import {NotificationPublisher} from '../notifcation-publisher/notification.publisher';
import {TYPES} from './types';
import {NotificationRoute} from '../notifcations/notification.route';
import {NotificationSubscriber} from '../notifiction-subscriber/notification.subscriber';
import {NotificationSubject} from '../notifcations/notification.subject';

describe('di-container', () => {
    it('provides dependencies', () => {
        isRegistered(TYPES.LoggingService, LoggingService);
        singletonIsRegistered(TYPES.NotificationPublisher, NotificationPublisher);
        isRegistered(TYPES.NotificationService, NotificationService);
        isRegistered(TYPES.NotificationRoute, NotificationRoute);
        isRegistered(TYPES.NotificationSubscriber, NotificationSubscriber);
        constantRegistered(TYPES.NotificationSubject, NotificationSubject);
    });

    function constantRegistered(injectionToken: symbol, constant: any) {
        const obj = DiContainer.get(injectionToken);
        expect(obj).toBe(constant);
        expect(DiContainer.get(injectionToken)).toBe(obj);
    }

    function singletonIsRegistered(injectionToken: symbol, concreteType: any) {
        const obj = DiContainer.get(injectionToken);
        expect(obj).toBeInstanceOf(concreteType);
        expect(DiContainer.get(injectionToken)).toBe(obj);
    }

    function isRegistered(injectionToken: symbol, concreteType: any) {
        const obj = DiContainer.get(injectionToken);
        expect(obj).toBeInstanceOf(concreteType);
    }
});
