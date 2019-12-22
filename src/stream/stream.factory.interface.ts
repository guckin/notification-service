export interface StreamFactoryInterface {
    getStream(): NodeJS.WritableStream;
}
