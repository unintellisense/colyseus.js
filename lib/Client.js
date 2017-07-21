"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var msgpack = require("msgpack-lite");
var signals_js_1 = require("signals.js");
var Protocol_1 = require("./Protocol");
var Room_1 = require("./Room");
var Connection_1 = require("./Connection");
var Client = (function () {
    function Client(url) {
        var _this = this;
        // signals
        this.onOpen = new signals_js_1.Signal();
        this.onMessage = new signals_js_1.Signal();
        this.onClose = new signals_js_1.Signal();
        this.onError = new signals_js_1.Signal();
        this.rooms = {};
        this.id = localStorage.getItem('colyseusid') || "";
        this.hostname = url;
        this.connection = new Connection_1.Connection(this.hostname + "/?colyseusid=" + this.id);
        this.connection.onmessage = this.onMessageCallback.bind(this);
        this.connection.onclose = function (e) { return _this.onClose.dispatch(); };
        this.connection.onerror = function (e) { return _this.onError.dispatch(); };
        // check for id on cookie
        this.connection.onopen = function () {
            if (_this.id) {
                _this.onOpen.dispatch();
            }
        };
    }
    Client.prototype.join = function (roomName, options) {
        if (options === void 0) { options = {}; }
        this.room = new Room_1.Room(roomName);
        this.connection.send([Protocol_1.Protocol.JOIN_ROOM, roomName, options]);
        return this.room;
    };
    /**
     * @override
     */
    Client.prototype.onMessageCallback = function (event) {
        var _this = this;
        var message = msgpack.decode(new Uint8Array(event.data));
        var code = message[0];
        if (code == Protocol_1.Protocol.USER_ID) {
            localStorage.setItem('colyseusid', message[1]);
            this.id = message[1];
            this.onOpen.dispatch();
        }
        else if (code == Protocol_1.Protocol.JOIN_ROOM) {
            var room_1 = this.room;
            room_1.id = message[1];
            room_1.connect(new Connection_1.Connection(this.hostname + "/" + this.room.id + "?colyseusid=" + this.id));
            room_1.onLeave.add(function () { return delete _this.rooms[room_1.id]; });
            this.rooms[room_1.id] = room_1;
        }
        else if (code == Protocol_1.Protocol.JOIN_ERROR) {
            console.error("server error:", message[2]);
            // general error
            this.onError.dispatch(message[2]);
        }
        else {
            this.onMessage.dispatch(message);
        }
    };
    return Client;
}());
exports.Client = Client;
