const a = await globalThis.importAsync("#client/entities/module.entity.ts"), o = a.default || a, t = await globalThis.importAsync("#client/facades/menu.facade.ts"), s = t.default || t, e = await globalThis.importAsync("#client/facades/router.facade.ts"), n = e.default || e, d = await globalThis.importAsync("#client/guards/auth.guard.ts"), i = d.default || d;
class l extends o {
  async onLoad() {
    n.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/plans/[id].vue": () => import("./_id_-BYINBmdO.js"), "./pages/admin/plans/index.vue": () => import("./index-B6P8mg9F.js"), "./pages/admin/snapshots/index.vue": () => import("./index-BUgvKvB-.js"), "./pages/admin/targets/[id].vue": () => import("./_id_-BiIWnX_n.js") }), {
      strip: ["pages", "admin"],
      prefix: "/admin/zbackup",
      guards: [i]
    }), n.addRoute({
      path: "/admin/zbackup",
      redirect: "/admin/zbackup/plans"
    }), s.add({
      id: "zbackup-snapshots",
      layout: "admin",
      label: $t("Snapshots"),
      icon: "DatabaseBackup",
      group: $t("Backups"),
      to: "/admin/zbackup/snapshots"
    }), s.add({
      id: "zbackup-plans",
      layout: "admin",
      label: $t("Plans"),
      icon: "CalendarCheck",
      group: $t("Backups"),
      to: "/admin/zbackup/plans"
    });
  }
}
export {
  l as default
};
