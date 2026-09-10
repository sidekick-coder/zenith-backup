import { AdminLayout as d, ZButton as m, Icon as l } from "@sidekick-coder/zenith-kit/components";
import { useSSRContext as s } from "vue";
const n = d.setup;
d.setup = (e, o) => {
  const t = s();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("legacy/client/layouts/AdminLayout.vue"), n ? n(e, o) : void 0;
};
const u = m.setup;
m.setup = (e, o) => {
  const t = s();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/Button.vue"), u ? u(e, o) : void 0;
};
const c = l.setup;
l.setup = (e, o) => {
  const t = s();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/Icon.vue"), c ? c(e, o) : void 0;
};
