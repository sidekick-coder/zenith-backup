import { defineComponent as ae, ref as G, onMounted as ne, unref as l, withCtx as i, createVNode as e, toDisplayString as c, createTextVNode as f, openBlock as E, createBlock as z, useSSRContext as se } from "vue";
import { ssrRenderComponent as d, ssrInterpolate as N, ssrRenderAttr as re } from "vue/server-renderer";
import { Head as de } from "@unhead/vue/components";
import "./Icon-ChfrlFM4.mjs";
import "./AlertButton-8jM3c93z.mjs";
import { AdminLayout as ue, Card as I, CardHeader as q, CardTitle as V, CardDescription as Z, DialogForm as y, ZButton as o, Icon as a, CardContent as J, ZDataTable as K, ZAlertButton as j, Switch as F } from "@sidekick-coder/zenith-kit/components";
import { defineColumns as oe, defineFormFields as ce, fetcher as _ } from "@sidekick-coder/zenith-kit/client";
import "./Switch-Be24nWx0.mjs";
const ee = /* @__PURE__ */ ae({
  __name: "index",
  __ssrInlineRender: !0,
  setup(Q) {
    const A = G([]), u = G(!1), T = G([]), H = oe([
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
    ]), $ = ce({
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
    async function r() {
      u.value = !0;
      const [t, k] = await _.try(
        "/api/zbackup/triggers",
        { method: "GET" }
      );
      if (t) {
        u.value = !1;
        return;
      }
      A.value = k.items || [], await new Promise((M) => setTimeout(M, 300)), u.value = !1;
    }
    async function S(t) {
      T.value.push(t.id), await _.fetch(`/api/zbackup/triggers/${t.id}`, {
        method: "PATCH",
        data: { active: !t.active }
      }), setTimeout(() => {
        r(), T.value = T.value.filter((k) => k !== t.id);
      }, 500);
    }
    return ne(r), (t, k, M, fe) => {
      k("<!--[-->"), k(d(l(de), null, {
        default: i((te, D, U, B) => {
          if (D)
            D(`<title${B}>${N(t.$t("Triggers"))}</title><meta name="description"${re("content", t.$t("Manage your backup triggers"))}${B}>`);
          else
            return [
              e(
                "title",
                null,
                c(t.$t("Triggers")),
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
      }, M)), k(d(ue, null, {
        default: i((te, D, U, B) => {
          if (D)
            D(d(l(I), null, {
              default: i((C, O, W, X) => {
                if (O)
                  O(d(l(q), null, {
                    default: i((p, g, P, h) => {
                      if (g)
                        g(`<div class="flex items-center justify-between"${h}><div${h}>`), g(d(l(V), null, {
                          default: i((n, s, v, m) => {
                            if (s)
                              s(`${N(t.$t("Triggers"))}`);
                            else
                              return [
                                f(
                                  c(t.$t("Triggers")),
                                  1
                                  /* TEXT */
                                )
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, P, h)), g(d(l(Z), null, {
                          default: i((n, s, v, m) => {
                            if (s)
                              s(`${N(t.$t("Manage your backup triggers"))}`);
                            else
                              return [
                                f(
                                  c(t.$t("Manage your backup triggers")),
                                  1
                                  /* TEXT */
                                )
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, P, h)), g(`</div><div class="flex items-center gap-2"${h}>`), g(d(y, {
                          title: t.$t("Add Trigger"),
                          fields: l($),
                          fetch: "/api/zbackup/triggers",
                          "fetch-method": "POST",
                          onSubmit: r
                        }, {
                          default: i((n, s, v, m) => {
                            if (s)
                              s(d(o, null, {
                                default: i((R, b, w, L) => {
                                  if (b)
                                    b(d(a, { name: "Plus" }, null, w, L)), b(` ${N(t.$t("Add"))}`);
                                  else
                                    return [
                                      e(a, { name: "Plus" }),
                                      f(
                                        " " + c(t.$t("Add")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, v, m));
                            else
                              return [
                                e(o, null, {
                                  default: i(() => [
                                    e(a, { name: "Plus" }),
                                    f(
                                      " " + c(t.$t("Add")),
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
                        }, P, h)), g(d(o, {
                          variant: "outline",
                          onClick: r
                        }, {
                          default: i((n, s, v, m) => {
                            if (s)
                              s(d(a, {
                                name: "refreshCw",
                                class: { "animate-spin": u.value }
                              }, null, v, m));
                            else
                              return [
                                e(a, {
                                  name: "refreshCw",
                                  class: { "animate-spin": u.value }
                                }, null, 8, ["class"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, P, h)), g("</div></div>");
                      else
                        return [
                          e("div", { class: "flex items-center justify-between" }, [
                            e("div", null, [
                              e(l(V), null, {
                                default: i(() => [
                                  f(
                                    c(t.$t("Triggers")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(l(Z), null, {
                                default: i(() => [
                                  f(
                                    c(t.$t("Manage your backup triggers")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            e("div", { class: "flex items-center gap-2" }, [
                              e(y, {
                                title: t.$t("Add Trigger"),
                                fields: l($),
                                fetch: "/api/zbackup/triggers",
                                "fetch-method": "POST",
                                onSubmit: r
                              }, {
                                default: i(() => [
                                  e(o, null, {
                                    default: i(() => [
                                      e(a, { name: "Plus" }),
                                      f(
                                        " " + c(t.$t("Add")),
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
                              e(o, {
                                variant: "outline",
                                onClick: r
                              }, {
                                default: i(() => [
                                  e(a, {
                                    name: "refreshCw",
                                    class: { "animate-spin": u.value }
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
                  }, W, X)), O(d(l(J), null, {
                    default: i((p, g, P, h) => {
                      if (g)
                        g(d(l(K), {
                          rows: A.value,
                          columns: l(H),
                          loading: u.value
                        }, {
                          "row-active": i(({ row: n }, s, v, m) => {
                            if (s)
                              T.value.includes(n.id) ? s(d(a, {
                                name: "Loader2",
                                class: "animate-spin"
                              }, null, v, m)) : s(d(F, {
                                "model-value": !!n.active,
                                onClick: (R) => S(n)
                              }, null, v, m));
                            else
                              return [
                                T.value.includes(n.id) ? (E(), z(a, {
                                  key: 0,
                                  name: "Loader2",
                                  class: "animate-spin"
                                })) : (E(), z(F, {
                                  key: 1,
                                  "model-value": !!n.active,
                                  onClick: (R) => S(n)
                                }, null, 8, ["model-value", "onClick"]))
                              ];
                          }),
                          "row-actions": i(({ row: n }, s, v, m) => {
                            if (s)
                              s(`<div class="flex items-center gap-2 justify-end"${m}>`), s(d(y, {
                                title: t.$t("Edit Trigger"),
                                fields: l($),
                                values: n,
                                fetch: `/api/zbackup/triggers/${n.id}`,
                                "fetch-method": "PATCH",
                                onSubmit: r
                              }, {
                                default: i((R, b, w, L) => {
                                  if (b)
                                    b(d(o, {
                                      variant: "ghost",
                                      size: "sm"
                                    }, {
                                      default: i((ge, Y, ie, le) => {
                                        if (Y)
                                          Y(d(a, { name: "Edit" }, null, ie, le));
                                        else
                                          return [
                                            e(a, { name: "Edit" })
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, w, L));
                                  else
                                    return [
                                      e(o, {
                                        variant: "ghost",
                                        size: "sm"
                                      }, {
                                        default: i(() => [
                                          e(a, { name: "Edit" })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      })
                                    ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, v, m)), s(d(j, {
                                variant: "ghost",
                                size: "sm",
                                "fetch-method": "DELETE",
                                fetch: `/api/zbackup/triggers/${n.id}`,
                                tooltip: t.$t("Delete this trigger"),
                                description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                                "toast-on-success": t.$t("Trigger deleted."),
                                onFetched: r
                              }, {
                                default: i((R, b, w, L) => {
                                  if (b)
                                    b(d(a, { name: "trash" }, null, w, L));
                                  else
                                    return [
                                      e(a, { name: "trash" })
                                    ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, v, m)), s("</div>");
                            else
                              return [
                                e("div", { class: "flex items-center gap-2 justify-end" }, [
                                  e(y, {
                                    title: t.$t("Edit Trigger"),
                                    fields: l($),
                                    values: n,
                                    fetch: `/api/zbackup/triggers/${n.id}`,
                                    "fetch-method": "PATCH",
                                    onSubmit: r
                                  }, {
                                    default: i(() => [
                                      e(o, {
                                        variant: "ghost",
                                        size: "sm"
                                      }, {
                                        default: i(() => [
                                          e(a, { name: "Edit" })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }, 8, ["title", "fields", "values", "fetch"]),
                                  e(j, {
                                    variant: "ghost",
                                    size: "sm",
                                    "fetch-method": "DELETE",
                                    fetch: `/api/zbackup/triggers/${n.id}`,
                                    tooltip: t.$t("Delete this trigger"),
                                    description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                                    "toast-on-success": t.$t("Trigger deleted."),
                                    onFetched: r
                                  }, {
                                    default: i(() => [
                                      e(a, { name: "trash" })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"])
                                ])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, P, h));
                      else
                        return [
                          e(l(K), {
                            rows: A.value,
                            columns: l(H),
                            loading: u.value
                          }, {
                            "row-active": i(({ row: n }) => [
                              T.value.includes(n.id) ? (E(), z(a, {
                                key: 0,
                                name: "Loader2",
                                class: "animate-spin"
                              })) : (E(), z(F, {
                                key: 1,
                                "model-value": !!n.active,
                                onClick: (s) => S(n)
                              }, null, 8, ["model-value", "onClick"]))
                            ]),
                            "row-actions": i(({ row: n }) => [
                              e("div", { class: "flex items-center gap-2 justify-end" }, [
                                e(y, {
                                  title: t.$t("Edit Trigger"),
                                  fields: l($),
                                  values: n,
                                  fetch: `/api/zbackup/triggers/${n.id}`,
                                  "fetch-method": "PATCH",
                                  onSubmit: r
                                }, {
                                  default: i(() => [
                                    e(o, {
                                      variant: "ghost",
                                      size: "sm"
                                    }, {
                                      default: i(() => [
                                        e(a, { name: "Edit" })
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }, 8, ["title", "fields", "values", "fetch"]),
                                e(j, {
                                  variant: "ghost",
                                  size: "sm",
                                  "fetch-method": "DELETE",
                                  fetch: `/api/zbackup/triggers/${n.id}`,
                                  tooltip: t.$t("Delete this trigger"),
                                  description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                                  "toast-on-success": t.$t("Trigger deleted."),
                                  onFetched: r
                                }, {
                                  default: i(() => [
                                    e(a, { name: "trash" })
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
                  }, W, X));
                else
                  return [
                    e(l(q), null, {
                      default: i(() => [
                        e("div", { class: "flex items-center justify-between" }, [
                          e("div", null, [
                            e(l(V), null, {
                              default: i(() => [
                                f(
                                  c(t.$t("Triggers")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(l(Z), null, {
                              default: i(() => [
                                f(
                                  c(t.$t("Manage your backup triggers")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          e("div", { class: "flex items-center gap-2" }, [
                            e(y, {
                              title: t.$t("Add Trigger"),
                              fields: l($),
                              fetch: "/api/zbackup/triggers",
                              "fetch-method": "POST",
                              onSubmit: r
                            }, {
                              default: i(() => [
                                e(o, null, {
                                  default: i(() => [
                                    e(a, { name: "Plus" }),
                                    f(
                                      " " + c(t.$t("Add")),
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
                            e(o, {
                              variant: "outline",
                              onClick: r
                            }, {
                              default: i(() => [
                                e(a, {
                                  name: "refreshCw",
                                  class: { "animate-spin": u.value }
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
                    e(l(J), null, {
                      default: i(() => [
                        e(l(K), {
                          rows: A.value,
                          columns: l(H),
                          loading: u.value
                        }, {
                          "row-active": i(({ row: p }) => [
                            T.value.includes(p.id) ? (E(), z(a, {
                              key: 0,
                              name: "Loader2",
                              class: "animate-spin"
                            })) : (E(), z(F, {
                              key: 1,
                              "model-value": !!p.active,
                              onClick: (g) => S(p)
                            }, null, 8, ["model-value", "onClick"]))
                          ]),
                          "row-actions": i(({ row: p }) => [
                            e("div", { class: "flex items-center gap-2 justify-end" }, [
                              e(y, {
                                title: t.$t("Edit Trigger"),
                                fields: l($),
                                values: p,
                                fetch: `/api/zbackup/triggers/${p.id}`,
                                "fetch-method": "PATCH",
                                onSubmit: r
                              }, {
                                default: i(() => [
                                  e(o, {
                                    variant: "ghost",
                                    size: "sm"
                                  }, {
                                    default: i(() => [
                                      e(a, { name: "Edit" })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  })
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["title", "fields", "values", "fetch"]),
                              e(j, {
                                variant: "ghost",
                                size: "sm",
                                "fetch-method": "DELETE",
                                fetch: `/api/zbackup/triggers/${p.id}`,
                                tooltip: t.$t("Delete this trigger"),
                                description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                                "toast-on-success": t.$t("Trigger deleted."),
                                onFetched: r
                              }, {
                                default: i(() => [
                                  e(a, { name: "trash" })
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
            }, U, B));
          else
            return [
              e(l(I), null, {
                default: i(() => [
                  e(l(q), null, {
                    default: i(() => [
                      e("div", { class: "flex items-center justify-between" }, [
                        e("div", null, [
                          e(l(V), null, {
                            default: i(() => [
                              f(
                                c(t.$t("Triggers")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(l(Z), null, {
                            default: i(() => [
                              f(
                                c(t.$t("Manage your backup triggers")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        e("div", { class: "flex items-center gap-2" }, [
                          e(y, {
                            title: t.$t("Add Trigger"),
                            fields: l($),
                            fetch: "/api/zbackup/triggers",
                            "fetch-method": "POST",
                            onSubmit: r
                          }, {
                            default: i(() => [
                              e(o, null, {
                                default: i(() => [
                                  e(a, { name: "Plus" }),
                                  f(
                                    " " + c(t.$t("Add")),
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
                          e(o, {
                            variant: "outline",
                            onClick: r
                          }, {
                            default: i(() => [
                              e(a, {
                                name: "refreshCw",
                                class: { "animate-spin": u.value }
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
                  e(l(J), null, {
                    default: i(() => [
                      e(l(K), {
                        rows: A.value,
                        columns: l(H),
                        loading: u.value
                      }, {
                        "row-active": i(({ row: C }) => [
                          T.value.includes(C.id) ? (E(), z(a, {
                            key: 0,
                            name: "Loader2",
                            class: "animate-spin"
                          })) : (E(), z(F, {
                            key: 1,
                            "model-value": !!C.active,
                            onClick: (O) => S(C)
                          }, null, 8, ["model-value", "onClick"]))
                        ]),
                        "row-actions": i(({ row: C }) => [
                          e("div", { class: "flex items-center gap-2 justify-end" }, [
                            e(y, {
                              title: t.$t("Edit Trigger"),
                              fields: l($),
                              values: C,
                              fetch: `/api/zbackup/triggers/${C.id}`,
                              "fetch-method": "PATCH",
                              onSubmit: r
                            }, {
                              default: i(() => [
                                e(o, {
                                  variant: "ghost",
                                  size: "sm"
                                }, {
                                  default: i(() => [
                                    e(a, { name: "Edit" })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["title", "fields", "values", "fetch"]),
                            e(j, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "DELETE",
                              fetch: `/api/zbackup/triggers/${C.id}`,
                              tooltip: t.$t("Delete this trigger"),
                              description: t.$t("Are you sure you want to delete this trigger? This action cannot be undone."),
                              "toast-on-success": t.$t("Trigger deleted."),
                              onFetched: r
                            }, {
                              default: i(() => [
                                e(a, { name: "trash" })
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
            ];
        }),
        _: 1
        /* STABLE */
      }, M)), k("<!--]-->");
    };
  }
}), x = ee.setup;
ee.setup = (Q, A) => {
  const u = se();
  return (u.modules || (u.modules = /* @__PURE__ */ new Set())).add("src/client/pages/triggers/index.vue"), x ? x(Q, A) : void 0;
};
export {
  ee as default
};
