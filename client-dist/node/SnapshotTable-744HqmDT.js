const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { withModifiers } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { toast } = await globalThis.importAsync("vue-sonner");
import { format } from "date-fns";
const { useForm } = await globalThis.importAsync("vee-validate");
import { toTypedSchema } from "@vee-validate/valibot";
import * as v from "valibot";
const __module__FormTextField__ = await globalThis.importAsync("#client/components/FormTextField.vue");
const FormTextField = __module__FormTextField__.default || __module__FormTextField__;
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { Dialog } = await globalThis.importAsync("#client/components/ui/dialog");
const { DialogContent } = await globalThis.importAsync("#client/components/ui/dialog");
const { DialogHeader } = await globalThis.importAsync("#client/components/ui/dialog");
const { DialogTitle } = await globalThis.importAsync("#client/components/ui/dialog");
const { DialogDescription } = await globalThis.importAsync("#client/components/ui/dialog");
const { DialogFooter } = await globalThis.importAsync("#client/components/ui/dialog");
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const { tryCatch } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
const __module__DriveEntryPicker__ = await globalThis.importAsync("#client/components/DriveEntryPicker.vue");
const DriveEntryPicker = __module__DriveEntryPicker__.default || __module__DriveEntryPicker__;
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const __module__AlertButton__ = await globalThis.importAsync("#client/components/AlertButton.vue");
const AlertButton = __module__AlertButton__.default || __module__AlertButton__;
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
import { S as Snapshot } from "./snapshot.entity-DsurgNca.js";
const __module__ObjectInspect__ = await globalThis.importAsync("#client/components/ObjectInspect.vue");
const ObjectInspect = __module__ObjectInspect__.default || __module__ObjectInspect__;
const __module__DropdownMenu__ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenu.vue");
const DropdownMenu = __module__DropdownMenu__.default || __module__DropdownMenu__;
const __module__DropdownMenuTrigger__ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue");
const DropdownMenuTrigger = __module__DropdownMenuTrigger__.default || __module__DropdownMenuTrigger__;
const __module__DropdownMenuItem__ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuItem.vue");
const DropdownMenuItem = __module__DropdownMenuItem__.default || __module__DropdownMenuItem__;
const __module__DropdownMenuContent__ = await globalThis.importAsync("#client/components/ui/dropdown-menu/DropdownMenuContent.vue");
const DropdownMenuContent = __module__DropdownMenuContent__.default || __module__DropdownMenuContent__;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SnapshotRestoreDialog",
  __ssrInlineRender: true,
  props: {
    snapshot: {},
    planId: {}
  },
  emits: ["submit", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loading = ref(false);
    const schema = v.object({ restore_folder: v.optional(v.string(), "") });
    const { handleSubmit, values, setValues } = useForm({
      validationSchema: toTypedSchema(schema),
      initialValues: { restore_folder: "" }
    });
    const onSubmit = handleSubmit(async (payload) => {
      loading.value = true;
      const data = { snapshotId: props.snapshot.id };
      if (payload.restore_folder) {
        data.restore_folder = payload.restore_folder;
      }
      const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/restore`, {
        method: "POST",
        data
      }));
      if (error) {
        loading.value = false;
        return;
      }
      setTimeout(() => {
        loading.value = false;
        toast.success($t("Snapshot restored successfully."));
        emit("submit");
      }, 1e3);
    });
    function close() {
      emit("close");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        open: true,
        "onUpdate:open": close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogContent), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogHeader), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogTitle), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Restore Snapshot"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Restore Snapshot")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(DialogDescription), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Restore snapshot :0 to a specific location.", [__props.snapshot.id]))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Restore snapshot :0 to a specific location.", [__props.snapshot.id])), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogTitle), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Restore Snapshot")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(DialogDescription), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Restore snapshot :0 to a specific location.", [__props.snapshot.id])), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<form${_scopeId2}><div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(FormTextField, {
                    name: "restore_folder",
                    label: _ctx.$t("Restore Folder"),
                    placeholder: _ctx.$t("Leave empty to restore to original location"),
                    hint: _ctx.$t("Optional: Specify a custom folder to restore the snapshot to")
                  }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(DriveEntryPicker, {
                          "drive-id": "root",
                          class: "h-10",
                          "initial-path": unref(values).restore_folder,
                          "onUpdate:modelValue": ($event) => unref(setValues)({
                            restore_folder: $event[0]?.path || ""
                          })
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(DriveEntryPicker, {
                            "drive-id": "root",
                            class: "h-10",
                            "initial-path": unref(values).restore_folder,
                            "onUpdate:modelValue": ($event) => unref(setValues)({
                              restore_folder: $event[0]?.path || ""
                            })
                          }, null, 8, ["initial-path", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(DialogFooter), { class: "mt-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Button, {
                          variant: "outline",
                          onClick: close
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Cancel"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Cancel")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Button, {
                          type: "submit",
                          loading: loading.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Restore"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Restore")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(Button, {
                            variant: "outline",
                            onClick: close
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Cancel")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(Button, {
                            type: "submit",
                            loading: loading.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Restore")), 1)
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode(unref(DialogHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(DialogTitle), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Restore Snapshot")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(DialogDescription), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Restore snapshot :0 to a specific location.", [__props.snapshot.id])), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("form", {
                      onSubmit: withModifiers(unref(onSubmit), ["prevent"])
                    }, [
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode(FormTextField, {
                          name: "restore_folder",
                          label: _ctx.$t("Restore Folder"),
                          placeholder: _ctx.$t("Leave empty to restore to original location"),
                          hint: _ctx.$t("Optional: Specify a custom folder to restore the snapshot to")
                        }, {
                          append: withCtx(() => [
                            createVNode(DriveEntryPicker, {
                              "drive-id": "root",
                              class: "h-10",
                              "initial-path": unref(values).restore_folder,
                              "onUpdate:modelValue": ($event) => unref(setValues)({
                                restore_folder: $event[0]?.path || ""
                              })
                            }, null, 8, ["initial-path", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 8, ["label", "placeholder", "hint"])
                      ]),
                      createVNode(unref(DialogFooter), { class: "mt-6" }, {
                        default: withCtx(() => [
                          createVNode(Button, {
                            variant: "outline",
                            onClick: close
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Cancel")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(Button, {
                            type: "submit",
                            loading: loading.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Restore")), 1)
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogContent), null, {
                default: withCtx(() => [
                  createVNode(unref(DialogHeader), null, {
                    default: withCtx(() => [
                      createVNode(unref(DialogTitle), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Restore Snapshot")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(DialogDescription), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Restore snapshot :0 to a specific location.", [__props.snapshot.id])), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    onSubmit: withModifiers(unref(onSubmit), ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(FormTextField, {
                        name: "restore_folder",
                        label: _ctx.$t("Restore Folder"),
                        placeholder: _ctx.$t("Leave empty to restore to original location"),
                        hint: _ctx.$t("Optional: Specify a custom folder to restore the snapshot to")
                      }, {
                        append: withCtx(() => [
                          createVNode(DriveEntryPicker, {
                            "drive-id": "root",
                            class: "h-10",
                            "initial-path": unref(values).restore_folder,
                            "onUpdate:modelValue": ($event) => unref(setValues)({
                              restore_folder: $event[0]?.path || ""
                            })
                          }, null, 8, ["initial-path", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label", "placeholder", "hint"])
                    ]),
                    createVNode(unref(DialogFooter), { class: "mt-6" }, {
                      default: withCtx(() => [
                        createVNode(Button, {
                          variant: "outline",
                          onClick: close
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Cancel")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(Button, {
                          type: "submit",
                          loading: loading.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Restore")), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/SnapshotRestoreDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SnapshotTable",
  __ssrInlineRender: true,
  props: {
    planId: {}
  },
  setup(__props) {
    const props = __props;
    const snapshots = ref([]);
    const loading = ref(false);
    const inspect = ref();
    ref(null);
    const columns = defineColumns([
      {
        id: "id",
        label: $t("Snapshot ID"),
        field: "id"
      },
      {
        id: "description",
        label: $t("Description"),
        field: "description"
      },
      {
        id: "trigger",
        label: $t("Trigger"),
        field: "trigger_type"
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
    async function load() {
      loading.value = true;
      const url = `/api/zbackup/plans/${props.planId}/snapshots`;
      const [error, response] = await $fetch.try(url, { method: "GET" });
      if (error) {
        loading.value = false;
        return;
      }
      const items = response.items || [];
      snapshots.value = items.map((item) => new Snapshot(item));
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
    onMounted(load);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Card), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CardHeader), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(CardTitle), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("Snapshots"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("Snapshots")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(CardDescription), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("View and manage snapshots for this plan."))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("View and manage snapshots for this plan.")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(Button, {
                    variant: "outline",
                    onClick: load
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Icon, {
                          name: "refreshCw",
                          class: { "animate-spin": loading.value }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(Icon, {
                            name: "refreshCw",
                            class: { "animate-spin": loading.value }
                          }, null, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode(unref(CardTitle), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Snapshots")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(CardDescription), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("View and manage snapshots for this plan.")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Button, {
                        variant: "outline",
                        onClick: load
                      }, {
                        default: withCtx(() => [
                          createVNode(Icon, {
                            name: "refreshCw",
                            class: { "animate-spin": loading.value }
                          }, null, 8, ["class"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CardContent), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (inspect.value) {
                    _push3(ssrRenderComponent(ObjectInspect, {
                      "model-value": inspect.value,
                      open: true,
                      "onUpdate:open": (val) => {
                        if (!val) inspect.value = void 0;
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="hidden"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "hidden" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(DataTable, {
                    rows: snapshots.value,
                    columns: unref(columns),
                    loading: loading.value
                  }, {
                    "row-actions": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2 justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(AlertButton, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}/restore`,
                          tooltip: _ctx.$t("Restore this snapshot"),
                          description: _ctx.$t("Are you sure you want to restore this snapshot? This action cannot be stopped."),
                          "toast-on-success": _ctx.$t("Restore successfully."),
                          onFetched: load
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Icon, { name: "TimerReset" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Icon, { name: "TimerReset" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(AlertButton, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}`,
                          onFetched: load
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Icon, { name: "trash" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Icon, { name: "trash" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(DropdownMenu, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(DropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(Button, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="sr-only"${_scopeId6}>${ssrInterpolate(_ctx.$t("More"))}</span>`);
                                          _push7(ssrRenderComponent(Icon, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("More")), 1),
                                            createVNode(Icon, {
                                              name: "MoreVertical",
                                              class: "w-3 h-3 sm:w-4 sm:h-4"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(Button, {
                                        variant: "ghost",
                                        class: "w-8 h-8 p-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("More")), 1),
                                          createVNode(Icon, {
                                            name: "MoreVertical",
                                            class: "w-3 h-3 sm:w-4 sm:h-4"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(DropdownMenuContent, { class: "max-h-60 overflow-y-auto" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(DropdownMenuItem, {
                                      class: "cursor-pointer",
                                      onClick: ($event) => inspect.value = row.metadata
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.$t("Metadata"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("Metadata")), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(DropdownMenuItem, {
                                      class: "cursor-pointer",
                                      onClick: ($event) => inspect.value = row.data
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.$t("Data"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(DropdownMenuItem, {
                                        class: "cursor-pointer",
                                        onClick: ($event) => inspect.value = row.metadata
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("Metadata")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(DropdownMenuItem, {
                                        class: "cursor-pointer",
                                        onClick: ($event) => inspect.value = row.data
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(DropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(Button, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("More")), 1),
                                        createVNode(Icon, {
                                          name: "MoreVertical",
                                          class: "w-3 h-3 sm:w-4 sm:h-4"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(DropdownMenuItem, {
                                      class: "cursor-pointer",
                                      onClick: ($event) => inspect.value = row.metadata
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Metadata")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(DropdownMenuItem, {
                                      class: "cursor-pointer",
                                      onClick: ($event) => inspect.value = row.data
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                            createVNode(AlertButton, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "POST",
                              fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}/restore`,
                              tooltip: _ctx.$t("Restore this snapshot"),
                              description: _ctx.$t("Are you sure you want to restore this snapshot? This action cannot be stopped."),
                              "toast-on-success": _ctx.$t("Restore successfully."),
                              onFetched: load
                            }, {
                              default: withCtx(() => [
                                createVNode(Icon, { name: "TimerReset" })
                              ]),
                              _: 1
                            }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                            createVNode(AlertButton, {
                              variant: "ghost",
                              size: "sm",
                              "fetch-method": "DELETE",
                              fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}`,
                              onFetched: load
                            }, {
                              default: withCtx(() => [
                                createVNode(Icon, { name: "trash" })
                              ]),
                              _: 1
                            }, 8, ["fetch"]),
                            createVNode(DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(DropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(Button, {
                                      variant: "ghost",
                                      class: "w-8 h-8 p-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("More")), 1),
                                        createVNode(Icon, {
                                          name: "MoreVertical",
                                          class: "w-3 h-3 sm:w-4 sm:h-4"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(DropdownMenuItem, {
                                      class: "cursor-pointer",
                                      onClick: ($event) => inspect.value = row.metadata
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Metadata")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(DropdownMenuItem, {
                                      class: "cursor-pointer",
                                      onClick: ($event) => inspect.value = row.data
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    inspect.value ? (openBlock(), createBlock(ObjectInspect, {
                      key: 0,
                      "model-value": inspect.value,
                      open: true,
                      "onUpdate:open": (val) => {
                        if (!val) inspect.value = void 0;
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "hidden" })
                      ]),
                      _: 1
                    }, 8, ["model-value", "onUpdate:open"])) : createCommentVNode("", true),
                    createVNode(DataTable, {
                      rows: snapshots.value,
                      columns: unref(columns),
                      loading: loading.value
                    }, {
                      "row-actions": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                          createVNode(AlertButton, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "POST",
                            fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}/restore`,
                            tooltip: _ctx.$t("Restore this snapshot"),
                            description: _ctx.$t("Are you sure you want to restore this snapshot? This action cannot be stopped."),
                            "toast-on-success": _ctx.$t("Restore successfully."),
                            onFetched: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Icon, { name: "TimerReset" })
                            ]),
                            _: 1
                          }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                          createVNode(AlertButton, {
                            variant: "ghost",
                            size: "sm",
                            "fetch-method": "DELETE",
                            fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}`,
                            onFetched: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Icon, { name: "trash" })
                            ]),
                            _: 1
                          }, 8, ["fetch"]),
                          createVNode(DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(DropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(Button, {
                                    variant: "ghost",
                                    class: "w-8 h-8 p-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("More")), 1),
                                      createVNode(Icon, {
                                        name: "MoreVertical",
                                        class: "w-3 h-3 sm:w-4 sm:h-4"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto" }, {
                                default: withCtx(() => [
                                  createVNode(DropdownMenuItem, {
                                    class: "cursor-pointer",
                                    onClick: ($event) => inspect.value = row.metadata
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("Metadata")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(DropdownMenuItem, {
                                    class: "cursor-pointer",
                                    onClick: ($event) => inspect.value = row.data
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rows", "columns", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CardHeader), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode(unref(CardTitle), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Snapshots")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(CardDescription), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("View and manage snapshots for this plan.")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(Button, {
                      variant: "outline",
                      onClick: load
                    }, {
                      default: withCtx(() => [
                        createVNode(Icon, {
                          name: "refreshCw",
                          class: { "animate-spin": loading.value }
                        }, null, 8, ["class"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(CardContent), null, {
                default: withCtx(() => [
                  inspect.value ? (openBlock(), createBlock(ObjectInspect, {
                    key: 0,
                    "model-value": inspect.value,
                    open: true,
                    "onUpdate:open": (val) => {
                      if (!val) inspect.value = void 0;
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "hidden" })
                    ]),
                    _: 1
                  }, 8, ["model-value", "onUpdate:open"])) : createCommentVNode("", true),
                  createVNode(DataTable, {
                    rows: snapshots.value,
                    columns: unref(columns),
                    loading: loading.value
                  }, {
                    "row-actions": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                        createVNode(AlertButton, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "POST",
                          fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}/restore`,
                          tooltip: _ctx.$t("Restore this snapshot"),
                          description: _ctx.$t("Are you sure you want to restore this snapshot? This action cannot be stopped."),
                          "toast-on-success": _ctx.$t("Restore successfully."),
                          onFetched: load
                        }, {
                          default: withCtx(() => [
                            createVNode(Icon, { name: "TimerReset" })
                          ]),
                          _: 1
                        }, 8, ["fetch", "tooltip", "description", "toast-on-success"]),
                        createVNode(AlertButton, {
                          variant: "ghost",
                          size: "sm",
                          "fetch-method": "DELETE",
                          fetch: `/api/zbackup/plans/${__props.planId}/snapshots/${row.id}`,
                          onFetched: load
                        }, {
                          default: withCtx(() => [
                            createVNode(Icon, { name: "trash" })
                          ]),
                          _: 1
                        }, 8, ["fetch"]),
                        createVNode(DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(DropdownMenuTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(Button, {
                                  variant: "ghost",
                                  class: "w-8 h-8 p-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("More")), 1),
                                    createVNode(Icon, {
                                      name: "MoreVertical",
                                      class: "w-3 h-3 sm:w-4 sm:h-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(DropdownMenuContent, { class: "max-h-60 overflow-y-auto" }, {
                              default: withCtx(() => [
                                createVNode(DropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => inspect.value = row.metadata
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Metadata")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(DropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => inspect.value = row.data
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 1
                  }, 8, ["rows", "columns", "loading"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/SnapshotTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
