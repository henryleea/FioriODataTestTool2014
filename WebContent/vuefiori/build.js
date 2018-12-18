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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (process.env.NODE_ENV !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  
  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false)
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (process.env.NODE_ENV !== 'production') {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.21';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production') {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys."
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== 'production') {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (
          process.env.NODE_ENV !== 'production' &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(0), __webpack_require__(5).setImmediate))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


module.exports = {
    methods:{
    	addCurrentEntry() {
    		debugger;
    		const tableEntry = { 
    			firstName: this.newEntry.firstName,
    			lastName: this.newEntry.lastName,
    			rating: this.newEntry.rating
    		};

  			this.tableData.push(tableEntry);
		}
    },
    data: function(){
        return {

        	newEntry: {
    			firstName: null,
    			lastName: null,
    			rating: '1',
  			},

  			tableData: [
    			{ rating: 1, firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
    			{ rating: 2, firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
    			{ rating: 3, firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
    			{ rating: 4, firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
  			]

        }; // end of return, return one object
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_index_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fundamental_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fundamental_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fundamental_vue__);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_fundamental_vue___default.a);


new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: "#demo",
    components: {
        app: __WEBPACK_IMPORTED_MODULE_1__src_index_vue__["default"]
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(6);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2964abc9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(14);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(8)
}
var normalizeComponent = __webpack_require__(13)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2964abc9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2964abc9", Component.options)
  } else {
    hotAPI.reload("data-v-2964abc9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("5f070884", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2964abc9\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2964abc9\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\nh2{\n    color: red;\n}\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Jerry: Hello, World!")]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("FdAlert", { attrs: { dismissible: "" } }, [
          _vm._v("\r\n      Happy building! 🚀\r\n\t")
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "FdTable",
              { attrs: { selectionMode: "single", data: _vm.tableData } },
              [
                _c("FdTableColumn", {
                  attrs: { sortable: "", prop: "rating", label: "Rating" }
                }),
                _vm._v(" "),
                _c("FdTableColumn", {
                  attrs: {
                    sortable: "",
                    prop: "firstName",
                    label: "First Name"
                  }
                }),
                _vm._v(" "),
                _c("FdTableColumn", {
                  attrs: { sortable: "", prop: "lastName", label: "Last Name" }
                }),
                _vm._v(" "),
                _c("FdTableColumn", {
                  attrs: { label: "Initials" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c(
                            "span",
                            { staticStyle: { "margin-left": "10px" } },
                            [
                              _vm._v(
                                _vm._s(scope.row.firstName) +
                                  "_" +
                                  _vm._s(scope.row.lastName)
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FdFormSet",
              [
                _c(
                  "FdFormItem",
                  [
                    _c("FdFormLabel", [_vm._v("First Name")]),
                    _vm._v(" "),
                    _c("FdInput", {
                      attrs: { placeholder: "Enter something nice" },
                      model: {
                        value: _vm.newEntry.firstName,
                        callback: function($$v) {
                          _vm.$set(_vm.newEntry, "firstName", $$v)
                        },
                        expression: "newEntry.firstName"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FdFormItem",
                  [
                    _c("FdFormLabel", [_vm._v("Last Name")]),
                    _vm._v(" "),
                    _c("FdInput", {
                      attrs: { placeholder: "Enter something nice" },
                      model: {
                        value: _vm.newEntry.lastName,
                        callback: function($$v) {
                          _vm.$set(_vm.newEntry, "lastName", $$v)
                        },
                        expression: "newEntry.lastName"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FdFormItem",
                  [
                    _c("FdFormLabel", [_vm._v("Rating")]),
                    _vm._v(" "),
                    _c(
                      "FdCombobox",
                      {
                        model: {
                          value: _vm.newEntry.rating,
                          callback: function($$v) {
                            _vm.$set(_vm.newEntry, "rating", $$v)
                          },
                          expression: "newEntry.rating"
                        }
                      },
                      [
                        _c(
                          "FdMenuItem",
                          { attrs: { value: "1", title: "1" } },
                          [_vm._v("1")]
                        ),
                        _vm._v(" "),
                        _c(
                          "FdMenuItem",
                          { attrs: { value: "2", title: "2" } },
                          [_vm._v("2")]
                        ),
                        _vm._v(" "),
                        _c(
                          "FdMenuItem",
                          { attrs: { value: "3", title: "3" } },
                          [_vm._v("3")]
                        ),
                        _vm._v(" "),
                        _c(
                          "FdMenuItem",
                          { attrs: { value: "4", title: "4" } },
                          [_vm._v("4")]
                        ),
                        _vm._v(" "),
                        _c(
                          "FdMenuItem",
                          { attrs: { value: "4", title: "5" } },
                          [_vm._v("5")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("FdButton", { on: { click: _vm.addCurrentEntry } }, [
              _vm._v("Add Entry")
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2964abc9", esExports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(1));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fundamentalvue"] = factory(require("vue"));
	else
		root["fundamentalvue"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
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

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
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

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1c4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("9b43");
var $export = __webpack_require__("5ca1");
var toObject = __webpack_require__("4bf8");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var toLength = __webpack_require__("9def");
var createProperty = __webpack_require__("f1ae");
var getIterFn = __webpack_require__("27ee");

$export($export.S + $export.F * !__webpack_require__("5cc5")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
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

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "37c8":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("2b4c");


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a72":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var LIBRARY = __webpack_require__("2d00");
var wksExt = __webpack_require__("37c8");
var defineProperty = __webpack_require__("86cc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
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

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("c26b");
var validate = __webpack_require__("b39a");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("e0b8")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("02f4")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("01f9")(String, 'String', function (iterated) {
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

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "65d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v6.3.2
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("8bbf"));

var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

exports.default = Component;
exports.createDecorator = createDecorator;
exports.mixins = mixins;


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
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

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
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

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7bbc":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6821");
var gOPN = __webpack_require__("9093").f;
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

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "8a81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var DESCRIPTORS = __webpack_require__("9e1e");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var META = __webpack_require__("67ab").KEY;
var $fails = __webpack_require__("79e5");
var shared = __webpack_require__("5537");
var setToStringTag = __webpack_require__("7f20");
var uid = __webpack_require__("ca5a");
var wks = __webpack_require__("2b4c");
var wksExt = __webpack_require__("37c8");
var wksDefine = __webpack_require__("3a72");
var enumKeys = __webpack_require__("d4c0");
var isArray = __webpack_require__("1169");
var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var createDesc = __webpack_require__("4630");
var _create = __webpack_require__("2aeb");
var gOPNExt = __webpack_require__("7bbc");
var $GOPD = __webpack_require__("11e9");
var $DP = __webpack_require__("86cc");
var $keys = __webpack_require__("0d58");
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
  __webpack_require__("9093").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("52a7").f = $propertyIsEnumerable;
  __webpack_require__("2621").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("2d00")) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("32e9")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "92fa":
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "9a91":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
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

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a6c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cad0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColorClassName", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isColor", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f42e");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d30d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconClass", function() { return _icon__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bc1f");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plugin__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac4d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3a72")('asyncIterator');


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "bc1f":
/***/ (function(module, exports) {



/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c26b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("86cc").f;
var create = __webpack_require__("2aeb");
var redefineAll = __webpack_require__("dcbc");
var ctx = __webpack_require__("9b43");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var $iterDefine = __webpack_require__("01f9");
var step = __webpack_require__("d53b");
var setSpecies = __webpack_require__("7a56");
var DESCRIPTORS = __webpack_require__("9e1e");
var fastKey = __webpack_require__("67ab").fastKey;
var validate = __webpack_require__("b39a");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
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

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cad0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backgroundColorClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isColor; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("456d");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);



var colorMapping = {
  'action-1': 'Action 1',
  'text-1': 'Text 1',
  'text-2': 'Text 2',
  'text-3': 'Text 3',
  'background-1': 'Background 1',
  'background-2': 'Background 2',
  'neutral-1': 'Neutral 1',
  'neutral-2': 'Neutral 2',
  'neutral-3': 'Neutral 3',
  'status-1': 'Status 1',
  'status-2': 'Status 2',
  'status-3': 'Status 3',
  'accent-1': 'Accent 1',
  'accent-2': 'Accent 2',
  'accent-3': 'Accent 3',
  'accent-4': 'Accent 4',
  'accent-5': 'Accent 5',
  'accent-6': 'Accent 6',
  'accent-7': 'Accent 7',
  'accent-8': 'Accent 8',
  'accent-9': 'Accent 9',
  'accent-10': 'Accent 10',
  'accent-11': 'Accent 11',
  'accent-12': 'Accent 12',
  'accent-13': 'Accent 13',
  'accent-14': 'Accent 14',
  'accent-15': 'Accent 15'
};
var Colors = Object.keys(colorMapping);
var backgroundColorClassName = function backgroundColorClassName(color) {
  return "fd-has-background-color-".concat(color);
};
var isColor = function isColor(raw) {
  if (typeof raw !== 'string') {
    return false;
  }

  return raw in colorMapping != null;
};

/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
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

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

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

/***/ "d263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("386b")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d30d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconClass; });
var iconClass = function iconClass(icon) {
  return "sap-icon--".concat(icon);
};

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4c0":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
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

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "da10":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "e0b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var redefineAll = __webpack_require__("dcbc");
var meta = __webpack_require__("67ab");
var forOf = __webpack_require__("4a59");
var anInstance = __webpack_require__("f605");
var isObject = __webpack_require__("d3f4");
var fails = __webpack_require__("79e5");
var $iterDetect = __webpack_require__("5cc5");
var setToStringTag = __webpack_require__("7f20");
var inheritIfRequired = __webpack_require__("5dbc");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f42e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shortUuid; });
var shortUuid = function shortUuid() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Animations_namespaceObject = {};
__webpack_require__.r(Animations_namespaceObject);
__webpack_require__.d(Animations_namespaceObject, "ExpandTransition", function() { return ExpandTransition_ExpandTransition; });
var components_Panel_namespaceObject = {};
__webpack_require__.r(components_Panel_namespaceObject);
__webpack_require__.d(components_Panel_namespaceObject, "Panel", function() { return Panel_Panel_Panel; });
__webpack_require__.d(components_Panel_namespaceObject, "PanelGrid", function() { return PanelGrid_PanelGrid; });
var components_Menu_namespaceObject = {};
__webpack_require__.r(components_Menu_namespaceObject);
__webpack_require__.d(components_Menu_namespaceObject, "Menu", function() { return Menu_Menu; });
__webpack_require__.d(components_Menu_namespaceObject, "MenuList", function() { return MenuList_MenuList; });
__webpack_require__.d(components_Menu_namespaceObject, "MenuItem", function() { return MenuItem_MenuItem; });
var components_Button_namespaceObject = {};
__webpack_require__.r(components_Button_namespaceObject);
__webpack_require__.d(components_Button_namespaceObject, "Button", function() { return Button_Button; });
__webpack_require__.d(components_Button_namespaceObject, "ButtonGroup", function() { return ButtonGroup_ButtonGroup; });
var components_Popover_namespaceObject = {};
__webpack_require__.r(components_Popover_namespaceObject);
__webpack_require__.d(components_Popover_namespaceObject, "Popover", function() { return Popover_Popover; });
var Form_namespaceObject = {};
__webpack_require__.r(Form_namespaceObject);
__webpack_require__.d(Form_namespaceObject, "FormItem", function() { return FormItem_FormItem; });
__webpack_require__.d(Form_namespaceObject, "FormLabel", function() { return FormLabel_FormLabel; });
__webpack_require__.d(Form_namespaceObject, "FormMessage", function() { return FormMessage_FormMessage; });
__webpack_require__.d(Form_namespaceObject, "FormSet", function() { return FormSet_FormSet; });
__webpack_require__.d(Form_namespaceObject, "FormGroup", function() { return FormGroup_FormGroup; });
__webpack_require__.d(Form_namespaceObject, "Legend", function() { return Legend_Legend; });
__webpack_require__.d(Form_namespaceObject, "FieldSet", function() { return FieldSet_FieldSet; });
__webpack_require__.d(Form_namespaceObject, "Input", function() { return Input_Input; });
__webpack_require__.d(Form_namespaceObject, "InputGroup", function() { return InputGroup_InputGroup; });
__webpack_require__.d(Form_namespaceObject, "Select", function() { return Select_Select; });
__webpack_require__.d(Form_namespaceObject, "TextArea", function() { return TextArea_TextArea; });
__webpack_require__.d(Form_namespaceObject, "Toggle", function() { return Toggle_Toggle; });
var components_Combobox_namespaceObject = {};
__webpack_require__.r(components_Combobox_namespaceObject);
__webpack_require__.d(components_Combobox_namespaceObject, "Combobox", function() { return Combobox_Combobox; });
var components_Tabs_namespaceObject = {};
__webpack_require__.r(components_Tabs_namespaceObject);
__webpack_require__.d(components_Tabs_namespaceObject, "Tabs", function() { return Tabs_Tabs; });
__webpack_require__.d(components_Tabs_namespaceObject, "TabItem", function() { return TabItem_TabItem; });
var components_SideNav_namespaceObject = {};
__webpack_require__.r(components_SideNav_namespaceObject);
__webpack_require__.d(components_SideNav_namespaceObject, "SideNav", function() { return SideNav_SideNav; });
__webpack_require__.d(components_SideNav_namespaceObject, "SideNavList", function() { return SideNavList_SideNavList; });
__webpack_require__.d(components_SideNav_namespaceObject, "SideNavItem", function() { return SideNavItem_SideNavItem; });
var components_Breadcrumb_namespaceObject = {};
__webpack_require__.r(components_Breadcrumb_namespaceObject);
__webpack_require__.d(components_Breadcrumb_namespaceObject, "Breadcrumb", function() { return Breadcrumb_Breadcrumb; });
__webpack_require__.d(components_Breadcrumb_namespaceObject, "BreadcrumbItem", function() { return BreadcrumbItem_BreadcrumbItem; });
var components_ListGroup_namespaceObject = {};
__webpack_require__.r(components_ListGroup_namespaceObject);
__webpack_require__.d(components_ListGroup_namespaceObject, "ListGroup", function() { return ListGroup_ListGroup; });
__webpack_require__.d(components_ListGroup_namespaceObject, "ListGroupItem", function() { return ListGroupItem_ListGroupItem; });
var components_Table_namespaceObject = {};
__webpack_require__.r(components_Table_namespaceObject);
__webpack_require__.d(components_Table_namespaceObject, "Table", function() { return Table_Table; });
__webpack_require__.d(components_Table_namespaceObject, "TableColumn", function() { return TableColumn_TableColumn; });
var Layout_namespaceObject = {};
__webpack_require__.r(Layout_namespaceObject);
__webpack_require__.d(Layout_namespaceObject, "Col", function() { return Col_Col; });
__webpack_require__.d(Layout_namespaceObject, "Container", function() { return Container_Container; });
__webpack_require__.d(Layout_namespaceObject, "Section", function() { return Section_Section; });
__webpack_require__.d(Layout_namespaceObject, "Ui", function() { return Ui_Ui; });
__webpack_require__.d(Layout_namespaceObject, "Shell", function() { return Shell_Shell; });
__webpack_require__.d(Layout_namespaceObject, "ShellHeader", function() { return ShellHeader_ShellHeader; });
__webpack_require__.d(Layout_namespaceObject, "ShellFooter", function() { return ShellFooter_ShellFooter; });
__webpack_require__.d(Layout_namespaceObject, "ShellBar", function() { return ShellBar_ShellBar; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarGroup", function() { return ShellBarGroup_ShellBarGroup; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarLogo", function() { return ShellBarLogo_ShellBarLogo; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarProduct", function() { return ShellBarProduct_ShellBarProduct; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarActions", function() { return ShellBarActions_ShellBarActions; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarAction", function() { return ShellBarAction_ShellBarAction; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarUserMenu", function() { return ShellBarUserMenu_ShellBarUserMenu; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarProductSwitcher", function() { return ShellBarProductSwitcher_ShellBarProductSwitcher; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarProductSwitcherItem", function() { return ShellBarProductSwitcherItem_ShellBarProductSwitcherItem; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarProductSwitcherItemImg", function() { return ShellBarProductSwitcherItemImg_ShellBarProductSwitcherItemImg; });
__webpack_require__.d(Layout_namespaceObject, "ShellBarProductSwitcherItemTitle", function() { return ShellBarProductSwitcherItemTitle_ShellBarProductSwitcherItemTitle; });
__webpack_require__.d(Layout_namespaceObject, "App", function() { return App_App; });
__webpack_require__.d(Layout_namespaceObject, "AppNavigation", function() { return AppNavigation_AppNavigation; });
__webpack_require__.d(Layout_namespaceObject, "AppMain", function() { return AppMain_AppMain; });
var components_Tile_namespaceObject = {};
__webpack_require__.r(components_Tile_namespaceObject);
__webpack_require__.d(components_Tile_namespaceObject, "Tile", function() { return Tile_Tile; });
__webpack_require__.d(components_Tile_namespaceObject, "ProductTile", function() { return ProductTile_ProductTile; });
var TileGrid_namespaceObject = {};
__webpack_require__.r(TileGrid_namespaceObject);
__webpack_require__.d(TileGrid_namespaceObject, "TileGrid", function() { return TileGrid_TileGrid; });
var components_SearchInput_namespaceObject = {};
__webpack_require__.r(components_SearchInput_namespaceObject);
__webpack_require__.d(components_SearchInput_namespaceObject, "SearchInput", function() { return SearchInput_SearchInput; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
var vue_class_component_common = __webpack_require__("65d9");
var vue_class_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_class_component_common);

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 7.2.0 MIT LICENSE copyright 2018 kaorun343 */




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
        componentOptions.model = { prop: k, event: event || k };
    });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function vue_property_decorator_Prop(options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./src/util/component-name.ts
var componentName = function componentName(plain) {
  return "Fd".concat(plain);
};
// CONCATENATED MODULE: ./src/util/directive-name.ts
var directiveName = function directiveName(plain) {
  return plain;
};
// CONCATENATED MODULE: ./src/util/target-value.ts
var hasValue = function hasValue(arg) {
  return arg.value != null;
};

var targetValue = function targetValue(event) {
  var target = event.target;

  if (target == null) {
    return null;
  }

  if (hasValue(target)) {
    return target.value;
  }
};
// CONCATENATED MODULE: ./src/util/index.ts



var noop = function noop() {};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// CONCATENATED MODULE: ./src/api/ApiProp.ts






var __unspecifiedValue = Symbol();

var ApiProp_ApiProp =
/*#__PURE__*/
function () {
  function ApiProp(_ref) {
    var key = _ref.key,
        description = _ref.description,
        required = _ref.required,
        defaultValue = _ref.defaultValue;

    _classCallCheck(this, ApiProp);

    this.types = [];
    this.required = false;
    this._acceptedValues = [];
    this.key = key;
    this._description = description;
    this.required = required || false;
    this.defaultValue = defaultValue;
  }

  _createClass(ApiProp, [{
    key: "type",
    value: function type() {
      var _this$types;

      (_this$types = this.types).push.apply(_this$types, arguments);

      return this;
    }
  }, {
    key: "acceptValues",
    value: function acceptValues() {
      var _this$_acceptedValues;

      (_this$_acceptedValues = this._acceptedValues).push.apply(_this$_acceptedValues, arguments);

      return this;
    }
  }, {
    key: "describe",
    value: function describe(text) {
      this._description = text;
      return this;
    }
  }, {
    key: "description",
    get: function get() {
      return this._description;
    }
  }, {
    key: "formattedAcceptedValues",
    get: function get() {
      return this._acceptedValues.length === 0 ? '—' : this._acceptedValues.join(', ');
    }
  }, {
    key: "formattedType",
    get: function get() {
      var names = this.types.map(function (type) {
        if (typeof type === 'string') {
          return type;
        }

        return type.name;
      });

      if (names.length === 0) {
        return '—';
      }

      return names.join(', ');
    }
  }], [{
    key: "unspecifiedValue",
    value: function unspecifiedValue() {
      return __unspecifiedValue;
    }
  }]);

  return ApiProp;
}();
// CONCATENATED MODULE: ./src/api/ApiEvent.ts

var ApiEvent_ApiEvent = function ApiEvent(name, description, parameter) {
  _classCallCheck(this, ApiEvent);

  this.name = name;
  this.description = description;
  this.parameter = parameter;
};
// CONCATENATED MODULE: ./src/api/ApiSlot.ts

var ApiSlot_ApiSlot = function ApiSlot(name, description) {
  _classCallCheck(this, ApiSlot);

  this.name = name;
  this.description = description;
};
// CONCATENATED MODULE: ./src/api/Api.ts







var Api_Api =
/*#__PURE__*/
function () {
  function Api(humanName) {
    _classCallCheck(this, Api);

    this.humanName = humanName;
    this.props = [];
    this.events = [];
    this.slots = [];
  }

  _createClass(Api, [{
    key: "addProp",
    value: function addProp(prop) {
      this.props.push(prop);
    }
  }, {
    key: "addEvent",
    value: function addEvent(event) {
      this.events.push(event);
      return this;
    }
  }, {
    key: "addSlot",
    value: function addSlot(slot) {
      this.slots.push(slot);
      return this;
    }
  }], [{
    key: "slot",
    value: function slot(name) {
      var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return Object(vue_class_component_common["createDecorator"])(function (options) {
        var slot = new ApiSlot_ApiSlot(name, description);
        var api = options.$api || new Api();
        options.$api = api.addSlot(slot);
      });
    }
  }, {
    key: "defaultSlot",
    value: function defaultSlot(description) {
      return this.slot('', description);
    }
  }, {
    key: "Event",
    value: function Event(name, description, parameter) {
      return Object(vue_class_component_common["createDecorator"])(function (options) {
        var api = options.$api || new Api();
        api.addEvent(new ApiEvent_ApiEvent(name, description, parameter));
        options.$api = api;
      });
    }
  }, {
    key: "Component",
    value: function Component(humanName) {
      var build = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      return Object(vue_class_component_common["createDecorator"])(function (options, key) {
        var api = options.$api || new Api(humanName);
        api.humanName = humanName;
        build(api);
        options.$api = api;
      });
    }
  }, {
    key: "Prop",
    value: function Prop(description) {
      var build = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      return Object(vue_class_component_common["createDecorator"])(function (options, key) {
        var prop = new ApiProp_ApiProp({
          key: key,
          description: description
        });
        var props = options.props;

        if (props !== undefined) {
          if (!Array.isArray(props)) {
            if (key in props) {
              var validator = props[key];

              if (_typeof(validator) === 'object') {
                if ('required' in validator) {
                  prop.required = validator.required || false;
                }

                if ('default' in validator) {
                  prop.defaultValue = validator.default;
                }
              }
            }
          }

          build(prop);
        }

        var api = options.$api || new Api();
        api.addProp(prop);
        options.$api = api;
      });
    }
  }]);

  return Api;
}();
// CONCATENATED MODULE: ./src/api/ApiCollection.ts


var ApiCollection_ApiCollection =
/*#__PURE__*/
function () {
  function ApiCollection() {
    var apis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, ApiCollection);

    this.apis = apis;
  }

  _createClass(ApiCollection, [{
    key: "add",
    value: function add(api) {
      this.apis.push(api);
    }
  }]);

  return ApiCollection;
}();
// CONCATENATED MODULE: ./src/api/index.ts



 // We cannot use the same syntax as above because of an issue with babel + webpack + typescript:
// see: https://github.com/babel/babel-loader/issues/603
// Workaround is to export *.


// CONCATENATED MODULE: ./src/vue-tsx.ts






var vue_tsx_TsxComponent =
/*#__PURE__*/
function (_Vue) {
  _inherits(TsxComponent, _Vue);

  function TsxComponent() {
    _classCallCheck(this, TsxComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TsxComponent).apply(this, arguments));
  }

  return TsxComponent;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);


// CONCATENATED MODULE: ./src/components/ActionBar.tsx











var ActionBar_ActionBar =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ActionBar, _TsxComponent);

  function ActionBar() {
    _classCallCheck(this, ActionBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActionBar).apply(this, arguments));
  }

  _createClass(ActionBar, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var actions = this.$slots.default;
      var hasActions = !!actions;
      var back = this.$slots.back;
      var hasBack = !!back;
      var title = this.title;
      var description = this.description;
      return h("div", {
        "class": 'fd-action-bar'
      }, [hasBack && h("div", {
        "class": 'fd-action-bar__back'
      }, [back]), h("div", {
        "class": 'fd-action-bar__header'
      }, [h("h1", {
        "class": 'fd-action-bar__title'
      }, [title]), !!description && h("p", {
        "class": 'fdfd-action-bar__description'
      }, [description])]), hasActions && h("div", {
        "class": 'fd-action-bar__actions'
      }, [actions])]);
    }
  }]);

  return ActionBar;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('title', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  required: true,
  type: String
})], ActionBar_ActionBar.prototype, "title", void 0);

__decorate([Api_Api.Prop('description', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  required: false,
  default: null,
  type: String
})], ActionBar_ActionBar.prototype, "description", void 0);

ActionBar_ActionBar = __decorate([vue_class_component_common_default()({
  name: componentName('ActionBar')
}), Api_Api.Component('Action Bar'), Api_Api.slot('back', 'custom back button'), Api_Api.defaultSlot('custom action buttons')], ActionBar_ActionBar);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./src/mixins/Uid.tsx







var makeId = function makeId() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var Uid_Uid =
/*#__PURE__*/
function (_Vue) {
  _inherits(Uid, _Vue);

  function Uid() {
    _classCallCheck(this, Uid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Uid).apply(this, arguments));
  }

  return Uid;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([vue_property_decorator_Prop({
  type: String,
  required: false,
  default: function _default() {
    return makeId();
  }
})], Uid_Uid.prototype, "uid", void 0);

Uid_Uid = __decorate([vue_class_component_common_default()({
  name: 'Uid'
})], Uid_Uid);

// EXTERNAL MODULE: ./src/lib/index.ts
var lib = __webpack_require__("a6c2");

// CONCATENATED MODULE: ./src/mixins/Icon.tsx











var Icon_Icon =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Icon, _TsxComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "iconClassName",
    get: function get() {
      var icon = this.icon;

      if (icon == null) {
        return null;
      }

      return Object(lib["iconClass"])(icon);
    }
  }]);

  return Icon;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('icon name', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null
})], Icon_Icon.prototype, "icon", void 0);

Icon_Icon = __decorate([vue_class_component_common_default()({
  name: 'Icon'
})], Icon_Icon);

// CONCATENATED MODULE: ./src/mixins/index.ts


// CONCATENATED MODULE: ./src/components/Alert/Alert.tsx














 // Alert Types

var typeMapping = {
  default: 'Default Alert',
  warning: 'Warning Alert',
  error: 'Error Alert',
  information: 'Information Alert',
  success: 'Success Alert'
};
var AlertTypes = Object.keys(typeMapping);

var Alert_Alert =
/*#__PURE__*/
function (_mixins) {
  _inherits(Alert, _mixins);

  function Alert() {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).apply(this, arguments));
    _this.currentVisible = _this.visible;
    return _this;
  }

  _createClass(Alert, [{
    key: "didChangeVisible",
    value: function didChangeVisible(visible) {
      this.currentVisible = visible;
      this.$emit('visible', this.currentVisible);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var content = this.$slots.default;
      return h("transition", {
        attrs: {
          name: 'fade'
        }
      }, [h("div", {
        attrs: {
          id: this.uid,
          role: 'alert'
        },
        directives: [{
          name: "show",
          value: this.currentVisible
        }],
        "class": this.classes
      }, [this.dismissible && h("button", {
        "class": 'fd-alert__close',
        attrs: {
          "aria-controls": this.uid,
          "aria-label": 'Close'
        },
        on: {
          "click": this.dismiss
        }
      }), content])]);
    }
  }, {
    key: "dismiss",
    value: function dismiss() {
      this.currentVisible = false;
      this.$emit('dismiss');
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-alert': true,
        'fd-alert--dismissible': this.dismissible,
        'fd-alert--warning': this.type === 'warning',
        'fd-alert--error': this.type === 'error',
        'fd-alert--information': this.type === 'information',
        'fd-alert--success': this.type === 'success'
      };
    }
  }]);

  return Alert;
}(Object(vue_class_component_common["mixins"])(Uid_Uid));

__decorate([Api_Api.Prop('whether alert is dismissible', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: true
})], Alert_Alert.prototype, "dismissible", void 0);

__decorate([Model('visible', {
  default: true,
  type: Boolean
}), Api_Api.Prop('whether alert is visible', function (prop) {
  return prop.type(Boolean);
})], Alert_Alert.prototype, "visible", void 0);

__decorate([Watch('visible', {
  immediate: true
})], Alert_Alert.prototype, "didChangeVisible", null);

__decorate([Api_Api.Prop('alert type', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(AlertTypes));
}), vue_property_decorator_Prop({
  type: String,
  default: 'default'
})], Alert_Alert.prototype, "type", void 0);

Alert_Alert = __decorate([vue_class_component_common_default()({
  name: componentName('Alert')
}), Api_Api.Component('Alert'), Api_Api.Event('dismiss', 'Sent when the dismiss button is clicked'), Api_Api.defaultSlot('alert content')], Alert_Alert);

// CONCATENATED MODULE: ./src/components/Alert/index.ts

// CONCATENATED MODULE: ./src/components/Icon.tsx
















var sizeMapping = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
  xl: 'Extra Large'
};
var IconSizes = Object.keys(sizeMapping);

var components_Icon_Icon =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Icon, _TsxComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": this.classes
      });
    }
  }, {
    key: "classes",
    get: function get() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "sap-icon--".concat(this.name), true), _defineProperty(_ref, 'sap-icon--s', this.size === 's'), _defineProperty(_ref, 'sap-icon--m', this.size === 'm'), _defineProperty(_ref, 'sap-icon--l', this.size === 'l'), _defineProperty(_ref, 'sap-icon--xl', this.size === 'xl'), _ref;
    }
  }]);

  return Icon;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('icon name', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: true
})], components_Icon_Icon.prototype, "name", void 0);

__decorate([Api_Api.Prop('icon size', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(IconSizes));
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], components_Icon_Icon.prototype, "size", void 0);

components_Icon_Icon = __decorate([vue_class_component_common_default()({
  name: componentName('Icon')
}), Api_Api.Component('Icon')], components_Icon_Icon);

// EXTERNAL MODULE: ./src/components/Animations/ExpandTransition.sass
var Animations_ExpandTransition = __webpack_require__("da10");

// CONCATENATED MODULE: ./src/components/Animations/ExpandTransition.tsx








 // Use data('Key') when you want to create a dataset-key. By doing so you ensure to only get properly
// namespaces keys.

var dataKey = function dataKey(name) {
  return "fdExpandTransition".concat(name);
};

var addClass = function addClass(_ref, className) {
  var classList = _ref.classList;

  if (classList.contains(className)) {
    return;
  }

  classList.add(className);
};

var removeClass = function removeClass(_ref2, className) {
  var classList = _ref2.classList;

  if (!classList.contains(className)) {
    return;
  }

  classList.remove(className);
}; // Grabbed from Element


var ExpandTransition_ExpandTransition =
/*#__PURE__*/
function (_Vue) {
  _inherits(ExpandTransition, _Vue);

  function ExpandTransition() {
    _classCallCheck(this, ExpandTransition);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpandTransition).apply(this, arguments));
  }

  _createClass(ExpandTransition, [{
    key: "beforeEnter",
    value: function beforeEnter(el) {
      addClass(el, 'collapse-transition');
      el.dataset[dataKey('OldPaddingTop')] = el.style.paddingTop || undefined;
      el.dataset[dataKey('OldPaddingBottom')] = el.style.paddingBottom || undefined;
      el.style.height = '';
      el.style.paddingTop = '';
      el.style.paddingBottom = '';
    }
  }, {
    key: "enter",
    value: function enter(el) {
      el.dataset[dataKey('OldOverflow')] = el.style.overflow || undefined;

      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset[dataKey('OldPaddingTop')] || null;
        el.style.paddingBottom = el.dataset[dataKey('OldPaddingBottom')] || null;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset[dataKey('OldPaddingTop')] || null;
        el.style.paddingBottom = el.dataset[dataKey('OldPaddingBottom')] || null;
      }

      el.style.overflow = 'hidden';
    }
  }, {
    key: "afterEnter",
    value: function afterEnter(el) {
      removeClass(el, 'collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset[dataKey('OldOverflow')] || null;
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave(el) {
      el.dataset[dataKey('OldPaddingTop')] = el.style.paddingTop || undefined;
      el.dataset[dataKey('OldPaddingBottom')] = el.style.paddingBottom || undefined;
      el.dataset[dataKey('OldOverflow')] = el.style.overflow || undefined;
      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
    }
  }, {
    key: "leave",
    value: function leave(el) {
      if (el.scrollHeight !== 0) {
        addClass(el, 'collapse-transition');
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
      }
    }
  }, {
    key: "afterLeave",
    value: function afterLeave(el) {
      removeClass(el, 'collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset[dataKey('OldOverflow')] || null;
      el.style.paddingTop = el.dataset[dataKey('OldPaddingTop')] || null;
      el.style.paddingBottom = el.dataset[dataKey('OldPaddingBottom')] || null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      return h("transition", {
        attrs: {
          name: 'expand'
        },
        on: {
          "after-leave": function afterLeave(element) {
            return _this.afterLeave(element);
          },
          "leave": function leave(element) {
            return _this.leave(element);
          },
          "before-leave": function beforeLeave(element) {
            return _this.beforeLeave(element);
          },
          "after-enter": function afterEnter(element) {
            return _this.afterEnter(element);
          },
          "enter": function enter(element) {
            return _this.enter(element);
          },
          "before-enter": function beforeEnter(element) {
            return _this.beforeEnter(element);
          }
        }
      }, [this.$slots.default]);
    }
  }]);

  return ExpandTransition;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

ExpandTransition_ExpandTransition = __decorate([vue_class_component_common_default()({
  name: componentName('ExpandTransition')
})], ExpandTransition_ExpandTransition);

// CONCATENATED MODULE: ./src/components/Animations/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./src/components/Panel/Panel.css
var Panel_Panel = __webpack_require__("9a91");

// CONCATENATED MODULE: ./src/components/Panel/Panel.tsx















var Panel_Panel_Panel =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Panel, _TsxComponent);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Panel).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      var body = this.$slots.default;
      var title = this.title;
      var description = this.description;
      var actions = this.$slots.actions;
      var hasActions = !!actions;
      var needsHeader = title != null || description != null || actions != null;
      var filters = this.$slots.filters;
      var footer = this.$slots.footer;
      var hasFooter = !!footer;
      var hasFilters = !!filters;

      function renderHeader() {
        var needsHead = title != null || description != null;
        return h("div", {
          "class": 'fd-panel__header'
        }, [needsHead && h("div", {
          "class": 'fd-panel__head'
        }, [title && h("h1", {
          "class": 'fd-panel__title'
        }, [title]), description && h("p", {
          "class": 'fd-panel__description'
        }, [description])]), hasActions && h("div", {
          "class": 'fd-panel__actions'
        }, [actions])]);
      }

      var bodyClasses = function bodyClasses() {
        return {
          'fd-panel__body': true,
          'vf-panel__condensed': _this.condensed
        };
      };

      var footerClasses = function footerClasses() {
        return {
          'fd-panel__footer': true,
          'vf-panel__condensed': _this.condensedFooter
        };
      };

      return h("div", {
        "class": this.classObject
      }, [needsHeader && renderHeader(), hasFilters && h("div", {
        "class": 'fd-panel__filters'
      }, [filters]), h("div", {
        "class": bodyClasses()
      }, [body]), hasFooter && h("div", {
        "class": footerClasses()
      }, [footer])]);
    }
  }, {
    key: "classObject",
    get: function get() {
      var _this2 = this;

      var spanObject = function spanObject() {
        var span = _this2.span;

        if (typeof span === 'number') {
          return _defineProperty({}, "fd-has-grid-column-span-".concat(span), true);
        }

        return {};
      };

      return _objectSpread({}, spanObject(), {
        'fd-panel': true
      });
    }
  }]);

  return Panel;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('title', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Panel_Panel_Panel.prototype, "title", void 0);

__decorate([Api_Api.Prop('description', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Panel_Panel_Panel.prototype, "description", void 0);

__decorate([Api_Api.Prop('span', function (prop) {
  return prop.type(Number);
}), vue_property_decorator_Prop({
  type: Number,
  default: null,
  required: false
})], Panel_Panel_Panel.prototype, "span", void 0);

__decorate([Api_Api.Prop('whether the panel body is condensed (has no padding)', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Panel_Panel_Panel.prototype, "condensed", void 0);

__decorate([Api_Api.Prop('whether the panel footer is condensed (has no padding)', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Panel_Panel_Panel.prototype, "condensedFooter", void 0);

Panel_Panel_Panel = __decorate([vue_class_component_common_default()({
  name: componentName('Panel')
}), Api_Api.Component('Panel'), Api_Api.defaultSlot('Panel Body'), Api_Api.slot('actions', 'Panel Actions'), Api_Api.slot('filters', 'Custom Panel Filters'), Api_Api.slot('footer', 'Custom Panel Footer')], Panel_Panel_Panel);

// CONCATENATED MODULE: ./src/components/Panel/PanelGrid.tsx

















var colMapping = {
  2: '2-Column Grid',
  3: '3-Column Grid',
  4: '4-Column Grid',
  5: '5-Column Grid',
  6: '6-Column Grid'
};
var Cols = Object.keys(colMapping).map(function (value) {
  return Number(value);
});

var PanelGrid_PanelGrid =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(PanelGrid, _TsxComponent);

  function PanelGrid() {
    _classCallCheck(this, PanelGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(PanelGrid).apply(this, arguments));
  }

  _createClass(PanelGrid, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      var col = this.col;
      var colClass = col == null ? {} : _defineProperty({}, "fd-panel-grid--".concat(col, "col"), true);
      return _objectSpread({
        'fd-panel-grid': true,
        'fd-panel-grid--nogap': this.nogap
      }, colClass);
    }
  }]);

  return PanelGrid;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('number of columns', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(Number)).acceptValues.apply(_prop$type, _toConsumableArray(Cols));
}), vue_property_decorator_Prop({
  type: Number,
  default: null,
  required: false
})], PanelGrid_PanelGrid.prototype, "col", void 0);

__decorate([Api_Api.Prop('whether there is a gap between the individual panels', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], PanelGrid_PanelGrid.prototype, "nogap", void 0);

PanelGrid_PanelGrid = __decorate([vue_class_component_common_default()({
  name: componentName('PanelGrid')
}), Api_Api.Component('Panel Grid'), Api_Api.defaultSlot('Panels displayed by the grid.')], PanelGrid_PanelGrid);

// CONCATENATED MODULE: ./src/components/Panel/index.ts


// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./src/components/Menu/types.ts


var MENU = Symbol('menu');
var MENU_LIST = Symbol('menuList');
// CONCATENATED MODULE: ./src/components/Menu/Menu.tsx













var Menu_Menu =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Menu, _TsxComponent);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var lists = this.$slots.default;
      return h("nav", {
        "class": this.classes
      }, [lists]);
    }
  }, {
    key: "menuItemDidClick",
    value: function menuItemDidClick(item) {
      this.$emit('select', item);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-menu': true,
        'fd-menu--addon-before': this.canHaveAddon
      };
    }
  }]);

  return Menu;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('whether menu item can have an addon', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], Menu_Menu.prototype, "canHaveAddon", void 0);

Menu_Menu = __decorate([vue_class_component_common_default()({
  name: componentName('Menu'),
  provide: function provide() {
    return _defineProperty({}, MENU, this);
  }
}), Api_Api.Component('Menu'), Api_Api.Event('select', 'Sent when a menu item was selected', ['value', String]), Api_Api.defaultSlot('0 or more menu lists.')], Menu_Menu);

// CONCATENATED MODULE: ./src/components/Menu/MenuList.tsx













var MenuList_MenuList =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(MenuList, _TsxComponent);

  function MenuList() {
    _classCallCheck(this, MenuList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuList).apply(this, arguments));
  }

  _createClass(MenuList, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var items = this.$slots.default;

      var renderList = function renderList() {
        return h("ul", {
          "class": 'fd-menu__list'
        }, [items]);
      };

      var header = this.header;

      if (header == null) {
        return renderList();
      }

      return h("div", {
        "class": 'fd-menu__group'
      }, [h("h1", {
        "class": 'fd-menu__title'
      }, [header]), renderList()]);
    }
  }, {
    key: "menuItemDidClick",
    value: function menuItemDidClick(item) {
      this.$emit('select', item.value);
      var menu = this.menu;

      if (menu) {
        menu.menuItemDidClick(item);
      }
    }
  }]);

  return MenuList;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('header', function (build) {
  build.describe('text displayed in the menu list (group) header').type(Boolean);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], MenuList_MenuList.prototype, "header", void 0);

__decorate([Inject({
  from: MENU,
  default: null
})], MenuList_MenuList.prototype, "menu", void 0);

MenuList_MenuList = __decorate([vue_class_component_common_default()({
  name: componentName('MenuList'),
  provide: function provide() {
    return _defineProperty({}, MENU_LIST, this);
  }
}), Api_Api.Component('Menu List'), Api_Api.Event('select', 'Sent when a menu item was selected', ['item', 'MenuItem']), Api_Api.defaultSlot('0 or more menu items.')], MenuList_MenuList);

// CONCATENATED MODULE: ./src/components/Menu/MenuItem.tsx













var MenuItem_MenuItem =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(MenuItem, _TsxComponent);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      var title = this.$slots.default;
      var addon = this.$slots.addon;
      var canHaveAddon = this.canHaveAddon;
      return h("li", [canHaveAddon && h("div", {
        "class": 'fd-menu__addon-before'
      }, [addon]), h("a", {
        "class": 'fd-menu__item',
        on: {
          "click": function click() {
            var list = _this.menuList;

            if (list) {
              list.menuItemDidClick(_this);
            }

            _this.$emit('click');
          }
        }
      }, [title])]);
    }
  }, {
    key: "canHaveAddon",
    get: function get() {
      var menu = this.menu;

      if (menu == null) {
        return false;
      }

      return menu.canHaveAddon;
    }
  }, {
    key: "title",
    get: function get() {
      var nodes = this.$slots.default || [];

      if (nodes.length > 0) {
        var text = nodes[0].text;
        return text;
      }

      return undefined;
    }
  }]);

  return MenuItem;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('value (can be used to associate a context with the item)', function (prop) {
  return prop.type(String, Number);
}), vue_property_decorator_Prop({
  default: null,
  required: false,
  type: [String, Number]
})], MenuItem_MenuItem.prototype, "value", void 0);

__decorate([Inject({
  from: MENU_LIST,
  default: null
})], MenuItem_MenuItem.prototype, "menuList", void 0);

__decorate([Inject({
  from: MENU,
  default: null
})], MenuItem_MenuItem.prototype, "menu", void 0);

MenuItem_MenuItem = __decorate([vue_class_component_common_default()({
  name: componentName('MenuItem')
}), Api_Api.Component('Menu Item'), Api_Api.Event('click', 'Sent when the itme was clicked'), Api_Api.defaultSlot('Content displayed by the menu item (usually text).'), Api_Api.slot('addon', 'Custom addon (displayed on the left).')], MenuItem_MenuItem);

// CONCATENATED MODULE: ./src/components/Menu/index.ts



// EXTERNAL MODULE: ./node_modules/babel-helper-vue-jsx-merge-props/index.js
var babel_helper_vue_jsx_merge_props = __webpack_require__("92fa");
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props);

// CONCATENATED MODULE: ./src/components/Button/Button.tsx
















 // Styles

var stylingMapping = {
  emphasized: 'Emphasized',
  light: 'Light',
  regular: 'Regular (default)'
};
var ButtonStylings = Object.keys(stylingMapping); // Button Types

var Button_typeMapping = {
  standard: 'Standard',
  positive: 'Positive',
  medium: 'Medium (warning)',
  negative: 'Negative (destructive, error)'
};
var ButtonTypes = Object.keys(Button_typeMapping);
var stateMapping = {
  normal: 'Normal',
  selected: 'Selected',
  disabled: 'Disabled'
};
var ButtonStates = Object.keys(stateMapping);

var Button_Button =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Button, _TsxComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "click",
    value: function click(event) {
      this.$emit('click', event);
      var container = this.buttonContainer;

      if (container != null) {
        container.didClickButton(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      var title = this.$slots.default;
      var pressed = this.isPressed ? {
        'aria-pressed': 'true'
      } : {};
      var attributes = {
        attrs: pressed
      };
      return h("button", babel_helper_vue_jsx_merge_props_default()([attributes, {
        on: {
          "click": function click(event) {
            return _this.click(event);
          }
        },
        "class": this.classes
      }]), [title]);
    }
  }, {
    key: "grouped",
    get: function get() {
      return this.buttonContainer != null;
    }
  }, {
    key: "isPressed",
    get: function get() {
      var container = this.buttonContainer;

      if (container != null) {
        return container.isButtonPressed(this);
      }

      return false;
    }
  }, {
    key: "iconClasses",
    get: function get() {
      var icon = this.icon;

      if (icon == null) {
        return {};
      }

      return _defineProperty({}, "sap-icon--".concat(icon), true);
    }
  }, {
    key: "computedCompact",
    get: function get() {
      var container = this.buttonContainer;

      if (container != null) {
        return container.compact;
      }

      return this.compact;
    }
  }, {
    key: "classes",
    get: function get() {
      return _objectSpread({}, this.iconClasses, {
        // Style
        'fd-button': this.styling === 'regular' && this.computedCompact === false,
        'fd-button--compact': this.computedCompact,
        'fd-button--emphasized': this.styling === 'emphasized',
        'fd-button--light': this.styling === 'light',
        // Button Groups
        'fd-button--grouped': this.grouped,
        // Type
        'fd-button--standard': this.type === 'standard',
        'fd-button--positive': this.type === 'positive',
        'fd-button--medium': this.type === 'medium',
        'fd-button--negative': this.type === 'negative',
        // State
        'is-selected': this.state === 'selected',
        'is-disabled': this.state === 'disabled'
      });
    }
  }]);

  return Button;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('button styling', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(ButtonStylings));
}), vue_property_decorator_Prop({
  type: String,
  default: 'regular',
  required: false
})], Button_Button.prototype, "styling", void 0);

__decorate([Api_Api.Prop('button type', function (prop) {
  var _prop$type2;

  return (_prop$type2 = prop.type(String)).acceptValues.apply(_prop$type2, _toConsumableArray(ButtonTypes));
}), vue_property_decorator_Prop({
  type: String,
  default: 'primary',
  required: false
})], Button_Button.prototype, "type", void 0);

__decorate([Api_Api.Prop('icon displayed in the button', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Button_Button.prototype, "icon", void 0);

__decorate([Api_Api.Prop('whether button is compact', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Button_Button.prototype, "compact", void 0);

__decorate([Api_Api.Prop('button state', function (prop) {
  var _prop$type3;

  return (_prop$type3 = prop.type(String)).acceptValues.apply(_prop$type3, _toConsumableArray(ButtonStates));
}), vue_property_decorator_Prop({
  type: String,
  default: 'normal',
  required: false
})], Button_Button.prototype, "state", void 0);

__decorate([Inject({
  default: null
})], Button_Button.prototype, "buttonContainer", void 0);

Button_Button = __decorate([vue_class_component_common_default()({
  name: componentName('Button')
}), Api_Api.Component('Button'), Api_Api.Event('click', 'Sent when button is clicked'), Api_Api.defaultSlot('button content (usually just text)')], Button_Button);

// CONCATENATED MODULE: ./src/components/Button/ButtonGroup.tsx












var ButtonGroup_ButtonGroup =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ButtonGroup, _TsxComponent);

  function ButtonGroup() {
    var _this;

    _classCallCheck(this, ButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonGroup).apply(this, arguments));
    _this.activeButtonIndex = _this.value || null;
    return _this;
  }

  _createClass(ButtonGroup, [{
    key: "handleNewValue",
    value: function handleNewValue(newValue) {
      this.activeButtonIndex = newValue;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'fd-button-group',
        attrs: {
          role: 'group'
        }
      }, [this.$slots.default]);
    } // ButtonContainer Implementation
    // compact already implemented

  }, {
    key: "didClickButton",
    value: function didClickButton(button) {
      var index = this.indexOfButton(button);
      this.activeButtonIndex = index;
      this.$emit('input', this.activeButtonIndex);
    }
  }, {
    key: "indexOfButton",
    value: function indexOfButton(button) {
      var index = (this.$slots.default || []).indexOf(button.$vnode);
      return index > -1 ? index : null;
    }
  }, {
    key: "isButtonPressed",
    value: function isButtonPressed(button) {
      return this.indexOfButton(button) === this.activeButtonIndex;
    }
  }]);

  return ButtonGroup;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('whether button group is compact', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], ButtonGroup_ButtonGroup.prototype, "compact", void 0);

__decorate([Api_Api.Prop('index of active button', function (prop) {
  return prop.type(Number);
}), vue_property_decorator_Prop({
  type: Number,
  default: null,
  required: false
})], ButtonGroup_ButtonGroup.prototype, "value", void 0);

__decorate([Watch('value', {
  immediate: true
})], ButtonGroup_ButtonGroup.prototype, "handleNewValue", null);

ButtonGroup_ButtonGroup = __decorate([vue_class_component_common_default()({
  name: componentName('ButtonGroup'),
  provide: function provide() {
    return {
      buttonContainer: this
    };
  }
}), Api_Api.Component('Button Group'), Api_Api.Event('input', 'triggers when index of active button changes', ['activeButtonIndex', Number]), Api_Api.defaultSlot('Buttons to be displayed in a group')], ButtonGroup_ButtonGroup);

// CONCATENATED MODULE: ./src/components/Button/index.ts


// CONCATENATED MODULE: ./src/components/ClickAwayContainer.ts














var CLICK_OUTSIDE_EVENT = 'clickOutside'; // Our awesome click away component comes with a few nice enhancements.
// You use this component in order to detect clicks outside of a component/element.
// For example:
//
// <ClickAwayContainer @clickOutside="handleClickOutside">
//   hello world
// </ClickAwayContainer>
//
// This detects all clicks outside of ClickAwayContainer.
// By default ClickAwayContainer is rendering itself as a div-element.
// You can change that by setting the tag-prop.

var ClickAwayContainer_ClickAwayContainer =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ClickAwayContainer, _TsxComponent);

  function ClickAwayContainer() {
    _classCallCheck(this, ClickAwayContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClickAwayContainer).apply(this, arguments));
  }

  _createClass(ClickAwayContainer, [{
    key: "render",
    value: function render(createElement) {
      return createElement(this.tag, this.$slots.default);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      // We have to remove ourselves as a listener but only if we are indeed active (=listening) and
      // there is a documentElement.
      var _document = document,
          documentElement = _document.documentElement;

      if (this.active && documentElement != null) {
        documentElement.removeEventListener('click', this.handleClick, false);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var path = event.composedPath();
      var isClickOutsideSelf = !path.includes(this.$el);

      if (isClickOutsideSelf === false) {
        return;
      } // We now have to check the ignored elements


      var ignoredElements = this.ignoredElements();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ignoredElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var ignoredElement = _step.value;

          if (path.includes(ignoredElement)) {
            return;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$emit(CLICK_OUTSIDE_EVENT, event);
    }
  }, {
    key: "handleActiveDidChange",
    value: function handleActiveDidChange(isActive, wasActive) {
      var _document2 = document,
          documentElement = _document2.documentElement;

      if (documentElement == null) {
        console.warn("v-".concat(this, ": Cannot do anything without a document element."));
        return;
      }

      if (isActive && !wasActive) {
        documentElement.addEventListener('click', this.handleClick, false);
      }

      if (!isActive && wasActive) {
        documentElement.removeEventListener('click', this.handleClick, false);
      }
    }
  }]);

  return ClickAwayContainer;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: 'div'
})], ClickAwayContainer_ClickAwayContainer.prototype, "tag", void 0);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], ClickAwayContainer_ClickAwayContainer.prototype, "active", void 0);

__decorate([vue_property_decorator_Prop({
  type: Function,
  default: function _default() {
    return function () {
      return [];
    };
  }
})], ClickAwayContainer_ClickAwayContainer.prototype, "ignoredElements", void 0);

__decorate([Watch('active', {
  immediate: true
})], ClickAwayContainer_ClickAwayContainer.prototype, "handleActiveDidChange", null);

ClickAwayContainer_ClickAwayContainer = __decorate([vue_class_component_common_default()({
  name: componentName('ClickAwayContainer')
})], ClickAwayContainer_ClickAwayContainer);

// CONCATENATED MODULE: ./src/components/Popover/Popover.tsx



















var popoverPlacementMapping = {
  left: 'Popover Body is placed on the left (default)',
  right: 'Popover Body is placed on the right'
};
var PopoverPlacements = Object.keys(popoverPlacementMapping);

var Popover_Popover =
/*#__PURE__*/
function (_mixins) {
  _inherits(Popover, _mixins);

  function Popover() {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));
    _this.currentPopoverVisible = _this.popoverVisible;
    _this.popoverTriggerControl = null;
    return _this;
  }

  _createClass(Popover, [{
    key: "handlePopoverVisible",
    value: function handlePopoverVisible(newVal) {
      this.currentPopoverVisible = newVal;
    }
  }, {
    key: "hidePopover",
    value: function hidePopover() {
      this.currentPopoverVisible = false;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.currentPopoverVisible = !this.currentPopoverVisible;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var dropdown = this.$slots.default || [];
      var triggerControl = this.$slots.control;

      var ignoredElementsHandler = function ignoredElementsHandler() {
        var el = _this2.popoverTriggerControl;

        if (el == null) {
          return [];
        }

        return [el];
      };

      return h("div", {
        "class": 'fd-popover'
      }, [h("div", {
        "class": 'fd-popover__control',
        ref: function ref(el) {
          return _this2.popoverTriggerControl = el;
        }
      }, [triggerControl && h("div", {
        attrs: {
          role: 'button'
        },
        on: {
          "click": this.toggle
        }
      }, [triggerControl]), !triggerControl && h(Button_Button, {
        "class": 'fd-popover__control',
        attrs: {
          "aria-controls": this.uid,
          "aria-expanded": this.currentPopoverVisible,
          "aria-haspopup": 'true'
        },
        on: {
          "click": this.toggle
        }
      }, [this.title])]), h(ClickAwayContainer_ClickAwayContainer, {
        attrs: {
          id: this.uid,
          active: this.currentPopoverVisible,
          ignoredElements: ignoredElementsHandler,
          "aria-hidden": !this.currentPopoverVisible
        },
        staticClass: 'fd-popover__body',
        "class": {
          'fd-popover__body--right': this.placement === 'right',
          'fd-popover__body--no-arrow': this.noArrow
        },
        on: {
          "clickOutside": this.hidePopover
        }
      }, [this.$slots.body ? this.$slots.body : h(Menu_Menu, {
        on: {
          "select": this.handleItemClick
        }
      }, [h(MenuList_MenuList, [dropdown])])])]);
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(value) {
      this.$emit('click', value);
      this.toggle();
    }
  }]);

  return Popover;
}(Object(vue_class_component_common["mixins"])(Uid_Uid));

__decorate([Api_Api.Prop('ARIA label', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: 'Popover'
})], Popover_Popover.prototype, "ariaLabel", void 0);

__decorate([Api_Api.Prop('title displayed when no custom trigger element is used', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: 'Show'
})], Popover_Popover.prototype, "title", void 0);

__decorate([Api_Api.Prop('popover placement', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: 'left',
  validator: function validator(value) {
    return PopoverPlacements.includes(value);
  }
})], Popover_Popover.prototype, "placement", void 0);

__decorate([Api_Api.Prop('whether popover is visible', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], Popover_Popover.prototype, "popoverVisible", void 0);

__decorate([Api_Api.Prop('whether popover has an arrow', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], Popover_Popover.prototype, "noArrow", void 0);

__decorate([Watch('popoverVisible', {
  immediate: true
})], Popover_Popover.prototype, "handlePopoverVisible", null);

Popover_Popover = __decorate([vue_class_component_common_default()({
  name: componentName('Popover'),
  components: {
    Button: Button_Button,
    Menu: Menu_Menu,
    MenuList: MenuList_MenuList,
    MenuItem: MenuItem_MenuItem
  }
}), Api_Api.Component('Popover'), Api_Api.defaultSlot('MenuItems or custom content via the body-slot'), Api_Api.slot('body', 'Custom popover body'), Api_Api.Event('click', 'Sent when an item in the popover was clicked', ['value', 'MenuItem value'])], Popover_Popover);

// CONCATENATED MODULE: ./src/components/Popover/index.ts

// CONCATENATED MODULE: ./src/components/Badge.tsx














var Badge_typeMapping = {
  warning: 'Warning',
  error: 'Error',
  success: 'Success'
};
var BadgeTypes = Object.keys(Badge_typeMapping);

var Badge_Badge =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Badge, _TsxComponent);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-badge': true,
        'fd-badge--filled': this.filled,
        'fd-badge--pill': this.pill,
        'fd-badge--success': this.type === 'success',
        'fd-badge--warning': this.type === 'warning',
        'fd-badge--error': this.type === 'error'
      };
    }
  }]);

  return Badge;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('whether the badge is filled', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], Badge_Badge.prototype, "filled", void 0);

__decorate([Api_Api.Prop('whether the badge is displayed as a pill', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], Badge_Badge.prototype, "pill", void 0);

__decorate([Api_Api.Prop('badge type', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(BadgeTypes));
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], Badge_Badge.prototype, "type", void 0);

Badge_Badge = __decorate([vue_class_component_common_default()({
  name: componentName('Badge')
}), Api_Api.Component('Badge'), Api_Api.defaultSlot('Text displayed inside the badge.')], Badge_Badge);

// CONCATENATED MODULE: ./src/components/Form/FormItem.tsx












var FormItem_FormItem =
/*#__PURE__*/
function (_mixins) {
  _inherits(FormItem, _mixins);

  function FormItem() {
    _classCallCheck(this, FormItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormItem).apply(this, arguments));
  }

  _createClass(FormItem, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-form__item': true,
        'fd-form__item--inline': this.inline,
        'fd-form__item--check': this.check
      };
    } // ItemIdentification Impl.

  }, {
    key: "itemIdentifier",
    get: function get() {
      return this.uid;
    }
  }]);

  return FormItem;
}(Object(vue_class_component_common["mixins"])(Uid_Uid));

__decorate([vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], FormItem_FormItem.prototype, "label", void 0);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], FormItem_FormItem.prototype, "check", void 0);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], FormItem_FormItem.prototype, "inline", void 0);

FormItem_FormItem = __decorate([vue_class_component_common_default()({
  name: componentName('FormItem'),
  provide: function provide() {
    return {
      itemIdentificationProvider: this
    };
  }
}), Api_Api.Component('Form Item'), Api_Api.defaultSlot('Content of the form item. Usually inputs and labels.')], FormItem_FormItem);

// CONCATENATED MODULE: ./src/components/Form/FormLabel.tsx











var FormLabel_FormLabel =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(FormLabel, _TsxComponent);

  function FormLabel() {
    _classCallCheck(this, FormLabel);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormLabel).apply(this, arguments));
  }

  _createClass(FormLabel, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var textOrItem = this.$slots.default;
      return h("label", {
        "class": this.classes,
        attrs: {
          "for": this.labelId
        }
      }, [textOrItem]);
    }
  }, {
    key: "labelId",
    get: function get() {
      var forId = this.for;

      if (forId != null) {
        return forId;
      }

      var provider = this.itemIdentificationProvider;

      if (provider != null) {
        return provider.itemIdentifier;
      }

      return null;
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-form__label': true,
        'is-required': this.required
      };
    }
  }]);

  return FormLabel;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('id of the corresponding input', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], FormLabel_FormLabel.prototype, "for", void 0);

__decorate([Api_Api.Prop('whether a value is required (adds a *)', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], FormLabel_FormLabel.prototype, "required", void 0);

__decorate([Inject({
  default: null
})], FormLabel_FormLabel.prototype, "itemIdentificationProvider", void 0);

FormLabel_FormLabel = __decorate([vue_class_component_common_default()({
  name: componentName('FormLabel')
}), Api_Api.Component('Form Label'), Api_Api.defaultSlot('Contents of the label: For non-inline elements simply use text which will become the text displayed by the label. For inline elements use text alongside with any elements that form your input control.')], FormLabel_FormLabel);

// CONCATENATED MODULE: ./src/components/Form/FormMessage.tsx














var FormMessage_typeMapping = {
  error: 'error',
  warning: 'warning',
  help: 'help'
};
var MessageTypes = Object.keys(FormMessage_typeMapping);

var FormMessage_FormMessage =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(FormMessage, _TsxComponent);

  function FormMessage() {
    _classCallCheck(this, FormMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormMessage).apply(this, arguments));
  }

  _createClass(FormMessage, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var message = this.$slots.default;
      return h("span", {
        "class": this.classes
      }, [message]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-form__message': true,
        'fd-form__message--error': this.type === 'error',
        'fd-form__message--warning': this.type === 'warning',
        'fd-form__message--help': this.type === 'help'
      };
    }
  }]);

  return FormMessage;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('type', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(MessageTypes));
}), vue_property_decorator_Prop({
  required: false,
  default: null,
  type: String
})], FormMessage_FormMessage.prototype, "type", void 0);

FormMessage_FormMessage = __decorate([vue_class_component_common_default()({
  name: componentName('FormMessage')
}), Api_Api.Component('Form Message'), Api_Api.defaultSlot('Message to be displayed (usually just text).')], FormMessage_FormMessage);

// CONCATENATED MODULE: ./src/components/Form/FormSet.tsx










var FormSet_FormSet =
/*#__PURE__*/
function (_Vue) {
  _inherits(FormSet, _Vue);

  function FormSet() {
    _classCallCheck(this, FormSet);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormSet).apply(this, arguments));
  }

  _createClass(FormSet, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var items = this.$slots.default;
      return h("div", {
        "class": 'fd-form__set'
      }, [items]);
    }
  }]);

  return FormSet;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

FormSet_FormSet = __decorate([vue_class_component_common_default()({
  name: componentName('FormSet')
}), Api_Api.Component('Form Set'), Api_Api.defaultSlot('Content of the form set (usually form items).')], FormSet_FormSet);

// CONCATENATED MODULE: ./src/components/Form/FormGroup.tsx











var FormGroup_FormGroup =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(FormGroup, _TsxComponent);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormGroup).apply(this, arguments));
  }

  _createClass(FormGroup, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'fd-form__group'
      }, [this.$slots.default]);
    }
  }]);

  return FormGroup;
}(vue_tsx_TsxComponent);

FormGroup_FormGroup = __decorate([vue_class_component_common_default()({
  name: componentName('FormGroup')
}), Api_Api.Component('Form Group'), Api_Api.defaultSlot('Content of the form group. Usually form items.')], FormGroup_FormGroup);

// CONCATENATED MODULE: ./src/components/Form/Legend.tsx










var Legend_Legend =
/*#__PURE__*/
function (_Vue) {
  _inherits(Legend, _Vue);

  function Legend() {
    _classCallCheck(this, Legend);

    return _possibleConstructorReturn(this, _getPrototypeOf(Legend).apply(this, arguments));
  }

  _createClass(Legend, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("legend", {
        "class": 'fd-form__legend'
      }, [this.$slots.default]);
    }
  }]);

  return Legend;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

Legend_Legend = __decorate([vue_class_component_common_default()({
  name: componentName('Legend')
}), Api_Api.Component('Legend'), Api_Api.defaultSlot('Legend text')], Legend_Legend);

// CONCATENATED MODULE: ./src/components/Form/FieldSet.tsx











var FieldSet_FieldSet =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(FieldSet, _TsxComponent);

  function FieldSet() {
    _classCallCheck(this, FieldSet);

    return _possibleConstructorReturn(this, _getPrototypeOf(FieldSet).apply(this, arguments));
  }

  _createClass(FieldSet, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("fieldset", {
        "class": 'fd-form__set'
      }, [this.$slots.default]);
    }
  }]);

  return FieldSet;
}(vue_tsx_TsxComponent);

FieldSet_FieldSet = __decorate([vue_class_component_common_default()({
  name: componentName('FieldSet')
}), Api_Api.Component('Field Set'), Api_Api.defaultSlot('Content of the field set. Usually a legend with a form group.')], FieldSet_FieldSet);

// CONCATENATED MODULE: ./src/components/Form/Controls/Input.tsx















var typeMappings = {
  text: 'Text Field',
  password: 'Password Field',
  radio: 'Radio Button',
  checkbox: 'Checkbox',
  search: 'Search Field'
};
var InputTypes = Object.keys(typeMappings);
var Input_stateMapping = {
  valid: 'Valid',
  invalid: 'Invalid',
  warning: 'Warning'
};
var InputStates = Object.keys(Input_stateMapping);

var Input_Input =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Input, _TsxComponent);

  function Input() {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
    _this.currentValue = _this.value === undefined || _this.value === null ? '' : _this.value;
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("input", {
        attrs: {
          id: this.inputId,
          readonly: this.readonly,
          disabled: this.disabled,
          type: this.type,
          placeholder: this.placeholder.length > 0 ? this.placeholder : false
        },
        domProps: {
          "value": this.currentValue
        },
        on: {
          "input": this.updateInput
        },
        "class": this.classes,
        staticClass: 'fd-form__control'
      });
    }
  }, {
    key: "handleNewValue",
    value: function handleNewValue(newValue) {
      this.currentValue = newValue;
    }
  }, {
    key: "updateInput",
    value: function updateInput(event) {
      var target = event.target;
      var value = null;

      if (target != null) {
        value = target.value;
      }

      this.currentValue = value;
      this.$emit('input', this.currentValue);
      this.$emit('update:value', this.currentValue);
    }
  }, {
    key: "inputId",
    get: function get() {
      var id = this.id;

      if (id != null) {
        return id;
      }

      var provider = this.itemIdentificationProvider;

      if (provider != null) {
        return provider.itemIdentifier;
      }

      return null;
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-input--compact': this.compact,
        'is-warning': this.state === 'warning',
        'is-invalid': this.state === 'invalid',
        'is-valid': this.state === 'valid',
        'is-required': this.required
      };
    }
  }]);

  return Input;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('id', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  default: null,
  type: String
})], Input_Input.prototype, "id", void 0);

__decorate([Api_Api.Prop('placeholder text', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  default: '',
  type: String
})], Input_Input.prototype, "placeholder", void 0);

__decorate([Api_Api.Prop('current state', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(InputStates));
}), vue_property_decorator_Prop({
  default: null,
  type: String
})], Input_Input.prototype, "state", void 0);

__decorate([Api_Api.Prop('whether a value is required (adds a *)', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  default: false,
  type: Boolean
})], Input_Input.prototype, "required", void 0);

__decorate([Api_Api.Prop('button type', function (prop) {
  var _prop$type2;

  return (_prop$type2 = prop.type(String)).acceptValues.apply(_prop$type2, _toConsumableArray(InputTypes));
}), vue_property_decorator_Prop({
  default: 'text',
  type: String
})], Input_Input.prototype, "type", void 0);

__decorate([Api_Api.Prop('whether the control is disabled', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  default: false,
  type: Boolean
})], Input_Input.prototype, "disabled", void 0);

__decorate([Api_Api.Prop('whether the control is readonly', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  default: false,
  type: Boolean
})], Input_Input.prototype, "readonly", void 0);

__decorate([Api_Api.Prop('current value', function (prop) {
  return prop.type(String, Number);
}), vue_property_decorator_Prop({
  default: null,
  type: [String, Number]
})], Input_Input.prototype, "value", void 0);

__decorate([Api_Api.Prop('whether input is compact', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], Input_Input.prototype, "compact", void 0);

__decorate([Inject({
  default: null
})], Input_Input.prototype, "itemIdentificationProvider", void 0);

__decorate([Watch('value')], Input_Input.prototype, "handleNewValue", null);

Input_Input = __decorate([vue_class_component_common_default()({
  name: componentName('Input')
}), Api_Api.Component('Input'), Api_Api.Event('input', 'Sent when the value changes', ['value', 'any'])], Input_Input);

// CONCATENATED MODULE: ./src/components/Form/Controls/InputGroup.tsx












var InputGroup_InputGroup =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(InputGroup, _TsxComponent);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputGroup).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var beforeAddon = this.before || this.$slots.before;
      var afterAddon = this.after || this.$slots.after;
      var afterClass = this.afterClass || '';
      var ws = this.afterClass ? ' ' : '';
      var afterAddonClassName = 'fd-input-group__addon fd-input-group__addon--after' + ws + afterClass;
      return h("div", {
        staticClass: 'fd-input-group',
        "class": this.classes
      }, [beforeAddon && h("span", {
        "class": 'fd-input-group__addon fd-input-group__addon--before'
      }, [beforeAddon]), this.$slots.default, afterAddon && h("span", {
        "class": afterAddonClassName
      }, [afterAddon])]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-input-group--before': this.before || this.$slots.before,
        'fd-input-group--after': this.after || this.$slots.after,
        'fd-input-group--compact': this.compact
      };
    }
  }]);

  return InputGroup;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('text/number before the input', function (prop) {
  return prop.type(String, Number);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], InputGroup_InputGroup.prototype, "before", void 0);

__decorate([Api_Api.Prop('text/number after the input', function (prop) {
  return prop.type(String, Number);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], InputGroup_InputGroup.prototype, "after", void 0);

__decorate([vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], InputGroup_InputGroup.prototype, "afterClass", void 0);

__decorate([Api_Api.Prop('whether input group is compact', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], InputGroup_InputGroup.prototype, "compact", void 0);

InputGroup_InputGroup = __decorate([vue_class_component_common_default()({
  name: componentName('InputGroup')
}), Api_Api.Component('InputGroup'), Api_Api.slot('before', 'Content to be placed before the input component.'), Api_Api.slot('after', 'Content to be placed after the input component.'), Api_Api.defaultSlot('The input component placed in the input group.')], InputGroup_InputGroup);

// CONCATENATED MODULE: ./src/components/Form/Controls/Select.tsx















var Select_stateMapping = {
  default: 'Default State',
  valid: 'Valid State (green border)',
  invalid: 'Invalid State (red border)',
  warning: 'Warning State (orange border)'
};
var States = Object.keys(Select_stateMapping);

var Select_Select =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Select, _TsxComponent);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
    _this.currentValue = _this.value;
    return _this;
  }

  _createClass(Select, [{
    key: "handleNewValue",
    value: function handleNewValue(newValue) {
      this.currentValue = newValue;
    }
  }, {
    key: "updateInput",
    value: function updateInput(event) {
      this.currentValue = event.target.value;
      this.$emit('change', event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var options = this.$slots.default;
      return h("select", {
        attrs: {
          id: this.inputId,
          readonly: this.readonly,
          disabled: this.disabled
        },
        "class": this.classes,
        domProps: {
          "value": this.currentValue
        },
        on: {
          "input": function input(event) {
            return _this2.updateInput(event);
          }
        }
      }, [options]);
    }
  }, {
    key: "inputId",
    get: function get() {
      var id = this.id;

      if (id != null) {
        return id;
      }

      var provider = this.itemIdentificationProvider;

      if (provider != null) {
        return provider.itemIdentifier;
      }

      return null;
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-form__control': true,
        'is-warning': this.state === 'warning',
        'is-invalid': this.state === 'invalid',
        'is-valid': this.state === 'valid',
        'is-required': this.required
      };
    }
  }]);

  return Select;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('id of the select element', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  required: false,
  default: null,
  type: String
})], Select_Select.prototype, "id", void 0);

__decorate([Api_Api.Prop('select state', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(States));
}), vue_property_decorator_Prop({
  required: false,
  default: 'default',
  type: String
})], Select_Select.prototype, "state", void 0);

__decorate([Api_Api.Prop('whether input is required', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Select_Select.prototype, "required", void 0);

__decorate([Api_Api.Prop('whether select is disabled', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Select_Select.prototype, "disabled", void 0);

__decorate([Api_Api.Prop('whether select is readonly', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Select_Select.prototype, "readonly", void 0);

__decorate([Model('change', {
  type: [String, Number, Object]
})], Select_Select.prototype, "value", void 0);

__decorate([Watch('value', {
  immediate: true
})], Select_Select.prototype, "handleNewValue", null);

__decorate([Inject({
  default: null
})], Select_Select.prototype, "itemIdentificationProvider", void 0);

Select_Select = __decorate([vue_class_component_common_default()({
  name: componentName('Select')
}), Api_Api.Component('Select'), Api_Api.defaultSlot('List of native option elements.')], Select_Select);

// CONCATENATED MODULE: ./src/components/Form/Controls/TextArea.tsx














var TextArea_stateMapping = {
  default: 'Default State',
  valid: 'Valid State (green border)',
  invalid: 'Invalid State (red border)',
  warning: 'Warning State (orange border)'
};
var TextArea_States = Object.keys(TextArea_stateMapping);
var TextArea_typeMapping = {
  text: 'Text Area for Text',
  password: 'Text Area for a Password'
};
var Types = Object.keys(TextArea_typeMapping);

var TextArea_TextArea =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(TextArea, _TsxComponent);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextArea).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("textarea", {
        attrs: {
          type: this.type,
          id: this.inputId,
          placeholder: this.placeholder
        },
        "class": this.classes
      });
    }
  }, {
    key: "inputId",
    get: function get() {
      var id = this.id;

      if (id != null) {
        return id;
      }

      var provider = this.itemIdentificationProvider;

      if (provider != null) {
        return provider.itemIdentifier;
      }

      return null;
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-form__control': true,
        'is-warning': this.state === 'warning',
        'is-invalid': this.state === 'invalid',
        'is-valid': this.state === 'valid',
        'is-required': this.required
      };
    }
  }]);

  return TextArea;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('id of the text area element', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  required: false,
  default: null,
  type: String
})], TextArea_TextArea.prototype, "id", void 0);

__decorate([Api_Api.Prop('placeholder displayed when no value is set', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  required: false,
  default: '',
  type: String
})], TextArea_TextArea.prototype, "placeholder", void 0);

__decorate([Api_Api.Prop('state of the text area', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(TextArea_States));
}), vue_property_decorator_Prop({
  required: false,
  default: 'default',
  type: String
})], TextArea_TextArea.prototype, "state", void 0);

__decorate([Api_Api.Prop('whether input is required', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], TextArea_TextArea.prototype, "required", void 0);

__decorate([Api_Api.Prop('native element type', function (prop) {
  var _prop$type2;

  return (_prop$type2 = prop.type(String)).acceptValues.apply(_prop$type2, _toConsumableArray(Types));
}), vue_property_decorator_Prop({
  required: false,
  default: 'text',
  type: String
})], TextArea_TextArea.prototype, "type", void 0);

__decorate([Inject({
  default: null
})], TextArea_TextArea.prototype, "itemIdentificationProvider", void 0);

TextArea_TextArea = __decorate([vue_class_component_common_default()({
  name: componentName('TextArea')
}), Api_Api.Component('Text Area'), Api_Api.Event('input', 'Sent when the value changes', ['value', 'any'])], TextArea_TextArea);

// CONCATENATED MODULE: ./src/components/Form/Controls/Toggle.tsx














var Toggle_sizeMapping = {
  xs: 'Extra Small',
  s: 'Small',
  l: 'Large'
};
var ToggleSizes = Object.keys(Toggle_sizeMapping);

var Toggle_Toggle =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Toggle, _TsxComponent);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toggle).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      var disabled = this.disabled ? true : null;
      return h("div", {
        "class": 'fd-form__item fd-form__item--check'
      }, [h("label", {
        "class": 'fd-form__label',
        attrs: {
          "for": this.inputId
        }
      }, [h("span", {
        "class": 'fd-toggle fd-toggle--s fd-form__control'
      }, [h("input", {
        attrs: {
          type: 'checkbox',
          disabled: disabled,
          name: '',
          id: this.inputId
        },
        on: {
          "input": function input(event) {
            return _this.$emit('input', event.target.value);
          }
        },
        domProps: {
          "value": this.value,
          "checked": this.value
        }
      }), h("span", {
        "class": 'fd-toggle__switch',
        attrs: {
          role: 'presentation'
        }
      })]), this.label])]);
    }
  }, {
    key: "inputId",
    get: function get() {
      var id = this.id;

      if (id != null) {
        return id;
      }

      var provider = this.itemIdentificationProvider;

      if (provider != null) {
        return provider.itemIdentifier;
      }

      return null;
    }
  }]);

  return Toggle;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('id', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  required: false,
  default: null,
  type: String
})], Toggle_Toggle.prototype, "id", void 0);

__decorate([Api_Api.Prop('size class', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(ToggleSizes));
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Toggle_Toggle.prototype, "size", void 0);

__decorate([Api_Api.Prop('label', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Toggle_Toggle.prototype, "label", void 0);

__decorate([Api_Api.Prop('whether toggle is disabled', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Toggle_Toggle.prototype, "disabled", void 0);

__decorate([Api_Api.Prop('whether toggle is checked', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Toggle_Toggle.prototype, "value", void 0);

__decorate([Inject({
  default: null
})], Toggle_Toggle.prototype, "itemIdentificationProvider", void 0);

Toggle_Toggle = __decorate([vue_class_component_common_default()({
  name: componentName('Toggle')
}), Api_Api.Component('Toggle')], Toggle_Toggle);

// CONCATENATED MODULE: ./src/components/Form/Controls/index.ts





// CONCATENATED MODULE: ./src/components/Form/index.tsx








// CONCATENATED MODULE: ./src/components/Combobox/Combobox.tsx
















var Combobox_Combobox =
/*#__PURE__*/
function (_mixins) {
  _inherits(Combobox, _mixins);

  function Combobox() {
    var _this;

    _classCallCheck(this, Combobox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Combobox).apply(this, arguments));
    _this.currentPopoverVisible = _this.popoverVisible;
    _this.currentValue = _this.value;
    return _this;
  }

  _createClass(Combobox, [{
    key: "togglePopoverVisible",
    value: function togglePopoverVisible() {
      this.currentPopoverVisible = !this.currentPopoverVisible;
      this.$emit('update:currentPopoverVisible', this.currentPopoverVisible);
    }
  }, {
    key: "setCurrentValue",
    value: function setCurrentValue(newValue) {
      this.currentValue = newValue;
      this.$emit('input', this.currentValue);
      this.$emit('update:value', this.currentValue);
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(_ref) {
      var keyCode = _ref.keyCode;

      if (keyCode !== 13) {
        return;
      }

      if (this.currentPopoverVisible) {
        this.togglePopoverVisible();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var dropdown = this.$slots.default;
      return h("div", {
        "class": 'fd-combobox-input'
      }, [h(Popover_Popover, {
        attrs: {
          noArrow: true,
          popoverVisible: this.currentPopoverVisible
        }
      }, [h("div", {
        "class": 'fd-combobox-control',
        slot: 'control'
      }, [h(InputGroup_InputGroup, {
        attrs: {
          compact: this.compact,
          afterClass: 'fd-input-group__addon--button'
        }
      }, [h(Input_Input, {
        attrs: {
          id: this.uid,
          value: this.value,
          compact: this.compact,
          placeholder: this.placeholder
        },
        nativeOn: {
          "click": function click() {
            return _this2.currentPopoverVisible = true;
          },
          "keyup": this.handleKeyup
        },
        on: {
          "input": this.setCurrentValue
        }
      }), h(Button_Button, {
        slot: 'after',
        on: {
          "click": this.togglePopoverVisible
        },
        attrs: {
          icon: 'navigation-down-arrow',
          styling: 'light'
        }
      })])]), dropdown])]);
    }
  }]);

  return Combobox;
}(Object(vue_class_component_common["mixins"])(Uid_Uid));

__decorate([Api_Api.Prop('initial value', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  default: null,
  required: false,
  type: String
})], Combobox_Combobox.prototype, "value", void 0);

__decorate([Api_Api.Prop('placeholder text (displayed when nothing is selected)', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: '',
  required: false
})], Combobox_Combobox.prototype, "placeholder", void 0);

__decorate([Api_Api.Prop('ARIA Label', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: 'Combobox',
  required: false
})], Combobox_Combobox.prototype, "ariaLabel", void 0);

__decorate([Api_Api.Prop('whether popover is visible', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Combobox_Combobox.prototype, "popoverVisible", void 0);

__decorate([Api_Api.Prop('whether combobox is compact', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], Combobox_Combobox.prototype, "compact", void 0);

Combobox_Combobox = __decorate([vue_class_component_common_default()({
  name: componentName('Combobox'),
  provide: function provide() {
    return {
      combobox: this
    };
  },
  components: {
    ClickAwayContainer: ClickAwayContainer_ClickAwayContainer,
    Popover: Popover_Popover,
    Input: Input_Input,
    InputGroup: InputGroup_InputGroup,
    Button: Button_Button
  }
}), Api_Api.Component('Combobox'), Api_Api.Event('input', 'Sent when the selected item changes')], Combobox_Combobox);

// CONCATENATED MODULE: ./src/components/Combobox/index.ts

// CONCATENATED MODULE: ./src/components/Identifier.tsx

















var Identifier_sizeMapping = {
  xxs: 'Extra Extra Small',
  xs: 'Extra Small',
  s: 'Small',
  m: 'Medium (default)',
  l: 'Large',
  xl: 'Extra Large',
  xxl: 'Extra Extra Large'
};
var IdentifierSizes = Object.keys(Identifier_sizeMapping);

var Identifier_Identifier =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Identifier, _TsxComponent);

  function Identifier() {
    _classCallCheck(this, Identifier);

    return _possibleConstructorReturn(this, _getPrototypeOf(Identifier).apply(this, arguments));
  }

  _createClass(Identifier, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": this.classes,
        attrs: {
          role: 'presentation'
        },
        style: this.style
      }, [this.$slots.default]);
    }
  }, {
    key: "style",
    get: function get() {
      var url = this.url;

      if (url == null || !this.thumbnail) {
        return {};
      }

      return {
        'background-image': "url(".concat(this.url, ")")
      };
    }
  }, {
    key: "classes",
    get: function get() {
      var backgroundColorClasses = this.backgroundColor == null ? {} : _defineProperty({}, Object(lib["backgroundColorClassName"])(this.backgroundColor), true);
      var iconClass = this.icon == null ? {} : _defineProperty({}, "sap-icon--".concat(this.icon), true);
      return _objectSpread({}, iconClass, backgroundColorClasses, {
        'fd-identifier--xxs': this.size === 'xxs',
        'fd-identifier--xs': this.size === 'xs',
        'fd-identifier--s': this.size === 's',
        'fd-identifier--m': this.size === 'm',
        'fd-identifier--l': this.size === 'l',
        'fd-identifier--xl': this.size === 'xl',
        'fd-identifier--xxl': this.size === 'xxl',
        'fd-identifier--transparent': this.transparent,
        'fd-identifier--circle': this.circle,
        'fd-identifier--thumbnail': this.thumbnail
      });
    }
  }]);

  return Identifier;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('icon name', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Identifier_Identifier.prototype, "icon", void 0);

__decorate([Api_Api.Prop('image url', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Identifier_Identifier.prototype, "url", void 0);

__decorate([Api_Api.Prop('size', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(IdentifierSizes));
}), vue_property_decorator_Prop({
  type: String,
  default: 'm',
  required: false
})], Identifier_Identifier.prototype, "size", void 0);

__decorate([Api_Api.Prop('is displayed as circle', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Identifier_Identifier.prototype, "circle", void 0);

__decorate([Api_Api.Prop('is displayed without background', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Identifier_Identifier.prototype, "transparent", void 0);

__decorate([Api_Api.Prop('is displayed with background image', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Identifier_Identifier.prototype, "thumbnail", void 0);

__decorate([Api_Api.Prop('background color', function (prop) {
  var _prop$type2;

  return (_prop$type2 = prop.type(String)).acceptValues.apply(_prop$type2, _toConsumableArray(lib["Colors"]));
}), vue_property_decorator_Prop({
  required: false,
  default: null,
  type: String
})], Identifier_Identifier.prototype, "backgroundColor", void 0);

Identifier_Identifier = __decorate([vue_class_component_common_default()({
  name: componentName('Identifier')
}), Api_Api.Component('Identifier'), Api_Api.defaultSlot('Text displayed by the Identifier.')], Identifier_Identifier);

// CONCATENATED MODULE: ./src/components/Image.tsx














var Image_sizeMapping = {
  s: 'Small',
  m: 'Medium (default)',
  l: 'Large'
};
var Image_IdentifierSizes = Object.keys(Image_sizeMapping);

var Image_Image =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Image, _TsxComponent);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": this.classes,
        style: this.style
      }, [this.$slots.default]);
    }
  }, {
    key: "style",
    get: function get() {
      var url = this.url;

      if (url == null) {
        return {};
      }

      return {
        'background-image': "url(".concat(this.url, ")")
      };
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-image--s': this.size === 's',
        'fd-image--l': this.size === 'l',
        'fd-image--m': this.size === 'm',
        'fd-image--circle': this.circle
      };
    }
  }]);

  return Image;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('image url', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Image_Image.prototype, "url", void 0);

__decorate([Api_Api.Prop('size', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(Image_IdentifierSizes));
}), vue_property_decorator_Prop({
  type: String,
  default: 'm',
  required: false
})], Image_Image.prototype, "size", void 0);

__decorate([Api_Api.Prop('is displayed as circle', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  required: false,
  default: false,
  type: Boolean
})], Image_Image.prototype, "circle", void 0);

Image_Image = __decorate([vue_class_component_common_default()({
  name: componentName('Image')
}), Api_Api.Component('Image')], Image_Image);

// CONCATENATED MODULE: ./src/components/Tabs/Tabs.tsx












var Tabs_Tabs =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Tabs, _TsxComponent);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
    _this.tabItems = []; // TabItemContainer Implementation

    _this.activeName = _this.value || null;
    return _this;
  }

  _createClass(Tabs, [{
    key: "handleNewValue",
    value: function handleNewValue(newValue) {
      this.activeName = newValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var tabItems = this.tabItems;
      return h("div", [h("ul", {
        "class": 'fd-tabs',
        attrs: {
          role: 'tablist'
        }
      }, [tabItems.map(function (tabItem) {
        return h("li", {
          "class": 'fd-tabs__item'
        }, [h("a", {
          "class": 'fd-tabs__link',
          attrs: {
            "aria-controls": tabItem.uid,
            "aria-selected": tabItem.active,
            "aria-disabled": tabItem.disabled,
            role: 'tab'
          },
          on: {
            "click": function click() {
              return _this2.tabItemClicked(tabItem);
            }
          }
        }, [tabItem.label])]);
      })]), this.$slots.default]);
    }
  }, {
    key: "tabItemClicked",
    value: function tabItemClicked(item) {
      // Ignore disabled items
      if (item.disabled) {
        return;
      }

      this.activeName = item.name;
      this.$emit('input', item.name);
    }
  }, {
    key: "addTabItem",
    value: function addTabItem(item) {
      var index = (this.$slots.default || []).indexOf(item.$vnode);
      this.tabItems.splice(index, 0, item);
    }
  }, {
    key: "removeTabItem",
    value: function removeTabItem(item) {
      var tabItems = this.tabItems;
      var index = tabItems.indexOf(item);

      if (index > -1) {
        tabItems.splice(index, 1);
      }
    }
  }]);

  return Tabs;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('active tab item name', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Tabs_Tabs.prototype, "value", void 0);

__decorate([Watch('value', {
  immediate: true
})], Tabs_Tabs.prototype, "handleNewValue", null);

Tabs_Tabs = __decorate([vue_class_component_common_default()({
  provide: function provide() {
    return {
      tabItemContainer: this
    };
  },
  name: componentName('Tabs')
}), Api_Api.Component('Tabs'), Api_Api.Event('input', 'triggers when the active tab item name changes', ['tabItemName', String]), Api_Api.defaultSlot('Tab Items')], Tabs_Tabs);

// CONCATENATED MODULE: ./src/components/Tabs/TabItem.tsx













var TabItem_TabItem =
/*#__PURE__*/
function (_mixins) {
  _inherits(TabItem, _mixins);

  function TabItem() {
    _classCallCheck(this, TabItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabItem).apply(this, arguments));
  }

  _createClass(TabItem, [{
    key: "mounted",
    value: function mounted() {
      var tabItemContainer = this.tabItemContainer;

      if (tabItemContainer != null) {
        tabItemContainer.addTabItem(this);
      }
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      var tabItemContainer = this.tabItemContainer;

      if (tabItemContainer != null) {
        tabItemContainer.removeTabItem(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var expanded = this.active ? 'true' : 'false';
      return h("div", {
        attrs: {
          id: this.uid,
          role: 'tabpanel',
          "aria-expanded": expanded
        },
        "class": 'fd-tabs__panel'
      }, [this.$slots.default]);
    }
  }, {
    key: "active",
    get: function get() {
      var tabItemContainer = this.tabItemContainer;

      if (tabItemContainer != null) {
        var activeName = tabItemContainer.activeName;
        return activeName === this.name;
      }

      return false;
    }
  }]);

  return TabItem;
}(Object(vue_class_component_common["mixins"])(Uid_Uid));

__decorate([Api_Api.Prop('tab item label', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], TabItem_TabItem.prototype, "label", void 0);

__decorate([Api_Api.Prop('name, used to determine whether item is active', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], TabItem_TabItem.prototype, "name", void 0);

__decorate([Api_Api.Prop('whether item is disabled', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], TabItem_TabItem.prototype, "disabled", void 0);

__decorate([Inject('tabItemContainer')], TabItem_TabItem.prototype, "tabItemContainer", void 0);

TabItem_TabItem = __decorate([vue_class_component_common_default()({
  name: componentName('TabItem')
}), Api_Api.Component('Tab Item'), Api_Api.defaultSlot('Content to be displayed in the tab body when this item is active.')], TabItem_TabItem);

// CONCATENATED MODULE: ./src/components/Tabs/index.ts


// CONCATENATED MODULE: ./src/components/Token.tsx











var Token_Token =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Token, _TsxComponent);

  function Token() {
    _classCallCheck(this, Token);

    return _possibleConstructorReturn(this, _getPrototypeOf(Token).apply(this, arguments));
  }

  _createClass(Token, [{
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      return h("span", {
        "class": 'fd-token',
        attrs: {
          role: 'button'
        },
        on: {
          "click": function click() {
            return _this.$emit('click', _this);
          }
        }
      }, [this.$slots.default]);
    }
  }]);

  return Token;
}(vue_tsx_TsxComponent);

Token_Token = __decorate([vue_class_component_common_default()({
  name: componentName('Token')
}), Api_Api.Component('Token'), Api_Api.Event('click', 'triggers when clicked'), Api_Api.defaultSlot('Token Text')], Token_Token);

// CONCATENATED MODULE: ./src/components/SideNav/shared/index.ts


var ITEM_CONTAINER = Symbol();
var SIDE_NAV = Symbol();
// CONCATENATED MODULE: ./src/components/SideNav/SideNav.tsx













var SideNav_SideNav =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(SideNav, _TsxComponent);

  function SideNav() {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).apply(this, arguments));
    _this.activeIndexPath = _this.indexPath;
    return _this;
  }

  _createClass(SideNav, [{
    key: "handleNewIndexPath",
    value: function handleNewIndexPath(newIndexPath) {
      this.activeIndexPath = newIndexPath;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var itemsOrLists = this.$slots.default;
      return h("nav", {
        "class": 'fd-side-nav'
      }, [itemsOrLists]);
    }
  }, {
    key: "didClickSideNavItem",
    value: function didClickSideNavItem(item) {
      this.activeIndexPath = item.itemId;
      this.$emit('select', item);
      this.$emit('change', this.activeIndexPath);
    }
  }]);

  return SideNav;
}(vue_tsx_TsxComponent);

__decorate([Model('change', {
  type: String,
  default: null
}), Api_Api.Prop('default index path', function (prop) {
  return prop.type(String);
})], SideNav_SideNav.prototype, "indexPath", void 0);

__decorate([Watch('indexPath', {
  immediate: true
})], SideNav_SideNav.prototype, "handleNewIndexPath", null);

SideNav_SideNav = __decorate([vue_class_component_common_default()({
  name: componentName('SideNav'),
  provide: function provide() {
    return _defineProperty({}, SIDE_NAV, this);
  }
}), Api_Api.Component('Side Nav'), Api_Api.Event('select', 'Sent when a item was clicked', ['item', 'SideNavItem']), Api_Api.defaultSlot('Side Navigation-Lists/-Items displayed by the Side Navigation.')], SideNav_SideNav);

// CONCATENATED MODULE: ./src/components/SideNav/SideNavList.tsx












var SideNavList_SideNavList =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(SideNavList, _TsxComponent);

  function SideNavList() {
    var _this;

    _classCallCheck(this, SideNavList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavList).apply(this, arguments));
    _this.localActiveItemId = _this.value;
    return _this;
  }

  _createClass(SideNavList, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var itemsOrSubmenus = this.$slots.default;

      var renderList = function renderList() {
        return h("ul", {
          "class": 'fd-side-nav__list'
        }, [itemsOrSubmenus]);
      };

      var header = this.header;

      if (header == null) {
        return renderList();
      }

      return h("div", {
        "class": 'fd-side-nav__group'
      }, [h("h1", {
        "class": 'fd-side-nav__title'
      }, [header]), renderList()]);
    }
  }, {
    key: "didClickSideNavItem",
    value: function didClickSideNavItem(item) {
      this.$emit('select', item);
      this.$emit('input', item.itemId);
      this.localActiveItemId = item.itemId;
      var nav = this.sideNav;

      if (nav != null) {
        nav.didClickSideNavItem(item);
      }
    }
  }, {
    key: "activeItemId",
    get: function get() {
      var nav = this.sideNav;

      if (nav != null) {
        return nav.activeIndexPath;
      }

      return this.localActiveItemId;
    }
  }]);

  return SideNavList;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('value of the selected item', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], SideNavList_SideNavList.prototype, "value", void 0);

__decorate([Api_Api.Prop('header', function (build) {
  build.describe('text displayed in the side nav list (group) header').type(Boolean);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], SideNavList_SideNavList.prototype, "header", void 0);

__decorate([Inject({
  from: SIDE_NAV,
  default: null
})], SideNavList_SideNavList.prototype, "sideNav", void 0);

SideNavList_SideNavList = __decorate([vue_class_component_common_default()({
  name: componentName('SideNavList')
}), Api_Api.Component('Side Nav List'), Api_Api.Event('select', 'Sent when a item was clicked', ['item', 'Item']), Api_Api.Event('input', 'Sent when a item was clicked', ['itemId', String]), Api_Api.defaultSlot('Side Navigation Items or Side Navigation Submenus.')], SideNavList_SideNavList);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__("4f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// CONCATENATED MODULE: ./src/components/SideNav/SideNavItem.tsx



















 // A SideNavItem can either contain:
// - Text (used as the title)
// - SideNavItems (used to populate a sub side nav)
// If a SideNavItem acts as a submenu use the title prop
// Instead of the default slot for the title.

var SideNavItem_SideNavItem =
/*#__PURE__*/
function (_mixins) {
  _inherits(SideNavItem, _mixins);

  // A SideNavItem can either contain:
  // - Text (used as the title)
  // - SideNavItems (used to populate a sub side nav)
  // If a SideNavItem acts as a submenu use the title prop
  // Instead of the default slot for the title.
  function SideNavItem() {
    var _this;

    _classCallCheck(this, SideNavItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavItem).apply(this, arguments)); // Helper

    _this.isExpanded = false; // ItemContainer-Impls

    _this.childItemIds = [];
    return _this;
  }

  _createClass(SideNavItem, [{
    key: "addItem",
    value: function addItem(id) {
      this.childItemIds = Array.from(new Set(_toConsumableArray(this.childItemIds).concat([id])));
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      this.childItemIds = this.childItemIds.filter(function (childId) {
        return childId !== id;
      });
    } // Vue-related

  }, {
    key: "mounted",
    value: function mounted() {
      var parentItem = this.parentItem;

      if (parentItem != null) {
        parentItem.addItem(this.itemId);
      }
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      var parentItem = this.parentItem;

      if (parentItem != null) {
        parentItem.removeItem(this.itemId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var title = this.title;

      var renderSubitems = function renderSubitems() {
        return h("ul", {
          "class": 'fd-side-nav__sublist',
          attrs: {
            "aria-hidden": !_this2.isExpanded
          }
        }, [_this2.$slots.default]);
      };

      var iconClass = this.iconClassName;
      return h("li", {
        "class": this.classes
      }, [h("a", {
        attrs: {
          role: 'link',
          href: 'javascript:undefined',
          "aria-selected": this.ariaSelected,
          title: this.componentText
        },
        on: {
          "click": this.handleClick
        },
        "class": this.linkClassObject
      }, [!!iconClass && h("span", {
        "class": "fd-side-nav__icon ".concat(iconClass, " sap-icon--m"),
        attrs: {
          role: 'presentation'
        }
      }), title, this.accessoryIcon && h(Identifier_Identifier, {
        attrs: {
          circle: true,
          backgroundColor: this.color ? this.color : 'accent-6',
          size: 'xxs',
          icon: this.accessoryIcon
        },
        "class": 'fd-has-float-right'
      })]), this.hasChildItems && renderSubitems()]);
    }
  }, {
    key: "handleClick",
    // Event Handler
    value: function handleClick() {
      this.$emit('click', this);
      var list = this.sideNav;

      if (list != null) {
        list.didClickSideNavItem(this);
      }

      if (this.hasChildItems) {
        this.isExpanded = !this.isExpanded;
      }
    }
  }, {
    key: "hasChildItems",
    get: function get() {
      return this.childItemIds.length > 0;
    }
  }, {
    key: "isChildItem",
    get: function get() {
      return this.parentItem != null;
    }
  }, {
    key: "title",
    get: function get() {
      return this.hasChildItems ? this.submenuTitle || '' : this.$slots.default || '';
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-side-nav__item': !this.isChildItem,
        'fd-side-nav__subitem': this.isChildItem
      };
    }
  }, {
    key: "isActive",
    get: function get() {
      var list = this.sideNav;

      if (list == null) {
        return false;
      }

      var activeItemId = list.activeIndexPath;

      if (activeItemId == null) {
        return false;
      }

      return this.itemId === activeItemId;
    }
  }, {
    key: "ariaSelected",
    get: function get() {
      return this.isSelected || this.isActive ? 'true' : 'false';
    }
  }, {
    key: "linkClassObject",
    get: function get() {
      return {
        'fd-side-nav__link': !this.isChildItem,
        'fd-side-nav__sublink': this.isChildItem,
        'is-selected': this.isSelected,
        'is-expanded': this.isExpanded,
        'has-child': this.hasChildItems
      };
    }
  }]);

  return SideNavItem;
}(Object(vue_class_component_common["mixins"])(Icon_Icon));

__decorate([Api_Api.Prop('whether selected', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], SideNavItem_SideNavItem.prototype, "isSelected", void 0);

__decorate([Api_Api.Prop('whether is subitem', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], SideNavItem_SideNavItem.prototype, "isSubitem", void 0);

__decorate([Api_Api.Prop('unique item identification', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: true
})], SideNavItem_SideNavItem.prototype, "itemId", void 0);

__decorate([Api_Api.Prop('submenu title', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], SideNavItem_SideNavItem.prototype, "submenuTitle", void 0);

__decorate([Api_Api.Prop('accessory icon (non-standard)', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null
})], SideNavItem_SideNavItem.prototype, "accessoryIcon", void 0);

__decorate([Api_Api.Prop('accessory icon color(non-standard)', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: 'accent-6'
})], SideNavItem_SideNavItem.prototype, "color", void 0);

__decorate([Api_Api.Prop('tooltip text(non-standard)', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String
})], SideNavItem_SideNavItem.prototype, "componentText", void 0);

__decorate([Inject({
  from: SIDE_NAV,
  default: null
})], SideNavItem_SideNavItem.prototype, "sideNav", void 0);

__decorate([Inject({
  from: ITEM_CONTAINER,
  default: null
})], SideNavItem_SideNavItem.prototype, "parentItem", void 0);

SideNavItem_SideNavItem = __decorate([vue_class_component_common_default()({
  name: componentName('SideNavItem'),
  provide: function provide() {
    return _defineProperty({}, ITEM_CONTAINER, this);
  }
}), Api_Api.Component('Side Nav Item'), Api_Api.Event('click', 'Sent when item is clicked'), Api_Api.defaultSlot('Side Nav Items displayed by the list.')], SideNavItem_SideNavItem);

// CONCATENATED MODULE: ./src/components/SideNav/index.tsx



// CONCATENATED MODULE: ./src/components/Breadcrumb/Breadcrumb.tsx










var Breadcrumb_Breadcrumb =
/*#__PURE__*/
function (_Vue) {
  _inherits(Breadcrumb, _Vue);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumb).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("ul", {
        "class": 'fd-breadcrumb'
      }, [this.$slots.default]);
    }
  }]);

  return Breadcrumb;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

Breadcrumb_Breadcrumb = __decorate([vue_class_component_common_default()({
  name: componentName('Breadcrumb')
}), Api_Api.Component('Breadcrumb'), Api_Api.defaultSlot('Breadcrumb Items')], Breadcrumb_Breadcrumb);

// CONCATENATED MODULE: ./src/components/Breadcrumb/BreadcrumbItem.tsx











var BreadcrumbItem_BreadcrumbItem =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(BreadcrumbItem, _TsxComponent);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbItem).apply(this, arguments));
  }

  _createClass(BreadcrumbItem, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      var to = this.to;
      var router = this.$router;

      if (to != null && router != null) {
        router.push(to);
      }

      this.$emit('click', this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      var title = this.$slots.default;
      return h("li", {
        "class": 'fd-breadcrumb__item'
      }, [h("a", {
        "class": 'fd-breadcrumb__link',
        attrs: {
          href: '#'
        },
        on: {
          "click": function click(event) {
            return _this.onClick(event);
          }
        }
      }, [title])]);
    }
  }]);

  return BreadcrumbItem;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('target route (passed to $router.to(…))', function (prop) {
  return prop.type(Object);
}), vue_property_decorator_Prop({
  type: Object,
  required: false,
  default: null
})], BreadcrumbItem_BreadcrumbItem.prototype, "to", void 0);

BreadcrumbItem_BreadcrumbItem = __decorate([vue_class_component_common_default()({
  name: componentName('BreadcrumbItem')
}), Api_Api.Component('Breadcrumb Item'), Api_Api.Event('click', 'Sent when item was clicked', ['item', 'BreadcrumbItem']), Api_Api.defaultSlot('Breadcrumb Item Title')], BreadcrumbItem_BreadcrumbItem);

// CONCATENATED MODULE: ./src/components/Breadcrumb/index.ts


// CONCATENATED MODULE: ./src/components/Label.tsx














var Label_typeMapping = {
  warning: 'Warning',
  error: 'Error',
  success: 'Success'
};
var LabelTypes = Object.keys(Label_typeMapping);

var Label_Label =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Label, _TsxComponent);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-label': true,
        'fd-label--success': this.type === 'success',
        'fd-label--warning': this.type === 'warning',
        'fd-label--error': this.type === 'error'
      };
    }
  }]);

  return Label;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('label type', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(LabelTypes));
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], Label_Label.prototype, "type", void 0);

Label_Label = __decorate([vue_class_component_common_default()({
  name: componentName('Label')
}), Api_Api.Component('Label'), Api_Api.defaultSlot('Text displayed inside the label.')], Label_Label);

// CONCATENATED MODULE: ./src/components/Status.tsx
















var Status_typeMapping = {
  warning: 'Warning',
  error: 'Error',
  success: 'Success'
};
var statusIconMapping = {
  available: 'Available',
  away: 'Away',
  busy: 'Busy',
  offline: 'Offline'
};
var StatusTypes = Object.keys(Status_typeMapping);
var StatusIconTypes = Object.keys(statusIconMapping);

var Status_Status =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Status, _TsxComponent);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, _getPrototypeOf(Status).apply(this, arguments));
  }

  _createClass(Status, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "iconClasses",
    get: function get() {
      var icon = this.icon;

      if (icon == null) {
        return {};
      }

      return _defineProperty({}, "sap-icon--".concat(icon), true);
    }
  }, {
    key: "classes",
    get: function get() {
      return _objectSpread({
        'fd-status-label': true,
        'fd-status-label fd-status-label--success': this.type === 'success',
        'fd-status-label fd-status-label--warning': this.type === 'warning',
        'fd-status-label fd-status-label--error': this.type === 'error',
        'fd-status-label fd-status-label--available': this.statusIcon === 'available',
        'fd-status-label fd-status-label--away': this.statusIcon === 'away',
        'fd-status-label fd-status-label--busy': this.statusIcon === 'busy',
        'fd-status-label fd-status-label--offline': this.statusIcon === 'offline'
      }, this.iconClasses);
    }
  }]);

  return Status;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('build-in status icon type', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(StatusIconTypes));
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], Status_Status.prototype, "statusIcon", void 0);

__decorate([Api_Api.Prop('status type', function (prop) {
  var _prop$type2;

  return (_prop$type2 = prop.type(String)).acceptValues.apply(_prop$type2, _toConsumableArray(StatusTypes));
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], Status_Status.prototype, "type", void 0);

__decorate([Api_Api.Prop('icon displayed in the status indicator', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Status_Status.prototype, "icon", void 0);

Status_Status = __decorate([vue_class_component_common_default()({
  name: componentName('Status')
}), Api_Api.Component('Status'), Api_Api.defaultSlot('Text displayed inside the status.')], Status_Status);

// CONCATENATED MODULE: ./src/components/Link.tsx












var Link_Link =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Link, _TsxComponent);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _getPrototypeOf(Link).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var attributes = {
        attrs: this.$attrs,
        on: this.$listeners
      };
      return h("a", babel_helper_vue_jsx_merge_props_default()([{
        "class": this.classes
      }, attributes]), [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-link': true,
        'is-selected': this.selected,
        'is-disabled': this.disabled
      };
    }
  }]);

  return Link;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('whether link is selected', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Link_Link.prototype, "selected", void 0);

__decorate([Api_Api.Prop('whether link is disabled', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Link_Link.prototype, "disabled", void 0);

Link_Link = __decorate([vue_class_component_common_default()({
  name: componentName('Link')
}), Api_Api.Component('Link'), Api_Api.Event('click', 'Sent when link was clicked'), Api_Api.defaultSlot('Link Title')], Link_Link);

// CONCATENATED MODULE: ./src/components/Spinner.tsx











var Spinner_Spinner =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Spinner, _TsxComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'fd-spinner',
        attrs: {
          "aria-hidden": 'false',
          "aria-label": this.ariaLabel
        }
      }, [h("div")]);
    }
  }]);

  return Spinner;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('ARIA label', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: 'Loading',
  required: false
})], Spinner_Spinner.prototype, "ariaLabel", void 0);

Spinner_Spinner = __decorate([vue_class_component_common_default()({
  name: componentName('Spinner')
}), Api_Api.Component('Spinner')], Spinner_Spinner);

// CONCATENATED MODULE: ./src/components/Modal.tsx














var Modal_Modal =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Modal, _TsxComponent);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
    _this.isActive = _this.active;
    return _this;
  }

  _createClass(Modal, [{
    key: "didChangeActive",
    value: function didChangeActive(value) {
      this.isActive = value;
    }
  }, {
    key: "close",
    value: function close() {
      this.$emit('close');
      this.$emit('update:active', false);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      document.body.appendChild(this.$el);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      var el = this.$el;

      if (el != null) {
        var parent = el.parentNode;

        if (parent != null) {
          parent.removeChild(el);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];

      var renderHeader = function renderHeader() {
        // We have to do two things here:
        // 1. Disable object-literal-key-quotes: The key 'class' will cause a warning. If we remove the quotes
        //    then tsc complains and does not compile at all.
        // 2. Extract the button render logic in a function because otherwise we cannot disable the rule.
        //    It is not possible asaik. to disable rules within a tsx scope.
        // tslint:disable-next-line:object-literal-key-quotes
        var renderButton = function renderButton() {
          return h(Button_Button, babel_helper_vue_jsx_merge_props_default()([{
            'class': 'fd-modal__close'
          }, {
            attrs: {
              styling: 'light',
              "aria-label": 'close'
            },
            on: {
              "click": function click() {
                return _this2.close();
              }
            }
          }]));
        };

        return h("div", {
          "class": 'fd-modal__header'
        }, [h("h1", {
          "class": 'fd-modal__title'
        }, [_this2.title]), renderButton()]);
      };

      var renderBody = function renderBody() {
        return h("div", {
          "class": 'fd-modal__body'
        }, [_this2.$slots.default]);
      };

      var renderFooter = function renderFooter() {
        var footer = _this2.$slots.footer;
        var actions = _this2.$slots.actions;

        if (footer != null || actions != null) {
          return h("footer", {
            "class": 'fd-modal__footer'
          }, [footer, !!actions && h("div", {
            "class": 'fd-modal__actions'
          }, [actions])]);
        }

        return null;
      };

      return h("transition", {
        attrs: {
          name: 'fade'
        }
      }, [h("div", {
        directives: [{
          name: "show",
          value: this.isActive
        }],
        "class": 'fd-ui__overlay fd-overlay fd-overlay--modal',
        attrs: {
          "aria-hidden": !this.isActive
        }
      }, [h(ClickAwayContainer_ClickAwayContainer, {
        on: {
          "clickOutside": this.clickOutside
        },
        "class": 'fd-modal',
        attrs: {
          active: this.isActive
        }
      }, [h("div", {
        "class": 'fd-modal__content',
        attrs: {
          role: 'document'
        }
      }, [renderHeader(), renderBody(), renderFooter()])])])]);
    }
  }, {
    key: "clickOutside",
    value: function clickOutside() {
      if (this.isActive) {
        this.close();
      }
    }
  }]);

  return Modal;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('whether modal is active', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], Modal_Modal.prototype, "active", void 0);

__decorate([Api_Api.Prop('title', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], Modal_Modal.prototype, "title", void 0);

__decorate([Watch('active', {
  immediate: true
})], Modal_Modal.prototype, "didChangeActive", null);

Modal_Modal = __decorate([vue_class_component_common_default()({
  name: componentName('Modal'),
  components: {
    ClickAwayContainer: ClickAwayContainer_ClickAwayContainer,
    Button: Button_Button
  }
}), Api_Api.Component('Modal'), Api_Api.Event('close', 'Sent when modal was closed'), Api_Api.Event('update:active', 'Sent when active changes', ['active', Boolean]), Api_Api.defaultSlot('Modal Body'), Api_Api.slot('footer', 'Custom Modal Footer'), Api_Api.slot('actions', 'Custom Modal Actions')], Modal_Modal);

// CONCATENATED MODULE: ./src/components/ListGroup/ListGroup.tsx











var ListGroup_ListGroup =
/*#__PURE__*/
function (_Vue) {
  _inherits(ListGroup, _Vue);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListGroup).apply(this, arguments));
  }

  _createClass(ListGroup, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("ul", {
        "class": 'fd-list-group'
      }, [this.$slots.default]);
    }
  }]);

  return ListGroup;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

ListGroup_ListGroup = __decorate([vue_class_component_common_default()({
  name: componentName('list-group')
}), Api_Api.Component('List Group'), Api_Api.defaultSlot('List of list group items.')], ListGroup_ListGroup);

// CONCATENATED MODULE: ./src/components/ListGroup/ListGroupItem.tsx











var ListGroupItem_ListGroupItem =
/*#__PURE__*/
function (_Vue) {
  _inherits(ListGroupItem, _Vue);

  function ListGroupItem() {
    _classCallCheck(this, ListGroupItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListGroupItem).apply(this, arguments));
  }

  _createClass(ListGroupItem, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var action = this.$slots.action;
      return h("li", {
        "class": 'fd-list-group__item'
      }, [this.$slots.default, !!action && h("span", {
        "class": 'fd-list-group__action'
      }, [action])]);
    }
  }]);

  return ListGroupItem;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

ListGroupItem_ListGroupItem = __decorate([vue_class_component_common_default()({
  name: componentName('list-group-item')
}), Api_Api.Component('List Group Item'), Api_Api.defaultSlot('Content displayed by the item. Usually text.'), Api_Api.slot('action', 'Custom actions (displayed on the right side, usually a button)')], ListGroupItem_ListGroupItem);

// CONCATENATED MODULE: ./src/components/ListGroup/index.ts


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// CONCATENATED MODULE: ./src/components/Table/TableUtils.ts
var compareValues = function compareValues(key, order) {
  return function (a, b) {
    if (!(key in a) || !(key in b)) {
      // Property [key] does not exist on a and/or b.
      return 0;
    }

    var varA = a[key];
    var varB = b[key];
    var comparison = 0;

    if (typeof varA === 'string' && typeof varB === 'string') {
      comparison = varA.localeCompare(varB);
    } else {
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
    }

    return order === 'descending' ? comparison * -1 : comparison;
  };
};
// CONCATENATED MODULE: ./src/components/Table/ColumnContainer.ts


var ColumnContainerIdentifier = Symbol();
// CONCATENATED MODULE: ./src/components/Table/Table.tsx
























var toggleOrder = function toggleOrder(order) {
  return order === 'ascending' ? 'descending' : 'ascending';
};

var selectionModeMapping = {
  single: 'Single Selection',
  multiple: 'Multiple Selection'
};
var SelectionModes = Object.keys(selectionModeMapping);

var Table_Table =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Table, _TsxComponent);

  function Table() {
    var _this;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
    _this.sortDescriptor = null;
    _this.columns = [];
    _this.selection = [];
    return _this;
  }

  _createClass(Table, [{
    key: "makeCurrentSelectionValid",
    value: function makeCurrentSelectionValid() {
      switch (this.selectionMode) {
        case null:
          {
            this.selection = [];
            break;
          }

        case 'multiple':
          {
            // Nothing todo
            break;
          }

        case 'single':
          {
            if (this.selection.length === 0) {
              break;
            }

            var smallestIndex = Math.min.apply(Math, _toConsumableArray(this.selection));
            this.selection = [smallestIndex];
            break;
          }
      }
    }
  }, {
    key: "onColumnsChanged",
    value: function onColumnsChanged(newColumns) {
      this.$forceUpdate();
    }
  }, {
    key: "didClickRowAtIndex",
    value: function didClickRowAtIndex(index) {
      if (this.selectionMode == null) {
        return;
      }

      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.selection, 0, index);
      this.$emit('select', this.selection);
    }
  }, {
    key: "didClickInHeaderOfColumn",
    value: function didClickInHeaderOfColumn(tableColumn) {
      if (tableColumn.sortable === false) {
        return;
      }

      var prop = tableColumn.prop;

      if (prop == null) {
        console.warn('Tried to sort a table but clicked table column has no prop.');
        return;
      }

      var current = this.sortDescriptor;

      if (current == null) {
        this.sortDescriptor = {
          prop: prop,
          order: 'ascending'
        };
      } else {
        var order = current.order;
        var needsToggleOrder = tableColumn.prop === prop;
        var newOrder = needsToggleOrder ? toggleOrder(order) : 'ascending';
        this.sortDescriptor = {
          prop: prop,
          order: newOrder
        };
      }
    }
  }, {
    key: "insertTableColumn",
    value: function insertTableColumn(column, index) {
      var newColumns = _toConsumableArray(this.columns);

      if (index == null) {
        newColumns.push(column);
      } else {
        newColumns.splice(index, 0, column);
      }

      this.columns = newColumns;
    }
  }, {
    key: "removeTableColumn",
    value: function removeTableColumn(columnId) {
      var index = this.columns.findIndex(function (column) {
        return columnId === column.columnId;
      });

      if (index < 0) {
        console.warn('Tried to remove table column with id %s but its parent table did not contain a table column that matched.', columnId);
        return;
      }

      var newColumns = _toConsumableArray(this.columns);

      newColumns.splice(index, 1);
      this.columns = newColumns;
    }
  }, {
    key: "isColumnFixed",
    value: function isColumnFixed(columnId) {
      // Only the first column can be fixed. So we get the first column and compare it's id.
      var _this$columns = _slicedToArray(this.columns, 1),
          _this$columns$ = _this$columns[0],
          first = _this$columns$ === void 0 ? null : _this$columns$;

      if (first == null) {
        return false;
      }

      return first.columnId === columnId && this.firstColumnFixed;
    }
  }, {
    key: "isPreceededByFixedColumn",
    value: function isPreceededByFixedColumn(columnId) {
      var _this$columns2 = _slicedToArray(this.columns, 2),
          _this$columns2$ = _this$columns2[0],
          first = _this$columns2$ === void 0 ? null : _this$columns2$,
          _this$columns2$2 = _this$columns2[1],
          second = _this$columns2$2 === void 0 ? null : _this$columns2$2;

      if (second == null || first == null) {
        return false;
      }

      return second.columnId === columnId && this.isColumnFixed(first.columnId);
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this2 = this;

      var tableColumns = this.columns;

      var renderColumn = function renderColumn(columnConfig, row) {
        var isFixed = _this2.isColumnFixed(columnConfig.columnId);

        var cellClasses = {
          'fd-table__fixed-col': isFixed
        };

        var makeCellStyle = function makeCellStyle() {
          var style = columnConfig.alignment === 'center' ? {
            'text-align': 'center'
          } : {};
          var left = _this2.isPreceededByFixedColumn(columnConfig.columnId) ? "".concat(_this2.fixedColumnWidth, "px") : '0';

          if (isFixed) {
            return _objectSpread({}, style, {
              left: left,
              width: "".concat(columnConfig.width, "px")
            });
          } else {
            return _objectSpread({}, style, {
              left: left
            });
          }
        };

        var cellStyle = makeCellStyle();
        return h("td", {
          "class": cellClasses,
          style: cellStyle
        }, [columnConfig.renderCell(row)]);
      };

      var renderRow = function renderRow(row) {
        var key = "row-".concat(row.index);
        return h("tr", {
          key: key,
          attrs: {
            "aria-selected": row.isSelected
          },
          on: {
            "click": function click() {
              return _this2.didClickRowAtIndex(row.index);
            }
          }
        }, [tableColumns.map(function (column) {
          return renderColumn(column, row);
        })]);
      };

      var renderTable = function renderTable() {
        return h("table", {
          "class": _this2.classes
        }, [h("thead", [h("tr", [_this2.$slots.default])]), h("tbody", [_this2.sortedData.map(function (rowData, index) {
          var isSelected = _this2.rowAtIndexIsSelected(index);

          var row = {
            index: index,
            isSelected: isSelected,
            row: rowData
          };
          return renderRow(row);
        })])]);
      };

      var _this$columns3 = _slicedToArray(this.columns, 1),
          _this$columns3$ = _this$columns3[0],
          firstColumn = _this$columns3$ === void 0 ? {
        width: 200
      } : _this$columns3$;

      var fixedColumnWidth = firstColumn.width;

      if (this.firstColumnFixed) {
        var fixedStyle = {
          'margin-left': "".concat(fixedColumnWidth, "px !important"),
          'padding-left': 0
        };
        return h("div", {
          "class": 'fd-table--fixed-wrapper'
        }, [h("div", {
          "class": 'fd-table--fixed',
          style: fixedStyle
        }, [renderTable()])]);
      }

      return renderTable();
    }
  }, {
    key: "rowAtIndexIsSelected",
    value: function rowAtIndexIsSelected(index) {
      return this.selection.includes(index);
    }
  }, {
    key: "sortedData",
    get: function get() {
      var sortDescriptor = this.sortDescriptor;
      var data = this.data;

      if (sortDescriptor == null) {
        return data;
      }

      var copy = _toConsumableArray(data);

      var prop = sortDescriptor.prop,
          order = sortDescriptor.order;
      copy.sort(compareValues(prop, order));
      return copy;
    }
  }, {
    key: "fixedColumnWidth",
    get: function get() {
      if (this.firstColumnFixed === false) {
        return 0;
      }

      var _this$columns4 = _slicedToArray(this.columns, 1),
          _this$columns4$ = _this$columns4[0],
          first = _this$columns4$ === void 0 ? null : _this$columns4$;

      if (first == null) {
        return 0;
      }

      return first.width || 200;
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-table': true
      };
    }
  }]);

  return Table;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('whether the column is fixed (experimental)', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], Table_Table.prototype, "firstColumnFixed", void 0);

__decorate([Api_Api.Prop('displayed data', function (prop) {
  return prop.type('Array<Object>');
}), vue_property_decorator_Prop({
  type: Array,
  required: false,
  default: function _default() {
    return [];
  }
})], Table_Table.prototype, "data", void 0);

__decorate([Api_Api.Prop('selection mode', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(SelectionModes));
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], Table_Table.prototype, "selectionMode", void 0);

__decorate([Watch('selectionMode', {
  immediate: true,
  deep: true
})], Table_Table.prototype, "makeCurrentSelectionValid", null);

__decorate([Watch('columns', {
  immediate: true,
  deep: true
})], Table_Table.prototype, "onColumnsChanged", null);

Table_Table = __decorate([vue_class_component_common_default()({
  name: componentName('Table'),
  provide: function provide() {
    return _defineProperty({}, ColumnContainerIdentifier, this);
  }
}), Api_Api.Component('Table'), Api_Api.Event('select', 'Sent when the selection changes', ['rows', 'Array<number>']), Api_Api.defaultSlot('Table Columns')], Table_Table);

// EXTERNAL MODULE: ./src/lib/uuid.ts
var uuid = __webpack_require__("f42e");

// CONCATENATED MODULE: ./src/components/Table/TableColumn.tsx















var TableColumn_TableColumn =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(TableColumn, _TsxComponent);

  function TableColumn() {
    var _this2;

    _classCallCheck(this, TableColumn);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TableColumn).apply(this, arguments));
    _this2.columnId = Object(uuid["a" /* shortUuid */])();
    return _this2;
  }

  _createClass(TableColumn, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("th", {
        on: {
          "click": this.didClick
        },
        "class": this.classes,
        style: this.styles
      }, [this.label]);
    }
  }, {
    key: "didClick",
    value: function didClick() {
      var table = this.table;

      if (table != null) {
        table.didClickInHeaderOfColumn(this);
      }
    }
  }, {
    key: "created",
    value: function created() {
      var table = this.table;

      if (table != null) {
        var columnId = this.columnId;
        var prop = this.prop;
        var label = this.label; // tslint:disable-next-line:variable-name

        var _this = this;

        var renderCell = function renderCell(request) {
          if (prop == null) {
            var cellSlot = _this.$scopedSlots.default;

            if (cellSlot == null) {
              console.warn('Unable to render table cell because \'prop\' not set.');
              return;
            }

            var renderedCell = cellSlot(request);
            return renderedCell;
          }

          var value = request.row[prop]; // _v is a vue-internal api used to create raw text nodes.
          // @ts-ignore

          return _this._v(value);
        };

        var sortable = this.sortable;
        var width = this.width;
        var alignment = this.alignment;
        var config = {
          sortable: sortable,
          width: width,
          columnId: columnId,
          renderCell: renderCell,
          prop: prop,
          label: label,
          alignment: alignment
        };
        table.insertTableColumn(config);
      }
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      var table = this.table;

      if (table != null) {
        table.removeTableColumn(this.columnId);
      }
    }
  }, {
    key: "sortOrder",
    get: function get() {
      var table = this.table;

      if (table != null) {
        var sortDescriptor = table.sortDescriptor;

        if (sortDescriptor == null) {
          return null;
        }

        if (sortDescriptor.prop !== this.prop) {
          return null;
        }

        return sortDescriptor.order;
      }

      return null;
    }
  }, {
    key: "styles",
    get: function get() {
      var container = this.table;

      if (container == null) {
        return {};
      }

      var isFixed = this.isFixed;
      var style = this.alignment === 'center' ? {
        'text-align': 'center'
      } : {};

      if (isFixed) {
        return _objectSpread({}, style, {
          left: 0,
          width: "".concat(this.width || 200, "px")
        });
      } else {
        var left = this.isPreceededByFixedColumn ? "".concat(container.fixedColumnWidth, "px") : 'auto';
        return _objectSpread({}, style, {
          left: left
        });
      }
    }
  }, {
    key: "classes",
    get: function get() {
      var order = this.sortOrder;
      return {
        'fd-table__sort-column': this.sortable,
        'fd-table__sort-column--dsc': order === 'descending',
        'fd-table__sort-column--asc': order === 'ascending',
        'fd-table__fixed-col': this.isFixed
      };
    }
  }, {
    key: "isFixed",
    get: function get() {
      var container = this.table;

      if (container == null) {
        return false;
      }

      return container.isColumnFixed(this.columnId);
    }
  }, {
    key: "isPreceededByFixedColumn",
    get: function get() {
      var container = this.table;

      if (container == null) {
        return false;
      }

      return container.isPreceededByFixedColumn(this.columnId);
    }
  }]);

  return TableColumn;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('header label', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], TableColumn_TableColumn.prototype, "label", void 0);

__decorate([Api_Api.Prop('alignment', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: 'default'
})], TableColumn_TableColumn.prototype, "alignment", void 0);

__decorate([Api_Api.Prop('field name (key must be present in the data array objects)', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: null
})], TableColumn_TableColumn.prototype, "prop", void 0);

__decorate([Api_Api.Prop('whether the column is sortable', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
})], TableColumn_TableColumn.prototype, "sortable", void 0);

__decorate([Api_Api.Prop('column width - must be set then isFixed is true (experimental)', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Number,
  required: false,
  default: null
})], TableColumn_TableColumn.prototype, "width", void 0);

__decorate([Inject(ColumnContainerIdentifier)], TableColumn_TableColumn.prototype, "table", void 0);

TableColumn_TableColumn = __decorate([vue_class_component_common_default()({
  name: componentName('TableColumn')
}), Api_Api.Component('Table Column'), Api_Api.defaultSlot('Custom Table Cell.')], TableColumn_TableColumn);

// CONCATENATED MODULE: ./src/components/Table/index.ts


// CONCATENATED MODULE: ./src/components/Layout/Col.tsx












var Col_Col =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Col, _TsxComponent);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var content = this.$slots.default;
      return h("div", {
        "class": this.classes
      }, [content]);
    }
  }, {
    key: "classes",
    get: function get() {
      var colClass = 'fd-col';
      var span = this.span;

      if (span != null) {
        return [colClass, "fd-col--".concat(span)];
      }

      return [colClass];
    }
  }]);

  return Col;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: Number,
  required: false,
  default: null
})], Col_Col.prototype, "span", void 0);

Col_Col = __decorate([vue_class_component_common_default()({
  name: componentName('Col')
}), Api_Api.defaultSlot('Column content')], Col_Col);

// CONCATENATED MODULE: ./src/components/Layout/Container.tsx











var Container_Container =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Container, _TsxComponent);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var body = this.$slots.default;
      return h("div", {
        "class": this.classes
      }, [body]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-container': true,
        'fd-container--flex': this.flex,
        'fd-container--fluid': this.fluid
      };
    }
  }]);

  return Container;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Container_Container.prototype, "flex", void 0);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Container_Container.prototype, "fluid", void 0);

Container_Container = __decorate([vue_class_component_common_default()({
  name: componentName('Container')
}), Api_Api.defaultSlot('Content displaye by the container.')], Container_Container);

// CONCATENATED MODULE: ./src/components/Layout/Section.tsx











var Section_Section =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Section, _TsxComponent);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, _getPrototypeOf(Section).apply(this, arguments));
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var body = this.$slots.default;
      var titleSlot = this.$slots.title;
      var title = this.title;

      var renderHeaderWithTitle = function renderHeaderWithTitle() {
        var hasTitle = title != null;
        var hasTitleSlot = !!titleSlot;

        if (!hasTitle && !hasTitleSlot) {
          return null;
        }

        return h("div", {
          "class": 'fd-section__header'
        }, [titleSlot, hasTitle && h("h1", {
          "class": 'fd-section__title'
        }, [title])]);
      };

      return h("section", {
        "class": this.classes
      }, [renderHeaderWithTitle(), body]);
    }
  }, {
    key: "classes",
    get: function get() {
      return ['fd-section'];
    }
  }]);

  return Section;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Section_Section.prototype, "title", void 0);

Section_Section = __decorate([vue_class_component_common_default()({
  name: componentName('Section')
}), Api_Api.Component('Section'), Api_Api.defaultSlot('Section Body'), Api_Api.slot('title', 'Custom Title')], Section_Section);

// CONCATENATED MODULE: ./src/components/Layout/Ui.tsx











var Ui_Ui =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Ui, _TsxComponent);

  function Ui() {
    _classCallCheck(this, Ui);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ui).apply(this, arguments));
  }

  _createClass(Ui, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var sidebar = this.$slots.sidebar;
      var header = this.$slots.header;
      var footer = this.$slots.footer;
      var main = this.$slots.default;
      var headerClasses = ['fd-ui__header'];
      var headerClass = this.headerClass;

      if (headerClass != null) {
        headerClasses.push(headerClass);
      }

      return h("div", {
        "class": 'fd-ui fd-ui--fundamental'
      }, [!!header && h("div", {
        "class": headerClasses
      }, [header]), h("div", {
        "class": 'fd-ui__app'
      }, [h("div", {
        "class": 'fd-app'
      }, [!!sidebar && h("div", {
        "class": 'fd-app__sidebar'
      }, [sidebar]), h("main", {
        "class": 'fd-app__main',
        style: 'padding-top: 20px; background-color: white;'
      }, [main])])]), !!footer && h("div", {
        "class": 'fd-ui__footer'
      }, [footer])]);
    }
  }]);

  return Ui;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: null
})], Ui_Ui.prototype, "headerClass", void 0);

Ui_Ui = __decorate([vue_class_component_common_default()({
  name: componentName('Ui')
}), Api_Api.defaultSlot('Main Content'), Api_Api.slot('sidebar', 'Sidebar Content'), Api_Api.slot('header', 'Header Content'), Api_Api.slot('footer', 'Footer Content')], Ui_Ui);

// CONCATENATED MODULE: ./src/components/Layout/Shell/Shell.tsx











var Shell_Shell =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Shell, _TsxComponent);

  function Shell() {
    _classCallCheck(this, Shell);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shell).apply(this, arguments));
  }

  _createClass(Shell, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'fd-shell fd-shell--fixed fd-shell--fundamentals'
      }, [this.$slots.default]);
    }
  }]);

  return Shell;
}(vue_tsx_TsxComponent);

Shell_Shell = __decorate([vue_class_component_common_default()({
  name: componentName('Shell')
}), Api_Api.Component('Shell'), Api_Api.defaultSlot('Main Content')], Shell_Shell);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("d263");

// CONCATENATED MODULE: ./src/components/Layout/Shell/ShellHeader.tsx












var ShellHeader_ShellHeader =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellHeader, _TsxComponent);

  function ShellHeader() {
    _classCallCheck(this, ShellHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellHeader).apply(this, arguments));
  }

  _createClass(ShellHeader, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return ['fd-shell__header'].concat(this.fixed ? ['fd-shell__header--fixed'] : []);
    }
  }]);

  return ShellHeader;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], ShellHeader_ShellHeader.prototype, "fixed", void 0);

ShellHeader_ShellHeader = __decorate([vue_class_component_common_default()({
  name: componentName('ShellHeader')
}), Api_Api.Component('Shell Header'), Api_Api.defaultSlot('Header Content')], ShellHeader_ShellHeader);

// CONCATENATED MODULE: ./src/components/Layout/Shell/ShellFooter.tsx












var ShellFooter_ShellFooter =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellFooter, _TsxComponent);

  function ShellFooter() {
    _classCallCheck(this, ShellFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellFooter).apply(this, arguments));
  }

  _createClass(ShellFooter, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return ['fd-shell__footer'].concat(this.fixed ? ['fd-shell__footer--fixed'] : []);
    }
  }]);

  return ShellFooter;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], ShellFooter_ShellFooter.prototype, "fixed", void 0);

ShellFooter_ShellFooter = __decorate([vue_class_component_common_default()({
  name: componentName('ShellFooter')
}), Api_Api.Component('Shell Footer'), Api_Api.defaultSlot('Footer Content')], ShellFooter_ShellFooter);

// CONCATENATED MODULE: ./src/components/Layout/Shell/index.ts
// THE bible:
// https://video.sap.com/media/t/1_srw18p0j



// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBar.tsx











var ShellBar_ShellBar =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBar, _TsxComponent);

  function ShellBar() {
    _classCallCheck(this, ShellBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBar).apply(this, arguments));
  }

  _createClass(ShellBar, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'fd-shellbar'
      }, [this.$slots.default]);
    }
  }]);

  return ShellBar;
}(vue_tsx_TsxComponent);

ShellBar_ShellBar = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBar')
}), Api_Api.Component('Shell Bar'), Api_Api.defaultSlot('Main Shell Bar Content')], ShellBar_ShellBar);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarGroup.tsx
















var positionMapping = {
  start: 'start',
  middle: 'middle',
  end: 'end'
};
var Positions = Object.keys(positionMapping);

var ShellBarGroup_ShellBarGroup =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarGroup, _TsxComponent);

  function ShellBarGroup() {
    _classCallCheck(this, ShellBarGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarGroup).apply(this, arguments));
  }

  _createClass(ShellBarGroup, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var classes = "fd-shellbar__group fd-shellbar__group--".concat(this.position);
      return h("div", {
        "class": classes
      }, [this.$slots.default]);
    }
  }]);

  return ShellBarGroup;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('position in the shell bar', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(Positions));
}), vue_property_decorator_Prop({
  required: true,
  type: String,
  validator: function validator(value) {
    return Positions.includes(value);
  }
})], ShellBarGroup_ShellBarGroup.prototype, "position", void 0);

ShellBarGroup_ShellBarGroup = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarGroup')
}), Api_Api.Component('Shell Bar Group'), Api_Api.defaultSlot('Main Group Content')], ShellBarGroup_ShellBarGroup);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarLogo.tsx











var ShellBarLogo_ShellBarLogo =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarLogo, _TsxComponent);

  function ShellBarLogo() {
    _classCallCheck(this, ShellBarLogo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarLogo).apply(this, arguments));
  }

  _createClass(ShellBarLogo, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("router-link", {
        attrs: {
          tag: 'a',
          to: this.to
        },
        "class": 'fd-shellbar__logo'
      }, [h("img", {
        attrs: {
          src: this.src,
          srcset: this.srcset
        }
      })]);
    }
  }]);

  return ShellBarLogo;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('image source', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: true
})], ShellBarLogo_ShellBarLogo.prototype, "src", void 0);

__decorate([Api_Api.Prop('image source set', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null
})], ShellBarLogo_ShellBarLogo.prototype, "srcset", void 0);

__decorate([Api_Api.Prop('link destination', function (prop) {
  return prop.type(String, Object);
}), vue_property_decorator_Prop({
  type: [String, Object],
  default: '/'
})], ShellBarLogo_ShellBarLogo.prototype, "to", void 0);

ShellBarLogo_ShellBarLogo = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarLogo')
}), Api_Api.Component('Shell Bar Logo')], ShellBarLogo_ShellBarLogo);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarProduct.tsx











var ShellBarProduct_ShellBarProduct =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarProduct, _TsxComponent);

  function ShellBarProduct() {
    _classCallCheck(this, ShellBarProduct);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarProduct).apply(this, arguments));
  }

  _createClass(ShellBarProduct, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var title = this.$slots.default;
      return h("div", {
        "class": 'fd-shellbar__product'
      }, [h("span", {
        "class": 'fd-shellbar__title'
      }, [title])]);
    }
  }]);

  return ShellBarProduct;
}(vue_tsx_TsxComponent);

ShellBarProduct_ShellBarProduct = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarProduct')
}), Api_Api.Component('Shell Bar Product'), Api_Api.defaultSlot('Product Title')], ShellBarProduct_ShellBarProduct);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarActions.tsx











var ShellBarActions_ShellBarActions =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarActions, _TsxComponent);

  function ShellBarActions() {
    _classCallCheck(this, ShellBarActions);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarActions).apply(this, arguments));
  }

  _createClass(ShellBarActions, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'fd-shellbar__actions'
      }, [this.$slots.default]);
    }
  }]);

  return ShellBarActions;
}(vue_tsx_TsxComponent);

ShellBarActions_ShellBarActions = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarActions')
}), Api_Api.Component('Shell Bar Actions'), Api_Api.defaultSlot('Shell Bar Action Instances')], ShellBarActions_ShellBarActions);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarAction.tsx











var ShellBarAction_ShellBarAction =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarAction, _TsxComponent);

  function ShellBarAction() {
    _classCallCheck(this, ShellBarAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarAction).apply(this, arguments));
  }

  _createClass(ShellBarAction, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-shellbar__action': true,
        'fd-shellbar__action--show-always': this.showAlways,
        'fd-shellbar__action--collapsible': this.collapsible
      };
    }
  }]);

  return ShellBarAction;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('whether the action is always shown', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: true
})], ShellBarAction_ShellBarAction.prototype, "showAlways", void 0);

__decorate([Api_Api.Prop('whether the action is collapsible', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], ShellBarAction_ShellBarAction.prototype, "collapsible", void 0);

ShellBarAction_ShellBarAction = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarAction')
}), Api_Api.Component('Shell Bar Action'), Api_Api.defaultSlot('The actual action. The only supported element is FdShellBarUserMenu.')], ShellBarAction_ShellBarAction);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarUserMenu.tsx












var ShellBarUserMenu_ShellBarUserMenu =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarUserMenu, _TsxComponent);

  function ShellBarUserMenu() {
    _classCallCheck(this, ShellBarUserMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarUserMenu).apply(this, arguments));
  }

  _createClass(ShellBarUserMenu, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var control = this.$slots.control;
      return h("div", {
        "class": 'fd-user-menu'
      }, [h(Popover_Popover, {
        attrs: {
          placement: 'right'
        }
      }, [h("div", {
        "class": 'fd-user-menu__control',
        slot: 'control',
        attrs: {
          title: 'Experimental'
        }
      }, [control, !control && h(Identifier_Identifier, {
        attrs: {
          size: 's',
          backgroundColor: 'accent-6',
          circle: true,
          icon: 'person-placeholder'
        }
      })]), this.$slots.default])]);
    }
  }]);

  return ShellBarUserMenu;
}(vue_tsx_TsxComponent);

ShellBarUserMenu_ShellBarUserMenu = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarUserMenu')
}), Api_Api.Component('Shell Bar User Menu'), Api_Api.defaultSlot('Menu Items (FdMenuItem)'), Api_Api.slot('control', 'Popover Control (optional). Defaults to a specially configured FdIdentifier.')], ShellBarUserMenu_ShellBarUserMenu);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarProductSwitcher.tsx












var ShellBarProductSwitcher_ShellBarProductSwitcher =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarProductSwitcher, _TsxComponent);

  function ShellBarProductSwitcher() {
    _classCallCheck(this, ShellBarProductSwitcher);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarProductSwitcher).apply(this, arguments));
  }

  _createClass(ShellBarProductSwitcher, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var control = this.$slots.control;
      return h("div", {
        "class": 'fd-product-switcher'
      }, [h(Popover_Popover, {
        attrs: {
          placement: 'right'
        }
      }, [h("div", {
        "class": 'fd-user-menu__control',
        slot: 'control'
      }, [control, !control && h(Button_Button, {
        attrs: {
          styling: 'light',
          icon: 'grid'
        },
        "class": 'fd-button--shell'
      })]), h("div", {
        slot: 'body',
        "class": 'fd-product-switcher__body'
      }, [h("nav", [h("ul", [this.$slots.default])])])])]);
    }
  }]);

  return ShellBarProductSwitcher;
}(vue_tsx_TsxComponent);

ShellBarProductSwitcher_ShellBarProductSwitcher = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarProductSwitcher')
}), Api_Api.Component('Shell Bar Product Switcher'), Api_Api.defaultSlot('Product Items (FdShellBarProductSwitcherItem)'), Api_Api.slot('control', 'Popover Control (optional). Defaults to a specially configured FdButton with grid icon.')], ShellBarProductSwitcher_ShellBarProductSwitcher);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarProductSwitcherItem.tsx












var ShellBarProductSwitcherItem_ShellBarProductSwitcherItem =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarProductSwitcherItem, _TsxComponent);

  function ShellBarProductSwitcherItem() {
    _classCallCheck(this, ShellBarProductSwitcherItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarProductSwitcherItem).apply(this, arguments));
  }

  _createClass(ShellBarProductSwitcherItem, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var content = this.$slots.default;
      var title = h(ShellBarProductSwitcherItemTitle_ShellBarProductSwitcherItemTitle, [this.title]);
      var img = h(ShellBarProductSwitcherItemImg_ShellBarProductSwitcherItemImg, {
        attrs: {
          src: this.src
        }
      });
      var template = [img, title];
      return h("li", [content, !content && (!this.href && !this.to ? template : this.to ? h("a", {
        attrs: {
          href: this.href
        }
      }, [template]) : h("router-link", {
        attrs: {
          to: this.to
        }
      }, [template]))]);
    }
  }]);

  return ShellBarProductSwitcherItem;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('image source', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: ''
})], ShellBarProductSwitcherItem_ShellBarProductSwitcherItem.prototype, "src", void 0);

__decorate([Api_Api.Prop('title', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: ''
})], ShellBarProductSwitcherItem_ShellBarProductSwitcherItem.prototype, "title", void 0);

__decorate([Api_Api.Prop('router link destination', function (prop) {
  return prop.type(String, Object);
}), vue_property_decorator_Prop({
  type: [String, Object],
  required: false,
  default: ''
})], ShellBarProductSwitcherItem_ShellBarProductSwitcherItem.prototype, "to", void 0);

__decorate([Api_Api.Prop('external link destination', function (prop) {
  return prop.type(String, Object);
}), vue_property_decorator_Prop({
  type: [String, Object],
  required: false,
  default: ''
})], ShellBarProductSwitcherItem_ShellBarProductSwitcherItem.prototype, "href", void 0);

ShellBarProductSwitcherItem_ShellBarProductSwitcherItem = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarProductSwitcherItem')
}), Api_Api.Component('Shell Bar Product Switcher Item'), Api_Api.defaultSlot('Product Switcher Item Title')], ShellBarProductSwitcherItem_ShellBarProductSwitcherItem);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarProductSwitcherItemImg.tsx











var ShellBarProductSwitcherItemImg_ShellBarProductSwitcherItemImg =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarProductSwitcherItemImg, _TsxComponent);

  function ShellBarProductSwitcherItemImg() {
    _classCallCheck(this, ShellBarProductSwitcherItemImg);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarProductSwitcherItemImg).apply(this, arguments));
  }

  _createClass(ShellBarProductSwitcherItemImg, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": 'fd-product-switcher__product-icon'
      }, [h("img", {
        attrs: {
          src: this.src,
          alt: ''
        }
      })]);
    }
  }]);

  return ShellBarProductSwitcherItemImg;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('image source', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  required: false,
  default: ''
})], ShellBarProductSwitcherItemImg_ShellBarProductSwitcherItemImg.prototype, "src", void 0);

ShellBarProductSwitcherItemImg_ShellBarProductSwitcherItemImg = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarProductSwitcherItemImg')
}), Api_Api.Component('Shell Bar Product Switcher Item Image')], ShellBarProductSwitcherItemImg_ShellBarProductSwitcherItemImg);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/ShellBarProductSwitcherItemTitle.tsx











var ShellBarProductSwitcherItemTitle_ShellBarProductSwitcherItemTitle =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ShellBarProductSwitcherItemTitle, _TsxComponent);

  function ShellBarProductSwitcherItemTitle() {
    _classCallCheck(this, ShellBarProductSwitcherItemTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShellBarProductSwitcherItemTitle).apply(this, arguments));
  }

  _createClass(ShellBarProductSwitcherItemTitle, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": 'fd-product-switcher__product-title'
      }, [this.$slots.default]);
    }
  }]);

  return ShellBarProductSwitcherItemTitle;
}(vue_tsx_TsxComponent);

ShellBarProductSwitcherItemTitle_ShellBarProductSwitcherItemTitle = __decorate([vue_class_component_common_default()({
  name: componentName('ShellBarProductSwitcherItemTitle')
}), Api_Api.Component('Shell Bar Product Switcher Item Title'), Api_Api.defaultSlot('Product Switcher Item Title')], ShellBarProductSwitcherItemTitle_ShellBarProductSwitcherItemTitle);

// CONCATENATED MODULE: ./src/components/Layout/ShellBar/index.ts











// CONCATENATED MODULE: ./src/components/Layout/App/App.tsx











var App_App =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(App, _TsxComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var header = this.$slots.header;
      var footer = this.$slots.footer;
      var main = this.$slots.default;
      return h("div", {
        "class": 'fd-shell__app'
      }, [header, h("div", {
        "class": 'fd-app'
      }, [main]), footer]);
    }
  }]);

  return App;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: null
})], App_App.prototype, "headerClass", void 0);

App_App = __decorate([vue_class_component_common_default()({
  name: componentName('App')
}), Api_Api.defaultSlot('Main Content'), Api_Api.slot('navigation', 'Navigation Content')], App_App);

// CONCATENATED MODULE: ./src/components/Layout/App/AppNavigation.tsx















var orientationMapping = {
  horizontal: 'Horizontal Navigation (default)',
  vertical: 'Vertical Navigation'
};
var Orientations = Object.keys(orientationMapping);

var AppNavigation_AppNavigation =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(AppNavigation, _TsxComponent);

  function AppNavigation() {
    _classCallCheck(this, AppNavigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppNavigation).apply(this, arguments));
  }

  _createClass(AppNavigation, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      return ['fd-app__navigation', "fd-app__navigation--".concat(this.orientation)];
    }
  }]);

  return AppNavigation;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: String,
  default: 'horizontal',
  validator: function validator(value) {
    return Orientations.includes(value);
  }
})], AppNavigation_AppNavigation.prototype, "orientation", void 0);

AppNavigation_AppNavigation = __decorate([vue_class_component_common_default()({
  name: componentName('AppNavigation')
}), Api_Api.defaultSlot('Navigation Content')], AppNavigation_AppNavigation);

// CONCATENATED MODULE: ./src/components/Layout/App/AppMain.tsx











var AppMain_AppMain =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(AppMain, _TsxComponent);

  function AppMain() {
    _classCallCheck(this, AppMain);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppMain).apply(this, arguments));
  }

  _createClass(AppMain, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("main", {
        "class": 'fd-app__main'
      }, [this.$slots.default]);
    }
  }]);

  return AppMain;
}(vue_tsx_TsxComponent);

AppMain_AppMain = __decorate([vue_class_component_common_default()({
  name: componentName('App')
}), Api_Api.defaultSlot('Main App Content')], AppMain_AppMain);

// CONCATENATED MODULE: ./src/components/Layout/App/index.ts



// CONCATENATED MODULE: ./src/components/Layout/index.ts







// CONCATENATED MODULE: ./src/components/InlineHelp.tsx














var InlineHelp_positionMapping = {
  left: 'Left of icon',
  right: 'Right of icon (default)',
  center: 'Center of icon'
};
var InlineHelp_Positions = Object.keys(InlineHelp_positionMapping);

var InlineHelp_InlineHelp =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(InlineHelp, _TsxComponent);

  function InlineHelp() {
    _classCallCheck(this, InlineHelp);

    return _possibleConstructorReturn(this, _getPrototypeOf(InlineHelp).apply(this, arguments));
  }

  _createClass(InlineHelp, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("span", {
        "class": 'fd-inline-help'
      }, [h("span", {
        "class": this.classes
      }, [this.$slots.default])]);
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        'fd-inline-help__content': true,
        'fd-inline-help__content--bottom-left': this.position === 'left' && this.inline === false,
        'fd-inline-help__content--bottom-right': this.position === 'right' && this.inline === false,
        'fd-inline-help__content--bottom-center': this.position === 'center' && this.inline === false,
        'fd-inline-help__content--left': this.position === 'left' && this.inline === true,
        'fd-inline-help__content--right': this.position === 'right' && this.inline === true
      };
    }
  }]);

  return InlineHelp;
}(vue_tsx_TsxComponent);

__decorate([vue_property_decorator_Prop({
  type: String,
  required: false,
  default: 'right'
}), Api_Api.Prop('location of inline help relative to icon', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(InlineHelp_Positions));
})], InlineHelp_InlineHelp.prototype, "position", void 0);

__decorate([vue_property_decorator_Prop({
  type: Boolean,
  required: false,
  default: false
}), Api_Api.Prop('whether the inline help is displayed adjacent to the icon', function (prop) {
  return prop.type(Boolean);
})], InlineHelp_InlineHelp.prototype, "inline", void 0);

InlineHelp_InlineHelp = __decorate([vue_class_component_common_default()({
  name: componentName('InlineHelp')
}), Api_Api.Component('Inline Help'), Api_Api.defaultSlot('Helpful Text')], InlineHelp_InlineHelp);

// CONCATENATED MODULE: ./src/components/Tile/Tile.tsx
















var Tile_Tile =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Tile, _TsxComponent);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tile).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var media = this.$slots.media;
      var actions = this.$slots.actions;
      var title = this.title;
      var description = this.description;
      var isButton = this.isButton;
      var disabled = this.disabled;
      return h("div", {
        "class": this.classObject,
        attrs: {
          role: isButton ? 'button' : null,
          "aria-disabled": disabled
        }
      }, [media && h("div", {
        "class": 'fd-tile__media'
      }, [media]), h("div", {
        "class": 'fd-tile__content'
      }, [title && h("h2", {
        "class": 'fd-tile__title'
      }, [title]), description && h("p", [description])]), actions && h("div", {
        "class": 'fd-tile__actions'
      }, [actions])]);
    }
  }, {
    key: "classObject",
    get: function get() {
      var _this = this;

      var rowSpanObject = function rowSpanObject() {
        var rowSpan = _this.rowSpan;

        if (typeof rowSpan === 'number') {
          return _defineProperty({}, "fd-has-grid-row-span-".concat(rowSpan), true);
        }

        return {};
      };

      var colSpanObject = function colSpanObject() {
        var colSpan = _this.colSpan;

        if (typeof colSpan === 'number') {
          return _defineProperty({}, "fd-has-grid-column-span-".concat(colSpan), true);
        }

        return {};
      };

      var backgroundColorClasses = this.backgroundColor == null ? {} : _defineProperty({}, Object(lib["backgroundColorClassName"])(this.backgroundColor), true);
      return _objectSpread({}, rowSpanObject(), colSpanObject(), backgroundColorClasses, {
        'fd-tile': true
      });
    }
  }]);

  return Tile;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('title', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Tile_Tile.prototype, "title", void 0);

__decorate([Api_Api.Prop('description', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], Tile_Tile.prototype, "description", void 0);

__decorate([Api_Api.Prop('row span', function (prop) {
  return prop.type(Number);
}), vue_property_decorator_Prop({
  type: Number,
  default: null,
  required: false
})], Tile_Tile.prototype, "rowSpan", void 0);

__decorate([Api_Api.Prop('column span', function (prop) {
  return prop.type(Number);
}), vue_property_decorator_Prop({
  type: Number,
  default: null,
  required: false
})], Tile_Tile.prototype, "colSpan", void 0);

__decorate([Api_Api.Prop('background color', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(String)).acceptValues.apply(_prop$type, _toConsumableArray(lib["Colors"]));
}), vue_property_decorator_Prop({
  required: false,
  default: null,
  type: String
})], Tile_Tile.prototype, "backgroundColor", void 0);

__decorate([Api_Api.Prop('render tile as a button', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Tile_Tile.prototype, "isButton", void 0);

__decorate([Api_Api.Prop('disable tile', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], Tile_Tile.prototype, "disabled", void 0);

Tile_Tile = __decorate([vue_class_component_common_default()({
  name: componentName('Tile')
}), Api_Api.Component('Tile'), Api_Api.slot('media', 'Tile Media'), Api_Api.slot('actions', 'Tile Actions')], Tile_Tile);

// CONCATENATED MODULE: ./src/components/Tile/ProductTile.tsx











var ProductTile_ProductTile =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(ProductTile, _TsxComponent);

  function ProductTile() {
    _classCallCheck(this, ProductTile);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductTile).apply(this, arguments));
  }

  _createClass(ProductTile, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var content = this.$slots.content;
      var title = this.title;
      var isButton = this.isButton;
      var disabled = this.disabled;
      return h("div", {
        "class": 'fd-product-tile',
        attrs: {
          role: isButton ? 'button' : null,
          "aria-disabled": disabled
        }
      }, [h("div", {
        "class": 'fd-product-tile__media',
        style: this.style
      }), h("div", {
        "class": 'fd-product-tile__content'
      }, [title && h("h2", {
        "class": 'fd-product-tile__title'
      }, [title]), content])]);
    }
  }, {
    key: "style",
    get: function get() {
      var url = this.url;

      if (url == null) {
        return {};
      }

      return {
        'background-image': "url(".concat(this.url, ")")
      };
    }
  }]);

  return ProductTile;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('image url', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: true
})], ProductTile_ProductTile.prototype, "url", void 0);

__decorate([Api_Api.Prop('title', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: null,
  required: false
})], ProductTile_ProductTile.prototype, "title", void 0);

__decorate([Api_Api.Prop('render product tile as a button', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], ProductTile_ProductTile.prototype, "isButton", void 0);

__decorate([Api_Api.Prop('disable product tile', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false,
  required: false
})], ProductTile_ProductTile.prototype, "disabled", void 0);

ProductTile_ProductTile = __decorate([vue_class_component_common_default()({
  name: componentName('ProductTile')
}), Api_Api.Component('Product Tile'), Api_Api.slot('content', 'Product Content')], ProductTile_ProductTile);

// CONCATENATED MODULE: ./src/components/Tile/index.tsx


// CONCATENATED MODULE: ./src/components/TileGrid.tsx

















var TileGrid_colMapping = {
  2: '2-Column Grid',
  3: '3-Column Grid',
  4: '4-Column Grid',
  5: '5-Column Grid',
  6: '6-Column Grid'
};
var TileGrid_Cols = Object.keys(TileGrid_colMapping).map(function (value) {
  return Number(value);
});

var TileGrid_TileGrid =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(TileGrid, _TsxComponent);

  function TileGrid() {
    _classCallCheck(this, TileGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(TileGrid).apply(this, arguments));
  }

  _createClass(TileGrid, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.classes
      }, [this.$slots.default]);
    }
  }, {
    key: "classes",
    get: function get() {
      var col = this.col;
      var colClass = col == null ? {} : _defineProperty({}, "fd-tile-grid--".concat(col, "col"), true);
      return _objectSpread({
        'fd-tile-grid': true
      }, colClass);
    }
  }]);

  return TileGrid;
}(vue_tsx_TsxComponent);

__decorate([Api_Api.Prop('number of columns', function (prop) {
  var _prop$type;

  return (_prop$type = prop.type(Number)).acceptValues.apply(_prop$type, _toConsumableArray(TileGrid_Cols));
}), vue_property_decorator_Prop({
  type: Number,
  default: null,
  required: false
})], TileGrid_TileGrid.prototype, "col", void 0);

TileGrid_TileGrid = __decorate([vue_class_component_common_default()({
  name: componentName('TileGrid')
}), Api_Api.Component('Tile Grid'), Api_Api.defaultSlot('Tiles displayed by the grid.')], TileGrid_TileGrid);

// CONCATENATED MODULE: ./src/components/SearchInput/SearchInput.tsx
















var SearchInput_SearchInput =
/*#__PURE__*/
function (_mixins) {
  _inherits(SearchInput, _mixins);

  function SearchInput() {
    var _this;

    _classCallCheck(this, SearchInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchInput).apply(this, arguments));
    _this.searchValue = _this.value;
    return _this;
  }

  _createClass(SearchInput, [{
    key: "handleNewValue",
    value: function handleNewValue(newValue) {
      this.searchValue = newValue;
      this.$emit('input', this.searchValue);
    }
  }, {
    key: "handleSearchClick",
    value: function handleSearchClick() {
      this.emitSearch();
    }
  }, {
    key: "setCurrentValue",
    value: function setCurrentValue(newValue) {
      this.searchValue = newValue;
      this.emitSearch();
      this.$emit('update:value', this.searchValue);
    }
  }, {
    key: "handleKeyboardSearch",
    value: function handleKeyboardSearch(_ref) {
      var keyCode = _ref.keyCode;

      if (keyCode === 13) {
        this.emitSearch();
      } else if (this.$slots.default && this.$slots.default.length > 0) {
        this.emitAutoComplete();
      }
    }
  }, {
    key: "emitSearch",
    value: function emitSearch() {
      this.$emit('search', this.searchValue);
    }
  }, {
    key: "emitAutoComplete",
    value: function emitAutoComplete() {
      this.$emit('autoComplete', this.searchValue);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var suggestionList = this.$slots.default;
      var enableSuggest = suggestionList && suggestionList.length > 0;
      return h("div", {
        "class": 'fd-search-input'
      }, [enableSuggest === true ? h(Popover_Popover, {
        attrs: {
          noArrow: true,
          popoverVisible: false
        }
      }, [h("div", {
        "class": 'fd-combobox-control',
        slot: 'control'
      }, [h(InputGroup_InputGroup, {
        attrs: {
          afterClass: 'fd-input-group__addon--button',
          compact: this.compact
        }
      }, [h(Input_Input, {
        attrs: {
          value: this.searchValue,
          placeholder: this.placeholder,
          compact: this.compact
        },
        nativeOn: {
          "keyup": this.handleKeyboardSearch
        },
        on: {
          "input": this.setCurrentValue
        }
      }), h(Button_Button, {
        attrs: {
          styling: 'light',
          icon: 'search'
        },
        slot: 'after',
        on: {
          "click": this.handleSearchClick
        }
      })])]), suggestionList]) : h("div", {
        "class": 'fd-combobox-control',
        slot: 'control'
      }, [h(InputGroup_InputGroup, {
        attrs: {
          afterClass: 'fd-input-group__addon--button',
          compact: this.compact
        }
      }, [h(Input_Input, {
        attrs: {
          value: this.searchValue,
          placeholder: this.placeholder,
          compact: this.compact
        },
        nativeOn: {
          "keyup": this.handleKeyboardSearch
        },
        on: {
          "input": this.setCurrentValue
        }
      }), h(Button_Button, {
        attrs: {
          styling: 'light',
          icon: 'search'
        },
        slot: 'after',
        on: {
          "click": this.handleSearchClick
        }
      })])])]);
    }
  }]);

  return SearchInput;
}(Object(vue_class_component_common["mixins"])(Uid_Uid));

__decorate([Api_Api.Prop('Value set in the Search Input', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  default: '',
  required: false,
  type: String
})], SearchInput_SearchInput.prototype, "value", void 0);

__decorate([Api_Api.Prop('Placeholder in case the SearchInput is empty', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: '',
  required: false
})], SearchInput_SearchInput.prototype, "placeholder", void 0);

__decorate([Api_Api.Prop('Aria Label', function (prop) {
  return prop.type(String);
}), vue_property_decorator_Prop({
  type: String,
  default: 'Search Input',
  required: false
})], SearchInput_SearchInput.prototype, "ariaLabel", void 0);

__decorate([Api_Api.Prop('whether search input is compact', function (prop) {
  return prop.type(Boolean);
}), vue_property_decorator_Prop({
  type: Boolean,
  default: false
})], SearchInput_SearchInput.prototype, "compact", void 0);

__decorate([Watch('value')], SearchInput_SearchInput.prototype, "handleNewValue", null);

SearchInput_SearchInput = __decorate([vue_class_component_common_default()({
  name: componentName('SearchInput'),
  components: {
    Input: Input_Input,
    InputGroup: InputGroup_InputGroup,
    ClickAwayContainer: ClickAwayContainer_ClickAwayContainer
  }
}), Api_Api.Component('Search Input'), Api_Api.Event('search', 'Triggered when the search button is clicked or enter is pressed from the keyboard.'), Api_Api.Event('autoComplete', 'Trigerred when the value in the SearchInput is changed. \n NOTE: This event will get trigerred only if there are children components in the suggestion.')], SearchInput_SearchInput);

// CONCATENATED MODULE: ./src/components/SearchInput/index.ts

// CONCATENATED MODULE: ./src/config.ts
var _process$env = Object({"NODE_ENV":"production","VUE_APP_FD_VUE_DEV_TOOLS":"disabled","VUE_APP_FD_NAME":"Fundamental Vue","VUE_APP_VERSION":"0.0.1-beta","BASE_URL":"/"}),
    VUE_APP_FD_VUE_DEV_TOOLS = _process$env.VUE_APP_FD_VUE_DEV_TOOLS,
    VUE_APP_FD_NAME = _process$env.VUE_APP_FD_NAME,
    VUE_APP_VERSION = _process$env.VUE_APP_VERSION;
var devToolsEnabled = VUE_APP_FD_VUE_DEV_TOOLS === 'enabled';
var libName = VUE_APP_FD_NAME || '<name not set>';
var version = VUE_APP_VERSION;
// CONCATENATED MODULE: ./src/components/index.ts
































































var components_all = _objectSpread({
  Token: Token_Token,
  Spinner: Spinner_Spinner,
  Modal: Modal_Modal,
  Identifier: Identifier_Identifier,
  Image: Image_Image,
  Link: Link_Link,
  Badge: Badge_Badge,
  Label: Label_Label,
  Status: Status_Status,
  Alert: Alert_Alert,
  ActionBar: ActionBar_ActionBar,
  Icon: components_Icon_Icon,
  InlineHelp: InlineHelp_InlineHelp
}, Layout_namespaceObject, components_Table_namespaceObject, components_Combobox_namespaceObject, components_SearchInput_namespaceObject, components_Panel_namespaceObject, components_Menu_namespaceObject, components_Popover_namespaceObject, Animations_namespaceObject, components_Button_namespaceObject, components_Tabs_namespaceObject, components_SideNav_namespaceObject, Form_namespaceObject, components_Breadcrumb_namespaceObject, components_ListGroup_namespaceObject, components_Tile_namespaceObject, TileGrid_namespaceObject);

var components_$plugin = function $plugin() {
  return {
    install: function install(vue, api) {
      var _arr = Object.keys(components_all);

      for (var _i = 0; _i < _arr.length; _i++) {
        var name = _arr[_i];
        var comp = components_all[name];
        api.registerComponent(vue, comp, name);
      }

      console.log("%c Welcome to ".concat(libName, " %c Detected v").concat(version, " %c"), 'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff', 'background:#1661be ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff', 'background:transparent');
    }
  };
};

var components_plugin = components_$plugin;
// CONCATENATED MODULE: ./src/directives/has-background-color.ts

var has_background_color_hasBackgroundColor = function hasBackgroundColor(_ref, binding) {
  var classList = _ref.classList;
  var newColorName = binding.arg || binding.value;

  if (Object(lib["isColor"])(newColorName)) {
    var colorClass = Object(lib["backgroundColorClassName"])(newColorName);

    if (!classList.contains(colorClass)) {
      classList.add(colorClass);
    }
  }
};
// CONCATENATED MODULE: ./src/directives/icon.ts


var icon_icon = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive(directiveName('icon'), function (_ref, binding) {
  var classList = _ref.classList;

  var classForIcon = function classForIcon(name) {
    return "sap-icon--".concat(name);
  };

  var removeIconIfPresent = function removeIconIfPresent(name) {
    if (name == null) {
      return;
    }

    var iconClass = classForIcon(name);

    if (classList.contains(iconClass)) {
      classList.remove(iconClass);
    }
  };

  var oldValue = binding.oldValue,
      value = binding.value;

  if (typeof oldValue === 'string') {
    removeIconIfPresent(oldValue);
  }

  if (typeof value === 'string') {
    var newClass = classForIcon(value);

    if (!classList.contains(newClass)) {
      classList.add(newClass);
    }
  }
});
// CONCATENATED MODULE: ./src/directives/design-system-utilities.ts








var design_system_utilities_sizeMapping = {
  none: 'none',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large'
};
var Sizes = Object.keys(design_system_utilities_sizeMapping);

var isSize = function isSize(value) {
  return value === undefined || Sizes.includes(value);
};

var designClass = function designClass(prefix, size, side) {
  return side == null ? "fd-has-".concat(prefix, "-").concat(size) : "fd-has-".concat(prefix, "-").concat(side, "-").concat(size);
};

var designClasses = function designClasses(prefix, size) {
  var modifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var top = modifiers.top,
      left = modifiers.left,
      right = modifiers.right,
      bottom = modifiers.bottom;

  if (top == null && left == null && right == null && bottom == null) {
    return [designClass(prefix, size)];
  }

  var classes = [];

  if (top === true) {
    classes.push(designClass(prefix, size, 'top'));
  }

  if (bottom === true) {
    classes.push(designClass(prefix, size, 'bottom'));
  }

  if (left === true) {
    classes.push(designClass(prefix, size, 'left'));
  }

  if (right === true) {
    classes.push(designClass(prefix, size, 'right'));
  }

  return classes;
};

var paddingClasses = function paddingClasses(size) {
  var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return designClasses('padding', size, modifiers);
};

var marginClasses = function marginClasses(size) {
  var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return designClasses('margin', size, modifiers);
};
/*
  Usage:
  v-padding:small
  v-padding:small.left.right.bottom
            ^---^ ^---------------^
             arg      modifiers
*/


var padding = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive(directiveName('padding'), function (_ref, binding) {
  var classList = _ref.classList;
  var arg = binding.arg,
      modifiers = binding.modifiers;

  if (!isSize(arg)) {
    return;
  }

  var size = arg;
  classList.add.apply(classList, _toConsumableArray(paddingClasses(size || 'none', modifiers)));
});
var margin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive(directiveName('margin'), function (_ref2, binding) {
  var classList = _ref2.classList;
  var arg = binding.arg,
      modifiers = binding.modifiers;

  if (!isSize(arg)) {
    return;
  }

  var size = arg;
  classList.add.apply(classList, _toConsumableArray(marginClasses(size || 'none', modifiers)));
});

var isFontWeight = function isFontWeight(value) {
  return value === 'light' || value === 'bold' || value === 'normal';
};

var fontWeight = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive(directiveName('font-weight'), function (_ref3, binding) {
  var classList = _ref3.classList;
  var arg = binding.arg;

  if (!isFontWeight(arg)) {
    return;
  }

  classList.add("fd-has-font-weight-".concat(arg));
});

var isFontFamily = function isFontFamily(value) {
  return ['body', 'header', 'code'].includes(value);
};

var fontFamily = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive(directiveName('font-family'), function (_ref4, binding) {
  var classList = _ref4.classList;
  var arg = binding.arg;

  if (!isFontFamily(arg)) {
    return;
  }

  classList.add("fd-has-font-family-".concat(arg));
});
var design_system_utilities_typeMapping = {
  '-1': 'minus-1',
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6'
};
var design_system_utilities_Types = Object.keys(design_system_utilities_typeMapping);

var isType = function isType(value) {
  return design_system_utilities_Types.includes(value);
};

var type = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive(directiveName('type'), function (_ref5, binding) {
  var classList = _ref5.classList;
  var arg = binding.arg;

  if (!isType(arg)) {
    return 'fd-has-type';
  }

  classList.add("fd-has-type-".concat(design_system_utilities_typeMapping[arg]));
});
// CONCATENATED MODULE: ./src/directives/index.ts






/* harmony default export */ var directives = ({
  install: function install(Vue) {
    Vue.directive('bg', has_background_color_hasBackgroundColor);
    Vue.directive('hasBackgroundColor', has_background_color_hasBackgroundColor);
    Vue.directive('icon', icon_icon);
    Vue.directive('padding', padding);
    Vue.directive('margin', margin);
    Vue.directive('font-weight', fontWeight);
    Vue.directive('font-family', fontFamily);
  }
});
// CONCATENATED MODULE: ./src/index.ts



var src_api = {
  registerComponent: function registerComponent(vue, component, name) {
    var prefixedName = componentName(name);
    console.log("Register component ".concat(prefixedName));
    vue.component(prefixedName, component);
  }
};

var src_installFundamentals = function installFundamentals(vue
/*, options */
) {
  vue.use(directives);
  components_plugin().install(vue, src_api);
};

/* harmony default export */ var src = (src_installFundamentals);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=fundamentalvue.umd.js.map

/***/ })
/******/ ]);