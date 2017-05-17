import WebSocketClient from "websocket.js";
import { Room } from "./Room";
import { Signal } from "signals.js";
import { StateObject } from 'delta-listener';
export declare type RoomStateMap = {
    [roomName: string]: StateObject;
};
export declare class Client<T extends RoomStateMap> extends WebSocketClient {
    initialRoomStateMap: RoomStateMap;
    id?: string;
    rooms: {
        [id: string]: Room<StateObject>;
    };
    onOpen: Signal;
    onMessage: Signal;
    onClose: Signal;
    onError: Signal;
    private _enqueuedCalls;
    constructor(url: string, initialRoomStateMap: {
        [roomName: string]: StateObject;
    }, protocols?: string[], options?: any);
    onOpenCallback(event: any): void;
    onCloseCallback(): void;
    onErrorCallback(): void;
    send(data: any): void;
    join(roomName: keyof T, options?: any): {
        [id: string]: Room<StateObject>;
    }[keyof T];
    /**
     * @override
     */
    onMessageCallback(event: any): void;
}
