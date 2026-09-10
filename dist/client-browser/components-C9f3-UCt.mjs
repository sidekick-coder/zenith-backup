import { defineComponent as c, ref as p, onBeforeUnmount as a, watchEffect as l } from "vue";
import { o as y } from "./index.es-BISz4hkw.mjs";
function d(e) {
  if (e) {
    if (typeof e == "string")
      return e;
    if (Array.isArray(e)) {
      const t = e[0];
      if (typeof t == "string")
        return t;
      if (t && typeof t == "object" && "children" in t)
        return d(t.children);
    }
  }
}
function f(e, t) {
  const n = e.type, r = n === "html" ? "htmlAttrs" : n === "body" ? "bodyAttrs" : n;
  if (typeof r != "string" || !(r in t))
    return;
  const o = { ...e.props || {} }, i = r === "script" ? "innerHTML" : "textContent";
  if (o.children !== void 0 && (o[i] = o.children, delete o.children), e.children) {
    const s = d(e.children);
    s !== void 0 && (o[i] = s);
  }
  Array.isArray(t[r]) ? t[r].push(o) : r === "title" ? t.title = o.textContent ?? o.innerHTML : t[r] = o;
}
function u(e) {
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
const A = /* @__PURE__ */ c({
  name: "Head",
  setup(e, { slots: t }) {
    const n = p({}), r = y(n);
    return a(() => {
      r.dispose();
    }), () => (l(() => {
      t.default && r.patch(u(t.default()));
    }), null);
  }
});
export {
  A as H
};
