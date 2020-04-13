import {Container} from 'inversify';
import {LoggingService} from '../logging/logging.service';
import {NotificationPublisher} from '../notification-publisher/notification.publisher';
import {TYPES} from './types';
import {NotificationRoute} from '../notifcations-routing/notification.route';
import {NotificationSubscriber} from '../notifiction-subscriber/notification.subscriber';
import {Subject} from 'rxjs';
import {Notification} from '../notifcations-routing/notifiction.interface';
import {StreamFactory} from '../stream/stream.factory';
import {SseMiddlewareProvider} from '../sse-middleware/sse-middleware.provider';
import {NotificationMiddlewareProvider} from '../notification-middleware/notification-middleware.provider';
import {KoaApplication, KoaBodyParser, KoaRouter} from '../server/koa-application';
import {App} from '../server/app';
import {ServerConfiguration} from '../server/server-configuration';
import {RoutingFactory} from '../server/routing.factory';
import {PublisherRoute} from '../publisher/publisher.route';
import {HealthCheckRoute} from '../health-check/health-check.route';

export const NotificationSubject = new Subject<Notification>();

const container = new Container();

container.bind(TYPES.HealthCheckRoute).to(HealthCheckRoute);
container.bind(TYPES.LoggingService).to(LoggingService);
container.bind(TYPES.NotificationPublisher).to(NotificationPublisher).inSingletonScope();
container.bind(TYPES.NotificationRoute).to(NotificationRoute);
container.bind(TYPES.PublisherRoute).to(PublisherRoute);
container.bind(TYPES.NotificationSubscriber).to(NotificationSubscriber);
container.bind(TYPES.NotificationSubject).toConstantValue(NotificationSubject);
container.bind(TYPES.StreamFactory).to(StreamFactory);
container.bind(TYPES.SseMiddlewareProvider).to(SseMiddlewareProvider);
container.bind(TYPES.NotificationMiddlewareProvider).to(NotificationMiddlewareProvider);
container.bind(TYPES.KoaApplication).toConstantValue(KoaApplication);
container.bind(TYPES.KoaRouter).toConstantValue(KoaRouter);
container.bind(TYPES.ServerConfiguration).toConstantValue(ServerConfiguration);
container.bind(TYPES.RoutingFactory).to(RoutingFactory);
container.bind(TYPES.KoaBodyParser).toConstantValue(KoaBodyParser);
container.bind(TYPES.App).to(App);

export const DiContainer = container;
