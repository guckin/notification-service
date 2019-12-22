import {PublisherServiceInterface} from './publisher.interface';

export class PublisherServiceMock<T> implements PublisherServiceInterface<T> {
    onPublish(cb: (data: T) => void): void {
    }

    publish(value: T): void {
    }

}
