import { isVNode as A, defineComponent as z, ref as B, onMounted as ee, openBlock as h, createBlock as y, unref as s, withCtx as t, createVNode as e, createElementVNode as g, createTextVNode as r, toDisplayString as u, normalizeClass as de, createCommentVNode as U, useModel as N, isRef as H, computed as _e, onServerPrefetch as we, createElementBlock as O, withModifiers as ke, Fragment as De, renderList as Pe } from "vue";
import { P as ce, x as pe, f as Ee, D as Se, c as Te, U as Y, q as Ce, p as Re, o as Me, a as Ve, b as ie, r as ze, s as J, d as Be, e as Fe } from "./index-C4oIW2_2.mjs";
import { c as D, b as P, z as E, v as S, W as L, d as V, D as I, a as T, u as fe, C as me, l as he, e as ve, f as be, E as X, g as k, s as Ie, I as Z, i as Q, L as G, q as K, U as v, V as b, G as $e, k as je, $ as Ae, x as Ue, h as oe, p as ue, j as re } from "./index.es-BISz4hkw.mjs";
let x = 1;
var Le = class {
  subscribers;
  toasts;
  dismissedToasts;
  constructor() {
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
  subscribe = (i) => (this.subscribers.push(i), () => {
    const a = this.subscribers.indexOf(i);
    this.subscribers.splice(a, 1);
  });
  publish = (i) => {
    this.subscribers.forEach((a) => a(i));
  };
  addToast = (i) => {
    this.publish(i), this.toasts = [...this.toasts, i];
  };
  create = (i) => {
    const { message: a, ...n } = i, l = typeof i.id == "number" || i.id && i.id?.length > 0 ? i.id : x++, d = this.toasts.find((w) => w.id === l), p = i.dismissible === void 0 ? !0 : i.dismissible;
    return this.dismissedToasts.has(l) && this.dismissedToasts.delete(l), d ? this.toasts = this.toasts.map((w) => w.id === l ? (this.publish({
      ...w,
      ...i,
      id: l,
      title: a
    }), {
      ...w,
      ...i,
      id: l,
      dismissible: p,
      title: a
    }) : w) : this.addToast({
      title: a,
      ...n,
      dismissible: p,
      id: l
    }), l;
  };
  dismiss = (i) => (i ? (this.dismissedToasts.add(i), requestAnimationFrame(() => this.subscribers.forEach((a) => a({
    id: i,
    dismiss: !0
  })))) : this.toasts.forEach((a) => {
    this.subscribers.forEach((n) => n({
      id: a.id,
      dismiss: !0
    }));
  }), i);
  message = (i, a) => this.create({
    ...a,
    message: i,
    type: "default"
  });
  error = (i, a) => this.create({
    ...a,
    type: "error",
    message: i
  });
  success = (i, a) => this.create({
    ...a,
    type: "success",
    message: i
  });
  info = (i, a) => this.create({
    ...a,
    type: "info",
    message: i
  });
  warning = (i, a) => this.create({
    ...a,
    type: "warning",
    message: i
  });
  loading = (i, a) => this.create({
    ...a,
    type: "loading",
    message: i
  });
  promise = (i, a) => {
    if (!a) return;
    let n;
    a.loading !== void 0 && (n = this.create({
      ...a,
      promise: i,
      type: "loading",
      message: a.loading,
      description: typeof a.description != "function" ? a.description : void 0
    }));
    const l = Promise.resolve(i instanceof Function ? i() : i);
    let d = n !== void 0, p;
    const w = l.then(async (o) => {
      if (p = ["resolve", o], A(o))
        d = !1, this.create({
          id: n,
          type: "default",
          message: o
        });
      else if (qe(o) && !o.ok) {
        d = !1;
        const c = typeof a.error == "function" ? await a.error(`HTTP error! status: ${o.status}`) : a.error, C = typeof a.description == "function" ? await a.description(`HTTP error! status: ${o.status}`) : a.description, F = typeof c == "object" && !A(c) ? c : {
          message: c || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "error",
          description: C,
          ...F
        });
      } else if (o instanceof Error) {
        d = !1;
        const c = typeof a.error == "function" ? await a.error(o) : a.error, C = typeof a.description == "function" ? await a.description(o) : a.description, F = typeof c == "object" && !A(c) ? c : {
          message: c || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "error",
          description: C,
          ...F
        });
      } else if (a.success !== void 0) {
        d = !1;
        const c = typeof a.success == "function" ? await a.success(o) : a.success, C = typeof a.description == "function" ? await a.description(o) : a.description, F = typeof c == "object" && !A(c) ? c : {
          message: c || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "success",
          description: C,
          ...F
        });
      }
    }).catch(async (o) => {
      if (p = ["reject", o], a.error !== void 0) {
        d = !1;
        const m = typeof a.error == "function" ? await a.error(o) : a.error, c = typeof a.description == "function" ? await a.description(o) : a.description, j = typeof m == "object" && !A(m) ? m : {
          message: m || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "error",
          description: c,
          ...j
        });
      }
    }).finally(() => {
      d && (this.dismiss(n), n = void 0), a.finally?.();
    }), _ = () => new Promise((o, m) => w.then(() => p[0] === "reject" ? m(p[1]) : o(p[1])).catch(m));
    return typeof n != "string" && typeof n != "number" ? { unwrap: _ } : Object.assign(n, { unwrap: _ });
  };
  custom = (i, a) => {
    const n = a?.id || x++, l = this.toasts.find((p) => p.id === n), d = a?.dismissible === void 0 ? !0 : a.dismissible;
    return this.dismissedToasts.has(n) && this.dismissedToasts.delete(n), l ? this.toasts = this.toasts.map((p) => p.id === n ? (this.publish({
      ...p,
      component: i,
      dismissible: d,
      id: n,
      ...a
    }), {
      ...p,
      component: i,
      dismissible: d,
      id: n,
      ...a
    }) : p) : this.addToast({
      component: i,
      dismissible: d,
      id: n,
      ...a
    }), n;
  };
  getActiveToasts = () => this.toasts.filter((i) => !this.dismissedToasts.has(i.id));
};
const R = new Le();
function Oe(i, a) {
  const n = a?.id || x++;
  return R.create({
    message: i,
    id: n,
    type: "default",
    ...a
  }), n;
}
const qe = (i) => i && typeof i == "object" && "ok" in i && typeof i.ok == "boolean" && "status" in i && typeof i.status == "number", Ne = Oe, He = () => R.toasts, Qe = () => R.getActiveToasts(), q = Object.assign(Ne, {
  success: R.success,
  info: R.info,
  warning: R.warning,
  error: R.error,
  custom: R.custom,
  message: R.message,
  promise: R.promise,
  dismiss: R.dismiss,
  loading: R.loading
}, {
  getHistory: He,
  getToasts: Qe
}), Ge = { class: "flex items-center justify-between" }, Ke = { class: "flex items-center gap-2" }, We = { class: "flex items-center gap-2 justify-end" }, Ye = { class: "sr-only" }, te = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PlanDumpSnapshots",
  props: {
    planId: {}
  },
  setup(i) {
    const a = i, n = B([]), l = B(!1), d = B();
    function p(o) {
      if (!o) return "0 B";
      const m = Math.floor(Math.log(o) / Math.log(1024)), c = ["B", "KB", "MB", "GB", "TB"];
      return (o / Math.pow(1024, m)).toFixed(2) + " " + c[m];
    }
    const w = ce([
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
        field: (o) => p(o.size)
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (o) => o.created_at ? $dt(o.created_at) : "-"
      },
      { id: "actions" }
    ]);
    async function _() {
      l.value = !0;
      const [o, m] = await pe.try(
        `/api/zbackup/plans/${a.planId}/dumps`,
        { method: "GET" }
      );
      if (o) {
        l.value = !1;
        return;
      }
      n.value = m.items || [], await new Promise((c) => setTimeout(c, 300)), l.value = !1;
    }
    return ee(_), (o, m) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(P), null, {
          default: t(() => [
            g("div", Ge, [
              g("div", null, [
                e(s(E), null, {
                  default: t(() => [
                    r(
                      u(o.$t("Dumps")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(s(S), null, {
                  default: t(() => [
                    r(
                      u(o.$t("View and manage dump snapshots for this plan.")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              g("div", Ke, [
                e(L, {
                  variant: "outline",
                  "fetch-method": "POST",
                  fetch: `/api/zbackup/plans/${i.planId}/dumps/cleanup`,
                  tooltip: o.$t("Remove old dumps based on retention settings"),
                  description: o.$t("Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted."),
                  "toast-on-success": o.$t("Cleanup completed."),
                  onFetched: _
                }, {
                  default: t(() => [
                    e(V, { name: "Eraser" }),
                    r(
                      " " + u(o.$t("Cleanup")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                e(I, {
                  variant: "outline",
                  onClick: _
                }, {
                  default: t(() => [
                    e(V, {
                      name: "refreshCw",
                      class: de({ "animate-spin": l.value })
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
        e(s(T), null, {
          default: t(() => [
            d.value ? (h(), y(fe, {
              key: 0,
              "model-value": d.value,
              open: !0,
              "onUpdate:open": m[0] || (m[0] = (c) => {
                c || (d.value = void 0);
              })
            }, {
              default: t(() => [...m[1] || (m[1] = [
                g(
                  "div",
                  { class: "hidden" },
                  null,
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["model-value"])) : U("v-if", !0),
            e(me, {
              rows: n.value,
              columns: s(w),
              loading: l.value,
              "hide-pagination": ""
            }, {
              "row-actions": t(({ row: c }) => [
                g("div", We, [
                  e(L, {
                    variant: "ghost",
                    size: "sm",
                    "fetch-method": "POST",
                    fetch: `/api/zbackup/plans/${i.planId}/dumps/${c.id}/restore`,
                    tooltip: o.$t("Restore this dump"),
                    description: o.$t("Are you sure you want to restore this dump? This action cannot be undone."),
                    "toast-on-success": o.$t("Restore started successfully."),
                    onFetched: _
                  }, {
                    default: t(() => [
                      e(V, { name: "TimerReset" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                  e(L, {
                    variant: "ghost",
                    size: "sm",
                    "fetch-method": "DELETE",
                    fetch: `/api/zbackup/plans/${i.planId}/dumps/${c.id}`,
                    tooltip: o.$t("Delete this dump"),
                    description: o.$t("Are you sure you want to delete this dump? This action cannot be undone."),
                    "toast-on-success": o.$t("Dump deleted."),
                    onFetched: _
                  }, {
                    default: t(() => [
                      e(V, { name: "trash" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                  e(
                    he,
                    null,
                    {
                      default: t(() => [
                        e(ve, { "as-child": "" }, {
                          default: t(() => [
                            e(I, {
                              variant: "ghost",
                              class: "w-8 h-8 p-0"
                            }, {
                              default: t(() => [
                                g(
                                  "span",
                                  Ye,
                                  u(o.$t("More")),
                                  1
                                  /* TEXT */
                                ),
                                e(V, {
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
                          be,
                          { class: "max-h-60 overflow-y-auto" },
                          {
                            default: t(() => [
                              e(X, {
                                class: "cursor-pointer",
                                onClick: (C) => d.value = c.metadata
                              }, {
                                default: t(() => [
                                  r(
                                    u(o.$t("Metadata")),
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
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), W = /* @__PURE__ */ z({
  __name: "PlanDumpSectionDetails",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(P), null, {
          default: t(() => [
            e(s(E), null, {
              default: t(() => [
                r(
                  u(a.$t("Plan details")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(S), null, {
              default: t(() => [
                r(
                  u(a.$t("Edit the name, status and description of this plan.")),
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
        e(s(T), { class: "space-y-6" }, {
          default: t(() => [
            e(k, {
              name: "name",
              label: a.$t("Name"),
              placeholder: a.$t("Enter plan name")
            }, null, 8, ["label", "placeholder"]),
            e(Ie, {
              name: "active",
              label: a.$t("Active"),
              hint: a.$t("Activate or deactivate this backup plan")
            }, null, 8, ["label", "hint"]),
            e(Z, {
              name: "description",
              label: a.$t("Description"),
              placeholder: a.$t("Enter plan description"),
              hint: a.$t("Optional description for this backup plan")
            }, null, 8, ["label", "placeholder", "hint"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), se = /* @__PURE__ */ z({
  __name: "PlanDumpSectionDrive",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(P), null, {
          default: t(() => [
            e(s(E), null, {
              default: t(() => [
                r(
                  u(a.$t("Drive")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(S), null, {
              default: t(() => [
                r(
                  u(a.$t("Configure where backups will be stored.")),
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
        e(s(T), { class: "space-y-6" }, {
          default: t(() => [
            e(k, {
              name: "config.drive_id",
              label: a.$t("Drive ID"),
              hint: a.$t("The drive where backups will be stored. Must be defined in the configuration file.")
            }, null, 8, ["label", "hint"]),
            e(k, {
              name: "config.drive_prefix",
              label: a.$t("Drive Prefix"),
              placeholder: a.$t("backups/my-plan"),
              hint: a.$t("Directory prefix within the drive where backups will be stored.")
            }, null, 8, ["label", "placeholder", "hint"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), ge = /* @__PURE__ */ z({
  __name: "PlanDumpSectionDocker",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(P), null, {
          default: t(() => [
            e(s(E), null, {
              default: t(() => [
                r(
                  u(a.$t("Docker")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(S), null, {
              default: t(() => [
                r(
                  u(a.$t("Configure the Docker image used to run the dump command.")),
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
        e(s(T), { class: "space-y-6" }, {
          default: t(() => [
            e(k, {
              name: "config.docker_image",
              label: a.$t("Docker Image"),
              placeholder: a.$t("postgres:latest"),
              hint: a.$t("Docker image used to run the dump command.")
            }, null, 8, ["label", "placeholder", "hint"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), ae = /* @__PURE__ */ z({
  __name: "PlanDumpSectionRetention",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(P), null, {
          default: t(() => [
            e(s(E), null, {
              default: t(() => [
                r(
                  u(a.$t("Retention")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(S), null, {
              default: t(() => [
                r(
                  u(a.$t("Control how many backups are kept before older ones are removed.")),
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
        e(s(T), { class: "space-y-6" }, {
          default: t(() => [
            e(k, {
              name: "config.retention_max_items",
              type: "number",
              label: a.$t("Max Backups"),
              hint: a.$t("Maximum number of backups to keep. Older ones will be removed automatically.")
            }, null, 8, ["label", "hint"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), Je = /* @__PURE__ */ z({
  __name: "PlanDumpConnectionForm",
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(i) {
    const a = N(i, "plan"), n = Q("tab", "details");
    return (l, d) => (h(), y(s(G), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(K), null, {
          default: t(() => [
            e(s(v), {
              value: "details",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Details")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "connection",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Connection")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "drive",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Drive")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "docker",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Docker")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "retention",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Retention")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "snapshots",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Snapshots")),
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
        e(s(b), { value: "details" }, {
          default: t(() => [
            e(W)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "connection" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(P), null, {
                  default: t(() => [
                    e(s(E), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Connection")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(s(S), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Select the database connection for this backup plan.")),
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
                e(s(T), { class: "space-y-6" }, {
                  default: t(() => [
                    e($e, {
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
        e(s(b), { value: "drive" }, {
          default: t(() => [
            e(se)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "docker" }, {
          default: t(() => [
            e(ge)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "retention" }, {
          default: t(() => [
            e(ae)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "snapshots" }, {
          default: t(() => [
            e(te, {
              "plan-id": a.value.id
            }, null, 8, ["plan-id"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]));
  }
}), Xe = /* @__PURE__ */ z({
  __name: "PlanDumpSQLiteForm",
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(i) {
    const a = N(i, "plan"), n = Q("tab", "details");
    return (l, d) => (h(), y(s(G), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(K), null, {
          default: t(() => [
            e(s(v), {
              value: "details",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Details")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "database",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Database")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "drive",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Drive")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "retention",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Retention")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "dumps",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Dumps")),
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
        e(s(b), { value: "details" }, {
          default: t(() => [
            e(W)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "database" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(P), null, {
                  default: t(() => [
                    e(s(E), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Database")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(s(S), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Configure the SQLite database file to back up.")),
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
                e(s(T), { class: "space-y-6" }, {
                  default: t(() => [
                    e(k, {
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
        e(s(b), { value: "drive" }, {
          default: t(() => [
            e(se)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "retention" }, {
          default: t(() => [
            e(ae)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "dumps" }, {
          default: t(() => [
            e(te, {
              "plan-id": a.value.id
            }, null, 8, ["plan-id"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]));
  }
}), Ze = /* @__PURE__ */ z({
  __name: "PlanDumpPostgresForm",
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(i) {
    const a = N(i, "plan"), n = Q("tab", "details");
    return (l, d) => (h(), y(s(G), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(K), null, {
          default: t(() => [
            e(s(v), {
              value: "details",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Details")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "connection",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Connection")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "drive",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Drive")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "docker",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Docker")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "retention",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Retention")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "dumps",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Dumps")),
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
        e(s(b), { value: "details" }, {
          default: t(() => [
            e(W)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "connection" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(P), null, {
                  default: t(() => [
                    e(s(E), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Connection")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(s(S), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Configure the PostgreSQL database connection settings.")),
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
                e(s(T), { class: "space-y-6" }, {
                  default: t(() => [
                    e(k, {
                      name: "config.postgres_host",
                      label: l.$t("Host"),
                      placeholder: l.$t("localhost"),
                      hint: l.$t("Hostname or IP address of the PostgreSQL server.")
                    }, null, 8, ["label", "placeholder", "hint"]),
                    e(k, {
                      name: "config.postgres_port",
                      type: "number",
                      label: l.$t("Port"),
                      placeholder: l.$t("5432"),
                      hint: l.$t("Port number of the PostgreSQL server.")
                    }, null, 8, ["label", "placeholder", "hint"]),
                    e(k, {
                      name: "config.postgres_username",
                      label: l.$t("Username"),
                      placeholder: l.$t("postgres"),
                      hint: l.$t("PostgreSQL user with read access to the target database.")
                    }, null, 8, ["label", "placeholder", "hint"]),
                    e(k, {
                      name: "config.postgres_password",
                      type: "password",
                      label: l.$t("Password"),
                      hint: l.$t("Password for the PostgreSQL user.")
                    }, null, 8, ["label", "hint"]),
                    e(k, {
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
        e(s(b), { value: "drive" }, {
          default: t(() => [
            e(se)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "docker" }, {
          default: t(() => [
            e(ge)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "retention" }, {
          default: t(() => [
            e(ae)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "dumps" }, {
          default: t(() => [
            e(te, {
              "plan-id": a.value.id
            }, null, 8, ["plan-id"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]));
  }
}), xe = { class: "flex items-center justify-between" }, et = { class: "flex items-center gap-2" }, tt = { class: "flex items-center gap-2 justify-end" }, st = { class: "sr-only" }, at = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PlanResticSnapshots",
  props: {
    planId: {}
  },
  setup(i) {
    const a = i, n = B([]), l = B(!1), d = B();
    function p(o) {
      if (!o) return "0 B";
      const m = Math.floor(Math.log(o) / Math.log(1024)), c = ["B", "KB", "MB", "GB", "TB"];
      return (o / Math.pow(1024, m)).toFixed(2) + " " + c[m];
    }
    const w = ce([
      {
        id: "id",
        label: $t("Snapshot ID"),
        field: "id"
      },
      {
        id: "size",
        label: $t("Size"),
        field: (o) => p(o.metadata.size)
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (o) => o.created_at ? Ee(new Date(o.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
      },
      { id: "actions" }
    ]);
    async function _() {
      l.value = !0;
      const [o, m] = await pe.try(
        `/api/zbackup/plans/${a.planId}/restic`,
        { method: "GET" }
      );
      if (o) {
        l.value = !1;
        return;
      }
      n.value = m.items || [], await new Promise((c) => setTimeout(c, 300)), l.value = !1;
    }
    return ee(_), (o, m) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(P), null, {
          default: t(() => [
            g("div", xe, [
              g("div", null, [
                e(s(E), null, {
                  default: t(() => [
                    r(
                      u(o.$t("Snapshots")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(s(S), null, {
                  default: t(() => [
                    r(
                      u(o.$t("View and manage Restic snapshots for this plan.")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              g("div", et, [
                e(I, {
                  variant: "outline",
                  onClick: _
                }, {
                  default: t(() => [
                    e(V, {
                      name: "refreshCw",
                      class: de({ "animate-spin": l.value })
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
        e(s(T), null, {
          default: t(() => [
            d.value ? (h(), y(fe, {
              key: 0,
              "model-value": d.value,
              open: !0,
              "onUpdate:open": m[0] || (m[0] = (c) => {
                c || (d.value = void 0);
              })
            }, {
              default: t(() => [...m[1] || (m[1] = [
                g(
                  "div",
                  { class: "hidden" },
                  null,
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["model-value"])) : U("v-if", !0),
            e(me, {
              rows: n.value,
              columns: s(w),
              loading: l.value
            }, {
              "row-actions": t(({ row: c }) => [
                g("div", tt, [
                  e(L, {
                    variant: "ghost",
                    size: "sm",
                    "fetch-method": "POST",
                    fetch: `/api/zbackup/plans/${i.planId}/restic/${c.id}/restore`,
                    tooltip: o.$t("Restore this snapshot"),
                    description: o.$t("Are you sure you want to restore this snapshot? This action cannot be undone."),
                    "toast-on-success": o.$t("Restore started successfully."),
                    onFetched: _
                  }, {
                    default: t(() => [
                      e(V, { name: "TimerReset" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                  e(L, {
                    variant: "ghost",
                    size: "sm",
                    "fetch-method": "DELETE",
                    fetch: `/api/zbackup/plans/${i.planId}/restic/${c.id}`,
                    tooltip: o.$t("Delete this snapshot"),
                    description: o.$t("Are you sure you want to delete this snapshot? This action cannot be undone."),
                    "toast-on-success": o.$t("Snapshot deleted."),
                    onFetched: _
                  }, {
                    default: t(() => [
                      e(V, { name: "trash" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                  e(
                    he,
                    null,
                    {
                      default: t(() => [
                        e(ve, { "as-child": "" }, {
                          default: t(() => [
                            e(I, {
                              variant: "ghost",
                              class: "w-8 h-8 p-0"
                            }, {
                              default: t(() => [
                                g(
                                  "span",
                                  st,
                                  u(o.$t("More")),
                                  1
                                  /* TEXT */
                                ),
                                e(V, {
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
                          be,
                          { class: "max-h-60 overflow-y-auto" },
                          {
                            default: t(() => [
                              e(X, {
                                class: "cursor-pointer",
                                onClick: (C) => d.value = c.metadata
                              }, {
                                default: t(() => [
                                  r(
                                    u(o.$t("Metadata")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["onClick"]),
                              e(X, {
                                class: "cursor-pointer",
                                onClick: (C) => d.value = c.data
                              }, {
                                default: t(() => [
                                  r(
                                    u(o.$t("Raw Data")),
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
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), lt = /* @__PURE__ */ z({
  __name: "PlanResticForm",
  props: {
    plan: {
      type: Object,
      required: !0
    },
    planModifiers: {}
  },
  emits: ["update:plan"],
  setup(i) {
    const a = N(i, "plan"), n = Q("tab", "details");
    return (l, d) => (h(), y(s(G), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(K), null, {
          default: t(() => [
            e(s(v), {
              value: "details",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Details")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "repository",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Repository")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "backup",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Backup")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "cleanup",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Cleanup")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "docker",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Docker")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e(s(v), {
              value: "snapshots",
              class: "min-w-60"
            }, {
              default: t(() => [
                r(
                  u(l.$t("Snapshots")),
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
        e(s(b), { value: "details" }, {
          default: t(() => [
            e(W)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "repository" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(P), null, {
                  default: t(() => [
                    e(s(E), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Repository Configuration")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(s(S), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Settings related to the Restic repository where backups will be stored.")),
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
                e(s(T), { class: "space-y-6" }, {
                  default: t(() => [
                    e(k, {
                      name: "config.restic_repository",
                      label: l.$t("Repository"),
                      placeholder: l.$t("/path/to/repo or s3:bucket/path"),
                      hint: l.$t("File path or URL to the Restic repository.")
                    }, null, 8, ["label", "placeholder", "hint"]),
                    e(k, {
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
        e(s(b), { value: "backup" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(P), null, {
                  default: t(() => [
                    e(s(E), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Backup")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(s(S), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Settings related to the files and directories to be backed up.")),
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
                e(s(T), { class: "space-y-6" }, {
                  default: t(() => [
                    e(je, {
                      name: "config.source_paths",
                      label: l.$t("Paths"),
                      placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                      hint: l.$t("List of file and directory paths to include in the backup.")
                    }, null, 8, ["label", "placeholder", "hint"]),
                    e(Z, {
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
        e(s(b), { value: "cleanup" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(P), null, {
                  default: t(() => [
                    e(s(E), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Cleanup")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(s(S), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Settings related to automatic cleanup of old snapshots.")),
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
                e(s(T), { class: "space-y-6" }, {
                  default: t(() => [
                    e($e, {
                      name: "config.forget_enabled",
                      label: l.$t("Enable Forget"),
                      hint: l.$t("Enable automatic cleanup of old snapshots after backup."),
                      clearable: !0,
                      options: [
                        { value: !0, label: l.$t("Yes") },
                        { value: !1, label: l.$t("No") }
                      ]
                    }, null, 8, ["label", "hint", "options"]),
                    e(Z, {
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
        e(s(b), { value: "docker" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(P), null, {
                  default: t(() => [
                    e(s(E), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Docker")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    e(s(S), null, {
                      default: t(() => [
                        r(
                          u(l.$t("Configure the Docker image used to run Restic commands.")),
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
                e(s(T), { class: "space-y-6" }, {
                  default: t(() => [
                    e(k, {
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
        e(s(b), { value: "snapshots" }, {
          default: t(() => [
            e(at, {
              "plan-id": a.value.id
            }, null, 8, ["plan-id"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]));
  }
}), nt = {
  key: 0,
  class: "flex justify-center items-center h-64"
}, it = { class: "text-lg" }, ot = { class: "mb-6 flex items-start justify-between gap-4" }, ut = { class: "text-2xl font-bold" }, rt = { class: "text-muted-foreground" }, dt = { class: "flex shrink-0 items-center gap-2" }, ct = { class: "mt-1 list-disc list-inside space-y-1" }, pt = { class: "font-medium" }, vt = /* @__PURE__ */ z({
  __name: "[id]",
  setup(i) {
    const a = _e(() => String(Se.params.id)), n = B(), l = B(!1), d = B(!1), p = B(!1), w = Re(Me({
      name: J(),
      description: Fe(J(), ""),
      active: Be(),
      config: ze(J(), ie()),
      triggers: Ve(ie())
    })), { handleSubmit: _, resetForm: o, values: m, errors: c } = Te(w, {
      initialValues: {
        name: "hello",
        description: "",
        active: !1,
        config: {},
        triggers: []
      }
    }), C = _(async (f) => {
      d.value = !0;
      const [$] = await Y.try(`/api/zbackup/plans/${a.value}`, {
        method: "PATCH",
        data: {
          name: f.name,
          description: f.description,
          active: f.active,
          config: f.config,
          triggers: n.value?.triggers || []
        }
      });
      if ($) {
        d.value = !1, q.error($t("Failed to update."));
        return;
      }
      n.value && (n.value.name = f.name, n.value.description = f.description, n.value.active = f.active, n.value.config = f.config, n.value.triggers = n.value.triggers || []), setTimeout(() => {
        d.value = !1, q.success($t("Updated successfully."));
      }, 800);
    });
    function j() {
      const f = {
        name: "",
        description: "",
        active: !1,
        config: {},
        triggers: []
      };
      n.value && o({ values: f });
    }
    async function F(f) {
      p.value = !0;
      const [$] = await Y.try(`/api/zbackup/plans/${a.value}/backup`, {
        method: "POST",
        data: f
      });
      if ($) {
        p.value = !1;
        return;
      }
      setTimeout(() => {
        q.success($t("Executed")), p.value = !1;
      }, 800);
    }
    async function ye() {
      l.value = !0;
      const [f, $] = await Y.try(`/api/zbackup/plans/${a.value}`);
      if (f) {
        l.value = !1, q.error($t("Failed to load plan details.")), Ce.push("/admin/zbackup/plans");
        return;
      }
      n.value = $, l.value = !1, o({
        values: {
          name: $.name,
          description: $.description || "",
          active: $.active || !1,
          config: $.config || {},
          triggers: $.triggers || []
        }
      });
    }
    async function le() {
      n.value || await ye();
    }
    return ee(le), we(le), (f, $) => (h(), y(Ae, {
      breadcrumbs: [
        { label: f.$t("Backup"), to: "/admin/backup" },
        { label: f.$t("Plans"), to: "/admin/backup/plans" },
        { label: f.$t("Plan") }
      ]
    }, {
      default: t(() => [
        l.value ? (h(), O("div", nt, [
          g(
            "div",
            it,
            u(f.$t("Loading...")),
            1
            /* TEXT */
          )
        ])) : U("v-if", !0),
        !l.value && n.value ? (h(), O(
          "form",
          {
            key: 1,
            onSubmit: $[4] || ($[4] = ke(
              //@ts-ignore
              (...M) => s(C) && s(C)(...M),
              ["prevent"]
            ))
          },
          [
            g("div", ot, [
              g("div", null, [
                g(
                  "h1",
                  ut,
                  u(f.$t("Plan")),
                  1
                  /* TEXT */
                ),
                g(
                  "p",
                  rt,
                  u(f.$t("Edit plan details and configuration.")),
                  1
                  /* TEXT */
                )
              ]),
              g("div", dt, [
                e(I, {
                  type: "button",
                  variant: "outline",
                  onClick: j
                }, {
                  default: t(() => [
                    e(V, { name: "RotateCcw" }),
                    r(
                      " " + u(f.$t("Reset")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(Ue, {
                  title: f.$t("Execute Backup"),
                  description: f.$t("Execute a manual backup for this plan."),
                  "submit-text": f.$t("Run Backup"),
                  handle: F,
                  fields: {
                    description: {
                      component: "text-field",
                      label: f.$t("Description")
                    }
                  }
                }, {
                  default: t(() => [
                    e(I, {
                      type: "button",
                      variant: "outline",
                      loading: p.value
                    }, {
                      default: t(() => [
                        e(V, { name: "play" }),
                        r(
                          " " + u(f.$t("Execute")),
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
                e(I, {
                  type: "submit",
                  loading: d.value
                }, {
                  default: t(() => [
                    r(
                      u(f.$t("Save")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])
              ])
            ]),
            Object.keys(s(c)).length ? (h(), y(s(oe), {
              key: 0,
              variant: "destructive",
              class: "mb-6"
            }, {
              default: t(() => [
                e(s(ue), null, {
                  default: t(() => [
                    r(
                      u(f.$t("Please fix the following errors before saving")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(s(re), null, {
                  default: t(() => [
                    g("ul", ct, [
                      (h(!0), O(
                        De,
                        null,
                        Pe(s(c), (M, ne) => (h(), O("li", { key: ne }, [
                          g(
                            "span",
                            pt,
                            u(ne),
                            1
                            /* TEXT */
                          ),
                          r(
                            ": " + u(M),
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
            })) : U("v-if", !0),
            n.value.strategy === "dump_connection" ? (h(), y(Je, {
              key: 1,
              plan: n.value,
              "onUpdate:plan": $[0] || ($[0] = (M) => n.value = M)
            }, null, 8, ["plan"])) : n.value.strategy === "dump_postgres" ? (h(), y(Ze, {
              key: 2,
              plan: n.value,
              "onUpdate:plan": $[1] || ($[1] = (M) => n.value = M)
            }, null, 8, ["plan"])) : n.value.strategy === "dump_sqlite" ? (h(), y(Xe, {
              key: 3,
              plan: n.value,
              "onUpdate:plan": $[2] || ($[2] = (M) => n.value = M)
            }, null, 8, ["plan"])) : n.value.strategy === "restic" ? (h(), y(lt, {
              key: 4,
              plan: n.value,
              "onUpdate:plan": $[3] || ($[3] = (M) => n.value = M)
            }, null, 8, ["plan"])) : (h(), y(s(oe), {
              key: 5,
              variant: "destructive"
            }, {
              default: t(() => [
                e(s(ue), null, {
                  default: t(() => [
                    r(
                      u(f.$t("Unsupported strategy")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(s(re), null, {
                  default: t(() => [
                    r(
                      u(f.$t('No form is available for strategy ":strategy".', { strategy: n.value.strategy })),
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
          ],
          32
          /* NEED_HYDRATION */
        )) : U("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["breadcrumbs"]));
  }
});
export {
  vt as default
};
