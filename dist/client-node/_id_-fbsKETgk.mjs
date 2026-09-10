import { useSSRContext as K, defineComponent as fe, ref as ce, onMounted as je, unref as a, withCtx as t, createTextVNode as s, toDisplayString as n, createVNode as e, openBlock as X, createBlock as I, createCommentVNode as ye, useModel as Ae, mergeProps as Re, isRef as ze, computed as pt, onServerPrefetch as mt, Fragment as Be, renderList as Ve, withModifiers as ht } from "vue";
import { ssrRenderComponent as o, ssrInterpolate as k, ssrRenderList as vt } from "vue/server-renderer";
import * as ie from "valibot";
import { toast as Pe } from "vue-sonner";
import "./Icon-ChfrlFM4.mjs";
import { defineColumns as dt, fetcher as ft, route as bt, useForm as gt, $fetch as Oe, router as yt } from "@sidekick-coder/zenith-kit/client";
import "./AlertButton-8jM3c93z.mjs";
import { FormSelect as ne, DataTable as $e, ObjectInspect as he, DropdownMenu as pe, DropdownMenuTrigger as se, DropdownMenuItem as J, DropdownMenuContent as oe, Card as q, CardHeader as Q, CardTitle as E, CardDescription as A, ZAlertButton as W, Icon as L, ZButton as H, CardContent as B, FormTextField as D, FormSwitch as Ce, FormTextarea as x, useRouteQuery as Ue, Tabs as Qe, TabsList as be, TabsTrigger as w, TabsContent as U, FormStringListInput as ge, AdminLayout as wt, DialogForm as Ne, Alert as Me, AlertTitle as ke, AlertDescription as De } from "@sidekick-coder/zenith-kit/components";
import { format as kt } from "date-fns";
const qe = ne.setup;
ne.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/FormSelect.vue"), qe ? qe(b, u) : void 0;
};
const He = $e.setup;
$e.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/DataTable.vue"), He ? He(b, u) : void 0;
};
const Ye = he.setup;
he.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/ObjectInspect.vue"), Ye ? Ye(b, u) : void 0;
};
const Ge = pe.setup;
pe.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/ui/dropdown-menu/DropdownMenu.vue"), Ge ? Ge(b, u) : void 0;
};
const Ke = se.setup;
se.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/ui/dropdown-menu/DropdownMenuTrigger.vue"), Ke ? Ke(b, u) : void 0;
};
const Ze = J.setup;
J.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/ui/dropdown-menu/DropdownMenuItem.vue"), Ze ? Ze(b, u) : void 0;
};
const Je = oe.setup;
oe.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/ui/dropdown-menu/DropdownMenuContent.vue"), Je ? Je(b, u) : void 0;
};
const re = /* @__PURE__ */ fe({
  inheritAttrs: !1,
  __name: "PlanDumpSnapshots",
  __ssrInlineRender: !0,
  props: {
    planId: {}
  },
  setup(b) {
    const u = b, d = ce([]), l = ce(!1), S = ce();
    function G(i) {
      if (!i) return "0 B";
      const T = Math.floor(Math.log(i) / Math.log(1024)), v = ["B", "KB", "MB", "GB", "TB"];
      return (i / Math.pow(1024, T)).toFixed(2) + " " + v[T];
    }
    const j = dt([
      {
        id: "id",
        label: "ID",
        field: "id"
      },
      {
        id: "description",
        label: $t("Description"),
        field: "metadata.description"
      },
      {
        id: "size",
        label: $t("Size"),
        field: (i) => G(i.size)
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (i) => i.created_at ? $dt(i.created_at) : "-"
      },
      { id: "actions" }
    ]);
    async function M() {
      l.value = !0;
      const [i, T] = await ft.try(
        `/api/zbackup/plans/${u.planId}/dumps`,
        { method: "GET" }
      );
      if (i) {
        l.value = !1;
        return;
      }
      d.value = T.items || [], await new Promise((v) => setTimeout(v, 300)), l.value = !1;
    }
    return je(M), (i, T, v, R) => {
      T(o(a(q), R, {
        default: t((f, $, c, z) => {
          if ($)
            $(o(a(Q), null, {
              default: t((r, h, C, O) => {
                if (h)
                  h(`<div class="flex items-center justify-between"${O}><div${O}>`), h(o(a(E), null, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(`${k(i.$t("Dumps"))}`);
                      else
                        return [
                          s(
                            n(i.$t("Dumps")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)), h(o(a(A), null, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(`${k(i.$t("View and manage dump snapshots for this plan."))}`);
                      else
                        return [
                          s(
                            n(i.$t("View and manage dump snapshots for this plan.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)), h(`</div><div class="flex items-center gap-2"${O}>`), h(o(W, {
                    variant: "outline",
                    "fetch-method": "POST",
                    fetch: `/api/zbackup/plans/${b.planId}/dumps/cleanup`,
                    tooltip: i.$t("Remove old dumps based on retention settings"),
                    description: i.$t("Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted."),
                    "toast-on-success": i.$t("Cleanup completed."),
                    onFetched: M
                  }, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(o(L, { name: "Eraser" }, null, y, P)), m(` ${k(i.$t("Cleanup"))}`);
                      else
                        return [
                          e(L, { name: "Eraser" }),
                          s(
                            " " + n(i.$t("Cleanup")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)), h(o(H, {
                    variant: "outline",
                    onClick: M
                  }, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(o(L, {
                          name: "refreshCw",
                          class: { "animate-spin": l.value }
                        }, null, y, P));
                      else
                        return [
                          e(L, {
                            name: "refreshCw",
                            class: { "animate-spin": l.value }
                          }, null, 8, ["class"])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)), h("</div></div>");
                else
                  return [
                    e("div", { class: "flex items-center justify-between" }, [
                      e("div", null, [
                        e(a(E), null, {
                          default: t(() => [
                            s(
                              n(i.$t("Dumps")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        e(a(A), null, {
                          default: t(() => [
                            s(
                              n(i.$t("View and manage dump snapshots for this plan.")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      e("div", { class: "flex items-center gap-2" }, [
                        e(W, {
                          variant: "outline",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/cleanup`,
                          tooltip: i.$t("Remove old dumps based on retention settings"),
                          description: i.$t("Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted."),
                          "toast-on-success": i.$t("Cleanup completed."),
                          onFetched: M
                        }, {
                          default: t(() => [
                            e(L, { name: "Eraser" }),
                            s(
                              " " + n(i.$t("Cleanup")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(H, {
                          variant: "outline",
                          onClick: M
                        }, {
                          default: t(() => [
                            e(L, {
                              name: "refreshCw",
                              class: { "animate-spin": l.value }
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
            }, c, z)), $(o(a(B), null, {
              default: t((r, h, C, O) => {
                if (h)
                  S.value ? h(o(he, {
                    "model-value": S.value,
                    open: !0,
                    "onUpdate:open": (p) => {
                      p || (S.value = void 0);
                    }
                  }, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(`<div class="hidden"${P}></div>`);
                      else
                        return [
                          e("div", { class: "hidden" })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)) : h("<!---->"), h(o($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value,
                    "hide-pagination": ""
                  }, {
                    "row-actions": t(({ row: p }, m, y, P) => {
                      if (m)
                        m(`<div class="flex items-center gap-2 justify-end"${P}>`), m(o(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${p.id}/restore`,
                          tooltip: i.$t("Restore this dump"),
                          description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: M
                        }, {
                          default: t((g, F, V, Y) => {
                            if (F)
                              F(o(L, { name: "TimerReset" }, null, V, Y));
                            else
                              return [
                                e(L, { name: "TimerReset" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, y, P)), m(o(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${p.id}`,
                          tooltip: i.$t("Delete this dump"),
                          description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Dump deleted."),
                          onFetched: M
                        }, {
                          default: t((g, F, V, Y) => {
                            if (F)
                              F(o(L, { name: "trash" }, null, V, Y));
                            else
                              return [
                                e(L, { name: "trash" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, y, P)), m(o(pe, null, {
                          default: t((g, F, V, Y) => {
                            if (F)
                              F(o(se, { "as-child": "" }, {
                                default: t((ae, N, ee, _) => {
                                  if (N)
                                    N(o(H, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t((te, Z, we, me) => {
                                        if (Z)
                                          Z(`<span class="sr-only"${me}>${k(i.$t("More"))}</span>`), Z(o(L, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          }, null, we, me));
                                        else
                                          return [
                                            e(
                                              "span",
                                              { class: "sr-only" },
                                              n(i.$t("More")),
                                              1
                                              /* TEXT */
                                            ),
                                            e(L, {
                                              name: "MoreVertical",
                                              class: "w-3 h-3 sm:w-4 sm:h-4"
                                            })
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, ee, _));
                                  else
                                    return [
                                      e(H, {
                                        variant: "ghost",
                                        class: "w-8 h-8 p-0"
                                      }, {
                                        default: t(() => [
                                          e(
                                            "span",
                                            { class: "sr-only" },
                                            n(i.$t("More")),
                                            1
                                            /* TEXT */
                                          ),
                                          e(L, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      })
                                    ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, V, Y)), F(o(oe, { class: "max-h-60 overflow-y-auto" }, {
                                default: t((ae, N, ee, _) => {
                                  if (N)
                                    N(o(J, {
                                      class: "cursor-pointer",
                                      onClick: (te) => S.value = p.metadata
                                    }, {
                                      default: t((te, Z, we, me) => {
                                        if (Z)
                                          Z(`${k(i.$t("Metadata"))}`);
                                        else
                                          return [
                                            s(
                                              n(i.$t("Metadata")),
                                              1
                                              /* TEXT */
                                            )
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, ee, _));
                                  else
                                    return [
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (te) => S.value = p.metadata
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Metadata")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"])
                                    ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, V, Y));
                            else
                              return [
                                e(se, { "as-child": "" }, {
                                  default: t(() => [
                                    e(H, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t(() => [
                                        e(
                                          "span",
                                          { class: "sr-only" },
                                          n(i.$t("More")),
                                          1
                                          /* TEXT */
                                        ),
                                        e(L, {
                                          name: "MoreVertical",
                                          class: "w-3 h-3 sm:w-4 sm:h-4"
                                        })
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(
                                  oe,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (ae) => S.value = p.metadata
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Metadata")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, y, P)), m("</div>");
                      else
                        return [
                          e("div", { class: "flex items-center gap-2 justify-end" }, [
                            e(W, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "POST",
                              fetch: `/api/zbackup/plans/${b.planId}/dumps/${p.id}/restore`,
                              tooltip: i.$t("Restore this dump"),
                              description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                              "toast-on-success": i.$t("Restore started successfully."),
                              onFetched: M
                            }, {
                              default: t(() => [
                                e(L, { name: "TimerReset" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(W, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "DELETE",
                              fetch: `/api/zbackup/plans/${b.planId}/dumps/${p.id}`,
                              tooltip: i.$t("Delete this dump"),
                              description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                              "toast-on-success": i.$t("Dump deleted."),
                              onFetched: M
                            }, {
                              default: t(() => [
                                e(L, { name: "trash" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(
                              pe,
                              null,
                              {
                                default: t(() => [
                                  e(se, { "as-child": "" }, {
                                    default: t(() => [
                                      e(H, {
                                        variant: "ghost",
                                        class: "w-8 h-8 p-0"
                                      }, {
                                        default: t(() => [
                                          e(
                                            "span",
                                            { class: "sr-only" },
                                            n(i.$t("More")),
                                            1
                                            /* TEXT */
                                          ),
                                          e(L, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }),
                                  e(
                                    oe,
                                    { class: "max-h-60 overflow-y-auto" },
                                    {
                                      default: t(() => [
                                        e(J, {
                                          class: "cursor-pointer",
                                          onClick: (g) => S.value = p.metadata
                                        }, {
                                          default: t(() => [
                                            s(
                                              n(i.$t("Metadata")),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 1
                                          /* STABLE */
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            )
                          ])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O));
                else
                  return [
                    S.value ? (X(), I(he, {
                      key: 0,
                      "model-value": S.value,
                      open: !0,
                      "onUpdate:open": (p) => {
                        p || (S.value = void 0);
                      }
                    }, {
                      default: t(() => [
                        e("div", { class: "hidden" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["model-value", "onUpdate:open"])) : ye("v-if", !0),
                    e($e, {
                      rows: d.value,
                      columns: a(j),
                      loading: l.value,
                      "hide-pagination": ""
                    }, {
                      "row-actions": t(({ row: p }) => [
                        e("div", { class: "flex items-center gap-2 justify-end" }, [
                          e(W, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "POST",
                            fetch: `/api/zbackup/plans/${b.planId}/dumps/${p.id}/restore`,
                            tooltip: i.$t("Restore this dump"),
                            description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                            "toast-on-success": i.$t("Restore started successfully."),
                            onFetched: M
                          }, {
                            default: t(() => [
                              e(L, { name: "TimerReset" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(W, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "DELETE",
                            fetch: `/api/zbackup/plans/${b.planId}/dumps/${p.id}`,
                            tooltip: i.$t("Delete this dump"),
                            description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                            "toast-on-success": i.$t("Dump deleted."),
                            onFetched: M
                          }, {
                            default: t(() => [
                              e(L, { name: "trash" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(
                            pe,
                            null,
                            {
                              default: t(() => [
                                e(se, { "as-child": "" }, {
                                  default: t(() => [
                                    e(H, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t(() => [
                                        e(
                                          "span",
                                          { class: "sr-only" },
                                          n(i.$t("More")),
                                          1
                                          /* TEXT */
                                        ),
                                        e(L, {
                                          name: "MoreVertical",
                                          class: "w-3 h-3 sm:w-4 sm:h-4"
                                        })
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(
                                  oe,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (m) => S.value = p.metadata
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Metadata")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["rows", "columns", "loading"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, c, z));
          else
            return [
              e(a(Q), null, {
                default: t(() => [
                  e("div", { class: "flex items-center justify-between" }, [
                    e("div", null, [
                      e(a(E), null, {
                        default: t(() => [
                          s(
                            n(i.$t("Dumps")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      e(a(A), null, {
                        default: t(() => [
                          s(
                            n(i.$t("View and manage dump snapshots for this plan.")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    e("div", { class: "flex items-center gap-2" }, [
                      e(W, {
                        variant: "outline",
                        "fetch-method": "POST",
                        fetch: `/api/zbackup/plans/${b.planId}/dumps/cleanup`,
                        tooltip: i.$t("Remove old dumps based on retention settings"),
                        description: i.$t("Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted."),
                        "toast-on-success": i.$t("Cleanup completed."),
                        onFetched: M
                      }, {
                        default: t(() => [
                          e(L, { name: "Eraser" }),
                          s(
                            " " + n(i.$t("Cleanup")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                      e(H, {
                        variant: "outline",
                        onClick: M
                      }, {
                        default: t(() => [
                          e(L, {
                            name: "refreshCw",
                            class: { "animate-spin": l.value }
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
              e(a(B), null, {
                default: t(() => [
                  S.value ? (X(), I(he, {
                    key: 0,
                    "model-value": S.value,
                    open: !0,
                    "onUpdate:open": (r) => {
                      r || (S.value = void 0);
                    }
                  }, {
                    default: t(() => [
                      e("div", { class: "hidden" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["model-value", "onUpdate:open"])) : ye("v-if", !0),
                  e($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value,
                    "hide-pagination": ""
                  }, {
                    "row-actions": t(({ row: r }) => [
                      e("div", { class: "flex items-center gap-2 justify-end" }, [
                        e(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${r.id}/restore`,
                          tooltip: i.$t("Restore this dump"),
                          description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: M
                        }, {
                          default: t(() => [
                            e(L, { name: "TimerReset" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${r.id}`,
                          tooltip: i.$t("Delete this dump"),
                          description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Dump deleted."),
                          onFetched: M
                        }, {
                          default: t(() => [
                            e(L, { name: "trash" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(
                          pe,
                          null,
                          {
                            default: t(() => [
                              e(se, { "as-child": "" }, {
                                default: t(() => [
                                  e(H, {
                                    variant: "ghost",
                                    class: "w-8 h-8 p-0"
                                  }, {
                                    default: t(() => [
                                      e(
                                        "span",
                                        { class: "sr-only" },
                                        n(i.$t("More")),
                                        1
                                        /* TEXT */
                                      ),
                                      e(L, {
                                        name: "MoreVertical",
                                        class: "w-3 h-3 sm:w-4 sm:h-4"
                                      })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  })
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(
                                oe,
                                { class: "max-h-60 overflow-y-auto" },
                                {
                                  default: t(() => [
                                    e(J, {
                                      class: "cursor-pointer",
                                      onClick: (h) => S.value = r.metadata
                                    }, {
                                      default: t(() => [
                                        s(
                                          n(i.$t("Metadata")),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
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
      }, v));
    };
  }
}), We = re.setup;
re.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSnapshots.vue"), We ? We(b, u) : void 0;
};
const Xe = D.setup;
D.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/FormTextField.vue"), Xe ? Xe(b, u) : void 0;
};
const Ie = Ce.setup;
Ce.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/FormSwitch.vue"), Ie ? Ie(b, u) : void 0;
};
const _e = x.setup;
x.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/FormTextarea.vue"), _e ? _e(b, u) : void 0;
};
const le = /* @__PURE__ */ fe({
  __name: "PlanDumpSectionDetails",
  __ssrInlineRender: !0,
  setup(b) {
    return (u, d, l, S) => {
      d(o(a(q), S, {
        default: t((G, j, M, i) => {
          if (j)
            j(o(a(Q), null, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(a(E), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Plan details"))}`);
                      else
                        return [
                          s(
                            n(u.$t("Plan details")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f)), v(o(a(A), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Edit the name, status and description of this plan."))}`);
                      else
                        return [
                          s(
                            n(u.$t("Edit the name, status and description of this plan.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f));
                else
                  return [
                    e(a(E), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Plan details")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(A), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Edit the name, status and description of this plan.")),
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
            }, M, i)), j(o(a(B), { class: "space-y-6" }, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(D, {
                    name: "name",
                    label: u.$t("Name"),
                    placeholder: u.$t("Enter plan name")
                  }, null, R, f)), v(o(Ce, {
                    name: "active",
                    label: u.$t("Active"),
                    hint: u.$t("Activate or deactivate this backup plan")
                  }, null, R, f)), v(o(x, {
                    name: "description",
                    label: u.$t("Description"),
                    placeholder: u.$t("Enter plan description"),
                    hint: u.$t("Optional description for this backup plan")
                  }, null, R, f));
                else
                  return [
                    e(D, {
                      name: "name",
                      label: u.$t("Name"),
                      placeholder: u.$t("Enter plan name")
                    }, null, 8, ["label", "placeholder"]),
                    e(Ce, {
                      name: "active",
                      label: u.$t("Active"),
                      hint: u.$t("Activate or deactivate this backup plan")
                    }, null, 8, ["label", "hint"]),
                    e(x, {
                      name: "description",
                      label: u.$t("Description"),
                      placeholder: u.$t("Enter plan description"),
                      hint: u.$t("Optional description for this backup plan")
                    }, null, 8, ["label", "placeholder", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, i));
          else
            return [
              e(a(Q), null, {
                default: t(() => [
                  e(a(E), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Plan details")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(A), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Edit the name, status and description of this plan.")),
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
              }),
              e(a(B), { class: "space-y-6" }, {
                default: t(() => [
                  e(D, {
                    name: "name",
                    label: u.$t("Name"),
                    placeholder: u.$t("Enter plan name")
                  }, null, 8, ["label", "placeholder"]),
                  e(Ce, {
                    name: "active",
                    label: u.$t("Active"),
                    hint: u.$t("Activate or deactivate this backup plan")
                  }, null, 8, ["label", "hint"]),
                  e(x, {
                    name: "description",
                    label: u.$t("Description"),
                    placeholder: u.$t("Enter plan description"),
                    hint: u.$t("Optional description for this backup plan")
                  }, null, 8, ["label", "placeholder", "hint"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, l));
    };
  }
}), xe = le.setup;
le.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionDetails.vue"), xe ? xe(b, u) : void 0;
};
const ue = /* @__PURE__ */ fe({
  __name: "PlanDumpSectionDrive",
  __ssrInlineRender: !0,
  setup(b) {
    return (u, d, l, S) => {
      d(o(a(q), S, {
        default: t((G, j, M, i) => {
          if (j)
            j(o(a(Q), null, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(a(E), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Drive"))}`);
                      else
                        return [
                          s(
                            n(u.$t("Drive")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f)), v(o(a(A), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Configure where backups will be stored."))}`);
                      else
                        return [
                          s(
                            n(u.$t("Configure where backups will be stored.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f));
                else
                  return [
                    e(a(E), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Drive")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(A), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Configure where backups will be stored.")),
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
            }, M, i)), j(o(a(B), { class: "space-y-6" }, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(D, {
                    name: "config.drive_id",
                    label: u.$t("Drive ID"),
                    hint: u.$t("The drive where backups will be stored. Must be defined in the configuration file.")
                  }, null, R, f)), v(o(D, {
                    name: "config.drive_prefix",
                    label: u.$t("Drive Prefix"),
                    placeholder: u.$t("backups/my-plan"),
                    hint: u.$t("Directory prefix within the drive where backups will be stored.")
                  }, null, R, f));
                else
                  return [
                    e(D, {
                      name: "config.drive_id",
                      label: u.$t("Drive ID"),
                      hint: u.$t("The drive where backups will be stored. Must be defined in the configuration file.")
                    }, null, 8, ["label", "hint"]),
                    e(D, {
                      name: "config.drive_prefix",
                      label: u.$t("Drive Prefix"),
                      placeholder: u.$t("backups/my-plan"),
                      hint: u.$t("Directory prefix within the drive where backups will be stored.")
                    }, null, 8, ["label", "placeholder", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, i));
          else
            return [
              e(a(Q), null, {
                default: t(() => [
                  e(a(E), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Drive")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(A), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Configure where backups will be stored.")),
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
              }),
              e(a(B), { class: "space-y-6" }, {
                default: t(() => [
                  e(D, {
                    name: "config.drive_id",
                    label: u.$t("Drive ID"),
                    hint: u.$t("The drive where backups will be stored. Must be defined in the configuration file.")
                  }, null, 8, ["label", "hint"]),
                  e(D, {
                    name: "config.drive_prefix",
                    label: u.$t("Drive Prefix"),
                    placeholder: u.$t("backups/my-plan"),
                    hint: u.$t("Directory prefix within the drive where backups will be stored.")
                  }, null, 8, ["label", "placeholder", "hint"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, l));
    };
  }
}), et = ue.setup;
ue.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionDrive.vue"), et ? et(b, u) : void 0;
};
const ve = /* @__PURE__ */ fe({
  __name: "PlanDumpSectionDocker",
  __ssrInlineRender: !0,
  setup(b) {
    return (u, d, l, S) => {
      d(o(a(q), S, {
        default: t((G, j, M, i) => {
          if (j)
            j(o(a(Q), null, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(a(E), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Docker"))}`);
                      else
                        return [
                          s(
                            n(u.$t("Docker")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f)), v(o(a(A), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Configure the Docker image used to run the dump command."))}`);
                      else
                        return [
                          s(
                            n(u.$t("Configure the Docker image used to run the dump command.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f));
                else
                  return [
                    e(a(E), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Docker")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(A), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Configure the Docker image used to run the dump command.")),
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
            }, M, i)), j(o(a(B), { class: "space-y-6" }, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(D, {
                    name: "config.docker_image",
                    label: u.$t("Docker Image"),
                    placeholder: u.$t("postgres:latest"),
                    hint: u.$t("Docker image used to run the dump command.")
                  }, null, R, f));
                else
                  return [
                    e(D, {
                      name: "config.docker_image",
                      label: u.$t("Docker Image"),
                      placeholder: u.$t("postgres:latest"),
                      hint: u.$t("Docker image used to run the dump command.")
                    }, null, 8, ["label", "placeholder", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, i));
          else
            return [
              e(a(Q), null, {
                default: t(() => [
                  e(a(E), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Docker")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(A), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Configure the Docker image used to run the dump command.")),
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
              }),
              e(a(B), { class: "space-y-6" }, {
                default: t(() => [
                  e(D, {
                    name: "config.docker_image",
                    label: u.$t("Docker Image"),
                    placeholder: u.$t("postgres:latest"),
                    hint: u.$t("Docker image used to run the dump command.")
                  }, null, 8, ["label", "placeholder", "hint"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, l));
    };
  }
}), tt = ve.setup;
ve.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionDocker.vue"), tt ? tt(b, u) : void 0;
};
const de = /* @__PURE__ */ fe({
  __name: "PlanDumpSectionRetention",
  __ssrInlineRender: !0,
  setup(b) {
    return (u, d, l, S) => {
      d(o(a(q), S, {
        default: t((G, j, M, i) => {
          if (j)
            j(o(a(Q), null, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(a(E), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Retention"))}`);
                      else
                        return [
                          s(
                            n(u.$t("Retention")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f)), v(o(a(A), null, {
                    default: t(($, c, z, r) => {
                      if (c)
                        c(`${k(u.$t("Control how many backups are kept before older ones are removed."))}`);
                      else
                        return [
                          s(
                            n(u.$t("Control how many backups are kept before older ones are removed.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, R, f));
                else
                  return [
                    e(a(E), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Retention")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(A), null, {
                      default: t(() => [
                        s(
                          n(u.$t("Control how many backups are kept before older ones are removed.")),
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
            }, M, i)), j(o(a(B), { class: "space-y-6" }, {
              default: t((T, v, R, f) => {
                if (v)
                  v(o(D, {
                    name: "config.retention_max_items",
                    type: "number",
                    label: u.$t("Max Backups"),
                    hint: u.$t("Maximum number of backups to keep. Older ones will be removed automatically.")
                  }, null, R, f));
                else
                  return [
                    e(D, {
                      name: "config.retention_max_items",
                      type: "number",
                      label: u.$t("Max Backups"),
                      hint: u.$t("Maximum number of backups to keep. Older ones will be removed automatically.")
                    }, null, 8, ["label", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, i));
          else
            return [
              e(a(Q), null, {
                default: t(() => [
                  e(a(E), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Retention")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(A), null, {
                    default: t(() => [
                      s(
                        n(u.$t("Control how many backups are kept before older ones are removed.")),
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
              }),
              e(a(B), { class: "space-y-6" }, {
                default: t(() => [
                  e(D, {
                    name: "config.retention_max_items",
                    type: "number",
                    label: u.$t("Max Backups"),
                    hint: u.$t("Maximum number of backups to keep. Older ones will be removed automatically.")
                  }, null, 8, ["label", "hint"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, l));
    };
  }
}), lt = de.setup;
de.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionRetention.vue"), lt ? lt(b, u) : void 0;
};
const Fe = /* @__PURE__ */ fe({
  __name: "PlanDumpConnectionForm",
  __ssrInlineRender: !0,
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(b) {
    const u = Ae(b, "plan"), d = Ue("tab", "details");
    return (l, S, G, j) => {
      S(o(a(Qe), Re({
        modelValue: a(d),
        "onUpdate:modelValue": (M) => ze(d) ? d.value = M : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((M, i, T, v) => {
          if (i)
            i(o(a(be), null, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Details"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Details")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "connection",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Connection"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Connection")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Drive"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Drive")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Docker"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Docker")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Retention"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Retention")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "snapshots",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Snapshots"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Snapshots")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(w), {
                      value: "details",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Details")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "connection",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Connection")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "drive",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Drive")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "docker",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Docker")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "retention",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Retention")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "snapshots",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Snapshots")),
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
            }, T, v)), i(o(a(U), { value: "details" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(le, null, null, $, c));
                else
                  return [
                    e(le)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "connection" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(q), null, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(o(a(Q), null, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(a(E), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Connection"))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Connection")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y)), p(o(a(A), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Select the database connection for this backup plan."))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Select the database connection for this backup plan.")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y));
                            else
                              return [
                                e(a(E), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Connection")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(a(A), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Select the database connection for this backup plan.")),
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
                        }, h, C)), r(o(a(B), { class: "space-y-6" }, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(ne, {
                                name: "config.name",
                                fetch: "/api/database-connections",
                                "value-key": "id",
                                "label-key": "name",
                                label: l.$t("Connection Name"),
                                hint: l.$t("Select the database connection to back up")
                              }, null, m, y));
                            else
                              return [
                                e(ne, {
                                  name: "config.name",
                                  fetch: "/api/database-connections",
                                  "value-key": "id",
                                  "label-key": "name",
                                  label: l.$t("Connection Name"),
                                  hint: l.$t("Select the database connection to back up")
                                }, null, 8, ["label", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, C));
                      else
                        return [
                          e(a(Q), null, {
                            default: t(() => [
                              e(a(E), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Connection")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(a(A), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Select the database connection for this backup plan.")),
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
                          }),
                          e(a(B), { class: "space-y-6" }, {
                            default: t(() => [
                              e(ne, {
                                name: "config.name",
                                fetch: "/api/database-connections",
                                "value-key": "id",
                                "label-key": "name",
                                label: l.$t("Connection Name"),
                                hint: l.$t("Select the database connection to back up")
                              }, null, 8, ["label", "hint"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(q), null, {
                      default: t(() => [
                        e(a(Q), null, {
                          default: t(() => [
                            e(a(E), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Connection")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(a(A), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Select the database connection for this backup plan.")),
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
                        }),
                        e(a(B), { class: "space-y-6" }, {
                          default: t(() => [
                            e(ne, {
                              name: "config.name",
                              fetch: "/api/database-connections",
                              "value-key": "id",
                              "label-key": "name",
                              label: l.$t("Connection Name"),
                              hint: l.$t("Select the database connection to back up")
                            }, null, 8, ["label", "hint"])
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
            }, T, v)), i(o(a(U), { value: "drive" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(ue, null, null, $, c));
                else
                  return [
                    e(ue)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "docker" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(ve, null, null, $, c));
                else
                  return [
                    e(ve)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "retention" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(de, null, null, $, c));
                else
                  return [
                    e(de)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "snapshots" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(re, {
                    "plan-id": u.value.id
                  }, null, $, c));
                else
                  return [
                    e(re, {
                      "plan-id": u.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Details")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "connection",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Connection")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Drive")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Docker")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Retention")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "snapshots",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Snapshots")),
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
              }),
              e(a(U), { value: "details" }, {
                default: t(() => [
                  e(le)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "connection" }, {
                default: t(() => [
                  e(a(q), null, {
                    default: t(() => [
                      e(a(Q), null, {
                        default: t(() => [
                          e(a(E), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Connection")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(a(A), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Select the database connection for this backup plan.")),
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
                      }),
                      e(a(B), { class: "space-y-6" }, {
                        default: t(() => [
                          e(ne, {
                            name: "config.name",
                            fetch: "/api/database-connections",
                            "value-key": "id",
                            "label-key": "name",
                            label: l.$t("Connection Name"),
                            hint: l.$t("Select the database connection to back up")
                          }, null, 8, ["label", "hint"])
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
              }),
              e(a(U), { value: "drive" }, {
                default: t(() => [
                  e(ue)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "docker" }, {
                default: t(() => [
                  e(ve)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "retention" }, {
                default: t(() => [
                  e(de)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "snapshots" }, {
                default: t(() => [
                  e(re, {
                    "plan-id": u.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, G));
    };
  }
}), at = Fe.setup;
Fe.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpConnectionForm.vue"), at ? at(b, u) : void 0;
};
const Te = /* @__PURE__ */ fe({
  __name: "PlanDumpSQLiteForm",
  __ssrInlineRender: !0,
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(b) {
    const u = Ae(b, "plan"), d = Ue("tab", "details");
    return (l, S, G, j) => {
      S(o(a(Qe), Re({
        modelValue: a(d),
        "onUpdate:modelValue": (M) => ze(d) ? d.value = M : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((M, i, T, v) => {
          if (i)
            i(o(a(be), null, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Details"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Details")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "database",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Database"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Database")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Drive"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Drive")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Retention"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Retention")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "dumps",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Dumps"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Dumps")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(w), {
                      value: "details",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Details")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "database",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Database")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "drive",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Drive")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "retention",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Retention")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "dumps",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Dumps")),
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
            }, T, v)), i(o(a(U), { value: "details" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(le, null, null, $, c));
                else
                  return [
                    e(le)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "database" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(q), null, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(o(a(Q), null, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(a(E), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Database"))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Database")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y)), p(o(a(A), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Configure the SQLite database file to back up."))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Configure the SQLite database file to back up.")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y));
                            else
                              return [
                                e(a(E), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Database")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(a(A), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Configure the SQLite database file to back up.")),
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
                        }, h, C)), r(o(a(B), { class: "space-y-6" }, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(D, {
                                name: "config.sqlite_filename",
                                label: l.$t("Database File Path"),
                                placeholder: l.$t("/var/data/app.sqlite"),
                                hint: l.$t("Absolute path to the SQLite database file on the host machine.")
                              }, null, m, y));
                            else
                              return [
                                e(D, {
                                  name: "config.sqlite_filename",
                                  label: l.$t("Database File Path"),
                                  placeholder: l.$t("/var/data/app.sqlite"),
                                  hint: l.$t("Absolute path to the SQLite database file on the host machine.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, C));
                      else
                        return [
                          e(a(Q), null, {
                            default: t(() => [
                              e(a(E), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Database")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(a(A), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Configure the SQLite database file to back up.")),
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
                          }),
                          e(a(B), { class: "space-y-6" }, {
                            default: t(() => [
                              e(D, {
                                name: "config.sqlite_filename",
                                label: l.$t("Database File Path"),
                                placeholder: l.$t("/var/data/app.sqlite"),
                                hint: l.$t("Absolute path to the SQLite database file on the host machine.")
                              }, null, 8, ["label", "placeholder", "hint"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(q), null, {
                      default: t(() => [
                        e(a(Q), null, {
                          default: t(() => [
                            e(a(E), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Database")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(a(A), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Configure the SQLite database file to back up.")),
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
                        }),
                        e(a(B), { class: "space-y-6" }, {
                          default: t(() => [
                            e(D, {
                              name: "config.sqlite_filename",
                              label: l.$t("Database File Path"),
                              placeholder: l.$t("/var/data/app.sqlite"),
                              hint: l.$t("Absolute path to the SQLite database file on the host machine.")
                            }, null, 8, ["label", "placeholder", "hint"])
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
            }, T, v)), i(o(a(U), { value: "drive" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(ue, null, null, $, c));
                else
                  return [
                    e(ue)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "retention" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(de, null, null, $, c));
                else
                  return [
                    e(de)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "dumps" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(re, {
                    "plan-id": u.value.id
                  }, null, $, c));
                else
                  return [
                    e(re, {
                      "plan-id": u.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Details")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "database",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Database")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Drive")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Retention")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "dumps",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Dumps")),
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
              }),
              e(a(U), { value: "details" }, {
                default: t(() => [
                  e(le)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "database" }, {
                default: t(() => [
                  e(a(q), null, {
                    default: t(() => [
                      e(a(Q), null, {
                        default: t(() => [
                          e(a(E), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Database")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(a(A), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Configure the SQLite database file to back up.")),
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
                      }),
                      e(a(B), { class: "space-y-6" }, {
                        default: t(() => [
                          e(D, {
                            name: "config.sqlite_filename",
                            label: l.$t("Database File Path"),
                            placeholder: l.$t("/var/data/app.sqlite"),
                            hint: l.$t("Absolute path to the SQLite database file on the host machine.")
                          }, null, 8, ["label", "placeholder", "hint"])
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
              }),
              e(a(U), { value: "drive" }, {
                default: t(() => [
                  e(ue)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "retention" }, {
                default: t(() => [
                  e(de)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "dumps" }, {
                default: t(() => [
                  e(re, {
                    "plan-id": u.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, G));
    };
  }
}), nt = Te.setup;
Te.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSQLiteForm.vue"), nt ? nt(b, u) : void 0;
};
const Le = /* @__PURE__ */ fe({
  __name: "PlanDumpPostgresForm",
  __ssrInlineRender: !0,
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(b) {
    const u = Ae(b, "plan"), d = Ue("tab", "details");
    return (l, S, G, j) => {
      S(o(a(Qe), Re({
        modelValue: a(d),
        "onUpdate:modelValue": (M) => ze(d) ? d.value = M : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((M, i, T, v) => {
          if (i)
            i(o(a(be), null, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Details"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Details")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "connection",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Connection"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Connection")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Drive"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Drive")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Docker"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Docker")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Retention"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Retention")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "dumps",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Dumps"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Dumps")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(w), {
                      value: "details",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Details")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "connection",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Connection")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "drive",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Drive")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "docker",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Docker")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "retention",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Retention")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "dumps",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Dumps")),
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
            }, T, v)), i(o(a(U), { value: "details" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(le, null, null, $, c));
                else
                  return [
                    e(le)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "connection" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(q), null, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(o(a(Q), null, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(a(E), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Connection"))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Connection")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y)), p(o(a(A), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Configure the PostgreSQL database connection settings."))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Configure the PostgreSQL database connection settings.")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y));
                            else
                              return [
                                e(a(E), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Connection")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(a(A), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Configure the PostgreSQL database connection settings.")),
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
                        }, h, C)), r(o(a(B), { class: "space-y-6" }, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(D, {
                                name: "config.postgres_host",
                                label: l.$t("Host"),
                                placeholder: l.$t("localhost"),
                                hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                              }, null, m, y)), p(o(D, {
                                name: "config.postgres_port",
                                type: "number",
                                label: l.$t("Port"),
                                placeholder: l.$t("5432"),
                                hint: l.$t("Port number of the PostgreSQL server.")
                              }, null, m, y)), p(o(D, {
                                name: "config.postgres_username",
                                label: l.$t("Username"),
                                placeholder: l.$t("postgres"),
                                hint: l.$t("PostgreSQL user with read access to the target database.")
                              }, null, m, y)), p(o(D, {
                                name: "config.postgres_password",
                                type: "password",
                                label: l.$t("Password"),
                                hint: l.$t("Password for the PostgreSQL user.")
                              }, null, m, y)), p(o(D, {
                                name: "config.postgres_database",
                                label: l.$t("Database"),
                                placeholder: l.$t("postgres"),
                                hint: l.$t("Name of the database to back up.")
                              }, null, m, y));
                            else
                              return [
                                e(D, {
                                  name: "config.postgres_host",
                                  label: l.$t("Host"),
                                  placeholder: l.$t("localhost"),
                                  hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(D, {
                                  name: "config.postgres_port",
                                  type: "number",
                                  label: l.$t("Port"),
                                  placeholder: l.$t("5432"),
                                  hint: l.$t("Port number of the PostgreSQL server.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(D, {
                                  name: "config.postgres_username",
                                  label: l.$t("Username"),
                                  placeholder: l.$t("postgres"),
                                  hint: l.$t("PostgreSQL user with read access to the target database.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(D, {
                                  name: "config.postgres_password",
                                  type: "password",
                                  label: l.$t("Password"),
                                  hint: l.$t("Password for the PostgreSQL user.")
                                }, null, 8, ["label", "hint"]),
                                e(D, {
                                  name: "config.postgres_database",
                                  label: l.$t("Database"),
                                  placeholder: l.$t("postgres"),
                                  hint: l.$t("Name of the database to back up.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, C));
                      else
                        return [
                          e(a(Q), null, {
                            default: t(() => [
                              e(a(E), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Connection")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(a(A), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Configure the PostgreSQL database connection settings.")),
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
                          }),
                          e(a(B), { class: "space-y-6" }, {
                            default: t(() => [
                              e(D, {
                                name: "config.postgres_host",
                                label: l.$t("Host"),
                                placeholder: l.$t("localhost"),
                                hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(D, {
                                name: "config.postgres_port",
                                type: "number",
                                label: l.$t("Port"),
                                placeholder: l.$t("5432"),
                                hint: l.$t("Port number of the PostgreSQL server.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(D, {
                                name: "config.postgres_username",
                                label: l.$t("Username"),
                                placeholder: l.$t("postgres"),
                                hint: l.$t("PostgreSQL user with read access to the target database.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(D, {
                                name: "config.postgres_password",
                                type: "password",
                                label: l.$t("Password"),
                                hint: l.$t("Password for the PostgreSQL user.")
                              }, null, 8, ["label", "hint"]),
                              e(D, {
                                name: "config.postgres_database",
                                label: l.$t("Database"),
                                placeholder: l.$t("postgres"),
                                hint: l.$t("Name of the database to back up.")
                              }, null, 8, ["label", "placeholder", "hint"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(q), null, {
                      default: t(() => [
                        e(a(Q), null, {
                          default: t(() => [
                            e(a(E), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Connection")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(a(A), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Configure the PostgreSQL database connection settings.")),
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
                        }),
                        e(a(B), { class: "space-y-6" }, {
                          default: t(() => [
                            e(D, {
                              name: "config.postgres_host",
                              label: l.$t("Host"),
                              placeholder: l.$t("localhost"),
                              hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(D, {
                              name: "config.postgres_port",
                              type: "number",
                              label: l.$t("Port"),
                              placeholder: l.$t("5432"),
                              hint: l.$t("Port number of the PostgreSQL server.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(D, {
                              name: "config.postgres_username",
                              label: l.$t("Username"),
                              placeholder: l.$t("postgres"),
                              hint: l.$t("PostgreSQL user with read access to the target database.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(D, {
                              name: "config.postgres_password",
                              type: "password",
                              label: l.$t("Password"),
                              hint: l.$t("Password for the PostgreSQL user.")
                            }, null, 8, ["label", "hint"]),
                            e(D, {
                              name: "config.postgres_database",
                              label: l.$t("Database"),
                              placeholder: l.$t("postgres"),
                              hint: l.$t("Name of the database to back up.")
                            }, null, 8, ["label", "placeholder", "hint"])
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
            }, T, v)), i(o(a(U), { value: "drive" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(ue, null, null, $, c));
                else
                  return [
                    e(ue)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "docker" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(ve, null, null, $, c));
                else
                  return [
                    e(ve)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "retention" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(de, null, null, $, c));
                else
                  return [
                    e(de)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "dumps" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(re, {
                    "plan-id": u.value.id
                  }, null, $, c));
                else
                  return [
                    e(re, {
                      "plan-id": u.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Details")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "connection",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Connection")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Drive")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Docker")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Retention")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "dumps",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Dumps")),
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
              }),
              e(a(U), { value: "details" }, {
                default: t(() => [
                  e(le)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "connection" }, {
                default: t(() => [
                  e(a(q), null, {
                    default: t(() => [
                      e(a(Q), null, {
                        default: t(() => [
                          e(a(E), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Connection")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(a(A), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Configure the PostgreSQL database connection settings.")),
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
                      }),
                      e(a(B), { class: "space-y-6" }, {
                        default: t(() => [
                          e(D, {
                            name: "config.postgres_host",
                            label: l.$t("Host"),
                            placeholder: l.$t("localhost"),
                            hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(D, {
                            name: "config.postgres_port",
                            type: "number",
                            label: l.$t("Port"),
                            placeholder: l.$t("5432"),
                            hint: l.$t("Port number of the PostgreSQL server.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(D, {
                            name: "config.postgres_username",
                            label: l.$t("Username"),
                            placeholder: l.$t("postgres"),
                            hint: l.$t("PostgreSQL user with read access to the target database.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(D, {
                            name: "config.postgres_password",
                            type: "password",
                            label: l.$t("Password"),
                            hint: l.$t("Password for the PostgreSQL user.")
                          }, null, 8, ["label", "hint"]),
                          e(D, {
                            name: "config.postgres_database",
                            label: l.$t("Database"),
                            placeholder: l.$t("postgres"),
                            hint: l.$t("Name of the database to back up.")
                          }, null, 8, ["label", "placeholder", "hint"])
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
              }),
              e(a(U), { value: "drive" }, {
                default: t(() => [
                  e(ue)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "docker" }, {
                default: t(() => [
                  e(ve)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "retention" }, {
                default: t(() => [
                  e(de)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "dumps" }, {
                default: t(() => [
                  e(re, {
                    "plan-id": u.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, G));
    };
  }
}), st = Le.setup;
Le.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpPostgresForm.vue"), st ? st(b, u) : void 0;
};
const ot = ge.setup;
ge.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/FormStringListInput.vue"), ot ? ot(b, u) : void 0;
};
const Se = /* @__PURE__ */ fe({
  inheritAttrs: !1,
  __name: "PlanResticSnapshots",
  __ssrInlineRender: !0,
  props: {
    planId: {}
  },
  setup(b) {
    const u = b, d = ce([]), l = ce(!1), S = ce();
    function G(i) {
      if (!i) return "0 B";
      const T = Math.floor(Math.log(i) / Math.log(1024)), v = ["B", "KB", "MB", "GB", "TB"];
      return (i / Math.pow(1024, T)).toFixed(2) + " " + v[T];
    }
    const j = dt([
      {
        id: "id",
        label: $t("Snapshot ID"),
        field: "id"
      },
      {
        id: "size",
        label: $t("Size"),
        field: (i) => G(i.metadata.size)
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (i) => i.created_at ? kt(new Date(i.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
      },
      { id: "actions" }
    ]);
    async function M() {
      l.value = !0;
      const [i, T] = await ft.try(
        `/api/zbackup/plans/${u.planId}/restic`,
        { method: "GET" }
      );
      if (i) {
        l.value = !1;
        return;
      }
      d.value = T.items || [], await new Promise((v) => setTimeout(v, 300)), l.value = !1;
    }
    return je(M), (i, T, v, R) => {
      T(o(a(q), R, {
        default: t((f, $, c, z) => {
          if ($)
            $(o(a(Q), null, {
              default: t((r, h, C, O) => {
                if (h)
                  h(`<div class="flex items-center justify-between"${O}><div${O}>`), h(o(a(E), null, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(`${k(i.$t("Snapshots"))}`);
                      else
                        return [
                          s(
                            n(i.$t("Snapshots")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)), h(o(a(A), null, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(`${k(i.$t("View and manage Restic snapshots for this plan."))}`);
                      else
                        return [
                          s(
                            n(i.$t("View and manage Restic snapshots for this plan.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)), h(`</div><div class="flex items-center gap-2"${O}>`), h(o(H, {
                    variant: "outline",
                    onClick: M
                  }, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(o(L, {
                          name: "refreshCw",
                          class: { "animate-spin": l.value }
                        }, null, y, P));
                      else
                        return [
                          e(L, {
                            name: "refreshCw",
                            class: { "animate-spin": l.value }
                          }, null, 8, ["class"])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)), h("</div></div>");
                else
                  return [
                    e("div", { class: "flex items-center justify-between" }, [
                      e("div", null, [
                        e(a(E), null, {
                          default: t(() => [
                            s(
                              n(i.$t("Snapshots")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        e(a(A), null, {
                          default: t(() => [
                            s(
                              n(i.$t("View and manage Restic snapshots for this plan.")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      e("div", { class: "flex items-center gap-2" }, [
                        e(H, {
                          variant: "outline",
                          onClick: M
                        }, {
                          default: t(() => [
                            e(L, {
                              name: "refreshCw",
                              class: { "animate-spin": l.value }
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
            }, c, z)), $(o(a(B), null, {
              default: t((r, h, C, O) => {
                if (h)
                  S.value ? h(o(he, {
                    "model-value": S.value,
                    open: !0,
                    "onUpdate:open": (p) => {
                      p || (S.value = void 0);
                    }
                  }, {
                    default: t((p, m, y, P) => {
                      if (m)
                        m(`<div class="hidden"${P}></div>`);
                      else
                        return [
                          e("div", { class: "hidden" })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O)) : h("<!---->"), h(o($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value
                  }, {
                    "row-actions": t(({ row: p }, m, y, P) => {
                      if (m)
                        m(`<div class="flex items-center gap-2 justify-end"${P}>`), m(o(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${p.id}/restore`,
                          tooltip: i.$t("Restore this snapshot"),
                          description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: M
                        }, {
                          default: t((g, F, V, Y) => {
                            if (F)
                              F(o(L, { name: "TimerReset" }, null, V, Y));
                            else
                              return [
                                e(L, { name: "TimerReset" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, y, P)), m(o(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${p.id}`,
                          tooltip: i.$t("Delete this snapshot"),
                          description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Snapshot deleted."),
                          onFetched: M
                        }, {
                          default: t((g, F, V, Y) => {
                            if (F)
                              F(o(L, { name: "trash" }, null, V, Y));
                            else
                              return [
                                e(L, { name: "trash" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, y, P)), m(o(pe, null, {
                          default: t((g, F, V, Y) => {
                            if (F)
                              F(o(se, { "as-child": "" }, {
                                default: t((ae, N, ee, _) => {
                                  if (N)
                                    N(o(H, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t((te, Z, we, me) => {
                                        if (Z)
                                          Z(`<span class="sr-only"${me}>${k(i.$t("More"))}</span>`), Z(o(L, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          }, null, we, me));
                                        else
                                          return [
                                            e(
                                              "span",
                                              { class: "sr-only" },
                                              n(i.$t("More")),
                                              1
                                              /* TEXT */
                                            ),
                                            e(L, {
                                              name: "MoreVertical",
                                              class: "w-3 h-3 sm:w-4 sm:h-4"
                                            })
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, ee, _));
                                  else
                                    return [
                                      e(H, {
                                        variant: "ghost",
                                        class: "w-8 h-8 p-0"
                                      }, {
                                        default: t(() => [
                                          e(
                                            "span",
                                            { class: "sr-only" },
                                            n(i.$t("More")),
                                            1
                                            /* TEXT */
                                          ),
                                          e(L, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      })
                                    ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, V, Y)), F(o(oe, { class: "max-h-60 overflow-y-auto" }, {
                                default: t((ae, N, ee, _) => {
                                  if (N)
                                    N(o(J, {
                                      class: "cursor-pointer",
                                      onClick: (te) => S.value = p.metadata
                                    }, {
                                      default: t((te, Z, we, me) => {
                                        if (Z)
                                          Z(`${k(i.$t("Metadata"))}`);
                                        else
                                          return [
                                            s(
                                              n(i.$t("Metadata")),
                                              1
                                              /* TEXT */
                                            )
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, ee, _)), N(o(J, {
                                      class: "cursor-pointer",
                                      onClick: (te) => S.value = p.data
                                    }, {
                                      default: t((te, Z, we, me) => {
                                        if (Z)
                                          Z(`${k(i.$t("Raw Data"))}`);
                                        else
                                          return [
                                            s(
                                              n(i.$t("Raw Data")),
                                              1
                                              /* TEXT */
                                            )
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, ee, _));
                                  else
                                    return [
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (te) => S.value = p.metadata
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Metadata")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"]),
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (te) => S.value = p.data
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Raw Data")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"])
                                    ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, V, Y));
                            else
                              return [
                                e(se, { "as-child": "" }, {
                                  default: t(() => [
                                    e(H, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t(() => [
                                        e(
                                          "span",
                                          { class: "sr-only" },
                                          n(i.$t("More")),
                                          1
                                          /* TEXT */
                                        ),
                                        e(L, {
                                          name: "MoreVertical",
                                          class: "w-3 h-3 sm:w-4 sm:h-4"
                                        })
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(
                                  oe,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (ae) => S.value = p.metadata
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Metadata")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"]),
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (ae) => S.value = p.data
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Raw Data")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, y, P)), m("</div>");
                      else
                        return [
                          e("div", { class: "flex items-center gap-2 justify-end" }, [
                            e(W, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "POST",
                              fetch: `/api/zbackup/plans/${b.planId}/restic/${p.id}/restore`,
                              tooltip: i.$t("Restore this snapshot"),
                              description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                              "toast-on-success": i.$t("Restore started successfully."),
                              onFetched: M
                            }, {
                              default: t(() => [
                                e(L, { name: "TimerReset" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(W, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "DELETE",
                              fetch: `/api/zbackup/plans/${b.planId}/restic/${p.id}`,
                              tooltip: i.$t("Delete this snapshot"),
                              description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                              "toast-on-success": i.$t("Snapshot deleted."),
                              onFetched: M
                            }, {
                              default: t(() => [
                                e(L, { name: "trash" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(
                              pe,
                              null,
                              {
                                default: t(() => [
                                  e(se, { "as-child": "" }, {
                                    default: t(() => [
                                      e(H, {
                                        variant: "ghost",
                                        class: "w-8 h-8 p-0"
                                      }, {
                                        default: t(() => [
                                          e(
                                            "span",
                                            { class: "sr-only" },
                                            n(i.$t("More")),
                                            1
                                            /* TEXT */
                                          ),
                                          e(L, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }),
                                  e(
                                    oe,
                                    { class: "max-h-60 overflow-y-auto" },
                                    {
                                      default: t(() => [
                                        e(J, {
                                          class: "cursor-pointer",
                                          onClick: (g) => S.value = p.metadata
                                        }, {
                                          default: t(() => [
                                            s(
                                              n(i.$t("Metadata")),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 1
                                          /* STABLE */
                                        }, 8, ["onClick"]),
                                        e(J, {
                                          class: "cursor-pointer",
                                          onClick: (g) => S.value = p.data
                                        }, {
                                          default: t(() => [
                                            s(
                                              n(i.$t("Raw Data")),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 1
                                          /* STABLE */
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            )
                          ])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, C, O));
                else
                  return [
                    S.value ? (X(), I(he, {
                      key: 0,
                      "model-value": S.value,
                      open: !0,
                      "onUpdate:open": (p) => {
                        p || (S.value = void 0);
                      }
                    }, {
                      default: t(() => [
                        e("div", { class: "hidden" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["model-value", "onUpdate:open"])) : ye("v-if", !0),
                    e($e, {
                      rows: d.value,
                      columns: a(j),
                      loading: l.value
                    }, {
                      "row-actions": t(({ row: p }) => [
                        e("div", { class: "flex items-center gap-2 justify-end" }, [
                          e(W, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "POST",
                            fetch: `/api/zbackup/plans/${b.planId}/restic/${p.id}/restore`,
                            tooltip: i.$t("Restore this snapshot"),
                            description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                            "toast-on-success": i.$t("Restore started successfully."),
                            onFetched: M
                          }, {
                            default: t(() => [
                              e(L, { name: "TimerReset" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(W, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "DELETE",
                            fetch: `/api/zbackup/plans/${b.planId}/restic/${p.id}`,
                            tooltip: i.$t("Delete this snapshot"),
                            description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                            "toast-on-success": i.$t("Snapshot deleted."),
                            onFetched: M
                          }, {
                            default: t(() => [
                              e(L, { name: "trash" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(
                            pe,
                            null,
                            {
                              default: t(() => [
                                e(se, { "as-child": "" }, {
                                  default: t(() => [
                                    e(H, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t(() => [
                                        e(
                                          "span",
                                          { class: "sr-only" },
                                          n(i.$t("More")),
                                          1
                                          /* TEXT */
                                        ),
                                        e(L, {
                                          name: "MoreVertical",
                                          class: "w-3 h-3 sm:w-4 sm:h-4"
                                        })
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(
                                  oe,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (m) => S.value = p.metadata
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Metadata")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"]),
                                      e(J, {
                                        class: "cursor-pointer",
                                        onClick: (m) => S.value = p.data
                                      }, {
                                        default: t(() => [
                                          s(
                                            n(i.$t("Raw Data")),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["rows", "columns", "loading"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, c, z));
          else
            return [
              e(a(Q), null, {
                default: t(() => [
                  e("div", { class: "flex items-center justify-between" }, [
                    e("div", null, [
                      e(a(E), null, {
                        default: t(() => [
                          s(
                            n(i.$t("Snapshots")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      e(a(A), null, {
                        default: t(() => [
                          s(
                            n(i.$t("View and manage Restic snapshots for this plan.")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    e("div", { class: "flex items-center gap-2" }, [
                      e(H, {
                        variant: "outline",
                        onClick: M
                      }, {
                        default: t(() => [
                          e(L, {
                            name: "refreshCw",
                            class: { "animate-spin": l.value }
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
              e(a(B), null, {
                default: t(() => [
                  S.value ? (X(), I(he, {
                    key: 0,
                    "model-value": S.value,
                    open: !0,
                    "onUpdate:open": (r) => {
                      r || (S.value = void 0);
                    }
                  }, {
                    default: t(() => [
                      e("div", { class: "hidden" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["model-value", "onUpdate:open"])) : ye("v-if", !0),
                  e($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value
                  }, {
                    "row-actions": t(({ row: r }) => [
                      e("div", { class: "flex items-center gap-2 justify-end" }, [
                        e(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${r.id}/restore`,
                          tooltip: i.$t("Restore this snapshot"),
                          description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: M
                        }, {
                          default: t(() => [
                            e(L, { name: "TimerReset" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(W, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${r.id}`,
                          tooltip: i.$t("Delete this snapshot"),
                          description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Snapshot deleted."),
                          onFetched: M
                        }, {
                          default: t(() => [
                            e(L, { name: "trash" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(
                          pe,
                          null,
                          {
                            default: t(() => [
                              e(se, { "as-child": "" }, {
                                default: t(() => [
                                  e(H, {
                                    variant: "ghost",
                                    class: "w-8 h-8 p-0"
                                  }, {
                                    default: t(() => [
                                      e(
                                        "span",
                                        { class: "sr-only" },
                                        n(i.$t("More")),
                                        1
                                        /* TEXT */
                                      ),
                                      e(L, {
                                        name: "MoreVertical",
                                        class: "w-3 h-3 sm:w-4 sm:h-4"
                                      })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  })
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(
                                oe,
                                { class: "max-h-60 overflow-y-auto" },
                                {
                                  default: t(() => [
                                    e(J, {
                                      class: "cursor-pointer",
                                      onClick: (h) => S.value = r.metadata
                                    }, {
                                      default: t(() => [
                                        s(
                                          n(i.$t("Metadata")),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    }, 8, ["onClick"]),
                                    e(J, {
                                      class: "cursor-pointer",
                                      onClick: (h) => S.value = r.data
                                    }, {
                                      default: t(() => [
                                        s(
                                          n(i.$t("Raw Data")),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
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
      }, v));
    };
  }
}), it = Se.setup;
Se.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanResticSnapshots.vue"), it ? it(b, u) : void 0;
};
const Ee = /* @__PURE__ */ fe({
  __name: "PlanResticForm",
  __ssrInlineRender: !0,
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(b) {
    const u = Ae(b, "plan"), d = Ue("tab", "details");
    return (l, S, G, j) => {
      S(o(a(Qe), Re({
        modelValue: a(d),
        "onUpdate:modelValue": (M) => ze(d) ? d.value = M : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((M, i, T, v) => {
          if (i)
            i(o(a(be), null, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Details"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Details")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "repository",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Repository"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Repository")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "backup",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Backup"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Backup")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "cleanup",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Cleanup"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Cleanup")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Docker"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Docker")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c)), f(o(a(w), {
                    value: "snapshots",
                    class: "min-w-60"
                  }, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(`${k(l.$t("Snapshots"))}`);
                      else
                        return [
                          s(
                            n(l.$t("Snapshots")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(w), {
                      value: "details",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Details")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "repository",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Repository")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "backup",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Backup")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "cleanup",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Cleanup")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "docker",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Docker")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(w), {
                      value: "snapshots",
                      class: "min-w-60"
                    }, {
                      default: t(() => [
                        s(
                          n(l.$t("Snapshots")),
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
            }, T, v)), i(o(a(U), { value: "details" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(le, null, null, $, c));
                else
                  return [
                    e(le)
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v)), i(o(a(U), { value: "repository" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(q), null, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(o(a(Q), null, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(a(E), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Repository Configuration"))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Repository Configuration")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y)), p(o(a(A), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Settings related to the Restic repository where backups will be stored."))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Settings related to the Restic repository where backups will be stored.")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y));
                            else
                              return [
                                e(a(E), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Repository Configuration")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(a(A), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Settings related to the Restic repository where backups will be stored.")),
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
                        }, h, C)), r(o(a(B), { class: "space-y-6" }, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(D, {
                                name: "config.restic_repository",
                                label: l.$t("Repository"),
                                placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                                hint: l.$t("File path or URL to the Restic repository.")
                              }, null, m, y)), p(o(D, {
                                name: "config.restic_password",
                                type: "password",
                                label: l.$t("Repository Password"),
                                hint: l.$t("Password for encrypting/decrypting the Restic repository.")
                              }, null, m, y));
                            else
                              return [
                                e(D, {
                                  name: "config.restic_repository",
                                  label: l.$t("Repository"),
                                  placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                                  hint: l.$t("File path or URL to the Restic repository.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(D, {
                                  name: "config.restic_password",
                                  type: "password",
                                  label: l.$t("Repository Password"),
                                  hint: l.$t("Password for encrypting/decrypting the Restic repository.")
                                }, null, 8, ["label", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, C));
                      else
                        return [
                          e(a(Q), null, {
                            default: t(() => [
                              e(a(E), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Repository Configuration")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(a(A), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Settings related to the Restic repository where backups will be stored.")),
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
                          }),
                          e(a(B), { class: "space-y-6" }, {
                            default: t(() => [
                              e(D, {
                                name: "config.restic_repository",
                                label: l.$t("Repository"),
                                placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                                hint: l.$t("File path or URL to the Restic repository.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(D, {
                                name: "config.restic_password",
                                type: "password",
                                label: l.$t("Repository Password"),
                                hint: l.$t("Password for encrypting/decrypting the Restic repository.")
                              }, null, 8, ["label", "hint"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(q), null, {
                      default: t(() => [
                        e(a(Q), null, {
                          default: t(() => [
                            e(a(E), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Repository Configuration")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(a(A), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Settings related to the Restic repository where backups will be stored.")),
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
                        }),
                        e(a(B), { class: "space-y-6" }, {
                          default: t(() => [
                            e(D, {
                              name: "config.restic_repository",
                              label: l.$t("Repository"),
                              placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                              hint: l.$t("File path or URL to the Restic repository.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(D, {
                              name: "config.restic_password",
                              type: "password",
                              label: l.$t("Repository Password"),
                              hint: l.$t("Password for encrypting/decrypting the Restic repository.")
                            }, null, 8, ["label", "hint"])
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
            }, T, v)), i(o(a(U), { value: "backup" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(q), null, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(o(a(Q), null, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(a(E), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Backup"))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Backup")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y)), p(o(a(A), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Settings related to the files and directories to be backed up."))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Settings related to the files and directories to be backed up.")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y));
                            else
                              return [
                                e(a(E), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Backup")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(a(A), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Settings related to the files and directories to be backed up.")),
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
                        }, h, C)), r(o(a(B), { class: "space-y-6" }, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(ge, {
                                name: "config.source_paths",
                                label: l.$t("Paths"),
                                placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                                hint: l.$t("List of file and directory paths to include in the backup.")
                              }, null, m, y)), p(o(x, {
                                name: "config.backup_flags",
                                label: l.$t("Backup Flags"),
                                placeholder: l.$t("--exclude /path/to/exclude"),
                                hint: l.$t("Additional Restic backup command flags, one per line.")
                              }, null, m, y));
                            else
                              return [
                                e(ge, {
                                  name: "config.source_paths",
                                  label: l.$t("Paths"),
                                  placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                                  hint: l.$t("List of file and directory paths to include in the backup.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(x, {
                                  name: "config.backup_flags",
                                  label: l.$t("Backup Flags"),
                                  placeholder: l.$t("--exclude /path/to/exclude"),
                                  hint: l.$t("Additional Restic backup command flags, one per line.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, C));
                      else
                        return [
                          e(a(Q), null, {
                            default: t(() => [
                              e(a(E), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Backup")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(a(A), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Settings related to the files and directories to be backed up.")),
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
                          }),
                          e(a(B), { class: "space-y-6" }, {
                            default: t(() => [
                              e(ge, {
                                name: "config.source_paths",
                                label: l.$t("Paths"),
                                placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                                hint: l.$t("List of file and directory paths to include in the backup.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(x, {
                                name: "config.backup_flags",
                                label: l.$t("Backup Flags"),
                                placeholder: l.$t("--exclude /path/to/exclude"),
                                hint: l.$t("Additional Restic backup command flags, one per line.")
                              }, null, 8, ["label", "placeholder", "hint"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(q), null, {
                      default: t(() => [
                        e(a(Q), null, {
                          default: t(() => [
                            e(a(E), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Backup")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(a(A), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Settings related to the files and directories to be backed up.")),
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
                        }),
                        e(a(B), { class: "space-y-6" }, {
                          default: t(() => [
                            e(ge, {
                              name: "config.source_paths",
                              label: l.$t("Paths"),
                              placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                              hint: l.$t("List of file and directory paths to include in the backup.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(x, {
                              name: "config.backup_flags",
                              label: l.$t("Backup Flags"),
                              placeholder: l.$t("--exclude /path/to/exclude"),
                              hint: l.$t("Additional Restic backup command flags, one per line.")
                            }, null, 8, ["label", "placeholder", "hint"])
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
            }, T, v)), i(o(a(U), { value: "cleanup" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(q), null, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(o(a(Q), null, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(a(E), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Cleanup"))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Cleanup")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y)), p(o(a(A), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Settings related to automatic cleanup of old snapshots."))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Settings related to automatic cleanup of old snapshots.")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y));
                            else
                              return [
                                e(a(E), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Cleanup")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(a(A), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Settings related to automatic cleanup of old snapshots.")),
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
                        }, h, C)), r(o(a(B), { class: "space-y-6" }, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(ne, {
                                name: "config.forget_enabled",
                                label: l.$t("Enable Forget"),
                                hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                                clearable: !0,
                                options: [
                                  { value: !0, label: l.$t("Yes") },
                                  { value: !1, label: l.$t("No") }
                                ]
                              }, null, m, y)), p(o(x, {
                                name: "config.forget_flags",
                                label: l.$t("Forget Flags"),
                                placeholder: l.$t("--keep-daily 7 --keep-weekly 4"),
                                hint: l.$t("Restic forget command flags for controlling snapshot retention.")
                              }, null, m, y));
                            else
                              return [
                                e(ne, {
                                  name: "config.forget_enabled",
                                  label: l.$t("Enable Forget"),
                                  hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                                  clearable: !0,
                                  options: [
                                    { value: !0, label: l.$t("Yes") },
                                    { value: !1, label: l.$t("No") }
                                  ]
                                }, null, 8, ["label", "hint", "options"]),
                                e(x, {
                                  name: "config.forget_flags",
                                  label: l.$t("Forget Flags"),
                                  placeholder: l.$t("--keep-daily 7 --keep-weekly 4"),
                                  hint: l.$t("Restic forget command flags for controlling snapshot retention.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, C));
                      else
                        return [
                          e(a(Q), null, {
                            default: t(() => [
                              e(a(E), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Cleanup")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(a(A), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Settings related to automatic cleanup of old snapshots.")),
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
                          }),
                          e(a(B), { class: "space-y-6" }, {
                            default: t(() => [
                              e(ne, {
                                name: "config.forget_enabled",
                                label: l.$t("Enable Forget"),
                                hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                                clearable: !0,
                                options: [
                                  { value: !0, label: l.$t("Yes") },
                                  { value: !1, label: l.$t("No") }
                                ]
                              }, null, 8, ["label", "hint", "options"]),
                              e(x, {
                                name: "config.forget_flags",
                                label: l.$t("Forget Flags"),
                                placeholder: l.$t("--keep-daily 7 --keep-weekly 4"),
                                hint: l.$t("Restic forget command flags for controlling snapshot retention.")
                              }, null, 8, ["label", "placeholder", "hint"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(q), null, {
                      default: t(() => [
                        e(a(Q), null, {
                          default: t(() => [
                            e(a(E), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Cleanup")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(a(A), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Settings related to automatic cleanup of old snapshots.")),
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
                        }),
                        e(a(B), { class: "space-y-6" }, {
                          default: t(() => [
                            e(ne, {
                              name: "config.forget_enabled",
                              label: l.$t("Enable Forget"),
                              hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                              clearable: !0,
                              options: [
                                { value: !0, label: l.$t("Yes") },
                                { value: !1, label: l.$t("No") }
                              ]
                            }, null, 8, ["label", "hint", "options"]),
                            e(x, {
                              name: "config.forget_flags",
                              label: l.$t("Forget Flags"),
                              placeholder: l.$t("--keep-daily 7 --keep-weekly 4"),
                              hint: l.$t("Restic forget command flags for controlling snapshot retention.")
                            }, null, 8, ["label", "placeholder", "hint"])
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
            }, T, v)), i(o(a(U), { value: "docker" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(a(q), null, {
                    default: t((z, r, h, C) => {
                      if (r)
                        r(o(a(Q), null, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(a(E), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Docker"))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Docker")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y)), p(o(a(A), null, {
                                default: t((P, g, F, V) => {
                                  if (g)
                                    g(`${k(l.$t("Configure the Docker image used to run Restic commands."))}`);
                                  else
                                    return [
                                      s(
                                        n(l.$t("Configure the Docker image used to run Restic commands.")),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                }),
                                _: 1
                                /* STABLE */
                              }, m, y));
                            else
                              return [
                                e(a(E), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Docker")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                e(a(A), null, {
                                  default: t(() => [
                                    s(
                                      n(l.$t("Configure the Docker image used to run Restic commands.")),
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
                        }, h, C)), r(o(a(B), { class: "space-y-6" }, {
                          default: t((O, p, m, y) => {
                            if (p)
                              p(o(D, {
                                name: "config.docker_image",
                                label: l.$t("Docker Image"),
                                placeholder: l.$t("restic/restic:latest"),
                                hint: l.$t("Docker image used to run Restic commands. Defaults to restic/restic:latest.")
                              }, null, m, y));
                            else
                              return [
                                e(D, {
                                  name: "config.docker_image",
                                  label: l.$t("Docker Image"),
                                  placeholder: l.$t("restic/restic:latest"),
                                  hint: l.$t("Docker image used to run Restic commands. Defaults to restic/restic:latest.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, C));
                      else
                        return [
                          e(a(Q), null, {
                            default: t(() => [
                              e(a(E), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Docker")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              e(a(A), null, {
                                default: t(() => [
                                  s(
                                    n(l.$t("Configure the Docker image used to run Restic commands.")),
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
                          }),
                          e(a(B), { class: "space-y-6" }, {
                            default: t(() => [
                              e(D, {
                                name: "config.docker_image",
                                label: l.$t("Docker Image"),
                                placeholder: l.$t("restic/restic:latest"),
                                hint: l.$t("Docker image used to run Restic commands. Defaults to restic/restic:latest.")
                              }, null, 8, ["label", "placeholder", "hint"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, $, c));
                else
                  return [
                    e(a(q), null, {
                      default: t(() => [
                        e(a(Q), null, {
                          default: t(() => [
                            e(a(E), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Docker")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e(a(A), null, {
                              default: t(() => [
                                s(
                                  n(l.$t("Configure the Docker image used to run Restic commands.")),
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
                        }),
                        e(a(B), { class: "space-y-6" }, {
                          default: t(() => [
                            e(D, {
                              name: "config.docker_image",
                              label: l.$t("Docker Image"),
                              placeholder: l.$t("restic/restic:latest"),
                              hint: l.$t("Docker image used to run Restic commands. Defaults to restic/restic:latest.")
                            }, null, 8, ["label", "placeholder", "hint"])
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
            }, T, v)), i(o(a(U), { value: "snapshots" }, {
              default: t((R, f, $, c) => {
                if (f)
                  f(o(Se, {
                    "plan-id": u.value.id
                  }, null, $, c));
                else
                  return [
                    e(Se, {
                      "plan-id": u.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, T, v));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(w), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Details")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "repository",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Repository")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "backup",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Backup")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "cleanup",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Cleanup")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Docker")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(w), {
                    value: "snapshots",
                    class: "min-w-60"
                  }, {
                    default: t(() => [
                      s(
                        n(l.$t("Snapshots")),
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
              }),
              e(a(U), { value: "details" }, {
                default: t(() => [
                  e(le)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(U), { value: "repository" }, {
                default: t(() => [
                  e(a(q), null, {
                    default: t(() => [
                      e(a(Q), null, {
                        default: t(() => [
                          e(a(E), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Repository Configuration")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(a(A), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Settings related to the Restic repository where backups will be stored.")),
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
                      }),
                      e(a(B), { class: "space-y-6" }, {
                        default: t(() => [
                          e(D, {
                            name: "config.restic_repository",
                            label: l.$t("Repository"),
                            placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                            hint: l.$t("File path or URL to the Restic repository.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(D, {
                            name: "config.restic_password",
                            type: "password",
                            label: l.$t("Repository Password"),
                            hint: l.$t("Password for encrypting/decrypting the Restic repository.")
                          }, null, 8, ["label", "hint"])
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
              }),
              e(a(U), { value: "backup" }, {
                default: t(() => [
                  e(a(q), null, {
                    default: t(() => [
                      e(a(Q), null, {
                        default: t(() => [
                          e(a(E), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Backup")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(a(A), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Settings related to the files and directories to be backed up.")),
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
                      }),
                      e(a(B), { class: "space-y-6" }, {
                        default: t(() => [
                          e(ge, {
                            name: "config.source_paths",
                            label: l.$t("Paths"),
                            placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                            hint: l.$t("List of file and directory paths to include in the backup.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(x, {
                            name: "config.backup_flags",
                            label: l.$t("Backup Flags"),
                            placeholder: l.$t("--exclude /path/to/exclude"),
                            hint: l.$t("Additional Restic backup command flags, one per line.")
                          }, null, 8, ["label", "placeholder", "hint"])
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
              }),
              e(a(U), { value: "cleanup" }, {
                default: t(() => [
                  e(a(q), null, {
                    default: t(() => [
                      e(a(Q), null, {
                        default: t(() => [
                          e(a(E), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Cleanup")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(a(A), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Settings related to automatic cleanup of old snapshots.")),
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
                      }),
                      e(a(B), { class: "space-y-6" }, {
                        default: t(() => [
                          e(ne, {
                            name: "config.forget_enabled",
                            label: l.$t("Enable Forget"),
                            hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                            clearable: !0,
                            options: [
                              { value: !0, label: l.$t("Yes") },
                              { value: !1, label: l.$t("No") }
                            ]
                          }, null, 8, ["label", "hint", "options"]),
                          e(x, {
                            name: "config.forget_flags",
                            label: l.$t("Forget Flags"),
                            placeholder: l.$t("--keep-daily 7 --keep-weekly 4"),
                            hint: l.$t("Restic forget command flags for controlling snapshot retention.")
                          }, null, 8, ["label", "placeholder", "hint"])
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
              }),
              e(a(U), { value: "docker" }, {
                default: t(() => [
                  e(a(q), null, {
                    default: t(() => [
                      e(a(Q), null, {
                        default: t(() => [
                          e(a(E), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Docker")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          e(a(A), null, {
                            default: t(() => [
                              s(
                                n(l.$t("Configure the Docker image used to run Restic commands.")),
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
                      }),
                      e(a(B), { class: "space-y-6" }, {
                        default: t(() => [
                          e(D, {
                            name: "config.docker_image",
                            label: l.$t("Docker Image"),
                            placeholder: l.$t("restic/restic:latest"),
                            hint: l.$t("Docker image used to run Restic commands. Defaults to restic/restic:latest.")
                          }, null, 8, ["label", "placeholder", "hint"])
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
              }),
              e(a(U), { value: "snapshots" }, {
                default: t(() => [
                  e(Se, {
                    "plan-id": u.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, G));
    };
  }
}), rt = Ee.setup;
Ee.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanResticForm.vue"), rt ? rt(b, u) : void 0;
};
const ct = /* @__PURE__ */ fe({
  __name: "[id]",
  __ssrInlineRender: !0,
  setup(b) {
    const u = pt(() => String(bt.params.id)), d = ce(), l = ce(!1), S = ce(!1), G = ce(!1), j = ie.partial(ie.object({
      name: ie.string(),
      description: ie.optional(ie.string(), ""),
      active: ie.boolean(),
      config: ie.record(ie.string(), ie.any()),
      triggers: ie.array(ie.any())
    })), { handleSubmit: M, resetForm: i, values: T, errors: v } = gt(j, {
      initialValues: {
        name: "hello",
        description: "",
        active: !1,
        config: {},
        triggers: []
      }
    }), R = M(async (r) => {
      S.value = !0;
      const [h] = await Oe.try(`/api/zbackup/plans/${u.value}`, {
        method: "PATCH",
        data: {
          name: r.name,
          description: r.description,
          active: r.active,
          config: r.config,
          triggers: d.value?.triggers || []
        }
      });
      if (h) {
        S.value = !1, Pe.error($t("Failed to update."));
        return;
      }
      d.value && (d.value.name = r.name, d.value.description = r.description, d.value.active = r.active, d.value.config = r.config, d.value.triggers = d.value.triggers || []), setTimeout(() => {
        S.value = !1, Pe.success($t("Updated successfully."));
      }, 800);
    });
    function f() {
      const r = {
        name: "",
        description: "",
        active: !1,
        config: {},
        triggers: []
      };
      d.value && i({ values: r });
    }
    async function $(r) {
      G.value = !0;
      const [h] = await Oe.try(`/api/zbackup/plans/${u.value}/backup`, {
        method: "POST",
        data: r
      });
      if (h) {
        G.value = !1;
        return;
      }
      setTimeout(() => {
        Pe.success($t("Executed")), G.value = !1;
      }, 800);
    }
    async function c() {
      l.value = !0;
      const [r, h] = await Oe.try(`/api/zbackup/plans/${u.value}`);
      if (r) {
        l.value = !1, Pe.error($t("Failed to load plan details.")), yt.push("/admin/zbackup/plans");
        return;
      }
      d.value = h, l.value = !1, i({
        values: {
          name: h.name,
          description: h.description || "",
          active: h.active || !1,
          config: h.config || {},
          triggers: h.triggers || []
        }
      });
    }
    async function z() {
      d.value || await c();
    }
    return je(z), mt(z), (r, h, C, O) => {
      h(o(wt, Re({
        breadcrumbs: [
          { label: r.$t("Backup"), to: "/admin/backup" },
          { label: r.$t("Plans"), to: "/admin/backup/plans" },
          { label: r.$t("Plan") }
        ]
      }, O), {
        default: t((p, m, y, P) => {
          if (m)
            l.value ? m(`<div class="flex justify-center items-center h-64"${P}><div class="text-lg"${P}>${k(r.$t("Loading..."))}</div></div>`) : m("<!---->"), !l.value && d.value ? (m(`<form${P}><div class="mb-6 flex items-start justify-between gap-4"${P}><div${P}><h1 class="text-2xl font-bold"${P}>${k(r.$t("Plan"))}</h1><p class="text-muted-foreground"${P}>${k(r.$t("Edit plan details and configuration."))}</p></div><div class="flex shrink-0 items-center gap-2"${P}>`), m(o(H, {
              type: "button",
              variant: "outline",
              onClick: f
            }, {
              default: t((g, F, V, Y) => {
                if (F)
                  F(o(L, { name: "RotateCcw" }, null, V, Y)), F(` ${k(r.$t("Reset"))}`);
                else
                  return [
                    e(L, { name: "RotateCcw" }),
                    s(
                      " " + n(r.$t("Reset")),
                      1
                      /* TEXT */
                    )
                  ];
              }),
              _: 1
              /* STABLE */
            }, y, P)), m(o(Ne, {
              title: r.$t("Execute Backup"),
              description: r.$t("Execute a manual backup for this plan."),
              "submit-text": r.$t("Run Backup"),
              handle: $,
              fields: {
                description: {
                  component: "text-field",
                  label: r.$t("Description")
                }
              }
            }, {
              default: t((g, F, V, Y) => {
                if (F)
                  F(o(H, {
                    type: "button",
                    variant: "outline",
                    loading: G.value
                  }, {
                    default: t((ae, N, ee, _) => {
                      if (N)
                        N(o(L, { name: "play" }, null, ee, _)), N(` ${k(r.$t("Execute"))}`);
                      else
                        return [
                          e(L, { name: "play" }),
                          s(
                            " " + n(r.$t("Execute")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, V, Y));
                else
                  return [
                    e(H, {
                      type: "button",
                      variant: "outline",
                      loading: G.value
                    }, {
                      default: t(() => [
                        e(L, { name: "play" }),
                        s(
                          " " + n(r.$t("Execute")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, y, P)), m(o(H, {
              type: "submit",
              loading: S.value
            }, {
              default: t((g, F, V, Y) => {
                if (F)
                  F(`${k(r.$t("Save"))}`);
                else
                  return [
                    s(
                      n(r.$t("Save")),
                      1
                      /* TEXT */
                    )
                  ];
              }),
              _: 1
              /* STABLE */
            }, y, P)), m("</div></div>"), Object.keys(a(v)).length ? m(o(a(Me), {
              variant: "destructive",
              class: "mb-6"
            }, {
              default: t((g, F, V, Y) => {
                if (F)
                  F(o(a(ke), null, {
                    default: t((ae, N, ee, _) => {
                      if (N)
                        N(`${k(r.$t("Please fix the following errors before saving"))}`);
                      else
                        return [
                          s(
                            n(r.$t("Please fix the following errors before saving")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, V, Y)), F(o(a(De), null, {
                    default: t((ae, N, ee, _) => {
                      if (N)
                        N(`<ul class="mt-1 list-disc list-inside space-y-1"${_}><!--[-->`), vt(a(v), (te, Z) => {
                          N(`<li${_}><span class="font-medium"${_}>${k(Z)}</span>: ${k(te)}</li>`);
                        }), N("<!--]--></ul>");
                      else
                        return [
                          e("ul", { class: "mt-1 list-disc list-inside space-y-1" }, [
                            (X(!0), I(
                              Be,
                              null,
                              Ve(a(v), (te, Z) => (X(), I("li", { key: Z }, [
                                e(
                                  "span",
                                  { class: "font-medium" },
                                  n(Z),
                                  1
                                  /* TEXT */
                                ),
                                s(
                                  ": " + n(te),
                                  1
                                  /* TEXT */
                                )
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, V, Y));
                else
                  return [
                    e(a(ke), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Please fix the following errors before saving")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(De), null, {
                      default: t(() => [
                        e("ul", { class: "mt-1 list-disc list-inside space-y-1" }, [
                          (X(!0), I(
                            Be,
                            null,
                            Ve(a(v), (ae, N) => (X(), I("li", { key: N }, [
                              e(
                                "span",
                                { class: "font-medium" },
                                n(N),
                                1
                                /* TEXT */
                              ),
                              s(
                                ": " + n(ae),
                                1
                                /* TEXT */
                              )
                            ]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ];
              }),
              _: 1
              /* STABLE */
            }, y, P)) : m("<!---->"), d.value.strategy === "dump_connection" ? m(o(Fe, {
              plan: d.value,
              "onUpdate:plan": (g) => d.value = g
            }, null, y, P)) : d.value.strategy === "dump_postgres" ? m(o(Le, {
              plan: d.value,
              "onUpdate:plan": (g) => d.value = g
            }, null, y, P)) : d.value.strategy === "dump_sqlite" ? m(o(Te, {
              plan: d.value,
              "onUpdate:plan": (g) => d.value = g
            }, null, y, P)) : d.value.strategy === "restic" ? m(o(Ee, {
              plan: d.value,
              "onUpdate:plan": (g) => d.value = g
            }, null, y, P)) : m(o(a(Me), { variant: "destructive" }, {
              default: t((g, F, V, Y) => {
                if (F)
                  F(o(a(ke), null, {
                    default: t((ae, N, ee, _) => {
                      if (N)
                        N(`${k(r.$t("Unsupported strategy"))}`);
                      else
                        return [
                          s(
                            n(r.$t("Unsupported strategy")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, V, Y)), F(o(a(De), null, {
                    default: t((ae, N, ee, _) => {
                      if (N)
                        N(`${k(r.$t('No form is available for strategy ":strategy".', { strategy: d.value.strategy }))}`);
                      else
                        return [
                          s(
                            n(r.$t('No form is available for strategy ":strategy".', { strategy: d.value.strategy })),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, V, Y));
                else
                  return [
                    e(a(ke), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Unsupported strategy")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(De), null, {
                      default: t(() => [
                        s(
                          n(r.$t('No form is available for strategy ":strategy".', { strategy: d.value.strategy })),
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
            }, y, P)), m("</form>")) : m("<!---->");
          else
            return [
              l.value ? (X(), I("div", {
                key: 0,
                class: "flex justify-center items-center h-64"
              }, [
                e(
                  "div",
                  { class: "text-lg" },
                  n(r.$t("Loading...")),
                  1
                  /* TEXT */
                )
              ])) : ye("v-if", !0),
              !l.value && d.value ? (X(), I("form", {
                key: 1,
                onSubmit: ht(a(R), ["prevent"])
              }, [
                e("div", { class: "mb-6 flex items-start justify-between gap-4" }, [
                  e("div", null, [
                    e(
                      "h1",
                      { class: "text-2xl font-bold" },
                      n(r.$t("Plan")),
                      1
                      /* TEXT */
                    ),
                    e(
                      "p",
                      { class: "text-muted-foreground" },
                      n(r.$t("Edit plan details and configuration.")),
                      1
                      /* TEXT */
                    )
                  ]),
                  e("div", { class: "flex shrink-0 items-center gap-2" }, [
                    e(H, {
                      type: "button",
                      variant: "outline",
                      onClick: f
                    }, {
                      default: t(() => [
                        e(L, { name: "RotateCcw" }),
                        s(
                          " " + n(r.$t("Reset")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(Ne, {
                      title: r.$t("Execute Backup"),
                      description: r.$t("Execute a manual backup for this plan."),
                      "submit-text": r.$t("Run Backup"),
                      handle: $,
                      fields: {
                        description: {
                          component: "text-field",
                          label: r.$t("Description")
                        }
                      }
                    }, {
                      default: t(() => [
                        e(H, {
                          type: "button",
                          variant: "outline",
                          loading: G.value
                        }, {
                          default: t(() => [
                            e(L, { name: "play" }),
                            s(
                              " " + n(r.$t("Execute")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["loading"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["title", "description", "submit-text", "fields"]),
                    e(H, {
                      type: "submit",
                      loading: S.value
                    }, {
                      default: t(() => [
                        s(
                          n(r.$t("Save")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading"])
                  ])
                ]),
                Object.keys(a(v)).length ? (X(), I(a(Me), {
                  key: 0,
                  variant: "destructive",
                  class: "mb-6"
                }, {
                  default: t(() => [
                    e(a(ke), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Please fix the following errors before saving")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(De), null, {
                      default: t(() => [
                        e("ul", { class: "mt-1 list-disc list-inside space-y-1" }, [
                          (X(!0), I(
                            Be,
                            null,
                            Ve(a(v), (g, F) => (X(), I("li", { key: F }, [
                              e(
                                "span",
                                { class: "font-medium" },
                                n(F),
                                1
                                /* TEXT */
                              ),
                              s(
                                ": " + n(g),
                                1
                                /* TEXT */
                              )
                            ]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })) : ye("v-if", !0),
                d.value.strategy === "dump_connection" ? (X(), I(Fe, {
                  key: 1,
                  plan: d.value,
                  "onUpdate:plan": (g) => d.value = g
                }, null, 8, ["plan", "onUpdate:plan"])) : d.value.strategy === "dump_postgres" ? (X(), I(Le, {
                  key: 2,
                  plan: d.value,
                  "onUpdate:plan": (g) => d.value = g
                }, null, 8, ["plan", "onUpdate:plan"])) : d.value.strategy === "dump_sqlite" ? (X(), I(Te, {
                  key: 3,
                  plan: d.value,
                  "onUpdate:plan": (g) => d.value = g
                }, null, 8, ["plan", "onUpdate:plan"])) : d.value.strategy === "restic" ? (X(), I(Ee, {
                  key: 4,
                  plan: d.value,
                  "onUpdate:plan": (g) => d.value = g
                }, null, 8, ["plan", "onUpdate:plan"])) : (X(), I(a(Me), {
                  key: 5,
                  variant: "destructive"
                }, {
                  default: t(() => [
                    e(a(ke), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Unsupported strategy")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(De), null, {
                      default: t(() => [
                        s(
                          n(r.$t('No form is available for strategy ":strategy".', { strategy: d.value.strategy })),
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
                }))
              ], 40, ["onSubmit"])) : ye("v-if", !0)
            ];
        }),
        _: 1
        /* STABLE */
      }, C));
    };
  }
}), ut = ct.setup;
ct.setup = (b, u) => {
  const d = K();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/pages/plans/[id].vue"), ut ? ut(b, u) : void 0;
};
export {
  ct as default
};
