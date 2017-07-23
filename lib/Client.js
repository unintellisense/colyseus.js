"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_js_1 = require("websocket.js");
var msgpack = require("msgpack-lite");
var Protocol_1 = require("./Protocol");
var Room_1 = require("./Room");
var signals_js_1 = require("signals.js");
var Client = (function (_super) {
    __extends(Client, _super);
    function Client(url, protocols, options) {
        if (protocols === void 0) { protocols = null; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, url, protocols, options) || this;
        _this.rooms = {};
        // signals
        _this.onOpen = new signals_js_1.Signal();
        _this.onMessage = new signals_js_1.Signal();
        _this.onClose = new signals_js_1.Signal();
        _this.onError = new signals_js_1.Signal();
        _this._enqueuedCalls = [];
        _this.binaryType = "arraybuffer";
        return _this;
    }
    Client.prototype.onOpenCallback = function (event) {
        if (this._enqueuedCalls.length > 0) {
            for (var i = 0; i < this._enqueuedCalls.length; i++) {
                var _a = this._enqueuedCalls[i], method = _a[0], args = _a[1];
                this[method].apply(this, args);
            }
        }
    };
    Client.prototype.onCloseCallback = function () {
        this.onClose.dispatch();
    };
    Client.prototype.onErrorCallback = function () {
        this.onError.dispatch();
    };
    Client.prototype.send = function (data) {
        if (this.ws.readyState == WebSocket.OPEN) {
            return _super.prototype.send.call(this, msgpack.encode(data));
        }
        else {
            // WebSocket not connected.
            // Enqueue data to be sent when readyState == OPEN
            this._enqueuedCalls.push(['send', [data]]);
        }
    };
    Client.prototype.join = function (roomName, options) {
        if (options === void 0) { options = {}; }
        if (!this.rooms[roomName]) {
            this.rooms[roomName] = new Room_1.Room(this, roomName);
        }
        this.send([Protocol_1.Protocol.JOIN_ROOM, roomName, options]);
        return this.rooms[roomName];
    };
    /**
     * @override
     */
    Client.prototype.onMessageCallback = function (event) {
        var message = msgpack.decode(new Uint8Array(event.data));
        var code = message[0];
        var roomId = message[1];
        if (code == Protocol_1.Protocol.USER_ID) {
            this.id = roomId;
            this.onOpen.dispatch();
        }
        else if (code == Protocol_1.Protocol.JOIN_ROOM) {
            // joining room from room name:
            // when first room message is received, keep only roomId association on `rooms` object
            if (this.rooms[message[2]]) {
                this.rooms[roomId] = this.rooms[message[2]];
                delete this.rooms[message[2]];
            }
            this.rooms[roomId].id = roomId;
            this.rooms[roomId].onJoin.dispatch();
        }
        else if (code == Protocol_1.Protocol.JOIN_ERROR) {
            var room = this.rooms[roomId];
            console.error("server error:", message[2]);
            if (room) {
                // room-related error
                room.onError.dispatch(message[2]);
            }
            else {
                // general error
                this.onError.dispatch(message[2]);
            }
        }
        else if (code == Protocol_1.Protocol.LEAVE_ROOM) {
            this.rooms[roomId].onLeave.dispatch();
        }
        else if (code == Protocol_1.Protocol.ROOM_STATE) {
            var state = message[2];
            var remoteCurrentTime = message[3];
            var remoteElapsedTime = message[4];
            this.rooms[roomId].setState(state, remoteCurrentTime, remoteElapsedTime);
        }
        else if (code == Protocol_1.Protocol.ROOM_STATE_PATCH) {
            var patches = message[2];
            this.rooms[roomId].patch(patches);
        }
        else if (code == Protocol_1.Protocol.ROOM_DATA) {
            this.rooms[roomId].onData.dispatch(message[2]);
            this.onMessage.dispatch(message[2]);
        }
        else {
            this.onMessage.dispatch(message);
        }
    };
    return Client;
}(websocket_js_1.default));
exports.Client = Client;
