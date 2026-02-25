const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { resolveComponent } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
import { format } from "date-fns";
const __module__AppLayout__ = await globalThis.importAsync("#client/layouts/AppLayout.vue");
const AppLayout = __module__AppLayout__.default || __module__AppLayout__;
const __module__PageCrud__ = await globalThis.importAsync("#client/components/PageCrud.vue");
const PageCrud = __module__PageCrud__.default || __module__PageCrud__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
import { S as Snapshot } from "./snapshot.entity-DsurgNca.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const crudRef = ref();
    const columns = defineColumns([
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
        field: (row) => row.created_at ? format(new Date(row.created_at), "yyyy-MM-dd HH:mm:ss") : "-"
      },
      { id: "actions" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageCrud, {
              ref_key: "crudRef",
              ref: crudRef,
              fetch: "/api/zbackup/snapshots",
              "fetch-destroy": "/api/zbackup/plans/:plan_id/snapshots/:id",
              columns: unref(columns),
              title: _ctx.$t("Snapshots"),
              description: _ctx.$t("Snapshot list created from plans."),
              serialize: (row) => new (unref(Snapshot))(row),
              actions: ["destroy"]
            }, {
              "row-plan": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_router_link, {
                    class: "text-primary hover:underline",
                    to: `/admin/zbackup/plans/${row.plan_id}`
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.plan?.name || _ctx.$t("No plan"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.plan?.name || _ctx.$t("No plan")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_router_link, {
                      class: "text-primary hover:underline",
                      to: `/admin/zbackup/plans/${row.plan_id}`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.plan?.name || _ctx.$t("No plan")), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ];
                }
              }),
              "row-label": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(row.label || _ctx.$t("No label"))}</span>`);
                  if (row.description) {
                    _push3(`<div class="text-sm text-muted-foreground"${_scopeId2}>${ssrInterpolate(row.description)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("span", null, toDisplayString(row.label || _ctx.$t("No label")), 1),
                    row.description ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-muted-foreground"
                    }, toDisplayString(row.description), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(PageCrud, {
                ref_key: "crudRef",
                ref: crudRef,
                fetch: "/api/zbackup/snapshots",
                "fetch-destroy": "/api/zbackup/plans/:plan_id/snapshots/:id",
                columns: unref(columns),
                title: _ctx.$t("Snapshots"),
                description: _ctx.$t("Snapshot list created from plans."),
                serialize: (row) => new (unref(Snapshot))(row),
                actions: ["destroy"]
              }, {
                "row-plan": withCtx(({ row }) => [
                  createVNode(_component_router_link, {
                    class: "text-primary hover:underline",
                    to: `/admin/zbackup/plans/${row.plan_id}`
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.plan?.name || _ctx.$t("No plan")), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                "row-label": withCtx(({ row }) => [
                  createVNode("span", null, toDisplayString(row.label || _ctx.$t("No label")), 1),
                  row.description ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-sm text-muted-foreground"
                  }, toDisplayString(row.description), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["columns", "title", "description", "serialize"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/snapshots/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
