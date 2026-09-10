import { defineComponent as b, ref as p, openBlock as i, createElementBlock as k, Fragment as $, createVNode as n, unref as t, withCtx as l, createElementVNode as u, toDisplayString as h, createBlock as d } from "vue";
import { H as _ } from "./components-C9f3-UCt.mjs";
import { $ as z, m as C, D as x, d as r, T as D } from "./index.es-BISz4hkw.mjs";
import { R as P, P as N, U as R } from "./index-C4oIW2_2.mjs";
class T {
  id;
  name;
  strategy;
  config;
  constructor(s) {
    Object.assign(this, s);
  }
}
const B = ["content"], w = /* @__PURE__ */ b({
  __name: "index",
  setup(f) {
    const s = p(), c = p([]), o = P({
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
    }), y = N([
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
        field: "strategy_label"
      },
      { id: "actions" }
    ]);
    async function g() {
      s.value?.load();
    }
    async function v(e) {
      c.value.push(e.id), await R(`/api/zbackup/plans/${e.id}`, {
        method: "PUT",
        data: {
          active: !e.active
        }
      }), setTimeout(() => {
        g(), c.value = c.value.filter((m) => m !== e.id);
      }, 500);
    }
    return (e, m) => (i(), k(
      $,
      null,
      [
        n(t(_), null, {
          default: l(() => [
            u(
              "title",
              null,
              h(e.$t("Plans")),
              1
              /* TEXT */
            ),
            u("meta", {
              name: "description",
              content: e.$t("Manage your backup plans")
            }, null, 8, B)
          ]),
          _: 1
          /* STABLE */
        }),
        n(z, null, {
          default: l(() => [
            n(C, {
              ref_key: "crudRef",
              ref: s,
              fetch: "/api/zbackup/plans",
              "fetch-destroy": "/api/zbackup/plans/:id",
              fields: t(o),
              "fields-edit": {
                name: t(o).name,
                cron: t(o).cron,
                max: t(o).max
              },
              columns: t(y),
              title: e.$t("Plans"),
              description: e.$t("Manage your backup plans"),
              serialize: (a) => new (t(T))(a),
              actions: ["create", "destroy"]
            }, {
              "row-active": l(({ row: a }) => [
                c.value.includes(a.id) ? (i(), d(r, {
                  key: 0,
                  name: "Loader2",
                  class: "animate-spin"
                })) : (i(), d(D, {
                  key: 1,
                  "model-value": !!a.active,
                  onClick: (E) => v(a)
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
                n(x, {
                  size: "icon",
                  variant: "ghost",
                  to: `/admin/zbackup/plans/${a.id}`
                }, {
                  default: l(() => [
                    n(r, { name: "Edit" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["to"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["fields", "fields-edit", "columns", "title", "description", "serialize"])
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
  w as default
};
