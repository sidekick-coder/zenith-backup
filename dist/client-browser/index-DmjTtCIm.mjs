import "vue-router";
import { ref as Kh } from "vue";
import { useForm as Qh, isNotNestedPath as Zh, cleanupNonNestedPath as ed } from "vee-validate";
var Go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function rd(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Uo, Ho;
function kt() {
  return Ho || (Ho = 1, Uo = TypeError), Uo;
}
const nd = {}, id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nd
}, Symbol.toStringTag, { value: "Module" })), od = /* @__PURE__ */ rd(id);
var an, Vo;
function Dr() {
  if (Vo) return an;
  Vo = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, h = c ? WeakSet.prototype.has : null, x = typeof WeakRef == "function" && WeakRef.prototype, d = x ? WeakRef.prototype.deref : null, v = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, S = String.prototype.match, w = String.prototype.slice, P = String.prototype.replace, D = String.prototype.toUpperCase, j = String.prototype.toLowerCase, O = RegExp.prototype.test, _ = Array.prototype.concat, E = Array.prototype.join, m = Array.prototype.slice, A = Math.floor, k = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, R = Object.getOwnPropertySymbols, L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, F = typeof Symbol == "function" && typeof Symbol.iterator == "object", W = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === F || !0) ? Symbol.toStringTag : null, V = Object.prototype.propertyIsEnumerable, C = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(f) {
    return f.__proto__;
  } : null);
  function M(f, p) {
    if (f === 1 / 0 || f === -1 / 0 || f !== f || f && f > -1e3 && f < 1e3 || O.call(/e/, p))
      return p;
    var q = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof f == "number") {
      var U = f < 0 ? -A(-f) : A(f);
      if (U !== f) {
        var X = String(U), $ = w.call(p, X.length + 1);
        return P.call(X, q, "$&_") + "." + P.call(P.call($, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return P.call(p, q, "$&_");
  }
  var B = od, T = B.custom, N = Z(T) ? T : null, te = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ue = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  an = function f(p, q, U, X) {
    var $ = q || {};
    if (K($, "quoteStyle") && !K(te, $.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (K($, "maxStringLength") && (typeof $.maxStringLength == "number" ? $.maxStringLength < 0 && $.maxStringLength !== 1 / 0 : $.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var he = K($, "customInspect") ? $.customInspect : !0;
    if (typeof he != "boolean" && he !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (K($, "indent") && $.indent !== null && $.indent !== "	" && !(parseInt($.indent, 10) === $.indent && $.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (K($, "numericSeparator") && typeof $.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var be = $.numericSeparator;
    if (typeof p > "u")
      return "undefined";
    if (p === null)
      return "null";
    if (typeof p == "boolean")
      return p ? "true" : "false";
    if (typeof p == "string")
      return Mt(p, $);
    if (typeof p == "number") {
      if (p === 0)
        return 1 / 0 / p > 0 ? "0" : "-0";
      var re = String(p);
      return be ? M(p, re) : re;
    }
    if (typeof p == "bigint") {
      var de = String(p) + "n";
      return be ? M(p, de) : de;
    }
    var tt = typeof $.depth > "u" ? 5 : $.depth;
    if (typeof U > "u" && (U = 0), U >= tt && tt > 0 && typeof p == "object")
      return fe(p) ? "[Array]" : "[Object]";
    var Oe = rn($, U);
    if (typeof X > "u")
      X = [];
    else if (ce(X, p) >= 0)
      return "[Circular]";
    function le(Ee, We, on) {
      if (We && (X = m.call(X), X.push(We)), on) {
        var zt = {
          depth: $.depth
        };
        return K($, "quoteStyle") && (zt.quoteStyle = $.quoteStyle), f(Ee, zt, U + 1, X);
      }
      return f(Ee, $, U + 1, X);
    }
    if (typeof p == "function" && !Y(p)) {
      var Ft = we(p), Tt = Ne(p, le);
      return "[Function" + (Ft ? ": " + Ft : " (anonymous)") + "]" + (Tt.length > 0 ? " { " + E.call(Tt, ", ") + " }" : "");
    }
    if (Z(p)) {
      var Ct = F ? P.call(String(p), /^(Symbol\(.*\))_[^)]*$/, "$1") : L.call(p);
      return typeof p == "object" && !F ? Me(Ct) : Ct;
    }
    if (Zr(p)) {
      for (var Re = "<" + j.call(String(p.nodeName)), rt = p.attributes || [], qe = 0; qe < rt.length; qe++)
        Re += " " + rt[qe].name + "=" + ve(me(rt[qe].value), "double", $);
      return Re += ">", p.childNodes && p.childNodes.length && (Re += "..."), Re += "</" + j.call(String(p.nodeName)) + ">", Re;
    }
    if (fe(p)) {
      if (p.length === 0)
        return "[]";
      var nt = Ne(p, le);
      return Oe && !tn(nt) ? "[" + et(nt, Oe) + "]" : "[ " + E.call(nt, ", ") + " ]";
    }
    if (z(p)) {
      var it = Ne(p, le);
      return !("cause" in Error.prototype) && "cause" in p && !V.call(p, "cause") ? "{ [" + String(p) + "] " + E.call(_.call("[cause]: " + le(p.cause), it), ", ") + " }" : it.length === 0 ? "[" + String(p) + "]" : "{ [" + String(p) + "] " + E.call(it, ", ") + " }";
    }
    if (typeof p == "object" && he) {
      if (N && typeof p[N] == "function" && B)
        return B(p, { depth: tt - U });
      if (he !== "symbol" && typeof p.inspect == "function")
        return p.inspect();
    }
    if (ye(p)) {
      var Nt = [];
      return n && n.call(p, function(Ee, We) {
        Nt.push(le(We, p, !0) + " => " + le(Ee, p));
      }), Rt("Map", r.call(p), Nt, Oe);
    }
    if (Ve(p)) {
      var qt = [];
      return s && s.call(p, function(Ee) {
        qt.push(le(Ee, p));
      }), Rt("Set", a.call(p), qt, Oe);
    }
    if (_e(p))
      return Ze("WeakMap");
    if (Qr(p))
      return Ze("WeakSet");
    if (xe(p))
      return Ze("WeakRef");
    if (H(p))
      return Me(le(Number(p)));
    if (Q(p))
      return Me(le(k.call(p)));
    if (J(p))
      return Me(v.call(p));
    if (G(p))
      return Me(le(String(p)));
    if (typeof window < "u" && p === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && p === globalThis || typeof Go < "u" && p === Go)
      return "{ [object globalThis] }";
    if (!ge(p) && !Y(p)) {
      var ot = Ne(p, le), Wt = C ? C(p) === Object.prototype : p instanceof Object || p.constructor === Object, at = p instanceof Object ? "" : "null prototype", Lt = !Wt && W && Object(p) === p && W in p ? w.call(oe(p), 8, -1) : at ? "Object" : "", nn = Wt || typeof p.constructor != "function" ? "" : p.constructor.name ? p.constructor.name + " " : "", st = nn + (Lt || at ? "[" + E.call(_.call([], Lt || [], at || []), ": ") + "] " : "");
      return ot.length === 0 ? st + "{}" : Oe ? st + "{" + et(ot, Oe) + "}" : st + "{ " + E.call(ot, ", ") + " }";
    }
    return String(p);
  };
  function ve(f, p, q) {
    var U = q.quoteStyle || p, X = te[U];
    return X + f + X;
  }
  function me(f) {
    return P.call(String(f), /"/g, "&quot;");
  }
  function ne(f) {
    return !W || !(typeof f == "object" && (W in f || typeof f[W] < "u"));
  }
  function fe(f) {
    return oe(f) === "[object Array]" && ne(f);
  }
  function ge(f) {
    return oe(f) === "[object Date]" && ne(f);
  }
  function Y(f) {
    return oe(f) === "[object RegExp]" && ne(f);
  }
  function z(f) {
    return oe(f) === "[object Error]" && ne(f);
  }
  function G(f) {
    return oe(f) === "[object String]" && ne(f);
  }
  function H(f) {
    return oe(f) === "[object Number]" && ne(f);
  }
  function J(f) {
    return oe(f) === "[object Boolean]" && ne(f);
  }
  function Z(f) {
    if (F)
      return f && typeof f == "object" && f instanceof Symbol;
    if (typeof f == "symbol")
      return !0;
    if (!f || typeof f != "object" || !L)
      return !1;
    try {
      return L.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Q(f) {
    if (!f || typeof f != "object" || !k)
      return !1;
    try {
      return k.call(f), !0;
    } catch {
    }
    return !1;
  }
  var ie = Object.prototype.hasOwnProperty || function(f) {
    return f in this;
  };
  function K(f, p) {
    return ie.call(f, p);
  }
  function oe(f) {
    return y.call(f);
  }
  function we(f) {
    if (f.name)
      return f.name;
    var p = S.call(g.call(f), /^function\s*([\w$]+)/);
    return p ? p[1] : null;
  }
  function ce(f, p) {
    if (f.indexOf)
      return f.indexOf(p);
    for (var q = 0, U = f.length; q < U; q++)
      if (f[q] === p)
        return q;
    return -1;
  }
  function ye(f) {
    if (!r || !f || typeof f != "object")
      return !1;
    try {
      r.call(f);
      try {
        a.call(f);
      } catch {
        return !0;
      }
      return f instanceof Map;
    } catch {
    }
    return !1;
  }
  function _e(f) {
    if (!l || !f || typeof f != "object")
      return !1;
    try {
      l.call(f, l);
      try {
        h.call(f, h);
      } catch {
        return !0;
      }
      return f instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function xe(f) {
    if (!d || !f || typeof f != "object")
      return !1;
    try {
      return d.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Ve(f) {
    if (!a || !f || typeof f != "object")
      return !1;
    try {
      a.call(f);
      try {
        r.call(f);
      } catch {
        return !0;
      }
      return f instanceof Set;
    } catch {
    }
    return !1;
  }
  function Qr(f) {
    if (!h || !f || typeof f != "object")
      return !1;
    try {
      h.call(f, h);
      try {
        l.call(f, l);
      } catch {
        return !0;
      }
      return f instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Zr(f) {
    return !f || typeof f != "object" ? !1 : typeof HTMLElement < "u" && f instanceof HTMLElement ? !0 : typeof f.nodeName == "string" && typeof f.getAttribute == "function";
  }
  function Mt(f, p) {
    if (f.length > p.maxStringLength) {
      var q = f.length - p.maxStringLength, U = "... " + q + " more character" + (q > 1 ? "s" : "");
      return Mt(w.call(f, 0, p.maxStringLength), p) + U;
    }
    var X = ue[p.quoteStyle || "single"];
    X.lastIndex = 0;
    var $ = P.call(P.call(f, X, "\\$1"), /[\x00-\x1f]/g, en);
    return ve($, "single", p);
  }
  function en(f) {
    var p = f.charCodeAt(0), q = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[p];
    return q ? "\\" + q : "\\x" + (p < 16 ? "0" : "") + D.call(p.toString(16));
  }
  function Me(f) {
    return "Object(" + f + ")";
  }
  function Ze(f) {
    return f + " { ? }";
  }
  function Rt(f, p, q, U) {
    var X = U ? et(q, U) : E.call(q, ", ");
    return f + " (" + p + ") {" + X + "}";
  }
  function tn(f) {
    for (var p = 0; p < f.length; p++)
      if (ce(f[p], `
`) >= 0)
        return !1;
    return !0;
  }
  function rn(f, p) {
    var q;
    if (f.indent === "	")
      q = "	";
    else if (typeof f.indent == "number" && f.indent > 0)
      q = E.call(Array(f.indent + 1), " ");
    else
      return null;
    return {
      base: q,
      prev: E.call(Array(p + 1), q)
    };
  }
  function et(f, p) {
    if (f.length === 0)
      return "";
    var q = `
` + p.prev + p.base;
    return q + E.call(f, "," + q) + `
` + p.prev;
  }
  function Ne(f, p) {
    var q = fe(f), U = [];
    if (q) {
      U.length = f.length;
      for (var X = 0; X < f.length; X++)
        U[X] = K(f, X) ? p(f[X], f) : "";
    }
    var $ = typeof R == "function" ? R(f) : [], he;
    if (F) {
      he = {};
      for (var be = 0; be < $.length; be++)
        he["$" + $[be]] = $[be];
    }
    for (var re in f)
      K(f, re) && (q && String(Number(re)) === re && re < f.length || F && he["$" + re] instanceof Symbol || (O.call(/[^\w$]/, re) ? U.push(p(re, f) + ": " + p(f[re], f)) : U.push(re + ": " + p(f[re], f))));
    if (typeof R == "function")
      for (var de = 0; de < $.length; de++)
        V.call(f, $[de]) && U.push("[" + p($[de]) + "]: " + p(f[$[de]], f));
    return U;
  }
  return an;
}
var sn, Xo;
function ad() {
  if (Xo) return sn;
  Xo = 1;
  var e = /* @__PURE__ */ Dr(), t = /* @__PURE__ */ kt(), r = function(s, u, l) {
    for (var c = s, h; (h = c.next) != null; c = h)
      if (h.key === u)
        return c.next = h.next, l || (h.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = h), h;
  }, n = function(s, u) {
    if (s) {
      var l = r(s, u);
      return l && l.value;
    }
  }, i = function(s, u, l) {
    var c = r(s, u);
    c ? c.value = l : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: s.next,
      value: l
    };
  }, o = function(s, u) {
    return s ? !!r(s, u) : !1;
  }, a = function(s, u) {
    if (s)
      return r(s, u, !0);
  };
  return sn = function() {
    var s, u = {
      assert: function(l) {
        if (!u.has(l))
          throw new t("Side channel does not contain " + e(l));
      },
      delete: function(l) {
        var c = a(s, l);
        return c && s && !s.next && (s = void 0), !!c;
      },
      get: function(l) {
        return n(s, l);
      },
      has: function(l) {
        return o(s, l);
      },
      set: function(l, c) {
        s || (s = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          s,
          l,
          c
        );
      }
    };
    return u;
  }, sn;
}
var Yo, Jo;
function Yu() {
  return Jo || (Jo = 1, Yo = Object), Yo;
}
var Ko, Qo;
function sd() {
  return Qo || (Qo = 1, Ko = Error), Ko;
}
var Zo, ea;
function ud() {
  return ea || (ea = 1, Zo = EvalError), Zo;
}
var ta, ra;
function ld() {
  return ra || (ra = 1, ta = RangeError), ta;
}
var na, ia;
function cd() {
  return ia || (ia = 1, na = ReferenceError), na;
}
var oa, aa;
function fd() {
  return aa || (aa = 1, oa = SyntaxError), oa;
}
var sa, ua;
function pd() {
  return ua || (ua = 1, sa = URIError), sa;
}
var la, ca;
function yd() {
  return ca || (ca = 1, la = Math.abs), la;
}
var fa, pa;
function hd() {
  return pa || (pa = 1, fa = Math.floor), fa;
}
var ya, ha;
function dd() {
  return ha || (ha = 1, ya = Math.max), ya;
}
var da, va;
function vd() {
  return va || (va = 1, da = Math.min), da;
}
var ma, ga;
function md() {
  return ga || (ga = 1, ma = Math.pow), ma;
}
var ba, wa;
function gd() {
  return wa || (wa = 1, ba = Math.round), ba;
}
var _a, xa;
function bd() {
  return xa || (xa = 1, _a = Number.isNaN || function(e) {
    return e !== e;
  }), _a;
}
var un, Oa;
function wd() {
  if (Oa) return un;
  Oa = 1;
  var e = /* @__PURE__ */ bd();
  return un = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, un;
}
var Ea, Aa;
function _d() {
  return Aa || (Aa = 1, Ea = Object.getOwnPropertyDescriptor), Ea;
}
var ln, ka;
function Ju() {
  if (ka) return ln;
  ka = 1;
  var e = /* @__PURE__ */ _d();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ln = e, ln;
}
var cn, Sa;
function xd() {
  if (Sa) return cn;
  Sa = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return cn = e, cn;
}
var Pa, ja;
function Od() {
  return ja || (ja = 1, Pa = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = /* @__PURE__ */ Symbol("test"), r = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var n = 42;
    e[t] = n;
    for (var i in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, t)
      );
      if (a.value !== n || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Pa;
}
var fn, Da;
function Ed() {
  if (Da) return fn;
  Da = 1;
  var e = typeof Symbol < "u" && Symbol, t = Od();
  return fn = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, fn;
}
var Ia, Ma;
function Ku() {
  return Ma || (Ma = 1, Ia = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ia;
}
var pn, Ra;
function Qu() {
  if (Ra) return pn;
  Ra = 1;
  var e = /* @__PURE__ */ Yu();
  return pn = e.getPrototypeOf || null, pn;
}
var yn, Fa;
function Ad() {
  if (Fa) return yn;
  Fa = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(s, u) {
    for (var l = [], c = 0; c < s.length; c += 1)
      l[c] = s[c];
    for (var h = 0; h < u.length; h += 1)
      l[h + s.length] = u[h];
    return l;
  }, o = function(s, u) {
    for (var l = [], c = u, h = 0; c < s.length; c += 1, h += 1)
      l[h] = s[c];
    return l;
  }, a = function(s, u) {
    for (var l = "", c = 0; c < s.length; c += 1)
      l += s[c], c + 1 < s.length && (l += u);
    return l;
  };
  return yn = function(s) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var l = o(arguments, 1), c, h = function() {
      if (this instanceof c) {
        var g = u.apply(
          this,
          i(l, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return u.apply(
        s,
        i(l, arguments)
      );
    }, x = r(0, u.length - l.length), d = [], v = 0; v < x; v++)
      d[v] = "$" + v;
    if (c = Function("binder", "return function (" + a(d, ",") + "){ return binder.apply(this,arguments); }")(h), u.prototype) {
      var y = function() {
      };
      y.prototype = u.prototype, c.prototype = new y(), y.prototype = null;
    }
    return c;
  }, yn;
}
var hn, $a;
function Ir() {
  if ($a) return hn;
  $a = 1;
  var e = Ad();
  return hn = Function.prototype.bind || e, hn;
}
var Ta, Ca;
function eo() {
  return Ca || (Ca = 1, Ta = Function.prototype.call), Ta;
}
var Na, qa;
function Zu() {
  return qa || (qa = 1, Na = Function.prototype.apply), Na;
}
var Wa, La;
function kd() {
  return La || (La = 1, Wa = typeof Reflect < "u" && Reflect && Reflect.apply), Wa;
}
var dn, za;
function Sd() {
  if (za) return dn;
  za = 1;
  var e = Ir(), t = Zu(), r = eo(), n = kd();
  return dn = n || e.call(r, t), dn;
}
var vn, Ba;
function el() {
  if (Ba) return vn;
  Ba = 1;
  var e = Ir(), t = /* @__PURE__ */ kt(), r = eo(), n = Sd();
  return vn = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, vn;
}
var mn, Ga;
function Pd() {
  if (Ga) return mn;
  Ga = 1;
  var e = el(), t = /* @__PURE__ */ Ju(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return mn = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    (function(a) {
      return o(a == null ? a : i(a));
    })
  ) : !1, mn;
}
var gn, Ua;
function jd() {
  if (Ua) return gn;
  Ua = 1;
  var e = Ku(), t = Qu(), r = /* @__PURE__ */ Pd();
  return gn = e ? function(n) {
    return e(n);
  } : t ? function(n) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new TypeError("getProto: not an object");
    return t(n);
  } : r ? function(n) {
    return r(n);
  } : null, gn;
}
var bn, Ha;
function Dd() {
  if (Ha) return bn;
  Ha = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Ir();
  return bn = r.call(e, t), bn;
}
var wn, Va;
function to() {
  if (Va) return wn;
  Va = 1;
  var e, t = /* @__PURE__ */ Yu(), r = /* @__PURE__ */ sd(), n = /* @__PURE__ */ ud(), i = /* @__PURE__ */ ld(), o = /* @__PURE__ */ cd(), a = /* @__PURE__ */ fd(), s = /* @__PURE__ */ kt(), u = /* @__PURE__ */ pd(), l = /* @__PURE__ */ yd(), c = /* @__PURE__ */ hd(), h = /* @__PURE__ */ dd(), x = /* @__PURE__ */ vd(), d = /* @__PURE__ */ md(), v = /* @__PURE__ */ gd(), y = /* @__PURE__ */ wd(), g = Function, S = function(Y) {
    try {
      return g('"use strict"; return (' + Y + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Ju(), P = /* @__PURE__ */ xd(), D = function() {
    throw new s();
  }, j = w ? (function() {
    try {
      return arguments.callee, D;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return D;
      }
    }
  })() : D, O = Ed()(), _ = jd(), E = Qu(), m = Ku(), A = Zu(), k = eo(), R = {}, L = typeof Uint8Array > "u" || !_ ? e : _(Uint8Array), F = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": O && _ ? _([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": R,
    "%AsyncGenerator%": R,
    "%AsyncGeneratorFunction%": R,
    "%AsyncIteratorPrototype%": R,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": g,
    "%GeneratorFunction%": R,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": O && _ ? _(_([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !O || !_ ? e : _((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !O || !_ ? e : _((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": O && _ ? _(""[Symbol.iterator]()) : e,
    "%Symbol%": O ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": j,
    "%TypedArray%": L,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": k,
    "%Function.prototype.apply%": A,
    "%Object.defineProperty%": P,
    "%Object.getPrototypeOf%": E,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": h,
    "%Math.min%": x,
    "%Math.pow%": d,
    "%Math.round%": v,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": m
  };
  if (_)
    try {
      null.error;
    } catch (Y) {
      var W = _(_(Y));
      F["%Error.prototype%"] = W;
    }
  var V = function Y(z) {
    var G;
    if (z === "%AsyncFunction%")
      G = S("async function () {}");
    else if (z === "%GeneratorFunction%")
      G = S("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      G = S("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var H = Y("%AsyncGeneratorFunction%");
      H && (G = H.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var J = Y("%AsyncGenerator%");
      J && _ && (G = _(J.prototype));
    }
    return F[z] = G, G;
  }, C = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, M = Ir(), B = /* @__PURE__ */ Dd(), T = M.call(k, Array.prototype.concat), N = M.call(A, Array.prototype.splice), te = M.call(k, String.prototype.replace), ue = M.call(k, String.prototype.slice), ve = M.call(k, RegExp.prototype.exec), me = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ne = /\\(\\)?/g, fe = function(Y) {
    var z = ue(Y, 0, 1), G = ue(Y, -1);
    if (z === "%" && G !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (G === "%" && z !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var H = [];
    return te(Y, me, function(J, Z, Q, ie) {
      H[H.length] = Q ? te(ie, ne, "$1") : Z || J;
    }), H;
  }, ge = function(Y, z) {
    var G = Y, H;
    if (B(C, G) && (H = C[G], G = "%" + H[0] + "%"), B(F, G)) {
      var J = F[G];
      if (J === R && (J = V(G)), typeof J > "u" && !z)
        throw new s("intrinsic " + Y + " exists, but is not available. Please file an issue!");
      return {
        alias: H,
        name: G,
        value: J
      };
    }
    throw new a("intrinsic " + Y + " does not exist!");
  };
  return wn = function(Y, z) {
    if (typeof Y != "string" || Y.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof z != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (ve(/^%?[^%]*%?$/, Y) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var G = fe(Y), H = G.length > 0 ? G[0] : "", J = ge("%" + H + "%", z), Z = J.name, Q = J.value, ie = !1, K = J.alias;
    K && (H = K[0], N(G, T([0, 1], K)));
    for (var oe = 1, we = !0; oe < G.length; oe += 1) {
      var ce = G[oe], ye = ue(ce, 0, 1), _e = ue(ce, -1);
      if ((ye === '"' || ye === "'" || ye === "`" || _e === '"' || _e === "'" || _e === "`") && ye !== _e)
        throw new a("property names with quotes must have matching quotes");
      if ((ce === "constructor" || !we) && (ie = !0), H += "." + ce, Z = "%" + H + "%", B(F, Z))
        Q = F[Z];
      else if (Q != null) {
        if (!(ce in Q)) {
          if (!z)
            throw new s("base intrinsic for " + Y + " exists, but the property is not available.");
          return;
        }
        if (w && oe + 1 >= G.length) {
          var xe = w(Q, ce);
          we = !!xe, we && "get" in xe && !("originalValue" in xe.get) ? Q = xe.get : Q = Q[ce];
        } else
          we = B(Q, ce), Q = Q[ce];
        we && !ie && (F[Z] = Q);
      }
    }
    return Q;
  }, wn;
}
var _n, Xa;
function tl() {
  if (Xa) return _n;
  Xa = 1;
  var e = /* @__PURE__ */ to(), t = el(), r = t([e("%String.prototype.indexOf%")]);
  return _n = function(n, i) {
    var o = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(n, !!i)
    );
    return typeof o == "function" && r(n, ".prototype.") > -1 ? t(
      /** @type {const} */
      [o]
    ) : o;
  }, _n;
}
var xn, Ya;
function rl() {
  if (Ya) return xn;
  Ya = 1;
  var e = /* @__PURE__ */ to(), t = /* @__PURE__ */ tl(), r = /* @__PURE__ */ Dr(), n = /* @__PURE__ */ kt(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return xn = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var c, h = {
      assert: function(x) {
        if (!h.has(x))
          throw new n("Side channel does not contain " + r(x));
      },
      delete: function(x) {
        if (c) {
          var d = u(c, x);
          return l(c) === 0 && (c = void 0), d;
        }
        return !1;
      },
      get: function(x) {
        if (c)
          return o(c, x);
      },
      has: function(x) {
        return c ? s(c, x) : !1;
      },
      set: function(x, d) {
        c || (c = new i()), a(c, x, d);
      }
    };
    return h;
  }, xn;
}
var On, Ja;
function Id() {
  if (Ja) return On;
  Ja = 1;
  var e = /* @__PURE__ */ to(), t = /* @__PURE__ */ tl(), r = /* @__PURE__ */ Dr(), n = rl(), i = /* @__PURE__ */ kt(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return On = o ? (
    /** @type {Exclude<import('.'), false>} */
    (function() {
      var c, h, x = {
        assert: function(d) {
          if (!x.has(d))
            throw new i("Side channel does not contain " + r(d));
        },
        delete: function(d) {
          if (o && d && (typeof d == "object" || typeof d == "function")) {
            if (c)
              return l(c, d);
          } else if (n && h)
            return h.delete(d);
          return !1;
        },
        get: function(d) {
          return o && d && (typeof d == "object" || typeof d == "function") && c ? a(c, d) : h && h.get(d);
        },
        has: function(d) {
          return o && d && (typeof d == "object" || typeof d == "function") && c ? u(c, d) : !!h && h.has(d);
        },
        set: function(d, v) {
          o && d && (typeof d == "object" || typeof d == "function") ? (c || (c = new o()), s(c, d, v)) : n && (h || (h = n()), h.set(d, v));
        }
      };
      return x;
    })
  ) : n, On;
}
var En, Ka;
function nl() {
  if (Ka) return En;
  Ka = 1;
  var e = /* @__PURE__ */ kt(), t = /* @__PURE__ */ Dr(), r = ad(), n = rl(), i = Id(), o = i || n || r;
  return En = function() {
    var a, s = {
      assert: function(u) {
        if (!s.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!a && a.delete(u);
      },
      get: function(u) {
        return a && a.get(u);
      },
      has: function(u) {
        return !!a && a.has(u);
      },
      set: function(u, l) {
        a || (a = o()), a.set(u, l);
      }
    };
    return s;
  }, En;
}
var An, Qa;
function ro() {
  if (Qa) return An;
  Qa = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return An = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, An;
}
var kn, Za;
function il() {
  if (Za) return kn;
  Za = 1;
  var e = /* @__PURE__ */ ro(), t = nl(), r = Object.prototype.hasOwnProperty, n = Array.isArray, i = t(), o = function(O, _) {
    return i.set(O, _), O;
  }, a = function(O) {
    return i.has(O);
  }, s = function(O) {
    return i.get(O);
  }, u = function(O, _) {
    i.set(O, _);
  }, l = (function() {
    for (var O = [], _ = 0; _ < 256; ++_)
      O[O.length] = "%" + ((_ < 16 ? "0" : "") + _.toString(16)).toUpperCase();
    return O;
  })(), c = function(O) {
    for (; O.length > 1; ) {
      var _ = O.pop(), E = _.obj[_.prop];
      if (n(E)) {
        for (var m = [], A = 0; A < E.length; ++A)
          typeof E[A] < "u" && (m[m.length] = E[A]);
        _.obj[_.prop] = m;
      }
    }
  }, h = function(O, _) {
    for (var E = _ && _.plainObjects ? { __proto__: null } : {}, m = 0; m < O.length; ++m)
      typeof O[m] < "u" && (E[m] = O[m]);
    return E;
  }, x = function O(_, E, m) {
    if (!E)
      return _;
    if (typeof E != "object" && typeof E != "function") {
      if (n(_)) {
        var A = _.length;
        if (m && typeof m.arrayLimit == "number" && A > m.arrayLimit)
          return o(h(_.concat(E), m), A);
        _[A] = E;
      } else if (_ && typeof _ == "object")
        if (a(_)) {
          var k = s(_) + 1;
          _[k] = E, u(_, k);
        } else {
          if (m && m.strictMerge)
            return [_, E];
          (m && (m.plainObjects || m.allowPrototypes) || !r.call(Object.prototype, E)) && (_[E] = !0);
        }
      else
        return [_, E];
      return _;
    }
    if (!_ || typeof _ != "object") {
      if (a(E)) {
        for (var R = Object.keys(E), L = m && m.plainObjects ? { __proto__: null, 0: _ } : { 0: _ }, F = 0; F < R.length; F++) {
          var W = parseInt(R[F], 10);
          L[W + 1] = E[R[F]];
        }
        return o(L, s(E) + 1);
      }
      var V = [_].concat(E);
      return m && typeof m.arrayLimit == "number" && V.length > m.arrayLimit ? o(h(V, m), V.length - 1) : V;
    }
    var C = _;
    return n(_) && !n(E) && (C = h(_, m)), n(_) && n(E) ? (E.forEach(function(M, B) {
      if (r.call(_, B)) {
        var T = _[B];
        T && typeof T == "object" && M && typeof M == "object" ? _[B] = O(T, M, m) : _[_.length] = M;
      } else
        _[B] = M;
    }), _) : Object.keys(E).reduce(function(M, B) {
      var T = E[B];
      if (r.call(M, B) ? M[B] = O(M[B], T, m) : M[B] = T, a(E) && !a(M) && o(M, s(E)), a(M)) {
        var N = parseInt(B, 10);
        String(N) === B && N >= 0 && N > s(M) && u(M, N);
      }
      return M;
    }, C);
  }, d = function(O, _) {
    return Object.keys(_).reduce(function(E, m) {
      return E[m] = _[m], E;
    }, O);
  }, v = function(O, _, E) {
    var m = O.replace(/\+/g, " ");
    if (E === "iso-8859-1")
      return m.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(m);
    } catch {
      return m;
    }
  }, y = 1024, g = function(O, _, E, m, A) {
    if (O.length === 0)
      return O;
    var k = O;
    if (typeof O == "symbol" ? k = Symbol.prototype.toString.call(O) : typeof O != "string" && (k = String(O)), E === "iso-8859-1")
      return escape(k).replace(/%u[0-9a-f]{4}/gi, function(M) {
        return "%26%23" + parseInt(M.slice(2), 16) + "%3B";
      });
    for (var R = "", L = 0; L < k.length; L += y) {
      for (var F = k.length >= y ? k.slice(L, L + y) : k, W = [], V = 0; V < F.length; ++V) {
        var C = F.charCodeAt(V);
        if (C === 45 || C === 46 || C === 95 || C === 126 || C >= 48 && C <= 57 || C >= 65 && C <= 90 || C >= 97 && C <= 122 || A === e.RFC1738 && (C === 40 || C === 41)) {
          W[W.length] = F.charAt(V);
          continue;
        }
        if (C < 128) {
          W[W.length] = l[C];
          continue;
        }
        if (C < 2048) {
          W[W.length] = l[192 | C >> 6] + l[128 | C & 63];
          continue;
        }
        if (C < 55296 || C >= 57344) {
          W[W.length] = l[224 | C >> 12] + l[128 | C >> 6 & 63] + l[128 | C & 63];
          continue;
        }
        V += 1, C = 65536 + ((C & 1023) << 10 | F.charCodeAt(V) & 1023), W[W.length] = l[240 | C >> 18] + l[128 | C >> 12 & 63] + l[128 | C >> 6 & 63] + l[128 | C & 63];
      }
      R += W.join("");
    }
    return R;
  }, S = function(O) {
    for (var _ = [{ obj: { o: O }, prop: "o" }], E = [], m = 0; m < _.length; ++m)
      for (var A = _[m], k = A.obj[A.prop], R = Object.keys(k), L = 0; L < R.length; ++L) {
        var F = R[L], W = k[F];
        typeof W == "object" && W !== null && E.indexOf(W) === -1 && (_[_.length] = { obj: k, prop: F }, E[E.length] = W);
      }
    return c(_), O;
  }, w = function(O) {
    return Object.prototype.toString.call(O) === "[object RegExp]";
  }, P = function(O) {
    return !O || typeof O != "object" ? !1 : !!(O.constructor && O.constructor.isBuffer && O.constructor.isBuffer(O));
  }, D = function(O, _, E, m) {
    if (a(O)) {
      var A = s(O) + 1;
      return O[A] = _, u(O, A), O;
    }
    var k = [].concat(O, _);
    return k.length > E ? o(h(k, { plainObjects: m }), k.length - 1) : k;
  }, j = function(O, _) {
    if (n(O)) {
      for (var E = [], m = 0; m < O.length; m += 1)
        E[E.length] = _(O[m]);
      return E;
    }
    return _(O);
  };
  return kn = {
    arrayToObject: h,
    assign: d,
    combine: D,
    compact: S,
    decode: v,
    encode: g,
    isBuffer: P,
    isOverflow: a,
    isRegExp: w,
    markOverflow: o,
    maybeMap: j,
    merge: x
  }, kn;
}
var Sn, es;
function Md() {
  if (es) return Sn;
  es = 1;
  var e = nl(), t = /* @__PURE__ */ il(), r = /* @__PURE__ */ ro(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(y) {
      return y + "[]";
    },
    comma: "comma",
    indices: function(y, g) {
      return y + "[" + g + "]";
    },
    repeat: function(y) {
      return y;
    }
  }, o = Array.isArray, a = Array.prototype.push, s = function(y, g) {
    a.apply(y, o(g) ? g : [g]);
  }, u = Date.prototype.toISOString, l = r.default, c = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: r.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(y) {
      return u.call(y);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, h = function(y) {
    return typeof y == "string" || typeof y == "number" || typeof y == "boolean" || typeof y == "symbol" || typeof y == "bigint";
  }, x = {}, d = function y(g, S, w, P, D, j, O, _, E, m, A, k, R, L, F, W, V, C) {
    for (var M = g, B = C, T = 0, N = !1; (B = B.get(x)) !== void 0 && !N; ) {
      var te = B.get(g);
      if (T += 1, typeof te < "u") {
        if (te === T)
          throw new RangeError("Cyclic object value");
        N = !0;
      }
      typeof B.get(x) > "u" && (T = 0);
    }
    if (typeof m == "function" ? M = m(S, M) : M instanceof Date ? M = R(M) : w === "comma" && o(M) && (M = t.maybeMap(M, function(Q) {
      return Q instanceof Date ? R(Q) : Q;
    })), M === null) {
      if (j)
        return E && !W ? E(S, c.encoder, V, "key", L) : S;
      M = "";
    }
    if (h(M) || t.isBuffer(M)) {
      if (E) {
        var ue = W ? S : E(S, c.encoder, V, "key", L);
        return [F(ue) + "=" + F(E(M, c.encoder, V, "value", L))];
      }
      return [F(S) + "=" + F(String(M))];
    }
    var ve = [];
    if (typeof M > "u")
      return ve;
    var me;
    if (w === "comma" && o(M))
      W && E && (M = t.maybeMap(M, E)), me = [{ value: M.length > 0 ? M.join(",") || null : void 0 }];
    else if (o(m))
      me = m;
    else {
      var ne = Object.keys(M);
      me = A ? ne.sort(A) : ne;
    }
    var fe = _ ? String(S).replace(/\./g, "%2E") : String(S), ge = P && o(M) && M.length === 1 ? fe + "[]" : fe;
    if (D && o(M) && M.length === 0)
      return ge + "[]";
    for (var Y = 0; Y < me.length; ++Y) {
      var z = me[Y], G = typeof z == "object" && z && typeof z.value < "u" ? z.value : M[z];
      if (!(O && G === null)) {
        var H = k && _ ? String(z).replace(/\./g, "%2E") : String(z), J = o(M) ? typeof w == "function" ? w(ge, H) : ge : ge + (k ? "." + H : "[" + H + "]");
        C.set(g, T);
        var Z = e();
        Z.set(x, C), s(ve, y(
          G,
          J,
          w,
          P,
          D,
          j,
          O,
          _,
          w === "comma" && W && o(M) ? null : E,
          m,
          A,
          k,
          R,
          L,
          F,
          W,
          V,
          Z
        ));
      }
    }
    return ve;
  }, v = function(y) {
    if (!y)
      return c;
    if (typeof y.allowEmptyArrays < "u" && typeof y.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof y.encodeDotInKeys < "u" && typeof y.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (y.encoder !== null && typeof y.encoder < "u" && typeof y.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var g = y.charset || c.charset;
    if (typeof y.charset < "u" && y.charset !== "utf-8" && y.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var S = r.default;
    if (typeof y.format < "u") {
      if (!n.call(r.formatters, y.format))
        throw new TypeError("Unknown format option provided.");
      S = y.format;
    }
    var w = r.formatters[S], P = c.filter;
    (typeof y.filter == "function" || o(y.filter)) && (P = y.filter);
    var D;
    if (y.arrayFormat in i ? D = y.arrayFormat : "indices" in y ? D = y.indices ? "indices" : "repeat" : D = c.arrayFormat, "commaRoundTrip" in y && typeof y.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var j = typeof y.allowDots > "u" ? y.encodeDotInKeys === !0 ? !0 : c.allowDots : !!y.allowDots;
    return {
      addQueryPrefix: typeof y.addQueryPrefix == "boolean" ? y.addQueryPrefix : c.addQueryPrefix,
      allowDots: j,
      allowEmptyArrays: typeof y.allowEmptyArrays == "boolean" ? !!y.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: D,
      charset: g,
      charsetSentinel: typeof y.charsetSentinel == "boolean" ? y.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!y.commaRoundTrip,
      delimiter: typeof y.delimiter > "u" ? c.delimiter : y.delimiter,
      encode: typeof y.encode == "boolean" ? y.encode : c.encode,
      encodeDotInKeys: typeof y.encodeDotInKeys == "boolean" ? y.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof y.encoder == "function" ? y.encoder : c.encoder,
      encodeValuesOnly: typeof y.encodeValuesOnly == "boolean" ? y.encodeValuesOnly : c.encodeValuesOnly,
      filter: P,
      format: S,
      formatter: w,
      serializeDate: typeof y.serializeDate == "function" ? y.serializeDate : c.serializeDate,
      skipNulls: typeof y.skipNulls == "boolean" ? y.skipNulls : c.skipNulls,
      sort: typeof y.sort == "function" ? y.sort : null,
      strictNullHandling: typeof y.strictNullHandling == "boolean" ? y.strictNullHandling : c.strictNullHandling
    };
  };
  return Sn = function(y, g) {
    var S = y, w = v(g), P, D;
    typeof w.filter == "function" ? (D = w.filter, S = D("", S)) : o(w.filter) && (D = w.filter, P = D);
    var j = [];
    if (typeof S != "object" || S === null)
      return "";
    var O = i[w.arrayFormat], _ = O === "comma" && w.commaRoundTrip;
    P || (P = Object.keys(S)), w.sort && P.sort(w.sort);
    for (var E = e(), m = 0; m < P.length; ++m) {
      var A = P[m], k = S[A];
      w.skipNulls && k === null || s(j, d(
        k,
        A,
        O,
        _,
        w.allowEmptyArrays,
        w.strictNullHandling,
        w.skipNulls,
        w.encodeDotInKeys,
        w.encode ? w.encoder : null,
        w.filter,
        w.sort,
        w.allowDots,
        w.serializeDate,
        w.format,
        w.formatter,
        w.encodeValuesOnly,
        w.charset,
        E
      ));
    }
    var R = j.join(w.delimiter), L = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? L += "utf8=%26%2310003%3B&" : L += "utf8=%E2%9C%93&"), R.length > 0 ? L + R : "";
  }, Sn;
}
var Pn, ts;
function Rd() {
  if (ts) return Pn;
  ts = 1;
  var e = /* @__PURE__ */ il(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictMerge: !0,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, i = function(d) {
    return d.replace(/&#(\d+);/g, function(v, y) {
      return String.fromCharCode(parseInt(y, 10));
    });
  }, o = function(d, v, y) {
    if (d && typeof d == "string" && v.comma && d.indexOf(",") > -1)
      return d.split(",");
    if (v.throwOnLimitExceeded && y >= v.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return d;
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", u = function(d, v) {
    var y = { __proto__: null }, g = v.ignoreQueryPrefix ? d.replace(/^\?/, "") : d;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var S = v.parameterLimit === 1 / 0 ? void 0 : v.parameterLimit, w = g.split(
      v.delimiter,
      v.throwOnLimitExceeded && typeof S < "u" ? S + 1 : S
    );
    if (v.throwOnLimitExceeded && typeof S < "u" && w.length > S)
      throw new RangeError("Parameter limit exceeded. Only " + S + " parameter" + (S === 1 ? "" : "s") + " allowed.");
    var P = -1, D, j = v.charset;
    if (v.charsetSentinel)
      for (D = 0; D < w.length; ++D)
        w[D].indexOf("utf8=") === 0 && (w[D] === s ? j = "utf-8" : w[D] === a && (j = "iso-8859-1"), P = D, D = w.length);
    for (D = 0; D < w.length; ++D)
      if (D !== P) {
        var O = w[D], _ = O.indexOf("]="), E = _ === -1 ? O.indexOf("=") : _ + 1, m, A;
        if (E === -1 ? (m = v.decoder(O, n.decoder, j, "key"), A = v.strictNullHandling ? null : "") : (m = v.decoder(O.slice(0, E), n.decoder, j, "key"), m !== null && (A = e.maybeMap(
          o(
            O.slice(E + 1),
            v,
            r(y[m]) ? y[m].length : 0
          ),
          function(R) {
            return v.decoder(R, n.decoder, j, "value");
          }
        ))), A && v.interpretNumericEntities && j === "iso-8859-1" && (A = i(String(A))), O.indexOf("[]=") > -1 && (A = r(A) ? [A] : A), v.comma && r(A) && A.length > v.arrayLimit) {
          if (v.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          A = e.combine([], A, v.arrayLimit, v.plainObjects);
        }
        if (m !== null) {
          var k = t.call(y, m);
          k && (v.duplicates === "combine" || O.indexOf("[]=") > -1) ? y[m] = e.combine(
            y[m],
            A,
            v.arrayLimit,
            v.plainObjects
          ) : (!k || v.duplicates === "last") && (y[m] = A);
        }
      }
    return y;
  }, l = function(d, v, y, g) {
    var S = 0;
    if (d.length > 0 && d[d.length - 1] === "[]") {
      var w = d.slice(0, -1).join("");
      S = Array.isArray(v) && v[w] ? v[w].length : 0;
    }
    for (var P = g ? v : o(v, y, S), D = d.length - 1; D >= 0; --D) {
      var j, O = d[D];
      if (O === "[]" && y.parseArrays)
        e.isOverflow(P) ? j = P : j = y.allowEmptyArrays && (P === "" || y.strictNullHandling && P === null) ? [] : e.combine(
          [],
          P,
          y.arrayLimit,
          y.plainObjects
        );
      else {
        j = y.plainObjects ? { __proto__: null } : {};
        var _ = O.charAt(0) === "[" && O.charAt(O.length - 1) === "]" ? O.slice(1, -1) : O, E = y.decodeDotInKeys ? _.replace(/%2E/g, ".") : _, m = parseInt(E, 10), A = !isNaN(m) && O !== E && String(m) === E && m >= 0 && y.parseArrays;
        if (!y.parseArrays && E === "")
          j = { 0: P };
        else if (A && m < y.arrayLimit)
          j = [], j[m] = P;
        else {
          if (A && y.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + y.arrayLimit + " element" + (y.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          A ? (j[m] = P, e.markOverflow(j, m)) : E !== "__proto__" && (j[E] = P);
        }
      }
      P = j;
    }
    return P;
  }, c = function(d, v) {
    var y = v.allowDots ? d.replace(/\.([^.[]+)/g, "[$1]") : d;
    if (v.depth <= 0)
      return !v.plainObjects && t.call(Object.prototype, y) && !v.allowPrototypes ? void 0 : [y];
    var g = /(\[[^[\]]*])/, S = /(\[[^[\]]*])/g, w = g.exec(y), P = w ? y.slice(0, w.index) : y, D = [];
    if (P) {
      if (!v.plainObjects && t.call(Object.prototype, P) && !v.allowPrototypes)
        return;
      D[D.length] = P;
    }
    for (var j = 0; (w = S.exec(y)) !== null && j < v.depth; ) {
      j += 1;
      var O = w[1].slice(1, -1);
      if (!v.plainObjects && t.call(Object.prototype, O) && !v.allowPrototypes)
        return;
      D[D.length] = w[1];
    }
    if (w) {
      if (v.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + v.depth + " and strictDepth is true");
      D[D.length] = "[" + y.slice(w.index) + "]";
    }
    return D;
  }, h = function(d, v, y, g) {
    if (d) {
      var S = c(d, y);
      if (S)
        return l(S, v, y, g);
    }
  }, x = function(d) {
    if (!d)
      return n;
    if (typeof d.allowEmptyArrays < "u" && typeof d.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof d.decodeDotInKeys < "u" && typeof d.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (d.decoder !== null && typeof d.decoder < "u" && typeof d.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof d.charset < "u" && d.charset !== "utf-8" && d.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof d.throwOnLimitExceeded < "u" && typeof d.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var v = typeof d.charset > "u" ? n.charset : d.charset, y = typeof d.duplicates > "u" ? n.duplicates : d.duplicates;
    if (y !== "combine" && y !== "first" && y !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var g = typeof d.allowDots > "u" ? d.decodeDotInKeys === !0 ? !0 : n.allowDots : !!d.allowDots;
    return {
      allowDots: g,
      allowEmptyArrays: typeof d.allowEmptyArrays == "boolean" ? !!d.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof d.allowPrototypes == "boolean" ? d.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof d.allowSparse == "boolean" ? d.allowSparse : n.allowSparse,
      arrayLimit: typeof d.arrayLimit == "number" ? d.arrayLimit : n.arrayLimit,
      charset: v,
      charsetSentinel: typeof d.charsetSentinel == "boolean" ? d.charsetSentinel : n.charsetSentinel,
      comma: typeof d.comma == "boolean" ? d.comma : n.comma,
      decodeDotInKeys: typeof d.decodeDotInKeys == "boolean" ? d.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof d.decoder == "function" ? d.decoder : n.decoder,
      delimiter: typeof d.delimiter == "string" || e.isRegExp(d.delimiter) ? d.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof d.depth == "number" || d.depth === !1 ? +d.depth : n.depth,
      duplicates: y,
      ignoreQueryPrefix: d.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof d.interpretNumericEntities == "boolean" ? d.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof d.parameterLimit == "number" ? d.parameterLimit : n.parameterLimit,
      parseArrays: d.parseArrays !== !1,
      plainObjects: typeof d.plainObjects == "boolean" ? d.plainObjects : n.plainObjects,
      strictDepth: typeof d.strictDepth == "boolean" ? !!d.strictDepth : n.strictDepth,
      strictMerge: typeof d.strictMerge == "boolean" ? !!d.strictMerge : n.strictMerge,
      strictNullHandling: typeof d.strictNullHandling == "boolean" ? d.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof d.throwOnLimitExceeded == "boolean" ? d.throwOnLimitExceeded : !1
    };
  };
  return Pn = function(d, v) {
    var y = x(v);
    if (d === "" || d === null || typeof d > "u")
      return y.plainObjects ? { __proto__: null } : {};
    for (var g = typeof d == "string" ? u(d, y) : d, S = y.plainObjects ? { __proto__: null } : {}, w = Object.keys(g), P = 0; P < w.length; ++P) {
      var D = w[P], j = h(D, g[D], y, typeof d == "string");
      S = e.merge(S, j, y);
    }
    return y.allowSparse === !0 ? S : e.compact(S);
  }, Pn;
}
var jn, rs;
function Fd() {
  if (rs) return jn;
  rs = 1;
  var e = /* @__PURE__ */ Md(), t = /* @__PURE__ */ Rd(), r = /* @__PURE__ */ ro();
  return jn = {
    formats: r,
    parse: t,
    stringify: e
  }, jn;
}
var $d = /* @__PURE__ */ Fd();
const Td = /* @__PURE__ */ td($d);
async function rr(e) {
  try {
    return [null, await e()];
  } catch (t) {
    return [t, null];
  }
}
rr.sync = function(e) {
  try {
    return [null, e()];
  } catch (t) {
    return [t, null];
  }
};
class Mr extends Error {
  status = 500;
  constructor(t, r = 500) {
    super(t), this.name = "BaseException", this.status = r;
  }
  static fromError(t) {
    return new Mr(t.message, 500);
  }
}
class Cd {
  entries = /* @__PURE__ */ new Map();
  loadFromRecord(t) {
    Object.entries(t).forEach(([r, n]) => {
      this.set(r, n);
    });
  }
  toRecord() {
    const t = {};
    for (const [r, n] of this.entries.entries())
      t[String(r)] = n;
    return t;
  }
  getKey(t) {
    let r = t;
    (typeof t == "function" || typeof t == "object") && (r = t.name);
    const n = typeof t != "string" && typeof t != "symbol";
    return n && !t?.__container_entry_key && console.warn(`Warning: The constructor ${t?.name || t} does not have a unique identifier. Consider adding a static property __container_entry_key to avoid potential conflicts.`), n && t?.__container_entry_key && (r = t.__container_entry_key), r;
  }
  set(t, r) {
    const n = this.getKey(t);
    return this.entries.set(n, r), this;
  }
  has(t) {
    const r = this.getKey(t);
    return this.entries.has(r);
  }
  get(t) {
    const r = this.getKey(t);
    if (!this.entries.has(r))
      throw new Mr(`Entry with key "${String(r)}" not found in container.`);
    return this.entries.get(r);
  }
  unset(t) {
    const r = this.getKey(t);
    this.entries.delete(r);
  }
  singleton(t) {
    const r = t.name, n = this.entries.get(r);
    if (n)
      return n;
    const i = new t();
    return this.entries.set(r, i), i;
  }
  load(t) {
    Object.entries(t).forEach(([r, n]) => {
      this.set(r, n);
    });
  }
  proxy(t) {
    return new Proxy({}, {
      get: (r, n) => {
        const i = this.get(t), o = i[n];
        return typeof o == "function" ? o.bind(i) : i[n];
      },
      set: (r, n, i) => {
        const o = this.get(t);
        return o[n] = i, !0;
      }
    });
  }
  keys() {
    return Array.from(this.entries.keys());
  }
}
const Se = globalThis.clientContainer || new Cd();
globalThis.clientContainer = Se;
class Nd {
  static __container_entry_key = "ToastService";
  success(t, r) {
    console.log("Success:", t, r);
  }
  error(t, r) {
    console.error("Error:", t, r);
  }
}
const ns = Se.proxy(Nd);
class qd {
  static __container_entry_key = "FetchService";
  async handleError(t) {
    if (t.headers.get("Content-Type")?.includes("json")) {
      const r = await t.json().catch(() => ({ message: $t("Internal Server Error") }));
      return r.message && ns.error(r.message), r;
    }
    return ns.error($t("Internal Server Error")), {
      message: $t("Internal Server Error")
    };
  }
  buildUrl(t, r) {
    if (!r)
      return t;
    const n = Td.stringify(r, { arrayFormat: "brackets" });
    return t + "?" + n;
  }
  buildRequestInit(t) {
    const r = { ...t };
    return t.data && (r.body = JSON.stringify(t.data), r.headers = {
      ...r.headers,
      "Content-Type": "application/json"
    }), r;
  }
  async parseResponse(t) {
    return t.headers.get("Content-Type")?.includes("json") ? t.json() : t.text();
  }
  async fetch(t, r = {}) {
    throw new Error("Method not implemented");
  }
  async try(t, r = {}) {
    return rr(() => this.fetch(t, r));
  }
  async get(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "GET"
    });
  }
  async post(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "POST"
    });
  }
  async put(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "PUT"
    });
  }
  async delete(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "DELETE"
    });
  }
}
const ol = Se.proxy(qd);
function nr(...e) {
  return e.reduce((t, r) => r(t), class {
  });
}
function al(e, ...t) {
  return t.reduce((r, n) => n(r), e);
}
function Wd(e) {
  return function(t) {
    class r extends t {
      constructor(...i) {
        super(...i);
        const o = new e(...i);
        Object.assign(this, o);
      }
    }
    for (const n of Reflect.ownKeys(e.prototype))
      n !== "constructor" && Object.defineProperty(
        r.prototype,
        n,
        Object.getOwnPropertyDescriptor(e.prototype, n)
      );
    return r;
  };
}
function ir(e) {
  return class extends e {
    static from(t) {
      const r = typeof this == "function" ? this : e, n = new r();
      let i = { ...t };
      return typeof r?.parse == "function" && (i = r.parse(t)), typeof this?.parse == "function" && (i = this.parse(t)), Object.assign(n, i), n;
    }
    merge(t) {
      return Object.assign(this, t), this;
    }
  };
}
function Ld(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
function zd(e) {
  return class extends e {
    deleted_at = null;
  };
}
class PE extends nr(ir, Ld, zd) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    const [t, r] = this.name.split(" ");
    if (!r)
      return t[0].toUpperCase();
    const n = t[0].toUpperCase(), i = r[0].toUpperCase();
    return n + i;
  }
}
class Bd {
  static __container_entry_key = "AuthService";
  user;
  constructor(t = {}) {
    this.user = t.user || null;
  }
  async logout(t) {
    const [r] = await ol.try("/auth/logout", { method: "POST" });
    r || (window.location.href = t?.redirect || "/");
  }
}
var sl = typeof global == "object" && global && global.Object === Object && global, Gd = typeof self == "object" && self && self.Object === Object && self, $e = sl || Gd || Function("return this")(), Je = $e.Symbol, ul = Object.prototype, Ud = ul.hasOwnProperty, Hd = ul.toString, Bt = Je ? Je.toStringTag : void 0;
function Vd(e) {
  var t = Ud.call(e, Bt), r = e[Bt];
  try {
    e[Bt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Hd.call(e);
  return n && (t ? e[Bt] = r : delete e[Bt]), i;
}
var Xd = Object.prototype, Yd = Xd.toString;
function Jd(e) {
  return Yd.call(e);
}
var Kd = "[object Null]", Qd = "[object Undefined]", is = Je ? Je.toStringTag : void 0;
function St(e) {
  return e == null ? e === void 0 ? Qd : Kd : is && is in Object(e) ? Vd(e) : Jd(e);
}
function Ke(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zd = "[object AsyncFunction]", ev = "[object Function]", tv = "[object GeneratorFunction]", rv = "[object Proxy]";
function ll(e) {
  if (!Ke(e))
    return !1;
  var t = St(e);
  return t == ev || t == tv || t == Zd || t == rv;
}
var Dn = $e["__core-js_shared__"], os = (function() {
  var e = /[^.]+$/.exec(Dn && Dn.keys && Dn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function nv(e) {
  return !!os && os in e;
}
var iv = Function.prototype, ov = iv.toString;
function ht(e) {
  if (e != null) {
    try {
      return ov.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var av = /[\\^$.*+?()[\]{}|]/g, sv = /^\[object .+?Constructor\]$/, uv = Function.prototype, lv = Object.prototype, cv = uv.toString, fv = lv.hasOwnProperty, pv = RegExp(
  "^" + cv.call(fv).replace(av, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yv(e) {
  if (!Ke(e) || nv(e))
    return !1;
  var t = ll(e) ? pv : sv;
  return t.test(ht(e));
}
function hv(e, t) {
  return e?.[t];
}
function dt(e, t) {
  var r = hv(e, t);
  return yv(r) ? r : void 0;
}
var as = (function() {
  try {
    var e = dt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function dv(e, t, r) {
  t == "__proto__" && as ? as(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function no(e, t) {
  return e === t || e !== e && t !== t;
}
var vv = Object.prototype, mv = vv.hasOwnProperty;
function gv(e, t, r) {
  var n = e[t];
  (!(mv.call(e, t) && no(n, r)) || r === void 0 && !(t in e)) && dv(e, t, r);
}
var De = Array.isArray;
function _t(e) {
  return e != null && typeof e == "object";
}
var bv = "[object Symbol]";
function xt(e) {
  return typeof e == "symbol" || _t(e) && St(e) == bv;
}
var wv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _v = /^\w*$/;
function io(e, t) {
  if (De(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || xt(e) ? !0 : _v.test(e) || !wv.test(e) || t != null && e in Object(t);
}
var Kt = dt(Object, "create");
function xv() {
  this.__data__ = Kt ? Kt(null) : {}, this.size = 0;
}
function Ov(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ev = "__lodash_hash_undefined__", Av = Object.prototype, kv = Av.hasOwnProperty;
function Sv(e) {
  var t = this.__data__;
  if (Kt) {
    var r = t[e];
    return r === Ev ? void 0 : r;
  }
  return kv.call(t, e) ? t[e] : void 0;
}
var Pv = Object.prototype, jv = Pv.hasOwnProperty;
function Dv(e) {
  var t = this.__data__;
  return Kt ? t[e] !== void 0 : jv.call(t, e);
}
var Iv = "__lodash_hash_undefined__";
function Mv(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Kt && t === void 0 ? Iv : t, this;
}
function ft(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ft.prototype.clear = xv;
ft.prototype.delete = Ov;
ft.prototype.get = Sv;
ft.prototype.has = Dv;
ft.prototype.set = Mv;
function Rv() {
  this.__data__ = [], this.size = 0;
}
function Rr(e, t) {
  for (var r = e.length; r--; )
    if (no(e[r][0], t))
      return r;
  return -1;
}
var Fv = Array.prototype, $v = Fv.splice;
function Tv(e) {
  var t = this.__data__, r = Rr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : $v.call(t, r, 1), --this.size, !0;
}
function Cv(e) {
  var t = this.__data__, r = Rr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Nv(e) {
  return Rr(this.__data__, e) > -1;
}
function qv(e, t) {
  var r = this.__data__, n = Rr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ze(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ze.prototype.clear = Rv;
ze.prototype.delete = Tv;
ze.prototype.get = Cv;
ze.prototype.has = Nv;
ze.prototype.set = qv;
var Qt = dt($e, "Map");
function Wv() {
  this.size = 0, this.__data__ = {
    hash: new ft(),
    map: new (Qt || ze)(),
    string: new ft()
  };
}
function Lv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Fr(e, t) {
  var r = e.__data__;
  return Lv(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function zv(e) {
  var t = Fr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Bv(e) {
  return Fr(this, e).get(e);
}
function Gv(e) {
  return Fr(this, e).has(e);
}
function Uv(e, t) {
  var r = Fr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Be.prototype.clear = Wv;
Be.prototype.delete = zv;
Be.prototype.get = Bv;
Be.prototype.has = Gv;
Be.prototype.set = Uv;
var Hv = "Expected a function";
function oo(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Hv);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (oo.Cache || Be)(), r;
}
oo.Cache = Be;
var Vv = 500;
function Xv(e) {
  var t = oo(e, function(n) {
    return r.size === Vv && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Yv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jv = /\\(\\)?/g, Kv = Xv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Yv, function(r, n, i, o) {
    t.push(i ? o.replace(Jv, "$1") : n || r);
  }), t;
});
function gr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ss = Je ? Je.prototype : void 0, us = ss ? ss.toString : void 0;
function cl(e) {
  if (typeof e == "string")
    return e;
  if (De(e))
    return gr(e, cl) + "";
  if (xt(e))
    return us ? us.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Qv(e) {
  return e == null ? "" : cl(e);
}
function $r(e, t) {
  return De(e) ? e : io(e, t) ? [e] : Kv(Qv(e));
}
var Zv = 9007199254740991, em = /^(?:0|[1-9]\d*)$/;
function ao(e, t) {
  var r = typeof e;
  return t = t ?? Zv, !!t && (r == "number" || r != "symbol" && em.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function pt(e) {
  if (typeof e == "string" || xt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function tm(e, t, r, n) {
  if (!Ke(e))
    return e;
  t = $r(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var u = pt(t[i]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = Ke(c) ? c : ao(t[i + 1]) ? [] : {});
    }
    gv(s, u, l), s = s[u];
  }
  return e;
}
function rm(e, t, r) {
  return e == null ? e : tm(e, t, r);
}
function fl(e, t = "", r = {}) {
  for (const [n, i] of Object.entries(e)) {
    const o = /^\d+$/.test(n) ? `${t}[${n}]` : t ? `${t}.${n}` : n;
    if (i && typeof i == "object") {
      fl(i, o, r);
      continue;
    }
    r[o] = i;
  }
  return r;
}
function Tr(e, t) {
  t = $r(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[pt(t[r++])];
  return r && r == n ? e : void 0;
}
function pl(e, t, r) {
  var n = e == null ? void 0 : Tr(e, t);
  return n === void 0 ? r : n;
}
var nm = Object.prototype, im = nm.hasOwnProperty;
function om(e, t) {
  return e != null && im.call(e, t);
}
var am = "[object Arguments]";
function ls(e) {
  return _t(e) && St(e) == am;
}
var yl = Object.prototype, sm = yl.hasOwnProperty, um = yl.propertyIsEnumerable, hl = ls(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ls : function(e) {
  return _t(e) && sm.call(e, "callee") && !um.call(e, "callee");
}, lm = 9007199254740991;
function so(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lm;
}
function dl(e, t, r) {
  t = $r(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = pt(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && so(i) && ao(a, i) && (De(e) || hl(e)));
}
function cm(e, t) {
  return e != null && dl(e, t, om);
}
function fm(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function pm(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++n < i; )
    o[n] = e[n + t];
  return o;
}
function ym(e, t) {
  return t.length < 2 ? e : Tr(e, pm(t, 0, -1));
}
var hm = Object.prototype, dm = hm.hasOwnProperty;
function vm(e, t) {
  t = $r(t, e);
  var r = -1, n = t.length;
  if (!n)
    return !0;
  for (; ++r < n; ) {
    var i = pt(t[r]);
    if (i === "__proto__" && !dm.call(e, "__proto__") || (i === "constructor" || i === "prototype") && r < n - 1)
      return !1;
  }
  var o = ym(e, t);
  return o == null || delete o[pt(fm(t))];
}
function mm(e, t) {
  return e == null ? !0 : vm(e, t);
}
class gm {
  static __container_entry_key = "ConfigService";
  entries;
  constructor() {
    this.entries = /* @__PURE__ */ new Map();
  }
  list() {
    return Array.from(this.entries.values());
  }
  parseValue(t) {
    return typeof t == "string" && t.endsWith(":boolean") ? t.replace(":boolean", "").trim() === "true" : t;
  }
  loadFromRecord(t, r = "unknow") {
    for (const [n, i] of Object.entries(t))
      this.entries.set(n, {
        key: n,
        value: this.parseValue(i),
        source: r
      });
  }
  loadFromEntries(t, r = "unknow") {
    for (const [n, i] of t)
      this.entries.set(n, {
        key: n,
        value: this.parseValue(i),
        source: r
      });
  }
  toRecord() {
    const t = {};
    for (const [r, n] of this.entries.entries())
      t[r] = n.value;
    return t;
  }
  has(t) {
    if (this.entries.get(t))
      return !0;
    if (!t.includes("."))
      return !1;
    const r = t.split(".")[0], n = this.entries.get(r);
    if (!n)
      return !!this.entries.get(t);
    const i = n.value;
    return typeof i != "object" || Array.isArray(i) ? !1 : cm(i, t.substring(r.length + 1));
  }
  get(t, r) {
    const n = this.entries.get(t);
    if (n)
      return n.value;
    if (!t.includes("."))
      return r;
    const i = t.split(".")[0], o = this.entries.get(i);
    if (!o) {
      const s = this.entries.get(t);
      return s ? s.value : r;
    }
    const a = o.value;
    return typeof a != "object" || Array.isArray(a) ? r : pl(a, t.substring(i.length + 1), r);
  }
  getOne(t, r) {
    for (const n of t)
      if (this.has(n))
        return this.get(n);
    return r;
  }
  set(t, r, n = "runtime") {
    if (!t.includes(".")) {
      this.entries.set(t, {
        key: t,
        source: n,
        value: r
      });
      return;
    }
    const i = t.split(".")[0];
    let o = this.get(i, {});
    (typeof o != "object" || Array.isArray(o)) && (o = {}), rm(o, t.substring(i.length + 1), r), this.entries.set(i, {
      key: i,
      source: n,
      value: o
    });
  }
  unset(t) {
    if (!t.includes(".")) {
      this.entries.delete(t);
      return;
    }
    const r = t.split(".")[0], n = this.get(r, {});
    n && (typeof n != "object" || Array.isArray(n) || (mm(n, t.substring(r.length + 1)), this.entries.set(r, {
      key: r,
      source: "runtime",
      value: n
    })));
  }
  clear() {
    this.entries.clear();
  }
  dump() {
    return fl(this.toRecord());
  }
}
Se.proxy(gm);
var In = function() {
  return $e.Date.now();
}, bm = /\s/;
function wm(e) {
  for (var t = e.length; t-- && bm.test(e.charAt(t)); )
    ;
  return t;
}
var _m = /^\s+/;
function xm(e) {
  return e && e.slice(0, wm(e) + 1).replace(_m, "");
}
var cs = NaN, Om = /^[-+]0x[0-9a-f]+$/i, Em = /^0b[01]+$/i, Am = /^0o[0-7]+$/i, km = parseInt;
function fs(e) {
  if (typeof e == "number")
    return e;
  if (xt(e))
    return cs;
  if (Ke(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ke(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xm(e);
  var r = Em.test(e);
  return r || Am.test(e) ? km(e.slice(2), r ? 2 : 8) : Om.test(e) ? cs : +e;
}
var Sm = "Expected a function", Pm = Math.max, jm = Math.min;
function Dm(e, t, r) {
  var n, i, o, a, s, u, l = 0, c = !1, h = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(Sm);
  t = fs(t) || 0, Ke(r) && (c = !!r.leading, h = "maxWait" in r, o = h ? Pm(fs(r.maxWait) || 0, t) : o, x = "trailing" in r ? !!r.trailing : x);
  function d(O) {
    var _ = n, E = i;
    return n = i = void 0, l = O, a = e.apply(E, _), a;
  }
  function v(O) {
    return l = O, s = setTimeout(S, t), c ? d(O) : a;
  }
  function y(O) {
    var _ = O - u, E = O - l, m = t - _;
    return h ? jm(m, o - E) : m;
  }
  function g(O) {
    var _ = O - u, E = O - l;
    return u === void 0 || _ >= t || _ < 0 || h && E >= o;
  }
  function S() {
    var O = In();
    if (g(O))
      return w(O);
    s = setTimeout(S, y(O));
  }
  function w(O) {
    return s = void 0, x && n ? d(O) : (n = i = void 0, a);
  }
  function P() {
    s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0;
  }
  function D() {
    return s === void 0 ? a : w(In());
  }
  function j() {
    var O = In(), _ = g(O);
    if (n = arguments, i = this, u = O, _) {
      if (s === void 0)
        return v(u);
      if (h)
        return clearTimeout(s), s = setTimeout(S, t), d(u);
    }
    return s === void 0 && (s = setTimeout(S, t)), a;
  }
  return j.cancel = P, j.flush = D, j;
}
function Im() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : typeof self < "u" && self.crypto && self.crypto.randomUUID ? self.crypto.randomUUID() : typeof window < "u" && window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Mm(e = "") {
  return e + Im();
}
class Pt {
  static __container_entry_key = "LoggerService";
  info(t, r) {
  }
  debug(t, r) {
  }
  warn(t, r) {
  }
  error(t, r) {
  }
  child(t) {
    return new Pt();
  }
}
class uo {
  static __container_entry_key = "EmmitterService";
  handlers = [];
  debug;
  logger;
  constructor(t) {
    this.debug = t?.debug || !1, this.logger = t?.logger || new Pt(), this.debug && this.logger.debug("emmitter loaded with debug mode enabled");
  }
  static create(t) {
    return new uo(t);
  }
  setDebug(t) {
    this.debug = t, this.debug && this.logger.debug("debug mode enabled");
  }
  setLogger(t) {
    this.logger = t;
  }
  on(t, r, n) {
    const i = n?.id || Mm();
    if (n?.unique && this.handlers.some((a) => a.event === t && a.listener === r || a.id === i))
      return;
    const o = {
      id: i,
      event: t,
      listener: r
    };
    return this.handlers.push(o), this.debug && this.logger.debug("handler added", o), o;
  }
  once(t, r, n) {
    const i = (o, a) => {
      r(o, a), this.off(t, i);
    };
    return this.on(t, i, n);
  }
  onDebounce(t, r, n) {
    const i = Dm(r, n?.debounce || 300), o = this.on(t, i, n);
    return o && (o.originalListener = r), o;
  }
  onAnyOf(t, r, n) {
    const i = [];
    for (const o of t) {
      const a = this.on(o, r, n);
      a && i.push(a);
    }
    return i;
  }
  off(t, r) {
    this.handlers = this.handlers.filter((n) => !(n.event === t && (n.listener === r || n.originalListener === r))), this.debug && this.logger.debug("handler removed", { event: t });
  }
  emit(t, r) {
    this.debug && this.logger.debug("emitting event", {
      event: t,
      args: r
    });
    const n = this.handlers.filter((i) => i.event === t);
    for (const i of n)
      rr.sync(() => i.listener(r, { event: t }));
  }
  async emitAndWait(t, r) {
    const n = this.handlers.filter((i) => i.event === t);
    this.debug && this.logger.debug("emitting event and wait", {
      handlers: n.length,
      event: t,
      args: r
    });
    for await (const i of n)
      await i.listener(r, { event: t });
  }
  list() {
    return this.handlers;
  }
  listByEvent(t) {
    return this.handlers.filter((r) => r.event === t);
  }
  remove(t) {
    const r = Array.isArray(t) ? t : [t];
    this.handlers = this.handlers.filter((n) => !r.includes(n.id)), this.debug && this.logger.debug("handlers removed", { ids: r });
  }
  clear() {
    this.handlers = [], this.debug && this.logger.debug("all handlers cleared");
  }
  hasHandlers() {
    return this.handlers.length > 0;
  }
}
const ps = Se.proxy(uo);
class Rm {
  static __container_entry_key = "LayoutService";
  components = /* @__PURE__ */ new Map();
  options = {};
  currendId = null;
  setCurrent(t) {
    this.currendId = t, ps.emit("layout:change", t);
  }
  add(t, r, n) {
    this.components.set(t, r), this.options = n || {};
  }
  has(t) {
    return this.components.has(t);
  }
  get(t) {
    const r = this.components.get(t);
    if (!r)
      throw new Mr(`Layout ${t} not found`);
    return r;
  }
  getOptions() {
    return this.options;
  }
  getCurrent() {
    return this.currendId ? this.get(this.currendId) : null;
  }
  setOptions(t = {}) {
    this.options = t, ps.emit("layout:set-options", t);
  }
}
class vl {
  hook_id;
  hook_aliases;
  order;
  subhooks;
  async register() {
  }
  async load() {
  }
  async boot() {
  }
  async shutdown() {
  }
  /** @deprecated Use register */
  async onRegister() {
  }
  /** @deprecated Use load */
  async onLoad() {
  }
  /** @deprecated Use boot */
  async onBoot() {
  }
  /** @deprecated Use shutdown */
  async onShutdown() {
  }
}
function ml(e) {
  return e;
}
var Ri = dt($e, "WeakMap");
function lo(e) {
  return e != null && so(e.length) && !ll(e);
}
var Fm = Object.prototype;
function $m(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Fm;
  return e === r;
}
function Tm(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
function Cm() {
  return !1;
}
var gl = typeof exports == "object" && exports && !exports.nodeType && exports, ys = gl && typeof module == "object" && module && !module.nodeType && module, Nm = ys && ys.exports === gl, hs = Nm ? $e.Buffer : void 0, qm = hs ? hs.isBuffer : void 0, Fi = qm || Cm, Wm = "[object Arguments]", Lm = "[object Array]", zm = "[object Boolean]", Bm = "[object Date]", Gm = "[object Error]", Um = "[object Function]", Hm = "[object Map]", Vm = "[object Number]", Xm = "[object Object]", Ym = "[object RegExp]", Jm = "[object Set]", Km = "[object String]", Qm = "[object WeakMap]", Zm = "[object ArrayBuffer]", eg = "[object DataView]", tg = "[object Float32Array]", rg = "[object Float64Array]", ng = "[object Int8Array]", ig = "[object Int16Array]", og = "[object Int32Array]", ag = "[object Uint8Array]", sg = "[object Uint8ClampedArray]", ug = "[object Uint16Array]", lg = "[object Uint32Array]", ae = {};
ae[tg] = ae[rg] = ae[ng] = ae[ig] = ae[og] = ae[ag] = ae[sg] = ae[ug] = ae[lg] = !0;
ae[Wm] = ae[Lm] = ae[Zm] = ae[zm] = ae[eg] = ae[Bm] = ae[Gm] = ae[Um] = ae[Hm] = ae[Vm] = ae[Xm] = ae[Ym] = ae[Jm] = ae[Km] = ae[Qm] = !1;
function cg(e) {
  return _t(e) && so(e.length) && !!ae[St(e)];
}
function bl(e) {
  return function(t) {
    return e(t);
  };
}
var wl = typeof exports == "object" && exports && !exports.nodeType && exports, Xt = wl && typeof module == "object" && module && !module.nodeType && module, fg = Xt && Xt.exports === wl, Mn = fg && sl.process, ds = (function() {
  try {
    var e = Xt && Xt.require && Xt.require("util").types;
    return e || Mn && Mn.binding && Mn.binding("util");
  } catch {
  }
})(), vs = ds && ds.isTypedArray, _l = vs ? bl(vs) : cg, pg = Object.prototype, yg = pg.hasOwnProperty;
function hg(e, t) {
  var r = De(e), n = !r && hl(e), i = !r && !n && Fi(e), o = !r && !n && !i && _l(e), a = r || n || i || o, s = a ? Tm(e.length, String) : [], u = s.length;
  for (var l in e)
    yg.call(e, l) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    ao(l, u))) && s.push(l);
  return s;
}
function dg(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var vg = dg(Object.keys, Object), mg = Object.prototype, gg = mg.hasOwnProperty;
function bg(e) {
  if (!$m(e))
    return vg(e);
  var t = [];
  for (var r in Object(e))
    gg.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function co(e) {
  return lo(e) ? hg(e) : bg(e);
}
function wg(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function _g() {
  this.__data__ = new ze(), this.size = 0;
}
function xg(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Og(e) {
  return this.__data__.get(e);
}
function Eg(e) {
  return this.__data__.has(e);
}
var Ag = 200;
function kg(e, t) {
  var r = this.__data__;
  if (r instanceof ze) {
    var n = r.__data__;
    if (!Qt || n.length < Ag - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Be(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Le(e) {
  var t = this.__data__ = new ze(e);
  this.size = t.size;
}
Le.prototype.clear = _g;
Le.prototype.delete = xg;
Le.prototype.get = Og;
Le.prototype.has = Eg;
Le.prototype.set = kg;
function Sg(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function Pg() {
  return [];
}
var jg = Object.prototype, Dg = jg.propertyIsEnumerable, ms = Object.getOwnPropertySymbols, Ig = ms ? function(e) {
  return e == null ? [] : (e = Object(e), Sg(ms(e), function(t) {
    return Dg.call(e, t);
  }));
} : Pg;
function Mg(e, t, r) {
  var n = t(e);
  return De(e) ? n : wg(n, r(e));
}
function gs(e) {
  return Mg(e, co, Ig);
}
var $i = dt($e, "DataView"), Ti = dt($e, "Promise"), Ci = dt($e, "Set"), bs = "[object Map]", Rg = "[object Object]", ws = "[object Promise]", _s = "[object Set]", xs = "[object WeakMap]", Os = "[object DataView]", Fg = ht($i), $g = ht(Qt), Tg = ht(Ti), Cg = ht(Ci), Ng = ht(Ri), Ye = St;
($i && Ye(new $i(new ArrayBuffer(1))) != Os || Qt && Ye(new Qt()) != bs || Ti && Ye(Ti.resolve()) != ws || Ci && Ye(new Ci()) != _s || Ri && Ye(new Ri()) != xs) && (Ye = function(e) {
  var t = St(e), r = t == Rg ? e.constructor : void 0, n = r ? ht(r) : "";
  if (n)
    switch (n) {
      case Fg:
        return Os;
      case $g:
        return bs;
      case Tg:
        return ws;
      case Cg:
        return _s;
      case Ng:
        return xs;
    }
  return t;
});
var Es = $e.Uint8Array, qg = "__lodash_hash_undefined__";
function Wg(e) {
  return this.__data__.set(e, qg), this;
}
function Lg(e) {
  return this.__data__.has(e);
}
function wr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Be(); ++t < r; )
    this.add(e[t]);
}
wr.prototype.add = wr.prototype.push = Wg;
wr.prototype.has = Lg;
function zg(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Bg(e, t) {
  return e.has(t);
}
var Gg = 1, Ug = 2;
function xl(e, t, r, n, i, o) {
  var a = r & Gg, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(e), c = o.get(t);
  if (l && c)
    return l == t && c == e;
  var h = -1, x = !0, d = r & Ug ? new wr() : void 0;
  for (o.set(e, t), o.set(t, e); ++h < s; ) {
    var v = e[h], y = t[h];
    if (n)
      var g = a ? n(y, v, h, t, e, o) : n(v, y, h, e, t, o);
    if (g !== void 0) {
      if (g)
        continue;
      x = !1;
      break;
    }
    if (d) {
      if (!zg(t, function(S, w) {
        if (!Bg(d, w) && (v === S || i(v, S, r, n, o)))
          return d.push(w);
      })) {
        x = !1;
        break;
      }
    } else if (!(v === y || i(v, y, r, n, o))) {
      x = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), x;
}
function Hg(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Vg(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Xg = 1, Yg = 2, Jg = "[object Boolean]", Kg = "[object Date]", Qg = "[object Error]", Zg = "[object Map]", eb = "[object Number]", tb = "[object RegExp]", rb = "[object Set]", nb = "[object String]", ib = "[object Symbol]", ob = "[object ArrayBuffer]", ab = "[object DataView]", As = Je ? Je.prototype : void 0, Rn = As ? As.valueOf : void 0;
function sb(e, t, r, n, i, o, a) {
  switch (r) {
    case ab:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ob:
      return !(e.byteLength != t.byteLength || !o(new Es(e), new Es(t)));
    case Jg:
    case Kg:
    case eb:
      return no(+e, +t);
    case Qg:
      return e.name == t.name && e.message == t.message;
    case tb:
    case nb:
      return e == t + "";
    case Zg:
      var s = Hg;
    case rb:
      var u = n & Xg;
      if (s || (s = Vg), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      n |= Yg, a.set(e, t);
      var c = xl(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
    case ib:
      if (Rn)
        return Rn.call(e) == Rn.call(t);
  }
  return !1;
}
var ub = 1, lb = Object.prototype, cb = lb.hasOwnProperty;
function fb(e, t, r, n, i, o) {
  var a = r & ub, s = gs(e), u = s.length, l = gs(t), c = l.length;
  if (u != c && !a)
    return !1;
  for (var h = u; h--; ) {
    var x = s[h];
    if (!(a ? x in t : cb.call(t, x)))
      return !1;
  }
  var d = o.get(e), v = o.get(t);
  if (d && v)
    return d == t && v == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var g = a; ++h < u; ) {
    x = s[h];
    var S = e[x], w = t[x];
    if (n)
      var P = a ? n(w, S, x, t, e, o) : n(S, w, x, e, t, o);
    if (!(P === void 0 ? S === w || i(S, w, r, n, o) : P)) {
      y = !1;
      break;
    }
    g || (g = x == "constructor");
  }
  if (y && !g) {
    var D = e.constructor, j = t.constructor;
    D != j && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof j == "function" && j instanceof j) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var pb = 1, ks = "[object Arguments]", Ss = "[object Array]", yr = "[object Object]", yb = Object.prototype, Ps = yb.hasOwnProperty;
function hb(e, t, r, n, i, o) {
  var a = De(e), s = De(t), u = a ? Ss : Ye(e), l = s ? Ss : Ye(t);
  u = u == ks ? yr : u, l = l == ks ? yr : l;
  var c = u == yr, h = l == yr, x = u == l;
  if (x && Fi(e)) {
    if (!Fi(t))
      return !1;
    a = !0, c = !1;
  }
  if (x && !c)
    return o || (o = new Le()), a || _l(e) ? xl(e, t, r, n, i, o) : sb(e, t, u, r, n, i, o);
  if (!(r & pb)) {
    var d = c && Ps.call(e, "__wrapped__"), v = h && Ps.call(t, "__wrapped__");
    if (d || v) {
      var y = d ? e.value() : e, g = v ? t.value() : t;
      return o || (o = new Le()), i(y, g, r, n, o);
    }
  }
  return x ? (o || (o = new Le()), fb(e, t, r, n, i, o)) : !1;
}
function fo(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !_t(e) && !_t(t) ? e !== e && t !== t : hb(e, t, r, n, fo, i);
}
var db = 1, vb = 2;
function mb(e, t, r, n) {
  var i = r.length, o = i;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var a = r[i];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    a = r[i];
    var s = a[0], u = e[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var c = new Le(), h;
      if (!(h === void 0 ? fo(l, u, db | vb, n, c) : h))
        return !1;
    }
  }
  return !0;
}
function Ol(e) {
  return e === e && !Ke(e);
}
function gb(e) {
  for (var t = co(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Ol(i)];
  }
  return t;
}
function El(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function bb(e) {
  var t = gb(e);
  return t.length == 1 && t[0][2] ? El(t[0][0], t[0][1]) : function(r) {
    return r === e || mb(r, e, t);
  };
}
function wb(e, t) {
  return e != null && t in Object(e);
}
function _b(e, t) {
  return e != null && dl(e, t, wb);
}
var xb = 1, Ob = 2;
function Eb(e, t) {
  return io(e) && Ol(t) ? El(pt(e), t) : function(r) {
    var n = pl(r, e);
    return n === void 0 && n === t ? _b(r, e) : fo(t, n, xb | Ob);
  };
}
function Ab(e) {
  return function(t) {
    return t?.[e];
  };
}
function kb(e) {
  return function(t) {
    return Tr(t, e);
  };
}
function Sb(e) {
  return io(e) ? Ab(pt(e)) : kb(e);
}
function Pb(e) {
  return typeof e == "function" ? e : e == null ? ml : typeof e == "object" ? De(e) ? Eb(e[0], e[1]) : bb(e) : Sb(e);
}
function jb(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var u = a[++i];
      if (r(o[u], u, o) === !1)
        break;
    }
    return t;
  };
}
var Db = jb();
function Ib(e, t) {
  return e && Db(e, t, co);
}
function Mb(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!lo(r))
      return e(r, n);
    for (var i = r.length, o = -1, a = Object(r); ++o < i && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var Rb = Mb(Ib);
function Fb(e, t) {
  var r = -1, n = lo(e) ? Array(e.length) : [];
  return Rb(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function $b(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
function Tb(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, o = xt(e), a = t !== void 0, s = t === null, u = t === t, l = xt(t);
    if (!s && !l && !o && e > t || o && a && u && !s && !l || n && a && u || !r && u || !i)
      return 1;
    if (!n && !o && !l && e < t || l && r && i && !n && !o || s && r && i || !a && i || !u)
      return -1;
  }
  return 0;
}
function Cb(e, t, r) {
  for (var n = -1, i = e.criteria, o = t.criteria, a = i.length, s = r.length; ++n < a; ) {
    var u = Tb(i[n], o[n]);
    if (u) {
      if (n >= s)
        return u;
      var l = r[n];
      return u * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function Nb(e, t, r) {
  t.length ? t = gr(t, function(o) {
    return De(o) ? function(a) {
      return Tr(a, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [ml];
  var n = -1;
  t = gr(t, bl(Pb));
  var i = Fb(e, function(o, a, s) {
    var u = gr(t, function(l) {
      return l(o);
    });
    return { criteria: u, index: ++n, value: o };
  });
  return $b(i, function(o, a) {
    return Cb(o, a, r);
  });
}
function qb(e, t, r, n) {
  return e == null ? [] : (De(t) || (t = t == null ? [] : [t]), r = r, De(r) || (r = r == null ? [] : [r]), Nb(e, t, r));
}
let Wb = class {
  static __container_entry_key = "LifecycleService";
  hooks;
  logger;
  debug = !1;
  constructor(e = {}) {
    this.debug = e.debug ?? this.debug, this.hooks = e.hooks ?? /* @__PURE__ */ new Map(), this.logger = e.logger ?? new Pt(), e.onError && (this.onError = e.onError);
  }
  setOnError(e) {
    this.onError = e;
  }
  onError(e, t) {
    Object.assign(e, { context: t }), this.logger.error(`Error in hook ${t.method} (${t.hookId}):`, e);
  }
  mapAliases(e) {
    const t = [], r = Array.from(this.hooks.values());
    for (const n of r) {
      if (e.includes(n.hook_id)) {
        t.push(n.hook_id);
        continue;
      }
      n.hook_aliases && n.hook_aliases.find((i) => e.includes(i)) && t.push(n.hook_id);
    }
    return t;
  }
  list(e) {
    let t = Array.from(this.hooks.values());
    if (e?.exclude) {
      let r = Array.isArray(e.exclude) ? e.exclude : [e.exclude];
      r = this.mapAliases(r), t = t.filter((n) => !r.includes(n.hook_id));
    }
    if (e?.include) {
      let r = Array.isArray(e.include) ? e.include : [e.include];
      r = this.mapAliases(r), t = t.filter((n) => r.includes(n.hook_id));
    }
    return t = qb(t, ["order"], ["asc"]), t;
  }
  add(...e) {
    const t = [];
    for (const r of e) {
      if (typeof r == "function") {
        t.push(new r());
        continue;
      }
      t.push(r);
    }
    for (const r of t) {
      if (!r.hook_id) {
        this.logger.warn("Skipping hook without hook_id:", r);
        continue;
      }
      this.hooks.set(r.hook_id, r), this.debug && this.logger.debug("add " + r.hook_id), r.subhooks && r.subhooks.forEach((n) => this.add(n));
    }
  }
  async emitMethod(e, t) {
    const r = this.list(t);
    this.debug && this.logger.debug(`emitting ${e} for hooks:`, {
      hooks: r.map((n) => n.hook_id)
    });
    for (const n of this.list(t)) {
      const i = {
        register: () => Promise.all([n.register(), n.onRegister()]),
        load: () => Promise.all([n.load(), n.onLoad()]),
        boot: () => Promise.all([n.boot(), n.onBoot()]),
        shutdown: () => Promise.all([n.shutdown(), n.onShutdown()])
      }, [o] = await rr(() => i[e]());
      if (o) {
        this.onError(o, { hookId: n.hook_id, method: e });
        continue;
      }
      this.debug && this.logger.debug(`${e} ` + n.hook_id);
    }
  }
  async emit(e, t) {
    const r = Array.isArray(e) ? e : [e];
    for (const n of r)
      await this.emitMethod(n, t);
  }
  on(e, t) {
    const r = new vl();
    r.hook_id = `custom:${e}:${Date.now()}`, r[e] = t, this.add(r);
  }
  async register(e) {
    return this.emit("register", e);
  }
  async load(e) {
    return this.emit("load", e);
  }
  async boot(e) {
    return this.emit("boot", e);
  }
  async shutdown(e) {
    await this.emit("shutdown", e);
  }
  clear() {
    this.hooks.clear();
  }
};
class Lb extends Wb {
  addImports(t) {
    const r = [];
    for (const [n, i] of Object.entries(t)) {
      const o = i.default || i, a = new o();
      a.hook_id = a.hook_id || n, r.push(a);
    }
    r.forEach((n) => this.add(n));
  }
}
class zb extends nr(ir) {
  id;
  label;
  layout;
  to;
  target;
  group;
  order;
  icon;
  parent;
}
class Al {
  constructor(t, r) {
    this.operator = t, this.value = r, Object.defineProperty(this, "t", { writable: !0 });
  }
  get notes() {
    return this.t;
  }
  addNote(t) {
    this.t = this.t || [], this.t.push(t);
  }
}
let po = class extends Al {
}, Cr = class extends po {
  constructor(e, t) {
    if (!Array.isArray(t)) throw new Error(`"${e}" operator expects to receive an array of conditions`);
    super(e, t);
  }
};
const or = "__itself__";
let Nr = class extends Al {
  constructor(e, t, r) {
    super(e, r), this.field = t;
  }
};
const kl = new po("__null__", null), Ni = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
function Bb(e, t) {
  return t instanceof Cr && t.operator === e;
}
function Sl(e, t) {
  return t.length === 1 ? t[0] : new Cr(e, (function r(n, i, o) {
    const a = o || [];
    for (let s = 0, u = i.length; s < u; s++) {
      const l = i[s];
      Bb(n, l) ? r(n, l.value, a) : a.push(l);
    }
    return a;
  })(e, t));
}
const Gb = (e) => e, Pl = () => /* @__PURE__ */ Object.create(null), jl = Object.defineProperty(Pl(), "__@type@__", { value: "ignore value" });
function Ub(e, t, r = !1) {
  if (!e || e && e.constructor !== Object) return !1;
  for (const n in e)
    if (Ni(e, n) && Ni(t, n) && (!r || e[n] !== jl)) return !0;
  return !1;
}
function Hb(e) {
  const t = [];
  for (const r in e) Ni(e, r) && e[r] !== jl && t.push(r);
  return t;
}
function Fn(e, t) {
  t !== kl && e.push(t);
}
const Dl = (e) => Sl("and", e), Il = { compound(e, t, r) {
  const n = (Array.isArray(t) ? t : [t]).map((i) => r.parse(i));
  return new Cr(e.name, n);
}, field: (e, t, r) => new Nr(e.name, r.field, t), document: (e, t) => new po(e.name, t) };
let Vb = class {
  constructor(e, t = Pl()) {
    this.o = void 0, this.s = void 0, this.i = void 0, this.u = void 0, this.h = void 0, this.parse = this.parse.bind(this), this.u = { operatorToConditionName: t.operatorToConditionName || Gb, defaultOperatorName: t.defaultOperatorName || "eq", mergeFinalConditions: t.mergeFinalConditions || Dl }, this.o = Object.keys(e).reduce((r, n) => (r[n] = Object.assign({ name: this.u.operatorToConditionName(n) }, e[n]), r), {}), this.s = Object.assign({}, t.fieldContext, { field: "", query: {}, parse: this.parse, hasOperators: (r) => Ub(r, this.o, t.useIgnoreValue) }), this.i = Object.assign({}, t.documentContext, { parse: this.parse, query: {} }), this.h = t.useIgnoreValue ? Hb : Object.keys;
  }
  setParse(e) {
    this.parse = e, this.s.parse = e, this.i.parse = e;
  }
  parseField(e, t, r, n) {
    const i = this.o[t];
    if (!i) throw new Error(`Unsupported operator "${t}"`);
    if (i.type !== "field") throw new Error(`Unexpected ${i.type} operator "${t}" at field level`);
    return this.s.field = e, this.s.query = n, this.parseInstruction(i, r, this.s);
  }
  parseInstruction(e, t, r) {
    return typeof e.validate == "function" && e.validate(e, t), (e.parse || Il[e.type])(e, t, r);
  }
  parseFieldOperators(e, t) {
    const r = [], n = this.h(t);
    for (let i = 0, o = n.length; i < o; i++) {
      const a = n[i];
      if (!this.o[a]) throw new Error(`Field query for "${e}" may contain only operators or a plain object as a value`);
      Fn(r, this.parseField(e, a, t[a], t));
    }
    return r;
  }
  parse(e) {
    const t = [], r = this.h(e);
    this.i.query = e;
    for (let n = 0, i = r.length; n < i; n++) {
      const o = r[n], a = e[o], s = this.o[o];
      if (s) {
        if (s.type !== "document" && s.type !== "compound") throw new Error(`Cannot use parsing instruction for operator "${o}" in "document" context as it is supposed to be used in  "${s.type}" context`);
        Fn(t, this.parseInstruction(s, a, this.i));
      } else this.s.hasOperators(a) ? t.push(...this.parseFieldOperators(o, a)) : Fn(t, this.parseField(o, this.u.defaultOperatorName, a, e));
    }
    return this.u.mergeFinalConditions(t);
  }
};
function $n(e, t) {
  const r = e[t];
  if (typeof r != "function") throw new Error(`Unable to interpret "${t}" condition. Did you forget to register interpreter for it?`);
  return r;
}
function Xb(e) {
  return e.operator;
}
function Yb(e, t) {
  const r = t, n = r && r.getInterpreterName || Xb;
  let i;
  switch (r ? r.numberOfArguments : 0) {
    case 1:
      i = (a) => {
        const s = n(a, r);
        return $n(e, s)(a, o);
      };
      break;
    case 3:
      i = (a, s, u) => {
        const l = n(a, r);
        return $n(e, l)(a, s, u, o);
      };
      break;
    default:
      i = (a, s) => {
        const u = n(a, r);
        return $n(e, u)(a, s, o);
      };
  }
  const o = Object.assign({}, r, { interpret: i });
  return o.interpret;
}
function Jb(e, t) {
  return (r, ...n) => {
    const i = e(r, ...n), o = t.bind(null, i);
    return o.ast = i, o;
  };
}
function Ml(e, t) {
  if (!Array.isArray(t)) throw new Error(`"${e.name}" expects value to be an array`);
}
function Rl(e, t) {
  if (Ml(e, t), !t.length) throw new Error(`"${e.name}" expects to have at least one element in array`);
}
const yo = (e) => (t, r) => {
  if (typeof r !== e) throw new Error(`"${t.name}" expects value to be a "${e}"`);
}, Fl = { type: "compound", validate: Rl, parse(e, t, { parse: r }) {
  const n = t.map((i) => r(i));
  return Sl(e.name, n);
} }, Kb = Fl, Qb = { type: "compound", validate: Rl }, Zb = { type: "field", validate(e, t) {
  if (!(t && (t instanceof RegExp || t.constructor === Object))) throw new Error(`"${e.name}" expects to receive either regular expression or object of field operators`);
}, parse(e, t, r) {
  const n = t instanceof RegExp ? new Nr("regex", r.field, t) : r.parse(t, r);
  return new Cr(e.name, [n]);
} }, $l = { type: "field", validate(e, t) {
  if (!t || t.constructor !== Object) throw new Error(`"${e.name}" expects to receive an object with nested query or field level operators`);
}, parse(e, t, { parse: r, field: n, hasOperators: i }) {
  const o = i(t) ? r(t, { field: or }) : r(t);
  return new Nr(e.name, n, o);
} }, Tl = { type: "field", validate: yo("number") }, qr = { type: "field", validate: Ml }, Cl = qr, Nl = qr, ew = { type: "field", validate(e, t) {
  if (!Array.isArray(t) || t.length !== 2) throw new Error(`"${e.name}" expects an array with 2 numeric elements`);
} }, ql = { type: "field", validate: yo("boolean") }, ho = { type: "field", validate: function(e, t) {
  if (!(typeof t == "string" || typeof t == "number" || t instanceof Date)) throw new Error(`"${e.name}" expects value to be comparable (i.e., string, number or date)`);
} }, Wr = ho, Wl = Wr, Ll = Wr, vo = { type: "field" }, zl = vo, Bl = { type: "field", validate(e, t) {
  if (!(t instanceof RegExp) && typeof t != "string") throw new Error(`"${e.name}" expects value to be a regular expression or a string that represents regular expression`);
}, parse(e, t, r) {
  const n = typeof t == "string" ? new RegExp(t, r.query.$options || "") : t;
  return new Nr(e.name, r.field, n);
} }, Gl = { type: "field", parse: () => kl }, tw = { type: "document", validate: yo("function") };
var rw = Object.freeze({ __proto__: null, $and: Fl, $or: Kb, $nor: Qb, $not: Zb, $elemMatch: $l, $size: Tl, $in: qr, $nin: Cl, $all: Nl, $mod: ew, $exists: ql, $gte: ho, $gt: Wr, $lt: Wl, $lte: Ll, $eq: vo, $ne: zl, $regex: Bl, $options: Gl, $where: tw });
let nw = class extends Vb {
  constructor(e) {
    super(e, { defaultOperatorName: "$eq", operatorToConditionName: (t) => t.slice(1) });
  }
  parse(e, t) {
    return t && t.field ? Dl(this.parseFieldOperators(t.field, e)) : super.parse(e);
  }
};
const qi = rw;
function mo(e, t, r) {
  for (let n = 0, i = e.length; n < i; n++) if (r(e[n], t) === 0) return !0;
  return !1;
}
function go(e, t) {
  return Array.isArray(e) && Number.isNaN(Number(t));
}
function js(e, t, r) {
  if (!go(e, t)) return r(e, t);
  let n = [];
  for (let i = 0; i < e.length; i++) {
    const o = r(e[i], t);
    o !== void 0 && (n = n.concat(o));
  }
  return n;
}
function vt(e) {
  return (t, r, n) => {
    const i = n.get(r, t.field);
    return Array.isArray(i) ? i.some((o) => e(t, o, n)) : e(t, i, n);
  };
}
const iw = Object.hasOwn || Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty), ow = (e, t) => e[t];
function Ul(e, t, r) {
  const n = t.lastIndexOf(".");
  return n === -1 ? [e, t] : [r(e, t.slice(0, n)), t.slice(n + 1)];
}
function aw(e, t, r = ow) {
  if (t === or) return e;
  if (!e) throw new Error(`Unable to get field "${t}" out of ${String(e)}.`);
  return (function(n, i, o) {
    if (i.indexOf(".") === -1) return js(n, i, o);
    const a = i.split(".");
    let s = n;
    for (let u = 0, l = a.length; u < l; u++) if (s = js(s, a[u], o), !s || typeof s != "object") return u < l - 1 ? void 0 : s;
    return s;
  })(e, t, r);
}
function Hl(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Vl(e, t = {}) {
  return Yb(e, Object.assign({ get: aw, compare: Hl }, t));
}
const Xl = (e, t, { interpret: r }) => e.value.some((n) => r(n, t)), sw = (e, t, r) => !Xl(e, t, r), Yl = (e, t, { interpret: r }) => e.value.every((n) => r(n, t)), uw = (e, t, { interpret: r }) => !r(e.value[0], t), bo = (e, t, { compare: r, get: n }) => {
  const i = n(t, e.field);
  return Array.isArray(i) && !Array.isArray(e.value) ? mo(i, e.value, r) : r(i, e.value) === 0;
}, Jl = (e, t, r) => !bo(e, t, r), Kl = vt((e, t, r) => {
  const n = r.compare(t, e.value);
  return n === 0 || n === -1;
}), Ql = vt((e, t, r) => r.compare(t, e.value) === -1), Zl = vt((e, t, r) => r.compare(t, e.value) === 1), ec = vt((e, t, r) => {
  const n = r.compare(t, e.value);
  return n === 0 || n === 1;
}), tc = (e, t, { get: r }) => {
  if (e.field === or) return t !== void 0;
  const [n, i] = Ul(t, e.field, r), o = (a) => a == null ? !!a === e.value : iw(a, i) === e.value;
  return go(n, i) ? n.some(o) : o(n);
}, lw = vt((e, t) => typeof t == "number" && t % e.value[0] === e.value[1]), rc = (e, t, { get: r }) => {
  const [n, i] = Ul(t, e.field, r), o = (a) => {
    const s = r(a, i);
    return Array.isArray(s) && s.length === e.value;
  };
  return e.field !== or && go(n, i) ? n.some(o) : o(n);
}, nc = vt((e, t) => typeof t == "string" && e.value.test(t)), Lr = vt((e, t, { compare: r }) => mo(e.value, t, r)), ic = (e, t, r) => !Lr(e, t, r), oc = (e, t, { compare: r, get: n }) => {
  const i = n(t, e.field);
  return Array.isArray(i) && e.value.every((o) => mo(i, o, r));
}, ac = (e, t, { interpret: r, get: n }) => {
  const i = n(t, e.field);
  return Array.isArray(i) && i.some((o) => r(e.value, o));
}, cw = (e, t) => e.value.call(t);
var fw = Object.freeze({ __proto__: null, or: Xl, nor: sw, and: Yl, not: uw, eq: bo, ne: Jl, lte: Kl, lt: Ql, gt: Zl, gte: ec, exists: tc, mod: lw, size: rc, regex: nc, within: Lr, nin: ic, all: oc, elemMatch: ac, where: cw });
const wo = Object.assign({}, fw, { in: Lr });
Vl(wo);
function Ds(e) {
  return e === null || typeof e != "object" ? e : e instanceof Date ? e.getTime() : e && typeof e.toJSON == "function" ? e.toJSON() : e;
}
const pw = (e, t) => Hl(Ds(e), Ds(t));
function _o(e, t, r) {
  const n = new nw(e), i = Vl(t, Object.assign({ compare: pw }, r));
  if (r && r.forPrimitives) {
    const o = { field: or }, a = n.parse;
    n.setParse((s) => a(s, o));
  }
  return Jb(n.parse, i);
}
_o(qi, wo);
_o(["$and", "$or"].reduce((e, t) => (e[t] = Object.assign({}, e[t], { type: "field" }), e), Object.assign({}, qi, { $nor: Object.assign({}, qi.$nor, { type: "field", parse: Il.compound }) })), wo, { forPrimitives: !0 });
const sc = Object.hasOwn || ((e, t) => Object.prototype.hasOwnProperty.call(e, t));
function Wi(e) {
  return Array.isArray(e) ? e : [e];
}
const wt = "__caslSubjectType__";
function Tn(e, t) {
  if (t) {
    if (!sc(t, wt)) Object.defineProperty(t, wt, { value: e });
    else if (e !== t[wt]) throw new Error(`Trying to cast object to subject type ${e} but previously it was casted to ${t[wt]}`);
  }
  return t;
}
const br = (e) => {
  const t = typeof e;
  return t === "string" || t === "function";
}, yw = (e) => e.modelName || e.name;
function uc(e) {
  return sc(e, wt) ? e[wt] : yw(e.constructor);
}
const Is = { function: (e) => e.constructor, string: uc };
function Ms(e, t, r) {
  for (let n = r; n < t.length; n++) e.push(t[n]);
}
function Rs(e, t) {
  if (!e || !e.length) return t || [];
  if (!t || !t.length) return e || [];
  let r = 0, n = 0;
  const i = [];
  for (; r < e.length && n < t.length; ) e[r].priority < t[n].priority ? (i.push(e[r]), r++) : e[r].priority > t[n].priority ? (i.push(t[n]), n++) : (i.push(e[r]), r++, n++);
  return Ms(i, e, r), Ms(i, t, n), i;
}
function hr(e, t, r) {
  let n = e.get(t);
  return n || (n = r(), e.set(t, n)), n;
}
const hw = (e) => e;
function dw(e, t) {
  let r;
  for (let n = 0; n < e.length; n++) {
    const i = t(e[n]);
    r && i && r.push(e[n]), i || (r ??= e.slice(0, n));
  }
  return r || e;
}
function vw(e, t) {
  if (Array.isArray(e.fields) && !e.fields.length) throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");
  if (e.fields && !t.fieldMatcher) throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');
  if (e.conditions && !t.conditionsMatcher) throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions');
}
class mw {
  constructor(t, r, n = 0) {
    vw(t, r), this.action = r.resolveAction(t.action), this.subject = t.subject, this.inverted = !!t.inverted, this.conditions = t.conditions, this.reason = t.reason, this.origin = t, this.fields = t.fields ? Wi(t.fields) : void 0, this.priority = n, this.t = r;
  }
  i() {
    return this.conditions && !this.o && (this.o = this.t.conditionsMatcher(this.conditions)), this.o;
  }
  get ast() {
    const t = this.i();
    return t ? t.ast : void 0;
  }
  matchesConditions(t) {
    return this.conditions ? !t || br(t) ? !this.inverted : this.i()(t) : !0;
  }
  matchesField(t) {
    return this.fields ? t ? (this.u || (this.u = this.t.fieldMatcher(this.fields)), this.u(t)) : !this.inverted : !0;
  }
}
function gw(e, t) {
  const r = { value: e, prev: t, next: null };
  return t && (t.next = r), r;
}
function bw(e) {
  e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
}
const Fs = () => ({ rules: [], merged: !1 }), $s = () => /* @__PURE__ */ new Map();
class ww {
  constructor(t = [], r = {}) {
    this.h = !1, this.l = /* @__PURE__ */ new Map(), this.p = { conditionsMatcher: r.conditionsMatcher, fieldMatcher: r.fieldMatcher, resolveAction: r.resolveAction || hw }, this.$ = r.anyAction || "manage", this.A = r.anySubjectType || "all", this.m = t, this.M = !!r.detectSubjectType, this.j = r.detectSubjectType || uc, this.v(t);
  }
  get rules() {
    return this.m;
  }
  detectSubjectType(t) {
    return br(t) ? t : t ? this.j(t) : this.A;
  }
  update(t) {
    const r = { rules: t, ability: this, target: this };
    return this._("update", r), this.m = t, this.v(t), this._("updated", r), this;
  }
  v(t) {
    const r = /* @__PURE__ */ new Map();
    let n;
    for (let i = t.length - 1; i >= 0; i--) {
      const o = t.length - i - 1, a = new mw(t[i], this.p, o), s = Wi(a.action), u = Wi(a.subject || this.A);
      !this.h && a.fields && (this.h = !0);
      for (let l = 0; l < u.length; l++) {
        const c = hr(r, u[l], $s);
        n === void 0 && (n = typeof u[l]), typeof u[l] !== n && n !== "mixed" && (n = "mixed");
        for (let h = 0; h < s.length; h++) hr(c, s[h], Fs).rules.push(a);
      }
    }
    if (this.l = r, n !== "mixed" && !this.M) {
      const i = Is[n] || Is.string;
      this.j = i;
    }
  }
  possibleRulesFor(t, r = this.A) {
    if (!br(r)) throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');
    const n = hr(this.l, r, $s), i = hr(n, t, Fs);
    if (i.merged) return i.rules;
    const o = t !== this.$ && n.has(this.$) ? n.get(this.$).rules : void 0;
    let a = Rs(i.rules, o);
    return r !== this.A && (a = Rs(a, this.possibleRulesFor(t, this.A))), i.rules = a, i.merged = !0, a;
  }
  rulesFor(t, r, n) {
    const i = this.possibleRulesFor(t, r);
    if (n && typeof n != "string") throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");
    return this.h ? dw(i, (o) => o.matchesField(n)) : i;
  }
  actionsFor(t) {
    if (!br(t)) throw new Error('"actionsFor" accepts only subject types (i.e., string or class) as a parameter');
    const r = /* @__PURE__ */ new Set(), n = this.l.get(t);
    n && Array.from(n.keys()).forEach((o) => r.add(o));
    const i = t !== this.A ? this.l.get(this.A) : void 0;
    return i && Array.from(i.keys()).forEach((o) => r.add(o)), Array.from(r);
  }
  on(t, r) {
    this.F = this.F || /* @__PURE__ */ new Map();
    const n = this.F, i = n.get(t) || null, o = gw(r, i);
    return n.set(t, o), () => {
      const a = n.get(t);
      !o.next && !o.prev && a === o ? n.delete(t) : o === a && n.set(t, o.prev), bw(o);
    };
  }
  _(t, r) {
    if (!this.F) return;
    let n = this.F.get(t) || null;
    const i = [];
    for (; n !== null; )
      i.push(n.value), n = n.prev;
    for (let o = 0; o < i.length; o++) i[o](r);
  }
}
class _w extends ww {
  can(t, r, n) {
    const i = this.relevantRuleFor(t, r, n);
    return !!i && !i.inverted;
  }
  relevantRuleFor(t, r, n) {
    const i = this.detectSubjectType(r), o = this.rulesFor(t, i, n);
    for (let a = 0, s = o.length; a < s; a++) if (o[a].matchesConditions(r)) return o[a];
    return null;
  }
  cannot(t, r, n) {
    return !this.can(t, r, n);
  }
}
const xw = { $eq: vo, $ne: zl, $lt: Wl, $lte: Ll, $gt: Wr, $gte: ho, $in: qr, $nin: Cl, $all: Nl, $size: Tl, $regex: Bl, $options: Gl, $elemMatch: $l, $exists: ql }, Ow = { eq: bo, ne: Jl, lt: Ql, lte: Kl, gt: Zl, gte: ec, in: Lr, nin: ic, all: oc, size: rc, regex: nc, elemMatch: ac, exists: tc, and: Yl }, Ew = _o(xw, Ow), Aw = /[-/\\^$+?.()|[\]{}]/g, kw = /\.?\*+\.?/g, Sw = /\*+/, Pw = /\./g;
function jw(e, t, r) {
  const n = r[0] === "*" || e[0] === "." && e[e.length - 1] === "." ? "+" : "*", i = e.indexOf("**") === -1 ? "[^.]" : ".", o = e.replace(Pw, "\\$&").replace(Sw, i + n);
  return t + e.length === r.length ? `(?:${o})?` : o;
}
function Dw(e, t, r) {
  return e === "." && (r[t - 1] === "*" || r[t + 1] === "*") ? e : `\\${e}`;
}
function Iw(e) {
  const t = e.map((n) => n.replace(Aw, Dw).replace(kw, jw)), r = t.length > 1 ? `(?:${t.join("|")})` : t[0];
  return new RegExp(`^${r}$`);
}
const Mw = (e) => {
  let t;
  return (r) => (typeof t > "u" && (t = e.every((n) => n.indexOf("*") === -1) ? null : Iw(e)), t === null ? e.indexOf(r) !== -1 : t.test(r));
};
function Rw(e = [], t = {}) {
  return new _w(e, Object.assign({ conditionsMatcher: Ew, fieldMatcher: Mw }, t));
}
function Fw(e) {
  return e.prototype !== void 0 && typeof e.prototype.possibleRulesFor == "function";
}
class $w {
  constructor(t) {
    this.O = t;
  }
  because(t) {
    return this.O.reason = t, this;
  }
}
class Tw {
  constructor(t) {
    this.rules = [], this.C = t, this.can = (r, n, i, o) => this.R(r, n, i, o, !1), this.cannot = (r, n, i, o) => this.R(r, n, i, o, !0), this.build = (r) => Fw(this.C) ? new this.C(this.rules, r) : this.C(this.rules, r);
  }
  R(t, r, n, i, o) {
    const a = { action: t };
    return o && (a.inverted = o), r && (a.subject = r, Array.isArray(n) || typeof n == "string" ? a.fields = n : typeof n < "u" && (a.conditions = n), typeof i < "u" && (a.conditions = i)), this.rules.push(a), new $w(a);
  }
}
function Cw(e, t) {
  const r = new Tw(Rw), n = e(r.can, r.cannot);
  return n && typeof n.then == "function" ? n.then(() => r.build(t)) : r.build(t);
}
class Nw extends nr(ir) {
  id;
  name;
  description = null;
  origin;
  subject;
  action;
  conditions = null;
  get editable() {
    return this.origin === "custom";
  }
  get parsedConditions() {
    if (!this.conditions)
      return {};
    const [t, r] = rr.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return t ? {} : r;
  }
}
class qw {
  static __container_entry_key = "AclEntity";
  ability;
  permissions;
  debug = !1;
  logger;
  constructor(t = {}) {
    const r = (t.permissions || []).map((n) => Nw.from(n));
    this.permissions = r, this.debug = t.debug || !1, this.logger = t.logger || new Pt().child({ label: "acl" }), this.ability = Cw((n) => {
      r.forEach((i) => {
        n(i.action, i.subject, i.parsedConditions);
      });
    }), this.debug && this.logger.debug("initialized in debug mode", {
      permissions: this.permissions
    });
  }
  can(t, r, n) {
    if (!n)
      return this.ability.can(t, r);
    const i = Tn(r, n);
    return this.ability.can(t, i);
  }
  cannot(t, r, n) {
    if (!n)
      return this.ability.cannot(t, r);
    const i = Tn(r, n);
    return this.ability.cannot(t, i);
  }
  subject(t, r) {
    return Tn(t, r);
  }
}
const Ww = Se.proxy(qw);
class Lw {
  static __container_entry_key = "MenuService";
  items = /* @__PURE__ */ new Map();
  add(...t) {
    for (const r of t)
      r.id || (r.id = JSON.stringify(r)), this.items.set(r.id, zb.from(r));
  }
  remove(t) {
    this.items.delete(t);
  }
  list(t = {}) {
    let r = JSON.parse(JSON.stringify(Array.from(this.items.values())));
    return t.layout && (r = r.filter((n) => n.layout === t.layout)), t.group && (r = r.filter((n) => n.group === t.group || n.parent === t.group)), t.parent && (r = r.filter((n) => n.parent === t.parent)), t.allowed !== void 0 && t.allowed === !0 && (r = r.filter((n) => Ww.can("view", n))), r.sort((n, i) => {
      const o = n.order ? n.order : 98, a = i.order ? i.order : 98;
      return o - a;
    }), r;
  }
  clear() {
    this.items.clear();
  }
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
let Cn;
// @__NO_SIDE_EFFECTS__
function xo(e) {
  return {
    lang: e?.lang ?? Cn?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? Cn?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? Cn?.abortPipeEarly
  };
}
// @__NO_SIDE_EFFECTS__
function zw(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ xo());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bw(e) {
  if (e.path) {
    let t = "";
    for (const r of e.path) if (typeof r.key == "string" || typeof r.key == "number") t ? t += `.${r.key}` : t += r.key;
    else return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function lc(e, t, r) {
  return typeof e.default == "function" ? e.default(t, r) : e.default;
}
// @__NO_SIDE_EFFECTS__
function cc(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: cc,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ zw(this);
    },
    "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = /* @__PURE__ */ lc(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gw(e, t, r) {
  const n = e["~run"]({ value: t }, /* @__PURE__ */ xo(r));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function Uw(e, t, r) {
  const n = await e["~run"]({ value: t }, /* @__PURE__ */ xo(r));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
const _r = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function fc(e) {
  return Number(e) >= 0;
}
function Hw(e) {
  return typeof e == "object" && e !== null;
}
function Vw(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Ts(e) {
  if (!Hw(e) || Vw(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function pc(e, t) {
  return Object.keys(t).forEach((r) => {
    if (Ts(t[r]) && Ts(e[r])) {
      e[r] || (e[r] = {}), pc(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function Xw(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let n = 1; n < t.length; n++) {
    if (fc(t[n])) {
      r += `[${t[n]}]`;
      continue;
    }
    r += `.${t[n]}`;
  }
  return r;
}
function Yw(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(r) {
      const n = await /* @__PURE__ */ Uw(e, r, t);
      if (n.success)
        return {
          value: n.output,
          errors: []
        };
      const i = {};
      return yc(n.issues, i), {
        errors: Object.values(i)
      };
    },
    cast(r) {
      if (e.async)
        return r;
      const n = /* @__PURE__ */ Gw(e, r, t);
      if (n.success)
        return n.output;
      const i = /* @__PURE__ */ lc(/* @__PURE__ */ cc(e));
      return _r(i) && _r(r) ? pc(i, r) : r;
    },
    describe(r) {
      try {
        if (!r)
          return {
            required: !Cs(e),
            exists: !0
          };
        const n = Li(r, e);
        return n ? {
          required: !Cs(n),
          exists: !0
        } : {
          required: !1,
          exists: !1
        };
      } catch {
        return {
          required: !1,
          exists: !1
        };
      }
    }
  };
}
function yc(e, t) {
  e.forEach((r) => {
    const n = Xw(/* @__PURE__ */ Bw(r) || "");
    r.issues && (yc(r.issues.flatMap((i) => i.issues || []), t), !n) || (t[n] || (t[n] = { errors: [], path: n }), t[n].errors.push(r.message));
  });
}
function Li(e, t) {
  var r, n, i, o;
  if (Ns(t))
    return (r = t.options.map((u) => Li(e, u)).find(Boolean)) !== null && r !== void 0 ? r : null;
  if (qs(t))
    return (n = t.options.map((u) => Li(e, u)).find(Boolean)) !== null && n !== void 0 ? n : null;
  if (!dr(t))
    return null;
  if (Zh(e))
    return t.entries[ed(e)];
  const a = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let s = t;
  for (let u = 0; u <= a.length; u++) {
    const l = a[u];
    if (!l || !s)
      return s;
    if (Ns(s) && (s = (i = s.options.find((c) => dr(c) && c.entries[l])) !== null && i !== void 0 ? i : s), qs(s) && (s = (o = s.options.find((c) => dr(c) && c.entries[l])) !== null && o !== void 0 ? o : s), dr(s)) {
      s = s.entries[l] || null;
      continue;
    }
    fc(l) && Jw(s) && (s = s.item);
  }
  return null;
}
function Cs(e) {
  return e.type === "optional";
}
function Jw(e) {
  return _r(e) && "item" in e;
}
function dr(e) {
  return _r(e) && "entries" in e;
}
function Ns(e) {
  return e.type === "intersect";
}
function qs(e) {
  return e.type === "variant";
}
const jE = Kw;
function Kw(e, t = {}) {
  return Qh({
    ...t,
    validationSchema: Yw(e)
  });
}
const hc = globalThis, Qw = hc.layout || new Rm();
hc.layout = Qw;
Kh(/* @__PURE__ */ new Map());
const DE = Se.proxy("route"), zi = Se.proxy("router");
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zw = Se.proxy(Bd);
class e0 {
  static __container_entry_key = "DashboardWidgetRegistry";
  definitions = /* @__PURE__ */ new Map();
  register(...t) {
    for (const r of t)
      this.definitions.set(r.id, r);
  }
  get(t) {
    return this.definitions.get(t) || null;
  }
  list() {
    return Array.from(this.definitions.values());
  }
}
Se.proxy(e0);
const t0 = Se.proxy(Lb);
Se.proxy(Pt);
const Ws = Se.proxy(Lw);
let r0 = class extends nr(ir, Wd(vl)) {
  id;
  name;
  enabled = !1;
  dependencies = {};
  build = {};
  directory;
  upgrade_info;
  setData(e) {
    const t = Object.fromEntries(
      Object.entries(e).filter(([, r]) => r !== void 0)
    );
    Object.assign(this, t), this.hook_id = `module:${this.id}`;
  }
};
class IE extends al(r0) {
}
let n0 = class extends nr(ir) {
  id;
  name;
  version;
  enabled;
  aliases;
  version_channel;
  version_available_channels;
};
class i0 extends al(n0) {
  addPagesFolder(t, r) {
    zi.auto(t, r);
  }
  async load() {
  }
}
function ME(e) {
  return e;
}
function RE(e) {
  return e;
}
const FE = ol;
function o0(e) {
  const t = e.exclude || ["/auth/login", "/auth/register"];
  return (r) => {
    if (!Zw.user && !t.includes(r.path))
      return typeof e.redirect == "function" ? e.redirect(r) : e.redirect;
  };
}
const a0 = o0({
  redirect: (e) => "/auth/login?redirect=" + encodeURIComponent(e.fullPath)
});
var s0 = typeof global == "object" && global && global.Object === Object && global, u0 = typeof self == "object" && self && self.Object === Object && self, Oo = s0 || u0 || Function("return this")(), Ot = Oo.Symbol, dc = Object.prototype, l0 = dc.hasOwnProperty, c0 = dc.toString, Gt = Ot ? Ot.toStringTag : void 0;
function f0(e) {
  var t = l0.call(e, Gt), r = e[Gt];
  try {
    e[Gt] = void 0;
    var n = !0;
  } catch {
  }
  var i = c0.call(e);
  return n && (t ? e[Gt] = r : delete e[Gt]), i;
}
var p0 = Object.prototype, y0 = p0.toString;
function h0(e) {
  return y0.call(e);
}
var d0 = "[object Null]", v0 = "[object Undefined]", Ls = Ot ? Ot.toStringTag : void 0;
function vc(e) {
  return e == null ? e === void 0 ? v0 : d0 : Ls && Ls in Object(e) ? f0(e) : h0(e);
}
function xr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var m0 = "[object AsyncFunction]", g0 = "[object Function]", b0 = "[object GeneratorFunction]", w0 = "[object Proxy]";
function _0(e) {
  if (!xr(e))
    return !1;
  var t = vc(e);
  return t == g0 || t == b0 || t == m0 || t == w0;
}
var Nn = Oo["__core-js_shared__"], zs = (function() {
  var e = /[^.]+$/.exec(Nn && Nn.keys && Nn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function x0(e) {
  return !!zs && zs in e;
}
var O0 = Function.prototype, E0 = O0.toString;
function A0(e) {
  if (e != null) {
    try {
      return E0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var k0 = /[\\^$.*+?()[\]{}|]/g, S0 = /^\[object .+?Constructor\]$/, P0 = Function.prototype, j0 = Object.prototype, D0 = P0.toString, I0 = j0.hasOwnProperty, M0 = RegExp(
  "^" + D0.call(I0).replace(k0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function R0(e) {
  if (!xr(e) || x0(e))
    return !1;
  var t = _0(e) ? M0 : S0;
  return t.test(A0(e));
}
function F0(e, t) {
  return e?.[t];
}
function Eo(e, t) {
  var r = F0(e, t);
  return R0(r) ? r : void 0;
}
var Bs = (function() {
  try {
    var e = Eo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function $0(e, t, r) {
  t == "__proto__" && Bs ? Bs(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function mc(e, t) {
  return e === t || e !== e && t !== t;
}
var T0 = Object.prototype, C0 = T0.hasOwnProperty;
function N0(e, t, r) {
  var n = e[t];
  (!(C0.call(e, t) && mc(n, r)) || r === void 0 && !(t in e)) && $0(e, t, r);
}
var Ao = Array.isArray;
function q0(e) {
  return e != null && typeof e == "object";
}
var W0 = "[object Symbol]";
function ko(e) {
  return typeof e == "symbol" || q0(e) && vc(e) == W0;
}
var L0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, z0 = /^\w*$/;
function B0(e, t) {
  if (Ao(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ko(e) ? !0 : z0.test(e) || !L0.test(e) || t != null && e in Object(t);
}
var Zt = Eo(Object, "create");
function G0() {
  this.__data__ = Zt ? Zt(null) : {}, this.size = 0;
}
function U0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var H0 = "__lodash_hash_undefined__", V0 = Object.prototype, X0 = V0.hasOwnProperty;
function Y0(e) {
  var t = this.__data__;
  if (Zt) {
    var r = t[e];
    return r === H0 ? void 0 : r;
  }
  return X0.call(t, e) ? t[e] : void 0;
}
var J0 = Object.prototype, K0 = J0.hasOwnProperty;
function Q0(e) {
  var t = this.__data__;
  return Zt ? t[e] !== void 0 : K0.call(t, e);
}
var Z0 = "__lodash_hash_undefined__";
function e_(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Zt && t === void 0 ? Z0 : t, this;
}
function yt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yt.prototype.clear = G0;
yt.prototype.delete = U0;
yt.prototype.get = Y0;
yt.prototype.has = Q0;
yt.prototype.set = e_;
function t_() {
  this.__data__ = [], this.size = 0;
}
function zr(e, t) {
  for (var r = e.length; r--; )
    if (mc(e[r][0], t))
      return r;
  return -1;
}
var r_ = Array.prototype, n_ = r_.splice;
function i_(e) {
  var t = this.__data__, r = zr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : n_.call(t, r, 1), --this.size, !0;
}
function o_(e) {
  var t = this.__data__, r = zr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function a_(e) {
  return zr(this.__data__, e) > -1;
}
function s_(e, t) {
  var r = this.__data__, n = zr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function jt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
jt.prototype.clear = t_;
jt.prototype.delete = i_;
jt.prototype.get = o_;
jt.prototype.has = a_;
jt.prototype.set = s_;
var u_ = Eo(Oo, "Map");
function l_() {
  this.size = 0, this.__data__ = {
    hash: new yt(),
    map: new (u_ || jt)(),
    string: new yt()
  };
}
function c_(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Br(e, t) {
  var r = e.__data__;
  return c_(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function f_(e) {
  var t = Br(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function p_(e) {
  return Br(this, e).get(e);
}
function y_(e) {
  return Br(this, e).has(e);
}
function h_(e, t) {
  var r = Br(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function mt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
mt.prototype.clear = l_;
mt.prototype.delete = f_;
mt.prototype.get = p_;
mt.prototype.has = y_;
mt.prototype.set = h_;
var d_ = "Expected a function";
function So(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(d_);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (So.Cache || mt)(), r;
}
So.Cache = mt;
var v_ = 500;
function m_(e) {
  var t = So(e, function(n) {
    return r.size === v_ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var g_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, b_ = /\\(\\)?/g, w_ = m_(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(g_, function(r, n, i, o) {
    t.push(i ? o.replace(b_, "$1") : n || r);
  }), t;
});
function __(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Gs = Ot ? Ot.prototype : void 0, Us = Gs ? Gs.toString : void 0;
function gc(e) {
  if (typeof e == "string")
    return e;
  if (Ao(e))
    return __(e, gc) + "";
  if (ko(e))
    return Us ? Us.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function x_(e) {
  return e == null ? "" : gc(e);
}
function bc(e, t) {
  return Ao(e) ? e : B0(e, t) ? [e] : w_(x_(e));
}
var O_ = 9007199254740991, E_ = /^(?:0|[1-9]\d*)$/;
function A_(e, t) {
  var r = typeof e;
  return t = t ?? O_, !!t && (r == "number" || r != "symbol" && E_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function wc(e) {
  if (typeof e == "string" || ko(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function k_(e, t, r, n) {
  if (!xr(e))
    return e;
  t = bc(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var u = wc(t[i]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = xr(c) ? c : A_(t[i + 1]) ? [] : {});
    }
    N0(s, u, l), s = s[u];
  }
  return e;
}
function _c(e, t, r) {
  return e == null ? e : k_(e, t, r);
}
function S_(e, t) {
  t = bc(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[wc(t[r++])];
  return r && r == n ? e : void 0;
}
function P_(e, t, r) {
  var n = e == null ? void 0 : S_(e, t);
  return n === void 0 ? r : n;
}
var j_ = class xc extends Error {
  status = 500;
  constructor(t, r = 500) {
    super(t), this.name = "BaseException", this.status = r;
  }
  static fromError(t) {
    return new xc(t.message, 500);
  }
};
async function Oc(e) {
  try {
    return [null, await e()];
  } catch (t) {
    return [t, null];
  }
}
Oc.sync = function(e) {
  try {
    return [null, e()];
  } catch (t) {
    return [t, null];
  }
};
var Po = class {
  hook_id;
  hook_aliases;
  order;
  subhooks;
  async register() {
  }
  async load() {
  }
  async boot() {
  }
  async shutdown() {
  }
  async onRegister() {
  }
  async onLoad() {
  }
  async onBoot() {
  }
  async onShutdown() {
  }
}, Hs = Object.defineProperty, D_ = (e, t) => {
  let r = {};
  for (var n in e) Hs(r, n, { get: e[n], enumerable: !0 });
  return Hs(r, Symbol.toStringTag, { value: "Module" }), r;
};
let ct;
const I_ = {
  lang: void 0,
  message: void 0,
  abortEarly: void 0,
  abortPipeEarly: void 0
};
function M_(e) {
  ct = {
    ...ct,
    ...e
  };
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return !e && !ct ? I_ : {
    lang: e?.lang ?? ct?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? ct?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? ct?.abortPipeEarly
  };
}
function R_() {
  ct = void 0;
}
let Yt;
function F_(e, t) {
  Yt || (Yt = /* @__PURE__ */ new Map()), Yt.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function Ec(e) {
  return Yt?.get(e);
}
function $_(e) {
  Yt?.delete(e);
}
let Jt;
function T_(e, t) {
  Jt || (Jt = /* @__PURE__ */ new Map()), Jt.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function Ac(e) {
  return Jt?.get(e);
}
function C_(e) {
  Jt?.delete(e);
}
let lt;
function N_(e, t, r) {
  lt || (lt = /* @__PURE__ */ new Map()), lt.get(e) || lt.set(e, /* @__PURE__ */ new Map()), lt.get(e).set(r, t);
}
// @__NO_SIDE_EFFECTS__
function kc(e, t) {
  return lt?.get(e)?.get(t);
}
function q_(e, t) {
  lt?.get(e)?.delete(t);
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function b(e, t, r, n, i) {
  const o = i && "input" in i ? i.input : r.value, a = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ se(o), u = {
    kind: e.kind,
    type: e.type,
    input: o,
    expected: a,
    received: s,
    message: `Invalid ${t}: ${a ? `Expected ${a} but r` : "R"}eceived ${s}`,
    requirement: e.requirement,
    path: i?.path,
    issues: i?.issues,
    lang: n.lang,
    abortEarly: n.abortEarly,
    abortPipeEarly: n.abortPipeEarly
  }, l = e.kind === "schema", c = i?.message ?? e.message ?? /* @__PURE__ */ kc(e.reference, u.lang) ?? (l ? /* @__PURE__ */ Ac(u.lang) : null) ?? n.message ?? /* @__PURE__ */ Ec(u.lang);
  c !== void 0 && (u.message = typeof c == "function" ? c(u) : c), l && (r.typed = !1), r.issues ? r.issues.push(u) : r.issues = [u];
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  return {
    typed: e.typed,
    value: e.value,
    issues: e.issues && [...e.issues]
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e, t, r, n) {
  let i = "", o = !0, a = 0, s = 0, u = 0;
  const l = (c) => {
    if (c > a) {
      let h = e.slice(a, c).toLowerCase();
      if (o ? r : n) {
        const x = h.charCodeAt(0);
        if (x >= 97 && x <= 122) h = String.fromCharCode(x - 32) + h.slice(1);
        else {
          const d = x >= 55296 && x <= 56319 ? 2 : 1;
          h = h.slice(0, d).toUpperCase() + h.slice(d);
        }
      }
      i += o ? h : t + h, o = !1;
    }
  };
  for (let c = 0; c < e.length; c++) {
    const h = e.charCodeAt(c);
    let x;
    if (h === 32 || h === 9 || h === 10 || h === 11 || h === 12 || h === 13 || h === 45 || h === 95)
      l(c), a = c + 1, x = 0;
    else if (h < 128) x = h >= 65 && h <= 90 ? 1 : h >= 97 && h <= 122 ? 2 : 3;
    else {
      const d = e[c], v = d.toLowerCase();
      x = v === d.toUpperCase() ? 3 : d === v ? 2 : 1;
    }
    x === 1 && (s === 2 || s === 3) && c > a ? (l(c), a = c) : x === 2 && s === 1 && u === 1 && c - 1 > a && (l(c - 1), a = c - 1), u = s, s = x;
  }
  return l(e.length), i;
}
let qn;
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return qn || (qn = new TextEncoder()), qn.encode(e).length;
}
let Wn;
// @__NO_SIDE_EFFECTS__
function ur(e) {
  Wn || (Wn = new Intl.Segmenter());
  const t = Wn.segment(e);
  let r = 0;
  for (const n of t) r++;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t) {
  if ("pipe" in e) {
    const r = [];
    for (let n = e.pipe.length - 1; n >= 0; n--) {
      const i = e.pipe[n];
      if (i.kind === "schema" && "pipe" in i) r.push(i);
      else if (i.kind === "metadata" && i.type === t) return i[t];
    }
    for (const n of r) {
      const i = /* @__PURE__ */ Gr(n, t);
      if (i !== void 0) return i;
    }
  }
}
const Vs = /* @__PURE__ */ new WeakMap();
// @__NO_SIDE_EFFECTS__
function I(e) {
  let t = Vs.get(e);
  return t || (t = {
    version: 1,
    vendor: "valibot",
    validate(r) {
      return e["~run"]({ value: r }, /* @__PURE__ */ Dt());
    }
  }, Vs.set(e, t)), t;
}
let Ut;
// @__NO_SIDE_EFFECTS__
function lr(e, t) {
  Ut || (Ut = /* @__PURE__ */ new Map()), Ut.get(e) || Ut.set(e, new Intl.Segmenter(e, { granularity: "word" }));
  const r = Ut.get(e).segment(t);
  let n = 0;
  for (const i of r) i.isWordLike && n++;
  return n;
}
const W_ = /\D/gu;
// @__NO_SIDE_EFFECTS__
function jo(e) {
  const t = e.replace(W_, "");
  let r = t.length, n = 1, i = 0;
  for (; r; ) {
    const o = +t[--r];
    n ^= 1, i += n ? [
      0,
      2,
      4,
      6,
      8,
      1,
      3,
      5,
      7,
      9
    ][o] : o;
  }
  return i % 10 === 0;
}
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  const r = [...new Set(e)];
  return r.length > 1 ? `(${r.join(` ${t} `)})` : r[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function L_(e, t) {
  const r = {};
  for (const n of e) r[n] = t;
  return r;
}
// @__NO_SIDE_EFFECTS__
function z_(e) {
  const t = {};
  for (const r of e) Object.assign(t, r.entries);
  return t;
}
// @__NO_SIDE_EFFECTS__
function Do(e) {
  if (e.path) {
    let t = "";
    for (const r of e.path) if (typeof r.key == "string" || typeof r.key == "number") t ? t += `.${r.key}` : t += r.key;
    else return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function B_(e, t) {
  return t.kind === e;
}
// @__NO_SIDE_EFFECTS__
function G_(e, t) {
  return t.type === e;
}
// @__NO_SIDE_EFFECTS__
function U_(e) {
  return e instanceof Ge;
}
var Ge = class extends Error {
  /**
  * Creates a Valibot error with useful information.
  *
  * @param issues The error issues.
  */
  constructor(e) {
    super(e[0].message), this.name = "ValiError", this.issues = e;
  }
};
// @__NO_SIDE_EFFECTS__
function Sc(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: Sc,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = (...i) => {
        const o = this.schema["~run"]({ value: i }, r);
        if (o.issues) throw new Ge(o.issues);
        return n(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pc(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: Pc,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = async (...i) => {
        const o = await e["~run"]({ value: i }, r);
        if (o.issues) throw new Ge(o.issues);
        return n(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jc() {
  return {
    kind: "transformation",
    type: "await",
    reference: jc,
    async: !0,
    async "~run"(e) {
      return e.value = await e.value, e;
    }
  };
}
const Dc = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu, Ic = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u, Mc = /^[a-z][\da-z]*$/u, Rc = /^[+-]?(?:\d*\.)?\d+$/u, Fc = /^\d+$/u, $c = /^(?=.{1,253}$)(?:(?![Xx][Nn]--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/u, Tc = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu, Cc = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$", "u"), Nc = /^(?:0[hx])?[\da-fA-F]+$/u, qc = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u, Wc = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u, Lc = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u, zc = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, Bc = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, Gc = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u, Uc = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u, Hc = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, Vc = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u, Xc = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, Yc = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z| ?[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u, Jc = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u, Kc = /^(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?$/u, Qc = /^(?:[A-Z]{2}[A-Z\d]{3}\d{7}|[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5})$/u, Zc = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$/u, ef = /^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, tf = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$|^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, rf = /^[\w-]+$/u, nf = /^(?:0o)?[0-7]+$/u, of = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, af = /^[\da-z]+(?:[-_][\da-z]+)*$/u, sf = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u, uf = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
// @__NO_SIDE_EFFECTS__
function lf(e) {
  return {
    kind: "validation",
    type: "base64",
    reference: lf,
    async: !1,
    expects: null,
    requirement: Dc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "Base64", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cf(e) {
  return {
    kind: "validation",
    type: "bic",
    reference: cf,
    async: !1,
    expects: null,
    requirement: Ic,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "BIC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ff(e) {
  return {
    kind: "transformation",
    type: "brand",
    reference: ff,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pf(e, t) {
  return {
    kind: "validation",
    type: "bytes",
    reference: pf,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ sr(r.value);
        i !== this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yf(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: yf,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement(r.value) && b(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hf(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: hf,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(r, n) {
      return r.typed && !await this.requirement(r.value) && b(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function df(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: df,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) for (let i = 0; i < r.value.length; i++) {
        const o = r.value[i];
        this.requirement(o, i, r.value) || b(this, "item", r, n, {
          input: o,
          path: [{
            type: "array",
            origin: "value",
            input: r.value,
            key: i,
            value: o
          }]
        });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vf(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: vf,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(r, n) {
      if (r.typed) {
        const i = await Promise.all(r.value.map(this.requirement));
        for (let o = 0; o < r.value.length; o++) if (!i[o]) {
          const a = r.value[o];
          b(this, "item", r, n, {
            input: a,
            path: [{
              type: "array",
              origin: "value",
              input: r.value,
              key: o,
              value: a
            }]
          });
        }
      }
      return r;
    }
  };
}
const H_ = /^(?:\d{13,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u, V_ = /[- ]/gu, X_ = [
  /^3[47]\d{13}$/u,
  /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
  /^6(?:011|5\d{2})\d{12,15}$/u,
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  /^(?:5[1-5]\d{2}|222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
  /^4\d{12}(?:\d{3,6})?$/u
];
// @__NO_SIDE_EFFECTS__
function mf(e) {
  return {
    kind: "validation",
    type: "credit_card",
    reference: mf,
    async: !1,
    expects: null,
    requirement(t) {
      let r;
      return H_.test(t) && (r = t.replace(V_, "")) && X_.some((n) => n.test(r)) && /* @__PURE__ */ jo(r);
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "credit card", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gf(e) {
  return {
    kind: "validation",
    type: "cuid2",
    reference: gf,
    async: !1,
    expects: null,
    requirement: Mc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "Cuid2", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bf(e) {
  return {
    kind: "validation",
    type: "decimal",
    reference: bf,
    async: !1,
    expects: null,
    requirement: Rc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "decimal", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wf(e) {
  return {
    kind: "metadata",
    type: "description",
    reference: wf,
    description: e
  };
}
// @__NO_SIDE_EFFECTS__
function _f(e) {
  return {
    kind: "validation",
    type: "digits",
    reference: _f,
    async: !1,
    expects: null,
    requirement: Fc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "digits", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xf(e) {
  return {
    kind: "validation",
    type: "domain",
    reference: xf,
    expects: null,
    async: !1,
    requirement: $c,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "domain", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Of(e) {
  return {
    kind: "validation",
    type: "email",
    reference: Of,
    expects: null,
    async: !1,
    requirement: Tc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "email", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ef(e) {
  return {
    kind: "validation",
    type: "emoji",
    reference: Ef,
    async: !1,
    expects: null,
    requirement: Cc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "emoji", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Af(e) {
  return {
    kind: "validation",
    type: "empty",
    reference: Af,
    async: !1,
    expects: "0",
    message: e,
    "~run"(t, r) {
      return t.typed && t.value.length > 0 && b(this, "length", t, r, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kf(e, t) {
  return {
    kind: "validation",
    type: "ends_with",
    reference: kf,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.endsWith(this.requirement) && b(this, "end", r, n, { received: `"${r.value.slice(-this.requirement.length)}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sf(e, t) {
  return {
    kind: "validation",
    type: "entries",
    reference: Sf,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i !== this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pf(e, t) {
  return {
    kind: "validation",
    type: "every_item",
    reference: Pf,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.every(this.requirement) && b(this, "item", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jf(e) {
  return {
    kind: "metadata",
    type: "examples",
    reference: jf,
    examples: e
  };
}
// @__NO_SIDE_EFFECTS__
function Df(e, t) {
  const r = /* @__PURE__ */ se(e);
  return {
    kind: "validation",
    type: "excludes",
    reference: Df,
    async: !1,
    expects: `!${r}`,
    requirement: e,
    message: t,
    "~run"(n, i) {
      return n.typed && n.value.includes(this.requirement) && b(this, "content", n, i, { received: r }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function If(e) {
  return {
    kind: "transformation",
    type: "filter_items",
    reference: If,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.filter(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mf(e) {
  return {
    kind: "transformation",
    type: "find_item",
    reference: Mf,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.find(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rf(e) {
  return {
    kind: "validation",
    type: "finite",
    reference: Rf,
    async: !1,
    expects: null,
    requirement: Number.isFinite,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "finite", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ff(e) {
  return {
    kind: "transformation",
    type: "flavor",
    reference: Ff,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $f(e, t) {
  return {
    kind: "validation",
    type: "graphemes",
    reference: $f,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ur(r.value);
        i !== this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tf(e, t) {
  return {
    kind: "validation",
    type: "gt_value",
    reference: Tf,
    async: !1,
    expects: `>${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value > this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cf(e, t) {
  return {
    kind: "transformation",
    type: "guard",
    reference: Cf,
    async: !1,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement(r.value) && (b(this, "input", r, n), r.typed = !1), r;
    }
  };
}
const Y_ = {
  md4: 32,
  md5: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8,
  adler32: 8
};
// @__NO_SIDE_EFFECTS__
function Nf(e, t) {
  return {
    kind: "validation",
    type: "hash",
    reference: Nf,
    expects: null,
    async: !1,
    requirement: RegExp(e.map((r) => `^[a-fA-F0-9]{${Y_[r]}}$`).join("|"), "u"),
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.test(r.value) && b(this, "hash", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qf(e) {
  return {
    kind: "validation",
    type: "hexadecimal",
    reference: qf,
    async: !1,
    expects: null,
    requirement: Nc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "hexadecimal", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wf(e) {
  return {
    kind: "validation",
    type: "hex_color",
    reference: Wf,
    async: !1,
    expects: null,
    requirement: qc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "hex color", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lf(e) {
  return {
    kind: "validation",
    type: "imei",
    reference: Lf,
    async: !1,
    expects: null,
    requirement(t) {
      return Wc.test(t) && /* @__PURE__ */ jo(t);
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "IMEI", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zf(e, t) {
  const r = /* @__PURE__ */ se(e);
  return {
    kind: "validation",
    type: "includes",
    reference: zf,
    async: !1,
    expects: r,
    requirement: e,
    message: t,
    "~run"(n, i) {
      return n.typed && !n.value.includes(this.requirement) && b(this, "content", n, i, { received: `!${r}` }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Io(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: Io,
    async: !1,
    expects: null,
    requirement: Number.isInteger,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "integer", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bf(e) {
  return {
    kind: "validation",
    type: "ip",
    reference: Bf,
    async: !1,
    expects: null,
    requirement: Bc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "IP", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gf(e) {
  return {
    kind: "validation",
    type: "ipv4",
    reference: Gf,
    async: !1,
    expects: null,
    requirement: Lc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "IPv4", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uf(e) {
  return {
    kind: "validation",
    type: "ipv6",
    reference: Uf,
    async: !1,
    expects: null,
    requirement: zc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "IPv6", t, r), t;
    }
  };
}
function J_(e) {
  const t = e.split("").map((n) => n === "X" ? 10 : parseInt(n));
  let r = 0;
  for (let n = 0; n < 10; n++) r += t[n] * (10 - n);
  return r % 11 === 0;
}
function K_(e) {
  const t = e.split("").map((n) => parseInt(n));
  let r = 0;
  for (let n = 0; n < 13; n++) r += t[n] * (n % 2 === 0 ? 1 : 3);
  return r % 10 === 0;
}
const Q_ = /[- ]/gu, Z_ = /^\d{9}[\dX]$/u, ex = /^\d{13}$/u;
// @__NO_SIDE_EFFECTS__
function Hf(e) {
  return {
    kind: "validation",
    type: "isbn",
    reference: Hf,
    async: !1,
    expects: null,
    requirement(t) {
      const r = t.replace(Q_, "");
      return Z_.test(r) ? J_(r) : ex.test(r) ? K_(r) : !1;
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "ISBN", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vf(e) {
  return {
    kind: "validation",
    type: "isrc",
    reference: Vf,
    async: !1,
    expects: null,
    requirement: Qc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "ISRC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xf(e) {
  return {
    kind: "validation",
    type: "iso_date",
    reference: Xf,
    async: !1,
    expects: null,
    requirement: Gc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "date", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yf(e) {
  return {
    kind: "validation",
    type: "iso_date_time",
    reference: Yf,
    async: !1,
    expects: null,
    requirement: Uc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "date-time", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jf(e) {
  return {
    kind: "validation",
    type: "iso_date_time_second",
    reference: Jf,
    async: !1,
    expects: null,
    requirement: Hc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "date-time-second", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kf(e) {
  return {
    kind: "validation",
    type: "iso_time",
    reference: Kf,
    async: !1,
    expects: null,
    requirement: Vc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "time", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qf(e) {
  return {
    kind: "validation",
    type: "iso_time_second",
    reference: Qf,
    async: !1,
    expects: null,
    requirement: Xc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "time-second", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zf(e) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: Zf,
    async: !1,
    expects: null,
    requirement: Yc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "timestamp", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ep(e) {
  return {
    kind: "validation",
    type: "iso_week",
    reference: ep,
    async: !1,
    expects: null,
    requirement: Jc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "week", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tp(e) {
  return {
    kind: "validation",
    type: "jws_compact",
    reference: tp,
    async: !1,
    expects: null,
    requirement: Kc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "JWS compact", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rp(e, t) {
  return {
    kind: "validation",
    type: "length",
    reference: rp,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length !== this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function np(e, t) {
  return {
    kind: "validation",
    type: "lt_value",
    reference: np,
    async: !1,
    expects: `<${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value < this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ip(e) {
  return {
    kind: "validation",
    type: "mac",
    reference: ip,
    async: !1,
    expects: null,
    requirement: tf,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function op(e) {
  return {
    kind: "validation",
    type: "mac48",
    reference: op,
    async: !1,
    expects: null,
    requirement: Zc,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "48-bit MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ap(e) {
  return {
    kind: "validation",
    type: "mac64",
    reference: ap,
    async: !1,
    expects: null,
    requirement: ef,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "64-bit MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sp(e) {
  return {
    kind: "transformation",
    type: "map_items",
    reference: sp,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.map(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function up(e, t) {
  return {
    kind: "validation",
    type: "max_bytes",
    reference: up,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ sr(r.value);
        i > this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lp(e, t) {
  return {
    kind: "validation",
    type: "max_entries",
    reference: lp,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i > this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cp(e, t) {
  return {
    kind: "validation",
    type: "max_graphemes",
    reference: cp,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ur(r.value);
        i > this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fp(e, t) {
  return {
    kind: "validation",
    type: "max_length",
    reference: fp,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length > this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pp(e, t) {
  return {
    kind: "validation",
    type: "max_size",
    reference: pp,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size > this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yp(e, t) {
  return {
    kind: "validation",
    type: "max_value",
    reference: yp,
    async: !1,
    expects: `<=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value <= this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hp(e, t, r) {
  return {
    kind: "validation",
    type: "max_words",
    reference: hp,
    async: !1,
    expects: `<=${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ lr(this.locales, n.value);
        o > this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dp(e) {
  return {
    kind: "metadata",
    type: "metadata",
    reference: dp,
    metadata: e
  };
}
// @__NO_SIDE_EFFECTS__
function vp(e, t) {
  return {
    kind: "validation",
    type: "mime_type",
    reference: vp,
    async: !1,
    expects: /* @__PURE__ */ Pe(e.map((r) => `"${r}"`), "|"),
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.includes(r.value.type) && b(this, "MIME type", r, n, { received: `"${r.value.type}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mp(e, t) {
  return {
    kind: "validation",
    type: "min_bytes",
    reference: mp,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ sr(r.value);
        i < this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gp(e, t) {
  return {
    kind: "validation",
    type: "min_entries",
    reference: gp,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i < this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bp(e, t) {
  return {
    kind: "validation",
    type: "min_graphemes",
    reference: bp,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ur(r.value);
        i < this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wp(e, t) {
  return {
    kind: "validation",
    type: "min_length",
    reference: wp,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length < this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _p(e, t) {
  return {
    kind: "validation",
    type: "min_size",
    reference: _p,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size < this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xp(e, t) {
  return {
    kind: "validation",
    type: "min_value",
    reference: xp,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value >= this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Op(e, t, r) {
  return {
    kind: "validation",
    type: "min_words",
    reference: Op,
    async: !1,
    expects: `>=${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ lr(this.locales, n.value);
        o < this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ep(e, t) {
  return {
    kind: "validation",
    type: "multiple_of",
    reference: Ep,
    async: !1,
    expects: `%${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value % this.requirement != 0 && b(this, "multiple", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ap(e) {
  return {
    kind: "validation",
    type: "nanoid",
    reference: Ap,
    async: !1,
    expects: null,
    requirement: rf,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "Nano ID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kp(e) {
  return {
    kind: "validation",
    type: "non_empty",
    reference: kp,
    async: !1,
    expects: "!0",
    message: e,
    "~run"(t, r) {
      return t.typed && t.value.length === 0 && b(this, "length", t, r, { received: "0" }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sp(e) {
  return {
    kind: "transformation",
    type: "normalize",
    reference: Sp,
    async: !1,
    form: e,
    "~run"(t) {
      return t.value = t.value.normalize(this.form), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pp(e, t) {
  return {
    kind: "validation",
    type: "not_bytes",
    reference: Pp,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ sr(r.value);
        i === this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jp(e, t) {
  return {
    kind: "validation",
    type: "not_entries",
    reference: jp,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i === this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dp(e, t) {
  return {
    kind: "validation",
    type: "not_graphemes",
    reference: Dp,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ur(r.value);
        i === this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ip(e, t) {
  return {
    kind: "validation",
    type: "not_length",
    reference: Ip,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length === this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mp(e, t) {
  return {
    kind: "validation",
    type: "not_size",
    reference: Mp,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size === this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rp(e, t) {
  return {
    kind: "validation",
    type: "not_value",
    reference: Rp,
    async: !1,
    expects: e instanceof Date ? `!${e.toJSON()}` : `!${/* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && this.requirement <= r.value && this.requirement >= r.value && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fp(e, t) {
  return {
    kind: "validation",
    type: "not_values",
    reference: Fp,
    async: !1,
    expects: `!${/* @__PURE__ */ Pe(e.map((r) => r instanceof Date ? r.toJSON() : /* @__PURE__ */ se(r)), "|")}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && this.requirement.some((i) => i <= r.value && i >= r.value) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $p(e, t, r) {
  return {
    kind: "validation",
    type: "not_words",
    reference: $p,
    async: !1,
    expects: `!${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ lr(this.locales, n.value);
        o === this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tp(e) {
  return {
    kind: "validation",
    type: "octal",
    reference: Tp,
    async: !1,
    expects: null,
    requirement: nf,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "octal", t, r), t;
    }
  };
}
const Xs = [
  !0,
  1,
  "true",
  "1",
  "yes",
  "y",
  "on",
  "enabled"
], Ys = [
  !1,
  0,
  "false",
  "0",
  "no",
  "n",
  "off",
  "disabled"
];
// @__NO_SIDE_EFFECTS__
function Cp(e, t) {
  const r = (s) => typeof s == "string" ? s.toLowerCase() : s, n = e?.truthy ?? Xs, i = e?.falsy ?? Ys, o = e?.truthy ? e.truthy.map(r) : Xs, a = e?.falsy ? e.falsy.map(r) : Ys;
  return {
    kind: "transformation",
    type: "parse_boolean",
    reference: Cp,
    expects: /* @__PURE__ */ Pe([...n, ...i].map(se), "|"),
    config: e,
    message: t,
    async: !1,
    "~run"(s, u) {
      const l = r(s.value);
      return o.includes(l) ? s.value = !0 : a.includes(l) ? s.value = !1 : (b(this, "boolean", s, u), s.typed = !1), s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Np(e, t) {
  return {
    kind: "transformation",
    type: "parse_json",
    reference: Np,
    config: e,
    message: t,
    async: !1,
    "~run"(r, n) {
      try {
        r.value = JSON.parse(r.value, this.config?.reviver);
      } catch (i) {
        if (i instanceof Error)
          b(this, "JSON", r, n, { received: `"${i.message}"` }), r.typed = !1;
        else throw i;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qp(e, t) {
  if (e.issues) for (const r of t) for (const n of e.issues) {
    let i = !1;
    const o = Math.min(r.length, n.path?.length ?? 0);
    for (let a = 0; a < o; a++) if (r[a] !== n.path[a].key && (r[a] !== "$" || n.path[a].type !== "array")) {
      i = !0;
      break;
    }
    if (!i) return !1;
  }
  return !0;
}
// @__NO_SIDE_EFFECTS__
function Wp(e, t, r) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: Wp,
    async: !1,
    expects: null,
    paths: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ qp(n, e)) && !this.requirement(n.value) && b(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lp(e, t, r) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: Lp,
    async: !0,
    expects: null,
    paths: e,
    requirement: t,
    message: r,
    async "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ qp(n, e)) && !await this.requirement(n.value) && b(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zp(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: zp,
    async: !1,
    expects: null,
    "~run"(t, r) {
      return e({
        dataset: t,
        config: r,
        addIssue: (n) => b(this, n?.label ?? "input", t, r, n)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bp(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: Bp,
    async: !0,
    expects: null,
    async "~run"(t, r) {
      return await e({
        dataset: t,
        config: r,
        addIssue: (n) => b(this, n?.label ?? "input", t, r, n)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gp(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Gp,
    async: !1,
    "~run"(t, r) {
      const n = e({
        dataset: t,
        config: r,
        addIssue: (i) => b(this, i?.label ?? "input", t, r, i),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = n, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Up(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Up,
    async: !0,
    async "~run"(t, r) {
      const n = await e({
        dataset: t,
        config: r,
        addIssue: (i) => b(this, i?.label ?? "input", t, r, i),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = n, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hp() {
  return {
    kind: "transformation",
    type: "readonly",
    reference: Hp,
    async: !1,
    "~run"(e) {
      return e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vp(e, t) {
  return {
    kind: "transformation",
    type: "reduce_items",
    reference: Vp,
    async: !1,
    operation: e,
    initial: t,
    "~run"(r) {
      return r.value = r.value.reduce(this.operation, this.initial), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xp(e, t) {
  return {
    kind: "validation",
    type: "regex",
    reference: Xp,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.test(r.value) && b(this, "format", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yp(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Yp,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = (...i) => {
        const o = this.schema["~run"]({ value: n(...i) }, r);
        if (o.issues) throw new Ge(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jp(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Jp,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = async (...i) => {
        const o = await this.schema["~run"]({ value: await n(...i) }, r);
        if (o.issues) throw new Ge(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kp(e) {
  return {
    kind: "validation",
    type: "rfc_email",
    reference: Kp,
    expects: null,
    async: !1,
    requirement: of,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "email", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qp(e) {
  return {
    kind: "validation",
    type: "safe_integer",
    reference: Qp,
    async: !1,
    expects: null,
    requirement: Number.isSafeInteger,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "safe integer", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zp(e, t) {
  return {
    kind: "validation",
    type: "size",
    reference: Zp,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size !== this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ey(e) {
  return {
    kind: "validation",
    type: "slug",
    reference: ey,
    async: !1,
    expects: null,
    requirement: af,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "slug", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ty(e, t) {
  return {
    kind: "validation",
    type: "some_item",
    reference: ty,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.some(this.requirement) && b(this, "item", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ry(e) {
  return {
    kind: "transformation",
    type: "sort_items",
    reference: ry,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.sort(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ny(e, t) {
  return {
    kind: "validation",
    type: "starts_with",
    reference: ny,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.startsWith(this.requirement) && b(this, "start", r, n, { received: `"${r.value.slice(0, this.requirement.length)}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iy(e, t) {
  return {
    kind: "transformation",
    type: "stringify_json",
    reference: iy,
    message: t,
    config: e,
    async: !1,
    "~run"(r, n) {
      try {
        const i = JSON.stringify(r.value, this.config?.replacer, this.config?.space);
        i === void 0 && (b(this, "JSON", r, n), r.typed = !1), r.value = i;
      } catch (i) {
        if (i instanceof Error)
          b(this, "JSON", r, n, { received: `"${i.message}"` }), r.typed = !1;
        else throw i;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oy(e) {
  return {
    kind: "metadata",
    type: "title",
    reference: oy,
    title: e
  };
}
// @__NO_SIDE_EFFECTS__
function ay(e) {
  return {
    kind: "transformation",
    type: "to_bigint",
    reference: ay,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = BigInt(t.value);
      } catch {
        b(this, "bigint", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sy() {
  return {
    kind: "transformation",
    type: "to_boolean",
    reference: sy,
    async: !1,
    "~run"(e) {
      return e.value = !!e.value, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uy() {
  return {
    kind: "transformation",
    type: "to_camel_case",
    reference: uy,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ ar(e.value, "", !1, !0), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ly(e) {
  return {
    kind: "transformation",
    type: "to_date",
    reference: ly,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = new Date(t.value), isNaN(t.value) && (b(this, "date", t, r, { received: '"Invalid Date"' }), t.typed = !1);
      } catch {
        b(this, "date", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cy() {
  return {
    kind: "transformation",
    type: "to_kebab_case",
    reference: cy,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ ar(e.value, "-", !1, !1), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fy() {
  return {
    kind: "transformation",
    type: "to_lower_case",
    reference: fy,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toLowerCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function py(e) {
  return {
    kind: "transformation",
    type: "to_max_value",
    reference: py,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value > this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yy(e) {
  return {
    kind: "transformation",
    type: "to_min_value",
    reference: yy,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value < this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hy(e) {
  return {
    kind: "transformation",
    type: "to_number",
    reference: hy,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = Number(t.value), isNaN(t.value) && (b(this, "number", t, r), t.typed = !1);
      } catch {
        b(this, "number", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dy() {
  return {
    kind: "transformation",
    type: "to_pascal_case",
    reference: dy,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ ar(e.value, "", !0, !0), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vy() {
  return {
    kind: "transformation",
    type: "to_snake_case",
    reference: vy,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ ar(e.value, "_", !1, !1), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function my(e) {
  return {
    kind: "transformation",
    type: "to_string",
    reference: my,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = String(t.value);
      } catch {
        b(this, "string", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gy() {
  return {
    kind: "transformation",
    type: "to_upper_case",
    reference: gy,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toUpperCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: ke,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function by(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: by,
    async: !0,
    operation: e,
    async "~run"(t) {
      return t.value = await this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wy() {
  return {
    kind: "transformation",
    type: "trim",
    reference: wy,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trim(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _y() {
  return {
    kind: "transformation",
    type: "trim_end",
    reference: _y,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimEnd(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xy() {
  return {
    kind: "transformation",
    type: "trim_start",
    reference: xy,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimStart(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oy(e) {
  return {
    kind: "validation",
    type: "ulid",
    reference: Oy,
    async: !1,
    expects: null,
    requirement: sf,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "ULID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ey(e) {
  return {
    kind: "validation",
    type: "url",
    reference: Ey,
    async: !1,
    expects: null,
    requirement(t) {
      try {
        return new URL(t), !0;
      } catch {
        return !1;
      }
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "URL", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ay(e) {
  return {
    kind: "validation",
    type: "uuid",
    reference: Ay,
    async: !1,
    expects: null,
    requirement: uf,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "UUID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ky(e, t) {
  return {
    kind: "validation",
    type: "value",
    reference: ky,
    async: !1,
    expects: e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e),
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(this.requirement <= r.value && this.requirement >= r.value) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sy(e, t) {
  return {
    kind: "validation",
    type: "values",
    reference: Sy,
    async: !1,
    expects: `${/* @__PURE__ */ Pe(e.map((r) => r instanceof Date ? r.toJSON() : /* @__PURE__ */ se(r)), "|")}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.some((i) => i <= r.value && i >= r.value) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Py(e, t, r) {
  return {
    kind: "validation",
    type: "words",
    reference: Py,
    async: !1,
    expects: `${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ lr(this.locales, n.value);
        o !== this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
const Ur = { abortEarly: !0 };
function tx(e, t) {
  const r = e["~run"]({ value: t }, Ur).issues;
  if (r) throw new Ge(r);
}
var jy = class {
  constructor(e) {
    this.refCount = 0, this.maxSize = e?.maxSize ?? 1e3, this.maxAge = e?.maxAge ?? 1 / 0, this.hasMaxAge = isFinite(this.maxAge);
  }
  /**
  * Stringifies an unknown input to a cache key component.
  *
  * @param input The unknown input.
  *
  * @returns A cache key component.
  */
  stringify(e) {
    const t = typeof e;
    if (t === "string") return `"${e}"`;
    if (t === "number" || t === "boolean") return `${e}`;
    if (t === "bigint") return `${e}n`;
    if (t === "object" || t === "function") {
      if (e) {
        this.refIds ?? (this.refIds = /* @__PURE__ */ new WeakMap());
        let r = this.refIds.get(e);
        return r || (r = ++this.refCount, this.refIds.set(e, r)), `#${r}`;
      }
      return "null";
    }
    return t;
  }
  /**
  * Creates a cache key from input and config.
  *
  * @param input The input value.
  * @param config The parse configuration.
  *
  * @returns The cache key.
  */
  key(e, t = {}) {
    return `${this.stringify(e)}|${this.stringify(t.lang)}|${this.stringify(t.message)}|${this.stringify(t.abortEarly)}|${this.stringify(t.abortPipeEarly)}`;
  }
  /**
  * Gets a value from the cache by key.
  *
  * @param key The cache key.
  *
  * @returns The cached value.
  */
  get(e) {
    if (!this.store) return;
    const t = this.store.get(e);
    if (t) {
      if (this.hasMaxAge && Date.now() - t[1] > this.maxAge) {
        this.store.delete(e);
        return;
      }
      return this.store.delete(e), this.store.set(e, t), t[0];
    }
  }
  /**
  * Sets a value in the cache by key.
  *
  * @param key The cache key.
  * @param value The cached value.
  */
  set(e, t) {
    this.store ?? (this.store = /* @__PURE__ */ new Map()), this.store.delete(e);
    const r = this.hasMaxAge ? Date.now() : 0;
    this.store.set(e, [t, r]), this.store.size > this.maxSize && this.store.delete(this.store.keys().next().value);
  }
  /**
  * Clears all entries from the cache.
  */
  clear() {
    this.store?.clear();
  }
};
// @__NO_SIDE_EFFECTS__
function rx(e, t) {
  return {
    ...e,
    cacheConfig: t,
    cache: new jy(t),
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = this.cache.key(r.value, n);
      let o = this.cache.get(i);
      return o || this.cache.set(i, o = e["~run"](r, n)), /* @__PURE__ */ Or(o);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nx(e, t) {
  let r;
  return {
    ...e,
    async: !0,
    cacheConfig: t,
    cache: new jy(t),
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = this.cache.key(n.value, i), a = this.cache.get(o);
      if (a) return /* @__PURE__ */ Or(a);
      let s = r?.get(o);
      s || (r ?? (r = /* @__PURE__ */ new Map()), s = Promise.resolve(e["~run"](n, i)), r.set(o, s));
      try {
        const u = await s;
        return this.cache.set(o, u), /* @__PURE__ */ Or(u);
      } finally {
        r?.delete(o);
      }
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ix(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return e["~run"](r, {
        ...n,
        ...t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function je(e, t, r) {
  return typeof e.fallback == "function" ? e.fallback(t, r) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function ox(e, t) {
  return {
    ...e,
    fallback: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = e["~run"](r, n);
      return i.issues ? {
        typed: !0,
        value: /* @__PURE__ */ je(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ax(e, t) {
  return {
    ...e,
    fallback: t,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = await e["~run"](r, n);
      return i.issues ? {
        typed: !0,
        value: await /* @__PURE__ */ je(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  const t = {};
  for (const r of e) if (r.path) {
    const n = /* @__PURE__ */ Do(r);
    n ? (t.nested || (t.nested = {}), t.nested[n] ? t.nested[n].push(r.message) : t.nested[n] = [r.message]) : t.other ? t.other.push(r.message) : t.other = [r.message];
  } else t.root ? t.root.push(r.message) : t.root = [r.message];
  return t;
}
// @__NO_SIDE_EFFECTS__
function sx(e, t) {
  return {
    ...e,
    "~run"(r, n) {
      const i = r.issues && [...r.issues];
      if (r = e["~run"](r, n), r.issues) {
        for (const o of r.issues) if (!i?.includes(o)) {
          let a = r.value;
          for (const s of t) {
            const u = a[s], l = {
              type: "unknown",
              origin: "value",
              input: a,
              key: s,
              value: u
            };
            if (o.path ? o.path.push(l) : o.path = [l], !u) break;
            a = u;
          }
        }
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ux(e, t) {
  return {
    ...e,
    async: !0,
    async "~run"(r, n) {
      const i = r.issues && [...r.issues];
      if (r = await e["~run"](r, n), r.issues) {
        for (const o of r.issues) if (!i?.includes(o)) {
          let a = r.value;
          for (const s of t) {
            const u = a[s], l = {
              type: "unknown",
              origin: "value",
              input: a,
              key: s,
              value: u
            };
            if (o.path ? o.path.push(l) : o.path = [l], !u) break;
            a = u;
          }
        }
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e, t, r) {
  return typeof e.default == "function" ? e.default(t, r) : e.default;
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  if ("entries" in e) {
    const t = {};
    for (const r in e.entries) t[r] = /* @__PURE__ */ Gi(e.entries[r]);
    return t;
  }
  return "items" in e ? e.items.map(Gi) : /* @__PURE__ */ pe(e);
}
// @__NO_SIDE_EFFECTS__
async function Ui(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, r]) => [t, await /* @__PURE__ */ Ui(r)]))) : "items" in e ? Promise.all(e.items.map(Ui)) : /* @__PURE__ */ pe(e);
}
// @__NO_SIDE_EFFECTS__
function lx(e) {
  return /* @__PURE__ */ Gr(e, "description");
}
// @__NO_SIDE_EFFECTS__
function cx(e) {
  const t = [];
  function r(n) {
    if ("pipe" in n) {
      for (const i of n.pipe) if (i.kind === "schema" && "pipe" in i) r(i);
      else if (i.kind === "metadata" && i.type === "examples") for (const o of i.examples) t.push(o);
    }
  }
  return r(e), t;
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  if ("entries" in e) {
    const t = {};
    for (const r in e.entries) t[r] = /* @__PURE__ */ Hi(e.entries[r]);
    return t;
  }
  return "items" in e ? e.items.map(Hi) : /* @__PURE__ */ je(e);
}
// @__NO_SIDE_EFFECTS__
async function Vi(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, r]) => [t, await /* @__PURE__ */ Vi(r)]))) : "items" in e ? Promise.all(e.items.map(Vi)) : /* @__PURE__ */ je(e);
}
// @__NO_SIDE_EFFECTS__
function fx(e) {
  const t = {};
  function r(n) {
    if ("pipe" in n)
      for (const i of n.pipe) i.kind === "schema" && "pipe" in i ? r(i) : i.kind === "metadata" && i.type === "metadata" && Object.assign(t, i.metadata);
  }
  return r(e), t;
}
// @__NO_SIDE_EFFECTS__
function px(e) {
  return /* @__PURE__ */ Gr(e, "title");
}
// @__NO_SIDE_EFFECTS__
function yx(e, t) {
  return !e["~run"]({ value: t }, Ur).issues;
}
// @__NO_SIDE_EFFECTS__
function cr() {
  return {
    kind: "schema",
    type: "any",
    reference: cr,
    expects: "any",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Et(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: Et,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < i.length; o++) {
          const a = i[o], s = this.item["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dy(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: Dy,
    expects: "Array",
    async: !0,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(i.map((a) => this.item["~run"]({ value: a }, n)));
        for (let a = 0; a < o.length; a++) {
          const s = o[a];
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: i[a]
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Iy(e) {
  return {
    kind: "schema",
    type: "bigint",
    reference: Iy,
    expects: "bigint",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "bigint" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function My(e) {
  return {
    kind: "schema",
    type: "blob",
    reference: My,
    expects: "Blob",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof Blob ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mo(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: Mo,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "boolean" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ry(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: Ry,
    expects: "unknown",
    async: !1,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return this.check(r.value) ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fy(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: Fy,
    expects: "unknown",
    async: !0,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return await this.check(r.value) ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return {
    kind: "schema",
    type: "date",
    reference: Hr,
    expects: "Date",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof Date ? isNaN(t.value) ? b(this, "type", t, r, { received: '"Invalid Date"' }) : t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
  const r = [];
  for (const n in e) (`${+n}` !== n || typeof e[n] != "string" || !Object.is(e[e[n]], +n)) && r.push(e[n]);
  return {
    kind: "schema",
    type: "enum",
    reference: Xi,
    expects: /* @__PURE__ */ Pe(r.map(se), "|"),
    async: !1,
    enum: e,
    options: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      return this.options.includes(n.value) ? n.typed = !0 : b(this, "type", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $y(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: $y,
    expects: e.expects,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ty(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: Ty,
    expects: e.expects,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cy(e) {
  return {
    kind: "schema",
    type: "file",
    reference: Cy,
    expects: "File",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof File ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  return {
    kind: "schema",
    type: "function",
    reference: Yi,
    expects: "Function",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "function" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ny(e, t) {
  return {
    kind: "schema",
    type: "instance",
    reference: Ny,
    expects: e.name,
    async: !1,
    class: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value instanceof this.class ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Er(e, t) {
  if (typeof e == typeof t) {
    if (e === t || e instanceof Date && t instanceof Date && +e == +t) return { value: e };
    if (e && t && e.constructor === Object && t.constructor === Object) {
      const r = { ...e };
      for (const n in t) if (n in e) {
        const i = /* @__PURE__ */ Er(e[n], t[n]);
        if (i.issue) return i;
        r[n] = i.value;
      } else r[n] = t[n];
      return { value: r };
    }
    if (Array.isArray(e) && Array.isArray(t) && e.length === t.length) {
      const r = [...e];
      for (let n = 0; n < e.length; n++) {
        const i = /* @__PURE__ */ Er(e[n], t[n]);
        if (i.issue) return i;
        r[n] = i.value;
      }
      return { value: r };
    }
  }
  return { issue: !0 };
}
// @__NO_SIDE_EFFECTS__
function qy(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: qy,
    expects: /* @__PURE__ */ Pe(e.map((r) => r.expects), "&"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      if (this.options.length) {
        const i = r.value;
        let o;
        r.typed = !0;
        for (const a of this.options) {
          const s = a["~run"]({ value: i }, n);
          if (s.issues) {
            if (r.issues) for (const u of s.issues) r.issues.push(u);
            else r.issues = s.issues;
            if (n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.typed && (o ? o.push(s.value) : o = [s.value]);
        }
        if (r.typed) {
          r.value = o[0];
          for (let a = 1; a < o.length; a++) {
            const s = /* @__PURE__ */ Er(r.value, o[a]);
            if (s.issue) {
              b(this, "type", r, n, { received: "unknown" });
              break;
            }
            r.value = s.value;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wy(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: Wy,
    expects: /* @__PURE__ */ Pe(e.map((r) => r.expects), "&"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      if (this.options.length) {
        const i = r.value;
        let o;
        r.typed = !0;
        const a = await Promise.all(this.options.map((s) => s["~run"]({ value: i }, n)));
        for (const s of a) {
          if (s.issues) {
            if (r.issues) for (const u of s.issues) r.issues.push(u);
            else r.issues = s.issues;
            if (n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.typed && (o ? o.push(s.value) : o = [s.value]);
        }
        if (r.typed) {
          r.value = o[0];
          for (let s = 1; s < o.length; s++) {
            const u = /* @__PURE__ */ Er(r.value, o[s]);
            if (u.issue) {
              b(this, "type", r, n, { received: "unknown" });
              break;
            }
            r.value = u.value;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ly(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: Ly,
    expects: "unknown",
    async: !1,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return this.getter(t.value)["~run"](t, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zy(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: zy,
    expects: "unknown",
    async: !0,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(t, r) {
      return (await this.getter(t.value))["~run"](t, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ar(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: Ar,
    expects: /* @__PURE__ */ se(e),
    async: !1,
    literal: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === this.literal ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function By(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: By,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const a = this.entries[o];
          if (o in i || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
            const s = o in i ? i[o] : /* @__PURE__ */ pe(a), u = a["~run"]({ value: s }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: o,
                value: s
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
              if (r.issues || (r.issues = u.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            u.typed || (r.typed = !1), r.value[o] = u.value;
          } else if (a.fallback !== void 0) r.value[o] = /* @__PURE__ */ je(a);
          else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish" && (b(this, "key", r, n, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: o,
              value: i[o]
            }]
          }), n.abortEarly))
            break;
        }
        if (!r.issues || !n.abortEarly)
          for (const o in i) /* @__PURE__ */ gt(i, o) && !(o in this.entries) && (r.value[o] = i[o]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gy(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: Gy,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([a, s]) => {
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in i ? i[a] : await /* @__PURE__ */ pe(s);
            return [
              a,
              u,
              s,
              await s["~run"]({ value: u }, n)
            ];
          }
          return [
            a,
            i[a],
            s,
            null
          ];
        }));
        for (const [a, s, u, l] of o) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], r.issues?.push(h);
            if (r.issues || (r.issues = l.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value[a] = l.value;
        } else if (u.fallback !== void 0) r.value[a] = await /* @__PURE__ */ je(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (b(this, "key", r, n, {
          input: void 0,
          expected: `"${a}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: a,
            value: s
          }]
        }), n.abortEarly))
          break;
        if (!r.issues || !n.abortEarly)
          for (const a in i) /* @__PURE__ */ gt(i, a) && !(a in this.entries) && (r.value[a] = i[a]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uy(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: Uy,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const a = i[o], s = this.items[o]["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
        if (!r.issues || !n.abortEarly) for (let o = this.items.length; o < i.length; o++) r.value.push(i[o]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hy(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: Hy,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (a, s) => {
          const u = i[s];
          return [
            s,
            u,
            await a["~run"]({ value: u }, n)
          ];
        }));
        for (const [a, s, u] of o) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
        if (!r.issues || !n.abortEarly) for (let a = this.items.length; a < i.length; a++) r.value.push(i[a]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vy(e, t, r) {
  return {
    kind: "schema",
    type: "map",
    reference: Vy,
    expects: "Map",
    async: !1,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        for (const [a, s] of o) {
          const u = this.key["~run"]({ value: a }, i);
          if (u.issues) {
            const c = {
              type: "map",
              origin: "key",
              input: o,
              key: a,
              value: s
            };
            for (const h of u.issues)
              h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: s }, i);
          if (l.issues) {
            const c = {
              type: "map",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), n.value.set(u.value, l.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xy(e, t, r) {
  return {
    kind: "schema",
    type: "map",
    reference: Xy,
    expects: "Map",
    async: !0,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        const a = await Promise.all([...o].map(([s, u]) => Promise.all([
          s,
          u,
          this.key["~run"]({ value: s }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [s, u, l, c] of a) {
          if (l.issues) {
            const h = {
              type: "map",
              origin: "key",
              input: o,
              key: s,
              value: u
            };
            for (const x of l.issues)
              x.path ? x.path.unshift(h) : x.path = [h], n.issues?.push(x);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const h = {
              type: "map",
              origin: "value",
              input: o,
              key: s,
              value: u
            };
            for (const x of c.issues)
              x.path ? x.path.unshift(h) : x.path = [h], n.issues?.push(x);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), n.value.set(l.value, c.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yy(e) {
  return {
    kind: "schema",
    type: "nan",
    reference: Yy,
    expects: "NaN",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return Number.isNaN(t.value) ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jy(e) {
  return {
    kind: "schema",
    type: "never",
    reference: Jy,
    expects: "never",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ky(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: Ky,
    expects: "!null",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value !== null && (r = this.wrapped["~run"](r, n)), r.value === null && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qy(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: Qy,
    expects: "!null",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value !== null && (r = await this.wrapped["~run"](r, n)), r.value === null && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zy(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Zy,
    expects: "(!null & !undefined)",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === null || r.value === void 0 || (r = this.wrapped["~run"](r, n)), (r.value === null || r.value === void 0) && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: eh,
    expects: "(!null & !undefined)",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === null || r.value === void 0 || (r = await this.wrapped["~run"](r, n)), (r.value === null || r.value === void 0) && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: Ro,
    expects: "!undefined",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value !== void 0 && (r = this.wrapped["~run"](r, n)), r.value === void 0 && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fo(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: Fo,
    expects: "!undefined",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value !== void 0 && (r = await this.wrapped["~run"](r, n)), r.value === void 0 && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ji(e) {
  return {
    kind: "schema",
    type: "null",
    reference: Ji,
    expects: "null",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value === null ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function th(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: th,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === null && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === null) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rh(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: rh,
    expects: `(${e.expects} | null)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === null && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === null) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kr(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: kr,
    expects: `(${e.expects} | null | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return (r.value === null || r.value === void 0) && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === null || r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nh(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: nh,
    expects: `(${e.expects} | null | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return (r.value === null || r.value === void 0) && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === null || r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return {
    kind: "schema",
    type: "number",
    reference: Vr,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $o(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: $o,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const a = this.entries[o];
          if (o in i || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
            const s = o in i ? i[o] : /* @__PURE__ */ pe(a), u = a["~run"]({ value: s }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: o,
                value: s
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
              if (r.issues || (r.issues = u.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            u.typed || (r.typed = !1), r.value[o] = u.value;
          } else if (a.fallback !== void 0) r.value[o] = /* @__PURE__ */ je(a);
          else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish" && (b(this, "key", r, n, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: o,
              value: i[o]
            }]
          }), n.abortEarly))
            break;
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ih(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: ih,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([a, s]) => {
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in i ? i[a] : await /* @__PURE__ */ pe(s);
            return [
              a,
              u,
              s,
              await s["~run"]({ value: u }, n)
            ];
          }
          return [
            a,
            i[a],
            s,
            null
          ];
        }));
        for (const [a, s, u, l] of o) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], r.issues?.push(h);
            if (r.issues || (r.issues = l.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value[a] = l.value;
        } else if (u.fallback !== void 0) r.value[a] = await /* @__PURE__ */ je(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (b(this, "key", r, n, {
          input: void 0,
          expected: `"${a}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: a,
            value: s
          }]
        }), n.abortEarly))
          break;
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oh(e, t, r) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: oh,
    expects: "Object",
    async: !1,
    entries: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in o || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in o ? o[a] : /* @__PURE__ */ pe(s), l = s["~run"]({ value: u }, i);
            if (l.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: o,
                key: a,
                value: u
              };
              for (const h of l.issues)
                h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
              if (n.issues || (n.issues = l.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            l.typed || (n.typed = !1), n.value[a] = l.value;
          } else if (s.fallback !== void 0) n.value[a] = /* @__PURE__ */ je(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (b(this, "key", n, i, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: o,
              key: a,
              value: o[a]
            }]
          }), i.abortEarly))
            break;
        }
        if (!n.issues || !i.abortEarly) {
          for (const a in o) if (/* @__PURE__ */ gt(o, a) && !(a in this.entries)) {
            const s = this.rest["~run"]({ value: o[a] }, i);
            if (s.issues) {
              const u = {
                type: "object",
                origin: "value",
                input: o,
                key: a,
                value: o[a]
              };
              for (const l of s.issues)
                l.path ? l.path.unshift(u) : l.path = [u], n.issues?.push(l);
              if (n.issues || (n.issues = s.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            s.typed || (n.typed = !1), n.value[a] = s.value;
          }
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ah(e, t, r) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: ah,
    expects: "Object",
    async: !0,
    entries: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        const [a, s] = await Promise.all([Promise.all(Object.entries(this.entries).map(async ([u, l]) => {
          if (u in o || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const c = u in o ? o[u] : await /* @__PURE__ */ pe(l);
            return [
              u,
              c,
              l,
              await l["~run"]({ value: c }, i)
            ];
          }
          return [
            u,
            o[u],
            l,
            null
          ];
        })), Promise.all(Object.entries(o).filter(([u]) => /* @__PURE__ */ gt(o, u) && !(u in this.entries)).map(async ([u, l]) => [
          u,
          l,
          await this.rest["~run"]({ value: l }, i)
        ]))]);
        for (const [u, l, c, h] of a) if (h) {
          if (h.issues) {
            const x = {
              type: "object",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const d of h.issues)
              d.path ? d.path.unshift(x) : d.path = [x], n.issues?.push(d);
            if (n.issues || (n.issues = h.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          h.typed || (n.typed = !1), n.value[u] = h.value;
        } else if (c.fallback !== void 0) n.value[u] = await /* @__PURE__ */ je(c);
        else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (b(this, "key", n, i, {
          input: void 0,
          expected: `"${u}"`,
          path: [{
            type: "object",
            origin: "key",
            input: o,
            key: u,
            value: l
          }]
        }), i.abortEarly))
          break;
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of s) {
          if (c.issues) {
            const h = {
              type: "object",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const x of c.issues)
              x.path ? x.path.unshift(h) : x.path = [h], n.issues?.push(x);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value[u] = c.value;
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function er(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: er,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function To(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: To,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xr(e, t) {
  return {
    kind: "schema",
    type: "picklist",
    reference: Xr,
    expects: /* @__PURE__ */ Pe(e.map(se), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return this.options.includes(r.value) ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sh(e) {
  return {
    kind: "schema",
    type: "promise",
    reference: sh,
    expects: "Promise",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof Promise ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Co(e, t, r) {
  return {
    kind: "schema",
    type: "record",
    reference: Co,
    expects: "Object",
    async: !1,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        for (const a in o) if (/* @__PURE__ */ gt(o, a)) {
          const s = o[a], u = this.key["~run"]({ value: a }, i);
          if (u.issues) {
            const c = {
              type: "object",
              origin: "key",
              input: o,
              key: a,
              value: s
            };
            for (const h of u.issues)
              h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: s }, i);
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), u.typed && (n.value[u.value] = l.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uh(e, t, r) {
  return {
    kind: "schema",
    type: "record",
    reference: uh,
    expects: "Object",
    async: !0,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        const a = await Promise.all(Object.entries(o).filter(([s]) => /* @__PURE__ */ gt(o, s)).map(([s, u]) => Promise.all([
          s,
          u,
          this.key["~run"]({ value: s }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [s, u, l, c] of a) {
          if (l.issues) {
            const h = {
              type: "object",
              origin: "key",
              input: o,
              key: s,
              value: u
            };
            for (const x of l.issues)
              x.path = [h], n.issues?.push(x);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const h = {
              type: "object",
              origin: "value",
              input: o,
              key: s,
              value: u
            };
            for (const x of c.issues)
              x.path ? x.path.unshift(h) : x.path = [h], n.issues?.push(x);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), l.typed && (n.value[l.value] = c.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lh(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: lh,
    expects: "Set",
    async: !1,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i instanceof Set) {
        r.typed = !0, r.value = /* @__PURE__ */ new Set();
        for (const o of i) {
          const a = this.value["~run"]({ value: o }, n);
          if (a.issues) {
            const s = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: o
            };
            for (const u of a.issues)
              u.path ? u.path.unshift(s) : u.path = [s], r.issues?.push(u);
            if (r.issues || (r.issues = a.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          a.typed || (r.typed = !1), r.value.add(a.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ch(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: ch,
    expects: "Set",
    async: !0,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i instanceof Set) {
        r.typed = !0, r.value = /* @__PURE__ */ new Set();
        const o = await Promise.all([...i].map(async (a) => [a, await this.value["~run"]({ value: a }, n)]));
        for (const [a, s] of o) {
          if (s.issues) {
            const u = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.add(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fh(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: fh,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const a = this.entries[o];
          if (o in i || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
            const s = o in i ? i[o] : /* @__PURE__ */ pe(a), u = a["~run"]({ value: s }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: o,
                value: s
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
              if (r.issues || (r.issues = u.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            u.typed || (r.typed = !1), r.value[o] = u.value;
          } else if (a.fallback !== void 0) r.value[o] = /* @__PURE__ */ je(a);
          else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish" && (b(this, "key", r, n, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: o,
              value: i[o]
            }]
          }), n.abortEarly))
            break;
        }
        if (!r.issues || !n.abortEarly) {
          for (const o in i) if (!(o in this.entries)) {
            b(this, "key", r, n, {
              input: o,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: o,
                value: i[o]
              }]
            });
            break;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ph(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: ph,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([a, s]) => {
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in i ? i[a] : await /* @__PURE__ */ pe(s);
            return [
              a,
              u,
              s,
              await s["~run"]({ value: u }, n)
            ];
          }
          return [
            a,
            i[a],
            s,
            null
          ];
        }));
        for (const [a, s, u, l] of o) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], r.issues?.push(h);
            if (r.issues || (r.issues = l.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value[a] = l.value;
        } else if (u.fallback !== void 0) r.value[a] = await /* @__PURE__ */ je(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (b(this, "key", r, n, {
          input: void 0,
          expected: `"${a}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: a,
            value: s
          }]
        }), n.abortEarly))
          break;
        if (!r.issues || !n.abortEarly) {
          for (const a in i) if (!(a in this.entries)) {
            b(this, "key", r, n, {
              input: a,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: a,
                value: i[a]
              }]
            });
            break;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: yh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const a = i[o], s = this.items[o]["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
        !(r.issues && n.abortEarly) && this.items.length < i.length && b(this, "type", r, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: hh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (a, s) => {
          const u = i[s];
          return [
            s,
            u,
            await a["~run"]({ value: u }, n)
          ];
        }));
        for (const [a, s, u] of o) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
        !(r.issues && n.abortEarly) && this.items.length < i.length && b(this, "type", r, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return {
    kind: "schema",
    type: "string",
    reference: Ie,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "string" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dh(e) {
  return {
    kind: "schema",
    type: "symbol",
    reference: dh,
    expects: "symbol",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "symbol" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vh(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: vh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const a = i[o], s = this.items[o]["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mh(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: mh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (a, s) => {
          const u = i[s];
          return [
            s,
            u,
            await a["~run"]({ value: u }, n)
          ];
        }));
        for (const [a, s, u] of o) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gh(e, t, r) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: gh,
    expects: "Array",
    async: !1,
    items: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (Array.isArray(o)) {
        n.typed = !0, n.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = o[a], u = this.items[a]["~run"]({ value: s }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
        if (!n.issues || !i.abortEarly) for (let a = this.items.length; a < o.length; a++) {
          const s = o[a], u = this.rest["~run"]({ value: s }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bh(e, t, r) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: bh,
    expects: "Array",
    async: !0,
    items: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (Array.isArray(o)) {
        n.typed = !0, n.value = [];
        const [a, s] = await Promise.all([Promise.all(this.items.map(async (u, l) => {
          const c = o[l];
          return [
            l,
            c,
            await u["~run"]({ value: c }, i)
          ];
        })), Promise.all(o.slice(this.items.length).map(async (u, l) => [
          l + this.items.length,
          u,
          await this.rest["~run"]({ value: u }, i)
        ]))]);
        for (const [u, l, c] of a) {
          if (c.issues) {
            const h = {
              type: "array",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const x of c.issues)
              x.path ? x.path.unshift(h) : x.path = [h], n.issues?.push(x);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of s) {
          if (c.issues) {
            const h = {
              type: "array",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const x of c.issues)
              x.path ? x.path.unshift(h) : x.path = [h], n.issues?.push(x);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return {
    kind: "schema",
    type: "undefined",
    reference: Ki,
    expects: "undefined",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value === void 0 ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wh(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: wh,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _h(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: _h,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  let t;
  if (e) for (const r of e) if (t) for (const n of r.issues) t.push(n);
  else t = r.issues;
  return t;
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: Te,
    expects: /* @__PURE__ */ Pe(e.map((r) => r.expects), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      let i, o, a;
      for (const s of this.options) {
        const u = s["~run"]({ value: r.value }, n);
        if (u.typed) if (u.issues) o ? o.push(u) : o = [u];
        else {
          i = u;
          break;
        }
        else a ? a.push(u) : a = [u];
      }
      if (i) return i;
      if (o) {
        if (o.length === 1) return o[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Sr(o) }), r.typed = !0;
      } else {
        if (a?.length === 1) return a[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Sr(a) });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xh(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: xh,
    expects: /* @__PURE__ */ Pe(e.map((r) => r.expects), "|"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      let i, o, a;
      for (const s of this.options) {
        const u = await s["~run"]({ value: r.value }, n);
        if (u.typed) if (u.issues) o ? o.push(u) : o = [u];
        else {
          i = u;
          break;
        }
        else a ? a.push(u) : a = [u];
      }
      if (i) return i;
      if (o) {
        if (o.length === 1) return o[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Sr(o) }), r.typed = !0;
      } else {
        if (a?.length === 1) return a[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Sr(a) });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oh() {
  return {
    kind: "schema",
    type: "unknown",
    reference: Oh,
    expects: "unknown",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Eh(e, t, r) {
  return {
    kind: "schema",
    type: "variant",
    reference: Eh,
    expects: "Object",
    async: !1,
    key: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        let a, s = 0, u = this.key, l = [];
        const c = (h, x) => {
          for (const d of h.options) {
            if (d.type === "variant") c(d, new Set(x).add(d.key));
            else {
              let v = !0, y = 0;
              for (const g of x) {
                const S = d.entries[g];
                if (g in o ? S["~run"]({
                  typed: !1,
                  value: o[g]
                }, Ur).issues : S.type !== "exact_optional" && S.type !== "optional" && S.type !== "nullish") {
                  v = !1, u !== g && (s < y || s === y && g in o && !(u in o)) && (s = y, u = g, l = []), u === g && l.push(d.entries[g].expects);
                  break;
                }
                y++;
              }
              if (v) {
                const g = d["~run"]({ value: o }, i);
                (!a || !a.typed && g.typed) && (a = g);
              }
            }
            if (a && !a.issues) break;
          }
        };
        if (c(this, /* @__PURE__ */ new Set([this.key])), a) return a;
        b(this, "type", n, i, {
          input: o[u],
          expected: /* @__PURE__ */ Pe(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: u,
            value: o[u]
          }]
        });
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ah(e, t, r) {
  return {
    kind: "schema",
    type: "variant",
    reference: Ah,
    expects: "Object",
    async: !0,
    key: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        let a, s = 0, u = this.key, l = [];
        const c = async (h, x) => {
          for (const d of h.options) {
            if (d.type === "variant") await c(d, new Set(x).add(d.key));
            else {
              let v = !0, y = 0;
              for (const g of x) {
                const S = d.entries[g];
                if (g in o ? (await S["~run"]({
                  typed: !1,
                  value: o[g]
                }, Ur)).issues : S.type !== "exact_optional" && S.type !== "optional" && S.type !== "nullish") {
                  v = !1, u !== g && (s < y || s === y && g in o && !(u in o)) && (s = y, u = g, l = []), u === g && l.push(d.entries[g].expects);
                  break;
                }
                y++;
              }
              if (v) {
                const g = await d["~run"]({ value: o }, i);
                (!a || !a.typed && g.typed) && (a = g);
              }
            }
            if (a && !a.issues) break;
          }
        };
        if (await c(this, /* @__PURE__ */ new Set([this.key])), a) return a;
        b(this, "type", n, i, {
          input: o[u],
          expected: /* @__PURE__ */ Pe(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: u,
            value: o[u]
          }]
        });
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  return {
    kind: "schema",
    type: "void",
    reference: Qi,
    expects: "void",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value === void 0 ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hx(e, t) {
  return /* @__PURE__ */ Xr(Object.keys(e.entries), t);
}
// @__NO_SIDE_EFFECTS__
function dx(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return e["~run"](r, {
        ...n,
        message: t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vx(e, t) {
  const r = { ...e.entries };
  for (const n of t) delete r[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
function kh(e, t, r) {
  const n = e["~run"]({ value: t }, /* @__PURE__ */ Dt(r));
  if (n.issues) throw new Ge(n.issues);
  return n.value;
}
async function Sh(e, t, r) {
  const n = await e["~run"]({ value: t }, /* @__PURE__ */ Dt(r));
  if (n.issues) throw new Ge(n.issues);
  return n.value;
}
// @__NO_SIDE_EFFECTS__
function mx(e, t) {
  const r = (n) => kh(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function gx(e, t) {
  const r = (n) => Sh(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function bx(e, t) {
  const r = {};
  for (const n in e.entries) r[n] = !t || t.includes(n) ? /* @__PURE__ */ er(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wx(e, t) {
  const r = {};
  for (const n in e.entries) r[n] = !t || t.includes(n) ? /* @__PURE__ */ To(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _x(e, t) {
  const r = {};
  for (const n of t) r[n] = e.entries[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      for (const n of e) if (n.kind !== "metadata") {
        if (t.issues && (n.kind === "schema" || n.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !r.abortEarly && !r.abortPipeEarly) && (t = n["~run"](t, r));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xx(...e) {
  return {
    ...e[0],
    pipe: e,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(t, r) {
      for (const n of e) if (n.kind !== "metadata") {
        if (t.issues && (n.kind === "schema" || n.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !r.abortEarly && !r.abortPipeEarly) && (t = await n["~run"](t, r));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ox(e, t, r) {
  const n = Array.isArray(t) ? t : void 0, i = Array.isArray(t) ? r : t, o = {};
  for (const a in e.entries) o[a] = !n || n.includes(a) ? /* @__PURE__ */ Ro(e.entries[a], i) : e.entries[a];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ex(e, t, r) {
  const n = Array.isArray(t) ? t : void 0, i = Array.isArray(t) ? r : t, o = {};
  for (const a in e.entries) o[a] = !n || n.includes(a) ? /* @__PURE__ */ Fo(e.entries[a], i) : e.entries[a];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pr(e, t, r) {
  const n = e["~run"]({ value: t }, /* @__PURE__ */ Dt(r));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function No(e, t, r) {
  const n = await e["~run"]({ value: t }, /* @__PURE__ */ Dt(r));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
function Ax(e, t) {
  const r = (n) => /* @__PURE__ */ Pr(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function kx(e, t) {
  const r = (n) => /* @__PURE__ */ No(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function Sx(e) {
  let t = "";
  for (const r of e) {
    t && (t += `
`), t += `× ${r.message}`;
    const n = /* @__PURE__ */ Do(r);
    n && (t += `
  → at ${n}`);
  }
  return t;
}
// @__NO_SIDE_EFFECTS__
function Px(e) {
  return e.wrapped;
}
const jx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE64_REGEX: Dc,
  BIC_REGEX: Ic,
  CUID2_REGEX: Mc,
  DECIMAL_REGEX: Rc,
  DIGITS_REGEX: Fc,
  DOMAIN_REGEX: $c,
  EMAIL_REGEX: Tc,
  EMOJI_REGEX: Cc,
  HEXADECIMAL_REGEX: Nc,
  HEX_COLOR_REGEX: qc,
  IMEI_REGEX: Wc,
  IPV4_REGEX: Lc,
  IPV6_REGEX: zc,
  IP_REGEX: Bc,
  ISO_DATE_REGEX: Gc,
  ISO_DATE_TIME_REGEX: Uc,
  ISO_DATE_TIME_SECOND_REGEX: Hc,
  ISO_TIMESTAMP_REGEX: Yc,
  ISO_TIME_REGEX: Vc,
  ISO_TIME_SECOND_REGEX: Xc,
  ISO_WEEK_REGEX: Jc,
  ISRC_REGEX: Qc,
  JWS_COMPACT_REGEX: Kc,
  MAC48_REGEX: Zc,
  MAC64_REGEX: ef,
  MAC_REGEX: tf,
  NANO_ID_REGEX: rf,
  OCTAL_REGEX: nf,
  RFC_EMAIL_REGEX: of,
  SLUG_REGEX: af,
  ULID_REGEX: sf,
  UUID_REGEX: uf,
  ValiError: Ge,
  _addIssue: b,
  _cloneDataset: Or,
  _formatCase: ar,
  _getByteCount: sr,
  _getGraphemeCount: ur,
  _getLastMetadata: Gr,
  _getStandardProps: I,
  _getWordCount: lr,
  _isLuhnAlgo: jo,
  _isValidObjectKey: gt,
  _joinExpects: Pe,
  _stringify: se,
  any: cr,
  args: Sc,
  argsAsync: Pc,
  array: Et,
  arrayAsync: Dy,
  assert: tx,
  awaitAsync: jc,
  base64: lf,
  bic: cf,
  bigint: Iy,
  blob: My,
  boolean: Mo,
  brand: ff,
  bytes: pf,
  cache: rx,
  cacheAsync: nx,
  check: yf,
  checkAsync: hf,
  checkItems: df,
  checkItemsAsync: vf,
  config: ix,
  creditCard: mf,
  cuid2: gf,
  custom: Ry,
  customAsync: Fy,
  date: Hr,
  decimal: bf,
  deleteGlobalConfig: R_,
  deleteGlobalMessage: $_,
  deleteSchemaMessage: C_,
  deleteSpecificMessage: q_,
  description: wf,
  digits: _f,
  domain: xf,
  email: Of,
  emoji: Ef,
  empty: Af,
  endsWith: kf,
  entries: Sf,
  entriesFromList: L_,
  entriesFromObjects: z_,
  enum: Xi,
  enum_: Xi,
  everyItem: Pf,
  exactOptional: $y,
  exactOptionalAsync: Ty,
  examples: jf,
  excludes: Df,
  fallback: ox,
  fallbackAsync: ax,
  file: Cy,
  filterItems: If,
  findItem: Mf,
  finite: Rf,
  flatten: Bi,
  flavor: Ff,
  forward: sx,
  forwardAsync: ux,
  function: Yi,
  function_: Yi,
  getDefault: pe,
  getDefaults: Gi,
  getDefaultsAsync: Ui,
  getDescription: lx,
  getDotPath: Do,
  getExamples: cx,
  getFallback: je,
  getFallbacks: Hi,
  getFallbacksAsync: Vi,
  getGlobalConfig: Dt,
  getGlobalMessage: Ec,
  getMetadata: fx,
  getSchemaMessage: Ac,
  getSpecificMessage: kc,
  getTitle: px,
  graphemes: $f,
  gtValue: Tf,
  guard: Cf,
  hash: Nf,
  hexColor: Wf,
  hexadecimal: qf,
  imei: Lf,
  includes: zf,
  instance: Ny,
  integer: Io,
  intersect: qy,
  intersectAsync: Wy,
  ip: Bf,
  ipv4: Gf,
  ipv6: Uf,
  is: yx,
  isOfKind: B_,
  isOfType: G_,
  isValiError: U_,
  isbn: Hf,
  isoDate: Xf,
  isoDateTime: Yf,
  isoDateTimeSecond: Jf,
  isoTime: Kf,
  isoTimeSecond: Qf,
  isoTimestamp: Zf,
  isoWeek: ep,
  isrc: Vf,
  jwsCompact: tp,
  keyof: hx,
  lazy: Ly,
  lazyAsync: zy,
  length: rp,
  literal: Ar,
  looseObject: By,
  looseObjectAsync: Gy,
  looseTuple: Uy,
  looseTupleAsync: Hy,
  ltValue: np,
  mac: ip,
  mac48: op,
  mac64: ap,
  map: Vy,
  mapAsync: Xy,
  mapItems: sp,
  maxBytes: up,
  maxEntries: lp,
  maxGraphemes: cp,
  maxLength: fp,
  maxSize: pp,
  maxValue: yp,
  maxWords: hp,
  message: dx,
  metadata: dp,
  mimeType: vp,
  minBytes: mp,
  minEntries: gp,
  minGraphemes: bp,
  minLength: wp,
  minSize: _p,
  minValue: xp,
  minWords: Op,
  multipleOf: Ep,
  nan: Yy,
  nanoid: Ap,
  never: Jy,
  nonEmpty: kp,
  nonNullable: Ky,
  nonNullableAsync: Qy,
  nonNullish: Zy,
  nonNullishAsync: eh,
  nonOptional: Ro,
  nonOptionalAsync: Fo,
  normalize: Sp,
  notBytes: Pp,
  notEntries: jp,
  notGraphemes: Dp,
  notLength: Ip,
  notSize: Mp,
  notValue: Rp,
  notValues: Fp,
  notWords: $p,
  null: Ji,
  null_: Ji,
  nullable: th,
  nullableAsync: rh,
  nullish: kr,
  nullishAsync: nh,
  number: Vr,
  object: $o,
  objectAsync: ih,
  objectWithRest: oh,
  objectWithRestAsync: ah,
  octal: Tp,
  omit: vx,
  optional: er,
  optionalAsync: To,
  parse: kh,
  parseAsync: Sh,
  parseBoolean: Cp,
  parseJson: Np,
  parser: mx,
  parserAsync: gx,
  partial: bx,
  partialAsync: wx,
  partialCheck: Wp,
  partialCheckAsync: Lp,
  pick: _x,
  picklist: Xr,
  pipe: Ce,
  pipeAsync: xx,
  promise: sh,
  rawCheck: zp,
  rawCheckAsync: Bp,
  rawTransform: Gp,
  rawTransformAsync: Up,
  readonly: Hp,
  record: Co,
  recordAsync: uh,
  reduceItems: Vp,
  regex: Xp,
  required: Ox,
  requiredAsync: Ex,
  returns: Yp,
  returnsAsync: Jp,
  rfcEmail: Kp,
  safeInteger: Qp,
  safeParse: Pr,
  safeParseAsync: No,
  safeParser: Ax,
  safeParserAsync: kx,
  set: lh,
  setAsync: ch,
  setGlobalConfig: M_,
  setGlobalMessage: F_,
  setSchemaMessage: T_,
  setSpecificMessage: N_,
  size: Zp,
  slug: ey,
  someItem: ty,
  sortItems: ry,
  startsWith: ny,
  strictObject: fh,
  strictObjectAsync: ph,
  strictTuple: yh,
  strictTupleAsync: hh,
  string: Ie,
  stringifyJson: iy,
  summarize: Sx,
  symbol: dh,
  title: oy,
  toBigint: ay,
  toBoolean: sy,
  toCamelCase: uy,
  toDate: ly,
  toKebabCase: cy,
  toLowerCase: fy,
  toMaxValue: py,
  toMinValue: yy,
  toNumber: hy,
  toPascalCase: dy,
  toSnakeCase: vy,
  toString: my,
  toUpperCase: gy,
  transform: ke,
  transformAsync: by,
  trim: wy,
  trimEnd: _y,
  trimStart: xy,
  tuple: vh,
  tupleAsync: mh,
  tupleWithRest: gh,
  tupleWithRestAsync: bh,
  ulid: Oy,
  undefined: Ki,
  undefined_: Ki,
  undefinedable: wh,
  undefinedableAsync: _h,
  union: Te,
  unionAsync: xh,
  unknown: Oh,
  unwrap: Px,
  url: Ey,
  uuid: Ay,
  value: ky,
  values: Sy,
  variant: Eh,
  variantAsync: Ah,
  void: Qi,
  void_: Qi,
  words: Py
}, Symbol.toStringTag, { value: "Module" })), Ph = 6048e5, Dx = 864e5, Js = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Qe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Js in e ? e[Js](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Fe(e, t) {
  return Qe(t || e, e);
}
let Ix = {};
function Yr() {
  return Ix;
}
function tr(e, t) {
  const r = Yr(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = Fe(e, t?.in), o = i.getDay(), a = (o < n ? 7 : 0) + o - n;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function jr(e, t) {
  return tr(e, { ...t, weekStartsOn: 1 });
}
function jh(e, t) {
  const r = Fe(e, t?.in), n = r.getFullYear(), i = Qe(r, 0);
  i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const o = jr(i), a = Qe(r, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = jr(a);
  return r.getTime() >= o.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Ks(e) {
  const t = Fe(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Mx(e, ...t) {
  const r = Qe.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function Qs(e, t) {
  const r = Fe(e, t?.in);
  return r.setHours(0, 0, 0, 0), r;
}
function Rx(e, t, r) {
  const [n, i] = Mx(
    r?.in,
    e,
    t
  ), o = Qs(n), a = Qs(i), s = +o - Ks(o), u = +a - Ks(a);
  return Math.round((s - u) / Dx);
}
function Fx(e, t) {
  const r = jh(e, t), n = Qe(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), jr(n);
}
function $x(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Tx(e) {
  return !(!$x(e) && typeof e != "number" || isNaN(+Fe(e)));
}
function Cx(e, t) {
  const r = Fe(e, t?.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const Nx = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, qx = (e, t, r) => {
  let n;
  const i = Nx[e];
  return typeof i == "string" ? n = i : t === 1 ? n = i.one : n = i.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Ln(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Wx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Lx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, zx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Bx = {
  date: Ln({
    formats: Wx,
    defaultWidth: "full"
  }),
  time: Ln({
    formats: Lx,
    defaultWidth: "full"
  }),
  dateTime: Ln({
    formats: zx,
    defaultWidth: "full"
  })
}, Gx = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ux = (e, t, r, n) => Gx[e];
function Ht(e) {
  return (t, r) => {
    const n = r?.context ? String(r.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = r?.width ? String(r.width) : a;
      i = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = r?.width ? String(r.width) : e.defaultWidth;
      i = e.values[s] || e.values[a];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
const Hx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Vx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Xx = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Yx = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Jx = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Kx = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Qx = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Zx = {
  ordinalNumber: Qx,
  era: Ht({
    values: Hx,
    defaultWidth: "wide"
  }),
  quarter: Ht({
    values: Vx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ht({
    values: Xx,
    defaultWidth: "wide"
  }),
  day: Ht({
    values: Yx,
    defaultWidth: "wide"
  }),
  dayPeriod: Ht({
    values: Jx,
    defaultWidth: "wide",
    formattingValues: Kx,
    defaultFormattingWidth: "wide"
  })
};
function Vt(e) {
  return (t, r = {}) => {
    const n = r.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], o = t.match(i);
    if (!o)
      return null;
    const a = o[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? tO(s, (h) => h.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      eO(s, (h) => h.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(u) : u, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const c = t.slice(a.length);
    return { value: l, rest: c };
  };
}
function eO(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function tO(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function rO(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    a = r.valueCallback ? r.valueCallback(a) : a;
    const s = t.slice(i.length);
    return { value: a, rest: s };
  };
}
const nO = /^(\d+)(th|st|nd|rd)?/i, iO = /\d+/i, oO = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, aO = {
  any: [/^b/i, /^(a|c)/i]
}, sO = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, uO = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lO = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, cO = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, fO = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pO = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yO = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, hO = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, dO = {
  ordinalNumber: rO({
    matchPattern: nO,
    parsePattern: iO,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Vt({
    matchPatterns: oO,
    defaultMatchWidth: "wide",
    parsePatterns: aO,
    defaultParseWidth: "any"
  }),
  quarter: Vt({
    matchPatterns: sO,
    defaultMatchWidth: "wide",
    parsePatterns: uO,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Vt({
    matchPatterns: lO,
    defaultMatchWidth: "wide",
    parsePatterns: cO,
    defaultParseWidth: "any"
  }),
  day: Vt({
    matchPatterns: fO,
    defaultMatchWidth: "wide",
    parsePatterns: pO,
    defaultParseWidth: "any"
  }),
  dayPeriod: Vt({
    matchPatterns: yO,
    defaultMatchWidth: "any",
    parsePatterns: hO,
    defaultParseWidth: "any"
  })
}, vO = {
  code: "en-US",
  formatDistance: qx,
  formatLong: Bx,
  formatRelative: Ux,
  localize: Zx,
  match: dO,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function mO(e, t) {
  const r = Fe(e, t?.in);
  return Rx(r, Cx(r)) + 1;
}
function gO(e, t) {
  const r = Fe(e, t?.in), n = +jr(r) - +Fx(r);
  return Math.round(n / Ph) + 1;
}
function Dh(e, t) {
  const r = Fe(e, t?.in), n = r.getFullYear(), i = Yr(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, a = Qe(t?.in || e, 0);
  a.setFullYear(n + 1, 0, o), a.setHours(0, 0, 0, 0);
  const s = tr(a, t), u = Qe(t?.in || e, 0);
  u.setFullYear(n, 0, o), u.setHours(0, 0, 0, 0);
  const l = tr(u, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function bO(e, t) {
  const r = Yr(), n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = Dh(e, t), o = Qe(t?.in || e, 0);
  return o.setFullYear(i, 0, n), o.setHours(0, 0, 0, 0), tr(o, t);
}
function wO(e, t) {
  const r = Fe(e, t?.in), n = +tr(r, t) - +bO(r, t);
  return Math.round(n / Ph) + 1;
}
function ee(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Xe = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return ee(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : ee(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ee(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ee(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ee(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ee(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ee(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return ee(i, t.length);
  }
}, bt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Zs = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), i = n > 0 ? n : 1 - n;
      return r.ordinalNumber(i, { unit: "year" });
    }
    return Xe.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const i = Dh(e, n), o = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const a = o % 100;
      return ee(a, 2);
    }
    return t === "Yo" ? r.ordinalNumber(o, { unit: "year" }) : ee(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = jh(e);
    return ee(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return ee(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(n);
      // 01, 02, 03, 04
      case "QQ":
        return ee(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(n);
      // 01, 02, 03, 04
      case "qq":
        return ee(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Xe.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(n + 1);
      // 01, 02, ..., 12
      case "LL":
        return ee(n + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const i = wO(e, n);
    return t === "wo" ? r.ordinalNumber(i, { unit: "week" }) : ee(i, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = gO(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : ee(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Xe.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = mO(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : ee(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const i = e.getDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return ee(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(o, { unit: "day" });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const i = e.getDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return ee(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), i = n === 0 ? 7 : n;
    switch (t) {
      // 2
      case "i":
        return String(i);
      // 02
      case "ii":
        return ee(i, t.length);
      // 2nd
      case "io":
        return r.ordinalNumber(i, { unit: "day" });
      // Tue
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n === 12 ? i = bt.noon : n === 0 ? i = bt.midnight : i = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n >= 17 ? i = bt.evening : n >= 12 ? i = bt.afternoon : n >= 4 ? i = bt.morning : i = bt.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Xe.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Xe.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : ee(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : ee(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Xe.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Xe.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Xe.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return tu(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return ut(n);
      // Hours and minutes with `:` delimiter
      default:
        return ut(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return tu(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return ut(n);
      // Hours and minutes with `:` delimiter
      default:
        return ut(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + eu(n, ":");
      default:
        return "GMT" + ut(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + eu(n, ":");
      default:
        return "GMT" + ut(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return ee(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return ee(+e, t.length);
  }
};
function eu(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = Math.trunc(n / 60), o = n % 60;
  return o === 0 ? r + String(i) : r + String(i) + t + ee(o, 2);
}
function tu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ee(Math.abs(e) / 60, 2) : ut(e, t);
}
function ut(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = ee(Math.trunc(n / 60), 2), o = ee(n % 60, 2);
  return r + i + t + o;
}
const ru = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, Ih = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, _O = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], i = r[2];
  if (!i)
    return ru(e, t);
  let o;
  switch (n) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", ru(n, t)).replace("{{time}}", Ih(i, t));
}, xO = {
  p: Ih,
  P: _O
}, OO = /^D+$/, EO = /^Y+$/, AO = ["D", "DD", "YY", "YYYY"];
function kO(e) {
  return OO.test(e);
}
function SO(e) {
  return EO.test(e);
}
function PO(e, t, r) {
  const n = jO(e, t, r);
  if (console.warn(n), AO.includes(e)) throw new RangeError(n);
}
function jO(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const DO = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, IO = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, MO = /^'([^]*?)'?$/, RO = /''/g, FO = /[a-zA-Z]/;
function Mh(e, t, r) {
  const n = Yr(), i = n.locale ?? vO, o = n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, s = Fe(e, r?.in);
  if (!Tx(s))
    throw new RangeError("Invalid time value");
  let u = t.match(IO).map((c) => {
    const h = c[0];
    if (h === "p" || h === "P") {
      const x = xO[h];
      return x(c, i.formatLong);
    }
    return c;
  }).join("").match(DO).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const h = c[0];
    if (h === "'")
      return { isToken: !1, value: $O(c) };
    if (Zs[h])
      return { isToken: !0, value: c };
    if (h.match(FO))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: c };
  });
  i.localize.preprocessor && (u = i.localize.preprocessor(s, u));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: a,
    locale: i
  };
  return u.map((c) => {
    if (!c.isToken) return c.value;
    const h = c.value;
    (SO(h) || kO(h)) && PO(h, t, String(e));
    const x = Zs[h[0]];
    return x(s, h, i.localize, l);
  }).join("");
}
function $O(e) {
  const t = e.match(MO);
  return t ? t[1].replace(RO, "'") : e;
}
var nu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function TO(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function CO(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var zn, iu;
function It() {
  return iu || (iu = 1, zn = TypeError), zn;
}
const NO = {}, qO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NO
}, Symbol.toStringTag, { value: "Module" })), WO = /* @__PURE__ */ CO(qO);
var Bn, ou;
function Jr() {
  if (ou) return Bn;
  ou = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, h = c ? WeakSet.prototype.has : null, x = typeof WeakRef == "function" && WeakRef.prototype, d = x ? WeakRef.prototype.deref : null, v = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, S = String.prototype.match, w = String.prototype.slice, P = String.prototype.replace, D = String.prototype.toUpperCase, j = String.prototype.toLowerCase, O = RegExp.prototype.test, _ = Array.prototype.concat, E = Array.prototype.join, m = Array.prototype.slice, A = Math.floor, k = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, R = Object.getOwnPropertySymbols, L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, F = typeof Symbol == "function" && typeof Symbol.iterator == "object", W = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === F || !0) ? Symbol.toStringTag : null, V = Object.prototype.propertyIsEnumerable, C = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(f) {
    return f.__proto__;
  } : null);
  function M(f, p) {
    if (f === 1 / 0 || f === -1 / 0 || f !== f || f && f > -1e3 && f < 1e3 || O.call(/e/, p))
      return p;
    var q = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof f == "number") {
      var U = f < 0 ? -A(-f) : A(f);
      if (U !== f) {
        var X = String(U), $ = w.call(p, X.length + 1);
        return P.call(X, q, "$&_") + "." + P.call(P.call($, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return P.call(p, q, "$&_");
  }
  var B = WO, T = B.custom, N = Z(T) ? T : null, te = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ue = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Bn = function f(p, q, U, X) {
    var $ = q || {};
    if (K($, "quoteStyle") && !K(te, $.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (K($, "maxStringLength") && (typeof $.maxStringLength == "number" ? $.maxStringLength < 0 && $.maxStringLength !== 1 / 0 : $.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var he = K($, "customInspect") ? $.customInspect : !0;
    if (typeof he != "boolean" && he !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (K($, "indent") && $.indent !== null && $.indent !== "	" && !(parseInt($.indent, 10) === $.indent && $.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (K($, "numericSeparator") && typeof $.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var be = $.numericSeparator;
    if (typeof p > "u")
      return "undefined";
    if (p === null)
      return "null";
    if (typeof p == "boolean")
      return p ? "true" : "false";
    if (typeof p == "string")
      return Mt(p, $);
    if (typeof p == "number") {
      if (p === 0)
        return 1 / 0 / p > 0 ? "0" : "-0";
      var re = String(p);
      return be ? M(p, re) : re;
    }
    if (typeof p == "bigint") {
      var de = String(p) + "n";
      return be ? M(p, de) : de;
    }
    var tt = typeof $.depth > "u" ? 5 : $.depth;
    if (typeof U > "u" && (U = 0), U >= tt && tt > 0 && typeof p == "object")
      return fe(p) ? "[Array]" : "[Object]";
    var Oe = rn($, U);
    if (typeof X > "u")
      X = [];
    else if (ce(X, p) >= 0)
      return "[Circular]";
    function le(Ee, We, on) {
      if (We && (X = m.call(X), X.push(We)), on) {
        var zt = {
          depth: $.depth
        };
        return K($, "quoteStyle") && (zt.quoteStyle = $.quoteStyle), f(Ee, zt, U + 1, X);
      }
      return f(Ee, $, U + 1, X);
    }
    if (typeof p == "function" && !Y(p)) {
      var Ft = we(p), Tt = Ne(p, le);
      return "[Function" + (Ft ? ": " + Ft : " (anonymous)") + "]" + (Tt.length > 0 ? " { " + E.call(Tt, ", ") + " }" : "");
    }
    if (Z(p)) {
      var Ct = F ? P.call(String(p), /^(Symbol\(.*\))_[^)]*$/, "$1") : L.call(p);
      return typeof p == "object" && !F ? Me(Ct) : Ct;
    }
    if (Zr(p)) {
      for (var Re = "<" + j.call(String(p.nodeName)), rt = p.attributes || [], qe = 0; qe < rt.length; qe++)
        Re += " " + rt[qe].name + "=" + ve(me(rt[qe].value), "double", $);
      return Re += ">", p.childNodes && p.childNodes.length && (Re += "..."), Re += "</" + j.call(String(p.nodeName)) + ">", Re;
    }
    if (fe(p)) {
      if (p.length === 0)
        return "[]";
      var nt = Ne(p, le);
      return Oe && !tn(nt) ? "[" + et(nt, Oe) + "]" : "[ " + E.call(nt, ", ") + " ]";
    }
    if (z(p)) {
      var it = Ne(p, le);
      return !("cause" in Error.prototype) && "cause" in p && !V.call(p, "cause") ? "{ [" + String(p) + "] " + E.call(_.call("[cause]: " + le(p.cause), it), ", ") + " }" : it.length === 0 ? "[" + String(p) + "]" : "{ [" + String(p) + "] " + E.call(it, ", ") + " }";
    }
    if (typeof p == "object" && he) {
      if (N && typeof p[N] == "function" && B)
        return B(p, { depth: tt - U });
      if (he !== "symbol" && typeof p.inspect == "function")
        return p.inspect();
    }
    if (ye(p)) {
      var Nt = [];
      return n && n.call(p, function(Ee, We) {
        Nt.push(le(We, p, !0) + " => " + le(Ee, p));
      }), Rt("Map", r.call(p), Nt, Oe);
    }
    if (Ve(p)) {
      var qt = [];
      return s && s.call(p, function(Ee) {
        qt.push(le(Ee, p));
      }), Rt("Set", a.call(p), qt, Oe);
    }
    if (_e(p))
      return Ze("WeakMap");
    if (Qr(p))
      return Ze("WeakSet");
    if (xe(p))
      return Ze("WeakRef");
    if (H(p))
      return Me(le(Number(p)));
    if (Q(p))
      return Me(le(k.call(p)));
    if (J(p))
      return Me(v.call(p));
    if (G(p))
      return Me(le(String(p)));
    if (typeof window < "u" && p === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && p === globalThis || typeof nu < "u" && p === nu)
      return "{ [object globalThis] }";
    if (!ge(p) && !Y(p)) {
      var ot = Ne(p, le), Wt = C ? C(p) === Object.prototype : p instanceof Object || p.constructor === Object, at = p instanceof Object ? "" : "null prototype", Lt = !Wt && W && Object(p) === p && W in p ? w.call(oe(p), 8, -1) : at ? "Object" : "", nn = Wt || typeof p.constructor != "function" ? "" : p.constructor.name ? p.constructor.name + " " : "", st = nn + (Lt || at ? "[" + E.call(_.call([], Lt || [], at || []), ": ") + "] " : "");
      return ot.length === 0 ? st + "{}" : Oe ? st + "{" + et(ot, Oe) + "}" : st + "{ " + E.call(ot, ", ") + " }";
    }
    return String(p);
  };
  function ve(f, p, q) {
    var U = q.quoteStyle || p, X = te[U];
    return X + f + X;
  }
  function me(f) {
    return P.call(String(f), /"/g, "&quot;");
  }
  function ne(f) {
    return !W || !(typeof f == "object" && (W in f || typeof f[W] < "u"));
  }
  function fe(f) {
    return oe(f) === "[object Array]" && ne(f);
  }
  function ge(f) {
    return oe(f) === "[object Date]" && ne(f);
  }
  function Y(f) {
    return oe(f) === "[object RegExp]" && ne(f);
  }
  function z(f) {
    return oe(f) === "[object Error]" && ne(f);
  }
  function G(f) {
    return oe(f) === "[object String]" && ne(f);
  }
  function H(f) {
    return oe(f) === "[object Number]" && ne(f);
  }
  function J(f) {
    return oe(f) === "[object Boolean]" && ne(f);
  }
  function Z(f) {
    if (F)
      return f && typeof f == "object" && f instanceof Symbol;
    if (typeof f == "symbol")
      return !0;
    if (!f || typeof f != "object" || !L)
      return !1;
    try {
      return L.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Q(f) {
    if (!f || typeof f != "object" || !k)
      return !1;
    try {
      return k.call(f), !0;
    } catch {
    }
    return !1;
  }
  var ie = Object.prototype.hasOwnProperty || function(f) {
    return f in this;
  };
  function K(f, p) {
    return ie.call(f, p);
  }
  function oe(f) {
    return y.call(f);
  }
  function we(f) {
    if (f.name)
      return f.name;
    var p = S.call(g.call(f), /^function\s*([\w$]+)/);
    return p ? p[1] : null;
  }
  function ce(f, p) {
    if (f.indexOf)
      return f.indexOf(p);
    for (var q = 0, U = f.length; q < U; q++)
      if (f[q] === p)
        return q;
    return -1;
  }
  function ye(f) {
    if (!r || !f || typeof f != "object")
      return !1;
    try {
      r.call(f);
      try {
        a.call(f);
      } catch {
        return !0;
      }
      return f instanceof Map;
    } catch {
    }
    return !1;
  }
  function _e(f) {
    if (!l || !f || typeof f != "object")
      return !1;
    try {
      l.call(f, l);
      try {
        h.call(f, h);
      } catch {
        return !0;
      }
      return f instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function xe(f) {
    if (!d || !f || typeof f != "object")
      return !1;
    try {
      return d.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Ve(f) {
    if (!a || !f || typeof f != "object")
      return !1;
    try {
      a.call(f);
      try {
        r.call(f);
      } catch {
        return !0;
      }
      return f instanceof Set;
    } catch {
    }
    return !1;
  }
  function Qr(f) {
    if (!h || !f || typeof f != "object")
      return !1;
    try {
      h.call(f, h);
      try {
        l.call(f, l);
      } catch {
        return !0;
      }
      return f instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Zr(f) {
    return !f || typeof f != "object" ? !1 : typeof HTMLElement < "u" && f instanceof HTMLElement ? !0 : typeof f.nodeName == "string" && typeof f.getAttribute == "function";
  }
  function Mt(f, p) {
    if (f.length > p.maxStringLength) {
      var q = f.length - p.maxStringLength, U = "... " + q + " more character" + (q > 1 ? "s" : "");
      return Mt(w.call(f, 0, p.maxStringLength), p) + U;
    }
    var X = ue[p.quoteStyle || "single"];
    X.lastIndex = 0;
    var $ = P.call(P.call(f, X, "\\$1"), /[\x00-\x1f]/g, en);
    return ve($, "single", p);
  }
  function en(f) {
    var p = f.charCodeAt(0), q = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[p];
    return q ? "\\" + q : "\\x" + (p < 16 ? "0" : "") + D.call(p.toString(16));
  }
  function Me(f) {
    return "Object(" + f + ")";
  }
  function Ze(f) {
    return f + " { ? }";
  }
  function Rt(f, p, q, U) {
    var X = U ? et(q, U) : E.call(q, ", ");
    return f + " (" + p + ") {" + X + "}";
  }
  function tn(f) {
    for (var p = 0; p < f.length; p++)
      if (ce(f[p], `
`) >= 0)
        return !1;
    return !0;
  }
  function rn(f, p) {
    var q;
    if (f.indent === "	")
      q = "	";
    else if (typeof f.indent == "number" && f.indent > 0)
      q = E.call(Array(f.indent + 1), " ");
    else
      return null;
    return {
      base: q,
      prev: E.call(Array(p + 1), q)
    };
  }
  function et(f, p) {
    if (f.length === 0)
      return "";
    var q = `
` + p.prev + p.base;
    return q + E.call(f, "," + q) + `
` + p.prev;
  }
  function Ne(f, p) {
    var q = fe(f), U = [];
    if (q) {
      U.length = f.length;
      for (var X = 0; X < f.length; X++)
        U[X] = K(f, X) ? p(f[X], f) : "";
    }
    var $ = typeof R == "function" ? R(f) : [], he;
    if (F) {
      he = {};
      for (var be = 0; be < $.length; be++)
        he["$" + $[be]] = $[be];
    }
    for (var re in f)
      K(f, re) && (q && String(Number(re)) === re && re < f.length || F && he["$" + re] instanceof Symbol || (O.call(/[^\w$]/, re) ? U.push(p(re, f) + ": " + p(f[re], f)) : U.push(re + ": " + p(f[re], f))));
    if (typeof R == "function")
      for (var de = 0; de < $.length; de++)
        V.call(f, $[de]) && U.push("[" + p($[de]) + "]: " + p(f[$[de]], f));
    return U;
  }
  return Bn;
}
var Gn, au;
function LO() {
  if (au) return Gn;
  au = 1;
  var e = /* @__PURE__ */ Jr(), t = /* @__PURE__ */ It(), r = function(s, u, l) {
    for (var c = s, h; (h = c.next) != null; c = h)
      if (h.key === u)
        return c.next = h.next, l || (h.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = h), h;
  }, n = function(s, u) {
    if (s) {
      var l = r(s, u);
      return l && l.value;
    }
  }, i = function(s, u, l) {
    var c = r(s, u);
    c ? c.value = l : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: s.next,
      value: l
    };
  }, o = function(s, u) {
    return s ? !!r(s, u) : !1;
  }, a = function(s, u) {
    if (s)
      return r(s, u, !0);
  };
  return Gn = function() {
    var u, l = {
      assert: function(c) {
        if (!l.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var h = a(u, c);
        return h && u && !u.next && (u = void 0), !!h;
      },
      get: function(c) {
        return n(u, c);
      },
      has: function(c) {
        return o(u, c);
      },
      set: function(c, h) {
        u || (u = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          u,
          c,
          h
        );
      }
    };
    return l;
  }, Gn;
}
var Un, su;
function Rh() {
  return su || (su = 1, Un = Object), Un;
}
var Hn, uu;
function zO() {
  return uu || (uu = 1, Hn = Error), Hn;
}
var Vn, lu;
function BO() {
  return lu || (lu = 1, Vn = EvalError), Vn;
}
var Xn, cu;
function GO() {
  return cu || (cu = 1, Xn = RangeError), Xn;
}
var Yn, fu;
function UO() {
  return fu || (fu = 1, Yn = ReferenceError), Yn;
}
var Jn, pu;
function HO() {
  return pu || (pu = 1, Jn = SyntaxError), Jn;
}
var Kn, yu;
function VO() {
  return yu || (yu = 1, Kn = URIError), Kn;
}
var Qn, hu;
function XO() {
  return hu || (hu = 1, Qn = Math.abs), Qn;
}
var Zn, du;
function YO() {
  return du || (du = 1, Zn = Math.floor), Zn;
}
var ei, vu;
function JO() {
  return vu || (vu = 1, ei = Math.max), ei;
}
var ti, mu;
function KO() {
  return mu || (mu = 1, ti = Math.min), ti;
}
var ri, gu;
function QO() {
  return gu || (gu = 1, ri = Math.pow), ri;
}
var ni, bu;
function ZO() {
  return bu || (bu = 1, ni = Math.round), ni;
}
var ii, wu;
function eE() {
  return wu || (wu = 1, ii = Number.isNaN || function(t) {
    return t !== t;
  }), ii;
}
var oi, _u;
function tE() {
  if (_u) return oi;
  _u = 1;
  var e = /* @__PURE__ */ eE();
  return oi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, oi;
}
var ai, xu;
function rE() {
  return xu || (xu = 1, ai = Object.getOwnPropertyDescriptor), ai;
}
var si, Ou;
function Fh() {
  if (Ou) return si;
  Ou = 1;
  var e = /* @__PURE__ */ rE();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return si = e, si;
}
var ui, Eu;
function $h() {
  if (Eu) return ui;
  Eu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ui = e, ui;
}
var li, Au;
function nE() {
  return Au || (Au = 1, li = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== i || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), li;
}
var ci, ku;
function iE() {
  if (ku) return ci;
  ku = 1;
  var e = typeof Symbol < "u" && Symbol, t = nE();
  return ci = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, ci;
}
var fi, Su;
function Th() {
  return Su || (Su = 1, fi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), fi;
}
var pi, Pu;
function Ch() {
  if (Pu) return pi;
  Pu = 1;
  var e = /* @__PURE__ */ Rh();
  return pi = e.getPrototypeOf || null, pi;
}
var yi, ju;
function oE() {
  if (ju) return yi;
  ju = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(u, l) {
    for (var c = [], h = 0; h < u.length; h += 1)
      c[h] = u[h];
    for (var x = 0; x < l.length; x += 1)
      c[x + u.length] = l[x];
    return c;
  }, o = function(u, l) {
    for (var c = [], h = l, x = 0; h < u.length; h += 1, x += 1)
      c[x] = u[h];
    return c;
  }, a = function(s, u) {
    for (var l = "", c = 0; c < s.length; c += 1)
      l += s[c], c + 1 < s.length && (l += u);
    return l;
  };
  return yi = function(u) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var c = o(arguments, 1), h, x = function() {
      if (this instanceof h) {
        var S = l.apply(
          this,
          i(c, arguments)
        );
        return Object(S) === S ? S : this;
      }
      return l.apply(
        u,
        i(c, arguments)
      );
    }, d = r(0, l.length - c.length), v = [], y = 0; y < d; y++)
      v[y] = "$" + y;
    if (h = Function("binder", "return function (" + a(v, ",") + "){ return binder.apply(this,arguments); }")(x), l.prototype) {
      var g = function() {
      };
      g.prototype = l.prototype, h.prototype = new g(), g.prototype = null;
    }
    return h;
  }, yi;
}
var hi, Du;
function Kr() {
  if (Du) return hi;
  Du = 1;
  var e = oE();
  return hi = Function.prototype.bind || e, hi;
}
var di, Iu;
function qo() {
  return Iu || (Iu = 1, di = Function.prototype.call), di;
}
var vi, Mu;
function Nh() {
  return Mu || (Mu = 1, vi = Function.prototype.apply), vi;
}
var mi, Ru;
function aE() {
  return Ru || (Ru = 1, mi = typeof Reflect < "u" && Reflect && Reflect.apply), mi;
}
var gi, Fu;
function sE() {
  if (Fu) return gi;
  Fu = 1;
  var e = Kr(), t = Nh(), r = qo(), n = aE();
  return gi = n || e.call(r, t), gi;
}
var bi, $u;
function qh() {
  if ($u) return bi;
  $u = 1;
  var e = Kr(), t = /* @__PURE__ */ It(), r = qo(), n = sE();
  return bi = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, bi;
}
var wi, Tu;
function uE() {
  if (Tu) return wi;
  Tu = 1;
  var e = qh(), t = /* @__PURE__ */ Fh(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return wi = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return o(s == null ? s : i(s));
    }
  ) : !1, wi;
}
var _i, Cu;
function lE() {
  if (Cu) return _i;
  Cu = 1;
  var e = Th(), t = Ch(), r = /* @__PURE__ */ uE();
  return _i = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, _i;
}
var xi, Nu;
function cE() {
  if (Nu) return xi;
  Nu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Kr();
  return xi = r.call(e, t), xi;
}
var Oi, qu;
function Wo() {
  if (qu) return Oi;
  qu = 1;
  var e, t = /* @__PURE__ */ Rh(), r = /* @__PURE__ */ zO(), n = /* @__PURE__ */ BO(), i = /* @__PURE__ */ GO(), o = /* @__PURE__ */ UO(), a = /* @__PURE__ */ HO(), s = /* @__PURE__ */ It(), u = /* @__PURE__ */ VO(), l = /* @__PURE__ */ XO(), c = /* @__PURE__ */ YO(), h = /* @__PURE__ */ JO(), x = /* @__PURE__ */ KO(), d = /* @__PURE__ */ QO(), v = /* @__PURE__ */ ZO(), y = /* @__PURE__ */ tE(), g = Function, S = function(Y) {
    try {
      return g('"use strict"; return (' + Y + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Fh(), P = /* @__PURE__ */ $h(), D = function() {
    throw new s();
  }, j = w ? (function() {
    try {
      return arguments.callee, D;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return D;
      }
    }
  })() : D, O = iE()(), _ = lE(), E = Ch(), m = Th(), A = Nh(), k = qo(), R = {}, L = typeof Uint8Array > "u" || !_ ? e : _(Uint8Array), F = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": O && _ ? _([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": R,
    "%AsyncGenerator%": R,
    "%AsyncGeneratorFunction%": R,
    "%AsyncIteratorPrototype%": R,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": g,
    "%GeneratorFunction%": R,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": O && _ ? _(_([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !O || !_ ? e : _((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !O || !_ ? e : _((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": O && _ ? _(""[Symbol.iterator]()) : e,
    "%Symbol%": O ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": j,
    "%TypedArray%": L,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": k,
    "%Function.prototype.apply%": A,
    "%Object.defineProperty%": P,
    "%Object.getPrototypeOf%": E,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": h,
    "%Math.min%": x,
    "%Math.pow%": d,
    "%Math.round%": v,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": m
  };
  if (_)
    try {
      null.error;
    } catch (Y) {
      var W = _(_(Y));
      F["%Error.prototype%"] = W;
    }
  var V = function Y(z) {
    var G;
    if (z === "%AsyncFunction%")
      G = S("async function () {}");
    else if (z === "%GeneratorFunction%")
      G = S("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      G = S("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var H = Y("%AsyncGeneratorFunction%");
      H && (G = H.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var J = Y("%AsyncGenerator%");
      J && _ && (G = _(J.prototype));
    }
    return F[z] = G, G;
  }, C = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, M = Kr(), B = /* @__PURE__ */ cE(), T = M.call(k, Array.prototype.concat), N = M.call(A, Array.prototype.splice), te = M.call(k, String.prototype.replace), ue = M.call(k, String.prototype.slice), ve = M.call(k, RegExp.prototype.exec), me = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ne = /\\(\\)?/g, fe = function(z) {
    var G = ue(z, 0, 1), H = ue(z, -1);
    if (G === "%" && H !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (H === "%" && G !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var J = [];
    return te(z, me, function(Z, Q, ie, K) {
      J[J.length] = ie ? te(K, ne, "$1") : Q || Z;
    }), J;
  }, ge = function(z, G) {
    var H = z, J;
    if (B(C, H) && (J = C[H], H = "%" + J[0] + "%"), B(F, H)) {
      var Z = F[H];
      if (Z === R && (Z = V(H)), typeof Z > "u" && !G)
        throw new s("intrinsic " + z + " exists, but is not available. Please file an issue!");
      return {
        alias: J,
        name: H,
        value: Z
      };
    }
    throw new a("intrinsic " + z + " does not exist!");
  };
  return Oi = function(z, G) {
    if (typeof z != "string" || z.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof G != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (ve(/^%?[^%]*%?$/, z) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var H = fe(z), J = H.length > 0 ? H[0] : "", Z = ge("%" + J + "%", G), Q = Z.name, ie = Z.value, K = !1, oe = Z.alias;
    oe && (J = oe[0], N(H, T([0, 1], oe)));
    for (var we = 1, ce = !0; we < H.length; we += 1) {
      var ye = H[we], _e = ue(ye, 0, 1), xe = ue(ye, -1);
      if ((_e === '"' || _e === "'" || _e === "`" || xe === '"' || xe === "'" || xe === "`") && _e !== xe)
        throw new a("property names with quotes must have matching quotes");
      if ((ye === "constructor" || !ce) && (K = !0), J += "." + ye, Q = "%" + J + "%", B(F, Q))
        ie = F[Q];
      else if (ie != null) {
        if (!(ye in ie)) {
          if (!G)
            throw new s("base intrinsic for " + z + " exists, but the property is not available.");
          return;
        }
        if (w && we + 1 >= H.length) {
          var Ve = w(ie, ye);
          ce = !!Ve, ce && "get" in Ve && !("originalValue" in Ve.get) ? ie = Ve.get : ie = ie[ye];
        } else
          ce = B(ie, ye), ie = ie[ye];
        ce && !K && (F[Q] = ie);
      }
    }
    return ie;
  }, Oi;
}
var Ei, Wu;
function Wh() {
  if (Wu) return Ei;
  Wu = 1;
  var e = /* @__PURE__ */ Wo(), t = qh(), r = t([e("%String.prototype.indexOf%")]);
  return Ei = function(i, o) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Ei;
}
var Ai, Lu;
function Lh() {
  if (Lu) return Ai;
  Lu = 1;
  var e = /* @__PURE__ */ Wo(), t = /* @__PURE__ */ Wh(), r = /* @__PURE__ */ Jr(), n = /* @__PURE__ */ It(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Ai = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var h, x = {
      assert: function(d) {
        if (!x.has(d))
          throw new n("Side channel does not contain " + r(d));
      },
      delete: function(d) {
        if (h) {
          var v = u(h, d);
          return l(h) === 0 && (h = void 0), v;
        }
        return !1;
      },
      get: function(d) {
        if (h)
          return o(h, d);
      },
      has: function(d) {
        return h ? s(h, d) : !1;
      },
      set: function(d, v) {
        h || (h = new i()), a(h, d, v);
      }
    };
    return x;
  }, Ai;
}
var ki, zu;
function fE() {
  if (zu) return ki;
  zu = 1;
  var e = /* @__PURE__ */ Wo(), t = /* @__PURE__ */ Wh(), r = /* @__PURE__ */ Jr(), n = Lh(), i = /* @__PURE__ */ It(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return ki = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var h, x, d = {
        assert: function(v) {
          if (!d.has(v))
            throw new i("Side channel does not contain " + r(v));
        },
        delete: function(v) {
          if (o && v && (typeof v == "object" || typeof v == "function")) {
            if (h)
              return l(h, v);
          } else if (n && x)
            return x.delete(v);
          return !1;
        },
        get: function(v) {
          return o && v && (typeof v == "object" || typeof v == "function") && h ? a(h, v) : x && x.get(v);
        },
        has: function(v) {
          return o && v && (typeof v == "object" || typeof v == "function") && h ? u(h, v) : !!x && x.has(v);
        },
        set: function(v, y) {
          o && v && (typeof v == "object" || typeof v == "function") ? (h || (h = new o()), s(h, v, y)) : n && (x || (x = n()), x.set(v, y));
        }
      };
      return d;
    }
  ) : n, ki;
}
var Si, Bu;
function zh() {
  if (Bu) return Si;
  Bu = 1;
  var e = /* @__PURE__ */ It(), t = /* @__PURE__ */ Jr(), r = LO(), n = Lh(), i = fE(), o = i || n || r;
  return Si = function() {
    var s, u = {
      assert: function(l) {
        if (!u.has(l)) {
          var c = l && Object(l) === l ? "the given object key" : t(l);
          throw new e("Side channel does not contain " + c);
        }
      },
      delete: function(l) {
        return !!s && s.delete(l);
      },
      get: function(l) {
        return s && s.get(l);
      },
      has: function(l) {
        return !!s && s.has(l);
      },
      set: function(l, c) {
        s || (s = o()), s.set(l, c);
      }
    };
    return u;
  }, Si;
}
var Pi, Gu;
function Lo() {
  if (Gu) return Pi;
  Gu = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Pi = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, Pi;
}
var ji, Uu;
function Bh() {
  if (Uu) return ji;
  Uu = 1;
  var e = /* @__PURE__ */ Lo(), t = zh(), r = /* @__PURE__ */ $h(), n = Object.prototype.hasOwnProperty, i = Array.isArray, o = t(), a = function(m, A) {
    return o.set(m, A), m;
  }, s = function(m) {
    return o.has(m);
  }, u = function(m) {
    return o.get(m);
  }, l = function(m, A) {
    o.set(m, A);
  }, c = (function() {
    for (var E = [], m = 0; m < 256; ++m)
      E[E.length] = "%" + ((m < 16 ? "0" : "") + m.toString(16)).toUpperCase();
    return E;
  })(), h = function(m) {
    for (; m.length > 1; ) {
      var A = m.pop(), k = A.obj[A.prop];
      if (i(k)) {
        for (var R = [], L = 0; L < k.length; ++L)
          typeof k[L] < "u" && (R[R.length] = k[L]);
        A.obj[A.prop] = R;
      }
    }
  }, x = function(m, A) {
    for (var k = A && A.plainObjects ? { __proto__: null } : {}, R = 0; R < m.length; ++R)
      typeof m[R] < "u" && (k[R] = m[R]);
    return k;
  }, d = function(m, A, k) {
    A === "__proto__" && r ? r(m, A, {
      configurable: !0,
      enumerable: !0,
      value: k,
      writable: !0
    }) : m[A] = k;
  }, v = function E(m, A, k) {
    if (!A)
      return m;
    if (typeof A != "object" && typeof A != "function") {
      if (i(m)) {
        var R = m.length;
        if (k && typeof k.arrayLimit == "number" && R >= k.arrayLimit) {
          if (k.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          return a(x(m.concat(A), k), R);
        }
        m[R] = A;
      } else if (m && typeof m == "object")
        if (s(m)) {
          var L = u(m) + 1;
          m[L] = A, l(m, L);
        } else {
          if (k && k.strictMerge)
            return [m, A];
          (k && (k.plainObjects || k.allowPrototypes) || !n.call(Object.prototype, A)) && (m[A] = !0);
        }
      else
        return [m, A];
      return m;
    }
    if (!m || typeof m != "object") {
      if (s(A)) {
        for (var F = Object.keys(A), W = k && k.plainObjects ? { __proto__: null, 0: m } : { 0: m }, V = 0; V < F.length; V++) {
          var C = parseInt(F[V], 10);
          W[C + 1] = A[F[V]];
        }
        return a(W, u(A) + 1);
      }
      var M = [m].concat(A);
      if (k && typeof k.arrayLimit == "number" && M.length > k.arrayLimit) {
        if (k.throwOnLimitExceeded)
          throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        return a(x(M, k), M.length - 1);
      }
      return M;
    }
    var B = m;
    if (i(m) && !i(A) && (B = x(m, k)), i(m) && i(A)) {
      if (A.forEach(function(T, N) {
        if (n.call(m, N)) {
          var te = m[N];
          te && typeof te == "object" && T && typeof T == "object" ? m[N] = E(te, T, k) : m[m.length] = T;
        } else
          m[N] = T;
      }), k && typeof k.arrayLimit == "number" && m.length > k.arrayLimit) {
        if (k.throwOnLimitExceeded)
          throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        return a(x(m, k), m.length - 1);
      }
      return m;
    }
    return Object.keys(A).reduce(function(T, N) {
      var te = A[N];
      if (n.call(T, N) ? d(T, N, E(T[N], te, k)) : d(T, N, te), s(A) && !s(T) && a(T, u(A)), s(T)) {
        var ue = parseInt(N, 10);
        String(ue) === N && ue >= 0 && ue > u(T) && l(T, ue);
      }
      return T;
    }, B);
  }, y = function(m, A) {
    return Object.keys(A).reduce(function(k, R) {
      return d(k, R, A[R]), k;
    }, m);
  }, g = function(E, m, A) {
    var k = E.replace(/\+/g, " ");
    if (A === "iso-8859-1")
      return k.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(k);
    } catch {
      return k;
    }
  }, S = 1024, w = function(m, A, k, R, L) {
    if (m.length === 0)
      return m;
    var F = m;
    if (typeof m == "symbol" ? F = Symbol.prototype.toString.call(m) : typeof m != "string" && (F = String(m)), k === "iso-8859-1")
      return escape(F).replace(/%u[0-9a-f]{4}/gi, function(te) {
        return "%26%23" + parseInt(te.slice(2), 16) + "%3B";
      });
    for (var W = "", V = 0; V < F.length; V += S) {
      var C = F.length >= S ? F.slice(V, V + S) : F;
      if (V + S < F.length) {
        var M = C.charCodeAt(C.length - 1);
        M >= 55296 && M <= 56319 && (C = C.slice(0, -1), V -= 1);
      }
      for (var B = [], T = 0; T < C.length; ++T) {
        var N = C.charCodeAt(T);
        if (N === 45 || N === 46 || N === 95 || N === 126 || N >= 48 && N <= 57 || N >= 65 && N <= 90 || N >= 97 && N <= 122 || L === e.RFC1738 && (N === 40 || N === 41)) {
          B[B.length] = C.charAt(T);
          continue;
        }
        if (N < 128) {
          B[B.length] = c[N];
          continue;
        }
        if (N < 2048) {
          B[B.length] = c[192 | N >> 6] + c[128 | N & 63];
          continue;
        }
        if (N < 55296 || N >= 57344) {
          B[B.length] = c[224 | N >> 12] + c[128 | N >> 6 & 63] + c[128 | N & 63];
          continue;
        }
        T += 1, N = 65536 + ((N & 1023) << 10 | C.charCodeAt(T) & 1023), B[B.length] = c[240 | N >> 18] + c[128 | N >> 12 & 63] + c[128 | N >> 6 & 63] + c[128 | N & 63];
      }
      W += B.join("");
    }
    return W;
  }, P = function(m) {
    for (var A = [{ obj: { o: m }, prop: "o" }], k = t(), R = 0; R < A.length; ++R)
      for (var L = A[R], F = L.obj[L.prop], W = Object.keys(F), V = 0; V < W.length; ++V) {
        var C = W[V], M = F[C];
        typeof M == "object" && M !== null && !k.has(M) && (A[A.length] = { obj: F, prop: C }, k.set(M, !0));
      }
    return h(A), m;
  }, D = function(m) {
    return Object.prototype.toString.call(m) === "[object RegExp]";
  }, j = function(m) {
    return !m || typeof m != "object" ? !1 : !!(m.constructor && typeof m.constructor.isBuffer == "function" && m.constructor.isBuffer(m));
  }, O = function(m, A, k, R, L) {
    if (s(m)) {
      if (L)
        throw new RangeError("Array limit exceeded. Only " + k + " element" + (k === 1 ? "" : "s") + " allowed in an array.");
      for (var F = i(A) ? A : [A], W = u(m), V = 0; V < F.length; ++V)
        W += 1, m[W] = F[V];
      return l(m, W), m;
    }
    var C = [].concat(m, A);
    if (C.length > k) {
      if (L)
        throw new RangeError("Array limit exceeded. Only " + k + " element" + (k === 1 ? "" : "s") + " allowed in an array.");
      return a(x(C, { plainObjects: R }), C.length - 1);
    }
    return C;
  }, _ = function(m, A) {
    if (i(m)) {
      for (var k = [], R = 0; R < m.length; R += 1)
        k[k.length] = A(m[R]);
      return k;
    }
    return A(m);
  };
  return ji = {
    arrayToObject: x,
    assign: y,
    combine: O,
    compact: P,
    decode: g,
    encode: w,
    isBuffer: j,
    isOverflow: s,
    isRegExp: D,
    markOverflow: a,
    maybeMap: _,
    merge: v
  }, ji;
}
var Di, Hu;
function pE() {
  if (Hu) return Di;
  Hu = 1;
  var e = zh(), t = /* @__PURE__ */ Bh(), r = /* @__PURE__ */ Lo(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(g) {
      return g + "[]";
    },
    comma: "comma",
    indices: function(g, S) {
      return g + "[" + S + "]";
    },
    repeat: function(g) {
      return g;
    }
  }, o = Array.isArray, a = Array.prototype.push, s = function(y, g) {
    a.apply(y, o(g) ? g : [g]);
  }, u = Date.prototype.toISOString, l = r.default, c = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    depth: 1 / 0,
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: r.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(g) {
      return u.call(g);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, h = function(g) {
    return typeof g == "string" || typeof g == "number" || typeof g == "boolean" || typeof g == "symbol" || typeof g == "bigint";
  }, x = {}, d = function y(g, S, w, P, D, j, O, _, E, m, A, k, R, L, F, W, V, C, M, B) {
    var T = g;
    if (B > M)
      throw new RangeError("Input depth exceeded depth option of " + M);
    for (var N = C, te = 0, ue = !1; (N = N.get(x)) !== void 0 && !ue; ) {
      var ve = N.get(g);
      if (te += 1, typeof ve < "u") {
        if (ve === te)
          throw new RangeError("Cyclic object value");
        ue = !0;
      }
      typeof N.get(x) > "u" && (te = 0);
    }
    if (T = typeof m == "function" ? m(S, T) : T, T instanceof Date ? T = R(T) : w === "comma" && o(T) && (T = t.maybeMap(T, function(K) {
      return K instanceof Date ? R(K) : K;
    })), T === null) {
      if (j)
        return F(E && !W ? E(S, c.encoder, V, "key", L) : S);
      T = "";
    }
    if (h(T) || t.isBuffer(T)) {
      if (E) {
        var me = W ? S : E(S, c.encoder, V, "key", L);
        return [F(me) + "=" + F(E(T, c.encoder, V, "value", L))];
      }
      return [F(S) + "=" + F(String(T))];
    }
    var ne = [];
    if (typeof T > "u")
      return ne;
    var fe;
    if (w === "comma" && o(T))
      W && E && (T = t.maybeMap(T, function(K) {
        return K == null ? K : E(K);
      })), fe = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
    else if (o(m))
      fe = m;
    else {
      var ge = Object.keys(T);
      fe = A ? ge.sort(A) : ge;
    }
    var Y = _ ? String(S).replace(/\./g, "%2E") : String(S), z = P && o(T) && T.length === 1 ? Y + "[]" : Y;
    if (D && o(T) && T.length === 0 && Object.keys(T).length === 0)
      return z + "[]";
    for (var G = 0; G < fe.length; ++G) {
      var H = fe[G], J = typeof H == "object" && H && typeof H.value < "u" ? H.value : T[H];
      if (!(O && J === null)) {
        var Z = k && _ ? String(H).replace(/\./g, "%2E") : String(H), Q = o(T) ? typeof w == "function" ? w(z, Z) : z : z + (k ? "." + Z : "[" + Z + "]");
        C.set(g, te);
        var ie = e();
        ie.set(x, C), s(ne, y(
          J,
          Q,
          w,
          P,
          D,
          j,
          O,
          _,
          w === "comma" && W && o(T) ? null : E,
          m,
          A,
          k,
          R,
          L,
          F,
          W,
          V,
          ie,
          M,
          B + 1
        ));
      }
    }
    return ne;
  }, v = function(g) {
    if (!g)
      return c;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.encodeDotInKeys < "u" && typeof g.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.encoder !== null && typeof g.encoder < "u" && typeof g.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var S = g.charset || c.charset;
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var w = r.default;
    if (typeof g.format < "u") {
      if (!n.call(r.formatters, g.format))
        throw new TypeError("Unknown format option provided.");
      w = g.format;
    }
    var P = r.formatters[w], D = c.filter;
    (typeof g.filter == "function" || o(g.filter)) && (D = g.filter);
    var j;
    if (g.arrayFormat in i ? j = g.arrayFormat : "indices" in g ? j = g.indices ? "indices" : "repeat" : j = c.arrayFormat, "commaRoundTrip" in g && typeof g.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var O = typeof g.allowDots > "u" ? g.encodeDotInKeys === !0 ? !0 : c.allowDots : !!g.allowDots;
    return {
      addQueryPrefix: typeof g.addQueryPrefix == "boolean" ? g.addQueryPrefix : c.addQueryPrefix,
      allowDots: O,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: j,
      charset: S,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!g.commaRoundTrip,
      delimiter: typeof g.delimiter > "u" ? c.delimiter : g.delimiter,
      depth: typeof g.depth == "number" ? g.depth : c.depth,
      encode: typeof g.encode == "boolean" ? g.encode : c.encode,
      encodeDotInKeys: typeof g.encodeDotInKeys == "boolean" ? g.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof g.encoder == "function" ? g.encoder : c.encoder,
      encodeValuesOnly: typeof g.encodeValuesOnly == "boolean" ? g.encodeValuesOnly : c.encodeValuesOnly,
      filter: D,
      format: w,
      formatter: P,
      serializeDate: typeof g.serializeDate == "function" ? g.serializeDate : c.serializeDate,
      skipNulls: typeof g.skipNulls == "boolean" ? g.skipNulls : c.skipNulls,
      sort: typeof g.sort == "function" ? g.sort : null,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : c.strictNullHandling
    };
  };
  return Di = function(y, g) {
    var S = y, w = v(g), P, D;
    typeof w.filter == "function" ? (D = w.filter, S = D("", S)) : o(w.filter) && (D = w.filter, P = D);
    var j = [];
    if (typeof S != "object" || S === null)
      return "";
    var O = i[w.arrayFormat], _ = O === "comma" && w.commaRoundTrip;
    P || (P = Object.keys(S)), w.sort && P.sort(w.sort);
    for (var E = e(), m = 0; m < P.length; ++m) {
      var A = P[m];
      if (!(typeof A > "u" || A === null)) {
        var k = S[A];
        if (!(w.skipNulls && k === null)) {
          var R = w.encodeDotInKeys ? String(A).replace(/\./g, "%2E") : String(A);
          s(j, d(
            k,
            R,
            O,
            _,
            w.allowEmptyArrays,
            w.strictNullHandling,
            w.skipNulls,
            w.encodeDotInKeys,
            w.encode ? w.encoder : null,
            w.filter,
            w.sort,
            w.allowDots,
            w.serializeDate,
            w.format,
            w.formatter,
            w.encodeValuesOnly,
            w.charset,
            E,
            w.depth,
            0
          ));
        }
      }
    }
    var L = j.join(w.delimiter), F = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? F += "utf8=%26%2310003%3B" + w.delimiter : F += "utf8=%E2%9C%93" + w.delimiter), L.length > 0 ? F + L : "";
  }, Di;
}
var Ii, Vu;
function yE() {
  if (Vu) return Ii;
  Vu = 1;
  var e = /* @__PURE__ */ Bh(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictMerge: !0,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, i = function(d) {
    return d.replace(/&#(\d+);/g, function(v, y) {
      return String.fromCharCode(parseInt(y, 10));
    });
  }, o = function(d, v, y) {
    if (d && typeof d == "string" && v.comma && d.indexOf(",") > -1) {
      if (v.throwOnLimitExceeded)
        for (var g = 0, S = d.indexOf(","); S > -1; ) {
          if (g += 1, g >= v.arrayLimit)
            throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          S = d.indexOf(",", S + 1);
        }
      return d.split(",");
    }
    if (v.throwOnLimitExceeded && y >= v.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return d;
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", u = function(v, y) {
    var g = { __proto__: null }, S = y.ignoreQueryPrefix ? v.replace(/^\?/, "") : v;
    S = S.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var w = y.parameterLimit === 1 / 0 ? void 0 : y.parameterLimit, P = S.split(
      y.delimiter,
      y.throwOnLimitExceeded && typeof w < "u" ? w + 1 : w
    );
    if (y.throwOnLimitExceeded && typeof w < "u" && P.length > w)
      throw new RangeError("Parameter limit exceeded. Only " + w + " parameter" + (w === 1 ? "" : "s") + " allowed.");
    var D = -1, j, O = y.charset;
    if (y.charsetSentinel)
      for (j = 0; j < P.length; ++j)
        P[j].indexOf("utf8=") === 0 && (P[j] === s ? O = "utf-8" : P[j] === a && (O = "iso-8859-1"), D = j, j = P.length);
    for (j = 0; j < P.length; ++j)
      if (j !== D) {
        var _ = P[j], E = _.indexOf("]="), m = E === -1 ? _.indexOf("=") : E + 1, A, k;
        if (m === -1 ? (A = y.decoder(_, n.decoder, O, "key"), k = y.strictNullHandling ? null : "") : (A = y.decoder(_.slice(0, m), n.decoder, O, "key"), A !== null && (k = e.maybeMap(
          o(
            _.slice(m + 1),
            y,
            r(g[A]) ? g[A].length : 0
          ),
          function(L) {
            return y.decoder(L, n.decoder, O, "value");
          }
        ))), k && y.interpretNumericEntities && O === "iso-8859-1" && (k = i(String(k))), _.indexOf("[]=") > -1 && (k = r(k) ? [k] : k), y.comma && r(k) && k.length > y.arrayLimit && (k = e.combine([], k, y.arrayLimit, y.plainObjects, y.throwOnLimitExceeded)), A !== null) {
          var R = t.call(g, A);
          R && (y.duplicates === "combine" || _.indexOf("[]=") > -1) ? g[A] = e.combine(
            g[A],
            k,
            y.arrayLimit,
            y.plainObjects,
            y.throwOnLimitExceeded
          ) : (!R || y.duplicates === "last") && (g[A] = k);
        }
      }
    return g;
  }, l = function(d, v, y, g) {
    var S = 0;
    if (d.length > 0 && d[d.length - 1] === "[]") {
      var w = d.slice(0, -1).join("");
      S = Array.isArray(v) && v[w] ? v[w].length : 0;
    }
    for (var P = g ? v : o(v, y, S), D = d.length - 1; D >= 0; --D) {
      var j, O = d[D];
      if (O === "[]" && y.parseArrays)
        e.isOverflow(P) ? j = P : j = y.allowEmptyArrays && (P === "" || y.strictNullHandling && P === null) ? [] : e.combine(
          [],
          P,
          y.arrayLimit,
          y.plainObjects,
          y.throwOnLimitExceeded
        );
      else {
        j = y.plainObjects ? { __proto__: null } : {};
        var _ = O.charAt(0) === "[" && O.charAt(O.length - 1) === "]" ? O.slice(1, -1) : O, E = y.decodeDotInKeys ? _.replace(/%2E/g, ".") : _, m = parseInt(E, 10), A = !isNaN(m) && O !== E && String(m) === E && m >= 0 && y.parseArrays;
        if (!y.parseArrays && E === "")
          j = { 0: P };
        else if (A && m < y.arrayLimit)
          j = [], j[m] = P;
        else {
          if (A && y.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + y.arrayLimit + " element" + (y.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          A ? (j[m] = P, e.markOverflow(j, m)) : E !== "__proto__" && (j[E] = P);
        }
      }
      P = j;
    }
    return P;
  }, c = function(v, y) {
    var g = y.allowDots ? v.replace(/\.([^.[]+)/g, "[$1]") : v;
    if (y.depth <= 0)
      return !y.plainObjects && t.call(Object.prototype, g) && !y.allowPrototypes ? void 0 : [g];
    var S = [], w = g.indexOf("["), P = w >= 0 ? g.slice(0, w) : g;
    if (P) {
      if (!y.plainObjects && t.call(Object.prototype, P) && !y.allowPrototypes)
        return;
      S[S.length] = P;
    }
    for (var D = g.length, j = w, O = 0; j >= 0 && O < y.depth; ) {
      for (var _ = 1, E = j + 1, m = -1; E < D && m < 0; ) {
        var A = g.charCodeAt(E);
        A === 91 ? _ += 1 : A === 93 && (_ -= 1, _ === 0 && (m = E)), E += 1;
      }
      if (m < 0)
        return S[S.length] = "[" + g.slice(j) + "]", S;
      var k = g.slice(j, m + 1), R = k.slice(1, -1);
      if (!y.plainObjects && t.call(Object.prototype, R) && !y.allowPrototypes)
        return;
      S[S.length] = k, O += 1, j = g.indexOf("[", m + 1);
    }
    if (j >= 0) {
      if (y.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + y.depth + " and strictDepth is true");
      S[S.length] = "[" + g.slice(j) + "]";
    }
    return S;
  }, h = function(v, y, g, S) {
    if (v) {
      var w = c(v, g);
      if (w)
        return l(w, y, g, S);
    }
  }, x = function(v) {
    if (!v)
      return n;
    if (typeof v.allowEmptyArrays < "u" && typeof v.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof v.decodeDotInKeys < "u" && typeof v.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (v.decoder !== null && typeof v.decoder < "u" && typeof v.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof v.charset < "u" && v.charset !== "utf-8" && v.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof v.throwOnLimitExceeded < "u" && typeof v.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var y = typeof v.charset > "u" ? n.charset : v.charset, g = typeof v.duplicates > "u" ? n.duplicates : v.duplicates;
    if (g !== "combine" && g !== "first" && g !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var S = typeof v.allowDots > "u" ? v.decodeDotInKeys === !0 ? !0 : n.allowDots : !!v.allowDots;
    return {
      allowDots: S,
      allowEmptyArrays: typeof v.allowEmptyArrays == "boolean" ? !!v.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof v.allowPrototypes == "boolean" ? v.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof v.allowSparse == "boolean" ? v.allowSparse : n.allowSparse,
      arrayLimit: typeof v.arrayLimit == "number" ? v.arrayLimit : n.arrayLimit,
      charset: y,
      charsetSentinel: typeof v.charsetSentinel == "boolean" ? v.charsetSentinel : n.charsetSentinel,
      comma: typeof v.comma == "boolean" ? v.comma : n.comma,
      decodeDotInKeys: typeof v.decodeDotInKeys == "boolean" ? v.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof v.decoder == "function" ? v.decoder : n.decoder,
      delimiter: typeof v.delimiter == "string" || e.isRegExp(v.delimiter) ? v.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof v.depth == "number" || v.depth === !1 ? +v.depth : n.depth,
      duplicates: g,
      ignoreQueryPrefix: v.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof v.interpretNumericEntities == "boolean" ? v.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof v.parameterLimit == "number" ? v.parameterLimit : n.parameterLimit,
      parseArrays: v.parseArrays !== !1,
      plainObjects: typeof v.plainObjects == "boolean" ? v.plainObjects : n.plainObjects,
      strictDepth: typeof v.strictDepth == "boolean" ? !!v.strictDepth : n.strictDepth,
      strictMerge: typeof v.strictMerge == "boolean" ? !!v.strictMerge : n.strictMerge,
      strictNullHandling: typeof v.strictNullHandling == "boolean" ? v.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof v.throwOnLimitExceeded == "boolean" ? v.throwOnLimitExceeded : !1
    };
  };
  return Ii = function(d, v) {
    var y = x(v);
    if (d === "" || d === null || typeof d > "u")
      return y.plainObjects ? { __proto__: null } : {};
    for (var g = typeof d == "string" ? u(d, y) : d, S = y.plainObjects ? { __proto__: null } : {}, w = Object.keys(g), P = 0; P < w.length; ++P) {
      var D = w[P], j = h(D, g[D], y, typeof d == "string");
      S = e.merge(S, j, y);
    }
    return y.allowSparse === !0 ? S : e.compact(S);
  }, Ii;
}
var Mi, Xu;
function hE() {
  if (Xu) return Mi;
  Xu = 1;
  var e = /* @__PURE__ */ pE(), t = /* @__PURE__ */ yE(), r = /* @__PURE__ */ Lo();
  return Mi = {
    formats: r,
    parse: t,
    stringify: e
  }, Mi;
}
var dE = /* @__PURE__ */ hE();
const vE = /* @__PURE__ */ TO(dE);
function Zi(e = /* @__PURE__ */ cr()) {
  return /* @__PURE__ */ Ce(/* @__PURE__ */ Te([e, /* @__PURE__ */ Et(e)]), /* @__PURE__ */ ke((t) => Array.isArray(t) ? t : [t]), /* @__PURE__ */ Et(e));
}
Zi.number = () => Zi(/* @__PURE__ */ Vr());
const Gh = () => /* @__PURE__ */ Ce(/* @__PURE__ */ Te([/* @__PURE__ */ Ie(), /* @__PURE__ */ Vr()]), /* @__PURE__ */ ke(Number), /* @__PURE__ */ Io()), Uh = () => /* @__PURE__ */ Ce(/* @__PURE__ */ Te([/* @__PURE__ */ Ie(), /* @__PURE__ */ Mo()]), /* @__PURE__ */ ke((e) => e === !0 || e === "true")), Hh = () => /* @__PURE__ */ Ce(/* @__PURE__ */ Te([/* @__PURE__ */ Ie(), /* @__PURE__ */ Hr()]), /* @__PURE__ */ ke((e) => e instanceof Date ? e : new Date(e)), /* @__PURE__ */ ke((e) => e && Mh(e, "yyyy-MM-dd"))), Vh = () => /* @__PURE__ */ Ce(/* @__PURE__ */ Te([/* @__PURE__ */ Ie(), /* @__PURE__ */ Hr()]), /* @__PURE__ */ ke((e) => e && (e === "null" ? null : (typeof e == "string" && (e = new Date(e)), Mh(e, "yyyy-MM-dd HH:mm"))))), Xh = (e = /* @__PURE__ */ cr()) => /* @__PURE__ */ Ce(/* @__PURE__ */ Te([/* @__PURE__ */ Ie(), /* @__PURE__ */ Et(/* @__PURE__ */ Ie())]), /* @__PURE__ */ ke((t) => Array.isArray(t) ? t : t.split(",")), /* @__PURE__ */ Et(e)), Yh = () => /* @__PURE__ */ Ce(Xh(), /* @__PURE__ */ ke((e) => e.map(Number))), zo = () => /* @__PURE__ */ Ce(/* @__PURE__ */ Te([/* @__PURE__ */ Ie(), /* @__PURE__ */ Co(/* @__PURE__ */ Ie(), /* @__PURE__ */ cr())]), /* @__PURE__ */ ke((e) => typeof e == "string" ? vE.parse(e) : e), /* @__PURE__ */ ke((e) => {
  let t = {};
  for (let r in e) _c(t, r, P_(e, r));
  return t;
}));
function Ae() {
  return zo();
}
Ae.number = Gh, Ae.boolean = Uh, Ae.date = Hh, Ae.datetime = Vh, Ae.array = Xh, Ae.arrayNumber = Yh, Ae.object = zo;
const mE = () => /* @__PURE__ */ Ce(/* @__PURE__ */ Ie(), /* @__PURE__ */ ke((e) => {
  let t = e.split(/[;\n]/).filter(Boolean).filter((i) => i.includes("=")).map((i) => i.trim().split("=")), r = Object.fromEntries(t), n = {};
  for (let [i, o] of Object.entries(r)) {
    let a = o;
    o.startsWith("bool:") && (a = o.replace("bool:", "").trim() === "true"), _c(n, i, a);
  }
  return n;
})), Bo = (e = {}) => /* @__PURE__ */ $o({ page: /* @__PURE__ */ er(Ae.number(), 1), limit: /* @__PURE__ */ er(Ae.number(), e.maxLimit || 100), orderBy: /* @__PURE__ */ kr(e.orderFields ? Ae.array(/* @__PURE__ */ Xr(e.orderFields)) : Ae.array(/* @__PURE__ */ Ie()), []), orderDirection: /* @__PURE__ */ kr(Ae.array(/* @__PURE__ */ Te([/* @__PURE__ */ Ar("asc"), /* @__PURE__ */ Ar("desc")])), []) });
function Jh(e = {}) {
  return Bo(e);
}
Jh.base = Bo;
var gE = D_({ array: () => Zi, arrayNumber: () => Yh, base: () => Bo, boolean: () => Uh, date: () => Hh, datetime: () => Vh, keyValue: () => mE, number: () => Gh, object: () => zo, pagination: () => Jh, url: () => Ae }), bE = class {
  static __container_entry_key = "ValidatorService";
  v = { ...jx, extras: gE };
  create(e) {
    return e(this.v);
  }
  validate(e, t) {
    let r = typeof t == "function" ? t(this.v) : t, { output: n, issues: i, success: o } = /* @__PURE__ */ Pr(r, e);
    if (!o) {
      let a = /* @__PURE__ */ Bi(i), s = [];
      a.root && s.push(...a.root), a.nested && Object.entries(a.nested).forEach((l) => {
        let [c, h] = l;
        s.push(...h.map((x) => `${c}: ${x}`));
      });
      let u = new j_(s.length ? s.join(", ") : "Validation failed", 422);
      throw u.name = "ValidationError", Object.assign(u, { messages: s }), u;
    }
    return n;
  }
  async validateAsync(e, t) {
    let r = typeof t == "function" ? t(this.v) : t, { output: n, issues: i, success: o } = await /* @__PURE__ */ No(r, e);
    if (!o) {
      let a = Error("Validation failed"), s = /* @__PURE__ */ Bi(i), u = { ...s.root, ...s.nested };
      throw Object.assign(a, { details: u }), a;
    }
    return n;
  }
  isValid(e, t) {
    let r = typeof t == "function" ? t(this.v) : t, { success: n } = /* @__PURE__ */ Pr(r, e);
    return n;
  }
};
function Ue(...e) {
  return e.reduce((t, r) => r(t), class {
  });
}
function wE(e) {
  return function(t) {
    class r extends t {
      constructor(...i) {
        super(...i);
        let o = new e(...i);
        Object.assign(this, o);
      }
    }
    for (let n of Reflect.ownKeys(e.prototype)) n !== "constructor" && Object.defineProperty(r.prototype, n, Object.getOwnPropertyDescriptor(e.prototype, n));
    return r;
  };
}
const At = new bE();
function vr() {
  return At.create((e) => e.object({ id: e.number(), dashboard_id: e.number(), name: e.string(), value: e.nullable(e.string()) }));
}
vr.create = At.create((e) => e.pick(vr(), ["dashboard_id", "name", "value"])), vr.update = At.create((e) => e.partial(vr.create));
function mr() {
  return At.create((e) => e.object({ id: e.number(), name: e.string(), description: e.nullable(e.string()), created_at: e.string(), updated_at: e.string(), deleted_at: e.nullable(e.string()), metas: e.optional(e.record(e.string(), e.any())) }));
}
mr.create = At.create((e) => e.pick(mr(), ["name", "description"])), mr.update = At.create((e) => e.partial(mr.create));
function He(e) {
  return class extends e {
    static from(t) {
      let r = typeof this == "function" ? this : e, n = new r(), i = { ...t };
      return typeof r?.parse == "function" && (i = r.parse(t)), typeof this?.parse == "function" && (i = this.parse(t)), Object.assign(n, i), n;
    }
    merge(t) {
      return Object.assign(this, t), this;
    }
  };
}
function fr(e) {
  return class extends e {
    deleted_at = null;
  };
}
function pr(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
(class extends Ue(He) {
  id;
  name;
  description = null;
  origin;
  subject;
  action;
  conditions = null;
  get editable() {
    return this.origin === "custom";
  }
  get parsedConditions() {
    if (!this.conditions) return {};
    let [e, t] = Oc.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return e ? {} : t;
  }
});
(class extends Ue(He, pr, fr) {
  id;
  drive;
  mimetype;
  purpose;
  client_name;
  filename;
  public;
  url;
  metas;
  isImage() {
    return this.mimetype.startsWith("image/");
  }
});
(class extends Ue(He, pr, fr) {
  id;
  file_id;
  name;
  value;
});
(class extends Ue(He, pr, fr) {
  id;
  purpose;
  mime_types;
  max_size;
  upload_url;
  create_file_url;
  getParsedMimeTypes() {
    return this.mime_types.split(",").map((e) => e.trim());
  }
  isAllowedMimeType(e) {
    let t = this.getParsedMimeTypes();
    return t.includes(e) || t.includes("*/*");
  }
  isAllowedSize(e) {
    return e <= this.max_size;
  }
});
(class extends Ue(He, wE(Po)) {
  id;
  name;
  enabled = !1;
  dependencies = {};
  build = {};
  directory;
  upgrade_info;
  setData(e) {
    let t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
    Object.assign(this, t), this.hook_id = `module:${this.id}`;
  }
});
(class extends Ue(He) {
  id;
  name;
  version;
  description;
  enabled;
  author;
  dependencies;
  build;
});
(class extends Ue(He) {
  id;
  name;
  version;
  enabled;
  aliases;
  version_channel;
  version_available_channels;
});
(class extends Ue(He, pr, fr) {
  id;
  name;
  description;
});
(class extends Ue(He, pr, fr) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    let [e, t] = this.name.split(" ");
    return t ? e[0].toUpperCase() + t[0].toUpperCase() : e[0].toUpperCase();
  }
});
class _E extends Po {
  async onLoad() {
    Ws.add({
      layout: "admin",
      label: $t("Plans"),
      icon: "FileText",
      group: $t("Backups"),
      to: "/admin/zbackup/plans"
    }), Ws.add({
      layout: "admin",
      label: $t("Triggers"),
      icon: "Clock",
      group: $t("Backups"),
      to: "/admin/zbackup/triggers"
    });
  }
}
const xE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _E
}, Symbol.toStringTag, { value: "Module" }));
class OE extends Po {
  async onLoad() {
    zi.addRoute({
      path: "/admin/zbackup",
      redirect: "/admin/zbackup/plans"
    }), zi.auto(/* @__PURE__ */ Object.assign({ "../pages/plans/[id].vue": () => import("./_id_-CdkO7__3.mjs"), "../pages/plans/index.vue": () => import("./index-DsoNGcqc.mjs"), "../pages/triggers/index.vue": () => import("./index-EPzfuXY8.mjs") }), {
      strip: ["pages"],
      prefix: "/admin/zbackup",
      guards: [a0],
      refine: (t) => t.map((r) => (r.meta = { layout: "admin" }, r))
    });
  }
}
const EE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OE
}, Symbol.toStringTag, { value: "Module" }));
class TE extends i0 {
  async load() {
    t0.addImports(/* @__PURE__ */ Object.assign({ "./hooks/menu.ts": xE, "./hooks/routes.ts": EE }));
  }
}
export {
  jE as C,
  zi as G,
  DE as U,
  ME as Z,
  Et as a,
  FE as b,
  cr as c,
  Mo as d,
  er as e,
  Mh as f,
  RE as g,
  TE as i,
  $o as o,
  bx as p,
  Co as r,
  Ie as s,
  ol as z
};
