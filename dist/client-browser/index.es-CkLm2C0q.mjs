import * as $u from "vue";
import { defineComponent as q, openBlock as v, createBlock as x, resolveDynamicComponent as Sa, normalizeClass as ye, unref as s, withCtx as m, renderSlot as O, createElementBlock as U, ref as F, useModel as pe, computed as M, watch as ve, createVNode as _, createCommentVNode as Q, createTextVNode as J, toDisplayString as V, createElementVNode as ee, withModifiers as Me, Fragment as xe, renderList as je, mergeModels as Le, resolveComponent as jk, mergeProps as P, createSlots as If, normalizeProps as Pe, guardReactiveProps as Ne, normalizeStyle as lt, isRef as tt, onMounted as qe, toRefs as Ye, withKeys as mt, shallowRef as ga, getCurrentInstance as Kt, toRef as Pa, camelize as Ff, onBeforeUnmount as rs, provide as ns, withDirectives as hr, vModelText as Tf, toValue as ze, onServerPrefetch as Ik, nextTick as Se, vShow as Qn, toHandlers as Fk, h as aa, useAttrs as Tk, toHandlerKey as Nk, onUpdated as Vk, triggerRef as Rk, customRef as os, onUnmounted as _t, inject as sn, Comment as Lk, cloneVNode as Uk, Teleport as Nf, shallowReadonly as Da, watchPostEffect as Vf, reactive as Jn, getCurrentScope as wo, onScopeDispose as is, hasInjectionContext as Rf, watchEffect as nt, readonly as Lf, withMemo as ls, mergeDefaults as Uf, markRaw as Wk, effectScope as Wf, watchSyncEffect as Kk, isVNode as Rr } from "vue";
import { useForm as Gk, Field as Hk, ErrorMessage as Yk, isNotNestedPath as Zk, cleanupNonNestedPath as Qk, useField as Jk, FieldContextKey as Xk, useFieldError as e0, useIsFieldTouched as t0, useIsFieldDirty as a0, useIsFieldValid as r0 } from "vee-validate";
import { useRouter as Kf, useRoute as Gf } from "vue-router";
function Or(e, t) {
  return wo() ? (is(e, t), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function en() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const r = () => t(a);
      return Or(r), { off: r };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((r) => r(...a))),
    clear: () => {
      e.clear();
    }
  };
}
// @__NO_SIDE_EFFECTS__
function n0(e) {
  let t = !1, a;
  const r = Wf(!0);
  return ((...n) => (t || (a = r.run(() => e(...n)), t = !0), a));
}
const pi = /* @__PURE__ */ new WeakMap(), o0 = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], r = (t = Kt()) === null || t === void 0 ? void 0 : t.proxy, n = r ?? wo();
  if (n == null && !Rf()) throw new Error("injectLocal must be called in setup");
  return n && pi.has(n) && a in pi.get(n) ? pi.get(n)[a] : sn(...e);
}, ht = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const i0 = (e) => typeof e < "u", l0 = Object.prototype.toString, s0 = (e) => l0.call(e) === "[object Object]", hl = () => {
};
function u0(...e) {
  if (e.length !== 1) return Pa(...e);
  const t = e[0];
  return typeof t == "function" ? Lf(os(() => ({
    get: t,
    set: hl
  }))) : F(t);
}
function d0(e, t) {
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
const Hf = (e) => e();
function c0(e, t = {}) {
  let a, r, n = hl;
  const o = (l) => {
    clearTimeout(l), n(), n = hl;
  };
  let i;
  return (l) => {
    const u = ze(e), d = ze(t.maxWait);
    return a && o(a), u <= 0 || d !== void 0 && d <= 0 ? (r && (o(r), r = void 0), Promise.resolve(l())) : new Promise((c, f) => {
      n = t.rejectOnCancel ? f : c, i = l, d && !r && (r = setTimeout(() => {
        a && o(a), r = void 0, c(i());
      }, d)), a = setTimeout(() => {
        r && o(r), r = void 0, c(l());
      }, u);
    });
  };
}
function f0(e = Hf, t = {}) {
  const { initialState: a = "active" } = t, r = u0(a === "active");
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
    isActive: Lf(r),
    pause: n,
    resume: o,
    eventFilter: i
  };
}
function p0(e, t) {
  var a;
  if (typeof e == "number") return e + t;
  const r = ((a = e.match(/^-?\d+\.?\d*/)) === null || a === void 0 ? void 0 : a[0]) || "", n = e.slice(r.length), o = Number.parseFloat(r) + t;
  return Number.isNaN(o) ? e : o + n;
}
function tn(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function yi(e) {
  return Array.isArray(e) ? e : [e];
}
function Yf(e) {
  return Kt();
}
// @__NO_SIDE_EFFECTS__
function Zf(e) {
  if (!ht) return e;
  let t = 0, a, r;
  const n = () => {
    t -= 1, r && t <= 0 && (r.stop(), a = void 0, r = void 0);
  };
  return ((...o) => (t += 1, r || (r = Wf(!0), a = r.run(() => e(...o))), Or(n), a));
}
function y0(e) {
  return tt(e) ? Jn(new Proxy({}, {
    get(t, a, r) {
      return s(Reflect.get(e.value, a, r));
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
  })) : Jn(e);
}
function m0(e) {
  return y0(M(e));
}
function me(e, ...t) {
  const a = t.flat(), r = a[0];
  return m0(() => Object.fromEntries(typeof r == "function" ? Object.entries(Ye(e)).filter(([n, o]) => !r(ze(o), n)) : Object.entries(Ye(e)).filter((n) => !a.includes(n[0]))));
}
function ss(e, t = 1e4) {
  return os((a, r) => {
    let n = ze(e), o;
    const i = () => setTimeout(() => {
      n = ze(e), r();
    }, ze(t));
    return Or(() => {
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
function Qf(e, t, a = {}) {
  const { eventFilter: r = Hf, ...n } = a;
  return ve(e, d0(r, t), n);
}
function Bu(e, t, a = {}) {
  const { eventFilter: r, initialState: n = "active", ...o } = a, { eventFilter: i, pause: l, resume: u, isActive: d } = f0(r, { initialState: n });
  return {
    stop: Qf(e, t, {
      ...o,
      eventFilter: i
    }),
    pause: l,
    resume: u,
    isActive: d
  };
}
function Du(e, t, ...[a]) {
  const { flush: r = "sync", deep: n = !1, immediate: o = !0, direction: i = "both", transform: l = {} } = a || {}, u = [], d = "ltr" in l && l.ltr || ((f) => f), c = "rtl" in l && l.rtl || ((f) => f);
  return (i === "both" || i === "ltr") && u.push(Bu(e, (f) => {
    u.forEach((y) => y.pause()), t.value = d(f), u.forEach((y) => y.resume());
  }, {
    flush: r,
    deep: n,
    immediate: o
  })), (i === "both" || i === "rtl") && u.push(Bu(t, (f) => {
    u.forEach((y) => y.pause()), e.value = c(f), u.forEach((y) => y.resume());
  }, {
    flush: r,
    deep: n,
    immediate: o
  })), () => {
    u.forEach((f) => f.stop());
  };
}
function h0(e, t) {
  Yf() && rs(e, t);
}
function v0(e, t = !0, a) {
  Yf() ? qe(e, a) : t ? e() : Se(e);
}
function g0(e, t, a = {}) {
  const { immediate: r = !0, immediateCallback: n = !1 } = a, o = ga(!1);
  let i;
  function l() {
    i && (clearTimeout(i), i = void 0);
  }
  function u() {
    o.value = !1, l();
  }
  function d(...c) {
    n && e(), l(), o.value = !0, i = setTimeout(() => {
      o.value = !1, i = void 0, e(...c);
    }, ze(t));
  }
  return r && (o.value = !0, ht && d()), Or(u), {
    isPending: Da(o),
    start: d,
    stop: u
  };
}
function Jf(e, t, a = {}) {
  const { debounce: r = 0, maxWait: n = void 0, ...o } = a;
  return Qf(e, t, {
    ...o,
    eventFilter: c0(r, { maxWait: n })
  });
}
function b0(e, t, a) {
  return ve(e, t, {
    ...a,
    immediate: !0
  });
}
const Ar = ht ? window : void 0;
function Ut(e) {
  var t;
  const a = ze(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function vr(...e) {
  const t = (r, n, o, i) => (r.addEventListener(n, o, i), () => r.removeEventListener(n, o, i)), a = M(() => {
    const r = yi(ze(e[0])).filter((n) => n != null);
    return r.every((n) => typeof n != "string") ? r : void 0;
  });
  return b0(() => {
    var r, n;
    return [
      (r = (n = a.value) === null || n === void 0 ? void 0 : n.map((o) => Ut(o))) !== null && r !== void 0 ? r : [Ar].filter((o) => o != null),
      yi(ze(a.value ? e[1] : e[0])),
      yi(s(a.value ? e[2] : e[1])),
      ze(a.value ? e[3] : e[2])
    ];
  }, ([r, n, o, i], l, u) => {
    if (!r?.length || !n?.length || !o?.length) return;
    const d = s0(i) ? { ...i } : i, c = r.flatMap((f) => n.flatMap((y) => o.map((p) => t(f, y, p, d))));
    u(() => {
      c.forEach((f) => f());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Xf() {
  const e = ga(!1), t = Kt();
  return t && qe(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function ep(e) {
  const t = /* @__PURE__ */ Xf();
  return M(() => (t.value, !!e()));
}
function k0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function w0(...e) {
  let t, a, r = {};
  e.length === 3 ? (t = e[0], a = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], r = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const { target: n = Ar, eventName: o = "keydown", passive: i = !1, dedupe: l = !1 } = r, u = k0(t);
  return vr(n, o, (d) => {
    d.repeat && ze(l) || u(d) && a(d);
  }, i);
}
const x0 = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function tp() {
  const e = Rf() ? /* @__PURE__ */ o0(x0, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Lr(e, t = {}) {
  const { window: a = Ar, ssrWidth: r = /* @__PURE__ */ tp() } = t, n = /* @__PURE__ */ ep(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), o = ga(typeof r == "number"), i = ga(), l = ga(!1), u = (d) => {
    l.value = d.matches;
  };
  return nt(() => {
    if (o.value) {
      o.value = !n.value, l.value = ze(e).split(",").some((d) => {
        const c = d.includes("not all"), f = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), y = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || y);
        return f && p && (p = r >= tn(f[1])), y && p && (p = r <= tn(y[1])), c ? !p : p;
      });
      return;
    }
    n.value && (i.value = a.matchMedia(ze(e)), l.value = i.value.matches);
  }), vr(i, "change", u, { passive: !0 }), M(() => l.value);
}
const z0 = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
// @__NO_SIDE_EFFECTS__
function _0(e, t = {}) {
  function a(p, g) {
    let h = ze(e[ze(p)]);
    return g != null && (h = p0(h, g)), typeof h == "number" && (h = `${h}px`), h;
  }
  const { window: r = Ar, strategy: n = "min-width", ssrWidth: o = /* @__PURE__ */ tp() } = t, i = typeof o == "number", l = i ? ga(!1) : { value: !0 };
  i && v0(() => l.value = !!r);
  function u(p, g) {
    return !l.value && i ? p === "min" ? o >= tn(g) : o <= tn(g) : r ? r.matchMedia(`(${p}-width: ${g})`).matches : !1;
  }
  const d = (p) => Lr(() => `(min-width: ${a(p)})`, t), c = (p) => Lr(() => `(max-width: ${a(p)})`, t), f = Object.keys(e).reduce((p, g) => (Object.defineProperty(p, g, {
    get: () => n === "min-width" ? d(g) : c(g),
    enumerable: !0,
    configurable: !0
  }), p), {});
  function y() {
    const p = Object.keys(e).map((g) => [
      g,
      f[g],
      tn(a(g))
    ]).sort((g, h) => g[2] - h[2]);
    return M(() => p.filter(([, g]) => g.value).map(([g]) => g));
  }
  return Object.assign(f, {
    greaterOrEqual: d,
    smallerOrEqual: c,
    greater(p) {
      return Lr(() => `(min-width: ${a(p, 0.1)})`, t);
    },
    smaller(p) {
      return Lr(() => `(max-width: ${a(p, -0.1)})`, t);
    },
    between(p, g) {
      return Lr(() => `(min-width: ${a(p)}) and (max-width: ${a(g, -0.1)})`, t);
    },
    isGreater(p) {
      return u("min", a(p, 0.1));
    },
    isGreaterOrEqual(p) {
      return u("min", a(p));
    },
    isSmaller(p) {
      return u("max", a(p, -0.1));
    },
    isSmallerOrEqual(p) {
      return u("max", a(p));
    },
    isInBetween(p, g) {
      return u("min", a(p)) && u("max", a(g, -0.1));
    },
    current: y,
    active() {
      const p = y();
      return M(() => p.value.length === 0 ? "" : p.value.at(n === "min-width" ? -1 : 0));
    }
  });
}
function S0(e) {
  return JSON.parse(JSON.stringify(e));
}
function q0(e, t, a = {}) {
  const { window: r = Ar, ...n } = a;
  let o;
  const i = /* @__PURE__ */ ep(() => r && "ResizeObserver" in r), l = () => {
    o && (o.disconnect(), o = void 0);
  }, u = ve(M(() => {
    const c = ze(e);
    return Array.isArray(c) ? c.map((f) => Ut(f)) : [Ut(c)];
  }), (c) => {
    if (l(), i.value && r) {
      o = new ResizeObserver(t);
      for (const f of c) f && o.observe(f, n);
    }
  }, {
    immediate: !0,
    flush: "post"
  }), d = () => {
    l(), u();
  };
  return Or(d), {
    isSupported: i,
    stop: d
  };
}
// @__NO_SIDE_EFFECTS__
function Ze(e, t, a, r = {}) {
  var n, o;
  const { clone: i = !1, passive: l = !1, eventName: u, deep: d = !1, defaultValue: c, shouldEmit: f } = r, y = Kt(), p = a || y?.emit || (y == null || (n = y.$emit) === null || n === void 0 ? void 0 : n.bind(y)) || (y == null || (o = y.proxy) === null || o === void 0 || (o = o.$emit) === null || o === void 0 ? void 0 : o.bind(y?.proxy));
  let g = u;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h = (k) => i ? typeof i == "function" ? i(k) : S0(k) : k, b = () => i0(e[t]) ? h(e[t]) : c, w = (k) => {
    f ? f(k) && p(g, k) : p(g, k);
  };
  if (l) {
    const k = F(b());
    let S = !1;
    return ve(() => e[t], (z) => {
      S || (S = !0, k.value = h(z), Se(() => S = !1));
    }), ve(k, (z) => {
      !S && (z !== e[t] || d) && w(z);
    }, { deep: d }), k;
  } else return M({
    get() {
      return b();
    },
    set(k) {
      w(k);
    }
  });
}
function O0() {
  return /* @__PURE__ */ _0(z0);
}
function vl(e) {
  const t = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/.exec(e);
  if (!t)
    throw new Error("Invalid RGB color format: " + e);
  return {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3])
  };
}
function gl(e) {
  const t = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/.exec(e);
  return t ? {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3]),
    a: parseFloat(t[4])
  } : {
    ...vl(e),
    a: 1
  };
}
function A0(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (!t)
    throw new Error("Invalid HEX color format: " + e);
  return {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  };
}
function Qr(e) {
  const t = /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*[\d.]+)?\)/.exec(e);
  if (!t)
    throw new Error("Invalid HSL color format: " + e);
  const a = parseInt(t[1]) / 360, r = parseInt(t[2]) / 100, n = parseInt(t[3]) / 100;
  let o, i, l;
  if (r === 0)
    o = i = l = n;
  else {
    const u = (f, y, p) => (p < 0 && (p += 1), p > 1 && (p -= 1), p < 0.16666666666666666 ? f + (y - f) * 6 * p : p < 0.5 ? y : p < 0.6666666666666666 ? f + (y - f) * (0.6666666666666666 - p) * 6 : f), d = n < 0.5 ? n * (1 + r) : n + r - n * r, c = 2 * n - d;
    o = u(c, d, a + 1 / 3), i = u(c, d, a), l = u(c, d, a - 1 / 3);
  }
  return {
    r: Math.round(o * 255),
    g: Math.round(i * 255),
    b: Math.round(l * 255)
  };
}
function bl(e, t, a) {
  e /= 255, t /= 255, a /= 255;
  const r = Math.max(e, t, a), n = Math.min(e, t, a), o = (r + n) / 2;
  if (r === n)
    return {
      h: 0,
      s: 0,
      l: Math.round(o * 100)
    };
  const i = r - n, l = o > 0.5 ? i / (2 - r - n) : i / (r + n);
  let u = 0;
  switch (r) {
    case e:
      u = ((t - a) / i + (t < a ? 6 : 0)) * 60;
      break;
    case t:
      u = ((a - e) / i + 2) * 60;
      break;
    case a:
      u = ((e - t) / i + 4) * 60;
      break;
  }
  return {
    h: Math.round(u),
    s: Math.round(l * 100),
    l: Math.round(o * 100)
  };
}
function xo(e, t, a) {
  const r = (n) => {
    const o = n.toString(16);
    return o.length === 1 ? "0" + o : o;
  };
  return `#${r(e)}${r(t)}${r(a)}`;
}
function C0(e) {
  const t = /oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/.exec(e);
  if (!t)
    throw new Error("Invalid OKLCH color format: " + e);
  return {
    l: parseFloat(t[1]),
    c: parseFloat(t[2]),
    h: parseFloat(t[3])
  };
}
function ap(e) {
  const t = C0(e), { l: a, c: r, h: n } = t, o = n * Math.PI / 180, i = r * Math.cos(o), l = r * Math.sin(o), u = a + 0.3963377774 * i + 0.2158037573 * l, d = a - 0.1055613458 * i - 0.0638541728 * l, c = a - 0.0894841775 * i - 1.291485548 * l, f = u * u * u, y = d * d * d, p = c * c * c;
  let g = 4.0767416621 * f - 3.3077115913 * y + 0.2309699292 * p, h = -1.2684380046 * f + 2.6097574011 * y - 0.3413193965 * p, b = -0.0041960863 * f - 0.7034186147 * y + 1.707614701 * p;
  const w = (k) => k >= 31308e-7 ? 1.055 * Math.pow(k, 1 / 2.4) - 0.055 : 12.92 * k;
  return g = w(g), h = w(h), b = w(b), {
    r: Math.round(Math.max(0, Math.min(1, g)) * 255),
    g: Math.round(Math.max(0, Math.min(1, h)) * 255),
    b: Math.round(Math.max(0, Math.min(1, b)) * 255)
  };
}
function us(e, t, a) {
  e = e / 255, t = t / 255, a = a / 255;
  const r = (h) => h >= 0.04045 ? Math.pow((h + 0.055) / 1.055, 2.4) : h / 12.92;
  e = r(e), t = r(t), a = r(a);
  const n = 0.4122214708 * e + 0.5363325363 * t + 0.0514459929 * a, o = 0.2119034982 * e + 0.6806995451 * t + 0.1073969566 * a, i = 0.0883024619 * e + 0.2817188376 * t + 0.6299787005 * a, l = Math.cbrt(n), u = Math.cbrt(o), d = Math.cbrt(i), c = 0.2104542553 * l + 0.793617785 * u - 0.0040720468 * d, f = 1.9779984951 * l - 2.428592205 * u + 0.4505937099 * d, y = 0.0259040371 * l + 0.7827717662 * u - 0.808675766 * d, p = Math.sqrt(f * f + y * y);
  let g = Math.atan2(y, f) * (180 / Math.PI);
  return g < 0 && (g += 360), {
    l: Math.round(c * 1e3) / 1e3,
    c: Math.round(p * 1e3) / 1e3,
    h: Math.round(g * 1e3) / 1e3
  };
}
function Cr(e) {
  const t = tt(e) ? e : F(ze(e));
  return M({
    get() {
      return t.value ? t.value.startsWith("#") ? "hex" : /^rgba/.test(t.value) ? "rgba" : /^rgb/.test(t.value) ? "rgb" : /^oklch/.test(t.value) ? "oklch" : /^hsla/.test(t.value) ? "hsla" : /^hsl/.test(t.value) ? "hsl" : "unknown" : null;
    },
    set(a) {
      if (!t.value || !a)
        return;
      const r = hn(t).value;
      if (r) {
        if (a === "hex") {
          t.value = xo(r.r, r.g, r.b);
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
          const n = bl(r.r, r.g, r.b);
          t.value = `hsl(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (a === "hsla") {
          const n = bl(r.r, r.g, r.b);
          t.value = `hsla(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (a === "oklch") {
          const n = us(r.r, r.g, r.b);
          t.value = `oklch(${n.l} ${n.c} ${n.h})`;
          return;
        }
      }
    }
  });
}
function hn(e) {
  const t = tt(e) ? e : F(ze(e)), a = Cr(t);
  return M({
    get() {
      if (!t.value)
        return null;
      if (a.value === "rgba") {
        const r = gl(t.value);
        return {
          r: r.r,
          g: r.g,
          b: r.b
        };
      }
      return a.value === "rgb" ? vl(t.value) : a.value === "hex" && t.value.length === 7 ? A0(t.value) : a.value === "hsl" ? Qr(t.value) : a.value === "oklch" ? ap(t.value) : null;
    },
    set() {
      if (t.value) {
        if (a.value === "rgb") {
          const r = vl(t.value);
          t.value = `rgb(${r.r}, ${r.g}, ${r.b})`;
        }
        if (a.value === "rgba") {
          const r = gl(t.value);
          t.value = `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`;
        }
      }
    }
  });
}
function E0(e) {
  const t = tt(e) ? e : F(ze(e)), a = Cr(t), r = hn(t);
  return M({
    get() {
      return r.value ? a.value === "rgba" ? gl(t.value) : {
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
function $0(e) {
  const t = tt(e) ? e : F(ze(e)), a = Cr(t), r = hn(t);
  return M({
    get() {
      return r.value ? bl(r.value.r, r.value.g, r.value.b) : null;
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
          const o = Qr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = xo(o.r, o.g, o.b);
          return;
        }
        if (a.value === "rgba") {
          const o = Qr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = `rgba(${o.r}, ${o.g}, ${o.b}, 1)`;
          return;
        }
        if (a.value === "rgb") {
          const o = Qr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = `rgb(${o.r}, ${o.g}, ${o.b})`;
          return;
        }
        if (a.value === "oklch") {
          const o = Qr(`hsl(${n.h}, ${n.s}%, ${n.l}%)`), i = us(o.r, o.g, o.b);
          t.value = `oklch(${i.l} ${i.c} ${i.h})`;
          return;
        }
      }
    }
  });
}
function B0(e) {
  const t = tt(e) ? e : F(ze(e)), a = Cr(t), r = hn(t);
  return M({
    get() {
      return r.value ? xo(r.value.r, r.value.g, r.value.b) : null;
    },
    set(n) {
      if (n && a.value === "hex") {
        t.value = n.startsWith("#") ? n : `#${n}`;
        return;
      }
    }
  });
}
function rp(e) {
  const t = tt(e) ? e : F(ze(e)), a = Cr(t), r = B0(t), n = hn(t), o = E0(t), i = $0(t), l = M({
    get() {
      return n.value ? us(n.value.r, n.value.g, n.value.b) : null;
    },
    set(u) {
      if (!u)
        return;
      if (a.value === "oklch") {
        t.value = `oklch(${u.l} ${u.c} ${u.h})`;
        return;
      }
      const d = ap(`oklch(${u.l} ${u.c} ${u.h})`);
      if (a.value === "hex") {
        t.value = xo(d.r, d.g, d.b);
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
class vn extends Error {
  status = 500;
  constructor(t, a = 500) {
    super(t), this.name = "BaseException", this.status = a;
  }
  static fromError(t) {
    return new vn(t.message, 500);
  }
}
class D0 {
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
      throw new vn(`Entry with key "${String(a)}" not found in container.`);
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
const dt = globalThis.clientContainer || new D0();
globalThis.clientContainer = dt;
function M0(e, t) {
  const a = dt.get("state");
  let r = a[e];
  !r && t?.default !== void 0 && (r = t.default()), r && t?.transform && (r = t.transform(r));
  const n = F(r), o = (i) => {
    a[e] = i, dt.set("state", a);
  };
  return ve(n, o, { deep: !0 }), M({
    get: () => n.value,
    set: (i) => {
      n.value = i, o(i);
    }
  });
}
var Mu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function j0(e) {
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
var Pu, ju;
function Er() {
  return ju || (ju = 1, Pu = TypeError), Pu;
}
const I0 = {}, F0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I0
}, Symbol.toStringTag, { value: "Module" })), T0 = /* @__PURE__ */ j0(F0);
var mi, Iu;
function zo() {
  if (Iu) return mi;
  Iu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, a = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, n = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = n && o && typeof o.get == "function" ? o.get : null, l = n && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, d = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, y = typeof WeakRef == "function" && WeakRef.prototype, p = y ? WeakRef.prototype.deref : null, g = Boolean.prototype.valueOf, h = Object.prototype.toString, b = Function.prototype.toString, w = String.prototype.match, k = String.prototype.slice, S = String.prototype.replace, z = String.prototype.toUpperCase, $ = String.prototype.toLowerCase, A = RegExp.prototype.test, C = Array.prototype.concat, E = Array.prototype.join, D = Array.prototype.slice, R = Math.floor, oe = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ae = Object.getOwnPropertySymbols, H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, re = typeof Symbol == "function" && typeof Symbol.iterator == "object", j = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === re || !0) ? Symbol.toStringTag : null, W = Object.prototype.propertyIsEnumerable, L = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(I) {
    return I.__proto__;
  } : null);
  function G(I, N) {
    if (I === 1 / 0 || I === -1 / 0 || I !== I || I && I > -1e3 && I < 1e3 || A.call(/e/, N))
      return N;
    var Ae = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof I == "number") {
      var Fe = I < 0 ? -R(-I) : R(I);
      if (Fe !== I) {
        var Te = String(Fe), ke = k.call(N, Te.length + 1);
        return S.call(Te, Ae, "$&_") + "." + S.call(S.call(ke, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(N, Ae, "$&_");
  }
  var ce = T0, T = ce.custom, fe = Xe(T) ? T : null, te = {
    __proto__: null,
    double: '"',
    single: "'"
  }, he = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  mi = function I(N, Ae, Fe, Te) {
    var ke = Ae || {};
    if (We(ke, "quoteStyle") && !We(te, ke.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (We(ke, "maxStringLength") && (typeof ke.maxStringLength == "number" ? ke.maxStringLength < 0 && ke.maxStringLength !== 1 / 0 : ke.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var da = We(ke, "customInspect") ? ke.customInspect : !0;
    if (typeof da != "boolean" && da !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (We(ke, "indent") && ke.indent !== null && ke.indent !== "	" && !(parseInt(ke.indent, 10) === ke.indent && ke.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (We(ke, "numericSeparator") && typeof ke.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ca = ke.numericSeparator;
    if (typeof N > "u")
      return "undefined";
    if (N === null)
      return "null";
    if (typeof N == "boolean")
      return N ? "true" : "false";
    if (typeof N == "string")
      return wu(N, ke);
    if (typeof N == "number") {
      if (N === 0)
        return 1 / 0 / N > 0 ? "0" : "-0";
      var ct = String(N);
      return Ca ? G(N, ct) : ct;
    }
    if (typeof N == "bigint") {
      var ca = String(N) + "n";
      return Ca ? G(N, ca) : ca;
    }
    var ii = typeof ke.depth > "u" ? 5 : ke.depth;
    if (typeof Fe > "u" && (Fe = 0), Fe >= ii && ii > 0 && typeof N == "object")
      return De(N) ? "[Array]" : "[Object]";
    var ar = Dk(ke, Fe);
    if (typeof Te > "u")
      Te = [];
    else if (kt(Te, N) >= 0)
      return "[Circular]";
    function qt(rr, Pn, Pk) {
      if (Pn && (Te = D.call(Te), Te.push(Pn)), Pk) {
        var Eu = {
          depth: ke.depth
        };
        return We(ke, "quoteStyle") && (Eu.quoteStyle = ke.quoteStyle), I(rr, Eu, Fe + 1, Te);
      }
      return I(rr, ke, Fe + 1, Te);
    }
    if (typeof N == "function" && !K(N)) {
      var zu = Aa(N), _u = Dn(N, qt);
      return "[Function" + (zu ? ": " + zu : " (anonymous)") + "]" + (_u.length > 0 ? " { " + E.call(_u, ", ") + " }" : "");
    }
    if (Xe(N)) {
      var Su = re ? S.call(String(N), /^(Symbol\(.*\))_[^)]*$/, "$1") : H.call(N);
      return typeof N == "object" && !re ? Nr(Su) : Su;
    }
    if (Ek(N)) {
      for (var Vr = "<" + $.call(String(N.nodeName)), li = N.attributes || [], Mn = 0; Mn < li.length; Mn++)
        Vr += " " + li[Mn].name + "=" + Ve(Oe(li[Mn].value), "double", ke);
      return Vr += ">", N.childNodes && N.childNodes.length && (Vr += "..."), Vr += "</" + $.call(String(N.nodeName)) + ">", Vr;
    }
    if (De(N)) {
      if (N.length === 0)
        return "[]";
      var si = Dn(N, qt);
      return ar && !Bk(si) ? "[" + oi(si, ar) + "]" : "[ " + E.call(si, ", ") + " ]";
    }
    if (ne(N)) {
      var ui = Dn(N, qt);
      return !("cause" in Error.prototype) && "cause" in N && !W.call(N, "cause") ? "{ [" + String(N) + "] " + E.call(C.call("[cause]: " + qt(N.cause), ui), ", ") + " }" : ui.length === 0 ? "[" + String(N) + "]" : "{ [" + String(N) + "] " + E.call(ui, ", ") + " }";
    }
    if (typeof N == "object" && da) {
      if (fe && typeof N[fe] == "function" && ce)
        return ce(N, { depth: ii - Fe });
      if (da !== "symbol" && typeof N.inspect == "function")
        return N.inspect();
    }
    if (Xa(N)) {
      var qu = [];
      return r && r.call(N, function(rr, Pn) {
        qu.push(qt(Pn, N, !0) + " => " + qt(rr, N));
      }), xu("Map", a.call(N), qu, ar);
    }
    if (Ak(N)) {
      var Ou = [];
      return l && l.call(N, function(rr) {
        Ou.push(qt(rr, N));
      }), xu("Set", i.call(N), Ou, ar);
    }
    if (er(N))
      return ni("WeakMap");
    if (Ck(N))
      return ni("WeakSet");
    if (tr(N))
      return ni("WeakRef");
    if (be(N))
      return Nr(qt(Number(N)));
    if (Ke(N))
      return Nr(qt(oe.call(N)));
    if (_e(N))
      return Nr(g.call(N));
    if (de(N))
      return Nr(qt(String(N)));
    if (typeof window < "u" && N === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && N === globalThis || typeof Mu < "u" && N === Mu)
      return "{ [object globalThis] }";
    if (!X(N) && !K(N)) {
      var di = Dn(N, qt), Au = L ? L(N) === Object.prototype : N instanceof Object || N.constructor === Object, ci = N instanceof Object ? "" : "null prototype", Cu = !Au && j && Object(N) === N && j in N ? k.call(at(N), 8, -1) : ci ? "Object" : "", Mk = Au || typeof N.constructor != "function" ? "" : N.constructor.name ? N.constructor.name + " " : "", fi = Mk + (Cu || ci ? "[" + E.call(C.call([], Cu || [], ci || []), ": ") + "] " : "");
      return di.length === 0 ? fi + "{}" : ar ? fi + "{" + oi(di, ar) + "}" : fi + "{ " + E.call(di, ", ") + " }";
    }
    return String(N);
  };
  function Ve(I, N, Ae) {
    var Fe = Ae.quoteStyle || N, Te = te[Fe];
    return Te + I + Te;
  }
  function Oe(I) {
    return S.call(String(I), /"/g, "&quot;");
  }
  function ge(I) {
    return !j || !(typeof I == "object" && (j in I || typeof I[j] < "u"));
  }
  function De(I) {
    return at(I) === "[object Array]" && ge(I);
  }
  function X(I) {
    return at(I) === "[object Date]" && ge(I);
  }
  function K(I) {
    return at(I) === "[object RegExp]" && ge(I);
  }
  function ne(I) {
    return at(I) === "[object Error]" && ge(I);
  }
  function de(I) {
    return at(I) === "[object String]" && ge(I);
  }
  function be(I) {
    return at(I) === "[object Number]" && ge(I);
  }
  function _e(I) {
    return at(I) === "[object Boolean]" && ge(I);
  }
  function Xe(I) {
    if (re)
      return I && typeof I == "object" && I instanceof Symbol;
    if (typeof I == "symbol")
      return !0;
    if (!I || typeof I != "object" || !H)
      return !1;
    try {
      return H.call(I), !0;
    } catch {
    }
    return !1;
  }
  function Ke(I) {
    if (!I || typeof I != "object" || !oe)
      return !1;
    try {
      return oe.call(I), !0;
    } catch {
    }
    return !1;
  }
  var Ee = Object.prototype.hasOwnProperty || function(I) {
    return I in this;
  };
  function We(I, N) {
    return Ee.call(I, N);
  }
  function at(I) {
    return h.call(I);
  }
  function Aa(I) {
    if (I.name)
      return I.name;
    var N = w.call(b.call(I), /^function\s*([\w$]+)/);
    return N ? N[1] : null;
  }
  function kt(I, N) {
    if (I.indexOf)
      return I.indexOf(N);
    for (var Ae = 0, Fe = I.length; Ae < Fe; Ae++)
      if (I[Ae] === N)
        return Ae;
    return -1;
  }
  function Xa(I) {
    if (!a || !I || typeof I != "object")
      return !1;
    try {
      a.call(I);
      try {
        i.call(I);
      } catch {
        return !0;
      }
      return I instanceof Map;
    } catch {
    }
    return !1;
  }
  function er(I) {
    if (!d || !I || typeof I != "object")
      return !1;
    try {
      d.call(I, d);
      try {
        f.call(I, f);
      } catch {
        return !0;
      }
      return I instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function tr(I) {
    if (!p || !I || typeof I != "object")
      return !1;
    try {
      return p.call(I), !0;
    } catch {
    }
    return !1;
  }
  function Ak(I) {
    if (!i || !I || typeof I != "object")
      return !1;
    try {
      i.call(I);
      try {
        a.call(I);
      } catch {
        return !0;
      }
      return I instanceof Set;
    } catch {
    }
    return !1;
  }
  function Ck(I) {
    if (!f || !I || typeof I != "object")
      return !1;
    try {
      f.call(I, f);
      try {
        d.call(I, d);
      } catch {
        return !0;
      }
      return I instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Ek(I) {
    return !I || typeof I != "object" ? !1 : typeof HTMLElement < "u" && I instanceof HTMLElement ? !0 : typeof I.nodeName == "string" && typeof I.getAttribute == "function";
  }
  function wu(I, N) {
    if (I.length > N.maxStringLength) {
      var Ae = I.length - N.maxStringLength, Fe = "... " + Ae + " more character" + (Ae > 1 ? "s" : "");
      return wu(k.call(I, 0, N.maxStringLength), N) + Fe;
    }
    var Te = he[N.quoteStyle || "single"];
    Te.lastIndex = 0;
    var ke = S.call(S.call(I, Te, "\\$1"), /[\x00-\x1f]/g, $k);
    return Ve(ke, "single", N);
  }
  function $k(I) {
    var N = I.charCodeAt(0), Ae = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[N];
    return Ae ? "\\" + Ae : "\\x" + (N < 16 ? "0" : "") + z.call(N.toString(16));
  }
  function Nr(I) {
    return "Object(" + I + ")";
  }
  function ni(I) {
    return I + " { ? }";
  }
  function xu(I, N, Ae, Fe) {
    var Te = Fe ? oi(Ae, Fe) : E.call(Ae, ", ");
    return I + " (" + N + ") {" + Te + "}";
  }
  function Bk(I) {
    for (var N = 0; N < I.length; N++)
      if (kt(I[N], `
`) >= 0)
        return !1;
    return !0;
  }
  function Dk(I, N) {
    var Ae;
    if (I.indent === "	")
      Ae = "	";
    else if (typeof I.indent == "number" && I.indent > 0)
      Ae = E.call(Array(I.indent + 1), " ");
    else
      return null;
    return {
      base: Ae,
      prev: E.call(Array(N + 1), Ae)
    };
  }
  function oi(I, N) {
    if (I.length === 0)
      return "";
    var Ae = `
` + N.prev + N.base;
    return Ae + E.call(I, "," + Ae) + `
` + N.prev;
  }
  function Dn(I, N) {
    var Ae = De(I), Fe = [];
    if (Ae) {
      Fe.length = I.length;
      for (var Te = 0; Te < I.length; Te++)
        Fe[Te] = We(I, Te) ? N(I[Te], I) : "";
    }
    var ke = typeof ae == "function" ? ae(I) : [], da;
    if (re) {
      da = {};
      for (var Ca = 0; Ca < ke.length; Ca++)
        da["$" + ke[Ca]] = ke[Ca];
    }
    for (var ct in I)
      We(I, ct) && (Ae && String(Number(ct)) === ct && ct < I.length || re && da["$" + ct] instanceof Symbol || (A.call(/[^\w$]/, ct) ? Fe.push(N(ct, I) + ": " + N(I[ct], I)) : Fe.push(ct + ": " + N(I[ct], I))));
    if (typeof ae == "function")
      for (var ca = 0; ca < ke.length; ca++)
        W.call(I, ke[ca]) && Fe.push("[" + N(ke[ca]) + "]: " + N(I[ke[ca]], I));
    return Fe;
  }
  return mi;
}
var hi, Fu;
function N0() {
  if (Fu) return hi;
  Fu = 1;
  var e = /* @__PURE__ */ zo(), t = /* @__PURE__ */ Er(), a = function(l, u, d) {
    for (var c = l, f; (f = c.next) != null; c = f)
      if (f.key === u)
        return c.next = f.next, d || (f.next = /** @type {NonNullable<typeof list.next>} */
        l.next, l.next = f), f;
  }, r = function(l, u) {
    if (l) {
      var d = a(l, u);
      return d && d.value;
    }
  }, n = function(l, u, d) {
    var c = a(l, u);
    c ? c.value = d : l.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: l.next,
      value: d
    };
  }, o = function(l, u) {
    return l ? !!a(l, u) : !1;
  }, i = function(l, u) {
    if (l)
      return a(l, u, !0);
  };
  return hi = function() {
    var l, u = {
      assert: function(d) {
        if (!u.has(d))
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
    return u;
  }, hi;
}
var Tu, Nu;
function np() {
  return Nu || (Nu = 1, Tu = Object), Tu;
}
var Vu, Ru;
function V0() {
  return Ru || (Ru = 1, Vu = Error), Vu;
}
var Lu, Uu;
function R0() {
  return Uu || (Uu = 1, Lu = EvalError), Lu;
}
var Wu, Ku;
function L0() {
  return Ku || (Ku = 1, Wu = RangeError), Wu;
}
var Gu, Hu;
function U0() {
  return Hu || (Hu = 1, Gu = ReferenceError), Gu;
}
var Yu, Zu;
function W0() {
  return Zu || (Zu = 1, Yu = SyntaxError), Yu;
}
var Qu, Ju;
function K0() {
  return Ju || (Ju = 1, Qu = URIError), Qu;
}
var Xu, ed;
function G0() {
  return ed || (ed = 1, Xu = Math.abs), Xu;
}
var td, ad;
function H0() {
  return ad || (ad = 1, td = Math.floor), td;
}
var rd, nd;
function Y0() {
  return nd || (nd = 1, rd = Math.max), rd;
}
var od, id;
function Z0() {
  return id || (id = 1, od = Math.min), od;
}
var ld, sd;
function Q0() {
  return sd || (sd = 1, ld = Math.pow), ld;
}
var ud, dd;
function J0() {
  return dd || (dd = 1, ud = Math.round), ud;
}
var cd, fd;
function X0() {
  return fd || (fd = 1, cd = Number.isNaN || function(e) {
    return e !== e;
  }), cd;
}
var vi, pd;
function ew() {
  if (pd) return vi;
  pd = 1;
  var e = /* @__PURE__ */ X0();
  return vi = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, vi;
}
var yd, md;
function tw() {
  return md || (md = 1, yd = Object.getOwnPropertyDescriptor), yd;
}
var gi, hd;
function op() {
  if (hd) return gi;
  hd = 1;
  var e = /* @__PURE__ */ tw();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return gi = e, gi;
}
var bi, vd;
function aw() {
  if (vd) return bi;
  vd = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return bi = e, bi;
}
var gd, bd;
function rw() {
  return bd || (bd = 1, gd = function() {
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
  }), gd;
}
var ki, kd;
function nw() {
  if (kd) return ki;
  kd = 1;
  var e = typeof Symbol < "u" && Symbol, t = rw();
  return ki = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, ki;
}
var wd, xd;
function ip() {
  return xd || (xd = 1, wd = typeof Reflect < "u" && Reflect.getPrototypeOf || null), wd;
}
var wi, zd;
function lp() {
  if (zd) return wi;
  zd = 1;
  var e = /* @__PURE__ */ np();
  return wi = e.getPrototypeOf || null, wi;
}
var xi, _d;
function ow() {
  if (_d) return xi;
  _d = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, a = Math.max, r = "[object Function]", n = function(l, u) {
    for (var d = [], c = 0; c < l.length; c += 1)
      d[c] = l[c];
    for (var f = 0; f < u.length; f += 1)
      d[f + l.length] = u[f];
    return d;
  }, o = function(l, u) {
    for (var d = [], c = u, f = 0; c < l.length; c += 1, f += 1)
      d[f] = l[c];
    return d;
  }, i = function(l, u) {
    for (var d = "", c = 0; c < l.length; c += 1)
      d += l[c], c + 1 < l.length && (d += u);
    return d;
  };
  return xi = function(l) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== r)
      throw new TypeError(e + u);
    for (var d = o(arguments, 1), c, f = function() {
      if (this instanceof c) {
        var b = u.apply(
          this,
          n(d, arguments)
        );
        return Object(b) === b ? b : this;
      }
      return u.apply(
        l,
        n(d, arguments)
      );
    }, y = a(0, u.length - d.length), p = [], g = 0; g < y; g++)
      p[g] = "$" + g;
    if (c = Function("binder", "return function (" + i(p, ",") + "){ return binder.apply(this,arguments); }")(f), u.prototype) {
      var h = function() {
      };
      h.prototype = u.prototype, c.prototype = new h(), h.prototype = null;
    }
    return c;
  }, xi;
}
var zi, Sd;
function _o() {
  if (Sd) return zi;
  Sd = 1;
  var e = ow();
  return zi = Function.prototype.bind || e, zi;
}
var qd, Od;
function ds() {
  return Od || (Od = 1, qd = Function.prototype.call), qd;
}
var Ad, Cd;
function sp() {
  return Cd || (Cd = 1, Ad = Function.prototype.apply), Ad;
}
var Ed, $d;
function iw() {
  return $d || ($d = 1, Ed = typeof Reflect < "u" && Reflect && Reflect.apply), Ed;
}
var _i, Bd;
function lw() {
  if (Bd) return _i;
  Bd = 1;
  var e = _o(), t = sp(), a = ds(), r = iw();
  return _i = r || e.call(a, t), _i;
}
var Si, Dd;
function up() {
  if (Dd) return Si;
  Dd = 1;
  var e = _o(), t = /* @__PURE__ */ Er(), a = ds(), r = lw();
  return Si = function(n) {
    if (n.length < 1 || typeof n[0] != "function")
      throw new t("a function is required");
    return r(e, a, n);
  }, Si;
}
var qi, Md;
function sw() {
  if (Md) return qi;
  Md = 1;
  var e = up(), t = /* @__PURE__ */ op(), a;
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
  return qi = r && typeof r.get == "function" ? e([r.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    (function(i) {
      return o(i == null ? i : n(i));
    })
  ) : !1, qi;
}
var Oi, Pd;
function uw() {
  if (Pd) return Oi;
  Pd = 1;
  var e = ip(), t = lp(), a = /* @__PURE__ */ sw();
  return Oi = e ? function(r) {
    return e(r);
  } : t ? function(r) {
    if (!r || typeof r != "object" && typeof r != "function")
      throw new TypeError("getProto: not an object");
    return t(r);
  } : a ? function(r) {
    return a(r);
  } : null, Oi;
}
var Ai, jd;
function dw() {
  if (jd) return Ai;
  jd = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, a = _o();
  return Ai = a.call(e, t), Ai;
}
var Ci, Id;
function cs() {
  if (Id) return Ci;
  Id = 1;
  var e, t = /* @__PURE__ */ np(), a = /* @__PURE__ */ V0(), r = /* @__PURE__ */ R0(), n = /* @__PURE__ */ L0(), o = /* @__PURE__ */ U0(), i = /* @__PURE__ */ W0(), l = /* @__PURE__ */ Er(), u = /* @__PURE__ */ K0(), d = /* @__PURE__ */ G0(), c = /* @__PURE__ */ H0(), f = /* @__PURE__ */ Y0(), y = /* @__PURE__ */ Z0(), p = /* @__PURE__ */ Q0(), g = /* @__PURE__ */ J0(), h = /* @__PURE__ */ ew(), b = Function, w = function(K) {
    try {
      return b('"use strict"; return (' + K + ").constructor;")();
    } catch {
    }
  }, k = /* @__PURE__ */ op(), S = /* @__PURE__ */ aw(), z = function() {
    throw new l();
  }, $ = k ? (function() {
    try {
      return arguments.callee, z;
    } catch {
      try {
        return k(arguments, "callee").get;
      } catch {
        return z;
      }
    }
  })() : z, A = nw()(), C = uw(), E = lp(), D = ip(), R = sp(), oe = ds(), ae = {}, H = typeof Uint8Array > "u" || !C ? e : C(Uint8Array), re = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": A && C ? C([][Symbol.iterator]()) : e,
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
    "%Function%": b,
    "%GeneratorFunction%": ae,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": A && C ? C(C([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !A || !C ? e : C((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": k,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": n,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !A || !C ? e : C((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": A && C ? C(""[Symbol.iterator]()) : e,
    "%Symbol%": A ? Symbol : e,
    "%SyntaxError%": i,
    "%ThrowTypeError%": $,
    "%TypedArray%": H,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
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
    "%Reflect.getPrototypeOf%": D
  };
  if (C)
    try {
      null.error;
    } catch (K) {
      var j = C(C(K));
      re["%Error.prototype%"] = j;
    }
  var W = function K(ne) {
    var de;
    if (ne === "%AsyncFunction%")
      de = w("async function () {}");
    else if (ne === "%GeneratorFunction%")
      de = w("function* () {}");
    else if (ne === "%AsyncGeneratorFunction%")
      de = w("async function* () {}");
    else if (ne === "%AsyncGenerator%") {
      var be = K("%AsyncGeneratorFunction%");
      be && (de = be.prototype);
    } else if (ne === "%AsyncIteratorPrototype%") {
      var _e = K("%AsyncGenerator%");
      _e && C && (de = C(_e.prototype));
    }
    return re[ne] = de, de;
  }, L = {
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
  }, G = _o(), ce = /* @__PURE__ */ dw(), T = G.call(oe, Array.prototype.concat), fe = G.call(R, Array.prototype.splice), te = G.call(oe, String.prototype.replace), he = G.call(oe, String.prototype.slice), Ve = G.call(oe, RegExp.prototype.exec), Oe = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ge = /\\(\\)?/g, De = function(K) {
    var ne = he(K, 0, 1), de = he(K, -1);
    if (ne === "%" && de !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (de === "%" && ne !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var be = [];
    return te(K, Oe, function(_e, Xe, Ke, Ee) {
      be[be.length] = Ke ? te(Ee, ge, "$1") : Xe || _e;
    }), be;
  }, X = function(K, ne) {
    var de = K, be;
    if (ce(L, de) && (be = L[de], de = "%" + be[0] + "%"), ce(re, de)) {
      var _e = re[de];
      if (_e === ae && (_e = W(de)), typeof _e > "u" && !ne)
        throw new l("intrinsic " + K + " exists, but is not available. Please file an issue!");
      return {
        alias: be,
        name: de,
        value: _e
      };
    }
    throw new i("intrinsic " + K + " does not exist!");
  };
  return Ci = function(K, ne) {
    if (typeof K != "string" || K.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ne != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (Ve(/^%?[^%]*%?$/, K) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var de = De(K), be = de.length > 0 ? de[0] : "", _e = X("%" + be + "%", ne), Xe = _e.name, Ke = _e.value, Ee = !1, We = _e.alias;
    We && (be = We[0], fe(de, T([0, 1], We)));
    for (var at = 1, Aa = !0; at < de.length; at += 1) {
      var kt = de[at], Xa = he(kt, 0, 1), er = he(kt, -1);
      if ((Xa === '"' || Xa === "'" || Xa === "`" || er === '"' || er === "'" || er === "`") && Xa !== er)
        throw new i("property names with quotes must have matching quotes");
      if ((kt === "constructor" || !Aa) && (Ee = !0), be += "." + kt, Xe = "%" + be + "%", ce(re, Xe))
        Ke = re[Xe];
      else if (Ke != null) {
        if (!(kt in Ke)) {
          if (!ne)
            throw new l("base intrinsic for " + K + " exists, but the property is not available.");
          return;
        }
        if (k && at + 1 >= de.length) {
          var tr = k(Ke, kt);
          Aa = !!tr, Aa && "get" in tr && !("originalValue" in tr.get) ? Ke = tr.get : Ke = Ke[kt];
        } else
          Aa = ce(Ke, kt), Ke = Ke[kt];
        Aa && !Ee && (re[Xe] = Ke);
      }
    }
    return Ke;
  }, Ci;
}
var Ei, Fd;
function dp() {
  if (Fd) return Ei;
  Fd = 1;
  var e = /* @__PURE__ */ cs(), t = up(), a = t([e("%String.prototype.indexOf%")]);
  return Ei = function(r, n) {
    var o = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(r, !!n)
    );
    return typeof o == "function" && a(r, ".prototype.") > -1 ? t(
      /** @type {const} */
      [o]
    ) : o;
  }, Ei;
}
var $i, Td;
function cp() {
  if (Td) return $i;
  Td = 1;
  var e = /* @__PURE__ */ cs(), t = /* @__PURE__ */ dp(), a = /* @__PURE__ */ zo(), r = /* @__PURE__ */ Er(), n = e("%Map%", !0), o = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), d = t("Map.prototype.size", !0);
  return $i = !!n && /** @type {Exclude<import('.'), false>} */
  function() {
    var c, f = {
      assert: function(y) {
        if (!f.has(y))
          throw new r("Side channel does not contain " + a(y));
      },
      delete: function(y) {
        if (c) {
          var p = u(c, y);
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
  }, $i;
}
var Bi, Nd;
function cw() {
  if (Nd) return Bi;
  Nd = 1;
  var e = /* @__PURE__ */ cs(), t = /* @__PURE__ */ dp(), a = /* @__PURE__ */ zo(), r = cp(), n = /* @__PURE__ */ Er(), o = e("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), d = t("WeakMap.prototype.delete", !0);
  return Bi = o ? (
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
          return o && p && (typeof p == "object" || typeof p == "function") && c ? u(c, p) : !!f && f.has(p);
        },
        set: function(p, g) {
          o && p && (typeof p == "object" || typeof p == "function") ? (c || (c = new o()), l(c, p, g)) : r && (f || (f = r()), f.set(p, g));
        }
      };
      return y;
    })
  ) : r, Bi;
}
var Di, Vd;
function fp() {
  if (Vd) return Di;
  Vd = 1;
  var e = /* @__PURE__ */ Er(), t = /* @__PURE__ */ zo(), a = N0(), r = cp(), n = cw(), o = n || r || a;
  return Di = function() {
    var i, l = {
      assert: function(u) {
        if (!l.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!i && i.delete(u);
      },
      get: function(u) {
        return i && i.get(u);
      },
      has: function(u) {
        return !!i && i.has(u);
      },
      set: function(u, d) {
        i || (i = o()), i.set(u, d);
      }
    };
    return l;
  }, Di;
}
var Mi, Rd;
function fs() {
  if (Rd) return Mi;
  Rd = 1;
  var e = String.prototype.replace, t = /%20/g, a = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Mi = {
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
  }, Mi;
}
var Pi, Ld;
function pp() {
  if (Ld) return Pi;
  Ld = 1;
  var e = /* @__PURE__ */ fs(), t = fp(), a = Object.prototype.hasOwnProperty, r = Array.isArray, n = t(), o = function(A, C) {
    return n.set(A, C), A;
  }, i = function(A) {
    return n.has(A);
  }, l = function(A) {
    return n.get(A);
  }, u = function(A, C) {
    n.set(A, C);
  }, d = (function() {
    for (var A = [], C = 0; C < 256; ++C)
      A[A.length] = "%" + ((C < 16 ? "0" : "") + C.toString(16)).toUpperCase();
    return A;
  })(), c = function(A) {
    for (; A.length > 1; ) {
      var C = A.pop(), E = C.obj[C.prop];
      if (r(E)) {
        for (var D = [], R = 0; R < E.length; ++R)
          typeof E[R] < "u" && (D[D.length] = E[R]);
        C.obj[C.prop] = D;
      }
    }
  }, f = function(A, C) {
    for (var E = C && C.plainObjects ? { __proto__: null } : {}, D = 0; D < A.length; ++D)
      typeof A[D] < "u" && (E[D] = A[D]);
    return E;
  }, y = function A(C, E, D) {
    if (!E)
      return C;
    if (typeof E != "object" && typeof E != "function") {
      if (r(C)) {
        var R = C.length;
        if (D && typeof D.arrayLimit == "number" && R > D.arrayLimit)
          return o(f(C.concat(E), D), R);
        C[R] = E;
      } else if (C && typeof C == "object")
        if (i(C)) {
          var oe = l(C) + 1;
          C[oe] = E, u(C, oe);
        } else {
          if (D && D.strictMerge)
            return [C, E];
          (D && (D.plainObjects || D.allowPrototypes) || !a.call(Object.prototype, E)) && (C[E] = !0);
        }
      else
        return [C, E];
      return C;
    }
    if (!C || typeof C != "object") {
      if (i(E)) {
        for (var ae = Object.keys(E), H = D && D.plainObjects ? { __proto__: null, 0: C } : { 0: C }, re = 0; re < ae.length; re++) {
          var j = parseInt(ae[re], 10);
          H[j + 1] = E[ae[re]];
        }
        return o(H, l(E) + 1);
      }
      var W = [C].concat(E);
      return D && typeof D.arrayLimit == "number" && W.length > D.arrayLimit ? o(f(W, D), W.length - 1) : W;
    }
    var L = C;
    return r(C) && !r(E) && (L = f(C, D)), r(C) && r(E) ? (E.forEach(function(G, ce) {
      if (a.call(C, ce)) {
        var T = C[ce];
        T && typeof T == "object" && G && typeof G == "object" ? C[ce] = A(T, G, D) : C[C.length] = G;
      } else
        C[ce] = G;
    }), C) : Object.keys(E).reduce(function(G, ce) {
      var T = E[ce];
      if (a.call(G, ce) ? G[ce] = A(G[ce], T, D) : G[ce] = T, i(E) && !i(G) && o(G, l(E)), i(G)) {
        var fe = parseInt(ce, 10);
        String(fe) === ce && fe >= 0 && fe > l(G) && u(G, fe);
      }
      return G;
    }, L);
  }, p = function(A, C) {
    return Object.keys(C).reduce(function(E, D) {
      return E[D] = C[D], E;
    }, A);
  }, g = function(A, C, E) {
    var D = A.replace(/\+/g, " ");
    if (E === "iso-8859-1")
      return D.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(D);
    } catch {
      return D;
    }
  }, h = 1024, b = function(A, C, E, D, R) {
    if (A.length === 0)
      return A;
    var oe = A;
    if (typeof A == "symbol" ? oe = Symbol.prototype.toString.call(A) : typeof A != "string" && (oe = String(A)), E === "iso-8859-1")
      return escape(oe).replace(/%u[0-9a-f]{4}/gi, function(G) {
        return "%26%23" + parseInt(G.slice(2), 16) + "%3B";
      });
    for (var ae = "", H = 0; H < oe.length; H += h) {
      for (var re = oe.length >= h ? oe.slice(H, H + h) : oe, j = [], W = 0; W < re.length; ++W) {
        var L = re.charCodeAt(W);
        if (L === 45 || L === 46 || L === 95 || L === 126 || L >= 48 && L <= 57 || L >= 65 && L <= 90 || L >= 97 && L <= 122 || R === e.RFC1738 && (L === 40 || L === 41)) {
          j[j.length] = re.charAt(W);
          continue;
        }
        if (L < 128) {
          j[j.length] = d[L];
          continue;
        }
        if (L < 2048) {
          j[j.length] = d[192 | L >> 6] + d[128 | L & 63];
          continue;
        }
        if (L < 55296 || L >= 57344) {
          j[j.length] = d[224 | L >> 12] + d[128 | L >> 6 & 63] + d[128 | L & 63];
          continue;
        }
        W += 1, L = 65536 + ((L & 1023) << 10 | re.charCodeAt(W) & 1023), j[j.length] = d[240 | L >> 18] + d[128 | L >> 12 & 63] + d[128 | L >> 6 & 63] + d[128 | L & 63];
      }
      ae += j.join("");
    }
    return ae;
  }, w = function(A) {
    for (var C = [{ obj: { o: A }, prop: "o" }], E = [], D = 0; D < C.length; ++D)
      for (var R = C[D], oe = R.obj[R.prop], ae = Object.keys(oe), H = 0; H < ae.length; ++H) {
        var re = ae[H], j = oe[re];
        typeof j == "object" && j !== null && E.indexOf(j) === -1 && (C[C.length] = { obj: oe, prop: re }, E[E.length] = j);
      }
    return c(C), A;
  }, k = function(A) {
    return Object.prototype.toString.call(A) === "[object RegExp]";
  }, S = function(A) {
    return !A || typeof A != "object" ? !1 : !!(A.constructor && A.constructor.isBuffer && A.constructor.isBuffer(A));
  }, z = function(A, C, E, D) {
    if (i(A)) {
      var R = l(A) + 1;
      return A[R] = C, u(A, R), A;
    }
    var oe = [].concat(A, C);
    return oe.length > E ? o(f(oe, { plainObjects: D }), oe.length - 1) : oe;
  }, $ = function(A, C) {
    if (r(A)) {
      for (var E = [], D = 0; D < A.length; D += 1)
        E[E.length] = C(A[D]);
      return E;
    }
    return C(A);
  };
  return Pi = {
    arrayToObject: f,
    assign: p,
    combine: z,
    compact: w,
    decode: g,
    encode: b,
    isBuffer: S,
    isOverflow: i,
    isRegExp: k,
    markOverflow: o,
    maybeMap: $,
    merge: y
  }, Pi;
}
var ji, Ud;
function fw() {
  if (Ud) return ji;
  Ud = 1;
  var e = fp(), t = /* @__PURE__ */ pp(), a = /* @__PURE__ */ fs(), r = Object.prototype.hasOwnProperty, n = {
    brackets: function(h) {
      return h + "[]";
    },
    comma: "comma",
    indices: function(h, b) {
      return h + "[" + b + "]";
    },
    repeat: function(h) {
      return h;
    }
  }, o = Array.isArray, i = Array.prototype.push, l = function(h, b) {
    i.apply(h, o(b) ? b : [b]);
  }, u = Date.prototype.toISOString, d = a.default, c = {
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
      return u.call(h);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(h) {
    return typeof h == "string" || typeof h == "number" || typeof h == "boolean" || typeof h == "symbol" || typeof h == "bigint";
  }, y = {}, p = function h(b, w, k, S, z, $, A, C, E, D, R, oe, ae, H, re, j, W, L) {
    for (var G = b, ce = L, T = 0, fe = !1; (ce = ce.get(y)) !== void 0 && !fe; ) {
      var te = ce.get(b);
      if (T += 1, typeof te < "u") {
        if (te === T)
          throw new RangeError("Cyclic object value");
        fe = !0;
      }
      typeof ce.get(y) > "u" && (T = 0);
    }
    if (typeof D == "function" ? G = D(w, G) : G instanceof Date ? G = ae(G) : k === "comma" && o(G) && (G = t.maybeMap(G, function(Ke) {
      return Ke instanceof Date ? ae(Ke) : Ke;
    })), G === null) {
      if ($)
        return E && !j ? E(w, c.encoder, W, "key", H) : w;
      G = "";
    }
    if (f(G) || t.isBuffer(G)) {
      if (E) {
        var he = j ? w : E(w, c.encoder, W, "key", H);
        return [re(he) + "=" + re(E(G, c.encoder, W, "value", H))];
      }
      return [re(w) + "=" + re(String(G))];
    }
    var Ve = [];
    if (typeof G > "u")
      return Ve;
    var Oe;
    if (k === "comma" && o(G))
      j && E && (G = t.maybeMap(G, E)), Oe = [{ value: G.length > 0 ? G.join(",") || null : void 0 }];
    else if (o(D))
      Oe = D;
    else {
      var ge = Object.keys(G);
      Oe = R ? ge.sort(R) : ge;
    }
    var De = C ? String(w).replace(/\./g, "%2E") : String(w), X = S && o(G) && G.length === 1 ? De + "[]" : De;
    if (z && o(G) && G.length === 0)
      return X + "[]";
    for (var K = 0; K < Oe.length; ++K) {
      var ne = Oe[K], de = typeof ne == "object" && ne && typeof ne.value < "u" ? ne.value : G[ne];
      if (!(A && de === null)) {
        var be = oe && C ? String(ne).replace(/\./g, "%2E") : String(ne), _e = o(G) ? typeof k == "function" ? k(X, be) : X : X + (oe ? "." + be : "[" + be + "]");
        L.set(b, T);
        var Xe = e();
        Xe.set(y, L), l(Ve, h(
          de,
          _e,
          k,
          S,
          z,
          $,
          A,
          C,
          k === "comma" && j && o(G) ? null : E,
          D,
          R,
          oe,
          ae,
          H,
          re,
          j,
          W,
          Xe
        ));
      }
    }
    return Ve;
  }, g = function(h) {
    if (!h)
      return c;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.encodeDotInKeys < "u" && typeof h.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.encoder !== null && typeof h.encoder < "u" && typeof h.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var b = h.charset || c.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var w = a.default;
    if (typeof h.format < "u") {
      if (!r.call(a.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      w = h.format;
    }
    var k = a.formatters[w], S = c.filter;
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
      charset: b,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? c.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : c.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : c.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : c.encodeValuesOnly,
      filter: S,
      format: w,
      formatter: k,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return ji = function(h, b) {
    var w = h, k = g(b), S, z;
    typeof k.filter == "function" ? (z = k.filter, w = z("", w)) : o(k.filter) && (z = k.filter, S = z);
    var $ = [];
    if (typeof w != "object" || w === null)
      return "";
    var A = n[k.arrayFormat], C = A === "comma" && k.commaRoundTrip;
    S || (S = Object.keys(w)), k.sort && S.sort(k.sort);
    for (var E = e(), D = 0; D < S.length; ++D) {
      var R = S[D], oe = w[R];
      k.skipNulls && oe === null || l($, p(
        oe,
        R,
        A,
        C,
        k.allowEmptyArrays,
        k.strictNullHandling,
        k.skipNulls,
        k.encodeDotInKeys,
        k.encode ? k.encoder : null,
        k.filter,
        k.sort,
        k.allowDots,
        k.serializeDate,
        k.format,
        k.formatter,
        k.encodeValuesOnly,
        k.charset,
        E
      ));
    }
    var ae = $.join(k.delimiter), H = k.addQueryPrefix === !0 ? "?" : "";
    return k.charsetSentinel && (k.charset === "iso-8859-1" ? H += "utf8=%26%2310003%3B&" : H += "utf8=%E2%9C%93&"), ae.length > 0 ? H + ae : "";
  }, ji;
}
var Ii, Wd;
function pw() {
  if (Wd) return Ii;
  Wd = 1;
  var e = /* @__PURE__ */ pp(), t = Object.prototype.hasOwnProperty, a = Array.isArray, r = {
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
  }, i = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", u = function(p, g) {
    var h = { __proto__: null }, b = g.ignoreQueryPrefix ? p.replace(/^\?/, "") : p;
    b = b.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var w = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit, k = b.split(
      g.delimiter,
      g.throwOnLimitExceeded && typeof w < "u" ? w + 1 : w
    );
    if (g.throwOnLimitExceeded && typeof w < "u" && k.length > w)
      throw new RangeError("Parameter limit exceeded. Only " + w + " parameter" + (w === 1 ? "" : "s") + " allowed.");
    var S = -1, z, $ = g.charset;
    if (g.charsetSentinel)
      for (z = 0; z < k.length; ++z)
        k[z].indexOf("utf8=") === 0 && (k[z] === l ? $ = "utf-8" : k[z] === i && ($ = "iso-8859-1"), S = z, z = k.length);
    for (z = 0; z < k.length; ++z)
      if (z !== S) {
        var A = k[z], C = A.indexOf("]="), E = C === -1 ? A.indexOf("=") : C + 1, D, R;
        if (E === -1 ? (D = g.decoder(A, r.decoder, $, "key"), R = g.strictNullHandling ? null : "") : (D = g.decoder(A.slice(0, E), r.decoder, $, "key"), D !== null && (R = e.maybeMap(
          o(
            A.slice(E + 1),
            g,
            a(h[D]) ? h[D].length : 0
          ),
          function(ae) {
            return g.decoder(ae, r.decoder, $, "value");
          }
        ))), R && g.interpretNumericEntities && $ === "iso-8859-1" && (R = n(String(R))), A.indexOf("[]=") > -1 && (R = a(R) ? [R] : R), g.comma && a(R) && R.length > g.arrayLimit) {
          if (g.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + g.arrayLimit + " element" + (g.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          R = e.combine([], R, g.arrayLimit, g.plainObjects);
        }
        if (D !== null) {
          var oe = t.call(h, D);
          oe && (g.duplicates === "combine" || A.indexOf("[]=") > -1) ? h[D] = e.combine(
            h[D],
            R,
            g.arrayLimit,
            g.plainObjects
          ) : (!oe || g.duplicates === "last") && (h[D] = R);
        }
      }
    return h;
  }, d = function(p, g, h, b) {
    var w = 0;
    if (p.length > 0 && p[p.length - 1] === "[]") {
      var k = p.slice(0, -1).join("");
      w = Array.isArray(g) && g[k] ? g[k].length : 0;
    }
    for (var S = b ? g : o(g, h, w), z = p.length - 1; z >= 0; --z) {
      var $, A = p[z];
      if (A === "[]" && h.parseArrays)
        e.isOverflow(S) ? $ = S : $ = h.allowEmptyArrays && (S === "" || h.strictNullHandling && S === null) ? [] : e.combine(
          [],
          S,
          h.arrayLimit,
          h.plainObjects
        );
      else {
        $ = h.plainObjects ? { __proto__: null } : {};
        var C = A.charAt(0) === "[" && A.charAt(A.length - 1) === "]" ? A.slice(1, -1) : A, E = h.decodeDotInKeys ? C.replace(/%2E/g, ".") : C, D = parseInt(E, 10), R = !isNaN(D) && A !== E && String(D) === E && D >= 0 && h.parseArrays;
        if (!h.parseArrays && E === "")
          $ = { 0: S };
        else if (R && D < h.arrayLimit)
          $ = [], $[D] = S;
        else {
          if (R && h.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          R ? ($[D] = S, e.markOverflow($, D)) : E !== "__proto__" && ($[E] = S);
        }
      }
      S = $;
    }
    return S;
  }, c = function(p, g) {
    var h = g.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p;
    if (g.depth <= 0)
      return !g.plainObjects && t.call(Object.prototype, h) && !g.allowPrototypes ? void 0 : [h];
    var b = /(\[[^[\]]*])/, w = /(\[[^[\]]*])/g, k = b.exec(h), S = k ? h.slice(0, k.index) : h, z = [];
    if (S) {
      if (!g.plainObjects && t.call(Object.prototype, S) && !g.allowPrototypes)
        return;
      z[z.length] = S;
    }
    for (var $ = 0; (k = w.exec(h)) !== null && $ < g.depth; ) {
      $ += 1;
      var A = k[1].slice(1, -1);
      if (!g.plainObjects && t.call(Object.prototype, A) && !g.allowPrototypes)
        return;
      z[z.length] = k[1];
    }
    if (k) {
      if (g.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + g.depth + " and strictDepth is true");
      z[z.length] = "[" + h.slice(k.index) + "]";
    }
    return z;
  }, f = function(p, g, h, b) {
    if (p) {
      var w = c(p, h);
      if (w)
        return d(w, g, h, b);
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
    var b = typeof p.allowDots > "u" ? p.decodeDotInKeys === !0 ? !0 : r.allowDots : !!p.allowDots;
    return {
      allowDots: b,
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
  return Ii = function(p, g) {
    var h = y(g);
    if (p === "" || p === null || typeof p > "u")
      return h.plainObjects ? { __proto__: null } : {};
    for (var b = typeof p == "string" ? u(p, h) : p, w = h.plainObjects ? { __proto__: null } : {}, k = Object.keys(b), S = 0; S < k.length; ++S) {
      var z = k[S], $ = f(z, b[z], h, typeof p == "string");
      w = e.merge(w, $, h);
    }
    return h.allowSparse === !0 ? w : e.compact(w);
  }, Ii;
}
var Fi, Kd;
function yw() {
  if (Kd) return Fi;
  Kd = 1;
  var e = /* @__PURE__ */ fw(), t = /* @__PURE__ */ pw(), a = /* @__PURE__ */ fs();
  return Fi = {
    formats: a,
    parse: t,
    stringify: e
  }, Fi;
}
var mw = /* @__PURE__ */ yw();
const yp = /* @__PURE__ */ P0(mw);
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
class hw {
  static __container_entry_key = "ToastService";
  success(t, a) {
    console.log("Success:", t, a);
  }
  error(t, a) {
    console.error("Error:", t, a);
  }
}
const Xn = dt.proxy(hw);
class vw {
  static __container_entry_key = "FetchService";
  async handleError(t) {
    if (t.headers.get("Content-Type")?.includes("json")) {
      const a = await t.json().catch(() => ({ message: $t("Internal Server Error") }));
      return a.message && Xn.error(a.message), a;
    }
    return Xn.error($t("Internal Server Error")), {
      message: $t("Internal Server Error")
    };
  }
  buildUrl(t, a) {
    if (!a)
      return t;
    const r = yp.stringify(a, { arrayFormat: "brackets" });
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
const At = dt.proxy(vw), Ti = /* @__PURE__ */ new Set();
function gw(e, t = {}) {
  const a = t.key || e, r = M0(a, {
    default: () => ({
      items: [],
      page: 1,
      total: 0,
      total_pages: 1
    })
  }), n = F(!1), o = Pa(t.page || 1), i = Pa(t.query || {}), l = Pa(t.limit || 10), u = Pa(t.orderBy || null), d = Pa(t.orderDirection || null), c = M(() => r.value.total), f = M(() => r.value.total_pages), y = M(() => {
    let w = Array.isArray(r.value.items) ? r.value.items : [];
    return t.refine && (w = t.refine(w)), t.serialize ? w.map((k) => t.serialize(k)) : w;
  });
  async function p() {
    if (n.value) return;
    n.value = !0;
    const w = JSON.parse(JSON.stringify({
      ...i.value,
      page: o.value,
      limit: l.value,
      orderBy: u.value ? u.value : void 0,
      orderDirection: d.value ? d.value : void 0
    })), [k, S] = await At.try(e, {
      method: "GET",
      query: w
    });
    if (k) {
      n.value = !1, console.error(k);
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
  function h(w, k) {
    JSON.stringify(w) === JSON.stringify(k) || g();
  }
  ve([o, l], p), ve([u, d], g, { deep: !0 }), Jf(
    () => JSON.parse(JSON.stringify(i.value)),
    h,
    {
      debounce: t.debounce || 1e3
    }
  );
  async function b() {
    if (!Ti.has(a) && y.value.length) {
      Ti.add(a);
      return;
    }
    Ti.add(a), await p();
  }
  return t.immediate !== !1 && (qe(b), Ik(b)), {
    page: o,
    limit: l,
    orderBy: u,
    orderDirection: d,
    total: c,
    totalPages: f,
    items: y,
    loading: n,
    load: p,
    reset: g,
    query: i,
    hydrate: b
  };
}
let dr;
function bw(e) {
  dr = {
    ...dr,
    ...e
  };
}
// @__NO_SIDE_EFFECTS__
function $r(e) {
  return {
    lang: e?.lang ?? dr?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? dr?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? dr?.abortPipeEarly
  };
}
function kw() {
  dr = void 0;
}
let an;
function ww(e, t) {
  an || (an = /* @__PURE__ */ new Map()), an.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function mp(e) {
  return an?.get(e);
}
function xw(e) {
  an?.delete(e);
}
let rn;
function zw(e, t) {
  rn || (rn = /* @__PURE__ */ new Map()), rn.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function hp(e) {
  return rn?.get(e);
}
function _w(e) {
  rn?.delete(e);
}
let ja;
function Sw(e, t, a) {
  ja || (ja = /* @__PURE__ */ new Map()), ja.get(e) || ja.set(e, /* @__PURE__ */ new Map()), ja.get(e).set(a, t);
}
// @__NO_SIDE_EFFECTS__
function vp(e, t) {
  return ja?.get(e)?.get(t);
}
function qw(e, t) {
  ja?.get(e)?.delete(t);
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function B(e, t, a, r, n) {
  const o = n && "input" in n ? n.input : a.value, i = n?.expected ?? e.expects ?? null, l = n?.received ?? /* @__PURE__ */ Ue(o), u = {
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
  }, d = e.kind === "schema", c = n?.message ?? e.message ?? /* @__PURE__ */ vp(e.reference, u.lang) ?? (d ? /* @__PURE__ */ hp(u.lang) : null) ?? r.message ?? /* @__PURE__ */ mp(u.lang);
  c !== void 0 && (u.message = typeof c == "function" ? c(u) : c), d && (a.typed = !1), a.issues ? a.issues.push(u) : a.issues = [u];
}
// @__NO_SIDE_EFFECTS__
function eo(e) {
  return {
    typed: e.typed,
    value: e.value,
    issues: e.issues && [...e.issues]
  };
}
let Ni;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return Ni || (Ni = new TextEncoder()), Ni.encode(e).length;
}
let Vi;
// @__NO_SIDE_EFFECTS__
function bn(e) {
  Vi || (Vi = new Intl.Segmenter());
  const t = Vi.segment(e);
  let a = 0;
  for (const r of t) a++;
  return a;
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
  if ("pipe" in e) {
    const a = [];
    for (let r = e.pipe.length - 1; r >= 0; r--) {
      const n = e.pipe[r];
      if (n.kind === "schema" && "pipe" in n) a.push(n);
      else if (n.kind === "metadata" && n.type === t) return n[t];
    }
    for (const r of a) {
      const n = /* @__PURE__ */ So(r, t);
      if (n !== void 0) return n;
    }
  }
}
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ $r());
    }
  };
}
let Ur;
// @__NO_SIDE_EFFECTS__
function kn(e, t) {
  Ur || (Ur = /* @__PURE__ */ new Map()), Ur.get(e) || Ur.set(e, new Intl.Segmenter(e, { granularity: "word" }));
  const a = Ur.get(e).segment(t);
  let r = 0;
  for (const n of a) n.isWordLike && r++;
  return r;
}
const Ow = /\D/gu;
// @__NO_SIDE_EFFECTS__
function ps(e) {
  const t = e.replace(Ow, "");
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
function Wa(e, t) {
  return Object.hasOwn(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  const a = [...new Set(e)];
  return a.length > 1 ? `(${a.join(` ${t} `)})` : a[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function Aw(e, t) {
  const a = {};
  for (const r of e) a[r] = t;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Cw(e) {
  const t = {};
  for (const a of e) Object.assign(t, a.entries);
  return t;
}
// @__NO_SIDE_EFFECTS__
function qo(e) {
  if (e.path) {
    let t = "";
    for (const a of e.path) if (typeof a.key == "string" || typeof a.key == "number") t ? t += `.${a.key}` : t += a.key;
    else return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function Ew(e, t) {
  return t.kind === e;
}
// @__NO_SIDE_EFFECTS__
function $w(e, t) {
  return t.type === e;
}
// @__NO_SIDE_EFFECTS__
function Bw(e) {
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
function gp(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: gp,
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
function bp(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: bp,
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
function kp() {
  return {
    kind: "transformation",
    type: "await",
    reference: kp,
    async: !0,
    async "~run"(e) {
      return e.value = await e.value, e;
    }
  };
}
const wp = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu, xp = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u, zp = /^[a-z][\da-z]*$/u, _p = /^[+-]?(?:\d*\.)?\d+$/u, Sp = /^\d+$/u, qp = /^(?=.{1,253}$)(?:(?![Xx][Nn]--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/u, Op = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu, Ap = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$", "u"), Cp = /^(?:0[hx])?[\da-fA-F]+$/u, Ep = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u, $p = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u, Bp = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u, Dp = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, Mp = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, Pp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u, jp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u, Ip = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u, Fp = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, Tp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z| ?[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u, Np = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u, Vp = /^(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?$/u, Rp = /^(?:[A-Z]{2}[A-Z\d]{3}\d{7}|[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5})$/u, Lp = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$/u, Up = /^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Wp = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$|^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Kp = /^[\w-]+$/u, Gp = /^(?:0o)?[0-7]+$/u, Hp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Yp = /^[\da-z]+(?:[-_][\da-z]+)*$/u, Zp = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u, Qp = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
// @__NO_SIDE_EFFECTS__
function Jp(e) {
  return {
    kind: "validation",
    type: "base64",
    reference: Jp,
    async: !1,
    expects: null,
    requirement: wp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Base64", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xp(e) {
  return {
    kind: "validation",
    type: "bic",
    reference: Xp,
    async: !1,
    expects: null,
    requirement: xp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "BIC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ey(e) {
  return {
    kind: "transformation",
    type: "brand",
    reference: ey,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ty(e, t) {
  return {
    kind: "validation",
    type: "bytes",
    reference: ty,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ gn(a.value);
        n !== this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ay(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: ay,
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
function ry(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: ry,
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
function ny(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: ny,
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
function oy(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: oy,
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
const Dw = /^(?:\d{13,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u, Mw = /[- ]/gu, Pw = [
  /^3[47]\d{13}$/u,
  /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
  /^6(?:011|5\d{2})\d{12,15}$/u,
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  /^5[1-5]\d{2}|(?:222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
  /^4\d{12}(?:\d{3,6})?$/u
];
// @__NO_SIDE_EFFECTS__
function iy(e) {
  return {
    kind: "validation",
    type: "credit_card",
    reference: iy,
    async: !1,
    expects: null,
    requirement(t) {
      let a;
      return Dw.test(t) && (a = t.replace(Mw, "")) && Pw.some((r) => r.test(a)) && /* @__PURE__ */ ps(a);
    },
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "credit card", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ly(e) {
  return {
    kind: "validation",
    type: "cuid2",
    reference: ly,
    async: !1,
    expects: null,
    requirement: zp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Cuid2", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sy(e) {
  return {
    kind: "validation",
    type: "decimal",
    reference: sy,
    async: !1,
    expects: null,
    requirement: _p,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "decimal", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uy(e) {
  return {
    kind: "metadata",
    type: "description",
    reference: uy,
    description: e
  };
}
// @__NO_SIDE_EFFECTS__
function dy(e) {
  return {
    kind: "validation",
    type: "digits",
    reference: dy,
    async: !1,
    expects: null,
    requirement: Sp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "digits", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cy(e) {
  return {
    kind: "validation",
    type: "domain",
    reference: cy,
    expects: null,
    async: !1,
    requirement: qp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "domain", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fy(e) {
  return {
    kind: "validation",
    type: "email",
    reference: fy,
    expects: null,
    async: !1,
    requirement: Op,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "email", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function py(e) {
  return {
    kind: "validation",
    type: "emoji",
    reference: py,
    async: !1,
    expects: null,
    requirement: Ap,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "emoji", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yy(e) {
  return {
    kind: "validation",
    type: "empty",
    reference: yy,
    async: !1,
    expects: "0",
    message: e,
    "~run"(t, a) {
      return t.typed && t.value.length > 0 && B(this, "length", t, a, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function my(e, t) {
  return {
    kind: "validation",
    type: "ends_with",
    reference: my,
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
function hy(e, t) {
  return {
    kind: "validation",
    type: "entries",
    reference: hy,
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
function vy(e, t) {
  return {
    kind: "validation",
    type: "every_item",
    reference: vy,
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
function gy(e) {
  return {
    kind: "metadata",
    type: "examples",
    reference: gy,
    examples: e
  };
}
// @__NO_SIDE_EFFECTS__
function by(e, t) {
  const a = /* @__PURE__ */ Ue(e);
  return {
    kind: "validation",
    type: "excludes",
    reference: by,
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
function ky(e) {
  return {
    kind: "transformation",
    type: "filter_items",
    reference: ky,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.filter(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wy(e) {
  return {
    kind: "transformation",
    type: "find_item",
    reference: wy,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.find(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xy(e) {
  return {
    kind: "validation",
    type: "finite",
    reference: xy,
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
function zy(e) {
  return {
    kind: "transformation",
    type: "flavor",
    reference: zy,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _y(e, t) {
  return {
    kind: "validation",
    type: "graphemes",
    reference: _y,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ bn(a.value);
        n !== this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sy(e, t) {
  return {
    kind: "validation",
    type: "gt_value",
    reference: Sy,
    async: !1,
    expects: `>${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Ue(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value > this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qy(e, t) {
  return {
    kind: "transformation",
    type: "guard",
    reference: qy,
    async: !1,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement(a.value) && (B(this, "input", a, r), a.typed = !1), a;
    }
  };
}
const jw = {
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
function Oy(e, t) {
  return {
    kind: "validation",
    type: "hash",
    reference: Oy,
    expects: null,
    async: !1,
    requirement: RegExp(e.map((a) => `^[a-fA-F0-9]{${jw[a]}}$`).join("|"), "u"),
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement.test(a.value) && B(this, "hash", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ay(e) {
  return {
    kind: "validation",
    type: "hexadecimal",
    reference: Ay,
    async: !1,
    expects: null,
    requirement: Cp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "hexadecimal", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cy(e) {
  return {
    kind: "validation",
    type: "hex_color",
    reference: Cy,
    async: !1,
    expects: null,
    requirement: Ep,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "hex color", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ey(e) {
  return {
    kind: "validation",
    type: "imei",
    reference: Ey,
    async: !1,
    expects: null,
    requirement(t) {
      return $p.test(t) && /* @__PURE__ */ ps(t);
    },
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "IMEI", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $y(e, t) {
  const a = /* @__PURE__ */ Ue(e);
  return {
    kind: "validation",
    type: "includes",
    reference: $y,
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
function ys(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: ys,
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
function By(e) {
  return {
    kind: "validation",
    type: "ip",
    reference: By,
    async: !1,
    expects: null,
    requirement: Mp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IP", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dy(e) {
  return {
    kind: "validation",
    type: "ipv4",
    reference: Dy,
    async: !1,
    expects: null,
    requirement: Bp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IPv4", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function My(e) {
  return {
    kind: "validation",
    type: "ipv6",
    reference: My,
    async: !1,
    expects: null,
    requirement: Dp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IPv6", t, a), t;
    }
  };
}
function Iw(e) {
  const t = e.split("").map((r) => r === "X" ? 10 : parseInt(r));
  let a = 0;
  for (let r = 0; r < 10; r++) a += t[r] * (10 - r);
  return a % 11 === 0;
}
function Fw(e) {
  const t = e.split("").map((r) => parseInt(r));
  let a = 0;
  for (let r = 0; r < 13; r++) a += t[r] * (r % 2 === 0 ? 1 : 3);
  return a % 10 === 0;
}
const Tw = /[- ]/gu, Nw = /^\d{9}[\dX]$/u, Vw = /^\d{13}$/u;
// @__NO_SIDE_EFFECTS__
function Py(e) {
  return {
    kind: "validation",
    type: "isbn",
    reference: Py,
    async: !1,
    expects: null,
    requirement(t) {
      const a = t.replace(Tw, "");
      return Nw.test(a) ? Iw(a) : Vw.test(a) ? Fw(a) : !1;
    },
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement(t.value) && B(this, "ISBN", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jy(e) {
  return {
    kind: "validation",
    type: "isrc",
    reference: jy,
    async: !1,
    expects: null,
    requirement: Rp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "ISRC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Iy(e) {
  return {
    kind: "validation",
    type: "iso_date",
    reference: Iy,
    async: !1,
    expects: null,
    requirement: Pp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "date", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fy(e) {
  return {
    kind: "validation",
    type: "iso_date_time",
    reference: Fy,
    async: !1,
    expects: null,
    requirement: jp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "date-time", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ty(e) {
  return {
    kind: "validation",
    type: "iso_time",
    reference: Ty,
    async: !1,
    expects: null,
    requirement: Ip,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "time", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ny(e) {
  return {
    kind: "validation",
    type: "iso_time_second",
    reference: Ny,
    async: !1,
    expects: null,
    requirement: Fp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "time-second", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vy(e) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: Vy,
    async: !1,
    expects: null,
    requirement: Tp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "timestamp", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ry(e) {
  return {
    kind: "validation",
    type: "iso_week",
    reference: Ry,
    async: !1,
    expects: null,
    requirement: Np,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "week", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ly(e) {
  return {
    kind: "validation",
    type: "jws_compact",
    reference: Ly,
    async: !1,
    expects: null,
    requirement: Vp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "JWS compact", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uy(e, t) {
  return {
    kind: "validation",
    type: "length",
    reference: Uy,
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
function Wy(e, t) {
  return {
    kind: "validation",
    type: "lt_value",
    reference: Wy,
    async: !1,
    expects: `<${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Ue(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value < this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ky(e) {
  return {
    kind: "validation",
    type: "mac",
    reference: Ky,
    async: !1,
    expects: null,
    requirement: Wp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "MAC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gy(e) {
  return {
    kind: "validation",
    type: "mac48",
    reference: Gy,
    async: !1,
    expects: null,
    requirement: Lp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "48-bit MAC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hy(e) {
  return {
    kind: "validation",
    type: "mac64",
    reference: Hy,
    async: !1,
    expects: null,
    requirement: Up,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "64-bit MAC", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yy(e) {
  return {
    kind: "transformation",
    type: "map_items",
    reference: Yy,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.map(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zy(e, t) {
  return {
    kind: "validation",
    type: "max_bytes",
    reference: Zy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ gn(a.value);
        n > this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qy(e, t) {
  return {
    kind: "validation",
    type: "max_entries",
    reference: Qy,
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
function Jy(e, t) {
  return {
    kind: "validation",
    type: "max_graphemes",
    reference: Jy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ bn(a.value);
        n > this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xy(e, t) {
  return {
    kind: "validation",
    type: "max_length",
    reference: Xy,
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
function em(e, t) {
  return {
    kind: "validation",
    type: "max_size",
    reference: em,
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
function tm(e, t) {
  return {
    kind: "validation",
    type: "max_value",
    reference: tm,
    async: !1,
    expects: `<=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Ue(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value <= this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function am(e, t, a) {
  return {
    kind: "validation",
    type: "max_words",
    reference: am,
    async: !1,
    expects: `<=${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ kn(this.locales, r.value);
        o > this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rm(e) {
  return {
    kind: "metadata",
    type: "metadata",
    reference: rm,
    metadata: e
  };
}
// @__NO_SIDE_EFFECTS__
function nm(e, t) {
  return {
    kind: "validation",
    type: "mime_type",
    reference: nm,
    async: !1,
    expects: /* @__PURE__ */ gt(e.map((a) => `"${a}"`), "|"),
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement.includes(a.value.type) && B(this, "MIME type", a, r, { received: `"${a.value.type}"` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function om(e, t) {
  return {
    kind: "validation",
    type: "min_bytes",
    reference: om,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ gn(a.value);
        n < this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function im(e, t) {
  return {
    kind: "validation",
    type: "min_entries",
    reference: im,
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
function lm(e, t) {
  return {
    kind: "validation",
    type: "min_graphemes",
    reference: lm,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ bn(a.value);
        n < this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sm(e, t) {
  return {
    kind: "validation",
    type: "min_length",
    reference: sm,
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
function um(e, t) {
  return {
    kind: "validation",
    type: "min_size",
    reference: um,
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
function dm(e, t) {
  return {
    kind: "validation",
    type: "min_value",
    reference: dm,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Ue(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(a.value >= this.requirement) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cm(e, t, a) {
  return {
    kind: "validation",
    type: "min_words",
    reference: cm,
    async: !1,
    expects: `>=${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ kn(this.locales, r.value);
        o < this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fm(e, t) {
  return {
    kind: "validation",
    type: "multiple_of",
    reference: fm,
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
function pm(e) {
  return {
    kind: "validation",
    type: "nanoid",
    reference: pm,
    async: !1,
    expects: null,
    requirement: Kp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Nano ID", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ym(e) {
  return {
    kind: "validation",
    type: "non_empty",
    reference: ym,
    async: !1,
    expects: "!0",
    message: e,
    "~run"(t, a) {
      return t.typed && t.value.length === 0 && B(this, "length", t, a, { received: "0" }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mm(e) {
  return {
    kind: "transformation",
    type: "normalize",
    reference: mm,
    async: !1,
    form: e,
    "~run"(t) {
      return t.value = t.value.normalize(this.form), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hm(e, t) {
  return {
    kind: "validation",
    type: "not_bytes",
    reference: hm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ gn(a.value);
        n === this.requirement && B(this, "bytes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vm(e, t) {
  return {
    kind: "validation",
    type: "not_entries",
    reference: vm,
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
function gm(e, t) {
  return {
    kind: "validation",
    type: "not_graphemes",
    reference: gm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      if (a.typed) {
        const n = /* @__PURE__ */ bn(a.value);
        n === this.requirement && B(this, "graphemes", a, r, { received: `${n}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bm(e, t) {
  return {
    kind: "validation",
    type: "not_length",
    reference: bm,
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
function km(e, t) {
  return {
    kind: "validation",
    type: "not_size",
    reference: km,
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
function wm(e, t) {
  return {
    kind: "validation",
    type: "not_value",
    reference: wm,
    async: !1,
    expects: e instanceof Date ? `!${e.toJSON()}` : `!${/* @__PURE__ */ Ue(e)}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && this.requirement <= a.value && this.requirement >= a.value && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xm(e, t) {
  return {
    kind: "validation",
    type: "not_values",
    reference: xm,
    async: !1,
    expects: `!${/* @__PURE__ */ gt(e.map((a) => a instanceof Date ? a.toJSON() : /* @__PURE__ */ Ue(a)), "|")}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && this.requirement.some((n) => n <= a.value && n >= a.value) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zm(e, t, a) {
  return {
    kind: "validation",
    type: "not_words",
    reference: zm,
    async: !1,
    expects: `!${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ kn(this.locales, r.value);
        o === this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _m(e) {
  return {
    kind: "validation",
    type: "octal",
    reference: _m,
    async: !1,
    expects: null,
    requirement: Gp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "octal", t, a), t;
    }
  };
}
const Gd = [
  !0,
  1,
  "true",
  "1",
  "yes",
  "y",
  "on",
  "enabled"
], Hd = [
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
function Sm(e, t) {
  const a = (l) => typeof l == "string" ? l.toLowerCase() : l, r = e?.truthy ?? Gd, n = e?.falsy ?? Hd, o = e?.truthy ? e.truthy.map(a) : Gd, i = e?.falsy ? e.falsy.map(a) : Hd;
  return {
    kind: "transformation",
    type: "parse_boolean",
    reference: Sm,
    expects: /* @__PURE__ */ gt([...r, ...n].map(Ue), "|"),
    config: e,
    message: t,
    async: !1,
    "~run"(l, u) {
      const d = a(l.value);
      return o.includes(d) ? l.value = !0 : i.includes(d) ? l.value = !1 : (B(this, "boolean", l, u), l.typed = !1), l;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qm(e, t) {
  return {
    kind: "transformation",
    type: "parse_json",
    reference: qm,
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
function Om(e, t) {
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
function Am(e, t, a) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: Am,
    async: !1,
    expects: null,
    paths: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      return (r.typed || /* @__PURE__ */ Om(r, e)) && !this.requirement(r.value) && B(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cm(e, t, a) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: Cm,
    async: !0,
    expects: null,
    paths: e,
    requirement: t,
    message: a,
    async "~run"(r, n) {
      return (r.typed || /* @__PURE__ */ Om(r, e)) && !await this.requirement(r.value) && B(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Em(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: Em,
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
function $m(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: $m,
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
function Bm(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Bm,
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
function Dm(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Dm,
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
function Mm() {
  return {
    kind: "transformation",
    type: "readonly",
    reference: Mm,
    async: !1,
    "~run"(e) {
      return e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pm(e, t) {
  return {
    kind: "transformation",
    type: "reduce_items",
    reference: Pm,
    async: !1,
    operation: e,
    initial: t,
    "~run"(a) {
      return a.value = a.value.reduce(this.operation, this.initial), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jm(e, t) {
  return {
    kind: "validation",
    type: "regex",
    reference: jm,
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
function Im(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Im,
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
function Fm(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Fm,
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
function Tm(e) {
  return {
    kind: "validation",
    type: "rfc_email",
    reference: Tm,
    expects: null,
    async: !1,
    requirement: Hp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "email", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nm(e) {
  return {
    kind: "validation",
    type: "safe_integer",
    reference: Nm,
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
function Vm(e, t) {
  return {
    kind: "validation",
    type: "size",
    reference: Vm,
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
function Rm(e) {
  return {
    kind: "validation",
    type: "slug",
    reference: Rm,
    async: !1,
    expects: null,
    requirement: Yp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "slug", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lm(e, t) {
  return {
    kind: "validation",
    type: "some_item",
    reference: Lm,
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
function Um(e) {
  return {
    kind: "transformation",
    type: "sort_items",
    reference: Um,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.sort(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wm(e, t) {
  return {
    kind: "validation",
    type: "starts_with",
    reference: Wm,
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
function Km(e, t) {
  return {
    kind: "transformation",
    type: "stringify_json",
    reference: Km,
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
function Gm(e) {
  return {
    kind: "metadata",
    type: "title",
    reference: Gm,
    title: e
  };
}
// @__NO_SIDE_EFFECTS__
function Hm(e) {
  return {
    kind: "transformation",
    type: "to_bigint",
    reference: Hm,
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
function Ym() {
  return {
    kind: "transformation",
    type: "to_boolean",
    reference: Ym,
    async: !1,
    "~run"(e) {
      return e.value = !!e.value, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zm(e) {
  return {
    kind: "transformation",
    type: "to_date",
    reference: Zm,
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
function Qm() {
  return {
    kind: "transformation",
    type: "to_lower_case",
    reference: Qm,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toLowerCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jm(e) {
  return {
    kind: "transformation",
    type: "to_max_value",
    reference: Jm,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value > this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xm(e) {
  return {
    kind: "transformation",
    type: "to_min_value",
    reference: Xm,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value < this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e) {
  return {
    kind: "transformation",
    type: "to_number",
    reference: eh,
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
function th(e) {
  return {
    kind: "transformation",
    type: "to_string",
    reference: th,
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
function ah() {
  return {
    kind: "transformation",
    type: "to_upper_case",
    reference: ah,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toUpperCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: vt,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rh(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: rh,
    async: !0,
    operation: e,
    async "~run"(t) {
      return t.value = await this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nh() {
  return {
    kind: "transformation",
    type: "trim",
    reference: nh,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trim(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oh() {
  return {
    kind: "transformation",
    type: "trim_end",
    reference: oh,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimEnd(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ih() {
  return {
    kind: "transformation",
    type: "trim_start",
    reference: ih,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimStart(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lh(e) {
  return {
    kind: "validation",
    type: "ulid",
    reference: lh,
    async: !1,
    expects: null,
    requirement: Zp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "ULID", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sh(e) {
  return {
    kind: "validation",
    type: "url",
    reference: sh,
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
function uh(e) {
  return {
    kind: "validation",
    type: "uuid",
    reference: uh,
    async: !1,
    expects: null,
    requirement: Qp,
    message: e,
    "~run"(t, a) {
      return t.typed && !this.requirement.test(t.value) && B(this, "UUID", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dh(e, t) {
  return {
    kind: "validation",
    type: "value",
    reference: dh,
    async: !1,
    expects: e instanceof Date ? e.toJSON() : /* @__PURE__ */ Ue(e),
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !(this.requirement <= a.value && this.requirement >= a.value) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ch(e, t) {
  return {
    kind: "validation",
    type: "values",
    reference: ch,
    async: !1,
    expects: `${/* @__PURE__ */ gt(e.map((a) => a instanceof Date ? a.toJSON() : /* @__PURE__ */ Ue(a)), "|")}`,
    requirement: e,
    message: t,
    "~run"(a, r) {
      return a.typed && !this.requirement.some((n) => n <= a.value && n >= a.value) && B(this, "value", a, r, { received: a.value instanceof Date ? a.value.toJSON() : /* @__PURE__ */ Ue(a.value) }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fh(e, t, a) {
  return {
    kind: "validation",
    type: "words",
    reference: fh,
    async: !1,
    expects: `${t}`,
    locales: e,
    requirement: t,
    message: a,
    "~run"(r, n) {
      if (r.typed) {
        const o = /* @__PURE__ */ kn(this.locales, r.value);
        o !== this.requirement && B(this, "words", r, n, { received: `${o}` });
      }
      return r;
    }
  };
}
function Rw(e, t) {
  const a = e["~run"]({ value: t }, { abortEarly: !0 }).issues;
  if (a) throw new oa(a);
}
var ph = class {
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
function Lw(e, t) {
  return {
    ...e,
    cacheConfig: t,
    cache: new ph(t),
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = this.cache.key(a.value, r);
      let o = this.cache.get(n);
      return o || this.cache.set(n, o = e["~run"](a, r)), /* @__PURE__ */ eo(o);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uw(e, t) {
  let a;
  return {
    ...e,
    async: !0,
    cacheConfig: t,
    cache: new ph(t),
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(r, n) {
      const o = this.cache.key(r.value, n), i = this.cache.get(o);
      if (i) return /* @__PURE__ */ eo(i);
      let l = a?.get(o);
      l || (a ??= /* @__PURE__ */ new Map(), l = Promise.resolve(e["~run"](r, n)), a.set(o, l));
      try {
        const u = await l;
        return this.cache.set(o, u), /* @__PURE__ */ eo(u);
      } finally {
        a?.delete(o);
      }
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ww(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
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
function bt(e, t, a) {
  return typeof e.fallback == "function" ? e.fallback(t, a) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function Kw(e, t) {
  return {
    ...e,
    fallback: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = e["~run"](a, r);
      return n.issues ? {
        typed: !0,
        value: /* @__PURE__ */ bt(this, n, r)
      } : n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gw(e, t) {
  return {
    ...e,
    fallback: t,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = await e["~run"](a, r);
      return n.issues ? {
        typed: !0,
        value: await /* @__PURE__ */ bt(this, n, r)
      } : n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kl(e) {
  const t = {};
  for (const a of e) if (a.path) {
    const r = /* @__PURE__ */ qo(a);
    r ? (t.nested || (t.nested = {}), t.nested[r] ? t.nested[r].push(a.message) : t.nested[r] = [a.message]) : t.other ? t.other.push(a.message) : t.other = [a.message];
  } else t.root ? t.root.push(a.message) : t.root = [a.message];
  return t;
}
// @__NO_SIDE_EFFECTS__
function Hw(e, t) {
  return {
    ...e,
    "~run"(a, r) {
      const n = a.issues && [...a.issues];
      if (a = e["~run"](a, r), a.issues) {
        for (const o of a.issues) if (!n?.includes(o)) {
          let i = a.value;
          for (const l of t) {
            const u = i[l], d = {
              type: "unknown",
              origin: "value",
              input: i,
              key: l,
              value: u
            };
            if (o.path ? o.path.push(d) : o.path = [d], !u) break;
            i = u;
          }
        }
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yw(e, t) {
  return {
    ...e,
    async: !0,
    async "~run"(a, r) {
      const n = a.issues && [...a.issues];
      if (a = await e["~run"](a, r), a.issues) {
        for (const o of a.issues) if (!n?.includes(o)) {
          let i = a.value;
          for (const l of t) {
            const u = i[l], d = {
              type: "unknown",
              origin: "value",
              input: i,
              key: l,
              value: u
            };
            if (o.path ? o.path.push(d) : o.path = [d], !u) break;
            i = u;
          }
        }
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Je(e, t, a) {
  return typeof e.default == "function" ? e.default(t, a) : e.default;
}
// @__NO_SIDE_EFFECTS__
function wl(e) {
  if ("entries" in e) {
    const t = {};
    for (const a in e.entries) t[a] = /* @__PURE__ */ wl(e.entries[a]);
    return t;
  }
  return "items" in e ? e.items.map(wl) : /* @__PURE__ */ Je(e);
}
// @__NO_SIDE_EFFECTS__
async function xl(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, a]) => [t, await /* @__PURE__ */ xl(a)]))) : "items" in e ? Promise.all(e.items.map(xl)) : /* @__PURE__ */ Je(e);
}
// @__NO_SIDE_EFFECTS__
function Zw(e) {
  return /* @__PURE__ */ So(e, "description");
}
// @__NO_SIDE_EFFECTS__
function Qw(e) {
  const t = [];
  function a(r) {
    if ("pipe" in r)
      for (const n of r.pipe) n.kind === "schema" && "pipe" in n ? a(n) : n.kind === "metadata" && n.type === "examples" && t.push(...n.examples);
  }
  return a(e), t;
}
// @__NO_SIDE_EFFECTS__
function zl(e) {
  if ("entries" in e) {
    const t = {};
    for (const a in e.entries) t[a] = /* @__PURE__ */ zl(e.entries[a]);
    return t;
  }
  return "items" in e ? e.items.map(zl) : /* @__PURE__ */ bt(e);
}
// @__NO_SIDE_EFFECTS__
async function _l(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, a]) => [t, await /* @__PURE__ */ _l(a)]))) : "items" in e ? Promise.all(e.items.map(_l)) : /* @__PURE__ */ bt(e);
}
// @__NO_SIDE_EFFECTS__
function Jw(e) {
  const t = {};
  function a(r) {
    if ("pipe" in r)
      for (const n of r.pipe) n.kind === "schema" && "pipe" in n ? a(n) : n.kind === "metadata" && n.type === "metadata" && Object.assign(t, n.metadata);
  }
  return a(e), t;
}
// @__NO_SIDE_EFFECTS__
function Xw(e) {
  return /* @__PURE__ */ So(e, "title");
}
// @__NO_SIDE_EFFECTS__
function e1(e, t) {
  return !e["~run"]({ value: t }, { abortEarly: !0 }).issues;
}
// @__NO_SIDE_EFFECTS__
function wn() {
  return {
    kind: "schema",
    type: "any",
    reference: wn,
    expects: "any",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gr(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: gr,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < n.length; o++) {
          const i = n[o], l = this.item["~run"]({ value: i }, r);
          if (l.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(u) : d.path = [u], a.issues?.push(d);
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
function yh(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: yh,
    expects: "Array",
    async: !0,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(n.map((i) => this.item["~run"]({ value: i }, r)));
        for (let i = 0; i < o.length; i++) {
          const l = o[i];
          if (l.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: n[i]
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(u) : d.path = [u], a.issues?.push(d);
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
function mh(e) {
  return {
    kind: "schema",
    type: "bigint",
    reference: mh,
    expects: "bigint",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return typeof t.value == "bigint" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hh(e) {
  return {
    kind: "schema",
    type: "blob",
    reference: hh,
    expects: "Blob",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return t.value instanceof Blob ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: ms,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return typeof t.value == "boolean" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vh(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: vh,
    expects: "unknown",
    async: !1,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return this.check(a.value) ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gh(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: gh,
    expects: "unknown",
    async: !0,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return await this.check(a.value) ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oo(e) {
  return {
    kind: "schema",
    type: "date",
    reference: Oo,
    expects: "Date",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return t.value instanceof Date ? isNaN(t.value) ? B(this, "type", t, a, { received: '"Invalid Date"' }) : t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sl(e, t) {
  const a = [];
  for (const r in e) (`${+r}` !== r || typeof e[r] != "string" || !Object.is(e[e[r]], +r)) && a.push(e[r]);
  return {
    kind: "schema",
    type: "enum",
    reference: Sl,
    expects: /* @__PURE__ */ gt(a.map(Ue), "|"),
    async: !1,
    enum: e,
    options: a,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(r, n) {
      return this.options.includes(r.value) ? r.typed = !0 : B(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bh(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: bh,
    expects: e.expects,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kh(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: kh,
    expects: e.expects,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wh(e) {
  return {
    kind: "schema",
    type: "file",
    reference: wh,
    expects: "File",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return t.value instanceof File ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return {
    kind: "schema",
    type: "function",
    reference: ql,
    expects: "Function",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return typeof t.value == "function" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xh(e, t) {
  return {
    kind: "schema",
    type: "instance",
    reference: xh,
    expects: e.name,
    async: !1,
    class: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value instanceof this.class ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
  if (typeof e == typeof t) {
    if (e === t || e instanceof Date && t instanceof Date && +e == +t) return { value: e };
    if (e && t && e.constructor === Object && t.constructor === Object) {
      for (const a in t) if (a in e) {
        const r = /* @__PURE__ */ to(e[a], t[a]);
        if (r.issue) return r;
        e[a] = r.value;
      } else e[a] = t[a];
      return { value: e };
    }
    if (Array.isArray(e) && Array.isArray(t) && e.length === t.length) {
      for (let a = 0; a < e.length; a++) {
        const r = /* @__PURE__ */ to(e[a], t[a]);
        if (r.issue) return r;
        e[a] = r.value;
      }
      return { value: e };
    }
  }
  return { issue: !0 };
}
// @__NO_SIDE_EFFECTS__
function zh(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: zh,
    expects: /* @__PURE__ */ gt(e.map((a) => a.expects), "&"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
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
            const l = /* @__PURE__ */ to(a.value, o[i]);
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
function _h(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: _h,
    expects: /* @__PURE__ */ gt(e.map((a) => a.expects), "&"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
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
            const u = /* @__PURE__ */ to(a.value, o[l]);
            if (u.issue) {
              B(this, "type", a, r, { received: "unknown" });
              break;
            }
            a.value = u.value;
          }
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sh(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: Sh,
    expects: "unknown",
    async: !1,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return this.getter(t.value)["~run"](t, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qh(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: qh,
    expects: "unknown",
    async: !0,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(t, a) {
      return (await this.getter(t.value))["~run"](t, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: ao,
    expects: /* @__PURE__ */ Ue(e),
    async: !1,
    literal: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value === this.literal ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oh(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: Oh,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const l = o in n ? n[o] : /* @__PURE__ */ Je(i), u = i["~run"]({ value: l }, r);
            if (u.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: l
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
              if (a.issues || (a.issues = u.issues), r.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            u.typed || (a.typed = !1), a.value[o] = u.value;
          } else if (i.fallback !== void 0) a.value[o] = /* @__PURE__ */ bt(i);
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
          for (const o in n) /* @__PURE__ */ Wa(n, o) && !(o in this.entries) && (a.value[o] = n[o]);
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ah(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: Ah,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, l]) => {
          if (i in n || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const u = i in n ? n[i] : await /* @__PURE__ */ Je(l);
            return [
              i,
              u,
              l,
              await l["~run"]({ value: u }, r)
            ];
          }
          return [
            i,
            n[i],
            l,
            null
          ];
        }));
        for (const [i, l, u, d] of o) if (d) {
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
        } else if (u.fallback !== void 0) a.value[i] = await /* @__PURE__ */ bt(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (B(this, "key", a, r, {
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
          for (const i in n) /* @__PURE__ */ Wa(n, i) && !(i in this.entries) && (a.value[i] = n[i]);
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ch(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: Ch,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], l = this.items[o]["~run"]({ value: i }, r);
          if (l.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(u) : d.path = [u], a.issues?.push(d);
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
function Eh(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: Eh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(this.items.map(async (i, l) => {
          const u = n[l];
          return [
            l,
            u,
            await i["~run"]({ value: u }, r)
          ];
        }));
        for (const [i, l, u] of o) {
          if (u.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = u.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          u.typed || (a.typed = !1), a.value.push(u.value);
        }
        if (!a.issues || !r.abortEarly) for (let i = this.items.length; i < n.length; i++) a.value.push(n[i]);
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $h(e, t, a) {
  return {
    kind: "schema",
    type: "map",
    reference: $h,
    expects: "Map",
    async: !1,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o instanceof Map) {
        r.typed = !0, r.value = /* @__PURE__ */ new Map();
        for (const [i, l] of o) {
          const u = this.key["~run"]({ value: i }, n);
          if (u.issues) {
            const c = {
              type: "map",
              origin: "key",
              input: o,
              key: i,
              value: l
            };
            for (const f of u.issues)
              f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
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
          (!u.typed || !d.typed) && (r.typed = !1), r.value.set(u.value, d.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bh(e, t, a) {
  return {
    kind: "schema",
    type: "map",
    reference: Bh,
    expects: "Map",
    async: !0,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o instanceof Map) {
        r.typed = !0, r.value = /* @__PURE__ */ new Map();
        const i = await Promise.all([...o].map(([l, u]) => Promise.all([
          l,
          u,
          this.key["~run"]({ value: l }, n),
          this.value["~run"]({ value: u }, n)
        ])));
        for (const [l, u, d, c] of i) {
          if (d.issues) {
            const f = {
              type: "map",
              origin: "key",
              input: o,
              key: l,
              value: u
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
              value: u
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
function Dh(e) {
  return {
    kind: "schema",
    type: "nan",
    reference: Dh,
    expects: "NaN",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return Number.isNaN(t.value) ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mh(e) {
  return {
    kind: "schema",
    type: "never",
    reference: Mh,
    expects: "never",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ph(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: Ph,
    expects: "!null",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value !== null && (a = this.wrapped["~run"](a, r)), a.value === null && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jh(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: jh,
    expects: "!null",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return a.value !== null && (a = await this.wrapped["~run"](a, r)), a.value === null && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ih(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Ih,
    expects: "(!null & !undefined)",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value === null || a.value === void 0 || (a = this.wrapped["~run"](a, r)), (a.value === null || a.value === void 0) && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fh(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Fh,
    expects: "(!null & !undefined)",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return a.value === null || a.value === void 0 || (a = await this.wrapped["~run"](a, r)), (a.value === null || a.value === void 0) && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hs(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: hs,
    expects: "!undefined",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value !== void 0 && (a = this.wrapped["~run"](a, r)), a.value === void 0 && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vs(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: vs,
    expects: "!undefined",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return a.value !== void 0 && (a = await this.wrapped["~run"](a, r)), a.value === void 0 && B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ol(e) {
  return {
    kind: "schema",
    type: "null",
    reference: Ol,
    expects: "null",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return t.value === null ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Th(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Th,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value === null && (this.default !== void 0 && (a.value = /* @__PURE__ */ Je(this, a, r)), a.value === null) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nh(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Nh,
    expects: `(${e.expects} | null)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return a.value === null && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Je(this, a, r)), a.value === null) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: ro,
    expects: `(${e.expects} | null | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return (a.value === null || a.value === void 0) && (this.default !== void 0 && (a.value = /* @__PURE__ */ Je(this, a, r)), a.value === null || a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vh(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: Vh,
    expects: `(${e.expects} | null | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return (a.value === null || a.value === void 0) && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Je(this, a, r)), a.value === null || a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ao(e) {
  return {
    kind: "schema",
    type: "number",
    reference: Ao,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gs(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: gs,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const l = o in n ? n[o] : /* @__PURE__ */ Je(i), u = i["~run"]({ value: l }, r);
            if (u.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: l
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
              if (a.issues || (a.issues = u.issues), r.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            u.typed || (a.typed = !1), a.value[o] = u.value;
          } else if (i.fallback !== void 0) a.value[o] = /* @__PURE__ */ bt(i);
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
function Rh(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: Rh,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, l]) => {
          if (i in n || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const u = i in n ? n[i] : await /* @__PURE__ */ Je(l);
            return [
              i,
              u,
              l,
              await l["~run"]({ value: u }, r)
            ];
          }
          return [
            i,
            n[i],
            l,
            null
          ];
        }));
        for (const [i, l, u, d] of o) if (d) {
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
        } else if (u.fallback !== void 0) a.value[i] = await /* @__PURE__ */ bt(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (B(this, "key", a, r, {
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
function Lh(e, t, a) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Lh,
    expects: "Object",
    async: !1,
    entries: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        for (const i in this.entries) {
          const l = this.entries[i];
          if (i in o || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const u = i in o ? o[i] : /* @__PURE__ */ Je(l), d = l["~run"]({ value: u }, n);
            if (d.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: o,
                key: i,
                value: u
              };
              for (const f of d.issues)
                f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
              if (r.issues || (r.issues = d.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            d.typed || (r.typed = !1), r.value[i] = d.value;
          } else if (l.fallback !== void 0) r.value[i] = /* @__PURE__ */ bt(l);
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
          for (const i in o) if (/* @__PURE__ */ Wa(o, i) && !(i in this.entries)) {
            const l = this.rest["~run"]({ value: o[i] }, n);
            if (l.issues) {
              const u = {
                type: "object",
                origin: "value",
                input: o,
                key: i,
                value: o[i]
              };
              for (const d of l.issues)
                d.path ? d.path.unshift(u) : d.path = [u], r.issues?.push(d);
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
function Uh(e, t, a) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Uh,
    expects: "Object",
    async: !0,
    entries: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        const [i, l] = await Promise.all([Promise.all(Object.entries(this.entries).map(async ([u, d]) => {
          if (u in o || (d.type === "exact_optional" || d.type === "optional" || d.type === "nullish") && d.default !== void 0) {
            const c = u in o ? o[u] : await /* @__PURE__ */ Je(d);
            return [
              u,
              c,
              d,
              await d["~run"]({ value: c }, n)
            ];
          }
          return [
            u,
            o[u],
            d,
            null
          ];
        })), Promise.all(Object.entries(o).filter(([u]) => /* @__PURE__ */ Wa(o, u) && !(u in this.entries)).map(async ([u, d]) => [
          u,
          d,
          await this.rest["~run"]({ value: d }, n)
        ]))]);
        for (const [u, d, c, f] of i) if (f) {
          if (f.issues) {
            const y = {
              type: "object",
              origin: "value",
              input: o,
              key: u,
              value: d
            };
            for (const p of f.issues)
              p.path ? p.path.unshift(y) : p.path = [y], r.issues?.push(p);
            if (r.issues || (r.issues = f.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          f.typed || (r.typed = !1), r.value[u] = f.value;
        } else if (c.fallback !== void 0) r.value[u] = await /* @__PURE__ */ bt(c);
        else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (B(this, "key", r, n, {
          input: void 0,
          expected: `"${u}"`,
          path: [{
            type: "object",
            origin: "key",
            input: o,
            key: u,
            value: d
          }]
        }), n.abortEarly))
          break;
        if (!r.issues || !n.abortEarly) for (const [u, d, c] of l) {
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: o,
              key: u,
              value: d
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], r.issues?.push(y);
            if (r.issues || (r.issues = c.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          c.typed || (r.typed = !1), r.value[u] = c.value;
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: br,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = /* @__PURE__ */ Je(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bs(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: bs,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Je(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
  return {
    kind: "schema",
    type: "picklist",
    reference: Co,
    expects: /* @__PURE__ */ gt(e.map(Ue), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return this.options.includes(a.value) ? a.typed = !0 : B(this, "type", a, r), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wh(e) {
  return {
    kind: "schema",
    type: "promise",
    reference: Wh,
    expects: "Promise",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return t.value instanceof Promise ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ks(e, t, a) {
  return {
    kind: "schema",
    type: "record",
    reference: ks,
    expects: "Object",
    async: !1,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        for (const i in o) if (/* @__PURE__ */ Wa(o, i)) {
          const l = o[i], u = this.key["~run"]({ value: i }, n);
          if (u.issues) {
            const c = {
              type: "object",
              origin: "key",
              input: o,
              key: i,
              value: l
            };
            for (const f of u.issues)
              f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
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
          (!u.typed || !d.typed) && (r.typed = !1), u.typed && (r.value[u.value] = d.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kh(e, t, a) {
  return {
    kind: "schema",
    type: "record",
    reference: Kh,
    expects: "Object",
    async: !0,
    key: e,
    value: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        r.typed = !0, r.value = {};
        const i = await Promise.all(Object.entries(o).filter(([l]) => /* @__PURE__ */ Wa(o, l)).map(([l, u]) => Promise.all([
          l,
          u,
          this.key["~run"]({ value: l }, n),
          this.value["~run"]({ value: u }, n)
        ])));
        for (const [l, u, d, c] of i) {
          if (d.issues) {
            const f = {
              type: "object",
              origin: "key",
              input: o,
              key: l,
              value: u
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
              value: u
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
function Gh(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Gh,
    expects: "Set",
    async: !1,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
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
            for (const u of i.issues)
              u.path ? u.path.unshift(l) : u.path = [l], a.issues?.push(u);
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
function Hh(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Hh,
    expects: "Set",
    async: !0,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n instanceof Set) {
        a.typed = !0, a.value = /* @__PURE__ */ new Set();
        const o = await Promise.all([...n].map(async (i) => [i, await this.value["~run"]({ value: i }, r)]));
        for (const [i, l] of o) {
          if (l.issues) {
            const u = {
              type: "set",
              origin: "value",
              input: n,
              key: null,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(u) : d.path = [u], a.issues?.push(d);
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
function Yh(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Yh,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const l = o in n ? n[o] : /* @__PURE__ */ Je(i), u = i["~run"]({ value: l }, r);
            if (u.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: l
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
              if (a.issues || (a.issues = u.issues), r.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            u.typed || (a.typed = !1), a.value[o] = u.value;
          } else if (i.fallback !== void 0) a.value[o] = /* @__PURE__ */ bt(i);
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
function Zh(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Zh,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (n && typeof n == "object") {
        a.typed = !0, a.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, l]) => {
          if (i in n || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const u = i in n ? n[i] : await /* @__PURE__ */ Je(l);
            return [
              i,
              u,
              l,
              await l["~run"]({ value: u }, r)
            ];
          }
          return [
            i,
            n[i],
            l,
            null
          ];
        }));
        for (const [i, l, u, d] of o) if (d) {
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
        } else if (u.fallback !== void 0) a.value[i] = await /* @__PURE__ */ bt(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (B(this, "key", a, r, {
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
function Qh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Qh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], l = this.items[o]["~run"]({ value: i }, r);
          if (l.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(u) : d.path = [u], a.issues?.push(d);
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
function Jh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Jh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(this.items.map(async (i, l) => {
          const u = n[l];
          return [
            l,
            u,
            await i["~run"]({ value: u }, r)
          ];
        }));
        for (const [i, l, u] of o) {
          if (u.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = u.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          u.typed || (a.typed = !1), a.value.push(u.value);
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
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return typeof t.value == "string" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xh(e) {
  return {
    kind: "schema",
    type: "symbol",
    reference: Xh,
    expects: "symbol",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return typeof t.value == "symbol" ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ev(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: ev,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], l = this.items[o]["~run"]({ value: i }, r);
          if (l.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of l.issues)
              d.path ? d.path.unshift(u) : d.path = [u], a.issues?.push(d);
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
function tv(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: tv,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      const n = a.value;
      if (Array.isArray(n)) {
        a.typed = !0, a.value = [];
        const o = await Promise.all(this.items.map(async (i, l) => {
          const u = n[l];
          return [
            l,
            u,
            await i["~run"]({ value: u }, r)
          ];
        }));
        for (const [i, l, u] of o) {
          if (u.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: l
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = u.issues), r.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          u.typed || (a.typed = !1), a.value.push(u.value);
        }
      } else B(this, "type", a, r);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function av(e, t, a) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: av,
    expects: "Array",
    async: !1,
    items: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (Array.isArray(o)) {
        r.typed = !0, r.value = [];
        for (let i = 0; i < this.items.length; i++) {
          const l = o[i], u = this.items[i]["~run"]({ value: l }, n);
          if (u.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: o,
              key: i,
              value: l
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
        if (!r.issues || !n.abortEarly) for (let i = this.items.length; i < o.length; i++) {
          const l = o[i], u = this.rest["~run"]({ value: l }, n);
          if (u.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: o,
              key: i,
              value: l
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rv(e, t, a) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: rv,
    expects: "Array",
    async: !0,
    items: e,
    rest: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (Array.isArray(o)) {
        r.typed = !0, r.value = [];
        const [i, l] = await Promise.all([Promise.all(this.items.map(async (u, d) => {
          const c = o[d];
          return [
            d,
            c,
            await u["~run"]({ value: c }, n)
          ];
        })), Promise.all(o.slice(this.items.length).map(async (u, d) => [
          d + this.items.length,
          u,
          await this.rest["~run"]({ value: u }, n)
        ]))]);
        for (const [u, d, c] of i) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: o,
              key: u,
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
        if (!r.issues || !n.abortEarly) for (const [u, d, c] of l) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: o,
              key: u,
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
function Al(e) {
  return {
    kind: "schema",
    type: "undefined",
    reference: Al,
    expects: "undefined",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return t.value === void 0 ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nv(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: nv,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = /* @__PURE__ */ Je(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ov(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: ov,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      return a.value === void 0 && (this.default !== void 0 && (a.value = await /* @__PURE__ */ Je(this, a, r)), a.value === void 0) ? (a.typed = !0, a) : this.wrapped["~run"](a, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function no(e) {
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
    expects: /* @__PURE__ */ gt(e.map((a) => a.expects), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(a, r) {
      let n, o, i;
      for (const l of this.options) {
        const u = l["~run"]({ value: a.value }, r);
        if (u.typed) if (u.issues) o ? o.push(u) : o = [u];
        else {
          n = u;
          break;
        }
        else i ? i.push(u) : i = [u];
      }
      if (n) return n;
      if (o) {
        if (o.length === 1) return o[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ no(o) }), a.typed = !0;
      } else {
        if (i?.length === 1) return i[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ no(i) });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iv(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: iv,
    expects: /* @__PURE__ */ gt(e.map((a) => a.expects), "|"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(a, r) {
      let n, o, i;
      for (const l of this.options) {
        const u = await l["~run"]({ value: a.value }, r);
        if (u.typed) if (u.issues) o ? o.push(u) : o = [u];
        else {
          n = u;
          break;
        }
        else i ? i.push(u) : i = [u];
      }
      if (n) return n;
      if (o) {
        if (o.length === 1) return o[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ no(o) }), a.typed = !0;
      } else {
        if (i?.length === 1) return i[0];
        B(this, "type", a, r, { issues: /* @__PURE__ */ no(i) });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lv() {
  return {
    kind: "schema",
    type: "unknown",
    reference: lv,
    expects: "unknown",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sv(e, t, a) {
  return {
    kind: "schema",
    type: "variant",
    reference: sv,
    expects: "Object",
    async: !1,
    key: e,
    options: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        let i, l = 0, u = this.key, d = [];
        const c = (f, y) => {
          for (const p of f.options) {
            if (p.type === "variant") c(p, new Set(y).add(p.key));
            else {
              let g = !0, h = 0;
              for (const b of y) {
                const w = p.entries[b];
                if (b in o ? w["~run"]({
                  typed: !1,
                  value: o[b]
                }, { abortEarly: !0 }).issues : w.type !== "exact_optional" && w.type !== "optional" && w.type !== "nullish") {
                  g = !1, u !== b && (l < h || l === h && b in o && !(u in o)) && (l = h, u = b, d = []), u === b && d.push(p.entries[b].expects);
                  break;
                }
                h++;
              }
              if (g) {
                const b = p["~run"]({ value: o }, n);
                (!i || !i.typed && b.typed) && (i = b);
              }
            }
            if (i && !i.issues) break;
          }
        };
        if (c(this, /* @__PURE__ */ new Set([this.key])), i) return i;
        B(this, "type", r, n, {
          input: o[u],
          expected: /* @__PURE__ */ gt(d, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: u,
            value: o[u]
          }]
        });
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uv(e, t, a) {
  return {
    kind: "schema",
    type: "variant",
    reference: uv,
    expects: "Object",
    async: !0,
    key: e,
    options: t,
    message: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    async "~run"(r, n) {
      const o = r.value;
      if (o && typeof o == "object") {
        let i, l = 0, u = this.key, d = [];
        const c = async (f, y) => {
          for (const p of f.options) {
            if (p.type === "variant") await c(p, new Set(y).add(p.key));
            else {
              let g = !0, h = 0;
              for (const b of y) {
                const w = p.entries[b];
                if (b in o ? (await w["~run"]({
                  typed: !1,
                  value: o[b]
                }, { abortEarly: !0 })).issues : w.type !== "exact_optional" && w.type !== "optional" && w.type !== "nullish") {
                  g = !1, u !== b && (l < h || l === h && b in o && !(u in o)) && (l = h, u = b, d = []), u === b && d.push(p.entries[b].expects);
                  break;
                }
                h++;
              }
              if (g) {
                const b = await p["~run"]({ value: o }, n);
                (!i || !i.typed && b.typed) && (i = b);
              }
            }
            if (i && !i.issues) break;
          }
        };
        if (await c(this, /* @__PURE__ */ new Set([this.key])), i) return i;
        B(this, "type", r, n, {
          input: o[u],
          expected: /* @__PURE__ */ gt(d, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: u,
            value: o[u]
          }]
        });
      } else B(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cl(e) {
  return {
    kind: "schema",
    type: "void",
    reference: Cl,
    expects: "void",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    },
    "~run"(t, a) {
      return t.value === void 0 ? t.typed = !0 : B(this, "type", t, a), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function t1(e, t) {
  return /* @__PURE__ */ Co(Object.keys(e.entries), t);
}
// @__NO_SIDE_EFFECTS__
function a1(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
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
function r1(e, t) {
  const a = { ...e.entries };
  for (const r of t) delete a[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    }
  };
}
function dv(e, t, a) {
  const r = e["~run"]({ value: t }, /* @__PURE__ */ $r(a));
  if (r.issues) throw new oa(r.issues);
  return r.value;
}
async function cv(e, t, a) {
  const r = await e["~run"]({ value: t }, /* @__PURE__ */ $r(a));
  if (r.issues) throw new oa(r.issues);
  return r.value;
}
// @__NO_SIDE_EFFECTS__
function n1(e, t) {
  const a = (r) => dv(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function o1(e, t) {
  const a = (r) => cv(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function i1(e, t) {
  const a = {};
  for (const r in e.entries) a[r] = !t || t.includes(r) ? /* @__PURE__ */ br(e.entries[r]) : e.entries[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function l1(e, t) {
  const a = {};
  for (const r in e.entries) a[r] = !t || t.includes(r) ? /* @__PURE__ */ bs(e.entries[r]) : e.entries[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function s1(e, t) {
  const a = {};
  for (const r of t) a[r] = e.entries[r];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yt(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
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
function u1(...e) {
  return {
    ...e[0],
    pipe: e,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
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
function d1(e, t, a) {
  const r = Array.isArray(t) ? t : void 0, n = Array.isArray(t) ? a : t, o = {};
  for (const i in e.entries) o[i] = !r || r.includes(i) ? /* @__PURE__ */ hs(e.entries[i], n) : e.entries[i];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function c1(e, t, a) {
  const r = Array.isArray(t) ? t : void 0, n = Array.isArray(t) ? a : t, o = {};
  for (const i in e.entries) o[i] = !r || r.includes(i) ? /* @__PURE__ */ vs(e.entries[i], n) : e.entries[i];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ Z(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function un(e, t, a) {
  const r = e["~run"]({ value: t }, /* @__PURE__ */ $r(a));
  return {
    typed: r.typed,
    success: !r.issues,
    output: r.value,
    issues: r.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function Eo(e, t, a) {
  const r = await e["~run"]({ value: t }, /* @__PURE__ */ $r(a));
  return {
    typed: r.typed,
    success: !r.issues,
    output: r.value,
    issues: r.issues
  };
}
// @__NO_SIDE_EFFECTS__
function f1(e, t) {
  const a = (r) => /* @__PURE__ */ un(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function p1(e, t) {
  const a = (r) => /* @__PURE__ */ Eo(e, r, t);
  return a.schema = e, a.config = t, a;
}
// @__NO_SIDE_EFFECTS__
function y1(e) {
  let t = "";
  for (const a of e) {
    t && (t += `
`), t += `× ${a.message}`;
    const r = /* @__PURE__ */ qo(a);
    r && (t += `
  → at ${r}`);
  }
  return t;
}
// @__NO_SIDE_EFFECTS__
function m1(e) {
  return e.wrapped;
}
const h1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE64_REGEX: wp,
  BIC_REGEX: xp,
  CUID2_REGEX: zp,
  DECIMAL_REGEX: _p,
  DIGITS_REGEX: Sp,
  DOMAIN_REGEX: qp,
  EMAIL_REGEX: Op,
  EMOJI_REGEX: Ap,
  HEXADECIMAL_REGEX: Cp,
  HEX_COLOR_REGEX: Ep,
  IMEI_REGEX: $p,
  IPV4_REGEX: Bp,
  IPV6_REGEX: Dp,
  IP_REGEX: Mp,
  ISO_DATE_REGEX: Pp,
  ISO_DATE_TIME_REGEX: jp,
  ISO_TIMESTAMP_REGEX: Tp,
  ISO_TIME_REGEX: Ip,
  ISO_TIME_SECOND_REGEX: Fp,
  ISO_WEEK_REGEX: Np,
  ISRC_REGEX: Rp,
  JWS_COMPACT_REGEX: Vp,
  MAC48_REGEX: Lp,
  MAC64_REGEX: Up,
  MAC_REGEX: Wp,
  NANO_ID_REGEX: Kp,
  OCTAL_REGEX: Gp,
  RFC_EMAIL_REGEX: Hp,
  SLUG_REGEX: Yp,
  ULID_REGEX: Zp,
  UUID_REGEX: Qp,
  ValiError: oa,
  _addIssue: B,
  _cloneDataset: eo,
  _getByteCount: gn,
  _getGraphemeCount: bn,
  _getLastMetadata: So,
  _getStandardProps: Z,
  _getWordCount: kn,
  _isLuhnAlgo: ps,
  _isValidObjectKey: Wa,
  _joinExpects: gt,
  _stringify: Ue,
  any: wn,
  args: gp,
  argsAsync: bp,
  array: gr,
  arrayAsync: yh,
  assert: Rw,
  awaitAsync: kp,
  base64: Jp,
  bic: Xp,
  bigint: mh,
  blob: hh,
  boolean: ms,
  brand: ey,
  bytes: ty,
  cache: Lw,
  cacheAsync: Uw,
  check: ay,
  checkAsync: ry,
  checkItems: ny,
  checkItemsAsync: oy,
  config: Ww,
  creditCard: iy,
  cuid2: ly,
  custom: vh,
  customAsync: gh,
  date: Oo,
  decimal: sy,
  deleteGlobalConfig: kw,
  deleteGlobalMessage: xw,
  deleteSchemaMessage: _w,
  deleteSpecificMessage: qw,
  description: uy,
  digits: dy,
  domain: cy,
  email: fy,
  emoji: py,
  empty: yy,
  endsWith: my,
  entries: hy,
  entriesFromList: Aw,
  entriesFromObjects: Cw,
  enum: Sl,
  enum_: Sl,
  everyItem: vy,
  exactOptional: bh,
  exactOptionalAsync: kh,
  examples: gy,
  excludes: by,
  fallback: Kw,
  fallbackAsync: Gw,
  file: wh,
  filterItems: ky,
  findItem: wy,
  finite: xy,
  flatten: kl,
  flavor: zy,
  forward: Hw,
  forwardAsync: Yw,
  function: ql,
  function_: ql,
  getDefault: Je,
  getDefaults: wl,
  getDefaultsAsync: xl,
  getDescription: Zw,
  getDotPath: qo,
  getExamples: Qw,
  getFallback: bt,
  getFallbacks: zl,
  getFallbacksAsync: _l,
  getGlobalConfig: $r,
  getGlobalMessage: mp,
  getMetadata: Jw,
  getSchemaMessage: hp,
  getSpecificMessage: vp,
  getTitle: Xw,
  graphemes: _y,
  gtValue: Sy,
  guard: qy,
  hash: Oy,
  hexColor: Cy,
  hexadecimal: Ay,
  imei: Ey,
  includes: $y,
  instance: xh,
  integer: ys,
  intersect: zh,
  intersectAsync: _h,
  ip: By,
  ipv4: Dy,
  ipv6: My,
  is: e1,
  isOfKind: Ew,
  isOfType: $w,
  isValiError: Bw,
  isbn: Py,
  isoDate: Iy,
  isoDateTime: Fy,
  isoTime: Ty,
  isoTimeSecond: Ny,
  isoTimestamp: Vy,
  isoWeek: Ry,
  isrc: jy,
  jwsCompact: Ly,
  keyof: t1,
  lazy: Sh,
  lazyAsync: qh,
  length: Uy,
  literal: ao,
  looseObject: Oh,
  looseObjectAsync: Ah,
  looseTuple: Ch,
  looseTupleAsync: Eh,
  ltValue: Wy,
  mac: Ky,
  mac48: Gy,
  mac64: Hy,
  map: $h,
  mapAsync: Bh,
  mapItems: Yy,
  maxBytes: Zy,
  maxEntries: Qy,
  maxGraphemes: Jy,
  maxLength: Xy,
  maxSize: em,
  maxValue: tm,
  maxWords: am,
  message: a1,
  metadata: rm,
  mimeType: nm,
  minBytes: om,
  minEntries: im,
  minGraphemes: lm,
  minLength: sm,
  minSize: um,
  minValue: dm,
  minWords: cm,
  multipleOf: fm,
  nan: Dh,
  nanoid: pm,
  never: Mh,
  nonEmpty: ym,
  nonNullable: Ph,
  nonNullableAsync: jh,
  nonNullish: Ih,
  nonNullishAsync: Fh,
  nonOptional: hs,
  nonOptionalAsync: vs,
  normalize: mm,
  notBytes: hm,
  notEntries: vm,
  notGraphemes: gm,
  notLength: bm,
  notSize: km,
  notValue: wm,
  notValues: xm,
  notWords: zm,
  null: Ol,
  null_: Ol,
  nullable: Th,
  nullableAsync: Nh,
  nullish: ro,
  nullishAsync: Vh,
  number: Ao,
  object: gs,
  objectAsync: Rh,
  objectWithRest: Lh,
  objectWithRestAsync: Uh,
  octal: _m,
  omit: r1,
  optional: br,
  optionalAsync: bs,
  parse: dv,
  parseAsync: cv,
  parseBoolean: Sm,
  parseJson: qm,
  parser: n1,
  parserAsync: o1,
  partial: i1,
  partialAsync: l1,
  partialCheck: Am,
  partialCheckAsync: Cm,
  pick: s1,
  picklist: Co,
  pipe: Yt,
  pipeAsync: u1,
  promise: Wh,
  rawCheck: Em,
  rawCheckAsync: $m,
  rawTransform: Bm,
  rawTransformAsync: Dm,
  readonly: Mm,
  record: ks,
  recordAsync: Kh,
  reduceItems: Pm,
  regex: jm,
  required: d1,
  requiredAsync: c1,
  returns: Im,
  returnsAsync: Fm,
  rfcEmail: Tm,
  safeInteger: Nm,
  safeParse: un,
  safeParseAsync: Eo,
  safeParser: f1,
  safeParserAsync: p1,
  set: Gh,
  setAsync: Hh,
  setGlobalConfig: bw,
  setGlobalMessage: ww,
  setSchemaMessage: zw,
  setSpecificMessage: Sw,
  size: Vm,
  slug: Rm,
  someItem: Lm,
  sortItems: Um,
  startsWith: Wm,
  strictObject: Yh,
  strictObjectAsync: Zh,
  strictTuple: Qh,
  strictTupleAsync: Jh,
  string: zt,
  stringifyJson: Km,
  summarize: y1,
  symbol: Xh,
  title: Gm,
  toBigint: Hm,
  toBoolean: Ym,
  toDate: Zm,
  toLowerCase: Qm,
  toMaxValue: Jm,
  toMinValue: Xm,
  toNumber: eh,
  toString: th,
  toUpperCase: ah,
  transform: vt,
  transformAsync: rh,
  trim: nh,
  trimEnd: oh,
  trimStart: ih,
  tuple: ev,
  tupleAsync: tv,
  tupleWithRest: av,
  tupleWithRestAsync: rv,
  ulid: lh,
  undefined: Al,
  undefined_: Al,
  undefinedable: nv,
  undefinedableAsync: ov,
  union: Ht,
  unionAsync: iv,
  unknown: lv,
  unwrap: m1,
  url: sh,
  uuid: uh,
  value: dh,
  values: ch,
  variant: sv,
  variantAsync: uv,
  void: Cl,
  void_: Cl,
  words: fh
}, Symbol.toStringTag, { value: "Module" }));
function El(e = /* @__PURE__ */ wn()) {
  return /* @__PURE__ */ Yt(
    /* @__PURE__ */ Ht([e, /* @__PURE__ */ gr(e)]),
    /* @__PURE__ */ vt((t) => Array.isArray(t) ? t : [t]),
    /* @__PURE__ */ gr(e)
  );
}
El.number = () => El(/* @__PURE__ */ Ao());
const fv = 6048e5, v1 = 864e5, Yd = /* @__PURE__ */ Symbol.for("constructDateFrom");
function ba(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Yd in e ? e[Yd](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Dt(e, t) {
  return ba(t || e, e);
}
let g1 = {};
function $o() {
  return g1;
}
function dn(e, t) {
  const a = $o(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0, n = Dt(e, t?.in), o = n.getDay(), i = (o < r ? 7 : 0) + o - r;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function oo(e, t) {
  return dn(e, { ...t, weekStartsOn: 1 });
}
function pv(e, t) {
  const a = Dt(e, t?.in), r = a.getFullYear(), n = ba(a, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = oo(n), i = ba(a, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const l = oo(i);
  return a.getTime() >= o.getTime() ? r + 1 : a.getTime() >= l.getTime() ? r : r - 1;
}
function Zd(e) {
  const t = Dt(e), a = new Date(
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
function b1(e, ...t) {
  const a = ba.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(a);
}
function Qd(e, t) {
  const a = Dt(e, t?.in);
  return a.setHours(0, 0, 0, 0), a;
}
function k1(e, t, a) {
  const [r, n] = b1(
    a?.in,
    e,
    t
  ), o = Qd(r), i = Qd(n), l = +o - Zd(o), u = +i - Zd(i);
  return Math.round((l - u) / v1);
}
function w1(e, t) {
  const a = pv(e, t), r = ba(e, 0);
  return r.setFullYear(a, 0, 4), r.setHours(0, 0, 0, 0), oo(r);
}
function x1(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function z1(e) {
  return !(!x1(e) && typeof e != "number" || isNaN(+Dt(e)));
}
function _1(e, t) {
  const a = Dt(e, t?.in);
  return a.setFullYear(a.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
const S1 = {
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
}, q1 = (e, t, a) => {
  let r;
  const n = S1[e];
  return typeof n == "string" ? r = n : t === 1 ? r = n.one : r = n.other.replace("{{count}}", t.toString()), a?.addSuffix ? a.comparison && a.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ri(e) {
  return (t = {}) => {
    const a = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[a] || e.formats[e.defaultWidth];
  };
}
const O1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, A1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, C1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, E1 = {
  date: Ri({
    formats: O1,
    defaultWidth: "full"
  }),
  time: Ri({
    formats: A1,
    defaultWidth: "full"
  }),
  dateTime: Ri({
    formats: C1,
    defaultWidth: "full"
  })
}, $1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, B1 = (e, t, a, r) => $1[e];
function Wr(e) {
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
const D1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, M1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, P1 = {
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
}, j1 = {
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
}, I1 = {
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
}, F1 = {
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
}, T1 = (e, t) => {
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
}, N1 = {
  ordinalNumber: T1,
  era: Wr({
    values: D1,
    defaultWidth: "wide"
  }),
  quarter: Wr({
    values: M1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Wr({
    values: P1,
    defaultWidth: "wide"
  }),
  day: Wr({
    values: j1,
    defaultWidth: "wide"
  }),
  dayPeriod: Wr({
    values: I1,
    defaultWidth: "wide",
    formattingValues: F1,
    defaultFormattingWidth: "wide"
  })
};
function Kr(e) {
  return (t, a = {}) => {
    const r = a.width, n = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(n);
    if (!o)
      return null;
    const i = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(l) ? R1(l, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      V1(l, (f) => f.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = a.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      a.valueCallback(d)
    ) : d;
    const c = t.slice(i.length);
    return { value: d, rest: c };
  };
}
function V1(e, t) {
  for (const a in e)
    if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a]))
      return a;
}
function R1(e, t) {
  for (let a = 0; a < e.length; a++)
    if (t(e[a]))
      return a;
}
function L1(e) {
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
const U1 = /^(\d+)(th|st|nd|rd)?/i, W1 = /\d+/i, K1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, G1 = {
  any: [/^b/i, /^(a|c)/i]
}, H1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Y1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Z1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Q1 = {
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
}, J1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, X1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ex = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, tx = {
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
}, ax = {
  ordinalNumber: L1({
    matchPattern: U1,
    parsePattern: W1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Kr({
    matchPatterns: K1,
    defaultMatchWidth: "wide",
    parsePatterns: G1,
    defaultParseWidth: "any"
  }),
  quarter: Kr({
    matchPatterns: H1,
    defaultMatchWidth: "wide",
    parsePatterns: Y1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Kr({
    matchPatterns: Z1,
    defaultMatchWidth: "wide",
    parsePatterns: Q1,
    defaultParseWidth: "any"
  }),
  day: Kr({
    matchPatterns: J1,
    defaultMatchWidth: "wide",
    parsePatterns: X1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Kr({
    matchPatterns: ex,
    defaultMatchWidth: "any",
    parsePatterns: tx,
    defaultParseWidth: "any"
  })
}, rx = {
  code: "en-US",
  formatDistance: q1,
  formatLong: E1,
  formatRelative: B1,
  localize: N1,
  match: ax,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function nx(e, t) {
  const a = Dt(e, t?.in);
  return k1(a, _1(a)) + 1;
}
function ox(e, t) {
  const a = Dt(e, t?.in), r = +oo(a) - +w1(a);
  return Math.round(r / fv) + 1;
}
function yv(e, t) {
  const a = Dt(e, t?.in), r = a.getFullYear(), n = $o(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = ba(t?.in || e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const l = dn(i, t), u = ba(t?.in || e, 0);
  u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0);
  const d = dn(u, t);
  return +a >= +l ? r + 1 : +a >= +d ? r : r - 1;
}
function ix(e, t) {
  const a = $o(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, n = yv(e, t), o = ba(t?.in || e, 0);
  return o.setFullYear(n, 0, r), o.setHours(0, 0, 0, 0), dn(o, t);
}
function lx(e, t) {
  const a = Dt(e, t?.in), r = +dn(a, t) - +ix(a, t);
  return Math.round(r / fv) + 1;
}
function Be(e, t) {
  const a = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return a + r;
}
const fa = {
  // Year
  y(e, t) {
    const a = e.getFullYear(), r = a > 0 ? a : 1 - a;
    return Be(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const a = e.getMonth();
    return t === "M" ? String(a + 1) : Be(a + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Be(e.getDate(), t.length);
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
    return Be(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Be(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Be(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Be(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const a = t.length, r = e.getMilliseconds(), n = Math.trunc(
      r * Math.pow(10, a - 3)
    );
    return Be(n, t.length);
  }
}, nr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Jd = {
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
    return fa.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, a, r) {
    const n = yv(e, r), o = n > 0 ? n : 1 - n;
    if (t === "YY") {
      const i = o % 100;
      return Be(i, 2);
    }
    return t === "Yo" ? a.ordinalNumber(o, { unit: "year" }) : Be(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const a = pv(e);
    return Be(a, t.length);
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
    return Be(a, t.length);
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
        return Be(r, 2);
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
        return Be(r, 2);
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
        return fa.M(e, t);
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
        return Be(r + 1, 2);
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
    const n = lx(e, r);
    return t === "wo" ? a.ordinalNumber(n, { unit: "week" }) : Be(n, t.length);
  },
  // ISO week of year
  I: function(e, t, a) {
    const r = ox(e);
    return t === "Io" ? a.ordinalNumber(r, { unit: "week" }) : Be(r, t.length);
  },
  // Day of the month
  d: function(e, t, a) {
    return t === "do" ? a.ordinalNumber(e.getDate(), { unit: "date" }) : fa.d(e, t);
  },
  // Day of year
  D: function(e, t, a) {
    const r = nx(e);
    return t === "Do" ? a.ordinalNumber(r, { unit: "dayOfYear" }) : Be(r, t.length);
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
        return Be(o, 2);
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
        return Be(o, t.length);
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
        return Be(n, t.length);
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
    switch (r === 12 ? n = nr.noon : r === 0 ? n = nr.midnight : n = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? n = nr.evening : r >= 12 ? n = nr.afternoon : r >= 4 ? n = nr.morning : n = nr.night, t) {
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
    return fa.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, a) {
    return t === "Ho" ? a.ordinalNumber(e.getHours(), { unit: "hour" }) : fa.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, a) {
    const r = e.getHours() % 12;
    return t === "Ko" ? a.ordinalNumber(r, { unit: "hour" }) : Be(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, a) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? a.ordinalNumber(r, { unit: "hour" }) : Be(r, t.length);
  },
  // Minute
  m: function(e, t, a) {
    return t === "mo" ? a.ordinalNumber(e.getMinutes(), { unit: "minute" }) : fa.m(e, t);
  },
  // Second
  s: function(e, t, a) {
    return t === "so" ? a.ordinalNumber(e.getSeconds(), { unit: "second" }) : fa.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return fa.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, a) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return ec(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ma(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ma(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, a) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return ec(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ma(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ma(r, ":");
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
        return "GMT" + Xd(r, ":");
      default:
        return "GMT" + Ma(r, ":");
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
        return "GMT" + Xd(r, ":");
      default:
        return "GMT" + Ma(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, a) {
    const r = Math.trunc(+e / 1e3);
    return Be(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, a) {
    return Be(+e, t.length);
  }
};
function Xd(e, t = "") {
  const a = e > 0 ? "-" : "+", r = Math.abs(e), n = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? a + String(n) : a + String(n) + t + Be(o, 2);
}
function ec(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Be(Math.abs(e) / 60, 2) : Ma(e, t);
}
function Ma(e, t = "") {
  const a = e > 0 ? "-" : "+", r = Math.abs(e), n = Be(Math.trunc(r / 60), 2), o = Be(r % 60, 2);
  return a + n + t + o;
}
const tc = (e, t) => {
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
}, mv = (e, t) => {
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
}, sx = (e, t) => {
  const a = e.match(/(P+)(p+)?/) || [], r = a[1], n = a[2];
  if (!n)
    return tc(e, t);
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
  return o.replace("{{date}}", tc(r, t)).replace("{{time}}", mv(n, t));
}, ux = {
  p: mv,
  P: sx
}, dx = /^D+$/, cx = /^Y+$/, fx = ["D", "DD", "YY", "YYYY"];
function px(e) {
  return dx.test(e);
}
function yx(e) {
  return cx.test(e);
}
function mx(e, t, a) {
  const r = hx(e, t, a);
  if (console.warn(r), fx.includes(e)) throw new RangeError(r);
}
function hx(e, t, a) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const vx = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, bx = /^'([^]*?)'?$/, kx = /''/g, wx = /[a-zA-Z]/;
function io(e, t, a) {
  const r = $o(), n = r.locale ?? rx, o = r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, l = Dt(e, a?.in);
  if (!z1(l))
    throw new RangeError("Invalid time value");
  let u = t.match(gx).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const y = ux[f];
      return y(c, n.formatLong);
    }
    return c;
  }).join("").match(vx).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: xx(c) };
    if (Jd[f])
      return { isToken: !0, value: c };
    if (f.match(wx))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  n.localize.preprocessor && (u = n.localize.preprocessor(l, u));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: n
  };
  return u.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (yx(f) || px(f)) && mx(f, t, String(e));
    const y = Jd[f[0]];
    return y(l, f, n.localize, d);
  }).join("");
}
function xx(e) {
  const t = e.match(bx);
  return t ? t[1].replace(kx, "'") : e;
}
var hv = typeof global == "object" && global && global.Object === Object && global, zx = typeof self == "object" && self && self.Object === Object && self, Bo = hv || zx || Function("return this")(), kr = Bo.Symbol, vv = Object.prototype, _x = vv.hasOwnProperty, Sx = vv.toString, Gr = kr ? kr.toStringTag : void 0;
function qx(e) {
  var t = _x.call(e, Gr), a = e[Gr];
  try {
    e[Gr] = void 0;
    var r = !0;
  } catch {
  }
  var n = Sx.call(e);
  return r && (t ? e[Gr] = a : delete e[Gr]), n;
}
var Ox = Object.prototype, Ax = Ox.toString;
function Cx(e) {
  return Ax.call(e);
}
var Ex = "[object Null]", $x = "[object Undefined]", ac = kr ? kr.toStringTag : void 0;
function ws(e) {
  return e == null ? e === void 0 ? $x : Ex : ac && ac in Object(e) ? qx(e) : Cx(e);
}
function xs(e) {
  return e != null && typeof e == "object";
}
var Bx = "[object Symbol]";
function Do(e) {
  return typeof e == "symbol" || xs(e) && ws(e) == Bx;
}
function Dx(e, t) {
  for (var a = -1, r = e == null ? 0 : e.length, n = Array(r); ++a < r; )
    n[a] = t(e[a], a, e);
  return n;
}
var Mo = Array.isArray, rc = kr ? kr.prototype : void 0, nc = rc ? rc.toString : void 0;
function gv(e) {
  if (typeof e == "string")
    return e;
  if (Mo(e))
    return Dx(e, gv) + "";
  if (Do(e))
    return nc ? nc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Mx = /\s/;
function Px(e) {
  for (var t = e.length; t-- && Mx.test(e.charAt(t)); )
    ;
  return t;
}
var jx = /^\s+/;
function Ix(e) {
  return e && e.slice(0, Px(e) + 1).replace(jx, "");
}
function Va(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var oc = NaN, Fx = /^[-+]0x[0-9a-f]+$/i, Tx = /^0b[01]+$/i, Nx = /^0o[0-7]+$/i, Vx = parseInt;
function ic(e) {
  if (typeof e == "number")
    return e;
  if (Do(e))
    return oc;
  if (Va(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Va(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ix(e);
  var a = Tx.test(e);
  return a || Nx.test(e) ? Vx(e.slice(2), a ? 2 : 8) : Fx.test(e) ? oc : +e;
}
var Rx = "[object AsyncFunction]", Lx = "[object Function]", Ux = "[object GeneratorFunction]", Wx = "[object Proxy]";
function Kx(e) {
  if (!Va(e))
    return !1;
  var t = ws(e);
  return t == Lx || t == Ux || t == Rx || t == Wx;
}
var Li = Bo["__core-js_shared__"], lc = (function() {
  var e = /[^.]+$/.exec(Li && Li.keys && Li.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Gx(e) {
  return !!lc && lc in e;
}
var Hx = Function.prototype, Yx = Hx.toString;
function Zx(e) {
  if (e != null) {
    try {
      return Yx.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qx = /[\\^$.*+?()[\]{}|]/g, Jx = /^\[object .+?Constructor\]$/, Xx = Function.prototype, ez = Object.prototype, tz = Xx.toString, az = ez.hasOwnProperty, rz = RegExp(
  "^" + tz.call(az).replace(Qx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nz(e) {
  if (!Va(e) || Gx(e))
    return !1;
  var t = Kx(e) ? rz : Jx;
  return t.test(Zx(e));
}
function oz(e, t) {
  return e?.[t];
}
function zs(e, t) {
  var a = oz(e, t);
  return nz(a) ? a : void 0;
}
var sc = (function() {
  try {
    var e = zs(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), iz = 9007199254740991, lz = /^(?:0|[1-9]\d*)$/;
function bv(e, t) {
  var a = typeof e;
  return t = t ?? iz, !!t && (a == "number" || a != "symbol" && lz.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function sz(e, t, a) {
  t == "__proto__" && sc ? sc(e, t, {
    configurable: !0,
    enumerable: !0,
    value: a,
    writable: !0
  }) : e[t] = a;
}
function kv(e, t) {
  return e === t || e !== e && t !== t;
}
var uz = Object.prototype, dz = uz.hasOwnProperty;
function cz(e, t, a) {
  var r = e[t];
  (!(dz.call(e, t) && kv(r, a)) || a === void 0 && !(t in e)) && sz(e, t, a);
}
var fz = 9007199254740991;
function pz(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fz;
}
var yz = "[object Arguments]";
function uc(e) {
  return xs(e) && ws(e) == yz;
}
var wv = Object.prototype, mz = wv.hasOwnProperty, hz = wv.propertyIsEnumerable, vz = uc(/* @__PURE__ */ (function() {
  return arguments;
})()) ? uc : function(e) {
  return xs(e) && mz.call(e, "callee") && !hz.call(e, "callee");
}, xv = typeof exports == "object" && exports && !exports.nodeType && exports, nn = xv && typeof module == "object" && module && !module.nodeType && module, gz = nn && nn.exports === xv, Ui = gz && hv.process, dc = (function() {
  try {
    var e = nn && nn.require && nn.require("util").types;
    return e || Ui && Ui.binding && Ui.binding("util");
  } catch {
  }
})(), bz = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kz = /^\w*$/;
function wz(e, t) {
  if (Mo(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || Do(e) ? !0 : kz.test(e) || !bz.test(e) || t != null && e in Object(t);
}
var cn = zs(Object, "create");
function xz() {
  this.__data__ = cn ? cn(null) : {}, this.size = 0;
}
function zz(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _z = "__lodash_hash_undefined__", Sz = Object.prototype, qz = Sz.hasOwnProperty;
function Oz(e) {
  var t = this.__data__;
  if (cn) {
    var a = t[e];
    return a === _z ? void 0 : a;
  }
  return qz.call(t, e) ? t[e] : void 0;
}
var Az = Object.prototype, Cz = Az.hasOwnProperty;
function Ez(e) {
  var t = this.__data__;
  return cn ? t[e] !== void 0 : Cz.call(t, e);
}
var $z = "__lodash_hash_undefined__";
function Bz(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = cn && t === void 0 ? $z : t, this;
}
function Ra(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ra.prototype.clear = xz;
Ra.prototype.delete = zz;
Ra.prototype.get = Oz;
Ra.prototype.has = Ez;
Ra.prototype.set = Bz;
function Dz() {
  this.__data__ = [], this.size = 0;
}
function Po(e, t) {
  for (var a = e.length; a--; )
    if (kv(e[a][0], t))
      return a;
  return -1;
}
var Mz = Array.prototype, Pz = Mz.splice;
function jz(e) {
  var t = this.__data__, a = Po(t, e);
  if (a < 0)
    return !1;
  var r = t.length - 1;
  return a == r ? t.pop() : Pz.call(t, a, 1), --this.size, !0;
}
function Iz(e) {
  var t = this.__data__, a = Po(t, e);
  return a < 0 ? void 0 : t[a][1];
}
function Fz(e) {
  return Po(this.__data__, e) > -1;
}
function Tz(e, t) {
  var a = this.__data__, r = Po(a, e);
  return r < 0 ? (++this.size, a.push([e, t])) : a[r][1] = t, this;
}
function Br(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Br.prototype.clear = Dz;
Br.prototype.delete = jz;
Br.prototype.get = Iz;
Br.prototype.has = Fz;
Br.prototype.set = Tz;
var Nz = zs(Bo, "Map");
function Vz() {
  this.size = 0, this.__data__ = {
    hash: new Ra(),
    map: new (Nz || Br)(),
    string: new Ra()
  };
}
function Rz(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function jo(e, t) {
  var a = e.__data__;
  return Rz(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
function Lz(e) {
  var t = jo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Uz(e) {
  return jo(this, e).get(e);
}
function Wz(e) {
  return jo(this, e).has(e);
}
function Kz(e, t) {
  var a = jo(this, e), r = a.size;
  return a.set(e, t), this.size += a.size == r ? 0 : 1, this;
}
function Ka(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ka.prototype.clear = Vz;
Ka.prototype.delete = Lz;
Ka.prototype.get = Uz;
Ka.prototype.has = Wz;
Ka.prototype.set = Kz;
var Gz = "Expected a function";
function _s(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Gz);
  var a = function() {
    var r = arguments, n = t ? t.apply(this, r) : r[0], o = a.cache;
    if (o.has(n))
      return o.get(n);
    var i = e.apply(this, r);
    return a.cache = o.set(n, i) || o, i;
  };
  return a.cache = new (_s.Cache || Ka)(), a;
}
_s.Cache = Ka;
var Hz = 500;
function Yz(e) {
  var t = _s(e, function(r) {
    return a.size === Hz && a.clear(), r;
  }), a = t.cache;
  return t;
}
var Zz = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qz = /\\(\\)?/g, Jz = Yz(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Zz, function(a, r, n, o) {
    t.push(n ? o.replace(Qz, "$1") : r || a);
  }), t;
});
function Ss(e) {
  return e == null ? "" : gv(e);
}
function Io(e, t) {
  return Mo(e) ? e : wz(e, t) ? [e] : Jz(Ss(e));
}
function fn(e) {
  if (typeof e == "string" || Do(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function zv(e, t) {
  t = Io(t, e);
  for (var a = 0, r = t.length; e != null && a < r; )
    e = e[fn(t[a++])];
  return a && a == r ? e : void 0;
}
function it(e, t, a) {
  var r = e == null ? void 0 : zv(e, t);
  return r === void 0 ? a : r;
}
function Xz(e, t, a) {
  var r = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), a = a > n ? n : a, a < 0 && (a += n), n = t > a ? 0 : a - t >>> 0, t >>>= 0;
  for (var o = Array(n); ++r < n; )
    o[r] = e[r + t];
  return o;
}
function e_(e, t, a, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    a = t(a, e[n], n, e);
  return a;
}
function t_(e) {
  return function(t) {
    return e?.[t];
  };
}
var a_ = {
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
}, r_ = t_(a_), n_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, o_ = "\\u0300-\\u036f", i_ = "\\ufe20-\\ufe2f", l_ = "\\u20d0-\\u20ff", s_ = o_ + i_ + l_, u_ = "[" + s_ + "]", d_ = RegExp(u_, "g");
function c_(e) {
  return e = Ss(e), e && e.replace(n_, r_).replace(d_, "");
}
var f_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function p_(e) {
  return e.match(f_) || [];
}
var y_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function m_(e) {
  return y_.test(e);
}
var _v = "\\ud800-\\udfff", h_ = "\\u0300-\\u036f", v_ = "\\ufe20-\\ufe2f", g_ = "\\u20d0-\\u20ff", b_ = h_ + v_ + g_, Sv = "\\u2700-\\u27bf", qv = "a-z\\xdf-\\xf6\\xf8-\\xff", k_ = "\\xac\\xb1\\xd7\\xf7", w_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", x_ = "\\u2000-\\u206f", z_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ov = "A-Z\\xc0-\\xd6\\xd8-\\xde", __ = "\\ufe0e\\ufe0f", Av = k_ + w_ + x_ + z_, Cv = "['’]", cc = "[" + Av + "]", S_ = "[" + b_ + "]", Ev = "\\d+", q_ = "[" + Sv + "]", $v = "[" + qv + "]", Bv = "[^" + _v + Av + Ev + Sv + qv + Ov + "]", O_ = "\\ud83c[\\udffb-\\udfff]", A_ = "(?:" + S_ + "|" + O_ + ")", C_ = "[^" + _v + "]", Dv = "(?:\\ud83c[\\udde6-\\uddff]){2}", Mv = "[\\ud800-\\udbff][\\udc00-\\udfff]", lr = "[" + Ov + "]", E_ = "\\u200d", fc = "(?:" + $v + "|" + Bv + ")", $_ = "(?:" + lr + "|" + Bv + ")", pc = "(?:" + Cv + "(?:d|ll|m|re|s|t|ve))?", yc = "(?:" + Cv + "(?:D|LL|M|RE|S|T|VE))?", Pv = A_ + "?", jv = "[" + __ + "]?", B_ = "(?:" + E_ + "(?:" + [C_, Dv, Mv].join("|") + ")" + jv + Pv + ")*", D_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", M_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", P_ = jv + Pv + B_, j_ = "(?:" + [q_, Dv, Mv].join("|") + ")" + P_, I_ = RegExp([
  lr + "?" + $v + "+" + pc + "(?=" + [cc, lr, "$"].join("|") + ")",
  $_ + "+" + yc + "(?=" + [cc, lr + fc, "$"].join("|") + ")",
  lr + "?" + fc + "+" + pc,
  lr + "+" + yc,
  M_,
  D_,
  Ev,
  j_
].join("|"), "g");
function F_(e) {
  return e.match(I_) || [];
}
function T_(e, t, a) {
  return e = Ss(e), t = t, t === void 0 ? m_(e) ? F_(e) : p_(e) : e.match(t) || [];
}
var N_ = "['’]", V_ = RegExp(N_, "g");
function R_(e) {
  return function(t) {
    return e_(T_(c_(t).replace(V_, "")), e, "");
  };
}
function L_(e, t, a) {
  t = Io(t, e);
  for (var r = -1, n = t.length, o = !1; ++r < n; ) {
    var i = fn(t[r]);
    if (!(o = e != null && a(e, i)))
      break;
    e = e[i];
  }
  return o || ++r != n ? o : (n = e == null ? 0 : e.length, !!n && pz(n) && bv(i, n) && (Mo(e) || vz(e)));
}
var Wi = function() {
  return Bo.Date.now();
}, U_ = "Expected a function", W_ = Math.max, K_ = Math.min;
function G_(e, t, a) {
  var r, n, o, i, l, u, d = 0, c = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(U_);
  t = ic(t) || 0, Va(a) && (c = !!a.leading, f = "maxWait" in a, o = f ? W_(ic(a.maxWait) || 0, t) : o, y = "trailing" in a ? !!a.trailing : y);
  function p(A) {
    var C = r, E = n;
    return r = n = void 0, d = A, i = e.apply(E, C), i;
  }
  function g(A) {
    return d = A, l = setTimeout(w, t), c ? p(A) : i;
  }
  function h(A) {
    var C = A - u, E = A - d, D = t - C;
    return f ? K_(D, o - E) : D;
  }
  function b(A) {
    var C = A - u, E = A - d;
    return u === void 0 || C >= t || C < 0 || f && E >= o;
  }
  function w() {
    var A = Wi();
    if (b(A))
      return k(A);
    l = setTimeout(w, h(A));
  }
  function k(A) {
    return l = void 0, y && r ? p(A) : (r = n = void 0, i);
  }
  function S() {
    l !== void 0 && clearTimeout(l), d = 0, r = u = n = l = void 0;
  }
  function z() {
    return l === void 0 ? i : k(Wi());
  }
  function $() {
    var A = Wi(), C = b(A);
    if (r = arguments, n = this, u = A, C) {
      if (l === void 0)
        return g(u);
      if (f)
        return clearTimeout(l), l = setTimeout(w, t), p(u);
    }
    return l === void 0 && (l = setTimeout(w, t)), i;
  }
  return $.cancel = S, $.flush = z, $;
}
function H_(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Y_ = Object.prototype, Z_ = Y_.hasOwnProperty;
function Q_(e, t) {
  return e != null && Z_.call(e, t);
}
function J_(e, t) {
  return e != null && L_(e, t, Q_);
}
function X_(e, t) {
  return t.length < 2 ? e : zv(e, Xz(t, 0, -1));
}
dc && dc.isRegExp;
var eS = R_(function(e, t, a) {
  return e + (a ? "-" : "") + t.toLowerCase();
}), tS = Object.prototype, aS = tS.hasOwnProperty;
function rS(e, t) {
  t = Io(t, e);
  var a = -1, r = t.length;
  if (!r)
    return !0;
  for (; ++a < r; ) {
    var n = fn(t[a]);
    if (n === "__proto__" && !aS.call(e, "__proto__") || (n === "constructor" || n === "prototype") && a < r - 1)
      return !1;
  }
  var o = X_(e, t);
  return o == null || delete o[fn(H_(t))];
}
function nS(e, t, a, r) {
  if (!Va(e))
    return e;
  t = Io(t, e);
  for (var n = -1, o = t.length, i = o - 1, l = e; l != null && ++n < o; ) {
    var u = fn(t[n]), d = a;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (n != i) {
      var c = l[u];
      d = void 0, d === void 0 && (d = Va(c) ? c : bv(t[n + 1]) ? [] : {});
    }
    cz(l, u, d), l = l[u];
  }
  return e;
}
function qs(e, t, a) {
  return e == null ? e : nS(e, t, a);
}
function oS(e, t) {
  return e == null ? !0 : rS(e, t);
}
const Iv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ Ao()]),
  /* @__PURE__ */ vt(Number),
  /* @__PURE__ */ ys()
), Fv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ ms()]),
  /* @__PURE__ */ vt((e) => e === !0 || e === "true")
), Tv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ Oo()]),
  /* @__PURE__ */ vt((e) => e instanceof Date ? e : new Date(e)),
  /* @__PURE__ */ vt((e) => e && io(e, "yyyy-MM-dd"))
), Nv = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ Oo()]),
  /* @__PURE__ */ vt((e) => e && (e === "null" ? null : (typeof e == "string" && (e = new Date(e)), io(e, "yyyy-MM-dd HH:mm"))))
), Vv = (e = /* @__PURE__ */ wn()) => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ gr(/* @__PURE__ */ zt())]),
  /* @__PURE__ */ vt((t) => Array.isArray(t) ? t : t.split(",")),
  /* @__PURE__ */ gr(e)
), Rv = () => /* @__PURE__ */ Yt(
  Vv(),
  /* @__PURE__ */ vt((e) => e.map(Number))
), Os = () => /* @__PURE__ */ Yt(
  /* @__PURE__ */ Ht([/* @__PURE__ */ zt(), /* @__PURE__ */ ks(/* @__PURE__ */ zt(), /* @__PURE__ */ wn())]),
  /* @__PURE__ */ vt((e) => typeof e == "string" ? yp.parse(e) : e),
  /* @__PURE__ */ vt((e) => {
    const t = {};
    for (const a in e)
      qs(t, a, it(e, a));
    return t;
  })
);
function pt() {
  return Os();
}
pt.number = Iv;
pt.boolean = Fv;
pt.date = Tv;
pt.datetime = Nv;
pt.array = Vv;
pt.arrayNumber = Rv;
pt.object = Os;
const iS = () => /* @__PURE__ */ Yt(/* @__PURE__ */ zt(), /* @__PURE__ */ vt((e) => {
  const t = e.split(/[;\n]/).filter(Boolean).filter((n) => n.includes("=")).map((n) => n.trim().split("=")), a = Object.fromEntries(t), r = {};
  for (const [n, o] of Object.entries(a)) {
    let i = o;
    o.startsWith("bool:") && (i = o.replace("bool:", "").trim() === "true"), qs(r, n, i);
  }
  return r;
})), As = (e = {}) => /* @__PURE__ */ gs({
  page: /* @__PURE__ */ br(pt.number(), 1),
  limit: /* @__PURE__ */ br(pt.number(), e.maxLimit || 100),
  orderBy: /* @__PURE__ */ ro(e.orderFields ? pt.array(/* @__PURE__ */ Co(e.orderFields)) : pt.array(/* @__PURE__ */ zt()), []),
  orderDirection: /* @__PURE__ */ ro(pt.array(/* @__PURE__ */ Ht([/* @__PURE__ */ ao("asc"), /* @__PURE__ */ ao("desc")])), [])
});
function Lv(e = {}) {
  return As(e);
}
Lv.base = As;
const lS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: El,
  arrayNumber: Rv,
  base: As,
  boolean: Fv,
  date: Tv,
  datetime: Nv,
  keyValue: iS,
  number: Iv,
  object: Os,
  pagination: Lv,
  url: pt
}, Symbol.toStringTag, { value: "Module" }));
class sS {
  static __container_entry_key = "ValidatorService";
  v = {
    ...h1,
    extras: lS
  };
  create(t) {
    return t(this.v);
  }
  validate(t, a) {
    const r = typeof a == "function" ? a(this.v) : a, { output: n, issues: o, success: i } = /* @__PURE__ */ un(r, t);
    if (!i) {
      const l = /* @__PURE__ */ kl(o), u = [];
      l.root && u.push(...l.root), l.nested && Object.entries(l.nested).forEach((f) => {
        const [y, p] = f;
        u.push(...p.map((g) => `${y}: ${g}`));
      });
      const d = u.length ? u.join(", ") : "Validation failed", c = new vn(d, 422);
      throw c.name = "ValidationError", Object.assign(c, { messages: u }), c;
    }
    return n;
  }
  async validateAsync(t, a) {
    const r = typeof a == "function" ? a(this.v) : a, { output: n, issues: o, success: i } = await /* @__PURE__ */ Eo(r, t);
    if (!i) {
      const l = new Error("Validation failed"), u = /* @__PURE__ */ kl(o), d = {
        ...u.root,
        ...u.nested
      };
      throw Object.assign(l, { details: d }), l;
    }
    return n;
  }
  isValid(t, a) {
    const r = typeof a == "function" ? a(this.v) : a, { success: n } = /* @__PURE__ */ un(r, t);
    return n;
  }
}
const lo = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Uv(e) {
  return Number(e) >= 0;
}
function uS(e) {
  return typeof e == "object" && e !== null;
}
function dS(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function mc(e) {
  if (!uS(e) || dS(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Wv(e, t) {
  return Object.keys(t).forEach((a) => {
    if (mc(t[a]) && mc(e[a])) {
      e[a] || (e[a] = {}), Wv(e[a], t[a]);
      return;
    }
    e[a] = t[a];
  }), e;
}
function cS(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let a = String(t[0]);
  for (let r = 1; r < t.length; r++) {
    if (Uv(t[r])) {
      a += `[${t[r]}]`;
      continue;
    }
    a += `.${t[r]}`;
  }
  return a;
}
function fS(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(a) {
      const r = await /* @__PURE__ */ Eo(e, a, t);
      if (r.success)
        return {
          value: r.output,
          errors: []
        };
      const n = {};
      return Kv(r.issues, n), {
        errors: Object.values(n)
      };
    },
    cast(a) {
      if (e.async)
        return a;
      const r = /* @__PURE__ */ un(e, a, t);
      if (r.success)
        return r.output;
      const n = /* @__PURE__ */ Je(/* @__PURE__ */ br(e));
      return lo(n) && lo(a) ? Wv(n, a) : a;
    },
    describe(a) {
      try {
        if (!a)
          return {
            required: !hc(e),
            exists: !0
          };
        const r = $l(a, e);
        return r ? {
          required: !hc(r),
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
function Kv(e, t) {
  e.forEach((a) => {
    const r = cS(/* @__PURE__ */ qo(a) || "");
    a.issues && (Kv(a.issues.flatMap((n) => n.issues || []), t), !r) || (t[r] || (t[r] = { errors: [], path: r }), t[r].errors.push(a.message));
  });
}
function $l(e, t) {
  var a, r, n, o;
  if (vc(t))
    return (a = t.options.map((u) => $l(e, u)).find(Boolean)) !== null && a !== void 0 ? a : null;
  if (gc(t))
    return (r = t.options.map((u) => $l(e, u)).find(Boolean)) !== null && r !== void 0 ? r : null;
  if (!jn(t))
    return null;
  if (Zk(e))
    return t.entries[Qk(e)];
  const i = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let l = t;
  for (let u = 0; u <= i.length; u++) {
    const d = i[u];
    if (!d || !l)
      return l;
    if (vc(l) && (l = (n = l.options.find((c) => jn(c) && c.entries[d])) !== null && n !== void 0 ? n : l), gc(l) && (l = (o = l.options.find((c) => jn(c) && c.entries[d])) !== null && o !== void 0 ? o : l), jn(l)) {
      l = l.entries[d] || null;
      continue;
    }
    Uv(d) && pS(l) && (l = l.item);
  }
  return null;
}
function hc(e) {
  return e.type === "optional";
}
function pS(e) {
  return lo(e) && "item" in e;
}
function jn(e) {
  return lo(e) && "entries" in e;
}
function vc(e) {
  return e.type === "intersect";
}
function gc(e) {
  return e.type === "variant";
}
function yS() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : typeof self < "u" && self.crypto && self.crypto.randomUUID ? self.crypto.randomUUID() : typeof window < "u" && window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function mS(e = "") {
  return e + yS();
}
class xn {
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
    return new xn();
  }
}
class Cs {
  static __container_entry_key = "EmmitterService";
  handlers = [];
  debug;
  logger;
  constructor(t) {
    this.debug = t?.debug || !1, this.logger = t?.logger || new xn(), this.debug && this.logger.debug("emmitter loaded with debug mode enabled");
  }
  static create(t) {
    return new Cs(t);
  }
  setDebug(t) {
    this.debug = t, this.debug && this.logger.debug("debug mode enabled");
  }
  setLogger(t) {
    this.logger = t;
  }
  on(t, a, r) {
    const n = r?.id || mS();
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
    const n = G_(a, r?.debounce || 300), o = this.on(t, n, r);
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
const bc = dt.proxy(Cs);
class hS {
  static __container_entry_key = "LayoutService";
  components = /* @__PURE__ */ new Map();
  options = {};
  currendId = null;
  setCurrent(t) {
    this.currendId = t, bc.emit("layout:change", t);
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
      throw new vn(`Layout ${t} not found`);
    return a;
  }
  getOptions() {
    return this.options;
  }
  getCurrent() {
    return this.currendId ? this.get(this.currendId) : null;
  }
  setOptions(t = {}) {
    this.options = t, bc.emit("layout:set-options", t);
  }
}
const Gv = globalThis, vS = Gv.layout || new hS();
Gv.layout = vS;
F(/* @__PURE__ */ new Map());
const gS = dt.proxy("route"), bS = dt.proxy("router");
function kS(e, t) {
  return wo() ? (is(e, t), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ki = /* @__PURE__ */ new WeakMap();
function wS(e, t, a = {}) {
  const { mode: r = "replace", route: n = Gf(), router: o = Kf(), transform: i } = a;
  let l = (p) => p, u = (p) => p;
  typeof i == "function" ? l = i : i && (i.get && (l = i.get), i.set && (u = i.set)), Ki.has(o) || Ki.set(o, /* @__PURE__ */ new Map());
  const d = Ki.get(o);
  let c = n.query[e];
  kS(() => {
    c = void 0;
  });
  let f;
  const y = os((p, g) => (f = g, {
    get() {
      return p(), l(c !== void 0 ? c : ze(t));
    },
    set(h) {
      h = u(h), c !== h && (c = h === ze(t) ? void 0 : h, d.set(e, h === ze(t) ? void 0 : h), g(), Se(() => {
        if (d.size === 0) return;
        const b = Object.fromEntries(d.entries());
        d.clear();
        const { params: w, query: k, hash: S } = n;
        o[ze(r)]({
          params: w,
          query: {
            ...k,
            ...b
          },
          hash: S
        });
      }));
    }
  }));
  return ve(() => n.query[e], (p) => {
    c !== l(p) && (c = p, f());
  }, { flush: "sync" }), y;
}
const xS = (e, t, a) => wS(e, t, {
  route: Gf() || gS,
  router: Kf() || bS,
  ...a
}), Qj = xS;
function kc(e) {
  return typeof e == "string" ? `'${e}'` : new zS().serialize(e);
}
const zS = /* @__PURE__ */ (function() {
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
        const [l, u] = n[i];
        o += `${this.serialize(l, !0)}:${this.serialize(u)}`, i < n.length - 1 && (o += ",");
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
function ka(e, t) {
  return e === t || kc(e) === kc(t);
}
function _S(e, t, a) {
  const r = e.findIndex((l) => ka(l, t)), n = e.findIndex((l) => ka(l, a));
  if (r === -1 || n === -1) return [];
  const [o, i] = [r, n].sort((l, u) => l - u);
  return e.slice(o, i + 1);
}
function wc(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(t, e));
}
function $e(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(a);
  return [(n) => {
    const o = sn(r, n);
    if (o || o === null) return o;
    throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (n) => (ns(r, n), n)];
}
function Ge() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Fo(e, t, a) {
  const r = a.originalEvent.target, n = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(n);
}
function wr(e) {
  return e == null;
}
function xc(e, t) {
  return wr(e) ? !1 : Array.isArray(e) ? e.some((a) => ka(a, t)) : ka(e, t);
}
function Es(e) {
  return e ? e.flatMap((t) => t.type === xe ? Es(t.children) : [t]) : [];
}
const SS = ["INPUT", "TEXTAREA"];
function zc(e, t, a, r = {}) {
  if (!t || r.enableIgnoredElement && SS.includes(t.nodeName)) return null;
  const { arrowKeyOptions: n = "both", attributeName: o = "[data-reka-collection-item]", itemsArray: i = [], loop: l = !0, dir: u = "ltr", preventScroll: d = !0, focus: c = !1 } = r, [f, y, p, g, h, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = p || g, k = f || y;
  if (!h && !b && (!w && !k || n === "vertical" && k || n === "horizontal" && w)) return null;
  const S = a ? Array.from(a.querySelectorAll(o)) : i;
  if (!S.length) return null;
  d && e.preventDefault();
  let z = null;
  return k || w ? z = Hv(S, t, {
    goForward: w ? g : u === "ltr" ? f : y,
    loop: l
  }) : h ? z = S.at(0) || null : b && (z = S.at(-1) || null), c && z?.focus(), z;
}
function Hv(e, t, a, r = e.includes(t) ? e.length : e.length + 1) {
  if (--r === 0) return null;
  const n = e.indexOf(t);
  let o;
  if (n === -1 ? o = a.goForward ? 0 : e.length - 1 : o = a.goForward ? n + 1 : n - 1, !a.loop && (o < 0 || o >= e.length)) return null;
  const i = (o + e.length) % e.length, l = e[i];
  return l ? l.hasAttribute("disabled") && l.getAttribute("disabled") !== "false" ? Hv(e, l, a, r) : l : null;
}
const [Dr] = /* @__PURE__ */ $e("ConfigProvider"), st = /* @__PURE__ */ Jn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
function Gi(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Bl(e, t, a = ".", r) {
  if (!Gi(t))
    return Bl(e, {}, a);
  const n = { ...t };
  for (const o of Object.keys(e)) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const i = e[o];
    i != null && (Array.isArray(i) && Array.isArray(n[o]) ? n[o] = [...i, ...n[o]] : Gi(i) && Gi(n[o]) ? n[o] = Bl(
      i,
      n[o],
      (a ? `${a}.` : "") + o.toString()
    ) : n[o] = i);
  }
  return n;
}
function qS(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, r) => Bl(a, r, ""), {})
  );
}
const Yv = qS(), OS = /* @__PURE__ */ Zf(() => {
  const e = F(/* @__PURE__ */ new Map()), t = F(), a = M(() => {
    for (const o of e.value.values()) if (o) return !0;
    return !1;
  }), r = Dr({ scrollBody: F(!0) }), n = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", st.layersWithOutsidePointerEventsDisabled.size === 0 && (document.body.style.pointerEvents = ""), document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", t.value = void 0;
  };
  return ve(a, (o, i) => {
    if (!ht) return;
    if (!o) {
      i && n();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, u = {
      padding: l,
      margin: 0
    }, d = r.scrollBody?.value ? typeof r.scrollBody.value == "object" ? Yv({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, u) : u : {
      padding: 0,
      margin: 0
    };
    l > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.documentElement.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), Se(() => {
      a.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function zn(e) {
  const t = Math.random().toString(36).substring(2, 7), a = OS();
  a.value.set(t, e ?? !1);
  const r = M({
    get: () => a.value.get(t) ?? !1,
    set: (n) => a.value.set(t, n)
  });
  return h0(() => {
    a.value.delete(t);
  }), r;
}
const AS = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Bopomofo}]/u, CS = /android/i;
function ES() {
  return typeof navigator < "u" && CS.test(navigator.userAgent);
}
function Zv(e) {
  const t = F(!1), a = F(!0), r = F(!1), n = M(() => t.value && a.value);
  function o() {
    t.value = !0, a.value = !0, r.value = !1;
  }
  function i(u) {
    u.data && (AS.test(u.data) ? (a.value = !0, r.value = !0) : ES() && !r.value && (a.value = !1));
  }
  function l(u) {
    Se(() => {
      t.value = !1, e?.(u);
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
function cr(e, t) {
  return e - t * Math.floor(e / t);
}
const Qv = 1721426;
function Fa(e, t, a, r) {
  t = _n(e, t);
  let n = t - 1, o = -2;
  return a <= 2 ? o = 0 : va(t) && (o = -1), Qv - 1 + 365 * n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400) + Math.floor((367 * a - 362) / 12 + o + r);
}
function va(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function _n(e, t) {
  return e === "BC" ? 1 - t : t;
}
function To(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const $S = {
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
    let a = t, r = a - Qv, n = Math.floor(r / 146097), o = cr(r, 146097), i = Math.floor(o / 36524), l = cr(o, 36524), u = Math.floor(l / 1461), d = cr(l, 1461), c = Math.floor(d / 365), f = n * 400 + i * 100 + u * 4 + c + (i !== 4 && c !== 4 ? 1 : 0), [y, p] = To(f), g = a - Fa(y, p, 1, 1), h = 2;
    a < Fa(y, p, 3, 1) ? h = 0 : va(p) && (h = 1);
    let b = Math.floor(((g + h) * 12 + 373) / 367), w = a - Fa(y, p, b, 1) + 1;
    return new He(y, p, b, w);
  }
  toJulianDay(t) {
    return Fa(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return $S[va(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return va(t.year) ? 366 : 365;
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
const BS = {
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
function wa(e, t) {
  return t = ut(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function $s(e, t) {
  return t = ut(t, e.calendar), e = Dl(e), t = Dl(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Hi(e, t) {
  return Bs(e.calendar, t.calendar) && wa(e, t);
}
function _c(e, t) {
  return Bs(e.calendar, t.calendar) && $s(e, t);
}
function Bs(e, t) {
  return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function DS(e, t) {
  return wa(e, Jv(t));
}
const MS = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
};
function Ds(e, t, a) {
  let r = e.calendar.toJulianDay(e), n = a ? MS[a] : FS(t), o = Math.ceil(r + 1 - n) % 7;
  return o < 0 && (o += 7), o;
}
function PS(e) {
  return Vt(Date.now(), e);
}
function Jv(e) {
  return RS(PS(e));
}
function Xv(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function jS(e, t) {
  return Sc(e) - Sc(t);
}
function Sc(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Yi = null;
function Mr() {
  return Yi == null && (Yi = new Intl.DateTimeFormat().resolvedOptions().timeZone), Yi;
}
function Dl(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function qc(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Oc = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map();
function IS(e) {
  if (Intl.Locale) {
    let a = Oc.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && Oc.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function FS(e) {
  let t = Zi.get(e);
  if (!t) {
    if (Intl.Locale) {
      let r = new Intl.Locale(e);
      if ("getWeekInfo" in r && (t = r.getWeekInfo(), t))
        return Zi.set(e, t), t.firstDay;
    }
    let a = IS(e);
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
      firstDay: a && BS[a] || 0
    };
    Zi.set(e, t);
  }
  return t.firstDay;
}
function xr(e) {
  e = ut(e, new Ct());
  let t = _n(e.era, e.year);
  return eg(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function eg(e, t, a, r, n, o, i) {
  let l = /* @__PURE__ */ new Date();
  return l.setUTCHours(r, n, o, i), l.setUTCFullYear(e, t - 1, a), l.getTime();
}
function Ml(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Mr()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: r, day: n, hour: o, minute: i, second: l } = tg(e, t);
  return eg(a, r, n, o, i, l, 0) - Math.floor(e / 1e3) * 1e3;
}
const Ac = /* @__PURE__ */ new Map();
function tg(e, t) {
  let a = Ac.get(t);
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
  }), Ac.set(t, a));
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
const Cc = 864e5;
function TS(e, t, a, r) {
  return (a === r ? [
    a
  ] : [
    a,
    r
  ]).filter((n) => NS(e, t, n));
}
function NS(e, t, a) {
  let r = tg(a, t);
  return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function ea(e, t, a = "compatible") {
  let r = zr(e);
  if (t === "UTC") return xr(r);
  if (t === Mr() && a === "compatible") {
    r = ut(r, new Ct());
    let u = /* @__PURE__ */ new Date(), d = _n(r.era, r.year);
    return u.setFullYear(d, r.month - 1, r.day), u.setHours(r.hour, r.minute, r.second, r.millisecond), u.getTime();
  }
  let n = xr(r), o = Ml(n - Cc, t), i = Ml(n + Cc, t), l = TS(r, t, n - o, n - i);
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
function ag(e, t, a = "compatible") {
  return new Date(ea(e, t, a));
}
function Vt(e, t) {
  let a = Ml(e, t), r = new Date(e + a), n = r.getUTCFullYear(), o = r.getUTCMonth() + 1, i = r.getUTCDate(), l = r.getUTCHours(), u = r.getUTCMinutes(), d = r.getUTCSeconds(), c = r.getUTCMilliseconds();
  return new Sr(n < 1 ? "BC" : "AD", n < 1 ? -n + 1 : n, o, i, t, a, l, u, d, c);
}
function VS(e, t) {
  return Vt(e.getTime(), t);
}
function RS(e) {
  return new He(e.calendar, e.era, e.year, e.month, e.day);
}
function zr(e, t) {
  let a = 0, r = 0, n = 0, o = 0;
  if ("timeZone" in e) ({ hour: a, minute: r, second: n, millisecond: o } = e);
  else if ("hour" in e) return e;
  return new _r(e.calendar, e.era, e.year, e.month, e.day, a, r, n, o);
}
function ut(e, t) {
  if (Bs(e.calendar, t)) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
  return r.calendar = t, r.era = a.era, r.year = a.year, r.month = a.month, r.day = a.day, La(r), r;
}
function LS(e, t, a) {
  if (e instanceof Sr)
    return e.timeZone === t ? e : WS(e, t);
  let r = ea(e, t, a);
  return Vt(r, t);
}
function US(e) {
  let t = xr(e) - e.offset;
  return new Date(t);
}
function WS(e, t) {
  let a = xr(e) - e.offset;
  return ut(Vt(a, t), e.calendar);
}
const Hr = 36e5;
function No(e, t) {
  let a = e.copy(), r = "hour" in a ? YS(a, t) : 0;
  Pl(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, jl(a), rg(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += r, KS(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let n = a.calendar.getYearsInEra(a);
  if (a.year > n) {
    let i = a.calendar.isInverseEra?.(a);
    a.year = n, a.month = i ? 1 : a.calendar.getMonthsInYear(a), a.day = i ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let o = a.calendar.getMonthsInYear(a);
  return a.month > o && (a.month = o, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function Pl(e, t) {
  e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function jl(e) {
  for (; e.month < 1; )
    Pl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Pl(e, 1);
}
function KS(e) {
  for (; e.day < 1; )
    e.month--, jl(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, jl(e);
}
function rg(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function La(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), rg(e);
}
function ng(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function og(e, t) {
  return No(e, ng(t));
}
function Ms(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), La(a), a;
}
function so(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), HS(a), a;
}
function GS(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = In(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = In(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = In(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = In(e.hour, 24), t;
}
function HS(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function In(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function YS(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, GS(e);
}
function Ps(e, t, a, r) {
  let n = e.copy();
  switch (t) {
    case "era": {
      let o = e.calendar.getEras(), i = o.indexOf(e.era);
      if (i < 0) throw new Error("Invalid era: " + e.era);
      i = ta(i, a, 0, o.length - 1, r?.round), n.era = o[i], La(n);
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
  return e.calendar.balanceDate && e.calendar.balanceDate(n), La(n), n;
}
function ig(e, t, a, r) {
  let n = e.copy();
  switch (t) {
    case "hour": {
      let o = e.hour, i = 0, l = 23;
      if (r?.hourCycle === 12) {
        let u = o >= 12;
        i = u ? 12 : 0, l = u ? 23 : 11;
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
function lg(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let n = No(zr(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = ea(n, e.timeZone);
  } else
    a = xr(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let r = Vt(a, e.timeZone);
  return ut(r, e.calendar);
}
function ZS(e, t) {
  return lg(e, ng(t));
}
function QS(e, t, a, r) {
  switch (t) {
    case "hour": {
      let n = 0, o = 23;
      if (r?.hourCycle === 12) {
        let g = e.hour >= 12;
        n = g ? 12 : 0, o = g ? 23 : 11;
      }
      let i = zr(e), l = ut(so(i, {
        hour: n
      }), new Ct()), u = [
        ea(l, e.timeZone, "earlier"),
        ea(l, e.timeZone, "later")
      ].filter((g) => Vt(g, e.timeZone).day === l.day)[0], d = ut(so(i, {
        hour: o
      }), new Ct()), c = [
        ea(d, e.timeZone, "earlier"),
        ea(d, e.timeZone, "later")
      ].filter((g) => Vt(g, e.timeZone).day === d.day).pop(), f = xr(e) - e.offset, y = Math.floor(f / Hr), p = f % Hr;
      return f = ta(y, a, Math.floor(u / Hr), Math.floor(c / Hr), r?.round) * Hr + p, ut(Vt(f, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return ig(e, t, a, r);
    case "era":
    case "year":
    case "month":
    case "day": {
      let n = Ps(zr(e), t, a, r), o = ea(n, e.timeZone);
      return ut(Vt(o, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function JS(e, t, a) {
  let r = zr(e), n = so(Ms(r, t), t);
  if (n.compare(r) === 0) return e;
  let o = ea(n, e.timeZone, a);
  return ut(Vt(o, e.timeZone), e.calendar);
}
function XS(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function sg(e) {
  let t = ut(e, new Ct()), a;
  return t.era === "BC" ? a = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : a = String(t.year).padStart(4, "0"), `${a}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function ug(e) {
  return `${sg(e)}T${XS(e)}`;
}
function eq(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), n = Math.floor(e % 36e5 % 6e4 / 1e3), o = `${t}${String(a).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
  return n !== 0 && (o += `:${String(n).padStart(2, "0")}`), o;
}
function tq(e) {
  return `${ug(e)}${eq(e.offset)}[${e.timeZone}]`;
}
function js(e) {
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
    let [a, r, n, o, i] = js(t);
    this.calendar = a, this.era = r, this.year = n, this.month = o, this.day = i, La(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new He(this.calendar, this.era, this.year, this.month, this.day) : new He(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return No(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return og(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Ms(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, r) {
    return Ps(this, t, a, r);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return ag(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return sg(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Xv(this, t);
  }
}
class _r {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [a, r, n, o, i] = js(t);
    this.calendar = a, this.era = r, this.year = n, this.month = o, this.day = i, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, La(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new _r(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new _r(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return No(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return og(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Ms(so(this, t), t);
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
        return Ps(this, t, a, r);
      default:
        return ig(this, t, a, r);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return ag(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ug(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Xv(this, t);
    return a === 0 ? jS(this, zr(t)) : a;
  }
}
class Sr {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [a, r, n, o, i] = js(t), l = t.shift(), u = t.shift();
    this.calendar = a, this.era = r, this.year = n, this.month = o, this.day = i, this.timeZone = l, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, La(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Sr(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Sr(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return lg(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return ZS(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return JS(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, r) {
    return QS(this, t, a, r);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return US(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return tq(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - LS(t, this.timeZone).toDate().getTime();
  }
}
const fr = [
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
], aq = [
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
], Gn = [
  1867,
  1911,
  1925,
  1988,
  2018
], ha = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Ec(e) {
  const t = fr.findIndex(([a, r, n]) => e.year < a || e.year === a && e.month < r || e.year === a && e.month === r && e.day < n);
  return t === -1 ? fr.length - 1 : t === 0 ? 0 : t - 1;
}
function Qi(e) {
  let t = Gn[ha.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new He(e.year + t, e.month, e.day);
}
class rq extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = Ec(a);
    return new He(this, ha[r], a.year - Gn[r], a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Qi(t));
  }
  balanceDate(t) {
    let a = Qi(t), r = Ec(a);
    ha[r] !== t.era && (t.era = ha[r], t.year = a.year - Gn[r]), this.constrainDate(t);
  }
  constrainDate(t) {
    let a = ha.indexOf(t.era), r = aq[a];
    if (r != null) {
      let [n, o, i] = r, l = n - Gn[a];
      t.year = Math.max(1, Math.min(l, t.year)), t.year === l && (t.month = Math.min(o, t.month), t.month === o && (t.day = Math.min(i, t.day)));
    }
    if (t.year === 1 && a >= 0) {
      let [, n, o] = fr[a];
      t.month = Math.max(n, t.month), t.month === n && (t.day = Math.max(o, t.day));
    }
  }
  getEras() {
    return ha;
  }
  getYearsInEra(t) {
    let a = ha.indexOf(t.era), r = fr[a], n = fr[a + 1];
    if (n == null)
      return 9999 - r[0] + 1;
    let o = n[0] - r[0];
    return (t.month < n[1] || t.month === n[1] && t.day < n[2]) && o++, o;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Qi(t));
  }
  getMinimumMonthInYear(t) {
    let a = $c(t);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let a = $c(t);
    return a && t.month === a[1] ? a[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function $c(e) {
  if (e.year === 1) {
    let t = ha.indexOf(e.era);
    return fr[t];
  }
}
const dg = -543;
class nq extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = _n(a.era, a.year);
    return new He(this, r - dg, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Bc(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Bc(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Bc(e) {
  let [t, a] = To(e.year + dg);
  return new He(t, a, e.month, e.day);
}
const uo = 1911;
function cg(e) {
  return e.era === "minguo" ? e.year + uo : 1 - e.year + uo;
}
function Dc(e) {
  let t = e - uo;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class oq extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = _n(a.era, a.year), [n, o] = Dc(r);
    return new He(this, n, o, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Mc(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [a, r] = Dc(cg(t));
    t.era = a, t.year = r;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Mc(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - uo;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Mc(e) {
  let [t, a] = To(cg(e));
  return new He(t, a, e.month, e.day);
}
const Pc = 1948320, jc = [
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
class iq {
  fromJulianDay(t) {
    let a = t - Pc, r = 1 + Math.floor((33 * a + 3) / 12053), n = 365 * (r - 1) + Math.floor((8 * r + 21) / 33), o = a - n, i = o < 216 ? Math.floor(o / 31) : Math.floor((o - 6) / 30), l = o - jc[i] + 1;
    return new He(this, r, i + 1, l);
  }
  toJulianDay(t) {
    let a = Pc - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return a += jc[t.month - 1], a += t.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || cr(25 * t.year + 11, 33) < 8 ? 30 : 29;
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
const Ji = 78, Ic = 80;
class lq extends Ct {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), r = a.year - Ji, n = t - Fa(a.era, a.year, 1, 1), o;
    n < Ic ? (r--, o = va(a.year - 1) ? 31 : 30, n += o + 155 + 90 + 10) : (o = va(a.year) ? 31 : 30, n -= Ic);
    let i, l;
    if (n < o)
      i = 1, l = n + 1;
    else {
      let u = n - o;
      u < 155 ? (i = Math.floor(u / 31) + 2, l = u % 31 + 1) : (u -= 155, i = Math.floor(u / 30) + 7, l = u % 30 + 1);
    }
    return new He(this, r, i, l);
  }
  toJulianDay(t) {
    let a = t.year + Ji, [r, n] = To(a), o, i;
    return va(n) ? (o = 31, i = Fa(r, n, 3, 21)) : (o = 30, i = Fa(r, n, 3, 22)), t.month === 1 ? i + t.day - 1 : (i += o + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (i += (t.month - 7) * 30), i += t.day - 1, i);
  }
  getDaysInMonth(t) {
    return t.month === 1 && va(t.year + Ji) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const co = 1948440, Fc = 1948439, xt = 1300, or = 1600, sq = 460322;
function fo(e, t, a, r) {
  return r + Math.ceil(29.5 * (a - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function fg(e, t, a) {
  let r = Math.floor((30 * (a - t) + 10646) / 10631), n = Math.min(12, Math.ceil((a - (29 + fo(t, r, 1, 1))) / 29.5) + 1), o = a - fo(t, r, n, 1) + 1;
  return new He(e, r, n, o);
}
function Tc(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Is {
  fromJulianDay(t) {
    return fg(this, co, t);
  }
  toJulianDay(t) {
    return fo(co, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = 29 + t.month % 2;
    return t.month === 12 && Tc(t.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Tc(t.year) ? 355 : 354;
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
class uq extends Is {
  fromJulianDay(t) {
    return fg(this, Fc, t);
  }
  toJulianDay(t) {
    return fo(Fc, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const dq = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Il, pr;
function Hn(e) {
  return sq + pr[e - xt];
}
function Jr(e, t) {
  let a = e - xt, r = 1 << 11 - (t - 1);
  return (Il[a] & r) === 0 ? 29 : 30;
}
function Nc(e, t) {
  let a = Hn(e);
  for (let r = 1; r < t; r++) a += Jr(e, r);
  return a;
}
function Vc(e) {
  return pr[e + 1 - xt] - pr[e - xt];
}
class cq extends Is {
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Il || (Il = new Uint16Array(Uint8Array.from(atob(dq), (t) => t.charCodeAt(0)).buffer)), !pr) {
      pr = new Uint32Array(or - xt + 1);
      let t = 0;
      for (let a = xt; a <= or; a++) {
        pr[a - xt] = t;
        for (let r = 1; r <= 12; r++) t += Jr(a, r);
      }
    }
  }
  fromJulianDay(t) {
    let a = t - co, r = Hn(xt), n = Hn(or);
    if (a < r || a > n) return super.fromJulianDay(t);
    {
      let o = xt - 1, i = 1, l = 1;
      for (; l > 0; ) {
        o++, l = a - Hn(o) + 1;
        let u = Vc(o);
        if (l === u) {
          i = 12;
          break;
        } else if (l < u) {
          let d = Jr(o, i);
          for (i = 1; l > d; )
            l -= d, i++, d = Jr(o, i);
          break;
        }
      }
      return new He(this, o, i, a - Nc(o, i) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < xt || t.year > or ? super.toJulianDay(t) : co + Nc(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < xt || t.year > or ? super.getDaysInMonth(t) : Jr(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < xt || t.year > or ? super.getDaysInYear(t) : Vc(t.year);
  }
}
const Rc = 347997, pg = 1080, yg = 24 * pg, fq = 29, pq = 12 * pg + 793, yq = fq * yg + pq;
function Ia(e) {
  return cr(e * 7 + 1, 19) < 7;
}
function Yn(e) {
  let t = Math.floor((235 * e - 234) / 19), a = 12084 + 13753 * t, r = t * 29 + Math.floor(a / 25920);
  return cr(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function mq(e) {
  let t = Yn(e - 1), a = Yn(e);
  return Yn(e + 1) - a === 356 ? 2 : a - t === 382 ? 1 : 0;
}
function on(e) {
  return Yn(e) + mq(e);
}
function mg(e) {
  return on(e + 1) - on(e);
}
function hq(e) {
  let t = mg(e);
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
function Fn(e, t) {
  if (t >= 6 && !Ia(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let a = hq(e);
  return t === 2 ? a === 2 ? 30 : 29 : t === 3 ? a === 0 ? 29 : 30 : t === 6 ? Ia(e) ? 30 : 0 : 30;
}
class vq {
  fromJulianDay(t) {
    let a = t - Rc, r = a * yg / yq, n = Math.floor((19 * r + 234) / 235) + 1, o = on(n), i = Math.floor(a - o);
    for (; i < 1; )
      n--, o = on(n), i = Math.floor(a - o);
    let l = 1, u = 0;
    for (; u < i; )
      u += Fn(n, l), l++;
    l--, u -= Fn(n, l);
    let d = i - u;
    return new He(this, n, l, d);
  }
  toJulianDay(t) {
    let a = on(t.year);
    for (let r = 1; r < t.month; r++) a += Fn(t.year, r);
    return a + t.day + Rc;
  }
  getDaysInMonth(t) {
    return Fn(t.year, t.month);
  }
  getMonthsInYear(t) {
    return Ia(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return mg(t.year);
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
    a.year !== t.year && (Ia(a.year) && !Ia(t.year) && a.month > 6 ? t.month-- : !Ia(a.year) && Ia(t.year) && a.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Fl = 1723856, Lc = 1824665, Tl = 5500;
function po(e, t, a, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (a - 1) + r - 1;
}
function Fs(e, t) {
  let a = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - po(e, a, 1, 1)) / 30), n = t + 1 - po(e, a, r, 1);
  return [
    a,
    r,
    n
  ];
}
function hg(e) {
  return Math.floor(e % 4 / 3);
}
function vg(e, t) {
  return t % 13 !== 0 ? 30 : hg(e) + 5;
}
class Ts {
  fromJulianDay(t) {
    let [a, r, n] = Fs(Fl, t), o = "AM";
    return a <= 0 && (o = "AA", a += Tl), new He(this, o, a, r, n);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "AA" && (a -= Tl), po(Fl, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    return vg(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + hg(t.year);
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
class gq extends Ts {
  fromJulianDay(t) {
    let [a, r, n] = Fs(Fl, t);
    return a += Tl, new He(this, "AA", a, r, n);
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
class bq extends Ts {
  fromJulianDay(t) {
    let [a, r, n] = Fs(Lc, t), o = "CE";
    return a <= 0 && (o = "BCE", a = 1 - a), new He(this, o, a, r, n);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), po(Lc, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), vg(a, t.month);
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
function kq(e) {
  switch (e) {
    case "buddhist":
      return new nq();
    case "ethiopic":
      return new Ts();
    case "ethioaa":
      return new gq();
    case "coptic":
      return new bq();
    case "hebrew":
      return new vq();
    case "indian":
      return new lq();
    case "islamic-civil":
      return new Is();
    case "islamic-tbla":
      return new uq();
    case "islamic-umalqura":
      return new cq();
    case "japanese":
      return new rq();
    case "persian":
      return new iq();
    case "roc":
      return new oq();
    default:
      return new Ct();
  }
}
let Xi = /* @__PURE__ */ new Map();
class Xt {
  constructor(t, a = {}) {
    this.formatter = gg(t, a), this.options = a;
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
    return zq() && (this.resolvedHourCycle || (this.resolvedHourCycle = _q(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
}
const wq = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function gg(e, t = {}) {
  if (typeof t.hour12 == "boolean" && xq()) {
    t = {
      ...t
    };
    let n = wq[String(t.hour12)][e.split("-")[0]], o = t.hour12 ? "h12" : "h23";
    t.hourCycle = n ?? o, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((n, o) => n[0] < o[0] ? -1 : 1).join() : "");
  if (Xi.has(a)) return Xi.get(a);
  let r = new Intl.DateTimeFormat(e, t);
  return Xi.set(a, r), r;
}
let el = null;
function xq() {
  return el == null && (el = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), el;
}
let tl = null;
function zq() {
  return tl == null && (tl = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), tl;
}
function _q(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = gg(e, {
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
function Nt(e, t = Mr()) {
  return Ns(e) ? e.toDate() : e.toDate(t);
}
function Sq(e) {
  return e instanceof _r;
}
function Ns(e) {
  return e instanceof Sr;
}
function qq(e) {
  return Sq(e) || Ns(e);
}
function yr(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else return e.set({ day: 100 }).day;
}
function Tn(e, t) {
  return e.compare(t) < 0;
}
function al(e, t) {
  return e.compare(t) > 0;
}
function Oq(e, t, a) {
  const r = Ds(e, a, "sun");
  return t > r ? e.subtract({ days: r + 7 - t }) : t === r ? e : e.subtract({ days: r - t });
}
function Aq(e, t, a) {
  const r = Ds(e, a, "sun"), n = t === 0 ? 6 : t - 1;
  return r === n ? e : r > n ? e.add({ days: 7 - r + n }) : e.add({ days: n - r });
}
function Cq(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: r = "day", locale: n = "en" } = e;
  if (Array.isArray(t) && t.length) return t.at(-1).copy();
  if (t && !Array.isArray(t)) return t.copy();
  if (a) return a.copy();
  const o = /* @__PURE__ */ new Date(), i = o.getFullYear(), l = o.getMonth() + 1, u = o.getDate(), d = [
    "hour",
    "minute",
    "second"
  ], c = new Xt(n), f = kq(c.resolvedOptions().calendar);
  return d.includes(r ?? "day") ? ut(new _r(i, l, u, 0, 0, 0), f) : ut(new He(i, l, u), f);
}
function Eq(e, t) {
  const a = [];
  for (let r = 0; r < e.length; r += t) a.push(e.slice(r, r + t));
  return a;
}
function $q(e) {
  const t = e.querySelector("[data-selected]");
  if (t) return t.focus();
  const a = e.querySelector("[data-today]");
  if (a) return a.focus();
  const r = e.querySelector("[data-value]:not([data-outside-view]):not([data-disabled])");
  if (r) return r.focus();
}
function Uc(e, t) {
  const a = [];
  let r = e.add({ days: 1 });
  const n = t;
  for (; r.compare(n) < 0; )
    a.push(r), r = r.add({ days: 1 });
  return a;
}
function rl(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: r, locale: n } = e, o = yr(t), i = Array.from({ length: o }, (b, w) => t.set({ day: w + 1 })), l = Dl(t), u = qc(t), d = Oq(l, a, n), c = Aq(u, a, n), f = Uc(d.subtract({ days: 1 }), l), y = Uc(u, c.add({ days: 1 })), p = f.length + i.length + y.length;
  if (r && p < 42) {
    const b = 42 - p;
    let w = y.at(-1);
    w || (w = qc(t));
    const k = Array.from({ length: b }, (S, z) => {
      const $ = z + 1;
      return w.add({ days: $ });
    });
    y.push(...k);
  }
  const g = f.concat(i, y), h = Eq(g, 7);
  return {
    value: t,
    cells: g,
    rows: h
  };
}
function Ea(e) {
  const { numberOfMonths: t, dateObj: a, ...r } = e, n = [];
  if (!t || t === 1)
    return n.push(rl({
      ...r,
      dateObj: a
    })), n;
  n.push(rl({
    ...r,
    dateObj: a
  }));
  for (let o = 1; o < t; o++) {
    const i = a.add({ months: o });
    n.push(rl({
      ...r,
      dateObj: i
    }));
  }
  return n;
}
function Bq(e) {
  const t = new He(2025, 1, 6);
  return (1 - Ds(t, e) + 7) % 7;
}
function Dq(e, t = {}) {
  const a = F(e);
  function r() {
    return a.value;
  }
  function n(b) {
    a.value = b;
  }
  function o(b, w) {
    return new Xt(a.value, {
      ...t,
      ...w
    }).format(b);
  }
  function i(b, w = !0) {
    return qq(b) && w ? o(Nt(b), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Nt(b), { dateStyle: "long" });
  }
  function l(b, w = {}) {
    return new Xt(a.value, {
      ...t,
      month: "long",
      year: "numeric",
      ...w
    }).format(b);
  }
  function u(b, w = {}) {
    return new Xt(a.value, {
      ...t,
      month: "long",
      ...w
    }).format(b);
  }
  function d() {
    const b = Jv(Mr());
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
      label: u(Nt(b.set({ month: w }))),
      value: w
    }));
  }
  function c(b, w = {}) {
    return new Xt(a.value, {
      ...t,
      year: "numeric",
      ...w
    }).format(b);
  }
  function f(b, w) {
    return Ns(b) ? new Xt(a.value, {
      ...t,
      ...w,
      timeZone: b.timeZone
    }).formatToParts(Nt(b)) : new Xt(a.value, {
      ...t,
      ...w
    }).formatToParts(Nt(b));
  }
  function y(b, w = "narrow") {
    return new Xt(a.value, {
      ...t,
      weekday: w
    }).format(b);
  }
  function p(b) {
    const w = new Xt(a.value, {
      ...t,
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(b).find((k) => k.type === "dayPeriod")?.value;
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
  function h(b, w, k = {}) {
    const S = {
      ...g,
      ...k
    }, z = f(b, S).find(($) => $.type === w);
    return z ? z.value : "";
  }
  return {
    setLocale: n,
    getLocale: r,
    fullMonth: u,
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
  const t = Dr({ dir: F("ltr") });
  return M(() => e?.value || t.dir?.value || "ltr");
}
function Pr(e) {
  const t = Kt(), a = t?.type.emits, r = {};
  return a?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), a?.forEach((n) => {
    r[Nk(Ff(n))] = (...o) => e(n, ...o);
  }), r;
}
function Mq(e) {
  const t = M(() => s(e)), a = M(() => new Intl.Collator("en", {
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
let nl = 0;
function Vo() {
  nt((e) => {
    if (!ht) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Wc()), document.body.insertAdjacentElement("beforeend", t[1] ?? Wc()), nl++, e(() => {
      nl === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((a) => a.remove()), nl--;
    });
  });
}
function Wc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Ro(e) {
  return M(() => ze(e) ? !!Ut(e)?.closest("form") : !0);
}
function ie() {
  const e = Kt(), t = F(), a = M(() => r());
  Vk(() => {
    a.value !== r() && Rk(t);
  });
  function r() {
    return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : Ut(t);
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
      const u = l.$.exposed, d = Object.assign({}, o);
      for (const c in u) Object.defineProperty(d, c, {
        enumerable: !0,
        configurable: !0,
        get: () => u[c]
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
function Ie(e) {
  const t = Kt(), a = Object.keys(t?.type.props ?? {}).reduce((n, o) => {
    const i = (t?.type.props[o]).default;
    return i !== void 0 && (n[o] = i), n;
  }, {}), r = Pa(e);
  return M(() => {
    const n = {}, o = t?.vnode.props ?? {};
    return Object.keys(o).forEach((i) => {
      n[Ff(i)] = o[i];
    }), Object.keys({
      ...a,
      ...n
    }).reduce((i, l) => (r.value[l] !== void 0 && (i[l] = r.value[l]), i), {});
  });
}
function Ce(e, t) {
  const a = Ie(e), r = t ? Pr(t) : {};
  return M(() => ({
    ...a.value,
    ...r
  }));
}
function bg() {
  const e = Kt()?.vnode?.scopeId;
  return e ? { [e]: "" } : {};
}
function Pq(e, t) {
  const a = ss(!1, 300);
  Or(() => {
    a.value = !1;
  });
  const r = F(null), n = /* @__PURE__ */ en();
  function o() {
    r.value = null, a.value = !1;
  }
  function i(l, u) {
    if (!u) return;
    const d = l.currentTarget, c = {
      x: l.clientX,
      y: l.clientY
    }, f = jq(c, d.getBoundingClientRect()), y = Iq(c, f, 1), p = Fq(u.getBoundingClientRect()), g = Nq([...y, ...p]);
    r.value = g, a.value = !0;
  }
  return nt((l) => {
    if (e.value && t.value) {
      const u = (c) => i(c, t.value), d = (c) => i(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), l(() => {
        e.value?.removeEventListener("pointerleave", u), t.value?.removeEventListener("pointerleave", d);
      });
    }
  }), nt((l) => {
    if (r.value) {
      const u = (d) => {
        if (!r.value || !(d.target instanceof Element)) return;
        const c = d.target, f = {
          x: d.clientX,
          y: d.clientY
        }, y = e.value?.contains(c) || t.value?.contains(c), p = !Tq(f, r.value), g = !!c.closest("[data-grace-area-trigger]");
        y ? o() : (p || g) && (o(), n.trigger());
      };
      e.value?.ownerDocument.addEventListener("pointermove", u), l(() => e.value?.ownerDocument.removeEventListener("pointermove", u));
    }
  }), {
    isPointerInTransit: a,
    onPointerExit: n.on
  };
}
function jq(e, t) {
  const a = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), n = Math.abs(t.right - e.x), o = Math.abs(t.left - e.x);
  switch (Math.min(a, r, n, o)) {
    case o:
      return "left";
    case n:
      return "right";
    case a:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Iq(e, t, a = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - a,
        y: e.y + a
      }, {
        x: e.x + a,
        y: e.y + a
      });
      break;
    case "bottom":
      r.push({
        x: e.x - a,
        y: e.y - a
      }, {
        x: e.x + a,
        y: e.y - a
      });
      break;
    case "left":
      r.push({
        x: e.x + a,
        y: e.y - a
      }, {
        x: e.x + a,
        y: e.y + a
      });
      break;
    case "right":
      r.push({
        x: e.x - a,
        y: e.y - a
      }, {
        x: e.x - a,
        y: e.y + a
      });
      break;
  }
  return r;
}
function Fq(e) {
  const { top: t, right: a, bottom: r, left: n } = e;
  return [
    {
      x: n,
      y: t
    },
    {
      x: a,
      y: t
    },
    {
      x: a,
      y: r
    },
    {
      x: n,
      y: r
    }
  ];
}
function Tq(e, t) {
  const { x: a, y: r } = e;
  let n = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const l = t[o].x, u = t[o].y, d = t[i].x, c = t[i].y;
    u > r != c > r && a < (d - l) * (r - u) / (c - u) + l && (n = !n);
  }
  return n;
}
function Nq(e) {
  const t = e.slice();
  return t.sort((a, r) => a.x < r.x ? -1 : a.x > r.x ? 1 : a.y < r.y ? -1 : a.y > r.y ? 1 : 0), Vq(t);
}
function Vq(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const o = t.at(-1), i = t[t.length - 2];
      if ((o.x - i.x) * (n.y - i.y) >= (o.y - i.y) * (n.x - i.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  t.pop();
  const a = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; a.length >= 2; ) {
      const o = a.at(-1), i = a[a.length - 2];
      if ((o.x - i.x) * (n.y - i.y) >= (o.y - i.y) * (n.x - i.x)) a.pop();
      else break;
    }
    a.push(n);
  }
  return a.pop(), t.length === 1 && a.length === 1 && t[0].x === a[0].x && t[0].y === a[0].y ? t : t.concat(a);
}
var Rq = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ir = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Vn = {}, ol = 0, kg = function(e) {
  return e && (e.host || kg(e.parentNode));
}, Lq = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var r = kg(a);
    return r && e.contains(r) ? r : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Uq = function(e, t, a, r) {
  var n = Lq(t, Array.isArray(e) ? e : [e]);
  Vn[a] || (Vn[a] = /* @__PURE__ */ new WeakMap());
  var o = Vn[a], i = [], l = /* @__PURE__ */ new Set(), u = new Set(n), d = function(f) {
    !f || l.has(f) || (l.add(f), d(f.parentNode));
  };
  n.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(y) {
      if (l.has(y))
        c(y);
      else
        try {
          var p = y.getAttribute(r), g = p !== null && p !== "false", h = (ir.get(y) || 0) + 1, b = (o.get(y) || 0) + 1;
          ir.set(y, h), o.set(y, b), i.push(y), h === 1 && g && Nn.set(y, !0), b === 1 && y.setAttribute(a, "true"), g || y.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", y, w);
        }
    });
  };
  return c(t), l.clear(), ol++, function() {
    i.forEach(function(f) {
      var y = ir.get(f) - 1, p = o.get(f) - 1;
      ir.set(f, y), o.set(f, p), y || (Nn.has(f) || f.removeAttribute(r), Nn.delete(f)), p || f.removeAttribute(a);
    }), ol--, ol || (ir = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Vn = {});
  };
}, Wq = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), n = Rq(e);
  return n ? (r.push.apply(r, Array.from(n.querySelectorAll("[aria-live], script"))), Uq(r, n, a, "aria-hidden")) : function() {
    return null;
  };
};
function Sn(e) {
  let t;
  ve(() => Ut(e), (a) => {
    let r = !1;
    try {
      r = !!a?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    a && !r ? t = Wq(a) : t && t();
  }), _t(() => {
    t && t();
  });
}
let Kq = 0;
function Qe(e, t = "reka") {
  let a;
  const r = Dr({ useId: void 0 });
  return r.useId ? a = r.useId() : "useId" in $u ? a = $u.useId?.() : a = `${++Kq}`, t ? `${t}-${a}` : a;
}
function wg() {
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
function Gq(e) {
  const t = Dr({ locale: F("en") });
  return M(() => e?.value || t.locale?.value || "en");
}
function Hq(e) {
  const t = F(), a = M(() => t.value?.width ?? 0), r = M(() => t.value?.height ?? 0);
  let n;
  return qe(() => {
    const o = Ut(e);
    o ? (t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    }, n = new ResizeObserver((i) => {
      if (!Array.isArray(i) || !i.length) return;
      const l = i[0];
      let u, d;
      if ("borderBoxSize" in l) {
        const c = l.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
        u = f.inlineSize, d = f.blockSize;
      } else
        u = o.offsetWidth, d = o.offsetHeight;
      t.value = {
        width: u,
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
function Yq(e, t) {
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
function Lo(e) {
  const t = ss("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const n = Ge(), o = r.map((c) => ({
          ...c,
          textValue: c.value?.textValue ?? c.ref.textContent?.trim() ?? ""
        })), i = o.find((c) => c.ref === n), l = o.map((c) => c.textValue), u = Qq(l, t.value, i?.textValue), d = o.find((c) => c.textValue === u);
        return d && d.ref.focus(), d?.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Zq(e, t) {
  return e.map((a, r) => e[(t + r) % e.length]);
}
function Qq(e, t, a) {
  const r = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, n = a ? e.indexOf(a) : -1;
  let o = Zq(e, Math.max(n, 0));
  r.length === 1 && (o = o.filter((l) => l !== a));
  const i = o.find((l) => l.toLowerCase().startsWith(r.toLowerCase()));
  return i !== a ? i : void 0;
}
function Jq(e, t) {
  const a = F({}), r = F("none"), n = F(e), o = e.value ? "mounted" : "unmounted";
  let i;
  const l = t.value?.ownerDocument.defaultView ?? Ar, { state: u, dispatch: d } = Yq(o, {
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
    if (ht) {
      const b = new CustomEvent(h, {
        bubbles: !1,
        cancelable: !1
      });
      t.value?.dispatchEvent(b);
    }
  };
  ve(e, async (h, b) => {
    const w = b !== h;
    if (await Se(), w) {
      const k = r.value, S = Rn(t.value);
      h ? (d("MOUNT"), c("enter"), S === "none" && c("after-enter")) : S === "none" || S === "undefined" || a.value?.display === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : b && k !== S ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const f = (h) => {
    if (h.target !== t.value) return;
    const b = Rn(t.value), w = b.includes(CSS.escape(h.animationName)), k = u.value === "mounted" ? "enter" : "leave";
    if (w && (c(`after-${k}`), d("ANIMATION_END"), !n.value)) {
      const S = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = l?.setTimeout(() => {
        t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = S);
      });
    }
    b === "none" && d("ANIMATION_END");
  }, y = (h) => {
    h.target === t.value && (r.value = Rn(t.value));
  }, p = ve(t, (h, b) => {
    h ? (a.value = getComputedStyle(h), h.addEventListener("animationstart", y), h.addEventListener("animationcancel", f), h.addEventListener("animationend", f)) : (d("ANIMATION_END"), i !== void 0 && l?.clearTimeout(i), b?.removeEventListener("animationstart", y), b?.removeEventListener("animationcancel", f), b?.removeEventListener("animationend", f));
  }, { immediate: !0 }), g = ve(u, () => {
    const h = Rn(t.value);
    r.value = u.value === "mounted" ? h : "none";
  });
  return _t(() => {
    p(), g(), t.value && (t.value.removeEventListener("animationstart", y), t.value.removeEventListener("animationcancel", f), t.value.removeEventListener("animationend", f)), i !== void 0 && l?.clearTimeout(i);
  }), { isPresent: M(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Rn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var la = /* @__PURE__ */ q({
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
    const { present: r, forceMount: n } = Ye(e), o = F(), { isPresent: i } = Jq(r, o);
    a({ present: i });
    let l = t.default({ present: i.value });
    l = Es(l || []);
    const u = Kt();
    if (l && l?.length > 1) {
      const d = u?.parent?.type.name ? `<${u.parent.type.name} />` : "component";
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
      const c = Ut(d);
      return typeof c?.hasAttribute > "u" || (c?.hasAttribute("data-reka-popper-content-wrapper") ? o.value = c.firstElementChild : o.value = c), c;
    } }) : null;
  }
});
const yo = /* @__PURE__ */ q({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      if (!a.default) return null;
      const r = Es(a.default()), n = r.findIndex((u) => u.type !== Lk);
      if (n === -1) return r;
      const o = r[n];
      delete o.props?.ref;
      const i = o.props ? P(t, o.props) : t, l = Uk({
        ...o,
        props: {}
      }, i);
      return r.length === 1 ? l : (r[n] = l, r);
    };
  }
}), Xq = [
  "area",
  "img",
  "input"
], le = /* @__PURE__ */ q({
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
    return typeof r == "string" && Xq.includes(r) ? () => aa(r, t) : r !== "template" ? () => aa(e.as, t, { default: a.default }) : () => aa(yo, t, { default: a.default });
  }
});
function Wt() {
  const e = F(), t = M(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : Ut(e));
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Zt, eO] = /* @__PURE__ */ $e("DialogRoot");
var tO = /* @__PURE__ */ q({
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
    const a = e, r = /* @__PURE__ */ Ze(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), n = F(), o = F(), { modal: i, unmountOnHide: l } = Ye(a);
    return eO({
      open: r,
      modal: i,
      unmountOnHide: l,
      openModal: () => {
        r.value = !0;
      },
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: n,
      contentElement: o
    }), (u, d) => O(u.$slots, "default", {
      open: s(r),
      close: () => r.value = !1
    });
  }
}), xg = tO, aO = /* @__PURE__ */ q({
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
    ie();
    const a = Zt();
    return (r, n) => (v(), x(s(le), P(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: n[0] || (n[0] = (o) => s(a).onOpenChange(!1))
    }), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), Vs = aO;
const rO = "dismissableLayer.pointerDownOutside", nO = "dismissableLayer.focusOutside";
function zg(e, t) {
  if (!(t instanceof Element)) return !1;
  const a = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), n = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(a && (r === a || n.indexOf(r) < n.indexOf(a)));
}
function oO(e, t, a = !0) {
  const r = t?.value?.ownerDocument ?? globalThis?.document, n = F(!1), o = F(() => {
  });
  return nt((i) => {
    if (!ht || !ze(a)) return;
    const l = async (d) => {
      const c = d.target;
      if (!(!t?.value || !c)) {
        if (zg(t.value, c)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let f = function() {
            Fo(rO, e, y);
          };
          const y = { originalEvent: d };
          d.pointerType === "touch" ? (r.removeEventListener("click", o.value), o.value = f, r.addEventListener("click", o.value, { once: !0 })) : f();
        } else r.removeEventListener("click", o.value);
        n.value = !1;
      }
    }, u = window.setTimeout(() => {
      r.addEventListener("pointerdown", l);
    }, 0);
    i(() => {
      window.clearTimeout(u), r.removeEventListener("pointerdown", l), r.removeEventListener("click", o.value);
    });
  }), { onPointerDownCapture: () => {
    ze(a) && (n.value = !0);
  } };
}
function iO(e, t, a = !0) {
  const r = t?.value?.ownerDocument ?? globalThis?.document, n = F(!1);
  return nt((o) => {
    if (!ht || !ze(a)) return;
    const i = async (l) => {
      if (!t?.value) return;
      await Se(), await Se();
      const u = l.target;
      !t.value || !u || zg(t.value, u) || l.target && !n.value && Fo(nO, e, { originalEvent: l });
    };
    r.addEventListener("focusin", i), o(() => r.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      ze(a) && (n.value = !0);
    },
    onBlurCapture: () => {
      ze(a) && (n.value = !1);
    }
  };
}
var lO = /* @__PURE__ */ q({
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
    const a = e, r = t, { forwardRef: n, currentElement: o } = ie(), i = M(() => o.value?.ownerDocument ?? globalThis.document), l = M(() => st.layersRoot), u = M(() => o.value ? Array.from(l.value).indexOf(o.value) : -1), d = M(() => st.layersWithOutsidePointerEventsDisabled.size > 0), c = M(() => {
      const p = Array.from(l.value), [g] = [...st.layersWithOutsidePointerEventsDisabled].slice(-1), h = p.indexOf(g);
      return u.value >= h;
    }), f = oO(async (p) => {
      const g = [...st.branches].some((h) => h?.contains(p.target));
      !a.present || !c.value || g || (r("pointerDownOutside", p), r("interactOutside", p), await Se(), p.defaultPrevented || r("dismiss"));
    }, o), y = iO((p) => {
      const g = [...st.branches].some((h) => h?.contains(p.target));
      !a.present || g || (r("focusOutside", p), r("interactOutside", p), p.defaultPrevented || r("dismiss"));
    }, o);
    return w0("Escape", (p) => {
      !a.present || u.value !== l.value.size - 1 || (r("escapeKeyDown", p), p.defaultPrevented || r("dismiss"));
    }), ve([
      o,
      () => a.disableOutsidePointerEvents,
      () => a.present
    ], ([p, g, h], b, w) => {
      !p || !h || g && (st.layersWithOutsidePointerEventsDisabled.size === 0 && (st.originalBodyPointerEvents = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), st.layersWithOutsidePointerEventsDisabled.add(p), w(() => {
        st.layersWithOutsidePointerEventsDisabled.delete(p), st.layersWithOutsidePointerEventsDisabled.size === 0 && !wr(st.originalBodyPointerEvents) && (i.value.body.style.pointerEvents = st.originalBodyPointerEvents);
      }));
    }, { immediate: !0 }), ve([o, () => a.present], ([p, g], h, b) => {
      !p || !g || (l.value.add(p), b(() => {
        l.value.delete(p);
      }));
    }, { immediate: !0 }), nt((p) => {
      p(() => {
        o.value && (l.value.delete(o.value), st.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (p, g) => (v(), x(s(le), {
      ref: s(n),
      "as-child": p.asChild,
      as: p.as,
      "data-dismissable-layer": "",
      style: lt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: s(y).onFocusCapture,
      onBlurCapture: s(y).onBlurCapture,
      onPointerdownCapture: s(f).onPointerDownCapture
    }, {
      default: m(() => [O(p.$slots, "default")]),
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
}), jr = lO;
const sO = /* @__PURE__ */ n0(() => F([]));
function uO() {
  const e = sO();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && a?.pause(), e.value = Kc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      e.value = Kc(e.value, t), e.value[0]?.resume();
    }
  };
}
function Kc(e, t) {
  const a = [...e], r = a.indexOf(t);
  return r !== -1 && a.splice(r, 1), a;
}
const il = "focusScope.autoFocusOnMount", ll = "focusScope.autoFocusOnUnmount", Gc = {
  bubbles: !1,
  cancelable: !0
};
function dO(e, { select: t = !1 } = {}) {
  const a = Ge();
  for (const r of e)
    if (ma(r, { select: t }), Ge() !== a) return !0;
}
function cO(e) {
  const t = _g(e), a = Hc(t, e), r = Hc(t.reverse(), e);
  return [a, r];
}
function _g(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const n = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || n ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function Hc(e, t) {
  for (const a of e) if (!fO(a, { upTo: t })) return a;
}
function fO(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pO(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ma(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = Ge();
    e.focus({ preventScroll: !0 }), e !== a && pO(e) && t && e.select();
  }
}
var yO = /* @__PURE__ */ q({
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
    const a = e, r = t, { currentRef: n, currentElement: o } = ie(), i = F(null), l = uO(), u = /* @__PURE__ */ Jn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    nt((f) => {
      if (!ht) return;
      const y = o.value;
      if (!a.trapped) return;
      function p(w) {
        if (u.paused || !y) return;
        const k = w.target;
        y.contains(k) ? i.value = k : ma(i.value, { select: !0 });
      }
      function g(w) {
        if (u.paused || !y) return;
        const k = w.relatedTarget;
        k !== null && (y.contains(k) || ma(i.value, { select: !0 }));
      }
      function h(w) {
        const k = i.value;
        k === null || !w.some((S) => S.removedNodes.length > 0) || y.contains(k) || ma(y);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", g);
      const b = new MutationObserver(h);
      y && b.observe(y, {
        childList: !0,
        subtree: !0
      }), f(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", g), b.disconnect();
      });
    });
    function d(f, y) {
      const p = new CustomEvent(il, Gc), g = (h) => r("mountAutoFocus", h);
      f.addEventListener(il, g), f.dispatchEvent(p), f.removeEventListener(il, g), p.defaultPrevented || (dO(_g(f), { select: !0 }), Ge() === y && ma(f));
    }
    nt(async (f) => {
      const y = o.value;
      if (await Se(), !y) return;
      a.present !== !1 && l.add(u);
      const p = Ge();
      !y.contains(p) && a.present !== !1 && d(y, p), f(() => {
        const g = new CustomEvent(ll, Gc), h = (b) => {
          r("unmountAutoFocus", b);
        };
        y.addEventListener(ll, h), y.dispatchEvent(g), y.setAttribute("data-focus-scope-unmounting", ""), setTimeout(() => {
          g.defaultPrevented || ma(p ?? document.body, { select: !0 }), y.removeEventListener(ll, h), l.remove(u), y.removeAttribute("data-focus-scope-unmounting");
        }, 0);
      });
    }), ve(() => a.present, async (f, y) => {
      if (!ht) return;
      if (f === !1 && y === !0) {
        l.remove(u);
        return;
      }
      if (f !== !0 || y !== !1) return;
      l.add(u), await Se();
      const p = o.value;
      if (!p) return;
      const g = Ge();
      p.contains(g) || d(p, g);
    });
    function c(f) {
      if (!a.loop && !a.trapped || u.paused) return;
      const y = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, p = Ge();
      if (y && p) {
        const g = f.currentTarget, [h, b] = cO(g);
        h && b ? !f.shiftKey && p === b ? (f.preventDefault(), a.loop && ma(h, { select: !0 })) : f.shiftKey && p === h && (f.preventDefault(), a.loop && ma(b, { select: !0 })) : p === g && f.preventDefault();
      }
    }
    return (f, y) => (v(), x(s(le), {
      ref_key: "currentRef",
      ref: n,
      tabindex: "-1",
      "as-child": f.asChild,
      as: f.as,
      onKeydown: c
    }, {
      default: m(() => [O(f.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), qn = yO;
const mO = "menu.itemSelect", Nl = ["Enter", " "], hO = [
  "ArrowDown",
  "PageUp",
  "Home"
], Sg = [
  "ArrowUp",
  "PageDown",
  "End"
], vO = [...hO, ...Sg];
[...Nl], [...Nl];
function qg(e) {
  return e ? "open" : "closed";
}
function Vl(e) {
  const t = Ge();
  for (const a of e)
    if (a === t || (a.focus(), Ge() !== t)) return;
}
function gO(e, t) {
  const { x: a, y: r } = e;
  let n = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const l = t[o].x, u = t[o].y, d = t[i].x, c = t[i].y;
    u > r != c > r && a < (d - l) * (r - u) / (c - u) + l && (n = !n);
  }
  return n;
}
function bO(e, t) {
  if (!t) return !1;
  const a = {
    x: e.clientX,
    y: e.clientY
  };
  return gO(a, t);
}
function mo(e) {
  return e.pointerType === "mouse";
}
var kO = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Zt(), { forwardRef: o, currentElement: i } = ie();
    return n.titleId ||= Qe(void 0, "reka-dialog-title"), n.descriptionId ||= Qe(void 0, "reka-dialog-description"), qe(() => {
      n.contentElement = i, Ge() !== document.body && (n.triggerElement.value = Ge());
    }), (l, u) => (v(), x(s(qn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      present: a.present,
      onMountAutoFocus: u[5] || (u[5] = (d) => r("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => r("closeAutoFocus", d))
    }, {
      default: m(() => [_(s(jr), P({
        id: s(n).contentId,
        ref: s(o),
        as: l.as,
        "as-child": l.asChild,
        present: a.present,
        "disable-outside-pointer-events": l.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": s(n).descriptionId,
        "aria-labelledby": s(n).titleId,
        "data-state": s(qg)(s(n).open.value)
      }, l.$attrs, {
        onDismiss: u[0] || (u[0] = (d) => s(n).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (d) => r("escapeKeyDown", d)),
        onFocusOutside: u[2] || (u[2] = (d) => r("focusOutside", d)),
        onInteractOutside: u[3] || (u[3] = (d) => r("interactOutside", d)),
        onPointerDownOutside: u[4] || (u[4] = (d) => r("pointerDownOutside", d))
      }), {
        default: m(() => [O(l.$slots, "default")]),
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
}), Og = kO, wO = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Zt(), o = Pr(r), { forwardRef: i, currentElement: l } = ie(), u = M(() => a.present ? l.value : void 0);
    Sn(u);
    const d = M(() => {
      const { present: c, ...f } = a;
      return f;
    });
    return ve(() => a.present, (c, f) => {
      !c && f && n.triggerElement.value?.focus();
    }), (c, f) => (v(), x(Og, P({
      ...d.value,
      ...s(o)
    }, {
      ref: s(i),
      present: c.present,
      "trap-focus": s(n).open.value,
      "disable-outside-pointer-events": a.disableOutsidePointerEvents,
      onCloseAutoFocus: f[0] || (f[0] = (y) => {
        y.defaultPrevented || (y.preventDefault(), s(n).triggerElement.value?.focus());
      }),
      onPointerDownOutside: f[1] || (f[1] = (y) => {
        const p = y.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && y.preventDefault();
      }),
      onFocusOutside: f[2] || (f[2] = (y) => {
        y.preventDefault();
      })
    }), {
      default: m(() => [O(c.$slots, "default")]),
      _: 3
    }, 16, [
      "present",
      "trap-focus",
      "disable-outside-pointer-events"
    ]));
  }
}), xO = wO, zO = /* @__PURE__ */ q({
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
    const a = e, r = Pr(t);
    ie();
    const n = Zt(), o = F(!1), i = F(!1), l = M(() => {
      const { present: u, ...d } = a;
      return d;
    });
    return ve(() => a.present, (u, d) => {
      !u && d && (o.value || n.triggerElement.value?.focus(), o.value = !1, i.value = !1);
    }), (u, d) => (v(), x(Og, P({
      ...l.value,
      ...s(r)
    }, {
      present: u.present,
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        c.defaultPrevented || (o.value || s(n).triggerElement.value?.focus(), c.preventDefault()), o.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        c.defaultPrevented || (o.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        s(n).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: m(() => [O(u.$slots, "default")]),
      _: 3
    }, 16, ["present"]));
  }
}), _O = zO, SO = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Zt(), o = Pr(r), { forwardRef: i } = ie();
    return (l, u) => (v(), x(s(la), {
      present: l.forceMount || s(n).open.value,
      "force-mount": l.forceMount || !s(n).unmountOnHide.value
    }, {
      default: m(({ present: d }) => [s(n).modal.value ? hr((v(), x(xO, P({
        key: 0,
        ref: s(i),
        present: s(n).unmountOnHide.value || d
      }, {
        ...a,
        ...s(o),
        ...l.$attrs
      }), {
        default: m(() => [O(l.$slots, "default")]),
        _: 2
      }, 1040, ["present"])), [[Qn, s(n).unmountOnHide.value || d]]) : hr((v(), x(_O, P({
        key: 1,
        ref: s(i),
        present: s(n).unmountOnHide.value || d
      }, {
        ...a,
        ...s(o),
        ...l.$attrs
      }), {
        default: m(() => [O(l.$slots, "default")]),
        _: 2
      }, 1040, ["present"])), [[Qn, s(n).unmountOnHide.value || d]])]),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), Ag = SO, qO = /* @__PURE__ */ q({
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
    ie();
    const a = Zt();
    return (r, n) => (v(), x(s(le), P(t, { id: s(a).descriptionId }), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Cg = qO, OO = /* @__PURE__ */ q({
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
    const t = e, a = Zt(), r = zn(t.present);
    return ve(() => t.present, (n) => r.value = n), ie(), (n, o) => (v(), x(s(le), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(a).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" },
      onPointerdown: o[0] || (o[0] = Me(() => {
      }, [
        "left",
        "self",
        "prevent"
      ]))
    }, {
      default: m(() => [O(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), AO = OO, CO = /* @__PURE__ */ q({
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
    const t = Zt(), { forwardRef: a } = ie();
    return (r, n) => s(t)?.modal.value ? (v(), x(s(la), {
      key: 0,
      present: r.forceMount || s(t).open.value,
      "force-mount": r.forceMount || !s(t).unmountOnHide.value
    }, {
      default: m(({ present: o }) => [hr(_(AO, P(r.$attrs, {
        ref: s(a),
        as: r.as,
        "as-child": r.asChild,
        present: s(t).unmountOnHide.value || o
      }), {
        default: m(() => [O(r.$slots, "default")]),
        _: 2
      }, 1040, [
        "as",
        "as-child",
        "present"
      ]), [[Qn, s(t).unmountOnHide.value || o]])]),
      _: 3
    }, 8, ["present", "force-mount"])) : Q("v-if", !0);
  }
}), Eg = CO, EO = /* @__PURE__ */ q({
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
    const t = e, a = Dr({}), r = M(() => t.to ?? a.teleportTo?.value ?? "body"), n = /* @__PURE__ */ Xf();
    return (o, i) => s(n) || o.forceMount ? (v(), x(Nf, {
      key: 0,
      to: r.value,
      disabled: o.disabled,
      defer: o.defer
    }, [O(o.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : Q("v-if", !0);
  }
}), Ga = EO, $O = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(Ga), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), BO = $O, DO = /* @__PURE__ */ q({
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
    return ie(), (r, n) => (v(), x(s(le), P(t, { id: s(a).titleId }), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), $g = DO, MO = /* @__PURE__ */ q({
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
    const t = e, a = Zt(), { forwardRef: r, currentElement: n } = ie();
    return a.contentId ||= Qe(void 0, "reka-dialog-content"), qe(() => {
      a.triggerElement.value = n.value;
    }), (o, i) => (v(), x(s(le), P(t, {
      ref: s(r),
      type: o.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: m(() => [O(o.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), Bg = MO, PO = /* @__PURE__ */ q({
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
    return ie(), (a, r) => (v(), x(s(Vs), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), jO = PO;
const [IO, FO] = /* @__PURE__ */ $e("AlertDialogContent");
var TO = /* @__PURE__ */ q({
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
    const a = e, r = Pr(t);
    ie();
    const n = F();
    return FO({ onCancelElementChange: (o) => {
      n.value = o;
    } }), (o, i) => (v(), x(s(Ag), P({
      ...a,
      ...s(r)
    }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = Me(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = Me(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        Se(() => {
          n.value?.focus({ preventScroll: !0 });
        });
      })
    }), {
      default: m(() => [O(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), NO = TO, VO = /* @__PURE__ */ q({
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
    const t = e, a = IO(), { forwardRef: r, currentElement: n } = ie();
    return qe(() => {
      a.onCancelElementChange(n.value);
    }), (o, i) => (v(), x(s(Vs), P(t, { ref: s(r) }), {
      default: m(() => [O(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), RO = VO, LO = /* @__PURE__ */ q({
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
    return ie(), (a, r) => (v(), x(s(Cg), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), UO = LO, WO = /* @__PURE__ */ q({
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
    return ie(), (a, r) => (v(), x(s(Eg), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), KO = WO, GO = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(Ga), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), HO = GO, YO = /* @__PURE__ */ q({
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
    const a = Ce(e, t);
    return ie(), (r, n) => (v(), x(s(xg), P(s(a), { modal: !0 }), {
      default: m((o) => [O(r.$slots, "default", Pe(Ne(o)))]),
      _: 3
    }, 16));
  }
}), ZO = YO, QO = /* @__PURE__ */ q({
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
    return ie(), (a, r) => (v(), x(s($g), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), JO = QO, XO = /* @__PURE__ */ q({
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
    return ie(), (a, r) => (v(), x(s(Bg), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), eA = XO;
const Yc = "data-reka-collection-item";
function St(e = {}) {
  const { key: t = "", isProvider: a = !1 } = e, r = `${t}CollectionProvider`;
  let n;
  if (a) {
    const c = F(/* @__PURE__ */ new Map());
    n = {
      collectionRef: F(),
      itemMap: c
    }, ns(r, n);
  } else n = sn(r);
  const o = (c = !1) => {
    const f = n.collectionRef.value;
    if (!f) return [];
    const y = Array.from(f.querySelectorAll(`[${Yc}]`)), p = new Map(y.map((h, b) => [h, b])), g = Array.from(n.itemMap.value.values()).sort((h, b) => (p.get(h.ref) ?? -1) - (p.get(b.ref) ?? -1));
    return c ? g : g.filter((h) => h.ref.dataset.disabled !== "");
  }, i = /* @__PURE__ */ q({
    name: "CollectionSlot",
    inheritAttrs: !1,
    setup(c, { slots: f, attrs: y }) {
      const { primitiveElement: p, currentElement: g } = Wt();
      return ve(g, () => {
        n.collectionRef.value = g.value;
      }), () => aa(yo, {
        ref: p,
        ...y
      }, f);
    }
  }), l = /* @__PURE__ */ q({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: f, attrs: y }) {
      const { primitiveElement: p, currentElement: g } = Wt();
      return nt((h) => {
        if (g.value) {
          const b = Wk(g.value);
          n.itemMap.value.set(b, {
            ref: g.value,
            value: c.value
          }), h(() => n.itemMap.value.delete(b));
        }
      }), () => aa(yo, {
        ...y,
        [Yc]: "",
        ref: p
      }, f);
    }
  }), u = M(() => Array.from(n.itemMap.value.values())), d = M(() => n.itemMap.value.size);
  return {
    getItems: o,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: i,
    CollectionItem: l
  };
}
var tA = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(le), {
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
      default: m(() => [O(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Rs = tA, aA = /* @__PURE__ */ q({
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
    const t = e, { primitiveElement: a, currentElement: r } = Wt(), n = M(() => t.checked ?? t.value);
    return ve(n, (o, i) => {
      if (!r.value) return;
      const l = r.value, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "value").set;
      if (d && o !== i) {
        const c = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        d.call(l, o), l.dispatchEvent(c), l.dispatchEvent(f);
      }
    }), (o, i) => (v(), x(Rs, P({
      ref_key: "primitiveElement",
      ref: a
    }, {
      ...t,
      ...o.$attrs
    }, { as: "input" }), null, 16));
  }
}), Zc = aA, rA = /* @__PURE__ */ q({
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
    const t = e, a = M(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), r = M(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
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
    return (n, o) => (v(), U(xe, null, [Q(" We render single input if it's required "), a.value ? (v(), x(Zc, P({ key: n.name }, {
      ...t,
      ...n.$attrs
    }, {
      name: n.name,
      value: n.value
    }), null, 16, ["name", "value"])) : (v(!0), U(xe, { key: 1 }, je(r.value, (i) => (v(), x(Zc, P({ key: i.name }, { ref_for: !0 }, {
      ...t,
      ...n.$attrs
    }, {
      name: i.name,
      value: i.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Ls = rA;
function nA(e, t, a) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => ln(r, t, a)) : ln(e, t, a);
}
function ln(e, t, a) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof a == "function" ? a(e, t) : typeof a == "string" ? e?.[a] === t?.[a] : ka(e, t);
}
const oA = "rovingFocusGroup.onEntryFocus", iA = {
  bubbles: !1,
  cancelable: !0
}, lA = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function sA(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Dg(e, t, a) {
  const r = sA(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return lA[r];
}
function Mg(e, t = !1) {
  const a = Ge();
  for (const r of e)
    if (r === a || (r.focus({ preventScroll: t }), Ge() !== a)) return;
}
function uA(e, t) {
  return e.map((a, r) => e[(t + r) % e.length]);
}
const [Uo, dA] = /* @__PURE__ */ $e("ListboxRoot");
var cA = /* @__PURE__ */ q({
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
    const r = e, n = a, { multiple: o, highlightOnHover: i, orientation: l, disabled: u, selectionBehavior: d, dir: c } = Ye(r), { getItems: f } = St({ isProvider: !0 }), { handleTypeaheadSearch: y } = Lo(), { primitiveElement: p, currentElement: g } = Wt(), h = wg(), b = ia(c), w = Ro(g), k = F(), S = F(!1), z = F(!0), $ = /* @__PURE__ */ Ze(r, "modelValue", n, {
      defaultValue: r.defaultValue ?? (o.value ? [] : void 0),
      passive: r.modelValue === void 0,
      deep: !0
    });
    function A(X) {
      if (S.value = !0, r.multiple) {
        const K = Array.isArray($.value) ? [...$.value] : [], ne = K.findIndex((de) => ln(de, X, r.by));
        r.selectionBehavior === "toggle" ? (ne === -1 ? K.push(X) : K.splice(ne, 1), $.value = K) : ($.value = [X], k.value = X);
      } else r.selectionBehavior === "toggle" && ln($.value, X, r.by) ? $.value = void 0 : $.value = X;
      setTimeout(() => {
        S.value = !1;
      }, 1);
    }
    const C = F(null), E = F(null), D = F(!1), R = F(!1), oe = /* @__PURE__ */ en(), ae = /* @__PURE__ */ en(), H = /* @__PURE__ */ en();
    function re() {
      return f().map((X) => X.ref).filter((X) => X.dataset.disabled !== "");
    }
    function j(X, K = !0, ne) {
      if (!X) return;
      C.value = X, (ne ?? z.value) && C.value.focus(), K && C.value.scrollIntoView({ block: "nearest" });
      const de = f().find((be) => be.ref === X);
      n("highlight", de);
    }
    function W(X) {
      if (D.value) H.trigger(X);
      else {
        const K = f().find((ne) => ln(ne.value, X, r.by));
        K && (C.value = K.ref, j(K.ref));
      }
    }
    function L(X) {
      if (C.value && C.value.isConnected) {
        if (X.ctrlKey || X.metaKey || X.altKey) return;
        X.preventDefault(), X.stopPropagation(), R.value || C.value.click();
      }
    }
    function G(X) {
      if (z.value) {
        if (S.value = !0, D.value) ae.trigger(X);
        else {
          const K = X.altKey || X.ctrlKey || X.metaKey;
          if (K && X.key === "a" && o.value) {
            const ne = f(), de = ne.map((_e) => _e.value);
            $.value = [...de], X.preventDefault();
            const be = ne.at(-1);
            be && j(be.ref);
          } else if (!K) {
            const ne = y(X.key, f());
            ne && j(ne);
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
      Se(() => {
        R.value = !1;
      });
    }
    function fe() {
      Se(() => {
        const X = new KeyboardEvent("keydown", { key: "PageUp" });
        Ve(X);
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
        if (E.value) j(E.value);
        else {
          const ne = re()?.[0];
          j(ne);
        }
    }
    function Ve(X) {
      const K = Dg(X, l.value, b.value);
      if (!K) return;
      let ne = re();
      if (C.value) {
        if (K === "last") ne.reverse();
        else if (K === "prev" || K === "next") {
          K === "prev" && ne.reverse();
          const de = ne.indexOf(C.value);
          ne = ne.slice(de + 1);
        }
        Oe(X, ne[0]);
      }
      if (ne.length) {
        const de = !C.value && K === "prev" ? ne.length - 1 : 0;
        j(ne[de]);
      }
      if (D.value) return ae.trigger(X);
    }
    function Oe(X, K) {
      if (!(D.value || r.selectionBehavior !== "replace" || !o.value || !Array.isArray($.value) || (X.altKey || X.ctrlKey || X.metaKey) && !X.shiftKey) && X.shiftKey) {
        const ne = f().filter((_e) => _e.ref.dataset.disabled !== "");
        let de = ne.find((_e) => _e.ref === K)?.value;
        if (X.key === h.END ? de = ne.at(-1)?.value : X.key === h.HOME && (de = ne[0]?.value), !de || !k.value) return;
        const be = _S(ne.map((_e) => _e.value), k.value, de);
        $.value = be;
      }
    }
    async function ge(X, K = !0) {
      if (ht)
        if (await Se(), D.value) oe.trigger({
          event: X,
          scroll: K
        });
        else {
          const ne = re(), de = ne.find((_e) => _e.dataset.state === "checked"), be = K ? void 0 : !1;
          de ? j(de, K, be) : ne.length && j(ne[0], K, be);
        }
    }
    let De = !1;
    return ve($, () => {
      if (!S.value) {
        const X = De;
        De = !0, Se(() => {
          ge(void 0, X);
        });
      }
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: C,
      highlightItem: W,
      highlightFirstItem: fe,
      highlightSelected: ge,
      getItems: f
    }), dA({
      modelValue: $,
      onValueChange: A,
      multiple: o,
      orientation: l,
      dir: b,
      disabled: u,
      highlightOnHover: i,
      highlightedElement: C,
      isVirtual: D,
      virtualFocusHook: oe,
      virtualKeydownHook: ae,
      virtualHighlightHook: H,
      by: r.by,
      firstValue: k,
      selectionBehavior: d,
      focusable: z,
      onLeave: te,
      onEnter: he,
      changeHighlight: j,
      onKeydownEnter: L,
      onKeydownNavigation: Ve,
      onKeydownTypeAhead: G,
      onCompositionStart: ce,
      onCompositionEnd: T,
      highlightFirstItem: fe
    }), (X, K) => (v(), x(s(le), {
      ref_key: "primitiveElement",
      ref: p,
      as: X.as,
      "as-child": X.asChild,
      dir: s(b),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: te,
      onFocusout: K[0] || (K[0] = async (ne) => {
        const de = ne.relatedTarget || ne.target;
        await Se(), C.value && s(g) && !s(g).contains(de) && te(ne);
      })
    }, {
      default: m(() => [O(X.$slots, "default", { modelValue: s($) }), s(w) && X.name ? (v(), x(s(Ls), {
        key: 0,
        name: X.name,
        value: s($),
        disabled: s(u),
        required: X.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : Q("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), fA = cA, pA = /* @__PURE__ */ q({
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
    const { CollectionSlot: t } = St(), a = Uo(), r = ss(!1, 10);
    return (n, o) => (v(), x(s(t), null, {
      default: m(() => [_(s(le), {
        role: "listbox",
        as: n.as,
        "as-child": n.asChild,
        tabindex: s(a).focusable.value ? s(a).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": s(a).orientation.value,
        "aria-multiselectable": !!s(a).multiple.value,
        "data-orientation": s(a).orientation.value,
        onMousedown: o[0] || (o[0] = Me((i) => r.value = !0, ["left"])),
        onFocus: o[1] || (o[1] = (i) => {
          s(r) || s(a).onEnter(i);
        }),
        onKeydown: [
          o[2] || (o[2] = mt((i) => {
            s(a).orientation.value === "vertical" && (i.key === "ArrowLeft" || i.key === "ArrowRight") || s(a).orientation.value === "horizontal" && (i.key === "ArrowUp" || i.key === "ArrowDown") || (i.preventDefault(), s(a).focusable.value && s(a).onKeydownNavigation(i));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          mt(s(a).onKeydownEnter, ["enter"]),
          s(a).onKeydownTypeAhead
        ]
      }, {
        default: m(() => [O(n.$slots, "default")]),
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
}), yA = pA, mA = /* @__PURE__ */ q({
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
    const a = e, r = /* @__PURE__ */ Ze(a, "modelValue", t, {
      defaultValue: "",
      passive: a.modelValue === void 0
    }), n = Uo(), { primitiveElement: o, currentElement: i } = Wt(), l = M(() => a.disabled || n.disabled.value || !1), u = F();
    Kk(() => u.value = n.highlightedElement.value?.id), qe(() => {
      n.focusable.value = !1, setTimeout(() => {
        a.autoFocus && i.value?.focus();
      }, 1);
    }), _t(() => {
      n.focusable.value = !0;
    });
    const { isComposing: d, shouldDeferInput: c, handleCompositionStart: f, handleCompositionUpdate: y, handleCompositionEnd: p } = Zv((k) => {
      r.value = k.target.value, n.onCompositionEnd(), n.highlightFirstItem();
    });
    function g() {
      n.onCompositionStart(), f();
    }
    function h(k) {
      c.value || (r.value = k.target.value, n.highlightFirstItem());
    }
    function b(k) {
      d.value || (k.preventDefault(), n.onKeydownNavigation(k));
    }
    function w(k) {
      d.value || n.onKeydownEnter(k);
    }
    return (k, S) => (v(), x(s(le), {
      ref_key: "primitiveElement",
      ref: o,
      as: k.as,
      "as-child": k.asChild,
      value: s(r),
      disabled: l.value ? "" : void 0,
      "data-disabled": l.value ? "" : void 0,
      "aria-disabled": l.value ?? void 0,
      "aria-activedescendant": u.value,
      type: "text",
      onKeydown: [mt(b, [
        "down",
        "up",
        "home",
        "end"
      ]), mt(w, ["enter"])],
      onInput: h,
      onCompositionstart: g,
      onCompositionupdate: s(y),
      onCompositionend: s(p)
    }, {
      default: m(() => [O(k.$slots, "default", { modelValue: s(r) })]),
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
}), hA = mA;
const [Jj, vA] = /* @__PURE__ */ $e("ListboxGroup");
var gA = /* @__PURE__ */ q({
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
    const t = e, a = Qe(void 0, "reka-listbox-group");
    return vA({ id: a }), (r, n) => (v(), x(s(le), P({ role: "group" }, t, { "aria-labelledby": s(a) }), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), bA = gA;
const kA = "listbox.select", [wA, xA] = /* @__PURE__ */ $e("ListboxItem");
var zA = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Qe(void 0, "reka-listbox-item"), { CollectionItem: o } = St(), { forwardRef: i, currentElement: l } = ie(), u = Uo(), d = M(() => l.value != null && l.value === u.highlightedElement.value), c = M(() => nA(u.modelValue.value, a.value, u.by)), f = M(() => u.disabled.value || a.disabled);
    async function y(g) {
      r("select", g), !g?.defaultPrevented && !f.value && g && (u.onValueChange(a.value), u.changeHighlight(l.value));
    }
    function p(g) {
      const h = {
        originalEvent: g,
        value: a.value
      };
      Fo(kA, y, h);
    }
    return xA({ isSelected: c }), (g, h) => (v(), x(s(o), { value: g.value }, {
      default: m(() => [ls([
        d.value,
        c.value,
        f.value,
        s(u).focusable.value
      ], () => _(s(le), P({ id: s(n) }, g.$attrs, {
        ref: s(i),
        role: "option",
        tabindex: s(u).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: g.as,
        "as-child": g.asChild,
        disabled: f.value ? "" : void 0,
        "data-disabled": f.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: p,
        onKeydown: mt(Me(p, ["prevent"]), ["space"]),
        onPointermove: h[0] || (h[0] = () => {
          s(u).highlightedElement.value !== s(l) && s(u).highlightOnHover.value && s(u).changeHighlight(s(l), !1, !1);
        })
      }), {
        default: m(() => [O(g.$slots, "default")]),
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
}), _A = zA, SA = /* @__PURE__ */ q({
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
    ie();
    const a = wA();
    return (r, n) => s(a).isSelected.value ? (v(), x(s(le), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16)) : Q("v-if", !0);
  }
}), qA = SA;
const [Pg, OA] = /* @__PURE__ */ $e("PopperRoot");
var AA = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = F();
    return OA({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, r) => O(a.$slots, "default");
  }
}), On = AA, CA = /* @__PURE__ */ q({
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
    const t = e, { forwardRef: a, currentElement: r } = ie(), n = Pg();
    return Vf(() => {
      n.onAnchorChange(t.reference ?? r.value);
    }), (o, i) => (v(), x(s(le), {
      ref: s(a),
      as: o.as,
      "as-child": o.asChild
    }, {
      default: m(() => [O(o.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), An = CA;
const EA = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, $A = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var BA = /* @__PURE__ */ q({
  __name: "Arrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    rounded: {
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
      default: "svg"
    }
  },
  setup(e) {
    const t = e;
    return ie(), (a, r) => (v(), x(s(le), P(t, {
      width: a.width,
      height: a.height,
      viewBox: a.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: a.asChild ? void 0 : "none"
    }), {
      default: m(() => [O(a.$slots, "default", {}, () => [a.rounded ? (v(), U("path", $A)) : (v(), U("path", EA))])]),
      _: 3
    }, 16, [
      "width",
      "height",
      "viewBox",
      "preserveAspectRatio"
    ]));
  }
}), DA = BA;
function MA(e) {
  return e !== null;
}
function PA(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      const { placement: a, rects: r, middlewareData: n } = t, o = n.arrow?.centerOffset !== 0, i = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [u, d] = Rl(a), c = {
        start: e.dir === "rtl" ? "100%" : "0%",
        center: "50%",
        end: e.dir === "rtl" ? "0%" : "100%"
      }[d], f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[d], y = (n.arrow?.x ?? 0) + i / 2, p = (n.arrow?.y ?? 0) + l / 2;
      let g = "", h = "";
      return u === "bottom" ? (g = o ? c : `${y}px`, h = `${-l}px`) : u === "top" ? (g = o ? c : `${y}px`, h = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, h = o ? f : `${p}px`) : u === "left" && (g = `${r.floating.width + l}px`, h = o ? f : `${p}px`), { data: {
        x: g,
        y: h
      } };
    }
  };
}
function Rl(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const jA = ["top", "right", "bottom", "left"], xa = Math.min, ft = Math.max, ho = Math.round, Ln = Math.floor, Lt = (e) => ({
  x: e,
  y: e
}), IA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ll(e, t, a) {
  return ft(e, xa(t, a));
}
function ra(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function na(e) {
  return e.split("-")[0];
}
function Ir(e) {
  return e.split("-")[1];
}
function Us(e) {
  return e === "x" ? "y" : "x";
}
function Ws(e) {
  return e === "y" ? "height" : "width";
}
function Rt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ks(e) {
  return Us(Rt(e));
}
function FA(e, t, a) {
  a === void 0 && (a = !1);
  const r = Ir(e), n = Ks(e), o = Ws(n);
  let i = n === "x" ? r === (a ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = vo(i)), [i, vo(i)];
}
function TA(e) {
  const t = vo(e);
  return [Ul(e), t, Ul(t)];
}
function Ul(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Qc = ["left", "right"], Jc = ["right", "left"], NA = ["top", "bottom"], VA = ["bottom", "top"];
function RA(e, t, a) {
  switch (e) {
    case "top":
    case "bottom":
      return a ? t ? Jc : Qc : t ? Qc : Jc;
    case "left":
    case "right":
      return t ? NA : VA;
    default:
      return [];
  }
}
function LA(e, t, a, r) {
  const n = Ir(e);
  let o = RA(na(e), a === "start", r);
  return n && (o = o.map((i) => i + "-" + n), t && (o = o.concat(o.map(Ul)))), o;
}
function vo(e) {
  const t = na(e);
  return IA[t] + e.slice(t.length);
}
function UA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jg(e) {
  return typeof e != "number" ? UA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function go(e) {
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
function Xc(e, t, a) {
  let {
    reference: r,
    floating: n
  } = e;
  const o = Rt(t), i = Ks(t), l = Ws(i), u = na(t), d = o === "y", c = r.x + r.width / 2 - n.width / 2, f = r.y + r.height / 2 - n.height / 2, y = r[l] / 2 - n[l] / 2;
  let p;
  switch (u) {
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
  switch (Ir(t)) {
    case "start":
      p[i] -= y * (a && d ? -1 : 1);
      break;
    case "end":
      p[i] += y * (a && d ? -1 : 1);
      break;
  }
  return p;
}
async function WA(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: r,
    y: n,
    platform: o,
    rects: i,
    elements: l,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: y = !1,
    padding: p = 0
  } = ra(t, e), g = jg(p), h = l[y ? f === "floating" ? "reference" : "floating" : f], b = go(await o.getClippingRect({
    element: (a = await (o.isElement == null ? void 0 : o.isElement(h))) == null || a ? h : h.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), w = f === "floating" ? {
    x: r,
    y: n,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(k)) ? await (o.getScale == null ? void 0 : o.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, z = go(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: k,
    strategy: u
  }) : w);
  return {
    top: (b.top - z.top + g.top) / S.y,
    bottom: (z.bottom - b.bottom + g.bottom) / S.y,
    left: (b.left - z.left + g.left) / S.x,
    right: (z.right - b.right + g.right) / S.x
  };
}
const KA = 50, GA = async (e, t, a) => {
  const {
    placement: r = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i
  } = a, l = i.detectOverflow ? i : {
    ...i,
    detectOverflow: WA
  }, u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: c,
    y: f
  } = Xc(d, r, u), y = r, p = 0;
  const g = {};
  for (let h = 0; h < o.length; h++) {
    const b = o[h];
    if (!b)
      continue;
    const {
      name: w,
      fn: k
    } = b, {
      x: S,
      y: z,
      data: $,
      reset: A
    } = await k({
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
    }, A && p < KA && (p++, typeof A == "object" && (A.placement && (y = A.placement), A.rects && (d = A.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : A.rects), {
      x: c,
      y: f
    } = Xc(d, y, u)), h = -1);
  }
  return {
    x: c,
    y: f,
    placement: y,
    strategy: n,
    middlewareData: g
  };
}, HA = (e) => ({
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
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = ra(e, t) || {};
    if (d == null)
      return {};
    const f = jg(c), y = {
      x: a,
      y: r
    }, p = Ks(n), g = Ws(p), h = await i.getDimensions(d), b = p === "y", w = b ? "top" : "left", k = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", z = o.reference[g] + o.reference[p] - y[p] - o.floating[g], $ = y[p] - o.reference[p], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let C = A ? A[S] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(A))) && (C = l.floating[S] || o.floating[g]);
    const E = z / 2 - $ / 2, D = C / 2 - h[g] / 2 - 1, R = xa(f[w], D), oe = xa(f[k], D), ae = R, H = C - h[g] - oe, re = C / 2 - h[g] / 2 + E, j = Ll(ae, re, H), W = !u.arrow && Ir(n) != null && re !== j && o.reference[g] / 2 - (re < ae ? R : oe) - h[g] / 2 < 0, L = W ? re < ae ? re - ae : re - H : 0;
    return {
      [p]: y[p] + L,
      data: {
        [p]: j,
        centerOffset: re - j - L,
        ...W && {
          alignmentOffset: L
        }
      },
      reset: W
    };
  }
}), YA = function(e) {
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
        platform: u,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: y,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ...b
      } = ra(e, t);
      if ((a = o.arrow) != null && a.alignmentOffset)
        return {};
      const w = na(n), k = Rt(l), S = na(l) === l, z = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), $ = y || (S || !h ? [vo(l)] : TA(l)), A = g !== "none";
      !y && A && $.push(...LA(l, h, g, z));
      const C = [l, ...$], E = await u.detectOverflow(t, b), D = [];
      let R = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(E[w]), f) {
        const re = FA(n, i, z);
        D.push(E[re[0]], E[re[1]]);
      }
      if (R = [...R, {
        placement: n,
        overflows: D
      }], !D.every((re) => re <= 0)) {
        var oe, ae;
        const re = (((oe = o.flip) == null ? void 0 : oe.index) || 0) + 1, j = C[re];
        if (j && (!(f === "alignment" && k !== Rt(j)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((L) => Rt(L.placement) === k ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: re,
              overflows: R
            },
            reset: {
              placement: j
            }
          };
        let W = (ae = R.filter((L) => L.overflows[0] <= 0).sort((L, G) => L.overflows[1] - G.overflows[1])[0]) == null ? void 0 : ae.placement;
        if (!W)
          switch (p) {
            case "bestFit": {
              var H;
              const L = (H = R.filter((G) => {
                if (A) {
                  const ce = Rt(G.placement);
                  return ce === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ce === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((ce) => ce > 0).reduce((ce, T) => ce + T, 0)]).sort((G, ce) => G[1] - ce[1])[0]) == null ? void 0 : H[0];
              L && (W = L);
              break;
            }
            case "initialPlacement":
              W = l;
              break;
          }
        if (n !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function ef(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function tf(e) {
  return jA.some((t) => e[t] >= 0);
}
const ZA = function(e) {
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
          }), l = ef(i, a.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: tf(l)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...o,
            altBoundary: !0
          }), l = ef(i, a.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: tf(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ig = /* @__PURE__ */ new Set(["left", "top"]);
async function QA(e, t) {
  const {
    placement: a,
    platform: r,
    elements: n
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)), i = na(a), l = Ir(a), u = Rt(a) === "y", d = Ig.has(i) ? -1 : 1, c = o && u ? -1 : 1, f = ra(t, e);
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
  return l && typeof g == "number" && (p = l === "end" ? g * -1 : g), u ? {
    x: p * c,
    y: y * d
  } : {
    x: y * d,
    y: p * c
  };
}
const JA = function(e) {
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
      } = t, u = await QA(t, e);
      return i === ((a = l.offset) == null ? void 0 : a.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: n + u.x,
        y: o + u.y,
        data: {
          ...u,
          placement: i
        }
      };
    }
  };
}, XA = function(e) {
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
        limiter: u = {
          fn: (w) => {
            let {
              x: k,
              y: S
            } = w;
            return {
              x: k,
              y: S
            };
          }
        },
        ...d
      } = ra(e, t), c = {
        x: a,
        y: r
      }, f = await o.detectOverflow(t, d), y = Rt(na(n)), p = Us(y);
      let g = c[p], h = c[y];
      if (i) {
        const w = p === "y" ? "top" : "left", k = p === "y" ? "bottom" : "right", S = g + f[w], z = g - f[k];
        g = Ll(S, g, z);
      }
      if (l) {
        const w = y === "y" ? "top" : "left", k = y === "y" ? "bottom" : "right", S = h + f[w], z = h - f[k];
        h = Ll(S, h, z);
      }
      const b = u.fn({
        ...t,
        [p]: g,
        [y]: h
      });
      return {
        ...b,
        data: {
          x: b.x - a,
          y: b.y - r,
          enabled: {
            [p]: i,
            [y]: l
          }
        }
      };
    }
  };
}, eC = function(e) {
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
        mainAxis: u = !0,
        crossAxis: d = !0
      } = ra(e, t), c = {
        x: a,
        y: r
      }, f = Rt(n), y = Us(f);
      let p = c[y], g = c[f];
      const h = ra(l, t), b = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (u) {
        const S = y === "y" ? "height" : "width", z = o.reference[y] - o.floating[S] + b.mainAxis, $ = o.reference[y] + o.reference[S] - b.mainAxis;
        p < z ? p = z : p > $ && (p = $);
      }
      if (d) {
        var w, k;
        const S = y === "y" ? "width" : "height", z = Ig.has(na(n)), $ = o.reference[f] - o.floating[S] + (z && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (z ? 0 : b.crossAxis), A = o.reference[f] + o.reference[S] + (z ? 0 : ((k = i.offset) == null ? void 0 : k[f]) || 0) - (z ? b.crossAxis : 0);
        g < $ ? g = $ : g > A && (g = A);
      }
      return {
        [y]: p,
        [f]: g
      };
    }
  };
}, tC = function(e) {
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
        apply: u = () => {
        },
        ...d
      } = ra(e, t), c = await i.detectOverflow(t, d), f = na(n), y = Ir(n), p = Rt(n) === "y", {
        width: g,
        height: h
      } = o.floating;
      let b, w;
      f === "top" || f === "bottom" ? (b = f, w = y === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = f, b = y === "end" ? "top" : "bottom");
      const k = h - c.top - c.bottom, S = g - c.left - c.right, z = xa(h - c[b], k), $ = xa(g - c[w], S), A = !t.middlewareData.shift;
      let C = z, E = $;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (E = S), (r = t.middlewareData.shift) != null && r.enabled.y && (C = k), A && !y) {
        const R = ft(c.left, 0), oe = ft(c.right, 0), ae = ft(c.top, 0), H = ft(c.bottom, 0);
        p ? E = g - 2 * (R !== 0 || oe !== 0 ? R + oe : ft(c.left, c.right)) : C = h - 2 * (ae !== 0 || H !== 0 ? ae + H : ft(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const D = await i.getDimensions(l.floating);
      return g !== D.width || h !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Wo() {
  return typeof window < "u";
}
function Ha(e) {
  return Gs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qt(e) {
  var t;
  return (t = (Gs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gs(e) {
  return Wo() ? e instanceof Node || e instanceof yt(e).Node : !1;
}
function Et(e) {
  return Wo() ? e instanceof Element || e instanceof yt(e).Element : !1;
}
function sa(e) {
  return Wo() ? e instanceof HTMLElement || e instanceof yt(e).HTMLElement : !1;
}
function af(e) {
  return !Wo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof yt(e).ShadowRoot;
}
function Cn(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: r,
    display: n
  } = Bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + a) && n !== "inline" && n !== "contents";
}
function aC(e) {
  return /^(table|td|th)$/.test(Ha(e));
}
function Ko(e) {
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
const rC = /transform|translate|scale|rotate|perspective|filter/, nC = /paint|layout|strict|content/, $a = (e) => !!e && e !== "none";
let sl;
function Hs(e) {
  const t = Et(e) ? Bt(e) : e;
  return $a(t.transform) || $a(t.translate) || $a(t.scale) || $a(t.rotate) || $a(t.perspective) || !Ys() && ($a(t.backdropFilter) || $a(t.filter)) || rC.test(t.willChange || "") || nC.test(t.contain || "");
}
function oC(e) {
  let t = za(e);
  for (; sa(t) && !qr(t); ) {
    if (Hs(t))
      return t;
    if (Ko(t))
      return null;
    t = za(t);
  }
  return null;
}
function Ys() {
  return sl == null && (sl = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), sl;
}
function qr(e) {
  return /^(html|body|#document)$/.test(Ha(e));
}
function Bt(e) {
  return yt(e).getComputedStyle(e);
}
function Go(e) {
  return Et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function za(e) {
  if (Ha(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    af(e) && e.host || // Fallback.
    Qt(e)
  );
  return af(t) ? t.host : t;
}
function Fg(e) {
  const t = za(e);
  return qr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : sa(t) && Cn(t) ? t : Fg(t);
}
function pn(e, t, a) {
  var r;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const n = Fg(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = yt(n);
  if (o) {
    const l = Wl(i);
    return t.concat(i, i.visualViewport || [], Cn(n) ? n : [], l && a ? pn(l) : []);
  } else
    return t.concat(n, pn(n, [], a));
}
function Wl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Tg(e) {
  const t = Bt(e);
  let a = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const n = sa(e), o = n ? e.offsetWidth : a, i = n ? e.offsetHeight : r, l = ho(a) !== o || ho(r) !== i;
  return l && (a = o, r = i), {
    width: a,
    height: r,
    $: l
  };
}
function Zs(e) {
  return Et(e) ? e : e.contextElement;
}
function mr(e) {
  const t = Zs(e);
  if (!sa(t))
    return Lt(1);
  const a = t.getBoundingClientRect(), {
    width: r,
    height: n,
    $: o
  } = Tg(t);
  let i = (o ? ho(a.width) : a.width) / r, l = (o ? ho(a.height) : a.height) / n;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
const iC = /* @__PURE__ */ Lt(0);
function Ng(e) {
  const t = yt(e);
  return !Ys() || !t.visualViewport ? iC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function lC(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== yt(e) ? !1 : t;
}
function Ua(e, t, a, r) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = Zs(e);
  let i = Lt(1);
  t && (r ? Et(r) && (i = mr(r)) : i = mr(e));
  const l = lC(o, a, r) ? Ng(o) : Lt(0);
  let u = (n.left + l.x) / i.x, d = (n.top + l.y) / i.y, c = n.width / i.x, f = n.height / i.y;
  if (o) {
    const y = yt(o), p = r && Et(r) ? yt(r) : r;
    let g = y, h = Wl(g);
    for (; h && r && p !== g; ) {
      const b = mr(h), w = h.getBoundingClientRect(), k = Bt(h), S = w.left + (h.clientLeft + parseFloat(k.paddingLeft)) * b.x, z = w.top + (h.clientTop + parseFloat(k.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, f *= b.y, u += S, d += z, g = yt(h), h = Wl(g);
    }
  }
  return go({
    width: c,
    height: f,
    x: u,
    y: d
  });
}
function Ho(e, t) {
  const a = Go(e).scrollLeft;
  return t ? t.left + a : Ua(Qt(e)).left + a;
}
function Vg(e, t) {
  const a = e.getBoundingClientRect(), r = a.left + t.scrollLeft - Ho(e, a), n = a.top + t.scrollTop;
  return {
    x: r,
    y: n
  };
}
function sC(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: r,
    strategy: n
  } = e;
  const o = n === "fixed", i = Qt(r), l = t ? Ko(t.floating) : !1;
  if (r === i || l && o)
    return a;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Lt(1);
  const c = Lt(0), f = sa(r);
  if ((f || !f && !o) && ((Ha(r) !== "body" || Cn(i)) && (u = Go(r)), f)) {
    const p = Ua(r);
    d = mr(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const y = i && !f && !o ? Vg(i, u) : Lt(0);
  return {
    width: a.width * d.x,
    height: a.height * d.y,
    x: a.x * d.x - u.scrollLeft * d.x + c.x + y.x,
    y: a.y * d.y - u.scrollTop * d.y + c.y + y.y
  };
}
function uC(e) {
  return Array.from(e.getClientRects());
}
function dC(e) {
  const t = Qt(e), a = Go(e), r = e.ownerDocument.body, n = ft(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = ft(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -a.scrollLeft + Ho(e);
  const l = -a.scrollTop;
  return Bt(r).direction === "rtl" && (i += ft(t.clientWidth, r.clientWidth) - n), {
    width: n,
    height: o,
    x: i,
    y: l
  };
}
const rf = 25;
function cC(e, t) {
  const a = yt(e), r = Qt(e), n = a.visualViewport;
  let o = r.clientWidth, i = r.clientHeight, l = 0, u = 0;
  if (n) {
    o = n.width, i = n.height;
    const c = Ys();
    (!c || c && t === "fixed") && (l = n.offsetLeft, u = n.offsetTop);
  }
  const d = Ho(r);
  if (d <= 0) {
    const c = r.ownerDocument, f = c.body, y = getComputedStyle(f), p = c.compatMode === "CSS1Compat" && parseFloat(y.marginLeft) + parseFloat(y.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - p);
    g <= rf && (o -= g);
  } else d <= rf && (o += d);
  return {
    width: o,
    height: i,
    x: l,
    y: u
  };
}
function fC(e, t) {
  const a = Ua(e, !0, t === "fixed"), r = a.top + e.clientTop, n = a.left + e.clientLeft, o = sa(e) ? mr(e) : Lt(1), i = e.clientWidth * o.x, l = e.clientHeight * o.y, u = n * o.x, d = r * o.y;
  return {
    width: i,
    height: l,
    x: u,
    y: d
  };
}
function nf(e, t, a) {
  let r;
  if (t === "viewport")
    r = cC(e, a);
  else if (t === "document")
    r = dC(Qt(e));
  else if (Et(t))
    r = fC(t, a);
  else {
    const n = Ng(e);
    r = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    };
  }
  return go(r);
}
function Rg(e, t) {
  const a = za(e);
  return a === t || !Et(a) || qr(a) ? !1 : Bt(a).position === "fixed" || Rg(a, t);
}
function pC(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let r = pn(e, [], !1).filter((l) => Et(l) && Ha(l) !== "body"), n = null;
  const o = Bt(e).position === "fixed";
  let i = o ? za(e) : e;
  for (; Et(i) && !qr(i); ) {
    const l = Bt(i), u = Hs(i);
    !u && l.position === "fixed" && (n = null), (o ? !u && !n : !u && l.position === "static" && n && (n.position === "absolute" || n.position === "fixed") || Cn(i) && !u && Rg(e, i)) ? r = r.filter((d) => d !== i) : n = l, i = za(i);
  }
  return t.set(e, r), r;
}
function yC(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: r,
    strategy: n
  } = e;
  const o = [...a === "clippingAncestors" ? Ko(t) ? [] : pC(t, this._c) : [].concat(a), r], i = nf(t, o[0], n);
  let l = i.top, u = i.right, d = i.bottom, c = i.left;
  for (let f = 1; f < o.length; f++) {
    const y = nf(t, o[f], n);
    l = ft(y.top, l), u = xa(y.right, u), d = xa(y.bottom, d), c = ft(y.left, c);
  }
  return {
    width: u - c,
    height: d - l,
    x: c,
    y: l
  };
}
function mC(e) {
  const {
    width: t,
    height: a
  } = Tg(e);
  return {
    width: t,
    height: a
  };
}
function hC(e, t, a) {
  const r = sa(t), n = Qt(t), o = a === "fixed", i = Ua(e, !0, o, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Lt(0);
  function d() {
    u.x = Ho(n);
  }
  if (r || !r && !o)
    if ((Ha(t) !== "body" || Cn(n)) && (l = Go(t)), r) {
      const p = Ua(t, !0, o, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else n && d();
  o && !r && n && d();
  const c = n && !r && !o ? Vg(n, l) : Lt(0), f = i.left + l.scrollLeft - u.x - c.x, y = i.top + l.scrollTop - u.y - c.y;
  return {
    x: f,
    y,
    width: i.width,
    height: i.height
  };
}
function ul(e) {
  return Bt(e).position === "static";
}
function of(e, t) {
  if (!sa(e) || Bt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return Qt(e) === a && (a = a.ownerDocument.body), a;
}
function Lg(e, t) {
  const a = yt(e);
  if (Ko(e))
    return a;
  if (!sa(e)) {
    let n = za(e);
    for (; n && !qr(n); ) {
      if (Et(n) && !ul(n))
        return n;
      n = za(n);
    }
    return a;
  }
  let r = of(e, t);
  for (; r && aC(r) && ul(r); )
    r = of(r, t);
  return r && qr(r) && ul(r) && !Hs(r) ? a : r || oC(e) || a;
}
const vC = async function(e) {
  const t = this.getOffsetParent || Lg, a = this.getDimensions, r = await a(e.floating);
  return {
    reference: hC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function gC(e) {
  return Bt(e).direction === "rtl";
}
const bC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sC,
  getDocumentElement: Qt,
  getClippingRect: yC,
  getOffsetParent: Lg,
  getElementRects: vC,
  getClientRects: uC,
  getDimensions: mC,
  getScale: mr,
  isElement: Et,
  isRTL: gC
};
function Ug(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function kC(e, t) {
  let a = null, r;
  const n = Qt(e);
  function o() {
    var l;
    clearTimeout(r), (l = a) == null || l.disconnect(), a = null;
  }
  function i(l, u) {
    l === void 0 && (l = !1), u === void 0 && (u = 1), o();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: y,
      height: p
    } = d;
    if (l || t(), !y || !p)
      return;
    const g = Ln(f), h = Ln(n.clientWidth - (c + y)), b = Ln(n.clientHeight - (f + p)), w = Ln(c), k = {
      rootMargin: -g + "px " + -h + "px " + -b + "px " + -w + "px",
      threshold: ft(0, xa(1, u)) || 1
    };
    let S = !0;
    function z($) {
      const A = $[0].intersectionRatio;
      if (A !== u) {
        if (!S)
          return i();
        A ? i(!1, A) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Ug(d, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      a = new IntersectionObserver(z, {
        ...k,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(z, k);
    }
    a.observe(e);
  }
  return i(!0), o;
}
function wC(e, t, a, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, d = Zs(e), c = n || o ? [...d ? pn(d) : [], ...t ? pn(t) : []] : [];
  c.forEach((w) => {
    n && w.addEventListener("scroll", a, {
      passive: !0
    }), o && w.addEventListener("resize", a);
  });
  const f = d && l ? kC(d, a) : null;
  let y = -1, p = null;
  i && (p = new ResizeObserver((w) => {
    let [k] = w;
    k && k.target === d && p && t && (p.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var S;
      (S = p) == null || S.observe(t);
    })), a();
  }), d && !u && p.observe(d), t && p.observe(t));
  let g, h = u ? Ua(e) : null;
  u && b();
  function b() {
    const w = Ua(e);
    h && !Ug(h, w) && a(), h = w, g = requestAnimationFrame(b);
  }
  return a(), () => {
    var w;
    c.forEach((k) => {
      n && k.removeEventListener("scroll", a), o && k.removeEventListener("resize", a);
    }), f?.(), (w = p) == null || w.disconnect(), p = null, u && cancelAnimationFrame(g);
  };
}
const xC = JA, zC = XA, lf = YA, _C = tC, SC = ZA, qC = HA, OC = eC, AC = (e, t, a) => {
  const r = /* @__PURE__ */ new Map(), n = {
    platform: bC,
    ...a
  }, o = {
    ...n.platform,
    _c: r
  };
  return GA(e, t, {
    ...n,
    platform: o
  });
};
function CC(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Kl(e) {
  if (CC(e)) {
    const t = e.$el;
    return Gs(t) && Ha(t) === "#comment" ? null : t;
  }
  return e;
}
function sr(e) {
  return typeof e == "function" ? e() : s(e);
}
function EC(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Kl(sr(e.element));
      return a == null ? {} : qC({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Wg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sf(e, t) {
  const a = Wg(e);
  return Math.round(t * a) / a;
}
function $C(e, t, a) {
  a === void 0 && (a = {});
  const r = a.whileElementsMounted, n = M(() => {
    var C;
    return (C = sr(a.open)) != null ? C : !0;
  }), o = M(() => sr(a.middleware)), i = M(() => {
    var C;
    return (C = sr(a.placement)) != null ? C : "bottom";
  }), l = M(() => {
    var C;
    return (C = sr(a.strategy)) != null ? C : "absolute";
  }), u = M(() => {
    var C;
    return (C = sr(a.transform)) != null ? C : !0;
  }), d = M(() => Kl(e.value)), c = M(() => Kl(t.value)), f = F(0), y = F(0), p = F(l.value), g = F(i.value), h = ga({}), b = F(!1), w = M(() => {
    const C = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return C;
    const E = sf(c.value, f.value), D = sf(c.value, y.value);
    return u.value ? {
      ...C,
      transform: "translate(" + E + "px, " + D + "px)",
      ...Wg(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: E + "px",
      top: D + "px"
    };
  });
  let k;
  function S() {
    if (d.value == null || c.value == null)
      return;
    const C = n.value;
    AC(d.value, c.value, {
      middleware: o.value,
      placement: i.value,
      strategy: l.value
    }).then((E) => {
      f.value = E.x, y.value = E.y, p.value = E.strategy, g.value = E.placement, h.value = E.middlewareData, b.value = C !== !1;
    });
  }
  function z() {
    typeof k == "function" && (k(), k = void 0);
  }
  function $() {
    if (z(), r === void 0) {
      S();
      return;
    }
    if (d.value != null && c.value != null) {
      k = r(d.value, c.value, S);
      return;
    }
  }
  function A() {
    n.value || (b.value = !1);
  }
  return ve([o, i, l, n], S, {
    flush: "sync"
  }), ve([d, c], $, {
    flush: "sync"
  }), ve(n, A, {
    flush: "sync"
  }), wo() && is(z), {
    x: Da(f),
    y: Da(y),
    strategy: Da(p),
    placement: Da(g),
    middlewareData: Da(h),
    isPositioned: Da(b),
    floatingStyles: w,
    update: S
  };
}
const BC = ["dir"], Kg = {
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
}, [DC, MC] = /* @__PURE__ */ $e("PopperContent");
var PC = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Uf({
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
  }, { ...Kg }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Pg(), { forwardRef: o, currentElement: i } = ie(), l = ia(M(() => a.dir)), u = F(), d = F(), { width: c, height: f } = Hq(d), y = M(() => a.side + (a.align !== "center" ? `-${a.align}` : "")), p = M(() => typeof a.collisionPadding == "number" ? a.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...a.collisionPadding
    }), g = M(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = M(() => ({
      padding: p.value,
      boundary: g.value.filter(MA),
      altBoundary: g.value.length > 0
    })), b = M(() => ({
      mainAxis: a.sideFlip,
      crossAxis: a.alignFlip
    })), w = M(() => [
      xC({
        mainAxis: a.sideOffset + f.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && lf({
        ...h.value,
        ...b.value
      }),
      a.avoidCollisions && zC({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? OC() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && lf({
        ...h.value,
        ...b.value
      }),
      _C({
        ...h.value,
        apply: ({ elements: H, rects: re, availableWidth: j, availableHeight: W }) => {
          const { width: L, height: G } = re.reference, ce = H.floating.style;
          ce.setProperty("--reka-popper-available-width", `${j}px`), ce.setProperty("--reka-popper-available-height", `${W}px`), ce.setProperty("--reka-popper-anchor-width", `${L}px`), ce.setProperty("--reka-popper-anchor-height", `${G}px`);
        }
      }),
      d.value && EC({
        element: d.value,
        padding: a.arrowPadding
      }),
      PA({
        arrowWidth: c.value,
        arrowHeight: f.value,
        dir: l.value
      }),
      a.hideWhenDetached && SC({
        strategy: "referenceHidden",
        ...h.value
      })
    ]), k = M(() => a.reference ?? n.anchor.value), { floatingStyles: S, placement: z, isPositioned: $, middlewareData: A } = $C(k, u, {
      strategy: a.positionStrategy,
      placement: y,
      whileElementsMounted: (...H) => wC(...H, {
        layoutShift: !a.disableUpdateOnLayoutShift,
        animationFrame: a.updatePositionStrategy === "always"
      }),
      middleware: w
    }), C = M(() => Rl(z.value)[0]), E = M(() => Rl(z.value)[1]);
    Vf(() => {
      $.value && r("placed");
    });
    const D = M(() => {
      const H = A.value.arrow?.centerOffset !== 0;
      return a.hideShiftedArrow && H;
    }), R = F("");
    nt(() => {
      i.value && (R.value = window.getComputedStyle(i.value).zIndex);
    });
    const oe = M(() => A.value.arrow?.x ?? 0), ae = M(() => A.value.arrow?.y ?? 0);
    return MC({
      placedSide: C,
      onArrowChange: (H) => d.value = H,
      arrowX: oe,
      arrowY: ae,
      shouldHideArrow: D
    }), (H, re) => (v(), U("div", {
      ref_key: "floatingRef",
      ref: u,
      "data-reka-popper-content-wrapper": "",
      dir: s(l),
      style: lt({
        ...s(S),
        transform: s($) ? s(S).transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: R.value,
        "--reka-popper-transform-origin": [s(A).transformOrigin?.x, s(A).transformOrigin?.y].join(" "),
        ...s(A).hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      })
    }, [a.memoDependencies ? ls([
      a.asChild,
      a.as,
      C.value,
      E.value,
      s($),
      ...Object.values(H.$attrs),
      ...a.memoDependencies
    ], () => (v(), x(s(le), P({
      key: 0,
      ref: s(o)
    }, H.$attrs, {
      "as-child": a.asChild,
      as: a.as,
      "data-side": C.value,
      "data-align": E.value,
      style: { animation: s($) ? void 0 : "none" }
    }), {
      default: m(() => [O(H.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "style"
    ])), re, 0) : (v(), x(s(le), P({
      key: 1,
      ref: s(o)
    }, H.$attrs, {
      "as-child": a.asChild,
      as: a.as,
      "data-side": C.value,
      "data-align": E.value,
      dir: s(l),
      style: { animation: s($) ? void 0 : "none" }
    }), {
      default: m(() => [O(H.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "dir",
      "style"
    ]))], 12, BC));
  }
}), En = PC;
const jC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var IC = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {
      type: Number,
      required: !1
    },
    height: {
      type: Number,
      required: !1
    },
    rounded: {
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
      default: "svg"
    }
  },
  setup(e) {
    const { forwardRef: t } = ie(), a = DC(), r = M(() => jC[a.placedSide.value]);
    return (n, o) => (v(), U("span", {
      ref: (i) => {
        s(a).onArrowChange(i ?? void 0);
      },
      style: lt({
        position: "absolute",
        left: s(a).arrowX?.value ? `${s(a).arrowX?.value}px` : void 0,
        top: s(a).arrowY?.value ? `${s(a).arrowY?.value}px` : void 0,
        [r.value]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[s(a).placedSide.value],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[s(a).placedSide.value],
        visibility: s(a).shouldHideArrow.value ? "hidden" : void 0
      })
    }, [_(DA, P(n.$attrs, {
      ref: s(t),
      style: { display: "block" },
      as: n.as,
      "as-child": n.asChild,
      rounded: n.rounded,
      width: n.width,
      height: n.height
    }), {
      default: m(() => [O(n.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "rounded",
      "width",
      "height"
    ])], 4));
  }
}), FC = IC;
const [Ya, TC] = /* @__PURE__ */ $e("ComboboxRoot");
var NC = /* @__PURE__ */ q({
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
    const r = e, n = a, { primitiveElement: o, currentElement: i } = Wt(), { multiple: l, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: f, openOnClick: y, dir: p, resetModelValueOnClear: g, highlightOnHover: h } = Ye(r), b = ia(p), w = /* @__PURE__ */ Ze(r, "modelValue", n, {
      defaultValue: r.defaultValue ?? (l.value ? [] : void 0),
      passive: r.modelValue === void 0,
      deep: !0
    }), k = /* @__PURE__ */ Ze(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    });
    async function S(W) {
      k.value = W, H.value = "", W ? (await Se(), o.value?.highlightSelected(), $.value = !0, C.value?.focus()) : ($.value = !1, setTimeout(() => {
        !W && r.resetSearchTermOnBlur && z.trigger();
      }, 1));
    }
    const z = /* @__PURE__ */ en(), $ = F(!1), A = F(!1), C = F(), E = F(), D = M(() => o.value?.highlightedElement ?? void 0), R = F(/* @__PURE__ */ new Map()), oe = F(/* @__PURE__ */ new Map()), { contains: ae } = Mq({ sensitivity: "base" }), H = F(""), re = M((W) => {
      if (!H.value || r.ignoreFilter || A.value) return {
        count: R.value.size,
        items: W?.items ?? /* @__PURE__ */ new Map(),
        groups: W?.groups ?? new Set(oe.value.keys())
      };
      let L = 0;
      const G = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Set();
      for (const [T, fe] of R.value) {
        const te = ae(fe, H.value);
        G.set(T, te ? 1 : 0), te && L++;
      }
      for (const [T, fe] of oe.value) for (const te of fe) if (G.get(te) > 0) {
        ce.add(T);
        break;
      }
      return {
        count: L,
        items: G,
        groups: ce
      };
    }), j = Kt();
    return qe(() => {
      j?.exposed && (j.exposed.highlightItem = o.value?.highlightItem, j.exposed.highlightFirstItem = o.value?.highlightFirstItem, j.exposed.highlightSelected = o.value?.highlightSelected);
    }), t({
      filtered: re,
      highlightedElement: D,
      highlightItem: o.value?.highlightItem,
      highlightFirstItem: o.value?.highlightFirstItem,
      highlightSelected: o.value?.highlightSelected
    }), TC({
      modelValue: w,
      multiple: l,
      disabled: u,
      open: k,
      onOpenChange: S,
      contentId: "",
      isUserInputted: $,
      isVirtual: A,
      inputElement: C,
      highlightedElement: D,
      onInputElementChange: (W) => C.value = W,
      triggerElement: E,
      onTriggerElementChange: (W) => E.value = W,
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
    }), (W, L) => (v(), x(s(On), null, {
      default: m(() => [_(s(fA), P({
        ref_key: "primitiveElement",
        ref: o
      }, W.$attrs, {
        modelValue: s(w),
        "onUpdate:modelValue": L[0] || (L[0] = (G) => tt(w) ? w.value = G : null),
        style: { pointerEvents: s(k) ? "auto" : void 0 },
        as: W.as,
        "as-child": W.asChild,
        dir: s(b),
        multiple: s(l),
        name: W.name,
        required: W.required,
        disabled: s(u),
        "highlight-on-hover": s(h),
        by: r.by,
        onHighlight: L[1] || (L[1] = (G) => n("highlight", G))
      }), {
        default: m(() => [O(W.$slots, "default", {
          open: s(k),
          modelValue: s(w)
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
}), VC = NC, RC = /* @__PURE__ */ q({
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
    const { forwardRef: t } = ie();
    return (a, r) => (v(), x(s(An), {
      "as-child": "",
      reference: a.reference
    }, {
      default: m(() => [_(s(le), P({
        ref: s(t),
        "as-child": a.asChild,
        as: a.as
      }, a.$attrs), {
        default: m(() => [O(a.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), LC = RC;
const [Xj, UC] = /* @__PURE__ */ $e("ComboboxContent");
var WC = /* @__PURE__ */ q({
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
    const a = e, r = t, { position: n } = Ye(a), o = Ya(), i = M(() => o.ignoreFilter.value ? o.allItems.value.size === 0 : o.filterState.value.count === 0), { forwardRef: l, currentElement: u } = ie();
    zn(a.bodyLock), Vo(), Sn(o.parentElement);
    const d = M(() => a.position === "popper" ? a : {}), c = Ie(d.value), f = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    UC({ position: n });
    const y = F(!1);
    qe(() => {
      o.inputElement.value && (y.value = u.value.contains(o.inputElement.value), y.value && o.inputElement.value.focus());
    }), _t(() => {
      const g = Ge();
      y.value && (!g || g === document.body) && o.triggerElement.value?.focus();
    });
    function p(g) {
      if (o.parentElement.value?.contains(g)) return !0;
      const h = (g instanceof Element ? g.closest("label") : null)?.control;
      return !!h && !!o.parentElement.value?.contains(h);
    }
    return (g, h) => (v(), x(s(yA), { "as-child": "" }, {
      default: m(() => [_(s(qn), {
        "as-child": "",
        onMountAutoFocus: h[5] || (h[5] = Me(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: h[6] || (h[6] = Me(() => {
        }, ["prevent"]))
      }, {
        default: m(() => [_(s(jr), {
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (b) => s(o).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (b) => {
            p(b.target) && b.preventDefault(), r("focusOutside", b);
          }),
          onInteractOutside: h[2] || (h[2] = (b) => r("interactOutside", b)),
          onEscapeKeyDown: h[3] || (h[3] = (b) => r("escapeKeyDown", b)),
          onPointerDownOutside: h[4] || (h[4] = (b) => {
            p(b.target) && b.preventDefault(), r("pointerDownOutside", b);
          })
        }, {
          default: m(() => [(v(), x(Sa(s(n) === "popper" ? s(En) : s(le)), P({
            ...g.$attrs,
            ...s(c)
          }, {
            id: s(o).contentId,
            ref: s(l),
            "memo-dependencies": s(n) === "popper" ? [s(o).filterSearch.value, s(o).filterState.value] : void 0,
            "data-state": s(o).open.value ? "open" : "closed",
            "data-empty": i.value ? "" : void 0,
            style: {
              display: a.hideWhenEmpty && i.value ? "none" : "flex",
              flexDirection: "column",
              outline: "none",
              ...s(n) === "popper" ? f : {}
            }
          }), {
            default: m(() => [O(g.$slots, "default")]),
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
}), KC = WC, GC = /* @__PURE__ */ q({
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
    const a = Ce(e, t), { forwardRef: r } = ie(), n = Ya();
    return n.contentId ||= Qe(void 0, "reka-combobox-content"), (o, i) => (v(), x(s(la), { present: o.forceMount || s(n).open.value }, {
      default: m(() => [_(KC, P({
        ...s(a),
        ...o.$attrs
      }, { ref: s(r) }), {
        default: m(() => [O(o.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), uf = GC, HC = /* @__PURE__ */ q({
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
    const t = e, a = Ya(), r = M(() => a.ignoreFilter.value ? a.allItems.value.size === 0 : a.filterState.value.count === 0);
    return (n, o) => r.value ? (v(), x(s(le), Pe(P({ key: 0 }, t)), {
      default: m(() => [O(n.$slots, "default", {}, () => [o[0] || (o[0] = J("No options"))])]),
      _: 3
    }, 16)) : Q("v-if", !0);
  }
}), YC = HC;
const [Gg, ZC] = /* @__PURE__ */ $e("ComboboxGroup");
var QC = /* @__PURE__ */ q({
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
    const t = e, a = Qe(void 0, "reka-combobox-group"), r = Ya(), n = M(() => r.ignoreFilter.value ? !0 : r.filterSearch.value ? r.filterState.value.groups.has(a) : !0), o = ZC({
      id: a,
      labelId: ""
    });
    return qe(() => {
      r.allGroups.value.has(a) || r.allGroups.value.set(a, /* @__PURE__ */ new Set());
    }), _t(() => {
      r.allGroups.value.delete(a);
    }), (i, l) => (v(), x(s(bA), P({
      id: s(a),
      "aria-labelledby": s(o).labelId
    }, t, { hidden: n.value ? void 0 : !0 }), {
      default: m(() => [O(i.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), JC = QC, XC = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Ya(), o = Uo(), { primitiveElement: i, currentElement: l } = Wt(), u = /* @__PURE__ */ Ze(a, "modelValue", r, { passive: a.modelValue === void 0 });
    qe(() => {
      l.value && n.onInputElementChange(l.value);
    });
    const { isComposing: d, shouldDeferInput: c, handleCompositionStart: f, handleCompositionUpdate: y, handleCompositionEnd: p } = Zv(($) => {
      const A = $.target;
      A && h(A.value);
    });
    function g($) {
      d.value || ($.preventDefault(), n.open.value || n.onOpenChange(!0));
    }
    function h($) {
      n.open.value ? n.filterSearch.value = $ : (n.onOpenChange(!0), Se(() => {
        $ && (n.filterSearch.value = $, o.highlightFirstItem());
      }));
    }
    function b($) {
      c.value || h($.target.value);
    }
    function w() {
      n.openOnFocus.value && !n.open.value && n.onOpenChange(!0);
    }
    function k($) {
      if (!n.open.value) return;
      const A = $.relatedTarget;
      if (!A) return;
      const C = n.parentElement.value?.contains(A), E = document.getElementById(n.contentId)?.contains(A);
      !C && !E && requestAnimationFrame(() => {
        if (!n.open.value) return;
        const D = document.activeElement;
        !n.parentElement.value?.contains(D) && !document.getElementById(n.contentId)?.contains(D) && n.onOpenChange(!1);
      });
    }
    function S() {
      n.openOnClick.value && !n.open.value && n.onOpenChange(!0);
    }
    function z() {
      const $ = n.modelValue.value;
      a.displayValue ? u.value = a.displayValue($) : !n.multiple.value && $ && !Array.isArray($) && typeof $ != "object" ? u.value = $.toString() : u.value = "", Se(() => {
        u.value = u.value;
      });
    }
    return n.onResetSearchTerm(() => {
      z();
    }), ve(n.modelValue, async () => {
      !n.isUserInputted.value && n.resetSearchTermOnSelect.value && z();
    }, {
      immediate: !0,
      deep: !0
    }), ve(n.filterState, ($, A) => {
      !n.isVirtual.value && A.count === 0 && o.highlightFirstItem();
    }), ($, A) => (v(), x(s(hA), {
      ref_key: "primitiveElement",
      ref: i,
      modelValue: s(u),
      "onUpdate:modelValue": A[0] || (A[0] = (C) => tt(u) ? u.value = C : null),
      as: $.as,
      "as-child": $.asChild,
      "auto-focus": $.autoFocus,
      disabled: $.disabled,
      "aria-expanded": s(n).open.value,
      "aria-controls": s(n).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: S,
      onInput: b,
      onKeydown: mt(g, ["down", "up"]),
      onFocus: w,
      onBlur: k,
      onCompositionstart: s(f),
      onCompositionupdate: s(y),
      onCompositionend: s(p)
    }, {
      default: m(() => [O($.$slots, "default")]),
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
}), eE = XC, tE = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Qe(void 0, "reka-combobox-item"), o = Ya(), i = Gg(null), { primitiveElement: l, currentElement: u } = Wt();
    if (a.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = M(() => {
      if (o.isVirtual.value || o.ignoreFilter.value || !o.filterSearch.value) return !0;
      {
        const c = o.filterState.value.items.get(n);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return qe(() => {
      o.allItems.value.set(n, a.textValue || u.value.textContent || u.value.innerText);
      const c = i?.id;
      c && (o.allGroups.value.has(c) ? o.allGroups.value.get(c)?.add(n) : o.allGroups.value.set(c, /* @__PURE__ */ new Set([n])));
    }), _t(() => {
      o.allItems.value.delete(n);
    }), (c, f) => d.value ? ls([
      d.value,
      s(o).filterSearch.value,
      s(o).disabled.value,
      c.disabled,
      a.value,
      a.as,
      a.asChild,
      ...Object.values(c.$attrs)
    ], () => (v(), x(s(_A), P({ key: 0 }, a, {
      id: s(n),
      ref_key: "primitiveElement",
      ref: l,
      disabled: s(o).disabled.value || c.disabled,
      onSelect: f[0] || (f[0] = (y) => {
        r("select", y), !y.defaultPrevented && (!s(o).multiple.value && !c.disabled && !s(o).disabled.value ? (y.preventDefault(), s(o).onOpenChange(!1), s(o).modelValue.value = a.value) : s(o).multiple.value && s(o).inputElement.value?.focus());
      })
    }), {
      default: m(() => [O(c.$slots, "default", {}, () => [J(V(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])), f, 1) : Q("v-if", !0);
  }
}), aE = tE, rE = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(qA), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), nE = rE, oE = /* @__PURE__ */ q({
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
    ie();
    const a = Gg({
      id: "",
      labelId: ""
    });
    return a.labelId ||= Qe(void 0, "reka-combobox-group-label"), (r, n) => (v(), x(s(le), P(t, { id: s(a).labelId }), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), iE = oE, lE = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(Ga), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), sE = lE, uE = /* @__PURE__ */ q({
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
    const t = e, { forwardRef: a, currentElement: r } = ie(), n = Ya(), o = M(() => t.disabled || n.disabled.value || !1);
    return qe(() => {
      r.value && n.onTriggerElementChange(r.value);
    }), (i, l) => (v(), x(s(le), P(t, {
      ref: s(a),
      type: i.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": s(n).open.value,
      "aria-controls": s(n).contentId,
      "data-state": s(n).open.value ? "open" : "closed",
      disabled: o.value,
      "data-disabled": o.value ? "" : void 0,
      "aria-disabled": o.value ?? void 0,
      onClick: l[0] || (l[0] = (u) => s(n).onOpenChange(!s(n).open.value))
    }), {
      default: m(() => [O(i.$slots, "default")]),
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
}), dE = uE;
function cE(e) {
  const t = Dr({ nonce: F() });
  return M(() => e?.value || t.nonce?.value);
}
const [Hg, fE] = /* @__PURE__ */ $e("AvatarRoot");
var pE = /* @__PURE__ */ q({
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
    return ie(), fE({ imageLoadingStatus: F("idle") }), (t, a) => (v(), x(s(le), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: m(() => [O(t.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), yE = pE, mE = /* @__PURE__ */ q({
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
    const t = e, a = Hg();
    ie();
    const r = F(t.delayMs === void 0);
    return nt((n) => {
      if (t.delayMs && ht) {
        const o = window.setTimeout(() => {
          r.value = !0;
        }, t.delayMs);
        n(() => {
          window.clearTimeout(o);
        });
      }
    }), (n, o) => r.value && s(a).imageLoadingStatus.value !== "loaded" ? (v(), x(s(le), {
      key: 0,
      "as-child": n.asChild,
      as: n.as
    }, {
      default: m(() => [O(n.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"])) : Q("v-if", !0);
  }
}), hE = mE;
function df(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function vE(e, { referrerPolicy: t, crossOrigin: a } = {}) {
  const r = F(!1), n = F(null), o = M(() => r.value ? (!n.value && ht && (n.value = new window.Image()), n.value) : null), i = F(df(o.value, e.value)), l = (u) => () => {
    r.value && (i.value = u);
  };
  return qe(() => {
    r.value = !0, nt((u) => {
      const d = o.value;
      if (!d) return;
      i.value = df(d, e.value);
      const c = l("loaded"), f = l("error");
      d.addEventListener("load", c), d.addEventListener("error", f), t?.value && (d.referrerPolicy = t.value), typeof a?.value == "string" && (d.crossOrigin = a.value), u(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", f);
      });
    });
  }), _t(() => {
    r.value = !1;
  }), i;
}
var gE = /* @__PURE__ */ q({
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
    ie();
    const l = Hg(), u = vE(n, {
      referrerPolicy: o,
      crossOrigin: i
    });
    return ve(u, (d) => {
      r("loadingStatusChange", d), d !== "idle" && (l.imageLoadingStatus.value = d);
    }, { immediate: !0 }), (d, c) => hr((v(), x(s(le), {
      role: "img",
      "as-child": d.asChild,
      as: d.as,
      src: s(n),
      referrerpolicy: s(o),
      crossorigin: s(i)
    }, {
      default: m(() => [O(d.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "src",
      "referrerpolicy",
      "crossorigin"
    ])), [[Qn, s(u) === "loaded"]]);
  }
}), bE = gE;
function kE(e) {
  function t(o) {
    return Array.isArray(e.date.value) ? e.date.value.some((i) => wa(i, o)) : e.date.value ? wa(e.date.value, o) : !1;
  }
  const a = M(() => {
    if (Array.isArray(e.date.value)) {
      if (!e.date.value.length) return !1;
      for (const o of e.date.value)
        if (e.isDateDisabled?.(o) || e.isDateUnavailable?.(o)) return !0;
    } else {
      if (!e.date.value) return !1;
      if (e.isDateDisabled?.(e.date.value) || e.isDateUnavailable?.(e.date.value)) return !0;
    }
    return !1;
  }), r = M(() => Array.isArray(e.date.value) ? e.date.value.length > 0 : !!e.date.value), n = M(() => Array.isArray(e.date.value) ? e.date.value.length ? e.date.value.some((o) => e.isDateDisabled?.(o)) : !1 : e.date.value ? !!e.isDateDisabled?.(e.date.value) : !1);
  return {
    isDateSelected: t,
    isInvalid: a,
    hasSelectedDate: r,
    isSelectedDateDisabled: n
  };
}
function wE(e, t) {
  const a = t(e), r = a.compare(e), n = {};
  return r >= 7 && (n.day = 1), r >= yr(e) && (n.month = 1), a.set({ ...n });
}
function xE(e, t) {
  const a = t(e), r = e.compare(a), n = {};
  return r >= 7 && (n.day = 35), r >= yr(e) && (n.month = 13), a.set({ ...n });
}
function zE(e, t) {
  return t(e);
}
function _E(e, t) {
  return t(e);
}
function SE(e) {
  const t = Dq(e.locale.value), a = M(() => {
    const w = { calendar: e.placeholder.value.calendar.identifier };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (w.era = "short"), w;
  }), r = F(Ea({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), n = M(() => r.value.map((w) => w.value));
  function o(w) {
    return !n.value.some((k) => _c(w, k));
  }
  const i = (w) => {
    if (!e.maxValue.value || !r.value.length) return !1;
    if (e.disabled.value) return !0;
    const k = r.value.at(-1).value;
    if (!w && !e.nextPage.value) {
      const z = k.add({ months: 1 }).set({ day: 1 });
      return al(z, e.maxValue.value);
    }
    const S = wE(k, w || e.nextPage.value);
    return al(S, e.maxValue.value);
  }, l = (w) => {
    if (!e.minValue.value || !r.value.length) return !1;
    if (e.disabled.value) return !0;
    const k = r.value[0].value;
    if (!w && !e.prevPage.value) {
      const z = k.subtract({ months: 1 }).set({ day: 35 });
      return Tn(z, e.minValue.value);
    }
    const S = xE(k, w || e.prevPage.value);
    return Tn(S, e.minValue.value);
  };
  function u(w) {
    return !!(e.isDateDisabled?.(w) || e.disabled.value || e.maxValue.value && al(w, e.maxValue.value) || e.minValue.value && Tn(w, e.minValue.value));
  }
  const d = (w) => !!e.isDateUnavailable?.(w), c = M(() => r.value.length ? r.value[0].rows[0].map((w) => t.dayOfWeek(Nt(w), e.weekdayFormat.value)) : []), f = (w) => {
    const k = r.value[0].value;
    if (!w && !e.nextPage.value) {
      const A = k.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }), C = Ea({
        dateObj: A,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      r.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
      return;
    }
    const S = zE(k, w || e.nextPage.value), z = Ea({
      dateObj: S,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    r.value = z;
    const $ = {};
    if (!w) {
      const A = z[0].value.compare(k);
      A >= yr(k) && ($.day = 1), A >= 365 && ($.month = 1);
    }
    e.placeholder.value = z[0].value.set({ ...$ });
  }, y = (w) => {
    const k = r.value[0].value;
    if (!w && !e.prevPage.value) {
      const A = k.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }), C = Ea({
        dateObj: A,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      r.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
      return;
    }
    const S = _E(k, w || e.prevPage.value), z = Ea({
      dateObj: S,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    r.value = z;
    const $ = {};
    if (!w) {
      const A = k.compare(z[0].value);
      A >= yr(k) && ($.day = 1), A >= 365 && ($.month = 1);
    }
    e.placeholder.value = z[0].value.set({ ...$ });
  };
  ve(e.placeholder, (w) => {
    n.value.some((k) => _c(k, w)) || (r.value = Ea({
      dateObj: w,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), ve([
    e.locale,
    e.weekStartsOn,
    e.fixedWeeks,
    e.numberOfMonths
  ], () => {
    r.value = Ea({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const p = M(() => {
    if (!r.value.length) return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), r.value.length === 1) {
      const C = r.value[0].value;
      return `${t.fullMonthAndYear(Nt(C), a.value)}`;
    }
    const w = Nt(r.value[0].value), k = Nt(r.value.at(-1).value), S = t.fullMonth(w, a.value), z = t.fullMonth(k, a.value), $ = t.fullYear(w, a.value), A = t.fullYear(k, a.value);
    return $ === A ? `${S} - ${z} ${A}` : `${S} ${$} - ${z} ${A}`;
  }), g = M(() => `${e.calendarLabel.value ?? "Event Date"}, ${p.value}`), h = M(() => !(u(e.placeholder.value) || d(e.placeholder.value) || o(e.placeholder.value))), b = M(() => {
    for (const w of r.value) {
      if (e.minValue.value && Tn(w.value, e.minValue.value)) continue;
      const k = yr(w.value), S = e.minValue.value && $s(e.minValue.value, w.value) ? e.minValue.value.day : 1;
      for (let z = S; z <= k; z++) {
        const $ = w.value.set({ day: z });
        if (!(u($) || d($)))
          return $;
      }
    }
  });
  return {
    isDateDisabled: u,
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
    firstFocusableDate: b
  };
}
const qE = { style: {
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
} }, OE = {
  role: "heading",
  "aria-level": "2"
}, [Fr, AE] = /* @__PURE__ */ $e("CalendarRoot");
var CE = /* @__PURE__ */ q({
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
    const a = e, r = t, { disabled: n, readonly: o, initialFocus: i, pagedNavigation: l, weekdayFormat: u, fixedWeeks: d, multiple: c, minValue: f, maxValue: y, numberOfMonths: p, preventDeselect: g, isDateDisabled: h, isDateUnavailable: b, calendarLabel: w, defaultValue: k, nextPage: S, prevPage: z, dir: $, locale: A, disableDaysOutsideCurrentView: C } = Ye(a), { primitiveElement: E, currentElement: D } = Wt(), R = Gq(A), oe = ia($), ae = M(() => a.weekStartsOn ?? Bq(R.value)), H = /* @__PURE__ */ Ze(a, "modelValue", r, {
      defaultValue: k.value,
      passive: a.modelValue === void 0
    }), re = Cq({
      defaultPlaceholder: a.placeholder,
      defaultValue: H.value,
      locale: a.locale
    }), j = /* @__PURE__ */ Ze(a, "placeholder", r, {
      defaultValue: a.defaultPlaceholder ?? re.copy(),
      passive: a.placeholder === void 0
    });
    function W(Ee) {
      j.value = Ee.copy();
    }
    const { fullCalendarLabel: L, headingValue: G, isDateDisabled: ce, isDateUnavailable: T, isNextButtonDisabled: fe, isPrevButtonDisabled: te, weekdays: he, isOutsideVisibleView: Ve, nextPage: Oe, prevPage: ge, formatter: De, grid: X, isPlaceholderFocusable: K, firstFocusableDate: ne } = SE({
      locale: R,
      placeholder: j,
      weekStartsOn: ae,
      fixedWeeks: d,
      numberOfMonths: p,
      minValue: f,
      maxValue: y,
      disabled: n,
      weekdayFormat: u,
      pagedNavigation: l,
      isDateDisabled: h.value,
      isDateUnavailable: b.value,
      calendarLabel: w,
      nextPage: S,
      prevPage: z
    }), { isInvalid: de, isDateSelected: be, hasSelectedDate: _e, isSelectedDateDisabled: Xe } = kE({
      date: H,
      isDateDisabled: ce,
      isDateUnavailable: T
    });
    ve(H, (Ee) => {
      if (Array.isArray(Ee) && Ee.length) {
        const We = Ee.at(-1);
        We && !Hi(j.value, We) && W(We);
      } else !Array.isArray(Ee) && Ee && !Hi(j.value, Ee) && W(Ee);
    });
    function Ke(Ee) {
      if (c.value) {
        if (!H.value) H.value = [Ee.copy()];
        else if (Array.isArray(H.value)) {
          if (H.value.findIndex((We) => wa(We, Ee)) === -1) H.value = [...H.value, Ee];
          else if (!g.value) {
            const We = H.value.filter((at) => !wa(at, Ee));
            if (!We.length) {
              j.value = Ee.copy(), H.value = void 0;
              return;
            }
            H.value = We.map((at) => at.copy());
          }
        }
      } else {
        if (!H.value) {
          H.value = Ee.copy();
          return;
        }
        !g.value && Hi(H.value, Ee) ? (j.value = Ee.copy(), H.value = void 0) : H.value = Ee.copy();
      }
    }
    return qe(() => {
      i.value && $q(D.value);
    }), AE({
      isDateUnavailable: T,
      dir: oe,
      isDateDisabled: ce,
      locale: R,
      formatter: De,
      modelValue: H,
      placeholder: j,
      disabled: n,
      initialFocus: i,
      pagedNavigation: l,
      grid: X,
      weekDays: he,
      weekStartsOn: ae,
      weekdayFormat: u,
      fixedWeeks: d,
      multiple: c,
      numberOfMonths: p,
      readonly: o,
      preventDeselect: g,
      fullCalendarLabel: L,
      headingValue: G,
      isInvalid: de,
      isDateSelected: be,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: te,
      isOutsideVisibleView: Ve,
      nextPage: Oe,
      prevPage: ge,
      parentElement: D,
      onPlaceholderChange: W,
      onDateChange: Ke,
      disableDaysOutsideCurrentView: C,
      minValue: f,
      maxValue: y,
      isPlaceholderFocusable: K,
      firstFocusableDate: ne,
      hasSelectedDate: _e,
      isSelectedDateDisabled: Xe
    }), (Ee, We) => (v(), x(s(le), {
      ref_key: "primitiveElement",
      ref: E,
      as: Ee.as,
      "as-child": Ee.asChild,
      "aria-label": s(L),
      "data-readonly": s(o) ? "" : void 0,
      "data-disabled": s(n) ? "" : void 0,
      "data-invalid": s(de) ? "" : void 0,
      dir: s(oe)
    }, {
      default: m(() => [O(Ee.$slots, "default", {
        date: s(j),
        grid: s(X),
        weekDays: s(he),
        weekStartsOn: ae.value,
        locale: s(R),
        fixedWeeks: s(d),
        modelValue: s(H)
      }), ee("div", qE, [ee("div", OE, V(s(L)), 1)])]),
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
}), EE = CE, $E = /* @__PURE__ */ q({
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
    const t = Fr();
    return (a, r) => (v(), x(s(le), {
      as: a.as,
      "as-child": a.asChild,
      role: "gridcell",
      "aria-selected": s(t).isDateSelected(a.date) ? !0 : void 0,
      "aria-disabled": s(t).isDateDisabled(a.date) || s(t).isDateUnavailable?.(a.date) || s(t).disableDaysOutsideCurrentView.value,
      "data-disabled": s(t).isDateDisabled(a.date) || s(t).disableDaysOutsideCurrentView.value ? "" : void 0
    }, {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-selected",
      "aria-disabled",
      "data-disabled"
    ]));
  }
}), BE = $E, DE = /* @__PURE__ */ q({
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
    const t = e, a = wg(), r = Fr(), { primitiveElement: n } = Wt(), o = M(() => t.day.day.toLocaleString(r.locale.value)), i = M(() => r.formatter.custom(Nt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), l = M(() => r.isDateUnavailable?.(t.day) ?? !1), u = M(() => DS(t.day, Mr())), d = M(() => !$s(t.day, t.month)), c = M(() => r.isOutsideVisibleView(t.day)), f = M(() => r.isDateDisabled(t.day) || r.disableDaysOutsideCurrentView.value && d.value), y = M(() => d.value || f.value ? !1 : !r.disabled.value && r.isPlaceholderFocusable.value && wa(t.day, r.placeholder.value) ? !0 : (!r.hasSelectedDate.value || r.isSelectedDateDisabled.value) && !r.isPlaceholderFocusable.value ? r.firstFocusableDate.value && wa(t.day, r.firstFocusableDate.value) : !1), p = M(() => r.isDateSelected(t.day));
    function g(w) {
      r.readonly.value || r.isDateDisabled(w) || r.isDateUnavailable?.(w) || r.onDateChange(w);
    }
    function h() {
      f.value || g(t.day);
    }
    function b(w) {
      if (f.value || (w.code === a.ENTER || w.code === a.SPACE_CODE) && (w.ctrlKey || w.metaKey || w.altKey)) return;
      w.preventDefault(), w.stopPropagation();
      const k = r.parentElement.value, S = 7, z = r.dir.value === "rtl" ? -1 : 1;
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
      function $(A, C) {
        const E = A.add({ days: C });
        if (r.minValue.value && E.compare(r.minValue.value) < 0 || r.maxValue.value && E.compare(r.maxValue.value) > 0) return;
        const D = k.querySelector(`[data-value='${E.toString()}']:not([data-outside-view])`);
        if (!D) {
          if (C > 0) {
            if (r.isNextButtonDisabled()) return;
            r.nextPage();
          } else {
            if (r.isPrevButtonDisabled()) return;
            r.prevPage();
          }
          Se(() => {
            $(A, C);
          });
          return;
        }
        if (D && D.hasAttribute("data-disabled")) return $(E, C);
        r.onPlaceholderChange(E), D?.focus();
      }
    }
    return (w, k) => (v(), x(s(le), {
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
      "data-today": u.value ? "" : void 0,
      "data-outside-view": d.value ? "" : void 0,
      "data-outside-visible-view": c.value ? "" : void 0,
      "data-focused": y.value ? "" : void 0,
      tabindex: y.value ? 0 : d.value || f.value ? void 0 : -1,
      onClick: h,
      onKeydown: mt(b, [
        "up",
        "down",
        "left",
        "right",
        "space",
        "enter"
      ])
    }, {
      default: m(() => [O(w.$slots, "default", {
        dayValue: o.value,
        disabled: f.value,
        today: u.value,
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
}), ME = DE, PE = /* @__PURE__ */ q({
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
    const t = e, a = Fr(), r = M(() => a.disabled.value ? !0 : void 0), n = M(() => a.readonly.value ? !0 : void 0);
    return (o, i) => (v(), x(s(le), P(t, {
      tabindex: "-1",
      role: "application",
      "aria-readonly": n.value,
      "aria-disabled": r.value,
      "data-readonly": n.value && "",
      "data-disabled": r.value && ""
    }), {
      default: m(() => [O(o.$slots, "default")]),
      _: 3
    }, 16, [
      "aria-readonly",
      "aria-disabled",
      "data-readonly",
      "data-disabled"
    ]));
  }
}), jE = PE, IE = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(le), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), FE = IE, TE = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(le), P(t, { "aria-hidden": "true" }), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), NE = TE, VE = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(le), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), RE = VE, LE = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(le), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), UE = LE, WE = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(le), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), KE = WE, GE = /* @__PURE__ */ q({
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
    const t = e, a = Fr();
    return (r, n) => (v(), x(s(le), P(t, { "data-disabled": s(a).disabled.value ? "" : void 0 }), {
      default: m(() => [O(r.$slots, "default", { headingValue: s(a).headingValue.value }, () => [J(V(s(a).headingValue.value), 1)])]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), HE = GE, YE = /* @__PURE__ */ q({
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
    const t = e, a = M(() => r.disabled.value || r.isNextButtonDisabled(t.nextPage)), r = Fr();
    function n() {
      a.value || r.nextPage(t.nextPage);
    }
    return (o, i) => (v(), x(s(le), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: t.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: n
    }, {
      default: m(() => [O(o.$slots, "default", { disabled: a.value }, () => [i[0] || (i[0] = J(" Next page "))])]),
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
}), ZE = YE, QE = /* @__PURE__ */ q({
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
    const t = e, a = M(() => r.disabled.value || r.isPrevButtonDisabled(t.prevPage)), r = Fr();
    function n() {
      a.value || r.prevPage(t.prevPage);
    }
    return (o, i) => (v(), x(s(le), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: t.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: n
    }, {
      default: m(() => [O(o.$slots, "default", { disabled: a.value }, () => [i[0] || (i[0] = J(" Prev page "))])]),
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
}), JE = QE;
const [XE, e$] = /* @__PURE__ */ $e("RovingFocusGroup");
var t$ = /* @__PURE__ */ q({
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
    const r = e, n = a, { loop: o, orientation: i, dir: l } = Ye(r), u = ia(l), d = /* @__PURE__ */ Ze(r, "currentTabStopId", n, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), c = F(!1), f = F(!1), y = F(0), { getItems: p, CollectionSlot: g } = St({ isProvider: !0 });
    function h(w) {
      const k = !f.value;
      if (w.currentTarget && w.target === w.currentTarget && k && !c.value) {
        const S = new CustomEvent(oA, iA);
        if (w.currentTarget.dispatchEvent(S), n("entryFocus", S), !S.defaultPrevented) {
          const z = p().map((D) => D.ref).filter((D) => D.dataset.disabled !== ""), $ = z.find((D) => D.getAttribute("data-active") === ""), A = z.find((D) => D.getAttribute("data-highlighted") === ""), C = z.find((D) => D.id === d.value), E = [
            $,
            A,
            C,
            ...z
          ].filter(Boolean);
          Mg(E, r.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function b() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({ getItems: p }), e$({
      loop: o,
      dir: u,
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
    }), (w, k) => (v(), x(s(g), null, {
      default: m(() => [_(s(le), {
        tabindex: c.value || y.value === 0 ? -1 : 0,
        "data-orientation": s(i),
        as: w.as,
        "as-child": w.asChild,
        dir: s(u),
        style: { outline: "none" },
        onMousedown: k[0] || (k[0] = (S) => f.value = !0),
        onMouseup: b,
        onFocus: h,
        onBlur: k[1] || (k[1] = (S) => c.value = !1)
      }, {
        default: m(() => [O(w.$slots, "default")]),
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
}), Yg = t$, a$ = /* @__PURE__ */ q({
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
    const t = e, a = XE(), r = Qe(), n = M(() => t.tabStopId || r), o = M(() => a.currentTabStopId.value === n.value), { getItems: i, CollectionItem: l } = St();
    qe(() => {
      t.focusable && a.onFocusableItemAdd();
    }), _t(() => {
      t.focusable && a.onFocusableItemRemove();
    }), ve(() => t.focusable, (d, c) => {
      d !== c && (d ? a.onFocusableItemAdd() : a.onFocusableItemRemove());
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = Dg(d, a.orientation.value, a.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let f = [...i().map((y) => y.ref).filter((y) => y.dataset.disabled !== "")];
        if (c === "last") f.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && f.reverse();
          const y = f.indexOf(d.currentTarget);
          f = a.loop.value ? uA(f, y + 1) : f.slice(y + 1);
        }
        Se(() => Mg(f));
      }
    }
    return (d, c) => (v(), x(s(l), null, {
      default: m(() => [_(s(le), {
        tabindex: o.value ? 0 : -1,
        "data-orientation": s(a).orientation.value,
        "data-active": d.active ? "" : void 0,
        "data-disabled": d.focusable ? void 0 : "",
        as: d.as,
        "as-child": d.asChild,
        onMousedown: c[0] || (c[0] = (f) => {
          d.focusable ? s(a).onItemFocus(n.value) : f.preventDefault();
        }),
        onFocus: c[1] || (c[1] = (f) => s(a).onItemFocus(n.value)),
        onKeydown: u
      }, {
        default: m(() => [O(d.$slots, "default")]),
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
}), Zg = a$;
const [r$] = /* @__PURE__ */ $e("CheckboxGroupRoot");
function Qs(e) {
  return e === "indeterminate";
}
function Qg(e) {
  return Qs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [n$, o$] = /* @__PURE__ */ $e("CheckboxRoot");
var i$ = /* @__PURE__ */ q({
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
    const a = e, r = t, { forwardRef: n, currentElement: o } = ie(), i = r$(null), l = /* @__PURE__ */ Ze(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? a.falseValue,
      passive: a.modelValue === void 0
    }), u = M(() => i?.disabled.value || a.disabled), d = M(() => ka(l.value, a.trueValue)), c = M(() => wr(i?.modelValue.value) ? l.value === "indeterminate" ? "indeterminate" : d.value : xc(i.modelValue.value, a.value));
    function f() {
      if (wr(i?.modelValue.value))
        l.value === "indeterminate" ? l.value = a.trueValue : l.value = d.value ? a.falseValue : a.trueValue;
      else {
        const b = [...i.modelValue.value || []];
        if (xc(b, a.value)) {
          const w = b.findIndex((k) => ka(k, a.value));
          b.splice(w, 1);
        } else b.push(a.value);
        i.modelValue.value = b;
      }
    }
    const y = Ro(o), p = bg(), g = Tk(), h = M(() => {
      if (!g["aria-label"])
        return a.id && o.value ? document.querySelector(`[for="${a.id}"]`)?.innerText : void 0;
    });
    return o$({
      disabled: u,
      state: c
    }), (b, w) => (v(), U(xe, null, [(v(), x(Sa(s(i)?.rovingFocus.value ? s(Zg) : s(le)), P({
      ...b.$attrs,
      ...s(p)
    }, {
      id: b.id,
      ref: s(n),
      role: "checkbox",
      "as-child": b.asChild,
      as: b.as,
      type: b.as === "button" ? "button" : void 0,
      "aria-checked": s(Qs)(c.value) ? "mixed" : c.value,
      "aria-required": b.required,
      "aria-label": b.$attrs["aria-label"] || h.value,
      "data-state": s(Qg)(c.value),
      "data-disabled": u.value ? "" : void 0,
      disabled: u.value,
      focusable: s(i)?.rovingFocus.value ? !u.value : void 0,
      onKeydown: mt(Me(() => {
      }, ["prevent"]), ["enter"]),
      onClick: f
    }), {
      default: m(() => [O(b.$slots, "default", {
        modelValue: s(l),
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
    ])), s(y) && b.name && !s(i) ? (v(), x(s(Ls), P({
      key: 0,
      type: "checkbox",
      checked: !!c.value,
      name: b.name,
      value: b.value,
      disabled: u.value,
      required: b.required
    }, s(p)), null, 16, [
      "checked",
      "name",
      "value",
      "disabled",
      "required"
    ])) : Q("v-if", !0)], 64));
  }
}), l$ = i$, s$ = /* @__PURE__ */ q({
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
    const { forwardRef: t } = ie(), a = n$();
    return (r, n) => (v(), x(s(la), { present: r.forceMount || s(Qs)(s(a).state.value) || s(a).state.value === !0 }, {
      default: m(() => [_(s(le), P({
        ref: s(t),
        "data-state": s(Qg)(s(a).state.value),
        "data-disabled": s(a).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": r.asChild,
        as: r.as
      }, r.$attrs), {
        default: m(() => [O(r.$slots, "default")]),
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
}), u$ = s$, d$ = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(An), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), c$ = d$;
function f$() {
  const e = F(!1);
  return qe(() => {
    vr("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), vr(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const p$ = /* @__PURE__ */ Zf(f$), [Yo, y$] = /* @__PURE__ */ $e(["MenuRoot", "MenuSub"], "MenuContext"), [Js, m$] = /* @__PURE__ */ $e("MenuRoot");
var h$ = /* @__PURE__ */ q({
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
    const a = e, r = t, { modal: n, dir: o } = Ye(a), i = ia(o), l = /* @__PURE__ */ Ze(a, "open", r), u = F(), d = p$();
    return y$({
      open: l,
      onOpenChange: (c) => {
        l.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), m$({
      onClose: () => {
        l.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: i,
      modal: n
    }), (c, f) => (v(), x(s(On), null, {
      default: m(() => [O(c.$slots, "default")]),
      _: 3
    }));
  }
}), v$ = h$;
const [Jg, g$] = /* @__PURE__ */ $e("MenuContent");
var b$ = /* @__PURE__ */ q({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Uf({
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
  }, { ...Kg }),
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
    const a = e, r = t, n = Yo(), o = Js(), { trapFocus: i, disableOutsidePointerEvents: l, loop: u } = Ye(a);
    Vo(), zn(l.value);
    const d = F(""), c = F(0), f = F(0), y = F(null), p = F("right"), g = F(0), h = F(null), b = F(), { forwardRef: w, currentElement: k } = ie(), { handleTypeaheadSearch: S } = Lo(), z = F();
    function $(j) {
      const W = zc(j, z.value || Ge(), k.value, {
        loop: u.value,
        arrowKeyOptions: "vertical",
        dir: o?.dir.value,
        focus: !1,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      W && (z.value = W, W.scrollIntoView({ block: "nearest" }));
    }
    function A() {
      z.value && z.value.click();
    }
    const C = F(), E = F();
    ve(z, (j) => {
      if (E.value && (j === void 0 || j !== E.value.trigger.value)) {
        if (j === void 0) return;
        E.value.onOpenChange(!1), E.value = void 0;
      }
    }), ve(k, (j) => {
      n.onContentChange(j);
    }), _t(() => {
      window.clearTimeout(c.value);
    });
    function D(j) {
      return p.value === y.value?.side && bO(j, y.value?.area);
    }
    async function R(j) {
      r("openAutoFocus", j), !j.defaultPrevented && (j.preventDefault(), k.value?.focus({ preventScroll: !0 }));
    }
    function oe(j) {
      if (j.defaultPrevented) return;
      const W = j.target, L = W.closest("[data-reka-menu-content]") === j.currentTarget, G = ["input", "textarea"].includes(W.tagName.toLowerCase()), ce = j.ctrlKey || j.altKey || j.metaKey, T = j.key.length === 1, fe = zc(j, Ge(), k.value, {
        loop: u.value,
        arrowKeyOptions: "vertical",
        dir: o?.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (fe) return fe?.focus();
      if (j.code === "Space") return;
      const te = b.value?.getItems() ?? [];
      if (L && (j.key === "Tab" && o.modal.value && j.preventDefault(), !ce && T && !G && S(j.key, te)), j.target !== k.value || !vO.includes(j.key)) return;
      j.preventDefault();
      const he = [...te.map((Ve) => Ve.ref)];
      Sg.includes(j.key) && he.reverse(), Vl(he);
    }
    function ae(j) {
      j?.currentTarget?.contains?.(j.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function H(j) {
      if (!mo(j)) return;
      const W = j.target, L = g.value !== j.clientX;
      if (j?.currentTarget?.contains(W) && L) {
        const G = j.clientX > g.value ? "right" : "left";
        p.value = G, g.value = j.clientX;
      }
    }
    function re(j) {
      mo(j) && C.value && C.value.focus();
    }
    return g$({
      onItemEnter: (j) => !!D(j),
      onItemLeave: (j) => D(j) ? !0 : (["INPUT", "TEXTAREA"].includes(Ge()?.tagName || "") || k.value?.focus(), h.value = null, !1),
      onTriggerLeave: (j) => !!D(j),
      searchRef: d,
      highlightedElement: z,
      onKeydownNavigation: $,
      onKeydownEnter: A,
      filterElement: C,
      onFilterElementChange: (j) => {
        C.value = j;
      },
      activeSubmenuContext: E,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (j) => {
        y.value = j;
      }
    }), (j, W) => (v(), x(s(qn), {
      "as-child": "",
      trapped: s(i),
      onMountAutoFocus: R,
      onUnmountAutoFocus: W[7] || (W[7] = (L) => r("closeAutoFocus", L))
    }, {
      default: m(() => [_(s(jr), {
        "as-child": "",
        "disable-outside-pointer-events": s(l),
        onEscapeKeyDown: W[2] || (W[2] = (L) => r("escapeKeyDown", L)),
        onPointerDownOutside: W[3] || (W[3] = (L) => r("pointerDownOutside", L)),
        onFocusOutside: W[4] || (W[4] = (L) => r("focusOutside", L)),
        onInteractOutside: W[5] || (W[5] = (L) => r("interactOutside", L)),
        onDismiss: W[6] || (W[6] = (L) => r("dismiss"))
      }, {
        default: m(() => [_(s(Yg), {
          ref_key: "rovingFocusGroupRef",
          ref: b,
          "current-tab-stop-id": h.value,
          "onUpdate:currentTabStopId": W[0] || (W[0] = (L) => h.value = L),
          "as-child": "",
          orientation: "vertical",
          dir: s(o).dir.value,
          loop: s(u),
          onEntryFocus: W[1] || (W[1] = (L) => {
            r("entryFocus", L), s(o).isUsingKeyboardRef.value || L.preventDefault();
          })
        }, {
          default: m(() => [_(s(En), {
            ref: s(w),
            role: "menu",
            as: j.as,
            "as-child": j.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": s(qg)(s(n).open.value),
            dir: s(o).dir.value,
            side: j.side,
            "side-offset": j.sideOffset,
            align: j.align,
            "align-offset": j.alignOffset,
            "avoid-collisions": j.avoidCollisions,
            "collision-boundary": j.collisionBoundary,
            "collision-padding": j.collisionPadding,
            "arrow-padding": j.arrowPadding,
            "prioritize-position": j.prioritizePosition,
            "position-strategy": j.positionStrategy,
            "update-position-strategy": j.updatePositionStrategy,
            sticky: j.sticky,
            "hide-when-detached": j.hideWhenDetached,
            reference: j.reference,
            onKeydown: oe,
            onBlur: ae,
            onPointermove: H,
            onPointerenter: re
          }, {
            default: m(() => [O(j.$slots, "default")]),
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
}), Xg = b$, k$ = /* @__PURE__ */ q({
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
    const t = e, a = Jg(), { forwardRef: r, currentElement: n } = ie(), { CollectionItem: o } = St(), i = F(!1), l = M(() => i.value || n.value != null && a.highlightedElement.value === n.value);
    async function u(c) {
      if (!(c.defaultPrevented || !mo(c))) {
        if (t.disabled) a.onItemLeave(c);
        else if (!a.onItemEnter(c)) {
          const f = c.currentTarget;
          a.highlightedElement.value = f, ["INPUT", "TEXTAREA"].includes(Ge()?.tagName || "") || f.focus({ preventScroll: !0 });
        }
      }
    }
    async function d(c) {
      await Se(), !(c.defaultPrevented || !mo(c) || a.highlightedElement.value !== n.value) && !a.onItemLeave(c) && a.highlightedElement.value === n.value && (a.highlightedElement.value = void 0);
    }
    return (c, f) => (v(), x(s(o), { value: { textValue: c.textValue } }, {
      default: m(() => [_(s(le), P({
        ref: s(r),
        role: "menuitem",
        tabindex: "-1"
      }, c.$attrs, {
        as: c.as,
        "as-child": c.asChild,
        "aria-disabled": c.disabled || void 0,
        "data-disabled": c.disabled ? "" : void 0,
        "data-highlighted": l.value ? "" : void 0,
        onPointermove: u,
        onPointerleave: d,
        onFocus: f[0] || (f[0] = async (y) => {
          await Se(), !(y.defaultPrevented || c.disabled) && (i.value = !0, s(a).highlightedElement.value = y.currentTarget);
        }),
        onBlur: f[1] || (f[1] = async (y) => {
          await Se(), !y.defaultPrevented && (i.value = !1);
        })
      }), {
        default: m(() => [O(c.$slots, "default")]),
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
}), w$ = k$, x$ = /* @__PURE__ */ q({
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
    const a = e, r = t, { forwardRef: n, currentElement: o } = ie(), i = Js(), l = Jg(), u = F(!1);
    async function d() {
      const c = o.value;
      if (!a.disabled && c) {
        const f = new CustomEvent(mO, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", f), await Se(), f.defaultPrevented ? u.value = !1 : i.onClose();
      }
    }
    return (c, f) => (v(), x(w$, P(a, {
      ref: s(n),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        u.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (y) => {
        await Se(), !y.defaultPrevented && (u.value || y.currentTarget?.click());
      }),
      onKeydown: f[2] || (f[2] = async (y) => {
        const p = s(l).searchRef.value !== "";
        c.disabled || p && y.key === " " || s(Nl).includes(y.key) && (y.currentTarget?.click(), y.preventDefault());
      })
    }), {
      default: m(() => [O(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), z$ = x$, _$ = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Ce(a, r), o = Yo(), { forwardRef: i, currentElement: l } = ie();
    return Sn(l), (u, d) => (v(), x(Xg, P(s(n), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": s(o).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(o).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Me((c) => r("focusOutside", c), ["prevent"]))
    }), {
      default: m(() => [O(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), S$ = _$, q$ = /* @__PURE__ */ q({
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
    const a = Ce(e, t), r = Yo();
    return (n, o) => (v(), x(Xg, P(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: o[0] || (o[0] = (i) => s(r).onOpenChange(!1))
    }), {
      default: m(() => [O(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), O$ = q$, A$ = /* @__PURE__ */ q({
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
    const a = Ce(e, t), r = Yo(), n = Js();
    return (o, i) => (v(), x(s(la), { present: o.forceMount || s(r).open.value }, {
      default: m(() => [s(n).modal.value ? (v(), x(S$, Pe(P({ key: 0 }, {
        ...o.$attrs,
        ...s(a)
      })), {
        default: m(() => [O(o.$slots, "default")]),
        _: 3
      }, 16)) : (v(), x(O$, Pe(P({ key: 1 }, {
        ...o.$attrs,
        ...s(a)
      })), {
        default: m(() => [O(o.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), C$ = A$, E$ = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(Ga), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), $$ = E$;
const [$n, B$] = /* @__PURE__ */ $e("PopoverRoot");
var D$ = /* @__PURE__ */ q({
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
    const a = e, r = t, { modal: n } = Ye(a), o = /* @__PURE__ */ Ze(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), i = F(), l = F(!1);
    return B$({
      contentId: "",
      triggerId: "",
      modal: n,
      open: o,
      onOpenChange: (u) => {
        o.value = u;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerElement: i,
      hasCustomAnchor: l
    }), (u, d) => (v(), x(s(On), null, {
      default: m(() => [O(u.$slots, "default", {
        open: s(o),
        close: () => o.value = !1
      })]),
      _: 3
    }));
  }
}), M$ = D$, P$ = /* @__PURE__ */ q({
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
    const a = e, r = t, n = Ie(me(a, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: o } = ie(), i = $n();
    return Vo(), (l, u) => (v(), x(s(qn), {
      "as-child": "",
      loop: "",
      trapped: l.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => r("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => r("closeAutoFocus", d))
    }, {
      default: m(() => [_(s(jr), {
        "as-child": "",
        "disable-outside-pointer-events": l.disableOutsidePointerEvents,
        onPointerDownOutside: u[0] || (u[0] = (d) => r("pointerDownOutside", d)),
        onInteractOutside: u[1] || (u[1] = (d) => r("interactOutside", d)),
        onEscapeKeyDown: u[2] || (u[2] = (d) => r("escapeKeyDown", d)),
        onFocusOutside: u[3] || (u[3] = (d) => r("focusOutside", d)),
        onDismiss: u[4] || (u[4] = (d) => s(i).onOpenChange(!1))
      }, {
        default: m(() => [_(s(En), P(s(n), {
          id: s(i).contentId,
          ref: s(o),
          "data-state": s(i).open.value ? "open" : "closed",
          "aria-labelledby": s(i).triggerId,
          style: {
            "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
            "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
            "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
          },
          role: "dialog"
        }), {
          default: m(() => [O(l.$slots, "default")]),
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
}), eb = P$, j$ = /* @__PURE__ */ q({
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
    const a = e, r = t, n = $n(), o = F(!1);
    zn(!0);
    const i = Ce(a, r), { forwardRef: l, currentElement: u } = ie();
    return Sn(u), (d, c) => (v(), x(eb, P(s(i), {
      ref: s(l),
      "trap-focus": s(n).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Me((f) => {
        r("closeAutoFocus", f), o.value || s(n).triggerElement.value?.focus();
      }, ["prevent"])),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        r("pointerDownOutside", f);
        const y = f.detail.originalEvent, p = y.button === 0 && y.ctrlKey === !0, g = y.button === 2 || p;
        o.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = Me(() => {
      }, ["prevent"]))
    }), {
      default: m(() => [O(d.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), I$ = j$, F$ = /* @__PURE__ */ q({
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
    const a = e, r = t, n = $n(), o = F(!1), i = F(!1), l = Ce(a, r);
    return (u, d) => (v(), x(eb, P(s(l), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        r("closeAutoFocus", c), c.defaultPrevented || (o.value || s(n).triggerElement.value?.focus(), c.preventDefault()), o.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        r("interactOutside", c), c.defaultPrevented || (o.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        s(n).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: m(() => [O(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), T$ = F$, N$ = /* @__PURE__ */ q({
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
    const a = e, r = t, n = $n(), o = Ce(a, r), { forwardRef: i } = ie();
    return n.contentId ||= Qe(void 0, "reka-popover-content"), (l, u) => (v(), x(s(la), { present: l.forceMount || s(n).open.value }, {
      default: m(() => [s(n).modal.value ? (v(), x(I$, P({ key: 0 }, s(o), { ref: s(i) }), {
        default: m(() => [O(l.$slots, "default")]),
        _: 3
      }, 16)) : (v(), x(T$, P({ key: 1 }, s(o), { ref: s(i) }), {
        default: m(() => [O(l.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), V$ = N$, R$ = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(Ga), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), L$ = R$, U$ = /* @__PURE__ */ q({
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
    const t = e, a = $n(), { forwardRef: r, currentElement: n } = ie();
    return a.triggerId ||= Qe(void 0, "reka-popover-trigger"), qe(() => {
      a.triggerElement.value = n.value;
    }), (o, i) => (v(), x(Sa(s(a).hasCustomAnchor.value ? s(le) : s(An)), { "as-child": "" }, {
      default: m(() => [_(s(le), {
        id: s(a).triggerId,
        ref: s(r),
        type: o.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": s(a).open.value,
        "aria-controls": s(a).contentId,
        "data-state": s(a).open.value ? "open" : "closed",
        as: o.as,
        "as-child": t.asChild,
        onClick: s(a).onOpenToggle
      }, {
        default: m(() => [O(o.$slots, "default")]),
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
}), W$ = U$;
const [tb, K$] = /* @__PURE__ */ $e("DropdownMenuRoot");
var G$ = /* @__PURE__ */ q({
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
    ie();
    const n = /* @__PURE__ */ Ze(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = F(), { modal: i, dir: l } = Ye(a), u = ia(l);
    return K$({
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
      dir: u
    }), (d, c) => (v(), x(s(v$), {
      open: s(n),
      "onUpdate:open": c[0] || (c[0] = (f) => tt(n) ? n.value = f : null),
      dir: s(u),
      modal: s(i)
    }, {
      default: m(() => [O(d.$slots, "default", { open: s(n) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), H$ = G$, Y$ = /* @__PURE__ */ q({
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
    const a = Ce(e, t);
    ie();
    const r = tb(), n = F(!1);
    function o(i) {
      i.defaultPrevented || (n.value || setTimeout(() => {
        r.triggerElement.value?.focus();
      }, 0), n.value = !1, i.preventDefault());
    }
    return r.contentId ||= Qe(void 0, "reka-dropdown-menu-content"), (i, l) => (v(), x(s(C$), P(s(a), {
      id: s(r).contentId,
      "aria-labelledby": s(r)?.triggerId,
      style: {
        "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
      },
      onCloseAutoFocus: o,
      onInteractOutside: l[0] || (l[0] = (u) => {
        if (u.defaultPrevented) return;
        const d = u.detail.originalEvent, c = d.button === 0 && d.ctrlKey === !0, f = d.button === 2 || c;
        (!s(r).modal.value || f) && (n.value = !0), s(r).triggerElement.value?.contains(u.target) && u.preventDefault();
      })
    }), {
      default: m(() => [O(i.$slots, "default")]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), Z$ = Y$, Q$ = /* @__PURE__ */ q({
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
    const a = e, r = Pr(t);
    return ie(), (n, o) => (v(), x(s(z$), Pe(Ne({
      ...a,
      ...s(r)
    })), {
      default: m(() => [O(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), J$ = Q$, X$ = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s($$), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), eB = X$, tB = /* @__PURE__ */ q({
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
    const t = e, a = tb(), { forwardRef: r, currentElement: n } = ie();
    return qe(() => {
      a.triggerElement = n;
    }), a.triggerId ||= Qe(void 0, "reka-dropdown-menu-trigger"), (o, i) => (v(), x(s(c$), { "as-child": "" }, {
      default: m(() => [_(s(le), {
        id: s(a).triggerId,
        ref: s(r),
        type: o.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: o.as,
        "aria-haspopup": "menu",
        "aria-expanded": s(a).open.value,
        "aria-controls": s(a).open.value ? s(a).contentId : void 0,
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        "data-state": s(a).open.value ? "open" : "closed",
        onClick: i[0] || (i[0] = async (l) => {
          !o.disabled && l.button === 0 && l.ctrlKey === !1 && (s(a)?.onOpenToggle(), await Se(), s(a).open.value && l.preventDefault());
        }),
        onKeydown: i[1] || (i[1] = mt((l) => {
          o.disabled || (["Enter", " "].includes(l.key) && s(a).onOpenToggle(), l.key === "ArrowDown" && s(a).onOpenChange(!0), [
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
        default: m(() => [O(o.$slots, "default")]),
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
}), aB = tB, rB = /* @__PURE__ */ q({
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
    return ie(), (a, r) => (v(), x(s(le), P(t, { onMousedown: r[0] || (r[0] = (n) => {
      !n.defaultPrevented && n.detail > 1 && n.preventDefault();
    }) }), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), nB = rB;
let oB = !1;
try {
  oB = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let iB = !1;
try {
  iB = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const lB = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], sB = [" ", "Enter"], Ot = 10;
function yn(e, t, a) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((r) => Gl(r, t, a)) : Gl(e, t, a);
}
function Gl(e, t, a) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof a == "function" ? a(e, t) : typeof a == "string" ? e?.[a] === t?.[a] : ka(e, t);
}
function uB(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
const dB = ["value"], [qa, ab] = /* @__PURE__ */ $e("SelectRoot");
var cB = /* @__PURE__ */ q({
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
    const a = e, r = t, { required: n, disabled: o, multiple: i, dir: l } = Ye(a), u = /* @__PURE__ */ Ze(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? (i.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), d = /* @__PURE__ */ Ze(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), c = F(), f = F(), y = F({
      x: 0,
      y: 0
    }), p = M(() => i.value && Array.isArray(u.value) ? u.value?.length === 0 : wr(u.value));
    St({ isProvider: !0 });
    const g = ia(l), h = Ro(c), b = F(/* @__PURE__ */ new Set()), w = M(() => Array.from(b.value).map((z) => z.value).join(";"));
    function k(z) {
      if (i.value) {
        const $ = Array.isArray(u.value) ? [...u.value] : [], A = $.findIndex((C) => Gl(C, z, a.by));
        A === -1 ? $.push(z) : $.splice(A, 1), u.value = [...$];
      } else u.value = z;
    }
    function S(z) {
      return Array.from(b.value).find(($) => yn(z, $.value, a.by));
    }
    return ab({
      triggerElement: c,
      onTriggerChange: (z) => {
        c.value = z;
      },
      valueElement: f,
      onValueElementChange: (z) => {
        f.value = z;
      },
      contentId: "",
      modelValue: u,
      onValueChange: k,
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
      optionsSet: b,
      onOptionAdd: (z) => {
        const $ = S(z.value);
        $ && b.value.delete($), b.value.add(z);
      },
      onOptionRemove: (z) => {
        const $ = S(z.value);
        $ && b.value.delete($);
      }
    }), (z, $) => (v(), x(s(On), null, {
      default: m(() => [O(z.$slots, "default", {
        modelValue: s(u),
        open: s(d)
      }), s(h) && z.name ? (v(), x(yB, {
        key: w.value,
        "aria-hidden": "true",
        tabindex: "-1",
        multiple: s(i),
        required: s(n),
        name: z.name,
        autocomplete: z.autocomplete,
        disabled: s(o),
        value: s(u)
      }, {
        default: m(() => [s(wr)(s(u)) ? (v(), U("option", {
          key: 0,
          value: z.nullableValue
        }, null, 8, dB)) : Q("v-if", !0), (v(!0), U(xe, null, je(Array.from(b.value), (A) => (v(), U("option", P({ key: A.value ?? "" }, { ref_for: !0 }, A), null, 16))), 128))]),
        _: 1
      }, 8, [
        "multiple",
        "required",
        "name",
        "autocomplete",
        "disabled",
        "value"
      ])) : Q("v-if", !0)]),
      _: 3
    }));
  }
}), fB = cB, pB = /* @__PURE__ */ q({
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
    const t = e, a = F(), r = qa();
    ve(() => t.value, (o, i) => {
      const l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(l, "value").set;
      if (o !== i && u && a.value) {
        const d = new Event("change", { bubbles: !0 });
        u.call(a.value, o), a.value.dispatchEvent(d);
      }
    });
    function n(o) {
      r.onValueChange(o.target.value);
    }
    return (o, i) => (v(), x(s(Rs), { "as-child": "" }, {
      default: m(() => [ee("select", P({
        ref_key: "selectElement",
        ref: a
      }, t, { onInput: n }), [O(o.$slots, "default")], 16)]),
      _: 3
    }));
  }
}), yB = pB, mB = /* @__PURE__ */ q({
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
    const t = Ie(e);
    return (a, r) => (v(), x(s(En), P(s(t), { style: {
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), hB = mB;
const vB = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Za, rb] = /* @__PURE__ */ $e("SelectContent");
var gB = /* @__PURE__ */ q({
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
    const a = e, r = t, n = qa();
    Vo(), zn(a.bodyLock);
    const { CollectionSlot: o, getItems: i } = St(), l = F();
    Sn(l);
    const { search: u, handleTypeaheadSearch: d } = Lo(), c = F(), f = F(), y = F(), p = F(!1), g = F(!1), h = F(!1);
    function b() {
      f.value && l.value && Vl([f.value, l.value]);
    }
    ve(p, () => {
      b();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: k } = n;
    nt((A) => {
      if (!l.value) return;
      let C = {
        x: 0,
        y: 0
      };
      const E = (R) => {
        C = {
          x: Math.abs(Math.round(R.pageX) - (k.value?.x ?? 0)),
          y: Math.abs(Math.round(R.pageY) - (k.value?.y ?? 0))
        };
      }, D = (R) => {
        R.pointerType !== "touch" && (C.x <= 10 && C.y <= 10 ? R.preventDefault() : l.value?.contains(R.target) || w(!1), document.removeEventListener("pointermove", E), k.value = null);
      };
      k.value !== null && (document.addEventListener("pointermove", E), document.addEventListener("pointerup", D, {
        capture: !0,
        once: !0
      })), A(() => {
        document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", D, { capture: !0 });
      });
    });
    function S(A) {
      const C = A.ctrlKey || A.altKey || A.metaKey;
      if (A.key === "Tab" && A.preventDefault(), !C && A.key.length === 1 && d(A.key, i()), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(A.key)) {
        let E = [...i().map((D) => D.ref)];
        if (["ArrowUp", "End"].includes(A.key) && (E = E.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
          const D = A.target, R = E.indexOf(D);
          E = E.slice(R + 1);
        }
        setTimeout(() => Vl(E)), A.preventDefault();
      }
    }
    const z = M(() => a.position === "popper" ? a : {}), $ = Ie(z.value);
    return rb({
      content: l,
      viewport: c,
      onViewportChange: (A) => {
        c.value = A;
      },
      itemRefCallback: (A, C, E) => {
        const D = !g.value && !E, R = yn(n.modelValue.value, C, n.by);
        if (n.multiple.value) {
          if (h.value) return;
          (R || D) && (f.value = A, R && (h.value = !0));
        } else (R || D) && (f.value = A);
        D && (g.value = !0);
      },
      selectedItem: f,
      selectedItemText: y,
      onItemLeave: () => {
        l.value?.focus();
      },
      itemTextRefCallback: (A, C, E) => {
        const D = !g.value && !E;
        (yn(n.modelValue.value, C, n.by) || D) && (y.value = A);
      },
      focusSelectedItem: b,
      position: a.position,
      isPositioned: p,
      searchRef: u
    }), (A, C) => (v(), x(s(o), null, {
      default: m(() => [_(s(qn), {
        "as-child": "",
        onMountAutoFocus: C[6] || (C[6] = Me(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: C[7] || (C[7] = (E) => {
          r("closeAutoFocus", E), !E.defaultPrevented && (s(n).triggerElement.value?.focus({ preventScroll: !0 }), E.preventDefault());
        })
      }, {
        default: m(() => [_(s(jr), {
          "as-child": "",
          "disable-outside-pointer-events": A.disableOutsidePointerEvents,
          onFocusOutside: C[2] || (C[2] = Me(() => {
          }, ["prevent"])),
          onDismiss: C[3] || (C[3] = (E) => s(n).onOpenChange(!1)),
          onEscapeKeyDown: C[4] || (C[4] = (E) => r("escapeKeyDown", E)),
          onPointerDownOutside: C[5] || (C[5] = (E) => r("pointerDownOutside", E))
        }, {
          default: m(() => [(v(), x(Sa(A.position === "popper" ? hB : xB), P({
            ...A.$attrs,
            ...s($)
          }, {
            id: s(n).contentId,
            ref: (E) => {
              if (!E) return;
              const D = s(Ut)(E);
              D?.hasAttribute("data-reka-popper-content-wrapper") ? l.value = D.firstElementChild : l.value = D;
            },
            role: "listbox",
            "data-state": s(n).open.value ? "open" : "closed",
            dir: s(n).dir.value,
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none"
            },
            onContextmenu: C[0] || (C[0] = Me(() => {
            }, ["prevent"])),
            onPlaced: C[1] || (C[1] = (E) => p.value = !0),
            onKeydown: S
          }), {
            default: m(() => [O(A.$slots, "default")]),
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
}), bB = gB;
const [Xs, kB] = /* @__PURE__ */ $e("SelectItemAlignedPosition");
var wB = /* @__PURE__ */ q({
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
    const a = e, r = t, { getItems: n } = St(), o = qa(), i = Za(), l = F(!1), u = F(!0), d = F(), { forwardRef: c, currentElement: f } = ie(), { viewport: y, selectedItem: p, selectedItemText: g, focusSelectedItem: h } = i;
    function b() {
      if (o.triggerElement.value && o.valueElement.value && d.value && f.value && y?.value && p?.value && g?.value) {
        const S = o.triggerElement.value.getBoundingClientRect(), z = f.value.getBoundingClientRect(), $ = o.valueElement.value.getBoundingClientRect(), A = g.value.getBoundingClientRect();
        if (o.dir.value !== "rtl") {
          const ge = A.left - z.left, De = $.left - ge, X = S.left - De, K = S.width + X, ne = Math.max(K, z.width), de = window.innerWidth - Ot, be = wc(De, Ot, Math.max(Ot, de - ne));
          d.value.style.minWidth = `${K}px`, d.value.style.left = `${be}px`;
        } else {
          const ge = z.right - A.right, De = window.innerWidth - $.right - ge, X = window.innerWidth - S.right - De, K = S.width + X, ne = Math.max(K, z.width), de = window.innerWidth - Ot, be = wc(De, Ot, Math.max(Ot, de - ne));
          d.value.style.minWidth = `${K}px`, d.value.style.right = `${be}px`;
        }
        const C = n().map((ge) => ge.ref), E = window.innerHeight - Ot * 2, D = y.value.scrollHeight, R = window.getComputedStyle(f.value), oe = Number.parseInt(R.borderTopWidth, 10), ae = Number.parseInt(R.paddingTop, 10), H = Number.parseInt(R.borderBottomWidth, 10), re = Number.parseInt(R.paddingBottom, 10), j = oe + ae + D + re + H, W = Math.min(p.value.offsetHeight * 5, j), L = window.getComputedStyle(y.value), G = Number.parseInt(L.paddingTop, 10), ce = Number.parseInt(L.paddingBottom, 10), T = S.top + S.height / 2 - Ot, fe = E - T, te = p.value.offsetHeight / 2, he = p.value.offsetTop + te, Ve = oe + ae + he, Oe = j - Ve;
        if (Ve <= T) {
          const ge = p.value === C.at(-1);
          d.value.style.bottom = "0px";
          const De = f.value.clientHeight - y.value.offsetTop - y.value.offsetHeight, X = Math.max(fe, te + (ge ? ce : 0) + De + H), K = Ve + X;
          d.value.style.height = `${K}px`;
        } else {
          const ge = p.value === C[0];
          d.value.style.top = "0px";
          const De = Math.max(T, oe + y.value.offsetTop + (ge ? G : 0) + te) + Oe;
          d.value.style.height = `${De}px`, y.value.scrollTop = Ve - T + y.value.offsetTop;
        }
        d.value.style.margin = `${Ot}px 0`, d.value.style.minHeight = `${W}px`, d.value.style.maxHeight = `${E}px`, r("placed"), requestAnimationFrame(() => l.value = !0);
      }
    }
    const w = F("");
    qe(async () => {
      await Se(), b(), f.value && (w.value = window.getComputedStyle(f.value).zIndex);
    });
    function k(S) {
      S && u.value === !0 && (b(), h?.(), u.value = !1);
    }
    return q0(o.triggerElement, () => {
      b();
    }), kB({
      contentWrapper: d,
      shouldExpandOnScrollRef: l,
      onScrollButtonChange: k
    }), (S, z) => (v(), U("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: lt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: w.value
      })
    }, [_(s(le), P({
      ref: s(c),
      style: {
        boxSizing: "border-box",
        maxHeight: "100%"
      }
    }, {
      ...S.$attrs,
      ...a
    }), {
      default: m(() => [O(S.$slots, "default")]),
      _: 3
    }, 16)], 4));
  }
}), xB = wB, zB = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: { context: {
    type: Object,
    required: !0
  } },
  setup(e) {
    return ab(e.context), rb(vB), (t, a) => O(t.$slots, "default");
  }
}), _B = zB;
const SB = { key: 1 };
var qB = /* @__PURE__ */ q({
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
    const a = e, r = Ce(a, t), n = qa(), o = F();
    qe(() => {
      o.value = new DocumentFragment();
    });
    const i = F(), l = M(() => a.forceMount || n.open.value), u = F(l.value);
    let d;
    function c() {
      d && (clearTimeout(d), d = void 0);
    }
    return ve(l, (f, y, p) => {
      c(), d = setTimeout(() => {
        u.value = l.value, d = void 0;
      }), p(c);
    }), _t(c), (f, y) => l.value || u.value || i.value?.present ? (v(), x(s(la), {
      key: 0,
      ref_key: "presenceRef",
      ref: i,
      present: l.value
    }, {
      default: m(() => [_(bB, Pe(Ne({
        ...s(r),
        ...f.$attrs
      })), {
        default: m(() => [O(f.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"])) : o.value ? (v(), U("div", SB, [(v(), x(Nf, { to: o.value }, [_(_B, { context: s(n) }, {
      default: m(() => [O(f.$slots, "default")]),
      _: 3
    }, 8, ["context"])], 8, ["to"]))])) : Q("v-if", !0);
  }
}), OB = qB;
const [AB, CB] = /* @__PURE__ */ $e("SelectGroup");
var EB = /* @__PURE__ */ q({
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
    const t = e, a = Qe(void 0, "reka-select-group");
    return CB({ id: a }), (r, n) => (v(), x(s(le), P({ role: "group" }, t, { "aria-labelledby": s(a) }), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), $B = EB, BB = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(le), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: m(() => [O(t.$slots, "default", {}, () => [a[0] || (a[0] = J("▼"))])]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), DB = BB;
const [nb, MB] = /* @__PURE__ */ $e("SelectItem");
var PB = /* @__PURE__ */ q({
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
    const a = e, r = t, { disabled: n } = Ye(a), o = qa(), i = Za(), { forwardRef: l, currentElement: u } = ie(), { CollectionItem: d } = St(), c = M(() => yn(o.modelValue?.value, a.value, o.by)), f = F(!1), y = F(a.textValue ?? ""), p = Qe(void 0, "reka-select-item-text"), g = "select.select";
    async function h(z) {
      if (z.defaultPrevented) return;
      const $ = {
        originalEvent: z,
        value: a.value
      };
      Fo(g, b, $);
    }
    async function b(z) {
      await Se(), r("select", z), !z.defaultPrevented && (n.value || (o.onValueChange(a.value), o.multiple.value || o.onOpenChange(!1)));
    }
    async function w(z) {
      await Se(), !z.defaultPrevented && (n.value ? i.onItemLeave?.() : z.currentTarget?.focus({ preventScroll: !0 }));
    }
    async function k(z) {
      await Se(), !z.defaultPrevented && z.currentTarget === Ge() && i.onItemLeave?.();
    }
    async function S(z) {
      await Se(), !(z.defaultPrevented || i.searchRef?.value !== "" && z.key === " ") && (sB.includes(z.key) && h(z), z.key === " " && z.preventDefault());
    }
    if (a.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return qe(() => {
      u.value && i.itemRefCallback(u.value, a.value, a.disabled);
    }), MB({
      value: a.value,
      disabled: n,
      textId: p,
      isSelected: c,
      onItemTextChange: (z) => {
        y.value = ((y.value || z?.textContent) ?? "").trim();
      }
    }), (z, $) => (v(), x(s(d), { value: { textValue: y.value } }, {
      default: m(() => [_(s(le), {
        ref: s(l),
        role: "option",
        "aria-labelledby": s(p),
        "data-highlighted": f.value ? "" : void 0,
        "aria-selected": c.value,
        "data-state": c.value ? "checked" : "unchecked",
        "aria-disabled": s(n) || void 0,
        "data-disabled": s(n) ? "" : void 0,
        tabindex: s(n) ? void 0 : -1,
        as: z.as,
        "as-child": z.asChild,
        onFocus: $[0] || ($[0] = (A) => f.value = !0),
        onBlur: $[1] || ($[1] = (A) => f.value = !1),
        onPointerup: h,
        onPointerdown: $[2] || ($[2] = (A) => {
          A.currentTarget.focus({ preventScroll: !0 });
        }),
        onTouchend: $[3] || ($[3] = Me(() => {
        }, ["prevent", "stop"])),
        onPointermove: w,
        onPointerleave: k,
        onKeydown: S
      }, {
        default: m(() => [O(z.$slots, "default")]),
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
}), jB = PB, IB = /* @__PURE__ */ q({
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
    const t = e, a = nb();
    return (r, n) => s(a).isSelected.value ? (v(), x(s(le), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16)) : Q("v-if", !0);
  }
}), FB = IB, TB = /* @__PURE__ */ q({
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
    const t = e, a = qa(), r = Za(), n = nb(), { forwardRef: o, currentElement: i } = ie(), l = M(() => ({
      value: n.value,
      disabled: n.disabled.value,
      textContent: i.value?.textContent ?? n.value?.toString() ?? ""
    }));
    return qe(() => {
      i.value && (n.onItemTextChange(i.value), r.itemTextRefCallback(i.value, n.value, n.disabled.value), a.onOptionAdd(l.value));
    }), _t(() => {
      a.onOptionRemove(l.value);
    }), (u, d) => (v(), x(s(le), P({
      id: s(n).textId,
      ref: s(o)
    }, {
      ...t,
      ...u.$attrs
    }), {
      default: m(() => [O(u.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), NB = TB, VB = /* @__PURE__ */ q({
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
    const t = e, a = AB({ id: "" });
    return (r, n) => (v(), x(s(le), P(t, { id: s(a).id }), {
      default: m(() => [O(r.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), RB = VB, LB = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(Ga), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), UB = LB, WB = /* @__PURE__ */ q({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { getItems: r } = St(), n = Za(), o = F(null);
    function i() {
      o.value !== null && (window.clearInterval(o.value), o.value = null);
    }
    nt(() => {
      r().map((d) => d.ref).find((d) => d === Ge())?.scrollIntoView({ block: "nearest" });
    });
    function l() {
      o.value === null && (o.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function u() {
      n.onItemLeave?.(), o.value === null && (o.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return rs(() => i()), (d, c) => (v(), x(s(le), P({
      "aria-hidden": "true",
      style: { flexShrink: 0 }
    }, d.$parent?.$props, {
      onPointerdown: l,
      onPointermove: u,
      onPointerleave: c[0] || (c[0] = () => {
        i();
      })
    }), {
      default: m(() => [O(d.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ob = WB, KB = /* @__PURE__ */ q({
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
    const t = Za(), a = t.position === "item-aligned" ? Xs() : void 0, { forwardRef: r, currentElement: n } = ie(), o = F(!1);
    return nt((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let l = function() {
          const d = u.scrollHeight - u.clientHeight;
          o.value = Math.ceil(u.scrollTop) < d;
        };
        const u = t.viewport.value;
        l(), u.addEventListener("scroll", l), i(() => u.removeEventListener("scroll", l));
      }
    }), ve(n, () => {
      n.value && a?.onScrollButtonChange(n.value);
    }), (i, l) => o.value ? (v(), x(ob, {
      key: 0,
      ref: s(r),
      onAutoScroll: l[0] || (l[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u?.value && d?.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: m(() => [O(i.$slots, "default")]),
      _: 3
    }, 512)) : Q("v-if", !0);
  }
}), GB = KB, HB = /* @__PURE__ */ q({
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
    const t = Za(), a = t.position === "item-aligned" ? Xs() : void 0, { forwardRef: r, currentElement: n } = ie(), o = F(!1);
    return nt((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let l = function() {
          o.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        l(), u.addEventListener("scroll", l), i(() => u.removeEventListener("scroll", l));
      }
    }), ve(n, () => {
      n.value && a?.onScrollButtonChange(n.value);
    }), (i, l) => o.value ? (v(), x(ob, {
      key: 0,
      ref: s(r),
      onAutoScroll: l[0] || (l[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u?.value && d?.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: m(() => [O(i.$slots, "default")]),
      _: 3
    }, 512)) : Q("v-if", !0);
  }
}), YB = HB, ZB = /* @__PURE__ */ q({
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
    const t = e, a = qa(), { forwardRef: r, currentElement: n } = ie(), o = M(() => a.disabled?.value || t.disabled);
    a.contentId ||= Qe(void 0, "reka-select-content"), qe(() => {
      a.onTriggerChange(n.value);
    });
    const { getItems: i } = St(), { search: l, handleTypeaheadSearch: u, resetTypeahead: d } = Lo();
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
      const k = w.target;
      k.hasPointerCapture(w.pointerId) && k.releasePointerCapture(w.pointerId), y(w) && (f(w), p = !0);
    }
    function h(w) {
      y(w) && w.preventDefault();
    }
    function b(w) {
      p || w.currentTarget?.focus(), p = !1;
    }
    return (w, k) => (v(), x(s(An), {
      "as-child": "",
      reference: w.reference
    }, {
      default: m(() => [_(s(le), {
        ref: s(r),
        role: "combobox",
        type: w.as === "button" ? "button" : void 0,
        "aria-controls": s(a).contentId,
        "aria-expanded": s(a).open.value || !1,
        "aria-required": s(a).required?.value,
        "aria-autocomplete": "none",
        disabled: o.value,
        dir: s(a)?.dir.value,
        "data-state": s(a)?.open.value ? "open" : "closed",
        "data-disabled": o.value ? "" : void 0,
        "data-placeholder": s(uB)(s(a).modelValue?.value) ? "" : void 0,
        "as-child": w.asChild,
        as: w.as,
        onClick: b,
        onPointerdown: g,
        onMousedown: h,
        onPointerup: k[0] || (k[0] = Me((S) => {
          S.pointerType === "touch" && f(S);
        }, ["prevent"])),
        onKeydown: k[1] || (k[1] = (S) => {
          const z = s(l) !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && z && S.key === " " || (s(u)(S.key, s(i)()), s(lB).includes(S.key) && (c(), S.preventDefault()));
        })
      }, {
        default: m(() => [O(w.$slots, "default")]),
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
}), QB = ZB, JB = /* @__PURE__ */ q({
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
    const t = e, { forwardRef: a, currentElement: r } = ie(), n = qa();
    qe(() => {
      n.valueElement = r;
    });
    const o = M(() => {
      let l = [];
      const u = Array.from(n.optionsSet.value), d = (c) => u.find((f) => yn(c, f.value, n.by));
      return Array.isArray(n.modelValue.value) ? l = n.modelValue.value.map((c) => d(c)?.textContent ?? "") : l = [d(n.modelValue.value)?.textContent ?? ""], l.filter(Boolean);
    }), i = M(() => o.value.length ? o.value.join(", ") : t.placeholder);
    return (l, u) => (v(), x(s(le), {
      ref: s(a),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": o.value.length ? void 0 : t.placeholder
    }, {
      default: m(() => [O(l.$slots, "default", {
        selectedLabel: o.value,
        modelValue: s(n).modelValue.value
      }, () => [J(V(i.value), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-placeholder"
    ]));
  }
}), XB = JB, e2 = /* @__PURE__ */ q({
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
    const t = e, { nonce: a } = Ye(t), r = cE(a), n = Za(), o = n.position === "item-aligned" ? Xs() : void 0, { forwardRef: i, currentElement: l } = ie();
    qe(() => {
      n?.onViewportChange(l.value);
    });
    const u = F(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: y, contentWrapper: p } = o ?? {};
      if (y?.value && p?.value) {
        const g = Math.abs(u.value - f.scrollTop);
        if (g > 0) {
          const h = window.innerHeight - Ot * 2, b = Number.parseFloat(p.value.style.minHeight), w = Number.parseFloat(p.value.style.height), k = Math.max(b, w);
          if (k < h) {
            const S = k + g, z = Math.min(h, S), $ = S - z;
            p.value.style.height = `${z}px`, p.value.style.bottom === "0px" && (f.scrollTop = $ > 0 ? $ : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (c, f) => (v(), U(xe, null, [_(s(le), P({
      ref: s(i),
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
      default: m(() => [O(c.$slots, "default")]),
      _: 3
    }, 16), _(s(le), {
      as: "style",
      nonce: s(r)
    }, {
      default: m(() => f[0] || (f[0] = [J(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), t2 = e2, a2 = /* @__PURE__ */ q({
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
    const n = M(() => r(t.orientation) ? t.orientation : "horizontal"), o = M(() => n.value === "vertical" ? t.orientation : void 0), i = M(() => t.decorative ? { role: "none" } : {
      "aria-orientation": o.value,
      role: "separator"
    });
    return (l, u) => (v(), x(s(le), P({
      as: l.as,
      "as-child": l.asChild,
      "data-orientation": n.value
    }, i.value), {
      default: m(() => [O(l.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-orientation"
    ]));
  }
}), r2 = a2, n2 = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(r2, Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), o2 = n2;
function i2() {
  if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
i2();
const [l2, s2] = /* @__PURE__ */ $e("SwitchRoot");
var u2 = /* @__PURE__ */ q({
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
    const a = e, r = t, { disabled: n } = Ye(a), o = /* @__PURE__ */ Ze(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? a.falseValue,
      passive: a.modelValue === void 0
    }), i = M(() => o.value === a.trueValue);
    function l() {
      n.value || (o.value = i.value ? a.falseValue : a.trueValue);
    }
    const { forwardRef: u, currentElement: d } = ie(), c = Ro(d), f = bg(), y = M(() => a.id && d.value ? document.querySelector(`[for="${a.id}"]`)?.innerText : void 0);
    return s2({
      checked: i,
      toggleCheck: l,
      disabled: n
    }), (p, g) => (v(), U(xe, null, [_(s(le), P({
      id: p.id,
      ref: s(u),
      role: "switch",
      type: p.as === "button" ? "button" : void 0,
      value: p.value,
      "aria-label": p.$attrs["aria-label"] || y.value,
      "aria-checked": i.value,
      "aria-required": p.required,
      "data-state": i.value ? "checked" : "unchecked",
      "data-disabled": s(n) ? "" : void 0,
      "as-child": p.asChild,
      as: p.as,
      disabled: s(n)
    }, {
      ...s(f),
      ...p.$attrs
    }, {
      onClick: l,
      onKeydown: mt(Me(l, ["prevent"]), ["enter"])
    }), {
      default: m(() => [O(p.$slots, "default", {
        modelValue: s(o),
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
    ]), s(c) && p.name ? (v(), x(s(Ls), P({
      key: 0,
      type: "checkbox",
      name: p.name,
      disabled: s(n),
      required: p.required,
      value: p.value,
      checked: i.value
    }, s(f)), null, 16, [
      "name",
      "disabled",
      "required",
      "value",
      "checked"
    ])) : Q("v-if", !0)], 64));
  }
}), d2 = u2, c2 = /* @__PURE__ */ q({
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
    const t = l2();
    return ie(), (a, r) => (v(), x(s(le), {
      "data-state": s(t).checked.value ? "checked" : "unchecked",
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "as-child": a.asChild,
      as: a.as
    }, {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 8, [
      "data-state",
      "data-disabled",
      "as-child",
      "as"
    ]));
  }
}), f2 = c2;
const [eu, p2] = /* @__PURE__ */ $e("TabsRoot");
var y2 = /* @__PURE__ */ q({
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
    ie();
    const u = /* @__PURE__ */ Ze(a, "modelValue", r, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = F(), c = ga(/* @__PURE__ */ new Set());
    return p2({
      modelValue: u,
      changeModelValue: (f) => {
        u.value = f;
      },
      orientation: n,
      dir: l,
      unmountOnHide: o,
      activationMode: a.activationMode,
      baseId: Qe(void 0, "reka-tabs"),
      tabsList: d,
      contentIds: c,
      registerContent: (f) => {
        c.value = /* @__PURE__ */ new Set([...c.value, f]);
      },
      unregisterContent: (f) => {
        const y = new Set(c.value);
        y.delete(f), c.value = y;
      }
    }), (f, y) => (v(), x(s(le), {
      dir: s(l),
      "data-orientation": s(n),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: m(() => [O(f.$slots, "default", { modelValue: s(u) })]),
      _: 3
    }, 8, [
      "dir",
      "data-orientation",
      "as-child",
      "as"
    ]));
  }
}), m2 = y2;
function ib(e, t) {
  return `${e}-trigger-${t}`;
}
function lb(e, t) {
  return `${e}-content-${t}`;
}
var h2 = /* @__PURE__ */ q({
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
    const t = e, { forwardRef: a } = ie(), r = eu(), n = M(() => ib(r.baseId, t.value)), o = M(() => lb(r.baseId, t.value)), i = M(() => t.value === r.modelValue.value), l = F(i.value);
    return qe(() => {
      r.registerContent(t.value), requestAnimationFrame(() => {
        l.value = !1;
      });
    }), rs(() => {
      r.unregisterContent(t.value);
    }), (u, d) => (v(), x(s(la), {
      present: u.forceMount || i.value,
      "force-mount": ""
    }, {
      default: m(({ present: c }) => [_(s(le), {
        id: o.value,
        ref: s(a),
        "as-child": u.asChild,
        as: u.as,
        role: "tabpanel",
        "data-state": i.value ? "active" : "inactive",
        "data-orientation": s(r).orientation.value,
        "aria-labelledby": n.value,
        hidden: !c,
        tabindex: "0",
        style: lt({ animationDuration: l.value ? "0s" : void 0 })
      }, {
        default: m(() => [!s(r).unmountOnHide.value || c ? O(u.$slots, "default", { key: 0 }) : Q("v-if", !0)]),
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
}), v2 = h2, g2 = /* @__PURE__ */ q({
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
    const t = e, { loop: a } = Ye(t), { forwardRef: r, currentElement: n } = ie(), o = eu();
    return o.tabsList = n, (i, l) => (v(), x(s(Yg), {
      "as-child": "",
      orientation: s(o).orientation.value,
      dir: s(o).dir.value,
      loop: s(a)
    }, {
      default: m(() => [_(s(le), {
        ref: s(r),
        role: "tablist",
        "as-child": i.asChild,
        as: i.as,
        "aria-orientation": s(o).orientation.value
      }, {
        default: m(() => [O(i.$slots, "default")]),
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
}), b2 = g2, k2 = /* @__PURE__ */ q({
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
    const t = e, { forwardRef: a } = ie(), r = eu(), n = M(() => ib(r.baseId, t.value)), o = M(() => r.contentIds.value.has(t.value) ? lb(r.baseId, t.value) : void 0), i = M(() => t.value === r.modelValue.value);
    return (l, u) => (v(), x(s(Zg), {
      "as-child": "",
      focusable: !l.disabled,
      active: i.value
    }, {
      default: m(() => [_(s(le), {
        id: n.value,
        ref: s(a),
        role: "tab",
        type: l.as === "button" ? "button" : void 0,
        as: l.as,
        "as-child": l.asChild,
        "aria-selected": i.value ? "true" : "false",
        "aria-controls": o.value,
        "data-state": i.value ? "active" : "inactive",
        disabled: l.disabled,
        "data-disabled": l.disabled ? "" : void 0,
        "data-orientation": s(r).orientation.value,
        onMousedown: u[0] || (u[0] = Me((d) => {
          !l.disabled && d.ctrlKey === !1 ? s(r).changeModelValue(l.value) : d.preventDefault();
        }, ["left"])),
        onKeydown: u[1] || (u[1] = mt((d) => s(r).changeModelValue(l.value), ["enter", "space"])),
        onFocus: u[2] || (u[2] = () => {
          const d = s(r).activationMode !== "manual";
          !i.value && !l.disabled && d && s(r).changeModelValue(l.value);
        })
      }, {
        default: m(() => [O(l.$slots, "default")]),
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
}), w2 = k2, x2 = /* @__PURE__ */ q({
  __name: "TooltipArrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const t = e;
    return ie(), (a, r) => (v(), x(s(FC), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), z2 = x2;
const [Zo] = /* @__PURE__ */ $e("TooltipProvider"), sb = "tooltip.open", [Qo, _2] = /* @__PURE__ */ $e("TooltipRoot");
var S2 = /* @__PURE__ */ q({
  __name: "TooltipRoot",
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
    delayDuration: {
      type: Number,
      required: !1,
      default: void 0
    },
    disableHoverableContent: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disableClosingTrigger: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: !1,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, r = t;
    ie();
    const n = Zo(), o = M(() => a.disableHoverableContent ?? n.disableHoverableContent.value), i = M(() => a.disableClosingTrigger ?? n.disableClosingTrigger.value), l = M(() => a.disabled ?? n.disabled.value), u = M(() => a.delayDuration ?? n.delayDuration.value), d = M(() => a.ignoreNonKeyboardFocus ?? n.ignoreNonKeyboardFocus.value), c = /* @__PURE__ */ Ze(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    ve(c, (S) => {
      n.onClose && (S ? (n.onOpen(), document.dispatchEvent(new CustomEvent(sb))) : n.onClose());
    });
    const f = F(!1), y = F(), p = M(() => c.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: h } = g0(() => {
      f.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      h(), f.value = !1, c.value = !0;
    }
    function w() {
      h(), c.value = !1;
    }
    function k() {
      g();
    }
    return _2({
      contentId: "",
      open: c,
      stateAttribute: p,
      trigger: y,
      onTriggerChange(S) {
        y.value = S;
      },
      onTriggerEnter() {
        n.isOpenDelayed.value ? k() : b();
      },
      onTriggerLeave() {
        o.value ? w() : h();
      },
      onOpen: b,
      onClose: w,
      disableHoverableContent: o,
      disableClosingTrigger: i,
      disabled: l,
      ignoreNonKeyboardFocus: d
    }), (S, z) => (v(), x(s(On), null, {
      default: m(() => [O(S.$slots, "default", { open: s(c) })]),
      _: 3
    }));
  }
}), q2 = S2, O2 = /* @__PURE__ */ q({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    as: {
      type: null,
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
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1,
      default: void 0
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
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Qo(), o = Zo(), { forwardRef: i, currentElement: l } = ie(), u = M(() => a.ariaLabel || l.value?.textContent), d = M(() => {
      const { ariaLabel: c, ...f } = a;
      return Yv(f, o.content.value ?? {}, {
        side: "top",
        sideOffset: 0,
        align: "center",
        avoidCollisions: !0,
        collisionBoundary: [],
        collisionPadding: 0,
        arrowPadding: 0,
        sticky: "partial",
        hideWhenDetached: !1
      });
    });
    return qe(() => {
      vr(window, "scroll", (c) => {
        c.target?.contains(n.trigger.value) && n.onClose();
      }, { capture: !0 }), vr(window, sb, n.onClose);
    }), (c, f) => (v(), x(s(jr), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (y) => r("escapeKeyDown", y)),
      onPointerDownOutside: f[1] || (f[1] = (y) => {
        s(n).disableClosingTrigger.value && s(n).trigger.value?.contains(y.target) && y.preventDefault(), r("pointerDownOutside", y);
      }),
      onFocusOutside: f[2] || (f[2] = Me(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (y) => s(n).onClose())
    }, {
      default: m(() => [_(s(En), P({
        ref: s(i),
        "data-state": s(n).stateAttribute.value
      }, {
        ...c.$attrs,
        ...d.value
      }, { style: {
        "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
        "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
        "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
      } }), {
        default: m(() => [O(c.$slots, "default"), _(s(Rs), {
          id: s(n).contentId,
          role: "tooltip"
        }, {
          default: m(() => [J(V(u.value), 1)]),
          _: 1
        }, 8, ["id"])]),
        _: 3
      }, 16, ["data-state"])]),
      _: 3
    }));
  }
}), ub = O2, A2 = /* @__PURE__ */ q({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {
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
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
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
    }
  },
  setup(e) {
    const t = Ie(e), { forwardRef: a, currentElement: r } = ie(), { trigger: n, onClose: o } = Qo(), i = Zo(), { isPointerInTransit: l, onPointerExit: u } = Pq(n, r);
    return i.isPointerInTransitRef = l, u(() => {
      o();
    }), (d, c) => (v(), x(ub, P({ ref: s(a) }, s(t)), {
      default: m(() => [O(d.$slots, "default")]),
      _: 3
    }, 16));
  }
}), C2 = A2, E2 = /* @__PURE__ */ q({
  __name: "TooltipContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    ariaLabel: {
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
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
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
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = Qo(), o = Ce(a, r), { forwardRef: i } = ie();
    return (l, u) => (v(), x(s(la), { present: l.forceMount || s(n).open.value }, {
      default: m(() => [(v(), x(Sa(s(n).disableHoverableContent.value ? ub : C2), P({ ref: s(i) }, s(o)), {
        default: m(() => [O(l.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), $2 = E2, B2 = /* @__PURE__ */ q({
  __name: "TooltipPortal",
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
    return (a, r) => (v(), x(s(Ga), Pe(Ne(t)), {
      default: m(() => [O(a.$slots, "default")]),
      _: 3
    }, 16));
  }
}), D2 = B2, M2 = /* @__PURE__ */ q({
  __name: "TooltipTrigger",
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
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, a = Qo(), r = Zo();
    a.contentId ||= Qe(void 0, "reka-tooltip-content");
    const { forwardRef: n, currentElement: o } = ie(), i = F(!1), l = F(!1), u = M(() => a.disabled.value ? {} : {
      click: h,
      focus: p,
      pointermove: f,
      pointerleave: y,
      pointerdown: c,
      blur: g
    });
    qe(() => {
      a.onTriggerChange(o.value);
    });
    function d() {
      setTimeout(() => {
        i.value = !1;
      }, 1);
    }
    function c() {
      a.open && !a.disableClosingTrigger.value && a.onClose(), i.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function f(b) {
      b.pointerType !== "touch" && !l.value && !r.isPointerInTransitRef.value && (a.onTriggerEnter(), l.value = !0);
    }
    function y() {
      a.onTriggerLeave(), l.value = !1;
    }
    function p(b) {
      i.value || a.ignoreNonKeyboardFocus.value && !b.target.matches?.(":focus-visible") || a.onOpen();
    }
    function g() {
      a.onClose();
    }
    function h() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (b, w) => (v(), x(s(An), {
      "as-child": "",
      reference: b.reference
    }, {
      default: m(() => [_(s(le), P({
        ref: s(n),
        "aria-describedby": s(a).open.value ? s(a).contentId : void 0,
        "data-state": s(a).stateAttribute.value,
        as: b.as,
        "as-child": t.asChild,
        "data-grace-area-trigger": ""
      }, Fk(u.value)), {
        default: m(() => [O(b.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-describedby",
        "data-state",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), P2 = M2;
function db(e) {
  var t, a, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (a = db(e[t])) && (r && (r += " "), r += a);
  } else for (a in e) e[a] && (r && (r += " "), r += a);
  return r;
}
function cb() {
  for (var e, t, a = 0, r = "", n = arguments.length; a < n; a++) (e = arguments[a]) && (t = db(e)) && (r && (r += " "), r += t);
  return r;
}
const j2 = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    a[r] = e[r];
  for (let r = 0; r < t.length; r++)
    a[e.length + r] = t[r];
  return a;
}, I2 = (e, t) => ({
  classGroupId: e,
  validator: t
}), fb = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), bo = "-", cf = [], F2 = "arbitrary..", T2 = (e) => {
  const t = V2(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (n) => {
      if (n.startsWith("[") && n.endsWith("]"))
        return N2(n);
      const o = n.split(bo), i = o[0] === "" && o.length > 1 ? 1 : 0;
      return pb(o, i, t);
    },
    getConflictingClassGroupIds: (n, o) => {
      if (o) {
        const i = r[n], l = a[n];
        return i ? l ? j2(l, i) : i : l || cf;
      }
      return a[n] || cf;
    }
  };
}, pb = (e, t, a) => {
  if (e.length - t === 0)
    return a.classGroupId;
  const r = e[t], n = a.nextPart.get(r);
  if (n) {
    const u = pb(e, t + 1, n);
    if (u) return u;
  }
  const o = a.validators;
  if (o === null)
    return;
  const i = t === 0 ? e.join(bo) : e.slice(t).join(bo), l = o.length;
  for (let u = 0; u < l; u++) {
    const d = o[u];
    if (d.validator(i))
      return d.classGroupId;
  }
}, N2 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), r = t.slice(0, a);
  return r ? F2 + r : void 0;
})(), V2 = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return R2(a, t);
}, R2 = (e, t) => {
  const a = fb();
  for (const r in e) {
    const n = e[r];
    tu(n, a, r, t);
  }
  return a;
}, tu = (e, t, a, r) => {
  const n = e.length;
  for (let o = 0; o < n; o++) {
    const i = e[o];
    L2(i, t, a, r);
  }
}, L2 = (e, t, a, r) => {
  if (typeof e == "string") {
    U2(e, t, a);
    return;
  }
  if (typeof e == "function") {
    W2(e, t, a, r);
    return;
  }
  K2(e, t, a, r);
}, U2 = (e, t, a) => {
  const r = e === "" ? t : yb(t, e);
  r.classGroupId = a;
}, W2 = (e, t, a, r) => {
  if (G2(e)) {
    tu(e(r), t, a, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(I2(a, e));
}, K2 = (e, t, a, r) => {
  const n = Object.entries(e), o = n.length;
  for (let i = 0; i < o; i++) {
    const [l, u] = n[i];
    tu(u, yb(t, l), a, r);
  }
}, yb = (e, t) => {
  let a = e;
  const r = t.split(bo), n = r.length;
  for (let o = 0; o < n; o++) {
    const i = r[o];
    let l = a.nextPart.get(i);
    l || (l = fb(), a.nextPart.set(i, l)), a = l;
  }
  return a;
}, G2 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, H2 = (e) => {
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
}, Hl = "!", ff = ":", Y2 = [], pf = (e, t, a, r, n) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: r,
  isExternal: n
}), Z2 = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let r = (n) => {
    const o = [];
    let i = 0, l = 0, u = 0, d;
    const c = n.length;
    for (let h = 0; h < c; h++) {
      const b = n[h];
      if (i === 0 && l === 0) {
        if (b === ff) {
          o.push(n.slice(u, h)), u = h + 1;
          continue;
        }
        if (b === "/") {
          d = h;
          continue;
        }
      }
      b === "[" ? i++ : b === "]" ? i-- : b === "(" ? l++ : b === ")" && l--;
    }
    const f = o.length === 0 ? n : n.slice(u);
    let y = f, p = !1;
    f.endsWith(Hl) ? (y = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Hl) && (y = f.slice(1), p = !0)
    );
    const g = d && d > u ? d - u : void 0;
    return pf(o, p, y, g);
  };
  if (t) {
    const n = t + ff, o = r;
    r = (i) => i.startsWith(n) ? o(i.slice(n.length)) : pf(Y2, !1, i, void 0, !0);
  }
  if (a) {
    const n = r;
    r = (o) => a({
      className: o,
      parseClassName: n
    });
  }
  return r;
}, Q2 = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((a, r) => {
    t.set(a, 1e6 + r);
  }), (a) => {
    const r = [];
    let n = [];
    for (let o = 0; o < a.length; o++) {
      const i = a[o], l = i[0] === "[", u = t.has(i);
      l || u ? (n.length > 0 && (n.sort(), r.push(...n), n = []), r.push(i)) : n.push(i);
    }
    return n.length > 0 && (n.sort(), r.push(...n)), r;
  };
}, J2 = (e) => ({
  cache: H2(e.cacheSize),
  parseClassName: Z2(e),
  sortModifiers: Q2(e),
  ...T2(e)
}), X2 = /\s+/, eD = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = t, i = [], l = e.trim().split(X2);
  let u = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const c = l[d], {
      isExternal: f,
      modifiers: y,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    } = a(c);
    if (f) {
      u = c + (u.length > 0 ? " " + u : u);
      continue;
    }
    let b = !!h, w = r(b ? g.substring(0, h) : g);
    if (!w) {
      if (!b) {
        u = c + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (w = r(g), !w) {
        u = c + (u.length > 0 ? " " + u : u);
        continue;
      }
      b = !1;
    }
    const k = y.length === 0 ? "" : y.length === 1 ? y[0] : o(y).join(":"), S = p ? k + Hl : k, z = S + w;
    if (i.indexOf(z) > -1)
      continue;
    i.push(z);
    const $ = n(w, b);
    for (let A = 0; A < $.length; ++A) {
      const C = $[A];
      i.push(S + C);
    }
    u = c + (u.length > 0 ? " " + u : u);
  }
  return u;
}, tD = (...e) => {
  let t = 0, a, r, n = "";
  for (; t < e.length; )
    (a = e[t++]) && (r = mb(a)) && (n && (n += " "), n += r);
  return n;
}, mb = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = mb(e[r])) && (a && (a += " "), a += t);
  return a;
}, aD = (e, ...t) => {
  let a, r, n, o;
  const i = (u) => {
    const d = t.reduce((c, f) => f(c), e());
    return a = J2(d), r = a.cache.get, n = a.cache.set, o = l, l(u);
  }, l = (u) => {
    const d = r(u);
    if (d)
      return d;
    const c = eD(u, a);
    return n(u, c), c;
  };
  return o = i, (...u) => o(tD(...u));
}, rD = [], et = (e) => {
  const t = (a) => a[e] || rD;
  return t.isThemeGetter = !0, t;
}, hb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, vb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, nD = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, oD = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, iD = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lD = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, sD = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, uD = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pa = (e) => nD.test(e), we = (e) => !!e && !Number.isNaN(Number(e)), ya = (e) => !!e && Number.isInteger(Number(e)), dl = (e) => e.endsWith("%") && we(e.slice(0, -1)), Jt = (e) => oD.test(e), gb = () => !0, dD = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  iD.test(e) && !lD.test(e)
), au = () => !1, cD = (e) => sD.test(e), fD = (e) => uD.test(e), pD = (e) => !se(e) && !ue(e), yD = (e) => Oa(e, wb, au), se = (e) => hb.test(e), Ba = (e) => Oa(e, xb, dD), yf = (e) => Oa(e, xD, we), mD = (e) => Oa(e, _b, gb), hD = (e) => Oa(e, zb, au), mf = (e) => Oa(e, bb, au), vD = (e) => Oa(e, kb, fD), Un = (e) => Oa(e, Sb, cD), ue = (e) => vb.test(e), Yr = (e) => Qa(e, xb), gD = (e) => Qa(e, zb), hf = (e) => Qa(e, bb), bD = (e) => Qa(e, wb), kD = (e) => Qa(e, kb), Wn = (e) => Qa(e, Sb, !0), wD = (e) => Qa(e, _b, !0), Oa = (e, t, a) => {
  const r = hb.exec(e);
  return r ? r[1] ? t(r[1]) : a(r[2]) : !1;
}, Qa = (e, t, a = !1) => {
  const r = vb.exec(e);
  return r ? r[1] ? t(r[1]) : a : !1;
}, bb = (e) => e === "position" || e === "percentage", kb = (e) => e === "image" || e === "url", wb = (e) => e === "length" || e === "size" || e === "bg-size", xb = (e) => e === "length", xD = (e) => e === "number", zb = (e) => e === "family-name", _b = (e) => e === "number" || e === "weight", Sb = (e) => e === "shadow", zD = () => {
  const e = et("color"), t = et("font"), a = et("text"), r = et("font-weight"), n = et("tracking"), o = et("leading"), i = et("breakpoint"), l = et("container"), u = et("spacing"), d = et("radius"), c = et("shadow"), f = et("inset-shadow"), y = et("text-shadow"), p = et("drop-shadow"), g = et("blur"), h = et("perspective"), b = et("aspect"), w = et("ease"), k = et("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [
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
  ], $ = () => [...z(), ue, se], A = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], E = () => [ue, se, u], D = () => [pa, "full", "auto", ...E()], R = () => [ya, "none", "subgrid", ue, se], oe = () => ["auto", {
    span: ["full", ya, ue, se]
  }, ya, ue, se], ae = () => [ya, "auto", ue, se], H = () => ["auto", "min", "max", "fr", ue, se], re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], j = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...E()], L = () => [pa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], G = () => [pa, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()], ce = () => [pa, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...E()], T = () => [e, ue, se], fe = () => [...z(), hf, mf, {
    position: [ue, se]
  }], te = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], he = () => ["auto", "cover", "contain", bD, yD, {
    size: [ue, se]
  }], Ve = () => [dl, Yr, Ba], Oe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ue,
    se
  ], ge = () => ["", we, Yr, Ba], De = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [we, dl, hf, mf], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    ue,
    se
  ], de = () => ["none", we, ue, se], be = () => ["none", we, ue, se], _e = () => [we, ue, se], Xe = () => [pa, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Jt],
      breakpoint: [Jt],
      color: [gb],
      container: [Jt],
      "drop-shadow": [Jt],
      ease: ["in", "out", "in-out"],
      font: [pD],
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
        aspect: ["auto", "square", pa, se, ue, b]
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
        columns: [we, se, ue, l]
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
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
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
        inset: D()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: D()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: D()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": D()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
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
        z: [ya, "auto", ue, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pa, "full", "auto", l, ...E()]
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
        flex: [we, pa, "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", we, ue, se]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", we, ue, se]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ya, "first", "last", "none", ue, se]
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
        "justify-items": [...j(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...j()]
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
        items: [...j(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...j(), {
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
        "place-items": [...j(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...j()]
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
        m: W()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: W()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: W()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: W()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: W()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: W()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: W()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: W()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: W()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: W()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: W()
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
        size: L()
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
        w: [l, "screen", ...L()]
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
          ...L()
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
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, Yr, Ba]
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
        font: [r, wD, mD]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", dl, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gD, hD, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [se]
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
        tracking: [n, ue, se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [we, "none", ue, yf]
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
        "list-image": ["none", ue, se]
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
        list: ["disc", "decimal", "none", ue, se]
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
        decoration: [...De(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [we, "from-font", "auto", ue, Ba]
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
        "underline-offset": [we, "auto", ue, se]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue, se]
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
        content: ["none", ue, se]
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
          }, ya, ue, se],
          radial: ["", ue, se],
          conic: [ya, ue, se]
        }, kD, vD]
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
        from: Ve()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Ve()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Ve()
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
        rounded: Oe()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Oe()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Oe()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Oe()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Oe()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Oe()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Oe()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Oe()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Oe()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Oe()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Oe()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Oe()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Oe()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Oe()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Oe()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ge()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ge()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ge()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ge()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ge()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": ge()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": ge()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ge()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ge()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ge()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ge()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ge()
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
        "divide-y": ge()
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
        border: [...De(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...De(), "hidden", "none"]
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
        outline: [...De(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [we, ue, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", we, Yr, Ba]
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
          Wn,
          Un
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
        "inset-shadow": ["none", f, Wn, Un]
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
        ring: ge()
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
        "ring-offset": [we, Ba]
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
        "inset-ring": ge()
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
        "text-shadow": ["none", y, Wn, Un]
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
        opacity: [we, ue, se]
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
        "mask-radial": [ue, se]
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
        mask: ["none", ue, se]
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
          ue,
          se
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
        brightness: [we, ue, se]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [we, ue, se]
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
          Wn,
          Un
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
        grayscale: ["", we, ue, se]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [we, ue, se]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", we, ue, se]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [we, ue, se]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", we, ue, se]
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
          ue,
          se
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
        "backdrop-brightness": [we, ue, se]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [we, ue, se]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", we, ue, se]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [we, ue, se]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", we, ue, se]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [we, ue, se]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [we, ue, se]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", we, ue, se]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ue, se]
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
        duration: [we, "initial", ue, se]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, ue, se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [we, ue, se]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, ue, se]
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
        perspective: [h, ue, se]
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
        rotate: de()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": de()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": de()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": de()
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
        skew: _e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": _e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": _e()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ue, se, "", "none", "gpu", "cpu"]
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
        translate: Xe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Xe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Xe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Xe()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue, se]
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
        "will-change": ["auto", "scroll", "contents", "transform", ue, se]
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
        stroke: [we, Yr, Ba, yf]
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
}, _D = /* @__PURE__ */ aD(zD);
function Y(...e) {
  return _D(cb(e));
}
const SD = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, vf = (e) => e === "", qD = (...e) => e.filter((t, a, r) => !!t && t.trim() !== "" && r.indexOf(t) === a).join(" ").trim(), gf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), OD = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, r) => r ? r.toUpperCase() : a.toLowerCase()
), AD = (e) => {
  const t = OD(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Zr = {
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
const CD = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": r,
  strokeWidth: n,
  "stroke-width": o,
  size: i = Zr.width,
  color: l = Zr.stroke,
  ...u
}, { slots: d }) => aa(
  "svg",
  {
    ...Zr,
    ...u,
    width: i,
    height: i,
    stroke: l,
    "stroke-width": vf(a) || vf(r) || a === !0 || r === !0 ? Number(n || o || Zr["stroke-width"]) * 24 / Number(i) : n || o || Zr["stroke-width"],
    class: qD(
      "lucide",
      u.class,
      ...e ? [`lucide-${gf(AD(e))}-icon`, `lucide-${gf(e)}`] : ["lucide-icon"]
    ),
    ...!d.default && !SD(u) && { "aria-hidden": "true" }
  },
  [...t.map((c) => aa(...c)), ...d.default ? [d.default()] : []]
), Mt = (e, t) => (a, { slots: r, attrs: n }) => aa(
  CD,
  {
    ...n,
    ...a,
    iconNode: t,
    name: e
  },
  r
), ED = Mt("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), ru = Mt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]), qb = Mt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), $D = Mt("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), BD = Mt("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), DD = Mt("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), MD = Mt("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]), PD = Mt("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), jD = Mt("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]), ID = Mt("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]), Ob = Mt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), bf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, kf = cb, Ab = (e, t) => (a) => {
  var r;
  if (t?.variants == null) return kf(e, a?.class, a?.className);
  const { variants: n, defaultVariants: o } = t, i = Object.keys(n).map((d) => {
    const c = a?.[d], f = o?.[d];
    if (c === null) return null;
    const y = bf(c) || bf(f);
    return n[d][y];
  }), l = a && Object.entries(a).reduce((d, c) => {
    let [f, y] = c;
    return y === void 0 || (d[f] = y), d;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, c) => {
    let { class: f, className: y, ...p } = c;
    return Object.entries(p).every((g) => {
      let [h, b] = g;
      return Array.isArray(b) ? b.includes({
        ...o,
        ...l
      }[h]) : {
        ...o,
        ...l
      }[h] === b;
    }) ? [
      ...d,
      f,
      y
    ] : d;
  }, []);
  return kf(e, i, u, a?.class, a?.className);
}, eI = /* @__PURE__ */ q({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "alert",
      class: ye(s(Y)(s(FD)({ variant: e.variant }), t.class)),
      role: "alert"
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), tI = /* @__PURE__ */ q({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "alert-description",
      class: ye(s(Y)("zkit:text-muted-foreground zkit:col-start-2 zkit:grid zkit:justify-items-start zkit:gap-1 zkit:text-sm zkit:[&_p]:leading-relaxed", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), aI = /* @__PURE__ */ q({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "alert-title",
      class: ye(s(Y)("zkit:col-start-2 zkit:line-clamp-1 zkit:min-h-4 zkit:font-medium zkit:tracking-tight", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), FD = Ab(
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
), TD = /* @__PURE__ */ q({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Ce(e, t);
    return (r, n) => (v(), x(s(ZO), P({ "data-slot": "alert-dialog" }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ot = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(le), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ye(s(Y)(s(Tr)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Tr = Ab(
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
), ND = /* @__PURE__ */ q({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(jO), P(s(a), {
      class: s(Y)(s(Tr)(), t.class)
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VD = /* @__PURE__ */ q({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(RO), P(s(a), {
      class: s(Y)(
        s(Tr)({ variant: "zkit:outline" }),
        "zkit:mt-2 zkit:sm:mt-0",
        t.class
      )
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), RD = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(HO), null, {
      default: m(() => [
        _(s(KO), {
          "data-slot": "alert-dialog-overlay",
          class: "zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:fixed zkit:inset-0 zkit:z-50 zkit:bg-black/80"
        }),
        _(s(NO), P({ "data-slot": "alert-dialog-content" }, s(o), {
          class: s(Y)(
            "zkit:bg-background zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:fixed zkit:top-[50%] zkit:left-[50%] zkit:z-50 zkit:grid zkit:w-full zkit:max-w-[calc(100%-2rem)] zkit:translate-x-[-50%] zkit:translate-y-[-50%] zkit:gap-4 zkit:rounded-lg zkit:border zkit:p-6 zkit:shadow-lg zkit:duration-200 zkit:sm:max-w-lg",
            a.class
          )
        }), {
          default: m(() => [
            O(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), LD = /* @__PURE__ */ q({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(UO), P({ "data-slot": "alert-dialog-description" }, s(a), {
      class: s(Y)("zkit:text-muted-foreground zkit:text-sm", t.class)
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UD = /* @__PURE__ */ q({
  __name: "AlertDialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "alert-dialog-footer",
      class: ye(
        s(Y)(
          "zkit:flex zkit:flex-col-reverse zkit:gap-2 zkit:sm:flex-row zkit:sm:justify-end",
          t.class
        )
      )
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), WD = /* @__PURE__ */ q({
  __name: "AlertDialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "alert-dialog-header",
      class: ye(s(Y)("zkit:flex zkit:flex-col zkit:gap-2 zkit:text-center zkit:sm:text-left", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), KD = /* @__PURE__ */ q({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(JO), P({ "data-slot": "alert-dialog-title" }, s(a), {
      class: s(Y)("zkit:text-lg zkit:font-semibold", t.class)
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), GD = /* @__PURE__ */ q({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(eA), P({ "data-slot": "alert-dialog-trigger" }, t), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wf = /* @__PURE__ */ q({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(yE), {
      "data-slot": "avatar",
      class: ye(s(Y)("zkit:relative zkit:flex zkit:size-8 zkit:shrink-0 zkit:overflow-hidden zkit:rounded-full", t.class))
    }, {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xf = /* @__PURE__ */ q({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(hE), P({ "data-slot": "avatar-fallback" }, s(a), {
      class: s(Y)("zkit:bg-muted zkit:flex zkit:size-full zkit:items-center zkit:justify-center zkit:rounded-full", t.class)
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zf = /* @__PURE__ */ q({
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
    return (a, r) => (v(), x(s(bE), P({ "data-slot": "avatar-image" }, t, { class: "zkit:aspect-square zkit:size-full" }), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), HD = { class: "zkit:flex zkit:items-center zkit:gap-2 zkit:justify-between" }, YD = { class: "zkit:flex zkit:flex-col zkit:gap-y-4 zkit:mt-4 zkit:sm:flex-row zkit:sm:gap-x-4 zkit:sm:gap-y-0" }, ZD = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    function i(l, u) {
      return u === -1 ? l.subtract({ years: 1 }) : l.add({ years: 1 });
    }
    return (l, u) => (v(), x(s(EE), P({
      "data-slot": "calendar",
      class: s(Y)("zkit:px-2 zkit:py-3", a.class)
    }, s(o)), {
      default: m(({ grid: d, weekDays: c }) => [
        _(s(rM), null, {
          default: m(() => [
            ee("div", HD, [
              _(s(qf), {
                "prev-page": (f) => i(f, -1)
              }, {
                default: m(() => [
                  _(s(MD))
                ]),
                _: 1
              }, 8, ["prev-page"]),
              _(s(qf)),
              _(s(nM)),
              _(s(Sf)),
              _(s(Sf), {
                "next-page": (f) => i(f, 1)
              }, {
                default: m(() => [
                  _(s(jD))
                ]),
                _: 1
              }, 8, ["next-page"])
            ])
          ]),
          _: 1
        }),
        ee("div", YD, [
          (v(!0), U(xe, null, je(d, (f) => (v(), x(s(XD), {
            key: f.value.toString()
          }, {
            default: m(() => [
              _(s(tM), null, {
                default: m(() => [
                  _(s(_f), null, {
                    default: m(() => [
                      (v(!0), U(xe, null, je(c, (y) => (v(), x(s(aM), { key: y }, {
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
              _(s(eM), null, {
                default: m(() => [
                  (v(!0), U(xe, null, je(f.rows, (y, p) => (v(), x(s(_f), {
                    key: `weekDate-${p}`,
                    class: "zkit:mt-2 zkit:w-full"
                  }, {
                    default: m(() => [
                      (v(!0), U(xe, null, je(y, (g) => (v(), x(s(QD), {
                        key: g.toString(),
                        date: g
                      }, {
                        default: m(() => [
                          _(s(JD), {
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
}), QD = /* @__PURE__ */ q({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(BE), P({
      "data-slot": "calendar-cell",
      class: s(Y)("zkit:relative zkit:p-0 zkit:text-center zkit:text-sm zkit:focus-within:relative zkit:focus-within:z-20 zkit:[&:has([data-selected])]:rounded-md zkit:[&:has([data-selected])]:bg-accent", t.class)
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), JD = /* @__PURE__ */ q({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(ME), P({
      "data-slot": "calendar-cell-trigger",
      class: s(Y)(
        s(Tr)({ variant: "zkit:ghost" }),
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
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XD = /* @__PURE__ */ q({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(jE), P({
      "data-slot": "calendar-grid",
      class: s(Y)("zkit:w-full zkit:border-collapse zkit:space-x-1", t.class)
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eM = /* @__PURE__ */ q({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(FE), P({ "data-slot": "calendar-grid-body" }, t), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tM = /* @__PURE__ */ q({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(NE), P({ "data-slot": "calendar-grid-head" }, t), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _f = /* @__PURE__ */ q({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(RE), P({
      "data-slot": "calendar-grid-row",
      class: s(Y)("zkit:h-8", t.class)
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aM = /* @__PURE__ */ q({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(UE), P({
      "data-slot": "calendar-head-cell",
      class: s(Y)("zkit:text-muted-foreground zkit:rounded-md zkit:w-8 zkit:font-normal zkit:text-[0.8rem]", t.class)
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rM = /* @__PURE__ */ q({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(KE), P({
      "data-slot": "calendar-header",
      class: s(Y)("zkit:flex zkit:justify-center zkit:pt-1 zkit:relative zkit:items-center zkit:w-full", t.class)
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nM = /* @__PURE__ */ q({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(HE), P({
      "data-slot": "calendar-heading",
      class: s(Y)("zkit:text-sm zkit:font-medium", t.class)
    }, s(r)), {
      default: m(({ headingValue: i }) => [
        O(n.$slots, "default", { headingValue: i }, () => [
          J(V(i), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sf = /* @__PURE__ */ q({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(ZE), P({
      "data-slot": "calendar-next-button",
      class: s(Y)(
        s(Tr)({ variant: "zkit:outline" }),
        "zkit:size-7 zkit:bg-transparent zkit:p-0 zkit:opacity-50 zkit:hover:opacity-100",
        t.class
      )
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default", {}, () => [
          _(s(BD), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = /* @__PURE__ */ q({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(JE), P({
      "data-slot": "calendar-prev-button",
      class: s(Y)(
        s(Tr)({ variant: "zkit:outline" }),
        "zkit:size-7 zkit:bg-transparent zkit:p-0 zkit:opacity-50 zkit:hover:opacity-100",
        t.class
      )
    }, s(r)), {
      default: m(() => [
        O(n.$slots, "default", {}, () => [
          _(s($D), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cl = /* @__PURE__ */ q({
  __name: "Card",
  props: {
    tag: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(Sa(t.tag || "div"), {
      "data-slot": "card",
      class: ye(
        s(Y)(
          "zkit:bg-card zkit:text-card-foreground zkit:flex zkit:flex-col zkit:gap-6 zkit:rounded-xl zkit:border zkit:py-6 zkit:shadow-sm",
          t.class
        )
      )
    }, {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fl = /* @__PURE__ */ q({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "card-content",
      class: ye(s(Y)("zkit:px-6", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), rI = /* @__PURE__ */ q({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("p", {
      "data-slot": "card-description",
      class: ye(s(Y)("zkit:text-muted-foreground zkit:text-sm", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), nI = /* @__PURE__ */ q({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "card-header",
      class: ye(s(Y)("zkit:@container/card-header zkit:grid zkit:auto-rows-min zkit:grid-rows-[auto_auto] zkit:items-start zkit:gap-1.5 zkit:px-6 zkit:has-data-[slot=card-action]:grid-cols-[1fr_auto] zkit:[.border-b]:pb-6", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), oI = /* @__PURE__ */ q({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("h3", {
      "data-slot": "card-title",
      class: ye(s(Y)("zkit:leading-none zkit:font-semibold", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), Xr = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(l$), P({ "data-slot": "checkbox" }, s(o), {
      class: s(Y)(
        "zkit:peer zkit:border-input zkit:data-[state=checked]:bg-primary zkit:data-[state=checked]:text-primary-foreground zkit:data-[state=checked]:border-primary zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:size-4 zkit:shrink-0 zkit:rounded-[4px] zkit:border zkit:shadow-xs zkit:transition-shadow zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
        a.class
      )
    }), {
      default: m(() => [
        _(s(u$), {
          "data-slot": "checkbox-indicator",
          class: "zkit:flex zkit:items-center zkit:justify-center zkit:text-current zkit:transition-none"
        }, {
          default: m(() => [
            O(i.$slots, "default", {}, () => [
              _(s(ru), { class: "zkit:size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oM = /* @__PURE__ */ q({
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
    const a = Ce(e, t);
    return (r, n) => (v(), x(s(VC), P({ "data-slot": "combobox" }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iM = /* @__PURE__ */ q({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(LC), P({ "data-slot": "combobox-anchor" }, s(r), {
      class: s(Y)("zkit:w-[200px]", t.class)
    }), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lM = /* @__PURE__ */ q({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(YC), P({ "data-slot": "combobox-empty" }, s(a), {
      class: s(Y)("zkit:py-6 zkit:text-center zkit:text-sm", t.class)
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sM = /* @__PURE__ */ q({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    heading: {}
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(JC), P({ "data-slot": "combobox-group" }, s(a), {
      class: s(Y)("zkit:overflow-hidden zkit:p-1 zkit:text-foreground", t.class)
    }), {
      default: m(() => [
        e.heading ? (v(), x(s(iE), {
          key: 0,
          class: "zkit:px-2 zkit:py-1.5 zkit:text-xs zkit:font-medium zkit:text-muted-foreground"
        }, {
          default: m(() => [
            J(V(e.heading), 1)
          ]),
          _: 1
        })) : Q("", !0),
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uM = {
  "data-slot": "command-input-wrapper",
  class: "zkit:flex zkit:h-9 zkit:items-center zkit:gap-2 zkit:border-b zkit:px-3"
}, dM = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), U("div", uM, [
      _(s(ID), { class: "zkit:size-4 zkit:shrink-0 zkit:opacity-50" }),
      _(s(eE), P({
        "data-slot": "command-input",
        class: s(Y)(
          "zkit:placeholder:text-muted-foreground zkit:flex zkit:h-10 zkit:w-full zkit:rounded-md zkit:bg-transparent zkit:py-3 zkit:text-sm zkit:outline-hidden zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
          a.class
        )
      }, { ...s(o), ...i.$attrs }), {
        default: m(() => [
          O(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"])
    ]));
  }
}), Of = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(aE), P({ "data-slot": "combobox-item" }, s(o), {
      class: s(Y)("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a.class)
    }), {
      default: m(() => [
        O(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cM = /* @__PURE__ */ q({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(nE), P({ "data-slot": "combobox-item-indicator" }, s(r), {
      class: s(Y)("zkit:ml-auto", t.class)
    }), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fM = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => e.portable ? (v(), x(s(sE), { key: 0 }, {
      default: m(() => [
        _(s(uf), P({ "data-slot": "combobox-list" }, s(o), {
          class: s(Y)("zkit:z-50 zkit:w-[200px] zkit:rounded-md zkit:border zkit:bg-popover zkit:text-popover-foreground zkit:origin-(--zkit-reka-combobox-content-transform-origin) zkit:overflow-hidden zkit:shadow-md zkit:outline-none zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2", a.class)
        }), {
          default: m(() => [
            O(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    })) : (v(), x(s(uf), P({
      key: 1,
      "data-slot": "combobox-list"
    }, s(o), {
      class: s(Y)("zkit:z-50 zkit:w-[200px] zkit:rounded-md zkit:border zkit:bg-popover zkit:text-popover-foreground zkit:origin-(--zkit-reka-combobox-content-transform-origin) zkit:overflow-hidden zkit:shadow-md zkit:outline-none zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2", a.class)
    }), {
      default: m(() => [
        O(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nu = /* @__PURE__ */ q({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Ce(e, t);
    return (r, n) => (v(), x(s(xg), P({ "data-slot": "dialog" }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pM = /* @__PURE__ */ q({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(Eg), P({ "data-slot": "dialog-overlay" }, s(a), {
      class: s(Y)("zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:fixed zkit:inset-0 zkit:z-50 zkit:bg-black/80", t.class)
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ou = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(BO), null, {
      default: m(() => [
        _(pM),
        _(s(Ag), P({ "data-slot": "dialog-content" }, s(o), {
          class: s(Y)(
            "zkit:bg-background zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:fixed zkit:top-[50%] zkit:left-[50%] zkit:z-50 zkit:grid zkit:w-full zkit:max-w-[calc(100%-2rem)] zkit:translate-x-[-50%] zkit:translate-y-[-50%] zkit:gap-4 zkit:rounded-lg zkit:border zkit:p-6 zkit:shadow-lg zkit:duration-200 zkit:sm:max-w-lg",
            a.class
          )
        }), {
          default: m(() => [
            O(i.$slots, "default"),
            a.hideClose ? Q("", !0) : (v(), x(s(Vs), {
              key: 0,
              class: "zkit:ring-offset-background zkit:focus:ring-ring zkit:data-[state=open]:bg-accent zkit:data-[state=open]:text-muted-foreground zkit:absolute zkit:top-4 zkit:right-4 zkit:rounded-xs zkit:opacity-70 zkit:transition-opacity zkit:hover:opacity-100 zkit:focus:ring-2 zkit:focus:ring-offset-2 zkit:focus:outline-hidden zkit:disabled:pointer-events-none zkit:[&_svg]:pointer-events-none zkit:[&_svg]:shrink-0 zkit:[&_svg:not([class*='size-'])]:size-4"
            }, {
              default: m(() => [
                _(s(Ob)),
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
}), iu = /* @__PURE__ */ q({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(Cg), P({ "data-slot": "dialog-description" }, s(r), {
      class: s(Y)("zkit:text-muted-foreground zkit:text-sm", t.class)
    }), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yM = /* @__PURE__ */ q({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "dialog-footer",
      class: ye(s(Y)("zkit:flex zkit:flex-col-reverse zkit:gap-2 zkit:sm:flex-row zkit:sm:justify-end", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), Cb = /* @__PURE__ */ q({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "dialog-header",
      class: ye(s(Y)("zkit:flex zkit:flex-col zkit:gap-2 zkit:text-center zkit:sm:text-left", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), lu = /* @__PURE__ */ q({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s($g), P({ "data-slot": "dialog-title" }, s(r), {
      class: s(Y)("zkit:text-lg zkit:leading-none zkit:font-semibold", t.class)
    }), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), su = /* @__PURE__ */ q({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(Bg), P({ "data-slot": "dialog-trigger" }, t), {
      default: m(() => [
        O(a.$slots, "default")
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
const Yl = /* @__PURE__ */ q({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Ce(e, t);
    return (r, n) => (v(), x(s(H$), P({ "data-slot": "dropdown-menu" }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zl = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(eB), null, {
      default: m(() => [
        _(s(Z$), P({ "data-slot": "dropdown-menu-content" }, s(o), {
          class: s(Y)("zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:z-50 zkit:max-h-(--zkit-reka-dropdown-menu-content-available-height) zkit:min-w-[8rem] zkit:origin-(--zkit-reka-dropdown-menu-content-transform-origin) zkit:overflow-x-hidden zkit:overflow-y-auto zkit:rounded-md zkit:border zkit:p-1 zkit:shadow-md", a.class)
        }), {
          default: m(() => [
            O(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ql = /* @__PURE__ */ q({
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
    const t = e, a = me(t, "inset", "variant", "class"), r = Ie(a);
    return (n, o) => (v(), x(s(J$), P({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, s(r), {
      class: s(Y)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Jl = /* @__PURE__ */ q({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ie(e);
    return (a, r) => (v(), x(s(aB), P({ "data-slot": "dropdown-menu-trigger" }, s(t)), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eb = /* @__PURE__ */ Symbol.for("zenith:form-item");
function Jo() {
  const e = sn(Xk), t = sn(Eb);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { name: a } = e, r = t, n = {
    valid: r0(a),
    isDirty: a0(a),
    isTouched: t0(a),
    error: e0(a)
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
const ua = /* @__PURE__ */ q({
  __name: "FormControl",
  setup(e) {
    const { error: t, formItemId: a, formDescriptionId: r, formMessageId: n } = Jo();
    return (o, i) => (v(), x(s(yo), {
      id: s(a),
      "data-slot": "form-control",
      "aria-describedby": s(t) ? `${s(r)} ${s(n)}` : `${s(r)}`,
      "aria-invalid": !!s(t)
    }, {
      default: m(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), mM = ["id"], Pt = /* @__PURE__ */ q({
  __name: "FormDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { formDescriptionId: a } = Jo();
    return (r, n) => (v(), U("p", {
      id: s(a),
      "data-slot": "form-description",
      class: ye(s(Y)("zkit:text-muted-foreground zkit:text-sm", t.class))
    }, [
      O(r.$slots, "default")
    ], 10, mM));
  }
}), jt = /* @__PURE__ */ q({
  __name: "FormItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = Qe();
    return ns(Eb, a), (r, n) => (v(), U("div", {
      "data-slot": "form-item",
      class: ye(s(Y)("zkit:grid zkit:gap-2", t.class))
    }, [
      O(r.$slots, "default")
    ], 2));
  }
}), mn = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(nB), P({ "data-slot": "label" }, s(a), {
      class: s(Y)(
        "zkit:flex zkit:items-center zkit:gap-2 zkit:text-sm zkit:leading-none zkit:font-medium zkit:select-none zkit:group-data-[disabled=true]:pointer-events-none zkit:group-data-[disabled=true]:opacity-50 zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), It = /* @__PURE__ */ q({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { error: a, formItemId: r } = Jo();
    return (n, o) => (v(), x(s(mn), {
      "data-slot": "form-label",
      "data-error": !!s(a),
      class: ye(s(Y)(
        "zkit:data-[error=true]:text-destructive-foreground",
        t.class
      )),
      for: s(r)
    }, {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-error", "class", "for"]));
  }
}), Ft = /* @__PURE__ */ q({
  __name: "FormMessage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { name: a, formMessageId: r } = Jo();
    return (n, o) => (v(), x(s(Yk), {
      id: s(r),
      "data-slot": "form-message",
      as: "p",
      name: ze(s(a)),
      class: ye(s(Y)("zkit:text-destructive-foreground zkit:dark:text-destructive zkit:text-sm", t.class))
    }, null, 8, ["id", "name", "class"]));
  }
}), Tt = Hk, _a = /* @__PURE__ */ q({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = /* @__PURE__ */ Ze(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (n, o) => hr((v(), U("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => tt(r) ? r.value = i : null),
      "data-slot": "input",
      class: ye(s(Y)(
        "zkit:file:text-foreground zkit:placeholder:text-muted-foreground zkit:selection:bg-primary zkit:selection:text-primary-foreground zkit:dark:bg-input/30 zkit:border-input zkit:flex zkit:h-9 zkit:w-full zkit:min-w-0 zkit:rounded-md zkit:border zkit:bg-transparent zkit:px-3 zkit:py-1 zkit:text-base zkit:shadow-xs zkit:transition-[color,box-shadow] zkit:outline-none zkit:file:inline-flex zkit:file:h-7 zkit:file:border-0 zkit:file:bg-transparent zkit:file:text-sm zkit:file:font-medium zkit:disabled:pointer-events-none zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50 zkit:md:text-sm",
        "zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:focus-visible:ring-[3px]",
        "zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [Tf, s(r)]
    ]);
  }
}), $b = /* @__PURE__ */ q({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Ce(e, t);
    return (r, n) => (v(), x(s(M$), P({ "data-slot": "popover" }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bb = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(L$), null, {
      default: m(() => [
        _(s(V$), P({ "data-slot": "popover-content" }, { ...s(o), ...i.$attrs }, {
          class: s(Y)(
            "zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:z-50 zkit:w-72 zkit:rounded-md zkit:border zkit:p-4 zkit:shadow-md zkit:origin-(--zkit-reka-popover-content-transform-origin) zkit:outline-hidden",
            a.class
          )
        }), {
          default: m(() => [
            O(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Db = /* @__PURE__ */ q({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(W$), P({ "data-slot": "popover-trigger" }, t), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hM = /* @__PURE__ */ q({
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
    const a = Ce(e, t);
    return (r, n) => (v(), x(s(fB), P({ "data-slot": "select" }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vM = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(UB), null, {
      default: m(() => [
        _(s(OB), P({ "data-slot": "select-content" }, { ...s(o), ...i.$attrs }, {
          class: s(Y)(
            "zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:relative zkit:z-50 zkit:max-h-(--zkit-reka-select-content-available-height) zkit:min-w-[8rem] zkit:overflow-x-hidden zkit:overflow-y-auto zkit:rounded-md zkit:border zkit:shadow-md",
            e.position === "popper" && "zkit:data-[side=bottom]:translate-y-1 zkit:data-[side=left]:-translate-x-1 zkit:data-[side=right]:translate-x-1 zkit:data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: m(() => [
            O(i.$slots, "top"),
            _(s(xM)),
            _(s(t2), {
              class: ye(s(Y)("zkit:p-1", e.position === "popper" && "zkit:h-[var(--zkit-reka-select-trigger-height)] zkit:w-full zkit:min-w-[var(--zkit-reka-select-trigger-width)] zkit:scroll-my-1"))
            }, {
              default: m(() => [
                O(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            _(s(wM)),
            O(i.$slots, "bottom")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), gM = /* @__PURE__ */ q({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s($B), P({ "data-slot": "select-group" }, t), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bM = { class: "zkit:absolute zkit:right-2 zkit:flex zkit:size-3.5 zkit:items-center zkit:justify-center" }, Af = /* @__PURE__ */ q({
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
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(jB), P({ "data-slot": "select-item" }, s(r), {
      class: s(Y)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: m(() => [
        ee("span", bM, [
          _(s(FB), null, {
            default: m(() => [
              _(s(ru), { class: "zkit:size-4" })
            ]),
            _: 1
          })
        ]),
        _(s(NB), null, {
          default: m(() => [
            O(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kM = /* @__PURE__ */ q({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(RB), {
      "data-slot": "select-label",
      class: ye(s(Y)("zkit:px-2 zkit:py-1.5 zkit:text-sm zkit:font-medium", t.class))
    }, {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wM = /* @__PURE__ */ q({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(GB), P({ "data-slot": "select-scroll-down-button" }, s(r), {
      class: s(Y)("zkit:flex zkit:cursor-default zkit:items-center zkit:justify-center zkit:py-1", t.class)
    }), {
      default: m(() => [
        O(n.$slots, "default", {}, () => [
          _(s(qb), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xM = /* @__PURE__ */ q({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(YB), P({ "data-slot": "select-scroll-up-button" }, s(r), {
      class: s(Y)("zkit:flex zkit:cursor-default zkit:items-center zkit:justify-center zkit:py-1", t.class)
    }), {
      default: m(() => [
        O(n.$slots, "default", {}, () => [
          _(s(DD), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zM = /* @__PURE__ */ q({
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
    const t = e, a = me(t, "class", "size"), r = Ie(a);
    return (n, o) => (v(), x(s(QB), P({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, s(r), {
      class: s(Y)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-10 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: m(() => [
        O(n.$slots, "default"),
        _(s(DB), { "as-child": "" }, {
          default: m(() => [
            _(s(qb), { class: "zkit:size-4 zkit:opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), _M = /* @__PURE__ */ q({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(XB), P({ "data-slot": "select-value" }, t), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), SM = /* @__PURE__ */ q({
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
    return (r, n) => (v(), x(s(o2), P({ "data-slot": "separator-root" }, s(a), {
      class: s(Y)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), qM = /* @__PURE__ */ q({
  __name: "Tooltip",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Ce(e, t);
    return (r, n) => (v(), x(s(q2), P({ "data-slot": "tooltip" }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), OM = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(D2), null, {
      default: m(() => [
        _(s($2), P({ "data-slot": "tooltip-content" }, { ...s(o), ...i.$attrs }, {
          class: s(Y)("zkit:bg-primary zkit:text-primary-foreground zkit:animate-in zkit:fade-in-0 zkit:zoom-in-95 zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:z-50 zkit:w-fit zkit:rounded-md zkit:px-3 zkit:py-1.5 zkit:text-xs zkit:text-balance", a.class)
        }), {
          default: m(() => [
            O(i.$slots, "default"),
            _(s(z2), { class: "zkit:bg-primary zkit:fill-primary zkit:z-50 zkit:size-2.5 zkit:translate-y-[calc(-50%_-_2px)] zkit:rotate-45 zkit:rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), AM = /* @__PURE__ */ q({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), x(s(P2), P({ "data-slot": "tooltip-trigger" }, t), {
      default: m(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
let Xl = 1;
var CM = class {
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
    const { message: t, ...a } = e, r = typeof e.id == "number" || e.id && e.id?.length > 0 ? e.id : Xl++, n = this.toasts.find((i) => i.id === r), o = e.dismissible === void 0 ? !0 : e.dismissible;
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
    const i = r.then(async (u) => {
      if (o = ["resolve", u], Rr(u))
        n = !1, this.create({
          id: a,
          type: "default",
          message: u
        });
      else if ($M(u) && !u.ok) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(`HTTP error! status: ${u.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${u.status}`) : t.description, f = typeof d == "object" && !Rr(d) ? d : {
          message: d || "",
          id: a || ""
        };
        this.create({
          id: a,
          type: "error",
          description: c,
          ...f
        });
      } else if (u instanceof Error) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(u) : t.error, c = typeof t.description == "function" ? await t.description(u) : t.description, f = typeof d == "object" && !Rr(d) ? d : {
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
        const d = typeof t.success == "function" ? await t.success(u) : t.success, c = typeof t.description == "function" ? await t.description(u) : t.description, f = typeof d == "object" && !Rr(d) ? d : {
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
    }).catch(async (u) => {
      if (o = ["reject", u], t.error !== void 0) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(u) : t.error, c = typeof t.description == "function" ? await t.description(u) : t.description, f = typeof d == "object" && !Rr(d) ? d : {
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
    }), l = () => new Promise((u, d) => i.then(() => o[0] === "reject" ? d(o[1]) : u(o[1])).catch(d));
    return typeof a != "string" && typeof a != "number" ? { unwrap: l } : Object.assign(a, { unwrap: l });
  };
  custom = (e, t) => {
    const a = t?.id || Xl++, r = this.toasts.find((o) => o.id === a), n = t?.dismissible === void 0 ? !0 : t.dismissible;
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
const wt = new CM();
function EM(e, t) {
  const a = t?.id || Xl++;
  return wt.create({
    message: e,
    id: a,
    type: "default",
    ...t
  }), a;
}
const $M = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", BM = EM, DM = () => wt.toasts, MM = () => wt.getActiveToasts();
Object.assign(BM, {
  success: wt.success,
  info: wt.info,
  warning: wt.warning,
  error: wt.error,
  custom: wt.custom,
  message: wt.message,
  promise: wt.promise,
  dismiss: wt.dismiss,
  loading: wt.loading
}, {
  getHistory: DM,
  getToasts: MM
});
const PM = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(d2), P({ "data-slot": "switch" }, s(o), {
      class: s(Y)(
        "zkit:peer zkit:data-[state=checked]:bg-primary zkit:data-[state=unchecked]:bg-input zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:dark:data-[state=unchecked]:bg-input/80 zkit:inline-flex zkit:h-[1.15rem] zkit:w-8 zkit:shrink-0 zkit:items-center zkit:rounded-full zkit:border zkit:border-transparent zkit:shadow-xs zkit:transition-all zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
        a.class
      )
    }), {
      default: m(() => [
        _(s(f2), {
          "data-slot": "switch-thumb",
          class: ye(s(Y)("zkit:bg-background zkit:dark:data-[state=unchecked]:bg-foreground zkit:dark:data-[state=checked]:bg-primary-foreground zkit:pointer-events-none zkit:block zkit:size-4 zkit:rounded-full zkit:ring-0 zkit:transition-transform zkit:data-[state=checked]:translate-x-[calc(100%-2px)] zkit:data-[state=unchecked]:translate-x-0"))
        }, {
          default: m(() => [
            O(i.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mb = /* @__PURE__ */ q({
  __name: "Table",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    wrapperClass: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("div", {
      "data-slot": "table-container",
      class: ye(s(Y)("zkit:relative zkit:w-full zkit:overflow-auto", t.wrapperClass))
    }, [
      ee("table", {
        "data-slot": "table",
        class: ye(s(Y)("zkit:w-full zkit:caption-bottom zkit:text-sm", t.class))
      }, [
        O(a.$slots, "default")
      ], 2)
    ], 2));
  }
}), Pb = /* @__PURE__ */ q({
  __name: "TableBody",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("tbody", {
      "data-slot": "table-body",
      class: ye(s(Y)("zkit:[&_tr:last-child]:border-0", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), Ta = /* @__PURE__ */ q({
  __name: "TableCell",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("td", {
      "data-slot": "table-cell",
      class: ye(
        s(Y)(
          "zkit:p-2 zkit:align-middle zkit:whitespace-nowrap zkit:[&:has([role=checkbox])]:pr-0 zkit:[&>[role=checkbox]]:translate-y-[2px]",
          t.class
        )
      )
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), Na = /* @__PURE__ */ q({
  __name: "TableRow",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("tr", {
      "data-slot": "table-row",
      class: ye(s(Y)("zkit:hover:bg-muted/50 zkit:data-[state=selected]:bg-muted zkit:border-b zkit:transition-colors", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), ko = /* @__PURE__ */ q({
  __name: "TableHead",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("th", {
      "data-slot": "table-head",
      class: ye(s(Y)("zkit:text-muted-foreground zkit:h-10 zkit:px-2 zkit:text-left zkit:align-middle zkit:font-medium zkit:whitespace-nowrap ", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), jb = /* @__PURE__ */ q({
  __name: "TableHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (a, r) => (v(), U("thead", {
      "data-slot": "table-header",
      class: ye(s(Y)("zkit:[&_tr]:border-b", t.class))
    }, [
      O(a.$slots, "default")
    ], 2));
  }
}), iI = /* @__PURE__ */ q({
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
    const a = e, r = t, n = me(a, "class"), o = Ce(n, r);
    return (i, l) => (v(), x(s(m2), P({ "data-slot": "tabs" }, s(o), {
      class: s(Y)("zkit:flex zkit:flex-col zkit:gap-2", a.class)
    }), {
      default: m(() => [
        O(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lI = /* @__PURE__ */ q({
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
    return (r, n) => (v(), x(s(v2), P({
      "data-slot": "tabs-content",
      class: s(Y)("zkit:flex-1 zkit:outline-none", t.class)
    }, s(a)), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sI = /* @__PURE__ */ q({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class");
    return (r, n) => (v(), x(s(b2), P({ "data-slot": "tabs-list" }, s(a), {
      class: s(Y)(
        "zkit:bg-muted zkit:text-muted-foreground zkit:inline-flex zkit:h-9 zkit:w-fit zkit:items-center zkit:justify-center zkit:rounded-lg zkit:p-[3px]",
        t.class
      )
    }), {
      default: m(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uI = /* @__PURE__ */ q({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(w2), P({ "data-slot": "tabs-trigger" }, s(r), {
      class: s(Y)(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ib = /* @__PURE__ */ q({
  __name: "Textarea",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = /* @__PURE__ */ Ze(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (n, o) => hr((v(), U("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => tt(r) ? r.value = i : null),
      "data-slot": "textarea",
      class: ye(s(Y)("zkit:border-input zkit:placeholder:text-muted-foreground zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:dark:bg-input/30 zkit:flex zkit:field-sizing-content zkit:min-h-16 zkit:w-full zkit:rounded-md zkit:border zkit:bg-transparent zkit:px-3 zkit:py-2 zkit:text-base zkit:shadow-xs zkit:transition-[color,box-shadow] zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50 zkit:md:text-sm", a.class))
    }, null, 2)), [
      [Tf, s(r)]
    ]);
  }
}), uu = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ClientOnly",
  setup(e) {
    const t = F(!1);
    return qe(() => {
      t.value = !0;
    }), (a, r) => t.value ? O(a.$slots, "default", {}, void 0, void 0, 0) : O(a.$slots, "fallback", {}, void 0, void 0, 1);
  }
}), jM = { class: "zkit:flex" }, IM = {
  key: 1,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, Fb = /* @__PURE__ */ q({
  __name: "TextField",
  props: /* @__PURE__ */ Le({
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
    return (r, n) => (v(), U("div", null, [
      e.label && e.variant !== "horizontal" ? (v(), x(mn, {
        key: 0,
        class: ye(["zkit:mb-4", e.labelClass])
      }, {
        default: m(() => [
          J(V(e.label), 1)
        ]),
        _: 1
      }, 8, ["class"])) : Q("", !0),
      ee("div", jM, [
        e.label && e.variant === "horizontal" ? (v(), x(mn, {
          key: 0,
          class: ye(["zkit:h-10 zkit:flex zkit:items-center zkit:border zkit:px-2 zkit:rounded-l zkit:bg-secondary zkit:text-xs", e.labelClass])
        }, {
          default: m(() => [
            J(V(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Q("", !0),
        O(r.$slots, "prepend"),
        _(s(_a), {
          id: e.id,
          "model-value": s(t),
          type: e.type,
          placeholder: e.placeholder,
          disabled: e.disabled,
          autocomplete: e.autocomplete,
          readonly: e.readonly,
          autofocus: e.autofocus,
          class: ye([[e.label && e.variant === "horizontal" ? "zkit:rounded-l-none zkit:flex-1" : "", e.inputClass], "zkit:h-10"]),
          "onUpdate:modelValue": n[0] || (n[0] = (o) => !s(a).lazy && (t.value = o)),
          onChange: n[1] || (n[1] = (o) => s(a).lazy && (t.value = o.target.value))
        }, null, 8, ["id", "model-value", "type", "placeholder", "disabled", "autocomplete", "readonly", "autofocus", "class"]),
        O(r.$slots, "append")
      ]),
      e.hint ? (v(), U("p", IM, V(e.hint), 1)) : Q("", !0)
    ]));
  }
}), FM = { class: "zkit:space-y-4" }, TM = { class: "zkit:relative zkit:w-full zkit:h-48 zkit:rounded-md zkit:overflow-hidden zkit:cursor-crosshair" }, NM = { class: "zkit:space-y-2" }, VM = { class: "zkit:relative zkit:h-3 zkit:rounded-md zkit:overflow-hidden zkit:cursor-pointer" }, RM = /* @__PURE__ */ q({
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
    const t = pe(e, "modelValue"), { hsl: a } = rp(t);
    function r(f, y, p) {
      return Math.ceil(Math.min(p, Math.max(y, f)));
    }
    const n = M(() => a.value?.h || 0), o = M(() => a.value?.s || 100), i = M(() => a.value?.l || 50), l = M(() => {
      const f = o.value / 100, y = i.value / 100, p = y + f * Math.min(y, 1 - y);
      return p === 0 ? 0 : 2 * (1 - y / p) * 100;
    }), u = M(() => {
      const f = o.value / 100, y = i.value / 100;
      return (y + f * Math.min(y, 1 - y)) * 100;
    });
    function d(f) {
      const y = f.currentTarget.getBoundingClientRect(), p = (f.clientX - y.left) / y.width, g = (f.clientY - y.top) / y.height, h = p, b = 1 - g, w = b * (1 - h / 2), k = w === 0 || w === 1 ? 0 : (b - w) / Math.min(w, 1 - w);
      a.value = {
        h: a.value?.h || 0,
        s: r(k * 100, 0, 100),
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
    return (f, y) => (v(), U("div", FM, [
      ee("div", TM, [
        ee("div", {
          class: "zkit:absolute zkit:inset-0",
          style: lt({
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
            style: lt({
              left: `${l.value}%`,
              top: `${100 - u.value}%`
            })
          }, null, 4)
        ])
      ]),
      ee("div", NM, [
        y[0] || (y[0] = ee("label", { class: "zkit:text-sm zkit:font-medium zkit:mb-2 zkit:block" }, "Hue", -1)),
        ee("div", VM, [
          ee("div", {
            class: "zkit:absolute zkit:inset-0",
            style: { background: "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)" },
            onClick: c
          }, [
            ee("div", {
              class: "zkit:absolute zkit:w-1 zkit:h-full zkit:bg-white zkit:shadow-lg zkit:-translate-x-1/2 zkit:pointer-events-none",
              style: lt({ left: `${n.value / 360 * 100}%` })
            }, null, 4)
          ])
        ])
      ])
    ]));
  }
}), LM = { class: "zkit:space-y-4" }, UM = { class: "zkit:space-y-2" }, WM = { class: "zkit:flex zkit:items-center zkit:justify-between" }, KM = ["onClick"], GM = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2 zkit:mt-2"
}, HM = { class: "zkit:text-xs" }, YM = { class: "zkit:space-y-2" }, ZM = { class: "zkit:grid zkit:grid-cols-10 zkit:gap-2" }, QM = ["onClick"], Tb = [
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
], JM = /* @__PURE__ */ q({
  __name: "ColorPicker",
  props: /* @__PURE__ */ Le({
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
      default: () => Tb
    }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = F(!1), r = pe(e, "modelValue"), n = Cr(r), { hex: o, rgb: i, rgba: l, hsl: u, oklch: d } = rp(r), c = M({
      get() {
        return n.value === "hex" ? o.value : n.value === "rgba" && l.value ? `rgba(${l.value.r}, ${l.value.g}, ${l.value.b}, ${l.value.a})` : n.value === "rgb" && i.value ? `rgb(${i.value.r}, ${i.value.g}, ${i.value.b})` : n.value === "hsl" && u.value ? `hsl(${u.value.h}, ${u.value.s}%, ${u.value.l}%)` : n.value === "oklch" && d.value ? `oklch(${d.value.l} ${d.value.c} ${d.value.h})` : "";
      },
      set(y) {
        y && (r.value = y);
      }
    });
    ve(n, (y) => {
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
      if (y === "hsl" && u.value) {
        c.value = `hsl(${u.value.h}, ${u.value.s}%, ${u.value.l}%)`;
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
    return (y, p) => (v(), x(s($b), {
      open: a.value,
      "onUpdate:open": p[4] || (p[4] = (g) => a.value = g)
    }, {
      default: m(() => [
        _(s(Db), { "as-child": "" }, {
          default: m(() => [
            O(y.$slots, "activator", {
              color: r.value,
              open: a.value
            }, () => [
              _(Fb, {
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
                    style: lt({ backgroundColor: r.value })
                  }, null, 4)
                ]),
                _: 1
              }, 8, ["modelValue", "label", "variant", "placeholder", "readonly", "class"])
            ])
          ]),
          _: 3
        }),
        _(s(Bb), {
          class: "zkit:w-72 zkit:p-4",
          align: "start"
        }, {
          default: m(() => [
            ee("div", LM, [
              _(RM, {
                modelValue: r.value,
                "onUpdate:modelValue": p[1] || (p[1] = (g) => r.value = g)
              }, null, 8, ["modelValue"]),
              ee("div", UM, [
                ee("div", WM, [
                  (v(), U(xe, null, je(["hex", "rgb", "rgba", "hsl", "oklch"], (g) => ee("button", {
                    key: g,
                    type: "button",
                    class: ye(["zkit:text-xs zkit:px-2 zkit:py-1 zkit:rounded zkit:font-medium zkit:uppercase", s(n) === g ? "zkit:bg-primary zkit:text-primary-foreground" : "zkit:bg-secondary zkit:hover:bg-secondary/80"]),
                    onClick: (h) => n.value = g
                  }, V(g), 11, KM)), 64))
                ]),
                _(s(_a), {
                  "model-value": c.value,
                  class: ye([{ "zkit:uppercase": s(n) === "hex" }, "zkit:font-mono"]),
                  placeholder: s(n) === "hex" ? "#000000" : s(n) === "rgb" ? "rgb(0, 0, 0)" : s(n) === "rgba" ? "rgba(0, 0, 0, 1)" : s(n) === "hsl" ? "hsl(0, 0%, 0%)" : "oklch(0 0 0)",
                  onChange: p[2] || (p[2] = (g) => {
                    c.value = g.target.value;
                  })
                }, null, 8, ["model-value", "class", "placeholder"]),
                s(n) === "rgba" && s(l) && s(l) ? (v(), U("div", GM, [
                  ee("label", HM, V(y.$t("Opacity")), 1),
                  _(s(_a), {
                    type: "number",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    "model-value": s(l).a,
                    class: "zkit:w-16 zkit:font-mono",
                    onChange: p[3] || (p[3] = (g) => f(g.target.value))
                  }, null, 8, ["model-value"])
                ])) : Q("", !0)
              ]),
              ee("div", YM, [
                p[5] || (p[5] = ee("label", { class: "zkit:text-sm zkit:font-medium zkit:mb-2 zkit:block" }, "Presets", -1)),
                ee("div", ZM, [
                  (v(!0), U(xe, null, je(e.presets, (g) => (v(), U("button", {
                    key: g,
                    type: "button",
                    class: "zkit:w-6 zkit:h-6 zkit:rounded zkit:border zkit:border-border zkit:hover:scale-110 zkit:transition-transform",
                    style: lt({ backgroundColor: g }),
                    onClick: () => {
                      r.value = g;
                    }
                  }, null, 12, QM))), 128))
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
}), XM = ["icon"], Re = /* @__PURE__ */ q({
  __name: "Icon",
  props: {
    name: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, a = M(() => t.name?.includes(":") ? t.name : `lucide:${eS(t.name)}`);
    return (r, n) => (v(), U("iconify-icon", {
      icon: a.value,
      class: "zkit:flex"
    }, null, 8, XM));
  }
}), e3 = {
  key: 1,
  class: "zkit:text-sm"
}, t3 = {
  key: 1,
  class: "zkit:text-sm"
}, rt = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ZButton",
  props: /* @__PURE__ */ Le({
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
    },
    tooltip: {
      type: String,
      default: null
    },
    tooltipSide: {
      type: String,
      default: "top"
    }
  }, {
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ Le(["click"], ["update:loading"]),
  setup(e, { emit: t }) {
    const a = jk("RouterLink"), r = e, n = pe(e, "loading"), o = t;
    function i(u) {
      r.href || o("click", u);
    }
    const l = M(() => r.to ? a : r.href ? "a" : "button");
    return (u, d) => e.tooltip ? (v(), x(s(qM), { key: 0 }, {
      default: m(() => [
        _(s(AM), { "as-child": "" }, {
          default: m(() => [
            _(ot, P(u.$attrs, {
              disabled: e.disabled || n.value,
              as: l.value,
              href: e.to ? e.to : e.href,
              to: e.to,
              type: e.type,
              onClick: i
            }), {
              default: m(() => [
                n.value ? (v(), x(Re, {
                  key: 0,
                  name: "Loader2",
                  class: "zkit:animate-spin"
                })) : e.label ? (v(), U("span", e3, V(e.label), 1)) : O(u.$slots, "default", {}, void 0, void 0, 2)
              ]),
              _: 3
            }, 16, ["disabled", "as", "href", "to", "type"])
          ]),
          _: 3
        }),
        _(s(OM), { side: e.tooltipSide }, {
          default: m(() => [
            J(V(e.tooltip), 1)
          ]),
          _: 1
        }, 8, ["side"])
      ]),
      _: 3
    })) : (v(), x(ot, P({ key: 1 }, u.$attrs, {
      disabled: e.disabled || n.value,
      as: l.value,
      href: e.to ? e.to : e.href,
      to: e.to,
      type: e.type,
      onClick: i
    }), {
      default: m(() => [
        n.value ? (v(), x(Re, {
          key: 0,
          name: "Loader2",
          class: "zkit:animate-spin"
        })) : e.label ? (v(), U("span", t3, V(e.label), 1)) : O(u.$slots, "default", {}, void 0, void 0, 2)
      ]),
      _: 3
    }, 16, ["disabled", "as", "href", "to", "type"]));
  }
});
class a3 {
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
dt.proxy(a3);
const r3 = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(Tt), { name: e.name }, {
      default: m(({ componentField: r }) => [
        _(s(jt), null, {
          default: m(() => [
            _(s(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(s(ua), null, {
              default: m(() => [
                _(Ib, P({
                  class: "zkit:min-h-20",
                  rows: e.rows
                }, { ...t.$attrs, ...r }), null, 16, ["rows"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(s(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), n3 = dt.proxy(xn), o3 = { class: "zkit:flex" }, i3 = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2"
}, l3 = { class: "zkit:text-sm" }, s3 = {
  key: 1,
  class: "zkit:flex zkit:flex-col"
}, u3 = { class: "zkit:border-b zkit:p-2" }, d3 = {
  key: 1,
  class: "zkit:flex zkit:flex-col"
}, c3 = {
  key: 0,
  class: "zkit:text-xs zkit:text-muted-foreground zkit:white-space-normal zkit:break-words zkit:mt-0.5"
}, f3 = { class: "zkit:flex zkit:space-x-2 zkit:p-2 zkit:border-t zkit:justify-end" }, Nb = /* @__PURE__ */ q({
  __name: "ZSelect",
  props: /* @__PURE__ */ Le({
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
    const t = e, a = pe(e, "modelValue"), r = F(""), n = M(() => i.value.map((b) => ({
      label: u(b),
      value: d(b),
      description: c(b),
      color: f(b)
    }))), o = M(() => {
      const b = r.value.trim().toLowerCase();
      return b ? n.value.filter((w) => {
        const k = String(w.label || "").toLowerCase(), S = String(w.description || "").toLowerCase();
        return k.includes(b) || S.includes(b);
      }) : n.value;
    }), i = pe(e, "options"), l = M(() => t.multiple ? n.value.filter((b) => a.value?.includes(b.value)) : n.value.find((b) => b.value === a.value) || null);
    function u(b) {
      return it(b, t.labelKey) || b;
    }
    function d(b) {
      return it(b, t.valueKey) || b;
    }
    function c(b) {
      return t.descriptionKey ? it(b, t.descriptionKey) : null;
    }
    function f(b) {
      return t.colorKey ? it(b, t.colorKey) : null;
    }
    function y(b) {
      return t.fetchKey ? it(b, t.fetchKey) : b;
    }
    async function p() {
      if (!t.fetch) return;
      const [b, w] = await At.try(t.fetch, t.fetchOptions);
      if (b) {
        n3.error("Select fetch error:", b);
        return;
      }
      i.value = y(w);
    }
    function g() {
      a.value = o.value.map((b) => b.value);
    }
    function h() {
      a.value = [];
    }
    return qe(() => {
      !i.value.length && t.fetch && p();
    }), ve(() => t.showSearchInput, (b) => {
      b || (r.value = "");
    }), (b, w) => (v(), U("div", null, [
      e.label && e.variant !== "horizontal" ? (v(), x(mn, {
        key: 0,
        class: ye(["zkit:text-sm zkit:font-medium zkit:leading-none zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-70 zkit:block zkit:mb-4", e.labelClass])
      }, {
        default: m(() => [
          J(V(e.label), 1)
        ]),
        _: 1
      }, 8, ["class"])) : Q("", !0),
      ee("div", o3, [
        e.variant === "horizontal" ? (v(), x(mn, {
          key: 0,
          class: ye(["zkit:h-10 zkit:flex zkit:items-center zkit:border zkit:px-2 zkit:rounded-l zkit:bg-secondary zkit:text-xs", e.labelClass])
        }, {
          default: m(() => [
            J(V(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Q("", !0),
        _(s(hM), {
          id: e.id,
          modelValue: a.value,
          "onUpdate:modelValue": w[5] || (w[5] = (k) => a.value = k),
          disabled: e.disabled,
          multiple: e.multiple
        }, {
          default: m(() => [
            _(s(zM), {
              class: ye(s(Y)("!h-10", e.variant === "horizontal" ? "rounded-l-none flex-1" : "w-full", b.$attrs.class))
            }, {
              default: m(() => [
                e.multiple && a.value?.length > 2 ? (v(), U("div", i3, [
                  ee("span", l3, V(a.value.length) + " selected", 1)
                ])) : l.value && !Array.isArray(l.value) ? (v(), U("div", s3, [
                  ee("span", null, V(l.value.label), 1)
                ])) : (v(), x(s(_M), {
                  key: 2,
                  placeholder: e.placeholder
                }, null, 8, ["placeholder"]))
              ]),
              _: 1
            }, 8, ["class"]),
            _(s(vM), { class: "zkit:max-h-92" }, If({
              default: m(() => [
                _(s(gM), null, {
                  default: m(() => [
                    o.value.length ? Q("", !0) : (v(), x(s(kM), { key: 0 }, {
                      default: m(() => [
                        J(V(b.$t("No items")), 1)
                      ]),
                      _: 1
                    })),
                    e.clearable && !e.multiple ? (v(), x(s(Af), {
                      key: 1,
                      value: null,
                      onClick: w[4] || (w[4] = (k) => a.value = e.multiple ? [] : null)
                    }, {
                      default: m(() => [
                        J(V(b.$t("None")), 1)
                      ]),
                      _: 1
                    })) : Q("", !0),
                    (v(!0), U(xe, null, je(o.value, (k) => (v(), x(s(Af), {
                      key: k.value,
                      value: k.value
                    }, {
                      default: m(() => [
                        e.badge ? (v(), U("div", {
                          key: 0,
                          class: "zkit:px-2 zkit:py-1 zkit:rounded-md zkit:text-xs zkit:font-medium",
                          style: lt({ backgroundColor: k.color || "#3b82f6", color: "white" })
                        }, V(k.label), 5)) : Q("", !0),
                        e.badge ? Q("", !0) : (v(), U("div", d3, [
                          ee("span", null, V(k.label), 1),
                          e.descriptionKey ? (v(), U("span", c3, V(k.description), 1)) : Q("", !0)
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
                  ee("div", u3, [
                    _(s(_a), {
                      modelValue: r.value,
                      "onUpdate:modelValue": w[0] || (w[0] = (k) => r.value = k),
                      placeholder: b.$t("Search"),
                      class: "zkit:h-9",
                      onKeydown: [
                        w[1] || (w[1] = mt(Me(() => {
                        }, ["stop"]), ["enter"])),
                        w[2] || (w[2] = Me(() => {
                        }, ["stop"]))
                      ],
                      onClick: w[3] || (w[3] = Me(() => {
                      }, ["stop"]))
                    }, null, 8, ["modelValue", "placeholder"])
                  ])
                ]),
                key: "0"
              } : void 0,
              e.multiple ? {
                name: "bottom",
                fn: m(() => [
                  ee("div", f3, [
                    _(rt, {
                      variant: "outline",
                      size: "sm",
                      disabled: i.value.length === a.value?.length,
                      onClick: g
                    }, {
                      default: m(() => [
                        J(V(b.$t("All")), 1)
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
                        J(V(b.$t("Clear")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])) : Q("", !0)
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
}), p3 = /* @__PURE__ */ q({
  __name: "FormSelect",
  props: /* @__PURE__ */ Le({
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
    return (a, r) => (v(), x(s(Tt), {
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
            _(Nb, P({
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
            })) : Q("", !0),
            _(Ft)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name", "disabled", "readonly"]));
  }
}), y3 = /* @__PURE__ */ q({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, a = me(t, "class"), r = Ie(a);
    return (n, o) => (v(), x(s(dE), P({ "data-slot": "combobox-trigger" }, s(r), {
      class: s(Y)("", t.class),
      tabindex: "0"
    }), {
      default: m(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m3 = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2 zkit:text-left"
}, h3 = {
  key: 0,
  class: "zkit:flex-shrink-0"
}, v3 = { class: "zkit:flex zkit:flex-col zkit:items-start zkit:flex-1" }, g3 = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground zkit:white-space-normal zkit:break-words zkit:truncate zkit:max-w-sm"
}, b3 = { key: 1 }, k3 = { class: "zkit:ml-2 zkit:flex zkit:items-center zkit:space-x-2" }, w3 = { class: "zkit:relative zkit:w-full zkit:items-center" }, x3 = {
  key: 0,
  class: "zkit:flex-shrink-0 zkit:mr-2"
}, z3 = { class: "zkit:flex zkit:flex-col zkit:items-start zkit:flex-1" }, _3 = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, S3 = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "FormAutocomplete",
  props: /* @__PURE__ */ Le({
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
    const t = e, { setValue: a, value: r } = Jk(t.name), n = pe(e, "selectedObject"), o = pe(e, "options"), i = pe(e, "loading"), l = pe(e, "search"), u = M(() => o.value.map((k) => t.serialize(k)).map((k) => ({
      label: f(k),
      subtitle: y(k),
      avatar: p(k),
      value: c(k),
      initials: g(k)
    }))), d = M(() => {
      if (!n.value)
        return null;
      const k = t.serialize(n.value);
      return {
        label: f(k),
        subtitle: y(k),
        avatar: p(k),
        value: c(k),
        initials: g(k)
      };
    });
    function c(k) {
      return t.valueKey ? typeof t.valueKey == "function" ? t.valueKey(k) : it(k, t.valueKey, k) : k;
    }
    function f(k) {
      return t.labelKey ? typeof t.labelKey == "function" ? t.labelKey(k) : it(k, t.labelKey, k) : null;
    }
    function y(k) {
      return t.subtitleKey ? typeof t.subtitleKey == "function" ? t.subtitleKey(k) : it(k, t.subtitleKey, null) : null;
    }
    function p(k) {
      return t.avatarKey ? typeof t.avatarKey == "function" ? t.avatarKey(k) : it(k, t.avatarKey, null) : null;
    }
    function g(k) {
      const S = f(k);
      return S ? String(S).charAt(0).toUpperCase() : "A";
    }
    function h(k) {
      if (!k) {
        n.value = null, a(null);
        return;
      }
      const S = o.value.map((z) => t.serialize(z)).find((z) => c(z) === k.value);
      n.value = S, a(S ? c(S) : null);
    }
    async function b() {
      if (!t.fetchOption || !r.value)
        return;
      i.value = !0;
      const [k, S] = await Gt(() => typeof t.fetchOption == "string" ? At.get(t.fetchOption.replace(":value", r.value), { method: "GET" }) : t.fetchOption(r.value));
      if (k) {
        console.error("Failed to load selected option:", k), i.value = !1;
        return;
      }
      n.value = t.serialize(S), setTimeout(() => {
        i.value = !1;
      }, 500);
    }
    async function w() {
      i.value = !0, await b();
      const k = {
        ...t.fetchQuery,
        search: l.value
      }, [S, z] = await At.try(t.fetch, {
        method: "GET",
        query: k
      });
      if (S) {
        console.error("Failed to load options:", S), o.value = [], i.value = !1;
        return;
      }
      const $ = z?.items || z;
      o.value = $.map((A) => t.serialize(A)), setTimeout(() => {
        i.value = !1;
      }, 500);
    }
    if (t.fetch && Jf(l, w, {
      immediate: !0,
      debounce: 1e3
    }), t.initialOption && (n.value = t.initialOption), !t.fetch && !t.initialOption && r.value) {
      const k = u.value.find((S) => S.value === r.value);
      k && h(k);
    }
    return (k, S) => (v(), x(s(Tt), {
      name: t.name
    }, {
      default: m(() => [
        _(s(jt), { class: "zkit:flex zkit:flex-col" }, {
          default: m(() => [
            e.label ? (v(), x(s(It), { key: 0 }, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(oM), {
              "ignore-filter": !!e.fetch,
              disabled: e.disabled,
              by: e.valueKey
            }, {
              default: m(() => [
                _(s(iM), { "as-child": "" }, {
                  default: m(() => [
                    _(y3, { "as-child": "" }, {
                      default: m(() => [
                        _(s(ot), {
                          variant: "outline",
                          class: "zkit:justify-between zkit:w-full zkit:h-auto zkit:min-h-10",
                          disabled: e.disabled
                        }, {
                          default: m(() => [
                            d.value ? (v(), U("div", m3, [
                              e.avatarKey ? (v(), U("div", h3, [
                                O(k.$slots, "avatar", { option: d.value }, () => [
                                  _(s(wf), { class: "zkit:size-6" }, {
                                    default: m(() => [
                                      d.value.avatar ? (v(), x(zf, {
                                        key: 0,
                                        src: d.value.avatar,
                                        alt: d.value.label
                                      }, null, 8, ["src", "alt"])) : Q("", !0),
                                      _(xf, null, {
                                        default: m(() => [
                                          J(V(d.value.initials), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])) : Q("", !0),
                              ee("div", v3, [
                                O(k.$slots, "label", { option: d.value }, () => [
                                  J(V(d.value.label), 1)
                                ]),
                                e.subtitleKey ? (v(), U("div", g3, [
                                  O(k.$slots, "subtitle", { option: n.value }, () => [
                                    J(V(d.value.subtitle || "-"), 1)
                                  ])
                                ])) : Q("", !0)
                              ])
                            ])) : (v(), U("div", b3, V(e.placeholder), 1)),
                            ee("div", k3, [
                              i.value ? (v(), x(Re, {
                                key: 0,
                                name: "Loader2",
                                class: "zkit:animate-spin"
                              })) : Q("", !0),
                              _(s(PD), { class: "zkit:size-4 zkit:shrink-0 zkit:opacity-50" })
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
                _(s(fM), P({
                  align: "start",
                  class: "zkit:w-md"
                }, e.listAttrs), {
                  default: m(() => [
                    ee("div", w3, [
                      _(s(dM), {
                        modelValue: l.value,
                        "onUpdate:modelValue": S[0] || (S[0] = (z) => l.value = z),
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    _(s(lM), { class: "zkit:px-6" }, {
                      default: m(() => [
                        J(V(k.$t("No results")), 1)
                      ]),
                      _: 1
                    }),
                    _(s(sM), { class: "zkit:max-h-60 zkit:overflow-y-auto" }, {
                      default: m(() => [
                        e.clearable ? (v(), U(xe, { key: 0 }, [
                          _(s(Of), {
                            value: null,
                            onClick: S[1] || (S[1] = (z) => h(null))
                          }, {
                            default: m(() => [
                              J(V(k.$t("Clear")), 1)
                            ]),
                            _: 1
                          }),
                          _(SM)
                        ], 64)) : Q("", !0),
                        (v(!0), U(xe, null, je(u.value, (z) => (v(), x(s(Of), {
                          key: z.value,
                          value: z.value,
                          onClick: ($) => h(z)
                        }, {
                          default: m(() => [
                            e.avatarKey ? (v(), U("div", x3, [
                              O(k.$slots, "avatar", { option: z }, () => [
                                _(s(wf), { class: "zkit:size-6" }, {
                                  default: m(() => [
                                    z.avatar ? (v(), x(zf, {
                                      key: 0,
                                      src: z.avatar,
                                      alt: z.label
                                    }, null, 8, ["src", "alt"])) : Q("", !0),
                                    _(xf, null, {
                                      default: m(() => [
                                        J(V(z.initials), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])) : Q("", !0),
                            ee("div", z3, [
                              O(k.$slots, "label", { option: z }, () => [
                                J(V(z.label), 1)
                              ]),
                              e.subtitleKey ? (v(), U("div", _3, [
                                O(k.$slots, "subtitle", { option: z }, () => [
                                  J(V(z.subtitle || "-"), 1)
                                ])
                              ])) : Q("", !0)
                            ]),
                            _(s(cM), null, {
                              default: m(() => [
                                _(s(ru), {
                                  class: ye(s(Y)("zkit:ml-auto zkit:h-4 zkit:w-4"))
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
            e.hint ? (v(), x(s(Pt), { key: 1 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), q3 = { class: "zkit:space-y-2" }, O3 = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ value: r, handleChange: n }) => [
        _(s(jt), { class: "zkit:rounded-lg zkit:border zkit:p-4 zkit:flex zkit:items-center zkit:justify-between zkit:gap-x-4" }, {
          default: m(() => [
            ee("div", q3, [
              _(s(It), null, {
                default: m(() => [
                  J(V(e.label), 1)
                ]),
                _: 1
              }),
              e.hint ? (v(), x(s(Pt), { key: 0 }, {
                default: m(() => [
                  J(V(e.hint), 1)
                ]),
                _: 1
              })) : Q("", !0),
              _(s(Ft))
            ]),
            _(s(ua), null, {
              default: m(() => [
                _(PM, {
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
}), A3 = ["src", "alt"], C3 = ["src", "alt"], E3 = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(nu), null, {
      default: m(() => [
        _(s(su), { "as-child": "" }, {
          default: m(() => [
            ee("img", P({
              src: e.src,
              alt: e.alt
            }, t.$attrs), null, 16, A3)
          ]),
          _: 1
        }),
        _(s(ou), {
          class: "zkit:sm:max-w-auto zkit:w-auto zkit:p-0 zkit:h-auto zkit:bg-transparent zkit:border-0 zkit:shadow-none zkit:focus:outline-none",
          "hide-close": ""
        }, {
          default: m(() => [
            _(lu, { class: "zkit:hidden" }, {
              default: m(() => [
                J(V(e.alt || t.$t("Image preview")), 1)
              ]),
              _: 1
            }),
            _(iu, { class: "zkit:hidden" }, {
              default: m(() => [
                J(V(e.alt || t.$t("Image preview")), 1)
              ]),
              _: 1
            }),
            ee("img", {
              src: e.src,
              alt: e.alt,
              class: "zkit:block zkit:h-[100dvw] zkit:max-h-[80dvh] zkit:rounded-lg zkit:object-contain"
            }, null, 8, C3)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), $3 = At;
function B3(e) {
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
function D3(e) {
  return new Promise((t, a) => {
    const r = new FileReader();
    r.onload = (n) => {
      n.target?.result instanceof ArrayBuffer ? t(new Uint8Array(n.target.result)) : a(new Error("Failed to read file as ArrayBuffer"));
    }, r.onerror = () => {
      a(r.error);
    }, r.readAsArrayBuffer(e);
  });
}
async function M3(e) {
  const t = new FormData();
  return t.append("file", e.file), e.directory && t.append("directory", e.directory), $3.post(`/api/drives/${e.driveId}/upload`, {
    body: t,
    query: { directory: e.directory }
  });
}
const P3 = {
  pick: B3,
  upload: M3,
  toUint8Array: D3
};
class Vb {
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
let du = class extends Vb {
};
class Xo extends du {
  constructor(t, a) {
    if (!Array.isArray(a)) throw new Error(`"${t}" operator expects to receive an array of conditions`);
    super(t, a);
  }
}
const Bn = "__itself__";
let ei = class extends Vb {
  constructor(e, t, a) {
    super(e, a), this.field = t;
  }
};
const Rb = new du("__null__", null), es = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
function j3(e, t) {
  return t instanceof Xo && t.operator === e;
}
function Lb(e, t) {
  return t.length === 1 ? t[0] : new Xo(e, (function a(r, n, o) {
    const i = o || [];
    for (let l = 0, u = n.length; l < u; l++) {
      const d = n[l];
      j3(r, d) ? a(r, d.value, i) : i.push(d);
    }
    return i;
  })(e, t));
}
const I3 = (e) => e, Ub = () => /* @__PURE__ */ Object.create(null), Wb = Object.defineProperty(Ub(), "__@type@__", { value: "ignore value" });
function F3(e, t, a = !1) {
  if (!e || e && e.constructor !== Object) return !1;
  for (const r in e)
    if (es(e, r) && es(t, r) && (!a || e[r] !== Wb)) return !0;
  return !1;
}
function T3(e) {
  const t = [];
  for (const a in e) es(e, a) && e[a] !== Wb && t.push(a);
  return t;
}
function pl(e, t) {
  t !== Rb && e.push(t);
}
const Kb = (e) => Lb("and", e), Gb = { compound(e, t, a) {
  const r = (Array.isArray(t) ? t : [t]).map((n) => a.parse(n));
  return new Xo(e.name, r);
}, field: (e, t, a) => new ei(e.name, a.field, t), document: (e, t) => new du(e.name, t) };
let N3 = class {
  constructor(e, t = Ub()) {
    this.o = void 0, this.s = void 0, this.i = void 0, this.u = void 0, this.h = void 0, this.parse = this.parse.bind(this), this.u = { operatorToConditionName: t.operatorToConditionName || I3, defaultOperatorName: t.defaultOperatorName || "eq", mergeFinalConditions: t.mergeFinalConditions || Kb }, this.o = Object.keys(e).reduce((a, r) => (a[r] = Object.assign({ name: this.u.operatorToConditionName(r) }, e[r]), a), {}), this.s = Object.assign({}, t.fieldContext, { field: "", query: {}, parse: this.parse, hasOperators: (a) => F3(a, this.o, t.useIgnoreValue) }), this.i = Object.assign({}, t.documentContext, { parse: this.parse, query: {} }), this.h = t.useIgnoreValue ? T3 : Object.keys;
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
    return typeof e.validate == "function" && e.validate(e, t), (e.parse || Gb[e.type])(e, t, a);
  }
  parseFieldOperators(e, t) {
    const a = [], r = this.h(t);
    for (let n = 0, o = r.length; n < o; n++) {
      const i = r[n];
      if (!this.o[i]) throw new Error(`Field query for "${e}" may contain only operators or a plain object as a value`);
      pl(a, this.parseField(e, i, t[i], t));
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
        pl(t, this.parseInstruction(l, i, this.i));
      } else this.s.hasOperators(i) ? t.push(...this.parseFieldOperators(o, i)) : pl(t, this.parseField(o, this.u.defaultOperatorName, i, e));
    }
    return this.u.mergeFinalConditions(t);
  }
};
function yl(e, t) {
  const a = e[t];
  if (typeof a != "function") throw new Error(`Unable to interpret "${t}" condition. Did you forget to register interpreter for it?`);
  return a;
}
function V3(e) {
  return e.operator;
}
function R3(e, t) {
  const a = t, r = a && a.getInterpreterName || V3;
  let n;
  switch (a ? a.numberOfArguments : 0) {
    case 1:
      n = (i) => {
        const l = r(i, a);
        return yl(e, l)(i, o);
      };
      break;
    case 3:
      n = (i, l, u) => {
        const d = r(i, a);
        return yl(e, d)(i, l, u, o);
      };
      break;
    default:
      n = (i, l) => {
        const u = r(i, a);
        return yl(e, u)(i, l, o);
      };
  }
  const o = Object.assign({}, a, { interpret: n });
  return o.interpret;
}
function L3(e, t) {
  return (a, ...r) => {
    const n = e(a, ...r), o = t.bind(null, n);
    return o.ast = n, o;
  };
}
function Hb(e, t) {
  if (!Array.isArray(t)) throw new Error(`"${e.name}" expects value to be an array`);
}
function Yb(e, t) {
  if (Hb(e, t), !t.length) throw new Error(`"${e.name}" expects to have at least one element in array`);
}
const cu = (e) => (t, a) => {
  if (typeof a !== e) throw new Error(`"${t.name}" expects value to be a "${e}"`);
}, Zb = { type: "compound", validate: Yb, parse(e, t, { parse: a }) {
  const r = t.map((n) => a(n));
  return Lb(e.name, r);
} }, U3 = Zb, W3 = { type: "compound", validate: Yb }, K3 = { type: "field", validate(e, t) {
  if (!(t && (t instanceof RegExp || t.constructor === Object))) throw new Error(`"${e.name}" expects to receive either regular expression or object of field operators`);
}, parse(e, t, a) {
  const r = t instanceof RegExp ? new ei("regex", a.field, t) : a.parse(t, a);
  return new Xo(e.name, [r]);
} }, Qb = { type: "field", validate(e, t) {
  if (!t || t.constructor !== Object) throw new Error(`"${e.name}" expects to receive an object with nested query or field level operators`);
}, parse(e, t, { parse: a, field: r, hasOperators: n }) {
  const o = n(t) ? a(t, { field: Bn }) : a(t);
  return new ei(e.name, r, o);
} }, Jb = { type: "field", validate: cu("number") }, ti = { type: "field", validate: Hb }, Xb = ti, ek = ti, G3 = { type: "field", validate(e, t) {
  if (!Array.isArray(t) || t.length !== 2) throw new Error(`"${e.name}" expects an array with 2 numeric elements`);
} }, tk = { type: "field", validate: cu("boolean") }, fu = { type: "field", validate: function(e, t) {
  if (!(typeof t == "string" || typeof t == "number" || t instanceof Date)) throw new Error(`"${e.name}" expects value to be comparable (i.e., string, number or date)`);
} }, ai = fu, ak = ai, rk = ai, pu = { type: "field" }, nk = pu, ok = { type: "field", validate(e, t) {
  if (!(t instanceof RegExp) && typeof t != "string") throw new Error(`"${e.name}" expects value to be a regular expression or a string that represents regular expression`);
}, parse(e, t, a) {
  const r = typeof t == "string" ? new RegExp(t, a.query.$options || "") : t;
  return new ei(e.name, a.field, r);
} }, ik = { type: "field", parse: () => Rb }, H3 = { type: "document", validate: cu("function") };
var Y3 = Object.freeze({ __proto__: null, $and: Zb, $or: U3, $nor: W3, $not: K3, $elemMatch: Qb, $size: Jb, $in: ti, $nin: Xb, $all: ek, $mod: G3, $exists: tk, $gte: fu, $gt: ai, $lt: ak, $lte: rk, $eq: pu, $ne: nk, $regex: ok, $options: ik, $where: H3 });
let Z3 = class extends N3 {
  constructor(e) {
    super(e, { defaultOperatorName: "$eq", operatorToConditionName: (t) => t.slice(1) });
  }
  parse(e, t) {
    return t && t.field ? Kb(this.parseFieldOperators(t.field, e)) : super.parse(e);
  }
};
const ts = Y3;
function yu(e, t, a) {
  for (let r = 0, n = e.length; r < n; r++) if (a(e[r], t) === 0) return !0;
  return !1;
}
function mu(e, t) {
  return Array.isArray(e) && Number.isNaN(Number(t));
}
function Cf(e, t, a) {
  if (!mu(e, t)) return a(e, t);
  let r = [];
  for (let n = 0; n < e.length; n++) {
    const o = a(e[n], t);
    o !== void 0 && (r = r.concat(o));
  }
  return r;
}
function Ja(e) {
  return (t, a, r) => {
    const n = r.get(a, t.field);
    return Array.isArray(n) ? n.some((o) => e(t, o, r)) : e(t, n, r);
  };
}
const Q3 = Object.hasOwn || Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty), J3 = (e, t) => e[t];
function lk(e, t, a) {
  const r = t.lastIndexOf(".");
  return r === -1 ? [e, t] : [a(e, t.slice(0, r)), t.slice(r + 1)];
}
function X3(e, t, a = J3) {
  if (t === Bn) return e;
  if (!e) throw new Error(`Unable to get field "${t}" out of ${String(e)}.`);
  return (function(r, n, o) {
    if (n.indexOf(".") === -1) return Cf(r, n, o);
    const i = n.split(".");
    let l = r;
    for (let u = 0, d = i.length; u < d; u++) if (l = Cf(l, i[u], o), !l || typeof l != "object") return u < d - 1 ? void 0 : l;
    return l;
  })(e, t, a);
}
function sk(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function uk(e, t = {}) {
  return R3(e, Object.assign({ get: X3, compare: sk }, t));
}
const dk = (e, t, { interpret: a }) => e.value.some((r) => a(r, t)), eP = (e, t, a) => !dk(e, t, a), ck = (e, t, { interpret: a }) => e.value.every((r) => a(r, t)), tP = (e, t, { interpret: a }) => !a(e.value[0], t), hu = (e, t, { compare: a, get: r }) => {
  const n = r(t, e.field);
  return Array.isArray(n) && !Array.isArray(e.value) ? yu(n, e.value, a) : a(n, e.value) === 0;
}, fk = (e, t, a) => !hu(e, t, a), pk = Ja((e, t, a) => {
  const r = a.compare(t, e.value);
  return r === 0 || r === -1;
}), yk = Ja((e, t, a) => a.compare(t, e.value) === -1), mk = Ja((e, t, a) => a.compare(t, e.value) === 1), hk = Ja((e, t, a) => {
  const r = a.compare(t, e.value);
  return r === 0 || r === 1;
}), vk = (e, t, { get: a }) => {
  if (e.field === Bn) return t !== void 0;
  const [r, n] = lk(t, e.field, a), o = (i) => i == null ? !!i === e.value : Q3(i, n) === e.value;
  return mu(r, n) ? r.some(o) : o(r);
}, aP = Ja((e, t) => typeof t == "number" && t % e.value[0] === e.value[1]), gk = (e, t, { get: a }) => {
  const [r, n] = lk(t, e.field, a), o = (i) => {
    const l = a(i, n);
    return Array.isArray(l) && l.length === e.value;
  };
  return e.field !== Bn && mu(r, n) ? r.some(o) : o(r);
}, bk = Ja((e, t) => typeof t == "string" && e.value.test(t)), ri = Ja((e, t, { compare: a }) => yu(e.value, t, a)), kk = (e, t, a) => !ri(e, t, a), wk = (e, t, { compare: a, get: r }) => {
  const n = r(t, e.field);
  return Array.isArray(n) && e.value.every((o) => yu(n, o, a));
}, xk = (e, t, { interpret: a, get: r }) => {
  const n = r(t, e.field);
  return Array.isArray(n) && n.some((o) => a(e.value, o));
}, rP = (e, t) => e.value.call(t);
var nP = Object.freeze({ __proto__: null, or: dk, nor: eP, and: ck, not: tP, eq: hu, ne: fk, lte: pk, lt: yk, gt: mk, gte: hk, exists: vk, mod: aP, size: gk, regex: bk, within: ri, nin: kk, all: wk, elemMatch: xk, where: rP });
const vu = Object.assign({}, nP, { in: ri });
uk(vu);
function Ef(e) {
  return e === null || typeof e != "object" ? e : e instanceof Date ? e.getTime() : e && typeof e.toJSON == "function" ? e.toJSON() : e;
}
const oP = (e, t) => sk(Ef(e), Ef(t));
function gu(e, t, a) {
  const r = new Z3(e), n = uk(t, Object.assign({ compare: oP }, a));
  if (a && a.forPrimitives) {
    const o = { field: Bn }, i = r.parse;
    r.setParse((l) => i(l, o));
  }
  return L3(r.parse, n);
}
gu(ts, vu);
gu(["$and", "$or"].reduce((e, t) => (e[t] = Object.assign({}, e[t], { type: "field" }), e), Object.assign({}, ts, { $nor: Object.assign({}, ts.$nor, { type: "field", parse: Gb.compound }) })), vu, { forPrimitives: !0 });
const zk = Object.hasOwn || ((e, t) => Object.prototype.hasOwnProperty.call(e, t));
function as(e) {
  return Array.isArray(e) ? e : [e];
}
const ur = "__caslSubjectType__";
function ml(e, t) {
  if (t) {
    if (!zk(t, ur)) Object.defineProperty(t, ur, { value: e });
    else if (e !== t[ur]) throw new Error(`Trying to cast object to subject type ${e} but previously it was casted to ${t[ur]}`);
  }
  return t;
}
const Zn = (e) => {
  const t = typeof e;
  return t === "string" || t === "function";
}, iP = (e) => e.modelName || e.name;
function _k(e) {
  return zk(e, ur) ? e[ur] : iP(e.constructor);
}
const $f = { function: (e) => e.constructor, string: _k };
function Bf(e, t, a) {
  for (let r = a; r < t.length; r++) e.push(t[r]);
}
function Df(e, t) {
  if (!e || !e.length) return t || [];
  if (!t || !t.length) return e || [];
  let a = 0, r = 0;
  const n = [];
  for (; a < e.length && r < t.length; ) e[a].priority < t[r].priority ? (n.push(e[a]), a++) : e[a].priority > t[r].priority ? (n.push(t[r]), r++) : (n.push(e[a]), a++, r++);
  return Bf(n, e, a), Bf(n, t, r), n;
}
function Kn(e, t, a) {
  let r = e.get(t);
  return r || (r = a(), e.set(t, r)), r;
}
const lP = (e) => e;
function sP(e, t) {
  let a;
  for (let r = 0; r < e.length; r++) {
    const n = t(e[r]);
    a && n && a.push(e[r]), n || (a ??= e.slice(0, r));
  }
  return a || e;
}
function uP(e, t) {
  if (Array.isArray(e.fields) && !e.fields.length) throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");
  if (e.fields && !t.fieldMatcher) throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');
  if (e.conditions && !t.conditionsMatcher) throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions');
}
class dP {
  constructor(t, a, r = 0) {
    uP(t, a), this.action = a.resolveAction(t.action), this.subject = t.subject, this.inverted = !!t.inverted, this.conditions = t.conditions, this.reason = t.reason, this.origin = t, this.fields = t.fields ? as(t.fields) : void 0, this.priority = r, this.t = a;
  }
  i() {
    return this.conditions && !this.o && (this.o = this.t.conditionsMatcher(this.conditions)), this.o;
  }
  get ast() {
    const t = this.i();
    return t ? t.ast : void 0;
  }
  matchesConditions(t) {
    return this.conditions ? !t || Zn(t) ? !this.inverted : this.i()(t) : !0;
  }
  matchesField(t) {
    return this.fields ? t ? (this.u || (this.u = this.t.fieldMatcher(this.fields)), this.u(t)) : !this.inverted : !0;
  }
}
function cP(e, t) {
  const a = { value: e, prev: t, next: null };
  return t && (t.next = a), a;
}
function fP(e) {
  e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
}
const Mf = () => ({ rules: [], merged: !1 }), Pf = () => /* @__PURE__ */ new Map();
class pP {
  constructor(t = [], a = {}) {
    this.h = !1, this.l = /* @__PURE__ */ new Map(), this.p = { conditionsMatcher: a.conditionsMatcher, fieldMatcher: a.fieldMatcher, resolveAction: a.resolveAction || lP }, this.$ = a.anyAction || "manage", this.A = a.anySubjectType || "all", this.m = t, this.M = !!a.detectSubjectType, this.j = a.detectSubjectType || _k, this.v(t);
  }
  get rules() {
    return this.m;
  }
  detectSubjectType(t) {
    return Zn(t) ? t : t ? this.j(t) : this.A;
  }
  update(t) {
    const a = { rules: t, ability: this, target: this };
    return this._("update", a), this.m = t, this.v(t), this._("updated", a), this;
  }
  v(t) {
    const a = /* @__PURE__ */ new Map();
    let r;
    for (let n = t.length - 1; n >= 0; n--) {
      const o = t.length - n - 1, i = new dP(t[n], this.p, o), l = as(i.action), u = as(i.subject || this.A);
      !this.h && i.fields && (this.h = !0);
      for (let d = 0; d < u.length; d++) {
        const c = Kn(a, u[d], Pf);
        r === void 0 && (r = typeof u[d]), typeof u[d] !== r && r !== "mixed" && (r = "mixed");
        for (let f = 0; f < l.length; f++) Kn(c, l[f], Mf).rules.push(i);
      }
    }
    if (this.l = a, r !== "mixed" && !this.M) {
      const n = $f[r] || $f.string;
      this.j = n;
    }
  }
  possibleRulesFor(t, a = this.A) {
    if (!Zn(a)) throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');
    const r = Kn(this.l, a, Pf), n = Kn(r, t, Mf);
    if (n.merged) return n.rules;
    const o = t !== this.$ && r.has(this.$) ? r.get(this.$).rules : void 0;
    let i = Df(n.rules, o);
    return a !== this.A && (i = Df(i, this.possibleRulesFor(t, this.A))), n.rules = i, n.merged = !0, i;
  }
  rulesFor(t, a, r) {
    const n = this.possibleRulesFor(t, a);
    if (r && typeof r != "string") throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");
    return this.h ? sP(n, (o) => o.matchesField(r)) : n;
  }
  actionsFor(t) {
    if (!Zn(t)) throw new Error('"actionsFor" accepts only subject types (i.e., string or class) as a parameter');
    const a = /* @__PURE__ */ new Set(), r = this.l.get(t);
    r && Array.from(r.keys()).forEach((o) => a.add(o));
    const n = t !== this.A ? this.l.get(this.A) : void 0;
    return n && Array.from(n.keys()).forEach((o) => a.add(o)), Array.from(a);
  }
  on(t, a) {
    this.F = this.F || /* @__PURE__ */ new Map();
    const r = this.F, n = r.get(t) || null, o = cP(a, n);
    return r.set(t, o), () => {
      const i = r.get(t);
      !o.next && !o.prev && i === o ? r.delete(t) : o === i && r.set(t, o.prev), fP(o);
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
class yP extends pP {
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
const mP = { $eq: pu, $ne: nk, $lt: ak, $lte: rk, $gt: ai, $gte: fu, $in: ti, $nin: Xb, $all: ek, $size: Jb, $regex: ok, $options: ik, $elemMatch: Qb, $exists: tk }, hP = { eq: hu, ne: fk, lt: yk, lte: pk, gt: mk, gte: hk, in: ri, nin: kk, all: wk, size: gk, regex: bk, elemMatch: xk, exists: vk, and: ck }, vP = gu(mP, hP), gP = /[-/\\^$+?.()|[\]{}]/g, bP = /\.?\*+\.?/g, kP = /\*+/, wP = /\./g;
function xP(e, t, a) {
  const r = a[0] === "*" || e[0] === "." && e[e.length - 1] === "." ? "+" : "*", n = e.indexOf("**") === -1 ? "[^.]" : ".", o = e.replace(wP, "\\$&").replace(kP, n + r);
  return t + e.length === a.length ? `(?:${o})?` : o;
}
function zP(e, t, a) {
  return e === "." && (a[t - 1] === "*" || a[t + 1] === "*") ? e : `\\${e}`;
}
function _P(e) {
  const t = e.map((r) => r.replace(gP, zP).replace(bP, xP)), a = t.length > 1 ? `(?:${t.join("|")})` : t[0];
  return new RegExp(`^${a}$`);
}
const SP = (e) => {
  let t;
  return (a) => (typeof t > "u" && (t = e.every((r) => r.indexOf("*") === -1) ? null : _P(e)), t === null ? e.indexOf(a) !== -1 : t.test(a));
};
function qP(e = [], t = {}) {
  return new yP(e, Object.assign({ conditionsMatcher: vP, fieldMatcher: SP }, t));
}
function OP(e) {
  return e.prototype !== void 0 && typeof e.prototype.possibleRulesFor == "function";
}
class AP {
  constructor(t) {
    this.O = t;
  }
  because(t) {
    return this.O.reason = t, this;
  }
}
class CP {
  constructor(t) {
    this.rules = [], this.C = t, this.can = (a, r, n, o) => this.R(a, r, n, o, !1), this.cannot = (a, r, n, o) => this.R(a, r, n, o, !0), this.build = (a) => OP(this.C) ? new this.C(this.rules, a) : this.C(this.rules, a);
  }
  R(t, a, r, n, o) {
    const i = { action: t };
    return o && (i.inverted = o), a && (i.subject = a, Array.isArray(r) || typeof r == "string" ? i.fields = r : typeof r < "u" && (i.conditions = r), typeof n < "u" && (i.conditions = n)), this.rules.push(i), new AP(i);
  }
}
function EP(e, t) {
  const a = new CP(qP), r = e(a.can, a.cannot);
  return r && typeof r.then == "function" ? r.then(() => a.build(t)) : a.build(t);
}
function bu(e) {
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
function ku(...e) {
  return e.reduce((t, a) => a(t), class {
  });
}
class $P extends ku(bu) {
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
class BP {
  static __container_entry_key = "AclEntity";
  ability;
  permissions;
  debug = !1;
  logger;
  constructor(t = {}) {
    const a = (t.permissions || []).map((r) => $P.from(r));
    this.permissions = a, this.debug = t.debug || !1, this.logger = t.logger || new xn().child({ label: "acl" }), this.ability = EP((r) => {
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
    const n = ml(a, r);
    return this.ability.can(t, n);
  }
  cannot(t, a, r) {
    if (!r)
      return this.ability.cannot(t, a);
    const n = ml(a, r);
    return this.ability.cannot(t, n);
  }
  subject(t, a) {
    return ml(t, a);
  }
}
const Sk = dt.proxy(BP), qk = /* @__PURE__ */ q({
  __name: "FileUploader",
  props: /* @__PURE__ */ Le({
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
  emits: /* @__PURE__ */ Le(["uploaded"], ["update:fileId", "update:fileUrl", "update:loading"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, o = pe(e, "fileId"), i = pe(e, "fileUrl"), l = pe(e, "loading"), u = M(() => {
      const h = {
        purpose: r.purpose,
        folder: r.folder,
        max_size: r.maxSize,
        mime_types: r.mimetypes
      };
      return Sk.can("create", "FileUploadSession", h);
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
    async function c(h, b) {
      return await At.put(b, {
        body: h
      });
    }
    async function f(h) {
      return await At.post(h);
    }
    async function y(h) {
      const b = await d(h);
      await c(h, b.upload_url);
      const w = await f(b.create_file_url);
      return o.value = w.id, i.value = w.url, w;
    }
    async function p() {
      const h = await P3.pick({
        multiple: r.multiple,
        accept: r.mimetypes
      });
      if (h) {
        if (r.multiple && Array.isArray(h)) {
          const b = [];
          for (const w of h) {
            const k = await y(w);
            b.push(k);
          }
          return b;
        }
        if (!Array.isArray(h))
          return await y(h);
      }
    }
    async function g() {
      l.value = !0;
      const [h, b] = await Gt(() => p());
      if (h || !b) {
        l.value = !1, console.error(h);
        return;
      }
      if (await new Promise((w) => setTimeout(w, 500)), Array.isArray(b)) {
        n("uploaded", b), l.value = !1;
        return;
      }
      n("uploaded", b), l.value = !1;
    }
    return t({
      handle: g,
      executeFromFile: y
    }), (h, b) => u.value ? O(h.$slots, "default", {
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
          _(Re, {
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
}), DP = { class: "zkit:flex zkit:flex-col zkit:items-baseline zkit:space-y-4" }, MP = {
  key: 0,
  class: "zkit:relative zkit:inline-block zkit:border zkit:rounded-lg zkit:overflow-hidden"
}, PP = { class: "zkit:flex zkit:flex-wrap zkit:flex-col zkit:gap-2 zkit:sm:flex-row! zkit:sm:gap-2 zkit:w-full" }, jP = /* @__PURE__ */ q({
  __name: "FormImageUploader",
  props: /* @__PURE__ */ Le({
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
        const u = l.types.find((y) => y.startsWith("image/"));
        if (!u)
          continue;
        const d = await l.getType(u), c = new File([d], `clipboard-image-${Date.now()}.png`, { type: u });
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
    return (i, l) => (v(), x(s(Tt), { name: e.name }, {
      default: m(({ value: u, setValue: d }) => [
        _(s(jt), null, {
          default: m(() => [
            _(s(It), { class: "zkit:mb-2" }, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(s(ua), null, {
              default: m(() => [
                ee("div", DP, [
                  O(i.$slots, "preview", {
                    value: u,
                    url: a.value,
                    setValue: d
                  }, () => [
                    a.value ? (v(), U("div", MP, [
                      _(E3, {
                        src: a.value,
                        alt: i.$t("Uploaded image"),
                        class: "zkit:max-w-xs zkit:max-h-48 zkit:object-cover zkit:w-full"
                      }, null, 8, ["src", "alt"])
                    ])) : Q("", !0)
                  ]),
                  _(qk, {
                    ref_key: "fileUploaderRef",
                    ref: r,
                    "file-url": a.value,
                    "onUpdate:fileUrl": l[0] || (l[0] = (c) => a.value = c),
                    loading: t.value,
                    "onUpdate:loading": l[1] || (l[1] = (c) => t.value = c),
                    "file-id": u,
                    purpose: e.purpose,
                    folder: e.folder,
                    "max-size": e.maxSize,
                    disabled: e.disabled,
                    public: e.public,
                    mimetypes: "image/*",
                    "onUpdate:fileId": d
                  }, {
                    default: m(({ handle: c, loading: f }) => [
                      O(i.$slots, "default", {
                        handle: c,
                        loading: f,
                        value: u,
                        setValue: d
                      }, () => [
                        ee("div", PP, [
                          u ? (v(), x(rt, {
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
                              _(Re, {
                                name: "trash",
                                class: "zkit:size-4"
                              })
                            ]),
                            _: 1
                          }, 8, ["disabled", "tooltip", "onClick"])) : Q("", !0),
                          _(rt, {
                            type: "button",
                            variant: "outline",
                            loading: f,
                            disabled: e.disabled,
                            tooltip: i.$t("Upload image"),
                            onClick: c
                          }, {
                            default: m(() => [
                              _(Re, {
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
                              _(Re, {
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
            e.hint ? (v(), x(s(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), IP = /* @__PURE__ */ q({
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
      default: () => Tb
    }
  },
  setup(e) {
    return (t, a) => (v(), x(s(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ componentField: r }) => [
        _(JM, {
          "model-value": r.modelValue,
          placeholder: e.placeholder,
          readonly: e.readonly,
          presets: e.presets,
          "onUpdate:modelValue": r["onUpdate:modelValue"]
        }, {
          activator: m(({ color: n }) => [
            _(s(jt), null, {
              default: m(() => [
                _(s(It), null, {
                  default: m(() => [
                    J(V(e.label), 1)
                  ]),
                  _: 1
                }),
                _(s(ua), null, {
                  default: m(() => [
                    _(Fb, {
                      "model-value": n,
                      placeholder: e.placeholder,
                      readonly: e.readonly,
                      class: "zkit:cursor-pointer",
                      "input-class": "text-left rounded-l-none"
                    }, {
                      prepend: m(() => [
                        ee("div", {
                          class: "zkit:size-10 zkit:border zkit:rounded-l zkit:shrink-0",
                          style: lt({ backgroundColor: n })
                        }, null, 4)
                      ]),
                      _: 2
                    }, 1032, ["model-value", "placeholder", "readonly"])
                  ]),
                  _: 2
                }, 1024),
                e.hint ? (v(), x(s(Pt), { key: 0 }, {
                  default: m(() => [
                    J(V(e.hint), 1)
                  ]),
                  _: 1
                })) : Q("", !0),
                _(s(Ft))
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
}), FP = { class: "zkit:space-y-2" }, TP = { class: "zkit:flex zkit:gap-2" }, NP = { class: "zkit:space-y-1" }, VP = { class: "zkit:text-sm zkit:truncate" }, RP = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "StringListInput",
  props: /* @__PURE__ */ Le({
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
    return (o, i) => (v(), U("div", FP, [
      ee("div", TP, [
        _(s(_a), {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (l) => a.value = l),
          placeholder: e.placeholder,
          class: "zkit:flex-1 zkit:h-10",
          disabled: e.disabled,
          onKeydown: mt(Me(r, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "placeholder", "disabled", "onKeydown"]),
        _(s(ot), {
          disabled: e.disabled,
          type: "button",
          class: "zkit:h-10",
          onClick: r
        }, {
          default: m(() => [
            _(Re, {
              name: "plus",
              class: "zkit:w-4 zkit:h-4"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      ee("div", NP, [
        (v(!0), U(xe, null, je(t.value, (l, u) => (v(), U("div", {
          key: u,
          class: "zkit:flex zkit:items-center zkit:justify-between zkit:rounded zkit:border zkit:p-2 zkit:bg-muted"
        }, [
          ee("div", VP, V(l), 1),
          _(s(ot), {
            variant: "ghost",
            size: "icon",
            disabled: e.disabled,
            onClick: (d) => n(u)
          }, {
            default: m(() => [
              _(s(Ob), { class: "zkit:w-4 zkit:h-4" })
            ]),
            _: 1
          }, 8, ["disabled", "onClick"])
        ]))), 128))
      ])
    ]));
  }
}), LP = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ value: r, setValue: n }) => [
        _(s(jt), null, {
          default: m(() => [
            _(s(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(s(ua), null, {
              default: m(() => [
                _(RP, {
                  disabled: e.disabled,
                  name: e.name,
                  placeholder: e.placeholder,
                  "model-value": r,
                  "onUpdate:modelValue": n
                }, null, 8, ["disabled", "name", "placeholder", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(s(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), UP = {
  key: 0,
  class: "zkit:text-sm zkit:font-medium zkit:leading-none zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-70 zkit:mb-2 zkit:block"
}, WP = {
  key: 1,
  class: "zkit:text-sm zkit:text-muted-foreground zkit:mt-2"
}, KP = /* @__PURE__ */ q({
  __name: "JsonInput",
  props: /* @__PURE__ */ Le({
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
  emits: /* @__PURE__ */ Le(["blur"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = pe(e, "modelValue"), r = e, n = t, o = M({
      get() {
        return r.mode === "object" && typeof a.value == "object" ? JSON.stringify(a.value, null, 2) : a.value || "";
      },
      set(u) {
        if (r.mode === "object") {
          try {
            const d = JSON.parse(u);
            a.value = d;
          } catch {
            a.value = u;
          }
          return;
        }
        a.value = u;
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
    return qe(i), (u, d) => (v(), U("div", null, [
      e.label ? (v(), U("label", UP, V(e.label), 1)) : Q("", !0),
      _(Ib, {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c),
        class: ye(["zkit:min-h-20 zkit:font-mono", e.textareaClass]),
        rows: e.rows || (e.mode === "object" ? 6 : 3),
        onBlur: l
      }, null, 8, ["modelValue", "rows", "class"]),
      e.hint ? (v(), U("p", WP, V(e.hint), 1)) : Q("", !0)
    ]));
  }
}), GP = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(Tt), { name: e.name }, {
      default: m(({ value: r, setValue: n }) => [
        _(s(jt), null, {
          default: m(() => [
            _(s(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(s(ua), null, {
              default: m(() => [
                _(KP, P({
                  mode: e.mode,
                  "model-value": r
                }, t.$attrs, { "onUpdate:modelValue": n }), null, 16, ["mode", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(s(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), HP = {
  key: 0,
  class: "zkit:p-3 zkit:border-t"
}, YP = { class: "zkit:flex zkit:items-center zkit:gap-2" }, ZP = { class: "zkit:flex-1" }, QP = { class: "zkit:text-sm zkit:font-medium" }, JP = { class: "zkit:flex-1" }, XP = { class: "zkit:text-sm zkit:font-medium" }, ej = /* @__PURE__ */ q({
  __name: "DatePicker",
  props: /* @__PURE__ */ Le({
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
    const t = e, a = pe(e, "modelValue"), r = F(!1), n = F("00"), o = F("00"), i = M(() => a.value ? t.mode === "datetime" ? io(a.value, "yyyy-MM-dd HH:mm") : io(a.value, "yyyy-MM-dd") : t.placeholder || $t("Select date"));
    function l() {
      if (!a.value)
        return;
      const c = new Date(a.value);
      c.setHours(parseInt(n.value) || 0), c.setMinutes(parseInt(o.value) || 0), c.setSeconds(0), c.setMilliseconds(0), a.value = c;
    }
    function u(c) {
      c.stopPropagation(), a.value = null, n.value = "00", o.value = "00";
    }
    const d = M({
      get() {
        if (!a.value)
          return;
        const c = new Date(a.value);
        return VS(c, Mr());
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
    return (c, f) => (v(), x(s($b), {
      open: r.value,
      "onUpdate:open": f[4] || (f[4] = (y) => r.value = y)
    }, {
      default: m(() => [
        _(s(Db), { "as-child": "" }, {
          default: m(() => [
            _(s(ot), {
              variant: "outline",
              class: ye(s(Y)(
                "zkit:w-full zkit:justify-start zkit:text-left zkit:font-normal zkit:!h-10",
                !a.value && "zkit:text-muted-foreground",
                t.class
              )),
              disabled: e.disabled
            }, {
              default: m(() => [
                _(Re, {
                  name: "calendar",
                  class: "zkit:mr-2 zkit:h-4 zkit:w-4"
                }),
                J(" " + V(i.value) + " ", 1),
                e.clearable && a.value ? (v(), x(Re, {
                  key: 0,
                  name: "x",
                  class: "zkit:ml-auto zkit:h-4 zkit:w-4 zkit:opacity-50 zkit:hover:opacity-100",
                  onClick: u
                })) : Q("", !0)
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ]),
          _: 1
        }),
        _(s(Bb), { class: "zkit:min-w-[320px] zkit:w-auto zkit:p-0" }, {
          default: m(() => [
            _(s(ZD), {
              modelValue: d.value,
              "onUpdate:modelValue": f[0] || (f[0] = (y) => d.value = y)
            }, null, 8, ["modelValue"]),
            e.mode === "datetime" ? (v(), U("div", HP, [
              ee("div", YP, [
                ee("div", ZP, [
                  ee("label", QP, V(c.$t("Hours")), 1),
                  _(s(_a), {
                    modelValue: n.value,
                    "onUpdate:modelValue": f[1] || (f[1] = (y) => n.value = y),
                    type: "number",
                    min: "0",
                    max: "23",
                    class: "zkit:mt-1",
                    onInput: l
                  }, null, 8, ["modelValue"])
                ]),
                ee("div", JP, [
                  ee("label", XP, V(c.$t("Minutes")), 1),
                  _(s(_a), {
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
              _(s(ot), {
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
            ])) : Q("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), tj = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(Tt), {
      name: e.name,
      disabled: e.disabled,
      readonly: e.readonly
    }, {
      default: m(({ componentField: r }) => [
        _(s(jt), null, {
          default: m(() => [
            _(s(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(s(ua), null, {
              default: m(() => [
                _(ej, P(t.$attrs, {
                  "model-value": r.modelValue,
                  disabled: e.disabled,
                  onBlur: r.onBlur,
                  "onUpdate:modelValue": r["onUpdate:modelValue"]
                }), null, 16, ["model-value", "disabled", "onBlur", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(s(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name", "disabled", "readonly"]));
  }
}), aj = { class: "zkit:flex zkit:gap-2" }, rj = /* @__PURE__ */ q({
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
    return (t, a) => (v(), x(s(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: m(({ componentField: r }) => [
        _(s(jt), null, {
          default: m(() => [
            _(s(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(s(ua), null, {
              default: m(() => [
                ee("div", aj, [
                  _(s(_a), P({
                    type: e.type,
                    placeholder: e.placeholder,
                    disabled: e.disabled,
                    autocomplete: e.autocomplete,
                    readonly: e.readonly,
                    autofocus: e.autofocus,
                    step: e.step,
                    class: "zkit:h-10 zkit:flex-1"
                  }, r), null, 16, ["type", "placeholder", "disabled", "autocomplete", "readonly", "autofocus", "step"]),
                  e.presets.length > 0 ? (v(), x(s(Yl), { key: 0 }, {
                    default: m(() => [
                      _(s(Jl), { "as-child": "" }, {
                        default: m(() => [
                          _(s(ot), {
                            variant: "outline",
                            size: "sm",
                            type: "button",
                            class: "zkit:h-10"
                          }, {
                            default: m(() => [
                              _(Re, {
                                name: "chevron-down",
                                class: "zkit:w-4 zkit:h-4"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      _(s(Zl), { align: "end" }, {
                        default: m(() => [
                          (v(!0), U(xe, null, je(e.presets, (n) => (v(), x(s(Ql), {
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
                  }, 1024)) : Q("", !0),
                  O(t.$slots, "append")
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(s(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), nj = { class: "zkit:flex zkit:flex-col zkit:gap-3" }, oj = { class: "zkit:flex zkit:items-center zkit:gap-2" }, ij = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, lj = /* @__PURE__ */ q({
  __name: "FormFileUploader",
  props: /* @__PURE__ */ Le({
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
    return (o, i) => (v(), x(s(Tt), { name: e.name }, {
      default: m(({ value: l, setValue: u }) => [
        _(s(jt), null, {
          default: m(() => [
            _(s(It), null, {
              default: m(() => [
                J(V(e.label), 1)
              ]),
              _: 1
            }),
            _(s(ua), null, {
              default: m(() => [
                ee("div", nj, [
                  _(qk, {
                    loading: t.value,
                    "onUpdate:loading": i[0] || (i[0] = (d) => t.value = d),
                    "file-id": l,
                    purpose: e.purpose,
                    folder: e.folder,
                    "max-size": e.maxSize,
                    disabled: e.disabled,
                    public: e.public,
                    mimetypes: e.mimetypes,
                    "onUpdate:fileId": u,
                    onUploaded: r
                  }, {
                    default: m(({ handle: d, loading: c }) => [
                      ee("div", oj, [
                        _(rt, {
                          type: "button",
                          variant: "outline",
                          loading: c,
                          disabled: e.disabled,
                          onClick: d
                        }, {
                          default: m(() => [
                            _(Re, {
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
                          onClick: (f) => n(u)
                        }, {
                          default: m(() => [
                            _(Re, {
                              name: "X",
                              class: "zkit:size-4 zkit:mr-2"
                            }),
                            J(" " + V(o.$t("Clear")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])) : Q("", !0)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["loading", "file-id", "purpose", "folder", "max-size", "disabled", "public", "mimetypes", "onUpdate:fileId"]),
                  l ? (v(), U("p", ij, V(o.$t("Selected file :0", [a.value?.client_name || l])), 1)) : Q("", !0)
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (v(), x(s(Pt), { key: 0 }, {
              default: m(() => [
                J(V(e.hint), 1)
              ]),
              _: 1
            })) : Q("", !0),
            _(s(Ft))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), sj = ["name"], uj = {
  key: 12,
  class: "zkit:text-destructive"
}, dj = /* @__PURE__ */ q({
  __name: "FormAutoFieldList",
  props: {
    fields: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, a = M(() => Object.entries(t.fields).map(([r, n]) => {
      const { component: o, ...i } = n;
      return {
        component: o,
        name: r,
        props: i
      };
    }));
    return (r, n) => (v(!0), U(xe, null, je(a.value, (o) => (v(), U(xe, {
      key: o.name
    }, [
      o.component === "text-field" ? (v(), x(rj, P({
        key: 0,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "textarea" ? (v(), x(r3, P({
        key: 1,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "select" ? (v(), x(p3, P({
        key: 2,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "autocomplete" ? (v(), x(S3, P({
        key: 3,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "switch" ? (v(), x(O3, P({
        key: 4,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "file-upload" ? (v(), x(lj, P({
        key: 5,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "image-upload" ? (v(), x(jP, P({
        key: 6,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "color-picker" ? (v(), x(IP, P({
        key: 7,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "string-list-input" ? (v(), x(LP, P({
        key: 8,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "json-input" ? (v(), x(GP, P({
        key: 9,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "date-picker" ? (v(), x(tj, P({
        key: 10,
        name: o.name
      }, { ref_for: !0 }, o.props), null, 16, ["name"])) : o.component === "hidden" ? (v(), U("input", {
        key: 11,
        class: "zkit:hidden",
        name: o.name
      }, null, 8, sj)) : (v(), U("div", uj, " Unknow component " + V(o.component), 1))
    ], 64))), 128));
  }
}), cj = new sS(), fj = { class: "zkit:flex zkit:flex-col zkit:sm:flex-row zkit:items-center zkit:justify-between zkit:px-2 zkit:gap-4" }, pj = { class: "zkit:flex-1 zkit:text-sm zkit:text-muted-foreground zkit:order-2 zkit:sm:order-1" }, yj = { class: "zkit:flex zkit:flex-col zkit:sm:flex-row zkit:items-center zkit:space-y-4 zkit:sm:space-y-0 zkit:sm:space-x-2 zkit:order-1 zkit:sm:order-2" }, mj = { class: "zkit:flex zkit:space-x-2" }, hj = { class: "zkit:flex zkit:items-center zkit:space-x-2" }, vj = { class: "zkit:sr-only" }, gj = { class: "zkit:sr-only" }, bj = { class: "zkit:sr-only" }, kj = { class: "zkit:sr-only" }, wj = { class: "zkit:sr-only" }, xj = { class: "zkit:sr-only" }, zj = /* @__PURE__ */ q({
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
    const t = pe(e, "page"), a = pe(e, "total"), r = pe(e, "totalPages"), n = pe(e, "limit"), o = pe(e, "limitOptions"), i = M(() => {
      const u = t.value, d = r.value, c = [];
      if (d <= 3) {
        for (let p = 1; p <= d; p++)
          c.push(p);
        return c;
      }
      let f = Math.max(1, u - 1);
      const y = Math.min(d, f + 2);
      y - f < 2 && (f = Math.max(1, y - 2));
      for (let p = f; p <= y; p++)
        c.push(p);
      return c;
    });
    function l(u, d) {
      const c = [];
      for (let f = u; f <= d; f++)
        c.push(f);
      return c;
    }
    return (u, d) => (v(), U("div", fj, [
      ee("div", pj, V(u.$t("Showing from :0 to :1 of :2 rows", [(t.value - 1) * n.value, Math.min(t.value * n.value, a.value), a.value])), 1),
      ee("div", yj, [
        _(Nb, {
          modelValue: n.value,
          "onUpdate:modelValue": d[0] || (d[0] = (c) => n.value = c),
          options: o.value,
          "label-class": "min-w-auto text-xs",
          class: "zkit:!h-8"
        }, null, 8, ["modelValue", "options"]),
        ee("div", mj, [
          (v(!0), U(xe, null, je(i.value, (c) => (v(), x(s(ot), {
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
        ee("div", hj, [
          _(s(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === 1,
            onClick: d[1] || (d[1] = (c) => t.value = 1)
          }, {
            default: m(() => [
              ee("span", vj, V(u.$t("Go to first page")), 1),
              _(Re, {
                name: "ChevronsLeft",
                class: "zkit:w-4 zkit:h-4"
              })
            ]),
            _: 1
          }, 8, ["disabled"]),
          _(s(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === 1,
            onClick: d[2] || (d[2] = (c) => t.value = t.value - 1)
          }, {
            default: m(() => [
              ee("span", gj, V(u.$t("Go to previous page")), 1),
              _(Re, {
                name: "ChevronLeft",
                class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
              })
            ]),
            _: 1
          }, 8, ["disabled"]),
          !i.value.includes(1) && r.value > 0 ? (v(), x(Yl, { key: 0 }, {
            default: m(() => [
              _(s(Jl), { "as-child": "" }, {
                default: m(() => [
                  _(s(ot), {
                    variant: "outline",
                    class: "zkit:w-8 zkit:h-8 zkit:p-0"
                  }, {
                    default: m(() => [
                      ee("span", bj, V(u.$t("More pages")), 1),
                      _(Re, {
                        name: "MoreHorizontal",
                        class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _(s(Zl), { class: "zkit:max-h-60 zkit:overflow-y-auto" }, {
                default: m(() => [
                  (v(!0), U(xe, null, je(l(1, Math.min(...i.value) - 1), (c) => (v(), x(s(Ql), {
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
          })) : Q("", !0),
          (v(!0), U(xe, null, je(i.value, (c) => (v(), x(s(ot), {
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
          !i.value.includes(r.value) && r.value > 0 ? (v(), x(Yl, { key: 1 }, {
            default: m(() => [
              _(s(Jl), { "as-child": "" }, {
                default: m(() => [
                  _(s(ot), {
                    variant: "outline",
                    class: "zkit:w-8 zkit:h-8 zkit:p-0"
                  }, {
                    default: m(() => [
                      ee("span", kj, V(u.$t("More pages")), 1),
                      _(Re, {
                        name: "MoreHorizontal",
                        class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _(s(Zl), { class: "zkit:max-h-60 zkit:overflow-y-auto" }, {
                default: m(() => [
                  (v(!0), U(xe, null, je(l(Math.max(...i.value) + 1, r.value), (c) => (v(), x(s(Ql), {
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
          })) : Q("", !0),
          _(s(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === r.value || r.value === 0,
            onClick: d[3] || (d[3] = (c) => t.value = t.value + 1)
          }, {
            default: m(() => [
              ee("span", wj, V(u.$t("Go to next page")), 1),
              _(Re, {
                name: "ChevronRight",
                class: "zkit:w-3 zkit:h-3 zkit:sm:w-4 zkit:sm:h-4"
              })
            ]),
            _: 1
          }, 8, ["disabled"]),
          _(s(ot), {
            variant: "outline",
            class: "zkit:w-8 zkit:h-8 zkit:p-0",
            disabled: t.value === r.value || r.value === 0,
            onClick: d[4] || (d[4] = (c) => t.value = r.value)
          }, {
            default: m(() => [
              ee("span", xj, V(u.$t("Go to last page")), 1),
              _(Re, {
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
}), _j = {
  key: 0,
  class: "zkit:h-1 zkit:bg-primary zkit:w-full zkit:animate-pulse zkit:rounded"
}, Sj = { class: "zkit:text-sm zkit:text-muted-foreground" }, qj = { class: "zkit:flex zkit:items-start zkit:gap-2" }, Oj = { class: "zkit:w-full" }, Aj = { class: "zkit:text-xs zkit:font-medium zkit:text-muted-foreground zkit:uppercase zkit:tracking-wide zkit:min-w-[40%]" }, Cj = { class: "zkit:text-sm zkit:font-medium zkit:block" }, Ej = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "DataTable",
  props: /* @__PURE__ */ Le({
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
  emits: /* @__PURE__ */ Le(["click:row", "dblclick:row"], ["update:columns", "update:selected", "update:fetchQuery", "update:page", "update:totalPages", "update:total", "update:limit", "update:rows", "update:loading", "update:breakpoint"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, o = pe(e, "columns"), i = pe(e, "selected"), l = pe(e, "fetchQuery");
    let u = F([]), d = F(1), c = F(1), f = F(0), y = F(10), p = async () => {
    }, g = async () => {
    };
    const h = pe(e, "page"), b = pe(e, "totalPages"), w = pe(e, "total"), k = pe(e, "limit"), S = pe(e, "rows"), z = pe(e, "loading"), $ = pe(e, "breakpoint"), A = O0().smaller($), C = M(() => r.noMobile ? !1 : A.value);
    if (r.fetch) {
      const T = gw(r.fetch, {
        serialize: r.serialize,
        refine: r.refine,
        limit: k.value,
        query: l.value
      });
      u = T.items, d = T.page, c = T.totalPages, f = T.total, y = T.limit, p = T.load, g = T.reset, Du(z, T.loading), Du(l, T.query);
    }
    r.fetch || (u = S, d = h, c = b, f = w, y = k);
    function E(T) {
      return typeof r.rowKey == "function" ? r.rowKey(T) : typeof r.rowKey == "string" ? it(T, r.rowKey, "") : null;
    }
    function D(T, fe) {
      return typeof fe.field == "function" ? fe.field(T) : fe.field ? it(T, fe.field, "") : "";
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
    function j(T) {
      if (ae(T))
        return re(T);
      H(T);
    }
    function W() {
      if (r.rowKey) {
        const fe = u.value.filter((te) => !i.value.some((he) => E(te) === E(he)));
        i.value = [...i.value, ...fe];
        return;
      }
      const T = u.value.filter((fe) => !i.value.includes(fe));
      i.value = [...i.value, ...T];
    }
    function L() {
      if (r.rowKey) {
        i.value = i.value.filter((T) => !u.value.some((fe) => E(fe) === E(T)));
        return;
      }
      i.value = i.value.filter((T) => !u.value.includes(T));
    }
    function G() {
      if (u.value.every(ae)) return L();
      W();
    }
    function ce(T) {
      n("click:row", T);
    }
    return t({
      load: p,
      reset: g
    }), (T, fe) => (v(), U(xe, null, [
      C.value ? Q("", !0) : (v(), x(s(Mb), P({
        key: 0,
        "wrapper-class": s(Y)("border rounded-lg", r.class, z.value ? "opacity-50 pointer-events-none" : "")
      }, T.$attrs), {
        default: m(() => [
          _(s(jb), null, {
            default: m(() => [
              _(s(Na), null, {
                default: m(() => [
                  r.selection === "multiple" ? (v(), x(s(ko), {
                    key: 0,
                    class: "zkit:w-10 zkit:text-center zkit:p-0",
                    style: {
                      height: "var(--zkit-datatable-th-height, 3rem)"
                    }
                  }, {
                    default: m(() => [
                      _(Xr, {
                        class: "zkit:translate-y-0.5",
                        "model-value": i.value.length === s(u).length && s(u).length > 0,
                        indeterminate: i.value.length > 0 && i.value.length < s(u).length,
                        onClick: Me(G, ["stop"])
                      }, null, 8, ["model-value", "indeterminate"])
                    ]),
                    _: 1
                  })) : Q("", !0),
                  (v(!0), U(xe, null, je(o.value, (te) => (v(), x(s(ko), {
                    key: te.id,
                    style: lt({
                      width: te.width ? te.width + "px" : "auto",
                      height: "var(--zkit-datatable-th-height, 3rem)"
                    })
                  }, {
                    default: m(() => [
                      O(T.$slots, `header-${te.id}`, { column: te }, () => [
                        J(V(te.label), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["style"]))), 128))
                ]),
                _: 3
              }),
              z.value ? (v(), x(s(Na), { key: 0 }, {
                default: m(() => [
                  _(s(Ta), {
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
              })) : Q("", !0)
            ]),
            _: 3
          }),
          _(s(Pb), null, {
            default: m(() => [
              s(u).length === 0 ? (v(), x(s(Na), { key: 0 }, {
                default: m(() => [
                  _(s(Ta), {
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
              })) : Q("", !0),
              (v(!0), U(xe, null, je(s(u).filter(e.filter), (te) => (v(), x(s(Na), {
                key: te.id,
                "data-state": ae(te) ? "selected" : void 0,
                class: ye(s(Y)("zkit:hover:bg-muted/20 ", R(te))),
                style: lt(oe(te)),
                onClick: (he) => ce(te),
                onDblclick: (he) => n("dblclick:row", te.original)
              }, {
                default: m(() => [
                  r.selection ? (v(), x(s(Ta), {
                    key: 0,
                    class: "zkit:w-10 zkit:text-center zkit:p-0"
                  }, {
                    default: m(() => [
                      _(Xr, {
                        class: "zkit:translate-y-0.5",
                        "model-value": ae(te),
                        onClick: Me((he) => j(te), ["stop"])
                      }, null, 8, ["model-value", "onClick"])
                    ]),
                    _: 2
                  }, 1024)) : Q("", !0),
                  (v(!0), U(xe, null, je(o.value, (he) => (v(), x(s(Ta), {
                    key: he.id,
                    style: lt({
                      width: he.width ? he.width + "px" : "auto",
                      height: "var(--zkit-datatable-td-height, 3rem)"
                    }),
                    class: "zkit:whitespace-normal"
                  }, {
                    default: m(() => [
                      O(T.$slots, `row-${he.id}`, {
                        column: he,
                        row: te
                      }, () => [
                        J(V(D(te, he)), 1)
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
      C.value ? (v(), U("div", P({
        key: 1,
        class: s(Y)("zkit:space-y-4", r.class, z.value ? "zkit:opacity-50 zkit:pointer-events-none" : "")
      }, T.$attrs), [
        z.value ? (v(), U("div", _j)) : Q("", !0),
        r.selection === "multiple" && s(u).length > 0 ? (v(), x(s(cl), {
          key: 1,
          class: "zkit:py-2"
        }, {
          default: m(() => [
            _(s(fl), { class: "zkit:flex zkit:items-center zkit:gap-2" }, {
              default: m(() => [
                _(Xr, {
                  "model-value": i.value.length === s(u).length && s(u).length > 0,
                  indeterminate: i.value.length > 0 && i.value.length < s(u).length,
                  onClick: Me(G, ["stop"])
                }, null, 8, ["model-value", "indeterminate"]),
                ee("span", Sj, V(T.$t("Select all")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Q("", !0),
        !z.value && s(u).length === 0 ? (v(), x(s(cl), { key: 2 }, {
          default: m(() => [
            _(s(fl), { class: "zkit:text-center zkit:py-8" }, {
              default: m(() => [
                J(V(T.$t("No data available")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Q("", !0),
        (v(!0), U(xe, null, je(s(u), (te) => (v(), x(s(cl), {
          key: te.id,
          "data-state": ae(te) ? "selected" : void 0,
          class: ye(s(Y)(
            "zkit:cursor-pointer zkit:transition-colors zkit:hover:bg-muted/20",
            ae(te) ? "zkit:border-primary zkit:bg-primary/5" : "",
            R(te)
          )),
          onClick: (he) => ce(te),
          onDblclick: (he) => n("dblclick:row", te.original)
        }, {
          default: m(() => [
            _(s(fl), { class: "zkit:p-0" }, {
              default: m(() => [
                ee("div", qj, [
                  r.selection ? (v(), x(Xr, {
                    key: 0,
                    class: "zkit:mt-1",
                    "model-value": ae(te),
                    onClick: Me((he) => j(te), ["stop"])
                  }, null, 8, ["model-value", "onClick"])) : Q("", !0),
                  ee("div", Oj, [
                    (v(!0), U(xe, null, je(o.value, (he) => (v(), U("div", {
                      key: he.id,
                      class: ye(s(Y)("zkit:space-x-4 zkit:flex zkit:justify-between zkit:items-center  zkit:overflow-x-auto zkit:border-b zkit:px-4 zkit:py-3 zkit:last:border-b-0"))
                    }, [
                      ee("div", Aj, [
                        O(T.$slots, `header-${he.id}`, { column: he }, () => [
                          J(V(he.label), 1)
                        ])
                      ]),
                      O(T.$slots, `row-${he.id}`, {
                        column: he,
                        row: te
                      }, () => [
                        ee("div", Cj, V(D(te, he)), 1)
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
      ], 16)) : Q("", !0),
      e.hidePagination ? Q("", !0) : (v(), x(zj, {
        key: 2,
        page: s(d),
        "onUpdate:page": fe[0] || (fe[0] = (te) => tt(d) ? d.value = te : d = te),
        limit: s(y),
        "onUpdate:limit": fe[1] || (fe[1] = (te) => tt(y) ? y.value = te : y = te),
        total: s(f),
        "onUpdate:total": fe[2] || (fe[2] = (te) => tt(f) ? f.value = te : f = te),
        "total-pages": s(c),
        "onUpdate:totalPages": fe[3] || (fe[3] = (te) => tt(c) ? c.value = te : c = te),
        class: "zkit:mt-4"
      }, null, 8, ["page", "limit", "total", "total-pages"]))
    ], 64));
  }
}), $j = {
  key: 0,
  class: "zkit:mb-2 zkit:text-sm zkit:text-red-600"
}, jf = /* @__PURE__ */ q({
  __name: "DialogForm",
  props: /* @__PURE__ */ Le({
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
      default: () => cj.create((e) => e.record(e.string(), e.any()))
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
  emits: /* @__PURE__ */ Le(["submit"], ["update:open"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, n = a, o = F(!1), i = pe(e, "open"), { handleSubmit: l, errors: u, values: d, resetForm: c, setFieldValue: f } = Gk({
      validationSchema: fS(r.schema),
      initialValues: r.values
    }), y = M(() => {
      const b = {};
      for (const [w, k] of Object.entries(r.fields))
        typeof k == "function" ? b[w] = k(d) : b[w] = k;
      return b;
    }), p = M(() => {
      const b = {};
      for (const [w, k] of Object.entries(u.value))
        r.fields[w] || (b[w] = k);
      return b;
    });
    function g(b) {
      return typeof r.fetch == "function" ? r.fetch(b) : At.fetch(r.fetch, {
        method: r.method || r.fetchMethod,
        data: b
      });
    }
    const h = l(async (b) => {
      if (!r.fetch && !r.handle) {
        i.value = !1;
        return;
      }
      o.value = !0;
      const [w, k] = await Gt(() => r.handle ? r.handle(b) : g(b));
      if (w) {
        o.value = !1, console.error(w);
        return;
      }
      r.toastOnSuccess && Xn.success(r.toastOnSuccess), await new Promise((S) => setTimeout(S, 1e3)), i.value = !1, o.value = !1, c(), n("submit", k);
    });
    return ve(i, () => {
      i.value && c({ values: r.values });
    }), t({ setFieldValue: f }), (b, w) => (v(), x(uu, null, {
      fallback: m(() => [
        O(b.$slots, "default")
      ]),
      default: m(() => [
        _(s(nu), {
          open: i.value,
          "onUpdate:open": w[1] || (w[1] = (k) => i.value = k)
        }, {
          default: m(() => [
            b.$slots.default ? (v(), x(s(su), { key: 0 }, {
              default: m(() => [
                O(b.$slots, "default")
              ]),
              _: 3
            })) : Q("", !0),
            _(s(ou), null, {
              default: m(() => [
                _(s(Cb), null, {
                  default: m(() => [
                    _(s(lu), null, {
                      default: m(() => [
                        J(V(e.title), 1)
                      ]),
                      _: 1
                    }),
                    _(s(iu), null, {
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
                  onSubmit: w[0] || (w[0] = Me(
                    //@ts-ignore
                    (...k) => s(h) && s(h)(...k),
                    ["prevent"]
                  ))
                }, [
                  _(dj, { fields: y.value }, null, 8, ["fields"]),
                  Object.keys(p.value).length ? (v(), U("div", $j, [
                    (v(!0), U(xe, null, je(p.value, (k, S) => (v(), U("div", { key: S }, V(k), 1))), 128))
                  ])) : Q("", !0),
                  _(s(yM), null, {
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
function Ok(e, t = "", a = {}) {
  for (const [r, n] of Object.entries(e)) {
    const o = /^\d+$/.test(r) ? `${t}[${r}]` : t ? `${t}.${r}` : r;
    if (n && typeof n == "object") {
      Ok(n, o, a);
      continue;
    }
    a[o] = n;
  }
  return a;
}
class Bj {
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
    return typeof n != "object" || Array.isArray(n) ? !1 : J_(n, t.substring(a.length + 1));
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
    return typeof i != "object" || Array.isArray(i) ? a : it(i, t.substring(n.length + 1), a);
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
    (typeof o != "object" || Array.isArray(o)) && (o = {}), qs(o, t.substring(n.length + 1), a), this.entries.set(n, {
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
    r && (typeof r != "object" || Array.isArray(r) || (oS(r, t.substring(a.length + 1)), this.entries.set(a, {
      key: a,
      source: "runtime",
      value: r
    })));
  }
  clear() {
    this.entries.clear();
  }
  dump() {
    return Ok(this.toRecord());
  }
}
dt.proxy(Bj);
const Dj = { class: "zkit:block zkit:whitespace-pre-wrap zkit:bg-muted zkit:px-4 zkit:py-2 zkit:rounded-md" }, dI = /* @__PURE__ */ q({
  __name: "ObjectInspect",
  props: /* @__PURE__ */ Le({
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
    const t = pe(e, "open"), a = pe(e, "modelValue"), r = M(() => {
      if (typeof a.value == "string") {
        const [n, o] = Gt.sync(() => JSON.parse(a.value));
        return n ? a : o;
      }
      return a;
    });
    return (n, o) => (v(), x(s(nu), {
      open: t.value,
      "onUpdate:open": o[0] || (o[0] = (i) => t.value = i)
    }, {
      default: m(() => [
        _(s(su), { "as-child": "" }, {
          default: m(() => [
            O(n.$slots, "default", {}, () => [
              _(rt, {
                size: "sm",
                variant: "outline"
              }, {
                default: m(() => [
                  _(Re, { name: "eye" })
                ]),
                _: 1
              })
            ])
          ]),
          _: 3
        }),
        _(s(ou), {
          class: ye(s(Y)("sm:max-w-[500px] overflow-auto max-h-[80vh]", e.contentClass))
        }, {
          default: m(() => [
            _(s(Cb), null, {
              default: m(() => [
                _(s(lu), null, {
                  default: m(() => [
                    J(V(e.title), 1)
                  ]),
                  _: 1
                }),
                _(s(iu), null, {
                  default: m(() => [
                    J(V(e.description), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ee("code", Dj, [
              ee("pre", null, V(r.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Mj = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ZAlertButton",
  props: /* @__PURE__ */ Le({
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
  emits: /* @__PURE__ */ Le(["confirm", "fetched"], ["update:loading"]),
  setup(e, { emit: t }) {
    const a = e, r = pe(e, "loading"), n = t;
    async function o() {
      if (!a.fetch) return;
      r.value = !0;
      let [l, u] = [null, null];
      if (typeof a.fetch == "string" && ([l, u] = await At.try(a.fetch, { method: a.fetchMethod })), typeof a.fetch == "function") {
        const d = a.fetch;
        [l, u] = await Gt(() => d());
      }
      if (l) {
        r.value = !1;
        return;
      }
      setTimeout(() => {
        r.value = !1, a.toastOnSuccess && Xn.success(a.toastOnSuccess), n("fetched", u);
      }, 500);
    }
    function i() {
      if (a.fetch)
        return o();
      n("confirm");
    }
    return (l, u) => (v(), x(uu, null, {
      fallback: m(() => [
        _(rt, P(l.$attrs, { loading: r.value }), {
          default: m(() => [
            O(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["loading"])
      ]),
      default: m(() => [
        _(s(TD), null, {
          default: m(() => [
            _(s(GD), { "as-child": "" }, {
              default: m(() => [
                _(rt, P(l.$attrs, { loading: r.value }), {
                  default: m(() => [
                    O(l.$slots, "default")
                  ]),
                  _: 3
                }, 16, ["loading"])
              ]),
              _: 3
            }),
            _(s(RD), null, {
              default: m(() => [
                _(s(WD), null, {
                  default: m(() => [
                    _(s(KD), null, {
                      default: m(() => [
                        J(V(e.title), 1)
                      ]),
                      _: 1
                    }),
                    _(s(LD), null, {
                      default: m(() => [
                        J(V(e.description), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _(s(UD), null, {
                  default: m(() => [
                    _(s(VD), { disabled: r.value }, {
                      default: m(() => [
                        J(V(l.$t("Cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    _(s(ND), {
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
}), Pj = /* @__PURE__ */ q({
  __name: "PageTitle",
  props: {
    tag: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, a) => (v(), x(Sa(e.tag), { class: "zkit:text-2xl zkit:font-bold" }, {
      default: m(() => [
        O(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), jj = /* @__PURE__ */ q({
  __name: "PageSubtitle",
  props: {
    tag: {
      type: String,
      default: "h2"
    }
  },
  setup(e) {
    return (t, a) => (v(), x(Sa(e.tag), { class: "zkit:text-muted-foreground zkit:text-base" }, {
      default: m(() => [
        O(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ij = { class: "zkit:flex zkit:mb-4 zkit:justify-between zkit:items-center zkit:gap-4" }, Fj = { class: "zkit:flex-1" }, Tj = { class: "zkit:flex zkit:items-center zkit:gap-2" }, Nj = { class: "zkit:flex zkit:items-center zkit:gap-2 zkit:justify-end" }, cI = /* @__PURE__ */ q({
  __name: "PageCrud",
  props: /* @__PURE__ */ Le({
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
    function u(c, f) {
      return c.replace(/:([a-zA-Z_]+)/g, (y, p) => f[p]);
    }
    function d() {
      a.value?.load();
    }
    return t({
      load: d
    }), (c, f) => (v(), U("div", null, [
      ee("div", Ij, [
        ee("div", Fj, [
          _(Pj, null, {
            default: m(() => [
              J(V(e.title), 1)
            ]),
            _: 1
          }),
          e.description ? (v(), x(jj, { key: 0 }, {
            default: m(() => [
              J(V(e.description), 1)
            ]),
            _: 1
          })) : Q("", !0)
        ]),
        ee("div", Tj, [
          _(rt, {
            variant: "outline",
            size: "icon",
            disabled: n.value,
            onClick: d
          }, {
            default: m(() => [
              _(Re, {
                name: "RotateCcw",
                class: ye({ "zkit:animate-spin": n.value })
              }, null, 8, ["class"])
            ]),
            _: 1
          }, 8, ["disabled"]),
          e.actions.includes("create") ? (v(), x(uu, { key: 0 }, {
            default: m(() => [
              _(jf, {
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
          })) : Q("", !0)
        ])
      ]),
      O(c.$slots, "header-append"),
      e.fetch ? (v(), x(Ej, {
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
      }, If({
        "row-actions": m(({ row: y }) => [
          ee("div", Nj, [
            O(c.$slots, "prepend-actions", { row: y }),
            e.viewTo ? (v(), x(rt, {
              key: 0,
              size: "icon",
              variant: "ghost",
              to: u(e.viewTo, y)
            }, {
              default: m(() => [
                _(Re, { name: "Eye" })
              ]),
              _: 1
            }, 8, ["to"])) : Q("", !0),
            e.actions.includes("edit") ? (v(), x(jf, {
              key: 1,
              fetch: u(e.fetch + "/:id", y),
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
                    _(Re, { name: "Edit" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["fetch", "method", "title", "description", "fields", "values"])) : Q("", !0),
            e.actions.includes("destroy") ? (v(), x(Mj, {
              key: 2,
              variant: "ghost",
              size: "sm",
              fetch: u(e.fetchDestroy || e.fetch, y),
              "fetch-method": "DELETE",
              onFetched: d
            }, {
              default: m(() => [
                _(Re, { name: "trash" })
              ]),
              _: 1
            }, 8, ["fetch"])) : Q("", !0)
          ])
        ]),
        _: 2
      }, [
        je(o.value.filter((y) => y.id !== "actions"), (y) => ({
          name: `row-${y.id}`,
          fn: m((p) => [
            O(c.$slots, `row-${y.id}`, Pe(Ne(p)))
          ])
        }))
      ]), 1032, ["fetch-query", "loading", "columns", "fetch"])) : Q("", !0)
    ]));
  }
});
class Vj extends ku(bu) {
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
class Rj {
  static __container_entry_key = "MenuService";
  items = /* @__PURE__ */ new Map();
  add(...t) {
    for (const a of t)
      a.id || (a.id = JSON.stringify(a)), this.items.set(a.id, Vj.from(a));
  }
  remove(t) {
    this.items.delete(t);
  }
  list(t = {}) {
    let a = JSON.parse(JSON.stringify(Array.from(this.items.values())));
    return t.layout && (a = a.filter((r) => r.layout === t.layout)), t.group && (a = a.filter((r) => r.group === t.group || r.parent === t.group)), t.parent && (a = a.filter((r) => r.parent === t.parent)), t.allowed !== void 0 && t.allowed === !0 && (a = a.filter((r) => Sk.can("view", r))), a.sort((r, n) => {
      const o = r.order ? r.order : 98, i = n.order ? n.order : 98;
      return o - i;
    }), a;
  }
  clear() {
    this.items.clear();
  }
}
dt.proxy(Rj);
function Lj(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
function Uj(e) {
  return class extends e {
    deleted_at = null;
  };
}
class fI extends ku(bu, Lj, Uj) {
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
class Wj {
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
dt.proxy(Wj);
const Kj = { class: "zkit:flex zkit:items-center" }, Gj = { class: "zkit:flex-1" }, pI = /* @__PURE__ */ q({
  __name: "ZDataTable",
  props: /* @__PURE__ */ Le({
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
    const t = e, a = pe(e, "selected"), r = pe(e, "loading"), n = pe(e, "rows"), o = pe(e, "columns"), i = pe(e, "orderBy"), l = pe(e, "orderDirection"), u = M(() => o.value.map((k, S) => ({
      id: k.id || String(S),
      ...k
    }))), d = M(() => n.value.map((k) => {
      let S = { _raw: k };
      for (const z of u.value)
        S[z.id] = c(k, z);
      return S;
    }));
    function c(k, S) {
      return typeof S.field == "function" ? S.field(k) : it(k, S.field);
    }
    function f(k) {
      if (!t.itemKey) return;
      const S = it(k, t.itemKey);
      if (S)
        return a.value.includes(S);
    }
    function y(k) {
      if (!t.itemKey) return;
      const S = it(k, t.itemKey);
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
    function h(k) {
      if (t.disableSort || k.sortable === !1) return;
      const S = p(), z = g(), $ = S.indexOf(k.id);
      $ !== -1 && z[$] === "desc" ? (S.splice($, 1), z.splice($, 1)) : $ !== -1 ? z[$] = "desc" : (S.push(k.id), z.push("asc")), i.value = S, l.value = z;
    }
    function b(k) {
      return p().includes(k.id);
    }
    function w(k) {
      const S = p(), z = g(), $ = S.indexOf(k.id);
      return $ !== -1 && z[$] === "desc";
    }
    return (k, S) => (v(), x(s(Mb), {
      "wrapper-class": s(Y)("border rounded-lg", t.class, r.value ? "opacity-50 pointer-events-none" : "")
    }, {
      default: m(() => [
        _(s(jb), null, {
          default: m(() => [
            _(s(Na), null, {
              default: m(() => [
                e.enableSelection ? (v(), x(s(ko), {
                  key: 0,
                  class: "zkit:w-[50px]"
                })) : Q("", !0),
                (v(!0), U(xe, null, je(u.value, (z, $) => (v(), x(s(ko), {
                  key: $,
                  class: ye(["zkit:group", [
                    !e.disableSort && z.sortable !== !1 ? "zkit:cursor-pointer zkit:select-none" : ""
                  ]]),
                  onClick: (A) => h(z)
                }, {
                  default: m(() => [
                    ee("div", Kj, [
                      ee("div", Gj, [
                        O(k.$slots, `column-${z.id}`, { column: z }, () => [
                          J(V(z.label), 1)
                        ])
                      ]),
                      !e.disableSort && z.sortable !== !1 ? (v(), x(s(ED), {
                        key: 0,
                        size: 12,
                        class: ye([
                          b(z) ? "" : "zkit:opacity-0 zkit:group-hover:opacity-100",
                          w(z) ? "zkit:rotate-180" : ""
                        ])
                      }, null, 8, ["class"])) : Q("", !0)
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
        _(s(Pb), null, {
          default: m(() => [
            d.value.length === 0 ? (v(), x(s(Na), { key: 0 }, {
              default: m(() => [
                _(s(Ta), {
                  colspan: u.value.length + (e.enableSelection ? 1 : 0),
                  class: "zkit:text-center zkit:py-4"
                }, {
                  default: m(() => [
                    J(V(k.$t("No data")), 1)
                  ]),
                  _: 1
                }, 8, ["colspan"])
              ]),
              _: 1
            })) : Q("", !0),
            (v(!0), U(xe, null, je(d.value, (z, $) => (v(), x(s(Na), { key: $ }, {
              default: m(() => [
                e.enableSelection ? (v(), x(s(Ta), {
                  key: 0,
                  class: "zkit:w-[50px]"
                }, {
                  default: m(() => [
                    _(Xr, {
                      "model-value": f(z),
                      "onUpdate:modelValue": (A) => y(z)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)) : Q("", !0),
                (v(!0), U(xe, null, je(u.value, (A, C) => (v(), x(s(Ta), { key: C }, {
                  default: m(() => [
                    O(k.$slots, `row-${A.id}`, {
                      row: z._raw,
                      column: A
                    }, () => [
                      J(V(z[A.id]), 1)
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
  Zl as $,
  tI as A,
  r3 as B,
  dI as C,
  rI as M,
  p3 as N,
  Jl as O,
  pI as P,
  oI as R,
  fl as S,
  nI as T,
  PM as Y,
  jf as Z,
  Ql as _,
  Re as a,
  Yl as b,
  rj as c,
  O3 as d,
  rt as e,
  eI as f,
  aI as g,
  cI as h,
  sI as i,
  LP as m,
  lI as o,
  iI as r,
  uI as s,
  Ej as t,
  Qj as w,
  cl as x,
  Mj as y
};
