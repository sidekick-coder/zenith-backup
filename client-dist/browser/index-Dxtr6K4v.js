import { f as w, S as C } from "./snapshot.entity-Cf_ZlVq5.js";
const { defineComponent: u } = await globalThis.importAsync("vue"), { ref: m } = await globalThis.importAsync("vue"), { resolveComponent: y } = await globalThis.importAsync("vue"), { createBlock: f } = await globalThis.importAsync("vue"), { openBlock: i } = await globalThis.importAsync("vue"), { withCtx: o } = await globalThis.importAsync("vue"), { createVNode: n } = await globalThis.importAsync("vue"), { unref: l } = await globalThis.importAsync("vue"), { createElementVNode: _ } = await globalThis.importAsync("vue"), { createElementBlock: b } = await globalThis.importAsync("vue"), { createCommentVNode: h } = await globalThis.importAsync("vue"), { toDisplayString: a } = await globalThis.importAsync("vue"), { createTextVNode: g } = await globalThis.importAsync("vue"), s = await globalThis.importAsync("#client/layouts/AppLayout.vue"), v = s.default || s, c = await globalThis.importAsync("#client/components/PageCrud.vue"), A = c.default || c, { defineColumns: T } = await globalThis.importAsync("#client/components/DataTable.vue"), k = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, S = /* @__PURE__ */ u({
  __name: "index",
  setup(N) {
    const r = m(), p = T([
      {
        id: "id",
        label: "ID",
        field: "id"
      },
      {
        id: "plan",
        label: $t("Plan")
      },
      {
        id: "description",
        label: $t("Description"),
        field: "description"
      },
      {
        id: "origin",
        label: $t("Origin"),
        field: "origin"
      },
      {
        id: "size",
        label: $t("Size"),
        field: "humanSize"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (t) => t.created_at ? w(new Date(t.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
      },
      { id: "actions" }
    ]);
    return (t, $) => {
      const d = y("router-link");
      return i(), f(v, null, {
        default: o(() => [
          n(A, {
            ref_key: "crudRef",
            ref: r,
            fetch: "/api/zbackup/snapshots",
            "fetch-destroy": "/api/zbackup/plans/:plan_id/snapshots/:id",
            columns: l(p),
            title: t.$t("Snapshots"),
            description: t.$t("Snapshot list created from plans."),
            serialize: (e) => new (l(C))(e),
            actions: ["destroy"]
          }, {
            "row-plan": o(({ row: e }) => [
              n(d, {
                class: "text-primary hover:underline",
                to: `/admin/zbackup/plans/${e.plan_id}`
              }, {
                default: o(() => [
                  g(a(e.plan?.name || t.$t("No plan")), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]),
            "row-label": o(({ row: e }) => [
              _("span", null, a(e.label || t.$t("No label")), 1),
              e.description ? (i(), b("div", k, a(e.description), 1)) : h("", !0)
            ]),
            _: 1
          }, 8, ["columns", "title", "description", "serialize"])
        ]),
        _: 1
      });
    };
  }
});
export {
  S as default
};
