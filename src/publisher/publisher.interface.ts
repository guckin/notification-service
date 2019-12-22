export interface PublisherServiceInterface<T> {
    publish(value: T): void;
}
