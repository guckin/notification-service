import {LoggingServiceInterface} from './logging.service.interface';

export class LoggingServiceMock implements LoggingServiceInterface {
    log = jest.fn();
}
