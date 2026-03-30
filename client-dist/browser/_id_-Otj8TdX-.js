import { t as e } from "./dist-BVAvDX8G.js";
const { Fragment: t } = await globalThis.importAsync("vue"), { computed: n } = await globalThis.importAsync("vue"), { createBlock: r } = await globalThis.importAsync("vue"), { createCommentVNode: i } = await globalThis.importAsync("vue"), { createElementBlock: a } = await globalThis.importAsync("vue"), { createElementVNode: o } = await globalThis.importAsync("vue"), { createTextVNode: s } = await globalThis.importAsync("vue"), { createVNode: c } = await globalThis.importAsync("vue"), { defineAsyncComponent: l } = await globalThis.importAsync("vue"), { defineComponent: u } = await globalThis.importAsync("vue"), { isRef: d } = await globalThis.importAsync("vue"), { onMounted: f } = await globalThis.importAsync("vue"), { openBlock: p } = await globalThis.importAsync("vue"), { ref: m } = await globalThis.importAsync("vue"), { renderList: h } = await globalThis.importAsync("vue"), { resolveDynamicComponent: g } = await globalThis.importAsync("vue"), { toDisplayString: _ } = await globalThis.importAsync("vue"), { unref: v } = await globalThis.importAsync("vue"), { withCtx: y } = await globalThis.importAsync("vue"), { $fetch: b } = await globalThis.importAsync("#client/utils/fetcher.ts"), { tryCatch: x } = await globalThis.importAsync("#shared/utils/tryCatch.ts"), { Card: S } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: C } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: w } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: T } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: E } = await globalThis.importAsync("#client/components/ui/card"), { useRoute: D } = await globalThis.importAsync("vue-router"), O = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), k = O.default || O, { Tabs: A } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: j } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: M } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: N } = await globalThis.importAsync("#client/components/ui/tabs");
//#region modules/mod/client/pages/admin/targets/[id].vue?vue&type=script&setup=true&lang.ts
var P = { class: "flex gap-6 h-full" }, F = { class: "w-full lg:w-4/12 xl:w-3/12" }, I = {
	key: 0,
	class: "space-y-4"
}, L = {
	key: 1,
	class: "space-y-6"
}, R = { class: "text-sm font-medium text-gray-700 block mb-1" }, z = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, B = { class: "text-sm font-medium text-gray-700 block mb-1" }, V = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, H = { class: "text-sm font-medium text-gray-700 block mb-1" }, U = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, W = { class: "text-sm font-medium text-gray-700 block mb-1" }, G = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, K = {
	key: 2,
	class: "text-center py-8"
}, q = { class: "text-gray-500" }, J = { class: "flex-1" }, Y = /* @__PURE__ */ u({
	__name: "[id]",
	setup(u) {
		let O = D().params.id, Y = e("tab", "config"), X = m(), Z = m(), Q = m(!1), $ = n(() => {
			let e = [{
				value: "snapshots",
				label: $t("Snapshots"),
				component: l(() => import("./SnapshotTable-wIHbOtfb.js"))
			}];
			return Z.value?.strategy === "tar" && e.splice(0, 0, {
				value: "config",
				label: $t("Config"),
				component: l(() => import("./TargetTarForm--zGh35vi.js"))
			}), e;
		});
		async function ee() {
			let [e, t] = await x(() => b(`/api/backup/targets/${O}`, { method: "GET" }));
			e || (X.value = t, Q.value = !1);
		}
		async function te() {
			if (!X.value?.plan_id) return;
			let [e, t] = await x(() => b(`/api/backup/plans/${X.value?.plan_id}`));
			e || (Z.value = t);
		}
		async function ne() {
			Q.value = !0, await ee(), await te(), setTimeout(() => {
				Q.value = !1;
			}, 800);
		}
		return f(() => {
			ne();
		}), (e, n) => (p(), r(k, { breadcrumbs: [
			{
				label: e.$t("Backup"),
				to: "/admin/backup"
			},
			{
				label: e.$t("Plans"),
				to: "/admin/backup/plans"
			},
			{
				label: Z.value?.name || e.$t("Plan"),
				to: `/admin/backup/plans/${Z.value?.id}`
			},
			{ label: X.value?.name || e.$t("Target Details") }
		] }, {
			default: y(() => [o("div", P, [o("div", F, [c(v(S), { class: "h-fit" }, {
				default: y(() => [c(v(T), null, {
					default: y(() => [c(v(E), null, {
						default: y(() => [s(_(e.$t("Target Details")), 1)]),
						_: 1
					}), c(v(w), null, {
						default: y(() => [s(_(e.$t("Basic information about this target")), 1)]),
						_: 1
					})]),
					_: 1
				}), c(v(C), null, {
					default: y(() => [
						Q.value ? (p(), a("div", I, [...n[3] ||= [
							o("div", { class: "animate-pulse" }, [o("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), o("div", { class: "h-3 bg-gray-100 rounded w-1/2" })], -1),
							o("div", { class: "animate-pulse" }, [o("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), o("div", { class: "h-3 bg-gray-100 rounded w-1/2" })], -1),
							o("div", { class: "animate-pulse" }, [o("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), o("div", { class: "h-3 bg-gray-100 rounded w-full" })], -1)
						]])) : i("", !0),
						!Q.value && X.value ? (p(), a("div", L, [
							o("div", null, [o("label", R, _(e.$t("ID")), 1), o("p", z, _(X.value.id), 1)]),
							o("div", null, [o("label", B, _(e.$t("Path")), 1), o("p", V, _(X.value.path), 1)]),
							o("div", null, [o("label", H, _(e.$t("Created At")), 1), o("p", U, _(new Date(X.value.created_at).toLocaleString()), 1)]),
							o("div", null, [o("label", W, _(e.$t("Updated At")), 1), o("p", G, _(new Date(X.value.updated_at).toLocaleString()), 1)])
						])) : i("", !0),
						!Q.value && !X.value ? (p(), a("div", K, [o("p", q, _(e.$t("Target not found")), 1)])) : i("", !0)
					]),
					_: 1
				})]),
				_: 1
			})]), o("div", J, [c(v(A), {
				modelValue: v(Y),
				"onUpdate:modelValue": n[2] ||= (e) => d(Y) ? Y.value = e : null,
				"default-value": "general"
			}, {
				default: y(() => [c(v(M), null, {
					default: y(() => [(p(!0), a(t, null, h($.value, (e) => (p(), r(v(N), {
						key: e.value,
						value: e.value,
						class: "min-w-60"
					}, {
						default: y(() => [s(_(e.label), 1)]),
						_: 2
					}, 1032, ["value"]))), 128))]),
					_: 1
				}), (p(!0), a(t, null, h($.value, (e) => (p(), r(v(j), {
					key: e.value,
					value: e.value
				}, {
					default: y(() => [e.component && Z.value && X.value ? (p(), r(g(e.component), {
						key: 0,
						target: X.value,
						"onUpdate:target": n[0] ||= (e) => X.value = e,
						plan: Z.value,
						"onUpdate:plan": n[1] ||= (e) => Z.value = e,
						"plan-id": Z.value.id,
						"target-id": X.value.id
					}, null, 40, [
						"target",
						"plan",
						"plan-id",
						"target-id"
					])) : i("", !0)]),
					_: 2
				}, 1032, ["value"]))), 128))]),
				_: 1
			}, 8, ["modelValue"])])])]),
			_: 1
		}, 8, ["breadcrumbs"]));
	}
});
//#endregion
export { Y as default };
