import { defineComponent as v, ref as p, openBlock as i, createElementBlock as k, Fragment as h, createVNode as o, unref as t, withCtx as l, createElementVNode as u, toDisplayString as $, createBlock as d } from "vue";
import { H as z } from "./components-CbgjsZpt.mjs";
import { h as _, e as C, a as r, Y as x } from "./index.es-CkLm2C0q.mjs";
import { g as N, Z as P, b as B } from "./index-B9rv2bDL.mjs";
class D {
  id;
  name;
  strategy;
  config;
  constructor(n) {
    Object.assign(this, n);
  }
}
const E = ["content"], H = /* @__PURE__ */ v({
  __name: "index",
  setup(f) {
    const n = p(), s = p([]), c = N({
      id: {
        component: "text-field",
        label: "ID"
      },
      name: {
        component: "text-field",
        label: $t("Name")
      },
      strategy: {
        component: "select",
        label: $t("Strategy"),
        labelKey: "label",
        valueKey: "id",
        descriptionKey: "description",
        fetch: "/api/zbackup/plans/strategies"
      }
    }), y = P([
      {
        id: "active",
        label: $t("Active"),
        field: "active",
        width: 80
      },
      {
        id: "id",
        label: "ID",
        field: "id"
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "strategy",
        label: $t("Strategy"),
        field: "strategy"
      },
      { id: "actions" }
    ]);
    async function g() {
      n.value?.load();
    }
    async function b(e) {
      s.value.push(e.id), await B(`/api/zbackup/plans/${e.id}`, {
        method: "PUT",
        data: {
          active: !e.active
        }
      }), setTimeout(() => {
        g(), s.value = s.value.filter((m) => m !== e.id);
      }, 500);
    }
    return (e, m) => (i(), k(
      h,
      null,
      [
        o(t(z), null, {
          default: l(() => [
            u(
              "title",
              null,
              $(e.$t("Plans")),
              1
              /* TEXT */
            ),
            u("meta", {
              name: "description",
              content: e.$t("Manage your backup plans")
            }, null, 8, E)
          ]),
          _: 1
          /* STABLE */
        }),
        o(_, {
          ref_key: "crudRef",
          ref: n,
          fetch: "/api/zbackup/plans",
          "fetch-destroy": "/api/zbackup/plans/:id",
          fields: t(c),
          "fields-edit": {
            name: t(c).name,
            cron: t(c).cron,
            max: t(c).max
          },
          columns: t(y),
          title: e.$t("Plans"),
          description: e.$t("Manage your backup plans"),
          serialize: (a) => new (t(D))(a),
          actions: ["create", "destroy"]
        }, {
          "row-active": l(({ row: a }) => [
            s.value.includes(a.id) ? (i(), d(r, {
              key: 0,
              name: "Loader2",
              class: "animate-spin"
            })) : (i(), d(x, {
              key: 1,
              "model-value": !!a.active,
              onClick: (K) => b(a)
            }, null, 8, ["model-value", "onClick"]))
          ]),
          "row-valid": l(({ row: a }) => [
            a.valid ? (i(), d(r, {
              key: 0,
              name: "CheckCircle2",
              class: "text-green-500 size-5"
            })) : (i(), d(r, {
              key: 1,
              name: "AlertCircle",
              class: "text-yellow-500 size-5"
            }))
          ]),
          "prepend-actions": l(({ row: a }) => [
            o(C, {
              size: "icon",
              variant: "ghost",
              to: `/admin/zbackup/plans/${a.id}`
            }, {
              default: l(() => [
                o(r, { name: "Edit" })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["to"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["fields", "fields-edit", "columns", "title", "description", "serialize"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
export {
  H as default
};
