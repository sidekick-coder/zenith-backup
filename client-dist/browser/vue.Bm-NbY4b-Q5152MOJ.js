const { toValue: r } = await globalThis.importAsync("vue"), { isRef: u } = await globalThis.importAsync("vue"), { hasInjectionContext: l } = await globalThis.importAsync("vue"), { inject: f } = await globalThis.importAsync("vue"), { ref: h } = await globalThis.importAsync("vue"), { watchEffect: p } = await globalThis.importAsync("vue"), { getCurrentInstance: w } = await globalThis.importAsync("vue"), { onBeforeUnmount: d } = await globalThis.importAsync("vue"), { onDeactivated: m } = await globalThis.importAsync("vue"), { onActivated: v } = await globalThis.importAsync("vue");
function c(e, t, o) {
  typeof e === "function" && (!o || o !== "titleTemplate" && !(o[0] === "o" && o[1] === "n")) && (e = e());
  let n;
  if (t && (n = t(o, e)), Array.isArray(n))
    return n.map((s) => c(s, t));
  if (n?.constructor === Object) {
    const s = {};
    for (const a of Object.keys(n))
      s[a] = c(n[a], t, a);
    return s;
  }
  return n;
}
const y = (e, t) => u(t) ? r(t) : t, g = "usehead";
// @__NO_SIDE_EFFECTS__
function A() {
  if (l()) {
    const e = f(g);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function T(e, t = {}) {
  const o = t.head || /* @__PURE__ */ A();
  return o.ssr ? o.push(e || {}, t) : b(o, e, t);
}
function b(e, t, o = {}) {
  const i = h(!1);
  let n;
  return p(() => {
    const a = i.value ? {} : c(t, y);
    n ? n.patch(a) : n = e.push(a, o);
  }), w() && (d(() => {
    n.dispose();
  }), m(() => {
    i.value = !0;
  }), v(() => {
    i.value = !1;
  })), n;
}
export {
  T as u
};
