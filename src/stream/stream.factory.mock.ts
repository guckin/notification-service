import {StreamFactoryInterface} from './stream.factory.interface';

export class StreamFactoryMock implements StreamFactoryInterface {
    getStream(): NodeJS.WritableStream {
        return undefined;
    }
}
