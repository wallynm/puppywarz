var game =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./js/game.js */1);


/***/ }),
/* 1 */
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Scene = exports.resources = undefined;
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 2);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _cc = __webpack_require__(/*! cc */ 38);
	
	var _cc2 = _interopRequireDefault(_cc);
	
	var _StartSC = __webpack_require__(/*! scenes/StartSC */ 39);
	
	var _StartSC2 = _interopRequireDefault(_StartSC);
	
	var _resources = __webpack_require__(/*! resources */ 105);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var resources = exports.resources = (0, _keys2.default)(_resources2.default).map(function (n) {
	  return _resources2.default[n];
	});
	
	var Scene = exports.Scene = _StartSC2.default;

/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 3), __esModule: true };

/***/ }),
/* 3 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/object/keys.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.keys */ 4);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 19).Object.keys;


/***/ }),
/* 4 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 5);
	var $keys = __webpack_require__(/*! ./_object-keys */ 7);
	
	__webpack_require__(/*! ./_object-sap */ 24)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 5 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-object.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 6);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 6 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_defined.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 7 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(/*! ./_object-keys-internal */ 8);
	var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 23);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 8 */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(/*! ./_has */ 9);
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 10);
	var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 13)(false);
	var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 17)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 9 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_has.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 10 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-iobject.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 11);
	var defined = __webpack_require__(/*! ./_defined */ 6);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 11 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_iobject.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 12);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 12 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_cof.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 13 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_array-includes.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 10);
	var toLength = __webpack_require__(/*! ./_to-length */ 14);
	var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 16);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 14 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-length.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 15);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 15 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-integer.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 16 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 15);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 17 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_shared-key.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(/*! ./_shared */ 18)('keys');
	var uid = __webpack_require__(/*! ./_uid */ 22);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 18 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_shared.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(/*! ./_core */ 19);
	var global = __webpack_require__(/*! ./_global */ 20);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(/*! ./_library */ 21) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 19 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_core.js ***!
  \********************************************/
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 20 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_global.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_library.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 22 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_uid.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 23 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************/
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 24 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-sap.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./_export */ 25);
	var core = __webpack_require__(/*! ./_core */ 19);
	var fails = __webpack_require__(/*! ./_fails */ 34);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 25 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_export.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 20);
	var core = __webpack_require__(/*! ./_core */ 19);
	var ctx = __webpack_require__(/*! ./_ctx */ 26);
	var hide = __webpack_require__(/*! ./_hide */ 28);
	var has = __webpack_require__(/*! ./_has */ 9);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 26 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_ctx.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 27);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 27 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_a-function.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 28 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_hide.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(/*! ./_object-dp */ 29);
	var createDesc = __webpack_require__(/*! ./_property-desc */ 37);
	module.exports = __webpack_require__(/*! ./_descriptors */ 33) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 29 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_object-dp.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./_an-object */ 30);
	var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 32);
	var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 36);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 33) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 30 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_an-object.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 31 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_is-object.js ***!
  \*************************************************/
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 32 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(/*! ./_descriptors */ 33) && !__webpack_require__(/*! ./_fails */ 34)(function () {
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 35)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 33 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_descriptors.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 34)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 34 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/_fails.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 35 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_dom-create.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	var document = __webpack_require__(/*! ./_global */ 20).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 36 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/_to-primitive.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 37 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_property-desc.js ***!
  \*****************************************************/
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 38 */
/*!*********************!*\
  !*** external "cc" ***!
  \*********************/
/***/ (function(module, exports) {

	module.exports = cc;

/***/ }),
/* 39 */
/*!******************************!*\
  !*** ./js/scenes/StartSC.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 44);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 45);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 84);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 88);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ccEs = __webpack_require__(/*! cc-es6 */ 96);
	
	var _layers = __webpack_require__(/*! layers */ 102);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StartSC = function (_Scene) {
		(0, _inherits3.default)(StartSC, _Scene);
	
		function StartSC() {
			(0, _classCallCheck3.default)(this, StartSC);
			return (0, _possibleConstructorReturn3.default)(this, (StartSC.__proto__ || (0, _getPrototypeOf2.default)(StartSC)).apply(this, arguments));
		}
	
		(0, _createClass3.default)(StartSC, [{
			key: 'onEnter',
			value: function onEnter() {
				(0, _get3.default)(StartSC.prototype.__proto__ || (0, _getPrototypeOf2.default)(StartSC.prototype), 'onEnter', this).call(this);
				var layer = new _layers.StartLY();
				layer.init();
				this.addChild(layer);
			}
		}]);
		return StartSC;
	}(_ccEs.Scene);
	
	exports.default = StartSC;

/***/ }),
/* 40 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-prototype-of.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 41), __esModule: true };

/***/ }),
/* 41 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/get-prototype-of.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ 42);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 19).Object.getPrototypeOf;


/***/ }),
/* 42 */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 5);
	var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 43);
	
	__webpack_require__(/*! ./_object-sap */ 24)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 43 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-gpo.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(/*! ./_has */ 9);
	var toObject = __webpack_require__(/*! ./_to-object */ 5);
	var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 17)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 44 */
/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 45 */
/*!************************************************!*\
  !*** ./~/babel-runtime/helpers/createClass.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 46);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 46 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 47), __esModule: true };

/***/ }),
/* 47 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.define-property */ 48);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 19).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 48 */
/*!*****************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 25);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 33), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 29).f });


/***/ }),
/* 49 */
/*!**************************************************************!*\
  !*** ./~/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 50);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 50 */
/*!*******************************************!*\
  !*** ./~/babel-runtime/helpers/typeof.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 51);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(/*! ../core-js/symbol */ 69);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 51 */
/*!****************************************************!*\
  !*** ./~/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 52), __esModule: true };

/***/ }),
/* 52 */
/*!*************************************************!*\
  !*** ./~/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.string.iterator */ 53);
	__webpack_require__(/*! ../../modules/web.dom.iterable */ 64);
	module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 68).f('iterator');


/***/ }),
/* 53 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(/*! ./_string-at */ 54)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./_iter-define */ 55)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 54 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_string-at.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 15);
	var defined = __webpack_require__(/*! ./_defined */ 6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 55 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-define.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(/*! ./_library */ 21);
	var $export = __webpack_require__(/*! ./_export */ 25);
	var redefine = __webpack_require__(/*! ./_redefine */ 56);
	var hide = __webpack_require__(/*! ./_hide */ 28);
	var Iterators = __webpack_require__(/*! ./_iterators */ 57);
	var $iterCreate = __webpack_require__(/*! ./_iter-create */ 58);
	var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 62);
	var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 43);
	var ITERATOR = __webpack_require__(/*! ./_wks */ 63)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 56 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_redefine.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_hide */ 28);


/***/ }),
/* 57 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iterators.js ***!
  \*************************************************/
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 58 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-create.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(/*! ./_object-create */ 59);
	var descriptor = __webpack_require__(/*! ./_property-desc */ 37);
	var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 62);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./_hide */ 28)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 63)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 59 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_object-create.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(/*! ./_an-object */ 30);
	var dPs = __webpack_require__(/*! ./_object-dps */ 60);
	var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 23);
	var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 17)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(/*! ./_dom-create */ 35)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(/*! ./_html */ 61).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 60 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-dps.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(/*! ./_object-dp */ 29);
	var anObject = __webpack_require__(/*! ./_an-object */ 30);
	var getKeys = __webpack_require__(/*! ./_object-keys */ 7);
	
	module.exports = __webpack_require__(/*! ./_descriptors */ 33) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 61 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_html.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(/*! ./_global */ 20).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 62 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./_object-dp */ 29).f;
	var has = __webpack_require__(/*! ./_has */ 9);
	var TAG = __webpack_require__(/*! ./_wks */ 63)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 63 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_wks.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(/*! ./_shared */ 18)('wks');
	var uid = __webpack_require__(/*! ./_uid */ 22);
	var Symbol = __webpack_require__(/*! ./_global */ 20).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 64 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 65);
	var global = __webpack_require__(/*! ./_global */ 20);
	var hide = __webpack_require__(/*! ./_hide */ 28);
	var Iterators = __webpack_require__(/*! ./_iterators */ 57);
	var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 63)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 65 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 66);
	var step = __webpack_require__(/*! ./_iter-step */ 67);
	var Iterators = __webpack_require__(/*! ./_iterators */ 57);
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 10);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./_iter-define */ 55)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 66 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************/
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 67 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iter-step.js ***!
  \*************************************************/
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 68 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_wks-ext.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(/*! ./_wks */ 63);


/***/ }),
/* 69 */
/*!*******************************************!*\
  !*** ./~/babel-runtime/core-js/symbol.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 70), __esModule: true };

/***/ }),
/* 70 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/symbol/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.symbol */ 71);
	__webpack_require__(/*! ../../modules/es6.object.to-string */ 81);
	__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 82);
	__webpack_require__(/*! ../../modules/es7.symbol.observable */ 83);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 19).Symbol;


/***/ }),
/* 71 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/es6.symbol.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(/*! ./_global */ 20);
	var has = __webpack_require__(/*! ./_has */ 9);
	var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 33);
	var $export = __webpack_require__(/*! ./_export */ 25);
	var redefine = __webpack_require__(/*! ./_redefine */ 56);
	var META = __webpack_require__(/*! ./_meta */ 72).KEY;
	var $fails = __webpack_require__(/*! ./_fails */ 34);
	var shared = __webpack_require__(/*! ./_shared */ 18);
	var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 62);
	var uid = __webpack_require__(/*! ./_uid */ 22);
	var wks = __webpack_require__(/*! ./_wks */ 63);
	var wksExt = __webpack_require__(/*! ./_wks-ext */ 68);
	var wksDefine = __webpack_require__(/*! ./_wks-define */ 73);
	var enumKeys = __webpack_require__(/*! ./_enum-keys */ 74);
	var isArray = __webpack_require__(/*! ./_is-array */ 77);
	var anObject = __webpack_require__(/*! ./_an-object */ 30);
	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 10);
	var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 36);
	var createDesc = __webpack_require__(/*! ./_property-desc */ 37);
	var _create = __webpack_require__(/*! ./_object-create */ 59);
	var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 78);
	var $GOPD = __webpack_require__(/*! ./_object-gopd */ 80);
	var $DP = __webpack_require__(/*! ./_object-dp */ 29);
	var $keys = __webpack_require__(/*! ./_object-keys */ 7);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(/*! ./_object-gopn */ 79).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(/*! ./_object-pie */ 76).f = $propertyIsEnumerable;
	  __webpack_require__(/*! ./_object-gops */ 75).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 21)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 28)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 72 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_meta.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(/*! ./_uid */ 22)('meta');
	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	var has = __webpack_require__(/*! ./_has */ 9);
	var setDesc = __webpack_require__(/*! ./_object-dp */ 29).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(/*! ./_fails */ 34)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 73 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_wks-define.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 20);
	var core = __webpack_require__(/*! ./_core */ 19);
	var LIBRARY = __webpack_require__(/*! ./_library */ 21);
	var wksExt = __webpack_require__(/*! ./_wks-ext */ 68);
	var defineProperty = __webpack_require__(/*! ./_object-dp */ 29).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 74 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_enum-keys.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(/*! ./_object-keys */ 7);
	var gOPS = __webpack_require__(/*! ./_object-gops */ 75);
	var pIE = __webpack_require__(/*! ./_object-pie */ 76);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 75 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-gops.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 76 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-pie.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 77 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_is-array.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./_cof */ 12);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 78 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 10);
	var gOPN = __webpack_require__(/*! ./_object-gopn */ 79).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 79 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-gopn.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(/*! ./_object-keys-internal */ 8);
	var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 23).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 80 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-gopd.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(/*! ./_object-pie */ 76);
	var createDesc = __webpack_require__(/*! ./_property-desc */ 37);
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 10);
	var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 36);
	var has = __webpack_require__(/*! ./_has */ 9);
	var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 32);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 33) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 81 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ (function(module, exports) {



/***/ }),
/* 82 */
/*!****************************************************************!*\
  !*** ./~/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_wks-define */ 73)('asyncIterator');


/***/ }),
/* 83 */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/es7.symbol.observable.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_wks-define */ 73)('observable');


/***/ }),
/* 84 */
/*!****************************************!*\
  !*** ./~/babel-runtime/helpers/get.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ 40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ 85);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ }),
/* 85 */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 86), __esModule: true };

/***/ }),
/* 86 */
/*!********************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 87);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 19).Object;
	module.exports = function getOwnPropertyDescriptor(it, key) {
	  return $Object.getOwnPropertyDescriptor(it, key);
	};


/***/ }),
/* 87 */
/*!*****************************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 10);
	var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 80).f;
	
	__webpack_require__(/*! ./_object-sap */ 24)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 88 */
/*!*********************************************!*\
  !*** ./~/babel-runtime/helpers/inherits.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 89);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(/*! ../core-js/object/create */ 93);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 50);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 89 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 90), __esModule: true };

/***/ }),
/* 90 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 91);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 19).Object.setPrototypeOf;


/***/ }),
/* 91 */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./_export */ 25);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 92).set });


/***/ }),
/* 92 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_set-proto.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	var anObject = __webpack_require__(/*! ./_an-object */ 30);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(/*! ./_ctx */ 26)(Function.call, __webpack_require__(/*! ./_object-gopd */ 80).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 93 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 94), __esModule: true };

/***/ }),
/* 94 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/create.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.create */ 95);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 19).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 95 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.create.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 25);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 59) });


/***/ }),
/* 96 */
/*!**********************!*\
  !*** ./js/cc-es6.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 97);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 98);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _cc = __webpack_require__(/*! cc */ 38);
	
	var _cc2 = _interopRequireDefault(_cc);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function e(className) {
	  return _cc2.default[className].extend({});
	}
	
	var classNames = ['Scene', 'Layer', 'Sprite', 'MenuItemSprite', 'Menu', 'MoveTo', 'Sequence', 'SpriteBatchNode', 'Animation', 'RepeatForever', 'Animate', 'PhysicsSprite', 'TMXTiledMap', 'LabelTTF', 'LayerColor'];
	
	var extended = classNames.reduce(function (obj, className) {
	  return (0, _assign2.default)(obj, (0, _defineProperty3.default)({}, className, e(className)));
	}, {});
	
	module.exports = extended;

/***/ }),
/* 97 */
/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/defineProperty.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 46);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),
/* 98 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/assign.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 99), __esModule: true };

/***/ }),
/* 99 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/assign.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.assign */ 100);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 19).Object.assign;


/***/ }),
/* 100 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./_export */ 25);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 101) });


/***/ }),
/* 101 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_object-assign.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(/*! ./_object-keys */ 7);
	var gOPS = __webpack_require__(/*! ./_object-gops */ 75);
	var pIE = __webpack_require__(/*! ./_object-pie */ 76);
	var toObject = __webpack_require__(/*! ./_to-object */ 5);
	var IObject = __webpack_require__(/*! ./_iobject */ 11);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(/*! ./_fails */ 34)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 102 */
/*!****************************!*\
  !*** ./js/layers/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StartLY = exports.PauseLY = undefined;
	
	var _PauseLY = __webpack_require__(/*! ./PauseLY */ 103);
	
	var _PauseLY2 = _interopRequireDefault(_PauseLY);
	
	var _StartLY = __webpack_require__(/*! ./StartLY */ 104);
	
	var _StartLY2 = _interopRequireDefault(_StartLY);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.PauseLY = _PauseLY2.default;
	exports.StartLY = _StartLY2.default;

/***/ }),
/* 103 */
/*!******************************!*\
  !*** ./js/layers/PauseLY.js ***!
  \******************************/
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 104 */
/*!******************************!*\
  !*** ./js/layers/StartLY.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 44);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 45);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 84);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 88);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _cc = __webpack_require__(/*! cc */ 38);
	
	var _ccEs = __webpack_require__(/*! cc-es6 */ 96);
	
	var _resources = __webpack_require__(/*! resources */ 105);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _StoryIntroductionSC = __webpack_require__(/*! scenes/StoryIntroductionSC */ 106);
	
	var _StoryIntroductionSC2 = _interopRequireDefault(_StoryIntroductionSC);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StartLY = function (_Layer) {
		(0, _inherits3.default)(StartLY, _Layer);
	
		function StartLY() {
			(0, _classCallCheck3.default)(this, StartLY);
			return (0, _possibleConstructorReturn3.default)(this, (StartLY.__proto__ || (0, _getPrototypeOf2.default)(StartLY)).apply(this, arguments));
		}
	
		(0, _createClass3.default)(StartLY, [{
			key: 'init',
			value: function init() {
				(0, _get3.default)(StartLY.prototype.__proto__ || (0, _getPrototypeOf2.default)(StartLY.prototype), 'init', this).call(this);
	
				var centerPos = (0, _cc.p)(_cc.winSize.width / 2, _cc.winSize.height / 2);
				var spriteBG = new _ccEs.Sprite(_resources2.default.helloBG_png);
				spriteBG.setPosition(centerPos);
				this.addChild(spriteBG);
	
				_cc.MenuItemFont.setFontSize(60);
	
				var menuItemPlay = new _ccEs.MenuItemSprite(new _ccEs.Sprite(_resources2.default.start_n_png), new _ccEs.Sprite(_resources2.default.start_s_png), this.onPlay, this);
				var menu = new _ccEs.Menu(menuItemPlay);
	
				menu.setColor((0, _cc.color)(0, 0, 0));
				menu.setPosition(centerPos);
				this.addChild(menu);
			}
		}, {
			key: 'onPlay',
			value: function onPlay() {
				cc.log("==onplay clicked");
				_cc.director.runScene(new _StoryIntroductionSC2.default());
			}
		}]);
		return StartLY;
	}(_ccEs.Layer);
	
	exports.default = StartLY;

/***/ }),
/* 105 */
/*!*************************!*\
  !*** ./js/resources.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 97);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 98);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dir = 'res';
	
	var filenames = ['characters/cat01.jpg', 'characters/dog01.jpg', 'helloBG.png', 'start_n.png', 'start_s.png', 'PlayBG.png', 'running.png', 'running.plist', 'map.png', 'map00.tmx', 'map01.tmx', 'background.png', 'background.plist', 'restart_n.png', 'restart_s.png', 'background.mp3', 'jump.mp3', 'pickup_coin.mp3'];
	
	var resources = filenames.reduce(function (collection, filename) {
		return (0, _assign2.default)({}, collection, (0, _defineProperty3.default)({}, filename.replace(/\W/g, '_'), dir + '/' + filename));
	}, {});
	
	console.info(resources);
	
	exports.default = resources;

/***/ }),
/* 106 */
/*!******************************************!*\
  !*** ./js/scenes/StoryIntroductionSC.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 44);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 45);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 84);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 88);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ccEs = __webpack_require__(/*! cc-es6 */ 96);
	
	var _StoryIntroductionLY = __webpack_require__(/*! layers/StoryIntroductionLY */ 107);
	
	var _StoryIntroductionLY2 = _interopRequireDefault(_StoryIntroductionLY);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StoryIntroductionSC = function (_Scene) {
	   (0, _inherits3.default)(StoryIntroductionSC, _Scene);
	
	   function StoryIntroductionSC() {
	      (0, _classCallCheck3.default)(this, StoryIntroductionSC);
	      return (0, _possibleConstructorReturn3.default)(this, (StoryIntroductionSC.__proto__ || (0, _getPrototypeOf2.default)(StoryIntroductionSC)).apply(this, arguments));
	   }
	
	   (0, _createClass3.default)(StoryIntroductionSC, [{
	      key: 'onEnter',
	      value: function onEnter() {
	         (0, _get3.default)(StoryIntroductionSC.prototype.__proto__ || (0, _getPrototypeOf2.default)(StoryIntroductionSC.prototype), 'onEnter', this).call(this);
	         var layer = new _StoryIntroductionLY2.default();
	         layer.init();
	         this.addChild(layer);
	      }
	   }]);
	   return StoryIntroductionSC;
	}(_ccEs.Scene);
	
	exports.default = StoryIntroductionSC;

/***/ }),
/* 107 */
/*!******************************************!*\
  !*** ./js/layers/StoryIntroductionLY.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 44);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 45);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 84);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 88);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _cc = __webpack_require__(/*! cc */ 38);
	
	var _ccEs = __webpack_require__(/*! cc-es6 */ 96);
	
	var _resources = __webpack_require__(/*! resources */ 105);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _FactionSelectionSC = __webpack_require__(/*! scenes/FactionSelectionSC */ 110);
	
	var _FactionSelectionSC2 = _interopRequireDefault(_FactionSelectionSC);
	
	var _Player = __webpack_require__(/*! characters/Player */ 108);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StoryIntroductionLY = function (_Layer) {
	  (0, _inherits3.default)(StoryIntroductionLY, _Layer);
	
	  function StoryIntroductionLY() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, StoryIntroductionLY);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StoryIntroductionLY.__proto__ || (0, _getPrototypeOf2.default)(StoryIntroductionLY)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
	      storyLevel: 0,
	      lastStoryLevel: 0
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(StoryIntroductionLY, [{
	    key: 'init',
	    value: function init() {
	      (0, _get3.default)(StoryIntroductionLY.prototype.__proto__ || (0, _getPrototypeOf2.default)(StoryIntroductionLY.prototype), 'init', this).call(this);
	      // alert('what?')
	      var centerPos = (0, _cc.p)(_cc.winSize.width / 2, _cc.winSize.height / 2);
	      var CharacterCat = new _Player2.default({ type: "cat", name: "Sr. Jinglebell", pos: "left" });
	      CharacterCat.init();
	
	      var CharacterDog = new _Player2.default({ type: "dog", name: "Ms. Jade", pos: "right" });
	      CharacterDog.init();
	
	      this.addChild(CharacterCat);
	      this.addChild(CharacterDog);
	      console.info(this);
	      alert('aff');
	      // Advances story into next step showing both characters
	      // Need to check after if onMouseDown work with mobile
	      // this.onMouseDown(this.advanceHistoryScene)
	    }
	  }, {
	    key: 'advanceHistoryScene',
	    value: function advanceHistoryScene() {
	      var _props = this.props,
	          storyLevel = _props.storyLevel,
	          lastStoryLevel = _props.lastStoryLevel;
	
	      this.props.storyLevel += 1;
	
	      if (storyLevel > lastStoryLevel) {
	        cc.log("==faction selected", faction);
	        _cc.director.runScene(new _FactionSelectionSC2.default());
	      }
	    }
	  }]);
	  return StoryIntroductionLY;
	}(_ccEs.Layer);
	
	exports.default = StoryIntroductionLY;

/***/ }),
/* 108 */
/*!*********************************!*\
  !*** ./js/characters/Player.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 109);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 44);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 45);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 84);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 88);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _cc = __webpack_require__(/*! cc */ 38);
	
	var _ccEs = __webpack_require__(/*! cc-es6 */ 96);
	
	var _resources = __webpack_require__(/*! resources */ 105);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _StoryIntroductionSC = __webpack_require__(/*! scenes/StoryIntroductionSC */ 106);
	
	var _StoryIntroductionSC2 = _interopRequireDefault(_StoryIntroductionSC);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Player = function (_Layer) {
		(0, _inherits3.default)(Player, _Layer);
	
		function Player(props) {
			var _ret;
	
			(0, _classCallCheck3.default)(this, Player);
	
			var _this = (0, _possibleConstructorReturn3.default)(this, (Player.__proto__ || (0, _getPrototypeOf2.default)(Player)).call(this));
	
			_this.defaultProps = {
				number: "01",
				pos: "left"
			};
	
			_this.props = (0, _extends3.default)({}, _this.defaultProps, props);
			var type = props.type,
			    name = props.name;
	
	
			if (!type) {
				console.error("You must set a type for the character");
			}
	
			if (!name) {
				console.error("You must set a name for the character");
			}
			return _ret = _this, (0, _possibleConstructorReturn3.default)(_this, _ret);
		}
	
		(0, _createClass3.default)(Player, [{
			key: 'init',
			value: function init() {
				(0, _get3.default)(Player.prototype.__proto__ || (0, _getPrototypeOf2.default)(Player.prototype), 'init', this).call(this);
				this.setSprite();
				this.setName();
			}
		}, {
			key: 'setSprite',
			value: function setSprite() {
				this.spriteCharacter = new _ccEs.Sprite(this.spriteName);
				console.info(this.spriteCharacter.getContentSize());
	
				this.spriteCharacter.setScale(0.5);
				// console.info(this.spriteCharacter.getContentSize())
	
				this.addChild(this.spriteCharacter);
				this.spriteCharacter.setPosition((0, _cc.p)(this.spritePos.left, this.spritePos.bottom));
			}
		}, {
			key: 'setName',
			value: function setName() {
				var name = this.props.name;
	
	
				var myLabel = _cc.LabelTTF.create(name, 'Times New Roman', 16, (0, _cc.size)(100, 40), _cc.TEXT_ALIGNMENT_LEFT);
				myLabel.setPosition((0, _cc.p)(this.spritePos.left, 100));
				this.addChild(myLabel);
			}
		}, {
			key: 'onPlay',
			value: function onPlay() {
				cc.log("==onplay clicked");
				_cc.director.runScene(new _StoryIntroductionSC2.default());
			}
		}, {
			key: 'spriteName',
			get: function get() {
				var _props = this.props,
				    type = _props.type,
				    number = _props.number;
	
				return _resources2.default['characters_' + (type + number) + '_jpg'];
			}
		}, {
			key: 'spritePos',
			get: function get() {
				var pos = this.props.pos;
	
				var spriteWidth = this.spriteCharacter.getContentSize().width / 4;
				var left = 0;
	
				console.log(spriteWidth);
	
				if (!pos || pos === "left") {
					left = spriteWidth;
				} else {
					left = _cc.winSize.width - spriteWidth;
				}
	
				return {
					left: left,
					bottom: _cc.winSize.height / 2
				};
			}
		}]);
		return Player;
	}(_ccEs.Layer);
	
	exports.default = Player;

/***/ }),
/* 109 */
/*!********************************************!*\
  !*** ./~/babel-runtime/helpers/extends.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(/*! ../core-js/object/assign */ 98);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 110 */
/*!*****************************************!*\
  !*** ./js/scenes/FactionSelectionSC.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map