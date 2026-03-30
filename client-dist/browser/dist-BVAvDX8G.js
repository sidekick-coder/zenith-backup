const { computed: e } = await globalThis.importAsync("vue"), { customRef: t } = await globalThis.importAsync("vue"), { getCurrentScope: n } = await globalThis.importAsync("vue"), { isRef: r } = await globalThis.importAsync("vue"), { nextTick: i } = await globalThis.importAsync("vue"), { onMounted: a } = await globalThis.importAsync("vue"), { onScopeDispose: o } = await globalThis.importAsync("vue"), { ref: s } = await globalThis.importAsync("vue"), { toValue: c } = await globalThis.importAsync("vue"), { unref: l } = await globalThis.importAsync("vue"), { watch: u } = await globalThis.importAsync("vue"), { useRoute: d } = await globalThis.importAsync("vue-router"), { useRouter: f } = await globalThis.importAsync("vue-router");
//#region node_modules/@vueuse/router/node_modules/@vueuse/shared/dist/index.js
function p(e, t) {
	return n() ? (o(e, t), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var m = /* @__PURE__ */ new WeakMap();
function h(e, n, r = {}) {
	let { mode: a = "replace", route: o = d(), router: s = f(), transform: l } = r, h = (e) => e, g = (e) => e;
	typeof l == "function" ? h = l : l && (l.get && (h = l.get), l.set && (g = l.set)), m.has(s) || m.set(s, /* @__PURE__ */ new Map());
	let _ = m.get(s), v = o.query[e];
	p(() => {
		v = void 0;
	});
	let y, b = t((t, r) => (y = r, {
		get() {
			return t(), h(v === void 0 ? c(n) : v);
		},
		set(t) {
			t = g(t), v !== t && (v = t === c(n) ? void 0 : t, _.set(e, t === c(n) ? void 0 : t), r(), i(() => {
				if (_.size === 0) return;
				let e = Object.fromEntries(_.entries());
				_.clear();
				let { params: t, query: n, hash: r } = o;
				s[c(a)]({
					params: t,
					query: {
						...n,
						...e
					},
					hash: r
				});
			}));
		}
	}));
	return u(() => o.query[e], (e) => {
		v !== h(e) && (v = e, y());
	}, { flush: "sync" }), b;
}
//#endregion
export { h as t };
