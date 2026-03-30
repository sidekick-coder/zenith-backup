import { t as e } from "./plan.entity-BSo3RcyE.js";
const { Fragment: t } = await globalThis.importAsync("vue"), { createBlock: n } = await globalThis.importAsync("vue"), { createCommentVNode: r } = await globalThis.importAsync("vue"), { createElementBlock: i } = await globalThis.importAsync("vue"), { createElementVNode: a } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { defineComponent: s } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { ref: l } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { unref: d } = await globalThis.importAsync("vue"), { withCtx: f } = await globalThis.importAsync("vue"), p = await globalThis.importAsync("#client/components/Button.vue"), m = p.default || p, { defineFormFields: h } = await globalThis.importAsync("#client/components/FormAutoFieldList.vue"), { defineColumns: g } = await globalThis.importAsync("#client/components/DataTable.vue"), _ = await globalThis.importAsync("#client/components/Icon.vue"), v = _.default || _, { $fetch: y } = await globalThis.importAsync("#client/utils"), b = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), x = b.default || b, { Head: S } = await globalThis.importAsync("@unhead/vue/components"), C = await globalThis.importAsync("#client/components/PageCrud.vue"), w = C.default || C, T = await globalThis.importAsync("#client/components/ui/switch/Switch.vue"), E = T.default || T;
//#region modules/mod/client/pages/admin/plans/index.vue?vue&type=script&setup=true&lang.ts
var D = ["content"], O = /* @__PURE__ */ s({
	__name: "index",
	setup(r) {
		let s = l(), p = l([]), _ = h({
			id: {
				component: "text-field",
				label: "ID"
			},
			name: {
				component: "text-field",
				label: $t("Name")
			},
			strategy: {
				component: "select",
				label: $t("Strategy"),
				labelKey: "label",
				valueKey: "id",
				descriptionKey: "description",
				fetch: "/api/zbackup/plans/strategies"
			}
		}), b = g([
			{
				id: "active",
				label: $t("Active"),
				field: "active",
				width: 80
			},
			{
				id: "id",
				label: "ID",
				field: "id"
			},
			{
				id: "name",
				label: $t("Name"),
				field: "name"
			},
			{
				id: "strategy",
				label: $t("Strategy"),
				field: "strategy_label"
			},
			{ id: "actions" }
		]);
		async function C() {
			s.value?.load();
		}
		async function T(e) {
			p.value.push(e.id), await y(`/api/zbackup/plans/${e.id}`, {
				method: "PUT",
				data: { active: !e.active }
			}), setTimeout(() => {
				C(), p.value = p.value.filter((t) => t !== e.id);
			}, 500);
		}
		return (r, l) => (c(), i(t, null, [o(d(S), null, {
			default: f(() => [a("title", null, u(r.$t("Plans")), 1), a("meta", {
				name: "description",
				content: r.$t("Manage your backup plans")
			}, null, 8, D)]),
			_: 1
		}), o(x, null, {
			default: f(() => [o(w, {
				ref_key: "crudRef",
				ref: s,
				fetch: "/api/zbackup/plans",
				"fetch-destroy": "/api/zbackup/plans/:id",
				fields: d(_),
				"fields-edit": {
					name: d(_).name,
					cron: d(_).cron,
					max: d(_).max
				},
				columns: d(b),
				title: r.$t("Plans"),
				description: r.$t("Manage your backup plans"),
				serialize: (t) => new (d(e))(t),
				actions: ["create", "destroy"]
			}, {
				"row-active": f(({ row: e }) => [p.value.includes(e.id) ? (c(), n(v, {
					key: 0,
					name: "Loader2",
					class: "animate-spin"
				})) : (c(), n(E, {
					key: 1,
					"model-value": !!e.active,
					onClick: (t) => T(e)
				}, null, 8, ["model-value", "onClick"]))]),
				"row-valid": f(({ row: e }) => [e.valid ? (c(), n(v, {
					key: 0,
					name: "CheckCircle2",
					class: "text-green-500 size-5"
				})) : (c(), n(v, {
					key: 1,
					name: "AlertCircle",
					class: "text-yellow-500 size-5"
				}))]),
				"prepend-actions": f(({ row: e }) => [o(m, {
					size: "icon",
					variant: "ghost",
					to: `/admin/zbackup/plans/${e.id}`
				}, {
					default: f(() => [o(v, { name: "Edit" })]),
					_: 1
				}, 8, ["to"])]),
				_: 1
			}, 8, [
				"fields",
				"fields-edit",
				"columns",
				"title",
				"description",
				"serialize"
			])]),
			_: 1
		})], 64));
	}
});
//#endregion
export { O as default };
