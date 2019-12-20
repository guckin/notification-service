import {HelloWorldInterface} from './hello-world.interface';
import {LoggingServiceInterface} from '../logging/logging.service.interface';

export class HelloWorldService implements HelloWorldInterface {

    constructor(
        private readonly loggingService: LoggingServiceInterface
    ) {}

    helloWorld(): void {
        this.loggingService.log('Hello World');
    }

}
