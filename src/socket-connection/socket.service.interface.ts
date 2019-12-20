import {Socket} from 'socket.io';

export type EventCallback = (socket: Socket) => void;

export interface SocketServiceInterface {
    onConnection(cb: () => void): void;
    onDisconnect(cb: () => void): void;
    addEvent(name: string, cb: EventCallback): void;
    start(): void;
}
