const e = await globalThis.importAsync("#client/entities/module.entity.ts"), t = e.default || e, n = await globalThis.importAsync("#client/facades/menu.facade.ts"), r = n.default || n, i = await globalThis.importAsync("#client/facades/router.facade.ts"), a = i.default || i, o = await globalThis.importAsync("#client/guards/auth.guard.ts"), s = o.default || o;
//#region modules/mod/client/module.client.ts
var c = class extends t {
	async onLoad() {
		a.auto(/* @__PURE__ */ Object.assign({
			"./pages/admin/plans/[id].vue": () => import("./_id_-f6oDCQeG.js"),
			"./pages/admin/plans/index.vue": () => import("./plans-CUbM46bW.js"),
			"./pages/admin/snapshots/index.vue": () => import("./snapshots-GD6Egwja.js"),
			"./pages/admin/targets/[id].vue": () => import("./_id_-Cv8HKmlP.js")
		}), {
			strip: ["pages", "admin"],
			prefix: "/admin/zbackup",
			guards: [s]
		}), a.addRoute({
			path: "/admin/zbackup",
			redirect: "/admin/zbackup/plans"
		}), r.add({
			id: "zbackup-snapshots",
			layout: "admin",
			label: $t("Snapshots"),
			icon: "DatabaseBackup",
			group: $t("Backups"),
			to: "/admin/zbackup/snapshots"
		}), r.add({
			id: "zbackup-plans",
			layout: "admin",
			label: $t("Plans"),
			icon: "CalendarCheck",
			group: $t("Backups"),
			to: "/admin/zbackup/plans"
		});
	}
};
//#endregion
export { c as default };
