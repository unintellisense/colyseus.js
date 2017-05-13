"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signals_js_1 = require("signals.js");
var Clock = require("clock.js");
var delta_listener_1 = require("delta-listener");
var msgpack = require("msgpack-lite");
var fossilDelta = require("fossil-delta");
var Protocol_1 = require("./Protocol");
var Room = (function () {
    function Room(client, name, data) {
        var _this = this;
        this.clock = new Clock();
        this.remoteClock = new Clock();
        // Public signals
        this.onJoin = new signals_js_1.Signal();
        this.onUpdate = new signals_js_1.Signal();
        this.onData = new signals_js_1.Signal();
        this.onError = new signals_js_1.Signal();
        this.onLeave = new signals_js_1.Signal();
        this.removeAllListeners = function () {
            _this.onJoin.removeAll();
            _this.onUpdate.removeAll();
            _this.onData.removeAll();
            _this.onError.removeAll();
            _this.onLeave.removeAll();
            _this.state.removeAllListeners();
        };
        this.id = null;
        this.client = client;
        this.name = name;
        this.onLeave.add(this.removeAllListeners);
        this.state = new delta_listener_1.ExplicitContainer(data);
    }
    Room.prototype.setState = function (state, remoteCurrentTime, remoteElapsedTime) {
        this.state.set(state);
        this._previousState = msgpack.encode(state);
        // set remote clock properties
        if (remoteCurrentTime && remoteElapsedTime) {
            this.remoteClock.currentTime = remoteCurrentTime;
            this.remoteClock.elapsedTime = remoteElapsedTime;
        }
        this.clock.start();
        this.onUpdate.dispatch(state);
    };
    Room.prototype.patch = function (binaryPatch) {
        //
        // calculate client-side ping
        //
        var patchTime = Date.now();
        if (this.lastPatchTime) {
            this.ping = patchTime - this.lastPatchTime;
        }
        this.lastPatchTime = patchTime;
        this.clock.tick();
        // apply patch
        this._previousState = fossilDelta.apply(this._previousState, binaryPatch);
        // trigger state callbacks
        this.state.set(msgpack.decode(this._previousState));
        this.onUpdate.dispatch(this.state.data);
    };
    Room.prototype.leave = function () {
        if (this.id >= 0) {
            this.client.send([Protocol_1.Protocol.LEAVE_ROOM, this.id]);
        }
    };
    Room.prototype.send = function (data) {
        this.client.send([Protocol_1.Protocol.ROOM_DATA, this.id, data]);
    };
    return Room;
}());
exports.Room = Room;
