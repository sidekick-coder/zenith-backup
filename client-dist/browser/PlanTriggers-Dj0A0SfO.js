const { defineComponent: q } = await globalThis.importAsync("vue"), { useModel: G } = await globalThis.importAsync("vue"), { ref: T } = await globalThis.importAsync("vue"), { onMounted: K } = await globalThis.importAsync("vue"), { createBlock: f } = await globalThis.importAsync("vue"), { openBlock: r } = await globalThis.importAsync("vue"), { unref: c } = await globalThis.importAsync("vue"), { withCtx: n } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { createElementVNode: h } = await globalThis.importAsync("vue"), { createTextVNode: p } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { normalizeClass: Q } = await globalThis.importAsync("vue"), { createElementBlock: y } = await globalThis.importAsync("vue"), { createCommentVNode: M } = await globalThis.importAsync("vue"), { Fragment: N } = await globalThis.importAsync("vue"), { renderList: x } = await globalThis.importAsync("vue");
await globalThis.importAsync("vue-sonner");
const B = await globalThis.importAsync("#client/components/DataTable.vue"), R = B.default || B, { defineColumns: W } = await globalThis.importAsync("#client/components/DataTable.vue"), { $fetch: A } = await globalThis.importAsync("#client/utils/fetcher.ts");
await globalThis.importAsync("#shared/utils/tryCatch.ts");
const S = await globalThis.importAsync("#client/components/Button.vue"), C = S.default || S, E = await globalThis.importAsync("#client/components/Icon.vue"), b = E.default || E, O = await globalThis.importAsync("#client/components/AlertButton.vue"), X = O.default || O, { Card: Y } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: Z } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: ee } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: te } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: ne } = await globalThis.importAsync("#client/components/ui/card");
await globalThis.importAsync("#client/components/ObjectInspect.vue");
const F = await globalThis.importAsync("#client/components/DialogForm.vue"), I = F.default || F, { defineFormFields: oe } = await globalThis.importAsync("#client/components/DialogForm.vue"), { createId: ae } = await globalThis.importAsync("#client/utils"), V = await globalThis.importAsync("#client/components/ui/badge/Badge.vue"), D = V.default || V, z = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenu.vue"), ie = z.default || z, J = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue"), se = J.default || J, j = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuContent.vue"), le = j.default || j;
await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuItem.vue");
class w {
  id;
  type;
  cron;
  events;
  constructor(i) {
    Object.assign(this, i);
  }
}
const re = { class: "flex items-center justify-between" }, ce = { class: "flex-1" }, ue = { class: "flex space-x-2" }, de = { key: 0 }, pe = {
  key: 1,
  class: "flex items-center gap-1"
}, me = { class: "flex items-center gap-2 justify-end" }, ge = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "PlanTriggers",
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup($) {
    const i = G($, "plan"), m = T([]), g = T(!1), v = T(), P = W([
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
    ]), k = oe({
      type: {
        component: "select",
        label: $t("Type"),
        options: [
          {
            label: $t("Cron"),
            value: "cron"
          },
          {
            label: $t("Event"),
            value: "event"
          }
        ]
      },
      cron: (t) => ({
        component: t?.type === "cron" ? "text-field" : "hidden",
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
      events: (t) => ({
        component: t?.type === "event" ? "string-list-input" : "hidden",
        label: $t("Events"),
        description: $t("List of events that will trigger the backup.")
      })
    });
    function _() {
      g.value = !0;
      const t = JSON.parse(JSON.stringify(i.value.triggers || []));
      m.value = t.map((s) => new w(s)), setTimeout(() => {
        g.value = !1;
      }, 500);
    }
    async function H(t) {
      const e = {
        id: ae(),
        ...t
      }, a = JSON.parse(JSON.stringify(i.value.triggers || []));
      a.push(e);
      const [l] = await A.try(`/api/zbackup/plans/${i.value.id}`, {
        method: "PUT",
        data: {
          triggers: a
        }
      });
      l || (i.value.triggers = a.map((d) => new w(d)));
    }
    async function L(t, s) {
      const e = JSON.parse(JSON.stringify(i.value.triggers || [])), a = e.findIndex((d) => d.id === t);
      if (a === -1) return;
      e[a] = {
        id: t,
        ...s
      };
      const [l] = await A.try(`/api/zbackup/plans/${i.value.id}`, {
        method: "PUT",
        data: {
          triggers: e
        }
      });
      l || (i.value.triggers = e.map((d) => new w(d)));
    }
    async function U(t) {
      const s = JSON.parse(JSON.stringify(i.value.triggers || [])), e = s.findIndex((l) => l.id === t);
      if (e === -1) return;
      v.value = t, s.splice(e, 1);
      const [a] = await A.try(`/api/zbackup/plans/${i.value.id}`, {
        method: "PUT",
        data: {
          triggers: s
        }
      });
      if (a) {
        v.value = void 0;
        return;
      }
      setTimeout(() => {
        m.value = m.value.filter((l) => l.id !== t), i.value.triggers = s.map((l) => new w(l)), v.value = void 0;
      }, 500);
    }
    return K(_), (t, s) => (r(), f(c(Y), null, {
      default: n(() => [
        o(c(Z), null, {
          default: n(() => [
            h("div", re, [
              h("div", ce, [
                o(c(ee), null, {
                  default: n(() => [
                    p(u(t.$t("Triggers")), 1)
                  ]),
                  _: 1
                }),
                o(c(te), null, {
                  default: n(() => [
                    p(u(t.$t("View and manage triggers for this plan.")), 1)
                  ]),
                  _: 1
                })
              ]),
              h("div", ue, [
                o(C, {
                  variant: "outline",
                  onClick: _
                }, {
                  default: n(() => [
                    o(b, {
                      name: "refreshCw",
                      class: Q({ "animate-spin": g.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }),
                o(I, {
                  title: t.$t("Add Trigger"),
                  fields: c(k),
                  handle: H,
                  onSubmit: _
                }, {
                  default: n(() => [
                    o(C, null, {
                      default: n(() => [
                        p(u(t.$t("Add")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title", "fields"])
              ])
            ])
          ]),
          _: 1
        }),
        o(c(ne), null, {
          default: n(() => [
            o(R, {
              rows: m.value,
              columns: c(P),
              loading: g.value
            }, {
              "row-value": n(({ row: e }) => [
                e.type === "cron" ? (r(), y("div", de, u(e.cron), 1)) : e.type === "event" && e.events?.length ? (r(), y("div", pe, [
                  (r(!0), y(N, null, x(e.events.slice(0, 2), (a) => (r(), f(D, {
                    key: a,
                    class: "h-6"
                  }, {
                    default: n(() => [
                      p(u(a), 1)
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  e.events.length > 2 ? (r(), f(ie, { key: 0 }, {
                    default: n(() => [
                      o(se, { "as-child": "" }, {
                        default: n(() => [
                          o(D, { class: "h-6 cursor-pointer" }, {
                            default: n(() => [
                              o(b, { name: "MoreHorizontal" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      o(le, { class: "max-h-60 overflow-y-auto flex flex-col gap-1 p-2" }, {
                        default: n(() => [
                          (r(!0), y(N, null, x(e.events?.slice(2), (a) => (r(), f(D, { key: a }, {
                            default: n(() => [
                              p(u(a), 1)
                            ]),
                            _: 2
                          }, 1024))), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : M("", !0)
                ])) : M("", !0)
              ]),
              "row-actions": n(({ row: e }) => [
                h("div", me, [
                  o(I, {
                    title: t.$t("Edit"),
                    fields: c(k),
                    values: e,
                    handle: (a) => L(e.id, a),
                    onSubmit: _
                  }, {
                    default: n(() => [
                      o(C, {
                        variant: "ghost",
                        size: "sm"
                      }, {
                        default: n(() => [
                          o(b, { name: "Edit" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["title", "fields", "values", "handle"]),
                  o(X, {
                    variant: "ghost",
                    size: "sm",
                    loading: v.value === e.id,
                    onConfirm: (a) => U(e.id)
                  }, {
                    default: n(() => [
                      o(b, { name: "trash" })
                    ]),
                    _: 1
                  }, 8, ["loading", "onConfirm"])
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
  ge as default
};
