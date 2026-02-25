const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { Fragment } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderAttrs } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__Card__ = await globalThis.importAsync("#client/components/ui/card/Card.vue");
const Card = __module__Card__.default || __module__Card__;
const __module__CardHeader__ = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue");
const CardHeader = __module__CardHeader__.default || __module__CardHeader__;
const __module__CardTitle__ = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue");
const CardTitle = __module__CardTitle__.default || __module__CardTitle__;
const __module__CardDescription__ = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue");
const CardDescription = __module__CardDescription__.default || __module__CardDescription__;
const __module__CardContent__ = await globalThis.importAsync("#client/components/ui/card/CardContent.vue");
const CardContent = __module__CardContent__.default || __module__CardContent__;
const __module__CardFooter__ = await globalThis.importAsync("#client/components/ui/card/CardFooter.vue");
const CardFooter = __module__CardFooter__.default || __module__CardFooter__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const __module__FormAutoFieldList__ = await globalThis.importAsync("#client/components/FormAutoFieldList.vue");
const FormAutoFieldList = __module__FormAutoFieldList__.default || __module__FormAutoFieldList__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlanConfig",
  __ssrInlineRender: true,
  props: {
    plan: {}
  },
  setup(__props) {
    const props = __props;
    const saving = ref(false);
    const { handleSubmit } = useForm({
      initialValues: props.plan?.config || {}
    });
    handleSubmit(async (payload) => {
      saving.value = true;
      const [error] = await $fetch.try(`/api/zbackup/plans/${props.plan.id}`, {
        method: "PATCH",
        data: { config: payload }
      });
      if (error) {
        saving.value = false;
        return;
      }
      setTimeout(() => {
        toast.success($t("Updated successfully"));
        saving.value = false;
      }, 800);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.plan.strategy_fields && Object.keys(__props.plan.strategy_fields).length) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(CardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Config"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Config")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Configure the backup strategy for the plan."))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Configure the backup strategy for the plan.")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(CardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Config")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(CardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Configure the backup strategy for the plan.")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CardContent, { class: "space-y-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (props.plan.strategy_fields) {
                      _push3(ssrRenderComponent(FormAutoFieldList, {
                        fields: props.plan.strategy_fields
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      props.plan.strategy_fields ? (openBlock(), createBlock(FormAutoFieldList, {
                        key: 0,
                        fields: props.plan.strategy_fields
                      }, null, 8, ["fields"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(__props.plan.strategy_fields_sections, (section) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(CardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(section.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(section.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (section.description) {
                      _push3(ssrRenderComponent(CardDescription, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(section.description)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(section.description), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(CardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(section.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      section.description ? (openBlock(), createBlock(CardDescription, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(section.description), 1)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CardContent, { class: "space-y-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(FormAutoFieldList, {
                      fields: section.fields
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(FormAutoFieldList, {
                        fields: section.fields
                      }, null, 8, ["fields"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(CardFooter, { class: "flex justify-end gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Button, {
                    type: "submit",
                    loading: saving.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("Save"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Button, {
                      type: "submit",
                      loading: saving.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              __props.plan.strategy_fields && Object.keys(__props.plan.strategy_fields).length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(CardHeader, null, {
                  default: withCtx(() => [
                    createVNode(CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Config")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Configure the backup strategy for the plan.")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(CardContent, { class: "space-y-6" }, {
                  default: withCtx(() => [
                    props.plan.strategy_fields ? (openBlock(), createBlock(FormAutoFieldList, {
                      key: 0,
                      fields: props.plan.strategy_fields
                    }, null, 8, ["fields"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ], 64)) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(__props.plan.strategy_fields_sections, (section) => {
                return openBlock(), createBlock(Fragment, {
                  key: section.title
                }, [
                  createVNode(CardHeader, null, {
                    default: withCtx(() => [
                      createVNode(CardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(section.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      section.description ? (openBlock(), createBlock(CardDescription, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(section.description), 1)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(CardContent, { class: "space-y-6" }, {
                    default: withCtx(() => [
                      createVNode(FormAutoFieldList, {
                        fields: section.fields
                      }, null, 8, ["fields"])
                    ]),
                    _: 2
                  }, 1024)
                ], 64);
              }), 128)),
              createVNode(CardFooter, { class: "flex justify-end gap-4" }, {
                default: withCtx(() => [
                  createVNode(Button, {
                    type: "submit",
                    loading: saving.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/PlanConfig.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
