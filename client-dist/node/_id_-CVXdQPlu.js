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
const { onServerPrefetch } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { resolveDynamicComponent } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { watch } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderAttrs } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderVNode } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardFooter } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const __module__DialogForm__ = await globalThis.importAsync("#client/components/DialogForm.vue");
const DialogForm = __module__DialogForm__.default || __module__DialogForm__;
const __module__FormTextField__ = await globalThis.importAsync("#client/components/FormTextField.vue");
const FormTextField = __module__FormTextField__.default || __module__FormTextField__;
const { useRoute } = await globalThis.importAsync("vue-router");
const { useRouter } = await globalThis.importAsync("vue-router");
import { useRouteQuery } from "@vueuse/router";
const { useHead } = await globalThis.importAsync("@unhead/vue");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
const __module__$fetch$1__ = await globalThis.importAsync("#client/facades/fetch.facade.ts");
const $fetch$1 = __module__$fetch$1__.default || __module__$fetch$1__;
const __module__FormTextarea__ = await globalThis.importAsync("#client/components/FormTextarea.vue");
const FormTextarea = __module__FormTextarea__.default || __module__FormTextarea__;
const __module__FormSwitch__ = await globalThis.importAsync("#client/components/FormSwitch.vue");
const FormSwitch = __module__FormSwitch__.default || __module__FormSwitch__;
const { Tabs } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
const { useState } = await globalThis.importAsync("#client/composables/useState.ts");
//#region modules/mod/client/components/PlanDetails.vue?vue&type=script&setup=true&lang.ts
var PlanDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PlanDetails",
	__ssrInlineRender: true,
	props: {
		plan: {},
		planId: {}
	},
	setup(__props) {
		const props = __props;
		const saving = ref(false);
		const { handleSubmit, setValues } = useForm({ initialValues: props.plan });
		handleSubmit(async (data) => {
			saving.value = true;
			const [error] = await $fetch.try(`/api/zbackup/plans/${props.planId}`, {
				method: "PATCH",
				data: {
					name: data.name,
					description: data.description,
					active: data.active
				}
			});
			if (error) {
				saving.value = false;
				toast.error($t("Failed to update."));
				return;
			}
			setTimeout(() => {
				saving.value = false;
				toast.success($t("Updated successfully."));
			}, 800);
		});
		watch(() => props.plan, (newPlan) => {
			if (newPlan) setValues({
				name: newPlan.name,
				description: newPlan.description || ""
			});
		}, { immediate: true });
		const executing = ref(false);
		async function execute(data) {
			executing.value = true;
			const [error] = await $fetch.try(`/api/zbackup/plans/${props.planId}/backup`, {
				method: "POST",
				data
			});
			if (error) {
				executing.value = false;
				return;
			}
			setTimeout(() => {
				toast.success($t("Executed"));
				executing.value = false;
			}, 800);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<form${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Card), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(CardHeader), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardTitle), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Plan details"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Plan details")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardDescription), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Edit details and configuration."))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Edit details and configuration.")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(unref(CardTitle), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Plan details")), 1)]),
									_: 1
								}), createVNode(unref(CardDescription), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit details and configuration.")), 1)]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent), { class: "space-y-6" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(FormTextField, {
										name: "name",
										label: _ctx.$t("Name"),
										placeholder: _ctx.$t("Enter plan name")
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(FormSwitch, {
										name: "active",
										label: _ctx.$t("Active"),
										hint: _ctx.$t("Activate or deactivate this backup plan")
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(FormTextarea, {
										name: "description",
										label: _ctx.$t("Description"),
										placeholder: _ctx.$t("Enter plan description"),
										hint: _ctx.$t("Optional description for this backup plan")
									}, null, _parent, _scopeId));
								} else return [
									createVNode(FormTextField, {
										name: "name",
										label: _ctx.$t("Name"),
										placeholder: _ctx.$t("Enter plan name")
									}, null, 8, ["label", "placeholder"]),
									createVNode(FormSwitch, {
										name: "active",
										label: _ctx.$t("Active"),
										hint: _ctx.$t("Activate or deactivate this backup plan")
									}, null, 8, ["label", "hint"]),
									createVNode(FormTextarea, {
										name: "description",
										label: _ctx.$t("Description"),
										placeholder: _ctx.$t("Enter plan description"),
										hint: _ctx.$t("Optional description for this backup plan")
									}, null, 8, [
										"label",
										"placeholder",
										"hint"
									])
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardFooter), { class: "flex justify-end gap-4" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(DialogForm, {
										title: _ctx.$t("Execute Backup"),
										description: _ctx.$t("Execute a manual backup for this plan."),
										"submit-text": _ctx.$t("Run Backup"),
										handle: execute,
										fields: { description: {
											component: "text-field",
											label: _ctx.$t("Description")
										} }
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(Button, {
												variant: "outline",
												loading: executing.value
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														_push(ssrRenderComponent(Icon, { name: "play" }, null, _parent, _scopeId));
														_push(` ${ssrInterpolate(_ctx.$t("Run"))}`);
													} else return [createVNode(Icon, { name: "play" }), createTextVNode(" " + toDisplayString(_ctx.$t("Run")), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
											else return [createVNode(Button, {
												variant: "outline",
												loading: executing.value
											}, {
												default: withCtx(() => [createVNode(Icon, { name: "play" }), createTextVNode(" " + toDisplayString(_ctx.$t("Run")), 1)]),
												_: 1
											}, 8, ["loading"])];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(Button, {
										type: "submit",
										loading: saving.value
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Save"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(DialogForm, {
									title: _ctx.$t("Execute Backup"),
									description: _ctx.$t("Execute a manual backup for this plan."),
									"submit-text": _ctx.$t("Run Backup"),
									handle: execute,
									fields: { description: {
										component: "text-field",
										label: _ctx.$t("Description")
									} }
								}, {
									default: withCtx(() => [createVNode(Button, {
										variant: "outline",
										loading: executing.value
									}, {
										default: withCtx(() => [createVNode(Icon, { name: "play" }), createTextVNode(" " + toDisplayString(_ctx.$t("Run")), 1)]),
										_: 1
									}, 8, ["loading"])]),
									_: 1
								}, 8, [
									"title",
									"description",
									"submit-text",
									"fields"
								]), createVNode(Button, {
									type: "submit",
									loading: saving.value
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
									_: 1
								}, 8, ["loading"])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(CardHeader), null, {
							default: withCtx(() => [createVNode(unref(CardTitle), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Plan details")), 1)]),
								_: 1
							}), createVNode(unref(CardDescription), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit details and configuration.")), 1)]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(CardContent), { class: "space-y-6" }, {
							default: withCtx(() => [
								createVNode(FormTextField, {
									name: "name",
									label: _ctx.$t("Name"),
									placeholder: _ctx.$t("Enter plan name")
								}, null, 8, ["label", "placeholder"]),
								createVNode(FormSwitch, {
									name: "active",
									label: _ctx.$t("Active"),
									hint: _ctx.$t("Activate or deactivate this backup plan")
								}, null, 8, ["label", "hint"]),
								createVNode(FormTextarea, {
									name: "description",
									label: _ctx.$t("Description"),
									placeholder: _ctx.$t("Enter plan description"),
									hint: _ctx.$t("Optional description for this backup plan")
								}, null, 8, [
									"label",
									"placeholder",
									"hint"
								])
							]),
							_: 1
						}),
						createVNode(unref(CardFooter), { class: "flex justify-end gap-4" }, {
							default: withCtx(() => [createVNode(DialogForm, {
								title: _ctx.$t("Execute Backup"),
								description: _ctx.$t("Execute a manual backup for this plan."),
								"submit-text": _ctx.$t("Run Backup"),
								handle: execute,
								fields: { description: {
									component: "text-field",
									label: _ctx.$t("Description")
								} }
							}, {
								default: withCtx(() => [createVNode(Button, {
									variant: "outline",
									loading: executing.value
								}, {
									default: withCtx(() => [createVNode(Icon, { name: "play" }), createTextVNode(" " + toDisplayString(_ctx.$t("Run")), 1)]),
									_: 1
								}, 8, ["loading"])]),
								_: 1
							}, 8, [
								"title",
								"description",
								"submit-text",
								"fields"
							]), createVNode(Button, {
								type: "submit",
								loading: saving.value
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
								_: 1
							}, 8, ["loading"])]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`</form>`);
		};
	}
});
//#endregion
//#region modules/mod/client/components/PlanDetails.vue
var _sfc_setup$1 = PlanDetails_vue_vue_type_script_setup_true_lang_default.setup;
PlanDetails_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/PlanDetails.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var PlanDetails_default = PlanDetails_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region modules/mod/client/pages/admin/plans/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const planId = computed(() => String(route.params.id));
		const plan = useState(`zbackup-plan-${planId.value}`);
		const tab = useRouteQuery("tab", "config");
		const loading = ref(false);
		const tabs = [
			{
				value: "config",
				label: $t("Configuration"),
				component: defineAsyncComponent(() => import("./PlanConfig-CRIwKC1e.js"))
			},
			{
				value: "triggers",
				label: $t("Triggers"),
				component: defineAsyncComponent(() => import("./PlanTriggers-BCygx7bR.js"))
			},
			{
				value: "snapshots",
				label: $t("Snapshots"),
				component: defineAsyncComponent(() => import("./SnapshotTable-61-mAVfg.js"))
			}
		];
		async function load() {
			loading.value = true;
			const [error, response] = await $fetch$1.try(`/api/zbackup/plans/${planId.value}`);
			if (error) {
				loading.value = false;
				toast.error($t("Failed to load plan details."));
				router.push("/admin/zbackup/plans");
				return;
			}
			plan.value = response;
			loading.value = false;
		}
		useHead({ title: () => plan.value ? plan.value.name : $t("Loading...") });
		onMounted(async () => {
			if (!plan.value) await load();
		});
		onServerPrefetch(async () => {
			if (!plan.value) await load();
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
					label: unref(plan)?.name || _ctx.$t("Plan"),
					to: `/admin/backup/plans/${unref(plan)?.id}`
				}
			] }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (loading.value) _push(`<div class="flex justify-center items-center h-64"${_scopeId}><div class="text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("Loading..."))}</div></div>`);
						else _push(`<!---->`);
						if (!loading.value && unref(plan)) {
							_push(`<div class="flex gap-6 h-full"${_scopeId}><div class="w-full lg:w-4/12 xl:w-3/12"${_scopeId}>`);
							_push(ssrRenderComponent(PlanDetails_default, {
								plan: unref(plan),
								"plan-id": planId.value
							}, null, _parent, _scopeId));
							_push(`</div><div class="flex-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Tabs), {
								modelValue: unref(tab),
								"onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
								"default-value": "configuration"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(unref(TabsList), null, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(`<!--[-->`);
													ssrRenderList(tabs, (t) => {
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
												} else return [(openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
													return createVNode(unref(TabsTrigger), {
														key: t.value,
														value: t.value,
														class: "min-w-60"
													}, {
														default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
														_: 2
													}, 1032, ["value"]);
												}), 64))];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(`<!--[-->`);
										ssrRenderList(tabs, (t) => {
											_push(ssrRenderComponent(unref(TabsContent), {
												key: t.value,
												value: t.value
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) if (t.component && unref(plan)) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(t.component), {
														plan: unref(plan),
														"plan-id": planId.value
													}, null), _parent, _scopeId);
													else _push(`<!---->`);
													else return [t.component && unref(plan) ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
														key: 0,
														plan: unref(plan),
														"plan-id": planId.value
													}, null, 8, ["plan", "plan-id"])) : createCommentVNode("", true)];
												}),
												_: 2
											}, _parent, _scopeId));
										});
										_push(`<!--]-->`);
									} else return [createVNode(unref(TabsList), null, {
										default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
											return createVNode(unref(TabsTrigger), {
												key: t.value,
												value: t.value,
												class: "min-w-60"
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
												_: 2
											}, 1032, ["value"]);
										}), 64))]),
										_: 1
									}), (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
										return createVNode(unref(TabsContent), {
											key: t.value,
											value: t.value
										}, {
											default: withCtx(() => [t.component && unref(plan) ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
												key: 0,
												plan: unref(plan),
												"plan-id": planId.value
											}, null, 8, ["plan", "plan-id"])) : createCommentVNode("", true)]),
											_: 2
										}, 1032, ["value"]);
									}), 64))];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div></div>`);
						} else _push(`<!---->`);
					} else return [loading.value ? (openBlock(), createBlock("div", {
						key: 0,
						class: "flex justify-center items-center h-64"
					}, [createVNode("div", { class: "text-lg" }, toDisplayString(_ctx.$t("Loading...")), 1)])) : createCommentVNode("", true), !loading.value && unref(plan) ? (openBlock(), createBlock("div", {
						key: 1,
						class: "flex gap-6 h-full"
					}, [createVNode("div", { class: "w-full lg:w-4/12 xl:w-3/12" }, [createVNode(PlanDetails_default, {
						plan: unref(plan),
						"plan-id": planId.value
					}, null, 8, ["plan", "plan-id"])]), createVNode("div", { class: "flex-1" }, [createVNode(unref(Tabs), {
						modelValue: unref(tab),
						"onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
						"default-value": "configuration"
					}, {
						default: withCtx(() => [createVNode(unref(TabsList), null, {
							default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
								return createVNode(unref(TabsTrigger), {
									key: t.value,
									value: t.value,
									class: "min-w-60"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
									_: 2
								}, 1032, ["value"]);
							}), 64))]),
							_: 1
						}), (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
							return createVNode(unref(TabsContent), {
								key: t.value,
								value: t.value
							}, {
								default: withCtx(() => [t.component && unref(plan) ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
									key: 0,
									plan: unref(plan),
									"plan-id": planId.value
								}, null, 8, ["plan", "plan-id"])) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["value"]);
						}), 64))]),
						_: 1
					}, 8, ["modelValue", "onUpdate:modelValue"])])])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/plans/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/plans/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = _id__vue_vue_type_script_setup_true_lang_default;
//#endregion
export { _id__default as default };
