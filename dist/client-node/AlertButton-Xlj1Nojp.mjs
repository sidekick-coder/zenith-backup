import { DialogForm as u, ZAlertButton as r } from "@sidekick-coder/zenith-kit/components";
import { useSSRContext as c } from "vue";
const s = u.setup;
u.setup = (e, o) => {
  const t = c();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/DialogForm.vue"), s ? s(e, o) : void 0;
};
const n = r.setup;
r.setup = (e, o) => {
  const t = c();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/AlertButton.vue"), n ? n(e, o) : void 0;
};
