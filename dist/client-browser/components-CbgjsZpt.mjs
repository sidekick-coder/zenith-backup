import { isRef as y, toValue as m, hasInjectionContext as A, inject as v, ref as d, getCurrentScope as H, watchEffect as u, getCurrentInstance as x, onBeforeUnmount as a, onDeactivated as b, onActivated as C, defineComponent as _ } from "vue";
function c(e, t, n) {
  if (n === "_resolver")
    return e;
  typeof e == "function" && (!n || n !== "titleTemplate" && !n.startsWith("on")) && (e = e());
  const r = t ? t(n, e) : e;
  if (Array.isArray(r))
    return r.map((o) => c(o, t));
  if (r?.constructor === Object) {
    const o = {};
    for (const i in r)
      i === "__proto__" || i === "constructor" || i === "prototype" || (o[i] = c(r[i], t, i));
    return o;
  }
  return r;
}
const R = "usehead", T = (e, t) => y(t) ? m(t) : t;
// @__NO_SIDE_EFFECTS__
function g() {
  if (A()) {
    const e = v(R);
    if (e)
      return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function w(e, t = {}) {
  const n = t.head || /* @__PURE__ */ g();
  return n.ssr ? n.push(e || {}, t) : j(n, e, t);
}
function j(e, t, n = {}) {
  const r = d(!1);
  if (n.onRendered) {
    const s = H();
    if (s) {
      const p = n.onRendered;
      n = { ...n, onRendered: (h) => s.run(() => p(h)) };
    }
  }
  let o;
  return u(() => {
    const s = r.value ? {} : c(t, T);
    o ? o.patch(s) : o = e.push(s, n);
  }), x() && (a(() => {
    o.dispose();
  }), b(() => {
    r.value = !0;
  }), C(() => {
    r.value = !1;
  })), o;
}
function l(e) {
  if (e) {
    if (typeof e == "string")
      return e;
    if (Array.isArray(e)) {
      const t = e[0];
      if (typeof t == "string")
        return t;
      if (t && typeof t == "object" && "children" in t)
        return l(t.children);
    }
  }
}
function f(e, t) {
  const n = e.type, r = n === "html" ? "htmlAttrs" : n === "body" ? "bodyAttrs" : n;
  if (typeof r != "string" || !(r in t))
    return;
  const o = { ...e.props || {} }, i = r === "script" ? "innerHTML" : "textContent";
  if (o.children !== void 0 && (o[i] = o.children, delete o.children), e.children) {
    const s = l(e.children);
    s !== void 0 && (o[i] = s);
  }
  Array.isArray(t[r]) ? t[r].push(o) : r === "title" ? t.title = o.textContent ?? o.innerHTML : t[r] = o;
}
function O(e) {
  const t = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const n of e)
    if (typeof n.type == "symbol" && Array.isArray(n.children))
      for (const r of n.children)
        f(r, t);
    else
      f(n, t);
  return t;
}
const E = /* @__PURE__ */ _({
  name: "Head",
  setup(e, { slots: t }) {
    const n = d({}), r = w(n);
    return a(() => {
      r.dispose();
    }), () => (u(() => {
      t.default && r.patch(O(t.default()));
    }), null);
  }
});
export {
  E as H
};
