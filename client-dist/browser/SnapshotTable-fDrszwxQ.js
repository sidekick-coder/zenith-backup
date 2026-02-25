import { f as q, S as J } from "./snapshot.entity-Cf_ZlVq5.js";
const { defineComponent: N } = await globalThis.importAsync("vue"), { ref: d } = await globalThis.importAsync("vue"), { onMounted: E } = await globalThis.importAsync("vue"), { createBlock: w } = await globalThis.importAsync("vue"), { openBlock: g } = await globalThis.importAsync("vue"), { unref: s } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { createElementVNode: c } = await globalThis.importAsync("vue"), { createTextVNode: p } = await globalThis.importAsync("vue"), { toDisplayString: r } = await globalThis.importAsync("vue"), { normalizeClass: j } = await globalThis.importAsync("vue"), { createCommentVNode: F } = await globalThis.importAsync("vue");
await globalThis.importAsync("vue-sonner");
await globalThis.importAsync("vee-validate");
await globalThis.importAsync("#client/components/FormTextField.vue");
const v = await globalThis.importAsync("#client/components/Button.vue"), T = v.default || v;
await globalThis.importAsync("#client/components/ui/dialog");
const { $fetch: H } = await globalThis.importAsync("#client/utils/fetcher.ts");
await globalThis.importAsync("#shared/utils/tryCatch.ts");
await globalThis.importAsync("#client/components/DriveEntryPicker.vue");
const y = await globalThis.importAsync("#client/components/DataTable.vue"), O = y.default || y, { defineColumns: R } = await globalThis.importAsync("#client/components/DataTable.vue"), b = await globalThis.importAsync("#client/components/Icon.vue"), m = b.default || b, A = await globalThis.importAsync("#client/components/AlertButton.vue"), C = A.default || A, { Card: x } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: P } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: G } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: L } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: U } = await globalThis.importAsync("#client/components/ui/card"), D = await globalThis.importAsync("#client/components/ObjectInspect.vue"), K = D.default || D, $ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenu.vue"), Q = $.default || $, M = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue"), W = M.default || M, k = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuItem.vue"), I = k.default || k, z = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuContent.vue"), X = z.default || z, Y = { class: "flex items-center justify-between" }, Z = { class: "flex items-center gap-2 justify-end" }, tt = { class: "sr-only" }, ot = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "SnapshotTable",
  props: {
    planId: {}
  },
  setup(h) {
    const B = h, f = d([]), i = d(!1), l = d();
    d(null);
    const S = R([
      {
        id: "id",
        label: $t("Snapshot ID"),
        field: "id"
      },
      {
        id: "description",
        label: $t("Description"),
        field: "description"
      },
      {
        id: "trigger",
        label: $t("Trigger"),
        field: "trigger_type"
      },
      {
        id: "size",
        label: $t("Size"),
        field: "humanSize"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (o) => o.created_at ? q(new Date(o.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
      },
      { id: "actions" }
    ]);
    async function u() {
      i.value = !0;
      const o = `/api/zbackup/plans/${B.planId}/snapshots`, [a, n] = await H.try(o, { method: "GET" });
      if (a) {
        i.value = !1;
        return;
      }
      const _ = n.items || [];
      f.value = _.map((V) => new J(V)), setTimeout(() => {
        i.value = !1;
      }, 500);
    }
    return E(u), (o, a) => (g(), w(s(x), null, {
      default: e(() => [
        t(s(P), null, {
          default: e(() => [
            c("div", Y, [
              c("div", null, [
                t(s(G), null, {
                  default: e(() => [
                    p(r(o.$t("Snapshots")), 1)
                  ]),
                  _: 1
                }),
                t(s(L), null, {
                  default: e(() => [
                    p(r(o.$t("View and manage snapshots for this plan.")), 1)
                  ]),
                  _: 1
                })
              ]),
              t(T, {
                variant: "outline",
                onClick: u
              }, {
                default: e(() => [
                  t(m, {
                    name: "refreshCw",
                    class: j({ "animate-spin": i.value })
                  }, null, 8, ["class"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        t(s(U), null, {
          default: e(() => [
            l.value ? (g(), w(K, {
              key: 0,
              "model-value": l.value,
              open: !0,
              "onUpdate:open": a[0] || (a[0] = (n) => {
                n || (l.value = void 0);
              })
            }, {
              default: e(() => [...a[1] || (a[1] = [
                c("div", { class: "hidden" }, null, -1)
              ])]),
              _: 1
            }, 8, ["model-value"])) : F("", !0),
            t(O, {
              rows: f.value,
              columns: s(S),
              loading: i.value
            }, {
              "row-actions": e(({ row: n }) => [
                c("div", Z, [
                  t(C, {
                    variant: "ghost",
                    size: "sm",
                    "fetch-method": "POST",
                    fetch: `/api/zbackup/plans/${h.planId}/snapshots/${n.id}/restore`,
                    tooltip: o.$t("Restore this snapshot"),
                    description: o.$t("Are you sure you want to restore this snapshot? This action cannot be stopped."),
                    "toast-on-success": o.$t("Restore successfully."),
                    onFetched: u
                  }, {
                    default: e(() => [
                      t(m, { name: "TimerReset" })
                    ]),
                    _: 1
                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                  t(C, {
                    variant: "ghost",
                    size: "sm",
                    "fetch-method": "DELETE",
                    fetch: `/api/zbackup/plans/${h.planId}/snapshots/${n.id}`,
                    onFetched: u
                  }, {
                    default: e(() => [
                      t(m, { name: "trash" })
                    ]),
                    _: 1
                  }, 8, ["fetch"]),
                  t(Q, null, {
                    default: e(() => [
                      t(W, { "as-child": "" }, {
                        default: e(() => [
                          t(T, {
                            variant: "ghost",
                            class: "w-8 h-8 p-0"
                          }, {
                            default: e(() => [
                              c("span", tt, r(o.$t("More")), 1),
                              t(m, {
                                name: "MoreVertical",
                                class: "w-3 h-3 sm:w-4 sm:h-4"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      t(X, { class: "max-h-60 overflow-y-auto" }, {
                        default: e(() => [
                          t(I, {
                            class: "cursor-pointer",
                            onClick: (_) => l.value = n.metadata
                          }, {
                            default: e(() => [
                              p(r(o.$t("Metadata")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          t(I, {
                            class: "cursor-pointer",
                            onClick: (_) => l.value = n.data
                          }, {
                            default: e(() => [
                              p(r(o.$t("Data")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ]),
              _: 1
            }, 8, ["rows", "columns", "loading"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  ot as default
};
