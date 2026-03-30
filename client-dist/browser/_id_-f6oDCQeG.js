import { t as e } from "./dist-BVAvDX8G.js";
const { Fragment: t } = await globalThis.importAsync("vue"), { computed: n } = await globalThis.importAsync("vue"), { createBlock: r } = await globalThis.importAsync("vue"), { createCommentVNode: i } = await globalThis.importAsync("vue"), { createElementBlock: a } = await globalThis.importAsync("vue"), { createElementVNode: o } = await globalThis.importAsync("vue"), { createTextVNode: s } = await globalThis.importAsync("vue"), { createVNode: c } = await globalThis.importAsync("vue"), { defineAsyncComponent: l } = await globalThis.importAsync("vue"), { defineComponent: u } = await globalThis.importAsync("vue"), { isRef: d } = await globalThis.importAsync("vue"), { onMounted: f } = await globalThis.importAsync("vue"), { onServerPrefetch: p } = await globalThis.importAsync("vue"), { openBlock: m } = await globalThis.importAsync("vue"), { ref: h } = await globalThis.importAsync("vue"), { renderList: g } = await globalThis.importAsync("vue"), { resolveDynamicComponent: _ } = await globalThis.importAsync("vue"), { toDisplayString: v } = await globalThis.importAsync("vue"), { unref: y } = await globalThis.importAsync("vue"), { watch: b } = await globalThis.importAsync("vue"), { withCtx: x } = await globalThis.importAsync("vue"), { withModifiers: S } = await globalThis.importAsync("vue"), { useForm: C } = await globalThis.importAsync("vee-validate"), { toast: w } = await globalThis.importAsync("vue-sonner"), T = await globalThis.importAsync("#client/components/Button.vue"), E = T.default || T, { $fetch: D } = await globalThis.importAsync("#client/utils/fetcher.ts"), O = await globalThis.importAsync("#client/components/Icon.vue"), k = O.default || O, { Card: A } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: j } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: M } = await globalThis.importAsync("#client/components/ui/card"), { CardFooter: N } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: P } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: F } = await globalThis.importAsync("#client/components/ui/card"), I = await globalThis.importAsync("#client/components/DialogForm.vue"), L = I.default || I, R = await globalThis.importAsync("#client/components/FormTextField.vue"), z = R.default || R, { useRoute: B } = await globalThis.importAsync("vue-router"), { useRouter: V } = await globalThis.importAsync("vue-router"), { useHead: H } = await globalThis.importAsync("@unhead/vue"), U = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), W = U.default || U, G = await globalThis.importAsync("#client/facades/fetch.facade.ts"), K = G.default || G, q = await globalThis.importAsync("#client/components/FormTextarea.vue"), J = q.default || q, Y = await globalThis.importAsync("#client/components/FormSwitch.vue"), X = Y.default || Y, { Tabs: Z } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: Q } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: $ } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: ee } = await globalThis.importAsync("#client/components/ui/tabs"), { useState: te } = await globalThis.importAsync("#client/composables/useState.ts");
//#endregion
//#region modules/mod/client/components/PlanDetails.vue
var ne = /* @__PURE__ */ u({
	__name: "PlanDetails",
	props: {
		plan: {},
		planId: {}
	},
	setup(e) {
		let t = e, n = h(!1), { handleSubmit: r, setValues: i } = C({ initialValues: t.plan }), o = r(async (e) => {
			n.value = !0;
			let [r] = await D.try(`/api/zbackup/plans/${t.planId}`, {
				method: "PATCH",
				data: {
					name: e.name,
					description: e.description,
					active: e.active
				}
			});
			if (r) {
				n.value = !1, w.error($t("Failed to update."));
				return;
			}
			setTimeout(() => {
				n.value = !1, w.success($t("Updated successfully."));
			}, 800);
		});
		b(() => t.plan, (e) => {
			e && i({
				name: e.name,
				description: e.description || ""
			});
		}, { immediate: !0 });
		let l = h(!1);
		async function u(e) {
			l.value = !0;
			let [n] = await D.try(`/api/zbackup/plans/${t.planId}/backup`, {
				method: "POST",
				data: e
			});
			if (n) {
				l.value = !1;
				return;
			}
			setTimeout(() => {
				w.success($t("Executed")), l.value = !1;
			}, 800);
		}
		return (e, t) => (m(), a("form", { onSubmit: t[0] ||= S((...e) => y(o) && y(o)(...e), ["prevent"]) }, [c(y(A), null, {
			default: x(() => [
				c(y(P), null, {
					default: x(() => [c(y(F), null, {
						default: x(() => [s(v(e.$t("Plan details")), 1)]),
						_: 1
					}), c(y(M), null, {
						default: x(() => [s(v(e.$t("Edit details and configuration.")), 1)]),
						_: 1
					})]),
					_: 1
				}),
				c(y(j), { class: "space-y-6" }, {
					default: x(() => [
						c(z, {
							name: "name",
							label: e.$t("Name"),
							placeholder: e.$t("Enter plan name")
						}, null, 8, ["label", "placeholder"]),
						c(X, {
							name: "active",
							label: e.$t("Active"),
							hint: e.$t("Activate or deactivate this backup plan")
						}, null, 8, ["label", "hint"]),
						c(J, {
							name: "description",
							label: e.$t("Description"),
							placeholder: e.$t("Enter plan description"),
							hint: e.$t("Optional description for this backup plan")
						}, null, 8, [
							"label",
							"placeholder",
							"hint"
						])
					]),
					_: 1
				}),
				c(y(N), { class: "flex justify-end gap-4" }, {
					default: x(() => [c(L, {
						title: e.$t("Execute Backup"),
						description: e.$t("Execute a manual backup for this plan."),
						"submit-text": e.$t("Run Backup"),
						handle: u,
						fields: { description: {
							component: "text-field",
							label: e.$t("Description")
						} }
					}, {
						default: x(() => [c(E, {
							variant: "outline",
							loading: l.value
						}, {
							default: x(() => [c(k, { name: "play" }), s(" " + v(e.$t("Run")), 1)]),
							_: 1
						}, 8, ["loading"])]),
						_: 1
					}, 8, [
						"title",
						"description",
						"submit-text",
						"fields"
					]), c(E, {
						type: "submit",
						loading: n.value
					}, {
						default: x(() => [s(v(e.$t("Save")), 1)]),
						_: 1
					}, 8, ["loading"])]),
					_: 1
				})
			]),
			_: 1
		})], 32));
	}
}), re = {
	key: 0,
	class: "flex justify-center items-center h-64"
}, ie = { class: "text-lg" }, ae = {
	key: 1,
	class: "flex gap-6 h-full"
}, oe = { class: "w-full lg:w-4/12 xl:w-3/12" }, se = { class: "flex-1" }, ce = /* @__PURE__ */ u({
	__name: "[id]",
	setup(u) {
		let b = B(), S = V(), C = n(() => String(b.params.id)), T = te(`zbackup-plan-${C.value}`), E = e("tab", "config"), D = h(!1), O = [
			{
				value: "config",
				label: $t("Configuration"),
				component: l(() => import("./PlanConfig-CWBot5Fr.js"))
			},
			{
				value: "triggers",
				label: $t("Triggers"),
				component: l(() => import("./PlanTriggers-BC_yHO7Z.js"))
			},
			{
				value: "snapshots",
				label: $t("Snapshots"),
				component: l(() => import("./SnapshotTable-BNGZ7Ut9.js"))
			}
		];
		async function k() {
			D.value = !0;
			let [e, t] = await K.try(`/api/zbackup/plans/${C.value}`);
			if (e) {
				D.value = !1, w.error($t("Failed to load plan details.")), S.push("/admin/zbackup/plans");
				return;
			}
			T.value = t, D.value = !1;
		}
		return H({ title: () => T.value ? T.value.name : $t("Loading...") }), f(async () => {
			T.value || await k();
		}), p(async () => {
			T.value || await k();
		}), (e, n) => (m(), r(W, { breadcrumbs: [
			{
				label: e.$t("Backup"),
				to: "/admin/backup"
			},
			{
				label: e.$t("Plans"),
				to: "/admin/backup/plans"
			},
			{
				label: y(T)?.name || e.$t("Plan"),
				to: `/admin/backup/plans/${y(T)?.id}`
			}
		] }, {
			default: x(() => [D.value ? (m(), a("div", re, [o("div", ie, v(e.$t("Loading...")), 1)])) : i("", !0), !D.value && y(T) ? (m(), a("div", ae, [o("div", oe, [c(ne, {
				plan: y(T),
				"plan-id": C.value
			}, null, 8, ["plan", "plan-id"])]), o("div", se, [c(y(Z), {
				modelValue: y(E),
				"onUpdate:modelValue": n[0] ||= (e) => d(E) ? E.value = e : null,
				"default-value": "configuration"
			}, {
				default: x(() => [c(y($), null, {
					default: x(() => [(m(), a(t, null, g(O, (e) => c(y(ee), {
						key: e.value,
						value: e.value,
						class: "min-w-60"
					}, {
						default: x(() => [s(v(e.label), 1)]),
						_: 2
					}, 1032, ["value"])), 64))]),
					_: 1
				}), (m(), a(t, null, g(O, (e) => c(y(Q), {
					key: e.value,
					value: e.value
				}, {
					default: x(() => [e.component && y(T) ? (m(), r(_(e.component), {
						key: 0,
						plan: y(T),
						"plan-id": C.value
					}, null, 8, ["plan", "plan-id"])) : i("", !0)]),
					_: 2
				}, 1032, ["value"])), 64))]),
				_: 1
			}, 8, ["modelValue"])])])) : i("", !0)]),
			_: 1
		}, 8, ["breadcrumbs"]));
	}
});
//#endregion
export { ce as default };
