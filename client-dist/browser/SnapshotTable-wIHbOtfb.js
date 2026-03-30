import { t as e } from "./format-Ci4eIQu6.js";
import { t } from "./snapshot.entity-C5x816iC.js";
const { createBlock: n } = await globalThis.importAsync("vue"), { createCommentVNode: r } = await globalThis.importAsync("vue"), { createElementVNode: i } = await globalThis.importAsync("vue"), { createTextVNode: a } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { defineComponent: s } = await globalThis.importAsync("vue"), { normalizeClass: c } = await globalThis.importAsync("vue"), { onMounted: l } = await globalThis.importAsync("vue"), { openBlock: u } = await globalThis.importAsync("vue"), { ref: d } = await globalThis.importAsync("vue"), { toDisplayString: f } = await globalThis.importAsync("vue"), { unref: p } = await globalThis.importAsync("vue"), { watch: m } = await globalThis.importAsync("vue"), { withCtx: h } = await globalThis.importAsync("vue"), { withModifiers: g } = await globalThis.importAsync("vue"), { useForm: _ } = await globalThis.importAsync("vee-validate"), { toast: v } = await globalThis.importAsync("vue-sonner"), y = await globalThis.importAsync("#client/components/Button.vue"), b = y.default || y, { $fetch: x } = await globalThis.importAsync("#client/utils/fetcher.ts"), S = await globalThis.importAsync("#client/components/DataTable.vue"), C = S.default || S, { defineColumns: w } = await globalThis.importAsync("#client/components/DataTable.vue"), { tryCatch: T } = await globalThis.importAsync("#shared/utils/tryCatch.ts"), E = await globalThis.importAsync("#client/components/Icon.vue"), D = E.default || E, O = await globalThis.importAsync("#client/components/AlertButton.vue"), k = O.default || O, { Card: A } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: j } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: M } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: N } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: P } = await globalThis.importAsync("#client/components/ui/card"), F = await globalThis.importAsync("#client/components/ObjectInspect.vue"), I = F.default || F, L = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenu.vue"), R = L.default || L, z = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue"), B = z.default || z, V = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuContent.vue"), H = V.default || V, U = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuItem.vue"), W = U.default || U;
(await globalThis.importAsync("#client/components/FormTextField.vue")).default, await globalThis.importAsync("#client/components/ui/dialog"), await globalThis.importAsync("#client/components/DriveEntryPicker.vue");
//#region modules/mod/client/components/SnapshotTable.vue?vue&type=script&setup=true&lang.ts
var G = { class: "flex items-center justify-between" }, K = { class: "flex items-center gap-2 justify-end" }, q = { class: "sr-only" }, J = /* @__PURE__ */ s({
	inheritAttrs: !1,
	__name: "SnapshotTable",
	props: { planId: {} },
	setup(s) {
		let m = s, g = d([]), _ = d(!1), v = d();
		d(null);
		let y = w([
			{
				id: "id",
				label: $t("Snapshot ID"),
				field: "id"
			},
			{
				id: "description",
				label: $t("Description"),
				field: "description"
			},
			{
				id: "trigger",
				label: $t("Trigger"),
				field: "trigger_type"
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
		async function S() {
			_.value = !0;
			let e = `/api/zbackup/plans/${m.planId}/snapshots`, [n, r] = await x.try(e, { method: "GET" });
			if (n) {
				_.value = !1;
				return;
			}
			g.value = (r.items || []).map((e) => new t(e)), setTimeout(() => {
				_.value = !1;
			}, 500);
		}
		return l(S), (e, t) => (u(), n(p(A), null, {
			default: h(() => [o(p(N), null, {
				default: h(() => [i("div", G, [i("div", null, [o(p(P), null, {
					default: h(() => [a(f(e.$t("Snapshots")), 1)]),
					_: 1
				}), o(p(M), null, {
					default: h(() => [a(f(e.$t("View and manage snapshots for this plan.")), 1)]),
					_: 1
				})]), o(b, {
					variant: "outline",
					onClick: S
				}, {
					default: h(() => [o(D, {
						name: "refreshCw",
						class: c({ "animate-spin": _.value })
					}, null, 8, ["class"])]),
					_: 1
				})])]),
				_: 1
			}), o(p(j), null, {
				default: h(() => [v.value ? (u(), n(I, {
					key: 0,
					"model-value": v.value,
					open: !0,
					"onUpdate:open": t[0] ||= (e) => {
						e || (v.value = void 0);
					}
				}, {
					default: h(() => [...t[1] ||= [i("div", { class: "hidden" }, null, -1)]]),
					_: 1
				}, 8, ["model-value"])) : r("", !0), o(C, {
					rows: g.value,
					columns: p(y),
					loading: _.value
				}, {
					"row-actions": h(({ row: t }) => [i("div", K, [
						o(k, {
							variant: "ghost",
							size: "sm",
							"fetch-method": "POST",
							fetch: `/api/zbackup/plans/${s.planId}/snapshots/${t.id}/restore`,
							tooltip: e.$t("Restore this snapshot"),
							description: e.$t("Are you sure you want to restore this snapshot? This action cannot be stopped."),
							"toast-on-success": e.$t("Restore successfully."),
							onFetched: S
						}, {
							default: h(() => [o(D, { name: "TimerReset" })]),
							_: 1
						}, 8, [
							"fetch",
							"tooltip",
							"description",
							"toast-on-success"
						]),
						o(k, {
							variant: "ghost",
							size: "sm",
							"fetch-method": "DELETE",
							fetch: `/api/zbackup/plans/${s.planId}/snapshots/${t.id}`,
							onFetched: S
						}, {
							default: h(() => [o(D, { name: "trash" })]),
							_: 1
						}, 8, ["fetch"]),
						o(R, null, {
							default: h(() => [o(B, { "as-child": "" }, {
								default: h(() => [o(b, {
									variant: "ghost",
									class: "w-8 h-8 p-0"
								}, {
									default: h(() => [i("span", q, f(e.$t("More")), 1), o(D, {
										name: "MoreVertical",
										class: "w-3 h-3 sm:w-4 sm:h-4"
									})]),
									_: 1
								})]),
								_: 1
							}), o(H, { class: "max-h-60 overflow-y-auto" }, {
								default: h(() => [o(W, {
									class: "cursor-pointer",
									onClick: (e) => v.value = t.metadata
								}, {
									default: h(() => [a(f(e.$t("Metadata")), 1)]),
									_: 1
								}, 8, ["onClick"]), o(W, {
									class: "cursor-pointer",
									onClick: (e) => v.value = t.data
								}, {
									default: h(() => [a(f(e.$t("Data")), 1)]),
									_: 1
								}, 8, ["onClick"])]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024)
					])]),
					_: 1
				}, 8, [
					"rows",
					"columns",
					"loading"
				])]),
				_: 1
			})]),
			_: 1
		}));
	}
});
//#endregion
export { J as default };
