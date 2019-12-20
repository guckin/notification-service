import {HelloWorldService} from './hello-world.service';
import {LoggingServiceInterface} from '../logging/logging.service.interface';
import {LoggingServiceMock} from '../logging/logging.service.mock';

describe('HelloWorldService', () => {
    let service: HelloWorldService;
    let logService: LoggingServiceInterface;

    beforeEach(() => {
        logService = new LoggingServiceMock();
        service = new HelloWorldService(logService);
    });

    it('logs hello world', () => {
        service.helloWorld();

        expect(logService.log).toBeCalledWith('Hello World');
    });
});
