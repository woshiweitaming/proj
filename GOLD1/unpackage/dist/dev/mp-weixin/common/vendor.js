(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/*!**********************************************!*\
  !*** /Users/suan/Desktop/DBS/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));
var _state = _interopRequireDefault(__webpack_require__(/*! ./state.js */ 14));
var _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations.js */ 15));
var getters = _interopRequireWildcard(__webpack_require__(/*! ./getters.js */ 16));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);var _default =

new _vuex.default.Store({
  state: _state.default,
  mutations: _mutations.default,
  getters: getters });exports.default = _default;

/***/ }),

/***/ 13:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ 14:
/*!**********************************************!*\
  !*** /Users/suan/Desktop/DBS/store/state.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 状态
                                                                                                      */
var state = {
  globalLang: 'cn' };var _default =


state;exports.default = _default;

/***/ }),

/***/ 148:
/*!****************************************************!*\
  !*** /Users/suan/Desktop/DBS/data/prefixSorted.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var prefixSorted = [
{ prefix: '1', en: 'USA', cn: '美国' },
{ prefix: '1', en: 'PuertoRico', cn: '波多黎各' },
{ prefix: '1', en: 'Canada', cn: '加拿大' },
{ prefix: '7', en: 'Russia', cn: '俄罗斯' },
{ prefix: '7', en: 'Kazeakhstan', cn: '哈萨克斯坦' },
{ prefix: '20', en: 'Egypt', cn: '埃及' },
{ prefix: '27', en: 'South Africa', cn: '南非' },
{ prefix: '30', en: 'Greece', cn: '希腊' },
{ prefix: '31', en: 'Netherlands', cn: '荷兰' },
{ prefix: '32', en: 'Belgium', cn: '比利时' },
{ prefix: '33', en: 'France', cn: '法国' },
{ prefix: '34', en: 'Spain', cn: '西班牙' },
{ prefix: '36', en: 'Hungary', cn: '匈牙利' },
{ prefix: '40', en: 'Romania', cn: '罗马尼亚' },
{ prefix: '41', en: 'Switzerland', cn: '瑞士' },
{ prefix: '43', en: 'Austria', cn: '奥地利' },
{ prefix: '44', en: 'United Kingdom', cn: '英国' },
{ prefix: '44', en: 'Jersey', cn: '泽西岛' },
{ prefix: '44', en: 'Isle of Man', cn: '马恩岛' },
{ prefix: '44', en: 'Guernsey', cn: '根西' },
{ prefix: '45', en: 'Denmark', cn: '丹麦' },
{ prefix: '46', en: 'Sweden', cn: '瑞典' },
{ prefix: '47', en: 'Norway', cn: '挪威' },
{ prefix: '48', en: 'Poland', cn: '波兰' },
{ prefix: '51', en: 'Peru', cn: '秘鲁' },
{ prefix: '52', en: 'Mexico', cn: '墨西哥' },
{ prefix: '53', en: 'Cuba', cn: '古巴' },
{ prefix: '54', en: 'Argentina', cn: '阿根廷' },
{ prefix: '55', en: 'Brazill', cn: '巴西' },
{ prefix: '56', en: 'Chile', cn: '智利' },
{ prefix: '57', en: 'Colombia', cn: '哥伦比亚' },
{ prefix: '58', en: 'Venezuela', cn: '委内瑞拉' },
{ prefix: '60', en: 'Malaysia', cn: '马来西亚' },
{ prefix: '61', en: 'Australia', cn: '澳大利亚' },
{ prefix: '62', en: 'Indonesia', cn: '印度尼西亚' },
{ prefix: '63', en: 'Philippines', cn: '菲律宾' },
{ prefix: '64', en: 'NewZealand', cn: '新西兰' },
{ prefix: '65', en: 'Singapore', cn: '新加坡' },
{ prefix: '66', en: 'Thailand', cn: '泰国' },
{ prefix: '81', en: 'Japan', cn: '日本' },
{ prefix: '82', en: 'Korea', cn: '韩国' },
{ prefix: '84', en: 'Vietnam', cn: '越南' },
{ prefix: '86', en: 'China', cn: '中国' },
{ prefix: '90', en: 'Turkey', cn: '土耳其' },
{ prefix: '91', en: 'Indea', cn: '印度' },
{ prefix: '92', en: 'Pakistan', cn: '巴基斯坦' },
{ prefix: '93', en: 'Italy', cn: '意大利' },
{ prefix: '93', en: 'Afghanistan', cn: '阿富汗' },
{ prefix: '94', en: 'SriLanka', cn: '斯里兰卡' },
{ prefix: '94', en: 'Germany', cn: '德国' },
{ prefix: '95', en: 'Myanmar', cn: '缅甸' },
{ prefix: '98', en: 'Iran', cn: '伊朗' },
{ prefix: '212', en: 'Morocco', cn: '摩洛哥' },
{ prefix: '213', en: 'Algera', cn: '阿尔格拉' },
{ prefix: '216', en: 'Tunisia', cn: '突尼斯' },
{ prefix: '218', en: 'Libya', cn: '利比亚' },
{ prefix: '220', en: 'Gambia', cn: '冈比亚' },
{ prefix: '221', en: 'Senegal', cn: '塞内加尔' },
{ prefix: '222', en: 'Mauritania', cn: '毛里塔尼亚' },
{ prefix: '223', en: 'Mali', cn: '马里' },
{ prefix: '224', en: 'Guinea', cn: '几内亚' },
{ prefix: '225', en: 'Cote divoire', cn: '科特迪沃' },
{ prefix: '226', en: 'Burkina Faso', cn: '布基纳法索' },
{ prefix: '227', en: 'Niger', cn: '尼日尔' },
{ prefix: '228', en: 'Togo', cn: '多哥' },
{ prefix: '229', en: 'Benin', cn: '贝宁' },
{ prefix: '230', en: 'Mauritius', cn: '毛里求斯' },
{ prefix: '231', en: 'Liberia', cn: '利比里亚' },
{ prefix: '232', en: 'Sierra Leone', cn: '塞拉利昂' },
{ prefix: '233', en: 'Ghana', cn: '加纳' },
{ prefix: '234', en: 'Nigeria', cn: '尼日利亚' },
{ prefix: '235', en: 'Chad', cn: '乍得' },
{ prefix: '236', en: 'Central African Republic', cn: '中非共和国' },
{ prefix: '237', en: 'Cameroon', cn: '喀麦隆' },
{ prefix: '238', en: 'Cape Verde', cn: '佛得角' },
{ prefix: '239', en: 'Sao Tome and Principe', cn: '圣多美和普林西比' },
{ prefix: '240', en: 'Guinea', cn: '几内亚' },
{ prefix: '241', en: 'Gabon', cn: '加蓬' },
{ prefix: '242', en: 'Republic of the Congo', cn: '刚果共和国' },
{ prefix: '243', en: 'Democratic Republic of the Congo', cn: '刚果民主共和国' },
{ prefix: '244', en: 'Angola', cn: '安哥拉' },
{ prefix: '247', en: 'Ascension', cn: '阿森松岛' },
{ prefix: '248', en: 'Seychelles', cn: '塞舌尔' },
{ prefix: '249', en: 'Sudan', cn: '苏丹' },
{ prefix: '250', en: 'Rwanda', cn: '卢旺达' },
{ prefix: '251', en: 'Ethiopia', cn: '埃塞俄比亚' },
{ prefix: '253', en: 'Djibouti', cn: '吉布提' },
{ prefix: '254', en: 'Kenya', cn: '肯尼亚' },
{ prefix: '255', en: 'Tanzania', cn: '坦桑尼亚' },
{ prefix: '256', en: 'Uganda', cn: '乌干达' },
{ prefix: '257', en: 'Burundi', cn: '布隆迪' },
{ prefix: '258', en: 'Mozambique', cn: '莫桑比克' },
{ prefix: '260', en: 'Zambia', cn: '赞比亚' },
{ prefix: '261', en: 'Madagascar', cn: '马达加斯加' },
{ prefix: '262', en: 'Reunion', cn: '留尼汪' },
{ prefix: '262', en: 'Mayotte', cn: '马约特' },
{ prefix: '263', en: 'Zimbabwe', cn: '津巴布韦' },
{ prefix: '264', en: 'Namibia', cn: '纳米比亚' },
{ prefix: '265', en: 'Malawi', cn: '马拉维' },
{ prefix: '266', en: 'Lesotho', cn: '莱索托' },
{ prefix: '267', en: 'Botwana', cn: '博茨瓦纳' },
{ prefix: '268', en: 'Swaziland', cn: '斯威士兰' },
{ prefix: '269', en: 'Comoros', cn: '科摩罗' },
{ prefix: '297', en: 'Aruba', cn: '阿鲁巴' },
{ prefix: '298', en: 'Faroe Islands', cn: '法罗群岛' },
{ prefix: '299', en: 'Greenland', cn: '格陵兰' },
{ prefix: '350', en: 'Gibraltar', cn: '直布罗陀' },
{ prefix: '351', en: 'Portugal', cn: '葡萄牙' },
{ prefix: '352', en: 'Luxembourg', cn: '卢森堡' },
{ prefix: '353', en: 'Ireland', cn: '爱尔兰' },
{ prefix: '354', en: 'Iceland', cn: '冰岛' },
{ prefix: '355', en: 'Albania', cn: '阿尔巴尼亚' },
{ prefix: '356', en: 'Malta', cn: '马耳他' },
{ prefix: '357', en: 'Cyprus', cn: '塞浦路斯' },
{ prefix: '358', en: 'Finland', cn: '芬兰' },
{ prefix: '359', en: 'Bulgaria', cn: '保加利亚' },
{ prefix: '370', en: 'Lithuania', cn: '立陶宛' },
{ prefix: '371', en: 'Latvia', cn: '拉脱维亚' },
{ prefix: '372', en: 'Estonia', cn: '爱沙尼亚' },
{ prefix: '373', en: 'Moldova', cn: '摩尔多瓦' },
{ prefix: '374', en: 'Armenia', cn: '亚美尼亚' },
{ prefix: '375', en: 'Belarus', cn: '白俄罗斯' },
{ prefix: '376', en: 'Andorra', cn: '安道尔' },
{ prefix: '377', en: 'Monaco', cn: '摩纳哥' },
{ prefix: '378', en: 'San Marino', cn: '圣马力诺' },
{ prefix: '380', en: 'Ukraine', cn: '乌克兰' },
{ prefix: '381', en: 'Serbia', cn: '塞尔维亚' },
{ prefix: '382', en: 'Montenegro', cn: '黑山' },
{ prefix: '383', en: 'Kosovo', cn: '科索沃' },
{ prefix: '385', en: 'Croatia', cn: '克罗地亚' },
{ prefix: '386', en: 'Slovenia', cn: '斯洛文尼亚' },
{ prefix: '387', en: 'Bosnia and Herzegovina', cn: '波斯尼亚和黑塞哥维那' },
{ prefix: '389', en: 'Macedonia', cn: '马其顿' },
{ prefix: '420', en: 'Czech Republic', cn: '捷克共和国' },
{ prefix: '421', en: 'Slovakia', cn: '斯洛伐克' },
{ prefix: '423', en: 'Liechtenstein', cn: '列支敦士登' },
{ prefix: '501', en: 'Belize', cn: '伯利兹' },
{ prefix: '502', en: 'Guatemala', cn: '危地马拉' },
{ prefix: '503', en: 'EISalvador', cn: '艾萨尔瓦多' },
{ prefix: '504', en: 'Honduras', cn: '洪都拉斯' },
{ prefix: '505', en: 'Nicaragua', cn: '尼加拉瓜' },
{ prefix: '506', en: 'Costa Rica', cn: '哥斯达黎加' },
{ prefix: '507', en: 'Panama', cn: '巴拿马' },
{ prefix: '509', en: 'Haiti', cn: '海地' },
{ prefix: '590', en: 'Guadeloupe', cn: '瓜德罗普' },
{ prefix: '591', en: 'Bolivia', cn: '玻利维亚' },
{ prefix: '592', en: 'Guyana', cn: '圭亚那' },
{ prefix: '593', en: 'Ecuador', cn: '厄瓜多尔' },
{ prefix: '594', en: 'French Guiana', cn: '法属圭亚那' },
{ prefix: '595', en: 'Paraguay', cn: '巴拉圭' },
{ prefix: '596', en: 'Martinique', cn: '马提尼克' },
{ prefix: '597', en: 'Suriname', cn: '苏里南' },
{ prefix: '598', en: 'Uruguay', cn: '乌拉圭' },
{ prefix: '599', en: 'Netherlands Antillse', cn: '荷属安的列斯' },
{ prefix: '670', en: 'Timor Leste', cn: '东帝汶' },
{ prefix: '673', en: 'Brunei', cn: '文莱' },
{ prefix: '675', en: 'Papua New Guinea', cn: '巴布亚新几内亚' },
{ prefix: '676', en: 'Tonga', cn: '汤加' },
{ prefix: '678', en: 'Vanuatu', cn: '瓦努阿图' },
{ prefix: '679', en: 'Fiji', cn: '斐济' },
{ prefix: '682', en: 'Cook Islands', cn: '库克群岛' },
{ prefix: '684', en: 'Samoa Eastern', cn: '萨摩亚东部' },
{ prefix: '685', en: 'Samoa Western', cn: '萨摩亚西部' },
{ prefix: '687', en: 'New Caledonia', cn: '新喀里多尼亚' },
{ prefix: '689', en: 'French Polynesia', cn: '法属波利尼西亚' },
{ prefix: '852', en: 'Hong Kong', cn: '香港' },
{ prefix: '853', en: 'Macao', cn: '澳门' },
{ prefix: '855', en: 'Cambodia', cn: '柬埔寨' },
{ prefix: '856', en: 'Laos', cn: '老挝' },
{ prefix: '880', en: 'Bangladesh', cn: '孟加拉国' },
{ prefix: '886', en: 'Taiwan', cn: '台湾' },
{ prefix: '960', en: 'Maldives', cn: '马尔代夫' },
{ prefix: '961', en: 'Lebanon', cn: '黎巴嫩' },
{ prefix: '962', en: 'Jordan', cn: '约旦' },
{ prefix: '963', en: 'Syria', cn: '叙利亚' },
{ prefix: '964', en: 'Iraq', cn: '伊拉克' },
{ prefix: '965', en: 'Kuwait', cn: '科威特' },
{ prefix: '966', en: 'Saudi Arabia', cn: '沙特阿拉伯' },
{ prefix: '967', en: 'Yemen', cn: '也门' },
{ prefix: '968', en: 'Oman', cn: '阿曼' },
{ prefix: '970', en: 'Palestinian', cn: '巴勒斯坦' },
{ prefix: '971', en: 'United Arab Emirates', cn: '阿拉伯联合酋长国' },
{ prefix: '972', en: 'Israel', cn: '以色列' },
{ prefix: '973', en: 'Bahrain', cn: '巴林' },
{ prefix: '974', en: 'Qotar', cn: '库塔' },
{ prefix: '975', en: 'Bhutan', cn: '不丹' },
{ prefix: '976', en: 'Mongolia', cn: '蒙古' },
{ prefix: '977', en: 'Nepal', cn: '尼泊尔' },
{ prefix: '992', en: 'Tajikistan', cn: '塔吉克斯坦' },
{ prefix: '993', en: 'Turkmenistan', cn: '土库曼斯坦' },
{ prefix: '994', en: 'Azerbaijan', cn: '阿塞拜疆' },
{ prefix: '995', en: 'Georgia', cn: '格鲁吉亚' },
{ prefix: '996', en: 'Kyrgyzstan', cn: '吉尔吉斯斯坦' },
{ prefix: '998', en: 'Uzbekistan', cn: '乌兹别克斯坦' },
{ prefix: '1242', en: 'Bahamas', cn: '巴哈马' },
{ prefix: '1246', en: 'Barbados', cn: '巴巴多斯' },
{ prefix: '1264', en: 'Anguilla', cn: '安圭拉' },
{ prefix: '1268', en: 'Antigua and Barbuda', cn: '安提瓜和巴布达' },
{ prefix: '1340', en: 'Virgin Islands', cn: '维尔京群岛' },
{ prefix: '1345', en: 'Cayman Islands', cn: '开曼群岛' },
{ prefix: '1441', en: 'Bermuda', cn: '百慕大' },
{ prefix: '1473', en: 'Grenada', cn: '格林纳达' },
{ prefix: '1649', en: 'Turks and Caicos Islands', cn: '特克斯和凯科斯群岛' },
{ prefix: '1664', en: 'Montserrat', cn: '蒙特塞拉特' },
{ prefix: '1671', en: 'Guam', cn: '关岛' },
{ prefix: '1758', en: 'St.Lucia', cn: '圣卢西亚' },
{ prefix: '1767', en: 'Dominica', cn: '多米尼加' },
{ prefix: '1784', en: 'St.Vincent', cn: '圣文森特' },
{ prefix: '1809', en: 'Dominican Republic', cn: '多米尼加共和国' },
{ prefix: '1868', en: 'Trinidad and Tobago', cn: '特立尼达和多巴哥' },
{ prefix: '1869', en: 'St Kitts and Nevis', cn: '圣基茨和尼维斯' },
{ prefix: '1876', en: 'Jamaica', cn: '牙买加' }];var _default =


prefixSorted;exports.default = _default;

/***/ }),

/***/ 15:
/*!**************************************************!*\
  !*** /Users/suan/Desktop/DBS/store/mutations.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var mutations = _defineProperty({},
'SET_GLOBAL_LANG', function SET_GLOBAL_LANG(state, data) {
  state.globalLang = data;
});var _default =


mutations;exports.default = _default;

/***/ }),

/***/ 16:
/*!************************************************!*\
  !*** /Users/suan/Desktop/DBS/store/getters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getGlobalLang = void 0; //获取全局语言
var getGlobalLang = function getGlobalLang(state) {return state.globalLang;};exports.getGlobalLang = getGlobalLang;

/***/ }),

/***/ 17:
/*!*********************************************!*\
  !*** /Users/suan/Desktop/DBS/utils/tips.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


var _appConfig = _interopRequireDefault(__webpack_require__(/*! @/config/appConfig.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                         * 反馈方法
                                                                                                                                                                         */var tips = { //显示提示框
  showToast: function showToast(title) {
    return uni.showToast({
      title: title,
      icon: 'none' });

  },
  //显示Loding框
  showLoading: function showLoading(title) {
    return uni.showLoading({
      title: title,
      mask: true });

  },
  //隐藏loading框
  hideLoading: function hideLoading() {
    uni.hideLoading();
  },
  //模态框
  showModel: function showModel(title, content, showCancel, cb) {
    uni.showModal({
      title: title,
      content: content,
      showCancel: showCancel,
      success: function success(res) {
        if (res.confirm) {
          return cb();
        }
      } });

  } };var _default =


tips;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 18:
/*!***************************************************!*\
  !*** /Users/suan/Desktop/DBS/config/appConfig.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 应用配置
                                                                                                      */
var appConfig = {
  //api请求地址
  domain: 'http://www.dbsdce5.com',
  //ws请求地址
  wsDomain: 'ws://www.dbsdce5.com',
  //应用名称
  appName: 'DBS',
  //外链
  links: [],
  //默认倒计时时间 - 秒数
  countTimer: 60,
  //第三方登录
  thirdLogin: {
    h5: [
    {
      name: '微信',
      type: 1,
      icon: '/static/images/icons/wechat.png' },

    {
      name: 'QQ',
      type: 2,
      icon: '/static/images/icons/qq.png' },

    {
      name: '手机',
      type: 3,
      icon: '/static/images/icons/phone.png' }],


    app: [
    {
      name: '手机',
      type: 3,
      icon: '/static/images/icons/phone.png' }] },



  //提现是否需要输入相关信息
  isDrawithInput: true };var _default =


appConfig;exports.default = _default;

/***/ }),

/***/ 19:
/*!************************************************!*\
  !*** /Users/suan/Desktop/DBS/utils/storage.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var APP_NAME_KEY = 'DBS_s23j7mb';
var storage = {
  setLocalData: function setLocalData(key, value) {
    uni.setStorageSync(APP_NAME_KEY + key, value);
  },
  //取出本地数据
  getLocalData: function getLocalData(key) {
    return uni.getStorageSync(APP_NAME_KEY + key);
  },
  //删除本地数据
  delLocalData: function delLocalData(key) {
    uni.removeStorage({
      key: APP_NAME_KEY + key });

  },
  //清理本地数据
  clearLocalData: function clearLocalData(key) {
    uni.clearStorage();
  } };var _default =


storage;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
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

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
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
  'errorCaptured',
  'serverPrefetch'
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
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

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
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

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
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
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
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
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

if (true) {
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
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
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
      while (vm && vm.$options.name !== 'PageBody') {
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
        !vm.$options.isReserved && tree.push(vm);
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
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
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
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
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
      if (Dep.SharedObject.target) { // fixed by xxxxxx
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
      if ( true && customSetter) {
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
  if ( true &&
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
     true && warn(
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
  if ( true &&
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
     true && warn(
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
if (true) {
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

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
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
       true && warn(
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
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
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
     true && assertObjectType(key, childVal, vm);
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
  if (true) {
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
  if (childVal && "development" !== 'production') {
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
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
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
      } else if (true) {
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
  } else if (true) {
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
  } else if (true) {
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
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
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
  if (true) {
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
  if ( true && warnMissing && !res) {
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
    true
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
  if ( true && isObject(def)) {
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
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
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
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
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

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
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
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
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
      'prevent conflicts with Vue internals. ' +
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

var mark;
var measure;

if (true) {
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
      // perf.clearMeasures(name)
    };
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

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
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
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
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

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
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
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
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
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
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
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
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
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
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

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
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
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
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
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
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
       true && warn(
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
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
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
       true && warn(
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

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
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
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

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
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
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
  if (true) {
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
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
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
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
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
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

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
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
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
     true && warn(
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
  if ( true &&
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
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
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
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

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
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
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
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
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
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
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
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
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
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
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
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
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

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
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
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
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
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
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
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
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
    if ( true && has[id] != null) {
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

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

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
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
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
    if (true) {
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
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
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
     true && warn(
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
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
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
    if ( true && getter == null) {
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
    } else if (true) {
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
  if ( true &&
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
      if (Dep.SharedObject.target) {// fixed by xxxxxx
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
    if (true) {
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
  if (true) {
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

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
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
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
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
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
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
    if ( true && name) {
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
        if ( true && type === 'component') {
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
  if (true) {
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

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

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

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
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
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

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

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue ) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 34:
/*!*******************************************************!*\
  !*** /Users/suan/Desktop/DBS/mixins/common_mixins.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 35));


var _vuex = __webpack_require__(/*! vuex */ 13);
var _system = _interopRequireDefault(__webpack_require__(/*! @/utils/system.js */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var commonMixins = {
  data: function data() {
    return {
      currentOS: '' };

  },
  methods: {
    //获取余额
    getUserLeftmoney: function getUserLeftmoney() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:case "end":return _context.stop();}}}, _callee);}))();

    },
    //获取用户信息
    getUserInfoData: function getUserInfoData() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:case "end":return _context2.stop();}}}, _callee2);}))();

    },
    //直接跳转
    navigateTo: function navigateTo(path) {
      uni.navigateTo({
        url: path });

    },
    //关闭当前页面跳转
    redirectTo: function redirectTo(path) {
      uni.redirectTo({
        url: path });

    },
    //关闭所有页面，打开到应用内的某个页面。
    reLaunch: function reLaunch(path) {
      uni.reLaunch({
        url: path });

    },
    //跳转到tabbar某个页面
    switchTab: function switchTab(path) {
      uni.switchTab({
        url: path });

    },
    //返回
    back: function back() {
      var os = _system.default.getOS();
      if (os === 'ios' || os === 'android') {
        return uni.navigateBack();
      }
      return history.go(-1);
    },
    moveHandle: function moveHandle() {
      return;
    } },

  computed: {
    createOSClass: function createOSClass() {
      return this.currentOS;
    } },

  onLoad: function onLoad() {
    this.currentOS = _system.default.getOS();
  } };var _default =


commonMixins;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 35:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 36);

/***/ }),

/***/ 36:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 37);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 37:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 38:
/*!***********************************************!*\
  !*** /Users/suan/Desktop/DBS/utils/system.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 系统类
                                                                                                      */
var system = {
  /**
                * 设置statusbar状态栏颜色
                */
  setStatusBarColor: function setStatusBarColor(color) {

  },
  /**
      * 检测网络状态
      */
  checkNetWorkStatus: function checkNetWorkStatus() {

  },
  /**
      * 获取系统类型
      */
  getOS: function getOS() {
    var os = uni.getSystemInfoSync().platform;
    return os;
  } };var _default =


system;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 39:
/*!*****************************************************!*\
  !*** /Users/suan/Desktop/DBS/mixins/lang_mixins.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


var _vuex = __webpack_require__(/*! vuex */ 13);
var _cn = _interopRequireDefault(__webpack_require__(/*! @/lang/cn.js */ 40));
var _en = _interopRequireDefault(__webpack_require__(/*! @/lang/en.js */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var langsMixins = {
  methods: {
    getLangs: function getLangs(name) {
      return this.getGlobalLang === 'cn' ? _cn.default[name] : _en.default[name];
    } },

  computed: _objectSpread({},
  (0, _vuex.mapGetters)({
    getGlobalLang: 'getGlobalLang' })) };var _default =




langsMixins;exports.default = _default;

/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** /Users/suan/Desktop/DBS/pages.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 40:
/*!******************************************!*\
  !*** /Users/suan/Desktop/DBS/lang/cn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cn;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var cn = (_cn = {
  language: "语言选择",
  welcome: "欢迎登录",
  welcomeRegister: "欢迎注册",
  property: "资产",
  order: "订单",
  login: "登录",
  register: "注册",
  forget: "找回密码",
  phoneLogin: "手机登录",
  accountLogin: "账号登录",
  submit: "提交",
  appDownload: 'APP下载',
  tradeZone: '交易区',
  nickname: '昵称',
  validCode: '验证码',
  contact: '联系方式',
  account: '账号',
  password: '密码',
  repassword: '确认密码',
  qq: 'QQ',
  recommendationCode: '机构码',
  getVerificationCode: '获取验证码',
  nicknamePlaceholder: '请输入昵称',
  contactPlaceholder: '请输入邮箱或者手机号码',
  phonePlaceholder: '请输入手机号码',
  accountPlaceholder: '请输入账号名称',
  validCodePlaceholder: '请输入验证码',
  passwordPlaceholder: '请输入账号密码',
  repasswordPlaceholder: '请确认账号密码',
  recommendationCodePlaceholder: '请确认机构码',
  qqPlaceholder: '请确认QQ',
  registeredAccount: '注册账号',
  loginAccount: '已有账号，去登录',
  forgotPassword: '忘记密码?' }, _defineProperty(_cn, "phoneLogin",
'手机登录'), _defineProperty(_cn, "nicknameEmptyTips",
'昵称不能为空'), _defineProperty(_cn, "contactEmptyTips",
'请输入邮箱或者手机号码'), _defineProperty(_cn, "phoneEmptyTips",
'请输入正确的手机号'), _defineProperty(_cn, "validCodeEmptyTips",
'验证码不能为空'), _defineProperty(_cn, "accountEmptyTips",
'账户名称不能为空'), _defineProperty(_cn, "passwordEmptyTips",
'账户密码不能为空'), _defineProperty(_cn, "repasswordEmptyTips",
'请确认账号密码'), _defineProperty(_cn, "passwordNoMatch",
'两次输入的密码不相同'), _defineProperty(_cn, "recommendationCodeEmptyTips",
'推荐码不能为空'), _defineProperty(_cn, "qqEmptyTips",
'QQ不能为空'), _defineProperty(_cn, "errorTips",
'存在错误信息,请确认之后重新提交'), _defineProperty(_cn, "noMatchTips",
'不允许使用中文'), _defineProperty(_cn, "agreement",
'我已阅读并同意<a href="#/footlink">服务条款</a><a href="#/footlink">隐私保护</a>'), _defineProperty(_cn, "notLoginTips",
'您还没有登录'), _defineProperty(_cn, "aboutus",
'关于我们'), _defineProperty(_cn, "terms",
'服务条款'), _defineProperty(_cn, "tradingRules",
'交易细则'), _defineProperty(_cn, "tradingGuide",
'交易指南'), _defineProperty(_cn, "announcement",
'公告'), _defineProperty(_cn, "findCurrency",
'查找币种'), _defineProperty(_cn, "currency",
'币种'), _defineProperty(_cn, "priceRatio",
'涨跌幅'), _defineProperty(_cn, "latestDeal",
'最新成交'), _defineProperty(_cn, "direction",
'方向'), _defineProperty(_cn, "price",
'价格'), _defineProperty(_cn, "lot",
'手数'), _defineProperty(_cn, "leftmoney",
'当前余额（USDT）'), _defineProperty(_cn, "latestPrice",
'最新价'), _defineProperty(_cn, "highestPrice",
'最高价'), _defineProperty(_cn, "lowestPrice",
'最低价'), _defineProperty(_cn, "priceRatio",
'涨跌幅'), _defineProperty(_cn, "volume24h",
'24H成交量'), _defineProperty(_cn, "turnover24h",
'24H成交额'), _defineProperty(_cn, "buy",
'买入'), _defineProperty(_cn, "sell",
'卖出'), _defineProperty(_cn, "loss",
'止损'), _defineProperty(_cn, "profit",
'止盈'), _defineProperty(_cn, "buyingLot",
'买入手数'), _defineProperty(_cn, "sellingLot",
'卖出手数'), _defineProperty(_cn, "handlingFee",
'手续费'), _defineProperty(_cn, "margin",
'保证金'), _defineProperty(_cn, "max",
'最大'), _defineProperty(_cn, "min",
'最小'), _defineProperty(_cn, "currencyInformation",
'币种信息'), _defineProperty(_cn, "srice",
'价格'), _defineProperty(_cn, "quantity",
'数量'), _defineProperty(_cn, "withdrawBtn",
'提现'), _defineProperty(_cn, "withdraw",
'提现申请'), _defineProperty(_cn, "extractionApply",
'提现申请'), _defineProperty(_cn, "extractingRecords",
'提现记录'), _defineProperty(_cn, "rechargeRecord",
'充值记录'), _defineProperty(_cn, "walletDirectCharge",
'钱包直充'), _defineProperty(_cn, "usdtMargin",
'USDT余量'), _defineProperty(_cn, "bankAccountNumber",
'银行帐号'), _defineProperty(_cn, "withdrawalAmount",
'请输入提现数额'), _defineProperty(_cn, "customerName",
'客户名称'), _defineProperty(_cn, "walletAddress",
'钱包地址'), _defineProperty(_cn, "bankName",
'银行名称'), _defineProperty(_cn, "bankAddress",
'银行地址'), _defineProperty(_cn, "bankAccountNumberEmpty",
'银行帐号不能为空'), _defineProperty(_cn, "customerNameEmpty",
'客户名称不能为空'), _defineProperty(_cn, "walletAddressEmpty",
'钱包地址不能为空'), _defineProperty(_cn, "bankNameEmpty",
'银行名称不能为空'), _defineProperty(_cn, "bankAddressEmpty",
'银行地址不能为空'), _defineProperty(_cn, "bankCode",
'银行编码'), _defineProperty(_cn, "specialReminder",
'特别提醒'), _defineProperty(_cn, "specialReminderText",
'未持有USDT钱包地址用户，请填写银行详细信息'), _defineProperty(_cn, "orderNumber",
'订单编号'), _defineProperty(_cn, "orderTime",
'订单时间'), _defineProperty(_cn, "quantityExtracted",
'提取数量'), _defineProperty(_cn, "gifts",
'赠送数量'), _defineProperty(_cn, "orderStatus",
'订单状态'), _defineProperty(_cn, "processingTime",
'处理时间'), _defineProperty(_cn, "purchaseQuantity",
'购买数量'), _defineProperty(_cn, "chooseChannel",
'选择渠道'), _defineProperty(_cn, "myOrder",
'充值订单'), _defineProperty(_cn, "uploadVouchers",
'上传凭证'), _defineProperty(_cn, "transactionInformation",
'交易信息'), _defineProperty(_cn, "number",
'数量'), _defineProperty(_cn, "selectionChannel",
'充值渠道'), _defineProperty(_cn, "orderStatus",
'订单状态'), _defineProperty(_cn, "operation",
'操作'), _defineProperty(_cn, "positionOrder",
'持仓订单'), _defineProperty(_cn, "historicalOrder",
'历史订单'), _defineProperty(_cn, "type",
'类型'), _defineProperty(_cn, "purchasePrice",
'购买价'), _defineProperty(_cn, "profitAndLoss",
'盈亏'), _defineProperty(_cn, "totalProfitLoss",
'总盈亏'), _defineProperty(_cn, "totalFee",
'总手续费'), _defineProperty(_cn, "totalBill",
'总单数'), _defineProperty(_cn, "Variety",
'品种'), _defineProperty(_cn, "Bitcoin",
'比特币'), _defineProperty(_cn, "Ethernet",
'以太币'), _defineProperty(_cn, "Ethereum",
'以太坊'), _defineProperty(_cn, "Litecoin",
'莱特币'), _defineProperty(_cn, "RippleCoin",
'瑞波币'), _defineProperty(_cn, "EOS",
'柚子币'), _defineProperty(_cn, "ZEC",
'大零币'), _defineProperty(_cn, "Traget",
'标的(单位：USDT)'), _defineProperty(_cn, "Margin",
'保证金'), _defineProperty(_cn, "ContractUnitPerLot",
'合约单位/每手'), _defineProperty(_cn, "Spread",
'点差(单位：USDT)'), _defineProperty(_cn, "HandlingFee",
'手续费(单位：USDT)'), _defineProperty(_cn, "StopLossAndProfit",
'止损止盈(单位：USDT)'), _defineProperty(_cn, "MinimumUnitOfChange",
'最小变动单位'), _defineProperty(_cn, "ForcedLiquidationSystem",
'强制平仓制度'), _defineProperty(_cn, "ForcedDesc",
'当用户可用余额+冻结保证金（账户总额）≤冻结保证金的1%，系统有权强制平仓'), _defineProperty(_cn, "TradeRulesTitle",
'DBS合约交易细则'), _defineProperty(_cn, "noAnn",
'暂无公告'), _defineProperty(_cn, "captcha",
'验证码'), _defineProperty(_cn, "failed",
'失败'), _defineProperty(_cn, "success",
'成功'), _defineProperty(_cn, "noData",
'暂无数据'), _defineProperty(_cn, "hand",
'手'), _defineProperty(_cn, "numEmptyTips",
'请输入数量'), _defineProperty(_cn, "insufficientBalance",
'余额不足'), _defineProperty(_cn, "successText",
'操作成功'), _defineProperty(_cn, "personalCenter",
'个人中心'), _defineProperty(_cn, "updatePwd",
'修改密码'), _defineProperty(_cn, "updateInfo",
'修改联系方式'), _defineProperty(_cn, "oldPwd",
'旧密码'), _defineProperty(_cn, "newPwd",
'新密码'), _defineProperty(_cn, "certification",
'个人认证'), _defineProperty(_cn, "bankname",
'银行名称'), _defineProperty(_cn, "bname",
'开户人'), _defineProperty(_cn, "badds",
'银行地址'), _defineProperty(_cn, "idcard",
'身份证号码'), _defineProperty(_cn, "banknumber",
'银行卡号'), _defineProperty(_cn, "qbdizhi",
'钱包地址'), _defineProperty(_cn, "rechargeName",
'币种'), _defineProperty(_cn, "rechargeAmount",
'金额'), _defineProperty(_cn, "rechargeStatus",
'状态'), _defineProperty(_cn, "oprate",
'操作'), _defineProperty(_cn, "rechargeUpload",
'上传凭证'), _defineProperty(_cn, "revokeBtn",
'撤销'), _defineProperty(_cn, "orderno",
'订单号'), _defineProperty(_cn, "profitLoss",
'盈亏'), _defineProperty(_cn, "sellPrice",
'平仓价'), _defineProperty(_cn, "loadingText",
'加载中...'), _defineProperty(_cn, "submit",
'提交'), _defineProperty(_cn, "my",
'我'), _defineProperty(_cn, "close",
'平仓'), _defineProperty(_cn, "setting",
'设置'), _defineProperty(_cn, "price",
'价格'), _defineProperty(_cn, "time",
'时间'), _defineProperty(_cn, "sysTips",
'系统提示'), _defineProperty(_cn, "cancel",
'取消'), _defineProperty(_cn, "confirmClose",
'您确定要平仓吗？'), _defineProperty(_cn, "market",
'市场/成交量'), _defineProperty(_cn, "withdrawTips",
'提现数量不能小于10'), _defineProperty(_cn, "todayProfit",
'今日盈亏'), _defineProperty(_cn, "todayFee",
'今日手续费'), _defineProperty(_cn, "todayNums",
'今日单数'), _defineProperty(_cn, "check",
'查看'), _defineProperty(_cn, "tradeType",
'交易类型'), _defineProperty(_cn, "buytime",
'入仓时间'), _defineProperty(_cn, "selltime",
'平仓时间'), _defineProperty(_cn, "productName",
'产品名称'), _defineProperty(_cn, "accountInfo",
'账户资料'), _defineProperty(_cn, "accountStatus",
'账户状态'), _defineProperty(_cn, "normal",
'正常'), _defineProperty(_cn, "certificate",
'实名认证'), _defineProperty(_cn, "certified",
'已认证'), _defineProperty(_cn, "notCertified",
'未认证'), _defineProperty(_cn, "data",
'资料修改'), _defineProperty(_cn, "fund",
'资金管理'), _defineProperty(_cn, "recharge",
'钱包直充'), _defineProperty(_cn, "exit",
'退出账户'), _defineProperty(_cn, "exitAccount",
'您确定要退出账户吗？'), _defineProperty(_cn, "wait",
'再逛逛'), _defineProperty(_cn, "confirm",
'确定'), _defineProperty(_cn, "rechargeLimit",
'充值金额必须大于1'), _defineProperty(_cn, "rechargeCenter",
'充值中心'), _defineProperty(_cn, "serverRecharge",
'客服充值'), _defineProperty(_cn, "copy",
'复制钱包地址'), _defineProperty(_cn, "recharging",
'充值中'), _defineProperty(_cn, "phone",
'手机号码'), _defineProperty(_cn, "revoke",
'撤销'), _defineProperty(_cn, "finish",
'完成'), _defineProperty(_cn, "orderCenter",
'订单中心'), _defineProperty(_cn, "UAS", "\u5AE9\u6A21\u5E01\uFF08\u7B80\u79F0UAS\uFF09BCEX\u5728\u5B98\u7F51\u4E0A\u7EBF UAS \u65F6\u7684\u8BC4\u8BBA\uFF1A\u201C UAS \u662F\u4E00\u4E2A\u4EE4\u4EBA\u5370\u8C61\u6DF1\u523B\u7684\u6210\u719F\u9879\u76EE\uFF0C\u65E8\u5728\u5B9E\u73B0\u533A\u5757\u94FE\u6280\u672F\u7684\u6700\u521D\u627F\u8BFA\uFF1A\u5BF9\u4F20\u7EDF\u7684\u91D1\u878D\u4E16\u754C\u8FDB\u884C\u53D8\u9769\u3002 UAS \u4E3A\u6240\u6709\u6CD5\u5B9A\u8D27\u5E01\u548C\u52A0\u5BC6\u8D27\u5E01\u63D0\u4F9B\u4E86\u4E00\u4E2A\u94B1\u5305\u548C\u652F\u4ED8\u7F51\u7EDC\u3002\u201D UAS\u6709\u4E2A\u6709\u4E2A\u8BA9\u4EBA\u5FC3\u8DF3\u7684\u5916\u53F7\u201C\u5AE9\u6A21\u5E01\u201D\uFF0C\u4E3A\u4EC0\u4E48\u53EB\u5AE9\u6A21\u5E01?\u5176\u5B9E\u8FD9\u662F\u7F51\u53CB\u6076\u641E\u7684\u4E00\u4E2A\u540D\u5B57\uFF0C\u56E0\u4E3AUAS\u5728\u63A8\u5E7F\u7684\u65F6\u5019\uFF0C\u9879\u76EE\u65B9\u8BF7\u4E86\u5F88\u591A\u7684\u7F8E\u5973\u6A21\u7279\uFF0C\u5927\u5BB6\u5E01\u5708\u6709\u53E5\u7ECF\u5178\u540D\u8A00\u53EB\u201C\u4E00\u5E01\u4E00\u5AE9\u6A21\u201D\uFF0CUAS\u7684\u7C89\u4E1D\u4EEC\u56E0\u6B64\u628AUAS\u620F\u79F0\u4E3A\u5AE9\u6A21\u5E01\uFF0C\u5AE9\u6A21\u5E01\u7531\u6B64\u5F97\u540D<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2017/06/27<br />\n    \u53D1\u884C\u603B\u91CF\uFF1A140245398W<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A9800W\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: --<br />\n    \u5B98\u7F51: --<br />\n    \u533A\u5757\u67E5\u8BE2: --"), _defineProperty(_cn, "BTC", "\u6BD4\u7279\u5E01\uFF08Bitcoin\uFF0C\u7B80\u79F0BTC\uFF09\u662F\u76EE\u524D\u4F7F\u7528\u6700\u4E3A\u5E7F\u6CDB\u7684\u4E00\u79CD\u6570\u5B57\u8D27\u5E01\uFF0C\u5B83\u8BDE\u751F\u4E8E2009\u5E741\u67083\u65E5\uFF0C\u662F\u4E00\u79CD\u70B9\u5BF9\u70B9\uFF08P2P\uFF09\u4F20\u8F93\u7684\u6570\u5B57\u52A0\u5BC6\u8D27\u5E01\uFF0C\u603B\u91CF2100\u4E07\u679A\u3002\u6BD4\u7279\u5E01\u7F51\u7EDC\u6BCF10\u5206\u949F\u91CA\u653E\u51FA\u4E00\u5B9A\u6570\u91CF\u5E01\uFF0C\u9884\u8BA1\u57282140\u5E74\u8FBE\u5230\u6781\u9650\u3002\u6BD4\u7279\u5E01\u88AB\u6295\u8D44\u8005\u79F0\u4E3A\u201C\u6570\u5B57\u9EC4\u91D1\u201D\u3002\u6BD4\u7279\u5E01\u4F9D\u636E\u7279\u5B9A\u7B97\u6CD5\uFF0C\u901A\u8FC7\u5927\u91CF\u7684\u8BA1\u7B97\u4EA7\u751F\uFF0C\u4E0D\u4F9D\u9760\u7279\u5B9A\u8D27\u5E01\u673A\u6784\u53D1\u884C\uFF0C\u5176\u4F7F\u7528\u6574\u4E2AP2P\u7F51\u7EDC\u4E2D\u4F17\u591A\u8282\u70B9\u6784\u6210\u7684\u5206\u5E03\u5F0F\u6570\u636E\u5E93\u6765\u786E\u8BA4\u5E76\u8BB0\u5F55\u6240\u6709\u7684\u4EA4\u6613\u884C\u4E3A\uFF0C\u5E76\u4F7F\u7528\u5BC6\u7801\u5B66\u8BBE\u8BA1\u786E\u4FDD\u8D27\u5E01\u6D41\u901A\u5404\u4E2A\u73AF\u8282\u5B89\u5168\u6027\uFF0C\u53EF\u786E\u4FDD\u65E0\u6CD5\u901A\u8FC7\u5927\u91CF\u5236\u9020\u6BD4\u7279\u5E01\u6765\u4EBA\u4E3A\u64CD\u63A7\u5E01\u503C\u3002\u57FA\u4E8E\u5BC6\u7801\u5B66\u7684\u8BBE\u8BA1\u53EF\u4EE5\u4F7F\u6BD4\u7279\u5E01\u53EA\u80FD\u88AB\u771F\u5B9E\u62E5\u6709\u8005\u8F6C\u79FB\u3001\u652F\u4ED8\u53CA\u5151\u73B0\u3002\u540C\u6837\u786E\u4FDD\u4E86\u8D27\u5E01\u6240\u6709\u6743\u4E0E\u6D41\u901A\u4EA4\u6613\u7684\u533F\u540D\u6027\u30027<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2008/11/1\u53D1\u884C\u603B\u91CF\uFF1A2100W7<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A1673.82W\u4F17\u7B79\u4EF7\u683C\uFF1A--7<br />\n    \u767D\u76AE\u4E66https://bitcoin.org/bitcoin.pdf7<br />\n    \u5B98\u7F51:https://bitcoin.org/en/7<br />\n    \u533A\u5757\u67E5\u8BE2:https://blockchain.info/"), _defineProperty(_cn, "ETC", "\u662F\u4EE5\u592A\u574A\u57281,920,000\u4E2A\u5757\u540E\u786C\u5206\u53C9\u51FA\u7684\u5206\u53C9\u5E01\u79CD\uFF0C\u529F\u80FD\u548C\u4EE5\u592A\u574A\u6781\u4E3A\u7C7B\u4F3C\u3002ETC\u79C9\u627F\u53BB\u4E2D\u5FC3\u5316\u7406\u5FF5\uFF0C\u652F\u6301\u533A\u5757\u94FE\u4FDD\u8BC1\u7684\u5171\u8BC6\u673A\u5236\u3002ETC\u575A\u4FE1\uFF0C\u533A\u5757\u94FE\u4E00\u65E6\u5F00\u59CB\u8FD0\u884C\uFF0C\u5B83\u7684\u53D1\u5C55\u65B9\u5411\u5C31\u4E0D\u88AB\u4EFB\u4F55\u4E2D\u5FC3\u56E2\u961F\u6240\u5DE6\u53F3\uFF0C\u800C\u662F\u6309\u7167\u53C2\u4E0E\u6574\u4E2A\u7F51\u7EDC\u4EBA\u5458\u7684\u5171\u8BC6\u548C\u5168\u7F51\u7B97\u529B\u7684\u5171\u8BC6\u6240\u51B3\u5B9A\u3002<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2018/11/11\u53D1\u884C\u603B\u91CF\uFF1A2000W<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A9833.66W\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: --<br />\n    \u5B98\u7F51: ethereumclassic.github.io<br />\n    \u533A\u5757\u67E5\u8BE2: https://gastracker.io/<br />"), _defineProperty(_cn, "MWC", "\u62DF\u9525\u5E01\uFF08mimblewimblecoin\uFF0C\u7B80\u79F0mwc\uFF09\u9664\u4E86\u56FA\u5B9A\u7684\u3001\u6709\u9650\u7684\u4F9B\u5E94\uFF0Cmwc \u5BFB\u6C42\u901A\u8FC7\u4F7F\u7528\u76EE\u6807\u7A7A\u6295\u6A21\u578B\u6765\u5956\u52B1\u79EF\u6781\u4E3B\u52A8\u7684\u6BD4\u7279\u5E01\u6301\u6709\u8005\uFF0C\u901A\u8FC7\u7C7B\u4F3C\u4E8E rhodium [6]\u7684\u8FC7\u7A0B\u6765\u4F18\u5316\u6301\u6709\u8005\u7684\u6F5C\u5728\u56DE\u62A5\u3002 \u5728\u8FD9\u4E2A\u6A21\u578B\u4E2D\uFF0C\u4EFB\u4F55\u80FD\u8BC1\u660E\u6240\u6709\u6743\u7684\u6BD4\u7279\u5E01\u6301\u6709\u8005\uFF0C\u901A\u8FC7\u6CE8\u518C\u516C\u5171\u7684\uFF0C\u975E\u96F6\u5E73\u8861 btc \u94A5\u5319\uFF0C\u90FD\u6709\u8D44\u683C\u83B7\u5F97\u7A7A\u6295\u3002 \u6B64\u5916\uFF0C\u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u5185\uFF0Cmwc \u5956\u52B1\u90A3\u4E9B\u6CA1\u6709\u8D1F\u9762\u5F71\u54CD\u7684\u6301\u6709\u8005\uFF0C\u6211\u4EEC\u76F8\u4FE1\u7A7A\u6295\u5206\u914D\u65B9\u6CD5\u2014\u2014\u4E00\u4E2A\u5FAE\u5F31\u7684\uFF0C\u56FA\u5B9A\u7684\u7EC8\u8EAB\u4E0A\u9650\u548C\u5B9E\u7269\u7EA2\u5229\u7684\u5FAE\u5F31\u7684\u6BD4\u7279\u5E01; \u5C06\u7ED9\u4E88\u6BD4\u7279\u5E01\u6301\u6709\u8005\uFF0C\u4EE5\u53CA\u90A3\u4E9B\u5728\u4E8C\u7EA7\u5E02\u573A\u4E0A\u83B7\u5F97 mwc \u7684\u4EBA\uFF0C\u4E00\u4E2A\u7B11\u5BB9\u548C\u5149\u8292\u7684\u4F18\u8D8A\u4EF7\u503C\u50A8\u5B58\u7684\u6F5C\u529B<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2016/07/19\u53D1\u884C\u603B\u91CF\uFF1A135245896W<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A105215421W\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: --<br />\n    \u5B98\u7F51: --<br />\n    \u533A\u5757\u67E5\u8BE2: --"), _defineProperty(_cn, "EOS", "EOS (Enterprise Operation System)\u662F\u7531 Block.one\u516C\u53F8\u4E3B\u5BFC\u5F00\u53D1\u7684\u4E00\u79CD\u5168\u65B0\u7684\u57FA\u4E8E\u533A\u5757\u94FE\u667A\u80FD\u5408\u7EA6\u5E73\u53F0\uFF0C\u65E8\u5728\u4E3A\u9AD8\u6027\u80FD\u5206\u5E03\u5F0F\u5E94\u7528\u63D0\u4F9B\u5E95\u5C42\u533A\u5757\u94FE\u5E73\u53F0\u670D\u52A1\u3002EOS \u9879\u76EE\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u4E00\u4E2A\u7C7B\u4F3C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u652F\u6491\u5206\u5E03\u5F0F\u5E94\u7528\u7A0B\u5E8F\u7684\u533A\u5757\u94FE\u67B6\u6784\u3002\u8BE5\u67B6\u6784\u53EF\u4EE5\u63D0\u4F9B\u8D26\u6237\uFF0C\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u6570\u636E\u5E93\uFF0C\u5F02\u6B65\u901A\u4FE1\u4EE5\u53CA\u53EF\u5728\u6570\u4EE5\u4E07\u8BA1\u7684 CPU/GPU\u7FA4\u96C6\u4E0A\u8FDB\u884C\u7A0B\u5E8F\u8C03\u5EA6\u548C\u5E76\u884C\u8FD0\u7B97\u3002EOS\u6700\u7EC8\u53EF\u4EE5\u652F\u6301\u6BCF\u79D2\u6267\u884C\u6570\u767E\u4E07\u4E2A\u4EA4\u6613\uFF0C\u540C\u65F6\u666E\u901A\u7528\u6237\u6267\u884C\u667A\u80FD\u5408\u7EA6\u65E0\u9700\u652F\u4ED8\u4F7F\u7528\u8D39\u7528\u3002<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2017/7/2\u53D1\u884C\u603B\u91CF\uFF1A100000W<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A50000.36W\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: https://github.com/EOSIO/Documentation/blob/master/zh-CN/TechnicalWhitePaper.md<br />\n    \u5B98\u7F51: https://eos.io/<br />\n    \u533A\u5757\u67E5\u8BE2: https://etherscan.io/token/EOS"), _defineProperty(_cn, "ETH", "\u745E\u6CE2\u5E01\uFF08Ripple/XRP\uFF09\u63D0\u4F9B\u4E00\u4E2A\u65E0\u963B\u788D\u7684\u5229\u7528\u533A\u5757\u94FE\u6280\u672F\u7684\u5168\u7403\u652F\u4ED8\u7F51\u7EDC\uFF0C\u662F\u4E16\u754C\u4E0A\u7B2C\u4E00\u4E2A\u5F00\u653E\u7684\u652F\u4ED8\u7F51\u7EDC\uFF0C\u901A\u8FC7\u52A0\u5165Ripple\u6B63\u5728\u6210\u957F\u7684\u5168\u7403\u652F\u4ED8\u7F51\u7EDC\u53EF\u4EE5\u8F6C\u8D26\u4EFB\u610F\u4E00\u79CD\u8D27\u5E01\uFF0C\u5305\u62EC\u7F8E\u5143\u3001\u6B27\u5143\u3001\u4EBA\u6C11\u5E01\u3001\u65E5\u5143\u6216\u8005\u6BD4\u7279\u5E01\uFF0C\u7B80\u4FBF\u6613\u884C\u5FEB\u6377\uFF0C\u4EA4\u6613\u786E\u8BA4\u5728\u51E0\u79D2\u4EE5\u5185\u5B8C\u6210\uFF0C\u4EA4\u6613\u8D39\u7528\u51E0\u4E4E\u662F\u96F6\uFF0C\u6CA1\u6709\u6240\u8C13\u7684\u8DE8\u884C\u5F02\u5730\u4EE5\u53CA\u8DE8\u56FD\u652F\u4ED8\u8D39\u7528\u3002 Ripple\u662F\u5F00\u653E\u6E90\u7801\u7684\u70B9\u5230\u70B9\u652F\u4ED8\u7F51\u7EDC\uFF0C\u5B83\u53EF\u4EE5\u4F7F\u4EFB\u4F55\u673A\u6784\u6216\u4E2A\u4EBA\u8F7B\u677E\u3001\u5EC9\u4EF7\u5E76\u5B89\u5168\u7684\u628A\u91D1\u94B1\u8F6C\u8D26\u5230\u4E92\u8054\u7F51\u4E0A\u7684\u4EFB\u4F55\u673A\u6784\u6216\u4E2A\u4EBA\uFF0C\u65E0\u8BBA\u5728\u4E16\u754C\u7684\u54EA\u4E2A\u5730\u65B9\u3002Ripple\u662Fp2p\u8F6F\u4EF6\uFF0C\u6CA1\u6709\u4EFB\u4F55\u4E2A\u4EBA\u3001\u516C\u53F8\uFF0C\u6216\u653F\u5E9C\u64CD\u63A7\uFF0C\u4EFB\u4F55\u4EBA\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2Aripple\u8D26\u6237\u3002<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2015/3/20\u53D1\u884C\u603B\u91CF\uFF1A7200W+1872/YEAR<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A6000W+1872/YEAR\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: --<br />\n    \u5B98\u7F51: https://etherchain.org/blocks<br />\n    \u533A\u5757\u67E5\u8BE2: https://etherscan.io"), _defineProperty(_cn, "LTC", "\u83B1\u7279\u5E01\u8BDE\u751F\u4E8E2011\u5E7411\u67089\u65E5\uFF0C\u88AB\u79F0\u4E3A\u662F\u201C\u6570\u5B57\u767D\u94F6\u201D\u3002\u83B1\u7279\u5E01\u5728\u6280\u672F\u4E0A\u548C\u6BD4\u7279\u5E01\u5177\u6709\u76F8\u540C\u7684\u5B9E\u73B0\u539F\u7406\u3002\u5B83\u662F\u7B2C\u4E00\u4E2A\u57FA\u4E8EScrypt\u7B97\u6CD5\u7684\u7F51\u7EDC\u6570\u5B57\u8D27\u5E01\uFF0C\u4E0E\u6BD4\u7279\u5E01\u76F8\u6BD4\uFF0C\u83B1\u7279\u5E01\u62E5\u6709\u66F4\u5FEB\u7684\u4EA4\u6613\u786E\u8BA4\u65F6\u95F4\uFF0C\u66F4\u9AD8\u7684\u7F51\u7EDC\u4EA4\u6613\u5BB9\u91CF\u548C\u6548\u7387\u3002\u83B1\u7279\u5E01\u73B0\u5728\u62E5\u6709\u5B8C\u6574\u7684\u4EA7\u4E1A\u94FE\uFF0C\u5145\u5206\u7684\u6D41\u52A8\u6027\uFF0C\u8DB3\u4EE5\u8BC1\u660E\u5176\u662F\u6210\u719F\u3001\u5B89\u5168\u3001\u7A33\u5B9A\u7684\u5546\u7528\u91D1\u878D\u7CFB\u7EDF\u3002<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2011-11-09\u53D1\u884C\u603B\u91CF\uFF1A8400W<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A5428.26W\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: --<br />\n    \u5B98\u7F51: https://litecoin.com/<br />\n    \u533A\u5757\u67E5\u8BE2: http://explorer.litecoin.net/"), _defineProperty(_cn, "ZEC", "Zcash\uFF08ZEC\uFF09\u662F\u4E00\u79CD\u53BB\u4E2D\u5FC3\u5316\u3001\u5F00\u6E90\u7684\u52A0\u5BC6\u4E92\u8054\u7F51\u8D27\u5E01\uFF0C\u57FA\u4E8E14\u5E74IEEE\u4F1A\u8BAE\u4E0A\u53D1\u5E03\u7684paper Zerocash Protocol \u5F00\u53D1\uFF0C\u91C7\u53D6\u96F6\u77E5\u8BC6\u8BC1\u660E\u53CA\u591A\u91CD\u8D26\u6237\u673A\u5236\u4FDD\u969C\u4EA4\u6613\u7684\u533F\u540D\u6027\u3002<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2016/10/28\u53D1\u884C\u603B\u91CF\uFF1A282.51W<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A282.51W\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: --<br />\n    \u5B98\u7F51: --<br />\n    \u533A\u5757\u67E5\u8BE2: --"), _defineProperty(_cn, "XRP", "\u745E\u6CE2\u5E01\uFF08Ripple/XRP\uFF09\u63D0\u4F9B\u4E00\u4E2A\u65E0\u963B\u788D\u7684\u5229\u7528\u533A\u5757\u94FE\u6280\u672F\u7684\u5168\u7403\u652F\u4ED8\u7F51\u7EDC\uFF0C\u662F\u4E16\u754C\u4E0A\u7B2C\u4E00\u4E2A\u5F00\u653E\u7684\u652F\u4ED8\u7F51\u7EDC\uFF0C\u901A\u8FC7\u52A0\u5165Ripple\u6B63\u5728\u6210\u957F\u7684\u5168\u7403\u652F\u4ED8\u7F51\u7EDC\u53EF\u4EE5\u8F6C\u8D26\u4EFB\u610F\u4E00\u79CD\u8D27\u5E01\uFF0C\u5305\u62EC\u7F8E\u5143\u3001\u6B27\u5143\u3001\u4EBA\u6C11\u5E01\u3001\u65E5\u5143\u6216\u8005\u6BD4\u7279\u5E01\uFF0C\u7B80\u4FBF\u6613\u884C\u5FEB\u6377\uFF0C\u4EA4\u6613\u786E\u8BA4\u5728\u51E0\u79D2\u4EE5\u5185\u5B8C\u6210\uFF0C\u4EA4\u6613\u8D39\u7528\u51E0\u4E4E\u662F\u96F6\uFF0C\u6CA1\u6709\u6240\u8C13\u7684\u8DE8\u884C\u5F02\u5730\u4EE5\u53CA\u8DE8\u56FD\u652F\u4ED8\u8D39\u7528\u3002 Ripple\u662F\u5F00\u653E\u6E90\u7801\u7684\u70B9\u5230\u70B9\u652F\u4ED8\u7F51\u7EDC\uFF0C\u5B83\u53EF\u4EE5\u4F7F\u4EFB\u4F55\u673A\u6784\u6216\u4E2A\u4EBA\u8F7B\u677E\u3001\u5EC9\u4EF7\u5E76\u5B89\u5168\u7684\u628A\u91D1\u94B1\u8F6C\u8D26\u5230\u4E92\u8054\u7F51\u4E0A\u7684\u4EFB\u4F55\u673A\u6784\u6216\u4E2A\u4EBA\uFF0C\u65E0\u8BBA\u5728\u4E16\u754C\u7684\u54EA\u4E2A\u5730\u65B9\u3002Ripple\u662Fp2p\u8F6F\u4EF6\uFF0C\u6CA1\u6709\u4EFB\u4F55\u4E2A\u4EBA\u3001\u516C\u53F8\uFF0C\u6216\u653F\u5E9C\u64CD\u63A7\uFF0C\u4EFB\u4F55\u4EBA\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2Aripple\u8D26\u6237\u3002<br />\n    \u53D1\u884C\u65F6\u95F4\uFF1A2011/4/18\u53D1\u884C\u603B\u91CF\uFF1A10000000W<br />\n    \u6D41\u901A\u603B\u91CF\uFF1A3873914.48W\u4F17\u7B79\u4EF7\u683C\uFF1A--<br />\n    \u767D\u76AE\u4E66: --<br />\n    \u5B98\u7F51: https://ripple.com<br />\n    \u533A\u5757\u67E5\u8BE2: https://ripple.com/grap"), _defineProperty(_cn, "aboutusDesc",
























































'DBS是海通商贸有限公司为响应国家“一带一路”政策，围绕电商展开多元化的增值服务导向，向市场推出落地用户带娱乐模式的平台APP。作为业内首家落地用户可选城市，可自由定义娱乐金额的APP，DBS开通了国内外100多个一线城市和国家的专业服务和不同的语言切换模式，DBS的娱乐币是用户通过海通商贸有限公司购买产品限量免费赠送：一方面帮助用户发现生活当中的乐趣，另一方面为用户提供非常好的特色化精品。DBS团队由海通商贸有限公司事业部和电子系统集成部门的精英组建而成，拥有丰富的消费娱乐管理从业经验。'), _defineProperty(_cn, "termsDesc", "\n    DBS\u662F\u718A\u732B\u76D2\u5B50\u5546\u57CE\u5411\u5E02\u573A\u63A8\u51FA\u7528\u6237\u589E\u503C\u670D\u52A1\uFF08\u4EE5\u4E0B\u79F0\u201C\u8BE5\u670D\u52A1\u201D\u6216\u201C\u670D\u52A1\u201D\uFF09\u7684\u7F51\u7AD9\u3002\u4E3A\u4E86\u672C\u534F\u8BAE\u8868\u8FF0\u4E4B\u65B9\u4FBF\uFF0C\u516C\u53F8\u548C\u8BE5\u7F51\u7AD9\u3001APP\u5728\u672C\u534F\u8BAE\u4E2D\u5408\u79F0\u4F7F\u7528\u201C\u6211\u4EEC\u201D\u6216\u5176\u4ED6\u7B2C\u4E00\u4EBA\u79F0\u79F0\u547C\u3002\u53EA\u8981\u767B\u9646\u8BE5\u7F51\u7AD9\u3001APP\uFF08\u4EE5\u4E0B\u79F0\u672C\u7F51\u7AD9\uFF09\u7684\u81EA\u7136\u4EBA\u6216\u5176\u4ED6\u4E3B\u4F53\u5747\u4E3A\u672C\u5E73\u53F0\u7684\u7528\u6237\uFF0C\u672C\u534F\u8BAE\u8868\u8FF0\u4E4B\u4FBF\u5229\uFF0C\u4EE5\u4E0B\u4F7F\u7528\u201C\u60A8\u201D\u6216\u5176\u4ED6\u7B2C\u4E8C\u4EBA\u79F0\u3002\u4E3A\u4E86\u672C\u534F\u8BAE\u8868\u8FF0\u4E4B\u4FBF\u5229\uFF0C\u6211\u4EEC\u548C\u60A8\u5728\u672C\u534F\u8BAE\u4E2D\u5408\u79F0\u4E3A\u201C\u53CC\u65B9\u201D\uFF0C\u6211\u4EEC\u6216\u60A8\u5355\u79F0\u4E3A\u201C\u4E00\u65B9\u201D. <p></p> \u2022\u91CD\u8981\u63D0\u793A\uFF1A <p></p>   \u2022\u6211\u4EEC\u5728\u6B64\u7279\u522B\u63D0\u9192\u60A8\uFF1A <p></p>   1DBS\u7684\u4EA7\u54C1usdt\u662F\u4EC5\u4F9B\u751F\u6D3B\u4F11\u95F2\u5A31\u4E50\u7684\uFF1B <p></p>   2usdt\u662F\u60A8\u5728\u6D77\u901A\u5546\u8D38\u6709\u9650\u516C\u53F8\u8D2D\u4E70\u4EA7\u54C1\u8D60\u9001\u7684\uFF1B <p></p>    3DBS\u5168\u5929\u4E0D\u95F4\u65AD\u63D0\u4F9B\u60A8\u5A31\u4E50\uFF1B <p></p>    4\u56E0\u5404\u56FD\u6CD5\u5F8B\u3001\u6CD5\u89C4\u548C\u89C4\u8303\u6027\u6587\u4EF6\u7684\u5236\u5B9A\u6216\u8005\u4FEE\u6539\uFF0CDBS\u5A31\u4E50\u968F\u65F6\u53EF\u80FD\u88AB\u6682\u505C\u6216\u88AB\u7981\u6B62\u3002DBS\u5A31\u4E50\u548C\u5176\u4ED6\u5A31\u4E50\u4E00\u6837\u6709\u98CE\u9669\uFF0C\u60A8\u4E86\u89E3\u548C\u7406\u89E3\u6B64\u5A31\u4E50\u6709\u53EF\u80FD\u5BFC\u81F4\u8D60\u9001\u7684usdt\u90E8\u5206\u635F\u5931\u6216\u5168\u90E8\u8D60\u9001\u7684usdt\u635F\u5931\uFF0C\u6240\u4EE5\u60A8\u5E94\u8BE5\u4EE5\u80FD\u627F\u53D7\u7684\u635F\u5931\u7A0B\u5EA6\u6765\u51B3\u5B9A\u662F\u5426\u8FDB\u884C\u5A31\u4E50\u3002\u60A8\u4E86\u89E3\u548C\u7406\u89E3DBS\u4F1A\u4EA7\u751F\u884D\u751F\u98CE\u9669\uFF0C\u6240\u4EE5\u5982\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u5EFA\u8BAE\u5148\u5BA2\u6237\u670D\u52A1\u7684\u534F\u52A9\u3002\u6B64\u5916\uFF0C\u9664\u4E86\u4E0A\u8FF0\u63D0\u53CA\u8FC7\u7684\u98CE\u9669\u4EE5\u5916\uFF0C\u8FD8\u4F1A\u6709\u672A\u80FD\u9884\u6D4B\u7684\u98CE\u9669\u5B58\u5728\u3002\u60A8\u5E94\u614E\u91CD\u8003\u8651\u5E76\u7528\u6E05\u6670\u7684\u5224\u65AD\u80FD\u529B\u53BB\u8BC4\u4F30\u81EA\u5DF1\u7684\u72B6\u51B5\u53CA\u4E0A\u8FF0\u5404\u9879\u98CE\u9669\u800C\u4F5C\u51FA\u4EFB\u4F55\u76F8\u5173usdt\u5A31\u4E50\u7684\u51B3\u5B9A\uFF0C\u5E76\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u5168\u90E8\u635F\u5931\uFF0C\u6211\u4EEC\u5BF9\u6B64\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002 \u656C\u544A\u60A8\uFF1A <p></p>    1 \u60A8\u4E86\u89E3\u672C\u7F51\u7AD9\u4EC5\u4F5C\u4E3A\u60A8\u83B7\u53D6usdt\u4FE1\u606F\u3001usdt\u7684\u5A31\u4E50\u8FDB\u884C\u534F\u5546\u53CA\u5F00\u5C55\u5A31\u4E50\u7684\u573A\u6240\uFF0C\u672C\u7F51\u7AD9\u4E0D\u53C2\u4E0E\u60A8\u7684\u4EFB\u4F55\u5A31\u4E50\uFF0C\u6545\u60A8\u5E94\u81EA\u884C\u8C28\u614E\u5224\u65AD\u786E\u5B9A\u76F8\u5173DBS\u53CA/\u6216\u4FE1\u606F\u7684\u771F\u5B9E\u6027\u3001\u5408\u6CD5\u6027\u548C\u6709\u6548\u6027\uFF0C\u5E76\u81EA\u884C\u627F\u62C5\u56E0\u6B64\u4EA7\u751F\u7684\u8D23\u4EFB\u4E0E\u635F\u5931\u3002 <p></p>   2 \u672C\u7F51\u7AD9\u7684\u4EFB\u4F55\u610F\u89C1\u3001\u6D88\u606F\u3001\u63A2\u8BA8\u3001\u5206\u6790\u3001\u4EF7\u683C\u3001\u5EFA\u8BAE\u548C\u5176\u4ED6\u8D44\u8BAF\u5747\u662F\u4E00\u822C\u7684\u5E02\u573A\u8BC4\u8BBA\uFF0C\u5E76\u4E0D\u6784\u6210\u5177\u4F53\u5EFA\u8BAE\u3002\u6211\u4EEC\u4E0D\u627F\u62C5\u4EFB\u4F55\u56E0\u4F9D\u8D56\u8BE5\u8D44\u8BAF\u76F4\u63A5\u6216\u95F4\u63A5\u800C\u4EA7\u751F\u7684\u635F\u5931\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4EFB\u4F55\u5229\u6DA6\u635F\u5931\u3002 <p></p>   3 \u672C\u7F51\u7AD9\u7684\u5185\u5BB9\u4F1A\u968F\u65F6\u66F4\u6539\u5E76\u4E0D\u4F5C\u53E6\u884C\u901A\u77E5\uFF0C\u6211\u4EEC\u5DF2\u91C7\u53D6\u5408\u7406\u63AA\u65BD\u786E\u4FDD\u7F51\u7AD9\u8D44\u8BAF\u7684\u51C6\u786E\u6027\uFF0C\u4F46\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u5176\u51C6\u786E\u6027\u7A0B\u5EA6\uFF0C\u4EA6\u4E0D\u4F1A\u627F\u62C5\u4EFB\u4F55\u56E0\u672C\u7F51\u7AD9\u4E0A\u7684\u8D44\u8BAF\u6216\u56E0\u672A\u80FD\u94FE\u7ED3\u4E92\u8054\u7F51\u3001\u4F20\u9001\u6216\u63A5\u6536\u4EFB\u4F55\u901A\u77E5\u548C\u4FE1\u606F\u65F6\u7684\u5EF6\u8BEF\u6216\u5931\u8D25\u800C\u76F4\u63A5\u6216\u95F4\u63A5\u4EA7\u751F\u7684\u635F\u5931\u3002 <p></p>   4 \u4F7F\u7528\u4E92\u8054\u7F51\u5F62\u5F0F\u7684\u5A31\u4E50\u7CFB\u7EDF\u4EA6\u5B58\u6709\u98CE\u9669\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8F6F\u4EF6\uFF0C\u786C\u4EF6\u548C\u4E92\u8054\u7F51\u94FE\u7ED3\u7684\u5931\u8D25\u7B49\u3002\u7531\u4E8E\u6211\u4EEC\u4E0D \u80FD\u63A7\u5236\u4E92\u8054\u7F51\u7684\u53EF\u9760\u6027\u548C\u53EF\u7528\u6027\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u5BF9\u5931\u771F\uFF0C\u5EF6\u8BEF\u548C\u94FE\u7ED3\u5931\u8D25\u800C\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002 <p></p>   5 \u7981\u6B62\u4F7F\u7528\u672C\u7F51\u7AD9\u4ECE\u4E8B\u6D17\u94B1\u3001\u8D70\u79C1\u3001\u5546\u4E1A\u8D3F\u8D42\u7B49\u4E00\u5207\u975E\u6CD5\u5A31\u4E50\u6D3B\u52A8\uFF0C\u82E5\u53D1\u73B0\u6B64\u7C7B\u4E8B\u4EF6\uFF0C\u672C\u7AD9\u5C06\u91C7\u53D6\u5404\u79CD\u53EF\u4F7F\u7528\u4E4B\u624B\u6BB5\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u51BB\u7ED3\u8D26\u6237\uFF0C\u901A\u77E5\u76F8\u5173\u6743\u529B\u673A\u5173\u7B49\uFF0C\u6211\u4EEC\u4E0D\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u6240\u6709\u8D23\u4EFB\u5E76\u4FDD\u7559\u5411\u76F8\u5173\u4EBA\u58EB\u8FFD\u7A76\u8D23\u4EFB\u7684\u6743\u5229\u3002 <p></p>   \u2022\u4E00\u3001\u603B\u5219 <p></p>   1.1 \u300A\u7528\u6237\u534F\u8BAE\u300B\uFF08\u4EE5\u4E0B\u79F0\u201C\u672C\u534F\u8BAE\u201D\u6216\u201C\u672C\u6761\u6B3E\u53CA\u6761\u4EF6\u201D\uFF09\uFF0C\u7531\u6B63\u6587\u3001\u300A\u9690\u79C1\u6761\u6B3E\u300B\u3001\u300A\u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u548C\u53CD\u6D17\u94B1\u653F\u7B56\u300B\u4EE5\u53CA\u672C\u7F51\u7AD9\u5DF2\u7ECF\u53D1\u5E03\u7684\u6216\u5C06\u6765\u53EF\u80FD\u53D1\u5E03\u7684\u5404\u7C7B\u89C4\u5219\u3001\u58F0\u660E\u3001\u8BF4\u660E\u7B49\u6784\u6210\u3002 <p></p>   1.2 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u7AD9\u63D0\u4F9B\u7684\u5404\u9879\u670D\u52A1\u4E4B\u524D\uFF0C\u5E94\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\uFF0C\u5982\u6709\u4E0D\u7406\u89E3\u4E4B\u5904\u6216\u5176\u4ED6\u5FC5\u8981\uFF0C\u8BF7\u54A8\u8BE2\u4E13\u4E1A\u5F8B\u5E08\u3002\u5982\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u53CA/\u6216\u968F\u65F6\u5BF9\u5176\u7684\u4FEE\u6539\uFF0C\u8BF7\u60A8\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u672C\u7F51\u7AD9\u63D0\u4F9B\u7684\u670D\u52A1\u6216\u4E0D\u518D\u767B\u9646\u672C\u7F51\u7AD9\u3002\u60A8\u4E00\u65E6\u767B\u9646\u672C\u7F51\u7AD9\u3001\u4F7F\u7528\u672C\u7F51\u7AD9\u7684\u4EFB\u4F55\u670D\u52A1\u6216\u4EFB\u4F55\u5176\u4ED6\u7C7B\u4F3C\u884C\u4E3A\u5373\u8868\u793A\u60A8\u5DF2\u4E86\u89E3\u5E76\u5B8C\u5168\u540C\u610F\u672C\u534F\u8BAE\u5404\u9879\u5185\u5BB9\uFF0C\u5305\u62EC\u672C\u7F51\u7AD9\u5BF9\u672C\u534F\u8BAE\u968F\u65F6\u6240\u505A\u7684\u4EFB\u4F55\u4FEE\u6539\u3002 <p></p>   1.3 \u60A8\u901A\u8FC7\u6309\u7167\u718A\u732B\u76D2\u5B50\u8981\u6C42\u586B\u5199\u76F8\u5173\u4FE1\u606F\uFF0C\u5E76\u7ECF\u8FC7\u5176\u4ED6\u76F8\u5173\u7A0B\u5E8F\u540E\u6210\u529F\u6CE8\u518C\u53EF\u4EE5\u6210\u4E3A\u672C\u7F51\u7AD9\u7684\u4F1A\u5458\uFF08\u4EE5\u4E0B\u79F0\u201C\u4F1A\u5458\u201D\uFF09\uFF0C\u5728\u8FDB\u884C\u6CE8\u518C\u8FC7\u7A0B\u4E2D\u70B9\u51FB\u201C\u540C\u610F\u201D\u6309\u94AE\u5373\u8868\u793A\u60A8\u4EE5\u7535\u5B50\u7B7E\u7F72\u7684\u5F62\u5F0F\u4E0E\u516C\u53F8\u8FBE\u6210\u534F\u8BAE\uFF1B\u6216\u60A8\u5728\u4F7F\u7528\u672C\u7F51\u7AD9\u8FC7\u7A0B\u4E2D\u70B9\u51FB\u4EFB\u4F55\u6807\u6709\u201C\u540C\u610F\u201D\u6216\u7C7B\u4F3C\u610F\u601D\u7684\u6309\u94AE\u7684\u884C\u4E3A\u6216\u4EE5\u5176\u4ED6\u672C\u7F51\u7AD9\u5141\u8BB8\u7684\u65B9\u5F0F\u5B9E\u9645\u4F7F\u7528\u672C\u7F51\u7AD9\u63D0\u4F9B\u7684\u670D\u52A1\u65F6\uFF0C\u5747\u8868\u793A\u60A8\u5B8C\u5168\u4E86\u89E3\u3001\u540C\u610F\u4E14\u63A5\u53D7\u672C\u534F\u8BAE\u9879\u4E0B\u7684\u5168\u90E8\u6761\u6B3E\u7684\u7EA6\u675F\uFF0C\u65E0\u60A8\u624B\u5199\u7684\u4E66\u9762\u7B7E\u5B57\u5C31\u672C\u534F\u8BAE\u5BF9\u60A8\u7684\u6CD5\u5F8B\u7EA6\u675F\u529B\u65E0\u4EFB\u4F55\u5F71\u54CD\u3002 <p></p>   1.4 \u60A8\u6210\u4E3A\u672C\u7F51\u7AD9\u7684\u7528\u6237\u540E\uFF0C\u60A8\u5C06\u83B7\u5F97\u4E00\u4E2A\u7528\u6237\u5E10\u53F7\u53CA\u76F8\u5E94\u7684\u5BC6\u7801\uFF0C\u8BE5\u5E10\u53F7\u548C\u5BC6\u7801\u7531\u7528\u6237\u8D1F\u8D23\u4FDD\u7BA1\uFF1B\u7528\u6237\u5E94\u5F53\u5BF9\u4EE5\u5176\u60A8\u5E10\u53F7\u8FDB\u884C\u7684\u6240\u6709\u6D3B\u52A8\u548C\u4E8B\u4EF6\u8D1F\u6CD5\u5F8B\u8D23\u4EFB\u3002 <p></p>   1.5 \u53EA\u6709\u6210\u4E3A\u718A\u732B\u76D2\u5B50\u7684\u7528\u6237\u624D\u53EF\u4F7F\u7528\u672C\u7F51\u7AD9\u63D0\u4F9B\u7684DBS\u5E73\u53F0\u8FDB\u884C\u5A31\u4E50\u5A31\u4E50\u53CA\u4EAB\u53D7\u5176\u4ED6\u672C\u7F51\u7AD9\u89C4\u5B9A\u7684\u53EA\u6709\u7528\u6237\u624D\u53EF\u83B7\u5F97\u7684\u670D\u52A1\uFF1B\u7528\u6237\u5916\u7684\u5176\u4ED6\u60A8\u53EA\u6709\u767B\u9646\u7F51\u7AD9\u3001\u6D4F\u89C8\u7F51\u7AD9\u53CA\u5176\u4ED6\u672C\u7F51\u7AD9\u89C4\u5B9A\u7684\u53EF\u83B7\u5F97\u7684\u670D\u52A1\u3002 <p></p>   1.6 \u901A\u8FC7\u6CE8\u518C\u548C\u4F7F\u7528\u4EFB\u4F55\u7531\u672C\u7F51\u7AD9\u63D0\u4F9B\u7684\u670D\u52A1\u548C\u529F\u80FD\uFF0C\u60A8\u5C06\u88AB\u89C6\u4E3A\u5DF2\u9605\u8BFB\uFF0C\u7406\u89E3\u5E76\uFF1A <p></p>   1.6.1 \u63A5\u53D7\u672C\u534F\u8BAE\u6240\u6709\u6761\u6B3E\u53CA\u6761\u4EF6\u7684\u7EA6\u675F\u3002 <p></p>   1.6.2 \u60A8\u786E\u8BA4\u60A8\u5DF2\u5E74\u6EE116\u5468\u5C81\u6216\u6839\u636E\u4E0D\u540C\u7684\u53EF\u9002\u7528\u7684\u6CD5\u5F8B\u89C4\u5B9A\u7684\u5177\u6709\u53EF\u8BA2\u7ACB\u5408\u540C\u7684\u6CD5\u5B9A\u5E74\u9F84\uFF0C\u5E76\u6709\u5145\u5206\u7684\u80FD\u529B\u63A5\u53D7\u8FD9\u4E9B\u6761\u6B3E\uFF0C\u5E76\u8BA2\u7ACB\u5A31\u4E50\uFF0C\u4F7F\u7528\u672C\u7F51\u7AD9\u8FDB\u884C\u5A31\u4E50\u3002 <p></p>   \u2022\u60A8\u786E\u8BA4\u6CE8\u518C\u65F6\u63D0\u4F9B\u7684\u4FE1\u606F\u662F\u771F\u5B9E\u548C\u51C6\u786E\u7684\u3002 <p></p>   1.6.7 \u672C\u534F\u8BAE\u53EA\u662F\u5C31\u60A8\u4E0E\u6211\u4EEC\u4E4B\u95F4\u8FBE\u6210\u7684\u6743\u5229\u4E49\u52A1\u5173\u7CFB\u8FDB\u884C\u7EA6\u675F\uFF0C\u800C\u5E76\u4E0D\u6D89\u53CA\u672C\u7F51\u7AD9\u7528\u6237\u4E4B\u95F4\u4E0E\u5176\u4ED6\u7F51\u7AD9\u548C\u60A8\u4E4B\u95F4\u56E0\u5A31\u4E50\u800C\u4EA7\u751F\u7684\u6CD5\u5F8B\u5173\u7CFB\u53CA\u6CD5\u5F8B\u7EA0\u7EB7\u3002 <p></p>   \u2022\u4E8C\u3001\u534F\u8BAE\u4FEE\u8BA2 <p></p>   \u6211\u4EEC\u4FDD\u7559\u4E0D\u65F6\u4FEE\u8BA2\u672C\u534F\u8BAE\u3001\u5E76\u4EE5\u7F51\u7AD9\u516C\u793A\u7684\u65B9\u5F0F\u8FDB\u884C\u516C\u544A\u3001\u4E0D\u518D\u5355\u72EC\u901A\u77E5\u60A8\u7684\u6743\u5229\uFF0C\u53D8\u66F4\u540E\u7684\u534F\u8BAE\u4F1A\u5728\u672C\u534F\u8BAE\u9996\u9875\u6807\u6CE8\u53D8\u66F4\u65F6\u95F4\uFF0C\u4E00\u7ECF\u5728\u7F51\u7AD9\u516C\u5E03\uFF0C\u7ACB\u5373\u81EA\u52A8\u751F\u6548\u3002\u60A8\u5E94\u4E0D\u65F6\u6D4F\u89C8\u53CA\u5173\u6CE8\u672C\u534F\u8BAE\u7684\u66F4\u65B0\u53D8\u66F4\u65F6\u95F4\u53CA\u66F4\u65B0\u5185\u5BB9\uFF0C\u5982\u60A8\u4E0D\u540C\u610F\u76F8\u5173\u53D8\u66F4\uFF0C\u5E94\u5F53\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u672C\u7F51\u7AD9\u670D\u52A1\uFF1B\u60A8\u7EE7\u7EED\u4F7F\u7528\u672C\u7F51\u7AD9\u670D\u52A1\uFF0C\u5373\u8868\u793A\u60A8\u63A5\u53D7\u5E76\u540C\u610F\u7ECF\u4FEE\u8BA2\u7684\u534F\u8BAE\u7684\u7EA6\u675F\u3002 <p></p>   \u2022\u4E09\u3001\u6CE8\u518C <p></p>   3.1 \u6CE8\u518C\u8D44\u683C <p></p>   \u60A8\u786E\u8BA4\u5E76\u627F\u8BFA\uFF1A\u5728\u60A8\u5B8C\u6210\u718A\u732B\u76D2\u5B50\u6CE8\u518C\u7A0B\u5E8F\u4F7F\u7528\u672C\u7F51\u7AD9\u63D0\u4F9B\u7684\u670D\u52A1\u65F6\uFF0C\u60A8\u5E94\u5F53\u662F\u5177\u5907\u53EF\u9002\u7528\u7684\u6CD5\u5F8B\u89C4\u5B9A\u7684\u53EF\u7B7E\u7F72\u672C\u534F\u8BAE\u53CA\u4F7F\u7528\u672C\u7F51\u7AD9\u670D\u52A1\u5E94\u5177\u6709\u7684\u80FD\u529B\u7684\u81EA\u7136\u4EBA\u3001\u6CD5\u4EBA\u6216\u5176\u4ED6\u7EC4\u7EC7\u3002\u60A8\u4E00\u65E6\u70B9\u51FB\u540C\u610F\u6CE8\u518C\u6309\u94AE\uFF0C\u5373\u8868\u793A\u60A8\u81EA\u8EAB\u6216\u60A8\u7684\u6709\u6743\u4EE3\u7406\u4EBA\u5DF2\u7ECF\u540C\u610F\u8BE5\u534F\u8BAE\u5185\u5BB9\u5E76\u7531\u5176\u4EE3\u7406\u6CE8\u518C\u53CA\u4F7F\u7528\u672C\u7F51\u7AD9\u670D\u52A1\u3002\u82E5\u60A8\u4E0D\u5177\u5907\u524D\u8FF0\u4E3B\u4F53\u8D44\u683C\uFF0C\u5219\u60A8\u53CA\u60A8\u7684\u6709\u6743\u4EE3\u7406\u4EBA\u5E94\u627F\u62C5\u56E0\u6B64\u800C\u5BFC\u81F4\u7684\u4E00\u5207\u540E\u679C\uFF0C\u4E14\u516C\u53F8\u4FDD\u7559\u6CE8\u9500\u6216\u6C38\u4E45\u51BB\u7ED3\u60A8\u8D26\u6237\uFF0C\u5E76\u5411\u60A8\u53CA\u60A8\u7684\u6709\u6743\u4EE3\u7406\u4EBA\u8FFD\u7A76\u8D23\u4EFB\u7684\u6743\u5229\u3002 <p></p>  3.2 \u6CE8\u518C\u76EE\u7684 <p></p>  \u60A8\u786E\u8BA4\u5E76\u627F\u8BFA\uFF1A\u60A8\u8FDB\u884C\u672C\u7F51\u7AD9\u6CE8\u518C\u5E76\u975E\u51FA\u4E8E\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u6216\u7834\u574F\u672C\u7F51\u7AD9DBS\u79E9\u5E8F\u7684\u76EE\u7684\u3002 <p></p>   3.3\u6CE8\u518C\u6D41\u7A0B <p></p>  3.3.1 \u60A8\u540C\u610F\u6839\u636E\u672C\u7F51\u7AD9\u7528\u6237\u6CE8\u518C\u9875\u9762\u7684\u8981\u6C42\u63D0\u4F9B\u6709\u6548\u624B\u673A\u53F7\u7801\u7B49\u4FE1\u606F\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u60A8\u63D0\u4F9B\u6216\u786E\u8BA4\u7684\u624B\u673A\u53F7\u7801\u6216\u8005\u672C\u7F51\u7AD9\u5141\u8BB8\u7684\u5176\u5B83\u65B9\u5F0F\u4F5C\u4E3A\u767B\u9646\u624B\u6BB5\u8FDB\u5165\u672C\u7F51\u7AD9\u3002\u5982\u6709\u5FC5\u8981\uFF0C\u6309\u7167\u4E0D\u540C\u6CD5\u57DF\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u7684\u89C4\u5B9A\uFF0C\u60A8\u5FC5\u987B\u63D0\u4F9B\u60A8\u7684\u771F\u5B9E\u59D3\u540D\u3001\u8EAB\u4EFD\u8BC1\u4EF6\u7B49\u6CD5\u5F8B\u6CD5\u89C4\u53CA\u9690\u79C1\u6761\u6B3E\u53CA\u53CD\u6D17\u94B1\u6761\u6B3E\u89C4\u5B9A\u7684\u76F8\u5173\u4FE1\u606F\u5E76\u4E0D\u65AD\u66F4\u65B0\u6CE8\u518C\u8D44\u6599\uFF0C\u7B26\u5408\u53CA\u65F6\u3001\u8BE6\u5C3D\u3001\u51C6\u786E\u7684\u8981\u6C42\u3002\u6240\u6709\u539F\u59CB\u952E\u5165 \u7684\u8D44\u6599\u5C06\u5F15\u7528\u4E3A\u6CE8\u518C\u8D44\u6599\u3002\u60A8\u5E94\u5BF9\u8BE5\u7B49\u4FE1\u606F\u7684\u771F\u5B9E\u6027\u3001\u5B8C\u6574\u6027\u548C\u51C6\u786E\u6027\u8D1F\u8D23\uFF0C\u5E76\u627F\u62C5\u56E0\u6B64\u4EA7\u751F\u7684\u4EFB\u4F55\u76F4\u63A5\u6216\u95F4\u63A5\u635F\u5931\u53CA\u4E0D\u5229\u540E\u679C\u3002 <p></p>  3.3.2 \u5982\u60A8\u6240\u5728\u4E3B\u6743\u56FD\u5BB6\u6216\u5730\u533A\u7684\u6CD5\u5F8B\u6CD5\u89C4\u3001\u89C4\u5219\u3001\u547D\u4EE4\u7B49\u89C4\u8303\u5BF9\u624B\u673A\u53F7\u7801\u6709\u5B9E\u540D\u8981\u6C42\uFF0C\u60A8\u540C\u610F\u63D0\u4F9B\u6CE8\u518C\u7684\u624B\u673A\u53F7\u7801\u662F\u7ECF\u8FC7\u5B9E\u540D\u767B\u8BB0\u7684\uFF0C\u5982\u60A8\u4E0D\u6309\u7167\u89C4\u5B9A\u63D0\u4F9B\uFF0C\u56E0\u6B64\u7ED9\u60A8\u5E26\u6765\u7684\u4EFB\u4F55\u76F4\u63A5\u6216\u95F4\u63A5\u635F\u5931\u53CA\u4E0D\u5229\u540E\u679C\u5747\u5E94\u7531\u60A8\u627F\u62C5\u3002 <p></p>    3.3.3\u60A8\u5408\u6CD5\u3001\u5B8C\u6574\u5E76\u6709\u6548\u63D0\u4F9B\u6CE8\u518C\u6240\u9700\u4FE1\u606F\u5E76\u7ECF\u9A8C\u8BC1\uFF0C\u6709\u6743\u83B7\u5F97\u672C\u7F51\u7AD9\u8D26\u53F7\u548C\u5BC6\u7801\uFF0C\u60A8\u83B7\u5F97\u672C\u7F51\u7AD9\u8D26\u53F7\u53CA\u5BC6\u7801\u65F6\u89C6\u4E3A\u6CE8\u518C\u6210\u529F\uFF0C\u53EF\u5728\u672C\u7F51\u7AD9\u8FDB\u884C\u4F1A\u5458\u767B\u9646\u3002 <p></p>   3.3.4 \u60A8\u540C\u610F\u63A5\u6536\u672C\u7F51\u7AD9\u53D1\u9001\u7684\u4E0E\u672C\u7F51\u7AD9\u7BA1\u7406\u3001\u8FD0\u8425\u76F8\u5173\u7684\u7535\u5B50\u90AE\u4EF6\u548C\u6216\u77ED\u6D88\u606F\u3002 <p></p>   \u2022\u56DB\u3001\u670D\u52A1 <p></p>   \u672C\u7F51\u7AD9\u53EA\u4E3A\u60A8\u901A\u8FC7\u672C\u7F51\u7AD9\u8FDB\u884Cusdt\u5A31\u4E50\u6D3B\u52A8\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8Eusdt\u5A31\u4E50\u7B49\u670D\u52A1\uFF09\u63D0\u4F9B\u7F51\u7EDC\u5A31\u4E50\u5E73\u53F0\u670D\u52A1\uFF0C\u672C\u7F51\u7AD9\u5E76\u4E0D\u4F5C\u4E3A\u4E70\u5BB6\u6216\u5356\u5BB6\u53C2\u4E0E\u4E70\u5356usdt\u884C\u4E3A\u672C\u8EAB\uFF1B\u672C\u7F51\u7AD9\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u56FD\u5BB6\u6CD5\u5B9A\u8D27\u5E01\u5145\u5165\u548C\u63D0\u53D6\u7684\u76F8\u5173\u670D\u52A1\u3002 <p></p>   \u2022\u4E94\u3001\u672C\u7F51\u7AD9\u7684\u6743\u5229\u548C\u4E49\u52A1 <p></p>   5.1 \u5982\u60A8\u4E0D\u5177\u5907\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u6CE8\u518C\u8D44\u683C\uFF0C\u5219\u672C\u7F51\u7AD9\u6709\u6743\u62D2\u7EDD\u60A8\u8FDB\u884C\u6CE8\u518C\uFF0C\u5BF9\u5DF2\u6CE8\u518C\u7684\uFF0C\u672C\u7F51\u7AD9\u6709\u6743\u6CE8\u9500\u60A8\u7684\u4F1A\u5458\u8D26\u53F7\uFF0C\u672C\u7F51\u7AD9\u4FDD\u7559\u5411\u60A8\u6216\u60A8\u7684\u6709\u6743\u4EE3\u7406\u4EBA\u8FFD\u7A76\u8D23\u4EFB\u7684\u6743\u5229\u3002\u540C\u65F6\uFF0C\u672C\u7F51\u7AD9\u4FDD\u7559\u5176\u4ED6\u4EFB\u4F55\u60C5\u51B5\u4E0B\u51B3\u5B9A\u662F\u5426\u63A5\u53D7\u60A8\u6CE8\u518C\u7684\u6743\u5229\u3002 <p></p>   5.2 \u672C\u7F51\u7AD9\u53D1\u73B0\u8D26\u6237\u4F7F\u7528\u8005\u5E76\u975E\u8D26\u6237\u521D\u59CB\u6CE8\u518C\u4EBA\u65F6\uFF0C\u6709\u6743\u4E2D\u6B62\u6216\u7EC8\u6B62\u8BE5\u8D26\u6237\u7684\u4F7F\u7528\u3002 <p></p>   5.3 \u672C\u7F51\u7AD9\u901A\u8FC7\u6280\u672F\u68C0\u6D4B\u3001\u4EBA\u5DE5\u62BD\u68C0\u7B49\u68C0\u6D4B\u65B9\u5F0F\u5408\u7406\u6000\u7591\u60A8\u63D0\u4F9B\u7684\u4FE1\u606F\u9519\u8BEF\u3001\u4E0D\u5B9E\u3001\u5931\u6548\u6216\u4E0D\u5B8C\u6574\u65F6\uFF0C\u6709\u6743\u901A\u77E5\u60A8\u66F4\u6B63\u3001\u66F4\u65B0\u4FE1\u606F\u6216\u4E2D\u6B62\u3001\u7EC8\u6B62\u4E3A\u5176\u63D0\u4F9B\u672C\u7F51\u7AD9\u670D\u52A1\u3002 <p></p>   5.4 \u672C\u7F51\u7AD9\u6709\u6743\u5728\u53D1\u73B0\u672C\u7F51\u7AD9\u4E0A\u663E\u793A\u7684\u4EFB\u4F55\u4FE1\u606F\u5B58\u5728\u660E\u663E\u9519\u8BEF\u65F6\uFF0C\u5BF9\u4FE1\u606F\u4E88\u4EE5\u66F4\u6B63\u3002 <p></p>   5.5 \u672C\u7F51\u7AD9\u4FDD\u7559\u968F\u65F6\u4FEE\u6539\u3001\u4E2D\u6B62\u6216\u7EC8\u6B62\u672C\u7F51\u7AD9\u670D\u52A1\u7684\u6743\u5229\uFF0C\u672C\u7F51\u7AD9\u884C\u4F7F\u4FEE\u6539\u6216\u4E2D\u6B62\u670D\u52A1\u7684\u6743\u5229\u4E0D\u9700\u4E8B\u5148\u544A\u77E5\u60A8\uFF1B\u672C\u7F51\u7AD9\u7EC8\u6B62\u672C\u7F51\u7AD9\u4E00\u9879\u6216\u591A\u9879\u670D\u52A1\u7684\uFF0C\u7EC8\u6B62\u81EA\u672C\u7F51\u7AD9\u5728\u7F51\u7AD9\u4E0A\u53D1\u5E03\u7EC8\u6B62\u516C\u544A\u4E4B\u65E5\u751F\u6548\u3002 <p></p>   5.6 \u672C\u7F51\u7AD9\u5E94\u5F53\u91C7\u53D6\u5FC5\u8981\u7684\u6280\u672F\u624B\u6BB5\u548C\u7BA1\u7406\u63AA\u65BD\u4FDD\u969C\u672C\u7F51\u7AD9\u7684\u6B63\u5E38\u8FD0\u884C\uFF0C\u5E76\u63D0\u4F9B\u5FC5\u8981\u3001\u53EF\u9760\u7684\u5A31\u4E50\u73AF\u5883\u548C\u5A31\u4E50\u670D\u52A1\uFF0C\u7EF4\u62A4DBS\u5A31\u4E50\u79E9\u5E8F\u3002 <p></p>   5.7 \u5982\u60A8\u8FDE\u7EED\u4E00\u5E74\u672A\u4F7F\u7528\u672C\u7F51\u7AD9\u7528\u6237\u8D26\u53F7\u548C\u5BC6\u7801\u767B\u9646\u672C\u7F51\u7AD9\uFF0C\u5219\u672C\u7F51\u7AD9\u6709\u6743\u6CE8\u9500\u60A8\u7684\u672C\u7F51\u7AD9\u8D26\u53F7\u3002\u8D26\u53F7\u6CE8\u9500\u540E\uFF0C\u672C\u7F51\u7AD9\u6709\u6743\u5C06\u76F8\u5E94\u7684\u4F1A\u5458\u540D\u5F00\u653E\u7ED9\u5176\u4ED6\u60A8\u6CE8\u518C\u4F7F\u7528\u3002 <p></p>   5.8 \u672C\u7F51\u7AD9\u901A\u8FC7\u52A0\u5F3A\u6280\u672F\u6295\u5165\u3001\u63D0\u5347\u5B89\u5168\u9632\u8303\u7B49\u63AA\u65BD\u4FDD\u969C\u60A8\u7684usdt\u7684\u5B89\u5168\uFF0C\u6709\u4E49\u52A1\u5728\u60A8\u8D26\u6237\u51FA\u73B0\u53EF\u4EE5\u9884\u89C1\u7684\u5B89\u5168\u98CE\u9669\u65F6\u63D0\u524D\u901A\u77E5\u60A8\u3002 <p></p>  5.9 \u672C\u7F51\u7AD9\u6709\u6743\u968F\u65F6\u5220\u9664\u672C\u7F51\u7AD9\u5185\u5404\u7C7B\u4E0D\u7B26\u5408\u6CD5\u5F8B\u6CD5\u89C4\u6216\u672C\u7F51\u7AD9\u89C4\u5B9A\u7B49\u7684\u5185\u5BB9\u4FE1\u606F\uFF0C\u672C\u7F51\u7AD9\u884C\u4F7F\u8BE5\u7B49\u6743\u5229\u4E0D\u9700\u63D0\u524D\u901A\u77E5\u60A8\u3002 <p></p>   5.10 \u672C\u7F51\u7AD9\u6709\u6743\u6839\u636E\u60A8\u6240\u5C5E\u4E3B\u6743\u56FD\u5BB6\u6216\u5730\u533A\u7684\u6CD5\u5F8B\u6CD5\u89C4\u3001\u89C4\u5219\u3001\u547D\u4EE4\u7B49\u89C4\u8303\u7684\u8981\u6C42\uFF0C\u5411\u60A8\u8981\u6C42\u63D0\u4F9B\u66F4\u591A\u7684\u4FE1\u606F\u6216\u8D44\u6599\u7B49\uFF0C\u5E76\u91C7\u53D6\u5408\u7406\u7684\u63AA\u65BD\uFF0C\u4EE5\u7B26\u5408\u5F53\u5730\u7684\u89C4\u8303\u4E4B\u8981\u6C42\uFF0C\u60A8\u6709\u4E49\u52A1\u914D\u5408\uFF1B\u672C\u7F51\u7AD9\u6709\u6743\u6839\u636E\u60A8\u6240\u5C5E\u4E3B\u6743\u56FD\u5BB6\u6216\u5730\u533A\u7684\u6CD5\u5F8B\u6CD5\u89C4\u3001\u89C4\u5219\u3001\u547D\u4EE4\u7B49\u89C4\u8303\u7684\u8981\u6C42\uFF0C\u6682\u505C\u6216\u6C38\u4E45\u505C\u6B62\u5BF9\u60A8\u7684\u5F00\u653E\u672C\u7F51\u7AD9\u53CA\u5176\u90E8\u5206\u6216\u5168\u90E8\u670D\u52A1\u3002 <p></p>   \u2022\u516D\u3001\u8D54\u507F <p></p>   6.1 \u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5BF9\u60A8\u7684\u76F4\u63A5\u635F\u5BB3\u7684\u8D54\u507F\u8D23\u4EFB\u5747\u4E0D\u4F1A\u8D85\u8FC7\u60A8\u4ECE\u4F7F\u7528\u672C\u7F51\u7AD9\u670D\u52A1\u4EA7\u751F\u7684\u4E3A\u671F\u4E09\uFF08 3\uFF09\u4E2A\u6708\u7684\u603B\u8D39\u7528\u3002 <p></p>   6.2 \u5982\u60A8\u53D1\u751F\u8FDD\u53CD\u672C\u534F\u8BAE\u6216\u5176\u4ED6\u6CD5\u5F8B\u6CD5\u89C4\u7B49\u60C5\u51B5\uFF0C\u60A8\u987B\u5411\u6211\u4EEC\u81F3\u5C11\u8D54\u507F200\u4E07\u7F8E\u5143\u53CA\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u5168\u90E8\u8D39\u7528\uFF08\u5305\u62EC\u5F8B\u5E08\u8D39\u7B49\uFF09\uFF0C\u5982\u4E0D\u591F\u5F25\u8865\u5B9E\u9645\u635F\u5931\uFF0C\u60A8\u987B\u8865\u5168\u3002 <p></p>   \u2022\u4E03\u3001\u5BFB\u6C42\u7981\u4EE4\u6551\u6D4E\u7684\u6743\u5229 <p></p>   \u6211\u4EEC\u548C\u60A8\u5747\u627F\u8BA4\u666E\u901A\u6CD5\u5BF9\u8FDD\u7EA6\u6216\u53EF\u80FD\u8FDD\u7EA6\u60C5\u51B5\u7684\u6551\u6D4E\u63AA\u65BD\u662F\u53EF\u80FD\u662F\u4E0D\u8DB3\u4EE5\u5F25\u8865\u6211\u4EEC\u906D\u53D7\u7684\u5168\u90E8\u635F\u5931\u7684\uFF0C\u6545\u975E\u8FDD\u7EA6\u65B9\u6709\u6743\u5728\u8FDD\u7EA6\u6216\u53EF\u80FD\u8FDD\u7EA6\u60C5\u51B5\u4E0B\u5BFB\u6C42\u7981\u4EE4\u6551\u6D4E\u4EE5\u53CA\u666E\u901A\u6CD5\u6216\u8861\u5E73\u6CD5\u5141\u8BB8\u7684\u5176\u4ED6\u6240\u6709\u7684\u8865\u6551\u63AA\u65BD\u3002 <p></p>   \u2022\u516B\u3001\u8D23\u4EFB\u9650\u5236\u4E0E\u514D\u8D23 <p></p>   \u2022\u4E5D\u3001\u534F\u8BAE\u7684\u7EC8\u6B62 <p></p>   9.1 \u672C\u7F51\u7AD9\u6709\u6743\u4F9D\u636E\u672C\u534F\u8BAE\u7EA6\u5B9A\u6CE8\u9500\u60A8\u7684\u672C\u7F51\u7AD9\u8D26\u53F7\uFF0C\u672C\u534F\u8BAE\u4E8E\u8D26\u53F7\u6CE8\u9500\u4E4B\u65E5\u7EC8\u6B62\u3002 <p></p>   9.2 \u672C\u7F51\u7AD9\u6709\u6743\u4F9D\u636E\u672C\u534F\u8BAE\u7EA6\u5B9A\u7EC8\u6B62\u5168\u90E8\u672C\u7F51\u7AD9\u670D\u52A1\uFF0C\u672C\u534F\u8BAE\u4E8E\u672C\u7F51\u7AD9\u5168\u90E8\u670D\u52A1\u7EC8\u6B62\u4E4B\u65E5\u7EC8\u6B62\u3002 <p></p>   9.3 \u672C\u534F\u8BAE\u7EC8\u6B62\u540E\uFF0C\u60A8\u65E0\u6743\u8981\u6C42\u672C\u7F51\u7AD9\u7EE7\u7EED\u5411\u5176\u63D0\u4F9B\u4EFB\u4F55\u670D\u52A1\u6216\u5C65\u884C\u4EFB\u4F55\u5176\u4ED6\u4E49\u52A1\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8981\u6C42\u672C\u7F51\u7AD9\u4E3A\u60A8\u4FDD\u7559\u6216\u5411\u60A8\u62AB\u9732\u5176\u539F\u672C\u7F51\u7AD9\u8D26\u53F7\u4E2D\u7684\u4EFB\u4F55\u4FE1\u606F\uFF0C \u5411\u60A8\u6216\u7B2C\u4E09\u65B9\u8F6C\u53D1\u4EFB\u4F55\u5176\u672A\u66FE\u9605\u8BFB\u6216\u53D1\u9001\u8FC7\u7684\u4FE1\u606F\u7B49\u3002 <p></p>   9.4 \u672C\u534F\u8BAE\u7684\u7EC8\u6B62\u4E0D\u5F71\u54CD\u5B88\u7EA6\u65B9\u5411\u8FDD\u7EA6\u65B9\u8981\u6C42\u5176\u4ED6\u8D23\u4EFB\u7684\u627F\u62C5\u3002 <p></p>   \u2022\u5341\u3001\u77E5\u8BC6\u4EA7\u6743 <p></p>   10.1 \u672C\u7F51\u7AD9\u6240\u5305\u542B\u7684\u5168\u90E8\u667A\u529B\u6210\u679C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7F51\u7AD9\u6807\u5FD7\u3001\u6570\u636E\u5E93\u3001\u7F51\u7AD9\u8BBE\u8BA1\u3001\u6587\u5B57\u548C\u56FE\u8868\u3001\u8F6F\u4EF6\u3001\u7167\u7247\u3001\u5F55\u50CF\u3001\u97F3\u4E50\u3001\u58F0\u97F3\u53CA\u5176\u524D\u8FF0\u7EC4\u5408\uFF0C\u8F6F\u4EF6\u7F16\u8BD1\u3001\u76F8\u5173\u6E90\u4EE3\u7801\u548C\u8F6F\u4EF6 (\u5305\u62EC\u5C0F\u5E94\u7528\u7A0B\u5E8F\u548C\u811A\u672C) \u7684\u77E5\u8BC6\u4EA7\u6743\u6743\u5229\u5747\u5F52\u672C\u7F51\u7AD9\u6240\u6709\u3002\u60A8\u4E0D\u5F97\u4E3A\u5546\u4E1A\u76EE\u7684\u590D\u5236\u3001\u66F4\u6539\u3001\u62F7\u8D1D\u3001\u53D1\u9001\u6216\u4F7F\u7528\u524D\u8FF0\u4EFB\u4F55\u6750\u6599\u6216\u5185\u5BB9\u3002 <p></p>   10.2 \u672C\u7F51\u7AD9\u540D\u79F0\u4E2D\u5305\u542B\u7684\u6240\u6709\u6743\u5229 (\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5546\u8A89\u548C\u5546\u6807\u3001\u6807\u5FD7) \u5747\u5F52\u516C\u53F8\u6240\u6709\u3002 <p></p>   10.3 \u60A8\u63A5\u53D7\u672C\u534F\u8BAE\u5373\u89C6\u4E3A\u60A8\u4E3B\u52A8\u5C06\u5176\u5728\u672C\u7F51\u7AD9\u53D1\u8868\u7684\u4EFB\u4F55\u5F62\u5F0F\u7684\u4FE1\u606F\u7684\u8457\u4F5C\u6743\uFF0C \u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u590D\u5236\u6743\u3001\u53D1\u884C\u6743\u3001\u51FA\u79DF\u6743\u3001\u5C55\u89C8\u6743\u3001\u8868\u6F14\u6743\u3001\u653E\u6620\u6743\u3001\u5E7F\u64AD\u6743\u3001\u4FE1\u606F\u7F51\u7EDC\u4F20\u64AD\u6743\u3001\u6444\u5236\u6743\u3001\u6539\u7F16\u6743\u3001\u7FFB\u8BD1\u6743\u3001\u6C47\u7F16\u6743 \u4EE5\u53CA\u5E94\u5F53\u7531\u8457\u4F5C\u6743\u4EBA\u4EAB\u6709\u7684\u5176\u4ED6\u53EF\u8F6C\u8BA9\u6743\u5229\u65E0\u507F\u72EC\u5BB6\u8F6C\u8BA9\u7ED9\u672C\u7F51\u7AD9\u6240\u6709\uFF0C\u672C\u7F51\u7AD9\u6709\u6743\u5229\u5C31\u4EFB\u4F55\u4E3B\u4F53\u4FB5\u6743\u5355\u72EC\u63D0\u8D77\u8BC9\u8BBC\u5E76\u83B7\u5F97\u5168\u90E8\u8D54\u507F\u3002 \u672C\u534F\u8BAE\u6548\u529B\u53CA\u4E8E\u60A8\u5728\u672C\u7F51 \u7AD9\u53D1\u5E03\u7684\u4EFB\u4F55\u53D7\u8457\u4F5C\u6743\u6CD5\u4FDD\u62A4\u7684\u4F5C\u54C1\u5185\u5BB9\uFF0C \u65E0\u8BBA\u8BE5\u5185\u5BB9\u5F62\u6210\u4E8E\u672C\u534F\u8BAE\u7B7E\u8BA2\u524D\u8FD8\u662F\u672C\u534F\u8BAE\u7B7E\u8BA2\u540E\u3002 <p></p>  10.4 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u7AD9\u670D\u52A1\u8FC7\u7A0B\u4E2D\u4E0D\u5F97\u975E\u6CD5\u4F7F\u7528\u6216\u5904\u5206\u672C\u7F51\u7AD9\u6216\u4ED6\u4EBA\u7684\u77E5\u8BC6\u4EA7\u6743\u6743\u5229\u3002\u60A8\u4E0D\u5F97\u5C06\u5DF2\u53D1\u8868\u4E8E\u672C\u7F51\u7AD9\u7684\u4FE1\u606F\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u53D1\u5E03\u6216\u6388\u6743\u5176\u5B83\u7F51\u7AD9\uFF08\u53CA\u5A92\u4F53\uFF09\u4F7F\u7528\u3002 <p></p>  10.5 \u60A8\u767B\u9646\u672C\u7F51\u7AD9\u6216\u4F7F\u7528\u672C\u7F51\u7AD9\u63D0\u4F9B\u7684\u4EFB\u4F55\u670D\u52A1\u5747\u4E0D\u89C6\u4E3A\u6211\u4EEC\u5411\u60A8\u8F6C\u8BA9\u4EFB\u4F55\u77E5\u8BC6\u4EA7\u6743\u3002 <p></p>   \u2022\u5341\u4E00\u3001\u4FE1\u606F\u4FDD\u62A4 <p></p>   \u2022\u5341\u4E8C\u3001\u8BA1\u7B97 <p></p>   \u6240\u6709\u7684\u5A31\u4E50\u8BA1\u7B97\u7ED3\u679C\u90FD\u7ECF\u8FC7\u6211\u4EEC\u7684\u6838\u5B9E\uFF0C\u6240\u6709\u7684\u8BA1\u7B97\u65B9\u6CD5\u90FD\u5DF2\u7ECF\u5728\u7F51\u7AD9\u4E0A\u516C\u793A\uFF0C\u4F46\u662F\u6211\u4EEC\u4E0D\u80FD\u4FDD\u8BC1\u7F51\u7AD9\u7684\u4F7F\u7528\u4E0D\u4F1A\u53D7\u5230\u5E72\u6270\u6216\u6CA1\u6709\u8BEF\u5DEE\u3002 <p></p>   \u2022\u5341\u4E09\u3001\u8F6C\u8BA9 <p></p>   \u672C\u534F\u8BAE\u4E2D\u7EA6\u5B9A\u7684\u6743\u5229\u53CA\u4E49\u52A1\u540C\u6837\u7EA6\u675F\u4ECE\u8BE5\u6743\u5229\u4E49\u52A1\u4E2D\u83B7\u53D6\u5230\u5229\u76CA\u7684\u5404\u65B9\u7684\u53D7\u8BA9\u4EBA\uFF0C\u7EE7\u627F\u4EBA\uFF0C\u9057\u5631\u6267\u884C\u4EBA\u548C\u7BA1\u7406\u5458\u3002\u60A8\u4E0D\u5F97\u5728\u6211\u4EEC\u4E0D\u540C\u610F\u7684\u524D\u63D0\u4E0B\u8F6C\u8BA9\u7ED9\u4EFB\u4F55\u7B2C\u4E09\u4EBA\uFF0C\u4F46\u6211\u4EEC\u53EF\u968F\u65F6\u5C06\u6211\u4EEC\u5728\u672C\u534F\u8BAE\u4E2D\u7684\u6743\u5229\u548C\u4E49\u52A1\u8F6C\u8BA9\u7ED9\u4EFB\u4F55\u7B2C\u4E09\u4EBA\uFF0C\u5E76\u7ED9\u4E88\u60A8\u63D0\u524D30\u5929\u7684\u901A\u77E5\u3002 <p></p>   \u2022\u5341\u56DB\u3001\u53EF\u5206\u5272\u6027 <p></p>   \u5982\u672C\u534F\u8BAE\u4E2D\u7684\u4EFB\u4F55\u6761\u6B3E\u88AB\u4EFB\u4F55\u6709\u7BA1\u8F96\u6743\u7684\u6CD5\u9662\u8BA4\u5B9A\u4E3A\u4E0D\u53EF\u6267\u884C\u7684\uFF0C\u65E0\u6548\u7684\u6216\u975E\u6CD5\u7684\uFF0C\u5E76\u4E0D\u5F71\u54CD\u672C\u534F\u8BAE\u7684\u5176\u4F59\u6761\u6B3E\u7684\u6548\u529B\u3002 <p></p>   \u2022\u5341\u4E94\u3001\u975E\u4EE3\u7406\u5173\u7CFB <p></p>   \u672C\u534F\u8BAE\u4E2D\u7684\u4EFB\u4F55\u89C4\u5B9A\u5747\u4E0D\u53EF\u88AB\u8BA4\u4E3A\u521B\u9020\u4E86\u3001\u6697\u793A\u4E86\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\u5C06\u6211\u4EEC\u89C6\u4E3A\u60A8\u7684\u4EE3\u7406\u4EBA\u3001\u53D7\u6258\u4EBA\u6216\u5176\u4ED6\u4EE3\u8868\u4EBA\uFF0C\u672C\u534F\u8BAE\u6709\u5176\u4ED6\u89C4\u5B9A\u7684\u9664\u5916\u3002 <p></p>   \u2022\u5341\u516D\u3001\u5F03\u6743 <p></p>  \u6211\u4EEC\u6216\u60A8\u4EFB\u4F55\u4E00\u65B9\u5BF9\u8FFD\u7A76\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u8FDD\u7EA6\u8D23\u4EFB\u6216\u5176\u4ED6\u8D23\u4EFB\u7684\u5F03\u6743\u5E76\u4E0D\u80FD\u8BA4\u5B9A\u6216\u89E3\u91CA\u4E3A\u5BF9\u5176\u4ED6\u8FDD\u7EA6\u8D23\u4EFB\u7684\u5F03\u6743\uFF1B\u672A\u884C\u4F7F\u4EFB\u4F55\u6743\u5229\u6216\u6551\u6D4E\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u88AB\u89E3\u91CA\u4E3A\u5BF9\u8BE5\u7B49\u6743\u5229\u6216\u6551\u6D4E\u7684\u653E\u5F03\u3002 <p></p>    \u2022\u5341\u4E03\u3001\u6807\u9898 <p></p>    \u6240\u6709\u6807\u9898\u4EC5\u4F9B\u534F\u8BAE\u8868\u8FF0\u65B9\u4FBF\uFF0C\u5E76\u4E0D\u7528\u4E8E\u6269\u5927\u6216\u9650\u5236\u8BE5\u534F\u8BAE\u6761\u6B3E\u7684\u5185\u5BB9\u6216\u8303\u56F4\u3002 <p></p>   \u2022\u5341\u516B\u3001\u9002\u7528\u6CD5\u5F8B <p></p>   \u672C\u534F\u8BAE\u5168\u90E8\u5185\u5BB9\u5747\u4E3A\u6839\u636E\u4E2D\u56FD\u6CD5\u5F8B\u8BA2\u7ACB\u7684\u5408\u540C\uFF0C\u5176\u6210\u7ACB\u3001\u89E3\u91CA\u3001\u5185\u5BB9\u53CA\u6267\u884C\u5747\u9002\u7528\u4E2D\u56FD\u76F8\u5173\u6CD5\u5F8B\u89C4\u5B9A\uFF1B\u4EFB\u4F55\u56E0\u6216\u4E0E\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u670D\u52A1\u6709\u5173\u800C\u4EA7\u751F\u7684\u7D22\u8D54\u6216\u8BC9\u8BBC\uFF0C\u90FD\u5E94\u4F9D\u7167\u4E2D\u56FD\u7684\u6CD5\u5F8B\u8FDB\u884C\u7BA1\u8F96\u5E76\u52A0\u4EE5\u89E3\u91CA\u548C\u6267\u884C\u3002\u4E3A\u907F\u514D\u7591\u4E49\uFF0C\u8FD9\u4E00\u6761\u6B3E\u660E\u786E\u9002\u7528\u4E8E\u4EFB\u4F55\u9488\u5BF9\u6211\u4EEC\u7684\u4FB5\u6743\u7D22\u8D54\u3002\u4EFB\u4F55\u9488\u5BF9\u6211\u4EEC\u6216\u8005\u662F\u548C\u6211\u4EEC\u6709\u5173\u7684\u7D22\u8D54\u6216\u8BC9\u8BBC\u7684\u7BA1\u8F96\u6CD5\u9662\u6216\u8BC9\u8BBC\u5730\u5747\u5728\u4E2D\u56FD\u3002\u60A8\u65E0\u6761\u4EF6\u5730\u83B7\u5F97\u5728\u4E2D\u56FD\u6CD5\u9662\u8FDB\u884C\u8BC9\u8BBC\u548C\u4E0A\u8BC9\u7684\u6392\u4ED6\u6027\u7684\u7BA1\u8F96\u6743\u3002\u60A8\u4E5F\u65E0\u6761\u4EF6\u5730\u540C\u610F\u4E0E\u672C\u534F\u8BAE\u6B3E\u6709\u5173\u7684\u4E89\u8BAE\u6216\u95EE\u9898\u6216\u4EA7\u751F\u7684\u4EFB\u4F55\u7D22\u8D54\u8BF7\u6C42\u548C\u8BC9\u8BBC\u7684\u53D1\u751F\u5730\u6216\u6CD5\u9662\u5747\u6392\u4ED6\u6027\u5F97\u5728\u4E2D\u56FD\u3002\u4E0D\u65B9\u4FBF\u6CD5\u9662\u7684\u539F\u5219\u4E0D\u9002\u7528\u4E8E\u6839\u636E\u672C\u670D\u52A1\u6761\u6B3E\u7684\u9009\u62E9\u7684\u6CD5\u9662 <p></p>   \u2022\u4E8C\u5341\u3001\u534F\u8BAE\u7684\u751F\u6548\u548C\u89E3\u91CA <p></p>   20.1 \u672C\u534F\u8BAE\u4E8E\u60A8\u70B9\u51FB\u672C\u7F51\u7AD9\u6CE8\u518C\u9875\u9762\u7684\u540C\u610F\u6CE8\u518C\u5E76\u5B8C\u6210\u6CE8\u518C\u7A0B\u5E8F\u3001\u83B7\u5F97\u672C\u7F51\u7AD9\u8D26\u53F7\u548C\u5BC6\u7801\u65F6\u751F\u6548\uFF0C\u5BF9\u672C\u7F51\u7AD9\u548C\u60A8\u5747\u5177\u6709\u7EA6\u675F\u529B\u3002 <p></p>   20.2 \u672C\u534F\u8BAE\u7684\u6700\u7EC8\u89E3\u91CA\u6743\u5F52\u672C\u7F51\u7AD9\u6240\u6709\u3002 <p></p>   \u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u548C\u53CD\u6D17\u94B1\u653F\u7B56 <p></p>   \u2022\u4E00\u3001\u5BFC\u8A00 <p></p>  1.1\u6211\u4EEC\u4FDD\u8BC1\u5BA1\u614E\u9075\u5B88\u201C\u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u201D\u548C\u53CD\u6D17\u94B1\u76F8\u5173\u7684\u6CD5\u5F8B\u6CD5\u89C4\u4E14\u4E0D\u5F97\u6545\u610F\u8FDD\u53CD\u8BE5\u300A\u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u548C\u53CD\u6D17\u94B1\u653F\u7B56\u300B\u3002\u5728\u6211\u4EEC\u5408\u7406\u63A7\u5236\u7684\u8303\u56F4\u5185\u6211\u4EEC\u5C06\u91C7\u53D6\u5FC5\u8981\u7684\u63AA\u65BD\u548C\u6280\u672F\u4E3A\u60A8\u63D0\u4F9B\u5B89\u5168\u7684\u670D\u52A1\uFF0C\u5C3D\u53EF\u80FD\u4F7F\u60A8\u514D\u4E8E\u906D\u53D7\u72AF\u7F6A\u5ACC\u7591\u4EBA\u7684\u6D17\u94B1\u884C\u4E3A\u5E26\u6765\u7684\u635F\u5931\u3002 <p></p>  1.2\u6211\u4EEC\u7684\u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u548C\u53CD\u6D17\u94B1\u653F\u7B56\u662F\u4E00\u4E2A\u7EFC\u5408\u6027\u7684\u56FD\u9645\u653F\u7B56\u4F53\u7CFB\uFF0C\u5305\u62EC\u60A8\u96B6\u5C5E\u7684\u4E0D\u540C\u6CD5\u5F8B\u8F96\u533A\u7684\u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u548C\u53CD\u6D17\u94B1\u653F\u7B56\u3002\u6211\u4EEC\u5065\u5168\u5408\u89C4\u7684\u6846\u67B6\u786E\u4FDD\u6211\u4EEC\u5728\u672C\u5730\u548C\u5168\u7403\u5C42\u9762\u5747\u7B26\u5408\u76D1\u7BA1\u8981\u6C42\u548C\u76D1\u7BA1\u6C34\u5E73\uFF0C\u5E76\u786E\u4FDD\u672C\u7F51\u7AD9\u6301\u7EED\u6027\u8FD0\u884C\u3002 <p></p>   \u2022\u4E8C\u3001\u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u548C\u53CD\u6D17\u94B1\u653F\u7B56\u5982\u4E0B\uFF1A <p></p>   2.1\u9881\u5E03\u4E86\u89E3\u4F60\u7684\u5BA2\u6237\u548C\u53CD\u6D17\u94B1\u653F\u7B56\u5E76\u65F6\u65F6\u66F4\u65B0\u4EE5\u6EE1\u8DB3\u76F8\u5E94\u7684\u6CD5\u5F8B\u6CD5\u89C4\u89C4\u5B9A\u7684\u6807\u51C6\uFF1B <p></p>   2.2\u9881\u5E03\u548C\u66F4\u65B0\u8FD0\u884C\u672C\u7F51\u7AD9\u7684\u4E00\u4E9B\u6307\u5BFC\u539F\u5219\u548C\u89C4\u5219\uFF0C\u4E14\u6211\u4EEC\u7684\u5458\u5DE5\u5C06\u6309\u7167\u8BE5\u539F\u5219\u548C\u89C4\u5219\u7684\u6307\u5BFC\u63D0\u4F9B\u670D\u52A1\uFF1B <p></p>   2.3 \u8BBE\u8BA1\u5E76\u5B8C\u6210\u5185\u90E8\u76D1\u6D4B\u548C\u63A7\u5236\u5A31\u4E50\u7684\u7A0B\u5E8F\uFF0C\u5982\u4EE5\u4E25\u683C\u7684\u624B\u6BB5\u9A8C\u8BC1\u8EAB\u4EFD\uFF0C\u5B89\u6392\u7EC4\u5EFA\u4E13\u4E1A\u56E2\u961F\u4E13\u95E8\u8D1F\u8D23\u53CD\u6D17\u94B1\u5DE5\u4F5C\uFF1B <p></p>   2.4 \u91C7\u7528\u98CE\u9669\u9884\u9632\u7684\u65B9\u6CD5\u5BF9\u5BA2\u6237\u8FDB\u884C\u5C3D\u804C\u8C03\u67E5\u548C\u6301\u7EED\u7684\u76D1\u7763 <p></p>   2.5 \u5BA1\u67E5\u548C\u5B9A\u671F\u68C0\u67E5\u5DF2\u53D1\u751F\u7684\u5A31\u4E50 <p></p>   2.6 \u5411\u4E3B\u7BA1\u5F53\u5C40\u62A5\u544A\u53EF\u7591\u5A31\u4E50 <p></p>   2.7\u8EAB\u4EFD\u8BC1\u660E\u6587\u4EF6\u3001\u5730\u5740\u8BC1\u660E\u6587\u4EF6\u548C\u5A31\u4E50\u8BB0\u5F55\u7684\u8BC1\u660E\u6587\u4EF6\u5C06\u4F1A\u7EF4\u6301\u81F3\u5C11\u516D\u5E74\uFF0C\u5982\u88AB\u63D0\u4EA4\u7ED9\u76D1\u7BA1\u90E8\u95E8\uFF0C\u6055\u4E0D\u53E6\u884C\u901A\u77E5\u60A8\u3002 <p></p>   \u2022\u4E09\u3001\u76D1\u63A7\u5A31\u4E50 <p></p>    3.1 \u6211\u4EEC\u6839\u636E\u5B89\u5168\u6027\u548C\u5B9E\u9645\u5A31\u4E50\u60C5\u51B5\u65F6\u65F6\u8BBE\u7F6E\u548C\u8C03\u6574\u65E5\u5E38\u5A31\u4E50\u548C\u63D0\u5E01\u6700\u9AD8\u9650\u989D <p></p>   3.2\u5982\u679C\u5A31\u4E50\u9891\u7E41\u96C6\u4E2D\u53D1\u751F\u5728\u67D0\u4E2A\u6CE8\u518C\u7528\u6237\u6216\u5B58\u5728\u8D85\u4E4E\u5408\u7406\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u7684\u4E13\u4E1A\u56E2\u961F\u5C06\u8BC4\u4F30\u5E76\u51B3\u5B9A\u4ED6\u4EEC\u662F\u5426\u53EF\u7591 <p></p>   3.3\u6211\u4EEC\u51ED\u501F\u81EA\u8EAB\u7684\u5224\u65AD\u8BA4\u5B9A\u4E3A\u53EF\u7591\u5A31\u4E50\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u91C7\u53D6\u6682\u505C\u8BE5\u5A31\u4E50\u3001\u62D2\u7EDD\u8BE5\u5A31\u4E50\u7B49\u9650\u5236\u6027\u63AA\u65BD\uFF0C\u751A\u81F3\u5982\u679C\u53EF\u80FD\u5C06\u5C3D\u5FEB\u9006\u8F6C\u8BE5\u5A31\u4E50\uFF0C\u540C\u65F6\u5411\u4E3B\u7BA1\u90E8\u95E8\u62A5\u544A\uFF0C\u4F46\u4E0D\u4F1A\u901A\u77E5\u60A8 <p></p>   3.4\u6211\u4EEC\u4FDD\u7559\u62D2\u7EDD\u6765\u81EA\u4E8E\u4E0D\u7B26\u5408\u56FD\u9645\u53CD\u6D17\u94B1\u6807\u51C6\u8F96\u533A\u7684\u4EBA\u6216\u53EF\u88AB\u89C6\u4E3A\u653F\u6CBB\u516C\u4F17\u4EBA\u7269\u7684\u4EBA\u7684\u6CE8\u518C\u7533\u8BF7\uFF0C\u6211\u4EEC\u4FDD\u7559\u968F\u65F6\u6682\u505C\u6216\u7EC8\u6B62\u6839\u636E\u6211\u4EEC\u81EA\u8EAB\u5224\u65AD\u4E3A\u53EF\u7591\u5A31\u4E50\u7684\u5A31\u4E50\uFF0C\u4F46\u6211\u4EEC\u8FD9\u6837\u505A\u5E76\u4E0D\u8FDD\u53CD\u5BF9\u60A8\u7684\u4EFB\u4F55\u4E49\u52A1\u548C\u8D23\u4EFB\u3002\n    "), _defineProperty(_cn, "tradingGuideDesc", "\n    1\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u533A\u5757\u94FE\uFF1F<p></p> \u7B54\uFF1A\u533A\u5757\u94FE\u662F\u4E00\u79CD\u53BB\u4E2D\u5FC3\u5316\u7684\u3001\u70B9\u5BF9\u70B9\u4F20\u8F93\u3001\u5B89\u5168\u53EF\u4FE1\u7684\u6570\u636E\u5E93\u3002<p></p> 2\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u6BD4\u7279\u5E01\uFF1F<p></p> \u7B54\uFF1A\u6BD4\u7279\u5E01\u662F\u5168\u7403\u7B2C\u4E00\u79CD\u53BB\u4E2D\u5FC3\u5316\u7684\u8D27\u5E01\u3002<p></p> 3\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u548C\u6BD4\u7279\u5E01\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F<p></p> \u7B54\uFF1A\u6BD4\u7279\u5E01\u662F\u533A\u5757\u94FE\u7684\u7B2C\u4E00\u4E2A\u5E94\u7528\uFF0C\u533A\u5757\u94FE\u6280\u672F\u662F\u6BD4\u7279\u5E01\u7684\u5E95\u5C42\u6280\u672F\u3002<p></p> 4\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u662F\u600E\u4E48\u53D1\u884C\u7684\uFF1F<p></p> \u7B54\uFF1A\u6BD4\u7279\u5E01\u662F\u6CA1\u6709\u7279\u5B9A\u7684\u53D1\u884C\u673A\u6784\uFF0C\u4F9D\u9760\u4E00\u5957\u53BB\u4E2D\u5FC3\u5316\u7684\u53D1\u884C\u673A\u5236\uFF0C\u9010\u6B65\u5C06\u6BD4\u7279\u5E01\u53D1\u884C\u51FA\u53BB\u7684\uFF08\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210BTC\u4F5C\u4E3A\u5956\u52B1\uFF0C\u6FC0\u52B1\u77FF\u5DE5\u53C2\u4E0E\u8BB0\u8D26\uFF09\u3002<p></p> 5\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u600E\u4E48\u8F6C\u8D26\uFF1F<p></p> \u7B54\uFF1A\u5728\u6BD4\u7279\u5E01\u4EA4\u6613\u5E73\u53F0\u3001\u94B1\u5305\u3001\u5BA2\u6237\u7AEF\u8F93\u5165\u6BD4\u7279\u5E01\u5730\u5740\u3001\u63A5\u6536\u65B9\u5730\u5740\u3001\u8F6C\u8D26\u91D1\u989D\u548C\u8F6C\u8D26\u624B\u7EED\u8D39\uFF0C\u786E\u8BA4\u652F\u4ED8\u540E\u4EA4\u6613\u4FE1\u606F\u4F1A\u5728\u6BD4\u7279\u5E01\u7F51\u7EDC\u4E2D\u5168\u7F51\u5E7F\u64AD\uFF0C\u77FF\u5DE5\u6BCF\u969410\u5206\u949F\u4F1A\u5C06\u672A\u88AB\u8BB0\u8D26\u7684\u4EA4\u6613\u6253\u5305\u8FDB\u4E00\u4E2A\u533A\u5757\uFF0C\u5B8C\u6210\u4E00\u6B21\u786E\u8BA4\uFF0C\u901A\u5E38\u9700\u8981\u7ECF\u8FC76\u6B21\u786E\u8BA4\uFF0C\u786E\u4FDD\u4EA4\u6613\u8BB0\u5F55\u6CA1\u6709\u88AB\u7BE1\u6539\uFF0C\u4EA4\u6613\u624D\u7B97\u771F\u6B63\u5B8C\u6210\u3002<p></p> 6\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u548CQ\u5E01\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F<p></p> \u7B54\uFF1A\u6BD4\u7279\u5E01\u662F\u4E00\u79CD\u53BB\u4E2D\u5FC3\u5316\u7684\u6570\u5B57\u8D44\u4EA7\uFF0C\u6CA1\u6709\u53D1\u884C\u4E3B\u4F53\u3002Q\u5E01\u662F\u9760\u817E\u8BAF\u7684\u4FE1\u7528\u80CC\u4E66\u53D1\u884C\u7684\u7535\u5B50\u8D27\u5E01\uFF08\u7535\u5B50\u79EF\u5206\uFF09\uFF0C\u5176\u5B9E\u4E0D\u662F\u8D27\u5E01\uFF0CQ\u5E01\u9700\u8981\u4E2D\u5FC3\u5316\u7684\u53D1\u884C\u673A\u6784\u3002<p></p> 7\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u8F6C\u8D26\u8981\u4ED8\u591A\u5C11\u624B\u7EED\u8D39\uFF1F<p></p> \u7B54\uFF1A\u8F6C\u8D26\u624B\u7EED\u8D39\u4E00\u822C\u4E3A0.001-0.0015\u4E2A\u6BD4\u7279\u5E01\uFF0C\u591A\u4ED8\u624B\u7EED\u8D39\u53EF\u4EE5\u88AB\u66F4\u5FEB\u8BB0\u8D26\u54E6\u3002<p></p> 8\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u548CUSDT\u5730\u5740\u662F\u4EC0\u4E48\uFF1F<p></p> \u7B54\uFF1A\u662F\u4E00\u4E32\u7531\u5B57\u6BCD\u548C\u6570\u5B57\u7EC4\u6210\u7684\uFF0C26-34\u5B57\u7B26\u4E32\uFF0C\u6BD4\u7279\u5E01\u548CUSDT\u5730\u5740\u5C31\u662F\u4E2A\u4EBA\u7684\u6BD4\u7279\u5E01\u548CUSDT\u8D26\u6237\uFF0C\u76F8\u5F53\u4E8E\u4F60\u7684\u94F6\u884C\u5361\u53F7\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u901A\u8FC7\u4F60\u7684\u6BD4\u7279\u5E01\u5730\u5740\u7ED9\u4F60\u8F6C\u8D26\u6BD4\u7279\u5E01\u548CUSDT\uFF0C\u53EF\u4EE5\u4E0B\u8F7D\u4E00\u4E2A\u6BD4\u7279\u5E01\u548CUSDT\u94B1\u5305\u6216\u8005\u5728\u4EA4\u6613\u5E73\u53F0\u4E0A\u6CE8\u518C\u3002<p></p> 9\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u8282\u70B9\u662F\u4EC0\u4E48\uFF1F\u4EC0\u4E48\u662F\u5168\u8282\u70B9\uFF1F<p></p> \u7B54\uFF1A\u6BD4\u7279\u5E01\u662F\u4E00\u79CD\u70B9\u5BF9\u70B9\u7684\u7535\u5B50\u73B0\u91D1\u7CFB\u7EDF\uFF0C\u66F4\u76F4\u63A5\u5730\u8BF4\u662F\u8282\u70B9\u5BF9\u8282\u70B9\uFF0C\u6BCF\u7B14\u4EA4\u6613\u7531\u53D1\u8D77\u65B9\u5411\u5468\u56F4\u7684\u8282\u70B9\u8FDB\u884C\u5E7F\u64AD\uFF0C\u6269\u6563\u81F3\u5168\u7F51\uFF0C\u6BCF\u4E2A\u6BD4\u7279\u5E01\u94B1\u5305\u90FD\u662F\u4E00\u4E2A\u8282\u70B9\u3002\u62E5\u6709\u5B8C\u6574\u533A\u5757\u94FE\u8D26\u672C\u7684\u8282\u70B9\u53EB\u505A\u5168\u8282\u70B9\uFF0C\u8D1F\u8D23\u6BD4\u7279\u5E01\u4EA4\u6613\u7684\u5E7F\u64AD\u548C\u9A8C\u8BC1\uFF0C\u6316\u77FF\u7684\u8282\u70B9\u9A8C\u8BC1\u8BE5\u4EA4\u6613\u6B63\u786E\u540E\u4F1A\u8BB0\u5F55\u81F3\u533A\u5757\u94FE\u8D26\u672C\u3002<p></p> 10\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u7684\u6570\u5B57\u7B7E\u540D\u662F\u4EC0\u4E48\uFF1F<p></p> \u7B54\uFF1A\u53EA\u6709\u6BD4\u7279\u5E01\u8F6C\u8D26\u7684\u8F6C\u51FA\u65B9\u751F\u6210\u7684\u4E00\u6BB5\u9632\u4F2A\u9020\u7684\u5B57\u7B26\u4E32\u3002\u901A\u8FC7\u9A8C\u8BC1\u8BE5\u5B57\u7B26\u4E32\uFF0C\u4E00\u65B9\u9762\u8BC1\u660E\u4EA4\u6613\u662F\u8F6C\u51FA\u65B9\u672C\u4EBA\u53D1\u8D77\u7684\uFF0C\u53E6\u4E00\u65B9\u9762\u8BC1\u660E\u4EA4\u6613\u4FE1\u606F\u5728\u4F20\u8F93\u4E2D\u6CA1\u6709\u88AB\u66F4\u6539\u3002<p></p> 11\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u77FF\u5DE5\uFF1F\u77FF\u5DE5\u4E3B\u8981\u5DE5\u4F5C\u662F\u4EC0\u4E48\uFF1F<p></p> \u7B54\uFF1A\u77FF\u5DE5\u76F8\u5F53\u4E8E\u8BB0\u8D26\u5458\uFF0C\u4E3B\u8981\u5DE5\u4F5C\u662F\u4EA4\u6613\u786E\u8BA4\uFF0C\u6570\u636E\u6253\u5305\u3002<p></p> 12\uFF0C\u95EE\uFF1A\u91CF\u5316\u4EA4\u6613\u662F\u4EC0\u4E48\uFF1F<p></p> \u7B54\uFF1A\u5C31\u662F\u81EA\u52A8\u5316\u4EA4\u6613\u3002\u4EE5\u5148\u8FDB\u7684\u6570\u5B66\u6A21\u578B\u66FF\u4EE3\u4EBA\u4E3A\u7684\u4E3B\u89C2\u5224\u65AD\uFF0C\u907F\u514D\u6295\u8D44\u8005\u505A\u51FA\u975E\u7406\u6027\u7684\u6295\u8D44\u51B3\u7B56\u3002\u5305\u62EC\u8DE8\u5E73\u53F0\u642C\u7816\u3001\u8D8B\u52BF\u4EA4\u6613\uFF0C\u5BF9\u51B2\u7B49\u3002<p></p> 13\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u8DE8\u5E73\u53F0\u642C\u7816\uFF1F<p></p> \u7B54\uFF1A\u5F53\u4E0D\u540C\u76EE\u6807\u5E73\u53F0\u4EF7\u5DEE\u8FBE\u5230\u4E00\u5B9A\u91D1\u989D\uFF0C\u4EF7\u9AD8\u5E73\u53F0\u5356\u51FA\u3001\u4EF7\u4F4E\u7684\u5E73\u53F0\u4E70\u5165\u3002<p></p> 14\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u5BF9\u51B2\uFF1F<p></p> \u7B54\uFF1A\u540C\u65F6\u8FDB\u884C\u4E24\u7B14\u4E0E\u884C\u60C5\u76F8\u5173\u3001\u4E70\u5356\u65B9\u5411\u76F8\u53CD\u3001\u6570\u91CF\u76F8\u5F53\u3001\u76C8\u4E8F\u76F8\u62B5\u7684\u4EA4\u6613\u3002<p></p> 15\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u53BB\u4E2D\u5FC3\u5316\u4EA4\u6613\u5E73\u53F0\uFF1F<p></p> \u7B54\uFF1A\u4E0D\u7528\u6CE8\u518C\u8D26\u6237\uFF0C\u4F7F\u7528\u4E2A\u4EBA\u6570\u5B57\u8D44\u4EA7\u8D26\u6237\u5373\u53EF\u53C2\u4E0E\u4EA4\u6613\uFF0C\u6BCF\u7B14\u4EA4\u6613\u90FD\u901A\u8FC7\u533A\u5757\u94FE\u8FDB\u884C\uFF0C\u9700\u7B49\u5F85\u533A\u5757\u94FE\u786E\u8BA4\u624D\u7B97\u4EA4\u6613\u6210\u529F\u3002\u5E73\u53F0\u4E0D\u8D1F\u8D23\u4FDD\u7BA1\u5BA2\u6237\u7684\u8D44\u4EA7\u548C\u79C1\u94A5\u7B49\uFF0C\u907F\u514D\u4EA4\u6613\u5E73\u53F0\u7684\u9053\u5FB7\u98CE\u9669\uFF0C\u8981\u5343\u4E07\u4FDD\u7BA1\u597D\u81EA\u5DF1\u7684\u79C1\u94A5\u3002<p></p> 16\uFF0C\u95EE\uFF1A\u5E01\u5E01\u4EA4\u6613\u662F\u4EC0\u4E48\uFF1F<p></p> \u7B54\uFF1A\u5C31\u662F\u4E00\u79CD\u52A0\u5BC6\u8D27\u5E01\u5151\u6362\u53E6\u4E00\u79CD\u52A0\u5BC6\u8D27\u5E01\uFF0C\u4E0D\u540C\u5E01\u79CD\u6309\u7167\u5404\u81EA\u65F6\u65F6\u7684\u4EF7\u683C\u8FDB\u884C\u4EA4\u6613\u3002<p></p> 17\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u94B1\u5305\uFF1F<p></p> \u7B54\uFF1A\u5B58\u50A8\u548C\u4F7F\u7528\u6570\u5B57\u8D27\u5E01\u7684\u5DE5\u5177\u3002\u5305\u62EC\u6BD4\u7279\u5E01\u5730\u5740\uFF08\u7C7B\u4F3C\u4E8E\u94F6\u884C\u5361\u8D26\u53F7\uFF09\u548C\u79C1\u94A5\uFF08\u7C7B\u4F3C\u4E8E\u94F6\u884C\u5361\u5BC6\u7801\uFF09\uFF0C\u6838\u5FC3\u529F\u80FD\u5C31\u662F\u4FDD\u62A4\u5BA2\u6237\u7684\u79C1\u94A5\u3002<p></p> 18\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u94B1\u5305\u7684\u79CD\u7C7B\u6709\u54EA\u4E9B\uFF1F<p></p> \u7B54\uFF1APC\u94B1\u5305\u3001\u624B\u673A\u94B1\u5305\u3001\u7F51\u9875\u94B1\u5305\u3001\u8111\u94B1\u5305\u548C\u7EB8\u94B1\u5305\u3002<p></p> 19\uFF0C\u95EE\uFF1A\u6BD4\u7279\u5E01\u94B1\u5305\u6309\u7167\u79C1\u94A5\u7684\u5B58\u50A8\u65B9\u5F0F\u5206\u4E3A\u51E0\u79CD\uFF1F<p></p> \u7B54\uFF1A\u51B7\u94B1\u5305\uFF0C\u7F51\u7EDC\u4E0D\u80FD\u8BBF\u95EE\u5230\u4F60\u79C1\u94A5\u7684\u94B1\u5305\uFF0C\u907F\u514D\u9ED1\u5BA2\u76D7\u53D6\u79C1\u94A5\u7684\u98CE\u9669\uFF0C\u76F8\u5BF9\u4E8E\u5B89\u5168\u3002\u70ED\u94B1\u5305\uFF0C\u4E92\u8054\u7F51\u80FD\u591F\u8BBF\u95EE\u5230\u4F60\u79C1\u94A5\u7684\u94B1\u5305\uFF0C\u662F\u5728\u7EBF\u94B1\u5305\uFF0C\u8F6C\u8D26\u6548\u7387\u9AD8\uFF0C\u4F46\u4E0D\u90A3\u4E48\u5B89\u5168\u3002<p></p> 20\uFF0C\u95EE\uFF1A\u5168\u8282\u70B9\u94B1\u5305\u3001\u8F7B\u94B1\u5305\u548C\u4E2D\u5FC3\u5316\u94B1\u5305\u662F\u4EC0\u4E48\uFF1F<p></p> \u7B54\uFF1A\u5168\u8282\u70B9\u94B1\u5305\u662F\u6838\u5FC3\u94B1\u5305\uFF0C\u9700\u8981\u540C\u6B65\u533A\u5757\u94FE\u4E0A\u6240\u6709\u6570\u636E\uFF0C\u5360\u7528\u5185\u5B58\u8F83\u5927\uFF0C\u53EF\u4EE5\u5B8C\u5168\u5B9E\u73B0\u53BB\u4E2D\u5FC3\u5316\u3002\u8F7B\u94B1\u5305\uFF1A\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u6790\u540E\uFF0C\u4EC5\u540C\u6B65\u5E76\u5B58\u50A8\u4E0E\u81EA\u8EAB\u76F8\u5173\u7684\u6570\u636E\uFF0C\u8FD0\u884C\u65F6\u4F9D\u8D56\u4E8E\u6BD4\u7279\u5E01\u7F51\u7EDC\u4E0A\u7684\u5176\u4ED6\u5168\u8282\u70B9\uFF08Bither/Electrum\uFF09\u3002\u4E2D\u5FC3\u5316\u94B1\u5305\uFF1A\u4E0D\u4F9D\u8D56\u6BD4\u7279\u5E01\u7F51\u7EDC\uFF0C\u6240\u6709\u6570\u636E\u5747\u4ECE\u81EA\u5DF1\u7684\u4E2D\u5FC3\u5316\u670D\u52A1\u5668\u83B7\u5F97\u3002\uFF08\u4EA4\u6613\u6548\u7387\u5F88\u9AD8\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u5230\u8D26\uFF09\u4EA4\u6613\u5E73\u53F0\u6CE8\u518C\u7684\u5C31\u662F\u4E2D\u5FC3\u5316\u94B1\u5305\u3002<p></p> 21\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u8BB0\u5F55\u54EA\u4E9B\u4FE1\u606F\uFF1F<p></p> \u7B54\uFF1A\u533A\u5757\u5934\uFF08\u6BCF\u4E2A\u533A\u5757\u4E2D\u524D80\u4E2A\u5B57\u8282\uFF09\u3001\u4EA4\u6613\u8BE6\u60C5\uFF08\u8BE6\u7EC6\u8BB0\u8F7D\u4E86\u6BCF\u7B14\u4EA4\u6613\u7684\u8F6C\u51FA\u65B9\u3001\u6536\u5165\u65B9\u3001\u91D1\u989D\u53CA\u8F6C\u51FA\u65B9\u7684\u6570\u5B57\u7B7E\u540D\uFF0C\u662F\u6BCF\u4E2A\u533A\u5757\u7684\u4E3B\u8981\u5185\u5BB9\uFF09\u3001\u4EA4\u6613\u8BA1\u6570\u5668\uFF08\u8868\u8FF0\u6BCF\u4E2A\u533A\u5757\u4E2D\u5305\u542B\u4EA4\u6613\u7684\u6570\u91CF\uFF09\u3001\u533A\u5757\u5927\u5C0F\uFF08\u8868\u793A\u6BCF\u4E2A\u533A\u5757\u6570\u636E\u7684\u5927\u5C0F\uFF09\u3002<p></p> 22\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u6309\u51C6\u5165\u673A\u5236\u5206\u4E3A\u54EA\u51E0\u7C7B\uFF1F<p></p> \u7B54\uFF1A\u516C\u6709\u94FE\uFF1A\u516C\u5F00\u900F\u660E\uFF0C\u4EFB\u4F55\u4E2A\u4F53\u6216\u8005\u56E2\u4F53\u90FD\u53EF\u4EE5\u5728\u516C\u6709\u94FE\u4E0A\u53D1\u9001\u4EA4\u6613\uFF0C\u4EA4\u6613\u80FD\u591F\u83B7\u5F97\u6709\u6548\u786E\u8BA4\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u6709\u7ADE\u4E89\u8BB0\u8D26\u6743\uFF1B<p></p> \u79C1\u6709\u94FE\uFF1A\u5B8C\u5168\u5C01\u95ED\uFF0C\u4EC5\u91C7\u7528\u533A\u5757\u94FE\u6280\u672F\u8FDB\u884C\u8BB0\u8D26\uFF0C\u8BB0\u8D26\u6743\u4E0D\u516C\u5F00\uFF0C\u53EA\u8BB0\u5F55\u5185\u90E8\u7684\u4EA4\u6613\uFF0C\u7531\u516C\u53F8\u6216\u4E2A\u4EBA\u72EC\u4EAB\uFF1B<p></p> \u8054\u76DF\u94FE\uFF1A\u534A\u516C\u5F00\uFF0C\u7FA4\u4F53\u6216\u7EC4\u7EC7\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u9700\u8981\u9884\u5148\u6307\u5B9A\u51E0\u4E2A\u8282\u70B9\u4E3A\u8BB0\u8D26\u4EBA\uFF0C\u6BCF\u4E2A\u533A\u5757\u751F\u6210\u7531\u9884\u9009\u8BB0\u8D26\u4EBA\u5171\u540C\u51B3\u5B9A\uFF0C\u5176\u4ED6\u8282\u70B9\u53EF\u4EE5\u4EA4\u6613\uFF0C\u4F46\u6CA1\u6709\u8BB0\u8D26\u6743\u3002<p></p> 23\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u6709\u54EA\u4E9B\u7279\u6027\uFF1F<p></p> \u7B54\uFF1A\u53BB\u4E2D\u5FC3\u5316\u3001\u4E0D\u53EF\u7BE1\u6539\u3001\u5171\u8BC6\u673A\u5236\u3001\u5206\u5E03\u5F0F\u6570\u636E\u5B58\u50A8\u3001\u70B9\u5BF9\u70B9\u4EA4\u6613\u3002<p></p> 24\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u6280\u672F\u539F\u7406\u662F\u4EC0\u4E48\uFF1F<p></p> \u7B54\uFF1A\u5171\u8BC6\u673A\u5236\uFF0C\u4FDD\u8BC1\u6BCF\u7B14\u4EA4\u6613\u5728\u6240\u6709\u8BB0\u8D26\u8282\u70B9\u4E0A\u7684\u4E00\u81F4\u6027\uFF0C\u8BA9\u5168\u7F51\u8FBE\u6210\u5171\u8BC6\u3002<p></p> 25\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u9879\u76EE\u5206\u4E3A\u51E0\u7C7B\uFF1F<p></p> \u7B54\uFF1A\u5E01\u7C7B\u3001\u5E73\u53F0\u7C7B\u3001\u5E94\u7528\u7C7B\u3001\u8D44\u4EA7\u4EE3\u5E01\u5316\u3002<p></p> 26\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u7684\u7F3A\u70B9\u6709\u54EA\u4E9B\uFF1F<p></p> \u7B54\uFF1A\u65E0\u9690\u79C1\u6027\u3001\u5B89\u5168\u6027\u95EE\u9898\u3001\u6570\u636E\u786E\u8BA4\u5EF6\u8FDF\u6027\u3001\u76D1\u7BA1\u7B49\u3002<p></p> 27\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u53BB\u4E2D\u5FC3\u5316\uFF1F<p></p> \u7B54\uFF1A\u5728\u6574\u4E2A\u7F51\u7EDC\u4E2D\u6CA1\u6709\u4E2D\u5FC3\u5316\u7684\u786C\u4EF6\u6216\u8005\u7BA1\u7406\u673A\u6784\uFF0C\u4EFB\u610F\u8282\u70B9\u7684\u6743\u5229\u548C\u4E49\u52A1\u90FD\u662F\u5747\u7B49\u7684\uFF0C\u4E14\u4EFB\u610F\u8282\u70B9\u635F\u574F\u6216\u8005\u5931\u53BB\u90FD\u4E0D\u4F1A\u5F71\u54CD\u6574\u4E2A\u7CFB\u7EDF\u7684\u8FD0\u4F5C\u3002<p></p> 28\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u6316\u77FF\uFF1F<p></p> \u7B54\uFF1A\u5C06\u4E00\u6BB5\u65F6\u95F4\u5185\u6BD4\u7279\u5E01\u7CFB\u7EDF\u4E2D\u53D1\u751F\u7684\u4EA4\u6613\u8FDB\u884C\u786E\u8BA4\uFF0C\u5E76\u8BB0\u5F55\u5728\u533A\u5757\u94FE\u4E0A\u5F62\u6210\u65B0\u533A\u5757\u7684\u8FC7\u7A0B\u3002<p></p> 29\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u6570\u5B57\u8D27\u5E01\uFF1F<p></p> \u7B54\uFF1A\u6570\u5B57\u8D27\u5E01\u76F8\u5F53\u4E8E\u865A\u62DF\u5E01=\u8BA1\u7B97\u673A\u5BC6\u7801\u5B66+\u5206\u5E03\u5F0FP2P\u7F51\u7EDC+\u7ECF\u6D4E\u5B66+\u793E\u4F1A\u5B66\u7684\u4EA7\u7269\u3002<p></p> 30\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u7B2C\u4E09\u65B9\u94B1\u5305\uFF1F<p></p> \u7B54\uFF1A\u662F\u901A\u8FC7\u7B2C\u4E09\u65B9\u4ECB\u5165\u652F\u4ED8\u7684\uFF08\u53EA\u63D0\u4F9B\u652F\u4ED8\u5E73\u53F0\uFF0C\u4E0D\u63D0\u4F9B\u50A8\u5B58\u6570\u636E\uFF09\uFF0C\u4F8B\u5982\u901A\u5E38\u7528\u7684IMTOKEN\u94B1\u5305\u3002<p></p> 31\uFF0C\u95EE\uFF1A\u533A\u5757\u94FE\u4E3B\u8981\u5E94\u7528\u5728\u54EA\u91CC\uFF1F<p></p> \u7B54\uFF1A\u6570\u5B57\u8D27\u5E01\u3001\u6CDB\u91D1\u878D\u5E94\u7528\uFF08\u8DE8\u5883\u652F\u4ED8\u3001\u6570\u5B57\u7968\u636E\u3001\u5F81\u4FE1\u7BA1\u7406\u3001\u8D44\u4EA7\u8BC1\u5238\u5316\u3001\u4F9B\u5E94\u94FE\u91D1\u878D\u3001\u4FDD\u9669\u4E1A\u52A1\uFF09\u3001\u533A\u5757\u94FE + \u884C\u4E1A\u5E94\u7528\uFF08\u533A\u5757\u94FE + \u533B\u7597\u3001\u533A\u5757\u94FE + \u7269\u8054\u7F51\u3001\u533A\u5757\u94FE + IP\u7248\u6743&amp;\u6587\u5316\u5A31\u4E50\u3001\u533A\u5757\u94FE + \u516C\u5171\u670D\u52A1&amp;\u6559\u80B2\uFF09\u3002<p></p> 32\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u4EA4\u6613\u5BF9\uFF1F<p></p> \u7B54\uFF1A\u4EA4\u6613\u5BF9\u662F\u75312\u79CD\u4E0D\u540C\u7684\u6570\u5B57\u8D27\u5E01\u6784\u6210\u7684\uFF0C\u5F53\u4F60\u62E5\u6709\u4EA4\u6613\u5BF9\u4E2D\u7684\u5176\u4E2D\u4E00\u79CD\u6570\u5B57\u8D27\u5E01\u65F6\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u4EA4\u6613\u5BF9\u6765\u4EA4\u6613\u53E6\u5916\u4E00\u79CD\u6570\u5B57\u8D27\u5E01\u3002<p></p> 33\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u5E02\u4EF7\u4EA4\u6613\uFF1F<p></p> \u7B54\uFF1A\u5373\u4E0D\u8BBE\u5B9A\u4E70\u5165/\u5356\u51FA\u4EF7\u683C\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u53CA\u65F6\u6210\u4EA4\uFF0C\u53EA\u9700\u8F93\u5165\u60F3\u4E70\u5165\u7684\u603B\u6570\u91CF\u5373\u53EF\u3002\u5E02\u4EF7\u4EA4\u6613\u5C31\u662F\u73B0\u5728\u5E02\u573A\u4E0A\u662F\u4EC0\u4E48\u4EF7\u683C\uFF0C\u4F60\u5C31\u76F4\u63A5\u4EE5\u4EC0\u4E48\u4EF7\u683C\u8D2D\u4E70\u5C31\u53EB\u505A\u5E02\u4EF7\u8D2D\u4E70\u3002<p></p> 34\uFF0C\u95EE\uFF1A\u4EC0\u4E48\u662F\u9650\u4EF7\u4EA4\u6613\uFF1F<p></p> \u7B54\uFF1A\u9650\u4EF7\u4EA4\u6613\u5373\u6302\u5355\u4EA4\u6613\uFF0C\u60A8\u53EF\u4EE5\u81EA\u5DF1\u8BBE\u5B9A\u4E70\u5165\u4EF7\u683C\uFF0C\u7B49\u5E02\u573A\u4EF7\u683C\u6CE2\u52A8\u5230\u60A8\u8BBE\u5B9A\u7684\u4EF7\u683C\u65F6\u5373\u53EF\u6210\u4EA4\u3002\u6BD4\u5982\u8BF4\u4F60\u60F3\u4E701\u679A\u6BD4\u7279\u5E01\uFF0C\u4F60\u770B\u5230\u5F53\u524D\u7684\u62A5\u4EF7\u662F10000\u5143\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F60\u89C9\u5F97\u6709\u70B9\u9AD8\uFF0C\u4F60\u60F3\u57289900\u5143\u65F6\u4E70 \u5165\uFF0C \u4F60\u5C31\u53EF\u4EE5\u76F4\u63A5\u6302\u4E00\u4E2A9900\u5143\u7684\u8D2D\u4E70\u8BA2\u5355\uFF0C\u5982\u679C\u6709\u4EBA\u4EE5\u8FD9\u4E2A\u4EF7\u683C\u5356\u51FA\uFF0C\u90A3\u4E48\u4F60\u8FD9\u7B14\u8D2D\u4E70\u8BA2\u5355\u5C31\u4EA4\u6613\u6210\u529F\u4E86\u3002\u8FD9\u4E2A\u65F6\u5019\u4F60\u5C31\u83B7\u5F971\u679A\u6BD4\u7279\u5E01\u5230\u4F60\u7684\u8D26\u6237\u4E86\u3002<p></p> 35\uFF0C\u95EE\uFF1A\u5E38\u89C1\u7684\u5E01\u79CD\u6709\u54EA\u4E9B\uFF1F<p></p> \u7B54\uFF1A\u5E38\u89C1\u5E01\u79CD\uFF1AUAS(\u5AE9\u6A21\u5E01) MWC(\u62DF\u9525\u5E01) BTC\uFF08\u6BD4\u7279\u5E01\uFF09ETH\uFF08\u4EE5\u592A\u574A\uFF09XRP\uFF08\u745E\u6CE2\u5E01\uFF09BCH\uFF08\u6BD4\u7279\u73B0\u91D1\uFF09LTC\uFF08\u83B1\u7279\u5E01\uFF09ADA\uFF08\u827E\u8FBE\u5E01\uFF09XLM\uFF08\u6052\u661F\u5E01\uFF09NEO\uFF08\u5C0F\u8681\uFF09XMR\uFF08\u95E8\u7F57\u5E01\uFF09DASH\uFF08\u8FBE\u4E16\u5E01\uFF09ETC\uFF08\u4EE5\u592A\u7ECF\u5178\uFF09USDT\uFF08\u6CF0\u8FBE\u5E01\uFF09QTUM\uFF08\u91CF\u5B50\u94FE\uFF09EOS\uFF08\u67DA\u5B50\uFF09TRX\uFF08\u6CE2\u573A\uFF09BNB\uFF08\u5E01\u5B89\u5E01\uFF09ZEC\uFF08\u5927\u96F6\u5E01) <p></p>\n    "), _cn);var _default =








cn;exports.default = _default;

/***/ }),

/***/ 41:
/*!******************************************!*\
  !*** /Users/suan/Desktop/DBS/lang/en.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var en = (_en = {
  language: "Language",
  welcome: "Welcome",
  welcomeRegister: "Welcome Register",
  property: "Property",
  order: "Order",
  login: "Login",
  register: "Register",
  forget: "Retrieve Password",
  phoneLogin: "Phone Login",
  accountLogin: "Account Login",
  submit: "Submit",
  qq: 'QQ',
  appDownload: 'APP Download',
  tradeZone: 'Trade Zone',
  nickname: 'Nickname',
  validCode: 'ValidCode',
  contact: 'Contact',
  account: 'Account',
  password: 'Password',
  repassword: 'Confirm Password',
  getVerificationCode: 'Get Code',
  recommendationCode: 'Recommendation Code',
  nicknamePlaceholder: 'Please enter a nickanme',
  contactPlaceholder: 'Please enter a phone or email',
  phonePlaceholder: 'Please enter a phone',
  validCodePlaceholder: 'Please enter a validate code',
  accountPlaceholder: 'Please enter an account number',
  passwordPlaceholder: 'Please enter an account password',
  repasswordPlaceholder: 'Please confirm an account password',
  qqPlaceholder: 'Please enter a qq number',
  recommendationCodePlaceholder: 'Please enter a recommendation coded',
  registeredAccount: 'Registered Account',
  loginAccount: 'To Login',
  forgotPassword: 'Forgot your password?' }, _defineProperty(_en, "phoneLogin",
'Phone Login'), _defineProperty(_en, "nicknameEmptyTips",
'Please enter a nickanme'), _defineProperty(_en, "contactEmptyTips",
'Please enter a phone or email'), _defineProperty(_en, "phoneEmptyTips",
'Please enter a phone'), _defineProperty(_en, "validCodeEmptyTips",
'Please enter a validate code'), _defineProperty(_en, "accountEmptyTips",
'Please enter an account number'), _defineProperty(_en, "passwordEmptyTips",
'Please enter an account password'), _defineProperty(_en, "repasswordEmptyTips",
'Please confirm an account password'), _defineProperty(_en, "passwordNoMatch",
'Entered passwords differ'), _defineProperty(_en, "qqEmptyTips",
'Please enter a qq number'), _defineProperty(_en, "recommendationEmptyTips",
'Please enter a recommendation coded'), _defineProperty(_en, "noMatchTips",
'Chinese is not allowed'), _defineProperty(_en, "errorTips",
'There is an invalid information, please resubmit after confirmation'), _defineProperty(_en, "agreement",
'I have read and agreed. <a href="#/footlink">Terms of Service</a><a href="#/footlink">protection</a>'), _defineProperty(_en, "notLoginTips",
'You Are Not Logged In'), _defineProperty(_en, "aboutus",
'Aboutus'), _defineProperty(_en, "terms",
'Terms'), _defineProperty(_en, "tradingRules",
'TradingRules'), _defineProperty(_en, "tradingGuide",
'TradingGuide'), _defineProperty(_en, "announcement",
'Announcement'), _defineProperty(_en, "findCurrency",
'Find Currency'), _defineProperty(_en, "currency",
'Currency'), _defineProperty(_en, "latestPrice",
'Latest Price'), _defineProperty(_en, "priceRatio",
'Price Ratio'), _defineProperty(_en, "latestDeal",
'Latest Deal'), _defineProperty(_en, "direction",
'Direction'), _defineProperty(_en, "price",
'Price'), _defineProperty(_en, "lot",
'Lot'), _defineProperty(_en, "leftmoney",
'USDT is currently available'), _defineProperty(_en, "latestPrice",
'Latest Price'), _defineProperty(_en, "highestPrice",
'highest Price'), _defineProperty(_en, "lowestPrice",
'Lowest Price'), _defineProperty(_en, "priceRatio",
'Price Ratio'), _defineProperty(_en, "volume24h",
'24H Volume'), _defineProperty(_en, "turnover24h",
'24H Turnover'), _defineProperty(_en, "buy",
'Buy'), _defineProperty(_en, "sell",
'Sell'), _defineProperty(_en, "loss",
'Loss'), _defineProperty(_en, "profit",
'Profit'), _defineProperty(_en, "buyingLot",
'Buying Lots'), _defineProperty(_en, "sellingLot",
'Selling Lots'), _defineProperty(_en, "handlingFee",
'Handling Fee'), _defineProperty(_en, "margin",
'Margin'), _defineProperty(_en, "max",
'Max'), _defineProperty(_en, "min",
'Min'), _defineProperty(_en, "currencyInformation",
'Currency Information'), _defineProperty(_en, "srice",
'Srice'), _defineProperty(_en, "quantity",
'Quantity'), _defineProperty(_en, "withdrawBtn",
'Withdraw'), _defineProperty(_en, "withdraw",
'Withdraw'), _defineProperty(_en, "extractionApply",
'Extraction Apply'), _defineProperty(_en, "extractingRecords",
'Extracting Records'), _defineProperty(_en, "rechargeRecord",
'Recharge Record'), _defineProperty(_en, "walletDirectCharge",
'Wallet Direct Charge'), _defineProperty(_en, "usdtMargin",
'USDT Margin'), _defineProperty(_en, "bankAccountNumber",
'Bank Account Number'), _defineProperty(_en, "withdrawalAmount",
'Withdrawal Amount'), _defineProperty(_en, "customerName",
'Customer Name'), _defineProperty(_en, "walletAddress",
'Wallet Address'), _defineProperty(_en, "bankName",
'Bank Name'), _defineProperty(_en, "bankAddress",
'Bank Address'), _defineProperty(_en, "bankCode",
'BankCode'), _defineProperty(_en, "bankAccountNumberEmpty",
'Please enter a bank number'), _defineProperty(_en, "customerNameEmpty",
'Please enter a name'), _defineProperty(_en, "walletAddressEmpty",
'Please enter a wallet address'), _defineProperty(_en, "bankNameEmpty",
'Please enter a bank name'), _defineProperty(_en, "bankAddressEmpty",
'Please enter a bank address'), _defineProperty(_en, "specialReminder",
'Special Reminder'), _defineProperty(_en, "specialReminderText",
'The user who does not hold the USDT wallet address, please fill in the bank details'), _defineProperty(_en, "orderNumber",
'Order number'), _defineProperty(_en, "orderTime",
'Order time'), _defineProperty(_en, "quantityExtracted",
'Quantity extracted'), _defineProperty(_en, "gifts",
'Gifts'), _defineProperty(_en, "orderStatus",
'Order Status'), _defineProperty(_en, "processingTime",
'Processing Time'), _defineProperty(_en, "purchaseQuantity",
'Purchase Quantity'), _defineProperty(_en, "chooseChannel",
'Choose Channel'), _defineProperty(_en, "myOrder",
'My Order'), _defineProperty(_en, "uploadVouchers",
'Upload Vouchers'), _defineProperty(_en, "transactionInformation",
'Transaction Information'), _defineProperty(_en, "number",
'Number'), _defineProperty(_en, "selectionChannel",
'Selection Channel'), _defineProperty(_en, "orderStatus",
'Order Status'), _defineProperty(_en, "operation",
'Operation'), _defineProperty(_en, "positionOrder",
'Position Order'), _defineProperty(_en, "historicalOrder",
'Historical Order'), _defineProperty(_en, "type",
'Type'), _defineProperty(_en, "purchasePrice",
'Purchase Price'), _defineProperty(_en, "profitAndLoss",
'Profit And Loss'), _defineProperty(_en, "totalProfitLoss",
'Total Profit And Loss'), _defineProperty(_en, "totalFee",
'Total Fee'), _defineProperty(_en, "totalBill",
'Total bill'), _defineProperty(_en, "Variety",
'Variety'), _defineProperty(_en, "Bitcoin",
'Bitcoin'), _defineProperty(_en, "Ethernet",
'Ethernet'), _defineProperty(_en, "Ethereum",
'Ethereum'), _defineProperty(_en, "Litecoin",
'Litecoin'), _defineProperty(_en, "RippleCoin",
'RippleCoin'), _defineProperty(_en, "EOS",
'EOS'), _defineProperty(_en, "ZEC",
'ZEC'), _defineProperty(_en, "Traget",
'Traget'), _defineProperty(_en, "Margin",
'Margin'), _defineProperty(_en, "ContractUnitPerLot",
'Contract Unit Per Lot'), _defineProperty(_en, "Spread",
'Spread(Unit：USDT)'), _defineProperty(_en, "HandlingFee",
'Handling Fee(Unit：USDT)'), _defineProperty(_en, "StopLossAndProfit",
'Stop Loss And Profit(Unit：USDT)'), _defineProperty(_en, "MinimumUnitOfChange",
'Minimum Unit Of Change'), _defineProperty(_en, "ForcedLiquidationSystem",
'Forced Liquidation System'), _defineProperty(_en, "ForcedDesc",
'When the user can use the balance + frozen margin (total account) ≤ 1% of the frozen margin, the system has the right to force the liquidation'), _defineProperty(_en, "TradeRulesTitle",
'DBS Contract Trading Rules'), _defineProperty(_en, "noAnn",
'There is no announcement at the moment'), _defineProperty(_en, "captcha",
'Captcha'), _defineProperty(_en, "failed",
'Failed'), _defineProperty(_en, "success",
'Success'), _defineProperty(_en, "noData",
'No Data'), _defineProperty(_en, "hand",
'hand'), _defineProperty(_en, "numEmptyTips",
'Please Enter Quantity'), _defineProperty(_en, "insufficientBalance",
'Insufficient Balance'), _defineProperty(_en, "successText",
'Success'), _defineProperty(_en, "personalCenter",
'Personal Center'), _defineProperty(_en, "updatePwd",
'Update Pwd'), _defineProperty(_en, "updateInfo",
'Update Infomation'), _defineProperty(_en, "oldPwd",
'Old Password'), _defineProperty(_en, "newPwd",
'New Password'), _defineProperty(_en, "certification",
'Certification'), _defineProperty(_en, "bankname",
'Bankname'), _defineProperty(_en, "bname",
'Bname'), _defineProperty(_en, "badds",
'Badds'), _defineProperty(_en, "idcard",
'ID Card'), _defineProperty(_en, "banknumber",
'Bank Number'), _defineProperty(_en, "qbdizhi",
'Qb dizhi'), _defineProperty(_en, "rechargeName",
'Name'), _defineProperty(_en, "rechargeAmount",
'Amount'), _defineProperty(_en, "rechargeStatus",
'Status'), _defineProperty(_en, "oprate",
'Opration'), _defineProperty(_en, "rechargeUpload",
'Upload'), _defineProperty(_en, "revokeBtn",
'Revoke'), _defineProperty(_en, "orderno",
'Order No'), _defineProperty(_en, "profitLoss",
'Profit and Loss'), _defineProperty(_en, "sellPrice",
'Sell Price'), _defineProperty(_en, "loadingText",
'Loading...'), _defineProperty(_en, "submit",
'Submit'), _defineProperty(_en, "my",
'My'), _defineProperty(_en, "close",
'Close'), _defineProperty(_en, "setting",
'Setting'), _defineProperty(_en, "price",
'Price'), _defineProperty(_en, "time",
'Time'), _defineProperty(_en, "sysTips",
'System Tips'), _defineProperty(_en, "cancel",
'Cancel'), _defineProperty(_en, "confirmClose",
'Are you sure you want to close your position？'), _defineProperty(_en, "market",
'Market/volume'), _defineProperty(_en, "withdrawTips",
'Withdrawal quantity cannot be less than 10'), _defineProperty(_en, "todayProfit",
'Today Profit'), _defineProperty(_en, "todayFee",
'Today Fee'), _defineProperty(_en, "todayNums",
'Today Nums'), _defineProperty(_en, "check",
'Check'), _defineProperty(_en, "tradeType",
'Trade Type'), _defineProperty(_en, "buytime",
'Buy Time'), _defineProperty(_en, "selltime",
'Sell Time'), _defineProperty(_en, "productName",
'Product Name'), _defineProperty(_en, "accountInfo",
'Account Info'), _defineProperty(_en, "accountStatus",
'Account Status'), _defineProperty(_en, "normal",
'Normal'), _defineProperty(_en, "certificate",
'Certificate'), _defineProperty(_en, "certified",
'Certified'), _defineProperty(_en, "notCertified",
'NotCertified'), _defineProperty(_en, "data",
'Data'), _defineProperty(_en, "fund",
'Fund'), _defineProperty(_en, "recharge",
'Recharge'), _defineProperty(_en, "exit",
'Exit'), _defineProperty(_en, "exitAccount",
'Are you sure you want to exit the account?'), _defineProperty(_en, "wait",
'cancel'), _defineProperty(_en, "confirm",
'Confirm'), _defineProperty(_en, "rechargeLimit",
'Recharge amount must be greater than 1'), _defineProperty(_en, "rechargeCenter",
'Recharge Center'), _defineProperty(_en, "serverRecharge",
'Server Recharge'), _defineProperty(_en, "copy",
'Copy wallet address'), _defineProperty(_en, "recharging",
'Recharging'), _defineProperty(_en, "phone",
'Phone'), _defineProperty(_en, "revoke",
'Revoke'), _defineProperty(_en, "finish",
'Finish'), _defineProperty(_en, "orderCenter",
'Order Center'), _defineProperty(_en, "UAS", "Bcex comments on the official website of UAS: \"UAS is an impressive and mature project, aiming to realize the initial promise of blockchain Technology: to change the traditional financial world. UAS provides a wallet and payment network for all legal and cryptocurrencies. \" UAS has a heart beating nickname \"tender model currency\", why is it called tender model currency? Actually, this is a name that netizens play tricks on, because UAS in the promotion, the project side invited many beautiful models, everyone currency circle has a classic saying called \"one coin one tender model\", so UAS fans nicknamed UAS tender model currency, so the tender model currency got its name<br />.\n    Release time\uFF1A2017/06/27<br />\n    Total amount of issuance\uFF1A140245398W<br />\n    Total circulation\uFF1A9800WCrowdfunding price\uFF1A--<br />\n    White Paper: --<br />\n    Official website: --<br />\n    Block query: ---"), _defineProperty(_en, "BTC", "Bitcoin (BTC) is currently the most widely used digital currency. It was born on January 3, 2009 and is a digital cryptocurrency for point-to-point (P2P) transmission. The number is 21 million. The Bitcoin network releases a certain amount of coins every 10 minutes and is expected to reach its limit in 2140. Bitcoin is called 'digital gold' by investors. Bitcoin is generated by a large number of calculations according to a specific algorithm. It does not rely on a specific currency institution to issue. It uses a distributed database composed of many nodes in the entire P2P network to confirm and record all transaction behaviors, and uses cryptography to ensure currency circulation. Link security ensures that currency values cannot be manipulated manually by making large amounts of bitcoin. Cryptographic-based design allows Bitcoin to be transferred, paid, and redeemed only by the real owner. It also ensures the anonymity of currency ownership and circulation transactions.<br />\n    Release time\uFF1A2008/11/1Total amount of issuance\uFF1A2100W<br />\n    Total circulation\uFF1A1673.82WCrowdfunding price\uFF1A--<br />\n    White Paperhttps://bitcoin.org/bitcoin.pdf<br />\n    Official website:https://bitcoin.org/en/<br />\n    Block query:https://blockchain.info/<br />"), _defineProperty(_en, "ETC", "ETC is a forked currency that has been forked out after 1,920,000 blocks. The function is very similar to Ethereum. ETC adheres to the decentralization concept and supports the consensus mechanism for blockchain assurance. ETC firmly believes that once the blockchain begins to operate, its development direction will not be dominated by any central team, but will be determined by the consensus of the entire network personnel and the consensus of the entire network.<br />\n    Release time\uFF1A2018/11/11Total amount of issuance\uFF1A2000W<br />\n    Total circulation\uFF1A9833.66WCrowdfunding price\uFF1A--<br />\n    White Paper: --<br />\n    Official website: ethereumclassic.github.io<br />\n    Block query: https://gastracker.io/<br />"), _defineProperty(_en, "NWC", "In addition to the fixed and limited supply, MWC seeks to reward active bitcoin holders by using the target airdrop model, and optimize the potential return of holders through a process similar to rhodium [6]. In this model, any bitcoin holder who can prove the ownership is eligible for airdrop by registering a public, non-zero balanced BTC key. In addition, within the specified time period, MWC rewards those holders who have no negative impact. We believe that the airdrop distribution method - a weak, fixed life-long upper limit and a weak bitcoin with physical dividend; it will give bitcoin holders, as well as those who obtain MWC in the secondary market, the potential to store the superior value of a smile and light<br />\n    Release time\uFF1A2016/07/19Total amount of issuance\uFF1A135245896W<br />\n    Total circulation\uFF1A105215421WCrowdfunding price\uFF1A--<br />\n    White Paper: --<br />\n    Official website: --<br />\n    Block query: --"), _defineProperty(_en, "EOS", "EOS (Enterprise Operation System) is a new blockchain-based smart contract platform developed by Block.one, which aims to provide low-level blockchain platform services for high-performance distributed applications. The goal of the EOS project is to implement a blockchain architecture that supports distributed applications like an operating system. The architecture provides account, identity, database, asynchronous communication and program scheduling and parallelism on tens of thousands of CPU/GPU clusters. EOS can ultimately support millions of transactions per second, while regular users do not have to pay for usage of smart contracts.<br />\n    Release time\uFF1A2017/7/2Total amount of issuance\uFF1A100000W<br />\n    Total circulation\uFF1A50000.36WCrowdfunding price\uFF1A--<br />\n    White Paper: https://github.com/EOSIO/Documentation/blob/master/zh-CN/TechnicalWhitePaper.md<br />\n    Official website: https://eos.io/<br />\n    Block query: https://etherscan.io/token/EOS"), _defineProperty(_en, "ETH", "Ripple/XRP provides an unimpeded global payment network using blockchain technology and is the world's first open payment network. By joining Ripple's growing global payment network, Transferring any currency, including US dollars, Euros, Renminbi, Japanese Yen or Bitcoin, is simple and fast, transaction confirmation is completed in a few seconds, transaction costs are almost zero, there is no so-called cross-banking and cross-border payment. Ripple is an open source point-to-point payment network that allows any organization or individual to easily, inexpensively and securely transfer money to any institution or individual on the Internet, no matter where in the world. Ripple is a p2p software that can be created by anyone, company, or government. Anyone can create a ripple account.<br />\n    Release time\uFF1A2015/3/20Total amount of issuance\uFF1A7200W+1872/YEAR<br />\n    Total circulation\uFF1A6000W+1872/YEARCrowdfunding price\uFF1A--<br />\n    White Paper: --<br />\n    Official website: https://etherchain.org/blocks<br />\n    Block query: https://etherscan.io"), _defineProperty(_en, "LTC", "Litecoin was born on November 9, 2011 and is known as 'Digital Silver.' Litecoin has the same implementation principle as Bitcoin. It is the first network digital currency based on the Scrypt algorithm. Compared with Bitcoin, Litecoin has faster transaction confirmation time, higher network transaction capacity and efficiency. Litecoin now has a complete industrial chain and sufficient liquidity to prove that it is a mature, safe and stable commercial financial system.<br />\n    Release time\uFF1A2011-11-09Total amount of issuance\uFF1A8400W<br />\n    Total circulation\uFF1A5428.26WCrowdfunding price\uFF1A--<br />\n    White Paper: --<br />\n    Official website: https://litecoin.com/<br />\n    Block query: http://explorer.litecoin.net/"), _defineProperty(_en, "ZEC", "Zcash (ZEC) is a decentralized, open source, encrypted Internet currency developed based on the Paper Zerocash Protocol released at the 2014 IEEE conference, with zero-knowledge proof and multiple account mechanisms to ensure the anonymous of transactions.<br />\n    Release time\uFF1A2016/10/28Total amount of issuance\uFF1A282.51W<br />\n    Total circulation\uFF1A282.51WCrowdfunding price\uFF1A--<br />\n    White Paper: --<br />\n    Official website: --<br />\n    Block query: --"), _defineProperty(_en, "XRP", "Ripple/XRP provides an unimpeded global payment network using blockchain technology and is the world's first open payment network. By joining Ripple's growing global payment network, Transferring any currency, including US dollars, Euros, Renminbi, Japanese Yen or Bitcoin, is simple and fast, transaction confirmation is completed in a few seconds, transaction costs are almost zero, there is no so-called cross-banking and cross-border payment. Ripple is an open source point-to-point payment network that allows any organization or individual to easily, inexpensively and securely transfer money to any institution or individual on the Internet, no matter where in the world. Ripple is a p2p software that can be created by anyone, company, or government. Anyone can create a ripple account.<br />\n    Release time\uFF1A2011/4/18Total amount of issuance\uFF1A10000000W<br />\n    Total circulation\uFF1A3873914.48WCrowdfunding price\uFF1A--<br />\n    White Paper: --<br />\n    Official website: https://ripple.com<br />\n    Block query: https://ripple.com/grap"), _defineProperty(_en, "aboutusDesc", "In response to the national 'One Belt, One Road' policy, Haitong Trading Co., Ltd., launched a diversified value-added service orientation around e-commerce, and launched a platform APP with a user-friendly entertainment model to the market called DBS. As the first app that allows users to select cities and define the amount of entertainment freely. DBS has opened more than 100 first-tier cities and national professional services and different language switching modes at home and abroad. DBS's entertainment currency is acquired through purchasing at Haitong Trading Co., Ltd. While helping users to discover the joy of life, it provides outstanding characteristic quality goods to isers. The DBS team is formed by the elites of Haitong Trading Co., Ltd. and the electronic system integration department which is rich in experience in consumer entertainment management."), _defineProperty(_en, "termsDesc", "\n    DBS is a website where Panda Box Mall introduces user value-added services (hereinafter referred to as 'the service' or 'service') to the market. For the convenience, the company, the website and the APP are collectively referred to as 'we' or other first-person names in this agreement. As long as you log in to the website, the natural person or other subject of the APP (hereinafter referred to as this website) is the user of this platform, for the convenience, users will be referred to as 'you' For the convenience, we and you are collectively referred to as 'the parties' in this Agreement, and we or you are referred to as the 'Party'. <p></p> ??important hint: <p></p> ?? We are here to remind you in particular: <p></p> 1DBS s product usdt is for leisure and entertainment only; <p></p> 2usdt is a gift from Haitong Trading Co., Ltd.; <p></p> 3DBS provides you with entertainment throughout the day; <p></p> 4 DBS entertainment may be suspended or banned at any time due to the formulation or revision of national laws, regulations and regulatory documents. DBS entertainment is as risky as other entertainment. You understand and understand that this entertainment may result in a loss of usdt or a total loss of usdt, so you should decide whether to entertain or not with the level of loss you can afford. You understand and comprehend that DBS will generate derivative risks, so if you have any questions, it is recommended to ask customer service for assistance first. Other than that, in addition to the risks mentioned above, there are risks that are not predictable. You should carefully consider and use a clear judgment to assess your own situation and the above risks and make any relevant decisions for usdt entertainment, and bear all the losses arising therefrom, we are not responsible for this. To inform you: <p></p> 1 You understand that this website is only used as a place for you to obtain usdt information, usdt entertainment negotiation and entertainment. This website does not participate in any entertainment of you, so you should carefully determine the authenticity, validity and legality of relevant DBS and / or information. And bear the responsibility and loss arising therefrom. <p></p> 2 Any opinions, messages, discussions, analysis, prices, recommendations and other information on this website are general market comments and do not constitute specific recommendations. We do not assume any loss arising directly or indirectly from relying on this information, including but not limited to any loss of profits. <p></p> 3 The content of this website is subject to change without prior notice. We have taken reasonable steps to ensure the accuracy of the information on this website, but we cannot guarantee the accuracy of the website. We will not bear any loss caused directly or indirectly by failures in connection with the Internet, delay in receiving or sending any notification and information. <p></p> 4 There are also risks associated with the use of Internet-based entertainment systems, including but not limited to software, hardware and Internet link failures. Because we cannot control the reliability and availability of the Internet, we are not responsible for distortion, delays, and link failures. <p></p> 5 It is forbidden to use this website for all illegal entertainment activities such as money laundering, smuggling, commercial bribery, etc. If such incidents are found, the site will adopt various means of use, including but not limited to freezing accounts, notifying relevant authorities, etc. We do not take on all the responsibilities arising therefrom and retain the right to pursue responsibility with the relevant parties. <p></p> ?? I. General <p></p> 1.1 User Agreement (hereinafter referred to as 'this Agreement' or 'The Terms and Conditions'), composed of the text, 'Privacy Policy', 'Understanding Your Customers and Anti-Money Laundering Policy' and the published or future releases of this website\u2019s various rules, statements, descriptions, etc. <p></p> 1.2 You should read this agreement carefully before using the services provided on this website. If you do not understand or other needs, please consult a professional lawyer. If you do not agree to this Agreement and/or it\u2019s change at any time, please stop using the services provided on this website immediately or stop using this website. By accessing this website, using any of the services on this website or any other similar behavior, you acknowledge that you understand and fully agree to the contents of this Agreement, including any modifications to this Agreement at any time from this website. <p></p> 1.3 You can become a member of this website (hereinafter referred to as 'Member\u201D) by completing the relevant information according to the requirements of the Panda Box and successfully registering after other relevant procedures. By clicking the 'Agree\u201D button during the registration process, you are electronically signed. Or you click on any button labeled 'Agree' or similar in the course of using this website or actually use the services provided by this website in other ways permitted by this website, you are fully aware of agreeing to and accepting all the terms and conditions of this Agreement, without your written signature, there is no impact on the legal binding of this Agreement. <p></p> 1.4 After you become a user of this website, you will get a user account and corresponding password, the user should be legally responsible for all activities and events carried out on his account. <p></p> 1.5 Only who become Panda Box users can use the DBS platform provided by this website to entertain and enjoy other services that are only available to users on this website. Other than users, you can only login, browse this website and services under the regulation of this website. <p></p> 1.6 By registering and using any of the services and features provided by this website, you will be deemed to have read, understood and: <p></p> 1.6.1 Accept all terms and conditions of this Agreement. <p></p> 1.6.2 You confirm that you are at least 16 years of age or have a legal age for contractability under different applicable laws and are fully capable of accepting these terms and entertaining to use this website for entertainment. <p></p> ?? You confirm that the information provided at the time of registration is true and accurate. <p></p> 1.6.7 This Agreement is only binding on the rights and obligations between you and us, and does not involve legal relationships and legal disputes between users of this website and other websites and you due to entertainment. <p></p> ?? II, the agreement revision <p></p> We reserve the right to revise this Agreement from time to time and to make announcements on the website and not to notify you separately. The changed agreement will be marked with the change time on the first page of this agreement, and will be effective immediately upon posting on the website. You should review and update the update time and update content of this agreement from time to time. If you do not agree to the change, you should immediately stop using the service of this website; if you continue to use the service of this website, you accept and agree to the agreement of the revised agreement. . <p></p> ??III, registration <p></p> 3.1 Registration eligibility <p></p> You acknowledge and undertake that, when you complete the Panda Box registration process using the services provided on this website, you shall be a natural person, legal person or other organization that has applicable legal requirements to sign this Agreement and the ability to use the services of the Website. . By clicking the Agree to Register button, you or yourself and your authorized agent have agreed to the content of the agreement and are registered and used by the agent. If you do not have the above qualifications, you and your authorized agent shall bear all the consequences arising therefrom, and the company reserves the right to cancel or permanently freeze your account and to hold you and your authorized agent accountable. . <p></p> 3.2 Purpose of registration <p></p> You acknowledge and promise that your registration on this website is not for the purpose of violating laws and regulations or disrupting the order of DBS on this website. <p></p> 3.3 registration process <p></p> 3.3.1 You agree to provide valid mobile phone numbers and other information according to the requirements of the user registration page of this website. You can use this mobile phone number provided or confirmed or other means permitted by this website as a means of login to enter this website. If necessary, in accordance with the relevant laws and regulations of different jurisdictions, you must provide your real name, identity documents and other laws and regulations and privacy provisions and anti-money laundering provisions and continuously update the registration information, in a timely, detailed and accurate manner. All original typed materials will be cited as registration materials. You are responsible for the truthfulness, completeness and accuracy of such information and assume any direct or indirect damages and adverse consequences resulting therefrom. <p></p> 3.3.2 If the laws, regulations, rules, orders, etc. of your sovereign country or region have real-name requirements for mobile phone numbers, you agree to provide registered mobile phone numbers that are registered by real-name. If you do not provide them according to regulations. Any direct or indirect losses and adverse consequences will be borne by you. <p></p> 3.3.3 You are legally, complete and valid to provide the information required for registration and have been verified. You are entitled to the account number and password of this website. If you obtain the account number and password of this website, you will be deemed to have successfully registered. You can log in to the website. <p></p> 3.3.4 You agree to receive emails and or short messages sent by this website in connection with the management and operation of this website. <p></p> ?? IV, service <p></p> This website only provides online entertainment platform services for usdt entertainment activities (including but not limited to usdt entertainment services) through this website. This website does not participate in the sale and purchase of usdt itself as a buyer or seller; this website does not provide any services related to recharge and withdrawal of legal tender <p></p> ?? V. Rights and obligations of this website <p></p> 5.1 If you do not have the registration qualification as stipulated in this agreement, this website has the right to refuse to register you. If you have already registered, this website has the right to cancel your member account. This website reserves the right to hold you or your authorized agent accountable. At the same time, this website reserves the right to decide whether or not to accept your registration under any other circumstances. <p></p> 5.2 This website has the right to suspend or terminate the use of the account when the account user is not the initial registrant of the account. <p></p> 5.3 This website has the right to notify you of corrections, update information or suspend or terminate the provision of this website service by means of technical testing, manual sampling and other means of testing that reasonably suspect that the information you provided is incorrect, false, invalid or incomplete. <p></p> 5.4 This website reserves the right to correct the information when it finds that any information displayed on this website is obviously wrong. <p></p> 5.5 This website reserves the right to modify, suspend or terminate the services of this website at any time. The right to modify or suspend the service of this website does not need to inform you in advance; if this website terminates one or more services of this website, it comes into effect on the date of publication of the termination notice. <p></p> 5.6 This website shall take necessary technical means and management measures to ensure the normal operation of this website, and provide necessary and reliable entertainment environment and entertainment services to maintain the order of DBS entertainment. <p></p> 5.7 If you have not used this website's user account and password for one year to log in to this website, then this website has the right to cancel your website account. After the account is cancelled, the website has the right to open the corresponding member name to other users for registration. <p></p> 5.8 This website protects your usdt by strengthening technical investment, improving security and other measures. It is obliged to notify you in advance when there is a foreseeable security risk in your account. <p></p> 5.9 This website reserves the right to delete any content on the website that does not comply with laws and regulations or the requirements of this website at any time. This website does not need to notify you in advance. <p></p> 5.10 This website has the right to request more information or materials according to the requirements of the laws, regulations, rules and orders of your sovereign country or region, and take reasonable measures to meet the requirements of local regulations. You are obliged to cooperate; this website reserves the right to suspend or permanently stop opening this website and some or all of its services to you in accordance with the laws, regulations, rules, orders and other requirements of your sovereign country or region. <p></p> ?? VI, compensation <p></p> 6.1 In no event shall our liability for your direct damage exceed the total three (3) months charge from your use of the Services on this website. <p></p> 6.2 If you violate this Agreement or other laws and regulations, you must pay us at least US$2 million and bear all the costs incurred (including attorneys' fees, etc.). If it is not enough to make up for the actual loss, you must complete it. <p></p> ?? VII, the right to seek injunctive relief <p></p> We and you both acknowledge that the common law remedy for breach of contract or possible breach of contract may not be sufficient to cover all the losses we have suffered, so non-defaulting parties have the right to seek injunctive relief and common law or equity in case of default or possible breach of contract. <p></p> ?? VIII. Limitation of Liability and Disclaimer <p></p> ?? IX, the termination of the agreement <p></p> 9.1 This website has the right to cancel your account of this website in accordance with the terms of this agreement. This agreement is terminated on the date of cancellation of the account. <p></p> 9.2 This website is entitled to terminate all services of this website in accordance with the terms of this agreement. This agreement is terminated on the date of termination of all services on this website. <p></p> 9.3 Upon termination of this Agreement, you are not entitled to request that the Website continue to provide any services or perform any other obligations, including but not limited to requiring the Site to retain or disclose to you any information in its original Website Account, to you or The third party forwards any information it has not read or sent, and so on. <p></p> 9.4 The termination of this Agreement does not affect the commitment of the defaulting party to the breach of contract. <p></p> ?? X, intellectual property rights <p></p> 10.1 All intellectual achievements contained in this website include, but are not limited to, website logos, databases, website design, text and graphics, software, photographs, videos, music, sounds and combinations thereof, software compilation, The intellectual property rights of related source code and software (including applet and script) are owned by this website You may not copy, alter, transmit or use any of the foregoing materials or content for commercial purposes. <p></p> 10.2 All rights (including but not limited to goodwill and trademarks, logos) contained in the name of this website are owned by the company. <p></p> 10.3 By accepting this Agreement, you represent the copyright of any form of information you have voluntarily published on this website, including but not limited to: reproduction rights, distribution rights, rental rights, exhibition rights, performance rights, screening rights, broadcasting rights, Information network communication rights, filming rights, adaptation rights, translation rights, compilation rights, and other transferable rights that should be enjoyed by the copyright owner are exclusively and freely transferred to this website. This website has the right to file a lawsuit and obtain full compensation for any subject infringement. . This Agreement applies to the content of any work protected by the Copyright Law that you post on this website, whether formed before the signing of this Agreement or after the signing of this Agreement. <p></p> 10.4 You may not illegally use or dispose of the intellectual property rights of this website or others during the use of this website. You may not post or authorize the information published on this website in any form for use by other websites (and media). <p></p> 10.5 Your access to this website or the use of any of the services provided on this website is not considered to be any intellectual property rights transferred to you. <p></p> ?? XI, information protection <p></p> ?? XII, calculation <p></p> All entertainment calculations have been verified by us and all calculations have been posted on the website, but we cannot guarantee that the use of the website will not be disturbed or error free. <p></p> ?? XIII, transfer <p></p> The rights and obligations stipulated in this Agreement also govern the assignee, heir, executor and administrator of the parties who have obtained the benefits from the rights and obligations. You may not assign to any third party without our consent, but we may at any time transfer our rights and obligations under this Agreement to any third party and give you 30 days notice in advance. <p></p> ?? XIV, separability <p></p> If any provision of this Agreement is deemed unenforceable, invalid or illegal by any court of competent jurisdiction, it does not affect the validity of the remaining provisions of this Agreement. <p></p> ?? XV, non-agent relationship <p></p> Nothing in this Agreement shall be deemed to create, imply or otherwise treat us as your agent, trustee or other representative, except as otherwise provided in this Agreement. <p></p> ?? XVI, abstention <p></p> The waiver of any breach of contract or other liability by us or any of you to this Agreement shall not be deemed or construed as a waiver of any breach of contract; any failure to exercise any right or remedy shall not be construed in any way as giving up such right or remedy. <p></p> ?? XVII, title <p></p> All titles are for convenience only and are not intended to extend or limit the content or scope of the terms of the agreement. <p></p> ?? XVIII, applicable law <p></p> The entire contents of this agreement are contracts concluded under the laws of the People's Republic of China. The establishment, interpretation, content and execution of the agreement are subject to the relevant laws and regulations of the PRC; any claims or litigation arising from or related to the services stipulated in this Agreement shall be governed, enforced and explained in accordance with laws in China. For the avoidance of doubt, this clause expressly applies to any infringement claim against us. Any court of jurisdiction or litigation against us or a claim or lawsuit relating to us is in China. You are unconditionally granted exclusive jurisdiction to conduct litigation and appeals in Chinese courts. You also unconditionally agree to the dispute or issue relating to this Agreement or any claims and litigation arising from the place of occurrence or the exclusiveness of the court in China. The inconvenient court principle does not apply to courts based on the choice of these Terms of Service <p></p> ?? XX. Effectiveness and interpretation of the agreement <p></p> 20.1 This Agreement is effective when you click on the registration of the registration page of this website and complete the registration process, obtain the account number and password of this website, and bind to this website and you. <p></p> 20.2 This website has the right of final interpretation of this Agreement. <p></p> know your customers and anti-money laundering policies <p></p> ?? I. Introduction <p></p> 1.1 We pledge to abide by the 'know your customer\u201D and anti-money laundering laws and regulations and must not intentionally violate the 'Know Your Customer and Anti-Money Laundering Policy\u201D. Within the scope of our reasonable control, we will take the necessary measures and techniques to provide you with a safe service, so as to protect you from the money laundering of the suspect. <p></p> 1.2 Our know your customers and anti-money laundering policy is a comprehensive international policy system that includes your understanding of your clients and anti-money laundering policies in different jurisdictions. Our robust compliance framework ensures that we comply with regulatory requirements and regulatory levels, both locally and globally, and that this website continues to operate. <p></p> ?? II, know your customers and anti-money laundering policies as follows: <p></p> 2.1 Enact know your customers and anti-money laundering policies and update them to meet the standards set by relevant laws and regulations; <p></p> 2.2 to promulgate and update some of the guidelines and rules for running this website, and our employees will provide services in accordance with the principles and rules; <p></p> 2.3 Design and complete procedures for internal monitoring and control of entertainment, such as verifying identity by rigorous means, and arranging a professional team to be responsible for anti-money laundering work; <p></p> 2.4 Conducting due diligence and ongoing supervision of customers using risk prevention methods <p></p> 2.5 Review and regularly check the entertainment that has taken place <p></p> 2.6 Report suspicious entertainment to the competent authority <p></p> 2.7 Identification documents, address documents and proof of entertainment records will be maintained for at least six years, if submitted to the regulatory authorities without prior notice. <p></p> ?? III, monitoring entertainment <p></p> 3.1 We set and adjust daily entertainment and withdraw ceilings from time to time based on safety and actual entertainment conditions. <p></p> 3.2 If entertainment is frequently concentrated in a registered user or there is an unreasonable situation, our professional team will assess and decide if they are suspicious <p></p> 3.3 In our case, we believe that it is suspicious entertainment. We may take restrictive measures such as suspending the entertainment, rejecting the entertainment, and even if it is possible to reverse the entertainment as soon as possible, and report to the competent authority, but without notifying you. <p></p> 3.4 We reserve the right to refuse applications from people who do not meet the International AML standards or who can be considered as political public figures. We reserve the right to suspend or terminate entertainment at our own discretion as suspicious entertainment, but we do so and does not violate any of your obligations and responsibilities.\n    "), _defineProperty(_en, "tradingGuideDesc", "\n    1. What is blockchain? <p></p> A: blockchain is a decentralized, point-to-point transmission, safe and reliable database. <p></p> 2. What is bitcoin? <p></p> A: bitcoin is the first decentralized currency in the world. <p></p> 3. What is the relationship between blockchain and bitcoin? <p></p> A: bitcoin is the first application of blockchain, and blockchain technology is the underlying technology of bitcoin. <p></p> 4. How is bitcoin issued? <p></p> A: there is no specific issuing institution for bitcoin. Relying on a decentralized issuing mechanism, bitcoin is gradually issued (the system automatically generates BTC as reward to encourage miners to participate in bookkeeping). <p></p> 5. How to transfer bitcoin? <p></p> Answer: input bitcoin address, receiver address, transfer amount and transfer handling fee in bitcoin trading platform, wallet and client. After confirming the payment, the transaction information will be broadcasted in bitcoin network. Miner will pack the non bookkept transactions into a block every 10 minutes to complete the confirmation, which usually needs to be confirmed six times to ensure that the transaction record has not been tampered with , the transaction is actually completed. <p></p> 6, ask: what is the difference between bitcoin and qqcoin? <p></p> A: bitcoin is a decentralized digital asset with no issuing entity. Q-coin is an electronic currency (electronic points) issued by Tencent's credit endorsement, but it is not a currency. Q-coin needs a centralized issuing institution. <p></p> 7. How much is the handling charge for bitcoin transfer? <p></p> A: the transfer fee is generally 0.001-0.0015 bitcoin. Overpayment can be recorded faster. <p></p> 8. What are bitcoin and usdt addresses? <p></p> A: it's a string of letters and numbers. The 26-34 string, bitcoin and usdt address are personal bitcoin and usdt accounts, which are equivalent to your bank card number. Anyone can transfer bitcoin and usdt to you through your bitcoin address, download a bitcoin and usdt wallet or register on the trading platform. <p></p> 9. What is the bitcoin node? What is a full node? <p></p> A: bitcoin is a point-to-point e-cash system. More directly, it is node to node. Each transaction is broadcast by the nodes around the initiating direction and spread to the whole network. Each bitcoin wallet is a node. The node with a complete blockchain ledger is called the full node, which is responsible for broadcasting and verifying bitcoin transactions. The mining node will record the transactions to the blockchain ledger after verifying that the transactions are correct. <p></p> 10. What is the digital signature of bitcoin? <p></p> A: only the transferor of bitcoin transfer generates a fake string. By verifying the string, on the one hand, it is proved that the transaction is initiated by the transferor himself, on the other hand, it is proved that the transaction information has not been changed in the transmission. <p></p> 11. What is a miner? What is the main job of a miner? <p></p> A: the miner is equivalent to a bookkeeper. His main job is to confirm transactions and package data. <p></p> 12. What is quantitative trading? <p></p> A: automated trading. The advanced mathematical model is used to replace the subjective judgment, so as to avoid investors making irrational investment decisions. Including cross platform brick handling, trend trading, hedging, etc. <p></p> 13. What is cross platform brick handling? <p></p> Answer: when the price difference of different target platforms reaches a certain amount, the platform with high price will sell and the platform with low price will buy. <p></p> 14. What is hedging? <p></p> Answer: at the same time, carry out two transactions related to the market, opposite to the trading direction, equal in quantity and equal in profit and loss. <p></p> 15. What is a decentralized trading platform? <p></p> A: no need to register an account. You can participate in the transaction by using your personal digital asset account. Each transaction is conducted through the blockchain, and the transaction is considered successful only after the confirmation of the blockchain. The platform is not responsible for the custody of customers' assets and private keys, etc., to avoid the moral hazard of the trading platform, it is necessary to keep its own private keys. <p></p> 16. What is the currency transaction? <p></p> Answer: it is to exchange one kind of cryptocurrency for another. Different currencies trade at their own prices. <p></p> 17. What is a wallet? <p></p> A: tools for storing and using digital currency. Including bitcoin address (similar to bank card account) and private key (similar to bank card password), the core function is to protect the customer's private key. <p></p> 18. What are the types of bitcoin wallets? <p></p> Answer: PC wallet, mobile phone wallet, web wallet, brain wallet and paper wallet. <p></p> 19. How many kinds of bitcoin wallets can be stored according to the private key? <p></p> A: cold wallet, the network can not access your private key wallet, to avoid the risk of hackers stealing private key, relative to security. Hot wallet, the wallet that Internet can access your private key, is online wallet, with high transfer efficiency, but not so safe. <p></p> 20. What are all node wallets, light wallets and centralized wallets? <p></p> A: the all node wallet is the core wallet. It needs to synchronize all data on the blockchain, which takes up a large amount of memory and can completely realize decentralization. Light Wallet: after analyzing the data, it only synchronizes and stores the data related to itself, and depends on other all nodes (bither / electron) on bitcoin network at runtime. Centralized Wallet: it does not rely on bitcoin network, and all data is obtained from its own centralized server. (the transaction efficiency is very high, and the account can be received in real time) the centralized wallet is registered on the transaction platform. <p></p> 21. What information does the blockchain record? <p></p> Answer: block head (the first 80 bytes in each block), transaction details (including details of the transferor, revenue party, amount and digital signature of the transferor of each transaction, which is the main content of each block), transaction counter (indicating the number of transactions in each block), block size (indicating the size of data in each block). <p></p> 22. What are the types of blockchain according to the access mechanism? <p></p> A: public chain: open and transparent. Any individual or group can send transactions on the public chain. Transactions can be effectively confirmed. Everyone has the right to compete for bookkeeping<p></p> Private chain: totally closed, only using blockchain technology for bookkeeping, the bookkeeping right is not open, only recording internal transactions, which are owned by the company or individual<p></p> Alliance chain: for semi public, group or organization internal use, several nodes need to be designated as bookkeepers in advance. Each block generation is jointly determined by the pre selected bookkeeper. Other nodes can be traded, but there is no bookkeeping right. <p></p> 23. What are the characteristics of blockchain? <p></p> A: decentralized, tamper proof, consensus mechanism, distributed data storage, point-to-point transaction. <p></p> 24. What is the principle of blockchain technology? <p></p> A: consensus mechanism, to ensure the consistency of each transaction on all accounting nodes, so that the whole network can reach consensus. <p></p> 25. What are the types of blockchain projects? <p></p> Answer: currency, platform, application and asset token. <p></p> 26. What are the disadvantages of blockchain? <p></p> A: no privacy, security issues, data confirmation delay, supervision, etc. <p></p> 27. What is decentralization? <p></p> A: there is no centralized hardware or management organization in the whole network, and the rights and obligations of any node are equal, and any node damage or loss will not affect the operation of the whole system. <p></p> 28. What is mining? <p></p> A: confirm the transactions in bitcoin system in a period of time and record the process of forming new blocks on the blockchain. <p></p> 29. What is digital currency? <p></p> A: digital currency is equivalent to the product of virtual currency = computer cryptography + distributed P2P network + economics + sociology. <p></p> 30. What is a third-party wallet? <p></p> A: the payment is made through the intervention of a third party (only the payment platform is provided, and no data is stored), such as the imtoken wallet usually used. <p></p> 31. Where is the main application of blockchain? <p></p> Answer: digital currency, pan financial application (cross-border payment, digital bill, credit management, asset securitization, supply chain finance, insurance business), blockchain + industry application (blockchain + medical, blockchain + Internet of things, blockchain + IP Copyright &amp; Culture &amp; entertainment, blockchain + public service &amp; Education). <p></p> 32. What is a trade right? <p></p> A: the transaction pair is composed of two different digital currencies. When you have one of the transaction pairs, you can trade another digital currency through this transaction pair. <p></p> 33. What is market trading? <p></p> Answer: do not set the buy / sell price, you can make a deal in time, just input the total quantity you want to buy. Market trading is what price is in the market now, and what price you buy directly is called market price purchase. <p></p> 34. What is a limited price transaction? <p></p> Answer: limit price transaction is a kind of order transaction. You can set your own purchase price, and when the market price fluctuates to the price you set, the transaction can be completed. For example, if you want to buy a bitcoin, you can see that the current quotation is 10000 yuan. At this time, you think it's a bit high. If you want to buy it at 9900 yuan, you can directly place a purchase order of 9900 yuan. If someone sells it at this price, the transaction of your purchase order is successful. At this time, you will get a bitcoin to your account. <p></p> 35. What are the common currencies? <p></p> A: common currencies: UAS (tender currency), MWC (quasi cone currency), BTC (bitcoin), ETH (Ethereum), XRP (Swiss wave currency), BCH (bitcash), LTC (Wright currency), Ada (IDA currency), XLM (Star currency), Neo (termite) XmR (Monroe currency), dash (dascoin), etc (etheric Scripture), usdt (Tada currency), qtum (quantum chain), EOS (grapefruit), TRX (wave field), BNB (coin ampere currency), Zec (large currency) Zero currency) <p></p>\n    "), _en);var _default =


































































en;exports.default = _default;

/***/ }),

/***/ 64:
/*!******************************************************!*\
  !*** /Users/suan/Desktop/DBS/mixins/login_mixins.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 35));var _validate = _interopRequireDefault(__webpack_require__(/*! @/utils/validate.js */ 65));
var _user = __webpack_require__(/*! @/api/user.js */ 66);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var loginMixins = {
  methods: {
    /**
              * 登录
              */
    loginHandler: function loginHandler() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var params, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                _this.uname === '')) {_context.next = 2;break;}return _context.abrupt("return",
                _this.$tips.showToast(_this.getLangs('accountPlaceholder')));case 2:if (!(

                _this.pwd === '')) {_context.next = 4;break;}return _context.abrupt("return",
                _this.$tips.showToast(_this.getLangs('passwordPlaceholder')));case 4:

                params = {
                  uname: _this.uname,
                  pwd: _this.pwd,
                  parentId: _this.parentId };

                _this.$tips.showLoading(_this.getLangs('loadingText'));_context.next = 8;return (
                  (0, _user.userLogin)(params));case 8:res = _context.sent;
                _this.$tips.hideLoading();
                //登录成功
                if (!_validate.default.checkCode(res)) {_context.next = 14;break;}
                _this.$tips.showToast(_this.getLangs('success'));_context.next = 15;break;case 14:return _context.abrupt("return",

                _this.$tips.showToast(_this.getGlobalLang === 'cn' ? res : res.enMsg ? res.enMsg : 'fail'));case 15:case "end":return _context.stop();}}}, _callee);}))();

    } } };var _default =



loginMixins;exports.default = _default;

/***/ }),

/***/ 65:
/*!*************************************************!*\
  !*** /Users/suan/Desktop/DBS/utils/validate.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var validate = {
  //判断返回的结果
  checkCode: function checkCode(res) {
    if (res.rpCode === '000000') {
      return true;
    } else {
      return false;
    }
  } };var _default =


validate;exports.default = _default;

/***/ }),

/***/ 66:
/*!*******************************************!*\
  !*** /Users/suan/Desktop/DBS/api/user.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.updNickName = exports.transaction = exports.getUserInfo = exports.closePosition = exports.retrievePwd = exports.withdrawal = exports.getWalletAddr = exports.pay = exports.getPayList = exports.updPhone = exports.updPwd = exports.userCertInfo = exports.checkCertInfo = exports.userLoginOut = exports.getUserLeftmoney = exports.userPhoneLogin = exports.userThirdLogin = exports.userRegister = exports.userLogin = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ../request/request.js */ 67));
var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ 68));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//登录
var userLogin = function userLogin(data) {
  return (0, _request.default)({
    url: '/pub/login',
    method: 'post',
    data: data });

};

//注册
exports.userLogin = userLogin;var userRegister = function userRegister(data) {
  return (0, _request.default)({
    url: '/user/register',
    method: 'post',
    data: data });

};

//第三方登录
exports.userRegister = userRegister;var userThirdLogin = function userThirdLogin(data) {
  return (0, _request.default)({
    url: '/pub/getLoginUrl',
    method: 'get',
    data: data });

};

//手机登录
exports.userThirdLogin = userThirdLogin;var userPhoneLogin = function userPhoneLogin(data) {
  return (0, _request.default)({
    url: '/pub/phoneLogin',
    method: 'post',
    data: data });

};

//获取余额
exports.userPhoneLogin = userPhoneLogin;var getUserLeftmoney = function getUserLeftmoney(data) {
  return (0, _request.default)({
    url: '/user/getBalance',
    method: 'get',
    data: data });

};

//退出账户
exports.getUserLeftmoney = getUserLeftmoney;var userLoginOut = function userLoginOut(data) {
  return (0, _request.default)({
    url: '/user/loginOut',
    method: 'get',
    data: data });

};

//获取实名信息
exports.userLoginOut = userLoginOut;var checkCertInfo = function checkCertInfo() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/checkIn',
    method: 'post',
    data: data });

};

//提交实名信息
exports.checkCertInfo = checkCertInfo;var userCertInfo = function userCertInfo() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/getCheckIn',
    method: 'get',
    data: data });

};

//更新密码
exports.userCertInfo = userCertInfo;var updPwd = function updPwd() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/updPwd',
    method: 'post',
    data: data });

};

//更新联系方式
exports.updPwd = updPwd;var updPhone = function updPhone() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/updPhone',
    method: 'post',
    data: data });

};

//充值渠道
exports.updPhone = updPhone;var getPayList = function getPayList() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/getPayList',
    method: 'get',
    data: data });

};

//提交充值
exports.getPayList = getPayList;var pay = function pay() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/pay',
    method: 'post',
    data: data });

};

//获取钱包地址
exports.pay = pay;var getWalletAddr = function getWalletAddr() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/getPayAdds',
    method: 'get',
    data: data });

};

//提现申请
exports.getWalletAddr = getWalletAddr;var withdrawal = function withdrawal() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/withdrawal',
    method: 'post',
    data: data });

};

//忘记密码
exports.withdrawal = withdrawal;var retrievePwd = function retrievePwd() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/pub/retrievePwd',
    method: 'post',
    data: data });

};

//平仓
exports.retrievePwd = retrievePwd;var closePosition = function closePosition() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/endOrder',
    method: 'get',
    data: data });

};

//个人信息
exports.closePosition = closePosition;var getUserInfo = function getUserInfo() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/getUserInfo',
    method: 'get',
    data: data });

};

//买卖
exports.getUserInfo = getUserInfo;var transaction = function transaction() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/transaction',
    method: 'post',
    data: data });

};

//修改昵称
exports.transaction = transaction;var updNickName = function updNickName() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)({
    url: '/user/updNickName',
    method: 'get',
    data: data });

};exports.updNickName = updNickName;

/***/ }),

/***/ 67:
/*!**************************************************!*\
  !*** /Users/suan/Desktop/DBS/request/request.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _appConfig = _interopRequireDefault(__webpack_require__(/*! @/config/appConfig.js */ 18));
var _storage = _interopRequireDefault(__webpack_require__(/*! @/utils/storage.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var request = function request(params) {
  var token = _storage.default.getLocalData('token');
  var header = {
    token: token,
    'Content-Type': 'application/x-www-form-urlencoded' };

  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_appConfig.default.domain).concat(params.url),
      data: params.data,
      method: params.method,
      header: header,
      timeout: 10000,
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(e) {
        reject(e);
      } });

  });
};var _default =

request;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 68:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 69);
var parse = __webpack_require__(/*! ./parse */ 72);
var formats = __webpack_require__(/*! ./formats */ 71);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 69:
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 70);
var formats = __webpack_require__(/*! ./formats */ 71);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 70:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ 71:
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ 72:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 70);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 73:
/*!******************************************************!*\
  !*** /Users/suan/Desktop/DBS/mixins/agent_mixins.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 父级代理
                                                                                                      */
var agentMixins = {
  data: function data() {
    return {
      parentId: '' };

  },
  onLoad: function onLoad(opt) {
    if (opt.parentId) {
      this.parentId = opt.parentId;
    }
  } };var _default =


agentMixins;exports.default = _default;

/***/ }),

/***/ 8:
/*!********************************************************!*\
  !*** /Users/suan/Desktop/DBS/mixins/updater_mixins.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 更新混入组件
                                                                                                      */
var updaterMixins = {};var _default =



updaterMixins;exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map