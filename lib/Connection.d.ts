import WebSocketClient from "websocket.js";
export declare class Connection extends WebSocketClient {
    private _enqueuedCalls;
    constructor(url: any, query?: any);
    onOpenCallback(event: any): void;
    send(data: any): void;
}
