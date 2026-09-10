import { Switch as o } from "@sidekick-coder/zenith-kit/components";
import { useSSRContext as n } from "vue";
const e = o.setup;
o.setup = (s, c) => {
  const t = n();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("legacy/client/components/ui/switch/Switch.vue"), e ? e(s, c) : void 0;
};
