const { Fragment: e } = await globalThis.importAsync("vue"), { createBlock: t } = await globalThis.importAsync("vue"), { createCommentVNode: n } = await globalThis.importAsync("vue"), { createElementBlock: r } = await globalThis.importAsync("vue"), { createTextVNode: i } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { defineComponent: o } = await globalThis.importAsync("vue"), { openBlock: s } = await globalThis.importAsync("vue"), { ref: c } = await globalThis.importAsync("vue"), { renderList: l } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { unref: d } = await globalThis.importAsync("vue"), { withCtx: f } = await globalThis.importAsync("vue"), { withModifiers: p } = await globalThis.importAsync("vue"), { useForm: m } = await globalThis.importAsync("vee-validate"), { toast: h } = await globalThis.importAsync("vue-sonner"), g = await globalThis.importAsync("#client/components/Button.vue"), _ = g.default || g, v = await globalThis.importAsync("#client/components/ui/card/Card.vue"), y = v.default || v, b = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), x = b.default || b, S = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), C = S.default || S, w = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), T = w.default || w, E = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), D = E.default || E, O = await globalThis.importAsync("#client/components/ui/card/CardFooter.vue"), k = O.default || O, { $fetch: A } = await globalThis.importAsync("#client/utils/fetcher.ts"), j = await globalThis.importAsync("#client/components/FormAutoFieldList.vue"), M = j.default || j;
//#endregion
//#region modules/mod/client/components/PlanConfig.vue
var N = /* @__PURE__ */ o({
	__name: "PlanConfig",
	props: { plan: {} },
	setup(o) {
		let g = o, v = c(!1), { handleSubmit: b } = m({ initialValues: g.plan?.config || {} }), S = b(async (e) => {
			v.value = !0;
			let [t] = await A.try(`/api/zbackup/plans/${g.plan.id}`, {
				method: "PATCH",
				data: { config: e }
			});
			if (t) {
				v.value = !1;
				return;
			}
			setTimeout(() => {
				h.success($t("Updated successfully")), v.value = !1;
			}, 800);
		});
		return (c, m) => (s(), r("form", { onSubmit: m[0] ||= p((...e) => d(S) && d(S)(...e), ["prevent"]) }, [a(y, null, {
			default: f(() => [
				o.plan.strategy_fields && Object.keys(o.plan.strategy_fields).length ? (s(), r(e, { key: 0 }, [a(x, null, {
					default: f(() => [a(C, null, {
						default: f(() => [i(u(c.$t("Config")), 1)]),
						_: 1
					}), a(T, null, {
						default: f(() => [i(u(c.$t("Configure the backup strategy for the plan.")), 1)]),
						_: 1
					})]),
					_: 1
				}), a(D, { class: "space-y-6" }, {
					default: f(() => [g.plan.strategy_fields ? (s(), t(M, {
						key: 0,
						fields: g.plan.strategy_fields
					}, null, 8, ["fields"])) : n("", !0)]),
					_: 1
				})], 64)) : n("", !0),
				(s(!0), r(e, null, l(o.plan.strategy_fields_sections, (o) => (s(), r(e, { key: o.title }, [a(x, null, {
					default: f(() => [a(C, null, {
						default: f(() => [i(u(o.title), 1)]),
						_: 2
					}, 1024), o.description ? (s(), t(T, { key: 0 }, {
						default: f(() => [i(u(o.description), 1)]),
						_: 2
					}, 1024)) : n("", !0)]),
					_: 2
				}, 1024), a(D, { class: "space-y-6" }, {
					default: f(() => [a(M, { fields: o.fields }, null, 8, ["fields"])]),
					_: 2
				}, 1024)], 64))), 128)),
				a(k, { class: "flex justify-end gap-4" }, {
					default: f(() => [a(_, {
						type: "submit",
						loading: v.value
					}, {
						default: f(() => [i(u(c.$t("Save")), 1)]),
						_: 1
					}, 8, ["loading"])]),
					_: 1
				})
			]),
			_: 1
		})], 32));
	}
});
//#endregion
export { N as default };
