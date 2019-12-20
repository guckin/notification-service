import {LoggingServiceInterface} from './logging.service.interface';

export class LoggingService implements LoggingServiceInterface {
    log(...args: any[]): void {
        console.log(...args);
    }
}
