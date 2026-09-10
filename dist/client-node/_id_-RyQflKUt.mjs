import { useSSRContext as H, defineComponent as oe, ref as re, onMounted as Ae, unref as a, withCtx as t, createTextVNode as s, toDisplayString as n, createVNode as e, openBlock as me, createBlock as pe, createCommentVNode as Re, useModel as Pe, mergeProps as Fe, isRef as Me, computed as ct, onServerPrefetch as mt, Fragment as Ue, renderList as Oe } from "vue";
import { ssrRenderComponent as o, ssrInterpolate as D, ssrRenderList as pt } from "vue/server-renderer";
import * as le from "valibot";
import { toast as De } from "vue-sonner";
import { defineColumns as ut, fetcher as dt, route as ht, useForm as vt, $fetch as Ee, router as bt } from "@sidekick-coder/zenith-kit/client";
import "./Icon-Bds3_RR7.mjs";
import "./AlertButton-Xlj1Nojp.mjs";
import { FormSelect as _, DataTable as $e, ObjectInspect as he, DropdownMenu as ue, DropdownMenuTrigger as x, DropdownMenuItem as Y, DropdownMenuContent as ee, Card as N, CardHeader as B, CardTitle as T, CardDescription as L, ZAlertButton as G, Icon as E, ZButton as q, CardContent as V, FormTextField as C, FormSwitch as ye, FormTextarea as J, useRouteQuery as Te, Tabs as Le, TabsList as be, TabsTrigger as k, TabsContent as z, FormStringListInput as ge, DialogForm as gt, Alert as je, AlertTitle as Ce, AlertDescription as Se } from "@sidekick-coder/zenith-kit/components";
import { format as wt } from "date-fns";
const Ne = _.setup;
_.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/FormSelect.vue"), Ne ? Ne(b, r) : void 0;
};
const qe = $e.setup;
$e.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/DataTable.vue"), qe ? qe(b, r) : void 0;
};
const He = he.setup;
he.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/ObjectInspect.vue"), He ? He(b, r) : void 0;
};
const Ie = ue.setup;
ue.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/ui/dropdown-menu/DropdownMenu.vue"), Ie ? Ie(b, r) : void 0;
};
const Ye = x.setup;
x.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/ui/dropdown-menu/DropdownMenuTrigger.vue"), Ye ? Ye(b, r) : void 0;
};
const Ge = Y.setup;
Y.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/ui/dropdown-menu/DropdownMenuItem.vue"), Ge ? Ge(b, r) : void 0;
};
const Ke = ee.setup;
ee.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/ui/dropdown-menu/DropdownMenuContent.vue"), Ke ? Ke(b, r) : void 0;
};
const ae = /* @__PURE__ */ oe({
  inheritAttrs: !1,
  __name: "PlanDumpSnapshots",
  __ssrInlineRender: !0,
  props: {
    planId: {}
  },
  setup(b) {
    const r = b, d = re([]), l = re(!1), R = re();
    function I(i) {
      if (!i) return "0 B";
      const M = Math.floor(Math.log(i) / Math.log(1024)), g = ["B", "KB", "MB", "GB", "TB"];
      return (i / Math.pow(1024, M)).toFixed(2) + " " + g[M];
    }
    const j = ut([
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
        field: (i) => I(i.size)
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (i) => i.created_at ? $dt(i.created_at) : "-"
      },
      { id: "actions" }
    ]);
    async function F() {
      l.value = !0;
      const [i, M] = await dt.try(
        `/api/zbackup/plans/${r.planId}/dumps`,
        { method: "GET" }
      );
      if (i) {
        l.value = !1;
        return;
      }
      d.value = M.items || [], await new Promise((g) => setTimeout(g, 300)), l.value = !1;
    }
    return Ae(F), (i, M, g, P) => {
      M(o(a(N), P, {
        default: t((f, $, m, v) => {
          if ($)
            $(o(a(B), null, {
              default: t((u, h, S, A) => {
                if (h)
                  h(`<div class="flex items-center justify-between"${A}><div${A}>`), h(o(a(T), null, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(`${D(i.$t("Dumps"))}`);
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
                  }, S, A)), h(o(a(L), null, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(`${D(i.$t("View and manage dump snapshots for this plan."))}`);
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
                  }, S, A)), h(`</div><div class="flex items-center gap-2"${A}>`), h(o(G, {
                    variant: "outline",
                    "fetch-method": "POST",
                    fetch: `/api/zbackup/plans/${b.planId}/dumps/cleanup`,
                    tooltip: i.$t("Remove old dumps based on retention settings"),
                    description: i.$t("Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted."),
                    "toast-on-success": i.$t("Cleanup completed."),
                    onFetched: F
                  }, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(o(E, { name: "Eraser" }, null, w, Q)), p(` ${D(i.$t("Cleanup"))}`);
                      else
                        return [
                          e(E, { name: "Eraser" }),
                          s(
                            " " + n(i.$t("Cleanup")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, S, A)), h(o(q, {
                    variant: "outline",
                    onClick: F
                  }, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(o(E, {
                          name: "refreshCw",
                          class: { "animate-spin": l.value }
                        }, null, w, Q));
                      else
                        return [
                          e(E, {
                            name: "refreshCw",
                            class: { "animate-spin": l.value }
                          }, null, 8, ["class"])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, S, A)), h("</div></div>");
                else
                  return [
                    e("div", { class: "flex items-center justify-between" }, [
                      e("div", null, [
                        e(a(T), null, {
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
                        e(a(L), null, {
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
                        e(G, {
                          variant: "outline",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/cleanup`,
                          tooltip: i.$t("Remove old dumps based on retention settings"),
                          description: i.$t("Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted."),
                          "toast-on-success": i.$t("Cleanup completed."),
                          onFetched: F
                        }, {
                          default: t(() => [
                            e(E, { name: "Eraser" }),
                            s(
                              " " + n(i.$t("Cleanup")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(q, {
                          variant: "outline",
                          onClick: F
                        }, {
                          default: t(() => [
                            e(E, {
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
            }, m, v)), $(o(a(V), null, {
              default: t((u, h, S, A) => {
                if (h)
                  R.value ? h(o(he, {
                    "model-value": R.value,
                    open: !0,
                    "onUpdate:open": (c) => {
                      c || (R.value = void 0);
                    }
                  }, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(`<div class="hidden"${Q}></div>`);
                      else
                        return [
                          e("div", { class: "hidden" })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, S, A)) : h("<!---->"), h(o($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value,
                    "hide-pagination": ""
                  }, {
                    "row-actions": t(({ row: c }, p, w, Q) => {
                      if (p)
                        p(`<div class="flex items-center gap-2 justify-end"${Q}>`), p(o(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${c.id}/restore`,
                          tooltip: i.$t("Restore this dump"),
                          description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: F
                        }, {
                          default: t((y, U, O, K) => {
                            if (U)
                              U(o(E, { name: "TimerReset" }, null, O, K));
                            else
                              return [
                                e(E, { name: "TimerReset" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, w, Q)), p(o(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${c.id}`,
                          tooltip: i.$t("Delete this dump"),
                          description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Dump deleted."),
                          onFetched: F
                        }, {
                          default: t((y, U, O, K) => {
                            if (U)
                              U(o(E, { name: "trash" }, null, O, K));
                            else
                              return [
                                e(E, { name: "trash" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, w, Q)), p(o(ue, null, {
                          default: t((y, U, O, K) => {
                            if (U)
                              U(o(x, { "as-child": "" }, {
                                default: t((te, X, de, fe) => {
                                  if (X)
                                    X(o(q, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t((ie, Z, we, ce) => {
                                        if (Z)
                                          Z(`<span class="sr-only"${ce}>${D(i.$t("More"))}</span>`), Z(o(E, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          }, null, we, ce));
                                        else
                                          return [
                                            e(
                                              "span",
                                              { class: "sr-only" },
                                              n(i.$t("More")),
                                              1
                                              /* TEXT */
                                            ),
                                            e(E, {
                                              name: "MoreVertical",
                                              class: "w-3 h-3 sm:w-4 sm:h-4"
                                            })
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, de, fe));
                                  else
                                    return [
                                      e(q, {
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
                                          e(E, {
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
                              }, O, K)), U(o(ee, { class: "max-h-60 overflow-y-auto" }, {
                                default: t((te, X, de, fe) => {
                                  if (X)
                                    X(o(Y, {
                                      class: "cursor-pointer",
                                      onClick: (ie) => R.value = c.metadata
                                    }, {
                                      default: t((ie, Z, we, ce) => {
                                        if (Z)
                                          Z(`${D(i.$t("Metadata"))}`);
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
                                    }, de, fe));
                                  else
                                    return [
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (ie) => R.value = c.metadata
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
                              }, O, K));
                            else
                              return [
                                e(x, { "as-child": "" }, {
                                  default: t(() => [
                                    e(q, {
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
                                        e(E, {
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
                                  ee,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (te) => R.value = c.metadata
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
                        }, w, Q)), p("</div>");
                      else
                        return [
                          e("div", { class: "flex items-center gap-2 justify-end" }, [
                            e(G, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "POST",
                              fetch: `/api/zbackup/plans/${b.planId}/dumps/${c.id}/restore`,
                              tooltip: i.$t("Restore this dump"),
                              description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                              "toast-on-success": i.$t("Restore started successfully."),
                              onFetched: F
                            }, {
                              default: t(() => [
                                e(E, { name: "TimerReset" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(G, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "DELETE",
                              fetch: `/api/zbackup/plans/${b.planId}/dumps/${c.id}`,
                              tooltip: i.$t("Delete this dump"),
                              description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                              "toast-on-success": i.$t("Dump deleted."),
                              onFetched: F
                            }, {
                              default: t(() => [
                                e(E, { name: "trash" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(
                              ue,
                              null,
                              {
                                default: t(() => [
                                  e(x, { "as-child": "" }, {
                                    default: t(() => [
                                      e(q, {
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
                                          e(E, {
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
                                    ee,
                                    { class: "max-h-60 overflow-y-auto" },
                                    {
                                      default: t(() => [
                                        e(Y, {
                                          class: "cursor-pointer",
                                          onClick: (y) => R.value = c.metadata
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
                  }, S, A));
                else
                  return [
                    R.value ? (me(), pe(he, {
                      key: 0,
                      "model-value": R.value,
                      open: !0,
                      "onUpdate:open": (c) => {
                        c || (R.value = void 0);
                      }
                    }, {
                      default: t(() => [
                        e("div", { class: "hidden" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["model-value", "onUpdate:open"])) : Re("v-if", !0),
                    e($e, {
                      rows: d.value,
                      columns: a(j),
                      loading: l.value,
                      "hide-pagination": ""
                    }, {
                      "row-actions": t(({ row: c }) => [
                        e("div", { class: "flex items-center gap-2 justify-end" }, [
                          e(G, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "POST",
                            fetch: `/api/zbackup/plans/${b.planId}/dumps/${c.id}/restore`,
                            tooltip: i.$t("Restore this dump"),
                            description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                            "toast-on-success": i.$t("Restore started successfully."),
                            onFetched: F
                          }, {
                            default: t(() => [
                              e(E, { name: "TimerReset" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(G, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "DELETE",
                            fetch: `/api/zbackup/plans/${b.planId}/dumps/${c.id}`,
                            tooltip: i.$t("Delete this dump"),
                            description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                            "toast-on-success": i.$t("Dump deleted."),
                            onFetched: F
                          }, {
                            default: t(() => [
                              e(E, { name: "trash" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(
                            ue,
                            null,
                            {
                              default: t(() => [
                                e(x, { "as-child": "" }, {
                                  default: t(() => [
                                    e(q, {
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
                                        e(E, {
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
                                  ee,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (p) => R.value = c.metadata
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
            }, m, v));
          else
            return [
              e(a(B), null, {
                default: t(() => [
                  e("div", { class: "flex items-center justify-between" }, [
                    e("div", null, [
                      e(a(T), null, {
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
                      e(a(L), null, {
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
                      e(G, {
                        variant: "outline",
                        "fetch-method": "POST",
                        fetch: `/api/zbackup/plans/${b.planId}/dumps/cleanup`,
                        tooltip: i.$t("Remove old dumps based on retention settings"),
                        description: i.$t("Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted."),
                        "toast-on-success": i.$t("Cleanup completed."),
                        onFetched: F
                      }, {
                        default: t(() => [
                          e(E, { name: "Eraser" }),
                          s(
                            " " + n(i.$t("Cleanup")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                      e(q, {
                        variant: "outline",
                        onClick: F
                      }, {
                        default: t(() => [
                          e(E, {
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
              e(a(V), null, {
                default: t(() => [
                  R.value ? (me(), pe(he, {
                    key: 0,
                    "model-value": R.value,
                    open: !0,
                    "onUpdate:open": (u) => {
                      u || (R.value = void 0);
                    }
                  }, {
                    default: t(() => [
                      e("div", { class: "hidden" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["model-value", "onUpdate:open"])) : Re("v-if", !0),
                  e($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value,
                    "hide-pagination": ""
                  }, {
                    "row-actions": t(({ row: u }) => [
                      e("div", { class: "flex items-center gap-2 justify-end" }, [
                        e(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${u.id}/restore`,
                          tooltip: i.$t("Restore this dump"),
                          description: i.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: F
                        }, {
                          default: t(() => [
                            e(E, { name: "TimerReset" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/dumps/${u.id}`,
                          tooltip: i.$t("Delete this dump"),
                          description: i.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                          "toast-on-success": i.$t("Dump deleted."),
                          onFetched: F
                        }, {
                          default: t(() => [
                            e(E, { name: "trash" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(
                          ue,
                          null,
                          {
                            default: t(() => [
                              e(x, { "as-child": "" }, {
                                default: t(() => [
                                  e(q, {
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
                                      e(E, {
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
                                ee,
                                { class: "max-h-60 overflow-y-auto" },
                                {
                                  default: t(() => [
                                    e(Y, {
                                      class: "cursor-pointer",
                                      onClick: (h) => R.value = u.metadata
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
      }, g));
    };
  }
}), Ze = ae.setup;
ae.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSnapshots.vue"), Ze ? Ze(b, r) : void 0;
};
const Je = C.setup;
C.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/FormTextField.vue"), Je ? Je(b, r) : void 0;
};
const We = ye.setup;
ye.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/FormSwitch.vue"), We ? We(b, r) : void 0;
};
const Xe = J.setup;
J.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/FormTextarea.vue"), Xe ? Xe(b, r) : void 0;
};
const W = /* @__PURE__ */ oe({
  __name: "PlanDumpSectionDetails",
  __ssrInlineRender: !0,
  setup(b) {
    return (r, d, l, R) => {
      d(o(a(N), R, {
        default: t((I, j, F, i) => {
          if (j)
            j(o(a(B), null, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(a(T), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Plan details"))}`);
                      else
                        return [
                          s(
                            n(r.$t("Plan details")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f)), g(o(a(L), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Edit the name, status and description of this plan."))}`);
                      else
                        return [
                          s(
                            n(r.$t("Edit the name, status and description of this plan.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f));
                else
                  return [
                    e(a(T), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Plan details")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(L), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Edit the name, status and description of this plan.")),
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
            }, F, i)), j(o(a(V), { class: "space-y-6" }, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(C, {
                    name: "name",
                    label: r.$t("Name"),
                    placeholder: r.$t("Enter plan name")
                  }, null, P, f)), g(o(ye, {
                    name: "active",
                    label: r.$t("Active"),
                    hint: r.$t("Activate or deactivate this backup plan")
                  }, null, P, f)), g(o(J, {
                    name: "description",
                    label: r.$t("Description"),
                    placeholder: r.$t("Enter plan description"),
                    hint: r.$t("Optional description for this backup plan")
                  }, null, P, f));
                else
                  return [
                    e(C, {
                      name: "name",
                      label: r.$t("Name"),
                      placeholder: r.$t("Enter plan name")
                    }, null, 8, ["label", "placeholder"]),
                    e(ye, {
                      name: "active",
                      label: r.$t("Active"),
                      hint: r.$t("Activate or deactivate this backup plan")
                    }, null, 8, ["label", "hint"]),
                    e(J, {
                      name: "description",
                      label: r.$t("Description"),
                      placeholder: r.$t("Enter plan description"),
                      hint: r.$t("Optional description for this backup plan")
                    }, null, 8, ["label", "placeholder", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, F, i));
          else
            return [
              e(a(B), null, {
                default: t(() => [
                  e(a(T), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Plan details")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(L), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Edit the name, status and description of this plan.")),
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
              e(a(V), { class: "space-y-6" }, {
                default: t(() => [
                  e(C, {
                    name: "name",
                    label: r.$t("Name"),
                    placeholder: r.$t("Enter plan name")
                  }, null, 8, ["label", "placeholder"]),
                  e(ye, {
                    name: "active",
                    label: r.$t("Active"),
                    hint: r.$t("Activate or deactivate this backup plan")
                  }, null, 8, ["label", "hint"]),
                  e(J, {
                    name: "description",
                    label: r.$t("Description"),
                    placeholder: r.$t("Enter plan description"),
                    hint: r.$t("Optional description for this backup plan")
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
}), _e = W.setup;
W.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionDetails.vue"), _e ? _e(b, r) : void 0;
};
const ne = /* @__PURE__ */ oe({
  __name: "PlanDumpSectionDrive",
  __ssrInlineRender: !0,
  setup(b) {
    return (r, d, l, R) => {
      d(o(a(N), R, {
        default: t((I, j, F, i) => {
          if (j)
            j(o(a(B), null, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(a(T), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Drive"))}`);
                      else
                        return [
                          s(
                            n(r.$t("Drive")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f)), g(o(a(L), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Configure where backups will be stored."))}`);
                      else
                        return [
                          s(
                            n(r.$t("Configure where backups will be stored.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f));
                else
                  return [
                    e(a(T), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Drive")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(L), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Configure where backups will be stored.")),
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
            }, F, i)), j(o(a(V), { class: "space-y-6" }, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(C, {
                    name: "config.drive_id",
                    label: r.$t("Drive ID"),
                    hint: r.$t("The drive where backups will be stored. Must be defined in the configuration file.")
                  }, null, P, f)), g(o(C, {
                    name: "config.drive_prefix",
                    label: r.$t("Drive Prefix"),
                    placeholder: r.$t("backups/my-plan"),
                    hint: r.$t("Directory prefix within the drive where backups will be stored.")
                  }, null, P, f));
                else
                  return [
                    e(C, {
                      name: "config.drive_id",
                      label: r.$t("Drive ID"),
                      hint: r.$t("The drive where backups will be stored. Must be defined in the configuration file.")
                    }, null, 8, ["label", "hint"]),
                    e(C, {
                      name: "config.drive_prefix",
                      label: r.$t("Drive Prefix"),
                      placeholder: r.$t("backups/my-plan"),
                      hint: r.$t("Directory prefix within the drive where backups will be stored.")
                    }, null, 8, ["label", "placeholder", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, F, i));
          else
            return [
              e(a(B), null, {
                default: t(() => [
                  e(a(T), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Drive")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(L), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Configure where backups will be stored.")),
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
              e(a(V), { class: "space-y-6" }, {
                default: t(() => [
                  e(C, {
                    name: "config.drive_id",
                    label: r.$t("Drive ID"),
                    hint: r.$t("The drive where backups will be stored. Must be defined in the configuration file.")
                  }, null, 8, ["label", "hint"]),
                  e(C, {
                    name: "config.drive_prefix",
                    label: r.$t("Drive Prefix"),
                    placeholder: r.$t("backups/my-plan"),
                    hint: r.$t("Directory prefix within the drive where backups will be stored.")
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
}), xe = ne.setup;
ne.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionDrive.vue"), xe ? xe(b, r) : void 0;
};
const ve = /* @__PURE__ */ oe({
  __name: "PlanDumpSectionDocker",
  __ssrInlineRender: !0,
  setup(b) {
    return (r, d, l, R) => {
      d(o(a(N), R, {
        default: t((I, j, F, i) => {
          if (j)
            j(o(a(B), null, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(a(T), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Docker"))}`);
                      else
                        return [
                          s(
                            n(r.$t("Docker")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f)), g(o(a(L), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Configure the Docker image used to run the dump command."))}`);
                      else
                        return [
                          s(
                            n(r.$t("Configure the Docker image used to run the dump command.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f));
                else
                  return [
                    e(a(T), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Docker")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(L), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Configure the Docker image used to run the dump command.")),
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
            }, F, i)), j(o(a(V), { class: "space-y-6" }, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(C, {
                    name: "config.docker_image",
                    label: r.$t("Docker Image"),
                    placeholder: r.$t("postgres:latest"),
                    hint: r.$t("Docker image used to run the dump command.")
                  }, null, P, f));
                else
                  return [
                    e(C, {
                      name: "config.docker_image",
                      label: r.$t("Docker Image"),
                      placeholder: r.$t("postgres:latest"),
                      hint: r.$t("Docker image used to run the dump command.")
                    }, null, 8, ["label", "placeholder", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, F, i));
          else
            return [
              e(a(B), null, {
                default: t(() => [
                  e(a(T), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Docker")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(L), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Configure the Docker image used to run the dump command.")),
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
              e(a(V), { class: "space-y-6" }, {
                default: t(() => [
                  e(C, {
                    name: "config.docker_image",
                    label: r.$t("Docker Image"),
                    placeholder: r.$t("postgres:latest"),
                    hint: r.$t("Docker image used to run the dump command.")
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
}), et = ve.setup;
ve.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionDocker.vue"), et ? et(b, r) : void 0;
};
const se = /* @__PURE__ */ oe({
  __name: "PlanDumpSectionRetention",
  __ssrInlineRender: !0,
  setup(b) {
    return (r, d, l, R) => {
      d(o(a(N), R, {
        default: t((I, j, F, i) => {
          if (j)
            j(o(a(B), null, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(a(T), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Retention"))}`);
                      else
                        return [
                          s(
                            n(r.$t("Retention")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f)), g(o(a(L), null, {
                    default: t(($, m, v, u) => {
                      if (m)
                        m(`${D(r.$t("Control how many backups are kept before older ones are removed."))}`);
                      else
                        return [
                          s(
                            n(r.$t("Control how many backups are kept before older ones are removed.")),
                            1
                            /* TEXT */
                          )
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, P, f));
                else
                  return [
                    e(a(T), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Retention")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(a(L), null, {
                      default: t(() => [
                        s(
                          n(r.$t("Control how many backups are kept before older ones are removed.")),
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
            }, F, i)), j(o(a(V), { class: "space-y-6" }, {
              default: t((M, g, P, f) => {
                if (g)
                  g(o(C, {
                    name: "config.retention_max_items",
                    type: "number",
                    label: r.$t("Max Backups"),
                    hint: r.$t("Maximum number of backups to keep. Older ones will be removed automatically.")
                  }, null, P, f));
                else
                  return [
                    e(C, {
                      name: "config.retention_max_items",
                      type: "number",
                      label: r.$t("Max Backups"),
                      hint: r.$t("Maximum number of backups to keep. Older ones will be removed automatically.")
                    }, null, 8, ["label", "hint"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, F, i));
          else
            return [
              e(a(B), null, {
                default: t(() => [
                  e(a(T), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Retention")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e(a(L), null, {
                    default: t(() => [
                      s(
                        n(r.$t("Control how many backups are kept before older ones are removed.")),
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
              e(a(V), { class: "space-y-6" }, {
                default: t(() => [
                  e(C, {
                    name: "config.retention_max_items",
                    type: "number",
                    label: r.$t("Max Backups"),
                    hint: r.$t("Maximum number of backups to keep. Older ones will be removed automatically.")
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
}), tt = se.setup;
se.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSectionRetention.vue"), tt ? tt(b, r) : void 0;
};
const ze = /* @__PURE__ */ oe({
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
    const r = Pe(b, "plan"), d = Te("tab", "details");
    return (l, R, I, j) => {
      R(o(a(Le), Fe({
        modelValue: a(d),
        "onUpdate:modelValue": (F) => Me(d) ? d.value = F : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((F, i, M, g) => {
          if (i)
            i(o(a(be), null, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(k), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Details"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "connection",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Connection"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Drive"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Docker"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Retention"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "snapshots",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Snapshots"))}`);
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
                  }, $, m));
                else
                  return [
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
            }, M, g)), i(o(a(z), { value: "details" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(W, null, null, $, m));
                else
                  return [
                    e(W)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "connection" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(N), null, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(o(a(B), null, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(a(T), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Connection"))}`);
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
                              }, p, w)), c(o(a(L), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Select the database connection for this backup plan."))}`);
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
                              }, p, w));
                            else
                              return [
                                e(a(T), null, {
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
                                e(a(L), null, {
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
                        }, h, S)), u(o(a(V), { class: "space-y-6" }, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(_, {
                                name: "config.name",
                                fetch: "/api/database-connections",
                                "value-key": "id",
                                "label-key": "name",
                                label: l.$t("Connection Name"),
                                hint: l.$t("Select the database connection to back up")
                              }, null, p, w));
                            else
                              return [
                                e(_, {
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
                        }, h, S));
                      else
                        return [
                          e(a(B), null, {
                            default: t(() => [
                              e(a(T), null, {
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
                              e(a(L), null, {
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
                          e(a(V), { class: "space-y-6" }, {
                            default: t(() => [
                              e(_, {
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
                  }, $, m));
                else
                  return [
                    e(a(N), null, {
                      default: t(() => [
                        e(a(B), null, {
                          default: t(() => [
                            e(a(T), null, {
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
                            e(a(L), null, {
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
                        e(a(V), { class: "space-y-6" }, {
                          default: t(() => [
                            e(_, {
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
            }, M, g)), i(o(a(z), { value: "drive" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ne, null, null, $, m));
                else
                  return [
                    e(ne)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "docker" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ve, null, null, $, m));
                else
                  return [
                    e(ve)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "retention" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(se, null, null, $, m));
                else
                  return [
                    e(se)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "snapshots" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ae, {
                    "plan-id": r.value.id
                  }, null, $, m));
                else
                  return [
                    e(ae, {
                      "plan-id": r.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
              e(a(z), { value: "details" }, {
                default: t(() => [
                  e(W)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "connection" }, {
                default: t(() => [
                  e(a(N), null, {
                    default: t(() => [
                      e(a(B), null, {
                        default: t(() => [
                          e(a(T), null, {
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
                          e(a(L), null, {
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
                      e(a(V), { class: "space-y-6" }, {
                        default: t(() => [
                          e(_, {
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
              e(a(z), { value: "drive" }, {
                default: t(() => [
                  e(ne)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "docker" }, {
                default: t(() => [
                  e(ve)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "retention" }, {
                default: t(() => [
                  e(se)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "snapshots" }, {
                default: t(() => [
                  e(ae, {
                    "plan-id": r.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, I));
    };
  }
}), lt = ze.setup;
ze.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpConnectionForm.vue"), lt ? lt(b, r) : void 0;
};
const Qe = /* @__PURE__ */ oe({
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
    const r = Pe(b, "plan"), d = Te("tab", "details");
    return (l, R, I, j) => {
      R(o(a(Le), Fe({
        modelValue: a(d),
        "onUpdate:modelValue": (F) => Me(d) ? d.value = F : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((F, i, M, g) => {
          if (i)
            i(o(a(be), null, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(k), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Details"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "database",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Database"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Drive"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Retention"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "dumps",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Dumps"))}`);
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
                  }, $, m));
                else
                  return [
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
            }, M, g)), i(o(a(z), { value: "details" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(W, null, null, $, m));
                else
                  return [
                    e(W)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "database" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(N), null, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(o(a(B), null, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(a(T), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Database"))}`);
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
                              }, p, w)), c(o(a(L), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Configure the SQLite database file to back up."))}`);
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
                              }, p, w));
                            else
                              return [
                                e(a(T), null, {
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
                                e(a(L), null, {
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
                        }, h, S)), u(o(a(V), { class: "space-y-6" }, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(C, {
                                name: "config.sqlite_filename",
                                label: l.$t("Database File Path"),
                                placeholder: l.$t("/var/data/app.sqlite"),
                                hint: l.$t("Absolute path to the SQLite database file on the host machine.")
                              }, null, p, w));
                            else
                              return [
                                e(C, {
                                  name: "config.sqlite_filename",
                                  label: l.$t("Database File Path"),
                                  placeholder: l.$t("/var/data/app.sqlite"),
                                  hint: l.$t("Absolute path to the SQLite database file on the host machine.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, S));
                      else
                        return [
                          e(a(B), null, {
                            default: t(() => [
                              e(a(T), null, {
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
                              e(a(L), null, {
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
                          e(a(V), { class: "space-y-6" }, {
                            default: t(() => [
                              e(C, {
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
                  }, $, m));
                else
                  return [
                    e(a(N), null, {
                      default: t(() => [
                        e(a(B), null, {
                          default: t(() => [
                            e(a(T), null, {
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
                            e(a(L), null, {
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
                        e(a(V), { class: "space-y-6" }, {
                          default: t(() => [
                            e(C, {
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
            }, M, g)), i(o(a(z), { value: "drive" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ne, null, null, $, m));
                else
                  return [
                    e(ne)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "retention" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(se, null, null, $, m));
                else
                  return [
                    e(se)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "dumps" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ae, {
                    "plan-id": r.value.id
                  }, null, $, m));
                else
                  return [
                    e(ae, {
                      "plan-id": r.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
              e(a(z), { value: "details" }, {
                default: t(() => [
                  e(W)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "database" }, {
                default: t(() => [
                  e(a(N), null, {
                    default: t(() => [
                      e(a(B), null, {
                        default: t(() => [
                          e(a(T), null, {
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
                          e(a(L), null, {
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
                      e(a(V), { class: "space-y-6" }, {
                        default: t(() => [
                          e(C, {
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
              e(a(z), { value: "drive" }, {
                default: t(() => [
                  e(ne)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "retention" }, {
                default: t(() => [
                  e(se)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "dumps" }, {
                default: t(() => [
                  e(ae, {
                    "plan-id": r.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, I));
    };
  }
}), at = Qe.setup;
Qe.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpSQLiteForm.vue"), at ? at(b, r) : void 0;
};
const Be = /* @__PURE__ */ oe({
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
    const r = Pe(b, "plan"), d = Te("tab", "details");
    return (l, R, I, j) => {
      R(o(a(Le), Fe({
        modelValue: a(d),
        "onUpdate:modelValue": (F) => Me(d) ? d.value = F : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((F, i, M, g) => {
          if (i)
            i(o(a(be), null, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(k), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Details"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "connection",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Connection"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "drive",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Drive"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Docker"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "retention",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Retention"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "dumps",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Dumps"))}`);
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
                  }, $, m));
                else
                  return [
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
            }, M, g)), i(o(a(z), { value: "details" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(W, null, null, $, m));
                else
                  return [
                    e(W)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "connection" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(N), null, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(o(a(B), null, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(a(T), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Connection"))}`);
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
                              }, p, w)), c(o(a(L), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Configure the PostgreSQL database connection settings."))}`);
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
                              }, p, w));
                            else
                              return [
                                e(a(T), null, {
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
                                e(a(L), null, {
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
                        }, h, S)), u(o(a(V), { class: "space-y-6" }, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(C, {
                                name: "config.postgres_host",
                                label: l.$t("Host"),
                                placeholder: l.$t("localhost"),
                                hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                              }, null, p, w)), c(o(C, {
                                name: "config.postgres_port",
                                type: "number",
                                label: l.$t("Port"),
                                placeholder: l.$t("5432"),
                                hint: l.$t("Port number of the PostgreSQL server.")
                              }, null, p, w)), c(o(C, {
                                name: "config.postgres_username",
                                label: l.$t("Username"),
                                placeholder: l.$t("postgres"),
                                hint: l.$t("PostgreSQL user with read access to the target database.")
                              }, null, p, w)), c(o(C, {
                                name: "config.postgres_password",
                                type: "password",
                                label: l.$t("Password"),
                                hint: l.$t("Password for the PostgreSQL user.")
                              }, null, p, w)), c(o(C, {
                                name: "config.postgres_database",
                                label: l.$t("Database"),
                                placeholder: l.$t("postgres"),
                                hint: l.$t("Name of the database to back up.")
                              }, null, p, w));
                            else
                              return [
                                e(C, {
                                  name: "config.postgres_host",
                                  label: l.$t("Host"),
                                  placeholder: l.$t("localhost"),
                                  hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(C, {
                                  name: "config.postgres_port",
                                  type: "number",
                                  label: l.$t("Port"),
                                  placeholder: l.$t("5432"),
                                  hint: l.$t("Port number of the PostgreSQL server.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(C, {
                                  name: "config.postgres_username",
                                  label: l.$t("Username"),
                                  placeholder: l.$t("postgres"),
                                  hint: l.$t("PostgreSQL user with read access to the target database.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(C, {
                                  name: "config.postgres_password",
                                  type: "password",
                                  label: l.$t("Password"),
                                  hint: l.$t("Password for the PostgreSQL user.")
                                }, null, 8, ["label", "hint"]),
                                e(C, {
                                  name: "config.postgres_database",
                                  label: l.$t("Database"),
                                  placeholder: l.$t("postgres"),
                                  hint: l.$t("Name of the database to back up.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, S));
                      else
                        return [
                          e(a(B), null, {
                            default: t(() => [
                              e(a(T), null, {
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
                              e(a(L), null, {
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
                          e(a(V), { class: "space-y-6" }, {
                            default: t(() => [
                              e(C, {
                                name: "config.postgres_host",
                                label: l.$t("Host"),
                                placeholder: l.$t("localhost"),
                                hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(C, {
                                name: "config.postgres_port",
                                type: "number",
                                label: l.$t("Port"),
                                placeholder: l.$t("5432"),
                                hint: l.$t("Port number of the PostgreSQL server.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(C, {
                                name: "config.postgres_username",
                                label: l.$t("Username"),
                                placeholder: l.$t("postgres"),
                                hint: l.$t("PostgreSQL user with read access to the target database.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(C, {
                                name: "config.postgres_password",
                                type: "password",
                                label: l.$t("Password"),
                                hint: l.$t("Password for the PostgreSQL user.")
                              }, null, 8, ["label", "hint"]),
                              e(C, {
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
                  }, $, m));
                else
                  return [
                    e(a(N), null, {
                      default: t(() => [
                        e(a(B), null, {
                          default: t(() => [
                            e(a(T), null, {
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
                            e(a(L), null, {
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
                        e(a(V), { class: "space-y-6" }, {
                          default: t(() => [
                            e(C, {
                              name: "config.postgres_host",
                              label: l.$t("Host"),
                              placeholder: l.$t("localhost"),
                              hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(C, {
                              name: "config.postgres_port",
                              type: "number",
                              label: l.$t("Port"),
                              placeholder: l.$t("5432"),
                              hint: l.$t("Port number of the PostgreSQL server.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(C, {
                              name: "config.postgres_username",
                              label: l.$t("Username"),
                              placeholder: l.$t("postgres"),
                              hint: l.$t("PostgreSQL user with read access to the target database.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(C, {
                              name: "config.postgres_password",
                              type: "password",
                              label: l.$t("Password"),
                              hint: l.$t("Password for the PostgreSQL user.")
                            }, null, 8, ["label", "hint"]),
                            e(C, {
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
            }, M, g)), i(o(a(z), { value: "drive" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ne, null, null, $, m));
                else
                  return [
                    e(ne)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "docker" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ve, null, null, $, m));
                else
                  return [
                    e(ve)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "retention" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(se, null, null, $, m));
                else
                  return [
                    e(se)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "dumps" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ae, {
                    "plan-id": r.value.id
                  }, null, $, m));
                else
                  return [
                    e(ae, {
                      "plan-id": r.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
              e(a(z), { value: "details" }, {
                default: t(() => [
                  e(W)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "connection" }, {
                default: t(() => [
                  e(a(N), null, {
                    default: t(() => [
                      e(a(B), null, {
                        default: t(() => [
                          e(a(T), null, {
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
                          e(a(L), null, {
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
                      e(a(V), { class: "space-y-6" }, {
                        default: t(() => [
                          e(C, {
                            name: "config.postgres_host",
                            label: l.$t("Host"),
                            placeholder: l.$t("localhost"),
                            hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(C, {
                            name: "config.postgres_port",
                            type: "number",
                            label: l.$t("Port"),
                            placeholder: l.$t("5432"),
                            hint: l.$t("Port number of the PostgreSQL server.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(C, {
                            name: "config.postgres_username",
                            label: l.$t("Username"),
                            placeholder: l.$t("postgres"),
                            hint: l.$t("PostgreSQL user with read access to the target database.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(C, {
                            name: "config.postgres_password",
                            type: "password",
                            label: l.$t("Password"),
                            hint: l.$t("Password for the PostgreSQL user.")
                          }, null, 8, ["label", "hint"]),
                          e(C, {
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
              e(a(z), { value: "drive" }, {
                default: t(() => [
                  e(ne)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "docker" }, {
                default: t(() => [
                  e(ve)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "retention" }, {
                default: t(() => [
                  e(se)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "dumps" }, {
                default: t(() => [
                  e(ae, {
                    "plan-id": r.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, I));
    };
  }
}), nt = Be.setup;
Be.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanDumpPostgresForm.vue"), nt ? nt(b, r) : void 0;
};
const st = ge.setup;
ge.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/FormStringListInput.vue"), st ? st(b, r) : void 0;
};
const ke = /* @__PURE__ */ oe({
  inheritAttrs: !1,
  __name: "PlanResticSnapshots",
  __ssrInlineRender: !0,
  props: {
    planId: {}
  },
  setup(b) {
    const r = b, d = re([]), l = re(!1), R = re();
    function I(i) {
      if (!i) return "0 B";
      const M = Math.floor(Math.log(i) / Math.log(1024)), g = ["B", "KB", "MB", "GB", "TB"];
      return (i / Math.pow(1024, M)).toFixed(2) + " " + g[M];
    }
    const j = ut([
      {
        id: "id",
        label: $t("Snapshot ID"),
        field: "id"
      },
      {
        id: "size",
        label: $t("Size"),
        field: (i) => I(i.metadata.size)
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (i) => i.created_at ? wt(new Date(i.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
      },
      { id: "actions" }
    ]);
    async function F() {
      l.value = !0;
      const [i, M] = await dt.try(
        `/api/zbackup/plans/${r.planId}/restic`,
        { method: "GET" }
      );
      if (i) {
        l.value = !1;
        return;
      }
      d.value = M.items || [], await new Promise((g) => setTimeout(g, 300)), l.value = !1;
    }
    return Ae(F), (i, M, g, P) => {
      M(o(a(N), P, {
        default: t((f, $, m, v) => {
          if ($)
            $(o(a(B), null, {
              default: t((u, h, S, A) => {
                if (h)
                  h(`<div class="flex items-center justify-between"${A}><div${A}>`), h(o(a(T), null, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(`${D(i.$t("Snapshots"))}`);
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
                  }, S, A)), h(o(a(L), null, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(`${D(i.$t("View and manage Restic snapshots for this plan."))}`);
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
                  }, S, A)), h(`</div><div class="flex items-center gap-2"${A}>`), h(o(q, {
                    variant: "outline",
                    onClick: F
                  }, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(o(E, {
                          name: "refreshCw",
                          class: { "animate-spin": l.value }
                        }, null, w, Q));
                      else
                        return [
                          e(E, {
                            name: "refreshCw",
                            class: { "animate-spin": l.value }
                          }, null, 8, ["class"])
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, S, A)), h("</div></div>");
                else
                  return [
                    e("div", { class: "flex items-center justify-between" }, [
                      e("div", null, [
                        e(a(T), null, {
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
                        e(a(L), null, {
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
                        e(q, {
                          variant: "outline",
                          onClick: F
                        }, {
                          default: t(() => [
                            e(E, {
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
            }, m, v)), $(o(a(V), null, {
              default: t((u, h, S, A) => {
                if (h)
                  R.value ? h(o(he, {
                    "model-value": R.value,
                    open: !0,
                    "onUpdate:open": (c) => {
                      c || (R.value = void 0);
                    }
                  }, {
                    default: t((c, p, w, Q) => {
                      if (p)
                        p(`<div class="hidden"${Q}></div>`);
                      else
                        return [
                          e("div", { class: "hidden" })
                        ];
                    }),
                    _: 1
                    /* STABLE */
                  }, S, A)) : h("<!---->"), h(o($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value
                  }, {
                    "row-actions": t(({ row: c }, p, w, Q) => {
                      if (p)
                        p(`<div class="flex items-center gap-2 justify-end"${Q}>`), p(o(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${c.id}/restore`,
                          tooltip: i.$t("Restore this snapshot"),
                          description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: F
                        }, {
                          default: t((y, U, O, K) => {
                            if (U)
                              U(o(E, { name: "TimerReset" }, null, O, K));
                            else
                              return [
                                e(E, { name: "TimerReset" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, w, Q)), p(o(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${c.id}`,
                          tooltip: i.$t("Delete this snapshot"),
                          description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Snapshot deleted."),
                          onFetched: F
                        }, {
                          default: t((y, U, O, K) => {
                            if (U)
                              U(o(E, { name: "trash" }, null, O, K));
                            else
                              return [
                                e(E, { name: "trash" })
                              ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, w, Q)), p(o(ue, null, {
                          default: t((y, U, O, K) => {
                            if (U)
                              U(o(x, { "as-child": "" }, {
                                default: t((te, X, de, fe) => {
                                  if (X)
                                    X(o(q, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: t((ie, Z, we, ce) => {
                                        if (Z)
                                          Z(`<span class="sr-only"${ce}>${D(i.$t("More"))}</span>`), Z(o(E, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          }, null, we, ce));
                                        else
                                          return [
                                            e(
                                              "span",
                                              { class: "sr-only" },
                                              n(i.$t("More")),
                                              1
                                              /* TEXT */
                                            ),
                                            e(E, {
                                              name: "MoreVertical",
                                              class: "w-3 h-3 sm:w-4 sm:h-4"
                                            })
                                          ];
                                      }),
                                      _: 2
                                      /* DYNAMIC */
                                    }, de, fe));
                                  else
                                    return [
                                      e(q, {
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
                                          e(E, {
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
                              }, O, K)), U(o(ee, { class: "max-h-60 overflow-y-auto" }, {
                                default: t((te, X, de, fe) => {
                                  if (X)
                                    X(o(Y, {
                                      class: "cursor-pointer",
                                      onClick: (ie) => R.value = c.metadata
                                    }, {
                                      default: t((ie, Z, we, ce) => {
                                        if (Z)
                                          Z(`${D(i.$t("Metadata"))}`);
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
                                    }, de, fe)), X(o(Y, {
                                      class: "cursor-pointer",
                                      onClick: (ie) => R.value = c.data
                                    }, {
                                      default: t((ie, Z, we, ce) => {
                                        if (Z)
                                          Z(`${D(i.$t("Raw Data"))}`);
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
                                    }, de, fe));
                                  else
                                    return [
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (ie) => R.value = c.metadata
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
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (ie) => R.value = c.data
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
                              }, O, K));
                            else
                              return [
                                e(x, { "as-child": "" }, {
                                  default: t(() => [
                                    e(q, {
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
                                        e(E, {
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
                                  ee,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (te) => R.value = c.metadata
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
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (te) => R.value = c.data
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
                        }, w, Q)), p("</div>");
                      else
                        return [
                          e("div", { class: "flex items-center gap-2 justify-end" }, [
                            e(G, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "POST",
                              fetch: `/api/zbackup/plans/${b.planId}/restic/${c.id}/restore`,
                              tooltip: i.$t("Restore this snapshot"),
                              description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                              "toast-on-success": i.$t("Restore started successfully."),
                              onFetched: F
                            }, {
                              default: t(() => [
                                e(E, { name: "TimerReset" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(G, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "DELETE",
                              fetch: `/api/zbackup/plans/${b.planId}/restic/${c.id}`,
                              tooltip: i.$t("Delete this snapshot"),
                              description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                              "toast-on-success": i.$t("Snapshot deleted."),
                              onFetched: F
                            }, {
                              default: t(() => [
                                e(E, { name: "trash" })
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            e(
                              ue,
                              null,
                              {
                                default: t(() => [
                                  e(x, { "as-child": "" }, {
                                    default: t(() => [
                                      e(q, {
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
                                          e(E, {
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
                                    ee,
                                    { class: "max-h-60 overflow-y-auto" },
                                    {
                                      default: t(() => [
                                        e(Y, {
                                          class: "cursor-pointer",
                                          onClick: (y) => R.value = c.metadata
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
                                        e(Y, {
                                          class: "cursor-pointer",
                                          onClick: (y) => R.value = c.data
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
                  }, S, A));
                else
                  return [
                    R.value ? (me(), pe(he, {
                      key: 0,
                      "model-value": R.value,
                      open: !0,
                      "onUpdate:open": (c) => {
                        c || (R.value = void 0);
                      }
                    }, {
                      default: t(() => [
                        e("div", { class: "hidden" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["model-value", "onUpdate:open"])) : Re("v-if", !0),
                    e($e, {
                      rows: d.value,
                      columns: a(j),
                      loading: l.value
                    }, {
                      "row-actions": t(({ row: c }) => [
                        e("div", { class: "flex items-center gap-2 justify-end" }, [
                          e(G, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "POST",
                            fetch: `/api/zbackup/plans/${b.planId}/restic/${c.id}/restore`,
                            tooltip: i.$t("Restore this snapshot"),
                            description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                            "toast-on-success": i.$t("Restore started successfully."),
                            onFetched: F
                          }, {
                            default: t(() => [
                              e(E, { name: "TimerReset" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(G, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "DELETE",
                            fetch: `/api/zbackup/plans/${b.planId}/restic/${c.id}`,
                            tooltip: i.$t("Delete this snapshot"),
                            description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                            "toast-on-success": i.$t("Snapshot deleted."),
                            onFetched: F
                          }, {
                            default: t(() => [
                              e(E, { name: "trash" })
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          e(
                            ue,
                            null,
                            {
                              default: t(() => [
                                e(x, { "as-child": "" }, {
                                  default: t(() => [
                                    e(q, {
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
                                        e(E, {
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
                                  ee,
                                  { class: "max-h-60 overflow-y-auto" },
                                  {
                                    default: t(() => [
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (p) => R.value = c.metadata
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
                                      e(Y, {
                                        class: "cursor-pointer",
                                        onClick: (p) => R.value = c.data
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
            }, m, v));
          else
            return [
              e(a(B), null, {
                default: t(() => [
                  e("div", { class: "flex items-center justify-between" }, [
                    e("div", null, [
                      e(a(T), null, {
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
                      e(a(L), null, {
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
                      e(q, {
                        variant: "outline",
                        onClick: F
                      }, {
                        default: t(() => [
                          e(E, {
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
              e(a(V), null, {
                default: t(() => [
                  R.value ? (me(), pe(he, {
                    key: 0,
                    "model-value": R.value,
                    open: !0,
                    "onUpdate:open": (u) => {
                      u || (R.value = void 0);
                    }
                  }, {
                    default: t(() => [
                      e("div", { class: "hidden" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["model-value", "onUpdate:open"])) : Re("v-if", !0),
                  e($e, {
                    rows: d.value,
                    columns: a(j),
                    loading: l.value
                  }, {
                    "row-actions": t(({ row: u }) => [
                      e("div", { class: "flex items-center gap-2 justify-end" }, [
                        e(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${u.id}/restore`,
                          tooltip: i.$t("Restore this snapshot"),
                          description: i.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Restore started successfully."),
                          onFetched: F
                        }, {
                          default: t(() => [
                            e(E, { name: "TimerReset" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(G, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${b.planId}/restic/${u.id}`,
                          tooltip: i.$t("Delete this snapshot"),
                          description: i.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                          "toast-on-success": i.$t("Snapshot deleted."),
                          onFetched: F
                        }, {
                          default: t(() => [
                            e(E, { name: "trash" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        e(
                          ue,
                          null,
                          {
                            default: t(() => [
                              e(x, { "as-child": "" }, {
                                default: t(() => [
                                  e(q, {
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
                                      e(E, {
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
                                ee,
                                { class: "max-h-60 overflow-y-auto" },
                                {
                                  default: t(() => [
                                    e(Y, {
                                      class: "cursor-pointer",
                                      onClick: (h) => R.value = u.metadata
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
                                    e(Y, {
                                      class: "cursor-pointer",
                                      onClick: (h) => R.value = u.data
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
      }, g));
    };
  }
}), ot = ke.setup;
ke.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanResticSnapshots.vue"), ot ? ot(b, r) : void 0;
};
const Ve = /* @__PURE__ */ oe({
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
    const r = Pe(b, "plan"), d = Te("tab", "details");
    return (l, R, I, j) => {
      R(o(a(Le), Fe({
        modelValue: a(d),
        "onUpdate:modelValue": (F) => Me(d) ? d.value = F : null,
        class: "w-full",
        "unmount-on-hide": !1
      }, j), {
        default: t((F, i, M, g) => {
          if (i)
            i(o(a(be), null, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(k), {
                    value: "details",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Details"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "repository",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Repository"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "backup",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Backup"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "cleanup",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Cleanup"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "docker",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Docker"))}`);
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
                  }, $, m)), f(o(a(k), {
                    value: "snapshots",
                    class: "min-w-60"
                  }, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(`${D(l.$t("Snapshots"))}`);
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
                  }, $, m));
                else
                  return [
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
                    e(a(k), {
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
            }, M, g)), i(o(a(z), { value: "details" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(W, null, null, $, m));
                else
                  return [
                    e(W)
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g)), i(o(a(z), { value: "repository" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(N), null, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(o(a(B), null, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(a(T), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Repository Configuration"))}`);
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
                              }, p, w)), c(o(a(L), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Settings related to the Restic repository where backups will be stored."))}`);
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
                              }, p, w));
                            else
                              return [
                                e(a(T), null, {
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
                                e(a(L), null, {
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
                        }, h, S)), u(o(a(V), { class: "space-y-6" }, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(C, {
                                name: "config.restic_repository",
                                label: l.$t("Repository"),
                                placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                                hint: l.$t("File path or URL to the Restic repository.")
                              }, null, p, w)), c(o(C, {
                                name: "config.restic_password",
                                type: "password",
                                label: l.$t("Repository Password"),
                                hint: l.$t("Password for encrypting/decrypting the Restic repository.")
                              }, null, p, w));
                            else
                              return [
                                e(C, {
                                  name: "config.restic_repository",
                                  label: l.$t("Repository"),
                                  placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                                  hint: l.$t("File path or URL to the Restic repository.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(C, {
                                  name: "config.restic_password",
                                  type: "password",
                                  label: l.$t("Repository Password"),
                                  hint: l.$t("Password for encrypting/decrypting the Restic repository.")
                                }, null, 8, ["label", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, S));
                      else
                        return [
                          e(a(B), null, {
                            default: t(() => [
                              e(a(T), null, {
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
                              e(a(L), null, {
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
                          e(a(V), { class: "space-y-6" }, {
                            default: t(() => [
                              e(C, {
                                name: "config.restic_repository",
                                label: l.$t("Repository"),
                                placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                                hint: l.$t("File path or URL to the Restic repository.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(C, {
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
                  }, $, m));
                else
                  return [
                    e(a(N), null, {
                      default: t(() => [
                        e(a(B), null, {
                          default: t(() => [
                            e(a(T), null, {
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
                            e(a(L), null, {
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
                        e(a(V), { class: "space-y-6" }, {
                          default: t(() => [
                            e(C, {
                              name: "config.restic_repository",
                              label: l.$t("Repository"),
                              placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                              hint: l.$t("File path or URL to the Restic repository.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(C, {
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
            }, M, g)), i(o(a(z), { value: "backup" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(N), null, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(o(a(B), null, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(a(T), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Backup"))}`);
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
                              }, p, w)), c(o(a(L), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Settings related to the files and directories to be backed up."))}`);
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
                              }, p, w));
                            else
                              return [
                                e(a(T), null, {
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
                                e(a(L), null, {
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
                        }, h, S)), u(o(a(V), { class: "space-y-6" }, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(ge, {
                                name: "config.source_paths",
                                label: l.$t("Paths"),
                                placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                                hint: l.$t("List of file and directory paths to include in the backup.")
                              }, null, p, w)), c(o(J, {
                                name: "config.backup_flags",
                                label: l.$t("Backup Flags"),
                                placeholder: l.$t("--exclude /path/to/exclude"),
                                hint: l.$t("Additional Restic backup command flags, one per line.")
                              }, null, p, w));
                            else
                              return [
                                e(ge, {
                                  name: "config.source_paths",
                                  label: l.$t("Paths"),
                                  placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                                  hint: l.$t("List of file and directory paths to include in the backup.")
                                }, null, 8, ["label", "placeholder", "hint"]),
                                e(J, {
                                  name: "config.backup_flags",
                                  label: l.$t("Backup Flags"),
                                  placeholder: l.$t("--exclude /path/to/exclude"),
                                  hint: l.$t("Additional Restic backup command flags, one per line.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, S));
                      else
                        return [
                          e(a(B), null, {
                            default: t(() => [
                              e(a(T), null, {
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
                              e(a(L), null, {
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
                          e(a(V), { class: "space-y-6" }, {
                            default: t(() => [
                              e(ge, {
                                name: "config.source_paths",
                                label: l.$t("Paths"),
                                placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                                hint: l.$t("List of file and directory paths to include in the backup.")
                              }, null, 8, ["label", "placeholder", "hint"]),
                              e(J, {
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
                  }, $, m));
                else
                  return [
                    e(a(N), null, {
                      default: t(() => [
                        e(a(B), null, {
                          default: t(() => [
                            e(a(T), null, {
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
                            e(a(L), null, {
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
                        e(a(V), { class: "space-y-6" }, {
                          default: t(() => [
                            e(ge, {
                              name: "config.source_paths",
                              label: l.$t("Paths"),
                              placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                              hint: l.$t("List of file and directory paths to include in the backup.")
                            }, null, 8, ["label", "placeholder", "hint"]),
                            e(J, {
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
            }, M, g)), i(o(a(z), { value: "cleanup" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(N), null, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(o(a(B), null, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(a(T), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Cleanup"))}`);
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
                              }, p, w)), c(o(a(L), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Settings related to automatic cleanup of old snapshots."))}`);
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
                              }, p, w));
                            else
                              return [
                                e(a(T), null, {
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
                                e(a(L), null, {
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
                        }, h, S)), u(o(a(V), { class: "space-y-6" }, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(_, {
                                name: "config.forget_enabled",
                                label: l.$t("Enable Forget"),
                                hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                                clearable: !0,
                                options: [
                                  { value: !0, label: l.$t("Yes") },
                                  { value: !1, label: l.$t("No") }
                                ]
                              }, null, p, w)), c(o(J, {
                                name: "config.forget_flags",
                                label: l.$t("Forget Flags"),
                                placeholder: l.$t("--keep-daily 7 --keep-weekly 4"),
                                hint: l.$t("Restic forget command flags for controlling snapshot retention.")
                              }, null, p, w));
                            else
                              return [
                                e(_, {
                                  name: "config.forget_enabled",
                                  label: l.$t("Enable Forget"),
                                  hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                                  clearable: !0,
                                  options: [
                                    { value: !0, label: l.$t("Yes") },
                                    { value: !1, label: l.$t("No") }
                                  ]
                                }, null, 8, ["label", "hint", "options"]),
                                e(J, {
                                  name: "config.forget_flags",
                                  label: l.$t("Forget Flags"),
                                  placeholder: l.$t("--keep-daily 7 --keep-weekly 4"),
                                  hint: l.$t("Restic forget command flags for controlling snapshot retention.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, S));
                      else
                        return [
                          e(a(B), null, {
                            default: t(() => [
                              e(a(T), null, {
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
                              e(a(L), null, {
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
                          e(a(V), { class: "space-y-6" }, {
                            default: t(() => [
                              e(_, {
                                name: "config.forget_enabled",
                                label: l.$t("Enable Forget"),
                                hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                                clearable: !0,
                                options: [
                                  { value: !0, label: l.$t("Yes") },
                                  { value: !1, label: l.$t("No") }
                                ]
                              }, null, 8, ["label", "hint", "options"]),
                              e(J, {
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
                  }, $, m));
                else
                  return [
                    e(a(N), null, {
                      default: t(() => [
                        e(a(B), null, {
                          default: t(() => [
                            e(a(T), null, {
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
                            e(a(L), null, {
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
                        e(a(V), { class: "space-y-6" }, {
                          default: t(() => [
                            e(_, {
                              name: "config.forget_enabled",
                              label: l.$t("Enable Forget"),
                              hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                              clearable: !0,
                              options: [
                                { value: !0, label: l.$t("Yes") },
                                { value: !1, label: l.$t("No") }
                              ]
                            }, null, 8, ["label", "hint", "options"]),
                            e(J, {
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
            }, M, g)), i(o(a(z), { value: "docker" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(a(N), null, {
                    default: t((v, u, h, S) => {
                      if (u)
                        u(o(a(B), null, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(a(T), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Docker"))}`);
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
                              }, p, w)), c(o(a(L), null, {
                                default: t((Q, y, U, O) => {
                                  if (y)
                                    y(`${D(l.$t("Configure the Docker image used to run Restic commands."))}`);
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
                              }, p, w));
                            else
                              return [
                                e(a(T), null, {
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
                                e(a(L), null, {
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
                        }, h, S)), u(o(a(V), { class: "space-y-6" }, {
                          default: t((A, c, p, w) => {
                            if (c)
                              c(o(C, {
                                name: "config.docker_image",
                                label: l.$t("Docker Image"),
                                placeholder: l.$t("restic/restic:latest"),
                                hint: l.$t("Docker image used to run Restic commands. Defaults to restic/restic:latest.")
                              }, null, p, w));
                            else
                              return [
                                e(C, {
                                  name: "config.docker_image",
                                  label: l.$t("Docker Image"),
                                  placeholder: l.$t("restic/restic:latest"),
                                  hint: l.$t("Docker image used to run Restic commands. Defaults to restic/restic:latest.")
                                }, null, 8, ["label", "placeholder", "hint"])
                              ];
                          }),
                          _: 1
                          /* STABLE */
                        }, h, S));
                      else
                        return [
                          e(a(B), null, {
                            default: t(() => [
                              e(a(T), null, {
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
                              e(a(L), null, {
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
                          e(a(V), { class: "space-y-6" }, {
                            default: t(() => [
                              e(C, {
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
                  }, $, m));
                else
                  return [
                    e(a(N), null, {
                      default: t(() => [
                        e(a(B), null, {
                          default: t(() => [
                            e(a(T), null, {
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
                            e(a(L), null, {
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
                        e(a(V), { class: "space-y-6" }, {
                          default: t(() => [
                            e(C, {
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
            }, M, g)), i(o(a(z), { value: "snapshots" }, {
              default: t((P, f, $, m) => {
                if (f)
                  f(o(ke, {
                    "plan-id": r.value.id
                  }, null, $, m));
                else
                  return [
                    e(ke, {
                      "plan-id": r.value.id
                    }, null, 8, ["plan-id"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, M, g));
          else
            return [
              e(a(be), null, {
                default: t(() => [
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
                  e(a(k), {
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
              e(a(z), { value: "details" }, {
                default: t(() => [
                  e(W)
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(z), { value: "repository" }, {
                default: t(() => [
                  e(a(N), null, {
                    default: t(() => [
                      e(a(B), null, {
                        default: t(() => [
                          e(a(T), null, {
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
                          e(a(L), null, {
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
                      e(a(V), { class: "space-y-6" }, {
                        default: t(() => [
                          e(C, {
                            name: "config.restic_repository",
                            label: l.$t("Repository"),
                            placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                            hint: l.$t("File path or URL to the Restic repository.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(C, {
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
              e(a(z), { value: "backup" }, {
                default: t(() => [
                  e(a(N), null, {
                    default: t(() => [
                      e(a(B), null, {
                        default: t(() => [
                          e(a(T), null, {
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
                          e(a(L), null, {
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
                      e(a(V), { class: "space-y-6" }, {
                        default: t(() => [
                          e(ge, {
                            name: "config.source_paths",
                            label: l.$t("Paths"),
                            placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                            hint: l.$t("List of file and directory paths to include in the backup.")
                          }, null, 8, ["label", "placeholder", "hint"]),
                          e(J, {
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
              e(a(z), { value: "cleanup" }, {
                default: t(() => [
                  e(a(N), null, {
                    default: t(() => [
                      e(a(B), null, {
                        default: t(() => [
                          e(a(T), null, {
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
                          e(a(L), null, {
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
                      e(a(V), { class: "space-y-6" }, {
                        default: t(() => [
                          e(_, {
                            name: "config.forget_enabled",
                            label: l.$t("Enable Forget"),
                            hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                            clearable: !0,
                            options: [
                              { value: !0, label: l.$t("Yes") },
                              { value: !1, label: l.$t("No") }
                            ]
                          }, null, 8, ["label", "hint", "options"]),
                          e(J, {
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
              e(a(z), { value: "docker" }, {
                default: t(() => [
                  e(a(N), null, {
                    default: t(() => [
                      e(a(B), null, {
                        default: t(() => [
                          e(a(T), null, {
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
                          e(a(L), null, {
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
                      e(a(V), { class: "space-y-6" }, {
                        default: t(() => [
                          e(C, {
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
              e(a(z), { value: "snapshots" }, {
                default: t(() => [
                  e(ke, {
                    "plan-id": r.value.id
                  }, null, 8, ["plan-id"])
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, I));
    };
  }
}), it = Ve.setup;
Ve.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/components/PlanResticForm.vue"), it ? it(b, r) : void 0;
};
const ft = /* @__PURE__ */ oe({
  __name: "[id]",
  __ssrInlineRender: !0,
  setup(b) {
    const r = ct(() => String(ht.params.id)), d = re(), l = re(!1), R = re(!1), I = re(!1), j = le.partial(le.object({
      name: le.string(),
      description: le.optional(le.string(), ""),
      active: le.boolean(),
      config: le.record(le.string(), le.any()),
      triggers: le.array(le.any())
    })), { handleSubmit: F, resetForm: i, values: M, errors: g } = vt(j, {
      initialValues: {
        name: "hello",
        description: "",
        active: !1,
        config: {},
        triggers: []
      }
    });
    F(async (v) => {
      R.value = !0;
      const [u] = await Ee.try(`/api/zbackup/plans/${r.value}`, {
        method: "PATCH",
        data: {
          name: v.name,
          description: v.description,
          active: v.active,
          config: v.config,
          triggers: d.value?.triggers || []
        }
      });
      if (u) {
        R.value = !1, De.error($t("Failed to update."));
        return;
      }
      d.value && (d.value.name = v.name, d.value.description = v.description, d.value.active = v.active, d.value.config = v.config, d.value.triggers = d.value.triggers || []), setTimeout(() => {
        R.value = !1, De.success($t("Updated successfully."));
      }, 800);
    });
    function P() {
      const v = {
        name: "",
        description: "",
        active: !1,
        config: {},
        triggers: []
      };
      d.value && i({ values: v });
    }
    async function f(v) {
      I.value = !0;
      const [u] = await Ee.try(`/api/zbackup/plans/${r.value}/backup`, {
        method: "POST",
        data: v
      });
      if (u) {
        I.value = !1;
        return;
      }
      setTimeout(() => {
        De.success($t("Executed")), I.value = !1;
      }, 800);
    }
    async function $() {
      l.value = !0;
      const [v, u] = await Ee.try(`/api/zbackup/plans/${r.value}`);
      if (v) {
        l.value = !1, De.error($t("Failed to load plan details.")), bt.push("/admin/zbackup/plans");
        return;
      }
      d.value = u, l.value = !1, i({
        values: {
          name: u.name,
          description: u.description || "",
          active: u.active || !1,
          config: u.config || {},
          triggers: u.triggers || []
        }
      });
    }
    async function m() {
      d.value || await $();
    }
    return Ae(m), mt(m), (v, u, h, S) => {
      u("<!--[-->"), l.value ? u(`<div class="flex justify-center items-center h-64"><div class="text-lg">${D(v.$t("Loading..."))}</div></div>`) : u("<!---->"), !l.value && d.value ? (u(`<form><div class="mb-6 flex items-start justify-between gap-4"><div><h1 class="text-2xl font-bold">${D(v.$t("Plan"))}</h1><p class="text-muted-foreground">${D(v.$t("Edit plan details and configuration."))}</p></div><div class="flex shrink-0 items-center gap-2">`), u(o(q, {
        type: "button",
        variant: "outline",
        onClick: P
      }, {
        default: t((A, c, p, w) => {
          if (c)
            c(o(E, { name: "RotateCcw" }, null, p, w)), c(` ${D(v.$t("Reset"))}`);
          else
            return [
              e(E, { name: "RotateCcw" }),
              s(
                " " + n(v.$t("Reset")),
                1
                /* TEXT */
              )
            ];
        }),
        _: 1
        /* STABLE */
      }, h)), u(o(gt, {
        title: v.$t("Execute Backup"),
        description: v.$t("Execute a manual backup for this plan."),
        "submit-text": v.$t("Run Backup"),
        handle: f,
        fields: {
          description: {
            component: "text-field",
            label: v.$t("Description")
          }
        }
      }, {
        default: t((A, c, p, w) => {
          if (c)
            c(o(q, {
              type: "button",
              variant: "outline",
              loading: I.value
            }, {
              default: t((Q, y, U, O) => {
                if (y)
                  y(o(E, { name: "play" }, null, U, O)), y(` ${D(v.$t("Execute"))}`);
                else
                  return [
                    e(E, { name: "play" }),
                    s(
                      " " + n(v.$t("Execute")),
                      1
                      /* TEXT */
                    )
                  ];
              }),
              _: 1
              /* STABLE */
            }, p, w));
          else
            return [
              e(q, {
                type: "button",
                variant: "outline",
                loading: I.value
              }, {
                default: t(() => [
                  e(E, { name: "play" }),
                  s(
                    " " + n(v.$t("Execute")),
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
      }, h)), u(o(q, {
        type: "submit",
        loading: R.value
      }, {
        default: t((A, c, p, w) => {
          if (c)
            c(`${D(v.$t("Save"))}`);
          else
            return [
              s(
                n(v.$t("Save")),
                1
                /* TEXT */
              )
            ];
        }),
        _: 1
        /* STABLE */
      }, h)), u("</div></div>"), Object.keys(a(g)).length ? u(o(a(je), {
        variant: "destructive",
        class: "mb-6"
      }, {
        default: t((A, c, p, w) => {
          if (c)
            c(o(a(Ce), null, {
              default: t((Q, y, U, O) => {
                if (y)
                  y(`${D(v.$t("Please fix the following errors before saving"))}`);
                else
                  return [
                    s(
                      n(v.$t("Please fix the following errors before saving")),
                      1
                      /* TEXT */
                    )
                  ];
              }),
              _: 1
              /* STABLE */
            }, p, w)), c(o(a(Se), null, {
              default: t((Q, y, U, O) => {
                if (y)
                  y(`<ul class="mt-1 list-disc list-inside space-y-1"${O}><!--[-->`), pt(a(g), (K, te) => {
                    y(`<li${O}><span class="font-medium"${O}>${D(te)}</span>: ${D(K)}</li>`);
                  }), y("<!--]--></ul>");
                else
                  return [
                    e("ul", { class: "mt-1 list-disc list-inside space-y-1" }, [
                      (me(!0), pe(
                        Ue,
                        null,
                        Oe(a(g), (K, te) => (me(), pe("li", { key: te }, [
                          e(
                            "span",
                            { class: "font-medium" },
                            n(te),
                            1
                            /* TEXT */
                          ),
                          s(
                            ": " + n(K),
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
            }, p, w));
          else
            return [
              e(a(Ce), null, {
                default: t(() => [
                  s(
                    n(v.$t("Please fix the following errors before saving")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(Se), null, {
                default: t(() => [
                  e("ul", { class: "mt-1 list-disc list-inside space-y-1" }, [
                    (me(!0), pe(
                      Ue,
                      null,
                      Oe(a(g), (Q, y) => (me(), pe("li", { key: y }, [
                        e(
                          "span",
                          { class: "font-medium" },
                          n(y),
                          1
                          /* TEXT */
                        ),
                        s(
                          ": " + n(Q),
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
      }, h)) : u("<!---->"), d.value.strategy === "dump_connection" ? u(o(ze, {
        plan: d.value,
        "onUpdate:plan": (A) => d.value = A
      }, null, h)) : d.value.strategy === "dump_postgres" ? u(o(Be, {
        plan: d.value,
        "onUpdate:plan": (A) => d.value = A
      }, null, h)) : d.value.strategy === "dump_sqlite" ? u(o(Qe, {
        plan: d.value,
        "onUpdate:plan": (A) => d.value = A
      }, null, h)) : d.value.strategy === "restic" ? u(o(Ve, {
        plan: d.value,
        "onUpdate:plan": (A) => d.value = A
      }, null, h)) : u(o(a(je), { variant: "destructive" }, {
        default: t((A, c, p, w) => {
          if (c)
            c(o(a(Ce), null, {
              default: t((Q, y, U, O) => {
                if (y)
                  y(`${D(v.$t("Unsupported strategy"))}`);
                else
                  return [
                    s(
                      n(v.$t("Unsupported strategy")),
                      1
                      /* TEXT */
                    )
                  ];
              }),
              _: 1
              /* STABLE */
            }, p, w)), c(o(a(Se), null, {
              default: t((Q, y, U, O) => {
                if (y)
                  y(`${D(v.$t('No form is available for strategy ":strategy".', { strategy: d.value.strategy }))}`);
                else
                  return [
                    s(
                      n(v.$t('No form is available for strategy ":strategy".', { strategy: d.value.strategy })),
                      1
                      /* TEXT */
                    )
                  ];
              }),
              _: 1
              /* STABLE */
            }, p, w));
          else
            return [
              e(a(Ce), null, {
                default: t(() => [
                  s(
                    n(v.$t("Unsupported strategy")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              e(a(Se), null, {
                default: t(() => [
                  s(
                    n(v.$t('No form is available for strategy ":strategy".', { strategy: d.value.strategy })),
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
      }, h)), u("</form>")) : u("<!---->"), u("<!--]-->");
    };
  }
}), rt = ft.setup;
ft.setup = (b, r) => {
  const d = H();
  return (d.modules || (d.modules = /* @__PURE__ */ new Set())).add("src/client/pages/plans/[id].vue"), rt ? rt(b, r) : void 0;
};
export {
  ft as default
};
