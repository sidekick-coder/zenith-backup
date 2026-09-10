import { defineComponent as k, ref as f, onMounted as E, openBlock as p, createElementBlock as z, Fragment as C, createVNode as t, unref as l, withCtx as a, createElementVNode as s, toDisplayString as r, createTextVNode as m, normalizeClass as P, createBlock as $ } from "vue";
import { H as D } from "./components-C9f3-UCt.mjs";
import { $ as w, c as A, b as x, z as H, v as M, x as b, D as g, d, a as N, n as S, W as V, T as j } from "./index.es-BISz4hkw.mjs";
import { P as B, R as F, x as y } from "./index-C4oIW2_2.mjs";
const K = ["content"], L = { class: "flex items-center justify-between" }, R = { class: "flex items-center gap-2" }, W = { class: "flex items-center gap-2 justify-end" }, U = /* @__PURE__ */ k({
  __name: "index",
  setup(G) {
    const v = f([]), o = f(!1), u = f([]), _ = B([
      {
        id: "active",
        label: $t("Active"),
        field: "active",
        width: 80
      },
      {
        id: "id",
        label: $t("ID"),
        field: "id"
      },
      {
        id: "plan_id",
        label: $t("Plan"),
        field: "plan_id"
      },
      {
        id: "type",
        label: $t("Type"),
        field: "type"
      },
      {
        id: "value",
        label: $t("Value"),
        field: "value"
      },
      { id: "actions" }
    ]), h = F({
      plan_id: {
        component: "select",
        label: $t("Plan"),
        fetch: "/api/zbackup/plans",
        valueKey: "id",
        labelKey: "name"
      },
      type: {
        component: "select",
        label: $t("Type"),
        options: [
          { value: "cron", label: $t("Cron") },
          { value: "event", label: $t("Event") }
        ]
      },
      value: (e) => ({
        component: e?.type ? "text-field" : "hidden",
        label: e?.type === "cron" ? $t("Cron Expression") : $t("Event Name"),
        placeholder: e?.type === "cron" ? "0 0 * * *" : "backup:completed"
      })
    });
    async function n() {
      o.value = !0;
      const [e, c] = await y.try(
        "/api/zbackup/triggers",
        { method: "GET" }
      );
      if (e) {
        o.value = !1;
        return;
      }
      v.value = c.items || [], await new Promise((i) => setTimeout(i, 300)), o.value = !1;
    }
    async function T(e) {
      u.value.push(e.id), await y.fetch(`/api/zbackup/triggers/${e.id}`, {
        method: "PATCH",
        data: { active: !e.active }
      }), setTimeout(() => {
        n(), u.value = u.value.filter((c) => c !== e.id);
      }, 500);
    }
    return E(n), (e, c) => (p(), z(
      C,
      null,
      [
        t(l(D), null, {
          default: a(() => [
            s(
              "title",
              null,
              r(e.$t("Triggers")),
              1
              /* TEXT */
            ),
            s("meta", {
              name: "description",
              content: e.$t("Manage your backup triggers")
            }, null, 8, K)
          ]),
          _: 1
          /* STABLE */
        }),
        t(w, null, {
          default: a(() => [
            t(l(A), null, {
              default: a(() => [
                t(l(x), null, {
                  default: a(() => [
                    s("div", L, [
                      s("div", null, [
                        t(l(H), null, {
                          default: a(() => [
                            m(
                              r(e.$t("Triggers")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        t(l(M), null, {
                          default: a(() => [
                            m(
                              r(e.$t("Manage your backup triggers")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      s("div", R, [
                        t(b, {
                          title: e.$t("Add Trigger"),
                          fields: l(h),
                          fetch: "/api/zbackup/triggers",
                          "fetch-method": "POST",
                          onSubmit: n
                        }, {
                          default: a(() => [
                            t(g, null, {
                              default: a(() => [
                                t(d, { name: "Plus" }),
                                m(
                                  " " + r(e.$t("Add")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["title", "fields"]),
                        t(g, {
                          variant: "outline",
                          onClick: n
                        }, {
                          default: a(() => [
                            t(d, {
                              name: "refreshCw",
                              class: P({ "animate-spin": o.value })
                            }, null, 8, ["class"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                t(l(N), null, {
                  default: a(() => [
                    t(l(S), {
                      rows: v.value,
                      columns: l(_),
                      loading: o.value
                    }, {
                      "row-active": a(({ row: i }) => [
                        u.value.includes(i.id) ? (p(), $(d, {
                          key: 0,
                          name: "Loader2",
                          class: "animate-spin"
                        })) : (p(), $(j, {
                          key: 1,
                          "model-value": !!i.active,
                          onClick: (I) => T(i)
                        }, null, 8, ["model-value", "onClick"]))
                      ]),
                      "row-actions": a(({ row: i }) => [
                        s("div", W, [
                          t(b, {
                            title: e.$t("Edit Trigger"),
                            fields: l(h),
                            values: i,
                            fetch: `/api/zbackup/triggers/${i.id}`,
                            "fetch-method": "PATCH",
                            onSubmit: n
                          }, {
                            default: a(() => [
                              t(g, {
                                variant: "ghost",
                                size: "sm"
                              }, {
                                default: a(() => [
                                  t(d, { name: "Edit" })
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["title", "fields", "values", "fetch"]),
                          t(V, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "DELETE",
                            fetch: `/api/zbackup/triggers/${i.id}`,
                            tooltip: e.$t("Delete this trigger"),
                            description: e.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                            "toast-on-success": e.$t("Trigger deleted."),
                            onFetched: n
                          }, {
                            default: a(() => [
                              t(d, { name: "trash" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["rows", "columns", "loading"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
export {
  U as default
};
