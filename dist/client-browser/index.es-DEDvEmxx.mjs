import * as Ou from "vue";
import { defineComponent as O, openBlock as v, createBlock as x, resolveDynamicComponent as Ua, normalizeClass as ye, unref as u, withCtx as m, renderSlot as A, createElementBlock as W, ref as F, useModel as pe, computed as D, watch as ge, createVNode as _, createCommentVNode as Z, createTextVNode as J, toDisplayString as V, createElementVNode as ee, withModifiers as Pe, Fragment as xe, renderList as De, mergeModels as Ve, resolveComponent as $k, mergeProps as I, createSlots as Mf, normalizeProps as Ie, guardReactiveProps as We, normalizeStyle as ut, isRef as tt, onMounted as Ae, toRefs as Ye, withKeys as mt, shallowRef as Fa, getCurrentInstance as Kt, toRef as Ba, camelize as Df, onBeforeUnmount as ts, provide as as, withDirectives as mr, vModelText as Pf, toValue as Se, onServerPrefetch as Bk, nextTick as _e, vShow as Kn, h as aa, useAttrs as Mk, toHandlerKey as Dk, onUpdated as Pk, triggerRef as jk, customRef as rs, onUnmounted as _t, inject as rn, Comment as Ik, cloneVNode as Fk, Teleport as jf, reactive as Gn, getCurrentScope as vo, onScopeDispose as ns, hasInjectionContext as If, watchEffect as it, readonly as Ff, watchPostEffect as Tf, withMemo as os, markRaw as Tk, effectScope as Nf, mergeDefaults as Vf, watchSyncEffect as Nk, shallowReadonly as ar, isVNode as Tr } from "vue";
import { useForm as Vk, Field as Rk, ErrorMessage as Uk, isNotNestedPath as Lk, cleanupNonNestedPath as Wk, useField as Kk, FieldContextKey as Gk, useFieldError as Hk, useIsFieldTouched as Yk, useIsFieldDirty as Zk, useIsFieldValid as Qk } from "vee-validate";
import { useRouter as Rf, useRoute as Uf } from "vue-router";
function go(e, t) {
  return vo() ? (ns(e, t), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Vn() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const r = () => t(a);
      return go(r), { off: r };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((r) => r(...a))),
    clear: () => {
      e.clear();
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jk(e) {
  let t = !1, a;
  const r = Nf(!0);
  return ((...n) => (t || (a = r.run(() => e(...n)), t = !0), a));
}
const ci = /* @__PURE__ */ new WeakMap(), Xk = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], r = (t = Kt()) === null || t === void 0 ? void 0 : t.proxy, n = r ?? vo();
  if (n == null && !If()) throw new Error("injectLocal must be called in setup");
  return n && ci.has(n) && a in ci.get(n) ? ci.get(n)[a] : rn(...e);
}, xt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const e0 = (e) => typeof e < "u", t0 = Object.prototype.toString, a0 = (e) => t0.call(e) === "[object Object]", yl = () => {
};
function r0(...e) {
  if (e.length !== 1) return Ba(...e);
  const t = e[0];
  return typeof t == "function" ? Ff(rs(() => ({
    get: t,
    set: yl
  }))) : F(t);
}
function n0(e, t) {
  function a(...r) {
    return new Promise((n, o) => {
      Promise.resolve(e(() => t.apply(this, r), {
        fn: t,
        thisArg: this,
        args: r
      })).then(n).catch(o);
    });
  }
  return a;
}
const Lf = (e) => e();
function o0(e, t = {}) {
  let a, r, n = yl;
  const o = (l) => {
    clearTimeout(l), n(), n = yl;
  };
  let i;
  return (l) => {
    const s = Se(e), d = Se(t.maxWait);
    return a && o(a), s <= 0 || d !== void 0 && d <= 0 ? (r && (o(r), r = void 0), Promise.resolve(l())) : new Promise((c, f) => {
      n = t.rejectOnCancel ? f : c, i = l, d && !r && (r = setTimeout(() => {
        a && o(a), r = void 0, c(i());
      }, d)), a = setTimeout(() => {
        r && o(r), r = void 0, c(l());
      }, s);
    });
  };
}
function i0(e = Lf, t = {}) {
  const { initialState: a = "active" } = t, r = r0(a === "active");
  function n() {
    r.value = !1;
  }
  function o() {
    r.value = !0;
  }
  const i = (...l) => {
    r.value && e(...l);
  };
  return {
    isActive: Ff(r),
    pause: n,
    resume: o,
    eventFilter: i
  };
}
function l0(e, t) {
  var a;
  if (typeof e == "number") return e + t;
  const r = ((a = e.match(/^-?\d+\.?\d*/)) === null || a === void 0 ? void 0 : a[0]) || "", n = e.slice(r.length), o = Number.parseFloat(r) + t;
  return Number.isNaN(o) ? e : o + n;
}
function Qr(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function fi(e) {
  return Array.isArray(e) ? e : [e];
}
function Wf(e) {
  return Kt();
}
// @__NO_SIDE_EFFECTS__
function Kf(e) {
  if (!xt) return e;
  let t = 0, a, r;
  const n = () => {
    t -= 1, r && t <= 0 && (r.stop(), a = void 0, r = void 0);
  };
  return ((...o) => (t += 1, r || (r = Nf(!0), a = r.run(() => e(...o))), go(n), a));
}
function s0(e) {
  return tt(e) ? Gn(new Proxy({}, {
    get(t, a, r) {
      return u(Reflect.get(e.value, a, r));
    },
    set(t, a, r) {
      return tt(e.value[a]) && !tt(r) ? e.value[a].value = r : e.value[a] = r, !0;
    },
    deleteProperty(t, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(t, a) {
      return Reflect.has(e.value, a);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  })) : Gn(e);
}
function u0(e) {
  return s0(D(e));
}
function me(e, ...t) {
  const a = t.flat(), r = a[0];
  return u0(() => Object.fromEntries(typeof r == "function" ? Object.entries(Ye(e)).filter(([n, o]) => !r(Se(o), n)) : Object.entries(Ye(e)).filter((n) => !a.includes(n[0]))));
}
function Gf(e, t = 1e4) {
  return rs((a, r) => {
    let n = Se(e), o;
    const i = () => setTimeout(() => {
      n = Se(e), r();
    }, Se(t));
    return go(() => {
      clearTimeout(o);
    }), {
      get() {
        return a(), n;
      },
      set(l) {
        n = l, r(), clearTimeout(o), o = i();
      }
    };
  });
}
function Hf(e, t, a = {}) {
  const { eventFilter: r = Lf, ...n } = a;
  return ge(e, n0(r, t), n);
}
function Au(e, t, a = {}) {
  const { eventFilter: r, initialState: n = "active", ...o } = a, { eventFilter: i, pause: l, resume: s, isActive: d } = i0(r, { initialState: n });
  return {
    stop: Hf(e, t, {
      ...o,
      eventFilter: i
    }),
    pause: l,
    resume: s,
    isActive: d
  };
}
function Cu(e, t, ...[a]) {
  const { flush: r = "sync", deep: n = !1, immediate: o = !0, direction: i = "both", transform: l = {} } = a || {}, s = [], d = "ltr" in l && l.ltr || ((f) => f), c = "rtl" in l && l.rtl || ((f) => f);
  return (i === "both" || i === "ltr") && s.push(Au(e, (f) => {
    s.forEach((y) => y.pause()), t.value = d(f), s.forEach((y) => y.resume());
  }, {
    flush: r,
    deep: n,
    immediate: o
  })), (i === "both" || i === "rtl") && s.push(Au(t, (f) => {
    s.forEach((y) => y.pause()), e.value = c(f), s.forEach((y) => y.resume());
  }, {
    flush: r,
    deep: n,
    immediate: o
  })), () => {
    s.forEach((f) => f.stop());
  };
}
function d0(e, t) {
  Wf() && ts(e, t);
}
function c0(e, t = !0, a) {
  Wf() ? Ae(e, a) : t ? e() : _e(e);
}
function Yf(e, t, a = {}) {
  const { debounce: r = 0, maxWait: n = void 0, ...o } = a;
  return Hf(e, t, {
    ...o,
    eventFilter: o0(r, { maxWait: n })
  });
}
function f0(e, t, a) {
  return ge(e, t, {
    ...a,
    immediate: !0
  });
}
const Sr = xt ? window : void 0;
function Lt(e) {
  var t;
  const a = Se(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function Hn(...e) {
  const t = (r, n, o, i) => (r.addEventListener(n, o, i), () => r.removeEventListener(n, o, i)), a = D(() => {
    const r = fi(Se(e[0])).filter((n) => n != null);
    return r.every((n) => typeof n != "string") ? r : void 0;
  });
  return f0(() => {
    var r, n;
    return [
      (r = (n = a.value) === null || n === void 0 ? void 0 : n.map((o) => Lt(o))) !== null && r !== void 0 ? r : [Sr].filter((o) => o != null),
      fi(Se(a.value ? e[1] : e[0])),
      fi(u(a.value ? e[2] : e[1])),
      Se(a.value ? e[3] : e[2])
    ];
  }, ([r, n, o, i], l, s) => {
    if (!r?.length || !n?.length || !o?.length) return;
    const d = a0(i) ? { ...i } : i, c = r.flatMap((f) => n.flatMap((y) => o.map((p) => t(f, y, p, d))));
    s(() => {
      c.forEach((f) => f());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Zf() {
  const e = Fa(!1), t = Kt();
  return t && Ae(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Qf(e) {
  const t = /* @__PURE__ */ Zf();
  return D(() => (t.value, !!e()));
}
function p0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function y0(...e) {
  let t, a, r = {};
  e.length === 3 ? (t = e[0], a = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], r = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const { target: n = Sr, eventName: o = "keydown", passive: i = !1, dedupe: l = !1 } = r, s = p0(t);
  return Hn(n, o, (d) => {
    d.repeat && Se(l) || s(d) && a(d);
  }, i);
}
const m0 = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Jf() {
  const e = If() ? /* @__PURE__ */ Xk(m0, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Nr(e, t = {}) {
  const { window: a = Sr, ssrWidth: r = /* @__PURE__ */ Jf() } = t, n = /* @__PURE__ */ Qf(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), o = Fa(typeof r == "number"), i = Fa(), l = Fa(!1), s = (d) => {
    l.value = d.matches;
  };
  return it(() => {
    if (o.value) {
      o.value = !n.value, l.value = Se(e).split(",").some((d) => {
        const c = d.includes("not all"), f = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), y = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || y);
        return f && p && (p = r >= Qr(f[1])), y && p && (p = r <= Qr(y[1])), c ? !p : p;
      });
      return;
    }
    n.value && (i.value = a.matchMedia(Se(e)), l.value = i.value.matches);
  }), Hn(i, "change", s, { passive: !0 }), D(() => l.value);
}
const h0 = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
// @__NO_SIDE_EFFECTS__
function v0(e, t = {}) {
  function a(p, g) {
    let h = Se(e[Se(p)]);
    return g != null && (h = l0(h, g)), typeof h == "number" && (h = `${h}px`), h;
  }
  const { window: r = Sr, strategy: n = "min-width", ssrWidth: o = /* @__PURE__ */ Jf() } = t, i = typeof o == "number", l = i ? Fa(!1) : { value: !0 };
  i && c0(() => l.value = !!r);
  function s(p, g) {
    return !l.value && i ? p === "min" ? o >= Qr(g) : o <= Qr(g) : r ? r.matchMedia(`(${p}-width: ${g})`).matches : !1;
  }
  const d = (p) => Nr(() => `(min-width: ${a(p)})`, t), c = (p) => Nr(() => `(max-width: ${a(p)})`, t), f = Object.keys(e).reduce((p, g) => (Object.defineProperty(p, g, {
    get: () => n === "min-width" ? d(g) : c(g),
    enumerable: !0,
    configurable: !0
  }), p), {});
  function y() {
    const p = Object.keys(e).map((g) => [
      g,
      f[g],
      Qr(a(g))
    ]).sort((g, h) => g[2] - h[2]);
    return D(() => p.filter(([, g]) => g.value).map(([g]) => g));
  }
  return Object.assign(f, {
    greaterOrEqual: d,
    smallerOrEqual: c,
    greater(p) {
      return Nr(() => `(min-width: ${a(p, 0.1)})`, t);
    },
    smaller(p) {
      return Nr(() => `(max-width: ${a(p, -0.1)})`, t);
    },
    between(p, g) {
      return Nr(() => `(min-width: ${a(p)}) and (max-width: ${a(g, -0.1)})`, t);
    },
    isGreater(p) {
      return s("min", a(p, 0.1));
    },
    isGreaterOrEqual(p) {
      return s("min", a(p));
    },
    isSmaller(p) {
      return s("max", a(p, -0.1));
    },
    isSmallerOrEqual(p) {
      return s("max", a(p));
    },
    isInBetween(p, g) {
      return s("min", a(p)) && s("max", a(g, -0.1));
    },
    current: y,
    active() {
      const p = y();
      return D(() => p.value.length === 0 ? "" : p.value.at(n === "min-width" ? -1 : 0));
    }
  });
}
function g0(e) {
  return JSON.parse(JSON.stringify(e));
}
function b0(e, t, a = {}) {
  const { window: r = Sr, ...n } = a;
  let o;
  const i = /* @__PURE__ */ Qf(() => r && "ResizeObserver" in r), l = () => {
    o && (o.disconnect(), o = void 0);
  }, s = ge(D(() => {
    const c = Se(e);
    return Array.isArray(c) ? c.map((f) => Lt(f)) : [Lt(c)];
  }), (c) => {
    if (l(), i.value && r) {
      o = new ResizeObserver(t);
      for (const f of c) f && o.observe(f, n);
    }
  }, {
    immediate: !0,
    flush: "post"
  }), d = () => {
    l(), s();
  };
  return go(d), {
    isSupported: i,
    stop: d
  };
}
// @__NO_SIDE_EFFECTS__
function Xe(e, t, a, r = {}) {
  var n, o;
  const { clone: i = !1, passive: l = !1, eventName: s, deep: d = !1, defaultValue: c, shouldEmit: f } = r, y = Kt(), p = a || y?.emit || (y == null || (n = y.$emit) === null || n === void 0 ? void 0 : n.bind(y)) || (y == null || (o = y.proxy) === null || o === void 0 || (o = o.$emit) === null || o === void 0 ? void 0 : o.bind(y?.proxy));
  let g = s;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h = (b) => i ? typeof i == "function" ? i(b) : g0(b) : b, k = () => e0(e[t]) ? h(e[t]) : c, w = (b) => {
    f ? f(b) && p(g, b) : p(g, b);
  };
  if (l) {
    const b = F(k());
    let S = !1;
    return ge(() => e[t], (z) => {
      S || (S = !0, b.value = h(z), _e(() => S = !1));
    }), ge(b, (z) => {
      !S && (z !== e[t] || d) && w(z);
    }, { deep: d }), b;
  } else return D({
    get() {
      return k();
    },
    set(b) {
      w(b);
    }
  });
}
function k0() {
  return /* @__PURE__ */ v0(h0);
}
function ml(e) {
  const t = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/.exec(e);
  if (!t)
    throw new Error("Invalid RGB color format: " + e);
  return {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3])
  };
}
function hl(e) {
  const t = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/.exec(e);
  return t ? {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3]),
    a: parseFloat(t[4])
  } : {
    ...ml(e),
    a: 1
  };
}
function w0(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (!t)
    throw new Error("Invalid HEX color format: " + e);
  return {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  };
}
function Hr(e) {
  const t = /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*[\d.]+)?\)/.exec(e);
  if (!t)
    throw new Error("Invalid HSL color format: " + e);
  const a = parseInt(t[1]) / 360, r = parseInt(t[2]) / 100, n = parseInt(t[3]) / 100;
  let o, i, l;
  if (r === 0)
    o = i = l = n;
  else {
    const s = (f, y, p) => (p < 0 && (p += 1), p > 1 && (p -= 1), p < 0.16666666666666666 ? f + (y - f) * 6 * p : p < 0.5 ? y : p < 0.6666666666666666 ? f + (y - f) * (0.6666666666666666 - p) * 6 : f), d = n < 0.5 ? n * (1 + r) : n + r - n * r, c = 2 * n - d;
    o = s(c, d, a + 1 / 3), i = s(c, d, a), l = s(c, d, a - 1 / 3);
  }
  return {
    r: Math.round(o * 255),
    g: Math.round(i * 255),
    b: Math.round(l * 255)
  };
}
function vl(e, t, a) {
  e /= 255, t /= 255, a /= 255;
  const r = Math.max(e, t, a), n = Math.min(e, t, a), o = (r + n) / 2;
  if (r === n)
    return {
      h: 0,
      s: 0,
      l: Math.round(o * 100)
    };
  const i = r - n, l = o > 0.5 ? i / (2 - r - n) : i / (r + n);
  let s = 0;
  switch (r) {
    case e:
      s = ((t - a) / i + (t < a ? 6 : 0)) * 60;
      break;
    case t:
      s = ((a - e) / i + 2) * 60;
      break;
    case a:
      s = ((e - t) / i + 4) * 60;
      break;
  }
  return {
    h: Math.round(s),
    s: Math.round(l * 100),
    l: Math.round(o * 100)
  };
}
function bo(e, t, a) {
  const r = (n) => {
    const o = n.toString(16);
    return o.length === 1 ? "0" + o : o;
  };
  return `#${r(e)}${r(t)}${r(a)}`;
}
function x0(e) {
  const t = /oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/.exec(e);
  if (!t)
    throw new Error("Invalid OKLCH color format: " + e);
  return {
    l: parseFloat(t[1]),
    c: parseFloat(t[2]),
    h: parseFloat(t[3])
  };
}
function Xf(e) {
  const t = x0(e), { l: a, c: r, h: n } = t, o = n * Math.PI / 180, i = r * Math.cos(o), l = r * Math.sin(o), s = a + 0.3963377774 * i + 0.2158037573 * l, d = a - 0.1055613458 * i - 0.0638541728 * l, c = a - 0.0894841775 * i - 1.291485548 * l, f = s * s * s, y = d * d * d, p = c * c * c;
  let g = 4.0767416621 * f - 3.3077115913 * y + 0.2309699292 * p, h = -1.2684380046 * f + 2.6097574011 * y - 0.3413193965 * p, k = -0.0041960863 * f - 0.7034186147 * y + 1.707614701 * p;
  const w = (b) => b >= 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b;
  return g = w(g), h = w(h), k = w(k), {
    r: Math.round(Math.max(0, Math.min(1, g)) * 255),
    g: Math.round(Math.max(0, Math.min(1, h)) * 255),
    b: Math.round(Math.max(0, Math.min(1, k)) * 255)
  };
}
function is(e, t, a) {
  e = e / 255, t = t / 255, a = a / 255;
  const r = (h) => h >= 0.04045 ? Math.pow((h + 0.055) / 1.055, 2.4) : h / 12.92;
  e = r(e), t = r(t), a = r(a);
  const n = 0.4122214708 * e + 0.5363325363 * t + 0.0514459929 * a, o = 0.2119034982 * e + 0.6806995451 * t + 0.1073969566 * a, i = 0.0883024619 * e + 0.2817188376 * t + 0.6299787005 * a, l = Math.cbrt(n), s = Math.cbrt(o), d = Math.cbrt(i), c = 0.2104542553 * l + 0.793617785 * s - 0.0040720468 * d, f = 1.9779984951 * l - 2.428592205 * s + 0.4505937099 * d, y = 0.0259040371 * l + 0.7827717662 * s - 0.808675766 * d, p = Math.sqrt(f * f + y * y);
  let g = Math.atan2(y, f) * (180 / Math.PI);
  return g < 0 && (g += 360), {
    l: Math.round(c * 1e3) / 1e3,
    c: Math.round(p * 1e3) / 1e3,
    h: Math.round(g * 1e3) / 1e3
  };
}
function qr(e) {
  const t = tt(e) ? e : F(Se(e));
  return D({
    get() {
      return t.value ? t.value.startsWith("#") ? "hex" : /^rgba/.test(t.value) ? "rgba" : /^rgb/.test(t.value) ? "rgb" : /^oklch/.test(t.value) ? "oklch" : /^hsla/.test(t.value) ? "hsla" : /^hsl/.test(t.value) ? "hsl" : "unknown" : null;
    },
    set(a) {
      if (!t.value || !a)
        return;
      const r = fn(t).value;
      if (r) {
        if (a === "hex") {
          t.value = bo(r.r, r.g, r.b);
          return;
        }
        if (a === "rgb") {
          t.value = `rgb(${r.r}, ${r.g}, ${r.b})`;
          return;
        }
        if (a === "rgba") {
          t.value = `rgba(${r.r}, ${r.g}, ${r.b}, 1)`;
          return;
        }
        if (a === "hsl") {
          const n = vl(r.r, r.g, r.b);
          t.value = `hsl(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (a === "hsla") {
          const n = vl(r.r, r.g, r.b);
          t.value = `hsla(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (a === "oklch") {
          const n = is(r.r, r.g, r.b);
          t.value = `oklch(${n.l} ${n.c} ${n.h})`;
          return;
        }
      }
    }
  });
}
function fn(e) {
  const t = tt(e) ? e : F(Se(e)), a = qr(t);
  return D({
    get() {
      if (!t.value)
        return null;
      if (a.value === "rgba") {
        const r = hl(t.value);
        return {
          r: r.r,
          g: r.g,
          b: r.b
        };
      }
      return a.value === "rgb" ? ml(t.value) : a.value === "hex" && t.value.length === 7 ? w0(t.value) : a.value === "hsl" ? Hr(t.value) : a.value === "oklch" ? Xf(t.value) : null;
    },
    set() {
      if (t.value) {
        if (a.value === "rgb") {
          const r = ml(t.value);
          t.value = `rgb(${r.r}, ${r.g}, ${r.b})`;
        }
        if (a.value === "rgba") {
          const r = hl(t.value);
          t.value = `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`;
        }
      }
    }
  });
}
function z0(e) {
  const t = tt(e) ? e : F(Se(e)), a = qr(t), r = fn(t);
  return D({
    get() {
      return r.value ? a.value === "rgba" ? hl(t.value) : {
        ...r.value,
        a: 1
      } : null;
    },
    set(n) {
      if (!(!n || !t.value)) {
        if (a.value === "rgba") {
          t.value = `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`;
          return;
        }
        if (a.value === "rgb") {
          t.value = `rgb(${n.r}, ${n.g}, ${n.b})`;
          return;
        }
      }
    }
  });
}
function _0(e) {
  const t = tt(e) ? e : F(Se(e)), a = qr(t), r = fn(t);
  return D({
    get() {
      return r.value ? vl(r.value.r, r.value.g, r.value.b) : null;
    },
    set(n) {
      if (!(!n || !t.value)) {
        if (a.value === "hsl") {
          t.value = `hsl(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (a.value === "hsla") {
          t.value = `hsla(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (a.value === "hex") {
          const o = Hr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = bo(o.r, o.g, o.b);
          return;
        }
        if (a.value === "rgba") {
          const o = Hr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = `rgba(${o.r}, ${o.g}, ${o.b}, 1)`;
          return;
        }
        if (a.value === "rgb") {
          const o = Hr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = `rgb(${o.r}, ${o.g}, ${o.b})`;
          return;
        }
        if (a.value === "oklch") {
          const o = Hr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`), i = is(o.r, o.g, o.b);
          t.value = `oklch(${i.l} ${i.c} ${i.h})`;
          return;
        }
      }
    }
  });
}
function S0(e) {
  const t = tt(e) ? e : F(Se(e)), a = qr(t), r = fn(t);
  return D({
    get() {
      return r.value ? bo(r.value.r, r.value.g, r.value.b) : null;
    },
    set(n) {
      if (n && a.value === "hex") {
        t.value = n.startsWith("#") ? n : `#${n}`;
        return;
      }
    }
  });
}
function ep(e) {
  const t = tt(e) ? e : F(Se(e)), a = qr(t), r = S0(t), n = fn(t), o = z0(t), i = _0(t), l = D({
    get() {
      return n.value ? is(n.value.r, n.value.g, n.value.b) : null;
    },
    set(s) {
      if (!s)
        return;
      if (a.value === "oklch") {
        t.value = `oklch(${s.l} ${s.c} ${s.h})`;
        return;
      }
      const d = Xf(`oklch(${s.l} ${s.c} ${s.h})`);
      if (a.value === "hex") {
        t.value = bo(d.r, d.g, d.b);
        return;
      }
      if (a.value === "rgb") {
        t.value = `rgb(${d.r}, ${d.g}, ${d.b})`;
        return;
      }
    }
  });
  return {
    type: a,
    color: t,
    hex: r,
    rgb: n,
    hsl: i,
    oklch: l,
    rgba: o
  };
}
class pn extends Error {
  status = 500;
  constructor(t, a = 500) {
    super(t), this.name = "BaseException", this.status = a;
  }
  static fromError(t) {
    return new pn(t.message, 500);
  }
}
class q0 {
  entries = /* @__PURE__ */ new Map();
  loadFromRecord(t) {
    Object.entries(t).forEach(([a, r]) => {
      this.set(a, r);
    });
  }
  toRecord() {
    const t = {};
    for (const [a, r] of this.entries.entries())
      t[String(a)] = r;
    return t;
  }
  getKey(t) {
    let a = t;
    (typeof t == "function" || typeof t == "object") && (a = t.name);
    const r = typeof t != "string" && typeof t != "symbol";
    return r && !t?.__container_entry_key && console.warn(`Warning: The constructor ${t?.name || t} does not have a unique identifier. Consider adding a static property __container_entry_key to avoid potential conflicts.`), r && t?.__container_entry_key && (a = t.__container_entry_key), a;
  }
  set(t, a) {
    const r = this.getKey(t);
    return this.entries.set(r, a), this;
  }
  has(t) {
    const a = this.getKey(t);
    return this.entries.has(a);
  }
  get(t) {
    const a = this.getKey(t);
    if (!this.entries.has(a))
      throw new pn(`Entry with key "${String(a)}" not found in container.`);
    return this.entries.get(a);
  }
  unset(t) {
    const a = this.getKey(t);
    this.entries.delete(a);
  }
  singleton(t) {
    const a = t.name, r = this.entries.get(a);
    if (r)
      return r;
    const n = new t();
    return this.entries.set(a, n), n;
  }
  load(t) {
    Object.entries(t).forEach(([a, r]) => {
      this.set(a, r);
    });
  }
  proxy(t) {
    return new Proxy({}, {
      get: (a, r) => {
        const n = this.get(t), o = n[r];
        return typeof o == "function" ? o.bind(n) : n[r];
      },
      set: (a, r, n) => {
        const o = this.get(t);
        return o[r] = n, !0;
      }
    });
  }
  keys() {
    return Array.from(this.entries.keys());
  }
}
const dt = globalThis.clientContainer || new q0();
globalThis.clientContainer = dt;
function O0(e, t) {
  const a = dt.get("state");
  let r = a[e];
  !r && t?.default !== void 0 && (r = t.default()), r && t?.transform && (r = t.transform(r));
  const n = F(r), o = (i) => {
    a[e] = i, dt.set("state", a);
  };
  return ge(n, o, { deep: !0 }), D({
    get: () => n.value,
    set: (i) => {
      n.value = i, o(i);
    }
  });
}
var Eu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function C0(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var a = function r() {
      var n = !1;
      try {
        n = this instanceof r;
      } catch {
      }
      return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    a.prototype = t.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(a, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), a;
}
var $u, Bu;
function Or() {
  return Bu || (Bu = 1, $u = TypeError), $u;
}
const E0 = {}, $0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E0
}, Symbol.toStringTag, { value: "Module" })), B0 = /* @__PURE__ */ C0($0);
var pi, Mu;
function ko() {
  if (Mu) return pi;
  Mu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, a = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, n = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = n && o && typeof o.get == "function" ? o.get : null, l = n && Set.prototype.forEach, s = typeof WeakMap == "function" && WeakMap.prototype, d = s ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, y = typeof WeakRef == "function" && WeakRef.prototype, p = y ? WeakRef.prototype.deref : null, g = Boolean.prototype.valueOf, h = Object.prototype.toString, k = Function.prototype.toString, w = String.prototype.match, b = String.prototype.slice, S = String.prototype.replace, z = String.prototype.toUpperCase, $ = String.prototype.toLowerCase, q = RegExp.prototype.test, C = Array.prototype.concat, E = Array.prototype.join, M = Array.prototype.slice, R = Math.floor, oe = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ae = Object.getOwnPropertySymbols, H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, re = typeof Symbol == "function" && typeof Symbol.iterator == "object", P = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === re || !0) ? Symbol.toStringTag : null, L = Object.prototype.propertyIsEnumerable, U = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(j) {
    return j.__proto__;
  } : null);
  function G(j, N) {
    if (j === 1 / 0 || j === -1 / 0 || j !== j || j && j > -1e3 && j < 1e3 || q.call(/e/, N))
      return N;
    var Oe = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof j == "number") {
      var je = j < 0 ? -R(-j) : R(j);
      if (je !== j) {
        var Te = String(je), ke = b.call(N, Te.length + 1);
        return S.call(Te, Oe, "$&_") + "." + S.call(S.call(ke, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(N, Oe, "$&_");
  }
  var ce = B0, T = ce.custom, fe = Qe(T) ? T : null, te = {
    __proto__: null,
    double: '"',
    single: "'"
  }, he = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  pi = function j(N, Oe, je, Te) {
    var ke = Oe || {};
    if (Ue(ke, "quoteStyle") && !Ue(te, ke.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ue(ke, "maxStringLength") && (typeof ke.maxStringLength == "number" ? ke.maxStringLength < 0 && ke.maxStringLength !== 1 / 0 : ke.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ua = Ue(ke, "customInspect") ? ke.customInspect : !0;
    if (typeof ua != "boolean" && ua !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ue(ke, "indent") && ke.indent !== null && ke.indent !== "	" && !(parseInt(ke.indent, 10) === ke.indent && ke.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ue(ke, "numericSeparator") && typeof ke.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Oa = ke.numericSeparator;
    if (typeof N > "u")
      return "undefined";
    if (N === null)
      return "null";
    if (typeof N == "boolean")
      return N ? "true" : "false";
    if (typeof N == "string")
      return vu(N, ke);
    if (typeof N == "number") {
      if (N === 0)
        return 1 / 0 / N > 0 ? "0" : "-0";
      var ct = String(N);
      return Oa ? G(N, ct) : ct;
    }
    if (typeof N == "bigint") {
      var da = String(N) + "n";
      return Oa ? G(N, da) : da;
    }
    var ni = typeof ke.depth > "u" ? 5 : ke.depth;
    if (typeof je > "u" && (je = 0), je >= ni && ni > 0 && typeof N == "object")
      return $e(N) ? "[Array]" : "[Object]";
    var er = Ak(ke, je);
    if (typeof Te > "u")
      Te = [];
    else if (bt(Te, N) >= 0)
      return "[Circular]";
    function qt(tr, Cn, Ek) {
      if (Cn && (Te = M.call(Te), Te.push(Cn)), Ek) {
        var qu = {
          depth: ke.depth
        };
        return Ue(ke, "quoteStyle") && (qu.quoteStyle = ke.quoteStyle), j(tr, qu, je + 1, Te);
      }
      return j(tr, ke, je + 1, Te);
    }
    if (typeof N == "function" && !K(N)) {
      var bu = qa(N), ku = On(N, qt);
      return "[Function" + (bu ? ": " + bu : " (anonymous)") + "]" + (ku.length > 0 ? " { " + E.call(ku, ", ") + " }" : "");
    }
    if (Qe(N)) {
      var wu = re ? S.call(String(N), /^(Symbol\(.*\))_[^)]*$/, "$1") : H.call(N);
      return typeof N == "object" && !re ? Ir(wu) : wu;
    }
    if (Sk(N)) {
      for (var Fr = "<" + $.call(String(N.nodeName)), oi = N.attributes || [], An = 0; An < oi.length; An++)
        Fr += " " + oi[An].name + "=" + Ne(qe(oi[An].value), "double", ke);
      return Fr += ">", N.childNodes && N.childNodes.length && (Fr += "..."), Fr += "</" + $.call(String(N.nodeName)) + ">", Fr;
    }
    if ($e(N)) {
      if (N.length === 0)
        return "[]";
      var ii = On(N, qt);
      return er && !Ok(ii) ? "[" + ri(ii, er) + "]" : "[ " + E.call(ii, ", ") + " ]";
    }
    if (ne(N)) {
      var li = On(N, qt);
      return !("cause" in Error.prototype) && "cause" in N && !L.call(N, "cause") ? "{ [" + String(N) + "] " + E.call(C.call("[cause]: " + qt(N.cause), li), ", ") + " }" : li.length === 0 ? "[" + String(N) + "]" : "{ [" + String(N) + "] " + E.call(li, ", ") + " }";
    }
    if (typeof N == "object" && ua) {
      if (fe && typeof N[fe] == "function" && ce)
        return ce(N, { depth: ni - je });
      if (ua !== "symbol" && typeof N.inspect == "function")
        return N.inspect();
    }
    if (Qa(N)) {
      var xu = [];
      return r && r.call(N, function(tr, Cn) {
        xu.push(qt(Cn, N, !0) + " => " + qt(tr, N));
      }), gu("Map", a.call(N), xu, er);
    }
    if (zk(N)) {
      var zu = [];
      return l && l.call(N, function(tr) {
        zu.push(qt(tr, N));
      }), gu("Set", i.call(N), zu, er);
    }
    if (Ja(N))
      return ai("WeakMap");
    if (_k(N))
      return ai("WeakSet");
    if (Xa(N))
      return ai("WeakRef");
    if (be(N))
      return Ir(qt(Number(N)));
    if (Ke(N))
      return Ir(qt(oe.call(N)));
    if (ze(N))
      return Ir(g.call(N));
    if (ue(N))
      return Ir(qt(String(N)));
    if (typeof window < "u" && N === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && N === globalThis || typeof Eu < "u" && N === Eu)
      return "{ [object globalThis] }";
    if (!X(N) && !K(N)) {
      var si = On(N, qt), _u = U ? U(N) === Object.prototype : N instanceof Object || N.constructor === Object, ui = N instanceof Object ? "" : "null prototype", Su = !_u && P && Object(N) === N && P in N ? b.call(at(N), 8, -1) : ui ? "Object" : "", Ck = _u || typeof N.constructor != "function" ? "" : N.constructor.name ? N.constructor.name + " " : "", di = Ck + (Su || ui ? "[" + E.call(C.call([], Su || [], ui || []), ": ") + "] " : "");
      return si.length === 0 ? di + "{}" : er ? di + "{" + ri(si, er) + "}" : di + "{ " + E.call(si, ", ") + " }";
    }
    return String(N);
  };
  function Ne(j, N, Oe) {
    var je = Oe.quoteStyle || N, Te = te[je];
    return Te + j + Te;
  }
  function qe(j) {
    return S.call(String(j), /"/g, "&quot;");
  }
  function ve(j) {
    return !P || !(typeof j == "object" && (P in j || typeof j[P] < "u"));
  }
  function $e(j) {
    return at(j) === "[object Array]" && ve(j);
  }
  function X(j) {
    return at(j) === "[object Date]" && ve(j);
  }
  function K(j) {
    return at(j) === "[object RegExp]" && ve(j);
  }
  function ne(j) {
    return at(j) === "[object Error]" && ve(j);
  }
  function ue(j) {
    return at(j) === "[object String]" && ve(j);
  }
  function be(j) {
    return at(j) === "[object Number]" && ve(j);
  }
  function ze(j) {
    return at(j) === "[object Boolean]" && ve(j);
  }
  function Qe(j) {
    if (re)
      return j && typeof j == "object" && j instanceof Symbol;
    if (typeof j == "symbol")
      return !0;
    if (!j || typeof j != "object" || !H)
      return !1;
    try {
      return H.call(j), !0;
    } catch {
    }
    return !1;
  }
  function Ke(j) {
    if (!j || typeof j != "object" || !oe)
      return !1;
    try {
      return oe.call(j), !0;
    } catch {
    }
    return !1;
  }
  var Ce = Object.prototype.hasOwnProperty || function(j) {
    return j in this;
  };
  function Ue(j, N) {
    return Ce.call(j, N);
  }
  function at(j) {
    return h.call(j);
  }
  function qa(j) {
    if (j.name)
      return j.name;
    var N = w.call(k.call(j), /^function\s*([\w$]+)/);
    return N ? N[1] : null;
  }
  function bt(j, N) {
    if (j.indexOf)
      return j.indexOf(N);
    for (var Oe = 0, je = j.length; Oe < je; Oe++)
      if (j[Oe] === N)
        return Oe;
    return -1;
  }
  function Qa(j) {
    if (!a || !j || typeof j != "object")
      return !1;
    try {
      a.call(j);
      try {
        i.call(j);
      } catch {
        return !0;
      }
      return j instanceof Map;
    } catch {
    }
    return !1;
  }
  function Ja(j) {
    if (!d || !j || typeof j != "object")
      return !1;
    try {
      d.call(j, d);
      try {
        f.call(j, f);
      } catch {
        return !0;
      }
      return j instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Xa(j) {
    if (!p || !j || typeof j != "object")
      return !1;
    try {
      return p.call(j), !0;
    } catch {
    }
    return !1;
  }
  function zk(j) {
    if (!i || !j || typeof j != "object")
      return !1;
    try {
      i.call(j);
      try {
        a.call(j);
      } catch {
        return !0;
      }
      return j instanceof Set;
    } catch {
    }
    return !1;
  }
  function _k(j) {
    if (!f || !j || typeof j != "object")
      return !1;
    try {
      f.call(j, f);
      try {
        d.call(j, d);
      } catch {
        return !0;
      }
      return j instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Sk(j) {
    return !j || typeof j != "object" ? !1 : typeof HTMLElement < "u" && j instanceof HTMLElement ? !0 : typeof j.nodeName == "string" && typeof j.getAttribute == "function";
  }
  function vu(j, N) {
    if (j.length > N.maxStringLength) {
      var Oe = j.length - N.maxStringLength, je = "... " + Oe + " more character" + (Oe > 1 ? "s" : "");
      return vu(b.call(j, 0, N.maxStringLength), N) + je;
    }
    var Te = he[N.quoteStyle || "single"];
    Te.lastIndex = 0;
    var ke = S.call(S.call(j, Te, "\\$1"), /[\x00-\x1f]/g, qk);
    return Ne(ke, "single", N);
  }
  function qk(j) {
    var N = j.charCodeAt(0), Oe = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[N];
    return Oe ? "\\" + Oe : "\\x" + (N < 16 ? "0" : "") + z.call(N.toString(16));
  }
  function Ir(j) {
    return "Object(" + j + ")";
  }
  function ai(j) {
    return j + " { ? }";
  }
  function gu(j, N, Oe, je) {
    var Te = je ? ri(Oe, je) : E.call(Oe, ", ");
    return j + " (" + N + ") {" + Te + "}";
  }
  function Ok(j) {
    for (var N = 0; N < j.length; N++)
      if (bt(j[N], `
`) >= 0)
        return !1;
    return !0;
  }
  function Ak(j, N) {
    var Oe;
    if (j.indent === "	")
      Oe = "	";
    else if (typeof j.indent == "number" && j.indent > 0)
      Oe = E.call(Array(j.indent + 1), " ");
    else
      return null;
    return {
      base: Oe,
      prev: E.call(Array(N + 1), Oe)
    };
  }
  function ri(j, N) {
    if (j.length === 0)
      return "";
    var Oe = `
` + N.prev + N.base;
    return Oe + E.call(j, "," + Oe) + `
` + N.prev;
  }
  function On(j, N) {
    var Oe = $e(j), je = [];
    if (Oe) {
      je.length = j.length;
      for (var Te = 0; Te < j.length; Te++)
        je[Te] = Ue(j, Te) ? N(j[Te], j) : "";
    }
    var ke = typeof ae == "function" ? ae(j) : [], ua;
    if (re) {
      ua = {};
      for (var Oa = 0; Oa < ke.length; Oa++)
        ua["$" + ke[Oa]] = ke[Oa];
    }
    for (var ct in j)
      Ue(j, ct) && (Oe && String(Number(ct)) === ct && ct < j.length || re && ua["$" + ct] instanceof Symbol || (q.call(/[^\w$]/, ct) ? je.push(N(ct, j) + ": " + N(j[ct], j)) : je.push(ct + ": " + N(j[ct], j))));
    if (typeof ae == "function")
      for (var da = 0; da < ke.length; da++)
        L.call(j, ke[da]) && je.push("[" + N(ke[da]) + "]: " + N(j[ke[da]], j));
    return je;
  }
  return pi;
}
var yi, Du;
function M0() {
  if (Du) return yi;
  Du = 1;
  var e = /* @__PURE__ */ ko(), t = /* @__PURE__ */ Or(), a = function(l, s, d) {
    for (var c = l, f; (f = c.next) != null; c = f)
      if (f.key === s)
        return c.next = f.next, d || (f.next = /** @type {NonNullable<typeof list.next>} */
        l.next, l.next = f), f;
  }, r = function(l, s) {
    if (l) {
      var d = a(l, s);
      return d && d.value;
    }
  }, n = function(l, s, d) {
    var c = a(l, s);
    c ? c.value = d : l.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: s,
      next: l.next,
      value: d
    };
  }, o = function(l, s) {
    return l ? !!a(l, s) : !1;
  }, i = function(l, s) {
    if (l)
      return a(l, s, !0);
  };
  return yi = function() {
    var l, s = {
      assert: function(d) {
        if (!s.has(d))
          throw new t("Side channel does not contain " + e(d));
      },
      delete: function(d) {
        var c = i(l, d);
        return c && l && !l.next && (l = void 0), !!c;
      },
      get: function(d) {
        return r(l, d);
      },
      has: function(d) {
        return o(l, d);
      },
      set: function(d, c) {
        l || (l = {
          next: void 0
        }), n(
          /** @type {NonNullable<typeof $o>} */
          l,
          d,
          c
        );
      }
    };
    return s;
  }, yi;
}
var Pu, ju;
function tp() {
  return ju || (ju = 1, Pu = Object), Pu;
}
var Iu, Fu;
function D0() {
  return Fu || (Fu = 1, Iu = Error), Iu;
}
var Tu, Nu;
function P0() {
  return Nu || (Nu = 1, Tu = EvalError), Tu;
}
var Vu, Ru;
function j0() {
  return Ru || (Ru = 1, Vu = RangeError), Vu;
}
var Uu, Lu;
function I0() {
  return Lu || (Lu = 1, Uu = ReferenceError), Uu;
}
var Wu, Ku;
function F0() {
  return Ku || (Ku = 1, Wu = SyntaxError), Wu;
}
var Gu, Hu;
function T0() {
  return Hu || (Hu = 1, Gu = URIError), Gu;
}
var Yu, Zu;
function N0() {
  return Zu || (Zu = 1, Yu = Math.abs), Yu;
}
var Qu, Ju;
function V0() {
  return Ju || (Ju = 1, Qu = Math.floor), Qu;
}
var Xu, ed;
function R0() {
  return ed || (ed = 1, Xu = Math.max), Xu;
}
var td, ad;
function U0() {
  return ad || (ad = 1, td = Math.min), td;
}
var rd, nd;
function L0() {
  return nd || (nd = 1, rd = Math.pow), rd;
}
var od, id;
function W0() {
  return id || (id = 1, od = Math.round), od;
}
var ld, sd;
function K0() {
  return sd || (sd = 1, ld = Number.isNaN || function(e) {
    return e !== e;
  }), ld;
}
var mi, ud;
function G0() {
  if (ud) return mi;
  ud = 1;
  var e = /* @__PURE__ */ K0();
  return mi = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, mi;
}
var dd, cd;
function H0() {
  return cd || (cd = 1, dd = Object.getOwnPropertyDescriptor), dd;
}
var hi, fd;
function ap() {
  if (fd) return hi;
  fd = 1;
  var e = /* @__PURE__ */ H0();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return hi = e, hi;
}
var vi, pd;
function Y0() {
  if (pd) return vi;
  pd = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return vi = e, vi;
}
var yd, md;
function Z0() {
  return md || (md = 1, yd = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = /* @__PURE__ */ Symbol("test"), a = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]")
      return !1;
    var r = 42;
    e[t] = r;
    for (var n in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, t)
      );
      if (i.value !== r || i.enumerable !== !0)
        return !1;
    }
    return !0;
  }), yd;
}
var gi, hd;
function Q0() {
  if (hd) return gi;
  hd = 1;
  var e = typeof Symbol < "u" && Symbol, t = Z0();
  return gi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, gi;
}
var vd, gd;
function rp() {
  return gd || (gd = 1, vd = typeof Reflect < "u" && Reflect.getPrototypeOf || null), vd;
}
var bi, bd;
function np() {
  if (bd) return bi;
  bd = 1;
  var e = /* @__PURE__ */ tp();
  return bi = e.getPrototypeOf || null, bi;
}
var ki, kd;
function J0() {
  if (kd) return ki;
  kd = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, a = Math.max, r = "[object Function]", n = function(l, s) {
    for (var d = [], c = 0; c < l.length; c += 1)
      d[c] = l[c];
    for (var f = 0; f < s.length; f += 1)
      d[f + l.length] = s[f];
    return d;
  }, o = function(l, s) {
    for (var d = [], c = s, f = 0; c < l.length; c += 1, f += 1)
      d[f] = l[c];
    return d;
  }, i = function(l, s) {
    for (var d = "", c = 0; c < l.length; c += 1)
      d += l[c], c + 1 < l.length && (d += s);
    return d;
  };
  return ki = function(l) {
    var s = this;
    if (typeof s != "function" || t.apply(s) !== r)
      throw new TypeError(e + s);
    for (var d = o(arguments, 1), c, f = function() {
      if (this instanceof c) {
        var k = s.apply(
          this,
          n(d, arguments)
        );
        return Object(k) === k ? k : this;
      }
      return s.apply(
        l,
        n(d, arguments)
      );
    }, y = a(0, s.length - d.length), p = [], g = 0; g < y; g++)
      p[g] = "$" + g;
    if (c = Function("binder", "return function (" + i(p, ",") + "){ return binder.apply(this,arguments); }")(f), s.prototype) {
      var h = function() {
      };
      h.prototype = s.prototype, c.prototype = new h(), h.prototype = null;
    }
    return c;
  }, ki;
}
var wi, wd;
function wo() {
  if (wd) return wi;
  wd = 1;
  var e = J0();
  return wi = Function.prototype.bind || e, wi;
}
var xd, zd;
function ls() {
  return zd || (zd = 1, xd = Function.prototype.call), xd;
}
var _d, Sd;
function op() {
  return Sd || (Sd = 1, _d = Function.prototype.apply), _d;
}
var qd, Od;
function X0() {
  return Od || (Od = 1, qd = typeof Reflect < "u" && Reflect && Reflect.apply), qd;
}
var xi, Ad;
function ew() {
  if (Ad) return xi;
  Ad = 1;
  var e = wo(), t = op(), a = ls(), r = X0();
  return xi = r || e.call(a, t), xi;
}
var zi, Cd;
function ip() {
  if (Cd) return zi;
  Cd = 1;
  var e = wo(), t = /* @__PURE__ */ Or(), a = ls(), r = ew();
  return zi = function(n) {
    if (n.length < 1 || typeof n[0] != "function")
      throw new t("a function is required");
    return r(e, a, n);
  }, zi;
}
var _i, Ed;
function tw() {
  if (Ed) return _i;
  Ed = 1;
  var e = ip(), t = /* @__PURE__ */ ap(), a;
  try {
    a = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var r = !!a && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), n = Object, o = n.getPrototypeOf;
  return _i = r && typeof r.get == "function" ? e([r.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    (function(i) {
      return o(i == null ? i : n(i));
    })
  ) : !1, _i;
}
var Si, $d;
function aw() {
  if ($d) return Si;
  $d = 1;
  var e = rp(), t = np(), a = /* @__PURE__ */ tw();
  return Si = e ? function(r) {
    return e(r);
  } : t ? function(r) {
    if (!r || typeof r != "object" && typeof r != "function")
      throw new TypeError("getProto: not an object");
    return t(r);
  } : a ? function(r) {
    return a(r);
  } : null, Si;
}
var qi, Bd;
function rw() {
  if (Bd) return qi;
  Bd = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, a = wo();
  return qi = a.call(e, t), qi;
}
var Oi, Md;
function ss() {
  if (Md) return Oi;
  Md = 1;
  var e, t = /* @__PURE__ */ tp(), a = /* @__PURE__ */ D0(), r = /* @__PURE__ */ P0(), n = /* @__PURE__ */ j0(), o = /* @__PURE__ */ I0(), i = /* @__PURE__ */ F0(), l = /* @__PURE__ */ Or(), s = /* @__PURE__ */ T0(), d = /* @__PURE__ */ N0(), c = /* @__PURE__ */ V0(), f = /* @__PURE__ */ R0(), y = /* @__PURE__ */ U0(), p = /* @__PURE__ */ L0(), g = /* @__PURE__ */ W0(), h = /* @__PURE__ */ G0(), k = Function, w = function(K) {
    try {
      return k('"use strict"; return (' + K + ").constructor;")();
    } catch {
    }
  }, b = /* @__PURE__ */ ap(), S = /* @__PURE__ */ Y0(), z = function() {
    throw new l();
  }, $ = b ? (function() {
    try {
      return arguments.callee, z;
    } catch {
      try {
        return b(arguments, "callee").get;
      } catch {
        return z;
      }
    }
  })() : z, q = Q0()(), C = aw(), E = np(), M = rp(), R = op(), oe = ls(), ae = {}, H = typeof Uint8Array > "u" || !C ? e : C(Uint8Array), re = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": q && C ? C([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": ae,
    "%AsyncGenerator%": ae,
    "%AsyncGeneratorFunction%": ae,
    "%AsyncIteratorPrototype%": ae,
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
    "%Error%": a,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": r,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": k,
    "%GeneratorFunction%": ae,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": q && C ? C(C([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !q || !C ? e : C((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": b,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": n,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !q || !C ? e : C((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": q && C ? C(""[Symbol.iterator]()) : e,
    "%Symbol%": q ? Symbol : e,
    "%SyntaxError%": i,
    "%ThrowTypeError%": $,
    "%TypedArray%": H,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": s,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": oe,
    "%Function.prototype.apply%": R,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": E,
    "%Math.abs%": d,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": y,
    "%Math.pow%": p,
    "%Math.round%": g,
    "%Math.sign%": h,
    "%Reflect.getPrototypeOf%": M
  };
  if (C)
    try {
      null.error;
    } catch (K) {
      var P = C(C(K));
      re["%Error.prototype%"] = P;
    }
  var L = function K(ne) {
    var ue;
    if (ne === "%AsyncFunction%")
      ue = w("async function () {}");
    else if (ne === "%GeneratorFunction%")
      ue = w("function* () {}");
    else if (ne === "%AsyncGeneratorFunction%")
      ue = w("async function* () {}");
    else if (ne === "%AsyncGenerator%") {
      var be = K("%AsyncGeneratorFunction%");
      be && (ue = be.prototype);
    } else if (ne === "%AsyncIteratorPrototype%") {
      var ze = K("%AsyncGenerator%");
      ze && C && (ue = C(ze.prototype));
    }
    return re[ne] = ue, ue;
  }, U = {
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
  }, G = wo(), ce = /* @__PURE__ */ rw(), T = G.call(oe, Array.prototype.concat), fe = G.call(R, Array.prototype.splice), te = G.call(oe, String.prototype.replace), he = G.call(oe, String.prototype.slice), Ne = G.call(oe, RegExp.prototype.exec), qe = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ve = /\\(\\)?/g, $e = function(K) {
    var ne = he(K, 0, 1), ue = he(K, -1);
    if (ne === "%" && ue !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (ue === "%" && ne !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var be = [];
    return te(K, qe, function(ze, Qe, Ke, Ce) {
      be[be.length] = Ke ? te(Ce, ve, "$1") : Qe || ze;
    }), be;
  }, X = function(K, ne) {
    var ue = K, be;
    if (ce(U, ue) && (be = U[ue], ue = "%" + be[0] + "%"), ce(re, ue)) {
      var ze = re[ue];
      if (ze === ae && (ze = L(ue)), typeof ze > "u" && !ne)
        throw new l("intrinsic " + K + " exists, but is not available. Please file an issue!");
      return {
        alias: be,
        name: ue,
        value: ze
      };
    }
    throw new i("intrinsic " + K + " does not exist!");
  };
  return Oi = function(K, ne) {
    if (typeof K != "string" || K.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ne != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (Ne(/^%?[^%]*%?$/, K) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ue = $e(K), be = ue.length > 0 ? ue[0] : "", ze = X("%" + be + "%", ne), Qe = ze.name, Ke = ze.value, Ce = !1, Ue = ze.alias;
    Ue && (be = Ue[0], fe(ue, T([0, 1], Ue)));
    for (var at = 1, qa = !0; at < ue.length; at += 1) {
      var bt = ue[at], Qa = he(bt, 0, 1), Ja = he(bt, -1);
      if ((Qa === '"' || Qa === "'" || Qa === "`" || Ja === '"' || Ja === "'" || Ja === "`") && Qa !== Ja)
        throw new i("property names with quotes must have matching quotes");
      if ((bt === "constructor" || !qa) && (Ce = !0), be += "." + bt, Qe = "%" + be + "%", ce(re, Qe))
        Ke = re[Qe];
      else if (Ke != null) {
        if (!(bt in Ke)) {
          if (!ne)
            throw new l("base intrinsic for " + K + " exists, but the property is not available.");
          return;
        }
        if (b && at + 1 >= ue.length) {
          var Xa = b(Ke, bt);
          qa = !!Xa, qa && "get" in Xa && !("originalValue" in Xa.get) ? Ke = Xa.get : Ke = Ke[bt];
        } else
          qa = ce(Ke, bt), Ke = Ke[bt];
        qa && !Ce && (re[Qe] = Ke);
      }
    }
    return Ke;
  }, Oi;
}
var Ai, Dd;
function lp() {
  if (Dd) return Ai;
  Dd = 1;
  var e = /* @__PURE__ */ ss(), t = ip(), a = t([e("%String.prototype.indexOf%")]);
  return Ai = function(r, n) {
    var o = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(r, !!n)
    );
    return typeof o == "function" && a(r, ".prototype.") > -1 ? t(
      /** @type {const} */
      [o]
    ) : o;
  }, Ai;
}
var Ci, Pd;
function sp() {
  if (Pd) return Ci;
  Pd = 1;
  var e = /* @__PURE__ */ ss(), t = /* @__PURE__ */ lp(), a = /* @__PURE__ */ ko(), r = /* @__PURE__ */ Or(), n = e("%Map%", !0), o = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), s = t("Map.prototype.delete", !0), d = t("Map.prototype.size", !0);
  return Ci = !!n && /** @type {Exclude<import('.'), false>} */
  function() {
    var c, f = {
      assert: function(y) {
        if (!f.has(y))
          throw new r("Side channel does not contain " + a(y));
      },
      delete: function(y) {
        if (c) {
          var p = s(c, y);
          return d(c) === 0 && (c = void 0), p;
        }
        return !1;
      },
      get: function(y) {
        if (c)
          return o(c, y);
      },
      has: function(y) {
        return c ? l(c, y) : !1;
      },
      set: function(y, p) {
        c || (c = new n()), i(c, y, p);
      }
    };
    return f;
  }, Ci;
}
var Ei, jd;
function nw() {
  if (jd) return Ei;
  jd = 1;
  var e = /* @__PURE__ */ ss(), t = /* @__PURE__ */ lp(), a = /* @__PURE__ */ ko(), r = sp(), n = /* @__PURE__ */ Or(), o = e("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), s = t("WeakMap.prototype.has", !0), d = t("WeakMap.prototype.delete", !0);
  return Ei = o ? (
    /** @type {Exclude<import('.'), false>} */
    (function() {
      var c, f, y = {
        assert: function(p) {
          if (!y.has(p))
            throw new n("Side channel does not contain " + a(p));
        },
        delete: function(p) {
          if (o && p && (typeof p == "object" || typeof p == "function")) {
            if (c)
              return d(c, p);
          } else if (r && f)
            return f.delete(p);
          return !1;
        },
        get: function(p) {
          return o && p && (typeof p == "object" || typeof p == "function") && c ? i(c, p) : f && f.get(p);
        },
        has: function(p) {
          return o && p && (typeof p == "object" || typeof p == "function") && c ? s(c, p) : !!f && f.has(p);
        },
        set: function(p, g) {
          o && p && (typeof p == "object" || typeof p == "function") ? (c || (c = new o()), l(c, p, g)) : r && (f || (f = r()), f.set(p, g));
        }
      };
      return y;
    })
  ) : r, Ei;
}
var $i, Id;
function up() {
  if (Id) return $i;
  Id = 1;
  var e = /* @__PURE__ */ Or(), t = /* @__PURE__ */ ko(), a = M0(), r = sp(), n = nw(), o = n || r || a;
  return $i = function() {
    var i, l = {
      assert: function(s) {
        if (!l.has(s))
          throw new e("Side channel does not contain " + t(s));
      },
      delete: function(s) {
        return !!i && i.delete(s);
      },
      get: function(s) {
        return i && i.get(s);
      },
      has: function(s) {
        return !!i && i.has(s);
      },
      set: function(s, d) {
        i || (i = o()), i.set(s, d);
      }
    };
    return l;
  }, $i;
}
var Bi, Fd;
function us() {
  if (Fd) return Bi;
  Fd = 1;
  var e = String.prototype.replace, t = /%20/g, a = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Bi = {
    default: a.RFC3986,
    formatters: {
      RFC1738: function(r) {
        return e.call(r, t, "+");
      },
      RFC3986: function(r) {
        return String(r);
      }
    },
    RFC1738: a.RFC1738,
    RFC3986: a.RFC3986
  }, Bi;
}
var Mi, Td;
function dp() {
  if (Td) return Mi;
  Td = 1;
  var e = /* @__PURE__ */ us(), t = up(), a = Object.prototype.hasOwnProperty, r = Array.isArray, n = t(), o = function(q, C) {
    return n.set(q, C), q;
  }, i = function(q) {
    return n.has(q);
  }, l = function(q) {
    return n.get(q);
  }, s = function(q, C) {
    n.set(q, C);
  }, d = (function() {
    for (var q = [], C = 0; C < 256; ++C)
      q[q.length] = "%" + ((C < 16 ? "0" : "") + C.toString(16)).toUpperCase();
    return q;
  })(), c = function(q) {
    for (; q.length > 1; ) {
      var C = q.pop(), E = C.obj[C.prop];
      if (r(E)) {
        for (var M = [], R = 0; R < E.length; ++R)
          typeof E[R] < "u" && (M[M.length] = E[R]);
        C.obj[C.prop] = M;
      }
    }
  }, f = function(q, C) {
    for (var E = C && C.plainObjects ? { __proto__: null } : {}, M = 0; M < q.length; ++M)
      typeof q[M] < "u" && (E[M] = q[M]);
    return E;
  }, y = function q(C, E, M) {
    if (!E)
      return C;
    if (typeof E != "object" && typeof E != "function") {
      if (r(C)) {
        var R = C.length;
        if (M && typeof M.arrayLimit == "number" && R > M.arrayLimit)
          return o(f(C.concat(E), M), R);
        C[R] = E;
      } else if (C && typeof C == "object")
        if (i(C)) {
          var oe = l(C) + 1;
          C[oe] = E, s(C, oe);
        } else {
          if (M && M.strictMerge)
            return [C, E];
          (M && (M.plainObjects || M.allowPrototypes) || !a.call(Object.prototype, E)) && (C[E] = !0);
        }
      else
        return [C, E];
      return C;
    }
    if (!C || typeof C != "object") {
      if (i(E)) {
        for (var ae = Object.keys(E), H = M && M.plainObjects ? { __proto__: null, 0: C } : { 0: C }, re = 0; re < ae.length; re++) {
          var P = parseInt(ae[re], 10);
          H[P + 1] = E[ae[re]];
        }
        return o(H, l(E) + 1);
      }
      var L = [C].concat(E);
      return M && typeof M.arrayLimit == "number" && L.length > M.arrayLimit ? o(f(L, M), L.length - 1) : L;
    }
    var U = C;
    return r(C) && !r(E) && (U = f(C, M)), r(C) && r(E) ? (E.forEach(function(G, ce) {
      if (a.call(C, ce)) {
        var T = C[ce];
        T && typeof T == "object" && G && typeof G == "object" ? C[ce] = q(T, G, M) : C[C.length] = G;
      } else
        C[ce] = G;
    }), C) : Object.keys(E).reduce(function(G, ce) {
      var T = E[ce];
      if (a.call(G, ce) ? G[ce] = q(G[ce], T, M) : G[ce] = T, i(E) && !i(G) && o(G, l(E)), i(G)) {
        var fe = parseInt(ce, 10);
        String(fe) === ce && fe >= 0 && fe > l(G) && s(G, fe);
      }
      return G;
    }, U);
  }, p = function(q, C) {
    return Object.keys(C).reduce(function(E, M) {
      return E[M] = C[M], E;
    }, q);
  }, g = function(q, C, E) {
    var M = q.replace(/\+/g, " ");
    if (E === "iso-8859-1")
      return M.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(M);
    } catch {
      return M;
    }
  }, h = 1024, k = function(q, C, E, M, R) {
    if (q.length === 0)
      return q;
    var oe = q;
    if (typeof q == "symbol" ? oe = Symbol.prototype.toString.call(q) : typeof q != "string" && (oe = String(q)), E === "iso-8859-1")
      return escape(oe).replace(/%u[0-9a-f]{4}/gi, function(G) {
        return "%26%23" + parseInt(G.slice(2), 16) + "%3B";
      });
    for (var ae = "", H = 0; H < oe.length; H += h) {
      for (var re = oe.length >= h ? oe.slice(H, H + h) : oe, P = [], L = 0; L < re.length; ++L) {
        var U = re.charCodeAt(L);
        if (U === 45 || U === 46 || U === 95 || U === 126 || U >= 48 && U <= 57 || U >= 65 && U <= 90 || U >= 97 && U <= 122 || R === e.RFC1738 && (U === 40 || U === 41)) {
          P[P.length] = re.charAt(L);
          continue;
        }
        if (U < 128) {
          P[P.length] = d[U];
          continue;
        }
        if (U < 2048) {
          P[P.length] = d[192 | U >> 6] + d[128 | U & 63];
          continue;
        }
        if (U < 55296 || U >= 57344) {
          P[P.length] = d[224 | U >> 12] + d[128 | U >> 6 & 63] + d[128 | U & 63];
          continue;
        }
        L += 1, U = 65536 + ((U & 1023) << 10 | re.charCodeAt(L) & 1023), P[P.length] = d[240 | U >> 18] + d[128 | U >> 12 & 63] + d[128 | U >> 6 & 63] + d[128 | U & 63];
      }
      ae += P.join("");
    }
    return ae;
  }, w = function(q) {
    for (var C = [{ obj: { o: q }, prop: "o" }], E = [], M = 0; M < C.length; ++M)
      for (var R = C[M], oe = R.obj[R.prop], ae = Object.keys(oe), H = 0; H < ae.length; ++H) {
        var re = ae[H], P = oe[re];
        typeof P == "object" && P !== null && E.indexOf(P) === -1 && (C[C.length] = { obj: oe, prop: re }, E[E.length] = P);
      }
    return c(C), q;
  }, b = function(q) {
    return Object.prototype.toString.call(q) === "[object RegExp]";
  }, S = function(q) {
    return !q || typeof q != "object" ? !1 : !!(q.constructor && q.constructor.isBuffer && q.constructor.isBuffer(q));
  }, z = function(q, C, E, M) {
    if (i(q)) {
      var R = l(q) + 1;
      return q[R] = C, s(q, R), q;
    }
    var oe = [].concat(q, C);
    return oe.length > E ? o(f(oe, { plainObjects: M }), oe.length - 1) : oe;
  }, $ = function(q, C) {
    if (r(q)) {
      for (var E = [], M = 0; M < q.length; M += 1)
        E[E.length] = C(q[M]);
      return E;
    }
    return C(q);
  };
  return Mi = {
    arrayToObject: f,
    assign: p,
    combine: z,
    compact: w,
    decode: g,
    encode: k,
    isBuffer: S,
    isOverflow: i,
    isRegExp: b,
    markOverflow: o,
    maybeMap: $,
    merge: y
  }, Mi;
}
var Di, Nd;
function ow() {
  if (Nd) return Di;
  Nd = 1;
  var e = up(), t = /* @__PURE__ */ dp(), a = /* @__PURE__ */ us(), r = Object.prototype.hasOwnProperty, n = {
    brackets: function(h) {
      return h + "[]";
    },
    comma: "comma",
    indices: function(h, k) {
      return h + "[" + k + "]";
    },
    repeat: function(h) {
      return h;
    }
  }, o = Array.isArray, i = Array.prototype.push, l = function(h, k) {
    i.apply(h, o(k) ? k : [k]);
  }, s = Date.prototype.toISOString, d = a.default, c = {
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
    format: d,
    formatter: a.formatters[d],
    // deprecated
    indices: !1,
    serializeDate: function(h) {
      return s.call(h);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(h) {
    return typeof h == "string" || typeof h == "number" || typeof h == "boolean" || typeof h == "symbol" || typeof h == "bigint";
  }, y = {}, p = function h(k, w, b, S, z, $, q, C, E, M, R, oe, ae, H, re, P, L, U) {
    for (var G = k, ce = U, T = 0, fe = !1; (ce = ce.get(y)) !== void 0 && !fe; ) {
      var te = ce.get(k);
      if (T += 1, typeof te < "u") {
        if (te === T)
          throw new RangeError("Cyclic object value");
        fe = !0;
      }
      typeof ce.get(y) > "u" && (T = 0);
    }
    if (typeof M == "function" ? G = M(w, G) : G instanceof Date ? G = ae(G) : b === "comma" && o(G) && (G = t.maybeMap(G, function(Ke) {
      return Ke instanceof Date ? ae(Ke) : Ke;
    })), G === null) {
      if ($)
        return E && !P ? E(w, c.encoder, L, "key", H) : w;
      G = "";
    }
    if (f(G) || t.isBuffer(G)) {
      if (E) {
        var he = P ? w : E(w, c.encoder, L, "key", H);
        return [re(he) + "=" + re(E(G, c.encoder, L, "value", H))];
      }
      return [re(w) + "=" + re(String(G))];
    }
    var Ne = [];
    if (typeof G > "u")
      return Ne;
    var qe;
    if (b === "comma" && o(G))
      P && E && (G = t.maybeMap(G, E)), qe = [{ value: G.length > 0 ? G.join(",") || null : void 0 }];
    else if (o(M))
      qe = M;
    else {
      var ve = Object.keys(G);
      qe = R ? ve.sort(R) : ve;
    }
    var $e = C ? String(w).replace(/\./g, "%2E") : String(w), X = S && o(G) && G.length === 1 ? $e + "[]" : $e;
    if (z && o(G) && G.length === 0)
      return X + "[]";
    for (var K = 0; K < qe.length; ++K) {
      var ne = qe[K], ue = typeof ne == "object" && ne && typeof ne.value < "u" ? ne.value : G[ne];
      if (!(q && ue === null)) {
        var be = oe && C ? String(ne).replace(/\./g, "%2E") : String(ne), ze = o(G) ? typeof b == "function" ? b(X, be) : X : X + (oe ? "." + be : "[" + be + "]");
        U.set(k, T);
        var Qe = e();
        Qe.set(y, U), l(Ne, h(
          ue,
          ze,
          b,
          S,
          z,
          $,
          q,
          C,
          b === "comma" && P && o(G) ? null : E,
          M,
          R,
          oe,
          ae,
          H,
          re,
          P,
          L,
          Qe
        ));
      }
    }
    return Ne;
  }, g = function(h) {
    if (!h)
      return c;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.encodeDotInKeys < "u" && typeof h.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.encoder !== null && typeof h.encoder < "u" && typeof h.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var k = h.charset || c.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var w = a.default;
    if (typeof h.format < "u") {
      if (!r.call(a.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      w = h.format;
    }
    var b = a.formatters[w], S = c.filter;
    (typeof h.filter == "function" || o(h.filter)) && (S = h.filter);
    var z;
    if (h.arrayFormat in n ? z = h.arrayFormat : "indices" in h ? z = h.indices ? "indices" : "repeat" : z = c.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var $ = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : c.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : c.addQueryPrefix,
      allowDots: $,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: z,
      charset: k,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? c.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : c.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : c.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : c.encodeValuesOnly,
      filter: S,
      format: w,
      formatter: b,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return Di = function(h, k) {
    var w = h, b = g(k), S, z;
    typeof b.filter == "function" ? (z = b.filter, w = z("", w)) : o(b.filter) && (z = b.filter, S = z);
    var $ = [];
    if (typeof w != "object" || w === null)
      return "";
    var q = n[b.arrayFormat], C = q === "comma" && b.commaRoundTrip;
    S || (S = Object.keys(w)), b.sort && S.sort(b.sort);
    for (var E = e(), M = 0; M < S.length; ++M) {
      var R = S[M], oe = w[R];
      b.skipNulls && oe === null || l($, p(
        oe,
        R,
        q,
        C,
        b.allowEmptyArrays,
        b.strictNullHandling,
        b.skipNulls,
        b.encodeDotInKeys,
        b.encode ? b.encoder : null,
        b.filter,
        b.sort,
        b.allowDots,
        b.serializeDate,
        b.format,
        b.formatter,
        b.encodeValuesOnly,
        b.charset,
        E
      ));
    }
    var ae = $.join(b.delimiter), H = b.addQueryPrefix === !0 ? "?" : "";
    return b.charsetSentinel && (b.charset === "iso-8859-1" ? H += "utf8=%26%2310003%3B&" : H += "utf8=%E2%9C%93&"), ae.length > 0 ? H + ae : "";
  }, Di;
}
var Pi, Vd;
function iw() {
  if (Vd) return Pi;
  Vd = 1;
  var e = /* @__PURE__ */ dp(), t = Object.prototype.hasOwnProperty, a = Array.isArray, r = {
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
  }, n = function(p) {
    return p.replace(/&#(\d+);/g, function(g, h) {
      return String.fromCharCode(parseInt(h, 10));
    });
  }, o = function(p, g, h) {
    if (p && typeof p == "string" && g.comma && p.indexOf(",") > -1)
      return p.split(",");
    if (g.throwOnLimitExceeded && h >= g.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + g.arrayLimit + " element" + (g.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return p;
  }, i = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", s = function(p, g) {
    var h = { __proto__: null }, k = g.ignoreQueryPrefix ? p.replace(/^\?/, "") : p;
    k = k.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var w = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit, b = k.split(
      g.delimiter,
      g.throwOnLimitExceeded && typeof w < "u" ? w + 1 : w
    );
    if (g.throwOnLimitExceeded && typeof w < "u" && b.length > w)
      throw new RangeError("Parameter limit exceeded. Only " + w + " parameter" + (w === 1 ? "" : "s") + " allowed.");
    var S = -1, z, $ = g.charset;
    if (g.charsetSentinel)
      for (z = 0; z < b.length; ++z)
        b[z].indexOf("utf8=") === 0 && (b[z] === l ? $ = "utf-8" : b[z] === i && ($ = "iso-8859-1"), S = z, z = b.length);
    for (z = 0; z < b.length; ++z)
      if (z !== S) {
        var q = b[z], C = q.indexOf("]="), E = C === -1 ? q.indexOf("=") : C + 1, M, R;
        if (E === -1 ? (M = g.decoder(q, r.decoder, $, "key"), R = g.strictNullHandling ? null : "") : (M = g.decoder(q.slice(0, E), r.decoder, $, "key"), M !== null && (R = e.maybeMap(
          o(
            q.slice(E + 1),
            g,
            a(h[M]) ? h[M].length : 0
          ),
          function(ae) {
            return g.decoder(ae, r.decoder, $, "value");
          }
        ))), R && g.interpretNumericEntities && $ === "iso-8859-1" && (R = n(String(R))), q.indexOf("[]=") > -1 && (R = a(R) ? [R] : R), g.comma && a(R) && R.length > g.arrayLimit) {
          if (g.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + g.arrayLimit + " element" + (g.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          R = e.combine([], R, g.arrayLimit, g.plainObjects);
        }
        if (M !== null) {
          var oe = t.call(h, M);
          oe && (g.duplicates === "combine" || q.indexOf("[]=") > -1) ? h[M] = e.combine(
            h[M],
            R,
            g.arrayLimit,
            g.plainObjects
          ) : (!oe || g.duplicates === "last") && (h[M] = R);
        }
      }
    return h;
  }, d = function(p, g, h, k) {
    var w = 0;
    if (p.length > 0 && p[p.length - 1] === "[]") {
      var b = p.slice(0, -1).join("");
      w = Array.isArray(g) && g[b] ? g[b].length : 0;
    }
    for (var S = k ? g : o(g, h, w), z = p.length - 1; z >= 0; --z) {
      var $, q = p[z];
      if (q === "[]" && h.parseArrays)
        e.isOverflow(S) ? $ = S : $ = h.allowEmptyArrays && (S === "" || h.strictNullHandling && S === null) ? [] : e.combine(
          [],
          S,
          h.arrayLimit,
          h.plainObjects
        );
      else {
        $ = h.plainObjects ? { __proto__: null } : {};
        var C = q.charAt(0) === "[" && q.charAt(q.length - 1) === "]" ? q.slice(1, -1) : q, E = h.decodeDotInKeys ? C.replace(/%2E/g, ".") : C, M = parseInt(E, 10), R = !isNaN(M) && q !== E && String(M) === E && M >= 0 && h.parseArrays;
        if (!h.parseArrays && E === "")
          $ = { 0: S };
        else if (R && M < h.arrayLimit)
          $ = [], $[M] = S;
        else {
          if (R && h.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          R ? ($[M] = S, e.markOverflow($, M)) : E !== "__proto__" && ($[E] = S);
        }
      }
      S = $;
    }
    return S;
  }, c = function(p, g) {
    var h = g.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p;
    if (g.depth <= 0)
      return !g.plainObjects && t.call(Object.prototype, h) && !g.allowPrototypes ? void 0 : [h];
    var k = /(\[[^[\]]*])/, w = /(\[[^[\]]*])/g, b = k.exec(h), S = b ? h.slice(0, b.index) : h, z = [];
    if (S) {
      if (!g.plainObjects && t.call(Object.prototype, S) && !g.allowPrototypes)
        return;
      z[z.length] = S;
    }
    for (var $ = 0; (b = w.exec(h)) !== null && $ < g.depth; ) {
      $ += 1;
      var q = b[1].slice(1, -1);
      if (!g.plainObjects && t.call(Object.prototype, q) && !g.allowPrototypes)
        return;
      z[z.length] = b[1];
    }
    if (b) {
      if (g.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + g.depth + " and strictDepth is true");
      z[z.length] = "[" + h.slice(b.index) + "]";
    }
    return z;
  }, f = function(p, g, h, k) {
    if (p) {
      var w = c(p, h);
      if (w)
        return d(w, g, h, k);
    }
  }, y = function(p) {
    if (!p)
      return r;
    if (typeof p.allowEmptyArrays < "u" && typeof p.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof p.decodeDotInKeys < "u" && typeof p.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (p.decoder !== null && typeof p.decoder < "u" && typeof p.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof p.charset < "u" && p.charset !== "utf-8" && p.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof p.throwOnLimitExceeded < "u" && typeof p.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var g = typeof p.charset > "u" ? r.charset : p.charset, h = typeof p.duplicates > "u" ? r.duplicates : p.duplicates;
    if (h !== "combine" && h !== "first" && h !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var k = typeof p.allowDots > "u" ? p.decodeDotInKeys === !0 ? !0 : r.allowDots : !!p.allowDots;
    return {
      allowDots: k,
      allowEmptyArrays: typeof p.allowEmptyArrays == "boolean" ? !!p.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof p.allowPrototypes == "boolean" ? p.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof p.allowSparse == "boolean" ? p.allowSparse : r.allowSparse,
      arrayLimit: typeof p.arrayLimit == "number" ? p.arrayLimit : r.arrayLimit,
      charset: g,
      charsetSentinel: typeof p.charsetSentinel == "boolean" ? p.charsetSentinel : r.charsetSentinel,
      comma: typeof p.comma == "boolean" ? p.comma : r.comma,
      decodeDotInKeys: typeof p.decodeDotInKeys == "boolean" ? p.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof p.decoder == "function" ? p.decoder : r.decoder,
      delimiter: typeof p.delimiter == "string" || e.isRegExp(p.delimiter) ? p.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof p.depth == "number" || p.depth === !1 ? +p.depth : r.depth,
      duplicates: h,
      ignoreQueryPrefix: p.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof p.interpretNumericEntities == "boolean" ? p.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof p.parameterLimit == "number" ? p.parameterLimit : r.parameterLimit,
      parseArrays: p.parseArrays !== !1,
      plainObjects: typeof p.plainObjects == "boolean" ? p.plainObjects : r.plainObjects,
      strictDepth: typeof p.strictDepth == "boolean" ? !!p.strictDepth : r.strictDepth,
      strictMerge: typeof p.strictMerge == "boolean" ? !!p.strictMerge : r.strictMerge,
      strictNullHandling: typeof p.strictNullHandling == "boolean" ? p.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof p.throwOnLimitExceeded == "boolean" ? p.throwOnLimitExceeded : !1
    };
  };
  return Pi = function(p, g) {
    var h = y(g);
    if (p === "" || p === null || typeof p > "u")
      return h.plainObjects ? { __proto__: null } : {};
    for (var k = typeof p == "string" ? s(p, h) : p, w = h.plainObjects ? { __proto__: null } : {}, b = Object.keys(k), S = 0; S < b.length; ++S) {
      var z = b[S], $ = f(z, k[z], h, typeof p == "string");
      w = e.merge(w, $, h);
    }
    return h.allowSparse === !0 ? w : e.compact(w);
  }, Pi;
}
var ji, Rd;
function lw() {
  if (Rd) return ji;
  Rd = 1;
  var e = /* @__PURE__ */ ow(), t = /* @__PURE__ */ iw(), a = /* @__PURE__ */ us();
  return ji = {
    formats: a,
    parse: t,
    stringify: e
  }, ji;
}
var sw = /* @__PURE__ */ lw();
const cp = /* @__PURE__ */ A0(sw);
async function Gt(e) {
  try {
    return [null, await e()];
  } catch (t) {
    return [t, null];
  }
}
Gt.sync = function(e) {
  try {
    return [null, e()];
  } catch (t) {
    return [t, null];
  }
};
class uw {
  static __container_entry_key = "ToastService";
  success(t, a) {
    console.log("Success:", t, a);
  }
  error(t, a) {
    console.error("Error:", t, a);
  }
}
const Yn = dt.proxy(uw);
class dw {
  static __container_entry_key = "FetchService";
  async handleError(t) {
    if (t.headers.get("Content-Type")?.includes("json")) {
      const a = await t.json().catch(() => ({ message: $t("Internal Server Error") }));
      return a.message && Yn.error(a.message), a;
    }
    return Yn.error($t("Internal Server Error")), {
      message: $t("Internal Server Error")
    };
  }
  buildUrl(t, a) {
    if (!a)
      return t;
    const r = cp.stringify(a, { arrayFormat: "brackets" });
    return t + "?" + r;
  }
  buildRequestInit(t) {
    const a = { ...t };
    return t.data && (a.body = JSON.stringify(t.data), a.headers = {
      ...a.headers,
      "Content-Type": "application/json"
    }), a;
  }
  async parseResponse(t) {
    return t.headers.get("Content-Type")?.includes("json") ? t.json() : t.text();
  }
  async fetch(t, a = {}) {
    throw new Error("Method not implemented");
  }
  async try(t, a = {}) {
    return Gt(() => this.fetch(t, a));
  }
  async get(t, a = {}) {
    return this.fetch(t, {
      ...a,
      method: "GET"
    });
  }
  async post(t, a = {}) {
    return this.fetch(t, {
      ...a,
      method: "POST"
    });
  }
  async put(t, a = {}) {
    return this.fetch(t, {
      ...a,
      method: "PUT"
    });
  }
  async delete(t, a = {}) {
    return this.fetch(t, {
      ...a,
      method: "DELETE"
    });
  }
}
const At = dt.proxy(dw), Ii = /* @__PURE__ */ new Set();
function cw(e, t = {}) {
  const a = t.key || e, r = O0(a, {
    default: () => ({
      items: [],
      page: 1,
      total: 0,
      total_pages: 1
    })
  }), n = F(!1), o = Ba(t.page || 1), i = Ba(t.query || {}), l = Ba(t.limit || 10), s = Ba(t.orderBy || null), d = Ba(t.orderDirection || null), c = D(() => r.value.total), f = D(() => r.value.total_pages), y = D(() => {
    let w = Array.isArray(r.value.items) ? r.value.items : [];
    return t.refine && (w = t.refine(w)), t.serialize ? w.map((b) => t.serialize(b)) : w;
  });
  async function p() {
    if (n.value) return;
    n.value = !0;
    const w = JSON.parse(JSON.stringify({
      ...i.value,
      page: o.value,
      limit: l.value,
      orderBy: s.value ? s.value : void 0,
      orderDirection: d.value ? d.value : void 0
    })), [b, S] = await At.try(e, {
      method: "GET",
      query: w
    });
    if (b) {
      n.value = !1, console.error(b);
      return;
    }
    r.value = S, await new Promise((z) => setTimeout(z, 800)), n.value = !1;
  }
  async function g() {
    if (o.value === 1) {
      await p();
      return;
    }
    o.value = 1;
  }
  function h(w, b) {
    JSON.stringify(w) === JSON.stringify(b) || g();
  }
  ge([o, l], p), ge([s, d], g, { deep: !0 }), Yf(
    () => JSON.parse(JSON.stringify(i.value)),
    h,
    {
      debounce: t.debounce || 1e3
    }
  );
  async function k() {
    if (!Ii.has(a) && y.value.length) {
      Ii.add(a);
      return;
    }
    Ii.add(a), await p();
  }
  return t.immediate !== !1 && (Ae(k), Bk(k)), {
    page: o,
    limit: l,
    orderBy: s,
    orderDirection: d,
    total: c,
    totalPages: f,
    items: y,
    loading: n,
    load: p,
    reset: g,
    query: i,
    hydrate: k
  };
}
let ur;
function fw(e) {
  ur = {
    ...ur,
    ...e
  };
}
// @__NO_SIDE_EFFECTS__
function Ar(e) {
  return {
    lang: e?.lang ?? ur?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? ur?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? ur?.abortPipeEarly
  };
}
function pw() {
  ur = void 0;
}
let Jr;
function yw(e, t) {
  Jr || (Jr = /* @__PURE__ */ new Map()), Jr.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function fp(e) {
  return Jr?.get(e);
}
function mw(e) {
  Jr?.delete(e);
}
let Xr;
function hw(e, t) {
  Xr || (Xr = /* @__PURE__ */ new Map()), Xr.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function pp(e) {
  return Xr?.get(e);
}
function vw(e) {
  Xr?.delete(e);
}
let Ma;
function gw(e, t, a) {
  Ma || (Ma = /* @__PURE__ */ new Map()), Ma.get(e) || Ma.set(e, /* @__PURE__ */ new Map()), Ma.get(e).set(a, t);
}
// @__NO_SIDE_EFFECTS__
function yp(e, t) {
  return Ma?.get(e)?.get(t);
}
function bw(e, t) {
  Ma?.get(e)?.delete(t);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function B(e, t, a, r, n) {
  const o = n && "input" in n ? n.input : a.value, i = n?.expected ?? e.expects ?? null, l = n?.received ?? /* @__PURE__ */ Re(o), s = {
    kind: e.kind,
    type: e.type,
    input: o,
    expected: i,
    received: l,
    message: `Invalid ${t}: ${i ? `Expected ${i} but r` : "R"}eceived ${l}`,
    requirement: e.requirement,
    path: n?.path,
    issues: n?.issues,
    lang: r.lang,
    abortEarly: r.abortEarly,
    abortPipeEarly: r.abortPipeEarly
  }, d = e.kind === "schema", c = n?.message ?? e.message ?? /* @__PURE__ */ yp(e.reference, s.lang) ?? (d ? /* @__PURE__ */ pp(s.lang) : null) ?? r.message ?? /* @__PURE__ */ fp(s.lang);
  c !== void 0 && (s.message = typeof c == "function" ? c(s) : c), d && (a.typed = !1), a.issues ? a.issues.push(s) : a.issues = [s];
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return {
    typed: e.typed,
    value: e.value,
    issues: e.issues && [...e.issues]
  };
}
let Fi;
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return Fi || (Fi = new TextEncoder()), Fi.encode(e).length;
}
let Ti;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  Ti || (Ti = new Intl.Segmenter());
  const t = Ti.segment(e);
  let a = 0;
  for (const r of t) a++;
  return a;
}
// @__NO_SIDE_EFFECTS__
function xo(e, t) {
  if ("pipe" in e) {
    const a = [];
    for (let r = e.pipe.length - 1; r >= 0; r--) {
      const n = e.pipe[r];
      if (n.kind === "schema" && "pipe" in n) a.push(n);
      else if (n.kind === "metadata" && n.type === t) return n[t];
    }
    for (const r of a) {
      const n = /* @__PURE__ */ xo(r, t);
      if (n !== void 0) return n;
    }
  }
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ Ar());
    }
  };
}
let Vr;
// @__NO_SIDE_EFFECTS__
function hn(e, t) {
  Vr || (Vr = /* @__PURE__ */ new Map()), Vr.get(e) || Vr.set(e, new Intl.Segmenter(e, { granularity: "word" }));
  const a = Vr.get(e).segment(t);
  let r = 0;
  for (const n of a) n.isWordLike && r++;
  return r;
}
const kw = /\D/gu;
// @__NO_SIDE_EFFECTS__
function ds(e) {
  const t = e.replace(kw, "");
  let a = t.length, r = 1, n = 0;
  for (; a; ) {
    const o = +t[--a];
    r ^= 1, n += r ? [
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
  return n % 10 === 0;
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
  return Object.hasOwn(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function vt(e, t) {
  const a = [...new Set(e)];
  return a.length > 1 ? `(${a.join(` ${t} `)})` : a[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function ww(e, t) {
  const a = {};
  for (const r of e) a[r] = t;
  return a;
}
// @__NO_SIDE_EFFECTS__
function xw(e) {
  const t = {};
  for (const a of e) Object.assign(t, a.entries);
  return t;
}
// @__NO_SIDE_EFFECTS__
function zo(e) {
  if (e.path) {
    let t = "";
    for (const a of e.path) if (typeof a.key == "string" || typeof a.key == "number") t ? t += `.${a.key}` : t += a.key;
    else return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function zw(e, t) {
  return t.kind === e;
}
// @__NO_SIDE_EFFECTS__
function _w(e, t) {
  return t.type === e;
}
// @__NO_SIDE_EFFECTS__
function Sw(e) {
  return e instanceof oa;
}
var oa = class extends Error {
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
function mp(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: mp,
    async: !1,
    schema: e,
    "~run"(t, a) {
      const r = t.value;
      return t.value = (...n) => {
        const o = this.schema["~run"]({ value: n }, a);
        if (o.issues) throw new oa(o.issues);
        return r(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hp(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: hp,
    async: !1,
    schema: e,
    "~run"(t, a) {
      const r = t.value;
      return t.value = async (...n) => {
        const o = await e["~run"]({ value: n }, a);
        if (o.issues) throw new oa(o.issues);
        return r(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vp() {
  return {
    kind: "transformation",
    type: "await",
    reference: vp,
    async: !0,
    async "~run"(e) {
      return e.value = await e.value, e;
    }
  };
}
const gp = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu, bp = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u, kp = /^[a-z][\da-z]*$/u, wp = /^[+-]?(?:\d*\.)?\d+$/u, xp = /^\d+$/u, zp = /^(?=.{1,253}$)(?:(?![Xx][Nn]--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/u, _p = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu, Sp = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$", "u"), qp = /^(?:0[hx])?[\da-fA-F]+$/u, Op = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u, Ap = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u, Cp = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u, Ep = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, $p = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, Bp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u, Mp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u, Dp = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u, Pp = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, jp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z| ?[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u, Ip = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u, Fp = /^(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?$/u, Tp = /^(?:[A-Z]{2}[A-Z\d]{3}\d{7}|[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5})$/u, Np = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$/u, Vp = /^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Rp = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$|^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Up = /^[\w-]+$/u, Lp = /^(?:0o)?[0-7]+$/u, Wp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Kp = /^[\da-z]+(?:[-_][\da-z]+)*$/u, Gp = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u, Hp = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
// @__NO_SIDE_EFFECTS__
function Yp(e) {
  return {
    kind: "validation",
    type: "base64",
    reference: Yp,
    async: !1,
    expects: null,
    requirement: gp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Base64", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zp(e) {
  return {
    kind: "validation",
    type: "bic",
    reference: Zp,
    async: !1,
    expects: null,
    requirement: bp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "BIC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qp(e) {
  return {
    kind: "transformation",
    type: "brand",
    reference: Qp,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jp(e, t) {
  return {
    kind: "validation",
    type: "bytes",
    reference: Jp,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ yn(a.value);
        n !== this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xp(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: Xp,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement(a.value) && B(this, "input", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ey(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: ey,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(a, r) {
      return a.typed && !await this.requirement(a.value) && B(this, "input", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ty(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: ty,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) for (let n = 0; n < a.value.length; n++) {
        const o = a.value[n];
        this.requirement(o, n, a.value) || B(this, "item", a, r, {
          input: o,
          path: [{
            type: "array",
            origin: "value",
            input: a.value,
            key: n,
            value: o
          }]
        });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ay(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: ay,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(a, r) {
      if (a.typed) {
        const n = await Promise.all(a.value.map(this.requirement));
        for (let o = 0; o < a.value.length; o++) if (!n[o]) {
          const i = a.value[o];
          B(this, "item", a, r, {
            input: i,
            path: [{
              type: "array",
              origin: "value",
              input: a.value,
              key: o,
              value: i
            }]
          });
        }
      }
      return a;
    }
  };
}
const qw = /^(?:\d{13,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u, Ow = /[- ]/gu, Aw = [
  /^3[47]\d{13}$/u,
  /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
  /^6(?:011|5\d{2})\d{12,15}$/u,
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  /^5[1-5]\d{2}|(?:222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
  /^4\d{12}(?:\d{3,6})?$/u
];
// @__NO_SIDE_EFFECTS__
function ry(e) {
  return {
    kind: "validation",
    type: "credit_card",
    reference: ry,
    async: !1,
    expects: null,
    requirement(t) {
      let a;
      return qw.test(t) && (a = t.replace(Ow, "")) && Aw.some((r) => r.test(a)) && /* @__PURE__ */ ds(a);
    },
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "credit card", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ny(e) {
  return {
    kind: "validation",
    type: "cuid2",
    reference: ny,
    async: !1,
    expects: null,
    requirement: kp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Cuid2", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oy(e) {
  return {
    kind: "validation",
    type: "decimal",
    reference: oy,
    async: !1,
    expects: null,
    requirement: wp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "decimal", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iy(e) {
  return {
    kind: "metadata",
    type: "description",
    reference: iy,
    description: e
  };
}
// @__NO_SIDE_EFFECTS__
function ly(e) {
  return {
    kind: "validation",
    type: "digits",
    reference: ly,
    async: !1,
    expects: null,
    requirement: xp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "digits", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sy(e) {
  return {
    kind: "validation",
    type: "domain",
    reference: sy,
    expects: null,
    async: !1,
    requirement: zp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "domain", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uy(e) {
  return {
    kind: "validation",
    type: "email",
    reference: uy,
    expects: null,
    async: !1,
    requirement: _p,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "email", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dy(e) {
  return {
    kind: "validation",
    type: "emoji",
    reference: dy,
    async: !1,
    expects: null,
    requirement: Sp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "emoji", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cy(e) {
  return {
    kind: "validation",
    type: "empty",
    reference: cy,
    async: !1,
    expects: "0",
    message: e,
    "~run"(t, a) {
      return t.typed && t.value.length > 0 && B(this, "length", t, a, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fy(e, t) {
  return {
    kind: "validation",
    type: "ends_with",
    reference: fy,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !a.value.endsWith(this.requirement) && B(this, "end", a, r, { received: `"${a.value.slice(-this.requirement.length)}"` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function py(e, t) {
  return {
    kind: "validation",
    type: "entries",
    reference: py,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (!a.typed) return a;
      const n = Object.keys(a.value).length;
      return a.typed && n !== this.requirement && B(this, "entries", a, r, { received: `${n}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yy(e, t) {
  return {
    kind: "validation",
    type: "every_item",
    reference: yy,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !a.value.every(this.requirement) && B(this, "item", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function my(e) {
  return {
    kind: "metadata",
    type: "examples",
    reference: my,
    examples: e
  };
}
// @__NO_SIDE_EFFECTS__
function hy(e, t) {
  const a = /* @__PURE__ */ Re(e);
  return {
    kind: "validation",
    type: "excludes",
    reference: hy,
    async: !1,
    expects: `!${a}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.includes(this.requirement) && B(this, "content", r, n, { received: a }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vy(e) {
  return {
    kind: "transformation",
    type: "filter_items",
    reference: vy,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.filter(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gy(e) {
  return {
    kind: "transformation",
    type: "find_item",
    reference: gy,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.find(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function by(e) {
  return {
    kind: "validation",
    type: "finite",
    reference: by,
    async: !1,
    expects: null,
    requirement: Number.isFinite,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "finite", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ky(e) {
  return {
    kind: "transformation",
    type: "flavor",
    reference: ky,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wy(e, t) {
  return {
    kind: "validation",
    type: "graphemes",
    reference: wy,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ mn(a.value);
        n !== this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xy(e, t) {
  return {
    kind: "validation",
    type: "gt_value",
    reference: xy,
    async: !1,
    expects: `>${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Re(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value > this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zy(e, t) {
  return {
    kind: "transformation",
    type: "guard",
    reference: zy,
    async: !1,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement(a.value) && (B(this, "input", a, r), a.typed = !1), a;
    }
  };
}
const Cw = {
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
function _y(e, t) {
  return {
    kind: "validation",
    type: "hash",
    reference: _y,
    expects: null,
    async: !1,
    requirement: RegExp(e.map((a) => `^[a-fA-F0-9]{${Cw[a]}}$`).join("|"), "u"),
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement.test(a.value) && B(this, "hash", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sy(e) {
  return {
    kind: "validation",
    type: "hexadecimal",
    reference: Sy,
    async: !1,
    expects: null,
    requirement: qp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "hexadecimal", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qy(e) {
  return {
    kind: "validation",
    type: "hex_color",
    reference: qy,
    async: !1,
    expects: null,
    requirement: Op,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "hex color", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oy(e) {
  return {
    kind: "validation",
    type: "imei",
    reference: Oy,
    async: !1,
    expects: null,
    requirement(t) {
      return Ap.test(t) && /* @__PURE__ */ ds(t);
    },
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "IMEI", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ay(e, t) {
  const a = /* @__PURE__ */ Re(e);
  return {
    kind: "validation",
    type: "includes",
    reference: Ay,
    async: !1,
    expects: a,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.includes(this.requirement) && B(this, "content", r, n, { received: `!${a}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: cs,
    async: !1,
    expects: null,
    requirement: Number.isInteger,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "integer", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cy(e) {
  return {
    kind: "validation",
    type: "ip",
    reference: Cy,
    async: !1,
    expects: null,
    requirement: $p,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IP", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ey(e) {
  return {
    kind: "validation",
    type: "ipv4",
    reference: Ey,
    async: !1,
    expects: null,
    requirement: Cp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IPv4", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $y(e) {
  return {
    kind: "validation",
    type: "ipv6",
    reference: $y,
    async: !1,
    expects: null,
    requirement: Ep,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IPv6", t, a), t;
    }
  };
}
function Ew(e) {
  const t = e.split("").map((r) => r === "X" ? 10 : parseInt(r));
  let a = 0;
  for (let r = 0; r < 10; r++) a += t[r] * (10 - r);
  return a % 11 === 0;
}
function $w(e) {
  const t = e.split("").map((r) => parseInt(r));
  let a = 0;
  for (let r = 0; r < 13; r++) a += t[r] * (r % 2 === 0 ? 1 : 3);
  return a % 10 === 0;
}
const Bw = /[- ]/gu, Mw = /^\d{9}[\dX]$/u, Dw = /^\d{13}$/u;
// @__NO_SIDE_EFFECTS__
function By(e) {
  return {
    kind: "validation",
    type: "isbn",
    reference: By,
    async: !1,
    expects: null,
    requirement(t) {
      const a = t.replace(Bw, "");
      return Mw.test(a) ? Ew(a) : Dw.test(a) ? $w(a) : !1;
    },
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "ISBN", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function My(e) {
  return {
    kind: "validation",
    type: "isrc",
    reference: My,
    async: !1,
    expects: null,
    requirement: Tp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "ISRC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dy(e) {
  return {
    kind: "validation",
    type: "iso_date",
    reference: Dy,
    async: !1,
    expects: null,
    requirement: Bp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "date", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Py(e) {
  return {
    kind: "validation",
    type: "iso_date_time",
    reference: Py,
    async: !1,
    expects: null,
    requirement: Mp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "date-time", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jy(e) {
  return {
    kind: "validation",
    type: "iso_time",
    reference: jy,
    async: !1,
    expects: null,
    requirement: Dp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "time", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Iy(e) {
  return {
    kind: "validation",
    type: "iso_time_second",
    reference: Iy,
    async: !1,
    expects: null,
    requirement: Pp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "time-second", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fy(e) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: Fy,
    async: !1,
    expects: null,
    requirement: jp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "timestamp", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ty(e) {
  return {
    kind: "validation",
    type: "iso_week",
    reference: Ty,
    async: !1,
    expects: null,
    requirement: Ip,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "week", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ny(e) {
  return {
    kind: "validation",
    type: "jws_compact",
    reference: Ny,
    async: !1,
    expects: null,
    requirement: Fp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "JWS compact", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vy(e, t) {
  return {
    kind: "validation",
    type: "length",
    reference: Vy,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.length !== this.requirement && B(this, "length", a, r, { received: `${a.value.length}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ry(e, t) {
  return {
    kind: "validation",
    type: "lt_value",
    reference: Ry,
    async: !1,
    expects: `<${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Re(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value < this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uy(e) {
  return {
    kind: "validation",
    type: "mac",
    reference: Uy,
    async: !1,
    expects: null,
    requirement: Rp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "MAC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ly(e) {
  return {
    kind: "validation",
    type: "mac48",
    reference: Ly,
    async: !1,
    expects: null,
    requirement: Np,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "48-bit MAC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wy(e) {
  return {
    kind: "validation",
    type: "mac64",
    reference: Wy,
    async: !1,
    expects: null,
    requirement: Vp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "64-bit MAC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ky(e) {
  return {
    kind: "transformation",
    type: "map_items",
    reference: Ky,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.map(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gy(e, t) {
  return {
    kind: "validation",
    type: "max_bytes",
    reference: Gy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ yn(a.value);
        n > this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hy(e, t) {
  return {
    kind: "validation",
    type: "max_entries",
    reference: Hy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (!a.typed) return a;
      const n = Object.keys(a.value).length;
      return a.typed && n > this.requirement && B(this, "entries", a, r, { received: `${n}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yy(e, t) {
  return {
    kind: "validation",
    type: "max_graphemes",
    reference: Yy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ mn(a.value);
        n > this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zy(e, t) {
  return {
    kind: "validation",
    type: "max_length",
    reference: Zy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.length > this.requirement && B(this, "length", a, r, { received: `${a.value.length}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qy(e, t) {
  return {
    kind: "validation",
    type: "max_size",
    reference: Qy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.size > this.requirement && B(this, "size", a, r, { received: `${a.value.size}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jy(e, t) {
  return {
    kind: "validation",
    type: "max_value",
    reference: Jy,
    async: !1,
    expects: `<=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Re(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value <= this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xy(e, t, a) {
  return {
    kind: "validation",
    type: "max_words",
    reference: Xy,
    async: !1,
    expects: `<=${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ hn(this.locales, r.value);
        o > this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function em(e) {
  return {
    kind: "metadata",
    type: "metadata",
    reference: em,
    metadata: e
  };
}
// @__NO_SIDE_EFFECTS__
function tm(e, t) {
  return {
    kind: "validation",
    type: "mime_type",
    reference: tm,
    async: !1,
    expects: /* @__PURE__ */ vt(e.map((a) => `"${a}"`), "|"),
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement.includes(a.value.type) && B(this, "MIME type", a, r, { received: `"${a.value.type}"` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function am(e, t) {
  return {
    kind: "validation",
    type: "min_bytes",
    reference: am,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ yn(a.value);
        n < this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rm(e, t) {
  return {
    kind: "validation",
    type: "min_entries",
    reference: rm,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (!a.typed) return a;
      const n = Object.keys(a.value).length;
      return a.typed && n < this.requirement && B(this, "entries", a, r, { received: `${n}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nm(e, t) {
  return {
    kind: "validation",
    type: "min_graphemes",
    reference: nm,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ mn(a.value);
        n < this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function om(e, t) {
  return {
    kind: "validation",
    type: "min_length",
    reference: om,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.length < this.requirement && B(this, "length", a, r, { received: `${a.value.length}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function im(e, t) {
  return {
    kind: "validation",
    type: "min_size",
    reference: im,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.size < this.requirement && B(this, "size", a, r, { received: `${a.value.size}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lm(e, t) {
  return {
    kind: "validation",
    type: "min_value",
    reference: lm,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Re(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value >= this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sm(e, t, a) {
  return {
    kind: "validation",
    type: "min_words",
    reference: sm,
    async: !1,
    expects: `>=${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ hn(this.locales, r.value);
        o < this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function um(e, t) {
  return {
    kind: "validation",
    type: "multiple_of",
    reference: um,
    async: !1,
    expects: `%${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value % this.requirement != 0 && B(this, "multiple", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dm(e) {
  return {
    kind: "validation",
    type: "nanoid",
    reference: dm,
    async: !1,
    expects: null,
    requirement: Up,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Nano ID", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cm(e) {
  return {
    kind: "validation",
    type: "non_empty",
    reference: cm,
    async: !1,
    expects: "!0",
    message: e,
    "~run"(t, a) {
      return t.typed && t.value.length === 0 && B(this, "length", t, a, { received: "0" }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fm(e) {
  return {
    kind: "transformation",
    type: "normalize",
    reference: fm,
    async: !1,
    form: e,
    "~run"(t) {
      return t.value = t.value.normalize(this.form), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pm(e, t) {
  return {
    kind: "validation",
    type: "not_bytes",
    reference: pm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ yn(a.value);
        n === this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ym(e, t) {
  return {
    kind: "validation",
    type: "not_entries",
    reference: ym,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (!a.typed) return a;
      const n = Object.keys(a.value).length;
      return a.typed && n === this.requirement && B(this, "entries", a, r, { received: `${n}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mm(e, t) {
  return {
    kind: "validation",
    type: "not_graphemes",
    reference: mm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ mn(a.value);
        n === this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hm(e, t) {
  return {
    kind: "validation",
    type: "not_length",
    reference: hm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.length === this.requirement && B(this, "length", a, r, { received: `${a.value.length}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vm(e, t) {
  return {
    kind: "validation",
    type: "not_size",
    reference: vm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.size === this.requirement && B(this, "size", a, r, { received: `${a.value.size}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gm(e, t) {
  return {
    kind: "validation",
    type: "not_value",
    reference: gm,
    async: !1,
    expects: e instanceof Date ? `!${e.toJSON()}` : `!${/* @__PURE__ */ Re(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && this.requirement <= a.value && this.requirement >= a.value && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bm(e, t) {
  return {
    kind: "validation",
    type: "not_values",
    reference: bm,
    async: !1,
    expects: `!${/* @__PURE__ */ vt(e.map((a) => a instanceof Date ? a.toJSON() : /* @__PURE__ */ Re(a)), "|")}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && this.requirement.some((n) => n <= a.value && n >= a.value) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function km(e, t, a) {
  return {
    kind: "validation",
    type: "not_words",
    reference: km,
    async: !1,
    expects: `!${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ hn(this.locales, r.value);
        o === this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wm(e) {
  return {
    kind: "validation",
    type: "octal",
    reference: wm,
    async: !1,
    expects: null,
    requirement: Lp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "octal", t, a), t;
    }
  };
}
const Ud = [
  !0,
  1,
  "true",
  "1",
  "yes",
  "y",
  "on",
  "enabled"
], Ld = [
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
function xm(e, t) {
  const a = (l) => typeof l == "string" ? l.toLowerCase() : l, r = e?.truthy ?? Ud, n = e?.falsy ?? Ld, o = e?.truthy ? e.truthy.map(a) : Ud, i = e?.falsy ? e.falsy.map(a) : Ld;
  return {
    kind: "transformation",
    type: "parse_boolean",
    reference: xm,
    expects: /* @__PURE__ */ vt([...r, ...n].map(Re), "|"),
    config: e,
    message: t,
    async: !1,
    "~run"(l, s) {
      const d = a(l.value);
      return o.includes(d) ? l.value = !0 : i.includes(d) ? l.value = !1 : (B(this, "boolean", l, s), l.typed = !1), l;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zm(e, t) {
  return {
    kind: "transformation",
    type: "parse_json",
    reference: zm,
    config: e,
    message: t,
    async: !1,
    "~run"(a, r) {
      try {
        a.value = JSON.parse(a.value, this.config?.reviver);
      } catch (n) {
        if (n instanceof Error)
          B(this, "JSON", a, r, { received: `"${n.message}"` }), a.typed = !1;
        else throw n;
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _m(e, t) {
  if (e.issues) for (const a of t) for (const r of e.issues) {
    let n = !1;
    const o = Math.min(a.length, r.path?.length ?? 0);
    for (let i = 0; i < o; i++) if (a[i] !== r.path[i].key && (a[i] !== "$" || r.path[i].type !== "array")) {
      n = !0;
      break;
    }
    if (!n) return !1;
  }
  return !0;
}
// @__NO_SIDE_EFFECTS__
function Sm(e, t, a) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: Sm,
    async: !1,
    expects: null,
    paths: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      return (r.typed || /* @__PURE__ */ _m(r, e)) && !this.requirement(r.value) && B(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qm(e, t, a) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: qm,
    async: !0,
    expects: null,
    paths: e,
    requirement: t,
    message: a,
    async "~run"(r, n) {
      return (r.typed || /* @__PURE__ */ _m(r, e)) && !await this.requirement(r.value) && B(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Om(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: Om,
    async: !1,
    expects: null,
    "~run"(t, a) {
      return e({
        dataset: t,
        config: a,
        addIssue: (r) => B(this, r?.label ?? "input", t, a, r)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Am(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: Am,
    async: !0,
    expects: null,
    async "~run"(t, a) {
      return await e({
        dataset: t,
        config: a,
        addIssue: (r) => B(this, r?.label ?? "input", t, a, r)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cm(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Cm,
    async: !1,
    "~run"(t, a) {
      const r = e({
        dataset: t,
        config: a,
        addIssue: (n) => B(this, n?.label ?? "input", t, a, n),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = r, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Em(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Em,
    async: !0,
    async "~run"(t, a) {
      const r = await e({
        dataset: t,
        config: a,
        addIssue: (n) => B(this, n?.label ?? "input", t, a, n),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = r, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $m() {
  return {
    kind: "transformation",
    type: "readonly",
    reference: $m,
    async: !1,
    "~run"(e) {
      return e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bm(e, t) {
  return {
    kind: "transformation",
    type: "reduce_items",
    reference: Bm,
    async: !1,
    operation: e,
    initial: t,
    "~run"(a) {
      return a.value = a.value.reduce(this.operation, this.initial), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mm(e, t) {
  return {
    kind: "validation",
    type: "regex",
    reference: Mm,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement.test(a.value) && B(this, "format", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dm(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Dm,
    async: !1,
    schema: e,
    "~run"(t, a) {
      const r = t.value;
      return t.value = (...n) => {
        const o = this.schema["~run"]({ value: r(...n) }, a);
        if (o.issues) throw new oa(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pm(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Pm,
    async: !1,
    schema: e,
    "~run"(t, a) {
      const r = t.value;
      return t.value = async (...n) => {
        const o = await this.schema["~run"]({ value: await r(...n) }, a);
        if (o.issues) throw new oa(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jm(e) {
  return {
    kind: "validation",
    type: "rfc_email",
    reference: jm,
    expects: null,
    async: !1,
    requirement: Wp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "email", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Im(e) {
  return {
    kind: "validation",
    type: "safe_integer",
    reference: Im,
    async: !1,
    expects: null,
    requirement: Number.isSafeInteger,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "safe integer", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fm(e, t) {
  return {
    kind: "validation",
    type: "size",
    reference: Fm,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && a.value.size !== this.requirement && B(this, "size", a, r, { received: `${a.value.size}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tm(e) {
  return {
    kind: "validation",
    type: "slug",
    reference: Tm,
    async: !1,
    expects: null,
    requirement: Kp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "slug", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nm(e, t) {
  return {
    kind: "validation",
    type: "some_item",
    reference: Nm,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !a.value.some(this.requirement) && B(this, "item", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vm(e) {
  return {
    kind: "transformation",
    type: "sort_items",
    reference: Vm,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.sort(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rm(e, t) {
  return {
    kind: "validation",
    type: "starts_with",
    reference: Rm,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !a.value.startsWith(this.requirement) && B(this, "start", a, r, { received: `"${a.value.slice(0, this.requirement.length)}"` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Um(e, t) {
  return {
    kind: "transformation",
    type: "stringify_json",
    reference: Um,
    message: t,
    config: e,
    async: !1,
    "~run"(a, r) {
      try {
        const n = JSON.stringify(a.value, this.config?.replacer, this.config?.space);
        n === void 0 && (B(this, "JSON", a, r), a.typed = !1), a.value = n;
      } catch (n) {
        if (n instanceof Error)
          B(this, "JSON", a, r, { received: `"${n.message}"` }), a.typed = !1;
        else throw n;
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lm(e) {
  return {
    kind: "metadata",
    type: "title",
    reference: Lm,
    title: e
  };
}
// @__NO_SIDE_EFFECTS__
function Wm(e) {
  return {
    kind: "transformation",
    type: "to_bigint",
    reference: Wm,
    async: !1,
    message: e,
    "~run"(t, a) {
      try {
        t.value = BigInt(t.value);
      } catch {
        B(this, "bigint", t, a), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Km() {
  return {
    kind: "transformation",
    type: "to_boolean",
    reference: Km,
    async: !1,
    "~run"(e) {
      return e.value = !!e.value, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gm(e) {
  return {
    kind: "transformation",
    type: "to_date",
    reference: Gm,
    async: !1,
    message: e,
    "~run"(t, a) {
      try {
        t.value = new Date(t.value), isNaN(t.value) && (B(this, "date", t, a, { received: '"Invalid Date"' }), t.typed = !1);
      } catch {
        B(this, "date", t, a), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hm() {
  return {
    kind: "transformation",
    type: "to_lower_case",
    reference: Hm,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toLowerCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ym(e) {
  return {
    kind: "transformation",
    type: "to_max_value",
    reference: Ym,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value > this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zm(e) {
  return {
    kind: "transformation",
    type: "to_min_value",
    reference: Zm,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value < this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qm(e) {
  return {
    kind: "transformation",
    type: "to_number",
    reference: Qm,
    async: !1,
    message: e,
    "~run"(t, a) {
      try {
        t.value = Number(t.value), isNaN(t.value) && (B(this, "number", t, a), t.typed = !1);
      } catch {
        B(this, "number", t, a), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jm(e) {
  return {
    kind: "transformation",
    type: "to_string",
    reference: Jm,
    async: !1,
    message: e,
    "~run"(t, a) {
      try {
        t.value = String(t.value);
      } catch {
        B(this, "string", t, a), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xm() {
  return {
    kind: "transformation",
    type: "to_upper_case",
    reference: Xm,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toUpperCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: ht,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: eh,
    async: !0,
    operation: e,
    async "~run"(t) {
      return t.value = await this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function th() {
  return {
    kind: "transformation",
    type: "trim",
    reference: th,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trim(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ah() {
  return {
    kind: "transformation",
    type: "trim_end",
    reference: ah,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimEnd(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rh() {
  return {
    kind: "transformation",
    type: "trim_start",
    reference: rh,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimStart(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nh(e) {
  return {
    kind: "validation",
    type: "ulid",
    reference: nh,
    async: !1,
    expects: null,
    requirement: Gp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "ULID", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oh(e) {
  return {
    kind: "validation",
    type: "url",
    reference: oh,
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
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "URL", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ih(e) {
  return {
    kind: "validation",
    type: "uuid",
    reference: ih,
    async: !1,
    expects: null,
    requirement: Hp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "UUID", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lh(e, t) {
  return {
    kind: "validation",
    type: "value",
    reference: lh,
    async: !1,
    expects: e instanceof Date ? e.toJSON() : /* @__PURE__ */ Re(e),
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(this.requirement <= a.value && this.requirement >= a.value) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sh(e, t) {
  return {
    kind: "validation",
    type: "values",
    reference: sh,
    async: !1,
    expects: `${/* @__PURE__ */ vt(e.map((a) => a instanceof Date ? a.toJSON() : /* @__PURE__ */ Re(a)), "|")}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement.some((n) => n <= a.value && n >= a.value) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Re(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uh(e, t, a) {
  return {
    kind: "validation",
    type: "words",
    reference: uh,
    async: !1,
    expects: `${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ hn(this.locales, r.value);
        o !== this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
function Pw(e, t) {
  const a = e["~run"]({ value: t }, { abortEarly: !0 }).issues;
  if (a) throw new oa(a);
}
var dh = class {
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
  #e(e) {
    const t = typeof e;
    if (t === "string") return `"${e}"`;
    if (t === "number" || t === "boolean") return `${e}`;
    if (t === "bigint") return `${e}n`;
    if (t === "object" || t === "function") {
      if (e) {
        this.refIds ??= /* @__PURE__ */ new WeakMap();
        let a = this.refIds.get(e);
        return a || (a = ++this.refCount, this.refIds.set(e, a)), `#${a}`;
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
    return `${this.#e(e)}|${this.#e(t.lang)}|${this.#e(t.message)}|${this.#e(t.abortEarly)}|${this.#e(t.abortPipeEarly)}`;
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
    this.store ??= /* @__PURE__ */ new Map(), this.store.delete(e);
    const a = this.hasMaxAge ? Date.now() : 0;
    this.store.set(e, [t, a]), this.store.size > this.maxSize && this.store.delete(this.store.keys().next().value);
  }
  /**
  * Clears all entries from the cache.
  */
  clear() {
    this.store?.clear();
  }
};
// @__NO_SIDE_EFFECTS__
function jw(e, t) {
  return {
    ...e,
    cacheConfig: t,
    cache: new dh(t),
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = this.cache.key(a.value, r);
      let o = this.cache.get(n);
      return o || this.cache.set(n, o = e["~run"](a, r)), /* @__PURE__ */ Zn(o);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Iw(e, t) {
  let a;
  return {
    ...e,
    async: !0,
    cacheConfig: t,
    cache: new dh(t),
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(r, n) {
      const o = this.cache.key(r.value, n), i = this.cache.get(o);
      if (i) return /* @__PURE__ */ Zn(i);
      let l = a?.get(o);
      l || (a ??= /* @__PURE__ */ new Map(), l = Promise.resolve(e["~run"](r, n)), a.set(o, l));
      try {
        const s = await l;
        return this.cache.set(o, s), /* @__PURE__ */ Zn(s);
      } finally {
        a?.delete(o);
      }
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fw(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return e["~run"](a, {
        ...r,
        ...t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gt(e, t, a) {
  return typeof e.fallback == "function" ? e.fallback(t, a) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function Tw(e, t) {
  return {
    ...e,
    fallback: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = e["~run"](a, r);
      return n.issues ? {
        typed: !0,
        value: /* @__PURE__ */ gt(this, n, r)
      } : n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nw(e, t) {
  return {
    ...e,
    fallback: t,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = await e["~run"](a, r);
      return n.issues ? {
        typed: !0,
        value: await /* @__PURE__ */ gt(this, n, r)
      } : n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  const t = {};
  for (const a of e) if (a.path) {
    const r = /* @__PURE__ */ zo(a);
    r ? (t.nested || (t.nested = {}), t.nested[r] ? t.nested[r].push(a.message) : t.nested[r] = [a.message]) : t.other ? t.other.push(a.message) : t.other = [a.message];
  } else t.root ? t.root.push(a.message) : t.root = [a.message];
  return t;
}
// @__NO_SIDE_EFFECTS__
function Vw(e, t) {
  return {
    ...e,
    "~run"(a, r) {
      const n = a.issues && [...a.issues];
      if (a = e["~run"](a, r), a.issues) {
        for (const o of a.issues) if (!n?.includes(o)) {
          let i = a.value;
          for (const l of t) {
            const s = i[l], d = {
              type: "unknown",
              origin: "value",
              input: i,
              key: l,
              value: s
            };
            if (o.path ? o.path.push(d) : o.path = [d], !s) break;
            i = s;
          }
        }
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rw(e, t) {
  return {
    ...e,
    async: !0,
    async "~run"(a, r) {
      const n = a.issues && [...a.issues];
      if (a = await e["~run"](a, r), a.issues) {
        for (const o of a.issues) if (!n?.includes(o)) {
          let i = a.value;
          for (const l of t) {
            const s = i[l], d = {
              type: "unknown",
              origin: "value",
              input: i,
              key: l,
              value: s
            };
            if (o.path ? o.path.push(d) : o.path = [d], !s) break;
            i = s;
          }
        }
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ze(e, t, a) {
  return typeof e.default == "function" ? e.default(t, a) : e.default;
}
// @__NO_SIDE_EFFECTS__
function bl(e) {
  if ("entries" in e) {
    const t = {};
    for (const a in e.entries) t[a] = /* @__PURE__ */ bl(e.entries[a]);
    return t;
  }
  return "items" in e ? e.items.map(bl) : /* @__PURE__ */ Ze(e);
}
// @__NO_SIDE_EFFECTS__
async function kl(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, a]) => [t, await /* @__PURE__ */ kl(a)]))) : "items" in e ? Promise.all(e.items.map(kl)) : /* @__PURE__ */ Ze(e);
}
// @__NO_SIDE_EFFECTS__
function Uw(e) {
  return /* @__PURE__ */ xo(e, "description");
}
// @__NO_SIDE_EFFECTS__
function Lw(e) {
  const t = [];
  function a(r) {
    if ("pipe" in r)
      for (const n of r.pipe) n.kind === "schema" && "pipe" in n ? a(n) : n.kind === "metadata" && n.type === "examples" && t.push(...n.examples);
  }
  return a(e), t;
}
// @__NO_SIDE_EFFECTS__
function wl(e) {
  if ("entries" in e) {
    const t = {};
    for (const a in e.entries) t[a] = /* @__PURE__ */ wl(e.entries[a]);
    return t;
  }
  return "items" in e ? e.items.map(wl) : /* @__PURE__ */ gt(e);
}
// @__NO_SIDE_EFFECTS__
async function xl(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, a]) => [t, await /* @__PURE__ */ xl(a)]))) : "items" in e ? Promise.all(e.items.map(xl)) : /* @__PURE__ */ gt(e);
}
// @__NO_SIDE_EFFECTS__
function Ww(e) {
  const t = {};
  function a(r) {
    if ("pipe" in r)
      for (const n of r.pipe) n.kind === "schema" && "pipe" in n ? a(n) : n.kind === "metadata" && n.type === "metadata" && Object.assign(t, n.metadata);
  }
  return a(e), t;
}
// @__NO_SIDE_EFFECTS__
function Kw(e) {
  return /* @__PURE__ */ xo(e, "title");
}
// @__NO_SIDE_EFFECTS__
function Gw(e, t) {
  return !e["~run"]({ value: t }, { abortEarly: !0 }).issues;
}
// @__NO_SIDE_EFFECTS__
function vn() {
  return {
    kind: "schema",
    type: "any",
    reference: vn,
    expects: "any",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hr(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: hr,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < n.length; o++) {
          const i = n[o], l = this.item["~run"]({ value: i }, r);
          if (l.issues) {
            const s = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(s) : d.path = [s], a.issues?.push(d);
            if (a.issues || (a.issues = l.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.push(l.value);
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ch(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: ch,
    expects: "Array",
    async: !0,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(n.map((i) => this.item["~run"]({ value: i }, r)));
        for (let i = 0; i < o.length; i++) {
          const l = o[i];
          if (l.issues) {
            const s = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: n[i]
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(s) : d.path = [s], a.issues?.push(d);
            if (a.issues || (a.issues = l.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.push(l.value);
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fh(e) {
  return {
    kind: "schema",
    type: "bigint",
    reference: fh,
    expects: "bigint",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return typeof t.value == "bigint" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ph(e) {
  return {
    kind: "schema",
    type: "blob",
    reference: ph,
    expects: "Blob",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return t.value instanceof Blob ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fs(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: fs,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return typeof t.value == "boolean" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yh(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: yh,
    expects: "unknown",
    async: !1,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return this.check(a.value) ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mh(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: mh,
    expects: "unknown",
    async: !0,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return await this.check(a.value) ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return {
    kind: "schema",
    type: "date",
    reference: _o,
    expects: "Date",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return t.value instanceof Date ? isNaN(t.value) ? B(this, "type", t, a, { received: '"Invalid Date"' }) : t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zl(e, t) {
  const a = [];
  for (const r in e) (`${+r}` !== r || typeof e[r] != "string" || !Object.is(e[e[r]], +r)) && a.push(e[r]);
  return {
    kind: "schema",
    type: "enum",
    reference: zl,
    expects: /* @__PURE__ */ vt(a.map(Re), "|"),
    async: !1,
    enum: e,
    options: a,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(r, n) {
      return this.options.includes(r.value) ? r.typed = !0 : B(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hh(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: hh,
    expects: e.expects,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vh(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: vh,
    expects: e.expects,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gh(e) {
  return {
    kind: "schema",
    type: "file",
    reference: gh,
    expects: "File",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return t.value instanceof File ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _l(e) {
  return {
    kind: "schema",
    type: "function",
    reference: _l,
    expects: "Function",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return typeof t.value == "function" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bh(e, t) {
  return {
    kind: "schema",
    type: "instance",
    reference: bh,
    expects: e.name,
    async: !1,
    class: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value instanceof this.class ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qn(e, t) {
  if (typeof e == typeof t) {
    if (e === t || e instanceof Date && t instanceof Date && +e == +t) return { value: e };
    if (e && t && e.constructor === Object && t.constructor === Object) {
      for (const a in t) if (a in e) {
        const r = /* @__PURE__ */ Qn(e[a], t[a]);
        if (r.issue) return r;
        e[a] = r.value;
      } else e[a] = t[a];
      return { value: e };
    }
    if (Array.isArray(e) && Array.isArray(t) && e.length === t.length) {
      for (let a = 0; a < e.length; a++) {
        const r = /* @__PURE__ */ Qn(e[a], t[a]);
        if (r.issue) return r;
        e[a] = r.value;
      }
      return { value: e };
    }
  }
  return { issue: !0 };
}
// @__NO_SIDE_EFFECTS__
function kh(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: kh,
    expects: /* @__PURE__ */ vt(e.map((a) => a.expects), "&"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      if (this.options.length) {
        const n = a.value;
        let o;
        a.typed = !0;
        for (const i of this.options) {
          const l = i["~run"]({ value: n }, r);
          if (l.issues && (a.issues ? a.issues.push(...l.issues) : a.issues = l.issues, r.abortEarly)) {
            a.typed = !1;
            break;
          }
          l.typed || (a.typed = !1), a.typed && (o ? o.push(l.value) : o = [l.value]);
        }
        if (a.typed) {
          a.value = o[0];
          for (let i = 1; i < o.length; i++) {
            const l = /* @__PURE__ */ Qn(a.value, o[i]);
            if (l.issue) {
              B(this, "type", a, r, { received: "unknown" });
              break;
            }
            a.value = l.value;
          }
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wh(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: wh,
    expects: /* @__PURE__ */ vt(e.map((a) => a.expects), "&"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      if (this.options.length) {
        const n = a.value;
        let o;
        a.typed = !0;
        const i = await Promise.all(this.options.map((l) => l["~run"]({ value: n }, r)));
        for (const l of i) {
          if (l.issues && (a.issues ? a.issues.push(...l.issues) : a.issues = l.issues, r.abortEarly)) {
            a.typed = !1;
            break;
          }
          l.typed || (a.typed = !1), a.typed && (o ? o.push(l.value) : o = [l.value]);
        }
        if (a.typed) {
          a.value = o[0];
          for (let l = 1; l < o.length; l++) {
            const s = /* @__PURE__ */ Qn(a.value, o[l]);
            if (s.issue) {
              B(this, "type", a, r, { received: "unknown" });
              break;
            }
            a.value = s.value;
          }
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xh(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: xh,
    expects: "unknown",
    async: !1,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return this.getter(t.value)["~run"](t, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zh(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: zh,
    expects: "unknown",
    async: !0,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(t, a) {
      return (await this.getter(t.value))["~run"](t, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jn(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: Jn,
    expects: /* @__PURE__ */ Re(e),
    async: !1,
    literal: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value === this.literal ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _h(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: _h,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const l = o in n ? n[o] : /* @__PURE__ */ Ze(i), s = i["~run"]({ value: l }, r);
            if (s.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: l
              };
              for (const c of s.issues)
                c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
              if (a.issues || (a.issues = s.issues), r.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            s.typed || (a.typed = !1), a.value[o] = s.value;
          } else if (i.fallback !== void 0) a.value[o] = /* @__PURE__ */ gt(i);
          else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (B(this, "key", a, r, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: o,
              value: n[o]
            }]
          }), r.abortEarly))
            break;
        }
        if (!a.issues || !r.abortEarly)
          for (const o in n) /* @__PURE__ */ La(n, o) && !(o in this.entries) && (a.value[o] = n[o]);
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sh(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: Sh,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, l]) => {
          if (i in n || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const s = i in n ? n[i] : await /* @__PURE__ */ Ze(l);
            return [
              i,
              s,
              l,
              await l["~run"]({ value: s }, r)
            ];
          }
          return [
            i,
            n[i],
            l,
            null
          ];
        }));
        for (const [i, l, s, d] of o) if (d) {
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], a.issues?.push(f);
            if (a.issues || (a.issues = d.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          d.typed || (a.typed = !1), a.value[i] = d.value;
        } else if (s.fallback !== void 0) a.value[i] = await /* @__PURE__ */ gt(s);
        else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (B(this, "key", a, r, {
          input: void 0,
          expected: `"${i}"`,
          path: [{
            type: "object",
            origin: "key",
            input: n,
            key: i,
            value: l
          }]
        }), r.abortEarly))
          break;
        if (!a.issues || !r.abortEarly)
          for (const i in n) /* @__PURE__ */ La(n, i) && !(i in this.entries) && (a.value[i] = n[i]);
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qh(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: qh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], l = this.items[o]["~run"]({ value: i }, r);
          if (l.issues) {
            const s = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(s) : d.path = [s], a.issues?.push(d);
            if (a.issues || (a.issues = l.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.push(l.value);
        }
        if (!a.issues || !r.abortEarly) for (let o = this.items.length; o < n.length; o++) a.value.push(n[o]);
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oh(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: Oh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(this.items.map(async (i, l) => {
          const s = n[l];
          return [
            l,
            s,
            await i["~run"]({ value: s }, r)
          ];
        }));
        for (const [i, l, s] of o) {
          if (s.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const c of s.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = s.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          s.typed || (a.typed = !1), a.value.push(s.value);
        }
        if (!a.issues || !r.abortEarly) for (let i = this.items.length; i < n.length; i++) a.value.push(n[i]);
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ah(e, t, a) {
  return {
    kind: "schema",
    type: "map",
    reference: Ah,
    expects: "Map",
    async: !1,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o instanceof Map) {
        r.typed = !0, r.value = /* @__PURE__ */ new Map();
        for (const [i, l] of o) {
          const s = this.key["~run"]({ value: i }, n);
          if (s.issues) {
            const c = {
              type: "map",
              origin: "key",
              input: o,
              key: i,
              value: l
            };
            for (const f of s.issues)
              f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          const d = this.value["~run"]({ value: l }, n);
          if (d.issues) {
            const c = {
              type: "map",
              origin: "value",
              input: o,
              key: i,
              value: l
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = d.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          (!s.typed || !d.typed) && (r.typed = !1), r.value.set(s.value, d.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ch(e, t, a) {
  return {
    kind: "schema",
    type: "map",
    reference: Ch,
    expects: "Map",
    async: !0,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o instanceof Map) {
        r.typed = !0, r.value = /* @__PURE__ */ new Map();
        const i = await Promise.all([...o].map(([l, s]) => Promise.all([
          l,
          s,
          this.key["~run"]({ value: l }, n),
          this.value["~run"]({ value: s }, n)
        ])));
        for (const [l, s, d, c] of i) {
          if (d.issues) {
            const f = {
              type: "map",
              origin: "key",
              input: o,
              key: l,
              value: s
            };
            for (const y of d.issues)
              y.path ? y.path.unshift(f) : y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = d.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "map",
              origin: "value",
              input: o,
              key: l,
              value: s
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = c.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          (!d.typed || !c.typed) && (r.typed = !1), r.value.set(d.value, c.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Eh(e) {
  return {
    kind: "schema",
    type: "nan",
    reference: Eh,
    expects: "NaN",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return Number.isNaN(t.value) ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $h(e) {
  return {
    kind: "schema",
    type: "never",
    reference: $h,
    expects: "never",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bh(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: Bh,
    expects: "!null",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value !== null && (a = this.wrapped["~run"](a, r)), a.value === null && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mh(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: Mh,
    expects: "!null",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return a.value !== null && (a = await this.wrapped["~run"](a, r)), a.value === null && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dh(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Dh,
    expects: "(!null & !undefined)",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value === null || a.value === void 0 || (a = this.wrapped["~run"](a, r)), (a.value === null || a.value === void 0) && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ph(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Ph,
    expects: "(!null & !undefined)",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return a.value === null || a.value === void 0 || (a = await this.wrapped["~run"](a, r)), (a.value === null || a.value === void 0) && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ps(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: ps,
    expects: "!undefined",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value !== void 0 && (a = this.wrapped["~run"](a, r)), a.value === void 0 && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ys(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: ys,
    expects: "!undefined",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return a.value !== void 0 && (a = await this.wrapped["~run"](a, r)), a.value === void 0 && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sl(e) {
  return {
    kind: "schema",
    type: "null",
    reference: Sl,
    expects: "null",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return t.value === null ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jh(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: jh,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value === null && (this.default !== void 0 && (a.value = /* @__PURE__ */ Ze(this, a, r)), a.value === null) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ih(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Ih,
    expects: `(${e.expects} | null)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return a.value === null && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Ze(this, a, r)), a.value === null) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xn(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: Xn,
    expects: `(${e.expects} | null | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return (a.value === null || a.value === void 0) && (this.default !== void 0 && (a.value = /* @__PURE__ */ Ze(this, a, r)), a.value === null || a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fh(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: Fh,
    expects: `(${e.expects} | null | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return (a.value === null || a.value === void 0) && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Ze(this, a, r)), a.value === null || a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function So(e) {
  return {
    kind: "schema",
    type: "number",
    reference: So,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ms(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: ms,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const l = o in n ? n[o] : /* @__PURE__ */ Ze(i), s = i["~run"]({ value: l }, r);
            if (s.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: l
              };
              for (const c of s.issues)
                c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
              if (a.issues || (a.issues = s.issues), r.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            s.typed || (a.typed = !1), a.value[o] = s.value;
          } else if (i.fallback !== void 0) a.value[o] = /* @__PURE__ */ gt(i);
          else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (B(this, "key", a, r, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: o,
              value: n[o]
            }]
          }), r.abortEarly))
            break;
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Th(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: Th,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, l]) => {
          if (i in n || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const s = i in n ? n[i] : await /* @__PURE__ */ Ze(l);
            return [
              i,
              s,
              l,
              await l["~run"]({ value: s }, r)
            ];
          }
          return [
            i,
            n[i],
            l,
            null
          ];
        }));
        for (const [i, l, s, d] of o) if (d) {
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], a.issues?.push(f);
            if (a.issues || (a.issues = d.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          d.typed || (a.typed = !1), a.value[i] = d.value;
        } else if (s.fallback !== void 0) a.value[i] = await /* @__PURE__ */ gt(s);
        else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (B(this, "key", a, r, {
          input: void 0,
          expected: `"${i}"`,
          path: [{
            type: "object",
            origin: "key",
            input: n,
            key: i,
            value: l
          }]
        }), r.abortEarly))
          break;
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nh(e, t, a) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Nh,
    expects: "Object",
    async: !1,
    entries: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        for (const i in this.entries) {
          const l = this.entries[i];
          if (i in o || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const s = i in o ? o[i] : /* @__PURE__ */ Ze(l), d = l["~run"]({ value: s }, n);
            if (d.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: o,
                key: i,
                value: s
              };
              for (const f of d.issues)
                f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
              if (r.issues || (r.issues = d.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            d.typed || (r.typed = !1), r.value[i] = d.value;
          } else if (l.fallback !== void 0) r.value[i] = /* @__PURE__ */ gt(l);
          else if (l.type !== "exact_optional" && l.type !== "optional" && l.type !== "nullish" && (B(this, "key", r, n, {
            input: void 0,
            expected: `"${i}"`,
            path: [{
              type: "object",
              origin: "key",
              input: o,
              key: i,
              value: o[i]
            }]
          }), n.abortEarly))
            break;
        }
        if (!r.issues || !n.abortEarly) {
          for (const i in o) if (/* @__PURE__ */ La(o, i) && !(i in this.entries)) {
            const l = this.rest["~run"]({ value: o[i] }, n);
            if (l.issues) {
              const s = {
                type: "object",
                origin: "value",
                input: o,
                key: i,
                value: o[i]
              };
              for (const d of l.issues)
                d.path ? d.path.unshift(s) : d.path = [s], r.issues?.push(d);
              if (r.issues || (r.issues = l.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            l.typed || (r.typed = !1), r.value[i] = l.value;
          }
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vh(e, t, a) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Vh,
    expects: "Object",
    async: !0,
    entries: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        const [i, l] = await Promise.all([Promise.all(Object.entries(this.entries).map(async ([s, d]) => {
          if (s in o || (d.type === "exact_optional" || d.type === "optional" || d.type === "nullish") && d.default !== void 0) {
            const c = s in o ? o[s] : await /* @__PURE__ */ Ze(d);
            return [
              s,
              c,
              d,
              await d["~run"]({ value: c }, n)
            ];
          }
          return [
            s,
            o[s],
            d,
            null
          ];
        })), Promise.all(Object.entries(o).filter(([s]) => /* @__PURE__ */ La(o, s) && !(s in this.entries)).map(async ([s, d]) => [
          s,
          d,
          await this.rest["~run"]({ value: d }, n)
        ]))]);
        for (const [s, d, c, f] of i) if (f) {
          if (f.issues) {
            const y = {
              type: "object",
              origin: "value",
              input: o,
              key: s,
              value: d
            };
            for (const p of f.issues)
              p.path ? p.path.unshift(y) : p.path = [y], r.issues?.push(p);
            if (r.issues || (r.issues = f.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          f.typed || (r.typed = !1), r.value[s] = f.value;
        } else if (c.fallback !== void 0) r.value[s] = await /* @__PURE__ */ gt(c);
        else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (B(this, "key", r, n, {
          input: void 0,
          expected: `"${s}"`,
          path: [{
            type: "object",
            origin: "key",
            input: o,
            key: s,
            value: d
          }]
        }), n.abortEarly))
          break;
        if (!r.issues || !n.abortEarly) for (const [s, d, c] of l) {
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: o,
              key: s,
              value: d
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = c.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          c.typed || (r.typed = !1), r.value[s] = c.value;
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vr(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: vr,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = /* @__PURE__ */ Ze(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hs(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: hs,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Ze(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qo(e, t) {
  return {
    kind: "schema",
    type: "picklist",
    reference: qo,
    expects: /* @__PURE__ */ vt(e.map(Re), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return this.options.includes(a.value) ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rh(e) {
  return {
    kind: "schema",
    type: "promise",
    reference: Rh,
    expects: "Promise",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return t.value instanceof Promise ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vs(e, t, a) {
  return {
    kind: "schema",
    type: "record",
    reference: vs,
    expects: "Object",
    async: !1,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        for (const i in o) if (/* @__PURE__ */ La(o, i)) {
          const l = o[i], s = this.key["~run"]({ value: i }, n);
          if (s.issues) {
            const c = {
              type: "object",
              origin: "key",
              input: o,
              key: i,
              value: l
            };
            for (const f of s.issues)
              f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          const d = this.value["~run"]({ value: l }, n);
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: o,
              key: i,
              value: l
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = d.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          (!s.typed || !d.typed) && (r.typed = !1), s.typed && (r.value[s.value] = d.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uh(e, t, a) {
  return {
    kind: "schema",
    type: "record",
    reference: Uh,
    expects: "Object",
    async: !0,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        const i = await Promise.all(Object.entries(o).filter(([l]) => /* @__PURE__ */ La(o, l)).map(([l, s]) => Promise.all([
          l,
          s,
          this.key["~run"]({ value: l }, n),
          this.value["~run"]({ value: s }, n)
        ])));
        for (const [l, s, d, c] of i) {
          if (d.issues) {
            const f = {
              type: "object",
              origin: "key",
              input: o,
              key: l,
              value: s
            };
            for (const y of d.issues)
              y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = d.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: o,
              key: l,
              value: s
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = c.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          (!d.typed || !c.typed) && (r.typed = !1), d.typed && (r.value[d.value] = c.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lh(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Lh,
    expects: "Set",
    async: !1,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (n instanceof Set) {
        a.typed = !0, a.value = /* @__PURE__ */ new Set();
        for (const o of n) {
          const i = this.value["~run"]({ value: o }, r);
          if (i.issues) {
            const l = {
              type: "set",
              origin: "value",
              input: n,
              key: null,
              value: o
            };
            for (const s of i.issues)
              s.path ? s.path.unshift(l) : s.path = [l], a.issues?.push(s);
            if (a.issues || (a.issues = i.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          i.typed || (a.typed = !1), a.value.add(i.value);
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wh(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Wh,
    expects: "Set",
    async: !0,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n instanceof Set) {
        a.typed = !0, a.value = /* @__PURE__ */ new Set();
        const o = await Promise.all([...n].map(async (i) => [i, await this.value["~run"]({ value: i }, r)]));
        for (const [i, l] of o) {
          if (l.issues) {
            const s = {
              type: "set",
              origin: "value",
              input: n,
              key: null,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(s) : d.path = [s], a.issues?.push(d);
            if (a.issues || (a.issues = l.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.add(l.value);
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kh(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Kh,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const l = o in n ? n[o] : /* @__PURE__ */ Ze(i), s = i["~run"]({ value: l }, r);
            if (s.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: l
              };
              for (const c of s.issues)
                c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
              if (a.issues || (a.issues = s.issues), r.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            s.typed || (a.typed = !1), a.value[o] = s.value;
          } else if (i.fallback !== void 0) a.value[o] = /* @__PURE__ */ gt(i);
          else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (B(this, "key", a, r, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: o,
              value: n[o]
            }]
          }), r.abortEarly))
            break;
        }
        if (!a.issues || !r.abortEarly) {
          for (const o in n) if (!(o in this.entries)) {
            B(this, "key", a, r, {
              input: o,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: n,
                key: o,
                value: n[o]
              }]
            });
            break;
          }
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gh(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Gh,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, l]) => {
          if (i in n || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const s = i in n ? n[i] : await /* @__PURE__ */ Ze(l);
            return [
              i,
              s,
              l,
              await l["~run"]({ value: s }, r)
            ];
          }
          return [
            i,
            n[i],
            l,
            null
          ];
        }));
        for (const [i, l, s, d] of o) if (d) {
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], a.issues?.push(f);
            if (a.issues || (a.issues = d.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          d.typed || (a.typed = !1), a.value[i] = d.value;
        } else if (s.fallback !== void 0) a.value[i] = await /* @__PURE__ */ gt(s);
        else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (B(this, "key", a, r, {
          input: void 0,
          expected: `"${i}"`,
          path: [{
            type: "object",
            origin: "key",
            input: n,
            key: i,
            value: l
          }]
        }), r.abortEarly))
          break;
        if (!a.issues || !r.abortEarly) {
          for (const i in n) if (!(i in this.entries)) {
            B(this, "key", a, r, {
              input: i,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: n,
                key: i,
                value: n[i]
              }]
            });
            break;
          }
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Hh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], l = this.items[o]["~run"]({ value: i }, r);
          if (l.issues) {
            const s = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(s) : d.path = [s], a.issues?.push(d);
            if (a.issues || (a.issues = l.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.push(l.value);
        }
        !(a.issues && r.abortEarly) && this.items.length < n.length && B(this, "type", a, r, {
          input: n[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: n,
            key: this.items.length,
            value: n[this.items.length]
          }]
        });
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Yh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(this.items.map(async (i, l) => {
          const s = n[l];
          return [
            l,
            s,
            await i["~run"]({ value: s }, r)
          ];
        }));
        for (const [i, l, s] of o) {
          if (s.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const c of s.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = s.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          s.typed || (a.typed = !1), a.value.push(s.value);
        }
        !(a.issues && r.abortEarly) && this.items.length < n.length && B(this, "type", a, r, {
          input: n[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: n,
            key: this.items.length,
            value: n[this.items.length]
          }]
        });
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return {
    kind: "schema",
    type: "string",
    reference: zt,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return typeof t.value == "string" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zh(e) {
  return {
    kind: "schema",
    type: "symbol",
    reference: Zh,
    expects: "symbol",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return typeof t.value == "symbol" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qh(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: Qh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], l = this.items[o]["~run"]({ value: i }, r);
          if (l.issues) {
            const s = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(s) : d.path = [s], a.issues?.push(d);
            if (a.issues || (a.issues = l.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.push(l.value);
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jh(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: Jh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(this.items.map(async (i, l) => {
          const s = n[l];
          return [
            l,
            s,
            await i["~run"]({ value: s }, r)
          ];
        }));
        for (const [i, l, s] of o) {
          if (s.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const c of s.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = s.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          s.typed || (a.typed = !1), a.value.push(s.value);
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xh(e, t, a) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: Xh,
    expects: "Array",
    async: !1,
    items: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (Array.isArray(o)) {
        r.typed = !0, r.value = [];
        for (let i = 0; i < this.items.length; i++) {
          const l = o[i], s = this.items[i]["~run"]({ value: l }, n);
          if (s.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: o,
              key: i,
              value: l
            };
            for (const c of s.issues)
              c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
        if (!r.issues || !n.abortEarly) for (let i = this.items.length; i < o.length; i++) {
          const l = o[i], s = this.rest["~run"]({ value: l }, n);
          if (s.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: o,
              key: i,
              value: l
            };
            for (const c of s.issues)
              c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ev(e, t, a) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: ev,
    expects: "Array",
    async: !0,
    items: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (Array.isArray(o)) {
        r.typed = !0, r.value = [];
        const [i, l] = await Promise.all([Promise.all(this.items.map(async (s, d) => {
          const c = o[d];
          return [
            d,
            c,
            await s["~run"]({ value: c }, n)
          ];
        })), Promise.all(o.slice(this.items.length).map(async (s, d) => [
          d + this.items.length,
          s,
          await this.rest["~run"]({ value: s }, n)
        ]))]);
        for (const [s, d, c] of i) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: o,
              key: s,
              value: d
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = c.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          c.typed || (r.typed = !1), r.value.push(c.value);
        }
        if (!r.issues || !n.abortEarly) for (const [s, d, c] of l) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: o,
              key: s,
              value: d
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = c.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          c.typed || (r.typed = !1), r.value.push(c.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return {
    kind: "schema",
    type: "undefined",
    reference: ql,
    expects: "undefined",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return t.value === void 0 ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tv(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: tv,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = /* @__PURE__ */ Ze(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function av(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: av,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Ze(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eo(e) {
  let t;
  if (e) for (const a of e) t ? t.push(...a.issues) : t = a.issues;
  return t;
}
// @__NO_SIDE_EFFECTS__
function Ht(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: Ht,
    expects: /* @__PURE__ */ vt(e.map((a) => a.expects), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      let n, o, i;
      for (const l of this.options) {
        const s = l["~run"]({ value: a.value }, r);
        if (s.typed) if (s.issues) o ? o.push(s) : o = [s];
        else {
          n = s;
          break;
        }
        else i ? i.push(s) : i = [s];
      }
      if (n) return n;
      if (o) {
        if (o.length === 1) return o[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ eo(o) }), a.typed = !0;
      } else {
        if (i?.length === 1) return i[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ eo(i) });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rv(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: rv,
    expects: /* @__PURE__ */ vt(e.map((a) => a.expects), "|"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(a, r) {
      let n, o, i;
      for (const l of this.options) {
        const s = await l["~run"]({ value: a.value }, r);
        if (s.typed) if (s.issues) o ? o.push(s) : o = [s];
        else {
          n = s;
          break;
        }
        else i ? i.push(s) : i = [s];
      }
      if (n) return n;
      if (o) {
        if (o.length === 1) return o[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ eo(o) }), a.typed = !0;
      } else {
        if (i?.length === 1) return i[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ eo(i) });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nv() {
  return {
    kind: "schema",
    type: "unknown",
    reference: nv,
    expects: "unknown",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ov(e, t, a) {
  return {
    kind: "schema",
    type: "variant",
    reference: ov,
    expects: "Object",
    async: !1,
    key: e,
    options: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        let i, l = 0, s = this.key, d = [];
        const c = (f, y) => {
          for (const p of f.options) {
            if (p.type === "variant") c(p, new Set(y).add(p.key));
            else {
              let g = !0, h = 0;
              for (const k of y) {
                const w = p.entries[k];
                if (k in o ? w["~run"]({
                  typed: !1,
                  value: o[k]
                }, { abortEarly: !0 }).issues : w.type !== "exact_optional" && w.type !== "optional" && w.type !== "nullish") {
                  g = !1, s !== k && (l < h || l === h && k in o && !(s in o)) && (l = h, s = k, d = []), s === k && d.push(p.entries[k].expects);
                  break;
                }
                h++;
              }
              if (g) {
                const k = p["~run"]({ value: o }, n);
                (!i || !i.typed && k.typed) && (i = k);
              }
            }
            if (i && !i.issues) break;
          }
        };
        if (c(this, /* @__PURE__ */ new Set([this.key])), i) return i;
        B(this, "type", r, n, {
          input: o[s],
          expected: /* @__PURE__ */ vt(d, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: s,
            value: o[s]
          }]
        });
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iv(e, t, a) {
  return {
    kind: "schema",
    type: "variant",
    reference: iv,
    expects: "Object",
    async: !0,
    key: e,
    options: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        let i, l = 0, s = this.key, d = [];
        const c = async (f, y) => {
          for (const p of f.options) {
            if (p.type === "variant") await c(p, new Set(y).add(p.key));
            else {
              let g = !0, h = 0;
              for (const k of y) {
                const w = p.entries[k];
                if (k in o ? (await w["~run"]({
                  typed: !1,
                  value: o[k]
                }, { abortEarly: !0 })).issues : w.type !== "exact_optional" && w.type !== "optional" && w.type !== "nullish") {
                  g = !1, s !== k && (l < h || l === h && k in o && !(s in o)) && (l = h, s = k, d = []), s === k && d.push(p.entries[k].expects);
                  break;
                }
                h++;
              }
              if (g) {
                const k = await p["~run"]({ value: o }, n);
                (!i || !i.typed && k.typed) && (i = k);
              }
            }
            if (i && !i.issues) break;
          }
        };
        if (await c(this, /* @__PURE__ */ new Set([this.key])), i) return i;
        B(this, "type", r, n, {
          input: o[s],
          expected: /* @__PURE__ */ vt(d, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: s,
            value: o[s]
          }]
        });
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ol(e) {
  return {
    kind: "schema",
    type: "void",
    reference: Ol,
    expects: "void",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      return t.value === void 0 ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hw(e, t) {
  return /* @__PURE__ */ qo(Object.keys(e.entries), t);
}
// @__NO_SIDE_EFFECTS__
function Yw(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(a, r) {
      return e["~run"](a, {
        ...r,
        message: t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zw(e, t) {
  const a = { ...e.entries };
  for (const r of t) delete a[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    }
  };
}
function lv(e, t, a) {
  const r = e["~run"]({ value: t }, /* @__PURE__ */ Ar(a));
  if (r.issues) throw new oa(r.issues);
  return r.value;
}
async function sv(e, t, a) {
  const r = await e["~run"]({ value: t }, /* @__PURE__ */ Ar(a));
  if (r.issues) throw new oa(r.issues);
  return r.value;
}
// @__NO_SIDE_EFFECTS__
function Qw(e, t) {
  const a = (r) => lv(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function Jw(e, t) {
  const a = (r) => sv(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function Xw(e, t) {
  const a = {};
  for (const r in e.entries) a[r] = !t || t.includes(r) ? /* @__PURE__ */ vr(e.entries[r]) : e.entries[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function e1(e, t) {
  const a = {};
  for (const r in e.entries) a[r] = !t || t.includes(r) ? /* @__PURE__ */ hs(e.entries[r]) : e.entries[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function t1(e, t) {
  const a = {};
  for (const r of t) a[r] = e.entries[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yt(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    "~run"(t, a) {
      for (const r of e) if (r.kind !== "metadata") {
        if (t.issues && (r.kind === "schema" || r.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !a.abortEarly && !a.abortPipeEarly) && (t = r["~run"](t, a));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function a1(...e) {
  return {
    ...e[0],
    pipe: e,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    },
    async "~run"(t, a) {
      for (const r of e) if (r.kind !== "metadata") {
        if (t.issues && (r.kind === "schema" || r.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !a.abortEarly && !a.abortPipeEarly) && (t = await r["~run"](t, a));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function r1(e, t, a) {
  const r = Array.isArray(t) ? t : void 0, n = Array.isArray(t) ? a : t, o = {};
  for (const i in e.entries) o[i] = !r || r.includes(i) ? /* @__PURE__ */ ps(e.entries[i], n) : e.entries[i];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function n1(e, t, a) {
  const r = Array.isArray(t) ? t : void 0, n = Array.isArray(t) ? a : t, o = {};
  for (const i in e.entries) o[i] = !r || r.includes(i) ? /* @__PURE__ */ ys(e.entries[i], n) : e.entries[i];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ Y(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nn(e, t, a) {
  const r = e["~run"]({ value: t }, /* @__PURE__ */ Ar(a));
  return {
    typed: r.typed,
    success: !r.issues,
    output: r.value,
    issues: r.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function Oo(e, t, a) {
  const r = await e["~run"]({ value: t }, /* @__PURE__ */ Ar(a));
  return {
    typed: r.typed,
    success: !r.issues,
    output: r.value,
    issues: r.issues
  };
}
// @__NO_SIDE_EFFECTS__
function o1(e, t) {
  const a = (r) => /* @__PURE__ */ nn(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function i1(e, t) {
  const a = (r) => /* @__PURE__ */ Oo(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function l1(e) {
  let t = "";
  for (const a of e) {
    t && (t += `
`), t += `× ${a.message}`;
    const r = /* @__PURE__ */ zo(a);
    r && (t += `
  → at ${r}`);
  }
  return t;
}
// @__NO_SIDE_EFFECTS__
function s1(e) {
  return e.wrapped;
}
const u1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE64_REGEX: gp,
  BIC_REGEX: bp,
  CUID2_REGEX: kp,
  DECIMAL_REGEX: wp,
  DIGITS_REGEX: xp,
  DOMAIN_REGEX: zp,
  EMAIL_REGEX: _p,
  EMOJI_REGEX: Sp,
  HEXADECIMAL_REGEX: qp,
  HEX_COLOR_REGEX: Op,
  IMEI_REGEX: Ap,
  IPV4_REGEX: Cp,
  IPV6_REGEX: Ep,
  IP_REGEX: $p,
  ISO_DATE_REGEX: Bp,
  ISO_DATE_TIME_REGEX: Mp,
  ISO_TIMESTAMP_REGEX: jp,
  ISO_TIME_REGEX: Dp,
  ISO_TIME_SECOND_REGEX: Pp,
  ISO_WEEK_REGEX: Ip,
  ISRC_REGEX: Tp,
  JWS_COMPACT_REGEX: Fp,
  MAC48_REGEX: Np,
  MAC64_REGEX: Vp,
  MAC_REGEX: Rp,
  NANO_ID_REGEX: Up,
  OCTAL_REGEX: Lp,
  RFC_EMAIL_REGEX: Wp,
  SLUG_REGEX: Kp,
  ULID_REGEX: Gp,
  UUID_REGEX: Hp,
  ValiError: oa,
  _addIssue: B,
  _cloneDataset: Zn,
  _getByteCount: yn,
  _getGraphemeCount: mn,
  _getLastMetadata: xo,
  _getStandardProps: Y,
  _getWordCount: hn,
  _isLuhnAlgo: ds,
  _isValidObjectKey: La,
  _joinExpects: vt,
  _stringify: Re,
  any: vn,
  args: mp,
  argsAsync: hp,
  array: hr,
  arrayAsync: ch,
  assert: Pw,
  awaitAsync: vp,
  base64: Yp,
  bic: Zp,
  bigint: fh,
  blob: ph,
  boolean: fs,
  brand: Qp,
  bytes: Jp,
  cache: jw,
  cacheAsync: Iw,
  check: Xp,
  checkAsync: ey,
  checkItems: ty,
  checkItemsAsync: ay,
  config: Fw,
  creditCard: ry,
  cuid2: ny,
  custom: yh,
  customAsync: mh,
  date: _o,
  decimal: oy,
  deleteGlobalConfig: pw,
  deleteGlobalMessage: mw,
  deleteSchemaMessage: vw,
  deleteSpecificMessage: bw,
  description: iy,
  digits: ly,
  domain: sy,
  email: uy,
  emoji: dy,
  empty: cy,
  endsWith: fy,
  entries: py,
  entriesFromList: ww,
  entriesFromObjects: xw,
  enum: zl,
  enum_: zl,
  everyItem: yy,
  exactOptional: hh,
  exactOptionalAsync: vh,
  examples: my,
  excludes: hy,
  fallback: Tw,
  fallbackAsync: Nw,
  file: gh,
  filterItems: vy,
  findItem: gy,
  finite: by,
  flatten: gl,
  flavor: ky,
  forward: Vw,
  forwardAsync: Rw,
  function: _l,
  function_: _l,
  getDefault: Ze,
  getDefaults: bl,
  getDefaultsAsync: kl,
  getDescription: Uw,
  getDotPath: zo,
  getExamples: Lw,
  getFallback: gt,
  getFallbacks: wl,
  getFallbacksAsync: xl,
  getGlobalConfig: Ar,
  getGlobalMessage: fp,
  getMetadata: Ww,
  getSchemaMessage: pp,
  getSpecificMessage: yp,
  getTitle: Kw,
  graphemes: wy,
  gtValue: xy,
  guard: zy,
  hash: _y,
  hexColor: qy,
  hexadecimal: Sy,
  imei: Oy,
  includes: Ay,
  instance: bh,
  integer: cs,
  intersect: kh,
  intersectAsync: wh,
  ip: Cy,
  ipv4: Ey,
  ipv6: $y,
  is: Gw,
  isOfKind: zw,
  isOfType: _w,
  isValiError: Sw,
  isbn: By,
  isoDate: Dy,
  isoDateTime: Py,
  isoTime: jy,
  isoTimeSecond: Iy,
  isoTimestamp: Fy,
  isoWeek: Ty,
  isrc: My,
  jwsCompact: Ny,
  keyof: Hw,
  lazy: xh,
  lazyAsync: zh,
  length: Vy,
  literal: Jn,
  looseObject: _h,
  looseObjectAsync: Sh,
  looseTuple: qh,
  looseTupleAsync: Oh,
  ltValue: Ry,
  mac: Uy,
  mac48: Ly,
  mac64: Wy,
  map: Ah,
  mapAsync: Ch,
  mapItems: Ky,
  maxBytes: Gy,
  maxEntries: Hy,
  maxGraphemes: Yy,
  maxLength: Zy,
  maxSize: Qy,
  maxValue: Jy,
  maxWords: Xy,
  message: Yw,
  metadata: em,
  mimeType: tm,
  minBytes: am,
  minEntries: rm,
  minGraphemes: nm,
  minLength: om,
  minSize: im,
  minValue: lm,
  minWords: sm,
  multipleOf: um,
  nan: Eh,
  nanoid: dm,
  never: $h,
  nonEmpty: cm,
  nonNullable: Bh,
  nonNullableAsync: Mh,
  nonNullish: Dh,
  nonNullishAsync: Ph,
  nonOptional: ps,
  nonOptionalAsync: ys,
  normalize: fm,
  notBytes: pm,
  notEntries: ym,
  notGraphemes: mm,
  notLength: hm,
  notSize: vm,
  notValue: gm,
  notValues: bm,
  notWords: km,
  null: Sl,
  null_: Sl,
  nullable: jh,
  nullableAsync: Ih,
  nullish: Xn,
  nullishAsync: Fh,
  number: So,
  object: ms,
  objectAsync: Th,
  objectWithRest: Nh,
  objectWithRestAsync: Vh,
  octal: wm,
  omit: Zw,
  optional: vr,
  optionalAsync: hs,
  parse: lv,
  parseAsync: sv,
  parseBoolean: xm,
  parseJson: zm,
  parser: Qw,
  parserAsync: Jw,
  partial: Xw,
  partialAsync: e1,
  partialCheck: Sm,
  partialCheckAsync: qm,
  pick: t1,
  picklist: qo,
  pipe: Yt,
  pipeAsync: a1,
  promise: Rh,
  rawCheck: Om,
  rawCheckAsync: Am,
  rawTransform: Cm,
  rawTransformAsync: Em,
  readonly: $m,
  record: vs,
  recordAsync: Uh,
  reduceItems: Bm,
  regex: Mm,
  required: r1,
  requiredAsync: n1,
  returns: Dm,
  returnsAsync: Pm,
  rfcEmail: jm,
  safeInteger: Im,
  safeParse: nn,
  safeParseAsync: Oo,
  safeParser: o1,
  safeParserAsync: i1,
  set: Lh,
  setAsync: Wh,
  setGlobalConfig: fw,
  setGlobalMessage: yw,
  setSchemaMessage: hw,
  setSpecificMessage: gw,
  size: Fm,
  slug: Tm,
  someItem: Nm,
  sortItems: Vm,
  startsWith: Rm,
  strictObject: Kh,
  strictObjectAsync: Gh,
  strictTuple: Hh,
  strictTupleAsync: Yh,
  string: zt,
  stringifyJson: Um,
  summarize: l1,
  symbol: Zh,
  title: Lm,
  toBigint: Wm,
  toBoolean: Km,
  toDate: Gm,
  toLowerCase: Hm,
  toMaxValue: Ym,
  toMinValue: Zm,
  toNumber: Qm,
  toString: Jm,
  toUpperCase: Xm,
  transform: ht,
  transformAsync: eh,
  trim: th,
  trimEnd: ah,
  trimStart: rh,
  tuple: Qh,
  tupleAsync: Jh,
  tupleWithRest: Xh,
  tupleWithRestAsync: ev,
  ulid: nh,
  undefined: ql,
  undefined_: ql,
  undefinedable: tv,
  undefinedableAsync: av,
  union: Ht,
  unionAsync: rv,
  unknown: nv,
  unwrap: s1,
  url: oh,
  uuid: ih,
  value: lh,
  values: sh,
  variant: ov,
  variantAsync: iv,
  void: Ol,
  void_: Ol,
  words: uh
}, Symbol.toStringTag, { value: "Module" }));
function Al(e = /* @__PURE__ */ vn()) {
  return /* @__PURE__ */ Yt(
    /* @__PURE__ */ Ht([e, /* @__PURE__ */ hr(e)]),
    /* @__PURE__ */ ht((t) => Array.isArray(t) ? t : [t]),
    /* @__PURE__ */ hr(e)
  );
}
Al.number = () => Al(/* @__PURE__ */ So());
const uv = 6048e5, d1 = 864e5, Wd = /* @__PURE__ */ Symbol.for("constructDateFrom");
function va(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Wd in e ? e[Wd](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Mt(e, t) {
  return va(t || e, e);
}
let c1 = {};
function Ao() {
  return c1;
}
function on(e, t) {
  const a = Ao(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0, n = Mt(e, t?.in), o = n.getDay(), i = (o < r ? 7 : 0) + o - r;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function to(e, t) {
  return on(e, { ...t, weekStartsOn: 1 });
}
function dv(e, t) {
  const a = Mt(e, t?.in), r = a.getFullYear(), n = va(a, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = to(n), i = va(a, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const l = to(i);
  return a.getTime() >= o.getTime() ? r + 1 : a.getTime() >= l.getTime() ? r : r - 1;
}
function Kd(e) {
  const t = Mt(e), a = new Date(
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
  return a.setUTCFullYear(t.getFullYear()), +e - +a;
}
function f1(e, ...t) {
  const a = va.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(a);
}
function Gd(e, t) {
  const a = Mt(e, t?.in);
  return a.setHours(0, 0, 0, 0), a;
}
function p1(e, t, a) {
  const [r, n] = f1(
    a?.in,
    e,
    t
  ), o = Gd(r), i = Gd(n), l = +o - Kd(o), s = +i - Kd(i);
  return Math.round((l - s) / d1);
}
function y1(e, t) {
  const a = dv(e, t), r = va(e, 0);
  return r.setFullYear(a, 0, 4), r.setHours(0, 0, 0, 0), to(r);
}
function m1(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function h1(e) {
  return !(!m1(e) && typeof e != "number" || isNaN(+Mt(e)));
}
function v1(e, t) {
  const a = Mt(e, t?.in);
  return a.setFullYear(a.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
const g1 = {
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
}, b1 = (e, t, a) => {
  let r;
  const n = g1[e];
  return typeof n == "string" ? r = n : t === 1 ? r = n.one : r = n.other.replace("{{count}}", t.toString()), a?.addSuffix ? a.comparison && a.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ni(e) {
  return (t = {}) => {
    const a = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[a] || e.formats[e.defaultWidth];
  };
}
const k1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, w1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, x1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, z1 = {
  date: Ni({
    formats: k1,
    defaultWidth: "full"
  }),
  time: Ni({
    formats: w1,
    defaultWidth: "full"
  }),
  dateTime: Ni({
    formats: x1,
    defaultWidth: "full"
  })
}, _1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, S1 = (e, t, a, r) => _1[e];
function Rr(e) {
  return (t, a) => {
    const r = a?.context ? String(a.context) : "standalone";
    let n;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, l = a?.width ? String(a.width) : i;
      n = e.formattingValues[l] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, l = a?.width ? String(a.width) : e.defaultWidth;
      n = e.values[l] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return n[o];
  };
}
const q1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, O1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, A1 = {
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
}, C1 = {
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
}, E1 = {
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
}, $1 = {
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
}, B1 = (e, t) => {
  const a = Number(e), r = a % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, M1 = {
  ordinalNumber: B1,
  era: Rr({
    values: q1,
    defaultWidth: "wide"
  }),
  quarter: Rr({
    values: O1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Rr({
    values: A1,
    defaultWidth: "wide"
  }),
  day: Rr({
    values: C1,
    defaultWidth: "wide"
  }),
  dayPeriod: Rr({
    values: E1,
    defaultWidth: "wide",
    formattingValues: $1,
    defaultFormattingWidth: "wide"
  })
};
function Ur(e) {
  return (t, a = {}) => {
    const r = a.width, n = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(n);
    if (!o)
      return null;
    const i = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? P1(l, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      D1(l, (f) => f.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(s) : s, d = a.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      a.valueCallback(d)
    ) : d;
    const c = t.slice(i.length);
    return { value: d, rest: c };
  };
}
function D1(e, t) {
  for (const a in e)
    if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a]))
      return a;
}
function P1(e, t) {
  for (let a = 0; a < e.length; a++)
    if (t(e[a]))
      return a;
}
function j1(e) {
  return (t, a = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const n = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = a.valueCallback ? a.valueCallback(i) : i;
    const l = t.slice(n.length);
    return { value: i, rest: l };
  };
}
const I1 = /^(\d+)(th|st|nd|rd)?/i, F1 = /\d+/i, T1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, N1 = {
  any: [/^b/i, /^(a|c)/i]
}, V1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, R1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, U1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, L1 = {
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
}, W1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, K1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, G1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, H1 = {
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
}, Y1 = {
  ordinalNumber: j1({
    matchPattern: I1,
    parsePattern: F1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ur({
    matchPatterns: T1,
    defaultMatchWidth: "wide",
    parsePatterns: N1,
    defaultParseWidth: "any"
  }),
  quarter: Ur({
    matchPatterns: V1,
    defaultMatchWidth: "wide",
    parsePatterns: R1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ur({
    matchPatterns: U1,
    defaultMatchWidth: "wide",
    parsePatterns: L1,
    defaultParseWidth: "any"
  }),
  day: Ur({
    matchPatterns: W1,
    defaultMatchWidth: "wide",
    parsePatterns: K1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ur({
    matchPatterns: G1,
    defaultMatchWidth: "any",
    parsePatterns: H1,
    defaultParseWidth: "any"
  })
}, Z1 = {
  code: "en-US",
  formatDistance: b1,
  formatLong: z1,
  formatRelative: S1,
  localize: M1,
  match: Y1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Q1(e, t) {
  const a = Mt(e, t?.in);
  return p1(a, v1(a)) + 1;
}
function J1(e, t) {
  const a = Mt(e, t?.in), r = +to(a) - +y1(a);
  return Math.round(r / uv) + 1;
}
function cv(e, t) {
  const a = Mt(e, t?.in), r = a.getFullYear(), n = Ao(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = va(t?.in || e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const l = on(i, t), s = va(t?.in || e, 0);
  s.setFullYear(r, 0, o), s.setHours(0, 0, 0, 0);
  const d = on(s, t);
  return +a >= +l ? r + 1 : +a >= +d ? r : r - 1;
}
function X1(e, t) {
  const a = Ao(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, n = cv(e, t), o = va(t?.in || e, 0);
  return o.setFullYear(n, 0, r), o.setHours(0, 0, 0, 0), on(o, t);
}
function ex(e, t) {
  const a = Mt(e, t?.in), r = +on(a, t) - +X1(a, t);
  return Math.round(r / uv) + 1;
}
function Ee(e, t) {
  const a = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return a + r;
}
const ca = {
  // Year
  y(e, t) {
    const a = e.getFullYear(), r = a > 0 ? a : 1 - a;
    return Ee(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const a = e.getMonth();
    return t === "M" ? String(a + 1) : Ee(a + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ee(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ee(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ee(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ee(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ee(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const a = t.length, r = e.getMilliseconds(), n = Math.trunc(
      r * Math.pow(10, a - 3)
    );
    return Ee(n, t.length);
  }
}, rr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Hd = {
  // Era
  G: function(e, t, a) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return a.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return a.era(r, { width: "narrow" });
      default:
        return a.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, a) {
    if (t === "yo") {
      const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
      return a.ordinalNumber(n, { unit: "year" });
    }
    return ca.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, a, r) {
    const n = cv(e, r), o = n > 0 ? n : 1 - n;
    if (t === "YY") {
      const i = o % 100;
      return Ee(i, 2);
    }
    return t === "Yo" ? a.ordinalNumber(o, { unit: "year" }) : Ee(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const a = dv(e);
    return Ee(a, t.length);
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
    const a = e.getFullYear();
    return Ee(a, t.length);
  },
  // Quarter
  Q: function(e, t, a) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Ee(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return a.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return a.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, a) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Ee(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return a.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return a.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, a) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return ca.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return a.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return a.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return a.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return a.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, a) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ee(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return a.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return a.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return a.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return a.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, a, r) {
    const n = ex(e, r);
    return t === "wo" ? a.ordinalNumber(n, { unit: "week" }) : Ee(n, t.length);
  },
  // ISO week of year
  I: function(e, t, a) {
    const r = J1(e);
    return t === "Io" ? a.ordinalNumber(r, { unit: "week" }) : Ee(r, t.length);
  },
  // Day of the month
  d: function(e, t, a) {
    return t === "do" ? a.ordinalNumber(e.getDate(), { unit: "date" }) : ca.d(e, t);
  },
  // Day of year
  D: function(e, t, a) {
    const r = Q1(e);
    return t === "Do" ? a.ordinalNumber(r, { unit: "dayOfYear" }) : Ee(r, t.length);
  },
  // Day of week
  E: function(e, t, a) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return a.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return a.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, a, r) {
    const n = e.getDay(), o = (n - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return Ee(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return a.ordinalNumber(o, { unit: "day" });
      case "eee":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, a, r) {
    const n = e.getDay(), o = (n - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return Ee(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return a.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return a.day(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return a.day(n, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return a.day(n, {
          width: "short",
          context: "standalone"
        });
      default:
        return a.day(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, a) {
    const r = e.getDay(), n = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(n);
      // 02
      case "ii":
        return Ee(n, t.length);
      // 2nd
      case "io":
        return a.ordinalNumber(n, { unit: "day" });
      // Tue
      case "iii":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return a.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return a.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, a) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, a) {
    const r = e.getHours();
    let n;
    switch (r === 12 ? n = rr.noon : r === 0 ? n = rr.midnight : n = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, a) {
    const r = e.getHours();
    let n;
    switch (r >= 17 ? n = rr.evening : r >= 12 ? n = rr.afternoon : r >= 4 ? n = rr.morning : n = rr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, a) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), a.ordinalNumber(r, { unit: "hour" });
    }
    return ca.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, a) {
    return t === "Ho" ? a.ordinalNumber(e.getHours(), { unit: "hour" }) : ca.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, a) {
    const r = e.getHours() % 12;
    return t === "Ko" ? a.ordinalNumber(r, { unit: "hour" }) : Ee(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, a) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? a.ordinalNumber(r, { unit: "hour" }) : Ee(r, t.length);
  },
  // Minute
  m: function(e, t, a) {
    return t === "mo" ? a.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ca.m(e, t);
  },
  // Second
  s: function(e, t, a) {
    return t === "so" ? a.ordinalNumber(e.getSeconds(), { unit: "second" }) : ca.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return ca.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, a) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Zd(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return $a(r);
      // Hours and minutes with `:` delimiter
      default:
        return $a(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, a) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Zd(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return $a(r);
      // Hours and minutes with `:` delimiter
      default:
        return $a(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, a) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Yd(r, ":");
      default:
        return "GMT" + $a(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, a) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Yd(r, ":");
      default:
        return "GMT" + $a(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, a) {
    const r = Math.trunc(+e / 1e3);
    return Ee(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, a) {
    return Ee(+e, t.length);
  }
};
function Yd(e, t = "") {
  const a = e > 0 ? "-" : "+", r = Math.abs(e), n = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? a + String(n) : a + String(n) + t + Ee(o, 2);
}
function Zd(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ee(Math.abs(e) / 60, 2) : $a(e, t);
}
function $a(e, t = "") {
  const a = e > 0 ? "-" : "+", r = Math.abs(e), n = Ee(Math.trunc(r / 60), 2), o = Ee(r % 60, 2);
  return a + n + t + o;
}
const Qd = (e, t) => {
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
}, fv = (e, t) => {
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
}, tx = (e, t) => {
  const a = e.match(/(P+)(p+)?/) || [], r = a[1], n = a[2];
  if (!n)
    return Qd(e, t);
  let o;
  switch (r) {
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
  return o.replace("{{date}}", Qd(r, t)).replace("{{time}}", fv(n, t));
}, ax = {
  p: fv,
  P: tx
}, rx = /^D+$/, nx = /^Y+$/, ox = ["D", "DD", "YY", "YYYY"];
function ix(e) {
  return rx.test(e);
}
function lx(e) {
  return nx.test(e);
}
function sx(e, t, a) {
  const r = ux(e, t, a);
  if (console.warn(r), ox.includes(e)) throw new RangeError(r);
}
function ux(e, t, a) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const dx = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, cx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, fx = /^'([^]*?)'?$/, px = /''/g, yx = /[a-zA-Z]/;
function ao(e, t, a) {
  const r = Ao(), n = r.locale ?? Z1, o = r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, l = Mt(e, a?.in);
  if (!h1(l))
    throw new RangeError("Invalid time value");
  let s = t.match(cx).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const y = ax[f];
      return y(c, n.formatLong);
    }
    return c;
  }).join("").match(dx).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: mx(c) };
    if (Hd[f])
      return { isToken: !0, value: c };
    if (f.match(yx))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  n.localize.preprocessor && (s = n.localize.preprocessor(l, s));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: n
  };
  return s.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (lx(f) || ix(f)) && sx(f, t, String(e));
    const y = Hd[f[0]];
    return y(l, f, n.localize, d);
  }).join("");
}
function mx(e) {
  const t = e.match(fx);
  return t ? t[1].replace(px, "'") : e;
}
var pv = typeof global == "object" && global && global.Object === Object && global, hx = typeof self == "object" && self && self.Object === Object && self, Co = pv || hx || Function("return this")(), gr = Co.Symbol, yv = Object.prototype, vx = yv.hasOwnProperty, gx = yv.toString, Lr = gr ? gr.toStringTag : void 0;
function bx(e) {
  var t = vx.call(e, Lr), a = e[Lr];
  try {
    e[Lr] = void 0;
    var r = !0;
  } catch {
  }
  var n = gx.call(e);
  return r && (t ? e[Lr] = a : delete e[Lr]), n;
}
var kx = Object.prototype, wx = kx.toString;
function xx(e) {
  return wx.call(e);
}
var zx = "[object Null]", _x = "[object Undefined]", Jd = gr ? gr.toStringTag : void 0;
function gs(e) {
  return e == null ? e === void 0 ? _x : zx : Jd && Jd in Object(e) ? bx(e) : xx(e);
}
function bs(e) {
  return e != null && typeof e == "object";
}
var Sx = "[object Symbol]";
function Eo(e) {
  return typeof e == "symbol" || bs(e) && gs(e) == Sx;
}
function qx(e, t) {
  for (var a = -1, r = e == null ? 0 : e.length, n = Array(r); ++a < r; )
    n[a] = t(e[a], a, e);
  return n;
}
var $o = Array.isArray, Xd = gr ? gr.prototype : void 0, ec = Xd ? Xd.toString : void 0;
function mv(e) {
  if (typeof e == "string")
    return e;
  if ($o(e))
    return qx(e, mv) + "";
  if (Eo(e))
    return ec ? ec.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ox = /\s/;
function Ax(e) {
  for (var t = e.length; t-- && Ox.test(e.charAt(t)); )
    ;
  return t;
}
var Cx = /^\s+/;
function Ex(e) {
  return e && e.slice(0, Ax(e) + 1).replace(Cx, "");
}
function Ta(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tc = NaN, $x = /^[-+]0x[0-9a-f]+$/i, Bx = /^0b[01]+$/i, Mx = /^0o[0-7]+$/i, Dx = parseInt;
function ac(e) {
  if (typeof e == "number")
    return e;
  if (Eo(e))
    return tc;
  if (Ta(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ta(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ex(e);
  var a = Bx.test(e);
  return a || Mx.test(e) ? Dx(e.slice(2), a ? 2 : 8) : $x.test(e) ? tc : +e;
}
var Px = "[object AsyncFunction]", jx = "[object Function]", Ix = "[object GeneratorFunction]", Fx = "[object Proxy]";
function Tx(e) {
  if (!Ta(e))
    return !1;
  var t = gs(e);
  return t == jx || t == Ix || t == Px || t == Fx;
}
var Vi = Co["__core-js_shared__"], rc = (function() {
  var e = /[^.]+$/.exec(Vi && Vi.keys && Vi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Nx(e) {
  return !!rc && rc in e;
}
var Vx = Function.prototype, Rx = Vx.toString;
function Ux(e) {
  if (e != null) {
    try {
      return Rx.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Lx = /[\\^$.*+?()[\]{}|]/g, Wx = /^\[object .+?Constructor\]$/, Kx = Function.prototype, Gx = Object.prototype, Hx = Kx.toString, Yx = Gx.hasOwnProperty, Zx = RegExp(
  "^" + Hx.call(Yx).replace(Lx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qx(e) {
  if (!Ta(e) || Nx(e))
    return !1;
  var t = Tx(e) ? Zx : Wx;
  return t.test(Ux(e));
}
function Jx(e, t) {
  return e?.[t];
}
function ks(e, t) {
  var a = Jx(e, t);
  return Qx(a) ? a : void 0;
}
var nc = (function() {
  try {
    var e = ks(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Xx = 9007199254740991, ez = /^(?:0|[1-9]\d*)$/;
function hv(e, t) {
  var a = typeof e;
  return t = t ?? Xx, !!t && (a == "number" || a != "symbol" && ez.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function tz(e, t, a) {
  t == "__proto__" && nc ? nc(e, t, {
    configurable: !0,
    enumerable: !0,
    value: a,
    writable: !0
  }) : e[t] = a;
}
function vv(e, t) {
  return e === t || e !== e && t !== t;
}
var az = Object.prototype, rz = az.hasOwnProperty;
function nz(e, t, a) {
  var r = e[t];
  (!(rz.call(e, t) && vv(r, a)) || a === void 0 && !(t in e)) && tz(e, t, a);
}
var oz = 9007199254740991;
function iz(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oz;
}
var lz = "[object Arguments]";
function oc(e) {
  return bs(e) && gs(e) == lz;
}
var gv = Object.prototype, sz = gv.hasOwnProperty, uz = gv.propertyIsEnumerable, dz = oc(/* @__PURE__ */ (function() {
  return arguments;
})()) ? oc : function(e) {
  return bs(e) && sz.call(e, "callee") && !uz.call(e, "callee");
}, bv = typeof exports == "object" && exports && !exports.nodeType && exports, en = bv && typeof module == "object" && module && !module.nodeType && module, cz = en && en.exports === bv, Ri = cz && pv.process, ic = (function() {
  try {
    var e = en && en.require && en.require("util").types;
    return e || Ri && Ri.binding && Ri.binding("util");
  } catch {
  }
})(), fz = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pz = /^\w*$/;
function yz(e, t) {
  if ($o(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || Eo(e) ? !0 : pz.test(e) || !fz.test(e) || t != null && e in Object(t);
}
var ln = ks(Object, "create");
function mz() {
  this.__data__ = ln ? ln(null) : {}, this.size = 0;
}
function hz(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var vz = "__lodash_hash_undefined__", gz = Object.prototype, bz = gz.hasOwnProperty;
function kz(e) {
  var t = this.__data__;
  if (ln) {
    var a = t[e];
    return a === vz ? void 0 : a;
  }
  return bz.call(t, e) ? t[e] : void 0;
}
var wz = Object.prototype, xz = wz.hasOwnProperty;
function zz(e) {
  var t = this.__data__;
  return ln ? t[e] !== void 0 : xz.call(t, e);
}
var _z = "__lodash_hash_undefined__";
function Sz(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = ln && t === void 0 ? _z : t, this;
}
function Na(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Na.prototype.clear = mz;
Na.prototype.delete = hz;
Na.prototype.get = kz;
Na.prototype.has = zz;
Na.prototype.set = Sz;
function qz() {
  this.__data__ = [], this.size = 0;
}
function Bo(e, t) {
  for (var a = e.length; a--; )
    if (vv(e[a][0], t))
      return a;
  return -1;
}
var Oz = Array.prototype, Az = Oz.splice;
function Cz(e) {
  var t = this.__data__, a = Bo(t, e);
  if (a < 0)
    return !1;
  var r = t.length - 1;
  return a == r ? t.pop() : Az.call(t, a, 1), --this.size, !0;
}
function Ez(e) {
  var t = this.__data__, a = Bo(t, e);
  return a < 0 ? void 0 : t[a][1];
}
function $z(e) {
  return Bo(this.__data__, e) > -1;
}
function Bz(e, t) {
  var a = this.__data__, r = Bo(a, e);
  return r < 0 ? (++this.size, a.push([e, t])) : a[r][1] = t, this;
}
function Cr(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Cr.prototype.clear = qz;
Cr.prototype.delete = Cz;
Cr.prototype.get = Ez;
Cr.prototype.has = $z;
Cr.prototype.set = Bz;
var Mz = ks(Co, "Map");
function Dz() {
  this.size = 0, this.__data__ = {
    hash: new Na(),
    map: new (Mz || Cr)(),
    string: new Na()
  };
}
function Pz(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Mo(e, t) {
  var a = e.__data__;
  return Pz(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
function jz(e) {
  var t = Mo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Iz(e) {
  return Mo(this, e).get(e);
}
function Fz(e) {
  return Mo(this, e).has(e);
}
function Tz(e, t) {
  var a = Mo(this, e), r = a.size;
  return a.set(e, t), this.size += a.size == r ? 0 : 1, this;
}
function Wa(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Wa.prototype.clear = Dz;
Wa.prototype.delete = jz;
Wa.prototype.get = Iz;
Wa.prototype.has = Fz;
Wa.prototype.set = Tz;
var Nz = "Expected a function";
function ws(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Nz);
  var a = function() {
    var r = arguments, n = t ? t.apply(this, r) : r[0], o = a.cache;
    if (o.has(n))
      return o.get(n);
    var i = e.apply(this, r);
    return a.cache = o.set(n, i) || o, i;
  };
  return a.cache = new (ws.Cache || Wa)(), a;
}
ws.Cache = Wa;
var Vz = 500;
function Rz(e) {
  var t = ws(e, function(r) {
    return a.size === Vz && a.clear(), r;
  }), a = t.cache;
  return t;
}
var Uz = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lz = /\\(\\)?/g, Wz = Rz(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Uz, function(a, r, n, o) {
    t.push(n ? o.replace(Lz, "$1") : r || a);
  }), t;
});
function xs(e) {
  return e == null ? "" : mv(e);
}
function Do(e, t) {
  return $o(e) ? e : yz(e, t) ? [e] : Wz(xs(e));
}
function sn(e) {
  if (typeof e == "string" || Eo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function kv(e, t) {
  t = Do(t, e);
  for (var a = 0, r = t.length; e != null && a < r; )
    e = e[sn(t[a++])];
  return a && a == r ? e : void 0;
}
function nt(e, t, a) {
  var r = e == null ? void 0 : kv(e, t);
  return r === void 0 ? a : r;
}
function Kz(e, t, a) {
  var r = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), a = a > n ? n : a, a < 0 && (a += n), n = t > a ? 0 : a - t >>> 0, t >>>= 0;
  for (var o = Array(n); ++r < n; )
    o[r] = e[r + t];
  return o;
}
function Gz(e, t, a, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    a = t(a, e[n], n, e);
  return a;
}
function Hz(e) {
  return function(t) {
    return e?.[t];
  };
}
var Yz = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Zz = Hz(Yz), Qz = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Jz = "\\u0300-\\u036f", Xz = "\\ufe20-\\ufe2f", e_ = "\\u20d0-\\u20ff", t_ = Jz + Xz + e_, a_ = "[" + t_ + "]", r_ = RegExp(a_, "g");
function n_(e) {
  return e = xs(e), e && e.replace(Qz, Zz).replace(r_, "");
}
var o_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function i_(e) {
  return e.match(o_) || [];
}
var l_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function s_(e) {
  return l_.test(e);
}
var wv = "\\ud800-\\udfff", u_ = "\\u0300-\\u036f", d_ = "\\ufe20-\\ufe2f", c_ = "\\u20d0-\\u20ff", f_ = u_ + d_ + c_, xv = "\\u2700-\\u27bf", zv = "a-z\\xdf-\\xf6\\xf8-\\xff", p_ = "\\xac\\xb1\\xd7\\xf7", y_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", m_ = "\\u2000-\\u206f", h_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _v = "A-Z\\xc0-\\xd6\\xd8-\\xde", v_ = "\\ufe0e\\ufe0f", Sv = p_ + y_ + m_ + h_, qv = "['’]", lc = "[" + Sv + "]", g_ = "[" + f_ + "]", Ov = "\\d+", b_ = "[" + xv + "]", Av = "[" + zv + "]", Cv = "[^" + wv + Sv + Ov + xv + zv + _v + "]", k_ = "\\ud83c[\\udffb-\\udfff]", w_ = "(?:" + g_ + "|" + k_ + ")", x_ = "[^" + wv + "]", Ev = "(?:\\ud83c[\\udde6-\\uddff]){2}", $v = "[\\ud800-\\udbff][\\udc00-\\udfff]", ir = "[" + _v + "]", z_ = "\\u200d", sc = "(?:" + Av + "|" + Cv + ")", __ = "(?:" + ir + "|" + Cv + ")", uc = "(?:" + qv + "(?:d|ll|m|re|s|t|ve))?", dc = "(?:" + qv + "(?:D|LL|M|RE|S|T|VE))?", Bv = w_ + "?", Mv = "[" + v_ + "]?", S_ = "(?:" + z_ + "(?:" + [x_, Ev, $v].join("|") + ")" + Mv + Bv + ")*", q_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", O_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", A_ = Mv + Bv + S_, C_ = "(?:" + [b_, Ev, $v].join("|") + ")" + A_, E_ = RegExp([
  ir + "?" + Av + "+" + uc + "(?=" + [lc, ir, "$"].join("|") + ")",
  __ + "+" + dc + "(?=" + [lc, ir + sc, "$"].join("|") + ")",
  ir + "?" + sc + "+" + uc,
  ir + "+" + dc,
  O_,
  q_,
  Ov,
  C_
].join("|"), "g");
function $_(e) {
  return e.match(E_) || [];
}
function B_(e, t, a) {
  return e = xs(e), t = t, t === void 0 ? s_(e) ? $_(e) : i_(e) : e.match(t) || [];
}
var M_ = "['’]", D_ = RegExp(M_, "g");
function P_(e) {
  return function(t) {
    return Gz(B_(n_(t).replace(D_, "")), e, "");
  };
}
function j_(e, t, a) {
  t = Do(t, e);
  for (var r = -1, n = t.length, o = !1; ++r < n; ) {
    var i = sn(t[r]);
    if (!(o = e != null && a(e, i)))
      break;
    e = e[i];
  }
  return o || ++r != n ? o : (n = e == null ? 0 : e.length, !!n && iz(n) && hv(i, n) && ($o(e) || dz(e)));
}
var Ui = function() {
  return Co.Date.now();
}, I_ = "Expected a function", F_ = Math.max, T_ = Math.min;
function N_(e, t, a) {
  var r, n, o, i, l, s, d = 0, c = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(I_);
  t = ac(t) || 0, Ta(a) && (c = !!a.leading, f = "maxWait" in a, o = f ? F_(ac(a.maxWait) || 0, t) : o, y = "trailing" in a ? !!a.trailing : y);
  function p(q) {
    var C = r, E = n;
    return r = n = void 0, d = q, i = e.apply(E, C), i;
  }
  function g(q) {
    return d = q, l = setTimeout(w, t), c ? p(q) : i;
  }
  function h(q) {
    var C = q - s, E = q - d, M = t - C;
    return f ? T_(M, o - E) : M;
  }
  function k(q) {
    var C = q - s, E = q - d;
    return s === void 0 || C >= t || C < 0 || f && E >= o;
  }
  function w() {
    var q = Ui();
    if (k(q))
      return b(q);
    l = setTimeout(w, h(q));
  }
  function b(q) {
    return l = void 0, y && r ? p(q) : (r = n = void 0, i);
  }
  function S() {
    l !== void 0 && clearTimeout(l), d = 0, r = s = n = l = void 0;
  }
  function z() {
    return l === void 0 ? i : b(Ui());
  }
  function $() {
    var q = Ui(), C = k(q);
    if (r = arguments, n = this, s = q, C) {
      if (l === void 0)
        return g(s);
      if (f)
        return clearTimeout(l), l = setTimeout(w, t), p(s);
    }
    return l === void 0 && (l = setTimeout(w, t)), i;
  }
  return $.cancel = S, $.flush = z, $;
}
function V_(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var R_ = Object.prototype, U_ = R_.hasOwnProperty;
function L_(e, t) {
  return e != null && U_.call(e, t);
}
function W_(e, t) {
  return e != null && j_(e, t, L_);
}
function K_(e, t) {
  return t.length < 2 ? e : kv(e, Kz(t, 0, -1));
}
ic && ic.isRegExp;
var G_ = P_(function(e, t, a) {
  return e + (a ? "-" : "") + t.toLowerCase();
}), H_ = Object.prototype, Y_ = H_.hasOwnProperty;
function Z_(e, t) {
  t = Do(t, e);
  var a = -1, r = t.length;
  if (!r)
    return !0;
  for (; ++a < r; ) {
    var n = sn(t[a]);
    if (n === "__proto__" && !Y_.call(e, "__proto__") || (n === "constructor" || n === "prototype") && a < r - 1)
      return !1;
  }
  var o = K_(e, t);
  return o == null || delete o[sn(V_(t))];
}
function Q_(e, t, a, r) {
  if (!Ta(e))
    return e;
  t = Do(t, e);
  for (var n = -1, o = t.length, i = o - 1, l = e; l != null && ++n < o; ) {
    var s = sn(t[n]), d = a;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (n != i) {
      var c = l[s];
      d = void 0, d === void 0 && (d = Ta(c) ? c : hv(t[n + 1]) ? [] : {});
    }
    nz(l, s, d), l = l[s];
  }
  return e;
}
function zs(e, t, a) {
  return e == null ? e : Q_(e, t, a);
}
function J_(e, t) {
  return e == null ? !0 : Z_(e, t);
}
const Dv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ So()]),
  /* @__PURE__ */ ht(Number),
  /* @__PURE__ */ cs()
), Pv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ fs()]),
  /* @__PURE__ */ ht((e) => e === !0 || e === "true")
), jv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ _o()]),
  /* @__PURE__ */ ht((e) => e instanceof Date ? e : new Date(e)),
  /* @__PURE__ */ ht((e) => e && ao(e, "yyyy-MM-dd"))
), Iv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ _o()]),
  /* @__PURE__ */ ht((e) => e && (e === "null" ? null : (typeof e == "string" && (e = new Date(e)), ao(e, "yyyy-MM-dd HH:mm"))))
), Fv = (e = /* @__PURE__ */ vn()) => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ hr(/* @__PURE__ */ zt())]),
  /* @__PURE__ */ ht((t) => Array.isArray(t) ? t : t.split(",")),
  /* @__PURE__ */ hr(e)
), Tv = () => /* @__PURE__ */ Yt(
  Fv(),
  /* @__PURE__ */ ht((e) => e.map(Number))
), _s = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ vs(/* @__PURE__ */ zt(), /* @__PURE__ */ vn())]),
  /* @__PURE__ */ ht((e) => typeof e == "string" ? cp.parse(e) : e),
  /* @__PURE__ */ ht((e) => {
    const t = {};
    for (const a in e)
      zs(t, a, nt(e, a));
    return t;
  })
);
function pt() {
  return _s();
}
pt.number = Dv;
pt.boolean = Pv;
pt.date = jv;
pt.datetime = Iv;
pt.array = Fv;
pt.arrayNumber = Tv;
pt.object = _s;
const X_ = () => /* @__PURE__ */ Yt(/* @__PURE__ */ zt(), /* @__PURE__ */ ht((e) => {
  const t = e.split(/[;\n]/).filter(Boolean).filter((n) => n.includes("=")).map((n) => n.trim().split("=")), a = Object.fromEntries(t), r = {};
  for (const [n, o] of Object.entries(a)) {
    let i = o;
    o.startsWith("bool:") && (i = o.replace("bool:", "").trim() === "true"), zs(r, n, i);
  }
  return r;
})), Ss = (e = {}) => /* @__PURE__ */ ms({
  page: /* @__PURE__ */ vr(pt.number(), 1),
  limit: /* @__PURE__ */ vr(pt.number(), e.maxLimit || 100),
  orderBy: /* @__PURE__ */ Xn(e.orderFields ? pt.array(/* @__PURE__ */ qo(e.orderFields)) : pt.array(/* @__PURE__ */ zt()), []),
  orderDirection: /* @__PURE__ */ Xn(pt.array(/* @__PURE__ */ Ht([/* @__PURE__ */ Jn("asc"), /* @__PURE__ */ Jn("desc")])), [])
});
function Nv(e = {}) {
  return Ss(e);
}
Nv.base = Ss;
const eS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: Al,
  arrayNumber: Tv,
  base: Ss,
  boolean: Pv,
  date: jv,
  datetime: Iv,
  keyValue: X_,
  number: Dv,
  object: _s,
  pagination: Nv,
  url: pt
}, Symbol.toStringTag, { value: "Module" }));
class tS {
  static __container_entry_key = "ValidatorService";
  v = {
    ...u1,
    extras: eS
  };
  create(t) {
    return t(this.v);
  }
  validate(t, a) {
    const r = typeof a == "function" ? a(this.v) : a, { output: n, issues: o, success: i } = /* @__PURE__ */ nn(r, t);
    if (!i) {
      const l = /* @__PURE__ */ gl(o), s = [];
      l.root && s.push(...l.root), l.nested && Object.entries(l.nested).forEach((f) => {
        const [y, p] = f;
        s.push(...p.map((g) => `${y}: ${g}`));
      });
      const d = s.length ? s.join(", ") : "Validation failed", c = new pn(d, 422);
      throw c.name = "ValidationError", Object.assign(c, { messages: s }), c;
    }
    return n;
  }
  async validateAsync(t, a) {
    const r = typeof a == "function" ? a(this.v) : a, { output: n, issues: o, success: i } = await /* @__PURE__ */ Oo(r, t);
    if (!i) {
      const l = new Error("Validation failed"), s = /* @__PURE__ */ gl(o), d = {
        ...s.root,
        ...s.nested
      };
      throw Object.assign(l, { details: d }), l;
    }
    return n;
  }
  isValid(t, a) {
    const r = typeof a == "function" ? a(this.v) : a, { success: n } = /* @__PURE__ */ nn(r, t);
    return n;
  }
}
const ro = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Vv(e) {
  return Number(e) >= 0;
}
function aS(e) {
  return typeof e == "object" && e !== null;
}
function rS(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function cc(e) {
  if (!aS(e) || rS(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Rv(e, t) {
  return Object.keys(t).forEach((a) => {
    if (cc(t[a]) && cc(e[a])) {
      e[a] || (e[a] = {}), Rv(e[a], t[a]);
      return;
    }
    e[a] = t[a];
  }), e;
}
function nS(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let a = String(t[0]);
  for (let r = 1; r < t.length; r++) {
    if (Vv(t[r])) {
      a += `[${t[r]}]`;
      continue;
    }
    a += `.${t[r]}`;
  }
  return a;
}
function oS(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(a) {
      const r = await /* @__PURE__ */ Oo(e, a, t);
      if (r.success)
        return {
          value: r.output,
          errors: []
        };
      const n = {};
      return Uv(r.issues, n), {
        errors: Object.values(n)
      };
    },
    cast(a) {
      if (e.async)
        return a;
      const r = /* @__PURE__ */ nn(e, a, t);
      if (r.success)
        return r.output;
      const n = /* @__PURE__ */ Ze(/* @__PURE__ */ vr(e));
      return ro(n) && ro(a) ? Rv(n, a) : a;
    },
    describe(a) {
      try {
        if (!a)
          return {
            required: !fc(e),
            exists: !0
          };
        const r = Cl(a, e);
        return r ? {
          required: !fc(r),
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
function Uv(e, t) {
  e.forEach((a) => {
    const r = nS(/* @__PURE__ */ zo(a) || "");
    a.issues && (Uv(a.issues.flatMap((n) => n.issues || []), t), !r) || (t[r] || (t[r] = { errors: [], path: r }), t[r].errors.push(a.message));
  });
}
function Cl(e, t) {
  var a, r, n, o;
  if (pc(t))
    return (a = t.options.map((s) => Cl(e, s)).find(Boolean)) !== null && a !== void 0 ? a : null;
  if (yc(t))
    return (r = t.options.map((s) => Cl(e, s)).find(Boolean)) !== null && r !== void 0 ? r : null;
  if (!En(t))
    return null;
  if (Lk(e))
    return t.entries[Wk(e)];
  const i = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let l = t;
  for (let s = 0; s <= i.length; s++) {
    const d = i[s];
    if (!d || !l)
      return l;
    if (pc(l) && (l = (n = l.options.find((c) => En(c) && c.entries[d])) !== null && n !== void 0 ? n : l), yc(l) && (l = (o = l.options.find((c) => En(c) && c.entries[d])) !== null && o !== void 0 ? o : l), En(l)) {
      l = l.entries[d] || null;
      continue;
    }
    Vv(d) && iS(l) && (l = l.item);
  }
  return null;
}
function fc(e) {
  return e.type === "optional";
}
function iS(e) {
  return ro(e) && "item" in e;
}
function En(e) {
  return ro(e) && "entries" in e;
}
function pc(e) {
  return e.type === "intersect";
}
function yc(e) {
  return e.type === "variant";
}
function lS() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : typeof self < "u" && self.crypto && self.crypto.randomUUID ? self.crypto.randomUUID() : typeof window < "u" && window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function sS(e = "") {
  return e + lS();
}
class gn {
  static __container_entry_key = "LoggerService";
  info(t, a) {
  }
  debug(t, a) {
  }
  warn(t, a) {
  }
  error(t, a) {
  }
  child(t) {
    return new gn();
  }
}
class qs {
  static __container_entry_key = "EmmitterService";
  handlers = [];
  debug;
  logger;
  constructor(t) {
    this.debug = t?.debug || !1, this.logger = t?.logger || new gn(), this.debug && this.logger.debug("emmitter loaded with debug mode enabled");
  }
  static create(t) {
    return new qs(t);
  }
  setDebug(t) {
    this.debug = t, this.debug && this.logger.debug("debug mode enabled");
  }
  setLogger(t) {
    this.logger = t;
  }
  on(t, a, r) {
    const n = r?.id || sS();
    if (r?.unique && this.handlers.some((i) => i.event === t && i.listener === a || i.id === n))
      return;
    const o = {
      id: n,
      event: t,
      listener: a
    };
    return this.handlers.push(o), this.debug && this.logger.debug("handler added", o), o;
  }
  once(t, a, r) {
    const n = (o, i) => {
      a(o, i), this.off(t, n);
    };
    return this.on(t, n, r);
  }
  onDebounce(t, a, r) {
    const n = N_(a, r?.debounce || 300), o = this.on(t, n, r);
    return o && (o.originalListener = a), o;
  }
  onAnyOf(t, a, r) {
    const n = [];
    for (const o of t) {
      const i = this.on(o, a, r);
      i && n.push(i);
    }
    return n;
  }
  off(t, a) {
    this.handlers = this.handlers.filter((r) => !(r.event === t && (r.listener === a || r.originalListener === a))), this.debug && this.logger.debug("handler removed", { event: t });
  }
  emit(t, a) {
    this.debug && this.logger.debug("emitting event", {
      event: t,
      args: a
    });
    const r = this.handlers.filter((n) => n.event === t);
    for (const n of r)
      Gt.sync(() => n.listener(a, { event: t }));
  }
  async emitAndWait(t, a) {
    const r = this.handlers.filter((n) => n.event === t);
    this.debug && this.logger.debug("emitting event and wait", {
      handlers: r.length,
      event: t,
      args: a
    });
    for await (const n of r)
      await n.listener(a, { event: t });
  }
  list() {
    return this.handlers;
  }
  listByEvent(t) {
    return this.handlers.filter((a) => a.event === t);
  }
  remove(t) {
    const a = Array.isArray(t) ? t : [t];
    this.handlers = this.handlers.filter((r) => !a.includes(r.id)), this.debug && this.logger.debug("handlers removed", { ids: a });
  }
  clear() {
    this.handlers = [], this.debug && this.logger.debug("all handlers cleared");
  }
  hasHandlers() {
    return this.handlers.length > 0;
  }
}
const mc = dt.proxy(qs);
class uS {
  static __container_entry_key = "LayoutService";
  components = /* @__PURE__ */ new Map();
  options = {};
  currendId = null;
  setCurrent(t) {
    this.currendId = t, mc.emit("layout:change", t);
  }
  add(t, a, r) {
    this.components.set(t, a), this.options = r || {};
  }
  has(t) {
    return this.components.has(t);
  }
  get(t) {
    const a = this.components.get(t);
    if (!a)
      throw new pn(`Layout ${t} not found`);
    return a;
  }
  getOptions() {
    return this.options;
  }
  getCurrent() {
    return this.currendId ? this.get(this.currendId) : null;
  }
  setOptions(t = {}) {
    this.options = t, mc.emit("layout:set-options", t);
  }
}
const Lv = globalThis, dS = Lv.layout || new uS();
Lv.layout = dS;
F(/* @__PURE__ */ new Map());
const cS = dt.proxy("route"), fS = dt.proxy("router");
function pS(e, t) {
  return vo() ? (ns(e, t), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Li = /* @__PURE__ */ new WeakMap();
function yS(e, t, a = {}) {
  const { mode: r = "replace", route: n = Uf(), router: o = Rf(), transform: i } = a;
  let l = (p) => p, s = (p) => p;
  typeof i == "function" ? l = i : i && (i.get && (l = i.get), i.set && (s = i.set)), Li.has(o) || Li.set(o, /* @__PURE__ */ new Map());
  const d = Li.get(o);
  let c = n.query[e];
  pS(() => {
    c = void 0;
  });
  let f;
  const y = rs((p, g) => (f = g, {
    get() {
      return p(), l(c !== void 0 ? c : Se(t));
    },
    set(h) {
      h = s(h), c !== h && (c = h === Se(t) ? void 0 : h, d.set(e, h === Se(t) ? void 0 : h), g(), _e(() => {
        if (d.size === 0) return;
        const k = Object.fromEntries(d.entries());
        d.clear();
        const { params: w, query: b, hash: S } = n;
        o[Se(r)]({
          params: w,
          query: {
            ...b,
            ...k
          },
          hash: S
        });
      }));
    }
  }));
  return ge(() => n.query[e], (p) => {
    c !== l(p) && (c = p, f());
  }, { flush: "sync" }), y;
}
const mS = (e, t, a) => yS(e, t, {
  route: Uf() || cS,
  router: Rf() || fS,
  ...a
}), fj = mS;
function hc(e) {
  return typeof e == "string" ? `'${e}'` : new hS().serialize(e);
}
const hS = /* @__PURE__ */ (function() {
  class e {
    #e = /* @__PURE__ */ new Map();
    compare(a, r) {
      const n = typeof a, o = typeof r;
      return n === "string" && o === "string" ? a.localeCompare(r) : n === "number" && o === "number" ? a - r : String.prototype.localeCompare.call(this.serialize(a, !0), this.serialize(r, !0));
    }
    serialize(a, r) {
      if (a === null) return "null";
      switch (typeof a) {
        case "string":
          return r ? a : `'${a}'`;
        case "bigint":
          return `${a}n`;
        case "object":
          return this.$object(a);
        case "function":
          return this.$function(a);
      }
      return String(a);
    }
    serializeObject(a) {
      const r = Object.prototype.toString.call(a);
      if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), a);
      const n = a.constructor, o = n === Object || n === void 0 ? "" : n.name;
      if (o !== "" && globalThis[o] === n) return this.serializeBuiltInType(o, a);
      if (typeof a.toJSON == "function") {
        const i = a.toJSON();
        return o + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(o, Object.entries(a));
    }
    serializeBuiltInType(a, r) {
      const n = this["$" + a];
      if (n) return n.call(this, r);
      if (typeof r?.entries == "function") return this.serializeObjectEntries(a, r.entries());
      throw new Error(`Cannot serialize ${a}`);
    }
    serializeObjectEntries(a, r) {
      const n = Array.from(r).sort((i, l) => this.compare(i[0], l[0]));
      let o = `${a}{`;
      for (let i = 0; i < n.length; i++) {
        const [l, s] = n[i];
        o += `${this.serialize(l, !0)}:${this.serialize(s)}`, i < n.length - 1 && (o += ",");
      }
      return o + "}";
    }
    $object(a) {
      let r = this.#e.get(a);
      return r === void 0 && (this.#e.set(a, `#${this.#e.size}`), r = this.serializeObject(a), this.#e.set(a, r)), r;
    }
    $function(a) {
      const r = Function.prototype.toString.call(a);
      return r.slice(-15) === "[native code] }" ? `${a.name || ""}()[native]` : `${a.name}(${a.length})${r.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(a) {
      let r = "[";
      for (let n = 0; n < a.length; n++) r += this.serialize(a[n]), n < a.length - 1 && (r += ",");
      return r + "]";
    }
    $Date(a) {
      try {
        return `Date(${a.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(a) {
      return `ArrayBuffer[${new Uint8Array(a).join(",")}]`;
    }
    $Set(a) {
      return `Set${this.$Array(Array.from(a).sort((r, n) => this.compare(r, n)))}`;
    }
    $Map(a) {
      return this.serializeObjectEntries("Map", a.entries());
    }
  }
  for (const t of ["Error", "RegExp", "URL"]) e.prototype["$" + t] = function(a) {
    return `${t}(${a})`;
  };
  for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + t] = function(a) {
    return `${t}[${a.join(",")}]`;
  };
  for (const t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(a) {
    return `${t}[${a.join("n,")}${a.length > 0 ? "n" : ""}]`;
  };
  return e;
})();
function ga(e, t) {
  return e === t || hc(e) === hc(t);
}
function vS(e, t, a) {
  const r = e.findIndex((l) => ga(l, t)), n = e.findIndex((l) => ga(l, a));
  if (r === -1 || n === -1) return [];
  const [o, i] = [r, n].sort((l, s) => l - s);
  return e.slice(o, i + 1);
}
function vc(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(t, e));
}
function Be(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(a);
  return [(n) => {
    const o = rn(r, n);
    if (o || o === null) return o;
    throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (n) => (as(r, n), n)];
}
function Ge() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Po(e, t, a) {
  const r = a.originalEvent.target, n = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(n);
}
function br(e) {
  return e == null;
}
function gc(e, t) {
  return br(e) ? !1 : Array.isArray(e) ? e.some((a) => ga(a, t)) : ga(e, t);
}
function Os(e) {
  return e ? e.flatMap((t) => t.type === xe ? Os(t.children) : [t]) : [];
}
const gS = ["INPUT", "TEXTAREA"];
function bc(e, t, a, r = {}) {
  if (!t || r.enableIgnoredElement && gS.includes(t.nodeName)) return null;
  const { arrowKeyOptions: n = "both", attributeName: o = "[data-reka-collection-item]", itemsArray: i = [], loop: l = !0, dir: s = "ltr", preventScroll: d = !0, focus: c = !1 } = r, [f, y, p, g, h, k] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = p || g, b = f || y;
  if (!h && !k && (!w && !b || n === "vertical" && b || n === "horizontal" && w)) return null;
  const S = a ? Array.from(a.querySelectorAll(o)) : i;
  if (!S.length) return null;
  d && e.preventDefault();
  let z = null;
  return b || w ? z = Wv(S, t, {
    goForward: w ? g : s === "ltr" ? f : y,
    loop: l
  }) : h ? z = S.at(0) || null : k && (z = S.at(-1) || null), c && z?.focus(), z;
}
function Wv(e, t, a, r = e.includes(t) ? e.length : e.length + 1) {
  if (--r === 0) return null;
  const n = e.indexOf(t);
  let o;
  if (n === -1 ? o = a.goForward ? 0 : e.length - 1 : o = a.goForward ? n + 1 : n - 1, !a.loop && (o < 0 || o >= e.length)) return null;
  const i = (o + e.length) % e.length, l = e[i];
  return l ? l.hasAttribute("disabled") && l.getAttribute("disabled") !== "false" ? Wv(e, l, a, r) : l : null;
}
const [Er] = /* @__PURE__ */ Be("ConfigProvider"), lt = /* @__PURE__ */ Gn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
function Wi(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function El(e, t, a = ".", r) {
  if (!Wi(t))
    return El(e, {}, a);
  const n = { ...t };
  for (const o of Object.keys(e)) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const i = e[o];
    i != null && (Array.isArray(i) && Array.isArray(n[o]) ? n[o] = [...i, ...n[o]] : Wi(i) && Wi(n[o]) ? n[o] = El(
      i,
      n[o],
      (a ? `${a}.` : "") + o.toString()
    ) : n[o] = i);
  }
  return n;
}
function bS(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, r) => El(a, r, ""), {})
  );
}
const kS = bS(), wS = /* @__PURE__ */ Kf(() => {
  const e = F(/* @__PURE__ */ new Map()), t = F(), a = D(() => {
    for (const o of e.value.values()) if (o) return !0;
    return !1;
  }), r = Er({ scrollBody: F(!0) }), n = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", lt.layersWithOutsidePointerEventsDisabled.size === 0 && (document.body.style.pointerEvents = ""), document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", t.value = void 0;
  };
  return ge(a, (o, i) => {
    if (!xt) return;
    if (!o) {
      i && n();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, s = {
      padding: l,
      margin: 0
    }, d = r.scrollBody?.value ? typeof r.scrollBody.value == "object" ? kS({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, s) : s : {
      padding: 0,
      margin: 0
    };
    l > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.documentElement.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), _e(() => {
      a.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function bn(e) {
  const t = Math.random().toString(36).substring(2, 7), a = wS();
  a.value.set(t, e ?? !1);
  const r = D({
    get: () => a.value.get(t) ?? !1,
    set: (n) => a.value.set(t, n)
  });
  return d0(() => {
    a.value.delete(t);
  }), r;
}
const xS = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Bopomofo}]/u, zS = /android/i;
function _S() {
  return typeof navigator < "u" && zS.test(navigator.userAgent);
}
function Kv(e) {
  const t = F(!1), a = F(!0), r = F(!1), n = D(() => t.value && a.value);
  function o() {
    t.value = !0, a.value = !0, r.value = !1;
  }
  function i(s) {
    s.data && (xS.test(s.data) ? (a.value = !0, r.value = !0) : _S() && !r.value && (a.value = !1));
  }
  function l(s) {
    _e(() => {
      t.value = !1, e?.(s);
    });
  }
  return {
    isComposing: t,
    shouldDeferInput: n,
    handleCompositionStart: o,
    handleCompositionUpdate: i,
    handleCompositionEnd: l
  };
}
function dr(e, t) {
  return e - t * Math.floor(e / t);
}
const Gv = 1721426;
function Pa(e, t, a, r) {
  t = kn(e, t);
  let n = t - 1, o = -2;
  return a <= 2 ? o = 0 : ha(t) && (o = -1), Gv - 1 + 365 * n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400) + Math.floor((367 * a - 362) / 12 + o + r);
}
function ha(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function kn(e, t) {
  return e === "BC" ? 1 - t : t;
}
function jo(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const SS = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
class Ct {
  fromJulianDay(t) {
    let a = t, r = a - Gv, n = Math.floor(r / 146097), o = dr(r, 146097), i = Math.floor(o / 36524), l = dr(o, 36524), s = Math.floor(l / 1461), d = dr(l, 1461), c = Math.floor(d / 365), f = n * 400 + i * 100 + s * 4 + c + (i !== 4 && c !== 4 ? 1 : 0), [y, p] = jo(f), g = a - Pa(y, p, 1, 1), h = 2;
    a < Pa(y, p, 3, 1) ? h = 0 : ha(p) && (h = 1);
    let k = Math.floor(((g + h) * 12 + 373) / 367), w = a - Pa(y, p, k, 1) + 1;
    return new He(y, p, k, w);
  }
  toJulianDay(t) {
    return Pa(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return SS[ha(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return ha(t.year) ? 366 : 365;
  }
  getMaximumMonthsInYear() {
    return 12;
  }
  getMaximumDaysInMonth() {
    return 31;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(t) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(t) {
    return t.era === "BC";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BC" ? "AD" : "BC", t.year = 1 - t.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const qS = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
function ba(e, t) {
  return t = st(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function As(e, t) {
  return t = st(t, e.calendar), e = $l(e), t = $l(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ki(e, t) {
  return Cs(e.calendar, t.calendar) && ba(e, t);
}
function kc(e, t) {
  return Cs(e.calendar, t.calendar) && As(e, t);
}
function Cs(e, t) {
  return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function OS(e, t) {
  return ba(e, Hv(t));
}
const AS = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
};
function Es(e, t, a) {
  let r = e.calendar.toJulianDay(e), n = a ? AS[a] : BS(t), o = Math.ceil(r + 1 - n) % 7;
  return o < 0 && (o += 7), o;
}
function CS(e) {
  return Vt(Date.now(), e);
}
function Hv(e) {
  return jS(CS(e));
}
function Yv(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function ES(e, t) {
  return wc(e) - wc(t);
}
function wc(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Gi = null;
function $r() {
  return Gi == null && (Gi = new Intl.DateTimeFormat().resolvedOptions().timeZone), Gi;
}
function $l(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function xc(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const zc = /* @__PURE__ */ new Map(), Hi = /* @__PURE__ */ new Map();
function $S(e) {
  if (Intl.Locale) {
    let a = zc.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && zc.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function BS(e) {
  let t = Hi.get(e);
  if (!t) {
    if (Intl.Locale) {
      let r = new Intl.Locale(e);
      if ("getWeekInfo" in r && (t = r.getWeekInfo(), t))
        return Hi.set(e, t), t.firstDay;
    }
    let a = $S(e);
    if (e.includes("-fw-")) {
      let r = e.split("-fw-")[1].split("-")[0];
      r === "mon" ? t = {
        firstDay: 1
      } : r === "tue" ? t = {
        firstDay: 2
      } : r === "wed" ? t = {
        firstDay: 3
      } : r === "thu" ? t = {
        firstDay: 4
      } : r === "fri" ? t = {
        firstDay: 5
      } : r === "sat" ? t = {
        firstDay: 6
      } : t = {
        firstDay: 0
      };
    } else e.includes("-ca-iso8601") ? t = {
      firstDay: 1
    } : t = {
      firstDay: a && qS[a] || 0
    };
    Hi.set(e, t);
  }
  return t.firstDay;
}
function kr(e) {
  e = st(e, new Ct());
  let t = kn(e.era, e.year);
  return Zv(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Zv(e, t, a, r, n, o, i) {
  let l = /* @__PURE__ */ new Date();
  return l.setUTCHours(r, n, o, i), l.setUTCFullYear(e, t - 1, a), l.getTime();
}
function Bl(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === $r()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: r, day: n, hour: o, minute: i, second: l } = Qv(e, t);
  return Zv(a, r, n, o, i, l, 0) - Math.floor(e / 1e3) * 1e3;
}
const _c = /* @__PURE__ */ new Map();
function Qv(e, t) {
  let a = _c.get(t);
  a || (a = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), _c.set(t, a));
  let r = a.formatToParts(new Date(e)), n = {};
  for (let o of r) o.type !== "literal" && (n[o.type] = o.value);
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: n.era === "BC" || n.era === "B" ? -n.year + 1 : +n.year,
    month: +n.month,
    day: +n.day,
    hour: n.hour === "24" ? 0 : +n.hour,
    minute: +n.minute,
    second: +n.second
  };
}
const Sc = 864e5;
function MS(e, t, a, r) {
  return (a === r ? [
    a
  ] : [
    a,
    r
  ]).filter((n) => DS(e, t, n));
}
function DS(e, t, a) {
  let r = Qv(a, t);
  return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function ea(e, t, a = "compatible") {
  let r = wr(e);
  if (t === "UTC") return kr(r);
  if (t === $r() && a === "compatible") {
    r = st(r, new Ct());
    let s = /* @__PURE__ */ new Date(), d = kn(r.era, r.year);
    return s.setFullYear(d, r.month - 1, r.day), s.setHours(r.hour, r.minute, r.second, r.millisecond), s.getTime();
  }
  let n = kr(r), o = Bl(n - Sc, t), i = Bl(n + Sc, t), l = MS(r, t, n - o, n - i);
  if (l.length === 1) return l[0];
  if (l.length > 1) switch (a) {
    // 'compatible' means 'earlier' for "fall back" transitions
    case "compatible":
    case "earlier":
      return l[0];
    case "later":
      return l[l.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (a) {
    case "earlier":
      return Math.min(n - o, n - i);
    // 'compatible' means 'later' for "spring forward" transitions
    case "compatible":
    case "later":
      return Math.max(n - o, n - i);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Jv(e, t, a = "compatible") {
  return new Date(ea(e, t, a));
}
function Vt(e, t) {
  let a = Bl(e, t), r = new Date(e + a), n = r.getUTCFullYear(), o = r.getUTCMonth() + 1, i = r.getUTCDate(), l = r.getUTCHours(), s = r.getUTCMinutes(), d = r.getUTCSeconds(), c = r.getUTCMilliseconds();
  return new zr(n < 1 ? "BC" : "AD", n < 1 ? -n + 1 : n, o, i, t, a, l, s, d, c);
}
function PS(e, t) {
  return Vt(e.getTime(), t);
}
function jS(e) {
  return new He(e.calendar, e.era, e.year, e.month, e.day);
}
function wr(e, t) {
  let a = 0, r = 0, n = 0, o = 0;
  if ("timeZone" in e) ({ hour: a, minute: r, second: n, millisecond: o } = e);
  else if ("hour" in e) return e;
  return new xr(e.calendar, e.era, e.year, e.month, e.day, a, r, n, o);
}
function st(e, t) {
  if (Cs(e.calendar, t)) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
  return r.calendar = t, r.era = a.era, r.year = a.year, r.month = a.month, r.day = a.day, Va(r), r;
}
function IS(e, t, a) {
  if (e instanceof zr)
    return e.timeZone === t ? e : TS(e, t);
  let r = ea(e, t, a);
  return Vt(r, t);
}
function FS(e) {
  let t = kr(e) - e.offset;
  return new Date(t);
}
function TS(e, t) {
  let a = kr(e) - e.offset;
  return st(Vt(a, t), e.calendar);
}
const Wr = 36e5;
function Io(e, t) {
  let a = e.copy(), r = "hour" in a ? US(a, t) : 0;
  Ml(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, Dl(a), Xv(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += r, NS(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let n = a.calendar.getYearsInEra(a);
  if (a.year > n) {
    let i = a.calendar.isInverseEra?.(a);
    a.year = n, a.month = i ? 1 : a.calendar.getMonthsInYear(a), a.day = i ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let o = a.calendar.getMonthsInYear(a);
  return a.month > o && (a.month = o, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function Ml(e, t) {
  e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function Dl(e) {
  for (; e.month < 1; )
    Ml(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Ml(e, 1);
}
function NS(e) {
  for (; e.day < 1; )
    e.month--, Dl(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Dl(e);
}
function Xv(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Va(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Xv(e);
}
function eg(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function tg(e, t) {
  return Io(e, eg(t));
}
function $s(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), Va(a), a;
}
function no(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), RS(a), a;
}
function VS(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = $n(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = $n(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = $n(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = $n(e.hour, 24), t;
}
function RS(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function $n(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function US(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, VS(e);
}
function Bs(e, t, a, r) {
  let n = e.copy();
  switch (t) {
    case "era": {
      let o = e.calendar.getEras(), i = o.indexOf(e.era);
      if (i < 0) throw new Error("Invalid era: " + e.era);
      i = ta(i, a, 0, o.length - 1, r?.round), n.era = o[i], Va(n);
      break;
    }
    case "year":
      n.calendar.isInverseEra?.(n) && (a = -a), n.year = ta(e.year, a, -1 / 0, 9999, r?.round), n.year === -1 / 0 && (n.year = 1), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e);
      break;
    case "month":
      n.month = ta(e.month, a, 1, e.calendar.getMonthsInYear(e), r?.round);
      break;
    case "day":
      n.day = ta(e.day, a, 1, e.calendar.getDaysInMonth(e), r?.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(n), Va(n), n;
}
function ag(e, t, a, r) {
  let n = e.copy();
  switch (t) {
    case "hour": {
      let o = e.hour, i = 0, l = 23;
      if (r?.hourCycle === 12) {
        let s = o >= 12;
        i = s ? 12 : 0, l = s ? 23 : 11;
      }
      n.hour = ta(o, a, i, l, r?.round);
      break;
    }
    case "minute":
      n.minute = ta(e.minute, a, 0, 59, r?.round);
      break;
    case "second":
      n.second = ta(e.second, a, 0, 59, r?.round);
      break;
    case "millisecond":
      n.millisecond = ta(e.millisecond, a, 0, 999, r?.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return n;
}
function ta(e, t, a, r, n = !1) {
  if (n) {
    e += Math.sign(t), e < a && (e = r);
    let o = Math.abs(t);
    t > 0 ? e = Math.ceil(e / o) * o : e = Math.floor(e / o) * o, e > r && (e = a);
  } else
    e += t, e < a ? e = r - (a - e - 1) : e > r && (e = a + (e - r - 1));
  return e;
}
function rg(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let n = Io(wr(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = ea(n, e.timeZone);
  } else
    a = kr(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let r = Vt(a, e.timeZone);
  return st(r, e.calendar);
}
function LS(e, t) {
  return rg(e, eg(t));
}
function WS(e, t, a, r) {
  switch (t) {
    case "hour": {
      let n = 0, o = 23;
      if (r?.hourCycle === 12) {
        let g = e.hour >= 12;
        n = g ? 12 : 0, o = g ? 23 : 11;
      }
      let i = wr(e), l = st(no(i, {
        hour: n
      }), new Ct()), s = [
        ea(l, e.timeZone, "earlier"),
        ea(l, e.timeZone, "later")
      ].filter((g) => Vt(g, e.timeZone).day === l.day)[0], d = st(no(i, {
        hour: o
      }), new Ct()), c = [
        ea(d, e.timeZone, "earlier"),
        ea(d, e.timeZone, "later")
      ].filter((g) => Vt(g, e.timeZone).day === d.day).pop(), f = kr(e) - e.offset, y = Math.floor(f / Wr), p = f % Wr;
      return f = ta(y, a, Math.floor(s / Wr), Math.floor(c / Wr), r?.round) * Wr + p, st(Vt(f, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return ag(e, t, a, r);
    case "era":
    case "year":
    case "month":
    case "day": {
      let n = Bs(wr(e), t, a, r), o = ea(n, e.timeZone);
      return st(Vt(o, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function KS(e, t, a) {
  let r = wr(e), n = no($s(r, t), t);
  if (n.compare(r) === 0) return e;
  let o = ea(n, e.timeZone, a);
  return st(Vt(o, e.timeZone), e.calendar);
}
function GS(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function ng(e) {
  let t = st(e, new Ct()), a;
  return t.era === "BC" ? a = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : a = String(t.year).padStart(4, "0"), `${a}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function og(e) {
  return `${ng(e)}T${GS(e)}`;
}
function HS(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), n = Math.floor(e % 36e5 % 6e4 / 1e3), o = `${t}${String(a).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
  return n !== 0 && (o += `:${String(n).padStart(2, "0")}`), o;
}
function YS(e) {
  return `${og(e)}${HS(e.offset)}[${e.timeZone}]`;
}
function Ms(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Ct(), a;
  if (typeof e[0] == "string") a = e.shift();
  else {
    let i = t.getEras();
    a = i[i.length - 1];
  }
  let r = e.shift(), n = e.shift(), o = e.shift();
  return [
    t,
    a,
    r,
    n,
    o
  ];
}
class He {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
  // If that behavior is desired, use the AnyCalendarDate interface instead.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [a, r, n, o, i] = Ms(t);
    this.calendar = a, this.era = r, this.year = n, this.month = o, this.day = i, Va(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new He(this.calendar, this.era, this.year, this.month, this.day) : new He(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Io(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return tg(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return $s(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, r) {
    return Bs(this, t, a, r);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Jv(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ng(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Yv(this, t);
  }
}
class xr {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [a, r, n, o, i] = Ms(t);
    this.calendar = a, this.era = r, this.year = n, this.month = o, this.day = i, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Va(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new xr(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new xr(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Io(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return tg(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return $s(no(this, t), t);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, r) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Bs(this, t, a, r);
      default:
        return ag(this, t, a, r);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return Jv(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return og(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Yv(this, t);
    return a === 0 ? ES(this, wr(t)) : a;
  }
}
class zr {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [a, r, n, o, i] = Ms(t), l = t.shift(), s = t.shift();
    this.calendar = a, this.era = r, this.year = n, this.month = o, this.day = i, this.timeZone = l, this.offset = s, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Va(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new zr(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new zr(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return rg(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return LS(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return KS(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, r) {
    return WS(this, t, a, r);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return FS(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return YS(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - IS(t, this.timeZone).toDate().getTime();
  }
}
const cr = [
  [
    1868,
    9,
    8
  ],
  [
    1912,
    7,
    30
  ],
  [
    1926,
    12,
    25
  ],
  [
    1989,
    1,
    8
  ],
  [
    2019,
    5,
    1
  ]
], ZS = [
  [
    1912,
    7,
    29
  ],
  [
    1926,
    12,
    24
  ],
  [
    1989,
    1,
    7
  ],
  [
    2019,
    4,
    30
  ]
], Rn = [
  1867,
  1911,
  1925,
  1988,
  2018
], ma = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function qc(e) {
  const t = cr.findIndex(([a, r, n]) => e.year < a || e.year === a && e.month < r || e.year === a && e.month === r && e.day < n);
  return t === -1 ? cr.length - 1 : t === 0 ? 0 : t - 1;
}
function Yi(e) {
  let t = Rn[ma.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new He(e.year + t, e.month, e.day);
}
class QS extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = qc(a);
    return new He(this, ma[r], a.year - Rn[r], a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Yi(t));
  }
  balanceDate(t) {
    let a = Yi(t), r = qc(a);
    ma[r] !== t.era && (t.era = ma[r], t.year = a.year - Rn[r]), this.constrainDate(t);
  }
  constrainDate(t) {
    let a = ma.indexOf(t.era), r = ZS[a];
    if (r != null) {
      let [n, o, i] = r, l = n - Rn[a];
      t.year = Math.max(1, Math.min(l, t.year)), t.year === l && (t.month = Math.min(o, t.month), t.month === o && (t.day = Math.min(i, t.day)));
    }
    if (t.year === 1 && a >= 0) {
      let [, n, o] = cr[a];
      t.month = Math.max(n, t.month), t.month === n && (t.day = Math.max(o, t.day));
    }
  }
  getEras() {
    return ma;
  }
  getYearsInEra(t) {
    let a = ma.indexOf(t.era), r = cr[a], n = cr[a + 1];
    if (n == null)
      return 9999 - r[0] + 1;
    let o = n[0] - r[0];
    return (t.month < n[1] || t.month === n[1] && t.day < n[2]) && o++, o;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Yi(t));
  }
  getMinimumMonthInYear(t) {
    let a = Oc(t);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let a = Oc(t);
    return a && t.month === a[1] ? a[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Oc(e) {
  if (e.year === 1) {
    let t = ma.indexOf(e.era);
    return cr[t];
  }
}
const ig = -543;
class JS extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = kn(a.era, a.year);
    return new He(this, r - ig, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Ac(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Ac(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Ac(e) {
  let [t, a] = jo(e.year + ig);
  return new He(t, a, e.month, e.day);
}
const oo = 1911;
function lg(e) {
  return e.era === "minguo" ? e.year + oo : 1 - e.year + oo;
}
function Cc(e) {
  let t = e - oo;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class XS extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = kn(a.era, a.year), [n, o] = Cc(r);
    return new He(this, n, o, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Ec(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [a, r] = Cc(lg(t));
    t.era = a, t.year = r;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Ec(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - oo;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Ec(e) {
  let [t, a] = jo(lg(e));
  return new He(t, a, e.month, e.day);
}
const $c = 1948320, Bc = [
  0,
  31,
  62,
  93,
  124,
  155,
  186,
  216,
  246,
  276,
  306,
  336
  // Esfand
];
class eq {
  fromJulianDay(t) {
    let a = t - $c, r = 1 + Math.floor((33 * a + 3) / 12053), n = 365 * (r - 1) + Math.floor((8 * r + 21) / 33), o = a - n, i = o < 216 ? Math.floor(o / 31) : Math.floor((o - 6) / 30), l = o - Bc[i] + 1;
    return new He(this, r, i + 1, l);
  }
  toJulianDay(t) {
    let a = $c - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return a += Bc[t.month - 1], a += t.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || dr(25 * t.year + 11, 33) < 8 ? 30 : 29;
  }
  getMaximumMonthsInYear() {
    return 12;
  }
  getMaximumDaysInMonth() {
    return 31;
  }
  getEras() {
    return [
      "AP"
    ];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
const Zi = 78, Mc = 80;
class tq extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = a.year - Zi, n = t - Pa(a.era, a.year, 1, 1), o;
    n < Mc ? (r--, o = ha(a.year - 1) ? 31 : 30, n += o + 155 + 90 + 10) : (o = ha(a.year) ? 31 : 30, n -= Mc);
    let i, l;
    if (n < o)
      i = 1, l = n + 1;
    else {
      let s = n - o;
      s < 155 ? (i = Math.floor(s / 31) + 2, l = s % 31 + 1) : (s -= 155, i = Math.floor(s / 30) + 7, l = s % 30 + 1);
    }
    return new He(this, r, i, l);
  }
  toJulianDay(t) {
    let a = t.year + Zi, [r, n] = jo(a), o, i;
    return ha(n) ? (o = 31, i = Pa(r, n, 3, 21)) : (o = 30, i = Pa(r, n, 3, 22)), t.month === 1 ? i + t.day - 1 : (i += o + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (i += (t.month - 7) * 30), i += t.day - 1, i);
  }
  getDaysInMonth(t) {
    return t.month === 1 && ha(t.year + Zi) || t.month >= 2 && t.month <= 6 ? 31 : 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return [
      "saka"
    ];
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "indian";
  }
}
const io = 1948440, Dc = 1948439, wt = 1300, nr = 1600, aq = 460322;
function lo(e, t, a, r) {
  return r + Math.ceil(29.5 * (a - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function sg(e, t, a) {
  let r = Math.floor((30 * (a - t) + 10646) / 10631), n = Math.min(12, Math.ceil((a - (29 + lo(t, r, 1, 1))) / 29.5) + 1), o = a - lo(t, r, n, 1) + 1;
  return new He(e, r, n, o);
}
function Pc(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Ds {
  fromJulianDay(t) {
    return sg(this, io, t);
  }
  toJulianDay(t) {
    return lo(io, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = 29 + t.month % 2;
    return t.month === 12 && Pc(t.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Pc(t.year) ? 355 : 354;
  }
  getMaximumMonthsInYear() {
    return 12;
  }
  getMaximumDaysInMonth() {
    return 30;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return [
      "AH"
    ];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class rq extends Ds {
  fromJulianDay(t) {
    return sg(this, Dc, t);
  }
  toJulianDay(t) {
    return lo(Dc, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const nq = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Pl, fr;
function Un(e) {
  return aq + fr[e - wt];
}
function Yr(e, t) {
  let a = e - wt, r = 1 << 11 - (t - 1);
  return (Pl[a] & r) === 0 ? 29 : 30;
}
function jc(e, t) {
  let a = Un(e);
  for (let r = 1; r < t; r++) a += Yr(e, r);
  return a;
}
function Ic(e) {
  return fr[e + 1 - wt] - fr[e - wt];
}
class oq extends Ds {
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Pl || (Pl = new Uint16Array(Uint8Array.from(atob(nq), (t) => t.charCodeAt(0)).buffer)), !fr) {
      fr = new Uint32Array(nr - wt + 1);
      let t = 0;
      for (let a = wt; a <= nr; a++) {
        fr[a - wt] = t;
        for (let r = 1; r <= 12; r++) t += Yr(a, r);
      }
    }
  }
  fromJulianDay(t) {
    let a = t - io, r = Un(wt), n = Un(nr);
    if (a < r || a > n) return super.fromJulianDay(t);
    {
      let o = wt - 1, i = 1, l = 1;
      for (; l > 0; ) {
        o++, l = a - Un(o) + 1;
        let s = Ic(o);
        if (l === s) {
          i = 12;
          break;
        } else if (l < s) {
          let d = Yr(o, i);
          for (i = 1; l > d; )
            l -= d, i++, d = Yr(o, i);
          break;
        }
      }
      return new He(this, o, i, a - jc(o, i) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < wt || t.year > nr ? super.toJulianDay(t) : io + jc(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < wt || t.year > nr ? super.getDaysInMonth(t) : Yr(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < wt || t.year > nr ? super.getDaysInYear(t) : Ic(t.year);
  }
}
const Fc = 347997, ug = 1080, dg = 24 * ug, iq = 29, lq = 12 * ug + 793, sq = iq * dg + lq;
function Da(e) {
  return dr(e * 7 + 1, 19) < 7;
}
function Ln(e) {
  let t = Math.floor((235 * e - 234) / 19), a = 12084 + 13753 * t, r = t * 29 + Math.floor(a / 25920);
  return dr(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function uq(e) {
  let t = Ln(e - 1), a = Ln(e);
  return Ln(e + 1) - a === 356 ? 2 : a - t === 382 ? 1 : 0;
}
function tn(e) {
  return Ln(e) + uq(e);
}
function cg(e) {
  return tn(e + 1) - tn(e);
}
function dq(e) {
  let t = cg(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    // deficient
    case 354:
      return 1;
    // normal
    case 355:
      return 2;
  }
}
function Bn(e, t) {
  if (t >= 6 && !Da(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let a = dq(e);
  return t === 2 ? a === 2 ? 30 : 29 : t === 3 ? a === 0 ? 29 : 30 : t === 6 ? Da(e) ? 30 : 0 : 30;
}
class cq {
  fromJulianDay(t) {
    let a = t - Fc, r = a * dg / sq, n = Math.floor((19 * r + 234) / 235) + 1, o = tn(n), i = Math.floor(a - o);
    for (; i < 1; )
      n--, o = tn(n), i = Math.floor(a - o);
    let l = 1, s = 0;
    for (; s < i; )
      s += Bn(n, l), l++;
    l--, s -= Bn(n, l);
    let d = i - s;
    return new He(this, n, l, d);
  }
  toJulianDay(t) {
    let a = tn(t.year);
    for (let r = 1; r < t.month; r++) a += Bn(t.year, r);
    return a + t.day + Fc;
  }
  getDaysInMonth(t) {
    return Bn(t.year, t.month);
  }
  getMonthsInYear(t) {
    return Da(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return cg(t.year);
  }
  getMaximumMonthsInYear() {
    return 13;
  }
  getMaximumDaysInMonth() {
    return 30;
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(t, a) {
    a.year !== t.year && (Da(a.year) && !Da(t.year) && a.month > 6 ? t.month-- : !Da(a.year) && Da(t.year) && a.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const jl = 1723856, Tc = 1824665, Il = 5500;
function so(e, t, a, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (a - 1) + r - 1;
}
function Ps(e, t) {
  let a = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - so(e, a, 1, 1)) / 30), n = t + 1 - so(e, a, r, 1);
  return [
    a,
    r,
    n
  ];
}
function fg(e) {
  return Math.floor(e % 4 / 3);
}
function pg(e, t) {
  return t % 13 !== 0 ? 30 : fg(e) + 5;
}
class js {
  fromJulianDay(t) {
    let [a, r, n] = Ps(jl, t), o = "AM";
    return a <= 0 && (o = "AA", a += Il), new He(this, o, a, r, n);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "AA" && (a -= Il), so(jl, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    return pg(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + fg(t.year);
  }
  getMaximumMonthsInYear() {
    return 13;
  }
  getMaximumDaysInMonth() {
    return 30;
  }
  getYearsInEra(t) {
    return t.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return [
      "AA",
      "AM"
    ];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class fq extends js {
  fromJulianDay(t) {
    let [a, r, n] = Ps(jl, t);
    return a += Il, new He(this, "AA", a, r, n);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...t) {
    super(...t), this.identifier = "ethioaa";
  }
}
class pq extends js {
  fromJulianDay(t) {
    let [a, r, n] = Ps(Tc, t), o = "CE";
    return a <= 0 && (o = "BCE", a = 1 - a), new He(this, o, a, r, n);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), so(Tc, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), pg(a, t.month);
  }
  isInverseEra(t) {
    return t.era === "BCE";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BCE" ? "CE" : "BCE", t.year = 1 - t.year);
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(t) {
    return t.era === "BCE" ? 9999 : 9715;
  }
  constructor(...t) {
    super(...t), this.identifier = "coptic";
  }
}
function yq(e) {
  switch (e) {
    case "buddhist":
      return new JS();
    case "ethiopic":
      return new js();
    case "ethioaa":
      return new fq();
    case "coptic":
      return new pq();
    case "hebrew":
      return new cq();
    case "indian":
      return new tq();
    case "islamic-civil":
      return new Ds();
    case "islamic-tbla":
      return new rq();
    case "islamic-umalqura":
      return new oq();
    case "japanese":
      return new QS();
    case "persian":
      return new eq();
    case "roc":
      return new XS();
    default:
      return new Ct();
  }
}
let Qi = /* @__PURE__ */ new Map();
class Xt {
  constructor(t, a = {}) {
    this.formatter = yg(t, a), this.options = a;
  }
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, a) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, a);
    if (a < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(a)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, a) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, a);
    if (a < t) throw new RangeError("End date must be >= start date");
    let r = this.formatter.formatToParts(t), n = this.formatter.formatToParts(a);
    return [
      ...r.map((o) => ({
        ...o,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...n.map((o) => ({
        ...o,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return vq() && (this.resolvedHourCycle || (this.resolvedHourCycle = gq(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
}
const mq = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function yg(e, t = {}) {
  if (typeof t.hour12 == "boolean" && hq()) {
    t = {
      ...t
    };
    let n = mq[String(t.hour12)][e.split("-")[0]], o = t.hour12 ? "h12" : "h23";
    t.hourCycle = n ?? o, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((n, o) => n[0] < o[0] ? -1 : 1).join() : "");
  if (Qi.has(a)) return Qi.get(a);
  let r = new Intl.DateTimeFormat(e, t);
  return Qi.set(a, r), r;
}
let Ji = null;
function hq() {
  return Ji == null && (Ji = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Ji;
}
let Xi = null;
function vq() {
  return Xi == null && (Xi = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Xi;
}
function gq(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = yg(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), r = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((o) => o.type === "hour").value, 10), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((o) => o.type === "hour").value, 10);
  if (r === 0 && n === 23) return "h23";
  if (r === 24 && n === 23) return "h24";
  if (r === 0 && n === 11) return "h11";
  if (r === 12 && n === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function Nt(e, t = $r()) {
  return Is(e) ? e.toDate() : e.toDate(t);
}
function bq(e) {
  return e instanceof xr;
}
function Is(e) {
  return e instanceof zr;
}
function kq(e) {
  return bq(e) || Is(e);
}
function pr(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else return e.set({ day: 100 }).day;
}
function Mn(e, t) {
  return e.compare(t) < 0;
}
function el(e, t) {
  return e.compare(t) > 0;
}
function wq(e, t, a) {
  const r = Es(e, a, "sun");
  return t > r ? e.subtract({ days: r + 7 - t }) : t === r ? e : e.subtract({ days: r - t });
}
function xq(e, t, a) {
  const r = Es(e, a, "sun"), n = t === 0 ? 6 : t - 1;
  return r === n ? e : r > n ? e.add({ days: 7 - r + n }) : e.add({ days: n - r });
}
function zq(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: r = "day", locale: n = "en" } = e;
  if (Array.isArray(t) && t.length) return t.at(-1).copy();
  if (t && !Array.isArray(t)) return t.copy();
  if (a) return a.copy();
  const o = /* @__PURE__ */ new Date(), i = o.getFullYear(), l = o.getMonth() + 1, s = o.getDate(), d = [
    "hour",
    "minute",
    "second"
  ], c = new Xt(n), f = yq(c.resolvedOptions().calendar);
  return d.includes(r ?? "day") ? st(new xr(i, l, s, 0, 0, 0), f) : st(new He(i, l, s), f);
}
function _q(e, t) {
  const a = [];
  for (let r = 0; r < e.length; r += t) a.push(e.slice(r, r + t));
  return a;
}
function Sq(e) {
  const t = e.querySelector("[data-selected]");
  if (t) return t.focus();
  const a = e.querySelector("[data-today]");
  if (a) return a.focus();
  const r = e.querySelector("[data-value]:not([data-outside-view]):not([data-disabled])");
  if (r) return r.focus();
}
function Nc(e, t) {
  const a = [];
  let r = e.add({ days: 1 });
  const n = t;
  for (; r.compare(n) < 0; )
    a.push(r), r = r.add({ days: 1 });
  return a;
}
function tl(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: r, locale: n } = e, o = pr(t), i = Array.from({ length: o }, (k, w) => t.set({ day: w + 1 })), l = $l(t), s = xc(t), d = wq(l, a, n), c = xq(s, a, n), f = Nc(d.subtract({ days: 1 }), l), y = Nc(s, c.add({ days: 1 })), p = f.length + i.length + y.length;
  if (r && p < 42) {
    const k = 42 - p;
    let w = y.at(-1);
    w || (w = xc(t));
    const b = Array.from({ length: k }, (S, z) => {
      const $ = z + 1;
      return w.add({ days: $ });
    });
    y.push(...b);
  }
  const g = f.concat(i, y), h = _q(g, 7);
  return {
    value: t,
    cells: g,
    rows: h
  };
}
function Aa(e) {
  const { numberOfMonths: t, dateObj: a, ...r } = e, n = [];
  if (!t || t === 1)
    return n.push(tl({
      ...r,
      dateObj: a
    })), n;
  n.push(tl({
    ...r,
    dateObj: a
  }));
  for (let o = 1; o < t; o++) {
    const i = a.add({ months: o });
    n.push(tl({
      ...r,
      dateObj: i
    }));
  }
  return n;
}
function qq(e) {
  const t = new He(2025, 1, 6);
  return (1 - Es(t, e) + 7) % 7;
}
function Oq(e, t = {}) {
  const a = F(e);
  function r() {
    return a.value;
  }
  function n(k) {
    a.value = k;
  }
  function o(k, w) {
    return new Xt(a.value, {
      ...t,
      ...w
    }).format(k);
  }
  function i(k, w = !0) {
    return kq(k) && w ? o(Nt(k), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Nt(k), { dateStyle: "long" });
  }
  function l(k, w = {}) {
    return new Xt(a.value, {
      ...t,
      month: "long",
      year: "numeric",
      ...w
    }).format(k);
  }
  function s(k, w = {}) {
    return new Xt(a.value, {
      ...t,
      month: "long",
      ...w
    }).format(k);
  }
  function d() {
    const k = Hv($r());
    return [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ].map((w) => ({
      label: s(Nt(k.set({ month: w }))),
      value: w
    }));
  }
  function c(k, w = {}) {
    return new Xt(a.value, {
      ...t,
      year: "numeric",
      ...w
    }).format(k);
  }
  function f(k, w) {
    return Is(k) ? new Xt(a.value, {
      ...t,
      ...w,
      timeZone: k.timeZone
    }).formatToParts(Nt(k)) : new Xt(a.value, {
      ...t,
      ...w
    }).formatToParts(Nt(k));
  }
  function y(k, w = "narrow") {
    return new Xt(a.value, {
      ...t,
      weekday: w
    }).format(k);
  }
  function p(k) {
    const w = new Xt(a.value, {
      ...t,
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(k).find((b) => b.type === "dayPeriod")?.value;
    return w === "PM" || w === "pm" || w === "p.m." ? "PM" : "AM";
  }
  const g = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function h(k, w, b = {}) {
    const S = {
      ...g,
      ...b
    }, z = f(k, S).find(($) => $.type === w);
    return z ? z.value : "";
  }
  return {
    setLocale: n,
    getLocale: r,
    fullMonth: s,
    fullYear: c,
    fullMonthAndYear: l,
    toParts: f,
    custom: o,
    part: h,
    dayPeriod: p,
    selectedDate: i,
    dayOfWeek: y,
    getMonths: d
  };
}
function ia(e) {
  const t = Er({ dir: F("ltr") });
  return D(() => e?.value || t.dir?.value || "ltr");
}
function Br(e) {
  const t = Kt(), a = t?.type.emits, r = {};
  return a?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), a?.forEach((n) => {
    r[Dk(Df(n))] = (...o) => e(n, ...o);
  }), r;
}
function Aq(e) {
  const t = D(() => u(e)), a = D(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (r, n) => n.length === 0 ? !0 : (r = r.normalize("NFC"), n = n.normalize("NFC"), a.value.compare(r.slice(0, n.length), n) === 0),
    endsWith: (r, n) => n.length === 0 ? !0 : (r = r.normalize("NFC"), n = n.normalize("NFC"), a.value.compare(r.slice(-n.length), n) === 0),
    contains: (r, n) => {
      if (n.length === 0) return !0;
      r = r.normalize("NFC"), n = n.normalize("NFC");
      let o = 0;
      const i = n.length;
      for (; o + i <= r.length; o++) {
        const l = r.slice(o, o + i);
        if (a.value.compare(n, l) === 0) return !0;
      }
      return !1;
    }
  };
}
let al = 0;
function Fo() {
  it((e) => {
    if (!xt) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Vc()), document.body.insertAdjacentElement("beforeend", t[1] ?? Vc()), al++, e(() => {
      al === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((a) => a.remove()), al--;
    });
  });
}
function Vc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function To(e) {
  return D(() => Se(e) ? !!Lt(e)?.closest("form") : !0);
}
function de() {
  const e = Kt(), t = F(), a = D(() => r());
  Pk(() => {
    a.value !== r() && jk(t);
  });
  function r() {
    return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : Lt(t);
  }
  const n = Object.assign({}, e.exposed), o = {};
  for (const l in e.props) Object.defineProperty(o, l, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[l]
  });
  if (Object.keys(n).length > 0) for (const l in n) Object.defineProperty(o, l, {
    enumerable: !0,
    configurable: !0,
    get: () => n[l]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function i(l) {
    if (t.value = l, !!l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), !(l instanceof Element) && !Object.hasOwn(l, "$el"))) {
      const s = l.$.exposed, d = Object.assign({}, o);
      for (const c in s) Object.defineProperty(d, c, {
        enumerable: !0,
        configurable: !0,
        get: () => s[c]
      });
      e.exposed = d;
    }
  }
  return {
    forwardRef: i,
    currentRef: t,
    currentElement: a
  };
}
function Fe(e) {
  const t = Kt(), a = Object.keys(t?.type.props ?? {}).reduce((n, o) => {
    const i = (t?.type.props[o]).default;
    return i !== void 0 && (n[o] = i), n;
  }, {}), r = Ba(e);
  return D(() => {
    const n = {}, o = t?.vnode.props ?? {};
    return Object.keys(o).forEach((i) => {
      n[Df(i)] = o[i];
    }), Object.keys({
      ...a,
      ...n
    }).reduce((i, l) => (r.value[l] !== void 0 && (i[l] = r.value[l]), i), {});
  });
}
function Me(e, t) {
  const a = Fe(e), r = t ? Br(t) : {};
  return D(() => ({
    ...a.value,
    ...r
  }));
}
function mg() {
  const e = Kt()?.vnode?.scopeId;
  return e ? { [e]: "" } : {};
}
var Cq = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, or = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Pn = {}, rl = 0, hg = function(e) {
  return e && (e.host || hg(e.parentNode));
}, Eq = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var r = hg(a);
    return r && e.contains(r) ? r : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, $q = function(e, t, a, r) {
  var n = Eq(t, Array.isArray(e) ? e : [e]);
  Pn[a] || (Pn[a] = /* @__PURE__ */ new WeakMap());
  var o = Pn[a], i = [], l = /* @__PURE__ */ new Set(), s = new Set(n), d = function(f) {
    !f || l.has(f) || (l.add(f), d(f.parentNode));
  };
  n.forEach(d);
  var c = function(f) {
    !f || s.has(f) || Array.prototype.forEach.call(f.children, function(y) {
      if (l.has(y))
        c(y);
      else
        try {
          var p = y.getAttribute(r), g = p !== null && p !== "false", h = (or.get(y) || 0) + 1, k = (o.get(y) || 0) + 1;
          or.set(y, h), o.set(y, k), i.push(y), h === 1 && g && Dn.set(y, !0), k === 1 && y.setAttribute(a, "true"), g || y.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", y, w);
        }
    });
  };
  return c(t), l.clear(), rl++, function() {
    i.forEach(function(f) {
      var y = or.get(f) - 1, p = o.get(f) - 1;
      or.set(f, y), o.set(f, p), y || (Dn.has(f) || f.removeAttribute(r), Dn.delete(f)), p || f.removeAttribute(a);
    }), rl--, rl || (or = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Pn = {});
  };
}, Bq = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), n = Cq(e);
  return n ? (r.push.apply(r, Array.from(n.querySelectorAll("[aria-live], script"))), $q(r, n, a, "aria-hidden")) : function() {
    return null;
  };
};
function wn(e) {
  let t;
  ge(() => Lt(e), (a) => {
    let r = !1;
    try {
      r = !!a?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    a && !r ? t = Bq(a) : t && t();
  }), _t(() => {
    t && t();
  });
}
let Mq = 0;
function et(e, t = "reka") {
  let a;
  const r = Er({ useId: void 0 });
  return r.useId ? a = r.useId() : "useId" in Ou ? a = Ou.useId?.() : a = `${++Mq}`, t ? `${t}-${a}` : a;
}
function vg() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function Dq(e) {
  const t = Er({ locale: F("en") });
  return D(() => e?.value || t.locale?.value || "en");
}
function Pq(e) {
  const t = F(), a = D(() => t.value?.width ?? 0), r = D(() => t.value?.height ?? 0);
  let n;
  return Ae(() => {
    const o = Lt(e);
    o ? (t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    }, n = new ResizeObserver((i) => {
      if (!Array.isArray(i) || !i.length) return;
      const l = i[0];
      let s, d;
      if ("borderBoxSize" in l) {
        const c = l.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
        s = f.inlineSize, d = f.blockSize;
      } else
        s = o.offsetWidth, d = o.offsetHeight;
      t.value = {
        width: s,
        height: d
      };
    }), n.observe(o, { box: "border-box" })) : t.value = void 0;
  }), _t(() => {
    n?.disconnect(), n = void 0;
  }), {
    width: a,
    height: r
  };
}
function jq(e, t) {
  const a = F(e);
  function r(n) {
    return t[a.value][n] ?? a.value;
  }
  return {
    state: a,
    dispatch: (n) => {
      a.value = r(n);
    }
  };
}
function No(e) {
  const t = Gf("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const n = Ge(), o = r.map((c) => ({
          ...c,
          textValue: c.value?.textValue ?? c.ref.textContent?.trim() ?? ""
        })), i = o.find((c) => c.ref === n), l = o.map((c) => c.textValue), s = Fq(l, t.value, i?.textValue), d = o.find((c) => c.textValue === s);
        return d && d.ref.focus(), d?.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Iq(e, t) {
  return e.map((a, r) => e[(t + r) % e.length]);
}
function Fq(e, t, a) {
  const r = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, n = a ? e.indexOf(a) : -1;
  let o = Iq(e, Math.max(n, 0));
  r.length === 1 && (o = o.filter((l) => l !== a));
  const i = o.find((l) => l.toLowerCase().startsWith(r.toLowerCase()));
  return i !== a ? i : void 0;
}
function Tq(e, t) {
  const a = F({}), r = F("none"), n = F(e), o = e.value ? "mounted" : "unmounted";
  let i;
  const l = t.value?.ownerDocument.defaultView ?? Sr, { state: s, dispatch: d } = jq(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (h) => {
    if (xt) {
      const k = new CustomEvent(h, {
        bubbles: !1,
        cancelable: !1
      });
      t.value?.dispatchEvent(k);
    }
  };
  ge(e, async (h, k) => {
    const w = k !== h;
    if (await _e(), w) {
      const b = r.value, S = jn(t.value);
      h ? (d("MOUNT"), c("enter"), S === "none" && c("after-enter")) : S === "none" || S === "undefined" || a.value?.display === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : k && b !== S ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const f = (h) => {
    if (h.target !== t.value) return;
    const k = jn(t.value), w = k.includes(CSS.escape(h.animationName)), b = s.value === "mounted" ? "enter" : "leave";
    if (w && (c(`after-${b}`), d("ANIMATION_END"), !n.value)) {
      const S = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = l?.setTimeout(() => {
        t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = S);
      });
    }
    k === "none" && d("ANIMATION_END");
  }, y = (h) => {
    h.target === t.value && (r.value = jn(t.value));
  }, p = ge(t, (h, k) => {
    h ? (a.value = getComputedStyle(h), h.addEventListener("animationstart", y), h.addEventListener("animationcancel", f), h.addEventListener("animationend", f)) : (d("ANIMATION_END"), i !== void 0 && l?.clearTimeout(i), k?.removeEventListener("animationstart", y), k?.removeEventListener("animationcancel", f), k?.removeEventListener("animationend", f));
  }, { immediate: !0 }), g = ge(s, () => {
    const h = jn(t.value);
    r.value = s.value === "mounted" ? h : "none";
  });
  return _t(() => {
    p(), g(), t.value && (t.value.removeEventListener("animationstart", y), t.value.removeEventListener("animationcancel", f), t.value.removeEventListener("animationend", f)), i !== void 0 && l?.clearTimeout(i);
  }), { isPresent: D(() => ["mounted", "unmountSuspended"].includes(s.value)) };
}
function jn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var za = /* @__PURE__ */ O({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: a }) {
    const { present: r, forceMount: n } = Ye(e), o = F(), { isPresent: i } = Tq(r, o);
    a({ present: i });
    let l = t.default({ present: i.value });
    l = Os(l || []);
    const s = Kt();
    if (l && l?.length > 1) {
      const d = s?.parent?.type.name ? `<${s.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((c) => `  - ${c}`).join(`
`)
      ].join(`
`));
    }
    return () => n.value || r.value || i.value ? aa(t.default({ present: i.value })[0], { ref: (d) => {
      const c = Lt(d);
      return typeof c?.hasAttribute > "u" || (c?.hasAttribute("data-reka-popper-content-wrapper") ? o.value = c.firstElementChild : o.value = c), c;
    } }) : null;
  }
});
const uo = /* @__PURE__ */ O({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      if (!a.default) return null;
      const r = Os(a.default()), n = r.findIndex((s) => s.type !== Ik);
      if (n === -1) return r;
      const o = r[n];
      delete o.props?.ref;
      const i = o.props ? I(t, o.props) : t, l = Fk({
        ...o,
        props: {}
      }, i);
      return r.length === 1 ? l : (r[n] = l, r);
    };
  }
}), Nq = [
  "area",
  "img",
  "input"
], ie = /* @__PURE__ */ O({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: a }) {
    const r = e.asChild ? "template" : e.as;
    return typeof r == "string" && Nq.includes(r) ? () => aa(r, t) : r !== "template" ? () => aa(e.as, t, { default: a.default }) : () => aa(uo, t, { default: a.default });
  }
});
function Wt() {
  const e = F(), t = D(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : Lt(e));
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Zt, Vq] = /* @__PURE__ */ Be("DialogRoot");
var Rq = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, r = /* @__PURE__ */ Xe(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), n = F(), o = F(), { modal: i, unmountOnHide: l } = Ye(a);
    return Vq({
      open: r,
      modal: i,
      unmountOnHide: l,
      openModal: () => {
        r.value = !0;
      },
      onOpenChange: (s) => {
        r.value = s;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: n,
      contentElement: o
    }), (s, d) => A(s.$slots, "default", {
      open: u(r),
      close: () => r.value = !1
    });
  }
}), gg = Rq, Uq = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    de();
    const a = Zt();
    return (r, n) => (v(), x(u(ie), I(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: n[0] || (n[0] = (o) => u(a).onOpenChange(!1))
    }), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), Fs = Uq;
const Lq = "dismissableLayer.pointerDownOutside", Wq = "dismissableLayer.focusOutside";
function bg(e, t) {
  if (!(t instanceof Element)) return !1;
  const a = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), n = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(a && (r === a || n.indexOf(r) < n.indexOf(a)));
}
function Kq(e, t, a = !0) {
  const r = t?.value?.ownerDocument ?? globalThis?.document, n = F(!1), o = F(() => {
  });
  return it((i) => {
    if (!xt || !Se(a)) return;
    const l = async (d) => {
      const c = d.target;
      if (!(!t?.value || !c)) {
        if (bg(t.value, c)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let f = function() {
            Po(Lq, e, y);
          };
          const y = { originalEvent: d };
          d.pointerType === "touch" ? (r.removeEventListener("click", o.value), o.value = f, r.addEventListener("click", o.value, { once: !0 })) : f();
        } else r.removeEventListener("click", o.value);
        n.value = !1;
      }
    }, s = window.setTimeout(() => {
      r.addEventListener("pointerdown", l);
    }, 0);
    i(() => {
      window.clearTimeout(s), r.removeEventListener("pointerdown", l), r.removeEventListener("click", o.value);
    });
  }), { onPointerDownCapture: () => {
    Se(a) && (n.value = !0);
  } };
}
function Gq(e, t, a = !0) {
  const r = t?.value?.ownerDocument ?? globalThis?.document, n = F(!1);
  return it((o) => {
    if (!xt || !Se(a)) return;
    const i = async (l) => {
      if (!t?.value) return;
      await _e(), await _e();
      const s = l.target;
      !t.value || !s || bg(t.value, s) || l.target && !n.value && Po(Wq, e, { originalEvent: l });
    };
    r.addEventListener("focusin", i), o(() => r.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Se(a) && (n.value = !0);
    },
    onBlurCapture: () => {
      Se(a) && (n.value = !1);
    }
  };
}
var Hq = /* @__PURE__ */ O({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, { forwardRef: n, currentElement: o } = de(), i = D(() => o.value?.ownerDocument ?? globalThis.document), l = D(() => lt.layersRoot), s = D(() => o.value ? Array.from(l.value).indexOf(o.value) : -1), d = D(() => lt.layersWithOutsidePointerEventsDisabled.size > 0), c = D(() => {
      const p = Array.from(l.value), [g] = [...lt.layersWithOutsidePointerEventsDisabled].slice(-1), h = p.indexOf(g);
      return s.value >= h;
    }), f = Kq(async (p) => {
      const g = [...lt.branches].some((h) => h?.contains(p.target));
      !a.present || !c.value || g || (r("pointerDownOutside", p), r("interactOutside", p), await _e(), p.defaultPrevented || r("dismiss"));
    }, o), y = Gq((p) => {
      const g = [...lt.branches].some((h) => h?.contains(p.target));
      !a.present || g || (r("focusOutside", p), r("interactOutside", p), p.defaultPrevented || r("dismiss"));
    }, o);
    return y0("Escape", (p) => {
      !a.present || s.value !== l.value.size - 1 || (r("escapeKeyDown", p), p.defaultPrevented || r("dismiss"));
    }), ge([
      o,
      () => a.disableOutsidePointerEvents,
      () => a.present
    ], ([p, g, h], k, w) => {
      !p || !h || g && (lt.layersWithOutsidePointerEventsDisabled.size === 0 && (lt.originalBodyPointerEvents = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), lt.layersWithOutsidePointerEventsDisabled.add(p), w(() => {
        lt.layersWithOutsidePointerEventsDisabled.delete(p), lt.layersWithOutsidePointerEventsDisabled.size === 0 && !br(lt.originalBodyPointerEvents) && (i.value.body.style.pointerEvents = lt.originalBodyPointerEvents);
      }));
    }, { immediate: !0 }), ge([o, () => a.present], ([p, g], h, k) => {
      !p || !g || (l.value.add(p), k(() => {
        l.value.delete(p);
      }));
    }, { immediate: !0 }), it((p) => {
      p(() => {
        o.value && (l.value.delete(o.value), lt.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (p, g) => (v(), x(u(ie), {
      ref: u(n),
      "as-child": p.asChild,
      as: p.as,
      "data-dismissable-layer": "",
      style: ut({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: u(y).onFocusCapture,
      onBlurCapture: u(y).onBlurCapture,
      onPointerdownCapture: u(f).onPointerDownCapture
    }, {
      default: m(() => [A(p.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), xn = Hq;
const Yq = /* @__PURE__ */ Jk(() => F([]));
function Zq() {
  const e = Yq();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && a?.pause(), e.value = Rc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      e.value = Rc(e.value, t), e.value[0]?.resume();
    }
  };
}
function Rc(e, t) {
  const a = [...e], r = a.indexOf(t);
  return r !== -1 && a.splice(r, 1), a;
}
const nl = "focusScope.autoFocusOnMount", ol = "focusScope.autoFocusOnUnmount", Uc = {
  bubbles: !1,
  cancelable: !0
};
function Qq(e, { select: t = !1 } = {}) {
  const a = Ge();
  for (const r of e)
    if (ya(r, { select: t }), Ge() !== a) return !0;
}
function Jq(e) {
  const t = kg(e), a = Lc(t, e), r = Lc(t.reverse(), e);
  return [a, r];
}
function kg(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const n = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || n ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function Lc(e, t) {
  for (const a of e) if (!Xq(a, { upTo: t })) return a;
}
function Xq(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function eO(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ya(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = Ge();
    e.focus({ preventScroll: !0 }), e !== a && eO(e) && t && e.select();
  }
}
var tO = /* @__PURE__ */ O({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    present: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, r = t, { currentRef: n, currentElement: o } = de(), i = F(null), l = Zq(), s = /* @__PURE__ */ Gn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    it((f) => {
      if (!xt) return;
      const y = o.value;
      if (!a.trapped) return;
      function p(w) {
        if (s.paused || !y) return;
        const b = w.target;
        y.contains(b) ? i.value = b : ya(i.value, { select: !0 });
      }
      function g(w) {
        if (s.paused || !y) return;
        const b = w.relatedTarget;
        b !== null && (y.contains(b) || ya(i.value, { select: !0 }));
      }
      function h(w) {
        const b = i.value;
        b === null || !w.some((S) => S.removedNodes.length > 0) || y.contains(b) || ya(y);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", g);
      const k = new MutationObserver(h);
      y && k.observe(y, {
        childList: !0,
        subtree: !0
      }), f(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", g), k.disconnect();
      });
    });
    function d(f, y) {
      const p = new CustomEvent(nl, Uc), g = (h) => r("mountAutoFocus", h);
      f.addEventListener(nl, g), f.dispatchEvent(p), f.removeEventListener(nl, g), p.defaultPrevented || (Qq(kg(f), { select: !0 }), Ge() === y && ya(f));
    }
    it(async (f) => {
      const y = o.value;
      if (await _e(), !y) return;
      a.present !== !1 && l.add(s);
      const p = Ge();
      !y.contains(p) && a.present !== !1 && d(y, p), f(() => {
        const g = new CustomEvent(ol, Uc), h = (k) => {
          r("unmountAutoFocus", k);
        };
        y.addEventListener(ol, h), y.dispatchEvent(g), y.setAttribute("data-focus-scope-unmounting", ""), setTimeout(() => {
          g.defaultPrevented || ya(p ?? document.body, { select: !0 }), y.removeEventListener(ol, h), l.remove(s), y.removeAttribute("data-focus-scope-unmounting");
        }, 0);
      });
    }), ge(() => a.present, async (f, y) => {
      if (!xt) return;
      if (f === !1 && y === !0) {
        l.remove(s);
        return;
      }
      if (f !== !0 || y !== !1) return;
      l.add(s), await _e();
      const p = o.value;
      if (!p) return;
      const g = Ge();
      p.contains(g) || d(p, g);
    });
    function c(f) {
      if (!a.loop && !a.trapped || s.paused) return;
      const y = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, p = Ge();
      if (y && p) {
        const g = f.currentTarget, [h, k] = Jq(g);
        h && k ? !f.shiftKey && p === k ? (f.preventDefault(), a.loop && ya(h, { select: !0 })) : f.shiftKey && p === h && (f.preventDefault(), a.loop && ya(k, { select: !0 })) : p === g && f.preventDefault();
      }
    }
    return (f, y) => (v(), x(u(ie), {
      ref_key: "currentRef",
      ref: n,
      tabindex: "-1",
      "as-child": f.asChild,
      as: f.as,
      onKeydown: c
    }, {
      default: m(() => [A(f.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), zn = tO;
const aO = "menu.itemSelect", Fl = ["Enter", " "], rO = [
  "ArrowDown",
  "PageUp",
  "Home"
], wg = [
  "ArrowUp",
  "PageDown",
  "End"
], nO = [...rO, ...wg];
[...Fl], [...Fl];
function xg(e) {
  return e ? "open" : "closed";
}
function Tl(e) {
  const t = Ge();
  for (const a of e)
    if (a === t || (a.focus(), Ge() !== t)) return;
}
function oO(e, t) {
  const { x: a, y: r } = e;
  let n = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const l = t[o].x, s = t[o].y, d = t[i].x, c = t[i].y;
    s > r != c > r && a < (d - l) * (r - s) / (c - s) + l && (n = !n);
  }
  return n;
}
function iO(e, t) {
  if (!t) return !1;
  const a = {
    x: e.clientX,
    y: e.clientY
  };
  return oO(a, t);
}
function co(e) {
  return e.pointerType === "mouse";
}
var lO = /* @__PURE__ */ O({
  __name: "DialogContentImpl",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Zt(), { forwardRef: o, currentElement: i } = de();
    return n.titleId ||= et(void 0, "reka-dialog-title"), n.descriptionId ||= et(void 0, "reka-dialog-description"), Ae(() => {
      n.contentElement = i, Ge() !== document.body && (n.triggerElement.value = Ge());
    }), (l, s) => (v(), x(u(zn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      present: a.present,
      onMountAutoFocus: s[5] || (s[5] = (d) => r("openAutoFocus", d)),
      onUnmountAutoFocus: s[6] || (s[6] = (d) => r("closeAutoFocus", d))
    }, {
      default: m(() => [_(u(xn), I({
        id: u(n).contentId,
        ref: u(o),
        as: l.as,
        "as-child": l.asChild,
        present: a.present,
        "disable-outside-pointer-events": l.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": u(n).descriptionId,
        "aria-labelledby": u(n).titleId,
        "data-state": u(xg)(u(n).open.value)
      }, l.$attrs, {
        onDismiss: s[0] || (s[0] = (d) => u(n).onOpenChange(!1)),
        onEscapeKeyDown: s[1] || (s[1] = (d) => r("escapeKeyDown", d)),
        onFocusOutside: s[2] || (s[2] = (d) => r("focusOutside", d)),
        onInteractOutside: s[3] || (s[3] = (d) => r("interactOutside", d)),
        onPointerDownOutside: s[4] || (s[4] = (d) => r("pointerDownOutside", d))
      }), {
        default: m(() => [A(l.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "as",
        "as-child",
        "present",
        "disable-outside-pointer-events",
        "aria-describedby",
        "aria-labelledby",
        "data-state"
      ])]),
      _: 3
    }, 8, ["trapped", "present"]));
  }
}), zg = lO, sO = /* @__PURE__ */ O({
  __name: "DialogContentModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !0
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Zt(), o = Br(r), { forwardRef: i, currentElement: l } = de(), s = D(() => a.present ? l.value : void 0);
    wn(s);
    const d = D(() => {
      const { present: c, ...f } = a;
      return f;
    });
    return ge(() => a.present, (c, f) => {
      !c && f && n.triggerElement.value?.focus();
    }), (c, f) => (v(), x(zg, I({
      ...d.value,
      ...u(o)
    }, {
      ref: u(i),
      present: c.present,
      "trap-focus": u(n).open.value,
      "disable-outside-pointer-events": a.disableOutsidePointerEvents,
      onCloseAutoFocus: f[0] || (f[0] = (y) => {
        y.defaultPrevented || (y.preventDefault(), u(n).triggerElement.value?.focus());
      }),
      onPointerDownOutside: f[1] || (f[1] = (y) => {
        const p = y.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && y.preventDefault();
      }),
      onFocusOutside: f[2] || (f[2] = (y) => {
        y.preventDefault();
      })
    }), {
      default: m(() => [A(c.$slots, "default")]),
      _: 3
    }, 16, [
      "present",
      "trap-focus",
      "disable-outside-pointer-events"
    ]));
  }
}), uO = sO, dO = /* @__PURE__ */ O({
  __name: "DialogContentNonModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !0
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = Br(t);
    de();
    const n = Zt(), o = F(!1), i = F(!1), l = D(() => {
      const { present: s, ...d } = a;
      return d;
    });
    return ge(() => a.present, (s, d) => {
      !s && d && (o.value || n.triggerElement.value?.focus(), o.value = !1, i.value = !1);
    }), (s, d) => (v(), x(zg, I({
      ...l.value,
      ...u(r)
    }, {
      present: s.present,
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        c.defaultPrevented || (o.value || u(n).triggerElement.value?.focus(), c.preventDefault()), o.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        c.defaultPrevented || (o.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        u(n).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: m(() => [A(s.$slots, "default")]),
      _: 3
    }, 16, ["present"]));
  }
}), cO = dO, fO = /* @__PURE__ */ O({
  __name: "DialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Zt(), o = Br(r), { forwardRef: i } = de();
    return (l, s) => (v(), x(u(za), {
      present: l.forceMount || u(n).open.value,
      "force-mount": l.forceMount || !u(n).unmountOnHide.value
    }, {
      default: m(({ present: d }) => [u(n).modal.value ? mr((v(), x(uO, I({
        key: 0,
        ref: u(i),
        present: u(n).unmountOnHide.value || d
      }, {
        ...a,
        ...u(o),
        ...l.$attrs
      }), {
        default: m(() => [A(l.$slots, "default")]),
        _: 2
      }, 1040, ["present"])), [[Kn, u(n).unmountOnHide.value || d]]) : mr((v(), x(cO, I({
        key: 1,
        ref: u(i),
        present: u(n).unmountOnHide.value || d
      }, {
        ...a,
        ...u(o),
        ...l.$attrs
      }), {
        default: m(() => [A(l.$slots, "default")]),
        _: 2
      }, 1040, ["present"])), [[Kn, u(n).unmountOnHide.value || d]])]),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), _g = fO, pO = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const t = e;
    de();
    const a = Zt();
    return (r, n) => (v(), x(u(ie), I(t, { id: u(a).descriptionId }), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Sg = pO, yO = /* @__PURE__ */ O({
  __name: "DialogOverlayImpl",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  setup(e) {
    const t = e, a = Zt(), r = bn(t.present);
    return ge(() => t.present, (n) => r.value = n), de(), (n, o) => (v(), x(u(ie), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": u(a).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" },
      onPointerdown: o[0] || (o[0] = Pe(() => {
      }, [
        "left",
        "self",
        "prevent"
      ]))
    }, {
      default: m(() => [A(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), mO = yO, hO = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Zt(), { forwardRef: a } = de();
    return (r, n) => u(t)?.modal.value ? (v(), x(u(za), {
      key: 0,
      present: r.forceMount || u(t).open.value,
      "force-mount": r.forceMount || !u(t).unmountOnHide.value
    }, {
      default: m(({ present: o }) => [mr(_(mO, I(r.$attrs, {
        ref: u(a),
        as: r.as,
        "as-child": r.asChild,
        present: u(t).unmountOnHide.value || o
      }), {
        default: m(() => [A(r.$slots, "default")]),
        _: 2
      }, 1040, [
        "as",
        "as-child",
        "present"
      ]), [[Kn, u(t).unmountOnHide.value || o]])]),
      _: 3
    }, 8, ["present", "force-mount"])) : Z("v-if", !0);
  }
}), qg = hO, vO = /* @__PURE__ */ O({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = Er({}), r = D(() => t.to ?? a.teleportTo?.value ?? "body"), n = /* @__PURE__ */ Zf();
    return (o, i) => u(n) || o.forceMount ? (v(), x(jf, {
      key: 0,
      to: r.value,
      disabled: o.disabled,
      defer: o.defer
    }, [A(o.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : Z("v-if", !0);
  }
}), Mr = vO, gO = /* @__PURE__ */ O({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Mr), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), bO = gO, kO = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const t = e, a = Zt();
    return de(), (r, n) => (v(), x(u(ie), I(t, { id: u(a).titleId }), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Og = kO, wO = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = Zt(), { forwardRef: r, currentElement: n } = de();
    return a.contentId ||= et(void 0, "reka-dialog-content"), Ae(() => {
      a.triggerElement.value = n.value;
    }), (o, i) => (v(), x(u(ie), I(t, {
      ref: u(r),
      type: o.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": u(a).open.value || !1,
      "aria-controls": u(a).open.value ? u(a).contentId : void 0,
      "data-state": u(a).open.value ? "open" : "closed",
      onClick: u(a).onOpenToggle
    }), {
      default: m(() => [A(o.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), Ag = wO, xO = /* @__PURE__ */ O({
  __name: "AlertDialogAction",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    return de(), (a, r) => (v(), x(u(Fs), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), zO = xO;
const [_O, SO] = /* @__PURE__ */ Be("AlertDialogContent");
var qO = /* @__PURE__ */ O({
  __name: "AlertDialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = Br(t);
    de();
    const n = F();
    return SO({ onCancelElementChange: (o) => {
      n.value = o;
    } }), (o, i) => (v(), x(u(_g), I({
      ...a,
      ...u(r)
    }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = Pe(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = Pe(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        _e(() => {
          n.value?.focus({ preventScroll: !0 });
        });
      })
    }), {
      default: m(() => [A(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), OO = qO, AO = /* @__PURE__ */ O({
  __name: "AlertDialogCancel",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = _O(), { forwardRef: r, currentElement: n } = de();
    return Ae(() => {
      a.onCancelElementChange(n.value);
    }), (o, i) => (v(), x(u(Fs), I(t, { ref: u(r) }), {
      default: m(() => [A(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), CO = AO, EO = /* @__PURE__ */ O({
  __name: "AlertDialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const t = e;
    return de(), (a, r) => (v(), x(u(Sg), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), $O = EO, BO = /* @__PURE__ */ O({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return de(), (a, r) => (v(), x(u(qg), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), MO = BO, DO = /* @__PURE__ */ O({
  __name: "AlertDialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Mr), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), PO = DO, jO = /* @__PURE__ */ O({
  __name: "AlertDialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    return de(), (r, n) => (v(), x(u(gg), I(u(a), { modal: !0 }), {
      default: m((o) => [A(r.$slots, "default", Ie(We(o)))]),
      _: 3
    }, 16));
  }
}), IO = jO, FO = /* @__PURE__ */ O({
  __name: "AlertDialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const t = e;
    return de(), (a, r) => (v(), x(u(Og), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), TO = FO, NO = /* @__PURE__ */ O({
  __name: "AlertDialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    return de(), (a, r) => (v(), x(u(Ag), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), VO = NO;
const Wc = "data-reka-collection-item";
function St(e = {}) {
  const { key: t = "", isProvider: a = !1 } = e, r = `${t}CollectionProvider`;
  let n;
  if (a) {
    const c = F(/* @__PURE__ */ new Map());
    n = {
      collectionRef: F(),
      itemMap: c
    }, as(r, n);
  } else n = rn(r);
  const o = (c = !1) => {
    const f = n.collectionRef.value;
    if (!f) return [];
    const y = Array.from(f.querySelectorAll(`[${Wc}]`)), p = new Map(y.map((h, k) => [h, k])), g = Array.from(n.itemMap.value.values()).sort((h, k) => (p.get(h.ref) ?? -1) - (p.get(k.ref) ?? -1));
    return c ? g : g.filter((h) => h.ref.dataset.disabled !== "");
  }, i = /* @__PURE__ */ O({
    name: "CollectionSlot",
    inheritAttrs: !1,
    setup(c, { slots: f, attrs: y }) {
      const { primitiveElement: p, currentElement: g } = Wt();
      return ge(g, () => {
        n.collectionRef.value = g.value;
      }), () => aa(uo, {
        ref: p,
        ...y
      }, f);
    }
  }), l = /* @__PURE__ */ O({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: f, attrs: y }) {
      const { primitiveElement: p, currentElement: g } = Wt();
      return it((h) => {
        if (g.value) {
          const k = Tk(g.value);
          n.itemMap.value.set(k, {
            ref: g.value,
            value: c.value
          }), h(() => n.itemMap.value.delete(k));
        }
      }), () => aa(uo, {
        ...y,
        [Wc]: "",
        ref: p
      }, f);
    }
  }), s = D(() => Array.from(n.itemMap.value.values())), d = D(() => n.itemMap.value.size);
  return {
    getItems: o,
    reactiveItems: s,
    itemMapSize: d,
    CollectionSlot: i,
    CollectionItem: l
  };
}
var RO = /* @__PURE__ */ O({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(ie), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" || t.feature === "fully-hidden" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: m(() => [A(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Cg = RO, UO = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: a, currentElement: r } = Wt(), n = D(() => t.checked ?? t.value);
    return ge(n, (o, i) => {
      if (!r.value) return;
      const l = r.value, s = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(s, "value").set;
      if (d && o !== i) {
        const c = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        d.call(l, o), l.dispatchEvent(c), l.dispatchEvent(f);
      }
    }), (o, i) => (v(), x(Cg, I({
      ref_key: "primitiveElement",
      ref: a
    }, {
      ...t,
      ...o.$attrs
    }, { as: "input" }), null, 16));
  }
}), Kc = UO, LO = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, a = D(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), r = D(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([i, l]) => ({
      name: `${t.name}[${o}][${i}]`,
      value: l
    })) : {
      name: `${t.name}[${o}]`,
      value: n
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({
      name: `${t.name}[${n}]`,
      value: o
    })) : []);
    return (n, o) => (v(), W(xe, null, [Z(" We render single input if it's required "), a.value ? (v(), x(Kc, I({ key: n.name }, {
      ...t,
      ...n.$attrs
    }, {
      name: n.name,
      value: n.value
    }), null, 16, ["name", "value"])) : (v(!0), W(xe, { key: 1 }, De(r.value, (i) => (v(), x(Kc, I({ key: i.name }, { ref_for: !0 }, {
      ...t,
      ...n.$attrs
    }, {
      name: i.name,
      value: i.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Ts = LO;
function WO(e, t, a) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => an(r, t, a)) : an(e, t, a);
}
function an(e, t, a) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof a == "function" ? a(e, t) : typeof a == "string" ? e?.[a] === t?.[a] : ga(e, t);
}
const KO = "rovingFocusGroup.onEntryFocus", GO = {
  bubbles: !1,
  cancelable: !0
}, HO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function YO(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Eg(e, t, a) {
  const r = YO(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return HO[r];
}
function $g(e, t = !1) {
  const a = Ge();
  for (const r of e)
    if (r === a || (r.focus({ preventScroll: t }), Ge() !== a)) return;
}
function ZO(e, t) {
  return e.map((a, r) => e[(t + r) % e.length]);
}
const [Vo, QO] = /* @__PURE__ */ Be("ListboxRoot");
var JO = /* @__PURE__ */ O({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    selectionBehavior: {
      type: String,
      required: !1,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, { multiple: o, highlightOnHover: i, orientation: l, disabled: s, selectionBehavior: d, dir: c } = Ye(r), { getItems: f } = St({ isProvider: !0 }), { handleTypeaheadSearch: y } = No(), { primitiveElement: p, currentElement: g } = Wt(), h = vg(), k = ia(c), w = To(g), b = F(), S = F(!1), z = F(!0), $ = /* @__PURE__ */ Xe(r, "modelValue", n, {
      defaultValue: r.defaultValue ?? (o.value ? [] : void 0),
      passive: r.modelValue === void 0,
      deep: !0
    });
    function q(X) {
      if (S.value = !0, r.multiple) {
        const K = Array.isArray($.value) ? [...$.value] : [], ne = K.findIndex((ue) => an(ue, X, r.by));
        r.selectionBehavior === "toggle" ? (ne === -1 ? K.push(X) : K.splice(ne, 1), $.value = K) : ($.value = [X], b.value = X);
      } else r.selectionBehavior === "toggle" && an($.value, X, r.by) ? $.value = void 0 : $.value = X;
      setTimeout(() => {
        S.value = !1;
      }, 1);
    }
    const C = F(null), E = F(null), M = F(!1), R = F(!1), oe = /* @__PURE__ */ Vn(), ae = /* @__PURE__ */ Vn(), H = /* @__PURE__ */ Vn();
    function re() {
      return f().map((X) => X.ref).filter((X) => X.dataset.disabled !== "");
    }
    function P(X, K = !0, ne) {
      if (!X) return;
      C.value = X, (ne ?? z.value) && C.value.focus(), K && C.value.scrollIntoView({ block: "nearest" });
      const ue = f().find((be) => be.ref === X);
      n("highlight", ue);
    }
    function L(X) {
      if (M.value) H.trigger(X);
      else {
        const K = f().find((ne) => an(ne.value, X, r.by));
        K && (C.value = K.ref, P(K.ref));
      }
    }
    function U(X) {
      if (C.value && C.value.isConnected) {
        if (X.ctrlKey || X.metaKey || X.altKey) return;
        X.preventDefault(), X.stopPropagation(), R.value || C.value.click();
      }
    }
    function G(X) {
      if (z.value) {
        if (S.value = !0, M.value) ae.trigger(X);
        else {
          const K = X.altKey || X.ctrlKey || X.metaKey;
          if (K && X.key === "a" && o.value) {
            const ne = f(), ue = ne.map((ze) => ze.value);
            $.value = [...ue], X.preventDefault();
            const be = ne.at(-1);
            be && P(be.ref);
          } else if (!K) {
            const ne = y(X.key, f());
            ne && P(ne);
          }
        }
        setTimeout(() => {
          S.value = !1;
        }, 1);
      }
    }
    function ce() {
      R.value = !0;
    }
    function T() {
      _e(() => {
        R.value = !1;
      });
    }
    function fe() {
      _e(() => {
        const X = new KeyboardEvent("keydown", { key: "PageUp" });
        Ne(X);
      });
    }
    function te(X) {
      const K = C.value;
      K?.isConnected && (E.value = K), C.value = null, n("leave", X);
    }
    function he(X) {
      const K = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if (X.currentTarget?.dispatchEvent(K), n("entryFocus", K), !K.defaultPrevented)
        if (E.value) P(E.value);
        else {
          const ne = re()?.[0];
          P(ne);
        }
    }
    function Ne(X) {
      const K = Eg(X, l.value, k.value);
      if (!K) return;
      let ne = re();
      if (C.value) {
        if (K === "last") ne.reverse();
        else if (K === "prev" || K === "next") {
          K === "prev" && ne.reverse();
          const ue = ne.indexOf(C.value);
          ne = ne.slice(ue + 1);
        }
        qe(X, ne[0]);
      }
      if (ne.length) {
        const ue = !C.value && K === "prev" ? ne.length - 1 : 0;
        P(ne[ue]);
      }
      if (M.value) return ae.trigger(X);
    }
    function qe(X, K) {
      if (!(M.value || r.selectionBehavior !== "replace" || !o.value || !Array.isArray($.value) || (X.altKey || X.ctrlKey || X.metaKey) && !X.shiftKey) && X.shiftKey) {
        const ne = f().filter((ze) => ze.ref.dataset.disabled !== "");
        let ue = ne.find((ze) => ze.ref === K)?.value;
        if (X.key === h.END ? ue = ne.at(-1)?.value : X.key === h.HOME && (ue = ne[0]?.value), !ue || !b.value) return;
        const be = vS(ne.map((ze) => ze.value), b.value, ue);
        $.value = be;
      }
    }
    async function ve(X, K = !0) {
      if (xt)
        if (await _e(), M.value) oe.trigger({
          event: X,
          scroll: K
        });
        else {
          const ne = re(), ue = ne.find((ze) => ze.dataset.state === "checked"), be = K ? void 0 : !1;
          ue ? P(ue, K, be) : ne.length && P(ne[0], K, be);
        }
    }
    let $e = !1;
    return ge($, () => {
      if (!S.value) {
        const X = $e;
        $e = !0, _e(() => {
          ve(void 0, X);
        });
      }
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: C,
      highlightItem: L,
      highlightFirstItem: fe,
      highlightSelected: ve,
      getItems: f
    }), QO({
      modelValue: $,
      onValueChange: q,
      multiple: o,
      orientation: l,
      dir: k,
      disabled: s,
      highlightOnHover: i,
      highlightedElement: C,
      isVirtual: M,
      virtualFocusHook: oe,
      virtualKeydownHook: ae,
      virtualHighlightHook: H,
      by: r.by,
      firstValue: b,
      selectionBehavior: d,
      focusable: z,
      onLeave: te,
      onEnter: he,
      changeHighlight: P,
      onKeydownEnter: U,
      onKeydownNavigation: Ne,
      onKeydownTypeAhead: G,
      onCompositionStart: ce,
      onCompositionEnd: T,
      highlightFirstItem: fe
    }), (X, K) => (v(), x(u(ie), {
      ref_key: "primitiveElement",
      ref: p,
      as: X.as,
      "as-child": X.asChild,
      dir: u(k),
      "data-disabled": u(s) ? "" : void 0,
      onPointerleave: te,
      onFocusout: K[0] || (K[0] = async (ne) => {
        const ue = ne.relatedTarget || ne.target;
        await _e(), C.value && u(g) && !u(g).contains(ue) && te(ne);
      })
    }, {
      default: m(() => [A(X.$slots, "default", { modelValue: u($) }), u(w) && X.name ? (v(), x(u(Ts), {
        key: 0,
        name: X.name,
        value: u($),
        disabled: u(s),
        required: X.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : Z("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), XO = JO, eA = /* @__PURE__ */ O({
  __name: "ListboxContent",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { CollectionSlot: t } = St(), a = Vo(), r = Gf(!1, 10);
    return (n, o) => (v(), x(u(t), null, {
      default: m(() => [_(u(ie), {
        role: "listbox",
        as: n.as,
        "as-child": n.asChild,
        tabindex: u(a).focusable.value ? u(a).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": u(a).orientation.value,
        "aria-multiselectable": !!u(a).multiple.value,
        "data-orientation": u(a).orientation.value,
        onMousedown: o[0] || (o[0] = Pe((i) => r.value = !0, ["left"])),
        onFocus: o[1] || (o[1] = (i) => {
          u(r) || u(a).onEnter(i);
        }),
        onKeydown: [
          o[2] || (o[2] = mt((i) => {
            u(a).orientation.value === "vertical" && (i.key === "ArrowLeft" || i.key === "ArrowRight") || u(a).orientation.value === "horizontal" && (i.key === "ArrowUp" || i.key === "ArrowDown") || (i.preventDefault(), u(a).focusable.value && u(a).onKeydownNavigation(i));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          mt(u(a).onKeydownEnter, ["enter"]),
          u(a).onKeydownTypeAhead
        ]
      }, {
        default: m(() => [A(n.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "tabindex",
        "aria-orientation",
        "aria-multiselectable",
        "data-orientation",
        "onKeydown"
      ])]),
      _: 3
    }));
  }
}), tA = eA, aA = /* @__PURE__ */ O({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = /* @__PURE__ */ Xe(a, "modelValue", t, {
      defaultValue: "",
      passive: a.modelValue === void 0
    }), n = Vo(), { primitiveElement: o, currentElement: i } = Wt(), l = D(() => a.disabled || n.disabled.value || !1), s = F();
    Nk(() => s.value = n.highlightedElement.value?.id), Ae(() => {
      n.focusable.value = !1, setTimeout(() => {
        a.autoFocus && i.value?.focus();
      }, 1);
    }), _t(() => {
      n.focusable.value = !0;
    });
    const { isComposing: d, shouldDeferInput: c, handleCompositionStart: f, handleCompositionUpdate: y, handleCompositionEnd: p } = Kv((b) => {
      r.value = b.target.value, n.onCompositionEnd(), n.highlightFirstItem();
    });
    function g() {
      n.onCompositionStart(), f();
    }
    function h(b) {
      c.value || (r.value = b.target.value, n.highlightFirstItem());
    }
    function k(b) {
      d.value || (b.preventDefault(), n.onKeydownNavigation(b));
    }
    function w(b) {
      d.value || n.onKeydownEnter(b);
    }
    return (b, S) => (v(), x(u(ie), {
      ref_key: "primitiveElement",
      ref: o,
      as: b.as,
      "as-child": b.asChild,
      value: u(r),
      disabled: l.value ? "" : void 0,
      "data-disabled": l.value ? "" : void 0,
      "aria-disabled": l.value ?? void 0,
      "aria-activedescendant": s.value,
      type: "text",
      onKeydown: [mt(k, [
        "down",
        "up",
        "home",
        "end"
      ]), mt(w, ["enter"])],
      onInput: h,
      onCompositionstart: g,
      onCompositionupdate: u(y),
      onCompositionend: u(p)
    }, {
      default: m(() => [A(b.$slots, "default", { modelValue: u(r) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "value",
      "disabled",
      "data-disabled",
      "aria-disabled",
      "aria-activedescendant",
      "onCompositionupdate",
      "onCompositionend"
    ]));
  }
}), rA = aA;
const [pj, nA] = /* @__PURE__ */ Be("ListboxGroup");
var oA = /* @__PURE__ */ O({
  __name: "ListboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = et(void 0, "reka-listbox-group");
    return nA({ id: a }), (r, n) => (v(), x(u(ie), I({ role: "group" }, t, { "aria-labelledby": u(a) }), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), iA = oA;
const lA = "listbox.select", [sA, uA] = /* @__PURE__ */ Be("ListboxItem");
var dA = /* @__PURE__ */ O({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = et(void 0, "reka-listbox-item"), { CollectionItem: o } = St(), { forwardRef: i, currentElement: l } = de(), s = Vo(), d = D(() => l.value != null && l.value === s.highlightedElement.value), c = D(() => WO(s.modelValue.value, a.value, s.by)), f = D(() => s.disabled.value || a.disabled);
    async function y(g) {
      r("select", g), !g?.defaultPrevented && !f.value && g && (s.onValueChange(a.value), s.changeHighlight(l.value));
    }
    function p(g) {
      const h = {
        originalEvent: g,
        value: a.value
      };
      Po(lA, y, h);
    }
    return uA({ isSelected: c }), (g, h) => (v(), x(u(o), { value: g.value }, {
      default: m(() => [os([
        d.value,
        c.value,
        f.value,
        u(s).focusable.value
      ], () => _(u(ie), I({ id: u(n) }, g.$attrs, {
        ref: u(i),
        role: "option",
        tabindex: u(s).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: g.as,
        "as-child": g.asChild,
        disabled: f.value ? "" : void 0,
        "data-disabled": f.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: p,
        onKeydown: mt(Pe(p, ["prevent"]), ["space"]),
        onPointermove: h[0] || (h[0] = () => {
          u(s).highlightedElement.value !== u(l) && u(s).highlightOnHover.value && u(s).changeHighlight(u(l), !1, !1);
        })
      }), {
        default: m(() => [A(g.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "tabindex",
        "aria-selected",
        "as",
        "as-child",
        "disabled",
        "data-disabled",
        "data-highlighted",
        "data-state",
        "onKeydown"
      ]), h, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), cA = dA, fA = /* @__PURE__ */ O({
  __name: "ListboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    de();
    const a = sA();
    return (r, n) => u(a).isSelected.value ? (v(), x(u(ie), I({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16)) : Z("v-if", !0);
  }
}), pA = fA;
const [Bg, yA] = /* @__PURE__ */ Be("PopperRoot");
var mA = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = F();
    return yA({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, r) => A(a.$slots, "default");
  }
}), Ro = mA, hA = /* @__PURE__ */ O({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: r } = de(), n = Bg();
    return Tf(() => {
      n.onAnchorChange(t.reference ?? r.value);
    }), (o, i) => (v(), x(u(ie), {
      ref: u(a),
      as: o.as,
      "as-child": o.asChild
    }, {
      default: m(() => [A(o.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Uo = hA;
function vA(e) {
  return e !== null;
}
function gA(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      const { placement: a, rects: r, middlewareData: n } = t, o = n.arrow?.centerOffset !== 0, i = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [s, d] = Nl(a), c = {
        start: e.dir === "rtl" ? "100%" : "0%",
        center: "50%",
        end: e.dir === "rtl" ? "0%" : "100%"
      }[d], f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[d], y = (n.arrow?.x ?? 0) + i / 2, p = (n.arrow?.y ?? 0) + l / 2;
      let g = "", h = "";
      return s === "bottom" ? (g = o ? c : `${y}px`, h = `${-l}px`) : s === "top" ? (g = o ? c : `${y}px`, h = `${r.floating.height + l}px`) : s === "right" ? (g = `${-l}px`, h = o ? f : `${p}px`) : s === "left" && (g = `${r.floating.width + l}px`, h = o ? f : `${p}px`), { data: {
        x: g,
        y: h
      } };
    }
  };
}
function Nl(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const bA = ["top", "right", "bottom", "left"], ka = Math.min, ft = Math.max, fo = Math.round, In = Math.floor, Ut = (e) => ({
  x: e,
  y: e
}), kA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vl(e, t, a) {
  return ft(e, ka(t, a));
}
function ra(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function na(e) {
  return e.split("-")[0];
}
function Dr(e) {
  return e.split("-")[1];
}
function Ns(e) {
  return e === "x" ? "y" : "x";
}
function Vs(e) {
  return e === "y" ? "height" : "width";
}
function Rt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Rs(e) {
  return Ns(Rt(e));
}
function wA(e, t, a) {
  a === void 0 && (a = !1);
  const r = Dr(e), n = Rs(e), o = Vs(n);
  let i = n === "x" ? r === (a ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = po(i)), [i, po(i)];
}
function xA(e) {
  const t = po(e);
  return [Rl(e), t, Rl(t)];
}
function Rl(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Gc = ["left", "right"], Hc = ["right", "left"], zA = ["top", "bottom"], _A = ["bottom", "top"];
function SA(e, t, a) {
  switch (e) {
    case "top":
    case "bottom":
      return a ? t ? Hc : Gc : t ? Gc : Hc;
    case "left":
    case "right":
      return t ? zA : _A;
    default:
      return [];
  }
}
function qA(e, t, a, r) {
  const n = Dr(e);
  let o = SA(na(e), a === "start", r);
  return n && (o = o.map((i) => i + "-" + n), t && (o = o.concat(o.map(Rl)))), o;
}
function po(e) {
  const t = na(e);
  return kA[t] + e.slice(t.length);
}
function OA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Mg(e) {
  return typeof e != "number" ? OA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yo(e) {
  const {
    x: t,
    y: a,
    width: r,
    height: n
  } = e;
  return {
    width: r,
    height: n,
    top: a,
    left: t,
    right: t + r,
    bottom: a + n,
    x: t,
    y: a
  };
}
function Yc(e, t, a) {
  let {
    reference: r,
    floating: n
  } = e;
  const o = Rt(t), i = Rs(t), l = Vs(i), s = na(t), d = o === "y", c = r.x + r.width / 2 - n.width / 2, f = r.y + r.height / 2 - n.height / 2, y = r[l] / 2 - n[l] / 2;
  let p;
  switch (s) {
    case "top":
      p = {
        x: c,
        y: r.y - n.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - n.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Dr(t)) {
    case "start":
      p[i] -= y * (a && d ? -1 : 1);
      break;
    case "end":
      p[i] += y * (a && d ? -1 : 1);
      break;
  }
  return p;
}
async function AA(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: r,
    y: n,
    platform: o,
    rects: i,
    elements: l,
    strategy: s
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: y = !1,
    padding: p = 0
  } = ra(t, e), g = Mg(p), h = l[y ? f === "floating" ? "reference" : "floating" : f], k = yo(await o.getClippingRect({
    element: (a = await (o.isElement == null ? void 0 : o.isElement(h))) == null || a ? h : h.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: s
  })), w = f === "floating" ? {
    x: r,
    y: n,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(b)) ? await (o.getScale == null ? void 0 : o.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, z = yo(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: b,
    strategy: s
  }) : w);
  return {
    top: (k.top - z.top + g.top) / S.y,
    bottom: (z.bottom - k.bottom + g.bottom) / S.y,
    left: (k.left - z.left + g.left) / S.x,
    right: (z.right - k.right + g.right) / S.x
  };
}
const CA = 50, EA = async (e, t, a) => {
  const {
    placement: r = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i
  } = a, l = i.detectOverflow ? i : {
    ...i,
    detectOverflow: AA
  }, s = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: c,
    y: f
  } = Yc(d, r, s), y = r, p = 0;
  const g = {};
  for (let h = 0; h < o.length; h++) {
    const k = o[h];
    if (!k)
      continue;
    const {
      name: w,
      fn: b
    } = k, {
      x: S,
      y: z,
      data: $,
      reset: q
    } = await b({
      x: c,
      y: f,
      initialPlacement: r,
      placement: y,
      strategy: n,
      middlewareData: g,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = S ?? c, f = z ?? f, g[w] = {
      ...g[w],
      ...$
    }, q && p < CA && (p++, typeof q == "object" && (q.placement && (y = q.placement), q.rects && (d = q.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : q.rects), {
      x: c,
      y: f
    } = Yc(d, y, s)), h = -1);
  }
  return {
    x: c,
    y: f,
    placement: y,
    strategy: n,
    middlewareData: g
  };
}, $A = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: a,
      y: r,
      placement: n,
      rects: o,
      platform: i,
      elements: l,
      middlewareData: s
    } = t, {
      element: d,
      padding: c = 0
    } = ra(e, t) || {};
    if (d == null)
      return {};
    const f = Mg(c), y = {
      x: a,
      y: r
    }, p = Rs(n), g = Vs(p), h = await i.getDimensions(d), k = p === "y", w = k ? "top" : "left", b = k ? "bottom" : "right", S = k ? "clientHeight" : "clientWidth", z = o.reference[g] + o.reference[p] - y[p] - o.floating[g], $ = y[p] - o.reference[p], q = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let C = q ? q[S] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(q))) && (C = l.floating[S] || o.floating[g]);
    const E = z / 2 - $ / 2, M = C / 2 - h[g] / 2 - 1, R = ka(f[w], M), oe = ka(f[b], M), ae = R, H = C - h[g] - oe, re = C / 2 - h[g] / 2 + E, P = Vl(ae, re, H), L = !s.arrow && Dr(n) != null && re !== P && o.reference[g] / 2 - (re < ae ? R : oe) - h[g] / 2 < 0, U = L ? re < ae ? re - ae : re - H : 0;
    return {
      [p]: y[p] + U,
      data: {
        [p]: P,
        centerOffset: re - P - U,
        ...L && {
          alignmentOffset: U
        }
      },
      reset: L
    };
  }
}), BA = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var a, r;
      const {
        placement: n,
        middlewareData: o,
        rects: i,
        initialPlacement: l,
        platform: s,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: y,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ...k
      } = ra(e, t);
      if ((a = o.arrow) != null && a.alignmentOffset)
        return {};
      const w = na(n), b = Rt(l), S = na(l) === l, z = await (s.isRTL == null ? void 0 : s.isRTL(d.floating)), $ = y || (S || !h ? [po(l)] : xA(l)), q = g !== "none";
      !y && q && $.push(...qA(l, h, g, z));
      const C = [l, ...$], E = await s.detectOverflow(t, k), M = [];
      let R = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (c && M.push(E[w]), f) {
        const re = wA(n, i, z);
        M.push(E[re[0]], E[re[1]]);
      }
      if (R = [...R, {
        placement: n,
        overflows: M
      }], !M.every((re) => re <= 0)) {
        var oe, ae;
        const re = (((oe = o.flip) == null ? void 0 : oe.index) || 0) + 1, P = C[re];
        if (P && (!(f === "alignment" && b !== Rt(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((U) => Rt(U.placement) === b ? U.overflows[0] > 0 : !0)))
          return {
            data: {
              index: re,
              overflows: R
            },
            reset: {
              placement: P
            }
          };
        let L = (ae = R.filter((U) => U.overflows[0] <= 0).sort((U, G) => U.overflows[1] - G.overflows[1])[0]) == null ? void 0 : ae.placement;
        if (!L)
          switch (p) {
            case "bestFit": {
              var H;
              const U = (H = R.filter((G) => {
                if (q) {
                  const ce = Rt(G.placement);
                  return ce === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ce === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((ce) => ce > 0).reduce((ce, T) => ce + T, 0)]).sort((G, ce) => G[1] - ce[1])[0]) == null ? void 0 : H[0];
              U && (L = U);
              break;
            }
            case "initialPlacement":
              L = l;
              break;
          }
        if (n !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Zc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Qc(e) {
  return bA.some((t) => e[t] >= 0);
}
const MA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: a,
        platform: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = ra(e, t);
      switch (n) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...o,
            elementContext: "reference"
          }), l = Zc(i, a.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Qc(l)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...o,
            altBoundary: !0
          }), l = Zc(i, a.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Qc(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Dg = /* @__PURE__ */ new Set(["left", "top"]);
async function DA(e, t) {
  const {
    placement: a,
    platform: r,
    elements: n
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)), i = na(a), l = Dr(a), s = Rt(a) === "y", d = Dg.has(i) ? -1 : 1, c = o && s ? -1 : 1, f = ra(t, e);
  let {
    mainAxis: y,
    crossAxis: p,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return l && typeof g == "number" && (p = l === "end" ? g * -1 : g), s ? {
    x: p * c,
    y: y * d
  } : {
    x: y * d,
    y: p * c
  };
}
const PA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var a, r;
      const {
        x: n,
        y: o,
        placement: i,
        middlewareData: l
      } = t, s = await DA(t, e);
      return i === ((a = l.offset) == null ? void 0 : a.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: n + s.x,
        y: o + s.y,
        data: {
          ...s,
          placement: i
        }
      };
    }
  };
}, jA = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: a,
        y: r,
        placement: n,
        platform: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (w) => {
            let {
              x: b,
              y: S
            } = w;
            return {
              x: b,
              y: S
            };
          }
        },
        ...d
      } = ra(e, t), c = {
        x: a,
        y: r
      }, f = await o.detectOverflow(t, d), y = Rt(na(n)), p = Ns(y);
      let g = c[p], h = c[y];
      if (i) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", S = g + f[w], z = g - f[b];
        g = Vl(S, g, z);
      }
      if (l) {
        const w = y === "y" ? "top" : "left", b = y === "y" ? "bottom" : "right", S = h + f[w], z = h - f[b];
        h = Vl(S, h, z);
      }
      const k = s.fn({
        ...t,
        [p]: g,
        [y]: h
      });
      return {
        ...k,
        data: {
          x: k.x - a,
          y: k.y - r,
          enabled: {
            [p]: i,
            [y]: l
          }
        }
      };
    }
  };
}, IA = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: a,
        y: r,
        placement: n,
        rects: o,
        middlewareData: i
      } = t, {
        offset: l = 0,
        mainAxis: s = !0,
        crossAxis: d = !0
      } = ra(e, t), c = {
        x: a,
        y: r
      }, f = Rt(n), y = Ns(f);
      let p = c[y], g = c[f];
      const h = ra(l, t), k = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (s) {
        const S = y === "y" ? "height" : "width", z = o.reference[y] - o.floating[S] + k.mainAxis, $ = o.reference[y] + o.reference[S] - k.mainAxis;
        p < z ? p = z : p > $ && (p = $);
      }
      if (d) {
        var w, b;
        const S = y === "y" ? "width" : "height", z = Dg.has(na(n)), $ = o.reference[f] - o.floating[S] + (z && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (z ? 0 : k.crossAxis), q = o.reference[f] + o.reference[S] + (z ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) - (z ? k.crossAxis : 0);
        g < $ ? g = $ : g > q && (g = q);
      }
      return {
        [y]: p,
        [f]: g
      };
    }
  };
}, FA = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var a, r;
      const {
        placement: n,
        rects: o,
        platform: i,
        elements: l
      } = t, {
        apply: s = () => {
        },
        ...d
      } = ra(e, t), c = await i.detectOverflow(t, d), f = na(n), y = Dr(n), p = Rt(n) === "y", {
        width: g,
        height: h
      } = o.floating;
      let k, w;
      f === "top" || f === "bottom" ? (k = f, w = y === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = f, k = y === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, S = g - c.left - c.right, z = ka(h - c[k], b), $ = ka(g - c[w], S), q = !t.middlewareData.shift;
      let C = z, E = $;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (E = S), (r = t.middlewareData.shift) != null && r.enabled.y && (C = b), q && !y) {
        const R = ft(c.left, 0), oe = ft(c.right, 0), ae = ft(c.top, 0), H = ft(c.bottom, 0);
        p ? E = g - 2 * (R !== 0 || oe !== 0 ? R + oe : ft(c.left, c.right)) : C = h - 2 * (ae !== 0 || H !== 0 ? ae + H : ft(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const M = await i.getDimensions(l.floating);
      return g !== M.width || h !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Lo() {
  return typeof window < "u";
}
function Ka(e) {
  return Us(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qt(e) {
  var t;
  return (t = (Us(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Us(e) {
  return Lo() ? e instanceof Node || e instanceof yt(e).Node : !1;
}
function Et(e) {
  return Lo() ? e instanceof Element || e instanceof yt(e).Element : !1;
}
function la(e) {
  return Lo() ? e instanceof HTMLElement || e instanceof yt(e).HTMLElement : !1;
}
function Jc(e) {
  return !Lo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof yt(e).ShadowRoot;
}
function _n(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: r,
    display: n
  } = Bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + a) && n !== "inline" && n !== "contents";
}
function TA(e) {
  return /^(table|td|th)$/.test(Ka(e));
}
function Wo(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const NA = /transform|translate|scale|rotate|perspective|filter/, VA = /paint|layout|strict|content/, Ca = (e) => !!e && e !== "none";
let il;
function Ls(e) {
  const t = Et(e) ? Bt(e) : e;
  return Ca(t.transform) || Ca(t.translate) || Ca(t.scale) || Ca(t.rotate) || Ca(t.perspective) || !Ws() && (Ca(t.backdropFilter) || Ca(t.filter)) || NA.test(t.willChange || "") || VA.test(t.contain || "");
}
function RA(e) {
  let t = wa(e);
  for (; la(t) && !_r(t); ) {
    if (Ls(t))
      return t;
    if (Wo(t))
      return null;
    t = wa(t);
  }
  return null;
}
function Ws() {
  return il == null && (il = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), il;
}
function _r(e) {
  return /^(html|body|#document)$/.test(Ka(e));
}
function Bt(e) {
  return yt(e).getComputedStyle(e);
}
function Ko(e) {
  return Et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function wa(e) {
  if (Ka(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jc(e) && e.host || // Fallback.
    Qt(e)
  );
  return Jc(t) ? t.host : t;
}
function Pg(e) {
  const t = wa(e);
  return _r(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : la(t) && _n(t) ? t : Pg(t);
}
function un(e, t, a) {
  var r;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const n = Pg(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = yt(n);
  if (o) {
    const l = Ul(i);
    return t.concat(i, i.visualViewport || [], _n(n) ? n : [], l && a ? un(l) : []);
  } else
    return t.concat(n, un(n, [], a));
}
function Ul(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jg(e) {
  const t = Bt(e);
  let a = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const n = la(e), o = n ? e.offsetWidth : a, i = n ? e.offsetHeight : r, l = fo(a) !== o || fo(r) !== i;
  return l && (a = o, r = i), {
    width: a,
    height: r,
    $: l
  };
}
function Ks(e) {
  return Et(e) ? e : e.contextElement;
}
function yr(e) {
  const t = Ks(e);
  if (!la(t))
    return Ut(1);
  const a = t.getBoundingClientRect(), {
    width: r,
    height: n,
    $: o
  } = jg(t);
  let i = (o ? fo(a.width) : a.width) / r, l = (o ? fo(a.height) : a.height) / n;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
const UA = /* @__PURE__ */ Ut(0);
function Ig(e) {
  const t = yt(e);
  return !Ws() || !t.visualViewport ? UA : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function LA(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== yt(e) ? !1 : t;
}
function Ra(e, t, a, r) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = Ks(e);
  let i = Ut(1);
  t && (r ? Et(r) && (i = yr(r)) : i = yr(e));
  const l = LA(o, a, r) ? Ig(o) : Ut(0);
  let s = (n.left + l.x) / i.x, d = (n.top + l.y) / i.y, c = n.width / i.x, f = n.height / i.y;
  if (o) {
    const y = yt(o), p = r && Et(r) ? yt(r) : r;
    let g = y, h = Ul(g);
    for (; h && r && p !== g; ) {
      const k = yr(h), w = h.getBoundingClientRect(), b = Bt(h), S = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * k.x, z = w.top + (h.clientTop + parseFloat(b.paddingTop)) * k.y;
      s *= k.x, d *= k.y, c *= k.x, f *= k.y, s += S, d += z, g = yt(h), h = Ul(g);
    }
  }
  return yo({
    width: c,
    height: f,
    x: s,
    y: d
  });
}
function Go(e, t) {
  const a = Ko(e).scrollLeft;
  return t ? t.left + a : Ra(Qt(e)).left + a;
}
function Fg(e, t) {
  const a = e.getBoundingClientRect(), r = a.left + t.scrollLeft - Go(e, a), n = a.top + t.scrollTop;
  return {
    x: r,
    y: n
  };
}
function WA(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: r,
    strategy: n
  } = e;
  const o = n === "fixed", i = Qt(r), l = t ? Wo(t.floating) : !1;
  if (r === i || l && o)
    return a;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ut(1);
  const c = Ut(0), f = la(r);
  if ((f || !f && !o) && ((Ka(r) !== "body" || _n(i)) && (s = Ko(r)), f)) {
    const p = Ra(r);
    d = yr(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const y = i && !f && !o ? Fg(i, s) : Ut(0);
  return {
    width: a.width * d.x,
    height: a.height * d.y,
    x: a.x * d.x - s.scrollLeft * d.x + c.x + y.x,
    y: a.y * d.y - s.scrollTop * d.y + c.y + y.y
  };
}
function KA(e) {
  return Array.from(e.getClientRects());
}
function GA(e) {
  const t = Qt(e), a = Ko(e), r = e.ownerDocument.body, n = ft(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = ft(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -a.scrollLeft + Go(e);
  const l = -a.scrollTop;
  return Bt(r).direction === "rtl" && (i += ft(t.clientWidth, r.clientWidth) - n), {
    width: n,
    height: o,
    x: i,
    y: l
  };
}
const Xc = 25;
function HA(e, t) {
  const a = yt(e), r = Qt(e), n = a.visualViewport;
  let o = r.clientWidth, i = r.clientHeight, l = 0, s = 0;
  if (n) {
    o = n.width, i = n.height;
    const c = Ws();
    (!c || c && t === "fixed") && (l = n.offsetLeft, s = n.offsetTop);
  }
  const d = Go(r);
  if (d <= 0) {
    const c = r.ownerDocument, f = c.body, y = getComputedStyle(f), p = c.compatMode === "CSS1Compat" && parseFloat(y.marginLeft) + parseFloat(y.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - p);
    g <= Xc && (o -= g);
  } else d <= Xc && (o += d);
  return {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function YA(e, t) {
  const a = Ra(e, !0, t === "fixed"), r = a.top + e.clientTop, n = a.left + e.clientLeft, o = la(e) ? yr(e) : Ut(1), i = e.clientWidth * o.x, l = e.clientHeight * o.y, s = n * o.x, d = r * o.y;
  return {
    width: i,
    height: l,
    x: s,
    y: d
  };
}
function ef(e, t, a) {
  let r;
  if (t === "viewport")
    r = HA(e, a);
  else if (t === "document")
    r = GA(Qt(e));
  else if (Et(t))
    r = YA(t, a);
  else {
    const n = Ig(e);
    r = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    };
  }
  return yo(r);
}
function Tg(e, t) {
  const a = wa(e);
  return a === t || !Et(a) || _r(a) ? !1 : Bt(a).position === "fixed" || Tg(a, t);
}
function ZA(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let r = un(e, [], !1).filter((l) => Et(l) && Ka(l) !== "body"), n = null;
  const o = Bt(e).position === "fixed";
  let i = o ? wa(e) : e;
  for (; Et(i) && !_r(i); ) {
    const l = Bt(i), s = Ls(i);
    !s && l.position === "fixed" && (n = null), (o ? !s && !n : !s && l.position === "static" && n && (n.position === "absolute" || n.position === "fixed") || _n(i) && !s && Tg(e, i)) ? r = r.filter((d) => d !== i) : n = l, i = wa(i);
  }
  return t.set(e, r), r;
}
function QA(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: r,
    strategy: n
  } = e;
  const o = [...a === "clippingAncestors" ? Wo(t) ? [] : ZA(t, this._c) : [].concat(a), r], i = ef(t, o[0], n);
  let l = i.top, s = i.right, d = i.bottom, c = i.left;
  for (let f = 1; f < o.length; f++) {
    const y = ef(t, o[f], n);
    l = ft(y.top, l), s = ka(y.right, s), d = ka(y.bottom, d), c = ft(y.left, c);
  }
  return {
    width: s - c,
    height: d - l,
    x: c,
    y: l
  };
}
function JA(e) {
  const {
    width: t,
    height: a
  } = jg(e);
  return {
    width: t,
    height: a
  };
}
function XA(e, t, a) {
  const r = la(t), n = Qt(t), o = a === "fixed", i = Ra(e, !0, o, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = Ut(0);
  function d() {
    s.x = Go(n);
  }
  if (r || !r && !o)
    if ((Ka(t) !== "body" || _n(n)) && (l = Ko(t)), r) {
      const p = Ra(t, !0, o, t);
      s.x = p.x + t.clientLeft, s.y = p.y + t.clientTop;
    } else n && d();
  o && !r && n && d();
  const c = n && !r && !o ? Fg(n, l) : Ut(0), f = i.left + l.scrollLeft - s.x - c.x, y = i.top + l.scrollTop - s.y - c.y;
  return {
    x: f,
    y,
    width: i.width,
    height: i.height
  };
}
function ll(e) {
  return Bt(e).position === "static";
}
function tf(e, t) {
  if (!la(e) || Bt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return Qt(e) === a && (a = a.ownerDocument.body), a;
}
function Ng(e, t) {
  const a = yt(e);
  if (Wo(e))
    return a;
  if (!la(e)) {
    let n = wa(e);
    for (; n && !_r(n); ) {
      if (Et(n) && !ll(n))
        return n;
      n = wa(n);
    }
    return a;
  }
  let r = tf(e, t);
  for (; r && TA(r) && ll(r); )
    r = tf(r, t);
  return r && _r(r) && ll(r) && !Ls(r) ? a : r || RA(e) || a;
}
const eC = async function(e) {
  const t = this.getOffsetParent || Ng, a = this.getDimensions, r = await a(e.floating);
  return {
    reference: XA(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function tC(e) {
  return Bt(e).direction === "rtl";
}
const aC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: WA,
  getDocumentElement: Qt,
  getClippingRect: QA,
  getOffsetParent: Ng,
  getElementRects: eC,
  getClientRects: KA,
  getDimensions: JA,
  getScale: yr,
  isElement: Et,
  isRTL: tC
};
function Vg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function rC(e, t) {
  let a = null, r;
  const n = Qt(e);
  function o() {
    var l;
    clearTimeout(r), (l = a) == null || l.disconnect(), a = null;
  }
  function i(l, s) {
    l === void 0 && (l = !1), s === void 0 && (s = 1), o();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: y,
      height: p
    } = d;
    if (l || t(), !y || !p)
      return;
    const g = In(f), h = In(n.clientWidth - (c + y)), k = In(n.clientHeight - (f + p)), w = In(c), b = {
      rootMargin: -g + "px " + -h + "px " + -k + "px " + -w + "px",
      threshold: ft(0, ka(1, s)) || 1
    };
    let S = !0;
    function z($) {
      const q = $[0].intersectionRatio;
      if (q !== s) {
        if (!S)
          return i();
        q ? i(!1, q) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      q === 1 && !Vg(d, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      a = new IntersectionObserver(z, {
        ...b,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(z, b);
    }
    a.observe(e);
  }
  return i(!0), o;
}
function nC(e, t, a, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, d = Ks(e), c = n || o ? [...d ? un(d) : [], ...t ? un(t) : []] : [];
  c.forEach((w) => {
    n && w.addEventListener("scroll", a, {
      passive: !0
    }), o && w.addEventListener("resize", a);
  });
  const f = d && l ? rC(d, a) : null;
  let y = -1, p = null;
  i && (p = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && p && t && (p.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var S;
      (S = p) == null || S.observe(t);
    })), a();
  }), d && !s && p.observe(d), t && p.observe(t));
  let g, h = s ? Ra(e) : null;
  s && k();
  function k() {
    const w = Ra(e);
    h && !Vg(h, w) && a(), h = w, g = requestAnimationFrame(k);
  }
  return a(), () => {
    var w;
    c.forEach((b) => {
      n && b.removeEventListener("scroll", a), o && b.removeEventListener("resize", a);
    }), f?.(), (w = p) == null || w.disconnect(), p = null, s && cancelAnimationFrame(g);
  };
}
const oC = PA, iC = jA, af = BA, lC = FA, sC = MA, uC = $A, dC = IA, cC = (e, t, a) => {
  const r = /* @__PURE__ */ new Map(), n = {
    platform: aC,
    ...a
  }, o = {
    ...n.platform,
    _c: r
  };
  return EA(e, t, {
    ...n,
    platform: o
  });
};
function fC(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ll(e) {
  if (fC(e)) {
    const t = e.$el;
    return Us(t) && Ka(t) === "#comment" ? null : t;
  }
  return e;
}
function lr(e) {
  return typeof e == "function" ? e() : u(e);
}
function pC(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Ll(lr(e.element));
      return a == null ? {} : uC({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Rg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rf(e, t) {
  const a = Rg(e);
  return Math.round(t * a) / a;
}
function yC(e, t, a) {
  a === void 0 && (a = {});
  const r = a.whileElementsMounted, n = D(() => {
    var C;
    return (C = lr(a.open)) != null ? C : !0;
  }), o = D(() => lr(a.middleware)), i = D(() => {
    var C;
    return (C = lr(a.placement)) != null ? C : "bottom";
  }), l = D(() => {
    var C;
    return (C = lr(a.strategy)) != null ? C : "absolute";
  }), s = D(() => {
    var C;
    return (C = lr(a.transform)) != null ? C : !0;
  }), d = D(() => Ll(e.value)), c = D(() => Ll(t.value)), f = F(0), y = F(0), p = F(l.value), g = F(i.value), h = Fa({}), k = F(!1), w = D(() => {
    const C = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return C;
    const E = rf(c.value, f.value), M = rf(c.value, y.value);
    return s.value ? {
      ...C,
      transform: "translate(" + E + "px, " + M + "px)",
      ...Rg(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: E + "px",
      top: M + "px"
    };
  });
  let b;
  function S() {
    if (d.value == null || c.value == null)
      return;
    const C = n.value;
    cC(d.value, c.value, {
      middleware: o.value,
      placement: i.value,
      strategy: l.value
    }).then((E) => {
      f.value = E.x, y.value = E.y, p.value = E.strategy, g.value = E.placement, h.value = E.middlewareData, k.value = C !== !1;
    });
  }
  function z() {
    typeof b == "function" && (b(), b = void 0);
  }
  function $() {
    if (z(), r === void 0) {
      S();
      return;
    }
    if (d.value != null && c.value != null) {
      b = r(d.value, c.value, S);
      return;
    }
  }
  function q() {
    n.value || (k.value = !1);
  }
  return ge([o, i, l, n], S, {
    flush: "sync"
  }), ge([d, c], $, {
    flush: "sync"
  }), ge(n, q, {
    flush: "sync"
  }), vo() && ns(z), {
    x: ar(f),
    y: ar(y),
    strategy: ar(p),
    placement: ar(g),
    middlewareData: ar(h),
    isPositioned: ar(k),
    floatingStyles: w,
    update: S
  };
}
const mC = ["dir"], Ug = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  hideShiftedArrow: !0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [yj, hC] = /* @__PURE__ */ Be("PopperContent");
var vC = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Vf({
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Ug }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Bg(), { forwardRef: o, currentElement: i } = de(), l = ia(D(() => a.dir)), s = F(), d = F(), { width: c, height: f } = Pq(d), y = D(() => a.side + (a.align !== "center" ? `-${a.align}` : "")), p = D(() => typeof a.collisionPadding == "number" ? a.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...a.collisionPadding
    }), g = D(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = D(() => ({
      padding: p.value,
      boundary: g.value.filter(vA),
      altBoundary: g.value.length > 0
    })), k = D(() => ({
      mainAxis: a.sideFlip,
      crossAxis: a.alignFlip
    })), w = D(() => [
      oC({
        mainAxis: a.sideOffset + f.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && af({
        ...h.value,
        ...k.value
      }),
      a.avoidCollisions && iC({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? dC() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && af({
        ...h.value,
        ...k.value
      }),
      lC({
        ...h.value,
        apply: ({ elements: H, rects: re, availableWidth: P, availableHeight: L }) => {
          const { width: U, height: G } = re.reference, ce = H.floating.style;
          ce.setProperty("--reka-popper-available-width", `${P}px`), ce.setProperty("--reka-popper-available-height", `${L}px`), ce.setProperty("--reka-popper-anchor-width", `${U}px`), ce.setProperty("--reka-popper-anchor-height", `${G}px`);
        }
      }),
      d.value && pC({
        element: d.value,
        padding: a.arrowPadding
      }),
      gA({
        arrowWidth: c.value,
        arrowHeight: f.value,
        dir: l.value
      }),
      a.hideWhenDetached && sC({
        strategy: "referenceHidden",
        ...h.value
      })
    ]), b = D(() => a.reference ?? n.anchor.value), { floatingStyles: S, placement: z, isPositioned: $, middlewareData: q } = yC(b, s, {
      strategy: a.positionStrategy,
      placement: y,
      whileElementsMounted: (...H) => nC(...H, {
        layoutShift: !a.disableUpdateOnLayoutShift,
        animationFrame: a.updatePositionStrategy === "always"
      }),
      middleware: w
    }), C = D(() => Nl(z.value)[0]), E = D(() => Nl(z.value)[1]);
    Tf(() => {
      $.value && r("placed");
    });
    const M = D(() => {
      const H = q.value.arrow?.centerOffset !== 0;
      return a.hideShiftedArrow && H;
    }), R = F("");
    it(() => {
      i.value && (R.value = window.getComputedStyle(i.value).zIndex);
    });
    const oe = D(() => q.value.arrow?.x ?? 0), ae = D(() => q.value.arrow?.y ?? 0);
    return hC({
      placedSide: C,
      onArrowChange: (H) => d.value = H,
      arrowX: oe,
      arrowY: ae,
      shouldHideArrow: M
    }), (H, re) => (v(), W("div", {
      ref_key: "floatingRef",
      ref: s,
      "data-reka-popper-content-wrapper": "",
      dir: u(l),
      style: ut({
        ...u(S),
        transform: u($) ? u(S).transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: R.value,
        "--reka-popper-transform-origin": [u(q).transformOrigin?.x, u(q).transformOrigin?.y].join(" "),
        ...u(q).hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      })
    }, [a.memoDependencies ? os([
      a.asChild,
      a.as,
      C.value,
      E.value,
      u($),
      ...Object.values(H.$attrs),
      ...a.memoDependencies
    ], () => (v(), x(u(ie), I({
      key: 0,
      ref: u(o)
    }, H.$attrs, {
      "as-child": a.asChild,
      as: a.as,
      "data-side": C.value,
      "data-align": E.value,
      style: { animation: u($) ? void 0 : "none" }
    }), {
      default: m(() => [A(H.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "style"
    ])), re, 0) : (v(), x(u(ie), I({
      key: 1,
      ref: u(o)
    }, H.$attrs, {
      "as-child": a.asChild,
      as: a.as,
      "data-side": C.value,
      "data-align": E.value,
      dir: u(l),
      style: { animation: u($) ? void 0 : "none" }
    }), {
      default: m(() => [A(H.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "dir",
      "style"
    ]))], 12, mC));
  }
}), Ho = vC;
const [Ga, gC] = /* @__PURE__ */ Be("ComboboxRoot");
var bC = /* @__PURE__ */ O({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: !1,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    openOnClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    ignoreFilter: {
      type: Boolean,
      required: !1
    },
    resetModelValueOnClear: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    highlightOnHover: {
      type: Boolean,
      required: !1,
      default: !0
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, { primitiveElement: o, currentElement: i } = Wt(), { multiple: l, disabled: s, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: f, openOnClick: y, dir: p, resetModelValueOnClear: g, highlightOnHover: h } = Ye(r), k = ia(p), w = /* @__PURE__ */ Xe(r, "modelValue", n, {
      defaultValue: r.defaultValue ?? (l.value ? [] : void 0),
      passive: r.modelValue === void 0,
      deep: !0
    }), b = /* @__PURE__ */ Xe(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    });
    async function S(L) {
      b.value = L, H.value = "", L ? (await _e(), o.value?.highlightSelected(), $.value = !0, C.value?.focus()) : ($.value = !1, setTimeout(() => {
        !L && r.resetSearchTermOnBlur && z.trigger();
      }, 1));
    }
    const z = /* @__PURE__ */ Vn(), $ = F(!1), q = F(!1), C = F(), E = F(), M = D(() => o.value?.highlightedElement ?? void 0), R = F(/* @__PURE__ */ new Map()), oe = F(/* @__PURE__ */ new Map()), { contains: ae } = Aq({ sensitivity: "base" }), H = F(""), re = D((L) => {
      if (!H.value || r.ignoreFilter || q.value) return {
        count: R.value.size,
        items: L?.items ?? /* @__PURE__ */ new Map(),
        groups: L?.groups ?? new Set(oe.value.keys())
      };
      let U = 0;
      const G = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Set();
      for (const [T, fe] of R.value) {
        const te = ae(fe, H.value);
        G.set(T, te ? 1 : 0), te && U++;
      }
      for (const [T, fe] of oe.value) for (const te of fe) if (G.get(te) > 0) {
        ce.add(T);
        break;
      }
      return {
        count: U,
        items: G,
        groups: ce
      };
    }), P = Kt();
    return Ae(() => {
      P?.exposed && (P.exposed.highlightItem = o.value?.highlightItem, P.exposed.highlightFirstItem = o.value?.highlightFirstItem, P.exposed.highlightSelected = o.value?.highlightSelected);
    }), t({
      filtered: re,
      highlightedElement: M,
      highlightItem: o.value?.highlightItem,
      highlightFirstItem: o.value?.highlightFirstItem,
      highlightSelected: o.value?.highlightSelected
    }), gC({
      modelValue: w,
      multiple: l,
      disabled: s,
      open: b,
      onOpenChange: S,
      contentId: "",
      isUserInputted: $,
      isVirtual: q,
      inputElement: C,
      highlightedElement: M,
      onInputElementChange: (L) => C.value = L,
      triggerElement: E,
      onTriggerElementChange: (L) => E.value = L,
      parentElement: i,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: z.on,
      allItems: R,
      allGroups: oe,
      filterSearch: H,
      filterState: re,
      ignoreFilter: d,
      openOnFocus: f,
      openOnClick: y,
      resetModelValueOnClear: g
    }), (L, U) => (v(), x(u(Ro), null, {
      default: m(() => [_(u(XO), I({
        ref_key: "primitiveElement",
        ref: o
      }, L.$attrs, {
        modelValue: u(w),
        "onUpdate:modelValue": U[0] || (U[0] = (G) => tt(w) ? w.value = G : null),
        style: { pointerEvents: u(b) ? "auto" : void 0 },
        as: L.as,
        "as-child": L.asChild,
        dir: u(k),
        multiple: u(l),
        name: L.name,
        required: L.required,
        disabled: u(s),
        "highlight-on-hover": u(h),
        by: r.by,
        onHighlight: U[1] || (U[1] = (G) => n("highlight", G))
      }), {
        default: m(() => [A(L.$slots, "default", {
          open: u(b),
          modelValue: u(w)
        })]),
        _: 3
      }, 16, [
        "modelValue",
        "style",
        "as",
        "as-child",
        "dir",
        "multiple",
        "name",
        "required",
        "disabled",
        "highlight-on-hover",
        "by"
      ])]),
      _: 3
    }));
  }
}), kC = bC, wC = /* @__PURE__ */ O({
  __name: "ComboboxAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { forwardRef: t } = de();
    return (a, r) => (v(), x(u(Uo), {
      "as-child": "",
      reference: a.reference
    }, {
      default: m(() => [_(u(ie), I({
        ref: u(t),
        "as-child": a.asChild,
        as: a.as
      }, a.$attrs), {
        default: m(() => [A(a.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), xC = wC;
const [mj, zC] = /* @__PURE__ */ Be("ComboboxContent");
var _C = /* @__PURE__ */ O({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "inline"
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    hideWhenEmpty: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, { position: n } = Ye(a), o = Ga(), i = D(() => o.ignoreFilter.value ? o.allItems.value.size === 0 : o.filterState.value.count === 0), { forwardRef: l, currentElement: s } = de();
    bn(a.bodyLock), Fo(), wn(o.parentElement);
    const d = D(() => a.position === "popper" ? a : {}), c = Fe(d.value), f = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    zC({ position: n });
    const y = F(!1);
    Ae(() => {
      o.inputElement.value && (y.value = s.value.contains(o.inputElement.value), y.value && o.inputElement.value.focus());
    }), _t(() => {
      const g = Ge();
      y.value && (!g || g === document.body) && o.triggerElement.value?.focus();
    });
    function p(g) {
      if (o.parentElement.value?.contains(g)) return !0;
      const h = (g instanceof Element ? g.closest("label") : null)?.control;
      return !!h && !!o.parentElement.value?.contains(h);
    }
    return (g, h) => (v(), x(u(tA), { "as-child": "" }, {
      default: m(() => [_(u(zn), {
        "as-child": "",
        onMountAutoFocus: h[5] || (h[5] = Pe(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: h[6] || (h[6] = Pe(() => {
        }, ["prevent"]))
      }, {
        default: m(() => [_(u(xn), {
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (k) => u(o).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (k) => {
            p(k.target) && k.preventDefault(), r("focusOutside", k);
          }),
          onInteractOutside: h[2] || (h[2] = (k) => r("interactOutside", k)),
          onEscapeKeyDown: h[3] || (h[3] = (k) => r("escapeKeyDown", k)),
          onPointerDownOutside: h[4] || (h[4] = (k) => {
            p(k.target) && k.preventDefault(), r("pointerDownOutside", k);
          })
        }, {
          default: m(() => [(v(), x(Ua(u(n) === "popper" ? u(Ho) : u(ie)), I({
            ...g.$attrs,
            ...u(c)
          }, {
            id: u(o).contentId,
            ref: u(l),
            "memo-dependencies": u(n) === "popper" ? [u(o).filterSearch.value, u(o).filterState.value] : void 0,
            "data-state": u(o).open.value ? "open" : "closed",
            "data-empty": i.value ? "" : void 0,
            style: {
              display: a.hideWhenEmpty && i.value ? "none" : "flex",
              flexDirection: "column",
              outline: "none",
              ...u(n) === "popper" ? f : {}
            }
          }), {
            default: m(() => [A(g.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "memo-dependencies",
            "data-state",
            "data-empty",
            "style"
          ]))]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      })]),
      _: 3
    }));
  }
}), SC = _C, qC = /* @__PURE__ */ O({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    hideWhenEmpty: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const a = Me(e, t), { forwardRef: r } = de(), n = Ga();
    return n.contentId ||= et(void 0, "reka-combobox-content"), (o, i) => (v(), x(u(za), { present: o.forceMount || u(n).open.value }, {
      default: m(() => [_(SC, I({
        ...u(a),
        ...o.$attrs
      }, { ref: u(r) }), {
        default: m(() => [A(o.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), nf = qC, OC = /* @__PURE__ */ O({
  __name: "ComboboxEmpty",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = Ga(), r = D(() => a.ignoreFilter.value ? a.allItems.value.size === 0 : a.filterState.value.count === 0);
    return (n, o) => r.value ? (v(), x(u(ie), Ie(I({ key: 0 }, t)), {
      default: m(() => [A(n.$slots, "default", {}, () => [o[0] || (o[0] = J("No options"))])]),
      _: 3
    }, 16)) : Z("v-if", !0);
  }
}), AC = OC;
const [Lg, CC] = /* @__PURE__ */ Be("ComboboxGroup");
var EC = /* @__PURE__ */ O({
  __name: "ComboboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = et(void 0, "reka-combobox-group"), r = Ga(), n = D(() => r.ignoreFilter.value ? !0 : r.filterSearch.value ? r.filterState.value.groups.has(a) : !0), o = CC({
      id: a,
      labelId: ""
    });
    return Ae(() => {
      r.allGroups.value.has(a) || r.allGroups.value.set(a, /* @__PURE__ */ new Set());
    }), _t(() => {
      r.allGroups.value.delete(a);
    }), (i, l) => (v(), x(u(iA), I({
      id: u(a),
      "aria-labelledby": u(o).labelId
    }, t, { hidden: n.value ? void 0 : !0 }), {
      default: m(() => [A(i.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), $C = EC, BC = /* @__PURE__ */ O({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Ga(), o = Vo(), { primitiveElement: i, currentElement: l } = Wt(), s = /* @__PURE__ */ Xe(a, "modelValue", r, { passive: a.modelValue === void 0 });
    Ae(() => {
      l.value && n.onInputElementChange(l.value);
    });
    const { isComposing: d, shouldDeferInput: c, handleCompositionStart: f, handleCompositionUpdate: y, handleCompositionEnd: p } = Kv(($) => {
      const q = $.target;
      q && h(q.value);
    });
    function g($) {
      d.value || ($.preventDefault(), n.open.value || n.onOpenChange(!0));
    }
    function h($) {
      n.open.value ? n.filterSearch.value = $ : (n.onOpenChange(!0), _e(() => {
        $ && (n.filterSearch.value = $, o.highlightFirstItem());
      }));
    }
    function k($) {
      c.value || h($.target.value);
    }
    function w() {
      n.openOnFocus.value && !n.open.value && n.onOpenChange(!0);
    }
    function b($) {
      if (!n.open.value) return;
      const q = $.relatedTarget;
      if (!q) return;
      const C = n.parentElement.value?.contains(q), E = document.getElementById(n.contentId)?.contains(q);
      !C && !E && requestAnimationFrame(() => {
        if (!n.open.value) return;
        const M = document.activeElement;
        !n.parentElement.value?.contains(M) && !document.getElementById(n.contentId)?.contains(M) && n.onOpenChange(!1);
      });
    }
    function S() {
      n.openOnClick.value && !n.open.value && n.onOpenChange(!0);
    }
    function z() {
      const $ = n.modelValue.value;
      a.displayValue ? s.value = a.displayValue($) : !n.multiple.value && $ && !Array.isArray($) && typeof $ != "object" ? s.value = $.toString() : s.value = "", _e(() => {
        s.value = s.value;
      });
    }
    return n.onResetSearchTerm(() => {
      z();
    }), ge(n.modelValue, async () => {
      !n.isUserInputted.value && n.resetSearchTermOnSelect.value && z();
    }, {
      immediate: !0,
      deep: !0
    }), ge(n.filterState, ($, q) => {
      !n.isVirtual.value && q.count === 0 && o.highlightFirstItem();
    }), ($, q) => (v(), x(u(rA), {
      ref_key: "primitiveElement",
      ref: i,
      modelValue: u(s),
      "onUpdate:modelValue": q[0] || (q[0] = (C) => tt(s) ? s.value = C : null),
      as: $.as,
      "as-child": $.asChild,
      "auto-focus": $.autoFocus,
      disabled: $.disabled,
      "aria-expanded": u(n).open.value,
      "aria-controls": u(n).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: S,
      onInput: k,
      onKeydown: mt(g, ["down", "up"]),
      onFocus: w,
      onBlur: b,
      onCompositionstart: u(f),
      onCompositionupdate: u(y),
      onCompositionend: u(p)
    }, {
      default: m(() => [A($.$slots, "default")]),
      _: 3
    }, 8, [
      "modelValue",
      "as",
      "as-child",
      "auto-focus",
      "disabled",
      "aria-expanded",
      "aria-controls",
      "onCompositionstart",
      "onCompositionupdate",
      "onCompositionend"
    ]));
  }
}), MC = BC, DC = /* @__PURE__ */ O({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = et(void 0, "reka-combobox-item"), o = Ga(), i = Lg(null), { primitiveElement: l, currentElement: s } = Wt();
    if (a.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = D(() => {
      if (o.isVirtual.value || o.ignoreFilter.value || !o.filterSearch.value) return !0;
      {
        const c = o.filterState.value.items.get(n);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return Ae(() => {
      o.allItems.value.set(n, a.textValue || s.value.textContent || s.value.innerText);
      const c = i?.id;
      c && (o.allGroups.value.has(c) ? o.allGroups.value.get(c)?.add(n) : o.allGroups.value.set(c, /* @__PURE__ */ new Set([n])));
    }), _t(() => {
      o.allItems.value.delete(n);
    }), (c, f) => d.value ? os([
      d.value,
      u(o).filterSearch.value,
      u(o).disabled.value,
      c.disabled,
      a.value,
      a.as,
      a.asChild,
      ...Object.values(c.$attrs)
    ], () => (v(), x(u(cA), I({ key: 0 }, a, {
      id: u(n),
      ref_key: "primitiveElement",
      ref: l,
      disabled: u(o).disabled.value || c.disabled,
      onSelect: f[0] || (f[0] = (y) => {
        r("select", y), !y.defaultPrevented && (!u(o).multiple.value && !c.disabled && !u(o).disabled.value ? (y.preventDefault(), u(o).onOpenChange(!1), u(o).modelValue.value = a.value) : u(o).multiple.value && u(o).inputElement.value?.focus());
      })
    }), {
      default: m(() => [A(c.$slots, "default", {}, () => [J(V(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])), f, 1) : Z("v-if", !0);
  }
}), PC = DC, jC = /* @__PURE__ */ O({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(pA), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), IC = jC, FC = /* @__PURE__ */ O({
  __name: "ComboboxLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    de();
    const a = Lg({
      id: "",
      labelId: ""
    });
    return a.labelId ||= et(void 0, "reka-combobox-group-label"), (r, n) => (v(), x(u(ie), I(t, { id: u(a).labelId }), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), TC = FC, NC = /* @__PURE__ */ O({
  __name: "ComboboxPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Mr), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), VC = NC, RC = /* @__PURE__ */ O({
  __name: "ComboboxTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: r } = de(), n = Ga(), o = D(() => t.disabled || n.disabled.value || !1);
    return Ae(() => {
      r.value && n.onTriggerElementChange(r.value);
    }), (i, l) => (v(), x(u(ie), I(t, {
      ref: u(a),
      type: i.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": u(n).open.value,
      "aria-controls": u(n).contentId,
      "data-state": u(n).open.value ? "open" : "closed",
      disabled: o.value,
      "data-disabled": o.value ? "" : void 0,
      "aria-disabled": o.value ?? void 0,
      onClick: l[0] || (l[0] = (s) => u(n).onOpenChange(!u(n).open.value))
    }), {
      default: m(() => [A(i.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "disabled",
      "data-disabled",
      "aria-disabled"
    ]));
  }
}), UC = RC;
function LC(e) {
  const t = Er({ nonce: F() });
  return D(() => e?.value || t.nonce?.value);
}
const [Wg, WC] = /* @__PURE__ */ Be("AvatarRoot");
var KC = /* @__PURE__ */ O({
  __name: "AvatarRoot",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return de(), WC({ imageLoadingStatus: F("idle") }), (t, a) => (v(), x(u(ie), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: m(() => [A(t.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), GC = KC, HC = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {
      type: Number,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, a = Wg();
    de();
    const r = F(t.delayMs === void 0);
    return it((n) => {
      if (t.delayMs && xt) {
        const o = window.setTimeout(() => {
          r.value = !0;
        }, t.delayMs);
        n(() => {
          window.clearTimeout(o);
        });
      }
    }), (n, o) => r.value && u(a).imageLoadingStatus.value !== "loaded" ? (v(), x(u(ie), {
      key: 0,
      "as-child": n.asChild,
      as: n.as
    }, {
      default: m(() => [A(n.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"])) : Z("v-if", !0);
  }
}), YC = HC;
function of(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function ZC(e, { referrerPolicy: t, crossOrigin: a } = {}) {
  const r = F(!1), n = F(null), o = D(() => r.value ? (!n.value && xt && (n.value = new window.Image()), n.value) : null), i = F(of(o.value, e.value)), l = (s) => () => {
    r.value && (i.value = s);
  };
  return Ae(() => {
    r.value = !0, it((s) => {
      const d = o.value;
      if (!d) return;
      i.value = of(d, e.value);
      const c = l("loaded"), f = l("error");
      d.addEventListener("load", c), d.addEventListener("error", f), t?.value && (d.referrerPolicy = t.value), typeof a?.value == "string" && (d.crossOrigin = a.value), s(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", f);
      });
    });
  }), _t(() => {
    r.value = !1;
  }), i;
}
var QC = /* @__PURE__ */ O({
  __name: "AvatarImage",
  props: {
    src: {
      type: String,
      required: !0
    },
    referrerPolicy: {
      type: null,
      required: !1
    },
    crossOrigin: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "img"
    }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const a = e, r = t, { src: n, referrerPolicy: o, crossOrigin: i } = Ye(a);
    de();
    const l = Wg(), s = ZC(n, {
      referrerPolicy: o,
      crossOrigin: i
    });
    return ge(s, (d) => {
      r("loadingStatusChange", d), d !== "idle" && (l.imageLoadingStatus.value = d);
    }, { immediate: !0 }), (d, c) => mr((v(), x(u(ie), {
      role: "img",
      "as-child": d.asChild,
      as: d.as,
      src: u(n),
      referrerpolicy: u(o),
      crossorigin: u(i)
    }, {
      default: m(() => [A(d.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "src",
      "referrerpolicy",
      "crossorigin"
    ])), [[Kn, u(s) === "loaded"]]);
  }
}), JC = QC;
function XC(e) {
  function t(o) {
    return Array.isArray(e.date.value) ? e.date.value.some((i) => ba(i, o)) : e.date.value ? ba(e.date.value, o) : !1;
  }
  const a = D(() => {
    if (Array.isArray(e.date.value)) {
      if (!e.date.value.length) return !1;
      for (const o of e.date.value)
        if (e.isDateDisabled?.(o) || e.isDateUnavailable?.(o)) return !0;
    } else {
      if (!e.date.value) return !1;
      if (e.isDateDisabled?.(e.date.value) || e.isDateUnavailable?.(e.date.value)) return !0;
    }
    return !1;
  }), r = D(() => Array.isArray(e.date.value) ? e.date.value.length > 0 : !!e.date.value), n = D(() => Array.isArray(e.date.value) ? e.date.value.length ? e.date.value.some((o) => e.isDateDisabled?.(o)) : !1 : e.date.value ? !!e.isDateDisabled?.(e.date.value) : !1);
  return {
    isDateSelected: t,
    isInvalid: a,
    hasSelectedDate: r,
    isSelectedDateDisabled: n
  };
}
function eE(e, t) {
  const a = t(e), r = a.compare(e), n = {};
  return r >= 7 && (n.day = 1), r >= pr(e) && (n.month = 1), a.set({ ...n });
}
function tE(e, t) {
  const a = t(e), r = e.compare(a), n = {};
  return r >= 7 && (n.day = 35), r >= pr(e) && (n.month = 13), a.set({ ...n });
}
function aE(e, t) {
  return t(e);
}
function rE(e, t) {
  return t(e);
}
function nE(e) {
  const t = Oq(e.locale.value), a = D(() => {
    const w = { calendar: e.placeholder.value.calendar.identifier };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (w.era = "short"), w;
  }), r = F(Aa({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), n = D(() => r.value.map((w) => w.value));
  function o(w) {
    return !n.value.some((b) => kc(w, b));
  }
  const i = (w) => {
    if (!e.maxValue.value || !r.value.length) return !1;
    if (e.disabled.value) return !0;
    const b = r.value.at(-1).value;
    if (!w && !e.nextPage.value) {
      const z = b.add({ months: 1 }).set({ day: 1 });
      return el(z, e.maxValue.value);
    }
    const S = eE(b, w || e.nextPage.value);
    return el(S, e.maxValue.value);
  }, l = (w) => {
    if (!e.minValue.value || !r.value.length) return !1;
    if (e.disabled.value) return !0;
    const b = r.value[0].value;
    if (!w && !e.prevPage.value) {
      const z = b.subtract({ months: 1 }).set({ day: 35 });
      return Mn(z, e.minValue.value);
    }
    const S = tE(b, w || e.prevPage.value);
    return Mn(S, e.minValue.value);
  };
  function s(w) {
    return !!(e.isDateDisabled?.(w) || e.disabled.value || e.maxValue.value && el(w, e.maxValue.value) || e.minValue.value && Mn(w, e.minValue.value));
  }
  const d = (w) => !!e.isDateUnavailable?.(w), c = D(() => r.value.length ? r.value[0].rows[0].map((w) => t.dayOfWeek(Nt(w), e.weekdayFormat.value)) : []), f = (w) => {
    const b = r.value[0].value;
    if (!w && !e.nextPage.value) {
      const q = b.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }), C = Aa({
        dateObj: q,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      r.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
      return;
    }
    const S = aE(b, w || e.nextPage.value), z = Aa({
      dateObj: S,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    r.value = z;
    const $ = {};
    if (!w) {
      const q = z[0].value.compare(b);
      q >= pr(b) && ($.day = 1), q >= 365 && ($.month = 1);
    }
    e.placeholder.value = z[0].value.set({ ...$ });
  }, y = (w) => {
    const b = r.value[0].value;
    if (!w && !e.prevPage.value) {
      const q = b.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }), C = Aa({
        dateObj: q,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      r.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
      return;
    }
    const S = rE(b, w || e.prevPage.value), z = Aa({
      dateObj: S,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    r.value = z;
    const $ = {};
    if (!w) {
      const q = b.compare(z[0].value);
      q >= pr(b) && ($.day = 1), q >= 365 && ($.month = 1);
    }
    e.placeholder.value = z[0].value.set({ ...$ });
  };
  ge(e.placeholder, (w) => {
    n.value.some((b) => kc(b, w)) || (r.value = Aa({
      dateObj: w,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), ge([
    e.locale,
    e.weekStartsOn,
    e.fixedWeeks,
    e.numberOfMonths
  ], () => {
    r.value = Aa({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const p = D(() => {
    if (!r.value.length) return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), r.value.length === 1) {
      const C = r.value[0].value;
      return `${t.fullMonthAndYear(Nt(C), a.value)}`;
    }
    const w = Nt(r.value[0].value), b = Nt(r.value.at(-1).value), S = t.fullMonth(w, a.value), z = t.fullMonth(b, a.value), $ = t.fullYear(w, a.value), q = t.fullYear(b, a.value);
    return $ === q ? `${S} - ${z} ${q}` : `${S} ${$} - ${z} ${q}`;
  }), g = D(() => `${e.calendarLabel.value ?? "Event Date"}, ${p.value}`), h = D(() => !(s(e.placeholder.value) || d(e.placeholder.value) || o(e.placeholder.value))), k = D(() => {
    for (const w of r.value) {
      if (e.minValue.value && Mn(w.value, e.minValue.value)) continue;
      const b = pr(w.value), S = e.minValue.value && As(e.minValue.value, w.value) ? e.minValue.value.day : 1;
      for (let z = S; z <= b; z++) {
        const $ = w.value.set({ day: z });
        if (!(s($) || d($)))
          return $;
      }
    }
  });
  return {
    isDateDisabled: s,
    isDateUnavailable: d,
    isNextButtonDisabled: i,
    isPrevButtonDisabled: l,
    grid: r,
    weekdays: c,
    visibleView: n,
    isOutsideVisibleView: o,
    formatter: t,
    nextPage: f,
    prevPage: y,
    headingValue: p,
    fullCalendarLabel: g,
    isPlaceholderFocusable: h,
    firstFocusableDate: k
  };
}
const oE = { style: {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  "clip-path": "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0px",
  position: "absolute",
  "white-space": "nowrap",
  width: "1px"
} }, iE = {
  role: "heading",
  "aria-level": "2"
}, [Pr, lE] = /* @__PURE__ */ Be("CalendarRoot");
var sE = /* @__PURE__ */ O({
  __name: "CalendarRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1,
      default: void 0
    },
    defaultPlaceholder: {
      type: null,
      required: !1
    },
    placeholder: {
      type: null,
      required: !1,
      default: void 0
    },
    pagedNavigation: {
      type: Boolean,
      required: !1,
      default: !1
    },
    preventDeselect: {
      type: Boolean,
      required: !1,
      default: !1
    },
    weekStartsOn: {
      type: Number,
      required: !1
    },
    weekdayFormat: {
      type: String,
      required: !1,
      default: "narrow"
    },
    calendarLabel: {
      type: String,
      required: !1
    },
    fixedWeeks: {
      type: Boolean,
      required: !1,
      default: !1
    },
    maxValue: {
      type: null,
      required: !1
    },
    minValue: {
      type: null,
      required: !1
    },
    locale: {
      type: String,
      required: !1
    },
    numberOfMonths: {
      type: Number,
      required: !1,
      default: 1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    readonly: {
      type: Boolean,
      required: !1,
      default: !1
    },
    initialFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    isDateDisabled: {
      type: Function,
      required: !1,
      default: void 0
    },
    isDateUnavailable: {
      type: Function,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    nextPage: {
      type: Function,
      required: !1
    },
    prevPage: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableDaysOutsideCurrentView: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const a = e, r = t, { disabled: n, readonly: o, initialFocus: i, pagedNavigation: l, weekdayFormat: s, fixedWeeks: d, multiple: c, minValue: f, maxValue: y, numberOfMonths: p, preventDeselect: g, isDateDisabled: h, isDateUnavailable: k, calendarLabel: w, defaultValue: b, nextPage: S, prevPage: z, dir: $, locale: q, disableDaysOutsideCurrentView: C } = Ye(a), { primitiveElement: E, currentElement: M } = Wt(), R = Dq(q), oe = ia($), ae = D(() => a.weekStartsOn ?? qq(R.value)), H = /* @__PURE__ */ Xe(a, "modelValue", r, {
      defaultValue: b.value,
      passive: a.modelValue === void 0
    }), re = zq({
      defaultPlaceholder: a.placeholder,
      defaultValue: H.value,
      locale: a.locale
    }), P = /* @__PURE__ */ Xe(a, "placeholder", r, {
      defaultValue: a.defaultPlaceholder ?? re.copy(),
      passive: a.placeholder === void 0
    });
    function L(Ce) {
      P.value = Ce.copy();
    }
    const { fullCalendarLabel: U, headingValue: G, isDateDisabled: ce, isDateUnavailable: T, isNextButtonDisabled: fe, isPrevButtonDisabled: te, weekdays: he, isOutsideVisibleView: Ne, nextPage: qe, prevPage: ve, formatter: $e, grid: X, isPlaceholderFocusable: K, firstFocusableDate: ne } = nE({
      locale: R,
      placeholder: P,
      weekStartsOn: ae,
      fixedWeeks: d,
      numberOfMonths: p,
      minValue: f,
      maxValue: y,
      disabled: n,
      weekdayFormat: s,
      pagedNavigation: l,
      isDateDisabled: h.value,
      isDateUnavailable: k.value,
      calendarLabel: w,
      nextPage: S,
      prevPage: z
    }), { isInvalid: ue, isDateSelected: be, hasSelectedDate: ze, isSelectedDateDisabled: Qe } = XC({
      date: H,
      isDateDisabled: ce,
      isDateUnavailable: T
    });
    ge(H, (Ce) => {
      if (Array.isArray(Ce) && Ce.length) {
        const Ue = Ce.at(-1);
        Ue && !Ki(P.value, Ue) && L(Ue);
      } else !Array.isArray(Ce) && Ce && !Ki(P.value, Ce) && L(Ce);
    });
    function Ke(Ce) {
      if (c.value) {
        if (!H.value) H.value = [Ce.copy()];
        else if (Array.isArray(H.value)) {
          if (H.value.findIndex((Ue) => ba(Ue, Ce)) === -1) H.value = [...H.value, Ce];
          else if (!g.value) {
            const Ue = H.value.filter((at) => !ba(at, Ce));
            if (!Ue.length) {
              P.value = Ce.copy(), H.value = void 0;
              return;
            }
            H.value = Ue.map((at) => at.copy());
          }
        }
      } else {
        if (!H.value) {
          H.value = Ce.copy();
          return;
        }
        !g.value && Ki(H.value, Ce) ? (P.value = Ce.copy(), H.value = void 0) : H.value = Ce.copy();
      }
    }
    return Ae(() => {
      i.value && Sq(M.value);
    }), lE({
      isDateUnavailable: T,
      dir: oe,
      isDateDisabled: ce,
      locale: R,
      formatter: $e,
      modelValue: H,
      placeholder: P,
      disabled: n,
      initialFocus: i,
      pagedNavigation: l,
      grid: X,
      weekDays: he,
      weekStartsOn: ae,
      weekdayFormat: s,
      fixedWeeks: d,
      multiple: c,
      numberOfMonths: p,
      readonly: o,
      preventDeselect: g,
      fullCalendarLabel: U,
      headingValue: G,
      isInvalid: ue,
      isDateSelected: be,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: te,
      isOutsideVisibleView: Ne,
      nextPage: qe,
      prevPage: ve,
      parentElement: M,
      onPlaceholderChange: L,
      onDateChange: Ke,
      disableDaysOutsideCurrentView: C,
      minValue: f,
      maxValue: y,
      isPlaceholderFocusable: K,
      firstFocusableDate: ne,
      hasSelectedDate: ze,
      isSelectedDateDisabled: Qe
    }), (Ce, Ue) => (v(), x(u(ie), {
      ref_key: "primitiveElement",
      ref: E,
      as: Ce.as,
      "as-child": Ce.asChild,
      "aria-label": u(U),
      "data-readonly": u(o) ? "" : void 0,
      "data-disabled": u(n) ? "" : void 0,
      "data-invalid": u(ue) ? "" : void 0,
      dir: u(oe)
    }, {
      default: m(() => [A(Ce.$slots, "default", {
        date: u(P),
        grid: u(X),
        weekDays: u(he),
        weekStartsOn: ae.value,
        locale: u(R),
        fixedWeeks: u(d),
        modelValue: u(H)
      }), ee("div", oE, [ee("div", iE, V(u(U)), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-label",
      "data-readonly",
      "data-disabled",
      "data-invalid",
      "dir"
    ]));
  }
}), uE = sE, dE = /* @__PURE__ */ O({
  __name: "CalendarCell",
  props: {
    date: {
      type: null,
      required: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "td"
    }
  },
  setup(e) {
    const t = Pr();
    return (a, r) => (v(), x(u(ie), {
      as: a.as,
      "as-child": a.asChild,
      role: "gridcell",
      "aria-selected": u(t).isDateSelected(a.date) ? !0 : void 0,
      "aria-disabled": u(t).isDateDisabled(a.date) || u(t).isDateUnavailable?.(a.date) || u(t).disableDaysOutsideCurrentView.value,
      "data-disabled": u(t).isDateDisabled(a.date) || u(t).disableDaysOutsideCurrentView.value ? "" : void 0
    }, {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-selected",
      "aria-disabled",
      "data-disabled"
    ]));
  }
}), cE = dE, fE = /* @__PURE__ */ O({
  __name: "CalendarCellTrigger",
  props: {
    day: {
      type: null,
      required: !0
    },
    month: {
      type: null,
      required: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e, a = vg(), r = Pr(), { primitiveElement: n } = Wt(), o = D(() => t.day.day.toLocaleString(r.locale.value)), i = D(() => r.formatter.custom(Nt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), l = D(() => r.isDateUnavailable?.(t.day) ?? !1), s = D(() => OS(t.day, $r())), d = D(() => !As(t.day, t.month)), c = D(() => r.isOutsideVisibleView(t.day)), f = D(() => r.isDateDisabled(t.day) || r.disableDaysOutsideCurrentView.value && d.value), y = D(() => d.value || f.value ? !1 : !r.disabled.value && r.isPlaceholderFocusable.value && ba(t.day, r.placeholder.value) ? !0 : (!r.hasSelectedDate.value || r.isSelectedDateDisabled.value) && !r.isPlaceholderFocusable.value ? r.firstFocusableDate.value && ba(t.day, r.firstFocusableDate.value) : !1), p = D(() => r.isDateSelected(t.day));
    function g(w) {
      r.readonly.value || r.isDateDisabled(w) || r.isDateUnavailable?.(w) || r.onDateChange(w);
    }
    function h() {
      f.value || g(t.day);
    }
    function k(w) {
      if (f.value || (w.code === a.ENTER || w.code === a.SPACE_CODE) && (w.ctrlKey || w.metaKey || w.altKey)) return;
      w.preventDefault(), w.stopPropagation();
      const b = r.parentElement.value, S = 7, z = r.dir.value === "rtl" ? -1 : 1;
      switch (w.code) {
        case a.ARROW_RIGHT:
          $(t.day, z);
          break;
        case a.ARROW_LEFT:
          $(t.day, -z);
          break;
        case a.ARROW_UP:
          $(t.day, -S);
          break;
        case a.ARROW_DOWN:
          $(t.day, S);
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          g(t.day);
      }
      function $(q, C) {
        const E = q.add({ days: C });
        if (r.minValue.value && E.compare(r.minValue.value) < 0 || r.maxValue.value && E.compare(r.maxValue.value) > 0) return;
        const M = b.querySelector(`[data-value='${E.toString()}']:not([data-outside-view])`);
        if (!M) {
          if (C > 0) {
            if (r.isNextButtonDisabled()) return;
            r.nextPage();
          } else {
            if (r.isPrevButtonDisabled()) return;
            r.prevPage();
          }
          _e(() => {
            $(q, C);
          });
          return;
        }
        if (M && M.hasAttribute("data-disabled")) return $(E, C);
        r.onPlaceholderChange(E), M?.focus();
      }
    }
    return (w, b) => (v(), x(u(ie), {
      ref_key: "primitiveElement",
      ref: n,
      as: t.as,
      "as-child": t.asChild,
      role: "button",
      "aria-label": i.value,
      "data-reka-calendar-cell-trigger": "",
      "aria-disabled": f.value || l.value ? !0 : void 0,
      "data-selected": p.value ? !0 : void 0,
      "data-value": w.day.toString(),
      "data-disabled": f.value ? "" : void 0,
      "data-unavailable": l.value ? "" : void 0,
      "data-today": s.value ? "" : void 0,
      "data-outside-view": d.value ? "" : void 0,
      "data-outside-visible-view": c.value ? "" : void 0,
      "data-focused": y.value ? "" : void 0,
      tabindex: y.value ? 0 : d.value || f.value ? void 0 : -1,
      onClick: h,
      onKeydown: mt(k, [
        "up",
        "down",
        "left",
        "right",
        "space",
        "enter"
      ])
    }, {
      default: m(() => [A(w.$slots, "default", {
        dayValue: o.value,
        disabled: f.value,
        today: s.value,
        selected: p.value,
        outsideView: d.value,
        outsideVisibleView: c.value,
        unavailable: l.value
      }, () => [J(V(o.value), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-label",
      "aria-disabled",
      "data-selected",
      "data-value",
      "data-disabled",
      "data-unavailable",
      "data-today",
      "data-outside-view",
      "data-outside-visible-view",
      "data-focused",
      "tabindex"
    ]));
  }
}), pE = fE, yE = /* @__PURE__ */ O({
  __name: "CalendarGrid",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "table"
    }
  },
  setup(e) {
    const t = e, a = Pr(), r = D(() => a.disabled.value ? !0 : void 0), n = D(() => a.readonly.value ? !0 : void 0);
    return (o, i) => (v(), x(u(ie), I(t, {
      tabindex: "-1",
      role: "application",
      "aria-readonly": n.value,
      "aria-disabled": r.value,
      "data-readonly": n.value && "",
      "data-disabled": r.value && ""
    }), {
      default: m(() => [A(o.$slots, "default")]),
      _: 3
    }, 16, [
      "aria-readonly",
      "aria-disabled",
      "data-readonly",
      "data-disabled"
    ]));
  }
}), mE = yE, hE = /* @__PURE__ */ O({
  __name: "CalendarGridBody",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "tbody"
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(ie), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), vE = hE, gE = /* @__PURE__ */ O({
  __name: "CalendarGridHead",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "thead"
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(ie), I(t, { "aria-hidden": "true" }), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), bE = gE, kE = /* @__PURE__ */ O({
  __name: "CalendarGridRow",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "tr"
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(ie), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), wE = kE, xE = /* @__PURE__ */ O({
  __name: "CalendarHeadCell",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "th"
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(ie), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), zE = xE, _E = /* @__PURE__ */ O({
  __name: "CalendarHeader",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(ie), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), SE = _E, qE = /* @__PURE__ */ O({
  __name: "CalendarHeading",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e, a = Pr();
    return (r, n) => (v(), x(u(ie), I(t, { "data-disabled": u(a).disabled.value ? "" : void 0 }), {
      default: m(() => [A(r.$slots, "default", { headingValue: u(a).headingValue.value }, () => [J(V(u(a).headingValue.value), 1)])]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), OE = qE, AE = /* @__PURE__ */ O({
  __name: "CalendarNext",
  props: {
    nextPage: {
      type: Function,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = D(() => r.disabled.value || r.isNextButtonDisabled(t.nextPage)), r = Pr();
    function n() {
      a.value || r.nextPage(t.nextPage);
    }
    return (o, i) => (v(), x(u(ie), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: t.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: n
    }, {
      default: m(() => [A(o.$slots, "default", { disabled: a.value }, () => [i[0] || (i[0] = J(" Next page "))])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "type",
      "aria-disabled",
      "data-disabled",
      "disabled"
    ]));
  }
}), CE = AE, EE = /* @__PURE__ */ O({
  __name: "CalendarPrev",
  props: {
    prevPage: {
      type: Function,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = D(() => r.disabled.value || r.isPrevButtonDisabled(t.prevPage)), r = Pr();
    function n() {
      a.value || r.prevPage(t.prevPage);
    }
    return (o, i) => (v(), x(u(ie), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: t.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: n
    }, {
      default: m(() => [A(o.$slots, "default", { disabled: a.value }, () => [i[0] || (i[0] = J(" Prev page "))])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "type",
      "aria-disabled",
      "data-disabled",
      "disabled"
    ]));
  }
}), $E = EE;
const [BE, ME] = /* @__PURE__ */ Be("RovingFocusGroup");
var DE = /* @__PURE__ */ O({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    currentTabStopId: {
      type: [String, null],
      required: !1
    },
    defaultCurrentTabStopId: {
      type: String,
      required: !1
    },
    preventScrollOnEntryFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, { loop: o, orientation: i, dir: l } = Ye(r), s = ia(l), d = /* @__PURE__ */ Xe(r, "currentTabStopId", n, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), c = F(!1), f = F(!1), y = F(0), { getItems: p, CollectionSlot: g } = St({ isProvider: !0 });
    function h(w) {
      const b = !f.value;
      if (w.currentTarget && w.target === w.currentTarget && b && !c.value) {
        const S = new CustomEvent(KO, GO);
        if (w.currentTarget.dispatchEvent(S), n("entryFocus", S), !S.defaultPrevented) {
          const z = p().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), $ = z.find((M) => M.getAttribute("data-active") === ""), q = z.find((M) => M.getAttribute("data-highlighted") === ""), C = z.find((M) => M.id === d.value), E = [
            $,
            q,
            C,
            ...z
          ].filter(Boolean);
          $g(E, r.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function k() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({ getItems: p }), ME({
      loop: o,
      dir: s,
      orientation: i,
      currentTabStopId: d,
      onItemFocus: (w) => {
        d.value = w;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        y.value++;
      },
      onFocusableItemRemove: () => {
        y.value--;
      }
    }), (w, b) => (v(), x(u(g), null, {
      default: m(() => [_(u(ie), {
        tabindex: c.value || y.value === 0 ? -1 : 0,
        "data-orientation": u(i),
        as: w.as,
        "as-child": w.asChild,
        dir: u(s),
        style: { outline: "none" },
        onMousedown: b[0] || (b[0] = (S) => f.value = !0),
        onMouseup: k,
        onFocus: h,
        onBlur: b[1] || (b[1] = (S) => c.value = !1)
      }, {
        default: m(() => [A(w.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "as",
        "as-child",
        "dir"
      ])]),
      _: 3
    }));
  }
}), Kg = DE, PE = /* @__PURE__ */ O({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: !1
    },
    focusable: {
      type: Boolean,
      required: !1,
      default: !0
    },
    active: {
      type: Boolean,
      required: !1
    },
    allowShiftKey: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, a = BE(), r = et(), n = D(() => t.tabStopId || r), o = D(() => a.currentTabStopId.value === n.value), { getItems: i, CollectionItem: l } = St();
    Ae(() => {
      t.focusable && a.onFocusableItemAdd();
    }), _t(() => {
      t.focusable && a.onFocusableItemRemove();
    }), ge(() => t.focusable, (d, c) => {
      d !== c && (d ? a.onFocusableItemAdd() : a.onFocusableItemRemove());
    });
    function s(d) {
      if (d.key === "Tab" && d.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = Eg(d, a.orientation.value, a.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let f = [...i().map((y) => y.ref).filter((y) => y.dataset.disabled !== "")];
        if (c === "last") f.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && f.reverse();
          const y = f.indexOf(d.currentTarget);
          f = a.loop.value ? ZO(f, y + 1) : f.slice(y + 1);
        }
        _e(() => $g(f));
      }
    }
    return (d, c) => (v(), x(u(l), null, {
      default: m(() => [_(u(ie), {
        tabindex: o.value ? 0 : -1,
        "data-orientation": u(a).orientation.value,
        "data-active": d.active ? "" : void 0,
        "data-disabled": d.focusable ? void 0 : "",
        as: d.as,
        "as-child": d.asChild,
        onMousedown: c[0] || (c[0] = (f) => {
          d.focusable ? u(a).onItemFocus(n.value) : f.preventDefault();
        }),
        onFocus: c[1] || (c[1] = (f) => u(a).onItemFocus(n.value)),
        onKeydown: s
      }, {
        default: m(() => [A(d.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "data-active",
        "data-disabled",
        "as",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), Gg = PE;
const [jE] = /* @__PURE__ */ Be("CheckboxGroupRoot");
function Gs(e) {
  return e === "indeterminate";
}
function Hg(e) {
  return Gs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [IE, FE] = /* @__PURE__ */ Be("CheckboxRoot");
var TE = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    value: {
      type: null,
      required: !1,
      default: "on"
    },
    id: {
      type: String,
      required: !1
    },
    trueValue: {
      type: null,
      required: !1,
      default: () => !0
    },
    falseValue: {
      type: null,
      required: !1,
      default: () => !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, { forwardRef: n, currentElement: o } = de(), i = jE(null), l = /* @__PURE__ */ Xe(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? a.falseValue,
      passive: a.modelValue === void 0
    }), s = D(() => i?.disabled.value || a.disabled), d = D(() => ga(l.value, a.trueValue)), c = D(() => br(i?.modelValue.value) ? l.value === "indeterminate" ? "indeterminate" : d.value : gc(i.modelValue.value, a.value));
    function f() {
      if (br(i?.modelValue.value))
        l.value === "indeterminate" ? l.value = a.trueValue : l.value = d.value ? a.falseValue : a.trueValue;
      else {
        const k = [...i.modelValue.value || []];
        if (gc(k, a.value)) {
          const w = k.findIndex((b) => ga(b, a.value));
          k.splice(w, 1);
        } else k.push(a.value);
        i.modelValue.value = k;
      }
    }
    const y = To(o), p = mg(), g = Mk(), h = D(() => {
      if (!g["aria-label"])
        return a.id && o.value ? document.querySelector(`[for="${a.id}"]`)?.innerText : void 0;
    });
    return FE({
      disabled: s,
      state: c
    }), (k, w) => (v(), W(xe, null, [(v(), x(Ua(u(i)?.rovingFocus.value ? u(Gg) : u(ie)), I({
      ...k.$attrs,
      ...u(p)
    }, {
      id: k.id,
      ref: u(n),
      role: "checkbox",
      "as-child": k.asChild,
      as: k.as,
      type: k.as === "button" ? "button" : void 0,
      "aria-checked": u(Gs)(c.value) ? "mixed" : c.value,
      "aria-required": k.required,
      "aria-label": k.$attrs["aria-label"] || h.value,
      "data-state": u(Hg)(c.value),
      "data-disabled": s.value ? "" : void 0,
      disabled: s.value,
      focusable: u(i)?.rovingFocus.value ? !s.value : void 0,
      onKeydown: mt(Pe(() => {
      }, ["prevent"]), ["enter"]),
      onClick: f
    }), {
      default: m(() => [A(k.$slots, "default", {
        modelValue: u(l),
        state: c.value
      })]),
      _: 3
    }, 16, [
      "id",
      "as-child",
      "as",
      "type",
      "aria-checked",
      "aria-required",
      "aria-label",
      "data-state",
      "data-disabled",
      "disabled",
      "focusable",
      "onKeydown"
    ])), u(y) && k.name && !u(i) ? (v(), x(u(Ts), I({
      key: 0,
      type: "checkbox",
      checked: !!c.value,
      name: k.name,
      value: k.value,
      disabled: s.value,
      required: k.required
    }, u(p)), null, 16, [
      "checked",
      "name",
      "value",
      "disabled",
      "required"
    ])) : Z("v-if", !0)], 64));
  }
}), NE = TE, VE = /* @__PURE__ */ O({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const { forwardRef: t } = de(), a = IE();
    return (r, n) => (v(), x(u(za), { present: r.forceMount || u(Gs)(u(a).state.value) || u(a).state.value === !0 }, {
      default: m(() => [_(u(ie), I({
        ref: u(t),
        "data-state": u(Hg)(u(a).state.value),
        "data-disabled": u(a).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": r.asChild,
        as: r.as
      }, r.$attrs), {
        default: m(() => [A(r.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-disabled",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), RE = VE, UE = /* @__PURE__ */ O({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Uo), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), LE = UE;
function WE() {
  const e = F(!1);
  return Ae(() => {
    Hn("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), Hn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const KE = /* @__PURE__ */ Kf(WE), [Yo, GE] = /* @__PURE__ */ Be(["MenuRoot", "MenuSub"], "MenuContext"), [Hs, HE] = /* @__PURE__ */ Be("MenuRoot");
var YE = /* @__PURE__ */ O({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, r = t, { modal: n, dir: o } = Ye(a), i = ia(o), l = /* @__PURE__ */ Xe(a, "open", r), s = F(), d = KE();
    return GE({
      open: l,
      onOpenChange: (c) => {
        l.value = c;
      },
      content: s,
      onContentChange: (c) => {
        s.value = c;
      }
    }), HE({
      onClose: () => {
        l.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: i,
      modal: n
    }), (c, f) => (v(), x(u(Ro), null, {
      default: m(() => [A(c.$slots, "default")]),
      _: 3
    }));
  }
}), ZE = YE;
const [Yg, QE] = /* @__PURE__ */ Be("MenuContent");
var JE = /* @__PURE__ */ O({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Vf({
    loop: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    disableOutsideScroll: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Ug }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Yo(), o = Hs(), { trapFocus: i, disableOutsidePointerEvents: l, loop: s } = Ye(a);
    Fo(), bn(l.value);
    const d = F(""), c = F(0), f = F(0), y = F(null), p = F("right"), g = F(0), h = F(null), k = F(), { forwardRef: w, currentElement: b } = de(), { handleTypeaheadSearch: S } = No(), z = F();
    function $(P) {
      const L = bc(P, z.value || Ge(), b.value, {
        loop: s.value,
        arrowKeyOptions: "vertical",
        dir: o?.dir.value,
        focus: !1,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      L && (z.value = L, L.scrollIntoView({ block: "nearest" }));
    }
    function q() {
      z.value && z.value.click();
    }
    const C = F(), E = F();
    ge(z, (P) => {
      if (E.value && (P === void 0 || P !== E.value.trigger.value)) {
        if (P === void 0) return;
        E.value.onOpenChange(!1), E.value = void 0;
      }
    }), ge(b, (P) => {
      n.onContentChange(P);
    }), _t(() => {
      window.clearTimeout(c.value);
    });
    function M(P) {
      return p.value === y.value?.side && iO(P, y.value?.area);
    }
    async function R(P) {
      r("openAutoFocus", P), !P.defaultPrevented && (P.preventDefault(), b.value?.focus({ preventScroll: !0 }));
    }
    function oe(P) {
      if (P.defaultPrevented) return;
      const L = P.target, U = L.closest("[data-reka-menu-content]") === P.currentTarget, G = ["input", "textarea"].includes(L.tagName.toLowerCase()), ce = P.ctrlKey || P.altKey || P.metaKey, T = P.key.length === 1, fe = bc(P, Ge(), b.value, {
        loop: s.value,
        arrowKeyOptions: "vertical",
        dir: o?.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (fe) return fe?.focus();
      if (P.code === "Space") return;
      const te = k.value?.getItems() ?? [];
      if (U && (P.key === "Tab" && o.modal.value && P.preventDefault(), !ce && T && !G && S(P.key, te)), P.target !== b.value || !nO.includes(P.key)) return;
      P.preventDefault();
      const he = [...te.map((Ne) => Ne.ref)];
      wg.includes(P.key) && he.reverse(), Tl(he);
    }
    function ae(P) {
      P?.currentTarget?.contains?.(P.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function H(P) {
      if (!co(P)) return;
      const L = P.target, U = g.value !== P.clientX;
      if (P?.currentTarget?.contains(L) && U) {
        const G = P.clientX > g.value ? "right" : "left";
        p.value = G, g.value = P.clientX;
      }
    }
    function re(P) {
      co(P) && C.value && C.value.focus();
    }
    return QE({
      onItemEnter: (P) => !!M(P),
      onItemLeave: (P) => M(P) ? !0 : (["INPUT", "TEXTAREA"].includes(Ge()?.tagName || "") || b.value?.focus(), h.value = null, !1),
      onTriggerLeave: (P) => !!M(P),
      searchRef: d,
      highlightedElement: z,
      onKeydownNavigation: $,
      onKeydownEnter: q,
      filterElement: C,
      onFilterElementChange: (P) => {
        C.value = P;
      },
      activeSubmenuContext: E,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (P) => {
        y.value = P;
      }
    }), (P, L) => (v(), x(u(zn), {
      "as-child": "",
      trapped: u(i),
      onMountAutoFocus: R,
      onUnmountAutoFocus: L[7] || (L[7] = (U) => r("closeAutoFocus", U))
    }, {
      default: m(() => [_(u(xn), {
        "as-child": "",
        "disable-outside-pointer-events": u(l),
        onEscapeKeyDown: L[2] || (L[2] = (U) => r("escapeKeyDown", U)),
        onPointerDownOutside: L[3] || (L[3] = (U) => r("pointerDownOutside", U)),
        onFocusOutside: L[4] || (L[4] = (U) => r("focusOutside", U)),
        onInteractOutside: L[5] || (L[5] = (U) => r("interactOutside", U)),
        onDismiss: L[6] || (L[6] = (U) => r("dismiss"))
      }, {
        default: m(() => [_(u(Kg), {
          ref_key: "rovingFocusGroupRef",
          ref: k,
          "current-tab-stop-id": h.value,
          "onUpdate:currentTabStopId": L[0] || (L[0] = (U) => h.value = U),
          "as-child": "",
          orientation: "vertical",
          dir: u(o).dir.value,
          loop: u(s),
          onEntryFocus: L[1] || (L[1] = (U) => {
            r("entryFocus", U), u(o).isUsingKeyboardRef.value || U.preventDefault();
          })
        }, {
          default: m(() => [_(u(Ho), {
            ref: u(w),
            role: "menu",
            as: P.as,
            "as-child": P.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": u(xg)(u(n).open.value),
            dir: u(o).dir.value,
            side: P.side,
            "side-offset": P.sideOffset,
            align: P.align,
            "align-offset": P.alignOffset,
            "avoid-collisions": P.avoidCollisions,
            "collision-boundary": P.collisionBoundary,
            "collision-padding": P.collisionPadding,
            "arrow-padding": P.arrowPadding,
            "prioritize-position": P.prioritizePosition,
            "position-strategy": P.positionStrategy,
            "update-position-strategy": P.updatePositionStrategy,
            sticky: P.sticky,
            "hide-when-detached": P.hideWhenDetached,
            reference: P.reference,
            onKeydown: oe,
            onBlur: ae,
            onPointermove: H,
            onPointerenter: re
          }, {
            default: m(() => [A(P.$slots, "default")]),
            _: 3
          }, 8, [
            "as",
            "as-child",
            "data-state",
            "dir",
            "side",
            "side-offset",
            "align",
            "align-offset",
            "avoid-collisions",
            "collision-boundary",
            "collision-padding",
            "arrow-padding",
            "prioritize-position",
            "position-strategy",
            "update-position-strategy",
            "sticky",
            "hide-when-detached",
            "reference"
          ])]),
          _: 3
        }, 8, [
          "current-tab-stop-id",
          "dir",
          "loop"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Zg = JE, XE = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = Yg(), { forwardRef: r, currentElement: n } = de(), { CollectionItem: o } = St(), i = F(!1), l = D(() => i.value || n.value != null && a.highlightedElement.value === n.value);
    async function s(c) {
      if (!(c.defaultPrevented || !co(c))) {
        if (t.disabled) a.onItemLeave(c);
        else if (!a.onItemEnter(c)) {
          const f = c.currentTarget;
          a.highlightedElement.value = f, ["INPUT", "TEXTAREA"].includes(Ge()?.tagName || "") || f.focus({ preventScroll: !0 });
        }
      }
    }
    async function d(c) {
      await _e(), !(c.defaultPrevented || !co(c) || a.highlightedElement.value !== n.value) && !a.onItemLeave(c) && a.highlightedElement.value === n.value && (a.highlightedElement.value = void 0);
    }
    return (c, f) => (v(), x(u(o), { value: { textValue: c.textValue } }, {
      default: m(() => [_(u(ie), I({
        ref: u(r),
        role: "menuitem",
        tabindex: "-1"
      }, c.$attrs, {
        as: c.as,
        "as-child": c.asChild,
        "aria-disabled": c.disabled || void 0,
        "data-disabled": c.disabled ? "" : void 0,
        "data-highlighted": l.value ? "" : void 0,
        onPointermove: s,
        onPointerleave: d,
        onFocus: f[0] || (f[0] = async (y) => {
          await _e(), !(y.defaultPrevented || c.disabled) && (i.value = !0, u(a).highlightedElement.value = y.currentTarget);
        }),
        onBlur: f[1] || (f[1] = async (y) => {
          await _e(), !y.defaultPrevented && (i.value = !1);
        })
      }), {
        default: m(() => [A(c.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "aria-disabled",
        "data-disabled",
        "data-highlighted"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), e$ = XE, t$ = /* @__PURE__ */ O({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, r = t, { forwardRef: n, currentElement: o } = de(), i = Hs(), l = Yg(), s = F(!1);
    async function d() {
      const c = o.value;
      if (!a.disabled && c) {
        const f = new CustomEvent(aO, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", f), await _e(), f.defaultPrevented ? s.value = !1 : i.onClose();
      }
    }
    return (c, f) => (v(), x(e$, I(a, {
      ref: u(n),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        s.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (y) => {
        await _e(), !y.defaultPrevented && (s.value || y.currentTarget?.click());
      }),
      onKeydown: f[2] || (f[2] = async (y) => {
        const p = u(l).searchRef.value !== "";
        c.disabled || p && y.key === " " || u(Fl).includes(y.key) && (y.currentTarget?.click(), y.preventDefault());
      })
    }), {
      default: m(() => [A(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), a$ = t$, r$ = /* @__PURE__ */ O({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Me(a, r), o = Yo(), { forwardRef: i, currentElement: l } = de();
    return wn(l), (s, d) => (v(), x(Zg, I(u(n), {
      ref: u(i),
      "trap-focus": u(o).open.value,
      "disable-outside-pointer-events": u(o).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => u(o).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Pe((c) => r("focusOutside", c), ["prevent"]))
    }), {
      default: m(() => [A(s.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), n$ = r$, o$ = /* @__PURE__ */ O({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = Me(e, t), r = Yo();
    return (n, o) => (v(), x(Zg, I(u(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: o[0] || (o[0] = (i) => u(r).onOpenChange(!1))
    }), {
      default: m(() => [A(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), i$ = o$, l$ = /* @__PURE__ */ O({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = Me(e, t), r = Yo(), n = Hs();
    return (o, i) => (v(), x(u(za), { present: o.forceMount || u(r).open.value }, {
      default: m(() => [u(n).modal.value ? (v(), x(n$, Ie(I({ key: 0 }, {
        ...o.$attrs,
        ...u(a)
      })), {
        default: m(() => [A(o.$slots, "default")]),
        _: 3
      }, 16)) : (v(), x(i$, Ie(I({ key: 1 }, {
        ...o.$attrs,
        ...u(a)
      })), {
        default: m(() => [A(o.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), s$ = l$, u$ = /* @__PURE__ */ O({
  __name: "MenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Mr), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), d$ = u$;
const [Sn, c$] = /* @__PURE__ */ Be("PopoverRoot");
var f$ = /* @__PURE__ */ O({
  __name: "PopoverRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, r = t, { modal: n } = Ye(a), o = /* @__PURE__ */ Xe(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), i = F(), l = F(!1);
    return c$({
      contentId: "",
      triggerId: "",
      modal: n,
      open: o,
      onOpenChange: (s) => {
        o.value = s;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerElement: i,
      hasCustomAnchor: l
    }), (s, d) => (v(), x(u(Ro), null, {
      default: m(() => [A(s.$slots, "default", {
        open: u(o),
        close: () => o.value = !1
      })]),
      _: 3
    }));
  }
}), p$ = f$, y$ = /* @__PURE__ */ O({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Fe(me(a, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: o } = de(), i = Sn();
    return Fo(), (l, s) => (v(), x(u(zn), {
      "as-child": "",
      loop: "",
      trapped: l.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (d) => r("openAutoFocus", d)),
      onUnmountAutoFocus: s[6] || (s[6] = (d) => r("closeAutoFocus", d))
    }, {
      default: m(() => [_(u(xn), {
        "as-child": "",
        "disable-outside-pointer-events": l.disableOutsidePointerEvents,
        onPointerDownOutside: s[0] || (s[0] = (d) => r("pointerDownOutside", d)),
        onInteractOutside: s[1] || (s[1] = (d) => r("interactOutside", d)),
        onEscapeKeyDown: s[2] || (s[2] = (d) => r("escapeKeyDown", d)),
        onFocusOutside: s[3] || (s[3] = (d) => r("focusOutside", d)),
        onDismiss: s[4] || (s[4] = (d) => u(i).onOpenChange(!1))
      }, {
        default: m(() => [_(u(Ho), I(u(n), {
          id: u(i).contentId,
          ref: u(o),
          "data-state": u(i).open.value ? "open" : "closed",
          "aria-labelledby": u(i).triggerId,
          style: {
            "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
            "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
            "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
          },
          role: "dialog"
        }), {
          default: m(() => [A(l.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "data-state",
          "aria-labelledby"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Qg = y$, m$ = /* @__PURE__ */ O({
  __name: "PopoverContentModal",
  props: {
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Sn(), o = F(!1);
    bn(!0);
    const i = Me(a, r), { forwardRef: l, currentElement: s } = de();
    return wn(s), (d, c) => (v(), x(Qg, I(u(i), {
      ref: u(l),
      "trap-focus": u(n).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Pe((f) => {
        r("closeAutoFocus", f), o.value || u(n).triggerElement.value?.focus();
      }, ["prevent"])),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        r("pointerDownOutside", f);
        const y = f.detail.originalEvent, p = y.button === 0 && y.ctrlKey === !0, g = y.button === 2 || p;
        o.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = Pe(() => {
      }, ["prevent"]))
    }), {
      default: m(() => [A(d.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), h$ = m$, v$ = /* @__PURE__ */ O({
  __name: "PopoverContentNonModal",
  props: {
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Sn(), o = F(!1), i = F(!1), l = Me(a, r);
    return (s, d) => (v(), x(Qg, I(u(l), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        r("closeAutoFocus", c), c.defaultPrevented || (o.value || u(n).triggerElement.value?.focus(), c.preventDefault()), o.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        r("interactOutside", c), c.defaultPrevented || (o.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        u(n).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: m(() => [A(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), g$ = v$, b$ = /* @__PURE__ */ O({
  __name: "PopoverContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Sn(), o = Me(a, r), { forwardRef: i } = de();
    return n.contentId ||= et(void 0, "reka-popover-content"), (l, s) => (v(), x(u(za), { present: l.forceMount || u(n).open.value }, {
      default: m(() => [u(n).modal.value ? (v(), x(h$, I({ key: 0 }, u(o), { ref: u(i) }), {
        default: m(() => [A(l.$slots, "default")]),
        _: 3
      }, 16)) : (v(), x(g$, I({ key: 1 }, u(o), { ref: u(i) }), {
        default: m(() => [A(l.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), k$ = b$, w$ = /* @__PURE__ */ O({
  __name: "PopoverPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Mr), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), x$ = w$, z$ = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = Sn(), { forwardRef: r, currentElement: n } = de();
    return a.triggerId ||= et(void 0, "reka-popover-trigger"), Ae(() => {
      a.triggerElement.value = n.value;
    }), (o, i) => (v(), x(Ua(u(a).hasCustomAnchor.value ? u(ie) : u(Uo)), { "as-child": "" }, {
      default: m(() => [_(u(ie), {
        id: u(a).triggerId,
        ref: u(r),
        type: o.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": u(a).open.value,
        "aria-controls": u(a).contentId,
        "data-state": u(a).open.value ? "open" : "closed",
        as: o.as,
        "as-child": t.asChild,
        onClick: u(a).onOpenToggle
      }, {
        default: m(() => [A(o.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "as",
        "as-child",
        "onClick"
      ])]),
      _: 3
    }));
  }
}), _$ = z$;
const [Jg, S$] = /* @__PURE__ */ Be("DropdownMenuRoot");
var q$ = /* @__PURE__ */ O({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, r = t;
    de();
    const n = /* @__PURE__ */ Xe(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = F(), { modal: i, dir: l } = Ye(a), s = ia(l);
    return S$({
      open: n,
      onOpenChange: (d) => {
        n.value = d;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      triggerId: "",
      triggerElement: o,
      contentId: "",
      modal: i,
      dir: s
    }), (d, c) => (v(), x(u(ZE), {
      open: u(n),
      "onUpdate:open": c[0] || (c[0] = (f) => tt(n) ? n.value = f : null),
      dir: u(s),
      modal: u(i)
    }, {
      default: m(() => [A(d.$slots, "default", { open: u(n) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), O$ = q$, A$ = /* @__PURE__ */ O({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    de();
    const r = Jg(), n = F(!1);
    function o(i) {
      i.defaultPrevented || (n.value || setTimeout(() => {
        r.triggerElement.value?.focus();
      }, 0), n.value = !1, i.preventDefault());
    }
    return r.contentId ||= et(void 0, "reka-dropdown-menu-content"), (i, l) => (v(), x(u(s$), I(u(a), {
      id: u(r).contentId,
      "aria-labelledby": u(r)?.triggerId,
      style: {
        "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
      },
      onCloseAutoFocus: o,
      onInteractOutside: l[0] || (l[0] = (s) => {
        if (s.defaultPrevented) return;
        const d = s.detail.originalEvent, c = d.button === 0 && d.ctrlKey === !0, f = d.button === 2 || c;
        (!u(r).modal.value || f) && (n.value = !0), u(r).triggerElement.value?.contains(s.target) && s.preventDefault();
      })
    }), {
      default: m(() => [A(i.$slots, "default")]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), C$ = A$, E$ = /* @__PURE__ */ O({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, r = Br(t);
    return de(), (n, o) => (v(), x(u(a$), Ie(We({
      ...a,
      ...u(r)
    })), {
      default: m(() => [A(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), $$ = E$, B$ = /* @__PURE__ */ O({
  __name: "DropdownMenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(d$), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), M$ = B$, D$ = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = Jg(), { forwardRef: r, currentElement: n } = de();
    return Ae(() => {
      a.triggerElement = n;
    }), a.triggerId ||= et(void 0, "reka-dropdown-menu-trigger"), (o, i) => (v(), x(u(LE), { "as-child": "" }, {
      default: m(() => [_(u(ie), {
        id: u(a).triggerId,
        ref: u(r),
        type: o.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: o.as,
        "aria-haspopup": "menu",
        "aria-expanded": u(a).open.value,
        "aria-controls": u(a).open.value ? u(a).contentId : void 0,
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        "data-state": u(a).open.value ? "open" : "closed",
        onClick: i[0] || (i[0] = async (l) => {
          !o.disabled && l.button === 0 && l.ctrlKey === !1 && (u(a)?.onOpenToggle(), await _e(), u(a).open.value && l.preventDefault());
        }),
        onKeydown: i[1] || (i[1] = mt((l) => {
          o.disabled || (["Enter", " "].includes(l.key) && u(a).onOpenToggle(), l.key === "ArrowDown" && u(a).onOpenChange(!0), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(l.key) && l.preventDefault());
        }, [
          "enter",
          "space",
          "arrow-down"
        ]))
      }, {
        default: m(() => [A(o.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "as-child",
        "as",
        "aria-expanded",
        "aria-controls",
        "data-disabled",
        "disabled",
        "data-state"
      ])]),
      _: 3
    }));
  }
}), P$ = D$, j$ = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "label"
    }
  },
  setup(e) {
    const t = e;
    return de(), (a, r) => (v(), x(u(ie), I(t, { onMousedown: r[0] || (r[0] = (n) => {
      !n.defaultPrevented && n.detail > 1 && n.preventDefault();
    }) }), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), I$ = j$;
let F$ = !1;
try {
  F$ = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let T$ = !1;
try {
  T$ = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const N$ = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], V$ = [" ", "Enter"], Ot = 10;
function dn(e, t, a) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => Wl(r, t, a)) : Wl(e, t, a);
}
function Wl(e, t, a) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof a == "function" ? a(e, t) : typeof a == "string" ? e?.[a] === t?.[a] : ga(e, t);
}
function R$(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
const U$ = ["value"], [_a, Xg] = /* @__PURE__ */ Be("SelectRoot");
var L$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    nullableValue: {
      type: String,
      required: !1,
      default: ""
    },
    by: {
      type: [String, Function],
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    autocomplete: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const a = e, r = t, { required: n, disabled: o, multiple: i, dir: l } = Ye(a), s = /* @__PURE__ */ Xe(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? (i.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), d = /* @__PURE__ */ Xe(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), c = F(), f = F(), y = F({
      x: 0,
      y: 0
    }), p = D(() => i.value && Array.isArray(s.value) ? s.value?.length === 0 : br(s.value));
    St({ isProvider: !0 });
    const g = ia(l), h = To(c), k = F(/* @__PURE__ */ new Set()), w = D(() => Array.from(k.value).map((z) => z.value).join(";"));
    function b(z) {
      if (i.value) {
        const $ = Array.isArray(s.value) ? [...s.value] : [], q = $.findIndex((C) => Wl(C, z, a.by));
        q === -1 ? $.push(z) : $.splice(q, 1), s.value = [...$];
      } else s.value = z;
    }
    function S(z) {
      return Array.from(k.value).find(($) => dn(z, $.value, a.by));
    }
    return Xg({
      triggerElement: c,
      onTriggerChange: (z) => {
        c.value = z;
      },
      valueElement: f,
      onValueElementChange: (z) => {
        f.value = z;
      },
      contentId: "",
      modelValue: s,
      onValueChange: b,
      by: a.by,
      open: d,
      multiple: i,
      required: n,
      onOpenChange: (z) => {
        d.value = z;
      },
      dir: g,
      triggerPointerDownPosRef: y,
      disabled: o,
      isEmptyModelValue: p,
      optionsSet: k,
      onOptionAdd: (z) => {
        const $ = S(z.value);
        $ && k.value.delete($), k.value.add(z);
      },
      onOptionRemove: (z) => {
        const $ = S(z.value);
        $ && k.value.delete($);
      }
    }), (z, $) => (v(), x(u(Ro), null, {
      default: m(() => [A(z.$slots, "default", {
        modelValue: u(s),
        open: u(d)
      }), u(h) && z.name ? (v(), x(G$, {
        key: w.value,
        "aria-hidden": "true",
        tabindex: "-1",
        multiple: u(i),
        required: u(n),
        name: z.name,
        autocomplete: z.autocomplete,
        disabled: u(o),
        value: u(s)
      }, {
        default: m(() => [u(br)(u(s)) ? (v(), W("option", {
          key: 0,
          value: z.nullableValue
        }, null, 8, U$)) : Z("v-if", !0), (v(!0), W(xe, null, De(Array.from(k.value), (q) => (v(), W("option", I({ key: q.value ?? "" }, { ref_for: !0 }, q), null, 16))), 128))]),
        _: 1
      }, 8, [
        "multiple",
        "required",
        "name",
        "autocomplete",
        "disabled",
        "value"
      ])) : Z("v-if", !0)]),
      _: 3
    }));
  }
}), W$ = L$, K$ = /* @__PURE__ */ O({
  __name: "BubbleSelect",
  props: {
    autocomplete: {
      type: String,
      required: !1
    },
    autofocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    form: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    },
    size: {
      type: Number,
      required: !1
    },
    value: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = F(), r = _a();
    ge(() => t.value, (o, i) => {
      const l = window.HTMLSelectElement.prototype, s = Object.getOwnPropertyDescriptor(l, "value").set;
      if (o !== i && s && a.value) {
        const d = new Event("change", { bubbles: !0 });
        s.call(a.value, o), a.value.dispatchEvent(d);
      }
    });
    function n(o) {
      r.onValueChange(o.target.value);
    }
    return (o, i) => (v(), x(u(Cg), { "as-child": "" }, {
      default: m(() => [ee("select", I({
        ref_key: "selectElement",
        ref: a
      }, t, { onInput: n }), [A(o.$slots, "default")], 16)]),
      _: 3
    }));
  }
}), G$ = K$, H$ = /* @__PURE__ */ O({
  __name: "SelectPopperPosition",
  props: {
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1,
      default: Ot
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Fe(e);
    return (a, r) => (v(), x(u(Ho), I(u(t), { style: {
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Y$ = H$;
const Z$ = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Ha, eb] = /* @__PURE__ */ Be("SelectContent");
var Q$ = /* @__PURE__ */ O({
  __name: "SelectContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "item-aligned"
    },
    bodyLock: {
      type: Boolean,
      required: !1,
      default: !0
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: t }) {
    const a = e, r = t, n = _a();
    Fo(), bn(a.bodyLock);
    const { CollectionSlot: o, getItems: i } = St(), l = F();
    wn(l);
    const { search: s, handleTypeaheadSearch: d } = No(), c = F(), f = F(), y = F(), p = F(!1), g = F(!1), h = F(!1);
    function k() {
      f.value && l.value && Tl([f.value, l.value]);
    }
    ge(p, () => {
      k();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: b } = n;
    it((q) => {
      if (!l.value) return;
      let C = {
        x: 0,
        y: 0
      };
      const E = (R) => {
        C = {
          x: Math.abs(Math.round(R.pageX) - (b.value?.x ?? 0)),
          y: Math.abs(Math.round(R.pageY) - (b.value?.y ?? 0))
        };
      }, M = (R) => {
        R.pointerType !== "touch" && (C.x <= 10 && C.y <= 10 ? R.preventDefault() : l.value?.contains(R.target) || w(!1), document.removeEventListener("pointermove", E), b.value = null);
      };
      b.value !== null && (document.addEventListener("pointermove", E), document.addEventListener("pointerup", M, {
        capture: !0,
        once: !0
      })), q(() => {
        document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", M, { capture: !0 });
      });
    });
    function S(q) {
      const C = q.ctrlKey || q.altKey || q.metaKey;
      if (q.key === "Tab" && q.preventDefault(), !C && q.key.length === 1 && d(q.key, i()), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(q.key)) {
        let E = [...i().map((M) => M.ref)];
        if (["ArrowUp", "End"].includes(q.key) && (E = E.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(q.key)) {
          const M = q.target, R = E.indexOf(M);
          E = E.slice(R + 1);
        }
        setTimeout(() => Tl(E)), q.preventDefault();
      }
    }
    const z = D(() => a.position === "popper" ? a : {}), $ = Fe(z.value);
    return eb({
      content: l,
      viewport: c,
      onViewportChange: (q) => {
        c.value = q;
      },
      itemRefCallback: (q, C, E) => {
        const M = !g.value && !E, R = dn(n.modelValue.value, C, n.by);
        if (n.multiple.value) {
          if (h.value) return;
          (R || M) && (f.value = q, R && (h.value = !0));
        } else (R || M) && (f.value = q);
        M && (g.value = !0);
      },
      selectedItem: f,
      selectedItemText: y,
      onItemLeave: () => {
        l.value?.focus();
      },
      itemTextRefCallback: (q, C, E) => {
        const M = !g.value && !E;
        (dn(n.modelValue.value, C, n.by) || M) && (y.value = q);
      },
      focusSelectedItem: k,
      position: a.position,
      isPositioned: p,
      searchRef: s
    }), (q, C) => (v(), x(u(o), null, {
      default: m(() => [_(u(zn), {
        "as-child": "",
        onMountAutoFocus: C[6] || (C[6] = Pe(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: C[7] || (C[7] = (E) => {
          r("closeAutoFocus", E), !E.defaultPrevented && (u(n).triggerElement.value?.focus({ preventScroll: !0 }), E.preventDefault());
        })
      }, {
        default: m(() => [_(u(xn), {
          "as-child": "",
          "disable-outside-pointer-events": q.disableOutsidePointerEvents,
          onFocusOutside: C[2] || (C[2] = Pe(() => {
          }, ["prevent"])),
          onDismiss: C[3] || (C[3] = (E) => u(n).onOpenChange(!1)),
          onEscapeKeyDown: C[4] || (C[4] = (E) => r("escapeKeyDown", E)),
          onPointerDownOutside: C[5] || (C[5] = (E) => r("pointerDownOutside", E))
        }, {
          default: m(() => [(v(), x(Ua(q.position === "popper" ? Y$ : t2), I({
            ...q.$attrs,
            ...u($)
          }, {
            id: u(n).contentId,
            ref: (E) => {
              if (!E) return;
              const M = u(Lt)(E);
              M?.hasAttribute("data-reka-popper-content-wrapper") ? l.value = M.firstElementChild : l.value = M;
            },
            role: "listbox",
            "data-state": u(n).open.value ? "open" : "closed",
            dir: u(n).dir.value,
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none"
            },
            onContextmenu: C[0] || (C[0] = Pe(() => {
            }, ["prevent"])),
            onPlaced: C[1] || (C[1] = (E) => p.value = !0),
            onKeydown: S
          }), {
            default: m(() => [A(q.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "dir",
            "onKeydown"
          ]))]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      })]),
      _: 3
    }));
  }
}), J$ = Q$;
const [Ys, X$] = /* @__PURE__ */ Be("SelectItemAlignedPosition");
var e2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, r = t, { getItems: n } = St(), o = _a(), i = Ha(), l = F(!1), s = F(!0), d = F(), { forwardRef: c, currentElement: f } = de(), { viewport: y, selectedItem: p, selectedItemText: g, focusSelectedItem: h } = i;
    function k() {
      if (o.triggerElement.value && o.valueElement.value && d.value && f.value && y?.value && p?.value && g?.value) {
        const S = o.triggerElement.value.getBoundingClientRect(), z = f.value.getBoundingClientRect(), $ = o.valueElement.value.getBoundingClientRect(), q = g.value.getBoundingClientRect();
        if (o.dir.value !== "rtl") {
          const ve = q.left - z.left, $e = $.left - ve, X = S.left - $e, K = S.width + X, ne = Math.max(K, z.width), ue = window.innerWidth - Ot, be = vc($e, Ot, Math.max(Ot, ue - ne));
          d.value.style.minWidth = `${K}px`, d.value.style.left = `${be}px`;
        } else {
          const ve = z.right - q.right, $e = window.innerWidth - $.right - ve, X = window.innerWidth - S.right - $e, K = S.width + X, ne = Math.max(K, z.width), ue = window.innerWidth - Ot, be = vc($e, Ot, Math.max(Ot, ue - ne));
          d.value.style.minWidth = `${K}px`, d.value.style.right = `${be}px`;
        }
        const C = n().map((ve) => ve.ref), E = window.innerHeight - Ot * 2, M = y.value.scrollHeight, R = window.getComputedStyle(f.value), oe = Number.parseInt(R.borderTopWidth, 10), ae = Number.parseInt(R.paddingTop, 10), H = Number.parseInt(R.borderBottomWidth, 10), re = Number.parseInt(R.paddingBottom, 10), P = oe + ae + M + re + H, L = Math.min(p.value.offsetHeight * 5, P), U = window.getComputedStyle(y.value), G = Number.parseInt(U.paddingTop, 10), ce = Number.parseInt(U.paddingBottom, 10), T = S.top + S.height / 2 - Ot, fe = E - T, te = p.value.offsetHeight / 2, he = p.value.offsetTop + te, Ne = oe + ae + he, qe = P - Ne;
        if (Ne <= T) {
          const ve = p.value === C.at(-1);
          d.value.style.bottom = "0px";
          const $e = f.value.clientHeight - y.value.offsetTop - y.value.offsetHeight, X = Math.max(fe, te + (ve ? ce : 0) + $e + H), K = Ne + X;
          d.value.style.height = `${K}px`;
        } else {
          const ve = p.value === C[0];
          d.value.style.top = "0px";
          const $e = Math.max(T, oe + y.value.offsetTop + (ve ? G : 0) + te) + qe;
          d.value.style.height = `${$e}px`, y.value.scrollTop = Ne - T + y.value.offsetTop;
        }
        d.value.style.margin = `${Ot}px 0`, d.value.style.minHeight = `${L}px`, d.value.style.maxHeight = `${E}px`, r("placed"), requestAnimationFrame(() => l.value = !0);
      }
    }
    const w = F("");
    Ae(async () => {
      await _e(), k(), f.value && (w.value = window.getComputedStyle(f.value).zIndex);
    });
    function b(S) {
      S && s.value === !0 && (k(), h?.(), s.value = !1);
    }
    return b0(o.triggerElement, () => {
      k();
    }), X$({
      contentWrapper: d,
      shouldExpandOnScrollRef: l,
      onScrollButtonChange: b
    }), (S, z) => (v(), W("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: ut({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: w.value
      })
    }, [_(u(ie), I({
      ref: u(c),
      style: {
        boxSizing: "border-box",
        maxHeight: "100%"
      }
    }, {
      ...S.$attrs,
      ...a
    }), {
      default: m(() => [A(S.$slots, "default")]),
      _: 3
    }, 16)], 4));
  }
}), t2 = e2, a2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: { context: {
    type: Object,
    required: !0
  } },
  setup(e) {
    return Xg(e.context), eb(Z$), (t, a) => A(t.$slots, "default");
  }
}), r2 = a2;
const n2 = { key: 1 };
var o2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: t }) {
    const a = e, r = Me(a, t), n = _a(), o = F();
    Ae(() => {
      o.value = new DocumentFragment();
    });
    const i = F(), l = D(() => a.forceMount || n.open.value), s = F(l.value);
    let d;
    function c() {
      d && (clearTimeout(d), d = void 0);
    }
    return ge(l, (f, y, p) => {
      c(), d = setTimeout(() => {
        s.value = l.value, d = void 0;
      }), p(c);
    }), _t(c), (f, y) => l.value || s.value || i.value?.present ? (v(), x(u(za), {
      key: 0,
      ref_key: "presenceRef",
      ref: i,
      present: l.value
    }, {
      default: m(() => [_(J$, Ie(We({
        ...u(r),
        ...f.$attrs
      })), {
        default: m(() => [A(f.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"])) : o.value ? (v(), W("div", n2, [(v(), x(jf, { to: o.value }, [_(r2, { context: u(n) }, {
      default: m(() => [A(f.$slots, "default")]),
      _: 3
    }, 8, ["context"])], 8, ["to"]))])) : Z("v-if", !0);
  }
}), i2 = o2;
const [l2, s2] = /* @__PURE__ */ Be("SelectGroup");
var u2 = /* @__PURE__ */ O({
  __name: "SelectGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = et(void 0, "reka-select-group");
    return s2({ id: a }), (r, n) => (v(), x(u(ie), I({ role: "group" }, t, { "aria-labelledby": u(a) }), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), d2 = u2, c2 = /* @__PURE__ */ O({
  __name: "SelectIcon",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(ie), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: m(() => [A(t.$slots, "default", {}, () => [a[0] || (a[0] = J("▼"))])]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), f2 = c2;
const [tb, p2] = /* @__PURE__ */ Be("SelectItem");
var y2 = /* @__PURE__ */ O({
  __name: "SelectItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, r = t, { disabled: n } = Ye(a), o = _a(), i = Ha(), { forwardRef: l, currentElement: s } = de(), { CollectionItem: d } = St(), c = D(() => dn(o.modelValue?.value, a.value, o.by)), f = F(!1), y = F(a.textValue ?? ""), p = et(void 0, "reka-select-item-text"), g = "select.select";
    async function h(z) {
      if (z.defaultPrevented) return;
      const $ = {
        originalEvent: z,
        value: a.value
      };
      Po(g, k, $);
    }
    async function k(z) {
      await _e(), r("select", z), !z.defaultPrevented && (n.value || (o.onValueChange(a.value), o.multiple.value || o.onOpenChange(!1)));
    }
    async function w(z) {
      await _e(), !z.defaultPrevented && (n.value ? i.onItemLeave?.() : z.currentTarget?.focus({ preventScroll: !0 }));
    }
    async function b(z) {
      await _e(), !z.defaultPrevented && z.currentTarget === Ge() && i.onItemLeave?.();
    }
    async function S(z) {
      await _e(), !(z.defaultPrevented || i.searchRef?.value !== "" && z.key === " ") && (V$.includes(z.key) && h(z), z.key === " " && z.preventDefault());
    }
    if (a.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return Ae(() => {
      s.value && i.itemRefCallback(s.value, a.value, a.disabled);
    }), p2({
      value: a.value,
      disabled: n,
      textId: p,
      isSelected: c,
      onItemTextChange: (z) => {
        y.value = ((y.value || z?.textContent) ?? "").trim();
      }
    }), (z, $) => (v(), x(u(d), { value: { textValue: y.value } }, {
      default: m(() => [_(u(ie), {
        ref: u(l),
        role: "option",
        "aria-labelledby": u(p),
        "data-highlighted": f.value ? "" : void 0,
        "aria-selected": c.value,
        "data-state": c.value ? "checked" : "unchecked",
        "aria-disabled": u(n) || void 0,
        "data-disabled": u(n) ? "" : void 0,
        tabindex: u(n) ? void 0 : -1,
        as: z.as,
        "as-child": z.asChild,
        onFocus: $[0] || ($[0] = (q) => f.value = !0),
        onBlur: $[1] || ($[1] = (q) => f.value = !1),
        onPointerup: h,
        onPointerdown: $[2] || ($[2] = (q) => {
          q.currentTarget.focus({ preventScroll: !0 });
        }),
        onTouchend: $[3] || ($[3] = Pe(() => {
        }, ["prevent", "stop"])),
        onPointermove: w,
        onPointerleave: b,
        onKeydown: S
      }, {
        default: m(() => [A(z.$slots, "default")]),
        _: 3
      }, 8, [
        "aria-labelledby",
        "data-highlighted",
        "aria-selected",
        "data-state",
        "aria-disabled",
        "data-disabled",
        "tabindex",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), m2 = y2, h2 = /* @__PURE__ */ O({
  __name: "SelectItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, a = tb();
    return (r, n) => u(a).isSelected.value ? (v(), x(u(ie), I({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16)) : Z("v-if", !0);
  }
}), v2 = h2, g2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, a = _a(), r = Ha(), n = tb(), { forwardRef: o, currentElement: i } = de(), l = D(() => ({
      value: n.value,
      disabled: n.disabled.value,
      textContent: i.value?.textContent ?? n.value?.toString() ?? ""
    }));
    return Ae(() => {
      i.value && (n.onItemTextChange(i.value), r.itemTextRefCallback(i.value, n.value, n.disabled.value), a.onOptionAdd(l.value));
    }), _t(() => {
      a.onOptionRemove(l.value);
    }), (s, d) => (v(), x(u(ie), I({
      id: u(n).textId,
      ref: u(o)
    }, {
      ...t,
      ...s.$attrs
    }), {
      default: m(() => [A(s.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), b2 = g2, k2 = /* @__PURE__ */ O({
  __name: "SelectLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e, a = l2({ id: "" });
    return (r, n) => (v(), x(u(ie), I(t, { id: u(a).id }), {
      default: m(() => [A(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), w2 = k2, x2 = /* @__PURE__ */ O({
  __name: "SelectPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Mr), Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), z2 = x2, _2 = /* @__PURE__ */ O({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { getItems: r } = St(), n = Ha(), o = F(null);
    function i() {
      o.value !== null && (window.clearInterval(o.value), o.value = null);
    }
    it(() => {
      r().map((d) => d.ref).find((d) => d === Ge())?.scrollIntoView({ block: "nearest" });
    });
    function l() {
      o.value === null && (o.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function s() {
      n.onItemLeave?.(), o.value === null && (o.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return ts(() => i()), (d, c) => (v(), x(u(ie), I({
      "aria-hidden": "true",
      style: { flexShrink: 0 }
    }, d.$parent?.$props, {
      onPointerdown: l,
      onPointermove: s,
      onPointerleave: c[0] || (c[0] = () => {
        i();
      })
    }), {
      default: m(() => [A(d.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ab = _2, S2 = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Ha(), a = t.position === "item-aligned" ? Ys() : void 0, { forwardRef: r, currentElement: n } = de(), o = F(!1);
    return it((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let l = function() {
          const d = s.scrollHeight - s.clientHeight;
          o.value = Math.ceil(s.scrollTop) < d;
        };
        const s = t.viewport.value;
        l(), s.addEventListener("scroll", l), i(() => s.removeEventListener("scroll", l));
      }
    }), ge(n, () => {
      n.value && a?.onScrollButtonChange(n.value);
    }), (i, l) => o.value ? (v(), x(ab, {
      key: 0,
      ref: u(r),
      onAutoScroll: l[0] || (l[0] = () => {
        const { viewport: s, selectedItem: d } = u(t);
        s?.value && d?.value && (s.value.scrollTop = s.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: m(() => [A(i.$slots, "default")]),
      _: 3
    }, 512)) : Z("v-if", !0);
  }
}), q2 = S2, O2 = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Ha(), a = t.position === "item-aligned" ? Ys() : void 0, { forwardRef: r, currentElement: n } = de(), o = F(!1);
    return it((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let l = function() {
          o.value = s.scrollTop > 0;
        };
        const s = t.viewport.value;
        l(), s.addEventListener("scroll", l), i(() => s.removeEventListener("scroll", l));
      }
    }), ge(n, () => {
      n.value && a?.onScrollButtonChange(n.value);
    }), (i, l) => o.value ? (v(), x(ab, {
      key: 0,
      ref: u(r),
      onAutoScroll: l[0] || (l[0] = () => {
        const { viewport: s, selectedItem: d } = u(t);
        s?.value && d?.value && (s.value.scrollTop = s.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: m(() => [A(i.$slots, "default")]),
      _: 3
    }, 512)) : Z("v-if", !0);
  }
}), A2 = O2, C2 = /* @__PURE__ */ O({
  __name: "SelectTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = _a(), { forwardRef: r, currentElement: n } = de(), o = D(() => a.disabled?.value || t.disabled);
    a.contentId ||= et(void 0, "reka-select-content"), Ae(() => {
      a.onTriggerChange(n.value);
    });
    const { getItems: i } = St(), { search: l, handleTypeaheadSearch: s, resetTypeahead: d } = No();
    function c() {
      o.value || (a.onOpenChange(!0), d());
    }
    function f(w) {
      c(), a.triggerPointerDownPosRef.value = {
        x: Math.round(w.pageX),
        y: Math.round(w.pageY)
      };
    }
    function y(w) {
      return w.button === 0 && w.ctrlKey === !1;
    }
    let p = !1;
    function g(w) {
      if (w.pointerType === "touch") return w.preventDefault();
      const b = w.target;
      b.hasPointerCapture(w.pointerId) && b.releasePointerCapture(w.pointerId), y(w) && (f(w), p = !0);
    }
    function h(w) {
      y(w) && w.preventDefault();
    }
    function k(w) {
      p || w.currentTarget?.focus(), p = !1;
    }
    return (w, b) => (v(), x(u(Uo), {
      "as-child": "",
      reference: w.reference
    }, {
      default: m(() => [_(u(ie), {
        ref: u(r),
        role: "combobox",
        type: w.as === "button" ? "button" : void 0,
        "aria-controls": u(a).contentId,
        "aria-expanded": u(a).open.value || !1,
        "aria-required": u(a).required?.value,
        "aria-autocomplete": "none",
        disabled: o.value,
        dir: u(a)?.dir.value,
        "data-state": u(a)?.open.value ? "open" : "closed",
        "data-disabled": o.value ? "" : void 0,
        "data-placeholder": u(R$)(u(a).modelValue?.value) ? "" : void 0,
        "as-child": w.asChild,
        as: w.as,
        onClick: k,
        onPointerdown: g,
        onMousedown: h,
        onPointerup: b[0] || (b[0] = Pe((S) => {
          S.pointerType === "touch" && f(S);
        }, ["prevent"])),
        onKeydown: b[1] || (b[1] = (S) => {
          const z = u(l) !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && z && S.key === " " || (u(s)(S.key, u(i)()), u(N$).includes(S.key) && (c(), S.preventDefault()));
        })
      }, {
        default: m(() => [A(w.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "aria-controls",
        "aria-expanded",
        "aria-required",
        "disabled",
        "dir",
        "data-state",
        "data-disabled",
        "data-placeholder",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), E2 = C2, $2 = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: r } = de(), n = _a();
    Ae(() => {
      n.valueElement = r;
    });
    const o = D(() => {
      let l = [];
      const s = Array.from(n.optionsSet.value), d = (c) => s.find((f) => dn(c, f.value, n.by));
      return Array.isArray(n.modelValue.value) ? l = n.modelValue.value.map((c) => d(c)?.textContent ?? "") : l = [d(n.modelValue.value)?.textContent ?? ""], l.filter(Boolean);
    }), i = D(() => o.value.length ? o.value.join(", ") : t.placeholder);
    return (l, s) => (v(), x(u(ie), {
      ref: u(a),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": o.value.length ? void 0 : t.placeholder
    }, {
      default: m(() => [A(l.$slots, "default", {
        selectedLabel: o.value,
        modelValue: u(n).modelValue.value
      }, () => [J(V(i.value), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-placeholder"
    ]));
  }
}), B2 = $2, M2 = /* @__PURE__ */ O({
  __name: "SelectViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { nonce: a } = Ye(t), r = LC(a), n = Ha(), o = n.position === "item-aligned" ? Ys() : void 0, { forwardRef: i, currentElement: l } = de();
    Ae(() => {
      n?.onViewportChange(l.value);
    });
    const s = F(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: y, contentWrapper: p } = o ?? {};
      if (y?.value && p?.value) {
        const g = Math.abs(s.value - f.scrollTop);
        if (g > 0) {
          const h = window.innerHeight - Ot * 2, k = Number.parseFloat(p.value.style.minHeight), w = Number.parseFloat(p.value.style.height), b = Math.max(k, w);
          if (b < h) {
            const S = b + g, z = Math.min(h, S), $ = S - z;
            p.value.style.height = `${z}px`, p.value.style.bottom === "0px" && (f.scrollTop = $ > 0 ? $ : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      s.value = f.scrollTop;
    }
    return (c, f) => (v(), W(xe, null, [_(u(ie), I({
      ref: u(i),
      "data-reka-select-viewport": "",
      role: "presentation"
    }, {
      ...c.$attrs,
      ...t
    }, {
      style: {
        position: "relative",
        flex: 1,
        overflow: "hidden auto"
      },
      onScroll: d
    }), {
      default: m(() => [A(c.$slots, "default")]),
      _: 3
    }, 16), _(u(ie), {
      as: "style",
      nonce: u(r)
    }, {
      default: m(() => f[0] || (f[0] = [J(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), D2 = M2, P2 = /* @__PURE__ */ O({
  __name: "BaseSeparator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, a = ["horizontal", "vertical"];
    function r(l) {
      return a.includes(l);
    }
    const n = D(() => r(t.orientation) ? t.orientation : "horizontal"), o = D(() => n.value === "vertical" ? t.orientation : void 0), i = D(() => t.decorative ? { role: "none" } : {
      "aria-orientation": o.value,
      role: "separator"
    });
    return (l, s) => (v(), x(u(ie), I({
      as: l.as,
      "as-child": l.asChild,
      "data-orientation": n.value
    }, i.value), {
      default: m(() => [A(l.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-orientation"
    ]));
  }
}), j2 = P2, I2 = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(j2, Ie(We(t)), {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), F2 = I2;
function T2() {
  if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
T2();
const [N2, V2] = /* @__PURE__ */ Be("SwitchRoot");
var R2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SwitchRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    value: {
      type: String,
      required: !1,
      default: "on"
    },
    trueValue: {
      type: null,
      required: !1,
      default: () => !0
    },
    falseValue: {
      type: null,
      required: !1,
      default: () => !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, { disabled: n } = Ye(a), o = /* @__PURE__ */ Xe(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? a.falseValue,
      passive: a.modelValue === void 0
    }), i = D(() => o.value === a.trueValue);
    function l() {
      n.value || (o.value = i.value ? a.falseValue : a.trueValue);
    }
    const { forwardRef: s, currentElement: d } = de(), c = To(d), f = mg(), y = D(() => a.id && d.value ? document.querySelector(`[for="${a.id}"]`)?.innerText : void 0);
    return V2({
      checked: i,
      toggleCheck: l,
      disabled: n
    }), (p, g) => (v(), W(xe, null, [_(u(ie), I({
      id: p.id,
      ref: u(s),
      role: "switch",
      type: p.as === "button" ? "button" : void 0,
      value: p.value,
      "aria-label": p.$attrs["aria-label"] || y.value,
      "aria-checked": i.value,
      "aria-required": p.required,
      "data-state": i.value ? "checked" : "unchecked",
      "data-disabled": u(n) ? "" : void 0,
      "as-child": p.asChild,
      as: p.as,
      disabled: u(n)
    }, {
      ...u(f),
      ...p.$attrs
    }, {
      onClick: l,
      onKeydown: mt(Pe(l, ["prevent"]), ["enter"])
    }), {
      default: m(() => [A(p.$slots, "default", {
        modelValue: u(o),
        checked: i.value
      })]),
      _: 3
    }, 16, [
      "id",
      "type",
      "value",
      "aria-label",
      "aria-checked",
      "aria-required",
      "data-state",
      "data-disabled",
      "as-child",
      "as",
      "disabled",
      "onKeydown"
    ]), u(c) && p.name ? (v(), x(u(Ts), I({
      key: 0,
      type: "checkbox",
      name: p.name,
      disabled: u(n),
      required: p.required,
      value: p.value,
      checked: i.value
    }, u(f)), null, 16, [
      "name",
      "disabled",
      "required",
      "value",
      "checked"
    ])) : Z("v-if", !0)], 64));
  }
}), U2 = R2, L2 = /* @__PURE__ */ O({
  __name: "SwitchThumb",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = N2();
    return de(), (a, r) => (v(), x(u(ie), {
      "data-state": u(t).checked.value ? "checked" : "unchecked",
      "data-disabled": u(t).disabled.value ? "" : void 0,
      "as-child": a.asChild,
      as: a.as
    }, {
      default: m(() => [A(a.$slots, "default")]),
      _: 3
    }, 8, [
      "data-state",
      "data-disabled",
      "as-child",
      "as"
    ]));
  }
}), W2 = L2;
const [Zs, K2] = /* @__PURE__ */ Be("TabsRoot");
var G2 = /* @__PURE__ */ O({
  __name: "TabsRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    dir: {
      type: String,
      required: !1
    },
    activationMode: {
      type: String,
      required: !1,
      default: "automatic"
    },
    modelValue: {
      type: null,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, { orientation: n, unmountOnHide: o, dir: i } = Ye(a), l = ia(i);
    de();
    const s = /* @__PURE__ */ Xe(a, "modelValue", r, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = F(), c = Fa(/* @__PURE__ */ new Set());
    return K2({
      modelValue: s,
      changeModelValue: (f) => {
        s.value = f;
      },
      orientation: n,
      dir: l,
      unmountOnHide: o,
      activationMode: a.activationMode,
      baseId: et(void 0, "reka-tabs"),
      tabsList: d,
      contentIds: c,
      registerContent: (f) => {
        c.value = /* @__PURE__ */ new Set([...c.value, f]);
      },
      unregisterContent: (f) => {
        const y = new Set(c.value);
        y.delete(f), c.value = y;
      }
    }), (f, y) => (v(), x(u(ie), {
      dir: u(l),
      "data-orientation": u(n),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: m(() => [A(f.$slots, "default", { modelValue: u(s) })]),
      _: 3
    }, 8, [
      "dir",
      "data-orientation",
      "as-child",
      "as"
    ]));
  }
}), H2 = G2;
function rb(e, t) {
  return `${e}-trigger-${t}`;
}
function nb(e, t) {
  return `${e}-content-${t}`;
}
var Y2 = /* @__PURE__ */ O({
  __name: "TabsContent",
  props: {
    value: {
      type: [String, Number],
      required: !0
    },
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: a } = de(), r = Zs(), n = D(() => rb(r.baseId, t.value)), o = D(() => nb(r.baseId, t.value)), i = D(() => t.value === r.modelValue.value), l = F(i.value);
    return Ae(() => {
      r.registerContent(t.value), requestAnimationFrame(() => {
        l.value = !1;
      });
    }), ts(() => {
      r.unregisterContent(t.value);
    }), (s, d) => (v(), x(u(za), {
      present: s.forceMount || i.value,
      "force-mount": ""
    }, {
      default: m(({ present: c }) => [_(u(ie), {
        id: o.value,
        ref: u(a),
        "as-child": s.asChild,
        as: s.as,
        role: "tabpanel",
        "data-state": i.value ? "active" : "inactive",
        "data-orientation": u(r).orientation.value,
        "aria-labelledby": n.value,
        hidden: !c,
        tabindex: "0",
        style: ut({ animationDuration: l.value ? "0s" : void 0 })
      }, {
        default: m(() => [!u(r).unmountOnHide.value || c ? A(s.$slots, "default", { key: 0 }) : Z("v-if", !0)]),
        _: 2
      }, 1032, [
        "id",
        "as-child",
        "as",
        "data-state",
        "data-orientation",
        "aria-labelledby",
        "hidden",
        "style"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), Z2 = Y2, Q2 = /* @__PURE__ */ O({
  __name: "TabsList",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { loop: a } = Ye(t), { forwardRef: r, currentElement: n } = de(), o = Zs();
    return o.tabsList = n, (i, l) => (v(), x(u(Kg), {
      "as-child": "",
      orientation: u(o).orientation.value,
      dir: u(o).dir.value,
      loop: u(a)
    }, {
      default: m(() => [_(u(ie), {
        ref: u(r),
        role: "tablist",
        "as-child": i.asChild,
        as: i.as,
        "aria-orientation": u(o).orientation.value
      }, {
        default: m(() => [A(i.$slots, "default")]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "aria-orientation"
      ])]),
      _: 3
    }, 8, [
      "orientation",
      "dir",
      "loop"
    ]));
  }
}), J2 = Q2, X2 = /* @__PURE__ */ O({
  __name: "TabsTrigger",
  props: {
    value: {
      type: [String, Number],
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: a } = de(), r = Zs(), n = D(() => rb(r.baseId, t.value)), o = D(() => r.contentIds.value.has(t.value) ? nb(r.baseId, t.value) : void 0), i = D(() => t.value === r.modelValue.value);
    return (l, s) => (v(), x(u(Gg), {
      "as-child": "",
      focusable: !l.disabled,
      active: i.value
    }, {
      default: m(() => [_(u(ie), {
        id: n.value,
        ref: u(a),
        role: "tab",
        type: l.as === "button" ? "button" : void 0,
        as: l.as,
        "as-child": l.asChild,
        "aria-selected": i.value ? "true" : "false",
        "aria-controls": o.value,
        "data-state": i.value ? "active" : "inactive",
        disabled: l.disabled,
        "data-disabled": l.disabled ? "" : void 0,
        "data-orientation": u(r).orientation.value,
        onMousedown: s[0] || (s[0] = Pe((d) => {
          !l.disabled && d.ctrlKey === !1 ? u(r).changeModelValue(l.value) : d.preventDefault();
        }, ["left"])),
        onKeydown: s[1] || (s[1] = mt((d) => u(r).changeModelValue(l.value), ["enter", "space"])),
        onFocus: s[2] || (s[2] = () => {
          const d = u(r).activationMode !== "manual";
          !i.value && !l.disabled && d && u(r).changeModelValue(l.value);
        })
      }, {
        default: m(() => [A(l.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "as",
        "as-child",
        "aria-selected",
        "aria-controls",
        "data-state",
        "disabled",
        "data-disabled",
        "data-orientation"
      ])]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), eB = X2;
function ob(e) {
  var t, a, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (a = ob(e[t])) && (r && (r += " "), r += a);
  } else for (a in e) e[a] && (r && (r += " "), r += a);
  return r;
}
function ib() {
  for (var e, t, a = 0, r = "", n = arguments.length; a < n; a++) (e = arguments[a]) && (t = ob(e)) && (r && (r += " "), r += t);
  return r;
}
const tB = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    a[r] = e[r];
  for (let r = 0; r < t.length; r++)
    a[e.length + r] = t[r];
  return a;
}, aB = (e, t) => ({
  classGroupId: e,
  validator: t
}), lb = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), mo = "-", lf = [], rB = "arbitrary..", nB = (e) => {
  const t = iB(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (n) => {
      if (n.startsWith("[") && n.endsWith("]"))
        return oB(n);
      const o = n.split(mo), i = o[0] === "" && o.length > 1 ? 1 : 0;
      return sb(o, i, t);
    },
    getConflictingClassGroupIds: (n, o) => {
      if (o) {
        const i = r[n], l = a[n];
        return i ? l ? tB(l, i) : i : l || lf;
      }
      return a[n] || lf;
    }
  };
}, sb = (e, t, a) => {
  if (e.length - t === 0)
    return a.classGroupId;
  const r = e[t], n = a.nextPart.get(r);
  if (n) {
    const s = sb(e, t + 1, n);
    if (s) return s;
  }
  const o = a.validators;
  if (o === null)
    return;
  const i = t === 0 ? e.join(mo) : e.slice(t).join(mo), l = o.length;
  for (let s = 0; s < l; s++) {
    const d = o[s];
    if (d.validator(i))
      return d.classGroupId;
  }
}, oB = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), r = t.slice(0, a);
  return r ? rB + r : void 0;
})(), iB = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return lB(a, t);
}, lB = (e, t) => {
  const a = lb();
  for (const r in e) {
    const n = e[r];
    Qs(n, a, r, t);
  }
  return a;
}, Qs = (e, t, a, r) => {
  const n = e.length;
  for (let o = 0; o < n; o++) {
    const i = e[o];
    sB(i, t, a, r);
  }
}, sB = (e, t, a, r) => {
  if (typeof e == "string") {
    uB(e, t, a);
    return;
  }
  if (typeof e == "function") {
    dB(e, t, a, r);
    return;
  }
  cB(e, t, a, r);
}, uB = (e, t, a) => {
  const r = e === "" ? t : ub(t, e);
  r.classGroupId = a;
}, dB = (e, t, a, r) => {
  if (fB(e)) {
    Qs(e(r), t, a, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(aB(a, e));
}, cB = (e, t, a, r) => {
  const n = Object.entries(e), o = n.length;
  for (let i = 0; i < o; i++) {
    const [l, s] = n[i];
    Qs(s, ub(t, l), a, r);
  }
}, ub = (e, t) => {
  let a = e;
  const r = t.split(mo), n = r.length;
  for (let o = 0; o < n; o++) {
    const i = r[o];
    let l = a.nextPart.get(i);
    l || (l = lb(), a.nextPart.set(i, l)), a = l;
  }
  return a;
}, fB = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, pB = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const n = (o, i) => {
    a[o] = i, t++, t > e && (t = 0, r = a, a = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let i = a[o];
      if (i !== void 0)
        return i;
      if ((i = r[o]) !== void 0)
        return n(o, i), i;
    },
    set(o, i) {
      o in a ? a[o] = i : n(o, i);
    }
  };
}, Kl = "!", sf = ":", yB = [], uf = (e, t, a, r, n) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: r,
  isExternal: n
}), mB = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let r = (n) => {
    const o = [];
    let i = 0, l = 0, s = 0, d;
    const c = n.length;
    for (let h = 0; h < c; h++) {
      const k = n[h];
      if (i === 0 && l === 0) {
        if (k === sf) {
          o.push(n.slice(s, h)), s = h + 1;
          continue;
        }
        if (k === "/") {
          d = h;
          continue;
        }
      }
      k === "[" ? i++ : k === "]" ? i-- : k === "(" ? l++ : k === ")" && l--;
    }
    const f = o.length === 0 ? n : n.slice(s);
    let y = f, p = !1;
    f.endsWith(Kl) ? (y = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Kl) && (y = f.slice(1), p = !0)
    );
    const g = d && d > s ? d - s : void 0;
    return uf(o, p, y, g);
  };
  if (t) {
    const n = t + sf, o = r;
    r = (i) => i.startsWith(n) ? o(i.slice(n.length)) : uf(yB, !1, i, void 0, !0);
  }
  if (a) {
    const n = r;
    r = (o) => a({
      className: o,
      parseClassName: n
    });
  }
  return r;
}, hB = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((a, r) => {
    t.set(a, 1e6 + r);
  }), (a) => {
    const r = [];
    let n = [];
    for (let o = 0; o < a.length; o++) {
      const i = a[o], l = i[0] === "[", s = t.has(i);
      l || s ? (n.length > 0 && (n.sort(), r.push(...n), n = []), r.push(i)) : n.push(i);
    }
    return n.length > 0 && (n.sort(), r.push(...n)), r;
  };
}, vB = (e) => ({
  cache: pB(e.cacheSize),
  parseClassName: mB(e),
  sortModifiers: hB(e),
  ...nB(e)
}), gB = /\s+/, bB = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = t, i = [], l = e.trim().split(gB);
  let s = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const c = l[d], {
      isExternal: f,
      modifiers: y,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    } = a(c);
    if (f) {
      s = c + (s.length > 0 ? " " + s : s);
      continue;
    }
    let k = !!h, w = r(k ? g.substring(0, h) : g);
    if (!w) {
      if (!k) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (w = r(g), !w) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      k = !1;
    }
    const b = y.length === 0 ? "" : y.length === 1 ? y[0] : o(y).join(":"), S = p ? b + Kl : b, z = S + w;
    if (i.indexOf(z) > -1)
      continue;
    i.push(z);
    const $ = n(w, k);
    for (let q = 0; q < $.length; ++q) {
      const C = $[q];
      i.push(S + C);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
}, kB = (...e) => {
  let t = 0, a, r, n = "";
  for (; t < e.length; )
    (a = e[t++]) && (r = db(a)) && (n && (n += " "), n += r);
  return n;
}, db = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = db(e[r])) && (a && (a += " "), a += t);
  return a;
}, wB = (e, ...t) => {
  let a, r, n, o;
  const i = (s) => {
    const d = t.reduce((c, f) => f(c), e());
    return a = vB(d), r = a.cache.get, n = a.cache.set, o = l, l(s);
  }, l = (s) => {
    const d = r(s);
    if (d)
      return d;
    const c = bB(s, a);
    return n(s, c), c;
  };
  return o = i, (...s) => o(kB(...s));
}, xB = [], Je = (e) => {
  const t = (a) => a[e] || xB;
  return t.isThemeGetter = !0, t;
}, cb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, fb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, zB = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, _B = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, SB = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qB = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, OB = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, AB = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fa = (e) => zB.test(e), we = (e) => !!e && !Number.isNaN(Number(e)), pa = (e) => !!e && Number.isInteger(Number(e)), sl = (e) => e.endsWith("%") && we(e.slice(0, -1)), Jt = (e) => _B.test(e), pb = () => !0, CB = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  SB.test(e) && !qB.test(e)
), Js = () => !1, EB = (e) => OB.test(e), $B = (e) => AB.test(e), BB = (e) => !le(e) && !se(e), MB = (e) => Sa(e, hb, Js), le = (e) => cb.test(e), Ea = (e) => Sa(e, vb, CB), df = (e) => Sa(e, VB, we), DB = (e) => Sa(e, bb, pb), PB = (e) => Sa(e, gb, Js), cf = (e) => Sa(e, yb, Js), jB = (e) => Sa(e, mb, $B), Fn = (e) => Sa(e, kb, EB), se = (e) => fb.test(e), Kr = (e) => Ya(e, vb), IB = (e) => Ya(e, gb), ff = (e) => Ya(e, yb), FB = (e) => Ya(e, hb), TB = (e) => Ya(e, mb), Tn = (e) => Ya(e, kb, !0), NB = (e) => Ya(e, bb, !0), Sa = (e, t, a) => {
  const r = cb.exec(e);
  return r ? r[1] ? t(r[1]) : a(r[2]) : !1;
}, Ya = (e, t, a = !1) => {
  const r = fb.exec(e);
  return r ? r[1] ? t(r[1]) : a : !1;
}, yb = (e) => e === "position" || e === "percentage", mb = (e) => e === "image" || e === "url", hb = (e) => e === "length" || e === "size" || e === "bg-size", vb = (e) => e === "length", VB = (e) => e === "number", gb = (e) => e === "family-name", bb = (e) => e === "number" || e === "weight", kb = (e) => e === "shadow", RB = () => {
  const e = Je("color"), t = Je("font"), a = Je("text"), r = Je("font-weight"), n = Je("tracking"), o = Je("leading"), i = Je("breakpoint"), l = Je("container"), s = Je("spacing"), d = Je("radius"), c = Je("shadow"), f = Je("inset-shadow"), y = Je("text-shadow"), p = Je("drop-shadow"), g = Je("blur"), h = Je("perspective"), k = Je("aspect"), w = Je("ease"), b = Je("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], $ = () => [...z(), se, le], q = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], E = () => [se, le, s], M = () => [fa, "full", "auto", ...E()], R = () => [pa, "none", "subgrid", se, le], oe = () => ["auto", {
    span: ["full", pa, se, le]
  }, pa, se, le], ae = () => [pa, "auto", se, le], H = () => ["auto", "min", "max", "fr", se, le], re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...E()], U = () => [fa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], G = () => [fa, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()], ce = () => [fa, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...E()], T = () => [e, se, le], fe = () => [...z(), ff, cf, {
    position: [se, le]
  }], te = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], he = () => ["auto", "cover", "contain", FB, MB, {
    size: [se, le]
  }], Ne = () => [sl, Kr, Ea], qe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    se,
    le
  ], ve = () => ["", we, Kr, Ea], $e = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [we, sl, ff, cf], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    se,
    le
  ], ue = () => ["none", we, se, le], be = () => ["none", we, se, le], ze = () => [we, se, le], Qe = () => [fa, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Jt],
      breakpoint: [Jt],
      color: [pb],
      container: [Jt],
      "drop-shadow": [Jt],
      ease: ["in", "out", "in-out"],
      font: [BB],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Jt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Jt],
      shadow: [Jt],
      spacing: ["px", we],
      text: [Jt],
      "text-shadow": [Jt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", fa, le, se, k]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [we, le, se, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: M()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": M()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": M()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": M(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: M()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": M(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: M()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": M()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": M()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: M()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: M()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: M()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: M()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [pa, "auto", se, le]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [fa, "full", "auto", l, ...E()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [we, fa, "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", we, se, le]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", we, se, le]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [pa, "first", "last", "none", se, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: oe()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: oe()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...re(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...re()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": re()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: E()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: L()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": E()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: U()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...G()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...G()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...G()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...ce()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...ce()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...ce()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...U()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...U()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, Kr, Ea]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, NB, DB]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sl, le]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [IB, PB, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [le]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, se, le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [we, "none", se, df]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", se, le]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", se, le]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$e(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [we, "from-font", "auto", se, Ea]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [we, "auto", se, le]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, le]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", se, le]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: fe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: te()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: he()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, pa, se, le],
          radial: ["", se, le],
          conic: [pa, se, le]
        }, TB, jB]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Ne()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Ne()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Ne()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: qe()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": qe()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": qe()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": qe()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": qe()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": qe()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": qe()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": qe()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": qe()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": qe()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": qe()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": qe()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": qe()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": qe()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": qe()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ve()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ve()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ve()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ve()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ve()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": ve()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": ve()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ve()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ve()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ve()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ve()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ve()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ve()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$e(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$e(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": T()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$e(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [we, se, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", we, Kr, Ea]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Tn,
          Fn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Tn, Fn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ve()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [we, Ea]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ve()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, Tn, Fn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [we, se, le]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [we]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [se, le]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": z()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [we]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: fe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: te()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: he()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", se, le]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          se,
          le
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ne()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [we, se, le]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [we, se, le]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Tn,
          Fn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", we, se, le]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [we, se, le]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", we, se, le]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [we, se, le]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", we, se, le]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          se,
          le
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ne()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [we, se, le]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [we, se, le]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", we, se, le]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [we, se, le]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", we, se, le]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [we, se, le]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [we, se, le]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", we, se, le]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, le]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [we, "initial", se, le]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, se, le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [we, se, le]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, se, le]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, se, le]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ue()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ue()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ue()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ue()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: be()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": be()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": be()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": be()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ze()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ze()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ze()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [se, le, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Qe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Qe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Qe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Qe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: T()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: T()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se, le]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": E()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": E()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", se, le]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [we, Kr, Ea, df]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, UB = /* @__PURE__ */ wB(RB);
function Q(...e) {
  return UB(ib(e));
}
const LB = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, pf = (e) => e === "", WB = (...e) => e.filter((t, a, r) => !!t && t.trim() !== "" && r.indexOf(t) === a).join(" ").trim(), yf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), KB = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, r) => r ? r.toUpperCase() : a.toLowerCase()
), GB = (e) => {
  const t = KB(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Gr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const HB = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": r,
  strokeWidth: n,
  "stroke-width": o,
  size: i = Gr.width,
  color: l = Gr.stroke,
  ...s
}, { slots: d }) => aa(
  "svg",
  {
    ...Gr,
    ...s,
    width: i,
    height: i,
    stroke: l,
    "stroke-width": pf(a) || pf(r) || a === !0 || r === !0 ? Number(n || o || Gr["stroke-width"]) * 24 / Number(i) : n || o || Gr["stroke-width"],
    class: WB(
      "lucide",
      s.class,
      ...e ? [`lucide-${yf(GB(e))}-icon`, `lucide-${yf(e)}`] : ["lucide-icon"]
    ),
    ...!d.default && !LB(s) && { "aria-hidden": "true" }
  },
  [...t.map((c) => aa(...c)), ...d.default ? [d.default()] : []]
), Dt = (e, t) => (a, { slots: r, attrs: n }) => aa(
  HB,
  {
    ...n,
    ...a,
    iconNode: t,
    name: e
  },
  r
), YB = Dt("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), Xs = Dt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]), wb = Dt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), ZB = Dt("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), QB = Dt("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), JB = Dt("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), XB = Dt("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]), eM = Dt("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), tM = Dt("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]), aM = Dt("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]), xb = Dt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), mf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, hf = ib, zb = (e, t) => (a) => {
  var r;
  if (t?.variants == null) return hf(e, a?.class, a?.className);
  const { variants: n, defaultVariants: o } = t, i = Object.keys(n).map((d) => {
    const c = a?.[d], f = o?.[d];
    if (c === null) return null;
    const y = mf(c) || mf(f);
    return n[d][y];
  }), l = a && Object.entries(a).reduce((d, c) => {
    let [f, y] = c;
    return y === void 0 || (d[f] = y), d;
  }, {}), s = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, c) => {
    let { class: f, className: y, ...p } = c;
    return Object.entries(p).every((g) => {
      let [h, k] = g;
      return Array.isArray(k) ? k.includes({
        ...o,
        ...l
      }[h]) : {
        ...o,
        ...l
      }[h] === k;
    }) ? [
      ...d,
      f,
      y
    ] : d;
  }, []);
  return hf(e, i, s, a?.class, a?.className);
}, hj = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "alert",
      class: ye(u(Q)(u(rM)({ variant: e.variant }), t.class)),
      role: "alert"
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), vj = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "alert-description",
      class: ye(u(Q)("zkit:text-muted-foreground zkit:col-start-2 zkit:grid zkit:justify-items-start zkit:gap-1 zkit:text-sm zkit:[&_p]:leading-relaxed", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), gj = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "alert-title",
      class: ye(u(Q)("zkit:col-start-2 zkit:line-clamp-1 zkit:min-h-4 zkit:font-medium zkit:tracking-tight", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), rM = zb(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        warning: "text-yellow-500 bg-yellow-500/10 [&>svg]:text-yellow-500 [&>svg]:text-current *:data-[slot=alert-description]:text-yellow-500/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), nM = /* @__PURE__ */ O({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    return (r, n) => (v(), x(u(IO), I({ "data-slot": "alert-dialog" }, u(a)), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ot = /* @__PURE__ */ O({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(ie), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ye(u(Q)(u(jr)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), jr = zb(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), oM = /* @__PURE__ */ O({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(zO), I(u(a), {
      class: u(Q)(u(jr)(), t.class)
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iM = /* @__PURE__ */ O({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(CO), I(u(a), {
      class: u(Q)(
        u(jr)({ variant: "zkit:outline" }),
        "zkit:mt-2 zkit:sm:mt-0",
        t.class
      )
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lM = /* @__PURE__ */ O({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(PO), null, {
      default: m(() => [
        _(u(MO), {
          "data-slot": "alert-dialog-overlay",
          class: "zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:fixed zkit:inset-0 zkit:z-50 zkit:bg-black/80"
        }),
        _(u(OO), I({ "data-slot": "alert-dialog-content" }, u(o), {
          class: u(Q)(
            "zkit:bg-background zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:fixed zkit:top-[50%] zkit:left-[50%] zkit:z-50 zkit:grid zkit:w-full zkit:max-w-[calc(100%-2rem)] zkit:translate-x-[-50%] zkit:translate-y-[-50%] zkit:gap-4 zkit:rounded-lg zkit:border zkit:p-6 zkit:shadow-lg zkit:duration-200 zkit:sm:max-w-lg",
            a.class
          )
        }), {
          default: m(() => [
            A(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), sM = /* @__PURE__ */ O({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u($O), I({ "data-slot": "alert-dialog-description" }, u(a), {
      class: u(Q)("zkit:text-muted-foreground zkit:text-sm", t.class)
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uM = /* @__PURE__ */ O({
  __name: "AlertDialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "alert-dialog-footer",
      class: ye(
        u(Q)(
          "zkit:flex zkit:flex-col-reverse zkit:gap-2 zkit:sm:flex-row zkit:sm:justify-end",
          t.class
        )
      )
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), dM = /* @__PURE__ */ O({
  __name: "AlertDialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "alert-dialog-header",
      class: ye(u(Q)("zkit:flex zkit:flex-col zkit:gap-2 zkit:text-center zkit:sm:text-left", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), cM = /* @__PURE__ */ O({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(TO), I({ "data-slot": "alert-dialog-title" }, u(a), {
      class: u(Q)("zkit:text-lg zkit:font-semibold", t.class)
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fM = /* @__PURE__ */ O({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(VO), I({ "data-slot": "alert-dialog-trigger" }, t), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vf = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(GC), {
      "data-slot": "avatar",
      class: ye(u(Q)("zkit:relative zkit:flex zkit:size-8 zkit:shrink-0 zkit:overflow-hidden zkit:rounded-full", t.class))
    }, {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gf = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(YC), I({ "data-slot": "avatar-fallback" }, u(a), {
      class: u(Q)("zkit:bg-muted zkit:flex zkit:size-full zkit:items-center zkit:justify-center zkit:rounded-full", t.class)
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bf = /* @__PURE__ */ O({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(JC), I({ "data-slot": "avatar-image" }, t, { class: "zkit:aspect-square zkit:size-full" }), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pM = { class: "zkit:flex zkit:items-center zkit:gap-2 zkit:justify-between" }, yM = { class: "zkit:flex zkit:flex-col zkit:gap-y-4 zkit:mt-4 zkit:sm:flex-row zkit:sm:gap-x-4 zkit:sm:gap-y-0" }, mM = /* @__PURE__ */ O({
  __name: "Calendar",
  props: {
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: {},
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    modelValue: {},
    multiple: { type: Boolean },
    disableDaysOutsideCurrentView: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    function i(l, s) {
      return s === -1 ? l.subtract({ years: 1 }) : l.add({ years: 1 });
    }
    return (l, s) => (v(), x(u(uE), I({
      "data-slot": "calendar",
      class: u(Q)("zkit:px-2 zkit:py-3", a.class)
    }, u(o)), {
      default: m(({ grid: d, weekDays: c }) => [
        _(u(xM), null, {
          default: m(() => [
            ee("div", pM, [
              _(u(xf), {
                "prev-page": (f) => i(f, -1)
              }, {
                default: m(() => [
                  _(u(XB))
                ]),
                _: 1
              }, 8, ["prev-page"]),
              _(u(xf)),
              _(u(zM)),
              _(u(wf)),
              _(u(wf), {
                "next-page": (f) => i(f, 1)
              }, {
                default: m(() => [
                  _(u(tM))
                ]),
                _: 1
              }, 8, ["next-page"])
            ])
          ]),
          _: 1
        }),
        ee("div", yM, [
          (v(!0), W(xe, null, De(d, (f) => (v(), x(u(gM), {
            key: f.value.toString()
          }, {
            default: m(() => [
              _(u(kM), null, {
                default: m(() => [
                  _(u(kf), null, {
                    default: m(() => [
                      (v(!0), W(xe, null, De(c, (y) => (v(), x(u(wM), { key: y }, {
                        default: m(() => [
                          J(V(y), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              _(u(bM), null, {
                default: m(() => [
                  (v(!0), W(xe, null, De(f.rows, (y, p) => (v(), x(u(kf), {
                    key: `weekDate-${p}`,
                    class: "zkit:mt-2 zkit:w-full"
                  }, {
                    default: m(() => [
                      (v(!0), W(xe, null, De(y, (g) => (v(), x(u(hM), {
                        key: g.toString(),
                        date: g
                      }, {
                        default: m(() => [
                          _(u(vM), {
                            day: g,
                            month: f.value
                          }, null, 8, ["day", "month"])
                        ]),
                        _: 2
                      }, 1032, ["date"]))), 128))
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), hM = /* @__PURE__ */ O({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(cE), I({
      "data-slot": "calendar-cell",
      class: u(Q)("zkit:relative zkit:p-0 zkit:text-center zkit:text-sm zkit:focus-within:relative zkit:focus-within:z-20 zkit:[&:has([data-selected])]:rounded-md zkit:[&:has([data-selected])]:bg-accent", t.class)
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vM = /* @__PURE__ */ O({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(pE), I({
      "data-slot": "calendar-cell-trigger",
      class: u(Q)(
        u(jr)({ variant: "zkit:ghost" }),
        "zkit:size-8 zkit:p-0 zkit:font-normal zkit:aria-selected:opacity-100 zkit:cursor-default",
        "zkit:[&[data-today]:not([data-selected])]:bg-accent zkit:[&[data-today]:not([data-selected])]:text-accent-foreground",
        // Selected
        "zkit:data-[selected]:bg-primary zkit:data-[selected]:text-primary-foreground zkit:data-[selected]:opacity-100 zkit:data-[selected]:hover:bg-primary zkit:data-[selected]:hover:text-primary-foreground zkit:data-[selected]:focus:bg-primary zkit:data-[selected]:focus:text-primary-foreground",
        // Disabled
        "zkit:data-[disabled]:text-muted-foreground zkit:data-[disabled]:opacity-50",
        // Unavailable
        "zkit:data-[unavailable]:text-destructive-foreground zkit:data-[unavailable]:line-through",
        // Outside months
        "zkit:data-[outside-view]:text-muted-foreground",
        t.class
      )
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gM = /* @__PURE__ */ O({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(mE), I({
      "data-slot": "calendar-grid",
      class: u(Q)("zkit:w-full zkit:border-collapse zkit:space-x-1", t.class)
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bM = /* @__PURE__ */ O({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(vE), I({ "data-slot": "calendar-grid-body" }, t), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kM = /* @__PURE__ */ O({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(bE), I({ "data-slot": "calendar-grid-head" }, t), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kf = /* @__PURE__ */ O({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(wE), I({
      "data-slot": "calendar-grid-row",
      class: u(Q)("zkit:h-8", t.class)
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wM = /* @__PURE__ */ O({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(zE), I({
      "data-slot": "calendar-head-cell",
      class: u(Q)("zkit:text-muted-foreground zkit:rounded-md zkit:w-8 zkit:font-normal zkit:text-[0.8rem]", t.class)
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xM = /* @__PURE__ */ O({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(SE), I({
      "data-slot": "calendar-header",
      class: u(Q)("zkit:flex zkit:justify-center zkit:pt-1 zkit:relative zkit:items-center zkit:w-full", t.class)
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zM = /* @__PURE__ */ O({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(OE), I({
      "data-slot": "calendar-heading",
      class: u(Q)("zkit:text-sm zkit:font-medium", t.class)
    }, u(r)), {
      default: m(({ headingValue: i }) => [
        A(n.$slots, "default", { headingValue: i }, () => [
          J(V(i), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wf = /* @__PURE__ */ O({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(CE), I({
      "data-slot": "calendar-next-button",
      class: u(Q)(
        u(jr)({ variant: "zkit:outline" }),
        "zkit:size-7 zkit:bg-transparent zkit:p-0 zkit:opacity-50 zkit:hover:opacity-100",
        t.class
      )
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default", {}, () => [
          _(u(QB), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xf = /* @__PURE__ */ O({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u($E), I({
      "data-slot": "calendar-prev-button",
      class: u(Q)(
        u(jr)({ variant: "zkit:outline" }),
        "zkit:size-7 zkit:bg-transparent zkit:p-0 zkit:opacity-50 zkit:hover:opacity-100",
        t.class
      )
    }, u(r)), {
      default: m(() => [
        A(n.$slots, "default", {}, () => [
          _(u(ZB), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ul = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    tag: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(Ua(t.tag || "div"), {
      "data-slot": "card",
      class: ye(
        u(Q)(
          "zkit:bg-card zkit:text-card-foreground zkit:flex zkit:flex-col zkit:gap-6 zkit:rounded-xl zkit:border zkit:py-6 zkit:shadow-sm",
          t.class
        )
      )
    }, {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dl = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "card-content",
      class: ye(u(Q)("zkit:px-6", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), bj = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("p", {
      "data-slot": "card-description",
      class: ye(u(Q)("zkit:text-muted-foreground zkit:text-sm", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), kj = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "card-header",
      class: ye(u(Q)("zkit:@container/card-header zkit:grid zkit:auto-rows-min zkit:grid-rows-[auto_auto] zkit:items-start zkit:gap-1.5 zkit:px-6 zkit:has-data-[slot=card-action]:grid-cols-[1fr_auto] zkit:[.border-b]:pb-6", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), wj = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("h3", {
      "data-slot": "card-title",
      class: ye(u(Q)("zkit:leading-none zkit:font-semibold", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), Zr = /* @__PURE__ */ O({
  __name: "Checkbox",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    value: {},
    id: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(NE), I({ "data-slot": "checkbox" }, u(o), {
      class: u(Q)(
        "zkit:peer zkit:border-input zkit:data-[state=checked]:bg-primary zkit:data-[state=checked]:text-primary-foreground zkit:data-[state=checked]:border-primary zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:size-4 zkit:shrink-0 zkit:rounded-[4px] zkit:border zkit:shadow-xs zkit:transition-shadow zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
        a.class
      )
    }), {
      default: m(() => [
        _(u(RE), {
          "data-slot": "checkbox-indicator",
          class: "zkit:flex zkit:items-center zkit:justify-center zkit:text-current zkit:transition-none"
        }, {
          default: m(() => [
            A(i.$slots, "default", {}, () => [
              _(u(Xs), { class: "zkit:size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _M = /* @__PURE__ */ O({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    resetModelValueOnClear: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    return (r, n) => (v(), x(u(kC), I({ "data-slot": "combobox" }, u(a)), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), SM = /* @__PURE__ */ O({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(xC), I({ "data-slot": "combobox-anchor" }, u(r), {
      class: u(Q)("zkit:w-[200px]", t.class)
    }), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qM = /* @__PURE__ */ O({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(AC), I({ "data-slot": "combobox-empty" }, u(a), {
      class: u(Q)("zkit:py-6 zkit:text-center zkit:text-sm", t.class)
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OM = /* @__PURE__ */ O({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    heading: {}
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u($C), I({ "data-slot": "combobox-group" }, u(a), {
      class: u(Q)("zkit:overflow-hidden zkit:p-1 zkit:text-foreground", t.class)
    }), {
      default: m(() => [
        e.heading ? (v(), x(u(TC), {
          key: 0,
          class: "zkit:px-2 zkit:py-1.5 zkit:text-xs zkit:font-medium zkit:text-muted-foreground"
        }, {
          default: m(() => [
            J(V(e.heading), 1)
          ]),
          _: 1
        })) : Z("", !0),
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AM = {
  "data-slot": "command-input-wrapper",
  class: "zkit:flex zkit:h-9 zkit:items-center zkit:gap-2 zkit:border-b zkit:px-3"
}, CM = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), W("div", AM, [
      _(u(aM), { class: "zkit:size-4 zkit:shrink-0 zkit:opacity-50" }),
      _(u(MC), I({
        "data-slot": "command-input",
        class: u(Q)(
          "zkit:placeholder:text-muted-foreground zkit:flex zkit:h-10 zkit:w-full zkit:rounded-md zkit:bg-transparent zkit:py-3 zkit:text-sm zkit:outline-hidden zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
          a.class
        )
      }, { ...u(o), ...i.$attrs }), {
        default: m(() => [
          A(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"])
    ]));
  }
}), zf = /* @__PURE__ */ O({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(PC), I({ "data-slot": "combobox-item" }, u(o), {
      class: u(Q)("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a.class)
    }), {
      default: m(() => [
        A(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EM = /* @__PURE__ */ O({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(IC), I({ "data-slot": "combobox-item-indicator" }, u(r), {
      class: u(Q)("zkit:ml-auto", t.class)
    }), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $M = /* @__PURE__ */ O({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    hideWhenEmpty: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    portable: { type: Boolean, default: !0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => e.portable ? (v(), x(u(VC), { key: 0 }, {
      default: m(() => [
        _(u(nf), I({ "data-slot": "combobox-list" }, u(o), {
          class: u(Q)("zkit:z-50 zkit:w-[200px] zkit:rounded-md zkit:border zkit:bg-popover zkit:text-popover-foreground zkit:origin-(--zkit-reka-combobox-content-transform-origin) zkit:overflow-hidden zkit:shadow-md zkit:outline-none zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2", a.class)
        }), {
          default: m(() => [
            A(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    })) : (v(), x(u(nf), I({
      key: 1,
      "data-slot": "combobox-list"
    }, u(o), {
      class: u(Q)("zkit:z-50 zkit:w-[200px] zkit:rounded-md zkit:border zkit:bg-popover zkit:text-popover-foreground zkit:origin-(--zkit-reka-combobox-content-transform-origin) zkit:overflow-hidden zkit:shadow-md zkit:outline-none zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2", a.class)
    }), {
      default: m(() => [
        A(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eu = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    return (r, n) => (v(), x(u(gg), I({ "data-slot": "dialog" }, u(a)), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), BM = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(qg), I({ "data-slot": "dialog-overlay" }, u(a), {
      class: u(Q)("zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:fixed zkit:inset-0 zkit:z-50 zkit:bg-black/80", t.class)
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tu = /* @__PURE__ */ O({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    hideClose: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(bO), null, {
      default: m(() => [
        _(BM),
        _(u(_g), I({ "data-slot": "dialog-content" }, u(o), {
          class: u(Q)(
            "zkit:bg-background zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:fixed zkit:top-[50%] zkit:left-[50%] zkit:z-50 zkit:grid zkit:w-full zkit:max-w-[calc(100%-2rem)] zkit:translate-x-[-50%] zkit:translate-y-[-50%] zkit:gap-4 zkit:rounded-lg zkit:border zkit:p-6 zkit:shadow-lg zkit:duration-200 zkit:sm:max-w-lg",
            a.class
          )
        }), {
          default: m(() => [
            A(i.$slots, "default"),
            a.hideClose ? Z("", !0) : (v(), x(u(Fs), {
              key: 0,
              class: "zkit:ring-offset-background zkit:focus:ring-ring zkit:data-[state=open]:bg-accent zkit:data-[state=open]:text-muted-foreground zkit:absolute zkit:top-4 zkit:right-4 zkit:rounded-xs zkit:opacity-70 zkit:transition-opacity zkit:hover:opacity-100 zkit:focus:ring-2 zkit:focus:ring-offset-2 zkit:focus:outline-hidden zkit:disabled:pointer-events-none zkit:[&_svg]:pointer-events-none zkit:[&_svg]:shrink-0 zkit:[&_svg:not([class*='size-'])]:size-4"
            }, {
              default: m(() => [
                _(u(xb)),
                l[0] || (l[0] = ee("span", { class: "zkit:sr-only" }, "Close", -1))
              ]),
              _: 1
            }))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), au = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(Sg), I({ "data-slot": "dialog-description" }, u(r), {
      class: u(Q)("zkit:text-muted-foreground zkit:text-sm", t.class)
    }), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MM = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "dialog-footer",
      class: ye(u(Q)("zkit:flex zkit:flex-col-reverse zkit:gap-2 zkit:sm:flex-row zkit:sm:justify-end", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), _b = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "dialog-header",
      class: ye(u(Q)("zkit:flex zkit:flex-col zkit:gap-2 zkit:text-center zkit:sm:text-left", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), ru = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(Og), I({ "data-slot": "dialog-title" }, u(r), {
      class: u(Q)("zkit:text-lg zkit:leading-none zkit:font-semibold", t.class)
    }), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nu = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(Ag), I({ "data-slot": "dialog-trigger" }, t), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
(function() {
  var e;
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.nonce = (e = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : e.content, t.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(t);
    }
  } catch (a) {
    console.error("vite-plugin-css-injected-by-js", a);
  }
})();
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gl = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    return (r, n) => (v(), x(u(O$), I({ "data-slot": "dropdown-menu" }, u(a)), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hl = /* @__PURE__ */ O({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(M$), null, {
      default: m(() => [
        _(u(C$), I({ "data-slot": "dropdown-menu-content" }, u(o), {
          class: u(Q)("zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:z-50 zkit:max-h-(--zkit-reka-dropdown-menu-content-available-height) zkit:min-w-[8rem] zkit:origin-(--zkit-reka-dropdown-menu-content-transform-origin) zkit:overflow-x-hidden zkit:overflow-y-auto zkit:rounded-md zkit:border zkit:p-1 zkit:shadow-md", a.class)
        }), {
          default: m(() => [
            A(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Yl = /* @__PURE__ */ O({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, a = me(t, "inset", "variant", "class"), r = Fe(a);
    return (n, o) => (v(), x(u($$), I({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, u(r), {
      class: u(Q)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Zl = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Fe(e);
    return (a, r) => (v(), x(u(P$), I({ "data-slot": "dropdown-menu-trigger" }, u(t)), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sb = /* @__PURE__ */ Symbol.for("zenith:form-item");
function Zo() {
  const e = rn(Gk), t = rn(Sb);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { name: a } = e, r = t, n = {
    valid: Qk(a),
    isDirty: Zk(a),
    isTouched: Yk(a),
    error: Hk(a)
  };
  return {
    id: r,
    name: a,
    formItemId: `${r}-form-item`,
    formDescriptionId: `${r}-form-item-description`,
    formMessageId: `${r}-form-item-message`,
    ...n
  };
}
const sa = /* @__PURE__ */ O({
  __name: "FormControl",
  setup(e) {
    const { error: t, formItemId: a, formDescriptionId: r, formMessageId: n } = Zo();
    return (o, i) => (v(), x(u(uo), {
      id: u(a),
      "data-slot": "form-control",
      "aria-describedby": u(t) ? `${u(r)} ${u(n)}` : `${u(r)}`,
      "aria-invalid": !!u(t)
    }, {
      default: m(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), DM = ["id"], Pt = /* @__PURE__ */ O({
  __name: "FormDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { formDescriptionId: a } = Zo();
    return (r, n) => (v(), W("p", {
      id: u(a),
      "data-slot": "form-description",
      class: ye(u(Q)("zkit:text-muted-foreground zkit:text-sm", t.class))
    }, [
      A(r.$slots, "default")
    ], 10, DM));
  }
}), jt = /* @__PURE__ */ O({
  __name: "FormItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = et();
    return as(Sb, a), (r, n) => (v(), W("div", {
      "data-slot": "form-item",
      class: ye(u(Q)("zkit:grid zkit:gap-2", t.class))
    }, [
      A(r.$slots, "default")
    ], 2));
  }
}), cn = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(I$), I({ "data-slot": "label" }, u(a), {
      class: u(Q)(
        "zkit:flex zkit:items-center zkit:gap-2 zkit:text-sm zkit:leading-none zkit:font-medium zkit:select-none zkit:group-data-[disabled=true]:pointer-events-none zkit:group-data-[disabled=true]:opacity-50 zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), It = /* @__PURE__ */ O({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { error: a, formItemId: r } = Zo();
    return (n, o) => (v(), x(u(cn), {
      "data-slot": "form-label",
      "data-error": !!u(a),
      class: ye(u(Q)(
        "zkit:data-[error=true]:text-destructive-foreground",
        t.class
      )),
      for: u(r)
    }, {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-error", "class", "for"]));
  }
}), Ft = /* @__PURE__ */ O({
  __name: "FormMessage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { name: a, formMessageId: r } = Zo();
    return (n, o) => (v(), x(u(Uk), {
      id: u(r),
      "data-slot": "form-message",
      as: "p",
      name: Se(u(a)),
      class: ye(u(Q)("zkit:text-destructive-foreground zkit:dark:text-destructive zkit:text-sm", t.class))
    }, null, 8, ["id", "name", "class"]));
  }
}), Tt = Rk, xa = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = /* @__PURE__ */ Xe(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (n, o) => mr((v(), W("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => tt(r) ? r.value = i : null),
      "data-slot": "input",
      class: ye(u(Q)(
        "zkit:file:text-foreground zkit:placeholder:text-muted-foreground zkit:selection:bg-primary zkit:selection:text-primary-foreground zkit:dark:bg-input/30 zkit:border-input zkit:flex zkit:h-9 zkit:w-full zkit:min-w-0 zkit:rounded-md zkit:border zkit:bg-transparent zkit:px-3 zkit:py-1 zkit:text-base zkit:shadow-xs zkit:transition-[color,box-shadow] zkit:outline-none zkit:file:inline-flex zkit:file:h-7 zkit:file:border-0 zkit:file:bg-transparent zkit:file:text-sm zkit:file:font-medium zkit:disabled:pointer-events-none zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50 zkit:md:text-sm",
        "zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:focus-visible:ring-[3px]",
        "zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [Pf, u(r)]
    ]);
  }
}), qb = /* @__PURE__ */ O({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    return (r, n) => (v(), x(u(p$), I({ "data-slot": "popover" }, u(a)), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ob = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(x$), null, {
      default: m(() => [
        _(u(k$), I({ "data-slot": "popover-content" }, { ...u(o), ...i.$attrs }, {
          class: u(Q)(
            "zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:z-50 zkit:w-72 zkit:rounded-md zkit:border zkit:p-4 zkit:shadow-md zkit:origin-(--zkit-reka-popover-content-transform-origin) zkit:outline-hidden",
            a.class
          )
        }), {
          default: m(() => [
            A(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ab = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(_$), I({ "data-slot": "popover-trigger" }, t), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), PM = /* @__PURE__ */ O({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    nullableValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const a = Me(e, t);
    return (r, n) => (v(), x(u(W$), I({ "data-slot": "select" }, u(a)), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jM = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(z2), null, {
      default: m(() => [
        _(u(i2), I({ "data-slot": "select-content" }, { ...u(o), ...i.$attrs }, {
          class: u(Q)(
            "zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:relative zkit:z-50 zkit:max-h-(--zkit-reka-select-content-available-height) zkit:min-w-[8rem] zkit:overflow-x-hidden zkit:overflow-y-auto zkit:rounded-md zkit:border zkit:shadow-md",
            e.position === "popper" && "zkit:data-[side=bottom]:translate-y-1 zkit:data-[side=left]:-translate-x-1 zkit:data-[side=right]:translate-x-1 zkit:data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: m(() => [
            A(i.$slots, "top"),
            _(u(VM)),
            _(u(D2), {
              class: ye(u(Q)("zkit:p-1", e.position === "popper" && "zkit:h-[var(--zkit-reka-select-trigger-height)] zkit:w-full zkit:min-w-[var(--zkit-reka-select-trigger-width)] zkit:scroll-my-1"))
            }, {
              default: m(() => [
                A(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            _(u(NM)),
            A(i.$slots, "bottom")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), IM = /* @__PURE__ */ O({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(d2), I({ "data-slot": "select-group" }, t), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FM = { class: "zkit:absolute zkit:right-2 zkit:flex zkit:size-3.5 zkit:items-center zkit:justify-center" }, _f = /* @__PURE__ */ O({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(m2), I({ "data-slot": "select-item" }, u(r), {
      class: u(Q)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: m(() => [
        ee("span", FM, [
          _(u(v2), null, {
            default: m(() => [
              _(u(Xs), { class: "zkit:size-4" })
            ]),
            _: 1
          })
        ]),
        _(u(b2), null, {
          default: m(() => [
            A(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), TM = /* @__PURE__ */ O({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(w2), {
      "data-slot": "select-label",
      class: ye(u(Q)("zkit:px-2 zkit:py-1.5 zkit:text-sm zkit:font-medium", t.class))
    }, {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), NM = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(q2), I({ "data-slot": "select-scroll-down-button" }, u(r), {
      class: u(Q)("zkit:flex zkit:cursor-default zkit:items-center zkit:justify-center zkit:py-1", t.class)
    }), {
      default: m(() => [
        A(n.$slots, "default", {}, () => [
          _(u(wb), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VM = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(A2), I({ "data-slot": "select-scroll-up-button" }, u(r), {
      class: u(Q)("zkit:flex zkit:cursor-default zkit:items-center zkit:justify-center zkit:py-1", t.class)
    }), {
      default: m(() => [
        A(n.$slots, "default", {}, () => [
          _(u(JB), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), RM = /* @__PURE__ */ O({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    size: { default: "default" }
  },
  setup(e) {
    const t = e, a = me(t, "class", "size"), r = Fe(a);
    return (n, o) => (v(), x(u(E2), I({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, u(r), {
      class: u(Q)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-10 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: m(() => [
        A(n.$slots, "default"),
        _(u(f2), { "as-child": "" }, {
          default: m(() => [
            _(u(wb), { class: "zkit:size-4 zkit:opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), UM = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(u(B2), I({ "data-slot": "select-value" }, t), {
      default: m(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), LM = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(F2), I({ "data-slot": "separator-root" }, u(a), {
      class: u(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
});
let Ql = 1;
var WM = class {
  subscribers;
  toasts;
  dismissedToasts;
  constructor() {
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
  subscribe = (e) => (this.subscribers.push(e), () => {
    const t = this.subscribers.indexOf(e);
    this.subscribers.splice(t, 1);
  });
  publish = (e) => {
    this.subscribers.forEach((t) => t(e));
  };
  addToast = (e) => {
    this.publish(e), this.toasts = [...this.toasts, e];
  };
  create = (e) => {
    const { message: t, ...a } = e, r = typeof e.id == "number" || e.id && e.id?.length > 0 ? e.id : Ql++, n = this.toasts.find((i) => i.id === r), o = e.dismissible === void 0 ? !0 : e.dismissible;
    return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), n ? this.toasts = this.toasts.map((i) => i.id === r ? (this.publish({
      ...i,
      ...e,
      id: r,
      title: t
    }), {
      ...i,
      ...e,
      id: r,
      dismissible: o,
      title: t
    }) : i) : this.addToast({
      title: t,
      ...a,
      dismissible: o,
      id: r
    }), r;
  };
  dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
    id: e,
    dismiss: !0
  })))) : this.toasts.forEach((t) => {
    this.subscribers.forEach((a) => a({
      id: t.id,
      dismiss: !0
    }));
  }), e);
  message = (e, t) => this.create({
    ...t,
    message: e,
    type: "default"
  });
  error = (e, t) => this.create({
    ...t,
    type: "error",
    message: e
  });
  success = (e, t) => this.create({
    ...t,
    type: "success",
    message: e
  });
  info = (e, t) => this.create({
    ...t,
    type: "info",
    message: e
  });
  warning = (e, t) => this.create({
    ...t,
    type: "warning",
    message: e
  });
  loading = (e, t) => this.create({
    ...t,
    type: "loading",
    message: e
  });
  promise = (e, t) => {
    if (!t) return;
    let a;
    t.loading !== void 0 && (a = this.create({
      ...t,
      promise: e,
      type: "loading",
      message: t.loading,
      description: typeof t.description != "function" ? t.description : void 0
    }));
    const r = Promise.resolve(e instanceof Function ? e() : e);
    let n = a !== void 0, o;
    const i = r.then(async (s) => {
      if (o = ["resolve", s], Tr(s))
        n = !1, this.create({
          id: a,
          type: "default",
          message: s
        });
      else if (GM(s) && !s.ok) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(`HTTP error! status: ${s.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${s.status}`) : t.description, f = typeof d == "object" && !Tr(d) ? d : {
          message: d || "",
          id: a || ""
        };
        this.create({
          id: a,
          type: "error",
          description: c,
          ...f
        });
      } else if (s instanceof Error) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(s) : t.error, c = typeof t.description == "function" ? await t.description(s) : t.description, f = typeof d == "object" && !Tr(d) ? d : {
          message: d || "",
          id: a || ""
        };
        this.create({
          id: a,
          type: "error",
          description: c,
          ...f
        });
      } else if (t.success !== void 0) {
        n = !1;
        const d = typeof t.success == "function" ? await t.success(s) : t.success, c = typeof t.description == "function" ? await t.description(s) : t.description, f = typeof d == "object" && !Tr(d) ? d : {
          message: d || "",
          id: a || ""
        };
        this.create({
          id: a,
          type: "success",
          description: c,
          ...f
        });
      }
    }).catch(async (s) => {
      if (o = ["reject", s], t.error !== void 0) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(s) : t.error, c = typeof t.description == "function" ? await t.description(s) : t.description, f = typeof d == "object" && !Tr(d) ? d : {
          message: d || "",
          id: a || ""
        };
        this.create({
          id: a,
          type: "error",
          description: c,
          ...f
        });
      }
    }).finally(() => {
      n && (this.dismiss(a), a = void 0), t.finally?.();
    }), l = () => new Promise((s, d) => i.then(() => o[0] === "reject" ? d(o[1]) : s(o[1])).catch(d));
    return typeof a != "string" && typeof a != "number" ? { unwrap: l } : Object.assign(a, { unwrap: l });
  };
  custom = (e, t) => {
    const a = t?.id || Ql++, r = this.toasts.find((o) => o.id === a), n = t?.dismissible === void 0 ? !0 : t.dismissible;
    return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), r ? this.toasts = this.toasts.map((o) => o.id === a ? (this.publish({
      ...o,
      component: e,
      dismissible: n,
      id: a,
      ...t
    }), {
      ...o,
      component: e,
      dismissible: n,
      id: a,
      ...t
    }) : o) : this.addToast({
      component: e,
      dismissible: n,
      id: a,
      ...t
    }), a;
  };
  getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
};
const kt = new WM();
function KM(e, t) {
  const a = t?.id || Ql++;
  return kt.create({
    message: e,
    id: a,
    type: "default",
    ...t
  }), a;
}
const GM = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", HM = KM, YM = () => kt.toasts, ZM = () => kt.getActiveToasts();
Object.assign(HM, {
  success: kt.success,
  info: kt.info,
  warning: kt.warning,
  error: kt.error,
  custom: kt.custom,
  message: kt.message,
  promise: kt.promise,
  dismiss: kt.dismiss,
  loading: kt.loading
}, {
  getHistory: YM,
  getToasts: ZM
});
const QM = /* @__PURE__ */ O({
  __name: "Switch",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    id: {},
    value: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(U2), I({ "data-slot": "switch" }, u(o), {
      class: u(Q)(
        "zkit:peer zkit:data-[state=checked]:bg-primary zkit:data-[state=unchecked]:bg-input zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:dark:data-[state=unchecked]:bg-input/80 zkit:inline-flex zkit:h-[1.15rem] zkit:w-8 zkit:shrink-0 zkit:items-center zkit:rounded-full zkit:border zkit:border-transparent zkit:shadow-xs zkit:transition-all zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
        a.class
      )
    }), {
      default: m(() => [
        _(u(W2), {
          "data-slot": "switch-thumb",
          class: ye(u(Q)("zkit:bg-background zkit:dark:data-[state=unchecked]:bg-foreground zkit:dark:data-[state=checked]:bg-primary-foreground zkit:pointer-events-none zkit:block zkit:size-4 zkit:rounded-full zkit:ring-0 zkit:transition-transform zkit:data-[state=checked]:translate-x-[calc(100%-2px)] zkit:data-[state=unchecked]:translate-x-0"))
        }, {
          default: m(() => [
            A(i.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cb = /* @__PURE__ */ O({
  __name: "Table",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    wrapperClass: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("div", {
      "data-slot": "table-container",
      class: ye(u(Q)("zkit:relative zkit:w-full zkit:overflow-auto", t.wrapperClass))
    }, [
      ee("table", {
        "data-slot": "table",
        class: ye(u(Q)("zkit:w-full zkit:caption-bottom zkit:text-sm", t.class))
      }, [
        A(a.$slots, "default")
      ], 2)
    ], 2));
  }
}), Eb = /* @__PURE__ */ O({
  __name: "TableBody",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("tbody", {
      "data-slot": "table-body",
      class: ye(u(Q)("zkit:[&_tr:last-child]:border-0", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), ja = /* @__PURE__ */ O({
  __name: "TableCell",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("td", {
      "data-slot": "table-cell",
      class: ye(
        u(Q)(
          "zkit:p-2 zkit:align-middle zkit:whitespace-nowrap zkit:[&:has([role=checkbox])]:pr-0 zkit:[&>[role=checkbox]]:translate-y-[2px]",
          t.class
        )
      )
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), Ia = /* @__PURE__ */ O({
  __name: "TableRow",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("tr", {
      "data-slot": "table-row",
      class: ye(u(Q)("zkit:hover:bg-muted/50 zkit:data-[state=selected]:bg-muted zkit:border-b zkit:transition-colors", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), ho = /* @__PURE__ */ O({
  __name: "TableHead",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("th", {
      "data-slot": "table-head",
      class: ye(u(Q)("zkit:text-muted-foreground zkit:h-10 zkit:px-2 zkit:text-left zkit:align-middle zkit:font-medium zkit:whitespace-nowrap ", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), $b = /* @__PURE__ */ O({
  __name: "TableHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), W("thead", {
      "data-slot": "table-header",
      class: ye(u(Q)("zkit:[&_tr]:border-b", t.class))
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), xj = /* @__PURE__ */ O({
  __name: "Tabs",
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Me(n, r);
    return (i, l) => (v(), x(u(H2), I({ "data-slot": "tabs" }, u(o), {
      class: u(Q)("zkit:flex zkit:flex-col zkit:gap-2", a.class)
    }), {
      default: m(() => [
        A(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zj = /* @__PURE__ */ O({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(Z2), I({
      "data-slot": "tabs-content",
      class: u(Q)("zkit:flex-1 zkit:outline-none", t.class)
    }, u(a)), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _j = /* @__PURE__ */ O({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(u(J2), I({ "data-slot": "tabs-list" }, u(a), {
      class: u(Q)(
        "zkit:bg-muted zkit:text-muted-foreground zkit:inline-flex zkit:h-9 zkit:w-fit zkit:items-center zkit:justify-center zkit:rounded-lg zkit:p-[3px]",
        t.class
      )
    }), {
      default: m(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sj = /* @__PURE__ */ O({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(eB), I({ "data-slot": "tabs-trigger" }, u(r), {
      class: u(Q)(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bb = /* @__PURE__ */ O({
  __name: "Textarea",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = /* @__PURE__ */ Xe(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (n, o) => mr((v(), W("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => tt(r) ? r.value = i : null),
      "data-slot": "textarea",
      class: ye(u(Q)("zkit:border-input zkit:placeholder:text-muted-foreground zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:dark:bg-input/30 zkit:flex zkit:field-sizing-content zkit:min-h-16 zkit:w-full zkit:rounded-md zkit:border zkit:bg-transparent zkit:px-3 zkit:py-2 zkit:text-base zkit:shadow-xs zkit:transition-[color,box-shadow] zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50 zkit:md:text-sm", a.class))
    }, null, 2)), [
      [Pf, u(r)]
    ]);
  }
}), ou = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ClientOnly",
  setup(e) {
    const t = F(!1);
    return Ae(() => {
      t.value = !0;
    }), (a, r) => t.value ? A(a.$slots, "default", {}, void 0, void 0, 0) : A(a.$slots, "fallback", {}, void 0, void 0, 1);
  }
}), JM = { class: "zkit:flex" }, XM = {
  key: 1,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, Mb = /* @__PURE__ */ O({
  __name: "TextField",
  props: /* @__PURE__ */ Ve({
    id: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    labelClass: {
      type: String,
      default: "min-w-[132px]"
    },
    inputClass: {
      type: String,
      default: ""
    }
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const [t, a] = pe(e, "modelValue");
    return (r, n) => (v(), W("div", null, [
      e.label && e.variant !== "horizontal" ? (v(), x(cn, {
        key: 0,
        class: ye(["zkit:mb-4", e.labelClass])
      }, {
        default: m(() => [
          J(V(e.label), 1)
        ]),
        _: 1
      }, 8, ["class"])) : Z("", !0),
      ee("div", JM, [
        e.label && e.variant === "horizontal" ? (v(), x(cn, {
          key: 0,
          class: ye(["zkit:h-10 zkit:flex zkit:items-center zkit:border zkit:px-2 zkit:rounded-l zkit:bg-secondary zkit:text-xs", e.labelClass])
        }, {
          default: m(() => [
            J(V(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Z("", !0),
        A(r.$slots, "prepend"),
        _(u(xa), {
          id: e.id,
          "model-value": u(t),
          type: e.type,
          placeholder: e.placeholder,
          disabled: e.disabled,
          autocomplete: e.autocomplete,
          readonly: e.readonly,
          autofocus: e.autofocus,
          class: ye([[e.label && e.variant === "horizontal" ? "zkit:rounded-l-none zkit:flex-1" : "", e.inputClass], "zkit:h-10"]),
          "onUpdate:modelValue": n[0] || (n[0] = (o) => !u(a).lazy && (t.value = o)),
          onChange: n[1] || (n[1] = (o) => u(a).lazy && (t.value = o.target.value))
        }, null, 8, ["id", "model-value", "type", "placeholder", "disabled", "autocomplete", "readonly", "autofocus", "class"]),
        A(r.$slots, "append")
      ]),
      e.hint ? (v(), W("p", XM, V(e.hint), 1)) : Z("", !0)
    ]));
  }
}), eD = { class: "zkit:space-y-4" }, tD = { class: "zkit:relative zkit:w-full zkit:h-48 zkit:rounded-md zkit:overflow-hidden zkit:cursor-crosshair" }, aD = { class: "zkit:space-y-2" }, rD = { class: "zkit:relative zkit:h-3 zkit:rounded-md zkit:overflow-hidden zkit:cursor-pointer" }, nD = /* @__PURE__ */ O({
  __name: "ColorWheel",
  props: {
    modelValue: {
      type: String,
      default: "#ff0000"
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = pe(e, "modelValue"), { hsl: a } = ep(t);
    function r(f, y, p) {
      return Math.ceil(Math.min(p, Math.max(y, f)));
    }
    const n = D(() => a.value?.h || 0), o = D(() => a.value?.s || 100), i = D(() => a.value?.l || 50), l = D(() => {
      const f = o.value / 100, y = i.value / 100, p = y + f * Math.min(y, 1 - y);
      return p === 0 ? 0 : 2 * (1 - y / p) * 100;
    }), s = D(() => {
      const f = o.value / 100, y = i.value / 100;
      return (y + f * Math.min(y, 1 - y)) * 100;
    });
    function d(f) {
      const y = f.currentTarget.getBoundingClientRect(), p = (f.clientX - y.left) / y.width, g = (f.clientY - y.top) / y.height, h = p, k = 1 - g, w = k * (1 - h / 2), b = w === 0 || w === 1 ? 0 : (k - w) / Math.min(w, 1 - w);
      a.value = {
        h: a.value?.h || 0,
        s: r(b * 100, 0, 100),
        l: r(w * 100, 0, 100)
      };
    }
    function c(f) {
      const y = f.currentTarget.getBoundingClientRect(), p = (f.clientX - y.left) / y.width * 360;
      a.value = {
        h: r(p, 0, 360),
        s: a.value?.s || 100,
        l: a.value?.l || 50
      };
    }
    return (f, y) => (v(), W("div", eD, [
      ee("div", tD, [
        ee("div", {
          class: "zkit:absolute zkit:inset-0",
          style: ut({
            background: `linear-gradient(to right, #fff, hsl(${n.value}, 100%, 50%))`
          })
        }, null, 4),
        ee("div", {
          class: "zkit:absolute zkit:inset-0",
          style: { background: "linear-gradient(to bottom, transparent, #000)" },
          onClick: d
        }, [
          ee("div", {
            class: "zkit:absolute zkit:w-4 zkit:h-4 zkit:border-2 zkit:border-white zkit:rounded-full zkit:shadow-lg zkit:-translate-x-1/2 zkit:-translate-y-1/2 zkit:pointer-events-none",
            style: ut({
              left: `${l.value}%`,
              top: `${100 - s.value}%`
            })
          }, null, 4)
        ])
      ]),
      ee("div", aD, [
        y[0] || (y[0] = ee("label", { class: "zkit:text-sm zkit:font-medium zkit:mb-2 zkit:block" }, "Hue", -1)),
        ee("div", rD, [
          ee("div", {
            class: "zkit:absolute zkit:inset-0",
            style: { background: "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)" },
            onClick: c
          }, [
            ee("div", {
              class: "zkit:absolute zkit:w-1 zkit:h-full zkit:bg-white zkit:shadow-lg zkit:-translate-x-1/2 zkit:pointer-events-none",
              style: ut({ left: `${n.value / 360 * 100}%` })
            }, null, 4)
          ])
        ])
      ])
    ]));
  }
}), oD = { class: "zkit:space-y-4" }, iD = { class: "zkit:space-y-2" }, lD = { class: "zkit:flex zkit:items-center zkit:justify-between" }, sD = ["onClick"], uD = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2 zkit:mt-2"
}, dD = { class: "zkit:text-xs" }, cD = { class: "zkit:space-y-2" }, fD = { class: "zkit:grid zkit:grid-cols-10 zkit:gap-2" }, pD = ["onClick"], Db = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#64748b",
  "#000000",
  "#ffffff"
], yD = /* @__PURE__ */ O({
  __name: "ColorPicker",
  props: /* @__PURE__ */ Ve({
    class: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !0
    },
    presets: {
      type: Array,
      default: () => Db
    }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = F(!1), r = pe(e, "modelValue"), n = qr(r), { hex: o, rgb: i, rgba: l, hsl: s, oklch: d } = ep(r), c = D({
      get() {
        return n.value === "hex" ? o.value : n.value === "rgba" && l.value ? `rgba(${l.value.r}, ${l.value.g}, ${l.value.b}, ${l.value.a})` : n.value === "rgb" && i.value ? `rgb(${i.value.r}, ${i.value.g}, ${i.value.b})` : n.value === "hsl" && s.value ? `hsl(${s.value.h}, ${s.value.s}%, ${s.value.l}%)` : n.value === "oklch" && d.value ? `oklch(${d.value.l} ${d.value.c} ${d.value.h})` : "";
      },
      set(y) {
        y && (r.value = y);
      }
    });
    ge(n, (y) => {
      if (y === "hex") {
        c.value = o.value;
        return;
      }
      if (y === "rgb" && i.value) {
        c.value = `rgb(${i.value.r}, ${i.value.g}, ${i.value.b})`;
        return;
      }
      if (y === "rgba" && l.value) {
        c.value = `rgba(${l.value.r}, ${l.value.g}, ${l.value.b}, ${l.value.a})`;
        return;
      }
      if (y === "hsl" && s.value) {
        c.value = `hsl(${s.value.h}, ${s.value.s}%, ${s.value.l}%)`;
        return;
      }
      if (y === "oklch" && d.value) {
        c.value = `oklch(${d.value.l} ${d.value.c} ${d.value.h})`;
        return;
      }
    });
    function f(y) {
      if (!l.value) return;
      const p = Math.max(0, Math.min(1, Number(y)));
      r.value = `rgba(${l.value.r}, ${l.value.g}, ${l.value.b}, ${p})`;
    }
    return (y, p) => (v(), x(u(qb), {
      open: a.value,
      "onUpdate:open": p[4] || (p[4] = (g) => a.value = g)
    }, {
      default: m(() => [
        _(u(Ab), { "as-child": "" }, {
          default: m(() => [
            A(y.$slots, "activator", {
              color: r.value,
              open: a.value
            }, () => [
              _(Mb, {
                modelValue: r.value,
                "onUpdate:modelValue": p[0] || (p[0] = (g) => r.value = g),
                label: e.label,
                variant: e.variant,
                placeholder: e.placeholder,
                readonly: e.readonly,
                class: ye([t.class, "zkit:cursor-pointer"]),
                "input-class": "text-left rounded-l-none"
              }, {
                prepend: m(() => [
                  ee("div", {
                    class: "zkit:size-10 zkit:border zkit:rounded-l zkit:shrink-0",
                    style: ut({ backgroundColor: r.value })
                  }, null, 4)
                ]),
                _: 1
              }, 8, ["modelValue", "label", "variant", "placeholder", "readonly", "class"])
            ])
          ]),
          _: 3
        }),
        _(u(Ob), {
          class: "zkit:w-72 zkit:p-4",
          align: "start"
        }, {
          default: m(() => [
            ee("div", oD, [
              _(nD, {
                modelValue: r.value,
                "onUpdate:modelValue": p[1] || (p[1] = (g) => r.value = g)
              }, null, 8, ["modelValue"]),
              ee("div", iD, [
                ee("div", lD, [
                  (v(), W(xe, null, De(["hex", "rgb", "rgba", "hsl", "oklch"], (g) => ee("button", {
                    key: g,
                    type: "button",
                    class: ye(["zkit:text-xs zkit:px-2 zkit:py-1 zkit:rounded zkit:font-medium zkit:uppercase", u(n) === g ? "zkit:bg-primary zkit:text-primary-foreground" : "zkit:bg-secondary zkit:hover:bg-secondary/80"]),
                    onClick: (h) => n.value = g
                  }, V(g), 11, sD)), 64))
                ]),
                _(u(xa), {
                  "model-value": c.value,
                  class: ye([{ "zkit:uppercase": u(n) === "hex" }, "zkit:font-mono"]),
                  placeholder: u(n) === "hex" ? "#000000" : u(n) === "rgb" ? "rgb(0, 0, 0)" : u(n) === "rgba" ? "rgba(0, 0, 0, 1)" : u(n) === "hsl" ? "hsl(0, 0%, 0%)" : "oklch(0 0 0)",
                  onChange: p[2] || (p[2] = (g) => {
                    c.value = g.target.value;
                  })
                }, null, 8, ["model-value", "class", "placeholder"]),
                u(n) === "rgba" && u(l) && u(l) ? (v(), W("div", uD, [
                  ee("label", dD, V(y.$t("Opacity")), 1),
                  _(u(xa), {
                    type: "number",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    "model-value": u(l).a,
                    class: "zkit:w-16 zkit:font-mono",
                    onChange: p[3] || (p[3] = (g) => f(g.target.value))
                  }, null, 8, ["model-value"])
                ])) : Z("", !0)
              ]),
              ee("div", cD, [
                p[5] || (p[5] = ee("label", { class: "zkit:text-sm zkit:font-medium zkit:mb-2 zkit:block" }, "Presets", -1)),
                ee("div", fD, [
                  (v(!0), W(xe, null, De(e.presets, (g) => (v(), W("button", {
                    key: g,
                    type: "button",
                    class: "zkit:w-6 zkit:h-6 zkit:rounded zkit:border zkit:border-border zkit:hover:scale-110 zkit:transition-transform",
                    style: ut({ backgroundColor: g }),
                    onClick: () => {
                      r.value = g;
                    }
                  }, null, 12, pD))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), mD = ["icon"], Le = /* @__PURE__ */ O({
  __name: "Icon",
  props: {
    name: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, a = D(() => t.name?.includes(":") ? t.name : `lucide:${G_(t.name)}`);
    return (r, n) => (v(), W("iconify-icon", {
      icon: a.value,
      class: "zkit:flex"
    }, null, 8, mD));
  }
}), hD = {
  key: 1,
  class: "zkit:text-sm"
}, rt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ZButton",
  props: /* @__PURE__ */ Ve({
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  }, {
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["click"], ["update:loading"]),
  setup(e, { emit: t }) {
    const a = $k("RouterLink"), r = e, n = pe(e, "loading"), o = t;
    function i(s) {
      r.href || o("click", s);
    }
    const l = D(() => r.to ? a : r.href ? "a" : "button");
    return (s, d) => (v(), x(ot, I(s.$attrs, {
      disabled: e.disabled || n.value,
      as: l.value,
      href: e.to ? e.to : e.href,
      to: e.to,
      type: e.type,
      onClick: i
    }), {
      default: m(() => [
        n.value ? (v(), x(Le, {
          key: 0,
          name: "Loader2",
          class: "zkit:animate-spin"
        })) : e.label ? (v(), W("span", hD, V(e.label), 1)) : A(s.$slots, "default", {}, void 0, void 0, 2)
      ]),
      _: 3
    }, 16, ["disabled", "as", "href", "to", "type"]));
  }
});
class vD {
  static __container_entry_key = "DashboardWidgetRegistry";
  definitions = /* @__PURE__ */ new Map();
  register(...t) {
    for (const a of t)
      this.definitions.set(a.id, a);
  }
  get(t) {
    return this.definitions.get(t) || null;
  }
  list() {
    return Array.from(this.definitions.values());
  }
}
dt.proxy(vD);
const gD = /* @__PURE__ */ O({
  __name: "FormTextarea",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(Tt), { name: e.name }, {
      default: m(({ componentField: r }) => [
        _(u(jt), null, {
          default: m(() => [
            _(u(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(u(sa), null, {
              default: m(() => [
                _(Bb, I({
                  class: "zkit:min-h-20",
                  rows: e.rows
                }, { ...t.$attrs, ...r }), null, 16, ["rows"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(u(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), bD = dt.proxy(gn), kD = { class: "zkit:flex" }, wD = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2"
}, xD = { class: "zkit:text-sm" }, zD = {
  key: 1,
  class: "zkit:flex zkit:flex-col"
}, _D = { class: "zkit:border-b zkit:p-2" }, SD = {
  key: 1,
  class: "zkit:flex zkit:flex-col"
}, qD = {
  key: 0,
  class: "zkit:text-xs zkit:text-muted-foreground zkit:white-space-normal zkit:break-words zkit:mt-0.5"
}, OD = { class: "zkit:flex zkit:space-x-2 zkit:p-2 zkit:border-t zkit:justify-end" }, Pb = /* @__PURE__ */ O({
  __name: "ZSelect",
  props: /* @__PURE__ */ Ve({
    id: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default"
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    labelKey: {
      type: String,
      default: "label"
    },
    descriptionKey: {
      type: String,
      default: null
    },
    valueKey: {
      type: String,
      default: "value"
    },
    fetch: {
      type: String,
      default: ""
    },
    fetchOptions: {
      type: Object,
      default: () => ({})
    },
    fetchKey: {
      type: String,
      default: "items"
    },
    labelClass: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    badge: {
      type: Boolean,
      default: !1
    },
    colorKey: {
      type: String,
      default: "color"
    },
    showSearchInput: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {
      required: !0,
      default: null
    },
    modelModifiers: {},
    options: {
      type: Array,
      default: () => []
    },
    optionsModifiers: {}
  }),
  emits: ["update:modelValue", "update:options"],
  setup(e) {
    const t = e, a = pe(e, "modelValue"), r = F(""), n = D(() => i.value.map((k) => ({
      label: s(k),
      value: d(k),
      description: c(k),
      color: f(k)
    }))), o = D(() => {
      const k = r.value.trim().toLowerCase();
      return k ? n.value.filter((w) => {
        const b = String(w.label || "").toLowerCase(), S = String(w.description || "").toLowerCase();
        return b.includes(k) || S.includes(k);
      }) : n.value;
    }), i = pe(e, "options"), l = D(() => t.multiple ? n.value.filter((k) => a.value?.includes(k.value)) : n.value.find((k) => k.value === a.value) || null);
    function s(k) {
      return nt(k, t.labelKey) || k;
    }
    function d(k) {
      return nt(k, t.valueKey) || k;
    }
    function c(k) {
      return t.descriptionKey ? nt(k, t.descriptionKey) : null;
    }
    function f(k) {
      return t.colorKey ? nt(k, t.colorKey) : null;
    }
    function y(k) {
      return t.fetchKey ? nt(k, t.fetchKey) : k;
    }
    async function p() {
      if (!t.fetch) return;
      const [k, w] = await At.try(t.fetch, t.fetchOptions);
      if (k) {
        bD.error("Select fetch error:", k);
        return;
      }
      i.value = y(w);
    }
    function g() {
      a.value = o.value.map((k) => k.value);
    }
    function h() {
      a.value = [];
    }
    return Ae(() => {
      !i.value.length && t.fetch && p();
    }), ge(() => t.showSearchInput, (k) => {
      k || (r.value = "");
    }), (k, w) => (v(), W("div", null, [
      e.label && e.variant !== "horizontal" ? (v(), x(cn, {
        key: 0,
        class: ye(["zkit:text-sm zkit:font-medium zkit:leading-none zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-70 zkit:block zkit:mb-4", e.labelClass])
      }, {
        default: m(() => [
          J(V(e.label), 1)
        ]),
        _: 1
      }, 8, ["class"])) : Z("", !0),
      ee("div", kD, [
        e.variant === "horizontal" ? (v(), x(cn, {
          key: 0,
          class: ye(["zkit:h-10 zkit:flex zkit:items-center zkit:border zkit:px-2 zkit:rounded-l zkit:bg-secondary zkit:text-xs", e.labelClass])
        }, {
          default: m(() => [
            J(V(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Z("", !0),
        _(u(PM), {
          id: e.id,
          modelValue: a.value,
          "onUpdate:modelValue": w[5] || (w[5] = (b) => a.value = b),
          disabled: e.disabled,
          multiple: e.multiple
        }, {
          default: m(() => [
            _(u(RM), {
              class: ye(u(Q)("!h-10", e.variant === "horizontal" ? "rounded-l-none flex-1" : "w-full", k.$attrs.class))
            }, {
              default: m(() => [
                e.multiple && a.value?.length > 2 ? (v(), W("div", wD, [
                  ee("span", xD, V(a.value.length) + " selected", 1)
                ])) : l.value && !Array.isArray(l.value) ? (v(), W("div", zD, [
                  ee("span", null, V(l.value.label), 1)
                ])) : (v(), x(u(UM), {
                  key: 2,
                  placeholder: e.placeholder
                }, null, 8, ["placeholder"]))
              ]),
              _: 1
            }, 8, ["class"]),
            _(u(jM), { class: "zkit:max-h-92" }, Mf({
              default: m(() => [
                _(u(IM), null, {
                  default: m(() => [
                    o.value.length ? Z("", !0) : (v(), x(u(TM), { key: 0 }, {
                      default: m(() => [
                        J(V(k.$t("No items")), 1)
                      ]),
                      _: 1
                    })),
                    e.clearable && !e.multiple ? (v(), x(u(_f), {
                      key: 1,
                      value: null,
                      onClick: w[4] || (w[4] = (b) => a.value = e.multiple ? [] : null)
                    }, {
                      default: m(() => [
                        J(V(k.$t("None")), 1)
                      ]),
                      _: 1
                    })) : Z("", !0),
                    (v(!0), W(xe, null, De(o.value, (b) => (v(), x(u(_f), {
                      key: b.value,
                      value: b.value
                    }, {
                      default: m(() => [
                        e.badge ? (v(), W("div", {
                          key: 0,
                          class: "zkit:px-2 zkit:py-1 zkit:rounded-md zkit:text-xs zkit:font-medium",
                          style: ut({ backgroundColor: b.color || "#3b82f6", color: "white" })
                        }, V(b.label), 5)) : Z("", !0),
                        e.badge ? Z("", !0) : (v(), W("div", SD, [
                          ee("span", null, V(b.label), 1),
                          e.descriptionKey ? (v(), W("span", qD, V(b.description), 1)) : Z("", !0)
                        ]))
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, [
              e.showSearchInput ? {
                name: "top",
                fn: m(() => [
                  ee("div", _D, [
                    _(u(xa), {
                      modelValue: r.value,
                      "onUpdate:modelValue": w[0] || (w[0] = (b) => r.value = b),
                      placeholder: k.$t("Search"),
                      class: "zkit:h-9",
                      onKeydown: [
                        w[1] || (w[1] = mt(Pe(() => {
                        }, ["stop"]), ["enter"])),
                        w[2] || (w[2] = Pe(() => {
                        }, ["stop"]))
                      ],
                      onClick: w[3] || (w[3] = Pe(() => {
                      }, ["stop"]))
                    }, null, 8, ["modelValue", "placeholder"])
                  ])
                ]),
                key: "0"
              } : void 0,
              e.multiple ? {
                name: "bottom",
                fn: m(() => [
                  ee("div", OD, [
                    _(rt, {
                      variant: "outline",
                      size: "sm",
                      disabled: i.value.length === a.value?.length,
                      onClick: g
                    }, {
                      default: m(() => [
                        J(V(k.$t("All")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    e.clearable ? (v(), x(rt, {
                      key: 0,
                      variant: "outline",
                      size: "sm",
                      disabled: a.value?.length === 0,
                      onClick: h
                    }, {
                      default: m(() => [
                        J(V(k.$t("Clear")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])) : Z("", !0)
                  ])
                ]),
                key: "1"
              } : void 0
            ]), 1024)
          ]),
          _: 1
        }, 8, ["id", "modelValue", "disabled", "multiple"])
      ])
    ]));
  }
}), AD = /* @__PURE__ */ O({
  __name: "FormSelect",
  props: /* @__PURE__ */ Ve({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  }, {
    options: {
      type: Array,
      default: () => []
    },
    optionsModifiers: {}
  }),
  emits: ["update:options"],
  setup(e) {
    const t = pe(e, "options");
    return (a, r) => (v(), x(u(Tt), {
      name: e.name,
      disabled: e.disabled,
      readonly: e.readonly
    }, {
      default: m(({ componentField: n }) => [
        _(jt, null, {
          default: m(() => [
            _(It, null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(Pb, I({
              options: t.value,
              "onUpdate:options": r[0] || (r[0] = (o) => t.value = o),
              "model-value": n.modelValue
            }, a.$attrs, {
              onBlur: n.onBlur,
              "onUpdate:modelValue": n["onUpdate:modelValue"]
            }), null, 16, ["options", "model-value", "onBlur", "onUpdate:modelValue"]),
            e.hint ? (v(), x(Pt, { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(Ft)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name", "disabled", "readonly"]));
  }
}), CD = /* @__PURE__ */ O({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Fe(a);
    return (n, o) => (v(), x(u(UC), I({ "data-slot": "combobox-trigger" }, u(r), {
      class: u(Q)("", t.class),
      tabindex: "0"
    }), {
      default: m(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ED = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2 zkit:text-left"
}, $D = {
  key: 0,
  class: "zkit:flex-shrink-0"
}, BD = { class: "zkit:flex zkit:flex-col zkit:items-start zkit:flex-1" }, MD = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground zkit:white-space-normal zkit:break-words zkit:truncate zkit:max-w-sm"
}, DD = { key: 1 }, PD = { class: "zkit:ml-2 zkit:flex zkit:items-center zkit:space-x-2" }, jD = { class: "zkit:relative zkit:w-full zkit:items-center" }, ID = {
  key: 0,
  class: "zkit:flex-shrink-0 zkit:mr-2"
}, FD = { class: "zkit:flex zkit:flex-col zkit:items-start zkit:flex-1" }, TD = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, ND = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "FormAutocomplete",
  props: /* @__PURE__ */ Ve({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: null
    },
    labelKey: {
      type: [String, Function],
      default: "label"
    },
    subtitleKey: {
      type: [String, Function],
      default: null
    },
    avatarKey: {
      type: [String, Function],
      default: null
    },
    valueKey: {
      type: [String, Function],
      default: "value"
    },
    hint: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    class: {
      type: String,
      default: null
    },
    initialOption: {
      type: Object,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    fetch: {
      type: String,
      default: null
    },
    fetchQuery: {
      type: Object,
      default: () => ({})
    },
    fetchOption: {
      type: [String, Function],
      default: null
    },
    serialize: {
      type: Function,
      default: (e) => e
    },
    listAttrs: {
      type: Object,
      default: () => ({ portable: !1 })
    }
  }, {
    selectedObject: {
      type: Object
      // default: () => props.initialOption,
    },
    selectedObjectModifiers: {},
    options: {
      type: Array,
      default: () => []
    },
    optionsModifiers: {},
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {},
    search: {
      type: String,
      default: ""
    },
    searchModifiers: {}
  }),
  emits: ["update:selectedObject", "update:options", "update:loading", "update:search"],
  setup(e) {
    const t = e, { setValue: a, value: r } = Kk(t.name), n = pe(e, "selectedObject"), o = pe(e, "options"), i = pe(e, "loading"), l = pe(e, "search"), s = D(() => o.value.map((b) => t.serialize(b)).map((b) => ({
      label: f(b),
      subtitle: y(b),
      avatar: p(b),
      value: c(b),
      initials: g(b)
    }))), d = D(() => {
      if (!n.value)
        return null;
      const b = t.serialize(n.value);
      return {
        label: f(b),
        subtitle: y(b),
        avatar: p(b),
        value: c(b),
        initials: g(b)
      };
    });
    function c(b) {
      return t.valueKey ? typeof t.valueKey == "function" ? t.valueKey(b) : nt(b, t.valueKey, b) : b;
    }
    function f(b) {
      return t.labelKey ? typeof t.labelKey == "function" ? t.labelKey(b) : nt(b, t.labelKey, b) : null;
    }
    function y(b) {
      return t.subtitleKey ? typeof t.subtitleKey == "function" ? t.subtitleKey(b) : nt(b, t.subtitleKey, null) : null;
    }
    function p(b) {
      return t.avatarKey ? typeof t.avatarKey == "function" ? t.avatarKey(b) : nt(b, t.avatarKey, null) : null;
    }
    function g(b) {
      const S = f(b);
      return S ? String(S).charAt(0).toUpperCase() : "A";
    }
    function h(b) {
      if (!b) {
        n.value = null, a(null);
        return;
      }
      const S = o.value.map((z) => t.serialize(z)).find((z) => c(z) === b.value);
      n.value = S, a(S ? c(S) : null);
    }
    async function k() {
      if (!t.fetchOption || !r.value)
        return;
      i.value = !0;
      const [b, S] = await Gt(() => typeof t.fetchOption == "string" ? At.get(t.fetchOption.replace(":value", r.value), { method: "GET" }) : t.fetchOption(r.value));
      if (b) {
        console.error("Failed to load selected option:", b), i.value = !1;
        return;
      }
      n.value = t.serialize(S), setTimeout(() => {
        i.value = !1;
      }, 500);
    }
    async function w() {
      i.value = !0, await k();
      const b = {
        ...t.fetchQuery,
        search: l.value
      }, [S, z] = await At.try(t.fetch, {
        method: "GET",
        query: b
      });
      if (S) {
        console.error("Failed to load options:", S), o.value = [], i.value = !1;
        return;
      }
      const $ = z?.items || z;
      o.value = $.map((q) => t.serialize(q)), setTimeout(() => {
        i.value = !1;
      }, 500);
    }
    if (t.fetch && Yf(l, w, {
      immediate: !0,
      debounce: 1e3
    }), t.initialOption && (n.value = t.initialOption), !t.fetch && !t.initialOption && r.value) {
      const b = s.value.find((S) => S.value === r.value);
      b && h(b);
    }
    return (b, S) => (v(), x(u(Tt), {
      name: t.name
    }, {
      default: m(() => [
        _(u(jt), { class: "zkit:flex zkit:flex-col" }, {
          default: m(() => [
            e.label ? (v(), x(u(It), { key: 0 }, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(_M), {
              "ignore-filter": !!e.fetch,
              disabled: e.disabled,
              by: e.valueKey
            }, {
              default: m(() => [
                _(u(SM), { "as-child": "" }, {
                  default: m(() => [
                    _(CD, { "as-child": "" }, {
                      default: m(() => [
                        _(u(ot), {
                          variant: "outline",
                          class: "zkit:justify-between zkit:w-full zkit:h-auto zkit:min-h-10",
                          disabled: e.disabled
                        }, {
                          default: m(() => [
                            d.value ? (v(), W("div", ED, [
                              e.avatarKey ? (v(), W("div", $D, [
                                A(b.$slots, "avatar", { option: d.value }, () => [
                                  _(u(vf), { class: "zkit:size-6" }, {
                                    default: m(() => [
                                      d.value.avatar ? (v(), x(bf, {
                                        key: 0,
                                        src: d.value.avatar,
                                        alt: d.value.label
                                      }, null, 8, ["src", "alt"])) : Z("", !0),
                                      _(gf, null, {
                                        default: m(() => [
                                          J(V(d.value.initials), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])) : Z("", !0),
                              ee("div", BD, [
                                A(b.$slots, "label", { option: d.value }, () => [
                                  J(V(d.value.label), 1)
                                ]),
                                e.subtitleKey ? (v(), W("div", MD, [
                                  A(b.$slots, "subtitle", { option: n.value }, () => [
                                    J(V(d.value.subtitle || "-"), 1)
                                  ])
                                ])) : Z("", !0)
                              ])
                            ])) : (v(), W("div", DD, V(e.placeholder), 1)),
                            ee("div", PD, [
                              i.value ? (v(), x(Le, {
                                key: 0,
                                name: "Loader2",
                                class: "zkit:animate-spin"
                              })) : Z("", !0),
                              _(u(eM), { class: "zkit:size-4 zkit:shrink-0 zkit:opacity-50" })
                            ])
                          ]),
                          _: 3
                        }, 8, ["disabled"])
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }),
                _(u($M), I({
                  align: "start",
                  class: "zkit:w-md"
                }, e.listAttrs), {
                  default: m(() => [
                    ee("div", jD, [
                      _(u(CM), {
                        modelValue: l.value,
                        "onUpdate:modelValue": S[0] || (S[0] = (z) => l.value = z),
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    _(u(qM), { class: "zkit:px-6" }, {
                      default: m(() => [
                        J(V(b.$t("No results")), 1)
                      ]),
                      _: 1
                    }),
                    _(u(OM), { class: "zkit:max-h-60 zkit:overflow-y-auto" }, {
                      default: m(() => [
                        e.clearable ? (v(), W(xe, { key: 0 }, [
                          _(u(zf), {
                            value: null,
                            onClick: S[1] || (S[1] = (z) => h(null))
                          }, {
                            default: m(() => [
                              J(V(b.$t("Clear")), 1)
                            ]),
                            _: 1
                          }),
                          _(LM)
                        ], 64)) : Z("", !0),
                        (v(!0), W(xe, null, De(s.value, (z) => (v(), x(u(zf), {
                          key: z.value,
                          value: z.value,
                          onClick: ($) => h(z)
                        }, {
                          default: m(() => [
                            e.avatarKey ? (v(), W("div", ID, [
                              A(b.$slots, "avatar", { option: z }, () => [
                                _(u(vf), { class: "zkit:size-6" }, {
                                  default: m(() => [
                                    z.avatar ? (v(), x(bf, {
                                      key: 0,
                                      src: z.avatar,
                                      alt: z.label
                                    }, null, 8, ["src", "alt"])) : Z("", !0),
                                    _(gf, null, {
                                      default: m(() => [
                                        J(V(z.initials), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])) : Z("", !0),
                            ee("div", FD, [
                              A(b.$slots, "label", { option: z }, () => [
                                J(V(z.label), 1)
                              ]),
                              e.subtitleKey ? (v(), W("div", TD, [
                                A(b.$slots, "subtitle", { option: z }, () => [
                                  J(V(z.subtitle || "-"), 1)
                                ])
                              ])) : Z("", !0)
                            ]),
                            _(u(EM), null, {
                              default: m(() => [
                                _(u(Xs), {
                                  class: ye(u(Q)("zkit:ml-auto zkit:h-4 zkit:w-4"))
                                }, null, 8, ["class"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick"]))), 128))
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 16)
              ]),
              _: 3
            }, 8, ["ignore-filter", "disabled", "by"]),
            e.hint ? (v(), x(u(Pt), { key: 1 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), VD = { class: "zkit:space-y-2" }, RD = /* @__PURE__ */ O({
  __name: "FormSwitch",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ value: r, handleChange: n }) => [
        _(u(jt), { class: "zkit:rounded-lg zkit:border zkit:p-4 zkit:flex zkit:items-center zkit:justify-between zkit:gap-x-4" }, {
          default: m(() => [
            ee("div", VD, [
              _(u(It), null, {
                default: m(() => [
                  J(V(e.label), 1)
                ]),
                _: 1
              }),
              e.hint ? (v(), x(u(Pt), { key: 0 }, {
                default: m(() => [
                  J(V(e.hint), 1)
                ]),
                _: 1
              })) : Z("", !0),
              _(u(Ft))
            ]),
            _(u(sa), null, {
              default: m(() => [
                _(QM, {
                  disabled: e.disabled,
                  "model-value": r,
                  "onUpdate:modelValue": n
                }, null, 8, ["disabled", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), UD = ["src", "alt"], LD = ["src", "alt"], WD = /* @__PURE__ */ O({
  __name: "Image",
  props: {
    src: {
      type: String,
      required: !0
    },
    alt: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(eu), null, {
      default: m(() => [
        _(u(nu), { "as-child": "" }, {
          default: m(() => [
            ee("img", I({
              src: e.src,
              alt: e.alt
            }, t.$attrs), null, 16, UD)
          ]),
          _: 1
        }),
        _(u(tu), {
          class: "zkit:sm:max-w-auto zkit:w-auto zkit:p-0 zkit:h-auto zkit:bg-transparent zkit:border-0 zkit:shadow-none zkit:focus:outline-none",
          "hide-close": ""
        }, {
          default: m(() => [
            _(ru, { class: "zkit:hidden" }, {
              default: m(() => [
                J(V(e.alt || t.$t("Image preview")), 1)
              ]),
              _: 1
            }),
            _(au, { class: "zkit:hidden" }, {
              default: m(() => [
                J(V(e.alt || t.$t("Image preview")), 1)
              ]),
              _: 1
            }),
            ee("img", {
              src: e.src,
              alt: e.alt,
              class: "zkit:block zkit:h-[100dvw] zkit:max-h-[80dvh] zkit:rounded-lg zkit:object-contain"
            }, null, 8, LD)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), KD = At;
function GD(e) {
  return new Promise((t) => {
    const a = document.createElement("input");
    a.type = "file", a.accept = e.accept || "*/*", a.multiple = e.multiple || !1, a.onchange = (r) => {
      const n = r.target, o = Array.from(n.files);
      t(e.multiple ? Array.from(o) : o[0]);
    }, a.oncancel = () => {
      t(e.multiple ? [] : null);
    }, a.click();
  });
}
function HD(e) {
  return new Promise((t, a) => {
    const r = new FileReader();
    r.onload = (n) => {
      n.target?.result instanceof ArrayBuffer ? t(new Uint8Array(n.target.result)) : a(new Error("Failed to read file as ArrayBuffer"));
    }, r.onerror = () => {
      a(r.error);
    }, r.readAsArrayBuffer(e);
  });
}
async function YD(e) {
  const t = new FormData();
  return t.append("file", e.file), e.directory && t.append("directory", e.directory), KD.post(`/api/drives/${e.driveId}/upload`, {
    body: t,
    query: { directory: e.directory }
  });
}
const ZD = {
  pick: GD,
  upload: YD,
  toUint8Array: HD
};
class jb {
  constructor(t, a) {
    this.operator = t, this.value = a, Object.defineProperty(this, "t", { writable: !0 });
  }
  get notes() {
    return this.t;
  }
  addNote(t) {
    this.t = this.t || [], this.t.push(t);
  }
}
let iu = class extends jb {
};
class Qo extends iu {
  constructor(t, a) {
    if (!Array.isArray(a)) throw new Error(`"${t}" operator expects to receive an array of conditions`);
    super(t, a);
  }
}
const qn = "__itself__";
let Jo = class extends jb {
  constructor(e, t, a) {
    super(e, a), this.field = t;
  }
};
const Ib = new iu("__null__", null), Jl = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
function QD(e, t) {
  return t instanceof Qo && t.operator === e;
}
function Fb(e, t) {
  return t.length === 1 ? t[0] : new Qo(e, (function a(r, n, o) {
    const i = o || [];
    for (let l = 0, s = n.length; l < s; l++) {
      const d = n[l];
      QD(r, d) ? a(r, d.value, i) : i.push(d);
    }
    return i;
  })(e, t));
}
const JD = (e) => e, Tb = () => /* @__PURE__ */ Object.create(null), Nb = Object.defineProperty(Tb(), "__@type@__", { value: "ignore value" });
function XD(e, t, a = !1) {
  if (!e || e && e.constructor !== Object) return !1;
  for (const r in e)
    if (Jl(e, r) && Jl(t, r) && (!a || e[r] !== Nb)) return !0;
  return !1;
}
function e3(e) {
  const t = [];
  for (const a in e) Jl(e, a) && e[a] !== Nb && t.push(a);
  return t;
}
function cl(e, t) {
  t !== Ib && e.push(t);
}
const Vb = (e) => Fb("and", e), Rb = { compound(e, t, a) {
  const r = (Array.isArray(t) ? t : [t]).map((n) => a.parse(n));
  return new Qo(e.name, r);
}, field: (e, t, a) => new Jo(e.name, a.field, t), document: (e, t) => new iu(e.name, t) };
let t3 = class {
  constructor(e, t = Tb()) {
    this.o = void 0, this.s = void 0, this.i = void 0, this.u = void 0, this.h = void 0, this.parse = this.parse.bind(this), this.u = { operatorToConditionName: t.operatorToConditionName || JD, defaultOperatorName: t.defaultOperatorName || "eq", mergeFinalConditions: t.mergeFinalConditions || Vb }, this.o = Object.keys(e).reduce((a, r) => (a[r] = Object.assign({ name: this.u.operatorToConditionName(r) }, e[r]), a), {}), this.s = Object.assign({}, t.fieldContext, { field: "", query: {}, parse: this.parse, hasOperators: (a) => XD(a, this.o, t.useIgnoreValue) }), this.i = Object.assign({}, t.documentContext, { parse: this.parse, query: {} }), this.h = t.useIgnoreValue ? e3 : Object.keys;
  }
  setParse(e) {
    this.parse = e, this.s.parse = e, this.i.parse = e;
  }
  parseField(e, t, a, r) {
    const n = this.o[t];
    if (!n) throw new Error(`Unsupported operator "${t}"`);
    if (n.type !== "field") throw new Error(`Unexpected ${n.type} operator "${t}" at field level`);
    return this.s.field = e, this.s.query = r, this.parseInstruction(n, a, this.s);
  }
  parseInstruction(e, t, a) {
    return typeof e.validate == "function" && e.validate(e, t), (e.parse || Rb[e.type])(e, t, a);
  }
  parseFieldOperators(e, t) {
    const a = [], r = this.h(t);
    for (let n = 0, o = r.length; n < o; n++) {
      const i = r[n];
      if (!this.o[i]) throw new Error(`Field query for "${e}" may contain only operators or a plain object as a value`);
      cl(a, this.parseField(e, i, t[i], t));
    }
    return a;
  }
  parse(e) {
    const t = [], a = this.h(e);
    this.i.query = e;
    for (let r = 0, n = a.length; r < n; r++) {
      const o = a[r], i = e[o], l = this.o[o];
      if (l) {
        if (l.type !== "document" && l.type !== "compound") throw new Error(`Cannot use parsing instruction for operator "${o}" in "document" context as it is supposed to be used in  "${l.type}" context`);
        cl(t, this.parseInstruction(l, i, this.i));
      } else this.s.hasOperators(i) ? t.push(...this.parseFieldOperators(o, i)) : cl(t, this.parseField(o, this.u.defaultOperatorName, i, e));
    }
    return this.u.mergeFinalConditions(t);
  }
};
function fl(e, t) {
  const a = e[t];
  if (typeof a != "function") throw new Error(`Unable to interpret "${t}" condition. Did you forget to register interpreter for it?`);
  return a;
}
function a3(e) {
  return e.operator;
}
function r3(e, t) {
  const a = t, r = a && a.getInterpreterName || a3;
  let n;
  switch (a ? a.numberOfArguments : 0) {
    case 1:
      n = (i) => {
        const l = r(i, a);
        return fl(e, l)(i, o);
      };
      break;
    case 3:
      n = (i, l, s) => {
        const d = r(i, a);
        return fl(e, d)(i, l, s, o);
      };
      break;
    default:
      n = (i, l) => {
        const s = r(i, a);
        return fl(e, s)(i, l, o);
      };
  }
  const o = Object.assign({}, a, { interpret: n });
  return o.interpret;
}
function n3(e, t) {
  return (a, ...r) => {
    const n = e(a, ...r), o = t.bind(null, n);
    return o.ast = n, o;
  };
}
function Ub(e, t) {
  if (!Array.isArray(t)) throw new Error(`"${e.name}" expects value to be an array`);
}
function Lb(e, t) {
  if (Ub(e, t), !t.length) throw new Error(`"${e.name}" expects to have at least one element in array`);
}
const lu = (e) => (t, a) => {
  if (typeof a !== e) throw new Error(`"${t.name}" expects value to be a "${e}"`);
}, Wb = { type: "compound", validate: Lb, parse(e, t, { parse: a }) {
  const r = t.map((n) => a(n));
  return Fb(e.name, r);
} }, o3 = Wb, i3 = { type: "compound", validate: Lb }, l3 = { type: "field", validate(e, t) {
  if (!(t && (t instanceof RegExp || t.constructor === Object))) throw new Error(`"${e.name}" expects to receive either regular expression or object of field operators`);
}, parse(e, t, a) {
  const r = t instanceof RegExp ? new Jo("regex", a.field, t) : a.parse(t, a);
  return new Qo(e.name, [r]);
} }, Kb = { type: "field", validate(e, t) {
  if (!t || t.constructor !== Object) throw new Error(`"${e.name}" expects to receive an object with nested query or field level operators`);
}, parse(e, t, { parse: a, field: r, hasOperators: n }) {
  const o = n(t) ? a(t, { field: qn }) : a(t);
  return new Jo(e.name, r, o);
} }, Gb = { type: "field", validate: lu("number") }, Xo = { type: "field", validate: Ub }, Hb = Xo, Yb = Xo, s3 = { type: "field", validate(e, t) {
  if (!Array.isArray(t) || t.length !== 2) throw new Error(`"${e.name}" expects an array with 2 numeric elements`);
} }, Zb = { type: "field", validate: lu("boolean") }, su = { type: "field", validate: function(e, t) {
  if (!(typeof t == "string" || typeof t == "number" || t instanceof Date)) throw new Error(`"${e.name}" expects value to be comparable (i.e., string, number or date)`);
} }, ei = su, Qb = ei, Jb = ei, uu = { type: "field" }, Xb = uu, ek = { type: "field", validate(e, t) {
  if (!(t instanceof RegExp) && typeof t != "string") throw new Error(`"${e.name}" expects value to be a regular expression or a string that represents regular expression`);
}, parse(e, t, a) {
  const r = typeof t == "string" ? new RegExp(t, a.query.$options || "") : t;
  return new Jo(e.name, a.field, r);
} }, tk = { type: "field", parse: () => Ib }, u3 = { type: "document", validate: lu("function") };
var d3 = Object.freeze({ __proto__: null, $and: Wb, $or: o3, $nor: i3, $not: l3, $elemMatch: Kb, $size: Gb, $in: Xo, $nin: Hb, $all: Yb, $mod: s3, $exists: Zb, $gte: su, $gt: ei, $lt: Qb, $lte: Jb, $eq: uu, $ne: Xb, $regex: ek, $options: tk, $where: u3 });
let c3 = class extends t3 {
  constructor(e) {
    super(e, { defaultOperatorName: "$eq", operatorToConditionName: (t) => t.slice(1) });
  }
  parse(e, t) {
    return t && t.field ? Vb(this.parseFieldOperators(t.field, e)) : super.parse(e);
  }
};
const Xl = d3;
function du(e, t, a) {
  for (let r = 0, n = e.length; r < n; r++) if (a(e[r], t) === 0) return !0;
  return !1;
}
function cu(e, t) {
  return Array.isArray(e) && Number.isNaN(Number(t));
}
function Sf(e, t, a) {
  if (!cu(e, t)) return a(e, t);
  let r = [];
  for (let n = 0; n < e.length; n++) {
    const o = a(e[n], t);
    o !== void 0 && (r = r.concat(o));
  }
  return r;
}
function Za(e) {
  return (t, a, r) => {
    const n = r.get(a, t.field);
    return Array.isArray(n) ? n.some((o) => e(t, o, r)) : e(t, n, r);
  };
}
const f3 = Object.hasOwn || Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty), p3 = (e, t) => e[t];
function ak(e, t, a) {
  const r = t.lastIndexOf(".");
  return r === -1 ? [e, t] : [a(e, t.slice(0, r)), t.slice(r + 1)];
}
function y3(e, t, a = p3) {
  if (t === qn) return e;
  if (!e) throw new Error(`Unable to get field "${t}" out of ${String(e)}.`);
  return (function(r, n, o) {
    if (n.indexOf(".") === -1) return Sf(r, n, o);
    const i = n.split(".");
    let l = r;
    for (let s = 0, d = i.length; s < d; s++) if (l = Sf(l, i[s], o), !l || typeof l != "object") return s < d - 1 ? void 0 : l;
    return l;
  })(e, t, a);
}
function rk(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function nk(e, t = {}) {
  return r3(e, Object.assign({ get: y3, compare: rk }, t));
}
const ok = (e, t, { interpret: a }) => e.value.some((r) => a(r, t)), m3 = (e, t, a) => !ok(e, t, a), ik = (e, t, { interpret: a }) => e.value.every((r) => a(r, t)), h3 = (e, t, { interpret: a }) => !a(e.value[0], t), fu = (e, t, { compare: a, get: r }) => {
  const n = r(t, e.field);
  return Array.isArray(n) && !Array.isArray(e.value) ? du(n, e.value, a) : a(n, e.value) === 0;
}, lk = (e, t, a) => !fu(e, t, a), sk = Za((e, t, a) => {
  const r = a.compare(t, e.value);
  return r === 0 || r === -1;
}), uk = Za((e, t, a) => a.compare(t, e.value) === -1), dk = Za((e, t, a) => a.compare(t, e.value) === 1), ck = Za((e, t, a) => {
  const r = a.compare(t, e.value);
  return r === 0 || r === 1;
}), fk = (e, t, { get: a }) => {
  if (e.field === qn) return t !== void 0;
  const [r, n] = ak(t, e.field, a), o = (i) => i == null ? !!i === e.value : f3(i, n) === e.value;
  return cu(r, n) ? r.some(o) : o(r);
}, v3 = Za((e, t) => typeof t == "number" && t % e.value[0] === e.value[1]), pk = (e, t, { get: a }) => {
  const [r, n] = ak(t, e.field, a), o = (i) => {
    const l = a(i, n);
    return Array.isArray(l) && l.length === e.value;
  };
  return e.field !== qn && cu(r, n) ? r.some(o) : o(r);
}, yk = Za((e, t) => typeof t == "string" && e.value.test(t)), ti = Za((e, t, { compare: a }) => du(e.value, t, a)), mk = (e, t, a) => !ti(e, t, a), hk = (e, t, { compare: a, get: r }) => {
  const n = r(t, e.field);
  return Array.isArray(n) && e.value.every((o) => du(n, o, a));
}, vk = (e, t, { interpret: a, get: r }) => {
  const n = r(t, e.field);
  return Array.isArray(n) && n.some((o) => a(e.value, o));
}, g3 = (e, t) => e.value.call(t);
var b3 = Object.freeze({ __proto__: null, or: ok, nor: m3, and: ik, not: h3, eq: fu, ne: lk, lte: sk, lt: uk, gt: dk, gte: ck, exists: fk, mod: v3, size: pk, regex: yk, within: ti, nin: mk, all: hk, elemMatch: vk, where: g3 });
const pu = Object.assign({}, b3, { in: ti });
nk(pu);
function qf(e) {
  return e === null || typeof e != "object" ? e : e instanceof Date ? e.getTime() : e && typeof e.toJSON == "function" ? e.toJSON() : e;
}
const k3 = (e, t) => rk(qf(e), qf(t));
function yu(e, t, a) {
  const r = new c3(e), n = nk(t, Object.assign({ compare: k3 }, a));
  if (a && a.forPrimitives) {
    const o = { field: qn }, i = r.parse;
    r.setParse((l) => i(l, o));
  }
  return n3(r.parse, n);
}
yu(Xl, pu);
yu(["$and", "$or"].reduce((e, t) => (e[t] = Object.assign({}, e[t], { type: "field" }), e), Object.assign({}, Xl, { $nor: Object.assign({}, Xl.$nor, { type: "field", parse: Rb.compound }) })), pu, { forPrimitives: !0 });
const gk = Object.hasOwn || ((e, t) => Object.prototype.hasOwnProperty.call(e, t));
function es(e) {
  return Array.isArray(e) ? e : [e];
}
const sr = "__caslSubjectType__";
function pl(e, t) {
  if (t) {
    if (!gk(t, sr)) Object.defineProperty(t, sr, { value: e });
    else if (e !== t[sr]) throw new Error(`Trying to cast object to subject type ${e} but previously it was casted to ${t[sr]}`);
  }
  return t;
}
const Wn = (e) => {
  const t = typeof e;
  return t === "string" || t === "function";
}, w3 = (e) => e.modelName || e.name;
function bk(e) {
  return gk(e, sr) ? e[sr] : w3(e.constructor);
}
const Of = { function: (e) => e.constructor, string: bk };
function Af(e, t, a) {
  for (let r = a; r < t.length; r++) e.push(t[r]);
}
function Cf(e, t) {
  if (!e || !e.length) return t || [];
  if (!t || !t.length) return e || [];
  let a = 0, r = 0;
  const n = [];
  for (; a < e.length && r < t.length; ) e[a].priority < t[r].priority ? (n.push(e[a]), a++) : e[a].priority > t[r].priority ? (n.push(t[r]), r++) : (n.push(e[a]), a++, r++);
  return Af(n, e, a), Af(n, t, r), n;
}
function Nn(e, t, a) {
  let r = e.get(t);
  return r || (r = a(), e.set(t, r)), r;
}
const x3 = (e) => e;
function z3(e, t) {
  let a;
  for (let r = 0; r < e.length; r++) {
    const n = t(e[r]);
    a && n && a.push(e[r]), n || (a ??= e.slice(0, r));
  }
  return a || e;
}
function _3(e, t) {
  if (Array.isArray(e.fields) && !e.fields.length) throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");
  if (e.fields && !t.fieldMatcher) throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');
  if (e.conditions && !t.conditionsMatcher) throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions');
}
class S3 {
  constructor(t, a, r = 0) {
    _3(t, a), this.action = a.resolveAction(t.action), this.subject = t.subject, this.inverted = !!t.inverted, this.conditions = t.conditions, this.reason = t.reason, this.origin = t, this.fields = t.fields ? es(t.fields) : void 0, this.priority = r, this.t = a;
  }
  i() {
    return this.conditions && !this.o && (this.o = this.t.conditionsMatcher(this.conditions)), this.o;
  }
  get ast() {
    const t = this.i();
    return t ? t.ast : void 0;
  }
  matchesConditions(t) {
    return this.conditions ? !t || Wn(t) ? !this.inverted : this.i()(t) : !0;
  }
  matchesField(t) {
    return this.fields ? t ? (this.u || (this.u = this.t.fieldMatcher(this.fields)), this.u(t)) : !this.inverted : !0;
  }
}
function q3(e, t) {
  const a = { value: e, prev: t, next: null };
  return t && (t.next = a), a;
}
function O3(e) {
  e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
}
const Ef = () => ({ rules: [], merged: !1 }), $f = () => /* @__PURE__ */ new Map();
class A3 {
  constructor(t = [], a = {}) {
    this.h = !1, this.l = /* @__PURE__ */ new Map(), this.p = { conditionsMatcher: a.conditionsMatcher, fieldMatcher: a.fieldMatcher, resolveAction: a.resolveAction || x3 }, this.$ = a.anyAction || "manage", this.A = a.anySubjectType || "all", this.m = t, this.M = !!a.detectSubjectType, this.j = a.detectSubjectType || bk, this.v(t);
  }
  get rules() {
    return this.m;
  }
  detectSubjectType(t) {
    return Wn(t) ? t : t ? this.j(t) : this.A;
  }
  update(t) {
    const a = { rules: t, ability: this, target: this };
    return this._("update", a), this.m = t, this.v(t), this._("updated", a), this;
  }
  v(t) {
    const a = /* @__PURE__ */ new Map();
    let r;
    for (let n = t.length - 1; n >= 0; n--) {
      const o = t.length - n - 1, i = new S3(t[n], this.p, o), l = es(i.action), s = es(i.subject || this.A);
      !this.h && i.fields && (this.h = !0);
      for (let d = 0; d < s.length; d++) {
        const c = Nn(a, s[d], $f);
        r === void 0 && (r = typeof s[d]), typeof s[d] !== r && r !== "mixed" && (r = "mixed");
        for (let f = 0; f < l.length; f++) Nn(c, l[f], Ef).rules.push(i);
      }
    }
    if (this.l = a, r !== "mixed" && !this.M) {
      const n = Of[r] || Of.string;
      this.j = n;
    }
  }
  possibleRulesFor(t, a = this.A) {
    if (!Wn(a)) throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');
    const r = Nn(this.l, a, $f), n = Nn(r, t, Ef);
    if (n.merged) return n.rules;
    const o = t !== this.$ && r.has(this.$) ? r.get(this.$).rules : void 0;
    let i = Cf(n.rules, o);
    return a !== this.A && (i = Cf(i, this.possibleRulesFor(t, this.A))), n.rules = i, n.merged = !0, i;
  }
  rulesFor(t, a, r) {
    const n = this.possibleRulesFor(t, a);
    if (r && typeof r != "string") throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");
    return this.h ? z3(n, (o) => o.matchesField(r)) : n;
  }
  actionsFor(t) {
    if (!Wn(t)) throw new Error('"actionsFor" accepts only subject types (i.e., string or class) as a parameter');
    const a = /* @__PURE__ */ new Set(), r = this.l.get(t);
    r && Array.from(r.keys()).forEach((o) => a.add(o));
    const n = t !== this.A ? this.l.get(this.A) : void 0;
    return n && Array.from(n.keys()).forEach((o) => a.add(o)), Array.from(a);
  }
  on(t, a) {
    this.F = this.F || /* @__PURE__ */ new Map();
    const r = this.F, n = r.get(t) || null, o = q3(a, n);
    return r.set(t, o), () => {
      const i = r.get(t);
      !o.next && !o.prev && i === o ? r.delete(t) : o === i && r.set(t, o.prev), O3(o);
    };
  }
  _(t, a) {
    if (!this.F) return;
    let r = this.F.get(t) || null;
    const n = [];
    for (; r !== null; )
      n.push(r.value), r = r.prev;
    for (let o = 0; o < n.length; o++) n[o](a);
  }
}
class C3 extends A3 {
  can(t, a, r) {
    const n = this.relevantRuleFor(t, a, r);
    return !!n && !n.inverted;
  }
  relevantRuleFor(t, a, r) {
    const n = this.detectSubjectType(a), o = this.rulesFor(t, n, r);
    for (let i = 0, l = o.length; i < l; i++) if (o[i].matchesConditions(a)) return o[i];
    return null;
  }
  cannot(t, a, r) {
    return !this.can(t, a, r);
  }
}
const E3 = { $eq: uu, $ne: Xb, $lt: Qb, $lte: Jb, $gt: ei, $gte: su, $in: Xo, $nin: Hb, $all: Yb, $size: Gb, $regex: ek, $options: tk, $elemMatch: Kb, $exists: Zb }, $3 = { eq: fu, ne: lk, lt: uk, lte: sk, gt: dk, gte: ck, in: ti, nin: mk, all: hk, size: pk, regex: yk, elemMatch: vk, exists: fk, and: ik }, B3 = yu(E3, $3), M3 = /[-/\\^$+?.()|[\]{}]/g, D3 = /\.?\*+\.?/g, P3 = /\*+/, j3 = /\./g;
function I3(e, t, a) {
  const r = a[0] === "*" || e[0] === "." && e[e.length - 1] === "." ? "+" : "*", n = e.indexOf("**") === -1 ? "[^.]" : ".", o = e.replace(j3, "\\$&").replace(P3, n + r);
  return t + e.length === a.length ? `(?:${o})?` : o;
}
function F3(e, t, a) {
  return e === "." && (a[t - 1] === "*" || a[t + 1] === "*") ? e : `\\${e}`;
}
function T3(e) {
  const t = e.map((r) => r.replace(M3, F3).replace(D3, I3)), a = t.length > 1 ? `(?:${t.join("|")})` : t[0];
  return new RegExp(`^${a}$`);
}
const N3 = (e) => {
  let t;
  return (a) => (typeof t > "u" && (t = e.every((r) => r.indexOf("*") === -1) ? null : T3(e)), t === null ? e.indexOf(a) !== -1 : t.test(a));
};
function V3(e = [], t = {}) {
  return new C3(e, Object.assign({ conditionsMatcher: B3, fieldMatcher: N3 }, t));
}
function R3(e) {
  return e.prototype !== void 0 && typeof e.prototype.possibleRulesFor == "function";
}
class U3 {
  constructor(t) {
    this.O = t;
  }
  because(t) {
    return this.O.reason = t, this;
  }
}
class L3 {
  constructor(t) {
    this.rules = [], this.C = t, this.can = (a, r, n, o) => this.R(a, r, n, o, !1), this.cannot = (a, r, n, o) => this.R(a, r, n, o, !0), this.build = (a) => R3(this.C) ? new this.C(this.rules, a) : this.C(this.rules, a);
  }
  R(t, a, r, n, o) {
    const i = { action: t };
    return o && (i.inverted = o), a && (i.subject = a, Array.isArray(r) || typeof r == "string" ? i.fields = r : typeof r < "u" && (i.conditions = r), typeof n < "u" && (i.conditions = n)), this.rules.push(i), new U3(i);
  }
}
function W3(e, t) {
  const a = new L3(V3), r = e(a.can, a.cannot);
  return r && typeof r.then == "function" ? r.then(() => a.build(t)) : a.build(t);
}
function mu(e) {
  return class extends e {
    static from(t) {
      const a = typeof this == "function" ? this : e, r = new a();
      let n = { ...t };
      return typeof a?.parse == "function" && (n = a.parse(t)), typeof this?.parse == "function" && (n = this.parse(t)), Object.assign(r, n), r;
    }
    merge(t) {
      return Object.assign(this, t), this;
    }
  };
}
function hu(...e) {
  return e.reduce((t, a) => a(t), class {
  });
}
class K3 extends hu(mu) {
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
    const [t, a] = Gt.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return t ? {} : a;
  }
}
class G3 {
  static __container_entry_key = "AclEntity";
  ability;
  permissions;
  debug = !1;
  logger;
  constructor(t = {}) {
    const a = (t.permissions || []).map((r) => K3.from(r));
    this.permissions = a, this.debug = t.debug || !1, this.logger = t.logger || new gn().child({ label: "acl" }), this.ability = W3((r) => {
      a.forEach((n) => {
        r(n.action, n.subject, n.parsedConditions);
      });
    }), this.debug && this.logger.debug("initialized in debug mode", {
      permissions: this.permissions
    });
  }
  can(t, a, r) {
    if (!r)
      return this.ability.can(t, a);
    const n = pl(a, r);
    return this.ability.can(t, n);
  }
  cannot(t, a, r) {
    if (!r)
      return this.ability.cannot(t, a);
    const n = pl(a, r);
    return this.ability.cannot(t, n);
  }
  subject(t, a) {
    return pl(t, a);
  }
}
const kk = dt.proxy(G3), wk = /* @__PURE__ */ O({
  __name: "FileUploader",
  props: /* @__PURE__ */ Ve({
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    public: {
      type: Boolean,
      default: !1
    },
    purpose: {
      type: String,
      required: !0
    },
    folder: {
      type: String,
      default: null
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
      // 10MB default
    },
    mimetypes: {
      type: String,
      default: "*/*"
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  }, {
    fileId: { type: Number },
    fileIdModifiers: {},
    fileUrl: { type: String },
    fileUrlModifiers: {},
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["uploaded"], ["update:fileId", "update:fileUrl", "update:loading"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, o = pe(e, "fileId"), i = pe(e, "fileUrl"), l = pe(e, "loading"), s = D(() => {
      const h = {
        purpose: r.purpose,
        folder: r.folder,
        max_size: r.maxSize,
        mime_types: r.mimetypes
      };
      return kk.can("create", "FileUploadSession", h);
    });
    async function d(h) {
      return await At.post("/api/file-upload-sessions", {
        method: "POST",
        data: {
          public: r.public,
          folder: r.folder,
          client_name: h.name,
          purpose: r.purpose,
          mime_types: r.mimetypes,
          max_size: r.maxSize
        }
      });
    }
    async function c(h, k) {
      return await At.put(k, {
        body: h
      });
    }
    async function f(h) {
      return await At.post(h);
    }
    async function y(h) {
      const k = await d(h);
      await c(h, k.upload_url);
      const w = await f(k.create_file_url);
      return o.value = w.id, i.value = w.url, w;
    }
    async function p() {
      const h = await ZD.pick({
        multiple: r.multiple,
        accept: r.mimetypes
      });
      if (h) {
        if (r.multiple && Array.isArray(h)) {
          const k = [];
          for (const w of h) {
            const b = await y(w);
            k.push(b);
          }
          return k;
        }
        if (!Array.isArray(h))
          return await y(h);
      }
    }
    async function g() {
      l.value = !0;
      const [h, k] = await Gt(() => p());
      if (h || !k) {
        l.value = !1, console.error(h);
        return;
      }
      if (await new Promise((w) => setTimeout(w, 500)), Array.isArray(k)) {
        n("uploaded", k), l.value = !1;
        return;
      }
      n("uploaded", k), l.value = !1;
    }
    return t({
      handle: g,
      executeFromFile: y
    }), (h, k) => s.value ? A(h.$slots, "default", {
      handle: g,
      loading: l.value
    }, () => [
      _(rt, {
        type: "button",
        variant: "outline",
        loading: l.value,
        disabled: e.disabled,
        onClick: g
      }, {
        default: m(() => [
          _(Le, {
            name: "Upload",
            class: "zkit:size-4 zkit:mr-2"
          }),
          J(" " + V(h.$t("Upload")), 1)
        ]),
        _: 1
      }, 8, ["loading", "disabled"])
    ], void 0, 0) : (v(), x(rt, {
      key: 1,
      type: "button",
      variant: "outline",
      disabled: "",
      class: "zkit:text-xs zkit:text-red-600 zkit:mt-1 zkit:block"
    }, {
      default: m(() => [
        J(V(h.$t("Missing permissions for file upload")), 1)
      ]),
      _: 1
    }));
  }
}), H3 = { class: "zkit:flex zkit:flex-col zkit:items-baseline zkit:space-y-4" }, Y3 = {
  key: 0,
  class: "zkit:relative zkit:inline-block zkit:border zkit:rounded-lg zkit:overflow-hidden"
}, Z3 = { class: "zkit:flex zkit:flex-wrap zkit:flex-col zkit:gap-2 zkit:sm:flex-row! zkit:sm:gap-2 zkit:w-full" }, Q3 = /* @__PURE__ */ O({
  __name: "FormImageUploader",
  props: /* @__PURE__ */ Ve({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !1
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    purpose: {
      type: String,
      required: !0
    },
    folder: {
      type: String,
      default: null
    },
    public: {
      type: Boolean,
      default: !1
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
      // 10MB default
    }
  }, {
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {},
    fileUrl: { type: String },
    fileUrlModifiers: {}
  }),
  emits: ["update:loading", "update:fileUrl"],
  setup(e) {
    const t = pe(e, "loading"), a = pe(e, "fileUrl"), r = F(null);
    function n() {
      a.value = null;
    }
    async function o() {
      if (!r.value)
        return;
      const i = await navigator.clipboard.read();
      for (const l of i) {
        const s = l.types.find((y) => y.startsWith("image/"));
        if (!s)
          continue;
        const d = await l.getType(s), c = new File([d], `clipboard-image-${Date.now()}.png`, { type: s });
        t.value = !0;
        const [f] = await Gt(() => r.value.executeFromFile(c));
        if (f) {
          t.value = !1;
          return;
        }
        setTimeout(() => {
          t.value = !1;
        }, 500);
        break;
      }
    }
    return (i, l) => (v(), x(u(Tt), { name: e.name }, {
      default: m(({ value: s, setValue: d }) => [
        _(u(jt), null, {
          default: m(() => [
            _(u(It), { class: "zkit:mb-2" }, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(u(sa), null, {
              default: m(() => [
                ee("div", H3, [
                  A(i.$slots, "preview", {
                    value: s,
                    url: a.value,
                    setValue: d
                  }, () => [
                    a.value ? (v(), W("div", Y3, [
                      _(WD, {
                        src: a.value,
                        alt: i.$t("Uploaded image"),
                        class: "zkit:max-w-xs zkit:max-h-48 zkit:object-cover zkit:w-full"
                      }, null, 8, ["src", "alt"])
                    ])) : Z("", !0)
                  ]),
                  _(wk, {
                    ref_key: "fileUploaderRef",
                    ref: r,
                    "file-url": a.value,
                    "onUpdate:fileUrl": l[0] || (l[0] = (c) => a.value = c),
                    loading: t.value,
                    "onUpdate:loading": l[1] || (l[1] = (c) => t.value = c),
                    "file-id": s,
                    purpose: e.purpose,
                    folder: e.folder,
                    "max-size": e.maxSize,
                    disabled: e.disabled,
                    public: e.public,
                    mimetypes: "image/*",
                    "onUpdate:fileId": d
                  }, {
                    default: m(({ handle: c, loading: f }) => [
                      A(i.$slots, "default", {
                        handle: c,
                        loading: f,
                        value: s,
                        setValue: d
                      }, () => [
                        ee("div", Z3, [
                          s ? (v(), x(rt, {
                            key: 0,
                            type: "button",
                            variant: "outline",
                            disabled: e.disabled,
                            tooltip: i.$t("Remove image"),
                            onClick: () => {
                              n(), d(null);
                            }
                          }, {
                            default: m(() => [
                              _(Le, {
                                name: "trash",
                                class: "zkit:size-4"
                              })
                            ]),
                            _: 1
                          }, 8, ["disabled", "tooltip", "onClick"])) : Z("", !0),
                          _(rt, {
                            type: "button",
                            variant: "outline",
                            loading: f,
                            disabled: e.disabled,
                            tooltip: i.$t("Upload image"),
                            onClick: c
                          }, {
                            default: m(() => [
                              _(Le, {
                                name: "Upload",
                                class: "zkit:size-4"
                              })
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled", "tooltip", "onClick"]),
                          _(rt, {
                            type: "button",
                            variant: "outline",
                            loading: t.value,
                            disabled: e.disabled,
                            tooltip: i.$t("Paste from clipboard"),
                            onClick: o
                          }, {
                            default: m(() => [
                              _(Le, {
                                name: "Clipboard",
                                class: "zkit:size-4"
                              })
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled", "tooltip"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["file-url", "loading", "file-id", "purpose", "folder", "max-size", "disabled", "public", "onUpdate:fileId"])
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(u(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), J3 = /* @__PURE__ */ O({
  __name: "FormColorPicker",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !0
    },
    presets: {
      type: Array,
      default: () => Db
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ componentField: r }) => [
        _(yD, {
          "model-value": r.modelValue,
          placeholder: e.placeholder,
          readonly: e.readonly,
          presets: e.presets,
          "onUpdate:modelValue": r["onUpdate:modelValue"]
        }, {
          activator: m(({ color: n }) => [
            _(u(jt), null, {
              default: m(() => [
                _(u(It), null, {
                  default: m(() => [
                    J(V(e.label), 1)
                  ]),
                  _: 1
                }),
                _(u(sa), null, {
                  default: m(() => [
                    _(Mb, {
                      "model-value": n,
                      placeholder: e.placeholder,
                      readonly: e.readonly,
                      class: "zkit:cursor-pointer",
                      "input-class": "text-left rounded-l-none"
                    }, {
                      prepend: m(() => [
                        ee("div", {
                          class: "zkit:size-10 zkit:border zkit:rounded-l zkit:shrink-0",
                          style: ut({ backgroundColor: n })
                        }, null, 4)
                      ]),
                      _: 2
                    }, 1032, ["model-value", "placeholder", "readonly"])
                  ]),
                  _: 2
                }, 1024),
                e.hint ? (v(), x(u(Pt), { key: 0 }, {
                  default: m(() => [
                    J(V(e.hint), 1)
                  ]),
                  _: 1
                })) : Z("", !0),
                _(u(Ft))
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["model-value", "placeholder", "readonly", "presets", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), X3 = { class: "zkit:space-y-2" }, eP = { class: "zkit:flex zkit:gap-2" }, tP = { class: "zkit:space-y-1" }, aP = { class: "zkit:text-sm zkit:truncate" }, rP = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "StringListInput",
  props: /* @__PURE__ */ Ve({
    name: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    }
  }, {
    modelValue: {
      type: Array,
      default: () => []
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = pe(e, "modelValue"), a = F("");
    function r() {
      const o = a.value.trim();
      o && (t.value = [...t.value, o], a.value = "");
    }
    function n(o) {
      t.value = t.value.filter((i, l) => l !== o);
    }
    return (o, i) => (v(), W("div", X3, [
      ee("div", eP, [
        _(u(xa), {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (l) => a.value = l),
          placeholder: e.placeholder,
          class: "zkit:flex-1 zkit:h-10",
          disabled: e.disabled,
          onKeydown: mt(Pe(r, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "placeholder", "disabled", "onKeydown"]),
        _(u(ot), {
          disabled: e.disabled,
          type: "button",
          class: "zkit:h-10",
          onClick: r
        }, {
          default: m(() => [
            _(Le, {
              name: "plus",
              class: "zkit:w-4 zkit:h-4"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      ee("div", tP, [
        (v(!0), W(xe, null, De(t.value, (l, s) => (v(), W("div", {
          key: s,
          class: "zkit:flex zkit:items-center zkit:justify-between zkit:rounded zkit:border zkit:p-2 zkit:bg-muted"
        }, [
          ee("div", aP, V(l), 1),
          _(u(ot), {
            variant: "ghost",
            size: "icon",
            disabled: e.disabled,
            onClick: (d) => n(s)
          }, {
            default: m(() => [
              _(u(xb), { class: "zkit:w-4 zkit:h-4" })
            ]),
            _: 1
          }, 8, ["disabled", "onClick"])
        ]))), 128))
      ])
    ]));
  }
}), nP = /* @__PURE__ */ O({
  __name: "FormStringListInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ value: r, setValue: n }) => [
        _(u(jt), null, {
          default: m(() => [
            _(u(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(u(sa), null, {
              default: m(() => [
                _(rP, {
                  disabled: e.disabled,
                  name: e.name,
                  placeholder: e.placeholder,
                  "model-value": r,
                  "onUpdate:modelValue": n
                }, null, 8, ["disabled", "name", "placeholder", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(u(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), oP = {
  key: 0,
  class: "zkit:text-sm zkit:font-medium zkit:leading-none zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-70 zkit:mb-2 zkit:block"
}, iP = {
  key: 1,
  class: "zkit:text-sm zkit:text-muted-foreground zkit:mt-2"
}, lP = /* @__PURE__ */ O({
  __name: "JsonInput",
  props: /* @__PURE__ */ Ve({
    mode: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: null
    },
    textareaClass: {
      type: String,
      default: null
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["blur"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = pe(e, "modelValue"), r = e, n = t, o = D({
      get() {
        return r.mode === "object" && typeof a.value == "object" ? JSON.stringify(a.value, null, 2) : a.value || "";
      },
      set(s) {
        if (r.mode === "object") {
          try {
            const d = JSON.parse(s);
            a.value = d;
          } catch {
            a.value = s;
          }
          return;
        }
        a.value = s;
      }
    });
    function i() {
      if (r.mode === "object" && typeof a.value == "object") {
        o.value = JSON.stringify(a.value, null, 2);
        return;
      }
      o.value = JSON.stringify(JSON.parse(o.value), null, 2);
    }
    function l() {
      i(), n("blur");
    }
    return Ae(i), (s, d) => (v(), W("div", null, [
      e.label ? (v(), W("label", oP, V(e.label), 1)) : Z("", !0),
      _(Bb, {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c),
        class: ye(["zkit:min-h-20 zkit:font-mono", e.textareaClass]),
        rows: e.rows || (e.mode === "object" ? 6 : 3),
        onBlur: l
      }, null, 8, ["modelValue", "rows", "class"]),
      e.hint ? (v(), W("p", iP, V(e.hint), 1)) : Z("", !0)
    ]));
  }
}), sP = /* @__PURE__ */ O({
  __name: "FormJsonInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: null
    },
    mode: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(Tt), { name: e.name }, {
      default: m(({ value: r, setValue: n }) => [
        _(u(jt), null, {
          default: m(() => [
            _(u(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(u(sa), null, {
              default: m(() => [
                _(lP, I({
                  mode: e.mode,
                  "model-value": r
                }, t.$attrs, { "onUpdate:modelValue": n }), null, 16, ["mode", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(u(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), uP = {
  key: 0,
  class: "zkit:p-3 zkit:border-t"
}, dP = { class: "zkit:flex zkit:items-center zkit:gap-2" }, cP = { class: "zkit:flex-1" }, fP = { class: "zkit:text-sm zkit:font-medium" }, pP = { class: "zkit:flex-1" }, yP = { class: "zkit:text-sm zkit:font-medium" }, mP = /* @__PURE__ */ O({
  __name: "DatePicker",
  props: /* @__PURE__ */ Ve({
    placeholder: {
      type: String,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    class: {
      type: String,
      default: void 0
    },
    mode: {
      type: String,
      default: "date"
    },
    clearable: {
      type: Boolean,
      required: !1
    }
  }, {
    modelValue: {
      type: [Date, String],
      default: null
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = pe(e, "modelValue"), r = F(!1), n = F("00"), o = F("00"), i = D(() => a.value ? t.mode === "datetime" ? ao(a.value, "yyyy-MM-dd HH:mm") : ao(a.value, "yyyy-MM-dd") : t.placeholder || $t("Select date"));
    function l() {
      if (!a.value)
        return;
      const c = new Date(a.value);
      c.setHours(parseInt(n.value) || 0), c.setMinutes(parseInt(o.value) || 0), c.setSeconds(0), c.setMilliseconds(0), a.value = c;
    }
    function s(c) {
      c.stopPropagation(), a.value = null, n.value = "00", o.value = "00";
    }
    const d = D({
      get() {
        if (!a.value)
          return;
        const c = new Date(a.value);
        return PS(c, $r());
      },
      set(c) {
        if (!c) {
          a.value = null, r.value = !1;
          return;
        }
        const f = new Date(c.year, c.month - 1, c.day);
        t.mode === "datetime" && (f.setHours(parseInt(n.value) || 0), f.setMinutes(parseInt(o.value) || 0), f.setSeconds(0), f.setMilliseconds(0), n.value = f.getHours().toString().padStart(2, "0"), o.value = f.getMinutes().toString().padStart(2, "0")), a.value = f, t.mode === "date" && (r.value = !1);
      }
    });
    return (c, f) => (v(), x(u(qb), {
      open: r.value,
      "onUpdate:open": f[4] || (f[4] = (y) => r.value = y)
    }, {
      default: m(() => [
        _(u(Ab), { "as-child": "" }, {
          default: m(() => [
            _(u(ot), {
              variant: "outline",
              class: ye(u(Q)(
                "zkit:w-full zkit:justify-start zkit:text-left zkit:font-normal zkit:!h-10",
                !a.value && "zkit:text-muted-foreground",
                t.class
              )),
              disabled: e.disabled
            }, {
              default: m(() => [
                _(Le, {
                  name: "calendar",
                  class: "zkit:mr-2 zkit:h-4 zkit:w-4"
                }),
                J(" " + V(i.value) + " ", 1),
                e.clearable && a.value ? (v(), x(Le, {
                  key: 0,
                  name: "x",
                  class: "zkit:ml-auto zkit:h-4 zkit:w-4 zkit:opacity-50 zkit:hover:opacity-100",
                  onClick: s
                })) : Z("", !0)
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ]),
          _: 1
        }),
        _(u(Ob), { class: "zkit:min-w-[320px] zkit:w-auto zkit:p-0" }, {
          default: m(() => [
            _(u(mM), {
              modelValue: d.value,
              "onUpdate:modelValue": f[0] || (f[0] = (y) => d.value = y)
            }, null, 8, ["modelValue"]),
            e.mode === "datetime" ? (v(), W("div", uP, [
              ee("div", dP, [
                ee("div", cP, [
                  ee("label", fP, V(c.$t("Hours")), 1),
                  _(u(xa), {
                    modelValue: n.value,
                    "onUpdate:modelValue": f[1] || (f[1] = (y) => n.value = y),
                    type: "number",
                    min: "0",
                    max: "23",
                    class: "zkit:mt-1",
                    onInput: l
                  }, null, 8, ["modelValue"])
                ]),
                ee("div", pP, [
                  ee("label", yP, V(c.$t("Minutes")), 1),
                  _(u(xa), {
                    modelValue: o.value,
                    "onUpdate:modelValue": f[2] || (f[2] = (y) => o.value = y),
                    type: "number",
                    min: "0",
                    max: "59",
                    class: "zkit:mt-1",
                    onInput: l
                  }, null, 8, ["modelValue"])
                ])
              ]),
              _(u(ot), {
                variant: "default",
                size: "sm",
                class: "zkit:w-full zkit:mt-3",
                onClick: f[3] || (f[3] = (y) => r.value = !1)
              }, {
                default: m(() => [
                  J(V(c.$t("Done")), 1)
                ]),
                _: 1
              })
            ])) : Z("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), hP = /* @__PURE__ */ O({
  __name: "FormDatePicker",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    readonly: {
      type: Boolean,
      default: null
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(Tt), {
      name: e.name,
      disabled: e.disabled,
      readonly: e.readonly
    }, {
      default: m(({ componentField: r }) => [
        _(u(jt), null, {
          default: m(() => [
            _(u(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(u(sa), null, {
              default: m(() => [
                _(mP, I(t.$attrs, {
                  "model-value": r.modelValue,
                  disabled: e.disabled,
                  onBlur: r.onBlur,
                  "onUpdate:modelValue": r["onUpdate:modelValue"]
                }), null, 16, ["model-value", "disabled", "onBlur", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(u(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name", "disabled", "readonly"]));
  }
}), vP = { class: "zkit:flex zkit:gap-2" }, gP = /* @__PURE__ */ O({
  __name: "FormTextField",
  props: {
    name: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "text"
    },
    step: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    presets: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (t, a) => (v(), x(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ componentField: r }) => [
        _(u(jt), null, {
          default: m(() => [
            _(u(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(u(sa), null, {
              default: m(() => [
                ee("div", vP, [
                  _(u(xa), I({
                    type: e.type,
                    placeholder: e.placeholder,
                    disabled: e.disabled,
                    autocomplete: e.autocomplete,
                    readonly: e.readonly,
                    autofocus: e.autofocus,
                    step: e.step,
                    class: "zkit:h-10 zkit:flex-1"
                  }, r), null, 16, ["type", "placeholder", "disabled", "autocomplete", "readonly", "autofocus", "step"]),
                  e.presets.length > 0 ? (v(), x(u(Gl), { key: 0 }, {
                    default: m(() => [
                      _(u(Zl), { "as-child": "" }, {
                        default: m(() => [
                          _(u(ot), {
                            variant: "outline",
                            size: "sm",
                            type: "button",
                            class: "zkit:h-10"
                          }, {
                            default: m(() => [
                              _(Le, {
                                name: "chevron-down",
                                class: "zkit:w-4 zkit:h-4"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      _(u(Hl), { align: "end" }, {
                        default: m(() => [
                          (v(!0), W(xe, null, De(e.presets, (n) => (v(), x(u(Yl), {
                            key: n.value,
                            onClick: (o) => r.onChange(n.value)
                          }, {
                            default: m(() => [
                              J(V(n.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]))), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : Z("", !0),
                  A(t.$slots, "append")
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(u(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), bP = { class: "zkit:flex zkit:flex-col zkit:gap-3" }, kP = { class: "zkit:flex zkit:items-center zkit:gap-2" }, wP = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, xP = /* @__PURE__ */ O({
  __name: "FormFileUploader",
  props: /* @__PURE__ */ Ve({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    purpose: {
      type: String,
      required: !0
    },
    folder: {
      type: String,
      default: null
    },
    public: {
      type: Boolean,
      default: !1
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
    },
    mimetypes: {
      type: String,
      default: "*/*"
    }
  }, {
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {}
  }),
  emits: ["update:loading"],
  setup(e) {
    const t = pe(e, "loading"), a = F(null);
    function r(o) {
      a.value = o;
    }
    function n(o) {
      a.value = null, o(null);
    }
    return (o, i) => (v(), x(u(Tt), { name: e.name }, {
      default: m(({ value: l, setValue: s }) => [
        _(u(jt), null, {
          default: m(() => [
            _(u(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(u(sa), null, {
              default: m(() => [
                ee("div", bP, [
                  _(wk, {
                    loading: t.value,
                    "onUpdate:loading": i[0] || (i[0] = (d) => t.value = d),
                    "file-id": l,
                    purpose: e.purpose,
                    folder: e.folder,
                    "max-size": e.maxSize,
                    disabled: e.disabled,
                    public: e.public,
                    mimetypes: e.mimetypes,
                    "onUpdate:fileId": s,
                    onUploaded: r
                  }, {
                    default: m(({ handle: d, loading: c }) => [
                      ee("div", kP, [
                        _(rt, {
                          type: "button",
                          variant: "outline",
                          loading: c,
                          disabled: e.disabled,
                          onClick: d
                        }, {
                          default: m(() => [
                            _(Le, {
                              name: "Upload",
                              class: "zkit:size-4 zkit:mr-2"
                            }),
                            J(" " + V(l ? o.$t("Replace") : o.$t("Upload")), 1)
                          ]),
                          _: 2
                        }, 1032, ["loading", "disabled", "onClick"]),
                        l ? (v(), x(rt, {
                          key: 0,
                          type: "button",
                          variant: "destructive",
                          disabled: e.disabled,
                          onClick: (f) => n(s)
                        }, {
                          default: m(() => [
                            _(Le, {
                              name: "X",
                              class: "zkit:size-4 zkit:mr-2"
                            }),
                            J(" " + V(o.$t("Clear")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])) : Z("", !0)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["loading", "file-id", "purpose", "folder", "max-size", "disabled", "public", "mimetypes", "onUpdate:fileId"]),
                  l ? (v(), W("p", wP, V(o.$t("Selected file :0", [a.value?.client_name || l])), 1)) : Z("", !0)
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(u(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Z("", !0),
            _(u(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), zP = ["name"], _P = {
  key: 12,
  class: "zkit:text-destructive"
}, SP = /* @__PURE__ */ O({
  __name: "FormAutoFieldList",
  props: {
    fields: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, a = D(() => Object.entries(t.fields).map(([r, n]) => {
      const { component: o, ...i } = n;
      return {
        component: o,
        name: r,
        props: i
      };
    }));
    return (r, n) => (v(!0), W(xe, null, De(a.value, (o) => (v(), W(xe, {
      key: o.name
    }, [
      o.component === "text-field" ? (v(), x(gP, I({
        key: 0,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "textarea" ? (v(), x(gD, I({
        key: 1,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "select" ? (v(), x(AD, I({
        key: 2,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "autocomplete" ? (v(), x(ND, I({
        key: 3,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "switch" ? (v(), x(RD, I({
        key: 4,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "file-upload" ? (v(), x(xP, I({
        key: 5,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "image-upload" ? (v(), x(Q3, I({
        key: 6,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "color-picker" ? (v(), x(J3, I({
        key: 7,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "string-list-input" ? (v(), x(nP, I({
        key: 8,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "json-input" ? (v(), x(sP, I({
        key: 9,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "date-picker" ? (v(), x(hP, I({
        key: 10,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "hidden" ? (v(), W("input", {
        key: 11,
        class: "zkit:hidden",
        name: o.name
      }, null, 8, zP)) : (v(), W("div", _P, " Unknow component " + V(o.component), 1))
    ], 64))), 128));
  }
}), qP = new tS(), OP = { class: "zkit:flex zkit:flex-col zkit:sm:flex-row zkit:items-center zkit:justify-between zkit:px-2 zkit:gap-4" }, AP = { class: "zkit:flex-1 zkit:text-sm zkit:text-muted-foreground zkit:order-2 zkit:sm:order-1" }, CP = { class: "zkit:flex zkit:flex-col zkit:sm:flex-row zkit:items-center zkit:space-y-4 zkit:sm:space-y-0 zkit:sm:space-x-2 zkit:order-1 zkit:sm:order-2" }, EP = { class: "zkit:flex zkit:space-x-2" }, $P = { class: "zkit:flex zkit:items-center zkit:space-x-2" }, BP = { class: "zkit:sr-only" }, MP = { class: "zkit:sr-only" }, DP = { class: "zkit:sr-only" }, PP = { class: "zkit:sr-only" }, jP = { class: "zkit:sr-only" }, IP = { class: "zkit:sr-only" }, FP = /* @__PURE__ */ O({
  __name: "ZDataTablePagination",
  props: {
    page: {
      type: Number,
      required: !0
    },
    pageModifiers: {},
    total: {
      type: Number,
      required: !0
    },
    totalModifiers: {},
    totalPages: {
      type: Number,
      required: !0
    },
    totalPagesModifiers: {},
    limit: {
      type: Number,
      required: !0
    },
    limitModifiers: {},
    limitOptions: {
      type: Array,
      required: !1,
      default: () => [10, 20, 30, 40, 50, 100]
    },
    limitOptionsModifiers: {}
  },
  emits: ["update:page", "update:total", "update:totalPages", "update:limit", "update:limitOptions"],
  setup(e) {
    const t = pe(e, "page"), a = pe(e, "total"), r = pe(e, "totalPages"), n = pe(e, "limit"), o = pe(e, "limitOptions"), i = D(() => {
      const s = t.value, d = r.value, c = [];
      if (d <= 3) {
        for (let p = 1; p <= d; p++)
          c.push(p);
        return c;
      }
      let f = Math.max(1, s - 1);
      const y = Math.min(d, f + 2);
      y - f < 2 && (f = Math.max(1, y - 2));
      for (let p = f; p <= y; p++)
        c.push(p);
      return c;
    });
    function l(s, d) {
      const c = [];
      for (let f = s; f <= d; f++)
        c.push(f);
      return c;
    }
    return (s, d) => (v(), W("div", OP, [
      ee("div", AP, V(s.$t("Showing from :0 to :1 of :2 rows", [(t.value - 1) * n.value, Math.min(t.value * n.value, a.value), a.value])), 1),
      ee("div", CP, [
        _(Pb, {
          modelValue: n.value,
          "onUpdate:modelValue": d[0] || (d[0] = (c) => n.value = c),
          options: o.value,
          "label-class": "min-w-auto text-xs",
          class: "zkit:!h-8"
        }, null, 8, ["modelValue", "options"]),
        ee("div", EP, [
          (v(!0), W(xe, null, De(i.value, (c) => (v(), x(u(ot), {
            key: c,
            variant: t.value === c ? "default" : "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0 zkit:sm:hidden",
            onClick: (f) => t.value = c
          }, {
            default: m(() => [
              J(V(c), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        ee("div", $P, [
          _(u(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === 1,
            onClick: d[1] || (d[1] = (c) => t.value = 1)
          }, {
            default: m(() => [
              ee("span", BP, V(s.$t("Go to first page")), 1),
              _(Le, {
                name: "ChevronsLeft",
                class: "zkit:w-4 zkit:h-4"
              })
            ]),
            _: 1
          }, 8, ["disabled"]),
          _(u(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === 1,
            onClick: d[2] || (d[2] = (c) => t.value = t.value - 1)
          }, {
            default: m(() => [
              ee("span", MP, V(s.$t("Go to previous page")), 1),
              _(Le, {
                name: "ChevronLeft",
                class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
              })
            ]),
            _: 1
          }, 8, ["disabled"]),
          !i.value.includes(1) && r.value > 0 ? (v(), x(Gl, { key: 0 }, {
            default: m(() => [
              _(u(Zl), { "as-child": "" }, {
                default: m(() => [
                  _(u(ot), {
                    variant: "outline",
                    class: "zkit:w-8 zkit:h-8 zkit:p-0"
                  }, {
                    default: m(() => [
                      ee("span", DP, V(s.$t("More pages")), 1),
                      _(Le, {
                        name: "MoreHorizontal",
                        class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _(u(Hl), { class: "zkit:max-h-60 zkit:overflow-y-auto" }, {
                default: m(() => [
                  (v(!0), W(xe, null, De(l(1, Math.min(...i.value) - 1), (c) => (v(), x(u(Yl), {
                    key: c,
                    class: "zkit:cursor-pointer",
                    onClick: (f) => t.value = c
                  }, {
                    default: m(() => [
                      J(V(c), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : Z("", !0),
          (v(!0), W(xe, null, De(i.value, (c) => (v(), x(u(ot), {
            key: c,
            variant: t.value === c ? "default" : "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0 zkit:hidden zkit:sm:flex",
            onClick: (f) => t.value = c
          }, {
            default: m(() => [
              J(V(c), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128)),
          !i.value.includes(r.value) && r.value > 0 ? (v(), x(Gl, { key: 1 }, {
            default: m(() => [
              _(u(Zl), { "as-child": "" }, {
                default: m(() => [
                  _(u(ot), {
                    variant: "outline",
                    class: "zkit:w-8 zkit:h-8 zkit:p-0"
                  }, {
                    default: m(() => [
                      ee("span", PP, V(s.$t("More pages")), 1),
                      _(Le, {
                        name: "MoreHorizontal",
                        class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _(u(Hl), { class: "zkit:max-h-60 zkit:overflow-y-auto" }, {
                default: m(() => [
                  (v(!0), W(xe, null, De(l(Math.max(...i.value) + 1, r.value), (c) => (v(), x(u(Yl), {
                    key: c,
                    class: "zkit:cursor-pointer",
                    onClick: (f) => t.value = c
                  }, {
                    default: m(() => [
                      J(V(c), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : Z("", !0),
          _(u(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === r.value || r.value === 0,
            onClick: d[3] || (d[3] = (c) => t.value = t.value + 1)
          }, {
            default: m(() => [
              ee("span", jP, V(s.$t("Go to next page")), 1),
              _(Le, {
                name: "ChevronRight",
                class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
              })
            ]),
            _: 1
          }, 8, ["disabled"]),
          _(u(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === r.value || r.value === 0,
            onClick: d[4] || (d[4] = (c) => t.value = r.value)
          }, {
            default: m(() => [
              ee("span", IP, V(s.$t("Go to last page")), 1),
              _(Le, {
                name: "ChevronsRight",
                class: "zkit:w-4 zkit:h-4"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ])
    ]));
  }
}), TP = {
  key: 0,
  class: "zkit:h-1 zkit:bg-primary zkit:w-full zkit:animate-pulse zkit:rounded"
}, NP = { class: "zkit:text-sm zkit:text-muted-foreground" }, VP = { class: "zkit:flex zkit:items-start zkit:gap-2" }, RP = { class: "zkit:w-full" }, UP = { class: "zkit:text-xs zkit:font-medium zkit:text-muted-foreground zkit:uppercase zkit:tracking-wide zkit:min-w-[40%]" }, LP = { class: "zkit:text-sm zkit:font-medium zkit:block" }, WP = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "DataTable",
  props: /* @__PURE__ */ Ve({
    selection: {
      type: String,
      default: null
    },
    class: {
      type: String,
      default: ""
    },
    rowClass: {
      type: [String, Function],
      default: ""
    },
    rowStyle: {
      type: [Object, Function],
      default: () => ({})
    },
    rowKey: {
      type: [String, Function],
      default: null
    },
    filter: {
      type: Function,
      default: () => !0
    },
    noMobile: {
      type: Boolean,
      default: !1
    },
    hidePagination: {
      type: Boolean,
      default: !1
    },
    fetch: {
      type: String,
      default: null
    },
    serialize: {
      type: Function,
      default: (e) => e
    },
    refine: {
      type: Function,
      default: null
    }
  }, {
    columns: {
      type: Array,
      default: () => []
    },
    columnsModifiers: {},
    selected: {
      type: Array,
      default: () => []
    },
    selectedModifiers: {},
    fetchQuery: {
      type: Object,
      default: () => ({})
    },
    fetchQueryModifiers: {},
    page: {
      type: Number,
      default: 1
    },
    pageModifiers: {},
    totalPages: {
      type: Number,
      default: 1
    },
    totalPagesModifiers: {},
    total: {
      type: Number,
      default: 0
    },
    totalModifiers: {},
    limit: {
      type: Number,
      default: 10
    },
    limitModifiers: {},
    rows: {
      type: Array,
      default: () => []
    },
    rowsModifiers: {},
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {},
    breakpoint: {
      type: String,
      default: "sm"
    },
    breakpointModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["click:row", "dblclick:row"], ["update:columns", "update:selected", "update:fetchQuery", "update:page", "update:totalPages", "update:total", "update:limit", "update:rows", "update:loading", "update:breakpoint"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, o = pe(e, "columns"), i = pe(e, "selected"), l = pe(e, "fetchQuery");
    let s = F([]), d = F(1), c = F(1), f = F(0), y = F(10), p = async () => {
    }, g = async () => {
    };
    const h = pe(e, "page"), k = pe(e, "totalPages"), w = pe(e, "total"), b = pe(e, "limit"), S = pe(e, "rows"), z = pe(e, "loading"), $ = pe(e, "breakpoint"), q = k0().smaller($), C = D(() => r.noMobile ? !1 : q.value);
    if (r.fetch) {
      const T = cw(r.fetch, {
        serialize: r.serialize,
        refine: r.refine,
        limit: b.value,
        query: l.value
      });
      s = T.items, d = T.page, c = T.totalPages, f = T.total, y = T.limit, p = T.load, g = T.reset, Cu(z, T.loading), Cu(l, T.query);
    }
    r.fetch || (s = S, d = h, c = k, f = w, y = b);
    function E(T) {
      return typeof r.rowKey == "function" ? r.rowKey(T) : typeof r.rowKey == "string" ? nt(T, r.rowKey, "") : null;
    }
    function M(T, fe) {
      return typeof fe.field == "function" ? fe.field(T) : fe.field ? nt(T, fe.field, "") : "";
    }
    function R(T) {
      return typeof r.rowClass == "function" ? r.rowClass(T) : typeof r.rowClass == "string" ? r.rowClass : "";
    }
    function oe(T) {
      return typeof r.rowStyle == "function" ? r.rowStyle(T) : typeof r.rowStyle == "object" ? r.rowStyle : {};
    }
    function ae(T) {
      const fe = E(T);
      return fe ? i.value.some((te) => E(te) === fe) : r.selection === "single" ? i.value[0] === T : r.selection === "multiple" ? i.value.includes(T) : !1;
    }
    function H(T) {
      if (r.selection === "single") {
        i.value = [T];
        return;
      }
      r.selection === "multiple" && !ae(T) && i.value.push(T);
    }
    function re(T) {
      const fe = E(T);
      if (fe) {
        i.value = i.value.filter((te) => E(te) !== fe);
        return;
      }
      r.selection === "single" && (i.value = []), r.selection === "multiple" && ae(T) && (i.value = i.value.filter((te) => te !== T));
    }
    function P(T) {
      if (ae(T))
        return re(T);
      H(T);
    }
    function L() {
      if (r.rowKey) {
        const fe = s.value.filter((te) => !i.value.some((he) => E(te) === E(he)));
        i.value = [...i.value, ...fe];
        return;
      }
      const T = s.value.filter((fe) => !i.value.includes(fe));
      i.value = [...i.value, ...T];
    }
    function U() {
      if (r.rowKey) {
        i.value = i.value.filter((T) => !s.value.some((fe) => E(fe) === E(T)));
        return;
      }
      i.value = i.value.filter((T) => !s.value.includes(T));
    }
    function G() {
      if (s.value.every(ae)) return U();
      L();
    }
    function ce(T) {
      n("click:row", T);
    }
    return t({
      load: p,
      reset: g
    }), (T, fe) => (v(), W(xe, null, [
      C.value ? Z("", !0) : (v(), x(u(Cb), I({
        key: 0,
        "wrapper-class": u(Q)("border rounded-lg", r.class, z.value ? "opacity-50 pointer-events-none" : "")
      }, T.$attrs), {
        default: m(() => [
          _(u($b), null, {
            default: m(() => [
              _(u(Ia), null, {
                default: m(() => [
                  r.selection === "multiple" ? (v(), x(u(ho), {
                    key: 0,
                    class: "zkit:w-10 zkit:text-center zkit:p-0",
                    style: {
                      height: "var(--zkit-datatable-th-height, 3rem)"
                    }
                  }, {
                    default: m(() => [
                      _(Zr, {
                        class: "zkit:translate-y-0.5",
                        "model-value": i.value.length === u(s).length && u(s).length > 0,
                        indeterminate: i.value.length > 0 && i.value.length < u(s).length,
                        onClick: Pe(G, ["stop"])
                      }, null, 8, ["model-value", "indeterminate"])
                    ]),
                    _: 1
                  })) : Z("", !0),
                  (v(!0), W(xe, null, De(o.value, (te) => (v(), x(u(ho), {
                    key: te.id,
                    style: ut({
                      width: te.width ? te.width + "px" : "auto",
                      height: "var(--zkit-datatable-th-height, 3rem)"
                    })
                  }, {
                    default: m(() => [
                      A(T.$slots, `header-${te.id}`, { column: te }, () => [
                        J(V(te.label), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["style"]))), 128))
                ]),
                _: 3
              }),
              z.value ? (v(), x(u(Ia), { key: 0 }, {
                default: m(() => [
                  _(u(ja), {
                    colspan: o.value.length + (r.selection ? 1 : 0),
                    class: "zkit:p-0"
                  }, {
                    default: m(() => [...fe[4] || (fe[4] = [
                      ee("div", { class: "zkit:h-1 zkit:bg-primary zkit:w-full zkit:animate-pulse" }, null, -1)
                    ])]),
                    _: 1
                  }, 8, ["colspan"])
                ]),
                _: 1
              })) : Z("", !0)
            ]),
            _: 3
          }),
          _(u(Eb), null, {
            default: m(() => [
              u(s).length === 0 ? (v(), x(u(Ia), { key: 0 }, {
                default: m(() => [
                  _(u(ja), {
                    colspan: o.value.length + (r.selection ? 1 : 0),
                    class: "zkit:text-center",
                    style: {
                      height: "var(--zkit-datatable-td-height, 3rem)"
                    }
                  }, {
                    default: m(() => [
                      J(V(z.value ? T.$t("Loading...") : T.$t("No data available")), 1)
                    ]),
                    _: 1
                  }, 8, ["colspan"])
                ]),
                _: 1
              })) : Z("", !0),
              (v(!0), W(xe, null, De(u(s).filter(e.filter), (te) => (v(), x(u(Ia), {
                key: te.id,
                "data-state": ae(te) ? "selected" : void 0,
                class: ye(u(Q)("zkit:hover:bg-muted/20 ", R(te))),
                style: ut(oe(te)),
                onClick: (he) => ce(te),
                onDblclick: (he) => n("dblclick:row", te.original)
              }, {
                default: m(() => [
                  r.selection ? (v(), x(u(ja), {
                    key: 0,
                    class: "zkit:w-10 zkit:text-center zkit:p-0"
                  }, {
                    default: m(() => [
                      _(Zr, {
                        class: "zkit:translate-y-0.5",
                        "model-value": ae(te),
                        onClick: Pe((he) => P(te), ["stop"])
                      }, null, 8, ["model-value", "onClick"])
                    ]),
                    _: 2
                  }, 1024)) : Z("", !0),
                  (v(!0), W(xe, null, De(o.value, (he) => (v(), x(u(ja), {
                    key: he.id,
                    style: ut({
                      width: he.width ? he.width + "px" : "auto",
                      height: "var(--zkit-datatable-td-height, 3rem)"
                    }),
                    class: "zkit:whitespace-normal"
                  }, {
                    default: m(() => [
                      A(T.$slots, `row-${he.id}`, {
                        column: he,
                        row: te
                      }, () => [
                        J(V(M(te, he)), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["style"]))), 128))
                ]),
                _: 2
              }, 1032, ["data-state", "class", "style", "onClick", "onDblclick"]))), 128))
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 16, ["wrapper-class"])),
      C.value ? (v(), W("div", I({
        key: 1,
        class: u(Q)("zkit:space-y-4", r.class, z.value ? "zkit:opacity-50 zkit:pointer-events-none" : "")
      }, T.$attrs), [
        z.value ? (v(), W("div", TP)) : Z("", !0),
        r.selection === "multiple" && u(s).length > 0 ? (v(), x(u(ul), {
          key: 1,
          class: "zkit:py-2"
        }, {
          default: m(() => [
            _(u(dl), { class: "zkit:flex zkit:items-center zkit:gap-2" }, {
              default: m(() => [
                _(Zr, {
                  "model-value": i.value.length === u(s).length && u(s).length > 0,
                  indeterminate: i.value.length > 0 && i.value.length < u(s).length,
                  onClick: Pe(G, ["stop"])
                }, null, 8, ["model-value", "indeterminate"]),
                ee("span", NP, V(T.$t("Select all")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Z("", !0),
        !z.value && u(s).length === 0 ? (v(), x(u(ul), { key: 2 }, {
          default: m(() => [
            _(u(dl), { class: "zkit:text-center zkit:py-8" }, {
              default: m(() => [
                J(V(T.$t("No data available")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Z("", !0),
        (v(!0), W(xe, null, De(u(s), (te) => (v(), x(u(ul), {
          key: te.id,
          "data-state": ae(te) ? "selected" : void 0,
          class: ye(u(Q)(
            "zkit:cursor-pointer zkit:transition-colors zkit:hover:bg-muted/20",
            ae(te) ? "zkit:border-primary zkit:bg-primary/5" : "",
            R(te)
          )),
          onClick: (he) => ce(te),
          onDblclick: (he) => n("dblclick:row", te.original)
        }, {
          default: m(() => [
            _(u(dl), { class: "zkit:p-0" }, {
              default: m(() => [
                ee("div", VP, [
                  r.selection ? (v(), x(Zr, {
                    key: 0,
                    class: "zkit:mt-1",
                    "model-value": ae(te),
                    onClick: Pe((he) => P(te), ["stop"])
                  }, null, 8, ["model-value", "onClick"])) : Z("", !0),
                  ee("div", RP, [
                    (v(!0), W(xe, null, De(o.value, (he) => (v(), W("div", {
                      key: he.id,
                      class: ye(u(Q)("zkit:space-x-4 zkit:flex zkit:justify-between zkit:items-center  zkit:overflow-x-auto zkit:border-b zkit:px-4 zkit:py-3 zkit:last:border-b-0"))
                    }, [
                      ee("div", UP, [
                        A(T.$slots, `header-${he.id}`, { column: he }, () => [
                          J(V(he.label), 1)
                        ])
                      ]),
                      A(T.$slots, `row-${he.id}`, {
                        column: he,
                        row: te
                      }, () => [
                        ee("div", LP, V(M(te, he)), 1)
                      ])
                    ], 2))), 128))
                  ])
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["data-state", "class", "onClick", "onDblclick"]))), 128))
      ], 16)) : Z("", !0),
      e.hidePagination ? Z("", !0) : (v(), x(FP, {
        key: 2,
        page: u(d),
        "onUpdate:page": fe[0] || (fe[0] = (te) => tt(d) ? d.value = te : d = te),
        limit: u(y),
        "onUpdate:limit": fe[1] || (fe[1] = (te) => tt(y) ? y.value = te : y = te),
        total: u(f),
        "onUpdate:total": fe[2] || (fe[2] = (te) => tt(f) ? f.value = te : f = te),
        "total-pages": u(c),
        "onUpdate:totalPages": fe[3] || (fe[3] = (te) => tt(c) ? c.value = te : c = te),
        class: "zkit:mt-4"
      }, null, 8, ["page", "limit", "total", "total-pages"]))
    ], 64));
  }
}), KP = {
  key: 0,
  class: "zkit:mb-2 zkit:text-sm zkit:text-red-600"
}, Bf = /* @__PURE__ */ O({
  __name: "DialogForm",
  props: /* @__PURE__ */ Ve({
    title: {
      type: String,
      default: () => $t("Form")
    },
    description: {
      type: String,
      default: () => $t("Fill in the details below to create a new item")
    },
    submitText: {
      type: String,
      default: () => $t("Save")
    },
    schema: {
      type: Object,
      default: () => qP.create((e) => e.record(e.string(), e.any()))
      // dummy schema to satisfy generic constraint
    },
    values: {
      type: Object,
      default: () => ({})
    },
    fetch: {
      type: [String, Function],
      default: null
    },
    fetchMethod: {
      type: String,
      default: "POST"
    },
    /** @deprecated use fetchMethod instead */
    method: {
      type: String,
      default: null
    },
    handle: {
      type: Function,
      default: null
    },
    fields: {
      type: Object,
      default: () => ({})
    },
    toastOnSuccess: {
      type: String,
      default: null
    }
  }, {
    open: {
      type: Boolean,
      default: !1
    },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["submit"], ["update:open"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, o = F(!1), i = pe(e, "open"), { handleSubmit: l, errors: s, values: d, resetForm: c, setFieldValue: f } = Vk({
      validationSchema: oS(r.schema),
      initialValues: r.values
    }), y = D(() => {
      const k = {};
      for (const [w, b] of Object.entries(r.fields))
        typeof b == "function" ? k[w] = b(d) : k[w] = b;
      return k;
    }), p = D(() => {
      const k = {};
      for (const [w, b] of Object.entries(s.value))
        r.fields[w] || (k[w] = b);
      return k;
    });
    function g(k) {
      return typeof r.fetch == "function" ? r.fetch(k) : At.fetch(r.fetch, {
        method: r.method || r.fetchMethod,
        data: k
      });
    }
    const h = l(async (k) => {
      if (!r.fetch && !r.handle) {
        i.value = !1;
        return;
      }
      o.value = !0;
      const [w, b] = await Gt(() => r.handle ? r.handle(k) : g(k));
      if (w) {
        o.value = !1, console.error(w);
        return;
      }
      r.toastOnSuccess && Yn.success(r.toastOnSuccess), await new Promise((S) => setTimeout(S, 1e3)), i.value = !1, o.value = !1, c(), n("submit", b);
    });
    return ge(i, () => {
      i.value && c({ values: r.values });
    }), t({ setFieldValue: f }), (k, w) => (v(), x(ou, null, {
      fallback: m(() => [
        A(k.$slots, "default")
      ]),
      default: m(() => [
        _(u(eu), {
          open: i.value,
          "onUpdate:open": w[1] || (w[1] = (b) => i.value = b)
        }, {
          default: m(() => [
            k.$slots.default ? (v(), x(u(nu), { key: 0 }, {
              default: m(() => [
                A(k.$slots, "default")
              ]),
              _: 3
            })) : Z("", !0),
            _(u(tu), null, {
              default: m(() => [
                _(u(_b), null, {
                  default: m(() => [
                    _(u(ru), null, {
                      default: m(() => [
                        J(V(e.title), 1)
                      ]),
                      _: 1
                    }),
                    _(u(au), null, {
                      default: m(() => [
                        J(V(e.description), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                ee("form", {
                  class: "zkit:space-y-4 zkit:py-2",
                  onSubmit: w[0] || (w[0] = Pe(
                    //@ts-ignore
                    (...b) => u(h) && u(h)(...b),
                    ["prevent"]
                  ))
                }, [
                  _(SP, { fields: y.value }, null, 8, ["fields"]),
                  Object.keys(p.value).length ? (v(), W("div", KP, [
                    (v(!0), W(xe, null, De(p.value, (b, S) => (v(), W("div", { key: S }, V(b), 1))), 128))
                  ])) : Z("", !0),
                  _(u(MM), null, {
                    default: m(() => [
                      _(rt, {
                        type: "submit",
                        class: "zkit:w-full",
                        loading: o.value
                      }, {
                        default: m(() => [
                          J(V(e.submitText), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ], 32)
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      _: 3
    }));
  }
});
function xk(e, t = "", a = {}) {
  for (const [r, n] of Object.entries(e)) {
    const o = /^\d+$/.test(r) ? `${t}[${r}]` : t ? `${t}.${r}` : r;
    if (n && typeof n == "object") {
      xk(n, o, a);
      continue;
    }
    a[o] = n;
  }
  return a;
}
class GP {
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
  loadFromRecord(t, a = "unknow") {
    for (const [r, n] of Object.entries(t))
      this.entries.set(r, {
        key: r,
        value: this.parseValue(n),
        source: a
      });
  }
  loadFromEntries(t, a = "unknow") {
    for (const [r, n] of t)
      this.entries.set(r, {
        key: r,
        value: this.parseValue(n),
        source: a
      });
  }
  toRecord() {
    const t = {};
    for (const [a, r] of this.entries.entries())
      t[a] = r.value;
    return t;
  }
  has(t) {
    if (this.entries.get(t))
      return !0;
    if (!t.includes("."))
      return !1;
    const a = t.split(".")[0], r = this.entries.get(a);
    if (!r)
      return !!this.entries.get(t);
    const n = r.value;
    return typeof n != "object" || Array.isArray(n) ? !1 : W_(n, t.substring(a.length + 1));
  }
  get(t, a) {
    const r = this.entries.get(t);
    if (r)
      return r.value;
    if (!t.includes("."))
      return a;
    const n = t.split(".")[0], o = this.entries.get(n);
    if (!o) {
      const l = this.entries.get(t);
      return l ? l.value : a;
    }
    const i = o.value;
    return typeof i != "object" || Array.isArray(i) ? a : nt(i, t.substring(n.length + 1), a);
  }
  getOne(t, a) {
    for (const r of t)
      if (this.has(r))
        return this.get(r);
    return a;
  }
  set(t, a, r = "runtime") {
    if (!t.includes(".")) {
      this.entries.set(t, {
        key: t,
        source: r,
        value: a
      });
      return;
    }
    const n = t.split(".")[0];
    let o = this.get(n, {});
    (typeof o != "object" || Array.isArray(o)) && (o = {}), zs(o, t.substring(n.length + 1), a), this.entries.set(n, {
      key: n,
      source: r,
      value: o
    });
  }
  unset(t) {
    if (!t.includes(".")) {
      this.entries.delete(t);
      return;
    }
    const a = t.split(".")[0], r = this.get(a, {});
    r && (typeof r != "object" || Array.isArray(r) || (J_(r, t.substring(a.length + 1)), this.entries.set(a, {
      key: a,
      source: "runtime",
      value: r
    })));
  }
  clear() {
    this.entries.clear();
  }
  dump() {
    return xk(this.toRecord());
  }
}
dt.proxy(GP);
const HP = { class: "zkit:block zkit:whitespace-pre-wrap zkit:bg-muted zkit:px-4 zkit:py-2 zkit:rounded-md" }, qj = /* @__PURE__ */ O({
  __name: "ObjectInspect",
  props: /* @__PURE__ */ Ve({
    title: {
      type: String,
      default: () => $t("Object Inspect")
    },
    description: {
      type: String,
      default: () => $t("Inspect the object data structure")
    },
    contentClass: {
      type: String,
      default: ""
    }
  }, {
    open: {
      type: Boolean,
      default: !1
    },
    openModifiers: {},
    modelValue: {
      type: [Object, String],
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:open", "update:modelValue"],
  setup(e) {
    const t = pe(e, "open"), a = pe(e, "modelValue"), r = D(() => {
      if (typeof a.value == "string") {
        const [n, o] = Gt.sync(() => JSON.parse(a.value));
        return n ? a : o;
      }
      return a;
    });
    return (n, o) => (v(), x(u(eu), {
      open: t.value,
      "onUpdate:open": o[0] || (o[0] = (i) => t.value = i)
    }, {
      default: m(() => [
        _(u(nu), { "as-child": "" }, {
          default: m(() => [
            A(n.$slots, "default", {}, () => [
              _(rt, {
                size: "sm",
                variant: "outline"
              }, {
                default: m(() => [
                  _(Le, { name: "eye" })
                ]),
                _: 1
              })
            ])
          ]),
          _: 3
        }),
        _(u(tu), {
          class: ye(u(Q)("sm:max-w-[500px] overflow-auto max-h-[80vh]", e.contentClass))
        }, {
          default: m(() => [
            _(u(_b), null, {
              default: m(() => [
                _(u(ru), null, {
                  default: m(() => [
                    J(V(e.title), 1)
                  ]),
                  _: 1
                }),
                _(u(au), null, {
                  default: m(() => [
                    J(V(e.description), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ee("code", HP, [
              ee("pre", null, V(r.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), YP = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ZAlertButton",
  props: /* @__PURE__ */ Ve({
    title: {
      type: String,
      default: () => $t("Are you sure?")
    },
    description: {
      type: String,
      default: () => $t("This action cannot be undone.")
    },
    fetch: {
      type: [String, Function],
      required: !1,
      default: void 0
    },
    fetchMethod: {
      type: String,
      default: "DELETE"
    },
    toastOnSuccess: {
      type: String,
      default: () => $t("Deleted successfully.")
    }
  }, {
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["confirm", "fetched"], ["update:loading"]),
  setup(e, { emit: t }) {
    const a = e, r = pe(e, "loading"), n = t;
    async function o() {
      if (!a.fetch) return;
      r.value = !0;
      let [l, s] = [null, null];
      if (typeof a.fetch == "string" && ([l, s] = await At.try(a.fetch, { method: a.fetchMethod })), typeof a.fetch == "function") {
        const d = a.fetch;
        [l, s] = await Gt(() => d());
      }
      if (l) {
        r.value = !1;
        return;
      }
      setTimeout(() => {
        r.value = !1, a.toastOnSuccess && Yn.success(a.toastOnSuccess), n("fetched", s);
      }, 500);
    }
    function i() {
      if (a.fetch)
        return o();
      n("confirm");
    }
    return (l, s) => (v(), x(ou, null, {
      fallback: m(() => [
        _(rt, I(l.$attrs, { loading: r.value }), {
          default: m(() => [
            A(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["loading"])
      ]),
      default: m(() => [
        _(u(nM), null, {
          default: m(() => [
            _(u(fM), { "as-child": "" }, {
              default: m(() => [
                _(rt, I(l.$attrs, { loading: r.value }), {
                  default: m(() => [
                    A(l.$slots, "default")
                  ]),
                  _: 3
                }, 16, ["loading"])
              ]),
              _: 3
            }),
            _(u(lM), null, {
              default: m(() => [
                _(u(dM), null, {
                  default: m(() => [
                    _(u(cM), null, {
                      default: m(() => [
                        J(V(e.title), 1)
                      ]),
                      _: 1
                    }),
                    _(u(sM), null, {
                      default: m(() => [
                        J(V(e.description), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _(u(uM), null, {
                  default: m(() => [
                    _(u(iM), { disabled: r.value }, {
                      default: m(() => [
                        J(V(l.$t("Cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    _(u(oM), {
                      disabled: r.value,
                      onClick: i
                    }, {
                      default: m(() => [
                        J(V(l.$t("Confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), ZP = /* @__PURE__ */ O({
  __name: "PageTitle",
  props: {
    tag: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, a) => (v(), x(Ua(e.tag), { class: "zkit:text-2xl zkit:font-bold" }, {
      default: m(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), QP = /* @__PURE__ */ O({
  __name: "PageSubtitle",
  props: {
    tag: {
      type: String,
      default: "h2"
    }
  },
  setup(e) {
    return (t, a) => (v(), x(Ua(e.tag), { class: "zkit:text-muted-foreground zkit:text-base" }, {
      default: m(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), JP = { class: "zkit:flex zkit:mb-4 zkit:justify-between zkit:items-center zkit:gap-4" }, XP = { class: "zkit:flex-1" }, ej = { class: "zkit:flex zkit:items-center zkit:gap-2" }, tj = { class: "zkit:flex zkit:items-center zkit:gap-2 zkit:justify-end" }, Oj = /* @__PURE__ */ O({
  __name: "PageCrud",
  props: /* @__PURE__ */ Ve({
    title: {
      type: String,
      default: () => $t("Items")
    },
    description: {
      type: String,
      default: ""
    },
    serialize: {
      type: Function,
      default: (e) => e
    },
    fetch: {
      type: String,
      default: null
    },
    fetchDestroy: {
      type: String,
      default: null
    },
    fetchUpdateMethod: {
      type: String,
      default: "PUT"
    },
    viewTo: {
      type: String,
      default: null
    },
    actions: {
      type: Array,
      default: () => ["create", "edit", "destroy"]
    }
  }, {
    fetchQuery: {
      type: Object,
      default: null
    },
    fetchQueryModifiers: {},
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {},
    columns: {
      type: Array,
      default: () => []
    },
    columnsModifiers: {},
    fields: {
      type: Object,
      default: () => ({})
    },
    fieldsModifiers: {},
    fieldsEdit: {
      type: Object,
      default: null
    },
    fieldsEditModifiers: {}
  }),
  emits: ["update:fetchQuery", "update:loading", "update:columns", "update:fields", "update:fieldsEdit"],
  setup(e, { expose: t }) {
    const a = F(), r = pe(e, "fetchQuery"), n = pe(e, "loading"), o = pe(e, "columns"), i = pe(e, "fields"), l = pe(e, "fieldsEdit");
    function s(c, f) {
      return c.replace(/:([a-zA-Z_]+)/g, (y, p) => f[p]);
    }
    function d() {
      a.value?.load();
    }
    return t({
      load: d
    }), (c, f) => (v(), W("div", null, [
      ee("div", JP, [
        ee("div", XP, [
          _(ZP, null, {
            default: m(() => [
              J(V(e.title), 1)
            ]),
            _: 1
          }),
          e.description ? (v(), x(QP, { key: 0 }, {
            default: m(() => [
              J(V(e.description), 1)
            ]),
            _: 1
          })) : Z("", !0)
        ]),
        ee("div", ej, [
          _(rt, {
            variant: "outline",
            size: "icon",
            disabled: n.value,
            onClick: d
          }, {
            default: m(() => [
              _(Le, {
                name: "RotateCcw",
                class: ye({ "zkit:animate-spin": n.value })
              }, null, 8, ["class"])
            ]),
            _: 1
          }, 8, ["disabled"]),
          e.actions.includes("create") ? (v(), x(ou, { key: 0 }, {
            default: m(() => [
              _(Bf, {
                fetch: e.fetch,
                title: c.$t("Add new"),
                description: c.$t("Fill in the details below to add a new repository"),
                fields: i.value,
                onSubmit: d
              }, {
                default: m(() => [
                  _(rt, null, {
                    default: m(() => [
                      J(V(c.$t("Add new")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["fetch", "title", "description", "fields"])
            ]),
            _: 1
          })) : Z("", !0)
        ])
      ]),
      A(c.$slots, "header-append"),
      e.fetch ? (v(), x(WP, {
        key: 0,
        ref_key: "tableRef",
        ref: a,
        "fetch-query": r.value,
        "onUpdate:fetchQuery": f[0] || (f[0] = (y) => r.value = y),
        loading: n.value,
        "onUpdate:loading": f[1] || (f[1] = (y) => n.value = y),
        columns: o.value,
        "onUpdate:columns": f[2] || (f[2] = (y) => o.value = y),
        fetch: e.fetch
      }, Mf({
        "row-actions": m(({ row: y }) => [
          ee("div", tj, [
            A(c.$slots, "prepend-actions", { row: y }),
            e.viewTo ? (v(), x(rt, {
              key: 0,
              size: "icon",
              variant: "ghost",
              to: s(e.viewTo, y)
            }, {
              default: m(() => [
                _(Le, { name: "Eye" })
              ]),
              _: 1
            }, 8, ["to"])) : Z("", !0),
            e.actions.includes("edit") ? (v(), x(Bf, {
              key: 1,
              fetch: s(e.fetch + "/:id", y),
              method: e.fetchUpdateMethod,
              title: c.$t("Edit"),
              description: c.$t("Fill in the details below to edit"),
              fields: l.value || i.value,
              values: y,
              onSubmit: d
            }, {
              default: m(() => [
                _(rt, {
                  size: "icon",
                  variant: "ghost"
                }, {
                  default: m(() => [
                    _(Le, { name: "Edit" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["fetch", "method", "title", "description", "fields", "values"])) : Z("", !0),
            e.actions.includes("destroy") ? (v(), x(YP, {
              key: 2,
              variant: "ghost",
              size: "sm",
              fetch: s(e.fetchDestroy || e.fetch, y),
              "fetch-method": "DELETE",
              onFetched: d
            }, {
              default: m(() => [
                _(Le, { name: "trash" })
              ]),
              _: 1
            }, 8, ["fetch"])) : Z("", !0)
          ])
        ]),
        _: 2
      }, [
        De(o.value.filter((y) => y.id !== "actions"), (y) => ({
          name: `row-${y.id}`,
          fn: m((p) => [
            A(c.$slots, `row-${y.id}`, Ie(We(p)))
          ])
        }))
      ]), 1032, ["fetch-query", "loading", "columns", "fetch"])) : Z("", !0)
    ]));
  }
});
class aj extends hu(mu) {
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
class rj {
  static __container_entry_key = "MenuService";
  items = /* @__PURE__ */ new Map();
  add(...t) {
    for (const a of t)
      a.id || (a.id = JSON.stringify(a)), this.items.set(a.id, aj.from(a));
  }
  remove(t) {
    this.items.delete(t);
  }
  list(t = {}) {
    let a = JSON.parse(JSON.stringify(Array.from(this.items.values())));
    return t.layout && (a = a.filter((r) => r.layout === t.layout)), t.group && (a = a.filter((r) => r.group === t.group || r.parent === t.group)), t.parent && (a = a.filter((r) => r.parent === t.parent)), t.allowed !== void 0 && t.allowed === !0 && (a = a.filter((r) => kk.can("view", r))), a.sort((r, n) => {
      const o = r.order ? r.order : 98, i = n.order ? n.order : 98;
      return o - i;
    }), a;
  }
  clear() {
    this.items.clear();
  }
}
dt.proxy(rj);
function nj(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
function oj(e) {
  return class extends e {
    deleted_at = null;
  };
}
class Aj extends hu(mu, nj, oj) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    const [t, a] = this.name.split(" ");
    if (!a)
      return t[0].toUpperCase();
    const r = t[0].toUpperCase(), n = a[0].toUpperCase();
    return r + n;
  }
}
class ij {
  static __container_entry_key = "AuthService";
  user;
  constructor(t = {}) {
    this.user = t.user || null;
  }
  async logout(t) {
    const [a] = await At.try("/auth/logout", { method: "POST" });
    a || (window.location.href = t?.redirect || "/");
  }
}
dt.proxy(ij);
const lj = { class: "zkit:flex zkit:items-center" }, sj = { class: "zkit:flex-1" }, Cj = /* @__PURE__ */ O({
  __name: "ZDataTable",
  props: /* @__PURE__ */ Ve({
    itemKey: {
      type: String,
      default: null
    },
    class: {
      type: String,
      default: ""
    },
    enableSelection: {
      type: Boolean,
      default: !1
    },
    disableSort: {
      type: Boolean,
      default: !1
    }
  }, {
    selected: {
      type: Array,
      default: () => []
    },
    selectedModifiers: {},
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {},
    rows: {
      type: Array,
      default: () => []
    },
    rowsModifiers: {},
    columns: {
      type: Array,
      default: () => []
    },
    columnsModifiers: {},
    orderBy: {
      type: [String, Array],
      default: null
    },
    orderByModifiers: {},
    orderDirection: {
      type: [String, Array],
      default: null
    },
    orderDirectionModifiers: {}
  }),
  emits: ["update:selected", "update:loading", "update:rows", "update:columns", "update:orderBy", "update:orderDirection"],
  setup(e) {
    const t = e, a = pe(e, "selected"), r = pe(e, "loading"), n = pe(e, "rows"), o = pe(e, "columns"), i = pe(e, "orderBy"), l = pe(e, "orderDirection"), s = D(() => o.value.map((b, S) => ({
      id: b.id || String(S),
      ...b
    }))), d = D(() => n.value.map((b) => {
      let S = { _raw: b };
      for (const z of s.value)
        S[z.id] = c(b, z);
      return S;
    }));
    function c(b, S) {
      return typeof S.field == "function" ? S.field(b) : nt(b, S.field);
    }
    function f(b) {
      if (!t.itemKey) return;
      const S = nt(b, t.itemKey);
      if (S)
        return a.value.includes(S);
    }
    function y(b) {
      if (!t.itemKey) return;
      const S = nt(b, t.itemKey);
      if (!S) return;
      if (!a.value.includes(S)) {
        a.value.push(S);
        return;
      }
      const z = a.value.indexOf(S);
      a.value.splice(z, 1);
    }
    function p() {
      return Array.isArray(i.value) ? i.value : i.value ? [i.value] : [];
    }
    function g() {
      return Array.isArray(l.value) ? l.value : l.value ? [l.value] : [];
    }
    function h(b) {
      if (t.disableSort || b.sortable === !1) return;
      const S = p(), z = g(), $ = S.indexOf(b.id);
      $ !== -1 && z[$] === "desc" ? (S.splice($, 1), z.splice($, 1)) : $ !== -1 ? z[$] = "desc" : (S.push(b.id), z.push("asc")), i.value = S, l.value = z;
    }
    function k(b) {
      return p().includes(b.id);
    }
    function w(b) {
      const S = p(), z = g(), $ = S.indexOf(b.id);
      return $ !== -1 && z[$] === "desc";
    }
    return (b, S) => (v(), x(u(Cb), {
      "wrapper-class": u(Q)("border rounded-lg", t.class, r.value ? "opacity-50 pointer-events-none" : "")
    }, {
      default: m(() => [
        _(u($b), null, {
          default: m(() => [
            _(u(Ia), null, {
              default: m(() => [
                e.enableSelection ? (v(), x(u(ho), {
                  key: 0,
                  class: "zkit:w-[50px]"
                })) : Z("", !0),
                (v(!0), W(xe, null, De(s.value, (z, $) => (v(), x(u(ho), {
                  key: $,
                  class: ye(["zkit:group", [
                    !e.disableSort && z.sortable !== !1 ? "zkit:cursor-pointer zkit:select-none" : ""
                  ]]),
                  onClick: (q) => h(z)
                }, {
                  default: m(() => [
                    ee("div", lj, [
                      ee("div", sj, [
                        A(b.$slots, `column-${z.id}`, { column: z }, () => [
                          J(V(z.label), 1)
                        ])
                      ]),
                      !e.disableSort && z.sortable !== !1 ? (v(), x(u(YB), {
                        key: 0,
                        size: 12,
                        class: ye([
                          k(z) ? "" : "zkit:opacity-0 zkit:group-hover:opacity-100",
                          w(z) ? "zkit:rotate-180" : ""
                        ])
                      }, null, 8, ["class"])) : Z("", !0)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        _(u(Eb), null, {
          default: m(() => [
            d.value.length === 0 ? (v(), x(u(Ia), { key: 0 }, {
              default: m(() => [
                _(u(ja), {
                  colspan: s.value.length + (e.enableSelection ? 1 : 0),
                  class: "zkit:text-center zkit:py-4"
                }, {
                  default: m(() => [
                    J(V(b.$t("No data")), 1)
                  ]),
                  _: 1
                }, 8, ["colspan"])
              ]),
              _: 1
            })) : Z("", !0),
            (v(!0), W(xe, null, De(d.value, (z, $) => (v(), x(u(Ia), { key: $ }, {
              default: m(() => [
                e.enableSelection ? (v(), x(u(ja), {
                  key: 0,
                  class: "zkit:w-[50px]"
                }, {
                  default: m(() => [
                    _(Zr, {
                      "model-value": f(z),
                      "onUpdate:modelValue": (q) => y(z)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)) : Z("", !0),
                (v(!0), W(xe, null, De(s.value, (q, C) => (v(), x(u(ja), { key: C }, {
                  default: m(() => [
                    A(b.$slots, `row-${q.id}`, {
                      row: z._raw,
                      column: q
                    }, () => [
                      J(V(z[q.id]), 1)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["wrapper-class"]));
  }
});
export {
  Hl as $,
  gD as A,
  Cj as B,
  Gl as C,
  AD as F,
  kj as I,
  Le as M,
  Zl as O,
  dl as S,
  wj as T,
  QM as W,
  RD as Z,
  Yl as _,
  qj as a,
  WP as b,
  gP as c,
  xj as d,
  rt as e,
  Bf as f,
  hj as g,
  gj as h,
  Sj as i,
  vj as j,
  fj as k,
  Oj as l,
  _j as o,
  nP as p,
  bj as q,
  zj as r,
  YP as v,
  ul as x
};
