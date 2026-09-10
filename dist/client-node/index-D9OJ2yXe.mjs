import { defineComponent as x, ref as O, onMounted as ee, unref as a, withCtx as i, createVNode as e, toDisplayString as m, createTextVNode as v, openBlock as A, createBlock as P, useSSRContext as te } from "vue";
import { ssrRenderComponent as r, ssrInterpolate as H, ssrRenderAttr as ie } from "vue/server-renderer";
import { Head as le } from "@unhead/vue/components";
import "./AlertButton-Xlj1Nojp.mjs";
import "./Icon-Bds3_RR7.mjs";
import { Card as ae, CardHeader as J, CardTitle as V, CardDescription as Z, DialogForm as k, ZButton as f, Icon as n, CardContent as Q, ZDataTable as K, ZAlertButton as M, Switch as B } from "@sidekick-coder/zenith-kit/components";
import { defineColumns as ne, defineFormFields as se, fetcher as U } from "@sidekick-coder/zenith-kit/client";
import "./Switch-DESO__XK.mjs";
const X = /* @__PURE__ */ x({
  __name: "index",
  __ssrInlineRender: !0,
  setup(G) {
    const C = O([]), o = O(!1), y = O([]), R = ne([
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
    ]), T = se({
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
      value: (t) => ({
        component: t?.type ? "text-field" : "hidden",
        label: t?.type === "cron" ? $t("Cron Expression") : $t("Event Name"),
        placeholder: t?.type === "cron" ? "0 0 * * *" : "backup:completed"
      })
    });
    async function d() {
      o.value = !0;
      const [t, b] = await U.try(
        "/api/zbackup/triggers",
        { method: "GET" }
      );
      if (t) {
        o.value = !1;
        return;
      }
      C.value = b.items || [], await new Promise((j) => setTimeout(j, 300)), o.value = !1;
    }
    async function L(t) {
      y.value.push(t.id), await U.fetch(`/api/zbackup/triggers/${t.id}`, {
        method: "PATCH",
        data: { active: !t.active }
      }), setTimeout(() => {
        d(), y.value = y.value.filter((b) => b !== t.id);
      }, 500);
    }
    return ee(d), (t, b, j, re) => {
      b("<!--[-->"), b(r(a(le), null, {
        default: i((Y, E, N, S) => {
          if (E)
            E(`<title${S}>${H(t.$t("Triggers"))}</title><meta name="description"${ie("content", t.$t("Manage your backup triggers"))}${S}>`);
          else
            return [
              e(
                "title",
                null,
                m(t.$t("Triggers")),
                1
                /* TEXT */
              ),
              e("meta", {
                name: "description",
                content: t.$t("Manage your backup triggers")
              }, null, 8, ["content"])
            ];
        }),
        _: 1
        /* STABLE */
      }, j)), b(r(a(ae), null, {
        default: i((Y, E, N, S) => {
          if (E)
            E(r(a(J), null, {
              default: i(($, u, z, p) => {
                if (u)
                  u(`<div class="flex items-center justify-between"${p}><div${p}>`), u(r(a(V), null, {
                    default: i((l, s, g, c) => {
                      if (s)
                        s(`${H(t.$t("Triggers"))}`);
                      else
                        return [
                          v(
                            m(t.$t("Triggers")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, z, p)), u(r(a(Z), null, {
                    default: i((l, s, g, c) => {
                      if (s)
                        s(`${H(t.$t("Manage your backup triggers"))}`);
                      else
                        return [
                          v(
                            m(t.$t("Manage your backup triggers")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, z, p)), u(`</div><div class="flex items-center gap-2"${p}>`), u(r(k, {
                    title: t.$t("Add Trigger"),
                    fields: a(T),
                    fetch: "/api/zbackup/triggers",
                    "fetch-method": "POST",
                    onSubmit: d
                  }, {
                    default: i((l, s, g, c) => {
                      if (s)
                        s(r(f, null, {
                          default: i((F, h, D, w) => {
                            if (h)
                              h(r(n, { name: "Plus" }, null, D, w)), h(` ${H(t.$t("Add"))}`);
                            else
                              return [
                                e(n, { name: "Plus" }),
                                v(
                                  " " + m(t.$t("Add")),
                                  1
                                  /* TEXT */
                                )
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, g, c));
                      else
                        return [
                          e(f, null, {
                            default: i(() => [
                              e(n, { name: "Plus" }),
                              v(
                                " " + m(t.$t("Add")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, z, p)), u(r(f, {
                    variant: "outline",
                    onClick: d
                  }, {
                    default: i((l, s, g, c) => {
                      if (s)
                        s(r(n, {
                          name: "refreshCw",
                          class: { "animate-spin": o.value }
                        }, null, g, c));
                      else
                        return [
                          e(n, {
                            name: "refreshCw",
                            class: { "animate-spin": o.value }
                          }, null, 8, ["class"])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, z, p)), u("</div></div>");
                else
                  return [
                    e("div", { class: "flex items-center justify-between" }, [
                      e("div", null, [
                        e(a(V), null, {
                          default: i(() => [
                            v(
                              m(t.$t("Triggers")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        e(a(Z), null, {
                          default: i(() => [
                            v(
                              m(t.$t("Manage your backup triggers")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      e("div", { class: "flex items-center gap-2" }, [
                        e(k, {
                          title: t.$t("Add Trigger"),
                          fields: a(T),
                          fetch: "/api/zbackup/triggers",
                          "fetch-method": "POST",
                          onSubmit: d
                        }, {
                          default: i(() => [
                            e(f, null, {
                              default: i(() => [
                                e(n, { name: "Plus" }),
                                v(
                                  " " + m(t.$t("Add")),
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
                        e(f, {
                          variant: "outline",
                          onClick: d
                        }, {
                          default: i(() => [
                            e(n, {
                              name: "refreshCw",
                              class: { "animate-spin": o.value }
                            }, null, 8, ["class"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ])
                  ];
              }),
              _: 1
              /* STABLE */
            }, N, S)), E(r(a(Q), null, {
              default: i(($, u, z, p) => {
                if (u)
                  u(r(a(K), {
                    rows: C.value,
                    columns: a(R),
                    loading: o.value
                  }, {
                    "row-active": i(({ row: l }, s, g, c) => {
                      if (s)
                        y.value.includes(l.id) ? s(r(n, {
                          name: "Loader2",
                          class: "animate-spin"
                        }, null, g, c)) : s(r(B, {
                          "model-value": !!l.active,
                          onClick: (F) => L(l)
                        }, null, g, c));
                      else
                        return [
                          y.value.includes(l.id) ? (A(), P(n, {
                            key: 0,
                            name: "Loader2",
                            class: "animate-spin"
                          })) : (A(), P(B, {
                            key: 1,
                            "model-value": !!l.active,
                            onClick: (F) => L(l)
                          }, null, 8, ["model-value", "onClick"]))
                        ];
                    }),
                    "row-actions": i(({ row: l }, s, g, c) => {
                      if (s)
                        s(`<div class="flex items-center gap-2 justify-end"${c}>`), s(r(k, {
                          title: t.$t("Edit Trigger"),
                          fields: a(T),
                          values: l,
                          fetch: `/api/zbackup/triggers/${l.id}`,
                          "fetch-method": "PATCH",
                          onSubmit: d
                        }, {
                          default: i((F, h, D, w) => {
                            if (h)
                              h(r(f, {
                                variant: "ghost",
                                size: "sm"
                              }, {
                                default: i((de, q, I, _) => {
                                  if (q)
                                    q(r(n, { name: "Edit" }, null, I, _));
                                  else
                                    return [
                                      e(n, { name: "Edit" })
                                    ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, D, w));
                            else
                              return [
                                e(f, {
                                  variant: "ghost",
                                  size: "sm"
                                }, {
                                  default: i(() => [
                                    e(n, { name: "Edit" })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, g, c)), s(r(M, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/triggers/${l.id}`,
                          tooltip: t.$t("Delete this trigger"),
                          description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                          "toast-on-success": t.$t("Trigger deleted."),
                          onFetched: d
                        }, {
                          default: i((F, h, D, w) => {
                            if (h)
                              h(r(n, { name: "trash" }, null, D, w));
                            else
                              return [
                                e(n, { name: "trash" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, g, c)), s("</div>");
                      else
                        return [
                          e("div", { class: "flex items-center gap-2 justify-end" }, [
                            e(k, {
                              title: t.$t("Edit Trigger"),
                              fields: a(T),
                              values: l,
                              fetch: `/api/zbackup/triggers/${l.id}`,
                              "fetch-method": "PATCH",
                              onSubmit: d
                            }, {
                              default: i(() => [
                                e(f, {
                                  variant: "ghost",
                                  size: "sm"
                                }, {
                                  default: i(() => [
                                    e(n, { name: "Edit" })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["title", "fields", "values", "fetch"]),
                            e(M, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "DELETE",
                              fetch: `/api/zbackup/triggers/${l.id}`,
                              tooltip: t.$t("Delete this trigger"),
                              description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                              "toast-on-success": t.$t("Trigger deleted."),
                              onFetched: d
                            }, {
                              default: i(() => [
                                e(n, { name: "trash" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"])
                          ])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, z, p));
                else
                  return [
                    e(a(K), {
                      rows: C.value,
                      columns: a(R),
                      loading: o.value
                    }, {
                      "row-active": i(({ row: l }) => [
                        y.value.includes(l.id) ? (A(), P(n, {
                          key: 0,
                          name: "Loader2",
                          class: "animate-spin"
                        })) : (A(), P(B, {
                          key: 1,
                          "model-value": !!l.active,
                          onClick: (s) => L(l)
                        }, null, 8, ["model-value", "onClick"]))
                      ]),
                      "row-actions": i(({ row: l }) => [
                        e("div", { class: "flex items-center gap-2 justify-end" }, [
                          e(k, {
                            title: t.$t("Edit Trigger"),
                            fields: a(T),
                            values: l,
                            fetch: `/api/zbackup/triggers/${l.id}`,
                            "fetch-method": "PATCH",
                            onSubmit: d
                          }, {
                            default: i(() => [
                              e(f, {
                                variant: "ghost",
                                size: "sm"
                              }, {
                                default: i(() => [
                                  e(n, { name: "Edit" })
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["title", "fields", "values", "fetch"]),
                          e(M, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "DELETE",
                            fetch: `/api/zbackup/triggers/${l.id}`,
                            tooltip: t.$t("Delete this trigger"),
                            description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                            "toast-on-success": t.$t("Trigger deleted."),
                            onFetched: d
                          }, {
                            default: i(() => [
                              e(n, { name: "trash" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["rows", "columns", "loading"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, N, S));
          else
            return [
              e(a(J), null, {
                default: i(() => [
                  e("div", { class: "flex items-center justify-between" }, [
                    e("div", null, [
                      e(a(V), null, {
                        default: i(() => [
                          v(
                            m(t.$t("Triggers")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      e(a(Z), null, {
                        default: i(() => [
                          v(
                            m(t.$t("Manage your backup triggers")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    e("div", { class: "flex items-center gap-2" }, [
                      e(k, {
                        title: t.$t("Add Trigger"),
                        fields: a(T),
                        fetch: "/api/zbackup/triggers",
                        "fetch-method": "POST",
                        onSubmit: d
                      }, {
                        default: i(() => [
                          e(f, null, {
                            default: i(() => [
                              e(n, { name: "Plus" }),
                              v(
                                " " + m(t.$t("Add")),
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
                      e(f, {
                        variant: "outline",
                        onClick: d
                      }, {
                        default: i(() => [
                          e(n, {
                            name: "refreshCw",
                            class: { "animate-spin": o.value }
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
              e(a(Q), null, {
                default: i(() => [
                  e(a(K), {
                    rows: C.value,
                    columns: a(R),
                    loading: o.value
                  }, {
                    "row-active": i(({ row: $ }) => [
                      y.value.includes($.id) ? (A(), P(n, {
                        key: 0,
                        name: "Loader2",
                        class: "animate-spin"
                      })) : (A(), P(B, {
                        key: 1,
                        "model-value": !!$.active,
                        onClick: (u) => L($)
                      }, null, 8, ["model-value", "onClick"]))
                    ]),
                    "row-actions": i(({ row: $ }) => [
                      e("div", { class: "flex items-center gap-2 justify-end" }, [
                        e(k, {
                          title: t.$t("Edit Trigger"),
                          fields: a(T),
                          values: $,
                          fetch: `/api/zbackup/triggers/${$.id}`,
                          "fetch-method": "PATCH",
                          onSubmit: d
                        }, {
                          default: i(() => [
                            e(f, {
                              variant: "ghost",
                              size: "sm"
                            }, {
                              default: i(() => [
                                e(n, { name: "Edit" })
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["title", "fields", "values", "fetch"]),
                        e(M, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/triggers/${$.id}`,
                          tooltip: t.$t("Delete this trigger"),
                          description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                          "toast-on-success": t.$t("Trigger deleted."),
                          onFetched: d
                        }, {
                          default: i(() => [
                            e(n, { name: "trash" })
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
            ];
        }),
        _: 1
        /* STABLE */
      }, j)), b("<!--]-->");
    };
  }
}), W = X.setup;
X.setup = (G, C) => {
  const o = te();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("src/client/pages/triggers/index.vue"), W ? W(G, C) : void 0;
};
export {
  X as default
};
