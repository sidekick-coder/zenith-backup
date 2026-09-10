import { ZButton as u, Icon as c } from "@sidekick-coder/zenith-kit/components";
import { useSSRContext as r } from "vue";
const s = u.setup;
u.setup = (e, o) => {
  const t = r();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/Button.vue"), s ? s(e, o) : void 0;
};
const n = c.setup;
c.setup = (e, o) => {
  const t = r();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/Icon.vue"), n ? n(e, o) : void 0;
};
