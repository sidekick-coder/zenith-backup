const { defineComponent: Y } = await globalThis.importAsync("vue"), { ref: O } = await globalThis.importAsync("vue"), { watch: ee } = await globalThis.importAsync("vue"), { createBlock: te } = await globalThis.importAsync("vue"), { openBlock: k } = await globalThis.importAsync("vue"), { unref: p } = await globalThis.importAsync("vue"), { withCtx: m } = await globalThis.importAsync("vue"), { createVNode: f } = await globalThis.importAsync("vue"), { createTextVNode: _ } = await globalThis.importAsync("vue"), { toDisplayString: A } = await globalThis.importAsync("vue"), { createElementBlock: E } = await globalThis.importAsync("vue"), { createCommentVNode: M } = await globalThis.importAsync("vue"), { createElementVNode: g } = await globalThis.importAsync("vue"), { withModifiers: ne } = await globalThis.importAsync("vue"), { isNotNestedPath: se } = await globalThis.importAsync("vee-validate"), { cleanupNonNestedPath: re } = await globalThis.importAsync("vee-validate"), { useForm: ie } = await globalThis.importAsync("vee-validate"), { toast: ae } = await globalThis.importAsync("vue-sonner"), V = await globalThis.importAsync("#client/components/FormTextField.vue"), B = V.default || V, F = await globalThis.importAsync("#client/components/Button.vue"), oe = F.default || F, { Card: le } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: ue } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: ce } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: pe } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: fe } = await globalThis.importAsync("#client/components/ui/card"), { $fetch: $ } = await globalThis.importAsync("#client/utils/fetcher.ts"), { tryCatch: D } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
var x;
// @__NO_SIDE_EFFECTS__
function j(e) {
  return {
    lang: e?.lang ?? x?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? x?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? x?.abortPipeEarly
  };
}
var de;
// @__NO_SIDE_EFFECTS__
function me(e) {
  return de?.get(e);
}
var ye;
// @__NO_SIDE_EFFECTS__
function he(e) {
  return ye?.get(e);
}
var ge;
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  return ge?.get(e)?.get(t);
}
// @__NO_SIDE_EFFECTS__
function C(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function y(e, t, n, s, r) {
  const a = r && "input" in r ? r.input : n.value, c = r?.expected ?? e.expects ?? null, o = r?.received ?? /* @__PURE__ */ C(a), l = {
    kind: e.kind,
    type: e.type,
    input: a,
    expected: c,
    received: o,
    message: `Invalid ${t}: ${c ? `Expected ${c} but r` : "R"}eceived ${o}`,
    requirement: e.requirement,
    path: r?.path,
    issues: r?.issues,
    lang: s.lang,
    abortEarly: s.abortEarly,
    abortPipeEarly: s.abortPipeEarly
  }, i = e.kind === "schema", u = r?.message ?? e.message ?? /* @__PURE__ */ be(e.reference, l.lang) ?? (i ? /* @__PURE__ */ he(l.lang) : null) ?? s.message ?? /* @__PURE__ */ me(l.lang);
  u !== void 0 && (l.message = typeof u == "function" ? (
    // @ts-expect-error
    u(l)
  ) : u), i && (n.typed = !1), n.issues ? n.issues.push(l) : n.issues = [l];
}
// @__NO_SIDE_EFFECTS__
function h(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ j());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  if (e.path) {
    let t = "";
    for (const n of e.path)
      if (typeof n.key == "string" || typeof n.key == "number")
        t ? t += `.${n.key}` : t += n.key;
      else
        return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  return {
    kind: "validation",
    type: "min_value",
    reference: H,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ C(e)}`,
    requirement: e,
    message: t,
    "~run"(n, s) {
      return n.typed && !(n.value >= this.requirement) && y(this, "value", n, s, {
        received: n.value instanceof Date ? n.value.toJSON() : /* @__PURE__ */ C(n.value)
      }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  return {
    kind: "validation",
    type: "regex",
    reference: J,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(n, s) {
      return n.typed && !this.requirement.test(n.value) && y(this, "format", n, s), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Te(e, t, n) {
  return typeof e.fallback == "function" ? (
    // @ts-expect-error
    e.fallback(t, n)
  ) : (
    // @ts-expect-error
    e.fallback
  );
}
// @__NO_SIDE_EFFECTS__
function S(e, t, n) {
  return typeof e.default == "function" ? (
    // @ts-expect-error
    e.default(t, n)
  ) : (
    // @ts-expect-error
    e.default
  );
}
// @__NO_SIDE_EFFECTS__
function L(e) {
  return {
    kind: "schema",
    type: "number",
    reference: L,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ h(this);
    },
    "~run"(t, n) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : y(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: R,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ h(this);
    },
    "~run"(n, s) {
      const r = n.value;
      if (r && typeof r == "object") {
        n.typed = !0, n.value = {};
        for (const a in this.entries) {
          const c = this.entries[a];
          if (a in r || (c.type === "exact_optional" || c.type === "optional" || c.type === "nullish") && // @ts-expect-error
          c.default !== void 0) {
            const o = a in r ? (
              // @ts-expect-error
              r[a]
            ) : /* @__PURE__ */ S(c), l = c["~run"]({ value: o }, s);
            if (l.issues) {
              const i = {
                type: "object",
                origin: "value",
                input: r,
                key: a,
                value: o
              };
              for (const u of l.issues)
                u.path ? u.path.unshift(i) : u.path = [i], n.issues?.push(u);
              if (n.issues || (n.issues = l.issues), s.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            l.typed || (n.typed = !1), n.value[a] = l.value;
          } else if (c.fallback !== void 0)
            n.value[a] = /* @__PURE__ */ Te(c);
          else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (y(this, "key", n, s, {
            input: void 0,
            expected: `"${a}"`,
            path: [
              {
                type: "object",
                origin: "key",
                input: r,
                key: a,
                // @ts-expect-error
                value: r[a]
              }
            ]
          }), s.abortEarly))
            break;
        }
      } else
        y(this, "type", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function v(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: v,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ h(this);
    },
    "~run"(n, s) {
      return n.value === void 0 && (this.default !== void 0 && (n.value = /* @__PURE__ */ S(this, n, s)), n.value === void 0) ? (n.typed = !0, n) : this.wrapped["~run"](n, s);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return {
    kind: "schema",
    type: "string",
    reference: Z,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ h(this);
    },
    "~run"(t, n) {
      return typeof t.value == "string" ? t.typed = !0 : y(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function q(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ h(this);
    },
    "~run"(t, n) {
      for (const s of e)
        if (s.kind !== "metadata") {
          if (t.issues && (s.kind === "schema" || s.kind === "transformation")) {
            t.typed = !1;
            break;
          }
          (!t.issues || !n.abortEarly && !n.abortPipeEarly) && (t = s["~run"](t, n));
        }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t, n) {
  const s = e["~run"]({ value: t }, /* @__PURE__ */ j(n));
  return {
    typed: s.typed,
    success: !s.issues,
    output: s.value,
    issues: s.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function ke(e, t, n) {
  const s = await e["~run"](
    { value: t },
    /* @__PURE__ */ j(n)
  );
  return {
    typed: s.typed,
    success: !s.issues,
    output: s.value,
    issues: s.issues
  };
}
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
const T = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function K(e) {
  return Number(e) >= 0;
}
function _e(e) {
  return typeof e == "object" && e !== null;
}
function Ae(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function I(e) {
  if (!_e(e) || Ae(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Q(e, t) {
  return Object.keys(t).forEach((n) => {
    if (I(t[n]) && I(e[n])) {
      e[n] || (e[n] = {}), Q(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
function $e(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let n = String(t[0]);
  for (let s = 1; s < t.length; s++) {
    if (K(t[s])) {
      n += `[${t[s]}]`;
      continue;
    }
    n += `.${t[s]}`;
  }
  return n;
}
function xe(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(s) {
      const r = await /* @__PURE__ */ ke(e, s, t);
      if (r.success)
        return {
          value: r.output,
          errors: []
        };
      const a = {};
      return W(r.issues, a), {
        errors: Object.values(a)
      };
    },
    cast(s) {
      if (e.async)
        return s;
      const r = /* @__PURE__ */ we(e, s, t);
      if (r.success)
        return r.output;
      const a = /* @__PURE__ */ S(/* @__PURE__ */ v(e));
      return T(a) && T(s) ? Q(a, s) : s;
    },
    describe(s) {
      try {
        if (!s)
          return {
            required: !G(e),
            exists: !0
          };
        const r = P(s, e);
        return r ? {
          required: !G(r),
          exists: !0
        } : {
          required: !1,
          exists: !1
        };
      } catch {
        return {
          required: !1,
          exists: !1
        };
      }
    }
  };
}
function W(e, t) {
  e.forEach((n) => {
    const s = $e(/* @__PURE__ */ ve(n) || "");
    n.issues && (W(n.issues.flatMap((r) => r.issues || []), t), !s) || (t[s] || (t[s] = { errors: [], path: s }), t[s].errors.push(n.message));
  });
}
function P(e, t) {
  var n, s, r, a;
  if (U(t))
    return (n = t.options.map((l) => P(e, l)).find(Boolean)) !== null && n !== void 0 ? n : null;
  if (z(t))
    return (s = t.options.map((l) => P(e, l)).find(Boolean)) !== null && s !== void 0 ? s : null;
  if (!b(t))
    return null;
  if (se(e))
    return t.entries[re(e)];
  const c = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let o = t;
  for (let l = 0; l <= c.length; l++) {
    const i = c[l];
    if (!i || !o)
      return o;
    if (U(o) && (o = (r = o.options.find((u) => b(u) && u.entries[i])) !== null && r !== void 0 ? r : o), z(o) && (o = (a = o.options.find((u) => b(u) && u.entries[i])) !== null && a !== void 0 ? a : o), b(o)) {
      o = o.entries[i] || null;
      continue;
    }
    K(i) && Ce(o) && (o = o.item);
  }
  return null;
}
function G(e) {
  return e.type === "optional";
}
function Ce(e) {
  return T(e) && "item" in e;
}
function b(e) {
  return T(e) && "entries" in e;
}
function U(e) {
  return e.type === "intersect";
}
function z(e) {
  return e.type === "variant";
}
const Pe = {
  key: 0,
  class: "space-y-4"
}, je = { class: "flex justify-end" }, Se = /* @__PURE__ */ Y({
  __name: "TargetTarForm",
  props: {
    target: {}
  },
  setup(e) {
    const t = e, n = O(!1), s = O(!1), r = xe(/* @__PURE__ */ R({
      slug: /* @__PURE__ */ v(/* @__PURE__ */ q(
        /* @__PURE__ */ Z(),
        /* @__PURE__ */ J(/^[a-zA-Z0-9-_]+$/, $t("Slug can only contain lowercase letters, numbers, hyphens and underscores"))
      )),
      max_snapshots: /* @__PURE__ */ v(/* @__PURE__ */ q(
        /* @__PURE__ */ L($t("Max snapshots must be a number")),
        /* @__PURE__ */ H(0, $t("Max snapshots must be 0 or greater"))
      ))
    })), { handleSubmit: a, setValues: c } = ie({ validationSchema: r });
    async function o() {
      if (!t.target?.id)
        return;
      n.value = !0;
      const [i, u] = await D(
        () => $(`/api/backup/targets/${t.target?.id}/metas`, { method: "GET" })
      );
      if (i) {
        n.value = !1;
        return;
      }
      const d = u.data, X = d.find((w) => w.name === "slug"), N = d.find((w) => w.name === "max_snapshots");
      c({
        slug: X?.value || void 0,
        max_snapshots: N?.value ? Number(N.value) : void 0
      }), n.value = !1;
    }
    const l = a(async (i) => {
      s.value = !0;
      const u = [
        $(`/api/backup/targets/${t.target?.id}/metas`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          data: {
            name: "slug",
            value: i.slug
          }
        }),
        $(`/api/backup/targets/${t.target?.id}/metas`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          data: {
            name: "max_snapshots",
            value: i.max_snapshots
          }
        })
      ], [d] = await D(() => Promise.all(u));
      if (d) {
        s.value = !1;
        return;
      }
      ae.success($t("Saved successfully")), s.value = !1;
    });
    return ee(() => t.target?.id, () => {
      t.target?.id && o();
    }, { immediate: !0 }), (i, u) => (k(), te(p(le), null, {
      default: m(() => [
        f(p(ue), null, {
          default: m(() => [
            f(p(ce), null, {
              default: m(() => [
                _(A(i.$t("Tar Configuration")), 1)
              ]),
              _: 1
            }),
            f(p(pe), null, {
              default: m(() => [
                _(A(i.$t("Configure tar-specific settings for this target")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        f(p(fe), null, {
          default: m(() => [
            n.value ? (k(), E("div", Pe, [...u[1] || (u[1] = [
              g("div", { class: "animate-pulse" }, [
                g("div", { class: "h-4 bg-gray-200 rounded w-1/4 mb-2" }),
                g("div", { class: "h-10 bg-gray-100 rounded" })
              ], -1)
            ])])) : M("", !0),
            n.value ? M("", !0) : (k(), E("form", {
              key: 1,
              class: "space-y-6",
              onSubmit: u[0] || (u[0] = ne(
                //@ts-ignore
                (...d) => p(l) && p(l)(...d),
                ["prevent"]
              ))
            }, [
              f(B, {
                name: "slug",
                label: i.$t("Slug"),
                placeholder: i.$t("my-app"),
                hint: i.$t("A unique identifier for this target. This is used to create files and map snapshots to the target")
              }, null, 8, ["label", "placeholder", "hint"]),
              f(B, {
                name: "max_snapshots",
                label: i.$t("Max Snapshots"),
                placeholder: i.$t("10"),
                hint: i.$t("Maximum number of backup snapshots to keep. Older snapshots will be automatically deleted when this limit is exceeded. Leave empty for unlimited snapshots."),
                type: "number"
              }, null, 8, ["label", "placeholder", "hint"]),
              g("div", je, [
                f(oe, {
                  type: "submit",
                  loading: s.value
                }, {
                  default: m(() => [
                    _(A(i.$t("Save")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ], 32))
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  Se as default
};
