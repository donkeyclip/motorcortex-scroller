'use strict';

var MC = require('@donkeyclip/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MC__default = /*#__PURE__*/_interopDefaultLegacy(MC);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$q = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$d = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$c = fails$d; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$b = fails$d;
var functionBindNative = !fails$b(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;
var call$5 = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$5.bind(call$5) : function () {
  return call$5.apply(call$5, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var bind = FunctionPrototype$1.bind;
var call$4 = FunctionPrototype$1.call;
var uncurryThis$c = NATIVE_BIND && bind.bind(call$4, call$4);
var functionUncurryThis = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis$c(fn);
} : function (fn) {
  return fn && function () {
    return call$4.apply(fn, arguments);
  };
};

var uncurryThis$b = functionUncurryThis;
var toString$3 = uncurryThis$b({}.toString);
var stringSlice = uncurryThis$b(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice(toString$3(it), 8, -1);
};

var global$p = global$q;
var uncurryThis$a = functionUncurryThis;
var fails$a = fails$d;
var classof$4 = classofRaw$1;
var Object$4 = global$p.Object;
var split = uncurryThis$a(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$a(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$o = global$q;
var TypeError$8 = global$o.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$2 = function (it) {
  if (it == undefined) throw TypeError$8("Can't call method on " + it);
  return it;
};

var IndexedObject$1 = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$3 = function (it) {
  return IndexedObject$1(requireObjectCoercible$1(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$b = function (argument) {
  return typeof argument == 'function';
};

var isCallable$a = isCallable$b;

var isObject$7 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var global$n = global$q;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$n[namespace]) : global$n[namespace] && global$n[namespace][method];
};

var uncurryThis$9 = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$9({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$m = global$q;
var userAgent$2 = engineUserAgent;
var process = global$m.process;
var Deno = global$m.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version && userAgent$2) {
  match = userAgent$2.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent$2.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$9 = fails$d; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$9(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$l = global$q;
var getBuiltIn$2 = getBuiltIn$4;
var isCallable$8 = isCallable$b;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$l.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$k = global$q;
var String$3 = global$k.String;

var tryToString$1 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$j = global$q;
var isCallable$7 = isCallable$b;
var tryToString = tryToString$1;
var TypeError$7 = global$j.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$2 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError$7(tryToString(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$1(func);
};

var global$i = global$q;
var call$3 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$6 = isObject$7;
var TypeError$6 = global$i.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$6(val = call$3(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
  throw TypeError$6("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$h = global$q; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty$1 = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$1(global$h, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$h[key] = value;
  }

  return value;
};

var global$g = global$q;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$g[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$f = global$q;
var requireObjectCoercible = requireObjectCoercible$2;
var Object$2 = global$f.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$4 = function (argument) {
  return Object$2(requireObjectCoercible(argument));
};

var uncurryThis$8 = functionUncurryThis;
var toObject$3 = toObject$4;
var hasOwnProperty = uncurryThis$8({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$7 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$2 = uncurryThis$7(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id + postfix, 36);
};

var global$e = global$q;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$e.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$d = global$q;
var call$2 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;
var TypeError$5 = global$d.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$2(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError$5("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$c = global$q;
var isObject$4 = isObject$7;
var document$1 = global$c.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$6 = descriptors;
var fails$8 = fails$d;
var createElement = documentCreateElement; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$6 && !fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$5 = descriptors;
var call$1 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$4 = descriptors;
var fails$7 = fails$d; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$b = global$q;
var isObject$3 = isObject$7;
var String$2 = global$b.String;
var TypeError$4 = global$b.TypeError; // `Assert: Type(argument) is Object`

var anObject$2 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw TypeError$4(String$2(argument) + ' is not an object');
};

var global$a = global$q;
var DESCRIPTORS$3 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$1 = anObject$2;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$3 = global$a.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$2 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$3 = DESCRIPTORS$2 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1 = {exports: {}};

var uncurryThis$6 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString = uncurryThis$6(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$9 = global$q;
var isCallable$4 = isCallable$b;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$9.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$8 = global$q;
var uncurryThis$5 = functionUncurryThis;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$8.TypeError;
var WeakMap = global$8.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$5(store.get);
  var wmhas = uncurryThis$5(store.has);
  var wmset = uncurryThis$5(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$1 = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || DESCRIPTORS$1 && getDescriptor(FunctionPrototype, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$7 = global$q;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$3(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$1(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$7) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$3(this) && getInternalState(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max$1 = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$4 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$4; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$3(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$4 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push$1 = uncurryThis$4([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push$1(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push$1(result, key);
  }

  return result;
};

var enumBugKeys$2 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$2;
var hiddenKeys = enumBugKeys$1.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject = anObject$2;
var concat$1 = uncurryThis$3([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$6 = fails$d;
var isCallable$2 = isCallable$b;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$2(detection) ? fails$6(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$6 = global$q;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$6;
  } else if (STATIC) {
    target = global$6[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$6[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var wellKnownSymbol$4 = wellKnownSymbol$6;
var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
var test$1 = {};
test$1[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test$1) === '[object z]';

var global$5 = global$q;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol$3 = wellKnownSymbol$6;
var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var Object$1 = global$5.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var global$4 = global$q;
var classof$2 = classof$3;
var String$1 = global$4.String;

var toString$1 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var global$3 = global$q;
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var createProperty$1 = createProperty$2;
var Array$2 = global$3.Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$2(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$2(max(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);

  result.length = n;
  return result;
};

var arraySlice = arraySliceSimple;
var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];

    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }

    if (j !== i++) array[j] = element;
  }

  return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }

  return array;
};

var arraySort = mergeSort;

var fails$5 = fails$d;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$5(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var userAgent$1 = engineUserAgent;
var firefox = userAgent$1.match(/firefox\/(\d+)/i);
var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;
var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;
var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
var engineWebkitVersion = !!webkit && +webkit[1];

var $$2 = _export;
var uncurryThis$2 = functionUncurryThis;
var aCallable = aCallable$2;
var toObject$2 = toObject$4;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var toString = toString$1;
var fails$4 = fails$d;
var internalSort = arraySort;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;
var test = [];
var un$Sort = uncurryThis$2(test.sort);
var push = uncurryThis$2(test.push); // IE8-

var FAILS_ON_UNDEFINED = fails$4(function () {
  test.sort(undefined);
}); // V8 bug

var FAILS_ON_NULL = fails$4(function () {
  test.sort(null);
}); // Old WebKit

var STRICT_METHOD = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails$4(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;
  var result = '';
  var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;

      case 68:
      case 71:
        value = 4;
        break;

      default:
        value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({
        k: chr + index,
        v: value
      });
    }
  }

  test.sort(function (a, b) {
    return b.v - a.v;
  });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});
var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
}; // `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort


$$2({
  target: 'Array',
  proto: true,
  forced: FORCED$1
}, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);
    var array = toObject$2(this);
    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);
    var items = [];
    var arrayLength = lengthOfArrayLike$1(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];

    while (index < arrayLength) delete array[index++];

    return array;
  }
});

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$2; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

var DESCRIPTORS = descriptors;
var uncurryThis$1 = functionUncurryThis;
var call = functionCall;
var fails$3 = fails$d;
var objectKeys = objectKeys$1;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$4;
var IndexedObject = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe

var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var defineProperty = Object.defineProperty;
var concat = uncurryThis$1([].concat); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

var objectAssign = !$assign || fails$3(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$1(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

var $$1 = _export;
var assign = objectAssign; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing

$$1({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

var classof$1 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$1(argument) == 'Array';
};

var uncurryThis = functionUncurryThis;
var fails$2 = fails$d;
var isCallable = isCallable$b;
var classof = classof$3;
var getBuiltIn = getBuiltIn$4;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$2 = global$q;
var isArray$1 = isArray$2;
var isConstructor = isConstructor$1;
var isObject$1 = isObject$7;
var wellKnownSymbol$2 = wellKnownSymbol$6;
var SPECIES$1 = wellKnownSymbol$2('species');
var Array$1 = global$2.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === Array$1 || isArray$1(C.prototype))) C = undefined;else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$1 = fails$d;
var wellKnownSymbol$1 = wellKnownSymbol$6;
var V8_VERSION$1 = engineV8Version;
var SPECIES = wellKnownSymbol$1('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$1(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $ = _export;
var global$1 = global$q;
var fails = fails$d;
var isArray = isArray$2;
var isObject = isObject$7;
var toObject = toObject$4;
var lengthOfArrayLike = lengthOfArrayLike$4;
var createProperty = createProperty$2;
var arraySpeciesCreate = arraySpeciesCreate$1;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol = wellKnownSymbol$6;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1 = global$1.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var TimeCapsule = new MC__default["default"].TimeCapsule();
var prefix = "@donkeyclip/scrollbar_player";

var Player = /*#__PURE__*/function () {
  /**
   * @param {object} options - The options object (optional). Supported options are:
   * - clip: the Clip object
   * - mode: one of chapters or free. If it is anchor then the clip will move back and forwards to anchor points
   * - chapters: an array of objects each of which represents a chapter. The object has the following structure:
   *  - name
   *  - millisecond
   * - wheelSpeed: a value from 1 to 10. Default 5
   * - transitionSpeed: a number > 0 that defines the speed of the transition
   * - swipeAxis: (either 'vertical' or 'horizontal'. Default = 'vertical')
   * - easing: any of the supported MotorCortex easings
   * - progressBar: an object with progressBar configuration:
   *  - display: (boolean, default = true)
   *  - color: the color of the scrollbar (default purple)
   *  - position: (either "left", "right", "top" or "bottom", default "right")
   **/
  function Player() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Player);

    this.clip = options.clip;
    this.host = this.clip.props.host;
    this.swipeAxis = (options.swipeAxis || "vertical") === "vertical" ? "clientY" : "clientX";
    var mode = options.mode || "free";

    if (mode === "free") {
      this.host.onwheel = this.handlePlainWheel.bind(this);
      this.journey = TimeCapsule.startJourney(this.clip);
      this.host.addEventListener("touchstart", this._touchstart.bind(this));
      this.host.addEventListener("touchmove", this._touchmove.bind(this));
    } else if (mode === "chapters") {
      this.transitionTimeout = null;
      this.transitionSpeed = options.transitionSpeed || 1;
      this.easing = MC__default["default"].utils.easings[options.easing || "easeOutQuart"];
      this.transitionStart = null;
      options.chapters.sort(function (a, b) {
        return a.millisecond - b.millisecond;
      });
      this.chapters = options.chapters;
      this.transitioning = false;
      this.host.onwheel = this.handleChapterWheel.bind(this);
      this.host.addEventListener("touchstart", this._touchstart.bind(this));
      this.host.addEventListener("touchmove", this._touchmove.bind(this));
      this.host.addEventListener("touchend", this._chapterTouchend.bind(this));
    }

    var speedFactor = 5 / (options.wheelSpeed || 5);
    this.speed = 1 / speedFactor;
    var scrollbarOptions = {
      display: true,
      position: "right",
      color: "purple"
    };

    if (options.progressBar !== undefined) {
      Object.assign(scrollbarOptions, options.progressBar);
    }

    this._setupScrollbar(scrollbarOptions);
  }

  _createClass(Player, [{
    key: "_setupScrollbar",
    value: function _setupScrollbar(options) {
      var _this = this;

      if (options.display === false) {
        return;
      }

      var scrollbarDiv = document.createElement("div");
      scrollbarDiv.setAttribute("id", "".concat(prefix, "-scrollbarId"));
      var cssAttrs;
      var variable;

      switch (options.position) {
        case "left":
          cssAttrs = "left:0px; top: 0px; width: 2px; height: 0%;";
          variable = "height";
          break;

        case "right":
          cssAttrs = "right:0px; top: 0px; width: 2px; height: 0%;";
          variable = "height";
          break;

        case "top":
          cssAttrs = "top:0px; left: 0px; height: 2px; width: 0%;";
          variable = "width";
          break;

        case "bottom":
          cssAttrs = "bottom:0px; left: 0px; height: 2px; width: 0%;";
          variable = "width";
          break;
      }

      scrollbarDiv.setAttribute("style", "".concat(cssAttrs, " position:absolute; background: ").concat(options.color, ";"));
      this.host.appendChild(scrollbarDiv);
      this.clip.subscribe("".concat(prefix, "_").concat(new Date().getTime()), function (ms
      /*, state*/
      ) {
        scrollbarDiv.style[variable] = "".concat(100 * ms / _this.clip.duration, "%");
      });
    }
  }, {
    key: "_touchstart",
    value: function _touchstart(ev) {
      ev.preventDefault();

      if (ev.touches.length === 1) {
        this.previousTouch = ev.touches[0][this.swipeAxis];
        this.transitioning = false;
      }
    }
  }, {
    key: "_touchmove",
    value: function _touchmove(ev) {
      ev.preventDefault();
      this.transitioning = false;

      if (this.transitionTimeout !== null) {
        clearTimeout(this.transitionTimeout);
      }

      var distance = this.previousTouch - event.touches[0][this.swipeAxis];

      if (distance > 0) {
        this.direction = "fw";
      } else {
        this.direction = "bw";
      }

      this.previousTouch = event.touches[0][this.swipeAxis];
      var millisecondsDelta = 10 * distance * this.speed;
      var journey = TimeCapsule.startJourney(this.clip);
      var newStation = this.clip.runTimeInfo.currentMillisecond + millisecondsDelta;

      if (newStation < 0) {
        newStation = 0;
        millisecondsDelta = 0;
      } else if (newStation > this.clip.duration) {
        newStation = this.clip.duration;
        millisecondsDelta = 0;
      }

      journey.destination(newStation);
    }
  }, {
    key: "_chapterTouchend",
    value: function _chapterTouchend(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.direction === "fw" && this.clip.runTimeInfo.currentMillisecond !== this.clip.duration) {
        var nextChpater = this._getNextChapter(this.clip.runTimeInfo.currentMillisecond);

        this.transitionTimeout = setTimeout(function () {
          _this2.transitionToChapter(nextChpater, "fw");
        }, this.latency);
      } else if (this.direction === "bw" && this.clip.runTimeInfo.currentMillisecond !== 0) {
        var _nextChpater = this._getPreviousChapter(this.clip.runTimeInfo.currentMillisecond);

        this.transitionTimeout = setTimeout(function () {
          _this2.transitionToChapter(_nextChpater, "bw");
        }, this.latency);
      }
    }
  }, {
    key: "_getNextChapter",
    value: function _getNextChapter(millisecond) {
      for (var i = 0; i < this.chapters.length; i++) {
        var chapter = this.chapters[i];

        if (chapter.millisecond > millisecond) {
          return chapter.millisecond;
        }
      }

      return this.clip.duration;
    }
  }, {
    key: "_getPreviousChapter",
    value: function _getPreviousChapter(millisecond) {
      for (var i = this.chapters.length - 1; i >= 0; i--) {
        var chapter = this.chapters[i];

        if (chapter.millisecond < millisecond) {
          return chapter.millisecond;
        }
      }

      return 0;
    }
  }, {
    key: "handleChapterWheel",
    value: function handleChapterWheel(event) {
      var _this3 = this;

      event.preventDefault();
      this.transitioning = false;

      if (this.transitionTimeout !== null) {
        clearTimeout(this.transitionTimeout);
      }

      var millisecondsDelta = event.deltaY * this.speed;
      var journey = TimeCapsule.startJourney(this.clip);
      var newStation = this.clip.runTimeInfo.currentMillisecond + millisecondsDelta;

      if (newStation < 0) {
        newStation = 0;
        millisecondsDelta = 0;
      } else if (newStation > this.clip.duration) {
        newStation = this.clip.duration;
        millisecondsDelta = 0;
      }

      if (millisecondsDelta > 0) {
        var nextChpater = this._getNextChapter(newStation);

        this.transitionTimeout = setTimeout(function () {
          _this3.transitionToChapter(nextChpater, "fw");
        }, this.latency);
      } else if (millisecondsDelta < 0) {
        var _nextChpater2 = this._getPreviousChapter(newStation);

        this.transitionTimeout = setTimeout(function () {
          _this3.transitionToChapter(_nextChpater2, "bw");
        }, this.latency);
      }

      journey.destination(newStation);
    }
  }, {
    key: "transitionToChapter",
    value: function transitionToChapter(millisecond) {
      this.transitioning = true;
      this.transitionStart = null;
      this.targetMillisecond = millisecond;
      this.startMillisecond = this.clip.runTimeInfo.currentMillisecond;
      this.journey = TimeCapsule.startJourney(this.clip);
      this.direction = this.targetMillisecond >= this.startMillisecond ? "fw" : "bw";
      window.requestAnimationFrame(this._step.bind(this));
    }
  }, {
    key: "_step",
    value: function _step(timestamp) {
      if (this.transitionStart === null) {
        this.transitionStart = timestamp;
      }

      var progress = timestamp - this.transitionStart;
      var completed = false;
      var station;

      if (this.direction === "fw") {
        station = this.startMillisecond + progress * this.transitionSpeed;

        if (station > this.targetMillisecond) {
          station = this.targetMillisecond;
          completed = true;
        }
      } else {
        station = this.startMillisecond - progress * this.transitionSpeed;

        if (station < this.targetMillisecond) {
          station = this.targetMillisecond;
          completed = true;
        }
      }

      if (this.transitioning === false) {
        return;
      }

      var easedProgress = Math.abs(station - this.startMillisecond) / Math.abs(this.targetMillisecond - this.startMillisecond);
      var easedMillisecond;

      if (this.direction === "fw") {
        easedMillisecond = this.startMillisecond + this.easing(easedProgress) * (this.targetMillisecond - this.startMillisecond);
      } else {
        easedMillisecond = this.startMillisecond - this.easing(easedProgress) * (this.startMillisecond - this.targetMillisecond);
      }

      this.journey.station(easedMillisecond);

      if (completed) {
        this.journey.destination();
      } else {
        window.requestAnimationFrame(this._step.bind(this));
      }
    }
  }, {
    key: "handlePlainWheel",
    value: function handlePlainWheel(event) {
      event.preventDefault();
      var millisecondsDelta = event.deltaY * this.speed;
      var newStation = this.clip.runTimeInfo.currentMillisecond + millisecondsDelta;

      if (newStation < 0) {
        newStation = 0;
      } else if (newStation > this.clip.duration) {
        newStation = this.clip.duration;
      }

      this.journey.station(newStation);
    }
  }]);

  return Player;
}();

module.exports = Player;
