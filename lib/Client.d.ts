import WebSocketClient from "websocket.js";
import { Room } from "./Room";
import { Signal } from "signals.js";
export declare class Client extends WebSocketClient {
    id?: string;
    rooms: {
        [id: string]: Room<any>;
    };
    onOpen: Signal;
    onMessage: Signal;
    onClose: Signal;
    onError: Signal;
    private _enqueuedCalls;
    constructor(url: string, protocols?: string[], options?: any);
    onOpenCallback(event: any): void;
    onCloseCallback(): void;
    onErrorCallback(): void;
    send(data: any): void;
    join<T>(roomName: string, options?: any): Room<T>;
    /**
     * @override
     */
    onMessageCallback(event: any): void;
}
