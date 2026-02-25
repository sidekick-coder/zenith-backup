const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { defineAsyncComponent } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { isRef } = await globalThis.importAsync("vue");
const { Fragment } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { resolveDynamicComponent } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderVNode } = await globalThis.importAsync("vue/server-renderer");
const { useRoute } = await globalThis.importAsync("vue-router");
import { useRouteQuery } from "@vueuse/router";
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { Tabs } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const { tryCatch } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
const __module__AppLayout__ = await globalThis.importAsync("#client/layouts/AppLayout.vue");
const AppLayout = __module__AppLayout__.default || __module__AppLayout__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const targetId = route.params.id;
    const tab = useRouteQuery("tab", "config");
    const target = ref();
    const plan = ref();
    const loading = ref(false);
    const tabs = computed(() => {
      const items = [
        {
          value: "snapshots",
          label: $t("Snapshots"),
          component: defineAsyncComponent(() => import("./SnapshotTable-744HqmDT.js"))
        }
      ];
      if (plan.value?.strategy === "tar") {
        items.splice(0, 0, {
          value: "config",
          label: $t("Config"),
          component: defineAsyncComponent(() => import("./TargetTarForm-DxdCtEaY.js"))
        });
      }
      return items;
    });
    async function loadTarget() {
      const [error, response] = await tryCatch(
        () => $fetch(`/api/backup/targets/${targetId}`, { method: "GET" })
      );
      if (error) {
        return;
      }
      target.value = response;
      loading.value = false;
    }
    async function loadPlan() {
      if (!target.value?.plan_id) {
        return;
      }
      const [error, response] = await tryCatch(() => $fetch(`/api/backup/plans/${target.value?.plan_id}`));
      if (error) {
        return;
      }
      plan.value = response;
    }
    async function load() {
      loading.value = true;
      await loadTarget();
      await loadPlan();
      setTimeout(() => {
        loading.value = false;
      }, 800);
    }
    onMounted(() => {
      load();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        breadcrumbs: [
          { label: _ctx.$t("Backup"), to: "/admin/backup" },
          { label: _ctx.$t("Plans"), to: "/admin/backup/plans" },
          { label: plan.value?.name || _ctx.$t("Plan"), to: `/admin/backup/plans/${plan.value?.id}` },
          { label: target.value?.name || _ctx.$t("Target Details") }
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-6 h-full"${_scopeId}><div class="w-full lg:w-4/12 xl:w-3/12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Card), { class: "h-fit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CardHeader), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CardTitle), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Target Details"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(CardDescription), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Basic information about this target"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(CardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(CardDescription), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(CardContent), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (loading.value) {
                          _push4(`<div class="space-y-4"${_scopeId3}><div class="animate-pulse"${_scopeId3}><div class="h-4 bg-gray-200 rounded w-3/4 mb-2"${_scopeId3}></div><div class="h-3 bg-gray-100 rounded w-1/2"${_scopeId3}></div></div><div class="animate-pulse"${_scopeId3}><div class="h-4 bg-gray-200 rounded w-3/4 mb-2"${_scopeId3}></div><div class="h-3 bg-gray-100 rounded w-1/2"${_scopeId3}></div></div><div class="animate-pulse"${_scopeId3}><div class="h-4 bg-gray-200 rounded w-3/4 mb-2"${_scopeId3}></div><div class="h-3 bg-gray-100 rounded w-full"${_scopeId3}></div></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!loading.value && target.value) {
                          _push4(`<div class="space-y-6"${_scopeId3}><div${_scopeId3}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("ID"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border"${_scopeId3}>${ssrInterpolate(target.value.id)}</p></div><div${_scopeId3}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("Path"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all"${_scopeId3}>${ssrInterpolate(target.value.path)}</p></div><div${_scopeId3}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("Created At"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border"${_scopeId3}>${ssrInterpolate(new Date(target.value.created_at).toLocaleString())}</p></div><div${_scopeId3}><label class="text-sm font-medium text-gray-700 block mb-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("Updated At"))}</label><p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border"${_scopeId3}>${ssrInterpolate(new Date(target.value.updated_at).toLocaleString())}</p></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!loading.value && !target.value) {
                          _push4(`<div class="text-center py-8"${_scopeId3}><p class="text-gray-500"${_scopeId3}>${ssrInterpolate(_ctx.$t("Target not found"))}</p></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          loading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-4"
                          }, [
                            createVNode("div", { class: "animate-pulse" }, [
                              createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                              createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                            ]),
                            createVNode("div", { class: "animate-pulse" }, [
                              createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                              createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                            ]),
                            createVNode("div", { class: "animate-pulse" }, [
                              createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                              createVNode("div", { class: "h-3 bg-gray-100 rounded w-full" })
                            ])
                          ])) : createCommentVNode("", true),
                          !loading.value && target.value ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "space-y-6"
                          }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("ID")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(target.value.id), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Path")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, toDisplayString(target.value.path), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Created At")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.created_at).toLocaleString()), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Updated At")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.updated_at).toLocaleString()), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          !loading.value && !target.value ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "text-center py-8"
                          }, [
                            createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("Target not found")), 1)
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(CardTitle), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(CardDescription), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CardContent), null, {
                      default: withCtx(() => [
                        loading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          createVNode("div", { class: "animate-pulse" }, [
                            createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                            createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                          ]),
                          createVNode("div", { class: "animate-pulse" }, [
                            createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                            createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                          ]),
                          createVNode("div", { class: "animate-pulse" }, [
                            createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                            createVNode("div", { class: "h-3 bg-gray-100 rounded w-full" })
                          ])
                        ])) : createCommentVNode("", true),
                        !loading.value && target.value ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "space-y-6"
                        }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("ID")), 1),
                            createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(target.value.id), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Path")), 1),
                            createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, toDisplayString(target.value.path), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Created At")), 1),
                            createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.created_at).toLocaleString()), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Updated At")), 1),
                            createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.updated_at).toLocaleString()), 1)
                          ])
                        ])) : createCommentVNode("", true),
                        !loading.value && !target.value ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "text-center py-8"
                        }, [
                          createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("Target not found")), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Tabs), {
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
              "default-value": "general"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsList), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(tabs.value, (t) => {
                          _push4(ssrRenderComponent(unref(TabsTrigger), {
                            key: t.value,
                            value: t.value,
                            class: "min-w-60"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(t.label)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(t.label), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
                            return openBlock(), createBlock(unref(TabsTrigger), {
                              key: t.value,
                              value: t.value,
                              class: "min-w-60"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(t.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(tabs.value, (t) => {
                    _push3(ssrRenderComponent(unref(TabsContent), {
                      key: t.value,
                      value: t.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (t.component && plan.value && target.value) {
                            ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(t.component), {
                              target: target.value,
                              "onUpdate:target": ($event) => target.value = $event,
                              plan: plan.value,
                              "onUpdate:plan": ($event) => plan.value = $event,
                              "plan-id": plan.value.id,
                              "target-id": target.value.id
                            }, null), _parent4, _scopeId3);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            t.component && plan.value && target.value ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
                              key: 0,
                              target: target.value,
                              "onUpdate:target": ($event) => target.value = $event,
                              plan: plan.value,
                              "onUpdate:plan": ($event) => plan.value = $event,
                              "plan-id": plan.value.id,
                              "target-id": target.value.id
                            }, null, 40, ["target", "onUpdate:target", "plan", "onUpdate:plan", "plan-id", "target-id"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsList), null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
                          return openBlock(), createBlock(unref(TabsTrigger), {
                            key: t.value,
                            value: t.value,
                            class: "min-w-60"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(t.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
                      return openBlock(), createBlock(unref(TabsContent), {
                        key: t.value,
                        value: t.value
                      }, {
                        default: withCtx(() => [
                          t.component && plan.value && target.value ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
                            key: 0,
                            target: target.value,
                            "onUpdate:target": ($event) => target.value = $event,
                            plan: plan.value,
                            "onUpdate:plan": ($event) => plan.value = $event,
                            "plan-id": plan.value.id,
                            "target-id": target.value.id
                          }, null, 40, ["target", "onUpdate:target", "plan", "onUpdate:plan", "plan-id", "target-id"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-6 h-full" }, [
                createVNode("div", { class: "w-full lg:w-4/12 xl:w-3/12" }, [
                  createVNode(unref(Card), { class: "h-fit" }, {
                    default: withCtx(() => [
                      createVNode(unref(CardHeader), null, {
                        default: withCtx(() => [
                          createVNode(unref(CardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Target Details")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(CardDescription), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Basic information about this target")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(CardContent), null, {
                        default: withCtx(() => [
                          loading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-4"
                          }, [
                            createVNode("div", { class: "animate-pulse" }, [
                              createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                              createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                            ]),
                            createVNode("div", { class: "animate-pulse" }, [
                              createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                              createVNode("div", { class: "h-3 bg-gray-100 rounded w-1/2" })
                            ]),
                            createVNode("div", { class: "animate-pulse" }, [
                              createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                              createVNode("div", { class: "h-3 bg-gray-100 rounded w-full" })
                            ])
                          ])) : createCommentVNode("", true),
                          !loading.value && target.value ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "space-y-6"
                          }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("ID")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(target.value.id), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Path")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all" }, toDisplayString(target.value.path), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Created At")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.created_at).toLocaleString()), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium text-gray-700 block mb-1" }, toDisplayString(_ctx.$t("Updated At")), 1),
                              createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-2 rounded border" }, toDisplayString(new Date(target.value.updated_at).toLocaleString()), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          !loading.value && !target.value ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "text-center py-8"
                          }, [
                            createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("Target not found")), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode(unref(Tabs), {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                    "default-value": "general"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(TabsList), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
                            return openBlock(), createBlock(unref(TabsTrigger), {
                              key: t.value,
                              value: t.value,
                              class: "min-w-60"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(t.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (t) => {
                        return openBlock(), createBlock(unref(TabsContent), {
                          key: t.value,
                          value: t.value
                        }, {
                          default: withCtx(() => [
                            t.component && plan.value && target.value ? (openBlock(), createBlock(resolveDynamicComponent(t.component), {
                              key: 0,
                              target: target.value,
                              "onUpdate:target": ($event) => target.value = $event,
                              plan: plan.value,
                              "onUpdate:plan": ($event) => plan.value = $event,
                              "plan-id": plan.value.id,
                              "target-id": target.value.id
                            }, null, 40, ["target", "onUpdate:target", "plan", "onUpdate:plan", "plan-id", "target-id"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/targets/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
