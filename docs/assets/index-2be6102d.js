(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const et of document.querySelectorAll('link[rel="modulepreload"]')) s(et);
  new MutationObserver((et) => {
    for (const tt of et)
      if (tt.type === "childList")
        for (const rt of tt.addedNodes) rt.tagName === "LINK" && rt.rel === "modulepreload" && s(rt);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(et) {
    const tt = {};
    return (
      et.integrity && (tt.integrity = et.integrity),
      et.referrerPolicy && (tt.referrerPolicy = et.referrerPolicy),
      et.crossOrigin === "use-credentials"
        ? (tt.credentials = "include")
        : et.crossOrigin === "anonymous"
        ? (tt.credentials = "omit")
        : (tt.credentials = "same-origin"),
      tt
    );
  }
  function s(et) {
    if (et.ep) return;
    et.ep = !0;
    const tt = a(et);
    fetch(et.href, tt);
  }
})();
var commonjsGlobal =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function getDefaultExportFromCjs(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var jsxRuntimeExports = {},
  jsxRuntime = {
    get exports() {
      return jsxRuntimeExports;
    },
    set exports(o) {
      jsxRuntimeExports = o;
    },
  },
  reactJsxRuntime_production_min = {},
  reactExports = {},
  react = {
    get exports() {
      return reactExports;
    },
    set exports(o) {
      reactExports = o;
    },
  },
  react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l$2 = Symbol.for("react.element"),
  n$2 = Symbol.for("react.portal"),
  p$3 = Symbol.for("react.fragment"),
  q$3 = Symbol.for("react.strict_mode"),
  r$2 = Symbol.for("react.profiler"),
  t$1 = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v$3 = Symbol.for("react.forward_ref"),
  w$2 = Symbol.for("react.suspense"),
  x$2 = Symbol.for("react.memo"),
  y$1 = Symbol.for("react.lazy"),
  z$3 = Symbol.iterator;
function A$3(o) {
  return o === null || typeof o != "object"
    ? null
    : ((o = (z$3 && o[z$3]) || o["@@iterator"]), typeof o == "function" ? o : null);
}
var B$2 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  C$1 = Object.assign,
  D$1 = {};
function E$2(o, i, a) {
  (this.props = o), (this.context = i), (this.refs = D$1), (this.updater = a || B$2);
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function (o, i) {
  if (typeof o != "object" && typeof o != "function" && o != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, o, i, "setState");
};
E$2.prototype.forceUpdate = function (o) {
  this.updater.enqueueForceUpdate(this, o, "forceUpdate");
};
function F$1() {}
F$1.prototype = E$2.prototype;
function G$2(o, i, a) {
  (this.props = o), (this.context = i), (this.refs = D$1), (this.updater = a || B$2);
}
var H$2 = (G$2.prototype = new F$1());
H$2.constructor = G$2;
C$1(H$2, E$2.prototype);
H$2.isPureReactComponent = !0;
var I$2 = Array.isArray,
  J$1 = Object.prototype.hasOwnProperty,
  K$2 = { current: null },
  L$2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M$2(o, i, a) {
  var s,
    et = {},
    tt = null,
    rt = null;
  if (i != null)
    for (s in (i.ref !== void 0 && (rt = i.ref), i.key !== void 0 && (tt = "" + i.key), i))
      J$1.call(i, s) && !L$2.hasOwnProperty(s) && (et[s] = i[s]);
  var nt = arguments.length - 2;
  if (nt === 1) et.children = a;
  else if (1 < nt) {
    for (var ot = Array(nt), it = 0; it < nt; it++) ot[it] = arguments[it + 2];
    et.children = ot;
  }
  if (o && o.defaultProps) for (s in ((nt = o.defaultProps), nt)) et[s] === void 0 && (et[s] = nt[s]);
  return { $$typeof: l$2, type: o, key: tt, ref: rt, props: et, _owner: K$2.current };
}
function N$2(o, i) {
  return { $$typeof: l$2, type: o.type, key: i, ref: o.ref, props: o.props, _owner: o._owner };
}
function O$1(o) {
  return typeof o == "object" && o !== null && o.$$typeof === l$2;
}
function escape(o) {
  var i = { "=": "=0", ":": "=2" };
  return (
    "$" +
    o.replace(/[=:]/g, function (a) {
      return i[a];
    })
  );
}
var P$2 = /\/+/g;
function Q$2(o, i) {
  return typeof o == "object" && o !== null && o.key != null ? escape("" + o.key) : i.toString(36);
}
function R$1(o, i, a, s, et) {
  var tt = typeof o;
  (tt === "undefined" || tt === "boolean") && (o = null);
  var rt = !1;
  if (o === null) rt = !0;
  else
    switch (tt) {
      case "string":
      case "number":
        rt = !0;
        break;
      case "object":
        switch (o.$$typeof) {
          case l$2:
          case n$2:
            rt = !0;
        }
    }
  if (rt)
    return (
      (rt = o),
      (et = et(rt)),
      (o = s === "" ? "." + Q$2(rt, 0) : s),
      I$2(et)
        ? ((a = ""),
          o != null && (a = o.replace(P$2, "$&/") + "/"),
          R$1(et, i, a, "", function (it) {
            return it;
          }))
        : et != null &&
          (O$1(et) &&
            (et = N$2(
              et,
              a + (!et.key || (rt && rt.key === et.key) ? "" : ("" + et.key).replace(P$2, "$&/") + "/") + o
            )),
          i.push(et)),
      1
    );
  if (((rt = 0), (s = s === "" ? "." : s + ":"), I$2(o)))
    for (var nt = 0; nt < o.length; nt++) {
      tt = o[nt];
      var ot = s + Q$2(tt, nt);
      rt += R$1(tt, i, a, ot, et);
    }
  else if (((ot = A$3(o)), typeof ot == "function"))
    for (o = ot.call(o), nt = 0; !(tt = o.next()).done; )
      (tt = tt.value), (ot = s + Q$2(tt, nt++)), (rt += R$1(tt, i, a, ot, et));
  else if (tt === "object")
    throw (
      ((i = String(o)),
      Error(
        "Objects are not valid as a React child (found: " +
          (i === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : i) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return rt;
}
function S$2(o, i, a) {
  if (o == null) return o;
  var s = [],
    et = 0;
  return (
    R$1(o, s, "", "", function (tt) {
      return i.call(a, tt, et++);
    }),
    s
  );
}
function T$2(o) {
  if (o._status === -1) {
    var i = o._result;
    (i = i()),
      i.then(
        function (a) {
          (o._status === 0 || o._status === -1) && ((o._status = 1), (o._result = a));
        },
        function (a) {
          (o._status === 0 || o._status === -1) && ((o._status = 2), (o._result = a));
        }
      ),
      o._status === -1 && ((o._status = 0), (o._result = i));
  }
  if (o._status === 1) return o._result.default;
  throw o._result;
}
var U$2 = { current: null },
  V$2 = { transition: null },
  W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
react_production_min.Children = {
  map: S$2,
  forEach: function (o, i, a) {
    S$2(
      o,
      function () {
        i.apply(this, arguments);
      },
      a
    );
  },
  count: function (o) {
    var i = 0;
    return (
      S$2(o, function () {
        i++;
      }),
      i
    );
  },
  toArray: function (o) {
    return (
      S$2(o, function (i) {
        return i;
      }) || []
    );
  },
  only: function (o) {
    if (!O$1(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  },
};
react_production_min.Component = E$2;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function (o, i, a) {
  if (o == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
  var s = C$1({}, o.props),
    et = o.key,
    tt = o.ref,
    rt = o._owner;
  if (i != null) {
    if (
      (i.ref !== void 0 && ((tt = i.ref), (rt = K$2.current)),
      i.key !== void 0 && (et = "" + i.key),
      o.type && o.type.defaultProps)
    )
      var nt = o.type.defaultProps;
    for (ot in i)
      J$1.call(i, ot) && !L$2.hasOwnProperty(ot) && (s[ot] = i[ot] === void 0 && nt !== void 0 ? nt[ot] : i[ot]);
  }
  var ot = arguments.length - 2;
  if (ot === 1) s.children = a;
  else if (1 < ot) {
    nt = Array(ot);
    for (var it = 0; it < ot; it++) nt[it] = arguments[it + 2];
    s.children = nt;
  }
  return { $$typeof: l$2, type: o.type, key: et, ref: tt, props: s, _owner: rt };
};
react_production_min.createContext = function (o) {
  return (
    (o = {
      $$typeof: u,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (o.Provider = { $$typeof: t$1, _context: o }),
    (o.Consumer = o)
  );
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function (o) {
  var i = M$2.bind(null, o);
  return (i.type = o), i;
};
react_production_min.createRef = function () {
  return { current: null };
};
react_production_min.forwardRef = function (o) {
  return { $$typeof: v$3, render: o };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function (o) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: o }, _init: T$2 };
};
react_production_min.memo = function (o, i) {
  return { $$typeof: x$2, type: o, compare: i === void 0 ? null : i };
};
react_production_min.startTransition = function (o) {
  var i = V$2.transition;
  V$2.transition = {};
  try {
    o();
  } finally {
    V$2.transition = i;
  }
};
react_production_min.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function (o, i) {
  return U$2.current.useCallback(o, i);
};
react_production_min.useContext = function (o) {
  return U$2.current.useContext(o);
};
react_production_min.useDebugValue = function () {};
react_production_min.useDeferredValue = function (o) {
  return U$2.current.useDeferredValue(o);
};
react_production_min.useEffect = function (o, i) {
  return U$2.current.useEffect(o, i);
};
react_production_min.useId = function () {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function (o, i, a) {
  return U$2.current.useImperativeHandle(o, i, a);
};
react_production_min.useInsertionEffect = function (o, i) {
  return U$2.current.useInsertionEffect(o, i);
};
react_production_min.useLayoutEffect = function (o, i) {
  return U$2.current.useLayoutEffect(o, i);
};
react_production_min.useMemo = function (o, i) {
  return U$2.current.useMemo(o, i);
};
react_production_min.useReducer = function (o, i, a) {
  return U$2.current.useReducer(o, i, a);
};
react_production_min.useRef = function (o) {
  return U$2.current.useRef(o);
};
react_production_min.useState = function (o) {
  return U$2.current.useState(o);
};
react_production_min.useSyncExternalStore = function (o, i, a) {
  return U$2.current.useSyncExternalStore(o, i, a);
};
react_production_min.useTransition = function () {
  return U$2.current.useTransition();
};
react_production_min.version = "18.2.0";
(function (o) {
  o.exports = react_production_min;
})(react);
const React = getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f$1 = reactExports,
  k$2 = Symbol.for("react.element"),
  l$1 = Symbol.for("react.fragment"),
  m$2 = Object.prototype.hasOwnProperty,
  n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q$2(o, i, a) {
  var s,
    et = {},
    tt = null,
    rt = null;
  a !== void 0 && (tt = "" + a), i.key !== void 0 && (tt = "" + i.key), i.ref !== void 0 && (rt = i.ref);
  for (s in i) m$2.call(i, s) && !p$2.hasOwnProperty(s) && (et[s] = i[s]);
  if (o && o.defaultProps) for (s in ((i = o.defaultProps), i)) et[s] === void 0 && (et[s] = i[s]);
  return { $$typeof: k$2, type: o, key: tt, ref: rt, props: et, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
(function (o) {
  o.exports = reactJsxRuntime_production_min;
})(jsxRuntime);
var client = {},
  reactDomExports = {},
  reactDom = {
    get exports() {
      return reactDomExports;
    },
    set exports(o) {
      reactDomExports = o;
    },
  },
  reactDom_production_min = {},
  schedulerExports = {},
  scheduler = {
    get exports() {
      return schedulerExports;
    },
    set exports(o) {
      schedulerExports = o;
    },
  },
  scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (o) {
  function i(mt, $t) {
    var Et = mt.length;
    mt.push($t);
    e: for (; 0 < Et; ) {
      var Ot = (Et - 1) >>> 1,
        St = mt[Ot];
      if (0 < et(St, $t)) (mt[Ot] = $t), (mt[Et] = St), (Et = Ot);
      else break e;
    }
  }
  function a(mt) {
    return mt.length === 0 ? null : mt[0];
  }
  function s(mt) {
    if (mt.length === 0) return null;
    var $t = mt[0],
      Et = mt.pop();
    if (Et !== $t) {
      mt[0] = Et;
      e: for (var Ot = 0, St = mt.length, wt = St >>> 1; Ot < wt; ) {
        var At = 2 * (Ot + 1) - 1,
          Tt = mt[At],
          dt = At + 1,
          Ft = mt[dt];
        if (0 > et(Tt, Et))
          dt < St && 0 > et(Ft, Tt)
            ? ((mt[Ot] = Ft), (mt[dt] = Et), (Ot = dt))
            : ((mt[Ot] = Tt), (mt[At] = Et), (Ot = At));
        else if (dt < St && 0 > et(Ft, Et)) (mt[Ot] = Ft), (mt[dt] = Et), (Ot = dt);
        else break e;
      }
    }
    return $t;
  }
  function et(mt, $t) {
    var Et = mt.sortIndex - $t.sortIndex;
    return Et !== 0 ? Et : mt.id - $t.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var tt = performance;
    o.unstable_now = function () {
      return tt.now();
    };
  } else {
    var rt = Date,
      nt = rt.now();
    o.unstable_now = function () {
      return rt.now() - nt;
    };
  }
  var ot = [],
    it = [],
    ct = 1,
    st = null,
    ft = 3,
    gt = !1,
    pt = !1,
    vt = !1,
    Lt = typeof setTimeout == "function" ? setTimeout : null,
    at = typeof clearTimeout == "function" ? clearTimeout : null,
    lt = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function ut(mt) {
    for (var $t = a(it); $t !== null; ) {
      if ($t.callback === null) s(it);
      else if ($t.startTime <= mt) s(it), ($t.sortIndex = $t.expirationTime), i(ot, $t);
      else break;
      $t = a(it);
    }
  }
  function ht(mt) {
    if (((vt = !1), ut(mt), !pt))
      if (a(ot) !== null) (pt = !0), yt(kt);
      else {
        var $t = a(it);
        $t !== null && _t(ht, $t.startTime - mt);
      }
  }
  function kt(mt, $t) {
    (pt = !1), vt && ((vt = !1), at(jt), (jt = -1)), (gt = !0);
    var Et = ft;
    try {
      for (ut($t), st = a(ot); st !== null && (!(st.expirationTime > $t) || (mt && !Wt())); ) {
        var Ot = st.callback;
        if (typeof Ot == "function") {
          (st.callback = null), (ft = st.priorityLevel);
          var St = Ot(st.expirationTime <= $t);
          ($t = o.unstable_now()), typeof St == "function" ? (st.callback = St) : st === a(ot) && s(ot), ut($t);
        } else s(ot);
        st = a(ot);
      }
      if (st !== null) var wt = !0;
      else {
        var At = a(it);
        At !== null && _t(ht, At.startTime - $t), (wt = !1);
      }
      return wt;
    } finally {
      (st = null), (ft = Et), (gt = !1);
    }
  }
  var Rt = !1,
    Pt = null,
    jt = -1,
    zt = 5,
    It = -1;
  function Wt() {
    return !(o.unstable_now() - It < zt);
  }
  function Bt() {
    if (Pt !== null) {
      var mt = o.unstable_now();
      It = mt;
      var $t = !0;
      try {
        $t = Pt(!0, mt);
      } finally {
        $t ? Ut() : ((Rt = !1), (Pt = null));
      }
    } else Rt = !1;
  }
  var Ut;
  if (typeof lt == "function")
    Ut = function () {
      lt(Bt);
    };
  else if (typeof MessageChannel < "u") {
    var Gt = new MessageChannel(),
      xt = Gt.port2;
    (Gt.port1.onmessage = Bt),
      (Ut = function () {
        xt.postMessage(null);
      });
  } else
    Ut = function () {
      Lt(Bt, 0);
    };
  function yt(mt) {
    (Pt = mt), Rt || ((Rt = !0), Ut());
  }
  function _t(mt, $t) {
    jt = Lt(function () {
      mt(o.unstable_now());
    }, $t);
  }
  (o.unstable_IdlePriority = 5),
    (o.unstable_ImmediatePriority = 1),
    (o.unstable_LowPriority = 4),
    (o.unstable_NormalPriority = 3),
    (o.unstable_Profiling = null),
    (o.unstable_UserBlockingPriority = 2),
    (o.unstable_cancelCallback = function (mt) {
      mt.callback = null;
    }),
    (o.unstable_continueExecution = function () {
      pt || gt || ((pt = !0), yt(kt));
    }),
    (o.unstable_forceFrameRate = function (mt) {
      0 > mt || 125 < mt
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (zt = 0 < mt ? Math.floor(1e3 / mt) : 5);
    }),
    (o.unstable_getCurrentPriorityLevel = function () {
      return ft;
    }),
    (o.unstable_getFirstCallbackNode = function () {
      return a(ot);
    }),
    (o.unstable_next = function (mt) {
      switch (ft) {
        case 1:
        case 2:
        case 3:
          var $t = 3;
          break;
        default:
          $t = ft;
      }
      var Et = ft;
      ft = $t;
      try {
        return mt();
      } finally {
        ft = Et;
      }
    }),
    (o.unstable_pauseExecution = function () {}),
    (o.unstable_requestPaint = function () {}),
    (o.unstable_runWithPriority = function (mt, $t) {
      switch (mt) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          mt = 3;
      }
      var Et = ft;
      ft = mt;
      try {
        return $t();
      } finally {
        ft = Et;
      }
    }),
    (o.unstable_scheduleCallback = function (mt, $t, Et) {
      var Ot = o.unstable_now();
      switch (
        (typeof Et == "object" && Et !== null
          ? ((Et = Et.delay), (Et = typeof Et == "number" && 0 < Et ? Ot + Et : Ot))
          : (Et = Ot),
        mt)
      ) {
        case 1:
          var St = -1;
          break;
        case 2:
          St = 250;
          break;
        case 5:
          St = 1073741823;
          break;
        case 4:
          St = 1e4;
          break;
        default:
          St = 5e3;
      }
      return (
        (St = Et + St),
        (mt = { id: ct++, callback: $t, priorityLevel: mt, startTime: Et, expirationTime: St, sortIndex: -1 }),
        Et > Ot
          ? ((mt.sortIndex = Et),
            i(it, mt),
            a(ot) === null && mt === a(it) && (vt ? (at(jt), (jt = -1)) : (vt = !0), _t(ht, Et - Ot)))
          : ((mt.sortIndex = St), i(ot, mt), pt || gt || ((pt = !0), yt(kt))),
        mt
      );
    }),
    (o.unstable_shouldYield = Wt),
    (o.unstable_wrapCallback = function (mt) {
      var $t = ft;
      return function () {
        var Et = ft;
        ft = $t;
        try {
          return mt.apply(this, arguments);
        } finally {
          ft = Et;
        }
      };
    });
})(scheduler_production_min);
(function (o) {
  o.exports = scheduler_production_min;
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = reactExports,
  ca = schedulerExports;
function p$1(o) {
  for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, a = 1; a < arguments.length; a++)
    i += "&args[]=" + encodeURIComponent(arguments[a]);
  return (
    "Minified React error #" +
    o +
    "; visit " +
    i +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var da = new Set(),
  ea = {};
function fa(o, i) {
  ha(o, i), ha(o + "Capture", i);
}
function ha(o, i) {
  for (ea[o] = i, o = 0; o < i.length; o++) da.add(i[o]);
}
var ia = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  ja = Object.prototype.hasOwnProperty,
  ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(o) {
  return ja.call(ma, o) ? !0 : ja.call(la, o) ? !1 : ka.test(o) ? (ma[o] = !0) : ((la[o] = !0), !1);
}
function pa(o, i, a, s) {
  if (a !== null && a.type === 0) return !1;
  switch (typeof i) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return s
        ? !1
        : a !== null
        ? !a.acceptsBooleans
        : ((o = o.toLowerCase().slice(0, 5)), o !== "data-" && o !== "aria-");
    default:
      return !1;
  }
}
function qa(o, i, a, s) {
  if (i === null || typeof i > "u" || pa(o, i, a, s)) return !0;
  if (s) return !1;
  if (a !== null)
    switch (a.type) {
      case 3:
        return !i;
      case 4:
        return i === !1;
      case 5:
        return isNaN(i);
      case 6:
        return isNaN(i) || 1 > i;
    }
  return !1;
}
function v$2(o, i, a, s, et, tt, rt) {
  (this.acceptsBooleans = i === 2 || i === 3 || i === 4),
    (this.attributeName = s),
    (this.attributeNamespace = et),
    (this.mustUseProperty = a),
    (this.propertyName = o),
    (this.type = i),
    (this.sanitizeURL = tt),
    (this.removeEmptyString = rt);
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (o) {
    z$2[o] = new v$2(o, 0, !1, o, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (o) {
  var i = o[0];
  z$2[i] = new v$2(i, 1, !1, o[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (o) {
  z$2[o] = new v$2(o, 2, !1, o.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (o) {
  z$2[o] = new v$2(o, 2, !1, o, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (o) {
    z$2[o] = new v$2(o, 3, !1, o.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (o) {
  z$2[o] = new v$2(o, 3, !0, o, null, !1, !1);
});
["capture", "download"].forEach(function (o) {
  z$2[o] = new v$2(o, 4, !1, o, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (o) {
  z$2[o] = new v$2(o, 6, !1, o, null, !1, !1);
});
["rowSpan", "start"].forEach(function (o) {
  z$2[o] = new v$2(o, 5, !1, o.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(o) {
  return o[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (o) {
    var i = o.replace(ra, sa);
    z$2[i] = new v$2(i, 1, !1, o, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (o) {
  var i = o.replace(ra, sa);
  z$2[i] = new v$2(i, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (o) {
  var i = o.replace(ra, sa);
  z$2[i] = new v$2(i, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (o) {
  z$2[o] = new v$2(o, 1, !1, o.toLowerCase(), null, !1, !1);
});
z$2.xlinkHref = new v$2("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (o) {
  z$2[o] = new v$2(o, 1, !1, o.toLowerCase(), null, !0, !0);
});
function ta(o, i, a, s) {
  var et = z$2.hasOwnProperty(i) ? z$2[i] : null;
  (et !== null
    ? et.type !== 0
    : s || !(2 < i.length) || (i[0] !== "o" && i[0] !== "O") || (i[1] !== "n" && i[1] !== "N")) &&
    (qa(i, a, et, s) && (a = null),
    s || et === null
      ? oa(i) && (a === null ? o.removeAttribute(i) : o.setAttribute(i, "" + a))
      : et.mustUseProperty
      ? (o[et.propertyName] = a === null ? (et.type === 3 ? !1 : "") : a)
      : ((i = et.attributeName),
        (s = et.attributeNamespace),
        a === null
          ? o.removeAttribute(i)
          : ((et = et.type),
            (a = et === 3 || (et === 4 && a === !0) ? "" : "" + a),
            s ? o.setAttributeNS(s, i, a) : o.setAttribute(i, a))));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for("react.element"),
  wa = Symbol.for("react.portal"),
  ya = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  Aa = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  Da = Symbol.for("react.forward_ref"),
  Ea = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  Ga = Symbol.for("react.memo"),
  Ha = Symbol.for("react.lazy"),
  Ia = Symbol.for("react.offscreen"),
  Ja = Symbol.iterator;
function Ka(o) {
  return o === null || typeof o != "object"
    ? null
    : ((o = (Ja && o[Ja]) || o["@@iterator"]), typeof o == "function" ? o : null);
}
var A$2 = Object.assign,
  La;
function Ma(o) {
  if (La === void 0)
    try {
      throw Error();
    } catch (a) {
      var i = a.stack.trim().match(/\n( *(at )?)/);
      La = (i && i[1]) || "";
    }
  return (
    `
` +
    La +
    o
  );
}
var Na = !1;
function Oa(o, i) {
  if (!o || Na) return "";
  Na = !0;
  var a = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (i)
      if (
        ((i = function () {
          throw Error();
        }),
        Object.defineProperty(i.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(i, []);
        } catch (it) {
          var s = it;
        }
        Reflect.construct(o, [], i);
      } else {
        try {
          i.call();
        } catch (it) {
          s = it;
        }
        o.call(i.prototype);
      }
    else {
      try {
        throw Error();
      } catch (it) {
        s = it;
      }
      o();
    }
  } catch (it) {
    if (it && s && typeof it.stack == "string") {
      for (
        var et = it.stack.split(`
`),
          tt = s.stack.split(`
`),
          rt = et.length - 1,
          nt = tt.length - 1;
        1 <= rt && 0 <= nt && et[rt] !== tt[nt];

      )
        nt--;
      for (; 1 <= rt && 0 <= nt; rt--, nt--)
        if (et[rt] !== tt[nt]) {
          if (rt !== 1 || nt !== 1)
            do
              if ((rt--, nt--, 0 > nt || et[rt] !== tt[nt])) {
                var ot =
                  `
` + et[rt].replace(" at new ", " at ");
                return (
                  o.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", o.displayName)), ot
                );
              }
            while (1 <= rt && 0 <= nt);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = a);
  }
  return (o = o ? o.displayName || o.name : "") ? Ma(o) : "";
}
function Pa(o) {
  switch (o.tag) {
    case 5:
      return Ma(o.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (o = Oa(o.type, !1)), o;
    case 11:
      return (o = Oa(o.type.render, !1)), o;
    case 1:
      return (o = Oa(o.type, !0)), o;
    default:
      return "";
  }
}
function Qa(o) {
  if (o == null) return null;
  if (typeof o == "function") return o.displayName || o.name || null;
  if (typeof o == "string") return o;
  switch (o) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof o == "object")
    switch (o.$$typeof) {
      case Ca:
        return (o.displayName || "Context") + ".Consumer";
      case Ba:
        return (o._context.displayName || "Context") + ".Provider";
      case Da:
        var i = o.render;
        return (
          (o = o.displayName),
          o || ((o = i.displayName || i.name || ""), (o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef")),
          o
        );
      case Ga:
        return (i = o.displayName || null), i !== null ? i : Qa(o.type) || "Memo";
      case Ha:
        (i = o._payload), (o = o._init);
        try {
          return Qa(o(i));
        } catch {}
    }
  return null;
}
function Ra(o) {
  var i = o.type;
  switch (o.tag) {
    case 24:
      return "Cache";
    case 9:
      return (i.displayName || "Context") + ".Consumer";
    case 10:
      return (i._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (o = i.render),
        (o = o.displayName || o.name || ""),
        i.displayName || (o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return i;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(i);
    case 8:
      return i === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof i == "function") return i.displayName || i.name || null;
      if (typeof i == "string") return i;
  }
  return null;
}
function Sa(o) {
  switch (typeof o) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return o;
    case "object":
      return o;
    default:
      return "";
  }
}
function Ta(o) {
  var i = o.type;
  return (o = o.nodeName) && o.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
}
function Ua(o) {
  var i = Ta(o) ? "checked" : "value",
    a = Object.getOwnPropertyDescriptor(o.constructor.prototype, i),
    s = "" + o[i];
  if (!o.hasOwnProperty(i) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
    var et = a.get,
      tt = a.set;
    return (
      Object.defineProperty(o, i, {
        configurable: !0,
        get: function () {
          return et.call(this);
        },
        set: function (rt) {
          (s = "" + rt), tt.call(this, rt);
        },
      }),
      Object.defineProperty(o, i, { enumerable: a.enumerable }),
      {
        getValue: function () {
          return s;
        },
        setValue: function (rt) {
          s = "" + rt;
        },
        stopTracking: function () {
          (o._valueTracker = null), delete o[i];
        },
      }
    );
  }
}
function Va(o) {
  o._valueTracker || (o._valueTracker = Ua(o));
}
function Wa(o) {
  if (!o) return !1;
  var i = o._valueTracker;
  if (!i) return !0;
  var a = i.getValue(),
    s = "";
  return o && (s = Ta(o) ? (o.checked ? "true" : "false") : o.value), (o = s), o !== a ? (i.setValue(o), !0) : !1;
}
function Xa(o) {
  if (((o = o || (typeof document < "u" ? document : void 0)), typeof o > "u")) return null;
  try {
    return o.activeElement || o.body;
  } catch {
    return o.body;
  }
}
function Ya(o, i) {
  var a = i.checked;
  return A$2({}, i, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: a ?? o._wrapperState.initialChecked,
  });
}
function Za(o, i) {
  var a = i.defaultValue == null ? "" : i.defaultValue,
    s = i.checked != null ? i.checked : i.defaultChecked;
  (a = Sa(i.value != null ? i.value : a)),
    (o._wrapperState = {
      initialChecked: s,
      initialValue: a,
      controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null,
    });
}
function ab(o, i) {
  (i = i.checked), i != null && ta(o, "checked", i, !1);
}
function bb(o, i) {
  ab(o, i);
  var a = Sa(i.value),
    s = i.type;
  if (a != null)
    s === "number"
      ? ((a === 0 && o.value === "") || o.value != a) && (o.value = "" + a)
      : o.value !== "" + a && (o.value = "" + a);
  else if (s === "submit" || s === "reset") {
    o.removeAttribute("value");
    return;
  }
  i.hasOwnProperty("value") ? cb(o, i.type, a) : i.hasOwnProperty("defaultValue") && cb(o, i.type, Sa(i.defaultValue)),
    i.checked == null && i.defaultChecked != null && (o.defaultChecked = !!i.defaultChecked);
}
function db(o, i, a) {
  if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
    var s = i.type;
    if (!((s !== "submit" && s !== "reset") || (i.value !== void 0 && i.value !== null))) return;
    (i = "" + o._wrapperState.initialValue), a || i === o.value || (o.value = i), (o.defaultValue = i);
  }
  (a = o.name),
    a !== "" && (o.name = ""),
    (o.defaultChecked = !!o._wrapperState.initialChecked),
    a !== "" && (o.name = a);
}
function cb(o, i, a) {
  (i !== "number" || Xa(o.ownerDocument) !== o) &&
    (a == null
      ? (o.defaultValue = "" + o._wrapperState.initialValue)
      : o.defaultValue !== "" + a && (o.defaultValue = "" + a));
}
var eb = Array.isArray;
function fb(o, i, a, s) {
  if (((o = o.options), i)) {
    i = {};
    for (var et = 0; et < a.length; et++) i["$" + a[et]] = !0;
    for (a = 0; a < o.length; a++)
      (et = i.hasOwnProperty("$" + o[a].value)),
        o[a].selected !== et && (o[a].selected = et),
        et && s && (o[a].defaultSelected = !0);
  } else {
    for (a = "" + Sa(a), i = null, et = 0; et < o.length; et++) {
      if (o[et].value === a) {
        (o[et].selected = !0), s && (o[et].defaultSelected = !0);
        return;
      }
      i !== null || o[et].disabled || (i = o[et]);
    }
    i !== null && (i.selected = !0);
  }
}
function gb(o, i) {
  if (i.dangerouslySetInnerHTML != null) throw Error(p$1(91));
  return A$2({}, i, { value: void 0, defaultValue: void 0, children: "" + o._wrapperState.initialValue });
}
function hb(o, i) {
  var a = i.value;
  if (a == null) {
    if (((a = i.children), (i = i.defaultValue), a != null)) {
      if (i != null) throw Error(p$1(92));
      if (eb(a)) {
        if (1 < a.length) throw Error(p$1(93));
        a = a[0];
      }
      i = a;
    }
    i == null && (i = ""), (a = i);
  }
  o._wrapperState = { initialValue: Sa(a) };
}
function ib(o, i) {
  var a = Sa(i.value),
    s = Sa(i.defaultValue);
  a != null &&
    ((a = "" + a),
    a !== o.value && (o.value = a),
    i.defaultValue == null && o.defaultValue !== a && (o.defaultValue = a)),
    s != null && (o.defaultValue = "" + s);
}
function jb(o) {
  var i = o.textContent;
  i === o._wrapperState.initialValue && i !== "" && i !== null && (o.value = i);
}
function kb(o) {
  switch (o) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(o, i) {
  return o == null || o === "http://www.w3.org/1999/xhtml"
    ? kb(i)
    : o === "http://www.w3.org/2000/svg" && i === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : o;
}
var mb,
  nb = (function (o) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (i, a, s, et) {
          MSApp.execUnsafeLocalFunction(function () {
            return o(i, a, s, et);
          });
        }
      : o;
  })(function (o, i) {
    if (o.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in o) o.innerHTML = i;
    else {
      for (
        mb = mb || document.createElement("div"),
          mb.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>",
          i = mb.firstChild;
        o.firstChild;

      )
        o.removeChild(o.firstChild);
      for (; i.firstChild; ) o.appendChild(i.firstChild);
    }
  });
function ob(o, i) {
  if (i) {
    var a = o.firstChild;
    if (a && a === o.lastChild && a.nodeType === 3) {
      a.nodeValue = i;
      return;
    }
  }
  o.textContent = i;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function (o) {
  qb.forEach(function (i) {
    (i = i + o.charAt(0).toUpperCase() + o.substring(1)), (pb[i] = pb[o]);
  });
});
function rb(o, i, a) {
  return i == null || typeof i == "boolean" || i === ""
    ? ""
    : a || typeof i != "number" || i === 0 || (pb.hasOwnProperty(o) && pb[o])
    ? ("" + i).trim()
    : i + "px";
}
function sb(o, i) {
  o = o.style;
  for (var a in i)
    if (i.hasOwnProperty(a)) {
      var s = a.indexOf("--") === 0,
        et = rb(a, i[a], s);
      a === "float" && (a = "cssFloat"), s ? o.setProperty(a, et) : (o[a] = et);
    }
}
var tb = A$2(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ub(o, i) {
  if (i) {
    if (tb[o] && (i.children != null || i.dangerouslySetInnerHTML != null)) throw Error(p$1(137, o));
    if (i.dangerouslySetInnerHTML != null) {
      if (i.children != null) throw Error(p$1(60));
      if (typeof i.dangerouslySetInnerHTML != "object" || !("__html" in i.dangerouslySetInnerHTML))
        throw Error(p$1(61));
    }
    if (i.style != null && typeof i.style != "object") throw Error(p$1(62));
  }
}
function vb(o, i) {
  if (o.indexOf("-") === -1) return typeof i.is == "string";
  switch (o) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(o) {
  return (
    (o = o.target || o.srcElement || window),
    o.correspondingUseElement && (o = o.correspondingUseElement),
    o.nodeType === 3 ? o.parentNode : o
  );
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(o) {
  if ((o = Cb(o))) {
    if (typeof yb != "function") throw Error(p$1(280));
    var i = o.stateNode;
    i && ((i = Db(i)), yb(o.stateNode, o.type, i));
  }
}
function Eb(o) {
  zb ? (Ab ? Ab.push(o) : (Ab = [o])) : (zb = o);
}
function Fb() {
  if (zb) {
    var o = zb,
      i = Ab;
    if (((Ab = zb = null), Bb(o), i)) for (o = 0; o < i.length; o++) Bb(i[o]);
  }
}
function Gb(o, i) {
  return o(i);
}
function Hb() {}
var Ib = !1;
function Jb(o, i, a) {
  if (Ib) return o(i, a);
  Ib = !0;
  try {
    return Gb(o, i, a);
  } finally {
    (Ib = !1), (zb !== null || Ab !== null) && (Hb(), Fb());
  }
}
function Kb(o, i) {
  var a = o.stateNode;
  if (a === null) return null;
  var s = Db(a);
  if (s === null) return null;
  a = s[i];
  e: switch (i) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (s = !s.disabled) ||
        ((o = o.type), (s = !(o === "button" || o === "input" || o === "select" || o === "textarea"))),
        (o = !s);
      break e;
    default:
      o = !1;
  }
  if (o) return null;
  if (a && typeof a != "function") throw Error(p$1(231, i, typeof a));
  return a;
}
var Lb = !1;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", {
      get: function () {
        Lb = !0;
      },
    }),
      window.addEventListener("test", Mb, Mb),
      window.removeEventListener("test", Mb, Mb);
  } catch {
    Lb = !1;
  }
function Nb(o, i, a, s, et, tt, rt, nt, ot) {
  var it = Array.prototype.slice.call(arguments, 3);
  try {
    i.apply(a, it);
  } catch (ct) {
    this.onError(ct);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (o) {
      (Ob = !0), (Pb = o);
    },
  };
function Tb(o, i, a, s, et, tt, rt, nt, ot) {
  (Ob = !1), (Pb = null), Nb.apply(Sb, arguments);
}
function Ub(o, i, a, s, et, tt, rt, nt, ot) {
  if ((Tb.apply(this, arguments), Ob)) {
    if (Ob) {
      var it = Pb;
      (Ob = !1), (Pb = null);
    } else throw Error(p$1(198));
    Qb || ((Qb = !0), (Rb = it));
  }
}
function Vb(o) {
  var i = o,
    a = o;
  if (o.alternate) for (; i.return; ) i = i.return;
  else {
    o = i;
    do (i = o), i.flags & 4098 && (a = i.return), (o = i.return);
    while (o);
  }
  return i.tag === 3 ? a : null;
}
function Wb(o) {
  if (o.tag === 13) {
    var i = o.memoizedState;
    if ((i === null && ((o = o.alternate), o !== null && (i = o.memoizedState)), i !== null)) return i.dehydrated;
  }
  return null;
}
function Xb(o) {
  if (Vb(o) !== o) throw Error(p$1(188));
}
function Yb(o) {
  var i = o.alternate;
  if (!i) {
    if (((i = Vb(o)), i === null)) throw Error(p$1(188));
    return i !== o ? null : o;
  }
  for (var a = o, s = i; ; ) {
    var et = a.return;
    if (et === null) break;
    var tt = et.alternate;
    if (tt === null) {
      if (((s = et.return), s !== null)) {
        a = s;
        continue;
      }
      break;
    }
    if (et.child === tt.child) {
      for (tt = et.child; tt; ) {
        if (tt === a) return Xb(et), o;
        if (tt === s) return Xb(et), i;
        tt = tt.sibling;
      }
      throw Error(p$1(188));
    }
    if (a.return !== s.return) (a = et), (s = tt);
    else {
      for (var rt = !1, nt = et.child; nt; ) {
        if (nt === a) {
          (rt = !0), (a = et), (s = tt);
          break;
        }
        if (nt === s) {
          (rt = !0), (s = et), (a = tt);
          break;
        }
        nt = nt.sibling;
      }
      if (!rt) {
        for (nt = tt.child; nt; ) {
          if (nt === a) {
            (rt = !0), (a = tt), (s = et);
            break;
          }
          if (nt === s) {
            (rt = !0), (s = tt), (a = et);
            break;
          }
          nt = nt.sibling;
        }
        if (!rt) throw Error(p$1(189));
      }
    }
    if (a.alternate !== s) throw Error(p$1(190));
  }
  if (a.tag !== 3) throw Error(p$1(188));
  return a.stateNode.current === a ? o : i;
}
function Zb(o) {
  return (o = Yb(o)), o !== null ? $b(o) : null;
}
function $b(o) {
  if (o.tag === 5 || o.tag === 6) return o;
  for (o = o.child; o !== null; ) {
    var i = $b(o);
    if (i !== null) return i;
    o = o.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B$1 = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(o) {
  if (lc && typeof lc.onCommitFiberRoot == "function")
    try {
      lc.onCommitFiberRoot(kc, o, void 0, (o.current.flags & 128) === 128);
    } catch {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(o) {
  return (o >>>= 0), o === 0 ? 32 : (31 - ((pc(o) / qc) | 0)) | 0;
}
var rc = 64,
  sc = 4194304;
function tc(o) {
  switch (o & -o) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return o & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return o & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return o;
  }
}
function uc(o, i) {
  var a = o.pendingLanes;
  if (a === 0) return 0;
  var s = 0,
    et = o.suspendedLanes,
    tt = o.pingedLanes,
    rt = a & 268435455;
  if (rt !== 0) {
    var nt = rt & ~et;
    nt !== 0 ? (s = tc(nt)) : ((tt &= rt), tt !== 0 && (s = tc(tt)));
  } else (rt = a & ~et), rt !== 0 ? (s = tc(rt)) : tt !== 0 && (s = tc(tt));
  if (s === 0) return 0;
  if (
    i !== 0 &&
    i !== s &&
    !(i & et) &&
    ((et = s & -s), (tt = i & -i), et >= tt || (et === 16 && (tt & 4194240) !== 0))
  )
    return i;
  if ((s & 4 && (s |= a & 16), (i = o.entangledLanes), i !== 0))
    for (o = o.entanglements, i &= s; 0 < i; ) (a = 31 - oc(i)), (et = 1 << a), (s |= o[a]), (i &= ~et);
  return s;
}
function vc(o, i) {
  switch (o) {
    case 1:
    case 2:
    case 4:
      return i + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return i + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(o, i) {
  for (var a = o.suspendedLanes, s = o.pingedLanes, et = o.expirationTimes, tt = o.pendingLanes; 0 < tt; ) {
    var rt = 31 - oc(tt),
      nt = 1 << rt,
      ot = et[rt];
    ot === -1 ? (!(nt & a) || nt & s) && (et[rt] = vc(nt, i)) : ot <= i && (o.expiredLanes |= nt), (tt &= ~nt);
  }
}
function xc(o) {
  return (o = o.pendingLanes & -1073741825), o !== 0 ? o : o & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var o = rc;
  return (rc <<= 1), !(rc & 4194240) && (rc = 64), o;
}
function zc(o) {
  for (var i = [], a = 0; 31 > a; a++) i.push(o);
  return i;
}
function Ac(o, i, a) {
  (o.pendingLanes |= i),
    i !== 536870912 && ((o.suspendedLanes = 0), (o.pingedLanes = 0)),
    (o = o.eventTimes),
    (i = 31 - oc(i)),
    (o[i] = a);
}
function Bc(o, i) {
  var a = o.pendingLanes & ~i;
  (o.pendingLanes = i),
    (o.suspendedLanes = 0),
    (o.pingedLanes = 0),
    (o.expiredLanes &= i),
    (o.mutableReadLanes &= i),
    (o.entangledLanes &= i),
    (i = o.entanglements);
  var s = o.eventTimes;
  for (o = o.expirationTimes; 0 < a; ) {
    var et = 31 - oc(a),
      tt = 1 << et;
    (i[et] = 0), (s[et] = -1), (o[et] = -1), (a &= ~tt);
  }
}
function Cc(o, i) {
  var a = (o.entangledLanes |= i);
  for (o = o.entanglements; a; ) {
    var s = 31 - oc(a),
      et = 1 << s;
    (et & i) | (o[s] & i) && (o[s] |= i), (a &= ~et);
  }
}
var C = 0;
function Dc(o) {
  return (o &= -o), 1 < o ? (4 < o ? (o & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sc(o, i) {
  switch (o) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(i.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(i.pointerId);
  }
}
function Tc(o, i, a, s, et, tt) {
  return o === null || o.nativeEvent !== tt
    ? ((o = { blockedOn: i, domEventName: a, eventSystemFlags: s, nativeEvent: tt, targetContainers: [et] }),
      i !== null && ((i = Cb(i)), i !== null && Fc(i)),
      o)
    : ((o.eventSystemFlags |= s), (i = o.targetContainers), et !== null && i.indexOf(et) === -1 && i.push(et), o);
}
function Uc(o, i, a, s, et) {
  switch (i) {
    case "focusin":
      return (Lc = Tc(Lc, o, i, a, s, et)), !0;
    case "dragenter":
      return (Mc = Tc(Mc, o, i, a, s, et)), !0;
    case "mouseover":
      return (Nc = Tc(Nc, o, i, a, s, et)), !0;
    case "pointerover":
      var tt = et.pointerId;
      return Oc.set(tt, Tc(Oc.get(tt) || null, o, i, a, s, et)), !0;
    case "gotpointercapture":
      return (tt = et.pointerId), Pc.set(tt, Tc(Pc.get(tt) || null, o, i, a, s, et)), !0;
  }
  return !1;
}
function Vc(o) {
  var i = Wc(o.target);
  if (i !== null) {
    var a = Vb(i);
    if (a !== null) {
      if (((i = a.tag), i === 13)) {
        if (((i = Wb(a)), i !== null)) {
          (o.blockedOn = i),
            Ic(o.priority, function () {
              Gc(a);
            });
          return;
        }
      } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
        o.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
        return;
      }
    }
  }
  o.blockedOn = null;
}
function Xc(o) {
  if (o.blockedOn !== null) return !1;
  for (var i = o.targetContainers; 0 < i.length; ) {
    var a = Yc(o.domEventName, o.eventSystemFlags, i[0], o.nativeEvent);
    if (a === null) {
      a = o.nativeEvent;
      var s = new a.constructor(a.type, a);
      (wb = s), a.target.dispatchEvent(s), (wb = null);
    } else return (i = Cb(a)), i !== null && Fc(i), (o.blockedOn = a), !1;
    i.shift();
  }
  return !0;
}
function Zc(o, i, a) {
  Xc(o) && a.delete(i);
}
function $c() {
  (Jc = !1),
    Lc !== null && Xc(Lc) && (Lc = null),
    Mc !== null && Xc(Mc) && (Mc = null),
    Nc !== null && Xc(Nc) && (Nc = null),
    Oc.forEach(Zc),
    Pc.forEach(Zc);
}
function ad(o, i) {
  o.blockedOn === i &&
    ((o.blockedOn = null), Jc || ((Jc = !0), ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(o) {
  function i(et) {
    return ad(et, o);
  }
  if (0 < Kc.length) {
    ad(Kc[0], o);
    for (var a = 1; a < Kc.length; a++) {
      var s = Kc[a];
      s.blockedOn === o && (s.blockedOn = null);
    }
  }
  for (
    Lc !== null && ad(Lc, o), Mc !== null && ad(Mc, o), Nc !== null && ad(Nc, o), Oc.forEach(i), Pc.forEach(i), a = 0;
    a < Qc.length;
    a++
  )
    (s = Qc[a]), s.blockedOn === o && (s.blockedOn = null);
  for (; 0 < Qc.length && ((a = Qc[0]), a.blockedOn === null); ) Vc(a), a.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(o, i, a, s) {
  var et = C,
    tt = cd.transition;
  cd.transition = null;
  try {
    (C = 1), fd(o, i, a, s);
  } finally {
    (C = et), (cd.transition = tt);
  }
}
function gd(o, i, a, s) {
  var et = C,
    tt = cd.transition;
  cd.transition = null;
  try {
    (C = 4), fd(o, i, a, s);
  } finally {
    (C = et), (cd.transition = tt);
  }
}
function fd(o, i, a, s) {
  if (dd) {
    var et = Yc(o, i, a, s);
    if (et === null) hd(o, i, s, id, a), Sc(o, s);
    else if (Uc(et, o, i, a, s)) s.stopPropagation();
    else if ((Sc(o, s), i & 4 && -1 < Rc.indexOf(o))) {
      for (; et !== null; ) {
        var tt = Cb(et);
        if ((tt !== null && Ec(tt), (tt = Yc(o, i, a, s)), tt === null && hd(o, i, s, id, a), tt === et)) break;
        et = tt;
      }
      et !== null && s.stopPropagation();
    } else hd(o, i, s, null, a);
  }
}
var id = null;
function Yc(o, i, a, s) {
  if (((id = null), (o = xb(s)), (o = Wc(o)), o !== null))
    if (((i = Vb(o)), i === null)) o = null;
    else if (((a = i.tag), a === 13)) {
      if (((o = Wb(i)), o !== null)) return o;
      o = null;
    } else if (a === 3) {
      if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
      o = null;
    } else i !== o && (o = null);
  return (id = o), null;
}
function jd(o) {
  switch (o) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var o,
    i = ld,
    a = i.length,
    s,
    et = "value" in kd ? kd.value : kd.textContent,
    tt = et.length;
  for (o = 0; o < a && i[o] === et[o]; o++);
  var rt = a - o;
  for (s = 1; s <= rt && i[a - s] === et[tt - s]; s++);
  return (md = et.slice(o, 1 < s ? 1 - s : void 0));
}
function od(o) {
  var i = o.keyCode;
  return (
    "charCode" in o ? ((o = o.charCode), o === 0 && i === 13 && (o = 13)) : (o = i),
    o === 10 && (o = 13),
    32 <= o || o === 13 ? o : 0
  );
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(o) {
  function i(a, s, et, tt, rt) {
    (this._reactName = a),
      (this._targetInst = et),
      (this.type = s),
      (this.nativeEvent = tt),
      (this.target = rt),
      (this.currentTarget = null);
    for (var nt in o) o.hasOwnProperty(nt) && ((a = o[nt]), (this[nt] = a ? a(tt) : tt[nt]));
    return (
      (this.isDefaultPrevented = (tt.defaultPrevented != null ? tt.defaultPrevented : tt.returnValue === !1) ? pd : qd),
      (this.isPropagationStopped = qd),
      this
    );
  }
  return (
    A$2(i.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a &&
          (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a &&
          (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd,
    }),
    i
  );
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (o) {
      return o.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = rd(sd),
  ud = A$2({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A$2({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (o) {
      return o.relatedTarget === void 0
        ? o.fromElement === o.srcElement
          ? o.toElement
          : o.fromElement
        : o.relatedTarget;
    },
    movementX: function (o) {
      return "movementX" in o
        ? o.movementX
        : (o !== yd &&
            (yd && o.type === "mousemove"
              ? ((wd = o.screenX - yd.screenX), (xd = o.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = o)),
          wd);
    },
    movementY: function (o) {
      return "movementY" in o ? o.movementY : xd;
    },
  }),
  Bd = rd(Ad),
  Cd = A$2({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = A$2({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = A$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = A$2({}, sd, {
    clipboardData: function (o) {
      return "clipboardData" in o ? o.clipboardData : window.clipboardData;
    },
  }),
  Jd = rd(Id),
  Kd = A$2({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(o) {
  var i = this.nativeEvent;
  return i.getModifierState ? i.getModifierState(o) : (o = Od[o]) ? !!i[o] : !1;
}
function zd() {
  return Pd;
}
var Qd = A$2({}, ud, {
    key: function (o) {
      if (o.key) {
        var i = Md[o.key] || o.key;
        if (i !== "Unidentified") return i;
      }
      return o.type === "keypress"
        ? ((o = od(o)), o === 13 ? "Enter" : String.fromCharCode(o))
        : o.type === "keydown" || o.type === "keyup"
        ? Nd[o.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (o) {
      return o.type === "keypress" ? od(o) : 0;
    },
    keyCode: function (o) {
      return o.type === "keydown" || o.type === "keyup" ? o.keyCode : 0;
    },
    which: function (o) {
      return o.type === "keypress" ? od(o) : o.type === "keydown" || o.type === "keyup" ? o.keyCode : 0;
    },
  }),
  Rd = rd(Qd),
  Sd = A$2({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Td = rd(Sd),
  Ud = A$2({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd,
  }),
  Vd = rd(Ud),
  Wd = A$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = A$2({}, Ad, {
    deltaX: function (o) {
      return "deltaX" in o ? o.deltaX : "wheelDeltaX" in o ? -o.wheelDeltaX : 0;
    },
    deltaY: function (o) {
      return "deltaY" in o ? o.deltaY : "wheelDeltaY" in o ? -o.wheelDeltaY : "wheelDelta" in o ? -o.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae$1 = ia && "CompositionEvent" in window,
  be$1 = null;
ia && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia && "TextEvent" in window && !be$1,
  de$1 = ia && (!ae$1 || (be$1 && 8 < be$1 && 11 >= be$1)),
  ee$1 = String.fromCharCode(32),
  fe$1 = !1;
function ge$1(o, i) {
  switch (o) {
    case "keyup":
      return $d.indexOf(i.keyCode) !== -1;
    case "keydown":
      return i.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function he$1(o) {
  return (o = o.detail), typeof o == "object" && "data" in o ? o.data : null;
}
var ie$1 = !1;
function je$1(o, i) {
  switch (o) {
    case "compositionend":
      return he$1(i);
    case "keypress":
      return i.which !== 32 ? null : ((fe$1 = !0), ee$1);
    case "textInput":
      return (o = i.data), o === ee$1 && fe$1 ? null : o;
    default:
      return null;
  }
}
function ke$1(o, i) {
  if (ie$1)
    return o === "compositionend" || (!ae$1 && ge$1(o, i)) ? ((o = nd()), (md = ld = kd = null), (ie$1 = !1), o) : null;
  switch (o) {
    case "paste":
      return null;
    case "keypress":
      if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
        if (i.char && 1 < i.char.length) return i.char;
        if (i.which) return String.fromCharCode(i.which);
      }
      return null;
    case "compositionend":
      return de$1 && i.locale !== "ko" ? null : i.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function me$1(o) {
  var i = o && o.nodeName && o.nodeName.toLowerCase();
  return i === "input" ? !!le[o.type] : i === "textarea";
}
function ne$1(o, i, a, s) {
  Eb(s),
    (i = oe$1(i, "onChange")),
    0 < i.length && ((a = new td("onChange", "change", null, a, s)), o.push({ event: a, listeners: i }));
}
var pe$1 = null,
  qe$1 = null;
function re$1(o) {
  se$1(o, 0);
}
function te$1(o) {
  var i = ue$1(o);
  if (Wa(i)) return o;
}
function ve$1(o, i) {
  if (o === "change") return i;
}
var we$1 = !1;
if (ia) {
  var xe$1;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze$1 = document.createElement("div");
      ze$1.setAttribute("oninput", "return;"), (ye = typeof ze$1.oninput == "function");
    }
    xe$1 = ye;
  } else xe$1 = !1;
  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), (qe$1 = pe$1 = null));
}
function Be$1(o) {
  if (o.propertyName === "value" && te$1(qe$1)) {
    var i = [];
    ne$1(i, qe$1, o, xb(o)), Jb(re$1, i);
  }
}
function Ce$1(o, i, a) {
  o === "focusin"
    ? (Ae$1(), (pe$1 = i), (qe$1 = a), pe$1.attachEvent("onpropertychange", Be$1))
    : o === "focusout" && Ae$1();
}
function De$1(o) {
  if (o === "selectionchange" || o === "keyup" || o === "keydown") return te$1(qe$1);
}
function Ee$1(o, i) {
  if (o === "click") return te$1(i);
}
function Fe(o, i) {
  if (o === "input" || o === "change") return te$1(i);
}
function Ge$1(o, i) {
  return (o === i && (o !== 0 || 1 / o === 1 / i)) || (o !== o && i !== i);
}
var He$1 = typeof Object.is == "function" ? Object.is : Ge$1;
function Ie(o, i) {
  if (He$1(o, i)) return !0;
  if (typeof o != "object" || o === null || typeof i != "object" || i === null) return !1;
  var a = Object.keys(o),
    s = Object.keys(i);
  if (a.length !== s.length) return !1;
  for (s = 0; s < a.length; s++) {
    var et = a[s];
    if (!ja.call(i, et) || !He$1(o[et], i[et])) return !1;
  }
  return !0;
}
function Je(o) {
  for (; o && o.firstChild; ) o = o.firstChild;
  return o;
}
function Ke(o, i) {
  var a = Je(o);
  o = 0;
  for (var s; a; ) {
    if (a.nodeType === 3) {
      if (((s = o + a.textContent.length), o <= i && s >= i)) return { node: a, offset: i - o };
      o = s;
    }
    e: {
      for (; a; ) {
        if (a.nextSibling) {
          a = a.nextSibling;
          break e;
        }
        a = a.parentNode;
      }
      a = void 0;
    }
    a = Je(a);
  }
}
function Le(o, i) {
  return o && i
    ? o === i
      ? !0
      : o && o.nodeType === 3
      ? !1
      : i && i.nodeType === 3
      ? Le(o, i.parentNode)
      : "contains" in o
      ? o.contains(i)
      : o.compareDocumentPosition
      ? !!(o.compareDocumentPosition(i) & 16)
      : !1
    : !1;
}
function Me$1() {
  for (var o = window, i = Xa(); i instanceof o.HTMLIFrameElement; ) {
    try {
      var a = typeof i.contentWindow.location.href == "string";
    } catch {
      a = !1;
    }
    if (a) o = i.contentWindow;
    else break;
    i = Xa(o.document);
  }
  return i;
}
function Ne$1(o) {
  var i = o && o.nodeName && o.nodeName.toLowerCase();
  return (
    i &&
    ((i === "input" &&
      (o.type === "text" || o.type === "search" || o.type === "tel" || o.type === "url" || o.type === "password")) ||
      i === "textarea" ||
      o.contentEditable === "true")
  );
}
function Oe(o) {
  var i = Me$1(),
    a = o.focusedElem,
    s = o.selectionRange;
  if (i !== a && a && a.ownerDocument && Le(a.ownerDocument.documentElement, a)) {
    if (s !== null && Ne$1(a)) {
      if (((i = s.start), (o = s.end), o === void 0 && (o = i), "selectionStart" in a))
        (a.selectionStart = i), (a.selectionEnd = Math.min(o, a.value.length));
      else if (((o = ((i = a.ownerDocument || document) && i.defaultView) || window), o.getSelection)) {
        o = o.getSelection();
        var et = a.textContent.length,
          tt = Math.min(s.start, et);
        (s = s.end === void 0 ? tt : Math.min(s.end, et)),
          !o.extend && tt > s && ((et = s), (s = tt), (tt = et)),
          (et = Ke(a, tt));
        var rt = Ke(a, s);
        et &&
          rt &&
          (o.rangeCount !== 1 ||
            o.anchorNode !== et.node ||
            o.anchorOffset !== et.offset ||
            o.focusNode !== rt.node ||
            o.focusOffset !== rt.offset) &&
          ((i = i.createRange()),
          i.setStart(et.node, et.offset),
          o.removeAllRanges(),
          tt > s ? (o.addRange(i), o.extend(rt.node, rt.offset)) : (i.setEnd(rt.node, rt.offset), o.addRange(i)));
      }
    }
    for (i = [], o = a; (o = o.parentNode); )
      o.nodeType === 1 && i.push({ element: o, left: o.scrollLeft, top: o.scrollTop });
    for (typeof a.focus == "function" && a.focus(), a = 0; a < i.length; a++)
      (o = i[a]), (o.element.scrollLeft = o.left), (o.element.scrollTop = o.top);
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
  Qe = null,
  Re$1 = null,
  Se$1 = null,
  Te$1 = !1;
function Ue(o, i, a) {
  var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
  Te$1 ||
    Qe == null ||
    Qe !== Xa(s) ||
    ((s = Qe),
    "selectionStart" in s && Ne$1(s)
      ? (s = { start: s.selectionStart, end: s.selectionEnd })
      : ((s = ((s.ownerDocument && s.ownerDocument.defaultView) || window).getSelection()),
        (s = {
          anchorNode: s.anchorNode,
          anchorOffset: s.anchorOffset,
          focusNode: s.focusNode,
          focusOffset: s.focusOffset,
        })),
    (Se$1 && Ie(Se$1, s)) ||
      ((Se$1 = s),
      (s = oe$1(Re$1, "onSelect")),
      0 < s.length &&
        ((i = new td("onSelect", "select", null, i, a)), o.push({ event: i, listeners: s }), (i.target = Qe))));
}
function Ve$1(o, i) {
  var a = {};
  return (a[o.toLowerCase()] = i.toLowerCase()), (a["Webkit" + o] = "webkit" + i), (a["Moz" + o] = "moz" + i), a;
}
var We = {
    animationend: Ve$1("Animation", "AnimationEnd"),
    animationiteration: Ve$1("Animation", "AnimationIteration"),
    animationstart: Ve$1("Animation", "AnimationStart"),
    transitionend: Ve$1("Transition", "TransitionEnd"),
  },
  Xe$1 = {},
  Ye$1 = {};
ia &&
  ((Ye$1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation),
  "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(o) {
  if (Xe$1[o]) return Xe$1[o];
  if (!We[o]) return o;
  var i = We[o],
    a;
  for (a in i) if (i.hasOwnProperty(a) && a in Ye$1) return (Xe$1[o] = i[a]);
  return o;
}
var $e = Ze("animationend"),
  af = Ze("animationiteration"),
  bf = Ze("animationstart"),
  cf = Ze("transitionend"),
  df = new Map(),
  ef =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ff(o, i) {
  df.set(o, i), fa(i, [o]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(o, i, a) {
  var s = o.type || "unknown-event";
  (o.currentTarget = a), Ub(s, i, void 0, o), (o.currentTarget = null);
}
function se$1(o, i) {
  i = (i & 4) !== 0;
  for (var a = 0; a < o.length; a++) {
    var s = o[a],
      et = s.event;
    s = s.listeners;
    e: {
      var tt = void 0;
      if (i)
        for (var rt = s.length - 1; 0 <= rt; rt--) {
          var nt = s[rt],
            ot = nt.instance,
            it = nt.currentTarget;
          if (((nt = nt.listener), ot !== tt && et.isPropagationStopped())) break e;
          nf(et, nt, it), (tt = ot);
        }
      else
        for (rt = 0; rt < s.length; rt++) {
          if (
            ((nt = s[rt]),
            (ot = nt.instance),
            (it = nt.currentTarget),
            (nt = nt.listener),
            ot !== tt && et.isPropagationStopped())
          )
            break e;
          nf(et, nt, it), (tt = ot);
        }
    }
  }
  if (Qb) throw ((o = Rb), (Qb = !1), (Rb = null), o);
}
function D(o, i) {
  var a = i[of];
  a === void 0 && (a = i[of] = new Set());
  var s = o + "__bubble";
  a.has(s) || (pf(i, o, 2, !1), a.add(s));
}
function qf(o, i, a) {
  var s = 0;
  i && (s |= 4), pf(a, o, s, i);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(o) {
  if (!o[rf]) {
    (o[rf] = !0),
      da.forEach(function (a) {
        a !== "selectionchange" && (mf.has(a) || qf(a, !1, o), qf(a, !0, o));
      });
    var i = o.nodeType === 9 ? o : o.ownerDocument;
    i === null || i[rf] || ((i[rf] = !0), qf("selectionchange", !1, i));
  }
}
function pf(o, i, a, s) {
  switch (jd(i)) {
    case 1:
      var et = ed;
      break;
    case 4:
      et = gd;
      break;
    default:
      et = fd;
  }
  (a = et.bind(null, i, a, o)),
    (et = void 0),
    !Lb || (i !== "touchstart" && i !== "touchmove" && i !== "wheel") || (et = !0),
    s
      ? et !== void 0
        ? o.addEventListener(i, a, { capture: !0, passive: et })
        : o.addEventListener(i, a, !0)
      : et !== void 0
      ? o.addEventListener(i, a, { passive: et })
      : o.addEventListener(i, a, !1);
}
function hd(o, i, a, s, et) {
  var tt = s;
  if (!(i & 1) && !(i & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var rt = s.tag;
      if (rt === 3 || rt === 4) {
        var nt = s.stateNode.containerInfo;
        if (nt === et || (nt.nodeType === 8 && nt.parentNode === et)) break;
        if (rt === 4)
          for (rt = s.return; rt !== null; ) {
            var ot = rt.tag;
            if (
              (ot === 3 || ot === 4) &&
              ((ot = rt.stateNode.containerInfo), ot === et || (ot.nodeType === 8 && ot.parentNode === et))
            )
              return;
            rt = rt.return;
          }
        for (; nt !== null; ) {
          if (((rt = Wc(nt)), rt === null)) return;
          if (((ot = rt.tag), ot === 5 || ot === 6)) {
            s = tt = rt;
            continue e;
          }
          nt = nt.parentNode;
        }
      }
      s = s.return;
    }
  Jb(function () {
    var it = tt,
      ct = xb(a),
      st = [];
    e: {
      var ft = df.get(o);
      if (ft !== void 0) {
        var gt = td,
          pt = o;
        switch (o) {
          case "keypress":
            if (od(a) === 0) break e;
          case "keydown":
          case "keyup":
            gt = Rd;
            break;
          case "focusin":
            (pt = "focus"), (gt = Fd);
            break;
          case "focusout":
            (pt = "blur"), (gt = Fd);
            break;
          case "beforeblur":
          case "afterblur":
            gt = Fd;
            break;
          case "click":
            if (a.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            gt = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            gt = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            gt = Vd;
            break;
          case $e:
          case af:
          case bf:
            gt = Hd;
            break;
          case cf:
            gt = Xd;
            break;
          case "scroll":
            gt = vd;
            break;
          case "wheel":
            gt = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            gt = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            gt = Td;
        }
        var vt = (i & 4) !== 0,
          Lt = !vt && o === "scroll",
          at = vt ? (ft !== null ? ft + "Capture" : null) : ft;
        vt = [];
        for (var lt = it, ut; lt !== null; ) {
          ut = lt;
          var ht = ut.stateNode;
          if (
            (ut.tag === 5 &&
              ht !== null &&
              ((ut = ht), at !== null && ((ht = Kb(lt, at)), ht != null && vt.push(tf(lt, ht, ut)))),
            Lt)
          )
            break;
          lt = lt.return;
        }
        0 < vt.length && ((ft = new gt(ft, pt, null, a, ct)), st.push({ event: ft, listeners: vt }));
      }
    }
    if (!(i & 7)) {
      e: {
        if (
          ((ft = o === "mouseover" || o === "pointerover"),
          (gt = o === "mouseout" || o === "pointerout"),
          ft && a !== wb && (pt = a.relatedTarget || a.fromElement) && (Wc(pt) || pt[uf]))
        )
          break e;
        if (
          (gt || ft) &&
          ((ft = ct.window === ct ? ct : (ft = ct.ownerDocument) ? ft.defaultView || ft.parentWindow : window),
          gt
            ? ((pt = a.relatedTarget || a.toElement),
              (gt = it),
              (pt = pt ? Wc(pt) : null),
              pt !== null && ((Lt = Vb(pt)), pt !== Lt || (pt.tag !== 5 && pt.tag !== 6)) && (pt = null))
            : ((gt = null), (pt = it)),
          gt !== pt)
        ) {
          if (
            ((vt = Bd),
            (ht = "onMouseLeave"),
            (at = "onMouseEnter"),
            (lt = "mouse"),
            (o === "pointerout" || o === "pointerover") &&
              ((vt = Td), (ht = "onPointerLeave"), (at = "onPointerEnter"), (lt = "pointer")),
            (Lt = gt == null ? ft : ue$1(gt)),
            (ut = pt == null ? ft : ue$1(pt)),
            (ft = new vt(ht, lt + "leave", gt, a, ct)),
            (ft.target = Lt),
            (ft.relatedTarget = ut),
            (ht = null),
            Wc(ct) === it &&
              ((vt = new vt(at, lt + "enter", pt, a, ct)), (vt.target = ut), (vt.relatedTarget = Lt), (ht = vt)),
            (Lt = ht),
            gt && pt)
          )
            t: {
              for (vt = gt, at = pt, lt = 0, ut = vt; ut; ut = vf(ut)) lt++;
              for (ut = 0, ht = at; ht; ht = vf(ht)) ut++;
              for (; 0 < lt - ut; ) (vt = vf(vt)), lt--;
              for (; 0 < ut - lt; ) (at = vf(at)), ut--;
              for (; lt--; ) {
                if (vt === at || (at !== null && vt === at.alternate)) break t;
                (vt = vf(vt)), (at = vf(at));
              }
              vt = null;
            }
          else vt = null;
          gt !== null && wf(st, ft, gt, vt, !1), pt !== null && Lt !== null && wf(st, Lt, pt, vt, !0);
        }
      }
      e: {
        if (
          ((ft = it ? ue$1(it) : window),
          (gt = ft.nodeName && ft.nodeName.toLowerCase()),
          gt === "select" || (gt === "input" && ft.type === "file"))
        )
          var kt = ve$1;
        else if (me$1(ft))
          if (we$1) kt = Fe;
          else {
            kt = De$1;
            var Rt = Ce$1;
          }
        else
          (gt = ft.nodeName) &&
            gt.toLowerCase() === "input" &&
            (ft.type === "checkbox" || ft.type === "radio") &&
            (kt = Ee$1);
        if (kt && (kt = kt(o, it))) {
          ne$1(st, kt, a, ct);
          break e;
        }
        Rt && Rt(o, ft, it),
          o === "focusout" &&
            (Rt = ft._wrapperState) &&
            Rt.controlled &&
            ft.type === "number" &&
            cb(ft, "number", ft.value);
      }
      switch (((Rt = it ? ue$1(it) : window), o)) {
        case "focusin":
          (me$1(Rt) || Rt.contentEditable === "true") && ((Qe = Rt), (Re$1 = it), (Se$1 = null));
          break;
        case "focusout":
          Se$1 = Re$1 = Qe = null;
          break;
        case "mousedown":
          Te$1 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Te$1 = !1), Ue(st, a, ct);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(st, a, ct);
      }
      var Pt;
      if (ae$1)
        e: {
          switch (o) {
            case "compositionstart":
              var jt = "onCompositionStart";
              break e;
            case "compositionend":
              jt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              jt = "onCompositionUpdate";
              break e;
          }
          jt = void 0;
        }
      else
        ie$1
          ? ge$1(o, a) && (jt = "onCompositionEnd")
          : o === "keydown" && a.keyCode === 229 && (jt = "onCompositionStart");
      jt &&
        (de$1 &&
          a.locale !== "ko" &&
          (ie$1 || jt !== "onCompositionStart"
            ? jt === "onCompositionEnd" && ie$1 && (Pt = nd())
            : ((kd = ct), (ld = "value" in kd ? kd.value : kd.textContent), (ie$1 = !0))),
        (Rt = oe$1(it, jt)),
        0 < Rt.length &&
          ((jt = new Ld(jt, o, null, a, ct)),
          st.push({ event: jt, listeners: Rt }),
          Pt ? (jt.data = Pt) : ((Pt = he$1(a)), Pt !== null && (jt.data = Pt)))),
        (Pt = ce$1 ? je$1(o, a) : ke$1(o, a)) &&
          ((it = oe$1(it, "onBeforeInput")),
          0 < it.length &&
            ((ct = new Ld("onBeforeInput", "beforeinput", null, a, ct)),
            st.push({ event: ct, listeners: it }),
            (ct.data = Pt)));
    }
    se$1(st, i);
  });
}
function tf(o, i, a) {
  return { instance: o, listener: i, currentTarget: a };
}
function oe$1(o, i) {
  for (var a = i + "Capture", s = []; o !== null; ) {
    var et = o,
      tt = et.stateNode;
    et.tag === 5 &&
      tt !== null &&
      ((et = tt),
      (tt = Kb(o, a)),
      tt != null && s.unshift(tf(o, tt, et)),
      (tt = Kb(o, i)),
      tt != null && s.push(tf(o, tt, et))),
      (o = o.return);
  }
  return s;
}
function vf(o) {
  if (o === null) return null;
  do o = o.return;
  while (o && o.tag !== 5);
  return o || null;
}
function wf(o, i, a, s, et) {
  for (var tt = i._reactName, rt = []; a !== null && a !== s; ) {
    var nt = a,
      ot = nt.alternate,
      it = nt.stateNode;
    if (ot !== null && ot === s) break;
    nt.tag === 5 &&
      it !== null &&
      ((nt = it),
      et
        ? ((ot = Kb(a, tt)), ot != null && rt.unshift(tf(a, ot, nt)))
        : et || ((ot = Kb(a, tt)), ot != null && rt.push(tf(a, ot, nt)))),
      (a = a.return);
  }
  rt.length !== 0 && o.push({ event: i, listeners: rt });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(o) {
  return (typeof o == "string" ? o : "" + o)
    .replace(
      xf,
      `
`
    )
    .replace(yf, "");
}
function Af(o, i, a) {
  if (((i = zf(i)), zf(o) !== i && a)) throw Error(p$1(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(o, i) {
  return (
    o === "textarea" ||
    o === "noscript" ||
    typeof i.children == "string" ||
    typeof i.children == "number" ||
    (typeof i.dangerouslySetInnerHTML == "object" &&
      i.dangerouslySetInnerHTML !== null &&
      i.dangerouslySetInnerHTML.__html != null)
  );
}
var Ff = typeof setTimeout == "function" ? setTimeout : void 0,
  Gf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hf = typeof Promise == "function" ? Promise : void 0,
  Jf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hf < "u"
      ? function (o) {
          return Hf.resolve(null).then(o).catch(If);
        }
      : Ff;
function If(o) {
  setTimeout(function () {
    throw o;
  });
}
function Kf(o, i) {
  var a = i,
    s = 0;
  do {
    var et = a.nextSibling;
    if ((o.removeChild(a), et && et.nodeType === 8))
      if (((a = et.data), a === "/$")) {
        if (s === 0) {
          o.removeChild(et), bd(i);
          return;
        }
        s--;
      } else (a !== "$" && a !== "$?" && a !== "$!") || s++;
    a = et;
  } while (a);
  bd(i);
}
function Lf(o) {
  for (; o != null; o = o.nextSibling) {
    var i = o.nodeType;
    if (i === 1 || i === 3) break;
    if (i === 8) {
      if (((i = o.data), i === "$" || i === "$!" || i === "$?")) break;
      if (i === "/$") return null;
    }
  }
  return o;
}
function Mf(o) {
  o = o.previousSibling;
  for (var i = 0; o; ) {
    if (o.nodeType === 8) {
      var a = o.data;
      if (a === "$" || a === "$!" || a === "$?") {
        if (i === 0) return o;
        i--;
      } else a === "/$" && i++;
    }
    o = o.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = "__reactFiber$" + Nf,
  Pf = "__reactProps$" + Nf,
  uf = "__reactContainer$" + Nf,
  of = "__reactEvents$" + Nf,
  Qf = "__reactListeners$" + Nf,
  Rf = "__reactHandles$" + Nf;
function Wc(o) {
  var i = o[Of];
  if (i) return i;
  for (var a = o.parentNode; a; ) {
    if ((i = a[uf] || a[Of])) {
      if (((a = i.alternate), i.child !== null || (a !== null && a.child !== null)))
        for (o = Mf(o); o !== null; ) {
          if ((a = o[Of])) return a;
          o = Mf(o);
        }
      return i;
    }
    (o = a), (a = o.parentNode);
  }
  return null;
}
function Cb(o) {
  return (o = o[Of] || o[uf]), !o || (o.tag !== 5 && o.tag !== 6 && o.tag !== 13 && o.tag !== 3) ? null : o;
}
function ue$1(o) {
  if (o.tag === 5 || o.tag === 6) return o.stateNode;
  throw Error(p$1(33));
}
function Db(o) {
  return o[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(o) {
  return { current: o };
}
function E$1(o) {
  0 > Tf || ((o.current = Sf[Tf]), (Sf[Tf] = null), Tf--);
}
function G$1(o, i) {
  Tf++, (Sf[Tf] = o.current), (o.current = i);
}
var Vf = {},
  H$1 = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(o, i) {
  var a = o.type.contextTypes;
  if (!a) return Vf;
  var s = o.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === i) return s.__reactInternalMemoizedMaskedChildContext;
  var et = {},
    tt;
  for (tt in a) et[tt] = i[tt];
  return (
    s &&
      ((o = o.stateNode),
      (o.__reactInternalMemoizedUnmaskedChildContext = i),
      (o.__reactInternalMemoizedMaskedChildContext = et)),
    et
  );
}
function Zf(o) {
  return (o = o.childContextTypes), o != null;
}
function $f() {
  E$1(Wf), E$1(H$1);
}
function ag(o, i, a) {
  if (H$1.current !== Vf) throw Error(p$1(168));
  G$1(H$1, i), G$1(Wf, a);
}
function bg(o, i, a) {
  var s = o.stateNode;
  if (((i = i.childContextTypes), typeof s.getChildContext != "function")) return a;
  s = s.getChildContext();
  for (var et in s) if (!(et in i)) throw Error(p$1(108, Ra(o) || "Unknown", et));
  return A$2({}, a, s);
}
function cg(o) {
  return (
    (o = ((o = o.stateNode) && o.__reactInternalMemoizedMergedChildContext) || Vf),
    (Xf = H$1.current),
    G$1(H$1, o),
    G$1(Wf, Wf.current),
    !0
  );
}
function dg(o, i, a) {
  var s = o.stateNode;
  if (!s) throw Error(p$1(169));
  a ? ((o = bg(o, i, Xf)), (s.__reactInternalMemoizedMergedChildContext = o), E$1(Wf), E$1(H$1), G$1(H$1, o)) : E$1(Wf),
    G$1(Wf, a);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(o) {
  eg === null ? (eg = [o]) : eg.push(o);
}
function ig(o) {
  (fg = !0), hg(o);
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0;
    var o = 0,
      i = C;
    try {
      var a = eg;
      for (C = 1; o < a.length; o++) {
        var s = a[o];
        do s = s(!0);
        while (s !== null);
      }
      (eg = null), (fg = !1);
    } catch (et) {
      throw (eg !== null && (eg = eg.slice(o + 1)), ac(fc, jg), et);
    } finally {
      (C = i), (gg = !1);
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = "";
function tg(o, i) {
  (kg[lg++] = ng), (kg[lg++] = mg), (mg = o), (ng = i);
}
function ug(o, i, a) {
  (og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (qg = o);
  var s = rg;
  o = sg;
  var et = 32 - oc(s) - 1;
  (s &= ~(1 << et)), (a += 1);
  var tt = 32 - oc(i) + et;
  if (30 < tt) {
    var rt = et - (et % 5);
    (tt = (s & ((1 << rt) - 1)).toString(32)),
      (s >>= rt),
      (et -= rt),
      (rg = (1 << (32 - oc(i) + et)) | (a << et) | s),
      (sg = tt + o);
  } else (rg = (1 << tt) | (a << et) | s), (sg = o);
}
function vg(o) {
  o.return !== null && (tg(o, 1), ug(o, 1, 0));
}
function wg(o) {
  for (; o === mg; ) (mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null);
  for (; o === qg; )
    (qg = og[--pg]), (og[pg] = null), (sg = og[--pg]), (og[pg] = null), (rg = og[--pg]), (og[pg] = null);
}
var xg = null,
  yg = null,
  I$1 = !1,
  zg = null;
function Ag(o, i) {
  var a = Bg(5, null, null, 0);
  (a.elementType = "DELETED"),
    (a.stateNode = i),
    (a.return = o),
    (i = o.deletions),
    i === null ? ((o.deletions = [a]), (o.flags |= 16)) : i.push(a);
}
function Cg(o, i) {
  switch (o.tag) {
    case 5:
      var a = o.type;
      return (
        (i = i.nodeType !== 1 || a.toLowerCase() !== i.nodeName.toLowerCase() ? null : i),
        i !== null ? ((o.stateNode = i), (xg = o), (yg = Lf(i.firstChild)), !0) : !1
      );
    case 6:
      return (
        (i = o.pendingProps === "" || i.nodeType !== 3 ? null : i),
        i !== null ? ((o.stateNode = i), (xg = o), (yg = null), !0) : !1
      );
    case 13:
      return (
        (i = i.nodeType !== 8 ? null : i),
        i !== null
          ? ((a = qg !== null ? { id: rg, overflow: sg } : null),
            (o.memoizedState = { dehydrated: i, treeContext: a, retryLane: 1073741824 }),
            (a = Bg(18, null, null, 0)),
            (a.stateNode = i),
            (a.return = o),
            (o.child = a),
            (xg = o),
            (yg = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dg(o) {
  return (o.mode & 1) !== 0 && (o.flags & 128) === 0;
}
function Eg(o) {
  if (I$1) {
    var i = yg;
    if (i) {
      var a = i;
      if (!Cg(o, i)) {
        if (Dg(o)) throw Error(p$1(418));
        i = Lf(a.nextSibling);
        var s = xg;
        i && Cg(o, i) ? Ag(s, a) : ((o.flags = (o.flags & -4097) | 2), (I$1 = !1), (xg = o));
      }
    } else {
      if (Dg(o)) throw Error(p$1(418));
      (o.flags = (o.flags & -4097) | 2), (I$1 = !1), (xg = o);
    }
  }
}
function Fg(o) {
  for (o = o.return; o !== null && o.tag !== 5 && o.tag !== 3 && o.tag !== 13; ) o = o.return;
  xg = o;
}
function Gg(o) {
  if (o !== xg) return !1;
  if (!I$1) return Fg(o), (I$1 = !0), !1;
  var i;
  if (
    ((i = o.tag !== 3) &&
      !(i = o.tag !== 5) &&
      ((i = o.type), (i = i !== "head" && i !== "body" && !Ef(o.type, o.memoizedProps))),
    i && (i = yg))
  ) {
    if (Dg(o)) throw (Hg(), Error(p$1(418)));
    for (; i; ) Ag(o, i), (i = Lf(i.nextSibling));
  }
  if ((Fg(o), o.tag === 13)) {
    if (((o = o.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(p$1(317));
    e: {
      for (o = o.nextSibling, i = 0; o; ) {
        if (o.nodeType === 8) {
          var a = o.data;
          if (a === "/$") {
            if (i === 0) {
              yg = Lf(o.nextSibling);
              break e;
            }
            i--;
          } else (a !== "$" && a !== "$!" && a !== "$?") || i++;
        }
        o = o.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(o.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var o = yg; o; ) o = Lf(o.nextSibling);
}
function Ig() {
  (yg = xg = null), (I$1 = !1);
}
function Jg(o) {
  zg === null ? (zg = [o]) : zg.push(o);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(o, i) {
  if (o && o.defaultProps) {
    (i = A$2({}, i)), (o = o.defaultProps);
    for (var a in o) i[a] === void 0 && (i[a] = o[a]);
    return i;
  }
  return i;
}
var Mg = Uf(null),
  Ng = null,
  Og = null,
  Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(o) {
  var i = Mg.current;
  E$1(Mg), (o._currentValue = i);
}
function Sg(o, i, a) {
  for (; o !== null; ) {
    var s = o.alternate;
    if (
      ((o.childLanes & i) !== i
        ? ((o.childLanes |= i), s !== null && (s.childLanes |= i))
        : s !== null && (s.childLanes & i) !== i && (s.childLanes |= i),
      o === a)
    )
      break;
    o = o.return;
  }
}
function Tg(o, i) {
  (Ng = o),
    (Pg = Og = null),
    (o = o.dependencies),
    o !== null && o.firstContext !== null && (o.lanes & i && (Ug = !0), (o.firstContext = null));
}
function Vg(o) {
  var i = o._currentValue;
  if (Pg !== o)
    if (((o = { context: o, memoizedValue: i, next: null }), Og === null)) {
      if (Ng === null) throw Error(p$1(308));
      (Og = o), (Ng.dependencies = { lanes: 0, firstContext: o });
    } else Og = Og.next = o;
  return i;
}
var Wg = null;
function Xg(o) {
  Wg === null ? (Wg = [o]) : Wg.push(o);
}
function Yg(o, i, a, s) {
  var et = i.interleaved;
  return et === null ? ((a.next = a), Xg(i)) : ((a.next = et.next), (et.next = a)), (i.interleaved = a), Zg(o, s);
}
function Zg(o, i) {
  o.lanes |= i;
  var a = o.alternate;
  for (a !== null && (a.lanes |= i), a = o, o = o.return; o !== null; )
    (o.childLanes |= i), (a = o.alternate), a !== null && (a.childLanes |= i), (a = o), (o = o.return);
  return a.tag === 3 ? a.stateNode : null;
}
var $g = !1;
function ah(o) {
  o.updateQueue = {
    baseState: o.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bh(o, i) {
  (o = o.updateQueue),
    i.updateQueue === o &&
      (i.updateQueue = {
        baseState: o.baseState,
        firstBaseUpdate: o.firstBaseUpdate,
        lastBaseUpdate: o.lastBaseUpdate,
        shared: o.shared,
        effects: o.effects,
      });
}
function ch(o, i) {
  return { eventTime: o, lane: i, tag: 0, payload: null, callback: null, next: null };
}
function dh(o, i, a) {
  var s = o.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), K$1 & 2)) {
    var et = s.pending;
    return et === null ? (i.next = i) : ((i.next = et.next), (et.next = i)), (s.pending = i), Zg(o, a);
  }
  return (
    (et = s.interleaved),
    et === null ? ((i.next = i), Xg(s)) : ((i.next = et.next), (et.next = i)),
    (s.interleaved = i),
    Zg(o, a)
  );
}
function eh(o, i, a) {
  if (((i = i.updateQueue), i !== null && ((i = i.shared), (a & 4194240) !== 0))) {
    var s = i.lanes;
    (s &= o.pendingLanes), (a |= s), (i.lanes = a), Cc(o, a);
  }
}
function fh(o, i) {
  var a = o.updateQueue,
    s = o.alternate;
  if (s !== null && ((s = s.updateQueue), a === s)) {
    var et = null,
      tt = null;
    if (((a = a.firstBaseUpdate), a !== null)) {
      do {
        var rt = {
          eventTime: a.eventTime,
          lane: a.lane,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        };
        tt === null ? (et = tt = rt) : (tt = tt.next = rt), (a = a.next);
      } while (a !== null);
      tt === null ? (et = tt = i) : (tt = tt.next = i);
    } else et = tt = i;
    (a = { baseState: s.baseState, firstBaseUpdate: et, lastBaseUpdate: tt, shared: s.shared, effects: s.effects }),
      (o.updateQueue = a);
    return;
  }
  (o = a.lastBaseUpdate), o === null ? (a.firstBaseUpdate = i) : (o.next = i), (a.lastBaseUpdate = i);
}
function gh(o, i, a, s) {
  var et = o.updateQueue;
  $g = !1;
  var tt = et.firstBaseUpdate,
    rt = et.lastBaseUpdate,
    nt = et.shared.pending;
  if (nt !== null) {
    et.shared.pending = null;
    var ot = nt,
      it = ot.next;
    (ot.next = null), rt === null ? (tt = it) : (rt.next = it), (rt = ot);
    var ct = o.alternate;
    ct !== null &&
      ((ct = ct.updateQueue),
      (nt = ct.lastBaseUpdate),
      nt !== rt && (nt === null ? (ct.firstBaseUpdate = it) : (nt.next = it), (ct.lastBaseUpdate = ot)));
  }
  if (tt !== null) {
    var st = et.baseState;
    (rt = 0), (ct = it = ot = null), (nt = tt);
    do {
      var ft = nt.lane,
        gt = nt.eventTime;
      if ((s & ft) === ft) {
        ct !== null &&
          (ct = ct.next =
            { eventTime: gt, lane: 0, tag: nt.tag, payload: nt.payload, callback: nt.callback, next: null });
        e: {
          var pt = o,
            vt = nt;
          switch (((ft = i), (gt = a), vt.tag)) {
            case 1:
              if (((pt = vt.payload), typeof pt == "function")) {
                st = pt.call(gt, st, ft);
                break e;
              }
              st = pt;
              break e;
            case 3:
              pt.flags = (pt.flags & -65537) | 128;
            case 0:
              if (((pt = vt.payload), (ft = typeof pt == "function" ? pt.call(gt, st, ft) : pt), ft == null)) break e;
              st = A$2({}, st, ft);
              break e;
            case 2:
              $g = !0;
          }
        }
        nt.callback !== null &&
          nt.lane !== 0 &&
          ((o.flags |= 64), (ft = et.effects), ft === null ? (et.effects = [nt]) : ft.push(nt));
      } else
        (gt = { eventTime: gt, lane: ft, tag: nt.tag, payload: nt.payload, callback: nt.callback, next: null }),
          ct === null ? ((it = ct = gt), (ot = st)) : (ct = ct.next = gt),
          (rt |= ft);
      if (((nt = nt.next), nt === null)) {
        if (((nt = et.shared.pending), nt === null)) break;
        (ft = nt), (nt = ft.next), (ft.next = null), (et.lastBaseUpdate = ft), (et.shared.pending = null);
      }
    } while (1);
    if (
      (ct === null && (ot = st),
      (et.baseState = ot),
      (et.firstBaseUpdate = it),
      (et.lastBaseUpdate = ct),
      (i = et.shared.interleaved),
      i !== null)
    ) {
      et = i;
      do (rt |= et.lane), (et = et.next);
      while (et !== i);
    } else tt === null && (et.shared.lanes = 0);
    (hh |= rt), (o.lanes = rt), (o.memoizedState = st);
  }
}
function ih(o, i, a) {
  if (((o = i.effects), (i.effects = null), o !== null))
    for (i = 0; i < o.length; i++) {
      var s = o[i],
        et = s.callback;
      if (et !== null) {
        if (((s.callback = null), (s = a), typeof et != "function")) throw Error(p$1(191, et));
        et.call(s);
      }
    }
}
var jh = new aa.Component().refs;
function kh(o, i, a, s) {
  (i = o.memoizedState),
    (a = a(s, i)),
    (a = a == null ? i : A$2({}, i, a)),
    (o.memoizedState = a),
    o.lanes === 0 && (o.updateQueue.baseState = a);
}
var nh = {
  isMounted: function (o) {
    return (o = o._reactInternals) ? Vb(o) === o : !1;
  },
  enqueueSetState: function (o, i, a) {
    o = o._reactInternals;
    var s = L$1(),
      et = lh(o),
      tt = ch(s, et);
    (tt.payload = i),
      a != null && (tt.callback = a),
      (i = dh(o, tt, et)),
      i !== null && (mh(i, o, et, s), eh(i, o, et));
  },
  enqueueReplaceState: function (o, i, a) {
    o = o._reactInternals;
    var s = L$1(),
      et = lh(o),
      tt = ch(s, et);
    (tt.tag = 1),
      (tt.payload = i),
      a != null && (tt.callback = a),
      (i = dh(o, tt, et)),
      i !== null && (mh(i, o, et, s), eh(i, o, et));
  },
  enqueueForceUpdate: function (o, i) {
    o = o._reactInternals;
    var a = L$1(),
      s = lh(o),
      et = ch(a, s);
    (et.tag = 2), i != null && (et.callback = i), (i = dh(o, et, s)), i !== null && (mh(i, o, s, a), eh(i, o, s));
  },
};
function oh(o, i, a, s, et, tt, rt) {
  return (
    (o = o.stateNode),
    typeof o.shouldComponentUpdate == "function"
      ? o.shouldComponentUpdate(s, tt, rt)
      : i.prototype && i.prototype.isPureReactComponent
      ? !Ie(a, s) || !Ie(et, tt)
      : !0
  );
}
function ph(o, i, a) {
  var s = !1,
    et = Vf,
    tt = i.contextType;
  return (
    typeof tt == "object" && tt !== null
      ? (tt = Vg(tt))
      : ((et = Zf(i) ? Xf : H$1.current), (s = i.contextTypes), (tt = (s = s != null) ? Yf(o, et) : Vf)),
    (i = new i(a, tt)),
    (o.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
    (i.updater = nh),
    (o.stateNode = i),
    (i._reactInternals = o),
    s &&
      ((o = o.stateNode),
      (o.__reactInternalMemoizedUnmaskedChildContext = et),
      (o.__reactInternalMemoizedMaskedChildContext = tt)),
    i
  );
}
function qh(o, i, a, s) {
  (o = i.state),
    typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(a, s),
    typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(a, s),
    i.state !== o && nh.enqueueReplaceState(i, i.state, null);
}
function rh(o, i, a, s) {
  var et = o.stateNode;
  (et.props = a), (et.state = o.memoizedState), (et.refs = jh), ah(o);
  var tt = i.contextType;
  typeof tt == "object" && tt !== null
    ? (et.context = Vg(tt))
    : ((tt = Zf(i) ? Xf : H$1.current), (et.context = Yf(o, tt))),
    (et.state = o.memoizedState),
    (tt = i.getDerivedStateFromProps),
    typeof tt == "function" && (kh(o, i, tt, a), (et.state = o.memoizedState)),
    typeof i.getDerivedStateFromProps == "function" ||
      typeof et.getSnapshotBeforeUpdate == "function" ||
      (typeof et.UNSAFE_componentWillMount != "function" && typeof et.componentWillMount != "function") ||
      ((i = et.state),
      typeof et.componentWillMount == "function" && et.componentWillMount(),
      typeof et.UNSAFE_componentWillMount == "function" && et.UNSAFE_componentWillMount(),
      i !== et.state && nh.enqueueReplaceState(et, et.state, null),
      gh(o, a, et, s),
      (et.state = o.memoizedState)),
    typeof et.componentDidMount == "function" && (o.flags |= 4194308);
}
function sh(o, i, a) {
  if (((o = a.ref), o !== null && typeof o != "function" && typeof o != "object")) {
    if (a._owner) {
      if (((a = a._owner), a)) {
        if (a.tag !== 1) throw Error(p$1(309));
        var s = a.stateNode;
      }
      if (!s) throw Error(p$1(147, o));
      var et = s,
        tt = "" + o;
      return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === tt
        ? i.ref
        : ((i = function (rt) {
            var nt = et.refs;
            nt === jh && (nt = et.refs = {}), rt === null ? delete nt[tt] : (nt[tt] = rt);
          }),
          (i._stringRef = tt),
          i);
    }
    if (typeof o != "string") throw Error(p$1(284));
    if (!a._owner) throw Error(p$1(290, o));
  }
  return o;
}
function th(o, i) {
  throw (
    ((o = Object.prototype.toString.call(i)),
    Error(p$1(31, o === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : o)))
  );
}
function uh(o) {
  var i = o._init;
  return i(o._payload);
}
function vh(o) {
  function i(at, lt) {
    if (o) {
      var ut = at.deletions;
      ut === null ? ((at.deletions = [lt]), (at.flags |= 16)) : ut.push(lt);
    }
  }
  function a(at, lt) {
    if (!o) return null;
    for (; lt !== null; ) i(at, lt), (lt = lt.sibling);
    return null;
  }
  function s(at, lt) {
    for (at = new Map(); lt !== null; ) lt.key !== null ? at.set(lt.key, lt) : at.set(lt.index, lt), (lt = lt.sibling);
    return at;
  }
  function et(at, lt) {
    return (at = wh(at, lt)), (at.index = 0), (at.sibling = null), at;
  }
  function tt(at, lt, ut) {
    return (
      (at.index = ut),
      o
        ? ((ut = at.alternate),
          ut !== null ? ((ut = ut.index), ut < lt ? ((at.flags |= 2), lt) : ut) : ((at.flags |= 2), lt))
        : ((at.flags |= 1048576), lt)
    );
  }
  function rt(at) {
    return o && at.alternate === null && (at.flags |= 2), at;
  }
  function nt(at, lt, ut, ht) {
    return lt === null || lt.tag !== 6
      ? ((lt = xh(ut, at.mode, ht)), (lt.return = at), lt)
      : ((lt = et(lt, ut)), (lt.return = at), lt);
  }
  function ot(at, lt, ut, ht) {
    var kt = ut.type;
    return kt === ya
      ? ct(at, lt, ut.props.children, ht, ut.key)
      : lt !== null &&
        (lt.elementType === kt || (typeof kt == "object" && kt !== null && kt.$$typeof === Ha && uh(kt) === lt.type))
      ? ((ht = et(lt, ut.props)), (ht.ref = sh(at, lt, ut)), (ht.return = at), ht)
      : ((ht = yh(ut.type, ut.key, ut.props, null, at.mode, ht)), (ht.ref = sh(at, lt, ut)), (ht.return = at), ht);
  }
  function it(at, lt, ut, ht) {
    return lt === null ||
      lt.tag !== 4 ||
      lt.stateNode.containerInfo !== ut.containerInfo ||
      lt.stateNode.implementation !== ut.implementation
      ? ((lt = zh(ut, at.mode, ht)), (lt.return = at), lt)
      : ((lt = et(lt, ut.children || [])), (lt.return = at), lt);
  }
  function ct(at, lt, ut, ht, kt) {
    return lt === null || lt.tag !== 7
      ? ((lt = Ah(ut, at.mode, ht, kt)), (lt.return = at), lt)
      : ((lt = et(lt, ut)), (lt.return = at), lt);
  }
  function st(at, lt, ut) {
    if ((typeof lt == "string" && lt !== "") || typeof lt == "number")
      return (lt = xh("" + lt, at.mode, ut)), (lt.return = at), lt;
    if (typeof lt == "object" && lt !== null) {
      switch (lt.$$typeof) {
        case va:
          return (
            (ut = yh(lt.type, lt.key, lt.props, null, at.mode, ut)), (ut.ref = sh(at, null, lt)), (ut.return = at), ut
          );
        case wa:
          return (lt = zh(lt, at.mode, ut)), (lt.return = at), lt;
        case Ha:
          var ht = lt._init;
          return st(at, ht(lt._payload), ut);
      }
      if (eb(lt) || Ka(lt)) return (lt = Ah(lt, at.mode, ut, null)), (lt.return = at), lt;
      th(at, lt);
    }
    return null;
  }
  function ft(at, lt, ut, ht) {
    var kt = lt !== null ? lt.key : null;
    if ((typeof ut == "string" && ut !== "") || typeof ut == "number")
      return kt !== null ? null : nt(at, lt, "" + ut, ht);
    if (typeof ut == "object" && ut !== null) {
      switch (ut.$$typeof) {
        case va:
          return ut.key === kt ? ot(at, lt, ut, ht) : null;
        case wa:
          return ut.key === kt ? it(at, lt, ut, ht) : null;
        case Ha:
          return (kt = ut._init), ft(at, lt, kt(ut._payload), ht);
      }
      if (eb(ut) || Ka(ut)) return kt !== null ? null : ct(at, lt, ut, ht, null);
      th(at, ut);
    }
    return null;
  }
  function gt(at, lt, ut, ht, kt) {
    if ((typeof ht == "string" && ht !== "") || typeof ht == "number")
      return (at = at.get(ut) || null), nt(lt, at, "" + ht, kt);
    if (typeof ht == "object" && ht !== null) {
      switch (ht.$$typeof) {
        case va:
          return (at = at.get(ht.key === null ? ut : ht.key) || null), ot(lt, at, ht, kt);
        case wa:
          return (at = at.get(ht.key === null ? ut : ht.key) || null), it(lt, at, ht, kt);
        case Ha:
          var Rt = ht._init;
          return gt(at, lt, ut, Rt(ht._payload), kt);
      }
      if (eb(ht) || Ka(ht)) return (at = at.get(ut) || null), ct(lt, at, ht, kt, null);
      th(lt, ht);
    }
    return null;
  }
  function pt(at, lt, ut, ht) {
    for (var kt = null, Rt = null, Pt = lt, jt = (lt = 0), zt = null; Pt !== null && jt < ut.length; jt++) {
      Pt.index > jt ? ((zt = Pt), (Pt = null)) : (zt = Pt.sibling);
      var It = ft(at, Pt, ut[jt], ht);
      if (It === null) {
        Pt === null && (Pt = zt);
        break;
      }
      o && Pt && It.alternate === null && i(at, Pt),
        (lt = tt(It, lt, jt)),
        Rt === null ? (kt = It) : (Rt.sibling = It),
        (Rt = It),
        (Pt = zt);
    }
    if (jt === ut.length) return a(at, Pt), I$1 && tg(at, jt), kt;
    if (Pt === null) {
      for (; jt < ut.length; jt++)
        (Pt = st(at, ut[jt], ht)),
          Pt !== null && ((lt = tt(Pt, lt, jt)), Rt === null ? (kt = Pt) : (Rt.sibling = Pt), (Rt = Pt));
      return I$1 && tg(at, jt), kt;
    }
    for (Pt = s(at, Pt); jt < ut.length; jt++)
      (zt = gt(Pt, at, jt, ut[jt], ht)),
        zt !== null &&
          (o && zt.alternate !== null && Pt.delete(zt.key === null ? jt : zt.key),
          (lt = tt(zt, lt, jt)),
          Rt === null ? (kt = zt) : (Rt.sibling = zt),
          (Rt = zt));
    return (
      o &&
        Pt.forEach(function (Wt) {
          return i(at, Wt);
        }),
      I$1 && tg(at, jt),
      kt
    );
  }
  function vt(at, lt, ut, ht) {
    var kt = Ka(ut);
    if (typeof kt != "function") throw Error(p$1(150));
    if (((ut = kt.call(ut)), ut == null)) throw Error(p$1(151));
    for (
      var Rt = (kt = null), Pt = lt, jt = (lt = 0), zt = null, It = ut.next();
      Pt !== null && !It.done;
      jt++, It = ut.next()
    ) {
      Pt.index > jt ? ((zt = Pt), (Pt = null)) : (zt = Pt.sibling);
      var Wt = ft(at, Pt, It.value, ht);
      if (Wt === null) {
        Pt === null && (Pt = zt);
        break;
      }
      o && Pt && Wt.alternate === null && i(at, Pt),
        (lt = tt(Wt, lt, jt)),
        Rt === null ? (kt = Wt) : (Rt.sibling = Wt),
        (Rt = Wt),
        (Pt = zt);
    }
    if (It.done) return a(at, Pt), I$1 && tg(at, jt), kt;
    if (Pt === null) {
      for (; !It.done; jt++, It = ut.next())
        (It = st(at, It.value, ht)),
          It !== null && ((lt = tt(It, lt, jt)), Rt === null ? (kt = It) : (Rt.sibling = It), (Rt = It));
      return I$1 && tg(at, jt), kt;
    }
    for (Pt = s(at, Pt); !It.done; jt++, It = ut.next())
      (It = gt(Pt, at, jt, It.value, ht)),
        It !== null &&
          (o && It.alternate !== null && Pt.delete(It.key === null ? jt : It.key),
          (lt = tt(It, lt, jt)),
          Rt === null ? (kt = It) : (Rt.sibling = It),
          (Rt = It));
    return (
      o &&
        Pt.forEach(function (Bt) {
          return i(at, Bt);
        }),
      I$1 && tg(at, jt),
      kt
    );
  }
  function Lt(at, lt, ut, ht) {
    if (
      (typeof ut == "object" && ut !== null && ut.type === ya && ut.key === null && (ut = ut.props.children),
      typeof ut == "object" && ut !== null)
    ) {
      switch (ut.$$typeof) {
        case va:
          e: {
            for (var kt = ut.key, Rt = lt; Rt !== null; ) {
              if (Rt.key === kt) {
                if (((kt = ut.type), kt === ya)) {
                  if (Rt.tag === 7) {
                    a(at, Rt.sibling), (lt = et(Rt, ut.props.children)), (lt.return = at), (at = lt);
                    break e;
                  }
                } else if (
                  Rt.elementType === kt ||
                  (typeof kt == "object" && kt !== null && kt.$$typeof === Ha && uh(kt) === Rt.type)
                ) {
                  a(at, Rt.sibling), (lt = et(Rt, ut.props)), (lt.ref = sh(at, Rt, ut)), (lt.return = at), (at = lt);
                  break e;
                }
                a(at, Rt);
                break;
              } else i(at, Rt);
              Rt = Rt.sibling;
            }
            ut.type === ya
              ? ((lt = Ah(ut.props.children, at.mode, ht, ut.key)), (lt.return = at), (at = lt))
              : ((ht = yh(ut.type, ut.key, ut.props, null, at.mode, ht)),
                (ht.ref = sh(at, lt, ut)),
                (ht.return = at),
                (at = ht));
          }
          return rt(at);
        case wa:
          e: {
            for (Rt = ut.key; lt !== null; ) {
              if (lt.key === Rt)
                if (
                  lt.tag === 4 &&
                  lt.stateNode.containerInfo === ut.containerInfo &&
                  lt.stateNode.implementation === ut.implementation
                ) {
                  a(at, lt.sibling), (lt = et(lt, ut.children || [])), (lt.return = at), (at = lt);
                  break e;
                } else {
                  a(at, lt);
                  break;
                }
              else i(at, lt);
              lt = lt.sibling;
            }
            (lt = zh(ut, at.mode, ht)), (lt.return = at), (at = lt);
          }
          return rt(at);
        case Ha:
          return (Rt = ut._init), Lt(at, lt, Rt(ut._payload), ht);
      }
      if (eb(ut)) return pt(at, lt, ut, ht);
      if (Ka(ut)) return vt(at, lt, ut, ht);
      th(at, ut);
    }
    return (typeof ut == "string" && ut !== "") || typeof ut == "number"
      ? ((ut = "" + ut),
        lt !== null && lt.tag === 6
          ? (a(at, lt.sibling), (lt = et(lt, ut)), (lt.return = at), (at = lt))
          : (a(at, lt), (lt = xh(ut, at.mode, ht)), (lt.return = at), (at = lt)),
        rt(at))
      : a(at, lt);
  }
  return Lt;
}
var Bh = vh(!0),
  Ch = vh(!1),
  Dh = {},
  Eh = Uf(Dh),
  Fh = Uf(Dh),
  Gh = Uf(Dh);
function Hh(o) {
  if (o === Dh) throw Error(p$1(174));
  return o;
}
function Ih(o, i) {
  switch ((G$1(Gh, i), G$1(Fh, o), G$1(Eh, Dh), (o = i.nodeType), o)) {
    case 9:
    case 11:
      i = (i = i.documentElement) ? i.namespaceURI : lb(null, "");
      break;
    default:
      (o = o === 8 ? i.parentNode : i), (i = o.namespaceURI || null), (o = o.tagName), (i = lb(i, o));
  }
  E$1(Eh), G$1(Eh, i);
}
function Jh() {
  E$1(Eh), E$1(Fh), E$1(Gh);
}
function Kh(o) {
  Hh(Gh.current);
  var i = Hh(Eh.current),
    a = lb(i, o.type);
  i !== a && (G$1(Fh, o), G$1(Eh, a));
}
function Lh(o) {
  Fh.current === o && (E$1(Eh), E$1(Fh));
}
var M$1 = Uf(0);
function Mh(o) {
  for (var i = o; i !== null; ) {
    if (i.tag === 13) {
      var a = i.memoizedState;
      if (a !== null && ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")) return i;
    } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
      if (i.flags & 128) return i;
    } else if (i.child !== null) {
      (i.child.return = i), (i = i.child);
      continue;
    }
    if (i === o) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === o) return null;
      i = i.return;
    }
    (i.sibling.return = i.return), (i = i.sibling);
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var o = 0; o < Nh.length; o++) Nh[o]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher,
  Qh = ua.ReactCurrentBatchConfig,
  Rh = 0,
  N$1 = null,
  O = null,
  P$1 = null,
  Sh = !1,
  Th = !1,
  Uh = 0,
  Vh = 0;
function Q$1() {
  throw Error(p$1(321));
}
function Wh(o, i) {
  if (i === null) return !1;
  for (var a = 0; a < i.length && a < o.length; a++) if (!He$1(o[a], i[a])) return !1;
  return !0;
}
function Xh(o, i, a, s, et, tt) {
  if (
    ((Rh = tt),
    (N$1 = i),
    (i.memoizedState = null),
    (i.updateQueue = null),
    (i.lanes = 0),
    (Ph.current = o === null || o.memoizedState === null ? Yh : Zh),
    (o = a(s, et)),
    Th)
  ) {
    tt = 0;
    do {
      if (((Th = !1), (Uh = 0), 25 <= tt)) throw Error(p$1(301));
      (tt += 1), (P$1 = O = null), (i.updateQueue = null), (Ph.current = $h), (o = a(s, et));
    } while (Th);
  }
  if (((Ph.current = ai), (i = O !== null && O.next !== null), (Rh = 0), (P$1 = O = N$1 = null), (Sh = !1), i))
    throw Error(p$1(300));
  return o;
}
function bi() {
  var o = Uh !== 0;
  return (Uh = 0), o;
}
function ci() {
  var o = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return P$1 === null ? (N$1.memoizedState = P$1 = o) : (P$1 = P$1.next = o), P$1;
}
function di() {
  if (O === null) {
    var o = N$1.alternate;
    o = o !== null ? o.memoizedState : null;
  } else o = O.next;
  var i = P$1 === null ? N$1.memoizedState : P$1.next;
  if (i !== null) (P$1 = i), (O = o);
  else {
    if (o === null) throw Error(p$1(310));
    (O = o),
      (o = {
        memoizedState: O.memoizedState,
        baseState: O.baseState,
        baseQueue: O.baseQueue,
        queue: O.queue,
        next: null,
      }),
      P$1 === null ? (N$1.memoizedState = P$1 = o) : (P$1 = P$1.next = o);
  }
  return P$1;
}
function ei(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function fi(o) {
  var i = di(),
    a = i.queue;
  if (a === null) throw Error(p$1(311));
  a.lastRenderedReducer = o;
  var s = O,
    et = s.baseQueue,
    tt = a.pending;
  if (tt !== null) {
    if (et !== null) {
      var rt = et.next;
      (et.next = tt.next), (tt.next = rt);
    }
    (s.baseQueue = et = tt), (a.pending = null);
  }
  if (et !== null) {
    (tt = et.next), (s = s.baseState);
    var nt = (rt = null),
      ot = null,
      it = tt;
    do {
      var ct = it.lane;
      if ((Rh & ct) === ct)
        ot !== null &&
          (ot = ot.next =
            { lane: 0, action: it.action, hasEagerState: it.hasEagerState, eagerState: it.eagerState, next: null }),
          (s = it.hasEagerState ? it.eagerState : o(s, it.action));
      else {
        var st = {
          lane: ct,
          action: it.action,
          hasEagerState: it.hasEagerState,
          eagerState: it.eagerState,
          next: null,
        };
        ot === null ? ((nt = ot = st), (rt = s)) : (ot = ot.next = st), (N$1.lanes |= ct), (hh |= ct);
      }
      it = it.next;
    } while (it !== null && it !== tt);
    ot === null ? (rt = s) : (ot.next = nt),
      He$1(s, i.memoizedState) || (Ug = !0),
      (i.memoizedState = s),
      (i.baseState = rt),
      (i.baseQueue = ot),
      (a.lastRenderedState = s);
  }
  if (((o = a.interleaved), o !== null)) {
    et = o;
    do (tt = et.lane), (N$1.lanes |= tt), (hh |= tt), (et = et.next);
    while (et !== o);
  } else et === null && (a.lanes = 0);
  return [i.memoizedState, a.dispatch];
}
function gi(o) {
  var i = di(),
    a = i.queue;
  if (a === null) throw Error(p$1(311));
  a.lastRenderedReducer = o;
  var s = a.dispatch,
    et = a.pending,
    tt = i.memoizedState;
  if (et !== null) {
    a.pending = null;
    var rt = (et = et.next);
    do (tt = o(tt, rt.action)), (rt = rt.next);
    while (rt !== et);
    He$1(tt, i.memoizedState) || (Ug = !0),
      (i.memoizedState = tt),
      i.baseQueue === null && (i.baseState = tt),
      (a.lastRenderedState = tt);
  }
  return [tt, s];
}
function hi() {}
function ii(o, i) {
  var a = N$1,
    s = di(),
    et = i(),
    tt = !He$1(s.memoizedState, et);
  if (
    (tt && ((s.memoizedState = et), (Ug = !0)),
    (s = s.queue),
    ji(ki.bind(null, a, s, o), [o]),
    s.getSnapshot !== i || tt || (P$1 !== null && P$1.memoizedState.tag & 1))
  ) {
    if (((a.flags |= 2048), li(9, mi.bind(null, a, s, et, i), void 0, null), R === null)) throw Error(p$1(349));
    Rh & 30 || ni(a, i, et);
  }
  return et;
}
function ni(o, i, a) {
  (o.flags |= 16384),
    (o = { getSnapshot: i, value: a }),
    (i = N$1.updateQueue),
    i === null
      ? ((i = { lastEffect: null, stores: null }), (N$1.updateQueue = i), (i.stores = [o]))
      : ((a = i.stores), a === null ? (i.stores = [o]) : a.push(o));
}
function mi(o, i, a, s) {
  (i.value = a), (i.getSnapshot = s), oi(i) && pi(o);
}
function ki(o, i, a) {
  return a(function () {
    oi(i) && pi(o);
  });
}
function oi(o) {
  var i = o.getSnapshot;
  o = o.value;
  try {
    var a = i();
    return !He$1(o, a);
  } catch {
    return !0;
  }
}
function pi(o) {
  var i = Zg(o, 1);
  i !== null && mh(i, o, 1, -1);
}
function qi(o) {
  var i = ci();
  return (
    typeof o == "function" && (o = o()),
    (i.memoizedState = i.baseState = o),
    (o = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: o }),
    (i.queue = o),
    (o = o.dispatch = ri.bind(null, N$1, o)),
    [i.memoizedState, o]
  );
}
function li(o, i, a, s) {
  return (
    (o = { tag: o, create: i, destroy: a, deps: s, next: null }),
    (i = N$1.updateQueue),
    i === null
      ? ((i = { lastEffect: null, stores: null }), (N$1.updateQueue = i), (i.lastEffect = o.next = o))
      : ((a = i.lastEffect),
        a === null ? (i.lastEffect = o.next = o) : ((s = a.next), (a.next = o), (o.next = s), (i.lastEffect = o))),
    o
  );
}
function si() {
  return di().memoizedState;
}
function ti(o, i, a, s) {
  var et = ci();
  (N$1.flags |= o), (et.memoizedState = li(1 | i, a, void 0, s === void 0 ? null : s));
}
function ui(o, i, a, s) {
  var et = di();
  s = s === void 0 ? null : s;
  var tt = void 0;
  if (O !== null) {
    var rt = O.memoizedState;
    if (((tt = rt.destroy), s !== null && Wh(s, rt.deps))) {
      et.memoizedState = li(i, a, tt, s);
      return;
    }
  }
  (N$1.flags |= o), (et.memoizedState = li(1 | i, a, tt, s));
}
function vi(o, i) {
  return ti(8390656, 8, o, i);
}
function ji(o, i) {
  return ui(2048, 8, o, i);
}
function wi(o, i) {
  return ui(4, 2, o, i);
}
function xi(o, i) {
  return ui(4, 4, o, i);
}
function yi(o, i) {
  if (typeof i == "function")
    return (
      (o = o()),
      i(o),
      function () {
        i(null);
      }
    );
  if (i != null)
    return (
      (o = o()),
      (i.current = o),
      function () {
        i.current = null;
      }
    );
}
function zi(o, i, a) {
  return (a = a != null ? a.concat([o]) : null), ui(4, 4, yi.bind(null, i, o), a);
}
function Ai() {}
function Bi(o, i) {
  var a = di();
  i = i === void 0 ? null : i;
  var s = a.memoizedState;
  return s !== null && i !== null && Wh(i, s[1]) ? s[0] : ((a.memoizedState = [o, i]), o);
}
function Ci(o, i) {
  var a = di();
  i = i === void 0 ? null : i;
  var s = a.memoizedState;
  return s !== null && i !== null && Wh(i, s[1]) ? s[0] : ((o = o()), (a.memoizedState = [o, i]), o);
}
function Di(o, i, a) {
  return Rh & 21
    ? (He$1(a, i) || ((a = yc()), (N$1.lanes |= a), (hh |= a), (o.baseState = !0)), i)
    : (o.baseState && ((o.baseState = !1), (Ug = !0)), (o.memoizedState = a));
}
function Ei(o, i) {
  var a = C;
  (C = a !== 0 && 4 > a ? a : 4), o(!0);
  var s = Qh.transition;
  Qh.transition = {};
  try {
    o(!1), i();
  } finally {
    (C = a), (Qh.transition = s);
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(o, i, a) {
  var s = lh(o);
  if (((a = { lane: s, action: a, hasEagerState: !1, eagerState: null, next: null }), Hi(o))) Ii(i, a);
  else if (((a = Yg(o, i, a, s)), a !== null)) {
    var et = L$1();
    mh(a, o, s, et), Ji(a, i, s);
  }
}
function ri(o, i, a) {
  var s = lh(o),
    et = { lane: s, action: a, hasEagerState: !1, eagerState: null, next: null };
  if (Hi(o)) Ii(i, et);
  else {
    var tt = o.alternate;
    if (o.lanes === 0 && (tt === null || tt.lanes === 0) && ((tt = i.lastRenderedReducer), tt !== null))
      try {
        var rt = i.lastRenderedState,
          nt = tt(rt, a);
        if (((et.hasEagerState = !0), (et.eagerState = nt), He$1(nt, rt))) {
          var ot = i.interleaved;
          ot === null ? ((et.next = et), Xg(i)) : ((et.next = ot.next), (ot.next = et)), (i.interleaved = et);
          return;
        }
      } catch {
      } finally {
      }
    (a = Yg(o, i, et, s)), a !== null && ((et = L$1()), mh(a, o, s, et), Ji(a, i, s));
  }
}
function Hi(o) {
  var i = o.alternate;
  return o === N$1 || (i !== null && i === N$1);
}
function Ii(o, i) {
  Th = Sh = !0;
  var a = o.pending;
  a === null ? (i.next = i) : ((i.next = a.next), (a.next = i)), (o.pending = i);
}
function Ji(o, i, a) {
  if (a & 4194240) {
    var s = i.lanes;
    (s &= o.pendingLanes), (a |= s), (i.lanes = a), Cc(o, a);
  }
}
var ai = {
    readContext: Vg,
    useCallback: Q$1,
    useContext: Q$1,
    useEffect: Q$1,
    useImperativeHandle: Q$1,
    useInsertionEffect: Q$1,
    useLayoutEffect: Q$1,
    useMemo: Q$1,
    useReducer: Q$1,
    useRef: Q$1,
    useState: Q$1,
    useDebugValue: Q$1,
    useDeferredValue: Q$1,
    useTransition: Q$1,
    useMutableSource: Q$1,
    useSyncExternalStore: Q$1,
    useId: Q$1,
    unstable_isNewReconciler: !1,
  },
  Yh = {
    readContext: Vg,
    useCallback: function (o, i) {
      return (ci().memoizedState = [o, i === void 0 ? null : i]), o;
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function (o, i, a) {
      return (a = a != null ? a.concat([o]) : null), ti(4194308, 4, yi.bind(null, i, o), a);
    },
    useLayoutEffect: function (o, i) {
      return ti(4194308, 4, o, i);
    },
    useInsertionEffect: function (o, i) {
      return ti(4, 2, o, i);
    },
    useMemo: function (o, i) {
      var a = ci();
      return (i = i === void 0 ? null : i), (o = o()), (a.memoizedState = [o, i]), o;
    },
    useReducer: function (o, i, a) {
      var s = ci();
      return (
        (i = a !== void 0 ? a(i) : i),
        (s.memoizedState = s.baseState = i),
        (o = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: o,
          lastRenderedState: i,
        }),
        (s.queue = o),
        (o = o.dispatch = Gi.bind(null, N$1, o)),
        [s.memoizedState, o]
      );
    },
    useRef: function (o) {
      var i = ci();
      return (o = { current: o }), (i.memoizedState = o);
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function (o) {
      return (ci().memoizedState = o);
    },
    useTransition: function () {
      var o = qi(!1),
        i = o[0];
      return (o = Ei.bind(null, o[1])), (ci().memoizedState = o), [i, o];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (o, i, a) {
      var s = N$1,
        et = ci();
      if (I$1) {
        if (a === void 0) throw Error(p$1(407));
        a = a();
      } else {
        if (((a = i()), R === null)) throw Error(p$1(349));
        Rh & 30 || ni(s, i, a);
      }
      et.memoizedState = a;
      var tt = { value: a, getSnapshot: i };
      return (
        (et.queue = tt),
        vi(ki.bind(null, s, tt, o), [o]),
        (s.flags |= 2048),
        li(9, mi.bind(null, s, tt, a, i), void 0, null),
        a
      );
    },
    useId: function () {
      var o = ci(),
        i = R.identifierPrefix;
      if (I$1) {
        var a = sg,
          s = rg;
        (a = (s & ~(1 << (32 - oc(s) - 1))).toString(32) + a),
          (i = ":" + i + "R" + a),
          (a = Uh++),
          0 < a && (i += "H" + a.toString(32)),
          (i += ":");
      } else (a = Vh++), (i = ":" + i + "r" + a.toString(32) + ":");
      return (o.memoizedState = i);
    },
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function () {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function (o) {
      var i = di();
      return Di(i, O.memoizedState, o);
    },
    useTransition: function () {
      var o = fi(ei)[0],
        i = di().memoizedState;
      return [o, i];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1,
  },
  $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function () {
      return gi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function (o) {
      var i = di();
      return O === null ? (i.memoizedState = o) : Di(i, O.memoizedState, o);
    },
    useTransition: function () {
      var o = gi(ei)[0],
        i = di().memoizedState;
      return [o, i];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1,
  };
function Ki(o, i) {
  try {
    var a = "",
      s = i;
    do (a += Pa(s)), (s = s.return);
    while (s);
    var et = a;
  } catch (tt) {
    et =
      `
Error generating stack: ` +
      tt.message +
      `
` +
      tt.stack;
  }
  return { value: o, source: i, stack: et, digest: null };
}
function Li(o, i, a) {
  return { value: o, source: null, stack: a ?? null, digest: i ?? null };
}
function Mi(o, i) {
  try {
    console.error(i.value);
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
var Ni = typeof WeakMap == "function" ? WeakMap : Map;
function Oi(o, i, a) {
  (a = ch(-1, a)), (a.tag = 3), (a.payload = { element: null });
  var s = i.value;
  return (
    (a.callback = function () {
      Pi || ((Pi = !0), (Qi = s)), Mi(o, i);
    }),
    a
  );
}
function Ri(o, i, a) {
  (a = ch(-1, a)), (a.tag = 3);
  var s = o.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var et = i.value;
    (a.payload = function () {
      return s(et);
    }),
      (a.callback = function () {
        Mi(o, i);
      });
  }
  var tt = o.stateNode;
  return (
    tt !== null &&
      typeof tt.componentDidCatch == "function" &&
      (a.callback = function () {
        Mi(o, i), typeof s != "function" && (Si === null ? (Si = new Set([this])) : Si.add(this));
        var rt = i.stack;
        this.componentDidCatch(i.value, { componentStack: rt !== null ? rt : "" });
      }),
    a
  );
}
function Ti(o, i, a) {
  var s = o.pingCache;
  if (s === null) {
    s = o.pingCache = new Ni();
    var et = new Set();
    s.set(i, et);
  } else (et = s.get(i)), et === void 0 && ((et = new Set()), s.set(i, et));
  et.has(a) || (et.add(a), (o = Ui.bind(null, o, i, a)), i.then(o, o));
}
function Vi(o) {
  do {
    var i;
    if (((i = o.tag === 13) && ((i = o.memoizedState), (i = i !== null ? i.dehydrated !== null : !0)), i)) return o;
    o = o.return;
  } while (o !== null);
  return null;
}
function Wi(o, i, a, s, et) {
  return o.mode & 1
    ? ((o.flags |= 65536), (o.lanes = et), o)
    : (o === i
        ? (o.flags |= 65536)
        : ((o.flags |= 128),
          (a.flags |= 131072),
          (a.flags &= -52805),
          a.tag === 1 && (a.alternate === null ? (a.tag = 17) : ((i = ch(-1, 1)), (i.tag = 2), dh(a, i, 1))),
          (a.lanes |= 1)),
      o);
}
var Xi = ua.ReactCurrentOwner,
  Ug = !1;
function Yi(o, i, a, s) {
  i.child = o === null ? Ch(i, null, a, s) : Bh(i, o.child, a, s);
}
function Zi(o, i, a, s, et) {
  a = a.render;
  var tt = i.ref;
  return (
    Tg(i, et),
    (s = Xh(o, i, a, s, tt, et)),
    (a = bi()),
    o !== null && !Ug
      ? ((i.updateQueue = o.updateQueue), (i.flags &= -2053), (o.lanes &= ~et), $i(o, i, et))
      : (I$1 && a && vg(i), (i.flags |= 1), Yi(o, i, s, et), i.child)
  );
}
function aj(o, i, a, s, et) {
  if (o === null) {
    var tt = a.type;
    return typeof tt == "function" &&
      !bj(tt) &&
      tt.defaultProps === void 0 &&
      a.compare === null &&
      a.defaultProps === void 0
      ? ((i.tag = 15), (i.type = tt), cj(o, i, tt, s, et))
      : ((o = yh(a.type, null, s, i, i.mode, et)), (o.ref = i.ref), (o.return = i), (i.child = o));
  }
  if (((tt = o.child), !(o.lanes & et))) {
    var rt = tt.memoizedProps;
    if (((a = a.compare), (a = a !== null ? a : Ie), a(rt, s) && o.ref === i.ref)) return $i(o, i, et);
  }
  return (i.flags |= 1), (o = wh(tt, s)), (o.ref = i.ref), (o.return = i), (i.child = o);
}
function cj(o, i, a, s, et) {
  if (o !== null) {
    var tt = o.memoizedProps;
    if (Ie(tt, s) && o.ref === i.ref)
      if (((Ug = !1), (i.pendingProps = s = tt), (o.lanes & et) !== 0)) o.flags & 131072 && (Ug = !0);
      else return (i.lanes = o.lanes), $i(o, i, et);
  }
  return dj(o, i, a, s, et);
}
function ej(o, i, a) {
  var s = i.pendingProps,
    et = s.children,
    tt = o !== null ? o.memoizedState : null;
  if (s.mode === "hidden")
    if (!(i.mode & 1)) (i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), G$1(fj, gj), (gj |= a);
    else {
      if (!(a & 1073741824))
        return (
          (o = tt !== null ? tt.baseLanes | a : a),
          (i.lanes = i.childLanes = 1073741824),
          (i.memoizedState = { baseLanes: o, cachePool: null, transitions: null }),
          (i.updateQueue = null),
          G$1(fj, gj),
          (gj |= o),
          null
        );
      (i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = tt !== null ? tt.baseLanes : a),
        G$1(fj, gj),
        (gj |= s);
    }
  else tt !== null ? ((s = tt.baseLanes | a), (i.memoizedState = null)) : (s = a), G$1(fj, gj), (gj |= s);
  return Yi(o, i, et, a), i.child;
}
function hj(o, i) {
  var a = i.ref;
  ((o === null && a !== null) || (o !== null && o.ref !== a)) && ((i.flags |= 512), (i.flags |= 2097152));
}
function dj(o, i, a, s, et) {
  var tt = Zf(a) ? Xf : H$1.current;
  return (
    (tt = Yf(i, tt)),
    Tg(i, et),
    (a = Xh(o, i, a, s, tt, et)),
    (s = bi()),
    o !== null && !Ug
      ? ((i.updateQueue = o.updateQueue), (i.flags &= -2053), (o.lanes &= ~et), $i(o, i, et))
      : (I$1 && s && vg(i), (i.flags |= 1), Yi(o, i, a, et), i.child)
  );
}
function ij(o, i, a, s, et) {
  if (Zf(a)) {
    var tt = !0;
    cg(i);
  } else tt = !1;
  if ((Tg(i, et), i.stateNode === null)) jj(o, i), ph(i, a, s), rh(i, a, s, et), (s = !0);
  else if (o === null) {
    var rt = i.stateNode,
      nt = i.memoizedProps;
    rt.props = nt;
    var ot = rt.context,
      it = a.contextType;
    typeof it == "object" && it !== null ? (it = Vg(it)) : ((it = Zf(a) ? Xf : H$1.current), (it = Yf(i, it)));
    var ct = a.getDerivedStateFromProps,
      st = typeof ct == "function" || typeof rt.getSnapshotBeforeUpdate == "function";
    st ||
      (typeof rt.UNSAFE_componentWillReceiveProps != "function" && typeof rt.componentWillReceiveProps != "function") ||
      ((nt !== s || ot !== it) && qh(i, rt, s, it)),
      ($g = !1);
    var ft = i.memoizedState;
    (rt.state = ft),
      gh(i, s, rt, et),
      (ot = i.memoizedState),
      nt !== s || ft !== ot || Wf.current || $g
        ? (typeof ct == "function" && (kh(i, a, ct, s), (ot = i.memoizedState)),
          (nt = $g || oh(i, a, nt, s, ft, ot, it))
            ? (st ||
                (typeof rt.UNSAFE_componentWillMount != "function" && typeof rt.componentWillMount != "function") ||
                (typeof rt.componentWillMount == "function" && rt.componentWillMount(),
                typeof rt.UNSAFE_componentWillMount == "function" && rt.UNSAFE_componentWillMount()),
              typeof rt.componentDidMount == "function" && (i.flags |= 4194308))
            : (typeof rt.componentDidMount == "function" && (i.flags |= 4194308),
              (i.memoizedProps = s),
              (i.memoizedState = ot)),
          (rt.props = s),
          (rt.state = ot),
          (rt.context = it),
          (s = nt))
        : (typeof rt.componentDidMount == "function" && (i.flags |= 4194308), (s = !1));
  } else {
    (rt = i.stateNode),
      bh(o, i),
      (nt = i.memoizedProps),
      (it = i.type === i.elementType ? nt : Lg(i.type, nt)),
      (rt.props = it),
      (st = i.pendingProps),
      (ft = rt.context),
      (ot = a.contextType),
      typeof ot == "object" && ot !== null ? (ot = Vg(ot)) : ((ot = Zf(a) ? Xf : H$1.current), (ot = Yf(i, ot)));
    var gt = a.getDerivedStateFromProps;
    (ct = typeof gt == "function" || typeof rt.getSnapshotBeforeUpdate == "function") ||
      (typeof rt.UNSAFE_componentWillReceiveProps != "function" && typeof rt.componentWillReceiveProps != "function") ||
      ((nt !== st || ft !== ot) && qh(i, rt, s, ot)),
      ($g = !1),
      (ft = i.memoizedState),
      (rt.state = ft),
      gh(i, s, rt, et);
    var pt = i.memoizedState;
    nt !== st || ft !== pt || Wf.current || $g
      ? (typeof gt == "function" && (kh(i, a, gt, s), (pt = i.memoizedState)),
        (it = $g || oh(i, a, it, s, ft, pt, ot) || !1)
          ? (ct ||
              (typeof rt.UNSAFE_componentWillUpdate != "function" && typeof rt.componentWillUpdate != "function") ||
              (typeof rt.componentWillUpdate == "function" && rt.componentWillUpdate(s, pt, ot),
              typeof rt.UNSAFE_componentWillUpdate == "function" && rt.UNSAFE_componentWillUpdate(s, pt, ot)),
            typeof rt.componentDidUpdate == "function" && (i.flags |= 4),
            typeof rt.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024))
          : (typeof rt.componentDidUpdate != "function" ||
              (nt === o.memoizedProps && ft === o.memoizedState) ||
              (i.flags |= 4),
            typeof rt.getSnapshotBeforeUpdate != "function" ||
              (nt === o.memoizedProps && ft === o.memoizedState) ||
              (i.flags |= 1024),
            (i.memoizedProps = s),
            (i.memoizedState = pt)),
        (rt.props = s),
        (rt.state = pt),
        (rt.context = ot),
        (s = it))
      : (typeof rt.componentDidUpdate != "function" ||
          (nt === o.memoizedProps && ft === o.memoizedState) ||
          (i.flags |= 4),
        typeof rt.getSnapshotBeforeUpdate != "function" ||
          (nt === o.memoizedProps && ft === o.memoizedState) ||
          (i.flags |= 1024),
        (s = !1));
  }
  return kj(o, i, a, s, tt, et);
}
function kj(o, i, a, s, et, tt) {
  hj(o, i);
  var rt = (i.flags & 128) !== 0;
  if (!s && !rt) return et && dg(i, a, !1), $i(o, i, tt);
  (s = i.stateNode), (Xi.current = i);
  var nt = rt && typeof a.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (i.flags |= 1),
    o !== null && rt ? ((i.child = Bh(i, o.child, null, tt)), (i.child = Bh(i, null, nt, tt))) : Yi(o, i, nt, tt),
    (i.memoizedState = s.state),
    et && dg(i, a, !0),
    i.child
  );
}
function lj(o) {
  var i = o.stateNode;
  i.pendingContext ? ag(o, i.pendingContext, i.pendingContext !== i.context) : i.context && ag(o, i.context, !1),
    Ih(o, i.containerInfo);
}
function mj(o, i, a, s, et) {
  return Ig(), Jg(et), (i.flags |= 256), Yi(o, i, a, s), i.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(o) {
  return { baseLanes: o, cachePool: null, transitions: null };
}
function pj(o, i, a) {
  var s = i.pendingProps,
    et = M$1.current,
    tt = !1,
    rt = (i.flags & 128) !== 0,
    nt;
  if (
    ((nt = rt) || (nt = o !== null && o.memoizedState === null ? !1 : (et & 2) !== 0),
    nt ? ((tt = !0), (i.flags &= -129)) : (o === null || o.memoizedState !== null) && (et |= 1),
    G$1(M$1, et & 1),
    o === null)
  )
    return (
      Eg(i),
      (o = i.memoizedState),
      o !== null && ((o = o.dehydrated), o !== null)
        ? (i.mode & 1 ? (o.data === "$!" ? (i.lanes = 8) : (i.lanes = 1073741824)) : (i.lanes = 1), null)
        : ((rt = s.children),
          (o = s.fallback),
          tt
            ? ((s = i.mode),
              (tt = i.child),
              (rt = { mode: "hidden", children: rt }),
              !(s & 1) && tt !== null ? ((tt.childLanes = 0), (tt.pendingProps = rt)) : (tt = qj(rt, s, 0, null)),
              (o = Ah(o, s, a, null)),
              (tt.return = i),
              (o.return = i),
              (tt.sibling = o),
              (i.child = tt),
              (i.child.memoizedState = oj(a)),
              (i.memoizedState = nj),
              o)
            : rj(i, rt))
    );
  if (((et = o.memoizedState), et !== null && ((nt = et.dehydrated), nt !== null))) return sj(o, i, rt, s, nt, et, a);
  if (tt) {
    (tt = s.fallback), (rt = i.mode), (et = o.child), (nt = et.sibling);
    var ot = { mode: "hidden", children: s.children };
    return (
      !(rt & 1) && i.child !== et
        ? ((s = i.child), (s.childLanes = 0), (s.pendingProps = ot), (i.deletions = null))
        : ((s = wh(et, ot)), (s.subtreeFlags = et.subtreeFlags & 14680064)),
      nt !== null ? (tt = wh(nt, tt)) : ((tt = Ah(tt, rt, a, null)), (tt.flags |= 2)),
      (tt.return = i),
      (s.return = i),
      (s.sibling = tt),
      (i.child = s),
      (s = tt),
      (tt = i.child),
      (rt = o.child.memoizedState),
      (rt = rt === null ? oj(a) : { baseLanes: rt.baseLanes | a, cachePool: null, transitions: rt.transitions }),
      (tt.memoizedState = rt),
      (tt.childLanes = o.childLanes & ~a),
      (i.memoizedState = nj),
      s
    );
  }
  return (
    (tt = o.child),
    (o = tt.sibling),
    (s = wh(tt, { mode: "visible", children: s.children })),
    !(i.mode & 1) && (s.lanes = a),
    (s.return = i),
    (s.sibling = null),
    o !== null && ((a = i.deletions), a === null ? ((i.deletions = [o]), (i.flags |= 16)) : a.push(o)),
    (i.child = s),
    (i.memoizedState = null),
    s
  );
}
function rj(o, i) {
  return (i = qj({ mode: "visible", children: i }, o.mode, 0, null)), (i.return = o), (o.child = i);
}
function tj(o, i, a, s) {
  return (
    s !== null && Jg(s),
    Bh(i, o.child, null, a),
    (o = rj(i, i.pendingProps.children)),
    (o.flags |= 2),
    (i.memoizedState = null),
    o
  );
}
function sj(o, i, a, s, et, tt, rt) {
  if (a)
    return i.flags & 256
      ? ((i.flags &= -257), (s = Li(Error(p$1(422)))), tj(o, i, rt, s))
      : i.memoizedState !== null
      ? ((i.child = o.child), (i.flags |= 128), null)
      : ((tt = s.fallback),
        (et = i.mode),
        (s = qj({ mode: "visible", children: s.children }, et, 0, null)),
        (tt = Ah(tt, et, rt, null)),
        (tt.flags |= 2),
        (s.return = i),
        (tt.return = i),
        (s.sibling = tt),
        (i.child = s),
        i.mode & 1 && Bh(i, o.child, null, rt),
        (i.child.memoizedState = oj(rt)),
        (i.memoizedState = nj),
        tt);
  if (!(i.mode & 1)) return tj(o, i, rt, null);
  if (et.data === "$!") {
    if (((s = et.nextSibling && et.nextSibling.dataset), s)) var nt = s.dgst;
    return (s = nt), (tt = Error(p$1(419))), (s = Li(tt, s, void 0)), tj(o, i, rt, s);
  }
  if (((nt = (rt & o.childLanes) !== 0), Ug || nt)) {
    if (((s = R), s !== null)) {
      switch (rt & -rt) {
        case 4:
          et = 2;
          break;
        case 16:
          et = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          et = 32;
          break;
        case 536870912:
          et = 268435456;
          break;
        default:
          et = 0;
      }
      (et = et & (s.suspendedLanes | rt) ? 0 : et),
        et !== 0 && et !== tt.retryLane && ((tt.retryLane = et), Zg(o, et), mh(s, o, et, -1));
    }
    return uj(), (s = Li(Error(p$1(421)))), tj(o, i, rt, s);
  }
  return et.data === "$?"
    ? ((i.flags |= 128), (i.child = o.child), (i = vj.bind(null, o)), (et._reactRetry = i), null)
    : ((o = tt.treeContext),
      (yg = Lf(et.nextSibling)),
      (xg = i),
      (I$1 = !0),
      (zg = null),
      o !== null && ((og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (rg = o.id), (sg = o.overflow), (qg = i)),
      (i = rj(i, s.children)),
      (i.flags |= 4096),
      i);
}
function wj(o, i, a) {
  o.lanes |= i;
  var s = o.alternate;
  s !== null && (s.lanes |= i), Sg(o.return, i, a);
}
function xj(o, i, a, s, et) {
  var tt = o.memoizedState;
  tt === null
    ? (o.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: s, tail: a, tailMode: et })
    : ((tt.isBackwards = i),
      (tt.rendering = null),
      (tt.renderingStartTime = 0),
      (tt.last = s),
      (tt.tail = a),
      (tt.tailMode = et));
}
function yj(o, i, a) {
  var s = i.pendingProps,
    et = s.revealOrder,
    tt = s.tail;
  if ((Yi(o, i, s.children, a), (s = M$1.current), s & 2)) (s = (s & 1) | 2), (i.flags |= 128);
  else {
    if (o !== null && o.flags & 128)
      e: for (o = i.child; o !== null; ) {
        if (o.tag === 13) o.memoizedState !== null && wj(o, a, i);
        else if (o.tag === 19) wj(o, a, i);
        else if (o.child !== null) {
          (o.child.return = o), (o = o.child);
          continue;
        }
        if (o === i) break e;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === i) break e;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    s &= 1;
  }
  if ((G$1(M$1, s), !(i.mode & 1))) i.memoizedState = null;
  else
    switch (et) {
      case "forwards":
        for (a = i.child, et = null; a !== null; )
          (o = a.alternate), o !== null && Mh(o) === null && (et = a), (a = a.sibling);
        (a = et),
          a === null ? ((et = i.child), (i.child = null)) : ((et = a.sibling), (a.sibling = null)),
          xj(i, !1, et, a, tt);
        break;
      case "backwards":
        for (a = null, et = i.child, i.child = null; et !== null; ) {
          if (((o = et.alternate), o !== null && Mh(o) === null)) {
            i.child = et;
            break;
          }
          (o = et.sibling), (et.sibling = a), (a = et), (et = o);
        }
        xj(i, !0, a, null, tt);
        break;
      case "together":
        xj(i, !1, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
  return i.child;
}
function jj(o, i) {
  !(i.mode & 1) && o !== null && ((o.alternate = null), (i.alternate = null), (i.flags |= 2));
}
function $i(o, i, a) {
  if ((o !== null && (i.dependencies = o.dependencies), (hh |= i.lanes), !(a & i.childLanes))) return null;
  if (o !== null && i.child !== o.child) throw Error(p$1(153));
  if (i.child !== null) {
    for (o = i.child, a = wh(o, o.pendingProps), i.child = a, a.return = i; o.sibling !== null; )
      (o = o.sibling), (a = a.sibling = wh(o, o.pendingProps)), (a.return = i);
    a.sibling = null;
  }
  return i.child;
}
function zj(o, i, a) {
  switch (i.tag) {
    case 3:
      lj(i), Ig();
      break;
    case 5:
      Kh(i);
      break;
    case 1:
      Zf(i.type) && cg(i);
      break;
    case 4:
      Ih(i, i.stateNode.containerInfo);
      break;
    case 10:
      var s = i.type._context,
        et = i.memoizedProps.value;
      G$1(Mg, s._currentValue), (s._currentValue = et);
      break;
    case 13:
      if (((s = i.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (G$1(M$1, M$1.current & 1), (i.flags |= 128), null)
          : a & i.child.childLanes
          ? pj(o, i, a)
          : (G$1(M$1, M$1.current & 1), (o = $i(o, i, a)), o !== null ? o.sibling : null);
      G$1(M$1, M$1.current & 1);
      break;
    case 19:
      if (((s = (a & i.childLanes) !== 0), o.flags & 128)) {
        if (s) return yj(o, i, a);
        i.flags |= 128;
      }
      if (
        ((et = i.memoizedState),
        et !== null && ((et.rendering = null), (et.tail = null), (et.lastEffect = null)),
        G$1(M$1, M$1.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (i.lanes = 0), ej(o, i, a);
  }
  return $i(o, i, a);
}
var Aj, Bj, Cj, Dj;
Aj = function (o, i) {
  for (var a = i.child; a !== null; ) {
    if (a.tag === 5 || a.tag === 6) o.appendChild(a.stateNode);
    else if (a.tag !== 4 && a.child !== null) {
      (a.child.return = a), (a = a.child);
      continue;
    }
    if (a === i) break;
    for (; a.sibling === null; ) {
      if (a.return === null || a.return === i) return;
      a = a.return;
    }
    (a.sibling.return = a.return), (a = a.sibling);
  }
};
Bj = function () {};
Cj = function (o, i, a, s) {
  var et = o.memoizedProps;
  if (et !== s) {
    (o = i.stateNode), Hh(Eh.current);
    var tt = null;
    switch (a) {
      case "input":
        (et = Ya(o, et)), (s = Ya(o, s)), (tt = []);
        break;
      case "select":
        (et = A$2({}, et, { value: void 0 })), (s = A$2({}, s, { value: void 0 })), (tt = []);
        break;
      case "textarea":
        (et = gb(o, et)), (s = gb(o, s)), (tt = []);
        break;
      default:
        typeof et.onClick != "function" && typeof s.onClick == "function" && (o.onclick = Bf);
    }
    ub(a, s);
    var rt;
    a = null;
    for (it in et)
      if (!s.hasOwnProperty(it) && et.hasOwnProperty(it) && et[it] != null)
        if (it === "style") {
          var nt = et[it];
          for (rt in nt) nt.hasOwnProperty(rt) && (a || (a = {}), (a[rt] = ""));
        } else
          it !== "dangerouslySetInnerHTML" &&
            it !== "children" &&
            it !== "suppressContentEditableWarning" &&
            it !== "suppressHydrationWarning" &&
            it !== "autoFocus" &&
            (ea.hasOwnProperty(it) ? tt || (tt = []) : (tt = tt || []).push(it, null));
    for (it in s) {
      var ot = s[it];
      if (((nt = et != null ? et[it] : void 0), s.hasOwnProperty(it) && ot !== nt && (ot != null || nt != null)))
        if (it === "style")
          if (nt) {
            for (rt in nt) !nt.hasOwnProperty(rt) || (ot && ot.hasOwnProperty(rt)) || (a || (a = {}), (a[rt] = ""));
            for (rt in ot) ot.hasOwnProperty(rt) && nt[rt] !== ot[rt] && (a || (a = {}), (a[rt] = ot[rt]));
          } else a || (tt || (tt = []), tt.push(it, a)), (a = ot);
        else
          it === "dangerouslySetInnerHTML"
            ? ((ot = ot ? ot.__html : void 0),
              (nt = nt ? nt.__html : void 0),
              ot != null && nt !== ot && (tt = tt || []).push(it, ot))
            : it === "children"
            ? (typeof ot != "string" && typeof ot != "number") || (tt = tt || []).push(it, "" + ot)
            : it !== "suppressContentEditableWarning" &&
              it !== "suppressHydrationWarning" &&
              (ea.hasOwnProperty(it)
                ? (ot != null && it === "onScroll" && D("scroll", o), tt || nt === ot || (tt = []))
                : (tt = tt || []).push(it, ot));
    }
    a && (tt = tt || []).push("style", a);
    var it = tt;
    (i.updateQueue = it) && (i.flags |= 4);
  }
};
Dj = function (o, i, a, s) {
  a !== s && (i.flags |= 4);
};
function Ej(o, i) {
  if (!I$1)
    switch (o.tailMode) {
      case "hidden":
        i = o.tail;
        for (var a = null; i !== null; ) i.alternate !== null && (a = i), (i = i.sibling);
        a === null ? (o.tail = null) : (a.sibling = null);
        break;
      case "collapsed":
        a = o.tail;
        for (var s = null; a !== null; ) a.alternate !== null && (s = a), (a = a.sibling);
        s === null ? (i || o.tail === null ? (o.tail = null) : (o.tail.sibling = null)) : (s.sibling = null);
    }
}
function S$1(o) {
  var i = o.alternate !== null && o.alternate.child === o.child,
    a = 0,
    s = 0;
  if (i)
    for (var et = o.child; et !== null; )
      (a |= et.lanes | et.childLanes),
        (s |= et.subtreeFlags & 14680064),
        (s |= et.flags & 14680064),
        (et.return = o),
        (et = et.sibling);
  else
    for (et = o.child; et !== null; )
      (a |= et.lanes | et.childLanes), (s |= et.subtreeFlags), (s |= et.flags), (et.return = o), (et = et.sibling);
  return (o.subtreeFlags |= s), (o.childLanes = a), i;
}
function Fj(o, i, a) {
  var s = i.pendingProps;
  switch ((wg(i), i.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(i), null;
    case 1:
      return Zf(i.type) && $f(), S$1(i), null;
    case 3:
      return (
        (s = i.stateNode),
        Jh(),
        E$1(Wf),
        E$1(H$1),
        Oh(),
        s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
        (o === null || o.child === null) &&
          (Gg(i)
            ? (i.flags |= 4)
            : o === null ||
              (o.memoizedState.isDehydrated && !(i.flags & 256)) ||
              ((i.flags |= 1024), zg !== null && (Gj(zg), (zg = null)))),
        Bj(o, i),
        S$1(i),
        null
      );
    case 5:
      Lh(i);
      var et = Hh(Gh.current);
      if (((a = i.type), o !== null && i.stateNode != null))
        Cj(o, i, a, s, et), o.ref !== i.ref && ((i.flags |= 512), (i.flags |= 2097152));
      else {
        if (!s) {
          if (i.stateNode === null) throw Error(p$1(166));
          return S$1(i), null;
        }
        if (((o = Hh(Eh.current)), Gg(i))) {
          (s = i.stateNode), (a = i.type);
          var tt = i.memoizedProps;
          switch (((s[Of] = i), (s[Pf] = tt), (o = (i.mode & 1) !== 0), a)) {
            case "dialog":
              D("cancel", s), D("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", s);
              break;
            case "video":
            case "audio":
              for (et = 0; et < lf.length; et++) D(lf[et], s);
              break;
            case "source":
              D("error", s);
              break;
            case "img":
            case "image":
            case "link":
              D("error", s), D("load", s);
              break;
            case "details":
              D("toggle", s);
              break;
            case "input":
              Za(s, tt), D("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!tt.multiple }), D("invalid", s);
              break;
            case "textarea":
              hb(s, tt), D("invalid", s);
          }
          ub(a, tt), (et = null);
          for (var rt in tt)
            if (tt.hasOwnProperty(rt)) {
              var nt = tt[rt];
              rt === "children"
                ? typeof nt == "string"
                  ? s.textContent !== nt &&
                    (tt.suppressHydrationWarning !== !0 && Af(s.textContent, nt, o), (et = ["children", nt]))
                  : typeof nt == "number" &&
                    s.textContent !== "" + nt &&
                    (tt.suppressHydrationWarning !== !0 && Af(s.textContent, nt, o), (et = ["children", "" + nt]))
                : ea.hasOwnProperty(rt) && nt != null && rt === "onScroll" && D("scroll", s);
            }
          switch (a) {
            case "input":
              Va(s), db(s, tt, !0);
              break;
            case "textarea":
              Va(s), jb(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof tt.onClick == "function" && (s.onclick = Bf);
          }
          (s = et), (i.updateQueue = s), s !== null && (i.flags |= 4);
        } else {
          (rt = et.nodeType === 9 ? et : et.ownerDocument),
            o === "http://www.w3.org/1999/xhtml" && (o = kb(a)),
            o === "http://www.w3.org/1999/xhtml"
              ? a === "script"
                ? ((o = rt.createElement("div")),
                  (o.innerHTML = "<script></script>"),
                  (o = o.removeChild(o.firstChild)))
                : typeof s.is == "string"
                ? (o = rt.createElement(a, { is: s.is }))
                : ((o = rt.createElement(a)),
                  a === "select" && ((rt = o), s.multiple ? (rt.multiple = !0) : s.size && (rt.size = s.size)))
              : (o = rt.createElementNS(o, a)),
            (o[Of] = i),
            (o[Pf] = s),
            Aj(o, i, !1, !1),
            (i.stateNode = o);
          e: {
            switch (((rt = vb(a, s)), a)) {
              case "dialog":
                D("cancel", o), D("close", o), (et = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", o), (et = s);
                break;
              case "video":
              case "audio":
                for (et = 0; et < lf.length; et++) D(lf[et], o);
                et = s;
                break;
              case "source":
                D("error", o), (et = s);
                break;
              case "img":
              case "image":
              case "link":
                D("error", o), D("load", o), (et = s);
                break;
              case "details":
                D("toggle", o), (et = s);
                break;
              case "input":
                Za(o, s), (et = Ya(o, s)), D("invalid", o);
                break;
              case "option":
                et = s;
                break;
              case "select":
                (o._wrapperState = { wasMultiple: !!s.multiple }),
                  (et = A$2({}, s, { value: void 0 })),
                  D("invalid", o);
                break;
              case "textarea":
                hb(o, s), (et = gb(o, s)), D("invalid", o);
                break;
              default:
                et = s;
            }
            ub(a, et), (nt = et);
            for (tt in nt)
              if (nt.hasOwnProperty(tt)) {
                var ot = nt[tt];
                tt === "style"
                  ? sb(o, ot)
                  : tt === "dangerouslySetInnerHTML"
                  ? ((ot = ot ? ot.__html : void 0), ot != null && nb(o, ot))
                  : tt === "children"
                  ? typeof ot == "string"
                    ? (a !== "textarea" || ot !== "") && ob(o, ot)
                    : typeof ot == "number" && ob(o, "" + ot)
                  : tt !== "suppressContentEditableWarning" &&
                    tt !== "suppressHydrationWarning" &&
                    tt !== "autoFocus" &&
                    (ea.hasOwnProperty(tt)
                      ? ot != null && tt === "onScroll" && D("scroll", o)
                      : ot != null && ta(o, tt, ot, rt));
              }
            switch (a) {
              case "input":
                Va(o), db(o, s, !1);
                break;
              case "textarea":
                Va(o), jb(o);
                break;
              case "option":
                s.value != null && o.setAttribute("value", "" + Sa(s.value));
                break;
              case "select":
                (o.multiple = !!s.multiple),
                  (tt = s.value),
                  tt != null
                    ? fb(o, !!s.multiple, tt, !1)
                    : s.defaultValue != null && fb(o, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof et.onClick == "function" && (o.onclick = Bf);
            }
            switch (a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break e;
              case "img":
                s = !0;
                break e;
              default:
                s = !1;
            }
          }
          s && (i.flags |= 4);
        }
        i.ref !== null && ((i.flags |= 512), (i.flags |= 2097152));
      }
      return S$1(i), null;
    case 6:
      if (o && i.stateNode != null) Dj(o, i, o.memoizedProps, s);
      else {
        if (typeof s != "string" && i.stateNode === null) throw Error(p$1(166));
        if (((a = Hh(Gh.current)), Hh(Eh.current), Gg(i))) {
          if (
            ((s = i.stateNode), (a = i.memoizedProps), (s[Of] = i), (tt = s.nodeValue !== a) && ((o = xg), o !== null))
          )
            switch (o.tag) {
              case 3:
                Af(s.nodeValue, a, (o.mode & 1) !== 0);
                break;
              case 5:
                o.memoizedProps.suppressHydrationWarning !== !0 && Af(s.nodeValue, a, (o.mode & 1) !== 0);
            }
          tt && (i.flags |= 4);
        } else (s = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(s)), (s[Of] = i), (i.stateNode = s);
      }
      return S$1(i), null;
    case 13:
      if (
        (E$1(M$1),
        (s = i.memoizedState),
        o === null || (o.memoizedState !== null && o.memoizedState.dehydrated !== null))
      ) {
        if (I$1 && yg !== null && i.mode & 1 && !(i.flags & 128)) Hg(), Ig(), (i.flags |= 98560), (tt = !1);
        else if (((tt = Gg(i)), s !== null && s.dehydrated !== null)) {
          if (o === null) {
            if (!tt) throw Error(p$1(318));
            if (((tt = i.memoizedState), (tt = tt !== null ? tt.dehydrated : null), !tt)) throw Error(p$1(317));
            tt[Of] = i;
          } else Ig(), !(i.flags & 128) && (i.memoizedState = null), (i.flags |= 4);
          S$1(i), (tt = !1);
        } else zg !== null && (Gj(zg), (zg = null)), (tt = !0);
        if (!tt) return i.flags & 65536 ? i : null;
      }
      return i.flags & 128
        ? ((i.lanes = a), i)
        : ((s = s !== null),
          s !== (o !== null && o.memoizedState !== null) &&
            s &&
            ((i.child.flags |= 8192), i.mode & 1 && (o === null || M$1.current & 1 ? T$1 === 0 && (T$1 = 3) : uj())),
          i.updateQueue !== null && (i.flags |= 4),
          S$1(i),
          null);
    case 4:
      return Jh(), Bj(o, i), o === null && sf(i.stateNode.containerInfo), S$1(i), null;
    case 10:
      return Rg(i.type._context), S$1(i), null;
    case 17:
      return Zf(i.type) && $f(), S$1(i), null;
    case 19:
      if ((E$1(M$1), (tt = i.memoizedState), tt === null)) return S$1(i), null;
      if (((s = (i.flags & 128) !== 0), (rt = tt.rendering), rt === null))
        if (s) Ej(tt, !1);
        else {
          if (T$1 !== 0 || (o !== null && o.flags & 128))
            for (o = i.child; o !== null; ) {
              if (((rt = Mh(o)), rt !== null)) {
                for (
                  i.flags |= 128,
                    Ej(tt, !1),
                    s = rt.updateQueue,
                    s !== null && ((i.updateQueue = s), (i.flags |= 4)),
                    i.subtreeFlags = 0,
                    s = a,
                    a = i.child;
                  a !== null;

                )
                  (tt = a),
                    (o = s),
                    (tt.flags &= 14680066),
                    (rt = tt.alternate),
                    rt === null
                      ? ((tt.childLanes = 0),
                        (tt.lanes = o),
                        (tt.child = null),
                        (tt.subtreeFlags = 0),
                        (tt.memoizedProps = null),
                        (tt.memoizedState = null),
                        (tt.updateQueue = null),
                        (tt.dependencies = null),
                        (tt.stateNode = null))
                      : ((tt.childLanes = rt.childLanes),
                        (tt.lanes = rt.lanes),
                        (tt.child = rt.child),
                        (tt.subtreeFlags = 0),
                        (tt.deletions = null),
                        (tt.memoizedProps = rt.memoizedProps),
                        (tt.memoizedState = rt.memoizedState),
                        (tt.updateQueue = rt.updateQueue),
                        (tt.type = rt.type),
                        (o = rt.dependencies),
                        (tt.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext })),
                    (a = a.sibling);
                return G$1(M$1, (M$1.current & 1) | 2), i.child;
              }
              o = o.sibling;
            }
          tt.tail !== null && B$1() > Hj && ((i.flags |= 128), (s = !0), Ej(tt, !1), (i.lanes = 4194304));
        }
      else {
        if (!s)
          if (((o = Mh(rt)), o !== null)) {
            if (
              ((i.flags |= 128),
              (s = !0),
              (a = o.updateQueue),
              a !== null && ((i.updateQueue = a), (i.flags |= 4)),
              Ej(tt, !0),
              tt.tail === null && tt.tailMode === "hidden" && !rt.alternate && !I$1)
            )
              return S$1(i), null;
          } else
            2 * B$1() - tt.renderingStartTime > Hj &&
              a !== 1073741824 &&
              ((i.flags |= 128), (s = !0), Ej(tt, !1), (i.lanes = 4194304));
        tt.isBackwards
          ? ((rt.sibling = i.child), (i.child = rt))
          : ((a = tt.last), a !== null ? (a.sibling = rt) : (i.child = rt), (tt.last = rt));
      }
      return tt.tail !== null
        ? ((i = tt.tail),
          (tt.rendering = i),
          (tt.tail = i.sibling),
          (tt.renderingStartTime = B$1()),
          (i.sibling = null),
          (a = M$1.current),
          G$1(M$1, s ? (a & 1) | 2 : a & 1),
          i)
        : (S$1(i), null);
    case 22:
    case 23:
      return (
        Ij(),
        (s = i.memoizedState !== null),
        o !== null && (o.memoizedState !== null) !== s && (i.flags |= 8192),
        s && i.mode & 1 ? gj & 1073741824 && (S$1(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : S$1(i),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$1(156, i.tag));
}
function Jj(o, i) {
  switch ((wg(i), i.tag)) {
    case 1:
      return Zf(i.type) && $f(), (o = i.flags), o & 65536 ? ((i.flags = (o & -65537) | 128), i) : null;
    case 3:
      return (
        Jh(),
        E$1(Wf),
        E$1(H$1),
        Oh(),
        (o = i.flags),
        o & 65536 && !(o & 128) ? ((i.flags = (o & -65537) | 128), i) : null
      );
    case 5:
      return Lh(i), null;
    case 13:
      if ((E$1(M$1), (o = i.memoizedState), o !== null && o.dehydrated !== null)) {
        if (i.alternate === null) throw Error(p$1(340));
        Ig();
      }
      return (o = i.flags), o & 65536 ? ((i.flags = (o & -65537) | 128), i) : null;
    case 19:
      return E$1(M$1), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(i.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = !1,
  U$1 = !1,
  Lj = typeof WeakSet == "function" ? WeakSet : Set,
  V$1 = null;
function Mj(o, i) {
  var a = o.ref;
  if (a !== null)
    if (typeof a == "function")
      try {
        a(null);
      } catch (s) {
        W$1(o, i, s);
      }
    else a.current = null;
}
function Nj(o, i, a) {
  try {
    a();
  } catch (s) {
    W$1(o, i, s);
  }
}
var Oj = !1;
function Pj(o, i) {
  if (((Cf = dd), (o = Me$1()), Ne$1(o))) {
    if ("selectionStart" in o) var a = { start: o.selectionStart, end: o.selectionEnd };
    else
      e: {
        a = ((a = o.ownerDocument) && a.defaultView) || window;
        var s = a.getSelection && a.getSelection();
        if (s && s.rangeCount !== 0) {
          a = s.anchorNode;
          var et = s.anchorOffset,
            tt = s.focusNode;
          s = s.focusOffset;
          try {
            a.nodeType, tt.nodeType;
          } catch {
            a = null;
            break e;
          }
          var rt = 0,
            nt = -1,
            ot = -1,
            it = 0,
            ct = 0,
            st = o,
            ft = null;
          t: for (;;) {
            for (
              var gt;
              st !== a || (et !== 0 && st.nodeType !== 3) || (nt = rt + et),
                st !== tt || (s !== 0 && st.nodeType !== 3) || (ot = rt + s),
                st.nodeType === 3 && (rt += st.nodeValue.length),
                (gt = st.firstChild) !== null;

            )
              (ft = st), (st = gt);
            for (;;) {
              if (st === o) break t;
              if (
                (ft === a && ++it === et && (nt = rt),
                ft === tt && ++ct === s && (ot = rt),
                (gt = st.nextSibling) !== null)
              )
                break;
              (st = ft), (ft = st.parentNode);
            }
            st = gt;
          }
          a = nt === -1 || ot === -1 ? null : { start: nt, end: ot };
        } else a = null;
      }
    a = a || { start: 0, end: 0 };
  } else a = null;
  for (Df = { focusedElem: o, selectionRange: a }, dd = !1, V$1 = i; V$1 !== null; )
    if (((i = V$1), (o = i.child), (i.subtreeFlags & 1028) !== 0 && o !== null)) (o.return = i), (V$1 = o);
    else
      for (; V$1 !== null; ) {
        i = V$1;
        try {
          var pt = i.alternate;
          if (i.flags & 1024)
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (pt !== null) {
                  var vt = pt.memoizedProps,
                    Lt = pt.memoizedState,
                    at = i.stateNode,
                    lt = at.getSnapshotBeforeUpdate(i.elementType === i.type ? vt : Lg(i.type, vt), Lt);
                  at.__reactInternalSnapshotBeforeUpdate = lt;
                }
                break;
              case 3:
                var ut = i.stateNode.containerInfo;
                ut.nodeType === 1
                  ? (ut.textContent = "")
                  : ut.nodeType === 9 && ut.documentElement && ut.removeChild(ut.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$1(163));
            }
        } catch (ht) {
          W$1(i, i.return, ht);
        }
        if (((o = i.sibling), o !== null)) {
          (o.return = i.return), (V$1 = o);
          break;
        }
        V$1 = i.return;
      }
  return (pt = Oj), (Oj = !1), pt;
}
function Qj(o, i, a) {
  var s = i.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var et = (s = s.next);
    do {
      if ((et.tag & o) === o) {
        var tt = et.destroy;
        (et.destroy = void 0), tt !== void 0 && Nj(i, a, tt);
      }
      et = et.next;
    } while (et !== s);
  }
}
function Rj(o, i) {
  if (((i = i.updateQueue), (i = i !== null ? i.lastEffect : null), i !== null)) {
    var a = (i = i.next);
    do {
      if ((a.tag & o) === o) {
        var s = a.create;
        a.destroy = s();
      }
      a = a.next;
    } while (a !== i);
  }
}
function Sj(o) {
  var i = o.ref;
  if (i !== null) {
    var a = o.stateNode;
    switch (o.tag) {
      case 5:
        o = a;
        break;
      default:
        o = a;
    }
    typeof i == "function" ? i(o) : (i.current = o);
  }
}
function Tj(o) {
  var i = o.alternate;
  i !== null && ((o.alternate = null), Tj(i)),
    (o.child = null),
    (o.deletions = null),
    (o.sibling = null),
    o.tag === 5 &&
      ((i = o.stateNode), i !== null && (delete i[Of], delete i[Pf], delete i[of], delete i[Qf], delete i[Rf])),
    (o.stateNode = null),
    (o.return = null),
    (o.dependencies = null),
    (o.memoizedProps = null),
    (o.memoizedState = null),
    (o.pendingProps = null),
    (o.stateNode = null),
    (o.updateQueue = null);
}
function Uj(o) {
  return o.tag === 5 || o.tag === 3 || o.tag === 4;
}
function Vj(o) {
  e: for (;;) {
    for (; o.sibling === null; ) {
      if (o.return === null || Uj(o.return)) return null;
      o = o.return;
    }
    for (o.sibling.return = o.return, o = o.sibling; o.tag !== 5 && o.tag !== 6 && o.tag !== 18; ) {
      if (o.flags & 2 || o.child === null || o.tag === 4) continue e;
      (o.child.return = o), (o = o.child);
    }
    if (!(o.flags & 2)) return o.stateNode;
  }
}
function Wj(o, i, a) {
  var s = o.tag;
  if (s === 5 || s === 6)
    (o = o.stateNode),
      i
        ? a.nodeType === 8
          ? a.parentNode.insertBefore(o, i)
          : a.insertBefore(o, i)
        : (a.nodeType === 8 ? ((i = a.parentNode), i.insertBefore(o, a)) : ((i = a), i.appendChild(o)),
          (a = a._reactRootContainer),
          a != null || i.onclick !== null || (i.onclick = Bf));
  else if (s !== 4 && ((o = o.child), o !== null))
    for (Wj(o, i, a), o = o.sibling; o !== null; ) Wj(o, i, a), (o = o.sibling);
}
function Xj(o, i, a) {
  var s = o.tag;
  if (s === 5 || s === 6) (o = o.stateNode), i ? a.insertBefore(o, i) : a.appendChild(o);
  else if (s !== 4 && ((o = o.child), o !== null))
    for (Xj(o, i, a), o = o.sibling; o !== null; ) Xj(o, i, a), (o = o.sibling);
}
var X$1 = null,
  Yj = !1;
function Zj(o, i, a) {
  for (a = a.child; a !== null; ) ak(o, i, a), (a = a.sibling);
}
function ak(o, i, a) {
  if (lc && typeof lc.onCommitFiberUnmount == "function")
    try {
      lc.onCommitFiberUnmount(kc, a);
    } catch {}
  switch (a.tag) {
    case 5:
      U$1 || Mj(a, i);
    case 6:
      var s = X$1,
        et = Yj;
      (X$1 = null),
        Zj(o, i, a),
        (X$1 = s),
        (Yj = et),
        X$1 !== null &&
          (Yj
            ? ((o = X$1), (a = a.stateNode), o.nodeType === 8 ? o.parentNode.removeChild(a) : o.removeChild(a))
            : X$1.removeChild(a.stateNode));
      break;
    case 18:
      X$1 !== null &&
        (Yj
          ? ((o = X$1), (a = a.stateNode), o.nodeType === 8 ? Kf(o.parentNode, a) : o.nodeType === 1 && Kf(o, a), bd(o))
          : Kf(X$1, a.stateNode));
      break;
    case 4:
      (s = X$1), (et = Yj), (X$1 = a.stateNode.containerInfo), (Yj = !0), Zj(o, i, a), (X$1 = s), (Yj = et);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && ((s = a.updateQueue), s !== null && ((s = s.lastEffect), s !== null))) {
        et = s = s.next;
        do {
          var tt = et,
            rt = tt.destroy;
          (tt = tt.tag), rt !== void 0 && (tt & 2 || tt & 4) && Nj(a, i, rt), (et = et.next);
        } while (et !== s);
      }
      Zj(o, i, a);
      break;
    case 1:
      if (!U$1 && (Mj(a, i), (s = a.stateNode), typeof s.componentWillUnmount == "function"))
        try {
          (s.props = a.memoizedProps), (s.state = a.memoizedState), s.componentWillUnmount();
        } catch (nt) {
          W$1(a, i, nt);
        }
      Zj(o, i, a);
      break;
    case 21:
      Zj(o, i, a);
      break;
    case 22:
      a.mode & 1 ? ((U$1 = (s = U$1) || a.memoizedState !== null), Zj(o, i, a), (U$1 = s)) : Zj(o, i, a);
      break;
    default:
      Zj(o, i, a);
  }
}
function bk(o) {
  var i = o.updateQueue;
  if (i !== null) {
    o.updateQueue = null;
    var a = o.stateNode;
    a === null && (a = o.stateNode = new Lj()),
      i.forEach(function (s) {
        var et = ck.bind(null, o, s);
        a.has(s) || (a.add(s), s.then(et, et));
      });
  }
}
function dk(o, i) {
  var a = i.deletions;
  if (a !== null)
    for (var s = 0; s < a.length; s++) {
      var et = a[s];
      try {
        var tt = o,
          rt = i,
          nt = rt;
        e: for (; nt !== null; ) {
          switch (nt.tag) {
            case 5:
              (X$1 = nt.stateNode), (Yj = !1);
              break e;
            case 3:
              (X$1 = nt.stateNode.containerInfo), (Yj = !0);
              break e;
            case 4:
              (X$1 = nt.stateNode.containerInfo), (Yj = !0);
              break e;
          }
          nt = nt.return;
        }
        if (X$1 === null) throw Error(p$1(160));
        ak(tt, rt, et), (X$1 = null), (Yj = !1);
        var ot = et.alternate;
        ot !== null && (ot.return = null), (et.return = null);
      } catch (it) {
        W$1(et, i, it);
      }
    }
  if (i.subtreeFlags & 12854) for (i = i.child; i !== null; ) ek(i, o), (i = i.sibling);
}
function ek(o, i) {
  var a = o.alternate,
    s = o.flags;
  switch (o.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dk(i, o), fk(o), s & 4)) {
        try {
          Qj(3, o, o.return), Rj(3, o);
        } catch (vt) {
          W$1(o, o.return, vt);
        }
        try {
          Qj(5, o, o.return);
        } catch (vt) {
          W$1(o, o.return, vt);
        }
      }
      break;
    case 1:
      dk(i, o), fk(o), s & 512 && a !== null && Mj(a, a.return);
      break;
    case 5:
      if ((dk(i, o), fk(o), s & 512 && a !== null && Mj(a, a.return), o.flags & 32)) {
        var et = o.stateNode;
        try {
          ob(et, "");
        } catch (vt) {
          W$1(o, o.return, vt);
        }
      }
      if (s & 4 && ((et = o.stateNode), et != null)) {
        var tt = o.memoizedProps,
          rt = a !== null ? a.memoizedProps : tt,
          nt = o.type,
          ot = o.updateQueue;
        if (((o.updateQueue = null), ot !== null))
          try {
            nt === "input" && tt.type === "radio" && tt.name != null && ab(et, tt), vb(nt, rt);
            var it = vb(nt, tt);
            for (rt = 0; rt < ot.length; rt += 2) {
              var ct = ot[rt],
                st = ot[rt + 1];
              ct === "style"
                ? sb(et, st)
                : ct === "dangerouslySetInnerHTML"
                ? nb(et, st)
                : ct === "children"
                ? ob(et, st)
                : ta(et, ct, st, it);
            }
            switch (nt) {
              case "input":
                bb(et, tt);
                break;
              case "textarea":
                ib(et, tt);
                break;
              case "select":
                var ft = et._wrapperState.wasMultiple;
                et._wrapperState.wasMultiple = !!tt.multiple;
                var gt = tt.value;
                gt != null
                  ? fb(et, !!tt.multiple, gt, !1)
                  : ft !== !!tt.multiple &&
                    (tt.defaultValue != null
                      ? fb(et, !!tt.multiple, tt.defaultValue, !0)
                      : fb(et, !!tt.multiple, tt.multiple ? [] : "", !1));
            }
            et[Pf] = tt;
          } catch (vt) {
            W$1(o, o.return, vt);
          }
      }
      break;
    case 6:
      if ((dk(i, o), fk(o), s & 4)) {
        if (o.stateNode === null) throw Error(p$1(162));
        (et = o.stateNode), (tt = o.memoizedProps);
        try {
          et.nodeValue = tt;
        } catch (vt) {
          W$1(o, o.return, vt);
        }
      }
      break;
    case 3:
      if ((dk(i, o), fk(o), s & 4 && a !== null && a.memoizedState.isDehydrated))
        try {
          bd(i.containerInfo);
        } catch (vt) {
          W$1(o, o.return, vt);
        }
      break;
    case 4:
      dk(i, o), fk(o);
      break;
    case 13:
      dk(i, o),
        fk(o),
        (et = o.child),
        et.flags & 8192 &&
          ((tt = et.memoizedState !== null),
          (et.stateNode.isHidden = tt),
          !tt || (et.alternate !== null && et.alternate.memoizedState !== null) || (gk = B$1())),
        s & 4 && bk(o);
      break;
    case 22:
      if (
        ((ct = a !== null && a.memoizedState !== null),
        o.mode & 1 ? ((U$1 = (it = U$1) || ct), dk(i, o), (U$1 = it)) : dk(i, o),
        fk(o),
        s & 8192)
      ) {
        if (((it = o.memoizedState !== null), (o.stateNode.isHidden = it) && !ct && o.mode & 1))
          for (V$1 = o, ct = o.child; ct !== null; ) {
            for (st = V$1 = ct; V$1 !== null; ) {
              switch (((ft = V$1), (gt = ft.child), ft.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, ft, ft.return);
                  break;
                case 1:
                  Mj(ft, ft.return);
                  var pt = ft.stateNode;
                  if (typeof pt.componentWillUnmount == "function") {
                    (s = ft), (a = ft.return);
                    try {
                      (i = s), (pt.props = i.memoizedProps), (pt.state = i.memoizedState), pt.componentWillUnmount();
                    } catch (vt) {
                      W$1(s, a, vt);
                    }
                  }
                  break;
                case 5:
                  Mj(ft, ft.return);
                  break;
                case 22:
                  if (ft.memoizedState !== null) {
                    hk(st);
                    continue;
                  }
              }
              gt !== null ? ((gt.return = ft), (V$1 = gt)) : hk(st);
            }
            ct = ct.sibling;
          }
        e: for (ct = null, st = o; ; ) {
          if (st.tag === 5) {
            if (ct === null) {
              ct = st;
              try {
                (et = st.stateNode),
                  it
                    ? ((tt = et.style),
                      typeof tt.setProperty == "function"
                        ? tt.setProperty("display", "none", "important")
                        : (tt.display = "none"))
                    : ((nt = st.stateNode),
                      (ot = st.memoizedProps.style),
                      (rt = ot != null && ot.hasOwnProperty("display") ? ot.display : null),
                      (nt.style.display = rb("display", rt)));
              } catch (vt) {
                W$1(o, o.return, vt);
              }
            }
          } else if (st.tag === 6) {
            if (ct === null)
              try {
                st.stateNode.nodeValue = it ? "" : st.memoizedProps;
              } catch (vt) {
                W$1(o, o.return, vt);
              }
          } else if (((st.tag !== 22 && st.tag !== 23) || st.memoizedState === null || st === o) && st.child !== null) {
            (st.child.return = st), (st = st.child);
            continue;
          }
          if (st === o) break e;
          for (; st.sibling === null; ) {
            if (st.return === null || st.return === o) break e;
            ct === st && (ct = null), (st = st.return);
          }
          ct === st && (ct = null), (st.sibling.return = st.return), (st = st.sibling);
        }
      }
      break;
    case 19:
      dk(i, o), fk(o), s & 4 && bk(o);
      break;
    case 21:
      break;
    default:
      dk(i, o), fk(o);
  }
}
function fk(o) {
  var i = o.flags;
  if (i & 2) {
    try {
      e: {
        for (var a = o.return; a !== null; ) {
          if (Uj(a)) {
            var s = a;
            break e;
          }
          a = a.return;
        }
        throw Error(p$1(160));
      }
      switch (s.tag) {
        case 5:
          var et = s.stateNode;
          s.flags & 32 && (ob(et, ""), (s.flags &= -33));
          var tt = Vj(o);
          Xj(o, tt, et);
          break;
        case 3:
        case 4:
          var rt = s.stateNode.containerInfo,
            nt = Vj(o);
          Wj(o, nt, rt);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (ot) {
      W$1(o, o.return, ot);
    }
    o.flags &= -3;
  }
  i & 4096 && (o.flags &= -4097);
}
function ik(o, i, a) {
  (V$1 = o), jk(o);
}
function jk(o, i, a) {
  for (var s = (o.mode & 1) !== 0; V$1 !== null; ) {
    var et = V$1,
      tt = et.child;
    if (et.tag === 22 && s) {
      var rt = et.memoizedState !== null || Kj;
      if (!rt) {
        var nt = et.alternate,
          ot = (nt !== null && nt.memoizedState !== null) || U$1;
        nt = Kj;
        var it = U$1;
        if (((Kj = rt), (U$1 = ot) && !it))
          for (V$1 = et; V$1 !== null; )
            (rt = V$1),
              (ot = rt.child),
              rt.tag === 22 && rt.memoizedState !== null
                ? kk(et)
                : ot !== null
                ? ((ot.return = rt), (V$1 = ot))
                : kk(et);
        for (; tt !== null; ) (V$1 = tt), jk(tt), (tt = tt.sibling);
        (V$1 = et), (Kj = nt), (U$1 = it);
      }
      lk(o);
    } else et.subtreeFlags & 8772 && tt !== null ? ((tt.return = et), (V$1 = tt)) : lk(o);
  }
}
function lk(o) {
  for (; V$1 !== null; ) {
    var i = V$1;
    if (i.flags & 8772) {
      var a = i.alternate;
      try {
        if (i.flags & 8772)
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              U$1 || Rj(5, i);
              break;
            case 1:
              var s = i.stateNode;
              if (i.flags & 4 && !U$1)
                if (a === null) s.componentDidMount();
                else {
                  var et = i.elementType === i.type ? a.memoizedProps : Lg(i.type, a.memoizedProps);
                  s.componentDidUpdate(et, a.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                }
              var tt = i.updateQueue;
              tt !== null && ih(i, tt, s);
              break;
            case 3:
              var rt = i.updateQueue;
              if (rt !== null) {
                if (((a = null), i.child !== null))
                  switch (i.child.tag) {
                    case 5:
                      a = i.child.stateNode;
                      break;
                    case 1:
                      a = i.child.stateNode;
                  }
                ih(i, rt, a);
              }
              break;
            case 5:
              var nt = i.stateNode;
              if (a === null && i.flags & 4) {
                a = nt;
                var ot = i.memoizedProps;
                switch (i.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    ot.autoFocus && a.focus();
                    break;
                  case "img":
                    ot.src && (a.src = ot.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (i.memoizedState === null) {
                var it = i.alternate;
                if (it !== null) {
                  var ct = it.memoizedState;
                  if (ct !== null) {
                    var st = ct.dehydrated;
                    st !== null && bd(st);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$1(163));
          }
        U$1 || (i.flags & 512 && Sj(i));
      } catch (ft) {
        W$1(i, i.return, ft);
      }
    }
    if (i === o) {
      V$1 = null;
      break;
    }
    if (((a = i.sibling), a !== null)) {
      (a.return = i.return), (V$1 = a);
      break;
    }
    V$1 = i.return;
  }
}
function hk(o) {
  for (; V$1 !== null; ) {
    var i = V$1;
    if (i === o) {
      V$1 = null;
      break;
    }
    var a = i.sibling;
    if (a !== null) {
      (a.return = i.return), (V$1 = a);
      break;
    }
    V$1 = i.return;
  }
}
function kk(o) {
  for (; V$1 !== null; ) {
    var i = V$1;
    try {
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          var a = i.return;
          try {
            Rj(4, i);
          } catch (ot) {
            W$1(i, a, ot);
          }
          break;
        case 1:
          var s = i.stateNode;
          if (typeof s.componentDidMount == "function") {
            var et = i.return;
            try {
              s.componentDidMount();
            } catch (ot) {
              W$1(i, et, ot);
            }
          }
          var tt = i.return;
          try {
            Sj(i);
          } catch (ot) {
            W$1(i, tt, ot);
          }
          break;
        case 5:
          var rt = i.return;
          try {
            Sj(i);
          } catch (ot) {
            W$1(i, rt, ot);
          }
      }
    } catch (ot) {
      W$1(i, i.return, ot);
    }
    if (i === o) {
      V$1 = null;
      break;
    }
    var nt = i.sibling;
    if (nt !== null) {
      (nt.return = i.return), (V$1 = nt);
      break;
    }
    V$1 = i.return;
  }
}
var mk = Math.ceil,
  nk = ua.ReactCurrentDispatcher,
  ok = ua.ReactCurrentOwner,
  pk = ua.ReactCurrentBatchConfig,
  K$1 = 0,
  R = null,
  Y$1 = null,
  Z$1 = 0,
  gj = 0,
  fj = Uf(0),
  T$1 = 0,
  qk = null,
  hh = 0,
  rk = 0,
  sk = 0,
  tk = null,
  uk = null,
  gk = 0,
  Hj = 1 / 0,
  vk = null,
  Pi = !1,
  Qi = null,
  Si = null,
  wk = !1,
  xk = null,
  yk = 0,
  zk = 0,
  Ak = null,
  Bk = -1,
  Ck = 0;
function L$1() {
  return K$1 & 6 ? B$1() : Bk !== -1 ? Bk : (Bk = B$1());
}
function lh(o) {
  return o.mode & 1
    ? K$1 & 2 && Z$1 !== 0
      ? Z$1 & -Z$1
      : Kg.transition !== null
      ? (Ck === 0 && (Ck = yc()), Ck)
      : ((o = C), o !== 0 || ((o = window.event), (o = o === void 0 ? 16 : jd(o.type))), o)
    : 1;
}
function mh(o, i, a, s) {
  if (50 < zk) throw ((zk = 0), (Ak = null), Error(p$1(185)));
  Ac(o, a, s),
    (!(K$1 & 2) || o !== R) &&
      (o === R && (!(K$1 & 2) && (rk |= a), T$1 === 4 && Dk(o, Z$1)),
      Ek(o, s),
      a === 1 && K$1 === 0 && !(i.mode & 1) && ((Hj = B$1() + 500), fg && jg()));
}
function Ek(o, i) {
  var a = o.callbackNode;
  wc(o, i);
  var s = uc(o, o === R ? Z$1 : 0);
  if (s === 0) a !== null && bc(a), (o.callbackNode = null), (o.callbackPriority = 0);
  else if (((i = s & -s), o.callbackPriority !== i)) {
    if ((a != null && bc(a), i === 1))
      o.tag === 0 ? ig(Fk.bind(null, o)) : hg(Fk.bind(null, o)),
        Jf(function () {
          !(K$1 & 6) && jg();
        }),
        (a = null);
    else {
      switch (Dc(s)) {
        case 1:
          a = fc;
          break;
        case 4:
          a = gc;
          break;
        case 16:
          a = hc;
          break;
        case 536870912:
          a = jc;
          break;
        default:
          a = hc;
      }
      a = Gk(a, Hk.bind(null, o));
    }
    (o.callbackPriority = i), (o.callbackNode = a);
  }
}
function Hk(o, i) {
  if (((Bk = -1), (Ck = 0), K$1 & 6)) throw Error(p$1(327));
  var a = o.callbackNode;
  if (Ik() && o.callbackNode !== a) return null;
  var s = uc(o, o === R ? Z$1 : 0);
  if (s === 0) return null;
  if (s & 30 || s & o.expiredLanes || i) i = Jk(o, s);
  else {
    i = s;
    var et = K$1;
    K$1 |= 2;
    var tt = Kk();
    (R !== o || Z$1 !== i) && ((vk = null), (Hj = B$1() + 500), Lk(o, i));
    do
      try {
        Mk();
        break;
      } catch (nt) {
        Nk(o, nt);
      }
    while (1);
    Qg(), (nk.current = tt), (K$1 = et), Y$1 !== null ? (i = 0) : ((R = null), (Z$1 = 0), (i = T$1));
  }
  if (i !== 0) {
    if ((i === 2 && ((et = xc(o)), et !== 0 && ((s = et), (i = Ok(o, et)))), i === 1))
      throw ((a = qk), Lk(o, 0), Dk(o, s), Ek(o, B$1()), a);
    if (i === 6) Dk(o, s);
    else {
      if (
        ((et = o.current.alternate),
        !(s & 30) &&
          !Pk(et) &&
          ((i = Jk(o, s)), i === 2 && ((tt = xc(o)), tt !== 0 && ((s = tt), (i = Ok(o, tt)))), i === 1))
      )
        throw ((a = qk), Lk(o, 0), Dk(o, s), Ek(o, B$1()), a);
      switch (((o.finishedWork = et), (o.finishedLanes = s), i)) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
          Qk(o, uk, vk);
          break;
        case 3:
          if ((Dk(o, s), (s & 130023424) === s && ((i = gk + 500 - B$1()), 10 < i))) {
            if (uc(o, 0) !== 0) break;
            if (((et = o.suspendedLanes), (et & s) !== s)) {
              L$1(), (o.pingedLanes |= o.suspendedLanes & et);
              break;
            }
            o.timeoutHandle = Ff(Qk.bind(null, o, uk, vk), i);
            break;
          }
          Qk(o, uk, vk);
          break;
        case 4:
          if ((Dk(o, s), (s & 4194240) === s)) break;
          for (i = o.eventTimes, et = -1; 0 < s; ) {
            var rt = 31 - oc(s);
            (tt = 1 << rt), (rt = i[rt]), rt > et && (et = rt), (s &= ~tt);
          }
          if (
            ((s = et),
            (s = B$1() - s),
            (s =
              (120 > s
                ? 120
                : 480 > s
                ? 480
                : 1080 > s
                ? 1080
                : 1920 > s
                ? 1920
                : 3e3 > s
                ? 3e3
                : 4320 > s
                ? 4320
                : 1960 * mk(s / 1960)) - s),
            10 < s)
          ) {
            o.timeoutHandle = Ff(Qk.bind(null, o, uk, vk), s);
            break;
          }
          Qk(o, uk, vk);
          break;
        case 5:
          Qk(o, uk, vk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  return Ek(o, B$1()), o.callbackNode === a ? Hk.bind(null, o) : null;
}
function Ok(o, i) {
  var a = tk;
  return (
    o.current.memoizedState.isDehydrated && (Lk(o, i).flags |= 256),
    (o = Jk(o, i)),
    o !== 2 && ((i = uk), (uk = a), i !== null && Gj(i)),
    o
  );
}
function Gj(o) {
  uk === null ? (uk = o) : uk.push.apply(uk, o);
}
function Pk(o) {
  for (var i = o; ; ) {
    if (i.flags & 16384) {
      var a = i.updateQueue;
      if (a !== null && ((a = a.stores), a !== null))
        for (var s = 0; s < a.length; s++) {
          var et = a[s],
            tt = et.getSnapshot;
          et = et.value;
          try {
            if (!He$1(tt(), et)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((a = i.child), i.subtreeFlags & 16384 && a !== null)) (a.return = i), (i = a);
    else {
      if (i === o) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === o) return !0;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }
  return !0;
}
function Dk(o, i) {
  for (i &= ~sk, i &= ~rk, o.suspendedLanes |= i, o.pingedLanes &= ~i, o = o.expirationTimes; 0 < i; ) {
    var a = 31 - oc(i),
      s = 1 << a;
    (o[a] = -1), (i &= ~s);
  }
}
function Fk(o) {
  if (K$1 & 6) throw Error(p$1(327));
  Ik();
  var i = uc(o, 0);
  if (!(i & 1)) return Ek(o, B$1()), null;
  var a = Jk(o, i);
  if (o.tag !== 0 && a === 2) {
    var s = xc(o);
    s !== 0 && ((i = s), (a = Ok(o, s)));
  }
  if (a === 1) throw ((a = qk), Lk(o, 0), Dk(o, i), Ek(o, B$1()), a);
  if (a === 6) throw Error(p$1(345));
  return (o.finishedWork = o.current.alternate), (o.finishedLanes = i), Qk(o, uk, vk), Ek(o, B$1()), null;
}
function Rk(o, i) {
  var a = K$1;
  K$1 |= 1;
  try {
    return o(i);
  } finally {
    (K$1 = a), K$1 === 0 && ((Hj = B$1() + 500), fg && jg());
  }
}
function Sk(o) {
  xk !== null && xk.tag === 0 && !(K$1 & 6) && Ik();
  var i = K$1;
  K$1 |= 1;
  var a = pk.transition,
    s = C;
  try {
    if (((pk.transition = null), (C = 1), o)) return o();
  } finally {
    (C = s), (pk.transition = a), (K$1 = i), !(K$1 & 6) && jg();
  }
}
function Ij() {
  (gj = fj.current), E$1(fj);
}
function Lk(o, i) {
  (o.finishedWork = null), (o.finishedLanes = 0);
  var a = o.timeoutHandle;
  if ((a !== -1 && ((o.timeoutHandle = -1), Gf(a)), Y$1 !== null))
    for (a = Y$1.return; a !== null; ) {
      var s = a;
      switch ((wg(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && $f();
          break;
        case 3:
          Jh(), E$1(Wf), E$1(H$1), Oh();
          break;
        case 5:
          Lh(s);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E$1(M$1);
          break;
        case 19:
          E$1(M$1);
          break;
        case 10:
          Rg(s.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      a = a.return;
    }
  if (
    ((R = o),
    (Y$1 = o = wh(o.current, null)),
    (Z$1 = gj = i),
    (T$1 = 0),
    (qk = null),
    (sk = rk = hh = 0),
    (uk = tk = null),
    Wg !== null)
  ) {
    for (i = 0; i < Wg.length; i++)
      if (((a = Wg[i]), (s = a.interleaved), s !== null)) {
        a.interleaved = null;
        var et = s.next,
          tt = a.pending;
        if (tt !== null) {
          var rt = tt.next;
          (tt.next = et), (s.next = rt);
        }
        a.pending = s;
      }
    Wg = null;
  }
  return o;
}
function Nk(o, i) {
  do {
    var a = Y$1;
    try {
      if ((Qg(), (Ph.current = ai), Sh)) {
        for (var s = N$1.memoizedState; s !== null; ) {
          var et = s.queue;
          et !== null && (et.pending = null), (s = s.next);
        }
        Sh = !1;
      }
      if (
        ((Rh = 0), (P$1 = O = N$1 = null), (Th = !1), (Uh = 0), (ok.current = null), a === null || a.return === null)
      ) {
        (T$1 = 1), (qk = i), (Y$1 = null);
        break;
      }
      e: {
        var tt = o,
          rt = a.return,
          nt = a,
          ot = i;
        if (((i = Z$1), (nt.flags |= 32768), ot !== null && typeof ot == "object" && typeof ot.then == "function")) {
          var it = ot,
            ct = nt,
            st = ct.tag;
          if (!(ct.mode & 1) && (st === 0 || st === 11 || st === 15)) {
            var ft = ct.alternate;
            ft
              ? ((ct.updateQueue = ft.updateQueue), (ct.memoizedState = ft.memoizedState), (ct.lanes = ft.lanes))
              : ((ct.updateQueue = null), (ct.memoizedState = null));
          }
          var gt = Vi(rt);
          if (gt !== null) {
            (gt.flags &= -257), Wi(gt, rt, nt, tt, i), gt.mode & 1 && Ti(tt, it, i), (i = gt), (ot = it);
            var pt = i.updateQueue;
            if (pt === null) {
              var vt = new Set();
              vt.add(ot), (i.updateQueue = vt);
            } else pt.add(ot);
            break e;
          } else {
            if (!(i & 1)) {
              Ti(tt, it, i), uj();
              break e;
            }
            ot = Error(p$1(426));
          }
        } else if (I$1 && nt.mode & 1) {
          var Lt = Vi(rt);
          if (Lt !== null) {
            !(Lt.flags & 65536) && (Lt.flags |= 256), Wi(Lt, rt, nt, tt, i), Jg(Ki(ot, nt));
            break e;
          }
        }
        (tt = ot = Ki(ot, nt)), T$1 !== 4 && (T$1 = 2), tk === null ? (tk = [tt]) : tk.push(tt), (tt = rt);
        do {
          switch (tt.tag) {
            case 3:
              (tt.flags |= 65536), (i &= -i), (tt.lanes |= i);
              var at = Oi(tt, ot, i);
              fh(tt, at);
              break e;
            case 1:
              nt = ot;
              var lt = tt.type,
                ut = tt.stateNode;
              if (
                !(tt.flags & 128) &&
                (typeof lt.getDerivedStateFromError == "function" ||
                  (ut !== null && typeof ut.componentDidCatch == "function" && (Si === null || !Si.has(ut))))
              ) {
                (tt.flags |= 65536), (i &= -i), (tt.lanes |= i);
                var ht = Ri(tt, nt, i);
                fh(tt, ht);
                break e;
              }
          }
          tt = tt.return;
        } while (tt !== null);
      }
      Tk(a);
    } catch (kt) {
      (i = kt), Y$1 === a && a !== null && (Y$1 = a = a.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var o = nk.current;
  return (nk.current = ai), o === null ? ai : o;
}
function uj() {
  (T$1 === 0 || T$1 === 3 || T$1 === 2) && (T$1 = 4),
    R === null || (!(hh & 268435455) && !(rk & 268435455)) || Dk(R, Z$1);
}
function Jk(o, i) {
  var a = K$1;
  K$1 |= 2;
  var s = Kk();
  (R !== o || Z$1 !== i) && ((vk = null), Lk(o, i));
  do
    try {
      Uk();
      break;
    } catch (et) {
      Nk(o, et);
    }
  while (1);
  if ((Qg(), (K$1 = a), (nk.current = s), Y$1 !== null)) throw Error(p$1(261));
  return (R = null), (Z$1 = 0), T$1;
}
function Uk() {
  for (; Y$1 !== null; ) Vk(Y$1);
}
function Mk() {
  for (; Y$1 !== null && !cc(); ) Vk(Y$1);
}
function Vk(o) {
  var i = Wk(o.alternate, o, gj);
  (o.memoizedProps = o.pendingProps), i === null ? Tk(o) : (Y$1 = i), (ok.current = null);
}
function Tk(o) {
  var i = o;
  do {
    var a = i.alternate;
    if (((o = i.return), i.flags & 32768)) {
      if (((a = Jj(a, i)), a !== null)) {
        (a.flags &= 32767), (Y$1 = a);
        return;
      }
      if (o !== null) (o.flags |= 32768), (o.subtreeFlags = 0), (o.deletions = null);
      else {
        (T$1 = 6), (Y$1 = null);
        return;
      }
    } else if (((a = Fj(a, i, gj)), a !== null)) {
      Y$1 = a;
      return;
    }
    if (((i = i.sibling), i !== null)) {
      Y$1 = i;
      return;
    }
    Y$1 = i = o;
  } while (i !== null);
  T$1 === 0 && (T$1 = 5);
}
function Qk(o, i, a) {
  var s = C,
    et = pk.transition;
  try {
    (pk.transition = null), (C = 1), Xk(o, i, a, s);
  } finally {
    (pk.transition = et), (C = s);
  }
  return null;
}
function Xk(o, i, a, s) {
  do Ik();
  while (xk !== null);
  if (K$1 & 6) throw Error(p$1(327));
  a = o.finishedWork;
  var et = o.finishedLanes;
  if (a === null) return null;
  if (((o.finishedWork = null), (o.finishedLanes = 0), a === o.current)) throw Error(p$1(177));
  (o.callbackNode = null), (o.callbackPriority = 0);
  var tt = a.lanes | a.childLanes;
  if (
    (Bc(o, tt),
    o === R && ((Y$1 = R = null), (Z$1 = 0)),
    (!(a.subtreeFlags & 2064) && !(a.flags & 2064)) ||
      wk ||
      ((wk = !0),
      Gk(hc, function () {
        return Ik(), null;
      })),
    (tt = (a.flags & 15990) !== 0),
    a.subtreeFlags & 15990 || tt)
  ) {
    (tt = pk.transition), (pk.transition = null);
    var rt = C;
    C = 1;
    var nt = K$1;
    (K$1 |= 4),
      (ok.current = null),
      Pj(o, a),
      ek(a, o),
      Oe(Df),
      (dd = !!Cf),
      (Df = Cf = null),
      (o.current = a),
      ik(a),
      dc(),
      (K$1 = nt),
      (C = rt),
      (pk.transition = tt);
  } else o.current = a;
  if (
    (wk && ((wk = !1), (xk = o), (yk = et)),
    (tt = o.pendingLanes),
    tt === 0 && (Si = null),
    mc(a.stateNode),
    Ek(o, B$1()),
    i !== null)
  )
    for (s = o.onRecoverableError, a = 0; a < i.length; a++)
      (et = i[a]), s(et.value, { componentStack: et.stack, digest: et.digest });
  if (Pi) throw ((Pi = !1), (o = Qi), (Qi = null), o);
  return (
    yk & 1 && o.tag !== 0 && Ik(),
    (tt = o.pendingLanes),
    tt & 1 ? (o === Ak ? zk++ : ((zk = 0), (Ak = o))) : (zk = 0),
    jg(),
    null
  );
}
function Ik() {
  if (xk !== null) {
    var o = Dc(yk),
      i = pk.transition,
      a = C;
    try {
      if (((pk.transition = null), (C = 16 > o ? 16 : o), xk === null)) var s = !1;
      else {
        if (((o = xk), (xk = null), (yk = 0), K$1 & 6)) throw Error(p$1(331));
        var et = K$1;
        for (K$1 |= 4, V$1 = o.current; V$1 !== null; ) {
          var tt = V$1,
            rt = tt.child;
          if (V$1.flags & 16) {
            var nt = tt.deletions;
            if (nt !== null) {
              for (var ot = 0; ot < nt.length; ot++) {
                var it = nt[ot];
                for (V$1 = it; V$1 !== null; ) {
                  var ct = V$1;
                  switch (ct.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, ct, tt);
                  }
                  var st = ct.child;
                  if (st !== null) (st.return = ct), (V$1 = st);
                  else
                    for (; V$1 !== null; ) {
                      ct = V$1;
                      var ft = ct.sibling,
                        gt = ct.return;
                      if ((Tj(ct), ct === it)) {
                        V$1 = null;
                        break;
                      }
                      if (ft !== null) {
                        (ft.return = gt), (V$1 = ft);
                        break;
                      }
                      V$1 = gt;
                    }
                }
              }
              var pt = tt.alternate;
              if (pt !== null) {
                var vt = pt.child;
                if (vt !== null) {
                  pt.child = null;
                  do {
                    var Lt = vt.sibling;
                    (vt.sibling = null), (vt = Lt);
                  } while (vt !== null);
                }
              }
              V$1 = tt;
            }
          }
          if (tt.subtreeFlags & 2064 && rt !== null) (rt.return = tt), (V$1 = rt);
          else
            e: for (; V$1 !== null; ) {
              if (((tt = V$1), tt.flags & 2048))
                switch (tt.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, tt, tt.return);
                }
              var at = tt.sibling;
              if (at !== null) {
                (at.return = tt.return), (V$1 = at);
                break e;
              }
              V$1 = tt.return;
            }
        }
        var lt = o.current;
        for (V$1 = lt; V$1 !== null; ) {
          rt = V$1;
          var ut = rt.child;
          if (rt.subtreeFlags & 2064 && ut !== null) (ut.return = rt), (V$1 = ut);
          else
            e: for (rt = lt; V$1 !== null; ) {
              if (((nt = V$1), nt.flags & 2048))
                try {
                  switch (nt.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rj(9, nt);
                  }
                } catch (kt) {
                  W$1(nt, nt.return, kt);
                }
              if (nt === rt) {
                V$1 = null;
                break e;
              }
              var ht = nt.sibling;
              if (ht !== null) {
                (ht.return = nt.return), (V$1 = ht);
                break e;
              }
              V$1 = nt.return;
            }
        }
        if (((K$1 = et), jg(), lc && typeof lc.onPostCommitFiberRoot == "function"))
          try {
            lc.onPostCommitFiberRoot(kc, o);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (C = a), (pk.transition = i);
    }
  }
  return !1;
}
function Yk(o, i, a) {
  (i = Ki(a, i)), (i = Oi(o, i, 1)), (o = dh(o, i, 1)), (i = L$1()), o !== null && (Ac(o, 1, i), Ek(o, i));
}
function W$1(o, i, a) {
  if (o.tag === 3) Yk(o, o, a);
  else
    for (; i !== null; ) {
      if (i.tag === 3) {
        Yk(i, o, a);
        break;
      } else if (i.tag === 1) {
        var s = i.stateNode;
        if (
          typeof i.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" && (Si === null || !Si.has(s)))
        ) {
          (o = Ki(a, o)), (o = Ri(i, o, 1)), (i = dh(i, o, 1)), (o = L$1()), i !== null && (Ac(i, 1, o), Ek(i, o));
          break;
        }
      }
      i = i.return;
    }
}
function Ui(o, i, a) {
  var s = o.pingCache;
  s !== null && s.delete(i),
    (i = L$1()),
    (o.pingedLanes |= o.suspendedLanes & a),
    R === o &&
      (Z$1 & a) === a &&
      (T$1 === 4 || (T$1 === 3 && (Z$1 & 130023424) === Z$1 && 500 > B$1() - gk) ? Lk(o, 0) : (sk |= a)),
    Ek(o, i);
}
function Zk(o, i) {
  i === 0 && (o.mode & 1 ? ((i = sc), (sc <<= 1), !(sc & 130023424) && (sc = 4194304)) : (i = 1));
  var a = L$1();
  (o = Zg(o, i)), o !== null && (Ac(o, i, a), Ek(o, a));
}
function vj(o) {
  var i = o.memoizedState,
    a = 0;
  i !== null && (a = i.retryLane), Zk(o, a);
}
function ck(o, i) {
  var a = 0;
  switch (o.tag) {
    case 13:
      var s = o.stateNode,
        et = o.memoizedState;
      et !== null && (a = et.retryLane);
      break;
    case 19:
      s = o.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  s !== null && s.delete(i), Zk(o, a);
}
var Wk;
Wk = function (o, i, a) {
  if (o !== null)
    if (o.memoizedProps !== i.pendingProps || Wf.current) Ug = !0;
    else {
      if (!(o.lanes & a) && !(i.flags & 128)) return (Ug = !1), zj(o, i, a);
      Ug = !!(o.flags & 131072);
    }
  else (Ug = !1), I$1 && i.flags & 1048576 && ug(i, ng, i.index);
  switch (((i.lanes = 0), i.tag)) {
    case 2:
      var s = i.type;
      jj(o, i), (o = i.pendingProps);
      var et = Yf(i, H$1.current);
      Tg(i, a), (et = Xh(null, i, s, o, et, a));
      var tt = bi();
      return (
        (i.flags |= 1),
        typeof et == "object" && et !== null && typeof et.render == "function" && et.$$typeof === void 0
          ? ((i.tag = 1),
            (i.memoizedState = null),
            (i.updateQueue = null),
            Zf(s) ? ((tt = !0), cg(i)) : (tt = !1),
            (i.memoizedState = et.state !== null && et.state !== void 0 ? et.state : null),
            ah(i),
            (et.updater = nh),
            (i.stateNode = et),
            (et._reactInternals = i),
            rh(i, s, o, a),
            (i = kj(null, i, s, !0, tt, a)))
          : ((i.tag = 0), I$1 && tt && vg(i), Yi(null, i, et, a), (i = i.child)),
        i
      );
    case 16:
      s = i.elementType;
      e: {
        switch (
          (jj(o, i),
          (o = i.pendingProps),
          (et = s._init),
          (s = et(s._payload)),
          (i.type = s),
          (et = i.tag = $k(s)),
          (o = Lg(s, o)),
          et)
        ) {
          case 0:
            i = dj(null, i, s, o, a);
            break e;
          case 1:
            i = ij(null, i, s, o, a);
            break e;
          case 11:
            i = Zi(null, i, s, o, a);
            break e;
          case 14:
            i = aj(null, i, s, Lg(s.type, o), a);
            break e;
        }
        throw Error(p$1(306, s, ""));
      }
      return i;
    case 0:
      return (s = i.type), (et = i.pendingProps), (et = i.elementType === s ? et : Lg(s, et)), dj(o, i, s, et, a);
    case 1:
      return (s = i.type), (et = i.pendingProps), (et = i.elementType === s ? et : Lg(s, et)), ij(o, i, s, et, a);
    case 3:
      e: {
        if ((lj(i), o === null)) throw Error(p$1(387));
        (s = i.pendingProps), (tt = i.memoizedState), (et = tt.element), bh(o, i), gh(i, s, null, a);
        var rt = i.memoizedState;
        if (((s = rt.element), tt.isDehydrated))
          if (
            ((tt = {
              element: s,
              isDehydrated: !1,
              cache: rt.cache,
              pendingSuspenseBoundaries: rt.pendingSuspenseBoundaries,
              transitions: rt.transitions,
            }),
            (i.updateQueue.baseState = tt),
            (i.memoizedState = tt),
            i.flags & 256)
          ) {
            (et = Ki(Error(p$1(423)), i)), (i = mj(o, i, s, a, et));
            break e;
          } else if (s !== et) {
            (et = Ki(Error(p$1(424)), i)), (i = mj(o, i, s, a, et));
            break e;
          } else
            for (
              yg = Lf(i.stateNode.containerInfo.firstChild),
                xg = i,
                I$1 = !0,
                zg = null,
                a = Ch(i, null, s, a),
                i.child = a;
              a;

            )
              (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
        else {
          if ((Ig(), s === et)) {
            i = $i(o, i, a);
            break e;
          }
          Yi(o, i, s, a);
        }
        i = i.child;
      }
      return i;
    case 5:
      return (
        Kh(i),
        o === null && Eg(i),
        (s = i.type),
        (et = i.pendingProps),
        (tt = o !== null ? o.memoizedProps : null),
        (rt = et.children),
        Ef(s, et) ? (rt = null) : tt !== null && Ef(s, tt) && (i.flags |= 32),
        hj(o, i),
        Yi(o, i, rt, a),
        i.child
      );
    case 6:
      return o === null && Eg(i), null;
    case 13:
      return pj(o, i, a);
    case 4:
      return (
        Ih(i, i.stateNode.containerInfo),
        (s = i.pendingProps),
        o === null ? (i.child = Bh(i, null, s, a)) : Yi(o, i, s, a),
        i.child
      );
    case 11:
      return (s = i.type), (et = i.pendingProps), (et = i.elementType === s ? et : Lg(s, et)), Zi(o, i, s, et, a);
    case 7:
      return Yi(o, i, i.pendingProps, a), i.child;
    case 8:
      return Yi(o, i, i.pendingProps.children, a), i.child;
    case 12:
      return Yi(o, i, i.pendingProps.children, a), i.child;
    case 10:
      e: {
        if (
          ((s = i.type._context),
          (et = i.pendingProps),
          (tt = i.memoizedProps),
          (rt = et.value),
          G$1(Mg, s._currentValue),
          (s._currentValue = rt),
          tt !== null)
        )
          if (He$1(tt.value, rt)) {
            if (tt.children === et.children && !Wf.current) {
              i = $i(o, i, a);
              break e;
            }
          } else
            for (tt = i.child, tt !== null && (tt.return = i); tt !== null; ) {
              var nt = tt.dependencies;
              if (nt !== null) {
                rt = tt.child;
                for (var ot = nt.firstContext; ot !== null; ) {
                  if (ot.context === s) {
                    if (tt.tag === 1) {
                      (ot = ch(-1, a & -a)), (ot.tag = 2);
                      var it = tt.updateQueue;
                      if (it !== null) {
                        it = it.shared;
                        var ct = it.pending;
                        ct === null ? (ot.next = ot) : ((ot.next = ct.next), (ct.next = ot)), (it.pending = ot);
                      }
                    }
                    (tt.lanes |= a),
                      (ot = tt.alternate),
                      ot !== null && (ot.lanes |= a),
                      Sg(tt.return, a, i),
                      (nt.lanes |= a);
                    break;
                  }
                  ot = ot.next;
                }
              } else if (tt.tag === 10) rt = tt.type === i.type ? null : tt.child;
              else if (tt.tag === 18) {
                if (((rt = tt.return), rt === null)) throw Error(p$1(341));
                (rt.lanes |= a), (nt = rt.alternate), nt !== null && (nt.lanes |= a), Sg(rt, a, i), (rt = tt.sibling);
              } else rt = tt.child;
              if (rt !== null) rt.return = tt;
              else
                for (rt = tt; rt !== null; ) {
                  if (rt === i) {
                    rt = null;
                    break;
                  }
                  if (((tt = rt.sibling), tt !== null)) {
                    (tt.return = rt.return), (rt = tt);
                    break;
                  }
                  rt = rt.return;
                }
              tt = rt;
            }
        Yi(o, i, et.children, a), (i = i.child);
      }
      return i;
    case 9:
      return (
        (et = i.type),
        (s = i.pendingProps.children),
        Tg(i, a),
        (et = Vg(et)),
        (s = s(et)),
        (i.flags |= 1),
        Yi(o, i, s, a),
        i.child
      );
    case 14:
      return (s = i.type), (et = Lg(s, i.pendingProps)), (et = Lg(s.type, et)), aj(o, i, s, et, a);
    case 15:
      return cj(o, i, i.type, i.pendingProps, a);
    case 17:
      return (
        (s = i.type),
        (et = i.pendingProps),
        (et = i.elementType === s ? et : Lg(s, et)),
        jj(o, i),
        (i.tag = 1),
        Zf(s) ? ((o = !0), cg(i)) : (o = !1),
        Tg(i, a),
        ph(i, s, et),
        rh(i, s, et, a),
        kj(null, i, s, !0, o, a)
      );
    case 19:
      return yj(o, i, a);
    case 22:
      return ej(o, i, a);
  }
  throw Error(p$1(156, i.tag));
};
function Gk(o, i) {
  return ac(o, i);
}
function al(o, i, a, s) {
  (this.tag = o),
    (this.key = a),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = i),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = s),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Bg(o, i, a, s) {
  return new al(o, i, a, s);
}
function bj(o) {
  return (o = o.prototype), !(!o || !o.isReactComponent);
}
function $k(o) {
  if (typeof o == "function") return bj(o) ? 1 : 0;
  if (o != null) {
    if (((o = o.$$typeof), o === Da)) return 11;
    if (o === Ga) return 14;
  }
  return 2;
}
function wh(o, i) {
  var a = o.alternate;
  return (
    a === null
      ? ((a = Bg(o.tag, i, o.key, o.mode)),
        (a.elementType = o.elementType),
        (a.type = o.type),
        (a.stateNode = o.stateNode),
        (a.alternate = o),
        (o.alternate = a))
      : ((a.pendingProps = i), (a.type = o.type), (a.flags = 0), (a.subtreeFlags = 0), (a.deletions = null)),
    (a.flags = o.flags & 14680064),
    (a.childLanes = o.childLanes),
    (a.lanes = o.lanes),
    (a.child = o.child),
    (a.memoizedProps = o.memoizedProps),
    (a.memoizedState = o.memoizedState),
    (a.updateQueue = o.updateQueue),
    (i = o.dependencies),
    (a.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
    (a.sibling = o.sibling),
    (a.index = o.index),
    (a.ref = o.ref),
    a
  );
}
function yh(o, i, a, s, et, tt) {
  var rt = 2;
  if (((s = o), typeof o == "function")) bj(o) && (rt = 1);
  else if (typeof o == "string") rt = 5;
  else
    e: switch (o) {
      case ya:
        return Ah(a.children, et, tt, i);
      case za:
        (rt = 8), (et |= 8);
        break;
      case Aa:
        return (o = Bg(12, a, i, et | 2)), (o.elementType = Aa), (o.lanes = tt), o;
      case Ea:
        return (o = Bg(13, a, i, et)), (o.elementType = Ea), (o.lanes = tt), o;
      case Fa:
        return (o = Bg(19, a, i, et)), (o.elementType = Fa), (o.lanes = tt), o;
      case Ia:
        return qj(a, et, tt, i);
      default:
        if (typeof o == "object" && o !== null)
          switch (o.$$typeof) {
            case Ba:
              rt = 10;
              break e;
            case Ca:
              rt = 9;
              break e;
            case Da:
              rt = 11;
              break e;
            case Ga:
              rt = 14;
              break e;
            case Ha:
              (rt = 16), (s = null);
              break e;
          }
        throw Error(p$1(130, o == null ? o : typeof o, ""));
    }
  return (i = Bg(rt, a, i, et)), (i.elementType = o), (i.type = s), (i.lanes = tt), i;
}
function Ah(o, i, a, s) {
  return (o = Bg(7, o, s, i)), (o.lanes = a), o;
}
function qj(o, i, a, s) {
  return (o = Bg(22, o, s, i)), (o.elementType = Ia), (o.lanes = a), (o.stateNode = { isHidden: !1 }), o;
}
function xh(o, i, a) {
  return (o = Bg(6, o, null, i)), (o.lanes = a), o;
}
function zh(o, i, a) {
  return (
    (i = Bg(4, o.children !== null ? o.children : [], o.key, i)),
    (i.lanes = a),
    (i.stateNode = { containerInfo: o.containerInfo, pendingChildren: null, implementation: o.implementation }),
    i
  );
}
function bl(o, i, a, s, et) {
  (this.tag = i),
    (this.containerInfo = o),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zc(0)),
    (this.expirationTimes = zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zc(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = et),
    (this.mutableSourceEagerHydrationData = null);
}
function cl(o, i, a, s, et, tt, rt, nt, ot) {
  return (
    (o = new bl(o, i, a, nt, ot)),
    i === 1 ? ((i = 1), tt === !0 && (i |= 8)) : (i = 0),
    (tt = Bg(3, null, null, i)),
    (o.current = tt),
    (tt.stateNode = o),
    (tt.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ah(tt),
    o
  );
}
function dl(o, i, a) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: wa, key: s == null ? null : "" + s, children: o, containerInfo: i, implementation: a };
}
function el(o) {
  if (!o) return Vf;
  o = o._reactInternals;
  e: {
    if (Vb(o) !== o || o.tag !== 1) throw Error(p$1(170));
    var i = o;
    do {
      switch (i.tag) {
        case 3:
          i = i.stateNode.context;
          break e;
        case 1:
          if (Zf(i.type)) {
            i = i.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      i = i.return;
    } while (i !== null);
    throw Error(p$1(171));
  }
  if (o.tag === 1) {
    var a = o.type;
    if (Zf(a)) return bg(o, a, i);
  }
  return i;
}
function fl(o, i, a, s, et, tt, rt, nt, ot) {
  return (
    (o = cl(a, s, !0, o, et, tt, rt, nt, ot)),
    (o.context = el(null)),
    (a = o.current),
    (s = L$1()),
    (et = lh(a)),
    (tt = ch(s, et)),
    (tt.callback = i ?? null),
    dh(a, tt, et),
    (o.current.lanes = et),
    Ac(o, et, s),
    Ek(o, s),
    o
  );
}
function gl(o, i, a, s) {
  var et = i.current,
    tt = L$1(),
    rt = lh(et);
  return (
    (a = el(a)),
    i.context === null ? (i.context = a) : (i.pendingContext = a),
    (i = ch(tt, rt)),
    (i.payload = { element: o }),
    (s = s === void 0 ? null : s),
    s !== null && (i.callback = s),
    (o = dh(et, i, rt)),
    o !== null && (mh(o, et, rt, tt), eh(o, et, rt)),
    rt
  );
}
function hl(o) {
  if (((o = o.current), !o.child)) return null;
  switch (o.child.tag) {
    case 5:
      return o.child.stateNode;
    default:
      return o.child.stateNode;
  }
}
function il(o, i) {
  if (((o = o.memoizedState), o !== null && o.dehydrated !== null)) {
    var a = o.retryLane;
    o.retryLane = a !== 0 && a < i ? a : i;
  }
}
function jl(o, i) {
  il(o, i), (o = o.alternate) && il(o, i);
}
function kl() {
  return null;
}
var ll =
  typeof reportError == "function"
    ? reportError
    : function (o) {
        console.error(o);
      };
function ml(o) {
  this._internalRoot = o;
}
nl.prototype.render = ml.prototype.render = function (o) {
  var i = this._internalRoot;
  if (i === null) throw Error(p$1(409));
  gl(o, i, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function () {
  var o = this._internalRoot;
  if (o !== null) {
    this._internalRoot = null;
    var i = o.containerInfo;
    Sk(function () {
      gl(null, o, null, null);
    }),
      (i[uf] = null);
  }
};
function nl(o) {
  this._internalRoot = o;
}
nl.prototype.unstable_scheduleHydration = function (o) {
  if (o) {
    var i = Hc();
    o = { blockedOn: null, target: o, priority: i };
    for (var a = 0; a < Qc.length && i !== 0 && i < Qc[a].priority; a++);
    Qc.splice(a, 0, o), a === 0 && Vc(o);
  }
};
function ol(o) {
  return !(!o || (o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11));
}
function pl(o) {
  return !(
    !o ||
    (o.nodeType !== 1 &&
      o.nodeType !== 9 &&
      o.nodeType !== 11 &&
      (o.nodeType !== 8 || o.nodeValue !== " react-mount-point-unstable "))
  );
}
function ql() {}
function rl(o, i, a, s, et) {
  if (et) {
    if (typeof s == "function") {
      var tt = s;
      s = function () {
        var it = hl(rt);
        tt.call(it);
      };
    }
    var rt = fl(i, s, o, 0, null, !1, !1, "", ql);
    return (o._reactRootContainer = rt), (o[uf] = rt.current), sf(o.nodeType === 8 ? o.parentNode : o), Sk(), rt;
  }
  for (; (et = o.lastChild); ) o.removeChild(et);
  if (typeof s == "function") {
    var nt = s;
    s = function () {
      var it = hl(ot);
      nt.call(it);
    };
  }
  var ot = cl(o, 0, !1, null, null, !1, !1, "", ql);
  return (
    (o._reactRootContainer = ot),
    (o[uf] = ot.current),
    sf(o.nodeType === 8 ? o.parentNode : o),
    Sk(function () {
      gl(i, ot, a, s);
    }),
    ot
  );
}
function sl(o, i, a, s, et) {
  var tt = a._reactRootContainer;
  if (tt) {
    var rt = tt;
    if (typeof et == "function") {
      var nt = et;
      et = function () {
        var ot = hl(rt);
        nt.call(ot);
      };
    }
    gl(i, rt, o, et);
  } else rt = rl(a, i, o, et, s);
  return hl(rt);
}
Ec = function (o) {
  switch (o.tag) {
    case 3:
      var i = o.stateNode;
      if (i.current.memoizedState.isDehydrated) {
        var a = tc(i.pendingLanes);
        a !== 0 && (Cc(i, a | 1), Ek(i, B$1()), !(K$1 & 6) && ((Hj = B$1() + 500), jg()));
      }
      break;
    case 13:
      Sk(function () {
        var s = Zg(o, 1);
        if (s !== null) {
          var et = L$1();
          mh(s, o, 1, et);
        }
      }),
        jl(o, 1);
  }
};
Fc = function (o) {
  if (o.tag === 13) {
    var i = Zg(o, 134217728);
    if (i !== null) {
      var a = L$1();
      mh(i, o, 134217728, a);
    }
    jl(o, 134217728);
  }
};
Gc = function (o) {
  if (o.tag === 13) {
    var i = lh(o),
      a = Zg(o, i);
    if (a !== null) {
      var s = L$1();
      mh(a, o, i, s);
    }
    jl(o, i);
  }
};
Hc = function () {
  return C;
};
Ic = function (o, i) {
  var a = C;
  try {
    return (C = o), i();
  } finally {
    C = a;
  }
};
yb = function (o, i, a) {
  switch (i) {
    case "input":
      if ((bb(o, a), (i = a.name), a.type === "radio" && i != null)) {
        for (a = o; a.parentNode; ) a = a.parentNode;
        for (
          a = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0;
          i < a.length;
          i++
        ) {
          var s = a[i];
          if (s !== o && s.form === o.form) {
            var et = Db(s);
            if (!et) throw Error(p$1(90));
            Wa(s), bb(s, et);
          }
        }
      }
      break;
    case "textarea":
      ib(o, a);
      break;
    case "select":
      (i = a.value), i != null && fb(o, !!a.multiple, i, !1);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: !1, Events: [Cb, ue$1, Db, Eb, Fb, Rk] },
  ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  vl = {
    bundleType: ul.bundleType,
    version: ul.version,
    rendererPackageName: ul.rendererPackageName,
    rendererConfig: ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (o) {
      return (o = Zb(o)), o === null ? null : o.stateNode;
    },
    findFiberByHostInstance: ul.findFiberByHostInstance || kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      (kc = wl.inject(vl)), (lc = wl);
    } catch {}
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function (o, i) {
  var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ol(i)) throw Error(p$1(200));
  return dl(o, i, null, a);
};
reactDom_production_min.createRoot = function (o, i) {
  if (!ol(o)) throw Error(p$1(299));
  var a = !1,
    s = "",
    et = ll;
  return (
    i != null &&
      (i.unstable_strictMode === !0 && (a = !0),
      i.identifierPrefix !== void 0 && (s = i.identifierPrefix),
      i.onRecoverableError !== void 0 && (et = i.onRecoverableError)),
    (i = cl(o, 1, !1, null, null, a, !1, s, et)),
    (o[uf] = i.current),
    sf(o.nodeType === 8 ? o.parentNode : o),
    new ml(i)
  );
};
reactDom_production_min.findDOMNode = function (o) {
  if (o == null) return null;
  if (o.nodeType === 1) return o;
  var i = o._reactInternals;
  if (i === void 0)
    throw typeof o.render == "function" ? Error(p$1(188)) : ((o = Object.keys(o).join(",")), Error(p$1(268, o)));
  return (o = Zb(i)), (o = o === null ? null : o.stateNode), o;
};
reactDom_production_min.flushSync = function (o) {
  return Sk(o);
};
reactDom_production_min.hydrate = function (o, i, a) {
  if (!pl(i)) throw Error(p$1(200));
  return sl(null, o, i, !0, a);
};
reactDom_production_min.hydrateRoot = function (o, i, a) {
  if (!ol(o)) throw Error(p$1(405));
  var s = (a != null && a.hydratedSources) || null,
    et = !1,
    tt = "",
    rt = ll;
  if (
    (a != null &&
      (a.unstable_strictMode === !0 && (et = !0),
      a.identifierPrefix !== void 0 && (tt = a.identifierPrefix),
      a.onRecoverableError !== void 0 && (rt = a.onRecoverableError)),
    (i = fl(i, null, o, 1, a ?? null, et, !1, tt, rt)),
    (o[uf] = i.current),
    sf(o),
    s)
  )
    for (o = 0; o < s.length; o++)
      (a = s[o]),
        (et = a._getVersion),
        (et = et(a._source)),
        i.mutableSourceEagerHydrationData == null
          ? (i.mutableSourceEagerHydrationData = [a, et])
          : i.mutableSourceEagerHydrationData.push(a, et);
  return new nl(i);
};
reactDom_production_min.render = function (o, i, a) {
  if (!pl(i)) throw Error(p$1(200));
  return sl(null, o, i, !1, a);
};
reactDom_production_min.unmountComponentAtNode = function (o) {
  if (!pl(o)) throw Error(p$1(40));
  return o._reactRootContainer
    ? (Sk(function () {
        sl(null, null, o, !1, function () {
          (o._reactRootContainer = null), (o[uf] = null);
        });
      }),
      !0)
    : !1;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function (o, i, a, s) {
  if (!pl(a)) throw Error(p$1(200));
  if (o == null || o._reactInternals === void 0) throw Error(p$1(38));
  return sl(o, i, a, !1, s);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
(function (o) {
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  i(), (o.exports = reactDom_production_min);
})(reactDom);
var m$1 = reactDomExports;
(client.createRoot = m$1.createRoot), (client.hydrateRoot = m$1.hydrateRoot);
function r$1(o) {
  var i,
    a,
    s = "";
  if (typeof o == "string" || typeof o == "number") s += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) for (i = 0; i < o.length; i++) o[i] && (a = r$1(o[i])) && (s && (s += " "), (s += a));
    else for (i in o) o[i] && (s && (s += " "), (s += i));
  return s;
}
function clsx() {
  for (var o, i, a = 0, s = ""; a < arguments.length; )
    (o = arguments[a++]) && (i = r$1(o)) && (s && (s += " "), (s += i));
  return s;
}
var reactIsExports = {},
  reactIs$1 = {
    get exports() {
      return reactIsExports;
    },
    set exports(o) {
      reactIsExports = o;
    },
  },
  reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b$1 = typeof Symbol == "function" && Symbol.for,
  c = b$1 ? Symbol.for("react.element") : 60103,
  d = b$1 ? Symbol.for("react.portal") : 60106,
  e = b$1 ? Symbol.for("react.fragment") : 60107,
  f = b$1 ? Symbol.for("react.strict_mode") : 60108,
  g$1 = b$1 ? Symbol.for("react.profiler") : 60114,
  h = b$1 ? Symbol.for("react.provider") : 60109,
  k$1 = b$1 ? Symbol.for("react.context") : 60110,
  l = b$1 ? Symbol.for("react.async_mode") : 60111,
  m = b$1 ? Symbol.for("react.concurrent_mode") : 60111,
  n = b$1 ? Symbol.for("react.forward_ref") : 60112,
  p = b$1 ? Symbol.for("react.suspense") : 60113,
  q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120,
  r = b$1 ? Symbol.for("react.memo") : 60115,
  t = b$1 ? Symbol.for("react.lazy") : 60116,
  v$1 = b$1 ? Symbol.for("react.block") : 60121,
  w$1 = b$1 ? Symbol.for("react.fundamental") : 60117,
  x$1 = b$1 ? Symbol.for("react.responder") : 60118,
  y = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(o) {
  if (typeof o == "object" && o !== null) {
    var i = o.$$typeof;
    switch (i) {
      case c:
        switch (((o = o.type), o)) {
          case l:
          case m:
          case e:
          case g$1:
          case f:
          case p:
            return o;
          default:
            switch (((o = o && o.$$typeof), o)) {
              case k$1:
              case n:
              case t:
              case r:
              case h:
                return o;
              default:
                return i;
            }
        }
      case d:
        return i;
    }
  }
}
function A$1(o) {
  return z$1(o) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k$1;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function (o) {
  return A$1(o) || z$1(o) === l;
};
reactIs_production_min.isConcurrentMode = A$1;
reactIs_production_min.isContextConsumer = function (o) {
  return z$1(o) === k$1;
};
reactIs_production_min.isContextProvider = function (o) {
  return z$1(o) === h;
};
reactIs_production_min.isElement = function (o) {
  return typeof o == "object" && o !== null && o.$$typeof === c;
};
reactIs_production_min.isForwardRef = function (o) {
  return z$1(o) === n;
};
reactIs_production_min.isFragment = function (o) {
  return z$1(o) === e;
};
reactIs_production_min.isLazy = function (o) {
  return z$1(o) === t;
};
reactIs_production_min.isMemo = function (o) {
  return z$1(o) === r;
};
reactIs_production_min.isPortal = function (o) {
  return z$1(o) === d;
};
reactIs_production_min.isProfiler = function (o) {
  return z$1(o) === g$1;
};
reactIs_production_min.isStrictMode = function (o) {
  return z$1(o) === f;
};
reactIs_production_min.isSuspense = function (o) {
  return z$1(o) === p;
};
reactIs_production_min.isValidElementType = function (o) {
  return (
    typeof o == "string" ||
    typeof o == "function" ||
    o === e ||
    o === m ||
    o === g$1 ||
    o === f ||
    o === p ||
    o === q$1 ||
    (typeof o == "object" &&
      o !== null &&
      (o.$$typeof === t ||
        o.$$typeof === r ||
        o.$$typeof === h ||
        o.$$typeof === k$1 ||
        o.$$typeof === n ||
        o.$$typeof === w$1 ||
        o.$$typeof === x$1 ||
        o.$$typeof === y ||
        o.$$typeof === v$1))
  );
};
reactIs_production_min.typeOf = z$1;
(function (o) {
  o.exports = reactIs_production_min;
})(reactIs$1);
function stylis_min(o) {
  function i(St, wt, At, Tt, dt) {
    for (
      var Ft = 0,
        Ct = 0,
        Xt = 0,
        Vt = 0,
        Mt,
        Dt,
        Yt = 0,
        Jt = 0,
        bt,
        qt = (bt = Mt = 0),
        Ht = 0,
        Kt = 0,
        rr = 0,
        Zt = 0,
        or = At.length,
        nr = or - 1,
        er,
        Nt = "",
        Qt = "",
        ir = "",
        lr = "",
        tr;
      Ht < or;

    ) {
      if (
        ((Dt = At.charCodeAt(Ht)),
        Ht === nr &&
          Ct + Vt + Xt + Ft !== 0 &&
          (Ct !== 0 && (Dt = Ct === 47 ? 10 : 47), (Vt = Xt = Ft = 0), or++, nr++),
        Ct + Vt + Xt + Ft === 0)
      ) {
        if (Ht === nr && (0 < Kt && (Nt = Nt.replace(ft, "")), 0 < Nt.trim().length)) {
          switch (Dt) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Nt += At.charAt(Ht);
          }
          Dt = 59;
        }
        switch (Dt) {
          case 123:
            for (Nt = Nt.trim(), Mt = Nt.charCodeAt(0), bt = 1, Zt = ++Ht; Ht < or; ) {
              switch ((Dt = At.charCodeAt(Ht))) {
                case 123:
                  bt++;
                  break;
                case 125:
                  bt--;
                  break;
                case 47:
                  switch ((Dt = At.charCodeAt(Ht + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (qt = Ht + 1; qt < nr; ++qt)
                          switch (At.charCodeAt(qt)) {
                            case 47:
                              if (Dt === 42 && At.charCodeAt(qt - 1) === 42 && Ht + 2 !== qt) {
                                Ht = qt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Dt === 47) {
                                Ht = qt + 1;
                                break e;
                              }
                          }
                        Ht = qt;
                      }
                  }
                  break;
                case 91:
                  Dt++;
                case 40:
                  Dt++;
                case 34:
                case 39:
                  for (; Ht++ < nr && At.charCodeAt(Ht) !== Dt; );
              }
              if (bt === 0) break;
              Ht++;
            }
            switch (
              ((bt = At.substring(Zt, Ht)), Mt === 0 && (Mt = (Nt = Nt.replace(st, "").trim()).charCodeAt(0)), Mt)
            ) {
              case 64:
                switch ((0 < Kt && (Nt = Nt.replace(ft, "")), (Dt = Nt.charCodeAt(1)), Dt)) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Kt = wt;
                    break;
                  default:
                    Kt = yt;
                }
                if (
                  ((bt = i(wt, Kt, bt, Dt, dt + 1)),
                  (Zt = bt.length),
                  0 < mt &&
                    ((Kt = a(yt, Nt, rr)),
                    (tr = nt(3, bt, Kt, wt, Ut, Bt, Zt, Dt, dt, Tt)),
                    (Nt = Kt.join("")),
                    tr !== void 0 && (Zt = (bt = tr.trim()).length) === 0 && ((Dt = 0), (bt = ""))),
                  0 < Zt)
                )
                  switch (Dt) {
                    case 115:
                      Nt = Nt.replace(Rt, rt);
                    case 100:
                    case 109:
                    case 45:
                      bt = Nt + "{" + bt + "}";
                      break;
                    case 107:
                      (Nt = Nt.replace(lt, "$1 $2")),
                        (bt = Nt + "{" + bt + "}"),
                        (bt = xt === 1 || (xt === 2 && tt("@" + bt, 3)) ? "@-webkit-" + bt + "@" + bt : "@" + bt);
                      break;
                    default:
                      (bt = Nt + bt), Tt === 112 && (bt = ((Qt += bt), ""));
                  }
                else bt = "";
                break;
              default:
                bt = i(wt, a(wt, Nt, rr), bt, Tt, dt + 1);
            }
            (ir += bt), (bt = rr = Kt = qt = Mt = 0), (Nt = ""), (Dt = At.charCodeAt(++Ht));
            break;
          case 125:
          case 59:
            if (((Nt = (0 < Kt ? Nt.replace(ft, "") : Nt).trim()), 1 < (Zt = Nt.length)))
              switch (
                (qt === 0 &&
                  ((Mt = Nt.charCodeAt(0)), Mt === 45 || (96 < Mt && 123 > Mt)) &&
                  (Zt = (Nt = Nt.replace(" ", ":")).length),
                0 < mt &&
                  (tr = nt(1, Nt, wt, St, Ut, Bt, Qt.length, Tt, dt, Tt)) !== void 0 &&
                  (Zt = (Nt = tr.trim()).length) === 0 &&
                  (Nt = "\0\0"),
                (Mt = Nt.charCodeAt(0)),
                (Dt = Nt.charCodeAt(1)),
                Mt)
              ) {
                case 0:
                  break;
                case 64:
                  if (Dt === 105 || Dt === 99) {
                    lr += Nt + At.charAt(Ht);
                    break;
                  }
                default:
                  Nt.charCodeAt(Zt - 1) !== 58 && (Qt += et(Nt, Mt, Dt, Nt.charCodeAt(2)));
              }
            (rr = Kt = qt = Mt = 0), (Nt = ""), (Dt = At.charCodeAt(++Ht));
        }
      }
      switch (Dt) {
        case 13:
        case 10:
          Ct === 47 ? (Ct = 0) : 1 + Mt === 0 && Tt !== 107 && 0 < Nt.length && ((Kt = 1), (Nt += "\0")),
            0 < mt * Et && nt(0, Nt, wt, St, Ut, Bt, Qt.length, Tt, dt, Tt),
            (Bt = 1),
            Ut++;
          break;
        case 59:
        case 125:
          if (Ct + Vt + Xt + Ft === 0) {
            Bt++;
            break;
          }
        default:
          switch ((Bt++, (er = At.charAt(Ht)), Dt)) {
            case 9:
            case 32:
              if (Vt + Ft + Ct === 0)
                switch (Yt) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    er = "";
                    break;
                  default:
                    Dt !== 32 && (er = " ");
                }
              break;
            case 0:
              er = "\\0";
              break;
            case 12:
              er = "\\f";
              break;
            case 11:
              er = "\\v";
              break;
            case 38:
              Vt + Ct + Ft === 0 && ((Kt = rr = 1), (er = "\f" + er));
              break;
            case 108:
              if (Vt + Ct + Ft + Gt === 0 && 0 < qt)
                switch (Ht - qt) {
                  case 2:
                    Yt === 112 && At.charCodeAt(Ht - 3) === 58 && (Gt = Yt);
                  case 8:
                    Jt === 111 && (Gt = Jt);
                }
              break;
            case 58:
              Vt + Ct + Ft === 0 && (qt = Ht);
              break;
            case 44:
              Ct + Xt + Vt + Ft === 0 && ((Kt = 1), (er += "\r"));
              break;
            case 34:
            case 39:
              Ct === 0 && (Vt = Vt === Dt ? 0 : Vt === 0 ? Dt : Vt);
              break;
            case 91:
              Vt + Ct + Xt === 0 && Ft++;
              break;
            case 93:
              Vt + Ct + Xt === 0 && Ft--;
              break;
            case 41:
              Vt + Ct + Ft === 0 && Xt--;
              break;
            case 40:
              if (Vt + Ct + Ft === 0) {
                if (Mt === 0)
                  switch (2 * Yt + 3 * Jt) {
                    case 533:
                      break;
                    default:
                      Mt = 1;
                  }
                Xt++;
              }
              break;
            case 64:
              Ct + Xt + Vt + Ft + qt + bt === 0 && (bt = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Vt + Ft + Xt))
                switch (Ct) {
                  case 0:
                    switch (2 * Dt + 3 * At.charCodeAt(Ht + 1)) {
                      case 235:
                        Ct = 47;
                        break;
                      case 220:
                        (Zt = Ht), (Ct = 42);
                    }
                    break;
                  case 42:
                    Dt === 47 &&
                      Yt === 42 &&
                      Zt + 2 !== Ht &&
                      (At.charCodeAt(Zt + 2) === 33 && (Qt += At.substring(Zt, Ht + 1)), (er = ""), (Ct = 0));
                }
          }
          Ct === 0 && (Nt += er);
      }
      (Jt = Yt), (Yt = Dt), Ht++;
    }
    if (((Zt = Qt.length), 0 < Zt)) {
      if (
        ((Kt = wt),
        0 < mt && ((tr = nt(2, Qt, Kt, St, Ut, Bt, Zt, Tt, dt, Tt)), tr !== void 0 && (Qt = tr).length === 0))
      )
        return lr + Qt + ir;
      if (((Qt = Kt.join(",") + "{" + Qt + "}"), xt * Gt !== 0)) {
        switch ((xt !== 2 || tt(Qt, 2) || (Gt = 0), Gt)) {
          case 111:
            Qt = Qt.replace(ht, ":-moz-$1") + Qt;
            break;
          case 112:
            Qt =
              Qt.replace(ut, "::-webkit-input-$1") + Qt.replace(ut, "::-moz-$1") + Qt.replace(ut, ":-ms-input-$1") + Qt;
        }
        Gt = 0;
      }
    }
    return lr + Qt + ir;
  }
  function a(St, wt, At) {
    var Tt = wt.trim().split(Lt);
    wt = Tt;
    var dt = Tt.length,
      Ft = St.length;
    switch (Ft) {
      case 0:
      case 1:
        var Ct = 0;
        for (St = Ft === 0 ? "" : St[0] + " "; Ct < dt; ++Ct) wt[Ct] = s(St, wt[Ct], At).trim();
        break;
      default:
        var Xt = (Ct = 0);
        for (wt = []; Ct < dt; ++Ct) for (var Vt = 0; Vt < Ft; ++Vt) wt[Xt++] = s(St[Vt] + " ", Tt[Ct], At).trim();
    }
    return wt;
  }
  function s(St, wt, At) {
    var Tt = wt.charCodeAt(0);
    switch ((33 > Tt && (Tt = (wt = wt.trim()).charCodeAt(0)), Tt)) {
      case 38:
        return wt.replace(at, "$1" + St.trim());
      case 58:
        return St.trim() + wt.replace(at, "$1" + St.trim());
      default:
        if (0 < 1 * At && 0 < wt.indexOf("\f"))
          return wt.replace(at, (St.charCodeAt(0) === 58 ? "" : "$1") + St.trim());
    }
    return St + wt;
  }
  function et(St, wt, At, Tt) {
    var dt = St + ";",
      Ft = 2 * wt + 3 * At + 4 * Tt;
    if (Ft === 944) {
      St = dt.indexOf(":", 9) + 1;
      var Ct = dt.substring(St, dt.length - 1).trim();
      return (
        (Ct = dt.substring(0, St).trim() + Ct + ";"), xt === 1 || (xt === 2 && tt(Ct, 1)) ? "-webkit-" + Ct + Ct : Ct
      );
    }
    if (xt === 0 || (xt === 2 && !tt(dt, 1))) return dt;
    switch (Ft) {
      case 1015:
        return dt.charCodeAt(10) === 97 ? "-webkit-" + dt + dt : dt;
      case 951:
        return dt.charCodeAt(3) === 116 ? "-webkit-" + dt + dt : dt;
      case 963:
        return dt.charCodeAt(5) === 110 ? "-webkit-" + dt + dt : dt;
      case 1009:
        if (dt.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + dt + dt;
      case 978:
        return "-webkit-" + dt + "-moz-" + dt + dt;
      case 1019:
      case 983:
        return "-webkit-" + dt + "-moz-" + dt + "-ms-" + dt + dt;
      case 883:
        if (dt.charCodeAt(8) === 45) return "-webkit-" + dt + dt;
        if (0 < dt.indexOf("image-set(", 11)) return dt.replace(Wt, "$1-webkit-$2") + dt;
        break;
      case 932:
        if (dt.charCodeAt(4) === 45)
          switch (dt.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                dt.replace("-grow", "") +
                "-webkit-" +
                dt +
                "-ms-" +
                dt.replace("grow", "positive") +
                dt
              );
            case 115:
              return "-webkit-" + dt + "-ms-" + dt.replace("shrink", "negative") + dt;
            case 98:
              return "-webkit-" + dt + "-ms-" + dt.replace("basis", "preferred-size") + dt;
          }
        return "-webkit-" + dt + "-ms-" + dt + dt;
      case 964:
        return "-webkit-" + dt + "-ms-flex-" + dt + dt;
      case 1023:
        if (dt.charCodeAt(8) !== 99) break;
        return (
          (Ct = dt.substring(dt.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")),
          "-webkit-box-pack" + Ct + "-webkit-" + dt + "-ms-flex-pack" + Ct + dt
        );
      case 1005:
        return pt.test(dt) ? dt.replace(gt, ":-webkit-") + dt.replace(gt, ":-moz-") + dt : dt;
      case 1e3:
        switch (((Ct = dt.substring(13).trim()), (wt = Ct.indexOf("-") + 1), Ct.charCodeAt(0) + Ct.charCodeAt(wt))) {
          case 226:
            Ct = dt.replace(kt, "tb");
            break;
          case 232:
            Ct = dt.replace(kt, "tb-rl");
            break;
          case 220:
            Ct = dt.replace(kt, "lr");
            break;
          default:
            return dt;
        }
        return "-webkit-" + dt + "-ms-" + Ct + dt;
      case 1017:
        if (dt.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((wt = (dt = St).length - 10),
          (Ct = (dt.charCodeAt(wt) === 33 ? dt.substring(0, wt) : dt).substring(St.indexOf(":", 7) + 1).trim()),
          (Ft = Ct.charCodeAt(0) + (Ct.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > Ct.charCodeAt(8)) break;
          case 115:
            dt = dt.replace(Ct, "-webkit-" + Ct) + ";" + dt;
            break;
          case 207:
          case 102:
            dt =
              dt.replace(Ct, "-webkit-" + (102 < Ft ? "inline-" : "") + "box") +
              ";" +
              dt.replace(Ct, "-webkit-" + Ct) +
              ";" +
              dt.replace(Ct, "-ms-" + Ct + "box") +
              ";" +
              dt;
        }
        return dt + ";";
      case 938:
        if (dt.charCodeAt(5) === 45)
          switch (dt.charCodeAt(6)) {
            case 105:
              return (Ct = dt.replace("-items", "")), "-webkit-" + dt + "-webkit-box-" + Ct + "-ms-flex-" + Ct + dt;
            case 115:
              return "-webkit-" + dt + "-ms-flex-item-" + dt.replace(jt, "") + dt;
            default:
              return "-webkit-" + dt + "-ms-flex-line-pack" + dt.replace("align-content", "").replace(jt, "") + dt;
          }
        break;
      case 973:
      case 989:
        if (dt.charCodeAt(3) !== 45 || dt.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (It.test(St) === !0)
          return (Ct = St.substring(St.indexOf(":") + 1)).charCodeAt(0) === 115
            ? et(St.replace("stretch", "fill-available"), wt, At, Tt).replace(":fill-available", ":stretch")
            : dt.replace(Ct, "-webkit-" + Ct) + dt.replace(Ct, "-moz-" + Ct.replace("fill-", "")) + dt;
        break;
      case 962:
        if (
          ((dt = "-webkit-" + dt + (dt.charCodeAt(5) === 102 ? "-ms-" + dt : "") + dt),
          At + Tt === 211 && dt.charCodeAt(13) === 105 && 0 < dt.indexOf("transform", 10))
        )
          return dt.substring(0, dt.indexOf(";", 27) + 1).replace(vt, "$1-webkit-$2") + dt;
    }
    return dt;
  }
  function tt(St, wt) {
    var At = St.indexOf(wt === 1 ? ":" : "{"),
      Tt = St.substring(0, wt !== 3 ? At : 10);
    return (At = St.substring(At + 1, St.length - 1)), $t(wt !== 2 ? Tt : Tt.replace(zt, "$1"), At, wt);
  }
  function rt(St, wt) {
    var At = et(wt, wt.charCodeAt(0), wt.charCodeAt(1), wt.charCodeAt(2));
    return At !== wt + ";" ? At.replace(Pt, " or ($1)").substring(4) : "(" + wt + ")";
  }
  function nt(St, wt, At, Tt, dt, Ft, Ct, Xt, Vt, Mt) {
    for (var Dt = 0, Yt = wt, Jt; Dt < mt; ++Dt)
      switch ((Jt = _t[Dt].call(ct, St, Yt, At, Tt, dt, Ft, Ct, Xt, Vt, Mt))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Yt = Jt;
      }
    if (Yt !== wt) return Yt;
  }
  function ot(St) {
    switch (St) {
      case void 0:
      case null:
        mt = _t.length = 0;
        break;
      default:
        if (typeof St == "function") _t[mt++] = St;
        else if (typeof St == "object") for (var wt = 0, At = St.length; wt < At; ++wt) ot(St[wt]);
        else Et = !!St | 0;
    }
    return ot;
  }
  function it(St) {
    return (
      (St = St.prefix),
      St !== void 0 && (($t = null), St ? (typeof St != "function" ? (xt = 1) : ((xt = 2), ($t = St))) : (xt = 0)),
      it
    );
  }
  function ct(St, wt) {
    var At = St;
    if ((33 > At.charCodeAt(0) && (At = At.trim()), (Ot = At), (At = [Ot]), 0 < mt)) {
      var Tt = nt(-1, wt, At, At, Ut, Bt, 0, 0, 0, 0);
      Tt !== void 0 && typeof Tt == "string" && (wt = Tt);
    }
    var dt = i(yt, At, wt, 0, 0);
    return (
      0 < mt && ((Tt = nt(-2, dt, At, At, Ut, Bt, dt.length, 0, 0, 0)), Tt !== void 0 && (dt = Tt)),
      (Ot = ""),
      (Gt = 0),
      (Bt = Ut = 1),
      dt
    );
  }
  var st = /^\0+/g,
    ft = /[\0\r\f]/g,
    gt = /: */g,
    pt = /zoo|gra/,
    vt = /([,: ])(transform)/g,
    Lt = /,\r+?/g,
    at = /([\t\r\n ])*\f?&/g,
    lt = /@(k\w+)\s*(\S*)\s*/,
    ut = /::(place)/g,
    ht = /:(read-only)/g,
    kt = /[svh]\w+-[tblr]{2}/,
    Rt = /\(\s*(.*)\s*\)/g,
    Pt = /([\s\S]*?);/g,
    jt = /-self|flex-/g,
    zt = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    It = /stretch|:\s*\w+\-(?:conte|avail)/,
    Wt = /([^-])(image-set\()/,
    Bt = 1,
    Ut = 1,
    Gt = 0,
    xt = 1,
    yt = [],
    _t = [],
    mt = 0,
    $t = null,
    Et = 0,
    Ot = "";
  return (ct.use = ot), (ct.set = it), o !== void 0 && it(o), ct;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function memoize(o) {
  var i = Object.create(null);
  return function (a) {
    return i[a] === void 0 && (i[a] = o(a)), i[a];
  };
}
var reactPropsRegex =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  isPropValid = memoize(function (o) {
    return reactPropsRegex.test(o) || (o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91);
  }),
  reactIs = reactIsExports,
  REACT_STATICS = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  KNOWN_STATICS = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  FORWARD_REF_STATICS = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  MEMO_STATICS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(o) {
  return reactIs.isMemo(o) ? MEMO_STATICS : TYPE_STATICS[o.$$typeof] || REACT_STATICS;
}
var defineProperty = Object.defineProperty,
  getOwnPropertyNames = Object.getOwnPropertyNames,
  getOwnPropertySymbols = Object.getOwnPropertySymbols,
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
  getPrototypeOf = Object.getPrototypeOf,
  objectPrototype = Object.prototype;
function hoistNonReactStatics(o, i, a) {
  if (typeof i != "string") {
    if (objectPrototype) {
      var s = getPrototypeOf(i);
      s && s !== objectPrototype && hoistNonReactStatics(o, s, a);
    }
    var et = getOwnPropertyNames(i);
    getOwnPropertySymbols && (et = et.concat(getOwnPropertySymbols(i)));
    for (var tt = getStatics(o), rt = getStatics(i), nt = 0; nt < et.length; ++nt) {
      var ot = et[nt];
      if (!KNOWN_STATICS[ot] && !(a && a[ot]) && !(rt && rt[ot]) && !(tt && tt[ot])) {
        var it = getOwnPropertyDescriptor(i, ot);
        try {
          defineProperty(o, ot, it);
        } catch {}
      }
    }
  }
  return o;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function v() {
  return (v =
    Object.assign ||
    function (o) {
      for (var i = 1; i < arguments.length; i++) {
        var a = arguments[i];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
      }
      return o;
    }).apply(this, arguments);
}
var g = function (o, i) {
    for (var a = [o[0]], s = 0, et = i.length; s < et; s += 1) a.push(i[s], o[s + 1]);
    return a;
  },
  S = function (o) {
    return (
      o !== null &&
      typeof o == "object" &&
      (o.toString ? o.toString() : Object.prototype.toString.call(o)) === "[object Object]" &&
      !reactIsExports.typeOf(o)
    );
  },
  w = Object.freeze([]),
  E = Object.freeze({});
function b(o) {
  return typeof o == "function";
}
function _(o) {
  return o.displayName || o.name || "Component";
}
function N(o) {
  return o && typeof o.styledComponentId == "string";
}
var A = (typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) || "data-styled",
  I = typeof window < "u" && "HTMLElement" in window,
  P = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY
        : {}.SC_DISABLE_SPEEDY !== void 0 &&
          {}.SC_DISABLE_SPEEDY !== "" &&
          {}.SC_DISABLE_SPEEDY !== "false" &&
          {}.SC_DISABLE_SPEEDY));
function j(o) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      o +
      " for more information." +
      (a.length > 0 ? " Args: " + a.join(", ") : "")
  );
}
var T = (function () {
    function o(a) {
      (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = a);
    }
    var i = o.prototype;
    return (
      (i.indexOfGroup = function (a) {
        for (var s = 0, et = 0; et < a; et++) s += this.groupSizes[et];
        return s;
      }),
      (i.insertRules = function (a, s) {
        if (a >= this.groupSizes.length) {
          for (var et = this.groupSizes, tt = et.length, rt = tt; a >= rt; ) (rt <<= 1) < 0 && j(16, "" + a);
          (this.groupSizes = new Uint32Array(rt)), this.groupSizes.set(et), (this.length = rt);
          for (var nt = tt; nt < rt; nt++) this.groupSizes[nt] = 0;
        }
        for (var ot = this.indexOfGroup(a + 1), it = 0, ct = s.length; it < ct; it++)
          this.tag.insertRule(ot, s[it]) && (this.groupSizes[a]++, ot++);
      }),
      (i.clearGroup = function (a) {
        if (a < this.length) {
          var s = this.groupSizes[a],
            et = this.indexOfGroup(a),
            tt = et + s;
          this.groupSizes[a] = 0;
          for (var rt = et; rt < tt; rt++) this.tag.deleteRule(et);
        }
      }),
      (i.getGroup = function (a) {
        var s = "";
        if (a >= this.length || this.groupSizes[a] === 0) return s;
        for (var et = this.groupSizes[a], tt = this.indexOfGroup(a), rt = tt + et, nt = tt; nt < rt; nt++)
          s +=
            this.tag.getRule(nt) +
            `/*!sc*/
`;
        return s;
      }),
      o
    );
  })(),
  x = new Map(),
  k = new Map(),
  V = 1,
  B = function (o) {
    if (x.has(o)) return x.get(o);
    for (; k.has(V); ) V++;
    var i = V++;
    return x.set(o, i), k.set(i, o), i;
  },
  z = function (o) {
    return k.get(o);
  },
  M = function (o, i) {
    i >= V && (V = i + 1), x.set(o, i), k.set(i, o);
  },
  G = "style[" + A + '][data-styled-version="5.3.9"]',
  L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  F = function (o, i, a) {
    for (var s, et = a.split(","), tt = 0, rt = et.length; tt < rt; tt++) (s = et[tt]) && o.registerName(i, s);
  },
  Y = function (o, i) {
    for (
      var a = (i.textContent || "").split(`/*!sc*/
`),
        s = [],
        et = 0,
        tt = a.length;
      et < tt;
      et++
    ) {
      var rt = a[et].trim();
      if (rt) {
        var nt = rt.match(L);
        if (nt) {
          var ot = 0 | parseInt(nt[1], 10),
            it = nt[2];
          ot !== 0 && (M(it, ot), F(o, it, nt[3]), o.getTag().insertRules(ot, s)), (s.length = 0);
        } else s.push(rt);
      }
    }
  },
  q = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  H = function (o) {
    var i = document.head,
      a = o || i,
      s = document.createElement("style"),
      et = (function (nt) {
        for (var ot = nt.childNodes, it = ot.length; it >= 0; it--) {
          var ct = ot[it];
          if (ct && ct.nodeType === 1 && ct.hasAttribute(A)) return ct;
        }
      })(a),
      tt = et !== void 0 ? et.nextSibling : null;
    s.setAttribute(A, "active"), s.setAttribute("data-styled-version", "5.3.9");
    var rt = q();
    return rt && s.setAttribute("nonce", rt), a.insertBefore(s, tt), s;
  },
  $ = (function () {
    function o(a) {
      var s = (this.element = H(a));
      s.appendChild(document.createTextNode("")),
        (this.sheet = (function (et) {
          if (et.sheet) return et.sheet;
          for (var tt = document.styleSheets, rt = 0, nt = tt.length; rt < nt; rt++) {
            var ot = tt[rt];
            if (ot.ownerNode === et) return ot;
          }
          j(17);
        })(s)),
        (this.length = 0);
    }
    var i = o.prototype;
    return (
      (i.insertRule = function (a, s) {
        try {
          return this.sheet.insertRule(s, a), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (i.deleteRule = function (a) {
        this.sheet.deleteRule(a), this.length--;
      }),
      (i.getRule = function (a) {
        var s = this.sheet.cssRules[a];
        return s !== void 0 && typeof s.cssText == "string" ? s.cssText : "";
      }),
      o
    );
  })(),
  W = (function () {
    function o(a) {
      var s = (this.element = H(a));
      (this.nodes = s.childNodes), (this.length = 0);
    }
    var i = o.prototype;
    return (
      (i.insertRule = function (a, s) {
        if (a <= this.length && a >= 0) {
          var et = document.createTextNode(s),
            tt = this.nodes[a];
          return this.element.insertBefore(et, tt || null), this.length++, !0;
        }
        return !1;
      }),
      (i.deleteRule = function (a) {
        this.element.removeChild(this.nodes[a]), this.length--;
      }),
      (i.getRule = function (a) {
        return a < this.length ? this.nodes[a].textContent : "";
      }),
      o
    );
  })(),
  U = (function () {
    function o(a) {
      (this.rules = []), (this.length = 0);
    }
    var i = o.prototype;
    return (
      (i.insertRule = function (a, s) {
        return a <= this.length && (this.rules.splice(a, 0, s), this.length++, !0);
      }),
      (i.deleteRule = function (a) {
        this.rules.splice(a, 1), this.length--;
      }),
      (i.getRule = function (a) {
        return a < this.length ? this.rules[a] : "";
      }),
      o
    );
  })(),
  J = I,
  X = { isServer: !I, useCSSOMInjection: !P },
  Z = (function () {
    function o(a, s, et) {
      a === void 0 && (a = E),
        s === void 0 && (s = {}),
        (this.options = v({}, X, {}, a)),
        (this.gs = s),
        (this.names = new Map(et)),
        (this.server = !!a.isServer),
        !this.server &&
          I &&
          J &&
          ((J = !1),
          (function (tt) {
            for (var rt = document.querySelectorAll(G), nt = 0, ot = rt.length; nt < ot; nt++) {
              var it = rt[nt];
              it && it.getAttribute(A) !== "active" && (Y(tt, it), it.parentNode && it.parentNode.removeChild(it));
            }
          })(this));
    }
    o.registerId = function (a) {
      return B(a);
    };
    var i = o.prototype;
    return (
      (i.reconstructWithOptions = function (a, s) {
        return s === void 0 && (s = !0), new o(v({}, this.options, {}, a), this.gs, (s && this.names) || void 0);
      }),
      (i.allocateGSInstance = function (a) {
        return (this.gs[a] = (this.gs[a] || 0) + 1);
      }),
      (i.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((et = (s = this.options).isServer),
            (tt = s.useCSSOMInjection),
            (rt = s.target),
            (a = et ? new U(rt) : tt ? new $(rt) : new W(rt)),
            new T(a)))
        );
        var a, s, et, tt, rt;
      }),
      (i.hasNameForId = function (a, s) {
        return this.names.has(a) && this.names.get(a).has(s);
      }),
      (i.registerName = function (a, s) {
        if ((B(a), this.names.has(a))) this.names.get(a).add(s);
        else {
          var et = new Set();
          et.add(s), this.names.set(a, et);
        }
      }),
      (i.insertRules = function (a, s, et) {
        this.registerName(a, s), this.getTag().insertRules(B(a), et);
      }),
      (i.clearNames = function (a) {
        this.names.has(a) && this.names.get(a).clear();
      }),
      (i.clearRules = function (a) {
        this.getTag().clearGroup(B(a)), this.clearNames(a);
      }),
      (i.clearTag = function () {
        this.tag = void 0;
      }),
      (i.toString = function () {
        return (function (a) {
          for (var s = a.getTag(), et = s.length, tt = "", rt = 0; rt < et; rt++) {
            var nt = z(rt);
            if (nt !== void 0) {
              var ot = a.names.get(nt),
                it = s.getGroup(rt);
              if (ot && it && ot.size) {
                var ct = A + ".g" + rt + '[id="' + nt + '"]',
                  st = "";
                ot !== void 0 &&
                  ot.forEach(function (ft) {
                    ft.length > 0 && (st += ft + ",");
                  }),
                  (tt +=
                    "" +
                    it +
                    ct +
                    '{content:"' +
                    st +
                    `"}/*!sc*/
`);
              }
            }
          }
          return tt;
        })(this);
      }),
      o
    );
  })(),
  K = /(a)(d)/gi,
  Q = function (o) {
    return String.fromCharCode(o + (o > 25 ? 39 : 97));
  };
function ee(o) {
  var i,
    a = "";
  for (i = Math.abs(o); i > 52; i = (i / 52) | 0) a = Q(i % 52) + a;
  return (Q(i % 52) + a).replace(K, "$1-$2");
}
var te = function (o, i) {
    for (var a = i.length; a; ) o = (33 * o) ^ i.charCodeAt(--a);
    return o;
  },
  ne = function (o) {
    return te(5381, o);
  };
function re(o) {
  for (var i = 0; i < o.length; i += 1) {
    var a = o[i];
    if (b(a) && !N(a)) return !1;
  }
  return !0;
}
var oe = ne("5.3.9"),
  se = (function () {
    function o(i, a, s) {
      (this.rules = i),
        (this.staticRulesId = ""),
        (this.isStatic = (s === void 0 || s.isStatic) && re(i)),
        (this.componentId = a),
        (this.baseHash = te(oe, a)),
        (this.baseStyle = s),
        Z.registerId(a);
    }
    return (
      (o.prototype.generateAndInjectStyles = function (i, a, s) {
        var et = this.componentId,
          tt = [];
        if ((this.baseStyle && tt.push(this.baseStyle.generateAndInjectStyles(i, a, s)), this.isStatic && !s.hash))
          if (this.staticRulesId && a.hasNameForId(et, this.staticRulesId)) tt.push(this.staticRulesId);
          else {
            var rt = Ne(this.rules, i, a, s).join(""),
              nt = ee(te(this.baseHash, rt) >>> 0);
            if (!a.hasNameForId(et, nt)) {
              var ot = s(rt, "." + nt, void 0, et);
              a.insertRules(et, nt, ot);
            }
            tt.push(nt), (this.staticRulesId = nt);
          }
        else {
          for (var it = this.rules.length, ct = te(this.baseHash, s.hash), st = "", ft = 0; ft < it; ft++) {
            var gt = this.rules[ft];
            if (typeof gt == "string") st += gt;
            else if (gt) {
              var pt = Ne(gt, i, a, s),
                vt = Array.isArray(pt) ? pt.join("") : pt;
              (ct = te(ct, vt + ft)), (st += vt);
            }
          }
          if (st) {
            var Lt = ee(ct >>> 0);
            if (!a.hasNameForId(et, Lt)) {
              var at = s(st, "." + Lt, void 0, et);
              a.insertRules(et, Lt, at);
            }
            tt.push(Lt);
          }
        }
        return tt.join(" ");
      }),
      o
    );
  })(),
  ie = /^\s*\/\/.*$/gm,
  ae = [":", "[", ".", "#"];
function ce(o) {
  var i,
    a,
    s,
    et,
    tt = o === void 0 ? E : o,
    rt = tt.options,
    nt = rt === void 0 ? E : rt,
    ot = tt.plugins,
    it = ot === void 0 ? w : ot,
    ct = new stylis_min(nt),
    st = [],
    ft = (function (vt) {
      function Lt(at) {
        if (at)
          try {
            vt(at + "}");
          } catch {}
      }
      return function (at, lt, ut, ht, kt, Rt, Pt, jt, zt, It) {
        switch (at) {
          case 1:
            if (zt === 0 && lt.charCodeAt(0) === 64) return vt(lt + ";"), "";
            break;
          case 2:
            if (jt === 0) return lt + "/*|*/";
            break;
          case 3:
            switch (jt) {
              case 102:
              case 112:
                return vt(ut[0] + lt), "";
              default:
                return lt + (It === 0 ? "/*|*/" : "");
            }
          case -2:
            lt.split("/*|*/}").forEach(Lt);
        }
      };
    })(function (vt) {
      st.push(vt);
    }),
    gt = function (vt, Lt, at) {
      return (Lt === 0 && ae.indexOf(at[a.length]) !== -1) || at.match(et) ? vt : "." + i;
    };
  function pt(vt, Lt, at, lt) {
    lt === void 0 && (lt = "&");
    var ut = vt.replace(ie, ""),
      ht = Lt && at ? at + " " + Lt + " { " + ut + " }" : ut;
    return (
      (i = lt),
      (a = Lt),
      (s = new RegExp("\\" + a + "\\b", "g")),
      (et = new RegExp("(\\" + a + "\\b){2,}")),
      ct(at || !Lt ? "" : Lt, ht)
    );
  }
  return (
    ct.use(
      [].concat(it, [
        function (vt, Lt, at) {
          vt === 2 && at.length && at[0].lastIndexOf(a) > 0 && (at[0] = at[0].replace(s, gt));
        },
        ft,
        function (vt) {
          if (vt === -2) {
            var Lt = st;
            return (st = []), Lt;
          }
        },
      ])
    ),
    (pt.hash = it.length
      ? it
          .reduce(function (vt, Lt) {
            return Lt.name || j(15), te(vt, Lt.name);
          }, 5381)
          .toString()
      : ""),
    pt
  );
}
var ue = React.createContext();
ue.Consumer;
var de = React.createContext(),
  he = (de.Consumer, new Z()),
  pe = ce();
function fe() {
  return reactExports.useContext(ue) || he;
}
function me() {
  return reactExports.useContext(de) || pe;
}
var ve = (function () {
    function o(i, a) {
      var s = this;
      (this.inject = function (et, tt) {
        tt === void 0 && (tt = pe);
        var rt = s.name + tt.hash;
        et.hasNameForId(s.id, rt) || et.insertRules(s.id, rt, tt(s.rules, rt, "@keyframes"));
      }),
        (this.toString = function () {
          return j(12, String(s.name));
        }),
        (this.name = i),
        (this.id = "sc-keyframes-" + i),
        (this.rules = a);
    }
    return (
      (o.prototype.getName = function (i) {
        return i === void 0 && (i = pe), this.name + i.hash;
      }),
      o
    );
  })(),
  ge = /([A-Z])/,
  Se = /([A-Z])/g,
  we = /^ms-/,
  Ee = function (o) {
    return "-" + o.toLowerCase();
  };
function be(o) {
  return ge.test(o) ? o.replace(Se, Ee).replace(we, "-ms-") : o;
}
var _e = function (o) {
  return o == null || o === !1 || o === "";
};
function Ne(o, i, a, s) {
  if (Array.isArray(o)) {
    for (var et, tt = [], rt = 0, nt = o.length; rt < nt; rt += 1)
      (et = Ne(o[rt], i, a, s)) !== "" && (Array.isArray(et) ? tt.push.apply(tt, et) : tt.push(et));
    return tt;
  }
  if (_e(o)) return "";
  if (N(o)) return "." + o.styledComponentId;
  if (b(o)) {
    if (typeof (it = o) != "function" || (it.prototype && it.prototype.isReactComponent) || !i) return o;
    var ot = o(i);
    return Ne(ot, i, a, s);
  }
  var it;
  return o instanceof ve
    ? a
      ? (o.inject(a, s), o.getName(s))
      : o
    : S(o)
    ? (function ct(st, ft) {
        var gt,
          pt,
          vt = [];
        for (var Lt in st)
          st.hasOwnProperty(Lt) &&
            !_e(st[Lt]) &&
            ((Array.isArray(st[Lt]) && st[Lt].isCss) || b(st[Lt])
              ? vt.push(be(Lt) + ":", st[Lt], ";")
              : S(st[Lt])
              ? vt.push.apply(vt, ct(st[Lt], Lt))
              : vt.push(
                  be(Lt) +
                    ": " +
                    ((gt = Lt),
                    (pt = st[Lt]) == null || typeof pt == "boolean" || pt === ""
                      ? ""
                      : typeof pt != "number" || pt === 0 || gt in unitlessKeys
                      ? String(pt).trim()
                      : pt + "px") +
                    ";"
                ));
        return ft ? [ft + " {"].concat(vt, ["}"]) : vt;
      })(o)
    : o.toString();
}
var Ae = function (o) {
  return Array.isArray(o) && (o.isCss = !0), o;
};
function Ce(o) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
  return b(o) || S(o)
    ? Ae(Ne(g(w, [o].concat(a))))
    : a.length === 0 && o.length === 1 && typeof o[0] == "string"
    ? o
    : Ae(Ne(g(o, a)));
}
var Re = function (o, i, a) {
    return a === void 0 && (a = E), (o.theme !== a.theme && o.theme) || i || a.theme;
  },
  De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  je = /(^-|-$)/g;
function Te(o) {
  return o.replace(De, "-").replace(je, "");
}
var xe = function (o) {
  return ee(ne(o) >>> 0);
};
function ke(o) {
  return typeof o == "string" && !0;
}
var Ve = function (o) {
    return typeof o == "function" || (typeof o == "object" && o !== null && !Array.isArray(o));
  },
  Be = function (o) {
    return o !== "__proto__" && o !== "constructor" && o !== "prototype";
  };
function ze(o, i, a) {
  var s = o[a];
  Ve(i) && Ve(s) ? Me(s, i) : (o[a] = i);
}
function Me(o) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
  for (var et = 0, tt = a; et < tt.length; et++) {
    var rt = tt[et];
    if (Ve(rt)) for (var nt in rt) Be(nt) && ze(o, rt[nt], nt);
  }
  return o;
}
var Ge = React.createContext();
Ge.Consumer;
var Ye = {};
function qe(o, i, a) {
  var s = N(o),
    et = !ke(o),
    tt = i.attrs,
    rt = tt === void 0 ? w : tt,
    nt = i.componentId,
    ot =
      nt === void 0
        ? (function (lt, ut) {
            var ht = typeof lt != "string" ? "sc" : Te(lt);
            Ye[ht] = (Ye[ht] || 0) + 1;
            var kt = ht + "-" + xe("5.3.9" + ht + Ye[ht]);
            return ut ? ut + "-" + kt : kt;
          })(i.displayName, i.parentComponentId)
        : nt,
    it = i.displayName,
    ct =
      it === void 0
        ? (function (lt) {
            return ke(lt) ? "styled." + lt : "Styled(" + _(lt) + ")";
          })(o)
        : it,
    st = i.displayName && i.componentId ? Te(i.displayName) + "-" + i.componentId : i.componentId || ot,
    ft = s && o.attrs ? Array.prototype.concat(o.attrs, rt).filter(Boolean) : rt,
    gt = i.shouldForwardProp;
  s &&
    o.shouldForwardProp &&
    (gt = i.shouldForwardProp
      ? function (lt, ut, ht) {
          return o.shouldForwardProp(lt, ut, ht) && i.shouldForwardProp(lt, ut, ht);
        }
      : o.shouldForwardProp);
  var pt,
    vt = new se(a, st, s ? o.componentStyle : void 0),
    Lt = vt.isStatic && rt.length === 0,
    at = function (lt, ut) {
      return (function (ht, kt, Rt, Pt) {
        var jt = ht.attrs,
          zt = ht.componentStyle,
          It = ht.defaultProps,
          Wt = ht.foldedComponentIds,
          Bt = ht.shouldForwardProp,
          Ut = ht.styledComponentId,
          Gt = ht.target,
          xt = (function (Tt, dt, Ft) {
            Tt === void 0 && (Tt = E);
            var Ct = v({}, dt, { theme: Tt }),
              Xt = {};
            return (
              Ft.forEach(function (Vt) {
                var Mt,
                  Dt,
                  Yt,
                  Jt = Vt;
                for (Mt in (b(Jt) && (Jt = Jt(Ct)), Jt))
                  Ct[Mt] = Xt[Mt] =
                    Mt === "className" ? ((Dt = Xt[Mt]), (Yt = Jt[Mt]), Dt && Yt ? Dt + " " + Yt : Dt || Yt) : Jt[Mt];
              }),
              [Ct, Xt]
            );
          })(Re(kt, reactExports.useContext(Ge), It) || E, kt, jt),
          yt = xt[0],
          _t = xt[1],
          mt = (function (Tt, dt, Ft, Ct) {
            var Xt = fe(),
              Vt = me(),
              Mt = dt ? Tt.generateAndInjectStyles(E, Xt, Vt) : Tt.generateAndInjectStyles(Ft, Xt, Vt);
            return Mt;
          })(zt, Pt, yt),
          $t = Rt,
          Et = _t.$as || kt.$as || _t.as || kt.as || Gt,
          Ot = ke(Et),
          St = _t !== kt ? v({}, kt, {}, _t) : kt,
          wt = {};
        for (var At in St)
          At[0] !== "$" &&
            At !== "as" &&
            (At === "forwardedAs"
              ? (wt.as = St[At])
              : (Bt ? Bt(At, isPropValid, Et) : !Ot || isPropValid(At)) && (wt[At] = St[At]));
        return (
          kt.style && _t.style !== kt.style && (wt.style = v({}, kt.style, {}, _t.style)),
          (wt.className = Array.prototype
            .concat(Wt, Ut, mt !== Ut ? mt : null, kt.className, _t.className)
            .filter(Boolean)
            .join(" ")),
          (wt.ref = $t),
          reactExports.createElement(Et, wt)
        );
      })(pt, lt, ut, Lt);
    };
  return (
    (at.displayName = ct),
    ((pt = React.forwardRef(at)).attrs = ft),
    (pt.componentStyle = vt),
    (pt.displayName = ct),
    (pt.shouldForwardProp = gt),
    (pt.foldedComponentIds = s ? Array.prototype.concat(o.foldedComponentIds, o.styledComponentId) : w),
    (pt.styledComponentId = st),
    (pt.target = s ? o.target : o),
    (pt.withComponent = function (lt) {
      var ut = i.componentId,
        ht = (function (Rt, Pt) {
          if (Rt == null) return {};
          var jt,
            zt,
            It = {},
            Wt = Object.keys(Rt);
          for (zt = 0; zt < Wt.length; zt++) (jt = Wt[zt]), Pt.indexOf(jt) >= 0 || (It[jt] = Rt[jt]);
          return It;
        })(i, ["componentId"]),
        kt = ut && ut + "-" + (ke(lt) ? lt : Te(_(lt)));
      return qe(lt, v({}, ht, { attrs: ft, componentId: kt }), a);
    }),
    Object.defineProperty(pt, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (lt) {
        this._foldedDefaultProps = s ? Me({}, o.defaultProps, lt) : lt;
      },
    }),
    Object.defineProperty(pt, "toString", {
      value: function () {
        return "." + pt.styledComponentId;
      },
    }),
    et &&
      hoistNonReactStatics_cjs(pt, o, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    pt
  );
}
var He = function (o) {
  return (function i(a, s, et) {
    if ((et === void 0 && (et = E), !reactIsExports.isValidElementType(s))) return j(1, String(s));
    var tt = function () {
      return a(s, et, Ce.apply(void 0, arguments));
    };
    return (
      (tt.withConfig = function (rt) {
        return i(a, s, v({}, et, {}, rt));
      }),
      (tt.attrs = function (rt) {
        return i(a, s, v({}, et, { attrs: Array.prototype.concat(et.attrs, rt).filter(Boolean) }));
      }),
      tt
    );
  })(qe, o);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (o) {
  He[o] = He(o);
});
var Xe = function (o) {
  var i = React.forwardRef(function (a, s) {
    var et = reactExports.useContext(Ge),
      tt = o.defaultProps,
      rt = Re(a, et, tt);
    return React.createElement(o, v({}, a, { theme: rt, ref: s }));
  });
  return hoistNonReactStatics_cjs(i, o), (i.displayName = "WithTheme(" + _(o) + ")"), i;
};
const styled = He;
var md5Exports = {},
  md5 = {
    get exports() {
      return md5Exports;
    },
    set exports(o) {
      md5Exports = o;
    },
  };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */ (function (module) {
  (function () {
    var ERROR = "input is invalid type",
      WINDOW = typeof window == "object",
      root = WINDOW ? window : {};
    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
    var WEB_WORKER = !WINDOW && typeof self == "object",
      NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    NODE_JS ? (root = commonjsGlobal) : WEB_WORKER && (root = self);
    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && !0 && module.exports,
      ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      HEX_CHARS = "0123456789abcdef".split(""),
      EXTRA = [128, 32768, 8388608, -2147483648],
      SHIFT = [0, 8, 16, 24],
      OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
      BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
      blocks = [],
      buffer8;
    if (ARRAY_BUFFER) {
      var buffer = new ArrayBuffer(68);
      (buffer8 = new Uint8Array(buffer)), (blocks = new Uint32Array(buffer));
    }
    (root.JS_MD5_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (o) {
        return Object.prototype.toString.call(o) === "[object Array]";
      }),
      ARRAY_BUFFER &&
        (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (o) {
          return typeof o == "object" && o.buffer && o.buffer.constructor === ArrayBuffer;
        });
    var createOutputMethod = function (o) {
        return function (i) {
          return new Md5(!0).update(i)[o]();
        };
      },
      createMethod = function () {
        var o = createOutputMethod("hex");
        NODE_JS && (o = nodeWrap(o)),
          (o.create = function () {
            return new Md5();
          }),
          (o.update = function (s) {
            return o.create().update(s);
          });
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var a = OUTPUT_TYPES[i];
          o[a] = createOutputMethod(a);
        }
        return o;
      },
      nodeWrap = function (method) {
        var crypto = eval("require('crypto')"),
          Buffer = eval("require('buffer').Buffer"),
          nodeMethod = function (o) {
            if (typeof o == "string") return crypto.createHash("md5").update(o, "utf8").digest("hex");
            if (o == null) throw ERROR;
            return (
              o.constructor === ArrayBuffer && (o = new Uint8Array(o)),
              Array.isArray(o) || ArrayBuffer.isView(o) || o.constructor === Buffer
                ? crypto.createHash("md5").update(new Buffer(o)).digest("hex")
                : method(o)
            );
          };
        return nodeMethod;
      };
    function Md5(o) {
      if (o)
        (blocks[0] =
          blocks[16] =
          blocks[1] =
          blocks[2] =
          blocks[3] =
          blocks[4] =
          blocks[5] =
          blocks[6] =
          blocks[7] =
          blocks[8] =
          blocks[9] =
          blocks[10] =
          blocks[11] =
          blocks[12] =
          blocks[13] =
          blocks[14] =
          blocks[15] =
            0),
          (this.blocks = blocks),
          (this.buffer8 = buffer8);
      else if (ARRAY_BUFFER) {
        var i = new ArrayBuffer(68);
        (this.buffer8 = new Uint8Array(i)), (this.blocks = new Uint32Array(i));
      } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      (this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0),
        (this.finalized = this.hashed = !1),
        (this.first = !0);
    }
    (Md5.prototype.update = function (o) {
      if (!this.finalized) {
        var i,
          a = typeof o;
        if (a !== "string") {
          if (a === "object") {
            if (o === null) throw ERROR;
            if (ARRAY_BUFFER && o.constructor === ArrayBuffer) o = new Uint8Array(o);
            else if (!Array.isArray(o) && (!ARRAY_BUFFER || !ArrayBuffer.isView(o))) throw ERROR;
          } else throw ERROR;
          i = !0;
        }
        for (var s, et = 0, tt, rt = o.length, nt = this.blocks, ot = this.buffer8; et < rt; ) {
          if (
            (this.hashed &&
              ((this.hashed = !1),
              (nt[0] = nt[16]),
              (nt[16] =
                nt[1] =
                nt[2] =
                nt[3] =
                nt[4] =
                nt[5] =
                nt[6] =
                nt[7] =
                nt[8] =
                nt[9] =
                nt[10] =
                nt[11] =
                nt[12] =
                nt[13] =
                nt[14] =
                nt[15] =
                  0)),
            i)
          )
            if (ARRAY_BUFFER) for (tt = this.start; et < rt && tt < 64; ++et) ot[tt++] = o[et];
            else for (tt = this.start; et < rt && tt < 64; ++et) nt[tt >> 2] |= o[et] << SHIFT[tt++ & 3];
          else if (ARRAY_BUFFER)
            for (tt = this.start; et < rt && tt < 64; ++et)
              (s = o.charCodeAt(et)),
                s < 128
                  ? (ot[tt++] = s)
                  : s < 2048
                  ? ((ot[tt++] = 192 | (s >> 6)), (ot[tt++] = 128 | (s & 63)))
                  : s < 55296 || s >= 57344
                  ? ((ot[tt++] = 224 | (s >> 12)), (ot[tt++] = 128 | ((s >> 6) & 63)), (ot[tt++] = 128 | (s & 63)))
                  : ((s = 65536 + (((s & 1023) << 10) | (o.charCodeAt(++et) & 1023))),
                    (ot[tt++] = 240 | (s >> 18)),
                    (ot[tt++] = 128 | ((s >> 12) & 63)),
                    (ot[tt++] = 128 | ((s >> 6) & 63)),
                    (ot[tt++] = 128 | (s & 63)));
          else
            for (tt = this.start; et < rt && tt < 64; ++et)
              (s = o.charCodeAt(et)),
                s < 128
                  ? (nt[tt >> 2] |= s << SHIFT[tt++ & 3])
                  : s < 2048
                  ? ((nt[tt >> 2] |= (192 | (s >> 6)) << SHIFT[tt++ & 3]),
                    (nt[tt >> 2] |= (128 | (s & 63)) << SHIFT[tt++ & 3]))
                  : s < 55296 || s >= 57344
                  ? ((nt[tt >> 2] |= (224 | (s >> 12)) << SHIFT[tt++ & 3]),
                    (nt[tt >> 2] |= (128 | ((s >> 6) & 63)) << SHIFT[tt++ & 3]),
                    (nt[tt >> 2] |= (128 | (s & 63)) << SHIFT[tt++ & 3]))
                  : ((s = 65536 + (((s & 1023) << 10) | (o.charCodeAt(++et) & 1023))),
                    (nt[tt >> 2] |= (240 | (s >> 18)) << SHIFT[tt++ & 3]),
                    (nt[tt >> 2] |= (128 | ((s >> 12) & 63)) << SHIFT[tt++ & 3]),
                    (nt[tt >> 2] |= (128 | ((s >> 6) & 63)) << SHIFT[tt++ & 3]),
                    (nt[tt >> 2] |= (128 | (s & 63)) << SHIFT[tt++ & 3]));
          (this.lastByteIndex = tt),
            (this.bytes += tt - this.start),
            tt >= 64 ? ((this.start = tt - 64), this.hash(), (this.hashed = !0)) : (this.start = tt);
        }
        return (
          this.bytes > 4294967295 &&
            ((this.hBytes += (this.bytes / 4294967296) << 0), (this.bytes = this.bytes % 4294967296)),
          this
        );
      }
    }),
      (Md5.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var o = this.blocks,
            i = this.lastByteIndex;
          (o[i >> 2] |= EXTRA[i & 3]),
            i >= 56 &&
              (this.hashed || this.hash(),
              (o[0] = o[16]),
              (o[16] =
                o[1] =
                o[2] =
                o[3] =
                o[4] =
                o[5] =
                o[6] =
                o[7] =
                o[8] =
                o[9] =
                o[10] =
                o[11] =
                o[12] =
                o[13] =
                o[14] =
                o[15] =
                  0)),
            (o[14] = this.bytes << 3),
            (o[15] = (this.hBytes << 3) | (this.bytes >>> 29)),
            this.hash();
        }
      }),
      (Md5.prototype.hash = function () {
        var o,
          i,
          a,
          s,
          et,
          tt,
          rt = this.blocks;
        this.first
          ? ((o = rt[0] - 680876937),
            (o = (((o << 7) | (o >>> 25)) - 271733879) << 0),
            (s = (-1732584194 ^ (o & 2004318071)) + rt[1] - 117830708),
            (s = (((s << 12) | (s >>> 20)) + o) << 0),
            (a = (-271733879 ^ (s & (o ^ -271733879))) + rt[2] - 1126478375),
            (a = (((a << 17) | (a >>> 15)) + s) << 0),
            (i = (o ^ (a & (s ^ o))) + rt[3] - 1316259209),
            (i = (((i << 22) | (i >>> 10)) + a) << 0))
          : ((o = this.h0),
            (i = this.h1),
            (a = this.h2),
            (s = this.h3),
            (o += (s ^ (i & (a ^ s))) + rt[0] - 680876936),
            (o = (((o << 7) | (o >>> 25)) + i) << 0),
            (s += (a ^ (o & (i ^ a))) + rt[1] - 389564586),
            (s = (((s << 12) | (s >>> 20)) + o) << 0),
            (a += (i ^ (s & (o ^ i))) + rt[2] + 606105819),
            (a = (((a << 17) | (a >>> 15)) + s) << 0),
            (i += (o ^ (a & (s ^ o))) + rt[3] - 1044525330),
            (i = (((i << 22) | (i >>> 10)) + a) << 0)),
          (o += (s ^ (i & (a ^ s))) + rt[4] - 176418897),
          (o = (((o << 7) | (o >>> 25)) + i) << 0),
          (s += (a ^ (o & (i ^ a))) + rt[5] + 1200080426),
          (s = (((s << 12) | (s >>> 20)) + o) << 0),
          (a += (i ^ (s & (o ^ i))) + rt[6] - 1473231341),
          (a = (((a << 17) | (a >>> 15)) + s) << 0),
          (i += (o ^ (a & (s ^ o))) + rt[7] - 45705983),
          (i = (((i << 22) | (i >>> 10)) + a) << 0),
          (o += (s ^ (i & (a ^ s))) + rt[8] + 1770035416),
          (o = (((o << 7) | (o >>> 25)) + i) << 0),
          (s += (a ^ (o & (i ^ a))) + rt[9] - 1958414417),
          (s = (((s << 12) | (s >>> 20)) + o) << 0),
          (a += (i ^ (s & (o ^ i))) + rt[10] - 42063),
          (a = (((a << 17) | (a >>> 15)) + s) << 0),
          (i += (o ^ (a & (s ^ o))) + rt[11] - 1990404162),
          (i = (((i << 22) | (i >>> 10)) + a) << 0),
          (o += (s ^ (i & (a ^ s))) + rt[12] + 1804603682),
          (o = (((o << 7) | (o >>> 25)) + i) << 0),
          (s += (a ^ (o & (i ^ a))) + rt[13] - 40341101),
          (s = (((s << 12) | (s >>> 20)) + o) << 0),
          (a += (i ^ (s & (o ^ i))) + rt[14] - 1502002290),
          (a = (((a << 17) | (a >>> 15)) + s) << 0),
          (i += (o ^ (a & (s ^ o))) + rt[15] + 1236535329),
          (i = (((i << 22) | (i >>> 10)) + a) << 0),
          (o += (a ^ (s & (i ^ a))) + rt[1] - 165796510),
          (o = (((o << 5) | (o >>> 27)) + i) << 0),
          (s += (i ^ (a & (o ^ i))) + rt[6] - 1069501632),
          (s = (((s << 9) | (s >>> 23)) + o) << 0),
          (a += (o ^ (i & (s ^ o))) + rt[11] + 643717713),
          (a = (((a << 14) | (a >>> 18)) + s) << 0),
          (i += (s ^ (o & (a ^ s))) + rt[0] - 373897302),
          (i = (((i << 20) | (i >>> 12)) + a) << 0),
          (o += (a ^ (s & (i ^ a))) + rt[5] - 701558691),
          (o = (((o << 5) | (o >>> 27)) + i) << 0),
          (s += (i ^ (a & (o ^ i))) + rt[10] + 38016083),
          (s = (((s << 9) | (s >>> 23)) + o) << 0),
          (a += (o ^ (i & (s ^ o))) + rt[15] - 660478335),
          (a = (((a << 14) | (a >>> 18)) + s) << 0),
          (i += (s ^ (o & (a ^ s))) + rt[4] - 405537848),
          (i = (((i << 20) | (i >>> 12)) + a) << 0),
          (o += (a ^ (s & (i ^ a))) + rt[9] + 568446438),
          (o = (((o << 5) | (o >>> 27)) + i) << 0),
          (s += (i ^ (a & (o ^ i))) + rt[14] - 1019803690),
          (s = (((s << 9) | (s >>> 23)) + o) << 0),
          (a += (o ^ (i & (s ^ o))) + rt[3] - 187363961),
          (a = (((a << 14) | (a >>> 18)) + s) << 0),
          (i += (s ^ (o & (a ^ s))) + rt[8] + 1163531501),
          (i = (((i << 20) | (i >>> 12)) + a) << 0),
          (o += (a ^ (s & (i ^ a))) + rt[13] - 1444681467),
          (o = (((o << 5) | (o >>> 27)) + i) << 0),
          (s += (i ^ (a & (o ^ i))) + rt[2] - 51403784),
          (s = (((s << 9) | (s >>> 23)) + o) << 0),
          (a += (o ^ (i & (s ^ o))) + rt[7] + 1735328473),
          (a = (((a << 14) | (a >>> 18)) + s) << 0),
          (i += (s ^ (o & (a ^ s))) + rt[12] - 1926607734),
          (i = (((i << 20) | (i >>> 12)) + a) << 0),
          (et = i ^ a),
          (o += (et ^ s) + rt[5] - 378558),
          (o = (((o << 4) | (o >>> 28)) + i) << 0),
          (s += (et ^ o) + rt[8] - 2022574463),
          (s = (((s << 11) | (s >>> 21)) + o) << 0),
          (tt = s ^ o),
          (a += (tt ^ i) + rt[11] + 1839030562),
          (a = (((a << 16) | (a >>> 16)) + s) << 0),
          (i += (tt ^ a) + rt[14] - 35309556),
          (i = (((i << 23) | (i >>> 9)) + a) << 0),
          (et = i ^ a),
          (o += (et ^ s) + rt[1] - 1530992060),
          (o = (((o << 4) | (o >>> 28)) + i) << 0),
          (s += (et ^ o) + rt[4] + 1272893353),
          (s = (((s << 11) | (s >>> 21)) + o) << 0),
          (tt = s ^ o),
          (a += (tt ^ i) + rt[7] - 155497632),
          (a = (((a << 16) | (a >>> 16)) + s) << 0),
          (i += (tt ^ a) + rt[10] - 1094730640),
          (i = (((i << 23) | (i >>> 9)) + a) << 0),
          (et = i ^ a),
          (o += (et ^ s) + rt[13] + 681279174),
          (o = (((o << 4) | (o >>> 28)) + i) << 0),
          (s += (et ^ o) + rt[0] - 358537222),
          (s = (((s << 11) | (s >>> 21)) + o) << 0),
          (tt = s ^ o),
          (a += (tt ^ i) + rt[3] - 722521979),
          (a = (((a << 16) | (a >>> 16)) + s) << 0),
          (i += (tt ^ a) + rt[6] + 76029189),
          (i = (((i << 23) | (i >>> 9)) + a) << 0),
          (et = i ^ a),
          (o += (et ^ s) + rt[9] - 640364487),
          (o = (((o << 4) | (o >>> 28)) + i) << 0),
          (s += (et ^ o) + rt[12] - 421815835),
          (s = (((s << 11) | (s >>> 21)) + o) << 0),
          (tt = s ^ o),
          (a += (tt ^ i) + rt[15] + 530742520),
          (a = (((a << 16) | (a >>> 16)) + s) << 0),
          (i += (tt ^ a) + rt[2] - 995338651),
          (i = (((i << 23) | (i >>> 9)) + a) << 0),
          (o += (a ^ (i | ~s)) + rt[0] - 198630844),
          (o = (((o << 6) | (o >>> 26)) + i) << 0),
          (s += (i ^ (o | ~a)) + rt[7] + 1126891415),
          (s = (((s << 10) | (s >>> 22)) + o) << 0),
          (a += (o ^ (s | ~i)) + rt[14] - 1416354905),
          (a = (((a << 15) | (a >>> 17)) + s) << 0),
          (i += (s ^ (a | ~o)) + rt[5] - 57434055),
          (i = (((i << 21) | (i >>> 11)) + a) << 0),
          (o += (a ^ (i | ~s)) + rt[12] + 1700485571),
          (o = (((o << 6) | (o >>> 26)) + i) << 0),
          (s += (i ^ (o | ~a)) + rt[3] - 1894986606),
          (s = (((s << 10) | (s >>> 22)) + o) << 0),
          (a += (o ^ (s | ~i)) + rt[10] - 1051523),
          (a = (((a << 15) | (a >>> 17)) + s) << 0),
          (i += (s ^ (a | ~o)) + rt[1] - 2054922799),
          (i = (((i << 21) | (i >>> 11)) + a) << 0),
          (o += (a ^ (i | ~s)) + rt[8] + 1873313359),
          (o = (((o << 6) | (o >>> 26)) + i) << 0),
          (s += (i ^ (o | ~a)) + rt[15] - 30611744),
          (s = (((s << 10) | (s >>> 22)) + o) << 0),
          (a += (o ^ (s | ~i)) + rt[6] - 1560198380),
          (a = (((a << 15) | (a >>> 17)) + s) << 0),
          (i += (s ^ (a | ~o)) + rt[13] + 1309151649),
          (i = (((i << 21) | (i >>> 11)) + a) << 0),
          (o += (a ^ (i | ~s)) + rt[4] - 145523070),
          (o = (((o << 6) | (o >>> 26)) + i) << 0),
          (s += (i ^ (o | ~a)) + rt[11] - 1120210379),
          (s = (((s << 10) | (s >>> 22)) + o) << 0),
          (a += (o ^ (s | ~i)) + rt[2] + 718787259),
          (a = (((a << 15) | (a >>> 17)) + s) << 0),
          (i += (s ^ (a | ~o)) + rt[9] - 343485551),
          (i = (((i << 21) | (i >>> 11)) + a) << 0),
          this.first
            ? ((this.h0 = (o + 1732584193) << 0),
              (this.h1 = (i - 271733879) << 0),
              (this.h2 = (a - 1732584194) << 0),
              (this.h3 = (s + 271733878) << 0),
              (this.first = !1))
            : ((this.h0 = (this.h0 + o) << 0),
              (this.h1 = (this.h1 + i) << 0),
              (this.h2 = (this.h2 + a) << 0),
              (this.h3 = (this.h3 + s) << 0));
      }),
      (Md5.prototype.hex = function () {
        this.finalize();
        var o = this.h0,
          i = this.h1,
          a = this.h2,
          s = this.h3;
        return (
          HEX_CHARS[(o >> 4) & 15] +
          HEX_CHARS[o & 15] +
          HEX_CHARS[(o >> 12) & 15] +
          HEX_CHARS[(o >> 8) & 15] +
          HEX_CHARS[(o >> 20) & 15] +
          HEX_CHARS[(o >> 16) & 15] +
          HEX_CHARS[(o >> 28) & 15] +
          HEX_CHARS[(o >> 24) & 15] +
          HEX_CHARS[(i >> 4) & 15] +
          HEX_CHARS[i & 15] +
          HEX_CHARS[(i >> 12) & 15] +
          HEX_CHARS[(i >> 8) & 15] +
          HEX_CHARS[(i >> 20) & 15] +
          HEX_CHARS[(i >> 16) & 15] +
          HEX_CHARS[(i >> 28) & 15] +
          HEX_CHARS[(i >> 24) & 15] +
          HEX_CHARS[(a >> 4) & 15] +
          HEX_CHARS[a & 15] +
          HEX_CHARS[(a >> 12) & 15] +
          HEX_CHARS[(a >> 8) & 15] +
          HEX_CHARS[(a >> 20) & 15] +
          HEX_CHARS[(a >> 16) & 15] +
          HEX_CHARS[(a >> 28) & 15] +
          HEX_CHARS[(a >> 24) & 15] +
          HEX_CHARS[(s >> 4) & 15] +
          HEX_CHARS[s & 15] +
          HEX_CHARS[(s >> 12) & 15] +
          HEX_CHARS[(s >> 8) & 15] +
          HEX_CHARS[(s >> 20) & 15] +
          HEX_CHARS[(s >> 16) & 15] +
          HEX_CHARS[(s >> 28) & 15] +
          HEX_CHARS[(s >> 24) & 15]
        );
      }),
      (Md5.prototype.toString = Md5.prototype.hex),
      (Md5.prototype.digest = function () {
        this.finalize();
        var o = this.h0,
          i = this.h1,
          a = this.h2,
          s = this.h3;
        return [
          o & 255,
          (o >> 8) & 255,
          (o >> 16) & 255,
          (o >> 24) & 255,
          i & 255,
          (i >> 8) & 255,
          (i >> 16) & 255,
          (i >> 24) & 255,
          a & 255,
          (a >> 8) & 255,
          (a >> 16) & 255,
          (a >> 24) & 255,
          s & 255,
          (s >> 8) & 255,
          (s >> 16) & 255,
          (s >> 24) & 255,
        ];
      }),
      (Md5.prototype.array = Md5.prototype.digest),
      (Md5.prototype.arrayBuffer = function () {
        this.finalize();
        var o = new ArrayBuffer(16),
          i = new Uint32Array(o);
        return (i[0] = this.h0), (i[1] = this.h1), (i[2] = this.h2), (i[3] = this.h3), o;
      }),
      (Md5.prototype.buffer = Md5.prototype.arrayBuffer),
      (Md5.prototype.base64 = function () {
        for (var o, i, a, s = "", et = this.array(), tt = 0; tt < 15; )
          (o = et[tt++]),
            (i = et[tt++]),
            (a = et[tt++]),
            (s +=
              BASE64_ENCODE_CHAR[o >>> 2] +
              BASE64_ENCODE_CHAR[((o << 4) | (i >>> 4)) & 63] +
              BASE64_ENCODE_CHAR[((i << 2) | (a >>> 6)) & 63] +
              BASE64_ENCODE_CHAR[a & 63]);
        return (o = et[tt]), (s += BASE64_ENCODE_CHAR[o >>> 2] + BASE64_ENCODE_CHAR[(o << 4) & 63] + "=="), s;
      });
    var exports = createMethod();
    COMMON_JS ? (module.exports = exports) : (root.md5 = exports);
  })();
})(md5);
var sha1Exports = {},
  sha1 = {
    get exports() {
      return sha1Exports;
    },
    set exports(o) {
      sha1Exports = o;
    },
  };
/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */ (function (module) {
  (function () {
    var root = typeof window == "object" ? window : {},
      NODE_JS = !root.JS_SHA1_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    NODE_JS && (root = commonjsGlobal);
    var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && !0 && module.exports,
      HEX_CHARS = "0123456789abcdef".split(""),
      EXTRA = [-2147483648, 8388608, 32768, 128],
      SHIFT = [24, 16, 8, 0],
      OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
      blocks = [],
      createOutputMethod = function (o) {
        return function (i) {
          return new Sha1(!0).update(i)[o]();
        };
      },
      createMethod = function () {
        var o = createOutputMethod("hex");
        NODE_JS && (o = nodeWrap(o)),
          (o.create = function () {
            return new Sha1();
          }),
          (o.update = function (s) {
            return o.create().update(s);
          });
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var a = OUTPUT_TYPES[i];
          o[a] = createOutputMethod(a);
        }
        return o;
      },
      nodeWrap = function (method) {
        var crypto = eval("require('crypto')"),
          Buffer = eval("require('buffer').Buffer"),
          nodeMethod = function (o) {
            if (typeof o == "string") return crypto.createHash("sha1").update(o, "utf8").digest("hex");
            if (o.constructor === ArrayBuffer) o = new Uint8Array(o);
            else if (o.length === void 0) return method(o);
            return crypto.createHash("sha1").update(new Buffer(o)).digest("hex");
          };
        return nodeMethod;
      };
    function Sha1(o) {
      o
        ? ((blocks[0] =
            blocks[16] =
            blocks[1] =
            blocks[2] =
            blocks[3] =
            blocks[4] =
            blocks[5] =
            blocks[6] =
            blocks[7] =
            blocks[8] =
            blocks[9] =
            blocks[10] =
            blocks[11] =
            blocks[12] =
            blocks[13] =
            blocks[14] =
            blocks[15] =
              0),
          (this.blocks = blocks))
        : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        (this.h0 = 1732584193),
        (this.h1 = 4023233417),
        (this.h2 = 2562383102),
        (this.h3 = 271733878),
        (this.h4 = 3285377520),
        (this.block = this.start = this.bytes = this.hBytes = 0),
        (this.finalized = this.hashed = !1),
        (this.first = !0);
    }
    (Sha1.prototype.update = function (o) {
      if (!this.finalized) {
        var i = typeof o != "string";
        i && o.constructor === root.ArrayBuffer && (o = new Uint8Array(o));
        for (var a, s = 0, et, tt = o.length || 0, rt = this.blocks; s < tt; ) {
          if (
            (this.hashed &&
              ((this.hashed = !1),
              (rt[0] = this.block),
              (rt[16] =
                rt[1] =
                rt[2] =
                rt[3] =
                rt[4] =
                rt[5] =
                rt[6] =
                rt[7] =
                rt[8] =
                rt[9] =
                rt[10] =
                rt[11] =
                rt[12] =
                rt[13] =
                rt[14] =
                rt[15] =
                  0)),
            i)
          )
            for (et = this.start; s < tt && et < 64; ++s) rt[et >> 2] |= o[s] << SHIFT[et++ & 3];
          else
            for (et = this.start; s < tt && et < 64; ++s)
              (a = o.charCodeAt(s)),
                a < 128
                  ? (rt[et >> 2] |= a << SHIFT[et++ & 3])
                  : a < 2048
                  ? ((rt[et >> 2] |= (192 | (a >> 6)) << SHIFT[et++ & 3]),
                    (rt[et >> 2] |= (128 | (a & 63)) << SHIFT[et++ & 3]))
                  : a < 55296 || a >= 57344
                  ? ((rt[et >> 2] |= (224 | (a >> 12)) << SHIFT[et++ & 3]),
                    (rt[et >> 2] |= (128 | ((a >> 6) & 63)) << SHIFT[et++ & 3]),
                    (rt[et >> 2] |= (128 | (a & 63)) << SHIFT[et++ & 3]))
                  : ((a = 65536 + (((a & 1023) << 10) | (o.charCodeAt(++s) & 1023))),
                    (rt[et >> 2] |= (240 | (a >> 18)) << SHIFT[et++ & 3]),
                    (rt[et >> 2] |= (128 | ((a >> 12) & 63)) << SHIFT[et++ & 3]),
                    (rt[et >> 2] |= (128 | ((a >> 6) & 63)) << SHIFT[et++ & 3]),
                    (rt[et >> 2] |= (128 | (a & 63)) << SHIFT[et++ & 3]));
          (this.lastByteIndex = et),
            (this.bytes += et - this.start),
            et >= 64
              ? ((this.block = rt[16]), (this.start = et - 64), this.hash(), (this.hashed = !0))
              : (this.start = et);
        }
        return (
          this.bytes > 4294967295 &&
            ((this.hBytes += (this.bytes / 4294967296) << 0), (this.bytes = this.bytes % 4294967296)),
          this
        );
      }
    }),
      (Sha1.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var o = this.blocks,
            i = this.lastByteIndex;
          (o[16] = this.block),
            (o[i >> 2] |= EXTRA[i & 3]),
            (this.block = o[16]),
            i >= 56 &&
              (this.hashed || this.hash(),
              (o[0] = this.block),
              (o[16] =
                o[1] =
                o[2] =
                o[3] =
                o[4] =
                o[5] =
                o[6] =
                o[7] =
                o[8] =
                o[9] =
                o[10] =
                o[11] =
                o[12] =
                o[13] =
                o[14] =
                o[15] =
                  0)),
            (o[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
            (o[15] = this.bytes << 3),
            this.hash();
        }
      }),
      (Sha1.prototype.hash = function () {
        var o = this.h0,
          i = this.h1,
          a = this.h2,
          s = this.h3,
          et = this.h4,
          tt,
          rt,
          nt,
          ot = this.blocks;
        for (rt = 16; rt < 80; ++rt)
          (nt = ot[rt - 3] ^ ot[rt - 8] ^ ot[rt - 14] ^ ot[rt - 16]), (ot[rt] = (nt << 1) | (nt >>> 31));
        for (rt = 0; rt < 20; rt += 5)
          (tt = (i & a) | (~i & s)),
            (nt = (o << 5) | (o >>> 27)),
            (et = (nt + tt + et + 1518500249 + ot[rt]) << 0),
            (i = (i << 30) | (i >>> 2)),
            (tt = (o & i) | (~o & a)),
            (nt = (et << 5) | (et >>> 27)),
            (s = (nt + tt + s + 1518500249 + ot[rt + 1]) << 0),
            (o = (o << 30) | (o >>> 2)),
            (tt = (et & o) | (~et & i)),
            (nt = (s << 5) | (s >>> 27)),
            (a = (nt + tt + a + 1518500249 + ot[rt + 2]) << 0),
            (et = (et << 30) | (et >>> 2)),
            (tt = (s & et) | (~s & o)),
            (nt = (a << 5) | (a >>> 27)),
            (i = (nt + tt + i + 1518500249 + ot[rt + 3]) << 0),
            (s = (s << 30) | (s >>> 2)),
            (tt = (a & s) | (~a & et)),
            (nt = (i << 5) | (i >>> 27)),
            (o = (nt + tt + o + 1518500249 + ot[rt + 4]) << 0),
            (a = (a << 30) | (a >>> 2));
        for (; rt < 40; rt += 5)
          (tt = i ^ a ^ s),
            (nt = (o << 5) | (o >>> 27)),
            (et = (nt + tt + et + 1859775393 + ot[rt]) << 0),
            (i = (i << 30) | (i >>> 2)),
            (tt = o ^ i ^ a),
            (nt = (et << 5) | (et >>> 27)),
            (s = (nt + tt + s + 1859775393 + ot[rt + 1]) << 0),
            (o = (o << 30) | (o >>> 2)),
            (tt = et ^ o ^ i),
            (nt = (s << 5) | (s >>> 27)),
            (a = (nt + tt + a + 1859775393 + ot[rt + 2]) << 0),
            (et = (et << 30) | (et >>> 2)),
            (tt = s ^ et ^ o),
            (nt = (a << 5) | (a >>> 27)),
            (i = (nt + tt + i + 1859775393 + ot[rt + 3]) << 0),
            (s = (s << 30) | (s >>> 2)),
            (tt = a ^ s ^ et),
            (nt = (i << 5) | (i >>> 27)),
            (o = (nt + tt + o + 1859775393 + ot[rt + 4]) << 0),
            (a = (a << 30) | (a >>> 2));
        for (; rt < 60; rt += 5)
          (tt = (i & a) | (i & s) | (a & s)),
            (nt = (o << 5) | (o >>> 27)),
            (et = (nt + tt + et - 1894007588 + ot[rt]) << 0),
            (i = (i << 30) | (i >>> 2)),
            (tt = (o & i) | (o & a) | (i & a)),
            (nt = (et << 5) | (et >>> 27)),
            (s = (nt + tt + s - 1894007588 + ot[rt + 1]) << 0),
            (o = (o << 30) | (o >>> 2)),
            (tt = (et & o) | (et & i) | (o & i)),
            (nt = (s << 5) | (s >>> 27)),
            (a = (nt + tt + a - 1894007588 + ot[rt + 2]) << 0),
            (et = (et << 30) | (et >>> 2)),
            (tt = (s & et) | (s & o) | (et & o)),
            (nt = (a << 5) | (a >>> 27)),
            (i = (nt + tt + i - 1894007588 + ot[rt + 3]) << 0),
            (s = (s << 30) | (s >>> 2)),
            (tt = (a & s) | (a & et) | (s & et)),
            (nt = (i << 5) | (i >>> 27)),
            (o = (nt + tt + o - 1894007588 + ot[rt + 4]) << 0),
            (a = (a << 30) | (a >>> 2));
        for (; rt < 80; rt += 5)
          (tt = i ^ a ^ s),
            (nt = (o << 5) | (o >>> 27)),
            (et = (nt + tt + et - 899497514 + ot[rt]) << 0),
            (i = (i << 30) | (i >>> 2)),
            (tt = o ^ i ^ a),
            (nt = (et << 5) | (et >>> 27)),
            (s = (nt + tt + s - 899497514 + ot[rt + 1]) << 0),
            (o = (o << 30) | (o >>> 2)),
            (tt = et ^ o ^ i),
            (nt = (s << 5) | (s >>> 27)),
            (a = (nt + tt + a - 899497514 + ot[rt + 2]) << 0),
            (et = (et << 30) | (et >>> 2)),
            (tt = s ^ et ^ o),
            (nt = (a << 5) | (a >>> 27)),
            (i = (nt + tt + i - 899497514 + ot[rt + 3]) << 0),
            (s = (s << 30) | (s >>> 2)),
            (tt = a ^ s ^ et),
            (nt = (i << 5) | (i >>> 27)),
            (o = (nt + tt + o - 899497514 + ot[rt + 4]) << 0),
            (a = (a << 30) | (a >>> 2));
        (this.h0 = (this.h0 + o) << 0),
          (this.h1 = (this.h1 + i) << 0),
          (this.h2 = (this.h2 + a) << 0),
          (this.h3 = (this.h3 + s) << 0),
          (this.h4 = (this.h4 + et) << 0);
      }),
      (Sha1.prototype.hex = function () {
        this.finalize();
        var o = this.h0,
          i = this.h1,
          a = this.h2,
          s = this.h3,
          et = this.h4;
        return (
          HEX_CHARS[(o >> 28) & 15] +
          HEX_CHARS[(o >> 24) & 15] +
          HEX_CHARS[(o >> 20) & 15] +
          HEX_CHARS[(o >> 16) & 15] +
          HEX_CHARS[(o >> 12) & 15] +
          HEX_CHARS[(o >> 8) & 15] +
          HEX_CHARS[(o >> 4) & 15] +
          HEX_CHARS[o & 15] +
          HEX_CHARS[(i >> 28) & 15] +
          HEX_CHARS[(i >> 24) & 15] +
          HEX_CHARS[(i >> 20) & 15] +
          HEX_CHARS[(i >> 16) & 15] +
          HEX_CHARS[(i >> 12) & 15] +
          HEX_CHARS[(i >> 8) & 15] +
          HEX_CHARS[(i >> 4) & 15] +
          HEX_CHARS[i & 15] +
          HEX_CHARS[(a >> 28) & 15] +
          HEX_CHARS[(a >> 24) & 15] +
          HEX_CHARS[(a >> 20) & 15] +
          HEX_CHARS[(a >> 16) & 15] +
          HEX_CHARS[(a >> 12) & 15] +
          HEX_CHARS[(a >> 8) & 15] +
          HEX_CHARS[(a >> 4) & 15] +
          HEX_CHARS[a & 15] +
          HEX_CHARS[(s >> 28) & 15] +
          HEX_CHARS[(s >> 24) & 15] +
          HEX_CHARS[(s >> 20) & 15] +
          HEX_CHARS[(s >> 16) & 15] +
          HEX_CHARS[(s >> 12) & 15] +
          HEX_CHARS[(s >> 8) & 15] +
          HEX_CHARS[(s >> 4) & 15] +
          HEX_CHARS[s & 15] +
          HEX_CHARS[(et >> 28) & 15] +
          HEX_CHARS[(et >> 24) & 15] +
          HEX_CHARS[(et >> 20) & 15] +
          HEX_CHARS[(et >> 16) & 15] +
          HEX_CHARS[(et >> 12) & 15] +
          HEX_CHARS[(et >> 8) & 15] +
          HEX_CHARS[(et >> 4) & 15] +
          HEX_CHARS[et & 15]
        );
      }),
      (Sha1.prototype.toString = Sha1.prototype.hex),
      (Sha1.prototype.digest = function () {
        this.finalize();
        var o = this.h0,
          i = this.h1,
          a = this.h2,
          s = this.h3,
          et = this.h4;
        return [
          (o >> 24) & 255,
          (o >> 16) & 255,
          (o >> 8) & 255,
          o & 255,
          (i >> 24) & 255,
          (i >> 16) & 255,
          (i >> 8) & 255,
          i & 255,
          (a >> 24) & 255,
          (a >> 16) & 255,
          (a >> 8) & 255,
          a & 255,
          (s >> 24) & 255,
          (s >> 16) & 255,
          (s >> 8) & 255,
          s & 255,
          (et >> 24) & 255,
          (et >> 16) & 255,
          (et >> 8) & 255,
          et & 255,
        ];
      }),
      (Sha1.prototype.array = Sha1.prototype.digest),
      (Sha1.prototype.arrayBuffer = function () {
        this.finalize();
        var o = new ArrayBuffer(20),
          i = new DataView(o);
        return (
          i.setUint32(0, this.h0),
          i.setUint32(4, this.h1),
          i.setUint32(8, this.h2),
          i.setUint32(12, this.h3),
          i.setUint32(16, this.h4),
          o
        );
      });
    var exports = createMethod();
    COMMON_JS ? (module.exports = exports) : (root.sha1 = exports);
  })();
})(sha1);
(function () {
  for (var o = {}, i = 0; i < 256; i++) {
    var a = i.toString(16);
    o[a.length === 1 ? "0" + a : a] = i;
  }
  return o;
})();
function _extends$1() {
  return (
    (_extends$1 = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
          }
          return o;
        }),
    _extends$1.apply(this, arguments)
  );
}
function _objectWithoutPropertiesLoose$2(o, i) {
  if (o == null) return {};
  var a = {},
    s = Object.keys(o),
    et,
    tt;
  for (tt = 0; tt < s.length; tt++) (et = s[tt]), !(i.indexOf(et) >= 0) && (a[et] = o[et]);
  return a;
}
function _setPrototypeOf(o, i) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (s, et) {
          return (s.__proto__ = et), s;
        }),
    _setPrototypeOf(o, i)
  );
}
function _assertThisInitialized(o) {
  if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function _typeof$1(o) {
  return (
    (_typeof$1 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (i) {
            return typeof i;
          }
        : function (i) {
            return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype
              ? "symbol"
              : typeof i;
          }),
    _typeof$1(o)
  );
}
function _toPrimitive(o, i) {
  if (_typeof$1(o) !== "object" || o === null) return o;
  var a = o[Symbol.toPrimitive];
  if (a !== void 0) {
    var s = a.call(o, i || "default");
    if (_typeof$1(s) !== "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(o);
}
function _toPropertyKey(o) {
  var i = _toPrimitive(o, "string");
  return _typeof$1(i) === "symbol" ? i : String(i);
}
function _defineProperty(o, i, a) {
  return (
    (i = _toPropertyKey(i)),
    i in o ? Object.defineProperty(o, i, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (o[i] = a),
    o
  );
}
function _objectWithoutPropertiesLoose$1(o, i) {
  if (o == null) return {};
  var a = {},
    s = Object.keys(o),
    et,
    tt;
  for (tt = 0; tt < s.length; tt++) (et = s[tt]), !(i.indexOf(et) >= 0) && (a[et] = o[et]);
  return a;
}
var generalClasses = function o(i) {
    var a,
      s = i.className,
      et = i.color,
      tt = i.roundness,
      rt = i.size,
      nt = i.theme;
    return [
      s,
      ((a = {}),
      (a["color-" + et] = et && et !== "default"),
      (a["edge-" + tt] = tt && tt !== "default"),
      (a["size-" + rt] = rt && rt !== "default"),
      (a["style-" + nt] = nt && nt !== "default"),
      a),
    ];
  },
  _excluded$8 = ["inline"],
  HighlightWrapper = styled.mark.withConfig({ displayName: "highlight__HighlightWrapper", componentId: "sc-ya8t2j-0" })(
    ["", ""],
    function (o) {
      var i = o.sx;
      return i || "";
    }
  );
function Highlight(o) {
  var i = o.inline,
    a = _objectWithoutPropertiesLoose$1(o, _excluded$8);
  return React.createElement(
    HighlightWrapper,
    Object.assign({}, a, { className: clsx.apply(void 0, ["mark"].concat(generalClasses(o), [i && "inline"])) })
  );
}
function getLabelFromChildren(o) {
  let i = "";
  return (
    React.Children.map(o, (a) => {
      typeof a == "string" && (i += a);
    }),
    i
  );
}
function isValidUrl(o) {
  return new RegExp(
    "^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    "i"
  ).test(o);
}
function isValidEmail(o) {
  var i = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  return i.test(o);
}
const defaultWatchers = [
  {
    watchFor: "link",
    render: (o) => React.createElement("a", { href: o, target: "_blank", rel: "noreferrer noopener" }, o),
  },
];
function LinkParser({ children: o, parseNewLine: i = !0, newLineWatcher: a = "\\n", watchers: s = defaultWatchers }) {
  const et = reactExports.useMemo(() => {
    var tt;
    return (tt = getLabelFromChildren(o)) === null || tt === void 0 ? void 0 : tt.split(" ");
  }, [o]);
  return React.createElement(
    React.Fragment,
    null,
    et.map((tt, rt) => {
      var nt;
      const ot = `${rt}_${tt}`;
      if (i && tt === a) return React.createElement("br", { key: ot });
      const { watchFor: it, render: ct } =
          (s == null
            ? void 0
            : s.find(
                ({ type: ft = "startsWith", watchFor: gt }) =>
                  (gt === "email" && isValidEmail(tt)) ||
                  (gt === "link" && isValidUrl(tt)) ||
                  (gt !== "" && (tt == null ? void 0 : tt[ft](gt)))
              )) || {},
        st = rt + 1 === (et == null ? void 0 : et.length) ? ` ${tt}` : `${tt} `;
      return React.createElement(
        reactExports.Fragment,
        { key: ot },
        it && (nt = ct == null ? void 0 : ct(st)) !== null && nt !== void 0 ? nt : st
      );
    })
  );
}
function Arrow() {
  return jsxRuntimeExports.jsx("svg", {
    className: "arrow-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "150",
    height: "auto",
    version: "1.2",
    viewBox: "0 0 162 44",
    fill: "#1cb0f6",
    children: jsxRuntimeExports.jsx("path", {
      d: "M51.5 1.5c-3.3.8-7.7 1.9-9.8 2.5-2.8.7-3.8 1.6-4.2 3.5-.3 1.4.1 3.2.8 4 .6.9 2.3 1.6 3.7 1.5 1.4 0 6.5-.7 11.5-1.6 5-.9 9.6-2.2 10.3-2.8.7-.6 1.3-2 1.3-3.1s-.6-2.5-1.3-3.2C63.1 1.7 61.4.9 60 .6c-1.4-.2-5.2.2-8.5.9zM80 4.2c-.8.7-1.3 2.5-1.2 4 .1 1.5 1 3.2 1.9 3.7 1 .5 5.5 1.7 10 2.7 8.1 1.9 8.2 1.9 10.3-.1 1.1-1.1 2.1-2.7 2.1-3.5 0-.8-.6-2.1-1.3-2.7-.7-.7-4.7-2.2-8.8-3.3-4.1-1.1-8.4-2-9.5-2-1.2 0-2.7.5-3.5 1.2zm55.5 1.4c-.9.8-1.6 2.3-1.6 3.2.1.9 1.3 4.1 2.6 6.9 1.4 2.9 2.3 5.5 2 5.8-.3.3-4.4-1.6-9.3-4.1-5-2.6-9.4-4.3-10.4-4-1 .3-2.1 1.8-2.4 3.3-.3 1.8 0 3.6 1 5 .9 1.3 5.1 4.2 9.4 6.5 6.4 3.5 7.4 4.3 5.7 4.9-1.1.4-3.1.8-4.5.8s-3.1.7-3.8 1.6c-.6.8-1 2.6-.7 4q.5 2.5 3.3 3.2c1.5.5 9.2.8 17 .8 14.1 0 14.4 0 16.3-2.5 1.3-1.6 1.7-3.2 1.3-4.5-.4-1.1-4.1-7.6-8.2-14.5s-8.3-13.7-9.3-15.3C142.7 5 141.1 4 139.6 4c-1.4 0-3.2.7-4.1 1.6zm-122 8.1c-4.4 2-9.2 4.4-10.8 5.4C1.2 20.2 0 21.8 0 22.7c-.1 1 .8 2.6 2 3.5 1.9 1.7 2.4 1.6 11.8-2.3 5.3-2.2 10.7-4.7 11.9-5.5 1.4-.8 2.3-2.4 2.3-3.9 0-1.7-.8-2.8-2.5-3.5-1.4-.5-2.8-1-3.3-1-.4 0-4.3 1.7-8.7 3.7z",
    }),
  });
}
function _objectWithoutProperties(o, i) {
  if (o == null) return {};
  var a = _objectWithoutPropertiesLoose$2(o, i),
    s,
    et;
  if (Object.getOwnPropertySymbols) {
    var tt = Object.getOwnPropertySymbols(o);
    for (et = 0; et < tt.length; et++)
      (s = tt[et]), !(i.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(o, s) && (a[s] = o[s]);
  }
  return a;
}
function _objectSpread(o) {
  for (var i = 1; i < arguments.length; i++) {
    var a = arguments[i] != null ? Object(arguments[i]) : {},
      s = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" &&
      s.push.apply(
        s,
        Object.getOwnPropertySymbols(a).filter(function (et) {
          return Object.getOwnPropertyDescriptor(a, et).enumerable;
        })
      ),
      s.forEach(function (et) {
        _defineProperty(o, et, a[et]);
      });
  }
  return o;
}
function createStyleObject(o) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = arguments.length > 2 ? arguments[2] : void 0;
  return o.reduce(function (s, et) {
    return _objectSpread({}, s, a[et]);
  }, i);
}
function createClassNameString(o) {
  return o.join(" ");
}
function createChildren(o, i) {
  var a = 0;
  return function (s) {
    return (
      (a += 1),
      s.map(function (et, tt) {
        return createElement$1({
          node: et,
          stylesheet: o,
          useInlineStyles: i,
          key: "code-segment-".concat(a, "-").concat(tt),
        });
      })
    );
  };
}
function createElement$1(o) {
  var i = o.node,
    a = o.stylesheet,
    s = o.style,
    et = s === void 0 ? {} : s,
    tt = o.useInlineStyles,
    rt = o.key,
    nt = i.properties,
    ot = i.type,
    it = i.tagName,
    ct = i.value;
  if (ot === "text") return ct;
  if (it) {
    var st = createChildren(a, tt),
      ft =
        tt &&
        nt.className &&
        nt.className.filter(function (Lt) {
          return !a[Lt];
        }),
      gt = ft && ft.length ? ft : void 0,
      pt = tt
        ? _objectSpread(
            {},
            nt,
            { className: gt && createClassNameString(gt) },
            { style: createStyleObject(nt.className, Object.assign({}, nt.style, et), a) }
          )
        : _objectSpread({}, nt, { className: createClassNameString(nt.className) }),
      vt = st(i.children);
    return React.createElement(it, _extends$1({ key: rt }, pt), vt);
  }
}
var newLineRegex = /\n/g;
function getNewLines(o) {
  return o.match(newLineRegex);
}
function getLineNumbers(o) {
  var i = o.lines,
    a = o.startingLineNumber,
    s = o.numberProps,
    et = s === void 0 ? {} : s;
  return i.map(function (tt, rt) {
    var nt = rt + a,
      ot = typeof et == "function" ? et(nt) : et;
    return React.createElement(
      "span",
      _extends$1({ key: "line-".concat(rt), className: "react-syntax-highlighter-line-number" }, ot),
      "".concat(
        nt,
        `
`
      )
    );
  });
}
function LineNumbers(o) {
  var i = o.codeString,
    a = o.codeStyle,
    s = o.containerProps,
    et = s === void 0 ? {} : s,
    tt = o.numberProps,
    rt = o.startingLineNumber;
  return (
    (et.style = et.style || { float: "left", paddingRight: "10px" }),
    React.createElement(
      "code",
      _extends$1({}, et, { style: Object.assign({}, a, et.style) }),
      getLineNumbers({
        lines: i.replace(/\n$/, "").split(`
`),
        numberProps: tt,
        startingLineNumber: rt,
      })
    )
  );
}
function createLineElement(o) {
  var i = o.children,
    a = o.lineNumber,
    s = o.lineProps,
    et = o.className,
    tt = et === void 0 ? [] : et,
    rt = (typeof s == "function" ? s(a) : s) || {};
  return (
    (rt.className = rt.className ? tt.concat(rt.className) : tt),
    { type: "element", tagName: "span", properties: rt, children: i }
  );
}
function flattenCodeTree(o) {
  for (
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      s = 0;
    s < o.length;
    s++
  ) {
    var et = o[s];
    if (et.type === "text") a.push(createLineElement({ children: [et], className: i }));
    else if (et.children) {
      var tt = i.concat(et.properties.className);
      a = a.concat(flattenCodeTree(et.children, tt));
    }
  }
  return a;
}
function wrapLinesInSpan(o, i) {
  for (
    var a = flattenCodeTree(o.value),
      s = [],
      et = -1,
      tt = 0,
      rt = function () {
        var it = a[tt],
          ct = it.children[0].value,
          st = getNewLines(ct);
        if (st) {
          var ft = ct.split(`
`);
          ft.forEach(function (gt, pt) {
            var vt = s.length + 1,
              Lt = {
                type: "text",
                value: "".concat(
                  gt,
                  `
`
                ),
              };
            if (pt === 0) {
              var at = a
                .slice(et + 1, tt)
                .concat(createLineElement({ children: [Lt], className: it.properties.className }));
              s.push(createLineElement({ children: at, lineNumber: vt, lineProps: i }));
            } else if (pt === ft.length - 1) {
              var lt = a[tt + 1] && a[tt + 1].children && a[tt + 1].children[0];
              if (lt) {
                var ut = { type: "text", value: "".concat(gt) },
                  ht = createLineElement({ children: [ut], className: it.properties.className });
                a.splice(tt + 1, 0, ht);
              } else
                s.push(
                  createLineElement({
                    children: [Lt],
                    lineNumber: vt,
                    lineProps: i,
                    className: it.properties.className,
                  })
                );
            } else
              s.push(
                createLineElement({ children: [Lt], lineNumber: vt, lineProps: i, className: it.properties.className })
              );
          }),
            (et = tt);
        }
        tt++;
      };
    tt < a.length;

  )
    rt();
  if (et !== a.length - 1) {
    var nt = a.slice(et + 1, a.length);
    nt && nt.length && s.push(createLineElement({ children: nt, lineNumber: s.length + 1, lineProps: i }));
  }
  return s;
}
function defaultRenderer(o) {
  var i = o.rows,
    a = o.stylesheet,
    s = o.useInlineStyles;
  return i.map(function (et, tt) {
    return createElement$1({ node: et, stylesheet: a, useInlineStyles: s, key: "code-segement".concat(tt) });
  });
}
function getCodeTree(o) {
  var i = o.astGenerator,
    a = o.language,
    s = o.code,
    et = o.defaultCodeValue;
  if (i.getLanguage) {
    var tt = a && i.getLanguage(a);
    return a === "text" ? { value: et, language: "text" } : tt ? i.highlight(a, s) : i.highlightAuto(s);
  }
  try {
    return a && a !== "text" ? { value: i.highlight(s, a) } : { value: et };
  } catch {
    return { value: et };
  }
}
function highlight(o, i) {
  return function (s) {
    var et = s.language,
      tt = s.children,
      rt = s.style,
      nt = rt === void 0 ? i : rt,
      ot = s.customStyle,
      it = ot === void 0 ? {} : ot,
      ct = s.codeTagProps,
      st = ct === void 0 ? { style: nt['code[class*="language-"]'] } : ct,
      ft = s.useInlineStyles,
      gt = ft === void 0 ? !0 : ft,
      pt = s.showLineNumbers,
      vt = pt === void 0 ? !1 : pt,
      Lt = s.startingLineNumber,
      at = Lt === void 0 ? 1 : Lt,
      lt = s.lineNumberContainerProps,
      ut = s.lineNumberProps,
      ht = s.wrapLines,
      kt = s.lineProps,
      Rt = kt === void 0 ? {} : kt,
      Pt = s.renderer,
      jt = s.PreTag,
      zt = jt === void 0 ? "pre" : jt,
      It = s.CodeTag,
      Wt = It === void 0 ? "code" : It,
      Bt = s.code,
      Ut = Bt === void 0 ? (Array.isArray(tt) ? tt[0] : tt) : Bt,
      Gt = s.astGenerator,
      xt = _objectWithoutProperties(s, [
        "language",
        "children",
        "style",
        "customStyle",
        "codeTagProps",
        "useInlineStyles",
        "showLineNumbers",
        "startingLineNumber",
        "lineNumberContainerProps",
        "lineNumberProps",
        "wrapLines",
        "lineProps",
        "renderer",
        "PreTag",
        "CodeTag",
        "code",
        "astGenerator",
      ]);
    Gt = Gt || o;
    var yt = vt
        ? React.createElement(LineNumbers, {
            containerProps: lt,
            codeStyle: st.style || {},
            numberProps: ut,
            startingLineNumber: at,
            codeString: Ut,
          })
        : null,
      _t = nt.hljs || nt['pre[class*="language-"]'] || { backgroundColor: "#fff" },
      mt = gt
        ? Object.assign({}, xt, { style: Object.assign({}, _t, it) })
        : Object.assign({}, xt, { className: "hljs" });
    if (!Gt) return React.createElement(zt, mt, yt, React.createElement(Wt, st, Ut));
    (ht = Pt && ht === void 0 ? !0 : ht), (Pt = Pt || defaultRenderer);
    var $t = [{ type: "text", value: Ut }],
      Et = getCodeTree({ astGenerator: Gt, language: et, code: Ut, defaultCodeValue: $t });
    Et.language === null && (Et.value = $t);
    var Ot = ht ? wrapLinesInSpan(Et, Rt) : Et.value;
    return React.createElement(
      zt,
      mt,
      yt,
      React.createElement(Wt, st, Pt({ rows: Ot, stylesheet: nt, useInlineStyles: gt }))
    );
  };
}
const scriptRel = "modulepreload",
  assetsURL = function (o) {
    return "/" + o;
  },
  seen = {},
  __vitePreload = function o(i, a, s) {
    if (!a || a.length === 0) return i();
    const et = document.getElementsByTagName("link");
    return Promise.all(
      a.map((tt) => {
        if (((tt = assetsURL(tt)), tt in seen)) return;
        seen[tt] = !0;
        const rt = tt.endsWith(".css"),
          nt = rt ? '[rel="stylesheet"]' : "";
        if (!!s)
          for (let ct = et.length - 1; ct >= 0; ct--) {
            const st = et[ct];
            if (st.href === tt && (!rt || st.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${tt}"]${nt}`)) return;
        const it = document.createElement("link");
        if (
          ((it.rel = rt ? "stylesheet" : scriptRel),
          rt || ((it.as = "script"), (it.crossOrigin = "")),
          (it.href = tt),
          document.head.appendChild(it),
          rt)
        )
          return new Promise((ct, st) => {
            it.addEventListener("load", ct),
              it.addEventListener("error", () => st(new Error(`Unable to preload CSS for ${tt}`)));
          });
      })
    ).then(() => i());
  };
var regeneratorRuntimeExports = {},
  regeneratorRuntime$1 = {
    get exports() {
      return regeneratorRuntimeExports;
    },
    set exports(o) {
      regeneratorRuntimeExports = o;
    },
  },
  _typeofExports = {},
  _typeof = {
    get exports() {
      return _typeofExports;
    },
    set exports(o) {
      _typeofExports = o;
    },
  };
(function (o) {
  function i(a) {
    return (
      (o.exports = i =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (s) {
              return typeof s;
            }
          : function (s) {
              return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype
                ? "symbol"
                : typeof s;
            }),
      (o.exports.__esModule = !0),
      (o.exports.default = o.exports),
      i(a)
    );
  }
  (o.exports = i), (o.exports.__esModule = !0), (o.exports.default = o.exports);
})(_typeof);
(function (o) {
  var i = _typeofExports.default;
  function a() {
    (o.exports = a =
      function () {
        return s;
      }),
      (o.exports.__esModule = !0),
      (o.exports.default = o.exports);
    var s = {},
      et = Object.prototype,
      tt = et.hasOwnProperty,
      rt =
        Object.defineProperty ||
        function (xt, yt, _t) {
          xt[yt] = _t.value;
        },
      nt = typeof Symbol == "function" ? Symbol : {},
      ot = nt.iterator || "@@iterator",
      it = nt.asyncIterator || "@@asyncIterator",
      ct = nt.toStringTag || "@@toStringTag";
    function st(xt, yt, _t) {
      return Object.defineProperty(xt, yt, { value: _t, enumerable: !0, configurable: !0, writable: !0 }), xt[yt];
    }
    try {
      st({}, "");
    } catch {
      st = function (_t, mt, $t) {
        return (_t[mt] = $t);
      };
    }
    function ft(xt, yt, _t, mt) {
      var $t = yt && yt.prototype instanceof vt ? yt : vt,
        Et = Object.create($t.prototype),
        Ot = new Bt(mt || []);
      return rt(Et, "_invoke", { value: jt(xt, _t, Ot) }), Et;
    }
    function gt(xt, yt, _t) {
      try {
        return { type: "normal", arg: xt.call(yt, _t) };
      } catch (mt) {
        return { type: "throw", arg: mt };
      }
    }
    s.wrap = ft;
    var pt = {};
    function vt() {}
    function Lt() {}
    function at() {}
    var lt = {};
    st(lt, ot, function () {
      return this;
    });
    var ut = Object.getPrototypeOf,
      ht = ut && ut(ut(Ut([])));
    ht && ht !== et && tt.call(ht, ot) && (lt = ht);
    var kt = (at.prototype = vt.prototype = Object.create(lt));
    function Rt(xt) {
      ["next", "throw", "return"].forEach(function (yt) {
        st(xt, yt, function (_t) {
          return this._invoke(yt, _t);
        });
      });
    }
    function Pt(xt, yt) {
      function _t($t, Et, Ot, St) {
        var wt = gt(xt[$t], xt, Et);
        if (wt.type !== "throw") {
          var At = wt.arg,
            Tt = At.value;
          return Tt && i(Tt) == "object" && tt.call(Tt, "__await")
            ? yt.resolve(Tt.__await).then(
                function (dt) {
                  _t("next", dt, Ot, St);
                },
                function (dt) {
                  _t("throw", dt, Ot, St);
                }
              )
            : yt.resolve(Tt).then(
                function (dt) {
                  (At.value = dt), Ot(At);
                },
                function (dt) {
                  return _t("throw", dt, Ot, St);
                }
              );
        }
        St(wt.arg);
      }
      var mt;
      rt(this, "_invoke", {
        value: function (Et, Ot) {
          function St() {
            return new yt(function (wt, At) {
              _t(Et, Ot, wt, At);
            });
          }
          return (mt = mt ? mt.then(St, St) : St());
        },
      });
    }
    function jt(xt, yt, _t) {
      var mt = "suspendedStart";
      return function ($t, Et) {
        if (mt === "executing") throw new Error("Generator is already running");
        if (mt === "completed") {
          if ($t === "throw") throw Et;
          return Gt();
        }
        for (_t.method = $t, _t.arg = Et; ; ) {
          var Ot = _t.delegate;
          if (Ot) {
            var St = zt(Ot, _t);
            if (St) {
              if (St === pt) continue;
              return St;
            }
          }
          if (_t.method === "next") _t.sent = _t._sent = _t.arg;
          else if (_t.method === "throw") {
            if (mt === "suspendedStart") throw ((mt = "completed"), _t.arg);
            _t.dispatchException(_t.arg);
          } else _t.method === "return" && _t.abrupt("return", _t.arg);
          mt = "executing";
          var wt = gt(xt, yt, _t);
          if (wt.type === "normal") {
            if (((mt = _t.done ? "completed" : "suspendedYield"), wt.arg === pt)) continue;
            return { value: wt.arg, done: _t.done };
          }
          wt.type === "throw" && ((mt = "completed"), (_t.method = "throw"), (_t.arg = wt.arg));
        }
      };
    }
    function zt(xt, yt) {
      var _t = yt.method,
        mt = xt.iterator[_t];
      if (mt === void 0)
        return (
          (yt.delegate = null),
          (_t === "throw" &&
            xt.iterator.return &&
            ((yt.method = "return"), (yt.arg = void 0), zt(xt, yt), yt.method === "throw")) ||
            (_t !== "return" &&
              ((yt.method = "throw"), (yt.arg = new TypeError("The iterator does not provide a '" + _t + "' method")))),
          pt
        );
      var $t = gt(mt, xt.iterator, yt.arg);
      if ($t.type === "throw") return (yt.method = "throw"), (yt.arg = $t.arg), (yt.delegate = null), pt;
      var Et = $t.arg;
      return Et
        ? Et.done
          ? ((yt[xt.resultName] = Et.value),
            (yt.next = xt.nextLoc),
            yt.method !== "return" && ((yt.method = "next"), (yt.arg = void 0)),
            (yt.delegate = null),
            pt)
          : Et
        : ((yt.method = "throw"),
          (yt.arg = new TypeError("iterator result is not an object")),
          (yt.delegate = null),
          pt);
    }
    function It(xt) {
      var yt = { tryLoc: xt[0] };
      1 in xt && (yt.catchLoc = xt[1]),
        2 in xt && ((yt.finallyLoc = xt[2]), (yt.afterLoc = xt[3])),
        this.tryEntries.push(yt);
    }
    function Wt(xt) {
      var yt = xt.completion || {};
      (yt.type = "normal"), delete yt.arg, (xt.completion = yt);
    }
    function Bt(xt) {
      (this.tryEntries = [{ tryLoc: "root" }]), xt.forEach(It, this), this.reset(!0);
    }
    function Ut(xt) {
      if (xt) {
        var yt = xt[ot];
        if (yt) return yt.call(xt);
        if (typeof xt.next == "function") return xt;
        if (!isNaN(xt.length)) {
          var _t = -1,
            mt = function $t() {
              for (; ++_t < xt.length; ) if (tt.call(xt, _t)) return ($t.value = xt[_t]), ($t.done = !1), $t;
              return ($t.value = void 0), ($t.done = !0), $t;
            };
          return (mt.next = mt);
        }
      }
      return { next: Gt };
    }
    function Gt() {
      return { value: void 0, done: !0 };
    }
    return (
      (Lt.prototype = at),
      rt(kt, "constructor", { value: at, configurable: !0 }),
      rt(at, "constructor", { value: Lt, configurable: !0 }),
      (Lt.displayName = st(at, ct, "GeneratorFunction")),
      (s.isGeneratorFunction = function (xt) {
        var yt = typeof xt == "function" && xt.constructor;
        return !!yt && (yt === Lt || (yt.displayName || yt.name) === "GeneratorFunction");
      }),
      (s.mark = function (xt) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(xt, at)
            : ((xt.__proto__ = at), st(xt, ct, "GeneratorFunction")),
          (xt.prototype = Object.create(kt)),
          xt
        );
      }),
      (s.awrap = function (xt) {
        return { __await: xt };
      }),
      Rt(Pt.prototype),
      st(Pt.prototype, it, function () {
        return this;
      }),
      (s.AsyncIterator = Pt),
      (s.async = function (xt, yt, _t, mt, $t) {
        $t === void 0 && ($t = Promise);
        var Et = new Pt(ft(xt, yt, _t, mt), $t);
        return s.isGeneratorFunction(yt)
          ? Et
          : Et.next().then(function (Ot) {
              return Ot.done ? Ot.value : Et.next();
            });
      }),
      Rt(kt),
      st(kt, ct, "Generator"),
      st(kt, ot, function () {
        return this;
      }),
      st(kt, "toString", function () {
        return "[object Generator]";
      }),
      (s.keys = function (xt) {
        var yt = Object(xt),
          _t = [];
        for (var mt in yt) _t.push(mt);
        return (
          _t.reverse(),
          function $t() {
            for (; _t.length; ) {
              var Et = _t.pop();
              if (Et in yt) return ($t.value = Et), ($t.done = !1), $t;
            }
            return ($t.done = !0), $t;
          }
        );
      }),
      (s.values = Ut),
      (Bt.prototype = {
        constructor: Bt,
        reset: function (yt) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(Wt),
            !yt)
          )
            for (var _t in this)
              _t.charAt(0) === "t" && tt.call(this, _t) && !isNaN(+_t.slice(1)) && (this[_t] = void 0);
        },
        stop: function () {
          this.done = !0;
          var yt = this.tryEntries[0].completion;
          if (yt.type === "throw") throw yt.arg;
          return this.rval;
        },
        dispatchException: function (yt) {
          if (this.done) throw yt;
          var _t = this;
          function mt(At, Tt) {
            return (
              (Ot.type = "throw"), (Ot.arg = yt), (_t.next = At), Tt && ((_t.method = "next"), (_t.arg = void 0)), !!Tt
            );
          }
          for (var $t = this.tryEntries.length - 1; $t >= 0; --$t) {
            var Et = this.tryEntries[$t],
              Ot = Et.completion;
            if (Et.tryLoc === "root") return mt("end");
            if (Et.tryLoc <= this.prev) {
              var St = tt.call(Et, "catchLoc"),
                wt = tt.call(Et, "finallyLoc");
              if (St && wt) {
                if (this.prev < Et.catchLoc) return mt(Et.catchLoc, !0);
                if (this.prev < Et.finallyLoc) return mt(Et.finallyLoc);
              } else if (St) {
                if (this.prev < Et.catchLoc) return mt(Et.catchLoc, !0);
              } else {
                if (!wt) throw new Error("try statement without catch or finally");
                if (this.prev < Et.finallyLoc) return mt(Et.finallyLoc);
              }
            }
          }
        },
        abrupt: function (yt, _t) {
          for (var mt = this.tryEntries.length - 1; mt >= 0; --mt) {
            var $t = this.tryEntries[mt];
            if ($t.tryLoc <= this.prev && tt.call($t, "finallyLoc") && this.prev < $t.finallyLoc) {
              var Et = $t;
              break;
            }
          }
          Et && (yt === "break" || yt === "continue") && Et.tryLoc <= _t && _t <= Et.finallyLoc && (Et = null);
          var Ot = Et ? Et.completion : {};
          return (
            (Ot.type = yt),
            (Ot.arg = _t),
            Et ? ((this.method = "next"), (this.next = Et.finallyLoc), pt) : this.complete(Ot)
          );
        },
        complete: function (yt, _t) {
          if (yt.type === "throw") throw yt.arg;
          return (
            yt.type === "break" || yt.type === "continue"
              ? (this.next = yt.arg)
              : yt.type === "return"
              ? ((this.rval = this.arg = yt.arg), (this.method = "return"), (this.next = "end"))
              : yt.type === "normal" && _t && (this.next = _t),
            pt
          );
        },
        finish: function (yt) {
          for (var _t = this.tryEntries.length - 1; _t >= 0; --_t) {
            var mt = this.tryEntries[_t];
            if (mt.finallyLoc === yt) return this.complete(mt.completion, mt.afterLoc), Wt(mt), pt;
          }
        },
        catch: function (yt) {
          for (var _t = this.tryEntries.length - 1; _t >= 0; --_t) {
            var mt = this.tryEntries[_t];
            if (mt.tryLoc === yt) {
              var $t = mt.completion;
              if ($t.type === "throw") {
                var Et = $t.arg;
                Wt(mt);
              }
              return Et;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (yt, _t, mt) {
          return (
            (this.delegate = { iterator: Ut(yt), resultName: _t, nextLoc: mt }),
            this.method === "next" && (this.arg = void 0),
            pt
          );
        },
      }),
      s
    );
  }
  (o.exports = a), (o.exports.__esModule = !0), (o.exports.default = o.exports);
})(regeneratorRuntime$1);
var runtime = regeneratorRuntimeExports(),
  regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (o) {
  typeof globalThis == "object"
    ? (globalThis.regeneratorRuntime = runtime)
    : Function("r", "regeneratorRuntime = r")(runtime);
}
const _regeneratorRuntime = regenerator;
function asyncGeneratorStep(o, i, a, s, et, tt, rt) {
  try {
    var nt = o[tt](rt),
      ot = nt.value;
  } catch (it) {
    a(it);
    return;
  }
  nt.done ? i(ot) : Promise.resolve(ot).then(s, et);
}
function _asyncToGenerator(o) {
  return function () {
    var i = this,
      a = arguments;
    return new Promise(function (s, et) {
      var tt = o.apply(i, a);
      function rt(ot) {
        asyncGeneratorStep(tt, s, et, rt, nt, "next", ot);
      }
      function nt(ot) {
        asyncGeneratorStep(tt, s, et, rt, nt, "throw", ot);
      }
      rt(void 0);
    });
  };
}
function _classCallCheck(o, i) {
  if (!(o instanceof i)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(o, i) {
  for (var a = 0; a < i.length; a++) {
    var s = i[a];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      "value" in s && (s.writable = !0),
      Object.defineProperty(o, _toPropertyKey(s.key), s);
  }
}
function _createClass(o, i, a) {
  return (
    i && _defineProperties(o.prototype, i),
    a && _defineProperties(o, a),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    o
  );
}
function _possibleConstructorReturn(o, i) {
  if (i && (_typeof$1(i) === "object" || typeof i == "function")) return i;
  if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(o);
}
function _getPrototypeOf(o) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    _getPrototypeOf(o)
  );
}
function _inherits(o, i) {
  if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
  (o.prototype = Object.create(i && i.prototype, { constructor: { value: o, writable: !0, configurable: !0 } })),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    i && _setPrototypeOf(o, i);
}
const createAsyncLoadingHighlighter = function (o) {
    var i = o.loader,
      a = o.isLanguageRegistered,
      s = o.registerLanguage,
      et = o.languageLoaders,
      tt = o.noAsyncLoadingLanguages,
      rt = (function (nt) {
        _inherits(ot, nt);
        function ot() {
          return (
            _classCallCheck(this, ot), _possibleConstructorReturn(this, _getPrototypeOf(ot).apply(this, arguments))
          );
        }
        return (
          _createClass(
            ot,
            [
              {
                key: "componentDidUpdate",
                value: function () {
                  !ot.isRegistered(this.props.language) && et && this.loadLanguage();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var ct = this;
                  ot.astGeneratorPromise || ot.loadAstGenerator(),
                    ot.astGenerator ||
                      ot.astGeneratorPromise.then(function () {
                        ct.forceUpdate();
                      }),
                    !ot.isRegistered(this.props.language) && et && this.loadLanguage();
                },
              },
              {
                key: "loadLanguage",
                value: function () {
                  var ct = this,
                    st = this.props.language;
                  st !== "text" &&
                    ot.loadLanguage(st).then(function () {
                      ct.forceUpdate();
                    });
                },
              },
              {
                key: "normalizeLanguage",
                value: function (ct) {
                  return ot.isSupportedLanguage(ct) ? ct : "text";
                },
              },
              {
                key: "render",
                value: function () {
                  return React.createElement(
                    ot.highlightInstance,
                    _extends$1({}, this.props, {
                      language: this.normalizeLanguage(this.props.language),
                      astGenerator: ot.astGenerator,
                    })
                  );
                },
              },
            ],
            [
              {
                key: "preload",
                value: function () {
                  return ot.loadAstGenerator();
                },
              },
              {
                key: "loadLanguage",
                value: (function () {
                  var it = _asyncToGenerator(
                    _regeneratorRuntime.mark(function ct(st) {
                      var ft;
                      return _regeneratorRuntime.wrap(
                        function (pt) {
                          for (;;)
                            switch ((pt.prev = pt.next)) {
                              case 0:
                                if (((ft = et[st]), typeof ft != "function")) {
                                  pt.next = 5;
                                  break;
                                }
                                return pt.abrupt("return", ft(ot.registerLanguage));
                              case 5:
                                throw new Error("Language ".concat(st, " not supported"));
                              case 6:
                              case "end":
                                return pt.stop();
                            }
                        },
                        ct,
                        this
                      );
                    })
                  );
                  return function (st) {
                    return it.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isSupportedLanguage",
                value: function (ct) {
                  return ot.isRegistered(ct) || typeof et[ct] == "function";
                },
              },
              {
                key: "loadAstGenerator",
                value: function () {
                  return (
                    (ot.astGeneratorPromise = i().then(function (ct) {
                      (ot.astGenerator = ct),
                        s &&
                          ot.languages.forEach(function (st, ft) {
                            return s(ct, ft, st);
                          });
                    })),
                    ot.astGeneratorPromise
                  );
                },
              },
            ]
          ),
          ot
        );
      })(React.PureComponent);
    return (
      _defineProperty(rt, "astGenerator", null),
      _defineProperty(rt, "highlightInstance", highlight(null, {})),
      _defineProperty(rt, "astGeneratorPromise", null),
      _defineProperty(rt, "languages", new Map()),
      _defineProperty(rt, "supportedLanguages", o.supportedLanguages || Object.keys(et || {})),
      _defineProperty(rt, "isRegistered", function (nt) {
        if (tt) return !0;
        if (!s) throw new Error("Current syntax highlighter doesn't support registration of languages");
        return rt.astGenerator ? a(rt.astGenerator, nt) : rt.languages.has(nt);
      }),
      _defineProperty(rt, "registerLanguage", function (nt, ot) {
        if (!s) throw new Error("Current syntax highlighter doesn't support registration of languages");
        if (rt.astGenerator) return s(rt.astGenerator, nt, ot);
        rt.languages.set(nt, ot);
      }),
      rt
    );
  },
  createLanguageAsyncLoader = function (o, i) {
    return (function () {
      var a = _asyncToGenerator(
        _regeneratorRuntime.mark(function s(et) {
          var tt;
          return _regeneratorRuntime.wrap(
            function (nt) {
              for (;;)
                switch ((nt.prev = nt.next)) {
                  case 0:
                    return (nt.next = 2), i();
                  case 2:
                    (tt = nt.sent), et(o, tt.default || tt);
                  case 4:
                  case "end":
                    return nt.stop();
                }
            },
            s,
            this
          );
        })
      );
      return function (s) {
        return a.apply(this, arguments);
      };
    })();
  },
  languageLoaders = {
    abap: createLanguageAsyncLoader("abap", function () {
      return __vitePreload(() => import("./abap-b2a168a5.js").then((o) => o.a), []);
    }),
    actionscript: createLanguageAsyncLoader("actionscript", function () {
      return __vitePreload(() => import("./actionscript-20d8cfb7.js").then((o) => o.a), []);
    }),
    ada: createLanguageAsyncLoader("ada", function () {
      return __vitePreload(() => import("./ada-cc84ca80.js").then((o) => o.a), []);
    }),
    apacheconf: createLanguageAsyncLoader("apacheconf", function () {
      return __vitePreload(() => import("./apacheconf-625344f6.js").then((o) => o.a), []);
    }),
    apl: createLanguageAsyncLoader("apl", function () {
      return __vitePreload(() => import("./apl-1d0d27a7.js").then((o) => o.a), []);
    }),
    applescript: createLanguageAsyncLoader("applescript", function () {
      return __vitePreload(() => import("./applescript-0c9642d0.js").then((o) => o.a), []);
    }),
    arduino: createLanguageAsyncLoader("arduino", function () {
      return __vitePreload(
        () => import("./arduino-05498380.js").then((o) => o.a),
        ["assets/arduino-05498380.js", "assets/cpp-27fcf2a3.js", "assets/c-38458e21.js"]
      );
    }),
    arff: createLanguageAsyncLoader("arff", function () {
      return __vitePreload(() => import("./arff-70f5d371.js").then((o) => o.a), []);
    }),
    asciidoc: createLanguageAsyncLoader("asciidoc", function () {
      return __vitePreload(() => import("./asciidoc-1c22a3f4.js").then((o) => o.a), []);
    }),
    asm6502: createLanguageAsyncLoader("asm6502", function () {
      return __vitePreload(() => import("./asm6502-0e946800.js").then((o) => o.a), []);
    }),
    aspnet: createLanguageAsyncLoader("aspnet", function () {
      return __vitePreload(() => import("./aspnet-f1b11103.js").then((o) => o.a), []);
    }),
    autohotkey: createLanguageAsyncLoader("autohotkey", function () {
      return __vitePreload(() => import("./autohotkey-3731d0a6.js").then((o) => o.a), []);
    }),
    autoit: createLanguageAsyncLoader("autoit", function () {
      return __vitePreload(() => import("./autoit-eb7f2f22.js").then((o) => o.a), []);
    }),
    bash: createLanguageAsyncLoader("bash", function () {
      return __vitePreload(() => import("./bash-d72d6209.js").then((o) => o.b), []);
    }),
    basic: createLanguageAsyncLoader("basic", function () {
      return __vitePreload(
        () => import("./basic-4441b68a.js").then((o) => o.b),
        ["assets/basic-4441b68a.js", "assets/basic-c7adc4bb.js"]
      );
    }),
    batch: createLanguageAsyncLoader("batch", function () {
      return __vitePreload(() => import("./batch-4e2a6c8b.js").then((o) => o.b), []);
    }),
    bison: createLanguageAsyncLoader("bison", function () {
      return __vitePreload(
        () => import("./bison-bd830125.js").then((o) => o.b),
        ["assets/bison-bd830125.js", "assets/c-38458e21.js"]
      );
    }),
    brainfuck: createLanguageAsyncLoader("brainfuck", function () {
      return __vitePreload(() => import("./brainfuck-540e9a12.js").then((o) => o.b), []);
    }),
    bro: createLanguageAsyncLoader("bro", function () {
      return __vitePreload(() => import("./bro-b13e6650.js").then((o) => o.b), []);
    }),
    c: createLanguageAsyncLoader("c", function () {
      return __vitePreload(
        () => import("./c-06e3594a.js").then((o) => o.c),
        ["assets/c-06e3594a.js", "assets/c-38458e21.js"]
      );
    }),
    clike: createLanguageAsyncLoader("clike", function () {
      return __vitePreload(() => import("./clike-e18fd25b.js").then((o) => o.c), []);
    }),
    clojure: createLanguageAsyncLoader("clojure", function () {
      return __vitePreload(() => import("./clojure-0a193f21.js").then((o) => o.c), []);
    }),
    coffeescript: createLanguageAsyncLoader("coffeescript", function () {
      return __vitePreload(() => import("./coffeescript-565e3839.js").then((o) => o.c), []);
    }),
    cpp: createLanguageAsyncLoader("cpp", function () {
      return __vitePreload(
        () => import("./cpp-f71bd252.js").then((o) => o.c),
        ["assets/cpp-f71bd252.js", "assets/cpp-27fcf2a3.js", "assets/c-38458e21.js"]
      );
    }),
    crystal: createLanguageAsyncLoader("crystal", function () {
      return __vitePreload(
        () => import("./crystal-4751e202.js").then((o) => o.c),
        ["assets/crystal-4751e202.js", "assets/ruby-89b11700.js"]
      );
    }),
    csharp: createLanguageAsyncLoader("csharp", function () {
      return __vitePreload(() => import("./csharp-d265f27c.js").then((o) => o.c), []);
    }),
    csp: createLanguageAsyncLoader("csp", function () {
      return __vitePreload(() => import("./csp-eba98dfa.js").then((o) => o.c), []);
    }),
    cssExtras: createLanguageAsyncLoader("cssExtras", function () {
      return __vitePreload(() => import("./css-extras-ef2810ca.js").then((o) => o.c), []);
    }),
    css: createLanguageAsyncLoader("css", function () {
      return __vitePreload(() => import("./css-b87affbb.js").then((o) => o.c), []);
    }),
    d: createLanguageAsyncLoader("d", function () {
      return __vitePreload(() => import("./d-02ee5937.js").then((o) => o.d), []);
    }),
    dart: createLanguageAsyncLoader("dart", function () {
      return __vitePreload(() => import("./dart-40c0bb22.js").then((o) => o.d), []);
    }),
    diff: createLanguageAsyncLoader("diff", function () {
      return __vitePreload(() => import("./diff-f2f303a4.js").then((o) => o.d), []);
    }),
    django: createLanguageAsyncLoader("django", function () {
      return __vitePreload(
        () => import("./django-35a4f6d0.js").then((o) => o.d),
        ["assets/django-35a4f6d0.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    docker: createLanguageAsyncLoader("docker", function () {
      return __vitePreload(() => import("./docker-449b6163.js").then((o) => o.d), []);
    }),
    eiffel: createLanguageAsyncLoader("eiffel", function () {
      return __vitePreload(() => import("./eiffel-e4ad5f26.js").then((o) => o.e), []);
    }),
    elixir: createLanguageAsyncLoader("elixir", function () {
      return __vitePreload(() => import("./elixir-6784c6d7.js").then((o) => o.e), []);
    }),
    elm: createLanguageAsyncLoader("elm", function () {
      return __vitePreload(() => import("./elm-7c59d2f9.js").then((o) => o.e), []);
    }),
    erb: createLanguageAsyncLoader("erb", function () {
      return __vitePreload(
        () => import("./erb-06e92125.js").then((o) => o.e),
        ["assets/erb-06e92125.js", "assets/markup-templating-793f47eb.js", "assets/ruby-89b11700.js"]
      );
    }),
    erlang: createLanguageAsyncLoader("erlang", function () {
      return __vitePreload(() => import("./erlang-f3ab85f9.js").then((o) => o.e), []);
    }),
    flow: createLanguageAsyncLoader("flow", function () {
      return __vitePreload(() => import("./flow-88784b54.js").then((o) => o.f), []);
    }),
    fortran: createLanguageAsyncLoader("fortran", function () {
      return __vitePreload(() => import("./fortran-385904e5.js").then((o) => o.f), []);
    }),
    fsharp: createLanguageAsyncLoader("fsharp", function () {
      return __vitePreload(() => import("./fsharp-d75bbc45.js").then((o) => o.f), []);
    }),
    gedcom: createLanguageAsyncLoader("gedcom", function () {
      return __vitePreload(() => import("./gedcom-af8fbedb.js").then((o) => o.g), []);
    }),
    gherkin: createLanguageAsyncLoader("gherkin", function () {
      return __vitePreload(() => import("./gherkin-d80c931d.js").then((o) => o.g), []);
    }),
    git: createLanguageAsyncLoader("git", function () {
      return __vitePreload(() => import("./git-88e0f368.js").then((o) => o.g), []);
    }),
    glsl: createLanguageAsyncLoader("glsl", function () {
      return __vitePreload(() => import("./glsl-61f8287e.js").then((o) => o.g), []);
    }),
    go: createLanguageAsyncLoader("go", function () {
      return __vitePreload(() => import("./go-4329a9ff.js").then((o) => o.g), []);
    }),
    graphql: createLanguageAsyncLoader("graphql", function () {
      return __vitePreload(() => import("./graphql-29754c69.js").then((o) => o.g), []);
    }),
    groovy: createLanguageAsyncLoader("groovy", function () {
      return __vitePreload(() => import("./groovy-993985d1.js").then((o) => o.g), []);
    }),
    haml: createLanguageAsyncLoader("haml", function () {
      return __vitePreload(() => import("./haml-bcdb7c2a.js").then((o) => o.h), []);
    }),
    handlebars: createLanguageAsyncLoader("handlebars", function () {
      return __vitePreload(
        () => import("./handlebars-c6e2761c.js").then((o) => o.h),
        ["assets/handlebars-c6e2761c.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    haskell: createLanguageAsyncLoader("haskell", function () {
      return __vitePreload(() => import("./haskell-79b3ad30.js").then((o) => o.h), []);
    }),
    haxe: createLanguageAsyncLoader("haxe", function () {
      return __vitePreload(() => import("./haxe-32a1a056.js").then((o) => o.h), []);
    }),
    hpkp: createLanguageAsyncLoader("hpkp", function () {
      return __vitePreload(() => import("./hpkp-54815828.js").then((o) => o.h), []);
    }),
    hsts: createLanguageAsyncLoader("hsts", function () {
      return __vitePreload(() => import("./hsts-7dda122e.js").then((o) => o.h), []);
    }),
    http: createLanguageAsyncLoader("http", function () {
      return __vitePreload(() => import("./http-4f47d13b.js").then((o) => o.h), []);
    }),
    ichigojam: createLanguageAsyncLoader("ichigojam", function () {
      return __vitePreload(() => import("./ichigojam-88caa808.js").then((o) => o.i), []);
    }),
    icon: createLanguageAsyncLoader("icon", function () {
      return __vitePreload(() => import("./icon-dec13b19.js").then((o) => o.i), []);
    }),
    inform7: createLanguageAsyncLoader("inform7", function () {
      return __vitePreload(() => import("./inform7-de933fef.js").then((o) => o.i), []);
    }),
    ini: createLanguageAsyncLoader("ini", function () {
      return __vitePreload(() => import("./ini-189be40c.js").then((o) => o.i), []);
    }),
    io: createLanguageAsyncLoader("io", function () {
      return __vitePreload(() => import("./io-b120cb39.js").then((o) => o.i), []);
    }),
    j: createLanguageAsyncLoader("j", function () {
      return __vitePreload(() => import("./j-eabf6bd7.js").then((o) => o.j), []);
    }),
    java: createLanguageAsyncLoader("java", function () {
      return __vitePreload(
        () => import("./java-74d919da.js").then((o) => o.j),
        ["assets/java-74d919da.js", "assets/java-31e93124.js"]
      );
    }),
    javascript: createLanguageAsyncLoader("javascript", function () {
      return __vitePreload(() => import("./javascript-79c2f953.js").then((o) => o.j), []);
    }),
    jolie: createLanguageAsyncLoader("jolie", function () {
      return __vitePreload(() => import("./jolie-26dc5d22.js").then((o) => o.j), []);
    }),
    json: createLanguageAsyncLoader("json", function () {
      return __vitePreload(() => import("./json-0512349b.js").then((o) => o.j), []);
    }),
    jsx: createLanguageAsyncLoader("jsx", function () {
      return __vitePreload(
        () => import("./jsx-60cebae4.js").then((o) => o.j),
        ["assets/jsx-60cebae4.js", "assets/jsx-85f6d975.js"]
      );
    }),
    julia: createLanguageAsyncLoader("julia", function () {
      return __vitePreload(() => import("./julia-76698ed8.js").then((o) => o.j), []);
    }),
    keyman: createLanguageAsyncLoader("keyman", function () {
      return __vitePreload(() => import("./keyman-28e2b97c.js").then((o) => o.k), []);
    }),
    kotlin: createLanguageAsyncLoader("kotlin", function () {
      return __vitePreload(() => import("./kotlin-36a46142.js").then((o) => o.k), []);
    }),
    latex: createLanguageAsyncLoader("latex", function () {
      return __vitePreload(() => import("./latex-0130ff5e.js").then((o) => o.l), []);
    }),
    less: createLanguageAsyncLoader("less", function () {
      return __vitePreload(() => import("./less-4433f2fc.js").then((o) => o.l), []);
    }),
    liquid: createLanguageAsyncLoader("liquid", function () {
      return __vitePreload(() => import("./liquid-5662fb27.js").then((o) => o.l), []);
    }),
    lisp: createLanguageAsyncLoader("lisp", function () {
      return __vitePreload(() => import("./lisp-9ef8ac64.js").then((o) => o.l), []);
    }),
    livescript: createLanguageAsyncLoader("livescript", function () {
      return __vitePreload(() => import("./livescript-0bf40c2a.js").then((o) => o.l), []);
    }),
    lolcode: createLanguageAsyncLoader("lolcode", function () {
      return __vitePreload(() => import("./lolcode-a14513d3.js").then((o) => o.l), []);
    }),
    lua: createLanguageAsyncLoader("lua", function () {
      return __vitePreload(() => import("./lua-e0962efb.js").then((o) => o.l), []);
    }),
    makefile: createLanguageAsyncLoader("makefile", function () {
      return __vitePreload(() => import("./makefile-13c2302b.js").then((o) => o.m), []);
    }),
    markdown: createLanguageAsyncLoader("markdown", function () {
      return __vitePreload(() => import("./markdown-5a5fdaac.js").then((o) => o.m), []);
    }),
    markupTemplating: createLanguageAsyncLoader("markupTemplating", function () {
      return __vitePreload(
        () => import("./markup-templating-53ba7a27.js").then((o) => o.m),
        ["assets/markup-templating-53ba7a27.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    markup: createLanguageAsyncLoader("markup", function () {
      return __vitePreload(() => import("./markup-9a6ccc8c.js").then((o) => o.m), []);
    }),
    matlab: createLanguageAsyncLoader("matlab", function () {
      return __vitePreload(() => import("./matlab-3c789b59.js").then((o) => o.m), []);
    }),
    mel: createLanguageAsyncLoader("mel", function () {
      return __vitePreload(() => import("./mel-ac769918.js").then((o) => o.m), []);
    }),
    mizar: createLanguageAsyncLoader("mizar", function () {
      return __vitePreload(() => import("./mizar-fef5e64b.js").then((o) => o.m), []);
    }),
    monkey: createLanguageAsyncLoader("monkey", function () {
      return __vitePreload(() => import("./monkey-95910ea0.js").then((o) => o.m), []);
    }),
    n4js: createLanguageAsyncLoader("n4js", function () {
      return __vitePreload(() => import("./n4js-c1b6f3ff.js").then((o) => o.n), []);
    }),
    nasm: createLanguageAsyncLoader("nasm", function () {
      return __vitePreload(() => import("./nasm-e611c1c6.js").then((o) => o.n), []);
    }),
    nginx: createLanguageAsyncLoader("nginx", function () {
      return __vitePreload(() => import("./nginx-c00a17cc.js").then((o) => o.n), []);
    }),
    nim: createLanguageAsyncLoader("nim", function () {
      return __vitePreload(() => import("./nim-d8127320.js").then((o) => o.n), []);
    }),
    nix: createLanguageAsyncLoader("nix", function () {
      return __vitePreload(() => import("./nix-0002b96d.js").then((o) => o.n), []);
    }),
    nsis: createLanguageAsyncLoader("nsis", function () {
      return __vitePreload(() => import("./nsis-12d7b53c.js").then((o) => o.n), []);
    }),
    objectivec: createLanguageAsyncLoader("objectivec", function () {
      return __vitePreload(
        () => import("./objectivec-ddfe6b06.js").then((o) => o.o),
        ["assets/objectivec-ddfe6b06.js", "assets/c-38458e21.js"]
      );
    }),
    ocaml: createLanguageAsyncLoader("ocaml", function () {
      return __vitePreload(() => import("./ocaml-2ead9f79.js").then((o) => o.o), []);
    }),
    opencl: createLanguageAsyncLoader("opencl", function () {
      return __vitePreload(
        () => import("./opencl-960dac16.js").then((o) => o.o),
        ["assets/opencl-960dac16.js", "assets/c-38458e21.js", "assets/cpp-27fcf2a3.js"]
      );
    }),
    oz: createLanguageAsyncLoader("oz", function () {
      return __vitePreload(() => import("./oz-2c9fc2ad.js").then((o) => o.o), []);
    }),
    parigp: createLanguageAsyncLoader("parigp", function () {
      return __vitePreload(() => import("./parigp-2f417e33.js").then((o) => o.p), []);
    }),
    parser: createLanguageAsyncLoader("parser", function () {
      return __vitePreload(() => import("./parser-67b30e20.js").then((o) => o.p), []);
    }),
    pascal: createLanguageAsyncLoader("pascal", function () {
      return __vitePreload(() => import("./pascal-43498c9c.js").then((o) => o.p), []);
    }),
    perl: createLanguageAsyncLoader("perl", function () {
      return __vitePreload(() => import("./perl-38fecf83.js").then((o) => o.p), []);
    }),
    phpExtras: createLanguageAsyncLoader("phpExtras", function () {
      return __vitePreload(
        () => import("./php-extras-a73ecc34.js").then((o) => o.p),
        ["assets/php-extras-a73ecc34.js", "assets/php-258ea722.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    php: createLanguageAsyncLoader("php", function () {
      return __vitePreload(
        () => import("./php-f106ac03.js").then((o) => o.p),
        ["assets/php-f106ac03.js", "assets/php-258ea722.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    plsql: createLanguageAsyncLoader("plsql", function () {
      return __vitePreload(
        () => import("./plsql-b0840a4b.js").then((o) => o.p),
        ["assets/plsql-b0840a4b.js", "assets/sql-8bae50a2.js"]
      );
    }),
    powershell: createLanguageAsyncLoader("powershell", function () {
      return __vitePreload(() => import("./powershell-6e893089.js").then((o) => o.p), []);
    }),
    processing: createLanguageAsyncLoader("processing", function () {
      return __vitePreload(() => import("./processing-7665a496.js").then((o) => o.p), []);
    }),
    prolog: createLanguageAsyncLoader("prolog", function () {
      return __vitePreload(() => import("./prolog-30c25ca6.js").then((o) => o.p), []);
    }),
    properties: createLanguageAsyncLoader("properties", function () {
      return __vitePreload(() => import("./properties-0ac5ab68.js").then((o) => o.p), []);
    }),
    protobuf: createLanguageAsyncLoader("protobuf", function () {
      return __vitePreload(() => import("./protobuf-24329174.js").then((o) => o.p), []);
    }),
    pug: createLanguageAsyncLoader("pug", function () {
      return __vitePreload(() => import("./pug-a104fab0.js").then((o) => o.p), []);
    }),
    puppet: createLanguageAsyncLoader("puppet", function () {
      return __vitePreload(() => import("./puppet-34cf15f2.js").then((o) => o.p), []);
    }),
    pure: createLanguageAsyncLoader("pure", function () {
      return __vitePreload(
        () => import("./pure-30185d28.js").then((o) => o.p),
        ["assets/pure-30185d28.js", "assets/c-38458e21.js"]
      );
    }),
    python: createLanguageAsyncLoader("python", function () {
      return __vitePreload(() => import("./python-5b5339e1.js").then((o) => o.p), []);
    }),
    q: createLanguageAsyncLoader("q", function () {
      return __vitePreload(() => import("./q-ec90f82b.js").then((o) => o.q), []);
    }),
    qore: createLanguageAsyncLoader("qore", function () {
      return __vitePreload(() => import("./qore-3c01b535.js").then((o) => o.q), []);
    }),
    r: createLanguageAsyncLoader("r", function () {
      return __vitePreload(() => import("./r-301a3780.js").then((o) => o.r), []);
    }),
    reason: createLanguageAsyncLoader("reason", function () {
      return __vitePreload(() => import("./reason-212b6ef8.js").then((o) => o.r), []);
    }),
    renpy: createLanguageAsyncLoader("renpy", function () {
      return __vitePreload(() => import("./renpy-d888b581.js").then((o) => o.r), []);
    }),
    rest: createLanguageAsyncLoader("rest", function () {
      return __vitePreload(() => import("./rest-9d0e1cfb.js").then((o) => o.r), []);
    }),
    rip: createLanguageAsyncLoader("rip", function () {
      return __vitePreload(() => import("./rip-0bd9c81b.js").then((o) => o.r), []);
    }),
    roboconf: createLanguageAsyncLoader("roboconf", function () {
      return __vitePreload(() => import("./roboconf-2bed342c.js").then((o) => o.r), []);
    }),
    ruby: createLanguageAsyncLoader("ruby", function () {
      return __vitePreload(
        () => import("./ruby-202541a1.js").then((o) => o.r),
        ["assets/ruby-202541a1.js", "assets/ruby-89b11700.js"]
      );
    }),
    rust: createLanguageAsyncLoader("rust", function () {
      return __vitePreload(() => import("./rust-82bf02c3.js").then((o) => o.r), []);
    }),
    sas: createLanguageAsyncLoader("sas", function () {
      return __vitePreload(() => import("./sas-0da55176.js").then((o) => o.s), []);
    }),
    sass: createLanguageAsyncLoader("sass", function () {
      return __vitePreload(() => import("./sass-884809ba.js").then((o) => o.s), []);
    }),
    scala: createLanguageAsyncLoader("scala", function () {
      return __vitePreload(
        () => import("./scala-49fe5d27.js").then((o) => o.s),
        ["assets/scala-49fe5d27.js", "assets/java-31e93124.js"]
      );
    }),
    scheme: createLanguageAsyncLoader("scheme", function () {
      return __vitePreload(() => import("./scheme-8735c6fd.js").then((o) => o.s), []);
    }),
    scss: createLanguageAsyncLoader("scss", function () {
      return __vitePreload(() => import("./scss-69b611c7.js").then((o) => o.s), []);
    }),
    smalltalk: createLanguageAsyncLoader("smalltalk", function () {
      return __vitePreload(() => import("./smalltalk-1a2025d6.js").then((o) => o.s), []);
    }),
    smarty: createLanguageAsyncLoader("smarty", function () {
      return __vitePreload(
        () => import("./smarty-0b245648.js").then((o) => o.s),
        ["assets/smarty-0b245648.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    soy: createLanguageAsyncLoader("soy", function () {
      return __vitePreload(
        () => import("./soy-15427504.js").then((o) => o.s),
        ["assets/soy-15427504.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    sql: createLanguageAsyncLoader("sql", function () {
      return __vitePreload(
        () => import("./sql-5ff3c84c.js").then((o) => o.s),
        ["assets/sql-5ff3c84c.js", "assets/sql-8bae50a2.js"]
      );
    }),
    stylus: createLanguageAsyncLoader("stylus", function () {
      return __vitePreload(() => import("./stylus-b5fa7dc1.js").then((o) => o.s), []);
    }),
    swift: createLanguageAsyncLoader("swift", function () {
      return __vitePreload(() => import("./swift-53ba3c35.js").then((o) => o.s), []);
    }),
    tap: createLanguageAsyncLoader("tap", function () {
      return __vitePreload(() => import("./tap-0d839145.js").then((o) => o.t), []);
    }),
    tcl: createLanguageAsyncLoader("tcl", function () {
      return __vitePreload(() => import("./tcl-53966894.js").then((o) => o.t), []);
    }),
    textile: createLanguageAsyncLoader("textile", function () {
      return __vitePreload(() => import("./textile-c36ca3bf.js").then((o) => o.t), []);
    }),
    tsx: createLanguageAsyncLoader("tsx", function () {
      return __vitePreload(
        () => import("./tsx-acef1b20.js").then((o) => o.t),
        ["assets/tsx-acef1b20.js", "assets/jsx-85f6d975.js", "assets/typescript-5218b969.js"]
      );
    }),
    tt2: createLanguageAsyncLoader("tt2", function () {
      return __vitePreload(
        () => import("./tt2-67fd1d3c.js").then((o) => o.t),
        ["assets/tt2-67fd1d3c.js", "assets/markup-templating-793f47eb.js"]
      );
    }),
    twig: createLanguageAsyncLoader("twig", function () {
      return __vitePreload(() => import("./twig-f5a59997.js").then((o) => o.t), []);
    }),
    typescript: createLanguageAsyncLoader("typescript", function () {
      return __vitePreload(
        () => import("./typescript-ec691a62.js").then((o) => o.t),
        ["assets/typescript-ec691a62.js", "assets/typescript-5218b969.js"]
      );
    }),
    vbnet: createLanguageAsyncLoader("vbnet", function () {
      return __vitePreload(
        () => import("./vbnet-b33aa0b0.js").then((o) => o.v),
        ["assets/vbnet-b33aa0b0.js", "assets/basic-c7adc4bb.js"]
      );
    }),
    velocity: createLanguageAsyncLoader("velocity", function () {
      return __vitePreload(() => import("./velocity-e08537a7.js").then((o) => o.v), []);
    }),
    verilog: createLanguageAsyncLoader("verilog", function () {
      return __vitePreload(() => import("./verilog-7fdb6e33.js").then((o) => o.v), []);
    }),
    vhdl: createLanguageAsyncLoader("vhdl", function () {
      return __vitePreload(() => import("./vhdl-8f284c4a.js").then((o) => o.v), []);
    }),
    vim: createLanguageAsyncLoader("vim", function () {
      return __vitePreload(() => import("./vim-da5e8f79.js").then((o) => o.v), []);
    }),
    visualBasic: createLanguageAsyncLoader("visualBasic", function () {
      return __vitePreload(() => import("./visual-basic-5b909a69.js").then((o) => o.v), []);
    }),
    wasm: createLanguageAsyncLoader("wasm", function () {
      return __vitePreload(() => import("./wasm-905c9d55.js").then((o) => o.w), []);
    }),
    wiki: createLanguageAsyncLoader("wiki", function () {
      return __vitePreload(() => import("./wiki-e5877a9b.js").then((o) => o.w), []);
    }),
    xeora: createLanguageAsyncLoader("xeora", function () {
      return __vitePreload(() => import("./xeora-8c032f8c.js").then((o) => o.x), []);
    }),
    xojo: createLanguageAsyncLoader("xojo", function () {
      return __vitePreload(() => import("./xojo-417b8045.js").then((o) => o.x), []);
    }),
    xquery: createLanguageAsyncLoader("xquery", function () {
      return __vitePreload(() => import("./xquery-ad4f6740.js").then((o) => o.x), []);
    }),
    yaml: createLanguageAsyncLoader("yaml", function () {
      return __vitePreload(() => import("./yaml-7fcbb9fe.js").then((o) => o.y), []);
    }),
  },
  PrismAsyncLight = createAsyncLoadingHighlighter({
    loader: function o() {
      return __vitePreload(
        () => import("./core-277948c8.js").then((i) => i.c),
        [
          "assets/core-277948c8.js",
          "assets/markup-9a6ccc8c.js",
          "assets/css-b87affbb.js",
          "assets/clike-e18fd25b.js",
          "assets/javascript-79c2f953.js",
        ]
      ).then(function (i) {
        return i.default || i;
      });
    },
    isLanguageRegistered: function o(i, a) {
      return i.registered(a);
    },
    languageLoaders,
    registerLanguage: function o(i, a, s) {
      return i.register(s);
    },
  });
function _extends() {
  return (
    (_extends =
      Object.assign ||
      function (o) {
        for (var i = 1; i < arguments.length; i++) {
          var a = arguments[i];
          for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
        }
        return o;
      }),
    _extends.apply(this, arguments)
  );
}
function _inheritsLoose(o, i) {
  (o.prototype = Object.create(i.prototype)), (o.prototype.constructor = o), (o.__proto__ = i);
}
function _objectWithoutPropertiesLoose(o, i) {
  if (o == null) return {};
  var a = {},
    s = Object.keys(o),
    et,
    tt;
  for (tt = 0; tt < s.length; tt++) (et = s[tt]), !(i.indexOf(et) >= 0) && (a[et] = o[et]);
  return a;
}
function _taggedTemplateLiteralLoose(o, i) {
  return i || (i = o.slice(0)), (o.raw = i), o;
}
var DEFAULT_THEME_MODE = "light";
function getTheme(o) {
  return _extends({ mode: DEFAULT_THEME_MODE }, o == null ? void 0 : o.theme);
}
function themed(o) {
  var i = o;
  return function (a) {
    var s = getTheme(a);
    return i[s.mode];
  };
}
var defaultColors = function o(i) {
    var a = { theme: i };
    return {
      lineNumberColor: themed({ light: "#383a42", dark: "#abb2bf" })(a),
      lineNumberBgColor: themed({ light: "#fafafa", dark: "#282c34" })(a),
      backgroundColor: themed({ light: "#fafafa", dark: "#282c34" })(a),
      textColor: themed({ light: "#383a42", dark: "#abb2bf" })(a),
      substringColor: themed({ light: "#e45649", dark: "#e06c75" })(a),
      keywordColor: themed({ light: "#a626a4", dark: "#c678dd" })(a),
      attributeColor: themed({ light: "#50a14f", dark: "#98c379" })(a),
      selectorAttributeColor: themed({ light: "#e45649", dark: "#e06c75" })(a),
      docTagColor: themed({ light: "#a626a4", dark: "#c678dd" })(a),
      nameColor: themed({ light: "#e45649", dark: "#e06c75" })(a),
      builtInColor: themed({ light: "#c18401", dark: "#e6c07b" })(a),
      literalColor: themed({ light: "#0184bb", dark: "#56b6c2" })(a),
      bulletColor: themed({ light: "#4078f2", dark: "#61aeee" })(a),
      codeColor: themed({ light: "#383a42", dark: "#abb2bf" })(a),
      additionColor: themed({ light: "#50a14f", dark: "#98c379" })(a),
      regexpColor: themed({ light: "#50a14f", dark: "#98c379" })(a),
      symbolColor: themed({ light: "#4078f2", dark: "#61aeee" })(a),
      variableColor: themed({ light: "#986801", dark: "#d19a66" })(a),
      templateVariableColor: themed({ light: "#986801", dark: "#d19a66" })(a),
      linkColor: themed({ light: "#4078f2", dark: "#61aeee" })(a),
      selectorClassColor: themed({ light: "#986801", dark: "#d19a66" })(a),
      typeColor: themed({ light: "#986801", dark: "#d19a66" })(a),
      stringColor: themed({ light: "#50a14f", dark: "#98c379" })(a),
      selectorIdColor: themed({ light: "#4078f2", dark: "#61aeee" })(a),
      quoteColor: themed({ light: "#a0a1a7", dark: "#5c6370" })(a),
      templateTagColor: themed({ light: "#383a42", dark: "#abb2bf" })(a),
      deletionColor: themed({ light: "#e45649", dark: "#e06c75" })(a),
      titleColor: themed({ light: "#4078f2", dark: "#61aeee" })(a),
      sectionColor: themed({ light: "#e45649", dark: "#e06c75" })(a),
      commentColor: themed({ light: "#a0a1a7", dark: "#5c6370" })(a),
      metaKeywordColor: themed({ light: "#383a42", dark: "#abb2bf" })(a),
      metaColor: themed({ light: "#4078f2", dark: "#61aeee" })(a),
      functionColor: themed({ light: "#383a42", dark: "#abb2bf" })(a),
      numberColor: themed({ light: "#986801", dark: "#d19a66" })(a),
    };
  },
  codeFontFamily = "inherit",
  fontSize = "inherit",
  codeContainerStyle = { fontSize, fontFamily: codeFontFamily, lineHeight: 20 / 12, padding: 8 },
  lineNumberContainerStyle = function o(i) {
    return {
      fontSize,
      lineHeight: 20 / 14,
      color: i.lineNumberColor,
      backgroundColor: i.lineNumberBgColor,
      flexShrink: 0,
      padding: 8,
      textAlign: "right",
      userSelect: "none",
    };
  },
  sharedCodeStyle = function o(i) {
    return {
      key: { color: i.keywordColor, fontWeight: "bolder" },
      keyword: { color: i.keywordColor, fontWeight: "bolder" },
      "attr-name": { color: i.attributeColor },
      selector: { color: i.selectorTagColor },
      comment: { color: i.commentColor, fontFamily: codeFontFamily, fontStyle: "italic" },
      "block-comment": { color: i.commentColor, fontFamily: codeFontFamily, fontStyle: "italic" },
      "function-name": { color: i.sectionColor },
      "class-name": { color: i.sectionColor },
      doctype: { color: i.docTagColor },
      substr: { color: i.substringColor },
      namespace: { color: i.nameColor },
      builtin: { color: i.builtInColor },
      entity: { color: i.literalColor },
      bullet: { color: i.bulletColor },
      code: { color: i.codeColor },
      addition: { color: i.additionColor },
      regex: { color: i.regexpColor },
      symbol: { color: i.symbolColor },
      variable: { color: i.variableColor },
      url: { color: i.linkColor },
      "selector-attr": { color: i.selectorAttributeColor },
      "selector-pseudo": { color: i.selectorPseudoColor },
      type: { color: i.typeColor },
      string: { color: i.stringColor },
      quote: { color: i.quoteColor },
      tag: { color: i.templateTagColor },
      deletion: { color: i.deletionColor },
      title: { color: i.titleColor },
      section: { color: i.sectionColor },
      "meta-keyword": { color: i.metaKeywordColor },
      meta: { color: i.metaColor },
      italic: { fontStyle: "italic" },
      bold: { fontWeight: "bolder" },
      function: { color: i.functionColor },
      number: { color: i.numberColor },
    };
  },
  codeStyle = function o(i) {
    return {
      fontSize,
      fontFamily: codeFontFamily,
      background: i.backgroundColor,
      color: i.textColor,
      borderRadius: 3,
      display: "flex",
      lineHeight: 20 / 14,
      overflowX: "auto",
      whiteSpace: "pre",
    };
  },
  codeBlockStyle = function o(i) {
    return _extends({ 'pre[class*="language-"]': codeStyle(i) }, sharedCodeStyle(i));
  },
  inlineCodeStyle = function o(i) {
    return _extends(
      {
        'pre[class*="language-"]': _extends({}, codeStyle(i), {
          padding: "2px 4px",
          display: "inline",
          whiteSpace: "pre-wrap",
        }),
      },
      sharedCodeStyle(i)
    );
  };
function applyTheme(o) {
  o === void 0 && (o = { mode: "light" });
  var i = _extends({}, defaultColors(o), o);
  return {
    lineNumberContainerStyle: lineNumberContainerStyle(i),
    codeBlockStyle: codeBlockStyle(i),
    inlineCodeStyle: inlineCodeStyle(i),
    codeContainerStyle,
  };
}
var SUPPORTED_LANGUAGE_ALIASES = Object.freeze([
    { name: "PHP", alias: ["php", "php3", "php4", "php5"], value: "php" },
    { name: "Java", alias: ["java"], value: "java" },
    { name: "CSharp", alias: ["csharp", "c#"], value: "cs" },
    { name: "Python", alias: ["python", "py"], value: "python" },
    { name: "JavaScript", alias: ["javascript", "js"], value: "javascript" },
    { name: "XML", alias: ["xml"], value: "xml" },
    { name: "HTML", alias: ["html", "htm"], value: "markup" },
    { name: "C++", alias: ["c++", "cpp", "clike"], value: "cpp" },
    { name: "Ruby", alias: ["ruby", "rb", "duby"], value: "ruby" },
    { name: "Objective-C", alias: ["objective-c", "objectivec", "obj-c", "objc"], value: "objectivec" },
    { name: "C", alias: ["c"], value: "cpp" },
    { name: "Swift", alias: ["swift"], value: "swift" },
    { name: "TeX", alias: ["tex", "latex"], value: "tex" },
    { name: "Shell", alias: ["shell", "sh", "ksh", "zsh"], value: "bash" },
    { name: "Scala", alias: ["scala"], value: "scala" },
    { name: "Go", alias: ["go"], value: "go" },
    { name: "ActionScript", alias: ["actionscript", "actionscript3", "as"], value: "actionscript" },
    { name: "ColdFusion", alias: ["coldfusion"], value: "xml" },
    { name: "JavaFX", alias: ["javafx", "jfx"], value: "java" },
    { name: "VbNet", alias: ["vbnet", "vb.net"], value: "vbnet" },
    { name: "JSON", alias: ["json"], value: "json" },
    { name: "MATLAB", alias: ["matlab"], value: "matlab" },
    { name: "Groovy", alias: ["groovy"], value: "groovy" },
    {
      name: "SQL",
      alias: [
        "sql",
        "postgresql",
        "postgres",
        "plpgsql",
        "psql",
        "postgresql-console",
        "postgres-console",
        "tsql",
        "t-sql",
        "mysql",
        "sqlite",
      ],
      value: "sql",
    },
    { name: "R", alias: ["r"], value: "r" },
    { name: "Perl", alias: ["perl", "pl"], value: "perl" },
    { name: "Lua", alias: ["lua"], value: "lua" },
    { name: "Delphi", alias: ["delphi", "pas", "pascal", "objectpascal"], value: "delphi" },
    { name: "XML", alias: ["xml"], value: "xml" },
    { name: "TypeScript", alias: ["typescript", "ts", "tsx"], value: "typescript" },
    { name: "CoffeeScript", alias: ["coffeescript", "coffee-script", "coffee"], value: "coffeescript" },
    { name: "Haskell", alias: ["haskell", "hs"], value: "haskell" },
    { name: "Puppet", alias: ["puppet"], value: "puppet" },
    { name: "Arduino", alias: ["arduino"], value: "arduino" },
    { name: "Fortran", alias: ["fortran"], value: "fortran" },
    { name: "Erlang", alias: ["erlang", "erl"], value: "erlang" },
    { name: "PowerShell", alias: ["powershell", "posh", "ps1", "psm1"], value: "powershell" },
    { name: "Haxe", alias: ["haxe", "hx", "hxsl"], value: "haxe" },
    { name: "Elixir", alias: ["elixir", "ex", "exs"], value: "elixir" },
    { name: "Verilog", alias: ["verilog", "v"], value: "verilog" },
    { name: "Rust", alias: ["rust"], value: "rust" },
    { name: "VHDL", alias: ["vhdl"], value: "vhdl" },
    { name: "Sass", alias: ["sass"], value: "less" },
    { name: "OCaml", alias: ["ocaml"], value: "ocaml" },
    { name: "Dart", alias: ["dart"], value: "dart" },
    { name: "CSS", alias: ["css"], value: "css" },
    { name: "reStructuredText", alias: ["restructuredtext", "rst", "rest"], value: "rest" },
    { name: "ObjectPascal", alias: ["objectpascal"], value: "delphi" },
    { name: "Kotlin", alias: ["kotlin"], value: "kotlin" },
    { name: "D", alias: ["d"], value: "d" },
    { name: "Octave", alias: ["octave"], value: "matlab" },
    { name: "QML", alias: ["qbs", "qml"], value: "qml" },
    { name: "Prolog", alias: ["prolog"], value: "prolog" },
    { name: "FoxPro", alias: ["foxpro", "vfp", "clipper", "xbase"], value: "vbnet" },
    { name: "Scheme", alias: ["scheme", "scm"], value: "scheme" },
    { name: "CUDA", alias: ["cuda", "cu"], value: "cpp" },
    { name: "Julia", alias: ["julia", "jl"], value: "julia" },
    { name: "Racket", alias: ["racket", "rkt"], value: "lisp" },
    { name: "Ada", alias: ["ada", "ada95", "ada2005"], value: "ada" },
    { name: "Tcl", alias: ["tcl"], value: "tcl" },
    { name: "Mathematica", alias: ["mathematica", "mma", "nb"], value: "mathematica" },
    { name: "Autoit", alias: ["autoit"], value: "autoit" },
    { name: "StandardML", alias: ["standardmL", "sml", "standardml"], value: "sml" },
    { name: "Objective-J", alias: ["objective-j", "objectivej", "obj-j", "objj"], value: "objectivec" },
    { name: "Smalltalk", alias: ["smalltalk", "squeak", "st"], value: "smalltalk" },
    { name: "Vala", alias: ["vala", "vapi"], value: "vala" },
    { name: "ABAP", alias: ["abap"], value: "sql" },
    { name: "LiveScript", alias: ["livescript", "live-script"], value: "livescript" },
    { name: "XQuery", alias: ["xquery", "xqy", "xq", "xql", "xqm"], value: "xquery" },
    { name: "PlainText", alias: ["text", "plaintext"], value: "text" },
    { name: "Yaml", alias: ["yaml", "yml"], value: "yaml" },
    { name: "GraphQL", alias: ["graphql", "gql"], value: "graphql" },
  ]),
  normalizeLanguage = function o(i) {
    if (!i) return "";
    var a = SUPPORTED_LANGUAGE_ALIASES.find(function (s) {
      return s.name === i || s.alias.includes(i);
    });
    return a ? a.value : i || "text";
  },
  Code = (function (o) {
    _inheritsLoose(i, o);
    function i() {
      var s;
      return (s = o.apply(this, arguments) || this), (s._isMounted = !1), s;
    }
    var a = i.prototype;
    return (
      (a.componentDidMount = function () {
        this._isMounted = !0;
      }),
      (a.componentWillUnmount = function () {
        this._isMounted = !1;
      }),
      (a.getLineOpacity = function (et) {
        if (!this.props.highlight) return 1;
        var tt = this.props.highlight
          .split(",")
          .map(function (rt) {
            if (rt.indexOf("-") > 0) {
              var nt = rt.split("-").map(Number).sort(),
                ot = nt[0],
                it = nt[1];
              return Array(it + 1)
                .fill(void 0)
                .map(function (ct, st) {
                  return st;
                })
                .slice(ot, it + 1);
            }
            return Number(rt);
          })
          .reduce(function (rt, nt) {
            return rt.concat(nt);
          }, []);
        return tt.length === 0 || tt.includes(et) ? 1 : 0.3;
      }),
      (a.render = function () {
        var et = this,
          tt = applyTheme(this.props.theme),
          rt = tt.inlineCodeStyle,
          nt = normalizeLanguage(this.props.language),
          ot = {
            language: nt,
            PreTag: this.props.preTag,
            style: this.props.codeStyle || rt,
            showLineNumbers: this.props.showLineNumbers,
            startingLineNumber: this.props.startingLineNumber,
            codeTagProps: this.props.codeTagProps,
          };
        return React.createElement(
          PrismAsyncLight,
          Object.assign({}, ot, {
            wrapLines: this.props.highlight.length > 0,
            customStyle: this.props.customStyle,
            lineProps: function (ct) {
              return { style: _extends({ opacity: et.getLineOpacity(ct) }, et.props.lineNumberContainerStyle) };
            },
          }),
          this.props.text
        );
      }),
      i
    );
  })(reactExports.PureComponent);
Code.defaultProps = {
  theme: {},
  showLineNumbers: !1,
  startingLineNumber: 1,
  lineNumberContainerStyle: {},
  codeTagProps: {},
  preTag: "span",
  highlight: "",
  customStyle: {},
};
var LANGUAGE_FALLBACK = "text",
  CodeBlock = (function (o) {
    _inheritsLoose(i, o);
    function i() {
      var s;
      return (
        (s = o.apply(this, arguments) || this),
        (s._isMounted = !1),
        (s.handleCopy = function (et) {
          var tt = et.nativeEvent.clipboardData;
          if (tt) {
            et.preventDefault();
            var rt = window.getSelection();
            if (rt === null) return;
            var nt = rt.toString(),
              ot = "<!doctype html><html><head></head><body><pre>" + nt + "</pre></body></html>";
            tt.clearData(), tt.setData("text/html", ot), tt.setData("text/plain", nt);
          }
        }),
        s
      );
    }
    var a = i.prototype;
    return (
      (a.componentDidMount = function () {
        this._isMounted = !0;
      }),
      (a.componentWillUnmount = function () {
        this._isMounted = !1;
      }),
      (a.render = function () {
        var et,
          tt,
          rt,
          nt,
          ot = applyTheme(this.props.theme),
          it = ot.lineNumberContainerStyle,
          ct = ot.codeBlockStyle,
          st = ot.codeContainerStyle,
          ft = {
            language: this.props.language || LANGUAGE_FALLBACK,
            codeStyle: _extends({}, ct, (et = this.props) === null || et === void 0 ? void 0 : et.codeBlockStyle),
            customStyle: (tt = this.props) === null || tt === void 0 ? void 0 : tt.customStyle,
            showLineNumbers: this.props.showLineNumbers,
            startingLineNumber: this.props.startingLineNumber,
            codeTagProps: {
              style: _extends({}, st, (rt = this.props) === null || rt === void 0 ? void 0 : rt.codeContainerStyle),
            },
            lineNumberContainerStyle: _extends(
              {},
              it,
              (nt = this.props) === null || nt === void 0 ? void 0 : nt.lineNumberContainerStyle
            ),
            text: this.props.text.toString(),
            highlight: this.props.highlight,
          };
        return React.createElement(Code, Object.assign({}, ft));
      }),
      i
    );
  })(reactExports.PureComponent);
CodeBlock.displayName = "CodeBlock";
CodeBlock.defaultProps = {
  showLineNumbers: !0,
  startingLineNumber: 1,
  language: LANGUAGE_FALLBACK,
  theme: {},
  highlight: "",
  lineNumberContainerStyle: {},
  customStyle: {},
  codeBlockStyle: {},
};
var ClipboardListIcon = function o(i) {
  var a = i.size,
    s = i.color,
    et = _objectWithoutPropertiesLoose(i, ["size", "color"]);
  return React.createElement(
    "svg",
    Object.assign({}, et, { viewBox: "0 0 384 512", width: a, height: a, fill: s }),
    React.createElement("path", {
      d: "M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z",
    })
  );
};
ClipboardListIcon.displayName = "ClipboardListIcon";
ClipboardListIcon.defaultProps = { size: "16pt", color: "currentcolor" };
var ClipboardCheckIcon = function o(i) {
  var a = i.size,
    s = i.color,
    et = _objectWithoutPropertiesLoose(i, ["size", "color"]);
  return React.createElement(
    "svg",
    Object.assign({}, et, { viewBox: "0 0 384 512", width: a, height: a, fill: s }),
    React.createElement("path", {
      d: "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z",
    })
  );
};
ClipboardCheckIcon.displayName = "ClipboardCheckIcon";
ClipboardCheckIcon.defaultProps = { size: "16pt", color: "currentcolor" };
function Copy(o) {
  var i = o.size,
    a = o.color,
    s = o.copied,
    et = _objectWithoutPropertiesLoose(o, ["size", "color", "copied"]);
  return s
    ? React.createElement(ClipboardCheckIcon, Object.assign({}, { color: a, size: i }, et))
    : React.createElement(ClipboardListIcon, Object.assign({}, { color: a, size: i }, et));
}
var isBrowser = function o() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  },
  useSSR = function o() {
    var i = reactExports.useState(!1),
      a = i[0],
      s = i[1];
    return (
      reactExports.useEffect(function () {
        s(isBrowser());
      }, []),
      { isBrowser: a, isServer: !a }
    );
  },
  getId = function o() {
    return Math.random().toString(32).slice(2, 10);
  },
  createElement = function o(i) {
    var a = document.createElement("div");
    return a.setAttribute("id", i), a;
  },
  usePortal = function o(i) {
    i === void 0 && (i = getId());
    var a = "zeit-ui-" + i,
      s = useSSR(),
      et = s.isBrowser,
      tt = reactExports.useState(et ? createElement(a) : null),
      rt = tt[0],
      nt = tt[1];
    return (
      reactExports.useEffect(function () {
        var ot = document.querySelector("#" + a),
          it = ot || createElement(a);
        ot || document.body.appendChild(it), nt(it);
      }, []),
      rt
    );
  },
  warningStack = {},
  useWarning = function o(i, a) {
    var s = a ? " [" + a + "]" : " ",
      et = "[Zeit UI]" + s + ": " + i;
    typeof console > "u" || warningStack[et] || ((warningStack[et] = !0), console.warn(et));
  },
  defaultOptions = {
    onError: function o() {
      return useWarning("Failed to copy.", "use-clipboard");
    },
  },
  useClipboard = function o(i) {
    i === void 0 && (i = defaultOptions);
    var a = usePortal("clipboard"),
      s = function (rt, nt) {
        if (!(!rt || !nt)) {
          var ot = window.getSelection();
          if (ot) {
            (rt.style.whiteSpace = "pre"), (rt.textContent = nt);
            var it = window.document.createRange();
            ot.removeAllRanges(), it.selectNode(rt), ot.addRange(it);
            try {
              window.document.execCommand("copy");
            } catch {
              i.onError && i.onError();
            }
            ot.removeAllRanges(), rt && (rt.textContent = "");
          }
        }
      },
      et = reactExports.useCallback(
        function (tt) {
          s(a, tt);
        },
        [a]
      );
    return { copy: et };
  };
function _templateObject2() {
  var o = _taggedTemplateLiteralLoose([
    `
  position: relative;
  background: `,
    `;
  border-radius: 0.25rem;
  padding: `,
    `;
`,
  ]);
  return (
    (_templateObject2 = function () {
      return o;
    }),
    o
  );
}
function _templateObject() {
  var o = _taggedTemplateLiteralLoose([
    `
  position: absolute;
  top: 0.5em;
  right: 0.75em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: `,
    `;
  margin-top: 0.15rem;
  border-radius: 0.25rem;
  max-height: 2rem;
  max-width: 2rem;
  padding: 0.25rem;
  &:hover {
    opacity: `,
    `;
  }
  &:focus {
    outline: none;
    opacity: 1;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
`,
  ]);
  return (
    (_templateObject = function () {
      return o;
    }),
    o
  );
}
var Button = styled.button(
    _templateObject(),
    function (o) {
      return o.theme.backgroundColor;
    },
    function (o) {
      return o.copied ? 1 : 0.5;
    }
  ),
  Snippet = styled.div(
    _templateObject2(),
    function (o) {
      return o.theme.backgroundColor;
    },
    function (o) {
      return o.codeBlock ? "0.25rem 0.5rem 0.25rem 0.25rem" : "0.25rem";
    }
  );
function CopyBlock(o) {
  var i = o.theme,
    a = o.text,
    s = o.codeBlock,
    et = s === void 0 ? !1 : s,
    tt = o.customStyle,
    rt = tt === void 0 ? {} : tt,
    nt = o.onCopy,
    ot = _objectWithoutPropertiesLoose(o, ["theme", "text", "codeBlock", "customStyle", "onCopy"]),
    it = reactExports.useState(!1),
    ct = it[0],
    st = it[1],
    ft = useClipboard(),
    gt = ft.copy,
    pt = function () {
      gt(a), nt ? nt() : st(!ct);
    };
  return React.createElement(
    Snippet,
    Object.assign({}, { codeBlock: et }, { style: rt, theme: i }),
    et
      ? React.createElement(CodeBlock, Object.assign({ text: a, theme: i }, ot))
      : React.createElement(Code, Object.assign({ text: a, theme: i }, ot)),
    React.createElement(
      Button,
      Object.assign({ type: "button", onClick: pt }, { theme: i, copied: ct }),
      React.createElement(Copy, {
        color: ct ? i.stringColor : i.textColor,
        copied: ct,
        className: "icon",
        size: "16pt",
      })
    )
  );
}
var CopyBlockWithTheme = Xe(CopyBlock);
function ThemedCopyBlock(o) {
  return React.createElement(CopyBlockWithTheme, Object.assign({}, o));
}
var monoBlue = {
  lineNumberColor: "#00193a",
  lineNumberBgColor: "#eaeef3",
  backgroundColor: "#eaeef3",
  textColor: "#00193a",
  substringColor: "#4c81c9",
  keywordColor: void 0,
  attributeColor: "#4c81c9",
  selectorAttributeColor: void 0,
  docTagColor: void 0,
  nameColor: "#0048ab",
  builtInColor: "#0048ab",
  literalColor: "#0048ab",
  bulletColor: "#4c81c9",
  codeColor: "#00193a",
  additionColor: "#0048ab",
  regexpColor: "#4c81c9",
  symbolColor: "#4c81c9",
  variableColor: "#4c81c9",
  templateVariableColor: "#4c81c9",
  linkColor: "#4c81c9",
  selectorClassColor: "#0048ab",
  typeColor: "#0048ab",
  stringColor: "#0048ab",
  selectorIdColor: "#0048ab",
  quoteColor: "#0048ab",
  templateTagColor: "#00193a",
  deletionColor: "#4c81c9",
  titleColor: "#0048ab",
  sectionColor: "#0048ab",
  commentColor: "#738191",
  metaKeywordColor: "#00193a",
  metaColor: "#4c81c9",
  functionColor: "#00193a",
  numberColor: "#00193a",
};
const demoCode = `
import LinkParser from "react-link-parser";
import { Highlight } from "react-flatifycss";

export function App() {
    const watchers = [
        {
            type: "startsWith",
            watchFor: "#",
            render: (text) => (
                <a 
                    href={"/post?filterByTag=" + text} 
                    target="_blank" 
                    rel="noreferrer noopener nofollow">
                        <Highlight 
                            inline 
                            theme="orange-light" 
                            sx="margin-right: 4px">
                                {text}
                        </Highlight>
                </a>
            ),
        },
        {
            type: "endsWith",
            watchFor: "*",
            render: (text) => (
                <b style={{ color: "var(--flatify__color-red-primary)" }}>{text.replace("*", "")}</b>
            ),
        },
        {
            type: "startsWith",
            watchFor: "@",
            render: (text) => (
                <Highlight 
                    inline 
                    theme="success-light" 
                    sx="margin-right: 4px">
                        {text}
                </Highlight>
            ),
        },
        {
            watchFor: "link",
            render: (url: string) => (
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer noopener">
                        {url}
                </a>
            ),
        },
        {
            watchFor: "email",
            render: (url: string) => (
                <a 
                    href={"mailto:" + url} 
                    target="_blank" 
                    rel="noreferrer noopener">
                        {url.replace("@", "[at]")}
                </a>
            ),
        },
    ]

    return (
        <LinkParser watchers={watchers}>
            #Far_far_away, behind the word mountains, far from the countries @Vokalia and Consonantia, there live the blind texts. Separated they live in @Bookmarks right at the coast of the Semantics* a large language ocean. A small river named #Duden flows* by their place and supplies it with the necessary #regelialia. \\n Credit: \\n https://www.blindtextgenerator.com/lorem-ipsum \\n Contact Me: happy.cactus@mail.me
        </LinkParser>
    );
}
`,
  installCode = `
npm install react-link-parser

# or

yarn add react-link-parser`,
  simpleCode = `
import LinkParser from "react-link-parser";

export function App() {
  return (
    <LinkParser>
      I know you will forgive me for it. Were not my other associations so chosen by Fate as to make a heart like mine uneasy? Read more here: https://lorem.ipsum/book
    </LinkParser>
  );
}
`,
  customWatcherCode = `
{
    watchFor: 'anything',
    type: "startsWith" | "endsWith",
    render: (text) => ()
}
`;
class GitHubButton extends reactExports.PureComponent {
  constructor(i) {
    super(i), (this.$ = React.createRef()), (this._ = React.createRef());
  }
  render() {
    return React.createElement(
      "span",
      { ref: this.$ },
      React.createElement("a", { ...this.props, ref: this._ }, this.props.children)
    );
  }
  componentDidMount() {
    this.paint();
  }
  getSnapshotBeforeUpdate() {
    return this.reset(), null;
  }
  componentDidUpdate() {
    this.paint();
  }
  componentWillUnmount() {
    this.reset();
  }
  paint() {
    const i = this.$.current.appendChild(document.createElement("span"));
    __vitePreload(() => import("./buttons.esm-48f94bc9.js"), []).then(({ render: a }) => {
      this._.current != null &&
        a(i.appendChild(this._.current), function (s) {
          try {
            i.parentNode.replaceChild(s, i);
          } catch {}
        });
    });
  }
  reset() {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild);
  }
}
function Link() {
  return jsxRuntimeExports.jsxs("svg", {
    className: "link-icon",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 54.971 54.971",
    version: "1.1",
    viewBox: "0 0 54.971 54.971",
    xmlSpace: "preserve",
    children: [
      jsxRuntimeExports.jsx("path", {
        className: "anim-required",
        d: "M51.173 3.801c-5.068-5.068-13.315-5.066-18.384 0l-9.192 9.192a2 2 0 102.828 2.828l9.192-9.192a8.938 8.938 0 016.363-2.622c2.413 0 4.673.932 6.364 2.623s2.623 3.951 2.623 6.364a8.934 8.934 0 01-2.623 6.363L36.325 31.379c-3.51 3.508-9.219 3.508-12.729 0a2 2 0 10-2.828 2.828c2.534 2.534 5.863 3.801 9.192 3.801s6.658-1.267 9.192-3.801l12.021-12.021c2.447-2.446 3.795-5.711 3.795-9.192 0-3.482-1.348-6.746-3.795-9.193z",
      }),
      jsxRuntimeExports.jsx("path", {
        className: "anim-required anim-delay-250",
        d: "M27.132 40.57l-7.778 7.778a8.935 8.935 0 01-6.364 2.623 8.937 8.937 0 01-6.364-2.623c-3.509-3.509-3.509-9.219 0-12.728L17.94 24.306a8.938 8.938 0 016.364-2.622c2.412 0 4.672.932 6.363 2.622a2 2 0 102.828-2.828c-5.067-5.067-13.314-5.068-18.384 0L3.797 32.793C1.351 35.239.003 38.504.003 41.985c0 3.48 1.348 6.745 3.795 9.191a12.905 12.905 0 009.191 3.795c3.481 0 6.746-1.348 9.192-3.795l7.778-7.778a2 2 0 00-2.827-2.828zM34.003 44.007a2 2 0 00-2 2v6a2 2 0 004 0v-6a2 2 0 00-2-2zM41.175 42.593a2 2 0 10-2.828 2.828l4.242 4.242c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 000-2.828l-4.242-4.242zM45.968 36.007h-6a2 2 0 000 4h6a2 2 0 000-4zM18.003 13.007a2 2 0 002-2v-6a2 2 0 00-4 0v6a2 2 0 002 2zM10.589 14.421c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 000-2.828L9.175 7.35a2 2 0 10-2.828 2.828l4.242 4.243zM5.968 21.007h6a2 2 0 000-4h-6a2 2 0 000 4z",
      }),
    ],
  });
}
function App() {
  return jsxRuntimeExports.jsxs("main", {
    children: [
      jsxRuntimeExports.jsxs(Header, {
        children: [
          jsxRuntimeExports.jsxs(Container, {
            children: [
              jsxRuntimeExports.jsxs(Title, {
                children: [
                  "React ",
                  jsxRuntimeExports.jsx("br", {}),
                  "Link ",
                  jsxRuntimeExports.jsx("br", {}),
                  "Parser",
                ],
              }),
              jsxRuntimeExports.jsx(Subtitle, {
                children: "Effortlessly parse text into links, tags, mentions, emails, etc.",
              }),
              jsxRuntimeExports.jsxs(Compare, {
                children: [
                  jsxRuntimeExports.jsx(GitHubButton, {
                    href: "https://github.com/amir2mi/react-link-parser/fork",
                    "data-icon": "octicon-repo-forked",
                    "data-size": "large",
                    "aria-label": "Fork amir2mi/react-link-parser on GitHub",
                    children: "Fork",
                  }),
                  jsxRuntimeExports.jsx(GitHubButton, {
                    href: "https://github.com/amir2mi/react-link-parser",
                    "data-icon": "octicon-star",
                    "data-size": "large",
                    "data-show-count": "true",
                    "aria-label": "Star amir2mi/react-link-parser on GitHub",
                    children: "Star",
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsx(Link, {}),
        ],
      }),
      jsxRuntimeExports.jsxs(Container, {
        children: [
          jsxRuntimeExports.jsx(SectionTitle, { children: "Give the plain text. Get the content." }),
          jsxRuntimeExports.jsx(SectionSubtitle, {
            children: "Define watchers to pick up special parts of the text and render them the way you want.",
          }),
          jsxRuntimeExports.jsxs(Compare, {
            children: [
              jsxRuntimeExports.jsx("div", {
                className: "card",
                children: jsxRuntimeExports.jsx("p", {
                  children:
                    "#Far_far_away, behind the word mountains, far from the countries @Vokalia and Consonantia, there live the blind texts. Separated they live in @Bookmarks right at the coast of the Semantics* a large language ocean. A small river named #Duden flows* by their place and supplies it with the necessary #regelialia. \\n Credit: \\n https://www.blindtextgenerator.com/lorem-ipsum \\n Contact Me: happy.cactus@mail.me",
                }),
              }),
              jsxRuntimeExports.jsx(Arrow, {}),
              jsxRuntimeExports.jsx("div", {
                className: "card",
                children: jsxRuntimeExports.jsx("p", {
                  children: jsxRuntimeExports.jsx(LinkParser, {
                    watchers: [
                      {
                        type: "startsWith",
                        watchFor: "#",
                        render: (o) =>
                          jsxRuntimeExports.jsx("a", {
                            href: `/post?filterByTag=${o}`,
                            target: "_blank",
                            rel: "noreferrer noopener nofollow",
                            children: jsxRuntimeExports.jsx(Highlight, {
                              inline: !0,
                              theme: "orange-light",
                              sx: "margin-right: 4px",
                              children: o,
                            }),
                          }),
                      },
                      {
                        type: "endsWith",
                        watchFor: "*",
                        render: (o) =>
                          jsxRuntimeExports.jsx("b", {
                            style: { color: "var(--flatify__color-red-primary)" },
                            children: o.replace("*", ""),
                          }),
                      },
                      {
                        type: "startsWith",
                        watchFor: "@",
                        render: (o) =>
                          jsxRuntimeExports.jsx(Highlight, {
                            inline: !0,
                            theme: "success-light",
                            sx: "margin-right: 4px",
                            children: o,
                          }),
                      },
                      {
                        watchFor: "link",
                        render: (o) =>
                          jsxRuntimeExports.jsx("a", {
                            href: o,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: o,
                          }),
                      },
                      {
                        watchFor: "email",
                        render: (o) =>
                          jsxRuntimeExports.jsx("a", {
                            href: `mailto:${o}`,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: o.replace("@", "[at]"),
                          }),
                      },
                    ],
                    children:
                      "#Far_far_away, behind the word mountains, far from the countries @Vokalia and Consonantia, there live the blind texts. Separated they live in @Bookmarks right at the coast of the Semantics* a large language ocean. A small river named #Duden flows* by their place and supplies it with the necessary #regelialia. \\n Credit: \\n https://www.blindtextgenerator.com/lorem-ipsum \\n Contact Me: happy.cactus@mail.me",
                  }),
                }),
              }),
            ],
          }),
          jsxRuntimeExports.jsx(ThemedCopyBlock, {
            text: demoCode,
            language: "jsx",
            showLineNumbers: !1,
            wrapLines: !1,
            theme: monoBlue,
          }),
          jsxRuntimeExports.jsx(SectionTitle, { children: "Install" }),
          jsxRuntimeExports.jsx(SectionSubtitle, { children: "Use npm or yarn to install the package" }),
          jsxRuntimeExports.jsx(ThemedCopyBlock, {
            text: installCode,
            showLineNumbers: !1,
            wrapLines: !1,
            theme: monoBlue,
          }),
          jsxRuntimeExports.jsx(SectionTitle, { children: "Start with a simple example" }),
          jsxRuntimeExports.jsx(SectionSubtitle, {
            children: "By default the watcher will highlight links with anchor",
          }),
          jsxRuntimeExports.jsx(ThemedCopyBlock, {
            text: simpleCode,
            language: "jsx",
            showLineNumbers: !1,
            wrapLines: !1,
            theme: monoBlue,
          }),
          jsxRuntimeExports.jsx(SectionTitle, { children: "Define custom watcher" }),
          jsxRuntimeExports.jsx(SectionSubtitle, {
            children: "With a custom watcher, customize what and how you want to parse and render",
          }),
          jsxRuntimeExports.jsx(ThemedCopyBlock, {
            text: customWatcherCode,
            language: "js",
            showLineNumbers: !1,
            wrapLines: !1,
            theme: monoBlue,
          }),
          jsxRuntimeExports.jsxs("p", {
            children: [
              "The component accepts a list of watchers as an array with the prop named ",
              jsxRuntimeExports.jsx("code", { children: "watchers" }),
              ", a watcher looks for a string as part of the word to render it with the custom ",
              jsxRuntimeExports.jsx("code", { children: "render" }),
              " prop.",
            ],
          }),
          jsxRuntimeExports.jsx(SectionTitle, { children: "GitHub" }),
          jsxRuntimeExports.jsxs(SectionSubtitle, {
            children: [
              "If you liked the project and it was useful for your case, consider giving it a star in",
              " ",
              jsxRuntimeExports.jsx("a", { href: "https://github.com/amir2mi/react-link-parser/", children: "GitHub" }),
              ".",
            ],
          }),
        ],
      }),
    ],
  });
}
const Title = styled.h1`
    font-weight: 900;
    font-size: 4em !important;
    letter-spacing: -3px;
    line-height: 0.85;
    margin: 0;
    color: var(--flatify__txt-color-inverted);
  `,
  SectionTitle = styled.h3`
    font-weight: bold;
    font-size: 2.4em !important;
    margin: 1em 0 0;
    color: var(--flatify__color-accent-primary);
  `,
  SectionSubtitle = styled.p`
    line-height: 1.3;
    font-size: 1.36em !important;
    padding: 1em 0 1em;
    margin: 0;
  `,
  Subtitle = styled.p`
    line-height: 1.3;
    font-size: 1.36em !important;
    margin-top: 0.5em;
    color: var(--flatify__txt-color-inverted);
    opacity: 0.85;
  `,
  Header = styled.header`
    overflow: hidden;
    position: relative;
    padding: 3em 2em 2em;
    margin-bottom: 1em;
    background-color: var(--flatify__color-accent-primary);

    @media (max-width: 768px) {
      padding: 2em 0;
    }

    .link-icon {
      position: absolute;
      bottom: -5vw;
      right: -5vw;
      width: 35vw;
      height: 35vw;
      color: var(--flatify__txt-color-inverted);
      mix-blend-mode: soft-light;
      opacity: 0.5;
    }
  `,
  Container = styled.div`
    max-width: 860px;
    padding: 1em;
    margin: 0 auto;
  `,
  Compare = styled.div`
    display: flex;
    align-items: stretch;
    gap: 1em;
    margin: 1em 0;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      .arrow-icon {
        position: relative;
        z-index: 10;
        transform: rotate(45deg) scale(0.5);
      }
    }
  `,
  flatifyMin = "",
  index = "";
window.global || (window.global = window);
client
  .createRoot(document.getElementById("root"))
  .render(jsxRuntimeExports.jsx(React.StrictMode, { children: jsxRuntimeExports.jsx(App, {}) }));
export { commonjsGlobal as c, getDefaultExportFromCjs as g };
