import {StreamFactoryInterface} from './stream.factory.interface';
import {injectable} from 'inversify';
import 'reflect-metadata';
import {PassThrough} from 'stream';

@injectable()
export class StreamFactory implements StreamFactoryInterface {
    getStream(): NodeJS.WritableStream {
        return new PassThrough();
    }
}
