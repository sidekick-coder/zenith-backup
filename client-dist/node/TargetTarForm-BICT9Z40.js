const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { watch } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { withModifiers } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const { tryCatch } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
import { toTypedSchema } from "@vee-validate/valibot";
import * as v from "valibot";
const __module__FormTextField__ = await globalThis.importAsync("#client/components/FormTextField.vue");
const FormTextField = __module__FormTextField__.default || __module__FormTextField__;
//#region modules/mod/client/components/TargetTarForm.vue?vue&type=script&setup=true&lang.ts
var TargetTarForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TargetTarForm",
	__ssrInlineRender: true,
	props: { target: {} },
	setup(__props) {
		const props = __props;
		const loading = ref(false);
		const saving = ref(false);
		const { handleSubmit, setValues } = useForm({ validationSchema: toTypedSchema(v.object({
			slug: v.optional(v.pipe(v.string(), v.regex(/^[a-zA-Z0-9-_]+$/, $t("Slug can only contain lowercase letters, numbers, hyphens and underscores")))),
			max_snapshots: v.optional(v.pipe(v.number($t("Max snapshots must be a number")), v.minValue(0, $t("Max snapshots must be 0 or greater"))))
		})) });
		async function loadTargetMetas() {
			if (!props.target?.id) return;
			loading.value = true;
			const [error, response] = await tryCatch(() => $fetch(`/api/backup/targets/${props.target?.id}/metas`, { method: "GET" }));
			if (error) {
				loading.value = false;
				return;
			}
			const metas = response.data;
			const slugMeta = metas.find((meta) => meta.name === "slug");
			const maxSnapshotsMeta = metas.find((meta) => meta.name === "max_snapshots");
			setValues({
				slug: slugMeta?.value || void 0,
				max_snapshots: maxSnapshotsMeta?.value ? Number(maxSnapshotsMeta.value) : void 0
			});
			loading.value = false;
		}
		const onSubmit = handleSubmit(async (payload) => {
			saving.value = true;
			const promises = [$fetch(`/api/backup/targets/${props.target?.id}/metas`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				data: {
					name: "slug",
					value: payload.slug
				}
			}), $fetch(`/api/backup/targets/${props.target?.id}/metas`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				data: {
					name: "max_snapshots",
					value: payload.max_snapshots
				}
			})];
			const [error] = await tryCatch(() => Promise.all(promises));
			if (error) {
				saving.value = false;
				return;
			}
			toast.success($t("Saved successfully"));
			saving.value = false;
		});
		watch(() => props.target?.id, () => {
			if (props.target?.id) loadTargetMetas();
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Card), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(CardHeader), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardTitle), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Tar Configuration"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Tar Configuration")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardDescription), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Configure tar-specific settings for this target"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Configure tar-specific settings for this target")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(unref(CardTitle), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Tar Configuration")), 1)]),
									_: 1
								}), createVNode(unref(CardDescription), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Configure tar-specific settings for this target")), 1)]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (loading.value) _push(`<div class="space-y-4"${_scopeId}><div class="animate-pulse"${_scopeId}><div class="h-4 bg-gray-200 rounded w-1/4 mb-2"${_scopeId}></div><div class="h-10 bg-gray-100 rounded"${_scopeId}></div></div></div>`);
									else _push(`<!---->`);
									if (!loading.value) {
										_push(`<form class="space-y-6"${_scopeId}>`);
										_push(ssrRenderComponent(FormTextField, {
											name: "slug",
											label: _ctx.$t("Slug"),
											placeholder: _ctx.$t("my-app"),
											hint: _ctx.$t("A unique identifier for this target. This is used to create files and map snapshots to the target")
										}, null, _parent, _scopeId));
										_push(ssrRenderComponent(FormTextField, {
											name: "max_snapshots",
											label: _ctx.$t("Max Snapshots"),
											placeholder: _ctx.$t("10"),
											hint: _ctx.$t("Maximum number of backup snapshots to keep. Older snapshots will be automatically deleted when this limit is exceeded. Leave empty for unlimited snapshots."),
											type: "number"
										}, null, _parent, _scopeId));
										_push(`<div class="flex justify-end"${_scopeId}>`);
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
										_push(`</div></form>`);
									} else _push(`<!---->`);
								} else return [loading.value ? (openBlock(), createBlock("div", {
									key: 0,
									class: "space-y-4"
								}, [createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-1/4 mb-2" }), createVNode("div", { class: "h-10 bg-gray-100 rounded" })])])) : createCommentVNode("", true), !loading.value ? (openBlock(), createBlock("form", {
									key: 1,
									class: "space-y-6",
									onSubmit: withModifiers(unref(onSubmit), ["prevent"])
								}, [
									createVNode(FormTextField, {
										name: "slug",
										label: _ctx.$t("Slug"),
										placeholder: _ctx.$t("my-app"),
										hint: _ctx.$t("A unique identifier for this target. This is used to create files and map snapshots to the target")
									}, null, 8, [
										"label",
										"placeholder",
										"hint"
									]),
									createVNode(FormTextField, {
										name: "max_snapshots",
										label: _ctx.$t("Max Snapshots"),
										placeholder: _ctx.$t("10"),
										hint: _ctx.$t("Maximum number of backup snapshots to keep. Older snapshots will be automatically deleted when this limit is exceeded. Leave empty for unlimited snapshots."),
										type: "number"
									}, null, 8, [
										"label",
										"placeholder",
										"hint"
									]),
									createVNode("div", { class: "flex justify-end" }, [createVNode(Button, {
										type: "submit",
										loading: saving.value
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
										_: 1
									}, 8, ["loading"])])
								], 40, ["onSubmit"])) : createCommentVNode("", true)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(CardHeader), null, {
						default: withCtx(() => [createVNode(unref(CardTitle), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Tar Configuration")), 1)]),
							_: 1
						}), createVNode(unref(CardDescription), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Configure tar-specific settings for this target")), 1)]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(CardContent), null, {
						default: withCtx(() => [loading.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "space-y-4"
						}, [createVNode("div", { class: "animate-pulse" }, [createVNode("div", { class: "h-4 bg-gray-200 rounded w-1/4 mb-2" }), createVNode("div", { class: "h-10 bg-gray-100 rounded" })])])) : createCommentVNode("", true), !loading.value ? (openBlock(), createBlock("form", {
							key: 1,
							class: "space-y-6",
							onSubmit: withModifiers(unref(onSubmit), ["prevent"])
						}, [
							createVNode(FormTextField, {
								name: "slug",
								label: _ctx.$t("Slug"),
								placeholder: _ctx.$t("my-app"),
								hint: _ctx.$t("A unique identifier for this target. This is used to create files and map snapshots to the target")
							}, null, 8, [
								"label",
								"placeholder",
								"hint"
							]),
							createVNode(FormTextField, {
								name: "max_snapshots",
								label: _ctx.$t("Max Snapshots"),
								placeholder: _ctx.$t("10"),
								hint: _ctx.$t("Maximum number of backup snapshots to keep. Older snapshots will be automatically deleted when this limit is exceeded. Leave empty for unlimited snapshots."),
								type: "number"
							}, null, 8, [
								"label",
								"placeholder",
								"hint"
							]),
							createVNode("div", { class: "flex justify-end" }, [createVNode(Button, {
								type: "submit",
								loading: saving.value
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
								_: 1
							}, 8, ["loading"])])
						], 40, ["onSubmit"])) : createCommentVNode("", true)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/components/TargetTarForm.vue
var _sfc_setup = TargetTarForm_vue_vue_type_script_setup_true_lang_default.setup;
TargetTarForm_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/TargetTarForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var TargetTarForm_default = TargetTarForm_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { TargetTarForm_default as default };
