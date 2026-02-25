const { defineComponent: S } = await globalThis.importAsync("vue"), { ref: D } = await globalThis.importAsync("vue"), { createElementBlock: d } = await globalThis.importAsync("vue"), { openBlock: o } = await globalThis.importAsync("vue"), { withModifiers: L } = await globalThis.importAsync("vue"), { unref: f } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createCommentVNode: m } = await globalThis.importAsync("vue"), { Fragment: p } = await globalThis.importAsync("vue"), { createTextVNode: n } = await globalThis.importAsync("vue"), { toDisplayString: s } = await globalThis.importAsync("vue"), { createBlock: g } = await globalThis.importAsync("vue"), { renderList: x } = await globalThis.importAsync("vue"), { useForm: H } = await globalThis.importAsync("vee-validate"), { toast: j } = await globalThis.importAsync("vue-sonner"), y = await globalThis.importAsync("#client/components/Button.vue"), E = y.default || y, h = await globalThis.importAsync("#client/components/ui/card/Card.vue"), M = h.default || h, b = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), v = b.default || b, T = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), C = T.default || T, w = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), A = w.default || w, k = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), F = k.default || k, B = await globalThis.importAsync("#client/components/ui/card/CardFooter.vue"), P = B.default || B, { $fetch: z } = await globalThis.importAsync("#client/utils/fetcher.ts"), V = await globalThis.importAsync("#client/components/FormAutoFieldList.vue"), $ = V.default || V, O = /* @__PURE__ */ S({
  __name: "PlanConfig",
  props: {
    plan: {}
  },
  setup(i) {
    const c = i, r = D(!1), { handleSubmit: N } = H({
      initialValues: c.plan?.config || {}
    }), _ = N(async (l) => {
      r.value = !0;
      const [u] = await z.try(`/api/zbackup/plans/${c.plan.id}`, {
        method: "PATCH",
        data: { config: l }
      });
      if (u) {
        r.value = !1;
        return;
      }
      setTimeout(() => {
        j.success($t("Updated successfully")), r.value = !1;
      }, 800);
    });
    return (l, u) => (o(), d("form", {
      onSubmit: u[0] || (u[0] = L(
        //@ts-ignore
        (...a) => f(_) && f(_)(...a),
        ["prevent"]
      ))
    }, [
      t(M, null, {
        default: e(() => [
          i.plan.strategy_fields && Object.keys(i.plan.strategy_fields).length ? (o(), d(p, { key: 0 }, [
            t(v, null, {
              default: e(() => [
                t(C, null, {
                  default: e(() => [
                    n(s(l.$t("Config")), 1)
                  ]),
                  _: 1
                }),
                t(A, null, {
                  default: e(() => [
                    n(s(l.$t("Configure the backup strategy for the plan.")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(F, { class: "space-y-6" }, {
              default: e(() => [
                c.plan.strategy_fields ? (o(), g($, {
                  key: 0,
                  fields: c.plan.strategy_fields
                }, null, 8, ["fields"])) : m("", !0)
              ]),
              _: 1
            })
          ], 64)) : m("", !0),
          (o(!0), d(p, null, x(i.plan.strategy_fields_sections, (a) => (o(), d(p, {
            key: a.title
          }, [
            t(v, null, {
              default: e(() => [
                t(C, null, {
                  default: e(() => [
                    n(s(a.title), 1)
                  ]),
                  _: 2
                }, 1024),
                a.description ? (o(), g(A, { key: 0 }, {
                  default: e(() => [
                    n(s(a.description), 1)
                  ]),
                  _: 2
                }, 1024)) : m("", !0)
              ]),
              _: 2
            }, 1024),
            t(F, { class: "space-y-6" }, {
              default: e(() => [
                t($, {
                  fields: a.fields
                }, null, 8, ["fields"])
              ]),
              _: 2
            }, 1024)
          ], 64))), 128)),
          t(P, { class: "flex justify-end gap-4" }, {
            default: e(() => [
              t(E, {
                type: "submit",
                loading: r.value
              }, {
                default: e(() => [
                  n(s(l.$t("Save")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 32));
  }
});
export {
  O as default
};
