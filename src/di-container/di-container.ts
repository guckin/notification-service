import {Container} from 'inversify';
import {LoggingService} from '../logging/logging.service';
import {NotificationService} from '../notifcations/notification.service';
import {NotificationPublisher} from '../notifcation-publisher/notification.publisher';
import {TYPES} from './types';

const container = new Container();

container.bind(TYPES.LoggingService).to(LoggingService);
container.bind(TYPES.NotificationService).to(NotificationService).inSingletonScope();
container.bind(TYPES.NotificationPublisher).to(NotificationPublisher);

export const DiContainer = container;
