import { menu as a, router as t, authGuard as s, PluginEntity as n, lifecycle as i } from "@sidekick-coder/zenith-kit/client";
import { LifecycleHook as o } from "@sidekick-coder/zenith-kit/shared";
class r extends o {
  async onLoad() {
    a.add({
      layout: "admin",
      label: $t("Plans"),
      icon: "FileText",
      group: $t("Backups"),
      to: "/admin/zbackup/plans"
    }), a.add({
      layout: "admin",
      label: $t("Triggers"),
      icon: "Clock",
      group: $t("Backups"),
      to: "/admin/zbackup/triggers"
    });
  }
}
const l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r
}, Symbol.toStringTag, { value: "Module" }));
class u extends o {
  async onLoad() {
    t.addRoute({
      path: "/admin/zbackup",
      redirect: "/admin/zbackup/plans"
    }), t.auto(/* @__PURE__ */ Object.assign({ "../pages/plans/[id].vue": () => import("./_id_-fbsKETgk.mjs"), "../pages/plans/index.vue": () => import("./index-51QSpNdn.mjs"), "../pages/triggers/index.vue": () => import("./index-D5yTyYbl.mjs") }), {
      strip: ["pages"],
      prefix: "/admin/zbackup",
      guards: [s]
    });
  }
}
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: u
}, Symbol.toStringTag, { value: "Module" }));
class g extends n {
  async load() {
    i.addImports(/* @__PURE__ */ Object.assign({ "./hooks/menu.ts": l, "./hooks/routes.ts": d }));
  }
}
export {
  g as default
};
