import WebSocketClient from "websocket.js";
import { Room } from "./Room";
import { Signal } from "signals.js";
import { ExplicitStateObject } from 'delta-listener';
export declare type RoomStateMap = {
    [roomName: string]: ExplicitStateObject<any>;
};
export declare class Client<T extends RoomStateMap> extends WebSocketClient {
    initialRoomStateMap: RoomStateMap;
    id?: string;
    rooms: {
        [id: string]: Room<ExplicitStateObject<any>>;
    };
    onOpen: Signal;
    onMessage: Signal;
    onClose: Signal;
    onError: Signal;
    private _enqueuedCalls;
    constructor(url: string, initialRoomStateMap: {
        [roomName: string]: ExplicitStateObject<any>;
    }, protocols?: string[], options?: any);
    onOpenCallback(event: any): void;
    onCloseCallback(): void;
    onErrorCallback(): void;
    send(data: any): void;
    join(roomName: keyof T, options?: any): {
        [id: string]: Room<any>;
    }[keyof T];
    /**
     * @override
     */
    onMessageCallback(event: any): void;
}
