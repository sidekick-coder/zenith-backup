import { Switch as s } from "@sidekick-coder/zenith-kit/components";
import { useSSRContext as n } from "vue";
const e = s.setup;
s.setup = (o, c) => {
  const t = n();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("src/legacy/client/components/ui/switch/Switch.vue"), e ? e(o, c) : void 0;
};
