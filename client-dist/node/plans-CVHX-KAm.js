import { t as Plan } from "./plan.entity-Dalh7ttT.js";
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderAttr } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { defineFormFields } = await globalThis.importAsync("#client/components/FormAutoFieldList.vue");
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const { $fetch } = await globalThis.importAsync("#client/utils");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
const { Head } = await globalThis.importAsync("@unhead/vue/components");
const __module__PageCrud__ = await globalThis.importAsync("#client/components/PageCrud.vue");
const PageCrud = __module__PageCrud__.default || __module__PageCrud__;
const __module__Switch__ = await globalThis.importAsync("#client/components/ui/switch/Switch.vue");
const Switch = __module__Switch__.default || __module__Switch__;
//#region modules/mod/client/pages/admin/plans/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const crudRef = ref();
		const toggling = ref([]);
		const fields = defineFormFields({
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
		});
		const columns = defineColumns([
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
		async function load() {
			crudRef.value?.load();
		}
		async function toggle(row) {
			toggling.value.push(row.id);
			await $fetch(`/api/zbackup/plans/${row.id}`, {
				method: "PUT",
				data: { active: !row.active }
			});
			setTimeout(() => {
				load();
				toggling.value = toggling.value.filter((id) => id !== row.id);
			}, 500);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(_ctx.$t("Plans"))}</title><meta name="description"${ssrRenderAttr("content", _ctx.$t("Manage your backup plans"))}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(_ctx.$t("Plans")), 1), createVNode("meta", {
						name: "description",
						content: _ctx.$t("Manage your backup plans")
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(AdminLayout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(PageCrud, {
						ref_key: "crudRef",
						ref: crudRef,
						fetch: "/api/zbackup/plans",
						"fetch-destroy": "/api/zbackup/plans/:id",
						fields: unref(fields),
						"fields-edit": {
							name: unref(fields).name,
							cron: unref(fields).cron,
							max: unref(fields).max
						},
						columns: unref(columns),
						title: _ctx.$t("Plans"),
						description: _ctx.$t("Manage your backup plans"),
						serialize: (row) => new (unref(Plan))(row),
						actions: ["create", "destroy"]
					}, {
						"row-active": withCtx(({ row }, _push, _parent, _scopeId) => {
							if (_push) if (toggling.value.includes(row.id)) _push(ssrRenderComponent(Icon, {
								name: "Loader2",
								class: "animate-spin"
							}, null, _parent, _scopeId));
							else _push(ssrRenderComponent(Switch, {
								"model-value": !!row.active,
								onClick: ($event) => toggle(row)
							}, null, _parent, _scopeId));
							else return [toggling.value.includes(row.id) ? (openBlock(), createBlock(Icon, {
								key: 0,
								name: "Loader2",
								class: "animate-spin"
							})) : (openBlock(), createBlock(Switch, {
								key: 1,
								"model-value": !!row.active,
								onClick: ($event) => toggle(row)
							}, null, 8, ["model-value", "onClick"]))];
						}),
						"row-valid": withCtx(({ row }, _push, _parent, _scopeId) => {
							if (_push) if (row.valid) _push(ssrRenderComponent(Icon, {
								name: "CheckCircle2",
								class: "text-green-500 size-5"
							}, null, _parent, _scopeId));
							else _push(ssrRenderComponent(Icon, {
								name: "AlertCircle",
								class: "text-yellow-500 size-5"
							}, null, _parent, _scopeId));
							else return [row.valid ? (openBlock(), createBlock(Icon, {
								key: 0,
								name: "CheckCircle2",
								class: "text-green-500 size-5"
							})) : (openBlock(), createBlock(Icon, {
								key: 1,
								name: "AlertCircle",
								class: "text-yellow-500 size-5"
							}))];
						}),
						"prepend-actions": withCtx(({ row }, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(Button, {
								size: "icon",
								variant: "ghost",
								to: `/admin/zbackup/plans/${row.id}`
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(Icon, { name: "Edit" }, null, _parent, _scopeId));
									else return [createVNode(Icon, { name: "Edit" })];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(Button, {
								size: "icon",
								variant: "ghost",
								to: `/admin/zbackup/plans/${row.id}`
							}, {
								default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
								_: 1
							}, 8, ["to"])];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(PageCrud, {
						ref_key: "crudRef",
						ref: crudRef,
						fetch: "/api/zbackup/plans",
						"fetch-destroy": "/api/zbackup/plans/:id",
						fields: unref(fields),
						"fields-edit": {
							name: unref(fields).name,
							cron: unref(fields).cron,
							max: unref(fields).max
						},
						columns: unref(columns),
						title: _ctx.$t("Plans"),
						description: _ctx.$t("Manage your backup plans"),
						serialize: (row) => new (unref(Plan))(row),
						actions: ["create", "destroy"]
					}, {
						"row-active": withCtx(({ row }) => [toggling.value.includes(row.id) ? (openBlock(), createBlock(Icon, {
							key: 0,
							name: "Loader2",
							class: "animate-spin"
						})) : (openBlock(), createBlock(Switch, {
							key: 1,
							"model-value": !!row.active,
							onClick: ($event) => toggle(row)
						}, null, 8, ["model-value", "onClick"]))]),
						"row-valid": withCtx(({ row }) => [row.valid ? (openBlock(), createBlock(Icon, {
							key: 0,
							name: "CheckCircle2",
							class: "text-green-500 size-5"
						})) : (openBlock(), createBlock(Icon, {
							key: 1,
							name: "AlertCircle",
							class: "text-yellow-500 size-5"
						}))]),
						"prepend-actions": withCtx(({ row }) => [createVNode(Button, {
							size: "icon",
							variant: "ghost",
							to: `/admin/zbackup/plans/${row.id}`
						}, {
							default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
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
					])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/plans/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/plans/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var plans_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { plans_default as default };
