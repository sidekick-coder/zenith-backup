import { isVNode as I, defineComponent as V, ref as z, onMounted as ee, openBlock as h, createBlock as y, unref as s, withCtx as t, createVNode as e, createElementVNode as $, createTextVNode as r, toDisplayString as u, normalizeClass as ce, createCommentVNode as U, useModel as N, isRef as H, computed as we, onServerPrefetch as ke, createElementBlock as O, Fragment as ie, withModifiers as De, renderList as Se } from "vue";
import { Z as pe, z as fe, f as Te, U as Ce, C as Pe, b as W, p as Re, o as Ee, a as Me, c as oe, r as Fe, s as J, d as Ve, e as ze, G as Ae } from "./index-DmjTtCIm.mjs";
import { x as D, I as S, T, q as C, v as L, M as F, e as j, S as P, a as me, b as he, C as ve, O as be, $ as ge, _ as X, c as k, Z as je, A as q, k as G, d as Y, o as Z, i as v, r as b, F as $e, p as Be, f as Ie, g as ue, h as re, j as de } from "./index.es-DEDvEmxx.mjs";
let x = 1;
var Oe = class {
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
      if (p = ["resolve", o], I(o))
        d = !1, this.create({
          id: n,
          type: "default",
          message: o
        });
      else if (Le(o) && !o.ok) {
        d = !1;
        const c = typeof a.error == "function" ? await a.error(`HTTP error! status: ${o.status}`) : a.error, R = typeof a.description == "function" ? await a.description(`HTTP error! status: ${o.status}`) : a.description, A = typeof c == "object" && !I(c) ? c : {
          message: c || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "error",
          description: R,
          ...A
        });
      } else if (o instanceof Error) {
        d = !1;
        const c = typeof a.error == "function" ? await a.error(o) : a.error, R = typeof a.description == "function" ? await a.description(o) : a.description, A = typeof c == "object" && !I(c) ? c : {
          message: c || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "error",
          description: R,
          ...A
        });
      } else if (a.success !== void 0) {
        d = !1;
        const c = typeof a.success == "function" ? await a.success(o) : a.success, R = typeof a.description == "function" ? await a.description(o) : a.description, A = typeof c == "object" && !I(c) ? c : {
          message: c || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "success",
          description: R,
          ...A
        });
      }
    }).catch(async (o) => {
      if (p = ["reject", o], a.error !== void 0) {
        d = !1;
        const f = typeof a.error == "function" ? await a.error(o) : a.error, c = typeof a.description == "function" ? await a.description(o) : a.description, B = typeof f == "object" && !I(f) ? f : {
          message: f || "",
          id: n || ""
        };
        this.create({
          id: n,
          type: "error",
          description: c,
          ...B
        });
      }
    }).finally(() => {
      d && (this.dismiss(n), n = void 0), a.finally?.();
    }), _ = () => new Promise((o, f) => w.then(() => p[0] === "reject" ? f(p[1]) : o(p[1])).catch(f));
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
const E = new Oe();
function Ue(i, a) {
  const n = a?.id || x++;
  return E.create({
    message: i,
    id: n,
    type: "default",
    ...a
  }), n;
}
const Le = (i) => i && typeof i == "object" && "ok" in i && typeof i.ok == "boolean" && "status" in i && typeof i.status == "number", Qe = Ue, qe = () => E.toasts, Ne = () => E.getActiveToasts(), Q = Object.assign(Qe, {
  success: E.success,
  info: E.info,
  warning: E.warning,
  error: E.error,
  custom: E.custom,
  message: E.message,
  promise: E.promise,
  dismiss: E.dismiss,
  loading: E.loading
}, {
  getHistory: qe,
  getToasts: Ne
}), He = { class: "flex items-center justify-between" }, Ge = { class: "flex items-center gap-2" }, Ye = { class: "flex items-center gap-2 justify-end" }, Ze = { class: "sr-only" }, te = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "PlanDumpSnapshots",
  props: {
    planId: {}
  },
  setup(i) {
    const a = i, n = z([]), l = z(!1), d = z();
    function p(o) {
      if (!o) return "0 B";
      const f = Math.floor(Math.log(o) / Math.log(1024)), c = ["B", "KB", "MB", "GB", "TB"];
      return (o / Math.pow(1024, f)).toFixed(2) + " " + c[f];
    }
    const w = pe([
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
      const [o, f] = await fe.try(
        `/api/zbackup/plans/${a.planId}/dumps`,
        { method: "GET" }
      );
      if (o) {
        l.value = !1;
        return;
      }
      n.value = f.items || [], await new Promise((c) => setTimeout(c, 300)), l.value = !1;
    }
    return ee(_), (o, f) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(S), null, {
          default: t(() => [
            $("div", He, [
              $("div", null, [
                e(s(T), null, {
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
                e(s(C), null, {
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
              $("div", Ge, [
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
                    e(F, { name: "Eraser" }),
                    r(
                      " " + u(o.$t("Cleanup")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                e(j, {
                  variant: "outline",
                  onClick: _
                }, {
                  default: t(() => [
                    e(F, {
                      name: "refreshCw",
                      class: ce({ "animate-spin": l.value })
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
        e(s(P), null, {
          default: t(() => [
            d.value ? (h(), y(me, {
              key: 0,
              "model-value": d.value,
              open: !0,
              "onUpdate:open": f[0] || (f[0] = (c) => {
                c || (d.value = void 0);
              })
            }, {
              default: t(() => [...f[1] || (f[1] = [
                $(
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
            e(he, {
              rows: n.value,
              columns: s(w),
              loading: l.value,
              "hide-pagination": ""
            }, {
              "row-actions": t(({ row: c }) => [
                $("div", Ye, [
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
                      e(F, { name: "TimerReset" })
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
                      e(F, { name: "trash" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                  e(
                    ve,
                    null,
                    {
                      default: t(() => [
                        e(be, { "as-child": "" }, {
                          default: t(() => [
                            e(j, {
                              variant: "ghost",
                              class: "w-8 h-8 p-0"
                            }, {
                              default: t(() => [
                                $(
                                  "span",
                                  Ze,
                                  u(o.$t("More")),
                                  1
                                  /* TEXT */
                                ),
                                e(F, {
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
                          ge,
                          { class: "max-h-60 overflow-y-auto" },
                          {
                            default: t(() => [
                              e(X, {
                                class: "cursor-pointer",
                                onClick: (R) => d.value = c.metadata
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
}), K = /* @__PURE__ */ V({
  __name: "PlanDumpSectionDetails",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(S), null, {
          default: t(() => [
            e(s(T), null, {
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
            e(s(C), null, {
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
        e(s(P), { class: "space-y-6" }, {
          default: t(() => [
            e(k, {
              name: "name",
              label: a.$t("Name"),
              placeholder: a.$t("Enter plan name")
            }, null, 8, ["label", "placeholder"]),
            e(je, {
              name: "active",
              label: a.$t("Active"),
              hint: a.$t("Activate or deactivate this backup plan")
            }, null, 8, ["label", "hint"]),
            e(q, {
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
}), se = /* @__PURE__ */ V({
  __name: "PlanDumpSectionDrive",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(S), null, {
          default: t(() => [
            e(s(T), null, {
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
            e(s(C), null, {
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
        e(s(P), { class: "space-y-6" }, {
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
}), ye = /* @__PURE__ */ V({
  __name: "PlanDumpSectionDocker",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(S), null, {
          default: t(() => [
            e(s(T), null, {
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
            e(s(C), null, {
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
        e(s(P), { class: "space-y-6" }, {
          default: t(() => [
            e(s(k), {
              name: "config.docker_image",
              label: a.$t("Docker Image"),
              placeholder: a.$t("postgres:latest"),
              hint: a.$t("Docker image used to run the dump command.")
            }, null, 8, ["label", "placeholder", "hint"]),
            e(s(q), {
              name: "config.docker_extra_args",
              label: a.$t("Docker Extra Args"),
              placeholder: a.$t("--network host"),
              hint: a.$t("Extra arguments to pass to the docker run command.")
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
}), ae = /* @__PURE__ */ V({
  __name: "PlanDumpSectionRetention",
  setup(i) {
    return (a, n) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(S), null, {
          default: t(() => [
            e(s(T), null, {
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
            e(s(C), null, {
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
        e(s(P), { class: "space-y-6" }, {
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
}), Ke = /* @__PURE__ */ V({
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
    const a = N(i, "plan"), n = G("tab", "details");
    return (l, d) => (h(), y(s(Y), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(Z), null, {
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
            e(K)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "connection" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(S), null, {
                  default: t(() => [
                    e(s(T), null, {
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
                    e(s(C), null, {
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
                e(s(P), { class: "space-y-6" }, {
                  default: t(() => [
                    e($e, {
                      name: "config.connection_id",
                      fetch: "/api/database-connections",
                      "value-key": "id",
                      "label-key": "name",
                      label: l.$t("Connection ID"),
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
            e(ye)
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
}), We = /* @__PURE__ */ V({
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
    const a = N(i, "plan"), n = G("tab", "details");
    return (l, d) => (h(), y(s(Y), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(Z), null, {
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
            e(K)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "database" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(S), null, {
                  default: t(() => [
                    e(s(T), null, {
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
                    e(s(C), null, {
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
                e(s(P), { class: "space-y-6" }, {
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
}), Je = /* @__PURE__ */ V({
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
    const a = N(i, "plan"), n = G("tab", "details");
    return (l, d) => (h(), y(s(Y), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(Z), null, {
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
            e(K)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "connection" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(S), null, {
                  default: t(() => [
                    e(s(T), null, {
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
                    e(s(C), null, {
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
                e(s(P), { class: "space-y-6" }, {
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
            e(ye)
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
}), Xe = { class: "flex items-center justify-between" }, xe = { class: "flex items-center gap-2" }, et = { class: "flex items-center gap-2 justify-end" }, tt = { class: "sr-only" }, st = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "PlanResticSnapshots",
  props: {
    planId: {}
  },
  setup(i) {
    const a = i, n = z([]), l = z(!1), d = z();
    function p(o) {
      if (!o) return "0 B";
      const f = Math.floor(Math.log(o) / Math.log(1024)), c = ["B", "KB", "MB", "GB", "TB"];
      return (o / Math.pow(1024, f)).toFixed(2) + " " + c[f];
    }
    const w = pe([
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
        field: (o) => o.created_at ? Te(new Date(o.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
      },
      { id: "actions" }
    ]);
    async function _() {
      l.value = !0;
      const [o, f] = await fe.try(
        `/api/zbackup/plans/${a.planId}/restic`,
        { method: "GET" }
      );
      if (o) {
        l.value = !1;
        return;
      }
      n.value = f.items || [], await new Promise((c) => setTimeout(c, 300)), l.value = !1;
    }
    return ee(_), (o, f) => (h(), y(s(D), null, {
      default: t(() => [
        e(s(S), null, {
          default: t(() => [
            $("div", Xe, [
              $("div", null, [
                e(s(T), null, {
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
                e(s(C), null, {
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
              $("div", xe, [
                e(j, {
                  variant: "outline",
                  onClick: _
                }, {
                  default: t(() => [
                    e(F, {
                      name: "refreshCw",
                      class: ce({ "animate-spin": l.value })
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
        e(s(P), null, {
          default: t(() => [
            d.value ? (h(), y(me, {
              key: 0,
              "model-value": d.value,
              open: !0,
              "onUpdate:open": f[0] || (f[0] = (c) => {
                c || (d.value = void 0);
              })
            }, {
              default: t(() => [...f[1] || (f[1] = [
                $(
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
            e(he, {
              rows: n.value,
              columns: s(w),
              loading: l.value
            }, {
              "row-actions": t(({ row: c }) => [
                $("div", et, [
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
                      e(F, { name: "TimerReset" })
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
                      e(F, { name: "trash" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                  e(
                    ve,
                    null,
                    {
                      default: t(() => [
                        e(be, { "as-child": "" }, {
                          default: t(() => [
                            e(j, {
                              variant: "ghost",
                              class: "w-8 h-8 p-0"
                            }, {
                              default: t(() => [
                                $(
                                  "span",
                                  tt,
                                  u(o.$t("More")),
                                  1
                                  /* TEXT */
                                ),
                                e(F, {
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
                          ge,
                          { class: "max-h-60 overflow-y-auto" },
                          {
                            default: t(() => [
                              e(X, {
                                class: "cursor-pointer",
                                onClick: (R) => d.value = c.metadata
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
                                onClick: (R) => d.value = c.data
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
}), at = /* @__PURE__ */ V({
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
    const a = N(i, "plan"), n = G("tab", "details");
    return (l, d) => (h(), y(s(Y), {
      modelValue: s(n),
      "onUpdate:modelValue": d[0] || (d[0] = (p) => H(n) ? n.value = p : null),
      class: "w-full",
      "unmount-on-hide": !1
    }, {
      default: t(() => [
        e(s(Z), null, {
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
            e(K)
          ]),
          _: 1
          /* STABLE */
        }),
        e(s(b), { value: "repository" }, {
          default: t(() => [
            e(s(D), null, {
              default: t(() => [
                e(s(S), null, {
                  default: t(() => [
                    e(s(T), null, {
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
                    e(s(C), null, {
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
                e(s(P), { class: "space-y-6" }, {
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
                e(s(S), null, {
                  default: t(() => [
                    e(s(T), null, {
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
                    e(s(C), null, {
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
                e(s(P), { class: "space-y-6" }, {
                  default: t(() => [
                    e(Be, {
                      name: "config.source_paths",
                      label: l.$t("Paths"),
                      placeholder: l.$t("Absolute path to file or directory (e.g., /var/www/html)"),
                      hint: l.$t("List of file and directory paths to include in the backup.")
                    }, null, 8, ["label", "placeholder", "hint"]),
                    e(q, {
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
                e(s(S), null, {
                  default: t(() => [
                    e(s(T), null, {
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
                    e(s(C), null, {
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
                e(s(P), { class: "space-y-6" }, {
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
                    e(q, {
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
                e(s(S), null, {
                  default: t(() => [
                    e(s(T), null, {
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
                    e(s(C), null, {
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
                e(s(P), { class: "space-y-6" }, {
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
            e(st, {
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
}), lt = {
  key: 0,
  class: "flex justify-center items-center h-64"
}, nt = { class: "text-lg" }, it = { class: "mb-6 flex items-start justify-between gap-4" }, ot = { class: "text-2xl font-bold" }, ut = { class: "text-muted-foreground" }, rt = { class: "flex shrink-0 items-center gap-2" }, dt = { class: "mt-1 list-disc list-inside space-y-1" }, ct = { class: "font-medium" }, ht = /* @__PURE__ */ V({
  __name: "[id]",
  setup(i) {
    const a = we(() => String(Ce.params.id)), n = z(), l = z(!1), d = z(!1), p = z(!1), w = Re(Ee({
      name: J(),
      description: ze(J(), ""),
      active: Ve(),
      config: Fe(J(), oe()),
      triggers: Me(oe())
    })), { handleSubmit: _, resetForm: o, values: f, errors: c } = Pe(w, {
      initialValues: {
        name: "hello",
        description: "",
        active: !1,
        config: {},
        triggers: []
      }
    }), R = _(async (m) => {
      d.value = !0;
      const [g] = await W.try(`/api/zbackup/plans/${a.value}`, {
        method: "PATCH",
        data: {
          name: m.name,
          description: m.description,
          active: m.active,
          config: m.config,
          triggers: n.value?.triggers || []
        }
      });
      if (g) {
        d.value = !1, Q.error($t("Failed to update."));
        return;
      }
      n.value && (n.value.name = m.name, n.value.description = m.description, n.value.active = m.active, n.value.config = m.config, n.value.triggers = n.value.triggers || []), setTimeout(() => {
        d.value = !1, Q.success($t("Updated successfully."));
      }, 800);
    });
    function B() {
      const m = {
        name: "",
        description: "",
        active: !1,
        config: {},
        triggers: []
      };
      n.value && o({ values: m });
    }
    async function A(m) {
      p.value = !0;
      const [g] = await W.try(`/api/zbackup/plans/${a.value}/backup`, {
        method: "POST",
        data: m
      });
      if (g) {
        p.value = !1;
        return;
      }
      setTimeout(() => {
        Q.success($t("Executed")), p.value = !1;
      }, 800);
    }
    async function _e() {
      l.value = !0;
      const [m, g] = await W.try(`/api/zbackup/plans/${a.value}`);
      if (m) {
        l.value = !1, Q.error($t("Failed to load plan details.")), Ae.push("/admin/zbackup/plans");
        return;
      }
      n.value = g, l.value = !1, o({
        values: {
          name: g.name,
          description: g.description || "",
          active: g.active || !1,
          config: g.config || {},
          triggers: g.triggers || []
        }
      });
    }
    async function le() {
      n.value || await _e();
    }
    return ee(le), ke(le), (m, g) => (h(), O(
      ie,
      null,
      [
        l.value ? (h(), O("div", lt, [
          $(
            "div",
            nt,
            u(m.$t("Loading...")),
            1
            /* TEXT */
          )
        ])) : U("v-if", !0),
        !l.value && n.value ? (h(), O(
          "form",
          {
            key: 1,
            onSubmit: g[4] || (g[4] = De(
              //@ts-ignore
              (...M) => s(R) && s(R)(...M),
              ["prevent"]
            ))
          },
          [
            $("div", it, [
              $("div", null, [
                $(
                  "h1",
                  ot,
                  u(m.$t("Plan")),
                  1
                  /* TEXT */
                ),
                $(
                  "p",
                  ut,
                  u(m.$t("Edit plan details and configuration.")),
                  1
                  /* TEXT */
                )
              ]),
              $("div", rt, [
                e(j, {
                  type: "button",
                  variant: "outline",
                  onClick: B
                }, {
                  default: t(() => [
                    e(F, { name: "RotateCcw" }),
                    r(
                      " " + u(m.$t("Reset")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(Ie, {
                  title: m.$t("Execute Backup"),
                  description: m.$t("Execute a manual backup for this plan."),
                  "submit-text": m.$t("Run Backup"),
                  handle: A,
                  fields: {
                    description: {
                      component: "text-field",
                      label: m.$t("Description")
                    }
                  }
                }, {
                  default: t(() => [
                    e(j, {
                      type: "button",
                      variant: "outline",
                      loading: p.value
                    }, {
                      default: t(() => [
                        e(F, { name: "play" }),
                        r(
                          " " + u(m.$t("Execute")),
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
                e(j, {
                  type: "submit",
                  loading: d.value
                }, {
                  default: t(() => [
                    r(
                      u(m.$t("Save")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])
              ])
            ]),
            Object.keys(s(c)).length ? (h(), y(s(ue), {
              key: 0,
              variant: "destructive",
              class: "mb-6"
            }, {
              default: t(() => [
                e(s(re), null, {
                  default: t(() => [
                    r(
                      u(m.$t("Please fix the following errors before saving")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(s(de), null, {
                  default: t(() => [
                    $("ul", dt, [
                      (h(!0), O(
                        ie,
                        null,
                        Se(s(c), (M, ne) => (h(), O("li", { key: ne }, [
                          $(
                            "span",
                            ct,
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
            n.value.strategy === "dump_connection" ? (h(), y(Ke, {
              key: 1,
              plan: n.value,
              "onUpdate:plan": g[0] || (g[0] = (M) => n.value = M)
            }, null, 8, ["plan"])) : n.value.strategy === "dump_postgres" ? (h(), y(Je, {
              key: 2,
              plan: n.value,
              "onUpdate:plan": g[1] || (g[1] = (M) => n.value = M)
            }, null, 8, ["plan"])) : n.value.strategy === "dump_sqlite" ? (h(), y(We, {
              key: 3,
              plan: n.value,
              "onUpdate:plan": g[2] || (g[2] = (M) => n.value = M)
            }, null, 8, ["plan"])) : n.value.strategy === "restic" ? (h(), y(at, {
              key: 4,
              plan: n.value,
              "onUpdate:plan": g[3] || (g[3] = (M) => n.value = M)
            }, null, 8, ["plan"])) : (h(), y(s(ue), {
              key: 5,
              variant: "destructive"
            }, {
              default: t(() => [
                e(s(re), null, {
                  default: t(() => [
                    r(
                      u(m.$t("Unsupported strategy")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(s(de), null, {
                  default: t(() => [
                    r(
                      u(m.$t('No form is available for strategy ":strategy".', { strategy: n.value.strategy })),
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
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
export {
  ht as default
};
