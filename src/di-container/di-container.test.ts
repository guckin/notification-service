import {DiContainer, NotificationSubject} from './di-container';
import {LoggingService} from '../logging/logging.service';
import {NotificationPublisher} from '../notification-publisher/notification.publisher';
import {TYPES} from './types';
import {NotificationRoute} from '../notifcations-routing/notification.route';
import {NotificationSubscriber} from '../notifiction-subscriber/notification.subscriber';
import {StreamFactory} from '../stream/stream.factory';
import {SseMiddlewareProvider} from '../sse-middleware/sse-middleware.provider';
import {NotificationMiddlewareProvider} from '../notification-middleware/notification-middleware.provider';

describe('di-container', () => {
    it('provides dependencies', () => {
        isRegistered(TYPES.LoggingService, LoggingService);
        singletonIsRegistered(TYPES.NotificationPublisher, NotificationPublisher);
        isRegistered(TYPES.NotificationRoute, NotificationRoute);
        isRegistered(TYPES.NotificationSubscriber, NotificationSubscriber);
        constantRegistered(TYPES.NotificationSubject, NotificationSubject);
        isRegistered(TYPES.StreamFactory, StreamFactory);
        isRegistered(TYPES.SseMiddlewareProvider, SseMiddlewareProvider);
        isRegistered(TYPES.NotificationMiddlewareProvider, NotificationMiddlewareProvider);
    });

    function constantRegistered(injectionToken: symbol, constant: any): void {
        const obj = DiContainer.get(injectionToken);
        expect(obj).toBe(constant);
        expect(DiContainer.get(injectionToken)).toBe(obj);
    }

    function singletonIsRegistered(injectionToken: symbol, concreteType: any): void {
        const obj = DiContainer.get(injectionToken);
        expect(obj).toBeInstanceOf(concreteType);
        expect(DiContainer.get(injectionToken)).toBe(obj);
    }

    function isRegistered(injectionToken: symbol, concreteType: any): void {
        const obj = DiContainer.get(injectionToken);
        expect(obj).toBeInstanceOf(concreteType);
    }
});
