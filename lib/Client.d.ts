import { Signal } from "signals.js";
import { Room } from "./Room";
import { Connection } from "./Connection";
export declare class Client {
    id?: string;
    onOpen: Signal;
    onMessage: Signal;
    onClose: Signal;
    onError: Signal;
    protected connection: Connection;
    protected room: Room;
    protected rooms: {
        [id: string]: Room;
    };
    protected hostname: string;
    constructor(url: string);
    join<T>(roomName: string, options?: any): Room<T>;
    /**
     * @override
     */
    protected onMessageCallback(event: any): void;
}
