import { Signal } from "signals.js";
import Clock = require("clock.js");
import { DeltaContainer } from "delta-listener";
import { Connection } from "./Connection";
export declare class Room<T = any> extends DeltaContainer<T & any> {
    id: number;
    name: string;
    sessionId: string;
    clock: Clock;
    remoteClock: Clock;
    onJoin: Signal;
    onUpdate: Signal;
    onData: Signal;
    onError: Signal;
    onLeave: Signal;
    ping: number;
    private lastPatchTime;
    connection: Connection;
    private _previousState;
    constructor(name: string);
    connect(connection: Connection): void;
    protected onMessageCallback(event: any): void;
    setState(state: T, remoteCurrentTime?: number, remoteElapsedTime?: number): void;
    patch(binaryPatch: any): void;
    leave(): void;
    send(data: any): void;
    removeAllListeners(): void;
}
