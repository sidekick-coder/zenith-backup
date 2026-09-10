import { menu as t, router as o, authGuard as i, PluginEntity as r, lifecycle as u } from "@sidekick-coder/zenith-kit/client";
import { LifecycleHook as n } from "@sidekick-coder/zenith-kit/shared";
class l extends n {
  async onLoad() {
    t.add({
      layout: "admin",
      label: $t("Plans"),
      icon: "FileText",
      group: $t("Backups"),
      to: "/admin/zbackup/plans"
    }), t.add({
      layout: "admin",
      label: $t("Triggers"),
      icon: "Clock",
      group: $t("Backups"),
      to: "/admin/zbackup/triggers"
    });
  }
}
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l
}, Symbol.toStringTag, { value: "Module" }));
class p extends n {
  async onLoad() {
    o.addRoute({
      path: "/admin/zbackup",
      redirect: "/admin/zbackup/plans"
    }), o.auto(/* @__PURE__ */ Object.assign({ "../pages/plans/[id].vue": () => import("./_id_-BriKuaRN.mjs"), "../pages/plans/index.vue": () => import("./index-BnFTU2tV.mjs"), "../pages/triggers/index.vue": () => import("./index-D9OJ2yXe.mjs") }), {
      strip: ["pages"],
      prefix: "/admin/zbackup",
      guards: [i],
      refine: (s) => s.map((a) => (a.meta = { layout: "admin" }, a))
    });
  }
}
const c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: p
}, Symbol.toStringTag, { value: "Module" }));
class _ extends r {
  async load() {
    u.addImports(/* @__PURE__ */ Object.assign({ "./hooks/menu.ts": d, "./hooks/routes.ts": c }));
  }
}
export {
  _ as default
};
