import {StreamFactory} from './stream.factory';
import {PassThrough} from 'stream';

describe('StreamFactory', () => {

    let factory: StreamFactory;

    beforeEach(() => {
       factory = new StreamFactory() ;
    });

    it('does nothing yet', () => {
        const stream = factory.getStream();

        expect(stream).toBeInstanceOf(PassThrough);
    });
});
