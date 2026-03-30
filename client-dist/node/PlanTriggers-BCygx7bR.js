const { Fragment } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useModel } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { watch } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { toast } = await globalThis.importAsync("vue-sonner");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
import "date-fns";
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const { tryCatch } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const __module__AlertButton__ = await globalThis.importAsync("#client/components/AlertButton.vue");
const AlertButton = __module__AlertButton__.default || __module__AlertButton__;
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
(await globalThis.importAsync("#client/components/ObjectInspect.vue")).default;
const __module__DialogForm__ = await globalThis.importAsync("#client/components/DialogForm.vue");
const DialogForm = __module__DialogForm__.default || __module__DialogForm__;
const { defineFormFields } = await globalThis.importAsync("#client/components/DialogForm.vue");
const { createId } = await globalThis.importAsync("#client/utils");
const __module__Badge__ = await globalThis.importAsync("#client/components/ui/badge/Badge.vue");
const Badge = __module__Badge__.default || __module__Badge__;
const __module__DropdownMenu__ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenu.vue");
const DropdownMenu = __module__DropdownMenu__.default || __module__DropdownMenu__;
const __module__DropdownMenuTrigger__ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue");
const DropdownMenuTrigger = __module__DropdownMenuTrigger__.default || __module__DropdownMenuTrigger__;
const __module__DropdownMenuContent__ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuContent.vue");
const DropdownMenuContent = __module__DropdownMenuContent__.default || __module__DropdownMenuContent__;
(await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuItem.vue")).default;
//#region modules/mod/shared/entities/trigger.entity.ts
var Trigger = class {
	id;
	type;
	cron;
	events;
	constructor(data) {
		Object.assign(this, data);
	}
};
//#endregion
//#region modules/mod/client/components/PlanTriggers.vue?vue&type=script&setup=true&lang.ts
var PlanTriggers_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PlanTriggers",
	__ssrInlineRender: true,
	props: {
		"plan": {
			type: Object,
			required: true
		},
		"planModifiers": {}
	},
	emits: ["update:plan"],
	setup(__props) {
		const plan = useModel(__props, "plan");
		const triggers = ref([]);
		const loading = ref(false);
		const deletingId = ref();
		const columns = defineColumns([
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
		]);
		const fields = defineFormFields({
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
			cron: (data) => ({
				component: data?.type === "cron" ? "text-field" : "hidden",
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
			events: (data) => ({
				component: data?.type === "event" ? "string-list-input" : "hidden",
				label: $t("Events"),
				description: $t("List of events that will trigger the backup.")
			})
		});
		function load() {
			loading.value = true;
			triggers.value = JSON.parse(JSON.stringify(plan.value.triggers || [])).map((item) => new Trigger(item));
			setTimeout(() => {
				loading.value = false;
			}, 500);
		}
		async function create(data) {
			const item = {
				id: createId(),
				...data
			};
			const items = JSON.parse(JSON.stringify(plan.value.triggers || []));
			items.push(item);
			const [error] = await $fetch.try(`/api/zbackup/plans/${plan.value.id}`, {
				method: "PUT",
				data: { triggers: items }
			});
			if (error) return;
			plan.value.triggers = items.map((item) => new Trigger(item));
		}
		async function update(id, data) {
			const items = JSON.parse(JSON.stringify(plan.value.triggers || []));
			const index = items.findIndex((i) => i.id === id);
			if (index === -1) return;
			items[index] = {
				id,
				...data
			};
			const [error] = await $fetch.try(`/api/zbackup/plans/${plan.value.id}`, {
				method: "PUT",
				data: { triggers: items }
			});
			if (error) return;
			plan.value.triggers = items.map((item) => new Trigger(item));
		}
		async function destroy(id) {
			const items = JSON.parse(JSON.stringify(plan.value.triggers || []));
			const index = items.findIndex((i) => i.id === id);
			if (index === -1) return;
			deletingId.value = id;
			items.splice(index, 1);
			const [error] = await $fetch.try(`/api/zbackup/plans/${plan.value.id}`, {
				method: "PUT",
				data: { triggers: items }
			});
			if (error) {
				deletingId.value = void 0;
				return;
			}
			setTimeout(() => {
				triggers.value = triggers.value.filter((t) => t.id !== id);
				plan.value.triggers = items.map((item) => new Trigger(item));
				deletingId.value = void 0;
			}, 500);
		}
		onMounted(load);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Card), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(CardHeader), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex-1"${_scopeId}>`);
									_push(ssrRenderComponent(unref(CardTitle), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Triggers"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Triggers")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardDescription), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("View and manage triggers for this plan."))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("View and manage triggers for this plan.")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`</div><div class="flex space-x-2"${_scopeId}>`);
									_push(ssrRenderComponent(Button, {
										variant: "outline",
										onClick: load
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(Icon, {
												name: "refreshCw",
												class: { "animate-spin": loading.value }
											}, null, _parent, _scopeId));
											else return [createVNode(Icon, {
												name: "refreshCw",
												class: { "animate-spin": loading.value }
											}, null, 8, ["class"])];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(DialogForm, {
										title: _ctx.$t("Add Trigger"),
										fields: unref(fields),
										handle: create,
										onSubmit: load
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(Button, null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(_ctx.$t("Add"))}`);
													else return [createTextVNode(toDisplayString(_ctx.$t("Add")), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
											else return [createVNode(Button, null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add")), 1)]),
												_: 1
											})];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`</div></div>`);
								} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", { class: "flex-1" }, [createVNode(unref(CardTitle), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Triggers")), 1)]),
									_: 1
								}), createVNode(unref(CardDescription), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("View and manage triggers for this plan.")), 1)]),
									_: 1
								})]), createVNode("div", { class: "flex space-x-2" }, [createVNode(Button, {
									variant: "outline",
									onClick: load
								}, {
									default: withCtx(() => [createVNode(Icon, {
										name: "refreshCw",
										class: { "animate-spin": loading.value }
									}, null, 8, ["class"])]),
									_: 1
								}), createVNode(DialogForm, {
									title: _ctx.$t("Add Trigger"),
									fields: unref(fields),
									handle: create,
									onSubmit: load
								}, {
									default: withCtx(() => [createVNode(Button, null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add")), 1)]),
										_: 1
									})]),
									_: 1
								}, 8, ["title", "fields"])])])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(DataTable, {
									rows: triggers.value,
									columns: unref(columns),
									loading: loading.value
								}, {
									"row-value": withCtx(({ row }, _push, _parent, _scopeId) => {
										if (_push) if (row.type === "cron") _push(`<div${_scopeId}>${ssrInterpolate(row.cron)}</div>`);
										else if (row.type === "event" && row.events?.length) {
											_push(`<div class="flex items-center gap-1"${_scopeId}><!--[-->`);
											ssrRenderList(row.events.slice(0, 2), (e) => {
												_push(ssrRenderComponent(Badge, {
													key: e,
													class: "h-6"
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(e)}`);
														else return [createTextVNode(toDisplayString(e), 1)];
													}),
													_: 2
												}, _parent, _scopeId));
											});
											_push(`<!--]-->`);
											if (row.events.length > 2) _push(ssrRenderComponent(DropdownMenu, null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														_push(ssrRenderComponent(DropdownMenuTrigger, { "as-child": "" }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(ssrRenderComponent(Badge, { class: "h-6 cursor-pointer" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(Icon, { name: "MoreHorizontal" }, null, _parent, _scopeId));
																		else return [createVNode(Icon, { name: "MoreHorizontal" })];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else return [createVNode(Badge, { class: "h-6 cursor-pointer" }, {
																	default: withCtx(() => [createVNode(Icon, { name: "MoreHorizontal" })]),
																	_: 1
																})];
															}),
															_: 2
														}, _parent, _scopeId));
														_push(ssrRenderComponent(DropdownMenuContent, { class: "max-h-60 overflow-y-auto flex flex-col gap-1 p-2" }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) {
																	_push(`<!--[-->`);
																	ssrRenderList(row.events?.slice(2), (e) => {
																		_push(ssrRenderComponent(Badge, { key: e }, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) _push(`${ssrInterpolate(e)}`);
																				else return [createTextVNode(toDisplayString(e), 1)];
																			}),
																			_: 2
																		}, _parent, _scopeId));
																	});
																	_push(`<!--]-->`);
																} else return [(openBlock(true), createBlock(Fragment, null, renderList(row.events?.slice(2), (e) => {
																	return openBlock(), createBlock(Badge, { key: e }, {
																		default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
																		_: 2
																	}, 1024);
																}), 128))];
															}),
															_: 2
														}, _parent, _scopeId));
													} else return [createVNode(DropdownMenuTrigger, { "as-child": "" }, {
														default: withCtx(() => [createVNode(Badge, { class: "h-6 cursor-pointer" }, {
															default: withCtx(() => [createVNode(Icon, { name: "MoreHorizontal" })]),
															_: 1
														})]),
														_: 1
													}), createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto flex flex-col gap-1 p-2" }, {
														default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(row.events?.slice(2), (e) => {
															return openBlock(), createBlock(Badge, { key: e }, {
																default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
																_: 2
															}, 1024);
														}), 128))]),
														_: 2
													}, 1024)];
												}),
												_: 2
											}, _parent, _scopeId));
											else _push(`<!---->`);
											_push(`</div>`);
										} else _push(`<!---->`);
										else return [row.type === "cron" ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(row.cron), 1)) : row.type === "event" && row.events?.length ? (openBlock(), createBlock("div", {
											key: 1,
											class: "flex items-center gap-1"
										}, [(openBlock(true), createBlock(Fragment, null, renderList(row.events.slice(0, 2), (e) => {
											return openBlock(), createBlock(Badge, {
												key: e,
												class: "h-6"
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
												_: 2
											}, 1024);
										}), 128)), row.events.length > 2 ? (openBlock(), createBlock(DropdownMenu, { key: 0 }, {
											default: withCtx(() => [createVNode(DropdownMenuTrigger, { "as-child": "" }, {
												default: withCtx(() => [createVNode(Badge, { class: "h-6 cursor-pointer" }, {
													default: withCtx(() => [createVNode(Icon, { name: "MoreHorizontal" })]),
													_: 1
												})]),
												_: 1
											}), createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto flex flex-col gap-1 p-2" }, {
												default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(row.events?.slice(2), (e) => {
													return openBlock(), createBlock(Badge, { key: e }, {
														default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
														_: 2
													}, 1024);
												}), 128))]),
												_: 2
											}, 1024)]),
											_: 2
										}, 1024)) : createCommentVNode("", true)])) : createCommentVNode("", true)];
									}),
									"row-actions": withCtx(({ row }, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<div class="flex items-center gap-2 justify-end"${_scopeId}>`);
											_push(ssrRenderComponent(DialogForm, {
												title: _ctx.$t("Edit"),
												fields: unref(fields),
												values: row,
												handle: (data) => update(row.id, data),
												onSubmit: load
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(Button, {
														variant: "ghost",
														size: "sm"
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(ssrRenderComponent(Icon, { name: "Edit" }, null, _parent, _scopeId));
															else return [createVNode(Icon, { name: "Edit" })];
														}),
														_: 2
													}, _parent, _scopeId));
													else return [createVNode(Button, {
														variant: "ghost",
														size: "sm"
													}, {
														default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
														_: 1
													})];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(ssrRenderComponent(AlertButton, {
												variant: "ghost",
												size: "sm",
												loading: deletingId.value === row.id,
												onConfirm: ($event) => destroy(row.id)
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(Icon, { name: "trash" }, null, _parent, _scopeId));
													else return [createVNode(Icon, { name: "trash" })];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(`</div>`);
										} else return [createVNode("div", { class: "flex items-center gap-2 justify-end" }, [createVNode(DialogForm, {
											title: _ctx.$t("Edit"),
											fields: unref(fields),
											values: row,
											handle: (data) => update(row.id, data),
											onSubmit: load
										}, {
											default: withCtx(() => [createVNode(Button, {
												variant: "ghost",
												size: "sm"
											}, {
												default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
												_: 1
											})]),
											_: 1
										}, 8, [
											"title",
											"fields",
											"values",
											"handle"
										]), createVNode(AlertButton, {
											variant: "ghost",
											size: "sm",
											loading: deletingId.value === row.id,
											onConfirm: ($event) => destroy(row.id)
										}, {
											default: withCtx(() => [createVNode(Icon, { name: "trash" })]),
											_: 1
										}, 8, ["loading", "onConfirm"])])];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(DataTable, {
									rows: triggers.value,
									columns: unref(columns),
									loading: loading.value
								}, {
									"row-value": withCtx(({ row }) => [row.type === "cron" ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(row.cron), 1)) : row.type === "event" && row.events?.length ? (openBlock(), createBlock("div", {
										key: 1,
										class: "flex items-center gap-1"
									}, [(openBlock(true), createBlock(Fragment, null, renderList(row.events.slice(0, 2), (e) => {
										return openBlock(), createBlock(Badge, {
											key: e,
											class: "h-6"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
											_: 2
										}, 1024);
									}), 128)), row.events.length > 2 ? (openBlock(), createBlock(DropdownMenu, { key: 0 }, {
										default: withCtx(() => [createVNode(DropdownMenuTrigger, { "as-child": "" }, {
											default: withCtx(() => [createVNode(Badge, { class: "h-6 cursor-pointer" }, {
												default: withCtx(() => [createVNode(Icon, { name: "MoreHorizontal" })]),
												_: 1
											})]),
											_: 1
										}), createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto flex flex-col gap-1 p-2" }, {
											default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(row.events?.slice(2), (e) => {
												return openBlock(), createBlock(Badge, { key: e }, {
													default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
													_: 2
												}, 1024);
											}), 128))]),
											_: 2
										}, 1024)]),
										_: 2
									}, 1024)) : createCommentVNode("", true)])) : createCommentVNode("", true)]),
									"row-actions": withCtx(({ row }) => [createVNode("div", { class: "flex items-center gap-2 justify-end" }, [createVNode(DialogForm, {
										title: _ctx.$t("Edit"),
										fields: unref(fields),
										values: row,
										handle: (data) => update(row.id, data),
										onSubmit: load
									}, {
										default: withCtx(() => [createVNode(Button, {
											variant: "ghost",
											size: "sm"
										}, {
											default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
											_: 1
										})]),
										_: 1
									}, 8, [
										"title",
										"fields",
										"values",
										"handle"
									]), createVNode(AlertButton, {
										variant: "ghost",
										size: "sm",
										loading: deletingId.value === row.id,
										onConfirm: ($event) => destroy(row.id)
									}, {
										default: withCtx(() => [createVNode(Icon, { name: "trash" })]),
										_: 1
									}, 8, ["loading", "onConfirm"])])]),
									_: 1
								}, 8, [
									"rows",
									"columns",
									"loading"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(CardHeader), null, {
						default: withCtx(() => [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", { class: "flex-1" }, [createVNode(unref(CardTitle), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Triggers")), 1)]),
							_: 1
						}), createVNode(unref(CardDescription), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("View and manage triggers for this plan.")), 1)]),
							_: 1
						})]), createVNode("div", { class: "flex space-x-2" }, [createVNode(Button, {
							variant: "outline",
							onClick: load
						}, {
							default: withCtx(() => [createVNode(Icon, {
								name: "refreshCw",
								class: { "animate-spin": loading.value }
							}, null, 8, ["class"])]),
							_: 1
						}), createVNode(DialogForm, {
							title: _ctx.$t("Add Trigger"),
							fields: unref(fields),
							handle: create,
							onSubmit: load
						}, {
							default: withCtx(() => [createVNode(Button, null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "fields"])])])]),
						_: 1
					}), createVNode(unref(CardContent), null, {
						default: withCtx(() => [createVNode(DataTable, {
							rows: triggers.value,
							columns: unref(columns),
							loading: loading.value
						}, {
							"row-value": withCtx(({ row }) => [row.type === "cron" ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(row.cron), 1)) : row.type === "event" && row.events?.length ? (openBlock(), createBlock("div", {
								key: 1,
								class: "flex items-center gap-1"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(row.events.slice(0, 2), (e) => {
								return openBlock(), createBlock(Badge, {
									key: e,
									class: "h-6"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
									_: 2
								}, 1024);
							}), 128)), row.events.length > 2 ? (openBlock(), createBlock(DropdownMenu, { key: 0 }, {
								default: withCtx(() => [createVNode(DropdownMenuTrigger, { "as-child": "" }, {
									default: withCtx(() => [createVNode(Badge, { class: "h-6 cursor-pointer" }, {
										default: withCtx(() => [createVNode(Icon, { name: "MoreHorizontal" })]),
										_: 1
									})]),
									_: 1
								}), createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto flex flex-col gap-1 p-2" }, {
									default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(row.events?.slice(2), (e) => {
										return openBlock(), createBlock(Badge, { key: e }, {
											default: withCtx(() => [createTextVNode(toDisplayString(e), 1)]),
											_: 2
										}, 1024);
									}), 128))]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1024)) : createCommentVNode("", true)])) : createCommentVNode("", true)]),
							"row-actions": withCtx(({ row }) => [createVNode("div", { class: "flex items-center gap-2 justify-end" }, [createVNode(DialogForm, {
								title: _ctx.$t("Edit"),
								fields: unref(fields),
								values: row,
								handle: (data) => update(row.id, data),
								onSubmit: load
							}, {
								default: withCtx(() => [createVNode(Button, {
									variant: "ghost",
									size: "sm"
								}, {
									default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
									_: 1
								})]),
								_: 1
							}, 8, [
								"title",
								"fields",
								"values",
								"handle"
							]), createVNode(AlertButton, {
								variant: "ghost",
								size: "sm",
								loading: deletingId.value === row.id,
								onConfirm: ($event) => destroy(row.id)
							}, {
								default: withCtx(() => [createVNode(Icon, { name: "trash" })]),
								_: 1
							}, 8, ["loading", "onConfirm"])])]),
							_: 1
						}, 8, [
							"rows",
							"columns",
							"loading"
						])]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/components/PlanTriggers.vue
var _sfc_setup = PlanTriggers_vue_vue_type_script_setup_true_lang_default.setup;
PlanTriggers_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/PlanTriggers.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PlanTriggers_default = PlanTriggers_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { PlanTriggers_default as default };
