import { Signal } from "signals.js";
import Clock = require("clock.js");
import { ExplicitContainer, StateObject } from "delta-listener";
import { Client } from "./Client";
export declare class Room<T extends StateObject> {
    id: number;
    name: string;
    state: ExplicitContainer<T>;
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
    constructor(client: Client<any>, name: string, data: T);
    setState(state: T, remoteCurrentTime?: number, remoteElapsedTime?: number): void;
    patch(binaryPatch: any): void;
    leave(): void;
    send(data: any): void;
    removeAllListeners: () => void;
}
