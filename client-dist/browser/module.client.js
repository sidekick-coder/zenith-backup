const { useMenu: o } = await globalThis.importAsync("#client/composables/useMenu.ts"), s = await globalThis.importAsync("#client/entities/module.entity.ts"), u = s.default || s, t = await globalThis.importAsync("#client/facades/router.facade.ts"), e = t.default || t, n = await globalThis.importAsync("#client/guards/auth.guard.ts"), i = n.default || n;
class p extends u {
  async onLoad() {
    const a = o();
    e.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/plans/[id].vue": () => import("./_id_-CuCfWeKu.js"), "./pages/admin/plans/index.vue": () => import("./index-DPDU3I2g.js"), "./pages/admin/snapshots/index.vue": () => import("./index-Dxtr6K4v.js"), "./pages/admin/targets/[id].vue": () => import("./_id_-CXfAB_Re.js") }), {
      strip: ["pages", "admin"],
      prefix: "/admin/zbackup",
      guards: [i]
    }), e.addRoute({
      path: "/admin/zbackup",
      redirect: "/admin/zbackup/plans"
    }), a.add({
      id: "zbackup-snapshots",
      label: $t("Snapshots"),
      icon: "DatabaseBackup",
      group: $t("Backups"),
      to: "/admin/zbackup/snapshots"
    }), a.add({
      id: "zbackup-plans",
      label: $t("Plans"),
      icon: "CalendarCheck",
      group: $t("Backups"),
      to: "/admin/zbackup/plans"
    });
  }
}
export {
  p as default
};
