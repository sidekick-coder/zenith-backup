import { u as P } from "./index-BJ0ibMPc.js";
const { defineComponent: L } = await globalThis.importAsync("vue"), { ref: y } = await globalThis.importAsync("vue"), { computed: B } = await globalThis.importAsync("vue"), { defineAsyncComponent: T } = await globalThis.importAsync("vue"), { onMounted: N } = await globalThis.importAsync("vue"), { createBlock: m } = await globalThis.importAsync("vue"), { openBlock: r } = await globalThis.importAsync("vue"), { withCtx: n } = await globalThis.importAsync("vue"), { createElementVNode: t } = await globalThis.importAsync("vue"), { createVNode: u } = await globalThis.importAsync("vue"), { unref: i } = await globalThis.importAsync("vue"), { createTextVNode: h } = await globalThis.importAsync("vue"), { toDisplayString: s } = await globalThis.importAsync("vue"), { createElementBlock: p } = await globalThis.importAsync("vue"), { createCommentVNode: b } = await globalThis.importAsync("vue"), { isRef: E } = await globalThis.importAsync("vue"), { Fragment: w } = await globalThis.importAsync("vue"), { renderList: A } = await globalThis.importAsync("vue"), { resolveDynamicComponent: R } = await globalThis.importAsync("vue"), { useRoute: S } = await globalThis.importAsync("vue-router"), { Card: U } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: F } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: H } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: I } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: M } = await globalThis.importAsync("#client/components/ui/card"), { Tabs: G } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: Q } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: j } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: q } = await globalThis.importAsync("#client/components/ui/tabs"), { $fetch: _ } = await globalThis.importAsync("#client/utils/fetcher.ts"), { tryCatch: C } = await globalThis.importAsync("#shared/utils/tryCatch.ts"), k = await globalThis.importAsync("#client/layouts/AppLayout.vue"), z = k.default || k, J = { class: "flex gap-6 h-full" }, K = { class: "w-full lg:w-4/12 xl:w-3/12" }, O = {
  key: 0,
  class: "space-y-4"
}, W = {
  key: 1,
  class: "space-y-6"
}, X = { class: "text-sm font-medium text-gray-700 block mb-1" }, Y = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, Z = { class: "text-sm font-medium text-gray-700 block mb-1" }, tt = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, at = { class: "text-sm font-medium text-gray-700 block mb-1" }, et = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, ot = { class: "text-sm font-medium text-gray-700 block mb-1" }, st = { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, lt = {
  key: 2,
  class: "text-center py-8"
}, nt = { class: "text-gray-500" }, it = { class: "flex-1" }, dt = /* @__PURE__ */ L({
  __name: "[id]",
  setup(rt) {
    const $ = S().params.id, g = P("tab", "config"), e = y(), c = y(), d = y(!1), f = B(() => {
      const a = [
        {
          value: "snapshots",
          label: $t("Snapshots"),
          component: T(() => import("./SnapshotTable-fDrszwxQ.js"))
        }
      ];
      return c.value?.strategy === "tar" && a.splice(0, 0, {
        value: "config",
        label: $t("Config"),
        component: T(() => import("./TargetTarForm-CE2wri_K.js"))
      }), a;
    });
    async function x() {
      const [a, o] = await C(
        () => _(`/api/backup/targets/${$}`, { method: "GET" })
      );
      a || (e.value = o, d.value = !1);
    }
    async function D() {
      if (!e.value?.plan_id)
        return;
      const [a, o] = await C(() => _(`/api/backup/plans/${e.value?.plan_id}`));
      a || (c.value = o);
    }
    async function V() {
      d.value = !0, await x(), await D(), setTimeout(() => {
        d.value = !1;
      }, 800);
    }
    return N(() => {
      V();
    }), (a, o) => (r(), m(z, {
      breadcrumbs: [
        { label: a.$t("Backup"), to: "/admin/backup" },
        { label: a.$t("Plans"), to: "/admin/backup/plans" },
        { label: c.value?.name || a.$t("Plan"), to: `/admin/backup/plans/${c.value?.id}` },
        { label: e.value?.name || a.$t("Target Details") }
      ]
    }, {
      default: n(() => [
        t("div", J, [
          t("div", K, [
            u(i(U), { class: "h-fit" }, {
              default: n(() => [
                u(i(F), null, {
                  default: n(() => [
                    u(i(H), null, {
                      default: n(() => [
                        h(s(a.$t("Target Details")), 1)
                      ]),
                      _: 1
                    }),
                    u(i(I), null, {
                      default: n(() => [
                        h(s(a.$t("Basic information about this target")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                u(i(M), null, {
                  default: n(() => [
                    d.value ? (r(), p("div", O, [...o[3] || (o[3] = [
                      t("div", { class: "animate-pulse" }, [
                        t("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                        t("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                      ], -1),
                      t("div", { class: "animate-pulse" }, [
                        t("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                        t("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                      ], -1),
                      t("div", { class: "animate-pulse" }, [
                        t("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                        t("div", { class: "h-3 bg-gray-100 rounded w-full" })
                      ], -1)
                    ])])) : b("", !0),
                    !d.value && e.value ? (r(), p("div", W, [
                      t("div", null, [
                        t("label", X, s(a.$t("ID")), 1),
                        t("p", Y, s(e.value.id), 1)
                      ]),
                      t("div", null, [
                        t("label", Z, s(a.$t("Path")), 1),
                        t("p", tt, s(e.value.path), 1)
                      ]),
                      t("div", null, [
                        t("label", at, s(a.$t("Created At")), 1),
                        t("p", et, s(new Date(e.value.created_at).toLocaleString()), 1)
                      ]),
                      t("div", null, [
                        t("label", ot, s(a.$t("Updated At")), 1),
                        t("p", st, s(new Date(e.value.updated_at).toLocaleString()), 1)
                      ])
                    ])) : b("", !0),
                    !d.value && !e.value ? (r(), p("div", lt, [
                      t("p", nt, s(a.$t("Target not found")), 1)
                    ])) : b("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          t("div", it, [
            u(i(G), {
              modelValue: i(g),
              "onUpdate:modelValue": o[2] || (o[2] = (l) => E(g) ? g.value = l : null),
              "default-value": "general"
            }, {
              default: n(() => [
                u(i(Q), null, {
                  default: n(() => [
                    (r(!0), p(w, null, A(f.value, (l) => (r(), m(i(j), {
                      key: l.value,
                      value: l.value,
                      class: "min-w-60"
                    }, {
                      default: n(() => [
                        h(s(l.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128))
                  ]),
                  _: 1
                }),
                (r(!0), p(w, null, A(f.value, (l) => (r(), m(i(q), {
                  key: l.value,
                  value: l.value
                }, {
                  default: n(() => [
                    l.component && c.value && e.value ? (r(), m(R(l.component), {
                      key: 0,
                      target: e.value,
                      "onUpdate:target": o[0] || (o[0] = (v) => e.value = v),
                      plan: c.value,
                      "onUpdate:plan": o[1] || (o[1] = (v) => c.value = v),
                      "plan-id": c.value.id,
                      "target-id": e.value.id
                    }, null, 40, ["target", "plan", "plan-id", "target-id"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["breadcrumbs"]));
  }
});
export {
  dt as default
};
