import {PublisherServiceInterface} from './publisher.interface';

export class PublisherServiceMock<T> implements PublisherServiceInterface<T> {
    publish(value: T): void {
    }
}
