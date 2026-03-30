const { Fragment } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineAsyncComponent } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { isRef } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { resolveDynamicComponent } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderVNode } = await globalThis.importAsync("vue/server-renderer");
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const { tryCatch } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const { useRoute } = await globalThis.importAsync("vue-router");
import { useRouteQuery } from "@vueuse/router";
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
const { Tabs } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
//#region modules/mod/client/pages/admin/targets/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	setup(__props) {
		const targetId = useRoute().params.id;
		const tab = useRouteQuery("tab", "config");
		const target = ref();
		const plan = ref();
		const loading = ref(false);
		const tabs = computed(() => {
			const items = [{
				value: "snapshots",
				label: $t("Snapshots"),
				component: defineAsyncComponent(() => import("./SnapshotTable-61-mAVfg.js"))
			}];
			if (plan.value?.strategy === "tar") items.splice(0, 0, {
				value: "config",
				label: $t("Config"),
				component: defineAsyncComponent(() => import("./TargetTarForm-BICT9Z40.js"))
			});
			return items;
		});
		async function loadTarget() {
			const [error, response] = await tryCatch(() => $fetch(`/api/backup/targets/${targetId}`, { method: "GET" }));
			if (error) return;
			target.value = response;
			loading.value = false;
		}
		async function loadPlan() {
			if (!target.value?.plan_id) return;
			const [error, response] = await tryCatch(() => $fetch(`/api/backup/plans/${target.value?.plan_id}`));
			if (error) return;
			plan.value = response;
		}
		async function load() {
			loading.value = true;
			await loadTarget();
			await loadPlan();
			setTimeout(() => {
				loading.value = false;
			}, 800);
		}
		onMounted(() => {
			load();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, mergeProps({ breadcrumbs: [
				{
					label: _ctx.$t("Backup"),
					to: "/admin/backup"
				},
				{
					label: _ctx.$t("Plans"),
					to: "/admin/backup/plans"
				},
				{
					label: plan.value?.name || _ctx.$t("Plan"),
					to: `/admin/backup/plans/${plan.value?.id}`
				},
				{ label: target.value?.name || _ctx.$t("Target Details") }
			] }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex gap-6 h-full"${_scopeId}><div class="w-full lg:w-4/12 xl:w-3/12"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Card), { class: "h-fit" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardHeader), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(CardTitle), null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Target Details"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(ssrRenderComponent(unref(CardDescription), null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Basic information about this target"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
											} else return [createVNode(unref(CardTitle), null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)]),
												_: 1
											}), createVNode(unref(CardDescription), null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)]),
												_: 1
											})];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardContent), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												if (loading.value) _push(`<div class="space-y-4"${_scopeId}><div class="animate-pulse"${_scopeId}><div class="h-4 bg-gray-200 rounded w-3/4 mb-2"${_scopeId}></div><div class="h-3 bg-gray-100 rounded w-1/2"${_scopeId}></div></div><div class="animate-pulse"${_scopeId}><div class="h-4 bg-gray-200 rounded w-3/4 mb-2"${_scopeId}></div><div class="h-3 bg-gray-100 rounded w-1/2"${_scopeId}></div></div><div class="animate-pulse"${_scopeId}><div class="h-4 bg-gray-200 rounded w-3/4 mb-2"${_scopeId}></div><div class="h-3 bg-gray-100 rounded w-full"${_scopeId}></div></div></div>`);
												else _push(`<!---->`);
												if (!loading.value && target.value) _push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("ID"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border"${_scopeId}>${ssrInterpolate(target.value.id)}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("Path"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all"${_scopeId}>${ssrInterpolate(target.value.path)}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("Created At"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border"${_scopeId}>${ssrInterpolate(new Date(target.value.created_at).toLocaleString())}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("Updated At"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border"${_scopeId}>${ssrInterpolate(new Date(target.value.updated_at).toLocaleString())}</p></div></div>`);
												else _push(`<!---->`);
												if (!loading.value && !target.value) _push(`<div class="text-center py-8"${_scopeId}><p class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("Target not found"))}</p></div>`);
												else _push(`<!---->`);
											} else return [
												loading.value ? (openBlock(), createBlock("div", {
													key: 0,
													class: "space-y-4"
												}, [
													createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })]),
													createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })]),
													createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-full" })])
												])) : createCommentVNode("", true),
												!loading.value && target.value ? (openBlock(), createBlock("div", {
													key: 1,
													class: "space-y-6"
												}, [
													createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("ID")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(target.value.id), 1)]),
													createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Path")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, toDisplayString(target.value.path), 1)]),
													createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Created At")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.created_at).toLocaleString()), 1)]),
													createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Updated At")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.updated_at).toLocaleString()), 1)])
												])) : createCommentVNode("", true),
												!loading.value && !target.value ? (openBlock(), createBlock("div", {
													key: 2,
													class: "text-center py-8"
												}, [createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("Target not found")), 1)])) : createCommentVNode("", true)
											];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(unref(CardHeader), null, {
									default: withCtx(() => [createVNode(unref(CardTitle), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)]),
										_: 1
									}), createVNode(unref(CardDescription), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)]),
										_: 1
									})]),
									_: 1
								}), createVNode(unref(CardContent), null, {
									default: withCtx(() => [
										loading.value ? (openBlock(), createBlock("div", {
											key: 0,
											class: "space-y-4"
										}, [
											createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })]),
											createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })]),
											createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-full" })])
										])) : createCommentVNode("", true),
										!loading.value && target.value ? (openBlock(), createBlock("div", {
											key: 1,
											class: "space-y-6"
										}, [
											createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("ID")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(target.value.id), 1)]),
											createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Path")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, toDisplayString(target.value.path), 1)]),
											createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Created At")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.created_at).toLocaleString()), 1)]),
											createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Updated At")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.updated_at).toLocaleString()), 1)])
										])) : createCommentVNode("", true),
										!loading.value && !target.value ? (openBlock(), createBlock("div", {
											key: 2,
											class: "text-center py-8"
										}, [createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("Target not found")), 1)])) : createCommentVNode("", true)
									]),
									_: 2
								}, 1024)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="flex-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Tabs), {
							modelValue: unref(tab),
							"onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
							"default-value": "general"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(TabsList), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(`<!--[-->`);
												ssrRenderList(tabs.value, (t) => {
													_push(ssrRenderComponent(unref(TabsTrigger), {
														key: t.value,
														value: t.value,
														class: "min-w-60"
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(t.label)}`);
															else return [createTextVNode(toDisplayString(t.label), 1)];
														}),
														_: 2
													}, _parent, _scopeId));
												});
												_push(`<!--]-->`);
											} else return [(openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
												return openBlock(), createBlock(unref(TabsTrigger), {
													key: t.value,
													value: t.value,
													class: "min-w-60"
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
													_: 2
												}, 1032, ["value"]);
											}), 128))];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`<!--[-->`);
									ssrRenderList(tabs.value, (t) => {
										_push(ssrRenderComponent(unref(TabsContent), {
											key: t.value,
											value: t.value
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) if (t.component && plan.value && target.value) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(t.component), {
													target: target.value,
													"onUpdate:target": ($event) => target.value = $event,
													plan: plan.value,
													"onUpdate:plan": ($event) => plan.value = $event,
													"plan-id": plan.value.id,
													"target-id": target.value.id
												}, null), _parent, _scopeId);
												else _push(`<!---->`);
												else return [t.component && plan.value && target.value ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
													key: 0,
													target: target.value,
													"onUpdate:target": ($event) => target.value = $event,
													plan: plan.value,
													"onUpdate:plan": ($event) => plan.value = $event,
													"plan-id": plan.value.id,
													"target-id": target.value.id
												}, null, 40, [
													"target",
													"onUpdate:target",
													"plan",
													"onUpdate:plan",
													"plan-id",
													"target-id"
												])) : createCommentVNode("", true)];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [createVNode(unref(TabsList), null, {
									default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
										return openBlock(), createBlock(unref(TabsTrigger), {
											key: t.value,
											value: t.value,
											class: "min-w-60"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
											_: 2
										}, 1032, ["value"]);
									}), 128))]),
									_: 1
								}), (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
									return openBlock(), createBlock(unref(TabsContent), {
										key: t.value,
										value: t.value
									}, {
										default: withCtx(() => [t.component && plan.value && target.value ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
											key: 0,
											target: target.value,
											"onUpdate:target": ($event) => target.value = $event,
											plan: plan.value,
											"onUpdate:plan": ($event) => plan.value = $event,
											"plan-id": plan.value.id,
											"target-id": target.value.id
										}, null, 40, [
											"target",
											"onUpdate:target",
											"plan",
											"onUpdate:plan",
											"plan-id",
											"target-id"
										])) : createCommentVNode("", true)]),
										_: 2
									}, 1032, ["value"]);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "flex gap-6 h-full" }, [createVNode("div", { class: "w-full lg:w-4/12 xl:w-3/12" }, [createVNode(unref(Card), { class: "h-fit" }, {
						default: withCtx(() => [createVNode(unref(CardHeader), null, {
							default: withCtx(() => [createVNode(unref(CardTitle), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)]),
								_: 1
							}), createVNode(unref(CardDescription), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)]),
								_: 1
							})]),
							_: 1
						}), createVNode(unref(CardContent), null, {
							default: withCtx(() => [
								loading.value ? (openBlock(), createBlock("div", {
									key: 0,
									class: "space-y-4"
								}, [
									createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })]),
									createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })]),
									createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }), createVNode("div", { class: "h-3 bg-gray-100 rounded w-full" })])
								])) : createCommentVNode("", true),
								!loading.value && target.value ? (openBlock(), createBlock("div", {
									key: 1,
									class: "space-y-6"
								}, [
									createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("ID")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(target.value.id), 1)]),
									createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Path")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, toDisplayString(target.value.path), 1)]),
									createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Created At")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.created_at).toLocaleString()), 1)]),
									createVNode("div", null, [createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Updated At")), 1), createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.updated_at).toLocaleString()), 1)])
								])) : createCommentVNode("", true),
								!loading.value && !target.value ? (openBlock(), createBlock("div", {
									key: 2,
									class: "text-center py-8"
								}, [createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("Target not found")), 1)])) : createCommentVNode("", true)
							]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)]), createVNode("div", { class: "flex-1" }, [createVNode(unref(Tabs), {
						modelValue: unref(tab),
						"onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
						"default-value": "general"
					}, {
						default: withCtx(() => [createVNode(unref(TabsList), null, {
							default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
								return openBlock(), createBlock(unref(TabsTrigger), {
									key: t.value,
									value: t.value,
									class: "min-w-60"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
									_: 2
								}, 1032, ["value"]);
							}), 128))]),
							_: 1
						}), (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
							return openBlock(), createBlock(unref(TabsContent), {
								key: t.value,
								value: t.value
							}, {
								default: withCtx(() => [t.component && plan.value && target.value ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
									key: 0,
									target: target.value,
									"onUpdate:target": ($event) => target.value = $event,
									plan: plan.value,
									"onUpdate:plan": ($event) => plan.value = $event,
									"plan-id": plan.value.id,
									"target-id": target.value.id
								}, null, 40, [
									"target",
									"onUpdate:target",
									"plan",
									"onUpdate:plan",
									"plan-id",
									"target-id"
								])) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["value"]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "onUpdate:modelValue"])])])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/targets/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/targets/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = _id__vue_vue_type_script_setup_true_lang_default;
//#endregion
export { _id__default as default };
