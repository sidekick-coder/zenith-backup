import { u as G } from "./index-BJ0ibMPc.js";
import { u as dt } from "./vue.Bm-NbY4b-Q5152MOJ.js";
const { defineComponent: I } = await globalThis.importAsync("vue"), { ref: w } = await globalThis.importAsync("vue"), { watch: P } = await globalThis.importAsync("vue"), { createElementBlock: v } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { withModifiers: z } = await globalThis.importAsync("vue"), { unref: e } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { withCtx: o } = await globalThis.importAsync("vue"), { createTextVNode: f } = await globalThis.importAsync("vue"), { toDisplayString: b } = await globalThis.importAsync("vue"), { computed: H } = await globalThis.importAsync("vue"), { defineAsyncComponent: y } = await globalThis.importAsync("vue"), { onMounted: M } = await globalThis.importAsync("vue"), { onServerPrefetch: j } = await globalThis.importAsync("vue"), { createBlock: $ } = await globalThis.importAsync("vue"), { createCommentVNode: T } = await globalThis.importAsync("vue"), { createElementVNode: _ } = await globalThis.importAsync("vue"), { isRef: O } = await globalThis.importAsync("vue"), { Fragment: C } = await globalThis.importAsync("vue"), { renderList: k } = await globalThis.importAsync("vue"), { resolveDynamicComponent: U } = await globalThis.importAsync("vue"), { useRoute: Q } = await globalThis.importAsync("vue-router"), { useRouter: q } = await globalThis.importAsync("vue-router"), { toast: g } = await globalThis.importAsync("vue-sonner"), F = await globalThis.importAsync("#client/layouts/AppLayout.vue"), J = F.default || F, S = await globalThis.importAsync("#client/facades/fetch.facade.ts"), K = S.default || S, { useForm: W } = await globalThis.importAsync("vee-validate"), V = await globalThis.importAsync("#client/components/FormTextField.vue"), X = V.default || V, B = await globalThis.importAsync("#client/components/FormTextarea.vue"), Y = B.default || B, D = await globalThis.importAsync("#client/components/FormSwitch.vue"), Z = D.default || D, E = await globalThis.importAsync("#client/components/Button.vue"), L = E.default || E, N = await globalThis.importAsync("#client/components/Icon.vue"), tt = N.default || N, { Card: et } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: at } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: ot } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: nt } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: lt } = await globalThis.importAsync("#client/components/ui/card"), { CardFooter: it } = await globalThis.importAsync("#client/components/ui/card"), { $fetch: R } = await globalThis.importAsync("#client/utils/fetcher.ts"), x = await globalThis.importAsync("#client/components/DialogForm.vue"), st = x.default || x, { Tabs: ct } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: rt } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: ut } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: pt } = await globalThis.importAsync("#client/components/ui/tabs"), { useState: mt } = await globalThis.importAsync("#client/composables/useState.ts"), bt = /* @__PURE__ */ I({
  __name: "PlanDetails",
  props: {
    plan: {},
    planId: {}
  },
  setup(A) {
    const r = A, u = w(!1), { handleSubmit: p, setValues: n } = W({
      initialValues: r.plan
    }), m = p(async (t) => {
      u.value = !0;
      const [l] = await R.try(`/api/zbackup/plans/${r.planId}`, {
        method: "PATCH",
        data: {
          name: t.name,
          description: t.description,
          active: t.active
        }
      });
      if (l) {
        u.value = !1, g.error($t("Failed to update."));
        return;
      }
      setTimeout(() => {
        u.value = !1, g.success($t("Updated successfully."));
      }, 800);
    });
    P(() => r.plan, (t) => {
      t && n({
        name: t.name,
        description: t.description || ""
      });
    }, { immediate: !0 });
    const i = w(!1);
    async function h(t) {
      i.value = !0;
      const [l] = await R.try(`/api/zbackup/plans/${r.planId}/backup`, {
        method: "POST",
        data: t
      });
      if (l) {
        i.value = !1;
        return;
      }
      setTimeout(() => {
        g.success($t("Executed")), i.value = !1;
      }, 800);
    }
    return (t, l) => (c(), v("form", {
      onSubmit: l[0] || (l[0] = z(
        //@ts-ignore
        (...d) => e(m) && e(m)(...d),
        ["prevent"]
      ))
    }, [
      a(e(et), null, {
        default: o(() => [
          a(e(at), null, {
            default: o(() => [
              a(e(ot), null, {
                default: o(() => [
                  f(b(t.$t("Plan details")), 1)
                ]),
                _: 1
              }),
              a(e(nt), null, {
                default: o(() => [
                  f(b(t.$t("Edit details and configuration.")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          a(e(lt), { class: "space-y-6" }, {
            default: o(() => [
              a(X, {
                name: "name",
                label: t.$t("Name"),
                placeholder: t.$t("Enter plan name")
              }, null, 8, ["label", "placeholder"]),
              a(Z, {
                name: "active",
                label: t.$t("Active"),
                hint: t.$t("Activate or deactivate this backup plan")
              }, null, 8, ["label", "hint"]),
              a(Y, {
                name: "description",
                label: t.$t("Description"),
                placeholder: t.$t("Enter plan description"),
                hint: t.$t("Optional description for this backup plan")
              }, null, 8, ["label", "placeholder", "hint"])
            ]),
            _: 1
          }),
          a(e(it), { class: "flex justify-end gap-4" }, {
            default: o(() => [
              a(st, {
                title: t.$t("Execute Backup"),
                description: t.$t("Execute a manual backup for this plan."),
                "submit-text": t.$t("Run Backup"),
                handle: h,
                fields: {
                  description: {
                    component: "text-field",
                    label: t.$t("Description")
                  }
                }
              }, {
                default: o(() => [
                  a(L, {
                    variant: "outline",
                    loading: i.value
                  }, {
                    default: o(() => [
                      a(tt, { name: "play" }),
                      f(" " + b(t.$t("Run")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["title", "description", "submit-text", "fields"]),
              a(L, {
                type: "submit",
                loading: u.value
              }, {
                default: o(() => [
                  f(b(t.$t("Save")), 1)
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
}), vt = {
  key: 0,
  class: "flex justify-center items-center h-64"
}, ft = { class: "text-lg" }, ht = {
  key: 1,
  class: "flex gap-6 h-full"
}, gt = { class: "w-full lg:w-4/12 xl:w-3/12" }, yt = { class: "flex-1" }, wt = /* @__PURE__ */ I({
  __name: "[id]",
  setup(A) {
    const r = Q(), u = q(), p = H(() => String(r.params.id)), n = mt(`zbackup-plan-${p.value}`), m = G("tab", "config"), i = w(!1), h = [
      {
        value: "config",
        label: $t("Configuration"),
        component: y(() => import("./PlanConfig-Bh-TtBJs.js"))
      },
      {
        value: "triggers",
        label: $t("Triggers"),
        component: y(() => import("./PlanTriggers-Dj0A0SfO.js"))
      },
      {
        value: "snapshots",
        label: $t("Snapshots"),
        component: y(() => import("./SnapshotTable-fDrszwxQ.js"))
      }
    ];
    async function t() {
      i.value = !0;
      const [l, d] = await K.try(`/api/zbackup/plans/${p.value}`);
      if (l) {
        i.value = !1, g.error($t("Failed to load plan details.")), u.push("/admin/zbackup/plans");
        return;
      }
      n.value = d, i.value = !1;
    }
    return dt({
      title: () => n.value ? n.value.name : $t("Loading...")
    }), M(async () => {
      n.value || await t();
    }), j(async () => {
      n.value || await t();
    }), (l, d) => (c(), $(J, {
      breadcrumbs: [
        { label: l.$t("Backup"), to: "/admin/backup" },
        { label: l.$t("Plans"), to: "/admin/backup/plans" },
        { label: e(n)?.name || l.$t("Plan"), to: `/admin/backup/plans/${e(n)?.id}` }
      ]
    }, {
      default: o(() => [
        i.value ? (c(), v("div", vt, [
          _("div", ft, b(l.$t("Loading...")), 1)
        ])) : T("", !0),
        !i.value && e(n) ? (c(), v("div", ht, [
          _("div", gt, [
            a(bt, {
              plan: e(n),
              "plan-id": p.value
            }, null, 8, ["plan", "plan-id"])
          ]),
          _("div", yt, [
            a(e(ct), {
              modelValue: e(m),
              "onUpdate:modelValue": d[0] || (d[0] = (s) => O(m) ? m.value = s : null),
              "default-value": "configuration"
            }, {
              default: o(() => [
                a(e(rt), null, {
                  default: o(() => [
                    (c(), v(C, null, k(h, (s) => a(e(ut), {
                      key: s.value,
                      value: s.value,
                      class: "min-w-60"
                    }, {
                      default: o(() => [
                        f(b(s.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"])), 64))
                  ]),
                  _: 1
                }),
                (c(), v(C, null, k(h, (s) => a(e(pt), {
                  key: s.value,
                  value: s.value
                }, {
                  default: o(() => [
                    s.component && e(n) ? (c(), $(U(s.component), {
                      key: 0,
                      plan: e(n),
                      "plan-id": p.value
                    }, null, 8, ["plan", "plan-id"])) : T("", !0)
                  ]),
                  _: 2
                }, 1032, ["value"])), 64))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : T("", !0)
      ]),
      _: 1
    }, 8, ["breadcrumbs"]));
  }
});
export {
  wt as default
};
