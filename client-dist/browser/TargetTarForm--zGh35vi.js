import { a as e, c as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./vee-validate-valibot-EojtLyhm.js";
const { createBlock: c } = await globalThis.importAsync("vue"), { createCommentVNode: l } = await globalThis.importAsync("vue"), { createElementBlock: u } = await globalThis.importAsync("vue"), { createElementVNode: d } = await globalThis.importAsync("vue"), { createTextVNode: f } = await globalThis.importAsync("vue"), { createVNode: p } = await globalThis.importAsync("vue"), { defineComponent: m } = await globalThis.importAsync("vue"), { openBlock: h } = await globalThis.importAsync("vue"), { ref: g } = await globalThis.importAsync("vue"), { toDisplayString: _ } = await globalThis.importAsync("vue"), { unref: v } = await globalThis.importAsync("vue"), { watch: y } = await globalThis.importAsync("vue"), { withCtx: b } = await globalThis.importAsync("vue"), { withModifiers: x } = await globalThis.importAsync("vue"), { useForm: S } = await globalThis.importAsync("vee-validate"), { toast: C } = await globalThis.importAsync("vue-sonner"), w = await globalThis.importAsync("#client/components/Button.vue"), T = w.default || w, { $fetch: E } = await globalThis.importAsync("#client/utils/fetcher.ts"), { tryCatch: D } = await globalThis.importAsync("#shared/utils/tryCatch.ts"), { Card: O } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: k } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: A } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: j } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: M } = await globalThis.importAsync("#client/components/ui/card"), N = await globalThis.importAsync("#client/components/FormTextField.vue"), P = N.default || N;
//#region modules/mod/client/components/TargetTarForm.vue?vue&type=script&setup=true&lang.ts
var F = {
	key: 0,
	class: "space-y-4"
}, I = { class: "flex justify-end" }, L = /* @__PURE__ */ m({
	__name: "TargetTarForm",
	props: { target: {} },
	setup(m) {
		let w = m, N = g(!1), L = g(!1), { handleSubmit: R, setValues: z } = S({ validationSchema: s(n({
			slug: e(i(t(), o(/^[a-zA-Z0-9-_]+$/, $t("Slug can only contain lowercase letters, numbers, hyphens and underscores")))),
			max_snapshots: e(i(a($t("Max snapshots must be a number")), r(0, $t("Max snapshots must be 0 or greater"))))
		})) });
		async function B() {
			if (!w.target?.id) return;
			N.value = !0;
			let [e, t] = await D(() => E(`/api/backup/targets/${w.target?.id}/metas`, { method: "GET" }));
			if (e) {
				N.value = !1;
				return;
			}
			let n = t.data, r = n.find((e) => e.name === "slug"), i = n.find((e) => e.name === "max_snapshots");
			z({
				slug: r?.value || void 0,
				max_snapshots: i?.value ? Number(i.value) : void 0
			}), N.value = !1;
		}
		let V = R(async (e) => {
			L.value = !0;
			let t = [E(`/api/backup/targets/${w.target?.id}/metas`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				data: {
					name: "slug",
					value: e.slug
				}
			}), E(`/api/backup/targets/${w.target?.id}/metas`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				data: {
					name: "max_snapshots",
					value: e.max_snapshots
				}
			})], [n] = await D(() => Promise.all(t));
			if (n) {
				L.value = !1;
				return;
			}
			C.success($t("Saved successfully")), L.value = !1;
		});
		return y(() => w.target?.id, () => {
			w.target?.id && B();
		}, { immediate: !0 }), (e, t) => (h(), c(v(O), null, {
			default: b(() => [p(v(j), null, {
				default: b(() => [p(v(M), null, {
					default: b(() => [f(_(e.$t("Tar Configuration")), 1)]),
					_: 1
				}), p(v(A), null, {
					default: b(() => [f(_(e.$t("Configure tar-specific settings for this target")), 1)]),
					_: 1
				})]),
				_: 1
			}), p(v(k), null, {
				default: b(() => [N.value ? (h(), u("div", F, [...t[1] ||= [d("div", { class: "animate-pulse" }, [d("div", { class: "h-4 bg-gray-200 rounded w-1/4 mb-2" }), d("div", { class: "h-10 bg-gray-100 rounded" })], -1)]])) : l("", !0), N.value ? l("", !0) : (h(), u("form", {
					key: 1,
					class: "space-y-6",
					onSubmit: t[0] ||= x((...e) => v(V) && v(V)(...e), ["prevent"])
				}, [
					p(P, {
						name: "slug",
						label: e.$t("Slug"),
						placeholder: e.$t("my-app"),
						hint: e.$t("A unique identifier for this target. This is used to create files and map snapshots to the target")
					}, null, 8, [
						"label",
						"placeholder",
						"hint"
					]),
					p(P, {
						name: "max_snapshots",
						label: e.$t("Max Snapshots"),
						placeholder: e.$t("10"),
						hint: e.$t("Maximum number of backup snapshots to keep. Older snapshots will be automatically deleted when this limit is exceeded. Leave empty for unlimited snapshots."),
						type: "number"
					}, null, 8, [
						"label",
						"placeholder",
						"hint"
					]),
					d("div", I, [p(T, {
						type: "submit",
						loading: L.value
					}, {
						default: b(() => [f(_(e.$t("Save")), 1)]),
						_: 1
					}, 8, ["loading"])])
				], 32))]),
				_: 1
			})]),
			_: 1
		}));
	}
});
//#endregion
export { L as default };
