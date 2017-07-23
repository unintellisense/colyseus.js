import { Signal } from "signals.js";
import Clock = require("clock.js");
import { DeltaContainer } from "delta-listener";
import { Client } from "./Client";
export declare class Room<T> {
    id: number;
    name: string;
    state: DeltaContainer<T & any>;
    clock: Clock;
    remoteClock: Clock;
    onJoin: Signal;
    onUpdate: Signal;
    onData: Signal;
    onError: Signal;
    onLeave: Signal;
    ping: number;
    private lastPatchTime;
    private client;
    private _previousState;
    constructor(client: Client, name: string);
    setState(state: T, remoteCurrentTime?: number, remoteElapsedTime?: number): void;
    patch(binaryPatch: any): void;
    leave(): void;
    send(data: any): void;
    removeAllListeners: () => void;
}