import {DiContainer} from './di-container';
import {LoggingService} from '../logging/logging.service';
import {NotificationService} from '../notifcations/notification.service';
import {NotificationPublisher} from '../notifcation-publisher/notification.publisher';
import {TYPES} from './types';

describe('di-container', () => {
    it('provides dependencies', () => {
        isRegistered(TYPES.LoggingService, LoggingService);
        isRegistered(TYPES.NotificationPublisher, NotificationPublisher);
        singletonIsRegistered(TYPES.NotificationService, NotificationService);
    });

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
