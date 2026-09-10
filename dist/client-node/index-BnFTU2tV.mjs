import { useSSRContext as h, defineComponent as M, ref as z, unref as r, withCtx as u, createVNode as f, toDisplayString as N, openBlock as v, createBlock as g } from "vue";
import { ssrRenderComponent as c, ssrInterpolate as F, ssrRenderAttr as I } from "vue/server-renderer";
import { Head as L } from "@unhead/vue/components";
import { PageCrud as y, ZButton as x, Icon as i, Switch as S } from "@sidekick-coder/zenith-kit/components";
import { defineFormFields as T, defineColumns as j, $fetch as w } from "@sidekick-coder/zenith-kit/client";
import "./Icon-Bds3_RR7.mjs";
import "./Switch-DESO__XK.mjs";
class H {
  id;
  name;
  strategy;
  config;
  constructor(s) {
    Object.assign(this, s);
  }
}
const P = y.setup;
y.setup = (m, s) => {
  const n = h();
  return (n.modules || (n.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/PageCrud.vue"), P ? P(m, s) : void 0;
};
const A = /* @__PURE__ */ M({
  __name: "index",
  __ssrInlineRender: !0,
  setup(m) {
    const s = z(), n = z([]), p = T({
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
    }), B = j([
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
    async function D() {
      s.value?.load();
    }
    async function $(a) {
      n.value.push(a.id), await w(`/api/zbackup/plans/${a.id}`, {
        method: "PUT",
        data: {
          active: !a.active
        }
      }), setTimeout(() => {
        D(), n.value = n.value.filter((d) => d !== a.id);
      }, 500);
    }
    return (a, d, k, O) => {
      d("<!--[-->"), d(c(r(L), null, {
        default: u((e, t, o, l) => {
          if (t)
            t(`<title${l}>${F(a.$t("Plans"))}</title><meta name="description"${I("content", a.$t("Manage your backup plans"))}${l}>`);
          else
            return [
              f(
                "title",
                null,
                N(a.$t("Plans")),
                1
                /* TEXT */
              ),
              f("meta", {
                name: "description",
                content: a.$t("Manage your backup plans")
              }, null, 8, ["content"])
            ];
        }),
        _: 1
        /* STABLE */
      }, k)), d(c(y, {
        ref_key: "crudRef",
        ref: s,
        fetch: "/api/zbackup/plans",
        "fetch-destroy": "/api/zbackup/plans/:id",
        fields: r(p),
        "fields-edit": {
          name: r(p).name,
          cron: r(p).cron,
          max: r(p).max
        },
        columns: r(B),
        title: a.$t("Plans"),
        description: a.$t("Manage your backup plans"),
        serialize: (e) => new (r(H))(e),
        actions: ["create", "destroy"]
      }, {
        "row-active": u(({ row: e }, t, o, l) => {
          if (t)
            n.value.includes(e.id) ? t(c(i, {
              name: "Loader2",
              class: "animate-spin"
            }, null, o, l)) : t(c(S, {
              "model-value": !!e.active,
              onClick: (b) => $(e)
            }, null, o, l));
          else
            return [
              n.value.includes(e.id) ? (v(), g(i, {
                key: 0,
                name: "Loader2",
                class: "animate-spin"
              })) : (v(), g(S, {
                key: 1,
                "model-value": !!e.active,
                onClick: (b) => $(e)
              }, null, 8, ["model-value", "onClick"]))
            ];
        }),
        "row-valid": u(({ row: e }, t, o, l) => {
          if (t)
            e.valid ? t(c(i, {
              name: "CheckCircle2",
              class: "text-green-500 size-5"
            }, null, o, l)) : t(c(i, {
              name: "AlertCircle",
              class: "text-yellow-500 size-5"
            }, null, o, l));
          else
            return [
              e.valid ? (v(), g(i, {
                key: 0,
                name: "CheckCircle2",
                class: "text-green-500 size-5"
              })) : (v(), g(i, {
                key: 1,
                name: "AlertCircle",
                class: "text-yellow-500 size-5"
              }))
            ];
        }),
        "prepend-actions": u(({ row: e }, t, o, l) => {
          if (t)
            t(c(x, {
              size: "icon",
              variant: "ghost",
              to: `/admin/zbackup/plans/${e.id}`
            }, {
              default: u((b, C, E, K) => {
                if (C)
                  C(c(i, { name: "Edit" }, null, E, K));
                else
                  return [
                    f(i, { name: "Edit" })
                  ];
              }),
              _: 2
              /* DYNAMIC */
            }, o, l));
          else
            return [
              f(x, {
                size: "icon",
                variant: "ghost",
                to: `/admin/zbackup/plans/${e.id}`
              }, {
                default: u(() => [
                  f(i, { name: "Edit" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["to"])
            ];
        }),
        _: 1
        /* STABLE */
      }, k)), d("<!--]-->");
    };
  }
}), R = A.setup;
A.setup = (m, s) => {
  const n = h();
  return (n.modules || (n.modules = /* @__PURE__ */ new Set())).add("src/client/pages/plans/index.vue"), R ? R(m, s) : void 0;
};
export {
  A as default
};
