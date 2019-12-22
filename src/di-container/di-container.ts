import {Container} from 'inversify';
import {LoggingService} from '../logging/logging.service';
import {NotificationService} from '../notifcations/notification.service';
import {NotificationPublisher} from '../notifcation-publisher/notification.publisher';
import {TYPES} from './types';
import {NotificationRoute} from '../notifcations/notification.route';
import {NotificationSubscriber} from '../notifiction-subscriber/notification.subscriber';
import {NotificationSubject} from '../notifcations/notification.subject';

const container = new Container();

container.bind(TYPES.LoggingService).to(LoggingService);
container.bind(TYPES.NotificationService).to(NotificationService);
container.bind(TYPES.NotificationPublisher).to(NotificationPublisher).inSingletonScope();
container.bind(TYPES.NotificationRoute).to(NotificationRoute);
container.bind(TYPES.NotificationSubscriber).to(NotificationSubscriber);
container.bind(TYPES.NotificationSubject).toConstantValue(NotificationSubject);

export const DiContainer = container;
