var Colyseus =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// bufferish.js

var Buffer = exports.global = __webpack_require__(44);
var hasBuffer = exports.hasBuffer = Buffer && !!Buffer.isBuffer;
var hasArrayBuffer = exports.hasArrayBuffer = ("undefined" !== typeof ArrayBuffer);

var isArray = exports.isArray = __webpack_require__(2);
exports.isArrayBuffer = hasArrayBuffer ? isArrayBuffer : _false;
var isBuffer = exports.isBuffer = hasBuffer ? Buffer.isBuffer : _false;
var isView = exports.isView = hasArrayBuffer ? (ArrayBuffer.isView || _is("ArrayBuffer", "buffer")) : _false;

exports.alloc = alloc;
exports.concat = concat;
exports.from = from;

var BufferArray = exports.Array = __webpack_require__(46);
var BufferBuffer = exports.Buffer = __webpack_require__(47);
var BufferUint8Array = exports.Uint8Array = __webpack_require__(48);
var BufferProto = exports.prototype = __webpack_require__(10);

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer|Uint8Array|Array}
 */

function from(value) {
  if (typeof value === "string") {
    return fromString.call(this, value);
  } else {
    return auto(this).from(value);
  }
}

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return auto(this).alloc(size);
}

/**
 * @param list {Array} array of (Buffer|Uint8Array|Array)s
 * @param [length]
 * @returns {Buffer|Uint8Array|Array}
 */

function concat(list, length) {
  if (!length) {
    length = 0;
    Array.prototype.forEach.call(list, dryrun);
  }
  var ref = (this !== exports) && this || list[0];
  var result = alloc.call(ref, length);
  var offset = 0;
  Array.prototype.forEach.call(list, append);
  return result;

  function dryrun(buffer) {
    length += buffer.length;
  }

  function append(buffer) {
    offset += BufferProto.copy.call(buffer, result, offset);
  }
}

var _isArrayBuffer = _is("ArrayBuffer");

function isArrayBuffer(value) {
  return (value instanceof ArrayBuffer) || _isArrayBuffer(value);
}

/**
 * @private
 */

function fromString(value) {
  var expected = value.length * 3;
  var that = alloc.call(this, expected);
  var actual = BufferProto.write.call(that, value);
  if (expected !== actual) {
    that = BufferProto.slice.call(that, 0, actual);
  }
  return that;
}

function auto(that) {
  return isBuffer(that) ? BufferBuffer
    : isView(that) ? BufferUint8Array
    : isArray(that) ? BufferArray
    : hasBuffer ? BufferBuffer
    : hasArrayBuffer ? BufferUint8Array
    : BufferArray;
}

function _false() {
  return false;
}

function _is(name, key) {
  /* jshint eqnull:true */
  name = "[object " + name + "]";
  return function(value) {
    return (value != null) && {}.toString.call(key ? value[key] : value) === name;
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(72);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(71);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), __webpack_require__(60)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// codec-base.js

var IS_ARRAY = __webpack_require__(2);

exports.createCodec = createCodec;
exports.install = install;
exports.filter = filter;

var Bufferish = __webpack_require__(0);

function Codec(options) {
  if (!(this instanceof Codec)) return new Codec(options);
  this.options = options;
  this.init();
}

Codec.prototype.init = function() {
  var options = this.options;

  if (options && options.uint8array) {
    this.bufferish = Bufferish.Uint8Array;
  }

  return this;
};

function install(props) {
  for (var key in props) {
    Codec.prototype[key] = add(Codec.prototype[key], props[key]);
  }
}

function add(a, b) {
  return (a && b) ? ab : (a || b);

  function ab() {
    a.apply(this, arguments);
    return b.apply(this, arguments);
  }
}

function join(filters) {
  filters = filters.slice();

  return function(value) {
    return filters.reduce(iterator, value);
  };

  function iterator(value, filter) {
    return filter(value);
  }
}

function filter(filter) {
  return IS_ARRAY(filter) ? join(filter) : filter;
}

// @public
// msgpack.createCodec()

function createCodec(options) {
  return new Codec(options);
}

// default shared codec

exports.preset = createCodec({preset: true});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The Slot class represents a signal slot.
 *
 * @author Robert Penner
 * @author Joa Ebert
 */
var Slot = (function () {
    /**
     * Creates and returns a new Slot object.
     *
     * @param listener The listener associated with the slot.
     * @param signal The signal associated with the slot.
     * @param once Whether or not the listener should be executed only once.
     * @param priority The priority of the slot.
     *
     * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>.
     * @throws Error <code>Error</code>: Internal signal reference has not been set yet.
     */
    function Slot(listener, signal, once, priority) {
        if (once === void 0) { once = false; }
        if (priority === void 0) { priority = 0; }
        this._enabled = true;
        this._once = false;
        this._priority = 0;
        this._listener = listener;
        this._once = once;
        this._signal = signal;
        this._priority = priority;
        this.verifyListener(listener);
    }
    /**
     * @inheritDoc
     */
    Slot.prototype.execute0 = function () {
        if (!this._enabled)
            return;
        if (this._once)
            this.remove();
        if (this._params && this._params.length) {
            this._listener.apply(null, this._params);
            return;
        }
        this._listener();
    };
    /**
     * @inheritDoc
     */
    Slot.prototype.execute1 = function (value) {
        if (!this._enabled)
            return;
        if (this._once)
            this.remove();
        if (this._params && this._params.length) {
            this._listener.apply(null, [value].concat(this._params));
            return;
        }
        this._listener(value);
    };
    /**
     * @inheritDoc
     */
    Slot.prototype.execute = function (valueObjects) {
        if (!this._enabled)
            return;
        if (this._once)
            this.remove();
        // If we have parameters, add them to the valueObject
        // Note: This could be expensive if we're after the fastest dispatch possible.
        if (this._params && this._params.length) {
            valueObjects = valueObjects.concat(this._params);
        }
        // NOTE: simple ifs are faster than switch: http://jacksondunstan.com/articles/1007
        var numValueObjects = valueObjects.length;
        if (numValueObjects == 0) {
            this._listener();
        }
        else if (numValueObjects == 1) {
            this._listener(valueObjects[0]);
        }
        else if (numValueObjects == 2) {
            this._listener(valueObjects[0], valueObjects[1]);
        }
        else if (numValueObjects == 3) {
            this._listener(valueObjects[0], valueObjects[1], valueObjects[2]);
        }
        else {
            this._listener.apply(null, valueObjects);
        }
    };
    Object.defineProperty(Slot.prototype, "listener", {
        /**
         * @inheritDoc
         * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>. Did you want to set enabled to false instead?
         * @throws Error <code>Error</code>: Internal signal reference has not been set yet.
         */
        get: function () {
            return this._listener;
        },
        set: function (value) {
            if (null == value)
                throw new Error('Given listener is null.\nDid you want to set enabled to false instead?');
            this.verifyListener(value);
            this._listener = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slot.prototype, "once", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._once;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slot.prototype, "priority", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._priority;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates and returns the string representation of the current object.
     *
     * @return The string representation of the current object.
     */
    Slot.prototype.toString = function () {
        return "[Slot listener: " + this._listener + ", once: " + this._once
            + ", priority: " + this._priority + ", enabled: " + this._enabled + "]";
    };
    Object.defineProperty(Slot.prototype, "enabled", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slot.prototype, "params", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._params;
        },
        set: function (value) {
            this._params = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    Slot.prototype.remove = function () {
        this._signal.remove(this._listener);
    };
    Slot.prototype.verifyListener = function (listener) {
        if (null == listener) {
            throw new Error('Given listener is null.');
        }
        if (null == this._signal) {
            throw new Error('Internal signal reference has not been set yet.');
        }
    };
    return Slot;
}());
exports.Slot = Slot;
//# sourceMappingURL=Slot.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Use codes between 0~127 for lesser throughput (1 byte)
Object.defineProperty(exports, "__esModule", { value: true });
var Protocol;
(function (Protocol) {
    // User-related (0~10)
    Protocol[Protocol["USER_ID"] = 1] = "USER_ID";
    // Room-related (10~20)
    Protocol[Protocol["JOIN_ROOM"] = 10] = "JOIN_ROOM";
    Protocol[Protocol["JOIN_ERROR"] = 11] = "JOIN_ERROR";
    Protocol[Protocol["LEAVE_ROOM"] = 12] = "LEAVE_ROOM";
    Protocol[Protocol["ROOM_DATA"] = 13] = "ROOM_DATA";
    Protocol[Protocol["ROOM_STATE"] = 14] = "ROOM_STATE";
    Protocol[Protocol["ROOM_STATE_PATCH"] = 15] = "ROOM_STATE_PATCH";
    // Generic messages (50~60)
    Protocol[Protocol["BAD_REQUEST"] = 50] = "BAD_REQUEST";
})(Protocol = exports.Protocol || (exports.Protocol = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// int64-buffer.js

/*jshint -W018 */ // Confusing use of '!'.
/*jshint -W030 */ // Expected an assignment or function call and instead saw an expression.
/*jshint -W093 */ // Did you mean to return a conditional instead of an assignment?

var Uint64BE, Int64BE, Uint64LE, Int64LE;

!function(exports) {
  // constants

  var UNDEFINED = "undefined";
  var BUFFER = (UNDEFINED !== typeof Buffer) && Buffer;
  var UINT8ARRAY = (UNDEFINED !== typeof Uint8Array) && Uint8Array;
  var ARRAYBUFFER = (UNDEFINED !== typeof ArrayBuffer) && ArrayBuffer;
  var ZERO = [0, 0, 0, 0, 0, 0, 0, 0];
  var isArray = Array.isArray || _isArray;
  var BIT32 = 4294967296;
  var BIT24 = 16777216;

  // storage class

  var storage; // Array;

  // generate classes

  Uint64BE = factory("Uint64BE", true, true);
  Int64BE = factory("Int64BE", true, false);
  Uint64LE = factory("Uint64LE", false, true);
  Int64LE = factory("Int64LE", false, false);

  // class factory

  function factory(name, bigendian, unsigned) {
    var posH = bigendian ? 0 : 4;
    var posL = bigendian ? 4 : 0;
    var pos0 = bigendian ? 0 : 3;
    var pos1 = bigendian ? 1 : 2;
    var pos2 = bigendian ? 2 : 1;
    var pos3 = bigendian ? 3 : 0;
    var fromPositive = bigendian ? fromPositiveBE : fromPositiveLE;
    var fromNegative = bigendian ? fromNegativeBE : fromNegativeLE;
    var proto = Int64.prototype;
    var isName = "is" + name;
    var _isInt64 = "_" + isName;

    // properties
    proto.buffer = void 0;
    proto.offset = 0;
    proto[_isInt64] = true;

    // methods
    proto.toNumber = toNumber;
    proto.toString = toString;
    proto.toJSON = toNumber;
    proto.toArray = toArray;

    // add .toBuffer() method only when Buffer available
    if (BUFFER) proto.toBuffer = toBuffer;

    // add .toArrayBuffer() method only when Uint8Array available
    if (UINT8ARRAY) proto.toArrayBuffer = toArrayBuffer;

    // isUint64BE, isInt64BE
    Int64[isName] = isInt64;

    // CommonJS
    exports[name] = Int64;

    return Int64;

    // constructor
    function Int64(buffer, offset, value, raddix) {
      if (!(this instanceof Int64)) return new Int64(buffer, offset, value, raddix);
      return init(this, buffer, offset, value, raddix);
    }

    // isUint64BE, isInt64BE
    function isInt64(b) {
      return !!(b && b[_isInt64]);
    }

    // initializer
    function init(that, buffer, offset, value, raddix) {
      if (UINT8ARRAY && ARRAYBUFFER) {
        if (buffer instanceof ARRAYBUFFER) buffer = new UINT8ARRAY(buffer);
        if (value instanceof ARRAYBUFFER) value = new UINT8ARRAY(value);
      }

      // Int64BE() style
      if (!buffer && !offset && !value && !storage) {
        // shortcut to initialize with zero
        that.buffer = newArray(ZERO, 0);
        return;
      }

      // Int64BE(value, raddix) style
      if (!isValidBuffer(buffer, offset)) {
        var _storage = storage || Array;
        raddix = offset;
        value = buffer;
        offset = 0;
        buffer = new _storage(8);
      }

      that.buffer = buffer;
      that.offset = offset |= 0;

      // Int64BE(buffer, offset) style
      if (UNDEFINED === typeof value) return;

      // Int64BE(buffer, offset, value, raddix) style
      if ("string" === typeof value) {
        fromString(buffer, offset, value, raddix || 10);
      } else if (isValidBuffer(value, raddix)) {
        fromArray(buffer, offset, value, raddix);
      } else if ("number" === typeof raddix) {
        writeInt32(buffer, offset + posH, value); // high
        writeInt32(buffer, offset + posL, raddix); // low
      } else if (value > 0) {
        fromPositive(buffer, offset, value); // positive
      } else if (value < 0) {
        fromNegative(buffer, offset, value); // negative
      } else {
        fromArray(buffer, offset, ZERO, 0); // zero, NaN and others
      }
    }

    function fromString(buffer, offset, str, raddix) {
      var pos = 0;
      var len = str.length;
      var high = 0;
      var low = 0;
      if (str[0] === "-") pos++;
      var sign = pos;
      while (pos < len) {
        var chr = parseInt(str[pos++], raddix);
        if (!(chr >= 0)) break; // NaN
        low = low * raddix + chr;
        high = high * raddix + Math.floor(low / BIT32);
        low %= BIT32;
      }
      if (sign) {
        high = ~high;
        if (low) {
          low = BIT32 - low;
        } else {
          high++;
        }
      }
      writeInt32(buffer, offset + posH, high);
      writeInt32(buffer, offset + posL, low);
    }

    function toNumber() {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      if (!unsigned) high |= 0; // a trick to get signed
      return high ? (high * BIT32 + low) : low;
    }

    function toString(radix) {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      var str = "";
      var sign = !unsigned && (high & 0x80000000);
      if (sign) {
        high = ~high;
        low = BIT32 - low;
      }
      radix = radix || 10;
      while (1) {
        var mod = (high % radix) * BIT32 + low;
        high = Math.floor(high / radix);
        low = Math.floor(mod / radix);
        str = (mod % radix).toString(radix) + str;
        if (!high && !low) break;
      }
      if (sign) {
        str = "-" + str;
      }
      return str;
    }

    function writeInt32(buffer, offset, value) {
      buffer[offset + pos3] = value & 255;
      value = value >> 8;
      buffer[offset + pos2] = value & 255;
      value = value >> 8;
      buffer[offset + pos1] = value & 255;
      value = value >> 8;
      buffer[offset + pos0] = value & 255;
    }

    function readInt32(buffer, offset) {
      return (buffer[offset + pos0] * BIT24) +
        (buffer[offset + pos1] << 16) +
        (buffer[offset + pos2] << 8) +
        buffer[offset + pos3];
    }
  }

  function toArray(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = null; // Array
    if (raw !== false && offset === 0 && buffer.length === 8 && isArray(buffer)) return buffer;
    return newArray(buffer, offset);
  }

  function toBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = BUFFER;
    if (raw !== false && offset === 0 && buffer.length === 8 && Buffer.isBuffer(buffer)) return buffer;
    var dest = new BUFFER(8);
    fromArray(dest, 0, buffer, offset);
    return dest;
  }

  function toArrayBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    var arrbuf = buffer.buffer;
    storage = UINT8ARRAY;
    if (raw !== false && offset === 0 && (arrbuf instanceof ARRAYBUFFER) && arrbuf.byteLength === 8) return arrbuf;
    var dest = new UINT8ARRAY(8);
    fromArray(dest, 0, buffer, offset);
    return dest.buffer;
  }

  function isValidBuffer(buffer, offset) {
    var len = buffer && buffer.length;
    offset |= 0;
    return len && (offset + 8 <= len) && ("string" !== typeof buffer[offset]);
  }

  function fromArray(destbuf, destoff, srcbuf, srcoff) {
    destoff |= 0;
    srcoff |= 0;
    for (var i = 0; i < 8; i++) {
      destbuf[destoff++] = srcbuf[srcoff++] & 255;
    }
  }

  function newArray(buffer, offset) {
    return Array.prototype.slice.call(buffer, offset, offset + 8);
  }

  function fromPositiveBE(buffer, offset, value) {
    var pos = offset + 8;
    while (pos > offset) {
      buffer[--pos] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeBE(buffer, offset, value) {
    var pos = offset + 8;
    value++;
    while (pos > offset) {
      buffer[--pos] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  function fromPositiveLE(buffer, offset, value) {
    var end = offset + 8;
    while (offset < end) {
      buffer[offset++] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeLE(buffer, offset, value) {
    var end = offset + 8;
    value++;
    while (offset < end) {
      buffer[offset++] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  // https://github.com/retrofox/is-array
  function _isArray(val) {
    return !!val && "[object Array]" == Object.prototype.toString.call(val);
  }

}(typeof exports === 'object' && typeof exports.nodeName !== 'string' ? exports : (this || {}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28).Buffer))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// browser.js

exports.encode = __webpack_require__(24).encode;
exports.decode = __webpack_require__(22).decode;

exports.Encoder = __webpack_require__(51).Encoder;
exports.Decoder = __webpack_require__(50).Decoder;

exports.createCodec = __webpack_require__(54).createCodec;
exports.codec = __webpack_require__(49).codec;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// bufferish-proto.js

/* jshint eqnull:true */

var BufferLite = __webpack_require__(45);

exports.copy = copy;
exports.slice = slice;
exports.toString = toString;
exports.write = gen("write");

var Bufferish = __webpack_require__(0);
var Buffer = Bufferish.global;

var isBufferShim = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var brokenTypedArray = isBufferShim && !Buffer.TYPED_ARRAY_SUPPORT;

/**
 * @param target {Buffer|Uint8Array|Array}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function copy(target, targetStart, start, end) {
  var thisIsBuffer = Bufferish.isBuffer(this);
  var targetIsBuffer = Bufferish.isBuffer(target);
  if (thisIsBuffer && targetIsBuffer) {
    // Buffer to Buffer
    return this.copy(target, targetStart, start, end);
  } else if (!brokenTypedArray && !thisIsBuffer && !targetIsBuffer &&
    Bufferish.isView(this) && Bufferish.isView(target)) {
    // Uint8Array to Uint8Array (except for minor some browsers)
    var buffer = (start || end != null) ? slice.call(this, start, end) : this;
    target.set(buffer, targetStart);
    return buffer.length;
  } else {
    // other cases
    return BufferLite.copy.call(this, target, targetStart, start, end);
  }
}

/**
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function slice(start, end) {
  // for Buffer, Uint8Array (except for minor some browsers) and Array
  var f = this.slice || (!brokenTypedArray && this.subarray);
  if (f) return f.call(this, start, end);

  // Uint8Array (for minor some browsers)
  var target = Bufferish.alloc.call(this, end - start);
  copy.call(this, target, 0, start, end);
  return target;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var f = (!isBufferShim && Bufferish.isBuffer(this)) ? this.toString : BufferLite.toString;
  return f.apply(this, arguments);
}

/**
 * @private
 */

function gen(method) {
  return wrap;

  function wrap() {
    var f = this[method] || BufferLite[method];
    return f.apply(this, arguments);
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// ext-buffer.js

exports.ExtBuffer = ExtBuffer;

var Bufferish = __webpack_require__(0);

function ExtBuffer(buffer, type) {
  if (!(this instanceof ExtBuffer)) return new ExtBuffer(buffer, type);
  this.buffer = Bufferish.from(buffer);
  this.type = type;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// read-core.js

var ExtBuffer = __webpack_require__(11).ExtBuffer;
var ExtUnpacker = __webpack_require__(53);
var readUint8 = __webpack_require__(26).readUint8;
var ReadToken = __webpack_require__(55);
var CodecBase = __webpack_require__(3);

CodecBase.install({
  addExtUnpacker: addExtUnpacker,
  getExtUnpacker: getExtUnpacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getDecoder(options) {
  var readToken = ReadToken.getReadToken(options);
  return decode;

  function decode(decoder) {
    var type = readUint8(decoder);
    var func = readToken[type];
    if (!func) throw new Error("Invalid type: " + (type ? ("0x" + type.toString(16)) : type));
    return func(decoder);
  }
}

function init() {
  var options = this.options;
  this.decode = getDecoder(options);

  if (options && options.preset) {
    ExtUnpacker.setExtUnpackers(this);
  }

  return this;
}

function addExtUnpacker(etype, unpacker) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  unpackers[etype] = CodecBase.filter(unpacker);
}

function getExtUnpacker(type) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  return unpackers[type] || extUnpacker;

  function extUnpacker(buffer) {
    return new ExtBuffer(buffer, type);
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// write-core.js

var ExtBuffer = __webpack_require__(11).ExtBuffer;
var ExtPacker = __webpack_require__(52);
var WriteType = __webpack_require__(57);
var CodecBase = __webpack_require__(3);

CodecBase.install({
  addExtPacker: addExtPacker,
  getExtPacker: getExtPacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getEncoder(options) {
  var writeType = WriteType.getWriteType(options);
  return encode;

  function encode(encoder, value) {
    var func = writeType[typeof value];
    if (!func) throw new Error("Unsupported type \"" + (typeof value) + "\": " + value);
    func(encoder, value);
  }
}

function init() {
  var options = this.options;
  this.encode = getEncoder(options);

  if (options && options.preset) {
    ExtPacker.setExtPackers(this);
  }

  return this;
}

function addExtPacker(etype, Class, packer) {
  packer = CodecBase.filter(packer);
  var name = Class.name;
  if (name && name !== "Object") {
    var packers = this.extPackers || (this.extPackers = {});
    packers[name] = extPacker;
  } else {
    // fallback for IE
    var list = this.extEncoderList || (this.extEncoderList = []);
    list.unshift([Class, extPacker]);
  }

  function extPacker(value) {
    if (packer) value = packer(value);
    return new ExtBuffer(value, etype);
  }
}

function getExtPacker(value) {
  var packers = this.extPackers || (this.extPackers = {});
  var c = value.constructor;
  var e = c && c.name && packers[c.name];
  if (e) return e;

  // fallback for IE
  var list = this.extEncoderList || (this.extEncoderList = []);
  var len = list.length;
  for (var i = 0; i < len; i++) {
    var pair = list[i];
    if (c === pair[0]) return pair[1];
  }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

module.exports = __webpack_require__(58);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SlotList_1 = __webpack_require__(32);
var Slot_1 = __webpack_require__(4);
/**
 * Allows the valueClasses to be set in MXML, e.g.
 * <signals:Signal id="nameChanged">{[String, uint]}</signals:Signal>
 */
/*[DefaultProperty("valueClasses")]*/
/**
 * Signal dispatches events to multiple listeners.
 * It is inspired by C# events and delegates, and by
 * <a target="_top" href="http://en.wikipedia.org/wiki/Signals_and_slots">signals and slots</a>
 * in Qt.
 * A Signal adds event dispatching functionality through composition and interfaces,
 * rather than inheriting from a dispatcher.
 * <br/><br/>
 * Project home: <a target="_top" href="http://github.com/robertpenner/as3-signals/">http://github.com/robertpenner/as3-signals/</a>
 */
var OnceSignal = (function () {
    /**
     * Creates a Signal instance to dispatch value objects.
     * @param    valueClasses Any number of class references that enable type checks in dispatch().
     * For example, new Signal(String, uint)
     * would allow: signal.dispatch("the Answer", 42)
     * but not: signal.dispatch(true, 42.5)
     * nor: signal.dispatch()
     *
     * NOTE: In AS3, subclasses cannot call super.apply(null, valueClasses),
     * but this constructor has logic to support super(valueClasses).
     */
    function OnceSignal() {
        var valueClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueClasses[_i] = arguments[_i];
        }
        this.slots = SlotList_1.SlotList.NIL;
        // Cannot use super.apply(null, valueClasses), so allow the subclass to call super(valueClasses).
        this.valueClasses = (valueClasses.length == 1 && valueClasses[0] instanceof Array) ? valueClasses[0] : valueClasses;
    }
    Object.defineProperty(OnceSignal.prototype, "valueClasses", {
        /**
         * @inheritDoc
         * @throws ArgumentError <code>ArgumentError</code>: Invalid valueClasses argument: item at index should be a Class but was not.
         */
        /*[ArrayElementType("Class")]*/
        get: function () {
            return this._valueClasses;
        },
        set: function (value) {
            // Clone so the Array cannot be affected from outside.
            this._valueClasses = value ? value.slice() : [];
            for (var i = this._valueClasses.length; i--;) {
                if (!(this._valueClasses[i] instanceof Object)) {
                    throw new Error('Invalid valueClasses argument: ' +
                        'item at index ' + i + ' should be a Class but was:<' +
                        this._valueClasses[i] + '>.' + this._valueClasses[i]); //@CHANGED - temp replacement for getQualifiedClassByName()
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnceSignal.prototype, "numListeners", {
        /** @inheritDoc */
        get: function () {
            return this.slots.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     * @throws flash.errors.IllegalOperationError <code>IllegalOperationError</code>: You cannot addOnce() then add() the same listener without removing the relationship first.
     * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>.
     */
    OnceSignal.prototype.addOnce = function (listener) {
        return this.registerListener(listener, true);
    };
    /** @inheritDoc */
    OnceSignal.prototype.remove = function (listener) {
        var slot = this.slots.find(listener);
        if (!slot)
            return null;
        this.slots = this.slots.filterNot(listener);
        return slot;
    };
    /** @inheritDoc */
    OnceSignal.prototype.removeAll = function () {
        this.slots = SlotList_1.SlotList.NIL;
    };
    /**
     * @inheritDoc
     * @throws ArgumentError <code>ArgumentError</code>: Incorrect number of arguments.
     * @throws ArgumentError <code>ArgumentError</code>: Value object is not an instance of the appropriate valueClasses Class.
     */
    OnceSignal.prototype.dispatch = function () {
        var valueObjects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueObjects[_i] = arguments[_i];
        }
        // If valueClasses is empty, value objects are not type-checked.
        var numValueClasses = this._valueClasses.length;
        var numValueObjects = valueObjects.length;
        // Cannot dispatch fewer objects than declared classes.
        if (numValueObjects < numValueClasses) {
            throw new Error('Incorrect number of arguments. ' +
                'Expected at least ' + numValueClasses + ' but received ' +
                numValueObjects + '.');
        }
        // Cannot dispatch differently typed objects than declared classes.
        for (var i = 0; i < numValueClasses; i++) {
            // Optimized for the optimistic case that values are correct.
            if (valueObjects[i] === null ||
                (valueObjects[i] instanceof this._valueClasses[i] || valueObjects[i].constructor === this._valueClasses[i])) {
                continue;
            }
            throw new Error('Value object <' + valueObjects[i]
                + '> is not an instance of <' + this._valueClasses[i] + '>.');
        }
        // Broadcast to listeners.
        var slotsToProcess = this.slots;
        if (slotsToProcess.nonEmpty) {
            while (slotsToProcess.nonEmpty) {
                slotsToProcess.head.execute(valueObjects);
                slotsToProcess = slotsToProcess.tail;
            }
        }
    };
    OnceSignal.prototype.registerListener = function (listener, once) {
        if (once === void 0) { once = false; }
        if (this.registrationPossible(listener, once)) {
            var newSlot = new Slot_1.Slot(listener, this, once);
            this.slots = this.slots.prepend(newSlot);
            return newSlot;
        }
        return this.slots.find(listener);
    };
    OnceSignal.prototype.registrationPossible = function (listener, once) {
        if (!this.slots.nonEmpty)
            return true;
        var existingSlot = this.slots.find(listener);
        if (!existingSlot)
            return true;
        if (existingSlot.once != once) {
            // If the listener was previously added, definitely don't add it again.
            // But throw an exception if their once values differ.
            throw new Error('You cannot addOnce() then add() the same listener without removing the relationship first.');
        }
        return false; // Listener was already registered.
    };
    return OnceSignal;
}());
exports.OnceSignal = OnceSignal;
//# sourceMappingURL=OnceSignal.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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
var signals_js_1 = __webpack_require__(29);
var Clock = __webpack_require__(39);
var delta_listener_1 = __webpack_require__(42);
var msgpack = __webpack_require__(9);
var fossilDelta = __webpack_require__(43);
var Protocol_1 = __webpack_require__(5);
var Room = (function (_super) {
    __extends(Room, _super);
    function Room(name) {
        var _this = _super.call(this, {}) || this;
        _this.clock = new Clock(); // experimental
        _this.remoteClock = new Clock(); // experimental
        // Public signals
        _this.onJoin = new signals_js_1.Signal();
        _this.onUpdate = new signals_js_1.Signal();
        _this.onData = new signals_js_1.Signal();
        _this.onError = new signals_js_1.Signal();
        _this.onLeave = new signals_js_1.Signal();
        _this.id = null;
        _this.name = name;
        _this.onLeave.add(function () { return _this.removeAllListeners(); });
        return _this;
    }
    Room.prototype.connect = function (connection) {
        var _this = this;
        this.connection = connection;
        this.connection.onmessage = this.onMessageCallback.bind(this);
        this.connection.onclose = function (e) { return _this.onLeave.dispatch(); };
    };
    Room.prototype.onMessageCallback = function (event) {
        var message = msgpack.decode(new Uint8Array(event.data));
        var code = message[0];
        if (code == Protocol_1.Protocol.JOIN_ROOM) {
            this.sessionId = message[1];
            this.onJoin.dispatch();
        }
        else if (code == Protocol_1.Protocol.JOIN_ERROR) {
            this.onError.dispatch(message[2]);
        }
        else if (code == Protocol_1.Protocol.ROOM_STATE) {
            var state = message[2];
            var remoteCurrentTime = message[3];
            var remoteElapsedTime = message[4];
            this.setState(state, remoteCurrentTime, remoteElapsedTime);
        }
        else if (code == Protocol_1.Protocol.ROOM_STATE_PATCH) {
            this.patch(message[2]);
        }
        else if (code == Protocol_1.Protocol.ROOM_DATA) {
            this.onData.dispatch(message[2]);
        }
        else if (code == Protocol_1.Protocol.LEAVE_ROOM) {
            this.leave();
        }
    };
    Room.prototype.setState = function (state, remoteCurrentTime, remoteElapsedTime) {
        this.set(state);
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
        this.set(msgpack.decode(this._previousState));
        this.onUpdate.dispatch(this.data);
    };
    Room.prototype.leave = function () {
        if (this.id) {
            this.connection.close();
        }
    };
    Room.prototype.send = function (data) {
        this.connection.send([Protocol_1.Protocol.ROOM_DATA, this.id, data]);
    };
    Room.prototype.removeAllListeners = function () {
        _super.prototype.removeAllListeners.call(this);
        this.onJoin.removeAll();
        this.onUpdate.removeAll();
        this.onData.removeAll();
        this.onError.removeAll();
        this.onLeave.removeAll();
    };
    return Room;
}(delta_listener_1.DeltaContainer));
exports.Room = Room;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = __webpack_require__(6);
var precond = __webpack_require__(14);
var util = __webpack_require__(1);

// A class to hold the state of a backoff operation. Accepts a backoff strategy
// to generate the backoff delays.
function Backoff(backoffStrategy) {
    events.EventEmitter.call(this);

    this.backoffStrategy_ = backoffStrategy;
    this.maxNumberOfRetry_ = -1;
    this.backoffNumber_ = 0;
    this.backoffDelay_ = 0;
    this.timeoutID_ = -1;

    this.handlers = {
        backoff: this.onBackoff_.bind(this)
    };
}
util.inherits(Backoff, events.EventEmitter);

// Sets a limit, greater than 0, on the maximum number of backoffs. A 'fail'
// event will be emitted when the limit is reached.
Backoff.prototype.failAfter = function(maxNumberOfRetry) {
    precond.checkArgument(maxNumberOfRetry > 0,
        'Expected a maximum number of retry greater than 0 but got %s.',
        maxNumberOfRetry);

    this.maxNumberOfRetry_ = maxNumberOfRetry;
};

// Starts a backoff operation. Accepts an optional parameter to let the
// listeners know why the backoff operation was started.
Backoff.prototype.backoff = function(err) {
    precond.checkState(this.timeoutID_ === -1, 'Backoff in progress.');

    if (this.backoffNumber_ === this.maxNumberOfRetry_) {
        this.emit('fail', err);
        this.reset();
    } else {
        this.backoffDelay_ = this.backoffStrategy_.next();
        this.timeoutID_ = setTimeout(this.handlers.backoff, this.backoffDelay_);
        this.emit('backoff', this.backoffNumber_, this.backoffDelay_, err);
    }
};

// Handles the backoff timeout completion.
Backoff.prototype.onBackoff_ = function() {
    this.timeoutID_ = -1;
    this.emit('ready', this.backoffNumber_, this.backoffDelay_);
    this.backoffNumber_++;
};

// Stops any backoff operation and resets the backoff delay to its inital value.
Backoff.prototype.reset = function() {
    this.backoffNumber_ = 0;
    this.backoffStrategy_.reset();
    clearTimeout(this.timeoutID_);
    this.timeoutID_ = -1;
};

module.exports = Backoff;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var util = __webpack_require__(1);

var BackoffStrategy = __webpack_require__(19);

// Fibonacci backoff strategy.
function FibonacciBackoffStrategy(options) {
    BackoffStrategy.call(this, options);
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
}
util.inherits(FibonacciBackoffStrategy, BackoffStrategy);

FibonacciBackoffStrategy.prototype.next_ = function() {
    var backoffDelay = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
    this.nextBackoffDelay_ += this.backoffDelay_;
    this.backoffDelay_ = backoffDelay;
    return backoffDelay;
};

FibonacciBackoffStrategy.prototype.reset_ = function() {
    this.nextBackoffDelay_ = this.getInitialDelay();
    this.backoffDelay_ = 0;
};

module.exports = FibonacciBackoffStrategy;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = __webpack_require__(6);
var util = __webpack_require__(1);

function isDef(value) {
    return value !== undefined && value !== null;
}

// Abstract class defining the skeleton for the backoff strategies. Accepts an
// object holding the options for the backoff strategy:
//
//  * `randomisationFactor`: The randomisation factor which must be between 0
//     and 1 where 1 equates to a randomization factor of 100% and 0 to no
//     randomization.
//  * `initialDelay`: The backoff initial delay in milliseconds.
//  * `maxDelay`: The backoff maximal delay in milliseconds.
function BackoffStrategy(options) {
    options = options || {};

    if (isDef(options.initialDelay) && options.initialDelay < 1) {
        throw new Error('The initial timeout must be greater than 0.');
    } else if (isDef(options.maxDelay) && options.maxDelay < 1) {
        throw new Error('The maximal timeout must be greater than 0.');
    }

    this.initialDelay_ = options.initialDelay || 100;
    this.maxDelay_ = options.maxDelay || 10000;

    if (this.maxDelay_ <= this.initialDelay_) {
        throw new Error('The maximal backoff delay must be ' +
                        'greater than the initial backoff delay.');
    }

    if (isDef(options.randomisationFactor) &&
        (options.randomisationFactor < 0 || options.randomisationFactor > 1)) {
        throw new Error('The randomisation factor must be between 0 and 1.');
    }

    this.randomisationFactor_ = options.randomisationFactor || 0;
}

// Gets the maximal backoff delay.
BackoffStrategy.prototype.getMaxDelay = function() {
    return this.maxDelay_;
};

// Gets the initial backoff delay.
BackoffStrategy.prototype.getInitialDelay = function() {
    return this.initialDelay_;
};

// Template method that computes and returns the next backoff delay in
// milliseconds.
BackoffStrategy.prototype.next = function() {
    var backoffDelay = this.next_();
    var randomisationMultiple = 1 + Math.random() * this.randomisationFactor_;
    var randomizedDelay = Math.round(backoffDelay * randomisationMultiple);
    return randomizedDelay;
};

// Computes and returns the next backoff delay. Intended to be overridden by
// subclasses.
BackoffStrategy.prototype.next_ = function() {
    throw new Error('BackoffStrategy.next_() unimplemented.');
};

// Template method that resets the backoff delay to its initial value.
BackoffStrategy.prototype.reset = function() {
    this.reset_();
};

// Resets the backoff delay to its initial value. Intended to be overridden by
// subclasses.
BackoffStrategy.prototype.reset_ = function() {
    throw new Error('BackoffStrategy.reset_() unimplemented.');
};

module.exports = BackoffStrategy;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */

function EventLite() {
  if (!(this instanceof EventLite)) return new EventLite();
}

(function(EventLite) {
  // export the class for node.js
  if (true) module.exports = EventLite;

  // property name to hold listeners
  var LISTENERS = "listeners";

  // methods to export
  var methods = {
    on: on,
    once: once,
    off: off,
    emit: emit
  };

  // mixin to self
  mixin(EventLite.prototype);

  // export mixin function
  EventLite.mixin = mixin;

  /**
   * Import on(), once(), off() and emit() methods into target object.
   *
   * @function EventLite.mixin
   * @param target {Prototype}
   */

  function mixin(target) {
    for (var key in methods) {
      target[key] = methods[key];
    }
    return target;
  }

  /**
   * Add an event listener.
   *
   * @function EventLite.prototype.on
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function on(type, func) {
    getListeners(this, type).push(func);
    return this;
  }

  /**
   * Add one-time event listener.
   *
   * @function EventLite.prototype.once
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function once(type, func) {
    var that = this;
    wrap.originalListener = func;
    getListeners(that, type).push(wrap);
    return that;

    function wrap() {
      off.call(that, type, wrap);
      func.apply(this, arguments);
    }
  }

  /**
   * Remove an event listener.
   *
   * @function EventLite.prototype.off
   * @param [type] {string}
   * @param [func] {Function}
   * @returns {EventLite} Self for method chaining
   */

  function off(type, func) {
    var that = this;
    var listners;
    if (!arguments.length) {
      delete that[LISTENERS];
    } else if (!func) {
      listners = that[LISTENERS];
      if (listners) {
        delete listners[type];
        if (!Object.keys(listners).length) return off.call(that);
      }
    } else {
      listners = getListeners(that, type, true);
      if (listners) {
        listners = listners.filter(ne);
        if (!listners.length) return off.call(that, type);
        that[LISTENERS][type] = listners;
      }
    }
    return that;

    function ne(test) {
      return test !== func && test.originalListener !== func;
    }
  }

  /**
   * Dispatch (trigger) an event.
   *
   * @function EventLite.prototype.emit
   * @param type {string}
   * @param [value] {*}
   * @returns {boolean} True when a listener received the event
   */

  function emit(type, value) {
    var that = this;
    var listeners = getListeners(that, type, true);
    if (!listeners) return false;
    var arglen = arguments.length;
    if (arglen === 1) {
      listeners.forEach(zeroarg);
    } else if (arglen === 2) {
      listeners.forEach(onearg);
    } else {
      var args = Array.prototype.slice.call(arguments, 1);
      listeners.forEach(moreargs);
    }
    return !!listeners.length;

    function zeroarg(func) {
      func.call(that);
    }

    function onearg(func) {
      func.call(that, value);
    }

    function moreargs(func) {
      func.apply(that, args);
    }
  }

  /**
   * @ignore
   */

  function getListeners(that, type, readonly) {
    if (readonly && !that[LISTENERS]) return;
    var listeners = that[LISTENERS] || (that[LISTENERS] = {});
    return listeners[type] || (listeners[type] = []);
  }

})(EventLite);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// decode-buffer.js

exports.DecodeBuffer = DecodeBuffer;

var preset = __webpack_require__(12).preset;

var FlexDecoder = __webpack_require__(25).FlexDecoder;

FlexDecoder.mixin(DecodeBuffer.prototype);

function DecodeBuffer(options) {
  if (!(this instanceof DecodeBuffer)) return new DecodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

DecodeBuffer.prototype.codec = preset;

DecodeBuffer.prototype.fetch = function() {
  return this.codec.decode(this);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// decode.js

exports.decode = decode;

var DecodeBuffer = __webpack_require__(21).DecodeBuffer;

function decode(input, options) {
  var decoder = new DecodeBuffer(options);
  decoder.write(input);
  return decoder.read();
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// encode-buffer.js

exports.EncodeBuffer = EncodeBuffer;

var preset = __webpack_require__(13).preset;

var FlexEncoder = __webpack_require__(25).FlexEncoder;

FlexEncoder.mixin(EncodeBuffer.prototype);

function EncodeBuffer(options) {
  if (!(this instanceof EncodeBuffer)) return new EncodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

EncodeBuffer.prototype.codec = preset;

EncodeBuffer.prototype.write = function(input) {
  this.codec.encode(this, input);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// encode.js

exports.encode = encode;

var EncodeBuffer = __webpack_require__(23).EncodeBuffer;

function encode(input, options) {
  var encoder = new EncodeBuffer(options);
  encoder.write(input);
  return encoder.read();
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// flex-buffer.js

exports.FlexDecoder = FlexDecoder;
exports.FlexEncoder = FlexEncoder;

var Bufferish = __webpack_require__(0);

var MIN_BUFFER_SIZE = 2048;
var MAX_BUFFER_SIZE = 65536;
var BUFFER_SHORTAGE = "BUFFER_SHORTAGE";

function FlexDecoder() {
  if (!(this instanceof FlexDecoder)) return new FlexDecoder();
}

function FlexEncoder() {
  if (!(this instanceof FlexEncoder)) return new FlexEncoder();
}

FlexDecoder.mixin = mixinFactory(getDecoderMethods());
FlexDecoder.mixin(FlexDecoder.prototype);

FlexEncoder.mixin = mixinFactory(getEncoderMethods());
FlexEncoder.mixin(FlexEncoder.prototype);

function getDecoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    offset: 0
  };

  function write(chunk) {
    var prev = this.offset ? Bufferish.prototype.slice.call(this.buffer, this.offset) : this.buffer;
    this.buffer = prev ? (chunk ? this.bufferish.concat([prev, chunk]) : prev) : chunk;
    this.offset = 0;
  }

  function flush() {
    while (this.offset < this.buffer.length) {
      var start = this.offset;
      var value;
      try {
        value = this.fetch();
      } catch (e) {
        if (e && e.message != BUFFER_SHORTAGE) throw e;
        // rollback
        this.offset = start;
        break;
      }
      this.push(value);
    }
  }

  function reserve(length) {
    var start = this.offset;
    var end = start + length;
    if (end > this.buffer.length) throw new Error(BUFFER_SHORTAGE);
    this.offset = end;
    return start;
  }
}

function getEncoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    send: send,
    maxBufferSize: MAX_BUFFER_SIZE,
    minBufferSize: MIN_BUFFER_SIZE,
    offset: 0,
    start: 0
  };

  function fetch() {
    var start = this.start;
    if (start < this.offset) {
      var end = this.start = this.offset;
      return Bufferish.prototype.slice.call(this.buffer, start, end);
    }
  }

  function flush() {
    while (this.start < this.offset) {
      var value = this.fetch();
      if (value) this.push(value);
    }
  }

  function pull() {
    var buffers = this.buffers || (this.buffers = []);
    var chunk = buffers.length > 1 ? this.bufferish.concat(buffers) : buffers[0];
    buffers.length = 0; // buffer exhausted
    return chunk;
  }

  function reserve(length) {
    var req = length | 0;

    if (this.buffer) {
      var size = this.buffer.length;
      var start = this.offset | 0;
      var end = start + req;

      // is it long enough?
      if (end < size) {
        this.offset = end;
        return start;
      }

      // flush current buffer
      this.flush();

      // resize it to 2x current length
      length = Math.max(length, Math.min(size * 2, this.maxBufferSize));
    }

    // minimum buffer size
    length = Math.max(length, this.minBufferSize);

    // allocate new buffer
    this.buffer = this.bufferish.alloc(length);
    this.start = 0;
    this.offset = req;
    return 0;
  }

  function send(buffer) {
    var length = buffer.length;
    if (length > this.minBufferSize) {
      this.flush();
      this.push(buffer);
    } else {
      var offset = this.reserve(length);
      Bufferish.prototype.copy.call(buffer, this.buffer, offset);
    }
  }
}

// common methods

function write() {
  throw new Error("method not implemented: write()");
}

function fetch() {
  throw new Error("method not implemented: fetch()");
}

function read() {
  var length = this.buffers && this.buffers.length;

  // fetch the first result
  if (!length) return this.fetch();

  // flush current buffer
  this.flush();

  // read from the results
  return this.pull();
}

function push(chunk) {
  var buffers = this.buffers || (this.buffers = []);
  buffers.push(chunk);
}

function pull() {
  var buffers = this.buffers || (this.buffers = []);
  return buffers.shift();
}

function mixinFactory(source) {
  return mixin;

  function mixin(target) {
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  }
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// read-format.js

var ieee754 = __webpack_require__(7);
var Int64Buffer = __webpack_require__(8);
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

exports.getReadFormat = getReadFormat;
exports.readUint8 = uint8;

var Bufferish = __webpack_require__(0);
var BufferProto = __webpack_require__(10);

var HAS_MAP = ("undefined" !== typeof Map);
var NO_ASSERT = true;

function getReadFormat(options) {
  var binarraybuffer = Bufferish.hasArrayBuffer && options && options.binarraybuffer;
  var int64 = options && options.int64;
  var usemap = HAS_MAP && options && options.usemap;

  var readFormat = {
    map: (usemap ? map_to_map : map_to_obj),
    array: array,
    str: str,
    bin: (binarraybuffer ? bin_arraybuffer : bin_buffer),
    ext: ext,
    uint8: uint8,
    uint16: uint16,
    uint32: uint32,
    uint64: read(8, int64 ? readUInt64BE_int64 : readUInt64BE),
    int8: int8,
    int16: int16,
    int32: int32,
    int64: read(8, int64 ? readInt64BE_int64 : readInt64BE),
    float32: read(4, readFloatBE),
    float64: read(8, readDoubleBE)
  };

  return readFormat;
}

function map_to_obj(decoder, len) {
  var value = {};
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value[k[i]] = v[i];
  }
  return value;
}

function map_to_map(decoder, len) {
  var value = new Map();
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value.set(k[i], v[i]);
  }
  return value;
}

function array(decoder, len) {
  var value = new Array(len);
  var decode = decoder.codec.decode;
  for (var i = 0; i < len; i++) {
    value[i] = decode(decoder);
  }
  return value;
}

function str(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  return BufferProto.toString.call(decoder.buffer, "utf-8", start, end);
}

function bin_buffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.from(buf);
}

function bin_arraybuffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.Uint8Array.from(buf).buffer;
}

function ext(decoder, len) {
  var start = decoder.reserve(len+1);
  var type = decoder.buffer[start++];
  var end = start + len;
  var unpack = decoder.codec.getExtUnpacker(type);
  if (!unpack) throw new Error("Invalid ext type: " + (type ? ("0x" + type.toString(16)) : type));
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return unpack(buf);
}

function uint8(decoder) {
  var start = decoder.reserve(1);
  return decoder.buffer[start];
}

function int8(decoder) {
  var start = decoder.reserve(1);
  var value = decoder.buffer[start];
  return (value & 0x80) ? value - 0x100 : value;
}

function uint16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  return (buffer[start++] << 8) | buffer[start];
}

function int16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  var value = (buffer[start++] << 8) | buffer[start];
  return (value & 0x8000) ? value - 0x10000 : value;
}

function uint32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] * 16777216) + (buffer[start++] << 16) + (buffer[start++] << 8) + buffer[start];
}

function int32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] << 24) | (buffer[start++] << 16) | (buffer[start++] << 8) | buffer[start];
}

function read(len, method) {
  return function(decoder) {
    var start = decoder.reserve(len);
    return method.call(decoder.buffer, start, NO_ASSERT);
  };
}

function readUInt64BE(start) {
  return new Uint64BE(this, start).toNumber();
}

function readInt64BE(start) {
  return new Int64BE(this, start).toNumber();
}

function readUInt64BE_int64(start) {
  return new Uint64BE(this, start);
}

function readInt64BE_int64(start) {
  return new Int64BE(this, start);
}

function readFloatBE(start) {
  return ieee754.read(this, start, false, 23, 4);
}

function readDoubleBE(start) {
  return ieee754.read(this, start, false, 52, 8);
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// write-unit8.js

var constant = exports.uint8 = new Array(256);

for (var i = 0x00; i <= 0xFF; i++) {
  constant[i] = write0(i);
}

function write0(type) {
  return function(encoder) {
    var offset = encoder.reserve(1);
    encoder.buffer[offset] = type;
  };
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(38)
var ieee754 = __webpack_require__(7)
var isArray = __webpack_require__(2)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DeluxeSignal_1 = __webpack_require__(61);
exports.DeluxeSignal = DeluxeSignal_1.DeluxeSignal;
var GenericEvent_1 = __webpack_require__(68);
exports.GenericEvent = GenericEvent_1.GenericEvent;
var IOnceSignal_1 = __webpack_require__(62);
exports.IOnceSignal = IOnceSignal_1.IOnceSignal;
var IPrioritySignal_1 = __webpack_require__(63);
exports.IPrioritySignal = IPrioritySignal_1.IPrioritySignal;
var ISignal_1 = __webpack_require__(64);
exports.ISignal = ISignal_1.ISignal;
var ISlot_1 = __webpack_require__(65);
exports.ISlot = ISlot_1.ISlot;
var MonoSignal_1 = __webpack_require__(66);
exports.MonoSignal = MonoSignal_1.MonoSignal;
var OnceSignal_1 = __webpack_require__(15);
exports.OnceSignal = OnceSignal_1.OnceSignal;
var PrioritySignal_1 = __webpack_require__(30);
exports.PrioritySignal = PrioritySignal_1.PrioritySignal;
var Promise_1 = __webpack_require__(67);
exports.Promise = Promise_1.Promise;
var Signal_1 = __webpack_require__(31);
exports.Signal = Signal_1.Signal;
var Slot_1 = __webpack_require__(4);
exports.Slot = Slot_1.Slot;
var SlotList_1 = __webpack_require__(32);
exports.SlotList = SlotList_1.SlotList;
//# sourceMappingURL=index.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Signal_1 = __webpack_require__(31);
var Slot_1 = __webpack_require__(4);
var PrioritySignal = (function (_super) {
    __extends(PrioritySignal, _super);
    function PrioritySignal() {
        var valueClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueClasses[_i] = arguments[_i];
        }
        var _this;
        // Cannot use super.apply(null, valueClasses), so allow the subclass to call super(valueClasses).
        valueClasses = (valueClasses.length == 1 && valueClasses[0] instanceof Array) ? valueClasses[0] : valueClasses;
        _this = _super.call(this, valueClasses) || this;
        return _this;
    }
    /**
     * @inheritDoc
     * @throws flash.errors.IllegalOperationError <code>IllegalOperationError</code>: You cannot addOnce() then add() the same listener without removing the relationship first.
     * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>.
     */
    PrioritySignal.prototype.addWithPriority = function (listener, priority) {
        if (priority === void 0) { priority = 0; }
        return this.registerListenerWithPriority(listener, false, priority);
    };
    /**
     * @inheritDoc
     * @throws flash.errors.IllegalOperationError <code>IllegalOperationError</code>: You cannot addOnce() then add() the same listener without removing the relationship first.
     * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>.
     */
    PrioritySignal.prototype.addOnceWithPriority = function (listener, priority) {
        if (priority === void 0) { priority = 0; }
        return this.registerListenerWithPriority(listener, true, priority);
    };
    /*override*/
    PrioritySignal.prototype.registerListener = function (listener, once) {
        if (once === void 0) { once = false; }
        return this.registerListenerWithPriority(listener, once);
    };
    PrioritySignal.prototype.registerListenerWithPriority = function (listener, once, priority) {
        if (once === void 0) { once = false; }
        if (priority === void 0) { priority = 0; }
        if (this.registrationPossible(listener, once)) {
            var slot = new Slot_1.Slot(listener, this, once, priority);
            this.slots = this.slots.insertWithPriority(slot);
            return slot;
        }
        return this.slots.find(listener);
    };
    return PrioritySignal;
}(Signal_1.Signal));
exports.PrioritySignal = PrioritySignal;
//# sourceMappingURL=PrioritySignal.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OnceSignal_1 = __webpack_require__(15);
/**
 * Allows the valueClasses to be set in MXML, e.g.
 * <signals:Signal id="nameChanged">{[String, uint]}</signals:Signal>
 */
/*[DefaultProperty("valueClasses")]*/
/**
 * Signal dispatches events to multiple listeners.
 * It is inspired by C# events and delegates, and by
 * <a target="_top" href="http://en.wikipedia.org/wiki/Signals_and_slots">signals and slots</a>
 * in Qt.
 * A Signal adds event dispatching functionality through composition and interfaces,
 * rather than inheriting from a dispatcher.
 * <br/><br/>
 * Project home: <a target="_top" href="http://github.com/robertpenner/as3-signals/">http://github.com/robertpenner/as3-signals/</a>
 */
var Signal = (function (_super) {
    __extends(Signal, _super);
    /**
     * Creates a Signal instance to dispatch value objects.
     * @param    valueClasses Any number of class references that enable type checks in dispatch().
     * For example, new Signal(String, uint)
     * would allow: signal.dispatch("the Answer", 42)
     * but not: signal.dispatch(true, 42.5)
     * nor: signal.dispatch()
     *
     * NOTE: In AS3, subclasses cannot call super.apply(null, valueClasses),
     * but this constructor has logic to support super(valueClasses).
     */
    function Signal() {
        var valueClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueClasses[_i] = arguments[_i];
        }
        var _this;
        // Cannot use super.apply(null, valueClasses), so allow the subclass to call super(valueClasses).
        valueClasses = (valueClasses.length == 1 && valueClasses[0] instanceof Array) ? valueClasses[0] : valueClasses;
        _this = _super.call(this, valueClasses) || this;
        return _this;
    }
    /**
     * @inheritDoc
     * @throws flash.errors.IllegalOperationError <code>IllegalOperationError</code>: You cannot addOnce() then add() the same listener without removing the relationship first.
     * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>.
     */
    Signal.prototype.add = function (listener) {
        return this.registerListener(listener);
    };
    return Signal;
}(OnceSignal_1.OnceSignal));
exports.Signal = Signal;
//# sourceMappingURL=Signal.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The SlotList class represents an immutable list of Slot objects.
 *
 * @author Joa Ebert
 * @author Robert Penner
 */
var SlotList = (function () {
    /**
     * Creates and returns a new SlotList object.
     *
     * <p>A user never has to create a SlotList manually.
     * Use the <code>NIL</code> element to represent an empty list.
     * <code>NIL.prepend(value)</code> would create a list containing <code>value</code></p>.
     *
     * @param head The first slot in the list.
     * @param tail A list containing all slots except head.
     *
     * @throws ArgumentError <code>ArgumentError</code>: Parameters head and tail are null. Use the NIL element instead.
     * @throws ArgumentError <code>ArgumentError</code>: Parameter head cannot be null.
     */
    function SlotList(head, tail) {
        if (tail === void 0) { tail = null; }
        this.nonEmpty = false;
        if (!head && !tail) {
            if (SlotList.NIL)
                throw new Error('Parameters head and tail are null. Use the NIL element instead.');
            //this is the NIL element as per definition
            this.nonEmpty = false;
        }
        else if (!head) {
            throw new Error('Parameter head cannot be null.');
        }
        else {
            this.head = head;
            this.tail = tail || SlotList.NIL;
            this.nonEmpty = true;
        }
    }
    Object.defineProperty(SlotList.prototype, "length", {
        /**
         * The number of slots in the list.
         */
        get: function () {
            if (!this.nonEmpty)
                return 0;
            if (this.tail == SlotList.NIL)
                return 1;
            // We could cache the length, but it would make methods like filterNot unnecessarily complicated.
            // Instead we assume that O(n) is okay since the length property is used in rare cases.
            // We could also cache the length lazy, but that is a waste of another 8b per list node (at least).
            var result = 0;
            var p = this;
            while (p.nonEmpty) {
                ++result;
                p = p.tail;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Prepends a slot to this list.
     * @param    slot The item to be prepended.
     * @return    A list consisting of slot followed by all elements of this list.
     *
     * @throws ArgumentError <code>ArgumentError</code>: Parameter head cannot be null.
     */
    SlotList.prototype.prepend = function (slot) {
        return new SlotList(slot, this);
    };
    /**
     * Appends a slot to this list.
     * Note: appending is O(n). Where possible, prepend which is O(1).
     * In some cases, many list items must be cloned to
     * avoid changing existing lists.
     * @param    slot The item to be appended.
     * @return    A list consisting of all elements of this list followed by slot.
     */
    SlotList.prototype.append = function (slot) {
        if (!slot)
            return this;
        if (!this.nonEmpty)
            return new SlotList(slot);
        // Special case: just one slot currently in the list.
        if (this.tail == SlotList.NIL)
            return new SlotList(slot).prepend(this.head);
        // The list already has two or more slots.
        // We have to build a new list with cloned items because they are immutable.
        var wholeClone = new SlotList(this.head);
        var subClone = wholeClone;
        var current = this.tail;
        while (current.nonEmpty) {
            subClone = subClone.tail = new SlotList(current.head);
            current = current.tail;
        }
        // Append the new slot last.
        subClone.tail = new SlotList(slot);
        return wholeClone;
    };
    /**
     * Insert a slot into the list in a position according to its priority.
     * The higher the priority, the closer the item will be inserted to the list head.
     * @params slot The item to be inserted.
     *
     * @throws ArgumentError <code>ArgumentError</code>: Parameters head and tail are null. Use the NIL element instead.
     * @throws ArgumentError <code>ArgumentError</code>: Parameter head cannot be null.
     */
    SlotList.prototype.insertWithPriority = function (slot) {
        if (!this.nonEmpty)
            return new SlotList(slot);
        var priority = slot.priority;
        // Special case: new slot has the highest priority.
        if (priority > this.head.priority)
            return this.prepend(slot);
        var wholeClone = new SlotList(this.head);
        var subClone = wholeClone;
        var current = this.tail;
        // Find a slot with lower priority and go in front of it.
        while (current.nonEmpty) {
            if (priority > current.head.priority) {
                subClone.tail = current.prepend(slot);
                return wholeClone;
            }
            subClone = subClone.tail = new SlotList(current.head);
            current = current.tail;
        }
        // Slot has lowest priority.
        subClone.tail = new SlotList(slot);
        return wholeClone;
    };
    /**
     * Returns the slots in this list that do not contain the supplied listener.
     * Note: assumes the listener is not repeated within the list.
     * @param    listener The function to remove.
     * @return A list consisting of all elements of this list that do not have listener.
     */
    SlotList.prototype.filterNot = function (listener) {
        if (!this.nonEmpty || listener == null)
            return this;
        if (listener == this.head.listener)
            return this.tail;
        // The first item wasn't a match so the filtered list will contain it.
        var wholeClone = new SlotList(this.head);
        var subClone = wholeClone;
        var current = this.tail;
        while (current.nonEmpty) {
            if (current.head.listener == listener) {
                // Splice out the current head.
                subClone.tail = current.tail;
                return wholeClone;
            }
            subClone = subClone.tail = new SlotList(current.head);
            current = current.tail;
        }
        // The listener was not found so this list is unchanged.
        return this;
    };
    /**
     * Determines whether the supplied listener Function is contained within this list
     */
    SlotList.prototype.contains = function (listener) {
        if (!this.nonEmpty)
            return false;
        var p = this;
        while (p.nonEmpty) {
            if (p.head.listener == listener)
                return true;
            p = p.tail;
        }
        return false;
    };
    /**
     * Retrieves the ISlot associated with a supplied listener within the SlotList.
     * @param   listener The Function being searched for
     * @return  The ISlot in this list associated with the listener parameter through the ISlot.listener property.
     *          Returns null if no such ISlot instance exists or the list is empty.
     */
    SlotList.prototype.find = function (listener) {
        if (!this.nonEmpty)
            return null;
        var p = this;
        while (p.nonEmpty) {
            if (p.head.listener == listener)
                return p.head;
            p = p.tail;
        }
        return null;
    };
    SlotList.prototype.toString = function () {
        var buffer = '';
        var p = this;
        while (p.nonEmpty) {
            buffer += p.head + " -> ";
            p = p.tail;
        }
        buffer += "NIL";
        return "[List " + buffer + "]";
    };
    return SlotList;
}());
/**
 * Represents an empty list. Used as the list terminator.
 */
SlotList.NIL = new SlotList(null, null);
exports.SlotList = SlotList;
//# sourceMappingURL=SlotList.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var msgpack = __webpack_require__(9);
var signals_js_1 = __webpack_require__(29);
var Protocol_1 = __webpack_require__(5);
var Room_1 = __webpack_require__(16);
var Connection_1 = __webpack_require__(69);
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


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var Backoff = __webpack_require__(17);
var ExponentialBackoffStrategy = __webpack_require__(37);
var FibonacciBackoffStrategy = __webpack_require__(18);
var FunctionCall = __webpack_require__(36);

module.exports.Backoff = Backoff;
module.exports.FunctionCall = FunctionCall;
module.exports.FibonacciStrategy = FibonacciBackoffStrategy;
module.exports.ExponentialStrategy = ExponentialBackoffStrategy;

// Constructs a Fibonacci backoff.
module.exports.fibonacci = function(options) {
    return new Backoff(new FibonacciBackoffStrategy(options));
};

// Constructs an exponential backoff.
module.exports.exponential = function(options) {
    return new Backoff(new ExponentialBackoffStrategy(options));
};

// Constructs a FunctionCall for the given function and arguments.
module.exports.call = function(fn, vargs, callback) {
    var args = Array.prototype.slice.call(arguments);
    fn = args[0];
    vargs = args.slice(1, args.length - 1);
    callback = args[args.length - 1];
    return new FunctionCall(fn, vargs, callback);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = __webpack_require__(6);
var precond = __webpack_require__(14);
var util = __webpack_require__(1);

var Backoff = __webpack_require__(17);
var FibonacciBackoffStrategy = __webpack_require__(18);

// Wraps a function to be called in a backoff loop.
function FunctionCall(fn, args, callback) {
    events.EventEmitter.call(this);

    precond.checkIsFunction(fn, 'Expected fn to be a function.');
    precond.checkIsArray(args, 'Expected args to be an array.');
    precond.checkIsFunction(callback, 'Expected callback to be a function.');

    this.function_ = fn;
    this.arguments_ = args;
    this.callback_ = callback;
    this.lastResult_ = [];
    this.numRetries_ = 0;

    this.backoff_ = null;
    this.strategy_ = null;
    this.failAfter_ = -1;
    this.retryPredicate_ = FunctionCall.DEFAULT_RETRY_PREDICATE_;

    this.state_ = FunctionCall.State_.PENDING;
}
util.inherits(FunctionCall, events.EventEmitter);

// States in which the call can be.
FunctionCall.State_ = {
    // Call isn't started yet.
    PENDING: 0,
    // Call is in progress.
    RUNNING: 1,
    // Call completed successfully which means that either the wrapped function
    // returned successfully or the maximal number of backoffs was reached.
    COMPLETED: 2,
    // The call was aborted.
    ABORTED: 3
};

// The default retry predicate which considers any error as retriable.
FunctionCall.DEFAULT_RETRY_PREDICATE_ = function(err) {
  return true;
};

// Checks whether the call is pending.
FunctionCall.prototype.isPending = function() {
    return this.state_ == FunctionCall.State_.PENDING;
};

// Checks whether the call is in progress.
FunctionCall.prototype.isRunning = function() {
    return this.state_ == FunctionCall.State_.RUNNING;
};

// Checks whether the call is completed.
FunctionCall.prototype.isCompleted = function() {
    return this.state_ == FunctionCall.State_.COMPLETED;
};

// Checks whether the call is aborted.
FunctionCall.prototype.isAborted = function() {
    return this.state_ == FunctionCall.State_.ABORTED;
};

// Sets the backoff strategy to use. Can only be called before the call is
// started otherwise an exception will be thrown.
FunctionCall.prototype.setStrategy = function(strategy) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.strategy_ = strategy;
    return this; // Return this for chaining.
};

// Sets the predicate which will be used to determine whether the errors
// returned from the wrapped function should be retried or not, e.g. a
// network error would be retriable while a type error would stop the
// function call.
FunctionCall.prototype.retryIf = function(retryPredicate) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.retryPredicate_ = retryPredicate;
    return this;
};

// Returns all intermediary results returned by the wrapped function since
// the initial call.
FunctionCall.prototype.getLastResult = function() {
    return this.lastResult_.concat();
};

// Returns the number of times the wrapped function call was retried.
FunctionCall.prototype.getNumRetries = function() {
    return this.numRetries_;
};

// Sets the backoff limit.
FunctionCall.prototype.failAfter = function(maxNumberOfRetry) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.failAfter_ = maxNumberOfRetry;
    return this; // Return this for chaining.
};

// Aborts the call.
FunctionCall.prototype.abort = function() {
    if (this.isCompleted() || this.isAborted()) {
      return;
    }

    if (this.isRunning()) {
        this.backoff_.reset();
    }

    this.state_ = FunctionCall.State_.ABORTED;
    this.lastResult_ = [new Error('Backoff aborted.')];
    this.emit('abort');
    this.doCallback_();
};

// Initiates the call to the wrapped function. Accepts an optional factory
// function used to create the backoff instance; used when testing.
FunctionCall.prototype.start = function(backoffFactory) {
    precond.checkState(!this.isAborted(), 'FunctionCall is aborted.');
    precond.checkState(this.isPending(), 'FunctionCall already started.');

    var strategy = this.strategy_ || new FibonacciBackoffStrategy();

    this.backoff_ = backoffFactory ?
        backoffFactory(strategy) :
        new Backoff(strategy);

    this.backoff_.on('ready', this.doCall_.bind(this, true /* isRetry */));
    this.backoff_.on('fail', this.doCallback_.bind(this));
    this.backoff_.on('backoff', this.handleBackoff_.bind(this));

    if (this.failAfter_ > 0) {
        this.backoff_.failAfter(this.failAfter_);
    }

    this.state_ = FunctionCall.State_.RUNNING;
    this.doCall_(false /* isRetry */);
};

// Calls the wrapped function.
FunctionCall.prototype.doCall_ = function(isRetry) {
    if (isRetry) {
        this.numRetries_++;
    }
    var eventArgs = ['call'].concat(this.arguments_);
    events.EventEmitter.prototype.emit.apply(this, eventArgs);
    var callback = this.handleFunctionCallback_.bind(this);
    this.function_.apply(null, this.arguments_.concat(callback));
};

// Calls the wrapped function's callback with the last result returned by the
// wrapped function.
FunctionCall.prototype.doCallback_ = function() {
    this.callback_.apply(null, this.lastResult_);
};

// Handles wrapped function's completion. This method acts as a replacement
// for the original callback function.
FunctionCall.prototype.handleFunctionCallback_ = function() {
    if (this.isAborted()) {
        return;
    }

    var args = Array.prototype.slice.call(arguments);
    this.lastResult_ = args; // Save last callback arguments.
    events.EventEmitter.prototype.emit.apply(this, ['callback'].concat(args));

    var err = args[0];
    if (err && this.retryPredicate_(err)) {
        this.backoff_.backoff(err);
    } else {
        this.state_ = FunctionCall.State_.COMPLETED;
        this.doCallback_();
    }
};

// Handles the backoff event by reemitting it.
FunctionCall.prototype.handleBackoff_ = function(number, delay, err) {
    this.emit('backoff', number, delay, err);
};

module.exports = FunctionCall;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var util = __webpack_require__(1);
var precond = __webpack_require__(14);

var BackoffStrategy = __webpack_require__(19);

// Exponential backoff strategy.
function ExponentialBackoffStrategy(options) {
    BackoffStrategy.call(this, options);
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
    this.factor_ = ExponentialBackoffStrategy.DEFAULT_FACTOR;

    if (options && options.factor !== undefined) {
        precond.checkArgument(options.factor > 1,
            'Exponential factor should be greater than 1 but got %s.',
            options.factor);
        this.factor_ = options.factor;
    }
}
util.inherits(ExponentialBackoffStrategy, BackoffStrategy);

// Default multiplication factor used to compute the next backoff delay from
// the current one. The value can be overridden by passing a custom factor as
// part of the options.
ExponentialBackoffStrategy.DEFAULT_FACTOR = 2;

ExponentialBackoffStrategy.prototype.next_ = function() {
    this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
    this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_;
    return this.backoffDelay_;
};

ExponentialBackoffStrategy.prototype.reset_ = function() {
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
};

module.exports = ExponentialBackoffStrategy;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Clock = (function () {
    function Clock(useInterval) {
        if (useInterval === void 0) { useInterval = false; }
        this.running = false;
        this.now = (typeof (window) !== "undefined" && window.performance && (window.performance.now).bind(window.performance)) || Date.now;
        this.start(useInterval);
    }
    Clock.prototype.start = function (useInterval) {
        if (useInterval === void 0) { useInterval = false; }
        this.deltaTime = 0;
        this.currentTime = this.now();
        this.elapsedTime = 0;
        this.running = true;
        if (useInterval) {
            // auto set interval to 60 ticks per second
            this._interval = setInterval(this.tick.bind(this), 1000 / 60);
        }
    };
    Clock.prototype.stop = function () {
        this.running = false;
        if (this._interval) {
            clearInterval(this._interval);
        }
    };
    Clock.prototype.tick = function (newTime) {
        if (newTime === void 0) { newTime = this.now(); }
        this.deltaTime = newTime - this.currentTime;
        this.currentTime = newTime;
        this.elapsedTime += this.deltaTime;
    };
    return Clock;
}());
module.exports = Clock;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeltaContainer = (function () {
    function DeltaContainer(data) {
        this.listeners = [];
        this.matcherPlaceholders = {
            ":id": /^([a-zA-Z0-9\-_]+)$/,
            ":number": /^([0-9]+)$/,
            ":string": /^(\w+)$/,
            ":axis": /^([xyz])$/,
            ":*": /(.*)/,
        };
        this.data = data;
        this.reset();
    }
    DeltaContainer.prototype.set = function (newData) {
        var patches = this.compare(newData);
        this.checkPatches(patches);
        this.data = newData;
        return;
    };
    DeltaContainer.prototype.registerPlaceholder = function (placeholder, matcher) {
        this.matcherPlaceholders[placeholder] = matcher;
    };
    DeltaContainer.prototype.listen = function (segments, callback, operation) {
        var _this = this;
        var rules;
        if (typeof (segments) === "function") {
            rules = [];
            callback = segments;
        }
        else {
            rules = segments.split("/");
        }
        var listener = {
            callback: callback,
            operation: operation,
            rawRules: rules,
            rules: rules.map(function (segment) {
                if (typeof (segment) === "string") {
                    // replace placeholder matchers
                    return (segment.indexOf(":") === 0)
                        ? _this.matcherPlaceholders[segment] || _this.matcherPlaceholders[":*"]
                        : new RegExp("^" + segment + "$");
                }
                else {
                    return segment;
                }
            })
        };
        if (rules.length === 0) {
            this.defaultListener = listener;
        }
        else {
            this.listeners.push(listener);
        }
        return listener;
    };
    DeltaContainer.prototype.removeListener = function (listener) {
        for (var i = this.listeners.length - 1; i >= 0; i--) {
            if (this.listeners[i] === listener) {
                this.listeners.splice(i, 1);
            }
        }
    };
    DeltaContainer.prototype.removeAllListeners = function () {
        this.reset();
    };
    DeltaContainer.prototype.checkPatches = function (patches) {
        for (var i = patches.length - 1; i >= 0; i--) {
            var matched = false;
            for (var j = 0, len = this.listeners.length; j < len; j++) {
                var listener = this.listeners[j];
                var pathVariables = this.getPathVariables(patches[i], listener);
                if (pathVariables) {
                    if (!listener.operation || listener.operation === patches[i].operation) {
                        listener.callback({
                            path: pathVariables,
                            operation: patches[i].operation,
                            value: patches[i].value
                        });
                        matched = true;
                    }
                }
            }
            // check for fallback listener
            if (!matched && this.defaultListener) {
                this.defaultListener.callback(patches[i]);
            }
        }
    };
    DeltaContainer.prototype.getPathVariables = function (patch, listener) {
        // skip if rules count differ from patch
        if (patch.path.length !== listener.rules.length) {
            return false;
        }
        var path = {};
        for (var i = 0, len = listener.rules.length; i < len; i++) {
            var matches = patch.path[i].match(listener.rules[i]);
            if (!matches || matches.length === 0 || matches.length > 2) {
                return false;
            }
            else if (listener.rawRules[i].substr(0, 1) === ":") {
                path[listener.rawRules[i].substr(1)] = matches[1];
            }
        }
        return path;
    };
    DeltaContainer.prototype.reset = function () {
        this.listeners = [];
    };
    DeltaContainer.prototype.compare = function (newData) {
        var patches = [];
        this.generate(this.data, newData, patches, []);
        return patches;
    };
    // Dirty check if obj is different from mirror, generate patches and update mirror
    DeltaContainer.prototype.generate = function (oldData, newData, patches, path) {
        var newKeys = objectKeys(newData);
        var oldKeys = objectKeys(oldData);
        var changed = false;
        var deleted = false;
        for (var t = oldKeys.length - 1; t >= 0; t--) {
            var prop = oldKeys[t];
            var oldVal = oldData[prop];
            if (newData.hasOwnProperty(prop) // property still on new data, and...
                && !(newData[prop] === undefined // new data doesnt have the property defined
                    && oldVal !== undefined // or old value for this property was defined
                    && Array.isArray(newData) === false) // or current NewData isn't a array
            ) {
                var newVal = newData[prop];
                if (typeof oldVal == "object" &&
                    oldVal != null &&
                    typeof newVal == "object" &&
                    newVal != null) {
                    // check replace listeners for object level listener
                    var newPath = path.concat(prop);
                    var match = this.checkObserveListeners(oldVal, newVal, newPath, patches);
                    if (!match) {
                        this.generate(oldVal, newVal, patches, newPath);
                    }
                }
                else {
                    if (oldVal !== newVal) {
                        changed = true;
                        patches.push({ operation: "replace", path: path.concat(prop), value: deepClone(newVal) });
                    }
                }
            }
            else {
                patches.push({ operation: "remove", path: path.concat(prop) });
                deleted = true; // property has been deleted
            }
        }
        if (!deleted && newKeys.length == oldKeys.length) {
            return;
        }
        for (var t = 0; t < newKeys.length; t++) {
            var prop = newKeys[t];
            if (!oldData.hasOwnProperty(prop) && newData[prop] !== undefined) {
                patches.push({ operation: "add", path: path.concat(prop), value: deepClone(newData[prop]) });
            }
        }
    };
    DeltaContainer.prototype.checkObserveListeners = function (oldVal, newVal, path, patches) {
        var rules;
        listenerLoop: for (var i = this.listeners.length - 1; i >= 0; i--) {
            if (this.listeners[i].operation !== '*')
                continue;
            rules = this.listeners[i].rules;
            if (rules.length !== path.length) {
                continue listenerLoop;
            }
            for (var i_1 = 0; i_1 < rules.length; i_1++) {
                if (!path[i_1] // if path isn't this long, or
                    || !path[i_1].match(rules[i_1])) {
                    continue listenerLoop;
                }
            }
            // if we got here then the listener matches. test shallow values
            var newKeys = objectKeys(newVal);
            // first just check if the number of properties changed
            if (objectKeys(oldVal).length !== newKeys.length) {
                patches.push({ operation: "*", path: path, value: deepClone(newVal) });
                return true;
            }
            //let oldKeys = objectKeys(oldVal);
            for (var i_2 = newKeys.length - 1; i_2 >= 0; i_2--) {
                if (oldVal[newKeys[i_2]] !== newVal[newKeys[i_2]]) {
                    patches.push({ operation: "*", path: path, value: deepClone(newVal) });
                    return true;
                }
            }
        }
        return false;
    };
    return DeltaContainer;
}());
exports.DeltaContainer = DeltaContainer;
function deepClone(obj) {
    switch (typeof obj) {
        case "object":
            return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
        case "undefined":
            return null; //this is how JSON.stringify behaves for array items
        default:
            return obj; //no need to clone primitives
    }
}
function objectKeys(obj) {
    if (Array.isArray(obj)) {
        var keys = new Array(obj.length);
        for (var k = 0; k < keys.length; k++) {
            keys[k] = "" + k;
        }
        return keys;
    }
    return Object.keys(obj);
}
;
//# sourceMappingURL=DeltaContainer.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExplicitContainer = (function () {
    function ExplicitContainer(data) {
        this.stateListeners = {};
        this.createListeners = {};
        this.removeListeners = {};
        this._data = data;
        this.propKeys = Object.keys(data);
        this.propLength = this.propKeys.length;
    }
    Object.defineProperty(ExplicitContainer.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    ExplicitContainer.prototype.addStateListener = function (propName, callback) {
        this.stateListeners[propName] = callback;
    };
    ExplicitContainer.prototype.addCreateListener = function (propName, callback) {
        this.createListeners[propName] = callback;
    };
    ExplicitContainer.prototype.addRemoveListener = function (propName, callback) {
        this.removeListeners[propName] = callback;
    };
    ExplicitContainer.prototype.removeAllListeners = function () {
        this.createListeners = {};
        this.removeListeners = {};
        this.stateListeners = {};
    };
    ExplicitContainer.prototype.set = function (newData) {
        for (var i = this.propLength - 1; i >= 0; i--) {
            var latestObjKeys = Object.keys(newData[this.propKeys[i]]);
            var priorObjKeys = Object.keys(this._data[this.propKeys[i]]);
            var foundNew = false;
            for (var j = latestObjKeys.length - 1; j >= 0; j--) {
                for (var k = priorObjKeys.length - 1; k >= 0; k--) {
                    if (latestObjKeys[j] === priorObjKeys[k])
                        continue; // we know this object
                }
                foundNew = true;
                if (this.createListeners[this.propKeys[i]]) {
                    this.createListeners[this.propKeys[i]](newData[this.propKeys[i]][latestObjKeys[j]]);
                }
            }
            if (!foundNew && latestObjKeys.length === priorObjKeys.length)
                continue; // if nothing was added and lengths match, save a iteration
            for (var j = priorObjKeys.length - 1; j >= 0; j--) {
                for (var k = latestObjKeys.length - 1; k >= 0; k--) {
                    if (priorObjKeys[j] === latestObjKeys[k])
                        continue; // we know this object
                }
                if (this.removeListeners[this.propKeys[i]]) {
                    this.removeListeners[this.propKeys[i]](this._data[this.propKeys[i]][priorObjKeys[i]]);
                }
            }
            if (this.stateListeners[this.propKeys[i]]) {
                this.stateListeners[this.propKeys[i]](newData[this.propKeys[i]]);
            }
        }
        this._data = newData;
    };
    return ExplicitContainer;
}());
exports.ExplicitContainer = ExplicitContainer;
//# sourceMappingURL=ExplicitContainer.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeltaContainer_1 = __webpack_require__(40);
exports.DeltaContainer = DeltaContainer_1.DeltaContainer;
var ExplicitContainer_1 = __webpack_require__(41);
exports.ExplicitContainer = ExplicitContainer_1.ExplicitContainer;
//# sourceMappingURL=index.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Fossil SCM delta compression algorithm
// ======================================
//
// Format:
// http://www.fossil-scm.org/index.html/doc/tip/www/delta_format.wiki
//
// Algorithm:
// http://www.fossil-scm.org/index.html/doc/tip/www/delta_encoder_algorithm.wiki
//
// Original implementation:
// http://www.fossil-scm.org/index.html/artifact/d1b0598adcd650b3551f63b17dfc864e73775c3d
//
// LICENSE
// -------
//
// Copyright 2014 Dmitry Chestnykh (JavaScript port)
// Copyright 2007 D. Richard Hipp  (original C version)
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the
// following conditions are met:
//
//   1. Redistributions of source code must retain the above
//      copyright notice, this list of conditions and the
//      following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above
//      copyright notice, this list of conditions and the
//      following disclaimer in the documentation and/or other
//      materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE AUTHORS ``AS IS'' AND ANY EXPRESS
// OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
// BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
// OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation
// are those of the authors and contributors and should not be interpreted
// as representing official policies, either expressed or implied, of anybody
// else.
//
(function(root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.fossilDelta = factory();
})(this, function() {
'use strict';

var fossilDelta = {};

// Hash window width in bytes. Must be a power of two.
var NHASH = 16;

function RollingHash() {
  this.a = 0; // hash     (16-bit unsigned)
  this.b = 0; // values   (16-bit unsigned)
  this.i = 0; // start of the hash window (16-bit unsigned)
  this.z = new Array(NHASH); // the values that have been hashed.
}

// Initialize the rolling hash using the first NHASH bytes of
// z at the given position.
RollingHash.prototype.init = function(z, pos) {
  var a = 0, b = 0, i, x;
  for(i = 0; i < NHASH; i++){
    x = z[pos+i];
    a = (a + x) & 0xffff;
    b = (b + (NHASH-i)*x) & 0xffff;
    this.z[i] = x;
  }
  this.a = a & 0xffff;
  this.b = b & 0xffff;
  this.i = 0;
};

// Advance the rolling hash by a single byte "c".
RollingHash.prototype.next = function(c) {
  var old = this.z[this.i];
  this.z[this.i] = c;
  this.i = (this.i+1)&(NHASH-1);
  this.a = (this.a - old + c) & 0xffff;
  this.b = (this.b - NHASH*old + this.a) & 0xffff;
};

// Return a 32-bit hash value.
RollingHash.prototype.value = function() {
  return ((this.a & 0xffff) | (this.b & 0xffff)<<16)>>>0;
};

var zDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~".
                split('').map(function (x) { return x.charCodeAt(0); });

var zValue = [
  -1, -1, -1, -1, -1, -1, -1, -1,   -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1,   -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1,   -1, -1, -1, -1, -1, -1, -1, -1,
   0,  1,  2,  3,  4,  5,  6,  7,    8,  9, -1, -1, -1, -1, -1, -1,
  -1, 10, 11, 12, 13, 14, 15, 16,   17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 32,   33, 34, 35, -1, -1, -1, -1, 36,
  -1, 37, 38, 39, 40, 41, 42, 43,   44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59,   60, 61, 62, -1, -1, -1, 63, -1
];

// Reader reads bytes, chars, ints from array.
function Reader(array) {
  this.a = array; // source array
  this.pos = 0;   // current position in array
}

Reader.prototype.haveBytes = function() {
  return this.pos < this.a.length;
};

Reader.prototype.getByte = function() {
  var b = this.a[this.pos];
  this.pos++;
  if (this.pos > this.a.length) throw new RangeError('out of bounds');
  return b;
};

Reader.prototype.getChar = function() {
  return String.fromCharCode(this.getByte());
};

  // Read base64-encoded unsigned integer.
Reader.prototype.getInt = function(){
  var v = 0, c;
  while(this.haveBytes() && (c = zValue[0x7f & this.getByte()]) >= 0) {
     v = (v<<6) + c;
  }
  this.pos--;
  return v >>> 0;
};


// Write writes an array.
function Writer() {
  this.a = [];
}

Writer.prototype.toArray = function() {
  return this.a;
};

Writer.prototype.putByte = function(b) {
  this.a.push(b & 0xff);
};

// Write an ASCII character (s is a one-char string).
Writer.prototype.putChar = function(s) {
  this.putByte(s.charCodeAt(0));
};

// Write a base64 unsigned integer.
Writer.prototype.putInt = function(v){
  var i, j, zBuf = [];
  if (v === 0) {
    this.putChar('0');
    return;
  }
  for (i = 0; v > 0; i++, v >>>= 6)
    zBuf.push(zDigits[v&0x3f]);
  for (j = i-1; j >= 0; j--)
    this.putByte(zBuf[j]);
};

// Copy from array at start to end.
Writer.prototype.putArray = function(a, start, end) {
  for (var i = start; i < end; i++) this.a.push(a[i]);
};

// Return the number digits in the base64 representation of a positive integer.
function digitCount(v){
  var i, x;
  for (i = 1, x = 64; v >= x; i++, x <<= 6){ /* nothing */ }
  return i;
}

// Return a 32-bit checksum of the array.
function checksum(arr) {
  var sum0 = 0, sum1 = 0, sum2 = 0, sum3 = 0,
      z = 0, N = arr.length;
  //TODO measure if this unrolling is helpful.
  while (N >= 16) {
    sum0 = sum0 + arr[z+0] | 0;
    sum1 = sum1 + arr[z+1] | 0;
    sum2 = sum2 + arr[z+2] | 0;
    sum3 = sum3 + arr[z+3] | 0;

    sum0 = sum0 + arr[z+4] | 0;
    sum1 = sum1 + arr[z+5] | 0;
    sum2 = sum2 + arr[z+6] | 0;
    sum3 = sum3 + arr[z+7] | 0;

    sum0 = sum0 + arr[z+8] | 0;
    sum1 = sum1 + arr[z+9] | 0;
    sum2 = sum2 + arr[z+10] | 0;
    sum3 = sum3 + arr[z+11] | 0;

    sum0 = sum0 + arr[z+12] | 0;
    sum1 = sum1 + arr[z+13] | 0;
    sum2 = sum2 + arr[z+14] | 0;
    sum3 = sum3 + arr[z+15] | 0;

    z += 16;
    N -= 16;
  }
  while (N >= 4) {
    sum0 = sum0 + arr[z+0] | 0;
    sum1 = sum1 + arr[z+1] | 0;
    sum2 = sum2 + arr[z+2] | 0;
    sum3 = sum3 + arr[z+3] | 0;
    z += 4;
    N -= 4;
  }
  sum3 = (((sum3 + (sum2 << 8) | 0) + (sum1 << 16) | 0) + (sum0 << 24) | 0);
  /* jshint -W086 */
  switch (N) {
    case 3: sum3 = sum3 + (arr[z+2] <<  8) | 0; /* falls through */
    case 2: sum3 = sum3 + (arr[z+1] << 16) | 0; /* falls through */
    case 1: sum3 = sum3 + (arr[z+0] << 24) | 0; /* falls through */
  }
  return sum3 >>> 0;
}

// Create a new delta from src to out.
fossilDelta.create = function(src, out) {
  var zDelta = new Writer();
  var lenOut = out.length;
  var lenSrc = src.length;
  var i, lastRead = -1;

  zDelta.putInt(lenOut);
  zDelta.putChar('\n');

  // If the source is very small, it means that we have no
  // chance of ever doing a copy command.  Just output a single
  // literal segment for the entire target and exit.
  if (lenSrc <= NHASH) {
    zDelta.putInt(lenOut);
    zDelta.putChar(':');
    zDelta.putArray(out, 0, lenOut);
    zDelta.putInt(checksum(out));
    zDelta.putChar(';');
    return zDelta.toArray();
  }

  // Compute the hash table used to locate matching sections in the source.
  var nHash = Math.ceil(lenSrc / NHASH);
  var collide =  new Array(nHash);
  var landmark = new Array(nHash);
  for (i = 0; i < collide.length; i++) collide[i] = -1;
  for (i = 0; i < landmark.length; i++) landmark[i] = -1;
  var hv, h = new RollingHash();
  for (i = 0; i < lenSrc-NHASH; i += NHASH) {
    h.init(src, i);
    hv = h.value() % nHash;
    collide[i/NHASH] = landmark[hv];
    landmark[hv] = i/NHASH;
  }

  var base = 0;
  var iSrc, iBlock, bestCnt, bestOfst, bestLitsz;
  while (base+NHASH<lenOut) {
    bestOfst=0;
    bestLitsz=0;
    h.init(out, base);
    i = 0; // Trying to match a landmark against zOut[base+i]
    bestCnt = 0;
    while(1) {
      var limit = 250;
      hv = h.value() % nHash;
      iBlock = landmark[hv];
      while (iBlock >= 0 && (limit--)>0 ) {
        //
        // The hash window has identified a potential match against
        // landmark block iBlock.  But we need to investigate further.
        //
        // Look for a region in zOut that matches zSrc. Anchor the search
        // at zSrc[iSrc] and zOut[base+i].  Do not include anything prior to
        // zOut[base] or after zOut[outLen] nor anything after zSrc[srcLen].
        //
        // Set cnt equal to the length of the match and set ofst so that
        // zSrc[ofst] is the first element of the match.  litsz is the number
        // of characters between zOut[base] and the beginning of the match.
        // sz will be the overhead (in bytes) needed to encode the copy
        // command.  Only generate copy command if the overhead of the
        // copy command is less than the amount of literal text to be copied.
        //
        var cnt, ofst, litsz;
        var j, k, x, y;
        var sz;

        // Beginning at iSrc, match forwards as far as we can.
        // j counts the number of characters that match.
        iSrc = iBlock*NHASH;
        for (j = 0, x = iSrc, y = base+i; x < lenSrc && y < lenOut; j++, x++, y++) {
          if (src[x] !== out[y]) break;
        }
        j--;

        // Beginning at iSrc-1, match backwards as far as we can.
        // k counts the number of characters that match.
        for (k = 1; k < iSrc && k <= i; k++) {
          if (src[iSrc-k] !== out[base+i-k]) break;
        }
        k--;

        // Compute the offset and size of the matching region.
        ofst = iSrc-k;
        cnt = j+k+1;
        litsz = i-k;  // Number of bytes of literal text before the copy
        // sz will hold the number of bytes needed to encode the "insert"
        // command and the copy command, not counting the "insert" text.
        sz = digitCount(i-k)+digitCount(cnt)+digitCount(ofst)+3;
        if (cnt >= sz && cnt > bestCnt) {
          // Remember this match only if it is the best so far and it
          // does not increase the file size.
          bestCnt = cnt;
          bestOfst = iSrc-k;
          bestLitsz = litsz;
        }

        // Check the next matching block
        iBlock = collide[iBlock];
      }

      // We have a copy command that does not cause the delta to be larger
      // than a literal insert.  So add the copy command to the delta.
      if (bestCnt > 0) {
        if (bestLitsz > 0) {
          // Add an insert command before the copy.
          zDelta.putInt(bestLitsz);
          zDelta.putChar(':');
          zDelta.putArray(out, base, base+bestLitsz);
          base += bestLitsz;
        }
        base += bestCnt;
        zDelta.putInt(bestCnt);
        zDelta.putChar('@');
        zDelta.putInt(bestOfst);
        zDelta.putChar(',');
        if (bestOfst + bestCnt -1 > lastRead) {
          lastRead = bestOfst + bestCnt - 1;
        }
        bestCnt = 0;
        break;
      }

      // If we reach this point, it means no match is found so far
      if (base+i+NHASH >= lenOut){
        // We have reached the end and have not found any
        // matches.  Do an "insert" for everything that does not match
        zDelta.putInt(lenOut-base);
        zDelta.putChar(':');
        zDelta.putArray(out, base, base+lenOut-base);
        base = lenOut;
        break;
      }

      // Advance the hash by one character. Keep looking for a match.
      h.next(out[base+i+NHASH]);
      i++;
    }
  }
  // Output a final "insert" record to get all the text at the end of
  // the file that does not match anything in the source.
  if(base < lenOut) {
    zDelta.putInt(lenOut-base);
    zDelta.putChar(':');
    zDelta.putArray(out, base, base+lenOut-base);
  }
  // Output the final checksum record.
  zDelta.putInt(checksum(out));
  zDelta.putChar(';');
  return zDelta.toArray();
};

// Return the size (in bytes) of the output from applying a delta.
fossilDelta.outputSize = function(delta){
  var zDelta = new Reader(delta);
  var size = zDelta.getInt();
  if (zDelta.getChar() !== '\n')
    throw new Error('size integer not terminated by \'\\n\'');
  return size;
};

// Apply a delta.
fossilDelta.apply = function(src, delta) {
  var limit, total = 0;
  var zDelta = new Reader(delta);
  var lenSrc = src.length;
  var lenDelta = delta.length;

  limit = zDelta.getInt();
  if (zDelta.getChar() !== '\n')
    throw new Error('size integer not terminated by \'\\n\'');
  var zOut = new Writer();
  while(zDelta.haveBytes()) {
    var cnt, ofst;
    cnt = zDelta.getInt();

    switch (zDelta.getChar()) {
      case '@':
        ofst = zDelta.getInt();
        if (zDelta.haveBytes() && zDelta.getChar() !== ',')
          throw new Error('copy command not terminated by \',\'');
        total += cnt;
        if (total > limit)
          throw new Error('copy exceeds output file size');
        if (ofst+cnt > lenSrc)
          throw new Error('copy extends past end of input');
        zOut.putArray(src, ofst, ofst+cnt);
        break;

      case ':':
        total += cnt;
        if (total > limit)
          throw new Error('insert command gives an output larger than predicted');
        if (cnt > lenDelta)
          throw new Error('insert count exceeds size of delta');
        zOut.putArray(zDelta.a, zDelta.pos, zDelta.pos+cnt);
        zDelta.pos += cnt;
        break;

      case ';':
        var out = zOut.toArray();
        if (cnt !== checksum(out))
          throw new Error('bad checksum');
        if (total !== limit)
          throw new Error('generated size does not match predicted size');
        return out;

      default:
        throw new Error('unknown delta operator');
    }
  }
  throw new Error('unterminated delta');
};

return fossilDelta;

});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* globals Buffer */

module.exports =
  c(("undefined" !== typeof Buffer) && Buffer) ||
  c(this.Buffer) ||
  c(("undefined" !== typeof window) && window.Buffer) ||
  this.Buffer;

function c(B) {
  return B && B.isBuffer && B;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28).Buffer))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// buffer-lite.js

var MAXBUFLEN = 8192;

exports.copy = copy;
exports.toString = toString;
exports.write = write;

/**
 * Buffer.prototype.write()
 *
 * @param string {String}
 * @param [offset] {Number}
 * @returns {Number}
 */

function write(string, offset) {
  var buffer = this;
  var index = offset || (offset |= 0);
  var length = string.length;
  var chr = 0;
  var i = 0;
  while (i < length) {
    chr = string.charCodeAt(i++);

    if (chr < 128) {
      buffer[index++] = chr;
    } else if (chr < 0x800) {
      // 2 bytes
      buffer[index++] = 0xC0 | (chr >>> 6);
      buffer[index++] = 0x80 | (chr & 0x3F);
    } else if (chr < 0xD800 || chr > 0xDFFF) {
      // 3 bytes
      buffer[index++] = 0xE0 | (chr  >>> 12);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    } else {
      // 4 bytes - surrogate pair
      chr = (((chr - 0xD800) << 10) | (string.charCodeAt(i++) - 0xDC00)) + 0x10000;
      buffer[index++] = 0xF0 | (chr >>> 18);
      buffer[index++] = 0x80 | ((chr >>> 12) & 0x3F);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    }
  }
  return index - offset;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var buffer = this;
  var index = start|0;
  if (!end) end = buffer.length;
  var string = '';
  var chr = 0;

  while (index < end) {
    chr = buffer[index++];
    if (chr < 128) {
      string += String.fromCharCode(chr);
      continue;
    }

    if ((chr & 0xE0) === 0xC0) {
      // 2 bytes
      chr = (chr & 0x1F) << 6 |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF0) === 0xE0) {
      // 3 bytes
      chr = (chr & 0x0F)             << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF8) === 0xF0) {
      // 4 bytes
      chr = (chr & 0x07)             << 18 |
            (buffer[index++] & 0x3F) << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);
    }

    if (chr >= 0x010000) {
      // A surrogate pair
      chr -= 0x010000;

      string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
    } else {
      string += String.fromCharCode(chr);
    }
  }

  return string;
}

/**
 * Buffer.prototype.copy()
 *
 * @param target {Buffer}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {number}
 */

function copy(target, targetStart, start, end) {
  var i;
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (!targetStart) targetStart = 0;
  var len = end - start;

  if (target === this && start < targetStart && targetStart < end) {
    // descending
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    // ascending
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start];
    }
  }

  return len;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// bufferish-array.js

var Bufferish = __webpack_require__(0);

var exports = module.exports = alloc(0);

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Array}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Array
  return Array.prototype.slice.call(value);
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// bufferish-buffer.js

var Bufferish = __webpack_require__(0);
var Buffer = Bufferish.global;

var exports = module.exports = Bufferish.hasBuffer ? alloc(0) : [];

exports.alloc = Bufferish.hasBuffer && Buffer.alloc || alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Buffer(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Buffer
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Buffer
  if (Buffer.from && Buffer.from.length !== 1) {
    return Buffer.from(value); // node v6+
  } else {
    return new Buffer(value); // node v4
  }
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// bufferish-uint8array.js

var Bufferish = __webpack_require__(0);

var exports = module.exports = Bufferish.hasArrayBuffer ? alloc(0) : [];

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Uint8Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Uint8Array}
 */

function from(value) {
  if (Bufferish.isView(value)) {
    // TypedArray to ArrayBuffer
    var byteOffset = value.byteOffset;
    var byteLength = value.byteLength;
    value = value.buffer;
    if (value.byteLength !== byteLength) {
      if (value.slice) {
        value = value.slice(byteOffset, byteOffset + byteLength);
      } else {
        // Android 4.1 does not have ArrayBuffer.prototype.slice
        value = new Uint8Array(value);
        if (value.byteLength !== byteLength) {
          // TypedArray to ArrayBuffer to Uint8Array to Array
          value = Array.prototype.slice.call(value, byteOffset, byteOffset + byteLength);
        }
      }
    }
  } else if (typeof value === "string") {
    // String to Uint8Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  return new Uint8Array(value);
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// codec.js

// load both interfaces
__webpack_require__(12);
__webpack_require__(13);

// @public
// msgpack.codec.preset

exports.codec = {
  preset: __webpack_require__(3).preset
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// decoder.js

exports.Decoder = Decoder;

var EventLite = __webpack_require__(20);
var DecodeBuffer = __webpack_require__(21).DecodeBuffer;

function Decoder(options) {
  if (!(this instanceof Decoder)) return new Decoder(options);
  DecodeBuffer.call(this, options);
}

Decoder.prototype = new DecodeBuffer();

EventLite.mixin(Decoder.prototype);

Decoder.prototype.decode = function(chunk) {
  if (arguments.length) this.write(chunk);
  this.flush();
};

Decoder.prototype.push = function(chunk) {
  this.emit("data", chunk);
};

Decoder.prototype.end = function(chunk) {
  this.decode(chunk);
  this.emit("end");
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// encoder.js

exports.Encoder = Encoder;

var EventLite = __webpack_require__(20);
var EncodeBuffer = __webpack_require__(23).EncodeBuffer;

function Encoder(options) {
  if (!(this instanceof Encoder)) return new Encoder(options);
  EncodeBuffer.call(this, options);
}

Encoder.prototype = new EncodeBuffer();

EventLite.mixin(Encoder.prototype);

Encoder.prototype.encode = function(chunk) {
  this.write(chunk);
  this.emit("data", this.read());
};

Encoder.prototype.end = function(chunk) {
  if (arguments.length) this.encode(chunk);
  this.flush();
  this.emit("end");
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// ext-packer.js

exports.setExtPackers = setExtPackers;

var Bufferish = __webpack_require__(0);
var Buffer = Bufferish.global;
var packTypedArray = Bufferish.Uint8Array.from;
var _encode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtPackers(codec) {
  codec.addExtPacker(0x0E, Error, [packError, encode]);
  codec.addExtPacker(0x01, EvalError, [packError, encode]);
  codec.addExtPacker(0x02, RangeError, [packError, encode]);
  codec.addExtPacker(0x03, ReferenceError, [packError, encode]);
  codec.addExtPacker(0x04, SyntaxError, [packError, encode]);
  codec.addExtPacker(0x05, TypeError, [packError, encode]);
  codec.addExtPacker(0x06, URIError, [packError, encode]);

  codec.addExtPacker(0x0A, RegExp, [packRegExp, encode]);
  codec.addExtPacker(0x0B, Boolean, [packValueOf, encode]);
  codec.addExtPacker(0x0C, String, [packValueOf, encode]);
  codec.addExtPacker(0x0D, Date, [Number, encode]);
  codec.addExtPacker(0x0F, Number, [packValueOf, encode]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtPacker(0x11, Int8Array, packTypedArray);
    codec.addExtPacker(0x12, Uint8Array, packTypedArray);
    codec.addExtPacker(0x13, Int16Array, packTypedArray);
    codec.addExtPacker(0x14, Uint16Array, packTypedArray);
    codec.addExtPacker(0x15, Int32Array, packTypedArray);
    codec.addExtPacker(0x16, Uint32Array, packTypedArray);
    codec.addExtPacker(0x17, Float32Array, packTypedArray);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtPacker(0x18, Float64Array, packTypedArray);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtPacker(0x19, Uint8ClampedArray, packTypedArray);
    }

    codec.addExtPacker(0x1A, ArrayBuffer, packTypedArray);
    codec.addExtPacker(0x1D, DataView, packTypedArray);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtPacker(0x1B, Buffer, Bufferish.from);
  }
}

function encode(input) {
  if (!_encode) _encode = __webpack_require__(24).encode; // lazy load
  return _encode(input);
}

function packValueOf(value) {
  return (value).valueOf();
}

function packRegExp(value) {
  value = RegExp.prototype.toString.call(value).split("/");
  value.shift();
  var out = [value.pop()];
  out.unshift(value.join("/"));
  return out;
}

function packError(value) {
  var out = {};
  for (var key in ERROR_COLUMNS) {
    out[key] = value[key];
  }
  return out;
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// ext-unpacker.js

exports.setExtUnpackers = setExtUnpackers;

var Bufferish = __webpack_require__(0);
var Buffer = Bufferish.global;
var _decode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtUnpackers(codec) {
  codec.addExtUnpacker(0x0E, [decode, unpackError(Error)]);
  codec.addExtUnpacker(0x01, [decode, unpackError(EvalError)]);
  codec.addExtUnpacker(0x02, [decode, unpackError(RangeError)]);
  codec.addExtUnpacker(0x03, [decode, unpackError(ReferenceError)]);
  codec.addExtUnpacker(0x04, [decode, unpackError(SyntaxError)]);
  codec.addExtUnpacker(0x05, [decode, unpackError(TypeError)]);
  codec.addExtUnpacker(0x06, [decode, unpackError(URIError)]);

  codec.addExtUnpacker(0x0A, [decode, unpackRegExp]);
  codec.addExtUnpacker(0x0B, [decode, unpackClass(Boolean)]);
  codec.addExtUnpacker(0x0C, [decode, unpackClass(String)]);
  codec.addExtUnpacker(0x0D, [decode, unpackClass(Date)]);
  codec.addExtUnpacker(0x0F, [decode, unpackClass(Number)]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtUnpacker(0x11, unpackClass(Int8Array));
    codec.addExtUnpacker(0x12, unpackClass(Uint8Array));
    codec.addExtUnpacker(0x13, [unpackArrayBuffer, unpackClass(Int16Array)]);
    codec.addExtUnpacker(0x14, [unpackArrayBuffer, unpackClass(Uint16Array)]);
    codec.addExtUnpacker(0x15, [unpackArrayBuffer, unpackClass(Int32Array)]);
    codec.addExtUnpacker(0x16, [unpackArrayBuffer, unpackClass(Uint32Array)]);
    codec.addExtUnpacker(0x17, [unpackArrayBuffer, unpackClass(Float32Array)]);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtUnpacker(0x18, [unpackArrayBuffer, unpackClass(Float64Array)]);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtUnpacker(0x19, unpackClass(Uint8ClampedArray));
    }

    codec.addExtUnpacker(0x1A, unpackArrayBuffer);
    codec.addExtUnpacker(0x1D, [unpackArrayBuffer, unpackClass(DataView)]);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtUnpacker(0x1B, unpackClass(Buffer));
  }
}

function decode(input) {
  if (!_decode) _decode = __webpack_require__(22).decode; // lazy load
  return _decode(input);
}

function unpackRegExp(value) {
  return RegExp.apply(null, value);
}

function unpackError(Class) {
  return function(value) {
    var out = new Class();
    for (var key in ERROR_COLUMNS) {
      out[key] = value[key];
    }
    return out;
  };
}

function unpackClass(Class) {
  return function(value) {
    return new Class(value);
  };
}

function unpackArrayBuffer(value) {
  return (new Uint8Array(value)).buffer;
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// ext.js

// load both interfaces
__webpack_require__(12);
__webpack_require__(13);

exports.createCodec = __webpack_require__(3).createCodec;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// read-token.js

var ReadFormat = __webpack_require__(26);

exports.getReadToken = getReadToken;

function getReadToken(options) {
  var format = ReadFormat.getReadFormat(options);

  if (options && options.useraw) {
    return init_useraw(format);
  } else {
    return init_token(format);
  }
}

function init_token(format) {
  var i;
  var token = new Array(256);

  // positive fixint -- 0x00 - 0x7f
  for (i = 0x00; i <= 0x7f; i++) {
    token[i] = constant(i);
  }

  // fixmap -- 0x80 - 0x8f
  for (i = 0x80; i <= 0x8f; i++) {
    token[i] = fix(i - 0x80, format.map);
  }

  // fixarray -- 0x90 - 0x9f
  for (i = 0x90; i <= 0x9f; i++) {
    token[i] = fix(i - 0x90, format.array);
  }

  // fixstr -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.str);
  }

  // nil -- 0xc0
  token[0xc0] = constant(null);

  // (never used) -- 0xc1
  token[0xc1] = null;

  // false -- 0xc2
  // true -- 0xc3
  token[0xc2] = constant(false);
  token[0xc3] = constant(true);

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = flex(format.uint8, format.bin);
  token[0xc5] = flex(format.uint16, format.bin);
  token[0xc6] = flex(format.uint32, format.bin);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = flex(format.uint8, format.ext);
  token[0xc8] = flex(format.uint16, format.ext);
  token[0xc9] = flex(format.uint32, format.ext);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = format.float32;
  token[0xcb] = format.float64;

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = format.uint8;
  token[0xcd] = format.uint16;
  token[0xce] = format.uint32;
  token[0xcf] = format.uint64;

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = format.int8;
  token[0xd1] = format.int16;
  token[0xd2] = format.int32;
  token[0xd3] = format.int64;

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  token[0xd4] = fix(1, format.ext);
  token[0xd5] = fix(2, format.ext);
  token[0xd6] = fix(4, format.ext);
  token[0xd7] = fix(8, format.ext);
  token[0xd8] = fix(16, format.ext);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = flex(format.uint8, format.str);
  token[0xda] = flex(format.uint16, format.str);
  token[0xdb] = flex(format.uint32, format.str);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = flex(format.uint16, format.array);
  token[0xdd] = flex(format.uint32, format.array);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = flex(format.uint16, format.map);
  token[0xdf] = flex(format.uint32, format.map);

  // negative fixint -- 0xe0 - 0xff
  for (i = 0xe0; i <= 0xff; i++) {
    token[i] = constant(i - 0x100);
  }

  return token;
}

function init_useraw(format) {
  var i;
  var token = init_token(format).slice();

  // raw 8 -- 0xd9
  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  token[0xd9] = token[0xc4];
  token[0xda] = token[0xc5];
  token[0xdb] = token[0xc6];

  // fixraw -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.bin);
  }

  return token;
}

function constant(value) {
  return function() {
    return value;
  };
}

function flex(lenFunc, decodeFunc) {
  return function(decoder) {
    var len = lenFunc(decoder);
    return decodeFunc(decoder, len);
  };
}

function fix(len, method) {
  return function(decoder) {
    return method(decoder, len);
  };
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// write-token.js

var ieee754 = __webpack_require__(7);
var Int64Buffer = __webpack_require__(8);
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var uint8 = __webpack_require__(27).uint8;
var Bufferish = __webpack_require__(0);
var Buffer = Bufferish.global;
var IS_BUFFER_SHIM = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var NO_TYPED_ARRAY = IS_BUFFER_SHIM && !Buffer.TYPED_ARRAY_SUPPORT;
var Buffer_prototype = Bufferish.hasBuffer && Buffer.prototype || {};

exports.getWriteToken = getWriteToken;

function getWriteToken(options) {
  if (options && options.uint8array) {
    return init_uint8array();
  } else if (NO_TYPED_ARRAY || (Bufferish.hasBuffer && options && options.safe)) {
    return init_safe();
  } else {
    return init_token();
  }
}

function init_uint8array() {
  var token = init_token();

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, writeDoubleBE);

  return token;
}

// Node.js and browsers with TypedArray

function init_token() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = write1(0xc4);
  token[0xc5] = write2(0xc5);
  token[0xc6] = write4(0xc6);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = write1(0xc7);
  token[0xc8] = write2(0xc8);
  token[0xc9] = write4(0xc9);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, (Buffer_prototype.writeFloatBE || writeFloatBE), true);
  token[0xcb] = writeN(0xcb, 8, (Buffer_prototype.writeDoubleBE || writeDoubleBE), true);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = write1(0xcc);
  token[0xcd] = write2(0xcd);
  token[0xce] = write4(0xce);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = write1(0xd0);
  token[0xd1] = write2(0xd1);
  token[0xd2] = write4(0xd2);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = write1(0xd9);
  token[0xda] = write2(0xda);
  token[0xdb] = write4(0xdb);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = write2(0xdc);
  token[0xdd] = write4(0xdd);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = write2(0xde);
  token[0xdf] = write4(0xdf);

  return token;
}

// safe mode: for old browsers and who needs asserts

function init_safe() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = writeN(0xc4, 1, Buffer.prototype.writeUInt8);
  token[0xc5] = writeN(0xc5, 2, Buffer.prototype.writeUInt16BE);
  token[0xc6] = writeN(0xc6, 4, Buffer.prototype.writeUInt32BE);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = writeN(0xc7, 1, Buffer.prototype.writeUInt8);
  token[0xc8] = writeN(0xc8, 2, Buffer.prototype.writeUInt16BE);
  token[0xc9] = writeN(0xc9, 4, Buffer.prototype.writeUInt32BE);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, Buffer.prototype.writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, Buffer.prototype.writeDoubleBE);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = writeN(0xcc, 1, Buffer.prototype.writeUInt8);
  token[0xcd] = writeN(0xcd, 2, Buffer.prototype.writeUInt16BE);
  token[0xce] = writeN(0xce, 4, Buffer.prototype.writeUInt32BE);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = writeN(0xd0, 1, Buffer.prototype.writeInt8);
  token[0xd1] = writeN(0xd1, 2, Buffer.prototype.writeInt16BE);
  token[0xd2] = writeN(0xd2, 4, Buffer.prototype.writeInt32BE);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = writeN(0xd9, 1, Buffer.prototype.writeUInt8);
  token[0xda] = writeN(0xda, 2, Buffer.prototype.writeUInt16BE);
  token[0xdb] = writeN(0xdb, 4, Buffer.prototype.writeUInt32BE);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = writeN(0xdc, 2, Buffer.prototype.writeUInt16BE);
  token[0xdd] = writeN(0xdd, 4, Buffer.prototype.writeUInt32BE);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = writeN(0xde, 2, Buffer.prototype.writeUInt16BE);
  token[0xdf] = writeN(0xdf, 4, Buffer.prototype.writeUInt32BE);

  return token;
}

function write1(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(2);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset] = value;
  };
}

function write2(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(3);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function write4(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(5);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 24;
    buffer[offset++] = value >>> 16;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function writeN(type, len, method, noAssert) {
  return function(encoder, value) {
    var offset = encoder.reserve(len + 1);
    encoder.buffer[offset++] = type;
    method.call(encoder.buffer, value, offset, noAssert);
  };
}

function writeUInt64BE(value, offset) {
  new Uint64BE(this, offset, value);
}

function writeInt64BE(value, offset) {
  new Int64BE(this, offset, value);
}

function writeFloatBE(value, offset) {
  ieee754.write(this, value, offset, false, 23, 4);
}

function writeDoubleBE(value, offset) {
  ieee754.write(this, value, offset, false, 52, 8);
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// write-type.js

var IS_ARRAY = __webpack_require__(2);
var Int64Buffer = __webpack_require__(8);
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var Bufferish = __webpack_require__(0);
var BufferProto = __webpack_require__(10);
var WriteToken = __webpack_require__(56);
var uint8 = __webpack_require__(27).uint8;
var ExtBuffer = __webpack_require__(11).ExtBuffer;

var HAS_UINT8ARRAY = ("undefined" !== typeof Uint8Array);
var HAS_MAP = ("undefined" !== typeof Map);

var extmap = [];
extmap[1] = 0xd4;
extmap[2] = 0xd5;
extmap[4] = 0xd6;
extmap[8] = 0xd7;
extmap[16] = 0xd8;

exports.getWriteType = getWriteType;

function getWriteType(options) {
  var token = WriteToken.getWriteToken(options);
  var useraw = options && options.useraw;
  var binarraybuffer = HAS_UINT8ARRAY && options && options.binarraybuffer;
  var isBuffer = binarraybuffer ? Bufferish.isArrayBuffer : Bufferish.isBuffer;
  var bin = binarraybuffer ? bin_arraybuffer : bin_buffer;
  var usemap = HAS_MAP && options && options.usemap;
  var map = usemap ? map_to_map : obj_to_map;

  var writeType = {
    "boolean": bool,
    "function": nil,
    "number": number,
    "object": (useraw ? object_raw : object),
    "string": _string(useraw ? raw_head_size : str_head_size),
    "symbol": nil,
    "undefined": nil
  };

  return writeType;

  // false -- 0xc2
  // true -- 0xc3
  function bool(encoder, value) {
    var type = value ? 0xc3 : 0xc2;
    token[type](encoder, value);
  }

  function number(encoder, value) {
    var ivalue = value | 0;
    var type;
    if (value !== ivalue) {
      // float 64 -- 0xcb
      type = 0xcb;
      token[type](encoder, value);
      return;
    } else if (-0x20 <= ivalue && ivalue <= 0x7F) {
      // positive fixint -- 0x00 - 0x7f
      // negative fixint -- 0xe0 - 0xff
      type = ivalue & 0xFF;
    } else if (0 <= ivalue) {
      // uint 8 -- 0xcc
      // uint 16 -- 0xcd
      // uint 32 -- 0xce
      type = (ivalue <= 0xFF) ? 0xcc : (ivalue <= 0xFFFF) ? 0xcd : 0xce;
    } else {
      // int 8 -- 0xd0
      // int 16 -- 0xd1
      // int 32 -- 0xd2
      type = (-0x80 <= ivalue) ? 0xd0 : (-0x8000 <= ivalue) ? 0xd1 : 0xd2;
    }
    token[type](encoder, ivalue);
  }

  // uint 64 -- 0xcf
  function uint64(encoder, value) {
    var type = 0xcf;
    token[type](encoder, value.toArray());
  }

  // int 64 -- 0xd3
  function int64(encoder, value) {
    var type = 0xd3;
    token[type](encoder, value.toArray());
  }

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  // fixstr -- 0xa0 - 0xbf
  function str_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFF) ? 2 : (length <= 0xFFFF) ? 3 : 5;
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFFFF) ? 3 : 5;
  }

  function _string(head_size) {
    return string;

    function string(encoder, value) {
      // prepare buffer
      var length = value.length;
      var maxsize = 5 + length * 3;
      encoder.offset = encoder.reserve(maxsize);
      var buffer = encoder.buffer;

      // expected header size
      var expected = head_size(length);

      // expected start point
      var start = encoder.offset + expected;

      // write string
      length = BufferProto.write.call(buffer, value, start);

      // actual header size
      var actual = head_size(length);

      // move content when needed
      if (expected !== actual) {
        var targetStart = start + actual - expected;
        var end = start + length;
        BufferProto.copy.call(buffer, buffer, targetStart, start, end);
      }

      // write header
      var type = (actual === 1) ? (0xa0 + length) : (actual <= 3) ? (0xd7 + actual) : 0xdb;
      token[type](encoder, length);

      // move cursor
      encoder.offset += length;
    }
  }

  function object(encoder, value) {
    // null
    if (value === null) return nil(encoder, value);

    // Buffer
    if (isBuffer(value)) return bin(encoder, value);

    // Array
    if (IS_ARRAY(value)) return array(encoder, value);

    // int64-buffer objects
    if (Uint64BE.isUint64BE(value)) return uint64(encoder, value);
    if (Int64BE.isInt64BE(value)) return int64(encoder, value);

    // ext formats
    var packer = encoder.codec.getExtPacker(value);
    if (packer) value = packer(value);
    if (value instanceof ExtBuffer) return ext(encoder, value);

    // plain old Objects or Map
    map(encoder, value);
  }

  function object_raw(encoder, value) {
    // Buffer
    if (isBuffer(value)) return raw(encoder, value);

    // others
    object(encoder, value);
  }

  // nil -- 0xc0
  function nil(encoder, value) {
    var type = 0xc0;
    token[type](encoder, value);
  }

  // fixarray -- 0x90 - 0x9f
  // array 16 -- 0xdc
  // array 32 -- 0xdd
  function array(encoder, value) {
    var length = value.length;
    var type = (length < 16) ? (0x90 + length) : (length <= 0xFFFF) ? 0xdc : 0xdd;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    for (var i = 0; i < length; i++) {
      encode(encoder, value[i]);
    }
  }

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  function bin_buffer(encoder, value) {
    var length = value.length;
    var type = (length < 0xFF) ? 0xc4 : (length <= 0xFFFF) ? 0xc5 : 0xc6;
    token[type](encoder, length);
    encoder.send(value);
  }

  function bin_arraybuffer(encoder, value) {
    bin_buffer(encoder, new Uint8Array(value));
  }

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  function ext(encoder, value) {
    var buffer = value.buffer;
    var length = buffer.length;
    var type = extmap[length] || ((length < 0xFF) ? 0xc7 : (length <= 0xFFFF) ? 0xc8 : 0xc9);
    token[type](encoder, length);
    uint8[value.type](encoder);
    encoder.send(buffer);
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function obj_to_map(encoder, value) {
    var keys = Object.keys(value);
    var length = keys.length;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    keys.forEach(function(key) {
      encode(encoder, key);
      encode(encoder, value[key]);
    });
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function map_to_map(encoder, value) {
    if (!(value instanceof Map)) return obj_to_map(encoder, value);

    var length = value.size;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    value.forEach(function(val, key, m) {
      encode(encoder, key);
      encode(encoder, val);
    });
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw(encoder, value) {
    var length = value.length;
    var type = (length < 32) ? (0xa0 + length) : (length <= 0xFFFF) ? 0xda : 0xdb;
    token[type](encoder, length);
    encoder.send(value);
  }
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = __webpack_require__(1);

var errors = module.exports = __webpack_require__(59);

function failCheck(ExceptionConstructor, callee, messageFormat, formatArgs) {
    messageFormat = messageFormat || '';
    var message = util.format.apply(this, [messageFormat].concat(formatArgs));
    var error = new ExceptionConstructor(message);
    Error.captureStackTrace(error, callee);
    throw error;
}

function failArgumentCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalArgumentError, callee, message, formatArgs);
}

function failStateCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalStateError, callee, message, formatArgs);
}

module.exports.checkArgument = function(value, message) {
    if (!value) {
        failArgumentCheck(arguments.callee, message,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkState = function(value, message) {
    if (!value) {
        failStateCheck(arguments.callee, message,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsDef = function(value, message) {
    if (value !== undefined) {
        return value;
    }

    failArgumentCheck(arguments.callee, message ||
        'Expected value to be defined but was undefined.',
        Array.prototype.slice.call(arguments, 2));
};

module.exports.checkIsDefAndNotNull = function(value, message) {
    // Note that undefined == null.
    if (value != null) {
        return value;
    }

    failArgumentCheck(arguments.callee, message ||
        'Expected value to be defined and not null but got "' +
        typeOf(value) + '".', Array.prototype.slice.call(arguments, 2));
};

// Fixed version of the typeOf operator which returns 'null' for null values
// and 'array' for arrays.
function typeOf(value) {
    var s = typeof value;
    if (s == 'object') {
        if (!value) {
            return 'null';
        } else if (value instanceof Array) {
            return 'array';
        }
    }
    return s;
}

function typeCheck(expect) {
    return function(value, message) {
        var type = typeOf(value);

        if (type == expect) {
            return value;
        }

        failArgumentCheck(arguments.callee, message ||
            'Expected "' + expect + '" but got "' + type + '".',
            Array.prototype.slice.call(arguments, 2));
    };
}

module.exports.checkIsString = typeCheck('string');
module.exports.checkIsArray = typeCheck('array');
module.exports.checkIsNumber = typeCheck('number');
module.exports.checkIsBoolean = typeCheck('boolean');
module.exports.checkIsFunction = typeCheck('function');
module.exports.checkIsObject = typeCheck('object');


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = __webpack_require__(1);

function IllegalArgumentError(message) {
    Error.call(this, message);
    this.message = message;
}
util.inherits(IllegalArgumentError, Error);

IllegalArgumentError.prototype.name = 'IllegalArgumentError';

function IllegalStateError(message) {
    Error.call(this, message);
    this.message = message;
}
util.inherits(IllegalStateError, Error);

IllegalStateError.prototype.name = 'IllegalStateError';

module.exports.IllegalStateError = IllegalStateError;
module.exports.IllegalArgumentError = IllegalArgumentError;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PrioritySignal_1 = __webpack_require__(30);
/**
 * Allows the valueClasses to be set in MXML, e.g.
 * <signals:Signal id="nameChanged">{[String, uint]}</signals:Signal>
 */
/*[DefaultProperty("valueClasses")]*/
/**
 * Signal dispatches events to multiple listeners.
 * It is inspired by C# events and delegates, and by
 * <a target="_top" href="http://en.wikipedia.org/wiki/Signals_and_slots">signals and slots</a>
 * in Qt.
 * A Signal adds event dispatching functionality through composition and interfaces,
 * rather than inheriting from a dispatcher.
 * <br/><br/>
 * Project home: <a target="_top" href="http://github.com/robertpenner/as3-signals/">http://github.com/robertpenner/as3-signals/</a>
 */
var DeluxeSignal = (function (_super) {
    __extends(DeluxeSignal, _super);
    /**
     * Creates a DeluxeSignal instance to dispatch events on behalf of a target object.
     * @param    target The object the signal is dispatching events on behalf of.
     * @param    valueClasses Any number of class references that enable type checks in dispatch().
     * For example, new DeluxeSignal(this, String, uint)
     * would allow: signal.dispatch("the Answer", 42)
     * but not: signal.dispatch(true, 42.5)
     * nor: signal.dispatch()
     *
     * NOTE: Subclasses cannot call super.apply(null, valueClasses),
     * but this constructor has logic to support super(valueClasses).
     */
    function DeluxeSignal(target) {
        if (target === void 0) { target = null; }
        var valueClasses = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            valueClasses[_i - 1] = arguments[_i];
        }
        var _this;
        // Cannot use super.apply(null, valueClasses), so allow the subclass to call super(valueClasses).
        valueClasses = (valueClasses.length == 1 && valueClasses[0] instanceof Array) ? valueClasses[0] : valueClasses;
        _this = _super.call(this, valueClasses) || this;
        //@CHANGED - this was the first call in the constructor
        //Typescript does not allow "this" to be called before super
        _this._target = target;
        return _this;
    }
    Object.defineProperty(DeluxeSignal.prototype, "target", {
        /** @inheritDoc */
        get: function () {
            return this._target;
        },
        set: function (value) {
            if (value == this._target)
                return;
            this.removeAll();
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     * @throws ArgumentError <code>ArgumentError</code>: Incorrect number of arguments.
     * @throws ArgumentError <code>ArgumentError</code>: Value object is not an instance of the appropriate valueClasses Class.
     */
    /*override*/
    DeluxeSignal.prototype.dispatch = function () {
        var valueObjects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueObjects[_i] = arguments[_i];
        }
        // Validate value objects against pre-defined value classes.
        var numValueClasses = this._valueClasses.length;
        var numValueObjects = valueObjects.length;
        if (numValueObjects < numValueClasses) {
            throw new Error('Incorrect number of arguments. ' +
                'Expected at least ' + numValueClasses + ' but received ' +
                numValueObjects + '.');
        }
        // Cannot dispatch differently typed objects than declared classes.
        for (var i = 0; i < numValueClasses; i++) {
            // Optimized for the optimistic case that values are correct.
            if (valueObjects[i] === null || valueObjects[i].constructor === this._valueClasses[i])
                continue;
            throw new Error('Value object <' + valueObjects[i]
                + '> is not an instance of <' + this._valueClasses[i] + '>.');
        }
        // Extract and clone event object if necessary.
        var event = valueObjects[0];
        if (event) {
            if (event.target) {
                event = event.clone();
                valueObjects[0] = event;
            }
            event.target = this.target;
            event.currentTarget = this.target;
            event.signal = this;
        }
        // Broadcast to listeners.
        var slotsToProcess = this.slots;
        while (slotsToProcess.nonEmpty) {
            slotsToProcess.head.execute(valueObjects);
            slotsToProcess = slotsToProcess.tail;
        }
        // Bubble the event as far as possible.
        if (!event || !event.bubbles)
            return;
        var currentTarget = this.target;
        while (currentTarget && currentTarget.hasOwnProperty("parent")) {
            currentTarget = currentTarget["parent"];
            if (!currentTarget)
                break;
            if (currentTarget.onEventBubbled !== undefined) {
                event.currentTarget = currentTarget;
                // onEventBubbled() can stop the bubbling by returning false.
                if (currentTarget.onEventBubbled(event))
                    break;
            }
        }
    };
    return DeluxeSignal;
}(PrioritySignal_1.PrioritySignal));
exports.DeluxeSignal = DeluxeSignal;
//# sourceMappingURL=DeluxeSignal.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 */
exports.IOnceSignal = Symbol("IOnceSignal");
//# sourceMappingURL=IOnceSignal.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 */
exports.IPrioritySignal = Symbol("IPrioritySignal");
//# sourceMappingURL=IPrioritySignal.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 */
exports.ISignal = Symbol("ISignal");
//# sourceMappingURL=ISignal.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The ISlot interface defines the basic properties of a
 * listener associated with a Signal.
 *
 * @author Joa Ebert
 * @author Robert Penner
 */
exports.ISlot = Symbol("ISlot");
//# sourceMappingURL=ISlot.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Slot_1 = __webpack_require__(4);
/**
 * Allows the valueClasses to be set in MXML, e.g.
 * <signals:Signal id="nameChanged">{[String, uint]}</signals:Signal>
 */
/*[DefaultProperty("valueClasses")]*/
/**
 * A MonoSignal can have only one listener.
 */
var MonoSignal = (function () {
    /**
     * Creates a MonoSignal instance to dispatch value objects.
     * @param    valueClasses Any number of class references that enable type checks in dispatch().
     * For example, new Signal(String, uint)
     * would allow: signal.dispatch("the Answer", 42)
     * but not: signal.dispatch(true, 42.5)
     * nor: signal.dispatch()
     *
     * NOTE: Subclasses cannot call super.apply(null, valueClasses),
     * but this constructor has logic to support super(valueClasses).
     */
    function MonoSignal() {
        var valueClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueClasses[_i] = arguments[_i];
        }
        // Cannot use super.apply(null, valueClasses), so allow the subclass to call super(valueClasses).
        this.valueClasses = (valueClasses.length == 1 && valueClasses[0] instanceof Array) ? valueClasses[0] : valueClasses;
    }
    Object.defineProperty(MonoSignal.prototype, "valueClasses", {
        /**
         * @inheritDoc
         * @throws ArgumentError <code>ArgumentError</code>: Invalid valueClasses argument: item at index should be a Class but was not.
         */
        /*[ArrayElementType("Class")]*/
        get: function () {
            return this._valueClasses;
        },
        set: function (value) {
            // Clone so the Array cannot be affected from outside.
            this._valueClasses = value ? value.slice() : [];
            for (var i = this._valueClasses.length; i--;) {
                if (!(this._valueClasses[i] instanceof Object)) {
                    throw new Error('Invalid valueClasses argument: ' +
                        'item at index ' + i + ' should be a Class but was:<' +
                        this._valueClasses[i] + '>.' + this._valueClasses[i]); //@CHANGED - temp replacement for getQualifiedClassByName()
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonoSignal.prototype, "numListeners", {
        /** @inheritDoc */
        get: function () {
            return this.slot ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     * @throws flash.errors.IllegalOperationError <code>IllegalOperationError</code>: You cannot add or addOnce with a listener already added, remove the current listener first.
     * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>.
     */
    MonoSignal.prototype.add = function (listener) {
        return this.registerListener(listener);
    };
    /**
     * @inheritDoc
     * @throws flash.errors.IllegalOperationError <code>IllegalOperationError</code>: You cannot add or addOnce with a listener already added, remove the current listener first.
     * @throws ArgumentError <code>ArgumentError</code>: Given listener is <code>null</code>.
     */
    MonoSignal.prototype.addOnce = function (listener) {
        return this.registerListener(listener, true);
    };
    /** @inheritDoc */
    MonoSignal.prototype.remove = function (listener) {
        if (this.slot && this.slot.listener == listener) {
            var theSlot = this.slot;
            this.slot = null;
            return theSlot;
        }
        return null;
    };
    /** @inheritDoc */
    MonoSignal.prototype.removeAll = function () {
        if (this.slot)
            this.slot.remove();
    };
    /**
     * @inheritDoc
     * @throws ArgumentError <code>ArgumentError</code>: Incorrect number of arguments.
     * @throws ArgumentError <code>ArgumentError</code>: Value object is not an instance of the appropriate valueClasses Class.
     */
    MonoSignal.prototype.dispatch = function () {
        var valueObjects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueObjects[_i] = arguments[_i];
        }
        // If valueClasses is empty, value objects are not type-checked.
        var numValueClasses = this._valueClasses.length;
        var numValueObjects = valueObjects.length;
        // Cannot dispatch fewer objects than declared classes.
        if (numValueObjects < numValueClasses) {
            throw new Error('Incorrect number of arguments. ' +
                'Expected at least ' + numValueClasses + ' but received ' +
                numValueObjects + '.');
        }
        // Cannot dispatch differently typed objects than declared classes.
        for (var i = 0; i < numValueClasses; i++) {
            // Optimized for the optimistic case that values are correct.
            if (valueObjects[i] === null ||
                (valueObjects[i] instanceof this._valueClasses[i] || valueObjects[i].constructor === this._valueClasses[i])) {
                continue;
            }
            throw new Error('Value object <' + valueObjects[i]
                + '> is not an instance of <' + this._valueClasses[i] + '>.');
        }
        // Broadcast to the one listener.
        if (this.slot) {
            this.slot.execute(valueObjects);
        }
    };
    MonoSignal.prototype.registerListener = function (listener, once) {
        if (once === void 0) { once = false; }
        if (this.slot) {
            // If the listener exits previously added, definitely don't add it.
            throw new Error('You cannot add or addOnce with a listener already added, remove the current listener first.');
        }
        return (this.slot = new Slot_1.Slot(listener, this, once));
    };
    return MonoSignal;
}());
exports.MonoSignal = MonoSignal;
//# sourceMappingURL=MonoSignal.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OnceSignal_1 = __webpack_require__(15);
var Promise = (function (_super) {
    __extends(Promise, _super);
    function Promise() {
        return _super.apply(this, arguments) || this;
    }
    /** @inheritDoc */
    /*override*/
    Promise.prototype.addOnce = function (listener) {
        var slot = _super.prototype.addOnce.call(this, listener);
        if (this.isDispatched) {
            slot.execute(this.valueObjects);
            slot.remove();
        }
        return slot;
    };
    /**
     * @inheritDoc
     * @throws flash.errors.IllegalOperationError <code>IllegalOperationError</code>: You cannot dispatch() a Promise more than once
     */
    /*override*/
    Promise.prototype.dispatch = function () {
        var valueObjects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valueObjects[_i] = arguments[_i];
        }
        if (this.isDispatched) {
            throw new Error("You cannot dispatch() a Promise more than once");
        }
        else {
            this.isDispatched = true;
            this.valueObjects = valueObjects;
            _super.prototype.dispatch.apply(this, valueObjects);
        }
    };
    return Promise;
}(OnceSignal_1.OnceSignal));
exports.Promise = Promise;
//# sourceMappingURL=Promise.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * @see org.osflash.signals.events.IEvent
 * Documentation for the event interface being maintained in IEvent to avoid duplication for now.
 */
var GenericEvent = (function () {
    function GenericEvent(bubbles) {
        if (bubbles === void 0) { bubbles = false; }
        this._bubbles = bubbles;
    }
    Object.defineProperty(GenericEvent.prototype, "signal", {
        /** @inheritDoc */
        get: function () {
            return this._signal;
        },
        set: function (value) {
            this._signal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericEvent.prototype, "target", {
        /** @inheritDoc */
        get: function () {
            return this._target;
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericEvent.prototype, "currentTarget", {
        /** @inheritDoc */
        get: function () {
            return this._currentTarget;
        },
        set: function (value) {
            this._currentTarget = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericEvent.prototype, "bubbles", {
        /** @inheritDoc */
        get: function () {
            return this._bubbles;
        },
        set: function (value) {
            this._bubbles = value;
        },
        enumerable: true,
        configurable: true
    });
    /** @inheritDoc */
    GenericEvent.prototype.clone = function () {
        return new GenericEvent(this._bubbles);
    };
    return GenericEvent;
}());
exports.GenericEvent = GenericEvent;
//# sourceMappingURL=GenericEvent.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

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
var websocket_js_1 = __webpack_require__(73);
var msgpack = __webpack_require__(9);
var Connection = (function (_super) {
    __extends(Connection, _super);
    function Connection(url, query) {
        if (query === void 0) { query = {}; }
        var _this = _super.call(this, url) || this;
        _this._enqueuedCalls = [];
        _this.binaryType = "arraybuffer";
        return _this;
    }
    Connection.prototype.onOpenCallback = function (event) {
        _super.prototype.onOpenCallback.call(this);
        if (this._enqueuedCalls.length > 0) {
            for (var i = 0; i < this._enqueuedCalls.length; i++) {
                var _a = this._enqueuedCalls[i], method = _a[0], args = _a[1];
                this[method].apply(this, args);
            }
        }
    };
    Connection.prototype.send = function (data) {
        if (this.ws.readyState == WebSocket.OPEN) {
            return _super.prototype.send.call(this, msgpack.encode(data));
        }
        else {
            console.warn("colyseus.js: trying to send data while in " + this.ws.readyState + " state");
            // WebSocket not connected.
            // Enqueue data to be sent when readyState == OPEN
            this._enqueuedCalls.push(['send', [data]]);
        }
    };
    return Connection;
}(websocket_js_1.default));
exports.Connection = Connection;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = __webpack_require__(34);
exports.Client = Client_1.Client;
var Protocol_1 = __webpack_require__(5);
exports.Protocol = Protocol_1.Protocol;
var Room_1 = __webpack_require__(16);
exports.Room = Room_1.Room;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var backoff=__webpack_require__(35);var WebSocketClient=function(){/**
   * @param url DOMString The URL to which to connect; this should be the URL to which the WebSocket server will respond.
   * @param protocols DOMString|DOMString[] Either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to be able to handle different types of interactions depending on the specified protocol). If you don't specify a protocol string, an empty string is assumed.
   */function WebSocketClient(url,protocols){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_classCallCheck(this,WebSocketClient);this.url=url;this.protocols=protocols;this.reconnectEnabled=true;this.listeners={};this.backoff=backoff[options.backoff||'fibonacci'](options);this.backoff.on('backoff',this.onBackoffStart.bind(this));this.backoff.on('ready',this.onBackoffReady.bind(this));this.backoff.on('fail',this.onBackoffFail.bind(this));this.open();}_createClass(WebSocketClient,[{key:'open',value:function open(){var reconnect=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;this.isReconnect=reconnect;this.ws=new WebSocket(this.url,this.protocols);this.ws.onclose=this.onCloseCallback.bind(this);this.ws.onerror=this.onErrorCallback.bind(this);this.ws.onmessage=this.onMessageCallback.bind(this);this.ws.onopen=this.onOpenCallback.bind(this);}/**
   * @ignore
   */},{key:'onBackoffStart',value:function onBackoffStart(number,delay){}/**
   * @ignore
   */},{key:'onBackoffReady',value:function onBackoffReady(number,delay){// console.log("onBackoffReady", number + ' ' + delay + 'ms');
this.open(true);}/**
   * @ignore
   */},{key:'onBackoffFail',value:function onBackoffFail(){}/**
   * @ignore
   */},{key:'onCloseCallback',value:function onCloseCallback(){if(!this.isReconnect&&this.listeners['onclose'])this.listeners['onclose'].apply(null,arguments);if(this.reconnectEnabled){this.backoff.backoff();}}/**
   * @ignore
   */},{key:'onErrorCallback',value:function onErrorCallback(){if(this.listeners['onerror'])this.listeners['onerror'].apply(null,arguments);}/**
   * @ignore
   */},{key:'onMessageCallback',value:function onMessageCallback(){if(this.listeners['onmessage'])this.listeners['onmessage'].apply(null,arguments);}/**
   * @ignore
   */},{key:'onOpenCallback',value:function onOpenCallback(){if(this.listeners['onopen'])this.listeners['onopen'].apply(null,arguments);if(this.isReconnect&&this.listeners['onreconnect'])this.listeners['onreconnect'].apply(null,arguments);this.isReconnect=false;}/**
   * The number of bytes of data that have been queued using calls to send()
   * but not yet transmitted to the network. This value does not reset to zero
   * when the connection is closed; if you keep calling send(), this will
   * continue to climb.
   *
   * @type unsigned long
   * @readonly
   */},{key:'close',/**
   * Closes the WebSocket connection or connection attempt, if any. If the
   * connection is already CLOSED, this method does nothing.
   *
   * @param code A numeric value indicating the status code explaining why the connection is being closed. If this parameter is not specified, a default value of 1000 (indicating a normal "transaction complete" closure) is assumed. See the list of status codes on the CloseEvent page for permitted values.
   * @param reason A human-readable string explaining why the connection is closing. This string must be no longer than 123 bytes of UTF-8 text (not characters).
   *
   * @return void
   */value:function close(code,reason){if(typeof code=='undefined'){code=1000;}this.reconnectEnabled=false;this.ws.close(code,reason);}/**
   * Transmits data to the server over the WebSocket connection.
   * @param data DOMString|ArrayBuffer|Blob
   * @return void
   */},{key:'send',value:function send(data){this.ws.send(data);}/**
   * An event listener to be called when the WebSocket connection's readyState changes to CLOSED. The listener receives a CloseEvent named "close".
   * @param listener EventListener
   */},{key:'bufferedAmount',get:function get(){return this.ws.bufferedAmount;}/**
   * The current state of the connection; this is one of the Ready state constants.
   * @type unsigned short
   * @readonly
   */},{key:'readyState',get:function get(){return this.ws.readyState;}/**
   * A string indicating the type of binary data being transmitted by the
   * connection. This should be either "blob" if DOM Blob objects are being
   * used or "arraybuffer" if ArrayBuffer objects are being used.
   * @type DOMString
   */},{key:'binaryType',get:function get(){return this.ws.binaryType;},set:function set(binaryType){this.ws.binaryType=binaryType;}/**
   * The extensions selected by the server. This is currently only the empty
   * string or a list of extensions as negotiated by the connection.
   * @type DOMString
   */},{key:'extensions',get:function get(){return this.ws.extensions;},set:function set(extensions){this.ws.extensions=extensions;}/**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when
   * creating the WebSocket object.
   * @type DOMString
   */},{key:'protocol',get:function get(){return this.ws.protocol;},set:function set(protocol){this.ws.protocol=protocol;}},{key:'onclose',set:function set(listener){this.listeners['onclose']=listener;},get:function get(){return this.listeners['onclose'];}/**
   * An event listener to be called when an error occurs. This is a simple event named "error".
   * @param listener EventListener
   */},{key:'onerror',set:function set(listener){this.listeners['onerror']=listener;},get:function get(){return this.listeners['onerror'];}/**
   * An event listener to be called when a message is received from the server. The listener receives a MessageEvent named "message".
   * @param listener EventListener
   */},{key:'onmessage',set:function set(listener){this.listeners['onmessage']=listener;},get:function get(){return this.listeners['onmessage'];}/**
   * An event listener to be called when the WebSocket connection's readyState changes to OPEN; this indicates that the connection is ready to send and receive data. The event is a simple one with the name "open".
   * @param listener EventListener
   */},{key:'onopen',set:function set(listener){this.listeners['onopen']=listener;},get:function get(){return this.listeners['onopen'];}/**
   * @param listener EventListener
   */},{key:'onreconnect',set:function set(listener){this.listeners['onreconnect']=listener;},get:function get(){return this.listeners['onreconnect'];}}]);return WebSocketClient;}();/**
 * The connection is not yet open.
 */WebSocketClient.CONNECTING=WebSocket.CONNECTING;/**
 * The connection is open and ready to communicate.
 */WebSocketClient.OPEN=WebSocket.OPEN;/**
 * The connection is in the process of closing.
 */WebSocketClient.CLOSING=WebSocket.CLOSING;/**
 * The connection is closed or couldn't be opened.
 */WebSocketClient.CLOSED=WebSocket.CLOSED;exports.default=WebSocketClient;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQ4Yzg4ODMxMGZmYTQyN2FlYjUiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2J1ZmZlcmlzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2NvZGVjLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaWduYWxzLmpzL2xpYi9vcmcvb3NmbGFzaC9zaWduYWxzL1Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb3RvY29sLnRzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbnQ2NC1idWZmZXIvaW50NjQtYnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9idWZmZXJpc2gtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2V4dC1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL3JlYWQtY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvd3JpdGUtY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ByZWNvbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaWduYWxzLmpzL2xpYi9vcmcvb3NmbGFzaC9zaWduYWxzL09uY2VTaWduYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWNrb2ZmL2xpYi9iYWNrb2ZmLmpzIiwid2VicGFjazovLy8uL34vYmFja29mZi9saWIvc3RyYXRlZ3kvZmlib25hY2NpLmpzIiwid2VicGFjazovLy8uL34vYmFja29mZi9saWIvc3RyYXRlZ3kvc3RyYXRlZ3kuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudC1saXRlL2V2ZW50LWxpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2RlY29kZS1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvZW5jb2RlLWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9mbGV4LWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvcmVhZC1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL3dyaXRlLXVpbnQ4LmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvfi9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaWduYWxzLmpzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvUHJpb3JpdHlTaWduYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaWduYWxzLmpzL2xpYi9vcmcvb3NmbGFzaC9zaWduYWxzL1NpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvU2xvdExpc3QuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xpZW50LnRzIiwid2VicGFjazovLy8uL34vYmFja29mZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhY2tvZmYvbGliL2Z1bmN0aW9uX2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWNrb2ZmL2xpYi9zdHJhdGVneS9leHBvbmVudGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nsb2NrLmpzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWx0YS1saXN0ZW5lci9saWIvRGVsdGFDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWx0YS1saXN0ZW5lci9saWIvRXhwbGljaXRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWx0YS1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3NzaWwtZGVsdGEvZm9zc2lsLWRlbHRhLmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9idWZmZXItZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9idWZmZXItbGl0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvYnVmZmVyaXNoLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9idWZmZXJpc2gtYnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9idWZmZXJpc2gtdWludDhhcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvY29kZWMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2RlY29kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2VuY29kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2V4dC1wYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tc2dwYWNrLWxpdGUvbGliL2V4dC11bnBhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvZXh0LmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi9yZWFkLXRva2VuLmpzIiwid2VicGFjazovLy8uL34vbXNncGFjay1saXRlL2xpYi93cml0ZS10b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L21zZ3BhY2stbGl0ZS9saWIvd3JpdGUtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ByZWNvbmQvbGliL2NoZWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3ByZWNvbmQvbGliL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvRGVsdXhlU2lnbmFsLmpzIiwid2VicGFjazovLy8uL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9JT25jZVNpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvSVByaW9yaXR5U2lnbmFsLmpzIiwid2VicGFjazovLy8uL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9JU2lnbmFsLmpzIiwid2VicGFjazovLy8uL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9JU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvTW9ub1NpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvZXZlbnRzL0dlbmVyaWNFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJzb2NrZXQuanMvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsQzs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDemtCQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDhCQUE4QixhQUFhOzs7Ozs7OztBQ2xFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZ0M7Ozs7Ozs7QUNwTEE7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1REFBdUQ7Ozs7Ozs7QUNoQnhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLFFBQVEsVUFBVTs7QUFFbEI7QUFDQTs7Ozs7OztBQ25GQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLGlEQUFpRDtBQUNqRCxrREFBa0Q7QUFDbEQsT0FBTztBQUNQLDRDQUE0QztBQUM1QyxPQUFPO0FBQ1AsNENBQTRDO0FBQzVDLE9BQU87QUFDUCwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLDRGQUE0Rjs7Ozs7Ozs7QUNwUzdGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDVEE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JGQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEtBQUs7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7O0FDekpBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQ0FBbUMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsaUNBQWlDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7QUNoSEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSw2QkFBNkIsSUFBSSxFQUFFO0FBQ25DLCtCQUErQixJQUFJLEVBQUU7QUFDckMsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGVBQWUsVUFBVTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsZUFBZSxVQUFVO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7QUNuTEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ1ZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDcExBOztBQUVBOztBQUVBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzV2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUMsa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtDOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7O0FDL01BOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7OztBQ3BCQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpQ0FBaUM7QUFDakYsZ0RBQWdELGlDQUFpQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxzQ0FBc0MsRUFBRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7QUNqRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDN0xBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDakNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywwRUFBMEU7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0NBQStDO0FBQzdFLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0EsOEJBQThCLDZFQUE2RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFFBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQXVEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0Esa0NBQWtDLHVEQUF1RDtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7O0FDNU5BO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQW1CLEVBQUU7QUFDL0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRCxxREFBcUQsUUFBUTtBQUM3RDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixpREFBaUQsUUFBUTtBQUN6RCxzREFBc0QsUUFBUTtBQUM5RDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2Qzs7Ozs7OztBQ2pFQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYiw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsd0JBQXdCLEVBQUU7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUSxlQUFlO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLHFCQUFxQjtBQUNsQztBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7OztBQ2pjRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNySUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLEdBQUc7QUFDSCw2QkFBNkI7QUFDN0I7QUFDQTs7Ozs7OztBQzdDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNsREE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1QkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseURBQXFEO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0VBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUFxRDtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJEOzs7Ozs7QUN4QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7QUN2THRDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0M7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0M7Ozs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUM7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0M7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUM3Q0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ0xhLDRDQUE0QyxXQUFXLEVBQUUsNEJBQTRCLHdDQUF3QyxZQUFZLGVBQWUsS0FBSyx3QkFBd0IsbURBQW1ELDZCQUE2QixpREFBaUQsMERBQTBELG9EQUFvRCxpRUFBaUUseURBQXlELHNCQUFzQixHQUFHLCtDQUErQyx1Q0FBdUMsMkRBQTJELG9DQUErQiwrQkFBK0I7QUFDbnhCLHNEQUFzRDtBQUN0RDtBQUNBLDZDQUE2Qyx5RUFBeUUsc0NBQXNDLGFBQWEseUJBQXlCLDJCQUEyQixrQkFBa0IsNERBQTRELDBEQUEwRCx3REFBd0Qsc0RBQXNELGFBQWEsK0JBQStCLGlDQUFpQyw4RUFBOEUsMkJBQTJCLCtDQUErQyxnREFBZ0QsZ0RBQWdELG9EQUFvRCwrQ0FBK0M7QUFDMzNCO0FBQ0EsTUFBTSxFQUFFLGtFQUFrRTtBQUMxRTtBQUNBLE1BQU0sRUFBRSxpRUFBaUU7QUFDekUsaUJBQWlCO0FBQ2pCO0FBQ0EsTUFBTSxFQUFFLG9EQUFvRDtBQUM1RDtBQUNBLE1BQU0sRUFBRSx1REFBdUQsZ0dBQWdHLDBCQUEwQix5QkFBeUI7QUFDbE47QUFDQSxNQUFNLEVBQUUsdURBQXVELDhFQUE4RTtBQUM3STtBQUNBLE1BQU0sRUFBRSwyREFBMkQsa0ZBQWtGO0FBQ3JKO0FBQ0EsTUFBTSxFQUFFLHFEQUFxRCwyRUFBMkUsdUdBQXVHLHdCQUF3QjtBQUN2UTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNkJBQTZCLFdBQVcsNEJBQTRCLDRCQUE0QjtBQUN2STtBQUNBO0FBQ0E7QUFDQSxNQUFNLEVBQUUscUNBQXFDLG9CQUFvQjtBQUNqRTtBQUNBO0FBQ0EsTUFBTSxFQUFFLHdDQUF3QywrQkFBK0I7QUFDL0UseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxNQUFNLEVBQUUsb0NBQW9DLDJCQUEyQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSxvQ0FBb0MsMkJBQTJCLDhCQUE4QiwrQkFBK0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFLG9DQUFvQywyQkFBMkIsOEJBQThCLCtCQUErQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSxrQ0FBa0MseUJBQXlCLDRCQUE0Qiw0QkFBNEIsRUFBRSx5Q0FBeUMsb0NBQW9DLG9CQUFvQixrQ0FBa0M7QUFDaFE7QUFDQTtBQUNBLE1BQU0sRUFBRSx5Q0FBeUMsb0NBQW9DLG9CQUFvQixrQ0FBa0M7QUFDM0k7QUFDQTtBQUNBLE1BQU0sRUFBRSwyQ0FBMkMsc0NBQXNDLG9CQUFvQixvQ0FBb0M7QUFDakosK0ZBQStGO0FBQy9GO0FBQ0EsTUFBTSxFQUFFLHdDQUF3QyxtQ0FBbUMsb0JBQW9CLGlDQUFpQztBQUN4STtBQUNBLE1BQU0sRUFBRSw2Q0FBNkMsd0NBQXdDLG9CQUFvQix1Q0FBdUMsR0FBRyx3QkFBd0IsR0FBRztBQUN0TDtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLHVDQUF1QztBQUN2QztBQUNBLDZDQUE2QztBQUM3QztBQUNBLDJDQUEyQyxnQyIsImZpbGUiOiJjb2x5c2V1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVkOGM4ODgzMTBmZmE0MjdhZWI1IiwiLy8gYnVmZmVyaXNoLmpzXG5cbnZhciBCdWZmZXIgPSBleHBvcnRzLmdsb2JhbCA9IHJlcXVpcmUoXCIuL2J1ZmZlci1nbG9iYWxcIik7XG52YXIgaGFzQnVmZmVyID0gZXhwb3J0cy5oYXNCdWZmZXIgPSBCdWZmZXIgJiYgISFCdWZmZXIuaXNCdWZmZXI7XG52YXIgaGFzQXJyYXlCdWZmZXIgPSBleHBvcnRzLmhhc0FycmF5QnVmZmVyID0gKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBBcnJheUJ1ZmZlcik7XG5cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gcmVxdWlyZShcImlzYXJyYXlcIik7XG5leHBvcnRzLmlzQXJyYXlCdWZmZXIgPSBoYXNBcnJheUJ1ZmZlciA/IGlzQXJyYXlCdWZmZXIgOiBfZmFsc2U7XG52YXIgaXNCdWZmZXIgPSBleHBvcnRzLmlzQnVmZmVyID0gaGFzQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogX2ZhbHNlO1xudmFyIGlzVmlldyA9IGV4cG9ydHMuaXNWaWV3ID0gaGFzQXJyYXlCdWZmZXIgPyAoQXJyYXlCdWZmZXIuaXNWaWV3IHx8IF9pcyhcIkFycmF5QnVmZmVyXCIsIFwiYnVmZmVyXCIpKSA6IF9mYWxzZTtcblxuZXhwb3J0cy5hbGxvYyA9IGFsbG9jO1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG5leHBvcnRzLmZyb20gPSBmcm9tO1xuXG52YXIgQnVmZmVyQXJyYXkgPSBleHBvcnRzLkFycmF5ID0gcmVxdWlyZShcIi4vYnVmZmVyaXNoLWFycmF5XCIpO1xudmFyIEJ1ZmZlckJ1ZmZlciA9IGV4cG9ydHMuQnVmZmVyID0gcmVxdWlyZShcIi4vYnVmZmVyaXNoLWJ1ZmZlclwiKTtcbnZhciBCdWZmZXJVaW50OEFycmF5ID0gZXhwb3J0cy5VaW50OEFycmF5ID0gcmVxdWlyZShcIi4vYnVmZmVyaXNoLXVpbnQ4YXJyYXlcIik7XG52YXIgQnVmZmVyUHJvdG8gPSBleHBvcnRzLnByb3RvdHlwZSA9IHJlcXVpcmUoXCIuL2J1ZmZlcmlzaC1wcm90b1wiKTtcblxuLyoqXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fEFycmF5QnVmZmVyfEJ1ZmZlcnxTdHJpbmd9XG4gKiBAcmV0dXJucyB7QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gZnJvbSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF1dG8odGhpcykuZnJvbSh2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gc2l6ZSB7TnVtYmVyfVxuICogQHJldHVybnMge0J1ZmZlcnxVaW50OEFycmF5fEFycmF5fVxuICovXG5cbmZ1bmN0aW9uIGFsbG9jKHNpemUpIHtcbiAgcmV0dXJuIGF1dG8odGhpcykuYWxsb2Moc2l6ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIGxpc3Qge0FycmF5fSBhcnJheSBvZiAoQnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXkpc1xuICogQHBhcmFtIFtsZW5ndGhdXG4gKiBAcmV0dXJucyB7QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gY29uY2F0KGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IDA7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaXN0LCBkcnlydW4pO1xuICB9XG4gIHZhciByZWYgPSAodGhpcyAhPT0gZXhwb3J0cykgJiYgdGhpcyB8fCBsaXN0WzBdO1xuICB2YXIgcmVzdWx0ID0gYWxsb2MuY2FsbChyZWYsIGxlbmd0aCk7XG4gIHZhciBvZmZzZXQgPSAwO1xuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpc3QsIGFwcGVuZCk7XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gZHJ5cnVuKGJ1ZmZlcikge1xuICAgIGxlbmd0aCArPSBidWZmZXIubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kKGJ1ZmZlcikge1xuICAgIG9mZnNldCArPSBCdWZmZXJQcm90by5jb3B5LmNhbGwoYnVmZmVyLCByZXN1bHQsIG9mZnNldCk7XG4gIH1cbn1cblxudmFyIF9pc0FycmF5QnVmZmVyID0gX2lzKFwiQXJyYXlCdWZmZXJcIik7XG5cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCBfaXNBcnJheUJ1ZmZlcih2YWx1ZSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmcm9tU3RyaW5nKHZhbHVlKSB7XG4gIHZhciBleHBlY3RlZCA9IHZhbHVlLmxlbmd0aCAqIDM7XG4gIHZhciB0aGF0ID0gYWxsb2MuY2FsbCh0aGlzLCBleHBlY3RlZCk7XG4gIHZhciBhY3R1YWwgPSBCdWZmZXJQcm90by53cml0ZS5jYWxsKHRoYXQsIHZhbHVlKTtcbiAgaWYgKGV4cGVjdGVkICE9PSBhY3R1YWwpIHtcbiAgICB0aGF0ID0gQnVmZmVyUHJvdG8uc2xpY2UuY2FsbCh0aGF0LCAwLCBhY3R1YWwpO1xuICB9XG4gIHJldHVybiB0aGF0O1xufVxuXG5mdW5jdGlvbiBhdXRvKHRoYXQpIHtcbiAgcmV0dXJuIGlzQnVmZmVyKHRoYXQpID8gQnVmZmVyQnVmZmVyXG4gICAgOiBpc1ZpZXcodGhhdCkgPyBCdWZmZXJVaW50OEFycmF5XG4gICAgOiBpc0FycmF5KHRoYXQpID8gQnVmZmVyQXJyYXlcbiAgICA6IGhhc0J1ZmZlciA/IEJ1ZmZlckJ1ZmZlclxuICAgIDogaGFzQXJyYXlCdWZmZXIgPyBCdWZmZXJVaW50OEFycmF5XG4gICAgOiBCdWZmZXJBcnJheTtcbn1cblxuZnVuY3Rpb24gX2ZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9pcyhuYW1lLCBrZXkpIHtcbiAgLyoganNoaW50IGVxbnVsbDp0cnVlICovXG4gIG5hbWUgPSBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCI7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgIT0gbnVsbCkgJiYge30udG9TdHJpbmcuY2FsbChrZXkgPyB2YWx1ZVtrZXldIDogdmFsdWUpID09PSBuYW1lO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2J1ZmZlcmlzaC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdXRpbC91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY29kZWMtYmFzZS5qc1xuXG52YXIgSVNfQVJSQVkgPSByZXF1aXJlKFwiaXNhcnJheVwiKTtcblxuZXhwb3J0cy5jcmVhdGVDb2RlYyA9IGNyZWF0ZUNvZGVjO1xuZXhwb3J0cy5pbnN0YWxsID0gaW5zdGFsbDtcbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuXG52YXIgQnVmZmVyaXNoID0gcmVxdWlyZShcIi4vYnVmZmVyaXNoXCIpO1xuXG5mdW5jdGlvbiBDb2RlYyhvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2RlYykpIHJldHVybiBuZXcgQ29kZWMob3B0aW9ucyk7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuaW5pdCgpO1xufVxuXG5Db2RlYy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnVpbnQ4YXJyYXkpIHtcbiAgICB0aGlzLmJ1ZmZlcmlzaCA9IEJ1ZmZlcmlzaC5VaW50OEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBpbnN0YWxsKHByb3BzKSB7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIENvZGVjLnByb3RvdHlwZVtrZXldID0gYWRkKENvZGVjLnByb3RvdHlwZVtrZXldLCBwcm9wc1trZXldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGQoYSwgYikge1xuICByZXR1cm4gKGEgJiYgYikgPyBhYiA6IChhIHx8IGIpO1xuXG4gIGZ1bmN0aW9uIGFiKCkge1xuICAgIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGpvaW4oZmlsdGVycykge1xuICBmaWx0ZXJzID0gZmlsdGVycy5zbGljZSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmaWx0ZXJzLnJlZHVjZShpdGVyYXRvciwgdmFsdWUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGl0ZXJhdG9yKHZhbHVlLCBmaWx0ZXIpIHtcbiAgICByZXR1cm4gZmlsdGVyKHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXIoZmlsdGVyKSB7XG4gIHJldHVybiBJU19BUlJBWShmaWx0ZXIpID8gam9pbihmaWx0ZXIpIDogZmlsdGVyO1xufVxuXG4vLyBAcHVibGljXG4vLyBtc2dwYWNrLmNyZWF0ZUNvZGVjKClcblxuZnVuY3Rpb24gY3JlYXRlQ29kZWMob3B0aW9ucykge1xuICByZXR1cm4gbmV3IENvZGVjKG9wdGlvbnMpO1xufVxuXG4vLyBkZWZhdWx0IHNoYXJlZCBjb2RlY1xuXG5leHBvcnRzLnByZXNldCA9IGNyZWF0ZUNvZGVjKHtwcmVzZXQ6IHRydWV9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2NvZGVjLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFRoZSBTbG90IGNsYXNzIHJlcHJlc2VudHMgYSBzaWduYWwgc2xvdC5cbiAqXG4gKiBAYXV0aG9yIFJvYmVydCBQZW5uZXJcbiAqIEBhdXRob3IgSm9hIEViZXJ0XG4gKi9cbnZhciBTbG90ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IFNsb3Qgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBsaXN0ZW5lciBhc3NvY2lhdGVkIHdpdGggdGhlIHNsb3QuXG4gICAgICogQHBhcmFtIHNpZ25hbCBUaGUgc2lnbmFsIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2xvdC5cbiAgICAgKiBAcGFyYW0gb25jZSBXaGV0aGVyIG9yIG5vdCB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGV4ZWN1dGVkIG9ubHkgb25jZS5cbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgVGhlIHByaW9yaXR5IG9mIHRoZSBzbG90LlxuICAgICAqXG4gICAgICogQHRocm93cyBBcmd1bWVudEVycm9yIDxjb2RlPkFyZ3VtZW50RXJyb3I8L2NvZGU+OiBHaXZlbiBsaXN0ZW5lciBpcyA8Y29kZT5udWxsPC9jb2RlPi5cbiAgICAgKiBAdGhyb3dzIEVycm9yIDxjb2RlPkVycm9yPC9jb2RlPjogSW50ZXJuYWwgc2lnbmFsIHJlZmVyZW5jZSBoYXMgbm90IGJlZW4gc2V0IHlldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTbG90KGxpc3RlbmVyLCBzaWduYWwsIG9uY2UsIHByaW9yaXR5KSB7XG4gICAgICAgIGlmIChvbmNlID09PSB2b2lkIDApIHsgb25jZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdm9pZCAwKSB7IHByaW9yaXR5ID0gMDsgfVxuICAgICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fb25jZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IDA7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICAgIHRoaXMuX29uY2UgPSBvbmNlO1xuICAgICAgICB0aGlzLl9zaWduYWwgPSBzaWduYWw7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudmVyaWZ5TGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNsb3QucHJvdG90eXBlLmV4ZWN1dGUwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2VuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLl9vbmNlKVxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmFtcyAmJiB0aGlzLl9wYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lci5hcHBseShudWxsLCB0aGlzLl9wYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNsb3QucHJvdG90eXBlLmV4ZWN1dGUxID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fZW5hYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuX29uY2UpXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICBpZiAodGhpcy5fcGFyYW1zICYmIHRoaXMuX3BhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyLmFwcGx5KG51bGwsIFt2YWx1ZV0uY29uY2F0KHRoaXMuX3BhcmFtcykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyKHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2xvdC5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICh2YWx1ZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5fb25jZSlcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgcGFyYW1ldGVycywgYWRkIHRoZW0gdG8gdGhlIHZhbHVlT2JqZWN0XG4gICAgICAgIC8vIE5vdGU6IFRoaXMgY291bGQgYmUgZXhwZW5zaXZlIGlmIHdlJ3JlIGFmdGVyIHRoZSBmYXN0ZXN0IGRpc3BhdGNoIHBvc3NpYmxlLlxuICAgICAgICBpZiAodGhpcy5fcGFyYW1zICYmIHRoaXMuX3BhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhbHVlT2JqZWN0cyA9IHZhbHVlT2JqZWN0cy5jb25jYXQodGhpcy5fcGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOT1RFOiBzaW1wbGUgaWZzIGFyZSBmYXN0ZXIgdGhhbiBzd2l0Y2g6IGh0dHA6Ly9qYWNrc29uZHVuc3Rhbi5jb20vYXJ0aWNsZXMvMTAwN1xuICAgICAgICB2YXIgbnVtVmFsdWVPYmplY3RzID0gdmFsdWVPYmplY3RzLmxlbmd0aDtcbiAgICAgICAgaWYgKG51bVZhbHVlT2JqZWN0cyA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG51bVZhbHVlT2JqZWN0cyA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcih2YWx1ZU9iamVjdHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG51bVZhbHVlT2JqZWN0cyA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcih2YWx1ZU9iamVjdHNbMF0sIHZhbHVlT2JqZWN0c1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtVmFsdWVPYmplY3RzID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyKHZhbHVlT2JqZWN0c1swXSwgdmFsdWVPYmplY3RzWzFdLCB2YWx1ZU9iamVjdHNbMl0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXIuYXBwbHkobnVsbCwgdmFsdWVPYmplY3RzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNsb3QucHJvdG90eXBlLCBcImxpc3RlbmVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogR2l2ZW4gbGlzdGVuZXIgaXMgPGNvZGU+bnVsbDwvY29kZT4uIERpZCB5b3Ugd2FudCB0byBzZXQgZW5hYmxlZCB0byBmYWxzZSBpbnN0ZWFkP1xuICAgICAgICAgKiBAdGhyb3dzIEVycm9yIDxjb2RlPkVycm9yPC9jb2RlPjogSW50ZXJuYWwgc2lnbmFsIHJlZmVyZW5jZSBoYXMgbm90IGJlZW4gc2V0IHlldC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHaXZlbiBsaXN0ZW5lciBpcyBudWxsLlxcbkRpZCB5b3Ugd2FudCB0byBzZXQgZW5hYmxlZCB0byBmYWxzZSBpbnN0ZWFkPycpO1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlMaXN0ZW5lcih2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2xvdC5wcm90b3R5cGUsIFwib25jZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25jZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNsb3QucHJvdG90eXBlLCBcInByaW9yaXR5XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY3VycmVudCBvYmplY3QuXG4gICAgICovXG4gICAgU2xvdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIltTbG90IGxpc3RlbmVyOiBcIiArIHRoaXMuX2xpc3RlbmVyICsgXCIsIG9uY2U6IFwiICsgdGhpcy5fb25jZVxuICAgICAgICAgICAgKyBcIiwgcHJpb3JpdHk6IFwiICsgdGhpcy5fcHJpb3JpdHkgKyBcIiwgZW5hYmxlZDogXCIgKyB0aGlzLl9lbmFibGVkICsgXCJdXCI7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2xvdC5wcm90b3R5cGUsIFwiZW5hYmxlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNsb3QucHJvdG90eXBlLCBcInBhcmFtc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1zID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2xvdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9zaWduYWwucmVtb3ZlKHRoaXMuX2xpc3RlbmVyKTtcbiAgICB9O1xuICAgIFNsb3QucHJvdG90eXBlLnZlcmlmeUxpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChudWxsID09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dpdmVuIGxpc3RlbmVyIGlzIG51bGwuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5fc2lnbmFsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVybmFsIHNpZ25hbCByZWZlcmVuY2UgaGFzIG5vdCBiZWVuIHNldCB5ZXQuJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTbG90O1xufSgpKTtcbmV4cG9ydHMuU2xvdCA9IFNsb3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TbG90LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaWduYWxzLmpzL2xpYi9vcmcvb3NmbGFzaC9zaWduYWxzL1Nsb3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIFVzZSBjb2RlcyBiZXR3ZWVuIDB+MTI3IGZvciBsZXNzZXIgdGhyb3VnaHB1dCAoMSBieXRlKVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQcm90b2NvbDtcclxuKGZ1bmN0aW9uIChQcm90b2NvbCkge1xyXG4gICAgLy8gVXNlci1yZWxhdGVkICgwfjEwKVxyXG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJVU0VSX0lEXCJdID0gMV0gPSBcIlVTRVJfSURcIjtcclxuICAgIC8vIFJvb20tcmVsYXRlZCAoMTB+MjApXHJcbiAgICBQcm90b2NvbFtQcm90b2NvbFtcIkpPSU5fUk9PTVwiXSA9IDEwXSA9IFwiSk9JTl9ST09NXCI7XHJcbiAgICBQcm90b2NvbFtQcm90b2NvbFtcIkpPSU5fRVJST1JcIl0gPSAxMV0gPSBcIkpPSU5fRVJST1JcIjtcclxuICAgIFByb3RvY29sW1Byb3RvY29sW1wiTEVBVkVfUk9PTVwiXSA9IDEyXSA9IFwiTEVBVkVfUk9PTVwiO1xyXG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJST09NX0RBVEFcIl0gPSAxM10gPSBcIlJPT01fREFUQVwiO1xyXG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJST09NX1NUQVRFXCJdID0gMTRdID0gXCJST09NX1NUQVRFXCI7XHJcbiAgICBQcm90b2NvbFtQcm90b2NvbFtcIlJPT01fU1RBVEVfUEFUQ0hcIl0gPSAxNV0gPSBcIlJPT01fU1RBVEVfUEFUQ0hcIjtcclxuICAgIC8vIEdlbmVyaWMgbWVzc2FnZXMgKDUwfjYwKVxyXG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJCQURfUkVRVUVTVFwiXSA9IDUwXSA9IFwiQkFEX1JFUVVFU1RcIjtcclxufSkoUHJvdG9jb2wgPSBleHBvcnRzLlByb3RvY29sIHx8IChleHBvcnRzLlByb3RvY29sID0ge30pKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUHJvdG9jb2wudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaWVlZTc1NC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbnQ2NC1idWZmZXIuanNcblxuLypqc2hpbnQgLVcwMTggKi8gLy8gQ29uZnVzaW5nIHVzZSBvZiAnIScuXG4vKmpzaGludCAtVzAzMCAqLyAvLyBFeHBlY3RlZCBhbiBhc3NpZ25tZW50IG9yIGZ1bmN0aW9uIGNhbGwgYW5kIGluc3RlYWQgc2F3IGFuIGV4cHJlc3Npb24uXG4vKmpzaGludCAtVzA5MyAqLyAvLyBEaWQgeW91IG1lYW4gdG8gcmV0dXJuIGEgY29uZGl0aW9uYWwgaW5zdGVhZCBvZiBhbiBhc3NpZ25tZW50P1xuXG52YXIgVWludDY0QkUsIEludDY0QkUsIFVpbnQ2NExFLCBJbnQ2NExFO1xuXG4hZnVuY3Rpb24oZXhwb3J0cykge1xuICAvLyBjb25zdGFudHNcblxuICB2YXIgVU5ERUZJTkVEID0gXCJ1bmRlZmluZWRcIjtcbiAgdmFyIEJVRkZFUiA9IChVTkRFRklORUQgIT09IHR5cGVvZiBCdWZmZXIpICYmIEJ1ZmZlcjtcbiAgdmFyIFVJTlQ4QVJSQVkgPSAoVU5ERUZJTkVEICE9PSB0eXBlb2YgVWludDhBcnJheSkgJiYgVWludDhBcnJheTtcbiAgdmFyIEFSUkFZQlVGRkVSID0gKFVOREVGSU5FRCAhPT0gdHlwZW9mIEFycmF5QnVmZmVyKSAmJiBBcnJheUJ1ZmZlcjtcbiAgdmFyIFpFUk8gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBfaXNBcnJheTtcbiAgdmFyIEJJVDMyID0gNDI5NDk2NzI5NjtcbiAgdmFyIEJJVDI0ID0gMTY3NzcyMTY7XG5cbiAgLy8gc3RvcmFnZSBjbGFzc1xuXG4gIHZhciBzdG9yYWdlOyAvLyBBcnJheTtcblxuICAvLyBnZW5lcmF0ZSBjbGFzc2VzXG5cbiAgVWludDY0QkUgPSBmYWN0b3J5KFwiVWludDY0QkVcIiwgdHJ1ZSwgdHJ1ZSk7XG4gIEludDY0QkUgPSBmYWN0b3J5KFwiSW50NjRCRVwiLCB0cnVlLCBmYWxzZSk7XG4gIFVpbnQ2NExFID0gZmFjdG9yeShcIlVpbnQ2NExFXCIsIGZhbHNlLCB0cnVlKTtcbiAgSW50NjRMRSA9IGZhY3RvcnkoXCJJbnQ2NExFXCIsIGZhbHNlLCBmYWxzZSk7XG5cbiAgLy8gY2xhc3MgZmFjdG9yeVxuXG4gIGZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgYmlnZW5kaWFuLCB1bnNpZ25lZCkge1xuICAgIHZhciBwb3NIID0gYmlnZW5kaWFuID8gMCA6IDQ7XG4gICAgdmFyIHBvc0wgPSBiaWdlbmRpYW4gPyA0IDogMDtcbiAgICB2YXIgcG9zMCA9IGJpZ2VuZGlhbiA/IDAgOiAzO1xuICAgIHZhciBwb3MxID0gYmlnZW5kaWFuID8gMSA6IDI7XG4gICAgdmFyIHBvczIgPSBiaWdlbmRpYW4gPyAyIDogMTtcbiAgICB2YXIgcG9zMyA9IGJpZ2VuZGlhbiA/IDMgOiAwO1xuICAgIHZhciBmcm9tUG9zaXRpdmUgPSBiaWdlbmRpYW4gPyBmcm9tUG9zaXRpdmVCRSA6IGZyb21Qb3NpdGl2ZUxFO1xuICAgIHZhciBmcm9tTmVnYXRpdmUgPSBiaWdlbmRpYW4gPyBmcm9tTmVnYXRpdmVCRSA6IGZyb21OZWdhdGl2ZUxFO1xuICAgIHZhciBwcm90byA9IEludDY0LnByb3RvdHlwZTtcbiAgICB2YXIgaXNOYW1lID0gXCJpc1wiICsgbmFtZTtcbiAgICB2YXIgX2lzSW50NjQgPSBcIl9cIiArIGlzTmFtZTtcblxuICAgIC8vIHByb3BlcnRpZXNcbiAgICBwcm90by5idWZmZXIgPSB2b2lkIDA7XG4gICAgcHJvdG8ub2Zmc2V0ID0gMDtcbiAgICBwcm90b1tfaXNJbnQ2NF0gPSB0cnVlO1xuXG4gICAgLy8gbWV0aG9kc1xuICAgIHByb3RvLnRvTnVtYmVyID0gdG9OdW1iZXI7XG4gICAgcHJvdG8udG9TdHJpbmcgPSB0b1N0cmluZztcbiAgICBwcm90by50b0pTT04gPSB0b051bWJlcjtcbiAgICBwcm90by50b0FycmF5ID0gdG9BcnJheTtcblxuICAgIC8vIGFkZCAudG9CdWZmZXIoKSBtZXRob2Qgb25seSB3aGVuIEJ1ZmZlciBhdmFpbGFibGVcbiAgICBpZiAoQlVGRkVSKSBwcm90by50b0J1ZmZlciA9IHRvQnVmZmVyO1xuXG4gICAgLy8gYWRkIC50b0FycmF5QnVmZmVyKCkgbWV0aG9kIG9ubHkgd2hlbiBVaW50OEFycmF5IGF2YWlsYWJsZVxuICAgIGlmIChVSU5UOEFSUkFZKSBwcm90by50b0FycmF5QnVmZmVyID0gdG9BcnJheUJ1ZmZlcjtcblxuICAgIC8vIGlzVWludDY0QkUsIGlzSW50NjRCRVxuICAgIEludDY0W2lzTmFtZV0gPSBpc0ludDY0O1xuXG4gICAgLy8gQ29tbW9uSlNcbiAgICBleHBvcnRzW25hbWVdID0gSW50NjQ7XG5cbiAgICByZXR1cm4gSW50NjQ7XG5cbiAgICAvLyBjb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIEludDY0KGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSwgcmFkZGl4KSB7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSW50NjQpKSByZXR1cm4gbmV3IEludDY0KGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSwgcmFkZGl4KTtcbiAgICAgIHJldHVybiBpbml0KHRoaXMsIGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSwgcmFkZGl4KTtcbiAgICB9XG5cbiAgICAvLyBpc1VpbnQ2NEJFLCBpc0ludDY0QkVcbiAgICBmdW5jdGlvbiBpc0ludDY0KGIpIHtcbiAgICAgIHJldHVybiAhIShiICYmIGJbX2lzSW50NjRdKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXplclxuICAgIGZ1bmN0aW9uIGluaXQodGhhdCwgYnVmZmVyLCBvZmZzZXQsIHZhbHVlLCByYWRkaXgpIHtcbiAgICAgIGlmIChVSU5UOEFSUkFZICYmIEFSUkFZQlVGRkVSKSB7XG4gICAgICAgIGlmIChidWZmZXIgaW5zdGFuY2VvZiBBUlJBWUJVRkZFUikgYnVmZmVyID0gbmV3IFVJTlQ4QVJSQVkoYnVmZmVyKTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQVJSQVlCVUZGRVIpIHZhbHVlID0gbmV3IFVJTlQ4QVJSQVkodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnQ2NEJFKCkgc3R5bGVcbiAgICAgIGlmICghYnVmZmVyICYmICFvZmZzZXQgJiYgIXZhbHVlICYmICFzdG9yYWdlKSB7XG4gICAgICAgIC8vIHNob3J0Y3V0IHRvIGluaXRpYWxpemUgd2l0aCB6ZXJvXG4gICAgICAgIHRoYXQuYnVmZmVyID0gbmV3QXJyYXkoWkVSTywgMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSW50NjRCRSh2YWx1ZSwgcmFkZGl4KSBzdHlsZVxuICAgICAgaWYgKCFpc1ZhbGlkQnVmZmVyKGJ1ZmZlciwgb2Zmc2V0KSkge1xuICAgICAgICB2YXIgX3N0b3JhZ2UgPSBzdG9yYWdlIHx8IEFycmF5O1xuICAgICAgICByYWRkaXggPSBvZmZzZXQ7XG4gICAgICAgIHZhbHVlID0gYnVmZmVyO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICBidWZmZXIgPSBuZXcgX3N0b3JhZ2UoOCk7XG4gICAgICB9XG5cbiAgICAgIHRoYXQuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgdGhhdC5vZmZzZXQgPSBvZmZzZXQgfD0gMDtcblxuICAgICAgLy8gSW50NjRCRShidWZmZXIsIG9mZnNldCkgc3R5bGVcbiAgICAgIGlmIChVTkRFRklORUQgPT09IHR5cGVvZiB2YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAvLyBJbnQ2NEJFKGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSwgcmFkZGl4KSBzdHlsZVxuICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBmcm9tU3RyaW5nKGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSwgcmFkZGl4IHx8IDEwKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZEJ1ZmZlcih2YWx1ZSwgcmFkZGl4KSkge1xuICAgICAgICBmcm9tQXJyYXkoYnVmZmVyLCBvZmZzZXQsIHZhbHVlLCByYWRkaXgpO1xuICAgICAgfSBlbHNlIGlmIChcIm51bWJlclwiID09PSB0eXBlb2YgcmFkZGl4KSB7XG4gICAgICAgIHdyaXRlSW50MzIoYnVmZmVyLCBvZmZzZXQgKyBwb3NILCB2YWx1ZSk7IC8vIGhpZ2hcbiAgICAgICAgd3JpdGVJbnQzMihidWZmZXIsIG9mZnNldCArIHBvc0wsIHJhZGRpeCk7IC8vIGxvd1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgZnJvbVBvc2l0aXZlKGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSk7IC8vIHBvc2l0aXZlXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICBmcm9tTmVnYXRpdmUoYnVmZmVyLCBvZmZzZXQsIHZhbHVlKTsgLy8gbmVnYXRpdmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb21BcnJheShidWZmZXIsIG9mZnNldCwgWkVSTywgMCk7IC8vIHplcm8sIE5hTiBhbmQgb3RoZXJzXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZnJvbVN0cmluZyhidWZmZXIsIG9mZnNldCwgc3RyLCByYWRkaXgpIHtcbiAgICAgIHZhciBwb3MgPSAwO1xuICAgICAgdmFyIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgICB2YXIgaGlnaCA9IDA7XG4gICAgICB2YXIgbG93ID0gMDtcbiAgICAgIGlmIChzdHJbMF0gPT09IFwiLVwiKSBwb3MrKztcbiAgICAgIHZhciBzaWduID0gcG9zO1xuICAgICAgd2hpbGUgKHBvcyA8IGxlbikge1xuICAgICAgICB2YXIgY2hyID0gcGFyc2VJbnQoc3RyW3BvcysrXSwgcmFkZGl4KTtcbiAgICAgICAgaWYgKCEoY2hyID49IDApKSBicmVhazsgLy8gTmFOXG4gICAgICAgIGxvdyA9IGxvdyAqIHJhZGRpeCArIGNocjtcbiAgICAgICAgaGlnaCA9IGhpZ2ggKiByYWRkaXggKyBNYXRoLmZsb29yKGxvdyAvIEJJVDMyKTtcbiAgICAgICAgbG93ICU9IEJJVDMyO1xuICAgICAgfVxuICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgaGlnaCA9IH5oaWdoO1xuICAgICAgICBpZiAobG93KSB7XG4gICAgICAgICAgbG93ID0gQklUMzIgLSBsb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlnaCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3cml0ZUludDMyKGJ1ZmZlciwgb2Zmc2V0ICsgcG9zSCwgaGlnaCk7XG4gICAgICB3cml0ZUludDMyKGJ1ZmZlciwgb2Zmc2V0ICsgcG9zTCwgbG93KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b051bWJlcigpIHtcbiAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIHZhciBoaWdoID0gcmVhZEludDMyKGJ1ZmZlciwgb2Zmc2V0ICsgcG9zSCk7XG4gICAgICB2YXIgbG93ID0gcmVhZEludDMyKGJ1ZmZlciwgb2Zmc2V0ICsgcG9zTCk7XG4gICAgICBpZiAoIXVuc2lnbmVkKSBoaWdoIHw9IDA7IC8vIGEgdHJpY2sgdG8gZ2V0IHNpZ25lZFxuICAgICAgcmV0dXJuIGhpZ2ggPyAoaGlnaCAqIEJJVDMyICsgbG93KSA6IGxvdztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b1N0cmluZyhyYWRpeCkge1xuICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgdmFyIGhpZ2ggPSByZWFkSW50MzIoYnVmZmVyLCBvZmZzZXQgKyBwb3NIKTtcbiAgICAgIHZhciBsb3cgPSByZWFkSW50MzIoYnVmZmVyLCBvZmZzZXQgKyBwb3NMKTtcbiAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgdmFyIHNpZ24gPSAhdW5zaWduZWQgJiYgKGhpZ2ggJiAweDgwMDAwMDAwKTtcbiAgICAgIGlmIChzaWduKSB7XG4gICAgICAgIGhpZ2ggPSB+aGlnaDtcbiAgICAgICAgbG93ID0gQklUMzIgLSBsb3c7XG4gICAgICB9XG4gICAgICByYWRpeCA9IHJhZGl4IHx8IDEwO1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgdmFyIG1vZCA9IChoaWdoICUgcmFkaXgpICogQklUMzIgKyBsb3c7XG4gICAgICAgIGhpZ2ggPSBNYXRoLmZsb29yKGhpZ2ggLyByYWRpeCk7XG4gICAgICAgIGxvdyA9IE1hdGguZmxvb3IobW9kIC8gcmFkaXgpO1xuICAgICAgICBzdHIgPSAobW9kICUgcmFkaXgpLnRvU3RyaW5nKHJhZGl4KSArIHN0cjtcbiAgICAgICAgaWYgKCFoaWdoICYmICFsb3cpIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgc3RyID0gXCItXCIgKyBzdHI7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlSW50MzIoYnVmZmVyLCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICBidWZmZXJbb2Zmc2V0ICsgcG9zM10gPSB2YWx1ZSAmIDI1NTtcbiAgICAgIHZhbHVlID0gdmFsdWUgPj4gODtcbiAgICAgIGJ1ZmZlcltvZmZzZXQgKyBwb3MyXSA9IHZhbHVlICYgMjU1O1xuICAgICAgdmFsdWUgPSB2YWx1ZSA+PiA4O1xuICAgICAgYnVmZmVyW29mZnNldCArIHBvczFdID0gdmFsdWUgJiAyNTU7XG4gICAgICB2YWx1ZSA9IHZhbHVlID4+IDg7XG4gICAgICBidWZmZXJbb2Zmc2V0ICsgcG9zMF0gPSB2YWx1ZSAmIDI1NTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkSW50MzIoYnVmZmVyLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiAoYnVmZmVyW29mZnNldCArIHBvczBdICogQklUMjQpICtcbiAgICAgICAgKGJ1ZmZlcltvZmZzZXQgKyBwb3MxXSA8PCAxNikgK1xuICAgICAgICAoYnVmZmVyW29mZnNldCArIHBvczJdIDw8IDgpICtcbiAgICAgICAgYnVmZmVyW29mZnNldCArIHBvczNdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvQXJyYXkocmF3KSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICBzdG9yYWdlID0gbnVsbDsgLy8gQXJyYXlcbiAgICBpZiAocmF3ICE9PSBmYWxzZSAmJiBvZmZzZXQgPT09IDAgJiYgYnVmZmVyLmxlbmd0aCA9PT0gOCAmJiBpc0FycmF5KGJ1ZmZlcikpIHJldHVybiBidWZmZXI7XG4gICAgcmV0dXJuIG5ld0FycmF5KGJ1ZmZlciwgb2Zmc2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvQnVmZmVyKHJhdykge1xuICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgc3RvcmFnZSA9IEJVRkZFUjtcbiAgICBpZiAocmF3ICE9PSBmYWxzZSAmJiBvZmZzZXQgPT09IDAgJiYgYnVmZmVyLmxlbmd0aCA9PT0gOCAmJiBCdWZmZXIuaXNCdWZmZXIoYnVmZmVyKSkgcmV0dXJuIGJ1ZmZlcjtcbiAgICB2YXIgZGVzdCA9IG5ldyBCVUZGRVIoOCk7XG4gICAgZnJvbUFycmF5KGRlc3QsIDAsIGJ1ZmZlciwgb2Zmc2V0KTtcbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvQXJyYXlCdWZmZXIocmF3KSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB2YXIgYXJyYnVmID0gYnVmZmVyLmJ1ZmZlcjtcbiAgICBzdG9yYWdlID0gVUlOVDhBUlJBWTtcbiAgICBpZiAocmF3ICE9PSBmYWxzZSAmJiBvZmZzZXQgPT09IDAgJiYgKGFycmJ1ZiBpbnN0YW5jZW9mIEFSUkFZQlVGRkVSKSAmJiBhcnJidWYuYnl0ZUxlbmd0aCA9PT0gOCkgcmV0dXJuIGFycmJ1ZjtcbiAgICB2YXIgZGVzdCA9IG5ldyBVSU5UOEFSUkFZKDgpO1xuICAgIGZyb21BcnJheShkZXN0LCAwLCBidWZmZXIsIG9mZnNldCk7XG4gICAgcmV0dXJuIGRlc3QuYnVmZmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZEJ1ZmZlcihidWZmZXIsIG9mZnNldCkge1xuICAgIHZhciBsZW4gPSBidWZmZXIgJiYgYnVmZmVyLmxlbmd0aDtcbiAgICBvZmZzZXQgfD0gMDtcbiAgICByZXR1cm4gbGVuICYmIChvZmZzZXQgKyA4IDw9IGxlbikgJiYgKFwic3RyaW5nXCIgIT09IHR5cGVvZiBidWZmZXJbb2Zmc2V0XSk7XG4gIH1cblxuICBmdW5jdGlvbiBmcm9tQXJyYXkoZGVzdGJ1ZiwgZGVzdG9mZiwgc3JjYnVmLCBzcmNvZmYpIHtcbiAgICBkZXN0b2ZmIHw9IDA7XG4gICAgc3Jjb2ZmIHw9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGRlc3RidWZbZGVzdG9mZisrXSA9IHNyY2J1ZltzcmNvZmYrK10gJiAyNTU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmV3QXJyYXkoYnVmZmVyLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnVmZmVyLCBvZmZzZXQsIG9mZnNldCArIDgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJvbVBvc2l0aXZlQkUoYnVmZmVyLCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgdmFyIHBvcyA9IG9mZnNldCArIDg7XG4gICAgd2hpbGUgKHBvcyA+IG9mZnNldCkge1xuICAgICAgYnVmZmVyWy0tcG9zXSA9IHZhbHVlICYgMjU1O1xuICAgICAgdmFsdWUgLz0gMjU2O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZyb21OZWdhdGl2ZUJFKGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgIHZhciBwb3MgPSBvZmZzZXQgKyA4O1xuICAgIHZhbHVlKys7XG4gICAgd2hpbGUgKHBvcyA+IG9mZnNldCkge1xuICAgICAgYnVmZmVyWy0tcG9zXSA9ICgoLXZhbHVlKSAmIDI1NSkgXiAyNTU7XG4gICAgICB2YWx1ZSAvPSAyNTY7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZnJvbVBvc2l0aXZlTEUoYnVmZmVyLCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgdmFyIGVuZCA9IG9mZnNldCArIDg7XG4gICAgd2hpbGUgKG9mZnNldCA8IGVuZCkge1xuICAgICAgYnVmZmVyW29mZnNldCsrXSA9IHZhbHVlICYgMjU1O1xuICAgICAgdmFsdWUgLz0gMjU2O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZyb21OZWdhdGl2ZUxFKGJ1ZmZlciwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgIHZhciBlbmQgPSBvZmZzZXQgKyA4O1xuICAgIHZhbHVlKys7XG4gICAgd2hpbGUgKG9mZnNldCA8IGVuZCkge1xuICAgICAgYnVmZmVyW29mZnNldCsrXSA9ICgoLXZhbHVlKSAmIDI1NSkgXiAyNTU7XG4gICAgICB2YWx1ZSAvPSAyNTY7XG4gICAgfVxuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JldHJvZm94L2lzLWFycmF5XG4gIGZ1bmN0aW9uIF9pc0FycmF5KHZhbCkge1xuICAgIHJldHVybiAhIXZhbCAmJiBcIltvYmplY3QgQXJyYXldXCIgPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCk7XG4gIH1cblxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUgIT09ICdzdHJpbmcnID8gZXhwb3J0cyA6ICh0aGlzIHx8IHt9KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW50NjQtYnVmZmVyL2ludDY0LWJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBicm93c2VyLmpzXG5cbmV4cG9ydHMuZW5jb2RlID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpLmVuY29kZTtcbmV4cG9ydHMuZGVjb2RlID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpLmRlY29kZTtcblxuZXhwb3J0cy5FbmNvZGVyID0gcmVxdWlyZShcIi4vZW5jb2RlclwiKS5FbmNvZGVyO1xuZXhwb3J0cy5EZWNvZGVyID0gcmVxdWlyZShcIi4vZGVjb2RlclwiKS5EZWNvZGVyO1xuXG5leHBvcnRzLmNyZWF0ZUNvZGVjID0gcmVxdWlyZShcIi4vZXh0XCIpLmNyZWF0ZUNvZGVjO1xuZXhwb3J0cy5jb2RlYyA9IHJlcXVpcmUoXCIuL2NvZGVjXCIpLmNvZGVjO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBidWZmZXJpc2gtcHJvdG8uanNcblxuLyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cbnZhciBCdWZmZXJMaXRlID0gcmVxdWlyZShcIi4vYnVmZmVyLWxpdGVcIik7XG5cbmV4cG9ydHMuY29weSA9IGNvcHk7XG5leHBvcnRzLnNsaWNlID0gc2xpY2U7XG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5leHBvcnRzLndyaXRlID0gZ2VuKFwid3JpdGVcIik7XG5cbnZhciBCdWZmZXJpc2ggPSByZXF1aXJlKFwiLi9idWZmZXJpc2hcIik7XG52YXIgQnVmZmVyID0gQnVmZmVyaXNoLmdsb2JhbDtcblxudmFyIGlzQnVmZmVyU2hpbSA9IEJ1ZmZlcmlzaC5oYXNCdWZmZXIgJiYgKFwiVFlQRURfQVJSQVlfU1VQUE9SVFwiIGluIEJ1ZmZlcik7XG52YXIgYnJva2VuVHlwZWRBcnJheSA9IGlzQnVmZmVyU2hpbSAmJiAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQ7XG5cbi8qKlxuICogQHBhcmFtIHRhcmdldCB7QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9XG4gKiBAcGFyYW0gW3RhcmdldFN0YXJ0XSB7TnVtYmVyfVxuICogQHBhcmFtIFtzdGFydF0ge051bWJlcn1cbiAqIEBwYXJhbSBbZW5kXSB7TnVtYmVyfVxuICogQHJldHVybnMge0J1ZmZlcnxVaW50OEFycmF5fEFycmF5fVxuICovXG5cbmZ1bmN0aW9uIGNvcHkodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdGhpc0lzQnVmZmVyID0gQnVmZmVyaXNoLmlzQnVmZmVyKHRoaXMpO1xuICB2YXIgdGFyZ2V0SXNCdWZmZXIgPSBCdWZmZXJpc2guaXNCdWZmZXIodGFyZ2V0KTtcbiAgaWYgKHRoaXNJc0J1ZmZlciAmJiB0YXJnZXRJc0J1ZmZlcikge1xuICAgIC8vIEJ1ZmZlciB0byBCdWZmZXJcbiAgICByZXR1cm4gdGhpcy5jb3B5KHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpO1xuICB9IGVsc2UgaWYgKCFicm9rZW5UeXBlZEFycmF5ICYmICF0aGlzSXNCdWZmZXIgJiYgIXRhcmdldElzQnVmZmVyICYmXG4gICAgQnVmZmVyaXNoLmlzVmlldyh0aGlzKSAmJiBCdWZmZXJpc2guaXNWaWV3KHRhcmdldCkpIHtcbiAgICAvLyBVaW50OEFycmF5IHRvIFVpbnQ4QXJyYXkgKGV4Y2VwdCBmb3IgbWlub3Igc29tZSBicm93c2VycylcbiAgICB2YXIgYnVmZmVyID0gKHN0YXJ0IHx8IGVuZCAhPSBudWxsKSA/IHNsaWNlLmNhbGwodGhpcywgc3RhcnQsIGVuZCkgOiB0aGlzO1xuICAgIHRhcmdldC5zZXQoYnVmZmVyLCB0YXJnZXRTdGFydCk7XG4gICAgcmV0dXJuIGJ1ZmZlci5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3RoZXIgY2FzZXNcbiAgICByZXR1cm4gQnVmZmVyTGl0ZS5jb3B5LmNhbGwodGhpcywgdGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gW3N0YXJ0XSB7TnVtYmVyfVxuICogQHBhcmFtIFtlbmRdIHtOdW1iZXJ9XG4gKiBAcmV0dXJucyB7QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAvLyBmb3IgQnVmZmVyLCBVaW50OEFycmF5IChleGNlcHQgZm9yIG1pbm9yIHNvbWUgYnJvd3NlcnMpIGFuZCBBcnJheVxuICB2YXIgZiA9IHRoaXMuc2xpY2UgfHwgKCFicm9rZW5UeXBlZEFycmF5ICYmIHRoaXMuc3ViYXJyYXkpO1xuICBpZiAoZikgcmV0dXJuIGYuY2FsbCh0aGlzLCBzdGFydCwgZW5kKTtcblxuICAvLyBVaW50OEFycmF5IChmb3IgbWlub3Igc29tZSBicm93c2VycylcbiAgdmFyIHRhcmdldCA9IEJ1ZmZlcmlzaC5hbGxvYy5jYWxsKHRoaXMsIGVuZCAtIHN0YXJ0KTtcbiAgY29weS5jYWxsKHRoaXMsIHRhcmdldCwgMCwgc3RhcnQsIGVuZCk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZygpXG4gKlxuICogQHBhcmFtIFtlbmNvZGluZ10ge1N0cmluZ30gaWdub3JlZFxuICogQHBhcmFtIFtzdGFydF0ge051bWJlcn1cbiAqIEBwYXJhbSBbZW5kXSB7TnVtYmVyfVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB0b1N0cmluZyhlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgZiA9ICghaXNCdWZmZXJTaGltICYmIEJ1ZmZlcmlzaC5pc0J1ZmZlcih0aGlzKSkgPyB0aGlzLnRvU3RyaW5nIDogQnVmZmVyTGl0ZS50b1N0cmluZztcbiAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdlbihtZXRob2QpIHtcbiAgcmV0dXJuIHdyYXA7XG5cbiAgZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgZiA9IHRoaXNbbWV0aG9kXSB8fCBCdWZmZXJMaXRlW21ldGhvZF07XG4gICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvYnVmZmVyaXNoLXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBleHQtYnVmZmVyLmpzXG5cbmV4cG9ydHMuRXh0QnVmZmVyID0gRXh0QnVmZmVyO1xuXG52YXIgQnVmZmVyaXNoID0gcmVxdWlyZShcIi4vYnVmZmVyaXNoXCIpO1xuXG5mdW5jdGlvbiBFeHRCdWZmZXIoYnVmZmVyLCB0eXBlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFeHRCdWZmZXIpKSByZXR1cm4gbmV3IEV4dEJ1ZmZlcihidWZmZXIsIHR5cGUpO1xuICB0aGlzLmJ1ZmZlciA9IEJ1ZmZlcmlzaC5mcm9tKGJ1ZmZlcik7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi9leHQtYnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZWFkLWNvcmUuanNcblxudmFyIEV4dEJ1ZmZlciA9IHJlcXVpcmUoXCIuL2V4dC1idWZmZXJcIikuRXh0QnVmZmVyO1xudmFyIEV4dFVucGFja2VyID0gcmVxdWlyZShcIi4vZXh0LXVucGFja2VyXCIpO1xudmFyIHJlYWRVaW50OCA9IHJlcXVpcmUoXCIuL3JlYWQtZm9ybWF0XCIpLnJlYWRVaW50ODtcbnZhciBSZWFkVG9rZW4gPSByZXF1aXJlKFwiLi9yZWFkLXRva2VuXCIpO1xudmFyIENvZGVjQmFzZSA9IHJlcXVpcmUoXCIuL2NvZGVjLWJhc2VcIik7XG5cbkNvZGVjQmFzZS5pbnN0YWxsKHtcbiAgYWRkRXh0VW5wYWNrZXI6IGFkZEV4dFVucGFja2VyLFxuICBnZXRFeHRVbnBhY2tlcjogZ2V0RXh0VW5wYWNrZXIsXG4gIGluaXQ6IGluaXRcbn0pO1xuXG5leHBvcnRzLnByZXNldCA9IGluaXQuY2FsbChDb2RlY0Jhc2UucHJlc2V0KTtcblxuZnVuY3Rpb24gZ2V0RGVjb2RlcihvcHRpb25zKSB7XG4gIHZhciByZWFkVG9rZW4gPSBSZWFkVG9rZW4uZ2V0UmVhZFRva2VuKG9wdGlvbnMpO1xuICByZXR1cm4gZGVjb2RlO1xuXG4gIGZ1bmN0aW9uIGRlY29kZShkZWNvZGVyKSB7XG4gICAgdmFyIHR5cGUgPSByZWFkVWludDgoZGVjb2Rlcik7XG4gICAgdmFyIGZ1bmMgPSByZWFkVG9rZW5bdHlwZV07XG4gICAgaWYgKCFmdW5jKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGU6IFwiICsgKHR5cGUgPyAoXCIweFwiICsgdHlwZS50b1N0cmluZygxNikpIDogdHlwZSkpO1xuICAgIHJldHVybiBmdW5jKGRlY29kZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB0aGlzLmRlY29kZSA9IGdldERlY29kZXIob3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcmVzZXQpIHtcbiAgICBFeHRVbnBhY2tlci5zZXRFeHRVbnBhY2tlcnModGhpcyk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYWRkRXh0VW5wYWNrZXIoZXR5cGUsIHVucGFja2VyKSB7XG4gIHZhciB1bnBhY2tlcnMgPSB0aGlzLmV4dFVucGFja2VycyB8fCAodGhpcy5leHRVbnBhY2tlcnMgPSBbXSk7XG4gIHVucGFja2Vyc1tldHlwZV0gPSBDb2RlY0Jhc2UuZmlsdGVyKHVucGFja2VyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXh0VW5wYWNrZXIodHlwZSkge1xuICB2YXIgdW5wYWNrZXJzID0gdGhpcy5leHRVbnBhY2tlcnMgfHwgKHRoaXMuZXh0VW5wYWNrZXJzID0gW10pO1xuICByZXR1cm4gdW5wYWNrZXJzW3R5cGVdIHx8IGV4dFVucGFja2VyO1xuXG4gIGZ1bmN0aW9uIGV4dFVucGFja2VyKGJ1ZmZlcikge1xuICAgIHJldHVybiBuZXcgRXh0QnVmZmVyKGJ1ZmZlciwgdHlwZSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL3JlYWQtY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gd3JpdGUtY29yZS5qc1xuXG52YXIgRXh0QnVmZmVyID0gcmVxdWlyZShcIi4vZXh0LWJ1ZmZlclwiKS5FeHRCdWZmZXI7XG52YXIgRXh0UGFja2VyID0gcmVxdWlyZShcIi4vZXh0LXBhY2tlclwiKTtcbnZhciBXcml0ZVR5cGUgPSByZXF1aXJlKFwiLi93cml0ZS10eXBlXCIpO1xudmFyIENvZGVjQmFzZSA9IHJlcXVpcmUoXCIuL2NvZGVjLWJhc2VcIik7XG5cbkNvZGVjQmFzZS5pbnN0YWxsKHtcbiAgYWRkRXh0UGFja2VyOiBhZGRFeHRQYWNrZXIsXG4gIGdldEV4dFBhY2tlcjogZ2V0RXh0UGFja2VyLFxuICBpbml0OiBpbml0XG59KTtcblxuZXhwb3J0cy5wcmVzZXQgPSBpbml0LmNhbGwoQ29kZWNCYXNlLnByZXNldCk7XG5cbmZ1bmN0aW9uIGdldEVuY29kZXIob3B0aW9ucykge1xuICB2YXIgd3JpdGVUeXBlID0gV3JpdGVUeXBlLmdldFdyaXRlVHlwZShvcHRpb25zKTtcbiAgcmV0dXJuIGVuY29kZTtcblxuICBmdW5jdGlvbiBlbmNvZGUoZW5jb2RlciwgdmFsdWUpIHtcbiAgICB2YXIgZnVuYyA9IHdyaXRlVHlwZVt0eXBlb2YgdmFsdWVdO1xuICAgIGlmICghZnVuYykgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdHlwZSBcXFwiXCIgKyAodHlwZW9mIHZhbHVlKSArIFwiXFxcIjogXCIgKyB2YWx1ZSk7XG4gICAgZnVuYyhlbmNvZGVyLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gIHRoaXMuZW5jb2RlID0gZ2V0RW5jb2RlcihvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnByZXNldCkge1xuICAgIEV4dFBhY2tlci5zZXRFeHRQYWNrZXJzKHRoaXMpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFkZEV4dFBhY2tlcihldHlwZSwgQ2xhc3MsIHBhY2tlcikge1xuICBwYWNrZXIgPSBDb2RlY0Jhc2UuZmlsdGVyKHBhY2tlcik7XG4gIHZhciBuYW1lID0gQ2xhc3MubmFtZTtcbiAgaWYgKG5hbWUgJiYgbmFtZSAhPT0gXCJPYmplY3RcIikge1xuICAgIHZhciBwYWNrZXJzID0gdGhpcy5leHRQYWNrZXJzIHx8ICh0aGlzLmV4dFBhY2tlcnMgPSB7fSk7XG4gICAgcGFja2Vyc1tuYW1lXSA9IGV4dFBhY2tlcjtcbiAgfSBlbHNlIHtcbiAgICAvLyBmYWxsYmFjayBmb3IgSUVcbiAgICB2YXIgbGlzdCA9IHRoaXMuZXh0RW5jb2Rlckxpc3QgfHwgKHRoaXMuZXh0RW5jb2Rlckxpc3QgPSBbXSk7XG4gICAgbGlzdC51bnNoaWZ0KFtDbGFzcywgZXh0UGFja2VyXSk7XG4gIH1cblxuICBmdW5jdGlvbiBleHRQYWNrZXIodmFsdWUpIHtcbiAgICBpZiAocGFja2VyKSB2YWx1ZSA9IHBhY2tlcih2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBFeHRCdWZmZXIodmFsdWUsIGV0eXBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFeHRQYWNrZXIodmFsdWUpIHtcbiAgdmFyIHBhY2tlcnMgPSB0aGlzLmV4dFBhY2tlcnMgfHwgKHRoaXMuZXh0UGFja2VycyA9IHt9KTtcbiAgdmFyIGMgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgdmFyIGUgPSBjICYmIGMubmFtZSAmJiBwYWNrZXJzW2MubmFtZV07XG4gIGlmIChlKSByZXR1cm4gZTtcblxuICAvLyBmYWxsYmFjayBmb3IgSUVcbiAgdmFyIGxpc3QgPSB0aGlzLmV4dEVuY29kZXJMaXN0IHx8ICh0aGlzLmV4dEVuY29kZXJMaXN0ID0gW10pO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IGxpc3RbaV07XG4gICAgaWYgKGMgPT09IHBhaXJbMF0pIHJldHVybiBwYWlyWzFdO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi93cml0ZS1jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE1hdGhpZXUgVHVyY290dGVcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2NoZWNrcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcmVjb25kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBTbG90TGlzdF8xID0gcmVxdWlyZShcIi4vU2xvdExpc3RcIik7XG52YXIgU2xvdF8xID0gcmVxdWlyZShcIi4vU2xvdFwiKTtcbi8qKlxuICogQWxsb3dzIHRoZSB2YWx1ZUNsYXNzZXMgdG8gYmUgc2V0IGluIE1YTUwsIGUuZy5cbiAqIDxzaWduYWxzOlNpZ25hbCBpZD1cIm5hbWVDaGFuZ2VkXCI+e1tTdHJpbmcsIHVpbnRdfTwvc2lnbmFsczpTaWduYWw+XG4gKi9cbi8qW0RlZmF1bHRQcm9wZXJ0eShcInZhbHVlQ2xhc3Nlc1wiKV0qL1xuLyoqXG4gKiBTaWduYWwgZGlzcGF0Y2hlcyBldmVudHMgdG8gbXVsdGlwbGUgbGlzdGVuZXJzLlxuICogSXQgaXMgaW5zcGlyZWQgYnkgQyMgZXZlbnRzIGFuZCBkZWxlZ2F0ZXMsIGFuZCBieVxuICogPGEgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NpZ25hbHNfYW5kX3Nsb3RzXCI+c2lnbmFscyBhbmQgc2xvdHM8L2E+XG4gKiBpbiBRdC5cbiAqIEEgU2lnbmFsIGFkZHMgZXZlbnQgZGlzcGF0Y2hpbmcgZnVuY3Rpb25hbGl0eSB0aHJvdWdoIGNvbXBvc2l0aW9uIGFuZCBpbnRlcmZhY2VzLFxuICogcmF0aGVyIHRoYW4gaW5oZXJpdGluZyBmcm9tIGEgZGlzcGF0Y2hlci5cbiAqIDxici8+PGJyLz5cbiAqIFByb2plY3QgaG9tZTogPGEgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vZ2l0aHViLmNvbS9yb2JlcnRwZW5uZXIvYXMzLXNpZ25hbHMvXCI+aHR0cDovL2dpdGh1Yi5jb20vcm9iZXJ0cGVubmVyL2FzMy1zaWduYWxzLzwvYT5cbiAqL1xudmFyIE9uY2VTaWduYWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBTaWduYWwgaW5zdGFuY2UgdG8gZGlzcGF0Y2ggdmFsdWUgb2JqZWN0cy5cbiAgICAgKiBAcGFyYW0gICAgdmFsdWVDbGFzc2VzIEFueSBudW1iZXIgb2YgY2xhc3MgcmVmZXJlbmNlcyB0aGF0IGVuYWJsZSB0eXBlIGNoZWNrcyBpbiBkaXNwYXRjaCgpLlxuICAgICAqIEZvciBleGFtcGxlLCBuZXcgU2lnbmFsKFN0cmluZywgdWludClcbiAgICAgKiB3b3VsZCBhbGxvdzogc2lnbmFsLmRpc3BhdGNoKFwidGhlIEFuc3dlclwiLCA0MilcbiAgICAgKiBidXQgbm90OiBzaWduYWwuZGlzcGF0Y2godHJ1ZSwgNDIuNSlcbiAgICAgKiBub3I6IHNpZ25hbC5kaXNwYXRjaCgpXG4gICAgICpcbiAgICAgKiBOT1RFOiBJbiBBUzMsIHN1YmNsYXNzZXMgY2Fubm90IGNhbGwgc3VwZXIuYXBwbHkobnVsbCwgdmFsdWVDbGFzc2VzKSxcbiAgICAgKiBidXQgdGhpcyBjb25zdHJ1Y3RvciBoYXMgbG9naWMgdG8gc3VwcG9ydCBzdXBlcih2YWx1ZUNsYXNzZXMpLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE9uY2VTaWduYWwoKSB7XG4gICAgICAgIHZhciB2YWx1ZUNsYXNzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhbHVlQ2xhc3Nlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xvdHMgPSBTbG90TGlzdF8xLlNsb3RMaXN0Lk5JTDtcbiAgICAgICAgLy8gQ2Fubm90IHVzZSBzdXBlci5hcHBseShudWxsLCB2YWx1ZUNsYXNzZXMpLCBzbyBhbGxvdyB0aGUgc3ViY2xhc3MgdG8gY2FsbCBzdXBlcih2YWx1ZUNsYXNzZXMpLlxuICAgICAgICB0aGlzLnZhbHVlQ2xhc3NlcyA9ICh2YWx1ZUNsYXNzZXMubGVuZ3RoID09IDEgJiYgdmFsdWVDbGFzc2VzWzBdIGluc3RhbmNlb2YgQXJyYXkpID8gdmFsdWVDbGFzc2VzWzBdIDogdmFsdWVDbGFzc2VzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25jZVNpZ25hbC5wcm90b3R5cGUsIFwidmFsdWVDbGFzc2VzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogSW52YWxpZCB2YWx1ZUNsYXNzZXMgYXJndW1lbnQ6IGl0ZW0gYXQgaW5kZXggc2hvdWxkIGJlIGEgQ2xhc3MgYnV0IHdhcyBub3QuXG4gICAgICAgICAqL1xuICAgICAgICAvKltBcnJheUVsZW1lbnRUeXBlKFwiQ2xhc3NcIildKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gQ2xvbmUgc28gdGhlIEFycmF5IGNhbm5vdCBiZSBhZmZlY3RlZCBmcm9tIG91dHNpZGUuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZUNsYXNzZXMgPSB2YWx1ZSA/IHZhbHVlLnNsaWNlKCkgOiBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLl92YWx1ZUNsYXNzZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcy5fdmFsdWVDbGFzc2VzW2ldIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWVDbGFzc2VzIGFyZ3VtZW50OiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtIGF0IGluZGV4ICcgKyBpICsgJyBzaG91bGQgYmUgYSBDbGFzcyBidXQgd2FzOjwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlQ2xhc3Nlc1tpXSArICc+LicgKyB0aGlzLl92YWx1ZUNsYXNzZXNbaV0pOyAvL0BDSEFOR0VEIC0gdGVtcCByZXBsYWNlbWVudCBmb3IgZ2V0UXVhbGlmaWVkQ2xhc3NCeU5hbWUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9uY2VTaWduYWwucHJvdG90eXBlLCBcIm51bUxpc3RlbmVyc1wiLCB7XG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNsb3RzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKiBAdGhyb3dzIGZsYXNoLmVycm9ycy5JbGxlZ2FsT3BlcmF0aW9uRXJyb3IgPGNvZGU+SWxsZWdhbE9wZXJhdGlvbkVycm9yPC9jb2RlPjogWW91IGNhbm5vdCBhZGRPbmNlKCkgdGhlbiBhZGQoKSB0aGUgc2FtZSBsaXN0ZW5lciB3aXRob3V0IHJlbW92aW5nIHRoZSByZWxhdGlvbnNoaXAgZmlyc3QuXG4gICAgICogQHRocm93cyBBcmd1bWVudEVycm9yIDxjb2RlPkFyZ3VtZW50RXJyb3I8L2NvZGU+OiBHaXZlbiBsaXN0ZW5lciBpcyA8Y29kZT5udWxsPC9jb2RlPi5cbiAgICAgKi9cbiAgICBPbmNlU2lnbmFsLnByb3RvdHlwZS5hZGRPbmNlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgT25jZVNpZ25hbC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBzbG90ID0gdGhpcy5zbG90cy5maW5kKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKCFzbG90KVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHRoaXMuc2xvdHMgPSB0aGlzLnNsb3RzLmZpbHRlck5vdChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBzbG90O1xuICAgIH07XG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgT25jZVNpZ25hbC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNsb3RzID0gU2xvdExpc3RfMS5TbG90TGlzdC5OSUw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMuXG4gICAgICogQHRocm93cyBBcmd1bWVudEVycm9yIDxjb2RlPkFyZ3VtZW50RXJyb3I8L2NvZGU+OiBWYWx1ZSBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZUNsYXNzZXMgQ2xhc3MuXG4gICAgICovXG4gICAgT25jZVNpZ25hbC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZU9iamVjdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhbHVlT2JqZWN0c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHZhbHVlQ2xhc3NlcyBpcyBlbXB0eSwgdmFsdWUgb2JqZWN0cyBhcmUgbm90IHR5cGUtY2hlY2tlZC5cbiAgICAgICAgdmFyIG51bVZhbHVlQ2xhc3NlcyA9IHRoaXMuX3ZhbHVlQ2xhc3Nlcy5sZW5ndGg7XG4gICAgICAgIHZhciBudW1WYWx1ZU9iamVjdHMgPSB2YWx1ZU9iamVjdHMubGVuZ3RoO1xuICAgICAgICAvLyBDYW5ub3QgZGlzcGF0Y2ggZmV3ZXIgb2JqZWN0cyB0aGFuIGRlY2xhcmVkIGNsYXNzZXMuXG4gICAgICAgIGlmIChudW1WYWx1ZU9iamVjdHMgPCBudW1WYWx1ZUNsYXNzZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgICAgICdFeHBlY3RlZCBhdCBsZWFzdCAnICsgbnVtVmFsdWVDbGFzc2VzICsgJyBidXQgcmVjZWl2ZWQgJyArXG4gICAgICAgICAgICAgICAgbnVtVmFsdWVPYmplY3RzICsgJy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYW5ub3QgZGlzcGF0Y2ggZGlmZmVyZW50bHkgdHlwZWQgb2JqZWN0cyB0aGFuIGRlY2xhcmVkIGNsYXNzZXMuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVmFsdWVDbGFzc2VzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIE9wdGltaXplZCBmb3IgdGhlIG9wdGltaXN0aWMgY2FzZSB0aGF0IHZhbHVlcyBhcmUgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh2YWx1ZU9iamVjdHNbaV0gPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAodmFsdWVPYmplY3RzW2ldIGluc3RhbmNlb2YgdGhpcy5fdmFsdWVDbGFzc2VzW2ldIHx8IHZhbHVlT2JqZWN0c1tpXS5jb25zdHJ1Y3RvciA9PT0gdGhpcy5fdmFsdWVDbGFzc2VzW2ldKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSBvYmplY3QgPCcgKyB2YWx1ZU9iamVjdHNbaV1cbiAgICAgICAgICAgICAgICArICc+IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiA8JyArIHRoaXMuX3ZhbHVlQ2xhc3Nlc1tpXSArICc+LicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJyb2FkY2FzdCB0byBsaXN0ZW5lcnMuXG4gICAgICAgIHZhciBzbG90c1RvUHJvY2VzcyA9IHRoaXMuc2xvdHM7XG4gICAgICAgIGlmIChzbG90c1RvUHJvY2Vzcy5ub25FbXB0eSkge1xuICAgICAgICAgICAgd2hpbGUgKHNsb3RzVG9Qcm9jZXNzLm5vbkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgc2xvdHNUb1Byb2Nlc3MuaGVhZC5leGVjdXRlKHZhbHVlT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgc2xvdHNUb1Byb2Nlc3MgPSBzbG90c1RvUHJvY2Vzcy50YWlsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPbmNlU2lnbmFsLnByb3RvdHlwZS5yZWdpc3Rlckxpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBvbmNlKSB7XG4gICAgICAgIGlmIChvbmNlID09PSB2b2lkIDApIHsgb25jZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdHJhdGlvblBvc3NpYmxlKGxpc3RlbmVyLCBvbmNlKSkge1xuICAgICAgICAgICAgdmFyIG5ld1Nsb3QgPSBuZXcgU2xvdF8xLlNsb3QobGlzdGVuZXIsIHRoaXMsIG9uY2UpO1xuICAgICAgICAgICAgdGhpcy5zbG90cyA9IHRoaXMuc2xvdHMucHJlcGVuZChuZXdTbG90KTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTbG90O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNsb3RzLmZpbmQobGlzdGVuZXIpO1xuICAgIH07XG4gICAgT25jZVNpZ25hbC5wcm90b3R5cGUucmVnaXN0cmF0aW9uUG9zc2libGUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIG9uY2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNsb3RzLm5vbkVtcHR5KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBleGlzdGluZ1Nsb3QgPSB0aGlzLnNsb3RzLmZpbmQobGlzdGVuZXIpO1xuICAgICAgICBpZiAoIWV4aXN0aW5nU2xvdClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoZXhpc3RpbmdTbG90Lm9uY2UgIT0gb25jZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHdhcyBwcmV2aW91c2x5IGFkZGVkLCBkZWZpbml0ZWx5IGRvbid0IGFkZCBpdCBhZ2Fpbi5cbiAgICAgICAgICAgIC8vIEJ1dCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlaXIgb25jZSB2YWx1ZXMgZGlmZmVyLlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IGFkZE9uY2UoKSB0aGVuIGFkZCgpIHRoZSBzYW1lIGxpc3RlbmVyIHdpdGhvdXQgcmVtb3ZpbmcgdGhlIHJlbGF0aW9uc2hpcCBmaXJzdC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIExpc3RlbmVyIHdhcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG4gICAgfTtcbiAgICByZXR1cm4gT25jZVNpZ25hbDtcbn0oKSk7XG5leHBvcnRzLk9uY2VTaWduYWwgPSBPbmNlU2lnbmFsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T25jZVNpZ25hbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9PbmNlU2lnbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNpZ25hbHNfanNfMSA9IHJlcXVpcmUoXCJzaWduYWxzLmpzXCIpO1xyXG52YXIgQ2xvY2sgPSByZXF1aXJlKFwiY2xvY2suanNcIik7XHJcbnZhciBkZWx0YV9saXN0ZW5lcl8xID0gcmVxdWlyZShcImRlbHRhLWxpc3RlbmVyXCIpO1xyXG52YXIgbXNncGFjayA9IHJlcXVpcmUoXCJtc2dwYWNrLWxpdGVcIik7XHJcbnZhciBmb3NzaWxEZWx0YSA9IHJlcXVpcmUoXCJmb3NzaWwtZGVsdGFcIik7XHJcbnZhciBQcm90b2NvbF8xID0gcmVxdWlyZShcIi4vUHJvdG9jb2xcIik7XHJcbnZhciBSb29tID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSb29tLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUm9vbShuYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywge30pIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuY2xvY2sgPSBuZXcgQ2xvY2soKTsgLy8gZXhwZXJpbWVudGFsXHJcbiAgICAgICAgX3RoaXMucmVtb3RlQ2xvY2sgPSBuZXcgQ2xvY2soKTsgLy8gZXhwZXJpbWVudGFsXHJcbiAgICAgICAgLy8gUHVibGljIHNpZ25hbHNcclxuICAgICAgICBfdGhpcy5vbkpvaW4gPSBuZXcgc2lnbmFsc19qc18xLlNpZ25hbCgpO1xyXG4gICAgICAgIF90aGlzLm9uVXBkYXRlID0gbmV3IHNpZ25hbHNfanNfMS5TaWduYWwoKTtcclxuICAgICAgICBfdGhpcy5vbkRhdGEgPSBuZXcgc2lnbmFsc19qc18xLlNpZ25hbCgpO1xyXG4gICAgICAgIF90aGlzLm9uRXJyb3IgPSBuZXcgc2lnbmFsc19qc18xLlNpZ25hbCgpO1xyXG4gICAgICAgIF90aGlzLm9uTGVhdmUgPSBuZXcgc2lnbmFsc19qc18xLlNpZ25hbCgpO1xyXG4gICAgICAgIF90aGlzLmlkID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICBfdGhpcy5vbkxlYXZlLmFkZChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUm9vbS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZUNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMub25MZWF2ZS5kaXNwYXRjaCgpOyB9O1xyXG4gICAgfTtcclxuICAgIFJvb20ucHJvdG90eXBlLm9uTWVzc2FnZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBtc2dwYWNrLmRlY29kZShuZXcgVWludDhBcnJheShldmVudC5kYXRhKSk7XHJcbiAgICAgICAgdmFyIGNvZGUgPSBtZXNzYWdlWzBdO1xyXG4gICAgICAgIGlmIChjb2RlID09IFByb3RvY29sXzEuUHJvdG9jb2wuSk9JTl9ST09NKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbklkID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgdGhpcy5vbkpvaW4uZGlzcGF0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29kZSA9PSBQcm90b2NvbF8xLlByb3RvY29sLkpPSU5fRVJST1IpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yLmRpc3BhdGNoKG1lc3NhZ2VbMl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlID09IFByb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9TVEFURSkge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBtZXNzYWdlWzJdO1xyXG4gICAgICAgICAgICB2YXIgcmVtb3RlQ3VycmVudFRpbWUgPSBtZXNzYWdlWzNdO1xyXG4gICAgICAgICAgICB2YXIgcmVtb3RlRWxhcHNlZFRpbWUgPSBtZXNzYWdlWzRdO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCByZW1vdGVDdXJyZW50VGltZSwgcmVtb3RlRWxhcHNlZFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlID09IFByb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9TVEFURV9QQVRDSCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGNoKG1lc3NhZ2VbMl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlID09IFByb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9EQVRBKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EYXRhLmRpc3BhdGNoKG1lc3NhZ2VbMl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlID09IFByb3RvY29sXzEuUHJvdG9jb2wuTEVBVkVfUk9PTSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJvb20ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCByZW1vdGVDdXJyZW50VGltZSwgcmVtb3RlRWxhcHNlZFRpbWUpIHtcclxuICAgICAgICB0aGlzLnNldChzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNTdGF0ZSA9IG1zZ3BhY2suZW5jb2RlKHN0YXRlKTtcclxuICAgICAgICAvLyBzZXQgcmVtb3RlIGNsb2NrIHByb3BlcnRpZXNcclxuICAgICAgICBpZiAocmVtb3RlQ3VycmVudFRpbWUgJiYgcmVtb3RlRWxhcHNlZFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdGVDbG9jay5jdXJyZW50VGltZSA9IHJlbW90ZUN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW90ZUNsb2NrLmVsYXBzZWRUaW1lID0gcmVtb3RlRWxhcHNlZFRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xvY2suc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKHN0YXRlKTtcclxuICAgIH07XHJcbiAgICBSb29tLnByb3RvdHlwZS5wYXRjaCA9IGZ1bmN0aW9uIChiaW5hcnlQYXRjaCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIGNsaWVudC1zaWRlIHBpbmdcclxuICAgICAgICAvL1xyXG4gICAgICAgIHZhciBwYXRjaFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQYXRjaFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5waW5nID0gcGF0Y2hUaW1lIC0gdGhpcy5sYXN0UGF0Y2hUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RQYXRjaFRpbWUgPSBwYXRjaFRpbWU7XHJcbiAgICAgICAgdGhpcy5jbG9jay50aWNrKCk7XHJcbiAgICAgICAgLy8gYXBwbHkgcGF0Y2hcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1N0YXRlID0gZm9zc2lsRGVsdGEuYXBwbHkodGhpcy5fcHJldmlvdXNTdGF0ZSwgYmluYXJ5UGF0Y2gpO1xyXG4gICAgICAgIC8vIHRyaWdnZXIgc3RhdGUgY2FsbGJhY2tzXHJcbiAgICAgICAgdGhpcy5zZXQobXNncGFjay5kZWNvZGUodGhpcy5fcHJldmlvdXNTdGF0ZSkpO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGUuZGlzcGF0Y2godGhpcy5kYXRhKTtcclxuICAgIH07XHJcbiAgICBSb29tLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUm9vbS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQoW1Byb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9EQVRBLCB0aGlzLmlkLCBkYXRhXSk7XHJcbiAgICB9O1xyXG4gICAgUm9vbS5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkpvaW4ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZS5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLm9uRGF0YS5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLm9uRXJyb3IucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5vbkxlYXZlLnJlbW92ZUFsbCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSb29tO1xyXG59KGRlbHRhX2xpc3RlbmVyXzEuRGVsdGFDb250YWluZXIpKTtcclxuZXhwb3J0cy5Sb29tID0gUm9vbTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUm9vbS50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gICAgICBDb3B5cmlnaHQgKGMpIDIwMTIgTWF0aGlldSBUdXJjb3R0ZVxuLy8gICAgICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcbnZhciBwcmVjb25kID0gcmVxdWlyZSgncHJlY29uZCcpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8vIEEgY2xhc3MgdG8gaG9sZCB0aGUgc3RhdGUgb2YgYSBiYWNrb2ZmIG9wZXJhdGlvbi4gQWNjZXB0cyBhIGJhY2tvZmYgc3RyYXRlZ3lcbi8vIHRvIGdlbmVyYXRlIHRoZSBiYWNrb2ZmIGRlbGF5cy5cbmZ1bmN0aW9uIEJhY2tvZmYoYmFja29mZlN0cmF0ZWd5KSB7XG4gICAgZXZlbnRzLkV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5iYWNrb2ZmU3RyYXRlZ3lfID0gYmFja29mZlN0cmF0ZWd5O1xuICAgIHRoaXMubWF4TnVtYmVyT2ZSZXRyeV8gPSAtMTtcbiAgICB0aGlzLmJhY2tvZmZOdW1iZXJfID0gMDtcbiAgICB0aGlzLmJhY2tvZmZEZWxheV8gPSAwO1xuICAgIHRoaXMudGltZW91dElEXyA9IC0xO1xuXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcbiAgICAgICAgYmFja29mZjogdGhpcy5vbkJhY2tvZmZfLmJpbmQodGhpcylcbiAgICB9O1xufVxudXRpbC5pbmhlcml0cyhCYWNrb2ZmLCBldmVudHMuRXZlbnRFbWl0dGVyKTtcblxuLy8gU2V0cyBhIGxpbWl0LCBncmVhdGVyIHRoYW4gMCwgb24gdGhlIG1heGltdW0gbnVtYmVyIG9mIGJhY2tvZmZzLiBBICdmYWlsJ1xuLy8gZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdoZW4gdGhlIGxpbWl0IGlzIHJlYWNoZWQuXG5CYWNrb2ZmLnByb3RvdHlwZS5mYWlsQWZ0ZXIgPSBmdW5jdGlvbihtYXhOdW1iZXJPZlJldHJ5KSB7XG4gICAgcHJlY29uZC5jaGVja0FyZ3VtZW50KG1heE51bWJlck9mUmV0cnkgPiAwLFxuICAgICAgICAnRXhwZWN0ZWQgYSBtYXhpbXVtIG51bWJlciBvZiByZXRyeSBncmVhdGVyIHRoYW4gMCBidXQgZ290ICVzLicsXG4gICAgICAgIG1heE51bWJlck9mUmV0cnkpO1xuXG4gICAgdGhpcy5tYXhOdW1iZXJPZlJldHJ5XyA9IG1heE51bWJlck9mUmV0cnk7XG59O1xuXG4vLyBTdGFydHMgYSBiYWNrb2ZmIG9wZXJhdGlvbi4gQWNjZXB0cyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdG8gbGV0IHRoZVxuLy8gbGlzdGVuZXJzIGtub3cgd2h5IHRoZSBiYWNrb2ZmIG9wZXJhdGlvbiB3YXMgc3RhcnRlZC5cbkJhY2tvZmYucHJvdG90eXBlLmJhY2tvZmYgPSBmdW5jdGlvbihlcnIpIHtcbiAgICBwcmVjb25kLmNoZWNrU3RhdGUodGhpcy50aW1lb3V0SURfID09PSAtMSwgJ0JhY2tvZmYgaW4gcHJvZ3Jlc3MuJyk7XG5cbiAgICBpZiAodGhpcy5iYWNrb2ZmTnVtYmVyXyA9PT0gdGhpcy5tYXhOdW1iZXJPZlJldHJ5Xykge1xuICAgICAgICB0aGlzLmVtaXQoJ2ZhaWwnLCBlcnIpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iYWNrb2ZmRGVsYXlfID0gdGhpcy5iYWNrb2ZmU3RyYXRlZ3lfLm5leHQoKTtcbiAgICAgICAgdGhpcy50aW1lb3V0SURfID0gc2V0VGltZW91dCh0aGlzLmhhbmRsZXJzLmJhY2tvZmYsIHRoaXMuYmFja29mZkRlbGF5Xyk7XG4gICAgICAgIHRoaXMuZW1pdCgnYmFja29mZicsIHRoaXMuYmFja29mZk51bWJlcl8sIHRoaXMuYmFja29mZkRlbGF5XywgZXJyKTtcbiAgICB9XG59O1xuXG4vLyBIYW5kbGVzIHRoZSBiYWNrb2ZmIHRpbWVvdXQgY29tcGxldGlvbi5cbkJhY2tvZmYucHJvdG90eXBlLm9uQmFja29mZl8gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRpbWVvdXRJRF8gPSAtMTtcbiAgICB0aGlzLmVtaXQoJ3JlYWR5JywgdGhpcy5iYWNrb2ZmTnVtYmVyXywgdGhpcy5iYWNrb2ZmRGVsYXlfKTtcbiAgICB0aGlzLmJhY2tvZmZOdW1iZXJfKys7XG59O1xuXG4vLyBTdG9wcyBhbnkgYmFja29mZiBvcGVyYXRpb24gYW5kIHJlc2V0cyB0aGUgYmFja29mZiBkZWxheSB0byBpdHMgaW5pdGFsIHZhbHVlLlxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJhY2tvZmZOdW1iZXJfID0gMDtcbiAgICB0aGlzLmJhY2tvZmZTdHJhdGVneV8ucmVzZXQoKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SURfKTtcbiAgICB0aGlzLnRpbWVvdXRJRF8gPSAtMTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWNrb2ZmL2xpYi9iYWNrb2ZmLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAgICAgIENvcHlyaWdodCAoYykgMjAxMiBNYXRoaWV1IFR1cmNvdHRlXG4vLyAgICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbnZhciBCYWNrb2ZmU3RyYXRlZ3kgPSByZXF1aXJlKCcuL3N0cmF0ZWd5Jyk7XG5cbi8vIEZpYm9uYWNjaSBiYWNrb2ZmIHN0cmF0ZWd5LlxuZnVuY3Rpb24gRmlib25hY2NpQmFja29mZlN0cmF0ZWd5KG9wdGlvbnMpIHtcbiAgICBCYWNrb2ZmU3RyYXRlZ3kuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmJhY2tvZmZEZWxheV8gPSAwO1xuICAgIHRoaXMubmV4dEJhY2tvZmZEZWxheV8gPSB0aGlzLmdldEluaXRpYWxEZWxheSgpO1xufVxudXRpbC5pbmhlcml0cyhGaWJvbmFjY2lCYWNrb2ZmU3RyYXRlZ3ksIEJhY2tvZmZTdHJhdGVneSk7XG5cbkZpYm9uYWNjaUJhY2tvZmZTdHJhdGVneS5wcm90b3R5cGUubmV4dF8gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYmFja29mZkRlbGF5ID0gTWF0aC5taW4odGhpcy5uZXh0QmFja29mZkRlbGF5XywgdGhpcy5nZXRNYXhEZWxheSgpKTtcbiAgICB0aGlzLm5leHRCYWNrb2ZmRGVsYXlfICs9IHRoaXMuYmFja29mZkRlbGF5XztcbiAgICB0aGlzLmJhY2tvZmZEZWxheV8gPSBiYWNrb2ZmRGVsYXk7XG4gICAgcmV0dXJuIGJhY2tvZmZEZWxheTtcbn07XG5cbkZpYm9uYWNjaUJhY2tvZmZTdHJhdGVneS5wcm90b3R5cGUucmVzZXRfID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5uZXh0QmFja29mZkRlbGF5XyA9IHRoaXMuZ2V0SW5pdGlhbERlbGF5KCk7XG4gICAgdGhpcy5iYWNrb2ZmRGVsYXlfID0gMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlib25hY2NpQmFja29mZlN0cmF0ZWd5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhY2tvZmYvbGliL3N0cmF0ZWd5L2ZpYm9uYWNjaS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gICAgICBDb3B5cmlnaHQgKGMpIDIwMTIgTWF0aGlldSBUdXJjb3R0ZVxuLy8gICAgICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG5mdW5jdGlvbiBpc0RlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG4vLyBBYnN0cmFjdCBjbGFzcyBkZWZpbmluZyB0aGUgc2tlbGV0b24gZm9yIHRoZSBiYWNrb2ZmIHN0cmF0ZWdpZXMuIEFjY2VwdHMgYW5cbi8vIG9iamVjdCBob2xkaW5nIHRoZSBvcHRpb25zIGZvciB0aGUgYmFja29mZiBzdHJhdGVneTpcbi8vXG4vLyAgKiBgcmFuZG9taXNhdGlvbkZhY3RvcmA6IFRoZSByYW5kb21pc2F0aW9uIGZhY3RvciB3aGljaCBtdXN0IGJlIGJldHdlZW4gMFxuLy8gICAgIGFuZCAxIHdoZXJlIDEgZXF1YXRlcyB0byBhIHJhbmRvbWl6YXRpb24gZmFjdG9yIG9mIDEwMCUgYW5kIDAgdG8gbm9cbi8vICAgICByYW5kb21pemF0aW9uLlxuLy8gICogYGluaXRpYWxEZWxheWA6IFRoZSBiYWNrb2ZmIGluaXRpYWwgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLlxuLy8gICogYG1heERlbGF5YDogVGhlIGJhY2tvZmYgbWF4aW1hbCBkZWxheSBpbiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiBCYWNrb2ZmU3RyYXRlZ3kob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKGlzRGVmKG9wdGlvbnMuaW5pdGlhbERlbGF5KSAmJiBvcHRpb25zLmluaXRpYWxEZWxheSA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5pdGlhbCB0aW1lb3V0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyk7XG4gICAgfSBlbHNlIGlmIChpc0RlZihvcHRpb25zLm1heERlbGF5KSAmJiBvcHRpb25zLm1heERlbGF5IDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtYXhpbWFsIHRpbWVvdXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxEZWxheV8gPSBvcHRpb25zLmluaXRpYWxEZWxheSB8fCAxMDA7XG4gICAgdGhpcy5tYXhEZWxheV8gPSBvcHRpb25zLm1heERlbGF5IHx8IDEwMDAwO1xuXG4gICAgaWYgKHRoaXMubWF4RGVsYXlfIDw9IHRoaXMuaW5pdGlhbERlbGF5Xykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtYXhpbWFsIGJhY2tvZmYgZGVsYXkgbXVzdCBiZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdncmVhdGVyIHRoYW4gdGhlIGluaXRpYWwgYmFja29mZiBkZWxheS4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWYob3B0aW9ucy5yYW5kb21pc2F0aW9uRmFjdG9yKSAmJlxuICAgICAgICAob3B0aW9ucy5yYW5kb21pc2F0aW9uRmFjdG9yIDwgMCB8fCBvcHRpb25zLnJhbmRvbWlzYXRpb25GYWN0b3IgPiAxKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByYW5kb21pc2F0aW9uIGZhY3RvciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnJhbmRvbWlzYXRpb25GYWN0b3JfID0gb3B0aW9ucy5yYW5kb21pc2F0aW9uRmFjdG9yIHx8IDA7XG59XG5cbi8vIEdldHMgdGhlIG1heGltYWwgYmFja29mZiBkZWxheS5cbkJhY2tvZmZTdHJhdGVneS5wcm90b3R5cGUuZ2V0TWF4RGVsYXkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhEZWxheV87XG59O1xuXG4vLyBHZXRzIHRoZSBpbml0aWFsIGJhY2tvZmYgZGVsYXkuXG5CYWNrb2ZmU3RyYXRlZ3kucHJvdG90eXBlLmdldEluaXRpYWxEZWxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxEZWxheV87XG59O1xuXG4vLyBUZW1wbGF0ZSBtZXRob2QgdGhhdCBjb21wdXRlcyBhbmQgcmV0dXJucyB0aGUgbmV4dCBiYWNrb2ZmIGRlbGF5IGluXG4vLyBtaWxsaXNlY29uZHMuXG5CYWNrb2ZmU3RyYXRlZ3kucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYmFja29mZkRlbGF5ID0gdGhpcy5uZXh0XygpO1xuICAgIHZhciByYW5kb21pc2F0aW9uTXVsdGlwbGUgPSAxICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9taXNhdGlvbkZhY3Rvcl87XG4gICAgdmFyIHJhbmRvbWl6ZWREZWxheSA9IE1hdGgucm91bmQoYmFja29mZkRlbGF5ICogcmFuZG9taXNhdGlvbk11bHRpcGxlKTtcbiAgICByZXR1cm4gcmFuZG9taXplZERlbGF5O1xufTtcblxuLy8gQ29tcHV0ZXMgYW5kIHJldHVybnMgdGhlIG5leHQgYmFja29mZiBkZWxheS4gSW50ZW5kZWQgdG8gYmUgb3ZlcnJpZGRlbiBieVxuLy8gc3ViY2xhc3Nlcy5cbkJhY2tvZmZTdHJhdGVneS5wcm90b3R5cGUubmV4dF8gPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhY2tvZmZTdHJhdGVneS5uZXh0XygpIHVuaW1wbGVtZW50ZWQuJyk7XG59O1xuXG4vLyBUZW1wbGF0ZSBtZXRob2QgdGhhdCByZXNldHMgdGhlIGJhY2tvZmYgZGVsYXkgdG8gaXRzIGluaXRpYWwgdmFsdWUuXG5CYWNrb2ZmU3RyYXRlZ3kucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZXNldF8oKTtcbn07XG5cbi8vIFJlc2V0cyB0aGUgYmFja29mZiBkZWxheSB0byBpdHMgaW5pdGlhbCB2YWx1ZS4gSW50ZW5kZWQgdG8gYmUgb3ZlcnJpZGRlbiBieVxuLy8gc3ViY2xhc3Nlcy5cbkJhY2tvZmZTdHJhdGVneS5wcm90b3R5cGUucmVzZXRfID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCYWNrb2ZmU3RyYXRlZ3kucmVzZXRfKCkgdW5pbXBsZW1lbnRlZC4nKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZlN0cmF0ZWd5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhY2tvZmYvbGliL3N0cmF0ZWd5L3N0cmF0ZWd5LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGV2ZW50LWxpdGUuanMgLSBMaWdodC13ZWlnaHQgRXZlbnRFbWl0dGVyIChsZXNzIHRoYW4gMUtCIHdoZW4gZ3ppcHBlZClcbiAqXG4gKiBAY29weXJpZ2h0IFl1c3VrZSBLYXdhc2FraVxuICogQGxpY2Vuc2UgTUlUXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2thd2FuZXQvZXZlbnQtbGl0ZVxuICogQHNlZSBodHRwOi8va2F3YW5ldC5naXRodWIuaW8vZXZlbnQtbGl0ZS9FdmVudExpdGUuaHRtbFxuICogQGV4YW1wbGVcbiAqIHZhciBFdmVudExpdGUgPSByZXF1aXJlKFwiZXZlbnQtbGl0ZVwiKTtcbiAqXG4gKiBmdW5jdGlvbiBNeUNsYXNzKCkgey4uLn0gICAgICAgICAgICAgLy8geW91ciBjbGFzc1xuICpcbiAqIEV2ZW50TGl0ZS5taXhpbihNeUNsYXNzLnByb3RvdHlwZSk7ICAvLyBpbXBvcnQgZXZlbnQgbWV0aG9kc1xuICpcbiAqIHZhciBvYmogPSBuZXcgTXlDbGFzcygpO1xuICogb2JqLm9uKFwiZm9vXCIsIGZ1bmN0aW9uKCkgey4uLn0pOyAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gKiBvYmoub25jZShcImJhclwiLCBmdW5jdGlvbigpIHsuLi59KTsgICAvLyBhZGQgb25lLXRpbWUgZXZlbnQgbGlzdGVuZXJcbiAqIG9iai5lbWl0KFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGV2ZW50XG4gKiBvYmouZW1pdChcImJhclwiKTsgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBhbm90aGVyIGV2ZW50XG4gKiBvYmoub2ZmKFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXJcbiAqL1xuXG5mdW5jdGlvbiBFdmVudExpdGUoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFdmVudExpdGUpKSByZXR1cm4gbmV3IEV2ZW50TGl0ZSgpO1xufVxuXG4oZnVuY3Rpb24oRXZlbnRMaXRlKSB7XG4gIC8vIGV4cG9ydCB0aGUgY2xhc3MgZm9yIG5vZGUuanNcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBtb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gRXZlbnRMaXRlO1xuXG4gIC8vIHByb3BlcnR5IG5hbWUgdG8gaG9sZCBsaXN0ZW5lcnNcbiAgdmFyIExJU1RFTkVSUyA9IFwibGlzdGVuZXJzXCI7XG5cbiAgLy8gbWV0aG9kcyB0byBleHBvcnRcbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgb246IG9uLFxuICAgIG9uY2U6IG9uY2UsXG4gICAgb2ZmOiBvZmYsXG4gICAgZW1pdDogZW1pdFxuICB9O1xuXG4gIC8vIG1peGluIHRvIHNlbGZcbiAgbWl4aW4oRXZlbnRMaXRlLnByb3RvdHlwZSk7XG5cbiAgLy8gZXhwb3J0IG1peGluIGZ1bmN0aW9uXG4gIEV2ZW50TGl0ZS5taXhpbiA9IG1peGluO1xuXG4gIC8qKlxuICAgKiBJbXBvcnQgb24oKSwgb25jZSgpLCBvZmYoKSBhbmQgZW1pdCgpIG1ldGhvZHMgaW50byB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLm1peGluXG4gICAqIEBwYXJhbSB0YXJnZXQge1Byb3RvdHlwZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gbWl4aW4odGFyZ2V0KSB7XG4gICAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHRhcmdldFtrZXldID0gbWV0aG9kc1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUub25cbiAgICogQHBhcmFtIHR5cGUge3N0cmluZ31cbiAgICogQHBhcmFtIGZ1bmMge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXRlfSBTZWxmIGZvciBtZXRob2QgY2hhaW5pbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gb24odHlwZSwgZnVuYykge1xuICAgIGdldExpc3RlbmVycyh0aGlzLCB0eXBlKS5wdXNoKGZ1bmMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUtdGltZSBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUub25jZVxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZnVuYyB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtFdmVudExpdGV9IFNlbGYgZm9yIG1ldGhvZCBjaGFpbmluZ1xuICAgKi9cblxuICBmdW5jdGlvbiBvbmNlKHR5cGUsIGZ1bmMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgd3JhcC5vcmlnaW5hbExpc3RlbmVyID0gZnVuYztcbiAgICBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSkucHVzaCh3cmFwKTtcbiAgICByZXR1cm4gdGhhdDtcblxuICAgIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgICBvZmYuY2FsbCh0aGF0LCB0eXBlLCB3cmFwKTtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5vZmZcbiAgICogQHBhcmFtIFt0eXBlXSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gW2Z1bmNdIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge0V2ZW50TGl0ZX0gU2VsZiBmb3IgbWV0aG9kIGNoYWluaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9mZih0eXBlLCBmdW5jKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBsaXN0bmVycztcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGF0W0xJU1RFTkVSU107XG4gICAgfSBlbHNlIGlmICghZnVuYykge1xuICAgICAgbGlzdG5lcnMgPSB0aGF0W0xJU1RFTkVSU107XG4gICAgICBpZiAobGlzdG5lcnMpIHtcbiAgICAgICAgZGVsZXRlIGxpc3RuZXJzW3R5cGVdO1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGxpc3RuZXJzKS5sZW5ndGgpIHJldHVybiBvZmYuY2FsbCh0aGF0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdG5lcnMgPSBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgdHJ1ZSk7XG4gICAgICBpZiAobGlzdG5lcnMpIHtcbiAgICAgICAgbGlzdG5lcnMgPSBsaXN0bmVycy5maWx0ZXIobmUpO1xuICAgICAgICBpZiAoIWxpc3RuZXJzLmxlbmd0aCkgcmV0dXJuIG9mZi5jYWxsKHRoYXQsIHR5cGUpO1xuICAgICAgICB0aGF0W0xJU1RFTkVSU11bdHlwZV0gPSBsaXN0bmVycztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoYXQ7XG5cbiAgICBmdW5jdGlvbiBuZSh0ZXN0KSB7XG4gICAgICByZXR1cm4gdGVzdCAhPT0gZnVuYyAmJiB0ZXN0Lm9yaWdpbmFsTGlzdGVuZXIgIT09IGZ1bmM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoICh0cmlnZ2VyKSBhbiBldmVudC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUuZW1pdFxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gW3ZhbHVlXSB7Kn1cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgd2hlbiBhIGxpc3RlbmVyIHJlY2VpdmVkIHRoZSBldmVudFxuICAgKi9cblxuICBmdW5jdGlvbiBlbWl0KHR5cGUsIHZhbHVlKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgdHJ1ZSk7XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgYXJnbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYXJnbGVuID09PSAxKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCh6ZXJvYXJnKTtcbiAgICB9IGVsc2UgaWYgKGFyZ2xlbiA9PT0gMikge1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2gob25lYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2gobW9yZWFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gISFsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gemVyb2FyZyhmdW5jKSB7XG4gICAgICBmdW5jLmNhbGwodGhhdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25lYXJnKGZ1bmMpIHtcbiAgICAgIGZ1bmMuY2FsbCh0aGF0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9yZWFyZ3MoZnVuYykge1xuICAgICAgZnVuYy5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgcmVhZG9ubHkpIHtcbiAgICBpZiAocmVhZG9ubHkgJiYgIXRoYXRbTElTVEVORVJTXSkgcmV0dXJuO1xuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGF0W0xJU1RFTkVSU10gfHwgKHRoYXRbTElTVEVORVJTXSA9IHt9KTtcbiAgICByZXR1cm4gbGlzdGVuZXJzW3R5cGVdIHx8IChsaXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG4gIH1cblxufSkoRXZlbnRMaXRlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ldmVudC1saXRlL2V2ZW50LWxpdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGRlY29kZS1idWZmZXIuanNcblxuZXhwb3J0cy5EZWNvZGVCdWZmZXIgPSBEZWNvZGVCdWZmZXI7XG5cbnZhciBwcmVzZXQgPSByZXF1aXJlKFwiLi9yZWFkLWNvcmVcIikucHJlc2V0O1xuXG52YXIgRmxleERlY29kZXIgPSByZXF1aXJlKFwiLi9mbGV4LWJ1ZmZlclwiKS5GbGV4RGVjb2RlcjtcblxuRmxleERlY29kZXIubWl4aW4oRGVjb2RlQnVmZmVyLnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIERlY29kZUJ1ZmZlcihvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEZWNvZGVCdWZmZXIpKSByZXR1cm4gbmV3IERlY29kZUJ1ZmZlcihvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMuY29kZWMpIHtcbiAgICAgIHZhciBjb2RlYyA9IHRoaXMuY29kZWMgPSBvcHRpb25zLmNvZGVjO1xuICAgICAgaWYgKGNvZGVjLmJ1ZmZlcmlzaCkgdGhpcy5idWZmZXJpc2ggPSBjb2RlYy5idWZmZXJpc2g7XG4gICAgfVxuICB9XG59XG5cbkRlY29kZUJ1ZmZlci5wcm90b3R5cGUuY29kZWMgPSBwcmVzZXQ7XG5cbkRlY29kZUJ1ZmZlci5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY29kZWMuZGVjb2RlKHRoaXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2RlY29kZS1idWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGRlY29kZS5qc1xuXG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcblxudmFyIERlY29kZUJ1ZmZlciA9IHJlcXVpcmUoXCIuL2RlY29kZS1idWZmZXJcIikuRGVjb2RlQnVmZmVyO1xuXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdmFyIGRlY29kZXIgPSBuZXcgRGVjb2RlQnVmZmVyKG9wdGlvbnMpO1xuICBkZWNvZGVyLndyaXRlKGlucHV0KTtcbiAgcmV0dXJuIGRlY29kZXIucmVhZCgpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZW5jb2RlLWJ1ZmZlci5qc1xuXG5leHBvcnRzLkVuY29kZUJ1ZmZlciA9IEVuY29kZUJ1ZmZlcjtcblxudmFyIHByZXNldCA9IHJlcXVpcmUoXCIuL3dyaXRlLWNvcmVcIikucHJlc2V0O1xuXG52YXIgRmxleEVuY29kZXIgPSByZXF1aXJlKFwiLi9mbGV4LWJ1ZmZlclwiKS5GbGV4RW5jb2RlcjtcblxuRmxleEVuY29kZXIubWl4aW4oRW5jb2RlQnVmZmVyLnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIEVuY29kZUJ1ZmZlcihvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFbmNvZGVCdWZmZXIpKSByZXR1cm4gbmV3IEVuY29kZUJ1ZmZlcihvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMuY29kZWMpIHtcbiAgICAgIHZhciBjb2RlYyA9IHRoaXMuY29kZWMgPSBvcHRpb25zLmNvZGVjO1xuICAgICAgaWYgKGNvZGVjLmJ1ZmZlcmlzaCkgdGhpcy5idWZmZXJpc2ggPSBjb2RlYy5idWZmZXJpc2g7XG4gICAgfVxuICB9XG59XG5cbkVuY29kZUJ1ZmZlci5wcm90b3R5cGUuY29kZWMgPSBwcmVzZXQ7XG5cbkVuY29kZUJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihpbnB1dCkge1xuICB0aGlzLmNvZGVjLmVuY29kZSh0aGlzLCBpbnB1dCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvZW5jb2RlLWJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZW5jb2RlLmpzXG5cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuXG52YXIgRW5jb2RlQnVmZmVyID0gcmVxdWlyZShcIi4vZW5jb2RlLWJ1ZmZlclwiKS5FbmNvZGVCdWZmZXI7XG5cbmZ1bmN0aW9uIGVuY29kZShpbnB1dCwgb3B0aW9ucykge1xuICB2YXIgZW5jb2RlciA9IG5ldyBFbmNvZGVCdWZmZXIob3B0aW9ucyk7XG4gIGVuY29kZXIud3JpdGUoaW5wdXQpO1xuICByZXR1cm4gZW5jb2Rlci5yZWFkKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZsZXgtYnVmZmVyLmpzXG5cbmV4cG9ydHMuRmxleERlY29kZXIgPSBGbGV4RGVjb2RlcjtcbmV4cG9ydHMuRmxleEVuY29kZXIgPSBGbGV4RW5jb2RlcjtcblxudmFyIEJ1ZmZlcmlzaCA9IHJlcXVpcmUoXCIuL2J1ZmZlcmlzaFwiKTtcblxudmFyIE1JTl9CVUZGRVJfU0laRSA9IDIwNDg7XG52YXIgTUFYX0JVRkZFUl9TSVpFID0gNjU1MzY7XG52YXIgQlVGRkVSX1NIT1JUQUdFID0gXCJCVUZGRVJfU0hPUlRBR0VcIjtcblxuZnVuY3Rpb24gRmxleERlY29kZXIoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGbGV4RGVjb2RlcikpIHJldHVybiBuZXcgRmxleERlY29kZXIoKTtcbn1cblxuZnVuY3Rpb24gRmxleEVuY29kZXIoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGbGV4RW5jb2RlcikpIHJldHVybiBuZXcgRmxleEVuY29kZXIoKTtcbn1cblxuRmxleERlY29kZXIubWl4aW4gPSBtaXhpbkZhY3RvcnkoZ2V0RGVjb2Rlck1ldGhvZHMoKSk7XG5GbGV4RGVjb2Rlci5taXhpbihGbGV4RGVjb2Rlci5wcm90b3R5cGUpO1xuXG5GbGV4RW5jb2Rlci5taXhpbiA9IG1peGluRmFjdG9yeShnZXRFbmNvZGVyTWV0aG9kcygpKTtcbkZsZXhFbmNvZGVyLm1peGluKEZsZXhFbmNvZGVyLnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIGdldERlY29kZXJNZXRob2RzKCkge1xuICByZXR1cm4ge1xuICAgIGJ1ZmZlcmlzaDogQnVmZmVyaXNoLFxuICAgIHdyaXRlOiB3cml0ZSxcbiAgICBmZXRjaDogZmV0Y2gsXG4gICAgZmx1c2g6IGZsdXNoLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcHVsbDogcHVsbCxcbiAgICByZWFkOiByZWFkLFxuICAgIHJlc2VydmU6IHJlc2VydmUsXG4gICAgb2Zmc2V0OiAwXG4gIH07XG5cbiAgZnVuY3Rpb24gd3JpdGUoY2h1bmspIHtcbiAgICB2YXIgcHJldiA9IHRoaXMub2Zmc2V0ID8gQnVmZmVyaXNoLnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuYnVmZmVyLCB0aGlzLm9mZnNldCkgOiB0aGlzLmJ1ZmZlcjtcbiAgICB0aGlzLmJ1ZmZlciA9IHByZXYgPyAoY2h1bmsgPyB0aGlzLmJ1ZmZlcmlzaC5jb25jYXQoW3ByZXYsIGNodW5rXSkgOiBwcmV2KSA6IGNodW5rO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHdoaWxlICh0aGlzLm9mZnNldCA8IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xuICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZmV0Y2goKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUgJiYgZS5tZXNzYWdlICE9IEJVRkZFUl9TSE9SVEFHRSkgdGhyb3cgZTtcbiAgICAgICAgLy8gcm9sbGJhY2tcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBzdGFydDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2VydmUobGVuZ3RoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5vZmZzZXQ7XG4gICAgdmFyIGVuZCA9IHN0YXJ0ICsgbGVuZ3RoO1xuICAgIGlmIChlbmQgPiB0aGlzLmJ1ZmZlci5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihCVUZGRVJfU0hPUlRBR0UpO1xuICAgIHRoaXMub2Zmc2V0ID0gZW5kO1xuICAgIHJldHVybiBzdGFydDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFbmNvZGVyTWV0aG9kcygpIHtcbiAgcmV0dXJuIHtcbiAgICBidWZmZXJpc2g6IEJ1ZmZlcmlzaCxcbiAgICB3cml0ZTogd3JpdGUsXG4gICAgZmV0Y2g6IGZldGNoLFxuICAgIGZsdXNoOiBmbHVzaCxcbiAgICBwdXNoOiBwdXNoLFxuICAgIHB1bGw6IHB1bGwsXG4gICAgcmVhZDogcmVhZCxcbiAgICByZXNlcnZlOiByZXNlcnZlLFxuICAgIHNlbmQ6IHNlbmQsXG4gICAgbWF4QnVmZmVyU2l6ZTogTUFYX0JVRkZFUl9TSVpFLFxuICAgIG1pbkJ1ZmZlclNpemU6IE1JTl9CVUZGRVJfU0laRSxcbiAgICBvZmZzZXQ6IDAsXG4gICAgc3RhcnQ6IDBcbiAgfTtcblxuICBmdW5jdGlvbiBmZXRjaCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0O1xuICAgIGlmIChzdGFydCA8IHRoaXMub2Zmc2V0KSB7XG4gICAgICB2YXIgZW5kID0gdGhpcy5zdGFydCA9IHRoaXMub2Zmc2V0O1xuICAgICAgcmV0dXJuIEJ1ZmZlcmlzaC5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmJ1ZmZlciwgc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKHRoaXMuc3RhcnQgPCB0aGlzLm9mZnNldCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5mZXRjaCgpO1xuICAgICAgaWYgKHZhbHVlKSB0aGlzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1bGwoKSB7XG4gICAgdmFyIGJ1ZmZlcnMgPSB0aGlzLmJ1ZmZlcnMgfHwgKHRoaXMuYnVmZmVycyA9IFtdKTtcbiAgICB2YXIgY2h1bmsgPSBidWZmZXJzLmxlbmd0aCA+IDEgPyB0aGlzLmJ1ZmZlcmlzaC5jb25jYXQoYnVmZmVycykgOiBidWZmZXJzWzBdO1xuICAgIGJ1ZmZlcnMubGVuZ3RoID0gMDsgLy8gYnVmZmVyIGV4aGF1c3RlZFxuICAgIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2VydmUobGVuZ3RoKSB7XG4gICAgdmFyIHJlcSA9IGxlbmd0aCB8IDA7XG5cbiAgICBpZiAodGhpcy5idWZmZXIpIHtcbiAgICAgIHZhciBzaXplID0gdGhpcy5idWZmZXIubGVuZ3RoO1xuICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5vZmZzZXQgfCAwO1xuICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgcmVxO1xuXG4gICAgICAvLyBpcyBpdCBsb25nIGVub3VnaD9cbiAgICAgIGlmIChlbmQgPCBzaXplKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gZW5kO1xuICAgICAgICByZXR1cm4gc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGZsdXNoIGN1cnJlbnQgYnVmZmVyXG4gICAgICB0aGlzLmZsdXNoKCk7XG5cbiAgICAgIC8vIHJlc2l6ZSBpdCB0byAyeCBjdXJyZW50IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCBNYXRoLm1pbihzaXplICogMiwgdGhpcy5tYXhCdWZmZXJTaXplKSk7XG4gICAgfVxuXG4gICAgLy8gbWluaW11bSBidWZmZXIgc2l6ZVxuICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgdGhpcy5taW5CdWZmZXJTaXplKTtcblxuICAgIC8vIGFsbG9jYXRlIG5ldyBidWZmZXJcbiAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyaXNoLmFsbG9jKGxlbmd0aCk7XG4gICAgdGhpcy5zdGFydCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSByZXE7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kKGJ1ZmZlcikge1xuICAgIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPiB0aGlzLm1pbkJ1ZmZlclNpemUpIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgIHRoaXMucHVzaChidWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5yZXNlcnZlKGxlbmd0aCk7XG4gICAgICBCdWZmZXJpc2gucHJvdG90eXBlLmNvcHkuY2FsbChidWZmZXIsIHRoaXMuYnVmZmVyLCBvZmZzZXQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjb21tb24gbWV0aG9kc1xuXG5mdW5jdGlvbiB3cml0ZSgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIG5vdCBpbXBsZW1lbnRlZDogd3JpdGUoKVwiKTtcbn1cblxuZnVuY3Rpb24gZmV0Y2goKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBub3QgaW1wbGVtZW50ZWQ6IGZldGNoKClcIik7XG59XG5cbmZ1bmN0aW9uIHJlYWQoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmJ1ZmZlcnMgJiYgdGhpcy5idWZmZXJzLmxlbmd0aDtcblxuICAvLyBmZXRjaCB0aGUgZmlyc3QgcmVzdWx0XG4gIGlmICghbGVuZ3RoKSByZXR1cm4gdGhpcy5mZXRjaCgpO1xuXG4gIC8vIGZsdXNoIGN1cnJlbnQgYnVmZmVyXG4gIHRoaXMuZmx1c2goKTtcblxuICAvLyByZWFkIGZyb20gdGhlIHJlc3VsdHNcbiAgcmV0dXJuIHRoaXMucHVsbCgpO1xufVxuXG5mdW5jdGlvbiBwdXNoKGNodW5rKSB7XG4gIHZhciBidWZmZXJzID0gdGhpcy5idWZmZXJzIHx8ICh0aGlzLmJ1ZmZlcnMgPSBbXSk7XG4gIGJ1ZmZlcnMucHVzaChjaHVuayk7XG59XG5cbmZ1bmN0aW9uIHB1bGwoKSB7XG4gIHZhciBidWZmZXJzID0gdGhpcy5idWZmZXJzIHx8ICh0aGlzLmJ1ZmZlcnMgPSBbXSk7XG4gIHJldHVybiBidWZmZXJzLnNoaWZ0KCk7XG59XG5cbmZ1bmN0aW9uIG1peGluRmFjdG9yeShzb3VyY2UpIHtcbiAgcmV0dXJuIG1peGluO1xuXG4gIGZ1bmN0aW9uIG1peGluKHRhcmdldCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2ZsZXgtYnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZWFkLWZvcm1hdC5qc1xuXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoXCJpZWVlNzU0XCIpO1xudmFyIEludDY0QnVmZmVyID0gcmVxdWlyZShcImludDY0LWJ1ZmZlclwiKTtcbnZhciBVaW50NjRCRSA9IEludDY0QnVmZmVyLlVpbnQ2NEJFO1xudmFyIEludDY0QkUgPSBJbnQ2NEJ1ZmZlci5JbnQ2NEJFO1xuXG5leHBvcnRzLmdldFJlYWRGb3JtYXQgPSBnZXRSZWFkRm9ybWF0O1xuZXhwb3J0cy5yZWFkVWludDggPSB1aW50ODtcblxudmFyIEJ1ZmZlcmlzaCA9IHJlcXVpcmUoXCIuL2J1ZmZlcmlzaFwiKTtcbnZhciBCdWZmZXJQcm90byA9IHJlcXVpcmUoXCIuL2J1ZmZlcmlzaC1wcm90b1wiKTtcblxudmFyIEhBU19NQVAgPSAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIE1hcCk7XG52YXIgTk9fQVNTRVJUID0gdHJ1ZTtcblxuZnVuY3Rpb24gZ2V0UmVhZEZvcm1hdChvcHRpb25zKSB7XG4gIHZhciBiaW5hcnJheWJ1ZmZlciA9IEJ1ZmZlcmlzaC5oYXNBcnJheUJ1ZmZlciAmJiBvcHRpb25zICYmIG9wdGlvbnMuYmluYXJyYXlidWZmZXI7XG4gIHZhciBpbnQ2NCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbnQ2NDtcbiAgdmFyIHVzZW1hcCA9IEhBU19NQVAgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnVzZW1hcDtcblxuICB2YXIgcmVhZEZvcm1hdCA9IHtcbiAgICBtYXA6ICh1c2VtYXAgPyBtYXBfdG9fbWFwIDogbWFwX3RvX29iaiksXG4gICAgYXJyYXk6IGFycmF5LFxuICAgIHN0cjogc3RyLFxuICAgIGJpbjogKGJpbmFycmF5YnVmZmVyID8gYmluX2FycmF5YnVmZmVyIDogYmluX2J1ZmZlciksXG4gICAgZXh0OiBleHQsXG4gICAgdWludDg6IHVpbnQ4LFxuICAgIHVpbnQxNjogdWludDE2LFxuICAgIHVpbnQzMjogdWludDMyLFxuICAgIHVpbnQ2NDogcmVhZCg4LCBpbnQ2NCA/IHJlYWRVSW50NjRCRV9pbnQ2NCA6IHJlYWRVSW50NjRCRSksXG4gICAgaW50ODogaW50OCxcbiAgICBpbnQxNjogaW50MTYsXG4gICAgaW50MzI6IGludDMyLFxuICAgIGludDY0OiByZWFkKDgsIGludDY0ID8gcmVhZEludDY0QkVfaW50NjQgOiByZWFkSW50NjRCRSksXG4gICAgZmxvYXQzMjogcmVhZCg0LCByZWFkRmxvYXRCRSksXG4gICAgZmxvYXQ2NDogcmVhZCg4LCByZWFkRG91YmxlQkUpXG4gIH07XG5cbiAgcmV0dXJuIHJlYWRGb3JtYXQ7XG59XG5cbmZ1bmN0aW9uIG1hcF90b19vYmooZGVjb2RlciwgbGVuKSB7XG4gIHZhciB2YWx1ZSA9IHt9O1xuICB2YXIgaTtcbiAgdmFyIGsgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIHYgPSBuZXcgQXJyYXkobGVuKTtcblxuICB2YXIgZGVjb2RlID0gZGVjb2Rlci5jb2RlYy5kZWNvZGU7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGtbaV0gPSBkZWNvZGUoZGVjb2Rlcik7XG4gICAgdltpXSA9IGRlY29kZShkZWNvZGVyKTtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YWx1ZVtrW2ldXSA9IHZbaV07XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBtYXBfdG9fbWFwKGRlY29kZXIsIGxlbikge1xuICB2YXIgdmFsdWUgPSBuZXcgTWFwKCk7XG4gIHZhciBpO1xuICB2YXIgayA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgdiA9IG5ldyBBcnJheShsZW4pO1xuXG4gIHZhciBkZWNvZGUgPSBkZWNvZGVyLmNvZGVjLmRlY29kZTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga1tpXSA9IGRlY29kZShkZWNvZGVyKTtcbiAgICB2W2ldID0gZGVjb2RlKGRlY29kZXIpO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhbHVlLnNldChrW2ldLCB2W2ldKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFycmF5KGRlY29kZXIsIGxlbikge1xuICB2YXIgdmFsdWUgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIGRlY29kZSA9IGRlY29kZXIuY29kZWMuZGVjb2RlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFsdWVbaV0gPSBkZWNvZGUoZGVjb2Rlcik7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzdHIoZGVjb2RlciwgbGVuKSB7XG4gIHZhciBzdGFydCA9IGRlY29kZXIucmVzZXJ2ZShsZW4pO1xuICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gIHJldHVybiBCdWZmZXJQcm90by50b1N0cmluZy5jYWxsKGRlY29kZXIuYnVmZmVyLCBcInV0Zi04XCIsIHN0YXJ0LCBlbmQpO1xufVxuXG5mdW5jdGlvbiBiaW5fYnVmZmVyKGRlY29kZXIsIGxlbikge1xuICB2YXIgc3RhcnQgPSBkZWNvZGVyLnJlc2VydmUobGVuKTtcbiAgdmFyIGVuZCA9IHN0YXJ0ICsgbGVuO1xuICB2YXIgYnVmID0gQnVmZmVyUHJvdG8uc2xpY2UuY2FsbChkZWNvZGVyLmJ1ZmZlciwgc3RhcnQsIGVuZCk7XG4gIHJldHVybiBCdWZmZXJpc2guZnJvbShidWYpO1xufVxuXG5mdW5jdGlvbiBiaW5fYXJyYXlidWZmZXIoZGVjb2RlciwgbGVuKSB7XG4gIHZhciBzdGFydCA9IGRlY29kZXIucmVzZXJ2ZShsZW4pO1xuICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gIHZhciBidWYgPSBCdWZmZXJQcm90by5zbGljZS5jYWxsKGRlY29kZXIuYnVmZmVyLCBzdGFydCwgZW5kKTtcbiAgcmV0dXJuIEJ1ZmZlcmlzaC5VaW50OEFycmF5LmZyb20oYnVmKS5idWZmZXI7XG59XG5cbmZ1bmN0aW9uIGV4dChkZWNvZGVyLCBsZW4pIHtcbiAgdmFyIHN0YXJ0ID0gZGVjb2Rlci5yZXNlcnZlKGxlbisxKTtcbiAgdmFyIHR5cGUgPSBkZWNvZGVyLmJ1ZmZlcltzdGFydCsrXTtcbiAgdmFyIGVuZCA9IHN0YXJ0ICsgbGVuO1xuICB2YXIgdW5wYWNrID0gZGVjb2Rlci5jb2RlYy5nZXRFeHRVbnBhY2tlcih0eXBlKTtcbiAgaWYgKCF1bnBhY2spIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZXh0IHR5cGU6IFwiICsgKHR5cGUgPyAoXCIweFwiICsgdHlwZS50b1N0cmluZygxNikpIDogdHlwZSkpO1xuICB2YXIgYnVmID0gQnVmZmVyUHJvdG8uc2xpY2UuY2FsbChkZWNvZGVyLmJ1ZmZlciwgc3RhcnQsIGVuZCk7XG4gIHJldHVybiB1bnBhY2soYnVmKTtcbn1cblxuZnVuY3Rpb24gdWludDgoZGVjb2Rlcikge1xuICB2YXIgc3RhcnQgPSBkZWNvZGVyLnJlc2VydmUoMSk7XG4gIHJldHVybiBkZWNvZGVyLmJ1ZmZlcltzdGFydF07XG59XG5cbmZ1bmN0aW9uIGludDgoZGVjb2Rlcikge1xuICB2YXIgc3RhcnQgPSBkZWNvZGVyLnJlc2VydmUoMSk7XG4gIHZhciB2YWx1ZSA9IGRlY29kZXIuYnVmZmVyW3N0YXJ0XTtcbiAgcmV0dXJuICh2YWx1ZSAmIDB4ODApID8gdmFsdWUgLSAweDEwMCA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1aW50MTYoZGVjb2Rlcikge1xuICB2YXIgc3RhcnQgPSBkZWNvZGVyLnJlc2VydmUoMik7XG4gIHZhciBidWZmZXIgPSBkZWNvZGVyLmJ1ZmZlcjtcbiAgcmV0dXJuIChidWZmZXJbc3RhcnQrK10gPDwgOCkgfCBidWZmZXJbc3RhcnRdO1xufVxuXG5mdW5jdGlvbiBpbnQxNihkZWNvZGVyKSB7XG4gIHZhciBzdGFydCA9IGRlY29kZXIucmVzZXJ2ZSgyKTtcbiAgdmFyIGJ1ZmZlciA9IGRlY29kZXIuYnVmZmVyO1xuICB2YXIgdmFsdWUgPSAoYnVmZmVyW3N0YXJ0KytdIDw8IDgpIHwgYnVmZmVyW3N0YXJ0XTtcbiAgcmV0dXJuICh2YWx1ZSAmIDB4ODAwMCkgPyB2YWx1ZSAtIDB4MTAwMDAgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdWludDMyKGRlY29kZXIpIHtcbiAgdmFyIHN0YXJ0ID0gZGVjb2Rlci5yZXNlcnZlKDQpO1xuICB2YXIgYnVmZmVyID0gZGVjb2Rlci5idWZmZXI7XG4gIHJldHVybiAoYnVmZmVyW3N0YXJ0KytdICogMTY3NzcyMTYpICsgKGJ1ZmZlcltzdGFydCsrXSA8PCAxNikgKyAoYnVmZmVyW3N0YXJ0KytdIDw8IDgpICsgYnVmZmVyW3N0YXJ0XTtcbn1cblxuZnVuY3Rpb24gaW50MzIoZGVjb2Rlcikge1xuICB2YXIgc3RhcnQgPSBkZWNvZGVyLnJlc2VydmUoNCk7XG4gIHZhciBidWZmZXIgPSBkZWNvZGVyLmJ1ZmZlcjtcbiAgcmV0dXJuIChidWZmZXJbc3RhcnQrK10gPDwgMjQpIHwgKGJ1ZmZlcltzdGFydCsrXSA8PCAxNikgfCAoYnVmZmVyW3N0YXJ0KytdIDw8IDgpIHwgYnVmZmVyW3N0YXJ0XTtcbn1cblxuZnVuY3Rpb24gcmVhZChsZW4sIG1ldGhvZCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjb2Rlcikge1xuICAgIHZhciBzdGFydCA9IGRlY29kZXIucmVzZXJ2ZShsZW4pO1xuICAgIHJldHVybiBtZXRob2QuY2FsbChkZWNvZGVyLmJ1ZmZlciwgc3RhcnQsIE5PX0FTU0VSVCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlYWRVSW50NjRCRShzdGFydCkge1xuICByZXR1cm4gbmV3IFVpbnQ2NEJFKHRoaXMsIHN0YXJ0KS50b051bWJlcigpO1xufVxuXG5mdW5jdGlvbiByZWFkSW50NjRCRShzdGFydCkge1xuICByZXR1cm4gbmV3IEludDY0QkUodGhpcywgc3RhcnQpLnRvTnVtYmVyKCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRVSW50NjRCRV9pbnQ2NChzdGFydCkge1xuICByZXR1cm4gbmV3IFVpbnQ2NEJFKHRoaXMsIHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gcmVhZEludDY0QkVfaW50NjQoc3RhcnQpIHtcbiAgcmV0dXJuIG5ldyBJbnQ2NEJFKHRoaXMsIHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gcmVhZEZsb2F0QkUoc3RhcnQpIHtcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBzdGFydCwgZmFsc2UsIDIzLCA0KTtcbn1cblxuZnVuY3Rpb24gcmVhZERvdWJsZUJFKHN0YXJ0KSB7XG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgc3RhcnQsIGZhbHNlLCA1MiwgOCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvcmVhZC1mb3JtYXQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHdyaXRlLXVuaXQ4LmpzXG5cbnZhciBjb25zdGFudCA9IGV4cG9ydHMudWludDggPSBuZXcgQXJyYXkoMjU2KTtcblxuZm9yICh2YXIgaSA9IDB4MDA7IGkgPD0gMHhGRjsgaSsrKSB7XG4gIGNvbnN0YW50W2ldID0gd3JpdGUwKGkpO1xufVxuXG5mdW5jdGlvbiB3cml0ZTAodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oZW5jb2Rlcikge1xuICAgIHZhciBvZmZzZXQgPSBlbmNvZGVyLnJlc2VydmUoMSk7XG4gICAgZW5jb2Rlci5idWZmZXJbb2Zmc2V0XSA9IHR5cGU7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi93cml0ZS11aW50OC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25vZGUtbGlicy1icm93c2VyL34vYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBEZWx1eGVTaWduYWxfMSA9IHJlcXVpcmUoXCIuL29yZy9vc2ZsYXNoL3NpZ25hbHMvRGVsdXhlU2lnbmFsXCIpO1xuZXhwb3J0cy5EZWx1eGVTaWduYWwgPSBEZWx1eGVTaWduYWxfMS5EZWx1eGVTaWduYWw7XG52YXIgR2VuZXJpY0V2ZW50XzEgPSByZXF1aXJlKFwiLi9vcmcvb3NmbGFzaC9zaWduYWxzL2V2ZW50cy9HZW5lcmljRXZlbnRcIik7XG5leHBvcnRzLkdlbmVyaWNFdmVudCA9IEdlbmVyaWNFdmVudF8xLkdlbmVyaWNFdmVudDtcbnZhciBJT25jZVNpZ25hbF8xID0gcmVxdWlyZShcIi4vb3JnL29zZmxhc2gvc2lnbmFscy9JT25jZVNpZ25hbFwiKTtcbmV4cG9ydHMuSU9uY2VTaWduYWwgPSBJT25jZVNpZ25hbF8xLklPbmNlU2lnbmFsO1xudmFyIElQcmlvcml0eVNpZ25hbF8xID0gcmVxdWlyZShcIi4vb3JnL29zZmxhc2gvc2lnbmFscy9JUHJpb3JpdHlTaWduYWxcIik7XG5leHBvcnRzLklQcmlvcml0eVNpZ25hbCA9IElQcmlvcml0eVNpZ25hbF8xLklQcmlvcml0eVNpZ25hbDtcbnZhciBJU2lnbmFsXzEgPSByZXF1aXJlKFwiLi9vcmcvb3NmbGFzaC9zaWduYWxzL0lTaWduYWxcIik7XG5leHBvcnRzLklTaWduYWwgPSBJU2lnbmFsXzEuSVNpZ25hbDtcbnZhciBJU2xvdF8xID0gcmVxdWlyZShcIi4vb3JnL29zZmxhc2gvc2lnbmFscy9JU2xvdFwiKTtcbmV4cG9ydHMuSVNsb3QgPSBJU2xvdF8xLklTbG90O1xudmFyIE1vbm9TaWduYWxfMSA9IHJlcXVpcmUoXCIuL29yZy9vc2ZsYXNoL3NpZ25hbHMvTW9ub1NpZ25hbFwiKTtcbmV4cG9ydHMuTW9ub1NpZ25hbCA9IE1vbm9TaWduYWxfMS5Nb25vU2lnbmFsO1xudmFyIE9uY2VTaWduYWxfMSA9IHJlcXVpcmUoXCIuL29yZy9vc2ZsYXNoL3NpZ25hbHMvT25jZVNpZ25hbFwiKTtcbmV4cG9ydHMuT25jZVNpZ25hbCA9IE9uY2VTaWduYWxfMS5PbmNlU2lnbmFsO1xudmFyIFByaW9yaXR5U2lnbmFsXzEgPSByZXF1aXJlKFwiLi9vcmcvb3NmbGFzaC9zaWduYWxzL1ByaW9yaXR5U2lnbmFsXCIpO1xuZXhwb3J0cy5Qcmlvcml0eVNpZ25hbCA9IFByaW9yaXR5U2lnbmFsXzEuUHJpb3JpdHlTaWduYWw7XG52YXIgUHJvbWlzZV8xID0gcmVxdWlyZShcIi4vb3JnL29zZmxhc2gvc2lnbmFscy9Qcm9taXNlXCIpO1xuZXhwb3J0cy5Qcm9taXNlID0gUHJvbWlzZV8xLlByb21pc2U7XG52YXIgU2lnbmFsXzEgPSByZXF1aXJlKFwiLi9vcmcvb3NmbGFzaC9zaWduYWxzL1NpZ25hbFwiKTtcbmV4cG9ydHMuU2lnbmFsID0gU2lnbmFsXzEuU2lnbmFsO1xudmFyIFNsb3RfMSA9IHJlcXVpcmUoXCIuL29yZy9vc2ZsYXNoL3NpZ25hbHMvU2xvdFwiKTtcbmV4cG9ydHMuU2xvdCA9IFNsb3RfMS5TbG90O1xudmFyIFNsb3RMaXN0XzEgPSByZXF1aXJlKFwiLi9vcmcvb3NmbGFzaC9zaWduYWxzL1Nsb3RMaXN0XCIpO1xuZXhwb3J0cy5TbG90TGlzdCA9IFNsb3RMaXN0XzEuU2xvdExpc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2lnbmFscy5qcy9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU2lnbmFsXzEgPSByZXF1aXJlKFwiLi9TaWduYWxcIik7XG52YXIgU2xvdF8xID0gcmVxdWlyZShcIi4vU2xvdFwiKTtcbnZhciBQcmlvcml0eVNpZ25hbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByaW9yaXR5U2lnbmFsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByaW9yaXR5U2lnbmFsKCkge1xuICAgICAgICB2YXIgdmFsdWVDbGFzc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZUNsYXNzZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX3RoaXM7XG4gICAgICAgIC8vIENhbm5vdCB1c2Ugc3VwZXIuYXBwbHkobnVsbCwgdmFsdWVDbGFzc2VzKSwgc28gYWxsb3cgdGhlIHN1YmNsYXNzIHRvIGNhbGwgc3VwZXIodmFsdWVDbGFzc2VzKS5cbiAgICAgICAgdmFsdWVDbGFzc2VzID0gKHZhbHVlQ2xhc3Nlcy5sZW5ndGggPT0gMSAmJiB2YWx1ZUNsYXNzZXNbMF0gaW5zdGFuY2VvZiBBcnJheSkgPyB2YWx1ZUNsYXNzZXNbMF0gOiB2YWx1ZUNsYXNzZXM7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdmFsdWVDbGFzc2VzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICogQHRocm93cyBmbGFzaC5lcnJvcnMuSWxsZWdhbE9wZXJhdGlvbkVycm9yIDxjb2RlPklsbGVnYWxPcGVyYXRpb25FcnJvcjwvY29kZT46IFlvdSBjYW5ub3QgYWRkT25jZSgpIHRoZW4gYWRkKCkgdGhlIHNhbWUgbGlzdGVuZXIgd2l0aG91dCByZW1vdmluZyB0aGUgcmVsYXRpb25zaGlwIGZpcnN0LlxuICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogR2l2ZW4gbGlzdGVuZXIgaXMgPGNvZGU+bnVsbDwvY29kZT4uXG4gICAgICovXG4gICAgUHJpb3JpdHlTaWduYWwucHJvdG90eXBlLmFkZFdpdGhQcmlvcml0eSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgcHJpb3JpdHkpIHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB2b2lkIDApIHsgcHJpb3JpdHkgPSAwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJXaXRoUHJpb3JpdHkobGlzdGVuZXIsIGZhbHNlLCBwcmlvcml0eSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqIEB0aHJvd3MgZmxhc2guZXJyb3JzLklsbGVnYWxPcGVyYXRpb25FcnJvciA8Y29kZT5JbGxlZ2FsT3BlcmF0aW9uRXJyb3I8L2NvZGU+OiBZb3UgY2Fubm90IGFkZE9uY2UoKSB0aGVuIGFkZCgpIHRoZSBzYW1lIGxpc3RlbmVyIHdpdGhvdXQgcmVtb3ZpbmcgdGhlIHJlbGF0aW9uc2hpcCBmaXJzdC5cbiAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IEdpdmVuIGxpc3RlbmVyIGlzIDxjb2RlPm51bGw8L2NvZGU+LlxuICAgICAqL1xuICAgIFByaW9yaXR5U2lnbmFsLnByb3RvdHlwZS5hZGRPbmNlV2l0aFByaW9yaXR5ID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBwcmlvcml0eSkge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHZvaWQgMCkgeyBwcmlvcml0eSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcldpdGhQcmlvcml0eShsaXN0ZW5lciwgdHJ1ZSwgcHJpb3JpdHkpO1xuICAgIH07XG4gICAgLypvdmVycmlkZSovXG4gICAgUHJpb3JpdHlTaWduYWwucHJvdG90eXBlLnJlZ2lzdGVyTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIsIG9uY2UpIHtcbiAgICAgICAgaWYgKG9uY2UgPT09IHZvaWQgMCkgeyBvbmNlID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcldpdGhQcmlvcml0eShsaXN0ZW5lciwgb25jZSk7XG4gICAgfTtcbiAgICBQcmlvcml0eVNpZ25hbC5wcm90b3R5cGUucmVnaXN0ZXJMaXN0ZW5lcldpdGhQcmlvcml0eSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgb25jZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgaWYgKG9uY2UgPT09IHZvaWQgMCkgeyBvbmNlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB2b2lkIDApIHsgcHJpb3JpdHkgPSAwOyB9XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdHJhdGlvblBvc3NpYmxlKGxpc3RlbmVyLCBvbmNlKSkge1xuICAgICAgICAgICAgdmFyIHNsb3QgPSBuZXcgU2xvdF8xLlNsb3QobGlzdGVuZXIsIHRoaXMsIG9uY2UsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHRoaXMuc2xvdHMgPSB0aGlzLnNsb3RzLmluc2VydFdpdGhQcmlvcml0eShzbG90KTtcbiAgICAgICAgICAgIHJldHVybiBzbG90O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNsb3RzLmZpbmQobGlzdGVuZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIFByaW9yaXR5U2lnbmFsO1xufShTaWduYWxfMS5TaWduYWwpKTtcbmV4cG9ydHMuUHJpb3JpdHlTaWduYWwgPSBQcmlvcml0eVNpZ25hbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByaW9yaXR5U2lnbmFsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaWduYWxzLmpzL2xpYi9vcmcvb3NmbGFzaC9zaWduYWxzL1ByaW9yaXR5U2lnbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE9uY2VTaWduYWxfMSA9IHJlcXVpcmUoXCIuL09uY2VTaWduYWxcIik7XG4vKipcbiAqIEFsbG93cyB0aGUgdmFsdWVDbGFzc2VzIHRvIGJlIHNldCBpbiBNWE1MLCBlLmcuXG4gKiA8c2lnbmFsczpTaWduYWwgaWQ9XCJuYW1lQ2hhbmdlZFwiPntbU3RyaW5nLCB1aW50XX08L3NpZ25hbHM6U2lnbmFsPlxuICovXG4vKltEZWZhdWx0UHJvcGVydHkoXCJ2YWx1ZUNsYXNzZXNcIildKi9cbi8qKlxuICogU2lnbmFsIGRpc3BhdGNoZXMgZXZlbnRzIHRvIG11bHRpcGxlIGxpc3RlbmVycy5cbiAqIEl0IGlzIGluc3BpcmVkIGJ5IEMjIGV2ZW50cyBhbmQgZGVsZWdhdGVzLCBhbmQgYnlcbiAqIDxhIHRhcmdldD1cIl90b3BcIiBocmVmPVwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TaWduYWxzX2FuZF9zbG90c1wiPnNpZ25hbHMgYW5kIHNsb3RzPC9hPlxuICogaW4gUXQuXG4gKiBBIFNpZ25hbCBhZGRzIGV2ZW50IGRpc3BhdGNoaW5nIGZ1bmN0aW9uYWxpdHkgdGhyb3VnaCBjb21wb3NpdGlvbiBhbmQgaW50ZXJmYWNlcyxcbiAqIHJhdGhlciB0aGFuIGluaGVyaXRpbmcgZnJvbSBhIGRpc3BhdGNoZXIuXG4gKiA8YnIvPjxici8+XG4gKiBQcm9qZWN0IGhvbWU6IDxhIHRhcmdldD1cIl90b3BcIiBocmVmPVwiaHR0cDovL2dpdGh1Yi5jb20vcm9iZXJ0cGVubmVyL2FzMy1zaWduYWxzL1wiPmh0dHA6Ly9naXRodWIuY29tL3JvYmVydHBlbm5lci9hczMtc2lnbmFscy88L2E+XG4gKi9cbnZhciBTaWduYWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTaWduYWwsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFNpZ25hbCBpbnN0YW5jZSB0byBkaXNwYXRjaCB2YWx1ZSBvYmplY3RzLlxuICAgICAqIEBwYXJhbSAgICB2YWx1ZUNsYXNzZXMgQW55IG51bWJlciBvZiBjbGFzcyByZWZlcmVuY2VzIHRoYXQgZW5hYmxlIHR5cGUgY2hlY2tzIGluIGRpc3BhdGNoKCkuXG4gICAgICogRm9yIGV4YW1wbGUsIG5ldyBTaWduYWwoU3RyaW5nLCB1aW50KVxuICAgICAqIHdvdWxkIGFsbG93OiBzaWduYWwuZGlzcGF0Y2goXCJ0aGUgQW5zd2VyXCIsIDQyKVxuICAgICAqIGJ1dCBub3Q6IHNpZ25hbC5kaXNwYXRjaCh0cnVlLCA0Mi41KVxuICAgICAqIG5vcjogc2lnbmFsLmRpc3BhdGNoKClcbiAgICAgKlxuICAgICAqIE5PVEU6IEluIEFTMywgc3ViY2xhc3NlcyBjYW5ub3QgY2FsbCBzdXBlci5hcHBseShudWxsLCB2YWx1ZUNsYXNzZXMpLFxuICAgICAqIGJ1dCB0aGlzIGNvbnN0cnVjdG9yIGhhcyBsb2dpYyB0byBzdXBwb3J0IHN1cGVyKHZhbHVlQ2xhc3NlcykuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2lnbmFsKCkge1xuICAgICAgICB2YXIgdmFsdWVDbGFzc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZUNsYXNzZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX3RoaXM7XG4gICAgICAgIC8vIENhbm5vdCB1c2Ugc3VwZXIuYXBwbHkobnVsbCwgdmFsdWVDbGFzc2VzKSwgc28gYWxsb3cgdGhlIHN1YmNsYXNzIHRvIGNhbGwgc3VwZXIodmFsdWVDbGFzc2VzKS5cbiAgICAgICAgdmFsdWVDbGFzc2VzID0gKHZhbHVlQ2xhc3Nlcy5sZW5ndGggPT0gMSAmJiB2YWx1ZUNsYXNzZXNbMF0gaW5zdGFuY2VvZiBBcnJheSkgPyB2YWx1ZUNsYXNzZXNbMF0gOiB2YWx1ZUNsYXNzZXM7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdmFsdWVDbGFzc2VzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICogQHRocm93cyBmbGFzaC5lcnJvcnMuSWxsZWdhbE9wZXJhdGlvbkVycm9yIDxjb2RlPklsbGVnYWxPcGVyYXRpb25FcnJvcjwvY29kZT46IFlvdSBjYW5ub3QgYWRkT25jZSgpIHRoZW4gYWRkKCkgdGhlIHNhbWUgbGlzdGVuZXIgd2l0aG91dCByZW1vdmluZyB0aGUgcmVsYXRpb25zaGlwIGZpcnN0LlxuICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogR2l2ZW4gbGlzdGVuZXIgaXMgPGNvZGU+bnVsbDwvY29kZT4uXG4gICAgICovXG4gICAgU2lnbmFsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfTtcbiAgICByZXR1cm4gU2lnbmFsO1xufShPbmNlU2lnbmFsXzEuT25jZVNpZ25hbCkpO1xuZXhwb3J0cy5TaWduYWwgPSBTaWduYWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TaWduYWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvU2lnbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogVGhlIFNsb3RMaXN0IGNsYXNzIHJlcHJlc2VudHMgYW4gaW1tdXRhYmxlIGxpc3Qgb2YgU2xvdCBvYmplY3RzLlxuICpcbiAqIEBhdXRob3IgSm9hIEViZXJ0XG4gKiBAYXV0aG9yIFJvYmVydCBQZW5uZXJcbiAqL1xudmFyIFNsb3RMaXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IFNsb3RMaXN0IG9iamVjdC5cbiAgICAgKlxuICAgICAqIDxwPkEgdXNlciBuZXZlciBoYXMgdG8gY3JlYXRlIGEgU2xvdExpc3QgbWFudWFsbHkuXG4gICAgICogVXNlIHRoZSA8Y29kZT5OSUw8L2NvZGU+IGVsZW1lbnQgdG8gcmVwcmVzZW50IGFuIGVtcHR5IGxpc3QuXG4gICAgICogPGNvZGU+TklMLnByZXBlbmQodmFsdWUpPC9jb2RlPiB3b3VsZCBjcmVhdGUgYSBsaXN0IGNvbnRhaW5pbmcgPGNvZGU+dmFsdWU8L2NvZGU+PC9wPi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBoZWFkIFRoZSBmaXJzdCBzbG90IGluIHRoZSBsaXN0LlxuICAgICAqIEBwYXJhbSB0YWlsIEEgbGlzdCBjb250YWluaW5nIGFsbCBzbG90cyBleGNlcHQgaGVhZC5cbiAgICAgKlxuICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogUGFyYW1ldGVycyBoZWFkIGFuZCB0YWlsIGFyZSBudWxsLiBVc2UgdGhlIE5JTCBlbGVtZW50IGluc3RlYWQuXG4gICAgICogQHRocm93cyBBcmd1bWVudEVycm9yIDxjb2RlPkFyZ3VtZW50RXJyb3I8L2NvZGU+OiBQYXJhbWV0ZXIgaGVhZCBjYW5ub3QgYmUgbnVsbC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTbG90TGlzdChoZWFkLCB0YWlsKSB7XG4gICAgICAgIGlmICh0YWlsID09PSB2b2lkIDApIHsgdGFpbCA9IG51bGw7IH1cbiAgICAgICAgdGhpcy5ub25FbXB0eSA9IGZhbHNlO1xuICAgICAgICBpZiAoIWhlYWQgJiYgIXRhaWwpIHtcbiAgICAgICAgICAgIGlmIChTbG90TGlzdC5OSUwpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXJzIGhlYWQgYW5kIHRhaWwgYXJlIG51bGwuIFVzZSB0aGUgTklMIGVsZW1lbnQgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIC8vdGhpcyBpcyB0aGUgTklMIGVsZW1lbnQgYXMgcGVyIGRlZmluaXRpb25cbiAgICAgICAgICAgIHRoaXMubm9uRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaGVhZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgaGVhZCBjYW5ub3QgYmUgbnVsbC4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IGhlYWQ7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0YWlsIHx8IFNsb3RMaXN0Lk5JTDtcbiAgICAgICAgICAgIHRoaXMubm9uRW1wdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbG90TGlzdC5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBudW1iZXIgb2Ygc2xvdHMgaW4gdGhlIGxpc3QuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub25FbXB0eSlcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhaWwgPT0gU2xvdExpc3QuTklMKVxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgLy8gV2UgY291bGQgY2FjaGUgdGhlIGxlbmd0aCwgYnV0IGl0IHdvdWxkIG1ha2UgbWV0aG9kcyBsaWtlIGZpbHRlck5vdCB1bm5lY2Vzc2FyaWx5IGNvbXBsaWNhdGVkLlxuICAgICAgICAgICAgLy8gSW5zdGVhZCB3ZSBhc3N1bWUgdGhhdCBPKG4pIGlzIG9rYXkgc2luY2UgdGhlIGxlbmd0aCBwcm9wZXJ0eSBpcyB1c2VkIGluIHJhcmUgY2FzZXMuXG4gICAgICAgICAgICAvLyBXZSBjb3VsZCBhbHNvIGNhY2hlIHRoZSBsZW5ndGggbGF6eSwgYnV0IHRoYXQgaXMgYSB3YXN0ZSBvZiBhbm90aGVyIDhiIHBlciBsaXN0IG5vZGUgKGF0IGxlYXN0KS5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzO1xuICAgICAgICAgICAgd2hpbGUgKHAubm9uRW1wdHkpIHtcbiAgICAgICAgICAgICAgICArK3Jlc3VsdDtcbiAgICAgICAgICAgICAgICBwID0gcC50YWlsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUHJlcGVuZHMgYSBzbG90IHRvIHRoaXMgbGlzdC5cbiAgICAgKiBAcGFyYW0gICAgc2xvdCBUaGUgaXRlbSB0byBiZSBwcmVwZW5kZWQuXG4gICAgICogQHJldHVybiAgICBBIGxpc3QgY29uc2lzdGluZyBvZiBzbG90IGZvbGxvd2VkIGJ5IGFsbCBlbGVtZW50cyBvZiB0aGlzIGxpc3QuXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IFBhcmFtZXRlciBoZWFkIGNhbm5vdCBiZSBudWxsLlxuICAgICAqL1xuICAgIFNsb3RMaXN0LnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKHNsb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbG90TGlzdChzbG90LCB0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzbG90IHRvIHRoaXMgbGlzdC5cbiAgICAgKiBOb3RlOiBhcHBlbmRpbmcgaXMgTyhuKS4gV2hlcmUgcG9zc2libGUsIHByZXBlbmQgd2hpY2ggaXMgTygxKS5cbiAgICAgKiBJbiBzb21lIGNhc2VzLCBtYW55IGxpc3QgaXRlbXMgbXVzdCBiZSBjbG9uZWQgdG9cbiAgICAgKiBhdm9pZCBjaGFuZ2luZyBleGlzdGluZyBsaXN0cy5cbiAgICAgKiBAcGFyYW0gICAgc2xvdCBUaGUgaXRlbSB0byBiZSBhcHBlbmRlZC5cbiAgICAgKiBAcmV0dXJuICAgIEEgbGlzdCBjb25zaXN0aW5nIG9mIGFsbCBlbGVtZW50cyBvZiB0aGlzIGxpc3QgZm9sbG93ZWQgYnkgc2xvdC5cbiAgICAgKi9cbiAgICBTbG90TGlzdC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKHNsb3QpIHtcbiAgICAgICAgaWYgKCFzbG90KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5ub25FbXB0eSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2xvdExpc3Qoc2xvdCk7XG4gICAgICAgIC8vIFNwZWNpYWwgY2FzZToganVzdCBvbmUgc2xvdCBjdXJyZW50bHkgaW4gdGhlIGxpc3QuXG4gICAgICAgIGlmICh0aGlzLnRhaWwgPT0gU2xvdExpc3QuTklMKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbG90TGlzdChzbG90KS5wcmVwZW5kKHRoaXMuaGVhZCk7XG4gICAgICAgIC8vIFRoZSBsaXN0IGFscmVhZHkgaGFzIHR3byBvciBtb3JlIHNsb3RzLlxuICAgICAgICAvLyBXZSBoYXZlIHRvIGJ1aWxkIGEgbmV3IGxpc3Qgd2l0aCBjbG9uZWQgaXRlbXMgYmVjYXVzZSB0aGV5IGFyZSBpbW11dGFibGUuXG4gICAgICAgIHZhciB3aG9sZUNsb25lID0gbmV3IFNsb3RMaXN0KHRoaXMuaGVhZCk7XG4gICAgICAgIHZhciBzdWJDbG9uZSA9IHdob2xlQ2xvbmU7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy50YWlsO1xuICAgICAgICB3aGlsZSAoY3VycmVudC5ub25FbXB0eSkge1xuICAgICAgICAgICAgc3ViQ2xvbmUgPSBzdWJDbG9uZS50YWlsID0gbmV3IFNsb3RMaXN0KGN1cnJlbnQuaGVhZCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC50YWlsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHNsb3QgbGFzdC5cbiAgICAgICAgc3ViQ2xvbmUudGFpbCA9IG5ldyBTbG90TGlzdChzbG90KTtcbiAgICAgICAgcmV0dXJuIHdob2xlQ2xvbmU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYSBzbG90IGludG8gdGhlIGxpc3QgaW4gYSBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5LlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHByaW9yaXR5LCB0aGUgY2xvc2VyIHRoZSBpdGVtIHdpbGwgYmUgaW5zZXJ0ZWQgdG8gdGhlIGxpc3QgaGVhZC5cbiAgICAgKiBAcGFyYW1zIHNsb3QgVGhlIGl0ZW0gdG8gYmUgaW5zZXJ0ZWQuXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IFBhcmFtZXRlcnMgaGVhZCBhbmQgdGFpbCBhcmUgbnVsbC4gVXNlIHRoZSBOSUwgZWxlbWVudCBpbnN0ZWFkLlxuICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogUGFyYW1ldGVyIGhlYWQgY2Fubm90IGJlIG51bGwuXG4gICAgICovXG4gICAgU2xvdExpc3QucHJvdG90eXBlLmluc2VydFdpdGhQcmlvcml0eSA9IGZ1bmN0aW9uIChzbG90KSB7XG4gICAgICAgIGlmICghdGhpcy5ub25FbXB0eSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2xvdExpc3Qoc2xvdCk7XG4gICAgICAgIHZhciBwcmlvcml0eSA9IHNsb3QucHJpb3JpdHk7XG4gICAgICAgIC8vIFNwZWNpYWwgY2FzZTogbmV3IHNsb3QgaGFzIHRoZSBoaWdoZXN0IHByaW9yaXR5LlxuICAgICAgICBpZiAocHJpb3JpdHkgPiB0aGlzLmhlYWQucHJpb3JpdHkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwZW5kKHNsb3QpO1xuICAgICAgICB2YXIgd2hvbGVDbG9uZSA9IG5ldyBTbG90TGlzdCh0aGlzLmhlYWQpO1xuICAgICAgICB2YXIgc3ViQ2xvbmUgPSB3aG9sZUNsb25lO1xuICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMudGFpbDtcbiAgICAgICAgLy8gRmluZCBhIHNsb3Qgd2l0aCBsb3dlciBwcmlvcml0eSBhbmQgZ28gaW4gZnJvbnQgb2YgaXQuXG4gICAgICAgIHdoaWxlIChjdXJyZW50Lm5vbkVtcHR5KSB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPiBjdXJyZW50LmhlYWQucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBzdWJDbG9uZS50YWlsID0gY3VycmVudC5wcmVwZW5kKHNsb3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aG9sZUNsb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3ViQ2xvbmUgPSBzdWJDbG9uZS50YWlsID0gbmV3IFNsb3RMaXN0KGN1cnJlbnQuaGVhZCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC50YWlsO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNsb3QgaGFzIGxvd2VzdCBwcmlvcml0eS5cbiAgICAgICAgc3ViQ2xvbmUudGFpbCA9IG5ldyBTbG90TGlzdChzbG90KTtcbiAgICAgICAgcmV0dXJuIHdob2xlQ2xvbmU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzbG90cyBpbiB0aGlzIGxpc3QgdGhhdCBkbyBub3QgY29udGFpbiB0aGUgc3VwcGxpZWQgbGlzdGVuZXIuXG4gICAgICogTm90ZTogYXNzdW1lcyB0aGUgbGlzdGVuZXIgaXMgbm90IHJlcGVhdGVkIHdpdGhpbiB0aGUgbGlzdC5cbiAgICAgKiBAcGFyYW0gICAgbGlzdGVuZXIgVGhlIGZ1bmN0aW9uIHRvIHJlbW92ZS5cbiAgICAgKiBAcmV0dXJuIEEgbGlzdCBjb25zaXN0aW5nIG9mIGFsbCBlbGVtZW50cyBvZiB0aGlzIGxpc3QgdGhhdCBkbyBub3QgaGF2ZSBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICBTbG90TGlzdC5wcm90b3R5cGUuZmlsdGVyTm90ID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub25FbXB0eSB8fCBsaXN0ZW5lciA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSB0aGlzLmhlYWQubGlzdGVuZXIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWlsO1xuICAgICAgICAvLyBUaGUgZmlyc3QgaXRlbSB3YXNuJ3QgYSBtYXRjaCBzbyB0aGUgZmlsdGVyZWQgbGlzdCB3aWxsIGNvbnRhaW4gaXQuXG4gICAgICAgIHZhciB3aG9sZUNsb25lID0gbmV3IFNsb3RMaXN0KHRoaXMuaGVhZCk7XG4gICAgICAgIHZhciBzdWJDbG9uZSA9IHdob2xlQ2xvbmU7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy50YWlsO1xuICAgICAgICB3aGlsZSAoY3VycmVudC5ub25FbXB0eSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaGVhZC5saXN0ZW5lciA9PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIC8vIFNwbGljZSBvdXQgdGhlIGN1cnJlbnQgaGVhZC5cbiAgICAgICAgICAgICAgICBzdWJDbG9uZS50YWlsID0gY3VycmVudC50YWlsO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aG9sZUNsb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3ViQ2xvbmUgPSBzdWJDbG9uZS50YWlsID0gbmV3IFNsb3RMaXN0KGN1cnJlbnQuaGVhZCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC50YWlsO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBsaXN0ZW5lciB3YXMgbm90IGZvdW5kIHNvIHRoaXMgbGlzdCBpcyB1bmNoYW5nZWQuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzdXBwbGllZCBsaXN0ZW5lciBGdW5jdGlvbiBpcyBjb250YWluZWQgd2l0aGluIHRoaXMgbGlzdFxuICAgICAqL1xuICAgIFNsb3RMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMubm9uRW1wdHkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHAubm9uRW1wdHkpIHtcbiAgICAgICAgICAgIGlmIChwLmhlYWQubGlzdGVuZXIgPT0gbGlzdGVuZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBwID0gcC50YWlsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgSVNsb3QgYXNzb2NpYXRlZCB3aXRoIGEgc3VwcGxpZWQgbGlzdGVuZXIgd2l0aGluIHRoZSBTbG90TGlzdC5cbiAgICAgKiBAcGFyYW0gICBsaXN0ZW5lciBUaGUgRnVuY3Rpb24gYmVpbmcgc2VhcmNoZWQgZm9yXG4gICAgICogQHJldHVybiAgVGhlIElTbG90IGluIHRoaXMgbGlzdCBhc3NvY2lhdGVkIHdpdGggdGhlIGxpc3RlbmVyIHBhcmFtZXRlciB0aHJvdWdoIHRoZSBJU2xvdC5saXN0ZW5lciBwcm9wZXJ0eS5cbiAgICAgKiAgICAgICAgICBSZXR1cm5zIG51bGwgaWYgbm8gc3VjaCBJU2xvdCBpbnN0YW5jZSBleGlzdHMgb3IgdGhlIGxpc3QgaXMgZW1wdHkuXG4gICAgICovXG4gICAgU2xvdExpc3QucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vbkVtcHR5KVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBwID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHAubm9uRW1wdHkpIHtcbiAgICAgICAgICAgIGlmIChwLmhlYWQubGlzdGVuZXIgPT0gbGlzdGVuZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuaGVhZDtcbiAgICAgICAgICAgIHAgPSBwLnRhaWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBTbG90TGlzdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSAnJztcbiAgICAgICAgdmFyIHAgPSB0aGlzO1xuICAgICAgICB3aGlsZSAocC5ub25FbXB0eSkge1xuICAgICAgICAgICAgYnVmZmVyICs9IHAuaGVhZCArIFwiIC0+IFwiO1xuICAgICAgICAgICAgcCA9IHAudGFpbDtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXIgKz0gXCJOSUxcIjtcbiAgICAgICAgcmV0dXJuIFwiW0xpc3QgXCIgKyBidWZmZXIgKyBcIl1cIjtcbiAgICB9O1xuICAgIHJldHVybiBTbG90TGlzdDtcbn0oKSk7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gZW1wdHkgbGlzdC4gVXNlZCBhcyB0aGUgbGlzdCB0ZXJtaW5hdG9yLlxuICovXG5TbG90TGlzdC5OSUwgPSBuZXcgU2xvdExpc3QobnVsbCwgbnVsbCk7XG5leHBvcnRzLlNsb3RMaXN0ID0gU2xvdExpc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TbG90TGlzdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9TbG90TGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbXNncGFjayA9IHJlcXVpcmUoXCJtc2dwYWNrLWxpdGVcIik7XHJcbnZhciBzaWduYWxzX2pzXzEgPSByZXF1aXJlKFwic2lnbmFscy5qc1wiKTtcclxudmFyIFByb3RvY29sXzEgPSByZXF1aXJlKFwiLi9Qcm90b2NvbFwiKTtcclxudmFyIFJvb21fMSA9IHJlcXVpcmUoXCIuL1Jvb21cIik7XHJcbnZhciBDb25uZWN0aW9uXzEgPSByZXF1aXJlKFwiLi9Db25uZWN0aW9uXCIpO1xyXG52YXIgQ2xpZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENsaWVudCh1cmwpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHNpZ25hbHNcclxuICAgICAgICB0aGlzLm9uT3BlbiA9IG5ldyBzaWduYWxzX2pzXzEuU2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2UgPSBuZXcgc2lnbmFsc19qc18xLlNpZ25hbCgpO1xyXG4gICAgICAgIHRoaXMub25DbG9zZSA9IG5ldyBzaWduYWxzX2pzXzEuU2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yID0gbmV3IHNpZ25hbHNfanNfMS5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLnJvb21zID0ge307XHJcbiAgICAgICAgdGhpcy5pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2x5c2V1c2lkJykgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmhvc3RuYW1lID0gdXJsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uXzEuQ29ubmVjdGlvbih0aGlzLmhvc3RuYW1lICsgXCIvP2NvbHlzZXVzaWQ9XCIgKyB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2VDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLm9uQ2xvc2UuZGlzcGF0Y2goKTsgfTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5vbkVycm9yLmRpc3BhdGNoKCk7IH07XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGlkIG9uIGNvb2tpZVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25PcGVuLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ2xpZW50LnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gKHJvb21OYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB0aGlzLnJvb20gPSBuZXcgUm9vbV8xLlJvb20ocm9vbU5hbWUpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKFtQcm90b2NvbF8xLlByb3RvY29sLkpPSU5fUk9PTSwgcm9vbU5hbWUsIG9wdGlvbnNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb29tO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIENsaWVudC5wcm90b3R5cGUub25NZXNzYWdlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gbXNncGFjay5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoZXZlbnQuZGF0YSkpO1xyXG4gICAgICAgIHZhciBjb2RlID0gbWVzc2FnZVswXTtcclxuICAgICAgICBpZiAoY29kZSA9PSBQcm90b2NvbF8xLlByb3RvY29sLlVTRVJfSUQpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbHlzZXVzaWQnLCBtZXNzYWdlWzFdKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IG1lc3NhZ2VbMV07XHJcbiAgICAgICAgICAgIHRoaXMub25PcGVuLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT0gUHJvdG9jb2xfMS5Qcm90b2NvbC5KT0lOX1JPT00pIHtcclxuICAgICAgICAgICAgdmFyIHJvb21fMSA9IHRoaXMucm9vbTtcclxuICAgICAgICAgICAgcm9vbV8xLmlkID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgcm9vbV8xLmNvbm5lY3QobmV3IENvbm5lY3Rpb25fMS5Db25uZWN0aW9uKHRoaXMuaG9zdG5hbWUgKyBcIi9cIiArIHRoaXMucm9vbS5pZCArIFwiP2NvbHlzZXVzaWQ9XCIgKyB0aGlzLmlkKSk7XHJcbiAgICAgICAgICAgIHJvb21fMS5vbkxlYXZlLmFkZChmdW5jdGlvbiAoKSB7IHJldHVybiBkZWxldGUgX3RoaXMucm9vbXNbcm9vbV8xLmlkXTsgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNbcm9vbV8xLmlkXSA9IHJvb21fMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29kZSA9PSBQcm90b2NvbF8xLlByb3RvY29sLkpPSU5fRVJST1IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNlcnZlciBlcnJvcjpcIiwgbWVzc2FnZVsyXSk7XHJcbiAgICAgICAgICAgIC8vIGdlbmVyYWwgZXJyb3JcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yLmRpc3BhdGNoKG1lc3NhZ2VbMl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2UuZGlzcGF0Y2gobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDbGllbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2xpZW50ID0gQ2xpZW50O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9DbGllbnQudHNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vICAgICAgQ29weXJpZ2h0IChjKSAyMDEyIE1hdGhpZXUgVHVyY290dGVcbi8vICAgICAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG52YXIgQmFja29mZiA9IHJlcXVpcmUoJy4vbGliL2JhY2tvZmYnKTtcbnZhciBFeHBvbmVudGlhbEJhY2tvZmZTdHJhdGVneSA9IHJlcXVpcmUoJy4vbGliL3N0cmF0ZWd5L2V4cG9uZW50aWFsJyk7XG52YXIgRmlib25hY2NpQmFja29mZlN0cmF0ZWd5ID0gcmVxdWlyZSgnLi9saWIvc3RyYXRlZ3kvZmlib25hY2NpJyk7XG52YXIgRnVuY3Rpb25DYWxsID0gcmVxdWlyZSgnLi9saWIvZnVuY3Rpb25fY2FsbC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cy5CYWNrb2ZmID0gQmFja29mZjtcbm1vZHVsZS5leHBvcnRzLkZ1bmN0aW9uQ2FsbCA9IEZ1bmN0aW9uQ2FsbDtcbm1vZHVsZS5leHBvcnRzLkZpYm9uYWNjaVN0cmF0ZWd5ID0gRmlib25hY2NpQmFja29mZlN0cmF0ZWd5O1xubW9kdWxlLmV4cG9ydHMuRXhwb25lbnRpYWxTdHJhdGVneSA9IEV4cG9uZW50aWFsQmFja29mZlN0cmF0ZWd5O1xuXG4vLyBDb25zdHJ1Y3RzIGEgRmlib25hY2NpIGJhY2tvZmYuXG5tb2R1bGUuZXhwb3J0cy5maWJvbmFjY2kgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrb2ZmKG5ldyBGaWJvbmFjY2lCYWNrb2ZmU3RyYXRlZ3kob3B0aW9ucykpO1xufTtcblxuLy8gQ29uc3RydWN0cyBhbiBleHBvbmVudGlhbCBiYWNrb2ZmLlxubW9kdWxlLmV4cG9ydHMuZXhwb25lbnRpYWwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrb2ZmKG5ldyBFeHBvbmVudGlhbEJhY2tvZmZTdHJhdGVneShvcHRpb25zKSk7XG59O1xuXG4vLyBDb25zdHJ1Y3RzIGEgRnVuY3Rpb25DYWxsIGZvciB0aGUgZ2l2ZW4gZnVuY3Rpb24gYW5kIGFyZ3VtZW50cy5cbm1vZHVsZS5leHBvcnRzLmNhbGwgPSBmdW5jdGlvbihmbiwgdmFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGZuID0gYXJnc1swXTtcbiAgICB2YXJncyA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGggLSAxKTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uQ2FsbChmbiwgdmFyZ3MsIGNhbGxiYWNrKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFja29mZi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gICAgICBDb3B5cmlnaHQgKGMpIDIwMTIgTWF0aGlldSBUdXJjb3R0ZVxuLy8gICAgICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcbnZhciBwcmVjb25kID0gcmVxdWlyZSgncHJlY29uZCcpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbnZhciBCYWNrb2ZmID0gcmVxdWlyZSgnLi9iYWNrb2ZmJyk7XG52YXIgRmlib25hY2NpQmFja29mZlN0cmF0ZWd5ID0gcmVxdWlyZSgnLi9zdHJhdGVneS9maWJvbmFjY2knKTtcblxuLy8gV3JhcHMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaW4gYSBiYWNrb2ZmIGxvb3AuXG5mdW5jdGlvbiBGdW5jdGlvbkNhbGwoZm4sIGFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgZXZlbnRzLkV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gICAgcHJlY29uZC5jaGVja0lzRnVuY3Rpb24oZm4sICdFeHBlY3RlZCBmbiB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIHByZWNvbmQuY2hlY2tJc0FycmF5KGFyZ3MsICdFeHBlY3RlZCBhcmdzIHRvIGJlIGFuIGFycmF5LicpO1xuICAgIHByZWNvbmQuY2hlY2tJc0Z1bmN0aW9uKGNhbGxiYWNrLCAnRXhwZWN0ZWQgY2FsbGJhY2sgdG8gYmUgYSBmdW5jdGlvbi4nKTtcblxuICAgIHRoaXMuZnVuY3Rpb25fID0gZm47XG4gICAgdGhpcy5hcmd1bWVudHNfID0gYXJncztcbiAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xuICAgIHRoaXMubGFzdFJlc3VsdF8gPSBbXTtcbiAgICB0aGlzLm51bVJldHJpZXNfID0gMDtcblxuICAgIHRoaXMuYmFja29mZl8gPSBudWxsO1xuICAgIHRoaXMuc3RyYXRlZ3lfID0gbnVsbDtcbiAgICB0aGlzLmZhaWxBZnRlcl8gPSAtMTtcbiAgICB0aGlzLnJldHJ5UHJlZGljYXRlXyA9IEZ1bmN0aW9uQ2FsbC5ERUZBVUxUX1JFVFJZX1BSRURJQ0FURV87XG5cbiAgICB0aGlzLnN0YXRlXyA9IEZ1bmN0aW9uQ2FsbC5TdGF0ZV8uUEVORElORztcbn1cbnV0aWwuaW5oZXJpdHMoRnVuY3Rpb25DYWxsLCBldmVudHMuRXZlbnRFbWl0dGVyKTtcblxuLy8gU3RhdGVzIGluIHdoaWNoIHRoZSBjYWxsIGNhbiBiZS5cbkZ1bmN0aW9uQ2FsbC5TdGF0ZV8gPSB7XG4gICAgLy8gQ2FsbCBpc24ndCBzdGFydGVkIHlldC5cbiAgICBQRU5ESU5HOiAwLFxuICAgIC8vIENhbGwgaXMgaW4gcHJvZ3Jlc3MuXG4gICAgUlVOTklORzogMSxcbiAgICAvLyBDYWxsIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkgd2hpY2ggbWVhbnMgdGhhdCBlaXRoZXIgdGhlIHdyYXBwZWQgZnVuY3Rpb25cbiAgICAvLyByZXR1cm5lZCBzdWNjZXNzZnVsbHkgb3IgdGhlIG1heGltYWwgbnVtYmVyIG9mIGJhY2tvZmZzIHdhcyByZWFjaGVkLlxuICAgIENPTVBMRVRFRDogMixcbiAgICAvLyBUaGUgY2FsbCB3YXMgYWJvcnRlZC5cbiAgICBBQk9SVEVEOiAzXG59O1xuXG4vLyBUaGUgZGVmYXVsdCByZXRyeSBwcmVkaWNhdGUgd2hpY2ggY29uc2lkZXJzIGFueSBlcnJvciBhcyByZXRyaWFibGUuXG5GdW5jdGlvbkNhbGwuREVGQVVMVF9SRVRSWV9QUkVESUNBVEVfID0gZnVuY3Rpb24oZXJyKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGNhbGwgaXMgcGVuZGluZy5cbkZ1bmN0aW9uQ2FsbC5wcm90b3R5cGUuaXNQZW5kaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVfID09IEZ1bmN0aW9uQ2FsbC5TdGF0ZV8uUEVORElORztcbn07XG5cbi8vIENoZWNrcyB3aGV0aGVyIHRoZSBjYWxsIGlzIGluIHByb2dyZXNzLlxuRnVuY3Rpb25DYWxsLnByb3RvdHlwZS5pc1J1bm5pbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZV8gPT0gRnVuY3Rpb25DYWxsLlN0YXRlXy5SVU5OSU5HO1xufTtcblxuLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGNhbGwgaXMgY29tcGxldGVkLlxuRnVuY3Rpb25DYWxsLnByb3RvdHlwZS5pc0NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlXyA9PSBGdW5jdGlvbkNhbGwuU3RhdGVfLkNPTVBMRVRFRDtcbn07XG5cbi8vIENoZWNrcyB3aGV0aGVyIHRoZSBjYWxsIGlzIGFib3J0ZWQuXG5GdW5jdGlvbkNhbGwucHJvdG90eXBlLmlzQWJvcnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlXyA9PSBGdW5jdGlvbkNhbGwuU3RhdGVfLkFCT1JURUQ7XG59O1xuXG4vLyBTZXRzIHRoZSBiYWNrb2ZmIHN0cmF0ZWd5IHRvIHVzZS4gQ2FuIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSB0aGUgY2FsbCBpc1xuLy8gc3RhcnRlZCBvdGhlcndpc2UgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLlxuRnVuY3Rpb25DYWxsLnByb3RvdHlwZS5zZXRTdHJhdGVneSA9IGZ1bmN0aW9uKHN0cmF0ZWd5KSB7XG4gICAgcHJlY29uZC5jaGVja1N0YXRlKHRoaXMuaXNQZW5kaW5nKCksICdGdW5jdGlvbkNhbGwgaW4gcHJvZ3Jlc3MuJyk7XG4gICAgdGhpcy5zdHJhdGVneV8gPSBzdHJhdGVneTtcbiAgICByZXR1cm4gdGhpczsgLy8gUmV0dXJuIHRoaXMgZm9yIGNoYWluaW5nLlxufTtcblxuLy8gU2V0cyB0aGUgcHJlZGljYXRlIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgZXJyb3JzXG4vLyByZXR1cm5lZCBmcm9tIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHNob3VsZCBiZSByZXRyaWVkIG9yIG5vdCwgZS5nLiBhXG4vLyBuZXR3b3JrIGVycm9yIHdvdWxkIGJlIHJldHJpYWJsZSB3aGlsZSBhIHR5cGUgZXJyb3Igd291bGQgc3RvcCB0aGVcbi8vIGZ1bmN0aW9uIGNhbGwuXG5GdW5jdGlvbkNhbGwucHJvdG90eXBlLnJldHJ5SWYgPSBmdW5jdGlvbihyZXRyeVByZWRpY2F0ZSkge1xuICAgIHByZWNvbmQuY2hlY2tTdGF0ZSh0aGlzLmlzUGVuZGluZygpLCAnRnVuY3Rpb25DYWxsIGluIHByb2dyZXNzLicpO1xuICAgIHRoaXMucmV0cnlQcmVkaWNhdGVfID0gcmV0cnlQcmVkaWNhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBSZXR1cm5zIGFsbCBpbnRlcm1lZGlhcnkgcmVzdWx0cyByZXR1cm5lZCBieSB0aGUgd3JhcHBlZCBmdW5jdGlvbiBzaW5jZVxuLy8gdGhlIGluaXRpYWwgY2FsbC5cbkZ1bmN0aW9uQ2FsbC5wcm90b3R5cGUuZ2V0TGFzdFJlc3VsdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RSZXN1bHRfLmNvbmNhdCgpO1xufTtcblxuLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGNhbGwgd2FzIHJldHJpZWQuXG5GdW5jdGlvbkNhbGwucHJvdG90eXBlLmdldE51bVJldHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1SZXRyaWVzXztcbn07XG5cbi8vIFNldHMgdGhlIGJhY2tvZmYgbGltaXQuXG5GdW5jdGlvbkNhbGwucHJvdG90eXBlLmZhaWxBZnRlciA9IGZ1bmN0aW9uKG1heE51bWJlck9mUmV0cnkpIHtcbiAgICBwcmVjb25kLmNoZWNrU3RhdGUodGhpcy5pc1BlbmRpbmcoKSwgJ0Z1bmN0aW9uQ2FsbCBpbiBwcm9ncmVzcy4nKTtcbiAgICB0aGlzLmZhaWxBZnRlcl8gPSBtYXhOdW1iZXJPZlJldHJ5O1xuICAgIHJldHVybiB0aGlzOyAvLyBSZXR1cm4gdGhpcyBmb3IgY2hhaW5pbmcuXG59O1xuXG4vLyBBYm9ydHMgdGhlIGNhbGwuXG5GdW5jdGlvbkNhbGwucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQoKSB8fCB0aGlzLmlzQWJvcnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKCkpIHtcbiAgICAgICAgdGhpcy5iYWNrb2ZmXy5yZXNldCgpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGVfID0gRnVuY3Rpb25DYWxsLlN0YXRlXy5BQk9SVEVEO1xuICAgIHRoaXMubGFzdFJlc3VsdF8gPSBbbmV3IEVycm9yKCdCYWNrb2ZmIGFib3J0ZWQuJyldO1xuICAgIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgICB0aGlzLmRvQ2FsbGJhY2tfKCk7XG59O1xuXG4vLyBJbml0aWF0ZXMgdGhlIGNhbGwgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24uIEFjY2VwdHMgYW4gb3B0aW9uYWwgZmFjdG9yeVxuLy8gZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgdGhlIGJhY2tvZmYgaW5zdGFuY2U7IHVzZWQgd2hlbiB0ZXN0aW5nLlxuRnVuY3Rpb25DYWxsLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKGJhY2tvZmZGYWN0b3J5KSB7XG4gICAgcHJlY29uZC5jaGVja1N0YXRlKCF0aGlzLmlzQWJvcnRlZCgpLCAnRnVuY3Rpb25DYWxsIGlzIGFib3J0ZWQuJyk7XG4gICAgcHJlY29uZC5jaGVja1N0YXRlKHRoaXMuaXNQZW5kaW5nKCksICdGdW5jdGlvbkNhbGwgYWxyZWFkeSBzdGFydGVkLicpO1xuXG4gICAgdmFyIHN0cmF0ZWd5ID0gdGhpcy5zdHJhdGVneV8gfHwgbmV3IEZpYm9uYWNjaUJhY2tvZmZTdHJhdGVneSgpO1xuXG4gICAgdGhpcy5iYWNrb2ZmXyA9IGJhY2tvZmZGYWN0b3J5ID9cbiAgICAgICAgYmFja29mZkZhY3Rvcnkoc3RyYXRlZ3kpIDpcbiAgICAgICAgbmV3IEJhY2tvZmYoc3RyYXRlZ3kpO1xuXG4gICAgdGhpcy5iYWNrb2ZmXy5vbigncmVhZHknLCB0aGlzLmRvQ2FsbF8uYmluZCh0aGlzLCB0cnVlIC8qIGlzUmV0cnkgKi8pKTtcbiAgICB0aGlzLmJhY2tvZmZfLm9uKCdmYWlsJywgdGhpcy5kb0NhbGxiYWNrXy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmJhY2tvZmZfLm9uKCdiYWNrb2ZmJywgdGhpcy5oYW5kbGVCYWNrb2ZmXy5iaW5kKHRoaXMpKTtcblxuICAgIGlmICh0aGlzLmZhaWxBZnRlcl8gPiAwKSB7XG4gICAgICAgIHRoaXMuYmFja29mZl8uZmFpbEFmdGVyKHRoaXMuZmFpbEFmdGVyXyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZV8gPSBGdW5jdGlvbkNhbGwuU3RhdGVfLlJVTk5JTkc7XG4gICAgdGhpcy5kb0NhbGxfKGZhbHNlIC8qIGlzUmV0cnkgKi8pO1xufTtcblxuLy8gQ2FsbHMgdGhlIHdyYXBwZWQgZnVuY3Rpb24uXG5GdW5jdGlvbkNhbGwucHJvdG90eXBlLmRvQ2FsbF8gPSBmdW5jdGlvbihpc1JldHJ5KSB7XG4gICAgaWYgKGlzUmV0cnkpIHtcbiAgICAgICAgdGhpcy5udW1SZXRyaWVzXysrO1xuICAgIH1cbiAgICB2YXIgZXZlbnRBcmdzID0gWydjYWxsJ10uY29uY2F0KHRoaXMuYXJndW1lbnRzXyk7XG4gICAgZXZlbnRzLkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdC5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaGFuZGxlRnVuY3Rpb25DYWxsYmFja18uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZ1bmN0aW9uXy5hcHBseShudWxsLCB0aGlzLmFyZ3VtZW50c18uY29uY2F0KGNhbGxiYWNrKSk7XG59O1xuXG4vLyBDYWxscyB0aGUgd3JhcHBlZCBmdW5jdGlvbidzIGNhbGxiYWNrIHdpdGggdGhlIGxhc3QgcmVzdWx0IHJldHVybmVkIGJ5IHRoZVxuLy8gd3JhcHBlZCBmdW5jdGlvbi5cbkZ1bmN0aW9uQ2FsbC5wcm90b3R5cGUuZG9DYWxsYmFja18gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNhbGxiYWNrXy5hcHBseShudWxsLCB0aGlzLmxhc3RSZXN1bHRfKTtcbn07XG5cbi8vIEhhbmRsZXMgd3JhcHBlZCBmdW5jdGlvbidzIGNvbXBsZXRpb24uIFRoaXMgbWV0aG9kIGFjdHMgYXMgYSByZXBsYWNlbWVudFxuLy8gZm9yIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbi5cbkZ1bmN0aW9uQ2FsbC5wcm90b3R5cGUuaGFuZGxlRnVuY3Rpb25DYWxsYmFja18gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0Fib3J0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHRoaXMubGFzdFJlc3VsdF8gPSBhcmdzOyAvLyBTYXZlIGxhc3QgY2FsbGJhY2sgYXJndW1lbnRzLlxuICAgIGV2ZW50cy5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQuYXBwbHkodGhpcywgWydjYWxsYmFjayddLmNvbmNhdChhcmdzKSk7XG5cbiAgICB2YXIgZXJyID0gYXJnc1swXTtcbiAgICBpZiAoZXJyICYmIHRoaXMucmV0cnlQcmVkaWNhdGVfKGVycikpIHtcbiAgICAgICAgdGhpcy5iYWNrb2ZmXy5iYWNrb2ZmKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZV8gPSBGdW5jdGlvbkNhbGwuU3RhdGVfLkNPTVBMRVRFRDtcbiAgICAgICAgdGhpcy5kb0NhbGxiYWNrXygpO1xuICAgIH1cbn07XG5cbi8vIEhhbmRsZXMgdGhlIGJhY2tvZmYgZXZlbnQgYnkgcmVlbWl0dGluZyBpdC5cbkZ1bmN0aW9uQ2FsbC5wcm90b3R5cGUuaGFuZGxlQmFja29mZl8gPSBmdW5jdGlvbihudW1iZXIsIGRlbGF5LCBlcnIpIHtcbiAgICB0aGlzLmVtaXQoJ2JhY2tvZmYnLCBudW1iZXIsIGRlbGF5LCBlcnIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbkNhbGw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFja29mZi9saWIvZnVuY3Rpb25fY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gICAgICBDb3B5cmlnaHQgKGMpIDIwMTIgTWF0aGlldSBUdXJjb3R0ZVxuLy8gICAgICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIHByZWNvbmQgPSByZXF1aXJlKCdwcmVjb25kJyk7XG5cbnZhciBCYWNrb2ZmU3RyYXRlZ3kgPSByZXF1aXJlKCcuL3N0cmF0ZWd5Jyk7XG5cbi8vIEV4cG9uZW50aWFsIGJhY2tvZmYgc3RyYXRlZ3kuXG5mdW5jdGlvbiBFeHBvbmVudGlhbEJhY2tvZmZTdHJhdGVneShvcHRpb25zKSB7XG4gICAgQmFja29mZlN0cmF0ZWd5LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5iYWNrb2ZmRGVsYXlfID0gMDtcbiAgICB0aGlzLm5leHRCYWNrb2ZmRGVsYXlfID0gdGhpcy5nZXRJbml0aWFsRGVsYXkoKTtcbiAgICB0aGlzLmZhY3Rvcl8gPSBFeHBvbmVudGlhbEJhY2tvZmZTdHJhdGVneS5ERUZBVUxUX0ZBQ1RPUjtcblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZmFjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJlY29uZC5jaGVja0FyZ3VtZW50KG9wdGlvbnMuZmFjdG9yID4gMSxcbiAgICAgICAgICAgICdFeHBvbmVudGlhbCBmYWN0b3Igc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiAxIGJ1dCBnb3QgJXMuJyxcbiAgICAgICAgICAgIG9wdGlvbnMuZmFjdG9yKTtcbiAgICAgICAgdGhpcy5mYWN0b3JfID0gb3B0aW9ucy5mYWN0b3I7XG4gICAgfVxufVxudXRpbC5pbmhlcml0cyhFeHBvbmVudGlhbEJhY2tvZmZTdHJhdGVneSwgQmFja29mZlN0cmF0ZWd5KTtcblxuLy8gRGVmYXVsdCBtdWx0aXBsaWNhdGlvbiBmYWN0b3IgdXNlZCB0byBjb21wdXRlIHRoZSBuZXh0IGJhY2tvZmYgZGVsYXkgZnJvbVxuLy8gdGhlIGN1cnJlbnQgb25lLiBUaGUgdmFsdWUgY2FuIGJlIG92ZXJyaWRkZW4gYnkgcGFzc2luZyBhIGN1c3RvbSBmYWN0b3IgYXNcbi8vIHBhcnQgb2YgdGhlIG9wdGlvbnMuXG5FeHBvbmVudGlhbEJhY2tvZmZTdHJhdGVneS5ERUZBVUxUX0ZBQ1RPUiA9IDI7XG5cbkV4cG9uZW50aWFsQmFja29mZlN0cmF0ZWd5LnByb3RvdHlwZS5uZXh0XyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYmFja29mZkRlbGF5XyA9IE1hdGgubWluKHRoaXMubmV4dEJhY2tvZmZEZWxheV8sIHRoaXMuZ2V0TWF4RGVsYXkoKSk7XG4gICAgdGhpcy5uZXh0QmFja29mZkRlbGF5XyA9IHRoaXMuYmFja29mZkRlbGF5XyAqIHRoaXMuZmFjdG9yXztcbiAgICByZXR1cm4gdGhpcy5iYWNrb2ZmRGVsYXlfO1xufTtcblxuRXhwb25lbnRpYWxCYWNrb2ZmU3RyYXRlZ3kucHJvdG90eXBlLnJlc2V0XyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYmFja29mZkRlbGF5XyA9IDA7XG4gICAgdGhpcy5uZXh0QmFja29mZkRlbGF5XyA9IHRoaXMuZ2V0SW5pdGlhbERlbGF5KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cG9uZW50aWFsQmFja29mZlN0cmF0ZWd5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhY2tvZmYvbGliL3N0cmF0ZWd5L2V4cG9uZW50aWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBwbGFjZUhvbGRlcnNDb3VudCAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuICAvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG4gIC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcbiAgLy8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuICByZXR1cm4gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMFxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gIHJldHVybiAoYjY0Lmxlbmd0aCAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0NvdW50KGI2NClcbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgaSwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuICBwbGFjZUhvbGRlcnMgPSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG5cbiAgYXJyID0gbmV3IEFycigobGVuICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzKVxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgbCA9IHBsYWNlSG9sZGVycyA+IDAgPyBsZW4gLSA0IDogbGVuXG5cbiAgdmFyIEwgPSAwXG5cbiAgZm9yIChpID0gMDsgaSA8IGw7IGkgKz0gNCkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfCByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltMKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICsgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICsgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gKyBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgb3V0cHV0ID0gJydcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDJdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz09J1xuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyAodWludDhbbGVuIC0gMV0pXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMTBdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPSdcbiAgfVxuXG4gIHBhcnRzLnB1c2gob3V0cHV0KVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jhc2U2NC1qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ2xvY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENsb2NrKHVzZUludGVydmFsKSB7XG4gICAgICAgIGlmICh1c2VJbnRlcnZhbCA9PT0gdm9pZCAwKSB7IHVzZUludGVydmFsID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm93ID0gKHR5cGVvZiAod2luZG93KSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpLmJpbmQod2luZG93LnBlcmZvcm1hbmNlKSkgfHwgRGF0ZS5ub3c7XG4gICAgICAgIHRoaXMuc3RhcnQodXNlSW50ZXJ2YWwpO1xuICAgIH1cbiAgICBDbG9jay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAodXNlSW50ZXJ2YWwpIHtcbiAgICAgICAgaWYgKHVzZUludGVydmFsID09PSB2b2lkIDApIHsgdXNlSW50ZXJ2YWwgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLmRlbHRhVGltZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHVzZUludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBhdXRvIHNldCBpbnRlcnZhbCB0byA2MCB0aWNrcyBwZXIgc2Vjb25kXG4gICAgICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGljay5iaW5kKHRoaXMpLCAxMDAwIC8gNjApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDbG9jay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENsb2NrLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKG5ld1RpbWUpIHtcbiAgICAgICAgaWYgKG5ld1RpbWUgPT09IHZvaWQgMCkgeyBuZXdUaW1lID0gdGhpcy5ub3coKTsgfVxuICAgICAgICB0aGlzLmRlbHRhVGltZSA9IG5ld1RpbWUgLSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gbmV3VGltZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSArPSB0aGlzLmRlbHRhVGltZTtcbiAgICB9O1xuICAgIHJldHVybiBDbG9jaztcbn0oKSk7XG5tb2R1bGUuZXhwb3J0cyA9IENsb2NrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nsb2NrLmpzL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERlbHRhQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWx0YUNvbnRhaW5lcihkYXRhKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMubWF0Y2hlclBsYWNlaG9sZGVycyA9IHtcbiAgICAgICAgICAgIFwiOmlkXCI6IC9eKFthLXpBLVowLTlcXC1fXSspJC8sXG4gICAgICAgICAgICBcIjpudW1iZXJcIjogL14oWzAtOV0rKSQvLFxuICAgICAgICAgICAgXCI6c3RyaW5nXCI6IC9eKFxcdyspJC8sXG4gICAgICAgICAgICBcIjpheGlzXCI6IC9eKFt4eXpdKSQvLFxuICAgICAgICAgICAgXCI6KlwiOiAvKC4qKS8sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgRGVsdGFDb250YWluZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICAgIHZhciBwYXRjaGVzID0gdGhpcy5jb21wYXJlKG5ld0RhdGEpO1xuICAgICAgICB0aGlzLmNoZWNrUGF0Y2hlcyhwYXRjaGVzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgRGVsdGFDb250YWluZXIucHJvdG90eXBlLnJlZ2lzdGVyUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAocGxhY2Vob2xkZXIsIG1hdGNoZXIpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVyUGxhY2Vob2xkZXJzW3BsYWNlaG9sZGVyXSA9IG1hdGNoZXI7XG4gICAgfTtcbiAgICBEZWx0YUNvbnRhaW5lci5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKHNlZ21lbnRzLCBjYWxsYmFjaywgb3BlcmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBydWxlcztcbiAgICAgICAgaWYgKHR5cGVvZiAoc2VnbWVudHMpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJ1bGVzID0gW107XG4gICAgICAgICAgICBjYWxsYmFjayA9IHNlZ21lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcnVsZXMgPSBzZWdtZW50cy5zcGxpdChcIi9cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpc3RlbmVyID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXG4gICAgICAgICAgICByYXdSdWxlczogcnVsZXMsXG4gICAgICAgICAgICBydWxlczogcnVsZXMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoc2VnbWVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBwbGFjZWhvbGRlciBtYXRjaGVyc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHNlZ21lbnQuaW5kZXhPZihcIjpcIikgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF90aGlzLm1hdGNoZXJQbGFjZWhvbGRlcnNbc2VnbWVudF0gfHwgX3RoaXMubWF0Y2hlclBsYWNlaG9sZGVyc1tcIjoqXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBSZWdFeHAoXCJeXCIgKyBzZWdtZW50ICsgXCIkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9O1xuICAgIERlbHRhQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlbHRhQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9O1xuICAgIERlbHRhQ29udGFpbmVyLnByb3RvdHlwZS5jaGVja1BhdGNoZXMgPSBmdW5jdGlvbiAocGF0Y2hlcykge1xuICAgICAgICBmb3IgKHZhciBpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2pdO1xuICAgICAgICAgICAgICAgIHZhciBwYXRoVmFyaWFibGVzID0gdGhpcy5nZXRQYXRoVmFyaWFibGVzKHBhdGNoZXNbaV0sIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aFZhcmlhYmxlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpc3RlbmVyLm9wZXJhdGlvbiB8fCBsaXN0ZW5lci5vcGVyYXRpb24gPT09IHBhdGNoZXNbaV0ub3BlcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aFZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHBhdGNoZXNbaV0ub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXRjaGVzW2ldLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGZhbGxiYWNrIGxpc3RlbmVyXG4gICAgICAgICAgICBpZiAoIW1hdGNoZWQgJiYgdGhpcy5kZWZhdWx0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRMaXN0ZW5lci5jYWxsYmFjayhwYXRjaGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVsdGFDb250YWluZXIucHJvdG90eXBlLmdldFBhdGhWYXJpYWJsZXMgPSBmdW5jdGlvbiAocGF0Y2gsIGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIHNraXAgaWYgcnVsZXMgY291bnQgZGlmZmVyIGZyb20gcGF0Y2hcbiAgICAgICAgaWYgKHBhdGNoLnBhdGgubGVuZ3RoICE9PSBsaXN0ZW5lci5ydWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGF0aCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXIucnVsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gcGF0Y2gucGF0aFtpXS5tYXRjaChsaXN0ZW5lci5ydWxlc1tpXSk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDAgfHwgbWF0Y2hlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGlzdGVuZXIucmF3UnVsZXNbaV0uc3Vic3RyKDAsIDEpID09PSBcIjpcIikge1xuICAgICAgICAgICAgICAgIHBhdGhbbGlzdGVuZXIucmF3UnVsZXNbaV0uc3Vic3RyKDEpXSA9IG1hdGNoZXNbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbiAgICBEZWx0YUNvbnRhaW5lci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfTtcbiAgICBEZWx0YUNvbnRhaW5lci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICAgIHZhciBwYXRjaGVzID0gW107XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUodGhpcy5kYXRhLCBuZXdEYXRhLCBwYXRjaGVzLCBbXSk7XG4gICAgICAgIHJldHVybiBwYXRjaGVzO1xuICAgIH07XG4gICAgLy8gRGlydHkgY2hlY2sgaWYgb2JqIGlzIGRpZmZlcmVudCBmcm9tIG1pcnJvciwgZ2VuZXJhdGUgcGF0Y2hlcyBhbmQgdXBkYXRlIG1pcnJvclxuICAgIERlbHRhQ29udGFpbmVyLnByb3RvdHlwZS5nZW5lcmF0ZSA9IGZ1bmN0aW9uIChvbGREYXRhLCBuZXdEYXRhLCBwYXRjaGVzLCBwYXRoKSB7XG4gICAgICAgIHZhciBuZXdLZXlzID0gb2JqZWN0S2V5cyhuZXdEYXRhKTtcbiAgICAgICAgdmFyIG9sZEtleXMgPSBvYmplY3RLZXlzKG9sZERhdGEpO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciB0ID0gb2xkS2V5cy5sZW5ndGggLSAxOyB0ID49IDA7IHQtLSkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBvbGRLZXlzW3RdO1xuICAgICAgICAgICAgdmFyIG9sZFZhbCA9IG9sZERhdGFbcHJvcF07XG4gICAgICAgICAgICBpZiAobmV3RGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAvLyBwcm9wZXJ0eSBzdGlsbCBvbiBuZXcgZGF0YSwgYW5kLi4uXG4gICAgICAgICAgICAgICAgJiYgIShuZXdEYXRhW3Byb3BdID09PSB1bmRlZmluZWQgLy8gbmV3IGRhdGEgZG9lc250IGhhdmUgdGhlIHByb3BlcnR5IGRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgJiYgb2xkVmFsICE9PSB1bmRlZmluZWQgLy8gb3Igb2xkIHZhbHVlIGZvciB0aGlzIHByb3BlcnR5IHdhcyBkZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICYmIEFycmF5LmlzQXJyYXkobmV3RGF0YSkgPT09IGZhbHNlKSAvLyBvciBjdXJyZW50IE5ld0RhdGEgaXNuJ3QgYSBhcnJheVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IG5ld0RhdGFbcHJvcF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbGRWYWwgPT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgICAgICBvbGRWYWwgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgbmV3VmFsID09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgcmVwbGFjZSBsaXN0ZW5lcnMgZm9yIG9iamVjdCBsZXZlbCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UGF0aCA9IHBhdGguY29uY2F0KHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSB0aGlzLmNoZWNrT2JzZXJ2ZUxpc3RlbmVycyhvbGRWYWwsIG5ld1ZhbCwgbmV3UGF0aCwgcGF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUob2xkVmFsLCBuZXdWYWwsIHBhdGNoZXMsIG5ld1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlcy5wdXNoKHsgb3BlcmF0aW9uOiBcInJlcGxhY2VcIiwgcGF0aDogcGF0aC5jb25jYXQocHJvcCksIHZhbHVlOiBkZWVwQ2xvbmUobmV3VmFsKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGNoZXMucHVzaCh7IG9wZXJhdGlvbjogXCJyZW1vdmVcIiwgcGF0aDogcGF0aC5jb25jYXQocHJvcCkgfSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlZCA9IHRydWU7IC8vIHByb3BlcnR5IGhhcyBiZWVuIGRlbGV0ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGV0ZWQgJiYgbmV3S2V5cy5sZW5ndGggPT0gb2xkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IG5ld0tleXMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gbmV3S2V5c1t0XTtcbiAgICAgICAgICAgIGlmICghb2xkRGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBuZXdEYXRhW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXRjaGVzLnB1c2goeyBvcGVyYXRpb246IFwiYWRkXCIsIHBhdGg6IHBhdGguY29uY2F0KHByb3ApLCB2YWx1ZTogZGVlcENsb25lKG5ld0RhdGFbcHJvcF0pIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWx0YUNvbnRhaW5lci5wcm90b3R5cGUuY2hlY2tPYnNlcnZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKG9sZFZhbCwgbmV3VmFsLCBwYXRoLCBwYXRjaGVzKSB7XG4gICAgICAgIHZhciBydWxlcztcbiAgICAgICAgbGlzdGVuZXJMb29wOiBmb3IgKHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tpXS5vcGVyYXRpb24gIT09ICcqJylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHJ1bGVzID0gdGhpcy5saXN0ZW5lcnNbaV0ucnVsZXM7XG4gICAgICAgICAgICBpZiAocnVsZXMubGVuZ3RoICE9PSBwYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIGxpc3RlbmVyTG9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGlfMSA9IDA7IGlfMSA8IHJ1bGVzLmxlbmd0aDsgaV8xKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhdGhbaV8xXSAvLyBpZiBwYXRoIGlzbid0IHRoaXMgbG9uZywgb3JcbiAgICAgICAgICAgICAgICAgICAgfHwgIXBhdGhbaV8xXS5tYXRjaChydWxlc1tpXzFdKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBsaXN0ZW5lckxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgd2UgZ290IGhlcmUgdGhlbiB0aGUgbGlzdGVuZXIgbWF0Y2hlcy4gdGVzdCBzaGFsbG93IHZhbHVlc1xuICAgICAgICAgICAgdmFyIG5ld0tleXMgPSBvYmplY3RLZXlzKG5ld1ZhbCk7XG4gICAgICAgICAgICAvLyBmaXJzdCBqdXN0IGNoZWNrIGlmIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAob2JqZWN0S2V5cyhvbGRWYWwpLmxlbmd0aCAhPT0gbmV3S2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaGVzLnB1c2goeyBvcGVyYXRpb246IFwiKlwiLCBwYXRoOiBwYXRoLCB2YWx1ZTogZGVlcENsb25lKG5ld1ZhbCkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2xldCBvbGRLZXlzID0gb2JqZWN0S2V5cyhvbGRWYWwpO1xuICAgICAgICAgICAgZm9yICh2YXIgaV8yID0gbmV3S2V5cy5sZW5ndGggLSAxOyBpXzIgPj0gMDsgaV8yLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsW25ld0tleXNbaV8yXV0gIT09IG5ld1ZhbFtuZXdLZXlzW2lfMl1dKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXMucHVzaCh7IG9wZXJhdGlvbjogXCIqXCIsIHBhdGg6IHBhdGgsIHZhbHVlOiBkZWVwQ2xvbmUobmV3VmFsKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiBEZWx0YUNvbnRhaW5lcjtcbn0oKSk7XG5leHBvcnRzLkRlbHRhQ29udGFpbmVyID0gRGVsdGFDb250YWluZXI7XG5mdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XG4gICAgc3dpdGNoICh0eXBlb2Ygb2JqKSB7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvL0Zhc3RlciB0aGFuIEVTNSBjbG9uZSAtIGh0dHA6Ly9qc3BlcmYuY29tL2RlZXAtY2xvbmluZy1vZi1vYmplY3RzLzVcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vdGhpcyBpcyBob3cgSlNPTi5zdHJpbmdpZnkgYmVoYXZlcyBmb3IgYXJyYXkgaXRlbXNcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBvYmo7IC8vbm8gbmVlZCB0byBjbG9uZSBwcmltaXRpdmVzXG4gICAgfVxufVxuZnVuY3Rpb24gb2JqZWN0S2V5cyhvYmopIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBrZXlzID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGtleXNba10gPSBcIlwiICsgaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG59XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWx0YUNvbnRhaW5lci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVsdGEtbGlzdGVuZXIvbGliL0RlbHRhQ29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFeHBsaWNpdENvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXhwbGljaXRDb250YWluZXIoZGF0YSkge1xuICAgICAgICB0aGlzLnN0YXRlTGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnByb3BLZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcExlbmd0aCA9IHRoaXMucHJvcEtleXMubGVuZ3RoO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhwbGljaXRDb250YWluZXIucHJvdG90eXBlLCBcImRhdGFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEV4cGxpY2l0Q29udGFpbmVyLnByb3RvdHlwZS5hZGRTdGF0ZUxpc3RlbmVyID0gZnVuY3Rpb24gKHByb3BOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN0YXRlTGlzdGVuZXJzW3Byb3BOYW1lXSA9IGNhbGxiYWNrO1xuICAgIH07XG4gICAgRXhwbGljaXRDb250YWluZXIucHJvdG90eXBlLmFkZENyZWF0ZUxpc3RlbmVyID0gZnVuY3Rpb24gKHByb3BOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVyc1twcm9wTmFtZV0gPSBjYWxsYmFjaztcbiAgICB9O1xuICAgIEV4cGxpY2l0Q29udGFpbmVyLnByb3RvdHlwZS5hZGRSZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChwcm9wTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnNbcHJvcE5hbWVdID0gY2FsbGJhY2s7XG4gICAgfTtcbiAgICBFeHBsaWNpdENvbnRhaW5lci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RlbmVycyA9IHt9O1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlTGlzdGVuZXJzID0ge307XG4gICAgfTtcbiAgICBFeHBsaWNpdENvbnRhaW5lci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG5ld0RhdGEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMucHJvcExlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgbGF0ZXN0T2JqS2V5cyA9IE9iamVjdC5rZXlzKG5ld0RhdGFbdGhpcy5wcm9wS2V5c1tpXV0pO1xuICAgICAgICAgICAgdmFyIHByaW9yT2JqS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2RhdGFbdGhpcy5wcm9wS2V5c1tpXV0pO1xuICAgICAgICAgICAgdmFyIGZvdW5kTmV3ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gbGF0ZXN0T2JqS2V5cy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBwcmlvck9iaktleXMubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhdGVzdE9iaktleXNbal0gPT09IHByaW9yT2JqS2V5c1trXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyB3ZSBrbm93IHRoaXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvdW5kTmV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jcmVhdGVMaXN0ZW5lcnNbdGhpcy5wcm9wS2V5c1tpXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lcnNbdGhpcy5wcm9wS2V5c1tpXV0obmV3RGF0YVt0aGlzLnByb3BLZXlzW2ldXVtsYXRlc3RPYmpLZXlzW2pdXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb3VuZE5ldyAmJiBsYXRlc3RPYmpLZXlzLmxlbmd0aCA9PT0gcHJpb3JPYmpLZXlzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gaWYgbm90aGluZyB3YXMgYWRkZWQgYW5kIGxlbmd0aHMgbWF0Y2gsIHNhdmUgYSBpdGVyYXRpb25cbiAgICAgICAgICAgIGZvciAodmFyIGogPSBwcmlvck9iaktleXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gbGF0ZXN0T2JqS2V5cy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJpb3JPYmpLZXlzW2pdID09PSBsYXRlc3RPYmpLZXlzW2tdKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIHdlIGtub3cgdGhpcyBvYmplY3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlTGlzdGVuZXJzW3RoaXMucHJvcEtleXNbaV1dKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzW3RoaXMucHJvcEtleXNbaV1dKHRoaXMuX2RhdGFbdGhpcy5wcm9wS2V5c1tpXV1bcHJpb3JPYmpLZXlzW2ldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVMaXN0ZW5lcnNbdGhpcy5wcm9wS2V5c1tpXV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlTGlzdGVuZXJzW3RoaXMucHJvcEtleXNbaV1dKG5ld0RhdGFbdGhpcy5wcm9wS2V5c1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgIH07XG4gICAgcmV0dXJuIEV4cGxpY2l0Q29udGFpbmVyO1xufSgpKTtcbmV4cG9ydHMuRXhwbGljaXRDb250YWluZXIgPSBFeHBsaWNpdENvbnRhaW5lcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV4cGxpY2l0Q29udGFpbmVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWx0YS1saXN0ZW5lci9saWIvRXhwbGljaXRDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERlbHRhQ29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9EZWx0YUNvbnRhaW5lclwiKTtcbmV4cG9ydHMuRGVsdGFDb250YWluZXIgPSBEZWx0YUNvbnRhaW5lcl8xLkRlbHRhQ29udGFpbmVyO1xudmFyIEV4cGxpY2l0Q29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9FeHBsaWNpdENvbnRhaW5lclwiKTtcbmV4cG9ydHMuRXhwbGljaXRDb250YWluZXIgPSBFeHBsaWNpdENvbnRhaW5lcl8xLkV4cGxpY2l0Q29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlbHRhLWxpc3RlbmVyL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRm9zc2lsIFNDTSBkZWx0YSBjb21wcmVzc2lvbiBhbGdvcml0aG1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vL1xuLy8gRm9ybWF0OlxuLy8gaHR0cDovL3d3dy5mb3NzaWwtc2NtLm9yZy9pbmRleC5odG1sL2RvYy90aXAvd3d3L2RlbHRhX2Zvcm1hdC53aWtpXG4vL1xuLy8gQWxnb3JpdGhtOlxuLy8gaHR0cDovL3d3dy5mb3NzaWwtc2NtLm9yZy9pbmRleC5odG1sL2RvYy90aXAvd3d3L2RlbHRhX2VuY29kZXJfYWxnb3JpdGhtLndpa2lcbi8vXG4vLyBPcmlnaW5hbCBpbXBsZW1lbnRhdGlvbjpcbi8vIGh0dHA6Ly93d3cuZm9zc2lsLXNjbS5vcmcvaW5kZXguaHRtbC9hcnRpZmFjdC9kMWIwNTk4YWRjZDY1MGIzNTUxZjYzYjE3ZGZjODY0ZTczNzc1YzNkXG4vL1xuLy8gTElDRU5TRVxuLy8gLS0tLS0tLVxuLy9cbi8vIENvcHlyaWdodCAyMDE0IERtaXRyeSBDaGVzdG55a2ggKEphdmFTY3JpcHQgcG9ydClcbi8vIENvcHlyaWdodCAyMDA3IEQuIFJpY2hhcmQgSGlwcCAgKG9yaWdpbmFsIEMgdmVyc2lvbilcbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvclxuLy8gd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4vL1xuLy8gICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlXG4vLyAgICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGVcbi8vICAgICAgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vL1xuLy8gICAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyAgICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGVcbi8vICAgICAgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyXG4vLyAgICAgIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQVVUSE9SUyBgYEFTIElTJycgQU5EIEFOWSBFWFBSRVNTXG4vLyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuLy8gV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4vLyBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09OVFJJQlVUT1JTIEJFXG4vLyBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4vLyBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuLy8gU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SXG4vLyBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbi8vIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFXG4vLyBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuLy8gRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbi8vXG4vLyBUaGUgdmlld3MgYW5kIGNvbmNsdXNpb25zIGNvbnRhaW5lZCBpbiB0aGUgc29mdHdhcmUgYW5kIGRvY3VtZW50YXRpb25cbi8vIGFyZSB0aG9zZSBvZiB0aGUgYXV0aG9ycyBhbmQgY29udHJpYnV0b3JzIGFuZCBzaG91bGQgbm90IGJlIGludGVycHJldGVkXG4vLyBhcyByZXByZXNlbnRpbmcgb2ZmaWNpYWwgcG9saWNpZXMsIGVpdGhlciBleHByZXNzZWQgb3IgaW1wbGllZCwgb2YgYW55Ym9keVxuLy8gZWxzZS5cbi8vXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICBlbHNlIHJvb3QuZm9zc2lsRGVsdGEgPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGZvc3NpbERlbHRhID0ge307XG5cbi8vIEhhc2ggd2luZG93IHdpZHRoIGluIGJ5dGVzLiBNdXN0IGJlIGEgcG93ZXIgb2YgdHdvLlxudmFyIE5IQVNIID0gMTY7XG5cbmZ1bmN0aW9uIFJvbGxpbmdIYXNoKCkge1xuICB0aGlzLmEgPSAwOyAvLyBoYXNoICAgICAoMTYtYml0IHVuc2lnbmVkKVxuICB0aGlzLmIgPSAwOyAvLyB2YWx1ZXMgICAoMTYtYml0IHVuc2lnbmVkKVxuICB0aGlzLmkgPSAwOyAvLyBzdGFydCBvZiB0aGUgaGFzaCB3aW5kb3cgKDE2LWJpdCB1bnNpZ25lZClcbiAgdGhpcy56ID0gbmV3IEFycmF5KE5IQVNIKTsgLy8gdGhlIHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBoYXNoZWQuXG59XG5cbi8vIEluaXRpYWxpemUgdGhlIHJvbGxpbmcgaGFzaCB1c2luZyB0aGUgZmlyc3QgTkhBU0ggYnl0ZXMgb2Zcbi8vIHogYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuUm9sbGluZ0hhc2gucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbih6LCBwb3MpIHtcbiAgdmFyIGEgPSAwLCBiID0gMCwgaSwgeDtcbiAgZm9yKGkgPSAwOyBpIDwgTkhBU0g7IGkrKyl7XG4gICAgeCA9IHpbcG9zK2ldO1xuICAgIGEgPSAoYSArIHgpICYgMHhmZmZmO1xuICAgIGIgPSAoYiArIChOSEFTSC1pKSp4KSAmIDB4ZmZmZjtcbiAgICB0aGlzLnpbaV0gPSB4O1xuICB9XG4gIHRoaXMuYSA9IGEgJiAweGZmZmY7XG4gIHRoaXMuYiA9IGIgJiAweGZmZmY7XG4gIHRoaXMuaSA9IDA7XG59O1xuXG4vLyBBZHZhbmNlIHRoZSByb2xsaW5nIGhhc2ggYnkgYSBzaW5nbGUgYnl0ZSBcImNcIi5cblJvbGxpbmdIYXNoLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oYykge1xuICB2YXIgb2xkID0gdGhpcy56W3RoaXMuaV07XG4gIHRoaXMuelt0aGlzLmldID0gYztcbiAgdGhpcy5pID0gKHRoaXMuaSsxKSYoTkhBU0gtMSk7XG4gIHRoaXMuYSA9ICh0aGlzLmEgLSBvbGQgKyBjKSAmIDB4ZmZmZjtcbiAgdGhpcy5iID0gKHRoaXMuYiAtIE5IQVNIKm9sZCArIHRoaXMuYSkgJiAweGZmZmY7XG59O1xuXG4vLyBSZXR1cm4gYSAzMi1iaXQgaGFzaCB2YWx1ZS5cblJvbGxpbmdIYXNoLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKCh0aGlzLmEgJiAweGZmZmYpIHwgKHRoaXMuYiAmIDB4ZmZmZik8PDE2KT4+PjA7XG59O1xuXG52YXIgekRpZ2l0cyA9IFwiMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaX2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6flwiLlxuICAgICAgICAgICAgICAgIHNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguY2hhckNvZGVBdCgwKTsgfSk7XG5cbnZhciB6VmFsdWUgPSBbXG4gIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gICAwLCAgMSwgIDIsICAzLCAgNCwgIDUsICA2LCAgNywgICAgOCwgIDksIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gIC0xLCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgICAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsXG4gIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgICAzMywgMzQsIDM1LCAtMSwgLTEsIC0xLCAtMSwgMzYsXG4gIC0xLCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgICA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsXG4gIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgICA2MCwgNjEsIDYyLCAtMSwgLTEsIC0xLCA2MywgLTFcbl07XG5cbi8vIFJlYWRlciByZWFkcyBieXRlcywgY2hhcnMsIGludHMgZnJvbSBhcnJheS5cbmZ1bmN0aW9uIFJlYWRlcihhcnJheSkge1xuICB0aGlzLmEgPSBhcnJheTsgLy8gc291cmNlIGFycmF5XG4gIHRoaXMucG9zID0gMDsgICAvLyBjdXJyZW50IHBvc2l0aW9uIGluIGFycmF5XG59XG5cblJlYWRlci5wcm90b3R5cGUuaGF2ZUJ5dGVzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvcyA8IHRoaXMuYS5sZW5ndGg7XG59O1xuXG5SZWFkZXIucHJvdG90eXBlLmdldEJ5dGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGIgPSB0aGlzLmFbdGhpcy5wb3NdO1xuICB0aGlzLnBvcysrO1xuICBpZiAodGhpcy5wb3MgPiB0aGlzLmEubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIGJvdW5kcycpO1xuICByZXR1cm4gYjtcbn07XG5cblJlYWRlci5wcm90b3R5cGUuZ2V0Q2hhciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmdldEJ5dGUoKSk7XG59O1xuXG4gIC8vIFJlYWQgYmFzZTY0LWVuY29kZWQgdW5zaWduZWQgaW50ZWdlci5cblJlYWRlci5wcm90b3R5cGUuZ2V0SW50ID0gZnVuY3Rpb24oKXtcbiAgdmFyIHYgPSAwLCBjO1xuICB3aGlsZSh0aGlzLmhhdmVCeXRlcygpICYmIChjID0gelZhbHVlWzB4N2YgJiB0aGlzLmdldEJ5dGUoKV0pID49IDApIHtcbiAgICAgdiA9ICh2PDw2KSArIGM7XG4gIH1cbiAgdGhpcy5wb3MtLTtcbiAgcmV0dXJuIHYgPj4+IDA7XG59O1xuXG5cbi8vIFdyaXRlIHdyaXRlcyBhbiBhcnJheS5cbmZ1bmN0aW9uIFdyaXRlcigpIHtcbiAgdGhpcy5hID0gW107XG59XG5cbldyaXRlci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hO1xufTtcblxuV3JpdGVyLnByb3RvdHlwZS5wdXRCeXRlID0gZnVuY3Rpb24oYikge1xuICB0aGlzLmEucHVzaChiICYgMHhmZik7XG59O1xuXG4vLyBXcml0ZSBhbiBBU0NJSSBjaGFyYWN0ZXIgKHMgaXMgYSBvbmUtY2hhciBzdHJpbmcpLlxuV3JpdGVyLnByb3RvdHlwZS5wdXRDaGFyID0gZnVuY3Rpb24ocykge1xuICB0aGlzLnB1dEJ5dGUocy5jaGFyQ29kZUF0KDApKTtcbn07XG5cbi8vIFdyaXRlIGEgYmFzZTY0IHVuc2lnbmVkIGludGVnZXIuXG5Xcml0ZXIucHJvdG90eXBlLnB1dEludCA9IGZ1bmN0aW9uKHYpe1xuICB2YXIgaSwgaiwgekJ1ZiA9IFtdO1xuICBpZiAodiA9PT0gMCkge1xuICAgIHRoaXMucHV0Q2hhcignMCcpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGkgPSAwOyB2ID4gMDsgaSsrLCB2ID4+Pj0gNilcbiAgICB6QnVmLnB1c2goekRpZ2l0c1t2JjB4M2ZdKTtcbiAgZm9yIChqID0gaS0xOyBqID49IDA7IGotLSlcbiAgICB0aGlzLnB1dEJ5dGUoekJ1ZltqXSk7XG59O1xuXG4vLyBDb3B5IGZyb20gYXJyYXkgYXQgc3RhcnQgdG8gZW5kLlxuV3JpdGVyLnByb3RvdHlwZS5wdXRBcnJheSA9IGZ1bmN0aW9uKGEsIHN0YXJ0LCBlbmQpIHtcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHRoaXMuYS5wdXNoKGFbaV0pO1xufTtcblxuLy8gUmV0dXJuIHRoZSBudW1iZXIgZGlnaXRzIGluIHRoZSBiYXNlNjQgcmVwcmVzZW50YXRpb24gb2YgYSBwb3NpdGl2ZSBpbnRlZ2VyLlxuZnVuY3Rpb24gZGlnaXRDb3VudCh2KXtcbiAgdmFyIGksIHg7XG4gIGZvciAoaSA9IDEsIHggPSA2NDsgdiA+PSB4OyBpKyssIHggPDw9IDYpeyAvKiBub3RoaW5nICovIH1cbiAgcmV0dXJuIGk7XG59XG5cbi8vIFJldHVybiBhIDMyLWJpdCBjaGVja3N1bSBvZiB0aGUgYXJyYXkuXG5mdW5jdGlvbiBjaGVja3N1bShhcnIpIHtcbiAgdmFyIHN1bTAgPSAwLCBzdW0xID0gMCwgc3VtMiA9IDAsIHN1bTMgPSAwLFxuICAgICAgeiA9IDAsIE4gPSBhcnIubGVuZ3RoO1xuICAvL1RPRE8gbWVhc3VyZSBpZiB0aGlzIHVucm9sbGluZyBpcyBoZWxwZnVsLlxuICB3aGlsZSAoTiA+PSAxNikge1xuICAgIHN1bTAgPSBzdW0wICsgYXJyW3orMF0gfCAwO1xuICAgIHN1bTEgPSBzdW0xICsgYXJyW3orMV0gfCAwO1xuICAgIHN1bTIgPSBzdW0yICsgYXJyW3orMl0gfCAwO1xuICAgIHN1bTMgPSBzdW0zICsgYXJyW3orM10gfCAwO1xuXG4gICAgc3VtMCA9IHN1bTAgKyBhcnJbeis0XSB8IDA7XG4gICAgc3VtMSA9IHN1bTEgKyBhcnJbeis1XSB8IDA7XG4gICAgc3VtMiA9IHN1bTIgKyBhcnJbeis2XSB8IDA7XG4gICAgc3VtMyA9IHN1bTMgKyBhcnJbeis3XSB8IDA7XG5cbiAgICBzdW0wID0gc3VtMCArIGFyclt6KzhdIHwgMDtcbiAgICBzdW0xID0gc3VtMSArIGFyclt6KzldIHwgMDtcbiAgICBzdW0yID0gc3VtMiArIGFyclt6KzEwXSB8IDA7XG4gICAgc3VtMyA9IHN1bTMgKyBhcnJbeisxMV0gfCAwO1xuXG4gICAgc3VtMCA9IHN1bTAgKyBhcnJbeisxMl0gfCAwO1xuICAgIHN1bTEgPSBzdW0xICsgYXJyW3orMTNdIHwgMDtcbiAgICBzdW0yID0gc3VtMiArIGFyclt6KzE0XSB8IDA7XG4gICAgc3VtMyA9IHN1bTMgKyBhcnJbeisxNV0gfCAwO1xuXG4gICAgeiArPSAxNjtcbiAgICBOIC09IDE2O1xuICB9XG4gIHdoaWxlIChOID49IDQpIHtcbiAgICBzdW0wID0gc3VtMCArIGFyclt6KzBdIHwgMDtcbiAgICBzdW0xID0gc3VtMSArIGFyclt6KzFdIHwgMDtcbiAgICBzdW0yID0gc3VtMiArIGFyclt6KzJdIHwgMDtcbiAgICBzdW0zID0gc3VtMyArIGFyclt6KzNdIHwgMDtcbiAgICB6ICs9IDQ7XG4gICAgTiAtPSA0O1xuICB9XG4gIHN1bTMgPSAoKChzdW0zICsgKHN1bTIgPDwgOCkgfCAwKSArIChzdW0xIDw8IDE2KSB8IDApICsgKHN1bTAgPDwgMjQpIHwgMCk7XG4gIC8qIGpzaGludCAtVzA4NiAqL1xuICBzd2l0Y2ggKE4pIHtcbiAgICBjYXNlIDM6IHN1bTMgPSBzdW0zICsgKGFyclt6KzJdIDw8ICA4KSB8IDA7IC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlIDI6IHN1bTMgPSBzdW0zICsgKGFyclt6KzFdIDw8IDE2KSB8IDA7IC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlIDE6IHN1bTMgPSBzdW0zICsgKGFyclt6KzBdIDw8IDI0KSB8IDA7IC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgfVxuICByZXR1cm4gc3VtMyA+Pj4gMDtcbn1cblxuLy8gQ3JlYXRlIGEgbmV3IGRlbHRhIGZyb20gc3JjIHRvIG91dC5cbmZvc3NpbERlbHRhLmNyZWF0ZSA9IGZ1bmN0aW9uKHNyYywgb3V0KSB7XG4gIHZhciB6RGVsdGEgPSBuZXcgV3JpdGVyKCk7XG4gIHZhciBsZW5PdXQgPSBvdXQubGVuZ3RoO1xuICB2YXIgbGVuU3JjID0gc3JjLmxlbmd0aDtcbiAgdmFyIGksIGxhc3RSZWFkID0gLTE7XG5cbiAgekRlbHRhLnB1dEludChsZW5PdXQpO1xuICB6RGVsdGEucHV0Q2hhcignXFxuJyk7XG5cbiAgLy8gSWYgdGhlIHNvdXJjZSBpcyB2ZXJ5IHNtYWxsLCBpdCBtZWFucyB0aGF0IHdlIGhhdmUgbm9cbiAgLy8gY2hhbmNlIG9mIGV2ZXIgZG9pbmcgYSBjb3B5IGNvbW1hbmQuICBKdXN0IG91dHB1dCBhIHNpbmdsZVxuICAvLyBsaXRlcmFsIHNlZ21lbnQgZm9yIHRoZSBlbnRpcmUgdGFyZ2V0IGFuZCBleGl0LlxuICBpZiAobGVuU3JjIDw9IE5IQVNIKSB7XG4gICAgekRlbHRhLnB1dEludChsZW5PdXQpO1xuICAgIHpEZWx0YS5wdXRDaGFyKCc6Jyk7XG4gICAgekRlbHRhLnB1dEFycmF5KG91dCwgMCwgbGVuT3V0KTtcbiAgICB6RGVsdGEucHV0SW50KGNoZWNrc3VtKG91dCkpO1xuICAgIHpEZWx0YS5wdXRDaGFyKCc7Jyk7XG4gICAgcmV0dXJuIHpEZWx0YS50b0FycmF5KCk7XG4gIH1cblxuICAvLyBDb21wdXRlIHRoZSBoYXNoIHRhYmxlIHVzZWQgdG8gbG9jYXRlIG1hdGNoaW5nIHNlY3Rpb25zIGluIHRoZSBzb3VyY2UuXG4gIHZhciBuSGFzaCA9IE1hdGguY2VpbChsZW5TcmMgLyBOSEFTSCk7XG4gIHZhciBjb2xsaWRlID0gIG5ldyBBcnJheShuSGFzaCk7XG4gIHZhciBsYW5kbWFyayA9IG5ldyBBcnJheShuSGFzaCk7XG4gIGZvciAoaSA9IDA7IGkgPCBjb2xsaWRlLmxlbmd0aDsgaSsrKSBjb2xsaWRlW2ldID0gLTE7XG4gIGZvciAoaSA9IDA7IGkgPCBsYW5kbWFyay5sZW5ndGg7IGkrKykgbGFuZG1hcmtbaV0gPSAtMTtcbiAgdmFyIGh2LCBoID0gbmV3IFJvbGxpbmdIYXNoKCk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5TcmMtTkhBU0g7IGkgKz0gTkhBU0gpIHtcbiAgICBoLmluaXQoc3JjLCBpKTtcbiAgICBodiA9IGgudmFsdWUoKSAlIG5IYXNoO1xuICAgIGNvbGxpZGVbaS9OSEFTSF0gPSBsYW5kbWFya1todl07XG4gICAgbGFuZG1hcmtbaHZdID0gaS9OSEFTSDtcbiAgfVxuXG4gIHZhciBiYXNlID0gMDtcbiAgdmFyIGlTcmMsIGlCbG9jaywgYmVzdENudCwgYmVzdE9mc3QsIGJlc3RMaXRzejtcbiAgd2hpbGUgKGJhc2UrTkhBU0g8bGVuT3V0KSB7XG4gICAgYmVzdE9mc3Q9MDtcbiAgICBiZXN0TGl0c3o9MDtcbiAgICBoLmluaXQob3V0LCBiYXNlKTtcbiAgICBpID0gMDsgLy8gVHJ5aW5nIHRvIG1hdGNoIGEgbGFuZG1hcmsgYWdhaW5zdCB6T3V0W2Jhc2UraV1cbiAgICBiZXN0Q250ID0gMDtcbiAgICB3aGlsZSgxKSB7XG4gICAgICB2YXIgbGltaXQgPSAyNTA7XG4gICAgICBodiA9IGgudmFsdWUoKSAlIG5IYXNoO1xuICAgICAgaUJsb2NrID0gbGFuZG1hcmtbaHZdO1xuICAgICAgd2hpbGUgKGlCbG9jayA+PSAwICYmIChsaW1pdC0tKT4wICkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgaGFzaCB3aW5kb3cgaGFzIGlkZW50aWZpZWQgYSBwb3RlbnRpYWwgbWF0Y2ggYWdhaW5zdFxuICAgICAgICAvLyBsYW5kbWFyayBibG9jayBpQmxvY2suICBCdXQgd2UgbmVlZCB0byBpbnZlc3RpZ2F0ZSBmdXJ0aGVyLlxuICAgICAgICAvL1xuICAgICAgICAvLyBMb29rIGZvciBhIHJlZ2lvbiBpbiB6T3V0IHRoYXQgbWF0Y2hlcyB6U3JjLiBBbmNob3IgdGhlIHNlYXJjaFxuICAgICAgICAvLyBhdCB6U3JjW2lTcmNdIGFuZCB6T3V0W2Jhc2UraV0uICBEbyBub3QgaW5jbHVkZSBhbnl0aGluZyBwcmlvciB0b1xuICAgICAgICAvLyB6T3V0W2Jhc2VdIG9yIGFmdGVyIHpPdXRbb3V0TGVuXSBub3IgYW55dGhpbmcgYWZ0ZXIgelNyY1tzcmNMZW5dLlxuICAgICAgICAvL1xuICAgICAgICAvLyBTZXQgY250IGVxdWFsIHRvIHRoZSBsZW5ndGggb2YgdGhlIG1hdGNoIGFuZCBzZXQgb2ZzdCBzbyB0aGF0XG4gICAgICAgIC8vIHpTcmNbb2ZzdF0gaXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIG1hdGNoLiAgbGl0c3ogaXMgdGhlIG51bWJlclxuICAgICAgICAvLyBvZiBjaGFyYWN0ZXJzIGJldHdlZW4gek91dFtiYXNlXSBhbmQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbWF0Y2guXG4gICAgICAgIC8vIHN6IHdpbGwgYmUgdGhlIG92ZXJoZWFkIChpbiBieXRlcykgbmVlZGVkIHRvIGVuY29kZSB0aGUgY29weVxuICAgICAgICAvLyBjb21tYW5kLiAgT25seSBnZW5lcmF0ZSBjb3B5IGNvbW1hbmQgaWYgdGhlIG92ZXJoZWFkIG9mIHRoZVxuICAgICAgICAvLyBjb3B5IGNvbW1hbmQgaXMgbGVzcyB0aGFuIHRoZSBhbW91bnQgb2YgbGl0ZXJhbCB0ZXh0IHRvIGJlIGNvcGllZC5cbiAgICAgICAgLy9cbiAgICAgICAgdmFyIGNudCwgb2ZzdCwgbGl0c3o7XG4gICAgICAgIHZhciBqLCBrLCB4LCB5O1xuICAgICAgICB2YXIgc3o7XG5cbiAgICAgICAgLy8gQmVnaW5uaW5nIGF0IGlTcmMsIG1hdGNoIGZvcndhcmRzIGFzIGZhciBhcyB3ZSBjYW4uXG4gICAgICAgIC8vIGogY291bnRzIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG1hdGNoLlxuICAgICAgICBpU3JjID0gaUJsb2NrKk5IQVNIO1xuICAgICAgICBmb3IgKGogPSAwLCB4ID0gaVNyYywgeSA9IGJhc2UraTsgeCA8IGxlblNyYyAmJiB5IDwgbGVuT3V0OyBqKyssIHgrKywgeSsrKSB7XG4gICAgICAgICAgaWYgKHNyY1t4XSAhPT0gb3V0W3ldKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBqLS07XG5cbiAgICAgICAgLy8gQmVnaW5uaW5nIGF0IGlTcmMtMSwgbWF0Y2ggYmFja3dhcmRzIGFzIGZhciBhcyB3ZSBjYW4uXG4gICAgICAgIC8vIGsgY291bnRzIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG1hdGNoLlxuICAgICAgICBmb3IgKGsgPSAxOyBrIDwgaVNyYyAmJiBrIDw9IGk7IGsrKykge1xuICAgICAgICAgIGlmIChzcmNbaVNyYy1rXSAhPT0gb3V0W2Jhc2UraS1rXSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgay0tO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIG9mZnNldCBhbmQgc2l6ZSBvZiB0aGUgbWF0Y2hpbmcgcmVnaW9uLlxuICAgICAgICBvZnN0ID0gaVNyYy1rO1xuICAgICAgICBjbnQgPSBqK2srMTtcbiAgICAgICAgbGl0c3ogPSBpLWs7ICAvLyBOdW1iZXIgb2YgYnl0ZXMgb2YgbGl0ZXJhbCB0ZXh0IGJlZm9yZSB0aGUgY29weVxuICAgICAgICAvLyBzeiB3aWxsIGhvbGQgdGhlIG51bWJlciBvZiBieXRlcyBuZWVkZWQgdG8gZW5jb2RlIHRoZSBcImluc2VydFwiXG4gICAgICAgIC8vIGNvbW1hbmQgYW5kIHRoZSBjb3B5IGNvbW1hbmQsIG5vdCBjb3VudGluZyB0aGUgXCJpbnNlcnRcIiB0ZXh0LlxuICAgICAgICBzeiA9IGRpZ2l0Q291bnQoaS1rKStkaWdpdENvdW50KGNudCkrZGlnaXRDb3VudChvZnN0KSszO1xuICAgICAgICBpZiAoY250ID49IHN6ICYmIGNudCA+IGJlc3RDbnQpIHtcbiAgICAgICAgICAvLyBSZW1lbWJlciB0aGlzIG1hdGNoIG9ubHkgaWYgaXQgaXMgdGhlIGJlc3Qgc28gZmFyIGFuZCBpdFxuICAgICAgICAgIC8vIGRvZXMgbm90IGluY3JlYXNlIHRoZSBmaWxlIHNpemUuXG4gICAgICAgICAgYmVzdENudCA9IGNudDtcbiAgICAgICAgICBiZXN0T2ZzdCA9IGlTcmMtaztcbiAgICAgICAgICBiZXN0TGl0c3ogPSBsaXRzejtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRoZSBuZXh0IG1hdGNoaW5nIGJsb2NrXG4gICAgICAgIGlCbG9jayA9IGNvbGxpZGVbaUJsb2NrXTtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgaGF2ZSBhIGNvcHkgY29tbWFuZCB0aGF0IGRvZXMgbm90IGNhdXNlIHRoZSBkZWx0YSB0byBiZSBsYXJnZXJcbiAgICAgIC8vIHRoYW4gYSBsaXRlcmFsIGluc2VydC4gIFNvIGFkZCB0aGUgY29weSBjb21tYW5kIHRvIHRoZSBkZWx0YS5cbiAgICAgIGlmIChiZXN0Q250ID4gMCkge1xuICAgICAgICBpZiAoYmVzdExpdHN6ID4gMCkge1xuICAgICAgICAgIC8vIEFkZCBhbiBpbnNlcnQgY29tbWFuZCBiZWZvcmUgdGhlIGNvcHkuXG4gICAgICAgICAgekRlbHRhLnB1dEludChiZXN0TGl0c3opO1xuICAgICAgICAgIHpEZWx0YS5wdXRDaGFyKCc6Jyk7XG4gICAgICAgICAgekRlbHRhLnB1dEFycmF5KG91dCwgYmFzZSwgYmFzZStiZXN0TGl0c3opO1xuICAgICAgICAgIGJhc2UgKz0gYmVzdExpdHN6O1xuICAgICAgICB9XG4gICAgICAgIGJhc2UgKz0gYmVzdENudDtcbiAgICAgICAgekRlbHRhLnB1dEludChiZXN0Q250KTtcbiAgICAgICAgekRlbHRhLnB1dENoYXIoJ0AnKTtcbiAgICAgICAgekRlbHRhLnB1dEludChiZXN0T2ZzdCk7XG4gICAgICAgIHpEZWx0YS5wdXRDaGFyKCcsJyk7XG4gICAgICAgIGlmIChiZXN0T2ZzdCArIGJlc3RDbnQgLTEgPiBsYXN0UmVhZCkge1xuICAgICAgICAgIGxhc3RSZWFkID0gYmVzdE9mc3QgKyBiZXN0Q250IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBiZXN0Q250ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlIHJlYWNoIHRoaXMgcG9pbnQsIGl0IG1lYW5zIG5vIG1hdGNoIGlzIGZvdW5kIHNvIGZhclxuICAgICAgaWYgKGJhc2UraStOSEFTSCA+PSBsZW5PdXQpe1xuICAgICAgICAvLyBXZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBhbmQgaGF2ZSBub3QgZm91bmQgYW55XG4gICAgICAgIC8vIG1hdGNoZXMuICBEbyBhbiBcImluc2VydFwiIGZvciBldmVyeXRoaW5nIHRoYXQgZG9lcyBub3QgbWF0Y2hcbiAgICAgICAgekRlbHRhLnB1dEludChsZW5PdXQtYmFzZSk7XG4gICAgICAgIHpEZWx0YS5wdXRDaGFyKCc6Jyk7XG4gICAgICAgIHpEZWx0YS5wdXRBcnJheShvdXQsIGJhc2UsIGJhc2UrbGVuT3V0LWJhc2UpO1xuICAgICAgICBiYXNlID0gbGVuT3V0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gQWR2YW5jZSB0aGUgaGFzaCBieSBvbmUgY2hhcmFjdGVyLiBLZWVwIGxvb2tpbmcgZm9yIGEgbWF0Y2guXG4gICAgICBoLm5leHQob3V0W2Jhc2UraStOSEFTSF0pO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuICAvLyBPdXRwdXQgYSBmaW5hbCBcImluc2VydFwiIHJlY29yZCB0byBnZXQgYWxsIHRoZSB0ZXh0IGF0IHRoZSBlbmQgb2ZcbiAgLy8gdGhlIGZpbGUgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbnl0aGluZyBpbiB0aGUgc291cmNlLlxuICBpZihiYXNlIDwgbGVuT3V0KSB7XG4gICAgekRlbHRhLnB1dEludChsZW5PdXQtYmFzZSk7XG4gICAgekRlbHRhLnB1dENoYXIoJzonKTtcbiAgICB6RGVsdGEucHV0QXJyYXkob3V0LCBiYXNlLCBiYXNlK2xlbk91dC1iYXNlKTtcbiAgfVxuICAvLyBPdXRwdXQgdGhlIGZpbmFsIGNoZWNrc3VtIHJlY29yZC5cbiAgekRlbHRhLnB1dEludChjaGVja3N1bShvdXQpKTtcbiAgekRlbHRhLnB1dENoYXIoJzsnKTtcbiAgcmV0dXJuIHpEZWx0YS50b0FycmF5KCk7XG59O1xuXG4vLyBSZXR1cm4gdGhlIHNpemUgKGluIGJ5dGVzKSBvZiB0aGUgb3V0cHV0IGZyb20gYXBwbHlpbmcgYSBkZWx0YS5cbmZvc3NpbERlbHRhLm91dHB1dFNpemUgPSBmdW5jdGlvbihkZWx0YSl7XG4gIHZhciB6RGVsdGEgPSBuZXcgUmVhZGVyKGRlbHRhKTtcbiAgdmFyIHNpemUgPSB6RGVsdGEuZ2V0SW50KCk7XG4gIGlmICh6RGVsdGEuZ2V0Q2hhcigpICE9PSAnXFxuJylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NpemUgaW50ZWdlciBub3QgdGVybWluYXRlZCBieSBcXCdcXFxcblxcJycpO1xuICByZXR1cm4gc2l6ZTtcbn07XG5cbi8vIEFwcGx5IGEgZGVsdGEuXG5mb3NzaWxEZWx0YS5hcHBseSA9IGZ1bmN0aW9uKHNyYywgZGVsdGEpIHtcbiAgdmFyIGxpbWl0LCB0b3RhbCA9IDA7XG4gIHZhciB6RGVsdGEgPSBuZXcgUmVhZGVyKGRlbHRhKTtcbiAgdmFyIGxlblNyYyA9IHNyYy5sZW5ndGg7XG4gIHZhciBsZW5EZWx0YSA9IGRlbHRhLmxlbmd0aDtcblxuICBsaW1pdCA9IHpEZWx0YS5nZXRJbnQoKTtcbiAgaWYgKHpEZWx0YS5nZXRDaGFyKCkgIT09ICdcXG4nKVxuICAgIHRocm93IG5ldyBFcnJvcignc2l6ZSBpbnRlZ2VyIG5vdCB0ZXJtaW5hdGVkIGJ5IFxcJ1xcXFxuXFwnJyk7XG4gIHZhciB6T3V0ID0gbmV3IFdyaXRlcigpO1xuICB3aGlsZSh6RGVsdGEuaGF2ZUJ5dGVzKCkpIHtcbiAgICB2YXIgY250LCBvZnN0O1xuICAgIGNudCA9IHpEZWx0YS5nZXRJbnQoKTtcblxuICAgIHN3aXRjaCAoekRlbHRhLmdldENoYXIoKSkge1xuICAgICAgY2FzZSAnQCc6XG4gICAgICAgIG9mc3QgPSB6RGVsdGEuZ2V0SW50KCk7XG4gICAgICAgIGlmICh6RGVsdGEuaGF2ZUJ5dGVzKCkgJiYgekRlbHRhLmdldENoYXIoKSAhPT0gJywnKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29weSBjb21tYW5kIG5vdCB0ZXJtaW5hdGVkIGJ5IFxcJyxcXCcnKTtcbiAgICAgICAgdG90YWwgKz0gY250O1xuICAgICAgICBpZiAodG90YWwgPiBsaW1pdClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcHkgZXhjZWVkcyBvdXRwdXQgZmlsZSBzaXplJyk7XG4gICAgICAgIGlmIChvZnN0K2NudCA+IGxlblNyYylcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcHkgZXh0ZW5kcyBwYXN0IGVuZCBvZiBpbnB1dCcpO1xuICAgICAgICB6T3V0LnB1dEFycmF5KHNyYywgb2ZzdCwgb2ZzdCtjbnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnOic6XG4gICAgICAgIHRvdGFsICs9IGNudDtcbiAgICAgICAgaWYgKHRvdGFsID4gbGltaXQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNlcnQgY29tbWFuZCBnaXZlcyBhbiBvdXRwdXQgbGFyZ2VyIHRoYW4gcHJlZGljdGVkJyk7XG4gICAgICAgIGlmIChjbnQgPiBsZW5EZWx0YSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc2VydCBjb3VudCBleGNlZWRzIHNpemUgb2YgZGVsdGEnKTtcbiAgICAgICAgek91dC5wdXRBcnJheSh6RGVsdGEuYSwgekRlbHRhLnBvcywgekRlbHRhLnBvcytjbnQpO1xuICAgICAgICB6RGVsdGEucG9zICs9IGNudDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJzsnOlxuICAgICAgICB2YXIgb3V0ID0gek91dC50b0FycmF5KCk7XG4gICAgICAgIGlmIChjbnQgIT09IGNoZWNrc3VtKG91dCkpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgY2hlY2tzdW0nKTtcbiAgICAgICAgaWYgKHRvdGFsICE9PSBsaW1pdClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dlbmVyYXRlZCBzaXplIGRvZXMgbm90IG1hdGNoIHByZWRpY3RlZCBzaXplJyk7XG4gICAgICAgIHJldHVybiBvdXQ7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBkZWx0YSBvcGVyYXRvcicpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3VudGVybWluYXRlZCBkZWx0YScpO1xufTtcblxucmV0dXJuIGZvc3NpbERlbHRhO1xuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mb3NzaWwtZGVsdGEvZm9zc2lsLWRlbHRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIEJ1ZmZlciAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGMoKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBCdWZmZXIpICYmIEJ1ZmZlcikgfHxcbiAgYyh0aGlzLkJ1ZmZlcikgfHxcbiAgYygoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdykgJiYgd2luZG93LkJ1ZmZlcikgfHxcbiAgdGhpcy5CdWZmZXI7XG5cbmZ1bmN0aW9uIGMoQikge1xuICByZXR1cm4gQiAmJiBCLmlzQnVmZmVyICYmIEI7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvYnVmZmVyLWdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYnVmZmVyLWxpdGUuanNcblxudmFyIE1BWEJVRkxFTiA9IDgxOTI7XG5cbmV4cG9ydHMuY29weSA9IGNvcHk7XG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5leHBvcnRzLndyaXRlID0gd3JpdGU7XG5cbi8qKlxuICogQnVmZmVyLnByb3RvdHlwZS53cml0ZSgpXG4gKlxuICogQHBhcmFtIHN0cmluZyB7U3RyaW5nfVxuICogQHBhcmFtIFtvZmZzZXRdIHtOdW1iZXJ9XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIHdyaXRlKHN0cmluZywgb2Zmc2V0KSB7XG4gIHZhciBidWZmZXIgPSB0aGlzO1xuICB2YXIgaW5kZXggPSBvZmZzZXQgfHwgKG9mZnNldCB8PSAwKTtcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gIHZhciBjaHIgPSAwO1xuICB2YXIgaSA9IDA7XG4gIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgY2hyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSsrKTtcblxuICAgIGlmIChjaHIgPCAxMjgpIHtcbiAgICAgIGJ1ZmZlcltpbmRleCsrXSA9IGNocjtcbiAgICB9IGVsc2UgaWYgKGNociA8IDB4ODAwKSB7XG4gICAgICAvLyAyIGJ5dGVzXG4gICAgICBidWZmZXJbaW5kZXgrK10gPSAweEMwIHwgKGNociA+Pj4gNik7XG4gICAgICBidWZmZXJbaW5kZXgrK10gPSAweDgwIHwgKGNociAmIDB4M0YpO1xuICAgIH0gZWxzZSBpZiAoY2hyIDwgMHhEODAwIHx8IGNociA+IDB4REZGRikge1xuICAgICAgLy8gMyBieXRlc1xuICAgICAgYnVmZmVyW2luZGV4KytdID0gMHhFMCB8IChjaHIgID4+PiAxMik7XG4gICAgICBidWZmZXJbaW5kZXgrK10gPSAweDgwIHwgKChjaHIgPj4+IDYpICAmIDB4M0YpO1xuICAgICAgYnVmZmVyW2luZGV4KytdID0gMHg4MCB8IChjaHIgICAgICAgICAgJiAweDNGKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gNCBieXRlcyAtIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjaHIgPSAoKChjaHIgLSAweEQ4MDApIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKyspIC0gMHhEQzAwKSkgKyAweDEwMDAwO1xuICAgICAgYnVmZmVyW2luZGV4KytdID0gMHhGMCB8IChjaHIgPj4+IDE4KTtcbiAgICAgIGJ1ZmZlcltpbmRleCsrXSA9IDB4ODAgfCAoKGNociA+Pj4gMTIpICYgMHgzRik7XG4gICAgICBidWZmZXJbaW5kZXgrK10gPSAweDgwIHwgKChjaHIgPj4+IDYpICAmIDB4M0YpO1xuICAgICAgYnVmZmVyW2luZGV4KytdID0gMHg4MCB8IChjaHIgICAgICAgICAgJiAweDNGKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4IC0gb2Zmc2V0O1xufVxuXG4vKipcbiAqIEJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcoKVxuICpcbiAqIEBwYXJhbSBbZW5jb2RpbmddIHtTdHJpbmd9IGlnbm9yZWRcbiAqIEBwYXJhbSBbc3RhcnRdIHtOdW1iZXJ9XG4gKiBAcGFyYW0gW2VuZF0ge051bWJlcn1cbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ1ZmZlciA9IHRoaXM7XG4gIHZhciBpbmRleCA9IHN0YXJ0fDA7XG4gIGlmICghZW5kKSBlbmQgPSBidWZmZXIubGVuZ3RoO1xuICB2YXIgc3RyaW5nID0gJyc7XG4gIHZhciBjaHIgPSAwO1xuXG4gIHdoaWxlIChpbmRleCA8IGVuZCkge1xuICAgIGNociA9IGJ1ZmZlcltpbmRleCsrXTtcbiAgICBpZiAoY2hyIDwgMTI4KSB7XG4gICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKChjaHIgJiAweEUwKSA9PT0gMHhDMCkge1xuICAgICAgLy8gMiBieXRlc1xuICAgICAgY2hyID0gKGNociAmIDB4MUYpIDw8IDYgfFxuICAgICAgICAgICAgKGJ1ZmZlcltpbmRleCsrXSAmIDB4M0YpO1xuXG4gICAgfSBlbHNlIGlmICgoY2hyICYgMHhGMCkgPT09IDB4RTApIHtcbiAgICAgIC8vIDMgYnl0ZXNcbiAgICAgIGNociA9IChjaHIgJiAweDBGKSAgICAgICAgICAgICA8PCAxMiB8XG4gICAgICAgICAgICAoYnVmZmVyW2luZGV4KytdICYgMHgzRikgPDwgNiAgfFxuICAgICAgICAgICAgKGJ1ZmZlcltpbmRleCsrXSAmIDB4M0YpO1xuXG4gICAgfSBlbHNlIGlmICgoY2hyICYgMHhGOCkgPT09IDB4RjApIHtcbiAgICAgIC8vIDQgYnl0ZXNcbiAgICAgIGNociA9IChjaHIgJiAweDA3KSAgICAgICAgICAgICA8PCAxOCB8XG4gICAgICAgICAgICAoYnVmZmVyW2luZGV4KytdICYgMHgzRikgPDwgMTIgfFxuICAgICAgICAgICAgKGJ1ZmZlcltpbmRleCsrXSAmIDB4M0YpIDw8IDYgIHxcbiAgICAgICAgICAgIChidWZmZXJbaW5kZXgrK10gJiAweDNGKTtcbiAgICB9XG5cbiAgICBpZiAoY2hyID49IDB4MDEwMDAwKSB7XG4gICAgICAvLyBBIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjaHIgLT0gMHgwMTAwMDA7XG5cbiAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjaHIgPj4+IDEwKSArIDB4RDgwMCwgKGNociAmIDB4M0ZGKSArIDB4REMwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWZmZXIucHJvdG90eXBlLmNvcHkoKVxuICpcbiAqIEBwYXJhbSB0YXJnZXQge0J1ZmZlcn1cbiAqIEBwYXJhbSBbdGFyZ2V0U3RhcnRdIHtOdW1iZXJ9XG4gKiBAcGFyYW0gW3N0YXJ0XSB7TnVtYmVyfVxuICogQHBhcmFtIFtlbmRdIHtOdW1iZXJ9XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIGNvcHkodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgaTtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwO1xuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoO1xuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDA7XG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydDtcblxuICBpZiAodGFyZ2V0ID09PSB0aGlzICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBhc2NlbmRpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZW47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi9idWZmZXItbGl0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYnVmZmVyaXNoLWFycmF5LmpzXG5cbnZhciBCdWZmZXJpc2ggPSByZXF1aXJlKFwiLi9idWZmZXJpc2hcIik7XG5cbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBhbGxvYygwKTtcblxuZXhwb3J0cy5hbGxvYyA9IGFsbG9jO1xuZXhwb3J0cy5jb25jYXQgPSBCdWZmZXJpc2guY29uY2F0O1xuZXhwb3J0cy5mcm9tID0gZnJvbTtcblxuLyoqXG4gKiBAcGFyYW0gc2l6ZSB7TnVtYmVyfVxuICogQHJldHVybnMge0J1ZmZlcnxVaW50OEFycmF5fEFycmF5fVxuICovXG5cbmZ1bmN0aW9uIGFsbG9jKHNpemUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheShzaXplKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fEFycmF5QnVmZmVyfEJ1ZmZlcnxTdHJpbmd9XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gZnJvbSh2YWx1ZSkge1xuICBpZiAoIUJ1ZmZlcmlzaC5pc0J1ZmZlcih2YWx1ZSkgJiYgQnVmZmVyaXNoLmlzVmlldyh2YWx1ZSkpIHtcbiAgICAvLyBUeXBlZEFycmF5IHRvIFVpbnQ4QXJyYXlcbiAgICB2YWx1ZSA9IEJ1ZmZlcmlzaC5VaW50OEFycmF5LmZyb20odmFsdWUpO1xuICB9IGVsc2UgaWYgKEJ1ZmZlcmlzaC5pc0FycmF5QnVmZmVyKHZhbHVlKSkge1xuICAgIC8vIEFycmF5QnVmZmVyIHRvIFVpbnQ4QXJyYXlcbiAgICB2YWx1ZSA9IG5ldyBVaW50OEFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAvLyBTdHJpbmcgdG8gQXJyYXlcbiAgICByZXR1cm4gQnVmZmVyaXNoLmZyb20uY2FsbChleHBvcnRzLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJyk7XG4gIH1cblxuICAvLyBBcnJheS1saWtlIHRvIEFycmF5XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi9idWZmZXJpc2gtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGJ1ZmZlcmlzaC1idWZmZXIuanNcblxudmFyIEJ1ZmZlcmlzaCA9IHJlcXVpcmUoXCIuL2J1ZmZlcmlzaFwiKTtcbnZhciBCdWZmZXIgPSBCdWZmZXJpc2guZ2xvYmFsO1xuXG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQnVmZmVyaXNoLmhhc0J1ZmZlciA/IGFsbG9jKDApIDogW107XG5cbmV4cG9ydHMuYWxsb2MgPSBCdWZmZXJpc2guaGFzQnVmZmVyICYmIEJ1ZmZlci5hbGxvYyB8fCBhbGxvYztcbmV4cG9ydHMuY29uY2F0ID0gQnVmZmVyaXNoLmNvbmNhdDtcbmV4cG9ydHMuZnJvbSA9IGZyb207XG5cbi8qKlxuICogQHBhcmFtIHNpemUge051bWJlcn1cbiAqIEByZXR1cm5zIHtCdWZmZXJ8VWludDhBcnJheXxBcnJheX1cbiAqL1xuXG5mdW5jdGlvbiBhbGxvYyhzaXplKSB7XG4gIHJldHVybiBuZXcgQnVmZmVyKHNpemUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB2YWx1ZSB7QXJyYXl8QXJyYXlCdWZmZXJ8QnVmZmVyfFN0cmluZ31cbiAqIEByZXR1cm5zIHtCdWZmZXJ9XG4gKi9cblxuZnVuY3Rpb24gZnJvbSh2YWx1ZSkge1xuICBpZiAoIUJ1ZmZlcmlzaC5pc0J1ZmZlcih2YWx1ZSkgJiYgQnVmZmVyaXNoLmlzVmlldyh2YWx1ZSkpIHtcbiAgICAvLyBUeXBlZEFycmF5IHRvIFVpbnQ4QXJyYXlcbiAgICB2YWx1ZSA9IEJ1ZmZlcmlzaC5VaW50OEFycmF5LmZyb20odmFsdWUpO1xuICB9IGVsc2UgaWYgKEJ1ZmZlcmlzaC5pc0FycmF5QnVmZmVyKHZhbHVlKSkge1xuICAgIC8vIEFycmF5QnVmZmVyIHRvIFVpbnQ4QXJyYXlcbiAgICB2YWx1ZSA9IG5ldyBVaW50OEFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAvLyBTdHJpbmcgdG8gQnVmZmVyXG4gICAgcmV0dXJuIEJ1ZmZlcmlzaC5mcm9tLmNhbGwoZXhwb3J0cywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO1xuICB9XG5cbiAgLy8gQXJyYXktbGlrZSB0byBCdWZmZXJcbiAgaWYgKEJ1ZmZlci5mcm9tICYmIEJ1ZmZlci5mcm9tLmxlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZSk7IC8vIG5vZGUgdjYrXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUpOyAvLyBub2RlIHY0XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2J1ZmZlcmlzaC1idWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGJ1ZmZlcmlzaC11aW50OGFycmF5LmpzXG5cbnZhciBCdWZmZXJpc2ggPSByZXF1aXJlKFwiLi9idWZmZXJpc2hcIik7XG5cbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBCdWZmZXJpc2guaGFzQXJyYXlCdWZmZXIgPyBhbGxvYygwKSA6IFtdO1xuXG5leHBvcnRzLmFsbG9jID0gYWxsb2M7XG5leHBvcnRzLmNvbmNhdCA9IEJ1ZmZlcmlzaC5jb25jYXQ7XG5leHBvcnRzLmZyb20gPSBmcm9tO1xuXG4vKipcbiAqIEBwYXJhbSBzaXplIHtOdW1iZXJ9XG4gKiBAcmV0dXJucyB7QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gYWxsb2Moc2l6ZSkge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHZhbHVlIHtBcnJheXxBcnJheUJ1ZmZlcnxCdWZmZXJ8U3RyaW5nfVxuICogQHJldHVybnMge1VpbnQ4QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gZnJvbSh2YWx1ZSkge1xuICBpZiAoQnVmZmVyaXNoLmlzVmlldyh2YWx1ZSkpIHtcbiAgICAvLyBUeXBlZEFycmF5IHRvIEFycmF5QnVmZmVyXG4gICAgdmFyIGJ5dGVPZmZzZXQgPSB2YWx1ZS5ieXRlT2Zmc2V0O1xuICAgIHZhciBieXRlTGVuZ3RoID0gdmFsdWUuYnl0ZUxlbmd0aDtcbiAgICB2YWx1ZSA9IHZhbHVlLmJ1ZmZlcjtcbiAgICBpZiAodmFsdWUuYnl0ZUxlbmd0aCAhPT0gYnl0ZUxlbmd0aCkge1xuICAgICAgaWYgKHZhbHVlLnNsaWNlKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQW5kcm9pZCA0LjEgZG9lcyBub3QgaGF2ZSBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgdmFsdWUgPSBuZXcgVWludDhBcnJheSh2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZS5ieXRlTGVuZ3RoICE9PSBieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgLy8gVHlwZWRBcnJheSB0byBBcnJheUJ1ZmZlciB0byBVaW50OEFycmF5IHRvIEFycmF5XG4gICAgICAgICAgdmFsdWUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2YWx1ZSwgYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIC8vIFN0cmluZyB0byBVaW50OEFycmF5XG4gICAgcmV0dXJuIEJ1ZmZlcmlzaC5mcm9tLmNhbGwoZXhwb3J0cywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbHVlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2J1ZmZlcmlzaC11aW50OGFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjb2RlYy5qc1xuXG4vLyBsb2FkIGJvdGggaW50ZXJmYWNlc1xucmVxdWlyZShcIi4vcmVhZC1jb3JlXCIpO1xucmVxdWlyZShcIi4vd3JpdGUtY29yZVwiKTtcblxuLy8gQHB1YmxpY1xuLy8gbXNncGFjay5jb2RlYy5wcmVzZXRcblxuZXhwb3J0cy5jb2RlYyA9IHtcbiAgcHJlc2V0OiByZXF1aXJlKFwiLi9jb2RlYy1iYXNlXCIpLnByZXNldFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL2NvZGVjLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWNvZGVyLmpzXG5cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5cbnZhciBFdmVudExpdGUgPSByZXF1aXJlKFwiZXZlbnQtbGl0ZVwiKTtcbnZhciBEZWNvZGVCdWZmZXIgPSByZXF1aXJlKFwiLi9kZWNvZGUtYnVmZmVyXCIpLkRlY29kZUJ1ZmZlcjtcblxuZnVuY3Rpb24gRGVjb2RlcihvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEZWNvZGVyKSkgcmV0dXJuIG5ldyBEZWNvZGVyKG9wdGlvbnMpO1xuICBEZWNvZGVCdWZmZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbn1cblxuRGVjb2Rlci5wcm90b3R5cGUgPSBuZXcgRGVjb2RlQnVmZmVyKCk7XG5cbkV2ZW50TGl0ZS5taXhpbihEZWNvZGVyLnByb3RvdHlwZSk7XG5cbkRlY29kZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKGNodW5rKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoKSB0aGlzLndyaXRlKGNodW5rKTtcbiAgdGhpcy5mbHVzaCgpO1xufTtcblxuRGVjb2Rlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKGNodW5rKSB7XG4gIHRoaXMuZW1pdChcImRhdGFcIiwgY2h1bmspO1xufTtcblxuRGVjb2Rlci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oY2h1bmspIHtcbiAgdGhpcy5kZWNvZGUoY2h1bmspO1xuICB0aGlzLmVtaXQoXCJlbmRcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvZGVjb2Rlci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZW5jb2Rlci5qc1xuXG5leHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuXG52YXIgRXZlbnRMaXRlID0gcmVxdWlyZShcImV2ZW50LWxpdGVcIik7XG52YXIgRW5jb2RlQnVmZmVyID0gcmVxdWlyZShcIi4vZW5jb2RlLWJ1ZmZlclwiKS5FbmNvZGVCdWZmZXI7XG5cbmZ1bmN0aW9uIEVuY29kZXIob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRW5jb2RlcikpIHJldHVybiBuZXcgRW5jb2RlcihvcHRpb25zKTtcbiAgRW5jb2RlQnVmZmVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cbkVuY29kZXIucHJvdG90eXBlID0gbmV3IEVuY29kZUJ1ZmZlcigpO1xuXG5FdmVudExpdGUubWl4aW4oRW5jb2Rlci5wcm90b3R5cGUpO1xuXG5FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihjaHVuaykge1xuICB0aGlzLndyaXRlKGNodW5rKTtcbiAgdGhpcy5lbWl0KFwiZGF0YVwiLCB0aGlzLnJlYWQoKSk7XG59O1xuXG5FbmNvZGVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihjaHVuaykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgdGhpcy5lbmNvZGUoY2h1bmspO1xuICB0aGlzLmZsdXNoKCk7XG4gIHRoaXMuZW1pdChcImVuZFwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi9lbmNvZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBleHQtcGFja2VyLmpzXG5cbmV4cG9ydHMuc2V0RXh0UGFja2VycyA9IHNldEV4dFBhY2tlcnM7XG5cbnZhciBCdWZmZXJpc2ggPSByZXF1aXJlKFwiLi9idWZmZXJpc2hcIik7XG52YXIgQnVmZmVyID0gQnVmZmVyaXNoLmdsb2JhbDtcbnZhciBwYWNrVHlwZWRBcnJheSA9IEJ1ZmZlcmlzaC5VaW50OEFycmF5LmZyb207XG52YXIgX2VuY29kZTtcblxudmFyIEVSUk9SX0NPTFVNTlMgPSB7bmFtZTogMSwgbWVzc2FnZTogMSwgc3RhY2s6IDEsIGNvbHVtbk51bWJlcjogMSwgZmlsZU5hbWU6IDEsIGxpbmVOdW1iZXI6IDF9O1xuXG5mdW5jdGlvbiBzZXRFeHRQYWNrZXJzKGNvZGVjKSB7XG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDBFLCBFcnJvciwgW3BhY2tFcnJvciwgZW5jb2RlXSk7XG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDAxLCBFdmFsRXJyb3IsIFtwYWNrRXJyb3IsIGVuY29kZV0pO1xuICBjb2RlYy5hZGRFeHRQYWNrZXIoMHgwMiwgUmFuZ2VFcnJvciwgW3BhY2tFcnJvciwgZW5jb2RlXSk7XG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDAzLCBSZWZlcmVuY2VFcnJvciwgW3BhY2tFcnJvciwgZW5jb2RlXSk7XG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDA0LCBTeW50YXhFcnJvciwgW3BhY2tFcnJvciwgZW5jb2RlXSk7XG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDA1LCBUeXBlRXJyb3IsIFtwYWNrRXJyb3IsIGVuY29kZV0pO1xuICBjb2RlYy5hZGRFeHRQYWNrZXIoMHgwNiwgVVJJRXJyb3IsIFtwYWNrRXJyb3IsIGVuY29kZV0pO1xuXG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDBBLCBSZWdFeHAsIFtwYWNrUmVnRXhwLCBlbmNvZGVdKTtcbiAgY29kZWMuYWRkRXh0UGFja2VyKDB4MEIsIEJvb2xlYW4sIFtwYWNrVmFsdWVPZiwgZW5jb2RlXSk7XG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDBDLCBTdHJpbmcsIFtwYWNrVmFsdWVPZiwgZW5jb2RlXSk7XG4gIGNvZGVjLmFkZEV4dFBhY2tlcigweDBELCBEYXRlLCBbTnVtYmVyLCBlbmNvZGVdKTtcbiAgY29kZWMuYWRkRXh0UGFja2VyKDB4MEYsIE51bWJlciwgW3BhY2tWYWx1ZU9mLCBlbmNvZGVdKTtcblxuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICBjb2RlYy5hZGRFeHRQYWNrZXIoMHgxMSwgSW50OEFycmF5LCBwYWNrVHlwZWRBcnJheSk7XG4gICAgY29kZWMuYWRkRXh0UGFja2VyKDB4MTIsIFVpbnQ4QXJyYXksIHBhY2tUeXBlZEFycmF5KTtcbiAgICBjb2RlYy5hZGRFeHRQYWNrZXIoMHgxMywgSW50MTZBcnJheSwgcGFja1R5cGVkQXJyYXkpO1xuICAgIGNvZGVjLmFkZEV4dFBhY2tlcigweDE0LCBVaW50MTZBcnJheSwgcGFja1R5cGVkQXJyYXkpO1xuICAgIGNvZGVjLmFkZEV4dFBhY2tlcigweDE1LCBJbnQzMkFycmF5LCBwYWNrVHlwZWRBcnJheSk7XG4gICAgY29kZWMuYWRkRXh0UGFja2VyKDB4MTYsIFVpbnQzMkFycmF5LCBwYWNrVHlwZWRBcnJheSk7XG4gICAgY29kZWMuYWRkRXh0UGFja2VyKDB4MTcsIEZsb2F0MzJBcnJheSwgcGFja1R5cGVkQXJyYXkpO1xuXG4gICAgLy8gUGhhbnRvbUpTLzEuOS43IGRvZXNuJ3QgaGF2ZSBGbG9hdDY0QXJyYXlcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIEZsb2F0NjRBcnJheSkge1xuICAgICAgY29kZWMuYWRkRXh0UGFja2VyKDB4MTgsIEZsb2F0NjRBcnJheSwgcGFja1R5cGVkQXJyYXkpO1xuICAgIH1cblxuICAgIC8vIElFMTAgZG9lc24ndCBoYXZlIFVpbnQ4Q2xhbXBlZEFycmF5XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgICAgY29kZWMuYWRkRXh0UGFja2VyKDB4MTksIFVpbnQ4Q2xhbXBlZEFycmF5LCBwYWNrVHlwZWRBcnJheSk7XG4gICAgfVxuXG4gICAgY29kZWMuYWRkRXh0UGFja2VyKDB4MUEsIEFycmF5QnVmZmVyLCBwYWNrVHlwZWRBcnJheSk7XG4gICAgY29kZWMuYWRkRXh0UGFja2VyKDB4MUQsIERhdGFWaWV3LCBwYWNrVHlwZWRBcnJheSk7XG4gIH1cblxuICBpZiAoQnVmZmVyaXNoLmhhc0J1ZmZlcikge1xuICAgIGNvZGVjLmFkZEV4dFBhY2tlcigweDFCLCBCdWZmZXIsIEJ1ZmZlcmlzaC5mcm9tKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcbiAgaWYgKCFfZW5jb2RlKSBfZW5jb2RlID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpLmVuY29kZTsgLy8gbGF6eSBsb2FkXG4gIHJldHVybiBfZW5jb2RlKGlucHV0KTtcbn1cblxuZnVuY3Rpb24gcGFja1ZhbHVlT2YodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSkudmFsdWVPZigpO1xufVxuXG5mdW5jdGlvbiBwYWNrUmVnRXhwKHZhbHVlKSB7XG4gIHZhbHVlID0gUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zcGxpdChcIi9cIik7XG4gIHZhbHVlLnNoaWZ0KCk7XG4gIHZhciBvdXQgPSBbdmFsdWUucG9wKCldO1xuICBvdXQudW5zaGlmdCh2YWx1ZS5qb2luKFwiL1wiKSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHBhY2tFcnJvcih2YWx1ZSkge1xuICB2YXIgb3V0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBFUlJPUl9DT0xVTU5TKSB7XG4gICAgb3V0W2tleV0gPSB2YWx1ZVtrZXldO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXNncGFjay1saXRlL2xpYi9leHQtcGFja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBleHQtdW5wYWNrZXIuanNcblxuZXhwb3J0cy5zZXRFeHRVbnBhY2tlcnMgPSBzZXRFeHRVbnBhY2tlcnM7XG5cbnZhciBCdWZmZXJpc2ggPSByZXF1aXJlKFwiLi9idWZmZXJpc2hcIik7XG52YXIgQnVmZmVyID0gQnVmZmVyaXNoLmdsb2JhbDtcbnZhciBfZGVjb2RlO1xuXG52YXIgRVJST1JfQ09MVU1OUyA9IHtuYW1lOiAxLCBtZXNzYWdlOiAxLCBzdGFjazogMSwgY29sdW1uTnVtYmVyOiAxLCBmaWxlTmFtZTogMSwgbGluZU51bWJlcjogMX07XG5cbmZ1bmN0aW9uIHNldEV4dFVucGFja2Vycyhjb2RlYykge1xuICBjb2RlYy5hZGRFeHRVbnBhY2tlcigweDBFLCBbZGVjb2RlLCB1bnBhY2tFcnJvcihFcnJvcildKTtcbiAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgwMSwgW2RlY29kZSwgdW5wYWNrRXJyb3IoRXZhbEVycm9yKV0pO1xuICBjb2RlYy5hZGRFeHRVbnBhY2tlcigweDAyLCBbZGVjb2RlLCB1bnBhY2tFcnJvcihSYW5nZUVycm9yKV0pO1xuICBjb2RlYy5hZGRFeHRVbnBhY2tlcigweDAzLCBbZGVjb2RlLCB1bnBhY2tFcnJvcihSZWZlcmVuY2VFcnJvcildKTtcbiAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgwNCwgW2RlY29kZSwgdW5wYWNrRXJyb3IoU3ludGF4RXJyb3IpXSk7XG4gIGNvZGVjLmFkZEV4dFVucGFja2VyKDB4MDUsIFtkZWNvZGUsIHVucGFja0Vycm9yKFR5cGVFcnJvcildKTtcbiAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgwNiwgW2RlY29kZSwgdW5wYWNrRXJyb3IoVVJJRXJyb3IpXSk7XG5cbiAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgwQSwgW2RlY29kZSwgdW5wYWNrUmVnRXhwXSk7XG4gIGNvZGVjLmFkZEV4dFVucGFja2VyKDB4MEIsIFtkZWNvZGUsIHVucGFja0NsYXNzKEJvb2xlYW4pXSk7XG4gIGNvZGVjLmFkZEV4dFVucGFja2VyKDB4MEMsIFtkZWNvZGUsIHVucGFja0NsYXNzKFN0cmluZyldKTtcbiAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgwRCwgW2RlY29kZSwgdW5wYWNrQ2xhc3MoRGF0ZSldKTtcbiAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgwRiwgW2RlY29kZSwgdW5wYWNrQ2xhc3MoTnVtYmVyKV0pO1xuXG4gIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgVWludDhBcnJheSkge1xuICAgIGNvZGVjLmFkZEV4dFVucGFja2VyKDB4MTEsIHVucGFja0NsYXNzKEludDhBcnJheSkpO1xuICAgIGNvZGVjLmFkZEV4dFVucGFja2VyKDB4MTIsIHVucGFja0NsYXNzKFVpbnQ4QXJyYXkpKTtcbiAgICBjb2RlYy5hZGRFeHRVbnBhY2tlcigweDEzLCBbdW5wYWNrQXJyYXlCdWZmZXIsIHVucGFja0NsYXNzKEludDE2QXJyYXkpXSk7XG4gICAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgxNCwgW3VucGFja0FycmF5QnVmZmVyLCB1bnBhY2tDbGFzcyhVaW50MTZBcnJheSldKTtcbiAgICBjb2RlYy5hZGRFeHRVbnBhY2tlcigweDE1LCBbdW5wYWNrQXJyYXlCdWZmZXIsIHVucGFja0NsYXNzKEludDMyQXJyYXkpXSk7XG4gICAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgxNiwgW3VucGFja0FycmF5QnVmZmVyLCB1bnBhY2tDbGFzcyhVaW50MzJBcnJheSldKTtcbiAgICBjb2RlYy5hZGRFeHRVbnBhY2tlcigweDE3LCBbdW5wYWNrQXJyYXlCdWZmZXIsIHVucGFja0NsYXNzKEZsb2F0MzJBcnJheSldKTtcblxuICAgIC8vIFBoYW50b21KUy8xLjkuNyBkb2Vzbid0IGhhdmUgRmxvYXQ2NEFycmF5XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBGbG9hdDY0QXJyYXkpIHtcbiAgICAgIGNvZGVjLmFkZEV4dFVucGFja2VyKDB4MTgsIFt1bnBhY2tBcnJheUJ1ZmZlciwgdW5wYWNrQ2xhc3MoRmxvYXQ2NEFycmF5KV0pO1xuICAgIH1cblxuICAgIC8vIElFMTAgZG9lc24ndCBoYXZlIFVpbnQ4Q2xhbXBlZEFycmF5XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgICAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgxOSwgdW5wYWNrQ2xhc3MoVWludDhDbGFtcGVkQXJyYXkpKTtcbiAgICB9XG5cbiAgICBjb2RlYy5hZGRFeHRVbnBhY2tlcigweDFBLCB1bnBhY2tBcnJheUJ1ZmZlcik7XG4gICAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgxRCwgW3VucGFja0FycmF5QnVmZmVyLCB1bnBhY2tDbGFzcyhEYXRhVmlldyldKTtcbiAgfVxuXG4gIGlmIChCdWZmZXJpc2guaGFzQnVmZmVyKSB7XG4gICAgY29kZWMuYWRkRXh0VW5wYWNrZXIoMHgxQiwgdW5wYWNrQ2xhc3MoQnVmZmVyKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG4gIGlmICghX2RlY29kZSkgX2RlY29kZSA9IHJlcXVpcmUoXCIuL2RlY29kZVwiKS5kZWNvZGU7IC8vIGxhenkgbG9hZFxuICByZXR1cm4gX2RlY29kZShpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIHVucGFja1JlZ0V4cCh2YWx1ZSkge1xuICByZXR1cm4gUmVnRXhwLmFwcGx5KG51bGwsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5wYWNrRXJyb3IoQ2xhc3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG91dCA9IG5ldyBDbGFzcygpO1xuICAgIGZvciAodmFyIGtleSBpbiBFUlJPUl9DT0xVTU5TKSB7XG4gICAgICBvdXRba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVucGFja0NsYXNzKENsYXNzKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgQ2xhc3ModmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bnBhY2tBcnJheUJ1ZmZlcih2YWx1ZSkge1xuICByZXR1cm4gKG5ldyBVaW50OEFycmF5KHZhbHVlKSkuYnVmZmVyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvZXh0LXVucGFja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBleHQuanNcblxuLy8gbG9hZCBib3RoIGludGVyZmFjZXNcbnJlcXVpcmUoXCIuL3JlYWQtY29yZVwiKTtcbnJlcXVpcmUoXCIuL3dyaXRlLWNvcmVcIik7XG5cbmV4cG9ydHMuY3JlYXRlQ29kZWMgPSByZXF1aXJlKFwiLi9jb2RlYy1iYXNlXCIpLmNyZWF0ZUNvZGVjO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZWFkLXRva2VuLmpzXG5cbnZhciBSZWFkRm9ybWF0ID0gcmVxdWlyZShcIi4vcmVhZC1mb3JtYXRcIik7XG5cbmV4cG9ydHMuZ2V0UmVhZFRva2VuID0gZ2V0UmVhZFRva2VuO1xuXG5mdW5jdGlvbiBnZXRSZWFkVG9rZW4ob3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gUmVhZEZvcm1hdC5nZXRSZWFkRm9ybWF0KG9wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMudXNlcmF3KSB7XG4gICAgcmV0dXJuIGluaXRfdXNlcmF3KGZvcm1hdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluaXRfdG9rZW4oZm9ybWF0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0X3Rva2VuKGZvcm1hdCkge1xuICB2YXIgaTtcbiAgdmFyIHRva2VuID0gbmV3IEFycmF5KDI1Nik7XG5cbiAgLy8gcG9zaXRpdmUgZml4aW50IC0tIDB4MDAgLSAweDdmXG4gIGZvciAoaSA9IDB4MDA7IGkgPD0gMHg3ZjsgaSsrKSB7XG4gICAgdG9rZW5baV0gPSBjb25zdGFudChpKTtcbiAgfVxuXG4gIC8vIGZpeG1hcCAtLSAweDgwIC0gMHg4ZlxuICBmb3IgKGkgPSAweDgwOyBpIDw9IDB4OGY7IGkrKykge1xuICAgIHRva2VuW2ldID0gZml4KGkgLSAweDgwLCBmb3JtYXQubWFwKTtcbiAgfVxuXG4gIC8vIGZpeGFycmF5IC0tIDB4OTAgLSAweDlmXG4gIGZvciAoaSA9IDB4OTA7IGkgPD0gMHg5ZjsgaSsrKSB7XG4gICAgdG9rZW5baV0gPSBmaXgoaSAtIDB4OTAsIGZvcm1hdC5hcnJheSk7XG4gIH1cblxuICAvLyBmaXhzdHIgLS0gMHhhMCAtIDB4YmZcbiAgZm9yIChpID0gMHhhMDsgaSA8PSAweGJmOyBpKyspIHtcbiAgICB0b2tlbltpXSA9IGZpeChpIC0gMHhhMCwgZm9ybWF0LnN0cik7XG4gIH1cblxuICAvLyBuaWwgLS0gMHhjMFxuICB0b2tlblsweGMwXSA9IGNvbnN0YW50KG51bGwpO1xuXG4gIC8vIChuZXZlciB1c2VkKSAtLSAweGMxXG4gIHRva2VuWzB4YzFdID0gbnVsbDtcblxuICAvLyBmYWxzZSAtLSAweGMyXG4gIC8vIHRydWUgLS0gMHhjM1xuICB0b2tlblsweGMyXSA9IGNvbnN0YW50KGZhbHNlKTtcbiAgdG9rZW5bMHhjM10gPSBjb25zdGFudCh0cnVlKTtcblxuICAvLyBiaW4gOCAtLSAweGM0XG4gIC8vIGJpbiAxNiAtLSAweGM1XG4gIC8vIGJpbiAzMiAtLSAweGM2XG4gIHRva2VuWzB4YzRdID0gZmxleChmb3JtYXQudWludDgsIGZvcm1hdC5iaW4pO1xuICB0b2tlblsweGM1XSA9IGZsZXgoZm9ybWF0LnVpbnQxNiwgZm9ybWF0LmJpbik7XG4gIHRva2VuWzB4YzZdID0gZmxleChmb3JtYXQudWludDMyLCBmb3JtYXQuYmluKTtcblxuICAvLyBleHQgOCAtLSAweGM3XG4gIC8vIGV4dCAxNiAtLSAweGM4XG4gIC8vIGV4dCAzMiAtLSAweGM5XG4gIHRva2VuWzB4YzddID0gZmxleChmb3JtYXQudWludDgsIGZvcm1hdC5leHQpO1xuICB0b2tlblsweGM4XSA9IGZsZXgoZm9ybWF0LnVpbnQxNiwgZm9ybWF0LmV4dCk7XG4gIHRva2VuWzB4YzldID0gZmxleChmb3JtYXQudWludDMyLCBmb3JtYXQuZXh0KTtcblxuICAvLyBmbG9hdCAzMiAtLSAweGNhXG4gIC8vIGZsb2F0IDY0IC0tIDB4Y2JcbiAgdG9rZW5bMHhjYV0gPSBmb3JtYXQuZmxvYXQzMjtcbiAgdG9rZW5bMHhjYl0gPSBmb3JtYXQuZmxvYXQ2NDtcblxuICAvLyB1aW50IDggLS0gMHhjY1xuICAvLyB1aW50IDE2IC0tIDB4Y2RcbiAgLy8gdWludCAzMiAtLSAweGNlXG4gIC8vIHVpbnQgNjQgLS0gMHhjZlxuICB0b2tlblsweGNjXSA9IGZvcm1hdC51aW50ODtcbiAgdG9rZW5bMHhjZF0gPSBmb3JtYXQudWludDE2O1xuICB0b2tlblsweGNlXSA9IGZvcm1hdC51aW50MzI7XG4gIHRva2VuWzB4Y2ZdID0gZm9ybWF0LnVpbnQ2NDtcblxuICAvLyBpbnQgOCAtLSAweGQwXG4gIC8vIGludCAxNiAtLSAweGQxXG4gIC8vIGludCAzMiAtLSAweGQyXG4gIC8vIGludCA2NCAtLSAweGQzXG4gIHRva2VuWzB4ZDBdID0gZm9ybWF0LmludDg7XG4gIHRva2VuWzB4ZDFdID0gZm9ybWF0LmludDE2O1xuICB0b2tlblsweGQyXSA9IGZvcm1hdC5pbnQzMjtcbiAgdG9rZW5bMHhkM10gPSBmb3JtYXQuaW50NjQ7XG5cbiAgLy8gZml4ZXh0IDEgLS0gMHhkNFxuICAvLyBmaXhleHQgMiAtLSAweGQ1XG4gIC8vIGZpeGV4dCA0IC0tIDB4ZDZcbiAgLy8gZml4ZXh0IDggLS0gMHhkN1xuICAvLyBmaXhleHQgMTYgLS0gMHhkOFxuICB0b2tlblsweGQ0XSA9IGZpeCgxLCBmb3JtYXQuZXh0KTtcbiAgdG9rZW5bMHhkNV0gPSBmaXgoMiwgZm9ybWF0LmV4dCk7XG4gIHRva2VuWzB4ZDZdID0gZml4KDQsIGZvcm1hdC5leHQpO1xuICB0b2tlblsweGQ3XSA9IGZpeCg4LCBmb3JtYXQuZXh0KTtcbiAgdG9rZW5bMHhkOF0gPSBmaXgoMTYsIGZvcm1hdC5leHQpO1xuXG4gIC8vIHN0ciA4IC0tIDB4ZDlcbiAgLy8gc3RyIDE2IC0tIDB4ZGFcbiAgLy8gc3RyIDMyIC0tIDB4ZGJcbiAgdG9rZW5bMHhkOV0gPSBmbGV4KGZvcm1hdC51aW50OCwgZm9ybWF0LnN0cik7XG4gIHRva2VuWzB4ZGFdID0gZmxleChmb3JtYXQudWludDE2LCBmb3JtYXQuc3RyKTtcbiAgdG9rZW5bMHhkYl0gPSBmbGV4KGZvcm1hdC51aW50MzIsIGZvcm1hdC5zdHIpO1xuXG4gIC8vIGFycmF5IDE2IC0tIDB4ZGNcbiAgLy8gYXJyYXkgMzIgLS0gMHhkZFxuICB0b2tlblsweGRjXSA9IGZsZXgoZm9ybWF0LnVpbnQxNiwgZm9ybWF0LmFycmF5KTtcbiAgdG9rZW5bMHhkZF0gPSBmbGV4KGZvcm1hdC51aW50MzIsIGZvcm1hdC5hcnJheSk7XG5cbiAgLy8gbWFwIDE2IC0tIDB4ZGVcbiAgLy8gbWFwIDMyIC0tIDB4ZGZcbiAgdG9rZW5bMHhkZV0gPSBmbGV4KGZvcm1hdC51aW50MTYsIGZvcm1hdC5tYXApO1xuICB0b2tlblsweGRmXSA9IGZsZXgoZm9ybWF0LnVpbnQzMiwgZm9ybWF0Lm1hcCk7XG5cbiAgLy8gbmVnYXRpdmUgZml4aW50IC0tIDB4ZTAgLSAweGZmXG4gIGZvciAoaSA9IDB4ZTA7IGkgPD0gMHhmZjsgaSsrKSB7XG4gICAgdG9rZW5baV0gPSBjb25zdGFudChpIC0gMHgxMDApO1xuICB9XG5cbiAgcmV0dXJuIHRva2VuO1xufVxuXG5mdW5jdGlvbiBpbml0X3VzZXJhdyhmb3JtYXQpIHtcbiAgdmFyIGk7XG4gIHZhciB0b2tlbiA9IGluaXRfdG9rZW4oZm9ybWF0KS5zbGljZSgpO1xuXG4gIC8vIHJhdyA4IC0tIDB4ZDlcbiAgLy8gcmF3IDE2IC0tIDB4ZGFcbiAgLy8gcmF3IDMyIC0tIDB4ZGJcbiAgdG9rZW5bMHhkOV0gPSB0b2tlblsweGM0XTtcbiAgdG9rZW5bMHhkYV0gPSB0b2tlblsweGM1XTtcbiAgdG9rZW5bMHhkYl0gPSB0b2tlblsweGM2XTtcblxuICAvLyBmaXhyYXcgLS0gMHhhMCAtIDB4YmZcbiAgZm9yIChpID0gMHhhMDsgaSA8PSAweGJmOyBpKyspIHtcbiAgICB0b2tlbltpXSA9IGZpeChpIC0gMHhhMCwgZm9ybWF0LmJpbik7XG4gIH1cblxuICByZXR1cm4gdG9rZW47XG59XG5cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsZXgobGVuRnVuYywgZGVjb2RlRnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjb2Rlcikge1xuICAgIHZhciBsZW4gPSBsZW5GdW5jKGRlY29kZXIpO1xuICAgIHJldHVybiBkZWNvZGVGdW5jKGRlY29kZXIsIGxlbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpeChsZW4sIG1ldGhvZCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjb2Rlcikge1xuICAgIHJldHVybiBtZXRob2QoZGVjb2RlciwgbGVuKTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tc2dwYWNrLWxpdGUvbGliL3JlYWQtdG9rZW4uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHdyaXRlLXRva2VuLmpzXG5cbnZhciBpZWVlNzU0ID0gcmVxdWlyZShcImllZWU3NTRcIik7XG52YXIgSW50NjRCdWZmZXIgPSByZXF1aXJlKFwiaW50NjQtYnVmZmVyXCIpO1xudmFyIFVpbnQ2NEJFID0gSW50NjRCdWZmZXIuVWludDY0QkU7XG52YXIgSW50NjRCRSA9IEludDY0QnVmZmVyLkludDY0QkU7XG5cbnZhciB1aW50OCA9IHJlcXVpcmUoXCIuL3dyaXRlLXVpbnQ4XCIpLnVpbnQ4O1xudmFyIEJ1ZmZlcmlzaCA9IHJlcXVpcmUoXCIuL2J1ZmZlcmlzaFwiKTtcbnZhciBCdWZmZXIgPSBCdWZmZXJpc2guZ2xvYmFsO1xudmFyIElTX0JVRkZFUl9TSElNID0gQnVmZmVyaXNoLmhhc0J1ZmZlciAmJiAoXCJUWVBFRF9BUlJBWV9TVVBQT1JUXCIgaW4gQnVmZmVyKTtcbnZhciBOT19UWVBFRF9BUlJBWSA9IElTX0JVRkZFUl9TSElNICYmICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVDtcbnZhciBCdWZmZXJfcHJvdG90eXBlID0gQnVmZmVyaXNoLmhhc0J1ZmZlciAmJiBCdWZmZXIucHJvdG90eXBlIHx8IHt9O1xuXG5leHBvcnRzLmdldFdyaXRlVG9rZW4gPSBnZXRXcml0ZVRva2VuO1xuXG5mdW5jdGlvbiBnZXRXcml0ZVRva2VuKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy51aW50OGFycmF5KSB7XG4gICAgcmV0dXJuIGluaXRfdWludDhhcnJheSgpO1xuICB9IGVsc2UgaWYgKE5PX1RZUEVEX0FSUkFZIHx8IChCdWZmZXJpc2guaGFzQnVmZmVyICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5zYWZlKSkge1xuICAgIHJldHVybiBpbml0X3NhZmUoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5pdF90b2tlbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRfdWludDhhcnJheSgpIHtcbiAgdmFyIHRva2VuID0gaW5pdF90b2tlbigpO1xuXG4gIC8vIGZsb2F0IDMyIC0tIDB4Y2FcbiAgLy8gZmxvYXQgNjQgLS0gMHhjYlxuICB0b2tlblsweGNhXSA9IHdyaXRlTigweGNhLCA0LCB3cml0ZUZsb2F0QkUpO1xuICB0b2tlblsweGNiXSA9IHdyaXRlTigweGNiLCA4LCB3cml0ZURvdWJsZUJFKTtcblxuICByZXR1cm4gdG9rZW47XG59XG5cbi8vIE5vZGUuanMgYW5kIGJyb3dzZXJzIHdpdGggVHlwZWRBcnJheVxuXG5mdW5jdGlvbiBpbml0X3Rva2VuKCkge1xuICAvLyAoaW1tZWRpYXRlIHZhbHVlcylcbiAgLy8gcG9zaXRpdmUgZml4aW50IC0tIDB4MDAgLSAweDdmXG4gIC8vIG5pbCAtLSAweGMwXG4gIC8vIGZhbHNlIC0tIDB4YzJcbiAgLy8gdHJ1ZSAtLSAweGMzXG4gIC8vIG5lZ2F0aXZlIGZpeGludCAtLSAweGUwIC0gMHhmZlxuICB2YXIgdG9rZW4gPSB1aW50OC5zbGljZSgpO1xuXG4gIC8vIGJpbiA4IC0tIDB4YzRcbiAgLy8gYmluIDE2IC0tIDB4YzVcbiAgLy8gYmluIDMyIC0tIDB4YzZcbiAgdG9rZW5bMHhjNF0gPSB3cml0ZTEoMHhjNCk7XG4gIHRva2VuWzB4YzVdID0gd3JpdGUyKDB4YzUpO1xuICB0b2tlblsweGM2XSA9IHdyaXRlNCgweGM2KTtcblxuICAvLyBleHQgOCAtLSAweGM3XG4gIC8vIGV4dCAxNiAtLSAweGM4XG4gIC8vIGV4dCAzMiAtLSAweGM5XG4gIHRva2VuWzB4YzddID0gd3JpdGUxKDB4YzcpO1xuICB0b2tlblsweGM4XSA9IHdyaXRlMigweGM4KTtcbiAgdG9rZW5bMHhjOV0gPSB3cml0ZTQoMHhjOSk7XG5cbiAgLy8gZmxvYXQgMzIgLS0gMHhjYVxuICAvLyBmbG9hdCA2NCAtLSAweGNiXG4gIHRva2VuWzB4Y2FdID0gd3JpdGVOKDB4Y2EsIDQsIChCdWZmZXJfcHJvdG90eXBlLndyaXRlRmxvYXRCRSB8fCB3cml0ZUZsb2F0QkUpLCB0cnVlKTtcbiAgdG9rZW5bMHhjYl0gPSB3cml0ZU4oMHhjYiwgOCwgKEJ1ZmZlcl9wcm90b3R5cGUud3JpdGVEb3VibGVCRSB8fCB3cml0ZURvdWJsZUJFKSwgdHJ1ZSk7XG5cbiAgLy8gdWludCA4IC0tIDB4Y2NcbiAgLy8gdWludCAxNiAtLSAweGNkXG4gIC8vIHVpbnQgMzIgLS0gMHhjZVxuICAvLyB1aW50IDY0IC0tIDB4Y2ZcbiAgdG9rZW5bMHhjY10gPSB3cml0ZTEoMHhjYyk7XG4gIHRva2VuWzB4Y2RdID0gd3JpdGUyKDB4Y2QpO1xuICB0b2tlblsweGNlXSA9IHdyaXRlNCgweGNlKTtcbiAgdG9rZW5bMHhjZl0gPSB3cml0ZU4oMHhjZiwgOCwgd3JpdGVVSW50NjRCRSk7XG5cbiAgLy8gaW50IDggLS0gMHhkMFxuICAvLyBpbnQgMTYgLS0gMHhkMVxuICAvLyBpbnQgMzIgLS0gMHhkMlxuICAvLyBpbnQgNjQgLS0gMHhkM1xuICB0b2tlblsweGQwXSA9IHdyaXRlMSgweGQwKTtcbiAgdG9rZW5bMHhkMV0gPSB3cml0ZTIoMHhkMSk7XG4gIHRva2VuWzB4ZDJdID0gd3JpdGU0KDB4ZDIpO1xuICB0b2tlblsweGQzXSA9IHdyaXRlTigweGQzLCA4LCB3cml0ZUludDY0QkUpO1xuXG4gIC8vIHN0ciA4IC0tIDB4ZDlcbiAgLy8gc3RyIDE2IC0tIDB4ZGFcbiAgLy8gc3RyIDMyIC0tIDB4ZGJcbiAgdG9rZW5bMHhkOV0gPSB3cml0ZTEoMHhkOSk7XG4gIHRva2VuWzB4ZGFdID0gd3JpdGUyKDB4ZGEpO1xuICB0b2tlblsweGRiXSA9IHdyaXRlNCgweGRiKTtcblxuICAvLyBhcnJheSAxNiAtLSAweGRjXG4gIC8vIGFycmF5IDMyIC0tIDB4ZGRcbiAgdG9rZW5bMHhkY10gPSB3cml0ZTIoMHhkYyk7XG4gIHRva2VuWzB4ZGRdID0gd3JpdGU0KDB4ZGQpO1xuXG4gIC8vIG1hcCAxNiAtLSAweGRlXG4gIC8vIG1hcCAzMiAtLSAweGRmXG4gIHRva2VuWzB4ZGVdID0gd3JpdGUyKDB4ZGUpO1xuICB0b2tlblsweGRmXSA9IHdyaXRlNCgweGRmKTtcblxuICByZXR1cm4gdG9rZW47XG59XG5cbi8vIHNhZmUgbW9kZTogZm9yIG9sZCBicm93c2VycyBhbmQgd2hvIG5lZWRzIGFzc2VydHNcblxuZnVuY3Rpb24gaW5pdF9zYWZlKCkge1xuICAvLyAoaW1tZWRpYXRlIHZhbHVlcylcbiAgLy8gcG9zaXRpdmUgZml4aW50IC0tIDB4MDAgLSAweDdmXG4gIC8vIG5pbCAtLSAweGMwXG4gIC8vIGZhbHNlIC0tIDB4YzJcbiAgLy8gdHJ1ZSAtLSAweGMzXG4gIC8vIG5lZ2F0aXZlIGZpeGludCAtLSAweGUwIC0gMHhmZlxuICB2YXIgdG9rZW4gPSB1aW50OC5zbGljZSgpO1xuXG4gIC8vIGJpbiA4IC0tIDB4YzRcbiAgLy8gYmluIDE2IC0tIDB4YzVcbiAgLy8gYmluIDMyIC0tIDB4YzZcbiAgdG9rZW5bMHhjNF0gPSB3cml0ZU4oMHhjNCwgMSwgQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4KTtcbiAgdG9rZW5bMHhjNV0gPSB3cml0ZU4oMHhjNSwgMiwgQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFKTtcbiAgdG9rZW5bMHhjNl0gPSB3cml0ZU4oMHhjNiwgNCwgQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFKTtcblxuICAvLyBleHQgOCAtLSAweGM3XG4gIC8vIGV4dCAxNiAtLSAweGM4XG4gIC8vIGV4dCAzMiAtLSAweGM5XG4gIHRva2VuWzB4YzddID0gd3JpdGVOKDB4YzcsIDEsIEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCk7XG4gIHRva2VuWzB4YzhdID0gd3JpdGVOKDB4YzgsIDIsIEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSk7XG4gIHRva2VuWzB4YzldID0gd3JpdGVOKDB4YzksIDQsIEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSk7XG5cbiAgLy8gZmxvYXQgMzIgLS0gMHhjYVxuICAvLyBmbG9hdCA2NCAtLSAweGNiXG4gIHRva2VuWzB4Y2FdID0gd3JpdGVOKDB4Y2EsIDQsIEJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFKTtcbiAgdG9rZW5bMHhjYl0gPSB3cml0ZU4oMHhjYiwgOCwgQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFKTtcblxuICAvLyB1aW50IDggLS0gMHhjY1xuICAvLyB1aW50IDE2IC0tIDB4Y2RcbiAgLy8gdWludCAzMiAtLSAweGNlXG4gIC8vIHVpbnQgNjQgLS0gMHhjZlxuICB0b2tlblsweGNjXSA9IHdyaXRlTigweGNjLCAxLCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDgpO1xuICB0b2tlblsweGNkXSA9IHdyaXRlTigweGNkLCAyLCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUpO1xuICB0b2tlblsweGNlXSA9IHdyaXRlTigweGNlLCA0LCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUpO1xuICB0b2tlblsweGNmXSA9IHdyaXRlTigweGNmLCA4LCB3cml0ZVVJbnQ2NEJFKTtcblxuICAvLyBpbnQgOCAtLSAweGQwXG4gIC8vIGludCAxNiAtLSAweGQxXG4gIC8vIGludCAzMiAtLSAweGQyXG4gIC8vIGludCA2NCAtLSAweGQzXG4gIHRva2VuWzB4ZDBdID0gd3JpdGVOKDB4ZDAsIDEsIEJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4KTtcbiAgdG9rZW5bMHhkMV0gPSB3cml0ZU4oMHhkMSwgMiwgQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUpO1xuICB0b2tlblsweGQyXSA9IHdyaXRlTigweGQyLCA0LCBCdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSk7XG4gIHRva2VuWzB4ZDNdID0gd3JpdGVOKDB4ZDMsIDgsIHdyaXRlSW50NjRCRSk7XG5cbiAgLy8gc3RyIDggLS0gMHhkOVxuICAvLyBzdHIgMTYgLS0gMHhkYVxuICAvLyBzdHIgMzIgLS0gMHhkYlxuICB0b2tlblsweGQ5XSA9IHdyaXRlTigweGQ5LCAxLCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDgpO1xuICB0b2tlblsweGRhXSA9IHdyaXRlTigweGRhLCAyLCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUpO1xuICB0b2tlblsweGRiXSA9IHdyaXRlTigweGRiLCA0LCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUpO1xuXG4gIC8vIGFycmF5IDE2IC0tIDB4ZGNcbiAgLy8gYXJyYXkgMzIgLS0gMHhkZFxuICB0b2tlblsweGRjXSA9IHdyaXRlTigweGRjLCAyLCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUpO1xuICB0b2tlblsweGRkXSA9IHdyaXRlTigweGRkLCA0LCBCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUpO1xuXG4gIC8vIG1hcCAxNiAtLSAweGRlXG4gIC8vIG1hcCAzMiAtLSAweGRmXG4gIHRva2VuWzB4ZGVdID0gd3JpdGVOKDB4ZGUsIDIsIEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSk7XG4gIHRva2VuWzB4ZGZdID0gd3JpdGVOKDB4ZGYsIDQsIEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSk7XG5cbiAgcmV0dXJuIHRva2VuO1xufVxuXG5mdW5jdGlvbiB3cml0ZTEodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oZW5jb2RlciwgdmFsdWUpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZW5jb2Rlci5yZXNlcnZlKDIpO1xuICAgIHZhciBidWZmZXIgPSBlbmNvZGVyLmJ1ZmZlcjtcbiAgICBidWZmZXJbb2Zmc2V0KytdID0gdHlwZTtcbiAgICBidWZmZXJbb2Zmc2V0XSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cml0ZTIodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oZW5jb2RlciwgdmFsdWUpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZW5jb2Rlci5yZXNlcnZlKDMpO1xuICAgIHZhciBidWZmZXIgPSBlbmNvZGVyLmJ1ZmZlcjtcbiAgICBidWZmZXJbb2Zmc2V0KytdID0gdHlwZTtcbiAgICBidWZmZXJbb2Zmc2V0KytdID0gdmFsdWUgPj4+IDg7XG4gICAgYnVmZmVyW29mZnNldF0gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gd3JpdGU0KHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVuY29kZXIsIHZhbHVlKSB7XG4gICAgdmFyIG9mZnNldCA9IGVuY29kZXIucmVzZXJ2ZSg1KTtcbiAgICB2YXIgYnVmZmVyID0gZW5jb2Rlci5idWZmZXI7XG4gICAgYnVmZmVyW29mZnNldCsrXSA9IHR5cGU7XG4gICAgYnVmZmVyW29mZnNldCsrXSA9IHZhbHVlID4+PiAyNDtcbiAgICBidWZmZXJbb2Zmc2V0KytdID0gdmFsdWUgPj4+IDE2O1xuICAgIGJ1ZmZlcltvZmZzZXQrK10gPSB2YWx1ZSA+Pj4gODtcbiAgICBidWZmZXJbb2Zmc2V0XSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cml0ZU4odHlwZSwgbGVuLCBtZXRob2QsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBmdW5jdGlvbihlbmNvZGVyLCB2YWx1ZSkge1xuICAgIHZhciBvZmZzZXQgPSBlbmNvZGVyLnJlc2VydmUobGVuICsgMSk7XG4gICAgZW5jb2Rlci5idWZmZXJbb2Zmc2V0KytdID0gdHlwZTtcbiAgICBtZXRob2QuY2FsbChlbmNvZGVyLmJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cml0ZVVJbnQ2NEJFKHZhbHVlLCBvZmZzZXQpIHtcbiAgbmV3IFVpbnQ2NEJFKHRoaXMsIG9mZnNldCwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB3cml0ZUludDY0QkUodmFsdWUsIG9mZnNldCkge1xuICBuZXcgSW50NjRCRSh0aGlzLCBvZmZzZXQsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdEJFKHZhbHVlLCBvZmZzZXQpIHtcbiAgaWVlZTc1NC53cml0ZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpO1xufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZUJFKHZhbHVlLCBvZmZzZXQpIHtcbiAgaWVlZTc1NC53cml0ZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvd3JpdGUtdG9rZW4uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHdyaXRlLXR5cGUuanNcblxudmFyIElTX0FSUkFZID0gcmVxdWlyZShcImlzYXJyYXlcIik7XG52YXIgSW50NjRCdWZmZXIgPSByZXF1aXJlKFwiaW50NjQtYnVmZmVyXCIpO1xudmFyIFVpbnQ2NEJFID0gSW50NjRCdWZmZXIuVWludDY0QkU7XG52YXIgSW50NjRCRSA9IEludDY0QnVmZmVyLkludDY0QkU7XG5cbnZhciBCdWZmZXJpc2ggPSByZXF1aXJlKFwiLi9idWZmZXJpc2hcIik7XG52YXIgQnVmZmVyUHJvdG8gPSByZXF1aXJlKFwiLi9idWZmZXJpc2gtcHJvdG9cIik7XG52YXIgV3JpdGVUb2tlbiA9IHJlcXVpcmUoXCIuL3dyaXRlLXRva2VuXCIpO1xudmFyIHVpbnQ4ID0gcmVxdWlyZShcIi4vd3JpdGUtdWludDhcIikudWludDg7XG52YXIgRXh0QnVmZmVyID0gcmVxdWlyZShcIi4vZXh0LWJ1ZmZlclwiKS5FeHRCdWZmZXI7XG5cbnZhciBIQVNfVUlOVDhBUlJBWSA9IChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgVWludDhBcnJheSk7XG52YXIgSEFTX01BUCA9IChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgTWFwKTtcblxudmFyIGV4dG1hcCA9IFtdO1xuZXh0bWFwWzFdID0gMHhkNDtcbmV4dG1hcFsyXSA9IDB4ZDU7XG5leHRtYXBbNF0gPSAweGQ2O1xuZXh0bWFwWzhdID0gMHhkNztcbmV4dG1hcFsxNl0gPSAweGQ4O1xuXG5leHBvcnRzLmdldFdyaXRlVHlwZSA9IGdldFdyaXRlVHlwZTtcblxuZnVuY3Rpb24gZ2V0V3JpdGVUeXBlKG9wdGlvbnMpIHtcbiAgdmFyIHRva2VuID0gV3JpdGVUb2tlbi5nZXRXcml0ZVRva2VuKG9wdGlvbnMpO1xuICB2YXIgdXNlcmF3ID0gb3B0aW9ucyAmJiBvcHRpb25zLnVzZXJhdztcbiAgdmFyIGJpbmFycmF5YnVmZmVyID0gSEFTX1VJTlQ4QVJSQVkgJiYgb3B0aW9ucyAmJiBvcHRpb25zLmJpbmFycmF5YnVmZmVyO1xuICB2YXIgaXNCdWZmZXIgPSBiaW5hcnJheWJ1ZmZlciA/IEJ1ZmZlcmlzaC5pc0FycmF5QnVmZmVyIDogQnVmZmVyaXNoLmlzQnVmZmVyO1xuICB2YXIgYmluID0gYmluYXJyYXlidWZmZXIgPyBiaW5fYXJyYXlidWZmZXIgOiBiaW5fYnVmZmVyO1xuICB2YXIgdXNlbWFwID0gSEFTX01BUCAmJiBvcHRpb25zICYmIG9wdGlvbnMudXNlbWFwO1xuICB2YXIgbWFwID0gdXNlbWFwID8gbWFwX3RvX21hcCA6IG9ial90b19tYXA7XG5cbiAgdmFyIHdyaXRlVHlwZSA9IHtcbiAgICBcImJvb2xlYW5cIjogYm9vbCxcbiAgICBcImZ1bmN0aW9uXCI6IG5pbCxcbiAgICBcIm51bWJlclwiOiBudW1iZXIsXG4gICAgXCJvYmplY3RcIjogKHVzZXJhdyA/IG9iamVjdF9yYXcgOiBvYmplY3QpLFxuICAgIFwic3RyaW5nXCI6IF9zdHJpbmcodXNlcmF3ID8gcmF3X2hlYWRfc2l6ZSA6IHN0cl9oZWFkX3NpemUpLFxuICAgIFwic3ltYm9sXCI6IG5pbCxcbiAgICBcInVuZGVmaW5lZFwiOiBuaWxcbiAgfTtcblxuICByZXR1cm4gd3JpdGVUeXBlO1xuXG4gIC8vIGZhbHNlIC0tIDB4YzJcbiAgLy8gdHJ1ZSAtLSAweGMzXG4gIGZ1bmN0aW9uIGJvb2woZW5jb2RlciwgdmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IHZhbHVlID8gMHhjMyA6IDB4YzI7XG4gICAgdG9rZW5bdHlwZV0oZW5jb2RlciwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gbnVtYmVyKGVuY29kZXIsIHZhbHVlKSB7XG4gICAgdmFyIGl2YWx1ZSA9IHZhbHVlIHwgMDtcbiAgICB2YXIgdHlwZTtcbiAgICBpZiAodmFsdWUgIT09IGl2YWx1ZSkge1xuICAgICAgLy8gZmxvYXQgNjQgLS0gMHhjYlxuICAgICAgdHlwZSA9IDB4Y2I7XG4gICAgICB0b2tlblt0eXBlXShlbmNvZGVyLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICgtMHgyMCA8PSBpdmFsdWUgJiYgaXZhbHVlIDw9IDB4N0YpIHtcbiAgICAgIC8vIHBvc2l0aXZlIGZpeGludCAtLSAweDAwIC0gMHg3ZlxuICAgICAgLy8gbmVnYXRpdmUgZml4aW50IC0tIDB4ZTAgLSAweGZmXG4gICAgICB0eXBlID0gaXZhbHVlICYgMHhGRjtcbiAgICB9IGVsc2UgaWYgKDAgPD0gaXZhbHVlKSB7XG4gICAgICAvLyB1aW50IDggLS0gMHhjY1xuICAgICAgLy8gdWludCAxNiAtLSAweGNkXG4gICAgICAvLyB1aW50IDMyIC0tIDB4Y2VcbiAgICAgIHR5cGUgPSAoaXZhbHVlIDw9IDB4RkYpID8gMHhjYyA6IChpdmFsdWUgPD0gMHhGRkZGKSA/IDB4Y2QgOiAweGNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnQgOCAtLSAweGQwXG4gICAgICAvLyBpbnQgMTYgLS0gMHhkMVxuICAgICAgLy8gaW50IDMyIC0tIDB4ZDJcbiAgICAgIHR5cGUgPSAoLTB4ODAgPD0gaXZhbHVlKSA/IDB4ZDAgOiAoLTB4ODAwMCA8PSBpdmFsdWUpID8gMHhkMSA6IDB4ZDI7XG4gICAgfVxuICAgIHRva2VuW3R5cGVdKGVuY29kZXIsIGl2YWx1ZSk7XG4gIH1cblxuICAvLyB1aW50IDY0IC0tIDB4Y2ZcbiAgZnVuY3Rpb24gdWludDY0KGVuY29kZXIsIHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSAweGNmO1xuICAgIHRva2VuW3R5cGVdKGVuY29kZXIsIHZhbHVlLnRvQXJyYXkoKSk7XG4gIH1cblxuICAvLyBpbnQgNjQgLS0gMHhkM1xuICBmdW5jdGlvbiBpbnQ2NChlbmNvZGVyLCB2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gMHhkMztcbiAgICB0b2tlblt0eXBlXShlbmNvZGVyLCB2YWx1ZS50b0FycmF5KCkpO1xuICB9XG5cbiAgLy8gc3RyIDggLS0gMHhkOVxuICAvLyBzdHIgMTYgLS0gMHhkYVxuICAvLyBzdHIgMzIgLS0gMHhkYlxuICAvLyBmaXhzdHIgLS0gMHhhMCAtIDB4YmZcbiAgZnVuY3Rpb24gc3RyX2hlYWRfc2l6ZShsZW5ndGgpIHtcbiAgICByZXR1cm4gKGxlbmd0aCA8IDMyKSA/IDEgOiAobGVuZ3RoIDw9IDB4RkYpID8gMiA6IChsZW5ndGggPD0gMHhGRkZGKSA/IDMgOiA1O1xuICB9XG5cbiAgLy8gcmF3IDE2IC0tIDB4ZGFcbiAgLy8gcmF3IDMyIC0tIDB4ZGJcbiAgLy8gZml4cmF3IC0tIDB4YTAgLSAweGJmXG4gIGZ1bmN0aW9uIHJhd19oZWFkX3NpemUobGVuZ3RoKSB7XG4gICAgcmV0dXJuIChsZW5ndGggPCAzMikgPyAxIDogKGxlbmd0aCA8PSAweEZGRkYpID8gMyA6IDU7XG4gIH1cblxuICBmdW5jdGlvbiBfc3RyaW5nKGhlYWRfc2l6ZSkge1xuICAgIHJldHVybiBzdHJpbmc7XG5cbiAgICBmdW5jdGlvbiBzdHJpbmcoZW5jb2RlciwgdmFsdWUpIHtcbiAgICAgIC8vIHByZXBhcmUgYnVmZmVyXG4gICAgICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIG1heHNpemUgPSA1ICsgbGVuZ3RoICogMztcbiAgICAgIGVuY29kZXIub2Zmc2V0ID0gZW5jb2Rlci5yZXNlcnZlKG1heHNpemUpO1xuICAgICAgdmFyIGJ1ZmZlciA9IGVuY29kZXIuYnVmZmVyO1xuXG4gICAgICAvLyBleHBlY3RlZCBoZWFkZXIgc2l6ZVxuICAgICAgdmFyIGV4cGVjdGVkID0gaGVhZF9zaXplKGxlbmd0aCk7XG5cbiAgICAgIC8vIGV4cGVjdGVkIHN0YXJ0IHBvaW50XG4gICAgICB2YXIgc3RhcnQgPSBlbmNvZGVyLm9mZnNldCArIGV4cGVjdGVkO1xuXG4gICAgICAvLyB3cml0ZSBzdHJpbmdcbiAgICAgIGxlbmd0aCA9IEJ1ZmZlclByb3RvLndyaXRlLmNhbGwoYnVmZmVyLCB2YWx1ZSwgc3RhcnQpO1xuXG4gICAgICAvLyBhY3R1YWwgaGVhZGVyIHNpemVcbiAgICAgIHZhciBhY3R1YWwgPSBoZWFkX3NpemUobGVuZ3RoKTtcblxuICAgICAgLy8gbW92ZSBjb250ZW50IHdoZW4gbmVlZGVkXG4gICAgICBpZiAoZXhwZWN0ZWQgIT09IGFjdHVhbCkge1xuICAgICAgICB2YXIgdGFyZ2V0U3RhcnQgPSBzdGFydCArIGFjdHVhbCAtIGV4cGVjdGVkO1xuICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyBsZW5ndGg7XG4gICAgICAgIEJ1ZmZlclByb3RvLmNvcHkuY2FsbChidWZmZXIsIGJ1ZmZlciwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICAvLyB3cml0ZSBoZWFkZXJcbiAgICAgIHZhciB0eXBlID0gKGFjdHVhbCA9PT0gMSkgPyAoMHhhMCArIGxlbmd0aCkgOiAoYWN0dWFsIDw9IDMpID8gKDB4ZDcgKyBhY3R1YWwpIDogMHhkYjtcbiAgICAgIHRva2VuW3R5cGVdKGVuY29kZXIsIGxlbmd0aCk7XG5cbiAgICAgIC8vIG1vdmUgY3Vyc29yXG4gICAgICBlbmNvZGVyLm9mZnNldCArPSBsZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0KGVuY29kZXIsIHZhbHVlKSB7XG4gICAgLy8gbnVsbFxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG5pbChlbmNvZGVyLCB2YWx1ZSk7XG5cbiAgICAvLyBCdWZmZXJcbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSByZXR1cm4gYmluKGVuY29kZXIsIHZhbHVlKTtcblxuICAgIC8vIEFycmF5XG4gICAgaWYgKElTX0FSUkFZKHZhbHVlKSkgcmV0dXJuIGFycmF5KGVuY29kZXIsIHZhbHVlKTtcblxuICAgIC8vIGludDY0LWJ1ZmZlciBvYmplY3RzXG4gICAgaWYgKFVpbnQ2NEJFLmlzVWludDY0QkUodmFsdWUpKSByZXR1cm4gdWludDY0KGVuY29kZXIsIHZhbHVlKTtcbiAgICBpZiAoSW50NjRCRS5pc0ludDY0QkUodmFsdWUpKSByZXR1cm4gaW50NjQoZW5jb2RlciwgdmFsdWUpO1xuXG4gICAgLy8gZXh0IGZvcm1hdHNcbiAgICB2YXIgcGFja2VyID0gZW5jb2Rlci5jb2RlYy5nZXRFeHRQYWNrZXIodmFsdWUpO1xuICAgIGlmIChwYWNrZXIpIHZhbHVlID0gcGFja2VyKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFeHRCdWZmZXIpIHJldHVybiBleHQoZW5jb2RlciwgdmFsdWUpO1xuXG4gICAgLy8gcGxhaW4gb2xkIE9iamVjdHMgb3IgTWFwXG4gICAgbWFwKGVuY29kZXIsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9iamVjdF9yYXcoZW5jb2RlciwgdmFsdWUpIHtcbiAgICAvLyBCdWZmZXJcbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSByZXR1cm4gcmF3KGVuY29kZXIsIHZhbHVlKTtcblxuICAgIC8vIG90aGVyc1xuICAgIG9iamVjdChlbmNvZGVyLCB2YWx1ZSk7XG4gIH1cblxuICAvLyBuaWwgLS0gMHhjMFxuICBmdW5jdGlvbiBuaWwoZW5jb2RlciwgdmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IDB4YzA7XG4gICAgdG9rZW5bdHlwZV0oZW5jb2RlciwgdmFsdWUpO1xuICB9XG5cbiAgLy8gZml4YXJyYXkgLS0gMHg5MCAtIDB4OWZcbiAgLy8gYXJyYXkgMTYgLS0gMHhkY1xuICAvLyBhcnJheSAzMiAtLSAweGRkXG4gIGZ1bmN0aW9uIGFycmF5KGVuY29kZXIsIHZhbHVlKSB7XG4gICAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICB2YXIgdHlwZSA9IChsZW5ndGggPCAxNikgPyAoMHg5MCArIGxlbmd0aCkgOiAobGVuZ3RoIDw9IDB4RkZGRikgPyAweGRjIDogMHhkZDtcbiAgICB0b2tlblt0eXBlXShlbmNvZGVyLCBsZW5ndGgpO1xuXG4gICAgdmFyIGVuY29kZSA9IGVuY29kZXIuY29kZWMuZW5jb2RlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGVuY29kZShlbmNvZGVyLCB2YWx1ZVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gYmluIDggLS0gMHhjNFxuICAvLyBiaW4gMTYgLS0gMHhjNVxuICAvLyBiaW4gMzIgLS0gMHhjNlxuICBmdW5jdGlvbiBiaW5fYnVmZmVyKGVuY29kZXIsIHZhbHVlKSB7XG4gICAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICB2YXIgdHlwZSA9IChsZW5ndGggPCAweEZGKSA/IDB4YzQgOiAobGVuZ3RoIDw9IDB4RkZGRikgPyAweGM1IDogMHhjNjtcbiAgICB0b2tlblt0eXBlXShlbmNvZGVyLCBsZW5ndGgpO1xuICAgIGVuY29kZXIuc2VuZCh2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5fYXJyYXlidWZmZXIoZW5jb2RlciwgdmFsdWUpIHtcbiAgICBiaW5fYnVmZmVyKGVuY29kZXIsIG5ldyBVaW50OEFycmF5KHZhbHVlKSk7XG4gIH1cblxuICAvLyBmaXhleHQgMSAtLSAweGQ0XG4gIC8vIGZpeGV4dCAyIC0tIDB4ZDVcbiAgLy8gZml4ZXh0IDQgLS0gMHhkNlxuICAvLyBmaXhleHQgOCAtLSAweGQ3XG4gIC8vIGZpeGV4dCAxNiAtLSAweGQ4XG4gIC8vIGV4dCA4IC0tIDB4YzdcbiAgLy8gZXh0IDE2IC0tIDB4YzhcbiAgLy8gZXh0IDMyIC0tIDB4YzlcbiAgZnVuY3Rpb24gZXh0KGVuY29kZXIsIHZhbHVlKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHZhbHVlLmJ1ZmZlcjtcbiAgICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICB2YXIgdHlwZSA9IGV4dG1hcFtsZW5ndGhdIHx8ICgobGVuZ3RoIDwgMHhGRikgPyAweGM3IDogKGxlbmd0aCA8PSAweEZGRkYpID8gMHhjOCA6IDB4YzkpO1xuICAgIHRva2VuW3R5cGVdKGVuY29kZXIsIGxlbmd0aCk7XG4gICAgdWludDhbdmFsdWUudHlwZV0oZW5jb2Rlcik7XG4gICAgZW5jb2Rlci5zZW5kKGJ1ZmZlcik7XG4gIH1cblxuICAvLyBmaXhtYXAgLS0gMHg4MCAtIDB4OGZcbiAgLy8gbWFwIDE2IC0tIDB4ZGVcbiAgLy8gbWFwIDMyIC0tIDB4ZGZcbiAgZnVuY3Rpb24gb2JqX3RvX21hcChlbmNvZGVyLCB2YWx1ZSkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdHlwZSA9IChsZW5ndGggPCAxNikgPyAoMHg4MCArIGxlbmd0aCkgOiAobGVuZ3RoIDw9IDB4RkZGRikgPyAweGRlIDogMHhkZjtcbiAgICB0b2tlblt0eXBlXShlbmNvZGVyLCBsZW5ndGgpO1xuXG4gICAgdmFyIGVuY29kZSA9IGVuY29kZXIuY29kZWMuZW5jb2RlO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGVuY29kZShlbmNvZGVyLCBrZXkpO1xuICAgICAgZW5jb2RlKGVuY29kZXIsIHZhbHVlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZml4bWFwIC0tIDB4ODAgLSAweDhmXG4gIC8vIG1hcCAxNiAtLSAweGRlXG4gIC8vIG1hcCAzMiAtLSAweGRmXG4gIGZ1bmN0aW9uIG1hcF90b19tYXAoZW5jb2RlciwgdmFsdWUpIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE1hcCkpIHJldHVybiBvYmpfdG9fbWFwKGVuY29kZXIsIHZhbHVlKTtcblxuICAgIHZhciBsZW5ndGggPSB2YWx1ZS5zaXplO1xuICAgIHZhciB0eXBlID0gKGxlbmd0aCA8IDE2KSA/ICgweDgwICsgbGVuZ3RoKSA6IChsZW5ndGggPD0gMHhGRkZGKSA/IDB4ZGUgOiAweGRmO1xuICAgIHRva2VuW3R5cGVdKGVuY29kZXIsIGxlbmd0aCk7XG5cbiAgICB2YXIgZW5jb2RlID0gZW5jb2Rlci5jb2RlYy5lbmNvZGU7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbih2YWwsIGtleSwgbSkge1xuICAgICAgZW5jb2RlKGVuY29kZXIsIGtleSk7XG4gICAgICBlbmNvZGUoZW5jb2RlciwgdmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHJhdyAxNiAtLSAweGRhXG4gIC8vIHJhdyAzMiAtLSAweGRiXG4gIC8vIGZpeHJhdyAtLSAweGEwIC0gMHhiZlxuICBmdW5jdGlvbiByYXcoZW5jb2RlciwgdmFsdWUpIHtcbiAgICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgIHZhciB0eXBlID0gKGxlbmd0aCA8IDMyKSA/ICgweGEwICsgbGVuZ3RoKSA6IChsZW5ndGggPD0gMHhGRkZGKSA/IDB4ZGEgOiAweGRiO1xuICAgIHRva2VuW3R5cGVdKGVuY29kZXIsIGxlbmd0aCk7XG4gICAgZW5jb2Rlci5zZW5kKHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21zZ3BhY2stbGl0ZS9saWIvd3JpdGUtdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMiBNYXRoaWV1IFR1cmNvdHRlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbnZhciBlcnJvcnMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIGZhaWxDaGVjayhFeGNlcHRpb25Db25zdHJ1Y3RvciwgY2FsbGVlLCBtZXNzYWdlRm9ybWF0LCBmb3JtYXRBcmdzKSB7XG4gICAgbWVzc2FnZUZvcm1hdCA9IG1lc3NhZ2VGb3JtYXQgfHwgJyc7XG4gICAgdmFyIG1lc3NhZ2UgPSB1dGlsLmZvcm1hdC5hcHBseSh0aGlzLCBbbWVzc2FnZUZvcm1hdF0uY29uY2F0KGZvcm1hdEFyZ3MpKTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXhjZXB0aW9uQ29uc3RydWN0b3IobWVzc2FnZSk7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyb3IsIGNhbGxlZSk7XG4gICAgdGhyb3cgZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGZhaWxBcmd1bWVudENoZWNrKGNhbGxlZSwgbWVzc2FnZSwgZm9ybWF0QXJncykge1xuICAgIGZhaWxDaGVjayhlcnJvcnMuSWxsZWdhbEFyZ3VtZW50RXJyb3IsIGNhbGxlZSwgbWVzc2FnZSwgZm9ybWF0QXJncyk7XG59XG5cbmZ1bmN0aW9uIGZhaWxTdGF0ZUNoZWNrKGNhbGxlZSwgbWVzc2FnZSwgZm9ybWF0QXJncykge1xuICAgIGZhaWxDaGVjayhlcnJvcnMuSWxsZWdhbFN0YXRlRXJyb3IsIGNhbGxlZSwgbWVzc2FnZSwgZm9ybWF0QXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmNoZWNrQXJndW1lbnQgPSBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgZmFpbEFyZ3VtZW50Q2hlY2soYXJndW1lbnRzLmNhbGxlZSwgbWVzc2FnZSxcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmNoZWNrU3RhdGUgPSBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgZmFpbFN0YXRlQ2hlY2soYXJndW1lbnRzLmNhbGxlZSwgbWVzc2FnZSxcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmNoZWNrSXNEZWYgPSBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmYWlsQXJndW1lbnRDaGVjayhhcmd1bWVudHMuY2FsbGVlLCBtZXNzYWdlIHx8XG4gICAgICAgICdFeHBlY3RlZCB2YWx1ZSB0byBiZSBkZWZpbmVkIGJ1dCB3YXMgdW5kZWZpbmVkLicsXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpO1xufTtcblxubW9kdWxlLmV4cG9ydHMuY2hlY2tJc0RlZkFuZE5vdE51bGwgPSBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgIC8vIE5vdGUgdGhhdCB1bmRlZmluZWQgPT0gbnVsbC5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZmFpbEFyZ3VtZW50Q2hlY2soYXJndW1lbnRzLmNhbGxlZSwgbWVzc2FnZSB8fFxuICAgICAgICAnRXhwZWN0ZWQgdmFsdWUgdG8gYmUgZGVmaW5lZCBhbmQgbm90IG51bGwgYnV0IGdvdCBcIicgK1xuICAgICAgICB0eXBlT2YodmFsdWUpICsgJ1wiLicsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpO1xufTtcblxuLy8gRml4ZWQgdmVyc2lvbiBvZiB0aGUgdHlwZU9mIG9wZXJhdG9yIHdoaWNoIHJldHVybnMgJ251bGwnIGZvciBudWxsIHZhbHVlc1xuLy8gYW5kICdhcnJheScgZm9yIGFycmF5cy5cbmZ1bmN0aW9uIHR5cGVPZih2YWx1ZSkge1xuICAgIHZhciBzID0gdHlwZW9mIHZhbHVlO1xuICAgIGlmIChzID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIHR5cGVDaGVjayhleHBlY3QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlT2YodmFsdWUpO1xuXG4gICAgICAgIGlmICh0eXBlID09IGV4cGVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZmFpbEFyZ3VtZW50Q2hlY2soYXJndW1lbnRzLmNhbGxlZSwgbWVzc2FnZSB8fFxuICAgICAgICAgICAgJ0V4cGVjdGVkIFwiJyArIGV4cGVjdCArICdcIiBidXQgZ290IFwiJyArIHR5cGUgKyAnXCIuJyxcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzLmNoZWNrSXNTdHJpbmcgPSB0eXBlQ2hlY2soJ3N0cmluZycpO1xubW9kdWxlLmV4cG9ydHMuY2hlY2tJc0FycmF5ID0gdHlwZUNoZWNrKCdhcnJheScpO1xubW9kdWxlLmV4cG9ydHMuY2hlY2tJc051bWJlciA9IHR5cGVDaGVjaygnbnVtYmVyJyk7XG5tb2R1bGUuZXhwb3J0cy5jaGVja0lzQm9vbGVhbiA9IHR5cGVDaGVjaygnYm9vbGVhbicpO1xubW9kdWxlLmV4cG9ydHMuY2hlY2tJc0Z1bmN0aW9uID0gdHlwZUNoZWNrKCdmdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMuY2hlY2tJc09iamVjdCA9IHR5cGVDaGVjaygnb2JqZWN0Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJlY29uZC9saWIvY2hlY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE1hdGhpZXUgVHVyY290dGVcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuZnVuY3Rpb24gSWxsZWdhbEFyZ3VtZW50RXJyb3IobWVzc2FnZSkge1xuICAgIEVycm9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cbnV0aWwuaW5oZXJpdHMoSWxsZWdhbEFyZ3VtZW50RXJyb3IsIEVycm9yKTtcblxuSWxsZWdhbEFyZ3VtZW50RXJyb3IucHJvdG90eXBlLm5hbWUgPSAnSWxsZWdhbEFyZ3VtZW50RXJyb3InO1xuXG5mdW5jdGlvbiBJbGxlZ2FsU3RhdGVFcnJvcihtZXNzYWdlKSB7XG4gICAgRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxudXRpbC5pbmhlcml0cyhJbGxlZ2FsU3RhdGVFcnJvciwgRXJyb3IpO1xuXG5JbGxlZ2FsU3RhdGVFcnJvci5wcm90b3R5cGUubmFtZSA9ICdJbGxlZ2FsU3RhdGVFcnJvcic7XG5cbm1vZHVsZS5leHBvcnRzLklsbGVnYWxTdGF0ZUVycm9yID0gSWxsZWdhbFN0YXRlRXJyb3I7XG5tb2R1bGUuZXhwb3J0cy5JbGxlZ2FsQXJndW1lbnRFcnJvciA9IElsbGVnYWxBcmd1bWVudEVycm9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcmVjb25kL2xpYi9lcnJvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFByaW9yaXR5U2lnbmFsXzEgPSByZXF1aXJlKFwiLi9Qcmlvcml0eVNpZ25hbFwiKTtcbi8qKlxuICogQWxsb3dzIHRoZSB2YWx1ZUNsYXNzZXMgdG8gYmUgc2V0IGluIE1YTUwsIGUuZy5cbiAqIDxzaWduYWxzOlNpZ25hbCBpZD1cIm5hbWVDaGFuZ2VkXCI+e1tTdHJpbmcsIHVpbnRdfTwvc2lnbmFsczpTaWduYWw+XG4gKi9cbi8qW0RlZmF1bHRQcm9wZXJ0eShcInZhbHVlQ2xhc3Nlc1wiKV0qL1xuLyoqXG4gKiBTaWduYWwgZGlzcGF0Y2hlcyBldmVudHMgdG8gbXVsdGlwbGUgbGlzdGVuZXJzLlxuICogSXQgaXMgaW5zcGlyZWQgYnkgQyMgZXZlbnRzIGFuZCBkZWxlZ2F0ZXMsIGFuZCBieVxuICogPGEgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NpZ25hbHNfYW5kX3Nsb3RzXCI+c2lnbmFscyBhbmQgc2xvdHM8L2E+XG4gKiBpbiBRdC5cbiAqIEEgU2lnbmFsIGFkZHMgZXZlbnQgZGlzcGF0Y2hpbmcgZnVuY3Rpb25hbGl0eSB0aHJvdWdoIGNvbXBvc2l0aW9uIGFuZCBpbnRlcmZhY2VzLFxuICogcmF0aGVyIHRoYW4gaW5oZXJpdGluZyBmcm9tIGEgZGlzcGF0Y2hlci5cbiAqIDxici8+PGJyLz5cbiAqIFByb2plY3QgaG9tZTogPGEgdGFyZ2V0PVwiX3RvcFwiIGhyZWY9XCJodHRwOi8vZ2l0aHViLmNvbS9yb2JlcnRwZW5uZXIvYXMzLXNpZ25hbHMvXCI+aHR0cDovL2dpdGh1Yi5jb20vcm9iZXJ0cGVubmVyL2FzMy1zaWduYWxzLzwvYT5cbiAqL1xudmFyIERlbHV4ZVNpZ25hbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlbHV4ZVNpZ25hbCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRGVsdXhlU2lnbmFsIGluc3RhbmNlIHRvIGRpc3BhdGNoIGV2ZW50cyBvbiBiZWhhbGYgb2YgYSB0YXJnZXQgb2JqZWN0LlxuICAgICAqIEBwYXJhbSAgICB0YXJnZXQgVGhlIG9iamVjdCB0aGUgc2lnbmFsIGlzIGRpc3BhdGNoaW5nIGV2ZW50cyBvbiBiZWhhbGYgb2YuXG4gICAgICogQHBhcmFtICAgIHZhbHVlQ2xhc3NlcyBBbnkgbnVtYmVyIG9mIGNsYXNzIHJlZmVyZW5jZXMgdGhhdCBlbmFibGUgdHlwZSBjaGVja3MgaW4gZGlzcGF0Y2goKS5cbiAgICAgKiBGb3IgZXhhbXBsZSwgbmV3IERlbHV4ZVNpZ25hbCh0aGlzLCBTdHJpbmcsIHVpbnQpXG4gICAgICogd291bGQgYWxsb3c6IHNpZ25hbC5kaXNwYXRjaChcInRoZSBBbnN3ZXJcIiwgNDIpXG4gICAgICogYnV0IG5vdDogc2lnbmFsLmRpc3BhdGNoKHRydWUsIDQyLjUpXG4gICAgICogbm9yOiBzaWduYWwuZGlzcGF0Y2goKVxuICAgICAqXG4gICAgICogTk9URTogU3ViY2xhc3NlcyBjYW5ub3QgY2FsbCBzdXBlci5hcHBseShudWxsLCB2YWx1ZUNsYXNzZXMpLFxuICAgICAqIGJ1dCB0aGlzIGNvbnN0cnVjdG9yIGhhcyBsb2dpYyB0byBzdXBwb3J0IHN1cGVyKHZhbHVlQ2xhc3NlcykuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGVsdXhlU2lnbmFsKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gbnVsbDsgfVxuICAgICAgICB2YXIgdmFsdWVDbGFzc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZUNsYXNzZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzO1xuICAgICAgICAvLyBDYW5ub3QgdXNlIHN1cGVyLmFwcGx5KG51bGwsIHZhbHVlQ2xhc3NlcyksIHNvIGFsbG93IHRoZSBzdWJjbGFzcyB0byBjYWxsIHN1cGVyKHZhbHVlQ2xhc3NlcykuXG4gICAgICAgIHZhbHVlQ2xhc3NlcyA9ICh2YWx1ZUNsYXNzZXMubGVuZ3RoID09IDEgJiYgdmFsdWVDbGFzc2VzWzBdIGluc3RhbmNlb2YgQXJyYXkpID8gdmFsdWVDbGFzc2VzWzBdIDogdmFsdWVDbGFzc2VzO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHZhbHVlQ2xhc3NlcykgfHwgdGhpcztcbiAgICAgICAgLy9AQ0hBTkdFRCAtIHRoaXMgd2FzIHRoZSBmaXJzdCBjYWxsIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgICAvL1R5cGVzY3JpcHQgZG9lcyBub3QgYWxsb3cgXCJ0aGlzXCIgdG8gYmUgY2FsbGVkIGJlZm9yZSBzdXBlclxuICAgICAgICBfdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZWx1eGVTaWduYWwucHJvdG90eXBlLCBcInRhcmdldFwiLCB7XG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gdGhpcy5fdGFyZ2V0KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IEluY29ycmVjdCBudW1iZXIgb2YgYXJndW1lbnRzLlxuICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogVmFsdWUgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVDbGFzc2VzIENsYXNzLlxuICAgICAqL1xuICAgIC8qb3ZlcnJpZGUqL1xuICAgIERlbHV4ZVNpZ25hbC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZU9iamVjdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhbHVlT2JqZWN0c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFZhbGlkYXRlIHZhbHVlIG9iamVjdHMgYWdhaW5zdCBwcmUtZGVmaW5lZCB2YWx1ZSBjbGFzc2VzLlxuICAgICAgICB2YXIgbnVtVmFsdWVDbGFzc2VzID0gdGhpcy5fdmFsdWVDbGFzc2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIG51bVZhbHVlT2JqZWN0cyA9IHZhbHVlT2JqZWN0cy5sZW5ndGg7XG4gICAgICAgIGlmIChudW1WYWx1ZU9iamVjdHMgPCBudW1WYWx1ZUNsYXNzZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgICAgICdFeHBlY3RlZCBhdCBsZWFzdCAnICsgbnVtVmFsdWVDbGFzc2VzICsgJyBidXQgcmVjZWl2ZWQgJyArXG4gICAgICAgICAgICAgICAgbnVtVmFsdWVPYmplY3RzICsgJy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYW5ub3QgZGlzcGF0Y2ggZGlmZmVyZW50bHkgdHlwZWQgb2JqZWN0cyB0aGFuIGRlY2xhcmVkIGNsYXNzZXMuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVmFsdWVDbGFzc2VzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIE9wdGltaXplZCBmb3IgdGhlIG9wdGltaXN0aWMgY2FzZSB0aGF0IHZhbHVlcyBhcmUgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh2YWx1ZU9iamVjdHNbaV0gPT09IG51bGwgfHwgdmFsdWVPYmplY3RzW2ldLmNvbnN0cnVjdG9yID09PSB0aGlzLl92YWx1ZUNsYXNzZXNbaV0pXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIG9iamVjdCA8JyArIHZhbHVlT2JqZWN0c1tpXVxuICAgICAgICAgICAgICAgICsgJz4gaXMgbm90IGFuIGluc3RhbmNlIG9mIDwnICsgdGhpcy5fdmFsdWVDbGFzc2VzW2ldICsgJz4uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXh0cmFjdCBhbmQgY2xvbmUgZXZlbnQgb2JqZWN0IGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgdmFyIGV2ZW50ID0gdmFsdWVPYmplY3RzWzBdO1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVPYmplY3RzWzBdID0gZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC50YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgICAgIGV2ZW50LnNpZ25hbCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGxpc3RlbmVycy5cbiAgICAgICAgdmFyIHNsb3RzVG9Qcm9jZXNzID0gdGhpcy5zbG90cztcbiAgICAgICAgd2hpbGUgKHNsb3RzVG9Qcm9jZXNzLm5vbkVtcHR5KSB7XG4gICAgICAgICAgICBzbG90c1RvUHJvY2Vzcy5oZWFkLmV4ZWN1dGUodmFsdWVPYmplY3RzKTtcbiAgICAgICAgICAgIHNsb3RzVG9Qcm9jZXNzID0gc2xvdHNUb1Byb2Nlc3MudGFpbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBCdWJibGUgdGhlIGV2ZW50IGFzIGZhciBhcyBwb3NzaWJsZS5cbiAgICAgICAgaWYgKCFldmVudCB8fCAhZXZlbnQuYnViYmxlcylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRUYXJnZXQgJiYgY3VycmVudFRhcmdldC5oYXNPd25Qcm9wZXJ0eShcInBhcmVudFwiKSkge1xuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRbXCJwYXJlbnRcIl07XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhcmdldC5vbkV2ZW50QnViYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICAgICAgLy8gb25FdmVudEJ1YmJsZWQoKSBjYW4gc3RvcCB0aGUgYnViYmxpbmcgYnkgcmV0dXJuaW5nIGZhbHNlLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGFyZ2V0Lm9uRXZlbnRCdWJibGVkKGV2ZW50KSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEZWx1eGVTaWduYWw7XG59KFByaW9yaXR5U2lnbmFsXzEuUHJpb3JpdHlTaWduYWwpKTtcbmV4cG9ydHMuRGVsdXhlU2lnbmFsID0gRGVsdXhlU2lnbmFsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVsdXhlU2lnbmFsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaWduYWxzLmpzL2xpYi9vcmcvb3NmbGFzaC9zaWduYWxzL0RlbHV4ZVNpZ25hbC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqXG4gKi9cbmV4cG9ydHMuSU9uY2VTaWduYWwgPSBTeW1ib2woXCJJT25jZVNpZ25hbFwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlPbmNlU2lnbmFsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaWduYWxzLmpzL2xpYi9vcmcvb3NmbGFzaC9zaWduYWxzL0lPbmNlU2lnbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICpcbiAqL1xuZXhwb3J0cy5JUHJpb3JpdHlTaWduYWwgPSBTeW1ib2woXCJJUHJpb3JpdHlTaWduYWxcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JUHJpb3JpdHlTaWduYWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvSVByaW9yaXR5U2lnbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICpcbiAqL1xuZXhwb3J0cy5JU2lnbmFsID0gU3ltYm9sKFwiSVNpZ25hbFwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlTaWduYWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvSVNpZ25hbC5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIFRoZSBJU2xvdCBpbnRlcmZhY2UgZGVmaW5lcyB0aGUgYmFzaWMgcHJvcGVydGllcyBvZiBhXG4gKiBsaXN0ZW5lciBhc3NvY2lhdGVkIHdpdGggYSBTaWduYWwuXG4gKlxuICogQGF1dGhvciBKb2EgRWJlcnRcbiAqIEBhdXRob3IgUm9iZXJ0IFBlbm5lclxuICovXG5leHBvcnRzLklTbG90ID0gU3ltYm9sKFwiSVNsb3RcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JU2xvdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9JU2xvdC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgU2xvdF8xID0gcmVxdWlyZShcIi4vU2xvdFwiKTtcbi8qKlxuICogQWxsb3dzIHRoZSB2YWx1ZUNsYXNzZXMgdG8gYmUgc2V0IGluIE1YTUwsIGUuZy5cbiAqIDxzaWduYWxzOlNpZ25hbCBpZD1cIm5hbWVDaGFuZ2VkXCI+e1tTdHJpbmcsIHVpbnRdfTwvc2lnbmFsczpTaWduYWw+XG4gKi9cbi8qW0RlZmF1bHRQcm9wZXJ0eShcInZhbHVlQ2xhc3Nlc1wiKV0qL1xuLyoqXG4gKiBBIE1vbm9TaWduYWwgY2FuIGhhdmUgb25seSBvbmUgbGlzdGVuZXIuXG4gKi9cbnZhciBNb25vU2lnbmFsID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTW9ub1NpZ25hbCBpbnN0YW5jZSB0byBkaXNwYXRjaCB2YWx1ZSBvYmplY3RzLlxuICAgICAqIEBwYXJhbSAgICB2YWx1ZUNsYXNzZXMgQW55IG51bWJlciBvZiBjbGFzcyByZWZlcmVuY2VzIHRoYXQgZW5hYmxlIHR5cGUgY2hlY2tzIGluIGRpc3BhdGNoKCkuXG4gICAgICogRm9yIGV4YW1wbGUsIG5ldyBTaWduYWwoU3RyaW5nLCB1aW50KVxuICAgICAqIHdvdWxkIGFsbG93OiBzaWduYWwuZGlzcGF0Y2goXCJ0aGUgQW5zd2VyXCIsIDQyKVxuICAgICAqIGJ1dCBub3Q6IHNpZ25hbC5kaXNwYXRjaCh0cnVlLCA0Mi41KVxuICAgICAqIG5vcjogc2lnbmFsLmRpc3BhdGNoKClcbiAgICAgKlxuICAgICAqIE5PVEU6IFN1YmNsYXNzZXMgY2Fubm90IGNhbGwgc3VwZXIuYXBwbHkobnVsbCwgdmFsdWVDbGFzc2VzKSxcbiAgICAgKiBidXQgdGhpcyBjb25zdHJ1Y3RvciBoYXMgbG9naWMgdG8gc3VwcG9ydCBzdXBlcih2YWx1ZUNsYXNzZXMpLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE1vbm9TaWduYWwoKSB7XG4gICAgICAgIHZhciB2YWx1ZUNsYXNzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhbHVlQ2xhc3Nlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbm5vdCB1c2Ugc3VwZXIuYXBwbHkobnVsbCwgdmFsdWVDbGFzc2VzKSwgc28gYWxsb3cgdGhlIHN1YmNsYXNzIHRvIGNhbGwgc3VwZXIodmFsdWVDbGFzc2VzKS5cbiAgICAgICAgdGhpcy52YWx1ZUNsYXNzZXMgPSAodmFsdWVDbGFzc2VzLmxlbmd0aCA9PSAxICYmIHZhbHVlQ2xhc3Nlc1swXSBpbnN0YW5jZW9mIEFycmF5KSA/IHZhbHVlQ2xhc3Nlc1swXSA6IHZhbHVlQ2xhc3NlcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vbm9TaWduYWwucHJvdG90eXBlLCBcInZhbHVlQ2xhc3Nlc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IEludmFsaWQgdmFsdWVDbGFzc2VzIGFyZ3VtZW50OiBpdGVtIGF0IGluZGV4IHNob3VsZCBiZSBhIENsYXNzIGJ1dCB3YXMgbm90LlxuICAgICAgICAgKi9cbiAgICAgICAgLypbQXJyYXlFbGVtZW50VHlwZShcIkNsYXNzXCIpXSovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIENsb25lIHNvIHRoZSBBcnJheSBjYW5ub3QgYmUgYWZmZWN0ZWQgZnJvbSBvdXRzaWRlLlxuICAgICAgICAgICAgdGhpcy5fdmFsdWVDbGFzc2VzID0gdmFsdWUgPyB2YWx1ZS5zbGljZSgpIDogW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5fdmFsdWVDbGFzc2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuX3ZhbHVlQ2xhc3Nlc1tpXSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlQ2xhc3NlcyBhcmd1bWVudDogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXRlbSBhdCBpbmRleCAnICsgaSArICcgc2hvdWxkIGJlIGEgQ2xhc3MgYnV0IHdhczo8JyArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZUNsYXNzZXNbaV0gKyAnPi4nICsgdGhpcy5fdmFsdWVDbGFzc2VzW2ldKTsgLy9AQ0hBTkdFRCAtIHRlbXAgcmVwbGFjZW1lbnQgZm9yIGdldFF1YWxpZmllZENsYXNzQnlOYW1lKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb25vU2lnbmFsLnByb3RvdHlwZSwgXCJudW1MaXN0ZW5lcnNcIiwge1xuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbG90ID8gMSA6IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICogQHRocm93cyBmbGFzaC5lcnJvcnMuSWxsZWdhbE9wZXJhdGlvbkVycm9yIDxjb2RlPklsbGVnYWxPcGVyYXRpb25FcnJvcjwvY29kZT46IFlvdSBjYW5ub3QgYWRkIG9yIGFkZE9uY2Ugd2l0aCBhIGxpc3RlbmVyIGFscmVhZHkgYWRkZWQsIHJlbW92ZSB0aGUgY3VycmVudCBsaXN0ZW5lciBmaXJzdC5cbiAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IEdpdmVuIGxpc3RlbmVyIGlzIDxjb2RlPm51bGw8L2NvZGU+LlxuICAgICAqL1xuICAgIE1vbm9TaWduYWwucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICogQHRocm93cyBmbGFzaC5lcnJvcnMuSWxsZWdhbE9wZXJhdGlvbkVycm9yIDxjb2RlPklsbGVnYWxPcGVyYXRpb25FcnJvcjwvY29kZT46IFlvdSBjYW5ub3QgYWRkIG9yIGFkZE9uY2Ugd2l0aCBhIGxpc3RlbmVyIGFscmVhZHkgYWRkZWQsIHJlbW92ZSB0aGUgY3VycmVudCBsaXN0ZW5lciBmaXJzdC5cbiAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IEdpdmVuIGxpc3RlbmVyIGlzIDxjb2RlPm51bGw8L2NvZGU+LlxuICAgICAqL1xuICAgIE1vbm9TaWduYWwucHJvdG90eXBlLmFkZE9uY2UgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcbiAgICAvKiogQGluaGVyaXREb2MgKi9cbiAgICBNb25vU2lnbmFsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xvdCAmJiB0aGlzLnNsb3QubGlzdGVuZXIgPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHZhciB0aGVTbG90ID0gdGhpcy5zbG90O1xuICAgICAgICAgICAgdGhpcy5zbG90ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0aGVTbG90O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgTW9ub1NpZ25hbC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zbG90KVxuICAgICAgICAgICAgdGhpcy5zbG90LnJlbW92ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKiBAdGhyb3dzIEFyZ3VtZW50RXJyb3IgPGNvZGU+QXJndW1lbnRFcnJvcjwvY29kZT46IEluY29ycmVjdCBudW1iZXIgb2YgYXJndW1lbnRzLlxuICAgICAqIEB0aHJvd3MgQXJndW1lbnRFcnJvciA8Y29kZT5Bcmd1bWVudEVycm9yPC9jb2RlPjogVmFsdWUgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVDbGFzc2VzIENsYXNzLlxuICAgICAqL1xuICAgIE1vbm9TaWduYWwucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWVPYmplY3RzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZU9iamVjdHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB2YWx1ZUNsYXNzZXMgaXMgZW1wdHksIHZhbHVlIG9iamVjdHMgYXJlIG5vdCB0eXBlLWNoZWNrZWQuXG4gICAgICAgIHZhciBudW1WYWx1ZUNsYXNzZXMgPSB0aGlzLl92YWx1ZUNsYXNzZXMubGVuZ3RoO1xuICAgICAgICB2YXIgbnVtVmFsdWVPYmplY3RzID0gdmFsdWVPYmplY3RzLmxlbmd0aDtcbiAgICAgICAgLy8gQ2Fubm90IGRpc3BhdGNoIGZld2VyIG9iamVjdHMgdGhhbiBkZWNsYXJlZCBjbGFzc2VzLlxuICAgICAgICBpZiAobnVtVmFsdWVPYmplY3RzIDwgbnVtVmFsdWVDbGFzc2VzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBudW1iZXIgb2YgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgYXQgbGVhc3QgJyArIG51bVZhbHVlQ2xhc3NlcyArICcgYnV0IHJlY2VpdmVkICcgK1xuICAgICAgICAgICAgICAgIG51bVZhbHVlT2JqZWN0cyArICcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2Fubm90IGRpc3BhdGNoIGRpZmZlcmVudGx5IHR5cGVkIG9iamVjdHMgdGhhbiBkZWNsYXJlZCBjbGFzc2VzLlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlQ2xhc3NlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBPcHRpbWl6ZWQgZm9yIHRoZSBvcHRpbWlzdGljIGNhc2UgdGhhdCB2YWx1ZXMgYXJlIGNvcnJlY3QuXG4gICAgICAgICAgICBpZiAodmFsdWVPYmplY3RzW2ldID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgKHZhbHVlT2JqZWN0c1tpXSBpbnN0YW5jZW9mIHRoaXMuX3ZhbHVlQ2xhc3Nlc1tpXSB8fCB2YWx1ZU9iamVjdHNbaV0uY29uc3RydWN0b3IgPT09IHRoaXMuX3ZhbHVlQ2xhc3Nlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgb2JqZWN0IDwnICsgdmFsdWVPYmplY3RzW2ldXG4gICAgICAgICAgICAgICAgKyAnPiBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgPCcgKyB0aGlzLl92YWx1ZUNsYXNzZXNbaV0gKyAnPi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCcm9hZGNhc3QgdG8gdGhlIG9uZSBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHRoaXMuc2xvdCkge1xuICAgICAgICAgICAgdGhpcy5zbG90LmV4ZWN1dGUodmFsdWVPYmplY3RzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9ub1NpZ25hbC5wcm90b3R5cGUucmVnaXN0ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgb25jZSkge1xuICAgICAgICBpZiAob25jZSA9PT0gdm9pZCAwKSB7IG9uY2UgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodGhpcy5zbG90KSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZXhpdHMgcHJldmlvdXNseSBhZGRlZCwgZGVmaW5pdGVseSBkb24ndCBhZGQgaXQuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYWRkIG9yIGFkZE9uY2Ugd2l0aCBhIGxpc3RlbmVyIGFscmVhZHkgYWRkZWQsIHJlbW92ZSB0aGUgY3VycmVudCBsaXN0ZW5lciBmaXJzdC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuc2xvdCA9IG5ldyBTbG90XzEuU2xvdChsaXN0ZW5lciwgdGhpcywgb25jZSkpO1xuICAgIH07XG4gICAgcmV0dXJuIE1vbm9TaWduYWw7XG59KCkpO1xuZXhwb3J0cy5Nb25vU2lnbmFsID0gTW9ub1NpZ25hbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1vbm9TaWduYWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NpZ25hbHMuanMvbGliL29yZy9vc2ZsYXNoL3NpZ25hbHMvTW9ub1NpZ25hbC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPbmNlU2lnbmFsXzEgPSByZXF1aXJlKFwiLi9PbmNlU2lnbmFsXCIpO1xudmFyIFByb21pc2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQcm9taXNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKiogQGluaGVyaXREb2MgKi9cbiAgICAvKm92ZXJyaWRlKi9cbiAgICBQcm9taXNlLnByb3RvdHlwZS5hZGRPbmNlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBzbG90ID0gX3N1cGVyLnByb3RvdHlwZS5hZGRPbmNlLmNhbGwodGhpcywgbGlzdGVuZXIpO1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3BhdGNoZWQpIHtcbiAgICAgICAgICAgIHNsb3QuZXhlY3V0ZSh0aGlzLnZhbHVlT2JqZWN0cyk7XG4gICAgICAgICAgICBzbG90LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzbG90O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKiBAdGhyb3dzIGZsYXNoLmVycm9ycy5JbGxlZ2FsT3BlcmF0aW9uRXJyb3IgPGNvZGU+SWxsZWdhbE9wZXJhdGlvbkVycm9yPC9jb2RlPjogWW91IGNhbm5vdCBkaXNwYXRjaCgpIGEgUHJvbWlzZSBtb3JlIHRoYW4gb25jZVxuICAgICAqL1xuICAgIC8qb3ZlcnJpZGUqL1xuICAgIFByb21pc2UucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWVPYmplY3RzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZU9iamVjdHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Rpc3BhdGNoZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3QgZGlzcGF0Y2goKSBhIFByb21pc2UgbW9yZSB0aGFuIG9uY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcGF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlT2JqZWN0cyA9IHZhbHVlT2JqZWN0cztcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzcGF0Y2guYXBwbHkodGhpcywgdmFsdWVPYmplY3RzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFByb21pc2U7XG59KE9uY2VTaWduYWxfMS5PbmNlU2lnbmFsKSk7XG5leHBvcnRzLlByb21pc2UgPSBQcm9taXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvbWlzZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9Qcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICpcbiAqIEBzZWUgb3JnLm9zZmxhc2guc2lnbmFscy5ldmVudHMuSUV2ZW50XG4gKiBEb2N1bWVudGF0aW9uIGZvciB0aGUgZXZlbnQgaW50ZXJmYWNlIGJlaW5nIG1haW50YWluZWQgaW4gSUV2ZW50IHRvIGF2b2lkIGR1cGxpY2F0aW9uIGZvciBub3cuXG4gKi9cbnZhciBHZW5lcmljRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdlbmVyaWNFdmVudChidWJibGVzKSB7XG4gICAgICAgIGlmIChidWJibGVzID09PSB2b2lkIDApIHsgYnViYmxlcyA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMuX2J1YmJsZXMgPSBidWJibGVzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2VuZXJpY0V2ZW50LnByb3RvdHlwZSwgXCJzaWduYWxcIiwge1xuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmFsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2lnbmFsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHZW5lcmljRXZlbnQucHJvdG90eXBlLCBcInRhcmdldFwiLCB7XG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdlbmVyaWNFdmVudC5wcm90b3R5cGUsIFwiY3VycmVudFRhcmdldFwiLCB7XG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGFyZ2V0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRhcmdldCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2VuZXJpY0V2ZW50LnByb3RvdHlwZSwgXCJidWJibGVzXCIsIHtcbiAgICAgICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2J1YmJsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9idWJibGVzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgIEdlbmVyaWNFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0V2ZW50KHRoaXMuX2J1YmJsZXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEdlbmVyaWNFdmVudDtcbn0oKSk7XG5leHBvcnRzLkdlbmVyaWNFdmVudCA9IEdlbmVyaWNFdmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUdlbmVyaWNFdmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2lnbmFscy5qcy9saWIvb3JnL29zZmxhc2gvc2lnbmFscy9ldmVudHMvR2VuZXJpY0V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdlYnNvY2tldF9qc18xID0gcmVxdWlyZShcIndlYnNvY2tldC5qc1wiKTtcclxudmFyIG1zZ3BhY2sgPSByZXF1aXJlKFwibXNncGFjay1saXRlXCIpO1xyXG52YXIgQ29ubmVjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29ubmVjdGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbm5lY3Rpb24odXJsLCBxdWVyeSkge1xyXG4gICAgICAgIGlmIChxdWVyeSA9PT0gdm9pZCAwKSB7IHF1ZXJ5ID0ge307IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB1cmwpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2VucXVldWVkQ2FsbHMgPSBbXTtcclxuICAgICAgICBfdGhpcy5iaW5hcnlUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLm9uT3BlbkNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vbk9wZW5DYWxsYmFjay5jYWxsKHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLl9lbnF1ZXVlZENhbGxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9lbnF1ZXVlZENhbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB0aGlzLl9lbnF1ZXVlZENhbGxzW2ldLCBtZXRob2QgPSBfYVswXSwgYXJncyA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLndzLnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2VuZC5jYWxsKHRoaXMsIG1zZ3BhY2suZW5jb2RlKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNvbHlzZXVzLmpzOiB0cnlpbmcgdG8gc2VuZCBkYXRhIHdoaWxlIGluIFwiICsgdGhpcy53cy5yZWFkeVN0YXRlICsgXCIgc3RhdGVcIik7XHJcbiAgICAgICAgICAgIC8vIFdlYlNvY2tldCBub3QgY29ubmVjdGVkLlxyXG4gICAgICAgICAgICAvLyBFbnF1ZXVlIGRhdGEgdG8gYmUgc2VudCB3aGVuIHJlYWR5U3RhdGUgPT0gT1BFTlxyXG4gICAgICAgICAgICB0aGlzLl9lbnF1ZXVlZENhbGxzLnB1c2goWydzZW5kJywgW2RhdGFdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDb25uZWN0aW9uO1xyXG59KHdlYnNvY2tldF9qc18xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5Db25uZWN0aW9uID0gQ29ubmVjdGlvbjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ29ubmVjdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENsaWVudF8xID0gcmVxdWlyZShcIi4vQ2xpZW50XCIpO1xyXG5leHBvcnRzLkNsaWVudCA9IENsaWVudF8xLkNsaWVudDtcclxudmFyIFByb3RvY29sXzEgPSByZXF1aXJlKFwiLi9Qcm90b2NvbFwiKTtcclxuZXhwb3J0cy5Qcm90b2NvbCA9IFByb3RvY29sXzEuUHJvdG9jb2w7XHJcbnZhciBSb29tXzEgPSByZXF1aXJlKFwiLi9Sb29tXCIpO1xyXG5leHBvcnRzLlJvb20gPSBSb29tXzEuUm9vbTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3V0aWwvfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO3ZhciBfY3JlYXRlQ2xhc3M9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCxwcm9wcyl7Zm9yKHZhciBpPTA7aTxwcm9wcy5sZW5ndGg7aSsrKXt2YXIgZGVzY3JpcHRvcj1wcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGU9ZGVzY3JpcHRvci5lbnVtZXJhYmxlfHxmYWxzZTtkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZT10cnVlO2lmKFwidmFsdWVcImluIGRlc2NyaXB0b3IpZGVzY3JpcHRvci53cml0YWJsZT10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcik7fX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7aWYocHJvdG9Qcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKTtpZihzdGF0aWNQcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fTt9KCk7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO319dmFyIGJhY2tvZmY9cmVxdWlyZSgnYmFja29mZicpO3ZhciBXZWJTb2NrZXRDbGllbnQ9ZnVuY3Rpb24oKXsvKipcbiAgICogQHBhcmFtIHVybCBET01TdHJpbmcgVGhlIFVSTCB0byB3aGljaCB0byBjb25uZWN0OyB0aGlzIHNob3VsZCBiZSB0aGUgVVJMIHRvIHdoaWNoIHRoZSBXZWJTb2NrZXQgc2VydmVyIHdpbGwgcmVzcG9uZC5cbiAgICogQHBhcmFtIHByb3RvY29scyBET01TdHJpbmd8RE9NU3RyaW5nW10gRWl0aGVyIGEgc2luZ2xlIHByb3RvY29sIHN0cmluZyBvciBhbiBhcnJheSBvZiBwcm90b2NvbCBzdHJpbmdzLiBUaGVzZSBzdHJpbmdzIGFyZSB1c2VkIHRvIGluZGljYXRlIHN1Yi1wcm90b2NvbHMsIHNvIHRoYXQgYSBzaW5nbGUgc2VydmVyIGNhbiBpbXBsZW1lbnQgbXVsdGlwbGUgV2ViU29ja2V0IHN1Yi1wcm90b2NvbHMgKGZvciBleGFtcGxlLCB5b3UgbWlnaHQgd2FudCBvbmUgc2VydmVyIHRvIGJlIGFibGUgdG8gaGFuZGxlIGRpZmZlcmVudCB0eXBlcyBvZiBpbnRlcmFjdGlvbnMgZGVwZW5kaW5nIG9uIHRoZSBzcGVjaWZpZWQgcHJvdG9jb2wpLiBJZiB5b3UgZG9uJ3Qgc3BlY2lmeSBhIHByb3RvY29sIHN0cmluZywgYW4gZW1wdHkgc3RyaW5nIGlzIGFzc3VtZWQuXG4gICAqL2Z1bmN0aW9uIFdlYlNvY2tldENsaWVudCh1cmwscHJvdG9jb2xzKXt2YXIgb3B0aW9ucz1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMl06e307X2NsYXNzQ2FsbENoZWNrKHRoaXMsV2ViU29ja2V0Q2xpZW50KTt0aGlzLnVybD11cmw7dGhpcy5wcm90b2NvbHM9cHJvdG9jb2xzO3RoaXMucmVjb25uZWN0RW5hYmxlZD10cnVlO3RoaXMubGlzdGVuZXJzPXt9O3RoaXMuYmFja29mZj1iYWNrb2ZmW29wdGlvbnMuYmFja29mZnx8J2ZpYm9uYWNjaSddKG9wdGlvbnMpO3RoaXMuYmFja29mZi5vbignYmFja29mZicsdGhpcy5vbkJhY2tvZmZTdGFydC5iaW5kKHRoaXMpKTt0aGlzLmJhY2tvZmYub24oJ3JlYWR5Jyx0aGlzLm9uQmFja29mZlJlYWR5LmJpbmQodGhpcykpO3RoaXMuYmFja29mZi5vbignZmFpbCcsdGhpcy5vbkJhY2tvZmZGYWlsLmJpbmQodGhpcykpO3RoaXMub3BlbigpO31fY3JlYXRlQ2xhc3MoV2ViU29ja2V0Q2xpZW50LFt7a2V5OidvcGVuJyx2YWx1ZTpmdW5jdGlvbiBvcGVuKCl7dmFyIHJlY29ubmVjdD1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06ZmFsc2U7dGhpcy5pc1JlY29ubmVjdD1yZWNvbm5lY3Q7dGhpcy53cz1uZXcgV2ViU29ja2V0KHRoaXMudXJsLHRoaXMucHJvdG9jb2xzKTt0aGlzLndzLm9uY2xvc2U9dGhpcy5vbkNsb3NlQ2FsbGJhY2suYmluZCh0aGlzKTt0aGlzLndzLm9uZXJyb3I9dGhpcy5vbkVycm9yQ2FsbGJhY2suYmluZCh0aGlzKTt0aGlzLndzLm9ubWVzc2FnZT10aGlzLm9uTWVzc2FnZUNhbGxiYWNrLmJpbmQodGhpcyk7dGhpcy53cy5vbm9wZW49dGhpcy5vbk9wZW5DYWxsYmFjay5iaW5kKHRoaXMpO30vKipcbiAgICogQGlnbm9yZVxuICAgKi99LHtrZXk6J29uQmFja29mZlN0YXJ0Jyx2YWx1ZTpmdW5jdGlvbiBvbkJhY2tvZmZTdGFydChudW1iZXIsZGVsYXkpe30vKipcbiAgICogQGlnbm9yZVxuICAgKi99LHtrZXk6J29uQmFja29mZlJlYWR5Jyx2YWx1ZTpmdW5jdGlvbiBvbkJhY2tvZmZSZWFkeShudW1iZXIsZGVsYXkpey8vIGNvbnNvbGUubG9nKFwib25CYWNrb2ZmUmVhZHlcIiwgbnVtYmVyICsgJyAnICsgZGVsYXkgKyAnbXMnKTtcbnRoaXMub3Blbih0cnVlKTt9LyoqXG4gICAqIEBpZ25vcmVcbiAgICovfSx7a2V5OidvbkJhY2tvZmZGYWlsJyx2YWx1ZTpmdW5jdGlvbiBvbkJhY2tvZmZGYWlsKCl7fS8qKlxuICAgKiBAaWdub3JlXG4gICAqL30se2tleTonb25DbG9zZUNhbGxiYWNrJyx2YWx1ZTpmdW5jdGlvbiBvbkNsb3NlQ2FsbGJhY2soKXtpZighdGhpcy5pc1JlY29ubmVjdCYmdGhpcy5saXN0ZW5lcnNbJ29uY2xvc2UnXSl0aGlzLmxpc3RlbmVyc1snb25jbG9zZSddLmFwcGx5KG51bGwsYXJndW1lbnRzKTtpZih0aGlzLnJlY29ubmVjdEVuYWJsZWQpe3RoaXMuYmFja29mZi5iYWNrb2ZmKCk7fX0vKipcbiAgICogQGlnbm9yZVxuICAgKi99LHtrZXk6J29uRXJyb3JDYWxsYmFjaycsdmFsdWU6ZnVuY3Rpb24gb25FcnJvckNhbGxiYWNrKCl7aWYodGhpcy5saXN0ZW5lcnNbJ29uZXJyb3InXSl0aGlzLmxpc3RlbmVyc1snb25lcnJvciddLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9LyoqXG4gICAqIEBpZ25vcmVcbiAgICovfSx7a2V5Oidvbk1lc3NhZ2VDYWxsYmFjaycsdmFsdWU6ZnVuY3Rpb24gb25NZXNzYWdlQ2FsbGJhY2soKXtpZih0aGlzLmxpc3RlbmVyc1snb25tZXNzYWdlJ10pdGhpcy5saXN0ZW5lcnNbJ29ubWVzc2FnZSddLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9LyoqXG4gICAqIEBpZ25vcmVcbiAgICovfSx7a2V5Oidvbk9wZW5DYWxsYmFjaycsdmFsdWU6ZnVuY3Rpb24gb25PcGVuQ2FsbGJhY2soKXtpZih0aGlzLmxpc3RlbmVyc1snb25vcGVuJ10pdGhpcy5saXN0ZW5lcnNbJ29ub3BlbiddLmFwcGx5KG51bGwsYXJndW1lbnRzKTtpZih0aGlzLmlzUmVjb25uZWN0JiZ0aGlzLmxpc3RlbmVyc1snb25yZWNvbm5lY3QnXSl0aGlzLmxpc3RlbmVyc1snb25yZWNvbm5lY3QnXS5hcHBseShudWxsLGFyZ3VtZW50cyk7dGhpcy5pc1JlY29ubmVjdD1mYWxzZTt9LyoqXG4gICAqIFRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgZGF0YSB0aGF0IGhhdmUgYmVlbiBxdWV1ZWQgdXNpbmcgY2FsbHMgdG8gc2VuZCgpXG4gICAqIGJ1dCBub3QgeWV0IHRyYW5zbWl0dGVkIHRvIHRoZSBuZXR3b3JrLiBUaGlzIHZhbHVlIGRvZXMgbm90IHJlc2V0IHRvIHplcm9cbiAgICogd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQ7IGlmIHlvdSBrZWVwIGNhbGxpbmcgc2VuZCgpLCB0aGlzIHdpbGxcbiAgICogY29udGludWUgdG8gY2xpbWIuXG4gICAqXG4gICAqIEB0eXBlIHVuc2lnbmVkIGxvbmdcbiAgICogQHJlYWRvbmx5XG4gICAqL30se2tleTonY2xvc2UnLC8qKlxuICAgKiBDbG9zZXMgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uIG9yIGNvbm5lY3Rpb24gYXR0ZW1wdCwgaWYgYW55LiBJZiB0aGVcbiAgICogY29ubmVjdGlvbiBpcyBhbHJlYWR5IENMT1NFRCwgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gY29kZSBBIG51bWVyaWMgdmFsdWUgaW5kaWNhdGluZyB0aGUgc3RhdHVzIGNvZGUgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgYmVpbmcgY2xvc2VkLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCBhIGRlZmF1bHQgdmFsdWUgb2YgMTAwMCAoaW5kaWNhdGluZyBhIG5vcm1hbCBcInRyYW5zYWN0aW9uIGNvbXBsZXRlXCIgY2xvc3VyZSkgaXMgYXNzdW1lZC4gU2VlIHRoZSBsaXN0IG9mIHN0YXR1cyBjb2RlcyBvbiB0aGUgQ2xvc2VFdmVudCBwYWdlIGZvciBwZXJtaXR0ZWQgdmFsdWVzLlxuICAgKiBAcGFyYW0gcmVhc29uIEEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NpbmcuIFRoaXMgc3RyaW5nIG11c3QgYmUgbm8gbG9uZ2VyIHRoYW4gMTIzIGJ5dGVzIG9mIFVURi04IHRleHQgKG5vdCBjaGFyYWN0ZXJzKS5cbiAgICpcbiAgICogQHJldHVybiB2b2lkXG4gICAqL3ZhbHVlOmZ1bmN0aW9uIGNsb3NlKGNvZGUscmVhc29uKXtpZih0eXBlb2YgY29kZT09J3VuZGVmaW5lZCcpe2NvZGU9MTAwMDt9dGhpcy5yZWNvbm5lY3RFbmFibGVkPWZhbHNlO3RoaXMud3MuY2xvc2UoY29kZSxyZWFzb24pO30vKipcbiAgICogVHJhbnNtaXRzIGRhdGEgdG8gdGhlIHNlcnZlciBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbi5cbiAgICogQHBhcmFtIGRhdGEgRE9NU3RyaW5nfEFycmF5QnVmZmVyfEJsb2JcbiAgICogQHJldHVybiB2b2lkXG4gICAqL30se2tleTonc2VuZCcsdmFsdWU6ZnVuY3Rpb24gc2VuZChkYXRhKXt0aGlzLndzLnNlbmQoZGF0YSk7fS8qKlxuICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gQ0xPU0VELiBUaGUgbGlzdGVuZXIgcmVjZWl2ZXMgYSBDbG9zZUV2ZW50IG5hbWVkIFwiY2xvc2VcIi5cbiAgICogQHBhcmFtIGxpc3RlbmVyIEV2ZW50TGlzdGVuZXJcbiAgICovfSx7a2V5OididWZmZXJlZEFtb3VudCcsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLndzLmJ1ZmZlcmVkQW1vdW50O30vKipcbiAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNvbm5lY3Rpb247IHRoaXMgaXMgb25lIG9mIHRoZSBSZWFkeSBzdGF0ZSBjb25zdGFudHMuXG4gICAqIEB0eXBlIHVuc2lnbmVkIHNob3J0XG4gICAqIEByZWFkb25seVxuICAgKi99LHtrZXk6J3JlYWR5U3RhdGUnLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy53cy5yZWFkeVN0YXRlO30vKipcbiAgICogQSBzdHJpbmcgaW5kaWNhdGluZyB0aGUgdHlwZSBvZiBiaW5hcnkgZGF0YSBiZWluZyB0cmFuc21pdHRlZCBieSB0aGVcbiAgICogY29ubmVjdGlvbi4gVGhpcyBzaG91bGQgYmUgZWl0aGVyIFwiYmxvYlwiIGlmIERPTSBCbG9iIG9iamVjdHMgYXJlIGJlaW5nXG4gICAqIHVzZWQgb3IgXCJhcnJheWJ1ZmZlclwiIGlmIEFycmF5QnVmZmVyIG9iamVjdHMgYXJlIGJlaW5nIHVzZWQuXG4gICAqIEB0eXBlIERPTVN0cmluZ1xuICAgKi99LHtrZXk6J2JpbmFyeVR5cGUnLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy53cy5iaW5hcnlUeXBlO30sc2V0OmZ1bmN0aW9uIHNldChiaW5hcnlUeXBlKXt0aGlzLndzLmJpbmFyeVR5cGU9YmluYXJ5VHlwZTt9LyoqXG4gICAqIFRoZSBleHRlbnNpb25zIHNlbGVjdGVkIGJ5IHRoZSBzZXJ2ZXIuIFRoaXMgaXMgY3VycmVudGx5IG9ubHkgdGhlIGVtcHR5XG4gICAqIHN0cmluZyBvciBhIGxpc3Qgb2YgZXh0ZW5zaW9ucyBhcyBuZWdvdGlhdGVkIGJ5IHRoZSBjb25uZWN0aW9uLlxuICAgKiBAdHlwZSBET01TdHJpbmdcbiAgICovfSx7a2V5OidleHRlbnNpb25zJyxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMud3MuZXh0ZW5zaW9uczt9LHNldDpmdW5jdGlvbiBzZXQoZXh0ZW5zaW9ucyl7dGhpcy53cy5leHRlbnNpb25zPWV4dGVuc2lvbnM7fS8qKlxuICAgKiBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBuYW1lIG9mIHRoZSBzdWItcHJvdG9jb2wgdGhlIHNlcnZlciBzZWxlY3RlZDtcbiAgICogdGhpcyB3aWxsIGJlIG9uZSBvZiB0aGUgc3RyaW5ncyBzcGVjaWZpZWQgaW4gdGhlIHByb3RvY29scyBwYXJhbWV0ZXIgd2hlblxuICAgKiBjcmVhdGluZyB0aGUgV2ViU29ja2V0IG9iamVjdC5cbiAgICogQHR5cGUgRE9NU3RyaW5nXG4gICAqL30se2tleToncHJvdG9jb2wnLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy53cy5wcm90b2NvbDt9LHNldDpmdW5jdGlvbiBzZXQocHJvdG9jb2wpe3RoaXMud3MucHJvdG9jb2w9cHJvdG9jb2w7fX0se2tleTonb25jbG9zZScsc2V0OmZ1bmN0aW9uIHNldChsaXN0ZW5lcil7dGhpcy5saXN0ZW5lcnNbJ29uY2xvc2UnXT1saXN0ZW5lcjt9LGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy5saXN0ZW5lcnNbJ29uY2xvc2UnXTt9LyoqXG4gICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGFuIGVycm9yIG9jY3Vycy4gVGhpcyBpcyBhIHNpbXBsZSBldmVudCBuYW1lZCBcImVycm9yXCIuXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBFdmVudExpc3RlbmVyXG4gICAqL30se2tleTonb25lcnJvcicsc2V0OmZ1bmN0aW9uIHNldChsaXN0ZW5lcil7dGhpcy5saXN0ZW5lcnNbJ29uZXJyb3InXT1saXN0ZW5lcjt9LGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy5saXN0ZW5lcnNbJ29uZXJyb3InXTt9LyoqXG4gICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuIFRoZSBsaXN0ZW5lciByZWNlaXZlcyBhIE1lc3NhZ2VFdmVudCBuYW1lZCBcIm1lc3NhZ2VcIi5cbiAgICogQHBhcmFtIGxpc3RlbmVyIEV2ZW50TGlzdGVuZXJcbiAgICovfSx7a2V5Oidvbm1lc3NhZ2UnLHNldDpmdW5jdGlvbiBzZXQobGlzdGVuZXIpe3RoaXMubGlzdGVuZXJzWydvbm1lc3NhZ2UnXT1saXN0ZW5lcjt9LGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy5saXN0ZW5lcnNbJ29ubWVzc2FnZSddO30vKipcbiAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIE9QRU47IHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIGNvbm5lY3Rpb24gaXMgcmVhZHkgdG8gc2VuZCBhbmQgcmVjZWl2ZSBkYXRhLiBUaGUgZXZlbnQgaXMgYSBzaW1wbGUgb25lIHdpdGggdGhlIG5hbWUgXCJvcGVuXCIuXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBFdmVudExpc3RlbmVyXG4gICAqL30se2tleTonb25vcGVuJyxzZXQ6ZnVuY3Rpb24gc2V0KGxpc3RlbmVyKXt0aGlzLmxpc3RlbmVyc1snb25vcGVuJ109bGlzdGVuZXI7fSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMubGlzdGVuZXJzWydvbm9wZW4nXTt9LyoqXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBFdmVudExpc3RlbmVyXG4gICAqL30se2tleTonb25yZWNvbm5lY3QnLHNldDpmdW5jdGlvbiBzZXQobGlzdGVuZXIpe3RoaXMubGlzdGVuZXJzWydvbnJlY29ubmVjdCddPWxpc3RlbmVyO30sZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLmxpc3RlbmVyc1snb25yZWNvbm5lY3QnXTt9fV0pO3JldHVybiBXZWJTb2NrZXRDbGllbnQ7fSgpOy8qKlxuICogVGhlIGNvbm5lY3Rpb24gaXMgbm90IHlldCBvcGVuLlxuICovV2ViU29ja2V0Q2xpZW50LkNPTk5FQ1RJTkc9V2ViU29ja2V0LkNPTk5FQ1RJTkc7LyoqXG4gKiBUaGUgY29ubmVjdGlvbiBpcyBvcGVuIGFuZCByZWFkeSB0byBjb21tdW5pY2F0ZS5cbiAqL1dlYlNvY2tldENsaWVudC5PUEVOPVdlYlNvY2tldC5PUEVOOy8qKlxuICogVGhlIGNvbm5lY3Rpb24gaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY2xvc2luZy5cbiAqL1dlYlNvY2tldENsaWVudC5DTE9TSU5HPVdlYlNvY2tldC5DTE9TSU5HOy8qKlxuICogVGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkIG9yIGNvdWxkbid0IGJlIG9wZW5lZC5cbiAqL1dlYlNvY2tldENsaWVudC5DTE9TRUQ9V2ViU29ja2V0LkNMT1NFRDtleHBvcnRzLmRlZmF1bHQ9V2ViU29ja2V0Q2xpZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJzb2NrZXQuanMvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9