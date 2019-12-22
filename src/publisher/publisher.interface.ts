export interface PublisherServiceInterface<T> {
    onPublish(cb: (data: T) => void): void;
    publish(value: T): void;
}
