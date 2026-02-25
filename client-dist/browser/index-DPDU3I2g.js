import { u as F } from "./vue.Bm-NbY4b-Q5152MOJ.js";
const { defineComponent: T } = await globalThis.importAsync("vue"), { ref: f } = await globalThis.importAsync("vue"), { onBeforeUnmount: C } = await globalThis.importAsync("vue"), { watchEffect: $ } = await globalThis.importAsync("vue"), { createElementBlock: z } = await globalThis.importAsync("vue"), { openBlock: r } = await globalThis.importAsync("vue"), { Fragment: B } = await globalThis.importAsync("vue"), { createVNode: d } = await globalThis.importAsync("vue"), { unref: l } = await globalThis.importAsync("vue"), { withCtx: c } = await globalThis.importAsync("vue"), { createElementVNode: h } = await globalThis.importAsync("vue"), { toDisplayString: E } = await globalThis.importAsync("vue"), { createBlock: p } = await globalThis.importAsync("vue"), g = await globalThis.importAsync("#client/layouts/AppLayout.vue"), N = g.default || g, _ = await globalThis.importAsync("#client/components/PageCrud.vue"), P = _.default || _, { defineFormFields: x } = await globalThis.importAsync("#client/components/FormAutoFieldList.vue"), { defineColumns: I } = await globalThis.importAsync("#client/components/DataTable.vue"), b = await globalThis.importAsync("#client/components/Button.vue"), S = b.default || b, v = await globalThis.importAsync("#client/components/Icon.vue"), m = v.default || v, { $fetch: D } = await globalThis.importAsync("#client/utils"), A = await globalThis.importAsync("#client/components/ui/switch/Switch.vue"), H = A.default || A;
class L {
  static TRIGGER_PREFIX = "zbackups:plans";
  id;
  name;
  description;
  config;
  valid;
  active;
  strategy;
  strategy_label;
  strategy_fields;
  strategy_fields_sections;
  triggers;
  created_at;
  updated_at;
  constructor(e) {
    Object.assign(this, e);
  }
}
function w(i, e) {
  const a = i.type, t = a === "html" ? "htmlAttrs" : a === "body" ? "bodyAttrs" : a;
  if (typeof t != "string" || !(t in e))
    return;
  const s = i.props || {};
  if (i.children) {
    const u = "children";
    s.children = Array.isArray(i.children) ? i.children[0][u] : i[u];
  }
  Array.isArray(e[t]) ? e[t].push(s) : t === "title" ? e.title = s.children : e[t] = s;
}
function R(i) {
  const e = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const a of i)
    if (typeof a.type == "symbol" && Array.isArray(a.children))
      for (const t of a.children)
        w(t, e);
    else
      w(a, e);
  return e;
}
const V = /* @__PURE__ */ T({
  name: "Head",
  setup(i, { slots: e }) {
    const a = f({}), t = F(a);
    return C(() => {
      t.dispose();
    }), () => ($(() => {
      e.default && t.patch(R(e.default()));
    }), null);
  }
}), K = ["content"], G = /* @__PURE__ */ T({
  __name: "index",
  setup(i) {
    const e = f(), a = f([]), t = x({
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
    }), s = I([
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
    async function u() {
      e.value?.load();
    }
    async function k(n) {
      a.value.push(n.id), await D(`/api/zbackup/plans/${n.id}`, {
        method: "PUT",
        data: {
          active: !n.active
        }
      }), setTimeout(() => {
        u(), a.value = a.value.filter((y) => y !== n.id);
      }, 500);
    }
    return (n, y) => (r(), z(B, null, [
      d(l(V), null, {
        default: c(() => [
          h("title", null, E(n.$t("Plans")), 1),
          h("meta", {
            name: "description",
            content: n.$t("Manage your backup plans")
          }, null, 8, K)
        ]),
        _: 1
      }),
      d(N, null, {
        default: c(() => [
          d(P, {
            ref_key: "crudRef",
            ref: e,
            fetch: "/api/zbackup/plans",
            "fetch-destroy": "/api/zbackup/plans/:id",
            fields: l(t),
            "fields-edit": {
              name: l(t).name,
              cron: l(t).cron,
              max: l(t).max
            },
            columns: l(s),
            title: n.$t("Plans"),
            description: n.$t("Manage your backup plans"),
            serialize: (o) => new (l(L))(o),
            actions: ["create", "destroy"]
          }, {
            "row-active": c(({ row: o }) => [
              a.value.includes(o.id) ? (r(), p(m, {
                key: 0,
                name: "Loader2",
                class: "animate-spin"
              })) : (r(), p(H, {
                key: 1,
                "model-value": !!o.active,
                onClick: (O) => k(o)
              }, null, 8, ["model-value", "onClick"]))
            ]),
            "row-valid": c(({ row: o }) => [
              o.valid ? (r(), p(m, {
                key: 0,
                name: "CheckCircle2",
                class: "text-green-500 size-5"
              })) : (r(), p(m, {
                key: 1,
                name: "AlertCircle",
                class: "text-yellow-500 size-5"
              }))
            ]),
            "prepend-actions": c(({ row: o }) => [
              d(S, {
                size: "icon",
                variant: "ghost",
                to: `/admin/zbackup/plans/${o.id}`
              }, {
                default: c(() => [
                  d(m, { name: "Edit" })
                ]),
                _: 1
              }, 8, ["to"])
            ]),
            _: 1
          }, 8, ["fields", "fields-edit", "columns", "title", "description", "serialize"])
        ]),
        _: 1
      })
    ], 64));
  }
});
export {
  G as default
};
