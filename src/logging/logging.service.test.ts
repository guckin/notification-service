import {LoggingService} from './logging.service';

describe('LoggingService', () => {

    let service: LoggingService;

    beforeEach(() => {
        service = new LoggingService();
        jest.spyOn(global.console, 'log');
    });

    it('logs a message', () => {
        const expectedLogValue = 'foo';
        service.log(expectedLogValue);

        expect(console.log).toBeCalledWith(expectedLogValue);
    });

    it('logs messages', () => {
        const expectedLogValues = ['foo', 'bar'];
        service.log(...expectedLogValues);

        expect(console.log).toBeCalledWith(...expectedLogValues);
    });
});
