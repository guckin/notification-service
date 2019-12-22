import {StreamFactoryInterface} from './stream.factory.interface';
import {injectable} from 'inversify';
import 'reflect-metadata';

@injectable()
export class StreamFactory implements StreamFactoryInterface {
    getStream(): NodeJS.WritableStream {
        return undefined;
    }
}
