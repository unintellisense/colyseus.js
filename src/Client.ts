import WebSocketClient from "websocket.js";
import * as msgpack from "msgpack-lite";

import { Protocol } from "./Protocol";
import { Room } from "./Room";

import { Signal } from "signals.js";
import { ExplicitStateObject } from 'delta-listener';

/* TODO: Client should be passed in a map of roomNames:StateObject(s), with the intent 
that the StateObject should be passed in to the room constructor when necessary */

export type RoomStateMap = {
    [roomName: string]: ExplicitStateObject<any>
}

export class Client<T extends RoomStateMap> extends WebSocketClient {


    public initialRoomStateMap: RoomStateMap
    id?: string;
    rooms: { [id: string]: Room<ExplicitStateObject<any>> } = {};

    // signals
    onOpen: Signal = new Signal();
    onMessage: Signal = new Signal();
    onClose: Signal = new Signal();
    onError: Signal = new Signal();

    private _enqueuedCalls: any[] = [];

    constructor(url: string, initialRoomStateMap: { [roomName: string]: ExplicitStateObject<any> }, protocols: string[] = null, options: any = {}) {
        super(url, protocols, options);
        this.binaryType = "arraybuffer";
        this.initialRoomStateMap = initialRoomStateMap;
    }

    onOpenCallback(event) {
        if (this._enqueuedCalls.length > 0) {
            for (let i = 0; i < this._enqueuedCalls.length; i++) {
                let [method, args] = this._enqueuedCalls[i];
                this[method].apply(this, args);
            }
        }
    }

    onCloseCallback() {
        this.onClose.dispatch();
    }

    onErrorCallback() {
        this.onError.dispatch();
    }

    send(data: any): void {
        if (this.ws.readyState == WebSocket.OPEN) {
            return super.send(msgpack.encode(data))

        } else {

            // WebSocket not connected.
            // Enqueue data to be sent when readyState == OPEN
            this._enqueuedCalls.push(['send', [data]])
        }
    }

    join(roomName: keyof T, options?: any) {
        if (!this.rooms[roomName]) {
            this.rooms[roomName] = new Room<any>(this, roomName, this.initialRoomStateMap[roomName]);
        }

        this.send([Protocol.JOIN_ROOM, roomName, options]);

        return this.rooms[roomName];
    }

    /**
     * @override
     */
    onMessageCallback(event) {
        let message = msgpack.decode(new Uint8Array(event.data));

        let code = message[0];
        let roomId = message[1];

        if (code == Protocol.USER_ID) {
            this.id = roomId

            this.onOpen.dispatch();

        } else if (code == Protocol.JOIN_ROOM) {
            // joining room from room name:
            // when first room message is received, keep only roomId association on `rooms` object
            if (this.rooms[message[2]]) {
                this.rooms[roomId] = this.rooms[message[2]];
                delete this.rooms[message[2]];
            }

            this.rooms[roomId].id = roomId;
            this.rooms[roomId].onJoin.dispatch();

        } else if (code == Protocol.JOIN_ERROR) {
            let room = this.rooms[roomId];

            console.error("server error:", message[2]);

            if (room) {
                // room-related error
                room.onError.dispatch(message[2]);

            } else {
                // general error
                this.onError.dispatch(message[2]);
            }


        } else if (code == Protocol.LEAVE_ROOM) {

            this.rooms[roomId].onLeave.dispatch();

        } else if (code == Protocol.ROOM_STATE) {

            let state = message[2];
            let remoteCurrentTime = message[3];
            let remoteElapsedTime = message[4];

            this.rooms[roomId].setState(state, remoteCurrentTime, remoteElapsedTime);

        } else if (code == Protocol.ROOM_STATE_PATCH) {
            let patches = message[2];

            this.rooms[roomId].patch(patches);

        } else if (code == Protocol.ROOM_DATA) {

            this.rooms[roomId].onData.dispatch(message[2]);
            this.onMessage.dispatch(message[2]);

        } else {

            this.onMessage.dispatch(message);

        }

    }

}
