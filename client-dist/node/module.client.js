const { useMenu } = await globalThis.importAsync("#client/composables/useMenu.ts");
const __module__Module__ = await globalThis.importAsync("#client/entities/module.entity.ts");
const Module = __module__Module__.default || __module__Module__;
const __module__router__ = await globalThis.importAsync("#client/facades/router.facade.ts");
const router = __module__router__.default || __module__router__;
const __module__authGuard__ = await globalThis.importAsync("#client/guards/auth.guard.ts");
const authGuard = __module__authGuard__.default || __module__authGuard__;
class MyModule extends Module {
  async onLoad() {
    const menu = useMenu();
    router.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/plans/[id].vue": () => import("./_id_-C5TsYL16.js"), "./pages/admin/plans/index.vue": () => import("./index-QDDtcLoD.js"), "./pages/admin/snapshots/index.vue": () => import("./index-CtPnb1m6.js"), "./pages/admin/targets/[id].vue": () => import("./_id_-CMFWpYg0.js") }), {
      strip: ["pages", "admin"],
      prefix: "/admin/zbackup",
      guards: [authGuard]
    });
    router.addRoute({
      path: "/admin/zbackup",
      redirect: "/admin/zbackup/plans"
    });
    menu.add({
      id: "zbackup-snapshots",
      label: $t("Snapshots"),
      icon: "DatabaseBackup",
      group: $t("Backups"),
      to: "/admin/zbackup/snapshots"
    });
    menu.add({
      id: "zbackup-plans",
      label: $t("Plans"),
      icon: "CalendarCheck",
      group: $t("Backups"),
      to: "/admin/zbackup/plans"
    });
  }
}
export {
  MyModule as default
};
