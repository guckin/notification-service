import {Container} from 'inversify';
import {LoggingService} from '../logging/logging.service';
import {NotificationPublisher} from '../notification-publisher/notification.publisher';
import {TYPES} from './types';
import {NotificationRoute} from '../notifcations-routing/notification.route';
import {NotificationSubscriber} from '../notifiction-subscriber/notification.subscriber';
import {Subject} from 'rxjs';
import {Notification} from '../notifcations-routing/notifiction.interface';
import {StreamFactory} from '../stream/stream.factory';
import {sseMiddleWare} from '../sse-middleware/sse-middleware';

export const NotificationSubject = new Subject<Notification>();

const container = new Container();

container.bind(TYPES.LoggingService).to(LoggingService);
container.bind(TYPES.NotificationPublisher).to(NotificationPublisher).inSingletonScope();
container.bind(TYPES.NotificationRoute).to(NotificationRoute);
container.bind(TYPES.NotificationSubscriber).to(NotificationSubscriber);
container.bind(TYPES.NotificationSubject).toConstantValue(NotificationSubject);
container.bind(TYPES.StreamFactory).to(StreamFactory);
container.bind(TYPES.SseMiddleware).toConstantValue(sseMiddleWare);

export const DiContainer = container;
