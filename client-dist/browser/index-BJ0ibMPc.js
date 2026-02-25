const { getCurrentScope: S } = await globalThis.importAsync("vue"), { onScopeDispose: R } = await globalThis.importAsync("vue"), { customRef: d } = await globalThis.importAsync("vue"), { toValue: a } = await globalThis.importAsync("vue"), { nextTick: k } = await globalThis.importAsync("vue"), { watch: v } = await globalThis.importAsync("vue"), { useRoute: x } = await globalThis.importAsync("vue-router"), { useRouter: D } = await globalThis.importAsync("vue-router");
function G(s, n) {
  return S() ? (R(s, n), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const p = /* @__PURE__ */ new WeakMap();
function Q(s, n, h = {}) {
  const { mode: m = "replace", route: l = x(), router: i = D(), transform: t } = h;
  let u = (e) => e, f = (e) => e;
  typeof t == "function" ? u = t : t && (t.get && (u = t.get), t.set && (f = t.set)), p.has(i) || p.set(i, /* @__PURE__ */ new Map());
  const c = p.get(i);
  let o = l.query[s];
  G(() => {
    o = void 0;
  });
  let y;
  const w = d((e, g) => (y = g, {
    get() {
      return e(), u(o !== void 0 ? o : a(n));
    },
    set(r) {
      r = f(r), o !== r && (o = r === a(n) ? void 0 : r, c.set(s, r === a(n) ? void 0 : r), g(), k(() => {
        if (c.size === 0) return;
        const b = Object.fromEntries(c.entries());
        c.clear();
        const { params: T, query: q, hash: A } = l;
        i[a(m)]({
          params: T,
          query: {
            ...q,
            ...b
          },
          hash: A
        });
      }));
    }
  }));
  return v(() => l.query[s], (e) => {
    o !== u(e) && (o = e, y());
  }, { flush: "sync" }), w;
}
export {
  Q as u
};
