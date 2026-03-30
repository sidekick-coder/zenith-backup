import { t as e } from "./format-Ci4eIQu6.js";
import { t } from "./snapshot.entity-C5x816iC.js";
const { createBlock: n } = await globalThis.importAsync("vue"), { createCommentVNode: r } = await globalThis.importAsync("vue"), { createElementBlock: i } = await globalThis.importAsync("vue"), { createElementVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: o } = await globalThis.importAsync("vue"), { createVNode: s } = await globalThis.importAsync("vue"), { defineComponent: c } = await globalThis.importAsync("vue"), { openBlock: l } = await globalThis.importAsync("vue"), { ref: u } = await globalThis.importAsync("vue"), { resolveComponent: d } = await globalThis.importAsync("vue"), { toDisplayString: f } = await globalThis.importAsync("vue"), { unref: p } = await globalThis.importAsync("vue"), { withCtx: m } = await globalThis.importAsync("vue"), { defineColumns: h } = await globalThis.importAsync("#client/components/DataTable.vue"), g = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), _ = g.default || g, v = await globalThis.importAsync("#client/components/PageCrud.vue"), y = v.default || v;
//#region modules/mod/client/pages/admin/snapshots/index.vue?vue&type=script&setup=true&lang.ts
var b = {
	key: 0,
	class: "text-sm text-muted-foreground"
}, x = /* @__PURE__ */ c({
	__name: "index",
	setup(c) {
		let g = u(), v = h([
			{
				id: "id",
				label: "ID",
				field: "id"
			},
			{
				id: "plan",
				label: $t("Plan")
			},
			{
				id: "description",
				label: $t("Description"),
				field: "description"
			},
			{
				id: "origin",
				label: $t("Origin"),
				field: "origin"
			},
			{
				id: "size",
				label: $t("Size"),
				field: "humanSize"
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (t) => t.created_at ? e(new Date(t.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
			},
			{ id: "actions" }
		]);
		return (e, c) => {
			let u = d("router-link");
			return l(), n(_, null, {
				default: m(() => [s(y, {
					ref_key: "crudRef",
					ref: g,
					fetch: "/api/zbackup/snapshots",
					"fetch-destroy": "/api/zbackup/plans/:plan_id/snapshots/:id",
					columns: p(v),
					title: e.$t("Snapshots"),
					description: e.$t("Snapshot list created from plans."),
					serialize: (e) => new (p(t))(e),
					actions: ["destroy"]
				}, {
					"row-plan": m(({ row: t }) => [s(u, {
						class: "text-primary hover:underline",
						to: `/admin/zbackup/plans/${t.plan_id}`
					}, {
						default: m(() => [o(f(t.plan?.name || e.$t("No plan")), 1)]),
						_: 2
					}, 1032, ["to"])]),
					"row-label": m(({ row: t }) => [a("span", null, f(t.label || e.$t("No label")), 1), t.description ? (l(), i("div", b, f(t.description), 1)) : r("", !0)]),
					_: 1
				}, 8, [
					"columns",
					"title",
					"description",
					"serialize"
				])]),
				_: 1
			});
		};
	}
});
//#endregion
export { x as default };
