import { useSSRContext as w, defineComponent as F, ref as A, unref as a, withCtx as s, createVNode as r, toDisplayString as I, openBlock as u, createBlock as m } from "vue";
import { ssrRenderComponent as c, ssrInterpolate as T, ssrRenderAttr as j } from "vue/server-renderer";
import { Head as H } from "@unhead/vue/components";
import "./Icon-ChfrlFM4.mjs";
import { PageCrud as $, AdminLayout as O, ZButton as C, Icon as n, Switch as z } from "@sidekick-coder/zenith-kit/components";
import { defineFormFields as U, defineColumns as V, $fetch as Z } from "@sidekick-coder/zenith-kit/client";
import "./Switch-Be24nWx0.mjs";
class E {
  id;
  name;
  strategy;
  config;
  constructor(o) {
    Object.assign(this, o);
  }
}
const L = $.setup;
$.setup = (y, o) => {
  const l = w();
  return (l.modules || (l.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/PageCrud.vue"), L ? L(y, o) : void 0;
};
const B = /* @__PURE__ */ F({
  __name: "index",
  __ssrInlineRender: !0,
  setup(y) {
    const o = A(), l = A([]), d = U({
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
    }), x = V([
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
    async function D() {
      o.value?.load();
    }
    async function b(t) {
      l.value.push(t.id), await Z(`/api/zbackup/plans/${t.id}`, {
        method: "PUT",
        data: {
          active: !t.active
        }
      }), setTimeout(() => {
        D(), l.value = l.value.filter((v) => v !== t.id);
      }, 500);
    }
    return (t, v, P, q) => {
      v("<!--[-->"), v(c(a(H), null, {
        default: s((K, k, S, g) => {
          if (k)
            k(`<title${g}>${T(t.$t("Plans"))}</title><meta name="description"${j("content", t.$t("Manage your backup plans"))}${g}>`);
          else
            return [
              r(
                "title",
                null,
                I(t.$t("Plans")),
                1
                /* TEXT */
              ),
              r("meta", {
                name: "description",
                content: t.$t("Manage your backup plans")
              }, null, 8, ["content"])
            ];
        }),
        _: 1
        /* STABLE */
      }, P)), v(c(O, null, {
        default: s((K, k, S, g) => {
          if (k)
            k(c($, {
              ref_key: "crudRef",
              ref: o,
              fetch: "/api/zbackup/plans",
              "fetch-destroy": "/api/zbackup/plans/:id",
              fields: a(d),
              "fields-edit": {
                name: a(d).name,
                cron: a(d).cron,
                max: a(d).max
              },
              columns: a(x),
              title: t.$t("Plans"),
              description: t.$t("Manage your backup plans"),
              serialize: (e) => new (a(E))(e),
              actions: ["create", "destroy"]
            }, {
              "row-active": s(({ row: e }, i, p, f) => {
                if (i)
                  l.value.includes(e.id) ? i(c(n, {
                    name: "Loader2",
                    class: "animate-spin"
                  }, null, p, f)) : i(c(z, {
                    "model-value": !!e.active,
                    onClick: (h) => b(e)
                  }, null, p, f));
                else
                  return [
                    l.value.includes(e.id) ? (u(), m(n, {
                      key: 0,
                      name: "Loader2",
                      class: "animate-spin"
                    })) : (u(), m(z, {
                      key: 1,
                      "model-value": !!e.active,
                      onClick: (h) => b(e)
                    }, null, 8, ["model-value", "onClick"]))
                  ];
              }),
              "row-valid": s(({ row: e }, i, p, f) => {
                if (i)
                  e.valid ? i(c(n, {
                    name: "CheckCircle2",
                    class: "text-green-500 size-5"
                  }, null, p, f)) : i(c(n, {
                    name: "AlertCircle",
                    class: "text-yellow-500 size-5"
                  }, null, p, f));
                else
                  return [
                    e.valid ? (u(), m(n, {
                      key: 0,
                      name: "CheckCircle2",
                      class: "text-green-500 size-5"
                    })) : (u(), m(n, {
                      key: 1,
                      name: "AlertCircle",
                      class: "text-yellow-500 size-5"
                    }))
                  ];
              }),
              "prepend-actions": s(({ row: e }, i, p, f) => {
                if (i)
                  i(c(C, {
                    size: "icon",
                    variant: "ghost",
                    to: `/admin/zbackup/plans/${e.id}`
                  }, {
                    default: s((h, R, N, _) => {
                      if (R)
                        R(c(n, { name: "Edit" }, null, N, _));
                      else
                        return [
                          r(n, { name: "Edit" })
                        ];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, p, f));
                else
                  return [
                    r(C, {
                      size: "icon",
                      variant: "ghost",
                      to: `/admin/zbackup/plans/${e.id}`
                    }, {
                      default: s(() => [
                        r(n, { name: "Edit" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["to"])
                  ];
              }),
              _: 1
              /* STABLE */
            }, S, g));
          else
            return [
              r($, {
                ref_key: "crudRef",
                ref: o,
                fetch: "/api/zbackup/plans",
                "fetch-destroy": "/api/zbackup/plans/:id",
                fields: a(d),
                "fields-edit": {
                  name: a(d).name,
                  cron: a(d).cron,
                  max: a(d).max
                },
                columns: a(x),
                title: t.$t("Plans"),
                description: t.$t("Manage your backup plans"),
                serialize: (e) => new (a(E))(e),
                actions: ["create", "destroy"]
              }, {
                "row-active": s(({ row: e }) => [
                  l.value.includes(e.id) ? (u(), m(n, {
                    key: 0,
                    name: "Loader2",
                    class: "animate-spin"
                  })) : (u(), m(z, {
                    key: 1,
                    "model-value": !!e.active,
                    onClick: (i) => b(e)
                  }, null, 8, ["model-value", "onClick"]))
                ]),
                "row-valid": s(({ row: e }) => [
                  e.valid ? (u(), m(n, {
                    key: 0,
                    name: "CheckCircle2",
                    class: "text-green-500 size-5"
                  })) : (u(), m(n, {
                    key: 1,
                    name: "AlertCircle",
                    class: "text-yellow-500 size-5"
                  }))
                ]),
                "prepend-actions": s(({ row: e }) => [
                  r(C, {
                    size: "icon",
                    variant: "ghost",
                    to: `/admin/zbackup/plans/${e.id}`
                  }, {
                    default: s(() => [
                      r(n, { name: "Edit" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["to"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["fields", "fields-edit", "columns", "title", "description", "serialize"])
            ];
        }),
        _: 1
        /* STABLE */
      }, P)), v("<!--]-->");
    };
  }
}), M = B.setup;
B.setup = (y, o) => {
  const l = w();
  return (l.modules || (l.modules = /* @__PURE__ */ new Set())).add("src/client/pages/plans/index.vue"), M ? M(y, o) : void 0;
};
export {
  B as default
};
