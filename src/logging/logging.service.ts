import {LoggingServiceInterface} from './logging.service.interface';
import {injectable} from 'inversify';
import 'reflect-metadata';

@injectable()
export class LoggingService implements LoggingServiceInterface {
    log(...args: any[]): void {
        console.log(...args);
    }
}
