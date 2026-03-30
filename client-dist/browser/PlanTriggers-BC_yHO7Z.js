const { Fragment: e } = await globalThis.importAsync("vue"), { createBlock: t } = await globalThis.importAsync("vue"), { createCommentVNode: n } = await globalThis.importAsync("vue"), { createElementBlock: r } = await globalThis.importAsync("vue"), { createElementVNode: i } = await globalThis.importAsync("vue"), { createTextVNode: a } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { defineComponent: s } = await globalThis.importAsync("vue"), { normalizeClass: c } = await globalThis.importAsync("vue"), { onMounted: l } = await globalThis.importAsync("vue"), { openBlock: u } = await globalThis.importAsync("vue"), { ref: d } = await globalThis.importAsync("vue"), { renderList: f } = await globalThis.importAsync("vue"), { toDisplayString: p } = await globalThis.importAsync("vue"), { unref: m } = await globalThis.importAsync("vue"), { useModel: h } = await globalThis.importAsync("vue"), { watch: g } = await globalThis.importAsync("vue"), { withCtx: _ } = await globalThis.importAsync("vue"), { toast: v } = await globalThis.importAsync("vue-sonner"), y = await globalThis.importAsync("#client/components/Button.vue"), b = y.default || y, { $fetch: x } = await globalThis.importAsync("#client/utils/fetcher.ts"), S = await globalThis.importAsync("#client/components/DataTable.vue"), C = S.default || S, { defineColumns: w } = await globalThis.importAsync("#client/components/DataTable.vue"), { tryCatch: T } = await globalThis.importAsync("#shared/utils/tryCatch.ts"), E = await globalThis.importAsync("#client/components/Icon.vue"), D = E.default || E, O = await globalThis.importAsync("#client/components/AlertButton.vue"), k = O.default || O, { Card: A } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: j } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: M } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: N } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: P } = await globalThis.importAsync("#client/components/ui/card");
(await globalThis.importAsync("#client/components/ObjectInspect.vue")).default;
const F = await globalThis.importAsync("#client/components/DialogForm.vue"), I = F.default || F, { defineFormFields: L } = await globalThis.importAsync("#client/components/DialogForm.vue"), { createId: R } = await globalThis.importAsync("#client/utils"), z = await globalThis.importAsync("#client/components/ui/badge/Badge.vue"), B = z.default || z, V = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenu.vue"), H = V.default || V, U = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue"), W = U.default || U, G = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuContent.vue"), K = G.default || G;
(await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuItem.vue")).default;
//#region modules/mod/shared/entities/trigger.entity.ts
var q = class {
	id;
	type;
	cron;
	events;
	constructor(e) {
		Object.assign(this, e);
	}
}, J = { class: "flex items-center justify-between" }, Y = { class: "flex-1" }, X = { class: "flex space-x-2" }, Z = { key: 0 }, Q = {
	key: 1,
	class: "flex items-center gap-1"
}, $ = { class: "flex items-center gap-2 justify-end" }, ee = /* @__PURE__ */ s({
	inheritAttrs: !1,
	__name: "PlanTriggers",
	props: {
		plan: {
			type: Object,
			required: !0
		},
		planModifiers: {}
	},
	emits: ["update:plan"],
	setup(s) {
		let g = h(s, "plan"), v = d([]), y = d(!1), S = d(), T = w([
			{
				id: "type",
				label: $t("Type"),
				field: "type"
			},
			{
				id: "value",
				label: $t("Value")
			},
			{ id: "actions" }
		]), E = L({
			type: {
				component: "select",
				label: $t("Type"),
				options: [{
					label: $t("Cron"),
					value: "cron"
				}, {
					label: $t("Event"),
					value: "event"
				}]
			},
			cron: (e) => ({
				component: e?.type === "cron" ? "text-field" : "hidden",
				label: "Cron",
				presets: [
					{
						label: $t("Every hour"),
						value: "0 * * * *"
					},
					{
						label: $t("Every day at midnight"),
						value: "0 0 * * *"
					},
					{
						label: $t("Every week on Sunday at midnight"),
						value: "0 0 * * 0"
					},
					{
						label: $t("Every month on the 1st at midnight"),
						value: "0 0 1 * *"
					}
				]
			}),
			events: (e) => ({
				component: e?.type === "event" ? "string-list-input" : "hidden",
				label: $t("Events"),
				description: $t("List of events that will trigger the backup.")
			})
		});
		function O() {
			y.value = !0, v.value = JSON.parse(JSON.stringify(g.value.triggers || [])).map((e) => new q(e)), setTimeout(() => {
				y.value = !1;
			}, 500);
		}
		async function F(e) {
			let t = {
				id: R(),
				...e
			}, n = JSON.parse(JSON.stringify(g.value.triggers || []));
			n.push(t);
			let [r] = await x.try(`/api/zbackup/plans/${g.value.id}`, {
				method: "PUT",
				data: { triggers: n }
			});
			r || (g.value.triggers = n.map((e) => new q(e)));
		}
		async function z(e, t) {
			let n = JSON.parse(JSON.stringify(g.value.triggers || [])), r = n.findIndex((t) => t.id === e);
			if (r === -1) return;
			n[r] = {
				id: e,
				...t
			};
			let [i] = await x.try(`/api/zbackup/plans/${g.value.id}`, {
				method: "PUT",
				data: { triggers: n }
			});
			i || (g.value.triggers = n.map((e) => new q(e)));
		}
		async function V(e) {
			let t = JSON.parse(JSON.stringify(g.value.triggers || [])), n = t.findIndex((t) => t.id === e);
			if (n === -1) return;
			S.value = e, t.splice(n, 1);
			let [r] = await x.try(`/api/zbackup/plans/${g.value.id}`, {
				method: "PUT",
				data: { triggers: t }
			});
			if (r) {
				S.value = void 0;
				return;
			}
			setTimeout(() => {
				v.value = v.value.filter((t) => t.id !== e), g.value.triggers = t.map((e) => new q(e)), S.value = void 0;
			}, 500);
		}
		return l(O), (s, l) => (u(), t(m(A), null, {
			default: _(() => [o(m(N), null, {
				default: _(() => [i("div", J, [i("div", Y, [o(m(P), null, {
					default: _(() => [a(p(s.$t("Triggers")), 1)]),
					_: 1
				}), o(m(M), null, {
					default: _(() => [a(p(s.$t("View and manage triggers for this plan.")), 1)]),
					_: 1
				})]), i("div", X, [o(b, {
					variant: "outline",
					onClick: O
				}, {
					default: _(() => [o(D, {
						name: "refreshCw",
						class: c({ "animate-spin": y.value })
					}, null, 8, ["class"])]),
					_: 1
				}), o(I, {
					title: s.$t("Add Trigger"),
					fields: m(E),
					handle: F,
					onSubmit: O
				}, {
					default: _(() => [o(b, null, {
						default: _(() => [a(p(s.$t("Add")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["title", "fields"])])])]),
				_: 1
			}), o(m(j), null, {
				default: _(() => [o(C, {
					rows: v.value,
					columns: m(T),
					loading: y.value
				}, {
					"row-value": _(({ row: i }) => [i.type === "cron" ? (u(), r("div", Z, p(i.cron), 1)) : i.type === "event" && i.events?.length ? (u(), r("div", Q, [(u(!0), r(e, null, f(i.events.slice(0, 2), (e) => (u(), t(B, {
						key: e,
						class: "h-6"
					}, {
						default: _(() => [a(p(e), 1)]),
						_: 2
					}, 1024))), 128)), i.events.length > 2 ? (u(), t(H, { key: 0 }, {
						default: _(() => [o(W, { "as-child": "" }, {
							default: _(() => [o(B, { class: "h-6 cursor-pointer" }, {
								default: _(() => [o(D, { name: "MoreHorizontal" })]),
								_: 1
							})]),
							_: 1
						}), o(K, { class: "max-h-60 overflow-y-auto flex flex-col gap-1 p-2" }, {
							default: _(() => [(u(!0), r(e, null, f(i.events?.slice(2), (e) => (u(), t(B, { key: e }, {
								default: _(() => [a(p(e), 1)]),
								_: 2
							}, 1024))), 128))]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)) : n("", !0)])) : n("", !0)]),
					"row-actions": _(({ row: e }) => [i("div", $, [o(I, {
						title: s.$t("Edit"),
						fields: m(E),
						values: e,
						handle: (t) => z(e.id, t),
						onSubmit: O
					}, {
						default: _(() => [o(b, {
							variant: "ghost",
							size: "sm"
						}, {
							default: _(() => [o(D, { name: "Edit" })]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"title",
						"fields",
						"values",
						"handle"
					]), o(k, {
						variant: "ghost",
						size: "sm",
						loading: S.value === e.id,
						onConfirm: (t) => V(e.id)
					}, {
						default: _(() => [o(D, { name: "trash" })]),
						_: 1
					}, 8, ["loading", "onConfirm"])])]),
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
export { ee as default };
