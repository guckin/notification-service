import {Subject} from 'rxjs';
import {Notification} from './notifiction.interface';

export const NotificationSubject = new Subject<Notification>();
